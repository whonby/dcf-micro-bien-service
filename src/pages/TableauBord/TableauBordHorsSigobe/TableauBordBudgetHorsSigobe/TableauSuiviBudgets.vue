<template>
  <div>
<input  type="hidden" :value="triModificationBudgetdata"/>
<input  type="hidden" :value="triBudgetActuelledata" />
<input  type="hidden" :value="triBudgetExecutedata" />
<input  type="hidden" :value="triBudgetDisponibledata" />
<input  type="hidden" :value="triTotalProvisoiredata" />
<input  type="hidden" :value="triOpNonRegulirisedata" />
<input  type="hidden" :value="triOpRegulirisedata" />                
     <input  type="hidden" :value="triTauxOpRegulirisedata" /> 
     <input  type="hidden" :value="triTauxExecutiondata" />                
       <input  type="hidden" :value="tricodedata" />          
                  
    <div id="validationOpDefinitif1" class="modal hide tailgrand">
      <div class="modal-header">
         <a data-dismiss="modal" class="btn btn-danger" href="#">Fermer</a>
        <h3 style="font-size: 14px; font-weight: bold">
          UNITE ADMINISTRATIVE : {{ libelleUniteAdministrative(editMandat.id) }}
        </h3>
      </div>
      <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdfDetailReamenagement()">
        Exporter en PDF
      </button>
    </div> 
      <div class="modal-body" id="printpdf1">
      
 <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 14px;text-decoration: underline ;text-transform: uppercase;">Detail Réamenagement Budgétaire</h2>
          </tr>
        </table>
        <table class="table table-bordered table-striped">
          <thead>
            <tr style="">
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
                LIGNE ECONOMIQUE
              </th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                  width : 50%
                "
              >
                BUDGET VOTE (FCFA)
              </th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
                VARIATION
              </th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
                BUDGET ACTUEL (FCFA)
              </th>
            </tr>
          </thead>
          
            
            <tbody>
             <tr  v-for="unite in afficheDetailReamenagement" :key="unite.id">
               <td>{{libelleLigneEconomique(unite)}}</td>
               <td style="font-weight: bold;font-size: 12px;text-align:right">{{formatageSommeSansFCFA(parseFloat(montantVoteParLigne(editMandat.id,unite)))}}</td>
               <td style="font-weight: bold;font-size: 12px;text-align:right">{{formatageSommeSansFCFA(parseFloat(variation(unite)))}}</td>
               <td style="font-weight: bold;font-size: 12px;text-align:right">{{formatageSommeSansFCFA(parseFloat(montantVoteParLigne(editMandat.id,unite))+parseFloat(variation(unite)))}}</td>
               
              <!-- <td style="font-weight: bold; font-size: 12px; text-align: center">{{ formatageSommeSansFCFA(parseFloat(MontantVoteParTypeFinancement(editMandat.id,unite)))}}</td>
                  <td style="font-weight: bold; font-size: 12px; text-align: center">{{formatageSommeSansFCFA(parseFloat(MontantVoteParTypeFinancement(editMandat.id,unite) - MontantExecuteParTypeFinancement(editMandat.id,unite)))}}</td>
               <td style="font-weight: bold; font-size: 12px; text-align: center">{{formatageSommeSansFCFA(parseFloat(MontantExecuteParTypeFinancement(editMandat.id,unite)))}}</td>
            
               <td style="font-weight: bold; font-size: 12px; text-align: center"> {{ EviteNaNTypeFinancement(editMandat.id,unite) }}%</td> -->
            </tr>
            <tr>
              <td
                style="font-weight: bold;
                  font-size: 12px;
                  width: 800px;
                  color:#000;
                  text-align:center,
                  background-color: #FC762F !important;
                "
              >
                TOTAL
              </td>

              <td
                style="font-weight: bold;
                  font-size: 12px;
                  width: 800px;
                  color:#000;
                  text-align:right;
                  background-color: #FC762F !important;"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      montantVoteToralParLigne(editMandat.id) -
                        TotalVariation(editMandat.id)
                    )
                  )
                }}
              </td>

              <td
                style="font-weight: bold;
                  font-size: 12px;
                  width: 800px;
                  color:#000;
                  text-align:right;
                  background-color: #FC762F !important;
                "
              >
                {{ formatageSomme(parseFloat(TotalVariation(editMandat.id))) }}
              </td>
              <td
                style="font-weight: bold;
                  font-size: 12px;
                  width: 800px;
                  color:#000;
                  text-align:right;
                  background-color: #FC762F !important;
                "
              >
                {{
                  formatageSomme(
                    parseFloat(montantActuelParReamenagement(editMandat.id))
                  )
                }}
              </td>
            </tr>
          </tbody>
        </table>


        <!-- <div class="modal-footer">
          <a data-dismiss="modal" class="btn btn-danger" href="#">Fermer</a>
        </div> -->
      </div>
    </div>

    <div id="validationOpDefinitif" class="modal hide tailgrand">
      <div class="modal-header">
      <a data-dismiss="modal" class="btn btn-danger" href="#">Fermer</a>
        <h3 style="font-size: 14px; font-weight: bold">
          UNITE ADMINISTRATIVE : {{ libelleUniteAdministrative(editMandat.id) }}
        </h3>
      </div>
      <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div> 
      <div class="modal-body" id="printpdf">
          <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">ETAT D'EXECUTION DU BUDGET PAR UA ET TYPE DE FINANCEMENT</h2>
          </tr>
        </table>
        <table class="table table-bordered table-striped">
         <thead>
           
              <tr style="">
                 
                <th style=" font-size: 8px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" class="span">
                  CODE 
                  
                  </th>

                <th style=" font-size: 8px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  LIBELLE
                  
                  </th>

                <th style=" font-size: 8px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  BUDGET INITIAL</th>

                <th style=" font-size: 8px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  REAMENAGEMENT BUDGETAIRE</th>

                <th style=" font-size: 8px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  BUDGET ACTUEL</th>

                <th style=" font-size: 8px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  MONTANTS EXECUTES</th>


                  <th style=" font-size: 8px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  NB OP PROVISOIRE NON REGULARISE(S)</th>


                <th style=" font-size: 8px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  DISPONIBLE</th>
                <th style=" font-size: 8px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">TAUX D'EXECUTION</th>
                  
        
              </tr> 
            </thead>
            <br>
          <tbody >
            <tr>
              <td style="background-color: #a7e556 !important; text-align: left;color:#000;font-weight: bold; font-size: 12px">
                  {{ CodeUniteAdministrative(editMandat.id) || "Auncun résultat" }}
                </td>
                
                <td style="background-color: #a7e556 !important; text-align: left;color:#000;font-weight: bold; font-size: 12px">
                  {{
                    libelleUniteAdministrative(editMandat.id) || "Auncun résultat"
                  }} 
                </td>

                <td
                 style="text-align:center;background-color: #a7e556 !important; color:#000;font-weight: bold; font-size: 12px"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(MontantBudgetVote(editMandat.id))
                    )
                  }}
                </td>
                <td
                  style="text-align:center;background-color: #a7e556 !important; color:#000;font-weight: bold; font-size: 12px"
                  @click="percuFacture(editMandat.id)"
                >
                  {{ formatageSommeSansFCFA(parseFloat(MontantBudgetVote(editMandat.id)) + parseFloat(AfficheVariationBudget(editMandat.id))) }}
                </td>
                <td
                  style="text-align:center;background-color: #a7e556 !important; color:#000;font-weight: bold; font-size: 12px"
                >
                   {{ formatageSommeSansFCFA(parseFloat(MontantBudgetVote(editMandat.id)) + parseFloat(AfficheVariationBudget(editMandat.id))) }}
                </td>

                <td
                  style="text-align:center;background-color: #a7e556 !important; color:#000;font-weight: bold; font-size: 12px"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(MontantBudgetExecuté(editMandat.id))
                    )
                  }}
                </td>

                 <td
                  style="text-align:center;background-color: #a7e556 !important; color:#000;font-weight: bold; font-size: 12px"
                >
                  {{
                    0
                  }}
                </td>
                  <td
                 style="text-align:center;background-color: #a7e556 !important; color:#000;font-weight: bold; font-size: 12px"
                >
                  {{ formatageSommeSansFCFA((parseFloat(MontantBudgetVote(editMandat.id)) + parseFloat(AfficheVariationBudget(editMandat.id)))-parseFloat(MontantBudgetExecuté(editMandat.id))) }}
                </td>
                <td
                 style="text-align:center;background-color: #a7e556 !important;color:#000;font-weight: bold; font-size: 12px"
                >
                  {{ EviteNaN(editMandat.id) }}%
                </td>
            </tr>
               <tr v-for="unite1 in AfficheTypeFinancement(editMandat.id)" :key="unite1.id"  style="margin-left:50px">
           
             
           <td>
                   
                </td>
              <td style=" font-size: 12px; color:#000">{{ libelleTypeFinancement(unite1) }}</td>
              <td
                style=" font-size: 12px; text-align: center;color:#000"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantVoteParTypeFinancement(editMandat.id, unite1)
                    )
                  )
                }}
              </td>
              <td
                style=" font-size: 12px; text-align: center;color:#000"
              >
                {{
                 formatageSommeSansFCFA(
                    parseFloat( TotalMontantReamenagement(editMandat.id, unite1)))
                    
                }}
              </td>
              <td
                style=" font-size: 12px; text-align: center;color:#000"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat( TotalMontantReamenagement(editMandat.id, unite1)))
                    
                }}
              </td>
              <td
                style=" font-size: 12px; text-align: center;color:#000"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantExecuteParTypeFinancement(editMandat.id, unite1)
                    )
                  )
                }}
              </td>

               <td
                style=" font-size: 12px; text-align: center;color:#000"
              >
                {{
                  0
                }}
              </td>
 <td
                style=" font-size: 12px; text-align: center;color:#000"
              >
                {{
                 formatageSommeSansFCFA(
                    parseFloat(
                      TotalMontantReamenagement(editMandat.id, unite1) - MontantExecuteParTypeFinancement(editMandat.id, unite1)
                    )
                  )
                }}
              </td>
              <td
                style=" font-size: 12px; text-align: center;color:#000"
              >
                {{ EviteNaNTypeFinancement(editMandat.id, unite1) }}%
              </td>
              
              

            </tr>
          </tbody>
        </table>
        <!-- <div class="modal-footer">
          <a data-dismiss="modal" class="btn btn-danger" href="#">Fermer</a>
        </div> -->
      </div>
    </div>


    <table class="table table-striped">
      <tbody>
        <tr>
          <td class="span5">
            <label>EXERCICE </label>
            <model-list-select
              style="border: 1px solid #000"
              class="wide"
              :list="exercices_budgetaires"
              v-model="exercices_budgetaires_id"
              option-value="annee"
              option-text="annee"
              placeholder="2021"
            >
            </model-list-select>
          </td>
          <td>

          </td>
          <!-- <td colspan="" class="span10">
            <label>UNITE ADMINISTRATIVE </label>
            <model-list-select
              style="border: 2px solid #000"
              class="wide"
              :list="uniteAdministratives"
              v-model="uniteAdmin_id"
              option-value="id"
              option-text="libelle"
              placeholder="TOUTES LES UNITES ADMINISTRATIVES"
            >
            </model-list-select>
          </td> -->

          <!-- <td colspan="">
            <label>TYPE FINANCEMENT </label>
            <model-list-select
              style="background-color: #000; border: 2px solid #000"
              class="wide"
              :list="types_financements"
              v-model="typefinancement"
              option-value="id"
              option-text="libelle"
              placeholder="TOUS LES TYPES FINANCEMENT"
            >
            </model-list-select>
          </td> -->
        </tr>
      </tbody>
    </table>
     <div>
       
        <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">Suivi du budget projet par UA et type Financement</h2>
          </tr>
        </table>
   
    <div class="container-fluid">
      <notifications />
      <div class="widget-box">
        <div class="widget-title">
          <span class="icon">
            <i class="icon-th"></i>
          </span>
          <h5>Suivi du budget</h5>
        </div>

        <div class="span4">
          Afficher
          <select name="pets" id="pet-select" v-model="size" class="span3">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          
        </div>

        <div class="widget-content nopadding" >
          <table class="table table-bordered table-striped">
            <thead >
           
              <tr >
                 <th style=" font-size: 14px; 
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" colspan="2">

                 </th>
                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" class="">
                  CODE UA
                  
                   <button @click="ActiveInputLigne">
                     <i class=" icon-search"></i> 
                      
                    </button>
                     <!-- <input type="text" v-model="inputLigne1" class="span4" /> -->
                     <model-list-select v-show="inputLigneCode == true"
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="uniteAdministratives"
                  v-model="inputLigneCode1"
                  option-value="id"
                  option-text="code"
                  placeholder="CODE UA"
                >
                </model-list-select>
                  </th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  <!-- <button @click="filtreTableau">
                     <i class=" icon-filter"></i> 
                      
                    </button> -->
                  LIBELLE
                   
                   <button @click="ActiveInputLigne1">
                     <i class=" icon-search"></i> 
                      
                    </button>
                     <!-- <input type="text" v-model="inputLigne1" class="span4" /> -->
                     <model-list-select v-show="inputLigneLibelle == true"
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="uniteAdministratives"
                  v-model="inputLigneLibelle1"
                  option-value="id"
                  option-text="libelle"
                  placeholder="LIBELLE UA"
                >
                </model-list-select>
                  </th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  <button @click="tricode()">
                     <i class=" icon-filter"></i> 
                      
                    </button>
                  BUDGET INITIAL
                 
                  
                   <button @click="ActiveInputMontantInitial">
                     <i class=" icon-search"></i> 
                      
                    </button>
                     <money style="text-align:left;color:red"   v-model="montant_Initial" class="span" v-show="inputMontantInitial == true"></money>
                 
              
                  </th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                   <button @click="triModificationBudget()">
                     <i class=" icon-filter"></i> 
                      
                    </button>
                  MODIFICATION BUDGETAIRE
                   <button @click="ActiveInputModificationBudgetaire">
                     <i class=" icon-search"></i> 
                      
                    </button>
                    <money style="text-align:left;color:red"   v-model="montant_ModifierBudget" class="span" v-show="inputModificationBudgetaire == true"></money>
                 
                  </th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  <button @click="triBudgetActuelle()">
                     <i class=" icon-filter"></i> 
                      
                    </button>
                  BUDGET ACTUEL
                   <button @click="ActiveInputMontantActuel">
                     <i class=" icon-search"></i> 
                      
                    </button>
                    <money style="text-align:left;color:red"   v-model="montant_Actuel" class="span" v-show="inputMontantActuel == true"></money>
                 
                 
                  </th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                    <button @click="triBudgetExecute()">
                     <i class=" icon-filter"></i> 
                      
                    </button>
                  MONTANTS EXECUTES
                   <button @click="ActiveInputMontant">
                     <i class=" icon-search"></i> 
                      
                    </button>
                    <money style="text-align:left;color:red"   v-model="montant_execute" class="span" v-show="inputMontantExecute == true"></money>
                 
                  
                  </th>

 <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" title="TOTAL OP PROVISOIRE">
                   <button @click="triTotalOpProvisoire()">
                     <i class=" icon-filter"></i> 
                      
                    </button>
                  TOTAL OP PROVISOIRE
                  <button @click="ActiveInputTotalOpProvisoire">
                     <i class=" icon-search"></i> 
                      
                    </button>
                    <money style="text-align:left;color:red"   v-model="Total_Op_Provisoire" class="span" v-show="inputTotalOpProvisoire == true"></money>
                 
                  </th>
                  <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" title="NBRE OP PROVISOIRE NON REGULARISE(S)">
                   <button @click="triNombreOpNonRegulirise()">
                     <i class=" icon-filter"></i> 
                      
                    </button>
                  NBRE OP NON REGULARISE(S)
                  <button @click="ActiveInputNombreOpNonProvisoireRegulirise">
                     <i class=" icon-search"></i> 
                      
                    </button>
                    <money style="text-align:left;color:red"   v-model="Nombre_Op_Non_Regulirise" class="span" v-show="inputNombreOpNonRegulirise == true"></money>
                 
                  </th>

 <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" title="NBRE OP PROVISOIRE REGULARISE(S)">
                  <button @click="triNombreOpRegulirise()">
                     <i class=" icon-filter"></i> 
                      
                    </button>
                  NBRE OP REGULARISE(S)
                   <button @click="ActiveInputnombreRegulirise">
                     <i class=" icon-search"></i> 
                      
                    </button>
                    <money style="text-align:left;color:red"   v-model="Nombre_Op_Regulirise" class="span" v-show="inputnombreOpRegulirise == true"></money>
                 
                  </th>
                   <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" title="TAUX OP PROVISOIRE NON REGULARISE(S)">
                  <button @click="triTauxOpNonRegulirise()">
                     <i class=" icon-filter"></i> 
                      
                    </button>
                  TAUX OP NON REGULARISE(S)
                  <!-- <button @click="ActiveInputTauxOpNonRegulirise">
                     <i class=" icon-search"></i> 
                      
                    </button>
                   
                 <input
                    type="text"
                    v-model="Taux_Op_non_Regulirise"
                    class="span"
                    v-show="inputTauxOpNonRegulirise == true"
                  /> -->
                  </th>
                  <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" title="TAUX D’OP PROVISOIRE NON REGULARISE HORS DELAI ">
                  TAUX OP NON REGULARISE HORS DELAI </th>
                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  
                  <button @click="triBudgetDispoble()">
                     <i class=" icon-filter"></i> 
                      
                    </button>
                 DISPONIBLE
                   <button @click="ActiveInputMontantDisponble">
                     <i class=" icon-search"></i> 
                      
                    </button>
                     <money style="text-align:left;color:red"   v-model="montant_disponible" class="span" v-show="inputMontantDisponible == true"></money>
                 
                  
                  </th>
                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  <button @click="triTauxExecution()">
                     <i class=" icon-filter"></i> 
                      
                    </button>
                  TAUX D'EXECUTION </th>
                   
                   <!-- <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" colspan="">
                  EVOLUTION DU TAUX D’EXECUTION </th> -->
        
        
              </tr> 
            </thead>
            <tbody v-for="unite in partition(TriaffichageUniteAdminstrative, size)[page]" :key="unite.id">
              <tr>
                <td>
                   <button @click="ShowMyLigne(unite.id)">
                     <i class="icon-eye-open"></i> 
                      
                    </button>
                    
                </td>
                <td>
                   <button @click="apercuFacture(unite.id)">
                     <i class=" icon-print"></i> 
                      
                    </button>
                    
                </td>
                <td v-bind:class="recupereIDactivite==unite.id ? 'graybg' : 'whitebg'">
                  {{ unite.code || "Auncun résultat" }}
                </td>
                
                <td v-bind:class="recupereIDactivite==unite.id ? 'graybg' : 'whitebg'">
                  {{
                    unite.libelle || "Auncun résultat"
                  }} 
                </td>

                <td
                 v-bind:class="recupereIDactivite==unite.id ? 'graybg' : 'whitebg'" style="text-align:right"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(unite.MontantVote)
                    )
                  }}
                </td>
                <td
                  
                 
                >
                  

                  <button class="btn btn-success taille"  @click="percuFacture(unite.id)">
                        <span style="color:#fff;font-size: 15px;">
                          {{ formatageSommeSansFCFA(parseFloat(unite.Variation12)) }}
                        </span>
                      </button>
                </td>
                <td v-bind:class="recupereIDactivite==unite.id ? 'graybg' : 'whitebg'" style="text-align:right"
                >
                   {{ formatageSommeSansFCFA(parseFloat(unite.Budgetactuel)) }}
                </td>

                <td v-bind:class="recupereIDactivite==unite.id ? 'graybg' : 'whitebg'" style="text-align:right"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(unite.MontantExecute))
                  }}
                </td>
 <td v-bind:class="recupereIDactivite==unite.id ? 'graybg' : 'whitebg'" style="text-align:right"
                >
                  {{ unite.NombreOpProvisoire }}
                </td>
                 <td  style="text-align:right"
                >
                 <button class="btn btn-info taille"  @click="ModalOpNonRegulirise(unite.id)">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{ unite.NombreOpNONRegu }}
                        </span>
                      </button>
                 
                </td>
                 <td  style="text-align:right"
                >
                 <button class="btn btn-primary taille" @click="ModalOpRegulirise(unite.id)">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{ unite.NombreOpREgularise}}
                        </span>
                      </button>
                 
                </td>
                 <td v-bind:class="recupereIDactivite==unite.id ? 'graybg' : 'whitebg'" style="text-align:right"
                >
                  {{ unite.TauxOpNonRegularise }} %
                </td>
                  <td v-bind:class="recupereIDactivite==unite.id ? 'graybg' : 'whitebg'" style="text-align:right"
                >
                  {{
                 0
                   
                  }} %
                </td>
                  <td v-bind:class="recupereIDactivite==unite.id ? 'graybg' : 'whitebg'" style="text-align:right"
                >
                  {{ formatageSommeSansFCFA(parseFloat(unite.Disponible)) }}
                </td>
                <!-- <td
                 v-bind:class="recupereIDactivite==unite.id ? 'graybg' : 'whitebg'"
                >
                  {{ EviteNaN(unite.id) }}%
                </td> -->

                <td style=" text-align: right;color:#000" >
                  <button class="btn btn-danger taille" v-if="parseInt( unite.TauxExecution ) <= 25">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{ unite.TauxExecution }}
                        </span>
                      </button>
                      <button class="btn btn-warning taille" v-else-if="parseInt( unite.TauxExecution ) <= 50">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{ unite.TauxExecution }}
                        </span>
                      </button>
                       <button class="btn btn-success taille" v-else-if=" parseInt( unite.TauxExecution ) <= 75">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{ unite.TauxExecution }}
                        </span>
                      </button>
                      <button class="btn btn-success taille" v-else-if="parseInt( unite.TauxExecution ) <= 100">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{ unite.TauxExecution }}
                        </span>
                      </button>
                  </td>
              </tr>
               <tr v-for="unite1 in AfficheTypeFinancement(unite.id)" :key="unite1.id" v-show="recupereIDactivite==unite.id" style="margin-left:50px">
            <td colspan="">
               
            </td>
             <td>
                   
                </td>
           <td>
                   <button>
                     <i class=" icon-arrow-right"></i> 
                      
                    </button>
                </td>
              <td style=" font-size: 15px; color:#000">{{ libelleTypeFinancement(unite1) }}</td>
              <td
                style="font-size: 15px; text-align: right;color:#000"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantVoteParTypeFinancement(unite.id, unite1)
                    )
                  )
                }}
              </td>
              <td
                style="font-size: 15px; text-align: right;color:#000"
              >
                {{
                 formatageSommeSansFCFA(
                    parseFloat( AfficheVariationBudgetParTypeFinancement(unite.id, unite1)))
                    
                }}
              </td>
              <td
                style="font-size: 15px; text-align: right;color:#000"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat( TotalMontantReamenagement(unite.id, unite1)))
                    
                }}
              </td>
              <td
                style="font-size: 15px; text-align: right;color:#000"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantExecuteParTypeFinancement(unite.id, unite1)
                    )
                  )
                }}
              </td>
 <td
                style="font-size: 15px; text-align: right;color:#000"
              >
                {{
               (parseFloat(NombreOPNonReguTypeFinancement(unite.id, unite1))+parseFloat(NombreOPReguTypeFinancement(unite.id, unite1)))
                }}
              </td>
               <td
                style="font-size: 15px; text-align: right;color:#000"
              >
              
                 <button class="btn btn-info taille">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{  NombreOPNonReguTypeFinancement(unite.id, unite1)}}
                        </span>
                      </button>
              </td>
               <td
                style="font-size: 15px; text-align: right;color:#000"
              >
                
                 <button class="btn btn-primary taille">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{  NombreOPReguTypeFinancement(unite.id, unite1)}}
                        </span>
                      </button>
              </td>
               <td
                style="font-size: 15px; text-align: right;color:#000"
              >
                {{
                TauxOPProvisoireNonRegularisTypeFinancement(unite.id, unite1)
                }} %
              </td>
              <td
                style="font-size: 15px; text-align: right;color:#000"
              >
                {{
                TauxOPProvisoireNonRegularisTypeFinancement(unite.id, unite1)
                }} %
              </td>
 <td
                style="font-size: 15px; text-align: right;color:#000"
              >
                {{
                 formatageSommeSansFCFA(
                    parseFloat(
                      TotalMontantReamenagement(unite.id, unite1) - MontantExecuteParTypeFinancement(unite.id, unite1)
                    )
                  )
                }}
              </td>
              <!-- <td
                style="font-size: 15px; text-align: center;color:#000"
              >
                {{ EviteNaNTypeFinancement(unite.id, unite1) }}%
              </td> -->

              <td style=" text-align: right;color:#000" >
                  <button class="btn btn-danger taille" v-if="parseFloat(EviteNaNTypeFinancement(unite.id, unite1)) <= 0.25">
                        <span style="color:#000;font-size: 15px;">
                          {{EviteNaNTypeFinancement(unite.id, unite1)}}
                        </span>
                      </button>
                      <button class="btn btn-warning taille" v-else-if="parseFloat(EviteNaNTypeFinancement(unite.id, unite1)) <= 0.50">
                        <span style="color:#000;font-size: 15px;">
                          {{EviteNaNTypeFinancement(unite.id, unite1)}}
                        </span>
                      </button>
                       <button class="btn btn-success taille" v-else-if="parseFloat(EviteNaNTypeFinancement(unite.id, unite1)) <= 0.75">
                        <span style="color:#000;font-size: 15px;">
                          {{EviteNaNTypeFinancement(unite.id, unite1)}}
                        </span>
                      </button>
                      <button class="btn btn-success taille" v-else-if="parseFloat(EviteNaNTypeFinancement(unite.id, unite1)) <= 1">
                        <span style="color:#000;font-size: 15px;">
                          {{EviteNaNTypeFinancement(unite.id, unite1)}}
                        </span>
                      </button>
                  </td>
              

            </tr>
              
            </tbody>
             <tfoot>
                <tr style="margin-left:25px">
                  <td colspan="2"  style="text-align:center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000"> </td>
                  <td colspan="2" style="text-align:center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">TOTAL ACTIVITE : </td>
                      

                  <!-- <td style="text-left: center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                      ACTIVITE</td> -->

                  <td style="text-align: right;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                    {{ formatageSommeSansFCFA(parseFloat(TotalMontantBudgetVote )) }}</td>

                  <td style="text-align: right;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                    {{ formatageSommeSansFCFA(parseFloat(TotalMontantBudgetReamenager ))  }}</td>

                  <td style="text-align: right;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                    {{ formatageSommeSansFCFA(parseFloat(TotalMontantBudgetActuel )) }}</td>

                  <td style="text-align: right;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                    {{  formatageSommeSansFCFA(parseFloat(TotalMontantBudgetExecuté ))  }}</td>
                  <td style="text-align: right;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                   
                 </td>
                 <td style="text-align: right;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                   
                 </td>
 <td style="text-align: right;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                   
                 </td>
                  <td style="text-align: right;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                   
                 </td>
                  <td style="text-align: right;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                   
                 </td>
                  <td style="text-align: right;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                   {{ formatageSommeSansFCFA(parseFloat(TotalMontantDisponible)) }}
                 </td>

                 <td style="text-align: center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                     {{ TotalEviteNaN }}
                 </td>

                 <!-- <td style="text-align: center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                     
                 </td> -->


                </tr>
             </tfoot>
          </table>
        </div>
         <div class="pagination alternate">
      <ul>
        <li :class="{ disabled: page == 0 }">
          <a @click.prevent="precedent()" href="#">Précedent</a>
        </li>
        <li
          v-for="(titre, index) in partition(afficheUa, size).length"
          :key="index"
          :class="{ active: active_el == index }"
        >
          <a @click.prevent="getDataPaginate(index)" href="#">{{
            index + 1
          }}</a>
        </li>
        <li
          :class="{ disabled: page == partition(afficheUa, size).length - 1 }"
        >
          <a @click.prevent="suivant()" href="#">Suivant</a>
        </li>
      </ul>
    </div>
      </div>
    </div>
    
  </div>








  <div id="OpNonRegulirise" class="modal hide tailgrand">
      <div class="modal-header">
         <a data-dismiss="modal" class="btn btn-danger" href="#">Fermer</a>
        <h3 style="font-size: 14px; font-weight: bold">
          UNITE ADMINISTRATIVE : {{ libelleUniteAdministrative(editOpNonRegulirise.id) }}
        </h3>
      </div>
      <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdfDetailReamenagement()">
        Exporter en PDF
      </button>
    </div> 
      <div class="modal-body" id="printpdf1">
      
 <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 14px;text-decoration: underline ;text-transform: uppercase;">LISTE DES OP NON REGULIRISE</h2>
          </tr>
        </table>
        <table class="table table-bordered table-striped">
          <thead>
            <tr style="">
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
              EXERCICE
              </th>

              <!-- <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                 
                "
              >
                TYPE OP
              </th> -->

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
                NUMERO OP
              </th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
              OBJET OP
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
              MONTANT OP
              </th>
              
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
              DECISION
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
             DATE DECISION CF
              </th>
              <!-- <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
             DATE DU JOURS
              </th>
               <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
            {{ timestamp }} HORS DELAI{{nombreDeJourEntre}}
              </th> -->
            </tr>
          </thead>
          
            
            <tbody>
            <tr v-for="item in ListeDesOpNonRegulirise(editOpNonRegulirise.id)" :key="item.id">
              <td>{{item.exercice}}</td>
              <!-- <td>{{item.type_ordre_paiement}}</td> -->
              <td>{{item.numero_ordre_paiement}}</td>
              <td>{{item.odjet_autre_depense}}</td>
              <td>{{formatageSommeSansFCFA(parseFloat(item.montant_ordre_paiement))  }}</td>
              
               <td >
                      <button
                        v-if="item.decision_cf == 8"
                        class="btn btn-success tailBtn"
                        
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Visé</span
                        >
                      </button>
                      <button
                        v-else-if="item.decision_cf == 2"
                        class="btn btn-warning tailBtn"
                        
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Différé</span
                        >
                      </button>
                      <button
                        v-else-if="item.decision_cf == 3"
                        class="btn btn-danger tailBtn"
                        
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Réjeté</span
                        >
                      </button>
                      <button
                        v-else-if="item.decision_cf == 9"
                        class="btn btn-success tailBtn"
                        
                      >
                        <span
                          title="Visé avec observation"
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Visé O</span
                        >
                      </button>
                      <button
                        v-else
                        class="btn btn-info tailBtn"
                        
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Attente</span
                        >
                      </button>
                    </td>
                    <td>{{item.date_decision_cf }}</td>
                    <!-- <td>{{timestamp}}</td>
                    <td>
                      <button class="btn btn-danger taille" >
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                        {{nombreDejourCalcule(item.date_decision_cf,timestamp)}}
                        </span>
                      </button>
                    </td> -->
              <!-- <td>
                 <router-link
                        :to="{
                          name: 'VoirDetailAutreFiche',
                          params: { id: item.id },
                        }"
                        class="btn btn"
                        title="Editer Fiche"
                        style="width: 50%"
                        @click="fermerModal()"
                      >
                        <span
                          class=""
                          style="
                            font-size: 15px;
                            font-weight: bold;
                            color: #000;
                          "
                          
                          ><i class="icon-eye-open"></i> Voir</span
                        >
                      </router-link>
              </td> -->
            </tr>
          </tbody>
        </table>


        <!-- <div class="modal-footer">
          <a data-dismiss="modal" class="btn btn-danger" href="#">Fermer</a>
        </div> -->
      </div>
    </div>
   




   

  <div id="OpRegulirise" class="modal hide tailgrand">
      <div class="modal-header">
         <a data-dismiss="modal" class="btn btn-danger" href="#">Fermer</a>
        <h3 style="font-size: 14px; font-weight: bold">
          UNITE ADMINISTRATIVE : {{ libelleUniteAdministrative(editOpRegulirise.id) }}
        </h3>
      </div>
      <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdfDetailReamenagement12()">
        Exporter en PDF
      </button>
    </div> 
      <div class="modal-body" id="printpdf12">
      
 <table class="table table-bordered table-striped">
          <tr>
              <h2 style="text-align: center; font-size: 14px;text-decoration: underline ;text-transform: uppercase;">LISTE DES OP REGULIRISE</h2>
          </tr>
        </table>
        <table class="table table-bordered table-striped">
          <thead>
            <tr style="">
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
              EXERCICE
              </th>

              <!-- <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                 
                "
              >
                TYPE OP
              </th> -->

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
                NUMERO OP
              </th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
              OBJET OP
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
              MONTANT OP
              </th>
              
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
              DECISION
              </th>
              <!-- <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
              DETAIL OP
              </th> -->
            </tr>
          </thead>
          
            
            <tbody>
             <tr v-for="item in ListeDesOpRegulirise(editOpRegulirise.id)" :key="item.id">
              <td>{{item.exercice}}</td>
              <!-- <td>{{item.type_ordre_paiement}}</td> -->
              <td>{{item.numero_ordre_paiement}}</td>
              <td>{{item.odjet_autre_depense}}</td>
              <td>{{item.montant_ordre_paiement}}</td>
              
               <td >
                      <button
                        v-if="item.decision_cf == 8"
                        class="btn btn-success tailBtn"
                        
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Visé</span
                        >
                      </button>
                      <button
                        v-else-if="item.decision_cf == 2"
                        class="btn btn-warning tailBtn"
                        
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Différé</span
                        >
                      </button>
                      <button
                        v-else-if="item.decision_cf == 3"
                        class="btn btn-danger tailBtn"
                        
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Réjeté</span
                        >
                      </button>
                      <button
                        v-else-if="item.decision_cf == 9"
                        class="btn btn-success tailBtn"
                        
                      >
                        <span
                          title="Visé avec observation"
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Visé O</span
                        >
                      </button>
                      <button
                        v-else
                        class="btn btn-info tailBtn"
                        
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Attente</span
                        >
                      </button>
                    </td>
              <!-- <td>
                 <router-link
                        :to="{
                          name: 'VoirDetailAutreFiche',
                          params: { id: item.id },
                        }"
                        class="btn btn"
                        title="Editer Fiche"
                        style="width: 50%"
                        @click="fermerModal()"
                      >
                        <span
                          class=""
                          style="
                            font-size: 15px;
                            font-weight: bold;
                            color: #000;
                          "
                          
                          ><i class="icon-eye-open"></i> Voir</span
                        >
                      </router-link>
              </td> -->
            </tr>
          </tbody>
        </table>


        <!-- <div class="modal-footer">
          <a data-dismiss="modal" class="btn btn-danger" href="#">Fermer</a>
        </div> -->
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import {
  formatageSommeSansFCFA,
  partition,
  formatageSomme,
} from "@/Repositories/Repository";
import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
//import ProgressBar from "../component/ProgressBar"
export default {
  name: "budget",
  components: {
    //ProgressBar
    ModelListSelect,
  },
  data() {
    return {
      page: 0,
      size: 5,
      active_el: 0,
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },
      ],
      editMandat: {},
      exercices_budgetaires_id: 0,
      typefinancement: 0,
      uniteAdmin_id: 0,
      editUniteAdministrative: {},
      detailBudget: "",
      budgetGeneralCharge: "",
      progress: 0,
      bgWidth: "0%",
      bgHeight: "30px",
      exercice_budget: "",
      message_mandater: "",
      i: 0,
      isOffreTechniqueFinancier: false,
      namePDF: "",
      uploadPercentage: 0,
      recupereIDactivite:"",
      fichierPDF: "",
      imagePDF: "",
      selectedFile: "",
      resultaAnalysePv: [],
      resultaFinalCandidat: [],
      entreprise_vainqueur: "",
      registrecc_vainqueur: "",
      identreprise_vainqueur: "",
      message_setion_vainqueur: "",
      info_avis_bailleur: "",
      namePDFDemandeAno: "",
      fichierPDFDemandeAno: "",
      imagePDFDemandeAno: "",
montant_execute:0,
montant_disponible:0,
montant_Initial:0,
montant_ModifierBudget:0,
montant_Actuel:0,
      search: "",
      uniteadministrative_id: "",
      inputLigneCode1:0,
      inputLigneCode:false,
      inputLigneLibelle:false,
       inputMontantExecute:false,
       inputMontantDisponible:false,
       inputMontantInitial:false,
       inputModificationBudgetaire:false,
       inputMontantActuel:false,
       inputTotalOpProvisoire:false,
       inputNombreOpNonRegulirise:false,
       inputnombreOpRegulirise:false,
       inputTauxOpNonRegulirise:false,
       Total_Op_Provisoire:0,
        Nombre_Op_Non_Regulirise:0,
        Taux_Op_non_Regulirise:0,
      inputLigneLibelle1:0,
      Nombre_Op_Regulirise:0,
      editOpNonRegulirise:{},
      editOpRegulirise:{},
      timestamp: "",
      tricodedata:0,
      triModificationBudgetdata:0,
      triBudgetActuelledata:0,
      triBudgetExecutedata:0,
      triBudgetDisponibledata:0,
      triTotalProvisoiredata:0,
      triOpNonRegulirisedata:0,
      triOpRegulirisedata:0,
      triTauxOpRegulirisedata:0,
      triTauxExecutiondata:0
    };
  },
  //  created() {
  //    console.log(this.TriaffichageUniteAdminstrative);
  //  },
  computed: {
    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge",
      "budgetGeneral",
      "transferts",
      "budgetEclate",
      "groupeParTypeFinancementBudgetEclate",
    ]),

    ...mapGetters("bienService", [
      "getMandatPersonnaliserVise",
      "getMandatPersonnaliserPersonnel",
      "mandats",
      "gettersgestionOrdrePaiement",
    ]),

    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
    ]),
    ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,
    ...mapGetters("Utilisateurs", [
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    
    FiltreTauxOpNonProvisoire(){
   if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => this.TauxOPProvisoireNonRegularis(item2.id) == this.Taux_Op_non_Regulirise);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => this.TauxOPProvisoireNonRegularis(item2.id) == this.Taux_Op_non_Regulirise
      );
},
FiltreTotalOpProvisoire(){
   if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => this.TotalOPProvisoire(item2.id) == this.Total_Op_Provisoire);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => this.TotalOPProvisoire(item2.id) == this.Total_Op_Provisoire
      );
},
afficheMontantExecute(){
   return (id) => {
          if (id != null && id != "") {
            return this.gettersgestionOrdrePaiement
              .filter(
                (qtreel) =>
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) ||
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null) ||
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) ||
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null)
              )
              .reduce(
                (prec, cur) =>
                  parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
                0
              )
              .toFixed(0);
          } else {
            return 0;
          }
        };
},

