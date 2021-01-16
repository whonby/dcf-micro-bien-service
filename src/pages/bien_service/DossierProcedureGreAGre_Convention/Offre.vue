

<template>
    <div>

                
                <!-- <h4>Liste des offres</h4> -->
                <table class="table table-bordered table-striped" v-if="macheid">
                      <thead>
                    <tr>
                       
                        <th>Type procedure </th>
                        <th>Mode passation</th>
                        <th>Reference l'offre</th>
                        <th>Date debut </th>
                        <th>Date fin </th>
                         <th>Numéro</th>
                         <th>Date autorisation</th>
                        <th>Objet du marché</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="(appelOffre, index) in listeAppelOffre(macheid)"
                        :key="appelOffre.id">
                       
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.procedure_passation_id || 'Non renseigné'}}</td>
                            <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.mode_passation_id || 'Non renseigné'}}</td>
                        <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.ref_appel || 'Non renseigné'}}</td>
                             <td @click="afficheBouttonTechFinMandater(index)">
                            {{ formaterDate(appelOffre.date_emission) || 'Non renseigné'}}</td>
                             <td @click="afficheBouttonTechFinMandater(index)">
                            {{formaterDate(appelOffre.date_limite) || 'Non renseigné'}}</td>
                             <td @click="afficheBouttonTechFinMandater(index)">
                            {{appelOffre.numero_autorisation || 'Non renseigné'}}</td>
                             <td @click="afficheBouttonTechFinMandater(index)">
                            {{formaterDate(appelOffre.date_numero_autorisation) || 'Non renseigné'}}</td>
                            <td @dblclick="afficheBouttonTechFinMandater(index)">
                                            {{appelOffre.objet_appel || 'Non renseigné'}}</td>
                        <div class="btn-group">
                            <button @click.prevent="supprimerAppelOffre(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>
                        </div>
                    </tr>
                    
                    </tbody>
                </table>

              
     
<!-- debut ajout acte effet financier --->



<div id="ajouterOffre" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter DAO</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                          <tr>
                             <td>
                  
                        <div class="control-group">
                            <label class="control-label">Type de procedure <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Type appel" :value="typeProcedureLibelle(typeProcedure_id(procedurePassation_id(macheid)))" disabled>
                            </div>
                        </div>
                            </td>
                            <td>
             <div class="control-group">
            <label class="control-label">Mode Passation</label>
            <div class="controls">
            
               <select v-model="formMandater.mode_passation_id" class="span" >
               <option v-for="plans in modePassations" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
                   </td>       
                            </tr>
                           
                            <tr>
                                  <td>
                     <div class="control-group">
                        <label class="control-label">Reference Offre</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formMandater.ref_appel"
                                    class="span"
                                    placeholder="" 
                            />
                           
                        </div>
                    </div>
                            </td>
                                <td>
                        <div class="control-group">
                        <label class="control-label">Date debut de publication</label>
                        <div class="controls">
                            <input type="date"
                                    v-model="formMandater.date_emission"
                                    class="span"
                                    placeholder="Nom mandater"
                            />
                        </div>
                    </div>
                                </td>
                               
                        
                        </tr>
                        <tr>
                            <td colspan="2" width="">
                        <div class="control-group">
                            <label class="control-label">Objet  DAO :</label>
                            <div class="controls">
                                 <textarea  :value="affichierObjetMarche(macheid)"  class="textarea_editor span12" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>

                        <tr>
                             <td>
                         <div class="control-group">
                        <label class="control-label">Date fin de publication</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formMandater.date_limite"
                                    class="span"
                                    placeholder="Prenom "
                            />
                        </div>
                    </div>
                        </td>
                                <td>
                        <div class="control-group">
                        <label class="control-label">Numéro d'autorisation</label>
                        <div class="controls">
                            <input type="text"
                                    v-model="formMandater.numero_autorisation"
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
                        <label class="control-label">Date d'autorisation</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formMandater.date_numero_autorisation"
                                    class="span"
                                    placeholder="Prenom "
                            />
                        </div>
                    </div>
                        </td>
                            <td colspan="">
                                <div class="control-group">
                                    <label class="control-label">Fichier DAO:</label>
                                    <div class="controls">
                                        <input type="file"    class="span5" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouterLocal"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



