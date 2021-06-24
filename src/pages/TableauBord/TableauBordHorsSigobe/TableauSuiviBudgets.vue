<template>
  <div>
    <div id="validationOpDefinitif" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3 style="font-size:14px;font-weight: bold;">UNITE ADMINISTRATIVE : {{libelleUniteAdministrative(editMandat.id)}}</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <thead>
              <tr style="">
                 <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">TYPE FINANCEMENT</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">
                  BUDGET VOTE (FCFA)</th>

                

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">
                  BUDGET ACTUEL (FCFA)</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">
                  MONTANTS EXECUTES (FCFA)</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">TAUX EXECUTION</th>
                  
                <!-- <th style="font-size:15px;background: default;color:#fff">Action</th> -->
              </tr>
            </thead>
            <tbody>
             <tr  v-for="unite in arrayExerciceDecompteBienService(editMandat.id)"    :key="unite.id">
               <td>{{libelleTypeFinancement(unite)}}</td>
              <td style="font-weight: bold; font-size: 12px; text-align: center">{{ formatageSommeSansFCFA(parseFloat(MontantVoteParTypeFinancement(editMandat.id,unite)))}}</td>
                  <td style="font-weight: bold; font-size: 12px; text-align: center">{{formatageSommeSansFCFA(parseFloat(MontantVoteParTypeFinancement(editMandat.id,unite) - MontantExecuteParTypeFinancement(editMandat.id,unite)))}}</td>
               <td style="font-weight: bold; font-size: 12px; text-align: center">{{formatageSommeSansFCFA(parseFloat(MontantExecuteParTypeFinancement(editMandat.id,unite)))}}</td>
            
               <td style="font-weight: bold; font-size: 12px; text-align: center"> {{ EviteNaNTypeFinancement(editMandat.id,unite) }}%</td>
             </tr>
              <tr>
                <td style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  color:#000;
                  text-align:center,
                  background-color: #FC762F !important;
                ">TOTAL</td>

               
                <td
                  style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  color:#000;
                  text-align:center,
                  background-color: #FC762F !important;"
                
                >
                  {{ formatageSomme(parseFloat(TotalVoteParTypeFinancement)) }}
                </td>
                

                <td
                  style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  color:#000;
                  text-align:center,
                  background-color: #FC762F !important;
                "
                >
                  {{ formatageSomme(parseFloat(TotalVoteParTypeFinancement - totalComsommeYtpeFinancement)) }}
                </td>
                <td
                  style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  color:#000;
                  text-align:center,
                  background-color: #FC762F !important;
                "
                >
                   {{ formatageSomme(parseFloat(totalComsommeYtpeFinancement)) }}
                </td>

                <td
                  style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  color:#000;
                  text-align:center,
                  background-color: #FC762F !important;
                "
                >
                  {{ TauxExecutionTypeFinancement }}%
                </td>
                
              </tr>
            </tbody>
        </table>

      </div>

    </div>
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
              placeholder=""
            >
            </model-list-select>
          </td>
          <td colspan="">
            <label>UNITE ADMINISTRATIVE </label>
            <model-list-select
              style="background-color: #fff; border: 2px solid #000"
              class="wide"
              :list="uniteAdministratives"
              v-model="uniteAdmin_id"
              option-value="id"
              option-text="libelle"
              placeholder="TOUTES LES UNITES ADMINISTRATIVES"
            >
            </model-list-select>
          </td>

           <td colspan="">
            <label>TYPE FINANCEMENT </label>
            <model-list-select
              style="background-color: #fff; border: 2px solid #000"
              class="wide"
              :list="types_financements"
              v-model="typefinancement"
              option-value="id"
              option-text="libelle"
              placeholder="TOUS LES TYPES FINANCEMENT"
            >
            </model-list-select>
          </td>
        </tr>
      </tbody>
    </table>
    
    <h2 style="text-align: center; font-size: 25px">
      Tableau de suivi des Budgets projet par UA et type de financement
    </h2>
    <div class="container-fluid">
      <notifications />
      <div class="widget-box">
        <div class="widget-title">
          <span class="icon">
            <i class="icon-th"></i>
          </span>
          <h5>Detail budget</h5>
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
          Entrer
        </div>

        <div class="widget-content nopadding">
          <table class="table table-bordered table-striped">
            <thead>
              <tr style="">
                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">
                  CODE UA</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">
                  LIBELLE UA</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">
                  BUDGET VOTE</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">
                  REAMENAGEMENT BUDGETAIRE</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">
                  BUDGET ACTUEL</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">
                  MONTANTS EXECUTES</th>

                <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">TAUX</th>
                   <th style=" font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #FC762F !important;">TYPE FINANCEMENT</th>
                <!-- <th style="font-size:15px;background: default;color:#fff">Action</th> -->
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="unite in partition(afficheUa, size)[page]"
                :key="unite.id"
              >
                <td style="font-weight: bold; font-size: 12px">
                  {{ CodeUniteAdministrative(unite.id) || "Auncun résultat" }}
                </td>
                <td style="font-weight: bold; font-size: 12px">
                  {{ libelleUniteAdministrative(unite.id) || "Auncun résultat" }}
                </td>

                <td
                  style="font-weight: bold; font-size: 12px; text-align: center"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(MontantBudgetVote(unite.id))
                    )
                  }}
                </td>
                <td
                  style="font-weight: bold; font-size: 12px; text-align: center"
                >
                  {{ TotalMontantReamenagement(unite.id) }}
                </td>
                <td
                  style="font-weight: bold; font-size: 12px; text-align: center"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(MontantBudgetVote(unite.id) - MontantBudgetExecuté(unite.id))
                    )
                  }}
                </td>

                <td
                  style="font-weight: bold; font-size: 12px; text-align: center"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(MontantBudgetExecuté(unite.id))
                    )
                  }}
                </td>

                <td
                  style="font-weight: bold; font-size: 12px; text-align: center"
                >
                  {{ EviteNaN(unite.id) }}%
                </td>
                <td
                 style="font-weight: bold; font-size: 12px; text-align: center"
                >
               <button
                        
                        class="btn btn-info tailBtn"
                        @click="apercuFacture(unite.id)"
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Voir</span
                        >
                      </button>
                </td>
              </tr>
              <tr>
                <td style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  background-color: #83f747 !important;
                ">TOTAL</td>

                <td
                  style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  background-color: #83f747 !important;
                "
                >
                  
                </td>
                <td
                  style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  background-color: #83f747 !important;"
                
                >
                  {{ formatageSomme(parseFloat(SommeBudgetInitial)) }}
                </td>
                <td
                  style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  background-color: #83f747 !important;
                "
                >
                 {{ formatageSomme(parseFloat(TotalReamenagement)) }}
                </td>

                <td
                  style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  background-color: #83f747 !important;
                "
                >
                  {{ formatageSomme(parseFloat(SommeBudgetInitial - SommeBudgetConsomme)) }}
                </td>
                <td
                  style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  background-color: #83f747 !important;
                "
                >
                   {{ formatageSomme(parseFloat(SommeBudgetConsomme)) }}
                </td>

                <td
                  style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  background-color: #83f747 !important;
                "
                >
                  {{ TauxExecution }}%
                </td>
                <td
                  style="font-weight: bold;
                  font-size: 18px;
                  width: 800px;
                  background-color: #83f747 !important;
                "
                >
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
      size: 20,
      active_el: 0,
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },
      ],
      editMandat:{},
      exercices_budgetaires_id: 0,
      typefinancement:0,
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
    };
  },
  created() {
    //  this.detailBudget=this.getterBudgeCharge.find(item=>item.id== this.$route.params.id)
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
      "groupeParTypeFinancementBudgetEclate"
    ]),

    ...mapGetters("bienService", [
      "getMandatPersonnaliserVise",
      "getMandatPersonnaliserPersonnel",
      "mandats",
      "gettersgestionOrdrePaiement",
    ]),

    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements"
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
    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,
    ...mapGetters("Utilisateurs", [
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
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
arrayExerciceDecompteBienService() {
      return (id) => {
        
        let objet = this.budgetEclate.filter(item=>item.uniteadministrative_id==id);
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
    MontantExecuteParTypeFinancement(){
        return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
               (qtreel.unite_administrative_id == id 
                && qtreel.type_financement_id == id1
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                 (qtreel.unite_administrative_id == id
                && qtreel.type_financement_id == id1
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null) 
                ||
                 (qtreel.unite_administrative_id == id
                && qtreel.type_financement_id == id1
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                (qtreel.unite_administrative_id == id
                && qtreel.type_financement_id == id1
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null)
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
      }
    },
MontantVoteParTypeFinancement(){
    return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id &&
                qtreel.type_financement_id == id1 
                && qtreel.budget_actif_def==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      }
},
TotalVoteParTypeFinancement(){
  return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == this.editMandat.id
                && qtreel.budget_actif_def==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
},
totalComsommeYtpeFinancement(){
 return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
               (
                qtreel.exercice == this.afficheAnnee &&  qtreel.unite_administrative_id == this.editMandat.id
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                 (
                 qtreel.exercice == this.afficheAnnee &&  qtreel.unite_administrative_id == this.editMandat.id
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null) 
                ||
                 (
                 qtreel.exercice == this.afficheAnnee &&  qtreel.unite_administrative_id == this.editMandat.id
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                (
                 qtreel.exercice == this.afficheAnnee &&  qtreel.unite_administrative_id == this.editMandat.id
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null)
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
     if(this.typefinancement==0){
        return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee
                && qtreel.budget_actif_def==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      }
     }else{
        return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id 
                && qtreel.annebudgetaire == this.afficheAnnee
                && qtreel.budget_actif_def==1
                && qtreel.type_financement_id==this.typefinancement
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
    if(this.typefinancement==0){
        return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
               (qtreel.unite_administrative_id == id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                 (qtreel.unite_administrative_id == id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null) 
                ||
                 (qtreel.unite_administrative_id == id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                (qtreel.unite_administrative_id == id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null)
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
      }
    }else{
        return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.unite_administrative_id == id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_financement_id==this.typefinancement
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 8
                && qtreel.diff_op!=null)
                ||
                 (qtreel.unite_administrative_id == id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_financement_id==this.typefinancement
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 9
                && qtreel.diff_op!=null)
                ||
                 (qtreel.unite_administrative_id == id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_financement_id==this.typefinancement
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 8
                && qtreel.diff_op!=null)
                ||
                 (qtreel.unite_administrative_id == id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_financement_id==this.typefinancement
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 9
                && qtreel.diff_op!=null))
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      }
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
      if (this.uniteAdmin_id == 0) {
        return this.filtre_unite_admin;
      } else {
        return this.filtre_unite;
      }
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
        return colect.filter((item2) => item2.id == this.uniteAdmin_id);
      }
      return this.filtrerUaParTypeProj.filter(
        (item2) => item2.id == this.uniteAdmin_id
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
      if (this.uniteAdmin_id == 0 && this.typefinancement==0) {

        return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.annebudgetaire == this.afficheAnnee
                && qtreel.budget_actif_def==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
      } else if(this.uniteAdmin_id != 0 && this.typefinancement==0){
           return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.annebudgetaire == this.afficheAnnee
                && qtreel.budget_actif_def==1
                && qtreel.uniteadministrative_id==this.uniteAdmin_id
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
      }
      else if(this.uniteAdmin_id == 0 && this.typefinancement!=0){
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.annebudgetaire == this.afficheAnnee
                && qtreel.budget_actif_def==1
                && qtreel.type_financement_id==this.typefinancement
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
      }
      
      else {
        return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.annebudgetaire == this.afficheAnnee
                && qtreel.budget_actif_def==1
                && qtreel.uniteadministrative_id==this.uniteAdmin_id
                && qtreel.type_financement_id==this.typefinancement
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
      }
    },
    SommeBudgetConsomme() {
      if (this.uniteAdmin_id == 0 && this.typefinancement==0) {
        return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
               (
                qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                 (
                 qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null) 
                ||
                 (
                 qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                (
                 qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
      } else if(this.uniteAdmin_id == 0 && this.typefinancement!=0){
                return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
               ( qtreel.type_financement_id==this.typefinancement
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                 (qtreel.type_financement_id==this.typefinancement
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null) 
                ||
                 (qtreel.type_financement_id==this.typefinancement
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                (qtreel.type_financement_id==this.typefinancement
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
      }else if(this.uniteAdmin_id != 0 && this.typefinancement==0){
                return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
               ( qtreel.unite_administrative_id==this.uniteAdmin_id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                 (qtreel.unite_administrative_id==this.uniteAdmin_id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null) 
                ||
                 (qtreel.unite_administrative_id==this.uniteAdmin_id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                (qtreel.unite_administrative_id==this.uniteAdmin_id
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null)
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
               ( qtreel.unite_administrative_id==this.uniteAdmin_id
                && qtreel.type_financement_id==this.typefinancement
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                 (qtreel.unite_administrative_id==this.uniteAdmin_id
                 && qtreel.type_financement_id==this.typefinancement
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null) 
                ||
                 (qtreel.unite_administrative_id==this.uniteAdmin_id
                 && qtreel.type_financement_id==this.typefinancement
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 8
                && qtreel.diff_op ==null) 
                ||
                (qtreel.unite_administrative_id==this.uniteAdmin_id
                && qtreel.type_financement_id==this.typefinancement
                && qtreel.exercice == this.afficheAnnee
                && qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf == 9
                && qtreel.diff_op ==null)
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

      if(this.totalComsommeYtpeFinancement==0 && this.TotalVoteParTypeFinancement==0){
        return 0.0;
      }else{
          return (
        (parseFloat(this.totalComsommeYtpeFinancement) /
          parseFloat(this.TotalVoteParTypeFinancement)) *
        100
      ).toFixed(2);
      }
      
    },
    TauxExecution() {

      if(this.SommeBudgetConsomme==0 && this.SommeBudgetInitial==0){
        return 0.0;
      }else{
          return (
        (parseFloat(this.SommeBudgetConsomme) /
          parseFloat(this.SommeBudgetInitial)) *
        100
      ).toFixed(2);
      }
      
    },

     TotalReamenagement() {
      return (this.SommeBudgetInitial - this.SommeBudgetConsomme);
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
    apercuFacture(id) {
      this.$("#validationOpDefinitif").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandat = this.afficheUa.find(
        (item) => item.id == id
      );
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
            parseFloat(this.MontantBudgetVote(id))) *
          100
        ).toFixed(2);
      }
    },
EviteNaNTypeFinancement(id,id1) {
      if (
        this.MontantExecuteParTypeFinancement(id,id1) == 0 &&
        this.MontantVoteParTypeFinancement(id,id1) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantExecuteParTypeFinancement(id,id1)) /
            parseFloat(this.MontantVoteParTypeFinancement(id,id1))) *
          100
        ).toFixed(2);
      }
    },

     TotalMontantReamenagement(id){
      return formatageSommeSansFCFA(
                      parseFloat(this.MontantBudgetVote(id) -this.MontantBudgetExecuté(id)))
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