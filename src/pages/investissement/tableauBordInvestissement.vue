
<template>
  <div class="container-fluid">
      <!-- <h3 style="text-align:center">TABLEAU DE BORD : BIEN ET SERVICE</h3> -->
    <div class="quick-actions_homepage">
 
                       <ul class="quick-actions" style="margin: 0px !important;"> 

<li class="bg_lb span3"> <a href="#" style="color:black;"><h4>TOTAL </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{nombreDeMarche}}</span><h4>MARCHE</h4></a> </li>

        <li class="bg_lg span3"> <a href="#" style="color:black;"><h4>MARCHE </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{nombreMarcheEnplanification}}</span><h4> EN PLANIFICATION</h4>  </a> </li>

        <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nombreDeMarcheEnContratualisation}}</span> <h4>EN CONTRATUALISATION</h4></a> </li>
          <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nbreMarcheExecuter}}</span> <h4>EN EXECUTION</h4></a> </li>
                <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>MARCHE</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{afficheNombreMarcheResilier}}</span><h4> RESILIE</h4></a> </li>

        

        <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nombreAfficheMarcheSolde}}</span> <h4> TERMINE</h4></a> </li>
  
<li class="bg_lb span3"> <a href="#" style="color:black;"><h4>MONTANT </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(montantMarchePrevu))}}</span><h4>MARCHE PREVU</h4></a> </li>

        <li class="bg_lg span3"> <a href="#" style="color:black;"><h4>MONTANT MARCHE </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{formatageSomme(parseFloat(montantMarcheAvecAvenant))}}</span><h4> EN EXECUTION</h4>  </a> </li>

        <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MONTANT MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(budgetConsommerBienService))}}</span> <h4>CONSOMME</h4></a> </li>
          <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MONTANT MARCHE</h4> <i class="icon-info-sign"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(-(montantMarcheAvecAvenant - budgetConsommerBienService))}}</span> <h4>RESTANT</h4></a> </li>
       <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>TAUX MARCHE</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{((parseFloat(budgetConsommerBienService)/parseFloat(montantMarcheAvecAvenant))*100).toFixed(2)}}%</span><h4> EN EXECUTION</h4></a> </li>



             
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
 afficherAttributMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },
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
return this.printMarcheNonAttribue.filter(element => this.afficheCodeTypeMarche(element.type_marche_id) == 3 && element.parent_id == null && element.sib==0)
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
return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 3 && this.afficheCodeTypeMarche(element.marche.type_marche_id) == 3)
},
    nbreMarcheExecuter(){
  return this.getActeEffetFinancierPersonnaliser45.filter(recuper => this.afficherAttributMarche(recuper.marche_id) == 2 && this.afficheCodeTypeMarche(recuper.marche.type_marche_id) == 3).length
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
  return this.marches.filter(element => element.type_marche_id == 5 && element.parent_id == null).reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)
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
return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 2 == 5)
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
