<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
       <li>
            <router-link :to="{name: 'ReparationVehicule'}" tag="a">
             REPARATION VEHICULES
            </router-link>
          </li>
   <!-- <li>
            <router-link :to="{name: 'affectationVehicule'}" tag ="a">
              REPARATION MOBILIERS & MATERIELS
            </router-link>
          </li> -->
           <!-- <li>
            <router-link :to="{name: 'listeMarcheBienEtServiceHS'}" tag ="a">
              Réparation véhicule
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
