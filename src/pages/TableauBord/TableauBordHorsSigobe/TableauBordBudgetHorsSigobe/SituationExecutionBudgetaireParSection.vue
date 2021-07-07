
<template>
  <div>
    
   
    <div class="row-fluid" style="margin-top: -20px">
      <div class="span1"></div>
      
          <br>
        <table class="table table-striped">
          <tbody>
            <tr>

                 <td>
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

              <!-- <td>

                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >CODE SECTION<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="sources_financements"
                  v-model="source_financement_id1"
                  option-value="id"
                  option-text="libelle"
                  placeholder="CODE SECTION"
                >
                </model-list-select>
              </td>

              <td>

                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >LIBELLE SECTION<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="sources_financements"
                  v-model="source_financement_id1"
                  option-value="id"
                  option-text="libelle"
                  placeholder="LIBELLE SECTION"
                >
                </model-list-select>
              </td> -->

            </tr>
          </tbody>
        </table>
        
      
    </div>

    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div> 
    
    <div class="widget-content nopadding" id="printpdf">
       <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">
                 SITUATION D'EXECUTION BUDGETAIRE PAR SECTION</h2>
          </tr>

           <div class="span4">
       
          Afficher
          <select name="pets" id="pet-select" v-model="size" class="span3">
            <option value="5" selected>5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>
         
        </div>
        </table>
    
      <p
        style="
          margin-left: 30px;
          font-size: 14px;
          font-weight: bold;
          text-decoration: underline;
        "
      >
        EXERCICE: {{ afficheAnnee }}
      </p>
         
      <div v-for="GroupeSection in partition(afficheUa, size)[page]" :key="GroupeSection.id">
           <table class="table table-bordered">
              <thead style="background-color: #ff9c1a !important">
                
                 <tr>
                   <th></th>

                   <th></th>

                   <th>
                   SECTION  
                   <button @click="ActiveInputLigne">
                     <i class=" icon-search"></i> 
                      
                    </button>
                     <!-- <input type="text" v-model="inputLigne1" class="span4" /> -->
                     <model-list-select v-show="inputLigne == true"
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="plans_activites"
                  v-model="inputLigne1"
                  option-value="id"
                  option-text="code"
                  placeholder="CODE ACTIVITE"
                >
                </model-list-select>
                
                  </th>

                  <th></th>

                  <th
                    style="
                      font-size: 14px;
                      color: #000;
                      font-weight: bold;
                      text-align: center;
                      background-color: #fbb203 !important;
                      width :8%
                    "
                  >
                    UA {{afficheAnnee}}
                    
                  </th>
                   <th>
                    LIGNE {{afficheAnnee}}
                  </th>
                   
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      text-align: center;
                      color: #000;
                      background-color: #fbb203 !important;
                      width :8%
                    "
                  >
                 BUDGET INITIAL {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                  REAMENAGEMENT BUDGETAIRE {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    NBRE DE REAMENAGEMENT {{afficheAnnee}}
                  </th>

                     <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    NBRE DE MARCHES EN EXECUTION  {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    BUDGET ACTUEL  {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    MONTANTS EXECUTES {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    NBRE D’OP PROVISOIRE NON REGULARISES {{afficheAnnee}}
                  </th>
                <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    DISPONIBLE {{afficheAnnee}}
                  </th>
                    <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                  NATURE DEPENSE {{afficheAnnee}}
                  </th>
                   <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                  PROCEDURE DE MARCHE {{afficheAnnee}}
                  </th>
                   <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                  STATUT DE LA LIGNE {{afficheAnnee}}
                  </th>
                  <th
                    
                  >
                    TAUX D’EXECUTION {{afficheAnnee}}
                  </th>
                  
                </tr>
              </thead>
       <tbody>
                <tr>
                  <td>
                    <button @click="ShowMyUa(GroupeSection[0].section_id)">
                     <i class="icon-eye-open"></i> </button>
                  </td>
                  
                  <td> <button ><i class=" icon-print"></i> </button></td>

                <td :title="Libellesection(GroupeSection[0].section_id)" colspan="4" v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'" >
                    {{ Libellesection(GroupeSection[0].section_id).substr(0, 31)+'...'  }}
                    
                  </td>
                  

                  <td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'" >
                    {{ formatageSommeSansFCFA(parseFloat(MontantBudgetvoteSection(GroupeSection[0].section_id))) }}
                  </td>

                  <td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'" >
                    {{ formatageSommeSansFCFA(parseFloat(MontantBudgetReamenagerSection(GroupeSection[0].section_id))) }}
                  </td>

                  <td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'" >
                    {{ NbreReamenagerSection(GroupeSection[0].section_id) }}
                  </td>

                  <td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'" >
                    {{ NbreMarcheSection(GroupeSection[0].section_id ) }} </td>

                  <td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'" >
                    {{ formatageSommeSansFCFA(parseFloat(MontantBudgetActuelSection(GroupeSection[0].section_id))) }}
                  </td>

                  <td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'" >
                    {{ formatageSommeSansFCFA(parseFloat(MontantExecuteSection(GroupeSection[0].section_id))) }}
                  </td>

                  <td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'">
                    {{ NbreExecuteSection(GroupeSection[0].section_id) }} </td>
                  
                 <td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'" >
                    {{ formatageSommeSansFCFA(parseFloat(MontantDisponibleSection(GroupeSection[0].section_id))) }}
                  </td>
<td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'" >
                    
                  </td>
                  <td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'" >
                    
                  </td>
                  <td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'" >
                    
                  </td>
                  <td style=" text-align: right;color:#000" >
                  <button class="btn btn-danger taille" v-if="0 <  EviteNaNSection(GroupeSection[0].section_id) <= 25">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNSection(GroupeSection[0].section_id) }}
                        </span>
                      </button>
                      <button class="btn btn-warning taille" v-else-if="25 <  EviteNaNSection(GroupeSection[0].section_id) <= 50">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNSection(GroupeSection[0].section_id) }}
                        </span>
                      </button>
                       <button class="btn btn-success taille" v-else-if="50 <  EviteNaNSection(GroupeSection[0].section_id) <= 75">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNSection(GroupeSection[0].section_id) }}
                        </span>
                      </button>
                      <button class="btn btn-success taille" v-else-if="75 <  EviteNaNSection(GroupeSection[0].section_id) <= 100">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNSection(GroupeSection[0].section_id) }}
                        </span>
                      </button>
                  </td>
                  
                  
                </tr>
              </tbody>  

               <tbody v-show="recupereIDactivite==GroupeSection[0].section_id"
               v-for="GroupeUa in AfficheUaGroupe(GroupeSection[0].section_id)" :key="GroupeUa">

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td>
                    <button @click="ShowMyLigne(GroupeUa)">
                     <i class="icon-eye-open"></i> </button>
                  </td>
                  
                  <td colspan="2" v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'" >
                    {{ libelleUa(GroupeUa) }}</td>
 
                  <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">
                    {{ formatageSommeSansFCFA(parseFloat(MontantBudgetvoteUa(GroupeUa))) }}</td>
                  
                  <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">
                    {{ formatageSommeSansFCFA(parseFloat(MontantBudgetReamenagerUa(GroupeUa))) }}</td>
                 
                  <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">
                    {{ NbreReamenagerUa(GroupeUa) }} </td>
                  <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">
                    {{ NbreMarcheUa(GroupeUa) }}</td>

                  <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">
                    {{ formatageSommeSansFCFA(parseFloat(MontantBudgetActuelUa(GroupeUa))) }} </td>
                 
                  <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">
                    {{ formatageSommeSansFCFA(parseFloat(MontantExecuteUa(GroupeUa))) }} </td>
                  
                  <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">
                    {{ NbreExecuteUa(GroupeUa) }} </td>

                  <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">
                    {{ formatageSommeSansFCFA(parseFloat(MontantDisponibleUa(GroupeUa))) }} </td>
                <td style="text-align: left;color:#000;" v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">
                    
                  </td>
                  <td style="text-align: left;color:#000;" v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">
                    
                  </td>
                  <td style="text-align: left;color:#000;" v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">
                    
                   
                  </td>
                 <td style=" text-align: right;color:#000" >
                  <button class="btn btn-danger taille" v-if="0 <  EviteNaNUa(GroupeUa) <= 25">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNUa(GroupeUa) }}
                        </span>
                      </button>
                      <button class="btn btn-warning taille" v-else-if="25 <  EviteNaNUa(GroupeUa) <= 50">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNUa(GroupeUa) }}
                        </span>
                      </button>
                       <button class="btn btn-success taille" v-else-if="50 <  EviteNaNUa(GroupeUa) <= 75">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNUa(GroupeUa) }}
                        </span>
                      </button>
                      <button class="btn btn-success taille" v-else-if="75 <  EviteNaNUa(GroupeUa) <= 100">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNUa(GroupeUa) }}
                        </span>
                      </button>
                  </td>
                   
        
                </tr>
                  
                <tr v-show="recupereIDSection==GroupeUa"
                v-for="GroupeLigne in AfficheLigneGroupe(GroupeUa)" :key="GroupeLigne">
                  <td></td>
                  <td></td>
                  <td></td>

                  <td></td>
                  
                  <td></td>
 
                  <td>{{ libelleLigneEconomique(GroupeLigne) }}</td>
      
                  <td>{{ formatageSommeSansFCFA(parseFloat(MontantBudgetvoteLigne(GroupeLigne,GroupeUa))) }}</td>

                  <td> {{ formatageSommeSansFCFA(parseFloat(MontantBudgetReamenagerLigne(GroupeLigne,GroupeUa))) }} </td>
                  
                  <td> {{ NbreReamenagerLigne(GroupeLigne,GroupeUa)}} </td>

                  <td> {{ NbreMarcheLigne(GroupeLigne,GroupeUa) }}</td>

                  <td> {{ formatageSommeSansFCFA(parseFloat(MontantBudgetActuelLigne(GroupeLigne,GroupeUa))) }}</td>

                  <td> {{ formatageSommeSansFCFA(parseFloat(MontantExecuteLigne(GroupeLigne,GroupeUa))) }} </td>
                  
                  <td> {{ NbreOpNonRegularisé(GroupeLigne,GroupeUa) }} </td> 
                 
                  <td> {{ formatageSommeSansFCFA(parseFloat(MontantDisponible(GroupeLigne,GroupeUa))) }} </td>
