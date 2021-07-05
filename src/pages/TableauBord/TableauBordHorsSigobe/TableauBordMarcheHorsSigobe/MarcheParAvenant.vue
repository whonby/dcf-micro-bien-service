
<template>
  <div>
 <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">UNITE ADMINISTRATIVE</label>
                <div class="controls">
                  <model-list-select  
              style="border: 1px solid #000"
              class="wide"
              :list="uniteAdministratives"
              v-model="uniteAdmin_id"
              option-value="id"
              option-text="libelle"
              placeholder=""
            >
            </model-list-select>
                </div>
              </div>
            </td>
               
           
            <td></td>
          </tr>

           
        </table>

    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div> 
    
    <div class="widget-content nopadding" id="printpdf">
       <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">
                 AVENANT DES MARCHES HORS SIGOBE</h2>
          </tr>

           
        </table>
    
      <p
        style="
          margin-left: 30px;
          font-size: 14px;
          font-weight: bold;
          text-decoration: underline;
        "
      >
        EXERCICE: {{ afficheAnnee }}
      </p>

      <div v-for="GroupeSection in partition(afficheUa, size)[page]" :key="GroupeSection.id">
           <table class="table table-bordered">
              <thead style="background-color: #ff9c1a !important">
                  
                   
                 <tr>
                   <th></th>

                   <th></th>
<th></th>
                 
                 <th></th>
                   <th>
                   NUMERO D'AVENANT {{afficheAnnee}}
                  </th>
                   
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      text-align: center;
                      color: #000;
                      background-color: #fbb203 !important;
                      
                    "
                  >
                OBJET AVENANT  {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                      width :8%
                    "
                  >
                  DATE AVENANT {{afficheAnnee}}
                  </th>
             

                     <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    TAUX AVENANT   {{afficheAnnee}}
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                    MONTANT AVENANT  {{afficheAnnee}}
                  </th>
                 
                </tr>
              </thead>
       <tbody>
                <tr>
                  <td>
                    <button @click="ShowMyUa(GroupeSection.id)">
                     <i class="icon-eye-open"></i> </button>
                  </td>
                  
         
                <td style="" v-bind:class="recupereIDactivite==GroupeSection.id ? 'graybg' : 'whitebg'"  colspan="5">{{libelleUniteAdministrative(GroupeSection.id)}}</td>
                
                
               
                <td style="" v-bind:class="recupereIDactivite==GroupeSection.id ? 'graybg' : 'whitebg'" colspan="4">
                    <model-list-select  v-show="recupereIDactivite==GroupeSection.id "
              style="border: 1px solid #000"
              class="wide"
              :list="marches"
              v-model="marcheLot_id"
              option-value="id"
              option-text="objet"
              placeholder=""
            >
            </model-list-select>
                </td>
                         
                </tr>
              </tbody>  
              
  <tbody v-show="recupereIDactivite==GroupeSection.id"
               v-for="GroupeUa in GroupeTypeMarcheParUa(GroupeSection.id)" :key="GroupeUa">

                <tr>
                  <td></td>
                  <td></td>
            
                  <td>
                    <button @click="ShowMyLigne(GroupeUa)">
                     <i class="icon-eye-open"></i> </button>
                  </td>
                  
                  <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'" colspan="3">
                    {{ libelleMarche(GroupeUa) }}</td>

              
   
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"  v-show="recupereIDSection==GroupeUa "></td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'" colspan="9" >

                   
               </td>
               <!-- <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td>
<td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td>
              <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td> -->
               <!-- <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td> -->
                
                
                
                </tr>

                
                <tr v-show="recupereIDSection==GroupeUa"
                v-for="GroupeLigne in listeDesmARCHEpARaVENANT(GroupeUa)" :key="GroupeLigne.id">
                  <td></td>
                  

                  <td></td>
                  
 <td></td>
 <td> <button >
                     <i class="icon-arrow-right"></i> </button></td>
<td style="text-align:left">{{NumeroAvenant(GroupeLigne.id)}}</td>
 <td style="text-align:left">{{ObjetAvenant(GroupeLigne.id)}}</td>
 <td style="text-align:right">{{formaterDate(DateAvenant(GroupeLigne.id))}}</td>
 <td style="text-align:right">{{TauxAvenant(GroupeLigne.id)}} %</td>
 
 <td style="text-align:right">{{formatageSommeSansFCFA(parseFloat(MonatntAvenant(GroupeLigne.id)))}}</td>
                </tr>
  </tbody>
              
            </table>
<br>
              <!-- <table class="table table-bordered" v-show="recupereIDactivite==GroupeSection.id">
              
      
              

            
            </table> -->
      </div>
       
          <div class="pagination alternate">
      <ul>
        <li :class="{ disabled: page == 0 }">
          <a @click.prevent="precedent()" href="#">Précedent</a>
        </li>
        <li
          v-for="(titre, index) in partition(afficheUa, size).length"
          :key="index"
          :class="{ active: active_el == index }"
        >
          <a @click.prevent="getDataPaginate(index)" href="#">{{
            index + 1
          }}</a>
        </li>
        <li
          :class="{ disabled: page == partition(afficheUa, size).length - 1 }"
        >
          <a @click.prevent="suivant()" href="#">Suivant</a>
        </li>
      </ul>
    </div>
    </div>

    


        
    
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSommeSansFCFA,formatageSomme } from "@/Repositories/Repository";
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
      size:3,
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


    inputLigne:false,
