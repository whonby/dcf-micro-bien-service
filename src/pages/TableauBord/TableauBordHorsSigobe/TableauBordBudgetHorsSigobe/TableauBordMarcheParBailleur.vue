<template>
  <div>
    <input  type="hidden" :value="triParnombreMarcheContratData"/>
    <input type="hidden" :value="triParNombreMarchePlanifData" />
    <input type="hidden" :value="triParMontantContratualiData" />
      <input type="hidden" :value="TriParMontantPlanifData" />
      <input type="hidden" :value="TriParNombreMarcheAttribueData" />
      <input type="hidden" :value="TriParMontantMarcheAttribueData" />
      <input type="hidden" :value="TriParNombreMarcheExcutionData" />
      <input type="hidden" :value="TriParMontantMarcheData" />
       <input type="hidden" :value="TriParMontantMarcheExcuteData" />
       <input type="hidden" :value="TriParMontantMarcheResteData" />
       <input type="hidden" :value="TriParNombreMarcheSouffranceData" />
       <input type="hidden" :value="TriParMontantResteMarcheSouffranceData" />
       <input type="hidden" :value="TriParTauxMarcheSouffranceData" />
        <input type="hidden" :value="TriParNombreMarcheResilierData" />
        <input type="hidden" :value="TriParMontantResteExcuteMarcheResilierData" />
        <input type="hidden" :value="TriParTauxMarcheResilierData" />
      
     
   
    
    <table>
      <tbody>
        <tr>

          
                <td>
                  <h3>Contractualisation</h3>
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
  <table class="table table-striped">
          <tbody>
            <tr>
  <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >SOURCE DE FINANCEMENT<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="sources_financements"
                  v-model="source_financement_id1"
                  option-value="id"
                  option-text="libelle"
                  placeholder="LIBELLE"
                >
                </model-list-select>
            </tr>
          </tbody>
  </table>

    <div class="span4">
       
          Afficher
          <select name="pets" id="pet-select"  v-model="size" class="span3">
            <!-- <option value="5" selected>5</option> -->
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
        EXERCICE:{{anneeBugetaire}}
      </p> 

                                  <table class="table table-bordered table-striped" id="titre" ref="table"  summary="lorem ipsum sit amet" rules="groups" frame="hsides" border="2">
                                    
                                
                          
                              <tr>
                                <th style="width:10%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px"  colspan=""> </th>
                                <th style="width:10%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px"  colspan="1"> </th>
                                <th style="width:10%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px"  colspan="1"> </th>
                              <th style="width:10%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px"  colspan="1"> </th>
                              <th style="width:10%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px"  colspan="2">Planification (Avant contractualisation) </th> 
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
                                          background-color: #fbb203 !important;"></th>

                                <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;"></th>
                                  
                                          
                                            <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="">
                                          
                                          Bailleur 
                                          <!-- <button @click="InputLibelleBailleur">
                                        <i class=" icon-search"></i> 
                                          
                                        </button>
                                          <money style="text-align:left;color:red" 
                                          v-model="libelle_bailleur" class="span"
                                            v-show="active_libelleBailleur == true"></money> -->
                                          
                                          </th> 

                            
                              <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">Type de financement </th> 

                                          

                            <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">

                                          <button @click="TriParOrdre()">
                                        <i class=" icon-filter"></i> 
                                          
                                        </button>
                                        
                                          <button @click="InputNomreTest">
                                        <i class=" icon-search"></i> 
                                          
                                        </button>
                                          <money style="text-align:left;color:red" 
                                          v-model="InputNomre_Test" class="span"
                                            v-show="InputNomreTestdata == true"></money>

                                            Nombre
                                          </th>
                                          
                            <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">

                                          <button @click="TriMontantPlanif()">
                                        <i class=" icon-filter"></i> 
                                          
                                        </button>

                                          <button @click="InputMontantContratMarche">
                                        <i class=" icon-search"></i> 
                                          
                                        </button>
                                          <money style="text-align:left;color:red" 
                                          v-model="montantContratMarche" class="span"
                                            v-show="activeMontantContratMarche == true"></money>
                                              Montant (FCFA)
                                          </th>

                            <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">
                                          <button @click="TriNombreParMarchecontrat()">
                                        <i class=" icon-filter" title="filtrer par nombre"></i> 
                                          
                                        </button>
                                          <button @click="InputNombre">
                                        <i class=" icon-search" title="rechercher par nombre"></i> 
                                          
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="nombre_cont" class="span"
                                            v-show="activeNombre == true"></money>
                                            Nombre 
                                          </th>
                              <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">

                                            <button @click="TriParMontantContractuali()">
                                        <i class=" icon-filter" title="trier par ordre croissante ou decroissante "></i> 
                                          
                                        </button>
                                          <button @click="InputMontantContra">
                                        <i class=" icon-search" title="rechercher par montant"></i> 
                                          
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="montant_cont" class="span"
                                            v-show="activeMontantCont == true"></money>

                                            Montant (FCFA)
                                          </th>

                              <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">

                                            <button @click="TriParNombreMarcheAtribue()">
                                        <i class=" icon-filter" title="filter par ordre croissante ou decroissante"></i> 
                                          
                                        </button>
                                            <button @click="InputNombreAttribue">
                                        <i class=" icon-search" title="rechercher par nombre"></i> 
                                          
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="nombreMarche_attribue" class="span"
                                            v-show="activenombreMarcheAttribue == true"></money>
                                              Nombre 
                                          </th>
                              <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">
                                          
                                          <button @click="TriParMontantMarcheAttribue()">
                                        <i class=" icon-filter" title="filtrer par ordre croissant ou décroissant "></i> 
                                          
                                        </button>
                                          
                                            <button @click="InputMontantmacheAttribue">
                                        <i class=" icon-search" title="rerchercher par montant"></i> 
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="montantMarche_attribue" class="span"
                                            v-show="activemarcheMontantAttribue == true"></money>

                                            Montant (FCFA)
                                          </th>


                                          <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">

                                            <button @click="TriParNombreMarcheExecution()">
                                        <i class=" icon-filter" title="filtrer par ordre croissant ou décroissant "></i> 
                                          
                                        </button>
                                          <button @click="InputNombreMarcheExcute">
                                        <i class=" icon-search" title="rechercher par nombre"></i> 
                                          
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="nombreMarche_excute" class="span"
                                            v-show="activeNombreMarcheExcute == true"></money>
                                            Nombre
                                          </th>

                                          <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">
                                          
                                            <button @click="TriParMontantTotalMarche()">
                                        <i class=" icon-filter" title="filtrer par ordre croissant ou décroissant"></i> 
                                          
                                        </button>
                                          <button @click="InputMontantTotalMarcheExcute">
                                        <i class=" icon-search" title="rechercher par montant"></i> 
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="montantTotalMarcheExcute" class="span"
                                            v-show="activeMontantMarcheExcute == true"></money>
                                            Montant total marchés (FCFA) 
                                          </th>

                                          <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">

                                          <button @click="TriParMontantMarcheExcute()">
                                        <i class=" icon-filter" title="filtrer par ordre croissant ou décroissant "></i> 
                                        </button>

                                          <button @click="InputMotantExcute">
                                        <i class=" icon-search" title="rechercher par montant"></i> 
                                          
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="montant_Excute" class="span"
                                            v-show="activeMontant_Excute == true"></money>
                                            Montants exécutés (FCFA)
                                          </th>

                                          <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">
                                            <button @click="TriParMontantMarcheResteExcute()">
                                        <i class=" icon-filter" title="filtrer par ordre croissant ou décroissant"></i> 
                                          
                                        </button>
                                          <button @click="InputResteExecute">
                                        <i class=" icon-search" title="rechercher par montant"></i> 
                                          
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="montantReste_Excute" class="span"
                                            v-show="activeMontantReste_Excute == true"></money>
                                            Reste à exécuter
                                          </th>

                                          <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">

                                            <button @click="TriParNombreMarcheSouffrance()">
                                        <i class=" icon-filter" title="filtrer par ordre croissant ou décroissant"></i> 
                                          
                                        </button>
                                          <button @click="InputNombreMarcheSouffrance">
                                        <i class=" icon-search" title="rechercher par nombre"></i> 
                                          
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="nombreMarche_Souffrance" class="span"
                                            v-show="activeNombreMarcheSouffrance == true"></money>
                                            Nombre
                                          </th>

                                          <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">
                                          
                                            <button @click="TriParMontantResteExcuteMarcheSouffrance()">
                                        <i class=" icon-filter" title="filtrer par ordre croissant ou décroissant"></i> 
                                          
                                        </button>
                                          <button @click="InputMontantResteExcuteSouffrance">
                                        <i class=" icon-search" title="rechercher par montant"></i> 
                                          
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="montant_reste_souffrance" class="span"
                                            v-show="activeMontantMarcheSouffrance == true"></money>
                                            Reste à exécuter
                                          </th>

                                          <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1" class="posit-form">
                                          <button @click="TriParTauxMarcheSouffrance()">
                                        <i class=" icon-filter" title="filtrer par ordre croissant ou décroissant"></i> 
                                        </button>
                                          <button @click="InputTauxMarcheSouffrance">
                                        <i class=" icon-search" title="rechercher par taux"></i> 
                                        </button>
                                          <money style="text-align:left;color:red" 
                                          v-model="taux_marche" class="span"
                                            v-show="activeTauxMarcheSouffrance == true"></money>
                                            
                                              Taux 
                                          </th>

                                  
                                          <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">
                                          <button @click="TriParNombreMarcheResilier()">
                                        <i class=" icon-filter" title="filtrer par ordre croissant ou décroissant"></i> 
                                          
                                        </button>
                                          <button @click="InputNombreMarcheResilier">
                                        <i class=" icon-search" title="rechercher par nombre"></i> 
                                          
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="nombreMarche_resilier" class="span"
                                            v-show="activeMarcheResilier == true"></money>
                                            Nombre 
                                          </th>

                                          <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1">
                                          
                                          <button @click="TriParMontantResteExcuteMarcheResilier()">
                                        <i class=" icon-filter" title="filtrer par ordre croissant ou décroissant"></i> 
                                          
                                        </button>
                                            <button @click="InputMontantResteExecute">
                                        <i class=" icon-search" title="rechercher par montant"></i> 
                                          
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="montantReste_execute" class="span"
                                            v-show="activemontantResilier == true"></money>
                                            Reste à exécuter 
                                          </th>

                                          <th style="width:10%;font-size: 14px;
                                          font-weight: bold;
                                          color: #000;
                                          text-align: center;
                                          background-color: #fbb203 !important;" colspan="1"> 

                                          <button @click="TriParTauxMarcheResilier()">
                                        <i class=" icon-filter" title="filtrer par ordre croissant ou décroissant"></i> 
                                        </button>
                                        <button @click="InputTauxMarcheResilier">
                                        <i class=" icon-search" title="rechercher par taux"></i> 
                                        </button>

                                          <money style="text-align:left;color:red" 
                                          v-model="TauxMarche_Resilier" class="span"
                                            v-show="activeMarcheTauxResilier == true"></money>
                                            Taux
                                          </th>
                              
                          </tr>

                          


                          
                          <tbody  v-for="type1 in  partition(Listenewdata, size)[page]" :key="type1.id">
                              <tr>

                                  <td colspan="2">
                                        <button @click="showMySourceFinancement(type1.id)">
                                        <i class="icon-eye-open"></i> 
                                        </button>
                                      </td>
                                      
                                      <!-- <td> </td> -->
                            
                                              <td v-bind:class="recupereIDactivite==type1.id? 'graybg' : 'whitebg'  " colspan="2" style="" >
                                                {{type1.libelleBailleur}}
                                                        
                                                          
                                                          </td>
                                                          <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  "> 
                                                            {{type1.nombreMarchePlanif}}</td>

                                                          <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                              {{formatageSommeSansFCFA(parseFloat(type1.montantMarchePlanif)) }}
                                                          </td>
                                                          <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                            {{type1.nombreMarcheContra }}
                                                          </td>

                                                          <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                            {{ formatageSommeSansFCFA(parseFloat(type1.montantMarcheContract))}}</td>

                                                            <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                              {{type1.nombreMarcheAtribue}} </td>

                                                            <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                              {{formatageSommeSansFCFA(parseFloat(type1.montantMarcheAtribue))}} </td>

                                                            <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                              {{type1.nombreMarcheExcution}} </td>

                                                            <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                              {{type1.montantTotalMarcheExcution}}</td>
                                                          
                                                            
                                                            <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                              {{formatageSommeSansFCFA(parseFloat(type1.montantMarcheExcute))}} </td>

                                                              <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                                {{ formatageSommeSansFCFA(parseFloat( type1.montantResreExcute))}}</td>

                                                                <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  "> 
                                                                  {{type1.nombreMarcheSouffrance}} </td>

                                                                <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                                  {{ formatageSommeSansFCFA(parseFloat(type1.montantMarcheAExcuteSouffrance))}} </td>

                                                                  <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                                    {{type1.tauxMarcheSouffrance}} %</td>
                                                                
                                                                  <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                                    {{type1.nombreMarcheResilier}} </td>
                                                                
                                                                  <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                                    {{formatageSommeSansFCFA(parseFloat(type1.montantMarcheResilierResteExcute))}} </td>
                                                                  
                                                                    <td v-bind:class="recupereIDactivite==type1.id ? 'graybg' : 'whitebg'  ">
                                                                      {{type1.tauxMarcheResilier}} %</td>
                                            
                                                      <!-- <td></td> -->
                                                      
                                                    
                                            </tr> 
                              
                            <tr v-show="recupereIDactivite==type1.id"
                            v-for="TypeFinance in AfficheUaGroupe(type1.id)" :key="TypeFinance">
                              
                              <td></td>
                                <td>
                                        <button @click="showMySourceFinancement(TypeFinance)">
                                        <i class="icon-arrow-right"></i> </button>
                                      </td>
                                <!-- <td colspan="2">
                                        <button @click="showMySourceFinancement(type1[0].source_financement)">
                                        <i class="icon-eye-open"></i> </button>
                                      </td> -->
                              
                                    <td></td>

                              <td   style="">{{afficherLibelleTypeFinancement(TypeFinance)}}</td>
                            <td  style="">{{NombreMarcherPart(TypeFinance)}}</td>
                            <td  style="">{{formatageSommeSansFCFA(parseFloat(afficherNombreMarchePlanifierMontantDons(TypeFinance)))}}</td>

                            <td  style="">{{NombreMarcherEncourDeContratualisation(TypeFinance)}}</td>
                            <td  style="">{{formatageSommeSansFCFA(parseFloat(afficherNombreMarcheEncourDeContratualisation(TypeFinance)))}}</td>
                            
                              <td  style="">{{NombreMarcherAttribuer(TypeFinance)}}</td>
                              <td  style="">{{formatageSommeSansFCFA(parseFloat(afficherMontantMarcherAttribuer(TypeFinance)))}}</td>
                              <td  style="">{{NombreMarcherEncourExecution(TypeFinance)}}</td>
                              <td  style="">{{formatageSommeSansFCFA(parseFloat(afficherMontantTotal(TypeFinance)))}}</td>
                              <td  style="">{{formatageSommeSansFCFA(parseFloat(marcheEncourExecutionMontantDons(TypeFinance)))}}</td>
                                <td  style="">{{formatageSommeSansFCFA(parseFloat(resteAexcuter(TypeFinance)))}}</td>
                              <td  style="">{{NombreMarcherEnSouffrance(TypeFinance)}}</td>
                              <td  style="">{{formatageSommeSansFCFA(parseFloat(resteAexcuterMarcheSouffrance(TypeFinance)))}}</td>
                              <td  style="">{{afficherTauxMarcheSouffre(TypeFinance).toFixed(2)}} %</td>

                              <td  style="">{{NombreMarcherResilier(TypeFinance)}}</td>
                              <td  style="">{{formatageSommeSansFCFA(parseFloat(resteAexcuterMarcheResilier(TypeFinance)))}}</td>
                              <td  style="">{{afficherTauxMarcheResilier(TypeFinance).toFixed(2)}} %</td>
                              

                            </tr>

                            </tbody>
                          
                          
                          </table>


       <div class="pagination alternate">
      <ul>
        <li :class="{ disabled: page == 0 }">
          <a @click.prevent="precedent()" href="#">Précedent</a>
        </li>
        <li
          v-for="(titre, index) in partition(Listenewdata, size).length"
          :key="index"
          :class="{ active: active_el == index }"
        >
          <a @click.prevent="getDataPaginate(index)" href="#">{{
            index + 1
          }}</a>
        </li>
        <li
          :class="{ disabled: page == partition(Listenewdata, size).length - 1 }"
        >
          <a @click.prevent="suivant()" href="#">Suivant</a>
        </li>
      </ul>
    </div>
      <br>
      <br>
    </div>

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
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components:{
     apexchart: VueApexCharts,
     ModelListSelect
  },
  props:["macheid"],
    data() {
        return{
          //triParnombreMarcheContratData:0,
          triParMontantContData:0,
          triParNombreMarcheContrat:0,

       //   triparnombreMarchePlanif:0,

          TriMontantContractdata:0,
          TriParMontantPlanifData:0,
          TriParNombreMarcheAttribueData:0,
          TriParMontantMarcheAttribueData:0,
          TriParNombreMarcheExcutionData:0,
          TriParMontantMarcheData:0,
          TriParMontantMarcheExcuteData:0,
          TriParMontantMarcheResteData:0,
          TriParNombreMarcheSouffranceData:0,
          TriParMontantResteMarcheSouffranceData:0,
          TriParTauxMarcheSouffranceData:0,
          TriParNombreMarcheResilierData:0,
          TriParMontantResteExcuteMarcheResilierData:0,
          TriParTauxMarcheResilierData:0,
          triParNombreMarchePlanifData:0,
          triParnombreMarcheContratData:0,
          triParMontantContratualiData:0,
          montantContratMarche:0,
          InputNomreTestdata:false,
          InputNomre_Test:0,
          libelle_bailleur:0,
          active_libelleBailleur:false,
            activeNombre:false,
            activeMontantCont:false,
            activenombreMarcheAttribue:false,
            activemarcheMontantAttribue:false,
            activeNombreMarcheExcute:false,
            activeMontantMarcheExcute:false,
            activeMontant_Excute:false,
            activeMontantReste_Excute:false,
            activeNombreMarcheSouffrance:false,
            activeMontantMarcheSouffrance:false,
            activeTauxMarcheSouffrance:false,
            activeMarcheResilier:false,
            activemontantResilier:false,
            activeMarcheTauxResilier:false,
            TauxMarche_Resilier:0,
            montantReste_execute:0,
            nombreMarche_resilier:0,
            taux_marche:0,
            montant_reste_souffrance:0,
            nombreMarche_Souffrance:0,
            montantReste_Excute:0,
            montant_Excute:0,
            montantTotalMarcheExcute:0,
            nombreMarche_excute:0,
            montantMarche_attribue:0,
            nombreMarche_attribue:0,
            montant_cont:0,
            nombre_cont:0,
          activeMontantContratMarche:false,
          source_financement_id1:0,
           page: 0,
      size:10,
      active_el: 0,

      recupereIDactivite:"",
            //   series: [{
            // name: 'BAD',

            // data: []
            //   }],
          //      chartOptions: {
          //   chart: {
          //     type: 'pie',
          //    width: 380,
          //     stacked: true,
          //     toolbar: {
          //       show: true
          //     },
          //     zoom: {
          //       enabled: true
          //     }
          //   },
          //    responsive: [{
          //     breakpoint: 480,
          //     options: {
          //       legend: {
          //         position: 'bottom',
          //         offsetX: -10,
          //         offsetY: 0
          //       }
          //     }
          //   }],
          //    plotOptions: {
          //     bar: {
          //       horizontal: false,
          //     },
          //   },
          //   xaxis: {
          //     //type: 'datetime',
          //     categories: [],
          //   },
          //   legend: {
          //     position: 'bottom',
          //     offsetY: 40
          //   },
          //   fill: {
          //     opacity: 1
          //   }

          //  }
             series: [44, 55, 13, 43,55, 13, 43],
             datacontactualisation:[],
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


  liste(){
    if(this.source_financement_id1!=0){
    
    return this.groupeParSourceFinancement.filter(item=> item[0].source_financement==this.source_financement_id1);
    } else{
      return this.groupeParSourceFinancement
    }
    
  },

   TrieParSourceFinacement(){

        let vm=this
      return this.liste.map(function (value) {
        let objet = {
          id:value[0].source_financement,
          libelleBailleur:vm.afficherLibelleSourFinacement(value[0].source_financement),
          nombreMarchePlanif:vm.NombreMarcherPartSourceF(value[0].source_financement),
          montantMarchePlanif:vm.afficherNombreMarchePlanifierMontantDons(value[0].source_financement),
          nombreMarcheContra:vm.NombreMarcherEncourDeContratualisation(value[0].source_financement),
          montantMarcheContract:vm.afficherNombreMarcheEncourDeContratualisation(value[0].source_financement),
          nombreMarcheAtribue:vm.NombreMarcherAttribuer(value[0].source_financement),
          montantMarcheAtribue:vm.afficherMontantMarcherAttribuer(value[0].source_financement),
          nombreMarcheExcution:vm.NombreMarcherEncourExecution(value[0].source_financement),
          montantTotalMarcheExcution:vm.afficherMontantTotal(value[0].source_financement),
          montantMarcheExcute:vm.marcheEncourExecutionMontantDons(value[0].source_financement),
          montantResreExcute:vm.resteAexcuter(value[0].source_financement),
          nombreMarcheSouffrance:vm.NombreMarcherEnSouffrance(value[0].source_financement),
          montantMarcheAExcuteSouffrance:vm.resteAexcuterMarcheSouffrance(value[0].source_financement),
          tauxMarcheSouffrance:vm.afficherTauxMarcheSouffre(value[0].source_financement),
          nombreMarcheResilier:vm.NombreMarcherResilier(value[0].source_financement),
          montantMarcheResilierResteExcute:vm.resteAexcuterMarcheResilier(value[0].source_financement),
          tauxMarcheResilier:vm.afficherTauxMarcheResilier(value[0].source_financement)
        };
        return objet;
      });
    
    },

    Listenewdata(){
        if(this.montantContratMarche!=0){
          return this.TrieParSourceFinacement.filter((item) => item.montantMarchePlanif ==this.montantContratMarche);
        }else if(this.InputNomre_Test!=0){
          return this.TrieParSourceFinacement.filter((item)=>item.nombreMarchePlanif ==this.InputNomre_Test);
        }else if(this.libelle_bailleur!=0){
         return this.TrieParSourceFinacement.filter((item) => item.libelleBailleur== this.libelle_bailleur);
        }else if(this.nombre_cont!=0){
          return this.TrieParSourceFinacement.filter((item) => item.nombreMarcheContra ==this.nombre_cont);
        } else if(this.montant_cont!=0){
          return this.TrieParSourceFinacement.filter((item) => item.montantMarcheContract ==this.montant_cont)
        } else if(this.nombreMarche_attribue!=0){
          return this.TrieParSourceFinacement.filter((item) => item.nombreMarcheAtribue==this.nombreMarche_attribue)
        } else if(this.montantMarche_attribue!=0){
          return this.TrieParSourceFinacement.filter((item) => item.montantMarcheAtribue == this.montantMarche_attribue)
        } else if(this.nombreMarche_excute!=0){
          return this.TrieParSourceFinacement.filter((item) => item.nombreMarcheExcution==this.nombreMarche_excute)
        } else if(this.montantTotalMarcheExcute!=0){
          return this.TrieParSourceFinacement.filter((item) => item.montantTotalMarcheExcution==this.montantTotalMarcheExcute)
        } else if(this.montant_Excute!=0){     
          return this.TrieParSourceFinacement.filter((item) => item.montantMarcheExcute==this.montant_Excute)
        }else if(this.montantReste_Excute!=0){
          return this.TrieParSourceFinacement.filter((item) => item.montantResreExcute==this.montantReste_Excute)
        } else if(this.nombreMarche_Souffrance!=0){
          return this.TrieParSourceFinacement.filter((item) => item.nombreMarcheSouffrance==this.nombreMarche_Souffrance)
        }else if(this.montant_reste_souffrance!=0){
          return this.TrieParSourceFinacement.filter((item) => item.montantMarcheAExcuteSouffrance==this.montant_reste_souffrance)
        }else if(this.taux_marche!=0){
          return this.TrieParSourceFinacement.filter((item) => item.tauxMarcheSouffrance==this.taux_marche)
        }else if(this.nombreMarche_resilier!=0){
          return this.TrieParSourceFinacement.filter((item) => item.nombreMarcheResilier==this.nombreMarche_resilier)
        }else if(this.montantReste_execute!=0){
          return this.TrieParSourceFinacement.filter((item) =>item.montantMarcheResilierResteExcute==this.montantReste_execute)
        } else if(this.TauxMarche_Resilier!=0){
          return this.TrieParSourceFinacement.filter((item) => item.tauxMarcheResilier==this.TauxMarche_Resilier)
        }
        else{
          return this.TrieParSourceFinacement;
        }
    },

  // dataContrac(){
  //   let vm=this;
  //   if(this.datacontactualisation.length>0){
  //     vm.datacontactualisation=[];
  //   }else{
  //     vm.datacontactualisation.push()
  //   }
  // },

  


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

  idTypeFinancement() {
      return id => {
        if (id != null && id != "") {
           return this.marches.filter(qtreel => qtreel.source_financement==id);
        }
      };
    },


    AfficheUaGroupe() {
      return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.idTypeFinancement(id);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_financement);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
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

    NombreMarcherEncourExecutionSourceF() {
      return id => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.source_financement_id==id && qtreel.marche_id!=null && qtreel.exercice==this.anneeBugetaire).length;
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

   
     marcheEncourExecutionMontantDonsSourceF(){
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

     NombreMarcherPartSourceF() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.source_financement==id && qtreel.attribue==0 && qtreel.exo_id==this.anneeBugetaire).length;
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

     NombreMarcherEncourDeContratualisationSourceF() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.source_financement==id && qtreel.attribue==1 && qtreel.exo_id==this.anneeBugetaire).length;
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


   NombreMarcherAttribuerSourceF() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.source_financement==id && qtreel.attribue==2 && qtreel.exo_id==this.anneeBugetaire).length;
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

    NombreMarcherEnSouffranceSourceF() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.source_financement==id && qtreel.attribue==7 && qtreel.exo_id==this.anneeBugetaire).length;
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

    
      NombreMarcherResilierSourceF() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.source_financement==id && qtreel.attribue==3 && qtreel.exo_id==this.anneeBugetaire).length;
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

   afficherNombreMarcheEncourDeContratualisationSourceF(){
      return id=>{
        if(id!="" && id!=null){
         return this.marches.filter(item => item.source_financement==id && item.exo_id==this.anneeBugetaire &&
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

   afficherNombreMarchePlanifierMontantDonsSourceF(){
      return id=>{
        if(id!="" && id!=null){
         return this.marches.filter(item => item.source_financement==id && item.exo_id==this.anneeBugetaire &&
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

   afficherMontantMarcherAttribuerSourceF() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.filter(qtreel =>this.afficherIdMarch(qtreel.marche_id)==id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0);
        }
      };
    },
    
 
    },
    methods:{
    ...mapActions("bienService",[""]),

 InputMontantContratMarche(){
      if(this.activeMontantContratMarche == false){
        this.activeMontantContratMarche = true
      }else{
        this.activeMontantContratMarche = false;
        this.montantContratMarche = 0;
      }
 },

 InputNombre(){
   if(this.activeNombre == false){
        this.activeNombre = true
      }else{
        this.activeNombre = false;
        this.nombre_cont = 0;
      }
 },

 InputMontantContra(){
   if(this.activeMontantCont == false){
        this.activeMontantCont = true
      }else{
        this.activeMontantCont = false;
        this.montant_cont = 0;
      }
 },

 InputNombreAttribue(){
    if(this.activenombreMarcheAttribue == false){
        this.activenombreMarcheAttribue = true
      }else{
        this.activenombreMarcheAttribue = false;
        this.nombreMarche_attribue = 0;
      }
 },

 InputMontantmacheAttribue(){
   if(this.activemarcheMontantAttribue == false){
        this.activemarcheMontantAttribue = true
      }else{
        this.activemarcheMontantAttribue = false;
        this.montantMarche_attribue = 0;
      }
 },

 InputNombreMarcheExcute(){
    if(this.activeNombreMarcheExcute == false){
        this.activeNombreMarcheExcute = true
      }else{
        this.activeNombreMarcheExcute = false;
        this.nombreMarche_excute = 0;
      }
 },

 InputMontantTotalMarcheExcute(){
    if(this.activeMontantMarcheExcute == false){
        this.activeMontantMarcheExcute = true
      }else{
        this.activeMontantMarcheExcute = false;
        this.montantTotalMarcheExcute = 0;
      }
 },
 InputNombreMarcheSouffrance(){
   if(this.activeNombreMarcheSouffrance == false){
        this.activeNombreMarcheSouffrance = true
      }else{
        this.activeNombreMarcheSouffrance = false;
        this.nombreMarche_Souffrance = 0;
      }
 },

 InputMontantResteExcuteSouffrance(){
   if(this.activeMontantMarcheSouffrance == false){
        this.activeMontantMarcheSouffrance = true
      }else{
        this.activeMontantMarcheSouffrance = false;
        this.montant_reste_souffrance = 0;
      }
 },

 InputTauxMarcheSouffrance(){
   if(this.activeTauxMarcheSouffrance == false){
        this.activeTauxMarcheSouffrance = true
      }else{
        this.activeTauxMarcheSouffrance = false;
        this.taux_marche = 0;
      }
 },

 InputNombreMarcheResilier(){
   if(this.activeMarcheResilier == false){
        this.activeMarcheResilier = true
      }else{
        this.activeMarcheResilier = false;
        this.nombreMarche_resilier = 0;
      }
 },

 InputMontantResteExecute(){
   if(this.activemontantResilier == false){
        this.activemontantResilier = true
      }else{
        this.activemontantResilier = false;
        this.montantReste_execute = 0;
      }
 },

 InputTauxMarcheResilier(){
    if(this.activeMarcheTauxResilier == false){
        this.activeMarcheTauxResilier = true
      }else{
        this.activeMarcheTauxResilier = false;
        this.TauxMarche_Resilier = 0;
      }
 },
 InputMotantExcute(){
   if(this.activeMontant_Excute == false){
        this.activeMontant_Excute = true
      }else{
        this.activeMontant_Excute = false;
        this.montant_Excute = 0;
      }
 },

 InputResteExecute(){
   if(this.activeMontantReste_Excute == false){
        this.activeMontantReste_Excute = true
      }else{
        this.activeMontantReste_Excute = false;
        this.montantReste_Excute = 0;
      }
 },

 InputLibelleBailleur(){
    if(this.active_libelleBailleur == false){
        this.active_libelleBailleur = true
      }else{
        this.active_libelleBailleur = false;
        this.libelle_bailleur = 0;
      }
 },

  InputNomreTest(){
      if(this.InputNomreTestdata == false){
        this.InputNomreTestdata = true
      }else{
        this.InputNomreTestdata = false;
        this.InputNomre_Test = 0;
      }
 },
TriMontantPlanif(){
      if(this.TriParMontantPlanifData==0){
        this.TriParMontantPlanifData=1;
        return this.TrieParSourceFinacement.sort(function(a,b){return a.montantMarchePlanif-b.montantMarchePlanif});
        
      }else{
        this.TriParMontantPlanifData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.montantMarchePlanif-a.montantMarchePlanif});
      }
      
    },

    TriParOrdre(){
      if(this.triParNombreMarchePlanifData==0){
        this.triParNombreMarchePlanifData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.nombreMarchePlanif-b.nombreMarchePlanif});
      }else{
        this.triParNombreMarchePlanifData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.nombreMarchePlanif-a.nombreMarchePlanif});
      }
    },
