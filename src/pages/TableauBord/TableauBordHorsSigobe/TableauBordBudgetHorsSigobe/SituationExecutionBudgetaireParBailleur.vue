recupereIDactivite
<template>
  <div>
    
   
    <!-- <div class="row-fluid" style="margin-top: -20px">
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

              <td>

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
              </td>

            </tr>
          </tbody>
        </table>
        
      
    </div> -->

    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div> 
    
    <div class="widget-content nopadding" id="printpdf">
       <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">
                 SITUATION D'EXECUTION BUDGETAIRE PAR BAILLEUR</h2>
          </tr>

           
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
<th></th>
                 <th></th>
                 <th></th>
                   <th>
                    LIGNE 
                  </th>
                   
                  <th
                    style="
                      font-size: 12px;
                      font-weight: bold;
                      text-align: center;
                      color: #000;
                      background-color: #fbb203 !important;
                      width :8%
                    "
                  >
                 BUDGET INITIAL (FCFA) 
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
                  MODIFICATION BUDGETAIRE (FCFA) 
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
                    NBRE DE REAMENAGEMENT 
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
                    NBRE DE BAILLEUR  
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
                    NBRE DE MARCHES EN EXECUTION  
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
                  <th
                    style="
                      font-size: 12px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    MONTANTS EXECUTES (FCFA) 
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
                    NBRE D’OP PROVISOIRE NON REGULARISES 
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
                    DISPONIBLE (FCFA) 
                  </th>
                  <th
                    
                  >
                    TAUX D’EXECUTION 
                  </th>
                  
                </tr>
              </thead>
       <tbody>
                <tr>
                  <td>
                    <button @click="ShowMyUa(GroupeSection[0].section_id)">
                     <i class="icon-eye-open"></i> </button>
                  </td>
                  
                  <td> </td>

                <td v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'"  colspan="4">
                    {{ Libellesection(GroupeSection[0].section_id) }}
                    
                  </td>
      
 
                 <td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{formatageSommeSansFCFA(parseFloat(MontantbudgetVoteParSection(GroupeSection[0].section_id)))}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{formatageSommeSansFCFA(parseFloat(MontantbudgetReamenagementParSection(GroupeSection[0].section_id)))}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{NombrebudgetReamenagementParSection(GroupeSection[0].section_id)}}</td>
<td>
  
  
   <button class="btn btn-success taille" >
                        <span style="color:#fff;font-size: 15px;">
                         {{nbrebailleurSection(GroupeSection[0].section_id)}}
                        </span>
                      </button>
  </td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{NombreMarcheExecutionParSection(GroupeSection[0].section_id)}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{formatageSommeSansFCFA(parseFloat(MontantActuelParSection(GroupeSection[0].section_id)))}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{formatageSommeSansFCFA(parseFloat(MontantExecuteParSection(GroupeSection[0].section_id)))}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{NombreOpReguParSection(GroupeSection[0].section_id)}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{formatageSommeSansFCFA(parseFloat(MontantDisponibleParSection(GroupeSection[0].section_id)))}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSection[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{parseFloat(TauxExecutionParSection(GroupeSection[0].section_id))}} %</td>
 
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
                  
                  <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'" colspan="2">
                    {{ libelleUa(GroupeUa) }}</td>

                <td style="text-align:right"  v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">{{formatageSommeSansFCFA(parseFloat(MontantbudgetVoteParUa(GroupeUa)))}}</td>
<td style="text-align:right"  v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">{{formatageSommeSansFCFA(parseFloat(MontantbudgetReamenagementParUa(GroupeUa)))}}</td>
<td style="text-align:right"  v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">{{NombrebudgetReamenagementParUa(GroupeUa)}}</td>
<td >
  <button class="btn btn-success taille" >
                        <span style="color:#fff;font-size: 15px;">
                          {{nbreBailleur(GroupeUa)}}
                        </span>
                      </button>
  
  
  </td>
