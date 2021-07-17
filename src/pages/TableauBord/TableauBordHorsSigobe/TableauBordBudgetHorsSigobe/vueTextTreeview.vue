
<template>
  <div>
<table>
  <tr >
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>   

  </tr>


  
  
 <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
		   

            <tbody>
                <tr>
                    <td>Centro comercial Moctezuma</td>

                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>

                 <tr>
                    <td>Centro comercial Moctezuma</td>

                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </tbody>
		
   </tr>
 
		   
	
            
  
  
</table>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSommeSansFCFA,formatageSomme } from "@/Repositories/Repository";
import { partition } from "@/Repositories/Repository";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    //ModelListSelect,
  },
  name: "typetext",
  data() {
    return {
      page: 0,
      size:10,
      active_el: 0,
      fabActions: [
        {
          name: "searchMe",
          icon: "search",
        },
      ],

      options2: [
        { id: "1", libelle: "OP Direct" },
        { id: "2", libelle: "OP Provisoire" },
        { id: "3", libelle: "OP Annulation" },
        { id: "4", libelle: "OP Définitif" },
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle",
      },


inputLigne:false,

      affiche_filtre1: false,
      affiche_filtre: false,
      affiche_boutton_filtre: true,
      formData: {
        code: "",
        libelle: "",
        date_debut: "",
        date_fin: "",
      },
      EditDetache: {},
      b_initial:0,
      b_Modifier:0,
      b_Actuel:0,
      b_Execute:0,
      b_OpNonRegularise:0,
      b_MontantOpNonRegularise:0,
      b_MarcheExecution:0,
      b_TauxExecution:0,
      b_Disponible:0,
      b_Activite:0,
      typeop_id: 0,
      NumeroOp: 0,
      Activite_id: 0,
      Activite_code:0,
      exercices_budgetaires_id:0,
      inputLigne1:0,
      tribudgetinitialdata:0,
      trivariationdata:0,
      tribudgetactueldata:0,
      trimontantexecutedata:0,
      triMontantOpProNonRegudata:0,
      triNombreOpProdata:0,
      triNBOpProNonRegudata:0,
      triNBMarcheEnExecutiondata:0,
      triTauxOpProNonRegudata:0,
      triDisponibledata:0,
      triTauxExecutiondata:0,
      test:0,
      montantInitialdata:false,
      montantmodificationdata:false,
      InputBudgetActueldata:false,
      InputMontantExecutedata:false,
      InputMontantOpProvNonRegdata:false,
      InputTauxOpProvidata:false,
      InputNbreOpProvNonREgudata:false,
      InputNbreMarcheEnCoursExecutiondata:false,
      InputTauxOpProNonREgdata:false,
      InputDisponibledata:false,
      InputTauxExecutiondata:false,
inputSelect:false,
      Taux_Execution:0,
      Input_Disponible:0,
      Taux_OpProNon_REg:0,
      Nbre_OpProvNon_REgu:0,
      NombreMarcheExecution:0,
      Taux_Op_Provi:0,
      Montant_Op_ProvNon_Reg:0,
      Montant_Execute:0,
      Budget_Actuel:0,
      montant_mofification:0,
      montant_Initial:0,

      

      editMandat1: {
       
      },
      EditAnulation: {},
      editDecisionFinal: {},
      search: "",
      verifShome:0,
      recupereIDactivite:"",
  
    };
  },
  mounted(){
    //console.log("hello word")
    // console.log(this.budgetEclate)
    //console.log(this.MontantBudgetActuel())
   // console.log(this.MontantBudgetExecuté())
  },

  computed: {
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "exercices_budgetaires",
      "sections",
    ]),
    ...mapGetters("personnelUA", [
      "salairesActeur",
      "personnaliseActeurDepense",
      "personnaFonction",
      "afficheNombrePersonnelRecuActeNormination",
      "fonctionBudgetaire",
      "type_salaries",
      "type_contrats",
      "acte_personnels",
      "type_acte_personnels",
      "fonctions",
      "grades",
      "niveau_etudes",
      "nbr_acteur_actredite_taux",
      "all_acteur_depense",
      "personnaliseActeurFinContrat",
      "totalActeurEnctivite",
      "totalActeurDepense",
      "totalActeurAccredite",
      "tauxActeurAccredite",
      "totalActeurNonAccredite",
      "affichePersonnelRecuActeNormination",
    ]),
    ...mapGetters("bienService", [
      "gettershistoriqueDecisionCfOP",
      "typeMarches",
      "gettersgestionOrdrePaiementAnnulation",
      "gettersgestionOrdrePaiement",
      "gettersDossierAutreDepense",
      "gettersDossierMandat",
      "gettersDossierFacturePiece",
      "typeFactures",
      "gettersDemandeEngagement",
      "gettersnomPieceJustificative",
      "modepaiements",
      "gettersCotationPersonnaliser",
      "typeCandidat",
      "acteDepense",
      "getMarchePersonnaliser",
      "appelOffres",
      "lots",
      "villes",
      "communes",
      "pays",
      "modePassations",
      "procedurePassations",
      "getterDossierCandidats",
      "marches",
      "gettersPersonnaliserRapportJugement",
      "getterOffreFinanciers",
      "gettersOffreTechniques",
      "getterLettreInvitation",
      "getterMandate",
      "getterCojos",
      "conditions",
      "getterAnalyseDossiers",
      "typeAnalyses",
      "getterDemandeAno",
      "documentProcedures",
      "getterAnalyseDMP",
      "getterAnoDMPBailleur",
      "getterObseravtionBailleurs",
      "obseravtionBailleurs",
      "typeActeEffetFinanciers",
      "analyseDossiers",
      "text_juridiques",
      "livrables",
      "selectionner_candidats",
      "getActeEffetFinancierPersonnaliserContrat",
      "acteEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
      "getterMembreCojo",
      "getterProceVerballe",
      "GroupeOrdrePaiementByActivite",
      "GroupeOrdrePaiementByGrandeNature",
    ]),
    ...mapGetters("gestionMarche", [
      "groupeVille",
      "entreprises",
      "banques",
      "comptes",
      "getCompte",
      "getEntreptise",
      "getPersonnaliseAgence",
      "agenceBanques",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structureActe",
      "planActe",
    ]),
    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),
    ...mapGetters("gestionMarche", ["entreprises"]),

    ...mapGetters("uniteadministrative", [
       "getterligneExempter",
      "budgetEclate",
      "groupeLigneEconomiqueBudget",
      "getSousBudget",
      "groupeActiviteBudget",
      "budgetGeneral",
      "fonctionsua",
      "servicesua",
      "directions",
      "uniteZones",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
      "groupeByActivite",
      "groupeByBailleur"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structuresDecision",
      "plans_Decision",
    ]),
    ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
    ]),

