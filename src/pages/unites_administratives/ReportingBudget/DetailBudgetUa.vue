
<template>
 <div >
     <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background: #f0c71d !important;">
                    <table class="table table-striped"  style="background: #f0c71d !important;">
                        <tbody>
                        <tr>
                        
                            
                            
                          <td style="background: #f0c71d !important;">
                                <label style="font-size:20px">Recherche par Grande Nature<a href="#" @click.prevent="videGrandeNature()" v-if="grandeNature_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="grandes_natures"
                                                   v-model="grandeNature_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
 <td style="background: #f0c71d !important;">
                                <label style="font-size:20px">Recherche par Type de financement<a href="#" @click.prevent="videtypeFinancement()" v-if="typeFinancement_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="types_financements"
                                                   v-model="typeFinancement_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>
       <div align="right">

      <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>


                            </div>
 <div id="printMe">
     
     <table class="table table-bordered table-striped" >
                <thead>
                  <tr>
                    <th title="type unite administrative">Type UA</th>
                    <th>Nature Section</th>
                    <th>Section</th>
                   
                    <th>Code</th>
                    <th title="unite administrative">Unite Administrative</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                   
                  >
                   
                   <!-- <template v-if="uniteadministrative.type_ua_id = type_Unite_admins.id"> -->
                    <td style="text-align:center;font-weight: bold;">{{libelleUa(detail_Budget.type_ua_id)}}</td>
                    <td style="text-align:center;font-weight: bold;">{{libelleNatureSection(detail_Budget.nature_section_id) }}</td>
                    <td style="text-align:center;font-weight: bold;">{{libelleSection(detail_Budget.section_id)}}</td>
                    <td style="text-align:center;font-weight: bold;">{{detail_Budget.code }}</td>
                    <td style="text-align:center;font-weight: bold;">{{detail_Budget.libelle }}</td>
                  
                  </tr>
                </tbody>
              </table>
              <div class="container-fluid">
        <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
               


            </div>
<<<<<<< HEAD
            <!-- <p style="text-align:center;font-size:30px">{{detail_Budget.libelle}}</p> -->
=======
            <p style="text-align:center;font-size:30px">Listes des Budgets de : {{detail_Budget.libelle}}</p>
>>>>>>> 9b273312ab56ad77eb6a8447e9d91350471ece59
      <hr />
      <div >
        <div >
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
         
                            <div >
         
           <!-- <div v-if="formData.unite_administrative_id !=''">
                <h2 style="font-size:16px;text-align:center" v-if="formData.unite_administrative_id !=''">BUDGET DETAILLE DU : {{libelleAdministrative(formData.unite_administrative_id)}}</h2>

              </div>
              <div v-else>
                 <h2 style="font-size:16px;text-align:center" else>BUDGET DETAILLE DES UNITES ADMINISTRATIVES</h2>

              </div> -->
          
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <!-- <div v-if="formData.unite_administrative_id !=''">
                <h5>Reporting du Budget :{{libelleAdministrative(formData.unite_administrative_id)}}</h5>

              </div>
              <div v-else>
