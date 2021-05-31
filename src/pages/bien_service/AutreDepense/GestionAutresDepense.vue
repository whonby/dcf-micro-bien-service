
<template>
  <div >
    <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
      <div id="exampleModal" class="modal hide gdtailleModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="btn btn-danger"  type="button" style="color:#000;font-weight: bolder">Fermer</button>
        <h3>DETAIL AUTRES DEPENSES</h3>
      </div>
      <div class="modal-body">
          <span style="font-size:16px;color:#000;text-align:center;font-weight: bold"> OBJET DE LA DEPENSE : {{libelleAutreDepense(editAutreDepense.autre_depense_id)}}</span>
     <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ENTREPRISE</th>
                    <th>BANQUE</th>
                     <th>COMPTE</th>
                      <th>MOIS PAIEMENT</th>
                       <th>MODE PAIEMENT</th>
                        <th>MONTANT (FCFA)</th>
                  
                  </tr>

                </thead>
                <tbody>
                      <tr class="odd gradeX" v-for="(type) in afficheDetailAutreDepense" :key="type">
<td style="font-size:16px;color:#000;text-align:center">{{type.nom_autre_depense  || 'Non renseigné'}}</td>
 <td style="font-size:16px;color:#000;text-align:center">{{type.reference_autre_depense  || 'Non renseigné'}}</td>
 <td style="font-size:16px;color:#000;text-align:center">{{type.compte_autre_depense  || 'Non renseigné'}}</td>
 <td style="font-size:16px;color:#000;text-align:center">{{type.mois_paiement || 'Non renseigné'}}</td>
 <td style="font-size:16px;color:#000;text-align:center">{{libelleModePaiement(type.mode_paiement_id)  || 'Non renseigné'}}</td>
 <td style="font-size:16px;color:#000;text-align:center">{{formatageSommeSansFCFA(parseFloat(type.montant_ordre_paiement))  || 'Non renseigné'}}</td>
                          </tr>
                          <tr>
<td style="font-size:16px;color:#000;text-align:center"></td>
 <td style="font-size:16px;color:#000;text-align:center"></td>
 <td style="font-size:16px;color:#000;text-align:center"></td>
 <td style="font-size:16px;color:#000;text-align:center"></td>
 <td style="font-size:16px;color:#000;text-align:center;font-weight: bold">TOTAL</td>
 <td style="text-align: center; color: red; font-weight: bold">{{formatageSommeSansFCFA(parseFloat(SommeAutreDepense))}}</td>
                          </tr>
                 
                </tbody>
              </table>
      </div>
     
    </div>
   <h2 style="text-align:center;font-size:25px">LISTES DES AUTRES DEPENSES EXECUTES</h2>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>OBJET</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                      <tr class="odd gradeX" v-for="(type) in arrayExerciceDecompteBienService" :key="type">
<td style="font-size:16px;color:#000;">{{libelleAutreDepense(type)  || 'Non renseigné'}}</td>
 <td >
      <button
                        class="btn btn-danger tailBtn"
                        @click="afficherModalModifierTypeTexte(type)"
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          ><i class="icon-eye-open" style="font-weight: bold;"> Voir Detail</i></span
                        >
                      </button>
                      
                    </td>
                          </tr>
                 
                </tbody>
              </table>
           
             
            </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSommeSansFCFA } from "@/Repositories/Repository";
import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";
import { partition } from "@/Repositories/Repository";
//import {partition} from '../../../src/Repositories/partition'
//import {partition} from '../../../src/Repositories/partition';
//import {partition} from '../../../../'
export default {
  name: "type facture",
  data() {
    return {
      page: 0,
      size: 10,
      active_el: 0,

    editAutreDepense:{},
    };
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.marches.find(
       idmarche => idmarche.id == this.$route.params.id
         )
        
},
  computed: {
    ...mapGetters("bienService", [
        "gettersDossierAutreDepense",
      "gettersgestionOrdrePaiement",
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
      "modepaiements"
    ]),

    ...mapGetters("horSib", [
      "getMarcheHorSib",
      "getRealiteServiceHors",
      "getOpProvisoire",
    ]),
    ...mapGetters("uniteadministrative", [
      "getterligneExempter",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "groupgranNature",
      "getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral",
      "budgetEclate",
    ]),
    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),
    ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "exercices_budgetaires",
      "grandes_natures",
    ]),
    ...mapGetters("gestionMarche", ["entreprises"]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", ["Nature_des_prix"]),
    ...mapGetters("Utilisateurs", [
      "user",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),

    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,
SommeAutreDepense(){
    return this.gettersgestionOrdrePaiement.filter(item=>item.unite_administrative_id == this.marcheid && item.autre_depense_id == this.editAutreDepense.autre_depense_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
},
afficheDetailAutreDepense(){
    return this.gettersgestionOrdrePaiement.filter(item=>item.unite_administrative_id == this.marcheid && item.autre_depense_id == this.editAutreDepense.autre_depense_id)
},
    
    libelleModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    libelleAutreDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierAutreDepense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet
      }
      return 0
        }
      };
    },
arrayExerciceDecompteBienService() {
      //return (id) => {
        
        let objet = this.gettersgestionOrdrePaiement.filter(item=>item.unite_administrative_id==this.marcheid && item.autre_depense_id != null);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.autre_depense_id);
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





  },
  methods: {
    ...mapActions("bienService", [
      "ajouterMarche",
      "modifierMarche",
      "modifierMarcheBascule",
      "supprimerMarche",
      "modifierActeEffetFinancier",
      "getMarche",
      "getActeEffetFinancier",
    ]),
       afficherModalModifierTypeTexte(id) {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editAutreDepense = this.gettersgestionOrdrePaiement.find(item=>item.autre_depense_id==id);
    },
    pagePrecedent(){
                window.history.back()
            },

   

formatageSommeSansFCFA:formatageSommeSansFCFA,
    partition: partition,
    getDataPaginate(index) {
      this.active_el = index;
      this.page = index;
    },
    precedent() {
      this.active_el--;
      this.page--;
    },
    suivant() {
      this.active_el++;
      this.page++;
    },
    // alert() {
    //   console.log("ok");
    // },
    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>

<style scoped>
.taillModal {
  width: 1080px;
  margin: 0 -25%;
}
.taillMarche {
  width: 96%;
  margin: 0 -48%;
}
.grdirModalActeEffet {
  width: 1200px;
  margin: 0 -530px;
  height: 550px;
}
.gdtailleModal{
     width: 80%;
      margin: 0 -35%;
}
</style>
