<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!--Paramètres administratifs-->
      
       <li>
            <router-link :to="{name: 'Acteur'}" tag="a">
              ACTEURS DE LA DEPENSE
            </router-link>
          </li>
     
     


<li class="dropdown" id="mission">
        <a
          title="Suivi des missions"
          href="#"
          data-toggle="dropdown"
          data-target="#mission"
          class="dropdown-toggle"
        >
          <span class="text">SUIVI DES MISSIONS </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to ="{name: 'CategorieMission'}" tag="a">
              <i class="icon-key"></i> Catégories de missions
            </router-link>
          
          </li>

            <li class="divider"></li>
          <li>
            <router-link :to ="{name: 'NormeMission'}" tag="a">
              <i class="icon-key"></i> Norme de missions
            </router-link>
          
          </li>
          <!-- <li class="divider"></li>
            <li> 
              <router-link :to ="{name: 'Imputation'}" tag="a">
                <i class="icon-user"></i> Imputation budget en mission
              </router-link>
            </li> -->
          <li class="divider"></li>
          <li>
            <router-link :to ="{name: 'Mission'}" tag="a">
              <i class="icon-check"></i>
             Missions
            </router-link>
          </li>
        </ul>
      </li>

        <!-- <li>
        <router-link
              :to="{name:'TableauBordImmo'}"
              tag="a"
              title="Tableau de Bord Acteur depense"
            >
          <span class="text">TABLEAU DE BOARD</span>
          
        </router-link>
      
      </li> -->
     
     






      <!--Tableau de bord acteur de depense-->
       <li >
         <router-link :to="{name: 'TableauBordActeurDepense'}" tag="a">
          <span class="text">TABLEAU DE BOARD </span>
         </router-link>
      
      </li>
    </ul>
  </div>
</template>

<script>


export default {

};
</script>
