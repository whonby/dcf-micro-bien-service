
<template>
    <div class="container-fluid">
         <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#tab2078">RECHERCHE <span class="badge badge-inverse" ></span></a></li>
                               <li v-show="Activite_id != ''"><a data-toggle="tab" href="#tab100">RAPPORT    <span class="badge badge-info" ></span></a></li>
                                <!-- <li ><a data-toggle="tab" href="#tab10">Transferts visés  <span class="badge badge-success" >{{afficheNbreTransfertValider}}</span></a></li>
                                -->
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                         <div id="tab2078" class="tab-pane active">
                             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>

              <table class="table table-bordered table-striped">
                <tr>
                  <td>
                     <div class="control-group">
                                                    <label class="control-label">Exercice budgetaire:</label>
                                                    <div class="controls">
                                                       
                                                      <select v-model="exo_id" class="span" >
                                                           
                                                           
                                                            <option v-for="situation in exercices_budgetaires" :key="situation.id" :value="situation.annee">{{situation.annee}}</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                  </td>
                  <td>
                     <div class="control-group">
                                                     <label class="control-label">Unite Administrative</label>
                                                    <div class="controls">
                                                        <select v-model="uniteAdministrativeSelect_id" class="span" >
                                                           
                                                           
                                                            <option v-for="situation in uniteAdministrativeSelect" :key="situation.id" :value="situation.id">
                                                              {{situation.libelle}}</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                  </td>
                </tr>
      
                <tr>
                  <td>
                      <div class="control-group">
                                                       <label class="control-label">Section</label>
                                                    <div class="controls">
                     <input
                                type="text"
                                class="span"
                               readonly
                              :value="afficheLibelleSection(sectionDynamiquesId(uniteAdministrativeSelect_id))"
                              />
                            
                  </div>
                                                </div>
                  </td>
                  <td>
                      <div class="control-group">
                        <label class="control-label">Programme</label>
                                                    
                                                    <div class="controls">
                                                        <select v-model="programm_id" class="span" >
                                                           
                                                           
                                                            <option v-for="situation in programmeDynamiquesId(uniteAdministrativeSelect_id)" :key="situation.id" :value="situation.id">
                                                              {{afficheLibelleProgramme(situation.program_id)}}</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                  </td>
                </tr>
                
                <tr>
                  <td>
                      <div class="control-group">
                        <label class="control-label">Action</label>
                                                    
                                                    <div class="controls">
                                                        <select v-model="action_id" class="span" >
                                                           
                                                           
                                                            <option v-for="situation in ActionId(uniteAdministrativeSelect_id)" :key="situation.id" :value="situation.id">
                                                              {{afficheLibelleAction(situation.action_id)}}</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                  </td>
                  <td>
                      <div class="control-group">
                        <label class="control-label">Activite</label>
                                                    
                                                    <div class="controls">
                                                        <select v-model="Activite_id" class="span" >
                                                           
                                                           
                                                            <option v-for="situation in ActiviteId(uniteAdministrativeSelect_id)" :key="situation.id" :value="situation.id">
                                                              {{afficheLibelleActivite(situation.activite_id)}}</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                  </td>
                </tr>
               
              </table>
          


                        </div>
                      
