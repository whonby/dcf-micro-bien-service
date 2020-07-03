
<template>
  <div class="container-fluid">
     <!-- <h3 style="text-align:center">TABLEAU DE BORD : UNITE ADMINISTRATIVE</h3> -->
    <div class="quick-actions_homepage">
      
                               <ul class="quick-actions" style="margin:0px 100px">
         <!-- <li class="bg_lb span4"> <a href="#" style="color:black;"> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{nombreUniteZoneValider}}</span><h3>Nbres Unités Zones</h3></a> </li> -->
         <li class="bg_ly span4"> <a href="#" style="color:black;"> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialTranferst))}}</span><h3>MONTANT INITIAL</h3>  </a> </li>
        <li class="bg_ly span4"> <a href="#" style="color:black;"> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{formatageSomme(parseFloat(MonantTransferer))}}</span><h3>MONTANT TRANSFERE</h3>  </a> </li>

        <li class="bg_ls span4"> <a href="#" style="color:black;"> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{TauxTransfert}}%</span> <h3>TAUX EXECUTION</h3></a> </li>
  
      </ul>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

import { formatageSomme } from "../../../src/Repositories/Repository";
import {admin,dcf,noDCfNoAdmin,cf} from '../../../src/Repositories/Auth';
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

  computed: {
    ...mapGetters("uniteadministrative", [
      "nombreTypeText",
      "nombreUniteAdministratives",
      "nombreArchivageDocument",
      "montantBudgetGeneral",
      "afficheTransfertValider",
      "nombreUniteZoneValider",
      "transferts",
      "getPersonnaliseBudgetGeneralParTransfert",
      "montantTransfert",
      "montantTransferer",
       "budgetGeneral",

     
    ]),
    
admin:admin,
dcf:dcf,
noDCfNoAdmin:noDCfNoAdmin,
cf:cf,
...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

   TauxTransfert() {
 
      
    const val = ((parseFloat(this.MonantTransferer) / parseFloat(this.afficherBudgetInitialTranferst))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    

    },
  afficherBudgetInitialTranferst() {
        if (this.cf){
            let colect=[];
            this.budgetGeneral.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                item.actived == 1
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.filter(items =>items.gdenature_id==6).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0)
        }

       return this.budgetGeneral.filter(items1 =>items1.gdenature_id==6 ).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0)

    },
    MonantTransferer() {
       // const st = this.search.toLowerCase();
        if (this.cf){
            let colect=[];
            this.transferts.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                 }
            })
             return colect.reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0);
           
        }

        return this.transferts.reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0);
       
        

    },
  },
  methods: {
    formatageSomme:formatageSomme
  }
};
</script>



<style>


</style>