libelleNatueeDepense() {
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


    NbreMarcheParActivite(){
        return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.activite_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.marche_id!=null)
            ).length
        } else {
          return 0;
        }
      };
    },
     NbreMarcheEnCoursParLigne(){
        return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.activite_id == id && qtreel.ligne_economique_id == id1 &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.marche_id!=null)
            ).length
        } else {
          return 0;
        }
      };
    },
    CodeExempte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterligneExempter.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },
 afficheOpNonRegulirise() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.ligne_economique_id == id && qtreel.activite_id == id1 && qtreel.diff_reg_op == 0 && qtreel.type_ordre_paiement==2
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
     ToTalOPNonReguLigne() {
      return (id,id1) => {
        if (id != null && id != ""&& id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.ligne_economique_id == id && qtreel.activite_id == id1  && qtreel.type_ordre_paiement==2
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
  NombreOPNonRegu() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.activite_id == id && qtreel.diff_reg_op == 0 && qtreel.type_ordre_paiement==2
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
     TotalOPNonRegu() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.activite_id == id &&  qtreel.type_ordre_paiement==2
            ).length
            
            
        } else {
          return 0;
        }
      };
    },
// ListeDEsEntreprise(){
// if(this.inputLigne1!=''){
//   return this.ListeGroupByActivite.
// }
                // let vM=this;
                // let objet=this.ListeGroupByActivite

              
              
                // if(vM.inputLigne1!="" ){
                  
                //   objet = vM.objet.filter(item=>{
                //         if(item[0].activite_id == vM.afficheIdActiviteDansPlanActuvite(vM.inputLigne1)){
                //             return item[0];
                //         }
                //     })
                //  return objet
                // }
            
                // return objet
           

    ShowMe(){
       return (id) => {
        if (id != null && id != "") {
           return this.verifShome==id;
        }
        return 0;
      };
    },
 
    verifActiviteId() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.activite_id == id
            &&  qtreel.exercice == this.afficheAnnee
          );

          if (qtereel) {
            return 1;
          }
          return 0;
        }
      };
    },

    //&& this.inputLigne1!=0
    ListeGroupByActivite() {
      if (this.Activite_id!=0  && this.inputLigne1!=0) {
        return this.groupeByActivite.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee
            && qtreel[0].activite_id==this.Activite_id
            && qtreel[0].activite_id==this.inputLigne1
        );
      } else if(this.Activite_id!=0 &&  this.inputLigne1==0){
        return this.groupeByActivite.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee
            && qtreel[0].activite_id==this.Activite_id
        );
      }else if(this.Activite_id==0 && this.inputLigne1!=0){
          return this.groupeByActivite.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee
            && qtreel[0].activite_id==this.inputLigne1
        );
      }
      else {
        return this.groupeByActivite
        .filter(
          (qtreel) =>
            (qtreel[0].annebudgetaire == this.afficheAnnee
            && qtreel[0].activite_id!=null
             )

        );
      }
    },


    TriaffichageUniteAdminstrative() {
        let vm=this
      return this.ListeGroupByActivite.map(function (value) {
        let objet = {
           id:value[0].activite_id,
           libelle:vm.LibelleActivite(value[0].activite_id),
           MontantVote:vm.MontantReamenagement1(value[0].activite_id),
           Variation:vm.MontantReamenagement(value[0].activite_id),
           Budgetactuel:vm.MontantBudgetActuel(value[0].activite_id),
           MontantExecute:vm.MontantBudgetExecuté(value[0].activite_id),
           MontantOpProvisoireNonRegu:vm.MontantBudgetExecutéProvisoire(value[0].activite_id),
           NombreOpProvisoire:vm.TotalOPNonRegu(value[0].activite_id),
           NombreOpProvisoireNonRegu:vm.NombreOPNonRegu(value[0].activite_id),
           TauxOpProvisoireNonRegu:vm.TauxOPProvisoireNonRegularisActivite(value[0].activite_id),
           Disponible:vm.MontantBudgetActuel(value[0].activite_id)- vm.MontantBudgetExecuté(value[0].activite_id),
           TauxExecution:vm.EviteNaN(value[0].activite_id),
           nombreMarcheParActivite:vm.NbreMarcheParActivite(value[0].activite_id)
        };
        return objet;
      });
    },


    FiltreLeTableauPrincipal(){
  if(this.montant_Initial!=0){
    return this.TriaffichageUniteAdminstrative.filter(item=>item.MontantVote==this.montant_Initial)
  }else if(this.montant_mofification!=0){
 return this.TriaffichageUniteAdminstrative.filter(item=>item.Variation==this.montant_mofification)
  }else if(this.Budget_Actuel!=0){
    return this.TriaffichageUniteAdminstrative.filter(item=>item.Budgetactuel==this.Budget_Actuel)
  }else if(this.Montant_Execute !=0){
    return this.TriaffichageUniteAdminstrative.filter(item=>item.MontantExecute==this.Montant_Execute)
  }else if(this.Montant_Op_ProvNon_Reg !=0){
    return this.TriaffichageUniteAdminstrative.filter(item=>item.MontantOpProvisoireNonRegu==this.Montant_Op_ProvNon_Reg)

  }else if(this.Taux_Op_Provi!=0){
    return this.TriaffichageUniteAdminstrative.filter(item=>item.NombreOpProvisoire==this.Taux_Op_Provi)

  }else if(this.Nbre_OpProvNon_REgu!=0){
     return this.TriaffichageUniteAdminstrative.filter(item=>item.NombreOpProvisoireNonRegu==this.Nbre_OpProvNon_REgu)
  }else if(this.Taux_OpProNon_REg!=0){
     return this.TriaffichageUniteAdminstrative.filter(item=>item.TauxOpProvisoireNonRegu==this.Taux_OpProNon_REg)
  }
  else if(this.Input_Disponible!=0){
    return this.TriaffichageUniteAdminstrative.filter(item=>item.Disponible==this.Input_Disponible)
  }else if(this.Taux_Execution!=0){
    return this.TriaffichageUniteAdminstrative.filter(item=>item.TauxExecution==this.Taux_Execution)
  }else if(this.NombreMarcheExecution!=0){
    return this.TriaffichageUniteAdminstrative.filter(item=>item.nombreMarcheParActivite==this.NombreMarcheExecution)
  }
  
  else{
    return this.TriaffichageUniteAdminstrative
  }

},
    // fin test de tri


    // afficheUa() {
    //    return this.ListeGroupByActivite;
    // },

    afficheAnnee() {
      if (this.exercices_budgetaires_id == 0) {
        return this.anneeAmort;
      } else {
        return this.exercices_budgetaires_id;
      }
    },

    ListeGroupByNature() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.GroupeOrdrePaiementByGrandeNature.filter(
            (qtreel) => qtreel.grand_nature_id == id
          );

          if (qtereel) {
            return qtereel.grand_nature_id;
          }
          return 0;
        }
      };
    },
    lielleGrandeNayure() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.grandes_natures.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    //****************gestion des totaux *********//

      TotalMontantbudgetVote(){
        if(this.Activite_id!=0 && this.inputLigne1!=0){
             return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.activite_id==this.Activite_id
              && qtreel.activite_id==this.inputLigne1
              && qtreel.budget_actif_def==1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }else if(this.Activite_id!=0 && this.inputLigne1==0){
               return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.activite_id==this.Activite_id
              && qtreel.budget_actif_def==1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }else if(this.Activite_id==0 && this.inputLigne1!=0){
               return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.activite_id==this.inputLigne1
              && qtreel.budget_actif_def==1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
        else{
             return this.budgetEclate
             .filter((qtreel) =>
             (qtreel.annebudgetaire == this.afficheAnnee && qtreel.activite_id!=null
             && qtreel.budget_actif_def==1))
             .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
          
    },

    TotalMontantReamenagement(){
        if(this.Activite_id!=0 && this.inputLigne1==0){
             return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.activite_id==this.Activite_id
              && qtreel.budget_active==1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),0).toFixed(0);
        }else if(this.Activite_id!=0 && this.inputLigne1!=0){
             return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.activite_id==this.Activite_id
              && qtreel.activite_id==this.inputLigne1 && qtreel.budget_active==1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),0).toFixed(0);
        }else if(this.Activite_id==0 && this.inputLigne1!=0){
               return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.activite_id==this.inputLigne1
              && qtreel.budget_active==1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),0).toFixed(0);
        }
        else{
             return this.budgetEclate
             .filter((qtreel) =>
             (qtreel.annebudgetaire == this.afficheAnnee
                 && qtreel.activite_id!=null && qtreel.budget_active==1))
             .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),0).toFixed(0);
        }
          
    },

    TotalMontantBudgetActuel() {
          return (parseFloat(this.TotalMontantbudgetVote) + parseFloat(this.TotalMontantReamenagement))
    },

      TotalEviteNaN() {
      if (
        this.TotalMontantBudgetExecuté == 0 &&
        this.TotalMontantBudgetActuel == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseInt(this.TotalMontantBudgetExecuté) /
            parseInt(this.TotalMontantBudgetActuel)) *
          100
        ).toFixed(2);
      }
    },

      

     TotalMontantBudgetExecuté() {
        if (this.Activite_id!=0 && this.inputLigne1==0) {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == this.Activite_id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == this.Activite_id
                &&qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.Activite_id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.Activite_id
                &&qtreel.decision_cf==8)   
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        }else if(this.Activite_id!=0 && this.inputLigne1!=0){
               return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == this.Activite_id
                && qtreel.activite_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1
                && qtreel.activite_id == this.Activite_id
                && qtreel.activite_id == this.inputLigne1
                && qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.Activite_id
                && qtreel.activite_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.Activite_id
                && qtreel.activite_id == this.inputLigne1
                &&qtreel.decision_cf==8)   
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);

        }else if (this.Activite_id==0 && this.inputLigne1!=0) {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == this.inputLigne1
                &&qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.inputLigne1
                &&qtreel.decision_cf==8)   
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
         }else {
              return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf==9 && qtreel.activite_id!=null)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf==8 && qtreel.activite_id!=null)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf==9 && qtreel.activite_id!=null)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf==8 && qtreel.activite_id!=null)   
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        }
    },


       TotalMontantBudgetExecutéProvisoire() {
        if (this.Activite_id==0 && this.inputLigne1!=0) {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.activite_id == this.inputLigne1
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
        }else if(this.Activite_id!=0 && this.inputLigne1!=0){
            return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.activite_id == this.Activite_id
                && qtreel.activite_id == this.inputLigne1
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
        }else if(this.Activite_id!=0 && this.inputLigne1==0){
            return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.activite_id == this.Activite_id
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
        }else {
             return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 && qtreel.activite_id!=null
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        }
    },

    //*************fin gestion des totaux*************/

    MontantbudgetVote(){
        return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.activite_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_actif_def==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

     MontantReamenagement1(){
        return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.activite_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_actif_def==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    MontantReamenagement(){
        return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.activite_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_active==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    
   

    MontantBudgetExecuté() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == id
                &&qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == id
                &&qtreel.decision_cf==8)   
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },


    MontantBudgetExecutéProvisoire() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.activite_id == id
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },



    MontantBudgetActuelActiviteInitial() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.ligneeconomique_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.activite_id == id1 &&
                qtreel.budget_actif_def==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

     MontantBudgetActuelActiviteReamenager() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.ligneeconomique_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.activite_id == id1 &&
                qtreel.budget_active==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    


    MontantBudgetExecutéActivite() {
      return (id,id1) => {
        if (id != null && id != ""&& id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.ligne_economique_id == id
                && qtreel.activite_id == id1
               && qtreel.exercice == this.afficheAnnee 
               && qtreel.type_ordre_paiement == 1
               && qtreel.decision_cf==8)
               ||
                (qtreel.ligne_economique_id == id
                && qtreel.activite_id == id1
               && qtreel.exercice == this.afficheAnnee 
               && qtreel.type_ordre_paiement == 1
               && qtreel.decision_cf==9)
               ||
               (qtreel.ligne_economique_id == id
               && qtreel.activite_id == id1
               && qtreel.exercice == this.afficheAnnee 
               && qtreel.type_ordre_paiement == 4
               && qtreel.decision_cf==8)
               ||
                (qtreel.ligne_economique_id == id
                && qtreel.activite_id == id1
               && qtreel.exercice == this.afficheAnnee 
               && qtreel.type_ordre_paiement == 4
               && qtreel.decision_cf==9)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantBudgetExecutéProvisoireActivite() {
      return (id,id1) => {
        if (id != null && id != ""&& id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.ligne_economique_id == id &&
                qtreel.activite_id == id1 &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
   
    libelleBailleur() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sources_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    libelleLigneEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_budgetaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("    ", qtereel.libelle);
          }
          return 0;
        }
      };
    },

    LibelleActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat(" ", qtereel.libelle);
          }
          return 0;
        }
      };
    },

    listeordrepaiements() {
      if (this.formData.date_debut != "" && this.formData.date_fin != "") {
        return (id) => {
          if (id != null && id != "") {
            return this.gettersgestionOrdrePaiement.filter(
              (qtreel) =>
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 8 &&
                  qtreel.date_decision_cf >= this.formData.date_debut &&
                  qtreel.date_decision_cf <= this.formData.date_fin) ||
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 9 &&
                  qtreel.date_decision_cf >= this.formData.date_debut &&
                  qtreel.date_decision_cf <= this.formData.date_fin)
            );
          }
        };
      } else {
        return (id) => {
          if (id != null && id != "") {
            return this.gettersgestionOrdrePaiement.filter(
              (qtreel) =>
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 8) ||
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 9)
            );
          }
        };
      }
    },

    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },

    AfficheLogODCF() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/log3.png";
    },
    AfficheAmoirie() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/amoirie.png";
    },

    listeordrepaiementLigne() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.activite_id == id
          );
        }
      };
    },

    arrayExerciceDecompte() {
      return (idactivite) => {
      //  console.log(idactivite);
        if(idactivite !=null && idactivite!=""){
           let objet = this.listeordrepaiementLigne(idactivite);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.grandenature_id);
          });
          let unique = [...new Set(array_exercie)];
         // console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
      }

      }
       
    },

    


    recupBudget() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) =>
              qtreel.grandenature_id == id &&
              qtreel.annebudgetaire == this.anneeAmort
          );
        }
      };
    },

    sommeLigneGrandeNature() {
      return (grande_nature_id) => {
        //console.log(grande_nature_id)
        if (grande_nature_id == "") return 0;
        let _objet = this.recupBudget(grande_nature_id);
        if (_objet == undefined) return 0;
        let montant = _objet.reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
          0
        );
        return montant;
      };
    },

    listeordrepaiementLigne2() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.activite_id == id
          );
        }
      };
    },
   
    arrayExerciceDecompte2() {
      return (idactivite) => {
        //console.log(idactivite);
        if(idactivite!=null && idactivite !=0 && idactivite !=""){
          let objet = this.listeordrepaiementLigne2(idactivite);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.grandenature_id);
          });
          let unique = [...new Set(array_exercie)];
         // console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    },

     GpeParNatureDepenseEtActivite() {
      return (id,id1) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.activite_id == id && qtreel.grandenature_id == id1
          );
        }
      };
    },
   
    GroupeParActiviteEtNatureDepense() {
      return (id,id1) => {
        //console.log(id);
        if(id!=null && id !=0 && id !="" && id1!=null && id1 !=0 && id1 !=""){
          let objet = this.GpeParNatureDepenseEtActivite(id,id1);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
          });
          let unique = [...new Set(array_exercie)];
         // console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    },
GrandeNature() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) => qtreel.ligneeconomique_id == id && qtreel.budget_active==1
          );

          if (qtereel) {
            return qtereel.grandenature_id;
          }
          return 0;
        }
      };
  },
    libelleUa() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
  },


  },

  created(){
        console.log(this.TriaffichageUniteAdminstrative)
        },

  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
      "modifierGestionOrdrePaiementAnnulat",
      "supprimerGestionOrdrePaiement",
      "ajouterHistoriqueDecisionOp",
      "modifierHistoriqueDecisionOp",
    ]),
