<template>
    <div>
       
                                   <!-- <div class="span" align="right">
                                       Rechercher: <input type="search" v-model="search" />

                                   </div> -->

                                 <table class="table table-bordered table-striped"  v-if="macheid">
                                            <thead>
                                            <tr>
                                                
                                         <th>Date rapport jugement</th> 
                                                <th>Fichier</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                           
                                            <tbody>
                         <tr class="odd gradeX" v-for="(rapport,index) in listeRapport(macheid)"
                        :key="rapport.id">

                         <td @click="afficherModalRapportJugement(index)">
                            {{formaterDate(rapport.date_rapport_jugement)|| 'Non renseigné'}}</td> 
                      
                        <td @click="afficherModalRapportJugement(index)">
                            <a v-if="rapport.fichier" :href="rapport.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>
                        <div class="btn-group">
                              <td>
                            <button @click.prevent="supprimerRapportJugement(rapport.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>
                             </td>
                             <td>
                               <a href="#infoPV" @click.prevent="infoPVAffiche(rapport.reference)" data-toggle="modal" class="btn btn-info">
                            <span title="voir la liste des classements des candidats"><i class="icon-pencil" ></i></span></a>
                             </td>
                        </div>
                       
                       
                        
                    </tr>
                                            </tbody>
                                        </table>


                 <div id="ajouterRapportPersonnel" class="modal hide grdtaill">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter rapport d'ouverture</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Date du rapport de jugement</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formJugement.date_rapport_jugement"
                                    class="span"
                                       
                            />
                              <input type="hidden" v-model="formJugement.difference_personnel_bienService"/>
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
                <a class="btn btn-primary" @click.prevent="ajouterRapportJugementLocal()">Ajouter</a>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
            </div>
        </div>



         <div id="infoPV" class="modal hide grdirModalActeEffet">
                  <div class="modal-header">
                      <button data-dismiss="modal" class="close" type="button">×</button>
                      <h3>PROCES-VERBAL DE JUGEMENT DES OFFRES</h3>
                  </div>
                  <div class="modal-body" v-if="resultaAnalysePv">
                      <h4 class="text-center">ATTRIBUTION DU CONTRAT</h4>
                      <div>
                          Suivant les résultats de l’évaluation des offres présentés par le rapporteur dans le
                          tableau ci-dessus, il apparaît que le soumissionnaire <b v-if="resultaAnalysePv.length>0">{{}}</b> propose
                          l’offre conforme la moins-disante.
                      </div>
                      <h4 class="text-center">TABLEAU RECAPITULATIF DE LA COMPARAISON DES OFFRES</h4>
                      <table class="table table-bordered table-striped">
                          <thead>
                          <tr>
                              <th>Nom des candidats </th>
                              <th>Note</th>
                              <th>Classement</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr class="odd gradeX" v-for="(item, index) in resultaAnalysePv"
                              :key="item.id">
                              <!-- <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                                  {{anoBailleur.annalyse_d_m_p.demande_ano.annalyse_dossier.dossier_candidature.numero_dossier || 'Non renseigné'}}</td> -->
                              <td >
                                  {{afficherNomCandidat(item.candidat_personnel_id) || 'Non renseigné'}}</td>
                              <td >
                                  {{item.note_analyse || 'Non renseigné'}}</td>
                              <td >
                                  <p v-if="index==0">
                                      {{index + 1}} er
                                  </p>
                                  <p v-else>
                                      {{index + 1}} eme
                                  </p>

                              </td>

                          </tr>
                          </tbody>
                      </table>
                  </div>
                  <div class="modal-footer">

                      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
                  </div>
              </div>


             <div id="modifierRapportJugements" class="modal hide " aria-hidden="true" style="display: none;">


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
                <input type="date"   v-model="editRapport.date_rapport_jugement"
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

          note_analyse:"",
            reference_pv:"",
            formJugement:{
                 date_rapport_jugement:"",
                 fichier:"",
                difference_personnel_bienService:"personnel",
                marche_id:""

                },
            reference:"",
            editRapport:{
              date_rapport_jugement:"",
              fichier:"",
              difference_personnel_bienService:"personnel",
              marche_id:""
            },
            resultaAnalysePv:[],
            imagePDF:"",
            namePDF:"",
            fichierPDF:"",
            selectedFile:"",

                search: "",
           nom_candidat:""
        }
    },

    props:["macheid"],

    created(){

    },
    computed: {

            ...mapGetters("bienService", [ "gettersCotationPersonnaliser" ,"gettersPersonnaliserRapportJugement",
            "gettersCotations","rapportDocuments", 'listeJugementPersonnel']),
             ...mapGetters('personnelUA', ['acteur_depenses','dossierPersonnels']),


               ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            // ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
            //     'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
           
//    listeRapport() {
//                 return id => {
//                     if (id != "") {
//                         return this.rapportJugement.filter(idmarche => idmarche.marche_id == id)
//                     }
//                 }
//             },
 listeRapport() {
      return macheid => {
        if (macheid != null && macheid != "") {
          return this.rapportDocuments.filter(element => element.marche_id == macheid);
        }
      };
    },



    // afficher le nom des candidats

    afficherNomCandidat(){
        return id =>{
            if(id!=null && id!=""){
                let obejtNom = this.dossierPersonnels.find(obejtNom => obejtNom.id == id)
                if(obejtNom){
                    return obejtNom.nom_candidat.concat(' ', obejtNom.prenom_candidat)
                }
                return 0
            }
        }
    }
            


        },
    methods:{
        ...mapActions('bienService',['supprimerRapportJugement',
        'ajouterRapportJugement','modifierRapportJugement']),


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
          
         afficherModalRapportJugement(index){
                this.$('#modifierRapportJugements').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editRapport = this.rapportDocuments[index];
            },

           
         
          
           ajouterRapportJugementLocal(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                 formData.append('date_rapport_jugement', this.formJugement.date_rapport_jugement);
               formData.append('marche_id', this.macheid);
               formData.append('difference_personnel_bienService',this.formJugement.difference_personnel_bienService)
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
               this.ajouterRapportJugement(formData, config)
               this.formJugement ={
                 difference_personnel_bienService:"personnel",
                 date_rapport_jugement:""
               }
           },


           modifierRapportOuverture(){
               const formData = new FormData();
                 formData.append('date_rapport_jugement', this.editRapport.date_rapport_jugement);
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
              
               this.modifierRapportJugement(formData,config)
               this.$('#modifierRapportJugements').modal('hide');
           },
           formaterDate(date){
               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
           },

           infoPVAffiche(ref){
                this.resultaAnalysePv=[]
                let resulta=this.listeJugementPersonnel.filter(item=>item.reference_pv==ref);
                this.resultaAnalysePv=this.resultaAnalysePv.concat(resulta)
                if (this.resultaAnalysePv.length>0){
                    this.resultaAnalysePv.sort(function (a, b) {
                        return a.note_analyse - b.note_analyse;
                    }).reverse()
                }
                //console.log(this.resultaAnalysePv)
            },

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