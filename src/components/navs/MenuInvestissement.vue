<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!-- administratifs-->
       <li>
         <router-link :to="{name:'investissement'}" tag="a">
          SUIVI DES MARCHES 
         </router-link>

       </li>
        <li>
         <router-link :to="{name:'listeMarcheInvestissement'}" tag="a">
           EXECUTION DES MARCHES
         </router-link>

       </li>
    <!-- <li>
         <router-link :to="{name:'pagePresentation'}" tag="a">
           TB
         </router-link>

       </li> -->
    </ul>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "nombreDemandeEquipement"
      
    ]),
    
 
}
}
</script>
