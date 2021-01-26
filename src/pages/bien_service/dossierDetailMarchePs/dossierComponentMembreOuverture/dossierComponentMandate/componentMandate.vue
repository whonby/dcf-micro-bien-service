<template>
    <div>

        <!-- liste des mandates -->

             
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                    <tr>

                        <th>Date </th>
                        <th>Matricule </th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="(appelOffre, index) in listeMantater(macheid)"
                        :key="appelOffre.id">
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{formaterDate(appelOffre.date_id) || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.matricule_m || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.nom_mandat || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.prenom_nom || 'Non renseigné'}}</td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerMandater(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>

                        </div>

                    </tr>
                    </tbody>
                </table>
        <!--  fin liste des mandates  -->

<!-- debut formulaire mandate  -->
   <div id="ajouterMantater" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter mandater</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                    <div class="control-group">
                        <label class="control-label">Lettre Invitation</label>
                        <div class="controls">
                            <select v-model="formMandater.lettre_invitation_id" class="span">
                                <option v-for="plans in lettreInvitationAMarche(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_lettre}}</option>
                            </select>
                        </div>
                    </div>

                   
                    <div class="control-group">
                        <label class="control-label">Matricule</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formMandater.matricule_m"
                                    class="span"
                                    placeholder="Matricule" v-on:keyup="rechercheMandater()"
                            />
                            <code v-if="message_mandater">{{message_mandater}}</code>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Nom</label>
                        <div class="controls">
                            <input type="text"
                                    v-model="formMandater.nom_mandat"
                                    class="span"
                                    placeholder="Nom mandater"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Prenom</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formMandater.prenom_nom"
                                    class="span"
                                    placeholder="Prenom "
                            />
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formMandater.date_id"
                                    class="span"

                            />
                        </div>
                    </div>



                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterMandaterA()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div> 
<!--fin formulaire mandate   -->


  <div id="modificationMantater" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification de mandater</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                    <div class="control-group">
                        <label class="control-label">Lettre Invitation</label>
                        <div class="controls">
                            <select v-model="editer_mandater.lettre_invitation_id" class="span">
                                <option v-for="plans in lettreInvitationAMarche(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_lettre}}</option>
                            </select>
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Matricule :</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editer_mandater.matricule_m"
                                    class="span"
                                    placeholder="Matricule"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Nom mandater :</label>
                        <div class="controls">
                            <input type="text"
                                   v-model="editer_mandater.nom_mandat"
                                   class="span"
                                   placeholder="Nom mandater"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Prenom :</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editer_mandater.prenom_nom"
                                    class="span"
                                    placeholder="Prenom "
                            />
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="editer_mandater.date_id"
                                    class="span"

                            />
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationMandater()" href="#">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div> 


    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
 import moment from 'moment';
export default {
    data(){
        return{

            formMandater:{
                 lettre_invitation_id:"",
                        date_id:"",
                        fichier_joint:"",
                        nom_mandat:"",
                        prenom_nom:"",
                    matricule_m:""

            },
            editer_mandater:{

                 lettre_invitation_id:"",
                        date_id:"",
                        fichier_joint:"",
                        nom_mandat:"",
                        prenom_nom:"",
                    matricule_m:""
            },
             message_mandater:""

        }

    },

props:["macheid"],
created(){

},
computed:{
    ...mapGetters('bienService',['getterMandate','getterLettreInvitation']),
    ...mapGetters('personnelUA', ['acteur_depenses']),




     listeMantater: function () {
                return macheid => {
                    if (macheid != "") {
                       let vM =this;
                        let Objet =this.getterMandate.find(idmarche => idmarche.lettre_invitation.appel_offre.marche_id == macheid);
                      console.log("Ok c'est la vie")
                        if(Objet!=undefined){
                            vM.formMandater.lettre_invitation_id=Objet.lettre_invitation_id
                           // vM.formDataCojo.controleur_finnancier=Objet.nom_mandat+" "+Objet.prenom_nom
                           // vM.formDataCojo.matricule=Objet.matricule_m
                           // vM.formDataCojo.date_invitation=Objet.lettre_invitation.date_lettre
                        }
                        return this.getterMandate.filter(idmarche => idmarche.lettre_invitation.appel_offre.marche_id == macheid)
                    }
                }
            },

      lettreInvitationAMarche: function () {
                return macheid => {
                    if (macheid != "") {
                         console.log("Marche lettre inviation marche")
                        return this.getterLettreInvitation.filter(idmarche => idmarche.appel_offre.marche_id == macheid)
                     }
             }
            },

},
methods:{
    ...mapActions('bienService', ['modifierMandater','ajouterMandater','supprimerMandater']),

     ajouterMandaterA(){

               this.ajouterMandater(this.formMandater)
                this.formMandater={
                        lettre_invitation_id:"",
                        date_id:"",
                        fichier_joint:"",
                        nom_mandat:"",
                        prenom_nom:"",
                    matricule_m:""
                }
            },
         modificationMandater(){
                this.modifierMandater(this.editer_mandater)
                this.$('#modificationMantater').modal('hide');
            },

            afficheBouttonTechFinMandater(index){
                 this.$('#modificationMantater').modal({
                     backdrop: 'static',
                    keyboard: false
               });

                 this.editer_mandater = this.listeMantater(this.macheid)[index];
            },

    // formdater  la  date
    formaterDate(date){
        return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
                   rechercheMandater(){
             console.log(this.formMandater.matricule_m)
              let objetMandater=this.acteur_depenses.filter(item=>item.acteur_depense.matricule==this.formMandater.matricule_m)
               console.log(objetMandater)
               if(objetMandater!=undefined){
                   if (objetMandater.length==1){
                       let acteur= this.acteur_depenses.find(item=>item.acteur_depense.matricule==this.formMandater.matricule_m)
                       this.formMandater.prenom_nom=acteur.acteur_depense.prenom
                       this.formMandater.nom_mandat=acteur.acteur_depense.nom
                       this.message_mandater=""
                   }
                   else{
                       this.message_mandater="Cette n'existe pas dans notre base de donnée "
                   }
               }
             if(this.formMandater.matricule_m==""){
                 this.formMandater.prenom_nom=""
                 this.formMandater.nom_mandat=""
                 this.message_mandater=""
             }
           },
           
},
    
}
</script>