<td style="text-align: left;color:#000;">
                    {{
                     lielleGrandeNayure(GrandeNature(GroupeLigne))
                    }}
                  </td>
                  <td style="text-align: left;color:#000;">
                    {{
                      afficheLeNomDesProcedure(GroupeLigne,GroupeUa)
                    }}
                  </td>
                  <td style="text-align: left;color:#000;">
                      <span v-if="GroupeLigne == CodeExempte(GroupeLigne)">Exemptée procedure</span>
                         <span v-else>Ligne à marché</span>
                   
                  </td>
                   <td style=" text-align: right;color:#000" >
                  <button class="btn btn-danger taille" v-if="0 < EviteNaNLigne(GroupeLigne,GroupeUa) <= 25">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNLigne(GroupeLigne,GroupeUa)}}
                        </span>
                      </button>
                      <button class="btn btn-warning taille" v-else-if="25 < EviteNaNLigne(GroupeLigne,GroupeUa) <= 50">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNLigne(GroupeLigne,GroupeUa)}}
                        </span>
                      </button>
                       <button class="btn btn-success taille" v-else-if="50 < EviteNaNLigne(GroupeLigne,GroupeUa) <= 75">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNLigne(GroupeLigne,GroupeUa)}}
                        </span>
                      </button>
                      <button class="btn btn-success taille" v-else-if="75 < EviteNaNLigne(GroupeLigne,GroupeUa) <= 100">
                        <span style="color:#fff;font-size: 14px;font-weight: bold;">
                          {{ EviteNaNLigne(GroupeLigne,GroupeUa)}}
                        </span>
                      </button>
                  </td>
                </tr>
              </tbody>
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
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSommeSansFCFA,formatageSomme } from "@/Repositories/Repository";
import { partition } from "@/Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    ModelListSelect,
  },
  name: "typetext",
  data() {
    return {
      page: 0,
      size:5,
      active_el: 0,
      fabActions: [
        {
          name: "searchMe",
          icon: "search",
        },
      ],

      json_fields: {
        CODE: "code",
        LIBELLE: "libelle",
      },


    inputLigne:false,

 
      exercices_budgetaires_id:0,
      inputLigne1:0,
    
      search: "",
      verifShome:0,
      recupereIDactivite:"",
      recupereIDSection:"",
      source_financement_id1:0
    };
  },
  mounted(){
    console.log("hello word")
    // console.log(this.budgetEclate)
    console.log(this.MontantBudgetActuel())
    console.log(this.MontantBudgetExecuté())
  },

  computed: {
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "exercices_budgetaires",
      "sections",
    ]),
    ...mapGetters("personnelUA", [
      "salairesActeur",
      "personnaliseActeurDepense",
      "personnaFonction",
      "afficheNombrePersonnelRecuActeNormination",
      "fonctionBudgetaire",
      "type_salaries",
      "type_contrats",
      "acte_personnels",
      "type_acte_personnels",
      "fonctions",
      "grades",
      "niveau_etudes",
      "nbr_acteur_actredite_taux",
      "all_acteur_depense",
      "personnaliseActeurFinContrat",
      "totalActeurEnctivite",
      "totalActeurDepense",
      "totalActeurAccredite",
      "tauxActeurAccredite",
      "totalActeurNonAccredite",
      "affichePersonnelRecuActeNormination",
    ]),
    ...mapGetters("bienService", [
      "gettershistoriqueDecisionCfOP",
      "typeMarches",
      "gettersgestionOrdrePaiementAnnulation",
      "gettersgestionOrdrePaiement",
      "gettersDossierAutreDepense",
      "gettersDossierMandat",
      "gettersDossierFacturePiece",
      "typeFactures",
      "gettersDemandeEngagement",
      "gettersnomPieceJustificative",
      "modepaiements",
      "gettersCotationPersonnaliser",
      "typeCandidat",
      "acteDepense",
      "getMarchePersonnaliser",
      "appelOffres",
      "lots",
      "villes",
      "communes",
      "pays",
      "modePassations",
      "procedurePassations",
      "getterDossierCandidats",
      "marches",
      "gettersPersonnaliserRapportJugement",
      "getterOffreFinanciers",
      "gettersOffreTechniques",
      "getterLettreInvitation",
      "getterMandate",
      "getterCojos",
      "conditions",
      "getterAnalyseDossiers",
      "typeAnalyses",
      "getterDemandeAno",
      "documentProcedures",
      "getterAnalyseDMP",
      "getterAnoDMPBailleur",
      "getterObseravtionBailleurs",
      "obseravtionBailleurs",
      "typeActeEffetFinanciers",
      "analyseDossiers",
      "text_juridiques",
      "livrables",
      "selectionner_candidats",
      "getActeEffetFinancierPersonnaliserContrat",
      "acteEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
      "getterMembreCojo",
      "getterProceVerballe",
      "GroupeOrdrePaiementByActivite",
      "GroupeOrdrePaiementByGrandeNature",
    ]),
    ...mapGetters("gestionMarche", [
      "groupeVille",
      "entreprises",
      "banques",
      "comptes",
      "getCompte",
      "getEntreptise",
      "getPersonnaliseAgence",
      "agenceBanques",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structureActe",
      "planActe",
    ]),
    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),
    ...mapGetters("gestionMarche", ["entreprises"]),

    ...mapGetters("uniteadministrative", [
      "budgetEclate",
      "groupeLigneEconomiqueBudget",
      "getSousBudget",
      "groupeActiviteBudget",
      "budgetGeneral",
      "fonctionsua",
      "servicesua",
      "directions",
      "uniteZones",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
      "groupeByActivite",
      "groupeByBailleur",
      "groupeBySection",
      "getterligneExempter"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structuresDecision",
      "plans_Decision",
    ]),
    ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
    ]),
    CodeExempte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterligneExempter.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },
   lielleGrandeNayure() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.grandes_natures.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    ShowMe(){
       return (id) => {
        if (id != null && id != "") {
           return this.verifShome==id;
        }
        return 0;
      };
    },
 
    verifActiviteId() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.source_financement_id == id
            &&  qtreel.exercice == this.afficheAnnee
          );

          if (qtereel) {
            return 1;
          }
          return 0;
        }
      };
    },

    

    IdSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) => qtreel.uniteadministrative_id == id
          );

          if (qtereel) {
            return qtereel.section_id;
          }
          return 0;
        }
      };
    },

    // ******   les vrai in fos de ce fichier lega ************
          //**groupe ua by section ***
        listeParUaGroupe() {
        return (id) => {
          if (id != null && id != "") {
            return this.budgetEclate.filter(
              (qtreel) => qtreel.section_id == id 
            );
          }
        };
      },
