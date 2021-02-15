
<template>
    <div>
       
                                   <!-- <div class="span" align="right">
                                       Rechercher: <input type="search" v-model="search" />

                                   </div> -->

                                 <table class="table table-bordered table-striped"  v-if="macheid">
                                            <thead>
                                            <tr>
                                                <th>Référence</th>
                                                <th>Nom</th>
                                                <th>Contact</th>
                                                <th>Entreprise</th>
                                                <!-- <th>Fichier</th> -->
                                               
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                           
                                            <tbody>
                         <tr class="odd gradeX" v-for="(cotation, index) in listeCotation(macheid.id)"
                        :key="cotation.id">

                           <td @click="afficherModalcotation(index)">
                            {{cotation.ref_offre || 'Non renseigné'}}</td>
                         <td @click="afficherModalcotation(index)">
                            {{cotation.nom_person || 'Non renseigné'}}</td>

                         <td @click="afficherModalcotation(index)">
                            {{cotation.contact || 'Non renseigné'}}</td>

                         <td @click="afficherModalcotation(index)">
                            {{afficherLibelleEntreprise(cotation.entreprise_id) || 'Non renseigné'}}</td>
                      
                        <!-- <td>
                            <a v-if="cotation.fichier_joint" :href="cotation.fichier_joint" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td> -->
                        <div class="btn-group">
                            <button @click.prevent="supprimerCotation(cotation.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>

                        </div>

                    </tr>
                                            </tbody>
                                        </table>


                 <div id="addCotation" class="modal hide tllgrde" aria-hidden="true" style="display: none;">

                      
                         <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter la réception des plis</h3>
            </div>
            <table class="table table-bordered table-striped">
 <tr>
                                 <td colspan="2" width="">

                          <!-- <select v-model="formCotation.entreprise_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                                        :value="varText.id">{{varText.raison_sociale}}</option>
                            </select> -->
                            <div class="span" align="left" >

                               Sélectionner l'entreprise:
                        <model-list-select style="background-color: rgb(255,255,255);"
                                           class="wide"
                                           :list="listeEntreprise"
                                           v-model="formCotation.entreprise_id"
                                           option-value="id"
                                           option-text="raison_sociale"
                                            :search-change="recherche()"
                                           placeholder="Selectionner l'entreprise"
                                          
                        >

                        </model-list-select>
                        
                            </div>
                   
                              </td>
                            </tr>
            </table>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" >
                        <table class="table table-bordered table-striped">

                           
                     
                          <tr>
                              <td>
                          <div class="control-group">
            
                            <label class="control-label">Référence des plis:</label>
                           <div class="control-group">
                       <input type="text" class="span" readonly :value="affichierReferenceAppelOffre(macheid.id)">
                       
                       
                            </div>
                        </div>
                              </td>
                              <td>
                         <div class="control-group">
            
                            <label class="control-label">Nom du déposant :</label>
                           <div class="control-group">
                       <input type="text" class="span" placeholder="saisir le nom" v-model="formCotation.nom_person">
                            </div>
                        </div>
                              </td>
                              <td>

                        <div class="control-group">

                            <label class="control-label">Contact :</label>

                            <div class="controls">
                                <input type="text" class="span" row="" placeholder=""  v-model="formCotation.contact">
                            </div>
                        </div>
                              </td>
                          </tr>
                          <tr>
                             
                              <td>

                    <div class="control-group">

                     <label class="control-label">Date de dépôt des plis :</label>

                            <div class="controls">
                                <input type="date" class="span" row="" placeholder=""  v-model="formCotation.date_cotation">
                            </div>
                        </div>
                              </td>
                              <!-- <td>

                    <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file"  @change="OnchangeFichier" />
              </div>
            </div>
                              </td> -->
                          </tr>
                        </table>
                
                     
                

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="ajouterCotationLocal()">Ajouter</a>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Annuler</a>
            </div>
        </div>


             <div id="modifiCotation" class="modal hide tllgrde" aria-hidden="true" style="display: none;">


                         <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier la réception des plis </h3>
            </div>

                     <table class="table table-bordered table-striped">
 <tr>
                                 <td colspan="2" width="">

                          <select v-model="editCotation.entreprise_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                                        :value="varText.id">{{varText.raison_sociale}}</option>
                            </select>
                            <!-- <div class="span" align="left" >

                               Selectionner l'entreprise:
                        <model-list-select style="background-color: rgb(255,255,255);"
                                           class="wide"
                                           :list="listeEntreprise"
                                           v-model="search"
                                           option-value="id"
                                           option-text="raison_sociale"
                                            :search-change="recherche()"
                                           placeholder="Selectionner l'entreprise"
                                          
                        >

                        </model-list-select>
                        
                            </div> -->
                   
                              </td>
                            </tr>
            </table>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" >
                         
                  <table class="table table-bordered table-striped">
                      <tr>
                          <td>
                                <div class="control-group">
            
                            <label class="control-label">Référence des plis</label>
                           <div class="control-group">
                       <input type="text" class="span" v-model="editCotation.ref_offre">
                            </div>
                        </div>
                          </td>
                          <td>
                              

                         <div class="control-group">
            
                            <label class="control-label">Nom du déposant</label>
                           <div class="control-group">
                       <input type="text" class="span" placeholder="saisir le nom" v-model="editCotation.nom_person">
                            </div>
                        </div>
                          </td>
                          <td>

                        <div class="control-group">

                            <label class="control-label">Contact</label>

                            <div class="controls">
                                <input type="text" class="span" row="" placeholder=""  v-model="editCotation.contact">
                            </div>
                        </div>
                          </td>
                      </tr>
                      <tr>
                          <!-- <td>

                         <div class="control-group">
                        <label class="control-label">Entreprise.</label>
                        <div class="controls">
                          <select v-model="editCotation.entreprise_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                                        :value="varText.id">{{varText.raison_sociale}}</option>
                            </select>
                        
                        </div>
                    </div>
                          </td> -->
                          <td>

                           <div class="control-group">

                     <label class="control-label">Date de dépôt des plis </label>

                            <div class="controls">
                                <input type="date" class="span" row="" placeholder=""  v-model="editCotation.date_cotation">
                            </div>
                        </div>
                          </td>
                          <!-- <td>



                              <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file"   @change="OnchangeFichier" />
              </div>
            </div>
                          </td> -->
                      </tr>
                  </table>
                
                     
                

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="modifierCotationLocal()">Modifier</a>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Annuler</a>
            </div>
        </div>

