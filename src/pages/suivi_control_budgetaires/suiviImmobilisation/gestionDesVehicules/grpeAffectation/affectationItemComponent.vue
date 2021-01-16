
<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box" v-if="ListeDesVehiculeParUa(this.getterUa_idImo).length > 0 ">
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
                    <th>N°identification</th>
                    <th>N°immatriculation</th>
                     <th>Immobilisation</th>
                     <th>Type véhicule</th>
                     <th>Marque</th>
                    <th>Modèle</th>
                     <th>Energie</th>
                     <th>N°chassis</th>
                     <th>N°serie</th>
                    <th>Couleur</th>
                     <th>Transmission</th>
                     <th>Nombre portes</th>
                     <th>Nombre place</th>
                    <th>Puissance</th>
                     <th>Etat vehicule</th>
                    
                    
                    <th colspan="2">Action</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <affectationItem
                        class="item"
                        v-for="groupeElement in ListeDesVehiculeParUa(this.getterUa_idImo)"
                        :key="groupeElement.id"
                        :article="groupeElement"
                        @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></affectationItem>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import { mapGetters} from "vuex";
import affectationItem from './affectationItem'

export default {
    name: 'affectationItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      affectationItem
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



  ListeDesVehiculeParUa() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.groupe.vehiculeua.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadministrative)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.uniteadministrative == id );
        }
      };
          }
           return id => {
        if (id != null && id != "") {
          return this.groupe.vehiculeua.filter(element => element.uniteadministrative == id );
        }
      };
         



    },
    isFolder: function () {
      return this.ListeDesVehiculeParUa(this.getterUa_idImo) &&
        this.ListeDesVehiculeParUa(this.getterUa_idImo).length
    },

    getNombreArticle(){
        var nombre = this.ListeDesVehiculeParUa(this.getterUa_idImo).length
        if(nombre) return nombre
        return '0' 
    },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.ListeDesVehiculeParUa(this.getterUa_idImo).length,
        'icon-minus': this.isOpen && this.ListeDesVehiculeParUa(this.getterUa_idImo).length
        //    'icon-folder-close': !this.isOpen && this.ListeDesVehiculeParUa(this.getterUa_idImo).length,
        // 'icon-folder-open': this.isOpen && this.ListeDesVehiculeParUa(this.getterUa_idImo).length
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