TriNombreParMarchecontrat(){
 if(this.triParnombreMarcheContratData==0){
        this.triParnombreMarcheContratData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.nombreMarcheContra-b.nombreMarcheContra});
      }else{
        this.triParnombreMarcheContratData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.nombreMarcheContra-a.nombreMarcheContra});
      }
},

TriParMontantContractuali(){
 if(this.triParMontantContratualiData==0){
        this.triParMontantContratualiData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.montantMarcheContract-b.montantMarcheContract});
      }else{
        this.triParMontantContratualiData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.montantMarcheContract-a.montantMarcheContract});
      }
},

TriParNombreMarcheAtribue(){

  if(this.TriParNombreMarcheAttribueData==0){
        this.TriParNombreMarcheAttribueData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.nombreMarcheAtribue-b.nombreMarcheAtribue});
      }else{
        this.TriParNombreMarcheAttribueData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.nombreMarcheAtribue-a.nombreMarcheAtribue});
      }
  
},

TriParMontantMarcheAttribue(){
  if(this.TriParMontantMarcheAttribueData==0){
        this.TriParMontantMarcheAttribueData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.montantMarcheAtribue-b.montantMarcheAtribue});
      }else{
        this.TriParMontantMarcheAttribueData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.montantMarcheAtribue-a.montantMarcheAtribue});
      }

},

