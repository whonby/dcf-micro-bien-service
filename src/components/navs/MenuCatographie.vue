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
     <!-- <li>
            <router-link :to="{name:'listeEquipement'}" tag="a">
            
              <span class="text">EQUIPEMENTS TYPE</span>
            </router-link>
          </li>
 <li>
            <router-link :to="{name:'famille'}" tag="a">
       
              <span class="text">FAMILLE</span>
            </router-link>
          </li>
<li>
            <router-link :to="{name:'ReferentielDesPrix'}" tag="a">
              
              <span class="text">REFERENTIEL DES PRIX</span>
            </router-link>
          </li> -->
         
          <!-- <li>
            <router-link :to="{name:'NormeEquipement'}" tag="a">
              <i class="icon-shopping-cart"></i>
              <span class="text">NORME EQUIPEMENT</span>
            </router-link>
          </li> -->
           <li title="Stock">
            <router-link :to="{name:'StockArticles'}" tag="a">
              <!-- <i class="icon-list"></i> -->
              <span class="text">GESTIONS DE STOCK</span>   
             
            </router-link>
          </li>
           <!-- <li title="Bessoin Immobilisation">
            <router-link :to="{name:'demandeEquipement'}" tag="a">
              <i class="icon-list"></i> 
              <span class="text">DEMANDE EQUIPEMENT</span>   
             
            </router-link>
          </li> -->
            <li title="Immobilisation">
            <router-link :to="{name:'historisqueAffection'}" tag="a">
              <!-- <i class="icon-list"></i> -->
              <span class="text">DEMANDE EQUIPEMENT</span>   
             
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'immobilisation'}" tag="a">
              <!-- <i class="icon-money"></!--> 
              <span class="text">AFFECTATION</span>
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
         
          <span class="text">TABLEAU DE BORD</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          
          
         <li>
            <router-link :to="{name:'simulationAmortissement'}" tag="a">
              <i class="icon-table"></i>
              <span class="text">simulation Amortissement</span>
            </router-link>
          </li>
           <li class="divider"></li>
           
         <li>
            <router-link :to="{name:'ficheAnalyse'}" tag="a">
              <i class="icon-table"></i>
              <span class="text">Fiche d'analyse</span>
            </router-link>
          </li>
           <li class="divider"></li>
          <!-- <li>
            <router-link :to="{name:'listeStructureMoinEquipe'}" tag="a" title>
              <i class="icon-home"></i>
              <span class="text">Structure Moin équipé</span>
            </router-link>
          </li> -->
          <!-- <li>
            <router-link :to="{name:'listeStructurePlusEquipe'}" tag="a" title>
              <i class="icon-home"></i>
              <span class="text">Structure Plus équipé</span>
            </router-link>
          </li> -->
           <!-- <li>
            <router-link :to="{name:'listeActeurEquipe'}" tag="a" title>
              <i class="icon-group"></i>
              <span class="text">Personnel équipé</span>
            </router-link>
          </li> -->
          
           <li>
            <router-link :to="{name:'listeBesoinRealise'}" tag="a" title>
              <i class="icon-group"></i>
              <span class="text">Listes Besoins Realisés</span>
            </router-link>
          </li>
           <li class="divider"></li>
           <li>
            <router-link :to="{name:'historiqueDemande'}" tag="a" title>
              <i class="icon-group"></i>
              <span class="text">Historique Besoins</span>
            </router-link>
          </li>
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
