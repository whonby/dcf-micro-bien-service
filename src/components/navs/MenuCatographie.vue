<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!--Paramètres administratifs-->
      <!-- <li class="dropdown" id="profile-messages">
        <a
          title="Cartographie des opérations budgétaires"
          href="#"
          data-toggle="dropdown"
          data-target="#profile-messages"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Cartographie op.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          
          <li class="divider"></li>
        
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Analyse des opérations
            </a>
          </li>

          
        </ul>
      </li> -->
      
      <!--Paramètres programmes
      -->
     <li>
            <router-link :to="{name:'listeEquipement'}" tag="a">
              <!-- <i class="icon-list-ol"></i> -->
              <span class="text">EQUIPEMENTS TYPE</span>
            </router-link>
          </li>
 <li>
            <router-link :to="{name:'famille'}" tag="a">
              <!-- <i class="icon-shopping-cart"></i> -->
              <span class="text">FAMILLE</span>
            </router-link>
          </li>
<li>
            <router-link :to="{name:'ReferentielDesPrix'}" tag="a">
              <!-- <i class="icon-shopping-cart"></i> -->
              <span class="text">REFERENTIEL DES PRIX</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'StockArticles'}" tag="a">
              <!-- <i class="icon-home"></i> -->
              <span class="text">GESTION DES STOCKS</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'NormeEquipement'}" tag="a">
              <!-- <i class="icon-shopping-cart"></i> -->
              <span class="text">NORME EQUIPEMENT</span>
            </router-link>
          </li>
           <li title="Bessoin Immobilisation">
            <router-link :to="{name:'demandeEquipement'}" tag="a">
              <!-- <i class="icon-list"></i> -->
              <span class="text">DEMANDE EQUIPEMENT</span>   
             
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'immobilisation'}" tag="a">
              <!-- <i class="icon-money"></!--> 
              <span class="text">IMMOBILISATION</span>
            </router-link>
          </li>
       <li class="dropdown" id="tableau">
        <a
          title="Tableau de bord"
          href="#"
          data-toggle="dropdown"
          data-target="#tableau"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">TABLEAU DE BORD</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Simulateur Amortissement
            </a>
          </li>
           <li class="divider"></li>
         <li>
            <router-link :to="{name:'ficheAnalyse'}" tag="a">
              <i class="icon-table"></i>
              <span class="text">Fiche d'analyse</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'listeStructureMoinEquipe'}" tag="a" title>
              <i class="icon-home"></i>
              <span class="text">Structure Moin équipé</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'listeStructurePlusEquipe'}" tag="a" title>
              <i class="icon-home"></i>
              <span class="text">Structure Plus équipé</span>
            </router-link>
          </li>
           <li>
            <router-link :to="{name:'listeActeurEquipe'}" tag="a" title>
              <i class="icon-group"></i>
              <span class="text">Acteur équipé</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>


export default {

};
</script>
