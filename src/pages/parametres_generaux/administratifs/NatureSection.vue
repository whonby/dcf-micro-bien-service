
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
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste nature de section "
                                              name ="Liste nature de section"
                                              worksheet = "nature de section"
                                            :data="localisationsFiltre">
                         <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                                   <button class="btn btn-warning" @click.prevent="genererEnPdf()">Imprimer PDF</button>
                                     </div>
                  
                                      <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped" id="Nature_section">
             
              <thead>
                
                <tr>
                  <th>Code</th>
                  <th>Libelle</th>
                   <th>Action</th>
                </tr>
              </thead>
              
              <tbody>
                <tr class="odd gradeX" v-for="(nature_section, index) in localisationsFiltre" :key="nature_section.id">
                  <td @dblclick="afficherModalModifierTitre(index)">{{nature_section.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTitre(index)">{{nature_section.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerNatureSection(nature_section.id)"  class="btn btn-danger ">
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
                <h6 style="color:red;">Aucune nature de section enregistrée</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
            </div>

       

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter nature de section</h3>
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
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.code.length && formData.libelle.length"
              @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier nature de section</h3>
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
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button  v-show="editTitre.code.length && editTitre.libelle.length"
             @click.prevent="modifiernatureSectionLocal(editTitre)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->


<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterNatureSection()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterNatureSection"
        bg-color="green"

  ></fab>

<notifications  />


  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  
  data() {
    return {
      json_fields:{
         'Code':'code',
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
                code: "",
             libelle: ""
        },

        editTitre: {
            code: "",
             libelle: "",
        },
        search:""
    };
  },
 
  created() {
    //this.getNatureSection()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['natures_sections']) ,
   
    localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.natures_sections.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
  

   }
)
   },
genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
  
  doc.autoTable({ html: '#Nature_section' })
doc.save('NatureSection.pdf')
return 0
}
  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['getNatureSection', 
   'ajouterNatureSection', 
   'supprimerNatureSection', 'modifierNatureSection']),   
   
    afficherModalAjouterNatureSection(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },

modifiernatureSectionLocal(){
  this.modifierNatureSection(this.editTitre);
  this.$("#modifierModal").modal('hide');
 
},


   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterNatureSection(this.formData)

        this.formData = {
                code: "",
             libelle: ""
        }
    },
// afficher modal
afficherModalModifierTitre(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editTitre = this.natures_sections[index];


        
 },


  }
};
</script>

