
<template>
  <div>
   
<div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
        <br/>
    <!-- <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div>  -->
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
    <div class="widget-content nopadding" id="printpdf">
       <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">
                 ORDRE DE PAIEMENT PAR UA</h2>
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
        EXERCICE: {{ marcheid }}
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
                   NUMERO OP {{marcheid}}
                    <button @click="afficheRechercheNumeroOp">
                     <i class=" icon-search"></i> 
                      
                    </button>
                   <model-list-select  v-show="inputLigneLibelle == true "
              style="border: 1px solid #000"
              class="wide"
              :list="afficheOpRecherche"
              v-model="numero_op"
              option-value="id"
              option-text="numero_ordre_paiement"
              placeholder=""
            >
            </model-list-select>
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
                OBJET OP {{marcheid}}
                 <button @click="afficheRechercheObjetOp">
                     <i class=" icon-search"></i> 
                      
                    </button>
                <model-list-select  v-show="inputLigneObjet == true"
              style="border: 1px solid #000"
              class="wide"
              :list="afficheOpRecherche"
              v-model="objet_op"
              option-value="id"
              option-text="odjet_autre_depense"
              placeholder=""
            >
            </model-list-select>
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
                  MONTANT ENGAGE {{marcheid}}
                   <button @click="afficheRechercheMontant">
                     <i class=" icon-search"></i> 
                      
                    </button>
                  <model-list-select  v-show="inputLigneMontant == true"
              style="border: 1px solid #000"
              class="wide"
              :list="afficheOpRecherche"
              v-model="montant_op"
              option-value="id"
              option-text="montant_ordre_paiement"
              placeholder=""
            >
            </model-list-select>
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
                    DECISION CF  {{marcheid}}
                    <button @click="afficheRechercheDecision">
                     <i class=" icon-search"></i> 
                      
                    </button>
                     <model-list-select v-show="inputLigneDecision == true"
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="options2"
                  v-model="Decision_op"
                  option-value="id"
                  option-text="libelle"
                >
                </model-list-select>
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
                    DETAIL OP  {{marcheid}}
                  </th>
                   <th v-show="nombreSousBudget(GroupeSection.id)!=0"
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;
                    "
                  >
                   SOUS BUDGET {{marcheid}}
                    <button @click="afficheRechercheSousBudget">
                     <i class=" icon-search"></i> 
                      
                    </button>
                    <select v-model="sousbudget_id" class="" v-show="inputLigneSousBudget == true">
                    <option value="0"></option>
                    <option
                      v-for="varText in LibelleSousBudget(GroupeSection.id)"
                      :key="varText.id"
                      :value="varText.id"
                    >
                      {{ varText.activite_enfant }}
                    </option>
                  </select>
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
                   ACTION
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
                
                
               
                <td style="" v-bind:class="recupereIDactivite==GroupeSection.id ? 'graybg' : 'whitebg'" colspan="">
                   
                </td>
                     <td style="" v-bind:class="recupereIDactivite==GroupeSection.id ? 'graybg' : 'whitebg'" colspan="">
                   
                </td>
                <td style="" v-bind:class="recupereIDactivite==GroupeSection.id ? 'graybg' : 'whitebg'" colspan="">
                   
                </td>
                <td style=""  colspan="" v-show="nombreSousBudget(GroupeSection.id)!=0">
                   <button
                       
                        class="btn btn-info taille"
                        
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >{{nombreSousBudget(GroupeSection.id)}}</span
                        >
                      </button>
                </td>
                <td style="" v-bind:class="recupereIDactivite==GroupeSection.id ? 'graybg' : 'whitebg'" colspan="">
                   
                </td>
                   
                </tr>
              </tbody>  
              <!-- <tbody v-show="recupereIDactivite==GroupeSection.id && idUaBudgetEclate(GroupeSection.id) != 0" 
               v-for="GroupeSousBudegt in groupeParSousBudget(GroupeSection.id)" :key="GroupeSousBudegt">

                <tr>
                  <td></td>
                  <td></td>
            
                  <td>
                    <button @click="ShowMyLigne(GroupeSousBudegt)">
                     <i class="icon-eye-open"></i> </button>
                  </td>
                  
                  <td v-bind:class="recupereIDSection==GroupeSousBudegt ? 'graybg1' : 'whitebg1'" colspan="3">
                    {{ LibelleSousBudget(GroupeSousBudegt) }}</td>

              
   
               <td v-bind:class="recupereIDSection==GroupeSousBudegt ? 'graybg1' : 'whitebg1'"></td>
               <td v-bind:class="recupereIDSection==GroupeSousBudegt ? 'graybg1' : 'whitebg1'"  v-show="recupereIDSection==GroupeSousBudegt "></td>
               <td v-bind:class="recupereIDSection==GroupeSousBudegt ? 'graybg1' : 'whitebg1'" colspan="9" >

                   
               </td>
             
                
                </tr>

            
  </tbody> -->

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
                    {{ afficheLibelleTypeOp(GroupeUa) }}</td>

              
   
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"></td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'"  v-show="recupereIDSection==GroupeUa "></td>
               <td v-bind:class="recupereIDSection==GroupeUa ? 'graybg1' : 'whitebg1'" colspan="9" >

                   
               </td>
              
                
                
                </tr>

                
                <tr v-show="recupereIDSection==GroupeUa"
                v-for="GroupeLigne in listeDesOrdrePaiement(GroupeSection.id,GroupeUa)" :key="GroupeLigne.id">
                  <td></td>
                  

                  <td></td>
                  
 <td></td>
 <td> <button >
                     <i class="icon-arrow-right"></i> </button></td>
