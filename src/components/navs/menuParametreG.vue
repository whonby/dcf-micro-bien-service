<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!-- administratifs-->
      <li class="dropdown" id="administratifs">
        <a
          title="Administratifs"
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
            <router-link :to="{ name: 'ExerciceBudgetaire' }" tag="a">
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
            <router-link :to="{ name: 'NatureSection' }" tag="a">
              <i class="icon-plus"></i> Natures de section
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'Section' }" tag="a">
              <i class="icon-key"></i> Sections
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'GrandeNature' }" tag="a">
              <i class="icon-user"></i> Grandes natures de dépense
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'typeUniteAdministrative' }" tag="a">
              <i class="icon-user"></i> Type d'unité administrative
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'ServiceCF' }" tag="a">
              <i class="icon-user"></i> Gestion des services de CF
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'GestionCF' }" tag="a">
              <i class="icon-user"></i> Gestion des CF
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'AffectationCFAService' }" tag="a">
              <i class="icon-user"></i>Affection CF Service
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'Profil' }" tag="a">
              <i class="icon-user"></i>Profil
            </router-link>
          </li>
        </ul>
      </li>
      <!--Source de financement-->
      <li class="dropdown" id="source_financement">
        <a
          title="Source de financement"
          href="#"
          data-toggle="dropdown"
          data-target="#source_financement"
          class="dropdown-toggle"
        >
          <span class="text"> BAILLEURS </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{ name: 'TypeFinancement' }" tag="a">
              <i class="icon-key"></i> Type de financement
            </router-link>
          </li>
          <li class="divider"></li>

          <li>
            <router-link :to="{ name: 'SourceFinancement' }" tag="a">
              <i class="icon-check"></i> Source de financement
            </router-link>
          </li>
          <li class="divider"></li>
          <!-- <li>
           
             <router-link :to="{name:'planSourceFin'}" tag="a">
              <i class="icon-check"></i>Plan source de financement
            </router-link>
          </li>
         <li class="divider"></li> -->
        </ul>
      </li>
      <!-- fonctionnelle
      -->
      <li class="dropdown" id="fonctionnelle">
        <a
          title="STRUCTURES "
          href="#"
          data-toggle="dropdown"
          data-target="#fonctionnelle"
          class="dropdown-toggle"
        >
          <span class="text">STRUCTURES</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{ name: 'StructureFonctionnelle' }" tag="a">
              <i class="icon-check"></i>
              Structure fonctionnelle
            </router-link>
          </li>
          <li class="divider"></li>

          <li>
            <router-link :to="{ name: 'StructureProgramme' }" tag="a">
              <i class="icon-star"></i> Structure programme
            </router-link>
          </li>
          <li class="divider"></li>

          <li>
            <router-link :to="{ name: 'StructureAtivite' }" tag="a">
              <i class="icon-key"></i> Structure programmatique
            </router-link>
          </li>
          <li class="divider"></li>

          <li>
            <router-link :to="{ name: 'StructureAdministrative' }" tag="a">
              <i class="icon-th"></i> Structure administrative
            </router-link>
          </li>
          <!-- <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ServiceGestionnaire'}" tag="a">
              <i class="icon-key"></i> Service gestionnaire de crédit
            </router-link>
          </li> -->

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'SrtuctureGeographique' }" tag="a">
              <i class="icon-plane"></i> Structure géographique
            </router-link>
          </li>

          <li class="divider"></li>

          <li>
            <router-link :to="{ name: 'StructureBudgetaire' }" tag="a">
              <i class="icon-key"></i> Structure économique
            </router-link>
          </li>

          <li class="divider"></li>

          <li>
            <router-link :to="{ name: 'structureDecision' }" tag="a">
              <i class="icon-key"></i> Structure décisionnelle
            </router-link>
          </li>
          <li class="divider"></li>

          <li>
            <router-link :to="{ name: 'structureActe' }" tag="a">
              <i class="icon-key"></i> Structure des actes
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'StructureInfrastructure' }" tag="a">
              <i class="icon-key"></i> Structure des Infrastructures
            </router-link>
          </li>
          <li class="divider"></li>
        </ul>
      </li>
      <li class="dropdown" id="lesPlans">
        <a
          title=" PLANS"
          href="#"
          data-toggle="dropdown"
          data-target="#lesPlans"
          class="dropdown-toggle"
        >
          <span class="text">PLANS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{ name: 'PlanFonctionnel' }" tag="a">
              <i class="icon-key"></i> Plan fonctionnel
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'PlanProgramme' }" tag="a">
              <i class="icon-stop"></i> Plan programme
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'PlanActivite' }" tag="a">
              <i class="icon-key"></i> Plan programmatique
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'ServiceGestionnaire' }" tag="a">
              <i class="icon-key"></i> Service gestionnaire de crédit
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'LocalisationGeographique' }" tag="a">
              <i class="icon-plus"></i> Localisation géographique
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'PlanBudgetaire' }" tag="a">
              <i class="icon-check"></i>
              Plan économique
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'planDecision' }" tag="a">
              <i class="icon-key"></i> Plan décisionnel
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'planActe' }" tag="a">
              <i class="icon-key"></i> Plan des actes
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'PlanInfrastructure' }" tag="a">
              <i class="icon-key"></i> Plan des Infrastructures et Equipements
            </router-link>
          </li>
          <li class="divider"></li>
        </ul>
      </li>
      <li class="dropdown" id="Depense">
        <a
          title="CODIFICATIONS"
          href="#"
          data-toggle="dropdown"
          data-target="#Depense"
          class="dropdown-toggle"
        >
          <span class="text">CODIFICATIONS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{ name: 'StructurePays' }" tag="a">
              <i class="icon-bar-chart"></i>
              Structure Pays
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'PlanPays' }" tag="a">
              <i class="icon-bar-chart"></i>
              Plan Pays
            </router-link>
          </li>
          <li class="divider"></li>

          <!-- <li>
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
          </li> -->
          <li>
            <router-link :to="{ name: 'typeCandidat' }" tag="a">
              <i class="icon-bar-chart"></i>
              Type Candidat
            </router-link>
          </li>
          <li class="divider"></li>
          <!-- <li>
            <router-link :to="{name: 'typeAppel'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type d'appel offre
            </router-link>
          </li> -->
          <li>
            <router-link :to="{ name: 'typeFacture' }" tag="a">
              <i class="icon-bar-chart"></i>
              Type de Facture
            </router-link>
          </li>
          <li class="divider"></li>
          <!-- <li>
            <router-link :to="{name: 'typeTextJuridique'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type Texte juridique
            </router-link>
          </li> -->
          <!-- <li>
            <router-link :to="{name: 'textJuridique'}" tag="a">
              <i class="icon-bar-chart"></i>
           Texte juridique
            </router-link>
          </li> -->
          <!-- <li>
            <router-link :to="{name: 'autreTextJuridique'}" tag="a">
              <i class="icon-bar-chart"></i>
           Autre texte juridique
            </router-link>
          </li> -->
          <li>
            <router-link :to="{ name: 'LigneExempter' }" tag="a">
              <i class="icon-bar-chart"></i>
              Ligne Exemptée
            </router-link>
          </li>
          <li class="divider"></li>
          <!-- <li>
            <router-link :to="{name: 'motifDecision'}" tag="a">
              <i class="icon-bar-chart"></i>
           Motifs de décision
            </router-link>
          </li> -->
          <!-- <li>
            <router-link :to="{name: 'typeActeEffetFinancier'}" tag="a">
             
              <i class="icon-bar-chart"></i>
           Type acte effet financier
            </router-link>
          </li> -->
          <li>
            <router-link :to="{ name: 'typeAnalyse' }" tag="a">
              <i class="icon-bar-chart"></i>
              Type d'analyse
            </router-link>
          </li>

          <!-- <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-bar-chart"></i>
           Réferentiel des prix
            </router-link>
          </li> -->
          <!-- <li>
            <router-link :to="{name: 'typeActeDepense'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type d'acte de depense
            </router-link>
          </li> -->
          <!-- <li>
            <router-link :to="{name: 'condition'}" tag="a">
              <i class="icon-bar-chart"></i>
           Condition
            </router-link>
          </li> -->
          <!-- <li>
            <router-link :to="{name: 'bailleur'}" tag="a">
              <i class="icon-bar-chart"></i>
               Bailleur
            </router-link>
          </li> -->

          <!-- <li>
            <router-link :to="{name: 'documentProcedure'}" tag="a">
              <i class="icon-bar-chart"></i>
               Document procedure
            </router-link>
          </li> -->

          <!-- <li>
            <router-link :to="{name: 'type_prestation'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type prestation
            </router-link>
          </li> -->
        </ul>
      </li>
      <!-- Activite
      -->
      <li class="dropdown" id="Activite">
        <a
          title="FOURNISSEURS"
          href="#"
          data-toggle="dropdown"
          data-target="#Activite"
          class="dropdown-toggle"
        >
          <span class="text">FOURNISSEURS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{ name: 'banque' }" tag="a">
              <i class="icon-bar-chart"></i>
              Banques
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'agence' }" tag="a">
              <i class="icon-bar-chart"></i>
              Agence bancaire
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'SecteurActivite' }" tag="a">
              <i class="icon-user"></i>
              Secteur d'activité
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'Formejuridique' }" tag="a">
              <i class="icon-check"></i>
              Forme juridique
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'RegimeImposition' }" tag="a">
              <i class="icon-check"></i>
              impôt synthétique
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'Entreprise' }" tag="a">
              <i class="icon-check"></i>
              Entreprises
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'ModePaiement' }" tag="a">
              <i class="icon-bar-chart"></i>
              Mode de paiement
            </router-link>
          </li>
        </ul>
      </li>
      <!-- Généraux
      -->
      <li class="dropdown" id="generaux">
        <a
          title="MARCHES"
          href="#"
          data-toggle="dropdown"
          data-target="#generaux"
          class="dropdown-toggle"
        >
          <span class="text">MARCHES</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{ name: 'typeMarche' }" tag="a">
              <i class="icon-check"></i>
              Type de marché
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'typeProcedure' }" tag="a">
              <i class="icon-bar-chart"></i>
              Famille de procédure
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'procedurePassation' }" tag="a">
              <i class="icon-bar-chart"></i>
              Mode de passation
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'rolemembrecojo' }" tag="a">
              <i class="icon-bar-chart"></i>
              Rôle membre Cojo
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Infrastructures' }" tag="a">
              <i class="icon-bar-chart"></i>
              Infrastructures
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'organeDecision' }" tag="a">
              <i class="icon-bar-chart"></i>
              Organe de decision
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'NaturePrix' }" tag="a">
              <i class="icon-bar-chart"></i>
              Nature des prix
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'motif_passation' }" tag="a">
              <i class="icon-bar-chart"></i>
              Motif de dérogation
            </router-link>
          </li>
        </ul>
      </li>
      <li class="dropdown" id="personnelPara">
        <a
          title="PERSONNELS"
          href="#"
          data-toggle="dropdown"
          data-target="#personnelPara"
          class="dropdown-toggle"
        >
          <span class="text">PERSONNELS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{ name: 'SituationMatrimonial' }" tag="a">
              <i class="icon-user"></i>
              Situation matrimoniale
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'CategorieGrade' }" tag="a">
              <i class="icon-user"></i>
              Catégorie de grade
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'Grades' }" tag="a">
              <i class="icon-key"></i> Grades
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'service' }" tag="a">
              <i class="icon-check"></i>
              Service
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'fonctionBudgetaire' }" tag="a">
              <i class="icon-check"></i>
              Fonction Budgétaire
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'Fonction' }" tag="a">
              <i class="icon-check"></i>
              Fonction Administrative
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'FonctionProfessionnelle' }" tag="a">
              <i class="icon-check"></i>
              Fonction Professionnelle
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'familleEmploie' }" tag="a">
              <i class="icon-key"></i> Familles d'emploi
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link
              :to="{ name: 'ClassificationEmploisGradePrincipal' }"
              tag="a"
            >
              <i class="icon-user"></i>
              Classification Grade et Emplois
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'TypeActePersonnels' }" tag="a">
              <i class="icon-user"></i>
              Type d'acte
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'Typeconges' }" tag="a">
              <i class="icon-user"></i>
              Type de congé
            </router-link>
          </li>

          <li class="divider"></li>

          <li>
            <router-link :to="{ name: 'NiveauEtude' }" tag="a">
              <i class="icon-check"></i>
              Niveau d'étude
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'TypeSalarie' }" tag="a">
              <i class="icon-key"></i> Type de salarié
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'TypeContrat' }" tag="a">
              <i class="icon-key"></i> Type de contrat
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'comptableAssignataire' }" tag="a">
              <i class="icon-key"></i> Comptable Assignataire
            </router-link>
          </li>
        </ul>
      </li>
      <li class="dropdown" id="comptaMatiere">
        <a
          title="IMMOBILISATIONS"
          href="#"
          data-toggle="dropdown"
          data-target="#comptaMatiere"
          class="dropdown-toggle"
        >
          <span class="text">IMMOBILISATIONS</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'natureEntre' }" tag="a">
              <i class="icon-check"></i>
              Nature des entrées
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'CauseInactivite' }" tag="a">
              <i class="icon-check"></i>
              Cause d'inactivité
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'EtatImmobilisation' }" tag="a">
              <i class="icon-check"></i>
              Etat Immobilisation
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'grpeCorporel' }" tag="a">
              <i class="icon-check"></i>
              Type de bien
            </router-link>
          </li>
          <li class="divider"></li>
          <!-- <li>
            <router-link :to="{name: 'TypeBienCorporel'}" tag="a">
              <i class="icon-check"></i>
            Type de Bien
            </router-link>
          </li> -->
          <!-- <li class="divider"></li> -->
          <li>
            <router-link :to="{ name: 'listeEquipement' }" tag="a">
              <i class="icon-check"></i>
              Groupe
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'famille' }" tag="a">
              <i class="icon-bar-chart"></i>
              Famille
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'taux' }" tag="a">
              <i class="icon-user"></i> Taux
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'ReferentielDesPrix' }" tag="a">
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
            <router-link :to="{ name: 'NormeImmo' }" tag="a">
              <!-- <i class="icon-home"></i> -->
              <i class="icon-user"></i> Equipement Type(Norme)
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'ParametrageVehicule' }" tag="a">
              <i class="icon-check"></i>
              Paramétrage Véhicule
            </router-link>
          </li>
          <!-- <li>
            <router-link :to="{name: 'marqueVehicules'}" tag="a">
              <i class="icon-check"></i>
             Marques 
            </router-link>
          </li>
            <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ModeleVehicules'}" tag="a">
              <i class="icon-check"></i>
             Modèles
            </router-link>
          </li> -->
          <li class="divider"></li>
          <!-- <li>
            <router-link :to="{name: 'TypeEntretien'}" tag="a">
              <i class="icon-check"></i>
            Type d'entretien
            </router-link>
          </li> -->
          <li class="divider"></li>
          <!-- <li>
            <router-link :to="{name: 'TypeVehicule'}" tag="a">
              <i class="icon-check"></i>
            Type de véhicule
            </router-link>
          </li> -->
          <!-- <li class="divider"></li> -->
          <!-- <li>
            <router-link :to="{name: 'TypeEnergie'}" tag="a">
              <i class="icon-bar-chart"></i>
           Type d'énergie
            </router-link>
          </li> -->
          <!-- <li class="divider"></li> -->
          <!-- <li>
            <router-link :to="{name: 'TypeReparation'}" tag="a">
              <i class="icon-user"></i> Type de réparation
            </router-link>
          </li> -->
          <!-- <li class="divider"></li>
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
          </li> -->
        </ul>
      </li>

      <li class="dropdown" id="mission">
        <a
          title="Suivi des missions"
          href="#"
          data-toggle="dropdown"
          data-target="#mission"
          class="dropdown-toggle"
        >
          <span class="text"> MISSIONS </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'CategorieMission' }" tag="a">
              <i class="icon-key"></i> Catégories de missions
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'NormeMission' }" tag="a">
              <i class="icon-key"></i> Norme de missions
            </router-link>
          </li>
        </ul>
      </li>

      <li class="dropdown" id="mission">
        <a
          title="Suivi des missions"
          href="#"
          data-toggle="dropdown"
          data-target="#importation"
          class="dropdown-toggle"
        >
          <span class="text"> IMPORTATION </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'ImportationProgramme' }" tag="a">
              <i class="icon-key"></i> Importation Programme
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'ImportationUA' }" tag="a">
              <i class="icon-key"></i> Importation des UA
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{ name: 'ImportationActivite' }" tag="a">
              <i class="icon-key"></i> Importation des Activités
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <router-link :to="{ name: 'AutresDepense' }" tag="a">
          <i class="icon-key"></i> AUTRES DEPENSES
        </router-link>
      </li>
      -->
    </ul>
  </div>
</template>

<script>
export default {};
</script>
