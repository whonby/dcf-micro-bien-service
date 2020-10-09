<template>

  <div>


    <div class="container-fluid">
<!--      <l-map :center="[-23.752961, -57.854357]" :zoom="6" style="height: 500px;" :options="mapOptions1">-->
<!--        <l-choropleth-layer :data="pyDepartmentsData" titleKey="department_name" idKey="department_id" :value="value" :extraValues="extraValues" geojsonIdKey="dpto" :geojson="geojson" :colorScale="colorScale">-->
<!--          <template slot-scope="props">-->
<!--            <l-info-control :item="props.currentItem" :unit="props.unit" title="Department" placeholder="Hover over a department"/>-->
<!--            <l-reference-chart title="Girls school enrolment" :colorScale="colorScale" :min="props.min" :max="props.max" position="topright"/>-->
<!--          </template>-->
<!--        </l-choropleth-layer>-->
<!--      </l-map>-->
<!--      <Button @click="value3 = true" type="primary">Create</Button>-->
<!--      <div class="row-fluid">-->
<!--        <div class="">-->
<!--          <div class="widget-box">-->
<!--            <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>-->
<!--              <h5>Cartographie des marchés</h5>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <div class="row-fluid" style="position: absolute !important;">
        <div id="map10" class="sidebar leaflet-sidebar collapsed">
          <div class="sidebar-tabs">
            <ul role="tablist"> <!-- top aligned tabs -->
              <li><a href="#home" role="tab"><i class="fa fa-bars"></i></a></li>
<!--              <li class="disabled"><a href="#messages" role="tab"><i class="fa fa-envelope"></i></a></li>-->
              <li><a href="#profile" role="tab"><i class="fa fa-bar-chart-o"></i></a></li>
            </ul>

<!--            <ul role="tablist"> &lt;!&ndash; bottom aligned tabs &ndash;&gt;-->
<!--              <li><a href="#settings" role="tab"><i class="fa fa-gear"></i></a></li>-->
<!--            </ul>-->
          </div>
          <div class="sidebar-content">
            <div class="sidebar-pane" id="home">
              <h1 class="sidebar-header">
                Recherche
                <div class="sidebar-close"><i class="fa fa-caret-left"></i></div>
              </h1>
              <table class="table table-bordered table-striped">
                <tbody>
                <tr>
                  <td>
                    <label>Unite administrative</label>
                    <model-list-select style="background-color: rgb(255,255,255);"
                                       class="wide"
                                       :list="uniteAdministratives"
                                       v-model="unite_administrative_id"
                                       option-value="id"
                                       option-text="libelle"
                                       placeholder="Unité administrative"
                    >

                    </model-list-select>
                    <a href="#" @click.prevent="videUniteAdmin()" style="color: red" v-if="unite_administrative_id"><i class="fa fa-trash-o"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>
                  <label>Régions</label>
                  <model-list-select style="background-color: rgb(255,255,255);"
                                     class="wide"
                                     :list="regions"
                                     v-model="region"
                                     option-value="id"
                                     option-text="libelle"

                                     placeholder="Régions"
                  >

                  </model-list-select>
                    <a href="#" @click.prevent="videRegions()" v-if="region" style="color: red"><i class="fa fa-trash-o"></i></a>
                  </td>
                </tr>
<!--                <tr>-->
<!--                  <td>-->
<!--                    <label>Départements</label>-->
<!--                    <model-list-select style="background-color: rgb(255,255,255);"-->
<!--                                       class="wide"-->
<!--                                       :list="departements(region)"-->
<!--                                       v-model="departement"-->
<!--                                       option-value="id"-->
<!--                                       option-text="libelle"-->

<!--                                       placeholder="Départements"-->
<!--                    >-->

<!--                    </model-list-select>-->

<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>-->
<!--                    <label>Sous préfècture</label>-->
<!--                    <model-list-select style="background-color: rgb(255,255,255);"-->
<!--                                       class="wide"-->
<!--                                       :list="sousPrefecture(departement)"-->
<!--                                       v-model="sous_prefecture"-->
<!--                                       option-value="id"-->
<!--                                       option-text="libelle"-->

<!--                                       placeholder="Sous préfècture"-->
<!--                    >-->