AfficheUaGroupe() {
      return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.listeParUaGroupe(id);
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
        }
        
        
      };
    },

        //****groupe ligne by ua */

        listeParLigneGroupe() {
        return (id) => {
          if (id != null && id != "") {
            return this.budgetEclate.filter(
              (qtreel) => qtreel.uniteadministrative_id == id 
            );
          }
        };
      },
AfficheLigneGroupe() {
      return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.listeParLigneGroupe(id);
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
        }
        
        
      };
    },

    libelleLigneEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_budgetaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("    ", qtereel.libelle);
          }
          return 0;
        }
      };
    },


    libelleUa() {
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

     afficheUa() {
       return this.ListeGroupeSection;
    },

        ListeGroupeSection(){
        if(this.exercices_budgetaires_id!=0){
                return this.groupeBySection
        .filter(
          (qtreel) =>
            (qtreel[0].annebudgetaire == this.afficheAnnee
            && qtreel[0].section_id!=null
             )

        );
        }else{
                return this.groupeBySection
        .filter(
          (qtreel) =>
            (qtreel[0].annebudgetaire == this.afficheAnnee
            && qtreel[0].section_id!=null
             )

        );
        }
        },


    Libellesection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sections.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nom_section;
          }
          return 0;
        }
      };
    },

       MontantbudgetVote(){
        return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.section_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee
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
    //**************fin ******* */

    

    afficheAnnee() {
      if (this.exercices_budgetaires_id == 0) {
        return this.anneeAmort;
      } else {
        return this.exercices_budgetaires_id;
      }
    },

     //*****gestion des ua

     MontantBudgetvoteUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id==id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_actif_def==1
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

       MontantBudgetReamenagerUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id==id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_active==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    NbreReamenagerUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id==id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_active==0
            ).length
        } 
      };
    },


     MontantExecuteUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.unite_administrative_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf==9)
                ||
                (qtreel.unite_administrative_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf==8)
                ||
                (qtreel.unite_administrative_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf==9)
                ||
                (qtreel.unite_administrative_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf==8)
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },


       NbreExecuteUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.unite_administrative_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.diff_reg_op==0)
            ).length
        } else {
          return 0;
        }
      };
    },

  NbreMarcheUa(){
        return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.unite_administrative_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.marche_id!=null)
            ).length
        } else {
          return 0;
        }
      };
    },
    

