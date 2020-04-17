
<template>
    <div>

                
                <h4> Liste acte effet financier </h4>
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                    <tr>

                        <th>Reference acte </th>
                       
                        <th>Montant acte</th>
                        <!-- <th>Type acte</th> -->
                        <th>Objet marche.</th>
                        <th>Imputation</th>
                        <th>Candidat retenu</th>
                       
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for=" effetFinancier in listeActeEffectFinnancier(macheid)"
                        :key="effetFinancier.id">
                        
                              <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{effetFinancier.reference_act || 'Non renseigné'}}</td>
                            <!-- <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{effetFinancier.libelle_act || 'Non renseigné'}}</td> -->
                             <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{formatageSomme(parseFloat(effetFinancier.montant_act ))|| 'Non renseigné'}}</td>
                              <!-- <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{effetFinancier.type_acte_effet.libelle || 'Non renseigné'}}</td> -->
                             <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{effetFinancier.marche.objet || 'Non renseigné'}}</td>
                             <!-- <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{effetFinancier.text_juridique.objet_text || 'Non renseigné'}}</td> -->
                             <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{effetFinancier.marche.imputation || 'Non renseigné'}}</td>
                              <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{afficherNomDossierCandidat(effetFinancier.candidat_personnel_id) || 'Non renseigné'}}</td>
<td>
      <div class="btn-group">
                            <button @click.prevent="supprimerActeEffetFinancier(effetFinancier.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span>
                            </button>
                        </div>
</td>
                    </tr>
                    </tbody>
                </table>

              
     



