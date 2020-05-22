<template>
        <div>

            <!-- debut de list  -->
            <div align="right">
                      <div class="widget-content">

                          <a href="#ajouterCojo" data-toggle="modal" class="btn btn-warning" >Ajouter </a>


                      </div>
                           
                  </div>
                  <h4> Infomation sur la cojo </h4>
            
                  <table class="table table-bordered table-striped" v-if="macheid">
                      <thead>
                      <tr>
                           <th>Ref offre</th>
                           <th>Montant </th>
                          <th>Date Composition </th>
                          <th>Date ouverture</th>
                          <th>Nmbr particiapnt</th>
                          <th>Action</th>
                      </tr>
                      
                      </thead>
                      <tbody>
                      <tr class="odd gradeX" v-for="(appelOffre, index) in listeCojo(macheid)"
                          :key="appelOffre.id">
                           <td @click="afficheBouttonTechCojo(index)">
                              {{listeAppelOffreLibelle(appelOffre.appel_offre_id)|| 'Non renseigné'}}</td>

                          <td listeMembreCojo @click="afficheBouttonTechCojo(index)">
                              {{formatageSomme(parseFloat( appelOffre.montant_ouverture)) || 'Non renseigné'}}</td>

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
                                  <span class=""><i class="icon-trash"></i></span></button>

                          </div>

                      </tr>
                      </tbody>
                  </table>



                 
            <!-- fin du list -->


            <!-- add formulaire cojo -->
              <div id="ajouterCojo" class="modal hide grdtaill">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Cojo</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">



                     <div class="control-group">
                        <label class="control-label">Reference offre</label>
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
                        <label class="control-label">Lettre Invitation</label>
                        <div class="controls">
                            <select v-model="formDataCojo.lettre_invitation_id" class="span" disabled>
                                <option v-for="plans in lettreInvitationAMarche(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_lettre}}</option>
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
                        <label class="control-label">Nbre de participants</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formDataCojo.nbr_participant"
                                    class="span"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Montant</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formDataCojo.montant_ouverture"
                                    class="span"
                            />
                        </div>
                    </div>


                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterCojoMarche()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>

            <!-- end formulaire cojo  -->

            <!-- bigin modifie cojo  -->
             <div id="modificationCojo" class="modal hide grdtaill">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification de cojo</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                     <div class="control-group">
                        <label class="control-label">Reference offre</label>
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
                        <label class="control-label">Date composition</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_cojo.date_composition"
                                    class="span"

                            />
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Nbre de participants</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_cojo.nbr_participant"
                                    class="span"
                            />
                        </div>
                    </div>

                     <div class="control-group">
                        <label class="control-label">Montant</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_cojo.montant_ouverture"
                                    class="span"
                            />
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
import {formatageSomme} from '../../../../../src/Repositories/Repository'
import moment from 'moment';
export default {
    data(){
        return{
           
            formDataCojo:{
                //   lettre_invitation_id:"",
                //         condition_id:'',
                //         controleur_finnancier:"",
                //         dmp:"",
                        montant_ouverture:"",
                        date_ouverture:"",
                        date_composition:"",
                        num_dossier_appel_offre:"",
                        nbr_participant:"",
                        appel_offre_id:""
            },
            
            edite_cojo:"",
        }
    },
    props:["macheid"],
    created(){
    },
    computed:{
        ...mapGetters('bienService',['getterCojos','gettersCotations','appelOffres',
        'gettersCojoPersonnaliser']),
  ...mapGetters('personnelUA', ['acteur_depenses']),
  

         listeCojo() {
                return macheid => {
                    if (macheid != "") {
                    //   let Objet=  this.getterCojos.find(idmarche => idmarche.lettre_invitation.appel_offre.macheid == macheid);
                    //     let vM=this;
                    //     if(Objet!=undefined){
                    //         vM.idcojo=Objet.id
                    //     }
                        return this.getterCojos.filter(idmarche => idmarche.marche_id == macheid)
                    }
                }
            },
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

  listeAppelOffreLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ref_appel;
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
        this.edite_cojo = this.listeCojo(this.macheid)[index];
        //this.edite_lot.appel_offre_id=this.edite_lot. modifierDemandeAno
    },
    
  
  
     ajouterCojoMarche(){
         var nouvelObjet ={
             ...this.formDataCojo,
             marche_id:this.macheid,
             appel_offre_id :this.affichierAppelOffreid(this.macheid)

         }
              this.ajouterCojo(nouvelObjet)
                this.formDataCojo={
                        appel_offre_id:"",
                        // condition_id:'',
                        // controleur_finnancier:"",
                        // dmp:"",
                        montant_ouverture:"",
                        date_ouverture:"",
                        date_composition:"",
                        num_dossier_appel_offre:"",
                        nbr_participant:""
                }
            },
// la fonction pour afficher le modal du cojo
           
 modificationCojo(){
      var nouvelObjet1 ={
             ...this.edite_cojo,
             marche_id:this.macheid,
             appel_offre_id :this.affichierAppelOffreid(this.macheid)

         }
                this.modifierCojo(nouvelObjet1)
                this.$('#modificationCojo').modal('hide');
            },
            // fonction pour formater la date
            formaterDate(date){
               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY"); 
            },

            // formatage du montant

            formatageSomme:formatageSomme
    }
}
</script>

<style scoped>
/* .grdtaill{
 width: 1000px;
 margin: 0 -530px;
 height: 350px;
} */
</style>