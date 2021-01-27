
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
        <li class="active"><a data-toggle="tab" href="#Identif">Info Réception</a></li>
        <!-- <li class=""><a data-toggle="tab" href="#financ">Info Marché</a></li> -->
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
                      class="span2"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td colspan="1">

              <div class="control-group">
                <label class="control-label">Objet</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="afficherObjet(detail_marche.id)"
                      class="span10"
                      
                  />
                  
                </div>


              </div>
             
            </td>
               <td>
           
              <div class="control-group">
                <label class="control-label">Entreprise</label>
                <div class="controls">
                  <input
                      type="text"
                        :value="Entreprise(fonctionmere(detail_marche.id))"
                      class="span3" 
                      
                  />
                  
                </div>
              </div>
            </td>
        
          </tr>
          </table>
          <table class="table table-bordered table-striped">
          <tr>
           
           
            <td>

              <div class="control-group">
                <label class="control-label">Date de début d'execution prévisionnelle (OSD)(A)</label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatedebutex(detail_marche.id)"
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Date réception provisoire prévisionnelle(B) </label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatereception(detail_marche.id)"
                      class="span3"
                      
                  />
                  
                </div>
              </div>
             
            </td>
            <td>
               <div class="control-group">
                <label class="control-label">Date fin d'exécution prévisionnelle(C) </label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatefinex(detail_marche.id)"
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
                  <td>
              <div class="control-group">
                <label class="control-label" title=" ">Durée d'exécution contractuelle(jrs)(B-A)</label>
                <div class="controls">
                  <input type="text" 
                     :value="afficherDureecontrac(detail_marche.id)"
                         class="span3"

                  />
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Date de reception définitive previsionnelle(D)</label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatereceptiondefinitive(detail_marche.id)"
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
            
          </tr>
          </table>
    
     <table class="table table-bordered table-striped">
           <tr>
                <td>

              <div class="control-group">
                <label class="control-label">Période de garantie</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="dureeGarantie(detail_marche.id)"
                       class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Date de debut d'execution réelle(E)</label>
                <div class="controls">
                  <input
                      type="date"
                      :value="formReception.Date_debut_execution"
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Date de reception provisoire réelle(F)</label>
                <div class="controls">
                  <input
                      type="date"
                      :value="formReception.Date_reception_provisoire"
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Date de reception définitive réelle(G)</label>
                <div class="controls">
                  <input
                      type="date"
                        
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
           </tr>
     </table>
        <table class="table table-bordered table-striped">
           <tr>
                <td>

              <div class="control-group">
                <label class="control-label">Durée d'exécution réelle(f-E)</label>
                <div class="controls">
                  <input
                      type="text"
                         
                       class="span3"
                      
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
                      
                      class="span3"
                      
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
                      
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Ecart de démarrage (E-A)</label>
                <div class="controls">
                  <input
                      type="text" :value="calculeDureEcart"
                      
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
            
            
           
           </tr>
           <tr>
               <td>

              <div class="control-group">
                <label class="control-label">Ecart d'execution</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">date_debut_exectuion_definitif</label>
                <div class="controls">
                  <input
                      type="date"
                      
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">date_reception_provisoire_definitif</label>
                <div class="controls">
                  <input
                      type="date"
                      
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">date_reception_definitive</label>
                <div class="controls">
                  <input 
                      type="date"
                      
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
             	
               
               
           </tr>
       </table>
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


    <div id="exampleModal" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Modifier Reception</h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#Identif">Info Marche</a></li>
        <!-- <li class=""><a data-toggle="tab" href="#financ">Info Reception</a></li> -->
      </ul>
    </div>
    <div class="widget-content tab-content">

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
                      class="span2"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td colspan="1">

              <div class="control-group">
                <label class="control-label">Objet</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="afficherObjet(detail_marche.id)"
                      class="span10"
                      
                  />
                  
                </div>


              </div>
             
            </td>
               <td>
           
              <div class="control-group">
                <label class="control-label">Entreprise</label>
                <div class="controls">
                  <input
                      type="text"
                        :value="Entreprise(fonctionmere(detail_marche.id))"
                      class="span3" 
                      
                  />
                  
                </div>
              </div>
            </td>
        
          </tr>
          </table>
          <table class="table table-bordered table-striped">
          <tr>
           
           
            <td>

              <div class="control-group">
                <label class="control-label">Date de début d'execution prévisionnelle (OSD)</label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatedebutex(detail_marche.id)"
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Date réception provisoire prévisionnelle </label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatereception(detail_marche.id)"
                      class="span3"
                      
                  />
                  
                </div>
              </div>
             
            </td>
            <td>
               <div class="control-group">
                <label class="control-label">Date fin d'exécution prévisionnelle </label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatefinex(detail_marche.id)"
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
                  <td>
              <div class="control-group">
                <label class="control-label" title=" ">Durée d'exécution contractuelle(jrs)</label>
                <div class="controls">
                  <input type="text"  
                         class="span3"

                  />
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Date de reception définitive previsionnelle(D) </label>
                <div class="controls">
                  <input
                      type="date"
                      :value="afficherDatereceptiondefinitive(detail_marche.id)"
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
            
          </tr>
          </table>
     <br>
     <table class="table table-bordered table-striped">
           <tr>
                <td>

              <div class="control-group">
                <label class="control-label">Période de garantie</label>
                <div class="controls">
                  <input
                      type="text"
                      
                       class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Date de debut d'execution réelle</label>
                <div class="controls">
                  <input v-model="formReception.date_debut_execution_reel"
                      type="date"
                      
                      class="span3"
                      
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
                      
                      class="span3"
                      
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
                      
                      class="span3"
                      
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
                      
                       class="span3"
                      
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
                      
                      class="span3"
                      
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
                      
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
             <td>

              <div class="control-group">
                <label class="control-label">Ecart d'execution</label>
                <div class="controls">
                  <input
                      type=""
                      
                      class="span3"
                      
                  />
                  
                </div>
              </div>
            </td>
           </tr>

 

        </table>
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
        </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import moment from "moment";
    import {formatageSomme} from "../../../../Repositories/Repository"
   import AjouterReceptionLot from "../../marche_hors_sib_investissement/ReceptionDesMarche/AjouterReceptionLot";
  
  export default {
        name: 'compte',
        props:["macheid"],
        components:{
         AjouterReceptionLot

        },
        data() {
            return {

              editReception:{},
              formReception:{
                Periode_garantie:"",
                Date_debut_execution:"",
                Date_reception_provisoire:"",
                  Date_reception_definitive:"",
                    Duree_execution_reel:"",
                    Ecart_demarrage:"",
                    Ecart_reception_provisoire:"",
                      Ecart_reception_definitive:"",
                      	Ecart_execution:"",
              },
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


 Dureeexereel(){ 
      let vM=this;
      const acteAffet = vM.formReception
      if(this.acteAffet.Date_reception_provisoire(this.detail_marche.id) == acteAffet.Date_debut_execution &&  this.acteAffet.Date_reception_provisoire(this.detail_marche.id) !=="" && acteAffet.Date_debut_execution !=="") return 1
      if(this.acteAffet.Date_reception_provisoire(this.detail_marche.id) =="" && acteAffet.Date_debut_execution =="") return null

      var dateF = new Date(this.acteAffet.Date_reception_provisoire(this.detail_marche.id)).getTime()
      var dateO = new Date(acteAffet.Date_debut_execution).getTime()
      var resultat = dateF - dateO

      var diffJour =  resultat / (1000 * 3600 * 24)

      if(isNaN(diffJour)) return null

      if(parseFloat(diffJour) < 0 ) return "durée invalide"
      vM.formReception.Duree_execution_reel=diffJour
      return  diffJour;

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
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
       
           return qtereel.date_odre_service;
      }
      return ""
        }
      };
    },

   

     calculeDureEcart(){
   

   var dateR = new Date(this.formReception.Date_debut_execution).getTime()
    var dateD = new Date( this.afficherDatedebutex(this.detail_marche.id)).getTime()
    var diffTime = dateR - dateD
    var diffJours = diffTime / (1000 * 3600 * 24)
      console.log(diffJours)
          if(isNaN(diffJours)) return null

    if(parseFloat(diffJours) < 0 ) return "durée invalide"
        console.log(diffJours)
      return diffJours;
   },




     afficherDatereception() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
       
           return qtereel.date_reception;
      }
      return ""
        }
      };
    },
     listeActeEffectFinnancier: function () {
      return macheid => {
        if (macheid != "") {
            console.log("....................")
           console.log(macheid)
          return this.getActeEffetFinancierPersonnaliser.find(idmarche => idmarche.marche_id == macheid)
        }
      }
    },
        afficherDatefinex() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
       
           return qtereel.date_fin_exe;
      }
      return 0
        }
      };
    },
           afficherDureecontrac() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
       
           return qtereel.duree;
      }
      return 0
        }
      };
    },
      
          Ecartreceptpro(){
      let vM=this;
      const acteAffet = vM.formReception 
      if(acteAffet.Date_debut_execution == acteAffet.Date_reception_provisoire &&  acteAffet.Date_reception_provisoire !=="" && acteAffet.Date_debut_execution !=="") return 1
      if(acteAffet.Date_reception_provisoire =="" && acteAffet.Date_debut_execution =="") return null

      var dateF = new Date(acteAffet.Date_reception_provisoire).getTime()
      var dateO = new Date(acteAffet.Date_debut_execution).getTime()
      var resultat = dateF - dateO

      var diffJour =  resultat / (1000 * 3600 * 24)

      if(isNaN(diffJour)) return null

      if(parseFloat(diffJour) < 0 ) return "durée invalide"
      vM.formReception.Ecart_reception_provisoire=diffJour
      return  diffJour;

    },
            




     afficherDatereceptiondefinitive() {   
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
       
           return qtereel.date_fin_exe;
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
     dureeGarantie(){
         return marche_id=>{
               let objet=this.listeActeEffectFinnancier(marche_id)
              console.log(objet)
               if(objet!=undefined){
                   if(objet.durre_garantie==null) return 0

                   return objet.durre_garantie
               }
                        
               return 0
           }
     },

     Entreprise() {
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
    fonctionmere() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.	entreprise_id;
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
      afficherModalAjouterpaiementPersonnel() {
      this.$("#ModalReception").modal({
        backdrop: "static",
        keyboard: false
      });
    },

       ajouterModalActeEffetFinancierLocal(){
                window.history.back();
            },
     AjouterDecompte() {
      
      var nouvelObjet = {
        ...this.formReception,
        date_fin_exe:this.afficherDatefinex(this.marcheid),
        Ecart_reception_provisoire:this.Ecartreceptpro,
        Ecart_reception_definitive:this.Ecartreceptdef,

      //   marche_id:this.detail_Facture.marche_id,
      //   facture_id:this.detail_Facture.id,
      // nethtva:this.montantTVA,
      // netttc:this.Montantapresretenues,
      // parts_etat:this.MontantHTEtat,
      // parts_bailleur:this.MontantHTBailleur,
      // montantmarche:this.Montantapresretenues
      };
      this.ajouterDecompteFacture(nouvelObjet);
    this.ajouterModalActeEffetFinancierLocal()
      // this.formData = {
      
      // };
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