
<template>
    <div>

         <div class="span4" align="right">
     <a href="#ajouterMandatePersonnel" data-toggle="modal" class="btn btn-success" align="rigth" >Ajouter</a>
      <!-- <button class="btn btn-warning" title="veiller terminer l'etape de la lettre d'invitation avant de passer au mandate merci!" disabled v-else>Ajouter</button> -->
     </div>

                
                <!-- <h4>Liste des offres</h4> -->
                <table class="table table-bordered table-striped" v-if="macheid">
                      <thead>
                    <tr>
                       
                        <th>Matricule </th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Objet contrat</th>
                         <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="(appelOffre, index) in listeMantater(macheid)"
                        :key="appelOffre.id">
                       
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.matricule_m || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.nom_mandat || 'Non renseigné'}}</td>
                             <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.prenom_nom || 'Non renseigné'}}</td>
                             <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.objet_appel || 'Non renseigné'}}</td>
                             <td @click="afficheBouttonTechFinMandater(index)">
                            {{formaterDate(appelOffre.date_id) || 'Non renseigné'}}</td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerMandater(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>
                        </div>
                    </tr>
                    
                    </tbody>
                </table>

              
     




<div id="ajouterMandatePersonnel" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter  Mandate</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                          <tr>
                            <td >
                      <div class="control-group">
                        <label class="control-label">Reference lettre</label>
                      

                         <input
                                    type="text"
                                    :value="affichierReferenceLettreInvitation(macheid)"
                                    class="span"
                                   
                           readonly />
                    </div>
                            </td>
                            <td>
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
                            </td>

                          </tr>  
                           
                            <tr>
                            <td colspan="" width="">
                        <div class="control-group">
                            <label class="control-label">Objet  offre :</label>
                            <div class="controls">
                                 <textarea  :value="affichierObjetMarche(macheid)"  class="textarea_editor span12" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                           
                                <td>
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
                                </td>
                                 </tr>
                            
                            <tr>
                                <td>
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
                        </td>
                        <!-- <td >
                        <div class="control-group">
                            <label class="control-label">Imputation :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Imputation" v-model="formData.imputation" disabled>
                            </div>
                        </div>
                        </td> -->
                        
                        <td>
                            <div class="control-group">
                        <label class="control-label">Date</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formMandater.date_id"
                                    class="span"

                            />
                            <input type="hidden" v-model="formMandater.difference_personnel_bienService"/>
                        </div>
                    </div>
                        </td>
                        </tr>
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouterMandaterA"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



<div id="modificationMantater" class="modal hide grdirModalActeEffet">
           <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification  Mandate</h3>
            </div>
            <div class="modal-body">

                <table class="table table-bordered table-striped">
              
                            
                          <tr>
                            <td>
                      <div class="control-group">
                        <label class="control-label">Lettre Invitation</label>
                        <div class="controls">
                             <input
                                    type="text"
                                    :value="affichierReferenceLettreInvitation(macheid)"
                                    class="span"
                                   
                            />
                        </div>
                    </div>
                            </td>
                            <td>
                     <div class="control-group">
                        <label class="control-label">Matricule</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editer_mandater.matricule_m"
                                    class="span"
                                    placeholder="Matricule" v-on:keyup="rechercheMandater()"
                            />
                            <code v-if="message_mandater">{{message_mandater}}</code>
                        </div>
                    </div>
                            </td>
                           
                                 <tr>
                              <td colspan="" width="">
                        <div class="control-group">
                            <label class="control-label">Objet  offre :</label>
                            <div class="controls">
                                 <textarea  :value="affichierObjetMarche(macheid)"  class="textarea_editor span12" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                                <td>
                        <div class="control-group">
                        <label class="control-label">Nom</label>
                        <div class="controls">
                            <input type="text"
                                    v-model="editer_mandater.nom_mandat"
                                    class="span"
                                    placeholder="Nom mandater"
                            />
                        </div>
                    </div>
                                </td>
                          </tr>
                          <tr>
                                <td>
                         <div class="control-group">
                        <label class="control-label">Prenom</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editer_mandater.prenom_nom"
                                    class="span"
                                    placeholder="Prenom "
                            />
                        </div>
                    </div>
                        </td>
                       
                      
                      
                            <div class="control-group">
                        <label class="control-label">Date</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="editer_mandater.date_id"
                                    class="span"

                            />
                            <input type="hidden" v-model="editer_mandater.difference_personnel_bienService"/>
                        </div>
                    </div>
                        </tr>    

                </table>


              


            </div>
             <div class="modal-footer">
                <a
                        @click.prevent="modificationMandater()"
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
         formMandater:{
                        lettre_invitation_id:"",
                        date_id:"",
                        fichier_joint:"",
                        nom_mandat:"",
                        prenom_nom:"",
                    matricule_m:"",
                    difference_personnel_bienService:"personnel"
         },
       
        
        editer_mandater:{
             lettre_invitation_id:"",
                        date_id:"",
                        fichier_joint:"",
                        nom_mandat:"",
                        prenom_nom:"",
                    matricule_m:"",
                    difference_personnel_bienService:"personnel"
        },
message_mandater:'',
        }
    },
    props:["macheid"],
    created(){},

       computed: {

            ...mapGetters("bienService", ["mandate","typeTypeProcedures","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
              "mandate",  "listeMandatePersonnel","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
      
//    lettreInvitationAMarche: function () {
//                 return marcheid => {
//                     if (marcheid != "") {
//                         console.log("Marche lettre inviation marche")
//                         return this.getterLettreInvitation.filter(idmarche => idmarche.marche_id == marcheid)
//                     }
//                 }
//             },

listeAppelOffre() {
      return id => {
        if (id != null && id != "") {
          return this.appelOffres.filter(
            element => element.marche_id == this.macheid
          );
        }
      };
    },



affichierReferenceLettreInvitation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterLettreInvitation.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.ref_lettre;
      }
      return 0
        }
      };
    },



    affichierLettreInvitationid() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterLettreInvitation.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },


