<template>
  <div>

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
               <td style="font-weight: bold;font-size: 12px;text-align:center">{{formatageSommeSansFCFA(parseFloat(montantVoteParLigne(editMandat.id,unite)+(variation(unite))))}}</td>
               <td style="font-weight: bold;font-size: 12px;text-align:center">{{formatageSommeSansFCFA(parseFloat(variation(unite)))}}</td>
               <td style="font-weight: bold;font-size: 12px;text-align:center">{{formatageSommeSansFCFA(parseFloat(montantActuelParLigne(editMandat.id,unite)))}}</td>
               
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
                  text-align:center;
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
                  text-align:center;
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
                  text-align:center;
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
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">Suivi du budget projet par UA et par type de Financement</h2>
          </tr>
        </table>
        <table class="table table-bordered table-striped">
         <thead>
           
              <tr style="">
                 
                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" class="span">
                  CODE 
                  
                  </th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  LIBELLE
                  
                  </th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  BUDGET INITIAL {{afficheAnnee}}</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  REAMENAGEMENT BUDGETAIRE {{afficheAnnee}}</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  BUDGET ACTUEL {{afficheAnnee}}</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  MONTANTS EXECUTES {{afficheAnnee}}</th>


                  <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  NB OP PROVISOIRE NON REGULARISE(S) {{afficheAnnee}}</th>


                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  DISPONIBLE {{afficheAnnee}}</th>
                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">TAUX D'EXECUTION {{afficheAnnee}}</th>
                  
        
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
          <br />
          Afficher
          <select name="pets" id="pet-select" v-model="size" class="span3">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          
        </div>

        <div class="widget-content nopadding">
          <table class="table table-bordered table-striped">
            <thead>
           
              <tr style="">
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
                  background-color: #fbb203 !important;" class="span4">
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
                  BUDGET INITIAL {{afficheAnnee}}</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  REAMENAGEMENT BUDGETAIRE {{afficheAnnee}}</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  BUDGET ACTUEL {{afficheAnnee}}</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  MONTANTS EXECUTES {{afficheAnnee}}</th>


                  <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  NB OP PROVISOIRE NON REGULARISE(S) {{afficheAnnee}}</th>


                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">
                  DISPONIBLE {{afficheAnnee}}</th>
                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">TAUX D'EXECUTION {{afficheAnnee}}</th>
                   <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" colspan=""> EVOLUTION DU TAUX D’EXECUTION  {{afficheAnnee}}</th>
        
        
              </tr> 
            </thead>
            <tbody v-for="unite in partition(afficheUa, size)[page]" :key="unite.id">
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
                <td style="background-color: #a7e556 !important; text-align: left;color:#000;font-weight: bold; font-size: 12px">
                  {{ CodeUniteAdministrative(unite.id) || "Auncun résultat" }}
                </td>
                
                <td style="background-color: #a7e556 !important; text-align: left;color:#000;font-weight: bold; font-size: 12px">
                  {{
                    libelleUniteAdministrative(unite.id) || "Auncun résultat"
                  }} 
                </td>

                <td
                 style="text-align:center;background-color: #a7e556 !important; color:#000;font-weight: bold; font-size: 12px"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(MontantBudgetVote(unite.id))
                    )
                  }}
                </td>
                <td
                  style="text-align:center;background-color: #a7e556 !important; color:#000;font-weight: bold; font-size: 12px"
                  @click="percuFacture(unite.id)"
                >
                  {{ formatageSommeSansFCFA(parseFloat(MontantBudgetVote(unite.id)) + parseFloat(AfficheVariationBudget(unite.id))) }}
                </td>
                <td
                  style="text-align:center;background-color: #a7e556 !important; color:#000;font-weight: bold; font-size: 12px"
                >
                   {{ formatageSommeSansFCFA(parseFloat(MontantBudgetVote(unite.id)) + parseFloat(AfficheVariationBudget(unite.id))) }}
                </td>

                <td
                  style="text-align:center;background-color: #a7e556 !important; color:#000;font-weight: bold; font-size: 12px"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(MontantBudgetExecuté(unite.id))
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
                  {{ formatageSommeSansFCFA((parseFloat(MontantBudgetVote(unite.id)) + parseFloat(AfficheVariationBudget(unite.id)))-parseFloat(MontantBudgetExecuté(unite.id))) }}
                </td>
                <td
                 style="text-align:center;background-color: #a7e556 !important;color:#000;font-weight: bold; font-size: 12px"
                >
                  {{ EviteNaN(unite.id) }}%
                </td>
                <td style=" text-align: right;color:#000" >
                  <button class="btn btn-danger taille" v-if="0 < EviteNaN(unite.id) <= 25">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{EviteNaN(unite.id)}}
                        </span>
                      </button>
                      <button class="btn btn-warning taille" v-else-if="25 < EviteNaN(unite.id) <= 50">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{EviteNaN(unite.id)}}
                        </span>
                      </button>
                       <button class="btn btn-success taille" v-else-if="50 < EviteNaN(unite.id) <= 75">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{EviteNaN(unite.id)}}
                        </span>
                      </button>
                      <button class="btn btn-success taille" v-else-if="75 < EviteNaN(unite.id) <= 100">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{EviteNaN(unite.id)}}
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
              <td style="font-weight: bold; font-size: 12px; color:#000">{{ libelleTypeFinancement(unite1) }}</td>
              <td
                style="font-weight: bold; font-size: 12px; text-align: center;color:#000"
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
                style="font-weight: bold; font-size: 12px; text-align: center;color:#000"
              >
                {{
                 formatageSommeSansFCFA(
                    parseFloat( TotalMontantReamenagement(unite.id, unite1)))
                    
                }}
              </td>
              <td
                style="font-weight: bold; font-size: 12px; text-align: center;color:#000"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat( TotalMontantReamenagement(unite.id, unite1)))
                    
                }}
              </td>
              <td
                style="font-weight: bold; font-size: 12px; text-align: center;color:#000"
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
                style="font-weight: bold; font-size: 12px; text-align: center;color:#000"
              >
                {{
                  0
                }}
              </td>
 <td
                style="font-weight: bold; font-size: 12px; text-align: center;color:#000"
              >
                {{
                 formatageSommeSansFCFA(
                    parseFloat(
                      TotalMontantReamenagement(unite.id, unite1) - MontantExecuteParTypeFinancement(unite.id, unite1)
                    )
                  )
                }}
              </td>
              <td
                style="font-weight: bold; font-size: 12px; text-align: center;color:#000"
              >
                {{ EviteNaNTypeFinancement(unite.id, unite1) }}%
              </td>
              <td style=" text-align: right;color:#000" >
                  <button class="btn btn-danger taille" v-if="0 < EviteNaNTypeFinancement(unite.id, unite1) <= 25">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{EviteNaNTypeFinancement(unite.id, unite1)}}
                        </span>
                      </button>
                      <button class="btn btn-warning taille" v-else-if="25 < EviteNaNTypeFinancement(unite.id, unite1) <= 50">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{EviteNaNTypeFinancement(unite.id, unite1)}}
                        </span>
                      </button>
                       <button class="btn btn-success taille" v-else-if="50 < EviteNaNTypeFinancement(unite.id, unite1) <= 75">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{EviteNaNTypeFinancement(unite.id, unite1)}}
                        </span>
                      </button>
                      <button class="btn btn-success taille" v-else-if="75 < EviteNaNTypeFinancement(unite.id, unite1) <= 100">
                        <span style="color:#000;font-size: 14px;font-weight: bold;">
                          {{EviteNaNTypeFinancement(unite.id, unite1)}}
                        </span>
                      </button>
                  </td>
              

            </tr>
              
            </tbody>
             <tfoot>
                <tr style="margin-left:25px">
                  <td> </td>
                   <td> </td>
                  <td style="text-align: center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">TOTAL ACTIVITE </td>
                      

                  <td style="text-align: center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">{{ 5 }}</td>

                  <td style="text-align: center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">{{ 8 }}</td>

                  <td style="text-align: center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">{{ 9 }}</td>

                  <td style="text-align: center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">{{ 7 }}</td>

                  <td style="text-align: center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">{{ 8 }}</td>
                 
                 <td style="text-align: center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                   {{ 0 }}
                 </td>

                  <td style="text-align: center;color:#000;background-color: #f55e25 !important;font-weight: bold;color:#000">
                   {{ 1 }}
                 </td>
                 
                  <td style="text-align: center;color:#000;font-weight: bold;background-color: #f55e25 !important;">
                    {{ 4 }}
                  </td>
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

      search: "",
      uniteadministrative_id: "",
      inputLigneCode1:0,
      inputLigneCode:false,
      inputLigneLibelle:false,
      inputLigneLibelle1:0,
    };
  },
  created() {
    console.log(this.affichageUniteAdminstrative);
    this.budgetGeneralCharge = this.budgetGeneral.filter(
      (item) => item.actived == 1
    );
    console.log(this.budgetGeneralCharge);
  },
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
              item.ligneeconomique_id == id
          );
          if (objet) return objet.variation_budget;
        }
        return null
      }
},
AfficheVariationBudget() {
      return (id2) => {
        if (id2 != null && id2 != "") {
          return this.budgetEclate.filter((prod) => prod.uniteadministrative_id == id2 && prod.annebudgetaire==this.anneeAmort ).reduce(
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
          return this.budgetEclate.filter((prod) => prod.uniteadministrative_id == id2 && prod.type_financement_id == id1 && prod.annebudgetaire==this.anneeAmort ).reduce(
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
        console.log(unique);
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
          console.log(unique);
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
          console.log(unique);
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
          console.log(unique);
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
          console.log(unique);
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
          console.log(unique);
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

    //FONCTION LEGA
    MontantBudgetVote() {
      if (this.typefinancement == 0) {
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
      } else {
        return (id) => {
          if (id != null && id != "") {
            return this.budgetEclate
              .filter(
                (qtreel) =>
                  qtreel.uniteadministrative_id == id &&
                  qtreel.annebudgetaire == this.afficheAnnee &&
                  qtreel.budget_actif_def == 1 &&
                  qtreel.type_financement_id == this.typefinancement
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
      }
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
        console.log(unique);
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
      }else {
        return this.filtre_unite_admin;
      }
    },

    
    //test de tri
    affichageUniteAdminstrative() {
        let vm=this
      return this.afficheUa.map(function (value) {
        let objet = {
          code: value.code,
          libelle: value.libelle,
          MontantVote:vm.MontantBudgetVote(value.id),
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
            parseFloat(this.TotalVoteParTypeFinancement)) *
          100
        ).toFixed(2);
      }
    },
    TauxExecution() {
      if (this.SommeBudgetConsomme == 0 && this.SommeBudgetInitial == 0) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.SommeBudgetConsomme) /
            parseFloat(this.SommeBudgetInitial)) *
          100
        ).toFixed(2);
      }
    },

    TotalReamenagement() {
      return this.SommeBudgetInitial - this.SommeBudgetConsomme;
    },
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
    genererEnPdfDetailReamenagement() {
      this.$htmlToPaper("printpdf1");
    },
genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },
     ActiveInputLigne(){
      if(this.inputLigneCode == false){
        this.inputLigneCode = true
      }else{
        this.inputLigneCode = false
      }

 },

  ActiveInputLigne1(){
      if(this.inputLigneLibelle == false){
        this.inputLigneLibelle = true
      }else{
        this.inputLigneLibelle = false
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
          (parseFloat(this.MontantBudgetExecuté(id)) /
            ((parseFloat(this.MontantBudgetVote(id)) + parseFloat(this.AfficheVariationBudget(id)))-parseFloat(this.MontantBudgetExecuté(id)))) *
          100
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
                        this.AfficheVariationBudgetParTypeFinancement(id, id1))) *
          100
        ).toFixed(2);
      }
    },

    TotalMontantReamenagement(id,id1) {
      return  (parseFloat(this.MontantVoteParTypeFinancement(id,id1)) + parseFloat(this.AfficheVariationBudgetParTypeFinancement(id,id))
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
      console.log(this.selectedFile);
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