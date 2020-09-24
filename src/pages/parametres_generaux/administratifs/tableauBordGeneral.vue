  
<template>

<!--breadcrumbs-->
  
<!--End-breadcrumbs-->

<!--Action boxes-->
  <div class="container-fluid">
    <div class="quick-actions_homepage">
      <h4 style="text-align: center;color:red;font-weight:bold;font-size:15px">TABLEAU DE BORD</h4>
 
                           <div class="widget-title">
                            <ul class="nav nav-tabs">
                                 <li class="active"><a data-toggle="tab" href="#tab4">BIENS & SERVICES</a></li>
                                <li class=""><a data-toggle="tab" href="#tab01">PERSONNELS</a></li>
                                <li class=""><a data-toggle="tab" href="#tab0145">TRANSFERTS</a></li>
                                <li class=""><a data-toggle="tab" href="#tab1">INVESTISSEMENTS</a></li>
                               
                                
                            </ul>
                        </div>


                         <div class="widget-content tab-content">
                         <div id="tab0145" class="tab-pane ">
                            


                           
    <div class="row-fluid">
      <div class="widget-box">
        <div class="widget-title bg_lg"><span class="icon"><i class="icon-signal"></i></span>
          <h5>Site Analytics</h5>
        </div>
        
      </div>
    </div>
                          </div>

                          <div id="tab01" class="tab-pane">
                                  <ul class="quick-actions" style="margin:0px 180px">
           

  <li class="bg_lb span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialPersonnel))}}</span><h4>PERSONNEL</h4></a> </li>
  <li class="bg_lg span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(budgetConsommerPersonnel))}}</span><h4>EXECUTE</h4></a> </li>
    <li class="bg_lo span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponiblePersonnel))}}</span><h4>DISPONIBLE</h4></a> </li>
    <li class="bg_ly span5"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierTauxExecutionPersonnel}}%</span><h4>EXECUTION</h4></a> </li>
                            </ul>
                     <div class="row-fluid">
      <div class="widget-box">
        <div class="widget-title bg_lg"><span class="icon"><i class="icon-signal"></i></span>
          <h5>Site Analytics</h5>
        </div>
        
      </div>
    </div>
                          </div>

                          
                          <div id="tab4" class="tab-pane active">
                           <ul class="quick-actions" style="margin:0px 180px">
     

  <li class="bg_lb span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialB))}}</span><h4>BIENS & SERVICES</h4></a> </li>
  <li class="bg_lg span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetExcuterBienService))}}</span><h4>EXECUTE</h4></a> </li>
    <li class="bg_lo span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponibleBienService))}}</span><h4>DISPONIBLE</h4></a> </li>
    <li class="bg_ly span5"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierTauxExecutionBienService}}%</span><h4>EXECUTION</h4></a> </li>
    
      </ul>
    <div class="row-fluid">
      <div class="widget-box">
        <div class="widget-title bg_lg"><span class="icon"><i class="icon-signal"></i></span>
          <h5>Site Analytics</h5>
        </div>
        
      </div>
    </div>

                          </div>

                          
                          <div id="tab1" class="tab-pane">
                          <ul class="quick-actions" style="margin:0px 180px">
          

   <li class="bg_lb span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialInvetissement))}}</span><h4>INVESTISSEMENT</h4></a> </li>
  <li class="bg_lg span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetExecutéInvestissement))}}</span><h4>EXECUTE</h4></a> </li>
    <li class="bg_lo span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponibleInvestissement))}}</span><h4>DISPONIBLE</h4></a> </li>
    <li class="bg_ly span5"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierTauxExecutionInvestissement}}%</span><h4>EXECUTION</h4></a> </li>
                            </ul>
                                <div class="row-fluid">
      <div class="widget-box">
        <div class="widget-title bg_lg"><span class="icon"><i class="icon-signal"></i></span>
          <h5>Site Analytics</h5>
        </div>
       
      </div>
    </div>
                          </div>
                           </div>
 
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

      budgetGeneralCharge:""

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
            
            this.budgetGeneral.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item =>item.gdenature_id==2).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)
        }
        return this.budgetGeneral.filter(item =>item.gdenature_id==2).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)

    },

// afficherBudgetInitialB(){
//  return this.budgetGeneral.filter(item => item.gdenature_id==5).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0) 

// },
afficherBudgetInitialB() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item =>item.gdenature_id==5).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)
        }
        return this.budgetGeneral.filter(item =>item.gdenature_id==5).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)

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
            return colect.filter(item => item.marchetype==2 && item.decision_cf==8).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)
        }
        return this.mandats.filter(item => item.marchetype==2 && item.decision_cf==8).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)

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
afficherBudgetInitialInvetissement() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item =>item.gdenature_id==7).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)
        }
        return this.budgetGeneral.filter(item =>item.gdenature_id==7).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)

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
            return colect.filter(item => item.marchetype==1 &&  item.decision_cf==8).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)
        }
        return this.mandats.filter(item => item.marchetype==1 && item.decision_cf==8).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)

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


// afficherCodeGrandNature(){
  
//  return id =>{
//    if(id!=null && id!=""){
//    let resultat = this.grandes_natures.filter(item => item.id==id)

//     if(resultat){
//       return resultat.code
//     }
//    }
//  }
// },




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

  methods:{
...mapActions('',['']),


 formatageSomme:formatageSomme
  }
}
</script>
<style>

</style>