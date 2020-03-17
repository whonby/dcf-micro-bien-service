<template>
    <div>
       
                                   <!-- <div class="span" align="right">
                                       Rechercher: <input type="search" v-model="search" />

                                   </div> -->

                                 <table class="table table-bordered table-striped"  v-if="macheid">
                                            <thead>
                                            <tr>
                                                
                                                <th>Date DAO</th>
                                                <th>Fichier</th>
                                               
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                           
                                            <tbody>
                         <tr class="odd gradeX" v-for="transmission in listetransmissionDao(macheid.id)"
                        :key="transmission.id">

                           <td @click="afficherModalModifierTransmission(index)">
                            {{ formaterDate(transmission.date_dao)|| 'Non renseigné'}}</td>
                        
                      
                        <td >
                            <a v-if="transmission.fichier" :href="transmission.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerTransmission(transmission.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                                            </tbody>
                                        </table>


                 <div id="ajouterT" class="modal hide" aria-hidden="true" style="display: none;">

                      
                         <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter la transmission du DAO  </h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" >
                      
                      
                           <div class="control-group">
              <label class="control-label">Date de transmission:</label>
              <div class="controls">
                <input type="date"  class="span11"  v-model="formTransmission.date_dao" />
              </div>
            </div>

                    <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file"  @change="OnchangeFichier" />
              </div>
            </div>
                         
                
                     
                

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="ajouterCotationLocal()">Ajouter</a>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
            </div>
        </div>


             <div id="modificationAajouterAnalys01" class="modal hide " aria-hidden="true" style="display: none;">


                         <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier le rapport de jugement </h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" >
                        
                                  <div class="control-group">
              <label class="control-label">Date de transmission:</label>
              <div class="controls">
                <input type="date"   v-model="edit_transmission.date_dao" />
              </div>
            </div>

                   <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file"   @change="OnchangeFichier" />
              </div>
            </div>
                     
                     
                

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="modifierCotationLocal()">Modifier</a>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
            </div>
        </div>

        <notifications />
 </div>
    
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import moment from 'moment';
export default {
 name:'compte',
    data(){
        return{

            formTransmission:{
                 
                    fichier:"",
                    date_dao:"",
                  

                },
            
            edit_transmission:{
              
                date_dao:"",
                    fichier:"",
                    

            },

            imagePDF:"",
            namePDF:"",
            fichierPDF:"",
            selectedFile:"",

                search: "",

        }
    },

    props:["macheid"],

    created(){

    },
    computed: {

            ...mapGetters("bienService", [ "gettersCotationPersonnaliser" ,"gettersCotations","gettersTransmissions"]),
            // ...mapGetters('personnelUA', ['acteur_depenses']),


               ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            // ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
            //     'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
           
                       
 listetransmissionDao: function () {
            return macheid => {
                if (macheid != "") {

                    return this.gettersTransmissions.filter(idmarche => idmarche.marche_id == macheid)
                }
            }
        },

        },
    methods:{
        ...mapActions('bienService',['supprimerTransmission',
        'ajouterTransmission','modifiertransmission']),


             OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
               
                Array.from(files).forEach(file => this.addFichierPDF(file));
            },
            addFichierPDF(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },
          
         afficherModalModifierTransmission(index){
                this.$('#modificationAajouterAnalys01').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edit_transmission = this.listetransmissionDao(this.macheid)[index];
            },
           
         
          
           ajouterCotationLocal(){

                const formData = new FormData();
                formData.append('date_dao', this.formTransmission.date_dao);
                formData.append('fichier', this.selectedFile, this.selectedFile.name);

                //formData.append('marche_id', this.macheid.id);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
// if (condition) {
    
// }
              
               this.ajouterTransmission(formData, config)
               this.formTransmission ={
                   date_dao:""
                  
               }
           },


           modifierCotationLocal(){
              
               const formData = new FormData();
                 formData.append('date_dao', this.edit_transmission.date_dao);
                // formData.append('marche_id', this.macheid);
               
                console.log(formData)
                if ( this.selectedFile!==""){
                    formData.append('fichier', this.selectedFile, this.selectedFile.name);
                }
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
              
               this.modifiertransmission(formData,config)
               this.$('#modificationAajouterAnalys01').modal('hide');
           },
           formaterDate(date){
              return moment (date,'YYYY-MM-DD').format('DD/MM/YYYY');
           }

     }

    
}
</script>

<style scoped>
.tllgrde{
 width: 1000px;
 margin: 0 -530px;
 height: 350px;
}
</style>