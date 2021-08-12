
<template>
  <div>
 <!-- <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div> -->
    
          
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste type texte"
            :data="BudgetEchateParUa"
            name="Liste type texte"
            worksheet="Liste type texte"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
               
                            
                            
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
                            <h5>Listes Unites administratives</h5>
                          
                           
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
                            <tr class="odd gradeX" v-for="(type) in afficheGroupeUaParMarche" :key="type.id">
                    <!-- <td style="font-size:12px;color:#000;text-align:center">{{type[0].annebudgetaire || 'Non renseigné'}}</td> -->
                      <td style="font-size:16px;color:#000;text-align:center">{{libelleServiceGestionnaire(idServiceGestionnaire(type[0].unite_administrative_id)) || 'Non renseigné'}}</td>
                   <td style="font-size:16px;color:#000;text-align:center">{{idUniteAdministrative(type[0].unite_administrative_id) || 'Non renseigné'}}</td>
                   
                   <td v-if="type[0].unite_zone == 0">
                      <router-link :to="{ name: 'listeMarcheBienEtServiceHS', params: { id: type[0].unite_administrative_id }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="   icon-eye-open" style="font-weight: bold;"> Voir Marche</i></span>
                   </router-link> 
                    </td>
                    <td v-else-if="type[0].unite_zone != 0">
                      <router-link :to="{ name: 'listeSousBudgetMarcheExecution', params: { id: type[0].unite_administrative_id }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="icon-reorder" style="font-weight: bold;"> Voir Sous Budget</i></span>
                   </router-link> 
                    </td>
                     <td v-else style="background-color:lightblue"></td>
                    <!-- <td style="font-size:12px;color:#000;text-align:center">{{0 || 'Non renseigné'}}</td> -->
                    <!-- <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclate(type[0].id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td> -->
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
<notifications  />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>

import { mapGetters, mapActions } from "vuex";

import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
  // import {  ModelListSelect } from 'vue-search-select'
  //   import 'vue-search-select/dist/VueSearchSelect.css'
// import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
 
  name:'typetext',
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
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        
      },
      editBudgetEclate: {
        
      },
      search: ""
    };
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
    ...mapGetters("bienService", ["GroupeUniteAdministrativeMarche",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
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
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire","structures_budgetaires"]),
 
 ...mapGetters('personnelUA', ['all_acteur_depense']),
 
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),


    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,
 
  afficheNomUtilisateur(){
      let objLinea = localStorage.getItem("Users");
      let objJson = JSON.parse(objLinea);
      return objJson.id

},

afficheGroupeUaParMarche(){
   if (this.noDCfNoAdmin) {
     return this.GroupeUniteAdministrativeMarche.filter((item)=>{
       this.getterUniteAdministrativeByUser.find((row) => row.unite_administrative_id == item[0].unite_administrative_id
       && item[0].sib==1);
     });
   }else{
     return this.GroupeUniteAdministrativeMarche.filter(item=>item[0].sib==1);

    //   return this.GroupeUniteAdministrativeMarche.filter((item)=>{
    //    this.getterUniteAdministrativeByUser.find((row) => row.unite_administrative_id == item.ua_id
    //    && item[0].sib==1);
    //  });
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