TriParNombreMarcheExecution(){
  if(this.TriParNombreMarcheExcutionData==0){
        this.TriParNombreMarcheExcutionData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.nombreMarcheExcution-b.nombreMarcheExcution});
      }else{
        this.TriParNombreMarcheExcutionData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.nombreMarcheExcution-a.nombreMarcheExcution});
      }
},

TriParMontantTotalMarche(){
   if(this.TriParMontantMarcheData==0){
        this.TriParMontantMarcheData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.montantTotalMarcheExcution-b.montantTotalMarcheExcution});
      }else{
        this.TriParMontantMarcheData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.montantTotalMarcheExcution-a.montantTotalMarcheExcution});
      }
},

TriParMontantMarcheExcute(){
  if(this.TriParMontantMarcheExcuteData==0){
        this.TriParMontantMarcheExcuteData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.montantMarcheExcute-b.montantMarcheExcute});
      }else{
        this.TriParMontantMarcheExcuteData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.montantMarcheExcute-a.montantMarcheExcute});
      }
},

TriParMontantMarcheResteExcute(){
  if(this.TriParMontantMarcheResteData==0){
        this.TriParMontantMarcheResteData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.montantResreExcute-b.montantResreExcute});
      }else{
        this.TriParMontantMarcheResteData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.montantResreExcute-a.montantResreExcute});
      }
},

