<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">


       <li>
            <router-link :to="{name: 'marche'}" tag="a">
              SUIVI DES MARCHES
            </router-link>
          </li>
     <li>
   <li>
            <router-link :to="{name: 'executionMarche'}" tag ="a">
              EXECUTION DU MARCHES
            </router-link>
          </li>
     
    </ul>
  </div>
</template>

<script>

export default {

};
</script>
