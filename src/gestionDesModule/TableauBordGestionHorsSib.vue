<template>
    <div>
      <div class="row-fluid" style="margin-top: -20px">
        <br /> 
      <div class="span1"></div>
      <div class="span10" style="background-color: transparent; !important;">
        <table class="table table-striped">
          <tbody>
            <tr>
              <br />
              <td>
                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >EXERCICE<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000; font-weight:bold"
                  class="wide"
                  :list="gettersgestionOrdrePaiement"
                  v-model="exercice_id"
                  option-value="id"
                  option-text="exercice"
                  placeholder="TOUTES LES ANNEES"
                >
                </model-list-select>
              </td>
              <td>
                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >UNITE ADMINISTRATIVE<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="uniteAdministratives"
                  v-model="uniteAdministratives_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="TOUTES LES UNITES ADMINISTRATIVES"
                >
                </model-list-select>
                
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
      <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
         
          <div class="widget-content">
            <h3>SUIVI DES OP PROVISOIRES</h3>
            <div class="">
      <div class="centreVerticalement" style="width:250px;display: inline-block;height:200px">
        <div class="text-center" style="color:#FFF"><h4>TOTAL</h4></div>
         <div class="card bg-primary  text-center">
           <h4 style="color:#000"> Total des OP provisoires</h4>
          
            <div class="card-body">
              <table class="noborder">
                <tr>
                  <th style="color:#000"> Nombre de dossiers :</th>
                  <td style="color:#000; font-weight:bold"> {{lenghtOpProvisoire}} </td>
                </tr>
                <tr>
                  <th style="color:#000">Taux :</th>
                  <td style="color:#000">0</td>
                </tr>
                <tr>
                  <th style="color:#000">Montant :</th>
                  <td style="color:#000; font-weight:bold">{{formatageSommeSansFCFA(parseFloat(sommeOpProvisoire))}}</td>
                </tr>
              </table>
              <br>
         
     
            </div>
             <a href="#" style="color:#000" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
         
      </div>
      <div class="centreVerticalement" style="width:250px;display: inline-block;height:200px">
        <div class="text-center"><h4>A</h4></div>
         <div class="card bg-secondary mb-3 text-center">
             <h4>-Total des OP provisoires
en cours de traitement</h4>
          
            <div class="card-body">
              <table class="noborder" >
                <tr>
                  <th>Nombre de dossiers :</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>Taux :</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>Montant :</th>
                  <td>0</td>
                </tr>
              </table>
              <br>
         
     
            </div>
             <a href="#" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
      </div>
      <div class="centreVerticalement" style="width:250px;display: inline-block;height:200px">
         <div class="text-center"><h4>B</h4></div>
         <div class="card bg-success mb-3 text-center">
           <h4>OP Provisoires régularisés</h4>
          
            <div class="card-body">
              <table class="noborder" >
                <tr>
                  <th>Nombre de dossiers :</th>
                  <td style="color:#000; font-weight:bold"> {{NbreOpRegulariseLength}} </td>
                </tr>
                <tr>
                  <th>Taux :</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>Montant :</th>
                  <td style="color:#000; font-weight:bold"> {{formatageSommeSansFCFA(parseFloat(sommeOpRegularise))}}</td>
                </tr>
              </table>
              <br>
            </div>
             <a href="#" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
      </div>
      <div class="centreVerticalement" style="width:250px;display: inline-block;height:200px">
       <div class="text-center"><h4>C</h4></div>
         <div class="card bg-info mb-3 text-center">
           <h4>OP Provisoires non régularisés</h4>
          
            <div class="card-body">
              <table class="noborder" >
                <tr>
                  <th>Nombre de dossiers :</th>
                  <td style="color:#000; font-weight:bold">{{NbreOpNonRegulariseLength}} </td>
                </tr>
                <tr>
                  <th>Taux :</th>
                  <td> 0 </td>
                </tr>
                <tr>
                  <th>Montant :</th>
                  <td style="color:#000; font-weight:bold"> {{formatageSommeSansFCFA(parseFloat(sommeOpNonRegularise))}} </td>
                </tr>
              </table>
              <br>
            </div>
             <a href="#" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
      </div>
     
     <div class="centreVerticalement" style="width:250px;display: inline-block;height:200px">
          <div class="text-center"><h4>D</h4></div>
         <div class="card bg-warning mb-3 text-center">
           <h4>OP Provisoires hors délai d'un mois</h4>
          
            <div class="card-body">
              <table class="noborder" >
                <tr>
                  <th>Nombre de dossiers :</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>Taux :</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>Montant :</th>
                  <td>0</td>
                </tr>
              </table>
              <br>
            </div>
             <a href="#" class="card-box-footer">Détail <i class="fa fa-arrow-circle-right"></i></a>
         </div>
      </div>


    </div> 
    <hr>

