<template>


    <!--top-Header-menu-->
    <div id="user-nav" class="navbar navbar-inverse">
        <ul class="nav">
            <li class="dropdown" id="source_financement">
        <a title = "Source de financement" href="#" data-toggle="dropdown" data-target="#source_financement" class="dropdown-toggle">
          <span class="text"> GESTION DES MODULE </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          
           <li>
            <router-link :to="{name:'module'}" tag="a">
              <i class="icon-key"></i> Module
            </router-link>
          </li>
             <li class="divider"></li>

          <li>
           
             <router-link :to="{name:'menus'}" tag="a">
              <i class="icon-check"></i> Menu
            </router-link>
          </li>
         <li class="divider"></li>
        </ul>
      </li>
           
             <li class="dropdown" id="group">
        <a title = "Gestion de groupe" href="#" data-toggle="dropdown" data-target="#group" class="dropdown-toggle">
          <span class="text"> GESTION DES GROUPES </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          
           <li>
            <router-link :to="{name:'groupe'}" tag="a">
              <i class="icon-key"></i>Groupe
            </router-link>
          </li>
             <li class="divider"></li>

          <li>
           
             <router-link :to="{name:'add_groupe'}" tag="a">
              <i class="icon-check"></i> Attribuer des droits
            </router-link>
          </li>
         <li class="divider"></li>
        </ul>
      </li>
            <!-- <li>
                <router-link :to="{name: 'groupe'}" tag="a">
                   GROUPES
                </router-link>
            </li> -->
            <li class="dropdown" id="aff">
        <a title = "Gestion de groupe" href="#" data-toggle="dropdown" data-target="#aff" class="dropdown-toggle">
          <span class="text"> GESTION DES AFFECTATIONS </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          
           <li>
            <router-link :to="{name:'affectation'}" tag="a">
              <i class="icon-key"></i>Affectations
            </router-link>
          </li>
             <li class="divider"></li>

          <li>
           
             <router-link :to="{name:'liste_affectation'}" tag="a">
              <i class="icon-check"></i> Liste des affectations
            </router-link>
          </li>
         <li class="divider"></li>
        </ul>
      </li>
            <!-- <li>
                <router-link :to="{name: 'affectation'}" tag="a">
                   AFFECTATION
                </router-link>
            </li> -->
            <!-- <li>
                <router-link :to="{name: 'MonEquipe'}" tag="a">
                    MON EQUIPE
                </router-link>
            </li> -->
            <!-- <li class="" id="out">
             <a title="Indicateur" href="#" class="">
               <i class="icon icon-users"></i>
               <span class="text">Indicateurs </span>
             </a>
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
               <span class="text">Tableau de bord</span>
               <b class="caret"></b>
             </a>
             <ul class="dropdown-menu">

               <li class="divider"></li>
               <li>
                 <a href="login.html">
                   <i class="icon-key"></i> Tableau de bord
                 </a>
               </li>
             </ul>
           </li> -->
        </ul>
    </div>
</template>

<script>

    export default {


    };
</script>
