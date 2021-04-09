libelleUA
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
            <h5>Ajouter Marché/Contrat</h5>
            <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
          </div>

          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <div class="widget-box">
                <div class="widget-title">
                  <span class="icon">
                    <i class="icon-th"></i>
                  </span>
                  <h3>Marchés /Contrats</h3>
                </div>
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#SansContratIdent"
                        >Information</a
                      >
                    </li>
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
                              <label class="control-label"
                                >Année Budgétaire
                              </label>
                              <div class="controls">
                                <input
                                  type="text"
                                  :value="anneeBugetaire"
                                  class="span"
                                  readonly
                                  style="border: 1px solid #000"
                                />
                              </div>
                            </div>
                          </td>
                          <td colspan="3">
                            <!-- <div class="" align="left">
                        Selectionner UA:
                        <model-list-select style="background-color: rgb(255,255,255);"
                          class="wide"
                          :list="groupeUaPourMarheHorSib"
                          v-model="search"
                          option-value="id"
                          option-text="uniteadministrative_id"
                          :search-change="recherche()"
                          placeholder="Selectionner l'unité adminstrative"
                        >

                        </model-list-select>
                       
                      
                    </div> -->
            <div class="control-group">
              <label class="control-label" title="unite administrative"
                >UA</label
              >
              <div class="controls">
                <select
                  v-model="formData.unite_administrative_id"
                  class="span"
                  style="border:1px solid #000"
                >
                  <option
                    v-for="plans in groupeUaPourMarheHorSib"
                    :key="plans[0].id"
                    :value="plans[0].uniteadministrative_id"
                  >
                    {{
                      afficherLibelleUniteAdministrative(
                        plans[0].uniteadministrative_id
                      )
                    }}
                  </option>
                </select>
              </div>
            </div>
          </td>
         
           </tr>
           <tr>
                <td colspan="">
            <div class="control-group">
              <label class="control-label">Référence du marché</label>
              <div class="controls">
                <input
                 :value="formData.reference_marche"
                  type="text"
                  readonly
                  class="span"
                  placeholder="Saisir la référence du marché"
                  style="border:1px solid #000"
                />
              </div>
              <!-- <code v-if="formData.reference_marche && verifieRefId">exite déja</code> -->
            </div>
          </td>
          <td colspan="">
            <div class="control-group">
              <label class="control-label">Type de marché </label>
              <div class="controls">
                <select v-model="formData.type_marche_id" class="span" style="border:1px solid #000">
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
          <td>
            <div class="control-group">
              <label class="control-label">Grande Nature</label>
              <div class="controls">
                <!-- <select v-model="formData.gdenature_id" :readOnly="deverouGrandNature" class="sapn5">
                      <option
                        v-for="gdeNature in groupgranNature"
                        :key="gdeNature[0].id"
                        :value="gdeNature[0].afficheGdeNature.id"
                      >{{gdeNature[0].afficheGdeNature.libelle}}</option>
                    </select> -->

                                <select
                                  v-model="formData.gdenature_id"
                                  class="span"
                                  style="border: 1px solid #000"
                                >
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
                        </tr>
                        <tr>
                          <td colspan="4">
                            <div class="control-group">
                              <label class="control-label"
                                >Objet marché / contrat</label
                              >
                              <div class="controls">
                                <textarea
                                  style="border: 1px solid #000"
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
                              <label class="control-label">Activité</label>
                              <div class="controls">
                                <select
                                  v-model="formData.activite_id"
                                  class="span"
                                  style="border: 1px solid #000"
                                >
                                  <option
                                    v-for="activite in activiteDynamiques(
                                      formData.unite_administrative_id
                                    )"
                                    :key="activite[0].activite_id"
                                    :value="activite[0].activite_id"
                                  >
                                    {{
                                      afficherLesActivite(
                                        activite[0].activite_id
                                      )
                                    }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </td>
                          <template
                            v-if="
                              comparereActivite(this.formData.activite_id) ==
                              this.formData.activite_id
                            "
                          >
                            <td>
                              <div class="control-group">
                                <label
                                  class="control-label"
                                  title="unite administrative"
                                  >Sous Budget</label
                                >
                                <div class="controls">
                                  <select
                                    v-model="formData.unite_zone"
                                    class="span"
                                    style="border: 1px solid #000"
                                  >
                                    <option></option>
                                    <option
                                      v-for="plans in AfficheUniteZone(
                                        formData.activite_id
                                      )"
                                      :key="plans.id"
                                      :value="plans.id"
                                    >
                                      {{ plans.activite_enfant }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="control-group">
                                <label
                                  class="control-label"
                                  title="unite administrative"
                                  >Ligne Economique</label
                                >
                                <div class="controls">
                                  <select
                                    style="border: 1px solid #000"
                                    v-model="formData.economique_id"
                                    class="span"
                                  >
                                    <option
                                      v-for="plans in AfficheUniteZoneLigneEconnomique(
                                        formData.unite_zone
                                      )"
                                      :key="plans.id"
                                      :value="plans.ligneeconomique_id"
                                    >
                                      {{
                                        libelleLigneEconomique(
                                          plans.ligneeconomique_id
                                        )
                                      }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </td>
                          </template>
                          <template v-else>
                            <td colspan="2">
                              <div class="control-group">
                                <label
                                  class="control-label"
                                  title="unite administrative"
                                  >Ligne Economique</label
                                >
                                <div class="controls">
                                  <select
                                    style="border: 1px solid #000"
                                    v-model="formData.economique_id"
                                    class="span"
                                  >
                                    <option
                                      v-for="plans in AfficheUALigneEconnomique(
                                        formData.unite_administrative_id
                                      )"
                                      :key="plans[0].id"
                                      :value="plans[0].ligneeconomique_id"
                                    >
                                      {{
                                        libelleLigneEconomique(
                                          plans[0].ligneeconomique_id
                                        )
                                      }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </td>
                          </template>
                        </tr>
                        <tr>
                          <td>
                            <div class="control-group">
                              <label class="control-label"
                                >Imputation Budgétaire</label
                              >
                              <div class="controls">
                                <input
                                  type="text"
                                  :value="ImputationBudget"
                                  class="span"
                                  placeholder="Saisir le Imputation"
                                  readonly
                                  style="border: 1px solid #000"
                                />
                              </div>
                            </div>
                          </td>
                          <td colspan="">
                            <div class="control-group">
                              <label class="control-label"
                                >Type de financement</label
                              >
                              <div class="controls">
                                <select
                                  v-model="formData.type_financement"
                                  class="span"
                                  style="border: 1px solid #000"
                                >
                                  <option
                                    v-for="plans in types_financements"
                                    :key="plans.id"
                                    :value="plans.id"
                                    style="border: 1px solid #000"
                                  >
                                    {{ plans.libelle }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </td>
                          <td colspan="">
                            <div class="control-group">
                              <label class="control-label"
                                >Source de financement</label
                              >
                              <div class="controls">
                                <!-- <input
           type="text"
           v-model="formData.source_financement"
           class="span4"
           
           readonly
         /> -->
                                <select
                                  v-model="formData.source_financement"
                                  class="span"
                                  style="border: 1px solid #000"
                                >
                                  <option
                                    v-for="plans in sources_financements"
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
                          <td colspan="">
                            <div class="control-group">
                              <label class="control-label"
                                >Procédure Passation</label
                              >
                              <div class="controls">
                                <select
                                  v-model="formData.procedure_passation_id"
                                  class="span"
                                  style="border: 1px solid #000"
                                >
                                  <option
                                    v-for="plans in afficherListeModePassation"
                                    :key="plans.id"
                                    :value="plans.id"
                                  >
                                    {{ plans.libelle }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </td>
                          <td colspan="">
                            <div class="control-group">
                              <label class="control-label">Montant prévu</label>
                              <div class="controls">
                                <money
                                  v-model="formData.montant_marche"
                                  class="span"
                                  style="border: 1px solid #000"
                                ></money>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="control-group">
                              <label class="control-label"
                                >Nature des prix</label
                              >
                              <div class="controls">
                                <select
                                  v-model="formData.nature_prix_id"
                                  class="span"
                                  style="border: 1px solid #000"
                                >
                                  <option
                                    v-for="plans in Nature_des_prix"
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
                          <td colspan="">
                            <div class="control-group">
                              <label class="control-label">Chapitre</label>
                              <div class="controls">
                                <select
                                  v-model="formData.chapitre_infra_id"
                                  class="span"
                                  style="border: 1px solid #000"
                                >
                                  <option
                                    v-for="plans in ListChapitre"
                                    :key="plans.id"
                                    :value="plans.id"
                                  >
                                    {{ plans.libelle }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </td>
                          <td colspan="">
                            <div class="control-group">
                              <label class="control-label">Catégorie</label>
                              <div class="controls">
                                <select
                                  v-model="formData.cat_infra_id"
                                  class="span"
                                  style="border: 1px solid #000"
                                >
                                  <option
                                    v-for="plans in ListCategorie(
                                      formData.chapitre_infra_id
                                    )"
                                    :key="plans.id"
                                    :value="plans.id"
                                  >
                                    {{ plans.libelle }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </td>
                          <td colspan="">
                            <div class="control-group">
                              <label class="control-label"
                                >Sous Catégorie</label
                              >
                              <div class="controls">
                                <select
                                  v-model="formData.souscat_infra_id"
                                  class="span"
                                  style="border: 1px solid #000"
                                >
                                  <option
                                    v-for="plans in ListSousCategorie(
                                      formData.cat_infra_id
                                    )"
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
                        >Valider</a
                      >
                      <a @click.prevent="pagePrecedent()" class="btn" href="#"
                        >Fermer</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
    <notifications />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import { formatageSomme } from "../../../src/Repositories/Repository";
import { admin, dcf, noDCfNoAdmin } from "../../../Repositories/Auth";
// import {  ModelListSelect } from 'vue-search-select'
// import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  name: "type facture",

  components: {
    // bailleurAjouter,
    //ModelListSelect,
  },
  data() {
    return {
      code:'',
      codes:'',
      charact:'ABCDEFGHIGKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz',
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
  created(){
    console.log(this.rand_alea(5))
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
      "groupgranNature",
      "getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral",
      "getPersonnaliseTransfert",
      "getSousBudget",
      "groupeActiviteBudgetEclate",
      "groupeParBAILLER",
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
  
  // verifieRefId(){
  //   return this.marches.filter((item) => {
  //     return item.reference_marche.toUpperCase().includes(this.formData.reference_marche.toUpperCase())
  //     //console.log(item.reference_marche)
  //   })
  // },
ImputationBudget(){
      return this.AfficheCodeActivite(this.formData.activite_id) + "   "+  this.AfficheCodeBudgetaire(this.formData.economique_id)
},

 libelleLigneEconomique() {
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

    comparereActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getSousBudget.find(
            (qtreel) => qtreel.activite_parent_id == id
          );

          if (qtereel) {
            return qtereel.activite_parent_id;
          }
          return 0;
        }
      };
    },
    AfficheUALigneEconnomique() {
      return (id) => {
        if (id != null && id != "") {
          return this.groupeParBAILLER.filter(
            (qtreel) => qtreel[0].uniteadministrative_id == id
          );
        }
      };
    },
    AfficheUniteZoneLigneEconnomique() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.sous_budget_id == id
          );
        }
      };
    },
    AfficheUniteZone() {
      return (id) => {
        if (id != null && id != "") {
          return this.getSousBudget.filter(
            (qtreel) => qtreel.activite_parent_id == id
          );
        }
      };
    },

    AfficheGrandeDepense() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          const qtereel = this.budgetEclate.find((qtreel) => qtreel.id == id);

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
            (element) => element[0].uniteadministrative_id == id
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

    AfficheCodeBudgetaire() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_budgetaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code;
          }
          return 0;
        }
      };
    },

    AfficheCodeActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code;
          }
          return 0;
        }
      };
    },

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
  //générer une référence dynamique
  
  methods: {
    ...mapActions("horSib", [
      "ajouterMarcheHorSib",
      "modifierMarcheHorSib",
      "supprimerMarcheHorSib",
      "getMarcheHorSib",
    ]),
      rand_alea(long){
        for (let i = 0; i < long; i++) {
          this.codes += (this.charact.charAt(Math.floor(Math.random() * this.charact.length)))
      }
      this.formData.reference_marche = ('M_C/'+this.codes+'/'+ this.anneeBugetaire);
      return this.formData.reference_marche;
    },
    pagePrecedent(){
                window.history.back()
            },
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
      // this.$router.push({
      //   name: "marcheHorsib",
      // });

      var nouvelObjet = {
        ...this.formData,
        exo_id: this.anneeBugetaire,
        sib: 1,
        imputation: this.ImputationBudget,
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