<div class="row-fluid">
<div class="span4"  >
<div class=" shadow1" >
 <div id="chart" style="border: 2px dotted #ffffff;">
        <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
      </div>
  
</div>
</div>
<div class="span8">
<div class="card shadow1" >
 <!-- <h5>Shadow with 2 properties</h5>-->
<div class="custom ">
  <div id="front_videos">
    <div class="large-2">
      
      <table class="table table-bordered table-striped force-overflow">
  <thead>
    <tr>
      <th>Expéditeur</th>
      <th>Montant OP</th>
      <th>Bénéficiaires</th>
      <th>Nature économiques</th>
      <th>Date de visa CF</th>
      <th>No OP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
       <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
       <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
       <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
       <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
 
</table>

    </div>
  </div>
</div>



</div>
</div>

</div>

   </div>
        </div>
      </div>
    </div>
      
    </div>

</template>


<script>

import { mapGetters, mapActions,mapState } from "vuex";
import {formatageSomme} from '../../src/Repositories/Repository';
import { formatageSommeSansFCFA } from "@/Repositories/Repository";
import {noDCfNoAdmin} from '../../src/Repositories/Auth';
//import { GChart } from 'vue-google-charts'
import { ModelListSelect } from "vue-search-select";
 import VueApexCharts from 'vue-apexcharts'
