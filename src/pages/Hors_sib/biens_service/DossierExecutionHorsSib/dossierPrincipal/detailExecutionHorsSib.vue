afficheNumeroMarche
<template>
  	<div>

<div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>DETAIL  MARCHE </h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>
   <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                       <h4 v-if="detail_marche" style="text-align: center;font-size:20px;font-weight:bold;">Lot{{NumeroDuLot(detail_marche.id)}} : {{detail_marche.objet}} </h4>
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                               <!-- <th style="font-size:12px;font-weight:bold;">Reference marché</th> -->
                               <th style="font-size:12px;font-weight:bold;">Numéro marché</th>
                                <th style="font-size:12px;font-weight:bold;">Objet marché</th>
                                
                             
                                <th style="font-size:12px;font-weight:bold;">Type de marché</th>
                                <!-- <th style="font-size:12px;font-weight:bold;">Procédure de passation </th> -->
                                <th style="font-size:12px;font-weight:bold;">Unite administrative</th>
                                <th style="font-size:12px;font-weight:bold;">Activité</th>
                    <th style="font-size:12px;font-weight:bold;">Imputation</th>
                       <th style="font-size:12px;font-weight:bold;">Montant de base</th>
                    <!-- <th>Ligne Budgetaire</th>
                                <th>Exercice Budgetaire</th> -->
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <!-- <td class="taskStatus" style="font-size:14px;font-weight:bold;">{{detail_marche.reference_marche}}</td> -->
                                
                                <td class="taskStatus" style="font-size:14px;font-weight:bold;">{{afficheNumeroMarche(detail_marche.id)}}</td>
                                 <td class="taskDesc" style="font-size:14px;font-weight:bold;">{{detail_marche.objet}}</td>
                               
                                <td class="taskOptions" style="font-size:14px;font-weight:bold;">
                                    {{LibelleTypeMarche(detail_marche.type_marche_id)}}
                                </td>
                                <!--<td class="taskOptions" style="font-size:14px;font-weight:bold;">
                                     {{afficheModePassation(detail_marche.procedure_passation_id)}} -->
                                   
                               <!-- <span v-if="DisponibleBudgetaireApresLiquidation < 10000000 ">Procédure Simplifiée de demande de Cotation(PSC Sans comité)</span>
                         <span v-else-if="DisponibleBudgetaireApresLiquidation < 30000000 ">Procédure Simplifiée de demande de Cotation(PSC Avec comité)</span>
                         <span v-else-if="DisponibleBudgetaireApresLiquidation < 60000000 ">Procédure Simplifiée à compétition Limitée(PSL)</span>
                         <span v-else-if="DisponibleBudgetaireApresLiquidation < 100000000 ">Procédure Simplifiée à compétition Ouverte(PSO)</span>
                         <span v-else-if="DisponibleBudgetaireApresLiquidation > 100000000 ">Appel d'Offre Ouvert(AON ou AOI)</span>
                         <span v-else></span> 
                                </td>-->
                                <td class="taskOptions" style="font-size:14px;font-weight:bold;">
                                    {{LibelleUniteAdministrative(detail_marche.unite_administrative_id)}}
                                </td>
                                <td @dblclick="afficherModalModifierTypePrestation(index)" style="font-size:14px;font-weight:bold;">
                   {{LibelleActivite(detail_marche.activite_id) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)" style="font-size:14px;font-weight:bold;">
                   {{afficherInputationBudgetaire(afficherIdLigneBudgetaire(afficherIdParent(detail_marche.id)))|| 'Non renseigné'}}</td>
                    <td class="taskOptions" style="font-size:14px;font-weight:bold;color:red;">
                                    {{formatageSomme(parseFloat(afficheMontantReelMarche(detail_marche.id)))}}
                                </td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{detail_marche.afficheEconomique.code || 'Non renseigné'}}- {{detail_marche.afficheEconomique.libelle || 'Non renseigné'}}</td>
                     
                                <td class="taskOptions">
                                    Ok
                                </td> -->
                            </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">TABLEAU DE BORD</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab2">DETAIL EXECUTION</a>
                      </li>
                        <li>
                        <a data-toggle="tab" href="#tab22">PARAMETRAGE ECHEANCIER</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab03">IMAGES DES MARCHES</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab040">Evolution du marché</a>
                      </li> 
                    
                    </ul>
                  </div>
                         <div class="widget-content tab-content">
                           <!-- <div id="tab03" class="tab-pane ">
                         <imageMarche :macheid="detail_marche.id"></imageMarche>
                      </div> -->
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
  <tableauBordExecution :macheid="detail_marche.id"></tableauBordExecution>
          </div>
                            <div id="tab2" class="tab-pane ">
  <div class="widget-content nopadding" >

                  <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                          
                            <ul class="nav nav-tabs">
                              <li class="active"><a data-toggle="tab" href="#tab2078">Avenant</a></li>
                               <li ><a data-toggle="tab" href="#tab100">Facture</a></li>
                                <li ><a data-toggle="tab" href="#tab45785" >Décompte</a></li>
                              <li ><a data-toggle="tab" href="#Financement" >Financement</a></li>
                              <!-- <template v-if="typeOrdrePaiementHs(detail_marche.id) == 1">
                                
                                <li ><a data-toggle="tab" href="#tab15550" >Réalité service fait</a></li>
                                <li ><a data-toggle="tab" href="#tab120120" >Liquidation</a></li>
                                <li><a data-toggle="tab" href="#tab20" >Ordre Paiement Définitive</a></li>
                               <li ><a data-toggle="tab" href="#tab45785" >Décompte</a></li>
                              <li ><a data-toggle="tab" href="#Financement" >Financement</a></li>
                              </template>
                               <template v-if="typeOrdrePaiementHs(detail_marche.id) == 2">
                                <li ><a data-toggle="tab" href="#tab10" >Ordre Paiement Provisoire</a></li>
                                <li ><a data-toggle="tab" href="#tab120120" >Ordre Paiement Annulation</a></li>
                                <li ><a data-toggle="tab" href="#tab15550" >Réalité service fait</a></li>
                                <li><a data-toggle="tab" href="#tab20" >Ordre Paiement Définitive</a></li>
                              
                              </template> -->
                               
                             </ul>
                         
                            
                        </div>
                       
                          
                             <div class="widget-content tab-content">
                            <div id="Financement" class="tab-pane "><financement :macheid="detail_marche.id"></financement></div> 
