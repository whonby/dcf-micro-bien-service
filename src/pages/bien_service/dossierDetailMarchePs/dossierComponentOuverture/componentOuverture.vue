<template>
        <div>


        <div align="right">

            <a href="#ajouterCojoB" data-toggle="modal" class="btn btn-primary">Ajouter</a>
        </div>
            <!-- debut de list  -->
            <!-- <div align="right">
                      <div class="widget-content">

                          <a href="#ajouterCojo" data-toggle="modal" class="btn btn-warning" >Ajouter </a>


                      </div>
                           
                  </div> -->
                  <div align="left">
                  <h4> Infomation sur la cojo </h4>
                  </div>
                  <table class="table table-bordered table-striped" v-if="macheid">
                      <thead>
                      <tr>
                           <!-- <th>Entreprise</th> -->
                          <th>Date de composition </th>
                          <th>Date d'ouverture</th>
                          <th>Nombre de particiapnts</th>
                          <th>Action</th>
                      </tr>
                      
                      </thead>
                      <tbody>
                      <tr class="odd gradeX" v-for="(appelOffre, index) in listeCojo(macheid.id)"
                          :key="appelOffre.id">
                         
                              <!-- <td @click="afficheBouttonTechCojo(index)">
                            {{affichierNomEntreprise(appelOffre.entreprise_id) || 'Non renseigné'}}</td> -->

                          <td @click="afficheBouttonTechCojo(index)">
                              {{formaterDate(appelOffre.date_composition) || 'Non renseigné'}}
                          </td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{formaterDate(appelOffre.date_ouverture) || 'Non renseigné'}}</td>
                         
                          <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.nbr_participant || 'Non renseigné'}}</td>

                          <!-- <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.cotation.ref_offre || 'Non renseigné'}}</td> -->
                          <div class="btn-group">
                              <button @click.prevent="supprimerCojo(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                  <span class=""><i class="icon-trash"></i>Supprimer</span></button>

                          </div>

                      </tr>
                      </tbody>
                  </table>



                 
            <!-- fin du list -->


            <!-- add formulaire cojo -->
              <div id="ajouterCojoB" class="modal hide grdtaill">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter COJO</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                     <div class="control-group">
                        <label class="control-label">Référence des offres</label>
                        <div class="controls">
                            <!-- <select v-model="formDataCojo.cotation_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_offre}}</option>
                            </select> -->
                             <input
                                    type="text"
                                    :value="affichierReferenceAppelOffre(macheid)"
                                    class="span"
                                   readonly
                            />
                            
                        </div>
                        </div>

                    <!-- <div class="control-group">
                        <label class="control-label">Destinataire.</label>
                        <div class="controls">
                          <select v-model="formDataCojo.lettre_invitation_id" class="span">
                                <option v-for="varText in afficherEntrepriseRecep(macheid)" :key="varText.id"
                                        :value="varText.objetEntreprise.id">{{varText.objetEntreprise.raison_sociale}}</option>
                            </select>
                        
                        </div>
                    </div> -->

                    <div class="control-group">
                        <label class="control-label">Date d'ouverture</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formDataCojo.date_ouverture"
                                    class="span"
                                       
                            />
                        </div>
                    </div>
                    <!-- <div class="control-group">
                          <label class="control-label">Controleur finnancier</label>
                        <div class="controls">
                            <input disabled
                                    type="text"
                                    v-model="formDataCojo.controleur_finnancier"
                                    class="span"
                                    placeholder="Controller Finnancier"
                            />
                        </div>
                    </div> -->
                   <!-- <div class="control-group">
                        <label class="control-label">Condition</label>
                        <div class="controls">
                            <select v-model="formDataCojo.condition_id" class="span">
                                <option v-for="plans in conditions" :key="plans.id"
                                        :value="plans.id">{{plans.libelle}}</option>
                            </select>
                        </div>
                    </div>-->


                    <div class="control-group">
                        <label class="control-label">Date de composition</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formDataCojo.date_composition"
                                    class="span"
                
                            />
                        </div>
                    </div>




                    <div class="control-group">
                        <label class="control-label">Nombre de participants</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formDataCojo.nbr_participant"
                                    class="span"
                            />
                            <input type="hidden" v-model="formDataCojo.difference_personnel_bienService"/>
                        </div>
                    </div>


                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterCojoMarche()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Annuler</a> </div>
        </div>

            <!-- end formulaire cojo  -->

            <!-- bigin modifie cojo  -->
             <div id="modificationCojo" class="modal hide grdtaill">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification de la COJO</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                     <div class="control-group">
                        <label class="control-label">Référence de l'offre</label>
                        <div class="controls">
                            <!-- <select v-model="edite_cojo.cotation_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_offre}}</option>
                            </select> -->
                             <input
                                    type="text"
                                    :value="affichierReferenceAppelOffre(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>

                    <!-- <div class="control-group">
                        <label class="control-label">Entreprise.</label>
                        <div class="controls">
                          <select v-model="edite_cojo.entreprise_id" class="span">
                                <option v-for="varText in afficherEntrepriseRecep(macheid)" :key="varText.id"
                                        :value="varText.objetEntreprise.id">{{varText.objetEntreprise.raison_sociale}}</option>
                            </select>
                        
                        </div>
                    </div> -->


                    <div class="control-group">
                        <label class="control-label">Date d'ouverture</label>
                        <div class="controls">
                            <input 
                                   type="date"
                                   v-model="edite_cojo.date_ouverture"
                                   class="span"

                            />
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date de composition</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_cojo.date_composition"
                                    class="span"

                            />
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Nombre de participants</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_cojo.nbr_participant"
                                    class="span"
                            />
                             <input type="hidden" v-model="formDataCojo.difference_personnel_bienService"/>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationCojo()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
            <!-- end modifier cojo -->

            <!-- bigin add formulaire membreCojo -->


            <!-- end formulaire membreCojo  --->
            <!-- debut modification de cojo membre  -->
            <notifications/>
  
            <!--fin de modification de cojo membre  -->
        </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment';
