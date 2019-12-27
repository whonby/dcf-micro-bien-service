
<template>
  <div class="container-fluid">
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <!-- <li class="bg_lb" title="nombre de famille d'immobilisation">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreFamilleArticle}}</span> Nbre familles immo
          </a>
        </li>-->

        <!-- <li class="bg_ly" title="nombre de service">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{nombreServices}}</span> Nbre de service
          </a>
        </li>-->
        <!-- <li class="bg_lo" title="total amortissement">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{nombreAmortissement}}</span> Nbre Amortissement
          </a>
        </li>-->
          <li class="bg_lb" title="Nombre Global d'équipement">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreTotalEquipement}}</span> Nbre Global d'équipement prévue
          </a>
        </li> 

        
<li class="bg_ly" title="Nombres d'equipement Restant">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{SommeEquipementPrevue}}</span>Nbre Equipement Restant
          </a>
        </li>
       <li class="bg_ly" title="Nombre d'equipement Réalise">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{SommeEquipementRealise}}</span> Nbre Equipement Réalise
          </a>
        </li> 
         <li class="bg_lg" title="Taux équipement  réalisé">
          <a href="#">
            <i class="icon-fullscreen"></i>
            <span class="label label-warning">{{tauxEquipementRealise}}%</span>Taux équipement  réalisé
          </a>
        </li>
        <li class="bg_lg">
          <a href="#">
            <i class="icon-fullscreen"></i>
            <span class="label label-warning">{{tauxEquipementPrevue}}%</span>Taux équipement Restant
          </a>
        </li>
           <li class="bg_lb" title="Montant total besoin">
          <a href="#">
            <i class="icon-plus-sign"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(SommeTotalBesoin))}}</span> Montant Global Besoins restant
          </a>
        </li> 
        <!-- <li class="bg_lr" >
          <a href="#">
            <i class="icon-info-sign"></i>
            <span class="label label-success">{{tauxGlobalEquipement}}%</span>Taux Global d'equipement
          </a>
        </li> -->
        <!-- <li class="bg_lr" title="Taux immobilisation de UA">
          <a href="#">
            <i class="icon-info-sign"></i>
            <span class="label label-success">{{tauxbesoinimmoUa}}%</span>Taux Besoin immobilisation de ua
          </a>
        </li>-->
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
      "SommeTotalBesoin"
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
    }
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
