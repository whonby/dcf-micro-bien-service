
<template>
  <div>
    <h2 style="text-align:center; font-size: 16px">TABLEAU DE SUIVI DES TYPES D’OP PAR EXERCICE ET UA</h2>
    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div>
          <table class="table table-bordered table-striped">
            <tr>
                <td>
 <label
                            >EXERCICE
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="exercices_budgetaires"
                            v-model="exercices_budgetaires_id"
                            option-value="annee"
                            option-text="annee"
                            placeholder=""
                          >
                          </model-list-select>
                         
                </td>
                   
                    <td>
                          
                       
 <label
                            >UNITE ADMINISTRATIVE
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="uniteAdministratives"
                            v-model="ua_id"
                            option-value="id"
                            option-text="libelle"
                            placeholder=""
                          >
                          </model-list-select>
                         
                   
                        </td>
 
             
            </tr>
             
        </table>
    <div class="row-fluid" style="margin-top: -20px">
      <div class="span1"></div>
      <div class="span10" style="background-color: transparent; !important;">
        <table class="table table-striped">
        
        </table>
      </div>
    </div>

    <div class="widget-content nopadding" id="printpdf">
    
      

      <div 
        v-for="itemAnnee in afficheAnnee"
        :key="itemAnnee"
      >
        <div>
          <table class="table table-bordered">
            <tr style="margin-left: 50px; font-size: 50px; font-weight: bold;margin: 30px;color:#000;background-color: #FC762F">
<td style="font-size: 20px;">
   EXERCICE:{{ itemAnnee }}
</td>
            </tr>
          </table>
         


            <table class="table table-bordered">
              <thead style="background-color: #FC762F !important">
               
                   <tr>
                    
                     <th style="font-size:14px;font-weight:bold;color:#000;background-color: #e6b637">UNITE ADMINISTRATIVE</th>
                    <th style="font-size:14px;font-weight:bold;color:#000;background-color: #e6b637">MONTANTS DES OP PROVISOIRE</th>
                     <th style="font-size:14px;font-weight:bold;color:#000;background-color: #e6b637">MONTANTS DES OP ANNULATION</th>
                    <th style="font-size:14px;font-weight:bold;color:#000;background-color: #e6b637">MONTANTS DES OP DIRECT</th>
                     <th style="font-size:14px;font-weight:bold;color:#000;background-color: #e6b637">MONTANTS DES OP DEFINITIF</th>
                   
                  </tr>
               
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(type) in afficheParUa" :key="type.id">
                    <td style="font-size:14px;font-weight:bold;color:#000">{{type.libelle}}</td>
                   
                    <td style="text-align:center;font-size:14px;font-weight:bold;color:#000">
                       <router-link :to="{
                          name: 'DetailTableauBordProvisoire',
                          params: { id: type.id },
                          
                        }">
                      {{formatageSomme(parseFloat(MontantsProvisoire(type.id,itemAnnee)))}}
                       </router-link>
                      </td>
                   
                     <td style="text-align:center;font-size:14px;font-weight:bold;color:#000">
                         <router-link :to="{
                          name: 'DetailTableauBordAnnulation',
                          params: { id: type.id },
                          
                        }">
                       {{formatageSomme(parseFloat(MontantsAnnulation(type.id,itemAnnee)))}}
                       </router-link>
                       </td>
                      <td style="text-align:center;font-size:14px;font-weight:bold;color:#000">
                        <router-link :to="{
                          name: 'DetailTableauBordDirect',
                          params: { id: type.id },
                          
                        }">
                        {{formatageSomme(parseFloat(MontantsDirect(type.id,itemAnnee)))}}
                        </router-link>
                      </td>
                       <td style="text-align:center;font-size:14px;font-weight:bold;color:#000">
                         <router-link :to="{
                          name: 'DetailTableauBordDefinitif',
                          params: { id: type.id },
                          
                        }">
                         {{formatageSomme(parseFloat(MontantsDefinitif(type.id,itemAnnee)))}}
                         </router-link>
                       </td>
                    
                </tr>
               <tr>
                       <td style="text-align:center;font-size:14px;font-weight:bold;color:#000;background-color: #e6b637;">TOTAL</td>
                   <td style="text-align:center;font-size:14px;font-weight:bold;color:#000;background-color: #e6b637;">{{formatageSomme(parseFloat(TotalProvisoire))|| 'Non renseigné'}}</td>
                  <td style="text-align:center;font-size:14px;font-weight:bold;color:#000;background-color: #e6b637;">{{formatageSomme(parseFloat(TotalAnnulation))|| 'Non renseigné'}}</td>
                   <td style="text-align:center;font-size:14px;font-weight:bold;color:#000;background-color: #e6b637;">{{formatageSomme(parseFloat(TotalDirect))|| 'Non renseigné'}}</td>
                    <td style="text-align:center;font-size:14px;font-weight:bold;color:#000;background-color: #e6b637;">{{formatageSomme(parseFloat(TotalDefinitif ))|| 'Non renseigné'}}</td>

                  </tr>
              </tbody>
            </table>
          
        </div>
        
      </div>
      <div class="pagination alternate">
                <ul>
                  <li :class="{ disabled: page == 0 }">
                    <a @click.prevent="precedent()" href="#">Précedent</a>
                  </li>
                  <li
                    v-for="(titre, index) in partition(afficheAnnee, size)
                      .length"
                    :key="index"
                    :class="{ active: active_el == index }"
                  >
                    <a @click.prevent="getDataPaginate(index)" href="#">{{
                      index + 1
                    }}</a>
                  </li>
                  <li
                    :class="{
                      disabled:
                        page == partition(afficheAnnee, size).length - 1,
                    }"
                  >
                    <a @click.prevent="suivant()" href="#">Suivant</a>
                  </li>
                </ul>
              </div>
    </div>
    <!-- <fab
      :actions="fabActions"
      @searchMe="filter"
      main-icon="apps"
      bg-color="green"
    ></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "@/Repositories/Repository";
