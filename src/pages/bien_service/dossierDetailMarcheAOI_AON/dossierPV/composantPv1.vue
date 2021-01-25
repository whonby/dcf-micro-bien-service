<template>

    <div>
          <h4> liste de PV</h4>
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
                            {{pv.appel_offre.ref_appel || 'Non renseigné'}}</td>
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
                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>

                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>



                
 <div id="ajouterPv1" class="modal hide">
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
import { mapGetters,mapActions } from 'vuex';
export default {
data(){

    return{


        resultaAnalysePv:[],

    }
},


props:["macheid"],





     computed: {

            ...mapGetters("bienService", [ "gettersCotationPersonnaliser" ,"gettersCotations","gettersTransmissions"]),
            // ...mapGetters('personnelUA', ['acteur_depenses']),


               ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            // ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
            //     'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
          listePV(){
               return macheid=>{
                   if(marche_id!=""){
                       let objet=this.getterProceVerballe.filter(item=>item.macheid==macheid);
                      // console.log("PV est en cour10")
                       return objet
                   }
               }
             },
            // listePVDemandePV(){
            //     return macheid=>{
            //         if(macheid!=""){
            //             return this.getterProceVerballe.find(item=>{
            //                 if(item.appel_offre.macheid==macheid && item.avie==null ){
            //                     let vM=this;
            //                     vM.formDemande.proce_verbal_jugement_offre_id=item.id
            //                     return item;
            //                 }
            //             });
            //         }
            //     }
            // },

        
     },

     methods:{

         ...mapActions('bienService',['supprimerProceVerbal',
         'modificationProceVerbalOffre','ajouterProceVerbal']),

         
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

             afficherModificationPV(index){
       this.$('#modificationPV').modal({
           backdrop: 'static',
           keyboard: false
       });
       this.edite_pv = this.getterProceVerballe.find(item=>item.id==index);
   }  ,

    ajouterPV(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('appel_offre_id', this.formLot.appel_offre_id);
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
                formData.append('appel_offre_id', this.edite_pv.appel_offre_id);
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
