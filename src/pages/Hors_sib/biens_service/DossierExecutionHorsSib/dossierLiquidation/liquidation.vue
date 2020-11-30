

<template>

<div>

                 
                      <table class="table table-bordered table-striped" v-if="macheid">
                      <thead>
                                    <tr>

                                        <th>Année</th>
                                          <th title="">N°bon manuel</th>
                                <th title="">N°demande</th>
                           
                                <!-- <th title="">Adresse fournisseur</th> -->
                               
                                <th title="">Montant Autorisé</th>
                                
                                  <th title="">Disponible</th>
                                  <!-- <th>Date paiement</th> -->
                                  <th>Imputation budgetaire</th>
                                
                                <!-- <th>Service béneficiaire</th> -->
                                <th>Observation du Emmetteur</th>
                                
                                <th>Observation Controleur financier</th>
                                <th>Observation du ordonnateur</th>
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    
                <tr 
                    class="odd gradeX"
                    v-for="(liquida, index) in afficheMarcheLiquidation(detail_marche.id)"
                    :key="liquida.id"
                  >
                    <template v-if="validationRealiteServiceFait(liquida.marche_id) != 1">
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.exo_id || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.numero_bon_manuel || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.numero_demande || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{afficheMontantAutorise(liquida.marche_id) || 0}}</td>
                     <td @dblclick="afficherModalModificationLiquidation(index)">{{sommeEgagementLigne(liquida.marche_id) || 0 }}</td> 
                     
                     
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.imputation_budgetaire || 'Non renseigné'}}</td>
                   
                     <td>
                        <button v-if="liquida.decision_emetteur == 1"  class="btn  btn-success" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_emetteur == 2" class="btn  btn-warning" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_emetteur == 3" class="btn  btn-danger" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                   
                  <td v-if="liquida.decision_emetteur == 1">
                        <button v-if="liquida.decision_controleur_financier == 1"  class="btn  btn-success" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                    <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_controleur_financier == 2" class="btn  btn-warning" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_controleur_financier == 3" class="btn  btn-danger" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                     <td v-else>
                        <h1 style="font-size:12px;color:red;">Désactivé  </h1>
                    </td>
                     <td v-if="liquida.decision_controleur_financier == 1">
                        <button v-if="liquida.decision_ordonnateur == 1"  class="btn  btn-success" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_ordonnateur == 2" class="btn  btn-warning" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_ordonnateur == 3" class="btn  btn-danger" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                    <td v-else>
                        <h1 style="font-size:12px;color:red;">Désactivé  </h1>
                    </td>
                    
                     </template>
                      <template v-else>
                <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.exo_id || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.numero_bon_manuel || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.numero_demande || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{afficheMontantAutorise(liquida.marche_id) || 0}}</td>
                     <td @dblclick="afficherModalModificationLiquidation(index)">{{sommeEgagementLigne(liquida.marche_id) || 0 }}</td> 
                     
                     
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.imputation_budgetaire || 'Non renseigné'}}</td>
                   
                     <td>
                        <button v-if="liquida.decision_emetteur == 1"  class="btn  btn-success" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_emetteur == 2" class="btn  btn-warning" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_emetteur == 3" class="btn  btn-danger" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                   
                  <td v-if="liquida.decision_emetteur == 1">
                        <button v-if="liquida.decision_controleur_financier == 1"  class="btn  btn-success" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                    <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_controleur_financier == 2" class="btn  btn-warning" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_controleur_financier == 3" class="btn  btn-danger" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                     <td v-else>
                        <h1 style="font-size:12px;color:red;">Désactivé  </h1>
                    </td>
                     <td v-if="liquida.decision_controleur_financier == 1">
                        <button v-if="liquida.decision_ordonnateur == 1"  class="btn  btn-success" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_ordonnateur == 2" class="btn  btn-warning" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_ordonnateur == 3" class="btn  btn-danger" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                    <td v-else>
                        <h1 style="font-size:12px;color:red;">Désactivé  </h1>
                    </td>
                
                     </template>
                     <td>
                        <!-- <router-link :to="{ name: 'DetailEngagement', params: {id_detail_engagement:realiteService.id}}"
                class="btn btn-default " title="Detail Engagement">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link>  -->
                    <button v-if="liquida.decision_ordonnateur == 1 && validationRealiteServiceFait(liquida.marche_id) == 1" class="btn " @click="afficherModalAjouterMandatApresLiquidation(index)" title="Ajouter Mandat">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button>
                      <!-- <button v-if="Engage.decision_cf == 1" class="btn " @click="afficherModalAjouterMandat(index)" title="Ajouter Mandat">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
                      <button class="btn btn-danger"  @click="supprimerLiquidation(liquida.id)">
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