editMandat:{},
 uniteAdmin_id:0,
      exercices_budgetaires_id:0,
      inputLigne1:0,
    marcheLot_id:0,
      search: "",
      verifShome:0,
      recupereIDactivite:0,
      recupereIDSection:0,
      source_financement_id1:0
    };
  },
  mounted(){
   
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
    "avenants"
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
     admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,


NumeroAvenant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_avenant
      }
      return 0
        }
      };
    },


ObjetAvenant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet_avenant
      }
      return 0
        }
      };
    },
    

DateAvenant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.date_avenant
      }
      return 0
        }
      };
    },
    
TauxAvenant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.taux_avenant
      }
      return 0
        }
      };
    },
    MonatntAvenant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.avenants.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_avenant
      }
      return 0
        }
      };
    },
listeDesmARCHEpARaVENANT(){
    

          return (id) => {
        if (id != null && id != "") {
           return  this.avenants.filter(qtreel => qtreel.marche_id == id  );
        }  
      };
    
},



affichePartBailleur() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id);

     
        }
      };
    },


MontantExecuteMarche(){
        return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.marche_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==8 ||
                qtreel.marche_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==9 || qtreel.marche_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==4 && qtreel.decision_cf==8 || qtreel.marche_id == id &&
                qtreel.exercice == this.afficheAnnee && qtreel.type_ordre_paiement==4 && qtreel.decision_cf==9
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
BailleurParMarche() {
      return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.personnaliseGetterMarcheBailleur.filter(item=>item.marche_id == id);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.bailleur_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    },

GroupeTypeMarcheParUa() {
    if(this.marcheLot_id!=0){
        return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.marches.filter(item=>item.unite_administrative_id == id && item.exo_id==this.afficheAnnee && item.parent_id != null && item.attribue == 2 && item.id == this.marcheLot_id);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    }else{
         return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.marches.filter(item=>item.unite_administrative_id == id && item.exo_id==this.afficheAnnee && item.parent_id != null && item.attribue == 2);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
        }
        
        
      };
    }
      
    },

