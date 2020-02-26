
<template>
  <div class="container-fluid">
     <!-- <h3 style="text-align:center">TABLEAU DE BORD : UNITE ADMINISTRATIVE</h3> -->
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreUniteZoneValider}}</span> Nbres Unités Zones Validés
          </a>
        </li>
        <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(montantTransfert))}}</span>Montant Transfert
          </a>
        </li>
       <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(montantTransferer))}}</span>Montant Transféré
          </a>
        </li>
         <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{TauxTransfert}}%</span>Taux Transféré
          </a>
        </li>
        
      
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
    ...mapGetters("uniteadministrative", [
      "nombreTypeText",
      "nombreUniteAdministratives",
      "nombreArchivageDocument",
      "montantBudgetGeneral",
      "afficheTransfertValider",
      "nombreUniteZoneValider",
      "transferts",
      "getPersonnaliseBudgetGeneralParTransfert",
      "montantTransfert",
      "montantTransferer"
     
    ]),
   TauxTransfert() {
 
      
    const val = ((parseFloat(this.montantTransferer) / parseFloat(this.montantTransfert))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    

    },
  },
  methods: {
    formatageSomme:formatageSomme
  }
};
</script>



<style>


</style>
