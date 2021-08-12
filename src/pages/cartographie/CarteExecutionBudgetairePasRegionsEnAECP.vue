<template>
  <div>
    <div class="">
      <div class="row-fluid">
        <div id="map10" class="sidebar leaflet-sidebar collapsed">
          <div class="sidebar-tabs">
            <ul role="tablist">
              <!-- top aligned tabs -->
              <li>
                <a href="#home" role="tab"><i class="fa fa-bars"></i></a>
              </li>
              <li>
                <a href="#infoRegion" role="tab"
                  ><i class="fa fa-bar-chart-o"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="sidebar-content">
            <div class="sidebar-pane" id="home">
              <h1 class="sidebar-header">
                CARTE D'EXECUTION HORS SIGOBE
                <div class="sidebar-close">
                  <i class="fa fa-caret-left"></i>
                </div>
              </h1>
             
<!--<p class="labelish">Mode Affichage:</p>
           <div class="span2">
             <button :class="{active: choixAffichageInformationCarte == 1 }" 
             @click.prevent="activedOptionMenu(1)" class="btn">Regions</button>
           </div>
            <div class="span3">
              <button class="btn" :class="{active: choixAffichageInformationCarte == 2 }" 
             @click.prevent="activedOptionMenu(2)">Departement</button>
            </div>
             <div class="span5">
               <button class="btn" :class="{active: choixAffichageInformationCarte == 3 }" 
             @click.prevent="activedOptionMenu(3)">Sous préfecture</button>
             </div>-->
  
  
  
              <div class="span5">

       
                <label
                  >Régions
                  <a
                    href="#"
                    @click.prevent="videRegions()"
                    v-if="region"
                    style="color: red"
                    ><i class="fa fa-trash-o"></i></a
                ></label>
                <model-list-select
                  style="background-color: rgb(233, 233, 233)"
                  class="wide"
                  :list="listeRegion"
                  v-model="region"
                  option-value="id"
                  option-text="libelle"
                  placeholder="Régions"
                >
                </model-list-select>


                <label
                  >Départements
                  <a
                    href="#"
                    @click.prevent="videDep()"
                    v-if="departement"
                    style="color: red"
                    ><i class="fa fa-trash-o"></i></a
                ></label>
                <model-list-select
                  style="background-color: rgb(233, 233, 233)"
                  class="wide"
                  :list="departementPasRegions"
                  v-model="departement"
                  option-value="id"
                  option-text="libelle"
                  placeholder="Départements"
                >
                </model-list-select>
                <label
                  >Sous-Préfecture
                  <a
                    href="#"
                    @click.prevent="videSous()"
                    v-if="sous_prefecture"
                    style="color: red"
                    ><i class="fa fa-trash-o"></i></a
                ></label>
                <model-list-select
                  style="background-color: rgb(233, 233, 233)"
                  class="wide"
                  :list="SousPrefecturePasDepartement"
                  v-model="sous_prefecture"
                  option-value="id"
                  option-text="libelle"
                  placeholder="Sous-Prefecture"
                >
                </model-list-select>
               
              </div>
              <div class="span6">
                 
                <label
                  >Unite administrative
                  <a
                    href="#"
                    @click.prevent="videUniteAdmin()"
                    style="color: red"
                    v-if="unite_administrative_id"
                    ><i class="fa fa-trash-o"></i></a
                ></label>
                <model-list-select
                  style="background-color: rgb(233, 233, 233)"
                  class="wide"
                  :list="filtre_unite_admin"
                  v-model="unite_administrative_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="Unité administrative"
                >
                </model-list-select>

                  <label
                  >Type de financément ({{types_financement_id}})
                  <a
                    href="#"
                    @click.prevent="videTypeFinancement()"
                    v-if="types_financement_id"
                    style="color: red"
                    ><i class="fa fa-trash-o"></i></a
                ></label>
                <model-list-select
                  style="background-color: rgb(233, 233, 233)"
                  class="wide"
                  :list="types_financements"
                  v-model="types_financement_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="Type de financement"
                >
                </model-list-select>

                 <label
                  >Bailleur
                  <a
                    href="#"
                    @click.prevent="videSousFinancement()"
                    v-if="sources_financement_id"
                    style="color: red"
                    ><i class="fa fa-trash-o"></i></a
                ></label>
                <model-list-select
                  style="background-color: rgb(233, 233, 233)"
                  class="wide"
                  :list="sources_financements"
                  v-model="sources_financement_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="Source financement"
                >
                </model-list-select>
              </div>

             
              <div>
                <div class="span12" style="font-size: 15px; font-size: 15px">
                  Situation du budget
                </div>
                 <div class="span12">
                       <div>
                    Budget Initial: <span style="color: #003900; "><b>{{formatageSomme(montantBudgetInitiale)}}</b></span> <br>
                    Budget actuelle:<span style="color: #00d700; "><b>{{formatageSomme(montantBudgetActuelle)}}</b></span><br>
                    Budget disponible:<span style="color: #00d700; "><b>{{formatageSomme(montantDisponibleBudget)}}</b></span><br>
                    Budget executé:<span style="color: darkred; "><b>{{formatageSomme(montantExecute)}}</b></span><br>
                     Taux d'exécution:<span style="color: #e36706; "><b>{{tauxExecutionBugetaire}} %</b></span>
                       </div>
                    </div>
                  <div class="span12">
                     
                        <apexchart type="pie" width="275" :options="chartOptions" :series="[montantDisponibleBudget,montantExecute]"></apexchart>
                    </div>
                   
              </div>

              <hr />
              
            </div>

            <div class="sidebar-pane" id="messages">
              <h1 class="sidebar-header">
                Messages
                <div class="sidebar-close">
                  <i class="fa fa-caret-left"></i>
                </div>
              </h1>
            </div>

            <div class="sidebar-pane" id="infoRegion">
              <h1 class="sidebar-header">
                
                <div class="sidebar-close">
                  <i class="fa fa-caret-left"></i>
                </div>
              </h1>
              
              <hr />
            </div>
          </div>
        </div>
        <div class="span12">
          <div class="">
            <div style="height: 850px !important; width: 100%">
              <l-map ref="map" :zoom="7.4" :center="initialLocation">
                <l-icon-default></l-icon-default>
                <l-control-layers position="topright"></l-control-layers>
                <l-control-fullscreen
                  position="topleft"
                  :options="{ title: { false: 'Go big!', true: 'Be regular' } }"
                />
                <l-tile-layer
                  v-for="tileProvider in tileProviders"
                  :key="tileProvider.name"
                  :name="tileProvider.name"
                  :visible="tileProvider.visible"
                  :url="tileProvider.url"
                  layer-type="base"
                />

                <!-- <l-control-zoom position="bottomright"  ></l-control-zoom>-->
                <!--   <v-marker-cluster >-->
                <l-circle-marker
                  v-for="l in localisation"
                  :key="l.id"
                  :lat-lng="l.latlng"
                  :radius="1"
                  :color="l.color"
                  :fillColor="l.colorFill"
                  :fillOpacity="2"
                  :name="l.ville"
                >
                  <l-tooltip>{{ l.ville }}</l-tooltip>
                  <l-popup>
                    <b>{{ l.ville }}</b> <br />
                    <div>
                      Budget:
                      <span style="color: #003900"
                        ><b>{{ formatageSomme(l.budget) }}</b></span
                      >
                      <br />
                      Budget exécuté:<span style="color: #00d700"
                        ><b>{{ formatageSomme(l.budgetExecute) }}</b></span
                      ><br />
                      Budget restant:<span style="color: darkred"
                        ><b>{{ formatageSomme(l.budgetReste) }}</b></span
                      ><br />
                      Taux d'exécution:<span style="color: #e36706"
                        ><b>{{ l.tauxBudget }} %</b></span
                      >
                    </div>
                  </l-popup>
                </l-circle-marker>
                <!--  <l-marker v-for="l in localisation"
                                          :key="l.id"
                                          :lat-lng="l.latlng">


                                    &lt;!&ndash;&ndash;&gt;
                                </l-marker>-->
                <!--  </v-marker-cluster>-->
                <v-geosearch :options="geosearchOptions"></v-geosearch>
              </l-map>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Appel de la propriete-->
  </div>
