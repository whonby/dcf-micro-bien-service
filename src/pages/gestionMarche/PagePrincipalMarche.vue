
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
                        <a data-toggle="tab" href="#MANDATEMENT">LISTES DES MARCHES</a>
                    
                      </li>
                       <li class="tab-pane">
                        <a data-toggle="tab" href="#BIES">LISTES DES MARCHES BIENS SERVICES</a>
                    
                      </li>
                       <li class="tab-pane">
                        <a data-toggle="tab" href="#TRAVAUX">LISTES DES MARCHES TRAVAUX</a>
                    
                      </li>
                       <!-- <li class="">
                        
                        <a data-toggle="tab" href="#MANDATEMENT1">LISTES DES AUTRES DEPENSES</a>
                      </li> -->
                     
                    </ul>
                  </div>

                  


                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="MANDATEMENT" class="tab-pane active">
                       
                        <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#marcheHorsPPM">LISTES DES MARCHES HORS PPM</a>
                    
                      </li>
                       <li class="tab-pane">
                        <a data-toggle="tab" href="#marchePPM">LISTES DES MARCHES PPM</a>
                    
                      </li>
                    
                    </ul>
                  </div>
    <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="marcheHorsPPM" class="tab-pane active">
                    <MarcheHorsPPMnew></MarcheHorsPPMnew>
                    </div>
                     <div id="marchePPM" class="tab-pane ">
                      <marcheHorsppmHorsSib></marcheHorsppmHorsSib>
                    </div>
                    </div>
          </div>
                <div id="BIES" class="tab-pane">
                        <marcheHorsppmHorsSibBienService></marcheHorsppmHorsSibBienService>
                   <!-- <GestionAutresDepense></GestionAutresDepense> -->
                </div>
                <div id="TRAVAUX" class="tab-pane">
             <marcheHorsppmHorsSibInvestissement></marcheHorsppmHorsSibInvestissement>
                   <!-- <GestionAutresDepense></GestionAutresDepense> -->
                </div>

                       

                      
                      
      </div>
       </div>
      
              </table>
 
  </div>

  </div>
</template>
  
<script>
import marcheHorsppmHorsSib from "./marcheHorsppmHorsSib.vue"
import MarcheHorsPPMnew from "./MarcheHorsPPMnew"
import marcheHorsppmHorsSibBienService from "./marcheHorsppmHorsSibBienService.vue"
import marcheHorsppmHorsSibInvestissement from "./marcheHorsppmHorsSibInvestissement.vue"
//import GestionAutresDepense from "./GestionAutresDepense.vue"
// import MandatDifferer from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatDifferer.vue"
// import MandatRejetter from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatRejetter.vue"
// import MandatVise from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatVise.vue"
// import MandatViseAvecObservation from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatViseAvecObservation.vue"
import { mapGetters, mapActions } from "vuex";


export default {
  components:{
      marcheHorsppmHorsSib,
      marcheHorsppmHorsSibBienService,
      marcheHorsppmHorsSibInvestissement,
      MarcheHorsPPMnew
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

