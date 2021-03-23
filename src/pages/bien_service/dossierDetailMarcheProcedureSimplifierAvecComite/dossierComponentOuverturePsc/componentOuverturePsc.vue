<template>
        <div>

            <!-- debut de list  -->
            <div align="right">
                      <div class="widget-content">

                          <a href="#ajouterCojo" data-toggle="modal" class="btn btn-warning" >Ajouter </a>

                      </div>
                           
                  </div>
                  <h4> Infomation sur la COJO</h4>
            
                  <table class="table table-bordered table-striped" v-if="macheid">
                      <thead>
                      <tr>
          
                          <th>Date de Composition</th>
                          <th>Date d'invitation</th>
                          <th>Numéro dossier d'appel d'offre</th>
                          <th>Nombre de participant</th>
           
                          <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr class="odd gradeX" v-for="(appelOffre, index) in listeCojo(macheid)" 
                          :key="appelOffre.id">
                          <!--<td listeMembreCojo @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.controleur_finnancier || 'Non renseigné'}}</td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.dmp || 'Non renseigné'}}</td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.autorite_contractante || 'Non renseigné'}}</td>-->
                          <td @click="afficheBouttonTechCojo(index)">
                              {{formaterDate(appelOffre.date_composition) || 'Non renseigné'}}
                          </td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{formaterDate(appelOffre.date_invitation) || 'Non renseigné'}}</td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.num_dossier_appel_offre || 'Non renseigné'}}</td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.nbr_participant || 'Non renseigné'}}</td>

                          <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.lettre_invitation.ref_lettre || 'Non renseigné'}}</td>
                          <div class="btn-group">
                              <button @click.prevent="supprimerCojo(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                  <span class=""><i class="icon-trash"></i>  Supprimer</span></button>

                          </div>

                      </tr>
                      </tbody>
                  </table>



                 
            <!-- fin du list -->


            <!-- add formulaire cojo -->
              <div id="ajouterCojo" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter COJO</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Numéro du dossier d'appel d'offre</label>
                        <div class="controls">
                            <input disabled
                                   type="text"
                                   v-model="formDataCojo.num_dossier_appel_offre"
                                   class="span"
                            />
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Lettre d'invitation</label>
                        <div class="controls">
                            <select v-model="formDataCojo.lettre_invitation_id" class="span" disabled>
                                <option v-for="plans in lettreInvitationAMarche(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_lettre}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label">Date d'invitation</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formDataCojo.date_invitation"
                                    class="span"
                                       disabled
                            />
                        </div>
                    </div>
                    <div class="control-group">
                          <label class="control-label">Contrôleur Financier</label>
                        <div class="controls">
                            <input disabled
                                    type="text"
                                    v-model="formDataCojo.controleur_finnancier"
                                    class="span"
                                    placeholder="Contrôleur Financier"
                            />
                        </div>
                    </div>
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
                 :min="formDataCojo.date_invitation"
                            />
                        </div>
                    </div>




                    <div class="control-group">
                        <label class="control-label">Nombre de participant</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formDataCojo.nbr_participant"
                                    class="span"
                            />
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
             <div id="modificationCojo" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification de la COJO</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                    <div class="control-group">
                        <label class="control-label">Numéro du dossier d'appel d'offre</label>
                        <div class="controls">
                            <input disabled
                                    type="text"
                                    v-model="edite_cojo.num_dossier_appel_offre"
                                    class="span"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Lettre d'invitation</label>
                        <div class="controls">
                            <select v-model="edite_cojo.lettre_invitation_id" class="span" disabled>
                                <option v-for="plans in lettreInvitationAMarche(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_lettre}}</option>
                            </select>
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date d'invitation</label>
                        <div class="controls">
                            <input disabled
                                   type="date"
                                   v-model="edite_cojo.date_invitation"
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
                        <label class="control-label">Nombre de participant</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_cojo.nbr_participant"
                                    class="span"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationCojo()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Annuler</a> </div>
        </div>
            <!-- end modifier cojo -->

            <!-- bigin add formulaire membreCojo -->


            <!-- end formulaire membreCojo  --->
            <!-- debut modification de cojo membre  -->
            
  
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
                  lettre_invitation_id:"",
                        condition_id:'',
                        controleur_finnancier:"",
                        dmp:"",
                        autorite_contractante:"",
                        date_invitation:"",
                        date_composition:"",
                        num_dossier_appel_offre:"",
                        nbr_participant:""
            },
            
            edite_cojo:"",
        }
    },
    props:["macheid"],
    created(){
    },
    computed:{
        ...mapGetters('bienService',['getterCojos']),
  ...mapGetters('personnelUA', ['acteur_depenses']),
        
          
    },
    methods:{
        ...mapActions('bienService',['supprimerCojo',
        'ajouterCojo', 'modifierCojo']),
         listeCojo: function () {
                return macheid => {
                    if (macheid != "") {
                      let Objet=  this.getterCojos.find(idmarche => idmarche.lettre_invitation.appel_offre.marche_id == macheid);
                        let vM=this;
                        if(Objet!=undefined){
                            vM.idcojo=Objet.id
                        }
                        return this.getterCojos.filter(idmarche => idmarche.lettre_invitation.appel_offre.marche_id == macheid)
                    }
                }
            },
             lettreInvitationAMarche: function () {
                return macheid => {
                    if (macheid != "") {
                        //console.log("Marche lettre inviation marche")
                        return this.getterLettreInvitation.filter(idmarche => idmarche.appel_offre.marche_id == macheid)
                    }
                }
            },
            // c'est une fonction pour afficher les membres
              
                afficheBouttonTechCojo(index){
        this.$('#modificationCojo').modal({
            backdrop: 'static',
            keyboard: false
        });
        this.edite_cojo = this.getterCojos[index];
        //this.edite_lot.appel_offre_id=this.edite_lot. modifierDemandeAno
    },
  
     ajouterCojoMarche(){
              this.ajouterCojo(this.formDataCojo)
                this.formDataCojo={
                        lettre_invitation_id:"",
                        condition_id:'',
                        controleur_finnancier:"",
                        dmp:"",
                        autorite_contractante:"",
                        date_invitation:"",
                        date_composition:"",
                        num_dossier_appel_offre:"",
                        nbr_participant:""
                }
            },
// la fonction pour afficher le modal du cojo
           
 modificationCojo(){
                this.modifierCojo(this.edite_cojo)
                this.$('#modificationCojo').modal('hide');
            },
            // fonction pour formater la date
            formaterDate(date){
               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY"); 
            }
    }
}
</script>