//*** fin des fonction des ua */

//*** debut des fonction des sections */

      MontantBudgetvoteSection() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.section_id==id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_actif_def==1
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

       MontantBudgetReamenagerSection() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.section_id==id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_active==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    NbreReamenagerSection() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.section_id==id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_active==0
            ).length
        } 
      };
    },


     MontantExecuteSection() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.section_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf==9)
                ||
                (qtreel.section_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf==8)
                ||
                (qtreel.section_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf==9)
                ||
                (qtreel.section_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf==8)
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },


       NbreExecuteSection() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.section_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.diff_reg_op==0)
            ).length
        } else {
          return 0;
        }
      };
    },

     NbreMarcheSection(){
        return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.section_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.marche_id!=null)
            ).length
        } else {
          return 0;
        }
      };
    },
//*** fin des fonction des sections */

 //*****gestion des ligne economique
     MontantBudgetvoteLigne() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.ligneeconomique_id == id &&
                qtreel.uniteadministrative_id==id1 &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_actif_def==1
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

      MontantBudgetReamenagerLigne() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.ligneeconomique_id == id &&
                qtreel.uniteadministrative_id==id1 &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_active==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

     NbreReamenagerLigne() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.ligneeconomique_id == id &&
                qtreel.uniteadministrative_id==id1 &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_active==0
            ).length
        } 
      };
    },


    NbreOpNonRegularisé() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.ligne_economique_id == id &&
                qtreel.unite_administrative_id==id1 &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.diff_reg_op==0)
            ).length
        } else {
          return 0;
        }
      };
    },

     MontantExecuteLigne() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.ligne_economique_id == id &&
                qtreel.unite_administrative_id==id1 &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf==9)
                ||
                (qtreel.ligne_economique_id == id &&
                qtreel.unite_administrative_id==id1 &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf==8)
                ||
                (qtreel.ligne_economique_id == id &&
                qtreel.unite_administrative_id==id1 &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf==9)
                ||
                (qtreel.ligne_economique_id == id &&
                qtreel.unite_administrative_id==id1 &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf==8)
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    NbreMarcheLigne(){
        return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.ligne_economique_id == id &&
                qtreel.unite_administrative_id==id1 &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.marche_id!=null)
            ).length
        } else {
          return 0;
        }
      };
    },
 
    // ***fin**

 

    MontantReamenagement(){
        return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee
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
    
    MontantBudgetActuel() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee
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

    MontantBudgetExecuté() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == id
                &&qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == id
                &&qtreel.decision_cf==8)   
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


    libelleBailleur() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sources_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    

    LibelleActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat(" ", qtereel.libelle);
          }
          return 0;
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

    AfficheLogODCF() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/log3.png";
    },
    AfficheAmoirie() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/amoirie.png";
    },

    listeordrepaiementLigne() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.source_financement_id == id
          );
        }
      };
    },

    arrayExerciceDecompte() {
      return (idactivite) => {
        console.log(idactivite);
        if(idactivite !=null && idactivite!=""){
           let objet = this.listeordrepaiementLigne(idactivite);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.grandenature_id);
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

      }
       
    },

    GrandeNature() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) => qtreel.ligneeconomique_id == id && qtreel.budget_active==1
          );

          if (qtereel) {
            return qtereel.grandenature_id;
          }
          return 0;
        }
      };
  },


    recupBudget() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) =>
              qtreel.grandenature_id == id &&
              qtreel.annebudgetaire == this.anneeAmort
          );
        }
      };
    },

    sommeLigneGrandeNature() {
      return (grande_nature_id) => {
        console.log(grande_nature_id)
        if (grande_nature_id == "") return 0;
        let _objet = this.recupBudget(grande_nature_id);
        if (_objet == undefined) return 0;
        let montant = _objet.reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
          0
        );
        return montant;
      };
    },

    listeordrepaiementLigne2() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.source_financement_id == id
          );
        }
      };
    },
   
    arrayExerciceDecompte2() {
      return (idactivite) => {
        console.log(idactivite);
        if(idactivite!=null && idactivite !=0 && idactivite !=""){
          let objet = this.listeordrepaiementLigne2(idactivite);
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
        }
        
        
      };
    },

    




  },

  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
      "modifierGestionOrdrePaiementAnnulat",
      "supprimerGestionOrdrePaiement",
      "ajouterHistoriqueDecisionOp",
      "modifierHistoriqueDecisionOp",
    ]),
