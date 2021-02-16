<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!-- administratifs-->
       <li>
         <router-link :to="{name:'recrutementPersonnel'}" tag="a">
          SUIVI DE RECRUTEMENT
         </router-link>

       </li>
        <li>
         <router-link :to="{name:'Acteur'}" tag="a">
           PERSONNEL
         </router-link>

       </li>
         <li>
         <router-link :to="{name:'paiementPersonnel'}" tag="a">
          PAIEMENT PERSONNEL
         </router-link>

       </li>
    <li>
         <router-link :to="{name:'executionPersonnel'}" tag="a">
           EXECUTION PERSONNEL
         </router-link>

       </li>
        <li>
         <router-link :to="{name:'Mission'}" tag="a">
           SUIVI DES MISSIONS
         </router-link>

       </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  
  computed: {
    ...mapGetters("SuiviImmobilisation", [ "nombreDemandeEquipement"]),
    
 
}
}
</script>
