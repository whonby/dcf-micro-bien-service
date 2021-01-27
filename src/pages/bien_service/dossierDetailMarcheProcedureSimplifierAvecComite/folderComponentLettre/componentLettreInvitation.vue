<template>
    <div>


        <!--liste de lettre d'invitation  -->
        <h4>Liste Des Lettres</h4>
         
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                    <tr>

                        <th>Date lettre 4</th>
                        <th>Ref lettre </th>
                        <th>Destinataire</th>
                        <th>Objet de la lettre</th>
                        <th>Fichier</th>
                        <th>Date cojo</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="appelOffre in lettreInvitationAMarche(macheid)"
                        :key="appelOffre.id">
                        <td @click="afficheBouttonTechFinInvitation(appelOffre.id)">
                           {{formaterDate(appelOffre.date_lettre) || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinInvitation(appelOffre.id)">
                            {{appelOffre.ref_lettre || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinInvitation(appelOffre.id)">
                            {{appelOffre.destination || 'Non renseigné'}}</td>

                         <td @click="afficheBouttonTechFinInvitation(appelOffre.id)">
                            {{appelOffre.objet_lettre || 'Non renseigné'}}</td>
                        <td>
                            <a v-if="appelOffre.fichier" :href="appelOffre.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>
                        <td @click="afficheBouttonTechFinInvitation(appelOffre.id)">
                            {{formaterDate(appelOffre.date_cojo )|| 'Non renseigné'}}
                        </td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerLettreInvitation(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>
                        </div>

                    </tr>
                    </tbody>
                </table>

        <!-- fin de liste d'invitation -->

        <!--  debut de modal d'ajout de lettre d'invitation  -->
              <div id="ajouterLettreInvitation" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter lettre d'invitation</h3>
            </div>
            <div class="modal-body">
           
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Offre</label>
                        <div class="controls">
                            <select v-model="formLettre.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_appel}}</option>
                            </select>
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date lettre</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formLettre.date_lettre"
                                    class="span"
                                    placeholder="Saisir le nom_bailleur"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Refernece lettre</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formLettre.ref_lettre"
                                    class="span"
                                    placeholder="Saisir l"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Destinataire</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formLettre.destination"
                                    class="span"
                                    placeholder="Saisir "
                            />
                        </div>
                    </div>



                      <div class="control-group">
          <label class="control-label">Objet de lettre:</label>
            <div class="controls">
              <textarea  v-model="formLettre.objet_lettre"  class=" span" rows="" placeholder="Enter text ..."></textarea>
            </div>
          
        </div>



                    <div class="control-group">
                        <label class="control-label">Date cojo</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formLettre.date_cojo"
                                    class="span"
                                    placeholder="Saisir email bailleur"
                            />
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
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterLettreInv()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <!--fin du modal d'ajout de lettre d'invitation  -->

        <!--debut de modification de lettre d'invitation   --->

         <div id="modificationLettreInvitation" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification lettre invitation</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">


                    <div class="control-group">
                        <label class="control-label">Offre</label>
                        <div class="controls">
                            <select v-model="edite_lettre_invitation.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_appel}}</option>
                            </select>
                        </div>
                    </div>


                    <div class="control-group">
                        <label class="control-label">Date lettre</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_lettre_invitation.date_lettre"
                                    class="span"
                                    placeholder="Saisir le nom_bailleur"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Refernece lettre</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_lettre_invitation.ref_lettre"
                                    class="span"
                                    placeholder="Saisir l"
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Destination</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_lettre_invitation.destination"
                                    class="span"
                                    placeholder="Saisir "
                            />
                        </div>
                    </div>

                               <div class="control-group">
          <label class="control-label">Objet de lettre:</label>
            <div class="controls">
              <textarea  v-model="edite_lettre_invitation.objet_lettre"  class=" span" rows="" placeholder="Enter text ..."></textarea>
            </div>
                               </div>


                    <div class="control-group">
                        <label class="control-label">Date cojo</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_lettre_invitation.date_cojo"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Fichier</label>
                        <div class="controls">
                            <input type="file"   @change="OnchangeFichier" />
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationLettreInvitation()" href="#">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>
        <!-- fin de modification de lettre d' invitation   -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment';
export default {
    name:'compte',
    data(){
        return{


            edite_lettre_invitation:"",

            formLettre: {
                    appel_offre_id:"",
                    objet_lettre:"",
                    date_lettre:"",
                    ref_lettre:"",
                    destination:"",
                    date_cojo:""
                },

                 namePDF: "",
                fichierPDF: "",
                imagePDF:"",
                selectedFile:"",
               

        }
    },
    props:["macheid"],

    created(){

    },
    computed:{
        ...mapGetters('bienService',['getterLettreInvitation','appelOffres']),


         lettreInvitationAMarche: function () {
                return macheid => {
                    if (macheid != "") {
                        //console.log("Marche lettre inviation marche")
                        return this.getterLettreInvitation.filter(idmarche => idmarche.appel_offre.marche_id == macheid)
                    }
                }
            },

             
            listeAppelOffre(){
                return  marche_id=>{
                    if (marche_id!="") {
                        //console.log("Marche appel offre")
                       const vM=this;
                        let Objet=this.appelOffres.find( idmarche => idmarche.marche_id == marche_id)
                       // console.log("Marche appel offre 10")
                        if(Objet!=undefined){
                           // vM.formDossierCadidature.appel_offre_id=Objet.id;
                            //vM.formAnalyseDossier.appel_offre_id = Objet.id;
                           // vM.formLot.appel_offre_id=Objet.id;
                            //vM.formAno.appel_offre_id = Objet.id
                            vM.formLettre.appel_offre_id=Objet.id;
                           // vM.formDataCojo.num_dossier_appel_offre=Objet.ref_appel;
                        }
                       // console.log(Objet)
                    return this.appelOffres.filter( idmarche => idmarche.marche_id == marche_id)
                    }
                }

            },

    },
    methods:{
        ...mapActions('bienService',[ "ajouterLettreInvitation","modifierLettreInvitation","supprimerLettreInvitation"]),




          ajouterLettreInv(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('appel_offre_id', this.formLettre.appel_offre_id);
                formData.append('destination', this.formLettre.destination);
                formData.append('ref_lettre', this.formLettre.ref_lettre);
                formData.append('date_lettre', this.formLettre.date_lettre);
                formData.append('date_cojo', this.formLettre.date_cojo);
                formData.append('objet_lettre', this.formLettre.objet_lettre);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterLettreInvitation(formData,config)
                this.formLettre= {
                    appel_offre_id:"",
                    fichier_joint:"",
                    date_lettre:"",
                    ref_lettre:"",
                    destination:"",
                    date_cojo:"",
                objet_lettre:""
                }

                
            },

             afficheBouttonTechFinInvitation(index){
                this.$('#modificationLettreInvitation').modal({
                    backdrop: 'static',
                    keyboard: false
                });

                this.edite_lettre_invitation = this.getterLettreInvitation.find(item=>item.id==index);
            },
            modificationLettreInvitation(){
                const formData = new FormData();
                formData.append('appel_offre_id', this.edite_lettre_invitation.appel_offre_id);
                formData.append('destination', this.edite_lettre_invitation.destination);
                formData.append('ref_lettre', this.edite_lettre_invitation.ref_lettre);
                formData.append('date_lettre', this.edite_lettre_invitation.date_lettre);
                formData.append('date_cojo', this.edite_lettre_invitation.date_cojo);
                formData.append('objet_lettre',this.edite_lettre_invitation.objet_lettre);
                formData.append('id', this.edite_lettre_invitation.id);
                console.log(this.edite_lettre_invitation.id)
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                if ( this.selectedFile!==""){
                    formData.append('fichier', this.selectedFile, this.selectedFile.name);
                }
               this.modifierLettreInvitation(formData,config)
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


    //         onFichierChange(e){
    //   this.formLettre.fichier_joint = e.target.files[0]
    //  console.log(onFichierChange);
    // },

      formaterDate(date){
          return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
      }
    }
    
}
</script>