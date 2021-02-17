
<template>
  <div>
    <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 
        <br>
     <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#BONCOMMANDE">ENGAGEMENT PAR BON DE COMMANDE</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#DIRECT">ENGAGEMENT DIRECT</a>
                      </li>
                       
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="BONCOMMANDE" class="tab-pane active">
                      <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#DEMANDE">DEMANDE D'ENGAGEMENT</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#LIQUIDATION">LIQUIDATION</a>
                      </li>
                        <li>
                        <a data-toggle="tab" href="#MANDAT">MANDAT</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                     <div id="DEMANDE" class="tab-pane active">
                       <div  align="right" style="cursor:pointer;">
    <button class="btn btn-success" @click.prevent="ajouterDemandeEngage"><i class="icon icon-folder-open"> Nouveau demande d'engagement</i></button>
    
        </div>
        <br>
                        <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#attent">Dossiers En Attentes</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#Visé">Dossiers Visés</a>
                      </li>
                        <li>
                        <a data-toggle="tab" href="#Observation">Dossiers Visés avec Observation</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#Differe">Dossiers différés</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#Rejetté">Dossiers Rejettés</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
<div id="attent" class="tab-pane active">
                         <demandeEnAttente :macheid="detail_marche.ua_id"></demandeEnAttente>
                       </div>
                       <div id="Visé" class="tab-pane">
                         <demandeVise :macheid="detail_marche.ua_id"></demandeVise>
                       </div>
                        <div id="Differe" class="tab-pane">
                         <demandeDifferer :macheid="detail_marche.ua_id"></demandeDifferer>
                       </div>
                        <div id="Observation" class="tab-pane">
                         <demandeViseAvecObservation :macheid="detail_marche.ua_id"></demandeViseAvecObservation>
                       </div>
                        <div id="Rejetté" class="tab-pane">
                         <demandeRejetter :macheid="detail_marche.ua_id"></demandeRejetter>
                       </div>
                      </div>
                      
                     </div>
                    <div id="LIQUIDATION" class="tab-pane">
                        <div  align="right" style="cursor:pointer;">
    <button class="btn btn-success" @click.prevent="liquidation"><i class="icon icon-folder-open"> Nouveau Liquidation</i></button>
    
        </div> 
        <br>
                        <div class="widget-title">
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
                        <LiquidationEnAttente :macheid="detail_marche.ua_id"></LiquidationEnAttente>
                       </div>
                       <div id="ViséLiquidation" class="tab-pane">
                        <LiquidationVise :macheid="detail_marche.ua_id"></LiquidationVise>
                       </div>
                       <div id="DiffereLiquidation" class="tab-pane">
                        <LiquidationDifferer :macheid="detail_marche.ua_id"></LiquidationDifferer>
                       </div>
                       <div id="RejettéLiquidation" class="tab-pane">
                        <LiquidationRejetter :macheid="detail_marche.ua_id"></LiquidationRejetter>
                       </div>
                       <div id="ObservationLiquidation" class="tab-pane">
                        <LiquidationViseAvecObservation :macheid="detail_marche.ua_id"></LiquidationViseAvecObservation>
                       </div>
                      </div>
                     </div>
                    
                     <div id="MANDAT" class="tab-pane">
                        <div  align="right" style="cursor:pointer;">
    <button class="btn btn-success" @click.prevent="MANDATEMENT" :readonly="griseButton1"><i class="icon icon-folder-open"> Nouveau Mandat</i></button>
    
        </div> 
        <br>
                        <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#attentMandat">Dossiers En Attentes</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#ViséMandat">Dossiers Visés</a>
                      </li>
                        <li>
                        <a data-toggle="tab" href="#ObservationMandat">Dossiers Visés avec Observation</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#DiffereMandat">Dossiers différés</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#RejettéMandat">Dossiers Rejettés</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