<div id="ajouterActeEffetFinancierP" class="modal hide grdirModalActeEffet">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter acte effet financier</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                        <tr>
                          <td>
                        <div class="control-group">
                        <label class="control-label">Type acte effet financier.</label>
                        <div class="controls">
                          <select v-model="formEffetFinancier.type_act_effet_id" class="span">
                                <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
                        </div>
                    </div>
                            </td>


                                          <!-- <td colspan="2">
                     <div class="control-group" v-if="selectionAttributionMarche(macheid)">
                        <label class="control-label">Candidat recruté </label>
                        <div class="controls" >
                            <input :value="selectionAttributionMarche(macheid).candidat_personnel_id" readonly/>
                        </div>
                    </div>
                                        <div class="control-group" v-else>
                                            <code>{{message_setion_vainqueur}}</code>
                                        </div>
                            </td> -->

                            <td colspan="2">

                       <div class="control-group">
                        <label class="control-label">Candidat retenu après analyse.</label>
                        <div class="controls">
                          <select v-model="formEffetFinancier.candidat_personnel_id" class="span">
                              <option value=""></option>
                                <option v-for="varText in afficherCandidat(macheid)" :key="varText.id"
                                        :value="varText.candidat_personnel_id">{{afficherNomDossierCandidat(varText.candidat_personnel_id)}}</option>
                            </select>
                        
                        </div>
                    </div>
                            </td>

                                          <!-- <td>
                     <div class="control-group" v-if="selectionAttributionMarche(marcheid)">
                        <label class="control-label">Candidat récruté </label>
                        <div class="controls" >
                            <input :value="selectionAttributionMarche(marcheid).nom_candidat" readonly/>
                        </div>
                    </div>
                                        <div class="control-group" v-else>
                                            <code>{{message_setion_vainqueur}}</code>
                                        </div>
                            </td> -->

                            <!-- <td>


                        <div class="control-group">
                        <label class="control-label">Text juridique </label>
                        <div class="controls">
                           <select v-model="formEffetFinancier.text_juridique_id" class="span">
                                <option v-for="varText in text_juridiques" :key="varText.id"
                                        :value="varText.id">{{varText.objet_text}}</option>
                            </select>
                        </div>
                    </div>
                            </td> -->

                              <!-- <td>
                        <div class="control-group">
                        <label class="control-label">Ano bailleur dmp.</label>
                        <div class="controls">
                       <input :value="info_avis_bailleur" readonly>
                        
                        </div>
                    </div>
                            </td> -->
                           
                       
                          
                                   <td colspan="">
                    <div class="control-group">
                        <label class="control-label">Autorité approbatrice</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formEffetFinancier.autorite_approbation"
                                    class="span"
                                    placeholder=" "
                            />
                            
                        </div>
                    </div>

                            </td>
                        </tr>

                        <tr>
                           


                                           <td colspan="2">
                    <div class="control-group">
                        <label class="control-label"> date d'approbation</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formEffetFinancier.date_approbation"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>

                            </td>

                                  <td colspan="2">
                    <div class="control-group">
                        <label class="control-label">Numero du marche/contract</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formEffetFinancier.numero_marche"
                                    class="span"
                                    placeholder="Saisir le numero "
                            />
                        </div>
                    </div>

                            </td>
                             <!-- <td>

                    <div class="control-group">
                        <label class="control-label">Code acte </label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formEffetFinancier.code_act"
                                    class="span"
                                    placeholder="Saisir le code acte"
                            />
                        </div>
                    </div>
                            </td> -->

                           </tr>
                        <tr>
                              <td colspan="4" width="550">
                      
                         <div class="control-group">
                            <label class="control-label">Objet offre :</label>
                            <div class="controls">
                            <textarea  :value="affichierObjetMarche(macheid)"  class="textarea_editor span11" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                          </td>     
                           
                          
                        </tr>
                        <tr>
                            <td>
                    <div class="control-group">
                        <label class="control-label">Reference acte</label>
                        <div class="controls">
                            <input type="text" v-model="formEffetFinancier.reference_act"
                                    class="span"
                                    placeholder="refence acte"
                            />
                        </div>
                    </div>
                            </td>
                            <td>
                     <div class="control-group">
                        <label class="control-label">Incidence financière</label>
                        <div class="controls">
                            <select  v-model="formEffetFinancier.incidence_financiere" class="span">
                               <option value="0">Oui</option>
                               <option value="1">Non</option>
                            </select>
                                    
                                  
                            
                        </div>
                    </div>
                            </td>
                            <td>

                     <div class="control-group">
                        <label class="control-label">Montant acte/réel du marché</label>
                        <div class="controls">
                            <input type="text" v-model="formEffetFinancier.montant_act"
                                    class="span"
                                    placeholder="Saisir le montant "
                            />
                        </div>
                    </div>
                            </td>
                            <td>

                            <div class="control-group">
                        <label class="control-label" >Date de signature attributaire</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_attributaire"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>
                        </tr>
                        <tr>

                    
                     <td>
                     <div class="control-group">
                        <label class="control-label">Date ordre de service demarrage</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_odre_service"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>


                                         <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Date fin exécution</label>
                        <div class="controls">
                            <input type="date" :min="formEffetFinancier.date_odre_service" :readonly="getDateFinExécutionValue" v-model="formEffetFinancier.date_fin_exe"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>
                        
                        

                                           <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Durée d'exécution(jrs)</label>
                        <div class="controls">
                            <input type="text"  readonly :value="nombreDejourCalcule"
                                    class="span"
                                   
                            />
                        </div>
                    </div>
                            </td>


                                             <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Date de reception definitive</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_reception"
                                    class="span"
                                    placeholder=""
                            />
                            <input type="hidden" v-model="formEffetFinancier.difference_personnel_bienService"/>
                        </div>
                    </div>
                            </td>
                        </tr>

                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouterModalActeEffetFinancierLocal"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>

            <!-- <div class="modal-footer">
                <a v-if="selectionAttributionMarche(marcheid)" @click.prevent="ajouterModalActeEffetFinancierLocal(selectionAttributionMarche(marcheid).nom_candidat)"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div> -->
        </div>
<!--- fin ajout acte effet financier  -->