<div id="tab100" class="tab-pane ">
                                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>LIVRE D'ENREGISTREMENT</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
              <table class="table table-bordered table-striped">
                <tr>
                  <td>
                     <div class="control-group">
                                                    <label class="control-label">Exercice budgetaire:</label>
                                                    <div class="controls">
                                                       
                                                      <select v-model="exo_id" class="span"  readonly>
                                                           
                                                           
                                                            <option v-for="situation in exercices_budgetaires" :key="situation.id" :value="situation.annee">{{situation.annee}}</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                  </td>
                  <td>
                     <div class="control-group">
                                                     <label class="control-label">Unite Administrative</label>
                                                    <div class="controls">
                                                        <select v-model="uniteAdministrativeSelect_id" class="span" readonly>
                                                           
                                                           
                                                            <option v-for="situation in uniteAdministrativeSelect" :key="situation.id" :value="situation.id">
                                                              {{situation.libelle}}</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                  </td>
                </tr>
      
                <tr>
                  <td>
                      <div class="control-group">
                                                       <label class="control-label">Section</label>
                                                    <div class="controls">
                     <input
                                type="text"
                                class="span"
                               readonly
                              :value="afficheLibelleSection(sectionDynamiquesId(uniteAdministrativeSelect_id))"
                              />
                            
                  </div>
                                                </div>
                  </td>
                  <td>
                      <div class="control-group">
                        <label class="control-label">Programme</label>
                                                    
                                                    <div class="controls">
                                                        <select v-model="programm_id" class="span" readonly>
                                                           
                                                           
                                                            <option v-for="situation in programmeDynamiquesId(uniteAdministrativeSelect_id)" :key="situation.id" :value="situation.id">
                                                              {{afficheLibelleProgramme(situation.program_id)}}</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                  </td>
                </tr>
                
                <tr>
                  <td>
                      <div class="control-group">
                        <label class="control-label">Action</label>
                                                    
                                                    <div class="controls">
                                                        <select v-model="action_id" class="span" readonly>
                                                           
                                                           
                                                            <option v-for="situation in ActionId(uniteAdministrativeSelect_id)" :key="situation.id" :value="situation.id">
                                                              {{afficheLibelleAction(situation.action_id)}}</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                  </td>
                  <td>
                      <div class="control-group">
                        <label class="control-label">Activite</label>
                                                    
                                                    <div class="controls">
                                                        <select v-model="Activite_id" class="span" readonly>
                                                           
                                                           
                                                            <option v-for="situation in ActiviteId(uniteAdministrativeSelect_id)" :key="situation.id" :value="situation.id">
                                                              {{afficheLibelleActivite(situation.activite_id)}}</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                  </td>
                </tr>
               
              </table>
                          <table class="table table-bordered table-striped">
   <thead>
<tr style=";color: #000000;">
    <td style="width:100%;color:#000000;font-size:14px" colspan="8" >ENGAGEMENT</td>
  
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
                    <tr style=";color: #000000;">
   <td style="width:10%;" colspan="1">N° Engagement </td> 
    <td style="width:10%" colspan="1">Date</td>
    <td style="width:10%" colspan="1">N° ENGAGEMENT</td>
   <td style="width:10%" colspan="1">Nature Eco Déposé</td>
   <td style="width:10%" colspan="1">Crédit Initial</td>
   <td style="width:10%" colspan="1">Montant de l'impact validé </td>
   <td style="width:10%" colspan="1">Cumul des Engagements</td>
   <td style="width:10%" colspan="1">Crédits Disponibles</td>
   
</tr>
 </thead>
  <tbody>
    <tr  v-for="Manda in ListeFilterMandat(Activite_id)" :key="Manda.id">
                    
      <td>{{Manda.engagement_id}}</td>
       <td>{{Manda.engagement_id}}</td>
        <td>{{Manda.engagement_id}}</td>
         <td>{{Manda.engagement_id}}</td>
          <td>{{Manda.engagement_id}}</td>
           <td>{{Manda.engagement_id}}</td>
            <td>{{Manda.engagement_id}}</td>
             <td>{{Manda.engagement_id}}</td>
    </tr>
  </tbody>
 <thead>
<tr style=";color: #000000;">
    
    <td style="width:100%;color:#000000;font-size:14px" colspan="8" >LIQUIDATION</td>
   
    
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
                    <tr style=";color: #000000;">
 
   <td style="width:10%" colspan="2">N° Liquidation</td>
   <td style="width:10%" colspan="2">Date</td>
   <td style="width:10%" colspan="2">Montant</td>
   <td style="width:10%" colspan="2">Cumul</td>
   
</tr>
 </thead>
  
    
    <tbody>
    <tr  v-for="Manda in ListeFilterMandat(Activite_id)" :key="Manda.id">
                    
      <td colspan="2">{{Manda.engagement_id}}</td>
       <td colspan="2">{{Manda.engagement_id}}</td>
        <td colspan="2">{{Manda.engagement_id}}</td>
         <td colspan="2">{{Manda.engagement_id}}</td>
          
    </tr>
  </tbody>
  
 <thead>