filtre_MoodicationBudgetaire() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => this.AfficheVariationBudget(item2.id) == this.montant_ModifierBudget);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => this.AfficheVariationBudget(item2.id) == this.montant_ModifierBudget
      );
    },


filtre_NombreOpRegularise() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => this.NombreOPRegulirise(item2.id) == this.Nombre_Op_Regulirise);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => this.NombreOPRegulirise(item2.id) == this.Nombre_Op_Regulirise
      );
    },
filtre_NombreOpNonRegularise() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => this.NombreOPNonRegu(item2.id) == this.Nombre_Op_Non_Regulirise);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => this.NombreOPNonRegu(item2.id) == this.Nombre_Op_Non_Regulirise
      );
    },






filtre_Montant_Actuelle() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => this.CalculerMontantActuel(item2.id) == this.montant_Actuel);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => this.CalculerMontantActuel(item2.id) == this.montant_Actuel
      );
    },
filtre_Montant_Initial() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => this.MontantBudgetVote(item2.id) == this.montant_Initial);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => this.MontantBudgetVote(item2.id) == this.montant_Initial
      );
    },
filtre_Montant_Disponible() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => this.CalculerMontantDisponible(item2.id) == this.montant_disponible);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => this.CalculerMontantDisponible(item2.id) == this.montant_disponible
      );
    },