<div id="tab2078" class="tab-pane active "><avenant :macheid="detail_marche.id"></avenant></div>             
<div id="tab100" class="tab-pane  "><facture :macheid="detail_marche.id"></facture></div> 
<div id="tab45785" class="tab-pane  "><decompte :macheid="detail_marche.id"></decompte></div>
                       
 <!-- <div id="tab20" class="tab-pane  ">
                        
                         
                         <div id="tab9563" class="tab-pane active">
                           <div class="widget-title">
                            <ul class="nav nav-tabs">
                                 <li class="active" v-if="typeOrdrePaiementHs(detail_marche.id) == 1"><a data-toggle="tab" href="#tab789654">Service Bénéficiaire</a></li>
                                  <li class="" v-if="typeOrdrePaiementHs(detail_marche.id) == 1"><a data-toggle="tab" href="#tab895632">Controlleur Financier</a></li> 
                                   <li class="active" v-if="typeOrdrePaiementHs(detail_marche.id) == 2"><a data-toggle="tab" href="#opdefinitbs">Service Bénéficiaire</a></li>
                                  <li class="" v-if="typeOrdrePaiementHs(detail_marche.id) == 2"><a data-toggle="tab" href="#opdefinitcf">Controlleur Financier</a></li>                                 
                            </ul>
                        </div>
                         <div class="widget-content tab-content">
                           
                         <div id="tab789654" class="tab-pane active " v-if="typeOrdrePaiementHs(detail_marche.id) == 1"><listeOpDefinitiveBsDirect :macheid="detail_marche.id"></listeOpDefinitiveBsDirect></div>
                            <div id="tab895632" class="tab-pane  " v-if="typeOrdrePaiementHs(detail_marche.id) == 1"><listeOpDefinitiveCfDirect :macheid="detail_marche.id"></listeOpDefinitiveCfDirect></div>
                        <div id="opdefinitbs" class="tab-pane active " v-if="typeOrdrePaiementHs(detail_marche.id) == 2"><listeOpDefinitiveBsprov :macheid="detail_marche.id"></listeOpDefinitiveBsprov></div>
                            <div id="opdefinitcf" class="tab-pane  " v-if="typeOrdrePaiementHs(detail_marche.id) == 2"><listeOpDefinitivecfprov :macheid="detail_marche.id"></listeOpDefinitivecfprov></div>
                        
                         </div>
                         </div>
          
                           
                       </div> -->


                       <!-- <div id="tab10" class="tab-pane  ">
                        
                         
                         <div id="tab7896532" class="tab-pane active">
                           <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#opProvisoirebs">Service Bénéficiaire</a></li>
                                  <li class=""><a data-toggle="tab" href="#opProvisoirecf">Controlleur Financier</a></li>                                    
                            </ul>
                        </div>
                         <div class="widget-content tab-content">
                           <div id="opProvisoirebs" class="tab-pane active "><listeOpProvisoireBs :macheid="detail_marche.id"></listeOpProvisoireBs></div>
                            <div id="opProvisoirecf" class="tab-pane  "><listeOpProvisoireCf :macheid="detail_marche.id"></listeOpProvisoireCf></div>
                           
                         </div>
                         </div>
          
                           
                       </div> -->
                       
                        
                         
                         <!-- <div id="tab15550" class="tab-pane">
                           <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active" v-if="typeOrdrePaiementHs(detail_marche.id) == 1"><a data-toggle="tab" href="#ServiceRealiteFaitBS">Service Bénéficiaire</a></li>
                                  <li class="" v-if="typeOrdrePaiementHs(detail_marche.id) == 1"><a data-toggle="tab" href="#ServiceRealiteFaitCF">Controlleur Financier</a></li>
                                   <li class="active" v-if="typeOrdrePaiementHs(detail_marche.id) == 2"><a data-toggle="tab" href="#ServiceRealiteFaitBSprov">Service Bénéficiaire</a></li>
                                  <li class="" v-if="typeOrdrePaiementHs(detail_marche.id) == 2"><a data-toggle="tab" href="#ServiceRealiteFaitCFprov">Controlleur Financier</a></li>
                                                  
                            </ul>
                        </div>
                         <div class="widget-content tab-content">
                           <div id="ServiceRealiteFaitBS" class="tab-pane active " v-if="typeOrdrePaiementHs(detail_marche.id) == 1"><realiteServiceFaitServiceBHs :macheid="detail_marche.id"></realiteServiceFaitServiceBHs></div>
                           <div id="ServiceRealiteFaitCF" class="tab-pane" v-if="typeOrdrePaiementHs(detail_marche.id) == 1"><realiteServiceFaitCf :macheid="detail_marche.id"></realiteServiceFaitCf></div>
                      <div id="ServiceRealiteFaitBSprov" class="tab-pane active " v-if="typeOrdrePaiementHs(detail_marche.id) == 2"><realiteServiceFaitServiceOpProvisoireBS :macheid="detail_marche.id"></realiteServiceFaitServiceOpProvisoireBS></div>
                           <div id="ServiceRealiteFaitCFprov" class="tab-pane" v-if="typeOrdrePaiementHs(detail_marche.id) == 2"><realiteServiceFaitServiceOpProvisoireCf :macheid="detail_marche.id"></realiteServiceFaitServiceOpProvisoireCf></div>
                         </div>
                         </div>  -->
                         <!-- <div id="tab120120" class="tab-pane">
                           <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#opAnnulationbs">Op Annulation</a></li>
                               
                            </ul>
                        </div>
                         <div class="widget-content tab-content">
                          
                           <div id="opAnnulationbs" class="tab-pane active"><listeOpAnnulation :macheid="detail_marche.id"></listeOpAnnulation></div>
                          
                         </div>
                         </div> -->
                          </div>
                         
                          
          
                           
                       
                       
