
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
                                              title="Liste de role membre Cojo "
                                              name ="Liste de role membre Cojo"
                                              worksheet = "role membre Cojo"
                                            :data="roleFiltre">
                       <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                 <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des rôles des membres de la Cojo</h5>
             <div align="right">
        Recherche: <input type="text" v-model="search"  placeholder=" ">

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
                  <th>Code</th>
                  <th>Libellé</th>
                   <th>Action</th>
                </tr>     
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(role, index) in
                 partition(roleFiltre,size)[page]"
                 :key="role.id">
                  <td @dblclick="afficherModalModifierType(index)">
                    {{role.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierType(index)">
                    {{role.libelle || 'Non renseigné'}}</td>
                 
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerRolemembreCojo(role.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

           <div class="pagination alternate">
              <ul>
                <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                   <li  v-for="(titre, index) in partition(roleFiltre,size).length" :key="index" :class="{ active : active_el == index }">
                   <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                <li :class="{ disabled : page == partition(roleFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

              </ul>
           </div>
      </div>
              </div>
            </div>

       

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter role membrecojo</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="number" v-model="formData.code" class="span" placeholder="Saisir le code" />
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
             @click.prevent="ajouterTypeLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->
 


<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier role membrecojo</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="number" v-model="editRole.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editRole.libelle" class="span" placeholder="" />
              </div>
            </div>
            
            
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
             @click.prevent="modifierTypeLocal(editRole)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" >Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->



<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterRolemembreCojo()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterRolemembreCojo"
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
             libelle: "",
            
        },

        editRole: {
            code: "",
             libelle: "",
        
        },
      search:""
    };
  },
 
  created() {
    //this.getStructureRole()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('bienService', ['role_membrecojo']),
  //  
         roleFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.role_membrecojo.filter((item) => {
  
    
    return item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }
                                    
  },
  methods: {
    // methode pour notre action
   ...mapActions('bienService', ['ajouterRolemembreCojo', 
   'supprimerRolemembreCojo','modifierRolemembreCojo']),
   
    //pagination
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
   var data = this.role_membrecojo;
    doc.setFontSize(8)
    doc.text(78,10,"LISTE DES ROLES MEMBRES COJO ")
  doc.autoTable(this.getColumns(),data)
//doc.save('grande_nature_depense.pdf')
 doc.output('save','role_membre_cojo.pdf')
 doc.output('dataurlnewwindow')
return 0
},
getColumns() {
    return [
        {title: "CODE", dataKey: "code"},
        {title: "LIBELLE", dataKey: "libelle"},
        
        
    ];
},
   
    afficherModalAjouterRolemembreCojo(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTypeLocal () {
     this.ajouterRolemembreCojo(this.formData)
        this.formData = {
                code: "",
             libelle: "",
           
        }
    },
// afficher modal                                      
afficherModalModifierType(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editRole = this.role_membrecojo[index];


        
 },
 

modifierTypeLocal(){
  this.modifierRolemembreCojo(this.editRole)
  this.$('#modifierModal').modal('hide');
  // this.editRole = {
  //   code:"",
  //   libelle:""
  // }
}
  }
};
</script>

