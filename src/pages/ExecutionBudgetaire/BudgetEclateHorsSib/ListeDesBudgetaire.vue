
<template>
  <div>
    <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 
     <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#NiveauGeneral">BUDGET GENERALE</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#Niveau1" v-if="NiveauSousBudget1(detail_marche.uniteadministrative_id,1)!=0">{{NiveauSousBudget1(detail_marche.uniteadministrative_id,1)}}</a>
                      </li>
                        <li>
                        <a data-toggle="tab" href="#Niveau2" v-if="NiveauSousBudget2(detail_marche.uniteadministrative_id,2)!=0">{{NiveauSousBudget2(detail_marche.uniteadministrative_id,2)}}</a>
                      </li>
                     <li>
                         <a data-toggle="tab" href="#Niveau3" v-if="NiveauSousBudget3(detail_marche.uniteadministrative_id,3)!=0">{{NiveauSousBudget3(detail_marche.uniteadministrative_id,3)}}</a>
                      </li>
                      <li>
                         <a data-toggle="tab" href="#Niveau4" v-if="NiveauSousBudget4(detail_marche.uniteadministrative_id,4)!=0">{{NiveauSousBudget4(detail_marche.uniteadministrative_id,4)}}</a>
                      </li>
                      <li>
                         <a data-toggle="tab" href="#Niveau5" v-if="NiveauSousBudget5(detail_marche.uniteadministrative_id,5)!=0">{{NiveauSousBudget5(detail_marche.uniteadministrative_id,5)}}</a>
                      </li>
                     <li>
                         <a data-toggle="tab" href="#Niveau6" v-if="NiveauSousBudget6(detail_marche.uniteadministrative_id,6)!=0">{{NiveauSousBudget6(detail_marche.uniteadministrative_id,6)}}</a>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="NiveauGeneral" class="tab-pane active">
 <BudgetGeneralUa></BudgetGeneralUa>
          </div>
                <div id="Niveau1" class="tab-pane">
  <ListeSousBudgetNiveau1></ListeSousBudgetNiveau1>
          </div>
                  <div id="Niveau2" class="tab-pane">
  <ListeSousBudgetNiveau2></ListeSousBudgetNiveau2>
          </div>
          <div id="Niveau3" class="tab-pane">
  <ListeSousBudgetNiveau3></ListeSousBudgetNiveau3>
          </div>  
 <div id="Niveau4" class="tab-pane">
  <ListeSousBudgetNiveau4></ListeSousBudgetNiveau4>
          </div>  
           <div id="Niveau5" class="tab-pane">
  <ListeSousBudgetNiveau5></ListeSousBudgetNiveau5>
          </div>  
                 <div id="Niveau6" class="tab-pane">
  <ListeSousBudgetNiveau6></ListeSousBudgetNiveau6>
          </div>         

                      
                      
      </div>
       </div>
      
              </table>
 
  </div>

  </div>
</template>
  
<script>

import { mapGetters, mapActions } from "vuex";
import {formatageSomme} from "@/Repositories/Repository"
import moment from 'moment';
import ListeSousBudgetNiveau1 from './ListeSousBudget/ListeSousBudgetNiveau1.vue'
import ListeSousBudgetNiveau2 from './ListeSousBudget/ListeSousBudgetNiveau2.vue'
import ListeSousBudgetNiveau3 from './ListeSousBudget/ListeSousBudgetNiveau3.vue'
import ListeSousBudgetNiveau4 from './ListeSousBudget/ListeSousBudgetNiveau4.vue'
import ListeSousBudgetNiveau5 from './ListeSousBudget/ListeSousBudgetNiveau5.vue'
import ListeSousBudgetNiveau6 from './ListeSousBudget/ListeSousBudgetNiveau6.vue'
import BudgetGeneralUa from './ListeSousBudget/BudgetGeneralUa.vue'
export default {
  components:{
      BudgetGeneralUa,
   ListeSousBudgetNiveau1,
   ListeSousBudgetNiveau2,
   ListeSousBudgetNiveau3,
   ListeSousBudgetNiveau4,
   ListeSousBudgetNiveau5,
   ListeSousBudgetNiveau6
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData:{
                
                },
                editMandat:{},
      search: "",
       uri :'data:application/vnd.ms-excel;charset=UTF-8;base64,',
                template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
                format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) },
                table:""
    };
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.budgetEclate.find(
       idmarche => idmarche.id == this.$route.params.id
         )
        console.log(this.arrayExerciceDecompte(this.detail_marche.uniteadministrative_id)) 
},
  computed: {
    ...mapGetters("Utilisateurs", ["getterAffectionServiceCF","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["getSousBudget","getdecisionBudgetEclate","groupeParBAILLER","budgetEclate","groupeLigneEconomiqueBudget","groupeActiviteBudget","budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires","structures_budgetaires","getterTousActivite","getterTousPlanBudgetaire"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["getMandatPersonnaliserVise","typeFactures","gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),
...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      "services_gestionnaires",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',"types_financements"]),
      ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),
  NiveauSousBudget6() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.unite_administrative_id == id && qtreel.nombre_sous_budget == 6);

      if (qtereel) {
        return qtereel.activite_enfant;
      }
      return 0
        }
      };
    },
  NiveauSousBudget5() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.unite_administrative_id == id && qtreel.nombre_sous_budget == 5);

      if (qtereel) {
        return qtereel.activite_enfant;
      }
      return 0
        }
      };
    },
  NiveauSousBudget4() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.unite_administrative_id == id && qtreel.nombre_sous_budget == 4);

      if (qtereel) {
        return qtereel.activite_enfant;
      }
      return 0
        }
      };
    },
