<template>
  <div>
    
   
    <div class="row-fluid" style="margin-top: -20px">
      <div class="span1"></div>
      
          <br>
        <table class="table table-striped">
          <tbody>
            <tr>

                 <td>
               
            <!-- <label>EXERCICE </label>
            <model-list-select
              style="border: 1px solid #000"
              class="wide"
              :list="exercices_budgetaires"
              v-model="exercices_budgetaires_id"
              option-value="annee"
              option-text="annee"
              placeholder="2021"
            >
            </model-list-select> -->
          </td>


           <!-- <td>

                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >CODE ACTIVITE<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="plans_activites"
                  v-model="inputLigne1"
                  option-value="id"
                  option-text="code"
                  placeholder="CODE"
                >
                </model-list-select>
              </td> -->

              <td>

                <!-- <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >LIBELLE ACTIVITE<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="plans_activites"
                  v-model="Activite_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="LIBELLE"
                >
                </model-list-select> -->
              </td>

               <!-- <td>
                <div class="control-group">
                  <label
                    class="control-label"
                    style="color: #000; font-size: 14px; font-weight: bolder"
                    >Date debut</label
                  >
                  <div class="controls">
                    <input
                      type="date"
                      v-model="formData.date_debut"
                      class="span"
                      style="background-color: #fff; border: 2px solid #000"
                    />
                  </div>
                </div>
              </td>

              <td>
                <div class="control-group">
                  <label
                    class="control-label"
                    style="color: #000; font-size: 14px; font-weight: bolder"
                    >Date Fin</label
                  >
                  <div class="controls">
                    <input
                      type="date"
                      v-model="formData.date_fin"
                      class="span"
                      style="background-color: #fff; border: 2px solid #000"
                    />
                  </div>
                </div>
              </td> -->

            </tr>
          </tbody>
        </table>
        
      
    </div>



    <div class="span4">
       
          Afficher
          <select name="pets" id="pet-select"  class="span3">
            <option value="5" selected>5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>
         
        </div>

    <!-- <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div>  -->
    
    <div class="widget-content nopadding" id="printpdf">
        <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div> 
       <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">Synthèse par BAILLEUR</h2>
          </tr>
        </table>
      <!-- <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
        v-if="formData.date_debut == '' && formData.date_fin == ''"
      >
        SITUATION D'EXECUTION BUDGETAIRE PAR ACTIVITE ET PAR LIGNE
        {{ formData.date_debut }}
        {{ formData.date_fin }}
      </h2>

      <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
        v-if="formData.date_debut != '' && formData.date_fin != ''"
      >
        SITUATION D'EXECUTION BUDGETAIRE PAR ACTIVITE ET LIGNE DU
        {{ formaterDate(formData.date_debut) }} AU
        {{ formaterDate(formData.date_fin) }}
      </h2> -->
      <p
        style="
          margin-left: 30px;
          font-size: 14px;
          font-weight: bold;
          text-decoration: underline;
        "
      >
        
      </p>

              <table class="table table-bordered table-striped" id="titre" ref="table"  summary="lorem ipsum sit amet" rules="groups" frame="hsides" border="2">
                
                <!-- <thead>
                  <tr>
                    <th style="width:10%"></th> 
                    <td> </td>
                  </tr>
                  <tr>
                    <th style="width:10%"></th>
                    <td> </td>
                  </tr>
                  <tr>

                    <th style="width:10%"></th>
                      <td> </td>
                   </tr>
                  <tr>
                    <th style="width:10%"></th>
                      <td>  </td>
                   </tr>
                  <tr>
                    <th style="width:10%"></th>
                      <td> </td>
                  </tr>
                  <tr>
                    <th style="width:10%"></th>
                    <td> </td>
                  </tr>
                </thead>
                 -->
                 
              

              
            <!-- <tr>
                     <th style="width:10%">(1)AUTORISATION D'ENGAGEMENT AE  </th>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:15%" colspan="3" >  </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:15%" colspan="3"> </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:15%" colspan="3">  </td>
        </tr> -->
       
           <tr>
             <th style="width:10%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px"  colspan="1"> </th>
          
          <th style="width:10%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px"  colspan="3">Planification (Avant contractualisation) </th> 
         <th style="width:15%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px" colspan="2">Marchés en cours de contractualisation </th>
         <th style="width:15%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px" colspan="2">Marchés attribués </th>
          <th style="width:15%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px"  colspan="4">Marchés en cours d'exécution </th> 
         <th style="width:15%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px" colspan="3">Marchés en souffrance</th>
         <th style="width:15%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px" colspan="3">Marchés résiliés </th>

           
       </tr>
           <tr>
              
                       
                        <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="">Bailleur </th> 

         
          <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Source de financement </th> 
         <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>
                      
         <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Montant (FCFA) </th>

         <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>
          <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Montant (FCFA)</th>

           <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>
          <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Montant (FCFA)</th>


                      <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>

                      <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Montant total marchés (FCFA) </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Montants exécutés (FCFA) </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Reste à exécuter </th>

                      <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Reste à exécuter </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1"> Taux</th>

               
                      <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Reste à exécuter </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1"> Taux</th>
           
       </tr>

      

      
       <tbody>
           <tr v-for="type1 in  partition(groupeParSourceFinancement, size)[page]" :key="type1">
         
          <td style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{afficherLibelleSourFinacement(type1[0].source_financement)}}</td>
         <td   style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{afficherLibelleTypeFinancement(type1[0].type_financement)}}</td>
         <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherPart(type1[0].type_financement)}}</td>
         <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(afficherNombreMarchePlanifierMontantDons(type1[0].type_financement)))}}</td>

         <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherEncourDeContratualisation(type1[0].type_financement)}}</td>
         <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(afficherNombreMarcheEncourDeContratualisation(type1[0].type_financement)))}}</td>
         
          <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherAttribuer(type1[0].type_financement)}}</td>
          <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(afficherMontantMarcherAttribuer(type1[0].type_financement)))}}</td>
          <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherEncourExecution(type1[0].type_financement)}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(afficherMontantTotal(type1[0].type_financement)))}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(marcheEncourExecutionMontantDons(type1[0].type_financement)))}}</td>
            <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(resteAexcuter(type1[0].type_financement)))}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherEnSouffrance(type1[0].type_financement)}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(resteAexcuterMarcheSouffrance(type1[0].type_financement)))}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{afficherTauxMarcheSouffre(type1[0].type_financement)}} %</td>

           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherResilier(type1[0].type_financement)}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(resteAexcuterMarcheResilier(type1[0].type_financement)))}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{afficherTauxMarcheResilier(type1[0].type_financement)}} %</td>

      
         </tr> 
        </tbody>
      
      
      </table>


       <div class="pagination alternate">
      <ul>
        <li :class="{ disabled: page == 0 }">
          <a @click.prevent="precedent()" href="#">Précedent</a>
        </li>
        <li
          v-for="(titre, index) in partition(groupeParSourceFinancement, size).length"
          :key="index"
          :class="{ active: active_el == index }"
        >
          <a @click.prevent="getDataPaginate(index)" href="#">{{
            index + 1
          }}</a>
        </li>
        <li
          :class="{ disabled: page == partition(groupeParSourceFinancement, size).length - 1 }"
        >
          <a @click.prevent="suivant()" href="#">Suivant</a>
        </li>
      </ul>
    </div>
      <br>
      <br>
    </div>


    

    <table>
      <tbody>
        <tr>

          
                <td>
                  <h3>contratualisation</h3>
                     <div class="centreVerticalement card" style="margin-top:1px; width:500;display: inline-block;height:270px">
                       <div class="" id="chart" style="border: 2px dotted #ffffff;">
                       <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
                    </div>
                    
                   </div>
                </td>

                  <td>
                    <h3>Exécution</h3>
                     <div class="centreVerticalement card" style="margin-top:1px; width:500;display: inline-block;height:270px">
                       <div class="" id="chart" style="border: 2px dotted #ffffff;">
                       <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
                    </div>
                    
                   </div>
                </td>

                  <td>
                    <h3>Souffrance</h3>
                     <div class="centreVerticalement card" style="margin-top:1px; width:500;display: inline-block;height:270px">
                       <div class="" id="chart" style="border: 2px dotted #ffffff;">
                       <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
                    </div>
                    
                   </div>
                </td>

                  <td>
                    <h3>Resilier</h3>
                     <div class="centreVerticalement card" style="margin-top:1px; width:500;display: inline-block;height:270px">
                       <div class="" id="chart" style="border: 2px dotted #ffffff;">
                       <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
                    </div>
                    
                   </div>
                </td>
     </tr>
        </tbody>
    </table>
            
           

   


        
    <!-- <fab
      :actions="fabActions"
      @searchMe="filter"
      main-icon="apps"
      bg-color="green"
    ></fab> -->

   
  </div>
