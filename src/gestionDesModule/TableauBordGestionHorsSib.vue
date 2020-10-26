<template>
    <div>

        <h3 style="text-align:center">TABLEAU DE BORD : GESTION HORS SIB</h3>
        <div class="row-fluid">
      <div class="span6">
        <div class="quick-actions_homepage">
          <div class="widget-title"> <span class="icon"> <i class="icon-signal"></i> </span>
            <h5>BIENS SERVICES</h5>
          </div>
          <div >
            <ul class="quick-actions" >
                <li class="bg_lb span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialB))}}</span><h4>BIENS & SERVICES</h4></a> </li>
  <li class="bg_lg span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetExcuterBienService))}}</span><h4>EXECUTE</h4></a> </li>
    
            </ul>
            <ul class="quick-actions" >
                <li class="bg_lo span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponibleBienService))}}</span><h4>DISPONIBLE</h4></a> </li>
    <li class="bg_ly span5"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierTauxExecutionBienService}}%</span><h4>EXECUTION</h4></a> </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="span6">
        <div class="quick-actions_homepage">
          <div class="widget-title"> <span class="icon"> <i class="icon-signal"></i> </span>
            <h5>PERSONNEL</h5>
          </div>
          <ul class="quick-actions" >
                <li class="bg_lb span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialPersonnel))}}</span><h4>PERSONNEL</h4></a> </li>
  <li class="bg_lg span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(budgetConsommerPersonnel))}}</span><h4>EXECUTE</h4></a> </li>
   
            </ul>
            <ul class="quick-actions" >
                <li class="bg_lo span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponiblePersonnel))}}</span><h4>DISPONIBLE</h4></a> </li>
    <li class="bg_ly span5"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierTauxExecutionPersonnel}}%</span><h4>EXECUTION</h4></a> </li>

            </ul>
        </div>
      </div> -->
<div class="row-fluid">
      <div class="span6">
        <div class="quick-actions_homepage">
          <div class="widget-title"> <span class="icon"> <i class="icon-signal"></i> </span>
            <h5>INVESTISSEMENT</h5>
          </div>
          <ul class="quick-actions" >
                <li class="bg_lb span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialInvetissement))}}</span><h4>INVESTISSEMENT</h4></a> </li>
  <li class="bg_lg span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetExecutéInvestissement))}}</span><h4>EXECUTE</h4></a> </li>
    
            </ul>
            <ul class="quick-actions" >
                <li class="bg_lo span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponibleInvestissement))}}</span><h4>DISPONIBLE</h4></a> </li>
    <li class="bg_ly span5"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierTauxExecutionInvestissement}}%</span><h4>EXECUTION</h4></a> </li>
            </ul>
        </div>
      </div>
    </div>
    
      <!-- <div class="span6">
        <div class="quick-actions_homepage">
          <div class="widget-title"> <span class="icon"> <i class="icon-signal"></i> </span>
            <h5>TRANSFERT</h5>
          </div>
          <ul class="quick-actions" >
                <li class="bg_lb span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialTranferst))}}</span><h4>TRANSFERT</h4></a> </li>
  <li class="bg_lg span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(budgetConsommerTransfert))}}</span><h4>EXECUTE</h4></a> </li>
   
            </ul>
            <ul class="quick-actions" >
                <li class="bg_lo span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponibleTransfert))}}</span><h4>DISPONIBLE</h4></a> </li>
    <li class="bg_ly span5"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierTauxExecution}}%</span><h4>EXECUTION</h4></a> </li>

            </ul>
        </div>
      </div> -->
    </div>
    </div>

</template>


<script>

import { mapGetters, mapActions } from "vuex";
import {formatageSomme} from '../../src/Repositories/Repository';
import {noDCfNoAdmin} from '../../src/Repositories/Auth';
export default {
  data(){
    return{

      budgetGeneralCharge:""

    }
  },

   
  computed:{
 ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "budgetGeneral",
                "afficheTransfertValider",
                "transferts",
                "budgetEclate"

            ]),
            
    ...mapGetters("bienService", ["getMandatPersonnaliserVise","getMandatPersonnaliserPersonnel","mandats"]),

       ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires",
                "gestionModules"
            ]),
            
        noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
budgetConsommerPersonnel(){
 
    return this.getMandatPersonnaliserPersonnel.filter(element => element.marchetype == "perso" ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
},
affichierBudgetDisponiblePersonnel() {
      const val = parseFloat(this.afficherBudgetInitialPersonnel) - parseFloat(this.budgetConsommerPersonnel);
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
affichierTauxExecutionPersonnel() {
      const val = (parseFloat(this.budgetConsommerPersonnel) / parseFloat(this.afficherBudgetInitialPersonnel))*100;
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },





affichierBudgetDisponibleTransfert() {
      const val = parseFloat(this.afficherBudgetInitialTranferst) - parseFloat(this.budgetConsommerTransfert);
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },

affichierTauxExecution() {
      const val = (parseFloat(this.budgetConsommerTransfert) / parseFloat(this.afficherBudgetInitialTranferst))*100;
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
    
// afficherBudgetInitialTranferst(){
    
//       return this.budgetGeneral.filter(item =>item.gdenature_id==6).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0)
// },


afficherBudgetInitialTranferst() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item =>item.gdenature_id==6).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0)
        }
        return this.budgetGeneral.filter(item =>item.gdenature_id==6).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0)

    },