<notifications/>
 </div>
    
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
 import {  ModelListSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'
export default {
 name:'compte',

 components:{
            // bailleurAjouter,
            
             ModelListSelect,
        },
    data(){
        return{

            formCotation:{
                    nom_person:"",
                    contact:"",
                    fichier_joint:"",
                    entreprise_id:"",
                    date_cotation:"",
                    ref_offre:"",
                   marche_id:""

                },
            
            editCotation:{
                 nom_person:"",
                    contact:"",
                    entreprise_id:"",
                    fichier_joint:"",
                    date_cotation:"",
                    ref_offre:""

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
        this.formCotation.marche_id=this.macheid.id
        console.log(this.macheid.id)
    },
    
    computed: {

            ...mapGetters("bienService", ["gettersCotations","appelOffres", "gettersCotationPersonnaliser" ,"gettersCotations"]),
            // ...mapGetters('personnelUA', ['acteur_depenses']),

               ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            // ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
            //     'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
           
           
afficherIdEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);
      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
    // filtreCotation(){
    //     const searchTem = this.search.toLowerCase();

    //     return this.gettersCotationPersonnaliser.filter((item) =>{
    //         item.nom_person.toLowerCase().includes(searchTem)
    //     })
    // }


  listeCotation () {
                return id => {
                    if (id != "") {
                        // console.log("Marche lettre inviation marche")
                        return this.gettersCotationPersonnaliser.filter(idmarche => idmarche.marche_id == id)
                     }
             }
            },


 listeEntreprise () {
                
                        // console.log("Marche lettre inviation marche")
        return this.entreprises.filter(idmarche => idmarche.active == 1)
                     
             
            },


            afficherLibelleEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    },

affichierReferenceAppelOffre() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);
      if (qtereel) {
        return qtereel.ref_appel;
      }
      return 0
        }
      };
    },

        },
      methods: {
            ...mapActions("bienService", ['ajouterCotation' ,"getCotation", 'modifierCotation','supprimerCotation']),
            // ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise","ajouterSanction"]),


 recherche() {
              // console.log(this.search)
                let entre=this.entreprises.find(item=>item.id==this.search);
                if (entre!=undefined){
                    if(this.search!=""){
                        this.formCotation.id=entre.id
                        // this.formDossierCadidature.adresse_post=entre.adresse
                        // this.formDossierCadidature.nom_cand=entre.raison_sociale
                        // this.formDossierCadidature.reg_com=entre.numero_rc
                        // this.formDossierCadidature.email_cand=entre.email
                        // this.formDossierCadidature.numero_cc=entre.numero_cc
                        // this.formDossierCadidature.secteur_activite_id=entre.secteur_activite_id
                    }
                }
            },




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
          
          afficherModalcotation(index){
              this.$('#modifiCotation').modal({
                     backdrop: 'static',
                    keyboard: false
              })

              this.editCotation = this.listeCotation(this.macheid.id)[index]
              
          },
           
         
          
           ajouterCotationLocal(){
            
            //     const formData = new FormData();
            //     formData.append('fichier_joint', this.selectedFile, this.selectedFile.name);
            //     formData.append('nom_person', this.formCotation.nom_person);
            //     formData.append('contact', this.formCotation.contact);
            //    formData.append('entreprise_id', this.formCotation.id);
            //     formData.append('date_cotation', this.formCotation.date_cotation);
            //     formData.append('marche_id', this.macheid.id);
            //     formData.append('ref_offre', this.affichierReferenceAppelOffre(this.macheid.id));
            //     let config = {
            //         header : {
            //             'Content-Type' : 'multipart/form-data'
            //         }
            //     }
// if (condition) {
    
// }

               console.log(this.formCotation)
              
               this.ajouterCotation(this.formCotation)
               this.getCotation()
               this.formCotation ={
                   nom_person:"",
                       contact:"",
                       entreprise_id:"",
                       date_cotation:"",
                       ref_offre:"",
                       marche_id:this.macheid.id
                       
               }
               //  this.formCotation.marche_id=this.macheid.id
           },


           modifierCotationLocal(){
              

            //    const formData = new FormData();
            //     formData.append('nom_person', this.editCotation.nom_person);
            //     formData.append('contact', this.editCotation.contact);
            //    formData.append('entreprise_id', this.editCotation.id);
            //     formData.append('date_cotation', this.editCotation.date_cotation);
            //     formData.append('marche_id', this.marcheid);
            //     formData.append('ref_offre', this.editCotation.ref_offre);
               
            //     console.log(formData)
            //     if ( this.selectedFile!==""){
            //         formData.append('fichier_joint', this.selectedFile, this.selectedFile.name);
            //     }
            //     let config = {
            //         header : {
            //             'Content-Type' : 'multipart/form-data'
            //         }
            //     }
              
               this.modifierCotation(this.editCotation)
               this.$('#modifiCotation').modal('hide');
           }

     }

    
}
</script>

<style scoped>
.tllgrde{
 width: 1000px;
 margin: 0 -530px;
 height: 500px;
}
</style>