NiveauSousBudget3() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.unite_administrative_id == id && qtreel.nombre_sous_budget == 3);

      if (qtereel) {
        return qtereel.activite_enfant;
      }
      return 0
        }
      };
    },
NiveauSousBudget2() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.unite_administrative_id == id && qtreel.nombre_sous_budget == 2);

      if (qtereel) {
        return qtereel.activite_enfant;
      }
      return 0
        }
      };
    },
NiveauSousBudget1() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.unite_administrative_id == id && qtreel.nombre_sous_budget == 1);

      if (qtereel) {
        return qtereel.activite_enfant;
      }
      return 0
        }
      };
    },




recupererNomDuControleurF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUtilisateur.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.name;
      }
      return 0
        }
      };
    },
recupererIdUser() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectionServiceCF.find(qtreel => qtreel.servicecf_id == id && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.user_id;
      }
      return 0
        }
      };
    },
 recupererIdServiceCF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectation.find(qtreel => qtreel.unite_administrative_id == id   && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.servicecf_id;
      }
      return 0
        }
      };
    },






   griserAutreMotif(){
  return this.editMandat.motif != 237 
},
      AffichierElementParent() {
      
      // return id => {
      //   if (id != null && id != "") {
          return this.plans_Decision.filter(element => this.RecupererNiveau3StructureDecision(element.structure_motif_decission_id) == 3);
      //   }
      // };
    },
      RecupererNiveau3StructureDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structuresDecision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
    AffichierElementEnfant() {
      
      return id => {
        if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.parent == id);
        }
      };
    },
    libelleDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_Decision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 'Non renseigné'
        }
      };
    },
      DateMotifBudgetEclate() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id && qtreel.exercice==this.anneeAmort);

      if (qtereel) {
        return qtereel.date_decision
      }
      return 0
        }
      };
    },
MotifBudgetEclate() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id && qtreel.exercice==this.anneeAmort);

      if (qtereel) {
        return qtereel.motif
      }
      return 0
        }
      };
    },
FamilleMotifBudgetEclate() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id && qtreel.exercice==this.anneeAmort);

      if (qtereel) {
        return qtereel.famille_motif
      }
      return 0
        }
      };
    },
decisionCfBudgetEclate() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id && qtreel.exercice==this.anneeAmort);

      if (qtereel) {
        return qtereel.decision_cf
      }
      return 0
        }
      };
    },

     CumulMontantConsommeParUaPrecedent() {
      return id => {
        if (id != null && id != "") {
           return this.getMandatPersonnaliserVise.filter(qtreel => qtreel.ua_id == id && qtreel.exercice_budget==this.recupererAnneePrecedant ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);

        }
      };
    },
    DotationRestantAnneePrecedant() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.recupererAnneePrecedant ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },





      RecuppererLaDotation() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.activite_id == id &&  qtreel.actived==1 && qtreel.exercicebudget_id==this.anneeAmort);

      if (qtereel) {
        return qtereel.cp
      }
      return 0
        }
      };
    },
     idUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    SommeDesBudgetaireEclatePersonnel() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateBienService() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateTransfert() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 6 && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateInvestissement() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    listeDesBudgetaireEclatePersonnel() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort );

        }
      };
    },
     listeDesBudgetaireEclateBiensService() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort );

        }
      };
    },
    listeDesBudgetaireEclateTransfert() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 6 && qtreel.annebudgetaire==this.anneeAmort );

        }
      };
    },
    listeDesBudgetaireEclateInvestissement() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort );

        }
      };
    },
    listeDesBudgetaireEclate() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id  && qtreel.annebudgetaire==this.anneeAmort );

        }
      };
    },
    listeBudgetParUa() {
      return id => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            element => element.uniteadministrative_id == id
          );
        }
      };
    },
    arrayExerciceDecompte(){
           return marche_id=>{
               let objet=this.listeBudgetParUa(marche_id)
             //  let vm=this
               let array_exercie=[]
               if(objet.length>0){
 
                   objet.forEach(function (val) {
                       array_exercie.push(val.annebudgetaire)
                   })
                   let unique = [...new Set(array_exercie)]
                  // console.log(unique)
                   if (unique.length==1){
   return []
                   }
                   return unique
               }
               return []
           }
      },
      recupereMontantEtat() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==14 && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDon() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==13  && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmprunt() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==15  && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },


recupereMontantEtatTotal() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDonTotal() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmpruntTotal() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },

      libelleLigneEconomique() {
      return id => {
        if (id != null && id != "" ) {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    recupererAnneePrecedant(){

        return parseFloat(this.anneeAmort)-1
   
   
},

idDecisionBudgetaire() {
       return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id && qtreel.exercice==this.anneeAmort);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllNoteService",
      "ajouterNoteService",
      "modifierNoteService",
      "modifierDecisionBudgetEclate",
      "ajouterHistoriqueDecisionBudgetEclate"
    ]),
     tableToExcel(table, name){
                if (!table.nodeType) table = this.$refs.table
                var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
                window.location.href = this.uri + this.base64(this.format(this.template, ctx))
            },
    //         exportHTML(){
    //   var vm = this, table = `<html xmlns:o='urn:schemas-microsoft-com:office:office xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>${vm.word}</body></html>`;

    //   var source = 'listeDesBudgetaireEclate(detail_marche.uniteadministrative_id),' + encodeURIComponent(table);
    //   var fileDownload = document.createElement("a");
    //   document.body.appendChild(fileDownload);
    //   fileDownload.href = source;
    //   fileDownload.download = 'document.doc';
    //   fileDownload.click();
    //   document.body.removeChild(fileDownload);
    // },
    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            validationOpVise() {
              if(this.editMandat.decision_cf==8){
var nouvelObjet = {
      ...this.editMandat,
      id:this.idDecisionBudgetaire(this.detail_marche.uniteadministrative_id),
     	motif :0,
       
         	famille_motif : 0,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:0,
        	observation : 0,
       
 
       };
       var nouvelObjet23 = {
     unite_administrative_id:this.detail_marche.uniteadministrative_id,
     exercice:this.detail_marche.	annebudgetaire,
      
     	motif :0,
       
         	famille_motif : 0,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:0,
        	observation : 0,
       
 
       };
 this.modifierDecisionBudgetEclate(nouvelObjet);
 this.ajouterHistoriqueDecisionBudgetEclate(nouvelObjet23)
this.$("#validationOpDefinitif").modal('hide');

          this.editMandat={
                  
                };
              }
 else if(this.editMandat.decision_cf==9){
var nouvelObjet1 = {
      ...this.editMandat,
      id:this.idDecisionBudgetaire(this.detail_marche.uniteadministrative_id),
     	motif :0,
       
         	famille_motif : 0,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:0,
        	observation : 0,
       
 
       };
        var nouvelObjet232 = {
     unite_administrative_id:this.detail_marche.uniteadministrative_id,
     exercice:this.detail_marche.	annebudgetaire,
      
     	motif :0,
       
         	famille_motif : 0,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:0,
        	observation : 0,
       
 
       };
 this.modifierDecisionBudgetEclate(nouvelObjet1);
 this.ajouterHistoriqueDecisionBudgetEclate(nouvelObjet232)
this.$("#validationOpDefinitif").modal('hide');

          this.editMandat={
                  
                };
 }

      
     else{
       var nouvelObjet2 = {
      ...this.editMandat,
      id:this.idDecisionBudgetaire(this.detail_marche.uniteadministrative_id),
     	motif :this.editMandat.motif,
       
         	famille_motif : this.editMandat.famille_motif,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:this.editMandat.date_decision,
        	observation : this.editMandat.date_decision,
       
 
       };
        var nouvelObjet2321 = {
     unite_administrative_id:this.detail_marche.uniteadministrative_id,

     exercice:this.detail_marche.annebudgetaire,
      
     	motif :this.editMandat.motif,
       
         	famille_motif : this.editMandat.famille_motif,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:this.editMandat.autre_motif,
        	observation : this.editMandat.observation,
       
 
       };
 this.modifierDecisionBudgetEclate(nouvelObjet2);
 this.ajouterHistoriqueDecisionBudgetEclate(nouvelObjet2321)
this.$("#validationOpDefinitif").modal('hide');

          this.editMandat={
                  
                };
     }  
    },
    apercuFacture() {
      this.$("#validationOpDefinitif").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    MontantDisponibleParUa(id){
return parseFloat(this.DotationRestantAnneePrecedant(id))-parseFloat(this.CumulMontantConsommeParUaPrecedent(id))
},
 afficherModalListePersonnel(){
                window.history.back()
            },
                        genererEnPdf(){
  this.$htmlToPaper('printMe');
},
            formatageSomme:formatageSomme,
             montantPasEquipment(id){
     
          let montant=parseFloat(this.recupereMontantDon(id))+parseFloat(this.recupereMontantEmprunt(id))
          return  montant
       
   },
   TotalHorizontal(id){
     
          let montant=(parseFloat(this.recupereMontantDon(id))+parseFloat(this.recupereMontantEmprunt(id))+parseFloat(this.recupereMontantEtat(id)))
          return  montant
       
   },
  }
};
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 66%;
  margin: 0 -30%;
}
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
</style>