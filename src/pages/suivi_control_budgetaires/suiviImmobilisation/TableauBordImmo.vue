
<template>
    <div class="container-fluid">
          
     <div class="quick-actions_homepage" style="position: center;">
 
        <hr>
    <div class="row-fluid">     

      <div class="span12">

      <div class="widget-box">

          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1" title="Tableau de bord de mission">T. bord mission</a></li>
               <!-- <li><a data-toggle="tab" href="#tab2">Tous les dossiers en attente</a></li>  -->
               <li><a data-toggle="tab" href="#tab3" title="Tableau de bord immobilisation">T.bord immobilisation</a></li> 
              <li><a data-toggle="tab" href="#tab4" title="Tableau de bord d'execution de marché">T. de bord d'execution de marché</a></li>
            <!-- <li><a data-toggle="tab" href="#tab5">Tous les dossiers rejetés</a></li>   -->
                
              
            </ul>
           
          </div>
          <div class="widget-content tab-content">
            <div id="tab1" class="tab-pane active">
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->

    <div class="container-fluid">
         <div class="quick-actions_homepage" style="position: center;">
      <ul class="quick-actions" >
        
        <li class="bg_lb" title="Nombre total de mission global">
             <a href="#">
            <i class="icon-dashboard"></i> <span class="label label-important">{{nombreTotalDeTouteMissions}}
        </span> Nombre total de missions. </a> </li>
              
        <li class="bg_lg " title="Duree moyenne de mission">
             <a href="#">
             <i class="icon-eject"></i> <span class="label label-important">{{dureeMoyenneDeTouteLesMissions}} jrs</span>
                 Duree moyenne de missions 
             </a> </li>

        <li class="bg_ly" title="Montant total des missions ">
            <a href="#">
        <i class="icon-user"></i><span class="label label-success">{{formatageSomme(parseFloat(coutTotalDemission))}}
           </span> Cout total de missions . </a> </li>

        <li class="bg_lo" title="cout moyen des billets d'avion globale de mission">
             <a href="#">
             <i class="icon-th"></i><span class="label label-warning">{{formatageSomme(parseFloat(coutMoyenDeBilletAvionDeMissions))}}
              </span> Cout moyen des billets d'avion.</a> </li>

        <li class="bg_ls" title="Taux de dossiers de missions rejetés">
             <a href="#">
            <i class="icon-fullscreen"></i><span class="label label-success">{{tauxDossierRejetMissions}}
                %</span>
             Tx de dossiers de m. rejetés.</a> </li>
             

                 <li class="bg_lg" title="cout moyen de mission "> 
                <a href="#"> <i class="icon-info-sign"></i><span class="label label-primary">{{formatageSomme(parseFloat(coutMoyenDeMission))}}
             </span> cout moyen de missions </a> </li>
      

        
      </ul>
    </div>
     

    </div>
  </div>

             </div>








          


         
                           <div id="tab3" class="tab-pane">
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
         <li class="bg_lb" title="Total equipement">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreTotalEquipement}}</span> Nbre Global d'équipement
          </a>
        </li> 

        
        <li class="bg_ly" title="nombre immobilisation prévue">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{SommeEquipementPrevue}}</span>Nbre Equipement Global prévue
          </a>
        </li>
        <li class="bg_ls" title="Total equipement">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{SommeEquipementRealise}}</span> Nbre Equipement Global Réalise
          </a>
        </li> 
        <li class="bg_lg" title="volume d'immobilisation réalise">
          <a href="#">
            <i class="icon-fullscreen"></i>
            <span class="label label-warning">{{tauxEquipementRealise}}%</span>Taux équipement Global réalisé
          </a>
        </li>
        <li class="bg_lg">
          <a href="#">
            <i class="icon-fullscreen"></i>
            <span class="label label-warning">{{tauxEquipementPrevue}}%</span>Taux équipement Global prévue
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
                                  
            
            </div>
  <!---- fin troisieme  tableau  ---->



    <!--- debut  quatrieme tableau  --->


         
                        <div id="tab4" class="tab-pane">
                           <div class="container-fluid">
                      
            </div>
            </div>
  <!---- fin quatrieme tableau ---->





    <!--- debut  quatrieme tableau  --->


         
                        <div id="tab5" class="tab-pane">
                           <div class="container-fluid">
                           
            </div>
            </div>
  <!---- fin quatrieme tableau ---->
                </div>

 




  



      </div>
      </div>
    </div> 








                    





        






    
               
   </div>
    </div>

</template>



<script>
import { mapGetters } from "vuex";
import {formatageSomme} from '../../../Repositories/Repository'
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
    ...mapGetters("suivi_controle_budgetaire", [
      "nombreTotalDeTouteMissions",
      "coutTotalDemission",
      "dureeMoyenneDeTouteLesMissions",
      "coutMoyenDeBilletAvionDeMissions",
      "tauxDossierRejetMissions",
      "coutMoyenDeMission"
 

      // "nbreArchivageNotes"
    ]),

      ...mapGetters("SuiviImmobilisation", [
    
      // "tauxbesoinimmoUa",
      "SommeEquipementPrevue",
      "SommeEquipementActuel",
      
      "nombreTotalEquipement",
      "SommeEquipementRealise",
      "tauxEquipementPrevue",
      "tauxEquipementRealise",
      "tauxEquipementPrevue",
      // "tauxGlobalEquipement"

      // "nbreArchivageNotes"
    ]),
    // filtre_archivage_document() {
    //   const st = this.search.toLowerCase();
    //   return this.archivageDocuments.filter(archivagedocument => {
    //     return (
    //       archivagedocument.reference.toLowerCase().includes(st) ||
    //       archivagedocument.unite_administrative.libelle
    //         .toLowerCase()
    //         .includes(st) ||
    //       archivagedocument.type_texte.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // }
  },
  methods: {
    formatageSomme:formatageSomme
  }
};
</script>



<style>
.nbre {
  background-color: #27a9e3;
}
.center1 {
  margin: 5px 270px 5px;
}

.deplaceCar1 {
  margin: 0 50px;
}

.deplaceCar {
  margin: 0 120px;
}
</style>