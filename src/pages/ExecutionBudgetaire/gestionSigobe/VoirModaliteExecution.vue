
<template>
  <div>
    <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 
     <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#Droit">Procédures de Droit Commun </a>
                        <a data-toggle="tab" href="#Derogatoires">Procédures Dérogatoires </a>
                      </li>
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="Droit" class="tab-pane active">
     <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#ENGAGEMENTDIRECT">ENGAGEMENT DIRECT</a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#ENGAGEMENTBONCOMMANDE">ENGAGEMENT PAR BON COMMANDE</a>
                      </li>
                       <!-- <li>
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
                      </li> -->
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
<div id="ENGAGEMENTDIRECT" class="tab-pane active">
                        ENGAGEMENT DIRECT
                       </div>
                       <div id="ENGAGEMENTBONCOMMANDE" class="tab-pane">
                     ENGAGEMENT BON COMMANDE
                       </div>
                       <!-- <div id="ViséLiquidation" class="tab-pane">
                        <MandatVise :macheid="detail_marche.id"></MandatVise>
                       </div> -->
                       <!-- <div id="DiffereLiquidation" class="tab-pane">
                        <MandatDifferer :macheid="detail_marche.id"></MandatDifferer>
                       </div> -->
                       <!-- <div id="RejettéLiquidation" class="tab-pane">
                        <MandatRejetter :macheid="detail_marche.id"></MandatRejetter>
                       </div> -->
                       <!-- <div id="ObservationLiquidation" class="tab-pane">
                        <MandatViseAvecObservation :macheid="detail_marche.id"></MandatViseAvecObservation>
                       </div> -->
                      </div>
          </div>
               

                       

                      
                      
      </div>
       </div>
      
              </table>
 
  </div>

  </div>
</template>
  
<script>
//import MandatEnAttente from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatEnAttente.vue"
// import MandatDifferer from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatDifferer.vue"
// import MandatRejetter from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatRejetter.vue"
// import MandatVise from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatVise.vue"
// import MandatViseAvecObservation from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatViseAvecObservation.vue"
import { mapGetters, mapActions } from "vuex";


export default {
  components:{
    // MandatViseAvecObservation,
    // MandatVise,
    // MandatRejetter,
    // MandatDifferer,
//MandatEnAttente
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      
      search: ""
    };
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.gettersDemandeEngagement.find(
       idmarche => idmarche.id == this.$route.params.id
         )
         
},
  computed: {
   ...mapGetters("bienService", ["gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
   
    
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllNoteService",
      "ajouterNoteService",
      "modifierNoteService",
      "supprimerNoteService"
    ]),
 afficherModalListePersonnel(){
                window.history.back()
            },
  }
};
</script>