<td style="text-align:" @dblclick="afficherModalModifierTitre(GroupeLigne.id)">{{GroupeLigne.numero_ordre_paiement}}</td>
 <td style="text-align:" @dblclick="afficherModalModifierTitre(GroupeLigne.id)">{{GroupeLigne.odjet_autre_depense}}</td>
 <td style="text-align:" @dblclick="afficherModalModifierTitre(GroupeLigne.id)">{{ formatageSommeSansFCFA(parseFloat(GroupeLigne.montant_ordre_paiement))}}</td>
 <td style="text-align:">
    
                       <router-link v-if="GroupeLigne.decision_cf == 8"
                        :to="{
                          name: 'formulaireDecision',
                          params: { id: GroupeLigne.id },
                        }"
                        class="btn btn-success tailBtn"
                        title="Editer Fiche"
                        style="width: 80%"
                      >
                        <span
                         title=""
                          class=""
                           style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Visé</span
                        >
                      </router-link>
                      <router-link v-else-if="GroupeLigne.decision_cf == 2"
                        :to="{
                          name: 'formulaireDecision',
                          params: { id: GroupeLigne.id },
                        }"
                        class="btn btn-danger tailBtn"
                        title="Editer Fiche"
                        style="width: 80%"
                      >
                        <span
                         title=""
                          class=""
                           style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Différé</span
                        >
                      </router-link>
                       <router-link v-else-if="GroupeLigne.decision_cf == 3"
                        :to="{
                          name: 'formulaireDecision',
                          params: { id: GroupeLigne.id },
                        }"
                        class="btn btn-danger tailBtn"
                        title="Editer Fiche"
                        style="width: 80%"
                      >
                        <span
                         title=""
                          class=""
                           style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Réjeté</span
                        >
                      </router-link>
                      <!-- <button
                        v-else-if="GroupeLigne.decision_cf == 9"
                        class="btn btn-success tailBtn"
                        @click="apercuFacture0(GroupeSection.id,GroupeUa)"
                      >
                        <span
                          title="Visé avec observation"
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Visé O</span
                        >
                      </button> -->
                      <router-link v-else-if="GroupeLigne.decision_cf == 9"
                        :to="{
                          name: 'formulaireDecision',
                          params: { id: GroupeLigne.id },
                        }"
                        class="btn btn-success tailBtn"
                        title="Editer Fiche"
                        style="width: 80%"
                      >
                        <span
                         title="Visé avec observation"
                          class=""
                           style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Visé O</span
                        >
                      </router-link>
                        <router-link v-else
                        :to="{
                          name: 'formulaireDecision',
                          params: { id: GroupeLigne.id },
                        }"
                        class="btn btn-info tailBtn"
                        title="Editer Fiche"
                        style="width: 80%"
                      >
                        <span
                          class=""
                           style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Attente</span
                        >
                      </router-link>
 </td>
 <td @dblclick="afficherModalModifierTitre(GroupeLigne.id)" colspan="" v-if="nombreSousBudget(GroupeSection.id)==0">
                      <router-link
                        :to="{
                          name: 'VoirDetailAutreFiche',
                          params: { id: GroupeLigne.id },
                        }"
                        class="btn btn"
                        title="Editer Fiche"
                        style="width: 80%"
                      >
                        <span
                          class=""
                          style="
                            font-size: 20px;
                            font-weight: bold;
                            color: #000;
                          "
                          ><i class="icon-eye-open"></i> Voir</span
                        >
                      </router-link>
                    </td>
 
                    <td @dblclick="afficherModalModifierTitre(GroupeLigne.id)" colspan="" v-else-if="nombreSousBudget(GroupeSection.id)!=0">
                      <router-link
                        :to="{
                          name: 'VoirDetailAutreFiche',
                          params: { id: GroupeLigne.id },
                        }"
                        class="btn btn"
                        title="Editer Fiche"
                        style="width: 80%"
                      >
                        <span
                          class=""
                          style="
                            font-size: 20px;
                            font-weight: bold;
                            color: #000;
                          "
                          ><i class="icon-eye-open"></i> Voir</span
                        >
                      </router-link>
                    </td>
                   <td style="text-align:left" v-if="nombreSousBudget(GroupeSection.id)!=0">{{libelleSousBudget(GroupeLigne.sous_budget_id)}}</td>
 <td style="text-align:left">
   <button
                        class="btn btn-danger"
                        @click="supprimerGestionOrdrePaiement(GroupeLigne.id)"
                      >
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                      </button>
 </td>
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
      size:5,
      active_el: 0,
      fabActions: [
        {
          name: "searchMe",
          icon: "search",
        },
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
      source_financement_id1:0,
      numero_op:0,
      objet_op:0,
      montant_op:0,
     inputLigneLibelle:false,
     inputLigneObjet:false,
     inputLigneDecision:false,
     inputLigneSousBudget:false,
     inputLigneMontant:false,
     Decision_op:1,
     sousbudget_id:0
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
     admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
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
      return (id) => {
        if (id != null && id != "") {
          return this.plans_Decision.filter((element) => element.parent == id);
        }
      };
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

afficheOpRecherche(){
  return this.gettersgestionOrdrePaiement.filter(item=>item.exercice==this.marcheid)
},


LibelleSousBudget() {
      return id => {
        if (id != null && id != "") {
           return this.getSousBudget.filter(qtreel => qtreel.unite_administrative_id == id);

      
        }
      };
    },

    //   LibelleSousBudget() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.getSousBudget.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.activite_enfant
    //   }
    //   return 0
    //     }
    //   };
    // },
libelleSousBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_enfant
      }
      return 0
        }
      };
    },