afficheLeNomDesProcedure(id,id1){

    if(this.MontantDisponible(id,id1) < 10000000){
        return "PSC-SC"
    }
    else if( this.MontantDisponible(id,id1) < 30000000 )
    {
return "PSC-AC"
    }
    else if(this.MontantDisponible(id,id1)<60000000)
    {
return "PSL"
    }
    else if(this.MontantDisponible(id,id1) < 100000000)
    {
return "PSO"
    }

    // else if(0 < this.MontantDisponible(id,id1))
    // {
    //  return "ED"
    // }
     else if(100000000 < this.MontantDisponible(id,id1))
    {
return "AON ou AOI ou AOR"
    }

  return null


},
    ActiveInputLigne(){
  if(this.inputLigne == false){
    this.inputLigne = true
  }else{
    this.inputLigne = false;
    this.inputLigne1=0;
  }

},
    ShowMyUa(id){
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

    ShowMyLigne(id){
      if(this.recupereIDSection==""){
         this.recupereIDSection=id;
      }else if(this.recupereIDSection!="" && this.recupereIDSection !=id){
        this.recupereIDSection="";
        this.recupereIDSection=id;
      }
      else{
         this.recupereIDSection="";
      }
       
    },

     EviteNaN(id) {
      if (
        this.MontantBudgetExecuté(id) == 0 &&
        this.MontantReamenagement(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantBudgetExecuté(id)) /
            parseFloat(this.MontantReamenagement(id))) *
          100
        ).toFixed(2);
      }
    },


     EviteNaNLigne(id,id1) {
      if (
        this.MontantExecuteLigne(id,id1) == 0 &&
        this.MontantBudgetActuelLigne(id,id1) == 0
      ) {
        return 0.00;
      } else {
        return (
          (parseFloat(this.MontantExecuteLigne(id,id1)) /
            parseFloat(this.MontantBudgetActuelLigne(id,id1))) *
          100
        ).toFixed(2);
      }
    },

  

     MontantDisponible(id,id1){
          return (parseFloat(this.MontantBudgetActuelLigne(id,id1)) - parseFloat(this.MontantExecuteLigne(id,id1)))
            
  },

    MontantBudgetActuelLigne(id,id1) {
          return (parseFloat(this.MontantBudgetvoteLigne(id,id1)) + parseFloat(this.MontantBudgetReamenagerLigne(id,id1)))
    },