// budgetConsommerTransfert(){
 
//     return this.afficheTransfertValider.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
// },

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
            return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0);
        }
        return this.transferts.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0);

    },

// afficherBudgetInitialPersonnel(){
//  return this.budgetGeneral.filter(item =>item.gdenature_id==2).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)
// },
afficherBudgetInitialPersonnel() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetEclate.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item =>item.grandenature_id==2).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)
        }
        return this.budgetEclate.filter(item =>item.grandenature_id==2).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)

    },

// afficherBudgetInitialB(){
//  return this.budgetGeneral.filter(item => item.gdenature_id==5).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0) 

// },
afficherBudgetInitialB() {
        

        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetEclate.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item =>item.grandenature_id==5).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.dotation),0)
        }
        return this.budgetEclate.filter(item =>item.grandenature_id==5).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.dotation),0)

    },
//calcule du budget executer pour bien service

// afficherBudgetExcuterBienService(){
//   return this.getMandatPersonnaliserVise.filter(item => item.marchetype==2).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)
// },

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
            return colect.filter(item => item.marchetype==2 && item.decision_cf==8 && this.RecupererMarcheId(item.marche_id) ==1).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)
        }
        return this.mandats.filter(item => item.marchetype==2 && item.decision_cf==8 && this.RecupererMarcheId(item.marche_id) ==1).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)

    },
RecupererMarcheId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sib;
      }
      return 0
        }
      }
    },


affichierBudgetDisponibleBienService() {
      const val = parseFloat(this.afficherBudgetInitialB) - parseFloat(this.afficherBudgetExcuterBienService);
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
affichierTauxExecutionBienService() {
      const val = (parseFloat(this.afficherBudgetExcuterBienService) / parseFloat(this.afficherBudgetInitialB))*100;
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },

// afficher le montant du budget initial 

// afficherBudgetInitialInvetissement(){
//   return this.budgetGeneral.filter(item => item.gdenature_id==7).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale) , 0)
// },
anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
afficherBudgetInitialInvetissement() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetEclate.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item =>item.grandenature_id==7).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.dotation),0)
        }
        return this.budgetEclate.filter(item =>item.grandenature_id==7).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.dotation),0)

    },
afficherBudgetExecutéInvestissement() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.mandats.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item => item.marchetype==1 &&  item.decision_cf==8 &&  this.RecupererMarcheId(item.marche_id)==1).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)
        }
        return this.mandats.filter(item => item.marchetype==1 && item.decision_cf==8 &&  this.RecupererMarcheId(item.marche_id)==1).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)

    },
// calcule du budget executé d'investissement


// afficherBudgetExecutéInvestissement(){
//   return this.getMandatPersonnaliserVise.filter(item => item.marchetype==1).reduce((prec, cur)=>parseFloat(prec) + parseFloat(cur.total_general), 0)
// },


affichierBudgetDisponibleInvestissement() {
      const val = parseFloat(this.afficherBudgetInitialInvetissement) - parseFloat(this.afficherBudgetExecutéInvestissement);
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
affichierTauxExecutionInvestissement() {
      const val = (parseFloat(this.afficherBudgetExecutéInvestissement) / parseFloat(this.afficherBudgetInitialInvetissement))*100;
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
// afficher budget Personnel







 budgetPersonnel(){
                return unite_id=>{
                    let vM=this;
                    if(unite_id!='' && vM.budgetGeneralCharge!=""){

                        let budget=vM.budgetGeneralCharge.find(item=>{
                            if(item.gdenature_id==2  && item.ua_id==unite_id ){
                                return item
                            }
                        })

                        if(budget!=undefined){

                            return parseFloat(budget.Dotation_Initiale);
                        }
                        return 0
                    }
                    return 0
                }
            },


  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.gestionModules.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  
},
  methods:{
...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),


 formatageSomme:formatageSomme
  }
}
</script>
<style>
.flex{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
}
.square{
  width: 50px;
  height: 50px;
 
  color: #FAFAFA;
  text-align: center;
  margin-right: 5px;
  cursor: pointer;
  line-height: 50px;
}
.square:hover{
  opacity: 0.8;
}
.S{
  background-color:orange;
}
.I{
  background-color:orange;
}
.D{
  background-color:white;
  color: black;
}
.C{
  background-color:green;
  color: white;
}
.F{
 background-color:green;
  color: white;
}
</style>