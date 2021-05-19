
<template>
 <div >
    <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
        <br/>
   
       <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
</div>

 <div id="printMe">
     
    
              <div class="container-fluid">
        <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
               


            </div>
            <p style="text-align:center;font-size:40px">Programme: <b><u>{{detail_programmes.libelle}}</u></b></p>
      <hr />
      <div >
        <div >
         
         
                            <div >
         
          
          
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <p>Liste des Unité(s) Administrative(s)</p>
            
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                       <th>Type UA</th>
                       <th>Nature Section</th>
                       <th>Section</th>
                       <th>Service Gestionnaire</th>
                       <th>Localisation Géographique</th>
                       <th>Code UA</th>
                       <th>Libellé UA</th>
                   
                    
                    
                  </tr>
                </thead>
                <tbody>
                
                 <tr class="odd gradeX" v-for="listeUa in arrayExerciceDecompte(detail_programmes.id)" :key="listeUa" >
                    <td>{{ libelleType_ua(type_ua_id(listeUa)) ||'Non renseigné'}}</td>
                    <td>{{ libelleNatureSection(recup_naturesection_id(listeUa))||'Non renseigné'}}</td>
                    <td>{{ libelleSection(recup_section_id(listeUa)) ||'Non renseigné'}}</td>
                    <td>{{ libelleServicegest_credit(recup_serviceGcredit_id(listeUa)) ||'Non renseigné'}}</td>
                    <td>{{ libellelocalisationgeo(recup_LocalisationGeo_id(listeUa)) ||'Non renseigné'}}</td>
                    <td>{{ code_ua(listeUa) ||'Non renseigné'}}</td>
                    <td>{{ libelle_ua(listeUa) ||'Non renseigné'}}</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
 
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import {formatageSomme} from '../../../../src/Repositories/Repository';
// import {admin,dcf,cf,noDCfNoAdmin} from '../../../../src/Repositories/Auth';
//import {  ModelListSelect } from 'vue-search-select'
 import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  watch: {
  },
 
  name:'typetext',
  data() {
    return {

      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
       unite_administrative_id:""
      },
       typeFinancement_id:"",
       section:"",
       grandeNature_id:"",
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      affiche_filtre:false,
      affiche_boutton_filtre:true,
      search: "",
      bgColor: '#171b39',
      position: 'right',
    };
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_Budget = this.uniteAdministratives.find(
       idmarche => idmarche.id == this.$route.params.id
   )

   this.detail_programmes = this.plans_programmes.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
  computed: {
   ...mapGetters("SuiviImmobilisation", [
    
      "immobilisations",
      "fichetype",
      "normeEquipements"
     
      
    ]),
     ...mapGetters('parametreGenerauxAdministratif',
      ['getterplanOrganisationUa','sections',
      'plans_programmes']) ,
    // admin:admin,
    //   dcf:dcf,
    //   cf:cf,
    //   noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
 ...mapGetters("bienService", ["getMandatPersonnaliserPersonnel",'getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),
   

    ...mapGetters("personnelUA", ["personnaliseActeurDepense","acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

 ...mapGetters("uniteadministrative", 
 ["getvehicules","uniteAdministratives","directions","servicesua","uniteZones","budgetGeneral",
      "getPersonnaliseBudgetGeneral"]),
  ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections",
      "grandes_natures",
      "plans_programmes",
      "exercices_budgetaires"
    ]),
// ...mapGetters("parametreGenerauxAdministratif", [
      
//       "sections",
//       "type_Unite_admins",
//       "plans_programmes",
//       "natures_sections",
//       "grandes_natures",
//       "afficheNiveauPlanProg",
//       "exercices_budgetaires"
//     ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
   ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "getterligneExempter",
                "transferts"

            ]),
             ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,



 libelle_ua() {
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

    code_ua() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code;
          }
          return 0;
        }
      };
    },

    type_ua_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.type_ua_id;
          }
          return 0;
        }
      };
    },

    recup_naturesection_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nature_section_id;
          }
          return 0;
        }
      };
    },

    recup_section_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.section_id;
          }
          return 0;
        }
      };
    },

    recup_LocalisationGeo_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.localisationgeo_id;
          }
          return 0;
        }
      };
    },

    recup_serviceGcredit_id() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.servicegest_id;
          }
          return 0;
        }
      };
    },

    libelleSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sections.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.nom_section;
          }
          return 0;
        }
      };
    },

    libelleType_ua() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.type_Unite_admins.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    
    libelleNatureSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.natures_sections.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    libellelocalisationgeo() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.localisations_geographiques.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    libelleServicegest_credit() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.services_gestionnaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },


 listedesProgramme() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetGeneral.filter((qtreel) => qtreel.program_id == id);
        }
      };
    },

    arrayExerciceDecompte() {
      return (idactivite) => {
        console.log(idactivite);
        if (idactivite != null && idactivite != "") {
          let objet = this.listedesProgramme(idactivite);
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.ua_id);
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

TotalBudgetInitial(){

               return this.objetMarchePasUniteOuRegion.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0);
            },




 filtreParUa() {
      return id => {
        if (id != null && id != "") {
           return this.affichebudgetActive.filter(qtreel => qtreel.ua_id == id);

     
        }
        return this.affichebudgetActive
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
     afficherSection() {
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
     CodeSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section.concat("    ", qtereel.nom_section);
      }
      return 0
        }
      };
    },


    afficherGdeNatureDep() {
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
     CodeGdeNatureDep() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat("    ", qtereel.libelle);
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
     afficherprogramme() {
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
     Codeprogramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat("    ", qtereel.libelle);
      }
      return 0
        }
      };
    },

    libelleAdministrative() {
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
  },
  methods: {
    ...mapActions("uniteadministrative", [
     
    ]),
     genererEnPdf(){
  this.$htmlToPaper('printMe');
},

pagePrecedent(){
                window.history.back()
            },
videtypeFinancement(){
                this.typeFinancement_id=""
            },
        videSection(){
                this.section=""
            },
            videGrandeNature(){
                this.grandeNature_id=""
            },
    filter(){
                this.affiche_filtre=!this.affiche_filtre
               
               
               
            },
    formatageSomme:formatageSomme,
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
  
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

