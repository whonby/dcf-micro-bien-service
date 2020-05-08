

<template>

<div>
<div id="exampleModalAvenant" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Avenant</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Marché</label>
            <div class="controls">
              <input
                type="text"
                :value="afficheNumeroMarcheAttribuer(macheid)"
                
                class="span"
               readonly
              />
              
              
            </div>
            </div>
            <div class="control-group">
            <label class="control-label">Type Acte finnancier</label>
            <div class="controls">
              <select v-model="formData.type_acte_financier">
                      <option
                        v-for="typeUniteA in typeActeEffetFinanciers"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
            </div>
            </div>
              <div class="control-group">
            <label class="control-label">Numero avenant</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.numero_avenant"
                class="span"
               
              />
              {{macheid}}
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">Objet</label>
            <div class="controls">
              <textarea rows="2"  v-model="formData.objet_avenant"  class="span" type="text">

              </textarea>
             
             
              
            </div>
          </div>
         
          <div class="control-group">
            <label class="control-label">Montant</label>
            <div class="controls">
              <input
                type="number"
                v-model="formData.montant_avenant"
                class="span"
               
              />
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">Date avenant</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_avenant"
                class="span"
               
              />
            </div>
          </div>
            
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterTypeTexteLocal"
          class="btn btn-primary"
          href="#"
        
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <div id="modificationModalAvenant" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Avenant</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Marché</label>
            <div class="controls">
            <input
                type="text"
                :value="afficheNumeroMarcheAttribuer(macheid)"
                
                class="span"
               readonly
              />
              
            </div>
          </div>
           <div class="control-group">
            <label class="control-label">Type Acte finnancier</label>
            <div class="controls">
              <select v-model="editAvenant.type_acte_financier">
                      <option
                        v-for="typeUniteA in typeActeEffetFinanciers"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
            </div>
            </div>
              <div class="control-group">
            <label class="control-label">Numero avenant</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAvenant.numero_avenant"
                class="span"
               
              />
            </div>
          </div>
             <div class="control-group">
            <label class="control-label">Objet</label>
            <div class="controls">
               <textarea rows="2"  v-model="editAvenant.objet_avenant"  class="span" type="text">

              </textarea>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label">Montant</label>
            <div class="controls">
              <input
                type="number"
                v-model="editAvenant.montant_avenant"
                class="span"
               
              />
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">Date avenant</label>
            <div class="controls">
              <input
                type="date"
                v-model="editAvenant.date_avenant"
                class="span"
               
              />
            </div>
          </div>
           
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal(editAvenant)"
          class="btn btn-primary"
          href="#"
        
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
                
               
                 
                      <table class="table table-bordered table-striped" v-if="macheid">
                  <thead>
                                    <tr>

                                        <th>Année</th>
                                         <th title="">Section</th>
                              
                                 <th title="">Fournisseur</th>
                                <th title="">N°facture</th>
                                 <th>Date facture</th>
                                  <th>Imputation</th>
                                <th>Montant</th>
                                <!-- <th>Service béneficiaire</th> -->
                                <th title="Observation service beneficiaire">Observation S-B</th>
                                <th title="Observation Controleur financier">Observation CF</th>
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr 
                    class="odd gradeX"
                    v-for="(realiteService, index) in afficheMarcheRealiteServiceFait(macheid)"
                    :key="realiteService.id"
                  >
                    <template v-if="validationDeEngagement(realiteService.marche_id) != 1">
                    <td >{{realiteService.exercice_budget || 'Non renseigné'}}</td>
                    <td >{{afficherSection(realiteService.section_id) || 'Non renseigné'}}</td>
                    <td >{{afficheNomFournisseur(afficheidFournisseurFacture(realiteService.facture_id)) || 'Non renseigné'}}</td>
                    <td >{{afficheNumeroFacture(realiteService.facture_id) || 'Non renseigné'}}</td>
                     <td >{{afficheDateFacture(realiteService.facture_id) || 'Non renseigné'}}</td> 
                     
                    <td >{{detail_marche.imputation  || 'Non renseigné'}}</td>
                     <td >{{formatageSomme(parseFloat(realiteService.montant)) || 'Non renseigné'}}</td>
                     <td >
                        <button v-if="realiteService.decision_service_beneficiaire == 1"  class="btn  btn-success" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_service_beneficiaire == 2" class="btn  btn-warning" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_service_beneficiaire == 3" class="btn  btn-danger" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                   
                  <td v-if="realiteService.decision_service_beneficiaire == 1">
                        <button v-if="realiteService.decision_controleur_financier == 1"  class="btn  btn-success" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_controleur_financier == 2" class="btn  btn-warning" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_controleur_financier == 3" class="btn  btn-danger" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                    <td v-else>
                        <h1 style="font-size:12px;color:red;text-align:center">Désactivé  </h1>
                    </td>
                      </template>
                      <template v-else>
                  <td >{{realiteService.exercice_budget || 'Non renseigné'}}</td>
                    <td >{{afficherSection(realiteService.section_id) || 'Non renseigné'}}</td>
                    <td >{{afficheNomFournisseur(afficheidFournisseurFacture(realiteService.facture_id)) || 'Non renseigné'}}</td>
                    <td >{{afficheNumeroFacture(realiteService.facture_id) || 'Non renseigné'}}</td>
                     <td >{{afficheDateFacture(realiteService.facture_id) || 'Non renseigné'}}</td> 
                     
                    <td >{{detail_marche.imputation  || 'Non renseigné'}}</td>
                     <td >{{formatageSomme(parseFloat(realiteService.montant)) || 'Non renseigné'}}</td>
                     <td>
                        <button v-if="realiteService.decision_service_beneficiaire == 1"  class="btn  btn-success" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_service_beneficiaire == 2" class="btn  btn-warning" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_service_beneficiaire == 3" class="btn  btn-danger" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                   
                  <td v-if="realiteService.decision_service_beneficiaire == 1">
                        <button v-if="realiteService.decision_controleur_financier == 1"  class="btn  btn-success" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_controleur_financier == 2" class="btn  btn-warning" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_controleur_financier == 3" class="btn  btn-danger" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                     <td v-else>
                        <h1 style="font-size:12px;color:red;text-align:center">Désactivé  </h1>
                    </td>
                    
               
                     </template> 
                     <td>
                        <router-link :to="{ name: 'detailRealiteServiceFait', params: {id_detailRealiteServiceFait:realiteService.id}}"
                class="btn btn-default " title="Detail Realite service fait">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link> 
                    <!-- <button v-if="realiteService.decision_controleur_financier == 1 && validationDeEngagement(realiteService.marche_id) == 1" class="btn " @click="afficherModalAjouterLiquidation(index)" title="Ajouter Liquidatation">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
                      <!-- <button v-if="Engage.decision_cf == 1" class="btn " @click="afficherModalAjouterMandat(index)" title="Ajouter Mandat">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
                      <button  class="btn btn-danger" @click="supprimerRealiteServiceFait(realiteService.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
               
                                    </tbody>
                                </table>

              
     




  






    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from './../../../../../Repositories/Repository';
import moment from 'moment';
export default {
    data(){
        return{
      formData :{
s_ua_id:"",
serviceua_id:"",

      },
       formData2:{
        famillearticle_id :"",
        qte_affecte:"",
        date_mise_service:"",
        identification:"",
        type_immo:"",
        nature_dentree:"",
        nature_bien:"",
        etat_immobilisation:"",
        cause_inactivite:"",

      },
       editAvenant: {},
search:""
        }
    },
    props:["macheid"],
    created(){},

              computed: {
            ...mapGetters("bienService", ['modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),

           ...mapGetters("SuiviImmobilisation", [
      "familles",
      "services",
      "listeBesoinValider",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo",
      "listeBesoinValider",
      "getAfficheStockArticle",
      "getPersoNormeArticle",
      "getPersoStock",
      "stockageArticle",
      "getFacture"
      
    ]),
 ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
  ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections","plans_programmes"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
   
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
 
      },
 
      methods:{ 

          ...mapActions('bienService',[  "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",]),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),

formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
</style>