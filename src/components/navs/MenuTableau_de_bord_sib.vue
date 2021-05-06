<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
       <li>
            <router-link :to="{name: 'TableauBordGestionSibSimple'}" tag="a">
            TABLEAU DE BORD SIGOBE
            </router-link>
          </li>

          <li>
            <router-link :to="{name: 'tableau_gestion_sib_marche'}" tag="a">
              TABLEAU DE BORD MARCHE SIGOBE
            </router-link>
          </li>
    </ul>
  </div>
</template>

<script>

export default {

};
</script>