<tr style=";color: #000000;">
    
    <td style="width:100%;color:#000000;font-size:14px" colspan="8" >MANDATEMENT</td>
    
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
                    <tr style=";color: #000000;">
  
    <td style="width:10%" colspan="2">N° du Mandat</td>
     <td style="width:10%" colspan="2">Date du Mandat</td>
      <td style="width:10%" colspan="2">Montant du Mandat</td>
       <td style="width:10%" colspan="2">Cumul des Mandats Disponibles</td>
</tr>
 </thead>
  <tbody>
    
   <tr  v-for="Manda in ListeFilterMandat(Activite_id)" :key="Manda.id">
      npm <td colspan="2">{{Manda.engagement_id}}</td>
       <td colspan="2">{{Manda.engagement_id}}</td>
        <td colspan="2">{{Manda.engagement_id}}</td>
         <td colspan="2">{{Manda.engagement_id}}</td>
    </tr>
  </tbody>
              </table>


                        </div>

                       
                    </div>

<!--   
<div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="" href="#">Voir Tableau</a>
       
      </div> -->
  


















                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters} from "vuex";
import { formatageSomme } from "../../.././src/Repositories/Repository.js";
import {admin,dcf} from "../../.././src/Repositories/Auth"
export default {
    // name: 'transfertItem',
    data() {
    return {
     exo_id:"",
     programm_id:"",
     uniteAdministrativeSelect_id:"",
     Activite_id:"",
     action_id:"",
      search: ""
    };
    
  },
  //    props: {
  //   article: Object,
  // },
 
 computed: {
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
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "transferts",
      "montantTransfererGlobal",
      "afficheTransfertEnAnttente",
      "montantTransfererGlobalAttente",
      "afficheTransfertDiffere",
      "montantTransfererGlobalDifferer",
      "afficheTransfertRejeter",
      "montantTransfererGlobalRejeter",
      "montantTransferer",
      "affichenbreTransfertRejeter",
"afficheNbreTransfertDiffere",
"afficheNbreTransfertEnAnttente",
"afficheNbreTransfertValider",
"nombreTransfert",
"afficheTransfertValider",
"historiquetransferts",
"getPersonnaliseHistoriqueTransfert"
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  ...mapGetters('personnelUA', ['all_acteur_depense',  'fonctions']),
 ...mapGetters("bienService", ['modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

 admin:admin,
      dcf:dcf,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

sectionDynamiquesId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.section_id;
      }
      return 0
        }
      };
    },
    afficheLibelleSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section.concat('  ', qtereel.nom_section)
      }
      return 0
        }
      };
    },
   
uniteAdministrativeSelect() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect
        }
else{
return this.uniteAdministratives
}

},

sectionDynamiquesId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.section_id;
      }
      return 0
        }
      };
    },
    afficheLibelleSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section.concat('  ', qtereel.nom_section)
      }
      return 0
        }
      };
    },
  programmeDynamiquesId() {
      return id => {
        if (id != null && id != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.ua_id == id && qtreel.status == 'actu' && qtreel.exercicebudget_id == this.exo_id);
        }
      };
    },
    afficheLibelleProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle)
      }
      return 0
        }
      };
    },
     ActionId() {
      return id => {
        if (id != null && id != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.ua_id == id && qtreel.status == 'actu' && qtreel.exercicebudget_id == this.exo_id);
        }
      };
    },
    afficheLibelleAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauAction.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle)
      }
      return 0
        }
      };
    },
    ActiviteId() {
      return id => {
        if (id != null && id != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.ua_id == id && qtreel.status == 'actu' && qtreel.exercicebudget_id == this.exo_id);
        }
      };
    },
    afficheLibelleActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle)
      }
      return 0
        }
      };
    },

    ListeFilterMandat() {
      return id => {
        if (id != null && id != "") {
           return this.getMandatPersonnaliserVise.filter(qtreel => qtreel.afficheActivite.id == id &&  qtreel.exercice_budget == this.exo_id && qtreel.afficheUa.id == this.uniteAdministrativeSelect_id && qtreel.afficheProgramme.id ==this.programm_id && qtreel.afficheAction.id==this.action_id);
        }
      };
    },
  },
  methods: {
    formatageSomme:formatageSomme
  }
}
</script>
    