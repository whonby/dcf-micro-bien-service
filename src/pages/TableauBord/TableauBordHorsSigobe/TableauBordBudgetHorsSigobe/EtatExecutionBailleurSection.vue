
<template>
  <div>
    <input type="hidden" :value="trilibelleBailleurdata" />
    <input type="hidden" :value="triBudgetInitialdata" />
    <input type="hidden" :value="trivariationdata" />
    <input type="hidden" :value="triBudgetActueldata" />
    <input type="hidden" :value="triMontantExecutiondata" />
    <input type="hidden" :value="triDisponibledata" />
    <input type="hidden" :value="triMarcheEnCoursdata" />
    <input type="hidden" :value="triNombreOpNonRegulirisedata" />
    <input type="hidden" :value="triMontantOpNonRegulirisedata" />
    <input type="hidden" :value="triTauxExecutiondata" />

    <table class="table table-striped">
      <tbody>
        <tr>
          <td>
            <label style="color: #000; font-size: 12px; font-weight: bolder"
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
          </td>
        </tr>
      </tbody>
    </table>

    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div>

    <div class="widget-content nopadding" id="printpdf">
      <table class="table table-bordered table-striped">
        <tr>
          <h2
            style="
              text-align: center;
              font-size: 25px;
              text-decoration: underline;
              text-transform: uppercase;
            "
          >
            ETAT D'EXECUTION PAR BAILLEUR ET SECTION
          </h2>
        </tr>
      </table>

      <p
        style="
          margin-left: 30px;
          font-size: 12px;
          font-weight: bold;
          text-decoration: underline;
        "
      >
        EXERCICE: {{ afficheAnnee }}
      </p>

      <div>
        <table class="table table-bordered">
          <thead style="background-color: #ff9c1a !important">
            <tr style="">
              <th></th>

              <th></th>
              <th></th>
              <th></th>

              <th>

                  <i id="style1" @click="InputLibelleBailleur" class="icon-search"></i>
                <money
                  style="text-align: left; color: red"
                  v-model="Libelle_bailleur"
                  class="span"
                  v-show="InputLibelleBailleurdata == true"
                ></money>
                BAILLEUR
              </th>

              <th v-if="recupereIDactivite!=0">

                  <i @click="ActiveInputLigne" id="style1" class=" icon-search"></i> 
                      
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
                SECTION
              </th>

              <th id="taillecol"
                style="
                  font-size: 12px;
                  font-weight: bold;
                  text-align: center;
                  color: #000;
                  background-color: #fbb203 !important;
                "
              >
              
                  <i id="style1" @click="triBudgetInitial()" class="icon-filter"></i>
                BUDGET INITIAL (FCFA)
                  <i id="style1" @click="InputBudgetInitial" class="icon-search"></i>
               
                <money
                  style="text-align: left; color: red"
                  v-model="Budget_Initial"
                  class="span"
                  v-show="InputBudgetInitialdata == true"
                ></money>
              </th>
              <th id="taillecol"
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
              
                  <i id="style1" @click="trivariation()" class="icon-filter"></i>
               
                MODIFICATION BUDGETAIRE (FCFA)
                  <i id="style1" @click="InputVariation" class="icon-search"></i>
            
                <money
                  style="text-align: left; color: red"
                  v-model="Input_Variation"
                  class="span"
                  v-show="InputVariationdata == true"
                ></money>
              </th>

              <th id="taillecol"
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >

                  <i id="style1" @click="triBudgetActuel()" class="icon-filter"></i>
                
                BUDGET ACTUEL (FCFA)
                <i id="style1" @click="InputBudgetActuel" class="icon-search"></i>
                <money
                  style="text-align: left; color: red"
                  v-model="Budget_Actuel"
                  class="span"
                  v-show="InputBudgetActueldata == true"
                ></money>
              </th>
              <th id="taillecol"
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
                  <i id="style1" @click="triMontantExecution()" class="icon-filter"></i>

                MONTANTS EXECUTES (FCFA)
                <i id="style1" @click="InputMontantExecute" class="icon-search"></i>

                <money
                  style="text-align: left; color: red"
                  v-model="Montant_Execute"
                  class="span"
                  v-show="InputMontantExecutedata == true"
                ></money>
              </th>



              <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" title="NBRE OP PROVISOIRE NON REGULARISE(S)">

                     <i id="style1" @click="triNombreOpNonRegulirise()" class=" icon-filter"></i> 
                  NBRE OP NON REGULARISE(S)

                     <i id="style1" @click="ActiveInputNombreOpNonProvisoireRegulirise" class=" icon-search"></i> 
                    <money style="text-align:left;color:red" 
                    v-model="Nombre_Op_Non_Regulirise" class="span"
                     v-show="inputNombreOpNonRegulirise == true"></money>
                 
                  </th>

                <th  id="taillecol" style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;" title="NBRE OP PROVISOIRE REGULARISE(S)">

                     <i id="style1"  @click="triMontantOpNonRegulirise()" class=" icon-filter"></i> 

                  MONTANT OP NON REGULARISE
                     <i id="style1" @click="ActiveInputmONTANTOpNonProvisoireRegulirise" class=" icon-search"></i> 

                    <money style="text-align:left;color:red"
                     v-model="MONTANT_Op_NON_Regulirise" class="span"
                      v-show="inputMontantOpNonRegulirise == true"></money>
                 
                  </th>

             
              <th>

                  <i  id="style1" @click="triMarcheEnCours()" class="icon-filter"></i>
                NOMBRE DE MARCHE EN COURS
                <i id="style1" @click="InputNbreMarche" class="icon-search"></i>
                <money
                  style="text-align: left; color: red"
                  v-model="Nbre_Marche"
                  class="span"
                  v-show="InputNbreMarchedata == true"
                ></money>
              </th>


               <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;">

                     <i id="style1" @click="triTauxExecution()"  class=" icon-filter"></i> 
                      
                  TAUX D'EXECUTION </th>


               <th id="taillecol"
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >

                  <i id="style1" @click="triDisponible()" class="icon-filter"></i>
                DISPONIBLE (FCFA)
                 <i id="style1" @click="InputDisponible" class="icon-search"></i>
                <money
                  style="text-align: left; color: red"
                  v-model="Input_Disponible"
                  class="span"
                  v-show="InputDisponibledata == true"
                ></money>
              </th>
            </tr>
          </thead>
          <tbody
            v-for="GroupeSourceFinancement in partition(
              FiltreLeTableauPrincipal,
              size
            )[page]"
            :key="GroupeSourceFinancement.id"
          >
            <tr>
              <td>
                <button @click="ShowMyUa(GroupeSourceFinancement.id)">
                  <i class="icon-eye-open"></i>
                </button>
              </td>

              <td></td>

              <td
                v-bind:class="
                  recupereIDactivite == GroupeSourceFinancement.id
                    ? 'graybg'
                    : 'whitebg'
                "
                colspan="3"
              >
                {{ GroupeSourceFinancement.libelle }}
              </td>

              <td v-if="recupereIDactivite!=0"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{ AfficheUaGroupeTaille(GroupeSourceFinancement.id) }}
              </td>

              <td style="text-align:right"
                v-bind:class="
                  recupereIDactivite == GroupeSourceFinancement.id
                    ? 'graybg'
                    : 'whitebg'
                "
              >
                <!-- <button v-if="recupereIDactivite==GroupeSourceFinancement.id" @click="triDisponible()">
                     <i class=" icon-filter"></i> </button> -->
                    {{ formatageSommeSansFCFA(parseFloat(GroupeSourceFinancement.MontantVote)) }}
                  </td>
      
                  
                 <td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement.id ? 'graybg' : 'whitebg'"  colspan="">
                    {{ formatageSommeSansFCFA(parseFloat(GroupeSourceFinancement.Variation)) }}
                 </td>
                 
                <td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement.id ? 'graybg' : 'whitebg'"  colspan="">
                     {{ formatageSommeSansFCFA(parseFloat(GroupeSourceFinancement.Budgetactuel)) }}
                </td>
                <td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement.id ? 'graybg' : 'whitebg'"  colspan="">
                  {{ formatageSommeSansFCFA(parseFloat(GroupeSourceFinancement.MontantExecute)) }}
                </td>

                <td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement.id ? 'graybg' : 'whitebg'"  colspan="">
                  {{ formatageSommeSansFCFA(parseFloat(GroupeSourceFinancement.NomBreoPnonREgu)) }}
                </td>

                <td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement.id ? 'graybg' : 'whitebg'"  colspan="">
                  {{ formatageSommeSansFCFA(parseFloat(GroupeSourceFinancement.MONTANToPnonREgu)) }}
                </td>
               
                
                <td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement.id ? 'graybg' : 'whitebg'"  colspan="">
                   {{ GroupeSourceFinancement.MarcheEnCours }}
                </td>
                 <td style="text-align:center;background-color: red !important;color:#000;font-weight: bold; font-size: 12px"
                >
                  {{ GroupeSourceFinancement.TauxExecution }}%
                </td>

                <td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement.id ? 'graybg' : 'whitebg'"  colspan="">
                   {{ formatageSommeSansFCFA(parseFloat(GroupeSourceFinancement.Disponible )) }}
                </td> 
                     
                </tr>

               <tr v-show="recupereIDactivite==GroupeSourceFinancement.id"
               v-for="GroupeUa in AfficheUaGroupe(GroupeSourceFinancement.id)" :key="GroupeUa">

                
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td>
                    <button @click="ShowMyLigne(GroupeUa)">
                     <i class="icon-arrow-right"></i> </button>
                  </td>
                  
                  <td >
                    {{Libellesection(GroupeUa)}}</td>
                <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(MontantInitialParSection(GroupeSourceFinancement.id,GroupeUa)))}}</td>
              <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(AfficheVariationBudget(GroupeSourceFinancement.id,GroupeUa)))}}</td>
              <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(MontantActuelleParSection(GroupeSourceFinancement.id,GroupeUa)))}}</td>
              <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(MontantBudgetExecutéSection(GroupeSourceFinancement.id,GroupeUa)))}}</td>
             
              <td>{{ NombreOPNonReguSection(GroupeSourceFinancement.id,GroupeUa) }}</td>
               <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(MontantOPNonReguSection(GroupeSourceFinancement.id,GroupeUa)))}}</td>
              <td style="text-align:right">
                {{MarcheEnCoursParSection(GroupeSourceFinancement.id,GroupeUa)}}
                
                </td>
               <td style="text-align:center;background-color: red !important;color:#000;font-weight: bold; font-size: 12px"
                >
                  {{EviteNaNSection(GroupeSourceFinancement.id,GroupeUa)}}</td>

                <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(MontantDisponibleParSectionB(GroupeSourceFinancement.id,GroupeUa)))}}</td>
              
                
                
                </tr>
              </tbody>  

               
            </table>
