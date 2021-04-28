<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
     <li>
        <router-link :to="{name: 'BudgetEclate'}" tag="a">
          BUDGET ECLATE DES PROJETS
        </router-link>
      </li>
<li>
        <router-link :to="{name: 'UniteAdministrativeRegie'}" tag="a">
          BUDGET DES REGIES
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'recapitulatifBudgetHorsSigobe'}" tag="a">
          RECAPITULATIF BUDGET DES PROJETS
        </router-link>
      </li>
       <!-- <li>
        <router-link :to="{name: 'importationBudgetEclate'}" tag="a">
          IMPORTATION BUDGET
        </router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>


export default {


};
</script>
