
<template>

<div>

   

                
                <div class="span4"></div>
                                <div class="span4"></div>
                                <!-- <div class="span4" align="right">
                                   
                                      <button class="btn btn-success" @click="afficherModalProcedureFacture" >Ajouter Facture</button>

                              </div> -->
                 <div class="table-responsive">
                  

                 </div>
     




  



<notifications  />


    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import {formatageSomme} from "../../../../Repositories/Repository"
   
import moment from 'moment';
export default {
  
    data(){
        return{
           fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData :{

        }
    }
    },
    props:["macheid"],
    created(){},

              computed: {
            ...mapGetters("bienService", ["receptionMarche","gettersTypeOrdrePaiement",'typeMarches','decomptes','modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
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


 


      },
 
      methods:{ 

          ...mapActions('bienService',[  "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",
      "modifierDecompte",
      "ajouterDecompte",
      "ajouterChoixProcedure",
       "ajouterFacture",
                "modifierFacture",
                "supprimerFacture",
                "ajouterTypeOrdrePaiement"
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
 afficherModalListePersonnel(){
                this.$router.push({ name: 'AjouteFacture' })
            },
    afficherModalModifierFacture(index) {
      this.$("#modatFactureModifier").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.formData1 = this.afficheFactureTableau(this.macheid)[index];
    },
    //  afficherFormulaireModalAjouterMandatDirect(){
    //             this.$router.push({ name: 'AjoutMandatDirect' , params: { id:id: marche_id }})
    //         },
// afficherModalAjouterMandatDirect(id) {
//       this.$("#exampleModalMandat").modal({
//         backdrop: "static",
//         keyboard: false
//       });
//       // this.formDataEngage = this.afficheMarcheEngage(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
//         this.formDataFactureDefinitif = this.afficheFactureTableau(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
//     },
afficherModalProcedureFacture() {

  this.$("#ajouterAct").modal({
        backdrop: "static",
        keyboard: false
      });

    
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
  width: 88%;
  margin: 0 -42%;
}

</style>