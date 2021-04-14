uniteAdministratives
<template>
  <div>
<div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div> 
<div class="row-fluid"  style="margin-top: -20px">
      <div class="span1"></div>
      <div class="span10" style="background-color: transparent; !important;">
        <table class="table table-striped">
          <tbody>
            <tr>
              <td colspan="">
                <br />
                <!-- <div  align="right" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="filter()" style="font-weight:bolder;color:#fff;font-size:20px"><i class="icon icon-plus">Fermer</i></button>
    
        </div>  -->

                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >UNITE ADMINISTRATIVE<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="uniteAdministratives"
                  v-model="uniteAdministrativeid"
                  option-value="id"
                  option-text="libelle"
                  placeholder="TOUTES LES UNITES ADMINISTRATIVES"
                >
                </model-list-select>
              </td>
              <td>
                <br />
                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >ENTREPRISE<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="entreprises"
                  v-model="entrepriseid"
                  option-value="id"
                  option-text="raison_sociale"
                >
                </model-list-select>
              </td>
              <!-- <td>
                <br />
                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >NUMERO ORDRE PAIEMENT<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="listeUniteAdminPasSection"
                  v-model="NumeroOp"
                  option-value="numero_ordre_paiement"
                  option-text="numero_ordre_paiement"
                  placeholder="TOUTES LES UNITES ADMINISTRATIVES"
                >
                </model-list-select>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div >
        <br>
        
        <!-- <div class="" align="right">
                   
<router-link :to="{name:'AjouterDecomptePrecedant'}" tag="a" data-toggle="modal" class="btn btn-info" align="rigth">AJOUTER DECOMPTE ANTERIEUR

                   </router-link> 
                   </div> -->
                  <h1 style="text-align:center;">DECOMPTE : {{marcheid}}</h1>
    <table class="table table-bordered table-striped">
                    <thead>
                      <tr>

                          <th style="text-align:center;font-size:12px">DESCRIPTION DES PRESTATIONS</th>

                          <th style="text-align:center;font-size:12px">TITULAIRE DU MARCHE</th>
                          <th style="text-align:center;font-size:12px">MONTANT DU MARCHE</th>
                          <th style="text-align:center;font-size:12px">MONTANT PAYE</th>
                          <th style="text-align:center;font-size:12px">NUMERO DECOMPTE</th>
                          <th style="text-align:center;font-size:12px">DATE</th>
                         
                          <th style="text-align:center;font-size:12px" colspan="2">ACTION </th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in ListeDEsEntreprise"
                    :key="BesoinImmo.id"
                  >
                    <td style="text-align:center;">{{afficheObjetMarche(BesoinImmo.marche_id) || 'Non renseigné'}}</td>
                          <td style="text-align:center;" @dblclick="afficherModalModifierTitre(BesoinImmo.id)">{{AfficheEntrepriseLibelle(afficheIdEntreprise(BesoinImmo.marche_id)) || 'Non renseigné'}}</td>
                          <td style="text-align:center;" @dblclick="afficherModalModifierTitre(BesoinImmo.id)">{{formatageSomme(parseFloat(AfficheMontantMarche(BesoinImmo.marche_id))) || 'Non renseigné'}}</td>
                          <td style="text-align:center;" @dblclick="afficherModalModifierTitre(BesoinImmo.id)">{{formatageSomme(parseFloat(BesoinImmo.montantmarche)) || 'Non renseigné'}}</td>
                          <td style="text-align:center;" @dblclick="afficherModalModifierTitre(BesoinImmo.id)">{{BesoinImmo.numero_decompte || 'Non renseigné'}}</td>
                          <td style="text-align:center;" @dblclick="afficherModalModifierTitre(BesoinImmo.id)">{{formaterDate(BesoinImmo.date_decompte) || 'Non renseigné'}}</td>
                               <td>
                             
                              <button class="btn btn-danger" @click="supprimerDecompteFacture(BesoinImmo.id)">
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                              </button>
                          </td>
                 
                  </tr>
                  <tr>
                   <td></td>
                  <td></td>
                
                 <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Total</td>
                  <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(SommeDesDmdParBonCommande))}}</td>
                  <td></td>
  <td></td>
                  <td></td>
                  </tr>
                    </tbody> 
                </table>   
     
    </div>

    <!-- <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="ajouterEntreEnPatrimoine()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="ajouterEntreEnPatrimoine"
        @searchMe="filter"
         
        bg-color="green"

  ></fab> -->
