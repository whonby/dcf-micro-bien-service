<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">

<!-- administratifs-->
      <li class="dropdown" id="administratif">
        <a
          title="Configurations budgetaires"
          href="#"
          data-toggle="dropdown"
          data-target="#administratif"
          class="dropdown-toggle"
        >
          <span class="text">PARAMETRES
               </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
         
          <li>
            <router-link :to="{name: 'typeFacture'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type de Facture
            </router-link>
          </li>
           
           <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-bar-chart"></i>
           Type Texte juridique
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'textJuridique'}" tag="a">
              <i class="icon-bar-chart"></i>
           Texte juridique
            </router-link>
          </li>
          <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-bar-chart"></i>
           Autre texte juridique
            </router-link>
          </li>
          <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-bar-chart"></i>
           Motifs de décision
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'typeActeEffetFinancier'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type acte effet financier
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'typeAnalyse'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type analyse
            </router-link>
          </li>
         
           
           <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-bar-chart"></i>
           Réferentiel des prix
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'typeActeDepense'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type d'acte de depense
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'condition'}" tag="a">
              <i class="icon-bar-chart"></i>
           Condition
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'bailleur'}" tag="a">
              <i class="icon-bar-chart"></i>
               Bailleur
            </router-link>
          </li>
          
           <li>
            <router-link :to="{name: 'type_prestation'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type prestation
            </router-link>
          </li>
          
        </ul>
      </li>

<li class="dropdown" id="excution">
        <a
          title="Execution marchés-contrat"
          href="#"
          data-toggle="dropdown"
          data-target="#excution"
          class="dropdown-toggle"
        >
          <span class="text">FOURNISSEURS 
               </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
        <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-bar-chart"></i>
           Banques
            </router-link>
          </li>
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
             Entrprises
            </router-link>
          </li>
          <li class="divider"></li>
      
         
         
          
           <!-- <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-bar-chart"></i>
           Compte
            </router-link>
          </li> -->
        </ul>
      </li>
      <li class="dropdown" id="plant">
        <a title="passation des marchés" href="#" data-toggle="dropdown" data-target="#plant" class="dropdown-toggle">
          <span class="text">PARAMETRE DES MARCHES </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'TypeMarche'}" tag="a">
              <i class="icon-check"></i>
             Type de marché
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-bar-chart"></i>
           Type de procedure
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-bar-chart"></i>
           Procedure de passation
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ModePassation'}" tag="a">
              <i class="icon-key"></i> Mode de passation
            </router-link>
          </li>


        </ul>
      </li>



<li class="dropdown" id="contractualisation">
        <a
          title="Contractualisation"
          href="#"
          data-toggle="dropdown"
          data-target="#contratualisation"
          class="dropdown-toggle"
        >
          <span class="text">CONTRACTUALISATION
               </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
       
           <li class="divider"></li>
          <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-key"></i> Appel d'offres
            </router-link>
          </li>


         <li class="divider"></li>
          <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-list-ul"></i> Dossier du candidature
            </router-link>
          </li>

           <li class="divider"></li>
          <li>
            <router-link :to="{name: ''}" tag="a">
              <i class=" icon-star"></i> Lettre d'invitation
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{name: ''}" tag="a">
              <i class=" icon-star-half"></i> Mandate
            </router-link>
          </li>

      <li class="divider"></li>
          <li>
            <router-link :to="{name: ''}" tag="a">
              <i class=" icon-qrcode"></i> La cojo
            </router-link>
          </li>

        <li class="divider"></li>
          <li>
            <router-link :to="{name: ''}" tag="a">
              <i class=" icon-ok-sign"></i> Analyse de dossier
            </router-link>
          </li>

      <li class="divider"></li>
          <li>
            <router-link :to="{name: ''}" tag="a">
              <i class=" icon-ok-circle"></i> Demande d'ANO
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'decisionMarche'}" tag="a">
              <i class=" icon-tint"></i> Decision de marché
            </router-link>
          </li>
           <!-- <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-bar-chart"></i>
           Lot
            </router-link>
          </li> -->



          <!-- <li class="divider"></li>
          <li>
            <router-link :to="{name: 'EtapeMarche'}" tag="a">
              <i class="icon-check"></i>
             Etapes de marchés
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'MarcheContrat'}" tag="a">
              <i class="icon-reorder"></i>
              Marchés et contrats
            </router-link>
          </li>
           -->
         
        </ul>
      </li>

      
       <li class="dropdown" id="execut">
        <a title="passation des marchés" href="#" data-toggle="dropdown" data-target="#execut" class="dropdown-toggle">
          <span class="text">EXECUTION DU MARCHES </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">

           <li>
            <router-link :to="{name: 'MarcheContrat'}" tag="a">
              <i class="icon-list-alt"></i>
             Acte à effet financier
            </router-link>
          </li>

           <li>
            <router-link :to="{name: 'MarcheContrat'}" tag="a">
              <i class="icon-key"></i>
              Marchés et contrats
            </router-link>
          </li>
         
        
         
          
         
          
        </ul>
      </li>
<!-- menu bien et service -->









      <!-- administratifs-->
      <!-- <li class="dropdown" id="administratif">
        <a
          title="Configurations budgetaires"
          href="#"
          data-toggle="dropdown"
          data-target="#administratif"
          class="dropdown-toggle"
        >
          <span class="text">CONFIGURATIONS BUDGETAIRES.
               </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
         
          <li>
            <router-link :to="{name: 'budgetGeneral'}" tag="a">
              <i class="icon-bar-chart"></i>
            Budget general
            </router-link>
          </li>
          <li class="divider"></li>

        
        
          <li class="divider"></li>
          <li>
           <router-link :to="{name: 'budgetDetaille'}" tag="a">
              <i class="icon-key"></i> Budget detaillé
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Mouvement budget detaillé
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Structure Géographique
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> suivi des réamenagements budgetaires
            </a>
          </li>
          
          
        </ul>
      </li> -->
      <!--Plan des passations des marche-->
     <!-- <li class="dropdown" id="plant">
        <a title="Plan de passation des marchés" href="#" data-toggle="dropdown" data-target="#plant" class="dropdown-toggle">
          <span class="text">PLAN DES PASSATION DES MARCHES </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'TypeMarche'}" tag="a">
              <i class="icon-check"></i>
             Type de marché
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ModePassation'}" tag="a">
              <i class="icon-key"></i> Mode de passation
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'EtapeMarche'}" tag="a">
              <i class="icon-check"></i>
             Etapes de marchés
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'MarcheContrat'}" tag="a">
              <i class="icon-key"></i>
              Marchés et contrats
            </router-link>
          </li>
          
        </ul>
      </li> -->
      <!-- document
      -->
      <!-- <li class="dropdown" id="document">
        <a
          title="Documentations des marchés "
          href="#"
          data-toggle="dropdown"
          data-target="#document"
          class="dropdown-toggle"
        >
          <span class="text">DOCUMENTATION DES MARCHES</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'DocsPTPAPPM'}" tag="a">
              <i class="icon-key"></i> Document PTBA-PPM
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
              Document presence CF
            </a>
          </li>
        </ul>
      </li> -->
     
      
      <!-- out put
      -->
 
       <!-- indicateur
      -->
    
      <!-- Activite
      -->

       <!-- <li>
            <router-link :to="{name: 'TableauBordMarche'}" tag="a">
              TABLEAU DE BOARD
            </router-link>
          </li> -->
    
      <!-- Généraux
      -->
     
    </ul>
  </div>
</template>

<script>

export default {

};
</script>
