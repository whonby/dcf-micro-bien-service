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
                            {{formaterDate(rapport.date_rapport_ouverture)|| 'Non renseigné'}}</td> 
                      
                        <td @click="afficherModalRapportOuverture(index)">
                            <a v-if="rapport.fichier" :href="rapport.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerRapportJugement(rapport.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>

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
                                    v-model="formRapport.date_rapport_ouverture"
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
                <h3>Modifier le rapport d'ouverture </h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">

               <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Date du rapport</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="editRapport.date_rapport_ouverture"
                                    class="span"
                                       
                            />
                              <input type="hidden" v-model="editRapport.difference_personnel_bienService"/>
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
                 date_rapport_ouverture:"",
                 attribue:"0",
                 fichier:"",
                difference_personnel_bienService:"personnel",
                marche_id:""

                },
            
            editRapport:{
              date_rapport_ouverture:"",
              attribue:"0",
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
            "gettersCotations","documentMedias",'rapportDocuments']),
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


 listeRapport:function() {
      return macheid => {
        if (macheid != null && macheid != "") {
          return this.rapportDocuments.filter(element => element.marche_id == macheid  && element.date_rapport_jugement==null );
        }
      };
    },


        },
    methods:{
       ...mapActions('bienService',['supprimerRapportJugement',
        'ajouterRapportJugement','modifierRapportJugement','getRapportJugement']),


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
                this.editRapport = this.listeRapport(this.macheid)[index];
            },

           
         
          
           ajouterRapportOuverture(){
              // if(confirm("veiller charger le fichier svp !")){
                 const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                 formData.append('date_rapport_ouverture', this.formRapport.date_rapport_ouverture);
               formData.append('marche_id', this.macheid);
               formData.append('attribue', this.formRapport.attribue);
               formData.append('difference_personnel_bienService',this.formRapport.difference_personnel_bienService)
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
               this.ajouterRapportJugement(formData, config)
               this.formRapport ={
                 difference_personnel_bienService:"personnel",
                 date_rapport_ouverture:""
               }
            //    }else{
            //        return "ok fichier neccessaire mercie"
            //    }
              
           },


           modifierRapportOuverture(){
              // if(confirm("veiller charger le fichier svp !")){
                    const formData = new FormData();
                 formData.append('date_rapport_ouverture', this.editRapport.date_rapport_ouverture);
                 formData.append('marche_id', this.macheid);
                 formData.append('attribue', this.editRapport.attribue);
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
              
               this.modifierRapportJugement(formData,config)
              // this.getRapportJugement()
               this.$('#modifierModalRapportOuverture').modal('hide');
            //    }else{
            //        return " chargemennt de fichier neccessaire "
            //    }
         
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