<!--   
<div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau</a>
       
      </div> -->
  
                </div>
            </div>
        </div>
          </div>
        </div>
                      <div id="tab22" class="tab-pane ">
                          <echeance-marche :marche="detail_marche"></echeance-marche>
                      </div>

                       <div id="tab03" class="tab-pane ">
                      
                         <imageMarche :macheid="detail_marche.id"></imageMarche>
                      </div>

                      <div id="tab040" class="tab-pane ">
                         <graphiqueExecutionMarche :macheid="detail_marche.id"></graphiqueExecutionMarche>
                      </div>
      </div>
                </div>
              </table>
              

</div>
    </div>
</div>


    </div>
    
        <!-- <div class="container-fluid"> -->


    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->








    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->













        </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import moment from "moment";
    import { formatageSomme } from './../../../../../Repositories/Repository';
   
   import avenant from "../../../../../pages/bien_service/contractualisation/DossierExecution/dossierAvenant/avenant";
   import facture from "../dossierFacture/factureHs";
   import decompte from "../dossierDecompte/decomptePro";
   import graphiqueExecutionMarche from "../../../../bien_service/contractualisation/DossierExecution/DossierGraphiqueExecutionMarche/graphiqueExecutionMarche";
// import avenant from "../../../../../pages/bien_service/contractualisation/DossierExecution/dossierAvenant/avenant";
// import facture from "../../../../../pages/bien_service/contractualisation/DossierExecution/dossierFacture/facture";
// import decompte from "../../../../../pages/bien_service/contractualisation/DossierExecution/dossierDecompte/decompte";
    
//     import listeOpDefinitiveBsDirect from "../../DossierExecutionHorsSib/DossierOrdrePaiement/listeOpDefinitiveBsDirect.vue";
//     import listeOpDefinitiveCfDirect from "../../DossierExecutionHorsSib/DossierOrdrePaiement/listeOpDefinitiveCfDirect.vue";
//     import listeOpProvisoireBs from "../DossierOrdrePaiement/DossierOpProvisoire/listeOpProvisoireBs";
//      import listeOpProvisoireCf from "../DossierOrdrePaiement/DossierOpProvisoire/listeOpProvisoireCf";
//       import listeOpAnnulation from "../DossierOrdrePaiement/DossierOpProvisoire/listeOpAnnulation";
//     import listeOpDefinitiveBsprov from "../DossierOrdrePaiement/DossierOpProvisoire/listeOpDefinitiveBsprov";    
//         import listeOpDefinitivecfprov from "../DossierOrdrePaiement/DossierOpProvisoire/listeOpDefinitivecfprov";
     
//       import realiteServiceFaitServiceBHs from "../dossierRealiteServiceFait/realiteServiceFaitServiceBHs";
//       import realiteServiceFaitCf from "../dossierRealiteServiceFait/realiteServiceFaitCfHs";
// import realiteServiceFaitServiceOpProvisoireBS from "../dossierRealiteServiceFait/realiteServiceFaitServiceOpProvisoireBS";
// import realiteServiceFaitServiceOpProvisoireCf from "../dossierRealiteServiceFait/realiteServiceFaitServiceOpProvisoireCf";
       //bien_service/contractualisation/DossierExecution/dossierImageMarche/imageMarche
                  import financement from "../dossierFinancement/financementHs";
                  import imageMarche from "../../../../bien_service/contractualisation/DossierExecution/dossierImageMarche/imageMarche";
                import tableauBordExecution from "../tableauBordExecution/tableauBordExecution";
  import EcheanceMarche from "../../../../../pages/echeanciers/EcheanceMarche";
  export default {
  watch: {
  },
        name: 'compte',
        components:{
          // listeOpDefinitiveBsprov,
          // listeOpDefinitivecfprov,
          // realiteServiceFaitServiceOpProvisoireBS,
          // realiteServiceFaitServiceOpProvisoireCf,
            avenant,
            facture,
            decompte,
            graphiqueExecutionMarche,
          //   listeOpAnnulation,
          //   listeOpProvisoireCf,
          //   listeOpProvisoireBs,
            // mandatFactureProformaEmetteur,
            // mandatFactureProformaCf,
            // mandatFactureDefinitiveEmetteur,
            // mandatFactureDefinitiveCf,
            
            // realiteServiceFaitServiceBHs,
            // realiteServiceFaitCf,
            
            // liquidationCf,
            // liquidationOrdonnateur,
            financement,
            // listeOpDefinitiveBsDirect,
            // listeOpDefinitiveCfDirect,
            tableauBordExecution,
            EcheanceMarche,
imageMarche

        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                
              


            };
           
        },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getMarchePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
         ),
          this.detail_engage = this.engagements.find(
      Engage => Engage.id == this.$route.params.id),
          this.detail_mandat = this.mandats.find(
      Manda => Manda.id == this.$route.params.id)
  
  
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {
            ...mapGetters("bienService", ["typeMarches",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
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
   
 ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
afficherInputationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.imputation;
      }
      return ""
        }
      };
    },