<div id="modifierActeEF" class="modal hide grdirModalActeEffet">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier acte effet financier</h3>
            </div>
            <div class="modal-body">

                             <table class="table table-bordered table-striped">
                        <tr>
                           <td>
                        <div class="control-group">
                        <label class="control-label">Type acte effet financier.</label>
                        <div class="controls">
                          <select v-model="editActeEffetFinancier.type_act_effet_id" class="span">
                                <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
                        </div>
                    </div>
                            </td>
                            <td colspan="2">

                       <div class="control-group">
                        <label class="control-label">Dossier candidat.</label>
                        <div class="controls">
                          <select v-model="editActeEffetFinancier.candidat_personnel_id" class="span">
                                <option v-for="varText in dossierPersonnels" :key="varText.id"
                                        :value="varText.id">{{varText.nom_candidat}} {{varText.prenom_candidat}} </option>
                            </select>
                        
                        </div>
                    </div>
                            </td>

                                          <!-- <td>
                     <div class="control-group" v-if="selectionAttributionMarche(marcheid)">
                        <label class="control-label">Candidat récruté </label>
                        <div class="controls" >
                            <input :value="selectionAttributionMarche(marcheid).nom_candidat" readonly/>
                        </div>
                    </div>
                                        <div class="control-group" v-else>
                                            <code>{{message_setion_vainqueur}}</code>
                                        </div>
                            </td> -->

                            <!-- <td>


                        <div class="control-group">
                        <label class="control-label">Text juridique </label>
                        <div class="controls">
                           <select v-model="formEffetFinancier.text_juridique_id" class="span">
                                <option v-for="varText in text_juridiques" :key="varText.id"
                                        :value="varText.id">{{varText.objet_text}}</option>
                            </select>
                        </div>
                    </div>
                            </td> -->

                              <!-- <td>
                        <div class="control-group">
                        <label class="control-label">Ano bailleur dmp.</label>
                        <div class="controls">
                       <input :value="info_avis_bailleur" readonly>
                        
                        </div>
                    </div>
                            </td> -->
                           
                       
                          
                                   <td colspan="">
                    <div class="control-group">
                        <label class="control-label">Autorité approbatrice</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editActeEffetFinancier.autorite_approbation"
                                    class="span"
                                    placeholder=" "
                            />
                        </div>
                    </div>

                            </td>
                        </tr>

                        <tr>
                           


                                           <td colspan="2">
                    <div class="control-group">
                        <label class="control-label"> date d'approbation</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="editActeEffetFinancier.date_approbation"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>

                            </td>

                                  <td colspan="2">
                    <div class="control-group">
                        <label class="control-label">Numero du marche/contract</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editActeEffetFinancier.numero_marche"
                                    class="span"
                                    placeholder="Saisir le numero "
                            />
                        </div>
                    </div>

                            </td>
                             <!-- <td>

                    <div class="control-group">
                        <label class="control-label">Code acte </label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formEffetFinancier.code_act"
                                    class="span"
                                    placeholder="Saisir le code acte"
                            />
                        </div>
                    </div>
                            </td> -->

                           </tr>
                        <tr>
                              <td colspan="4" width="550">
                      
                         <div class="control-group">
                            <label class="control-label">Objet offre :</label>
                            <div class="controls">
                            <textarea  :value="affichierObjetMarche(macheid)"  class="textarea_editor span11" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                          </td>     
                           

                          
                        </tr>
                        <tr>
                            <td>
                    <div class="control-group">
                        <label class="control-label">Reference acte</label>
                        <div class="controls">
                            <input type="text" v-model="editActeEffetFinancier.reference_act"
                                    class="span"
                                    placeholder="refence acte"
                            />
                        </div>
                    </div>
                            </td>
                            <td>
                     <div class="control-group">
                        <label class="control-label">Incidence financière</label>
                        <div class="controls">
                            <select  v-model="editActeEffetFinancier.incidence_financiere" class="span">
                               <option value="0">Oui</option>
                               <option value="1">Non</option>
                            </select>
                                    
                                  
                            
                        </div>
                    </div>
                            </td>
                            <td>

                     <div class="control-group">
                        <label class="control-label">Montant acte/réel du marché</label>
                        <div class="controls">
                            <input type="text" v-model="editActeEffetFinancier.montant_act"
                                    class="span"
                                    placeholder="Saisir le montant "
                            />
                        </div>
                    </div>
                            </td>
                            <td>

                            <div class="control-group">
                        <label class="control-label" >Date de signature attributaire</label>
                        <div class="controls">
                            <input type="date" v-model="editActeEffetFinancier.date_attributaire"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>
                        </tr>
                        <tr>

                    
                     <td>
                     <div class="control-group">
                        <label class="control-label">Date ordre de service demarrage</label>
                        <div class="controls">
                            <input type="date" v-model="editActeEffetFinancier.date_odre_service"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>


                                         <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Date fin exécution</label>
                        <div class="controls">
                            <input type="date" :min="editActeEffetFinancier.date_odre_service" :readonly="getDateFinExécutionValueEdit" v-model="editActeEffetFinancier.date_fin_exe"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>
                        
                        

                                           <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Durée d'exécution(jrs)</label>
                        <div class="controls">
                            <input type="text"  readonly :value="nombreDejourCalculeEdit"
                                    class="span"
                                   
                            />
                        </div>
                    </div>
                            </td>


                                             <td>
                     <div class="control-group">
                        <label class="control-label" title=" ">Date de reception definitive</label>
                        <div class="controls">
                            <input type="date" v-model="editActeEffetFinancier.date_reception"
                                    class="span"
                                    placeholder=""
                            />
                            <input type="hidden" v-model="editActeEffetFinancier.difference_personnel_bienService"/>
                        </div>
                    </div>
                            </td>
                        </tr>

                    </table>
              


            </div>
             <div class="modal-footer">
                <a
                        @click.prevent="modifierModalActeEffetFinancierLocal"
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
//import moment from 'moment';
export default {
    data(){
        return{
        
        formEffetFinancier:{
              code_act:"",
             libelle_act:"",
             reference_act:"",
             objet_act:"",
             incidence_financiere:"",
             montant_act:"",
              date_attributaire:"",
             date_reception:"",
             duree:"",
             date_fin_exe:"",
             date_odre_service:"",
             livrable_id:"",
        autorite_approbation:"",
        date_approbation:"",
            // text_juridique_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
            // entreprise_id:"",
             candidat_personnel_id:"",
             marche_id:"",
             numero_marche:"",
             difference_personnel_bienService:"personnel"
        },
        editActeEffetFinancier:{
             code_act:"",
             libelle_act:"",
             reference_act:"",
             objet_act:"",
             incidence_financiere:"",
             montant_act:"",
              date_attributaire:"",
             date_reception:"",
             duree:"",
             date_fin_exe:"",
             date_odre_service:"",
             livrable_id:"",
        autorite_approbation:"",
        date_approbation:"",
            // text_juridique_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
             //entreprise_id:"",
             candidat_personnel_id:"",
             marche_id:"",
             numero_marche:"",
             difference_personnel_bienService:"personnel"
        }

        }
    },
    props:["macheid"],
    created(){},

       computed: {

            ...mapGetters("bienService", [ "gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses','dossierPersonnels']),
              ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe', 
  'planActe']),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
      

   
afficherCandidat () {
                return id => {
                    if (id != "") {
                        // console.log("Marche lettre inviation marche")
                        return this.selectionner_candidats.filter(idmarche => idmarche.marche_id == id)

                       // let contratValider =this.gettersPersonnaliserRapportJugement
                     }
             }
            },




          




      
       afficherNomDansPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.dossierPersonnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_candidat;
      }
      return 0
        }
      };
    },



      //   }
            afficherNomDossierCandidat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.dossierPersonnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_candidat.concat(' ', qtereel.prenom_candidat);
      }
      return 0
        }
      };
    },




    // afficher l'objet du marcher

    affichierObjetMarche(){
        return id =>{
            if(id!=null && id!=""){
                let objetMarche = this.marches.find(idMarche => idMarche.id ==id);
                if(objetMarche){
                    return objetMarche.objet
                }
                 return 0
            }
        }
    },


