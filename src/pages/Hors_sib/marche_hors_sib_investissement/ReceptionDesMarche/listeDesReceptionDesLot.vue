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
             <div class="" align="right">
                  
<button  @click.prevent="afficherModalProcedureFacture" data-toggle="modal" class="btn btn-success" align="rigth">
    <span>Ajouter</span>
</button>
                   </div>
            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">RECEPTION</a>
                      </li>
                      
                     
                    </ul>
                  </div>
                         <div class="widget-content tab-content">
                          
                    <div id="tab1" class="tab-pane active">
  <AjouterReceptionLot :marche="detail_marche"></AjouterReceptionLot>
          </div>
      
      </div>
                </div>
              </table>
              

</div>
    </div>
</div>


    </div>
    <div id="ajouterAct" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Ajouter Reception</h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#Identif">Info Marche</a></li>
        <li class=""><a data-toggle="tab" href="#financ">Info Reception</a></li>
      </ul>
    </div>
    <div class="widget-content tab-content">

      <div id="Identif" class="tab-pane active">

        <table class="table table-bordered table-striped">
          <tr>
              <td>

              <div class="control-group">
                <label class="control-label">N°Lot</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="afficherNumeroLot(detail_marche.id)"
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td colspan="3">

              <div class="control-group">
                <label class="control-label">Objet</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="afficherObjet(detail_marche.id)"
                      class="span12"
                      
                  />
                  
                </div>


              </div>


            </td>
          </tr>
          <tr>
              <td>

              <div class="control-group">
                <label class="control-label">Entreprise</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Date de debut d'execution prévisionnelle</label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatedebutex(detail_marche.id)"
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Date reception provisoire prévisionnelle</label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatereception(detail_marche.id)"
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Date de reception définitive prévisionnelle{{detail_marche.id}}</label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatereceptiondefinitive(detail_marche.id)"
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div id="financ" class="tab-pane">
  <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#MARCHE">MARCHE</a></li>
        
      </ul>
      <div class="widget-content tab-content">

      <div id="MARCHE" class="tab-pane active">
         <table class="table table-bordered table-striped">
           <tr>
                <td>

              <div class="control-group">
                <label class="control-label">Période de garantie</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Date de debut d'execution réelle</label>
                <div class="controls">
                  <input
                      type="date"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Date de reception provisoire réelle</label>
                <div class="controls">
                  <input
                      type="date"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Date de reception définitive réelle</label>
                <div class="controls">
                  <input
                      type="date"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
           </tr>

           <tr>
                <td>

              <div class="control-group">
                <label class="control-label">Durée d'execution réel</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Ecart de réception provisoire</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Ecart de réception définitive</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Ecart d'execution</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
           </tr>
         </table>
        
      </div>
      
      
      </div>
      </div>


    </div>

    <div class="modal-footer">
      <a  @click.prevent="ajouterModalActeEffetFinancierLocal"
          class="btn btn-primary"
          href="#"
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>


    <div id="ajouterAct" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Modifier Reception</h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#Identif">Info Marche</a></li>
        <li class=""><a data-toggle="tab" href="#financ">Info Reception</a></li>
      </ul>
    </div>
    <div class="widget-content tab-content">

      <div id="Identif" class="tab-pane active">

        <table class="table table-bordered table-striped">
          <tr>
              <td>

              <div class="control-group">
                <label class="control-label">N°Lot</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="afficherNumeroLot(editreception.id)"
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td colspan="3">

              <div class="control-group">
                <label class="control-label">Objet</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="afficherObjet(editreception.id)"
                      class="span12"
                      
                  />
                  
                </div>


              </div>


            </td>
          </tr>
          <tr>
              <td>

              <div class="control-group">
                <label class="control-label">Entreprise</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Date de debut d'execution prévisionnelle</label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatedebutex(detail_marche.id)"
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Date reception provisoire prévisionnelle</label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatereception(detail_marche.id)"
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Date de reception définitive prévisionnelle{{detail_marche.id}}</label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatereceptiondefinitive(detail_marche.id)"
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div id="financ" class="tab-pane">
  <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#MARCHE">MARCHE</a></li>
        
      </ul>
      <div class="widget-content tab-content">

      <div id="MARCHE" class="tab-pane active">
         <table class="table table-bordered table-striped">
           <tr>
                <td>

              <div class="control-group">
                <label class="control-label">Période de garantie</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Date de debut d'execution réelle</label>
                <div class="controls">
                  <input
                      type="date"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Date de reception provisoire réelle</label>
                <div class="controls">
                  <input
                      type="date"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Date de reception définitive réelle</label>
                <div class="controls">
                  <input
                      type="date"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
           </tr>

           <tr>
                <td>

              <div class="control-group">
                <label class="control-label">Durée d'execution réel</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Ecart de réception provisoire</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Ecart de réception définitive</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Ecart d'execution</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span4"
                      
                  />
                  
                </div>
              </div>
            </td>
           </tr>
         </table>
        
      </div>
      
      
      </div>
      </div>


    </div>

    <div class="modal-footer">
      <a  @click.prevent="modifierreceptionLocal"
          class="btn btn-primary"
          href="#"
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>
        </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import moment from "moment";
    import {formatageSomme} from "../../../../Repositories/Repository"
   import AjouterReceptionLot from "../../marche_hors_sib_investissement/ReceptionDesMarche/AjouterReceptionLot";
  
  export default {
        name: 'compte',
        components:{
         AjouterReceptionLot

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
 afficherNumeroLot() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.numero_lot;
      }
      return ""
        }
      };
    },
     afficherObjet() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.objet;
      }
      return ""
        }
      };
    },
     afficherDatedebutex() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.date_execution_marche_debut_prevue;
      }
      return ""
        }
      };
    },
     afficherDatereception() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.date_reception_offre_prevu;
      }
      return ""
        }
      };
    },
     afficherDatereceptiondefinitive() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.date_reception_offre_prevu;
      }
      return ""
        }
      };
    },
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


afficherModalProcedureFacture() {

  this.$("#ajouterAct").modal({
        backdrop: "static",
        keyboard: false
      });

    
    },

      modifierreceptionLocal() {
          var nouvelObjet = {
        ...this.editreception,
        marche_id:this.editreception.marche_id,
 
       };
          this.ModifierReception(nouvelObjet);
     this.$("#exampleModal").modal('hide');
       this.editreception = {
      
      };
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

.grdirModalActeEffet{
  width: 88%;
  margin: 0 -42%;
}

</style>