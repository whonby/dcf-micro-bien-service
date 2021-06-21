
<template>
  <div>
    <div align="center" style="margin-">
      <h3>Marchés/ Contrats</h3>
    </div>
    <div class="">
      <table class="table table-bordered table-striped">
        <tr>
          <td>
            <div class="control-group">
              <label class="control-label">Année Budgétaire </label>
              <div class="controls">
                <select v-model="editMarcheHorSib.exo_id" class="span4">
                  <option
                    v-for="plans in exercices_budgetaires"
                    :key="plans.id"
                    :value="plans.exo_id"
                  >
                    {{ plans.annee }}
                  </option>
                </select>
                <!-- <input
                  type="text"
                  :value="anneeBugetaireModifier"
                  class="span4"
                  readonly
                /> -->
              </div>
            </div>
          </td>
          <td colspan="2">
            <!-- <div class="" align="left">
                        Selectionner UA:
                        <model-list-select style="background-color: rgb(255,255,255);"
                          class="wide"
                          :list="budgetEclate"
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
                  v-model="editMarcheHorSib.unite_administrative_id"
                  class="span8"
                >
                  <option
                    v-for="plans in budgetEclate"
                    :key="plans.id"
                    :value="plans.uniteadministrative_id"
                  >
                    {{
                      afficherLibelleUniteAdministrative(
                        plans.uniteadministrative_id
                      )
                    }}
                  </option>
                </select>
              </div>
            </div>
          </td>

          <td colspan="">
            <div class="control-group">
              <label class="control-label">Référence du marché</label>
              <div class="controls">
                <input
                  type="text"
                  v-model="editMarcheHorSib.reference_marche"
                  class="span3"
                  placeholder="Saisir la référence du marché"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="">
            <div class="control-group">
              <label class="control-label">Type de marché </label>
              <div class="controls">
                <select v-model="editMarcheHorSib.type_marche_id" class="span4">
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

                <select v-model="editMarcheHorSib.gdenature_id" class="span4">
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

          <td colspan="2">
            <div class="control-group">
              <label class="control-label">Objet marché / contrat</label>
              <div class="controls">
                <textarea
                  v-model="editMarcheHorSib.objet"
                  class="span7"
                  rows="2"
                  placeholder="Saisir le texte"
                ></textarea>
              </div>
            </div>
          </td>
        </tr>
        <tr></tr>

        <tr>
          
          <td>
            <div class="control-group">
              <label class="control-label">Activité</label>
              <div class="controls">
                <select v-model="editMarcheHorSib.activite_id" class="span4">
                  <option
                    v-for="activite in activiteDynamiques(
                      editMarcheHorSib.unite_administrative_id
                    )"
                    :key="activite[0].activite_id"
                    :value="activite[0].activite_id"
                  >
                    {{ afficherLesActivite(activite[0].activite_id) }}
                  </option>
                </select>
              </div>
            </div>
          </td>

 <template
                            v-if="
                              comparereActivite(this.editMarcheHorSib.activite_id) ==
                              this.editMarcheHorSib.activite_id
                            " 
                          >

          <td>
            <div class="control-group">
              <label class="control-label" title="unite administrative"
                >Sous Budget</label
              >
              <div class="controls">
                <select
                  v-model="editMarcheHorSib.unite_zone"
                  class="span"
                  style="border: 1px solid #000"
                >
                  <option></option>
                  <option
                    v-for="plans in AfficheUniteZone(
                      editMarcheHorSib.activite_id
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
              <label class="control-label">Ligne Economique</label>
              <div class="controls">
                <select
                  v-model="editMarcheHorSib.economique_id"
                  :readOnly="deveroueconomiq"
                  class="span4"
                >
                  <option
                    v-for="eco in ligneBudgeteyuy(
                      editMarcheHorSib.unite_zone
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

           </template>

           <template v-else>
              <td>
            <div class="control-group">
              <label class="control-label">Ligne Economique</label>
              <div class="controls">
                <select
                  v-model="editMarcheHorSib.economique_id"
                  :readOnly="deveroueconomiq"
                  class="span4"
                >
                  <option
                    v-for="eco in ligneBudgeteyuy(
                      editMarcheHorSib.unite_administrative_id
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
           </template>



          <td>
            <div class="control-group">
              <label class="control-label">Imputation Budgétaire</label>
              <div class="controls">
                <input
                  type="text"
                  :value="ImputationBudget(editMarcheHorSib.economique_id)"
                  class="span4"
                  placeholder="Saisir le Imputation"
                  readonly
                />
              </div>
            </div>
          </td>
          <td colspan="">
            <div class="control-group">
              <label class="control-label">Type de financement</label>
              <div class="controls">
                <!-- <input
           type="text"
           v-model="editMarcheHorSib.type_financement"
           class="span4"
          
           readonly
         /> -->
                <select
                  v-model="editMarcheHorSib.type_financement"
                  class="span3"
                >
                  <option
                    v-for="plans in types_financements"
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
              <label class="control-label">Source de financement</label>
              <div class="controls">
                <!-- <input
           type="text"
           v-model="editMarcheHorSib.source_financement"
           class="span4"
           
           readonly
         /> -->
                <select
                  v-model="editMarcheHorSib.source_financement"
                  class="span4"
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

          <td colspan="">
            <div class="control-group">
              <label class="control-label">Procédure Passation</label>
              <div class="controls">
                <select
                  v-model="editMarcheHorSib.procedure_passation_id"
                  class="span4"
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
          <td>
            <div class="control-group">
              <label class="control-label">Montant prévu</label>
              <div class="controls">
                <money v-model="editMarcheHorSib.montant_marche"></money>
                <!-- <input
           type="text"
           v-model="editMarcheHorSib.montant_marche"
           class="span4" /> -->
              </div>
            </div>
          </td>

          <td>
            <div class="control-group">
              <label class="control-label">Nature des prix</label>
              <div class="controls">
                <select v-model="editMarcheHorSib.nature_prix_id" class="span4">
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

          <!-- <td>
     <div class="control-group">
      <label class="control-label">Livrable</label>
      <div class="controls">
     <input
       type="text"
       v-model="editMarcheHorSib.livrable"
       class="span3"
       placeholder="Saisir le livrable"
     />
   </div>
   </div>
     </td> -->
        </tr>

        <tr>
          <!-- <td colspan="">
              
               <div class="control-group">
            <label class="control-label">Motif de passation</label>
            <div class="controls">
            
               <select v-model="editMarcheHorSib.motif_passation_id" class="span4" >
               <option v-for="plans in motif_passation" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>   -->
          <!-- <td>
            <div class="control-group">
              <label class="control-label">Infrastructure</label>
              <div class="controls">
                <select
                  v-model="editMarcheHorSib.infrastructure_id"
                  class="span6"
                >
                  <option
                    v-for="plans in getterInfrastrucure"
                    :key="plans.id"
                    :value="plans.id"
                  >
                    {{ plans.libelle }}
                  </option>
                </select>
              </div>
            </div>
          </td> -->
        </tr>
      </table>

      <div class="widget-title">
        <ul class="nav nav-tabs">
          <li class="active">
            <a data-toggle="tab">INFRASTRUCTURES ET EQUIPEMENTS</a>
          </li>
        </ul>
      </div>

      <table
        class="table table-bordered table-striped"
        style="border: 1px solid #000"
      >
        <tr>
          <td colspan="1">
            <div class="control-group">
              <label class="control-label">Chapitre</label>
              <div class="controls">
                <select
                  v-model="editMarcheHorSib.chapitre_infra_id"
                  class="span4"
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

          <td colspan="1">
            <div class="control-group">
              <label class="control-label">Catégorie</label>
              <div class="controls">
                <select v-model="editMarcheHorSib.cat_infra_id" class="span4">
                  <option
                    v-for="plans in ListCategorie(
                      editMarcheHorSib.chapitre_infra_id
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

          <td colspan="1">
            <div class="control-group">
              <label class="control-label">Sous Catégorie</label>
              <div class="controls">
                <select
                  v-model="editMarcheHorSib.souscat_infra_id"
                  class="span4"
                >
                  <option
                    v-for="plans in ListSousCategorie(
                      editMarcheHorSib.cat_infra_id
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

      <div class="modal-footer">
        <a
          class="btn btn-primary"
          href="#"
          @click.prevent="modifierMarcheHorSibLocal"
          >Modifier</a
        >
        <a
          data-dismiss="modal"
          class="btn"
          @click.prevent="pagePrecedent()"
          href="#"
          >Fermer</a
        >
      </div>
    </div>

    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
    <notifications />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
