
<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box" v-if="ListeDesAffectationVehiculeParUa(getterUa_idImo).length > 0 ">
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
                    
                    <th>N°immatriculation</th>
                     <th>Marque</th>
                    <th>Modèle</th>
                    <th>Couleur</th>
                     <th>Panne Signale</th>
                     <th>Date Signal</th>
                     <th>Date Envoi</th>
                    <th>Entreprise</th>
                     <th>Date Retour</th>
                    <th>Coût Réparation</th>
                    <th>Appréciation</th>
                    
                    <th colspan="2">Action</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <reparationvehItem
                        class="item"
                        v-for="groupeElement in ListeDesAffectationVehiculeParUa(getterUa_idImo)"
                        :key="groupeElement.id"
                        :article="groupeElement"
                        @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></reparationvehItem>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import { mapGetters} from "vuex";
import reparationvehItem from './reparationvehItem'

export default {
    name: 'reparationvehItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      reparationvehItem
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
    "getPersoStock",
      "equipements",
      "familles",
      "articles",
      "type_Unite_admins",
      "totalQteEntrant",
      "totalQteSortant",
     "getterUa_idImo"
    ]),
    ...mapGetters("bienService", [ "typeMarches","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
      "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
      "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
      "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
ListeDesAffectationVehiculeParUa() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.groupe.reparation_vehicule.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadministrative)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.uniteadministrative == id && this.recupererEtatContrat(element.acte_id)==1);
        }
      };
          }
           return id => {
        if (id != null && id != "") {
          return this.groupe.reparation_vehicule.filter(element => element.uniteadministrative == id && this.recupererEtatContrat(element.acte_id)==1);
        }
      };
         



    },
    recupererEtatContrat() {
      const qtereel = this.getActeEffetFinancierPersonnaliser.find(
        qtreel => qtreel.id == this.formData.id,
       
      );

      if (qtereel) {
        return qtereel.article_id;
      }
      return 0
    },
    isFolder: function () {
      return this.ListeDesAffectationVehiculeParUa(this.getterUa_idImo) &&
        this.ListeDesAffectationVehiculeParUa(this.getterUa_idImo).length
    },

    getNombreArticle(){
        var nombre = this.ListeDesAffectationVehiculeParUa(this.getterUa_idImo).length
        if(nombre) return nombre
        return '0' 
    },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.ListeDesAffectationVehiculeParUa(this.getterUa_idImo).length,
        'icon-minus': this.isOpen && this.ListeDesAffectationVehiculeParUa(this.getterUa_idImo).length
        //    'icon-folder-close': !this.isOpen && this.ListeDesAffectationVehiculeParUa(this.getterUa_idImo).length,
        // 'icon-folder-open': this.isOpen && this.ListeDesAffectationVehiculeParUa(this.getterUa_idImo).length
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