filtre_Montant_execute() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => this.afficheMontantExecute(item2.id) == this.montant_execute);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => this.afficheMontantExecute(item2.id) == this.montant_execute
      );
    },




ListeDesOpRegulirise() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter((item) => item.type_ordre_paiement == 2 && item.unite_administrative_id==id && item.diff_reg_op==1 && item.exercice==this.afficheAnnee);
         
        }
       
      };
    },
ListeDesOpNonRegulirise() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter((item) => item.type_ordre_paiement == 2 && item.unite_administrative_id==id && item.diff_reg_op==0 && item.exercice==this.afficheAnnee);
         
        }
       
      };
    },




    TotalOPProvisoire() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id  && qtreel.type_ordre_paiement==2 && qtreel.exercice==this.afficheAnnee
            ).length
            
            
        } else {
          return 78;
        }
      };
    },
    NombreOPNonRegu() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id && qtreel.diff_reg_op != 1 && qtreel.type_ordre_paiement==2 && qtreel.exercice==this.afficheAnnee
            ).length
            
            
        } else {
          return 78;
        }
      };
    },
     NombreOPRegulirise() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id && qtreel.diff_reg_op == 1 && qtreel.type_ordre_paiement==2 && qtreel.exercice==this.afficheAnnee
            ).length
            
            
        } else {
          return 78;
        }
      };
    },
    TotalOPNonReguTypeFinancement() {
      return (id,id1) => {
          if (id != null && id != "",id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                 qtreel.unite_administrative_id == id && qtreel.type_financement_id == id1 && qtreel.diff_reg_op == 0 && qtreel.type_ordre_paiement==2 && qtreel.exercice==this.afficheAnnee
            ).length
            
            
        } else {
          return 78;
        }
      };
    },
     NombreOPNonReguTypeFinancement() {
      return (id,id1) => {
        if (id != null && id != "",id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id && qtreel.type_financement_id == id1 && qtreel.diff_reg_op == 0 && qtreel.type_ordre_paiement==2 && qtreel.exercice==this.afficheAnnee
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
      NombreOPReguTypeFinancement() {
      return (id,id1) => {
        if (id != null && id != "",id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id && qtreel.type_financement_id == id1 && qtreel.diff_reg_op == 1 && qtreel.type_ordre_paiement==2 && qtreel.exercice==this.afficheAnnee
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
    TotalVariation() {
      return (id2) => {
        if (id2 != null && id2 != "") {
          return this.budgetEclate
            .filter((prod) => prod.uniteadministrative_id == id2)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        }
      };
    },
    libelleLigneEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const objet = this.plans_budgetaires.find((item) => item.id == id);
          if (objet) return objet.code.concat("    ", objet.libelle);
        }
        return null;
      };
    },
    variation() {
      return (id) => {
        if (id != null && id != "") {
          const objet = this.budgetEclate.find(
            (item) =>
              item.uniteadministrative_id == this.editMandat.id &&
              item.ligneeconomique_id == id && item.annebudgetaire == this.afficheAnnee && item.budget_active==1
          );
          if (objet) return objet.variation_budget;
        }
        return null
      }
},
AfficheVariationBudget() {
      return (id2) => {
        if (id2 != null && id2 != "") {
          return this.budgetEclate.filter((prod) => prod.uniteadministrative_id == id2 && prod.annebudgetaire==this.anneeAmort && prod.budget_active==1).reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        }
      };
    },
    AfficheVariationBudgetParTypeFinancement() {
      return (id2,id1) => {
        if (id2 != null && id2 != "" && id1 != null && id1 != "") {
          return this.budgetEclate.filter((prod) => prod.uniteadministrative_id == id2 && prod.type_financement_id == id1 && prod.annebudgetaire==this.anneeAmort && prod.budget_active==1).reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        }
      };
    },
montantVoteToralParLigne(){
    return (id) => {
        if (id != null && id != "" ) {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id && qtreel.budget_active == 1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    montantVoteParLigne() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id &&
                qtreel.ligneeconomique_id == id1 &&
                qtreel.budget_actif_def == 1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    montantActuelParReamenagement() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id && qtreel.budget_active == 1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    montantActuelParLigne() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id &&
                qtreel.ligneeconomique_id == id1 &&
                qtreel.budget_active == 1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    MontantExecute() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.unite_administrative_id == this.editMandat.id &&
                  qtreel.ligne_economique_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8 &&
                  qtreel.diff_op == null) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9 &&
                  qtreel.diff_op == null) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8 &&
                  qtreel.diff_op == null) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9 &&
                  qtreel.diff_op == null)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    libelleTypeFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.types_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    afficheDetailReamenagement() {
      // return this.budgetEclate.filter(item=>item.uniteadministrative_id == this.editMandat.id && item.variation_budget!=0)

      //  return (id) => {

      let objet = this.budgetEclate.filter(
        (item) =>
          item.uniteadministrative_id == this.editMandat.id &&
          item.variation_budget != 0
      );
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.ligneeconomique_id);
        });
        let unique = [...new Set(array_exercie)];
        //console.log(unique);
        if (unique.length == 0) {
          return [];
        }
        return unique;
      }
      return [];
      //  };
    },
    
    arrayExerciceDecompteBienServiceTresor() {
      return (id) => {
        
        let objet = this.budgetEclate.filter(item=>item.uniteadministrative_id==id && item.type_financement_id == 14);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_financement_id);
          });
          let unique = [...new Set(array_exercie)];
         // console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
     };
    },
    
    AfficheTypeFinancement() {
      return (id) => {
        
        let objet = this.budgetEclate.filter(item=>item.uniteadministrative_id==id && item.type_financement_id == 14 || item.uniteadministrative_id==id && item.type_financement_id == 13 || item.uniteadministrative_id==id && item.type_financement_id == 15);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_financement_id);
          });
          let unique = [...new Set(array_exercie)];
          //console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
     };
    },
    arrayExerciceDecompteBienServiceDon() {
      return (id) => {
        
        let objet = this.budgetEclate.filter(item=>item.uniteadministrative_id==id && item.type_financement_id == 13);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_financement_id);
          });
          let unique = [...new Set(array_exercie)];
         // console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
     };
    },
    arrayExerciceDecompteBienServiceEmprunt() {
      return (id) => {
        
        let objet = this.budgetEclate.filter(item=>item.uniteadministrative_id==id && item.type_financement_id == 15);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_financement_id);
          });
          let unique = [...new Set(array_exercie)];
         // console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
     };
    },