<div id="modifierActeEF" class="modal hide grdirModalActeEffet">
           <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification  Offre</h3>
            </div>
            <div class="modal-body">

                <table class="table table-bordered table-striped">
                          <tr>
                         <td>
                        <div class="control-group">
                            <label class="control-label">Type de procedure  :</label>
                            <div class="controls">
                                <input type="text" class="span" disabled :value="typeProcedureLibelle(editOffre.type_appel)">
                            </div>
                        </div>
                            </td>
                              <td>
             <div class="control-group">
            <label class="control-label">Mode Passation</label>
            <div class="controls">
            
               <select v-model="editOffre.mode_passation_id" class="span" >
               <option v-for="plans in modePassations" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
                   </td>  
                           
                            </tr>
                           
                            <tr>
                                 <td>
                     <div class="control-group">
                        <label class="control-label">Reference Offre</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editOffre.ref_appel"
                                    class="span"
                                    placeholder="" 
                            />
                           
                        </div>
                    </div>
                            </td>
                                <td>
                        <div class="control-group">
                        <label class="control-label">Date debut de publication</label>
                        <div class="controls">
                            <input type="date"
                                    v-model="editOffre.date_emission"
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
                        <label class="control-label">Date fin de publication</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="editOffre.date_limite"
                                    class="span"
                                    placeholder="Prenom "
                            />
                        </div>
                    </div>
                        </td>
                                <td>
                        <div class="control-group">
                        <label class="control-label">Numéro d'autorisation</label>
                        <div class="controls">
                            <input type="text"
                                    v-model="editOffre.numero_autorisation"
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
                        <label class="control-label">Date d'autorisation</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="editOffre.date_numero_autorisation"
                                    class="span"
                                    placeholder="Prenom "
                            />
                        </div>
                    </div>
                        </td>
                        <td colspan="">
                                <div class="control-group">
                                    <label class="control-label">Fichier DAO:</label>
                                    <div class="controls">
                                        <input type="file"    class="span5" />
                                    </div>
                                </div>
                            </td>
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
import { formatageSomme } from '../../../../src/Repositories/Repository';
import moment from 'moment';
export default {
    
    data(){
        return{
         formMandater:{
                        type_appel:"",
                        ref_appel:"",
                        mode_passation_id:"",
                        fichier_joint:"",
                        date_emission:"",
                        date_limite:"",
                    numero_autorisation:"",
                    date_numero_autorisation:"",
                    marche_id:"",
                    objet_appel:""
         },
       
        
        editOffre:{
             type_appel:"",
                        ref_appel:"",
                        objet_appel:"",
                        fichier_joint:"",
                        mode_passation_id:"",
                        date_emission:"",
                        date_limite:"",
                    numero_autorisation:"",
                    date_numero_autorisation:""
        },

        }
    },
    props:["macheid"],
    created(){},

       computed: {

            ...mapGetters("bienService", ["mandate","typeTypeProcedures","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
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


  
    
      },

      methods:{ 

         ...mapActions("bienService", [
                'ajouterAppelOffre',"supprimerAppelOffre","modifierAppelOffre","modifierMarche"
            
            ]),

modificationMandater(){
                this.modifierMandater(this.editer_mandater)
                this.$('#modifierActeEF').modal('hide');
            },
             afficheBouttonTechFinMandater(index){
                this.$('#modifierActeEF').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editer_mandater = this.getterMandate[index];
            },
      



   ajouterLocal(){
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
                    mode_passation_id:""
                }
    let marcheObjet=this.marches.find(marche=>marche.id==this.macheid)
    marcheObjet.attribue=1
      //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
     this.modifierMarche(marcheObjet)
     
            }, 


 




 modfications(){
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
     width: 900px;
 margin: 0 -530px;
 height: 500px;

}
</style>