
<template>
    <div>

                
                <!-- <h4>Liste des offres</h4> -->
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                   <tr>
<<<<<<< HEAD

<<<<<<< HEAD
                                        
                                        <th> Type procédure</th>
                                        <th>Reference appel</th>
=======
=======
>>>>>>> 194aa3f8c8258cf4e0f9de8cb5124d490a624aef
                                        <th>Reference appel - DAO</th>
                                        <th> Type procedure</th>
                                        <th> Numéro autorisation</th>
                                        <th>Mode de passation</th>
                                        <th>Date emmission</th>
                                        <th>Date et heure limite  </th>
>>>>>>> 57a94c10b1ee71e4c5aed627fca80665c21c5bf1
                                        <th>Objet appel</th>
                                        <th>Date début de publication</th>

                                        <th>Date fin de publication</th>
                                        <th>Numéro et date</th>
                                        <th>Date d'autorisation </th>
                                        <th>Heure limites</th>
                                       
                                        <th>Action</th>
                                    </tr>
                    </thead>
                    <tbody>
                   <tr class="odd gradeX" v-for="(appelOffre, index) in listeAppelOffre(macheid)"
                                        :key="appelOffre.id">
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.ref_appel || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{typeProcedureLibelle(appelOffre.type_appel) || 'Non renseigné'}}</td>
                                              <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.numero_autorisation|| 'Non renseigné'}}</td>

                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{afficheLibelleModePassation(appelOffre.mode_passation_id) || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">

                                            {{formaterDate(appelOffre.date_emission) || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{formaterDate(appelOffre.date_limite) || 'Non renseigné'}} {{appelOffre.heure}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.objet_appel || 'Non renseigné'}}</td>
                                        
                                            <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerAppelOffre(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

                                        </div>
                                        </td>

                                    </tr>
                    </tbody>
                </table>

              
     
 



<div id="ajouterOffre" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter  offre</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                          <tr>
                            <td>
                        <div class="control-group">
                            <label class="control-label">Type de procédure <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Type appel" :value="typeProcedureLibelle(typeProcedure_id(procedurePassation_id(macheid)))" disabled>
                            </div>
                        </div>
                            </td>
                               <td>
             <div class="control-group">
            <label class="control-label">Mode Passation</label>
            <div class="controls">
            
               <select v-model="formData.mode_passation_id" class="span" >
               <option v-for="plans in procedurePassations" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}} =>{{ typeProcedureLibelle(plans.type_procedure_id)}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                   </td> 
                           
                            </tr>
                            
                            <tr>
                                 <td>
                        <div class="control-group">
<<<<<<< HEAD
                            <label class="control-label">Référence  offre <code>*</code> :</label>
=======
                            <label class="control-label">Date debut de publication<code>*</code> :</label>
>>>>>>> 57a94c10b1ee71e4c5aed627fca80665c21c5bf1
                            <div class="controls">
                                <input type="date" class="span" placeholder="Date emision" v-model="formData.date_emission">
                            </div>
                        </div>
                            </td>
<<<<<<< HEAD
                            </tr>
                            </table>
                             <table> 
                            <tr>
=======
                                <td>
                        <div class="control-group">
                            <div class="controls">
                                <label> Reference  de DAO<code>*</code></label>
                                  <input type="text" class="span" placeholder="Reference d'appel" v-model="formData.ref_appel">
                                
                            </div>
                        </div>
                                </td>
                            
                        </tr>
                        <tr>
>>>>>>> 57a94c10b1ee71e4c5aed627fca80665c21c5bf1
                            <td colspan="2" width="">
                        <div class="control-group">
                            <label class="span2">Objet  offre :</label>
                            <div class="controls">
                                 <textarea  :value="affichierObjetMarche(macheid)"  class="textarea_editor span12" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>
<<<<<<< HEAD
                            </table>
                             <table>       
                            <tr>
                                <td>
                        <div class="control-group">

                            <div class="controls">
                                <label>Date début de publication<code>*</code></label>
                                <input type="date" class="span" placeholder="Date emision" v-model="formData.date_emission">
                            </div>
                        </div>
                                </td>
=======
                        <tr>
>>>>>>> 57a94c10b1ee71e4c5aed627fca80665c21c5bf1
                                <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Date fin de publication <code>*</code></label>
                                <input type="date" class="span" placeholder="Date limite" v-model="formData.date_limite" :min="formData.date_emission">
                            </div>
                        </div>
                        </td>
                            <td>
                        <div class="control-group">
                            <div class="controls">
<<<<<<< HEAD
                                <label>Numéro et date <code></code></label>
                                <input type="text" class="span" >
=======
                                <input type="text" class="span" placeholder="" v-model="formData.mode_passation_id" :readonly="activation">
>>>>>>> 194aa3f8c8258cf4e0f9de8cb5124d490a624aef
                            </div>
                        </div>
                        </td>


                           
                        </tr>
                        <tr>
                             <td>

                            <td>

                                <div class="control-group">
                                    <label class="control-label">Date d'autorisation :</label>
                                    <div class="controls">
                                        <input type="date" class="span" placeholder="" v-model="formData.date_numero_autorisation">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label"> Heure limites :</label>
                                    <div class="controls">
                                        <input type="time" class="span" placeholder="" v-model="formData.heure">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Fichier DAO:</label>
                                    <div class="controls">
                                        <input type="file"   @change="OnchangeFichier" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouter"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



<div id="modificationModal" class="modal hide grdirModalActeEffet">
           <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification  offre</h3>
            </div>
            <div class="modal-body">

                <table class="table table-bordered table-striped">
                 <tr>
                       <td>
                        <div class="control-group">
                            <label class="control-label">Type de procédure  :</label>
                            <div class="controls">
                                <input type="text" class="span" disabled :value="typeProcedureLibelle(edite_appel_offre.type_appel)">
                            </div>
                        </div>
                            </td>
                                <td>
             <div class="control-group">
            <label class="control-label">Mode Passation</label>
            <div class="controls">
            
               <select v-model="edite_appel_offre.mode_passation_id" class="span" >
               <option v-for="plans in procedurePassations" :key="plans.id" 
               :value="plans.id"> {{plans.code}} => {{plans.libelle}}</option>
           </select>
            </div>
          </div>
                   </td> 
                             
                    </tr>
                                 
                            <tr>
                                   <td >
                        <div class="control-group">
                            <label class="control-label">Référence  offre  :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Reference d'appel" v-model="edite_appel_offre.ref_appel">
                            </div>
                        </div>
                            </td>
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Date debut de publication</label>
                                <input type="date" class="span" placeholder="Date emision" v-model="edite_appel_offre.date_emission">
                            </div>
                        </div>
                                </td>
                              
                        </tr>
                          <tr>
                            <td colspan="2" width="">
                        <div class="control-group">
                            <label class="control-label">Objet  offre :</label>
                            <div class="controls">
                                 <textarea   v-model="edite_appel_offre.objet_appel"  class="textarea_editor span12" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>
<<<<<<< HEAD
                            <tr>
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Date début de publication</label>
                                <input type="date" class="span" placeholder="Date emision" v-model="edite_appel_offre.date_emission">
                            </div>
                        </div>
                                </td>
                                
                                 <td >
=======
                        <tr>
                              
                                 <td>
>>>>>>> 57a94c10b1ee71e4c5aed627fca80665c21c5bf1
                        <div class="control-group">
                            <div class="controls">
                                <label>Date fin de publication </label>
                                <input type="date" class="span" placeholder="Date limite" v-model="edite_appel_offre.date_limite">
                            </div>
                        </div>
                        </td>
<<<<<<< HEAD

                       
                        </tr>
                        <tr>
                           <td>
=======
                             <td>
>>>>>>> 57a94c10b1ee71e4c5aed627fca80665c21c5bf1
                        <div class="control-group">
                            <div class="controls">
                                <label>Numéro et date <code></code></label>
                                <input type="text" class="span" v-model="edite_appel_offre. imputation">
                            </div>
                        </div>
                        </td>

                           
                        </tr>
                        <tr>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Date d'autorisation :</label>
                                    <div class="controls">
                                        <input type="date" class="span" placeholder="" v-model="edite_appel_offre.date_numero_autorisation">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label"> Heure limites :</label>
                                    <div class="controls">
                                        <input type="time" class="span" placeholder="" v-model="edite_appel_offre.heure">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Fichier DAO:</label>
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
<<<<<<< HEAD
        
        formData:{
              ref_appel:"",
=======
            imagePDF :"",
        namePDF :"",
        fichierPDF :"",
            selectedFile:"",

        formData:{
              ref_appel:"",
              
              numero_autorisation:"",
              mode_passation_id:"",
>>>>>>> 57a94c10b1ee71e4c5aed627fca80665c21c5bf1
                    type_appel:"",
                    financement:"",
                    nom_bailleurs:"",
                    date_emission:"",
                    date_limite:"",
                    objet_appel:"",
                    imputation:"",
                    marche_id:"",
            date_numero_autorisation:"",
            heure:""
        },
        message_offre:"",
        edite_appel_offre:{
             	ref_appel:"",
<<<<<<< HEAD
=======
                 numero_autorisation:"",
                 mode_passation_id:"",
>>>>>>> 57a94c10b1ee71e4c5aed627fca80665c21c5bf1
                    type_appel:"",
                    financement:"",
                    nom_bailleurs:"",
                    date_emission:"",
                    date_limite:"",
                    objet_appel:"",
                    imputation:"",
                    marche_id:"",
            date_numero_autorisation:"",
            heure:""
        }

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
      

listeAppelOffre() {
      return id => {
        if (id != null && id != "") {
          return this.appelOffres.filter(
            element => element.marche_id == this.macheid
          );
        }
      };
    },



activation(){
    return this.procedurePassations.filter(item => item.type_procedure_id==8);
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

afficheLibelleModePassation(){
    return id =>{
        if(id!=null){
            const answer = this.procedurePassations.find(item => item.id==id)
            if(answer) {
                 return answer.libelle
            }
           return null
        }
        
    }
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

    // recuperation de 
    listePassation(){
      return id => {
        if (id != null && id != "") {
           const qtereel = this.procedurePassations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_procedure_id;
      }
      return 0
        }
      };
    

    }

      
      },

      methods:{ 

          ...mapActions("bienService", [
                'ajouterAppelOffre','modifierAppelOffre',"supprimerAppelOffre","modifierAppelOffre","modifierMarche"
            
            ]),



        afficherModalModifierActeDepense(index){
                this.$('#modificationModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edite_appel_offre = this.listeAppelOffre(this.macheid)[index];
            },


             ajouter(){
     var nouvelObjet = {
      ...this.formData,
      
       type_appel: this.typeProcedure_id(this.procedurePassation_id(this.macheid)),
          marche_id: this.macheid,
          objet_appel:this.affichierObjetMarche(this.macheid)
         };
        //  this.formData.marche_id=this.macheid
    //this.formEffetFinancier.entreprise_id=entreprisePremier.id
    // this.ajouterActeEffetFinancier(this.formEffetFinancier)
     this.ajouterAppelOffre(nouvelObjet);
     console.log(nouvelObjet)
      this.formData = {
                    ref_appel:"",
                    type_appel:"",
                    financement:"",
                    nom_bailleurs:"",
                    date_emission:"",
                    date_limite:"",
                    objet_appel:"",
                    imputation:"",
                    marche_id:"",
                    numero_autorisation:"",

                    procedure_passation_id:"",

          heure:""

                }
    let marcheObjet=this.marches.find(marche=>marche.id==this.macheid)
    marcheObjet.attribue=1
      //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
     this.modifierMarche(marcheObjet)
     
            },     

           







 modfications(){
              console.log(this.edite_appel_offre)
                this.modifierAppelOffre(this.edite_appel_offre)
                this.$('#modifierActeEF').modal('hide');
            },
    


formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1000px;
 margin: 0 -530px;
 height: 600px;

}
</style>