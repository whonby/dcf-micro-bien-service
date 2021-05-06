
<template>
  <div>
    <div align="left" style="cursor: pointer">
      <button
        class="btn btn-danger"
        @click.prevent="afficherModalListePersonnel"
      >
        Page Précédente
      </button>
    </div>
    <div class="table-responsive text-nowrap">
      <table class="table table-bordered table-striped">
        <div class="widget-box">
          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active">
                <a data-toggle="tab" href="#MANDATEMENT"
                  >LISTES DES MARCHES SIGOBE</a
                >
              </li>
              <!-- <li class="">
                        
                        <a data-toggle="tab" href="#MANDATEMENT1">LISTES DES AUTRES DEPENSES</a>
                      </li> -->
            </ul>
          </div>

          <div class="widget-content tab-content">
            <!--ongle identification-->
            <div id="MANDATEMENT" class="tab-pane active">
              <!-- <marcheHorsppmHorsSib></marcheHorsppmHorsSib> -->
              <listeMarcheSigobe></listeMarcheSigobe>
              <!-- <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#attentLiquidation">Dossiers En Attentes</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#ViséLiquidation">Dossiers Visés</a>
                      </li>
                        <li>
                        <a data-toggle="tab" href="#ObservationLiquidation">Dossiers Visés avec Observation</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#DiffereLiquidation">Dossiers différés</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#RejettéLiquidation">Dossiers Rejettés</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
<div id="attentLiquidation" class="tab-pane active">
                        <MandatEnAttente :macheid="detail_marche.id"></MandatEnAttente>
                       </div>
                       <div id="ViséLiquidation" class="tab-pane">
                        <MandatVise :macheid="detail_marche.id"></MandatVise>
                       </div>
                       <div id="DiffereLiquidation" class="tab-pane">
                        <MandatDifferer :macheid="detail_marche.id"></MandatDifferer>
                       </div>
                       <div id="RejettéLiquidation" class="tab-pane">
                        <MandatRejetter :macheid="detail_marche.id"></MandatRejetter>
                       </div>
                       <div id="ObservationLiquidation" class="tab-pane">
                        <MandatViseAvecObservation :macheid="detail_marche.id"></MandatViseAvecObservation>
                       </div>
                      </div> -->
            </div>
            <!-- <div id="MANDATEMENT1" class="tab-pane">

                   <GestionAutresDepense></GestionAutresDepense>
                </div> -->
          </div>
        </div>
      </table>
    </div>
  </div>
</template>
  
<script>
import listeMarcheSigobe from "./listeMarcheSib.vue";
//import GestionAutresDepense from "./GestionAutresDepense.vue"
// import MandatDifferer from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatDifferer.vue"
// import MandatRejetter from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatRejetter.vue"
// import MandatVise from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatVise.vue"
// import MandatViseAvecObservation from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatViseAvecObservation.vue"
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    listeMarcheSigobe,
    // GestionAutresDepense
    //     MandatViseAvecObservation,
    //     MandatVise,
    //     MandatRejetter,
    //     MandatDifferer,
    // MandatEnAttente
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },
      ],

      search: "",
    };
  },
  created() {
    this.marcheid = this.$route.params.id;
    this.detail_marche = this.gettersDemandeEngagement.find(
      (idmarche) => idmarche.id == this.$route.params.id
    );
  },
  computed: {
    ...mapGetters("bienService", [
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
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllNoteService",
      "ajouterNoteService",
      "modifierNoteService",
      "supprimerNoteService",
    ]),
    afficherModalListePersonnel() {
      window.history.back();
    },
  },
};
</script>

