<template>
    <div>
       
                                   <!-- <div class="span" align="right">
                                       Rechercher: <input type="search" v-model="search" />

                                   </div> -->

                                 <table class="table table-bordered table-striped"  v-if="macheid">
                                            <thead>
                                            <tr>
                                                <th>Ref du courier</th>
                                                <th>Destinataire</th>
                                                <th>Date de transmission du DAO</th>
                                                <th>Fichier</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                           
                                            <tbody>
                         <tr class="odd gradeX" v-for="(transmission, index) in listetransmissionDao(macheid.id)"
                        :key="transmission.id">

                          <td @click="afficherModalModifierTransmission(index)">
                            {{ transmission.ref_courier|| 'Non renseigné'}}</td>

                            <td> 
                             <span v-if="transmission.destinataire ==1"> ANO DMP</span>
                              <span v-else-if="transmission.destinataire ==2" > ANO Bailleur</span>
                                 <span v-else >{{'Non renseigné'}}</span>
                            </td>

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
                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>

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
              <label class="control-label">Reférence du dossier:</label>
              <div class="controls">
                <input type="text"  class="span11"  v-model="formTransmission.ref_courier" />
              </div>
            </div>
                           <div class="control-group">
              <label class="control-label">Date de transmission du dossier:</label>
              <div class="controls">
                <input type="date"  class="span11"  v-model="formTransmission.date_dao" />
              </div>
            </div>
                 <div class="control-group">
                        <label class="control-label">Destinataire</label>
                        <div class="controls">
                           <select v-model="formTransmission.destinataire" class="span">
                               <option value="1"> ANO DMP</option>
                               <option value="2">ANO Bailleur</option>
                           </select>
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
                <h3>Modifier la transmission du DAO sur la DMP</h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" >

                    <div class="control-group">
              <label class="control-label">Reférence du dossier:</label>
              <div class="controls">
                <input type="text"   v-model="edit_transmission.ref_courier" />
              </div>
            </div>
                        
                                  <div class="control-group">
              <label class="control-label">Date de transmission du dossuier:</label>
              <div class="controls">
                <input type="date"   v-model="edit_transmission.date_dao" />
              </div>
            </div>

             <div class="control-group">
                        <label class="control-label">Destinataire</label>
                        <div class="controls">
                           <select v-model="edit_transmission.destinataire" class="span">
                               <option value="1"> ANO DMP</option>
                               <option value="2">ANO Bailleur</option>
                           </select>
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
                <a class="btn btn-primary" @click.prevent="modificationTransmissionLocal()">modifier</a>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
            </div>
        </div>

        <notifications/>
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
                    ref_courier:"",
                    destinataire:""
                  

                },
            
            edit_transmission:{
              
                date_dao:"",
                    fichier:"",
                    ref_courier:"",
                    destinataire:"",
                   
                    

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
            "gettersCotations","gettersTransmissions"]),
            // ...mapGetters('personnelUA', ['acteur_depenses']),


               ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            // ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
            //     'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
           
                       
 listetransmissionDao () {
            return macheid => {
                if (macheid != "") {

                    return this.gettersTransmissions.filter(idmarche => idmarche.macheid == macheid)
                }
            }
        },

        },
    methods:{
        
        ...mapActions('bienService',['supprimerTransmission',
        'ajouterTransmission','modifiertransmission',"getTransmission"]),


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
                this.edit_transmission = this.listetransmissionDao(this.macheid.id)[index];
            },
           
         
          
           ajouterCotationLocal(){

                const formData = new FormData();
                formData.append('date_dao', this.formTransmission.date_dao);
                formData.append('ref_courier',this.formTransmission.ref_courier);
                formData.append('destinataire',this.formTransmission.destinataire);
                formData.append('marche_id',this.macheid);
                formData.append('fichier', this.selectedFile, this.selectedFile.name);

                //formData.append('marche_id', this.macheid.id);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
// if (condition) {
    
// }
              
               this.ajouterTransmission(formData,config)
               this.getTransmission()
               this.formTransmission ={
                   date_dao:"",
                   ref_courier:"",
                   destinataire:""
                  
               }
           },

  
        //    modificationTransmissionLocal(){
              
        //        const formData = new FormData();
        //          formData.append('date_dao', this.edit_transmission.date_dao);
        //         formData.append('marche_id', this.macheid);
        //         formData.append('ref_courier',this.edit_transmission.ref_courier);
        //         formData.append('destinataire',this.edit_transmission.destinataire);
        //        formData.append('id',this.edit_transmission.id);
        //         console.log(formData)
        //         if ( this.selectedFile!==""){
        //             formData.append('fichier', this.selectedFile, this.selectedFile.name);
        //         }
        //         let config = {
        //             header : {
        //                 'Content-Type' : 'multipart/form-data'
        //             }
        //         }
              
        //        this.modifiertransmission(formData,config)
        //        this.$('#modificationAajouterAnalys01').modal('hide');
        //    },



 modificationTransmissionLocal(){
                //console.log(this.edite_demande_dao)
                const formData = new FormData();
              formData.append('date_dao', this.edit_transmission.date_dao);
                formData.append('marche_id', this.macheid);
                formData.append('ref_courier',this.edit_transmission.ref_courier);
                formData.append('destinataire',this.edit_transmission.destinataire);
               formData.append('id',this.edit_transmission.id);
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