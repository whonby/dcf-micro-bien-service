<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!-- <li>
        <router-link :to="{ name: 'ListeDesOrdresPaiement' }" tag="a">
          ORDRE PAIEMENT DES PROJETS
        </router-link>
      </li> -->
      <!-- <li>
        <router-link :to="{ name: 'AutresDepense' }" tag="a">
          AUTRES DEPENSES
        </router-link>
      </li> -->

      <li>
        <router-link :to="{ name: 'ListeOpParUa' }" tag="a">
          ORDRE PAIEMENT DES PROJETS
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'listeDesUaDesRegie' }" tag="a">
          ORDRE PAIEMENT DES REGIES
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'groupeUaDecompte' }" tag="a">
          DECOMPTE ANTERIEUR
        </router-link>
      </li>

      <!-- <li>
        <router-link :to="{ name: 'PersonneRattacher' }" tag="a">
          PERSONNE RATTACHER
        </router-link>
      </li> -->

      <!-- <li>
        <router-link :to="{name: 'TestTableaux'}" tag="a">
          TABLEAUX
        </router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {};
</script>
