


<template>
    <div>
                  
      
        <!-- debut de liste analyse  -->
          <h4>Liste des candidats Selectionnés</h4>
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                    <tr>
                      
                        <th>Nom candidat </th>
                         <th>Note candidat</th>
                        <th>Rang du candidat</th>
                        <th>Date Analyse </th>
                        <th>Type d'analyse</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="(appelOffre, index) in listeCandidatSelectionner(macheid)"
                        :key="appelOffre.id">
                         
                             
                          
                        <td @click="afficherCandidatSelectionner(index)">
                            {{afficherNomDossierCandidat(appelOffre.candidat_selection_id) || 'Non renseigné'}}</td>
                       
                          <!-- <td @click="afficherCandidatSelectionner(index)">
                            {{afficherNomCandidat(afficherCandidatId(appelOffre.candidat_selection_id)) || 'Non renseigné'}}</td> -->
                         <td @click="afficherCandidatSelectionner(index)">
                            {{appelOffre.note_analyse || 'Non renseigné'}}</td>
                         <td @click="afficherCandidatSelectionner(index)">
                            {{appelOffre.rang_analyse || 'Non renseigné'}}</td>
                       
                        <td @click="afficherCandidatSelectionner(index)">
                            {{formaterDate(appelOffre.date_analyse) || 'Non renseigné'}}</td>
                       
                           
                        <td @click="afficherCandidatSelectionner(index)">
                            {{appelOffre.type_analyse.libelle || 'Non renseigné'}}</td>
                        
                        <!--<td @click="afficherCandidatSelectionner(index)">
                            <button class="btn btn-info btn-mini" v-if="avisPv(appelOffre.reference_pv)==null">En attende</button>
                            <button class="btn btn-success btn-mini" v-else-if="avisPv(appelOffre.reference_pv)== 1">Non Objection</button>
                            <button class="btn btn-danger btn-mini" v-else>Objection</button>
                        </td>-->   
                
                            <div class="btn-group">
                                <button  @click.prevent="modification1(index)" v-if="afficherCandidatSelectionnerAtrribue(appelOffre.jugement_id) == 1" class="btn btn-success " title=" déselectionné le candidat">
                                <span class=""><i class="icon-ok"></i></span></button> 
                             
                            <button @click.prevent="supprimerCandidatSelectionner(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>

                        </div>


                        <!-- <td @click="afficherCandidatSelectionner(index)">

                            {{appelOffre.affichierReferenceAppelOffre|| 'Non renseigné'}}</td> -->
                        

                        

                    </tr>
                    </tbody>
                </table>