arrayExerciceDecompteBienService() {
      return (id) => {
        let objet = this.budgetEclate.filter(
          (item) => item.uniteadministrative_id == id
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_financement_id);
          });
          let unique = [...new Set(array_exercie)];
         // console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
      };
    },
    MontantExecuteParTypeFinancement() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.unite_administrative_id == id &&
                  qtreel.type_financement_id == id1 &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8 &&
                  qtreel.diff_op == null) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.type_financement_id == id1 &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9 &&
                  qtreel.diff_op == null) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.type_financement_id == id1 &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8 &&
                  qtreel.diff_op == null) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.type_financement_id == id1 &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9 &&
                  qtreel.diff_op == null)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    MontantVoteParTypeFinancement() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id &&
                qtreel.type_financement_id == id1 &&
                qtreel.budget_actif_def == 1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    TotalVoteParTypeFinancement() {
      return this.budgetEclate
        .filter(
          (qtreel) =>
            qtreel.uniteadministrative_id == this.editMandat.id &&
            qtreel.budget_actif_def == 1
        )
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
        .toFixed(0);
    },
    totalComsommeYtpeFinancement() {
      return this.gettersgestionOrdrePaiement
        .filter(
          (qtreel) =>
            (qtreel.exercice == this.afficheAnnee &&
              qtreel.unite_administrative_id == this.editMandat.id &&
              qtreel.type_ordre_paiement == 1 &&
              qtreel.decision_cf == 8 &&
              qtreel.diff_op == null) ||
            (qtreel.exercice == this.afficheAnnee &&
              qtreel.unite_administrative_id == this.editMandat.id &&
              qtreel.type_ordre_paiement == 1 &&
              qtreel.decision_cf == 9 &&
              qtreel.diff_op == null) ||
            (qtreel.exercice == this.afficheAnnee &&
              qtreel.unite_administrative_id == this.editMandat.id &&
              qtreel.type_ordre_paiement == 4 &&
              qtreel.decision_cf == 8 &&
              qtreel.diff_op == null) ||
            (qtreel.exercice == this.afficheAnnee &&
              qtreel.unite_administrative_id == this.editMandat.id &&
              qtreel.type_ordre_paiement == 4 &&
              qtreel.decision_cf == 9 &&
              qtreel.diff_op == null)
        )
        .reduce(
          (prec, cur) =>
            parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
          0
        )
        .toFixed(0);
    },

    //******** gestion des totaux*******************
