<template>
    <div>
      <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
         
          <div class="widget-content">
            <h3 style="text-align:center;text-decoration:underline;">SUIVI DES OPERATIONS DCF </h3>
    <div class="">

      <div class="centreVerticalement" style="width:330px;display: inline-block;height:230px">
        <div class="text-center" style="color:black"><h4>A</h4></div>
        
         <div class="card" style="background-color:#00a9e6;">
           <h4 style="text-align:center;background-color:#00a9e6;color:black;font-weight:bold;"> 
               -Total des Marché/Contrats</h4>
          
            <div class="card-body">
              
              <p style="color:black;font-size:18px;font-weight:bold;">-Nombre des UA: {{ NbreUA }}</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Nombre des Marchés: {{NbreMarche }}</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Montant Total: {{ formatageSommeSansFCFA(parseFloat(MontantTotalMarche1)) }}</p>
              <br>
              <br>
         
     
            </div>
             <a href="#" style="font-size:20px;color:#000;font-weight:bold;" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
         
      </div>

    <!-- deuxieme tableau -->

        <div class="centreVerticalement" style="width:330px;display: inline-block;height:230px">
        <div class="text-center" style="color:black"><h4>B</h4></div>
        
         <div class="card" style="background-color:#f18383;">
           <h4 style="text-align:center;background-color:#f18383;color:black;font-weight:bold;"> 
               -Total des Marché/Contrats Non Exécutés</h4>
          
            <div class="card-body">
              
              <p style="color:black;font-size:18px;font-weight:bold;">-Nombre des UA:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Nombre des Marchés:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Montant Total:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Taux:0</p>
              <br>
              <br>
         
     
            </div>
             <a href="#" style="font-size:20px;color:#000;font-weight:bold;" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
         
      </div>

      <!-- fin 2eme tableau -->


      <!-- 3eme tableau -->

        <div class="centreVerticalement" style="width:330px;display: inline-block;height:230px">
        <div class="text-center" style="color:black"><h4>C</h4></div>
        
         <div class="card" style="background-color:#0be525;">
           <h4 style="text-align:center;background-color:#0be525;color:black;font-weight:bold;"> 
               -Total des Marché/Contrats en bonne exécution dans le délais</h4>
          
            <div class="card-body">
              
              <p style="color:black;font-size:18px;font-weight:bold;">-Nombre des UA:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Nombre des Marchés:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Montant Total:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Taux:0</p>
              <br>
              <br>
         
     
            </div>
             <a href="#" style="font-size:20px;color:#000;font-weight:bold;" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
         
      </div>

      <!-- fin 3eme tableau -->

         <!-- 4eme tableau -->

        <div class="centreVerticalement" style="width:330px;display: inline-block;height:230px">
        <div class="text-center" style="color:black"><h4>D</h4></div>
        
         <div class="card" style="background-color:#f9cf7b;">
           <h4 style="text-align:center;background-color:#f9cf7b;color:black;font-weight:bold;"> 
               -Total des Marché/Contrats en exécution hors délais</h4>
          
            <div class="card-body">
              
               <p style="color:black;font-size:18px;font-weight:bold;">-Nombre des UA:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Nombre des Marchés:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Montant Total:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Taux:0</p>
              <br>
              <br>
         
     
            </div>
             <a href="#" style="font-size:20px;color:#000;font-weight:bold;" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
         
      </div>

      <!-- fin 4eme tableau -->


      <!-- 5eme tableau -->

        <div class="centreVerticalement" style="width:330px;display: inline-block;height:230px"> 
        <div class="text-center" style="color:black"><h4>E</h4></div>
        
         <div class="card" style="background-color:#819e2b;">
           <h4 style="text-align:center;background-color:#819e2b;color:black;font-weight:bold;"> 
               -Total des Marché/Contrats Achévés</h4>
          
            <div class="card-body">
              
              <p style="color:black;font-size:18px;font-weight:bold;">-Nombre des UA:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Nombre des Marchés:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Montant Total:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Taux:0</p>
              <br>
              <br>
         
     
            </div>
             <a href="#" style="font-size:20px;color:#000;font-weight:bold;" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
         
      </div> <br><br><br><br>

      <!-- fin 5eme tableau -->

    

     


    </div>

    <table>
        <tbody>
            <tr>
                <td>
                    <!-- 6eme tableau -->

        <div class="centreVerticalement" style="width:330px;display: inline-block;height:230px">
        <div class="text-center" style="color:black"><h4>F</h4></div>
        
         <div class="card" style="background-color:#ef85d8;">
           <h4 style="text-align:center;background-color:#ef85d8;color:black;font-weight:bold;"> 
               -Total des Marché/Contrats en Souffrence</h4>
          
            <div class="card-body">
              
             <p style="color:black;font-size:18px;font-weight:bold;">-Nombre des UA:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Nombre des Marchés:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Montant Total:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Taux:0</p>
              <br>
              <br>
         
     
            </div>
             <a href="#" style="font-size:20px;color:#000;font-weight:bold;" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
         
      </div>

      <!-- fin 6eme tableau -->
                </td>

                <td>
                     <!-- 7eme tableau -->

        <div class="centreVerticalement" style="width:330px;display: inline-block;height:230px">
        <div class="text-center" style="color:black"><h4>G</h4></div>
        
         <div class="card" style="background-color:#ff0000;">
           <h4 style="text-align:center;background-color:#ff0000;color:black;font-weight:bold;"> 
               -Total des Marché/Contrats Résilliés</h4>
          
            <div class="card-body">
              
             <p style="color:black;font-size:18px;font-weight:bold;">-Nombre des UA:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Nombre des Marchés:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Montant Total:0</p>
              <p  style="color:black;font-size:18px;font-weight:bold;">-Taux:0</p>
              <br>
              <br>
              
         
     
            </div>
             <a href="#" style="font-size:20px;color:#000;font-weight:bold;" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
         
      </div>

      <!-- fin 7eme tableau -->
                </td>
                <td>
                     <div class="centreVerticalement" style="width:300px;display: inline-block;height:220px"></div>
                </td>

                <td>
                     <div class="centreVerticalement card" style="margin-top:1px; width:500;display: inline-block;height:270px">
                       <div class="" id="chart" style="border: 2px dotted #ffffff;">
                       <apexchart type="pie" width="380" :options="chartOptions" :series="dataPourcentageBienService1"></apexchart>
                    </div>
                    
                   </div>
                </td>
            </tr>
        </tbody>
    </table>