nombreDejourCalcule(){
                let vM=this;
    const acteAffet = vM.formEffetFinancier
    if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
     if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null

       var dateF = new Date(acteAffet.date_fin_exe).getTime()
        var dateO = new Date(acteAffet.date_odre_service).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.formEffetFinancier.duree=diffJour
                  return  diffJour;
   
},

getDateFinExécutionValue(){
    return !this.formEffetFinancier.date_odre_service !=""
},




nombreDejourCalculeEdit(){
                let vM=this;
    const acteAffetEdit = vM.editActeEffetFinancier
    if(acteAffetEdit.date_odre_service == acteAffetEdit.date_fin_exe &&  acteAffetEdit.date_fin_exe !=="" && acteAffetEdit.date_odre_service !=="") return 1
     if(acteAffetEdit.date_fin_exe =="" && acteAffetEdit.date_odre_service =="") return null

       var dateF = new Date(acteAffetEdit.date_fin_exe).getTime()
        var dateO = new Date(acteAffetEdit.date_odre_service).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.editActeEffetFinancier.duree=diffJour
                  return  diffJour;
   
},

getDateFinExécutionValueEdit(){
    return !this.editActeEffetFinancier.date_odre_service !=""
},

      
                listeActeEffectFinnancier: function () {
                return macheid => {
                    if (macheid != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.getActeEffetFinancierPersonnaliserContrat.filter(idmarche => idmarche.marche_id == macheid)
                    }
                }
            },


