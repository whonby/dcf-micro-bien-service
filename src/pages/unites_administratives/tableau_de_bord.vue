


<template>
  <div class="container-fluid">
     <!-- <h3 style="text-align:center">TABLEAU DE BORD : UNITE ADMINISTRATIVE</h3> -->
    <div class="quick-actions_homepage">
      <!-- <ul class="quick-actions"> -->
                               <ul class="quick-actions" style="margin:0px 180px">
         <!-- <li class="bg_lb span5"> <a href="#" style="color:black;"> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialTranferst))}}</span><h3>BUDGET TRANSFERT</h3></a> </li> -->

        <li class="bg_ly span5"> <a href="#" style="color:black;"> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{nbreUniteAdministratives}}</span><h3>NOMBRE UA</h3>  </a> </li>
        <li class="bg_lo span5"> <a href="#" style="color:black;"> <i class="icon-th"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(montantBudgetGeneralUa))}}</span><h3>BUDGET TOTAL</h3> </a> </li>
        <!-- <li class="bg_ls span5"> <a href="#" style="color:black;"> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{affichierTauxExecution}}%</span> <h3>TAUX EXECUTION</h3></a> </li> -->
  
      </ul>
     
    </div>
  </div>
</template>
  
<script>
    import {mapActions, mapGetters} from "vuex";

import { formatageSomme } from "../../../src/Repositories/Repository";
    import {admin,dcf,cf,noDCfNoAdmin} from "../../../src/Repositories/Auth"
export default {
  name:'tableaudebord',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ]
    };
  },
created() {


      console.log(this.getterUniteAdministrativeByUser)
},
    computed: {
    ...mapGetters("uniteadministrative", [
      "nombreTypeText",
      "nombreUniteAdministratives",
      "nombreArchivageDocument",
      "montantBudgetGeneral",
      "uniteAdministratives",
      "budgetGeneral",
      "jointureUaChapitreSection"
      // "nbreNouveauProjet"

      // "nbreArchivageNotes"
    ]),
      admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
      cf:cf,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
 
 nbreUniteAdministratives() {

          if(this.cf){
            let colect=[];
            
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.length
        }
        return this.uniteAdministratives.length

    },
 
 montantBudgetGeneralUa() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.budgetGeneral.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0);
        }

 return this.budgetGeneral.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0);

      
    },
 
 
 },
  methods: {
      ...mapActions('Utilisateurs', ['getUtilisateurs',"getRoles","getAffectation","getUniteAdminUser"]),
    formatageSomme:formatageSomme
  }
};
</script>



<style>


</style>
