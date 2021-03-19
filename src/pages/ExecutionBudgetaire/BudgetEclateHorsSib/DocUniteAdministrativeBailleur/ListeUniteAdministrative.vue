
<template>
  <div>
 <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
    <table class="table table-bordered table-striped">
            <tr>
              <td>
                <div align="right">

      <button class="btn btn-info"  @click.prevent="afficherModalAjouterTitre">AJOUTER BAILLEUR </button>


                            </div>
              </td>
              
            </tr>
          </table>
          
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
                    <th style="width:70%;font-size:12px" >Unité Administrative</th>
                    <!-- <th style="width:20%;font-size:12px" >Montant Reçu</th>  -->
                    <th style="width:10%;" colspan="2" >Action</th>
                   
                  </tr>
                </thead>
                <tbody>
                            <tr class="odd gradeX" v-for="(type) in groupeUniteAdministrativeBailleur" :key="type.id">
                    <!-- <td style="font-size:12px;color:#000;text-align:center">{{type[0].annebudgetaire || 'Non renseigné'}}</td> -->
                      <td style="font-size:16px;color:#000;text-align:center">{{libelleServiceGestionnaire(idServiceGestionnaire(type[0].ua_id)) || 'Non renseigné'}}</td>
                   <td style="font-size:16px;color:#000;text-align:center">{{idUniteAdministrative(type[0].ua_id) || 'Non renseigné'}}</td>
                   
                   <td>
                      <router-link :to="{ name: 'ListeBailleurUniteAdministrative', params: { id: type[0].id }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="   icon-print" style="font-weight: bold;"> Voir Bailleur</i></span>
                   </router-link> 
                    </td>
                    <!-- <td style="font-size:12px;color:#000;text-align:center">{{0 || 'Non renseigné'}}</td> -->
                    <td>
                      <button class="btn btn-danger" @click="supprimerUniteAdministrativeBailleur(type[0].id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
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
<notifications  />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->



    <div id="exampleModal" class="modal hide tailleModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Bailleur</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
        <tr>
           <td colspan="">
                       <div class="control-group">
                <label class="control-label">Nombre de Bailleur</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  :value="nombreBailleur(this.formData.ua_id,this.formData.type_financement_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
                  </td>
        </tr>
         <tr>
           <td>
                       <div class="control-group">
                <label class="control-label">Unite administrative <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="formData.ua_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
              <code style="color:red;font-size:12px" v-if="formData.ua_id==''">Veuillez renseigner ce champ</code>
                  </td>
         </tr>
         <tr>
           <td>
                       <div class="control-group">
                <label class="control-label">Type de Financement  <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="types_financements"
                                                   v-model="formData.type_financement_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
               <code style="color:red;font-size:12px" v-if="formData.type_financement_id==''">Veuillez renseigner ce champ</code>
                  </td>   
                  
                 
                  
                 
         </tr>
        <tr>
           <td colspan="">
                       <div class="control-group">
                <label class="control-label">Bailleur</label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="sources_financements"
                                                   v-model="formData.sous_financement_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
                  </td>
        </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterTypeTexteLocal()"
          class="btn btn-primary"
          href="#"
          
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
  </div>
</template>
  
<script>

import { mapGetters, mapActions } from "vuex";

// import {admin,dcf,cf,noDCfNoAdmin} from "../../../../src/Repositories/Auth"
  import {  ModelListSelect } from 'vue-search-select'
   import 'vue-search-select/dist/VueSearchSelect.css'
// import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
 components: {
    
    ModelListSelect,
     
  },
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
        ua_id:"",
        type_financement_id:""
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
      "groupeUniteAdministrativeBailleur",
      "getterUniteAdministrativeBailleur"
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("bienService", ['modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
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
       ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',"types_financements"]),



nombreBailleur() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.getterUniteAdministrativeBailleur.filter(qtreel => qtreel.ua_id == id && qtreel.type_financement_id == id1).length + 1;

        }
      };
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
     
      "ajouterUniteAdministrativeBailleur",
      "modifierBudgetEclate",
      "supprimerUniteAdministrativeBailleur",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    ajouterTypeTexteLocal() {
      var objet={
        ...this.formData,
        numero_ordre:this.nombreBailleur(this.formData.ua_id,this.formData.type_financement_id)
      }
      this.ajouterUniteAdministrativeBailleur(objet);

      this.formData = {
        ua_id: "",
        	type_financement_id: "",
          sous_financement_id: ""
      };
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
                this.$router.push({ name: 'ajouterUniteAdministrativeBailleurr' })
            },
  }
};
</script>
<style scoped>

.tailleModal{
  width: 50%;
  margin: 0 -30%;
 
}

</style>