</template>
<script>
 import VueApexCharts from 'vue-apexcharts'
import {mapGetters, mapActions} from "vuex"
import { partition } from "@/Repositories/Repository";
import {formatageSommeSansFCFA} from "../../../../Repositories/Repository"
export default {
  components:{
     apexchart: VueApexCharts,
  },
  props:["macheid"],
    data() {
        return{
           page: 0,
      size:3,
      active_el: 0,
             series: [44, 55, 13, 43,55, 13, 43],
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

    created(){
     
       // console.log(this.testLega);
    },
    computed:{
   ... mapGetters("bienService",["marches","getActeEffetFinancierPersonnaliser","avenants",
   "gettersgestionOrdrePaiement","groupeParSourceFinancement"]),
    ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques','getterInfrastrucure']),
  ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,


   afficherLibelleSourFinacement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id==id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

  afficherLibelleTypeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.types_financements.find(qtreel => qtreel.id==id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


 afficherMontantTtcDeActeDons() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.filter(qtreel =>this.afficherIdMarch(qtreel.marche_id)==id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0);
    
        }
      };
    },



montantAvenantMarcheResilier(){
     return id => {
        if (id != null && id != "") {
          return this.avenants.filter(qtreel =>this.afficherIdResilier(qtreel.marche_id) == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ht), 0);
   
        }
      };
   },

     montantAvenantMarcheSouffrance(){
     return id => {
        if (id != null && id != "") {
          return this.avenants.filter(qtreel =>this.afficherIdMarchSouffrance(qtreel.marche_id) == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ht), 0);
   
        }
      };
   },


     montantAvenant(){
     return id => {
        if (id != null && id != "") {
          return this.avenants.filter(qtreel =>this.afficherIdMarch(qtreel.marche_id) == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ht), 0);
   
        }
      };
   },

 
   montantMarcheTotalEmprunt(){
      let objet= parseFloat(this.afficherMontantTtcDeActeEmprunt(this.macheid))+ parseFloat(this.montantAvenant(this.macheid))
        if(isNaN(objet)){
          return 0
        }
        return objet
   },
    NombreMarcheEnCourExecutionDon(){
      return this.gettersgestionOrdrePaiement.filter(item =>item.type_financement_id==13).length;
  },

    NombreMarcheEnCourExecutionEmprut(){
      return this.gettersgestionOrdrePaiement.filter(item =>item.type_financement_id==15).length;
  },

    NombreMarcherEncourExecution() {
      return id => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.type_financement_id==id && qtreel.marche_id!=null && qtreel.exercice==this.anneeBugetaire).length;
        }
      };
    },


 

  

     marcheEncourExecutionMontantDons(){
       return id=>{
         if(id!="" && id!=null){
        return this.gettersgestionOrdrePaiement.filter(item => this.afficherIdMarch(item.marche_id)==id && 
  item.type_ordre_paiement==1 && item.decision_cf==8 || item.type_ordre_paiement==4 && item.decision_cf==9
  || item.type_ordre_paiement==4 && item.decision_cf==8 || item.type_ordre_paiement==4 && item.decision_cf==9
  
  ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0);
         }
       }
  
   },

   

   // affichage des marches en cours de contratualisation


   

  


   // afficher le montant du marché attribuer
  

  


 anneeBugetaire(){
     const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.encours == 1 );
     if(anneBudget){
       return anneBudget.annee;
     }
     return 0
   },

     NombreMarcherPart() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.type_financement==id && qtreel.attribue==0 && qtreel.exo_id==this.anneeBugetaire).length;
        }
      };
    },

     NombreMarcherEncourDeContratualisation() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.type_financement==id && qtreel.attribue==1 && qtreel.exo_id==this.anneeBugetaire).length;
        }
      };
    },

     NombreMarcherAttribuer() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.type_financement==id && qtreel.attribue==2 && qtreel.exo_id==this.anneeBugetaire).length;
        }
      };
    },

     NombreMarcherEnSouffrance() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.type_financement==id && qtreel.attribue==7 && qtreel.exo_id==this.anneeBugetaire).length;
        }
      };
    },

   

   

      NombreMarcherResilier() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.type_financement==id && qtreel.attribue==3 && qtreel.exo_id==this.anneeBugetaire).length;
        }
      };
    },

 afficherNombreMarcheEncourDeContratualisation(){
      return id=>{
        if(id!="" && id!=null){
         return this.marches.filter(item => item.type_financement==id && item.exo_id==this.anneeBugetaire &&
         item.attribue==1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0);
        }
      }
 
   },

   



 afficherNombreMarchePlanifierMontantDons(){
      return id=>{
        if(id!="" && id!=null){
         return this.marches.filter(item => item.type_financement==id && item.exo_id==this.anneeBugetaire &&
         item.attribue==0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0);
        }
      }
 
   },
    
 

 afficherIdResilier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id==id && qtreel.attribue==3 && qtreel.exo_id==this.anneeBugetaire);

      if (qtereel) {
        return qtereel.type_financement;
      }
      return 0
        }
      };
    },

    afficherIdMarch() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id==id && qtreel.attribue==2 && qtreel.exo_id==this.anneeBugetaire);

      if (qtereel) {
        return qtereel.type_financement;
      }
      return 0
        }
      };
    },

     afficherIdMarchSouffrance() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id==id && qtreel.attribue==7 && qtreel.exo_id==this.anneeBugetaire);

      if (qtereel) {
        return qtereel.type_financement;
      }
      return 0
        }
      };
    },

    
      afficherMontantMarcherAttribuerSouffrance() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.filter(qtreel =>this.afficherIdMarchSouffrance(qtreel.marche_id)==id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0);
        }
      };
    },

     afficherMontantMarcherResilier() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.filter(qtreel =>this.afficherIdResilier(qtreel.marche_id)==id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0);
        }
      };
    },

   

      afficherMontantMarcherAttribuer() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.filter(qtreel =>this.afficherIdMarch(qtreel.marche_id)==id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0);
        }
      };
    },

    
 
    },
    methods:{
    ...mapActions("bienService",[""]),

    partition: partition,

    getDataPaginate(index) {
      this.active_el = index;
      this.page = index;
    },
    precedent() {
      this.active_el--;
      this.page--;
    },
    suivant() {
      this.active_el++;
      this.page++;
    },
    
    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

     afficherTauxMarcheSouffre(id){
      return (this.NombreMarcherEnSouffrance(id) * parseFloat(this.resteAexcuterMarcheSouffrance(id))) /100;
    },

     afficherMontantTotal(id){
    return parseFloat(this.afficherMontantMarcherAttribuer(id)) + parseFloat(this.montantAvenant(id))
  },

  afficherMontantTotalMarcheSouffrance(id){
    return parseFloat(this.afficherMontantMarcherAttribuerSouffrance(id) + parseFloat(this.montantAvenantMarcheSouffrance(id)) )
  },

resteAexcuterMarcheSouffrance(id){
  return parseFloat(this.afficherMontantTotalMarcheSouffrance(id) - parseFloat(this.marcheEncourExecutionMontantDons(id)))
},

  resteAexcuter(id){
 return parseFloat(this.afficherMontantTotal(id)) - parseFloat(this.marcheEncourExecutionMontantDons(id))
  },

  afficherMotantTotalMarcherResilier(id){
   return parseFloat(this.montantAvenantMarcheResilier(id) + parseFloat(this.montantAvenantMarcheResilier(id)))
  },

  resteAexcuterMarcheResilier(id){
  return parseFloat(this.afficherMotantTotalMarcherResilier(id) - parseFloat(this.marcheEncourExecutionMontantDons(id)))
  },


  afficherTauxMarcheResilier(id){
    return (this.NombreMarcherResilier(id) * parseFloat(this.resteAexcuterMarcheResilier(id)))/ 100
  },

    formatageSommeSansFCFA:formatageSommeSansFCFA  

    }
}
</script>