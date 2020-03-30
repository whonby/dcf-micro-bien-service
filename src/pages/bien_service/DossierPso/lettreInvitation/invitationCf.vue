
<template>
    <div>

                
                <!-- <h4>Liste des offres</h4> -->
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                   <tr>
                        <th>Date lettre</th>
                        <th>Ref lettre </th>
                        <th>Destinataire</th>
                        <th>Objet de la lettre</th>
                        <th>Fichier</th>
                        <th>Date cojo</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                  <tr class="odd gradeX" v-for="(appelOffre,index) in lettreInvitationAMarche(macheid)"
                        :key="appelOffre.id">
                        <td @click="afficheBouttonTechFinInvitation(index)">
                           {{formaterDate(appelOffre.date_lettre) || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.ref_lettre || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.destination || 'Non renseigné'}}</td>
                         <td @click="afficheBouttonTechFinInvitation(index)">
                            {{appelOffre.objet_lettre || 'Non renseigné'}}</td>
                        <td>
                            <a v-if="appelOffre.fichier" :href="appelOffre.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td>
                        <td @click="afficheBouttonTechFinInvitation(index)">
                            {{formaterDate(appelOffre.date_cojo )|| 'Non renseigné'}}
                        </td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerLettreInvitation(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>
                        </div>
                    </tr>
                    </tbody>
                </table>

              
     




<div id="ajouterLettreInvitation" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Lettre d'invitation</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                          <tr>
                            <td>
                        <div class="control-group">
                        <label class="control-label">Reférence</label>
                        <div class="controls">
                            <!-- <select v-model="formLettre.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_appel}}</option>
                            </select> -->
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
                        <label class="control-label">Date d'invitation</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formLettre.date_lettre"
                                    class="span"
                                   
                            />
                        </div>
                    </div>
                            </td>
                            </tr>
                            <tr>
                            <td >
                          <div class="control-group">
                        <label class="control-label">Refernece lettre</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formLettre.ref_lettre"
                                    class="span"
                                    
                            />
                        </div>
                    </div>
                            </td>
                            <td>
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
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" width="">
                        <div class="control-group">
                            <label class="control-label">Objet de lettre:</label>
                            <div class="controls">
                                 <textarea   v-model="formLettre.objet_lettre"  class="textarea_editor span12" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>
                            <tr>
                                
                                <td>
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
                        </td>
                        <td >
                        <div class="control-group">
                   <label class="control-label">Fichier joint:</label>
                    <div class="controls">
                     <input type="file"   @change="OnchangeFichier" />
              </div>
            </div>
                        </td>
                        </tr>
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouterLettreInv()"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



<div id="modificationL" class="modal hide grdirModalActeEffet">
           <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification  offre</h3>
            </div>
            <div class="modal-body">

                <table class="table table-bordered table-striped">
                
                            
                               <tr>
                            <td>
                        <div class="control-group">
                        <label class="control-label"></label>
                        <div class="controls">
                            <!-- <select v-model="formLettre.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_appel}}</option>
                            </select> -->
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
                        <label class="control-label">Date d'invitation</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_Lettre_invitation.date_lettre"
                                    class="span"
                                   
                            />
                        </div>
                    </div>
                            </td>
                            </tr>
                            <tr>
                            <td >
                          <div class="control-group">
                        <label class="control-label">Refernece lettre</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_Lettre_invitation.ref_lettre"
                                    class="span"
                                    
                            />
                        </div>
                    </div>
                            </td>
                            <td>
                        <div class="control-group">
                        <label class="control-label">Destinataire</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_Lettre_invitation.destination"
                                    class="span"
                                    placeholder="Saisir "
                            />
                        </div>
                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" width="">
                        <div class="control-group">
                            <label class="control-label">Objet de lettre:</label>
                            <div class="controls">
                                 <textarea   v-model="edite_Lettre_invitation.objet_lettre"  class="textarea_editor span12" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>
                            <tr>
                                
                                <td>
                         <div class="control-group">
                        <label class="control-label">Date cojo</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_Lettre_invitation.date_cojo"
                                    class="span"
                                    placeholder="Saisir email bailleur"
                            />
                        </div>
                    </div>
                        </td>
                        <td >
                        <div class="control-group">
                   <label class="control-label">Fichier joint:</label>
                    <div class="controls">
                     <input type="file"   @change="OnchangeFichier" />
              </div>
            </div>
                        </td>
                        </tr>

                </table>


              


            </div>
             <div class="modal-footer">
                <a
                        @click.prevent="modfications"
                        class="btn btn-primary"
                        href="#"

                >Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

<!--- fin modifier acte effet financier  -->
  <notifications/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../src/Repositories/Repository';
import moment from 'moment';
export default {
    
    data(){
        return{
        
          formLettre: {
                    appel_offre_id:"",
                    objet_lettre:"",
                    date_lettre:"",
                    ref_lettre:"",
                    destination:"",
                    date_cojo:""
                },
        edite_Lettre_invitation:""

        }
    },
    props:["macheid"],
    created(){},

       computed: {

            ...mapGetters("bienService", [ "typeTypeProcedures","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
      
lettreInvitationAMarche: function () {
                return id => {
                    if (id != "") {
                        //console.log("Marche lettre inviation marche")
                        return this.getterLettreInvitation.filter(idmarche => idmarche.appel_offre.marche_id == id)
                    }
                }
            },
listeAppelOffre() {
      return id => {
        if (id != null && id != "") {
          return this.appelOffres.filter(
            element => element.marche_id == id
          );
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



affichierObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    },






  procedurePassation_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.procedure_passation_id;
      }
      return 0
        }
      };
    },

typeProcedure_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.procedurePassations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_procedure_id;
      }
      return 0
        }
      };
    },

typeProcedureLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeTypeProcedures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

      
      },

      methods:{ 

          ...mapActions("bienService", [
               "ajouterLettreInvitation",
                "modifierLettreInvitation","supprimerLettreInvitation"
            
            ]),

            //  afficherModalModifierTransmission(index){
            //     this.$('#modificationAajouterAnalys01').modal({
            //         backdrop: 'static',
            //         keyboard: false
            //     });
            //     this.edit_transmission = this.listetransmissionDao(this.macheid.id)[index];
            // },

        afficheBouttonTechFinInvitation(index){
                this.$('#modificationL').modal({
                    backdrop: 'static',
                    keyboard: false
                });
 this.edite_Lettre_invitation = this.lettreInvitationAMarche(this.macheid)[index];
            },








            ajouterLettreInv(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
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
                    date_cojo:""
                }
            },


            //  modfications(){
            //     const formData = new FormData();
                
            //     formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
            //     formData.append('destination', this.edite_Lettre_invitation.destination);
            //     formData.append('ref_lettre', this.edite_Lettre_invitation.ref_lettre);
            //     formData.append('date_lettre', this.edite_Lettre_invitation.date_lettre);
            //     formData.append('date_cojo', this.edite_Lettre_invitation.date_cojo);
            //     formData.append('objet_lettre', this.edite_Lettre_invitation.objet_lettre);
            //     formData.append('id',thi.edite_Lettre_invitation.id)
            //      if ( this.selectedFile!==""){
            //         formData.append('fichier', this.selectedFile, this.selectedFile.name);
            //     }
            //     let config = {
            //         header : {
            //             'Content-Type' : 'multipart/form-data'
            //         }
            //     }
            //      this.modifierAppelOffre(formData,config)
            //     this.$('#modifierActeEF').modal('hide');
            // },
           

           
 modfications(){
                //console.log(this.edite_demande_dao)
                const formData = new FormData();
               formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
                formData.append('destination', this.edite_Lettre_invitation.destination);
                formData.append('ref_lettre', this.edite_Lettre_invitation.ref_lettre);
                formData.append('date_lettre', this.edite_Lettre_invitation.date_lettre);
                formData.append('date_cojo', this.edite_Lettre_invitation.date_cojo);
                formData.append('objet_lettre', this.edite_Lettre_invitation.objet_lettre);
                formData.append('id',this.edite_Lettre_invitation.id);
               
                console.log(formData)
                if ( this.selectedFile!==""){
                    formData.append('fichier', this.selectedFile, this.selectedFile.name);
                }
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                 this.modifierLettreInvitation(formData,config)
               this.$('#modifierActeEF').modal('hide');
            },







 
    


formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 900px;
 margin: 0 -430px;
 

}
</style>