TriParNombreMarcheSouffrance(){
  if(this.TriParNombreMarcheSouffranceData==0){
        this.TriParNombreMarcheSouffranceData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.nombreMarcheSouffrance-b.nombreMarcheSouffrance});
      }else{
        this.TriParNombreMarcheSouffranceData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.nombreMarcheSouffrance-a.nombreMarcheSouffrance});
      }
},

TriParMontantResteExcuteMarcheSouffrance(){
  if(this.TriParMontantResteMarcheSouffranceData==0){
        this.TriParMontantResteMarcheSouffranceData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.montantMarcheAExcuteSouffrance-b.montantMarcheAExcuteSouffrance});
      }else{
        this.TriParMontantResteMarcheSouffranceData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.montantMarcheAExcuteSouffrance-a.montantMarcheAExcuteSouffrance});
      }
},

TriParTauxMarcheSouffrance(){
  if(this.TriParTauxMarcheSouffranceData==0){
        this.TriParTauxMarcheSouffranceData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.tauxMarcheSouffrance-b.tauxMarcheSouffrance});
      }else{
        this.TriParTauxMarcheSouffranceData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.tauxMarcheSouffrance-a.tauxMarcheSouffrance});
      }
},
TriParNombreMarcheResilier(){
   if(this.TriParNombreMarcheResilierData==0){
        this.TriParNombreMarcheResilierData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.nombreMarcheResilier-b.nombreMarcheResilier});
      }else{
        this.TriParNombreMarcheResilierData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.nombreMarcheResilier-a.nombreMarcheResilier});
      }
},

