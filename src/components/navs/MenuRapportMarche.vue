<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
       <li>
            <router-link :to="{name: 'suiviDesEntreprise'}" tag="a">
             SUIVI ENTREPRISE
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'suiviMarcheDesProjets'}" tag="a">
             MARCHE UA
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'suiviMarcheDesProjetParTypeMarche'}" tag="a">
             MARCHE UA PAR TYPE
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'etatRecapitulative'}" tag="a">
             ETAT RECAPITULATIF
            </router-link>
          </li>
          
   
    </ul>
  </div>
</template>

<script>

export default {

};
</script>
