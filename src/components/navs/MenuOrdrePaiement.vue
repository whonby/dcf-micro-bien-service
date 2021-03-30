<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
     <li>
        <router-link :to="{name: 'ListeDesOrdresPaiement'}" tag="a">
          ORDRE PAIEMENT DES PROJETS
        </router-link>
      </li>
<li>
        <router-link :to="{name: 'OrdrePaiementRegie'}" tag="a">
          ORDRE PAIEMENT DES REGIES
        </router-link>
      </li>
<li>
        <router-link :to="{name: 'AjouterDecomptePrecedant'}" tag="a">
          DECOMPTE ANTERIEUR
        </router-link>
      </li>
      <!-- <li>
        <router-link :to="{name: 'TestTableaux'}" tag="a">
          TABLEAUX
        </router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>


export default {


};
</script>