import { partition } from "@/Repositories/Repository";
   import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    ModelListSelect,
  },
  name: "typetext",
  data() {
    return {
      page: 0,
      size: 1,
      active_el: 0,
      fabActions: [
        {
          name: "searchMe",
          icon: "search",
        },
      ],

      json_fields: {
        CODE: "code",
        LIBELLE: "libelle",
      },
      affiche_filtre1: false,
      affiche_filtre: false,
      affiche_boutton_filtre: true,
      
      exercices_budgetaires_id: 0,
      ua_id: 0,
      search: "",
  
    };
  },
  mounted(){
    console.log("hello word")
    // console.log(this.budgetEclate)
    console.log(this.MontantBudgetActuel())
    console.log(this.MontantBudgetExecuté())
  },

  computed: {
     admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
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
      "gettershistoriqueDecisionCfOP",
      "typeMarches",
      "gettersgestionOrdrePaiementAnnulation",
      "gettersgestionOrdrePaiement",
      "gettersDossierAutreDepense",
      "gettersDossierMandat",
      "gettersDossierFacturePiece",
      "typeFactures",
      "gettersDemandeEngagement",
      "gettersnomPieceJustificative",
      "modepaiements",
      "gettersCotationPersonnaliser",
      "typeCandidat",
      "acteDepense",
      "getMarchePersonnaliser",
      "appelOffres",
      "lots",
      "villes",
      "communes",
      "pays",
      "modePassations",
      "procedurePassations",
      "getterDossierCandidats",
      "marches",
      "gettersPersonnaliserRapportJugement",
      "getterOffreFinanciers",
      "gettersOffreTechniques",
      "getterLettreInvitation",
      "getterMandate",
      "getterCojos",
      "conditions",
      "getterAnalyseDossiers",
      "typeAnalyses",
      "getterDemandeAno",
      "documentProcedures",
      "getterAnalyseDMP",
      "getterAnoDMPBailleur",
      "getterObseravtionBailleurs",
      "obseravtionBailleurs",
      "typeActeEffetFinanciers",
      "analyseDossiers",
      "text_juridiques",
      "livrables",
      "selectionner_candidats",
      "getActeEffetFinancierPersonnaliserContrat",
      "acteEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
      "getterMembreCojo",
      "getterProceVerballe",
      "GroupeOrdrePaiementByActivite",
      "GroupeOrdrePaiementByGrandeNature",
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
      "groupeByBailleur"
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
  ListeDEsEntreprise() {
      let vM = this;
      let objet = this.gettersgestionOrdrePaiement;

      if (this.exercices_budgetaires_id != 0 && this.ua_id == 0) {
        objet = this.gettersgestionOrdrePaiement.filter((item) => {
          if (item.exercice == vM.exercices_budgetaires_id) {
            return item;
          }
        });
        return objet;
      }
        if (this.exercices_budgetaires_id == 0 && this.ua_id != 0) {
        objet = this.gettersgestionOrdrePaiement.filter((item) => {
          if (item.unite_administrative_id == vM.ua_id) {
            return item;
          }
        });
          return objet;
      }
   if (this.exercices_budgetaires_id != 0 && this.ua_id != 0) {
        objet = this.gettersgestionOrdrePaiement.filter((item) => {
          if (item.exercice == vM.exercices_budgetaires_id && item.unite_administrative_id == vM.ua_id) {
            return item;
          }
        });
        return objet;
      }
 
      return this.gettersgestionOrdrePaiement;
    },

TotalProvisoire(){

    return this.ListeDEsEntreprise.filter((qtreel) =>qtreel.type_ordre_paiement == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
     
 },

// TotalProvisoire() {
   
//           return this.gettersgestionOrdrePaiement.filter((qtreel) =>  qtreel.type_ordre_paiement == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
     
//     },
TotalAnnulation(){

    return this.ListeDEsEntreprise.filter((qtreel) =>  qtreel.type_ordre_paiement == 3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
     

 },
TotalDirect(){

    return this.ListeDEsEntreprise.filter((qtreel) =>  qtreel.type_ordre_paiement == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
     

 },
   TotalDefinitif(){

    return this.ListeDEsEntreprise.filter((qtreel) =>  qtreel.type_ordre_paiement == 4).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
     

 },






MontantsProvisoire() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement.filter((qtreel) => qtreel.unite_administrative_id == id && qtreel.exercice == id1 && qtreel.type_ordre_paiement == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
        }
      };
    },
MontantsAnnulation() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement.filter((qtreel) => qtreel.unite_administrative_id == id && qtreel.exercice == id1 && qtreel.type_ordre_paiement == 3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
        }
      };
    },
