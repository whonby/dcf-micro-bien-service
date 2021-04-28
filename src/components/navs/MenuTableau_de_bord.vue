<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
       <li>
            <router-link :to="{name: 'TableauBordGestionHorsSibSimple'}" tag="a">
            TABLEAU DE BORD HORS SIGOBE
            </router-link>
          </li>
           <li>
            <router-link :to="{name: ''}" tag="a">
              TABLEAU DE BORD BUDGET
            </router-link>
          </li>

          <li>
            <router-link :to="{name: 'TableauBordGestionMarche'}" tag="a">
              TABLEAU DE BORD MARCHE
            </router-link>
          </li>
    </ul>
  </div>
</template>

<script>

export default {

};
</script>
