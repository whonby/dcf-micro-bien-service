
<template>
  <div class="container-fluid">
      <!-- <h3 style="text-align:center">TABLEAU DE BORD : BIEN ET SERVICE</h3> -->
    <div class="quick-actions_homepage">
    
      <ul class="quick-actions">
        <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombremarches}}</span> MARCHES NON ATTRIBUES
          </a>
        </li>
         <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombremarchesExecute}}</span> MARCHES ATTRIBUES
          </a>
        </li>
         <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(montantGlobalMarche))}}</span> MONTANT GLOBAL DES MARCHES
          </a>
        </li>
        <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(montantGlobalMarcheEnCoursExecution))}}</span>MONTANT DES MARCHES ATTRIBUES
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
    ...mapGetters("bienService", ['nombremarchesExecute', "montantGlobalMarcheEnCoursExecution",'montantGlobalMarche','nombremarches','acteDepense',"getMarchePersonnaliser","appelOffres",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
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