//this.inputLigneCode1 != 0 && this.inputLigneLibelle1==0
    TotalEviteNaN() {
      if (
        this.TotalMontantBudgetExecuté == 0 &&
        this.TotalMontantBudgetActuel == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.TotalMontantBudgetExecuté) /
            parseFloat(this.TotalMontantBudgetActuel)) *
          100
        ).toFixed(2);
      }
    },

    TotalMontantDisponible(){
        return (this.TotalMontantBudgetActuel - this.TotalMontantBudgetExecuté);
    },


            TotalMontantBudgetVote() {
              if(this.inputLigneCode1 != 0 ){
                  return this.budgetEclate
              .filter(
                (qtreel) =>
                  (qtreel.uniteadministrative_id ==this.inputLigneCode1 &&
                  
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.budget_actif_def == 1)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);

              }else if( this.inputLigneLibelle1!=0){
                      return this.budgetEclate
              .filter(
                (qtreel) =>
                  (qtreel.uniteadministrative_id ==this.inputLigneLibelle1 &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.budget_actif_def == 1)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
              }else if(this.montant_Actuel != 0 ){
                        return this.budgetEclate
              .filter(
                (qtreel) =>
                  ( this.CalculerMontantActuel(qtreel.uniteadministrative_id) ==this.montant_Actuel &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.budget_actif_def == 1)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);

              }else if(this.montant_Initial!=0){

                return this.budgetEclate
              .filter(
                (qtreel) =>
                  (this.MontantBudgetVote(qtreel.uniteadministrative_id) == this.montant_Initial &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.budget_actif_def == 1)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);

              }else if(this.montant_disponible!=0){

                return this.budgetEclate
              .filter(
                (qtreel) =>
                  (this.CalculerMontantDisponible(qtreel.uniteadministrative_id) == this.montant_disponible &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.budget_actif_def == 1)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);

              }else if(this.montant_ModifierBudget!=0){

                return this.budgetEclate
              .filter(
                (qtreel) =>
                  (this.AfficheVariationBudget(qtreel.uniteadministrative_id) == this.montant_ModifierBudget &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.budget_actif_def == 1)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);

              }
              
              else{
                return this.budgetEclate
              .filter(
                (qtreel) =>
                  (qtreel.uniteadministrative_id !=null &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.budget_actif_def == 1)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
              }
            },



             TotalMontantBudgetReamenager() {
          if(this.inputLigneCode1 != 0 ){
                  return this.budgetEclate
              .filter(
                (qtreel) =>
                  (qtreel.uniteadministrative_id ==this.inputLigneCode1 &&
                  
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.variation_budget!=0)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),0).toFixed(0);

              }else if( this.inputLigneLibelle1!=0){
                      return this.budgetEclate
              .filter(
                (qtreel) =>
                  (qtreel.uniteadministrative_id ==this.inputLigneLibelle1 &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.variation_budget!=0)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),0).toFixed(0);
              }else if(this.montant_Actuel != 0 ){
                        return this.budgetEclate
              .filter(
                (qtreel) =>
                  ( this.CalculerMontantActuel(qtreel.uniteadministrative_id) ==this.montant_Actuel &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.variation_budget!=0)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),0).toFixed(0);

              }else if(this.montant_Initial!=0){

                return this.budgetEclate
              .filter(
                (qtreel) =>
                  (this.MontantBudgetVote(qtreel.uniteadministrative_id) == this.montant_Initial &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.variation_budget!=0)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),0).toFixed(0);

              }else if(this.montant_disponible!=0){

                return this.budgetEclate
              .filter(
                (qtreel) =>
                  (this.CalculerMontantDisponible(qtreel.uniteadministrative_id) == this.montant_disponible &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.variation_budget!=0)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),0).toFixed(0);

              }else if(this.montant_ModifierBudget!=0){

                return this.budgetEclate
              .filter(
                (qtreel) =>
                  (this.AfficheVariationBudget(qtreel.uniteadministrative_id) == this.montant_ModifierBudget &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.variation_budget!=0)
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),0).toFixed(0);

              }
              
              else{
                return this.budgetEclate
              .filter(
                (qtreel) =>
                  (qtreel.uniteadministrative_id !=null &&
                  qtreel.annebudgetaire == this.afficheAnnee )
              ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),0).toFixed(0);
              }
            },


             TotalMontantBudgetActuel() {
           return (parseFloat(this.TotalMontantBudgetVote) + parseFloat(this.TotalMontantBudgetReamenager))

            },



            TotalMontantBudgetExecuté(){
              if(this.inputLigneCode1 != 0 ){
                    return this.gettersgestionOrdrePaiement
              .filter(
                (qtreel) =>               
                  (qtreel.unite_administrative_id == this.inputLigneCode1 &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (
                  qtreel.unite_administrative_id == this.inputLigneCode1 &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null) 
                    ||
                  (
                  qtreel.unite_administrative_id == this.inputLigneCode1 &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (
                  qtreel.unite_administrative_id == this.inputLigneCode1 &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null)
              ).reduce((prec, cur) =>
                  parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);

              }else if(this.inputLigneLibelle1!=0){
                      return this.gettersgestionOrdrePaiement
              .filter(
                (qtreel) =>
                  (qtreel.unite_administrative_id == this.inputLigneLibelle1 &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (qtreel.unite_administrative_id == this.inputLigneLibelle1 &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null) 
                    ||
                  (qtreel.unite_administrative_id == this.inputLigneLibelle1 &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (qtreel.unite_administrative_id == this.inputLigneLibelle1 &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null)
              ).reduce((prec, cur) =>
                  parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);

              }else if(this.montant_Initial != 0 ){
                        return this.gettersgestionOrdrePaiement
              .filter(
                (qtreel) =>
                  (this.MontantBudgetVote(qtreel.unite_administrative_id) == this.montant_Initial &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.MontantBudgetVote(qtreel.unite_administrative_id) == this.montant_Initial &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.MontantBudgetVote(qtreel.unite_administrative_id) == this.montant_Initial &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.MontantBudgetVote(qtreel.unite_administrative_id) == this.montant_Initial &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null)
              ).reduce((prec, cur) =>
                  parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
              }else if(this.montant_execute != 0 ){
                        return this.gettersgestionOrdrePaiement
              .filter(
                (qtreel) =>
                  (this.afficheMontantExecute(qtreel.unite_administrative_id) == this.montant_execute &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.afficheMontantExecute(qtreel.unite_administrative_id) == this.montant_execute &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.afficheMontantExecute(qtreel.unite_administrative_id) == this.montant_execute &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.afficheMontantExecute(qtreel.unite_administrative_id) == this.montant_execute &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null)
              ).reduce((prec, cur) =>
                  parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
              }else if(this.montant_disponible != 0 ){
                        return this.gettersgestionOrdrePaiement
              .filter(
                (qtreel) =>
                  (this.CalculerMontantDisponible(qtreel.unite_administrative_id) == this.montant_disponible &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.CalculerMontantDisponible(qtreel.unite_administrative_id) == this.montant_disponible &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.CalculerMontantDisponible(qtreel.unite_administrative_id) == this.montant_disponible &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.CalculerMontantDisponible(qtreel.unite_administrative_id) == this.montant_disponible &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null)
              ).reduce((prec, cur) =>
                  parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
              }else if(this.montant_ModifierBudget != 0 ){
                        return this.gettersgestionOrdrePaiement
              .filter(
                (qtreel) =>
                  (this.AfficheVariationBudget(qtreel.unite_administrative_id) == this.montant_ModifierBudget &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.AfficheVariationBudget(qtreel.unite_administrative_id) == this.montant_ModifierBudget &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.AfficheVariationBudget(qtreel.unite_administrative_id) == this.montant_ModifierBudget &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.AfficheVariationBudget(qtreel.unite_administrative_id) == this.montant_ModifierBudget &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null)
              ).reduce((prec, cur) =>
                  parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
              }else if(this.montant_Actuel != 0 ){
                        return this.gettersgestionOrdrePaiement
              .filter(
                (qtreel) =>
                  (this.CalculerMontantActuel(qtreel.unite_administrative_id) == this.montant_Actuel &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.CalculerMontantActuel(qtreel.unite_administrative_id) == this.montant_Actuel &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.CalculerMontantActuel(qtreel.unite_administrative_id) == this.montant_Actuel &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) 
                    ||
                  (this.CalculerMontantActuel(qtreel.unite_administrative_id) == this.montant_Actuel &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null)
              ).reduce((prec, cur) =>
                  parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
              }
              else {
                      return this.gettersgestionOrdrePaiement
              .filter(
                (qtreel) =>
                  (qtreel.unite_administrative_id != null &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) ||
                  (qtreel.unite_administrative_id != null  &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null) ||
                  (qtreel.unite_administrative_id != null  &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) ||
                  (qtreel.unite_administrative_id != null  &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null)
              ).reduce((prec, cur) =>
                  parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
              }
            
            },


    // **********fin gestion des totaux*******************

    //FONCTION LEGA
    MontantBudgetVote() {
      
        return (id) => {
          if (id != null && id != "") {
            return this.budgetEclate
              .filter(
                (qtreel) =>
                  qtreel.uniteadministrative_id == id &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.budget_actif_def == 1
              )
              .reduce(
                (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
                0
              )
              .toFixed(0);
          } else {
            return 0;
          }
        };
      
    },

    //** montant executé */

    MontantBudgetExecuté() {
      if (this.typefinancement == 0) {
        return (id) => {
          if (id != null && id != "") {
            return this.gettersgestionOrdrePaiement
              .filter(
                (qtreel) =>
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) ||
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null) ||
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op == null) ||
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op == null)
              )
              .reduce(
                (prec, cur) =>
                  parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
                0
              )
              .toFixed(0);
          } else {
            return 0;
          }
        };
      } else {
        return (id) => {
          if (id != null && id != "") {
            return this.gettersgestionOrdrePaiement
              .filter(
                (qtreel) =>
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_financement_id == this.typefinancement &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op != null) ||
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_financement_id == this.typefinancement &&
                    qtreel.type_ordre_paiement == 1 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op != null) ||
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_financement_id == this.typefinancement &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 8 &&
                    qtreel.diff_op != null) ||
                  (qtreel.unite_administrative_id == id &&
                    qtreel.exercice == this.afficheAnnee &&
                    qtreel.type_financement_id == this.typefinancement &&
                    qtreel.type_ordre_paiement == 4 &&
                    qtreel.decision_cf == 9 &&
                    qtreel.diff_op != null)
              )
              .reduce(
                (prec, cur) =>
                  parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
                0
              )
              .toFixed(0);
          } else {
            return 0;
          }
        };
      }
    },

    //FIN FONCTION LEGA
    afficheAnnee() {
      if (this.exercices_budgetaires_id == 0) {
        return this.anneeAmort;
      } else {
        return this.exercices_budgetaires_id;
      }
    },

    libelleUniteAdministrative() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    CodeUniteAdministrative() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code;
          }
          return 0;
        }
      };
    },

    groupeParUa() {
      //   return (id) => {

      let objet = this.budgetEclate;
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.uniteadministrative_id);
        });
        let unique = [...new Set(array_exercie)];
       // console.log(unique);
        if (unique.length == 0) {
          return [];
        }
        return unique;
      }
      return [];
      //};
    },

    uniteAdmin() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        this.groupeParUa.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.uniteadministrative_id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }

      return this.groupeParUa;
    },

    filtrerUaParTypeProj() {
      return this.uniteAdministratives.filter((item) => item.type_ua_id == 7);
    },

    afficheUa() {
      if (this.inputLigneCode1 != 0 && this.inputLigneLibelle1==0) {
        return this.filtre_unite;
      } else if(this.inputLigneCode1==0 && this.inputLigneLibelle1 != 0){
        return this.filtre_unitelibelle
      }else if(this.inputLigneCode1!=0 && this.inputLigneLibelle1 != 0){
        return this.filtre_unitelibelle_code;
      }
      else if(this.montant_execute != 0 ){
        return this.filtre_Montant_execute;
      }
      else if(this.montant_disponible != 0){
        return this.filtre_Montant_Disponible
      }else if(this.montant_Initial != 0 ){
        return this.filtre_Montant_Initial
      }
      else if(this.montant_ModifierBudget!=0){
          return this.filtre_MoodicationBudgetaire
      }
      else if(this.montant_Actuel != 0){
        return this.filtre_Montant_Actuelle
      }else if(this.Total_Op_Provisoire != 0){
        return this.FiltreTotalOpProvisoire
      }else if(this.Nombre_Op_Non_Regulirise){
        return this.filtre_NombreOpNonRegularise
      }else if(this.Nombre_Op_Regulirise !=0 ){
        return this.filtre_NombreOpRegularise
      }else if(this.Taux_Op_non_Regulirise!=0){
        return this.FiltreTauxOpNonProvisoire
      }
      else {
        return this.filtre_unite_admin;
      }
    },

  

    
    //test de tri
    TriaffichageUniteAdminstrative() {
        let vm=this
      return this.afficheUa.map(function (value) {
        let objet = {
          id:value.id,
          code: value.code,
          libelle: value.libelle,
          MontantVote:vm.MontantBudgetVote(value.id),
          Variation12:vm.AfficheVariationBudget(value.id),
          Budgetactuel:vm.MontantBudgetActuel(value.id),
          MontantExecute:vm.MontantBudgetExecuté(value.id),
          NombreOpProvisoire:vm.TotalOPProvisoire(value.id),
          NombreOpNONRegu:vm.NombreOPNonRegu(value.id),
          NombreOpREgularise:vm.NombreOPRegulirise(value.id),
          TauxOpNonRegularise:vm.TauxOPProvisoireNonRegularis(value.id),
          Disponible:vm.MontantBudgetActuel(value.id)- vm.MontantBudgetExecuté(value.id),
          TauxExecution:vm.EviteNaN(value.id)
        };
        return objet;
      });
    },

    // fin test de tri
    //filtre_unitelibelle_code;