<!--                    </model-list-select>-->
<!--                  </td>-->
<!--                </tr>-->
                </tbody>
              </table>

              <div v-if="nomRegion">
                <div class="span4" style="font-size: 15px">Budget Region</div>
             <div class="span8" style="color: red;font-size: 15px">{{nomRegion}}</div>
              </div>
              <div v-if="nomUniteAdministrative">
                <div class="span3" style="font-size: 15px ; font-size: 15px">Budget UA</div>
                <div class="span9" style="color: #002aff; font-size: 15px">{{nomUniteAdministrative}}</div>
              </div>

              <div v-if="nomUniteAdministrative">
              </div>
              <div v-else-if="nomRegion"></div>
              <div v-else> <div class="span12" style="font-size: 15px ; font-size: 15px">Budget Général</div></div>

              <div class="row-fluid" >
                <div class="span5" v-if="montantBudegtPasUniteAdminOuRegion">

                  <donut-chart
                      style="width: 120px;height: 120px"
                      id="donut01"
                      :data="montantBudegtPasUniteAdminOuRegion.donutData"
                      colors='[ "#FF6384", "#36A2EB"]'
                      resize="true" v-if="montantBudegtPasUniteAdminOuRegion.budget">
                  </donut-chart>
                  <div style="text-align: center" v-else>
                    <h3>Aucun budget</h3>
                  </div>
                </div>
                <div class="span7"><br>

                  <div v-if="montantBudegtPasUniteAdminOuRegion">
                    Budget : <span style="color: #003900; "><b>{{formatageSomme(montantBudegtPasUniteAdminOuRegion.budget)}}</b></span> <br>
                    Budget exécuté:<span style="color: #00d700; "><b>{{formatageSomme(montantBudegtPasUniteAdminOuRegion.budgetExecute)}}</b></span><br>
                    Montant restant:<span style="color: darkred; "><b>{{formatageSomme(montantBudegtPasUniteAdminOuRegion.budgetReste)}}</b></span><br>
                    Taux d'exécution:<span style="color: #e36706; "><b>{{montantBudegtPasUniteAdminOuRegion.tauxBudget}} %</b></span>
                  </div>
                </div>

              </div>
<hr>
              <p align="center" style="size: 1.5em"><b>{{objetUnite.ville}}</b></p>
              <div class="row-fluid" >
                <div class="span5" v-if="objetUnite">

                  <donut-chart
                      style="width: 120px;height: 120px"
                      id="donut1"
                      :data="objetUnite.donutData"
                      colors='[ "#FF6384", "#36A2EB"]'
                      resize="true" v-if="objetUnite.budget">
                  </donut-chart>
                  <div style="text-align: center" v-else>
                    <h3>Aucun montant</h3>
                  </div>
                </div>
                <div class="span7"><br>

                  <div v-if="objetUnite">
                    Montant de base: <span style="color: #003900; "><b>{{formatageSomme(objetUnite.budget)}}</b></span> <br>
                    Montant exécuté:<span style="color: #00d700; "><b>{{formatageSomme(objetUnite.budgetExecute)}}</b></span><br>
                    Montant restant:<span style="color: darkred; "><b>{{formatageSomme(objetUnite.budgetReste)}}</b></span><br>
                    Taux d'exécution:<span style="color: #e36706; "><b>{{objetUnite.tauxBudget}} %</b></span>
                  </div>
<!--                  <table class="table table-bordered table-striped" v-if="objetUnite">-->
<!--                    <tbody>-->
<!--                    <tr>-->
<!--                      <td>Montant de base</td>-->
<!--                      <td>{{formatageSomme(objetUnite.budget)}}</td>-->
<!--                    </tr>-->
<!--                    <tr>-->
<!--                      <td>Montant restant</td>-->
<!--                      <td>{{formatageSomme(objetUnite.budgetReste)}}</td>-->
<!--                    </tr>-->
<!--                    <tr>-->
<!--                      <td>Montant exécution</td>-->
<!--                      <td>{{formatageSomme(objetUnite.budgetExecute)}}</td>-->
<!--                    </tr>-->
<!--                    <tr>-->
<!--                      <td>Taux exécution</td>-->
<!--                      <td>{{objetUnite.tauxBudget}}</td>-->
<!--                    </tr>-->
<!--                    </tbody>-->
<!--                  </table>-->
                </div>
              </div>
            </div>

            <div class="sidebar-pane" id="messages">
              <h1 class="sidebar-header">Messages<div class="sidebar-close"><i class="fa fa-caret-left"></i></div></h1>
            </div>

            <div class="sidebar-pane" id="profile">
              <h1 class="sidebar-header">Statistique<div class="sidebar-close"><i class="fa fa-caret-left"></i></div></h1>
              Statistique
            </div>
          </div>

        </div>
        <div class="span11">
          <div class="">
            <div class="" style="height: 550px; width: 100%; border-bottom: none">

              <l-map ref="map" class="sidebar-map" :zoom="zoom" :center="initialLocation" >

                <l-icon-default></l-icon-default>
                <l-control-layers position="topright"  ></l-control-layers>
