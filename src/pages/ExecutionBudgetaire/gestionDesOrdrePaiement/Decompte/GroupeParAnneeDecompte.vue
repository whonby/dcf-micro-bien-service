uniteAdministratives
<template>
  <div>


    <div >
        <br>
        
        <!-- <div class="" align="right">
                   
<router-link :to="{name:'AjouterDecomptePrecedant'}" tag="a" data-toggle="modal" class="btn btn-info" align="rigth">AJOUTER DECOMPTE ANTERIEUR

                   </router-link> 
                   </div> -->
                  
    <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                         <th style="width:80%">ANNEE</th>
                          <th style="width:20%">MONTANT PAR ANNEE</th>
                        
                        
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in arrayExerciceDecompte(detail_Facture.marche_id)"
                    :key="BesoinImmo.id"
                  >
                  <td style="font-size:20px"
                   
                    >{{BesoinImmo || 'Non renseigné'}}</td>
                 <td style="font-size:14px;text-align:center;"
                   
                    >{{formatageSomme(parseFloat(MontantDecompteParAnnee(BesoinImmo))) || 'Non renseigné'}}</td>
                     
                  </tr>
                  <tr>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Total</td>
                  <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(MontantDecompteParAnneeTotal))}}</td>

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
import {formatageSomme} from "@/Repositories/Repository"
    import {mapGetters, mapActions} from 'vuex';
    // import moment from "moment";
// import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth";

export default {
//   components: {
    
//     ModelListSelect,
     
//   },
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
quantite: {
       
        qteentrant1:"0",
        date_entre:""
       
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
      uniteAdministrative_id:"",
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
            this.marcheid=this.$route.params.id
   this.detail_Facture = this.gettersgestionOrdrePaiement.find(
       idmarche => idmarche.id == this.$route.params.id
         )
      
},
  computed: {
    ...mapGetters("bienService", ["avenants","gettersgestionOrdrePaiement","personnaliseGetterMarcheBailleur","modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),
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
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    ...mapGetters("uniteadministrative", ["decomptefactures","groupeParAnneeDecompte","uniteAdministratives","GestionStockageArticles","groupeUniteAdministrativeDecompte"]),
        ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins","exercices_budgetaires"]),
MontantDecompteParAnneeTotal() {
     
           return this.decomptefactures.filter(qtreel =>qtreel.marche_id == this.detail_Facture.marche_id && qtreel.uniteadministrative_id == this.detail_Facture.unite_administrative_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantmarche), 0).toFixed(0);

     
        
    },
MontantDecompteParAnnee() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.exercicebudget == id && qtreel.marche_id == this.detail_Facture.marche_id && qtreel.uniteadministrative_id == this.detail_Facture.unite_administrative_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantmarche), 0).toFixed(0);

     
        }
      };
    },
AnneParUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.decomptefactures.filter(
            (qtreel) => qtreel.marche_id == id && qtreel.exercicebudget != this.anneeAmort
          );
        }
      };
    },
anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },
arrayExerciceDecompte() {
      return (id) => {
        
        let objet = this.AnneParUa(id);
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
     };
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
     ["supprimerStockArticle"]),
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
