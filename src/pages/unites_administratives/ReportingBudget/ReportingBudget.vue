code
<template>
  <div>
   
    <div class="container-fluid">
        <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background: #f0c71d !important;">
                    <table class="table table-striped"  style="background: #f0c71d !important;">
                        <tbody>
                        <tr>
                            <!-- <td style="background: #f0c71d !important;">

                                <label>CF<a href="#" @click.prevent="videTypeCF()" v-if="controlleur_fin" style="color: red"><i class="fa fa-trash-o"></i></a></label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="listeCF"
                                                   v-model="controlleur_fin"
                                                   option-value="id"
                                                   option-text="name"
                                                   placeholder="Controleur financier"
                                >

                                </model-list-select>
                            </td> -->
                            <!-- <td style="background: #f0c71d !important;">
                                <label>Section
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="sections"
                                                   v-model="formData.section_id"
                                                   option-value="id"
                                                   option-text="nom_section"
                                                   placeholder="Section"
                                >

                                </model-list-select>
                            </td> -->
                            <td style="background: #f0c71d !important;">
                                <label>Unite d'Administrative
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="filtre_unite_admin"
                                                   v-model="formData.unite_administrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Unité administrative"
                                >

                                </model-list-select>
                            </td>
                          

                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste type texte"
            :data="filtre_type_teste"
            name="Liste type texte"
            worksheet="Liste type texte"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
           <div align="right">

      <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>


                            </div>
                            <div id="printMe">
         
           <div v-if="formData.unite_administrative_id !=''">
                <h2 style="font-size:16px;text-align:center" v-if="formData.unite_administrative_id !=''">BUDGET DETAILLE DU : {{libelleAdministrative(formData.unite_administrative_id)}}</h2>

              </div>
              <div v-else>
                 <h2 style="font-size:16px;text-align:center" else>BUDGET DETAILLE DES UNITES ADMINISTRATIVES</h2>

              </div>
          
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <div v-if="formData.unite_administrative_id !=''">
                <h5>Reporting du Budget :{{libelleAdministrative(formData.unite_administrative_id)}}</h5>

              </div>
              <div v-else>