<!--                <l-draw-toolbar position="topright"/>-->
                <l-control-fullscreen position="topleft"
                                      :options="{ title: { 'false': 'Go big!', 'true': 'Be regular' } }"
                />
                <l-tile-layer
                    v-for="tileProvider in tileProviders"
                    :key="tileProvider.name"
                    :name="tileProvider.name"
                    :visible="tileProvider.visible"
                    :url="tileProvider.url"
                    layer-type="base"/>
                <!-- <l-control-zoom position="bottomright"  ></l-control-zoom>-->
                <v-marker-cluster >
                  <l-circle-marker v-for="l in localisation"
                                   :key="l.id"
                                   :lat-lng="l.latlng"
                                   @click="uniteAdmin(l)"
                                   :radius="8"
                                   :color="l.color"
                                   :fillColor="l.colorFill"
                                   :fillOpacity="2"

                  >
                    <l-popup>
                      <b>{{l.ville}}</b> <br>
                      <div >
                        Montant de base: <span style="color: #003900; "><b>{{formatageSomme(l.budget)}}</b></span> <br>
                        Montant exécuté:<span style="color: #00d700; "><b>{{formatageSomme(l.budgetExecute)}}</b></span><br>
                        Montant restant:<span style="color: darkred; "><b>{{formatageSomme(l.budgetReste)}}</b></span><br>
                        Taux d'exécution:<span style="color: #e36706; "><b>{{l.tauxBudget}} %</b></span>
                      </div>
                    </l-popup>

                  </l-circle-marker>
                  <!--  <l-marker v-for="l in localisation"
                              :key="l.id"
                              :lat-lng="l.latlng">


                        &lt;!&ndash;&ndash;&gt;
                    </l-marker>-->
                </v-marker-cluster>
                <v-geosearch :options="geosearchOptions" ></v-geosearch>
              </l-map>
            </div>
          </div>
          <div class="span12">
            <div class="widget-box">
              <div class="">
                <table>
                  <tr style="border-bottom: 2px solid #fff">
                    <td style="width: 20px;height:20px;background: red" ></td>
                    <td style="text-align: center; border-right: 5px solid #fff" colspan="3">Marché planifié</td>

                    <td style="width: 20px;height:20px;background: #209503" ></td>
                    <td style="text-align: center; border-right: 5px solid #fff" colspan="3">Marché en contractualisation </td>
                    <td style="width: 20px;height:20px;background: orange" ></td>
                    <td style="text-align: center; border-right: 5px solid #fff" colspan="3">Marché en exécution</td>
                    <td style="width: 20px;height:20px;background: blue" ></td>
                    <td style="text-align: center; border-right: 5px solid #fff " colspan="3">
                      Marché résilie</td>
                    <td style="width: 20px;height:20px;background: #ab0cd7" ></td>
                    <td style="text-align: center; border-right: 5px solid #fff" colspan="3">
                      Marché terminé</td>
                    <td style="width: 20px;height:20px;background: #ccc" ></td>
                    <td style="text-align: center; border-right: 5px solid #fff" colspan="3">
                      Marché suspendu</td>
                  </tr>
                </table>
                <table>
                  <tr>


                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="span3">


        </div>

<!--        <div class="span4">-->
<!--          <div class="widget-box">-->
<!--            <div class="widget-title" align="center" v-if="zone_geographique"> <span class="icon"> <i class="icon-book"></i> </span>-->
<!--              <h5>{{zone_geographique}}</h5>-->
<!--              <button v-if="zone_geographique" @click.prevent="afficher()"  class="btn btn-mini">-->
<!--                <i class="icon-folder-open"></i>Afficher tout</button>-->

<!--            </div>-->
<!--            <div class="widget-title" align="center" v-if="libelle_unite_admin"> <span class="icon"> <i class="icon-book"></i> </span>-->
<!--              <h5>{{libelle_unite_admin}}</h5>-->
<!--              <button v-if="libelle_unite_admin" @click.prevent="afficher()"  class="btn btn-mini">-->
<!--                <i class="icon-folder-open"></i>Afficher tout</button>-->

<!--            </div>-->
<!--            <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>-->
<!--              <h5 align="center">Liste des unités administratives-->
<!--              </h5>-->
<!--            </div>-->

<!--            <div class="widget-content widget-content1" >-->