<!--                 
                  <div class="modal-footer-right">
                <button data-dismiss="modal" class="btn btn-warning" @click.prevent="ajouterCandidatSelectionner()"  v-show="actif">Valider la selection du candidat</button>
                </div> -->

        <!--fin de dossier analyse -->

        <!-- debut formulaire ajout analyse -->


          




        <!-- fin formulaire ajout analyse  -->



        
        <div id="modifierCandidatSelectionner" class="modal hide grdirModalAnalyse">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification du dossier Analyse</h3>
            </div>
            
                  <table class="table table-bordered table-striped">
                      <tr>

                         
                          <td>
                               <div class="control-group">
                        <label class="control-label">Reference Avis de recrutement</label>
                        <div class="controls">
                          <input
                                    type="text"
                                    :value="affichierReferenceAppelOffre(macheid)"
                                    class="span"
                                       readonly
                            />
                        </div>
                        </div>
                          </td>
                        

                          
                       <td>
                     
                            <div class="control-group">
                        <label class="control-label">Dossier candidat.</label>
                        <div class="controls">
                          <select v-model="edite_analyse_dossier.candidat_selection_id" class="span">
                                <option v-for="varText in dossierPersonnels" :key="varText.id"
                                        :value="varText.id">{{varText.nom_candidat}} {{varText.prenom_candidat}}</option>
                            </select>
                        
                        </div>
                    </div>
                         </td>

                          <td colspan="">
                    <div class="control-group">
                        <label class="control-label">Type analyse</label>
                        <div class="controls">
                            <select v-model="edite_analyse_dossier.type_analyse_id" class="span">
                                <option v-for="plans in typeAnalyses" :key="plans.id"
                                        :value="plans.id">{{plans.libelle}}</option>
                            </select>
                        </div>
                    </div>
                          </td>
                          </tr>
                      <tr>

                        <td>

                     <div class="control-group">
                        <label class="control-label">Note</label>
                        <div class="controls">
                            <input type="text"
                                   v-model="edite_analyse_dossier.note_analyse"
                                   class="span"
                                   placeholder=""
                            />
                        </div>
                    </div>
                          </td>
                          <td>

                    <div class="control-group">
                        <label class="control-label">Rang analyse :</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_analyse_dossier.rang_analyse"
                                    class="span"
                                    placeholder="Rang d'analyse"
                            />
                        </div>
                    </div>
                          </td>
                      
                     
       

                               <td >
                    <div class="control-group">
                        <label class="control-label">Date :</label>
                        <div class="controls">
                            <input type="date"
                                   v-model="edite_analyse_dossier.date_analyse"
                                   class="span"
                                   placeholder=""
                            />
                            <input type="hidden" v-model="edite_analyse_dossier.difference_personnel_bienService"/>
                        </div>
                    </div>
                          </td>
                      </tr>
                  </table>


                    <!-- <div class="control-group">
                        <label class="control-label">Decision</label>
                        <div class="controls">
                            <select   v-model="edite_analyse_dossier.decision" >
                                <option value="1">Non objection</option>
                                <option value="2">Objection</option>
                            </select>
                        </div>
                    </div> -->
                
            
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modifierCandidatSelectionner()" href="#">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <notifications/>
        
    </div>
    
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
//import PrettyCheck from 'pretty-checkbox-vue/check';
import moment from 'moment';
export default {
    
    data(){
        return{
            // formAnalyseDossier:{
            //       date_analyse:"",
            //             // appel_offre_id:"",
            //             rang_analyse:"",
            //          appel_offre_id:"",
            //            // motif:"",
            //             note_analyse:"",
            //             // dossier_candidat_id:"",
            //             type_analyse_id: "",
            //             difference_personnel_bienService:"personnel",
            //              candidat_selection_id:""
            // },
            edite_analyse_dossier:"",
         actif:""
        }
    },
    props:["macheid"],
    created(){
    },
    computed:{
       ...mapGetters("bienService", ["appelOffres","typeCandidat",'acteDepense',
       "getMarchePersonnaliser","appelOffres","selectionner_candidats","gettersPersonnaliserRapportJugement",
                "modePassations", "procedurePassations","getterDossierCandidats","marches", "gettersCotations",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","listeJugementPersonnel","getterAnalyseDossiers","typeAnalyses", "analyseDossiers","text_juridiques"
               ,"gettersCotationPersonnaliser" ]),
             ...mapGetters('personnelUA', ['acteur_depenses','dossierPersonnels']),
                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
    //         ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
    //             'types_financements']) ,
                
    // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
        
         // ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
             
 afficherCandidatSelectionnerAtrribue() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersPersonnaliserRapportJugement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },


            
 listeCandidatSelectionner () {
            return macheid => {
                if (macheid != "") {

                    return this.selectionner_candidats.filter(idmarche => idmarche.marche_id == macheid && this.afficherCandidatSelectionnerAtrribue(idmarche.jugement_id)==1)
                }
            }
        },







    afficherNomDossierCandidat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.dossierPersonnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_candidat.concat(' ', qtereel.prenom_candidat);
      }
      return 0
        }
      };
    },


     afficherNomCandidatId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.dossierPersonnels.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
               


afficherCandidat () {
                return id => {
                    if (id != "") {
                        // console.log("Marche lettre inviation marche")
                        return this.dossierPersonnels.filter(idmarche => idmarche.marche_id == id)
                     }
             }
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
    
    //  listeAppel() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.gettersCotations.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.ref_appel;
    //   }
    //   return 0
    //     }
    //   };
    // },
    },
    methods:{
        ...mapActions('bienService',['supprimerCandidatSelectionner',"supprimerCandidatSelectionnerDeselection",
       'modifierCandidatSelectionner','modifierAnalyseDossier']),
        
        



        
            modification1(index){

     
             this.edite_analyse_dossier = this.listeCandidatSelectionner(this.macheid)[index];
            let marcheObjet1=this.selectionner_candidats.find(candidatSelect=>candidatSelect.id==this.edite_analyse_dossier.id)

                // this.ajouterCandidatSelectionner(nouvelObjet10)
                  
                  this.supprimerCandidatSelectionnerDeselection(marcheObjet1.id).then(data=>{

                     let marcheObjet=this.getterAnalyseDossiers.find(candidatSelect=>candidatSelect.id==this.edite_analyse_dossier.jugement_id)
                    marcheObjet.attribue = 0
                    this.modifierAnalyseDossier(marcheObjet)
                    console.log(data)
                  })
                  
                     
            },
          

       

         modifierCandidatSelectionner(){

              var nouvelObjet1 ={
                       ...this.edite_analyse_dossier,
                       marche_id:this.macheid,
                        appel_offre_id :this.affichierAppelOffreid(this.macheid),
                      // candidat_selection_id:this.afficherCandidat(this.macheid)
                   }
                this.modifierCandidatSelectionner(nouvelObjet1)
                this.$('#modificationAajouterAnalys01').modal('hide');
            },

         afficherCandidatSelectionner(index){
                this.$('#modifierCandidatSelectionner').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edite_analyse_dossier = this.listeCandidatSelectionner(this.macheid)[index];
            },

            //   modifierCandidatSelectionner(){
            //     this.modifierAnalyseDossier(this.edite_analyse_dossier)
            //     this.$('#modifierCandidatSelectionner').modal('hide');
            // },
// formatage de date 
formaterDate(date){
    return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
},
    }
}
</script>

<style scoped>
 .grdirModalAnalyse{
         width: 900px;
 margin: 0 -500px;
 height: 350px;
    }
</style>