afficherIdParent() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.parent_id;
      }
      return ""
        }
      };
    },
 afficherIdLigneBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.economique_id;
      }
      return ""
        }
      };
    },
NumeroDuLot() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_lot;
      }
      return 0
        }
      };
    },
afficherStatusSib() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sib;
      }
      return 0
        }
      };
    },
LibelleTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
LibelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    LibelleActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficheTabulationDecompte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.mandats.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.decision_cf;
      }
      return 0
        }
      };
    },






afficherTypeFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.typfacture_id;
      }
      return 0
        }
      };
    },
    
typeOrdrePaiementHs() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.typeordrepaiement;
      }
      return 0
        }
      };
    },

recupereMontantTresor() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.mandats.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_tresor;
      }
      return 0
        }
      };
    },




afficheMontantEngagementServiceRealiteEtLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.total_general;
      }
      return 0
        }
      };
    },

affichierMontantAvenantTTCModifier() {
      const val = (parseFloat(this.affichierMontantTVA) + parseFloat(this.editAvenant.montant_ht));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
affichierMontantTVAModifier() {
      const val = (parseFloat(this.editAvenant.montant_ht) * parseFloat(this.tauxArrondit));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },









affichierMontantAvenantTTC() {
      const val = (parseFloat(this.affichierMontantTVA) + parseFloat(this.formData.montant_ht));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
affichierMontantTVA() {
      const val = (parseFloat(this.formData.montant_ht) * parseFloat(this.tauxArrondit));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
sommeTresor(){
  return id => {
    if(id !=""){
  
        
    return this.getMandatPersonnaliserVise.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_tresor), 0).toFixed(0); 
      
    }
    
  }
},
partDonBailleur(){
  return id => {
    if(id !=""){
  
        
    return this.getMandatPersonnaliserVise.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don), 0).toFixed(0); 
      
    }
    
  }
},
partEmpruntBailleur(){
  return id => {
    if(id !=""){
  
        
    return this.getMandatPersonnaliserVise.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt), 0).toFixed(0); 
      
    }
    
  }
},

montantTotalDonEtEmprunt() {
      const val = parseFloat(this.partEmpruntBailleur(this.detail_marche.id)) + parseFloat(this.partDonBailleur(this.detail_marche.id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },









afficheMarcheType(){
if(this.detail_marche.type_marche.libelle == "Travaux"){
return 1
}
else{
  return 2
}
},
afficheidFour() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.fournisseur_id;
      }
      return 0
        }
      };
    },

afficheIdFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.facture_id;
      }
      return 0
        }
      };
    },
    afficheMontantFaacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_propose_ttc;
      }
      return 0
        }
      };
    },









// DisponibleBudgetaireApresLiquidation() {
  
//       const val = parseFloat(this.dotationInite(this.detail_marche.imputation).Dotation_Initiale) - parseFloat(this.sommeEgagementLigne(this.detail_marche.id));
//       return parseFloat(val).toFixed(0);
      
//     },



 validationRealiteServiceFait() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.realiteServiceFait.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.decision_controleur_financier;
      }
      return 0
        }
      };
    },
afficheIdEngagementDansRealiteFait() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.realiteServiceFait.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.engagement_id;
      }
      return 0
        }
      };
    },

afficheNumerodemande_engage() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_demande_engage;
      }
      return 0
        }
      };
    },
    afficheNumerodemand() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_engage;
      }
      return 0
        }
      };
    },
  afficherIdRealiteServiceFait() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.realiteServiceFait.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
afficherIdLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.realiteServiceFait.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },







afficheMontantTresor() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_tresor;
      }
      return 0
        }
      };
    },
afficheMontantDon() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_don;
      }
      return 0
        }
      };
    },
    afficheMontantEmprunt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_emprunt;
      }
      return 0
        }
      };
    },







afficheIdBailleur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.bailler_id;
      }
      return 0
        }
      };
    },

afficheLibelleBailleur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },



afficheDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_demande_engage;
      }
      return 0
        }
      };
    },
afficheNumeroEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_engage;
      }
      return 0
        }
      };
    },

afficheNumeroBordeauEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_bordereau;
      }
      return 0
        }
      };
    },

afficheNumeroOPATEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_op;
      }
      return 0
        }
      };
    },

afficheReferenceEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.ref_juridique;
      }
      return 0
        }
      };
    },

afficheidFournisseurFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.fournisseur_id;
      }
      return 0
        }
      };
    },
afficheNumeroFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_facture;
      }
      return 0
        }
      };
    },

afficheDateFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.date_facture;
      }
      return 0
        }
      };
    },



afficheMontantAutorise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.total_general;
      }
      return 0
        }
      };
    },





afficheNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterActeEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
afficheModePassation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.procedurePassations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficheIdFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.fournisseur_id;
      }
      return 0
        }
      };
    },
afficheIdFournisseurEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.fournisseur_id;
      }
      return 0
        }
      };
    },
afficheNumeroFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_cc;
      }
      return 0
        }
      };
    },
afficheNomFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    },

afficheAdresseFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.adresse;
      }
      return 0
        }
      };
    },

afficheTelephoneFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.telephone;
      }
      return 0
        }
      };
    },

afficheIdCompteBancaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.compte_id;
      }
      return 0
        }
      };
    },


afficheLibelleCompteBancaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.comptes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_compte;
      }
      return 0
        }
      };
    },


afficheIdBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.comptes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.banq_id;
      }
      return 0
        }
      };
    },
    
afficheLibelleBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.banques.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },





afficheIdModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.mod_paiement_engage;
      }
      return 0
        }
      };
    },

 afficheLibelleModePaiemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


    afficherSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return qtereel.code_section.concat('  ', qtereel.nom_section);
       
      }
      return 0
        }
      };
    },





 affichePlanEconomiqueId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.imputation ==this.detail_marche.imputation );

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },

 affichePlanEconomiqueLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },







 afficheGrandNatureId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel =>  qtreel.imputation ==id);

      if (qtereel) {
        return qtereel.gdenature_id;
      }
      return 0
        }
      };
    },

 afficheGrandNatureLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
      return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },






 afficheUAId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.ua_id;
      }
      return 0
        }
      };
    },

 afficheUALibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

 afficheActiviteId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.activite_id;
      }
      return 0
        }
      };
    },

 afficheActiviteLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
       return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },

afficheIdEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },



 afficheProgrammeId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.programme_id;
      }
      return 0
        }
      };
    },

 afficheProgrammeLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },

 

 afficheActionId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.action_id;
      }
      return 0
        }
      };
    },

 afficheActionLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauAction.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },


















afficherCompteUtilisateur: function () {
                return id => {
                    if (id != "") {
                      
                        return  this.comptes.filter(normeEquipe => normeEquipe.entrepse_id == id);
                       
                    }
                }
            },

afficherCompteUtilisateur1: function () {
                return id => {
                    if (id != "") {
                      
                        return  this.comptes.filter(normeEquipe => normeEquipe.entrepse_id == id);
                       
                    }
                }
            },

afficheCompteFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser.find(qtreel => qtreel.entreprise_id == id);

      if (qtereel) {
        return qtereel.compte_id;
      }
      return 0
        }
      };
    },
afficheCompteFour() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.comptes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.rib;
      }
      return 0
        }
      };
    },




afficheCompte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.comptes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.rib;
      }
      return 0
        }
      };
    },



  afficheModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    montantAvenantParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.avenants.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.montant_avenant)
                        },valInite);
                    }
                }
            },
montantFactureParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getFacturePersonnaliser.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.prix_propose_ttc)
                        },valInite);
                    }
                }
            },
            montantMandatParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.montant_tresor)
                        },valInite);
                    }
                }
            },
 montantCredite: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },

tauxFacturation() {
      const val = (parseFloat(this.montantCredite(this.detail_marche.id)) / parseFloat(this.montantMarcheAvecAvenant)) * 100;
      
       if (val) {
        return parseInt(val).toFixed(2);
      }
      
      return 0
    },
// affichierMontantAvenant(){
//  return id => {
//         if (id != null && id != "") {
//            const qtereel = this.avenants.find(qtreel => qtreel.marche_id == id);

//       if (qtereel) {
//         return qtereel.montant_avenant;
//       }
//       return 0
//         }
//       };
// },






affichierNombreAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).length; 
      
    }
    
  }
},





affichierMontantAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
    }
    
  }
},

montantMarcheAvecAvenant() {
      const val = parseFloat(this.afficheMontantReelMarche(this.detail_marche.id)) + parseFloat(this.affichierMontantAvenant(this.detail_marche.id));
      return parseFloat(val).toFixed(0);
    },



ratioAvenantMarche(){
   const val = (parseFloat(this.affichierMontantAvenant(this.detail_marche.id)) / parseFloat(this.afficheMontantReelMarche(this.detail_marche.id))) * 100;
      return parseFloat(val).toFixed(2);
},
// montantMarcheAvecAvenant() {
 
//       return id => {
//          if(id !=""){
//     const val = parseFloat((this.afficheMontantReelMarche(detail_marche.id)) + this.affichierMontantAvenant(detail_marche.id)).toFixed(2); 
//     if (isNaN(val)) return null;
//     return val;
//     }
    
//  }

//     },
afficheTypeActeFinancier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeActeEffetFinanciers.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
 afficheNumeroMarcheAttribuer() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterActeEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return "pas_numero"
        }
      };
    },

afficheMontantReelMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },

afficherEnorere(){
if(this.formData1.exonere == 0){
  return 0
}
else {
  return this.affcherTauxEnCours
  
}
},


afficherEnorere2(){
if(this.formData1.exonere == 0){
  return 0
}
else {
  return this.tauxArrondit
  
}
},


 objetfacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet_facture;
      }
      return 0
        }
      };
    },
objetfactureNumero() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_facture;
      }
      return 0
        }
      };
    },
objetfactureMontant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_propose_ttc;
      }
      return 0
        }
      };
    },

numeroFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_facture;
      }
      return 0
        }
      };
    },
montantFactureMandat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_propose_ttc;
      }
      return 0
        }
      };
    },





griseTypeEngagement() {
      return this.recupererTypeProcedure == "Engagement Bon de Commande";
    },

afficherNumeroDemandeEngagemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_demande_engage;
      }
      return 0
        }
      };
    },
afficherNumeroEngagemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_engage;
      }
      return 0
        }
      };
    },
afficherObjetEngagement1() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.objet_facture;
      }
      return ""
    },
    affichiernumEngagement1() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.numero_facture;
      }
      return "0"
    },

afficherMontantEngagement1() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.prix_propose_ttc;
      }
      return "0"
    },
afficherObjetMandat() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editMandat.facture_id);

      if (norme) {
       return norme.objet_facture;
      }
      return ""
    },
affichiernumMandat() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editMandat.facture_id);

      if (norme) {
       return norme.numero_facture;
      }
      return "0"
    },