export default {
   components: {
    apexchart: VueApexCharts,
    ModelListSelect,
  },
  data(){
    return{
      exercice_id:0,
      uniteAdministratives_id:0,
      text1:[],
      budgetGeneralCharge:"",
       series: [44, 55, 13, 43],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['A', 'B', 'C', 'D'],
            colors:['#00a9e6', '#f67de2', '#f3993e',"#ff0000"],
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
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.gestionModules.find(
       idmarche => idmarche.id == this.$route.params.id
   )
   console.log("coucou")
   this.text1 = this.gettersgestionOrdrePaiement.filter(tem => tem.type_ordre_paiement == 1)
   console.log(this.GroupeOrdrePaiementByActivite)
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
            
    ...mapGetters("bienService", [
      "getMandatPersonnaliserVise",
      "getMandatPersonnaliserPersonnel",
      "gettersgestionOrdrePaiement",
      "GroupeOrdrePaiementByActivite",
      "mandats"]),

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
NbreDossierOpProvisoire(){
  if(this.exercice_id != 0){
    return this.gettersgestionOrdrePaiement.filter(
      (tem) => 
      tem.type_ordre_paiement == 1 &&
      tem.exercice == this.anneeAmort)
  } else if(this.uniteAdministratives_id != 0){
    return this.gettersgestionOrdrePaiement.filter(
      (tem) => 
      tem.type_ordre_paiement == 1 &&
      tem.unite_administrative_id == this.uniteAdministratives_id)

  }else if(this.uniteAdministratives_id != 0 && this.exercice_id != 0){
    return this.gettersgestionOrdrePaiement.filter(
      (tem) => 
      tem.type_ordre_paiement == 1 &&
      tem.unite_administrative_id == this.uniteAdministratives_id &&
      tem.exercie == this.anneeAmort)

  }
  else{
    return this.gettersgestionOrdrePaiement.filter(tem => tem.type_ordre_paiement == 1)
  }
},
lenghtOpProvisoire(){
  return this.NbreDossierOpProvisoire.length
},
NbreOpRegularise(){
  if(this.exercice_id != 0){
    return this.gettersgestionOrdrePaiement.filter(
      (tem) => 
      tem.diff_reg_op == 1 && 
      tem.exercice == this.anneeAmort)
  }else if(this.uniteAdministratives_id != 0){
    return this.gettersgestionOrdrePaiement.filter((tem) =>
      tem.diff_reg_op == 1 &&
      tem.unite_administrative_id == this.uniteAdministratives_id)
  }else if(this.uniteAdministratives_id != 0 && this.exercice_id != 0){
    return this.gettersgestionOrdrePaiement.filter((tem) =>
        tem.diff_reg_op == 1 && 
        tem.unite_administrative_id == this.uniteAdministratives_id &&
        tem.exercice == this.anneeAmort)
  }
  return this.gettersgestionOrdrePaiement.filter(tem => tem.diff_reg_op == 1)
},
NbreOpRegulariseLength(){
  return this.NbreOpRegularise.length
},

NbreOpNonRegularise(){
   if(this.exercice_id != 0){
    return this.gettersgestionOrdrePaiement.filter(
      (tem) => 
      tem.diff_reg_op == 0 && 
      tem.exercice == this.anneeAmort)
  }else if(this.uniteAdministratives_id != 0){
    return this.gettersgestionOrdrePaiement.filter((tem) =>
      tem.diff_reg_op == 0 &&
      tem.unite_administrative_id == this.uniteAdministratives_id)
  }else if(this.uniteAdministratives_id != 0 && this.exercice_id != 0){
    return this.gettersgestionOrdrePaiement.filter((tem) =>
        tem.diff_reg_op == 0 && 
        tem.unite_administrative_id == this.uniteAdministratives_id &&
        tem.exercice == this.anneeAmort)
  }
  return this.gettersgestionOrdrePaiement.filter(tem => tem.diff_reg_op == 0)
},
NbreOpNonRegulariseLength(){
  return this.NbreOpNonRegularise.length
},
sommeOpProvisoire(){
  if(this.exercice_id != 0){
    return this.gettersgestionOrdrePaiement.filter(
      (tem) => 
      tem.type_ordre_paiement == 1 &&
      tem.exercice == this.anneeAmort
      ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
  }else if(this.uniteAdministratives_id != 0){
      return this.gettersgestionOrdrePaiement.filter(
      (tem) => 
      tem.type_ordre_paiement == 1 &&
      tem.unite_administrative_id == this.uniteAdministratives_id
      ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
  }else if(this.uniteAdministratives_id != 0 && this.exercice != 0){
      return this.gettersgestionOrdrePaiement.filter(
      (tem) => 
      tem.type_ordre_paiement == 1 &&
      tem.unite_administrative_id == this.uniteAdministratives_id &&
      tem.exercice == this.anneeAmort
      ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
  }else{
    return this.gettersgestionOrdrePaiement.filter(
      (tem) => 
      tem.type_ordre_paiement == 1).reduce(
        (prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
  }
},
sommeOpNonRegularise(){
    if(this.exercice_id != 0){
      return this.gettersgestionOrdrePaiement.filter(
        (tem) => 
        tem.diff_reg_op == 0 && 
        tem.exercice == this.anneeAmort
        ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
    } else if(this.uniteAdministratives_id != 0){
      return this.gettersgestionOrdrePaiement.filter(
        (tem) => 
        tem.diff_reg_op == 0 && 
        tem.unite_administrative_id == this.uniteAdministratives_id
        ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
    } else if(this.uniteAdministratives_id != 0 && this.exercice != 0){
      return this.gettersgestionOrdrePaiement.filter(
        (tem) => 
        tem.diff_reg_op == 0 && 
        tem.unite_administrative_id == this.uniteAdministratives_id &&
        tem.exercice == this.anneeAmort
        ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
    }
  return this.gettersgestionOrdrePaiement.filter(tem => tem.diff_reg_op == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
},
sommeOpRegularise(){
 if(this.exercice_id != 0){
      return this.gettersgestionOrdrePaiement.filter(
        (tem) => 
        tem.diff_reg_op == 1 && 
        tem.exercice == this.anneeAmort
        ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
    }else if(this.uniteAdministratives_id != 0){
      return this.gettersgestionOrdrePaiement.filter(
        (tem) => 
        tem.diff_reg_op == 1 && 
        tem.unite_administrative_id == this.uniteAdministratives_id
        ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
    }
  return this.gettersgestionOrdrePaiement.filter(tem => tem.diff_reg_op == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
},

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
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.exercice_id)
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

  methods:{
...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),

  
 formatageSomme:formatageSomme,
 formatageSommeSansFCFA:formatageSommeSansFCFA
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

.noborder{
  border-collapse: collapse;
  text-align: left !important;
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