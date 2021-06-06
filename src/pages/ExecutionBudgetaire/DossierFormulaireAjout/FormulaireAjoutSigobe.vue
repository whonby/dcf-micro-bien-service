
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
            <h5>DOSSIER CONTROLE D'EXECUTION SIGOBE</h5>
            
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
                      <option value="1">DOSSIER DEMANDE </option>
                      <option value="2">DOSSIER BON COMMANDE</option>
                      <option value="3">DOSSIER LIQUIDATION</option>
                      <option value="4">DOSSIER MANDAT</option>
                      <option value="5">DOSSIER OP SYSTEME</option>
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
                   
                     <li class="active" v-if="formData.type_ordre_paiement==1 || formData.type_ordre_paiement==0">
                      <a data-toggle="tab" href="#DEMANDE"
                        >DOSSIER DEMANDE </a
                      >
                    </li>
                     <li class="active" v-if="formData.type_ordre_paiement==2">
                      <a data-toggle="tab" href="#COMMANDE"
                        >DOSSIER BON COMMANDE</a
                      >
                    </li>
                     <li class="active" v-if="formData.type_ordre_paiement==3">
                      <a data-toggle="tab" href="#LIQUIDATION"
                        >DOSSIER LIQUIDATION</a
                      >
                    </li>
                     <li class="active" v-if="formData.type_ordre_paiement==4">
                      <a data-toggle="tab" href="#MANDAT"
                        >DOSSIER MANDAT</a
                      >
                    </li>
                    <li class="active" v-if="formData.type_ordre_paiement==5">
                      <a data-toggle="tab" href="#SYSTEME"
                        >DOSSIER OP SYSTEME</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                 
                  <div id="DEMANDE" class="tab-pane active" v-if="formData.type_ordre_paiement==1 || formData.type_ordre_paiement==0">
                 <AjouterDemandeEngagement12 ></AjouterDemandeEngagement12>
                  </div>
                  <div id="COMMANDE" class="tab-pane active" v-if="formData.type_ordre_paiement==2">
                  <AjouterBonCommande></AjouterBonCommande>
                  
                  </div>
                  <div id="LIQUIDATION" class="tab-pane active" v-if="formData.type_ordre_paiement==3">
                
                 <AjouterLiquidation ></AjouterLiquidation>
                  </div>
                   <div id="MANDAT" class="tab-pane active" v-if="formData.type_ordre_paiement==4">
                 <AjouterMantdatement ></AjouterMantdatement>
                  </div>
                   <div id="SYSTEME" class="tab-pane active" v-if="formData.type_ordre_paiement==5">
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
 import AjouterDemandeEngagement12 from "./AjouterDemandeEngagement12"
  import AjouterLiquidation from "./AjouterLiquidation"
  import AjouterBonCommande from "./AjouterBonCommande"
    import AjouterMantdatement from "./AjouterMantdatement"
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
       AjouterDemandeEngagement12,
       AjouterLiquidation,
       AjouterBonCommande,
       AjouterMantdatement
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