//filtre par libelle
      filtre_unitelibelle() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => item2.id == this.inputLigneLibelle1);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => item2.id == this.inputLigneLibelle1
      );
    },

//filtre des ua par libelle et code
   filtre_unitelibelle_code() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => item2.id == this.inputLigneLibelle1 && item2.id==this.inputLigneCode1);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => item2.id == this.inputLigneLibelle1 && item2.id==this.inputLigneCode1
      );
    },


    filtre_unite() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((item2) => item2.id == this.inputLigneCode1);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => item2.id == this.inputLigneCode1
      );
    },

    filtre_unite_admin() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }
      return this.filtrerUaParTypeProj;
    },

    filtre_type_teste() {
      return (id2) => {
        if (id2 != null && id2 != "") {
          return this.uniteAdministratives.filter((prod) => prod.id == id2);
        }
      };
    },

    ComsommationBudgetaire() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.unite_administrative_id == id &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        }
      };
    },

    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },

    affichebudgetActive() {
      var activeBudget = this.budgetGeneral.filter(
        (element) => element.actived == 1
      );

      return activeBudget;
    },

    SommeBudgetInitial() {
      if (this.uniteAdmin_id == 0 && this.typefinancement == 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.budget_actif_def == 1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else if (this.uniteAdmin_id != 0 && this.typefinancement == 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.budget_actif_def == 1 &&
              qtreel.uniteadministrative_id == this.uniteAdmin_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else if (this.uniteAdmin_id == 0 && this.typefinancement != 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.budget_actif_def == 1 &&
              qtreel.type_financement_id == this.typefinancement
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.budget_actif_def == 1 &&
              qtreel.uniteadministrative_id == this.uniteAdmin_id &&
              qtreel.type_financement_id == this.typefinancement
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      }
    },
    SommeBudgetConsomme() {
      if (this.uniteAdmin_id == 0 && this.typefinancement == 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 8 &&
                qtreel.diff_op == null) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 9 &&
                qtreel.diff_op == null) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 8 &&
                qtreel.diff_op == null) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 9 &&
                qtreel.diff_op == null)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.uniteAdmin_id == 0 && this.typefinancement != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.type_financement_id == this.typefinancement &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 8 &&
                qtreel.diff_op == null) ||
              (qtreel.type_financement_id == this.typefinancement &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 9 &&
                qtreel.diff_op == null) ||
              (qtreel.type_financement_id == this.typefinancement &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 8 &&
                qtreel.diff_op == null) ||
              (qtreel.type_financement_id == this.typefinancement &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 9 &&
                qtreel.diff_op == null)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.uniteAdmin_id != 0 && this.typefinancement == 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.unite_administrative_id == this.uniteAdmin_id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 8 &&
                qtreel.diff_op == null) ||
              (qtreel.unite_administrative_id == this.uniteAdmin_id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 9 &&
                qtreel.diff_op == null) ||
              (qtreel.unite_administrative_id == this.uniteAdmin_id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 8 &&
                qtreel.diff_op == null) ||
              (qtreel.unite_administrative_id == this.uniteAdmin_id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 9 &&
                qtreel.diff_op == null)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.unite_administrative_id == this.uniteAdmin_id &&
                qtreel.type_financement_id == this.typefinancement &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 8 &&
                qtreel.diff_op == null) ||
              (qtreel.unite_administrative_id == this.uniteAdmin_id &&
                qtreel.type_financement_id == this.typefinancement &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 9 &&
                qtreel.diff_op == null) ||
              (qtreel.unite_administrative_id == this.uniteAdmin_id &&
                qtreel.type_financement_id == this.typefinancement &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 8 &&
                qtreel.diff_op == null) ||
              (qtreel.unite_administrative_id == this.uniteAdmin_id &&
                qtreel.type_financement_id == this.typefinancement &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 9 &&
                qtreel.diff_op == null)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      }
    },

    TauxExecutionTypeFinancement() {
      if (
        this.totalComsommeYtpeFinancement == 0 &&
        this.TotalVoteParTypeFinancement == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.totalComsommeYtpeFinancement) /
            parseFloat(this.TotalVoteParTypeFinancement))
        ).toFixed(2);
      }
    },
    TauxExecution() {
      if (this.SommeBudgetConsomme == 0 && this.SommeBudgetInitial == 0) {
        return 0.0;
      } else {
        return (
          ((parseInt(this.SommeBudgetConsomme) /
            parseInt(this.SommeBudgetInitial))*100) 
        ).toFixed(2);
      }
    },

    TotalReamenagement() {
      return this.SommeBudgetInitial - this.SommeBudgetConsomme;
    },
  },
  created() {
                setInterval(this.getNow, 1000);
                console.log(this.TriaffichageUniteAdminstrative);
            },

  methods: {
    ...mapActions("uniteadministrative", [
      "getAllActeCreation",
      "ajouterActeCreation",
      "modifierActeCreation",
      "supprimerActeCreation",
      "importBudget",
      "getAllTypeTextes",
      "getAllUniteAdministrative",
      "getAllArchivageDocument",
      "ajouterBudgetCharge",
      "getAllBudgetGeneral",
      "getAllHistoriqueBudgetGeneral",
      "modifierLigneExempter",
    ]),

 CalculerMontantActuel(id){

return ((parseFloat(this.MontantBudgetVote(id))+(parseFloat(this.AfficheVariationBudget(id)))))
 },

CalculerMontantDisponible(id){
  
  return ((parseFloat(this.MontantBudgetVote(id))+(parseFloat(this.AfficheVariationBudget(id))))-parseFloat(this.MontantBudgetExecuté(id)))
},


//     filtreTableau(){
//       if(this.inputLigneCode == false){
//       return this.afficheUa.sort((a, b) => a.id > b.id );
//       }else{
//         this.inputLigneCode = false
//         return this.afficheUa.sort((a, b) => a.id > b.id );
//       }

//  },

  tricode(){
      if(this.tricodedata==0){
        this.tricodedata=1;
        return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.MontantVote-b.MontantVote});
        
      }else{
        this.tricodedata=0;
        return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.MontantVote-a.MontantVote});
      }
      
    },
     triBudgetExecute(){
      if(this.triBudgetExecutedata==0){
        this.triBudgetExecutedata=1; 
        return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.MontantExecute-b.MontantExecute});
        
      }else{
        this.triBudgetExecutedata=0;
        return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.MontantExecute-a.MontantExecute});
      }
      
    },
    triBudgetActuelle(){
      if(this.triBudgetActuelledata==0){
        this.triBudgetActuelledata=1;
        return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.Budgetactuel-b.Budgetactuel});
        
      }else{
        this.triBudgetActuelledata=0;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b){return b.Budgetactuel-a.Budgetactuel});
      }
      
    },
  triModificationBudget(){
      if(this.triModificationBudgetdata==0){
        this.triModificationBudgetdata=1;
        return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.Variation12-b.Variation12});
        
      }else{
        this.triModificationBudgetdata=0;
        return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.Variation12-a.Variation12});
      }
      
    },
     triBudgetDispoble(){
      if(this.triBudgetDisponibledata==0){
        this.triBudgetDisponibledata=1;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b){return a.Disponible - b.Disponible});
        
      }else{
        this.triBudgetDisponibledata=0;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b){return b.Disponible - a.Disponible});
      }
      
    },
    triTotalOpProvisoire(){
      if(this.triTotalProvisoiredata==0){
        this.triTotalProvisoiredata=1;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b){return a.NombreOpProvisoire - b.NombreOpProvisoire});
        
      }else{
        this.triTotalProvisoiredata=0;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b){return b.NombreOpProvisoire - a.NombreOpProvisoire});
      }
      
    },
      triNombreOpNonRegulirise(){
      if(this.triOpNonRegulirisedata==0){
        this.triOpNonRegulirisedata=1;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b) {return a.NombreOpNONRegu - b.NombreOpNONRegu});
        
      }else{
        this.triOpNonRegulirisedata=0;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b) {return b.NombreOpNONRegu - a.NombreOpNONRegu});
      }
      
    },
    triNombreOpRegulirise(){
      if(this.triOpRegulirisedata==0){
        this.triOpRegulirisedata=1;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b){return a.NombreOpREgularise - b.NombreOpREgularise});
        
      }else{
        this.triOpRegulirisedata=0;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b){return b.NombreOpREgularise - a.NombreOpREgularise});
      }
      
    },
    
    triTauxOpNonRegulirise(){
      if(this.triTauxOpRegulirisedata==0){
        this.triTauxOpRegulirisedata=1;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b){return a.TauxOpNonRegularise - b.TauxOpNonRegularise});
        
      }else{
        this.triTauxOpRegulirisedata=0;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b){return b.TauxOpNonRegularise - a.TauxOpNonRegularise});
      }
      
    },
     triTauxExecution(){
      if(this.triTauxExecutiondata==0){
        this.triTauxExecutiondata=1;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b) {return a.TauxExecution - b.TauxExecution});
        
      }else{
        this.triTauxExecutiondata=0;
        return this.TriaffichageUniteAdminstrative.sort(function(a, b) {return b.TauxExecution - a.TauxExecution});
      }
      
    },
    MontantBudgetActuel(id){
      return (parseFloat(this.MontantBudgetVote(id)) + parseFloat(this.AfficheVariationBudget(id)));
    },



