uniteAdministratives
<template>
  <div>
    <div>
      <br />

      <div class="" align="right">
        <!-- <router-link :to="{name:'AjoutPersonnelSansContrat'}" tag="a" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter  Personnel Ua Sans Contrat

                   </router-link>  -->
        <a
          href="#ModalProblemePersonnel"
          data-toggle="modal"
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
            v-for="groupeUaPersonneRattach in groupeUaPersonneRattacher"
            :key="groupeUaPersonneRattach[0].id"
          >
            <td style="font-size: 25px">
              {{
                libelleUniteAdministrative(
                  groupeUaPersonneRattach[0].ua_rattacheur
                ) || "Non renseigné"
              }}
            </td>

            <td>
              <router-link
                :to="{
                  name: 'ListeDecompteAnterieur',
                  params: { id: groupeUaPersonneRattach[0].ua_rattacheur },
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
                v-model="formData2.uaProprietaire"
                option-value="id"
                option-text="libelle"
                placeholder=""
              >
              </model-list-select>
              <code
                style="color: red; font-size: 12px"
                v-if="formData2.uaProprietaire == ''"
                >Veuillez renseigner ce champ</code
              >
            </td>
          </tr>

          <tr>
            <td>
              <label
                >Personnel à Rattacher
                <code style="color: red; font-size: 16px">*</code>
              </label>
              <model-list-select
                style="border: 1px solid #000"
                class="wide"
                :list="uniteAdministratives"
                v-model="formData2.Personnel_Rattacher"
                option-value="id"
                option-text="libelle"
                placeholder=""
              >
              </model-list-select>
              <code
                style="color: red; font-size: 12px"
                v-if="formData2.Personnel_Rattacher == ''"
                >Veuillez renseigner ce champ</code
              >
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
                v-model="formData2.uaRattacheur"
                option-value="id"
                option-text="libelle"
                placeholder=""
              >
              </model-list-select>
              <code
                style="color: red; font-size: 12px"
                v-if="formData2.uaRattacheur == ''"
                >Veuillez renseigner ce champ</code
              >
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" href="#">Valider</a>
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

  name: "besionImmolisation",
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
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      // json_fields: {
      //         TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
      //         UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
      //         DESIGNATION: "famille.libelle",
      //         QUANTITE: "quantite",
      //         PRIX_UNITAIRE: "prix_unitaire",
      //         MONTANT_TOTAL: "montant_total",
      //          DATE_DE_DEMANDE: "date_jour",
      //       },
      quantite: {
        qteentrant1: "0",
        date_entre: "",
      },
      formData2: {
        uaProprietaire: "",
        Personnel_Rattacher: "",
        uaRattacheur: "",
      },
      uniteAdministrative_id: "",
      affiche_filtre: false,
      affiche_boutton_filtre: true,
      editStock: {
        unite_administrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qteentrant1: "0",
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

    //    groupeParUa() {

    //            return this.groupeUniteAdministrativeDecompte.filter(
    //                qtreel => qtreel[0].diff_decompte == 1);
    //     },
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllStock",
      "ajouterStock",
      "modifierStock",
      "supprimerStock",
    ]),

    ...mapActions("personnelUA", [
      "getPersonnelRattacher",
      "AjouterPersonnelRattacher",
      "SupprimerPersonnelRattacher",
      "ModifierPersonnelRattacher",
    ]),
    ...mapActions("uniteadministrative", [
      "uniteAdministratives",
      "supprimerStockArticle",
    ]),
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
