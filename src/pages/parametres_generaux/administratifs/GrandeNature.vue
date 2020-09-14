
<template>
  <div>
  
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
         <div>

                                        <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des grandes natures "
                                              name ="Liste des grandes nautres"
                                              worksheet = "grandes nature"
                                            :data="titreFiltres">
                        <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 

                       <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div> 
                                     </div> 
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des grandes natures de dépenses</h5>
             <div align="right">
        Recherche: <input type="text" v-model="search">

          </div>
             
          </div>
         <div class="span4">
                    <br>
                    Afficher
                    <select name="pets" id="pet-select" v-model="size" class="span3">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    Entrer
                </div>
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped" id="grde_nature_depense">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Libellé</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="grande_nature in partition(titreFiltres,size)[page]" :key="grande_nature.id">
                  <td @dblclick="afficherModalModifierGrande(grande_nature.id)">{{grande_nature.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierGrande(grande_nature.id)">{{grande_nature.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerGrandeNature(grande_nature.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="titreFiltres.length">
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune grande nature de dépense enregistrée</h6>
              </div>
            </div>
            
          </div>
        </div>
        
        <div class="pagination alternate">
              <ul>
                <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                   <li  v-for="(titre, index) in partition(titreFiltres,size).length" :key="index" :class="{ active : active_el == index }">
                   <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                <li :class="{ disabled : page == partition(titreFiltres,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

              </ul>
           </div>
      </div>
              </div>
            </div>

      

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter grande nature</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libellé:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libellé" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button  v-show="formData.code.length && formData.libelle.length" 
             @click.prevent="ajouterTitreLocal"  class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier  grande nature</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libellé:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button
             @click.prevent="modifierGrandeNatureLocal(editTitre)" class="btn btn-primary"
              href="#">Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->


 <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterGrandeNature()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterGrandeNature"
        bg-color="green"

  ></fab>

<notifications/>



  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import {partition} from '../../../../src/Repositories/Repository'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  
  data() {
    return {
       page:0,
       size:10,
      active_el:0,

      json_fields: {
            'Code': 'code',
            'Libelle': 'libelle',
         
        
           
           
        },
        fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
              
          ],
        search:"",
        formData : {
                code: "",
             libelle: ""
        },

        editTitre: {
            code: "",
             libelle: ""
        }
 
    };
  },
 
  created() {
    this.getGrandeNature()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['grandes_natures']),
   
    titreFiltres() {

const searchTerm = this.search.toLowerCase();

return this.grandes_natures.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
   

   }
)

}

  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['getGrandeNature', 'ajouterGrandeNature', 
   'supprimerGrandeNature', 'modifierGrandeNature']),  
   
   

// exportation en pdf

partition:partition,

getDataPaginate(index){
          this.active_el = index;
          this.page=index
      },
      precedent(){
          this.active_el--
          this.page --
      },
      suivant(){
          this.active_el++
          this.page ++
      },

     // importation en pdf
     genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.grandes_natures;
    doc.setFontSize(8)
    doc.text(75,10,"LISTE DES GRANDES NATURES DE DEPENSES")
   
  doc.autoTable(this.getColumns(),data)
doc.save('grande_nature_depense.pdf')
return 0
},
getColumns() {
    return [
        {title: "CODE", dataKey: "code"},
        {title: "LIBELLE", dataKey: "libelle"},
        
        
    ];
},
   
    afficherModalAjouterGrandeNature(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterGrandeNature(this.formData)

        this.formData = {
                code: "",
             libelle: ""
        }
    },
// afficher modal
afficherModalModifierGrande(id){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editTitre = this.grandes_natures.find(item=>item.id==id);


        
 },
modifierGrandeNatureLocal(){
  this.modifierGrandeNature(this.editTitre)
  this.$('#modifierModal').modal('hide');
  // this.editTitre = {
  //   code:"",
  //   libelle:""
  // }
}

  }
};
</script>

