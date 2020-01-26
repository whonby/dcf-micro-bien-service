
<template>
  <div class="container-fluid">
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{}}</span> NOMBRES DE MARCHES
          </a>
        </li>
         <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{}}</span> MONTANT GLOBAL DES MARCHES
          </a>
        </li>
        <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme(parseFloat())}}</span>Total des lignes Budgetaires
          </a>
        </li>
        <!-- <li class="bg_ly">
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
    ...mapGetters("bienService", [ 'acteDepense',"getMarchePersonnaliser","appelOffres",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats"]),
  
  },
  methods: {
    formatageSomme:formatageSomme
  }
};
</script>



<style>


</style>
