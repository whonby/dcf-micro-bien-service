  
<template>

  <div class="container-fluid">
    <div class="quick-actions_homepage">
      <h4 style="text-align: center;color:red;font-weight:bold;font-size:15px">TABLEAU DE BORD</h4>
 

<table class="table table-bordered table-striped">
         
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Unité administrative</label>
                  <div class="controls">
                    <select  class="span7" v-model="formData.uniteAdministrative_id">
                      <option></option>
                      <option
                        v-for="typeUniteA in ListedesUniteAdministrative"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
                
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Grande Nature</label>
                  <div class="controls">
                    <select  class="span7" v-model="formData.grandNature_id">
                      <option></option>
                      <option
                        v-for="typeUniteA in grandes_natures"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <!-- <td>
                <div class="control-group">
                  <label class="control-label">Type d'unité administrative</label>
                  <div class="controls">
                    <select  class="span5">
                      <option
                        v-for="typeUniteA in type_Unite_admins"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td> -->
            </tr>
</table>


                               <ul class="quick-actions" style="margin:0px 0px">
     

  <!-- FILTRER PAR GRANDE NATURE DE DEPENSE -->
   <template v-if="formData.grandNature_id != ''">
      
        <li  class="bg_lb span3"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(MontantGlobalParGrandNature(formData.grandNature_id)))}}</span><h4>INITIAL</h4></a> </li>
       <li class="bg_lg span3"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(ExecutionGlobalParGrandeNature(formData.grandNature_id)))}}</span><h4>EXECUTE</h4></a> </li>
      <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(MontantGlobalParGrandNature(formData.grandNature_id)-ExecutionGlobalParGrandeNature(formData.grandNature_id)))}}</span><h4>DISPONIBLE</h4></a> </li>
    <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{((ExecutionGlobalParGrandeNature(formData.grandNature_id))/MontantGlobalParGrandNature(formData.grandNature_id))*100}}%</span><h4>EXECUTION</h4></a> </li>
    
      <!-- FILTRER PAR UNITE D ADMINISTRATIVE -->
   </template>
  <template v-else-if="formData.uniteAdministrative_id != ''">
    
<li  class="bg_lb span3"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(MontantGlobalParUniteAdministrative(formData.uniteAdministrative_id)))}}</span><h4>INITIAL</h4></a> </li>
  <li class="bg_lg span3"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(ExecutionGlobalParUniteAdministrative(formData.uniteAdministrative_id)))}}</span><h4>EXECUTE</h4></a> </li>
  <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(MontantGlobalParUniteAdministrative(formData.uniteAdministrative_id)-ExecutionGlobalParUniteAdministrative(formData.uniteAdministrative_id)))}}</span><h4>DISPONIBLE</h4></a> </li>
   <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{((ExecutionGlobalParUniteAdministrative(formData.uniteAdministrative_id))/MontantGlobalParUniteAdministrative(formData.uniteAdministrative_id))*100}}%</span><h4>EXECUTION</h4></a> </li>
    
  </template>


     <template v-else>

     <li  class="bg_lb span3"> <a href="#" style="color:black;"><h4>BUDGET</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialGlobal))}}</span><h4>INITIAL</h4></a> </li>
    <li class="bg_lg span3"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierMontantGlobalDeConsommation))}}</span><h4>EXECUTE</h4></a> </li>
     <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialGlobal-affichierMontantGlobalDeConsommation))}}</span><h4>DISPONIBLE</h4></a> </li>
     <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{((affichierMontantGlobalDeConsommation)/afficherBudgetInitialGlobal)*100}}%</span><h4>EXECUTION</h4></a> </li>
     </template>
      </ul>
    
 
    </div>
<!--End-Action boxes-->    

<!--Chart-box-->    
   

  </div>

</template>



<script>
import { mapGetters, mapActions } from "vuex";
import {formatageSomme} from '../../../Repositories/Repository';
import {noDCfNoAdmin} from '../../../Repositories/Auth';
export default {
  data(){
    return{

      budgetGeneralCharge:"",
formData: {
        grandNature_id:"",
        uniteAdministrative_id:""
      },
    }
  },

   created() {
          //  this.detailBudget=this.getterBudgeCharge.find(item=>item.id== this.$route.params.id)
          this.budgetGeneralCharge=this.budgetGeneral.filter(item=>item.actived==1)
            console.log(this.budgetGeneralCharge)
        },
  computed:{
 ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "budgetGeneral",
                "afficheTransfertValider",
                "transferts"

            ]),
            
    ...mapGetters("bienService", ["getMandatPersonnaliserVise","getMandatPersonnaliserPersonnel","mandats"]),

       ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires"
            ]),
            
        noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

afficherBudgetInitialParGrandeNature() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneralCharge.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          
          return colect;
    
            
        }
          
         return this.budgetGeneralCharge;
    },
     MontantGlobalParGrandNature() {
      return id => {
        if (id != null && id != "") {
          return this.afficherBudgetInitialParGrandeNature.filter(element => element.gdenature_id == id).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0);
        }
      };
    },
    MontantGlobalParUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
          return this.afficherBudgetInitialParGrandeNature.filter(element => element.ua_id == id).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0);
        }
      };
    },
    afficherBudgetInitialGlobal() {
        
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
    ListedesUniteAdministrative() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect;
        }

 return this.uniteAdministratives;

      
    },


// CODE EXECUTION DU TRANSFERT PAR GRAND NATURE DE DEPENSE ET UNITE D ADMINISTRATIVE