<br>
            
      </div>
       
          <div class="pagination alternate">
      <ul>
        <li :class="{ disabled: page == 0 }">
          <a @click.prevent="precedent()" href="#">Précedent</a>
        </li>
        <li
          v-for="(titre, index) in partition(FiltreLeTableauPrincipal, size).length"
          :key="index"
          :class="{ active: active_el == index }"
        >
          <a @click.prevent="getDataPaginate(index)" href="#">{{
            index + 1
          }}</a>
        </li>
        <li
          :class="{ disabled: page == partition(FiltreLeTableauPrincipal, size).length - 1 }"
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
import {
  formatageSommeSansFCFA,
  formatageSomme,
} from "@/Repositories/Repository";
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
      size: 10,
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

      inputLigne: false,

      exercices_budgetaires_id: 0,
      inputLigne1: 0,

      search: "",
      verifShome: 0,
      recupereIDactivite: "",
      recupereIDSection: "",
      source_financement_id1: 0,
      trilibelleBailleurdata: 0,
      triBudgetInitialdata: 0,
      trivariationdata: 0,
      triBudgetActueldata: 0,
      triMontantExecutiondata: 0,
      triNombreOpNonRegulirisedata:0,
      triMontantOpNonRegulirisedata:0,
      triDisponibledata: 0,
      triTauxExecutiondata:0,
      triMarcheEnCoursdata: 0,

      InputLibelleBailleurdata: false,
      InputBudgetInitialdata: false,
      InputVariationdata: false,
      InputBudgetActueldata: false,
      InputMontantExecutedata: false,
      inputNombreOpNonRegulirise:false,
      inputMontantOpNonRegulirise:false,
      InputDisponibledata: false,
      InputNbreMarchedata: false,
      Libelle_bailleur: 0,
      Budget_Initial: 0,
      Input_Variation: 0,
      Budget_Actuel: 0,
      Montant_Execute: 0,
      Nombre_Op_Non_Regulirise:0,
      MONTANT_Op_NON_Regulirise:0,
      Input_Disponible: 0,
      Nbre_Marche: 0,
    };
  },
  mounted() {
    console.log("hello word");
    // console.log(this.budgetEclate)
    console.log(this.MontantBudgetActuel());
    console.log(this.MontantBudgetExecuté());
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
      "fonctions",
      "grades",
      "niveau_etudes",
      "nbr_acteur_actredite_taux",
      "all_acteur_depense",
      "totalActeurAccredite",
      "tauxActeurAccredite",
      "totalActeurNonAccredite",
      "affichePersonnelRecuActeNormination",
    ]),
    ...mapGetters("bienService", [
      "typeMarches",
      "gettersgestionOrdrePaiement",
      "gettersDossierAutreDepense",
      "gettersDossierMandat",
      "gettersDossierFacturePiece",
      "typeFactures",
      "typeCandidat",
      "acteDepense",
      "pays",
      "modePassations",
      "procedurePassations",
      "getterDossierCandidats",
      "marches",
      "gettersPersonnaliserRapportJugement",
      "getterMandate",
      "getterCojos",
      "conditions",
      "getterAnalyseDossiers",
      "typeAnalyses",
      "livrables",
      "selectionner_candidats",
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

    ...mapGetters("uniteadministrative", [
      "budgetEclate",
      "groupeLigneEconomiqueBudget",
      "groupeActiviteBudget",
      "budgetGeneral",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
      "groupeByActivite",
      "groupeByBailleur",
      "groupeBySection",
      "groupeByTypeFinancement",
      "groupeParSourceFinancementBudgetEclate",
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
    //gggggggggggggggggggggggggg

    TriaffichageUniteAdminstrative() {
      let vm = this;
      return this.ListeDesSourceFinancement.map(function (value) {
        let objet = {
          id: value[0].source_financement_id,
          libelle: vm.LibelleSourceFinancement(value[0].source_financement_id),
          MontantVote: vm.BudgetInitial(value[0].source_financement_id),
          Variation: vm.MontantReamenagerBailleur(
            value[0].source_financement_id
          ),
          Budgetactuel: vm.BudgetActuelBailleur(value[0].source_financement_id),
          MontantExecute: vm.MontantBudgetExecuté1Bailleur(
            value[0].source_financement_id
          ),
          MONTANToPnonREgu:vm.MontantOPNonRegu(value[0].source_financement_id),
          NomBreoPnonREgu:vm.NombreOPNonRegu(value[0].source_financement_id),
          TauxExecution:vm.EviteNaN(value[0].source_financement_id),
          Disponible: vm.DisponibleBailleur(value[0].source_financement_id),
          MarcheEnCours: vm.MarcheEnCoursbailleur(
            value[0].source_financement_id
          ),
        };
        return objet;
      });
    },

    FiltreLeTableauPrincipal() {
      if (this.Libelle_bailleur != 0) {
        return this.TriaffichageUniteAdminstrative.filter(
          (item) => item.libelle == this.Libelle_bailleur
        );
      } else if (this.Budget_Initial != 0) {
        return this.TriaffichageUniteAdminstrative.filter(
          (item) => item.MontantVote == this.Budget_Initial
        );
      } else if (this.Input_Variation != 0) {
        return this.TriaffichageUniteAdminstrative.filter(
          (item) => item.Variation == this.Input_Variation
        );
      } else if (this.Budget_Actuel != 0) {
        return this.TriaffichageUniteAdminstrative.filter(
          (item) => item.Budgetactuel == this.Budget_Actuel);
      } else if (this.Montant_Execute != 0) {
        return this.TriaffichageUniteAdminstrative.filter(
          (item) => item.MontantExecute == this.Montant_Execute);
      }
      else if (this.MONTANT_Op_NON_Regulirise != 0) {
        return this.TriaffichageUniteAdminstrative.filter(
          (item) => item.MONTANToPnonREgu == this.MONTANT_Op_NON_Regulirise);
      }
      else if (this.Nombre_Op_Non_Regulirise != 0) {
        return this.TriaffichageUniteAdminstrative.filter(
          (item) => item.NomBreoPnonREgu == this.Nombre_Op_Non_Regulirise);
      } else if (this.Input_Disponible != 0) {
        return this.TriaffichageUniteAdminstrative.filter(
          (item) => item.Disponible == this.Input_Disponible
        );
      } else if (this.Nbre_Marche != 0) {
        return this.TriaffichageUniteAdminstrative.filter(
          (item) => item.MarcheEnCours == this.Nbre_Marche
        );
      } else {
        return this.TriaffichageUniteAdminstrative;
      }
    },


    
     MontantOPNonRegu() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.	source_financement_id == id && qtreel.diff_reg_op != 1 && qtreel.type_ordre_paiement==2 && qtreel.exercice==this.afficheAnnee
            ).reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);   
        }
      };
    },

      NombreOPNonRegu() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.	source_financement_id == id && qtreel.diff_reg_op != 1 && qtreel.type_ordre_paiement==2 && qtreel.exercice==this.afficheAnnee
            ).length  
        }
        return 0;
      };
    },

    BudgetInitial() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                qtreel.annebudgetaire == this.anneeAmort &&
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

    MontantBudgetExecuté1Bailleur() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8)
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

    MontantReamenagerBailleur() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                qtreel.annebudgetaire == this.anneeAmort &&
                qtreel.budget_active == 1
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MarcheEnCoursbailleur() {
      return (id) => {
        if (id != null && id != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 2
          ).length;
        } else {
          return 0;
        }
      };
    },

    //gggggggggggggggg
    MarcheEnCoursParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.section_id == id1 &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 2
          ).length;
        } else {
          return 0;
        }
      };
    },

    AfficheVariationBudget() {
      return (id, id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
          return this.budgetEclate
            .filter(
              (prod) =>
                prod.source_financement_id == id &&
                prod.section_id == id2 &&
                prod.annebudgetaire == this.anneeAmort &&
                prod.budget_active == 1
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        }
      };
    },
    MontantInitialParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                qtreel.section_id == id1 &&
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

    bailleurPar() {
      return (id) => {
        if (id != 0 && id != "") {
          let objet = this.budgetEclate.filter(
            (item) =>
              item.uniteadministrative_id == id && item.budget_active == 1
          );
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.source_financement_id);
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
    bailleurParSect() {
      return (id) => {
        if (id != 0 && id != "") {
          let objet = this.budgetEclate.filter(
            (item) => item.section_id == id && item.budget_active == 1
          );
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.source_financement_id);
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
    // bailleurParUniteA(){
    //     return (id) => {
    //     if (id != null && id != "") {
    //       return this.groupeByTypeFinancement
    //         .filter(
    //           (qtreel) =>
    //             qtreel[0].uniteadministrative_id == id
    //         ).length

    //     } else {
    //       return 0;
    //     }
    //   };
    // },
    NombreOpReguParUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter(
            (qtreel) =>
              qtreel.uniteadministrative_id == id &&
              qtreel.exercice == this.afficheAnnee &&
              qtreel.diff_reg_op == 0 &&
              qtreel.type_ordre_paiement == 2
          ).length;
        } else {
          return 0;
        }
      };
    },
    NombreOpReguParSection() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter(
            (qtreel) =>
              qtreel.section_id == id &&
              qtreel.exercice == this.afficheAnnee &&
              qtreel.diff_reg_op == 0 &&
              qtreel.type_ordre_paiement == 2
          ).length;
        } else {
          return 0;
        }
      };
    },

    MontantExecuteParSection() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9) ||
                (qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9)
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
    MontantExecuteParUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.unite_administrative_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9)
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

    NombreMarcheExecutionParUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter(
            (qtreel) =>
              qtreel.unite_administrative_id == id &&
              qtreel.exercice == this.afficheAnnee &&
              qtreel.marche_id != null
          ).length;
        } else {
          return 0;
        }
      };
    },
    NombreMarcheExecutionParSection() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter(
            (qtreel) =>
              qtreel.section_id == id &&
              qtreel.exercice == this.afficheAnnee &&
              qtreel.marche_id != null
          ).length;
        } else {
          return 0;
        }
      };
    },
    NombreMarcheExecution() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement.filter(
            (qtreel) =>
              qtreel.unite_administrative_id == id &&
              qtreel.ligne_economique_id == id1 &&
              qtreel.exercice == this.afficheAnnee &&
              qtreel.marche_id != null
          ).length;
        } else {
          return 0;
        }
      };
    },
    MontantExecute() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.unite_administrative_id == id &&
                  qtreel.ligne_economique_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.ligne_economique_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.ligne_economique_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.ligne_economique_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9)
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
    ShowMe() {
      return (id) => {
        if (id != null && id != "") {
          return this.verifShome == id;
        }
        return 0;
      };
    },

    verifActiviteId() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) =>
              qtreel.source_financement_id == id &&
              qtreel.exercice == this.afficheAnnee
          );

          if (qtereel) {
            return 1;
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
            (qtreel) => qtreel.source_financement_id == id
          );
        }
      };
    },
    AfficheUaGroupe() {
      return (id) => {
        if (id != 0 && id != "") {
          let objet = this.budgetEclate.filter(
            (item) => item.source_financement_id == id
          );
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.section_id);
            });
            let unique = [...new Set(array_exercie)];
            if (unique.length == 0) {
              return [];
            }
            return unique;
          }
          return [];
        }
      };
    },

    AfficheUaGroupeTaille() {
      return (id) => {
        if (id != 0 && id != "") {
          let objet = this.budgetEclate.filter(
            (item) => item.source_financement_id == id
          );
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.section_id);
            });
            let unique = [...new Set(array_exercie)];
            if (unique.length == 0) {
              return 0;
            }
            return unique.length;
          }
          return 0;
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
        if (id != 0 && id != "") {
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

    listeParLiNombreBailleurParLigne() {
      return (id, id1) => {
        if ((id != null && id != "", id1 != null && id1 != "")) {
          return this.budgetEclate.filter(
            (qtreel) =>
              qtreel.uniteadministrative_id == id &&
              qtreel.ligneeconomique_id == id1 &&
              qtreel.budget_active == 1
          );
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
      return this.ListeDesSourceFinancement;
    },

    ListeDesSourceFinancement() {
      if (this.source_financement_id1 != 0) {
        return this.groupeParSourceFinancementBudgetEclate.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee &&
            qtreel[0].budget_active == 1 &&
            qtreel[0].source_financement_id == this.source_financement_id1
        );
      } else {
        return this.groupeParSourceFinancementBudgetEclate.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee &&
            qtreel[0].budget_active == 1
        );
      }
    },

    Libellesection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sections.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.code_section.concat("  ", qtereel.nom_section);
          }
          return 0;
        }
      };
    },

    LibelleSourceFinancement() {
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
    //**************fin ******* */

    //&& this.inputLigne1!=0

    afficheAnnee() {
      if (this.exercices_budgetaires_id == 0) {
        return this.anneeAmort;
      } else {
        return this.exercices_budgetaires_id;
      }
    },

    //****************gestion des totaux *********//

    TotalMontantBudgetActuel() {
      if (this.source_financement_id != 0 && this.inputLigne1 == 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.source_financement_id == this.source_financement_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else if (this.source_financement_id != 0 && this.inputLigne1 != 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.source_financement_id == this.source_financement_id &&
              qtreel.source_financement_id == this.inputLigne1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else if (this.source_financement_id == 0 && this.inputLigne1 != 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.source_financement_id == this.inputLigne1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.source_financement_id != null
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      }
    },

    TotalMontantBudgetExecuté() {
      if (this.source_financement_id != 0 && this.inputLigne1 == 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.decision_cf == 8) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.decision_cf == 8)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.source_financement_id != 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 8) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 8)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.source_financement_id == 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 8) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 8)
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
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 9 &&
                qtreel.source_financement_id != null) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 8 &&
                qtreel.source_financement_id != null) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 9 &&
                qtreel.source_financement_id != null) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 8 &&
                qtreel.source_financement_id != null)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      }
    },

    TotalMontantBudgetExecutéProvisoire() {
      if (this.source_financement_id == 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.type_ordre_paiement == 2 &&
              qtreel.source_financement_id == this.inputLigne1
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.source_financement_id != 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.type_ordre_paiement == 2 &&
              qtreel.source_financement_id == this.source_financement_id &&
              qtreel.source_financement_id == this.inputLigne1
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.source_financement_id != 0 && this.inputLigne1 == 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.type_ordre_paiement == 2 &&
              qtreel.source_financement_id == this.source_financement_id
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
              qtreel.exercice == this.afficheAnnee &&
              qtreel.type_ordre_paiement == 2 &&
              qtreel.source_financement_id != null
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      }
    },

    //*************fin gestion des totaux*************/

    MontantReamenagement() {
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
                  qtreel.source_financement_id == id &&
                  qtreel.decision_cf == 9) ||
                (qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.source_financement_id == id &&
                  qtreel.decision_cf == 8) ||
                (qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.source_financement_id == id &&
                  qtreel.decision_cf == 9) ||
                (qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.source_financement_id == id &&
                  qtreel.decision_cf == 8)
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

    MontantBudgetExecutéProvisoire() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.source_financement_id == id
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

    MontantBudgetActuelActivite() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.ligneeconomique_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.source_financement_id == id1
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



     MontantOPNonReguSection() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                 qtreel.source_financement_id == id && qtreel.section_id == id1 &&
                 qtreel.diff_reg_op != 1 && qtreel.type_ordre_paiement==2 &&
                  qtreel.exercice==this.afficheAnnee
            ).reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);   
        }
      };
    },


    
     NombreOPNonReguSection() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id && qtreel.section_id == id1 &&
                 qtreel.diff_reg_op != 1 && qtreel.type_ordre_paiement==2 &&
                  qtreel.exercice==this.afficheAnnee
            ).length
        }
      };
    },



    MontantBudgetExecutéSection() {
      return (id1, id) => {
        if (id1 != null && id1 != "" && id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.source_financement_id == id1 &&
                  qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.source_financement_id == id1 &&
                  qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9) ||
                (qtreel.source_financement_id == id1 &&
                  qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.source_financement_id == id1 &&
                  qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9)
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

    listeordrepaiements() {
      if (this.formData.date_debut != "" && this.formData.date_fin != "") {
        return (id) => {
          if (id != null && id != "") {
            return this.gettersgestionOrdrePaiement.filter(
              (qtreel) =>
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 8 &&
                  qtreel.date_decision_cf >= this.formData.date_debut &&
                  qtreel.date_decision_cf <= this.formData.date_fin) ||
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 9 &&
                  qtreel.date_decision_cf >= this.formData.date_debut &&
                  qtreel.date_decision_cf <= this.formData.date_fin)
            );
          }
        };
      } else {
        return (id) => {
          if (id != null && id != "") {
            return this.gettersgestionOrdrePaiement.filter(
              (qtreel) =>
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 8) ||
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 9)
            );
          }
        };
      }
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
  },

  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
      "modifierGestionOrdrePaiementAnnulat",
      "supprimerGestionOrdrePaiement",
      "ajouterHistoriqueDecisionOp",
      "modifierHistoriqueDecisionOp",
    ]),

    InputLibelleBailleur() {
      if (this.InputLibelleBailleurdata == false) {
        this.InputLibelleBailleurdata = true;
      } else {
        this.InputLibelleBailleurdata = false;
        this.Libelle_bailleur = 0;
      }
    },

    InputBudgetInitial() {
      if (this.InputBudgetInitialdata == false) {
        this.InputBudgetInitialdata = true;
      } else {
        this.InputBudgetInitialdata = false;
        this.Budget_Initial = 0;
      }
    },

    InputVariation() {
      if (this.InputVariationdata == false) {
        this.InputVariationdata = true;
      } else {
        this.InputVariationdata = false;
        this.Input_Variation = 0;
      }
    },

    InputBudgetActuel() {
      if (this.InputBudgetActueldata == false) {
        this.InputBudgetActueldata = true;
      } else {
        this.InputBudgetActueldata = false;
        this.Budget_Actuel = 0;
      }
    },

    InputMontantExecute() {
      if (this.InputMontantExecutedata == false) {
        this.InputMontantExecutedata = true;
      } else {
        this.InputMontantExecutedata = false;
        this.Montant_Execute = 0;
      }
    },

    ActiveInputNombreOpNonProvisoireRegulirise(){
      if (this.inputNombreOpNonRegulirise == false) {
        this.inputNombreOpNonRegulirise = true;
      } else {
        this.inputNombreOpNonRegulirise = false;
        this.Nombre_Op_Non_Regulirise = 0;
      }
    },

    ActiveInputmONTANTOpNonProvisoireRegulirise(){
      if (this.inputMontantOpNonRegulirise == false) {
        this.inputMontantOpNonRegulirise = true;
      } else {
        this.inputMontantOpNonRegulirise = false;
        this.MONTANT_Op_NON_Regulirise = 0;
      }
    },

    InputDisponible() {
      if (this.InputDisponibledata == false) {
        this.InputDisponibledata = true;
      } else {
        this.InputDisponibledata = false;
        this.Input_Disponible = 0;
      }
    },

    InputNbreMarche() {
      if (this.InputNbreMarchedata == false) {
        this.InputNbreMarchedata = true;
      } else {
        this.InputNbreMarchedata = false;
        this.Nbre_Marche = 0;
      }
    },

    trilibelleBailleur() {
      if (this.trilibelleBailleurdata == 0) {
        this.trilibelleBailleurdata = 1;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return a.libelle - b.libelle;
        });
      } else {
        this.trilibelleBailleurdata = 0;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return b.libelle - a.libelle;
        });
      }
    },

    triBudgetInitial() {
      if (this.triBudgetInitialdata == 0) {
        this.triBudgetInitialdata = 1;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return a.MontantVote - b.MontantVote;
        });
      } else {
        this.triBudgetInitialdata = 0;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return b.MontantVote - a.MontantVote;
        });
      }
    },

    trivariation() {
      if (this.trivariationdata == 0) {
        this.trivariationdata = 1;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return a.Variation - b.Variation;
        });
      } else {
        this.trivariationdata = 0;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return b.Variation - a.Variation;
        });
      }
    },

    triBudgetActuel() {
      if (this.triBudgetActueldata == 0) {
        this.triBudgetActueldata = 1;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return a.Budgetactuel - b.Budgetactuel;
        });
      } else {
        this.triBudgetActueldata = 0;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return b.Budgetactuel - a.Budgetactuel;
        });
      }
    },

    triMontantExecution() {
      if (this.triMontantExecutiondata == 0) {
        this.triMontantExecutiondata = 1;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return a.MontantExecute - b.MontantExecute;
        });
      } else {
        this.triMontantExecutiondata = 0;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return b.MontantExecute - a.MontantExecute;
        });
      }
    },

    triMontantOpNonRegulirise(){
         if (this.triMontantOpNonRegulirisedata == 0) {
        this.triMontantOpNonRegulirisedata = 1;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return a.NomBreoPnonREgu - b.NomBreoPnonREgu;
        });
      } else {
        this.triMontantOpNonRegulirisedata = 0;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return b.NomBreoPnonREgu - a.NomBreoPnonREgu;
        });
      }
    },


      triNombreOpNonRegulirise(){
         if (this.triNombreOpNonRegulirisedata == 0) {
        this.triNombreOpNonRegulirisedata = 1;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return a.MONTANToPnonREgu - b.MONTANToPnonREgu;
        });
      } else {
        this.triNombreOpNonRegulirisedata = 0;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return b.MONTANToPnonREgu - a.MONTANToPnonREgu;
        });
      }
    },

    //new
    triTauxExecution(){
         if (this.triTauxExecutiondata == 0) {
        this.triTauxExecutiondata = 1;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return a.TauxExecution - b.TauxExecution;
        });
      } else {
        this.triTauxExecutiondata = 0;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return b.TauxExecution - a.TauxExecution;
        });
      }
    },

    triDisponible() {
      if (this.triDisponibledata == 0) {
        this.triDisponibledata = 1;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return a.Disponible - b.Disponible;
        });
      } else {
        this.triDisponibledata = 0;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return b.Disponible - a.Disponible;
        });
      }
    },

    triMarcheEnCours() {
      if (this.triMarcheEnCoursdata == 0) {
        this.triMarcheEnCoursdata = 1;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return a.MarcheEnCours - b.MarcheEnCours;
        });
      } else {
        this.triMarcheEnCoursdata = 0;
        return this.TriaffichageUniteAdminstrative.sort(function (a, b) {
          return b.MarcheEnCours - a.MarcheEnCours;
        });
      }
    },

    nbrebailleurSection(id) {
      return this.bailleurParSect(id).length;
    },
    nbreBailleur(id) {
      return this.bailleurPar(id).length;
    },

    MontantActuelParUa(id) {
      return (
        parseFloat(this.MontantbudgetVoteParUa(id)) +
        parseFloat(this.MontantbudgetReamenagementParUa(id))
      );
    },
    MontantDisponibleParUa(id) {
      return (
        parseFloat(this.MontantActuelParUa(id)) -
        parseFloat(this.MontantExecuteParUa(id))
      );
    },
    TauxExecutionParUa(id) {
      return (
        parseFloat(this.MontantExecuteParUa(id)) /
        parseFloat(this.MontantbudgetVoteParUa(id))
      ).toFixed(2);
    },

    MontantActuelParSection(id) {
      return (
        parseFloat(this.MontantbudgetVoteParSection(id)) +
        parseFloat(this.MontantbudgetReamenagementParSection(id))
      );
    },
    MontantDisponibleParSection(id) {
      return (
        parseFloat(this.MontantActuelParSection(id)) -
        parseFloat(this.MontantExecuteParSection(id))
      );
    },
    TauxExecutionParSection(id) {
      return (
        parseFloat(this.MontantExecuteParSection(id)) /
        parseFloat(this.MontantbudgetVoteParSection(id))
      ).toFixed(2);
    },

    MontantActuel(id, id1) {
      return (
        parseFloat(this.MontantbudgetVote(id, id1)) +
        parseFloat(this.MontantbudgetReamenagement(id, id1))
      );
    },
    MontantDisponible(id, id1) {
      return (
        parseFloat(this.MontantActuel(id, id1)) -
        parseFloat(this.MontantExecute(id, id1))
      );
    },
    TauxExecution(id, id1) {
      return (
        parseFloat(this.MontantExecute(id, id1)) /
        parseFloat(this.MontantbudgetVote(id, id1))
      ).toFixed(2);
    },

    ActiveInputLigne() {
      if (this.inputLigne == false) {
        this.inputLigne = true;
      } else {
        this.inputLigne = false;
        this.inputLigne1 = 0;
      }
    },
    ShowMyUa(id) {
      if (this.recupereIDactivite == "") {
        this.recupereIDactivite = id;
      } else if (
        this.recupereIDactivite != "" &&
        this.recupereIDactivite != id
      ) {
        this.recupereIDactivite = "";
        this.recupereIDactivite = id;
      } else {
        this.recupereIDactivite = "";
      }
    },

    ShowMyLigne(id) {
      if (this.recupereIDSection == "") {
        this.recupereIDSection = id;
      } else if (this.recupereIDSection != "" && this.recupereIDSection != id) {
        this.recupereIDSection = "";
        this.recupereIDSection = id;
      } else {
        this.recupereIDSection = "";
      }
    },

    EviteNaN(id) {
      if (
        this.MontantBudgetExecuté1Bailleur(id) == 0 &&
        this.BudgetActuelBailleur(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantBudgetExecuté1Bailleur(id)) /
            parseFloat(this.BudgetActuelBailleur(id))) *
          100
        ).toFixed(2);
      }
    },

    EviteNaNSection(id, id1) {
      if (
        this.MontantBudgetExecutéSection(id, id1) == 0 &&
        this.MontantActuelleParSection(id, id1) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantBudgetExecutéSection(id, id1)) /
            parseFloat(this.MontantActuelleParSection(id, id1))) *
          100
        ).toFixed(2);
      }
    },

    MontantActuelleParSection(id, id1) {
      return (
        parseFloat(this.MontantInitialParSection(id, id1)) +
        parseFloat(this.AfficheVariationBudget(id, id1))
      );
    },

    DisponibleBailleur(id) {
      return parseFloat(
        this.BudgetActuelBailleur(id) - this.MontantBudgetExecuté1Bailleur(id)
      );
    },

    BudgetActuelBailleur(id) {
      return (
        parseFloat(this.MontantReamenagerBailleur(id)) +
        parseFloat(this.BudgetInitial(id))
      );
    },

    MontantDisponibleParSectionB(id, id1) {
      return (
        parseFloat(this.MontantActuelleParSection(id, id1)) -
        parseFloat(this.MontantBudgetExecutéSection(id, id1))
      );
    },

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
    formatageSomme: formatageSomme,
    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>

<style scoped>
.taille {
  width: 95%;
}

.whitebg {
  background: #fff !important;
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
#taillecol{
    width: 140px !important;
    text-align:right !important;
}
#style1{
font-size: 20px !important;
}
th {
  font-size: 13px !important;
  font-weight: bold !important;
  color: #000 !important;
  text-align: center !important;
  background-color: #fbb203 !important;
}
</style>