AfficheIdNatureDepense(id) {
  
if(this.test==0){
  this.test=id
  
     
}else if(this.test!=0 && this.test !=id){
        this.test=0;
        this.test=id;
        
      }
},

    // les recherches
ActiveSelect(){
      if(this.inputSelect == false){
        this.inputSelect = true
      }else{
        this.inputSelect = false
        this.inputSelect1=0;
      }

 },
    InputMontantInitial(){
      if(this.montantInitialdata == false){
        this.montantInitialdata = true
      }else{
        this.montantInitialdata = false;
        this.montant_Initial = 0;
      }
 },

  InputMontantModif(){
      if(this.montantmodificationdata == false){
        this.montantmodificationdata = true
      }else{
        this.montantmodificationdata = false;
        this.montant_mofification = 0;
      }
 },

 InputBudgetActuel(){
      if(this.InputBudgetActueldata == false){
        this.InputBudgetActueldata = true
      }else{
        this.InputBudgetActueldata = false;
        this.Budget_Actuel = 0;
      }
 },

 InputMontantExecute(){
      if(this.InputMontantExecutedata == false){
        this.InputMontantExecutedata = true
      }else{
        this.InputMontantExecutedata = false;
        this.Montant_Execute = 0;
      }
 },

 InputMontantOpProvNonReg(){
      if(this.InputMontantOpProvNonRegdata == false){
        this.InputMontantOpProvNonRegdata = true
      }else{
        this.InputMontantOpProvNonRegdata = false;
        this.Montant_Op_ProvNon_Reg = 0;
      }
 },

 InputTauxOpProvi(){
      if(this.InputTauxOpProvidata == false){
        this.InputTauxOpProvidata = true
      }else{
        this.InputTauxOpProvidata = false;
        this.Taux_Op_Provi = 0;
      }
 },

 InputNbreMarcheEnCoursExecution(){
      if(this.InputNbreMarcheEnCoursExecutiondata == false){
        this.InputNbreMarcheEnCoursExecutiondata = true
      }else{
        this.InputNbreMarcheEnCoursExecutiondata = false;
        this.NombreMarcheExecution = 0;
      }
 },
 InputNbreOpProvNonREgu(){
      if(this.InputNbreOpProvNonREgudata == false){
        this.InputNbreOpProvNonREgudata = true
      }else{
        this.InputNbreOpProvNonREgudata = false;
        this.Nbre_OpProvNon_REgu = 0;
      }
 },

 InputTauxOpProNonREg(){
      if(this.InputTauxOpProNonREgdata == false){
        this.InputTauxOpProNonREgdata = true
      }else{
        this.InputTauxOpProNonREgdata = false;
        this.Taux_OpProNon_REg = 0;
      }
 },

 InputDisponible(){
      if(this.InputDisponibledata == false){
        this.InputDisponibledata = true
      }else{
        this.InputDisponibledata = false;
        this.Input_Disponible = 0;
      }
 },

 InputTauxExecution(){
      if(this.InputTauxExecutiondata == false){
        this.InputTauxExecutiondata = true
      }else{
        this.InputTauxExecutiondata = false;
        this.Taux_Execution = 0;
      }
 },




    //fin des recherches

     tribudgetinitial(){
        if(this.tribudgetinitialdata==0){
          this.tribudgetinitialdata=1;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.MontantVote-b.MontantVote});
          
        }else{
          this.tribudgetinitialdata=0;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.MontantVote-a.MontantVote});
        }
    },

       trivariation(){
        if(this.trivariationdata==0){
          this.trivariationdata=1;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.Variation-b.Variation});
          
        }else{
          this.trivariationdata=0;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.Variation-a.Variation});
        }
    },

      tribudgetactuel(){
        if(this.tribudgetactueldata==0){
          this.tribudgetactueldata=1;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.Budgetactuel-b.Budgetactuel});
          
        }else{
          this.tribudgetactueldata=0;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.Budgetactuel-a.Budgetactuel});
        }
    },

     trimontantexecute(){
        if(this.trimontantexecutedata==0){
          this.trimontantexecutedata=1;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.MontantExecute-b.MontantExecute});
          
        }else{
          this.trimontantexecutedata=0;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.MontantExecute-a.MontantExecute});
        }
    },

    triMontantOpProNonRegu(){
        if(this.triMontantOpProNonRegudata==0){
          this.triMontantOpProNonRegudata=1;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.MontantOpProvisoireNonRegu-b.MontantOpProvisoireNonRegu});
          
        }else{
          this.triMontantOpProNonRegudata=0;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.MontantOpProvisoireNonRegu-a.MontantOpProvisoireNonRegu});
        }
    },

    
    triNombreOpPro(){
        if(this.triNombreOpProdata==0){
          this.triNombreOpProdata=1;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.NombreOpProvisoire-b.NombreOpProvisoire});
          
        }else{
          this.triNombreOpProdata=0;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.NombreOpProvisoire-a.NombreOpProvisoire});
        }
    },
    AfficheIconeActivite(){
        if(this.b_Activite==0){
          this.b_Activite=1;
          
        }else{
          this.b_Activite=0;
         
        }
    },
    AfficheIconeBudgetInitial(){
        if(this.b_initial==0){
          this.b_initial=1;
          
        }else{
          this.b_initial=0;
         
        }
    },
    AfficheIconeBudgetModifier(){
        if(this.b_Modifier==0){
          this.b_Modifier=1;
          
        }else{
          this.b_Modifier=0;
         
        }
    },
    AfficheIconeBudgetActuel(){
        if(this.b_Actuel==0){
          this.b_Actuel=1;
          
        }else{
          this.b_Actuel=0;
         
        }
    },
    AfficheIconeBudgetExecuter(){
        if(this.b_Execute==0){
          this.b_Execute=1;
          
        }else{
          this.b_Execute=0;
         
        }
    },
     AfficheIconeOpNonRegularise(){
        if(this.b_OpNonRegularise==0){
          this.b_OpNonRegularise=1;
          
        }else{
          this.b_OpNonRegularise=0;
         
        }
    },
     AfficheIconeTauxExecution(){
        if(this.b_TauxExecution==0){
          this.b_TauxExecution=1;
          
        }else{
          this.b_TauxExecution=0;
         
        }
    },
     AfficheIconeDisponible(){
        if(this.b_Disponible==0){
          this.b_Disponible=1;
          
        }else{
          this.b_Disponible=0;
         
        }
    },
    AfficheIconeMarcheExecution(){
        if(this.b_MarcheExecution==0){
          this.b_MarcheExecution=1;
          
        }else{
          this.b_MarcheExecution=0;
         
        }
    },
    AfficheIconeMontantOpNonRegularise(){
        if(this.b_MontantOpNonRegularise==0){
          this.b_MontantOpNonRegularise=1;
          
        }else{
          this.b_MontantOpNonRegularise=0;
         
        }
    },
