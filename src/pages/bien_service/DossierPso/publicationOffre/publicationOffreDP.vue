
<template>
    <div  >

                  <!-- <table class="table table-bordered table-striped"  v-if="LCVM">
                     <thead>
                             <tr>
                                        <th>Reference SIGVA</th>
                                        <th>Reference facture proformat</th>
                                        <th> Type procedure</th>
                                        <th>Mode de passation</th>
                                        <th>Entreprise</th>
                                        <th>Objet appel</th>
                                         <th>Date facture proformat</th>
                                       
                                        <th>Action</th>
                                    </tr>
                    </thead>
                    <tbody >
                   <tr class="odd gradeX" v-for="(appelOffre, index) in listeAppelOffre(macheid)"
                                        :key="appelOffre.id">
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.ref_sigva || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.ref_facture_proformat || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{typeProcedureLibelle(appelOffre.type_appel) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{afficheLibelleModePassation(appelOffre.mode_passation_id) || 'Non renseigné'}}</td>
                                              <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{afficherEntrepriseNom(appelOffre.entreprise_id) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.objet_appel || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{formaterDate(appelOffre.date_facture_proformat) || 'Non renseigné'}}</td>
                                        
                                            <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerAppelOffre(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

                                        </div>
                                        </td>

                                    </tr>
                    </tbody>
                </table> -->
                <!-- <h4>Liste des offres</h4> -->
                 <div align="right" style="cursor: pointer">
          <button
            class="btn btn-success"
            @click.prevent="ajouterOffre22"
            style="font-weight: bolder; color: #fff"
          >
            <i class="icon icon-plus"> AJOUTER </i>
          </button>
        </div>
                <table class="table table-bordered table-striped" v-if="macheid" >
                     <thead>
                             <tr>
                                        <th>Reference appel - DAO</th>
                                        <th> Type procedure</th>
                                        <th> Numéro autorisation</th>
                                        <th>Mode de passation</th>
                    

                                        
                                        <th>Date début de publication</th>
                                          <th>Date fin de publication</th> 
                                        
                                        <th>Objet appel</th>
                                        <!-- <th>Numéro d'autorisation</th> -->
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
                                              <td >
                                            {{appelOffre.numero_autorisation|| 'Non renseigné'}}</td>

                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{afficheLibelleModePassation(appelOffre.mode_passation_id) || 'Non renseigné'}}</td>
                                       
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{formaterDate(appelOffre.date_limite) || 'Non renseigné'}}</td>
                                             <td @dblclick="afficherModalModifierActeDepense(index)">

                                            {{formaterDate(appelOffre.date_emission) || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.objet_appel || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{formaterDate(appelOffre.date_numero_autorisation) || 'Non renseigné'}}</td>
                                             <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.heure || 'Non renseigné'}}</td>
                                        
                                            <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerAppelOffre(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i> Supprimer</span></button>

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

                               <td colspan="4">
             <div class="control-group">
            <label class="control-label">Mode Passation</label>
            <div class="controls">
            
               <select v-model="formData.mode_passation_id" class="span" >
               <option v-for="plans in afficherListeModePassation" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}} =>{{ typeProcedureLibelle(plans.type_procedure_id)}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                   </td> 
                           
                            </tr>
                              <tr>
                            <td colspan="4" width="">
                        <div class="control-group">
                            <label class="span2">Objet  offre :</label>
                            <div class="controls">
                                 <textarea  :value="affichierObjetMarche(macheid)"  class="textarea_editor span" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>
                            <tr>
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Numéro d'autorisation <code></code></label>
                                <input type="text" class="span" placeholder="Numéro d'autorisation" v-model="formData.numero_autorisation" >
                            </div>
                        </div>
                            </td>
                                <td colspan="2">
                        <div class="control-group">
                            <div class="controls">
                                <label> Réference  de DAO<code>*</code></label>
                                  <input type="text" class="span" placeholder="Reference d'appel" v-model="formData.ref_appel">
                                
                            </div>
                        </div>
                                </td>
                                
                           <td>
                        <div class="control-group">

                            <div class="controls">
                                <label>Date début de publication<code>*</code></label>
                                <input type="date" class="span" placeholder="Date emision" v-model="formData.date_emission">
                            </div>
                        </div>
                        </td>
                            
                        </tr>
                      
                            <tr>
                             
                               <td colspan="2">
                        <div class="control-group">
                            <div class="controls">
                                <label>Date fin de publication </label>
                                <input type="date" class="span" placeholder="Date limite" v-model="formData.date_limite">
                            </div>
                        </div>
                        </td>
                            <td>

                                <div class="control-group">
                                    <label class="control-label">Date d'autorisation :</label>
                                    <div class="controls">
                                        <input type="date" class="span"   placeholder="" v-model="formData.date_numero_autorisation" >
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
                        </tr>
                        <tr>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Note technique requis:</label>
                                    <div class="controls">
                                        <input type="text" class="span"   placeholder="" v-model="formData.note_techn" >
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label" title="Taux de l'offre financière">Taux de l'offre fin(%):</label>
                                    <div class="controls">
                                        <input type="text" class="span" placeholder="" v-model="formData.taux_fin">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label" title="Taux de l'offre technique">Taux de l'offre techn(%):</label>
                                    <div class="controls">
                                        <input type="text" class="span" placeholder="" v-model="formData.taux_tech">
                                    </div>
                                </div>
                            </td>
                           
                           
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Fichier DAO:</label>
                                    <div class="controls">
                                        <input type="file" >
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouter()"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



<div id="modificationModal" class="modal hide grdirModalActeEffet">
           <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification offre</h3>
            </div>
            <div class="modal-body">
              
  <!-- <table class="table table-bordered table-striped" v-if="LCVM">
                          <tr>
                           <td>
                        <div class="control-group">
                            <label class="control-label">Type de procédure  :</label>
                            <div class="controls">
                                <input type="text" class="span" disabled :value="typeProcedureLibelle(edite_appel_offre.type_appel)">
                            </div>
                        </div>
                            </td>
                                      <td colspan="2">
           
                   </td>
                           
                            </tr>
                            
                            <tr>
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Réference SIGVA <code></code></label>
                                <input type="text" class="span" placeholder="Numéro d'autorisation" v-model="edite_appel_offre.ref_sigva" >
                            </div>
                        </div>
                            </td>
                                <td colspan="2">
                        <div class="control-group">
                            <div class="controls">
                                <label> Réference facture proformat<code>*</code></label>
                                  <input type="text" class="span" placeholder="Reference d'appel" v-model="edite_appel_offre.ref_facture_proformat">
                                
                            </div>
                        </div>
                                </td>
                            
                        </tr>
                        <tr>
                            <td colspan="3" width="">
                        <div class="control-group">
                            <label class="span2">Objet  offre :</label>
                            <div class="controls">
                                 <textarea v-model="edite_appel_offre.objet_appel"  class="textarea_editor span" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>
                                 
                            <tr>
                                <td>
                      <div class="control-group">
            <label class="control-label">Entreprise</label>
            <div class="controls">
            
               <select v-model="edite_appel_offre.entreprise_id" class="span" >
               <option v-for="plans in entreprises" :key="plans.id" 
               :value="plans.id"> {{plans.raison_sociale}}</option>
       
           </select>
            </div>
          </div>
                        </td>
                               <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label>Date facture proformat </label>
                                <input type="date" class="span" placeholder="Date limite" v-model="edite_appel_offre.date_facture_proformat">
                            </div>
                        </div>
                        </td>
                           <td>
                                <div class="control-group">
                                    <label class="control-label">Fichier DAO:</label>
                                    <div class="controls">
                                        <input type="file" >
                                    </div>
                                </div>
                            </td>
                        </tr>
                      
                    </table>  -->
               
                <table class="table table-bordered table-striped" >
                 <tr>
                       <td>
                        <div class="control-group">
                            <label class="control-label">Type de procédure  :</label>
                            <div class="controls">
                                <input type="text" class="span" disabled :value="typeProcedureLibelle(edite_appel_offre.type_appel)">
                            </div>
                        </div>
                            </td>
             <td colspan="3">
                   <div class="control-group">
            <label class="control-label">Mode Passation</label>
            <div class="controls">
            
               <select v-model="edite_appel_offre.mode_passation_id" class="span" >
               <option v-for="plans in afficherListeModePassation" :key="plans.id" 
               :value="plans.id"> {{plans.code}} => {{plans.libelle}}</option>
           </select>
            </div>
          </div> 
                   </td> 
                             
                    </tr>
                     <tr>
                            <td colspan="4" width="">
                        <div class="control-group">
                            <label class="control-label">Objet  offre :</label>
                            <div class="controls">
                                 <textarea   v-model="edite_appel_offre.objet_appel"  class="textarea_editor span12" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>
                                 
                            <tr> 
                                
                             <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label>Numéro d'autorisation <code></code></label>
                                <input type="text" class="span" v-model="edite_appel_offre.numero_autorisation">
                            </div>
                        </div>
                        </td>   
                           
                                <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Réference de DAO  :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Reference d'appel" v-model="edite_appel_offre.ref_appel">
                            </div>
                        </div>
                            </td>
                              <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Date début de publication</label>
                                <input type="date" class="span" placeholder="Date emision" v-model="edite_appel_offre.date_emission">
                            </div>
                        </div>
                                </td>
                               
                              
                        </tr>
                         
                         
                            <tr>
                              <td colspan="2">
                        <div class="control-group" >
                            <div class="controls">
                                <label>Date fin de publication </label>
                                <input type="date" class="span" placeholder="Date limite" v-model="edite_appel_offre.date_limite">
                            </div>
                        </div>
                        </td>

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
                        </tr>
                        
                        <tr>
                             <td>
                                <div class="control-group">
                                    <label class="control-label">Note technique requis:</label>
                                    <div class="controls">
                                        <input type="text" class="span"   placeholder="" v-model="edite_appel_offre.note_techn" >
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="control-group">
                                    <label class="control-label" title="Taux de l'offre financière">Taux de l'offre fin(%):</label>
                                    <div class="controls">
                                        <input type="text" class="span" placeholder="" v-model="edite_appel_offre.taux_fin">
                                    </div>
                                </div>
                            </td>
                             <td>
                                <div class="control-group">
                                    <label class="control-label" title="Taux de l'offre technique">Taux de l'offre techn(%):</label>
                                    <div class="controls">
                                        <input type="text" class="span" placeholder="" v-model="edite_appel_offre.taux_tech">
                                    </div>
                                </div>
                            </td>
                            
                            <td>
                                <div class="control-group">
                                    <label class="control-label">Fichier DAO:</label>
                                    <div class="controls">
                                        <input type="file"  >
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
            imagePDF :"",
        namePDF :"",
        fichierPDF :"",
            selectedFile:"",
       LCVM:false,
       mode_passation_id:"",
       
       formLcvm:{
date_facture_proformat:"",
              mode_passation_id:"",
                    type_appel:"",
                    entreprise_id:"",
                   // nom_bailleurs:"",
                    ref_facture_proformat:"",
                    ref_sigva:"",
                    objet_appel:"",
                   // imputation:"",
                    marche_id:"",
       },
    //    editFormLcvm:{
    //       date_facture_proformat:"",
    //           mode_passation_id:"",
    //                 type_appel:"",
    //                 entreprise_id:"",
    //                // nom_bailleurs:"",
    //                 ref_facture_proformat:"",
    //                 ref_sigva:"",
    //                 objet_appel:"",
    //                // imputation:"",
    //                 marche_id:"", 
    //    },
          
        formData:{
              ref_appel:"",
              
              numero_autorisation:"",
              mode_passation_id:"",
                    type_appel:"",
                    financement:"",
                    nom_bailleurs:"",
                    date_emission:"",
                    date_limite:"",
                    objet_appel:"",
                    imputation:"",
                    marche_id:"",
            date_numero_autorisation:"",
            heure:"",
            note_techn:"",
                taux_fin:"",
                taux_tech:""
        },
        message_offre:"",
        edite_appel_offre:{
             	ref_appel:"",
                 numero_autorisation:"",
                 mode_passation_id:"",
                    type_appel:"",
                    financement:"",
                    nom_bailleurs:"",
                    date_emission:"",
                    date_limite:"",
                    objet_appel:"",
                    imputation:"",
                    marche_id:"",
            date_numero_autorisation:"",
            heure:"",
             note_techn:"",
                taux_fin:"",
                taux_tech:""
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
 //if(this.LCVM){
     return id => {
        if (id != null && id != "") {
          return this.appelOffres.filter(
            element => element.marche_id == this.macheid && element.note_techn!=null && element.ref_sigva==null
          );
        }
      };

 //}
//    else{
//         return id => {
//         if (id != null && id != "") {
//           return this.appelOffres.filter(
//             element => element.marche_id == this.macheid && element.ref_sigva==null 
//           );
//         }
//       };
//    }  
    },




// activation(){
//     ret 
//     return this.procedurePassations.filter(item => item.type_procedure_id==8);
// },


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
afficherEntrepriseNom(){
      return id =>{
        if(id != null && id !=""){
          let ObjetId =this.entreprises.find(element => element.id== id)
          if(ObjetId){
            return ObjetId.raison_sociale
          }

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

     afficherListeModePassation(){
    return this.procedurePassations.filter(item => item.code!="R3CV")
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


ajouterOffre22() {
      this.$("#ajouterOffre").modal({
        backdrop: "static",
        keyboard: false,
      });
    },

        afficherModalModifierActeDepense(index){
                this.$('#modificationModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edite_appel_offre = this.listeAppelOffre(this.macheid)[index];
                this.mode_passation_id=this.edite_appel_offre.mode_passation_id
                console.log(this.mode_passation_id)
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

          heure:"",
           note_techn:"",
                taux_fin:"",
                taux_tech:""

                }
    let marcheObjet=this.marches.find(marche=>marche.id==this.macheid)
    marcheObjet.attribue=1
      //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
     this.modifierMarche(marcheObjet)
     
            },     

           
//
afficherAutorisation(){
    return procedure =>{
        if(this.mode_passation_id){
            let objet=this.procedurePassations.find(item => item.id==this.mode_passation_id)
            console.log("oooooo")
            if(objet){
                if(this.inArray(procedure,objet.code)){
                    return true
                }
                return false
            }
        }
    }
},



 modfications(){
              console.log(this.edite_appel_offre)
                this.modifierAppelOffre(this.edite_appel_offre)
                this.$('#modifierActeEF').modal('hide');
            },


//  modfications(){
//     // let LCVM;
//     if(this.LCVM){
//         console.log('ok o, ok ok ok ') 
//     this.edite_appel_offre.mode_passation_id=this.mode_passation_id  
//      var nouvelObjet = {
//       ...this.edite_appel_offre,
//       marche_id: this.macheid,
//        type_appel: this.typeProcedure_id(this.procedurePassation_id(this.macheid)),
//           objet_appel:this.affichierObjetMarche(this.macheid),
//           date_facture_proformat:this.edite_appel_offre.date_facture_proformat,
//           entreprise_id:this.edite_appel_offre.entreprise_id,
//           ref_facture_proformat:this.edite_appel_offre.ref_facture_proformat,
//           ref_sigva:this.edite_appel_offre.ref_sigva
//          };
//     let marcheObjet=this.marches.find(marche=>marche.id==this.macheid)
//     marcheObjet.attribue=1
//       //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
//      this.modifierMarche(marcheObjet)    
//     }
//     else{
//    //console.log(this.edite_appel_offre)
//                 this.modifierAppelOffre(nouvelObjet)
//                // this.$('#modifierActeEF').modal('hide');
//     }
     
              
//             },
    


formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
      },
     watch: {
    mode_passation_id:function(val){
        let objet=this.procedurePassations.find(item => item.id==val)
       // console.log(objet)
        if(objet.code=="LCVM"){
           // console.log(objet)
            this.LCVM=true
        }
        else{
            this.LCVM =false
        }
        console.log(this.LCVM )
    }
  },
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1000px;
 margin: 0 -530px;
 height: 600px;

}
</style>