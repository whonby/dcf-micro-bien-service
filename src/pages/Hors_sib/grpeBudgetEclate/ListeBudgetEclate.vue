budgetParUa
<template>
    <div class="container-fluid">
       <div id="exampleModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Eclatement du Budget</h3>
      </div>
      <div class="modal-body">
        
        <table class="table table-bordered table-striped">
         
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Exercice budgetaire</label>
                  <div class="controls">
                       <input
                      type="text"
                    :value="anneeAmort"
                      class="span5"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
              
               <td>
                <div class="control-group">
                  <label class="control-label">UA Réceptrice</label>
                  <div class="controls">
                      
                            <input
                      type="text"
                   :value="libelleUAdministrative(detail_Ua.unitezone_id)"
                      class="span5"
                     readonly
                      
                    />
                  </div>
                </div>
              </td>
               <td colspan="">
                <div class="control-group">
                  <label class="control-label">Total disponible</label>
                  <div class="controls">
                       <input
                      type="text"
                   :value="RestantMontantTransferer"
                      class="span5"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
             </tr>
              <tr>
               
               <td>
                <div class="control-group">
                  <label class="control-label">Ligne Economique</label>
                  <div class="controls">
                    <select v-model="editBudgetEclate.ligneeconomique_id" class="span5">
                     <option
                        v-for="Bgeneral in recupererDernierNiveauPlanEconomique(calculerTaillerStructureEconomique)"
                        :key="Bgeneral.id"
                        :value="Bgeneral.id"
                      >{{Bgeneral.code}}-{{Bgeneral.libelle}}</option>
                    </select>

                    
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Grande Nature</label>
                  <div class="controls">
                    <select v-model="editBudgetEclate.grandenature_id" class="span5">
                       <option
                        v-for="gdenature in grandes_natures"
                        :key="gdenature.id"
                        :value="gdenature.id"
                      >{{gdenature.code}} - {{gdenature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td colspan="">
                <div class="control-group">
                  <label class="control-label">Dotation</label>
                  <div class="controls">
                       <input
                      type="text"
                   
                      class="span5"
                     v-model="editBudgetEclate.dotation"
                      
                    />
                   
                  </div>
                </div>
              </td>
              
             </tr>
            
              <tr>
                 
              </tr>
             
      
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal()"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
         <div class="row-fluid">
                <div class="span12">
                  <div class="quick-actions_homepage">
      
                               <ul class="quick-actions" style="margin:0px 100px">
         <!-- <li class="bg_lb span4"> <a href="#" style="color:black;"> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{nombreUniteZoneValider}}</span><h3>Nbres Unités Zones</h3></a> </li> -->
         <li class="bg_lb span3"> <a href="#" style="color:black;"><h4>TOTAL </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaSomme(detail_Ua.unitezone_id)))}}</span><h4>BUDGET ECLATE</h4></a> </li>
   <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>TOTAL BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaInvestissementSomme(detail_Ua.unitezone_id)))}}</span><h4>INVESTISSEMENT</h4></a> </li>
   <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>TOTAL BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme((parseFloat(afficherListeBudgetEclateParUaBienServiceSomme(detail_Ua.unitezone_id)))+(parseFloat(afficherListeBudgetEclateParUaPersonnelSomme(detail_Ua.unitezone_id)))+(parseFloat(afficherListeBudgetEclateParUaTransfertsSomme(detail_Ua.unitezone_id))))}}</span><h4>FONCTIONNEMENT</h4></a> </li>
  
      </ul>
    </div>
                    <div class="widget-box">
                      
                        <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                     <th style="width:20%;font-size:12px" >Code UA</th>
                    <th style="width:60%;font-size:12px" >Unité d'Administrative</th>
                   <th style="width:20%;font-size:12px" >Total Budget Eclaté</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX">
                   
                     <td style="font-size:14px">{{CodeeUniteAdministrative(detail_Ua.unitezone_id)|| 'Non renseigné'}}</td>
                     <td style="font-size:14px">{{LibelleUniteAdministrative(detail_Ua.unitezone_id)|| 'Non renseigné'}}</td>
                <td style="font-size:14px">{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaSomme(detail_Ua.unitezone_id)))}}</td>
                   
                  </tr>
                  
                </tbody>
              </table>
              
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#tab2078">Tout le Budget Eclate</a></li>
                               <!-- <li ><a data-toggle="tab" href="#tab100"> Bien et Service<span class="badge badge-info" >{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaBienServiceSomme(detail_Ua.unitezone_id)))}}</span></a></li> -->
                                <li ><a data-toggle="tab" href="#tab10"> Investissement  </a></li>
                                <!-- <li><a data-toggle="tab" href="#tab20"> Personnel  <span class="badge badge-warning" >{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaPersonnelSomme(detail_Ua.unitezone_id)))}}</span></a></li>
                                  <li><a data-toggle="tab" href="#tab99999"> Transfert  <span class="badge badge-warning" >{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaTransfertsSomme(detail_Ua.unitezone_id)))}}</span></a></li> -->
                                  <li><a data-toggle="tab" href="#tab7899"> Fonctionnement  </a></li>
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                          <div id="tab7899" class="tab-pane">
                              <div class="widget-title">
                                 <span class="icon">
                <i class="icon-th"></i>
              </span>
              <!-- <h5>azerty</h5> -->
                              </div>
                              <div class="widget-title">
                            <ul class="nav nav-tabs">
                             
                               <li ><a data-toggle="tab" href="#tab12"> Bien et Service<span class="badge badge-info" >{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaBienServiceSomme(detail_Ua.unitezone_id)))}}</span></a></li>
                               
                                <li><a data-toggle="tab" href="#tab202"> Personnel  <span class="badge badge-warning" >{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaPersonnelSomme(detail_Ua.unitezone_id)))}}</span></a></li>
                                  <li><a data-toggle="tab" href="#tab78"> Transfert  <span class="badge badge-important" >{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaTransfertsSomme(detail_Ua.unitezone_id)))}}</span></a></li>

                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                          <div id="tab12" class="tab-pane active">
                            <div class="widget-title">
                                 <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Bien et Service</h5>
                              </div>
                               <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th style="width:10%;" >Exercice Budgétaire</th>
                     <th style="width:50%;">Ligne économique</th>
                     <th style="width:12%;" >Grande Nature</th>
                      <th style="width:20%;">Dotation </th>
                  
                     
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in afficherListeBudgetEclateParUaBienService(detail_Ua.unitezone_id)" :key="type.id">
                   
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{type.annebudgetaire|| 'Non renseigné'}}</td>
                     
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{Codeeconomique(type.ligneeconomique_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{afficherGrandNature(type.grandenature_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)" style="text-align : center">{{formatageSomme(parseFloat(type.dotation))|| 'Non renseigné'}}</td>
                     
                    
                  </tr>
                  <tr>
                        
                      
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> TOTAL
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(afficherListeBudgetEclateParUaBienServiceSomme(detail_Ua.unitezone_id)))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>
                          </div>
                          <div id="tab202" class="tab-pane">
                            <div class="widget-title">
                                 <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Personnel</h5>
                              </div>
                              <table class="table table-bordered table-striped">
                <thead>
                   <tr>
                     <th style="width:10%;" >Exercice Budgétaire</th>
                   
                     
                    <th style="width:60%;">Ligne économique</th>
                     <th style="width:12%;" >Grande Nature</th>
                      <th style="width:15%;">Dotation </th>
                  
                    
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in afficherListeBudgetEclateParUaPersonnel(detail_Ua.unitezone_id)" :key="type.id">
                   
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{type.annebudgetaire|| 'Non renseigné'}}</td>
                     
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{Codeeconomique(type.ligneeconomique_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{afficherGrandNature(type.grandenature_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)" style="text-align : center">{{formatageSomme(parseFloat(type.dotation))|| 'Non renseigné'}}</td>
                     
                   
                  </tr>
                  <tr>
                        <td>
                          
                      </td>
                     
                      <td>
                          
                      </td>
                      
                       <td style="font-weight:bold;"> TOTAL
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(afficherListeBudgetEclateParUaPersonnelSomme(detail_Ua.unitezone_id)))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>
                          </div>
                          <div id="tab78" class="tab-pane">
                            <div class="widget-title">
                                 <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Transfert</h5>
                              </div>
                              <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                     <th style="width:10%;" >Exercice Budgétaire</th>
                    
                     
                    <th style="width:50%;">Ligne économique</th>
                     <th style="width:12%;" >Grande Nature</th>
                      <th style="width:20%;">Dotation </th>
                  
                     
                  </tr>
              </thead>
                <tbody>
              <tr class="odd gradeX" v-for="(type, index) in afficherListeBudgetEclateParUaTransferts(detail_Ua.unitezone_id)" :key="type.id">
                   
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{type.annebudgetaire|| 'Non renseigné'}}</td>
                     
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{Codeeconomique(type.ligneeconomique_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{afficherGrandNature(type.grandenature_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)" style="text-align : center">{{formatageSomme(parseFloat(type.dotation))|| 'Non renseigné'}}</td>
                     
                  
                  </tr>
                  <tr>
                        <td>
                          
                      </td>
                      
                      <td>
                          
                      </td>
                      
                       <td style="font-weight:bold;"> TOTAL 
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(afficherListeBudgetEclateParUaTransfertsSomme(detail_Ua.unitezone_id)))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>
                          </div>
                        </div>
                          </div>
        

                            <div id="tab10" class="tab-pane">
                              <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget par Investissement</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                             <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th style="width:10%;" >Exercice Budgétaire</th>
                    
                    <th style="width:50%;">Ligne économique</th>
                     <th style="width:12%;" >Grande Nature</th>
                      <th style="width:20%;">Dotation </th>
                  
                     
                  </tr>
                </thead>
                <tbody>
                 <tr class="odd gradeX" v-for="(type, index) in afficherListeBudgetEclateParUaInvestissement(detail_Ua.unitezone_id)" :key="type.id">
                   
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{type.annebudgetaire|| 'Non renseigné'}}</td>
                     
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{Codeeconomique(type.ligneeconomique_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{afficherGrandNature(type.grandenature_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)" style="text-align : center">{{formatageSomme(parseFloat(type.dotation))|| 'Non renseigné'}}</td>
                     
                    
                  </tr>
                  <tr>
                      
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      
                       <td style="font-weight:bold;"> TOTAL
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(afficherListeBudgetEclateParUaInvestissementSomme(detail_Ua.unitezone_id)))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>
                           
                        </div>
                         <div id="tab2078" class="tab-pane active">
                             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget Eclate</h5>
              <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div>
            </div>
              <table class="table table-bordered table-striped">
                <thead>
                   <tr>
                     <th style="width:10%;" >Exercice Budgétaire</th>
                    
                     
                    <th style="width:50%;">Ligne économique</th>
                     <th style="width:12%;" >Grande Nature</th>
                      <th style="width:20%;">Dotation </th>
                  
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in filtre_type_teste" :key="type.id">
                   
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{type.annebudgetaire|| 'Non renseigné'}}</td>
                     
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{Codeeconomique(type.ligneeconomique_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{afficherGrandNature(type.grandenature_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)" style="text-align : center">{{formatageSomme(parseFloat(type.dotation))|| 'Non renseigné'}}</td>
                     
                    <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclate(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                       <td>
                          
                      </td> 
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      
                       <td style="font-weight:bold;"> TOTAL
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(afficherListeBudgetEclateParUaSomme(detail_Ua.unitezone_id)))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>
          


                        </div>
                        


                    
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters,mapActions} from "vuex";
import { formatageSomme } from "../../../Repositories/Repository";
export default {
    // name: 'transfertItem',
    data() {
    return {
     
     editBudgetEclate:{},
      search: ""
    };
    
  },
  //    props: {
  //   article: Object,
  // },
 
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
      "transferts"
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
  RestantMontantTransferer() {
      const val = parseFloat(this.sommeTotalDisponible(this.detail_Ua.unitezone_id)) - parseFloat(this.sommeTotalConsomme(this.detail_Ua.unitezone_id));
      return parseFloat(val).toFixed(0);
    },
    sommeTotalDisponible() {
     return id => {
        if (id != null && id != "") {
          return this.transferts.filter(
            element => element.unitezone_id == id
          ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0);
        }
        return 0
      };
    },
sommeTotalConsomme() {
     return id => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            element => element.uniteadministrative_id == id
          ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
        }
         return 0
      };
     
    },
filtre_type_teste() {
      const st = this.search.toLowerCase();
      return this.afficherListeBudgetEclateParUa(this.detail_Ua.unitezone_id).filter(type => {
        return (
          type.dotation.toLowerCase().includes(st) 
        );
      });
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
    
    
recupererDernierNiveauPlanEconomique() {
      return id => {
        if (id != null && id != "") {
           return this.plans_budgetaires.filter(qtreel => this.RecupererNiveauStructureEconomique(qtreel.structure_budgetaire_id) == id);
      
        }
      };
    },
   
   RecupererNiveauStructureEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
   
   calculerTaillerStructureEconomique(){
     return this.structures_budgetaires.length
   },

anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
libelleUAdministrative() {
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


afficherListeBudgetEclateParUa() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id);

        }
      };
    },
  afficherListeBudgetEclateParUaSomme() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    afficherListeBudgetEclateParUaBienService() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==5);

        }
      };
    },
  afficherListeBudgetEclateParUaBienServiceSomme() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    afficherListeBudgetEclateParUaPersonnel() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==2);

        }
      };
    },
  afficherListeBudgetEclateParUaPersonnelSomme() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    afficherListeBudgetEclateParUaInvestissement() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==7);

        }
      };
    },
  afficherListeBudgetEclateParUaInvestissementSomme() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    afficherListeBudgetEclateParUaTransferts() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==3);

        }
      };
    },
  afficherListeBudgetEclateParUaTransfertsSomme() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    Codeeconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      }
    },
  
  CodeeUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      }
    },
    LibelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      }
    },
  
  
  afficherDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.motifDecisions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
 filtre_Historique() {
      const st = this.search.toLowerCase();
      return this.historiquetransferts.filter(type => {
        return (
          type.num_transfert.toLowerCase().includes(st) 
         
         
           
          
        );
      });
    },

 
 filtre_HistoriqueMontant() {
      const st = this.search.toLowerCase();
      return this.historiquetransferts.filter(type => {
        return (
          type.num_transfert.toLowerCase().includes(st) 
         
           
          
        );
      }).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(2);
    },







     afficherLocalisation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheLocalisationGeoNiveau5.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
         afficherActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom);
      }
      return 0
        }
      };
    },
   afficherDestinataire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteZones.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.description_localisation;
      }
      return 0
        }
      };
    },
     afficherUa() {
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
     afficherGrandNature() {
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
    afficherTransfert() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.afficheEconomique.libelle;
      }
      return 0
        }
      };
    },
    afficherCodeTransfert() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.afficheEconomique.code;
      }
      return 0
        }
      };
    },
  },
  created() {
            this.marcheid=this.$route.params.id
   this.detail_Ua = this.transferts.find(
       idmarche => idmarche.unitezone_id == this.$route.params.id
   )
  
},
  methods: {
       ...mapActions("uniteadministrative", [
     
      "ajouterBudgetEclate",
      "modifierBudgetEclate",
      "supprimerBudgetEclate",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
    formatageSomme:formatageSomme,
    afficherModalModifierTypeTexte(id) {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editBudgetEclate = this.afficherListeBudgetEclateParUa(this.detail_Ua.unitezone_id).find(item=>item.id == id);
    },
    modifierTypeTexteLocal() {
      this.modifierBudgetEclate(this.editBudgetEclate);
this.$("#exampleModal").modal('hide');
      
       
    },
  }
}
</script>
    <style scoped>

.tailgrand12{
  width: 90%;
  margin: 0 -45%;
 
}

</style>