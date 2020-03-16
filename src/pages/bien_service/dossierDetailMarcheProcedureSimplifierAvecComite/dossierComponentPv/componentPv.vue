<template>
    <div>
       
                                   <!-- <div class="span" align="right">
                                       Rechercher: <input type="search" v-model="search" />

                                   </div> -->

                                 <table class="table table-bordered table-striped"  v-if="macheid">
                                            <thead>
                                            <tr>
                                                
                                                <th>Ref offre</th>
                                                <th>Fichier</th>
                                               
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                           
                                            <tbody>
                         <tr class="odd gradeX" v-for="(cotation, index) in listeAnalyseDossier(macheid.id)"
                        :key="cotation.id">

                           <td @click="afficheAnnalyseDossier(index)">
                            {{cotation.cotation.ref_offre|| 'Non renseigné'}}</td>
                         <!-- <td @click="afficheAnnalyseDossier(index)">
                            {{cotation.nom_person || 'Non renseigné'}}</td>

                         <td @click="afficheAnnalyseDossier(index)">
                            {{cotation.contact || 'Non renseigné'}}</td>

                         <td @click="afficheAnnalyseDossier(index)">
                            {{cotation.objetEntreprise.raison_sociale || 'Non renseigné'}}</td> -->
                      
                        <td @click="afficheAnnalyseDossier(index)">
                            <a v-if="cotation.fichier" :href="cotation.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerAnalyseDossier(cotation.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                                            </tbody>
                                        </table>


                 <div id="ajouterPv" class="modal hide" aria-hidden="true" style="display: none;">

                      
                         <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter le rapport de jugement </h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" >
                      

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
export default {
 name:'compte',
    data(){
        return{

            formAnalyseDossier:{
                  //  nom_person:"",
                   // contact:"",
                    fichier_joint:"",
                   // entreprise_id:"",
                   // date_cotation:"",
                   // ref_offre:""

                   // marche_id:""

                },
            
            edite_analyse_dossier:{
                //  nom_person:"",
                //     contact:"",
                //     entreprise_id:"",
                    fichier_joint:"",
                    // date_cotation:"",
                    // ref_offre:""

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

            ...mapGetters("bienService", [ "gettersCotationPersonnaliser" ,"gettersCotations","getterAnalyseDossiers"]),
            // ...mapGetters('personnelUA', ['acteur_depenses']),


               ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            // ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
            //     'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
           
                       
 listeAnalyseDossier: function () {
            return macheid => {
                if (macheid != "") {

                    return this.getterAnalyseDossiers.filter(idmarche => idmarche.marche_id == macheid)
                }
            }
        },

    // filtreCotation(){
    //     const searchTem = this.search.toLowerCase();

    //     return this.gettersCotationPersonnaliser.filter((item) =>{
    //         item.nom_person.toLowerCase().includes(searchTem)
    //     })
    // }


//   listeCotation () {
//                 return macheid => {
//                     if (macheid != "") {
                        
//                         return this.gettersCotationPersonnaliser.filter(idmarche => idmarche.marche_id == macheid)
//                      }
//              }
//             },


        },
    methods:{
        ...mapActions('bienService',['supprimerAnalyseDossier',
        'ajouterAnalyseDossier','modifierAnalyseDossier']),


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
          
         afficheAnnalyseDossier(index){
                this.$('#modificationAajouterAnalys01').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edite_analyse_dossier = this.listeAnalyseDossier(this.macheid)[index];
            },
           
         
          
           ajouterCotationLocal(){

               
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                // formData.append('nom_person', this.formCotation.nom_person);
                // formData.append('contact', this.formCotation.contact);
                // formData.append('entreprise_id', this.formCotation.entreprise_id);
                // formData.append('date_cotation', this.formCotation.date_cotation);
                // formData.append('marche_id', this.macheid.id);
                // formData.append('ref_offre', this.formCotation.ref_offre);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
// if (condition) {
    
// }
              
               this.ajouterAnalyseDossier(formData, config)
               this.formAnalyseDossier ={
                  
               }
           },


           modifierCotationLocal(){
              

               const formData = new FormData();
                // formData.append('nom_person', this.editCotation.nom_person);
                // formData.append('contact', this.editCotation.contact);
                // formData.append('entreprise_id', this.editCotation.entreprise_id);
                // formData.append('date_cotation', this.editCotation.date_cotation);
                // formData.append('marche_id', this.marcheid);
                // formData.append('ref_offre', this.editCotation.ref_offre);
               
                console.log(formData)
                if ( this.selectedFile!==""){
                    formData.append('fichier', this.selectedFile, this.selectedFile.name);
                }
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
              
               this.modifierCotation(formData,config)
               this.$('#modificationAajouterAnalys01').modal('hide');
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