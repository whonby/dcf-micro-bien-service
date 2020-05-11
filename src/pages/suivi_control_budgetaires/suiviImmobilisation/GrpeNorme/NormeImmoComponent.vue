


<template>
   
      <div class="accordion" >

        
       
          <div class="accordion-group widget-box">
           
            <div class="accordion-heading">
              <div @click="toggle()" class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <h5>{{groupe.libelle}}</h5>
                 <!-- <span class="badge badge-info" >{{getNombreArticle}}</span>&nbsp;&nbsp; -->
                 <span class="badge badge-inverse" >{{getNombreArticle}}</span>

                </a> 


            </div>
            </div>
            <div class="collapse in accordion-body"  v-if="isFolder && isOpen ">
              <div class="widget-content"> 
                 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <!-- <th >Unite administrative</th> -->
                     <!-- <th style="width:30%">Direction</th> -->
                     <th >Service</th>
                       <th >Fonction</th>
                        
                    <th>Norme</th>
                     <th style="width:40%">Action</th>
                  </tr>
                </thead>
                <tbody>
                   <NormeImmoItem
                        class="item" 
                        v-for="groupeElement in groupe.famille__norme"
                        :key="groupeElement.id"
                        :article="groupeElement"
                     @modification="$emit('modification', $event)"
                      
                        @suppression="$emit('suppression', $event)"

                    ></NormeImmoItem>
                      
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import { mapGetters} from "vuex";
import NormeImmoItem from './NormeImmoItem'
// import { formatageSomme } from "../../../Repositories/Repository";
export default {
    name: 'NormeImmoComponent',
     props: {
    groupe: Object,
  },
  components: {
      NormeImmoItem
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
      active: null
    }
  },





  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "familles",
      "services",
      "listeBesoinValider",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo",
      "listeBesoinValider",
      "getAfficheStockArticle",
      "getPersoNormeArticle",
      "getPersoStock",
      "stockageArticle"
      
    ]),
  ...mapGetters("uniteadministrative", [
     "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives"
      // "chapitres",
      // "sections"
    ]),
     ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections"
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  ...mapGetters("bienService", ['modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),


 afficherDirection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.directions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficherService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.servicesua.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },



getNombreArticle(){
        var nombre = this.groupe.famille__norme.length
        if(nombre) return nombre
        return '0' 
    },
    isFolder: function () {
      return this.groupe.famille__norme &&
        this.groupe.famille__norme.length
    },

    // getNombreArticle(){
    //     var nombre = this.groupe.famille__norme.length
    //     if(nombre) return nombre
    //     return 'Aucun' 
    // },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.famille__norme.length,
        'icon-minus': this.isOpen && this.groupe.famille__norme.length
        //    'icon-folder-close': !this.isOpen && this.groupe.famille__norme.length,
        // 'icon-folder-open': this.isOpen && this.groupe.famille__norme.length
      }
    },

   
  },

  filters: {
  
  	subStr: function(string, nbr) {
      if (!string) return ''
      if(string.length <= nbr) return string 
    	return string.substring(0,nbr) + '...';

      
        }
  
  },
  methods: {

    toggle: function () {
      if (this.isFolder ) {
        this.isOpen = !this.isOpen 
        
      }
    },
// formatageSomme:formatageSomme
  }
}
</script>
<style>

.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>

