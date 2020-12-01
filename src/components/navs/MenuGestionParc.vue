<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
       <li>
            <router-link :to="{name: 'ListeVehicules'}" tag="a">
              SAISIE VEHICULE
            </router-link>
          </li>
     <li>
   <li>
            <router-link :to="{name: 'affectationVehicule'}" tag ="a">
              AFFECTATION VEHICULE
            </router-link>
          </li>
           <!-- <li>
            <router-link :to="{name: 'listeMarcheBienEtServiceHS'}" tag ="a">
              REPARATION VEHICULE
            </router-link>
          </li> -->
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
