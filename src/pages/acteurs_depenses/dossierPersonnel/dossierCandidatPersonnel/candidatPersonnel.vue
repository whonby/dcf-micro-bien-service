
<template>
    <div>

                
                <!-- <h4>Liste des offres</h4> -->
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>

                   <tr>

                                        <th>Reference avis</th>
                                        <th>Numero du dossier</th>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Date de depot</th>
                                        <th>fichier</th>
                                        <th>Action</th>
                                    </tr>
                    </thead>
                    <tbody>
                   <tr class="odd gradeX" v-for="(personnel, index) in dossierPersonnels"
                                        :key="personnel.id">
                                        <td @dblclick="afficherModalDossierCandidatPersonnel(index)">
                                            {{personnel.appel_offre_id || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalDossierCandidatPersonnel(index)">
                                            {{personnel.numero_dossier || 'Non renseigné'}}</td>

                                       
                                        <td @dblclick="afficherModalDossierCandidatPersonnel(index)">

                                            {{personnel.nom_candidat || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalDossierCandidatPersonnel(index)">
                                            {{personnel.prenom_candidat || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalDossierCandidatPersonnel(index)">
                                            {{formaterDate(personnel.date_depot) || 'Non renseigné'}}</td>

                                            <td>
                                       <a v-if="personnel.fichier" :href="personnel.fichier" class="btn btn-default" target="_blank">
                                       <span class=""><i class="icon-book"></i>
                                    </span>
                                    </a>
                                          </td>
                                        
                                            <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerDossierCandidat(personnel.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

                                        </div>
                                        </td>

                                    </tr>
                    </tbody>
                </table>

              
     
 



<div id="addDossier" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter les troid(3) cv</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                          <tr>
                            <td>
                        
                     <div class="control-group">
                        <label class="control-label">Reference avis</label>
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
                            </td>

                               <td>
                        <div class="control-group">
                            <label class="control-label">Numero du dossier <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" v-model="formDossier.numero_dossier" placeholder="Type appel" >
                            </div>
                        </div>
                            </td>

                            <td>
                        <div class="control-group">
                            <label class="control-label">Nom <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Reference d'appel" v-model="formDossier.nom_candidat">
                            </div>
                        </div>
                            </td>
                            </tr>
                            <tr>

                              <td>
                        <div class="control-group">
                            <label class="control-label">Prenom<code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Reference d'appel" v-model="formDossier.prenom_candidat">
                            </div>
                        </div>
                            </td>
                            
                                 <td>
                        <div class="control-group">
                            <label class="control-label">Date depot trois(3)cv :</label>
                            <div class="controls">
                                <input type="date" class="span" placeholder="Reference d'appel" v-model="formDossier.date_depot">
                            </div>
                        </div>
                            </td>
                            
                            
                                <td>
                               <div class="control-group">
                                  <label class="control-label">Fichier joint:</label>
                                    <div class="controls">
                                    <input type="file" @change="OnchangeFichier" />
                                  </div>
                                     </div>
                                </td>
                          
                     
                        </tr>
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouterDossierC"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



<div id="modificationModalC" class="modal hide grdirModalActeEffet">
           <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification  dossier candidat </h3>
            </div>
            <div class="modal-body">

              <table class="table table-bordered table-striped">
                          <tr>
                            <td>
                       
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
                            </td>
                            <td>
                        <div class="control-group">
                            <label class="control-label">Nom <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="" v-model="editDossier.nom_candidat">
                            </div>
                        </div>
                            </td>
                            </tr>
                            <tr>

                              <td>
                        <div class="control-group">
                            <label class="control-label">Prenom<code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Reference d'appel" v-model="editDossier.prenom_candidat">
                            </div>
                        </div>
                            </td>
                            
                                 <td>
                        <div class="control-group">
                            <label class="control-label">Date depot trois(3)cv :</label>
                            <div class="controls">
                                <input type="date" class="span" placeholder="Reference d'appel" v-model="editDossier.date_depot">
                            </div>
                        </div>
                            </td>
                            
                            
                                <td>
                               <div class="control-group">
                                  <label class="control-label">Fichier joint:</label>
                                    <div class="controls">
                                    <input type="file" @change="OnchangeFichier" />
                                  </div>
                                     </div>
                                </td>
                          
                     
                        </tr>
                    </table>  


            </div>
             <div class="modal-footer">
                <a
                        @click.prevent="modificationsDossierCandidatPersonnel"
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
        
        formDossier:{
              ref_appel:"",
                    fichier:"",
                    nom_candidat:"",
                    prenom_candidat:"",
                    numero_dossier:"",
                    appel_offre_id:"",
                    date_depot:"",
                    marche_id:"",
        },
        editDossier:{
             	ref_appel:"",
                    fichier:"",
                    nom_candidat:"",
                    prenom_candidat:"",
                    numero_dossier:"",
                    
                    appel_offre_id:"",

                    marche_id:"",
        }

        }
    },
    props:["macheid"],
    created(){},

       computed: {


         ...mapGetters('personnelUA', ['acteur_depenses','dossierPersonnels']),

         ...mapGetters("bienService", [ "typeTypeProcedures","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "typeMarches", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),

 


            ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
      

//  listeDossierCandidat() {
//                 return macheid => {
//                     if (macheid != "") {
                   
                    
//                         return this.dossierCandidatPersonnel.filter(idmarche => idmarche.marche_id == macheid)
//                     }
//                 }
//             },
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




// affichierObjetMarche() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.marches.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.objet;
//       }
//       return 0
//         }
//       };
//     },






//   procedurePassation_id() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.marches.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.procedure_passation_id;
//       }
//       return 0
//         }
//       };
//     },

// typeMarcheId() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.marches.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.type_marche_id;
//       }
//       return 0
//         }
//       };
//     },

// typeProcedureLibelle() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.libelle;
//       }
//       return "Prestations Intellectuelles"
//         }
//       };
//     },

      
      },

      methods:{ 

          ...mapActions("personnelUA", [
                'ajouterDossierCandidat','modifierDossierCandidat',"supprimerDossierCandidat","modifierAppelOffre",
            
            ]),



        afficherModalDossierCandidatPersonnel(index){
                this.$('#modificationModalC').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editDossier = this.dossierPersonnels[index];
            },


          ajouterDossierC(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
                formData.append('nom_candidat', this.formDossier.nom_candidat);
                formData.append('prenom_candidat', this.formDossier.prenom_candidat);
                formData.append('numero_dossier', this.formDossier.numero_dossier);
                formData.append('date_depot', this.formDossier.date_depot);
                formData.append('marche_id',this.macheid)
                // formData.append('march', this.formDossier.objet_lettre);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterDossierCandidat(formData,config)
                this.formDossier= {
                    appel_offre_id:"",
                    fichier:"",
                    date_depot:"",
                    nom_candidat:"",
                    prenom_candidat:"",
                    numero_dossier:""
                }
            },    

           






           
 modificationsDossierCandidatPersonnel(){
                //console.log(this.edite_demande_dao)
                const formData = new FormData();
               //formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
                 formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
                formData.append('nom_candidat', this.editDossier.nom_candidat);
                formData.append('prenom_candidat', this.editDossier.prenom_candidat);
                formData.append('numero_dossier', this.editDossier.numero_dossier);
                formData.append('date_depot', this.editDossier.date_depot);
                formData.append('id',this.editDossier.id);
               
                console.log(formData)
                if ( this.selectedFile!==""){
                    formData.append('fichier', this.selectedFile, this.selectedFile.name);
                }
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                 this.modifierDossierCandidat(formData,config)
               this.$('#modificationModalC').modal('hide');
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
 margin: 0 -530px;
 height: 300px;

}
</style>