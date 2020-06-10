
<template>
  <div class="container-fluid">
      <!-- <h3 style="text-align:center">TABLEAU DE BORD : BIEN ET SERVICE</h3> -->
    <div class="quick-actions_homepage">

                      
<table class="table table-bordered table-striped  " v-if="macheid">
    <tr>
        <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
                 <li class="bg_ls span"> <a href="#" style="color:#ffffff;"><h4>MONTANT REEL </h4> <i class="icon-list-ol"></i> <span class="label label-important" style="font-size:14px">{{formatageSomme(parseFloat(afficheMontantReelMarche(macheid)))}}</span><h4>MARCHE</h4></a> </li>
            </ul>

        </td>
         <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
               <li class="bg_lb span"> <a href="#" style="color:#FFFFFF;"><h4>MONTANT </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierMontantAvenant(macheid)))}}</span><h4>AVENANT</h4></a> </li>

            </ul>

        </td>
         <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
              <li class="bg_lb span"> <a href="#" style="color:#FFFFFF;"><h4>MONTANT MARCHE </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(montantMarcheAvecAvenant))}}</span><h4>AVEC AVENANT</h4></a> </li>
                
            </ul>

        </td>
         <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
               <li class="bg_lb span"> <a href="#" style="color:#FFFFFF;"><h4>MONTANT EXECUTE </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(sommeEngagementTableau(macheid)))}}</span><h4> MARCHE</h4></a> </li>
                 
            </ul>

        </td>
    </tr>
     <tr>
        <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
               <li class="bg_lb span"> <a href="#" style="color:#FFFFFF;"><h4>DISPONIBLE </h4> <i class="icon-list-ol"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(restePayeMarche))}}</span><h4>MARCHE</h4></a> </li>
              
                
            </ul>

        </td>
         <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
   <li class="bg_lb span"> <a href="#" style="color:#FFFFFF;"><h4>BUDGETAIRE </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherMontantBudgetaireInitial(afficherInputationBudgetaire(macheid))))}}</span><h4>INITIAL</h4></a> </li>
            </ul>

        </td>
         <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
                 <li class="bg_lb span"> <a href="#" style="color:#FFFFFF;"><h4>CUMUL </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(sommeEgagementLigneTableau(macheid)))}}</span><h4>ENGAGEMENT</h4></a> </li>
            </ul>

        </td>
         <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
            <li class="bg_lb span"> <a href="#" style="color:#FFFFFF;"><h4>DISPONIBLE </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherMontantBudgetaireInitial(afficherInputationBudgetaire(macheid)) - sommeEgagementLigneTableau(macheid)))}}</span><h4>BUDGETAIRE</h4></a> </li>
            </ul>

        </td>
    </tr>
     <tr>
        <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
                 <li class="bg_lb span"> <a href="#" style="color:#FFFFFF;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{ratioAvenantMarche}}%</span><h4>RATIO AVENANT/MARCHE</h4></a> </li>
            </ul>

        </td>
         <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
                 <li class="bg_lb span"> <a href="#" style="color:#FFFFFF;"><h4>NOMBRE </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierNombreAvenant(this.macheid)}}</span><h4>AVENANT</h4></a> </li>
            </ul>

        </td>
         <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
                 <li class="bg_lb span"> <a href="#" style="color:#FFFFFF;"><h4>TAUX</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{tauxFacturation}}%</span><h4>FACTURE</h4></a> </li>
            </ul>

        </td>
         <!-- <td>
            <ul class="quick-actions" style="margin: 0px !important;"> 
                 <li class="bg_lb span"> <a href="#" style="color:#FFFFFF;"><h4>TOTAL </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{0}}</span><h4>MARCHE</h4></a> </li>
            </ul>

        </td> -->
    </tr>
</table>
         

       


             
                        



















  
  
  
    </div>
    
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

import { formatageSomme } from './../../../../../Repositories/Repository';

export default {
  name:'tableaudebord',
  
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ]
    };
  },
  props:["macheid"],
  computed: {
    ...mapGetters("bienService", ["typeMarches","avenants",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,

 montantCredite: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.macheid).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
tauxFacturation() {
      const val = (parseFloat(this.montantCredite(this.macheid)) / parseFloat(this.montantMarcheAvecAvenant)) * 100;
      
       if (val) {
        return parseInt(val).toFixed(2);
      }
      
      return 0
    },

affichierNombreAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).length; 
      
    }
    
  }
},
ratioAvenantMarche(){
   const val = (parseFloat(this.affichierMontantAvenant(this.macheid)) / parseFloat(this.afficheMontantReelMarche(this.macheid))) * 100;
      return parseFloat(val).toFixed(2);
},
afficherInputationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.imputation;
      }
      return ""
        }
      };
    },
    afficherMontantBudgetaireInitial() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.codebudget == id);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return ""
        }
      };
    },



 sommeEgagementLigneTableau: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.macheid).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },



restePayeMarche() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.sommeEngagementTableau(this.macheid));
      return parseFloat(val).toFixed(0);
      
    },
montantMarcheAvecAvenant() {
      const val = parseFloat(this.afficheMontantReelMarche(this.macheid)) + parseFloat(this.affichierMontantAvenant(this.macheid));
      return parseFloat(val).toFixed(0);
    },
afficheMontantReelMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
    
affichierMontantAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
    }
    
  }
},
sommeEngagementTableau(){
  return id => {
    if(id !=""){
  
        
    return this.getMandatPersonnaliserVise.filter(element => element.marche_id == this.macheid).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2); 
      
    }
    
  }
},
  },
  methods: {
    formatageSomme:formatageSomme
  }
};
</script>



<style>


</style>