nombreDeJourEntre(){
  var date1 = new Date("12/12/2020");
         var date2 = new Date("12/12/2021");
          // différence des heures
         var time_diff = date2.getTime() - date1.getTime();
          // différence de jours
         var days_Diff = time_diff / (1000 * 3600 * 24);
         // afficher la différence
           alert(days_Diff);
          return  days_Diff;
},
getNow: function() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                   // const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                   // const dateTime = date +' '+ time;
                    const dateTime = date;
                    this.timestamp = dateTime;
                },



    afficherDateDuJour(){
let date = new Date();
        let aaaa = date.getFullYear();
        let gg = date.getDate();
        let mm = (date.getMonth() + 1);
        let moi;
        let jour;
        if (gg < 10)
        {
            jour = "0" + gg;
        }else{
            jour = gg
        }


        if (mm < 10)
        {
            moi = "0" + mm;
        }else{
            moi=mm;
        }


        let cur_day =  aaaa + "-" + moi + "-" + jour;

        return cur_day


    
   
   },

nombreDejourCalcule(id,id2){
     
    
      var dateF = new Date(id).getTime()
      var dateO = new Date(id2).getTime()
      var resultat =   dateO - dateF

      var diffJour =  resultat / (1000 * 3600 * 24)

   if(parseFloat(diffJour) < 0 ) return "durée invalide"
      return  diffJour.toFixed(0);

    },