TriParMontantResteExcuteMarcheResilier(){
   if(this.TriParMontantResteExcuteMarcheResilierData==0){
        this.TriParMontantResteExcuteMarcheResilierData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.montantMarcheResilierResteExcute-b.montantMarcheResilierResteExcute});
      }else{
        this.TriParMontantResteExcuteMarcheResilierData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.montantMarcheResilierResteExcute-a.montantMarcheResilierResteExcute});
      }
},
   

   TriParTauxMarcheResilier(){
     if(this.TriParTauxMarcheResilierData==0){
        this.TriParTauxMarcheResilierData=1
       return this.TrieParSourceFinacement.sort(function(a,b){return a.tauxMarcheResilier-b.tauxMarcheResilier});
      }else{
        this.TriParTauxMarcheResilierData=0;
        return this.TrieParSourceFinacement.sort(function(a,b){return b.tauxMarcheResilier-a.tauxMarcheResilier});
      }
   },

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

    

     afficherTauxMarcheSouffreSourceF(id){
      return (this.NombreMarcherEnSouffranceSourceF(id) * parseFloat(this.resteAexcuterMarcheSouffranceSourceF(id))) /100;
    },

     afficherMontantTotal(id){
    return parseFloat(this.afficherMontantMarcherAttribuer(id)) + parseFloat(this.montantAvenant(id))
  },

     afficherMontantTotalSourceF(id){
    return parseFloat(this.afficherMontantMarcherAttribuer(id)) + parseFloat(this.montantAvenant(id))
  },

  afficherMontantTotalMarcheSouffrance(id){
    return parseFloat(this.afficherMontantMarcherAttribuerSouffrance(id) + parseFloat(this.montantAvenantMarcheSouffrance(id)) )
  },

