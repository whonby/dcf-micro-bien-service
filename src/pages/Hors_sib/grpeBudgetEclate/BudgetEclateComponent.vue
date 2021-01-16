

<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div @click="toggle()" class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <h5>{{libelleUAdministrative(RecupererTransfertUa(groupe.id))}}</h5>
                 <!-- <span class="badge badge-info" >{{getNombreArticle}}</span>&nbsp;&nbsp; -->
                 <!-- <span class="badge badge-inverse" >{{0}}</span> -->

                </a> 

            </div>
            </div>
            <div class="collapse in accordion-body"  v-if="isFolder && isOpen ">
              <div class="widget-content"> 
                 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                     <th style="width:10%;" >Exercice Budgétaire</th>
                    <th style="width:60%;">Ligne économique</th>
                     <th style="width:12%;" >Grande Nature</th>
                      <th style="width:15%;">Dotation </th>
                  
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <BudgetEclateItem
                        class="item" 
                        v-for="groupeElement in groupe.budgeteclateua"
                        :key="groupeElement.id"
                        :article="groupeElement"
                     @modification="$emit('modification', $event)"
                    
                        @suppression="$emit('suppression', $event)"

                    ></BudgetEclateItem>
                        <tr>
                     
                       <td>
                           
                      </td>
                       
                        <td>
                          
                      </td>
                       <td style="font-weight:bold;">  <h6>TOTAL Disponible  {{anneeAmort}}</h6>
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;font-size:16px">
                           {{formatageSomme(parseFloat(MontantDisponible))}}
                           
                      </td>
                       <td>
                           
                      </td>
                     
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
import BudgetEclateItem from './BudgetEclateItem'
import { formatageSomme } from "../../../Repositories/Repository";
export default {
    name: '',
     props: {
    groupe: Object,
  },
  components: {
      BudgetEclateItem
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
     "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives",
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


libelleUAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

RecupererTransfertUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.transferts.find(qtreel => qtreel.unitezone_id == id);

      if (qtereel) {
        return qtereel.unitezone_id;
      }
      return 
        }
      };
    },
anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },

MontantDisponible(){
  
    
    var montant = this.groupe.budgeteclateua.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

   
  
}, 



getNombreArticle(){
        var nombre = this.groupe.budgeteclateua.length
        if(nombre) return nombre
        return '0' 
    },
    isFolder: function () {
      return this.groupe.budgeteclateua &&
        this.groupe.budgeteclateua.length
    },

    // getNombreArticle(){
    //     var nombre = this.groupe.budgeteclateua.length
    //     if(nombre) return nombre
    //     return 'Aucun' 
    // },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.budgeteclateua.length,
        'icon-minus': this.isOpen && this.groupe.budgeteclateua.length
        //    'icon-folder-close': !this.isOpen && this.groupe.budgeteclateua.length,
        // 'icon-folder-open': this.isOpen && this.groupe.budgeteclateua.length
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

