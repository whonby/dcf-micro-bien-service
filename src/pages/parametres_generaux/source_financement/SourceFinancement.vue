
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
                                              title="Liste structure de financement "
                                              name ="Liste structure de  financement"
                                              worksheet = "structure de  financement"
                                            :data="localisationsFiltre">
                  <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  
                                   

                      <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div>
               </div>                        
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des sources de financements</h5>
             <div align="right">
        Recherche: <input type="text" v-model="search" placeholder=" ">

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
            <table class="table table-bordered table-striped" id="source">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Libellé</th>
                  <th>Sigle</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(source_financement, index) in 
               partition (localisationsFiltre,size)[page]" :key="source_financement.id">
                  <td @dblclick="afficherModalModifierFinancement(index)">
                    {{source_financement.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierFinancement(index)">
                    {{source_financement.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierFinancement(index)">
                    {{source_financement.sigle || 'Non renseigné'}}</td>
                  <td>

              <div class="btn-group">
              <button @click.prevent="supprimerSourceFinancement(source_financement.id)"  
              class="btn btn-danger ">
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
               <h6 style="color:red;"> Aucune source de financement enregistrée ! </h6>
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
                <h3>Ajouter source de financement</h3>
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
            <div class="controls-group">
              <label class="control-label">Sigle:</label>
              <div class="controls">
              <input type="text" v-model="formData.sigle" class="span" placeholder="Saisir le sigle"/>
            </div>
            </div>  
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.code.length && formData.libelle.length && 
             formData.sigle.length"
              @click.prevent="ajouterFinancementLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier source de financement</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editFinancement.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editFinancement.libelle" class="span" placeholder="" />
              </div>
            </div>
            
            
            <div class="control-group">
              <label class="control-label">Sigle:</label>
              <div class="controls">
                <input type="text" v-model="editFinancement.sigle" class="span">
              </div>
            </div>
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editFinancement.code.length && editFinancement.libelle.length && 
             editFinancement.sigle.length"
              @click.prevent="modifierFinancementLocal(editFinancement)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->


<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterSourceFinancement()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterSourceFinancement"
        bg-color="green"

  ></fab>
<notifications  />



  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import {partition} from "../../../../src/Repositories/Repository"
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  
  data() {
    return {
      page:0,
      size:10,
      active_el:0,

      json_fields:{
        'Code':'code',
        'Libelle':'libelle',
        'Sigle':'sigle'
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
             libelle: "",
             sigle:""
        },

        editFinancement: {
            code: "",
             libelle: "",
             sigle:""
        },
      search:""
    };
  },
 
  created() {
    //  this.getSourceFinancement()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),

           localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.sources_financements.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm)
    || item.sigle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }
   
  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxSourceDeFinancement', ['getSourceFinancement', 'ajouterSourceFinancement', 
   'modifierFinancement',
    'supprimerSourceFinancement']),   

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

    genererEnPdf(){
  var doc = new jsPDF('landscape')
  // doc.autoTable({ html: this.natures_sections })
   const data = this.sources_financements;
   doc.setFontSize(8)
  doc.text(78,10,"LISTE DES SOURCES DES FINANCEMENTS")
  doc.autoTable(this.getColspan(), data),
  //doc.find("Action").remove()
doc.save('soure de financement.pdf')
return 0
},

getColspan(){
  return [
    {title:"CODE", dataKey:"code"},
    {title:"LIBELLE", dataKey:"libelle"},
    {title:"SIGLE", dataKey:"sigle"}
  ]
},
   
    afficherModalAjouterSourceFinancement(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterFinancementLocal () {
      this.ajouterSourceFinancement(this.formData)

        this.formData = {
                code: "",
             libelle: "",
               sigle:""
        }
    },
// afficher modal
afficherModalModifierFinancement(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editFinancement = this.sources_financements[index];


        
 },
// 
modifierFinancementLocal(){
  this.modifierFinancement(this.editFinancement)
  this.$('#modifierModal').modal('hide');
  // this.editFinancement = {
  //   code:"",
  //   libelle:"",
  //   sigle:""
  // }
}

  }
};
</script>

