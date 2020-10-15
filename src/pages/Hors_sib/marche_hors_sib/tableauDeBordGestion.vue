
<template>
  <div class="container-fluid">
      <!-- <h3 style="text-align:center">TABLEAU DE BORD : BIEN ET SERVICE</h3> -->
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
        


        <li class="bg_lb span3"> <a href="#" style="color:black;"><h4>TOTAL </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{nombreDeMarche}}</span><h4>MARCHE</h4></a> </li>

        <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>MARCHE EN</h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{nombreMarcheEnplanification}}</span><h4>PLANIFICATION</h4>  </a> </li>
<li class="bg_lg span3"> <a href="#" style="color:black;"><h4>MARCHE EN</h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{nombreDeMarcheEnContratualisation}}</span><h4> CONTRALISATION</h4>  </a> </li>
<br/>
<br/>
<br/>
<li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MARCHE EN </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{nbreMarcheExecuter}}</span><h4>EXECUTION</h4>  </a> </li>
<li class="bg_ls span3"> <a href="#" style="color:black;"><h4>MARCHE</h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{afficheNombreMarcheResilier}}</span><h4>RESILIE</h4>  </a> </li>
        <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>MARCHE </h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nombreAfficheMarcheSolde}}</span> <h4> TERMINE</h4></a> </li>
     <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MARCHE </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{nombreDeMarcheSuspendu}}</span><h4>SUSPENDU</h4>  </a> </li>
      </ul>
    </div>
    
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

import { formatageSomme } from "../../../Repositories/Repository";

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
  ...mapGetters("horSib", ["gettersMarcheHorsib"]),


   nombreDeMarcheSuspendu(){
return this.gettersMarcheHorsib.filter(element => element.attribue == 7 && element.plan_passation_marche_id==null && element.sib==1).length
},



  nombreDeMarcheEnContratualisation(){
return this.gettersMarcheHorsib.filter(element => element.attribue == 1 && element.plan_passation_marche_id==null && element.sib==1).length
},
nombreMarcheEnplanification(){
return this.gettersMarcheHorsib.filter(element => element.attribue == 0 && element.plan_passation_marche_id==null && element.sib==1).length
},
afficheNombreMarcheResilier(){
return this.gettersMarcheHorsib.filter(element => element.attribue == 3 && element.plan_passation_marche_id==null && element.sib==1).length
},
nbreMarcheExecuter(){
return this.gettersMarcheHorsib.filter(element => element.attribue == 2 && element.plan_passation_marche_id==null && element.sib==1).length
},
nombreAfficheMarcheSolde(){
return this.gettersMarcheHorsib.filter(element => element.attribue == 5 && element.plan_passation_marche_id==null && element.sib==1).length
},
// marches(){
// return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 4 || element.type_marche.code_type_marche == 1)
// },
nombreDeMarche(){
  return this.gettersMarcheHorsib.filter(item => item.sib==1 && item.plan_passation_marche_id==null).length;
},







  },
  methods: {
    formatageSomme:formatageSomme
  }
};
</script>



<style>


</style>