triNBMarcheExecution(){
        if(this.triNBMarcheEnExecutiondata==0){
          this.triNBMarcheEnExecutiondata=1;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.nombreMarcheParActivite-b.nombreMarcheParActivite});
          
        }else{
          this.triNBMarcheEnExecutiondata=0;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.nombreMarcheParActivite-a.nombreMarcheParActivite});
        }
    },
    triNBOpProNonRegu(){
        if(this.triNBOpProNonRegudata==0){
          this.triNBOpProNonRegudata=1;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.NombreOpProvisoireNonRegu-b.NombreOpProvisoireNonRegu});
          
        }else{
          this.triNBOpProNonRegudata=0;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.NombreOpProvisoireNonRegu-a.NombreOpProvisoireNonRegu});
        }
    },

    

    triTauxOpProNonRegu(){
        if(this.triTauxOpProNonRegudata==0){
          this.triTauxOpProNonRegudata=1;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.TauxOpProvisoireNonRegu-b.TauxOpProvisoireNonRegu});
          
        }else{
          this.triTauxOpProNonRegudata=0;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.TauxOpProvisoireNonRegu-a.TauxOpProvisoireNonRegu});
        }
    },


    triDisponible(){
        if(this.triDisponibledata==0){
          this.triDisponibledata=1;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.Disponible-b.Disponible});
          
        }else{
          this.triDisponibledata=0;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.Disponible-a.Disponible});
        }
    },

    triTauxExecution(){
        if(this.triTauxExecutiondata==0){
          this.triTauxExecutiondata=1;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return a.TauxExecution-b.TauxExecution});
          
        }else{
          this.triTauxExecutiondata=0;
          return this.TriaffichageUniteAdminstrative.sort(function(a,b){return b.TauxExecution-a.TauxExecution});
        }
    },



    TauxOPProvisoireNonRegularisLigne(id,id1) {
      if (
        this.NombreOPNonRegu(id,id1) == 0 &&
        this.ToTalOPNonReguLigne(id,id1) == 0
      ) {
        return 0.0;
      } else {
        return (
          ((parseFloat(this.NombreOPNonRegu(id,id1)) /
            parseFloat(this.ToTalOPNonReguLigne(id,id1)))*100
        ).toFixed(2));
      }
    },