afficherMontantMandat() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editMandat.facture_id);

      if (norme) {
       return norme.prix_propose_ttc;
      }
      return "0"
    },




















afficherObjetFactureEngagement() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.objet_facture;
      }
      return ""
    },
affichiernumEngagement() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.numero_facture;
      }
      return ""
    },

afficherMontantEngagement() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.prix_propose_ttc;
      }
      return ""
    },













afficherObjetFacture() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.formDataFacture.id);

      if (norme) {
       return norme.objet_facture;
      }
      return ""
    },
afficherNumeroFcture() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.formDataFacture.id);

      if (norme) {
       return norme.numero_facture;
      }
      return ""
    },

afficherMontantFacture() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.formDataFacture.id);

      if (norme) {
       return norme.prix_propose_ttc;
      }
      return ""
    },











 dotationDisponibleAnterieureDirect() {
      const val =  parseFloat(this.dotationInite(this.detail_marche.imputation).Dotation_Initiale) - parseFloat(this.sommeEgagementLigne(this.detail_marche.imputation));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },




 dotationDisponibleAnterieure() {
      const val =  parseFloat(this.dotationInite(this.detail_marche.imputation).Dotation_Initiale) - parseFloat(this.montantCumulerLiquidationMandat);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

montantCumulerMandatEngagement() {
      const val = parseFloat(this.sommeEgagementLigne(this.detail_marche.id)) + parseFloat(this.sommeMontantEngagement);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
      montantCumulerEngagementMandat() {
      const val = parseFloat(this.sommeEgagementLigne(this.detail_marche.id)) + parseFloat(this.editEngagement.total_general);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
      montantCumulerLiquidationMandat() {
      const val = parseFloat(this.sommeEgagementLigne(this.detail_marche.id)) + parseFloat(this.afficheMontantFaacture(this.afficheIdFacture(this.editLiquidation.marche_id)));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
     montantCumulerLiquidationMandatModifer() {
      const val = parseFloat(this.sommeEgagementLigne(this.detail_marche.id)) + parseFloat(this.afficheMontantFaacture(this.afficheIdFacture(this.editMandat.marche_id)));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
montantCumulerMandat() {
      const val = parseFloat(this.sommeEgagementLigne(this.detail_marche.id)) + parseFloat(this.sommeMontant);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

montantMarcheDisponible() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.montantCumulerMandat);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },







afficherObjectFacture() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.numero_facture == this.afficherNumeroFcture);

      if (norme) {
       return norme.objet_facture;
      }
      return ""
    },

afficherUniteAdmin() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
    afficherSecti() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

      if (norme) {
       return norme.afficheSection.code_section.concat('  ', norme.afficheSection.nom_section)
      }
      return ""
    },
    afficherSectId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

      if (norme) {
       return norme.afficheSection.id;
      }
      return ""
    },
 afficherProgDot() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

      if (norme) {
       return norme.afficheProgramme.libelle;
      }
      return ""
    },
    afficherProgDotId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

      if (norme) {
       return norme.afficheProgramme.id;
      }
      return ""
    },
afficherActi() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

      if (norme) {
       return norme.afficheAction.libelle;
      }
      return ""
    },
    afficherActid() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

      if (norme) {
       return norme.afficheAction.id;
      }
      return ""
    },














     afficherProgDot2() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     CodeGdeNatureDep() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

afficheractivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

 afficheraction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauAction.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },























afficheBailleur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


 veifuaExist() {
      return this.formData.typeuniteadminis_id == "";
    },

   afficheUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

 afficheSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_section;
      }
      return 0
        }
      };
    },








montantHT() {
      const val =  parseFloat(this.formData.prix_unitaire) * parseFloat(this.formData.quantite);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    

  
   

afficheFactureTableau() {
      return id => {
        if (id != null && id != "") {
          return this.getFacturePersonnaliser.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },

montantHTModifier() {
      const val =  parseFloat(this.editFacture.prix_unitaire) * parseFloat(this.editFacture.quantite);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantTvaModifier() {
      const val =   parseFloat(this.montantHTModifier) * parseFloat(this.tauxArrondit);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

 montantHTtModifier() {
      const val = parseFloat(this.montantHTModifier) + parseFloat(this.montantTvaModifier);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },





















engagementNonMandat(){
return this.getEngagementPersonnaliser1.filter(item=>item.val==1)
},


 


dateReceptionModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.date_motif;
      }
      return ""
    },
 numeroEngageModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.numero_engage;
      }
      return ""
    },
 AfficherUniteModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.afficheUa.libelle;
      }
      return ""
    },
AfficherSectionModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.afficheSection.code_section + norme.afficheSection.nom_section;
      }
      return ""
    },
MontantMandatModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.total_general ;
      }
      return ""
    },
idBudgetModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.ligne_id ;
      }
      return ""
    },




















dateReception() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.date_motif;
      }
      return ""
    },
 numeroEngage() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.numero_engage;
      }
      return ""
    },
     AfficherNumeroEngagement() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.numero_demande;
      }
      return ""
    },
 AfficherUnite() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.afficheUa.libelle;
      }
      return ""
    },
AfficherSection() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.afficheSection.code_section + norme.afficheSection.nom_section;
      }
      return ""
    },
MontantMandat() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.total_general ;
      }
      return ""
    },