<!--              <table class="table table-bordered table-striped" >-->
<!--                <tr>-->
<!--                  <th>Nom UA </th>-->
<!--                </tr>-->
<!--                <tbody style="height: 100px;">-->
<!--                <tr class="odd gradeX " v-for="ua in administratif(idzone)"-->
<!--                    :key="ua.id">-->
<!--                  <td  class="blah " @click="uniteAdministrativeSelect(ua.id,ua.libelle, $event)" :class="{ red : active_el == ua.id }">{{ua.libelle}}</td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--              </table>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

      </div>

    </div>




    <Drawer
        :title="objetUnite.ville"
        v-model="value3"
        width="720"
        :mask-closable="false"
        :styles="styles"
    >
      <div class="row-fluid" >
        <div class="span6" v-if="objetUnite">

          <donut-chart
              style="width: 160px;height: 160px"
              id="donut"
              :data="objetUnite.donutData"
              colors='[ "#FF6384", "#36A2EB"]'
              resize="true" v-if="objetUnite.budget">
          </donut-chart>
          <div style="text-align: center" v-else>
            <h3>Aucun montant</h3>
          </div>
        </div>
        <div class="span6">
          <table class="table table-bordered table-striped" v-if="objetUnite">
            <tbody>
            <tr>
              <td>Montant de base</td>
              <td>{{formatageSomme(objetUnite.budget)}}</td>
            </tr>
            <tr>
              <td>Montant restant</td>
              <td>{{formatageSomme(objetUnite.budgetReste)}}</td>
            </tr>
            <tr>
              <td>Montant exécution</td>
              <td>{{formatageSomme(objetUnite.budgetExecute)}}</td>
            </tr>
            <tr>
              <td>Taux exécution</td>
              <td>{{objetUnite.tauxBudget}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>


<!--      <div class="demo-drawer-footer">-->
<!--        <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>-->
<!--        <Button type="primary" @click="value3 = false">Submit</Button>-->
<!--      </div>-->
    </Drawer>
  </div>

</template>

<script>
import LControlFullscreen from 'vue2-leaflet-fullscreen';
import L from 'leaflet-sidebar-v2'

import Raphael from 'raphael/raphael'
global.Raphael = Raphael
import { DonutChart } from 'vue-morris'
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import VGeosearch from 'vue2-leaflet-geosearch';
import {mapGetters} from 'vuex'
import { latLng, Icon, icon } from 'leaflet'
import { LMap, LTileLayer, LIconDefault,LControlLayers,LPopup,LCircleMarker} from "vue2-leaflet";
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import { formatageSomme} from "@/Repositories/Repository";
//import { InfoControl, ReferenceChart, ChoroplethLayer } from 'vue-choropleth'
import {  ModelListSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'
//import {pyDepartmentsData} from "@/data/py-departments-data"
//import {geojson} from "@/data/py-departments-geojson"
export default {
  name: "Example",
  components: {
    LControlFullscreen,
    DonutChart,
    LMap,
    LTileLayer,
    VGeosearch,
    LPopup,
    ModelListSelect,
    // LTooltip,
    LIconDefault,
    LControlLayers,
    LCircleMarker,
    // 'l-info-control': InfoControl,
    // 'l-reference-chart': ReferenceChart,
    // 'l-choropleth-layer': ChoroplethLayer

  },
  data() {
    let customicon = icon(Object.assign({},
        Icon.Default.prototype.options,
        {iconUrl, shadowUrl}
    ))
    return {
      unite_administrative_id:"",
      departement:"",
      sous_prefecture:'',
      region:"",
      value3: false,
      styles: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        paddingBottom: '53px',
        position: 'static'
      },
      objetUnite:"",
      donutData: [],
      donutDataUniteOuRegions: [],
      // pyDepartmentsData,
      // geojson,
      nom_unite_admin:"",
      nom_region:"",
      geosearchOptions: { // Important part Here
        provider: new OpenStreetMapProvider(),
      },
      active_el:0,
      search:"",
      budgetGeneralExcecute:0,
      tauxExecutionBudgetGeneral:0,
      bugdetGeneralRestant:0,
      budgetZoneExcecute:0,
      tauxExecutionBudgetZone:0,
      bugdetZoneRestant:0,
      budgetUniteAdmin:0,
      budgetRestUniteAdmin:0,
      budgetExecuteUniteAdmin:0,
      tauxExecutionUniteAdmin:0,
      iduniteadmin:"",
      libelle_unite_admin:"",
      icon: customicon,
      clusterOptions: {},
      zoom: 5,
      idzone:"",
      activeUa:false,
      zone_geographique:"",
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
        attributionControl: false
      },

      initialLocation: [6.8208393, -5.2895077],
      showMap: true,
      isActive: false,

      tileProviders: [

        {
          name: 'Plan',
          visible: true,
          attribution:
              '',
          url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
        },
        {
          name: 'Carte',
          visible: false,
          attribution:
              '',
          url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png',
        },
        {
          name: 'Plan 2',
          visible: false,
          url: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
          attribution: '',
        },
        {
          name: 'Satelite',
          visible: false,
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          attribution: '',
        },

        {
          name: 'National Geo World Map',
          visible: false,
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
          attribution: '',
        },

        {
          name: 'Voyageur',
          visible: false,
          url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          attribution: '',
        },
      ],
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      value: {
        key: "amount_w",
        metric: "% girls"
      },
      extraValues: [{
        key: "amount_m",
        metric: "% boys"
      }],
      mapOptions1: {
        attributionControl: false
      },
      currentStrokeColor: '3d3213'
    };
  },
created() {
    console.log('apppp0000')
    //console.log(this.getterLocalisationGeoAll)
},
  computed: {
// methode pour maper notre guetter
    ...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques',
      'localisations_geographiques',"getterLocalisationGeoAll"]),
    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge"
    ]),
    ...mapGetters("bienService", ['marches',"engagements","getMandatPersonnaliserVise"]),
    regions(){
      return this.getterLocalisationGeoAll.filter(item=>item.structure_localisation_geographique.niveau==2);
    },

    departements(){
      return id=>{

         return this.getterLocalisationGeoAll.filter(item=>{
          if(item.structure_localisation_geographique.niveau==3 && item.parent==id){
            return item
          }
        });
      }
    },
    sousPrefecture(){
      return id=>{
        return this.getterLocalisationGeoAll.filter(item=>{
          if(item.structure_localisation_geographique.niveau==4 && item.parent==id){
            return item
          }
        });
      }
    },
    localisationsFiltre(){
      const searchTerm = this.search.toLowerCase();
      console.log(this.localisations_geographiques.filter(item=>item.parent!==null))
      return this.localisations_geographiques.filter((item) => {

            return item.code.toLowerCase().includes(searchTerm)
                || item.libelle.toLowerCase().includes(searchTerm)

          }
      )
    },
    localisation(){
      let localisation=[]
      let vM=this;

      vM.objetMarchePasUniteOuRegion.forEach(function (value){
        if(value.longitude!=null && value.latitude!=null){
          let coordonne=[]
          coordonne.push(value.latitude)
          coordonne.push(value.longitude)
          /**
           * Recuperation des unite administrative de la zone geographique
           * @type {*[]}
           */
          let budget=parseFloat(value.montant_marche);
          let color="";
          let colorFill=""
          let montant_engagement_marche=0;
         // let budget=0;
/**Calcule des marches**/
          let initeVal = 0;
          let montantEngament=  vM.getMandatPersonnaliserVise.filter(item=>item.marche_id==value.id).reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.total_general) ;
          }, initeVal);
          montant_engagement_marche=montant_engagement_marche + montantEngament

        //  let taux=0;

          if(value.attribue==0){
            color="#ff0000"
            colorFill="#ff0000"
          }

          if(value.attribue==1){
            color="#2ec705"
            colorFill="#2ec705"
          }

          if(value.attribue==2){
            color="#e8640c"
            colorFill="#e8640c"
          }

          if(value.attribue==3){
            color="#0c66d7"
            colorFill="#0c66d7"
          }

          if(value.attribue==5){
            color="#ab0cd7"
            colorFill="#ab0cd7"
          }

          if(value.attribue==7){
            color="#ccc"
            colorFill="#ccc"
          }
          let montantRest=budget - montant_engagement_marche;
          let tauxExecution=(montant_engagement_marche/budget)*100

          let budgetExecute={
            label: 'Montant Excecute',
            value:montant_engagement_marche
          }

          let budgetReste={
            label: 'Montant Restant',
            value:montantRest
          }

          vM.donutData.push(budgetExecute)
          vM.donutData.push(budgetReste)

          let objetAlocalise={
            id:value.id,
            ville:value.objet,
            latlng:coordonne,
            budget:budget,
            budgetReste:montantRest,
            budgetExecute:montant_engagement_marche,
            tauxBudget:tauxExecution.toFixed(2),
            color:color,
            colorFill:colorFill,
            region_id:value.localisation_geographie_id,
            unite_administrative_id:value.unite_administrative_id,
            donutData:vM.donutData
          }

          // donutData: [
          //   { label: 'Red', value: 300 },
          //   { label: 'Blue', value: 50 },
          //   { label: 'Yellow', value: 100 }
          // ]


          localisation.push(objetAlocalise)
          vM.donutData=[]
        }
      })
      return localisation;
    },

    montantBudegtPasUniteAdminOuRegion(){
     // let localisation=[]
      let vM=this;
      // console.log(this.getMandatPersonnaliserVise)
      console.log(this.objetMarchePasUniteOuRegion)
      let budget=0;
     //let budgetReste=0;
     // let budgetExecute=0;
     // let tauxExecution=0;
      let montant_engagement_marche=0;
      this.objetMarchePasUniteOuRegion.forEach(function (value) {
        if(value.longitude!=null && value.latitude!=null){
          budget=budget + parseFloat(value.montant_marche)


          let initeVal = 0;
          let montantEngament=  vM.getMandatPersonnaliserVise.filter(item=>item.marche_id==value.id).reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.total_general) ;
          }, initeVal);
          montant_engagement_marche=montant_engagement_marche + montantEngament

        }

      })

     let budgetReste=budget - montant_engagement_marche;
     let tauxExecution=(montant_engagement_marche/budget)*100