TauxOPProvisoireNonRegularisActivite(id) {
      if (
        this.NombreOPNonRegu(id) == 0 &&
        this.TotalOPNonRegu(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          ((parseFloat(this.NombreOPNonRegu(id)) /
            parseFloat(this.TotalOPNonRegu(id)))*100
        ).toFixed(2));
      }
    },
    ActiveInputLigne(){
  if(this.inputLigne == false){
    this.inputLigne = true
  }else{
    this.inputLigne = false;
    this.inputLigne1=0;
  }

},
    ShowMyLigne(id){
      if(this.recupereIDactivite==""){
         this.recupereIDactivite=id;
      }else if(this.recupereIDactivite!="" && this.recupereIDactivite !=id){
        this.recupereIDactivite="";
        this.recupereIDactivite=id;
      }
      else{
         this.recupereIDactivite="";
      }
       
    },

     EviteNaN(id) {
      if (
        this.MontantBudgetExecuté(id) == 0 &&
        this.MontantBudgetActuel(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseInt(this.MontantBudgetExecuté(id)) /
            parseInt(this.MontantBudgetActuel(id)))*100
        ).toFixed(2);
      }
    },


     EviteNaNLigne(id,id1) {
      if (
        this.MontantBudgetExecutéActivite(id,id1) == 0 &&
        this.MontantBudgetActuelActivite(id,id1) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseInt(this.MontantBudgetExecutéActivite(id,id1)) /
            parseInt(this.MontantBudgetActuelActivite(id,id1)))*100
        ).toFixed(2);
      }
    },

  

    MontantBudgetActuel(id) {
          return (parseFloat(this.MontantReamenagement1(id)) + parseFloat(this.MontantReamenagement(id)))
    },

    MontantBudgetActuelActivite(id,id1) {
          return (parseFloat(this.MontantBudgetActuelActiviteInitial(id,id1)) + parseFloat(this.MontantBudgetActuelActiviteReamenager(id,id1)))
    },

    


    

     verifValeur(){
      if(this.MontantBudgetActuel() == 0 && this.MontantBudgetExecuté() == 0 && this.MontantBudgetExecutéProvisoire() == 0){
        return 1;
      }
      return 0;
      
       
    },
 
