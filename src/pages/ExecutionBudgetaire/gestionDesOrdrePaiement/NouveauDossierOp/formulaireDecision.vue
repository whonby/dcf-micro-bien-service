
<template>
  <div>
       <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
        <br/>
  <table class="table table-bordered table-striped tailgrand785">
      <h3 style="font-size:20px;">DECISION CF</h3>
  </table>
  <br/>
   
    <table class="table table-bordered table-striped tailgrand785">
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Décision CF </label>
                <div class="controls">
                  <!-- <select v-model="editMandat.decision_cf" class="span5">
                    <option value=""></option>
                    <option value="8">Visé</option>
                    <option value="9">Visé avec Observation</option>
                    <option value="2">Différé</option>
                    <option value="3">Réjeté</option>
                    <option value="0">Attente</option>
                  </select> -->
                   <model-list-select 
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="options2"
                  v-model="editMandat.decision_cf"
                  option-value="id"
                  option-text="libelle"
                >
                </model-list-select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Famille de Motif</label>
                <div class="controls">
                  <!-- <select v-model="editMandat.famille_motif" class="span5">
                    <option value="0"></option>
                    <option
                      v-for="varText in AffichierElementParent"
                      :key="varText.id"
                      :value="varText.id"
                    >
                      {{ varText.libelle }}
                    </option>
                  </select> -->
                  <model-list-select 
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="AffichierElementParent"
                  v-model="editMandat.famille_motif"
                  option-value="id"
                  option-text="libelle"
                >
                </model-list-select>
                </div>
              </div>
            </td>
           
          </tr>
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">Motif</label>
                <div class="controls">
                
                   <model-list-select 
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="AffichierElementEnfant"
                  v-model="editMandat.famille_motif"
                  option-value="id"
                  option-text="libelle"
                >
                </model-list-select>
                </div>
              </div>
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Autres Motif</label>
                <div class="controls">
                  <textarea
                    class="span10"
                    row="6"
                    v-model="editMandat.autre_motif"
                    :readonly="griserAutreMotif"
                  >
                  </textarea>
                </div>
              </div>
            </td>
            
          </tr>
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Date Decision CF :</label>
                <div class="controls">
                  <input
                    type="date"
                    class="span5"
                    v-model="editMandat.date_decision_cf"
                  />
                  <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                </div>
              </div>
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Observation CF</label>
                <div class="controls">
                  <textarea
                    class="span10"
                    row="6"
                    v-model="editMandat.observation"
                  >
                  </textarea>
                </div>
              </div>
            </td>
           
          </tr>
          <tr>
               <td colspan="2">
              <div class="control-group">
                <label class="control-label">Nom du CF</label>
                <div class="controls">
                  <input
                    type="text"
                    class="span5"
                    :value="
                      recupererNomDuControleurF(
                        recupererIdUser(
                          recupererIdServiceCF(
                            editMandat.unite_administrative_id
                          )
                        )
                      )
                    "
                    readonly
                  />
                </div>
              </div>
            </td>
          </tr>
        </table>

        <table
          class="table table-bordered table-striped"
          v-if="editMandat.decision_cf == 2"
        >
          <div class="row-fluid">
            <div class="span6">
              <div class="widget-box">
                <div class="widget-title">
                  <span class="icon"> <i class="icon-eye-open"></i> </span>
                  <h5>Motif à Corrigé</h5>
                </div>
                <div class="widget-content nopadding">
                  <templete v-if="verifier(editMandat.id) == editMandat.id">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr
                          class="odd gradeX"
                          v-for="type in listeOpdiffere(editMandat.id)"
                          :key="type.id"
                        >
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{
                              MotifLibelle(type.famille_motif) ||
                              "Non renseigné"
                            }}
                          </td>
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{ MotifLibelle(type.motif) || "Non renseigné" }}
                          </td>

                          <td>
                            <button
                              class="btn btn-danger"
                              @click="DetacheMotif(type.id)"
                            >
                              <span>
                                <i class="icon-external-link"></i>Détaché
                              </span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </templete>
                  <templete v-else>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                    </table>
                  </templete>
                </div>
              </div>
            </div>
            <div class="span6">
              <div class="widget-box">
                <div class="widget-title">
                  <span class="icon"> <i class="icon-arrow-right"></i> </span>
                  <h5>Motif Corrige</h5>
                </div>
                <div class="widget-content nopadding">
                  <templete v-if="verifier(editMandat.id) == editMandat.id">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr
                          class="odd gradeX"
                          v-for="type in EurreurCorrige(editMandat.id)"
                          :key="type.id"
                        >
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{
                              MotifLibelle(type.famille_motif) ||
                              "Non renseigné"
                            }}
                          </td>
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{ MotifLibelle(type.motif) || "Non renseigné" }}
                          </td>
                          <td>
                            <button
                              class="btn btn-info"
                              @click="DetacheMotifAttache(type.id)"
                            >
                              <span>
                                <i class="icon-external-link"></i>Attaché
                              </span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </templete>
                  <templete v-else>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                        </tr>
                      </thead>
                    </table>
                  </templete>
                </div>
              </div>
            </div>
          </div>
        </table>
        <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal()"
          class="btn btn-primary "
          style="width: 10%;height: 20%;"
          href="#"
          >Valider</a
        >
        
      </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  name:'typetext',
   components: {
    ModelListSelect,
  },
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
      options2: [
        { id: "8", libelle: "Visé" },
        { id: "9", libelle: "Visé avec Observation" },
        { id: "2", libelle: "Différé" },
        { id: "3", libelle: "Réjeté" },
        { id: "0", libelle: "Attente" },
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        code: "",
        libelle: ""
      },
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      search: ""
    };
  },
