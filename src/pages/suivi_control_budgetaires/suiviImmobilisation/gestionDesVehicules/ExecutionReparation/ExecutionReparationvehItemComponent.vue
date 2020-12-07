
<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box" v-if="afficheReparationVehiculeEnExecution.length > 0 ">
            <div class="accordion-heading">
              <div @click="toggle()" class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <h5 style="font-size:14px">{{groupe.libelle}}</h5>
                 <span class="badge badge-inverse" >{{getNombreArticle}}</span>

                </a> 
            </div>
            </div>
            <div class="collapse in accordion-body"  v-if="isFolder && isOpen">
              <div class="widget-content"> 
                 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                   <th>Année</th>
                    
                    <th>Véhicule</th>
                    <th>Panne Signalé</th>
                    <th>Date Signal</th>
                    <th>Date Envoi</th>
                    
                    <th>Garage</th>
                    <th>Montant de réparation</th>
                   
                   <th>Action</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <ExecutionReparationvehItem
                        class="item"
                        v-for="groupeElement in afficheReparationVehiculeEnExecution"
                        :key="groupeElement.id"
                        :article="groupeElement"
                        @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></ExecutionReparationvehItem>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import { mapGetters} from "vuex";
import {admin,dcf,noDCfNoAdmin} from "../../../../../Repositories/Auth"
import ExecutionReparationvehItem from './ExecutionReparationvehItem'

export default {
    name: 'ExecutionReparationvehItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      ExecutionReparationvehItem
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
      active: null
    }
  },



  computed: {
   admin:admin,
      dcf:dcf,
       noDCfNoAdmin:noDCfNoAdmin,
     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser",
       "typeActeEffetFinanciers","getterLoadinMarche"]),
     ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNatureInvestissement","getPersonnaliseBudgetGeneralParInvestissement",
      "montantBudgetGeneral","ReparationVehicules"]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,

  ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

recupererIdMarcheDansActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.marche_id;
      }
      return 0
        }
      };
    },
    recupererEtatMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },
  afficheReparationVehiculeEnExecution() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.groupe.reparation_vehicule.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererEtatMarche(this.recupererIdMarcheDansActe(element.acte_id)) == 2)
           
        }
           return  this.groupe.reparation_vehicule.filter(element => this.recupererEtatMarche(this.recupererIdMarcheDansActe(element.acte_id)) == 2)
       
    },
    isFolder: function () {
      return this.groupe.reparation_vehicule &&
        this.groupe.reparation_vehicule.length
    },

    getNombreArticle(){
        var nombre = this.groupe.reparation_vehicule.length
        if(nombre) return nombre
        return '0' 
    },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.reparation_vehicule.length,
        'icon-minus': this.isOpen && this.groupe.reparation_vehicule.length
        //    'icon-folder-close': !this.isOpen && this.groupe.reparation_vehicule.length,
        // 'icon-folder-open': this.isOpen && this.groupe.reparation_vehicule.length
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