<!-- 
<div class="row-fluid">
<div class="span6"  >
<div class=" shadow1" >
 <div id="chart" style="border: 2px dotted #ffffff;text-align:center;">
        <apexchart type="pie" width="400" :options="chartOptions" :series="series"></apexchart>
      </div>
  
</div>
</div>
</div> -->

   </div>
        </div>
      </div>
    </div>
      
      {{ datamois }}
    </div>
</template>


<script>

import { mapGetters, mapActions,mapState } from "vuex";
import {formatageSomme,formatageSommeSansFCFA} from '../../../../Repositories/Repository';
import {noDCfNoAdmin} from '../../../../Repositories/Auth';
//import { GChart } from 'vue-google-charts'
 import VueApexCharts from 'vue-apexcharts'
export default {
   components: {
    apexchart: VueApexCharts,
  },
  data(){
    return{

      budgetGeneralCharge:0,
       dataPourcentageBienService1: [],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['A', 'B', 'C', 'D','E','F','G'],
            colors:['#00a9e6', '#f18383', '#0be525',"#f9cf7b","#819e2b","#ef85d8","#ff0000"],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },

    }
  },

   
  computed:{

       ...mapState('parametrageMenu', {
     active_el: state => state.active_el
  }),
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
            
    ...mapGetters("bienService", ["getMandatPersonnaliserVise",
    "getMandatPersonnaliserPersonnel","mandats","acteEffetFinanciers",
    "GroupeUabyActe","marches"]),

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
 // fonction lega marches

    ReturnSib(){
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find(
            (qtreel) => qtreel.id == id && qtreel.exo_id==this.anneeAmort
          );

          if (qtereel) {
            return qtereel.sib;
          }
          return 0;
        }
      };
    },

      ReturnSibua(){
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find(
            (qtreel) => qtreel.unite_administrative_id == id && qtreel.exo_id==this.anneeAmort
          );

          if (qtereel) {
            return qtereel.sib;
          }
          return 0;
        }
      };
    },


    NbreUA(){
             return (this.GroupeUabyActe.filter((qtreel) => this.ReturnSibua(qtreel[0].ua_id) == 1)).length
    },

    NbreMarche(){
        return (this.acteEffetFinanciers.filter((qtreel) => this.ReturnSib(qtreel.marche_id) == 1)).length
    },


    MontantTotalMarche1(){
      return (this.acteEffetFinanciers.filter((qtreel) => this.ReturnSib(qtreel.marche_id) == 1)).
      reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_act),0).toFixed(0);
        
         
    },


     datamois() {
      let vm = this;

      if (vm.dataPourcentageBienService1.length > 0) {
        vm.dataPourcentageBienService1 = [];
      }

      vm.dataPourcentageBienService1.push(parseFloat(this.MontantTotalMarche1));
      vm.dataPourcentageBienService1.push(parseFloat(this.MontantTotalMarche1));
      vm.dataPourcentageBienService1.push(parseFloat(this.MontantTotalMarche1));
      vm.dataPourcentageBienService1.push(parseFloat(this.MontantTotalMarche1));
      vm.dataPourcentageBienService1.push(parseFloat(this.MontantTotalMarche1));
      vm.dataPourcentageBienService1.push(parseFloat(this.MontantTotalMarche1));
      vm.dataPourcentageBienService1.push(parseFloat(this.MontantTotalMarche1));

      return "";
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
      return id1 => {
        if (id1 != null && id1 != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id1);

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
            
        
     
  
},
  methods:{
...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),

      

 formatageSommeSansFCFA: formatageSommeSansFCFA,
formatageSomme:formatageSomme,
  }
}
</script>
<style>
.centreVerticalement {
 display: inline-block;
 vertical-align: middle;
 float: none;
 
  padding: 0.5em;
}
.card:not([class*=card-outline-]) {
    border: 0;
}
.card {
    height: 100%;
    border:1px solid black !important;
}
.blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem;
}

