
<template>
  <div>
 <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
    <!-- <table class="table table-bordered table-striped">
            <tr>
              <td>
                <div class="" align="right">
              <router-link
                :to="{ name: 'ajouter_hors_sib' }"
                tag="a"
                data-toggle="modal"
                class="btn btn-success"
                align="rigth"
                >Ajouter Marche Hors PPM
              </router-link>
            </div>
              </td>
              
            </tr>
          </table> -->
          
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
         
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
                            <h5>Listes Des Sous Budgets</h5>
             
            </div>

            <div class="widget-content nopadding">
              
              <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                   <!-- <th style="width:10%;font-size:12px" >Exercice</th> -->
                     <th style="width:20%;font-size:12px" >Code UA</th>
                    <th style="width:50%;font-size:12px" >Libelle Sous Budget</th>
                    <!-- <th style="width:20%;font-size:12px" >Montant Reçu</th>  -->
                    <th style="width:10%;" colspan="" >Action</th>
                   
                  </tr>
                </thead>
                <tbody>
                            <tr class="odd gradeX" v-for="(type) in arrayExerciceDecompteBienService" :key="type.id">
                    <!-- <td style="font-size:12px;color:#000;text-align:center">{{type[0].annebudgetaire || 'Non renseigné'}}</td> -->
                      <td style="font-size:16px;color:#000;text-align:center">{{CodeSOusBudget(type) || 'Non renseigné'}}</td>
                   <td style="font-size:16px;color:#000;text-align:center">{{libelleSOusBudget(type) || 'Non renseigné'}}</td>
                   
                   <td>
                      <router-link :to="{ name: 'VoirOrdrePaiementSousBudget', params: { id: type }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="icon-eye-open" style="font-weight: bold;"> Voir Ordre Paiement</i></span>
                   </router-link> 
                    </td>
                    
                    <!-- <td style="font-size:12px;color:#000;text-align:center">{{0 || 'Non renseigné'}}</td> -->
                    <!-- <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclate(type[0].id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
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
created() {
    this.marcheid = this.$route.params.id;
    this.detailOp = this.gettersgestionOrdrePaiement.find(
      (idmarche) => idmarche.id == this.$route.params.id
    );
  },
  computed: {
        ...mapGetters("uniteadministrative", [
            "groupeParUniteZone",
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
      "groupeUaSousBudget",
      "getSousBudget"
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
   


arrayExerciceDecompteBienService() {
      //return (id) => {
        
        let objet = this.gettersgestionOrdrePaiement.filter(item=>item.sous_budget_id == this.marcheid);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.sous_budget_id);
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



afficheGroupeUaParMarche(){
    return this.groupeParUniteZone.filter(item=>item[0].uniteadministrative_id == this.detailOp.uniteadministrative_id)
},

libelleSOusBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_enfant
      }
      return 0
        }
      };
    },


CodeSOusBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code
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
    ModificationBudgetaire(){
                this.$router.push({ name: 'ModificationBudgetaire' })
            },
            SOUSbUDGET(){
                this.$router.push({ name: 'sousBudget' })
            },
  ajouterBudgetEclarter(){
                this.$router.push({ name: 'AjouterBudgetEclater' })
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
