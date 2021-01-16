

<template>

<div>




  
                      <table class="table table-bordered table-striped">
                                    <thead>
                                   <tr>
                   <th colspan="3">LES MONTANTS DE BASE</th>
                    <th colspan="3">LES MONTANTS DES PAIEMENTS</th>
                    <th colspan="3">LES TAUX DES PAIEMENTS</th>
                   
                    
                    <!-- <th>STATUT</th> -->
                   
                   
                  </tr>
                 <tr>
                   <th>Part Etat</th>
                    <th>Part Bailleur</th>
                    <th>Total Général</th>
                <th>Total Paiement Etat</th>
                    <th>Total Paiement Bailleur</th>
                    <th>Cumul Paiement</th>
                      <th>Taux Etat</th>
                    <th>Taux Bailleur</th>
                    <th>Taux de Paiement</th>
                   <!-- <th>test</th> -->
                   
                  </tr>
                  
                                    </thead>
                                    <tbody>
                                    <tr
                    class="odd gradeX"
                    v-for="finance in AfficherFinancement(macheid)"
                    :key="finance.id"
                  >
                  <td>{{formatageSomme(parseFloat(afficherMontantEtat(finance.marche_id)))}}</td>
                  <td>{{formatageSomme(parseFloat(parseFloat((afficherMontantDonBailler(finance.marche_id))) + parseFloat((afficherMontantEmpruntBailler(finance.marche_id)))))}}</td>
                  <td>{{formatageSomme(parseFloat(parseFloat((afficherMontantDonBailler(finance.marche_id))) + parseFloat((afficherMontantEmpruntBailler(finance.marche_id))) + parseFloat((afficherMontantEtat(finance.marche_id)))))}}</td>
                  <td>{{formatageSomme(parseFloat(recupereMontantTresor(finance.facture_id)))}}</td>
                  <td>{{formatageSomme(parseFloat((partEmpruntBailleur(finance.facture_id) + partDonBailleur(finance.facture_id))))}}</td>
                  <td>{{formatageSomme(parseFloat(recupereMontantTresor(finance.facture_id)+(partEmpruntBailleur(finance.facture_id) + partDonBailleur(finance.facture_id))))}}</td>
                  <td>{{((parseFloat(recupereMontantTresor(finance.facture_id))/parseFloat(afficherMontantEtat(finance.marche_id)))*100).toFixed(2)}}%</td>
                  <td>{{((parseFloat((partEmpruntBailleur(finance.facture_id)) + (partDonBailleur(finance.facture_id))))/(parseFloat((afficherMontantDonBailler(finance.marche_id)))+parseFloat((afficherMontantEmpruntBailler(finance.marche_id))))*100).toFixed(2)}}</td>
                  <td>{{((parseFloat((recupereMontantTresor(finance.facture_id)) + (partEmpruntBailleur(finance.facture_id))+(partDonBailleur(finance.facture_id))))/(parseFloat((afficherMontantEtat(finance.marche_id)))+parseFloat((afficherMontantEmpruntBailler(finance.marche_id)))+parseFloat((afficherMontantDonBailler(finance.marche_id))))*100).toFixed(2)}}%</td>
                  <!-- <td>{{}}</td> -->
                                    </tr>
               
                
                                    </tbody>
                                </table>

              
     




  

    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from './../../../../../Repositories/Repository';
// import moment from 'moment';
export default {
   
    data(){
        return{
           fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
     
search:""
        }
    },
    props:["macheid"],
    created(){},

              computed: {
            ...mapGetters("bienService", ["personnaliseGetterMarcheBailleur",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
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
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation",
      "decomptefactures",
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),


// BudgetTrsor(){
//   return id => {
//     if(id !=""){
  
        
//     return this.budgetGeneral.filter(element => element.codebudget == id && element.typefinancement_id == 15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0); 
      
//     }
//     return 0
//   }
// },


  afficherMontantEtat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseGetterMarcheBailleur.find(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 14);

      if (qtereel) {
        return qtereel.montant;
      }
      return 0
        }
      };
    },
     afficherMontantDonBailler() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseGetterMarcheBailleur.find(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 13);

      if (qtereel) {
        return qtereel.montant;
      }
      return 0
        }
      };
    },
     afficherMontantEmpruntBailler() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseGetterMarcheBailleur.find(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 15);

      if (qtereel) {
        return qtereel.montant;
      }
      return 0
        }
      };
    },



sommeTresor(){
  return id => {
    if(id !=""){
  
        
    return this.mandats.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_tresor), 0).toFixed(0); 
      
    }
    
  }
},
sommeDonBailleur(){
  return id => {
    if(id !=""){
  
        
    return this.mandats.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don), 0).toFixed(0); 
      
    }
    
  }
},
sommeEmpruntBailleur(){
  return id => {
    if(id !=""){
  
        
    return this.mandats.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt), 0).toFixed(0); 
      
    }
    
  }
},




    partDonBailleur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.mandats.find(qtreel => qtreel.facture_id == id && qtreel.montant_don != null);

      if (qtereel) {
        return qtereel.montant_don;
      }
      return 0
        }
      };
    },
      partEmpruntBailleur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.mandats.find(qtreel => qtreel.facture_id == id && qtreel.montant_emprunt != null);

      if (qtereel) {
        return qtereel.montant_emprunt;
      }
      return 0
        }
      };
    },
 recupereMontantTresor() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.mandats.find(qtreel => qtreel.facture_id == id);

      if (qtereel) {
        return qtereel.montant_tresor;
      }
      return 0
        }
      };
    },
  AfficherFinancement() {
      return id => {
        if (id != null && id != "") {
          return this.getMandatPersonnaliser.filter(
            element => element.marche_id == id  && this.afficherStatusSib(element.marche_id)==0
          );
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
      },
 
      methods:{ 

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
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
</style>