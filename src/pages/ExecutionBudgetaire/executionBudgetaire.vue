
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
  <ListedemandeParBonCommande :macheid="detail_marche.ua_id"></ListedemandeParBonCommande>
          </div>
                <div id="DIRECT" class="tab-pane">
  <ListedemandeParEngagementDirect :macheid="detail_marche.ua_id"></ListedemandeParEngagementDirect>
          </div>
                    

                       

                      
                      
      </div>
       </div>
      
              </table>
 
  </div>

  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import ListedemandeParBonCommande from "./ListedemandeParBonCommande.vue"
import ListedemandeParEngagementDirect from "./ListedemandeParEngagementDirect.vue"

export default {
  components:{
ListedemandeParBonCommande,
ListedemandeParEngagementDirect
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

