
<template>
  <div class="container-fluid">
      <!-- <h3 style="text-align:center">TABLEAU DE BORD : BIEN ET SERVICE</h3> -->
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <li class="bg_lb"> <a href="index.html"> <i class="icon-dashboard"></i> <span class="label label-important">{{nombreDeMarche}}</span> TOTAL MARCHE</a> </li>
        <li class="bg_lg "> <a href="charts.html"> <i class="icon-signal"></i><span class="label label-important">{{nombreMarcheEnplanification}}</span>  MARCHE EN PLANIFICATION</a> </li>
        <li class="bg_ly"> <a href="widgets.html"> <i class="icon-inbox"></i><span class="label label-success">{{nombreDeMarcheEnContratualisation}}</span> MARCHE EN CONTRALISATION </a> </li>
        <li class="bg_lo"> <a href="tables.html"> <i class="icon-th"></i> <span class="label label-important">{{nbreMarcheExecuter}}</span> MARCHE EN EXECUTION</a> </li>
        <li class="bg_ls "> <a href="grid.html"> <i class="icon-fullscreen"></i><span class="label label-important">{{afficheNombreMarcheResilier}}</span>  MARCHE RESILIE</a> </li>
        <li class="bg_lo "> <a href="form-common.html"> <i class="icon-th-list"></i><span class="label label-important">{{nombreAfficheMarcheSolde}}</span>  MARCHE TERMINE</a> </li>
        <li class="bg_ls"> <a href="buttons.html"> <i class="icon-tint"></i><span class="label label-important">{{formatageSomme(parseFloat(montantMarchePrevu))}}</span>  MONTANT MARCHE PREVU</a> </li>
        <li class="bg_lb"> <a href="interface.html"> <i class="icon-pencil"></i><span class="label label-important">{{formatageSomme(parseFloat(montantMarcheAvecAvenant))}}</span> MONTANT MARCHE EN EXECUTION</a> </li>
        <li class="bg_lg"> <a href="calendar.html"> <i class="icon-calendar"></i><span class="label label-important">{{formatageSomme(parseFloat(budgetConsommerBienService))}}</span>  MONTANT MARCHE CONSOMME</a> </li>
        <li class="bg_lr"> <a href="error404.html"> <i class="icon-info-sign"></i><span class="label label-important">{{formatageSomme(-(montantMarcheAvecAvenant - budgetConsommerBienService))}}</span> MONTANT MARCHE RESTANT </a> </li>
 <li class="bg_lb"> <a href="index.html"> <i class="icon-dashboard"></i> <span class="label label-important">{{((parseFloat(budgetConsommerBienService)/parseFloat(montantMarcheAvecAvenant))*100).toFixed(2)}}%</span> TAUX MARCHE EN EXECUTION </a> </li>
        <!-- <li class="bg_lg span3"> <a href="charts.html"> <i class="icon-signal"></i> Charts</a> </li>
        <li class="bg_ly"> <a href="widgets.html"> <i class="icon-inbox"></i><span class="label label-success">101</span> Widgets </a> </li>
        <li class="bg_lo"> <a href="tables.html"> <i class="icon-th"></i> Tables</a> </li>
        <li class="bg_ls"> <a href="grid.html"> <i class="icon-fullscreen"></i> Full width</a> </li>
        <li class="bg_lo span3"> <a href="form-common.html"> <i class="icon-th-list"></i> Forms</a> </li>
        <li class="bg_ls"> <a href="buttons.html"> <i class="icon-tint"></i> Buttons</a> </li>
        <li class="bg_lb"> <a href="interface.html"> <i class="icon-pencil"></i>Elements</a> </li>
        <li class="bg_lg"> <a href="calendar.html"> <i class="icon-calendar"></i> Calendar</a> </li>
        <li class="bg_lr"> <a href="error404.html"> <i class="icon-info-sign"></i> Error</a> </li> -->
      </ul>
    </div>
    
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

import { formatageSomme } from "../../Repositories/Repository";

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

montantMarcheAvecAvenant() {
      const val = parseFloat(this.affichierMontantAvenant) + parseFloat(this.montantMarcheExecuter);
      return parseFloat(val).toFixed(0);
    },

    affichierMontantAvenant(){
 
  
        
    return this.avenants.filter(element => element.marchetype == 1 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(0); 
      
    
},
 montantMarcheExecuter(){
  return this.getActeEffetFinancierPersonnaliser45.filter(element => element.difference_personnel_bienService == 1 ).reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_act), 0)
},
budgetConsommerBienService(){
  
    return this.getMandatPersonnaliserVise.filter(element => element.marchetype == 1 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2); 
      
  
},



  afficheMarcheEnCoursContratualisation(){
return this.afficherLaListeDesMarche.filter(element => element.attribue == 1 )
},
afficheMarcheEnPlanification(){
return this.afficherLaListeDesMarche.filter(element => element.attribue == 0)
},
afficherLaListeDesMarche(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 3)
},
nombreDeMarche(){
  return this.afficherLaListeDesMarche.length;
},
nombreMarcheEnplanification(){
  return this.afficheMarcheEnPlanification.length;
},
nombreDeMarcheEnContratualisation(){
   return this.afficheMarcheEnCoursContratualisation.length;

 },
 
  afficheMarcheResilier(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => element.marche.attribue == 3 && this.afficheCodeTypeMarche(element.marche.type_marche_id) == 3)
},
    nbreMarcheExecuter(){
  return this.getActeEffetFinancierPersonnaliser45.filter(recuper => recuper.marche.attribue == 2 && this.afficheCodeTypeMarche(recuper.marche.type_marche_id) == 3).length
},
afficheNombreMarcheResilier(){
return this.afficheMarcheResilier.length
},
nombreAfficheMarcheSolde(){
return this.afficheMarcheTerminer.length
},
//     nbreMarcheExecuter(){
//   return this.getActeEffetFinancierPersonnaliser45.filter(recuper => recuper.marche.attribue == 2 && this.afficheCodeTypeMarche(recuper.marche.type_marche_id) == 4).length
// },

montantEnPlanification(){
  return this.afficheMarcheEnPlanification.reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)
},


montantMarchePrevu(){
  return this.marches.filter(element => element.type_marche_id == 5).reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)
},

 afficheIdCodeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },

 afficheCodeTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_type_marche;
      }
      return 0
        }
      };
    },



afficheMarcheTerminer(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => element.marche.attribue == 5)
},


montantEnSolde(){
  return this.afficheMarcheTerminer.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},

  },
  methods: {
    formatageSomme:formatageSomme
  }
};
</script>



<style>


</style>