// afficher les infos de type acte

affichierIdActeFinancierDansActePlan() {
      const qtereel = this.planActe.find(
        qtreel => qtreel.code == "02",
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

AffichierElementParent() {
      
      return id => {
        if (id != null && id != "") {
          return this.planActe.filter(element => element.parent == id);
        }
      };
    },

            
      
      },

      methods:{ 

          ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),

              

              ajouterModalActeEffetFinancierLocal(){
        // var nouvelObjet = {
        //     ...this.formEffetFinancier,
        //     nom: this.afficherNomDansPersonnel(formEffetFinancier.candidat_personnel_id)
        // }
    //let entreprisePremier=this.entreprises.find(item=>item.numero_rc==rcm)
             
    this.formEffetFinancier.marche_id=this.macheid
    //this.formEffetFinancier.entreprise_id=entreprisePremier.id
    this.ajouterActeEffetFinancier(this.formEffetFinancier)
    let marcheObjet=this.marches.find(marche=>marche.id==this.macheid)
    marcheObjet.attribue=2
    marcheObjet.numero_marche=this.formEffetFinancier.numero_marche
   // console.log(marcheObjet)
    this.modifierMarche(marcheObjet)
    this.formEffetFinancier = {
             code_act:"",
             libelle_act:"",
             reference_act:"",
             objet_act:"",
             incidence_financiere:"",
             montant_act:"",
              date_attributaire:"",
             date_reception:"",
             duree:"",
             date_fin_exe:"",
             date_odre_service:"",
             livrable_id:"",
        autorite_approbation:"",
        date_approbation:"",
             candidat_personnel_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
            // entreprise_id:"",
             marche_id:"",
             numero_marche:"",
             difference_personnel_bienService:"personnel"

    }
},

         afficherModalModifierActeEffetFinancier(index){
    this.$('#modifierActeEF').modal({
        backdrop: 'static',
        keyboard: false
    });
    this.editActeEffetFinancier = this.acteEffetFinanciers.find(item=>item.id==index)
}, 

modifierModalActeEffetFinancierLocal(){

   // this.editActeEffetFinancier.entreprise_id=entreprise_id



    this.modifierActeEffetFinancier(this.editActeEffetFinancier)
    this.$('#modifierActeEF').modal('hide');
},

formatageSomme:formatageSomme,

//  formaterDate(date) {
//               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
//             },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
</style>
