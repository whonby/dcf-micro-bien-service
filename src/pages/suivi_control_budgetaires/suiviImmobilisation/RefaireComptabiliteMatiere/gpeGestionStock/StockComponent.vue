
<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box" v-if="ListeDesAffectationVehiculeParUa.length > 0 ">
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
                    
                     
                  
                     <th>Famille</th>
                   <th title="Initiale">Quantité Initiale</th>
                    <th title="quantite en stock">Quantité Restant en stock</th>
                     <th>Date d'entrée</th>
                    <th title="quantite entrant">Quantité entrée</th>
                    <th>Date de sortie</th>
                    <th title="quantite sortant">Quantité sortie</th>
                    <th colspan="2">Action</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <StockItem
                        class="item"
                        v-for="groupeElement in ListeDesAffectationVehiculeParUa"
                        :key="groupeElement.id"
                        :article="groupeElement"
                        @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></StockItem>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import { mapGetters} from "vuex";
import StockItem from './StockItem'

export default {
    name: 'StockItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      StockItem
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
      active: null
    }
  },



  computed: {
  ...mapGetters("SuiviImmobilisation", ["getterUa_idImo","Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),
    isFolder: function () {
      return this.ListeDesAffectationVehiculeParUa &&
        this.ListeDesAffectationVehiculeParUa.length
    },


    getNombreArticle(){
        var nombre = this.ListeDesAffectationVehiculeParUa.length
        if(nombre) return nombre
        return '0' 
    },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.ListeDesAffectationVehiculeParUa.length,
        'icon-minus': this.isOpen && this.ListeDesAffectationVehiculeParUa.length
        //    'icon-folder-close': !this.isOpen && this.ListeDesAffectationVehiculeParUa(getterUa_idImo).length,
        // 'icon-folder-open': this.isOpen && this.ListeDesAffectationVehiculeParUa(getterUa_idImo).length
      }
    },
    ListeDesAffectationVehiculeParUa() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.groupe.gestion_stock.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element =>element.typestockage == null);
        }
      };
          }
           return id => {
        if (id != null && id != "") {
          return this.groupe.gestion_stock.filter(element =>element.typestockage == null);
        }
      };
         



    },

listeDesStock() {
      return id => {
        if (id != null && id != "") {
          return this.groupe.gestion_stock.filter(
            element => element.articlestock_id == id && element.typestockage == null
          );
        }
      };
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

