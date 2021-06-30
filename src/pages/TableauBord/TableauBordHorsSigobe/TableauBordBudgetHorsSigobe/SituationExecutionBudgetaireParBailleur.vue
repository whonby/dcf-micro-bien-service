
<template>
  <div>

    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div> 
    
    <div class="widget-content nopadding" id="printpdf">
       <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">SITUATION D'EXECUTION BUDGETAIRE PAR BAILLEUR</h2>
          </tr>
        </table>
    
      <p
        style="
          margin-left: 30px;
          font-size: 14px;
          font-weight: bold;
          text-decoration: underline;
        "
      >
        EXERCICE: {{ afficheAnnee }}
      </p>

            <table class="table table-bordered">
              <thead style="background-color: #ff9c1a !important">
                
<tr>
                   <th  
                  >
                    
                  </th>
 <th  
                  >
                    
                  </th>
                  
                  
                  <th
                    style="
                      font-size: 14px;
                      color: #000;
                      font-weight: bold;
                      text-align: center;
                      background-color: #fbb203 !important;
                      width :8%
                    "
                  >
                    SECTION {{afficheAnnee}}
                    
                  </th>
                    <th  
                  >
                    
                  </th>
                   <th>
                    UA {{afficheAnnee}}
                  </th>
                 
                   <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      text-align: center;
                      color: #000;
                      background-color: #fbb203 !important;
                      width :8%
                    "
                  >
                 LIGNE ECONOMIQUE {{afficheAnnee}}
                  </th>
                   <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      text-align: center;
                      color: #000;
                      background-color: #fbb203 !important;
                      width :8%
                    "
                  >
                 BAILLEUR {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      text-align: center;
                      color: #000;
                      background-color: #fbb203 !important;
                      width :8%
                    "
                  >
                 BUDGET INITIAL {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                  REAMENAGEMENT BUDGETAIRE {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    NBRE DE REAMENAGEMENT {{afficheAnnee}}
                  </th>

                     <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    NBRE DE MARCHES EN EXECUTION  {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    BUDGET ACTUEL  {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    MONTANTS EXECUTES {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    NBRE D’OP PROVISOIRE NON REGULARISES {{afficheAnnee}}
                  </th>
 <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    DISPONIBLE {{afficheAnnee}}
                  </th>
                  <th
                    
                  >
                    TAUX D’EXECUTION {{afficheAnnee}}
                  </th>
                  
                </tr>
              </thead>
      <tbody  v-for="groupeSection in AfficheSectionGroupeUa"
                :key="groupeSection">
<tr>
                  <td>
                   
                    <button @click="ShowMyLigne(groupeSection)">
                     <i class="icon-eye-open"></i> 
                      
                    </button> 
                  </td>
<td>
                   <button >
                     <i class=" icon-print"></i> 
                      
                    </button>
                    
                </td>
                  <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b>{{libelleSection(groupeSection) }}{{groupeSection}}</b>
                    
                  </td>
<td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                  
                  <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                   <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                   <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                   <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                  <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                  <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                  
                 
                  <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                 <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                  <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                  <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                 <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                   <td v-bind:class="recupereIDactivite==groupeSection ? 'graybg' : 'whitebg'" >
                    <b></b>
                    
                  </td>
                </tr>
                 <tr class="odd gradeX"  v-show="recupereIDactivite==groupeSection"
                            v-for="ua in AfficheUaGroupe(groupeSection)"
                  :key="ua"
                >
              
               <td colspan="3"></td>
              
                   
                  <td>
                   
                    <button @click="ShowMyUniteAdministrative(ua)">
                     <i class="icon-eye-open"></i> 
                      
                    </button> 
                  </td>
               <td >{{libelleUa(ua)}}{{recupereIDUniteAdministrative}}</td>
               <td></td>
              
              <td></td>
              <td></td>
              <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
              
              
 </tr>
 
 
    <tr class="odd gradeX"  v-show="idSourceFinancement(recupereIDUniteAdministrative) == groupeSection" 
                            v-for="ligenBailleur in AfficheLigneParBailleur(recupereIDUniteAdministrative)"
                  :key="ligenBailleur"
                >
              
              
                 
                  <td colspan="4"></td>
                   
                      <td>
                   
                   
                  </td>
                   <td>{{ligenBailleur}}</td>
                  <!-- <td> <button @click="ShowMyua(ligenBailleur)">
                     <i class="icon-eye-open"></i> 
                      
                    </button> </td> -->
                  <td>{{ligenBailleur}}</td>
                 <td>{{ligenBailleur}}</td>
               <td>{{ligenBailleur}}</td>
                <td>{{ligenBailleur}}</td>
                 <td>{{ligenBailleur}}</td>
                  <td>{{ligenBailleur}}</td>
                   <td>{{ligenBailleur}}</td>
                    <td>{{ligenBailleur}}</td>
                     <td>{{ligenBailleur}}</td>
                      <td>{{ligenBailleur}}</td>
                
 </tr>
 
      </tbody>

            
            </table>
    </div>

    


        
    <!-- <fab
      :actions="fabActions"
      @searchMe="filter"
      main-icon="apps"
      bg-color="green"
    ></fab> -->

    
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
      size:5,
      active_el: 0,
      fabActions: [
        {
          name: "searchMe",
          icon: "search",
        },
      ],

      json_fields: {
        CODE: "code",
        LIBELLE: "libelle",
      },


inputLigne:false,

 
      exercices_budgetaires_id:0,
      inputLigne1:0,
    
      search: "",
      verifShome:0,
      recupereIDactivite:"",
       recupereIDUniteAdministrative:0,
    recupereIDBailleur:0,
  source_financement_id1:0
    };
  },
  mounted(){
    console.log("hello word")
    // console.log(this.budgetEclate)
    console.log(this.MontantBudgetActuel())
    console.log(this.MontantBudgetExecuté())
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
      "groupeByBailleur",
      "groupeParSectionBudgetEclate"
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
  

AfficheLigneGroupeOp() {
      return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.budgetEclate.filter((qtreel) => qtreel.uniteadministrative_id == id);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.source_financement_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    },

    AfficheLigneParBailleur() {
      return (id,id1) => {
      
        if(id !=0 && id !="",id1 !=0 && id1 !=""){
          let objet = this.budgetEclate.filter((qtreel) => qtreel.uniteadministrative_id == id);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    },








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
            (qtreel) => qtreel.source_financement_id == id
            &&  qtreel.exercice == this.afficheAnnee
          );

          if (qtereel) {
            return 1;
          }
          return 0;
        }
      };
    },

afficheSectionGroupe(){
     
      return (id) => {
        if (id != null && id != "") {
          return this.groupeParSectionBudgetEclate.filter(
            (qtreel) => qtreel[0].source_financement_id == id
          );

        
         
        }
         return 0;
      };
},
    //&& this.inputLigne1!=0
    ListeGroupByActivite() {
      if (this.source_financement_id1!=0) {
        return this.groupeByBailleur.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee
            && qtreel[0].source_financement_id==this.source_financement_id1
            
        );
      } 
      else {
        return this.groupeByBailleur
        .filter(
          (qtreel) =>
            (qtreel[0].annebudgetaire == this.afficheAnnee
           
             )

        );
      }
    },


    afficheUa() {
       return this.ListeGroupByActivite;
    },

    afficheAnnee() {
      if (this.exercices_budgetaires_id == 0) {
        return this.anneeAmort;
      } else {
        return this.exercices_budgetaires_id;
      }
    },

    libelleSourceFinancement() {
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
   
    libelleSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sections.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nom_section;
          }
          return 0;
        }
      };
    },
    //****************gestion des totaux *********//

     TotalEviteNaN() {
      if (
        this.TotalMontantBudgetExecuté == 0 &&
        this.TotalMontantReamenagement == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.TotalMontantBudgetExecuté) /
            parseFloat(this.TotalMontantReamenagement)) *
          100
        ).toFixed(2);
      }
    },


    

      TotalMontantbudgetVote(){
        if(this.source_financement_id!=0 && this.inputLigne1!=0){
             return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id
              && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }else if(this.source_financement_id!=0 && this.inputLigne1==0){
               return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }else if(this.source_financement_id==0 && this.inputLigne1!=0){
               return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
        else{
             return this.budgetEclate
             .filter((qtreel) =>
             (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id!=null))
             .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
          
    },

    TotalMontantReamenagement(){
        if(this.source_financement_id!=0 && this.inputLigne1==0){
             return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }else if(this.source_financement_id!=0 && this.inputLigne1!=0){
             return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id
              && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }else if(this.source_financement_id==0 && this.inputLigne1!=0){
               return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
        else{
             return this.budgetEclate
             .filter((qtreel) =>
             (qtreel.annebudgetaire == this.afficheAnnee
                 && qtreel.source_financement_id!=null))
             .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
          
    },

       TotalMontantBudgetActuel() {
     if(this.source_financement_id!=0 && this.inputLigne1==0){
             return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);

        } else if(this.source_financement_id!=0 && this.inputLigne1!=0){
               return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.source_financement_id
                 && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
        else if(this.source_financement_id==0 && this.inputLigne1!=0){
              return this.budgetEclate
            .filter(
              (qtreel) =>
              (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id==this.inputLigne1)
            ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
        else{
             return this.budgetEclate
             .filter((qtreel) =>
             (qtreel.annebudgetaire == this.afficheAnnee && qtreel.source_financement_id!=null))
             .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),0).toFixed(0);
        }
    },

     TotalMontantBudgetExecuté() {
        if (this.source_financement_id!=0 && this.inputLigne1==0) {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id
                &&qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id
                &&qtreel.decision_cf==8)   
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        }else if(this.source_financement_id!=0 && this.inputLigne1!=0){
               return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id
                && qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1
                && qtreel.source_financement_id == this.source_financement_id
                && qtreel.source_financement_id == this.inputLigne1
                && qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id
                && qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id
                && qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==8)   
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);

        }else if (this.source_financement_id==0 && this.inputLigne1!=0) {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.inputLigne1
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.inputLigne1
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
                && qtreel.decision_cf==9 && qtreel.source_financement_id!=null)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1
                && qtreel.decision_cf==8 && qtreel.source_financement_id!=null)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf==9 && qtreel.source_financement_id!=null)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4
                && qtreel.decision_cf==8 && qtreel.source_financement_id!=null)   
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
        if (this.source_financement_id==0 && this.inputLigne1!=0) {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.source_financement_id == this.inputLigne1
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
        }else if(this.source_financement_id!=0 && this.inputLigne1!=0){
            return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.source_financement_id == this.source_financement_id
                && qtreel.source_financement_id == this.inputLigne1
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
        }else if(this.source_financement_id!=0 && this.inputLigne1==0){
            return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.source_financement_id == this.source_financement_id
            ).reduce((prec, cur) =>parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),0).toFixed(0);
        }else {
             return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 && qtreel.source_financement_id!=null
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
                qtreel.source_financement_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee
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
                qtreel.source_financement_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee
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
    
    MontantBudgetActuel() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee
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

    MontantBudgetExecuté() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == id
                &&qtreel.decision_cf==8)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == id
                &&qtreel.decision_cf==9)
                ||
                (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == id
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
                qtreel.source_financement_id == id
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



    MontantBudgetActuelActivite() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.ligneeconomique_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.source_financement_id == id1
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


    MontantBudgetExecutéActivite() {
      return (id,id1) => {
        if (id != null && id != ""&& id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.ligne_economique_id == id
                && qtreel.source_financement_id == id1
               && qtreel.exercice == this.afficheAnnee 
               && qtreel.type_ordre_paiement == 1
               && qtreel.decision_cf==8)
               ||
                (qtreel.ligne_economique_id == id
                && qtreel.source_financement_id == id1
               && qtreel.exercice == this.afficheAnnee 
               && qtreel.type_ordre_paiement == 1
               && qtreel.decision_cf==9)
               ||
               (qtreel.ligne_economique_id == id
               && qtreel.source_financement_id == id1
               && qtreel.exercice == this.afficheAnnee 
               && qtreel.type_ordre_paiement == 4
               && qtreel.decision_cf==8)
               ||
                (qtreel.ligne_economique_id == id
                && qtreel.source_financement_id == id1
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
                qtreel.source_financement_id == id1 &&
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
            (qtreel) => qtreel.source_financement_id == id
          );
        }
      };
    },

    arrayExerciceDecompte() {
      return (idactivite) => {
        console.log(idactivite);
        if(idactivite !=null && idactivite!=""){
           let objet = this.listeordrepaiementLigne(idactivite);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.grandenature_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
      }

      }
       
    },
AfficheSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) => qtreel.source_financement_id == id
          );

          if (qtereel) {
            return qtereel.section_id;
          }
          return 0;
        }
      };
    },
    idSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) => qtreel.uniteadministrative_id == id
          );

          if (qtereel) {
            return qtereel.section_id;
          }
          return 0;
        }
      };
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
        console.log(grande_nature_id)
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

    listeSectionParUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.source_financement_id == id
          );
        }
      };
    },
   
    AfficheSectionGroupeUa() {
      // return (id) => {
      
      //   if(id !=0 && id !=""){
          let objet = this.budgetEclate;
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.section_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
      //   }
        
        
      // };
    },
    listeParUaGroupe() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.section_id == id 
          );
        }
      };
    },
AfficheUaGroupe() {
      return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.budgetEclate.filter((qtreel) => qtreel.section_id == id);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.uniteadministrative_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
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

  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
      "modifierGestionOrdrePaiementAnnulat",
      "supprimerGestionOrdrePaiement",
      "ajouterHistoriqueDecisionOp",
      "modifierHistoriqueDecisionOp",
    ]),

    ActiveInputLigne(){
  if(this.inputLigne == false){
    this.inputLigne = true
  }else{
    this.inputLigne = false;
    this.inputLigne1=0;
  }

},
ShowMyBailleur(id){
      if(this.recupereIDBailleur==0){
         this.recupereIDBailleur=id;
      }else if(this.recupereIDBailleur!=0 && this.recupereIDBailleur !=id){
        this.recupereIDBailleur=0;
        this.recupereIDBailleur=id;
      }
      else{
         this.recupereIDBailleur=0;
      }
       
    },
