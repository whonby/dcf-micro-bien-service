
<template>
  <div class="container-fluid">
     <!-- <h3 style="text-align:center">TABLEAU DE BORD : COMPTABILITES DES MATIERES</h3> -->
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
<!--   
          <li class="bg_lb" title="Nombre Global d'équipement">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreTotalEquipement}}</span> QUANTITES GBOBALES
          </a>
        </li> 

        
<li class="bg_ly" title="Nombres d'equipement Restant">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{SommeEquipementPrevue}}</span>QUANTITES NON COUVERTES
          </a>
        </li>
       <li class="bg_ly" title="Nombre d'equipement Réalise">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{SommeEquipementRealise}}</span> QUANTITES COUVERTES
          </a>
        </li> 
         <li class="bg_lg" title="Taux équipement  réalisé">
          <a href="#">
            <i class="icon-fullscreen"></i>
            <span class="label label-warning">{{tauxEquipementRealise}}%</span>TAUX QUANTITES COUVERTES
          </a>
        </li>
        <li class="bg_lg">
          <a href="#">
            <i class="icon-fullscreen"></i>
            <span class="label label-warning">{{tauxEquipementPrevue}}%</span>TAUX QUANTITES NON COUVERTES
          </a>
        </li> -->
          <!-- <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <li class="bg_lb"> <a href="#"> <i class="icon-dashboard"></i> <span class="label label-important">{{TotalDemande}}</span>DEMANDE TOTAL</a> </li>
        <li class="bg_lg span3"> <a href="charts.html"> <i class="icon-signal"></i> Quantités Couvertes</a> </li>
        <li class="bg_ly"> <a href="widgets.html"> <i class="icon-inbox"></i><span class="label label-success">101</span> Quantités Non Couvertes </a> </li>
        <li class="bg_lo"> <a href="tables.html"> <i class="icon-th"></i>Quantité Non Couvertes</a> </li>
        <li class="bg_ls"> <a href="grid.html"> <i class="icon-fullscreen"></i> Full width</a> </li>
        <li class="bg_lo span3"> <a href="form-common.html"> <i class="icon-th-list"></i> Forms</a> </li>
        <li class="bg_ls"> <a href="buttons.html"> <i class="icon-tint"></i> Buttons</a> </li>
        <li class="bg_lb"> <a href="interface.html"> <i class="icon-pencil"></i>Elements</a> </li>
        <li class="bg_lg"> <a href="calendar.html"> <i class="icon-calendar"></i> Calendar</a> </li>
        <li class="bg_lr"> <a href="error404.html"> <i class="icon-info-sign"></i> Error</a> </li>
 <li class="bg_lb"> <a href="index.html"> <i class="icon-dashboard"></i> <span class="label label-important">20</span> My Dashboard </a> </li>
        <li class="bg_lg span3"> <a href="charts.html"> <i class="icon-signal"></i> Charts</a> </li>
        <li class="bg_ly"> <a href="widgets.html"> <i class="icon-inbox"></i><span class="label label-success">101</span> Widgets </a> </li>
        <li class="bg_lo"> <a href="tables.html"> <i class="icon-th"></i> Tables</a> </li>
        <li class="bg_ls"> <a href="grid.html"> <i class="icon-fullscreen"></i> Full width</a> </li>
        <li class="bg_lo span3"> <a href="form-common.html"> <i class="icon-th-list"></i> Forms</a> </li>
        <li class="bg_ls"> <a href="buttons.html"> <i class="icon-tint"></i> Buttons</a> </li>
        <li class="bg_lb"> <a href="interface.html"> <i class="icon-pencil"></i>Elements</a> </li>
        <li class="bg_lg"> <a href="calendar.html"> <i class="icon-calendar"></i> Calendar</a> </li>
        <li class="bg_lr"> <a href="error404.html"> <i class="icon-info-sign"></i> Error</a> </li>
      </ul>
    </div> -->
          <h1 style="text-align:center;margin:0 auto;color:red">EN COURS DE DEVELOPPEMENT TABLEAU DE BORD COMPTABILITE DES MATIERES</h1>
      </ul>
    </div>

    <div class="quick-actions_homepage">
      <ul class="quick-actions"></ul>
    </div>
    <div class="quick-actions_homepage">
      <ul class="quick-actions"></ul>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import { formatageSomme } from "../../../Repositories/Repository";
export default {
  name:'TableauBordImmo',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ]
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", [
    
      "tauxbesoinimmoUa",
      "SommeEquipementPrevue",
      "SommeEquipementActuel",
      
      "nombreTotalEquipement",
      "SommeEquipementRealise",
      "tauxEquipementPrevue",
      "tauxEquipementRealise",
      "tauxEquipementPrevue",
      "SommeTotalBesoin",
      "trieUaImmobilisation",
      "equipements",
      "familles",
      "articles",
      "SommeQuantiteNonCouvert",
      "getAfficheArticle",
      "getPersoStock",
      "stockageArticles",
      "groupUatypeNorme",
      "groupUaNorme",
      "groupUaNormeFamille",
      "normeEquipements",
      "groupUaNormeEquipe",
      "groupUaNormeFonction",
      "getPersoNormeArticle",
      "services",
      "besoinEquipement",
      "afficherDirection",
      "afficherService",
      "afficherFonction",
      "type_Unite_admins",
      "getPersoListeDesNorme",
      "normeImmo",
      "getPersonnaliseNormeEquipement",
      "afficherDemandeParService",
      "natureEntres",
      "EtatImmobilisations",
      "causeInactivite",
      "immobilisations",
      "afficheRegroupeEquipementCouvert",
      "demandeMateriel"
      // "tauxGlobalEquipement"

      // "nbreArchivageNotes"
    ]),
    filtre_archivage_document() {
      const st = this.search.toLowerCase();
      return this.archivageDocuments.filter(archivagedocument => {
        return (
          archivagedocument.reference.toLowerCase().includes(st) ||
          archivagedocument.unite_administrative.libelle
            .toLowerCase()
            .includes(st) ||
          archivagedocument.type_texte.libelle.toLowerCase().includes(st)
        );
      });
    },
    TotalDemande(){
 
  
        
    return this.demandeMateriel.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0); 
      
  
},
 quantiteCouvert(){
    return this.immobilisations.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0); 
},
  },
  methods: {
    formatageSomme: formatageSomme,
  }
};
</script>



<style>
.deplaceCar1 {
  margin: 0 50px;
}
.deplaceCar {
  margin: 0 120px;
}
</style>
