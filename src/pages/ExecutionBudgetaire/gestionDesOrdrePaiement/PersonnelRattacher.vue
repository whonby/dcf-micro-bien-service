uniteAdministratives
<template>
  <div>
    <div>
      <br />

      <div class="" align="right">
        <!-- <router-link :to="{name:'AjoutPersonnelSansContrat'}" tag="a" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter  Personnel Ua Sans Contrat

                   </router-link>  -->
        <a
          href="#"
          data-toggle="modal"
          @click.prevent="callPersonnelRattacher"
          class="btn btn-success"
          align="rigth"
          >RATTACHER UNE PERSONNE</a
        >
      </div>
      <br />
      <br />
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th style="width: 90%">UNITE D'ADMINISTRATIVE</th>
            <th colspan="2">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="odd gradeX"
            v-for="getterPersonneRattach in groupeUaPersonneRattacher"
            :key="getterPersonneRattach[0].id"
          >
            <td style="font-size: 25px">
              {{
                libelleUniteAdministrative(
                  getterPersonneRattach[0].ua_rattacheur
                ) || "Non renseigné"
              }}
            </td>

            <td>
              <router-link
                :to="{
                  name: 'ListePersonnelRattacherByUa',
                  params: { id: getterPersonneRattach[0].ua_rattacheur },
                }"
                class="btn btn-success"
              >
                <span>
                  <i class="icon icon-folder-open" style="font-size: 14px">
                    Voir Personne Rattacher</i
                  >
                </span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="ModalProblemePersonnel" class="modal hide grdirModalActeEffet">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Rattachement de Personne</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <label
                >Unité Administrative Propriétaire
                <code style="color: red; font-size: 16px">*</code>
              </label>
              <model-list-select
                style="border: 1px solid #000"
                class="wide"
                :list="uniteAdministratives"
                v-model="formData2.ua_proprietaire"
                option-value="id"
                option-text="libelle"
                placeholder=""
              >
              </model-list-select>
              <code
                style="color: red; font-size: 12px"
                v-if="formData2.ua_proprietaire == ''"
                >Veuillez renseigner ce champ</code
              >
            </td>
          </tr>

          <tr>
            <!-- <td>
              <label
                >Personnel à Rattacher
                <code style="color: red; font-size: 16px">*</code>
              </label>
              <model-list-select
                style="border: 1px solid #000"
                class="wide"
                :list="PersonnelParUA(formData2.uaProprietaire)"
                v-model="formData2.Personnel_Rattacher"
                option-value="id"
                option-text="nom'+ 'prenom"
                placeholder=""
              >
              </model-list-select>
              <code
                style="color: red; font-size: 12px"
                v-if="formData2.Personnel_Rattacher == ''"
                >Veuillez renseigner ce champ</code
              >
            </td> -->

            <td>
              <div class="control-group">
                <label class="control-label">Personnel à Rattacher</label>
                <div class="controls">
                  <select
                    v-model="formData2.personne_rattacher"
                    class="span6"
                    style="border: 1px solid #000"
                  >
                    <option
                      v-for="depense in PersonnelParUA(
                        this.formData2.ua_proprietaire
                      )"
                      :key="depense.id"
                      :value="depense.id"
                    >
                      {{ depense.matricule }} =>{{ depense.nom }}
                      {{ depense.prenom }}
                    </option>
                  </select>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <label
                >Unité Administrative Rattacheur
                <code style="color: red; font-size: 16px">*</code>
              </label>
              <model-list-select
                style="border: 1px solid #000"
                class="wide"
                :list="uniteAdministratives"
                v-model="formData2.ua_rattacheur"
                option-value="id"
                option-text="libelle"
                placeholder=""
              >
              </model-list-select>
              <code
                style="color: red; font-size: 12px"
                v-if="formData2.ua_rattacheur == ''"
                >Veuillez renseigner ce champ</code
              >
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="AjouterRattacher" href="#"
          >Rattacher</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <notifications />
  </div>
</template>
  
<script>
//  import {formatageSomme} from "../../../vuex/modules/guei/Repositories/Repository"
import { mapGetters, mapActions } from "vuex";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
// import moment from "moment";
// import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth";

export default {
  components: {
    ModelListSelect,
  },

  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },
        {
          name: "searchMe",
          icon: "search",
        },
      ],

      quantite: {
        qteentrant1: "0",
        date_entre: "",
      },
      formData2: {
        ua_proprietaire: "",
        ua_rattacheur: "",
        personne_rattacher: "",
      },
      search: "",
    };
  },
  // created() {
  //     this.formData = this.filtre_Stock.find(
  //       Stock => Stock.id == this.$route.params.id
  //     )
  // },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "equipements",
      "familles",
      "articles",
      "marqueVehicules",
      "ModeleVehicules",
      "type_Unite_admins",
      "totalQteEntrant",
      "totalQteSortant",
      "getterUa_idImo",
      "ficheArticle",
    ]),
    ...mapGetters("personnelUA", [
      "all_acteur_depense",
      "getterPersonneRattacher",
      "groupeUaPersonneRattacher",
      "personnaliseActeurDepense",
      "acteur_depenses",
      "personnaFonction",
    ]),
    ...mapGetters("uniteadministrative", [
      "uniteAdministratives",
      "GestionStockageArticles",
      "groupeUniteAdministrativeDecompte",
      "uaperso",
    ]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),

    libelleUniteAdministrative() {
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

    PersonnelParUA() {
      return (id) => {
        if (id != null && id != "") {
          return this.personnaliseActeurDepense.filter(
            (qtreel) => qtreel.unite_administrative_id == id
          );
        }
      };
    },
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllStock",
      "ajouterStock",
      "modifierStock",
      "supprimerStock",
    ]),

    ...mapActions("personnelUA", [
      "AjouterPersonnelRattacher",
      "SupprimerPersonnelRattacher",
      "ModifierPersonnelRattacher",
    ]),
    callPersonnelRattacher() {
      this.$("#ModalProblemePersonnel").modal("show");
    },

    AjouterRattacher() {
      this.AjouterPersonnelRattacher(this.formData2);
      this.$("#ModalProblemePersonnel").modal("hide");

      this.formData2 = {
        ua_proprietaire: "",
        ua_rattacheur: "",
        personne_rattacher: "",
      };
    },
  },
};
</script>
<style scoped>
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}
.taillemodalMod {
  width: 500px;
  margin: 0 -200px;
}
.sommecolor {
  background-color: red;
  color: red;
  font-size: 120%;
  text-align: center;
  font-weight: bold;
}
.tailgrandStock {
  width: 88%;
  margin: 0 -42%;
}
</style>
