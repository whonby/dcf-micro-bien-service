<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
       <li>
            <router-link :to="{name: 'suivi_marhe'}" tag="a">
              SUIVI DES MARCHES HORS SIB
            </router-link>
          </li>
     <li>
   <li>
            <router-link :to="{name: 'executionMarche'}" tag ="a">
              EXECUTION DU MARCHES
            </router-link>
          </li>
     <!-- <li> 
            <router-link :to="{name: 'indicateurBienService'}" tag="a">
              SUIVI DES MARCHES
            </router-link>
          </li> -->
    </ul>
  </div>
</template>

<script>

export default {

};
</script>