<td style="text-align:right"  v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">{{NombreMarcheExecutionParUa(GroupeUa)}}</td>
<td style="text-align:right"  v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">{{formatageSommeSansFCFA(parseFloat(MontantActuelParUa(GroupeUa)))}}</td>
<td style="text-align:right"  v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">{{formatageSommeSansFCFA(parseFloat(MontantExecuteParUa(GroupeUa)))}}</td>
<td style="text-align:right"  v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">{{NombreOpReguParUa(GroupeUa)}}</td>
<td style="text-align:right"  v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">{{formatageSommeSansFCFA(parseFloat(MontantDisponibleParUa(GroupeUa)))}}</td>
<td style="text-align:right"  v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'">{{parseFloat(TauxExecutionParUa(GroupeUa))}} %</td>
  
                
                
                
                </tr>
                  
                <tr v-show="recupereIDSection==GroupeUa"
                v-for="GroupeLigne in AfficheLigneGroupe(GroupeUa)" :key="GroupeLigne">
                  <td></td>
                  <td></td>
                  <td></td>

                  <td></td>
                  
                  <td></td>
 
                  <td>{{ libelleLigneEconomique(GroupeLigne) }}</td>
                  <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(MontantbudgetVote(GroupeUa,GroupeLigne)))}}</td>
                  <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(MontantbudgetReamenagement(GroupeUa,GroupeLigne)))}}</td>
                  <td style="text-align:right">{{NombrebudgetReamenagement(GroupeUa,GroupeLigne)}}</td>
                  <td style="text-align:right">

                    
                  </td>
                                   <td style="text-align:right">{{NombreMarcheExecution(GroupeUa,GroupeLigne)}}</td>
                  <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(MontantActuel(GroupeUa,GroupeLigne)))}}</td> 

                  <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(MontantExecute(GroupeUa,GroupeLigne)))}}</td>
                  <td style="text-align:right">{{NombreOpRegu(GroupeUa,GroupeLigne)}}</td>
                  <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(MontantDisponible(GroupeUa,GroupeLigne)))}}</td>
                  <td style="text-align:right">
                    
                     <button class="btn btn-danger taille" v-if="parseFloat(TauxExecution(GroupeUa,GroupeLigne)) <= 0.25">
                        <span style="color:#fff;font-size: 15px;">
                          {{TauxExecution(GroupeUa,GroupeLigne)}}%
                        </span>
                      </button>
                      <button class="btn btn-warning taille" v-else-if="parseFloat(TauxExecution(GroupeUa,GroupeLigne)) <= 0.5">
                        <span style="color:#000;font-size: 15px;">
                          {{TauxExecution(GroupeUa,GroupeLigne)}}%
                        </span>
                      </button>
                       <button class="btn btn-success taille" v-else-if="parseFloat(TauxExecution(GroupeUa,GroupeLigne)) <= 0.75">
                        <span style="color:#fff;font-size: 15px;">
                          {{TauxExecution(GroupeUa,GroupeLigne)}}%
                        </span>
                      </button>
                      <button class="btn btn-success taille" v-else-if="parseFloat(TauxExecution(GroupeUa,GroupeLigne)) <= 1">
                        <span style="color:#fff;font-size: 15px;">
                          {{EviteNaNTypeFinancement(unite.id, unite1)}}%
                        </span>
                      </button>
                    </td> 
                </tr>
              </tbody>
            </table>