resteAexcuterMarcheSouffrance(id){
  return parseFloat(this.afficherMontantTotalMarcheSouffrance(id) - parseFloat(this.marcheEncourExecutionMontantDons(id)))
},

resteAexcuterMarcheSouffranceSourceF(id){
  return parseFloat(this.afficherMontantTotalMarcheSouffrance(id) - parseFloat(this.marcheEncourExecutionMontantDons(id)))
},


  resteAexcuter(id){
 return parseFloat(this.afficherMontantTotal(id)) - parseFloat(this.marcheEncourExecutionMontantDons(id))
  },
   resteAexcuterSourceF(id){
 return parseFloat(this.afficherMontantTotal(id)) - parseFloat(this.marcheEncourExecutionMontantDons(id))
  },

  afficherMotantTotalMarcherResilier(id){
   return parseFloat(this.afficherMontantMarcherResilier(id) + parseFloat(this.montantAvenantMarcheResilier(id)))
  },

  resteAexcuterMarcheResilier(id){
  return parseFloat(this.afficherMotantTotalMarcherResilier(id) - parseFloat(this.marcheEncourExecutionMontantDons(id)))
  },

   resteAexcuterMarcheResilierSourceF(id){
  return parseFloat(this.afficherMotantTotalMarcherResilier(id) - parseFloat(this.marcheEncourExecutionMontantDons(id)))
  },


  afficherTauxMarcheResilier(id){
    return (this.NombreMarcherResilier(id) * parseFloat(this.resteAexcuterMarcheResilier(id)))/ 100
  },

  afficherTauxMarcheResilierSourceF(id){
    return (this.NombreMarcherResilierSourceF(id) * parseFloat(this.resteAexcuterMarcheResilierSourceF(id)))/ 100
  },

    formatageSommeSansFCFA:formatageSommeSansFCFA , 

     showMySourceFinancement(id){
      if(this.recupereIDactivite==""){
         this.recupereIDactivite=id;
      }else if(this.recupereIDactivite!="" && this.recupereIDactivite !=id){
        this.recupereIDactivite="";
        this.recupereIDactivite=id;
      }
      else{
         this.recupereIDactivite="";
      }
       
    },