blockquote {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    
}
blockquote {
    margin: 0 0 1rem;
}

.blockquote-ul ul {
  list-style: none;
}

.blockquote-ul li {
  position: relative;
  font-family:Arial;
  font-size:20px;
  margin:10px;
}





.blockquote p {
    font-size: 1.1rem;
}

/* Backgrounds */

.bg-primary {
    color: #000 !important;
    background-color: #FFFFFF !important;
}

.bg-secondary {
    color: #FFFFFF;
    background-color: #00a9e6 !important;
}

.bg-success {
    color: #FFFFFF;
    background-color: #f67de2 !important;
}

.bg-info {
    color: #FFFFFF;
    background-color: #f3993e !important;
}

.bg-warning {
    color: #FFFFFF !important;
    background-color: #ff0000 !important;
}

.bg-danger {
    color: #FFFFFF;
    background-color: #f43a59 !important;
}

.bg-dark {
    background-color: #122f3b !important;
}

.bg-light {
    background-color: #F7F7FA !important;
}

.bg-tranparent {
    background-color: transparent !important;
}

.bg-dark *,
.bg-danger *,
.bg-warning *,
.bg-info *,
.bg-success *,
.bg-secondary *,
.bg-primary *,
.bg-dark .batch-icon,
.bg-danger .batch-icon,
.bg-warning .batch-icon,
.bg-info .batch-icon,
.bg-success .batch-icon,
.bg-secondary .batch-icon,
.bg-primary .batch-icon {
    color: #FFFFFF;
}

.bg-gradient [class^="card-"],
.bg-gradient [class^="card-"] * {
    color: #FFFFFF !important;
}


/* Highlight Colors - Bottom Border */
.card .card-box-footer {
    position: absolute;
    left: 0px;
    bottom: 0px;
    text-align: center;
    padding: 3px 0;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    text-decoration: none;
}
.card:hover .card-box-footer {
    background: rgba(0, 0, 0, 0.3);
}


.card1 {
  padding: 40px;
  background: #fff;
  max-width: 360px;
  border-radius: 20px;
  margin: 60px auto;
}

.highlight {
  font-weight: bold;
  color: #294;
}

.shadow1 { 
  box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
}




.large-2 {
  
  height: 350px;
  overflow-y: scroll;
  width:100%;
  background: #ccc;
}

.force-overflow {
  min-height: 450px;
}

.large-2::-webkit-scrollbar-track {
  border: 1px solid #000;
  padding: 2px 0;
  background-color: #404040;
}

.large-2::-webkit-scrollbar {
  width: 10px;
}

.large-2::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #737272;
  border: 1px solid #000;
}
</style>