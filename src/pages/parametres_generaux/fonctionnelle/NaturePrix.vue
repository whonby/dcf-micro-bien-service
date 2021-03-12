
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
        
                                              <div>

                                        <!-- <download-excel -->
                                            <!-- class="btn btn-default pull-right" -->
                                            <!-- style="cursor:pointer;" -->
                                              <!-- :fields = "json_fields" -->
                                              <!-- title="Typeconges " -->
                                              <!-- name ="Typeconges" -->
                                              <!-- worksheet = "type_conges" -->
                                            <!-- :data="typeFiltre"> -->
                       <!-- <i title="Exporter en excel" class="icon-table"> Exporter en excel</i> -->

                                                 <!-- </download-excel>  -->
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Nature des prix</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search"  placeholder="Searche...">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>code</th>
                  <th>libelle</th>
                   <th>Action</th>
                </tr>     
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="type in
                 typeFiltre"
                 :key="type.id">
                  <td @dblclick="afficherModalModifierNature(type.id)">
                 {{type.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierNature(type.id)">
                    {{type.libelle || 'Non renseigné'}}</td>
                 
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerNaturePrix(type.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"> </i> Supprimer</span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
           
           
           
           
      
           
           
          </div>
        </div>
      </div>
              </div>
            </div>

       

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Nature des Prix</h3>
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
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
              
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show=" formData.code.length&&formData.libelle.length" 
             @click.prevent="ajouterTypeLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->
 


<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier Nature des Prix</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
             <label class="control-label">Code:</label>
              <div class="controls">
               <input type="text" v-model="editNature.code" class="span" placeholder="" />
              </div>
           </div>
            
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editNature.libelle" class="span" placeholder="" />
              </div>
            </div>
            
            
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
             @click.prevent="modifierTypeLocal(editNature)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" >Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->



<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterNaturePrix()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterNaturePrix"
        bg-color="green"

  ></fab>
<notifications  />



  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
export default {
  
  data() {
    return {
    //   json_fields:{
        // 'libelle':'libelle'
    //   },
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
            code:"",
             libelle: "",
            
        },

        editNature: {
            code:"",
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
   ...mapGetters('parametreGenerauxFonctionnelle', ['Nature_des_prix']),
  //  
         typeFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.Nature_des_prix.filter((item) => {
  
    
    return item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }
                                    
  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxFonctionnelle',  ['ajouterNaturePrix', 
   'supprimerNaturePrix','modifierNaturePrix']),   
   
    afficherModalAjouterNaturePrix(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTypeLocal () {
     this.ajouterNaturePrix(this.formData)
        this.formData = {
             code:"",
             libelle: "",
           
        }
    },
// afficher modal                                      
afficherModalModifierNature(id){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editNature = this.Nature_des_prix.find(item =>item.id==id);


        
 },
 

modifierTypeLocal(){
  this.modifierNaturePrix(this.editNature)
  this.$('#modifierModal').modal('hide');
  // this.editType = 
  //   libelle:""
  // }
}
  }
};
</script>