// calcul des differents taux avec les camenber 
//  testRegion(){
//    let  objet= this.groupeParSourceFinancement.filter(item=>{
//      if(item.structure_localisation_geographique.niveau==2 && item.longitude!=null){
//        return item
//      }
//    })

//      if(objet.length>0){
//        let vm=this;
//        objet.forEach(function (value) {
//           // let total=200;
//          // let affichageTauxParRegion=vm.afficherMontantDeBaseDuMarcheParRegion(this.macheid)
//           let montantExecute=vm.resultatT;
//           let montanRestant=100 - montantExecute;

//             let pour_centage_rest=montanRestant
//             let pour_execu=vm.resultatT
//               vm.series[0].data.push(pour_centage_rest .toFixed(2))
//              // console.log(this.pour_execu)
//               vm.series[1].data.push(pour_execu).toFixed(2)
//               vm.chartOptions.xaxis.categories.push(value.libelle)
//        })
      
//      }

//     }


    }
}
</script>

<style scoped>
.graybg {
  background: rgb(6, 184, 6) !important;
  color: white;
  font-size: 15px;
  font-weight: bold;
}

.whitebg {
  background: #fff !important;
  font-weight: bold;
  color: black;
  font-size: 15px;
}
.graybg1 {
  background: rgb(28, 13, 158) !important;
  color: white;
  font-size: 15px;
  font-weight: bold;
}
#posit-form{
  margin-left:-50px;
}
</style>