idBudget() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.ligne_id ;
      }
      return ""
    },






    afficheRecupere() {
      const val = parseInt(this.sommeMontantModifier);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

affichetresor2() {
      const val = parseInt(this.editEngagementAutre.montant_tresor1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
  afficheDon2() {
      const val = parseInt(this.editEngagementAutre.montant_don1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    afficheEmprunt2() {
      const val = parseInt(this.editEngagementAutre.montant_emprunt1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

 montantDisponibleAutreligne() { 
      const val = parseFloat(this.sommeMontantAutreLigne) + parseFloat(this.afficheRecupere);
      return parseFloat(val).toFixed(0);
    },


// restePayeMarcheMandat() { 
//       const val = parseFloat(this.MontantMarche) - parseFloat(this.montantCumulerMandat);
//       return parseFloat(val).toFixed(2);
//     },

veifEquipementExist() {
      return this.formData.type_procedure_id !== "0";
    },
    veifautreengagement() {
      return this.formData.type_engagement_id !== "4";
    },



recuperer() {
      const val = parseInt(this.formData.decision_cf);
      return parseInt(val).toFixed(0);
    },














    affichetresor() {
      const val = parseInt(this.editEngagement.montant_tresor1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
  afficheDon() {
      const val = parseInt(this.editEngagement.montant_don1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    afficheEmprunt() {
      const val = parseInt(this.editEngagement.montant_emprunt1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

    montantDisponible() { 
      const val = parseFloat(this.montantCumulerModifier) + parseFloat(this.afficheRecupere);
      return parseFloat(val).toFixed(0);
    },
      montantCumuler() {
      const val = parseInt(this.sommeMontant);
      return parseInt(val).toFixed(0);
    },
     montantCumulerModifier() {
      const val = parseInt(this.editEngagement.montant_cumul);
      return parseInt(val).toFixed(0);
    },

montantResteApaye() { 
      const val = parseFloat(this.MontantMarche) - parseFloat(this.sommeMontant);
      return parseFloat(val).toFixed(2);
    },
montantResteApayeModifier() { 
      const val = parseFloat(this.MontantMarche) - parseFloat(this.montantDisponible);
      return parseFloat(val).toFixed(2);
    },
    sommeMontantEngagement() { 
      const val = parseFloat(this.editEngagement.montant_tresor) + parseFloat(this.editEngagement.montant_don) + parseFloat(this.editEngagement.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },
    sommeMontantMandat() { 
      const val = parseFloat(this.editMandat.montant_tresor) + parseFloat(this.editMandat.montant_don) + parseFloat(this.editMandat.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },
sommeMontant() { 
      const val = parseFloat(this.formData.montant_tresor) + parseFloat(this.formData.montant_don) + parseFloat(this.formData.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },
sommeMontantModifier() { 
      const val = parseFloat(this.affichetresor) + parseFloat(this.afficheDon) + parseFloat(this.afficheEmprunt);
      return parseFloat(val).toFixed(2);
      
    },
sommeMontantAutreLigne() { 
      const val = parseFloat(this.affichetresor2) + parseFloat(this.afficheDon2) + parseFloat(this.afficheEmprunt2);
      return parseFloat(val).toFixed(2);
    },
  programmeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    
  actionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    activiteDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },

afficherSect() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParBienService.find(qtreel => qtreel.ua_id == this.detail_marche.unite_administrative_id);

      if (qtereel) {
        return qtereel.section_id;
      }
      return 0
        }
      };
    },
    afficherAct() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParBienService.find(qtreel => qtreel.activite_id == this.detail_marche.activite_id);

      if (qtereel) {
        return qtereel.action_id;
      }
      return 0
        }
      };
    },

 afficherProg() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParBienService.find(qtreel => qtreel.activite_id == this.detail_marche.activite_id);

      if (qtereel) {
        return qtereel.program_id;
      }
      return 0
        }
      };
    },

    sectionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.jointureUaChapitreSection.filter(
            element => element.id == id
          );
        }
      };
    },
grandNatureDepense() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    ligneBudgetaire() {
      return id => {
        if (id != null && id != "") {
          return this.getMarchePersonnaliser.filter(
            element => element.id == this.detail_marche.id
          );
        }
      };
    },

uniteAdministrative() {
      return id => {
        if (id != null && id != "") {
          return this.getMarchePersonnaliser.filter(
            element => element.id == this.detail_marche.id
          );
        }
      };
    },
    
     recupererNumeroFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    NumeroFournisseur_id() {
      
      const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.fournisseur_id;
      }
      return 0
    },
 NumeroFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.numero_cc;
      }
      return 0
    },
     AfficherIdFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.id;
      }
      return 0
    },
     AfficherIdFournisseur1() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.id;
      }
      return 0
    },
    nomFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.raison_sociale;
      }
      return 0
    },
  AfficherFournisseur_id() {
      
      const norme = this.acteEffetFinanciers.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.entreprise_id;
      }
      return 0
    },
 AdresseFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.email;
      }
      return 0
    },
    MontantMarche() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.marche.montant_marche;
      }
      return 0
    },
   CodeBudgetaire() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.marche.imputation;
      }
      return 0
    },
      ligneEconomiqueBudgetaire() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.marche.economique_id;
      }
      return 0
    },
   afficherligneEconomiqueBudgetaire() {
      
      const norme = this.marches.find(normeEquipe => normeEquipe.id == this.detail_marche.id);

      if (norme) {
        return norme.imputation;
      }
      return 0
    },
      afficheligneEconom() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.codebudget == id);

      if (qtereel) {
        return qtereel.economique_id ;
      }
      return 0
        }
      };
    },
    afficheligneEconomiqueBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.derniereNivoPlanBudgetaire.find(qtreel => qtreel.id == id);

      if (qtereel) {
        
         return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },
    
exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
 

 anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
//  montantMarcheAvecAvenant() {
      
//       const norme = this.acteEffetFinanciers.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