<div id="attentMandat" class="tab-pane active">
                        <MandatEnAttente :macheid="detail_marche.ua_id"></MandatEnAttente>
                       </div>
                       <div id="ViséMandat" class="tab-pane">
                        <MandatVise :macheid="detail_marche.ua_id"></MandatVise>
                       </div>
                       <div id="DiffereMandat" class="tab-pane">
                        <MandatDifferer :macheid="detail_marche.ua_id"></MandatDifferer>
                       </div>
                       <div id="RejettéMandat" class="tab-pane">
                        <MandatRejetter :macheid="detail_marche.ua_id"></MandatRejetter>
                       </div>
                       <div id="ObservationMandat" class="tab-pane">
                        <MandatViseAvecObservation :macheid="detail_marche.ua_id"></MandatViseAvecObservation>
                       </div>
                      </div>
                     </div>
                      
                  </div>
                
  <!-- <ListedemandeParBonCommande :macheid="detail_marche.ua_id"></ListedemandeParBonCommande> -->
          </div>
                <div id="DIRECT" class="tab-pane">
  <!-- <ListedemandeParEngagementDirect :macheid="detail_marche.ua_id"></ListedemandeParEngagementDirect> -->
          </div>
                    

                       

                      
                      
      </div>
       </div>
      
              </table>
 
  </div>

  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import demandeEnAttente from "@/pages/ExecutionBudgetaire/procedureParBonCommande/demandeEngagement/demandeEnAttente.vue"
import demandeVise from "@/pages/ExecutionBudgetaire/procedureParBonCommande/demandeEngagement/demandeVise.vue"
import demandeDifferer from "@/pages/ExecutionBudgetaire/procedureParBonCommande/demandeEngagement/demandeDifferer.vue"
import demandeRejetter from "@/pages/ExecutionBudgetaire/procedureParBonCommande/demandeEngagement/demandeRejetter.vue"
import demandeViseAvecObservation from "@/pages/ExecutionBudgetaire/procedureParBonCommande/demandeEngagement/demandeViseAvecObservation.vue"

import LiquidationEnAttente from "@/pages/ExecutionBudgetaire/procedureParBonCommande/Liquidation/LiquidationEnAttente.vue"


import LiquidationVise from "@/pages/ExecutionBudgetaire/procedureParBonCommande/Liquidation/LiquidationVise.vue"

import LiquidationDifferer from "@/pages/ExecutionBudgetaire/procedureParBonCommande/Liquidation/LiquidationDifferer.vue"

import LiquidationRejetter from "@/pages/ExecutionBudgetaire/procedureParBonCommande/Liquidation/LiquidationRejetter.vue"

import LiquidationViseAvecObservation from "@/pages/ExecutionBudgetaire/procedureParBonCommande/Liquidation/LiquidationViseAvecObservation.vue"
// import ListedemandeParEngagementDirect from "./ListedemandeParEngagementDirect.vue"


import MandatEnAttente from "@/pages/ExecutionBudgetaire/procedureParBonCommande/Mandat/MandatEnAttente.vue"
import MandatVise from "@/pages/ExecutionBudgetaire/procedureParBonCommande/Mandat/MandatVise.vue"
import MandatRejetter from "@/pages/ExecutionBudgetaire/procedureParBonCommande/Mandat/MandatRejetter.vue"
import MandatViseAvecObservation from "@/pages/ExecutionBudgetaire/procedureParBonCommande/Mandat/MandatViseAvecObservation.vue"
import MandatDifferer from "@/pages/ExecutionBudgetaire/procedureParBonCommande/Mandat/MandatDifferer.vue"
// import ListedemandeParEngagementDirect from "./ListedemandeParEngagementDirect.vue"

export default {
  components:{
    MandatDifferer,
    MandatViseAvecObservation,
    MandatRejetter,
    MandatVise,
    MandatEnAttente,
    LiquidationViseAvecObservation,
    LiquidationRejetter,
    LiquidationDifferer,
demandeEnAttente,
demandeVise,
demandeDifferer,
demandeViseAvecObservation,
demandeRejetter,
LiquidationEnAttente,
LiquidationVise


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
   ...mapGetters("bienService", ["gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
          griseButton1(){
  return this.griseButton(this.detail_marche.id) == 3
},
    
griseButton() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierLiquidation.find(qtreel => qtreel.dmd_engagement_id == id);

      if (qtereel) {
        return qtereel.decision_cf;
      }
      return ""
        }
      };
    },


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
            ajouterDemandeEngage(){
                this.$router.push({ name: 'AjouterDemandeEngagement' })
            },
             liquidation(){
                this.$router.push({ name: 'AjouterLiquidation' })
            },
            MANDATEMENT(){
                this.$router.push({ name: 'AjouterMantdatement' })
            },
  }
};
</script>

