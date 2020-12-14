<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
 <li title="Stock">
                <router-link :to="{name:'ListeStockArticleVehicule'}" tag="a">
                    <!-- <i class="icon-list"></i> -->
                    <span class="text">GESTION DES STOCKS</span>

                </router-link>
            </li>
<li class="dropdown" id="comptaMatiere">
        <a title="SAISIE & AFFECTATION" href="#" data-toggle="dropdown" data-target="#comptaMatiere" class="dropdown-toggle">
          <span class="text">SAISIE & AFFECTATION</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ListeVehicules'}" tag="a">
              <i class="icon-check"></i>
             Saisie Véhicule
            </router-link>
          </li>
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'affectationVehicule'}" tag="a">
              <i class="icon-check"></i>
             Afféctation Véhicule
            </router-link>
          </li>
            <li class="divider"></li>
          
        </ul>
      </li>
<li>
                <router-link :to="{name:'ReparationVehicule'}" tag="a">
                    <!-- <i class="icon-money"></!-->
                    <span class="text">REPARATION VEHICULE</span>
                </router-link>
            </li>
<!-- <li class="dropdown" id="comptaMatiere1">
        <a title="SAISIE & AFFECTATION" href="#" data-toggle="dropdown" data-target="#comptaMatiere1" class="dropdown-toggle">
          <span class="text">REPARATION</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ReparationVehicule'}" tag="a">
              <i class="icon-check"></i>
             Véhicule
            </router-link>
          </li>
            <li class="divider"></li>
         <li>
            <router-link :to="{name: ''}" tag ="a">
              <i class="icon-check"></i>
              Mobiliers & Matériels
             
            </router-link>
          </li>
            <li class="divider"></li>
          
        </ul>
      </li> -->
<li class="dropdown" id="comptaMatiere2">
        <a title="SAISIE & AFFECTATION" href="#" data-toggle="dropdown" data-target="#comptaMatiere2" class="dropdown-toggle">
          <span class="text">EXECUTION DES REPARATIONS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ExecutionReparationVehicule'}" tag="a">
              <i class="icon-check"></i>
             Véhicule
            </router-link>
          </li>
            <li class="divider"></li>
         <!-- <li>
            <router-link :to="{name: ''}" tag ="a">
              <i class="icon-check"></i>
              Mobiliers & Matériels
             
            </router-link>
          </li> -->
            <li class="divider"></li>
          
        </ul>
      </li>
       
    </ul>
  </div>
</template>

<script>

export default {

};
</script>
