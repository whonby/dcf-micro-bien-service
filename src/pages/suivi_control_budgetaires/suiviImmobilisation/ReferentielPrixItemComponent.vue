
<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div @click="toggle()" class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <h5>{{groupe.libelle}}</h5>
                 <span class="badge badge-inverse" >{{getNombreArticle}}</span>

                </a> 
            </div>
            </div>
            
            <div class="collapse in accordion-body"  v-if="isFolder && isOpen ">
              <div class="widget-content"> 
                 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <!-- <th>Famille</th> -->
                    <th>Designation</th>
                     <th>Prix HT</th>
                      <th>Taux</th>
                      <th>TVA</th>
                       <th>Montant TTC</th>
                   

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <ReferentielPrixItem
                        class="item"
                        v-for="groupeElement in groupe.famille_article"
                        :key="groupeElement.id"
                        :article="groupeElement"
                      @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></ReferentielPrixItem>
                    <tr>
                     
                       <td>
                           
                      </td>
                       <td>
                          
                      </td>
                        <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Montant Total TTC
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(MontantParEquipement))}}
                           
                      </td>
                       <td>
                           
                      </td>
                     
                    </tr>
                   <tr>
                      
                      <td>
                          
                      </td>
                       <td>
                           
                      </td>
                       <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Coût Moyen TTC
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(MontantMoyen))}}
                           
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
import ReferentielPrixItem from './ReferentielPrixItem'
import { formatageSomme } from "../../../Repositories/Repository";
export default {
    name: 'ReferentielPrixItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      ReferentielPrixItem
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
      active: null
    }
  },



  computed: {
  
    isFolder: function () {
      return this.groupe.famille_article &&
        this.groupe.famille_article.length
    },

    getNombreArticle(){
        var nombre = this.groupe.famille_article.length
        if(nombre) return nombre
        return 'Aucun' 
    },
    // getMontantTotal(){
    //     var nombre = this.groupe.famille_article.length
    //     if(nombre) return nombre
    //     return 'Aucun' 
    // },
    
MontantParEquipement(){
  
    
    var montant = this.groupe.famille_article.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

   
  
}, 

MontantMoyen() {
 
      
    const val = parseFloat((this.MontantParEquipement)/this.getNombreArticle).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
  

    },

    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.famille_article.length,
        'icon-minus': this.isOpen && this.groupe.famille_article.length
        //    'icon-folder-close': !this.isOpen && this.groupe.famille_article.length,
        // 'icon-folder-open': this.isOpen && this.groupe.famille_article.length
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
formatageSomme: formatageSomme,
  },
  
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