// ****************gestion des ua************************************
    MontantBudgetActuelUa(id) {
          return (parseFloat(this.MontantBudgetvoteUa(id)) + parseFloat(this.MontantBudgetReamenagerUa(id)))
    },

     MontantDisponibleUa(id){
          return (parseFloat(this.MontantBudgetActuelUa(id)) - parseFloat(this.MontantExecuteUa(id)))
            
  },

    EviteNaNUa(id) {
      if (
        this.MontantExecuteUa(id) == 0 &&
        this.MontantBudgetActuelUa(id) == 0
      ) {
        return 0.00;
      } else {
        return (
          (parseFloat(this.MontantExecuteUa(id)) /
            parseFloat(this.MontantBudgetActuelUa(id))) *
          100
        ).toFixed(2);
      }
    },

//***************************fin gestion  des ua**********************


// ****************gestion des section************************************
    MontantBudgetActuelSection(id) {
          return (parseFloat(this.MontantBudgetvoteSection(id)) + parseFloat(this.MontantBudgetReamenagerSection(id)))
    },

     MontantDisponibleSection(id){
          return (parseFloat(this.MontantBudgetActuelSection(id)) - parseFloat(this.MontantExecuteSection(id)))
            
  },

    EviteNaNSection(id) {
      if (
        this.MontantExecuteSection(id) == 0 &&
        this.MontantBudgetActuelSection(id) == 0
      ) {
        return 0.00;
      } else {
        return (
          (parseFloat(this.MontantExecuteSection(id)) /
            parseFloat(this.MontantBudgetActuelSection(id))) *
          100
        ).toFixed(2);
      }
    },

//***************************fin gestion  des Section**********************

       

    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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

    

    formatageSommeSansFCFA: formatageSommeSansFCFA,
formatageSomme:formatageSomme,
    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>

<style scoped>
.taille{
width: 95%;
}

.whitebg {
  background: #98FB98 !important;
  font-weight: bold;
  color: black;
  font-size: 15px;
}
.graybg {
  background: rgb(6, 184, 6) !important;
  color: white;
  font-size: 15px;
  font-weight: bold;
}

.whitebg1 {
  background: #829ed3 !important;
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



.tailgrand {
  width: 90%;
  margin: 0 -45%;
  height: 50%;
}

.modal-body {
  max-height: 85%;
}
th{
font-size: 13px !important;
                      font-weight: bold !important;
                      color: #000 !important;
                      text-align: center !important;
                      background-color: #fbb203 !important;
}
</style>