console.log(budgetReste)
     // console.log(tauxExecution)
     // console.log(value) donutDataUniteOuRegions

      let execute={
        label: 'Budget Excécute',
        value:montant_engagement_marche
      }

      let reste={
        label: 'Budget Restant',
        value:budgetReste
      }

      vM.donutDataUniteOuRegions.push(execute)
      vM.donutDataUniteOuRegions.push(reste)
console.log(vM.donutDataUniteOuRegions)
      let objetAlocalise={
        budget:budget,
        budgetReste:budgetReste,
        budgetExecute:montant_engagement_marche,
        tauxBudget:tauxExecution.toFixed(2),
        donutData:vM.donutDataUniteOuRegions
      }
      vM.donutDataUniteOuRegions=[]
      return objetAlocalise;
    },
    objetMarchePasUniteOuRegion(){
      let vM=this;
      let objet=this.marches



      if(vM.region!="" && vM.unite_administrative_id==""){
        objet =this.marches.filter(item=>item.localisation_geographie_id==vM.region)

      }

      if(vM.unite_administrative_id!="" && vM.region==""){
        objet =this.marches.filter(item=>item.unite_administrative_id==vM.unite_administrative_id)
      }

      if(vM.unite_administrative_id!="" && vM.region!=""){

        objet =this.marches.filter(item=>{
          if(item.unite_administrative_id==vM.unite_administrative_id && item.localisation_geographie_id==vM.region){
            return item
          }
        })
      }
      return objet
    },

    nomUniteAdministrative(){
      let vM=this;
      if(vM.unite_administrative_id!=""){
        let objet=this.uniteAdministratives.find(item=>item.id==vM.unite_administrative_id)
        return objet.libelle
      }
    return null
    },

    nomRegion(){
      let vM=this;
      if(vM.region!=""){
        let objet=this.regions.find(item=>item.id==vM.region)
        return objet.libelle
      }
      return null
    },

    budgetGeneral(){
      let budget_general=0;
      let montant_engagement=0;
      let vM=this;
      this.uniteAdministratives.forEach(function(row){
        let montant_engagement_unite_admin=0;
        let budgetActive=row.ua_budget_general.filter(item=>item.actived==1)

        if (budgetActive!="") {
          let initialValue = 0;
          let budgetByUnite = budgetActive.reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.Dotation_Initiale);
          }, initialValue);
          budget_general=budget_general+budgetByUnite
        }

        let  objetMarche=vM.marches.filter(item=>{
          if(item.unite_administrative_id==row.id ){

            return item
          }
        })
        if(objetMarche!=""){
          objetMarche.forEach(function (val) {
            let initeVal = 0;
            let montantEngament=  vM.getMandatPersonnaliserVise.filter(item=>item.marche_id==val.id).reduce(function (total, currentValue) {
              return total + parseFloat(currentValue.total_general) ;
            }, initeVal);
            montant_engagement_unite_admin=montant_engagement_unite_admin + montantEngament

          })
        }
        montant_engagement=montant_engagement + montant_engagement_unite_admin
      })

      vM.budgetGeneralExcecute=montant_engagement
      let tauxEx=(montant_engagement/budget_general)*100
      //console.log(tauxEx)
      vM.tauxExecutionBudgetGeneral=tauxEx.toFixed(2)
      vM.bugdetGeneralRestant=budget_general - montant_engagement
      return budget_general;
    },
    budgetByZone(){
      return zone_id=>{
        if(zone_id!=""){
          let vM=this;
          let budgetZone=0;
          let montant_engagement_zone=0;
          let uniteByZoneGeo= vM.uniteAdministratives.filter( item => item.localisationgeo_id ==zone_id)
          if (uniteByZoneGeo!=undefined) {
            uniteByZoneGeo.forEach(function (row) {
              let montant_engagement_unite_admin=0;
              let budgetActive=row.ua_budget_general.filter(item=>item.actived==1)
              if (budgetActive!="") {
                let initialValue = 0;
                let budgetByUnite=  budgetActive.reduce(function (total, currentValue) {
                  return total + parseFloat(currentValue.Dotation_Initiale) ;
                }, initialValue);

                budgetZone=budgetZone + budgetByUnite

                //Recuperation des marche
                let  objetMarche=vM.marches.filter(item=>{
                  if(item.unite_administrative_id==row.id ){

                    return item
                  }
                })

                if(objetMarche!=""){
                  objetMarche.forEach(function (val) {
                    let initeVal = 0;
                    let montantEngament=  vM.getMandatPersonnaliserVise.filter(item=>item.marche_id==val.id).reduce(function (total, currentValue) {
                      return total + parseFloat(currentValue.total_general) ;
                    }, initeVal);
                    montant_engagement_unite_admin=montant_engagement_unite_admin + montantEngament

                  })
                }
                montant_engagement_zone= montant_engagement_zone + montant_engagement_unite_admin


              }

            })
            if(montant_engagement_zone!=0){

              let taux=(montant_engagement_zone/budgetZone)*100
              vM.tauxExecutionBudgetZone=taux.toFixed(2)
            }
            vM.budgetZoneExcecute=montant_engagement_zone

            vM.bugdetZoneRestant=budgetZone - montant_engagement_zone
          }

          return budgetZone;

        }
      }
    },
    budgetByUniteAdmin(){
      return uniteId=>{
        let vM=this;
        let budgetUniteAdmin=0;
        let uniteByZoneGeo= vM.uniteAdministratives.find( item => item.id ==uniteId)
        let montant_engagement_unite_admin=0;
        let budgetActive=uniteByZoneGeo.ua_budget_general.filter(item=>item.actived==1)
        if (budgetActive!="") {
          let initialValue = 0;
          let budgetByUnite=  budgetActive.reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.Dotation_Initiale) ;
          }, initialValue);

          budgetUniteAdmin=budgetByUnite

          //Recuperation des marche
          let  objetMarche=vM.marches.filter(item=>{
            if(item.unite_administrative_id==uniteId ){

              return item
            }
          })

          if(objetMarche!=""){
            objetMarche.forEach(function (val) {
              let initeVal = 0;
              let montantEngament=  vM.getMandatPersonnaliserVise.filter(item=>item.marche_id==val.id).reduce(function (total, currentValue) {
                return total + parseFloat(currentValue.total_general) ;
              }, initeVal);
              montant_engagement_unite_admin=montant_engagement_unite_admin + montantEngament

            })
          }

        }
        if(montant_engagement_unite_admin!=0){

          let taux=(montant_engagement_unite_admin/budgetUniteAdmin)*100
          vM.tauxExecutionUniteAdmin=taux.toFixed(2)
        }
        vM.budgetUniteAdmin=budgetUniteAdmin
        vM.budgetRestUniteAdmin=budgetUniteAdmin - montant_engagement_unite_admin
        vM.budgetExecuteUniteAdmin=montant_engagement_unite_admin
        return budgetUniteAdmin
      }
    },
    exoEnCours(){
      return this.exercices_budgetaires.filter(element => element.encours == 1)
    },
    administratif(){
      return  uniteAdmin=>{
        if (uniteAdmin!="") {

          return this.uniteAdministratives.filter( item => item.localisationgeo_id == uniteAdmin)
        }else{
          return this.uniteAdministratives;
        }
      }
    }

  },
  methods: {
    videUniteAdmin(){
      this.unite_administrative_id=""
    },
    videRegions(){
      this.region=""
      this.zoom=6
    },
    infoMarche(id){
      console.log(id)
   this.value3 = true
    },
    formatageSomme:formatageSomme,
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
    uniteAdmin(objet){
      /*this.activeUa=false*/
      console.log(objet)
this.objetUnite=objet
      this.unite_administrative_id=objet.unite_administrative_id
      this.region=objet.region_id
    // this.value3=true

    },
    uniteAdministrativeSelect(id,libelle, $event){
      this.active_el = id;
      this.iduniteadmin=id
      this.libelle_unite_admin=libelle
      console.log($event)
      this.zone_geographique=""
    },
    afficher(){
      this.idzone=""
      this.active_el=0
      this.zone_geographique=""
      this.iduniteadmin=""
      this.libelle_unite_admin=""
    },
    click: (e) => console.log("clusterclick", e),
    ready: (e) => console.log('ready', e),
  },
  mounted() {
    setTimeout(() => {
      console.log('done4444444')
      this.$nextTick(() =>{
        this.clusterOptions = { disableClusteringAtZoom: 11 }
      });
    }, 5000);

    const mapComponent = this.$refs.map;
    console.log(mapComponent.mapObject)
    const map = mapComponent.mapObject;
    console.log(window.L)
    let sid=window.L
    console.log(L)
    let panel_options = {
      closeButton: true,
      position: 'left',
      autoPan: false
    };
    var sidebar = sid.control.sidebar('map10', panel_options).addTo(map);

    /****/

    var panelContent = {
      id: 'userinfo',                     // UID, used to access the panel
      tab: '#',  // content can be passed as HTML string,
      // DOM elements can be passed, too
      title: 'Your Profile',              // an optional pane header
      position: 'bottom'                  // optional vertical alignment, defaults to 'top'
    };
    sidebar.addPanel(panelContent);

    /* add an external link */
    sidebar.addPanel({
      id: 'ghlink',
      tab: '',
      button: '#',
    });

    /* add an button with click listener */
    sidebar.addPanel({
      id: 'click',
      tab: '',
      button: function (event) { console.log(event); }
    });

    /* remove a panel */
    sidebar.removePanel('userinfo');

    /* en- / disable a panel */
    sidebar.disablePanel('userinfo');
    sidebar.enablePanel('userinfo');
  }
};
</script>
<style>
/* sidebar css */
.sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: 2000; }
.sidebar.collapsed {
  width: 40px; }
