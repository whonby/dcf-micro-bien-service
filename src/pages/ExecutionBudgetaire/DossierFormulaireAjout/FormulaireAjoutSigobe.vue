
<template>
  <div class="container-fluid">
    <!-- {{RechercheNumeroOP}} -->
    <hr />
    <div align="left" style="cursor: pointer">
      <button class="btn btn-danger" @click.prevent="pagePrecedent">
        Page Précédente
      </button>
    </div>
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Ajouter Ordre Paiement</h5>
            
            <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
          </div>
          <table class="table table-bordered table-striped">
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Exercice</label>
                  <div class="controls">
                    <input
                      type="text"
                      style="border: 1px solid #000; font-size: 15px"
                      :value="anneeAmort"
                      class="span"
                      readonly
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label"
                    >Type Ordre paiement
                    <code style="color: red; font-size: 16px">*</code></label
                  >
                  <div class="controls">
                    <select
                      v-model="formData.type_ordre_paiement"
                      class="span"
                      style="border: 1px solid #000"
                    >
                     <option></option>
                      <option value="1">OP DIRECT</option>
                      <option value="2">OP PROVISOIRE</option>
                      <option value="4">OP DEFINITIF</option>
                      <option value="3">OP ANNULATION</option>
                    </select>
                  </div>
                </div>
              </td>
             
            </tr>
          </table>
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <div class="widget-box">
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                   
                     <li class="active" v-if="formData.type_ordre_paiement==2 || formData.type_ordre_paiement==0">
                      <a data-toggle="tab" href="#PROVISOIRE"
                        >DOSSIER DEMANDE </a
                      >
                    </li>
                     <li class="active" v-if="formData.type_ordre_paiement==3">
                      <a data-toggle="tab" href="#ANNULATION"
                        >DOSSIER BON COMMANDE</a
                      >
                    </li>
                     <li class="active" v-if="formData.type_ordre_paiement==4">
                      <a data-toggle="tab" href="#DEFINITIF"
                        >DOSSIER LIQUIDATION</a
                      >
                    </li>
                     <li class="active" v-if="formData.type_ordre_paiement==1">
                      <a data-toggle="tab" href="#DIRECT"
                        >DOSSIER MANDAT</a
                      >
                    </li>
                    <li class="active" v-if="formData.type_ordre_paiement==1">
                      <a data-toggle="tab" href="#DIRECT"
                        >DOSSIER OP SYSTEME</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                 
                  <div id="PROVISOIRE" class="tab-pane active" v-if="formData.type_ordre_paiement==2 || formData.type_ordre_paiement==0">
                 45
                  </div>
                  <div id="ANNULATION" class="tab-pane active" v-if="formData.type_ordre_paiement==3">
                  
                  78
                  </div>
                  <div id="DEFINITIF" class="tab-pane active" v-if="formData.type_ordre_paiement==4">
                
                  96
                  </div>
                   <div id="DIRECT" class="tab-pane active" v-if="formData.type_ordre_paiement==1">
             23
                  </div>
                </div>
            
                
               

                <br />
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
    <notifications />

  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";
// import AjouterOrdrePaiement from "../AjouterOrdrePaiement"
// import AjouterOrdrePaiementProvisoire from "../AjouterOrdrePaiementProvisoire"
// import AjouterOrdrePaiementAnnulation from "../AjouterOrdrePaiementAnnulation"
// import AjouterOrdrePaiementDefinitive from "../AjouterOrdrePaiementDefinitive"
// import { ModelListSelect } from "vue-search-select";
//import moment from "moment";
// import facture from '../Facture/facture.vue'
//import { formatageSomme } from "@/Repositories/Repository";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    //   AjouterOrdrePaiement,
    //   AjouterOrdrePaiementProvisoire,
    //   AjouterOrdrePaiementAnnulation,
    //   AjouterOrdrePaiementDefinitive
   // ModelListSelect,
    //  facture
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },
      ],
      liste: [],

      info_pdf: false,
      editFacture:{},
      formData: {
        unite_administrative_id: "",
        signataire:"",
        activite_id: "",
        ligne_economique_id: "",
        typedepense: "Marche",
        numero_ordre_paiement: "",
        type_ordre_paiement: 0,
        imterim_op:"Non",
        RattacherPers:"Non"
      
      },

      editpiece: {},
      formData5: {
        Auteur_id: "2",
      },
      formData9: {
        exonere: 1,
      },
    formData1: {},
      formData45: {},
      formData12: {
        objet_decompte: "",
      },
      formData7: {},
     
      formData8: {},
      formData02:{},
      formData2: {
        numeromarche: "",
        marche_id: "",
      },
      FormDataFacture: {
        exonere: 0,
      },
      editMarcheDate:{},
     // editMarcdate:"",
      message_mandater: "",
      decision_cf_definitif: "",
      decision_cf: "",
    };
  },

 created() {
            this.marcheid=this.formData1.type_ordre_paiement
      
},
  computed: {
    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    ...mapGetters("personnelUA", [
      "FichierJoinDmdEngagement",
      "salairesActeur",
      "personnaliseActeurDepense",
      "getterPersonneRattacher",
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
    ...mapGetters("uniteadministrative", [
      "budgetEclate",
      "groupeParBAILLER",
      "groupeLigneEconomiqueBudget",
      "getSousBudget",
      "groupeActiviteBudgetEclate",
      "budgetGeneral",
      "fonctionsua",
      "servicesua",
      "directions",
      "uniteZones",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
      "getterUniteAdministrativeBailleur"
    ]),
    // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
    ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
    ...mapGetters("SuiviImmobilisation", ["services"]),

    ...mapGetters("bienService", [
      
      "avenants",
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
    ...mapGetters("parametreGenerauxAdministratif", [
      "taux",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),

 anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },
  },

  methods: {
    ...mapActions("bienService", [
      "ajouterPieceJustificative",
      "modifierPieceJustificative",
      "supprimerPieceJustificative",
      "ajouterDemandeEngagement",
      "ajouterDossierFacture",
      "modifierDossierFacture",
      "supprimerDossierFacture",
      "ajouterGestionOrdrePaiement",
      "ModifierDateEffetFinancier",
      "modifierMarche2"
    ]),
    ...mapActions("personnelUA", ["ajouterFichierJointDmd"]),

 

    pagePrecedent() {
      window.history.back();
    },
   
  },
};
</script>

<style scoped>
.taille {
  width: 70%;
  margin: 0 -40%;
  
}
.tailles {
  width: 60%;
  margin: 0 -30%;
}
.ApercuFacture1 {
  width: 64%;
  margin: 0 -30%;

  border: 2px solid #000;
}
</style>