<h5>Reporting du Budget des Unites Administratives</h5>
              </div> -->
               
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
                
                 <tr class="odd gradeX" v-for="type in objetMarchePasUniteOuRegion" :key="type.id">
                   
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
                  <td style="text-align:center;font-size:16px;font-weight:bold;">{{formatageSomme(parseFloat(TotalBudgetInitial))}}</td>
                  
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
                  <td style="text-align:center;font-size:16px;font-weight:bold;" >{{formatageSomme(parseFloat(budgetConsommerDesModule))}}</td>

                  
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
                  <td style="text-align:center;font-size:16px;font-weight:bold;" >{{formatageSomme(parseFloat(TotalBudgetInitial)-(parseFloat(budgetConsommerDesModule)))}}</td>

                  


                </tr>
                </tbody>
              </table>
              
            </div>
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
// import {admin,dcf,cf,noDCfNoAdmin} from '../../../../src/Repositories/Auth';
import {  ModelListSelect } from 'vue-search-select'
 import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  watch: {
  },
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
       typeFinancement_id:"",
       section:"",
       grandeNature_id:"",
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      affiche_filtre:false,
      affiche_boutton_filtre:true,
      search: "",
      bgColor: '#171b39',
      position: 'right',
    };
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_Budget = this.uniteAdministratives.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
  computed: {
   ...mapGetters("SuiviImmobilisation", [
    
      "immobilisations",
      "fichetype",
      "normeEquipements"
     
      
    ]),
     ...mapGetters('parametreGenerauxAdministratif', ['getterplanOrganisationUa','sections']) ,
    // admin:admin,
    //   dcf:dcf,
    //   cf:cf,
    //   noDCfNoAdmin:noDCfNoAdmin,
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




objetMarchePasUniteOuRegion(){

                let vM=this;
                let objet=this.affichebudgetActive

                //retourne la section selectionner
              
                if( this.grandeNature_id!="" && this.typeFinancement_id==""){
                  
                    objet =objet.filter(item=>{
                        if(item.ua_id==vM.detail_Budget.id && item.gdenature_id==vM.grandeNature_id){
                            return item
                        }
                    })

                }
                 if( this.grandeNature_id!="" && this.typeFinancement_id!=""){
                  
                    objet =objet.filter(item=>{
                        if(item.ua_id==vM.detail_Budget.id && item.gdenature_id==vM.grandeNature_id && item.typefinancement_id==vM.typeFinancement_id){
                            return item
                        }
                    })

                }

if( this.grandeNature_id=="" && this.typeFinancement_id!=""){
                  
                    objet =objet.filter(item=>{
                        if(item.ua_id==vM.detail_Budget.id && item.typefinancement_id==vM.typeFinancement_id){
                            return item
                        }
                    })

                }
                 if( this.grandeNature_id!="" && this.typeFinancement_id!=""){
                  
                    objet =objet.filter(item=>{
                        if(item.ua_id==vM.detail_Budget.id && item.typefinancement_id==vM.typeFinancement_id && item.gdenature_id==vM.grandeNature_id ){
                            return item
                        }
                    })

                }


                return objet.filter(item=>item.ua_id == vM.detail_Budget.id)
            },



TotalBudgetInitial(){

               return this.objetMarchePasUniteOuRegion.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0);
            },




 libelleUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.type_Unite_admins.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     libelleSection() {
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
     libelleNatureSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.natures_sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    
  budgetConsommerDesModule() {
      const val = parseInt(this.budgetConsommerBienService(this.detail_Budget.id)) + parseInt(this.budgetConsommerTransfert(this.detail_Budget.id)) + parseInt(this.budgetConsommerInvertissement(this.detail_Budget.id))+parseInt(this.budgetConsommerPersonnel(this.detail_Budget.id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0;
    },
    budgetConsommerDesModule1() {

       const val = parseInt(this.budgetConsommerBienService1) + parseInt(this.budgetConsommerTransfert1) + parseInt(this.budgetConsommerInvertissement1)+parseInt(this.budgetConsommerPersonnel1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0;
    },
     budgetConsommerBienService1(){
  return this.getMandatPersonnaliserVise.filter(element =>element.marchetype == 2 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
    
      
 
},
budgetConsommerTransfert1(){
  return this.transferts.filter(element => element.exerciceencours == this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
    
},

budgetConsommerInvertissement1(){
  return this.getMandatPersonnaliserVise.filter(element => element.marchetype == 1 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
    
},
budgetConsommerPersonnel1(){
  
    return this.getMandatPersonnaliserPersonnel.filter(element =>element.marchetype == "perso" && element.exercice_budget == this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
 
},



    budgetConsommerBienService(){
  return id => {
    if(id !=""){
    return this.getMandatPersonnaliserVise.filter(element => element.ua_id == id && element.marchetype == 2 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
    }
    
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
    return this.getMandatPersonnaliserPersonnel.filter(element => element.ua_id == id && element.marchetype == "perso" && element.exercice_budget == this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
    }
    return this.getMandatPersonnaliserPersonnel.filter(element =>element.marchetype == "perso" && element.exercice_budget == this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
  }
},
/*budgetConsommerPersonnel(){
  return id => {
    if(id !=""){
    var montant = this.getMandatPersonnaliserPersonnel.filter(element => element.ua_id == id && element.marchetype == "perso" && element.exercice_budget == this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
       if(isNaN(montant)) return null
      return montant
    }
    
  }
},*/

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
videtypeFinancement(){
                this.typeFinancement_id=""
            },
        videSection(){
                this.section=""
            },
            videGrandeNature(){
                this.grandeNature_id=""
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