@media (min-width: 768px) {
  .sidebar {
    top: 10px;
    bottom: 10px;
    transition: width 500ms; } }
@media (min-width: 768px) and (max-width: 991px) {
  .sidebar {
    width: 305px; } }
@media (min-width: 992px) and (max-width: 1199px) {
  .sidebar {
    width: 390px; } }
@media (min-width: 1200px) {
  .sidebar {
    width: 460px; } }

.sidebar-left {
  left: 0; }
@media (min-width: 768px) {
  .sidebar-left {
    left: 10px; } }

.sidebar-right {
  right: 0; }
@media (min-width: 768px) {
  .sidebar-right {
    right: 10px; } }

.sidebar-tabs {
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: #fff; }
.sidebar-left .sidebar-tabs {
  left: 0; }
.sidebar-right .sidebar-tabs {
  right: 0; }
.sidebar-tabs, .sidebar-tabs > ul {
  position: absolute;
  width: 40px;
  margin: 0;
  padding: 0; }
.sidebar-tabs > li, .sidebar-tabs > ul > li {
  width: 100%;
  height: 40px;
  color: #333;
  font-size: 12pt;
  overflow: hidden;
  transition: all 80ms; }
.sidebar-tabs > li:hover, .sidebar-tabs > ul > li:hover {
  color: #000;
  background-color: #eee; }
.sidebar-tabs > li.active, .sidebar-tabs > ul > li.active {
  color: #fff;
  background-color: #0074d9; }
.sidebar-tabs > li.disabled, .sidebar-tabs > ul > li.disabled {
  color: rgba(51, 51, 51, 0.4); }
.sidebar-tabs > li.disabled:hover, .sidebar-tabs > ul > li.disabled:hover {
  background: transparent; }
.sidebar-tabs > li.disabled > a, .sidebar-tabs > ul > li.disabled > a {
  cursor: default; }
.sidebar-tabs > li > a, .sidebar-tabs > ul > li > a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 40px;
  color: inherit;
  text-decoration: none;
  text-align: center; }
.sidebar-tabs > ul + ul {
  bottom: 0; }

.sidebar-content {
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  overflow-x: hidden;
  overflow-y: auto; }
.sidebar-left .sidebar-content {
  left: 40px;
  right: 0; }
.sidebar-right .sidebar-content {
  left: 0;
  right: 40px; }
.sidebar.collapsed > .sidebar-content {
  overflow-y: hidden; }

.sidebar-pane {
  display: none;
  left: 0;
  right: 0;
  box-sizing: border-box;
  padding: 10px 20px; }
.sidebar-pane.active {
  display: block; }
@media (min-width: 768px) and (max-width: 991px) {
  .sidebar-pane {
    min-width: 265px; } }
@media (min-width: 992px) and (max-width: 1199px) {
  .sidebar-pane {
    min-width: 350px; } }
@media (min-width: 1200px) {
  .sidebar-pane {
    min-width: 420px; } }

.sidebar-header {
  margin: -10px -20px 0;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  font-size: 14.4pt;
  color: #fff;
  background-color: #0074d9; }
.sidebar-right .sidebar-header {
  padding-left: 40px; }

.sidebar-close {
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer; }
.sidebar-left .sidebar-close {
  right: 0; }
.sidebar-right .sidebar-close {
  left: 0; }

.sidebar-left ~ .sidebar-map {
  margin-left: 40px; }
@media (min-width: 768px) {
  .sidebar-left ~ .sidebar-map {
    margin-left: 0; } }

.sidebar-right ~ .sidebar-map {
  margin-right: 40px; }
@media (min-width: 768px) {
  .sidebar-right ~ .sidebar-map {
    margin-right: 0; } }

.sidebar {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65); }
.sidebar.leaflet-touch {
  box-shadow: none;
  border-right: 2px solid rgba(0, 0, 0, 0.2); }
@media (min-width: 768px) {
  .sidebar {
    border-radius: 4px; }
  .sidebar.leaflet-touch {
    border: 2px solid rgba(0, 0, 0, 0.2); } }

@media (min-width: 768px) {
  .sidebar-left ~ .sidebar-map .leaflet-left {
    transition: left 500ms; } }

@media (min-width: 768px) and (max-width: 991px) {
  .sidebar-left ~ .sidebar-map .leaflet-left {
    left: 315px; } }

@media (min-width: 992px) and (max-width: 1199px) {
  .sidebar-left ~ .sidebar-map .leaflet-left {
    left: 400px; } }

@media (min-width: 1200px) {
  .sidebar-left ~ .sidebar-map .leaflet-left {
    left: 470px; } }

@media (min-width: 768px) {
  .sidebar-left.collapsed ~ .sidebar-map .leaflet-left {
    left: 50px; } }

@media (min-width: 768px) {
  .sidebar-right ~ .sidebar-map .leaflet-right {
    transition: right 500ms; } }

@media (min-width: 768px) and (max-width: 991px) {
  .sidebar-right ~ .sidebar-map .leaflet-right {
    right: 315px; } }

@media (min-width: 992px) and (max-width: 1199px) {
  .sidebar-right ~ .sidebar-map .leaflet-right {
    right: 400px; } }

@media (min-width: 1200px) {
  .sidebar-right ~ .sidebar-map .leaflet-right {
    right: 470px; } }

@media (min-width: 768px) {
  .sidebar-right.collapsed ~ .sidebar-map .leaflet-right {
    right: 50px; } }
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
  width: 0px; height: 0px;
}

.map-marker div.icon {
  position: relative;
  overflow: hidden;
  background-repeat:no-repeat;
  background-position:center;
  background-color: #ccc;
  width: 24px; /*Same as marker width*/
  height: 24px; /*Same as marker height*/
  line-height: 24px;
  font-size: 12px;
  border-radius: 4px;
  margin-left: 1px;
  margin-top: 1px;
}

/*Marker content instances*/
.map-marker.exclamation div.icon:before{
  content: '!';
}
.map-marker.A div.icon:before{
  content: 'A';
}

/*Marker color instances*/
.map-marker.red div.icon{background: #ff2222;}

.map-marker.green div.icon{background: #008800;color: #fff;}
.map-marker.green {background: #000;}
.map-marker.green div.arrow{border-top-color: #000;}

/*Marker states*/
.map-marker.inactive {
  opacity: 0.6;
}
.red {
  color:#fff;
  background-color: red !important;
}
.blah{
  cursor: grab !important;
}
.widget-content1{

  height: 500px !important;
  overflow-y: scroll !important;
}


@import "../../node_modules/leaflet/dist/leaflet.css";

</style>