nombreSousBudget() {
      return id => {
        if (id != null && id != "") {
           return this.groupeParSousBudgetDansOp.filter(qtreel => qtreel[0].unite_administrative_id == id && qtreel[0].sous_budget_id !=0 && qtreel[0].exercice == this.marcheid).length;

      
        }
      };
    },



listeDesOrdrePaiement(){
    if(this.numero_op != 0){
 return (id2,id1) => {
        if (id2 != null && id2 != "" && id1 != null && id1 != "") {
           return  this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id2  && qtreel.type_ordre_paiement == id1 && qtreel.exercice==this.marcheid && qtreel.id==this.numero_op);
        }  
      };
    }else if(this.objet_op !=0){
 return (id2,id1) => {
        if (id2 != null && id2 != "" && id1 != null && id1 != "") {
           return  this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id2  && qtreel.type_ordre_paiement == id1 && qtreel.exercice==this.marcheid && qtreel.id==this.objet_op);
        }  
      };
    }else if(this.montant_op != 0){
      return (id2,id1) => {
        if (id2 != null && id2 != "" && id1 != null && id1 != "") {
           return  this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id2  && qtreel.type_ordre_paiement == id1 && qtreel.exercice==this.marcheid && qtreel.id==this.montant_op);
        }  
      };
    }else if(this.Decision_op !=1 ){
      return (id2,id1) => {
        if (id2 != null && id2 != "" && id1 != null && id1 != "") {
           return  this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id2  && qtreel.type_ordre_paiement == id1 && qtreel.exercice==this.marcheid && qtreel.decision_cf==this.Decision_op );
        }  
      };
    }else if(this.sousbudget_id!=0){
       return (id2,id1) => {
        if (id2 != null && id2 != "" && id1 != null && id1 != "") {
           return  this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id2  && qtreel.type_ordre_paiement == id1 && qtreel.exercice==this.marcheid && qtreel.sous_budget_id==this.sousbudget_id );
        }  
      };
    }else{
       return (id2,id1) => {
        if (id2 != null && id2 != "" && id1 != null && id1 != "") {
           return  this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id2  && qtreel.type_ordre_paiement == id1 && qtreel.exercice==this.marcheid);
        }  
      };
    }

         
    
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

