<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!-- administratifs-->
      <li>
        <router-link :to="{ name: 'OrdrePaiementParPeriode' }" tag="a">
          ORDRE PAIEMENT PROJET
        </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'OrdrePaiementParRegie' }" tag="a">
          ORDRE PAIEMENT REGIE
        </router-link>
      </li>

       <li>
        <router-link :to="{ name: 'SituationExecutionLigne' }" tag="a">
          SITUATION D'EXECUTION PROJET
        </router-link>
      </li>

       <li>
        <router-link :to="{ name: 'SituationExecutionRecapProjet' }" tag="a">
          SITUATION D'EXECUTION RECAP PROJET
        </router-link>
      </li>

       <li>
        <router-link :to="{ name: 'SituationExecutionRecapRegie' }" tag="a">
          SITUATION D'EXECUTION RECAP REGIE
        </router-link>
      </li>
      <!-- <li>
         <router-link :to="{name:''}" tag="a">
           PERSONNEL
         </router-link>

       </li>
         <li>
         <router-link :to="{name:''}" tag="a">
          PAIEMENT PERSONNEL
         </router-link>

       </li>
    <li>
         <router-link :to="{name:''}" tag="a">
           EXECUTION PERSONNEL
         </router-link>

       </li>
        <li>
         <router-link :to="{name:'Mission'}" tag="a">
           SUIVI DES MISSIONS
         </router-link>

       </li> -->
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("SuiviImmobilisation", ["nombreDemandeEquipement"]),
  },
};
</script>
