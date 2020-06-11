<template>
    <div>
       
                                   <!-- <div class="span" align="right">
                                       Rechercher: <input type="search" v-model="search" />

                                   </div> -->

                                 <table class="table table-bordered table-striped"  v-if="macheid">
                                            <thead>
                                            <tr>
                                              <th>Reference Pv</th>  
                                         <th>Date rapport jugement</th> 
                                                <th>Fichier</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                           
                                            <tbody>
                         <tr class="odd gradeX" v-for="(rapport,index) in listeRapport(macheid)"
                        :key="rapport.id">

                            <td @click="afficherModalRapportJugement(index)">
                            {{rapport.reference|| 'Non renseigné'}}</td> 

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
                               <button href="#infoPV" @click.prevent="infoPVAffiche(rapport.reference)" data-toggle="modal" class="btn btn-info">
                            <span title="voir la liste des classements des candidats"><i class="icon-pencil" ></i></span></button>
                             </td>
                              <td>
                            <button @click.prevent="supprimerRapportJugement(rapport.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>
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
                          tableau ci-dessus, il apparaît que le soumissionnaire <b v-if="resultaAnalysePv.length>0"></b> propose
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
                                  {{afficherNomCandidat(item.candidat_selection_id) || 'Non renseigné'}}</td>
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
                      <div> super, le classement effectué avec success!
                               donc nous  passerons à l'avis d'ANO Bailleur, si l'avis est "Non Objection" alors,
                               les candidats passerons a l'attribution pour etre recruter !</div>
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


          <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Date du rapport de jugement</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="editRapport.date_rapport_jugement"
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

          note_analyse:"",
            reference_pv:"",
            formJugement:{
                 date_rapport_jugement:"",
                 attribue:"1",
                 appel_offre_id:"",
                 fichier:"",
                difference_personnel_bienService:"personnel",
                marche_id:"",
                candidat_selection_id:""

                },
            reference:"",
            editRapport:{
              date_rapport_jugement:"",
               attribue:"1",
               appel_offre_id:"",
              fichier:"",
              difference_personnel_bienService:"personnel",
              marche_id:"",
              candidat_selection_id:""
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

            ...mapGetters("bienService", [ "gettersCotationPersonnaliser" ,"appelOffres",
            "gettersPersonnaliserRapportJugement","getterAnalyseDossiers",
            "gettersCotations","rapportDocuments", 'listeJugementPersonnel','selectionner_candidats']),
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
          return this.rapportDocuments.filter(element => element.marche_id == macheid && element.date_rapport_ouverture==null);
        }
      };
    },

 afficherCandidatSelectionnerAtrribue() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAnalyseDossiers.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },

// afficher ID du candidat selectionner 

affichierCandidatSelectionId() {
      return id => {
        if (id != null && id != "") {
           const objetPourRecureperId = this.selectionner_candidats.find(objetPourRecureperId => objetPourRecureperId.marche_id == id);

      if (objetPourRecureperId) {
        return objetPourRecureperId.id;
      }
      return 0
        }
      };
    },


// afficher ID de avis de re rutement 

affichierAppelOffreid() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
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
        'ajouterRapportJugement','modifierRapportJugement',"getRapportJugement"]),


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

               //if(confirm("veiller charger le fichier svp mercie")){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                 formData.append('date_rapport_jugement', this.formJugement.date_rapport_jugement);
               formData.append('marche_id', this.macheid);
               formData.append('attribue', this.formJugement.attribue);
                formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
              formData.append('candidat_selection_id', this.affichierCandidatSelectionId(this.macheid));
               formData.append('difference_personnel_bienService',this.formJugement.difference_personnel_bienService)
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
               this.ajouterRapportJugement(formData, config)
               this.getRapportJugement()
               this.formJugement ={
                 difference_personnel_bienService:"personnel",
                 date_rapport_jugement:""
               }
              // }else return "chargement du fichier neccessaire ";
                
           },


           modifierRapportOuverture(){
              // if(confirm("chargement du fichier neccessaire ")){
                 const formData = new FormData();
                 formData.append('date_rapport_jugement', this.editRapport.date_rapport_jugement);
                 formData.append('marche_id', this.macheid);
                  formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
                 formData.append('attribue',this.editRapport.attribue);
                 formData.append('candidat_selection_id', this.affichierCandidatSelectionId(this.macheid));
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
               this.$('#modifierRapportJugements').modal('hide');
              // } else return "chargement du fichier neccessaire";
              
           },
           formaterDate(date){
               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
           },




           infoPVAffiche(ref){
                this.resultaAnalysePv=[]
                let resulta=this.selectionner_candidats.filter(item=>item.reference_pv==null || ref && this.afficherCandidatSelectionnerAtrribue(item.jugement_id)==1);
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