

<template>
  <div class="container-fluid">
     <!-- <h3 style="text-align:center">TABLEAU DE BORD : UNITE ADMINISTRATIVE</h3> -->
    <div class="quick-actions_homepage">
      <!-- <ul class="quick-actions"> -->
                               <ul class="quick-actions" style="margin:0px 180px">
         <!-- <li class="bg_lb span5"> <a href="#" style="color:black;"> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialTranferst))}}</span><h3>BUDGET TRANSFERT</h3></a> </li> -->

        <li class="bg_ly span5"> <a href="#" style="color:black;"> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{nombreUniteAdministratives}}</span><h3>NOMBRE UA</h3>  </a> </li>
        <li class="bg_lo span5"> <a href="#" style="color:black;"> <i class="icon-th"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(montantBudgetGeneral))}}</span><h3>BUDGET TOTAL</h3> </a> </li>
        <!-- <li class="bg_ls span5"> <a href="#" style="color:black;"> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{affichierTauxExecution}}%</span> <h3>TAUX EXECUTION</h3></a> </li> -->
  
      </ul>
        <!-- <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreUniteAdministratives}}</span> Nombre Unite d'administrative
          </a>
        </li>
        <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(montantBudgetGeneral))}}</span>Total des lignes Budgetaires
          </a>
        </li> -->
        <!-- <li class="bg_ly">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreTypeText}}</span>Nombre de type texte
          </a>
        </li> -->
      
      <!-- </ul> -->
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
    ...mapGetters("uniteadministrative", [
      "nombreTypeText",
      "nombreUniteAdministratives",
      "nombreArchivageDocument",
      "montantBudgetGeneral"
      // "nbreNouveauProjet"

      // "nbreArchivageNotes"
    ]),
  
  },
  methods: {
    formatageSomme:formatageSomme
  }
};
</script>



<style>


</style>