<notifications  />
  </div>
</template>
  
<script>
import { formatageSomme } from '@/Repositories/Repository';
    import {mapGetters, mapActions} from 'vuex';
    import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
  import moment from "moment";
// import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth";

export default {
   components: {
    
    ModelListSelect,
     
  },
  name: 'besionImmolisation',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
          
        },
        {
                  name: 'searchMe',
                   icon: "search"
              }
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
entrepriseid:0,
uniteAdministrativeid:0,
quantite: {
       
        qteentrant1:"0",
        date_entre:""
       
      },
      detailOp1:{
        exercicebudget:""
      },
      formData: {
        unite_administrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qtesortie:"0"
        
       
      },
     
       affiche_filtre:false,
      affiche_boutton_filtre:true,
      editStock: {
       unite_administrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qteentrant1:"0",
        
        
      },
      search: ""
    };
  },
 created() {
    this.marcheid = this.$route.params.id;
    this.detailOp1 = this.decomptefactures.find(
      (idmarche) => idmarche.id == this.$route.params.id
    );
  },
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
     "ficheArticle"
    ]),
    ...mapGetters("gestionMarche", ["entreprises", "secteur_activites"]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),
     ...mapGetters("bienService", [
      "groupeEntreprise",
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
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    ...mapGetters("uniteadministrative", ["decomptefactures","groupeParAnneeDecompte","uniteAdministratives","GestionStockageArticles","groupeUniteAdministrativeDecompte"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins","exercices_budgetaires"]),

anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },
  SommeDesDmdParBonCommande() {
   
    return this.ListeDEsEntreprise.filter(item=>item.exercicebudget==this.marcheid).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantmarche), 0).toFixed(0);
    },

 ListeDEsEntreprise() {
      let vM = this;
      let objet = this.AnneParUa;

      //retourne la section selectionner
   //console.log(objet)
      if (vM.uniteAdministrativeid != 0 ) {
        objet = vM.AnneParUa.filter((item) => {
          if (item.uniteadministrative_id == vM.uniteAdministrativeid ) {
            return item;
          }
        });
        return objet;
      }
      if (vM.entrepriseid != 0 ) {
        objet = vM.AnneParUa.filter((item) => {
          if (item.entreprise_id == vM.entrepriseid ) {
            return item;
          }
        });
        return objet;
      }
    
      if (vM.uniteAdministrativeid != 0 && vM.entrepriseid != 0) {
        objet = vM.AnneParUa.filter((item) => {
          if (
            item.uniteAdministrative_id == vM.uniteAdministrativeid &&
            item.entreprise_id == vM.entrepriseid 
          ) {
            return item;
          }
        });
        return objet;
      }
      
      return objet;
    },

afficheIdEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    },
    AfficheMontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_marche;
      }
      return "Non renseigné"
        }
      };
    },
     AfficheEntrepriseLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.raison_sociale;
          }
          return 0;
        }
      };
    },
afficheObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    },
AnneParUa() {
  return this.decomptefactures.filter( (qtreel) => qtreel.exercicebudget != this.marcheid)
      
    },

arrayExerciceDecompte() {
      //return (id1) => {
        
        let objet = this.AnneParUa;
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.exercicebudget);
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




   libelleUniteAdministrative() {
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
    ListeDecompteParUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           return this.groupeParAnneeDecompte.filter(qtreel => qtreel[0].uniteadministrative_id == id && qtreel[0].diff_decompte == 1);

        }
      };
    },


   groupeParUa() {
      
           return this.groupeUniteAdministrativeDecompte.filter(qtreel => qtreel[0].diff_decompte == 1);

    
    },
    
   
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllStock",
      "ajouterStock",
      "modifierStock",
      "supprimerStock"
    ]),
    ...mapActions("uniteadministrative",
     ["supprimerDecompteFacture"]),
    
afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModificationDecompteAnterieur/" + id
      });
    },
    pagePrecedent(){
                window.history.back()
            },
            
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme:formatageSomme,
  }
};
</script>
<style scoped>
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}
.taillemodalMod{
   width: 500px;
  margin: 0 -200px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
.tailgrandStock{
  width: 88%;
  margin: 0 -42%;
}
</style>
