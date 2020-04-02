<template>
    <div>
       
                                   <!-- <div class="span" align="right">
                                       Rechercher: <input type="search" v-model="search" />

                                   </div> -->

                                 <table class="table table-bordered table-striped"  v-if="macheid">
                                            <thead>
                                            <tr>
                                                
                                         <th>Date du rapport</th> 
                                                <th>Fichier</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                           
                                            <tbody>
                         <tr class="odd gradeX" v-for="(rapport,index) in listeRapport(macheid)"
                        :key="rapport.id">

                         <td @click="afficherModalRapportOuverture(index)">
                            {{formaterDate(rapport.date_type_procedure)|| 'Non renseigné'}}</td> 
                      
                        <td @click="afficherModalRapportOuverture(index)">
                            <a v-if="rapport.fichier" :href="rapport.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerDocument(rapport.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                                            </tbody>
                                        </table>

                 <div id="ajouterRapportOuvertureP" class="modal hide grdtaill">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter rapport d'ouverture</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Date du rapport</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formRapport.date_type_procedure"
                                    class="span"
                                       
                            />
                              <input type="hidden" v-model="formRapport.difference_personnel_bienService"/>
                        </div>
                    </div>

     <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file"  class="span" @change="OnchangeFichier" />
              </div>
            </div>


                </form>
            </div>
           <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="ajouterRapportOuverture()">Ajouter</a>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
            </div>
        </div>


             <div id="modifierModalRapportOuverture" class="modal hide " aria-hidden="true" style="display: none;">


                         <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier le rapport de jugement </h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" >
    
                        <div class="control-group">
              <label class="control-label">Date:</label>
              <div class="controls">
                <input type="date"   v-model="editRapport.date_type_procedure"
                 />
                <input type="hidden" v-model="editRapport.difference_personnel_bienService"/>
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
                <a class="btn btn-primary" @click.prevent="modifierRapportOuverture()">Modifier</a>
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

            formRapport:{
                 date_type_procedure:"",
                 fichier:"",
                difference_personnel_bienService:"personnel",
                marche_id:""

                },
            
            editRapport:{
              date_type_procedure:"",
              fichier:"",
              difference_personnel_bienService:"personnel",
              marche_id:""
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

            ...mapGetters("bienService", [ "gettersCotationPersonnaliser" ,
            "gettersCotations","documents"]),
            // ...mapGetters('personnelUA', ['acteur_depenses']),


               ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            // ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
            //     'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
           
//    listeRapport() {
//                 return id => {
//                     if (id != "") {
//                         return this.documents.filter(idmarche => idmarche.marche_id == id)
//                     }
//                 }
//             },
 listeRapport() {
      return id => {
        if (id != null && id != "") {
          return this.documents.filter(element => element.marche_id == id);
        }
      };
    },


        },
    methods:{
        ...mapActions('bienService',['supprimerDocument',
        'ajouterDocument','modifierDocument']),


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
          
         afficherModalRapportOuverture(index){
                this.$('#modifierModalRapportOuverture').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editRapport = this.documents[index];
            },

           
         
          
           ajouterRapportOuverture(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                 formData.append('date_type_procedure', this.formRapport.date_type_procedure);
               formData.append('marche_id', this.macheid);
               formData.append('difference_personnel_bienService',this.formRapport.difference_personnel_bienService)
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
               this.ajouterDocument(formData, config)
               this.formRapport ={
                 difference_personnel_bienService:"personnel",
                 date_type_procedure:""
               }
           },


           modifierRapportOuverture(){
               const formData = new FormData();
                 formData.append('date_type_procedure', this.editRapport.date_type_procedure);
                 formData.append('marche_id', this.macheid);
                 formData.append('difference_personnel_bienService', this.difference_personnel_bienService)
                formData.append('id', this.editRapport.id);
               
                console.log(formData)
                if ( this.selectedFile!==""){
                    formData.append('fichier', this.selectedFile, this.selectedFile.name);
                }
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
              
               this.modifierDocument(formData,config)
               this.$('#modifierModalRapportOuverture').modal('hide');
           },

           formaterDate(date){
               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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