MontantsDirect() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement.filter((qtreel) => qtreel.unite_administrative_id == id && qtreel.exercice == id1 && qtreel.type_ordre_paiement == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
        }
      };
    },
    MontantsDefinitif() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement.filter((qtreel) => qtreel.unite_administrative_id == id && qtreel.exercice == id1 && qtreel.type_ordre_paiement == 4).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
        }
      };
    },
     filtrerUaParTypeProj(){
return this.uniteAdministratives.filter(item=>item.type_ua_id == 7)
    },
     filtrerUaParTypeProj12(){
return this.uniteAdministratives.filter(item=>item.type_ua_id == 7 && item.id == this.ua_id)
    },
    afficheParUa(){
  if(this.ua_id==0){
    return this.filtre_unite_admin
  }
  else{
    return this.filtreParUa
  }
},
    filtreParUa() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj12.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }
      return this.filtrerUaParTypeProj12;
    },
    filtre_unite_admin() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }
      return this.filtrerUaParTypeProj;
    },
    

afficheAnnee(){
  if(this.exercices_budgetaires_id==0){
    return this.afficheAnneEnCours
  }
  else{
    return this.afficheAutreAnnee
  }
},
   afficheAnneEnCours() {
     
           let objet = this.gettersgestionOrdrePaiement;
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.exercice);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
  
    },
    afficheAutreAnnee() {
     
           let objet = this.gettersgestionOrdrePaiement.filter(item=>item.exercice ==this.exercices_budgetaires_id);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.exercice);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
  
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
     
    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

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

    // apercuFacture(id) {
    //   this.$("#validationOpDefinitif").modal({
    //     backdrop: "static",
    //     keyboard: false
    //   });
    //    this.editMandat = this.gettersgestionOrdrePaiement.find(item=>item.id==id);
    // },

    formatageSomme: formatageSomme,

    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>

<style scoped>
.tailgrand {
  width: 65%;
  margin: 0 -30%;
  height: 50%;
}
.tailBtn {
  width: 100%;
}
.modal-body {
  max-height: 85%;
}
</style>
