
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
                                              title="Liste structure administrative "
                                              name ="Liste structure administrative"
                                              worksheet = "structure administrative"
                                            :data="localisationsFiltre">
                        <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                            <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div>
                                     </div> 
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des structures administratives</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

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
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Niveau</th>
                  <th>Libelle</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(structure_administrative, index) in 
               partition(localisationsFiltre, size)[page]" :key="structure_administrative.id">
                  <td @dblclick="afficherModalModifierStructureAdministrative(index)">
                      {{structure_administrative.niveau || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierStructureAdministrative(index)">
                      {{structure_administrative.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerStructureAdministrative(structure_administrative.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="localisationsFiltre.length">
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune structure administrative enregistrée! </h6>
              </div>
            </div>
          </div>
        </div>
         <div class="pagination alternate">
              <ul>
                <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                   <li  v-for="(titre, index) in partition(localisationsFiltre,size).length" :key="index" :class="{ active : active_el == index }">
                   <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                <li :class="{ disabled : page == partition(localisationsFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

              </ul>
           </div>
      </div>
              </div>
            </div>

        

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter structure administrative</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="number" v-model="formData.niveau" class="span" placeholder="Saisir le niveau" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.niveau.length && formData.libelle.length" 
              @click.prevent="ajouterAdministrativeLocal" class="btn btn-primary"
              >Valider</button>
              <button data-dismiss="modal" class="btn">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier structure administrative</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="number" v-model="editStructureAdministrative.niveau" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editStructureAdministrative.libelle" class="span" placeholder="" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button  
             @click.prevent="modifierStructureLocal(editStructureAdministrative)" class="btn btn-primary"
              href="#">Modifier</button>
              <button data-dismiss="modal" class="btn" >Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->




<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterStructureAdministrative()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterStructureAdministrative"
        bg-color="green"

  ></fab>
<notifications  />


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
      
      json_fields:{
        'Niveau':'niveau',
        'Libelle':'libelle'
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
     
        formData : {
                niveau: "",
             libelle: ""
        },

        editStructureAdministrative: {
            niveau: "",
             libelle: ""
        },
         search:""
    };
  },
 
  created() {
    //this.getStructureAdministrative()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['structures_administratives']),
   
   
     localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.structures_administratives.filter((item) => {
  
    // item.niveau.toLowerCase().includes(searchTerm) 
    return  item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }
  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['getStructureAdministrative', 'ajouterStructureAdministrative', 
   'supprimerStructureAdministrative', 'modifierStructureAdministrative']),  
   
   
   //, pagination
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
   
   
   // exportation en pdf

      genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.structures_administratives;
    doc.text(98,10,"Liste strucres administrative")
  doc.autoTable(this.getColumns(),data)
doc.save('structure_administrative.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "NIVEAU", dataKey: "niveau"},
        {title: "LIBELLE", dataKey: "libelle"},
     
        
    ];
},

   
    afficherModalAjouterStructureAdministrative(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterAdministrativeLocal () {
      this.ajouterStructureAdministrative(this.formData)

        this.formData = {
                niveau: "",
             libelle: ""
        }
    },
// afficher modal
afficherModalModifierStructureAdministrative(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editStructureAdministrative = this.structures_administratives[index];


        
 },
modifierStructureLocal()
{
  this.modifierStructureAdministrative(this.editStructureAdministrative)
  this.$('#modifierModal').modal('hide');
  // this.editStructureAdministrative = {

  //         niveau: "",
  //            libelle: ""
  // }
}

  }
};
</script>

