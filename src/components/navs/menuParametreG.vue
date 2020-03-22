<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    
    <ul class="nav">
      <!-- administratifs-->
      <li class="dropdown" id="administratifs">
        <a                                                
          title ="Administratifs" 
          href="#"
          data-toggle="dropdown"           
          data-target="#administratifs"
          class="dropdown-toggle"
        >
          <span class="text">ADMINISTRATIFS </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'ExerciceBudgetaire'}" tag="a">
              <i class="icon-user"></i>
              Exercises budgétaires
            </router-link>
          </li>
          <!-- <li class="divider"></li> -->
          <!-- <li>
            <router-link :to="{name: 'Titre'}" tag="a">
              <i class="icon-check"></i>
              Les Titres
            </router-link>
          </li> -->
          <li class="divider"></li>
          <li>
            <router-link :to="{name:'NatureSection'}" tag="a">
              <i class="icon-plus"></i> Natures de section
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name:'Section'}" tag="a">
              <i class="icon-key"></i> Sections
            </router-link>
          </li>
         

         
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'GrandeNature'}" tag="a">
              <i class="icon-user"></i> Grandes natures de depense
            </router-link>
          </li>
          <li class="divider"></li>
            <li>
            <router-link :to="{name: 'typeUniteAdministrative'}" tag="a">
              <i class="icon-user"></i> Type unite d'administrative
            </router-link>
          </li>
          
        </ul>
      </li>
      <!--Source de financement-->
      <li class="dropdown" id="source_financement">
        <a title = "Source de financement" href="#" data-toggle="dropdown" data-target="#source_financement" class="dropdown-toggle">
          <span class="text"> BAILLEURS </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>

           <li>
            <router-link :to="{name:'TypeFinancement'}" tag="a">
              <i class="icon-key"></i> Type de financement
            </router-link>
          </li>
             <li class="divider"></li>

          <li>
           
             <router-link :to="{name:'SourceFinancement'}" tag="a">
              <i class="icon-check"></i> Source de financement
            </router-link>
          </li>
         
        </ul>
      </li>
      <!-- fonctionnelle
      -->
       <li class="dropdown" id="fonctionnelle">
        <a title = "STRUCTURES ET PLANS" href="#" data-toggle="dropdown" data-target="#fonctionnelle" class="dropdown-toggle">
          <span class="text">STRUCTURES ET PLANS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'StructureFonctionnelle'}" tag="a">
              <i class="icon-check"></i>
              Structure fonctionnelle
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'PlanFonctionnel'}" tag="a">
              <i class="icon-key"></i> Plan fonctionnel
            </router-link>
          </li>
           <li class="divider"></li>
          <li>
            <router-link :to="{name:'StructureProgramme'}" tag="a">
              <i class=" icon-star"></i> Structures programmes
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name:'PlanProgramme'}" tag="a">
              <i class="icon-stop"></i> Plan programme
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'StructureAtivite'}" tag="a">
              <i class="icon-key"></i> Structure programmatique
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'PlanActivite'}" tag="a">
              <i class="icon-key"></i> Plan programmatique
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name:'StructureAdministrative'}" tag="a">
              <i class="icon-th"></i> Structure administrative
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ServiceGestionnaire'}" tag="a">
              <i class="icon-key"></i> Service gestionnaire de crédit
            </router-link>
          </li>

           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'SrtuctureGeographique'}" tag="a">
              <i class="icon-plane"></i> Structure geographique
            </router-link>
          </li>

           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'LocalisationGeographique'}" tag="a">
              <i class="icon-plus"></i> Localisation géographique
            </router-link>
          </li>
         <li class="divider"></li>
          <li>
            <router-link :to="{name: 'StructureBudgetaire'}" tag="a">
              <i class="icon-key"></i> Structure économique
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'PlanBudgetaire'}" tag="a">
              <i class="icon-check"></i>
              Plan économique
            </router-link>
          </li>
           <li class="divider"></li>
          
          <li>
            <router-link :to="{name: 'structureDecision'}" tag="a">
              <i class="icon-key"></i> Structures Décisionnelles
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'planDecision'}" tag="a">
              <i class="icon-key"></i> Plan Décisionnelles
            </router-link>
          </li>
           <li class="divider"></li>
          
          <li>
            <router-link :to="{name: 'structureActe'}" tag="a">
              <i class="icon-key"></i> Structures Acte
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'planActe'}" tag="a">
              <i class="icon-key"></i> Plan Acte
            </router-link>
          </li>
        </ul>
      </li>
     
      <li class="dropdown" id="Depense">
        <a title="CODIFICATIONS" href="#" data-toggle="dropdown" data-target="#Depense" class="dropdown-toggle">
          <span class="text">CODIFICATIONS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
           <li>
            <router-link :to="{name: 'pays'}" tag="a">
              <i class="icon-bar-chart"></i>
           Pays
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'ville'}" tag="a">
              <i class="icon-bar-chart"></i>
           Ville
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'commune'}" tag="a">
              <i class="icon-bar-chart"></i>
           Commune
            </router-link>
          </li>
             <li>
            <router-link :to="{name: 'typeCandidat'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type Candidat
            </router-link>
          </li>
           <!-- <li>
            <router-link :to="{name: 'typeAppel'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type d'appel offre
            </router-link>
          </li> -->
          <li>
            <router-link :to="{name: 'typeFacture'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type de Facture
            </router-link>
          </li>
           
           <li>
            <router-link :to="{name: 'typeTextJuridique'}" tag="a">
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
            <router-link :to="{name: 'autreTextJuridique'}" tag="a">
              <i class="icon-bar-chart"></i>
           Autre texte juridique
            </router-link>
          </li>
            <li>
                <router-link :to="{name: 'LigneExempter'}" tag="a">
                    <i class="icon-bar-chart"></i>
                    Ligne Exempter
                </router-link>
            </li>
          <li>
            <router-link :to="{name: 'motifDecision'}" tag="a">
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
         
           
           <!-- <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-bar-chart"></i>
           Réferentiel des prix
            </router-link>
          </li> -->
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
           <!-- <li>
            <router-link :to="{name: 'bailleur'}" tag="a">
              <i class="icon-bar-chart"></i>
               Bailleur
            </router-link>
          </li> -->

           <li>
            <router-link :to="{name: 'documentProcedure'}" tag="a">
              <i class="icon-bar-chart"></i>
               Document procedure
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
      <!-- Activite
      -->
      <li class="dropdown" id="Activite">
        <a title="FOURNISSEURS" href="#" data-toggle="dropdown" data-target="#Activite" class="dropdown-toggle">
          <span class="text">FOURNISSEURS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'banque'}" tag="a">
              <i class="icon-bar-chart"></i>
           Banques
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: 'agence'}" tag="a">
              <i class="icon-bar-chart"></i>
           Agence de la banque
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
             Entreprises
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: 'ModePaiement'}" tag="a">
              <i class="icon-bar-chart"></i>
          Mode de paiement
            </router-link>
          </li>
        </ul>
      </li>
      <!-- Généraux
      -->
      <li class="dropdown" id="generaux">
        <a title="MARCHES" href="#" data-toggle="dropdown" data-target="#generaux" class="dropdown-toggle">
          <span class="text">MARCHES</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'typeMarche'}" tag="a">
              <i class="icon-check"></i>
             Type de marché
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: 'typeProcedure'}" tag="a">
              <i class="icon-bar-chart"></i>
           Famille de procedure
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: 'procedurePassation'}" tag="a">
              <i class="icon-bar-chart"></i>
           Procedure de passation
            </router-link>
          </li>
        </ul>
      </li>
      <li class="dropdown" id="personnelPara">
        <a title="PERSONNELS" href="#" data-toggle="dropdown" data-target="#personnelPara" class="dropdown-toggle">
          <span class="text">PERSONNELS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'CategorieGrade'}" tag="a">
              <i class="icon-user"></i>
              Catégorie grade
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
            <router-link :to="{name: 'fonctionBudgetaire'}" tag="a">
              <i class="icon-check"></i>
              Fonction Budgétaire
            </router-link>
          </li>
           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Fonction'}" tag="a">
              <i class="icon-check"></i>
              Fonction Administrative
            </router-link>
          </li>
           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'familleEmploie'}" tag="a">
              <i class="icon-key"></i> Familles d'emplois            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ClassificationEmploisGradePrincipal'}" tag="a">
              <i class="icon-user"></i>
              Classification Grade et Emplois
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'TypeActePersonnels'}" tag="a">
              <i class="icon-user"></i>
              Type d'acte
            </router-link>
          </li>
         
          <li class="divider"></li>
          <!-- <li>
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
          </li> -->
          <!-- <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Grades'}" tag="a">
              <i class="icon-key"></i> Grades
            </router-link>
          </li> -->
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
             Nature Entrée
            </router-link>
          </li>
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'CauseInactivite'}" tag="a">
              <i class="icon-check"></i>
             Cause Inactivite
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
            Groupe équipement
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
            <router-link :to="{name: 'ReferentielDesPrix'}" tag="a">
              <i class="icon-bar-chart"></i>
           Référentiel des prix
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'taux'}" tag="a">
              <i class="icon-user"></i> Taux
            </router-link>
          </li>
           <li>
            <router-link :to="{name:'StockArticles'}" tag="a">
              <!-- <i class="icon-home"></i> -->
               <i class="icon-user"></i> Gestion des stocks
             
            </router-link>
          </li>
           <li>
            <router-link :to="{name:'NormeImmo'}" tag="a">
              <!-- <i class="icon-home"></i> -->
               <i class="icon-user"></i> Equipement Type
             
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