<br>
              <!-- <table class="table table-bordered" v-show="recupereIDactivite==GroupeSection[0].section_id">
              
      
              

            
            </table> -->
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
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    //ModelListSelect,
  },
  name: "typetext",
  data() {
    return {
      page: 0,
      size:3,
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
    //console.log("hello word")
    // console.log(this.budgetEclate)
    //console.log(this.MontantBudgetActuel())
    //console.log(this.MontantBudgetExecuté())
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
      "groupeByTypeFinancement"
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
    bailleurPar() {
      return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.budgetEclate.filter(item=>item.uniteadministrative_id == id  && item.budget_active==1);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.source_financement_id);
          });
          let unique = [...new Set(array_exercie)];
         // console.log(unique);
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
      
        if(id !=0 && id !=""){
          let objet = this.budgetEclate.filter(item=>item.section_id == id && item.budget_active==1);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.source_financement_id);
          });
          let unique = [...new Set(array_exercie)];
         // console.log(unique);
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
     NombreOpReguParUa(){
        return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id  &&
                qtreel.exercice == this.afficheAnnee && qtreel.diff_reg_op==0 && qtreel.type_ordre_paiement==2
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
    NombreOpReguParSection(){
        return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.section_id == id  &&
                qtreel.exercice == this.afficheAnnee && qtreel.diff_reg_op==0 && qtreel.type_ordre_paiement==2
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
    
    MontantExecuteParSection(){
        return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.section_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==8 ||
                qtreel.	section_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==9 || qtreel.	section_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==4 && qtreel.decision_cf==8 || qtreel.	section_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==4 && qtreel.decision_cf==9
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
     MontantExecuteParUa(){
        return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==8 ||
                qtreel.unite_administrative_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==9 || qtreel.unite_administrative_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==4 && qtreel.decision_cf==8 || qtreel.unite_administrative_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==4 && qtreel.decision_cf==9
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
    NombreOpRegu(){
        return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id && qtreel.ligne_economique_id == id1 &&
                qtreel.exercice == this.afficheAnnee && qtreel.diff_reg_op==0 && qtreel.type_ordre_paiement==2
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
    NombreMarcheExecutionParUa(){
        return (id) => {
        if (id != null && id != "" ) {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.marche_id!=null
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
    NombreMarcheExecutionParSection(){
        return (id) => {
        if (id != null && id != "" ) {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.section_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.marche_id!=null
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
    NombreMarcheExecution(){
        return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id && qtreel.ligne_economique_id == id1 &&
                qtreel.exercice == this.afficheAnnee && qtreel.marche_id!=null
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
  MontantExecute(){
        return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.unite_administrative_id == id && qtreel.ligne_economique_id == id1 &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==8 ||
                qtreel.unite_administrative_id == id && qtreel.ligne_economique_id == id1 &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==9 || qtreel.unite_administrative_id == id && qtreel.ligne_economique_id == id1 &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==4 && qtreel.decision_cf==8 || qtreel.unite_administrative_id == id && qtreel.ligne_economique_id == id1 &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==4 && qtreel.decision_cf==9
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
         // console.log(unique);
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
          //console.log(unique);
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
        return (id,id1) => {
          if (id != null && id != "",id1 != null && id1 != "") {
            return this.budgetEclate.filter(
              (qtreel) => qtreel.uniteadministrative_id == id  && qtreel.ligneeconomique_id == id1 && qtreel.budget_active==1
            );
          }
        };
      },
TailleurBailleurParLigne() {
      return (id,id1) => {
      
        if(id !=0 && id !="",id1 !=0 && id1 !=""){
          let objet = this.listeParLiNombreBailleurParLigne(id,id1);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.source_financement_id);
          });
          let unique = [...new Set(array_exercie)];
          //console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    },

NombreBailleurParSection() {
      return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.budgetEclate.filter(item=>item.section_id=id && item.budget_active==1);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.source_financement_id);
          });
          let unique = [...new Set(array_exercie)];
          //console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    },


NombreBailleurParUa() {
      return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.budgetEclate.filter(item=>item.uniteadministrative_id=id && item.budget_active==1);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.source_financement_id);
          });
          let unique = [...new Set(array_exercie)];
         // console.log(unique);
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
     MontantbudgetReamenagementParUa(){
        return (id) => {
        if (id != null && id != "" ) {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id  &&
                qtreel.annebudgetaire == this.afficheAnnee && qtreel.budget_active==1
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
    MontantbudgetReamenagementParSection(){
        return (id) => {
        if (id != null && id != "" ) {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.section_id == id  &&
                qtreel.annebudgetaire == this.afficheAnnee && qtreel.budget_active==1
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
   
MontantbudgetVoteParSection(){
        return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.section_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee && qtreel.budget_actif_def==1
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
    MontantbudgetVoteParUa(){
        return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee && qtreel.budget_actif_def==1
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
    NombrebudgetReamenagementParUa(){
        return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee && qtreel.budget_active==0
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
    NombrebudgetReamenagementParSection(){
        return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.section_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee && qtreel.budget_active==0
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
       MontantbudgetVote(){
        return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id && qtreel.ligneeconomique_id == id1 &&
                qtreel.annebudgetaire == this.afficheAnnee && qtreel.budget_actif_def==1
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
    MontantbudgetReamenagement(){
        return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id && qtreel.ligneeconomique_id == id1 &&
                qtreel.annebudgetaire == this.afficheAnnee && qtreel.budget_active==1
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
    NombrebudgetReamenagement(){
        return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id && qtreel.ligneeconomique_id == id1 &&
                qtreel.annebudgetaire == this.afficheAnnee && qtreel.budget_active==0
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
    //**************fin ******* */

    //&& this.inputLigne1!=0
    ListeGroupByActivite() {
      if (this.source_financement_id1!=0) {
        return this.groupeByBailleur.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee
            && qtreel[0].source_financement_id==this.source_financement_id1
            
        );
      } 
      else {
        return this.groupeByBailleur
        .filter(
          (qtreel) =>
            (qtreel[0].annebudgetaire == this.afficheAnnee
           
             )

        );
      }
    },

    afficheAnnee() {
      if (this.exercices_budgetaires_id == 0) {
        return this.anneeAmort;
      } else {
        return this.exercices_budgetaires_id;
      }
    },

    ListeGroupByNature() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.GroupeOrdrePaiementByGrandeNature.filter(
            (qtreel) => qtreel.grand_nature_id == id
          );

          if (qtereel) {
            return qtereel.grand_nature_id;
          }
          return 0;
        }
      };
    },
    //****************gestion des totaux *********//

     TotalEviteNaN() {
      if (
        this.TotalMontantBudgetExecuté == 0 &&
        this.TotalMontantReamenagement == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.TotalMontantBudgetExecuté) /
            parseFloat(this.TotalMontantReamenagement)) *
          100
        ).toFixed(2);
      }
    },


    

      TotalMontantbudgetVote(){
        if(this.source_financement_id!=0 && this.inputLigne1!=0){
             return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id
              && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }else if(this.source_financement_id!=0 && this.inputLigne1==0){
               return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }else if(this.source_financement_id==0 && this.inputLigne1!=0){
               return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
        else{
             return this.budgetEclate
             .filter((qtreel) =>
             (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id!=null))
             .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
          
    },

    TotalMontantReamenagement(){
        if(this.source_financement_id!=0 && this.inputLigne1==0){
             return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }else if(this.source_financement_id!=0 && this.inputLigne1!=0){
             return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id
              && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }else if(this.source_financement_id==0 && this.inputLigne1!=0){
               return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
        else{
             return this.budgetEclate
             .filter((qtreel) =>
             (qtreel.annebudgetaire == this.afficheAnnee
                 && qtreel.source_financement_id!=null))
             .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
          
    },

       TotalMontantBudgetActuel() {
     if(this.source_financement_id!=0 && this.inputLigne1==0){
             return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);

        } else if(this.source_financement_id!=0 && this.inputLigne1!=0){
               return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id
                 && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
        else if(this.source_financement_id==0 && this.inputLigne1!=0){
              return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
        else{
             return this.budgetEclate
             .filter((qtreel) =>
             (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id!=null))
             .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
    },

     TotalMontantBudgetExecuté() {
        if (this.source_financement_id!=0 && this.inputLigne1==0) {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id
                &&qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id
                &&qtreel.decision_cf==8)   
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        }else if(this.source_financement_id!=0 && this.inputLigne1!=0){
               return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id
                && qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1
                && qtreel.source_financement_id == this.source_financement_id
                && qtreel.source_financement_id == this.inputLigne1
                && qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id
                && qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id
                && qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==8)   
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);

        }else if (this.source_financement_id==0 && this.inputLigne1!=0) {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==8)   
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
         }else {
              return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf==9 && qtreel.source_financement_id!=null)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf==8 && qtreel.source_financement_id!=null)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf==9 && qtreel.source_financement_id!=null)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf==8 && qtreel.source_financement_id!=null)   
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
        if (this.source_financement_id==0 && this.inputLigne1!=0) {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.source_financement_id == this.inputLigne1
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
        }else if(this.source_financement_id!=0 && this.inputLigne1!=0){
            return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.source_financement_id == this.source_financement_id
                && qtreel.source_financement_id == this.inputLigne1
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
        }else if(this.source_financement_id!=0 && this.inputLigne1==0){
            return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.source_financement_id == this.source_financement_id
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
        }else {
             return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 && qtreel.source_financement_id!=null
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


    MontantBudgetExecutéActivite() {
      return (id,id1) => {
        if (id != null && id != ""&& id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.ligne_economique_id == id
                && qtreel.source_financement_id == id1
               && qtreel.exercice == this.afficheAnnee 
               && qtreel.type_ordre_paiement == 1
               && qtreel.decision_cf==8)
               ||
                (qtreel.ligne_economique_id == id
                && qtreel.source_financement_id == id1
               && qtreel.exercice == this.afficheAnnee 
               && qtreel.type_ordre_paiement == 1
               && qtreel.decision_cf==9)
               ||
               (qtreel.ligne_economique_id == id
               && qtreel.source_financement_id == id1
               && qtreel.exercice == this.afficheAnnee 
               && qtreel.type_ordre_paiement == 4
               && qtreel.decision_cf==8)
               ||
                (qtreel.ligne_economique_id == id
                && qtreel.source_financement_id == id1
               && qtreel.exercice == this.afficheAnnee 
               && qtreel.type_ordre_paiement == 4
               && qtreel.decision_cf==9)
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

    MontantBudgetExecutéProvisoireActivite() {
      return (id,id1) => {
        if (id != null && id != ""&& id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.ligne_economique_id == id &&
                qtreel.source_financement_id == id1 &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2
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
       // console.log(idactivite);
        if(idactivite !=null && idactivite!=""){
           let objet = this.listeordrepaiementLigne(idactivite);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.grandenature_id);
          });
          let unique = [...new Set(array_exercie)];
        //  console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
      }

      }
       
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
       // console.log(grande_nature_id)
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
       // console.log(idactivite);
        if(idactivite!=null && idactivite !=0 && idactivite !=""){
          let objet = this.listeordrepaiementLigne2(idactivite);
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
  nbrebailleurSection(id){
    return this.bailleurParSect(id).length
  },
nbreBailleur(id){

  return this.bailleurPar(id).length
},


MontantActuelParUa(id){
 return   parseFloat(this.MontantbudgetVoteParUa(id))+parseFloat(this.MontantbudgetReamenagementParUa(id)) 
   
},
MontantDisponibleParUa(id){
 return  parseFloat(this.MontantActuelParUa(id))-parseFloat(this.MontantExecuteParUa(id))
   
},
TauxExecutionParUa(id){
 return  ((parseFloat(this.MontantExecuteParUa(id))/parseFloat(this.MontantbudgetVoteParUa(id)))).toFixed(2)
   
},


MontantActuelParSection(id){
 return   parseFloat(this.MontantbudgetVoteParSection(id))+parseFloat(this.MontantbudgetReamenagementParSection(id)) 
   
},
MontantDisponibleParSection(id){
 return  parseFloat(this.MontantActuelParSection(id))-parseFloat(this.MontantExecuteParSection(id))
   
},
TauxExecutionParSection(id){
 return  ((parseFloat(this.MontantExecuteParSection(id))/parseFloat(this.MontantbudgetVoteParSection(id)))).toFixed(2)
   
},







MontantActuel(id,id1){
 return   parseFloat(this.MontantbudgetVote(id,id1))+parseFloat(this.MontantbudgetReamenagement(id,id1)) 
   
},
MontantDisponible(id,id1){
 return  parseFloat(this.MontantActuel(id,id1))-parseFloat(this.MontantExecute(id,id1))
   
},
TauxExecution(id,id1){
 return  ((parseFloat(this.MontantExecute(id,id1))/parseFloat(this.MontantbudgetVote(id,id1)))).toFixed(2)
   
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
        this.MontantBudgetExecutéActivite(id,id1) == 0 &&
        this.MontantBudgetActuelActivite(id,id1) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantBudgetExecutéActivite(id,id1)) /
            parseFloat(this.MontantBudgetActuelActivite(id,id1))) *
          100
        ).toFixed(2);
      }
    },

    //  {{
    //                   (
    //                     (MontantBudgetExecutéActivite(listeLigneeco,GroupeOrdrePaiementByActivit[0].source_financement_id) /
    //                       MontantBudgetActuelActivite(listeLigneeco,
    //                         GroupeOrdrePaiementByActivit[0].source_financement_id
    //                       )) *
    //                     100
    //                   ).toFixed(3)


     






     verifValeur(){
      if(this.MontantBudgetActuel() == 0 && this.MontantBudgetExecuté() == 0 && this.MontantBudgetExecutéProvisoire() == 0){
        return 1;
      }
      return 0;
      
       
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