<h5>Reporting du Budget des Unites Administratives</h5>
              </div>
               
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                       <th>Exercice</th>
                    <th title="">Code Budget</th>
                     
                    <th>Section</th>
                    <th>UA</th>
                    <th title="grande nature de dépense">Grande nature de dépense</th>
                      <th>Programme</th>
                    
                    <th title="type de financement">Type de financement</th>
                     
                     <th title="classification fonctionnelle">Classification fontionnelle</th>
                     <th title="type procedure">Procédure de marché</th>
                     <th title="Statut">Statut</th>
                     <th title="classification Economique">Classification économique</th>
                    <th style="width:30px">Dotation initiale</th>
                    
                    
                  </tr>
                </thead>
                <tbody>
                
                 <tr class="odd gradeX" v-for="type in filtreParUa(formData.unite_administrative_id)" :key="type.id">
                   
                    <td>{{type.exercicebudget_id || 'Non renseigné'}}</td>
                      <td>{{type.codebudget || 'Non renseigné'}}</td>
                    
                    <td>{{CodeSection(type.section_id)|| 'Non renseigné'}}</td>
                     <td>{{libelleAdministrative(type.ua_id)|| 'Non renseigné'}}</td>
                    <td>{{CodeGdeNatureDep(type.gdenature_id) || 'Non renseigné'}}</td>
                    <td>{{Codeprogramme(type.program_id) || 'Non renseigné'}}</td>
                     <td>{{typeFinancement(type.typefinancement_id) || 'Non renseigné'}}</td>
                   
                    
                      <td>{{Codefonctionnel(type.fonctionnel_id) || 'Non renseigné'}}</td>
                       <td>
                         <span v-if="type.Dotation_Initiale < 10000000 ">PSC Sans comité</span>
                         <span v-else-if="type.Dotation_Initiale < 30000000 ">PSC Avec comité</span>
                         <span v-else-if="type.Dotation_Initiale < 60000000 ">PSL</span>
                         <span v-else-if="type.Dotation_Initiale < 100000000 ">PSO</span>
                         <span v-else-if="type.Dotation_Initiale > 100000000 ">AON ou AOI</span>
                         <span v-else></span>
                       </td>
                       <td>

                         <span v-if="type.economique_id == CodeExempte(type.economique_id) ">Exemptée procedure</span>
                         <span v-else>Ligne à marché</span>
                       </td>
                    <td>{{Codeeconomique(type.economique_id) || 'Non renseigné'}}</td>
                  <td style="text-align:center">{{formatageSomme(parseFloat(type.Dotation_Initiale)) || 0}}</td>
                   
                  </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style="background-color: blue;color:#fff;text-align:center;font-size:14px;font-weight:bold;">TOTAL BUDGET INITIAL</td>
                  <td style="text-align:center;font-size:16px;font-weight:bold;">{{formatageSomme(parseFloat(TotalBudgetInitial(formData.unite_administrative_id)))}}</td>
                  
                </tr>
               <tr>
                 <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style="background-color: green;color:#fff;text-align:center;font-size:14px;font-weight:bold;">TOTAL BUDGET EXECUTE</td>
                  <td style="text-align:center;font-size:16px;font-weight:bold;">{{formatageSomme(parseFloat(budgetConsommerDesModule))}}</td>
                  
                </tr>
                 <tr>
                   <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style="background-color: red;color:#fff;text-align:center;font-size:14px;font-weight:bold;">TOTAL BUDGET ACTUEL</td>
                  <td style="text-align:center;font-size:16px;font-weight:bold;">{{formatageSomme(parseFloat(TotalBudgetInitial(formData.unite_administrative_id))-(parseFloat(budgetConsommerDesModule)))}}</td>
                  
                </tr>
                </tbody>
              </table>
              
            </div>
          </div>
                            </div>
        </div>
      </div>
    </div>
 <fab v-if="affiche_boutton_filtre"
             :position="position"
             :bg-color="bgColor"
             :actions="fabActions"
             main-icon="format_indent_decrease"
             @cache="filter"

        ></fab>
   
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import {formatageSomme} from '../../../../src/Repositories/Repository';
import {admin,dcf,cf,noDCfNoAdmin} from '../../../../src/Repositories/Auth';
import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
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
          icon: "search"
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
       unite_administrative_id:""
      },
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      affiche_filtre:false,
      affiche_boutton_filtre:true,
      search: "",
      bgColor: '#171b39',
      position: 'top-right',
    };
  },

  computed: {
   ...mapGetters("SuiviImmobilisation", [
    
      "immobilisations",
      "fichetype",
      "normeEquipements"
     
      
    ]),
     ...mapGetters('parametreGenerauxAdministratif', ['getterplanOrganisationUa','sections']) ,
    admin:admin,
      dcf:dcf,
      cf:cf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
 ...mapGetters("bienService", ["getMandatPersonnaliserPersonnel",'getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),
   

    ...mapGetters("personnelUA", ["personnaliseActeurDepense","acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

 ...mapGetters("uniteadministrative", ["getvehicules","uniteAdministratives","directions","servicesua","uniteZones","budgetGeneral",
      "getPersonnaliseBudgetGeneral"]),
  ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections"
    ]),
...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
   ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "getterligneExempter",
                "transferts"

            ]),
             ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,

  budgetConsommerDesModule() {
      const val = parseInt(this.budgetConsommerBienService(this.formData.unite_administrative_id)) + parseInt(this.budgetConsommerTransfert(this.formData.unite_administrative_id)) + parseInt(this.budgetConsommerInvertissement(this.formData.unite_administrative_id))+parseInt(this.budgetConsommerPersonnel(this.formData.unite_administrative_id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    budgetConsommerBienService(){
  return id => {
    if(id !=""){
    return this.getMandatPersonnaliserVise.filter(element => element.ua_id == id && element.marchetype == 2 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
    }
    return this.getMandatPersonnaliserVise.filter(element =>element.marchetype == 2 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
     
  }
},
budgetConsommerTransfert(){
  return id => {
    if(id !=""){
    return this.transferts.filter(element => element.ua_id == id && element.exerciceencours == this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
      
    }
    
  }
},
budgetConsommerInvertissement(){
  return id => {
    if(id !=""){
    return this.getMandatPersonnaliserVise.filter(element => element.ua_id == id && element.marchetype == 1 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
    }
    
  }
},
budgetConsommerPersonnel(){
  return id => {
    if(id !=""){
    var montant = this.getMandatPersonnaliserPersonnel.filter(element => element.ua_id == id && element.marchetype == "perso" && element.exercice_budget == this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
       if(isNaN(montant)) return null
      return montant
    }
    
  }
},
 affichebudgetActive() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.actived == 1);
        }
        return this.budgetGeneral.filter(element => element.actived == 1); 

    },

 filtreParUa() {
      return id => {
        if (id != null && id != "") {
           return this.affichebudgetActive.filter(qtreel => qtreel.ua_id == id);

     
        }
        return this.affichebudgetActive
      };
    },
    TotalBudgetInitial() {
      return id => {
        if (id != null && id != "") {
           return this.affichebudgetActive.filter(qtreel => qtreel.ua_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0);

     
        }
        return this.affichebudgetActive.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0);
      };
    },
    filtre_unite_admin() {
                if(this.noDCfNoAdmin){
                    let colect=[];
                    let vM=this
                    this.uniteAdministratives.filter(item=>{
                        
                        if(vM.getterUniteAdministrativeByUser.length>0){
                            let val= vM.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                            if (val!=undefined){
                                colect.push(item)
                                return item
                            }
                        }

                    })
                    return colect
                }
                return this.uniteAdministratives
            },
             CodeExempte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterligneExempter.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },
     afficherSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_section;
      }
      return 0
        }
      };
    },
     CodeSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section.concat("    ", qtereel.nom_section);
      }
      return 0
        }
      };
    },


    afficherGdeNatureDep() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     CodeGdeNatureDep() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat("    ", qtereel.libelle);
      }
      return 0
        }
      };
    },

anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
     afficherprogramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     Codeprogramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat("    ", qtereel.libelle);
      }
      return 0
        }
      };
    },
 typeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.types_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     afficherfonctionnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_fonctionnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     Codefonctionnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_fonctionnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat("    ", qtereel.libelle);
      }
      return 0
        }
      };
    },
    
     affichereconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     Codeeconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat("    ", qtereel.libelle);
      }
      return 0
        }
      };
    },
    libelleAdministrative() {
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
  },
  methods: {
    ...mapActions("uniteadministrative", [
     
    ]),
     genererEnPdf(){
  this.$htmlToPaper('printMe');
},
    filter(){
                this.affiche_filtre=!this.affiche_filtre
               
               
               
            },
    formatageSomme:formatageSomme,
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
  
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

