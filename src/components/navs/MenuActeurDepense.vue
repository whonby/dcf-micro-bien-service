<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!--Paramètres administratifs-->
      <li class="dropdown" id="profile-messages">
        <a
          title="Parametres"
          href="#"
          data-toggle="dropdown"
          data-target="#profile-messages"
          class="dropdown-toggle"
        >
          <span class="text">PARAMETRES </span> 
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'TypeActePersonnels'}" tag="a">
              <i class="icon-user"></i>
              Type d'acte
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Fonction'}" tag="a">
              <i class="icon-check"></i>
              Fonction
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Classe'}" tag="a">
              <i class="icon-key"></i> Classe
            </router-link>
          </li>

           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Echelons'}" tag="a">
              <i class="icon-check"></i>
              Echelons
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Grades'}" tag="a">
              <i class="icon-key"></i> Grades
            </router-link>
          </li>
           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'NiveauEtude'}" tag="a">
              <i class="icon-check"></i>
              Niveau d'étude
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'TypeSalarie'}" tag="a">
              <i class="icon-key"></i> Type de salarié
            </router-link>
          </li>
           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'TypeContrat'}" tag="a">
              <i class="icon-key"></i> Type de contrat
            </router-link>
          </li>
        </ul>
      </li>
      <!--Source de financement  -->
      <li class="dropdown" id="depense">
        <a
          title="Acteur de la depense"
          href="#"
          data-toggle="dropdown"
          data-target="#depense"
          class="dropdown-toggle"
        >
          <span class="text">ACTEURS DE LA DEPENSE </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'Acteur'}" tag="a">
              <i class="icon-user"></i>
              Acteurs
            </router-link>
          </li>
         <!-- <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
             Acte de personnel
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Conge'}" tag="a">
              <i class="icon-key"></i> Suivi des congés
            </router-link>
          </li>-->
        </ul>
      </li>
      <!--Paramètres programmes
      -->
     


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