// affichierReferenceLettreInvitation() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.getterLettreInvitation.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.ref_lettre;
//       }
//       return 0
//         }
//       };
//     },



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

    listeMantater: function () {
                return id => {
                    if (id != "") {
                        //console.log("Marche lettre inviation marche")
                        return this.listeMandatePersonnel.filter(idmarche => idmarche.marche_id == id)
                    }
                }
            },
    //   listeMantater: function () {
    //             return macheid => {
    //                 if (macheid != "") {
    //                    let vM =this;
    //                     let Objet =this.listeMandatePersonnel.find(idmarche => idmarche.lettre_invitation.appel_offre.marche_id == macheid);
    //                   console.log("Ok c'est la vie")
    //                     if(Objet!=undefined){
    //                         vM.formDataCojo.lettre_invitation_id=Objet.lettre_invitation_id
    //                         vM.formDataCojo.controleur_finnancier=Objet.nom_mandat+" "+Objet.prenom_nom
    //                         vM.formDataCojo.matricule=Objet.matricule_m
    //                         vM.formDataCojo.date_invitation=Objet.lettre_invitation.date_lettre
    //                     }
    //                     return this.listeMandatePersonnel.filter(idmarche => idmarche.lettre_invitation.appel_offre.marche_id == macheid)
    //                 }
    //             }
    //         }
      },

      methods:{ 

          ...mapActions("bienService", [
                'ajouterMandater','modifierMandater',"supprimerMandater","getMandater"
            
            ]),

modificationMandater(){
    var ObjetModifi={
         ...this.editer_mandater,
     lettre_invitation_id: this.affichierLettreInvitationid(this.macheid)

     }
                this.modifierMandater(ObjetModifi)
                this.getMandater();
                this.$('#modificationMantater').modal('hide');
            },
             afficheBouttonTechFinMandater(index){
                this.$('#modificationMantater').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editer_mandater = this.listeMandatePersonnel[index];
            },
      



 ajouterMandaterA(){
     var nouveauObjet={
         ...this.formMandater,
         marche_id:this.macheid,
         lettre_invitation_id: this.affichierLettreInvitationid(this.macheid),
          objet_appel:this.affichierObjetMarche(this.macheid)
     };
               this.ajouterMandater(nouveauObjet)
                this.formMandater={
                        lettre_invitation_id:"",
                        date_id:"",
                        fichier_joint:"",
                        nom_mandat:"",
                        prenom_nom:"",
                    matricule_m:"",
                     difference_personnel_bienService:"personnel"
                }
            },  


   rechercheMandater(){

            // console.log(this.formMandater.matricule_m)
              let objetMandater=this.acteur_depenses.filter(item=>item.acteur_depense.matricule==this.formMandater.matricule_m)
              // console.log(objetMandater)
               if(objetMandater!=undefined){
                   if (objetMandater.length==1){
                       let acteur= this.acteur_depenses.find(item=>item.acteur_depense.matricule==this.formMandater.matricule_m)
                       this.formMandater.prenom_nom=acteur.acteur_depense.prenom
                       this.formMandater.nom_mandat=acteur.acteur_depense.nom
                       this.message_mandater=""
                   }
                   else{
                       this.message_mandater="Ce matricule n'existe pas dans la base de donnée! "
                   }
               }
             if(this.formMandater.matricule_m==""){
                 this.formMandater.prenom_nom=""
                 this.formMandater.nom_mandat=""
                 this.message_mandater=""
             }
           },




//  modfications(){
     

//                 this.modifierAppelOffre(this.ObjetModifi)
//                 this.$('#modifierActeEF').modal('hide');
//             },
    


formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 900px;
 margin: 0 -530px;
 height: 450px;

}
</style>