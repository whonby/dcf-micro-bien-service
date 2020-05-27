
<template>
  <div class="container-fluid">
      <!-- <h3 style="text-align:center">TABLEAU DE BORD : BIEN ET SERVICE</h3> -->
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <!-- <li class="bg_lb"> <a href="#"> <i class="icon-dashboard"></i> <span class="label label-important">{{nombreDeMarche}}</span> TOTAL MARCHE</a> </li>
        <li class="bg_lo"> <a href="#"> <i class="icon-signal"></i><span class="label label-important">{{nombreMarcheEnplanification}}</span>  MARCHE EN PLANIFICATION</a> </li>
        <li class="bg_lg"> <a href="#"> <i class="icon-inbox"></i><span class="label label-success">{{nombreDeMarcheEnContratualisation}}</span> MARCHE EN CONTRALISATION </a> </li>
        <li class="bg_ly"> <a href="#"> <i class="icon-th"></i> <span class="label label-important">{{nbreMarcheExecuter}}</span> MARCHE EN EXECUTION</a> </li>
        <li class="bg_ls "> <a href="#"> <i class="icon-fullscreen"></i><span class="label label-important">{{afficheNombreMarcheResilier}}</span>  MARCHE RESILIE</a> </li>
        <li class="bg_lo "> <a href="#"> <i class="icon-th-list"></i><span class="label label-important">{{nombreAfficheMarcheSolde}}</span>  MARCHE TERMINE</a> </li>
         -->


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

import { formatageSomme } from "../../../src/Repositories/Repository";

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
 
  
        
    return this.avenants.filter(element => element.marchetype == 2 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(0); 
      
    
},
 montantMarcheExecuter(){
  return this.getActeEffetFinancierPersonnaliser45.filter(element => element.difference_personnel_bienService == 2 ).reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_act), 0)
},
budgetConsommerBienService(){
  
    return this.getMandatPersonnaliserVise.filter(element => element.marchetype == 2 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2); 
      
  
},

   nombreDeMarcheSuspendu(){
return this.marches.filter(element => element.attribue == 7 ).length
},



  nombreDeMarcheEnContratualisation(){
return this.marches.filter(element => element.attribue == 1 ).length
},
nombreMarcheEnplanification(){
return this.marches.filter(element => element.attribue == 0).length
},
afficheNombreMarcheResilier(){
return this.marches.filter(element => element.attribue == 3).length
},
nbreMarcheExecuter(){
return this.marches.filter(element => element.attribue == 2).length
},
nombreAfficheMarcheSolde(){
return this.marches.filter(element => element.attribue == 5).length
},
// marches(){
// return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 4 || element.type_marche.code_type_marche == 1)
// },
nombreDeMarche(){
  return this.marches.length;
},
// nombreMarcheEnplanification(){
//   return this.afficheMarcheEnPlanification.length;
// },
// nombreDeMarcheEnContratualisation(){
//    return this.afficheMarcheEnCoursContratualisation.length;

//  },
 
 
//   afficheMarcheResilier(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => element.marche.attribue == 3 && this.afficheCodeTypeMarche(element.marche.type_marche_id) == 4 )
// },
//     nbreMarcheExecuter(){
//   return this.getActeEffetFinancierPersonnaliser45.filter(recuper => recuper.marche.attribue == 2 && this.afficheCodeTypeMarche(recuper.marche.type_marche_id) == 4).length
// },
// afficheNombreMarcheResilier(){
// return this.afficheMarcheResilier.length
// },
// nombreAfficheMarcheSolde(){
// return this.afficheMarcheTerminer.length
// },
//     nbreMarcheExecuter(){
//   return this.getActeEffetFinancierPersonnaliser45.filter(recuper => recuper.marche.attribue == 2 && this.afficheCodeTypeMarche(recuper.marche.type_marche_id) == 4).length
// },

montantEnPlanification(){
  return this.afficheMarcheEnPlanification.reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)
},


montantMarchePrevu(){
  return this.marches.filter(element => element.type_marche_id == 6 || element.type_marche_id == 1 ).reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)
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