</template>

<script>
import LControlFullscreen from "vue2-leaflet-fullscreen";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import VGeosearch from "vue2-leaflet-geosearch";
import { mapGetters, mapActions } from "vuex";
import { /*latLng,*/ Icon, icon } from "leaflet";
import {
  LMap,
  LTileLayer,
  LIconDefault,
  LControlLayers,
  LPopup,
  LCircleMarker,
  LTooltip,
} from "vue2-leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { formatageSomme } from "../../../src/Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import VueApexCharts from "vue-apexcharts";
import L from "leaflet.minichart";
import ad from "leaflet-html-legend";
import ad1 from "leaflet-easyprint";
import moda from "leaflet-modal";
import { noDCfNoAdmin } from "../../Repositories/Auth";
//import ad2 from "leaflet-easyprint"
export default {
 
  components: {
    LMap,
    LTileLayer,
    VGeosearch,
    LPopup,
    LTooltip,
    LIconDefault,
    LControlLayers,
    LCircleMarker,
    // LIcon
    ModelListSelect,
    apexchart: VueApexCharts,
    LControlFullscreen,
  },
  data() {
    let customicon = icon(
      Object.assign({}, Icon.Default.prototype.options, { iconUrl, shadowUrl })
    );
    return {
      choixAffichageInformationCarte:1,
      info_region: "",
      infortion_sidbar_filter: "",
      type_marche: "",
      slection_carte: 0,
      objet_map: "",
      objet_leaflet: "",
      type_minichart: "pie",
      departement: "",
      sous_prefecture: "",
      region: "",
      infrastructure: "",
      unite_administrative_id: "",
      tableGenerale:[],
      table_memoire_ua:[],
      sources_financement_id:'',
      types_financement_id:'',
      chartOptions: {
            chart: {
              width: 275,
              type: 'pie',
            },
            labels: ['Buget Disponible', 'Budget Execute'],
            colors:['#6C0277', '#edb007'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
      geosearchOptions: {
        // Important part Here
        provider: new OpenStreetMapProvider(),
      },
      active_el: 0,
      search: "",
      budgetGeneralExcecute: 0,
      tauxExecutionBudgetGeneral: 0,
      bugdetGeneralRestant: 0,
      budgetZoneExcecute: 0,
      tauxExecutionBudgetZone: 0,
      bugdetZoneRestant: 0,
      budgetUniteAdmin: 0,
      budgetRestUniteAdmin: 0,
      budgetExecuteUniteAdmin: 0,
      tauxExecutionUniteAdmin: 0,
      iduniteadmin: "",
      libelle_unite_admin: "",
      icon: customicon,
      clusterOptions: {},
      zoom: 7,
      idzone: "",
      activeUa: false,
      zone_geographique: "",
      // center: latLng(6.247273, -7.669441),
      url: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      //  withPopup: latLng(6.247273, -7.669441),
      /// withTooltip: latLng(6.247273, -7.669441),
      currentZoom: 11.5,
      // currentCenter: latLng(6.247273, -7.669441),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      initialLocation: [6.247273, -7.669441],
      showMap: true,
      isActive: false,
      tileProviders: [
        {
          name: "Plan A",
          visible: true,
          attribution: "",
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        },
        {
          name: "Plan",
          visible: false,
          attribution: "",
          url:
            "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
        },
        {
          name: "Plan 2",
          visible: false,
          url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png",
          attribution: "",
        },
        {
          name: "Satelite",
          visible: false,
          url:
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          attribution: "",
        },

        {
          name: "National Geo World Map",
          visible: false,
          url:
            "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
          attribution: "",
        },

        {
          name: "Voyageur",
          visible: false,
          url:
            "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
          attribution: "",
        },
      ],
    };
  },
  created() {
//console.log(this.listeUniteAdministrativeCartographie)
 //this.listeUAPasRegionDepartementSP(this.region)
  },

  computed: {
    // methode pour maper notre guetter
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']),
    ...mapGetters("parametreGenerauxAdministratif", [
      "structures_geographiques",
      "localisations_geographiques",
      "getterLocalisationGeoAll",
      "getterInfrastrucure",
      "exercices_budgetaires"
    ]),
    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge",
      "decomptefactures",
      "budgetEclate",
      "GettersPersonnaliseUaDepartement"
    ]),
    ...mapGetters("bienService", [
      "marches",
      "typeMarches",
      "engagements",
      "getMandatPersonnaliserVise",
      "getActeEffetFinancierPersonnaliser45",
      "getterInformationCarteInfrastructure",
      "getterFiltreCarteInfrastructure",
      "supprmieMarcheFiltreCarteInfrastructure",
      "supprmiInfoFiltreCarteInfrastructure",
      "avenants",
      "acteEffetFinanciers",
      "gettersgestionOrdrePaiement"
    ]),

    ...mapGetters("Utilisateurs", [
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),

   listeRegion(){
      let arrParent=[1]
            return this.getterLocalisationGeoAll.filter(item=>{
                if(item.structure_localisation_geographique_id==5 && !this.inArray(item.parent,arrParent)){
                    return item
                }
            })
        },
        listeDepartement(){
          let arrParent=[2,50,47,795,48,49]
            return this.getterLocalisationGeoAll.filter(item=>{
                if(item.structure_localisation_geographique_id==6 && !this.inArray(item.parent,arrParent)){
                    return item
                }
            })
        },
        listeSouprefecture(){
         
            return this.getterLocalisationGeoAll.filter(item=>{
                let arrayName=item.libelle.split(" ")
                if(item.structure_localisation_geographique_id==8 && arrayName[0]=="Sous-préfecture"){
                    return item
                }
            })
        },
//departement: "",
     // sous_prefecture: "",
 departementPasRegions(){
   let objet=this.listeDepartement
    if(this.region!=""){
  objet=this.listeDepartement.filter(item=>{
                        if(item.parent==this.region){
                            return item
                        }
                    })
    }

     return objet
  
        },
        SousPrefecturePasDepartement(){
          let objet=this.listeSouprefecture
                if(this.departement!="" && this.sous_prefecture==""){
                    objet=this.listeSouprefecture.filter(item=>{
                        if(item.parent==this.departement){
                            return item
                        }
                    })
                }
                if(this.sous_prefecture!=""){
                  objet=this.listeSouprefecture.filter(item=>{
                        if(item.parent==this.sous_prefecture){
                            return item
                        }
                    })
                }
                return objet
            
        },
    

     
/**Cette fonction retour la liste des unite administrative pas regions. Cette fonction n'est pas optimise elle doit etre reecrire*/
      
  
//Retour exercice budget en cours
    exerciceBudgetaireEnCours() {
      let exercice=this.exercices_budgetaires.find(item=>item.encours==1)
      if(exercice==undefined) return ""
        return exercice.annee
    },

//Retour tous les budget eclate des exercices
    budgetEclateExeciceEncours(){
      let budgetEclateExercice=this.budgetEclate.filter(item=>{
        if(item.annebudgetaire==this.exerciceBudgetaireEnCours && item.budget_actif_def==1){
          return item
        }
      })
      if(budgetEclateExercice==undefined) return []

        if(this.types_financement_id!="" && this.sources_financement_id==""){

          return this.budgetEclateExercice.filter(item=>item.type_financement_id==this.types_financement_id)
        }

        if(this.types_financement_id=="" && this.sources_financement_id!=""){
          console.log(this.types_financement_id)
          return this.budgetEclateExercice.filter(item=>item.source_financement_id==this.sources_financement_id)
        }

        if(this.types_financement_id!="" && this.sources_financement_id!=""){
          return this.budgetEclateExercice.filter(item=>{
            if(item.source_financement_id==this.sources_financement_id && item.type_financement_id==this.types_financement_id){
              return item
            }
          })
        }

        return budgetEclateExercice
    },

     budgetEclateExeciceEncoursActuelle(){
      let budgetEclateExercice=this.budgetEclate.filter(item=>{
        if(item.annebudgetaire==this.exerciceBudgetaireEnCours && item.budget_active==1){
          return item
        }
      })
      if(budgetEclateExercice==undefined) return []

        if(this.types_financement_id!="" && this.sources_financement_id==""){
          return this.budgetEclateExercice.filter(item=>item.type_financement_id==this.types_financement_id)
        }

        if(this.types_financement_id=="" && this.sources_financement_id!=""){
          return this.budgetEclateExercice.filter(item=>item.source_financement_id==this.sources_financement_id)
        }

        if(this.types_financement_id!="" && this.sources_financement_id!=""){
          return this.budgetEclateExercice.filter(item=>{
            if(item.source_financement_id==this.sources_financement_id && item.type_financement_id==this.types_financement_id){
              return item
            }
          })
        }

        return budgetEclateExercice
    },


listeUniteAdministrativeCartographie(){
  //let objet=this.GettersPersonnaliseUaDepartement
  //recherche les unite administrative pas regions
  let vm=this
 
  if(vm.region=="" && vm.departement=="" && vm.sous_prefecture=="" && vm.unite_administrative_id==""){
    return vm.GettersPersonnaliseUaDepartement
  }
  
  if(vm.region!="" && vm.departement=="" && vm.sous_prefecture=="" && vm.unite_administrative_id==""){
    return vm.GettersPersonnaliseUaDepartement.filter(item=>item.region_id==vm.region)
   }
   
//recherche les unite administrative pas département
   if(vm.region=="" && vm.departement!="" && vm.sous_prefecture=="" && vm.unite_administrative_id==""){
     return vm.GettersPersonnaliseUaDepartement.filter(item=>item.afficheDepartement==vm.departement)
   }
 
   //recherche les unite administrative pas sous prefecture
   if(vm.region=="" && vm.departement=="" && vm.sous_prefecture!="" && vm.unite_administrative_id==""){
     return vm.GettersPersonnaliseUaDepartement.filter(item=>item.localisationgeo_id==vm.sous_prefecture)
   }
   
   //recherche les unite administrative pas ua
   if(vm.region=="" && vm.departement=="" && vm.sous_prefecture=="" && vm.unite_administrative_id!=""){
    return vm.GettersPersonnaliseUaDepartement.filter(item=>item.id==vm.unite_administrative_id)
   }

      

   //Liste des unite administrative pas regions et departement
   if(vm.region=="" && vm.departement!="" && vm.sous_prefecture=="" && vm.unite_administrative_id==""){
     return vm.GettersPersonnaliseUaDepartement.filter(item=>{
      if(item.afficheDepartement==vm.departement && item.region_id==vm.region){
        return item
      }
    })
   }
 
//liste des unite administrative pas regions,departement et sous prefecture
 if(vm.region=="" && vm.departement!="" && vm.sous_prefecture!="" && vm.unite_administrative_id==""){
     return vm.GettersPersonnaliseUaDepartement.filter(item=>{
      if(item.afficheDepartement==vm.departement && item.region_id==vm.region && item.localisationgeo_id==vm.sous_prefecture){
        return item
      }
    })
   }



if(vm.region!="" && vm.departement=="" && vm.sous_prefecture=="" && vm.unite_administrative_id!=""){
     return vm.GettersPersonnaliseUaDepartement.filter(item=>{
      if(item.id==vm.unite_administrative_id && item.region_id==vm.region){
        return item
      }
    })
   }


   if(vm.region!="" && vm.departement!="" && vm.sous_prefecture=="" && vm.unite_administrative_id!=""){
    return vm.GettersPersonnaliseUaDepartement.filter(item=>{
      if(item.id==vm.unite_administrative_id && item.region_id==vm.region && item.afficheDepartement==vm.departement){
        return item
      }
    })
   }

if(vm.region!="" && vm.departement!="" && vm.sous_prefecture!="" && vm.unite_administrative_id!=""){
     return vm.GettersPersonnaliseUaDepartement.filter(item=>{
      if(item.id==vm.unite_administrative_id && item.region_id==vm.region && item.afficheDepartement==vm.departement && item.localisationgeo_id==vm.sous_prefecture){
        return item
      }
    })
   }


   if(vm.region=="" && vm.departement!="" && vm.sous_prefecture!="" && vm.unite_administrative_id!=""){
     return vm.GettersPersonnaliseUaDepartement.filter(item=>{
      if(item.id==vm.unite_administrative_id && item.afficheDepartement==vm.departement && item.localisationgeo_id==vm.sous_prefecture){
        return item
      }
    })
   }

   if(vm.region=="" && vm.departement!="" && vm.sous_prefecture=="" && vm.unite_administrative_id!=""){
     return vm.GettersPersonnaliseUaDepartement.filter(item=>{
      if(item.id==vm.unite_administrative_id && item.afficheDepartement==vm.departement){
        return item
      }
    })
   }

 
if(vm.region=="" && vm.departement=="" && vm.sous_prefecture!="" && vm.unite_administrative_id!=""){
    return vm.GettersPersonnaliseUaDepartement.filter(item=>{
      if(item.id==vm.unite_administrative_id && item.localisationgeo_id==vm.sous_prefecture){
        return item
      }
    })
   }

   if(vm.region!="" && vm.departement=="" && vm.sous_prefecture!="" && vm.unite_administrative_id!=""){
     return vm.GettersPersonnaliseUaDepartement.filter(item=>{
      if(item.id==vm.unite_administrative_id && item.localisationgeo_id==vm.sous_prefecture && item.region_id==vm.region){
        return item
      }
    })
   }


   return vm.GettersPersonnaliseUaDepartement
},


montantBudgetInitiale(){
    let vm=this
       
         let montant=0;
    
      vm.listeUniteAdministrativeCartographie.forEach(function(value){
       let budget=vm.budgetEclateExeciceEncours.filter(item=>item.uniteadministrative_id==value.id)
       let initeVal = 0;
        let montBudgetInit = budget.reduce(function (total, currentValue) {
          return total + parseFloat(currentValue.dotation);
        }, initeVal);
       montant=parseFloat(montant) +montBudgetInit
       
      })
    return montant
   
   },

   montantBudgetInitialePasRegion(){
    return id=>{
           if(id != null && id != ""){
             let montant=0;
           let vm=this
             let objet=this.listeUniteAdministrativeCartographie.filter(item=>{
              if(item.region_id==id){
             return item
              }
             })
              objet.forEach(function(value){
               let budget=vm.budgetEclateExeciceEncours.filter(item=>item.uniteadministrative_id==value.id)
               let initeVal = 0;
                let montBudgetInit = budget.reduce(function (total, currentValue) {
                  return total + parseFloat(currentValue.dotation);
                }, initeVal);
               montant=parseFloat(montant) +montBudgetInit
              })
               return montant
            }

        return 0
    }
   
   },


montantBudgetActuelle(){
   let vm=this
      
      let montant=0;
     
      vm.listeUniteAdministrativeCartographie.forEach(function(value){
       let budget=vm.budgetEclateExeciceEncoursActuelle.filter(item=>item.uniteadministrative_id==value.id)
       let initeVal = 0;
        let montBudgetInit = budget.reduce(function (total, currentValue) {
          return total + parseFloat(currentValue.dotation);
        }, initeVal);
       montant=parseFloat(montant) +montBudgetInit
      })
    return montant
   },


montantBudgetActuellePasRegion(){
     return id=>{
           if(id != null && id != ""){
             let montant=0;
           let vm=this
             let objet=this.listeUniteAdministrativeCartographie.filter(item=>{
              if(item.region_id==id){
             return item
              }
             })
              objet.forEach(function(value){
             let budget=vm.budgetEclateExeciceEncoursActuelle.filter(item=>item.uniteadministrative_id==value.id)
               let initeVal = 0;
                let montBudgetInit = budget.reduce(function (total, currentValue) {
                  return total + parseFloat(currentValue.dotation);
                }, initeVal);
               montant=parseFloat(montant) +montBudgetInit
              })
               return montant
            }

        return 0
    }
  },
 

opValider(){
  let tableau_type_op=[1,4]
     let tableau_decision=[9,8]
return this.gettersgestionOrdrePaiement.filter(item=>{
  if(item.exercice ==this.exerciceBudgetaireEnCours && this.inArray(item.type_ordre_paiement,tableau_type_op) && this.inArray(item.decision_cf,tableau_decision) ){
     return item
  }
})        
},
//calcul de montant exute op pas

montantExecute(){
  let vm=this
      
      let montant=0;
      
      vm.listeUniteAdministrativeCartographie.forEach(function(value){
       let listeOp=vm.opValider.filter(item=>item.unite_administrative_id==value.id)
       let initeVal = 0;
        let montantExcute = listeOp.reduce(function (total, currentValue) {
          return total + parseFloat(currentValue.montant_ordre_paiement);
        }, initeVal);
       montant=parseFloat(montant) +montantExcute
      })
    return montant
   
}
,
montantExecutePasRegions(){
  return id=>{
     if(id != null && id != ""){
      let montant=0;
           let vm=this
             let objet=this.listeUniteAdministrativeCartographie.filter(item=>{
              if(item.region_id==id){
             return item
              }
             })

             objet.forEach(function(value){
       let listeOp=vm.opValider.filter(item=>item.unite_administrative_id==value.id)
       let initeVal = 0;
        let montantExcute = listeOp.reduce(function (total, currentValue) {
          return total + parseFloat(currentValue.montant_ordre_paiement);
        }, initeVal);
       montant=parseFloat(montant) +montantExcute
      })
    return montant
     }
      return 0
      
  }
   
},
montantDisponibleBudget(){
   return parseFloat(this.montantBudgetActuelle) - parseFloat(this.montantExecute)
},


montantDisponibleBudgetPasRegions(){
   return id=>{
    
     if(id != null && id != ""){
return parseFloat(this.montantBudgetActuellePasRegion(id)) - parseFloat(this.montantExecutePasRegions(id))
     }
     return 0

      
     
   }

},
    tauxExecutionBugetaire(){
        let taux=(parseFloat(this.montantExecute) * 100)/parseFloat(this.montantBudgetActuelle)
        if (taux!="NaN") {
         return taux.toFixed(2)
        }
        return 0
    },
    //inArray
    inArray() {
      return (valeur, tableau)=>{
         let length = tableau.length;
        for(let i = 0; i < length; i++) {
            if(tableau[i] == valeur) return true;
        }
    return false;
      }
   
},
    regions() {
      return this.listeRegion.filter((item) => {
        if (
          item.longitude != null &&
          item.structure_localisation_geographique_id==5
        ) {
          return item;
        }
      });
    },

    noDCfNoAdmin: noDCfNoAdmin,
    filtre_unite_admin() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        if (this.getterUniteAdministrativeByUser.length > 0) {
          this.GettersPersonnaliseUaDepartement.filter((item) => {
            let val = this.getterUniteAdministrativeByUser.find(
              (row) => row.unite_administrative_id == item.id
            );
            if (val != undefined) {
              colect.push(item);
              return item;
            }
          });
        }

        return colect;
      }
      return this.GettersPersonnaliseUaDepartement;
    },


    getRandomInt() {
      return (max) => {
        return Math.floor(Math.random() * Math.floor(max));
      };
    },
   

   

    localisation() {
      let localisation = [];
      // console.log(this.getMandatPersonnaliserVise)
      let vM = this;
      //    console.log(this.localisations_geographiques)
      vM.getLocalisation(vM.region).forEach(function (value) {
       
          if (value.longitude != null && value.latitude != null) {
            let coordonne = [];
            coordonne.push(value.latitude);
            coordonne.push(value.longitude);
           // console.log(value)
            /**
             * Recuperation des unite administrative de la zone geographique
             * @type {*[]}
             */
            
            let color = "";
            let colorFill = "";
           
             let montant_previsionnel=vM.montantBudgetActuellePasRegion(value.id)
            let montant_execute=vM.montantExecutePasRegions(value.id)
            let taux=(montant_execute * 100)/montant_previsionnel
            let montant_reste=parseFloat(montant_previsionnel) - parseFloat(montant_execute)
            let taux_montantPrevueRegion=(montant_previsionnel * 100)/vM.montantBudgetActuelle
           
           color = "#000000";
            colorFill = "#000000";
            let objetAlocalise = {
              id: value.id,
              ville: value.libelle,
              latlng: coordonne,
              latitude:value.latitude,
              longitude:value.longitude,
              budget: montant_previsionnel,
              budgetReste: montant_reste,
              budgetExecute: montant_execute,
              tauxBudget: taux.toFixed(2),
              tauxMontantPrevue:taux_montantPrevueRegion,
              color: color,
              colorFill: colorFill,
            };
            localisation.push(objetAlocalise);
          }
        
      });
      return localisation;
    },


//Retours les regions, departement,sous-prefecture
    getLocalisation() {
      return (reg) => {
        if (reg != "") {
           return this.listeRegion.filter(
            (item) => item.id == reg
          );
         
        }

        return this.listeRegion;
      };
    },
  
  },
  methods: {
    ...mapActions("bienService", [
      "ajouterListeMarcheFiltreCarteInfrastructure",
      "ajouterInfoFiltreCarteInfrastructure",
    ]),
    filterBudgetRegionsMemoire(){
    let vm=this
    this.tableGenerale=this.table_memoire_ua
      if(vm.region){
        this.tableGenerale=this.tableGenerale.filter(item=>item.region_id=this.region)
      }
   
   },
   filterBudgetUniteAdmiMemoire(){
    let vm=this
    this.tableGenerale=this.table_memoire_ua
      if(vm.unite_administrative_id){
        this.tableGenerale=this.tableGenerale.filter(item=>item.id=this.unite_administrative_id)
      }
   
   },
   filterBudgetDepartementMemoire(){
    let vm=this
    this.tableGenerale=this.table_memoire_ua
      if(vm.departement){
        this.tableGenerale=this.tableGenerale.filter(item=>item.departement_id=this.departement)
      }
   
   },
    filterBudgetSousPrefectureMemoire(){
    let vm=this
    this.tableGenerale=this.table_memoire_ua
      if(vm.sous_prefecture){
        this.tableGenerale=this.tableGenerale.filter(item=>item.sous_prefecture_id=this.sous_prefecture)
      }
   
   },
    sousPrefectureMutation(id){
      let vm=this
             let info=""
             if(id){
              info=id
             }
             let colect=[]
             console.log(info)
              this.listeSouprefecture.forEach(item => {
             // console.log(item)
                 
              let departement=vm.listeDepartement.find(val=>val.id==item.parent)
               
                let unite=vm.filtre_unite_admin.filter(v=>v.localisationgeo_id==item.id)

        let container = {
                  ...item,
                   region_id:departement.parent,
                   departement:departement.id,
                   ua:unite
               }
             colect.push(container)
             // return container;
          })
       return colect
     },
       listeUAPasRegionDepartementSP(id){
          
            let info=''
            let vm=this
            if(id!=""){
                info=id
              }
             vm.table_memoire_ua=[]
             vm.tableGenerale=[]
         //  
            let objet=this.sousPrefectureMutation(info)
             objet.filter(item=>{
                 if(item.ua.length){
                  item.ua.forEach(val=>{
                    let obj={
                      ...val,
                      region_id:item.region_id,
                      departement_id:item.departement,
                      sous_prefecture_id:item.id
                    }
                    vm.tableGenerale.push(obj)
                    vm.table_memoire_ua.push(obj)
                   // colect.push(obj)
                  })
                  
                 }
                 return item
             })
              /**/
       
        //  localStorage.setItem('ua_information', JSON.stringify(colect))
        },
      activedOptionMenu(value){
      this.choixAffichageInformationCarte= value
      
     },
     videTypeFinancement(){
       this.types_financement_id=""
     },
     videSousFinancement(){
        this.sources_financement_id=""
     },

    videUniteAdmin() {
      this.unite_administrative_id = "";
      // this.zoom=5
      // this.objetUnite=""
      // this.info_sidebar_marche.close()
      // this.info_sidebar_marche.disablePanel('infomarche');
    },
    videDep(){
this.departement=''
    },
      videSous(){
this.sous_prefecture=''
    },
    videRegions() {
      this.region = "";
      // this.zoom=5;
      // this.objetUnite=""
      // this.info_sidebar_marche.close()
      // this.info_sidebar_marche.disablePanel('infomarche');
    },
    videInfrastructure() {
      this.infrastructure = "";
    },

    /**
     * Fonction qui supprimer les minichart
     * @param map
     */
    deleteLeafleMiniCharts(map) {
      map.eachLayer(function (t) {
        if (t._chart) {
          t._chart.remove();
        }
      });
    },

    formatageSomme: formatageSomme,
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
    uniteAdmin(id, ville) {
      /*this.activeUa=false*/
      this.iduniteadmin = "";
      this.libelle_unite_admin = "";
      this.idzone = id;
      this.zone_geographique = ville;
     // console.log(id);
    },
    uniteAdministrativeSelect(id, libelle, $event) {
      this.active_el = id;
      this.iduniteadmin = id;
      this.libelle_unite_admin = libelle;
      console.log($event);
      this.zone_geographique = "";
    },
    afficher() {
      this.idzone = "";
      this.active_el = 0;
      this.zone_geographique = "";
      this.iduniteadmin = "";
      this.libelle_unite_admin = "";
    },
    click: (e) => console.log("clusterclick", e),
    ready: (e) => console.log("ready", e),

    /***
     * Fonction qui navigue ver la vue *
     * */
    selctionRegion(id) {
      this.region=id
    },
    integrationChartPasRegisonSurCarte() {
      let vm = this;
      let arrayBar = [];
      let arrayColor = [];
      let arrayLabele = [];
      if (vm.objet_map != "" && vm.objet_leaflet != "") {
        //  let tail=this.localisation.length
        if (this.localisation.length > 0) {
          vm.localisation.forEach(function (value) {
            let taux = 0;
            let width = 60;
            let height = 60;
           

          
           // console.log(value.tauxBudget)
            arrayColor.push("#6C0277");
            arrayColor.push("#edb007");
            arrayLabele.push(value.tauxBudget + "%");
            arrayBar.push(value.budgetReste);
            arrayBar.push(value.budgetExecute);
            let taux_region=value.tauxMontantPrevue
      if (vm.type_minichart == "bar") {
                  width = 20;
                  height = taux_region + 30;
                } else {
                  if (taux_region < 5) {
                    width = taux_region + 5;
                  }

                  if (5 < taux_region && taux_region < 10) {
                    //console.log(taux_region);
                    width = taux + 15;
                  }

                  if (10 < taux_region && taux_region < 20) {
                    width = taux_region + 25;
                  }

                  if (20 < taux_region && taux_region < 50) {
                    width = taux_region + 30;
                  }

                  if (50 < taux_region && taux_region < 101) {
                    width = taux_region + 35;
                  }
                }
          
          

              
            var myBarChart = vm.objet_leaflet
              .minichart(value.latlng, {
                data: arrayBar,
                type: vm.type_minichart,
                colors: arrayColor,
                width: width,
                height: height,
                // labels:arrayLabele
              })
              .on("click", function (event) {
                console.log(event);
              vm.selctionRegion(value.id);
              });

            vm.objet_map.addLayer(myBarChart);

            //  vm.objet_leaflet.marker(value.latlng).bindTooltip(value.ville, { permanent: true, offset: [0, 12] }).addTo(vm.objet_map);
            //vm.objet_leaflet.marker(value.latlng).bindLabel(value.ville).addTo(vm.objet_map);

/*let labelLocation = new this.objet_leaflet.LatLng(value.latitude, value.longitude);
    let labelTitle = new window.L.LabelOverlay(labelLocation, '<b>'+value.ville +'</b>');
    vm.objet_map.addLayer(labelTitle);*/

         vm.objet_leaflet
              .circleMarker(value.latlng, {
                radius: 1,
                fillColor: "#ff7800",
                color: "#ff7800",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
              })
              .bindTooltip(
                "<div style='background:white; padding:1px 3px 1px 3px'><b>" +
                  value.ville +
                  "</b></div>",
                {
                  permanent: true,
                  direction: "bottom",
                  sticky: true,
                  offset: [0, 10],
                  opacity: 0.75,
                  className: "leaflet-tooltip",
                }
              )
              .addTo(vm.objet_map);
            arrayBar = [];
            arrayColor = [];
            arrayLabele = [];
          });
        }
      }
    },
    getInfoLegende(id) {
      let objet = this.getterInfrastrucure.find((item) => item.code == id);
      if (objet != undefined) {
        this.infrastructure = objet.id;
      }
    },
  },

  watch: {
    sous_prefecture: function (value) {
      console.log(value);
 //this.filterBudgetSousPrefectureMemoire()
      this.deleteLeafleMiniCharts(this.objet_map);
      this.integrationChartPasRegisonSurCarte();
     
    },
    departement: function (value) {
      console.log(value);
     // this.filterBudgetDepartementMemoire()
 //this.listeUAPasRegionDepartementSP(this.region)
      this.deleteLeafleMiniCharts(this.objet_map);
      this.integrationChartPasRegisonSurCarte();
     
    },
    type_marche: function (value) {
      console.log(value);

      this.deleteLeafleMiniCharts(this.objet_map);
      this.integrationChartPasRegisonSurCarte();
      //                this.infortion_sidbar_filter.close();
      //                this.infortion_sidbar_filter.disablePanel('infoRegion');
      //                this.infortion_sidbar_filter.open("home")
    },
    slection_carte: function (value) {
      console.log(value);
       this.listeUAPasRegionDepartementSP(this.region)
      if (value == 0) {
        this.deleteLeafleMiniCharts(this.objet_map);
        this.integrationChartPasRegisonSurCarte();
      } else {
        this.deleteLeafleMiniCharts(this.objet_map);
        //this.integrationChartPasRegisonSurCarte()
      }
    },
    type_minichart: function (value) {
      console.log(value);

      this.deleteLeafleMiniCharts(this.objet_map);
      this.integrationChartPasRegisonSurCarte();
    },
    infrastructure: function (value) {
      console.log(value);
      this.deleteLeafleMiniCharts(this.objet_map);
      this.integrationChartPasRegisonSurCarte();
      //                this.infortion_sidbar_filter.close();
      //                this.infortion_sidbar_filter.disablePanel('infoRegion');
      //                this.infortion_sidbar_filter.open("home")
    },
    region: function (value) {
      console.log(value);
//this.filterBudgetRegionsMemoire()
      this.deleteLeafleMiniCharts(this.objet_map);
      this.integrationChartPasRegisonSurCarte();
      //                this.infortion_sidbar_filter.close();
      //                this.infortion_sidbar_filter.disablePanel('infoRegion');
      //                this.infortion_sidbar_filter.open("home")
    },
    unite_administrative_id: function (value) {
      console.log(value);
     
      this.deleteLeafleMiniCharts(this.objet_map);
     
      this.integrationChartPasRegisonSurCarte();
   
    },
    sources_financement_id: function (value) {
      console.log(value);
     
      this.deleteLeafleMiniCharts(this.objet_map);
     
      this.integrationChartPasRegisonSurCarte();
   
    },
      types_financement_id: function (value) {
      console.log(value);
     
      this.deleteLeafleMiniCharts(this.objet_map);
     
      this.integrationChartPasRegisonSurCarte();
   
    },
  },
  mounted() {
     
    /*   setTimeout(() => {
                console.log('done')
                this.$nextTick(() =>{
                    this.clusterOptions = { disableClusteringAtZoom: 11 }
                });
            }, 5000);*/
    console.log(L);
    console.log(ad);
    console.log(ad1);
    console.log(moda);

  
    //console.log()
    /**
 *  objet_map:"",
              objet_leaflet:"",
 */
    const mapComponent = this.$refs.map;

    const map = mapComponent.mapObject;
    this.objet_map = mapComponent.mapObject;
    this.objet_leaflet = window.L;

  



    let sid = window.L;
    let panel_options = {
      closeButton: true,
      position: "left",
      autoPan: false,
    };
   // console.log("interne");
    console.log(sid);
   // console.log("..interne...");

    var sidebar = sid.control.sidebar("map10", panel_options).addTo(map);
    sidebar.open("home");
    this.infortion_sidbar_filter = sidebar;
    this.infortion_sidbar_filter.disablePanel("infoRegion");
    var panelContent = {
      id: "userinfo", // UID, used to access the panel
      tab: "", // content can be passed as HTML string,
      // DOM elements can be passed, too
      title: "Your Profile", // an optional pane header
      position: "bottom", // optional vertical alignment, defaults to 'top'
    };
    sidebar.addPanel(panelContent);

    sidebar.addPanel({
      id: "ghlink",
      tab: "",
      button: "#",
    });

    /* add an button with click listener */
    sidebar.addPanel({
      id: "click",
      tab: "",
      button: function (event) {
        console.log(event);
      },
    });

    sid
      .easyPrint({
        title: "Imprimer",
        position: "topleft",
        sizeModes: ["A4Portrait", "A4Landscape"],
      })
      .addTo(map);

    /*Legend specific*/
    //var legend = sid.control({ position: "bottomright" });
    //
    //legend.onAdd = function(map) {
    //  var div = sid.DomUtil.create("div", "legend");
    //  div.innerHTML += "<h4>Légende</h4>";
    //  div.innerHTML += '<i style="background: #6C0277"></i><span>Sanitaires</span><br>';
    //  div.innerHTML += '<i style="background: #F0C300"></i><span>Scolaires</span><br>';
    //  div.innerHTML += '<i style="background: #E73E01"></i><span>Communautaires</span><br>';
    //  div.innerHTML += '<i style="background: #22780F"></i><span>Routière</span><br>';
    //  console.log(map)
    //
    //
    //  return div;
    //};

    //legend.addTo(map);

    let htmlLegend3 = sid.control.htmllegend({
      position: "bottomright",
      legends: [
        {
          name: "Legende",
          elements: [
            {
              label: '<div id="sanitaire">Bugdet Disponible</div>',
              html: "<div class='sante1'></div>",
            },
            {
              label: '<div id="scolaires">Budget Executé</div>',
              html: "<div class='scolaire1'></div>",
            },
            
          ],
        },
      ],
      collapseSimple: false,
      detectStretched: false,
      visibleIcon: "icon icon-eye",
      hiddenIcon: "icon icon-eye-slash",
    });
    map.addControl(htmlLegend3);

    let vMm = this;
    //click legende sanitaire
    const sanitaire = document.querySelector("#sanitaire");
    sanitaire.addEventListener("click", function (event) {
      console.log(event);
      vMm.getInfoLegende(1);
      // console.log("Guei est dans la place....... ")
    });

   
    //click legende scolaires
    const scolaires = document.querySelector("#scolaires");
    scolaires.addEventListener("click", function (event) {
      console.log(event);
      vMm.getInfoLegende(2);
      // console.log("Guei est dans la place....... ")
    });
   
    this.integrationChartPasRegisonSurCarte();
  },
};
</script>
<style>
.sante1 {
  width: 20px;
  height: 20px;
  background: #6c0277 !important;
}
.scolaire1 {
  width: 20px;
  height: 20px;
  background: #edb007 !important;
}
.communautaire1 {
  width: 20px;
  height: 20px;
  background: #e73e01;
}
.routier1 {
  width: 20px;
  height: 20px;
  background: #22780f;
}
/* sidebar css */
.sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: 2000;
}
.sidebar.collapsed {
  width: 40px;
}
@media (min-width: 768px) {
  .sidebar {
    top: 10px;
    bottom: 10px;
    transition: width 500ms;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .sidebar {
    width: 305px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .sidebar {
    width: 390px;
  }
}
@media (min-width: 1200px) {
  .sidebar {
    width: 460px;
  }
}

.sidebar-left {
  left: 0;
}
@media (min-width: 768px) {
  .sidebar-left {
    left: 10px;
  }
}

.sidebar-right {
  right: 0;
}
@media (min-width: 768px) {
  .sidebar-right {
    right: 10px;
  }
}

.sidebar-tabs {
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: #fff;
}
.sidebar-left .sidebar-tabs {
  left: 0;
}
.sidebar-right .sidebar-tabs {
  right: 0;
}
.sidebar-tabs,
.sidebar-tabs > ul {
  position: absolute;
  width: 40px;
  margin: 0;
  padding: 0;
}
.sidebar-tabs > li,
.sidebar-tabs > ul > li {
  width: 100%;
  height: 40px;
  color: #333;
  font-size: 12pt;
  overflow: hidden;
  transition: all 80ms;
}
.sidebar-tabs > li:hover,
.sidebar-tabs > ul > li:hover {
  color: #000;
  background-color: #eee;
}
.sidebar-tabs > li.active,
.sidebar-tabs > ul > li.active {
  color: #fff;
  background-color: green;
}
.sidebar-tabs > li.disabled,
.sidebar-tabs > ul > li.disabled {
  color: rgba(51, 51, 51, 0.4);
}
.sidebar-tabs > li.disabled:hover,
.sidebar-tabs > ul > li.disabled:hover {
  background: transparent;
}
.sidebar-tabs > li.disabled > a,
.sidebar-tabs > ul > li.disabled > a {
  cursor: default;
}
.sidebar-tabs > li > a,
.sidebar-tabs > ul > li > a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 40px;
  color: inherit;
  text-decoration: none;
  text-align: center;
}
.sidebar-tabs > ul + ul {
  bottom: 0;
}

.sidebar-content {
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  overflow-x: hidden;
  overflow-y: auto;
}
.sidebar-left .sidebar-content {
  left: 40px;
  right: 0;
}
.sidebar-right .sidebar-content {
  left: 0;
  right: 40px;
}
.sidebar.collapsed > .sidebar-content {
  overflow-y: hidden;
}

.sidebar-pane {
  display: none;
  left: 0;
  right: 0;
  box-sizing: border-box;
  padding: 10px 20px;
}
.sidebar-pane.active {
  display: block;
}
@media (min-width: 768px) and (max-width: 991px) {
  .sidebar-pane {
    min-width: 265px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .sidebar-pane {
    min-width: 350px;
  }
}
@media (min-width: 1200px) {
  .sidebar-pane {
    min-width: 420px;
  }
}

.sidebar-header {
  margin: -10px -20px 0;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  font-size: 14.4pt;
  color: #fff;
  background-color: green;
}
.sidebar-right .sidebar-header {
  padding-left: 40px;
}

.sidebar-close {
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
}
.sidebar-left .sidebar-close {
  right: 0;
}
.sidebar-right .sidebar-close {
  left: 0;
}

.sidebar-left ~ .sidebar-map {
  margin-left: 40px;
}
@media (min-width: 768px) {
  .sidebar-left ~ .sidebar-map {
    margin-left: 0;
  }
}

.sidebar-right ~ .sidebar-map {
  margin-right: 40px;
}
@media (min-width: 768px) {
  .sidebar-right ~ .sidebar-map {
    margin-right: 0;
  }
}

.sidebar {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
}
.sidebar.leaflet-touch {
  box-shadow: none;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
}
@media (min-width: 768px) {
  .sidebar {
    border-radius: 4px;
  }
  .sidebar.leaflet-touch {
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
}

@media (min-width: 768px) {
  .sidebar-left ~ .sidebar-map .leaflet-left {
    transition: left 500ms;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .sidebar-left ~ .sidebar-map .leaflet-left {
    left: 315px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .sidebar-left ~ .sidebar-map .leaflet-left {
    left: 400px;
  }
}

@media (min-width: 1200px) {
  .sidebar-left ~ .sidebar-map .leaflet-left {
    left: 470px;
  }
}

@media (min-width: 768px) {
  .sidebar-left.collapsed ~ .sidebar-map .leaflet-left {
    left: 50px;
  }
}

@media (min-width: 768px) {
  .sidebar-right ~ .sidebar-map .leaflet-right {
    transition: right 500ms;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .sidebar-right ~ .sidebar-map .leaflet-right {
    right: 315px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .sidebar-right ~ .sidebar-map .leaflet-right {
    right: 400px;
  }
}

@media (min-width: 1200px) {
  .sidebar-right ~ .sidebar-map .leaflet-right {
    right: 470px;
  }
}

@media (min-width: 768px) {
  .sidebar-right.collapsed ~ .sidebar-map .leaflet-right {
    right: 50px;
  }
}
#info {
  float: right;
  margin: 0;
  width: 50%;
  height: 100%;
}

/*General marker style*/
.map-marker {
  position: relative;
  text-align: center;
  font-weight: bold;
  background: #444;
  width: 26px;
  height: 26px;
  border-radius: 5px;
  margin-top: -34px; /*Shift by arrow top+height*/
  margin-left: -13px; /*Shift by half the marker width*/
}

.map-marker div.arrow {
  position: relative;
  border-style: solid;
  border-color: #444 transparent transparent transparent;
  border-width: 10px 6px 0 6px; /*Arrow w/h is defined by the borders*/
  left: 7px; /*(Marker width - arrow width)/2*/
  width: 0px;
  height: 0px;
}

.map-marker div.icon {
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ccc;
  width: 24px; /*Same as marker width*/
  height: 24px; /*Same as marker height*/
  line-height: 24px;
  font-size: 12px;
  border-radius: 4px;
  margin-left: 1px;
  margin-top: 1px;
}

/*Marker content instances
.map-marker.exclamation div.icon:before{
  content: '!';
}
.map-marker.A div.icon:before{
  content: 'A';
}

Marker color instances
.map-marker.red div.icon{background: #ff2222;}

.map-marker.green div.icon{background: #008800;color: #fff;}
.map-marker.green {background: #000;}
.map-marker.green div.arrow{border-top-color: #000;}

Marker states
.map-marker.inactive {
  opacity: 0.6;
}*/
.red {
  color: #fff;
  background-color: red !important;
}
.blah {
  cursor: grab !important;
}
.widget-content1 {
  height: 500px !important;
  overflow-y: scroll !important;
}

.class-popup .leaflet-popup-content-wrapper {
  background: #2980b9;
  color: #fff;
  font-size: 10px;
  line-height: 10px;
}

.class-popup .leaflet-popup-content-wrapper a {
  color: #2980b9;
}
.class-popup .leaflet-popup-tip-container {
  width: 40px;
  height: 20px;
}
.class-popup .leaflet-popup-tip {
  background: #2980b9;
}

/* tooltip-class*/

.class-tooltip {
  background: green;
  border: 2px solid cyan;
}
.leaflet-tooltip-left.class-tooltip::before {
  border-left-color: cyan;
}
.leaflet-tooltip-right.class-tooltip::before {
  border-right-color: cyan;
}

.titreLable {
  background: red;
}

.leaflet-tooltip {
  /*position: absolute !important;
    padding: 6px !important;
    background-color: #000 !important;
    border: 1px solid #fff !important;
    border-radius: 3px !important;
    color: #222 !important;
    white-space: nowrap !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
    pointer-events: none !important;
    box-shadow: 0 1px 3px rgba(0,0,0,0.4) !important;*/
  position: absolute !important;
  padding: 4px !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
  border: 0px solid #000 !important ;
  color: #000 !important;
  white-space: nowrap !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
  pointer-events: none !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) !important;

  font-size: 9px !important;
}

/*Legend specific*/
.legend {
  padding: 6px 8px;
  font: 14px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255, 255, 255, 0.8);
  /*box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);*/
  /*border-radius: 5px;*/
  line-height: 24px;
  color: #555;
}
.legend h4 {
  text-align: center;
  font-size: 16px;
  margin: 2px 12px 8px;
  color: #777;
}

.legend span {
  position: relative;
  bottom: 3px;
}

.legend i {
  width: 18px;
  height: 18px;
  float: left;
  margin: 0 8px 0 0;
  opacity: 0.7;
}

.legend i.icon {
  background-size: 18px;
  background-color: rgba(255, 255, 255, 1);
}

.inputGroup {
  background-color: #fff;
  display: block;
  margin: 5px 0;
  position: relative;
}
.inputGroup label {
  padding: 1px 10px;
  display: block;
  text-align: left;
  color: #3c454c;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;
}
.inputGroup label:before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  content: "";
  background-color: #5562eb;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale3d(1, 1, 1);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  z-index: -1;
}
.inputGroup label:after {
  width: 23px;
  height: 23px;
  content: "";
  border: 2px solid #d1d7dc;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
  background-repeat: no-repeat;
  background-position: 2px 3px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  right: 50px;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 200ms ease-in;
}
.inputGroup input:checked ~ label {
  color: #fff;
}
.inputGroup input:checked ~ label:before {
  transform: translate(-50%, -50%) scale3d(70, 56, 1);
  opacity: 1;
}
.inputGroup input:checked ~ label:after {
  background-color: #54e0c7;
  border-color: #54e0c7;
}
.inputGroup input {
  width: 20px;
  height: 20px;
  order: 1;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  visibility: hidden;
}

       label {
  display: block;
  color: #7d7d7d;
}

.floatBlock {
  margin: 0 1.81em 0 0;
}

.labelish {
  color:#7d7d7d;
  margin: 0;
}

.paymentOptions {
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  break-before: always;
  margin: 0 0 3em 0;
}

#purchaseOrder {
  margin: 0 0 2em 0;
}



</style>
