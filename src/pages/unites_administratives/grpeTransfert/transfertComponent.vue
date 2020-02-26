

<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div @click="toggle()" class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <h5>{{groupe.libelle }}</h5>
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
                    
                     <th >Numero transfert</th>
                   
                    <th>Matricule Acteurs</th>
                      <th>Destinataire</th>
                   
                    <th>Ligne budgetaire</th>
                    <th>Grande nature</th>
                       <th>UA</th>
                        <th>Montant Contrat</th> 
                    
                    <th>D&eacute;cision CF</th>
                     <th>D&eacute;lai traitement</th>
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <transfertItem
                        class="item" 
                        v-for="groupeElement in groupe.uatransfert"
                        :key="groupeElement.id"
                        :article="groupeElement"
                     @modification="$emit('modification', $event)"
                       @modification2="$emit('modification2', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></transfertItem>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style="font-weight:bold;">Total</td>
                        <td  style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(totalContrat))}}</td>
                        
                       <td></td>
                         <td></td>
                          <td></td>
                      </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import { mapGetters} from "vuex";
import transfertItem from './transfertItem'
import { formatageSomme } from "../../../Repositories/Repository";
export default {
    name: 'transfertComponent',
     props: {
    groupe: Object,
  },
  components: {
      transfertItem
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
      active: null
    }
  },



  computed: {
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "transferts"
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













totalContrat(){
  
    
    var montant = this.groupe.uatransfert.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

   
  
}, 

totalTransfert(){
  
    
    var montant = this.groupe.uatransfert.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_transfert), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

   
  
}, 





    afficherSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_section;
      }
      return 0
        }
      };
    },
     CodeSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section;
      }
      return 0
        }
      };
    },
getNombreArticle(){
        var nombre = this.groupe.uatransfert.length
        if(nombre) return nombre
        return '0' 
    },
    isFolder: function () {
      return this.groupe.uatransfert &&
        this.groupe.uatransfert.length
    },

    // getNombreArticle(){
    //     var nombre = this.groupe.uatransfert.length
    //     if(nombre) return nombre
    //     return 'Aucun' 
    // },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.uatransfert.length,
        'icon-minus': this.isOpen && this.groupe.uatransfert.length
        //    'icon-folder-close': !this.isOpen && this.groupe.uatransfert.length,
        // 'icon-folder-open': this.isOpen && this.groupe.uatransfert.length
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
formatageSomme:formatageSomme
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