budgetConsommerTransfert() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.transferts.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect;
        }
        return this.transferts;

    },
    MontantGlobalParTransfertParGrandNature() {
      return id => {
        if (id != null && id != "") {
          return this.budgetConsommerTransfert.filter(element => element.grandnatire_id == id).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.montant_total_contrat),0);
        }
      };
    },
    MontantGlobalParTransfertParUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
          return this.budgetConsommerTransfert.filter(element => element.ua_id == id).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.montant_total_contrat),0);
        }
      };
    },

    // CODE EXECUTION DU PERSONNEL PAR GRAND NATURE DE DEPENSE ET UNITE D ADMINISTRATIVE




budgetConsommerPersonnel() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.getMandatPersonnaliserPersonnel.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect;
        }
        return this.getMandatPersonnaliserPersonnel;

    },
    MontantGlobalParPersonnelParGrandNature() {
      return id => {
        if (id != null && id != "") {
          return this.budgetConsommerPersonnel.filter(element => element.grd_nature_id == id && element.marchetype == "perso").reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.montant_total_contrat),0);
        }
      };
    },
    MontantGlobalParPersonnelParUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
          return this.budgetConsommerPersonnel.filter(element => element.ua_id == id && element.marchetype == "perso").reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.montant_total_contrat),0);
        }
      };
    },

// CODE EXECUTION DU BIEN ET SERVICE PAR GRAND NATURE DE DEPENSE ET UNITE D ADMINISTRATIVE




afficherBudgetExcuterBienService() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.mandats.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect;
        }
        return this.mandats;

    },
    MontantGlobalParBienServiceParGrandNature() {
      return id => {
        if (id != null && id != "") {
          return this.afficherBudgetExcuterBienService.filter(element => element.grd_nature_id == id && element.marchetype==2 && element.decision_cf==8).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.total_general),0);
        }
      };
    },
    MontantGlobalParBienServiceParUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
          return this.afficherBudgetExcuterBienService.filter(element => element.ua_id == id && element.marchetype==2 && element.decision_cf==8).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.total_general),0);
        }
      };
    },


    
// CODE EXECUTION INVESTISSEMENT PAR GRAND NATURE DE DEPENSE ET UNITE D ADMINISTRATIVE




afficherBudgetExcuterInvetissement() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.mandats.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect;
        }
        return this.mandats;

    },
    MontantGlobalParInvetissementParGrandNature() {
      return id => {
        if (id != null && id != "") {
          return this.afficherBudgetExcuterInvetissement.filter(element => element.grd_nature_id == id && element.marchetype==1 && element.decision_cf==8).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.total_general),0);
        }
      };
    },
    MontantGlobalParInvetissementParUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
          return this.afficherBudgetExcuterInvetissement.filter(element => element.ua_id == id && element.marchetype==1 && element.decision_cf==8).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.total_general),0);
        }
      };
    },



ExecutionGlobalParGrandeNature() {
      return id => {
        if (id != null && id != "") {
          return this.budgetConsommerTransfert.filter(element => element.grandnatire_id == id).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.montant_total_contrat),0);
        }
        if (id != null && id != "") {
          return this.budgetConsommerPersonnel.filter(element => element.grd_nature_id == id && element.marchetype == "perso").reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.montant_total_contrat),0);
        }
        if (id != null && id != "") {
          return this.afficherBudgetExcuterBienService.filter(element => element.grd_nature_id == id && element.marchetype==2 && element.decision_cf==8).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.total_general),0);
        }
        if (id != null && id != "") {
          return this.afficherBudgetExcuterInvetissement.filter(element => element.grd_nature_id == id && element.marchetype==1 && element.decision_cf==8).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.total_general),0);
        }
      };
    },

ExecutionGlobalParUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
          return this.budgetConsommerTransfert.filter(element => element.ua_id == id).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.montant_total_contrat),0);
        }
        if (id != null && id != "") {
          return this.budgetConsommerPersonnel.filter(element => element.ua_id == id && element.marchetype == "perso").reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.montant_total_contrat),0);
        }
        if (id != null && id != "") {
          return this.afficherBudgetExcuterBienService.filter(element => element.ua_id == id && element.marchetype==2 && element.decision_cf==8).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.total_general),0);
        }
        if (id != null && id != "") {
          return this.afficherBudgetExcuterInvetissement.filter(element => element.ua_id == id && element.marchetype==1 && element.decision_cf==8).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.total_general),0);
        }
      };
    },
ConsommerglobaTransfert(){
 
    return this.budgetConsommerTransfert.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
},
ConsommerglobaPersonnel(){
 
    return this.budgetConsommerPersonnel.filter(element => element.marchetype == "perso").reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
},
ConsommerglobaBienService(){
 
    return this.afficherBudgetExcuterBienService.filter(element => element.marchetype==2 && element.decision_cf==8).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
},
ConsommerglobaInvertissement(){
 
    return this.afficherBudgetExcuterInvetissement.filter(element => element.marchetype==1 && element.decision_cf==8).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
},

affichierMontantGlobalDeConsommation() {
      const val = parseFloat(this.ConsommerglobaTransfert) + parseFloat(this.ConsommerglobaPersonnel)+parseFloat(this.ConsommerglobaBienService) + parseFloat(this.ConsommerglobaInvertissement);
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
  },

  methods:{
...mapActions('',['']),


 formatageSomme:formatageSomme
  }
}
</script>
<style>

</style>