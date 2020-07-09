
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
            <h5>Type conges</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search"  placeholder="Searche...">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>libelle</th>
                  <th>Duree</th>
                   <th>Action</th>
                </tr>     
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(type, index) in
                 typeFiltre"
                 :key="type.id">
                  <td @dblclick="afficherModalModifierType(index)">
                    {{type.libelle || 'Non renseigné'}}</td>
                 
                  <td @dblclick="afficherModalModifierType(index)">
                    {{type.dure || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerTypeconges(type.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
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
                <h3>Ajouter type conges</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
               <div class="control-group">
              <label class="control-label">Dur�e</label>
              <div class="controls">
                <input type="text" v-model="formData.dure" class="span" placeholder="Saisir le dure" />
              </div>
            </div>
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show=" formData.dure.length" 
             @click.prevent="ajouterTypeLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->
 


<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier type conges</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editType.libelle" class="span" placeholder="" />
              </div>
            </div>
             <div class="control-group">
              <label class="control-label">Dur�e</label>
              <div class="controls">
                <input type="text" v-model="editType.dure" class="span" placeholder="Saisir le dure" />
              </div>
            </div>
            
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
             @click.prevent="modifierTypeLocal(editType)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" >Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->



<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterTypeconges()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterTypeconges"
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
             libelle: "",
             dure:""
            
        },

        editType: {
             libelle: "",
        dure:""
        },
      search:""
    };
  },
 
  created() {
    //this.getStructureRole()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxFonctionnelle', ['Typeconges']),
  //  
         typeFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.Typeconges.filter((item) => {
  
    
    return item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }
                                    
  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxFonctionnelle',  ['ajouterTypeconges', 
   'supprimerTypeconges','modifierTypeconges']),   
   
    afficherModalAjouterTypeconges(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTypeLocal () {
     this.ajouterTypeconges(this.formData)
        this.formData = {
             libelle: "",
             dure:""
           
        }
    },
// afficher modal                                      
afficherModalModifierType(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editType = this.Typeconges[index];


        
 },
 

modifierTypeLocal(){
  this.modifierTypeconges(this.editType)
  this.$('#modifierModal').modal('hide');
  // this.editType = 
  //   libelle:""
  // }
}
  }
};
</script>