ListeMarcheParTypeMarche() {
    if(this.marcheLot_id!=0){

          return (id,id1) => {
        if (id != null && id != "" ,id1 != null && id1 != "") {
           return  this.marches.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_marche_id==id1 
                                     && qtreel.parent_id != null && qtreel.attribue==2
                                     && qtreel.id==this.marcheLot_id);
        }  
      };
    }else{
         return (id,id1) => {
        if (id != null && id != "" ,id1 != null && id1 != "") {
           return  this.marches.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_marche_id==id1 && qtreel.parent_id != null && qtreel.attribue==2);

        }
        
      };
    }
     
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
 afficheAnnee() {
      if (this.exercices_budgetaires_id == 0) {
        return this.anneeAmort;
      } else {
        return this.exercices_budgetaires_id;
      }
    },
     libelleMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet
      }
      return 0
        }
      };
    },
    libelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
 
   idParentMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.parent_id
      }
      return 0
        }
      };
    },
    ligneEconomiqueMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.economique_id
      }
      return 0
        }
      };
    },
     
    MontantBudgetaire() {
      return (id,id1) => {
        if (id != null && id != "",id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.uniteadministrative_id == id &&
                qtreel.ligneeconomique_id == id1 && qtreel.budget_active==1
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    ImputationMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation
      }
      return 0
        }
      };
    },
   
    DureMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.duree
      }
      return 0
        }
      };
    },
    MontantReelMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act
      }
      return 0
        }
      };
    },
     montantAvenantParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.avenants.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.montant_avenant)
                        },valInite);
                    }
                }
            },
           TauxAvenantParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.avenants.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.taux)
                        },valInite);
                    }
                }
            },
             NombreAvenant() {
      return id => {
        if (id != null && id != "") {
           return this.avenants.filter(qtreel => qtreel.marche_id == id).length;

      
        }
      };
    },
     EntrepriseMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.entreprise_id
      }
      return 0
        }
      };
    },
    LibelleEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale
      }
      return 0
        }
      };
    },
     NumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche
      }
      return 0
        }
      };
    },
     NumeroOrdreMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_lot
      }
      return 0
        }
      };
    },
 filtrerUaParTypeProj(){
return this.uniteAdministratives.filter(item=>item.type_ua_id == 7)
    },
    afficheUa(){
  if(this.uniteAdmin_id==0){
    return this.filtre_unite_admin
  }
  else{
    return this.filtre_unite
  }
},
     filtre_unite() {
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
        return colect.filter(item2=>item2.id==this.uniteAdmin_id);
      }
      return this.filtrerUaParTypeProj.filter(item2=>item2.id==this.uniteAdmin_id);
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



  },

  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
      "modifierGestionOrdrePaiementAnnulat",
      "supprimerGestionOrdrePaiement",
      "ajouterHistoriqueDecisionOp",
      "modifierHistoriqueDecisionOp",
    ]),
 percuFacture(id,id1) {
      this.$("#validationOpDefinitif1").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandat = this.ListeMarcheParTypeMarche(id,id1).find((item) => item.type_marche_id == (id,id1));
  
  },





  
TauxExecution(id) {
      if (
        this.MontantExecuteMarche(id) == 0 &&
        this.AfficheMontantgbobalMarche(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          ((parseInt(this.MontantExecuteMarche(id)) /
            parseInt(this.AfficheMontantgbobalMarche(id)))*100
        ).toFixed(0));
      }
    },
     DisponibleMarche(id){
      return (parseFloat(this.AfficheMontantgbobalMarche(id)) - parseFloat(this.MontantExecuteMarche(id)))
  },
  AfficheMontantgbobalMarche(id){
      return (parseFloat(this.MontantReelMarche(id)) + parseFloat(this.montantAvenantParMarche(id)))
  },
NombreBailler(id){
    return this.BailleurParMarche(id).length
},
ShowMyLigne(id){
      if(this.recupereIDSection==0){
         this.recupereIDSection=id;
      }else if(this.recupereIDSection!=0 && this.recupereIDSection !=id){
        this.recupereIDSection=0;
        this.recupereIDSection=id;
      }
      else{
         this.recupereIDSection=0;
      }
       
    },
ShowMyUa(id){
      if(this.recupereIDactivite==0){
         this.recupereIDactivite=id;
      }else if(this.recupereIDactivite!=0 && this.recupereIDactivite !=id){
        this.recupereIDactivite=0;
        this.recupereIDactivite=id;
      }
      else{
         this.recupereIDactivite=0;
      }
       
    },



   
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

    

    formatageSommeSansFCFA: formatageSommeSansFCFA,
formatageSomme:formatageSomme,
    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>

<style scoped>
.taille{
width: 95%;
}

.whitebg {
  background: #98FB98 !important;
  font-weight: bold;
  color: black;
  font-size: 15px;
}
.graybg {
  background: rgb(6, 184, 6) !important;
  color: white;
  font-size: 15px;
  font-weight: bold;
}

.whitebg1 {
  background: #829ed3 !important;
  font-weight: bold;
  color: black;
  font-size: 15px;
}
.graybg1 {
  background: rgb(28, 13, 158) !important;
  color: white;
  font-size: 15px;
  font-weight: bold;
}



.tailgrand {
  width: 90%;
  margin: 0 -45%;
  height: 50%;
}

.modal-body {
  max-height: 85%;
}
th{
font-size: 13px !important;
                      font-weight: bold !important;
                      color: #000 !important;
                      text-align: center !important;
                      background-color: #fbb203 !important;
}
</style>
