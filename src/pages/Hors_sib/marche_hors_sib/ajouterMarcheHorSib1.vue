
<template>

<div class="container-fluid">
      <hr />
      
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>AJOUTER MARCHE/CONTRAT HORS SIB</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                    <!-- <div class="widget-title"> -->
              <!-- <span class="icon">
                <i class="icon-th"></i>
              </span> -->
              <!-- <h5>AJOUTER MARCHE/CONTRAT  HORS SIB</h5> -->
              
            <!-- </div> -->
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#SansContratIdent">Information sur le Marche/Contrat</a>
                      </li>
                       
                      <!-- <li>
                        <a data-toggle="tab" href="#SansContratAffect">Affectation</a>
                      </li> -->
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="SansContratIdent" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
            <tr>
 <td>
            <div class="control-group">
              <label class="control-label">Année Budgétaire </label>
              <div class="controls">
                <input
                  type="text"
                  :value="anneeBugetaire"
                  class="span"
                  readonly
                />
              </div>
            </div>
          </td>
                <td colspan="">
            <div class="control-group">
              <label class="control-label">Référence du marché</label>
              <div class="controls">
                <input
                  type="text"
                  v-model="formData.reference_marche"
                  class="span"
                  placeholder="Saisir la référence du marché"
                />
              </div>
            </div>
          </td>
                    <td colspan="">
                     
                                                <div class="control-group">
                                                    <label class="control-label">Unite Administrative</label>
                                                    <div class="controls">
                                                      <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="formData.unite_administrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                                                    </div>
                                                </div>
                </td>
               <td colspan="">
            <div class="control-group">
              <label class="control-label">Type de marché </label>
              <div class="controls">
                <select v-model="formData.type_marche_id" class="span">
                  <option
                    v-for="plans in typeMarches"
                    :key="plans.id"
                    :value="plans.id"
                  >
                    {{ plans.libelle }}
                  </option>
                </select>
              </div>
            </div>
          </td>
               
                
            </tr>
            
            <tr>
             <td colspan="4">
            <div class="control-group">
              <label class="control-label">Objet marché / contrat</label>
              <div class="controls">
                <textarea
                  v-model="formData.objet"
                  class="span"
                  rows="2"
                  placeholder="Saisir le texte"
                ></textarea>
              </div>
            </div>
          </td>
            </tr>
            <tr>
               <td>
            <div class="control-group">
              <label class="control-label">Grande Nature</label>
              <div class="controls">
               

                <select v-model="formData.gdenature_id" class="span4">
                  <option
                    v-for="plans in grandes_natures"
                    :key="plans.id"
                    :value="plans.id"
                  >
                    {{ plans.libelle }}
                  </option>
                </select>
              </div>
            </div>
          </td>
           <td>
            <div class="control-group">
              <label class="control-label">Classification Economique</label>
              <div class="controls">
                <select
                  v-model="formData.economique_id"
                  :readOnly="deveroueconomiq"
                  class="span4"
                >
                  <option
                    v-for="eco in ligneBudgeteyuy(
                      formData.unite_administrative_id
                    )"
                    :key="eco.ligneeconomique_id"
                    :value="eco.ligneeconomique_id"
                  >
                    {{ afficherPlanEconomique(eco.ligneeconomique_id) }}
                  </option>
                </select>
              </div>
            </div>
          </td>
           <td>
            <div class="control-group">
              <label class="control-label">Activité</label>
              <div class="controls">
                <select v-model="formData.activite_id" class="span4">
                  <option
                        v-for="activite in activiteDynamiques(formData.unite_administrative_id)" :readOnly="deverouactivite"
                        :key="activite[0].activite_id"
                        :value="activite[0].activite_id"
                      >{{afficherLesActivite(activite[0].activite_id)}}</option>
                </select>
              </div>
            </div>
          </td>
           <td>
            <div class="control-group">
              <label class="control-label">Imputation Budgétaire</label>
              <div class="controls">
                <input
                  type="text"
                  :value="ImputationBudget"
                  class="span4"
                  placeholder="Saisir le Imputation"
                  readonly
                />
              </div>
            </div>
          </td>
            </tr>
            </table>
          </div>
          
                    </div>
                  
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="ajouterMarcheHorSibLocal"
                        >Valider</a>
                        <a
                           @click.prevent="allerPageMarcheHorsib"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
         
          </div>
        </div>
      </div>
      <notifications/>
    </div>


