ShowMyUniteAdministrative(id){
      if(this.recupereIDUniteAdministrative==0){
         this.recupereIDUniteAdministrative=id;
      }else if(this.recupereIDUniteAdministrative!=0 && this.recupereIDUniteAdministrative !=id){
        this.recupereIDUniteAdministrative=0;
        this.recupereIDUniteAdministrative=id;
      }
      else{
         this.recupereIDUniteAdministrative=0;
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
        this.MontantReamenagement(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantBudgetExecuté(id)) /
            parseFloat(this.MontantReamenagement(id))) *
          100
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
          (parseFloat(this.MontantBudgetExecutéActivite(id,id1)) /
            parseFloat(this.MontantBudgetActuelActivite(id,id1))) *
          100
        ).toFixed(2);
      }
    },

    //  {{
    //                   (
    //                     (MontantBudgetExecutéActivite(listeLigneeco,groupeSection) /
    //                       MontantBudgetActuelActivite(listeLigneeco,
    //                         groupeSection
    //                       )) *
    //                     100
    //                   ).toFixed(3)


     






     verifValeur(){
      if(this.MontantBudgetActuel() == 0 && this.MontantBudgetExecuté() == 0 && this.MontantBudgetExecutéProvisoire() == 0){
        return 1;
      }
      return 0;
      
       
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



.tailgrand {
  width: 90%;
  margin: 0 -45%;
  height: 50%;
}
.whitebg {
  background: #98FB98 !important;
  font-weight: bold;
  color: black;
  font-size: 15px;
}
.graybg {
  background: rgb(6, 184, 6) !important;
  color: white;
  font-size: 15px;
  font-weight: bold;
}
.modal-body {
  max-height: 85%;
}
th{
font-size: 13px !important;
                      font-weight: bold !important;
                      color: #000 !important;
                      text-align: center !important;
                      background-color: #fbb203 !important;
}
</style>
