<template>
    <div>

            
  <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                    <tr>

                        <!-- <th>ANO DMP bailleur</th>  -->
                        <th>Reference Offre</th>
                        <th>Reference PV</th>
                        <th>Fichier</th>
                        <th>Avis</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="pv in listePV(macheid)"
                        :key="pv.id">
                        <!-- <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
                            {{anoBailleur.annalyse_d_m_p.demande_ano.annalyse_dossier.dossier_candidature.numero_dossier || 'Non renseigné'}}</td> -->
                        <td @dblclick="afficherModificationPV(pv.id)">
                            {{pv.cotation_id || 'Non renseigné'}}</td>
                        <td @dblclick="afficherModificationPV(pv.id)">
                            {{pv.reference || 'Non renseigné'}}</td>
                        <td >
                            <a v-if="pv.fichier" :href="pv.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>


                        <td>
                            <button class="btn btn-info btn-mini" v-if="pv.avie==null">En attende</button>
                            <button class="btn btn-success btn-mini" v-else-if="pv.avie== 1">Non Objection</button>
                            <button class="btn btn-danger btn-mini" v-else>Objection</button>
                        </td>


                        <td>
                        <div class="btn-group">

                            <a href="#infoPV" @click.prevent="infoPVAffiche(pv.reference)" data-toggle="modal" class="btn"><span class=""><i class="icon-folder-open" ></i></span></a>
                            <button @click.prevent="supprimerProceVerbal(pv.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

 <div id="ajouterObservationBailleur" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter le PV</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                    <!--  <div class="control-group">
                        <label class="control-label">Reference PV</label>
                        <div class="controls">
                            <input type="text" v-model="formPv.ref_pv" class="span">
                        </div>
                    </div>-->

                     <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file"   @change="OnchangeFichier" />
              </div>
            </div>
                   

                    

                </form>
            </div>
            <div class="modal-footer">
                <a
                        @click.prevent="ajouterPV"
                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

              <div id="modificationPV" class="modal hide">
                  <div class="modal-header">
                      <button data-dismiss="modal" class="close" type="button">×</button>
                      <h3>Modification de PV</h3>
                  </div>
                  <div class="modal-body">
                      <form class="form-horizontal">

                            <div class="control-group">
                              <label class="control-label">Reference PV</label>
                              <div class="controls">
                                  <input type="text" v-model="edite_pv.reference" class="span">
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
                  <div class="modal-footer">
                      <a
                              @click.prevent="modificationProceVerbal"
                              class="btn btn-primary"
                              href="#"

                      >Valider</a>
                      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
                  </div>
              </div>

              <div id="infoPV" class="modal hide grdirModalActeEffet">
                  <div class="modal-header">
                      <button data-dismiss="modal" class="close" type="button">×</button>
                      <h3>PROCES-VERBAL DE JUGEMENT DES OFFRES</h3>
                  </div>
                  <div class="modal-body" v-if="resultaAnalysePv">
                      <h4 class="text-center">ATTRIBUTION DU MARCHE</h4>
                      <div>
                          Suivant les résultats de l’évaluation des offres présentés par le rapporteur dans le
                          tableau ci-dessus, il apparaît que le soumissionnaire <b v-if="resultaAnalysePv.length>0">{{resultaAnalysePv[0].dossier_candidature.nom_cand }}</b> propose
                          l’offre conforme la moins-disante.
                      </div>
                      <h4 class="text-center">TABLEAU RECAPITULATIF DE LA COMPARAISON DES OFFRES</h4>
                      <table class="table table-bordered table-striped">
                          <thead>
                          <tr>
                              <th>Nom des Soumissionnaires </th>
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
                                  {{item.dossier_candidature.nom_cand || 'Non renseigné'}}</td>
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

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{

  imagePDF:"",
  namePDF:"",
  fichierPDF:"",
  selectedFile:"",
  resultaAnalysePv:[],

 edite_pv:""

        }
    },

    props:["macheid"],
created(){


},
 computed: {
     ...mapGetters("bienService", [ "typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches", "gettersCotations",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","getterAnalyseDossiers","typeAnalyses", "analyseDossiers","text_juridiques"
                ]),
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
            
},
methods:{

    ...mapActions('bienService',['ajouterProceVerbal',
    'supprimerProceVerbal','modificationProceVerbalOffre']),


afficherModificationPV(index){
       this.$('#modificationPV').modal({
           backdrop: 'static',
           keyboard: false
       });
       this.edite_pv = this.getterProceVerballe.find(item=>item.id==index);
   }  ,

   
            infoPVAffiche(ref){
                this.resultaAnalysePv=[]
                let resulta=this.getterAnalyseDossiers.filter(item=>item.reference_pv==ref);
                this.resultaAnalysePv=this.resultaAnalysePv.concat(resulta)
                if (this.resultaAnalysePv.length>0){
                    this.resultaAnalysePv.sort(function (a, b) {
                        return a.note_analyse - b.note_analyse;
                    }).reverse()
                }
                //console.log(this.resultaAnalysePv)
            },

          OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                console.log(this.selectedFile)
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

               ajouterPV(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('cotation_id', this.formLot.cotation_id);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                //console.log(formData)
                this.ajouterProceVerbal(formData,config);
            },

                 modificationProceVerbal(){
                const formData = new FormData();
                formData.append('reference', this.edite_pv.reference);
                formData.append('id', this.edite_pv.id);
                formData.append('cotation_id', this.edite_pv.cotation_id);
                console.log(formData)
                if ( this.selectedFile!==""){
                    formData.append('fichier', this.selectedFile, this.selectedFile.name);
                }
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.modificationProceVerbalOffre(formData,config)
                this.$('#modificationPV').modal('hide');
                this.getAnalyseDossier()
                this.getDemandeAno()
                this.getAnalyseDMP()
                this.getAnoDMPBailleur()
            },
}
    
}
</script>