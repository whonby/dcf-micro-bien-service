<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    
    <ul class="nav">
      <!-- administratifs-->
     
      <li class="dropdown" id="Activite">
        <a title="FOURNISSEURS" href="#" data-toggle="dropdown" data-target="#Activite" class="dropdown-toggle">
          <span class="text">FOURNISSEURS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          
         
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'SecteurActivite'}" tag="a">
              <i class="icon-user"></i>
            Secteur d'activité
            </router-link>
          </li>
          <li class="divider"></li>
         
          <li>
            <router-link :to="{name: 'Entreprise'}" tag="a">
              <i class="icon-check"></i>
             Entreprises
            </router-link>
          </li>
         
        </ul>
      </li>
      
    
    
        <li class="dropdown" id="comptaMatiere">
        <a title="IMMOBILISATIONS" href="#" data-toggle="dropdown" data-target="#comptaMatiere" class="dropdown-toggle">
          <span class="text">IMMOBILISATIONS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'natureEntre'}" tag="a">
              <i class="icon-check"></i>
             Nature des entrées
            </router-link>
          </li>
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'CauseInactivite'}" tag="a">
              <i class="icon-check"></i>
             Cause d'inactivité
            </router-link>
          </li>
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'EtatImmobilisation'}" tag="a">
              <i class="icon-check"></i>
            Etat Immobilisation
            </router-link>
          </li>
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'listeEquipement'}" tag="a">
              <i class="icon-check"></i>
            Groupe d'équipement
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: 'famille'}" tag="a">
              <i class="icon-bar-chart"></i>
           Famille équipement
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: 'taux'}" tag="a">
              <i class="icon-user"></i> Taux
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: 'ReferentielDesPrix'}" tag="a">
              <i class="icon-bar-chart"></i>
           Référentiel des prix
            </router-link>
          </li>
          <li class="divider"></li>
           <!-- <li>
            <router-link :to="{name:'StockArticles'}" tag="a">
              <i class="icon-home"></i> 
               <i class="icon-user"></i> Gestion des stocks
             
            </router-link>
          </li> -->
           <li>
            <router-link :to="{name:'NormeImmo'}" tag="a">
              <!-- <i class="icon-home"></i> -->
               <i class="icon-user"></i> Equipement Type(Norme)
             
            </router-link>
          </li>
        </ul>
      </li>

     <li class="dropdown" id="code">
        <a title="CODIFICATION VEHICULE" href="#" data-toggle="dropdown" data-target="#code" class="dropdown-toggle">
          <span class="text">CODIFICATION VEHICULE</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'marqueVehicules'}" tag="a">
              <i class="icon-check"></i>
             Marques Véhicule
            </router-link>
          </li>
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ModeleVehicules'}" tag="a">
              <i class="icon-check"></i>
             Modèles Véhicule
            </router-link>
          </li>
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'TypeEntretien'}" tag="a">
              <i class="icon-check"></i>
            Type d'entretien
            </router-link>
          </li>
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'TypeVehicule'}" tag="a">
              <i class="icon-check"></i>
            Type de véhicule
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: 'TypeEnergie'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type d'énergie
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: 'TypeReparation'}" tag="a">
              <i class="icon-user"></i> Type de réparation
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Transmission'}" tag="a">
              <i class="icon-user"></i> Transmission
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: 'Appreciation'}" tag="a">
              <i class="icon-user"></i> Appreciation
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
