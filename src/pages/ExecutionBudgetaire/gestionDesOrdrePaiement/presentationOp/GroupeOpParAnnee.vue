
<template>
  <div>
 <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
    <table class="table table-bordered table-striped">
          <td style="width: 70%"></td>
        
          <!-- <td style="width: 0px">
            <div align="right" style="cursor: pointer">
              <button
                class="btn btn-danger"
                @click.prevent="ajouterOpAnnulation"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon icon-plus">
                  AJOUTER ORDRE DE PAIEMENT D'ANNULATION</i
                >
              </button>
            </div>
          </td> -->
          <!-- <td style="width: 0px">
            <div align="right" style="cursor: pointer">
              <button
                class="btn btn-primary"
                @click.prevent="ajouterOpDeffinitif"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon icon-plus">
                  AJOUTER ORDRE DE PAIEMENT DEFINITIF</i
                >
              </button>
            </div>
          </td> -->
          <td style="width: 15%">
<div align="right" style="cursor: pointer">
              <button
                class="btn btn-info"
                @click.prevent="ajouterOpAnterieur"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon icon-plus"> AJOUTER OP ANTERIEUR</i>
              </button>
            </div>
          </td>
             <td style="width: 15%">
<div align="right" style="cursor: pointer">
              <button
                class="btn btn-success"
                @click.prevent="ajouterOpSysteme"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon icon-plus"> AJOUTER OP EN COURS</i>
              </button>
            </div>
          </td>
        </table>
          
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste type texte"
            :data="BudgetEchateParUa"
            name="Liste type texte"
            worksheet="Liste type texte"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
               
                            
                            
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
                            <h5>VOIR  OP PAR ANNEE BUDGETAIRE</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              
              <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                   <!-- <th style="width:10%;font-size:12px" >Exercice</th> -->
                     <th style="width:80%;font-size:15px" >Année</th>
                 
                    <th style="width:10%;font-size:15px" colspan="" >Action</th>
                   
                  </tr>
                </thead>
                <tbody>
                            <tr class="odd gradeX" v-for="(type) in arrayExerciceDecompteBienService" :key="type.id">
                    <!-- <td style="font-size:12px;color:#000;text-align:center">{{type[0].annebudgetaire || 'Non renseigné'}}</td> -->
                      <td style="font-size:25px;color:#000;text-align:center;font-weight: bold;">{{type || 'Non renseigné'}}</td>
                  
                   
                   <td>
                      <router-link :to="{ name: 'ListeOpParUa', params: { id: type }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="icon-eye-open" style="font-size:20px;color:#000;text-align:center;font-weight: bold;"> Voir Unites administratives</i></span>
                   </router-link> 
                    </td>
                    <!-- <td v-else-if="idUaBudgetEclate(type) != 0 || idUaBudgetEclate(type) != -1">
                      <router-link :to="{ name: 'ListeDesSousBudgetOp', params: { id: type }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="icon-reorder" style="font-weight: bold;"> Voir Sous Budget</i></span>
                   </router-link> 
                    </td> -->
                    
                  </tr>
                  
                </tbody>
              </table>
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="ajouterBudgetEclarter" main-icon="apps" bg-color="green"></fab>
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="ajouterBudgetEclarter()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button> -->
<notifications  />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>

import { mapGetters, mapActions } from "vuex";

// import {admin,dcf,cf,noDCfNoAdmin} from "../../../../src/Repositories/Auth"
  // import {  ModelListSelect } from 'vue-search-select'
  //   import 'vue-search-select/dist/VueSearchSelect.css'
// import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
 
  name:'typetext',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        
      },
      editBudgetEclate: {
        
      },
      search: ""
    };
  },

  computed: {
        ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives",
      "jointureUaChapitreSection",
      "budgetEclate",
      "GroupeUaReceptrice",
      "transferts",
      "groupeUniteAdministrativeBudgetEclate",
      "groupeUaSousBudget"
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("bienService", ["gettersgestionOrdrePaiement","GroupeUniteAdministrativeMarche",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

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
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire","structures_budgetaires"]),
 
 ...mapGetters('personnelUA', ['all_acteur_depense']),
 
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
   
afficheGroupeUaParMarche(){
    return this.marches.filter(item=>item.sib==1)
},

arrayExerciceDecompteBienService() {
      //return (id) => {
        
        let objet = this.gettersgestionOrdrePaiement.filter(item=>item.diff_op == null);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.exercice);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
    // };
    },
idUaBudgetEclate() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.unite_administrative_id == id);

      if (qtereel) {
        return qtereel.sous_budget_id
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
    idServiceGestionnaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.servicegest_id
      }
      return 0
        }
      };
    },
    libelleServiceGestionnaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services_gestionnaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code
      }
      return 0
        }
      };
    },
},
  methods: {
     ...mapActions("uniteadministrative", [
     
      "ajouterBudgetEclate",
      "modifierBudgetEclate",
      "supprimerBudgetEclate",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
    pagePrecedent(){
                window.history.back()
            },
    ajouterOpSysteme() {
      this.$router.push({ name: "formulaireAjoutOp" });
    },
    ajouterOpAnterieur() {
      this.$router.push({ name: "formulaireAjoutOpAnterieur" });
    },
    ajouterOpAnnulation() {
      this.$router.push({ name: "AjouterOrdrePaiementAnnulation" });
    },
    ajouterOpDeffinitif() {
      this.$router.push({ name: "AjouterOrdrePaiementDefinitive" });
    },
  }
};
</script>
<style scoped>

.tailgrand12{
  width: 90%;
  margin: 0 -45%;
 
}

</style>