TauxOPProvisoireNonRegularisTypeFinancement(id,id1) {
      if (
        this.NombreOPNonReguTypeFinancement(id,id1) == 0 &&
        this.TotalOPNonReguTypeFinancement(id,id1) == 0
      ) {
        return 0.0;
      } else {
        return (
          ((parseFloat(this.NombreOPNonReguTypeFinancement(id,id1)) /
            parseFloat(this.TotalOPNonReguTypeFinancement(id,id1)))*100
        ).toFixed(2));
      }
    },
TauxOPProvisoireNonRegularis(id) {
      if (
        this.NombreOPNonRegu(id) == 0 &&
        this.TotalOPProvisoire(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          ((parseInt(this.NombreOPNonRegu(id)) /
            parseInt(this.TotalOPProvisoire(id)))*100
        ).toFixed(2));
      }
    },



 genererEnPdfDetailReamenagement12() {
      this.$htmlToPaper("printpdf12");
    },
    genererEnPdfDetailReamenagement() {
      this.$htmlToPaper("printpdf1");
    },
genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },
    ActiveInputTauxOpNonRegulirise(){
      if(this.inputTauxOpNonRegulirise == false){
        this.inputTauxOpNonRegulirise = true
      }else{
        this.inputTauxOpNonRegulirise = false
        this.Taux_Op_non_Regulirise = 0;
      }

 },
    ActiveInputnombreRegulirise(){
      if(this.inputnombreOpRegulirise == false){
        this.inputnombreOpRegulirise = true
      }else{
        this.inputnombreOpRegulirise = false
        this.Nombre_Op_Regulirise = 0;
      }

 },
    ActiveInputNombreOpNonProvisoireRegulirise(){
      if(this.inputNombreOpNonRegulirise == false){
        this.inputNombreOpNonRegulirise = true
      }else{
        this.inputNombreOpNonRegulirise = false
        this.Nombre_Op_Non_Regulirise = 0;
      }

 },
    ActiveInputTotalOpProvisoire(){
      if(this.inputTotalOpProvisoire == false){
        this.inputTotalOpProvisoire = true
      }else{
        this.inputTotalOpProvisoire = false
        this.Total_Op_Provisoire = 0;
      }

 },
    ActiveInputMontantActuel(){
      if(this.inputMontantActuel == false){
        this.inputMontantActuel = true
      }else{
        this.inputMontantActuel = false
        this.montant_Actuel = 0;
      }

 },
     ActiveInputModificationBudgetaire(){
      if(this.inputModificationBudgetaire == false){
        this.inputModificationBudgetaire = true
      }else{
        this.inputModificationBudgetaire = false
        this.montant_ModifierBudget = 0;
      }

 },
    ActiveInputMontantInitial(){
      if(this.inputMontantInitial == false){
        this.inputMontantInitial = true
      }else{
        this.inputMontantInitial = false
        this.montant_Initial = 0;
      }

 },
    ActiveInputMontantDisponble(){
      if(this.inputMontantDisponible == false){
        this.inputMontantDisponible = true
      }else{
        this.inputMontantDisponible = false
        this.montant_disponible = 0;
      }

 },
    ActiveInputMontant(){
      if(this.inputMontantExecute == false){
        this.inputMontantExecute = true
      }else{
        this.inputMontantExecute = false
        this.montant_execute = 0;
      }

 },
     ActiveInputLigne(){
      if(this.inputLigneCode == false){
        this.inputLigneCode = true
      }else{
        this.inputLigneCode = false
        this.inputLigneCode1=0;
      }

 },

  ActiveInputLigne1(){
      if(this.inputLigneLibelle == false){
        this.inputLigneLibelle = true
      }else{
        this.inputLigneLibelle = false
        this.inputLigneLibelle1=0;
        
      }

 },

    ShowMyLigne(id){
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
    // afficheTableauTresor(id) {
    //   this.$("#validationOpDefinitif1").modal({
    //     backdrop: "static",
    //     keyboard: false,
    //   });
    //   this.editMandat = this.afficheUa.find((item) => item.id == id);
    // },
    fermerModal(){
      this.$("#OpNonRegulirise").modal('hide');
    },
     ModalOpNonRegulirise(id) {
      this.$("#OpNonRegulirise").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editOpNonRegulirise = this.afficheUa.find((item) => item.id == id);
    },
    ModalOpRegulirise(id) {
      this.$("#OpRegulirise").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editOpRegulirise = this.afficheUa.find((item) => item.id == id);
    },
    percuFacture(id) {
      this.$("#validationOpDefinitif1").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandat = this.afficheUa.find((item) => item.id == id);
    },
    apercuFacture(id) {
      this.$("#validationOpDefinitif").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandat = this.afficheUa.find((item) => item.id == id);
    },

    EviteNaN(id) {
      if (
        this.MontantBudgetExecuté(id) == 0 &&
        this.MontantBudgetVote(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantBudgetExecuté(id))) /
            (parseFloat(this.MontantBudgetActuel(id)))
          
        ).toFixed(2);
      }
    },
    EviteNaNTypeFinancement(id, id1) {
      if (
        this.MontantExecuteParTypeFinancement(id, id1) == 0 &&
        this.MontantVoteParTypeFinancement(id, id1) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantExecuteParTypeFinancement(id, id1)) /
            parseFloat(this.MontantVoteParTypeFinancement(id, id1) +
                        this.AfficheVariationBudgetParTypeFinancement(id, id1)))
        ).toFixed(2);
      }
    },

    TotalMontantReamenagement(id,id1) {
      return  (parseFloat(this.MontantVoteParTypeFinancement(id,id1)) + parseFloat(this.AfficheVariationBudgetParTypeFinancement(id,id1))
      );
    },
TotalDisponibleTypeFinancement(id,id1){
  return formatageSommeSansFCFA(parseFloat(parseFloat(this.TotalMontantReamenagement(id,id1))-parseFloat(this.MontantExecuteParTypeFinancement(id,id1))))
},
    TotalBudgetActuel(id) {
      return formatageSommeSansFCFA(
        parseFloat(this.MontantBudgetVote(id) - this.MontantBudgetExecuté(id))
      );
    },

    AfficheMontantBudgetInitial(id) {
      if (this.exercices_budgetaires_id == 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.uniteadministrative_id == id &&
              qtreel.annebudgetaire == this.anneeAmort
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.uniteadministrative_id == id &&
              qtreel.annebudgetaire == this.exercices_budgetaires_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
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

    afficherModalModifierUniteAdministrative(id) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editUniteAdministrative = this.uniteAdministratives.find(
        (item) => item.id == id
      );
    },

    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    OnchangeFichier(e) {
      const files = e.target.files;
      this.selectedFile = event.target.files[0];
     // console.log(this.selectedFile);
      Array.from(files).forEach((file) => this.addFichier(file));
    },
    addFichier(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.imagePDFDemandeAno = "pdf.png";
        vm.namePDFDemandeAno = file.name;
        vm.fichierPDFDemandeAno = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    afficherModalAjouterStock() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
    ajouterFichier() {
      const formData = new FormData();
      formData.append("fichier", this.selectedFile, this.selectedFile.name);
      formData.append("exercicebudget_id", this.exercice_budget);
      let config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      this.i = this.i + 10;
      this.bgWidth = this.i + "%";
      this.$("#exampleModal").modal("hide");
      this.ajouterBudgetCharge(formData, config)
        .then((data) => {
          console.log(data);
          //this.getAllBudgetGeneral()
        })
        .catch((erro) => {
          console.log(erro);
          this.getAllBudgetGeneral();
          this.getAllUniteAdministrative();
          // router.push({ path: 'budgetGenerals' })
        });
    },
  },
};
</script>
<style scoped>
.taille{
width: 100%;
}
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}
.gdmodelfour {
  width: 1000px;
  margin: 0 -580px;
  height: 500px;
}
.grdirModalActeEffet {
  width: 1200px;
  margin: 0 -530px;
  height: 550px;
}
.grdirModalAnalyse {
  width: 1000px;
  margin: 0 -530px;
  height: 350px;
}
.tlAviBailleur {
  width: 1000px;
  margin: 0 -530px;
  height: 450px;
}
.tlDossierCandidat {
  width: 1000px;
  margin: 0 -530px;
  height: 500px;
}

.tlg {
  width: 900px;
  margin: 0 -450px;
  height: 500px;
}
.sommecolor {
  background-color: red;
  color: red;
  font-size: 120%;
  text-align: center;
  font-weight: bold;
}
.modaloffreFin {
  width: 850px;
  margin: 0 -480px;
}
.tailDMP {
  width: 850px;
  margin: 0 -490px;
}

.whitebg {
  background: #98FB98 !important;
  font-weight: bold;
  color: black;
  font-size: 13px;
}
.graybg {
  background: rgb(6, 184, 6) !important;
  color: white;
  font-size: 13px;
  font-weight: bold;
}
.tailleModalOffre {
  width: 1200px;
  margin: 0 -490px;
}
.tailleModalOffre2 {
  width: 1300px;
  margin: 0 -690px;
}
.tabFormulaire {
  width: 1300px;
  margin: 80px -690px;
}
</style>