export default {
    data(){
        return{
           
            formDataCojo:{
                        date_ouverture:"",
                        date_composition:"",
                        num_dossier_appel_offre:"",
                        nbr_participant:"",
                        appel_offre_id:"",
                        difference_personnel_bienService:"bienservice"
            },
            
            edite_cojo:"",
        }
    },
    props:["macheid"],
    created(){
    },
    computed:{
        ...mapGetters('bienService',['getterCojos',"gettersOuverturePersonnaliser",
        'gettersCotations','appelOffres',
        'gettersCojoPersonnaliser','gettersCotationPersonnaliser']),

  ...mapGetters('personnelUA', ['acteur_depenses']),
   ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),

         listeCojo() {
                return macheid => {
                    if (macheid != "") {
                    //   let Objet=  this.getterCojos.find(idmarche => idmarche.lettre_invitation.appel_offre.macheid == macheid);
                    //     let vM=this;
                    //     if(Objet!=undefined){
                    //         vM.idcojo=Objet.id
                    //     }
                        return this.gettersOuverturePersonnaliser.filter(idmarche => idmarche.marche_id == macheid)
                    }
                }
            },

        //  afficherEntrepriseRecep () {
        //         return id => {
        //             if (id != "") {
        //                 console.log("Marche lettre inviation marche")
        //                 return this.gettersCotationPersonnaliser.filter(idmarche => idmarche.marche_id == id)
        //              }
        //      }
        //     },
    //         affichierNomEntreprise() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.raison_sociale;
    //   }
    //   return 0
    //     }
    //   };
    // },
// listeAppelOffre() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.gettersCotations.find(qtreel => qtreel.marche_id == id);

//       if (qtereel) {
//         return qtereel.ref_offre;
//       }
//       return 0
//         }
//       };
//     },
// listeAppelOffreId() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.gettersCotations.find(qtreel => qtreel.marche_id == id);

//       if (qtereel) {
//         return qtereel.id;
//       }
//       return 0
//         }
//       };
//     },

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
//   listeAppelOffre(){
//                 return  macheid=>{
//                     if (macheid!="") {
//                         //console.log("Marche appel offre")
//                        const vM=this;
//                         let Objet=this.gettersCotations.find( idmarche => idmarche.marche_id == macheid)
//                        // console.log("Marche appel offre 10")
//                         if(Objet!=undefined){
//                            // vM.formDossierCadidature.appel_offre_id=Objet.id;
//                            // vM.formAnalyseDossier.appel_offre_id = Objet.id;
//                             //vM.formLot.appel_offre_id=Objet.id;
//                            // vM.formAno.appel_offre_id = Objet.id
//                             //vM.formLettre.appel_offre_id=Objet.id;
//                             vM.formDataCojo.cotation_id=Objet.ref_offre;
//                         }
//                        // console.log(Objet)
//                     return this.gettersCotations.filter( idmarche => idmarche.marche_id == macheid)
//                     }
//                 }
//             },
          
    },
    methods:{
        ...mapActions('bienService',['supprimerCojo',
        'ajouterCojo', 'modifierCojo']),

            //  lettreInvitationAMarche: function () {
            //     return macheid => {
            //         if (macheid != "") {
                        
            //             return this.getterLettreInvitation.filter(idmarche => idmarche.appel_offre.macheid == macheid)
            //         }
            //     }
            // },
            // c'est une fonction pour afficher les membres
              
                afficheBouttonTechCojo(index){
        this.$('#modificationCojo').modal({
            backdrop: 'static',
            keyboard: false
        });
        this.edite_cojo = this.listeCojo(this.macheid.id)[index];

        //this.edite_lot.appel_offre_id=this.edite_lot. modifierDemandeAno
    },
    
  
  
     ajouterCojoMarche(){
         var nouvelObjet ={
             ...this.formDataCojo,
             marche_id:this.macheid.id,
             appel_offre_id :this.affichierAppelOffreid(this.macheid)

         }
              this.ajouterCojo(nouvelObjet)
                this.formDataCojo={
                        appel_offre_id:"",
                
                date_ouverture:"",
                        date_composition:"",
                        num_dossier_appel_offre:"",
                        nbr_participant:"",
                         difference_personnel_bienService:"bienservice"
                }
            },
// la fonction pour afficher le modal du cojo
           
 modificationCojo(){
      var nouvelObjet1 ={
             ...this.edite_cojo,
             marche_id:this.macheid.id,
             appel_offre_id :this.affichierAppelOffreid(this.macheid)

         }
                this.modifierCojo(nouvelObjet1)
                this.$('#modificationCojo').modal('hide');
            },
            // fonction pour formater la date
            formaterDate(date){
               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY"); 
            }
    }
}
</script>

<style scoped>

</style>