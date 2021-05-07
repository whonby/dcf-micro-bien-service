
<template>
  <div>
    <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 
        <br>
         <br>
        <div class="widget-title" style="color:#fff!important;font-size:15px"> <a href="#" data-toggle="collapse"> <span class="icon"><i class="icon-home" ></i></span>
            <h5 style="text-align: center;font-size:25px">{{idUniteAdministrative(marcheid)}}</h5>
            </a> </div>

        <div class="widget-box collapsible">
          <div class="widget-title" style="background-color: coral;color:#fff !important;font-size:15px"> <a href="#collapseOne" data-toggle="collapse"> <span class="icon"><i class="icon-sitemap" ></i></span>
            <h5 style="color:#fff !important;font-size:20px">PROCEDURES DE DROIT COMMUN </h5>
            </a> </div>
            <br>
          <div class="collapse in" id="collapseOne">
              
        <div class="widget-box collapsible">
       <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:30px"> <a href="#ENGAGEMENTDIRECT" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" ></i></span>
            <h5 style="background-color: #fff!important;color:#000!important;font-size:15px;">ENGAGEMENT DIRECT </h5>
            </a> 
            
            </div>
             <div class="collapse" id="ENGAGEMENTDIRECT">
<div class="widget-box collapsible">
    <div class="widget-title" style="background-color: #228B22;color:#fff!important;font-size:15px; margin-left:80px"> <a href="#DEMANDEENGAGAMENT" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#FFF!important;"></i></span>
            <h5 style="color:#FFF!important;font-size:15px;">DEMANDE ENGAGAMENT </h5>
            </a> 
            
            </div>
            
            <div class="collapse" id="DEMANDEENGAGAMENT" style="font-size:15px; margin-left:110px"><ListeDemandeEngagement :macheid="marcheid"></ListeDemandeEngagement></div>
            <br>
            <!-- DEBUT LIQUIDATION -->
            <div class="widget-title" style="background-color: #228B22;color:#fff!important;font-size:15px; margin-left:80px"> <a href="#LIQUIDATION" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#FFF!important;"></i></span>
            <h5 style="color:#FFF!important;font-size:15px;">LIQUIDATION </h5>
            </a> 
            
            </div>
            
            
             <div class="collapse" id="LIQUIDATION" style="font-size:15px; margin-left:110px"><ListeDesLiquidation :macheid="marcheid"></ListeDesLiquidation></div>
             <!-- DEBUT MANDAT -->
             <br>
            <div class="widget-title" style="background-color: #228B22;color:#fff!important;font-size:15px; margin-left:80px"> <a href="#MANDAT" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#FFF!important;"></i></span>
            <h5 style="color:#FFF!important;font-size:15px;">MANDAT </h5>
            </a> 
            
            </div>
            
              <div class="collapse" id="MANDAT" style="font-size:15px; margin-left:110px"><ListeMandat :macheid="marcheid"></ListeMandat></div>
    <br>
    </div>

             </div>
              <br>
          <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:30px"> <a href="#ENGAGEMENTBONCOMMANDE" data-toggle="collapse"> <span class="icon"><i class=" icon-arrow-down" ></i></span>
            <h5 style="background-color: #fff!important;color:#000!important;font-size:15px;">ENGAGEMENT PAR BON DE COMMANDE</h5>
            </a> 
            
            </div>
            <div class="collapse" id="ENGAGEMENTBONCOMMANDE" style="background-color: coral;color:#fff!important;font-size:15px; margin-left:70px">
<div class="widget-box collapsible">
    <div class="widget-title" style="background-color: #228B22;color:#fff!important;font-size:15px; margin-left:80px"> <a href="#DEMANDEENGAGAMENTBON" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#FFF!important;"></i></span>
            <h5 style="color:#FFF!important;font-size:15px;">DEMANDE ENGAGAMENT </h5>
            </a> 
            
            </div>
            
            <div class="collapse" id="DEMANDEENGAGAMENTBON" style="font-size:15px; margin-left:110px"><ListeDemandeEngagement :macheid="marcheid"></ListeDemandeEngagement></div>
            <br>
 <div class="widget-title" style="background-color: #228B22;color:#fff!important;font-size:15px; margin-left:80px"> <a href="#LIQUIDATIONBON" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#FFF!important;"></i></span>
            <h5 style="color:#FFF!important;font-size:15px;">BON DE COMMANDE </h5>
            </a> 
            
            </div>
            
            
             <div class="collapse" id="LIQUIDATIONBON" style="font-size:15px; margin-left:110px"><ListeDesLiquidation :macheid="marcheid"></ListeDesLiquidation></div>
             <!-- DEBUT MANDAT -->
             <br>
 <!-- DEBUT LIQUIDATION -->
            <div class="widget-title" style="background-color: #228B22;color:#fff!important;font-size:15px; margin-left:80px"> <a href="#LIQUIDATIONBON" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#FFF!important;"></i></span>
            <h5 style="color:#FFF!important;font-size:15px;">LIQUIDATION </h5>
            </a> 
            
            </div>
            
            
             <div class="collapse" id="LIQUIDATIONBON" style="font-size:15px; margin-left:110px"><ListeDesLiquidation :macheid="marcheid"></ListeDesLiquidation></div>
             <!-- DEBUT MANDAT -->
             <br>
            <div class="widget-title" style="background-color: #228B22;color:#fff!important;font-size:15px; margin-left:80px"> <a href="#MANDATBON" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#FFF!important;"></i></span>
            <h5 style="color:#FFF!important;font-size:15px;">MANDAT </h5>
            </a> 
            
            </div>
            
              <div class="collapse" id="MANDATBON" style="font-size:15px; margin-left:110px"><ListeMandat :macheid="marcheid"></ListeMandat></div>
    <br>
 </div>
            </div>
             </div>
          </div>
          
          <!-- <div class="widget-title" style="background-color: coral;"> <a href="#collapseTwo" data-toggle="collapse"> <span class="icon"><i class="icon-sitemap"></i></span>
            <h5 style="color:#fff !important;font-size:20px">PROCEDURES DEROGATOIRES </h5>
            </a> </div>
          <div class="collapse" id="collapseTwo">
            <div class="widget-content"> This box is now open </div>
          </div> -->
         
        </div>
    

  </div>
</template>
  
<script>
import ListeDemandeEngagement from "./ListeDemandeEngagement"
import ListeDesLiquidation from "./ListeDesLiquidation"
import ListeMandat from "./ListeMandat"
// import MandatDifferer from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatDifferer.vue"
// import MandatRejetter from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatRejetter.vue"
// import MandatVise from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatVise.vue"
// import MandatViseAvecObservation from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatViseAvecObservation.vue"
import { mapGetters, mapActions } from "vuex";


export default {
  components:{
  ListeDemandeEngagement,
  ListeMandat,
  ListeDesLiquidation,
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

         
},
  computed: {
   ...mapGetters("bienService", ["gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
    ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives",
      "jointureUaChapitreSection",
      "budgetEclate",
      "GroupeUaReceptrice",
      "transferts",
      "groupeUniteAdministrativeBudgetEclate",
      "groupeUaSousBudget"
      // "chapitres",
      // "sections"
    ]),
     idUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
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
  }
};
</script>