//       if (norme) {
//         return norme.montant_act;
//       }
//       return 0
//     },
    sommeEngagement(){
  return id => {
    if(id !=""){
  
        
    return this.mandats.filter(element => element.marche_id == this.detail_marche.id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2); 
      
    }
    
  }
},
sommeEngagementTableau(){
  return id => {
    if(id !=""){
  
        
    return this.getMandatPersonnaliserVise.filter(element => element.marche_id == this.detail_marche.id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2); 
      
    }
    
  }
},


restePayeMarche() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.sommeEngagementTableau(this.detail_marche.id));
      return parseFloat(val).toFixed(0);
      
    },
    restePayeMarcheMandat() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.montantCumulerMandat);
      return parseFloat(val).toFixed(0);
    },


MontantBudgetaire() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.formData.ligne_budgetaire_id);

      if (norme) {
        return norme.Dotation_Initiale;
      }
      return 0
    },
idBudgetaire() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.detail_marche.economique_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },


 dotationInite: function () {
                return imputation => {
                    if (imputation != "") {
                        return  this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.codebudget == imputation);
                    }
                }
            },



 sommeEgagementLigneTableau: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
sommeEgagementLigne: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.mandats.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
afficheMarcheEngage() {
      return id => {
        if (id != null && id != "") {
          return this.engagements.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },
    afficheMarcheRealiteServiceFait() {
      return id => {
        if (id != null && id != "") {
          return this.realiteServiceFait.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },
     afficheMarcheLiquidation() {
      return id => {
        if (id != null && id != "") {
          return this.liquidation.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },
afficheMarcheAvenant() {
      return id => {
        if (id != null && id != "") {
          return this.avenants.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },

afficheMandatMarcheTableau() {
      return id => {
        if (id != null && id != "") {
          return this.getMandatPersonnaliser.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },
 CodeSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section;
      }
      return 0
        }
      };
    },
     marcheMandat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
uaMandat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficheProgrammeDot() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
     afficheActionProg() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauAction.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
    afficheAtiviteProg() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
  idObjetModifierEngagement() {
      const qtereel = this.getEngagementPersonnaliser1.find(
        qtreel => qtreel.id == this.formData.num_engagement,
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

montantDisponibleBudget() {
      const val =  parseFloat(this.dotationInite(this.detail_marche.imputation).Dotation_Initiale) - parseFloat(this.sommeEgagementLigne(this.detail_marche.id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
montantDisponibleBudgetMandatEngagement() {
      const val =  parseFloat(this.dotationDisponibleAnterieure) - parseFloat(this.sommeMontantEngagement);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
     
      return 0
     
    },

montantDisponibleBudgetMandat() {
      const val =  parseFloat(this.dotationDisponibleAnterieure) - parseFloat(this.sommeMontant);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
     
      return 0
     
    },
    montantDisponibleBudgetMandatDirect() {
      const val =  parseFloat(this.dotationDisponibleAnterieureDirect) - parseFloat(this.sommeMontantMandat);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
     
      return 0
     
    },

















recupererObjetFacture() {
      
      const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.objet_facture;
      }
      return ""
    },


recupererTypeProcedure() {
      
      const norme = this.choixprocedure.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.tprocedure;
      }
      return ""
    },

    recupererUniteAdministrative() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheUA.libelle;
      }
      return ""
    },

recupererProgrammeDotation(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheProgramme.libelle;
      }
      return ""
},

recupererAction(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheAction.libelle;
      }
      return ""
},

recupererSection(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheSection.nom_section;
      }
      return ""
},

recupererNatureDepense(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheGdeNature.libelle;
      }
      return ""
},

recupererActivite(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheActivite.libelle;
      }
      return ""
},
        },
        methods: {
            ...mapActions("bienService", [
                "getEngagement",
                "supprimerEngagement",
                "modifierEngagement",
                "ajouterEngagement",
                "ajouterMandat",
                "modifierMandat",
                "supprimerMandat",
                "ajouterFacture",
                "modifierFacture",
                "supprimerFacture",
                "ajouterChoixProcedure",
                 "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",
      "modifierMarche",
      "getActeEffetFinancier",
      "getMarche"
               
            ]),
 ...mapActions("uniteadministrative", [              
                "modifierMontantBudgetaire",
                "ajouterRealiteServiceFait",
                "modifierRealiteServiceFait",
                "ajouterLiquidation",
                "modifierLiquidation",
                "supprimerLiquidation",
                "supprimerRealiteServiceFait"
            ]),
    

  retourListeEntreprise(){
                 this.$router.push({ name: 'executionMarche' })
            },

















     

    
 



  











          
      formatageSomme:formatageSomme,

            ExporterEnExel(){
                this.$refs.excel.click()
            },
             formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },






  
   
    
    // afficher modal de modification
   
    // fonction pour vider l'input modification
  

    },


















         
        }
    








</script>
<style scoped>
 /* .testtaille {
        
      height: 1000px;
    } */
    .taillemodal45 {
        width: 1200px;
        margin: 0 -580px;
      
    }
    .gdmodelfour
    {
 width: 1000px;
 margin: 0 -580px;
 height: 500px;
    }
    .grdirModalActeEffet
    {

 width: 1000px;
 margin: 0 -530px;
 height: 500px;

    }
    .taillModal{
        width: 970px;
 margin: 0 -530px;

    }
    
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
       .taillemodal {
        width: 1200px;
        margin: 0 -680px;
    }
    .tailfacture{
      height: 500px;
    }

     .taillemodal6 {
        width: 1600px;
        margin: 0 -780px;
    }
    .taillemodal61 {
        width: 1500px;
        
    }
    .tailleRealiteServiceFait{
        width: 1600px;
        margin: 0 -780px;
    }
    .tailgrand{
  width: 89%;
  margin: 0 -45%;
}
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
</style>
