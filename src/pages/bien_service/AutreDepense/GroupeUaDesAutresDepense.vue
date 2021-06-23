
<template>
  <div>
 <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
        <h2 style="text-align:center;font-size:25px">  VOIR LES AUTRES DEPENSES PAR UNITE ADMINISTRATIVE</h2>
        
              <div class="row-fluid" style="margin-top: -20px">
            <div class="span1"></div>
            <div
              class="span10"
              style="background-color: transparent; !important;"
              >
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <td colspan="">
                      <br />
                      <!-- <div  align="right" style="cursor:pointer;">
                <button class="btn btn-danger" @click.prevent="filter()" style="font-weight:bolder;color:#fff;font-size:20px"><i class="icon icon-plus">Fermer</i></button>
    
                </div>  -->

                      <label
                        style="
                          color: #000;
                          font-size: 14px;
                          font-weight: bolder;
                        "
                        >UNITE ADMINISTRATIVE<a href="#" style="color: red"></a>
                      </label>
                      <model-list-select
                        style="background-color: #fff; border: 2px solid #000"
                        class="wide"
                        :list="uniteAdministratives"
                        v-model="uniteAdministrative_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="TOUTES LES UNITES ADMINISTRATIVES"
                      >
                      </model-list-select>
                    </td>
                  </tr>
                </tbody>
              </table>
               <div class="pagination alternate">
                <ul>
                  <li :class="{ disabled: page == 0 }">
                    <a @click.prevent="precedent()" href="#">Précédent</a>
                  </li>
                  <li
                    v-for="(titre, index) in partition(arrayExerciceDecompteBienService, size)
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
                        page == partition(arrayExerciceDecompteBienService, size).length - 1,
                    }"
                  >
                    <a @click.prevent="suivant()" href="#">Suivant</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
              
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
                <h5>Liste Unites administratives</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>
            <div class="widget-content nopadding">              
              <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                   <!-- <th style="width:10%;font-size:12px" >Exercice</th> -->
                     <th style="width:20%;font-size:12px" >Code UA</th>
                    <th style="width:50%;font-size:12px" >Unité Administrative</th>
                    <!-- <th style="width:20%;font-size:12px" >Montant Reçu</th>  -->
                    <th style="width:10%;" colspan="" >Action</th>                
                  </tr>
                </thead>
                <tbody>
                    <tr class="odd gradeX" v-for="(type) in arrayExerciceDecompteBienService" :key="type">
                    <!-- <td style="font-size:12px;color:#000;text-align:center">{{type[0].annebudgetaire || 'Non renseigné'}}</td> -->
                    <td style="font-size:16px;color:#000;text-align:center">{{libelleServiceGestionnaire(idServiceGestionnaire(type)) || 'Non renseigné'}}</td>
                   <td style="font-size:16px;color:#000;text-align:center">{{ListeDEsuniteAdministrative(type) || 'Non renseigné'}}</td>                 
                   <td >
                   <router-link :to="{ name: 'GestionAutresDepense', params: { id: type }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="   icon-eye-open" style="font-weight: bold;">Voire Autres Depenses</i></span>
                   </router-link> 
                    </td>
                  </tr>     
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="ajouterBudgetEclarter" main-icon="apps" bg-color="green"></fab>
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="ajouterBudgetEclarter()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button> -->
 <notifications />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>

import { mapGetters, mapActions } from "vuex";
import { formatageSommeSansFCFA } from "@/Repositories/Repository";
import {noDCfNoAdmin} from "@/Repositories/Auth"
import { partition } from "@/Repositories/Repository";
  import {  ModelListSelect } from 'vue-search-select'
  //   import 'vue-search-select/dist/VueSearchSelect.css'
// import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
 components:{
   ModelListSelect,
 },
  name:'typetext',
  data() {
    return {
      page: 0,
      size: 100,
      active_el:0,
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
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      uniteAdministrative_id: 0,
      formData: {
        
      },
      condition:'',
      editAutreDepense:{},
      editBudgetEclate: {
        
      },
      uniqu:'',
      search: ""
    };
  },
  
  created(){
      this.condition= this.gettersgestionOrdrePaiement.mois_paiement
      console.log(this.arrayExerciceDecompteBienService)
      console.log(this.uniteAdministrative_id)

      if(this.uniteAdministrative_id != 0){
        console.log(this.uniteAdministrative_id)
      }
  },
  computed: {
        ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives",
      "jointureUaChapitreSection",
      "budgetEclate",
      "GroupeUaReceptrice",
      "transferts",
      "groupeUniteAdministrativeBudgetEclate",
      "groupeUaSousBudget"
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("bienService", ["gettersgestionOrdrePaiement","GroupeUniteAdministrativeMarche",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "services_gestionnaires",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    noDCfNoAdmin: noDCfNoAdmin,
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire","structures_budgetaires"]),
 
 ...mapGetters('personnelUA', ['all_acteur_depense']),
 
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
   
afficheGroupeUaParMarche(){
    return this.marches.filter(item=>item.sib==1)
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
    


  ListeDEsuniteAdministrative() {
    return (id)=>{
      if(id != ''&& id != null){
        if(this.uniteAdministrative_id != 0){
            const affich = this.uniteAdministratives.find(tem => tem.id == id)
            if(affich){
              return affich.libelle;
            }
          }
      }
     }
      // let vM = this;
      // if (this.uniteAdministrative_id != 0) {
      //   return this.uniteAdministratives.filter((item) => {
      //     if (item.id == vM.uniteAdministrative_id) {
      //       return item.libelle;
      //     }
      //   });
        
      // }
      // return 0;
    },
     uniteAdministratives() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.jointureUaChapitreSection.filter((item) => {
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
      return this.jointureUaChapitreSection;
    },
arrayExerciceDecompteBienService() {
      //return (id) => {
        let vm=this
        vm.unique=[];
        if(this.uniteAdministrative_id !=0){
             let objet = this.gettersgestionOrdrePaiement.filter(item=>item.autre_depense_id != null && item.unite_administrative_id== this.uniteAdministrative_id);
            let array_exercie = [];

        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.unite_administrative_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log("hello unique");
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return []
        }else{
          let objet = this.gettersgestionOrdrePaiement.filter(item=>item.autre_depense_id != null);
          let array_exercie = [];

        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.unite_administrative_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log("hello unique");
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return []
        }
    },

    idUniteAdministrative() {
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
    idServiceGestionnaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.servicegest_id
      }
      return 0
        }
      };
    },
    libelleServiceGestionnaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services_gestionnaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code
      }
      return 0
        }
      };
    },
},
  methods: {
     ...mapActions("uniteadministrative", [
     
      "ajouterBudgetEclate",
      "modifierBudgetEclate",
      "supprimerBudgetEclate",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
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
    pagePrecedent(){
                window.history.back()
            },
    ModificationBudgetaire(){
                this.$router.push({ name: 'ModificationBudgetaire' })
            },
            SOUSbUDGET(){
                this.$router.push({ name: 'sousBudget' })
            },
  ajouterBudgetEclarter(){
                this.$router.push({ name: 'AjouterBudgetEclater' })
            },
  }
};
</script>
<style scoped>

.tailgrand12{
  width: 90%;
  margin: 0 -45%;
 
}

</style>