budgetDisponibleParLigne(id,id1){
return (parseFloat(this.MontantBudgetActuelActivite(id,id1)) - parseFloat(this.MontantBudgetExecutéActivite(id,id1)))
},
    afficheLeNomDesProcedure(id,id1){

    if(this.budgetDisponibleParLigne(id,id1) < 10000000){
        return "Procédure Simplifiée de demande de Cotation(PSC Sans comité)"
    }
    else if( this.budgetDisponibleParLigne(id,id1) < 30000000 )
    {
return "Procédure Simplifiée de demande de Cotation(PSC Avec comité)"
    }
    else if(this.budgetDisponibleParLigne(id,id1)<60000000)
    {
return "Procédure Simplifiée à compétition Limitée(PSL)"
    }
    else if(this.budgetDisponibleParLigne(id,id1) < 100000000)
    {
return "Procédure Simplifiée à compétition Ouverte(PSO)"
    }

    // else if(0 < this.budgetDisponibleParLigne(id,id1))
    // {
    //  return "ED"
    // }
     else if(100000000 < this.budgetDisponibleParLigne(id,id1))
    {
return "Appel d'Offre Ouvert"
    }

  return null


},
    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

    partition: partition,

    getDataPaginate(index) {
      this.active_el = index;
      this.page = index;
    },
    precedent() {
      this.active_el--;
      this.page--;
    },
    suivant() {
      this.active_el++;
      this.page++;
    },

    apercuFacture1(id) {
     
      // this.$("#validationOpDefinitif2").modal({
      //   backdrop: "static",
      //   keyboard: false,
      // });
       this.editMandat1 = this.groupeByActivite.find((item) => item[0].activite_id == id);
      // console.log(this.editMandat1)
      return alert(this.editMandat1.activite_id);
    
    },

    formatageSommeSansFCFA: formatageSommeSansFCFA,
formatageSomme:formatageSomme,
    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>

<style scoped>
.taille{
width: 95%;
}

.whitebg {
  background: #fff !important;
  font-weight: bold;
  color: black;
  font-size: 13px;
}
.graybg {
  background: rgb(6, 184, 6) !important;
  color: white;
  font-size: 13px;
  font-weight: bold;
}
.tailgrand {
  width: 90%;
  margin: 0 -45%;
  height: 50%;
}
.tailBtn {
  width: 100%;
}
.modal-body {
  max-height: 85%;
}
#taillecol{
    width: 200px;
}
.curseurEntete{
cursor: pointer;
}
.tailleIcone{
cursor: pointer;

   font-size: 20px;
  font-weight: bold;
}
</style>
