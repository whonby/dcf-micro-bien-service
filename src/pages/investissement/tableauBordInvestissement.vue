
<template>
  <div class="container-fluid">
      <!-- <h3 style="text-align:center">TABLEAU DE BORD : BIEN ET SERVICE</h3> -->
    <div class="quick-actions_homepage">
    
      <ul class="quick-actions">
        <li class="bg_ls">
          <a href="#" title="nombre de marché d'investissement">
            <i class="icon-list-ol"></i>
            <span class="label label-inverse">{{nombreMarcheinvestissement}}</span> Nombre de marché I.
          </a>
        </li>

        <li class="bg_lo">
          <a href="#" title="nombre de marché planifié d'investissement">
            <i class="icon-list-ol"></i>
            <span  title="marche Planifié en investissment" class="label label-important" >{{nombreMarchePlanifier}}</span> Nombre de marché planfié I.
          </a>
        </li>

        <li class="bg_ly">
          <a href="#" title=" nombre de marché en contratualisation d'investissement">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{nombreMarcheContratualisation}}</span>Nombre de marché en contratualisation
          </a>
        </li>

         <li class="bg_lb">
          <a href="#" title="nombre de marche en execution d'investissement">
            <i class="icon-list-ol"></i>
            <span class="label label-warning">{{afficheNombreMarchExecuter}}</span> Marché en exécution I
          </a> 
        </li>
         <li class="bg_ls">
          <a href="#" title=" montant des marchés planifiés d'investissement">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(MontantMarcheInvestissement))}}</span> MONTANTS PREVU DES MARCHES / PLANIFIE I.
          </a>
        </li>
        <li class="bg_lg">
          <a href="#" title=" montant du marché en contratualisation d'investissement">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(montantMarcheContratualisationInvestissement))}}</span>Montant des marchés en contratualisation
          </a>
        </li>
        

        <li class="bg_lr">
          <a href="#" title=" montant du marché en execution d'investissement">
            <i class="icon-list-ol"></i>
            <span class="label label-warning">{{formatageSomme(parseFloat(afficheMarchExecuter))}}</span>Montant des marchés en execution I.
          </a>
        </li>

      </ul>
     
    </div>
    
  </div>
</template>
  
  
<script>
import { mapGetters } from "vuex";

import { formatageSomme } from "../../Repositories/Repository";

export default {
  name:'tableauBordInvestissement',
  
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

    //   ...mapGetters('investissement'['']),
    ...mapGetters("bienService", ['nombreMarcheExecuteInvestissement',"nombreMarcheContratualisation",
    'MontantMarcheInvestissement','montantMarcheContratualisationInvestissement',"montantMarcheExecutionInvestissement",
    'nombreMarcheinvestissement','acteDepense',"getMarchePersonnaliser","appelOffres","nombreMarchePlanifier",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches","getActeEffetFinancierPersonnaliser45",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats"]),
   ...mapGetters("uniteadministrative", ["uniteAdministratives"]),



// affiche le montant de marche en contratualisation

   

// montantMarcheContratualisationInvestissement(){
//   return this.nombreMarcheContratualisation.reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)

// }

 // afficher le nombre de marche executé d'investissement

//  afficheNombreMarchExecuter(){
// return this.getActeEffetFinancierPersonnaliser.filter(element => element.mache != 1).length
// },


   afficheMarchExecuter(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => element.marche.attribue == 2 && element.AfficheMarche.type_marche.code_type_marche == 3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
},



afficheNombreMarchExecuter(){

  
return this.afficheMarchExecuter.length
},

//   afficheNombreMarchExecuter(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => element.marche.attribue == 2 && element.AfficheMarche.type_marche.code_type_marche == 3)
// },

// afficher le montant d'execution 

// montantMarcheExecution(){
//   return this.getActeEffetFinancierPersonnaliser.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
// },


//    nbreMarcheParUa(){
//   return uniteadmin_id => {
//     if(uniteadmin_id !=""){
  
        
//     return this.marches.filter(element => element.unite_administrative_id == uniteadmin_id).length; 
      
//     }
//     return 0
//   }
// },
  },
  methods: {




    formatageSomme:formatageSomme
  }
};
</script>



<style>


</style>
