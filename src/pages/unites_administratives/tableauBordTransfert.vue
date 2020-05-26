
<template>
  <div class="container-fluid">
     <!-- <h3 style="text-align:center">TABLEAU DE BORD : UNITE ADMINISTRATIVE</h3> -->
    <div class="quick-actions_homepage">
      <!-- <ul class="quick-actions">
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
        
      
      </ul> -->
       <!-- <ul class="quick-actions"> -->
                               <ul class="quick-actions" style="margin:0px 100px">
         <li class="bg_lb span4"> <a href="#" style="color:black;"> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{nombreUniteZoneValider}}</span><h3>Nbres Unités Zones</h3></a> </li>

        <li class="bg_ly span4"> <a href="#" style="color:black;"> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{formatageSomme(parseFloat(montantTransfert))}}</span><h3>Montant Transfert</h3>  </a> </li>

        <li class="bg_ls span4"> <a href="#" style="color:black;"> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{TauxTransfert}}%</span> <h3>Taux Transféré</h3></a> </li>
  
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