created() {
    this.marcheid = this.$route.params.id;
   
            this.editMandat=this.gettersgestionOrdrePaiement.find(item=>item.id==this.$route.params.id)

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
     
      "typeMarches",
     "marches",
      "gettersgestionOrdrePaiement",
      "acteEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
    "avenants",
    "groupeParSousBudgetDansOp"
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
      "groupeBySection",
      "groupeByTypeFinancement"
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
     listeOpdiffere() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettershistoriqueDecisionCfOP.filter(
            (qtreel) =>
              qtreel.id_op == id &&
              qtreel.diff_decision == 0 &&
              qtreel.decision_cf == 2
          );
        }
      };
    },
    EurreurCorrige() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettershistoriqueDecisionCfOP.filter(
            (qtreel) =>
              qtreel.id_op == id &&
              qtreel.diff_decision == 1 &&
              qtreel.decision_cf == 2
          );
        }
      };
    },
    MotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    FamilleMotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
     verifier() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettershistoriqueDecisionCfOP.find(
            (qtreel) => qtreel.id_op == id
          );

          if (qtereel) {
            return qtereel.id_op;
          }
          return 0;
        }
      };
    },
    recupererNomDuControleurF() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterUtilisateur.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.name;
          }
          return 0;
        }
      };
    },
    recupererIdUser() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterAffectionServiceCF.find(
            (qtreel) => qtreel.servicecf_id == id && qtreel.date_fin == null
          );

          if (qtereel) {
            return qtereel.user_id;
          }
          return 0;
        }
      };
    },
    recupererIdServiceCF() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterAffectation.find(
            (qtreel) =>
              qtreel.unite_administrative_id == id && qtreel.date_fin == null
          );

          if (qtereel) {
            return qtereel.servicecf_id;
          }
          return 0;
        }
      };
    },

    griserAutreMotif() {
      return this.editMandat.motif != 237;
    },
    AffichierElementParent() {
      // return id => {
      //   if (id != null && id != "") {
      return this.plans_Decision.filter(
        (element) =>
          this.RecupererNiveau3StructureDecision(
            element.structure_motif_decission_id
          ) == 3
      );
      //   }
      // };
    },
    RecupererNiveau3StructureDecision() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.structuresDecision.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.niveau;
          }
          return 0;
        }
      };
    },
    AffichierElementEnfant() {
      
          return this.plans_Decision.filter((element) => element.parent == this.editMandat.famille_motif);
       
    },
    libelleDecision() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return "Non renseigné";
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
   
    DetacheMotif(id) {
      this.EditDetache = this.gettershistoriqueDecisionCfOP.find(
        (item) => item.id == id
      );
      this.ModifierMotif();
    },
    DetacheMotifAttache(id) {
      this.EditDetache = this.gettershistoriqueDecisionCfOP.find(
        (item) => item.id == id
      );

      this.ModifierMotifAttche();
    },

    ModifierMotif() {
      var objet = {
        id: this.EditDetache.id,
        decision_cf: this.EditDetache.decision_cf,
        famille_motif: this.EditDetache.famille_motif,
        motif: this.EditDetache.motif,
        date_decision: this.EditDetache.date_decision_cf,
        diff_decision: 1,
        id_op: this.EditDetache.id_op,
      };
      this.modifierHistoriqueDecisionOp(objet);
    },

    ModifierMotifAttche() {
      var objet = {
        id: this.EditDetache.id,
        decision_cf: this.EditDetache.decision_cf,
        famille_motif: this.EditDetache.famille_motif,
        motif: this.EditDetache.motif,
        date_decision: this.EditDetache.date_decision_cf,
        diff_decision: 0,
        id_op: this.EditDetache.id_op,
      };
      this.modifierHistoriqueDecisionOp(objet);
    },
modifierTypeTexteLocal() {
      var nouveauObjet = {
        decision_cf: this.editMandat.decision_cf,
        famille_motif: this.editMandat.famille_motif,
        motif: this.editMandat.motif,
        date_decision: this.editMandat.date_decision_cf,
        diff_decision: 0,
        id_op: this.editMandat.id,
      };
        var nouveauObjet1 = {
          ...this.editMandat,
        decision_cf: this.editMandat.decision_cf,
        famille_motif: this.editMandat.famille_motif,
        motif: this.editMandat.motif,
        date_decision_cf: this.editMandat.date_decision_cf,
        // diff_op: 0,
        id: this.editMandat.id,
      };
      this.ajouterHistoriqueDecisionOp(nouveauObjet);
      this.modifierGestionOrdrePaiement(nouveauObjet1);
      this.$("#validationOpDefinitif1").modal("hide");
    },
    modifierDecisionFinal() {
      this.modifierGestionOrdrePaiement(this.editDecisionFinal);
      this.$("#validationOpDefinitif1").modal("hide");
    },
    pagePrecedent(){
                window.history.back()
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


<style scoped>



.tailgrand785 {
  width: 50%;
  margin: 0 10%;
}


</style>