groupeParSousBudget(){
      
return (id) => {
      
        if(id !=0 && id !=""){
          let objet = this.gettersgestionOrdrePaiement.filter(item=>item.unite_administrative_id == id && item.exercice==this.marcheid);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.sous_budget_id);
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
          let objet = this.gettersgestionOrdrePaiement.filter(item=>item.unite_administrative_id == id && item.exercice==this.marcheid && item.id == this.marcheLot_id);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_ordre_paiement);
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
            let objet = this.gettersgestionOrdrePaiement.filter(item=>item.unite_administrative_id == id && item.exercice==this.marcheid );
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_ordre_paiement);
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
created() {
    this.marcheid = this.$route.params.id;
    this.detailOp1 = this.gettersgestionOrdrePaiement.find(
      (idmarche) => idmarche.id == this.$route.params.id
    );
  },
  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
      "modifierGestionOrdrePaiementAnnulat",
      "supprimerGestionOrdrePaiement",
      "ajouterHistoriqueDecisionOp",
      "modifierHistoriqueDecisionOp",
    ]),
    pagePrecedent(){
                window.history.back()
            },
    afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModificationOrdrePaiement/" + id
      });
    },
apercuFacture0(id2,id1) {
      this.$("#validationOpDefinitif1").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandat = this.listeDesOrdrePaiement(id2,id1).find(
        (item) => item.id == (id1)
      );
    },
afficheLibelleTypeOp(id){
if(id==1){
  return "OP DIRECT"
}else if(id==2){
  return "OP PROVISOIRE"
}else if(id==3){
  return "OP ANNULATION"
}else if(id==4){
return "OP DEFINITIF"
}

},
// nombreSousBudget(id){
//   return this.groupeParSousBudgetDansOp(id).filter(item=>item[0].sous_budget_id != 0).length
// },

 percuFacture(id,id1) {
      this.$("#validationOpDefinitif1").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandat = this.ListeMarcheParTypeMarche(id,id1).find((item) => item.type_marche_id == (id,id1));
  
  },
  afficheRechercheSousBudget(){
      if(this.inputLigneSousBudget == false){
        this.inputLigneSousBudget = true
      }else{
        this.inputLigneSousBudget = false
        this.sousbudget_id=0;
        
      }

 },
  afficheRechercheDecision(){
      if(this.inputLigneDecision == false){
        this.inputLigneDecision = true
      }else{
        this.inputLigneDecision = false
        this.Decision_op=0;
        
      }

 },
afficheRechercheMontant(){
      if(this.inputLigneMontant == false){
        this.inputLigneMontant = true
      }else{
        this.inputLigneMontant = false
        this.montant_op=0;
        
      }

 },
afficheRechercheObjetOp(){
      if(this.inputLigneObjet == false){
        this.inputLigneObjet = true
      }else{
        this.inputLigneObjet = false
        this.objet_op=0;
        
      }

 },


afficheRechercheNumeroOp(){
      if(this.inputLigneLibelle == false){
        this.inputLigneLibelle = true
      }else{
        this.inputLigneLibelle = false
        this.numero_op=0;
        
      }

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