</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import { formatageSomme } from "../../../src/Repositories/Repository";
import { admin, dcf, noDCfNoAdmin } from "../../../Repositories/Auth";
import {  ModelListSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  name: "type facture",

  components: {
    // bailleurAjouter,
    ModelListSelect,
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },

        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      //   json_fields: {
      //     CODE: "code",
      //     libelle: "libelle"
      //   },

      formData: {
        // latitude:"",
        // departement_id:"",
        // sous_prefecture_id:"",
        // longitude:"",
        // localisation_geographie_id:"",
        libelle_procedure: "",
        type_financement: "",
        source_financement: "",
        objet: "",
        economique_id: "",
        procedure_passation_id: "",
        beneficiaire: "",
        livrable: "",
        reference_marche: "",
        montant_marche: "",
        type_marche_id: "",
        unite_administrative_id: "",
        gdenature_id: "",
        //element ajouter  lega 15/03/21
        chapitre_infra_id: "",
        cat_infra_id: "",
        souscat_infra_id: "",
        // activite_id:"",
        // typeappel_id:"",
        exo_id: "",
        sib: 1,
      },
      formDossierCadidature: {
        libelle: "",
      },

      //       editActeEffetFinancier:{
      // cause_resiliation:"",
      // date_resiliation:""
      //       },
      // indicateur_test:1,
      search: "",
    };
  },

  computed: {
    ...mapGetters("bienService", [
      "mandats",
      "getMandatPersonnaliserVise",
      "getActeEffetFinancierPersonnaliser45",
      "getActeEffetFinancierPersonnaliser",
      "acteEffetFinanciers",
      "montantPlanification",
      "montantContratualisation",
      "afficheContratualisation",
      "affichePlanifier",
      "nombremarchesExecute",
      "gettesrNaturePrix",
      "gettersMotifPassations",
      "AfficheMarcheNonAttribue",
      "nombreTotalMarche",
      "marches",
      "typeMarches",
      "getMarchePersonnaliser",
      "printMarcheNonAttribue",
      "procedurePassations",
      "typeTypeProcedures",
      "montantComtratualisation",
      "text_juridiques",
      "gettersOuverturePersonnaliser",
      "typeActeEffetFinanciers",
    ]),

    ...mapGetters("uniteadministrative", [
      "getterligneExempter",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "groupeUaPourMarheHorSib",
      "budgetEclate",
      "groupeActiviteBudgetEclate",
      "groupgranNature",
      "getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral",
      "getPersonnaliseTransfert",
    ]),
    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
      "plans_Infrastructures",
    ]),
    ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "exercices_budgetaires",
      "grandes_natures",
      "structures_geographiques",
      "localisations_geographiques",
      "getterInfrastrucure",
    ]),
    ...mapGetters("gestionMarche", ["entreprises"]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),

    ...mapGetters("parametreGenerauxFonctionnelle", [
      "Nature_des_prix",
      "motif_passation",
    ]),
    ...mapGetters("Utilisateurs", [
      "user",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),

    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,

// ReferenceAutomatique(){

// },
// recupererGrandNature(){

// },


ImputationBudget(){
      // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
     const natsect = this.plans_budgetaires.find(natsect => natsect.id == this.formData.economique_id)
     const secti = this.plans_activites.find(sect => sect.id == this.formData.activite_id)
    
     if(natsect && secti){
       return natsect.code  + "-" + secti.code
     }

     return null
   },





AfficheGrandeDepense() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          const qtereel = this.budgetEclate.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("  ", qtereel.libelle);
          }
          return 0;
        }
      };
    },


    ListChapitre() {
      return this.plans_Infrastructures.filter((item) => item.parent == null);
    },

    ListCategorie() {
      return (id) => {
        if (id != null && id != "") {
          return this.plans_Infrastructures.filter(
            (qtreel) => qtreel.parent == id
          );
        }
      };
    },

    ListSousCategorie() {
      return (id) => {
        if (id != null && id != "") {
          return this.plans_Infrastructures.filter(
            (qtreel) => qtreel.parent == id
          );
        }
      };
    },

    afficherParUAEnfonctiondesRole() {
      // const st = this.search.toLowerCase();
      if (this.noDCfNoAdmin) {
        let colect = [];
        this.uniteAdministratives.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      } else {
        return this.uniteAdministratives;
      }
    },
    deveroueconomiq() {
      return this.formData.unite_administrative_id == "";
    },
    deverouactivite() {
      return this.formData.economique_id == "";
    },
    afficherPlanEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_budgetaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("  ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    ligneBudgeteyuy() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (element) =>
              element.uniteadministrative_id == id &&
              element.annebudgetaire == this.anneeBugetaire
          );
        }
      };
    },
    activiteDynamiques() {
      return (id) => {
        if (id != null && id != "") {
          return this.groupeActiviteBudgetEclate.filter(
            (element) =>
             
              element[0].uniteadministrative_id ==id
                
          );
        }
      };
    },
    afficherLesActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("  ", qtereel.libelle);
          }
          return 0;
        }
      };
    },

    // ImputationBudget() {
    //   return (id) => {
    //     if (id != null && id != "") {
    //       const qtereel = this.plans_budgetaires.find(
    //         (qtreel) => qtreel.id == id
    //       );

    //       if (qtereel) {
    //         return qtereel.code;
    //       }
    //       return 0;
    //     }
    //   };
    // },

    /// recuperation de UA qui a au moins effectué un transfert

    listeTableuaUa() {
      let UAItem = [];
      this.UAItem.foreach(function (value) {
        let objet2 = this.getPersonnaliseTransfert.find(
          (item) => item.UAItem == value.id
        );
        if (objet2 != undefined) {
          UAItem.push(value);
          console.log(UAItem);
        }
      });
      return UAItem;
    },

    // afficherLibelle unite administrative

    afficherLibelleUniteAdministrative() {
      return (id) => {
        if (id != null && id != "") {
          let objet = this.uniteAdministratives.find((item) => item.id == id);
          if (objet) {
            return objet.libelle;
          }
          return null;
        }
      };
    },

    // recuperer la tailler du getter structure localisation
    recupererLataille() {
      return this.structures_geographiques.length - 2;
    },
    afficherListeModePassation() {
      return this.procedurePassations.filter(
        (item) =>
          item.code != "GAG" &&
          item.code != "AOR" &&
          item.code != "LCVM" &&
          item.code != "ED"
      );
    },

    //
    afficherCodeStructure() {
      return (id) => {
        if (id != null && id != "") {
          let objet = this.structures_geographiques.find(
            (item) => item.id == id
          );
          if (objet) {
            return objet.niveau;
          }
          return null;
        }
      };
    },
    // recuperation parent id
    recupererParentId() {
      return (id) => {
        if (id != null && id != "") {
          return this.localisations_geographiques.filter(
            (item) => item.parent == id
          );
        }
      };
    },

    afficherCodeStructureLibelle() {
      return (id) => {
        if (id != null && id != "") {
          return this.localisations_geographiques.filter(
            (item) =>
              this.afficherCodeStructure(
                item.structure_localisation_geographique_id
              ) == id
          );
        }
      };
    },
    deveroiullage() {
      return this.formData.localisation_geographie_id == "";
    },
    deveroiullageSousprefecture() {
      return this.formData.departement_id == "";
    },
    recupererLatailleDepartement() {
      return this.structures_geographiques.length - 1;
    },

    recupererLatailleSousPrefecture() {
      return this.structures_geographiques.length;
    },

    //reucperation annee budgetaire dynamique
    anneeBugetaire() {
      const anneBudget = this.exercices_budgetaires.find(
        (anneBudg) => anneBudg.encours == 1
      );
      if (anneBudget) {
        return anneBudget.annee;
      }
      return 0;
    },
  },
  methods: {
    ...mapActions("horSib", [
      "ajouterMarcheHorSib",
      "modifierMarcheHorSib",
      "supprimerMarcheHorSib",
      "getMarcheHorSib",
    ]),
    allerPageMarcheHorsib() {
      this.$router.push({
        name: "marcheHorsib",
      });
    },
    recherche() {
      // console.log(this.search)
      let entre = this.budgetEclate.find((item) => item.id == this.search);
      if (entre != undefined) {
        if (this.search != "") {
          //this.formDossierCadidature.code=entre.code
          this.formDossierCadidature.uniteadministrative_id =
            entre.uniteadministrative_id;
        }
      }
    },

    // ajouter marche hors sib

    ajouterMarcheHorSibLocal() {
      this.$router.push({
        name: "marcheHorsib",
      });

      var nouvelObjet = {
        ...this.formData,
        exo_id: this.anneeBugetaire,
        sib: 1,
        imputation: this.ImputationBudget(this.formData.economique_id),
      };
      
      this.ajouterMarcheHorSib(nouvelObjet);
      this.formData = {
        //latitude:"",
        //longitude:"",
        //localisation_geographie_id:"",
        libelle_procedure: "",
        type_financement: "",
        source_financement: "",
        objet: "",
        economique_id: "",
        procedure_passation_id: "",
        beneficiaire: "",
        livrable: "",
        reference_marche: "",
        montant_marche: "",
        type_marche_id: "",
        unite_administrative_id: "",

        chapitre_infra_id: "",
        cat_infra_id: "",
        souscat_infra_id: "",
        // gdenature_id:"",
        // activite_id:"",
        // typeappel_id:"",
        exo_id: "",
        sib: 1,
      };
    },
  },
};
</script>

<style scoped>
.taillModal {
  width: 1080px;
  margin: 0 -25%;
}
/* {
  width: 96%;
   margin: 0 -48%;
   
} */
.grdirModalActeEffet {
  width: 1200px;
  margin: 0 -530px;
  height: 550px;
}
</style>