//import { formatageSomme } from "../../../src/Repositories/Repository";
import { admin, dcf, noDCfNoAdmin } from "../../../Repositories/Auth";
//import {  ModelListSelect } from 'vue-search-select'
//import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  name: "type facture",



  components: {
    // bailleurAjouter,
    //  ModelListSelect,
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

      editMarcheHorSib: {
        //   latitude:"",
        //   longitude:"",
        //   localisation_geographie_id:"",
        //   libelle_procedure:"",
        //     type_financement:"",
        //     source_financement:"",
        //         objet:"",
        //         economique_id:"",
        //         procedure_passation_id:"",
        //         beneficiaire:"",
        //         livrable:"",
        //         reference_marche:"",
        //         montant_marche:"",
        //             type_marche_id:"",
        //             unite_administrative_id:"",
        //            // gdenature_id:"",
        //            // activite_id:"",
        //            // typeappel_id:"",
        //             exo_id:"",
        //             sib:1
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
  created() {
    //this.getDetail()
    this.editMarcheHorSib = this.gettersMarcheHorsib.find(
      (item) => item.id == this.$route.params.id
    );
  },

  computed: {
    ...mapGetters("horSib", ["gettersMarcheHorsib"]),
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

    ...mapGetters("parametreGenerauxFonctionnelle", [
      "Nature_des_prix",
      "motif_passation",
    ]),
    ...mapGetters("uniteadministrative", [
      "getterligneExempter",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getSousBudget",
      "budgetEclate",
      "groupgranNature",
      "getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral",
      "groupeActiviteBudgetEclate",
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

    ...mapGetters("Utilisateurs", [
      "user",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),

    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,

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

    activiteDynamiques() {
      return (id) => {
        if (id != null && id != "") {
          return this.groupeActiviteBudgetEclate.filter(
            (element) =>
              element[0].uniteadministrative_id == id
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

    AfficheUniteZone() {
      return (id) => {
        if (id != null && id != "") {
          return this.getSousBudget.filter(
            (qtreel) => qtreel.activite_parent_id == id
          );
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

    deveroueconomiq() {
      return this.editMarcheHorSib.unite_administrative_id == "";
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
            (element) => element.uniteadministrative_id == id
          );
        }
      };
    },

    ImputationBudget() {
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
    afficherListeModePassation() {
      return this.procedurePassations.filter(
        (item) =>
          item.code != "GAG" &&
          item.code != "AOR" &&
          item.code != "LCVM" &&
          item.code != "ED"
      );
    },
    // ImputationBudget() {

    //   const norme = this.budgetEclate.find(normeEquipe => normeEquipe.ligneeconomique_id == this.editMarcheHorSib.ligneeconomique_id );

    //   if (norme) {
    //     return norme.code;
    //   }
    //   return 0
    // },
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

    //reucperation annee budgetaire dynamique
    anneeBugetaireModifier() {
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
    ...mapActions("horSib", ["modifierMarcheHorSib", "getMarcheHorSib"]),
    // allerPageMarcheHorsib() {
    //   this.$router.push({
    //     name: "marcheHorsib",
    //   });
    // },

    allerPageMarcheHorsib() {
      window.history.back();
    },

    pagePrecedent() {
      window.history.back();
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

    modifierMarcheHorSibLocal() {
      var nouvelObjet = {
        ...this.editMarcheHorSib,
        exo_id: this.anneeBugetaireModifier,
        imputation: this.ImputationBudget(this.editMarcheHorSib.economique_id),
      };
      this.modifierMarcheHorSib(nouvelObjet);
      this.editMarcheHorSib = {
        //latitude:"",
        // longitude:"",
        //localisation_geographie_id:"",
        motif_passation_id: "",
        nature_prix_id: "",
        infrastructure_id: "",
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
        activite_id: "",
        // typeappel_id:"",
        exo_id: "",
        sib: 1,
      };

      this.$router.push({
        name: "GestionMarcheHorSib",
      });
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


