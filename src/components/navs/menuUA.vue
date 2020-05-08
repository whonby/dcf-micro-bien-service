<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!--Paramètres administratifs-->
      <!-- <li class="dropdown" id="profile-messages">
        <a
          title="Unité administrative"
          href="#"
          data-toggle="dropdown"
          data-target="#profile-messages"
          class="dropdown-toggle"
        >
          <span class="text">UNITES ADMINISTRATIVES </span>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'uniteadministrative'}" tag="a">
              <i class="icon-user"></i>
              Gestion des unites administratives
            </router-link>
          </li>
        </ul>
      </li> -->

       <!-- <li>
            <router-link :to="{name: 'uniteadministrative'}" tag="a">
              UNITES ADMINISTRATIVES
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'uniteZone'}" tag="a">
              UNITES DE ZONE
            </router-link>
          </li> -->
        
  <li class="dropdown" id="menuBUDGET">
        <a
          title="UNITES ADMINISTRATIVES"
          href="#"
          data-toggle="dropdown"
          data-target="#menuBUDGET"
          class="dropdown-toggle"
        >
          <span class="text">UNITES ADMINISTRATIVES</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'uniteadministrative'}" tag="a">
              <i class="icon-user"></i>
            Unite administrative
            </router-link>
          </li>

          <li class="divider"></li>
          <!-- <li>
            <router-link :to="{name: 'DirectionPrincipal'}" tag="a">
              <i class="icon-key"></i>Direction UA
            </router-link>
          </li> -->
            <li>
            <router-link :to="{name: 'uniteZone'}" tag="a">
              <i class="icon-key"></i>Unite zone
            </router-link>
          </li>
           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ServicePrincipal'}" tag="a">
              <i class="icon-key"></i>Service UA
            </router-link>
          </li>
           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'FonctionPrincipal'}" tag="a">
              <i class="icon-key"></i>Fonction UA
            </router-link>
          </li>
            <li class="divider"></li>
        <!-- <li>
            <router-link :to="{name: 'banqueUa'}" tag="a">
              <i class="icon-key"></i>Banque UA
            </router-link>
          </li> -->
           <!-- <li class="divider"></li>
        <li>
            <router-link :to="{name: 'Organigramme'}" tag="a">
              <i class="icon-key"></i>Organigramme UA
            </router-link>
          </li> -->
           <li class="divider"></li>
         <li>
           <router-link :to="{name: 'banqueUa'}" tag="a">
             <i class="icon-key"></i>Banque UA
            </router-link>
         </li>
           <li class="divider"></li>
        
        </ul>
      </li>
        <li>
            <router-link :to="{name: 'budgetGenerals'}" tag="a">
              BUDGET PAR UA
            </router-link>
          </li>


           <li>
            <router-link :to="{name: 'BudgetParUa'}" tag="a">
              DETAIL DE BUDGET PAR UA
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'ImportBudget'}" tag="a">
              IMPORTATION DU BUDGET
            </router-link>
          </li>
<!-- <li class="dropdown" id="Affichebudget">
        <a
          title="OUT PUT"
          href="#"
          data-toggle="dropdown"
          data-target="#Affichebudget"
          class="dropdown-toggle"
        >
          <span class="text"> BUDGET</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
           <li>
            <router-link :to="{name: 'ImportBudget'}" tag="a">
              <i class="icon-user"></i>
            Importe le budget
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'grpeBudgetSection'}" tag="a">
              <i class="icon-user"></i>
              Budget General par section
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'historiquebudgetGeneralComponent'}" tag="a">
              <i class="icon-key"></i>Historique Budget General 
            </router-link>
          </li>
        </ul>
      </li> -->


<li class="dropdown" id="rechbudget">
        <a
          title="OUT PUT"
          href="#"
          data-toggle="dropdown"
          data-target="#rechbudget"
          class="dropdown-toggle"
        >
          <span class="text">OUT PUT</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'budgetGeneralParUa'}" tag="a">
              <i class="icon-user"></i>
              Budget General
            </router-link>
          </li>
<!-- <li>
            <router-link :to="{name: 'grpeBudgetProg'}" tag="a">
              <i class="icon-user"></i>
              Budget par Programme
            </router-link>
          </li> -->
          <li class="divider"></li>
          <!-- <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-key"></i>Budget global
            </router-link>
          </li> -->
        </ul>
      </li>



      <!--Source de financement-->
      <!-- <li class="dropdown" id="menu-messages">
        <a
          title="Documentation"
          href="#"
          data-toggle="dropdown"
          data-target="#menu-messages"
          class="dropdown-toggle"
        >
          <span class="text">DOCUMENTATION </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'typetext'}" tag="a">
              <i class="icon-user"></i>
              Type de texte
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'archivagedocument'}" tag="a">
              <i class="icon-key"></i>Archivage Document
            </router-link>
          </li>
        </ul>
      </li> -->
      <!--Paramètres programmes
      -->
<!-- 
      <li class="dropdown" id="listeua">
        <a
          title="Out put"
          href="#"
          data-toggle="dropdown"
          data-target="#listeua"
          class="dropdown-toggle"
        >
          <span class="text">OUT PUT</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'listeuniteadministrative'}" tag="a">
              <i class="icon-user"></i>
              Listes Unites Administratives
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'listetypetexte'}" tag="a">
              <i class="icon-user"></i>
              Listes Types Textes
            </router-link>
          </li>

          <li>
            <router-link :to="{name: 'ordonnedocua'}" tag="a">
              <i class="icon-user"></i>
              Listes Archivages Documents
            </router-link>
          </li>
        </ul>
      </li>
    -->

      <!--- tableau de bord -->
        <!-- <li>
            <router-link :to="{name: 'tableaudebord'}" tag="a">
              TABLEAU DE BOARD
            </router-link>
          </li>
      -->
    </ul>
  </div>
</template>

<script>


export default {};
</script>
