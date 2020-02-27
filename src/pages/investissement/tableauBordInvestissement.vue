
<template>
  <div class="container-fluid">
      <!-- <h3 style="text-align:center">TABLEAU DE BORD : BIEN ET SERVICE</h3> -->
    <div class="quick-actions_homepage">
    
      <ul class="quick-actions">

        <li class="bg_lg">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{sommeNombremarcheAttribueInvestisssemnt}}</span> Nombre de marche
          </a>
        </li>

        <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreMarcheInvestissemst}}</span> MARCHES NON ATTRIBUES
          </a>
        </li>

         <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreMarcheAttribueInvestissemst}}</span> MARCHES ATTRIBUES
          </a>
        </li>
         <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(montantGlobalMarcheInvestissement))}}</span> MONTANTS PREVUS DES MARCHES NON ATTRIBUE
          </a>
        </li>

       <li class="bg_ly">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(montantGlobalMarcheAttribueInvestissement))}}</span>MONTANTS DES MARCHES ATTRIBUES
          </a>
        </li>

        <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(montantGlobalMarcheEnCoursExecution))}}</span>MONTANTS DES MARCHES ATTRIBUES
          </a>
        </li>
        <!-- <li class="bg_ly">nombremarchesExecute1   montantGlobalMarche
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreTypeText}}</span>Nombre de type texte
          </a>
        </li> -->
      

      </ul>
     
    </div>
    
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

import { formatageSomme } from "../../../src/Repositories/Repository";

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
    ...mapGetters("bienService", ['nombreMarcheAttribueInvestissemst', "montantGlobalMarcheEnCoursExecution",'montantGlobalMarcheInvestissement','nombreMarcheInvestissemst','acteDepense',"getMarchePersonnaliser","appelOffres",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "montantGlobalMarcheAttribueInvestissement","sommeNombremarcheAttribueInvestisssemnt",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats"]),
   ...mapGetters("uniteadministrative", ["uniteAdministratives"]),



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
