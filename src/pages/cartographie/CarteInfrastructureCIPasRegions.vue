<template>

    <div>
   
<!--<div class="radio-group-control">
  <label class="radio-group-label">
    <input type="radio"  value="0" v-model="slection_carte">
    <span class="radio-group-label__text">
      <span class="radio-group-tick"></span> CARTE DES PREVISIONNELS INFRASTRUCTURES </span>
  </label>
  <label class="radio-group-label">
    <input type="radio" value="1" v-model="slection_carte">
    <span class="radio-group-label__text"><span class="radio-group-tick"></span>
    CARTE DES EXECUTIONS INFRASTRUCTURES 
    </span>
  </label>
</div>-->


        <div class="">
            
        <div class="row-fluid">
       <div id="map10" class="sidebar leaflet-sidebar collapsed">
          <div class="sidebar-tabs">
            <ul role="tablist"> <!-- top aligned tabs -->
              <li><a href="#home" role="tab"><i class="fa fa-bars"></i></a></li>
              <li><a href="#infoRegion" role="tab"><i class="fa fa-bar-chart-o"></i></a></li>
            </ul>
          </div>
          <div class="sidebar-content">
            <div class="sidebar-pane" id="home">
              <h1 class="sidebar-header">
                Recherche
                <div class="sidebar-close"><i class="fa fa-caret-left"></i></div>
              </h1>
                <div class="span5">
                    <label>Régions    <a href="#" @click.prevent="videRegions()" v-if="region" style="color: red"><i class="fa fa-trash-o"></i></a></label>
                    <model-list-select style="background-color: rgb(255,255,255);"
                                       class="wide"
                                       :list="regions"
                                       v-model="region"
                                       option-value="id"
                                       option-text="libelle"

                                       placeholder="Régions"
                    >

                    </model-list-select>
                    <h6>Infrastructure</h6>
                    <label for="tous">
                        <input type="radio" v-model="infrastructure" value="" id="tous"> <span>Affiché tous  <b></b></span>
                    </label>
                    <label  v-for="item in getterInfrastrucure" :key="item.id" :for="item.id">
                        <input type="radio" v-model="infrastructure" :value="item.id" :id="item.id"> <span> {{item.libelle}} <b></b></span>
                    </label>

                </div>
                <div class="span6">

                  <!--  <label for="pet-select">Changer chart:</label>
                    <select v-model="type_minichart">
                        <option value="bar">bar</option>
                        <option value="pie">Pie charts</option>
                        <option value="polar-radius">Polar radius</option>
                        <option value="polar-area">Polar area</option>
                    </select>-->
                    <label>Unite administrative <a href="#" @click.prevent="videUniteAdmin()" style="color: red" v-if="unite_administrative_id"><i class="fa fa-trash-o"></i></a></label>
                    <model-list-select style="background-color: rgb(255,255,255);"
                                       class="wide"
                                       :list="uniteAdministratives"
                                       v-model="unite_administrative_id"
                                       option-value="id"
                                       option-text="libelle"
                                       placeholder="Unité administrative"
                    >

                    </model-list-select>

                    <h6>Type Marches</h6>
                    <label for="all_type">
                        <input type="radio" v-model="type_marche" value="" id="all_type"> <span>Affiché tous  <b></b></span>
                    </label>
                    <label  v-for="item in typeMarches" :key="item.id" :for="'T'+item.id">
                        <input type="radio" v-model="type_marche" :value="item.id" :id="'T'+item.id"> <span> {{item.libelle}} <b></b></span>
                    </label>

                </div>

                <table class="table table-striped">
                    <tbody>
                    <tr>
                        <td>

                        </td>
                        <td>


                        </td>
                    </tr>
                    </tbody>
                </table>




              
              
              <div v-if="caseAffichageMessageGeneralSituationMarche">
                <div class="span12" style="font-size: 15px ; font-size: 15px">
                  Situation Général des marchés</div></div>

            <hr>
              <apexchart type="bar" width="350" height="350"  :options="chartOptions" :series="dataBar"></apexchart>
            </div>

            <div class="sidebar-pane" id="messages">
              <h1 class="sidebar-header">Messages<div class="sidebar-close"><i class="fa fa-caret-left"></i></div></h1>
            </div>

            <div class="sidebar-pane" id="infoRegion">
              <h1 class="sidebar-header">{{nomUniteAdministrativeSelectionner}} - {{info_region.libelle}}<div class="sidebar-close"><i class="fa fa-caret-left"></i></div></h1>
                <div class="quick-actions_homepage">
                    <table class="table table-striped">
                    <tbody>
                    <tr>
                    <td style="background: #00008b; color: #fff;">
                        Montant Prevue
                    </td>
                    <td style="background: #733b8b; color: #fff;">
                        Montant Approuve
                    </td>
                    </tr>
                    <tr>
                        <td style="background: #00008b; color: #fff;">
                            {{formatageSomme(montantPrevuePasRegion(info_region.id))}}
                        </td>
                        <td style="background: #733b8b; color: #fff;">
                            {{formatageSomme(4740000000)}}
                        </td>
                    </tr>
                    </tbody>
                        <tbody>
                        <tr>
                            <td style="background: #fc4d93; color: #fff;">
                                Montant Execute
                            </td>
                            <td style="background: orangered; color: #fff;">
                                Taux Execution
                            </td>
                        </tr>
                        <tr>
                            <td style="background: #fc4d93; color: #fff;">
                                {{formatageSomme(4110000000)}}
                            </td>
                            <td style="background: orangered; color: #fff;">
                                {{formatageSomme(4740000000)}}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                        <!--<ul class="quick-actions" >-->
                    <!--<li class="bg_lb"> <a style="font-size: 10px" href="#">-->
                        <!--{{formatageSomme(4110000000)}}<br> Montant Prevue</a> </li>-->
                    <!--<li class="bg_lg " > <a href="#" style="font-size: 20px">-->
                        <!--{{formatageSomme(54788885)}}<br> Montant Approuve </a> </li>-->
                    <!--<li class="bg_ly" style="font-size: 10px"> <a href="#" style="font-size: 10px">  {{formatageSomme(54255411)}}<br> Montant Execute </a> </li>-->
                    <!--<li class="bg_lo" > <a href="#" style="font-size: 10px">{{10}} %<br> Taux d'exécution</a> </li>-->
                        <!--</ul>-->
                </div>
         <h6>Infrasctures</h6>
<hr>
                <h6>Type de Marche</h6>
                <hr>

                <h6>Liste des marches ({{getListeMarcheRegionsSelectionner(info_region.id).length}})</h6>
                <hr>
            </div>
          </div>

        </div>
            <div class="span12">
                <div class="">

                    <div  style="height: 850px !important; width: 100%; ">
                        <l-map ref="map" :zoom=7.4 :center="initialLocation" >
                            <l-icon-default></l-icon-default>
                            <l-control-layers position="topright"  ></l-control-layers>
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
                          <!--   <v-marker-cluster >-->
                              <l-circle-marker v-for="l in localisation"
                                                 :key="l.id"
                                                 :lat-lng="l.latlng"

                                                 :radius="1"
                                                 :color="l.color"
                                                 :fillColor="l.colorFill"
                                                 :fillOpacity="2"
                                                 :name="l.ville"
                                          

                                >
                                <l-tooltip  >{{l.ville}}</l-tooltip>
                                    <l-popup>
                                    <b>{{l.ville}}</b> <br>
                                    <div >
                                        Budget: <span style="color: #003900; "><b>{{formatageSomme(l.budget)}}</b></span> <br>
                                        Budget exécuté:<span style="color: #00d700; "><b>{{formatageSomme(l.budgetExecute)}}</b></span><br>
                                        Budget restant:<span style="color: darkred; "><b>{{formatageSomme(l.budgetReste)}}</b></span><br>
                                        Taux d'exécution:<span style="color: #e36706; "><b>{{l.tauxBudget}} %</b></span>
                                    </div>
                                </l-popup>

                                </l-circle-marker>
                              <!--  <l-marker v-for="l in localisation"
                                          :key="l.id"
                                          :lat-lng="l.latlng">


                                    &lt;!&ndash;&ndash;&gt;
                                </l-marker>-->
                           <!--  </v-marker-cluster>-->
                          <v-geosearch :options="geosearchOptions" ></v-geosearch>
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
import LControlFullscreen from 'vue2-leaflet-fullscreen';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import VGeosearch from 'vue2-leaflet-geosearch';
    import {mapGetters} from 'vuex'
    import { /*latLng,*/ Icon, icon } from 'leaflet'
    import { LMap, LTileLayer, LIconDefault,LControlLayers,LPopup,LCircleMarker ,LTooltip} from "vue2-leaflet";
    import iconUrl from 'leaflet/dist/images/marker-icon.png'
    import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
    import { formatageSomme } from "../../../src/Repositories/Repository";
    import {ModelListSelect} from "vue-search-select";
import VueApexCharts from 'vue-apexcharts'
import L from "leaflet.minichart"
import ad from "leaflet-html-legend"
import ad1 from "leaflet-easyprint"
import moda from "leaflet-modal"
//import ad2 from "leaflet-easyprint"
    export default {
        name: "Example",
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
            let customicon = icon(Object.assign({},
                Icon.Default.prototype.options,
                {iconUrl, shadowUrl}
            ))
            return {
                info_region:"",
                infortion_sidbar_filter:"",
                type_marche:"",
              slection_carte:0,
              objet_map:"",
              objet_leaflet:"",
              type_minichart:"pie",
              departement:"",
    sous_prefecture:'',
    region:"",
    infrastructure:"",
    unite_administrative_id:"",
       chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          width: 200
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: [],
        },
        yaxis: {
          title: {
            text: '$ (Infrastructure)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "F " + val + " Infrastructure"
            }
          }
        } 
      },
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
               zoom: 7,
                idzone:"",
                activeUa:false,
                zone_geographique:"",
              // center: latLng(6.247273, -7.669441),
                url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
               //  withPopup: latLng(6.247273, -7.669441),
                 /// withTooltip: latLng(6.247273, -7.669441),
                 currentZoom: 11.5,
               // currentCenter: latLng(6.247273, -7.669441),
                showParagraph: false,
                mapOptions: {
                    zoomSnap: 0.5
                },
                 initialLocation: [6.247273, -7.669441],
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
                        name: 'Plan 2',
                        visible: false,
                        url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png',
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
                url: 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
                attribution: '',
                },
                ],
            };
        },

    computed: {
// methode pour maper notre guetter
    ...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques',
            'localisations_geographiques',"getterLocalisationGeoAll","getterInfrastrucure"]),
        ...mapGetters("uniteadministrative", [
            "acteCreations",
            "typeTextes",
            "uniteAdministratives",
            "getterBudgeCharge"
        ]),
        ...mapGetters("bienService", ['marches',"typeMarches","engagements","getMandatPersonnaliserVise","getActeEffetFinancierPersonnaliser45"]),
          regions(){
      return this.getterLocalisationGeoAll.filter(item=>item.structure_localisation_geographique.niveau==2);
      },

        /**Traitement afficharche et statique marche en fonction des region
         *
         *
         * @returns {function(*)}
         */
        getListeMarcheRegionsSelectionner(){
            return region=>{
                if(region!=""){
                    return this.objetMarchePasUniteOuRegion.filter(item=>item.localisation_geographie_id==region)
                }
            }
        },

        montantPrevuePasRegion(){
            return region=>{
                if(region!=""){
                    let initialValue = 0;
                     let objet=this.getListeMarcheRegionsSelectionner(region)

                    let montantPrevue = objet.reduce(function (total, currentValue) {
                        return total + parseFloat(currentValue.montant_marche);
                    }, initialValue);
                     return montantPrevue
                }
            }
        },



        nomUniteAdministrativeSelectionner(){
            let vM=this;
            if(vM.unite_administrative_id!=""){
                let objet=this.uniteAdministratives.find(item=>item.id==vM.unite_administrative_id)
                return objet.libelle
            }
            return null
        },
        /**
         *
         * @returns {function(*)}
         */
    departements(){
      return id=>{

        return this.getterLocalisationGeoAll.filter(item=>{
          if(item.structure_localisation_geographique.niveau==3 && item.parent==id){
            return item
          }
        });
      }
    },


getMontantMarcheRegionInfrastructure(){
       return (region,infrastructure)=>{
          let marche=this.objetMarchePasUniteOuRegion.filter(item=>{
            if( item.localisation_geographie_id==region && item.infrastructure_id==infrastructure && item.parent_id!='')
           return item
            })


               let initeVal = 0;
          let montant=  marche.reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.montant_marche) ;
          }, initeVal);
          return montant
       }
},
getTotaleMontantMarcheParUnite(){
   return (region,infrastructure)=>{
     let vm=this;
          let marche=this.objetMarchePasUniteOuRegion.filter(item=>{
            if( item.localisation_geographie_id==region && item.infrastructure_id==infrastructure && item.attribue==2)
           return item
            })
               let montant_reel_marche=0;
            marche.forEach(function(value){
                let objet_act=vm.getActeEffetFinancierPersonnaliser45.find(item=>item.marche_id==value.id)
                if(objet_act!=undefined){
 montant_reel_marche=parseFloat(montant_reel_marche) +  parseFloat(objet_act.montant_act)
                }else{
montant_reel_marche =montant_reel_marche+ 0
                }
                
            })

               /*let initeVal = 0;
          let montant=  marche.reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.montant_marche) ;
          }, initeVal);*/
          return montant_reel_marche
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


   ListeMarchePasUA(){
      let vM=this;
      let objet=this.marches.filter(item=>item.parent_id!='')


      if(vM.unite_administrative_id!="" && vM.region=="" && vM.infrastructure==""){
        objet =this.marches.filter(item=>item.unite_administrative_id==vM.unite_administrative_id && item.parent_id!='')
      }

      

      return objet
    },

    totalMontantPrevisionnelPasMarche(){
       let vM=this;
      let objet=this.marches.filter(item=>item.parent_id!='')
      
           if(vM.unite_administrative_id!=""){
        objet =this.marches.filter(item=>item.unite_administrative_id==vM.unite_administrative_id && item.parent_id!="")
        }

           let initeVal = 0;
          let montant=  objet.reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.montant_marche) ;
          }, initeVal);
          return montant

    },

    totalMontantPrevisionnelPasRegion(){
      return regions=>{
          let vM=this;
        if(regions!=""){
              let objet;

               if(vM.unite_administrative_id!=""){
            objet =this.marches.filter(item=>{
                    if(item.unite_administrative_id==vM.unite_administrative_id && item.localisation_geographie_id==regions && item.parent_id!=""){
            return item
               }
            })
             }else{
                objet =this.marches.filter(item=>item.localisation_geographie_id==regions && item.parent_id!="")
             }

           let initeVal = 0;
            let montant=  objet.reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.montant_marche) ;
          }, initeVal);
          return montant
              
           }

      }

    },

  totalMontantInfrastructure(){
    return unite_administrative_id=>{
          let vM=this;
          let objet;
        if(unite_administrative_id!=""){
                objet =this.marches.filter(item=>{
                    if(item.unite_administrative_id==unite_administrative_id && item.infrastructure_id==vM.infrastructure && item.parent_id!=""){
            return item
               }
            })


           let initeVal = 0;
            let montant=  objet.reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.montant_marche) ;
          }, initeVal);
          return montant
              
           }

           if(vM.infrastructure!=""){
                 objet =this.marches.filter(item=>item.infrastructure_id==vM.infrastructure && item.parent_id!="")
          
                let initeVal = 0;
                  let montant=  objet.reduce(function (total, currentValue) {
                  return total + parseFloat(currentValue.montant_marche) ;
                }, initeVal);
                return montant
           }

      }

  },

  totalMontantInfrastructurePasRegion(){
        return regions=>{
          let vM=this;
        if(regions!=""){
              let objet;

              objet =this.marches.filter(item=>{
                   if(item.infrastructure_id==vM.infrastructure && item.localisation_geographie_id==regions && item.parent_id!=""){
                   return item
                    }
                 })

           let initeVal = 0;
            let montant=  objet.reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.montant_marche) ;
          }, initeVal);
          return montant
              
           }

      }
  },
        objetMarchePasUniteOuRegion(){
            let vM=this;
            let objet=this.marches.filter(item=>item.parent_id!="")
console.log(vM.type_marche)
            //retourne les marches d'une region selectionner
            if(vM.region!="" && vM.unite_administrative_id=="" && vM.infrastructure=="" && vM.type_marche==""){
                objet =objet.filter(item=>{
                    if(item.localisation_geographie_id==vM.region && item.parent_id!=""){
                        return item
                    }
                })

            }

            //retourne les marches d'une unite administrative selectionner
            if(vM.unite_administrative_id!="" && vM.region=="" && vM.infrastructure=="" && vM.type_marche==""){
                objet =objet.filter(item=>{
                    if(item.unite_administrative_id==vM.unite_administrative_id && item.parent_id!=""){
                        return item
                    }
                })
            }

            //retourne les marches d'une une infrastucture selectionner
            if (vM.infrastructure!="" && vM.unite_administrative_id=="" && vM.region=="" && vM.type_marche==""){
                objet =objet.filter(item=>{
                    if(item.infrastructure_id==vM.infrastructure && item.parent_id!=""){
                        return item
                    }
                })
            }


            //retourne les marches d'un type de marché selectionner
            if (vM.infrastructure=="" && vM.unite_administrative_id=="" && vM.region=="" && vM.type_marche!=""){
                objet =objet.filter(item=>{
                    if(item.type_marche_id==vM.type_marche && item.parent_id!=""){
                        return item
                    }
                })
            }


            //retourne les marches de region et unite adminstrative selectionner
            if(vM.unite_administrative_id!="" && vM.region!="" && vM.infrastructure=="" && vM.type_marche==""){
                objet =objet.filter(item=>{
                    if(item.unite_administrative_id==vM.unite_administrative_id && item.localisation_geographie_id==vM.region && item.parent_id!=""){
                        return item
                    }
                })
            }


            //retourne les marches d'une infrastructure et unite adminstrative selectionner

            if(vM.unite_administrative_id!="" && vM.region=="" && vM.infrastructure!="" && vM.type_marche==""){
                objet =objet.filter(item=>{
                    if(item.unite_administrative_id==vM.unite_administrative_id && item.infrastructure_id==vM.infrastructure && item.parent_id!=""){
                        return item
                    }
                })
            }


            //retourne les marches d'un type marche et unite adminstrative selectionner

            if(vM.unite_administrative_id!="" && vM.region=="" && vM.infrastructure!="" && vM.type_marche!=""){
                objet =objet.filter(item=>{
                    if(item.unite_administrative_id==vM.unite_administrative_id && item.type_marche_id==vM.type_marche && item.parent_id!=""){
                        return item
                    }
                })
            }


            //retourne les marches d'une region et infrastructure selectionner
            if(vM.unite_administrative_id=="" && vM.region!="" && vM.infrastructure!="" &&  vM.type_marche==""){
                objet =objet.filter(item=>{
                    if(item.infrastructure_id==vM.infrastructure && item.localisation_geographie_id==vM.region && item.parent_id!=""){
                        return item
                    }
                })
            }

            //retourne les marches d'une infrasture et type marche selectionner
            if(vM.unite_administrative_id=="" && vM.region=="" && vM.infrastructure!="" && vM.type_marche!=""){
                objet =objet.filter(item=>{
                    if(item.infrastructure_id==vM.infrastructure && item.type_marche_id==vM.type_marche && item.parent_id!=""){
                        return item
                    }
                })
            }


            //retourne les marches d'un type marche et regions selectionner
            if(vM.unite_administrative_id=="" && vM.region!="" && vM.infrastructure=="" && vM.type_marche!=""){
                objet =objet.filter(item=>{
                    if(item.localisation_geographie_id==vM.region && item.type_marche_id==vM.type_marche && item.parent_id!=""){
                        return item
                    }
                })
            }

            //retourn les marches d'une UA, REGION et INFRASTRUCTURE

            if(vM.unite_administrative_id!="" && vM.region!="" && vM.infrastructure!="" && vM.type_marche=="" ){
                objet =objet.filter(item=>{
                    if(item.infrastructure_id==vM.infrastructure && item.unite_administrative_id==vM.unite_administrative_id && item.localisation_geographie_id==vM.region && item.parent_id!=""){
                        return item
                    }
                })
            }


            //retourn les marches d'une UA, REGION et TYPE MARCHE
            if(vM.unite_administrative_id!="" && vM.region!="" && vM.infrastructure=="" && vM.type_marche!="" ){
                objet =objet.filter(item=>{
                    if(item.type_marche_id==vM.type_marche && item.unite_administrative_id==vM.unite_administrative_id && item.localisation_geographie_id==vM.region && item.parent_id!=""){
                        return item
                    }
                })
            }

            //retourn les marches d'une UA, INFRA et TYPE MARCHE
            if(vM.unite_administrative_id!="" && vM.region=="" && vM.infrastructure!="" && vM.type_marche!="" ){
                objet =objet.filter(item=>{
                    if(item.type_marche_id==vM.type_marche && item.unite_administrative_id==vM.unite_administrative_id && item.infrastructure_id==vM.infrastructure && item.parent_id!=""){
                        return item
                    }
                })
            }

            //retourn les marche INFRA, REGIONS,TYPE MARCHE
            if(vM.unite_administrative_id=="" && vM.region!="" && vM.infrastructure!="" && vM.type_marche!="" ){
                objet =objet.filter(item=>{
                    if(item.type_marche_id==vM.type_marche && item.localisation_geographie_id==vM.region && item.infrastructure_id==vM.infrastructure && item.parent_id!=""){
                        return item
                    }
                })
            }

            //retourn les marche INFRA, REGIONS,TYPE MARCHE,UA
            if(vM.unite_administrative_id!="" && vM.region!="" && vM.infrastructure!="" && vM.type_marche!="" ){
                objet =objet.filter(item=>{
                    if(item.type_marche_id==vM.type_marche && item.localisation_geographie_id==vM.region && item.infrastructure_id==vM.infrastructure && item.unite_administrative_id==vM.unite_administrative_id && item.parent_id!=""){
                        return item
                    }
                })
            }
            console.log(objet)
            return objet
        },

    dataBar(){
      let vM=this
      let ObjetMontantPrevue={
        name: 'Montant prevue',
        data: []
      }

      let ObjetMontantRealise={
        name: 'Montant réalisé',
        data: []
      }
      let dataArray=[]
      let tailleInfrastructure=vM.getterInfrastrucure.length
      vM.getterInfrastrucure.forEach(function (value) {
        let marche=vM.objetMarchePasUniteOuRegion.filter(item=>item.infrastructure_id==value.id)
        // let montantEngament=  vM.getMandatPersonnaliserVise.filter(item=>item.marche_id==value.id).reduce(function (total, currentValue) {
        //   return total + parseFloat(currentValue.total_general) ;
        // }, initeVal);
      let taille_categorie=  vM.chartOptions.xaxis.categories.length
        let initeVal = 0;
        let montant_prevue=  marche.reduce(function (total, currentValue) {
          return total + parseFloat(currentValue.montant_marche) ;
        }, initeVal);
        if(taille_categorie<=tailleInfrastructure-1){
          vM.chartOptions.xaxis.categories.push(value.libelle)
        }

        ObjetMontantPrevue.data.push(montant_prevue)
        if(montant_prevue==0){
          ObjetMontantRealise.data.push(0)
        }else{
          ObjetMontantRealise.data.push(vM.getRandomInt(1000000000))
        }

      })
      dataArray.push(ObjetMontantPrevue)
      dataArray.push(ObjetMontantRealise)
      return dataArray
    },
     getRandomInt() {
      return max=>{
        return Math.floor(Math.random() * Math.floor(max));
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
         // console.log(this.getMandatPersonnaliserVise)
            let vM=this;
        //    console.log(this.localisations_geographiques)
            vM.getLocalisation(vM.region).forEach(function (value){
                if(value.structure_localisation_geographique_id==5){
                    if(value.longitude!=null && value.latitude!=null){
                        let coordonne=[]
                        coordonne.push(value.latitude)
                        coordonne.push(value.longitude)
                        /**
                         * Recuperation des unite administrative de la zone geographique
                         * @type {*[]}
                         */
                        let budgetZone=0;
                        let color="";
                        let colorFill=""
                        let montant_engagement_zone=0;
                        let uniteByZoneGeo= vM.uniteAdministratives.filter( item => item.localisationgeo_id ==value.id)
                        if (uniteByZoneGeo!=undefined) {

                            /**
                             *
                             */

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



                        }

               let taux=0;
                        let budgetRest=budgetZone-montant_engagement_zone
                        if (montant_engagement_zone!=0){

                            taux=(montant_engagement_zone/budgetZone)*100

                        }
                          color="#000000"
                             colorFill="#000000"
                        let objetAlocalise={
                            id:value.id,
                            ville:value.libelle,
                            latlng:coordonne,
                            budget:budgetZone,
                            budgetReste:budgetRest,
                            budgetExecute:montant_engagement_zone,
                            tauxBudget:taux.toFixed(2),
                            color:color,
                            colorFill:colorFill
                        }
                        localisation.push(objetAlocalise)
                    }

                }
            })
        return localisation;
        },

        getInfrastructure(){
             return id=>{
               if(id!=""){
                
                 return this.getterInfrastrucure.filter(item=>item.id==id)
               }
               return this.getterInfrastrucure
             }
        },

        getLocalisation(){
            return id=>{
              if(id!=""){
             //   this.removeMapChart
                  return this.localisations_geographiques.filter(item=>item.id==id)
              }
              return this.localisations_geographiques
            }
        },
        caseAffichageMessageRegionsSituationMarche(){
      let vM=this;
      if(vM.region!="" && vM.unite_administrative_id==""){
         return true
      }
      return false
    },

    
    caseAffichageMessageUniteAdminSituationMarche(){
      let vM=this;
      if(vM.region=="" && vM.unite_administrative_id!=""){
        return true
      }
      return false
    },
    caseAffichageMessageUniteAdminRegionSituationMarche(){
      let vM=this;
      if(vM.region!="" && vM.unite_administrative_id!=""){
        return true
      }
      return false
    },
    caseAffichageMessageGeneralSituationMarche(){
      let vM=this;
      if(vM.region=="" && vM.unite_administrative_id==""){
        return true
      }
      return false
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
      // this.zoom=5
      // this.objetUnite=""
      // this.info_sidebar_marche.close()
      // this.info_sidebar_marche.disablePanel('infomarche');
    },
    videRegions(){
      this.region=""
      // this.zoom=5;
      // this.objetUnite=""
      // this.info_sidebar_marche.close()
      // this.info_sidebar_marche.disablePanel('infomarche');
    },
    videInfrastructure(){
      this.infrastructure=""
      // this.zoom=5;
      // this.objetUnite=""
      // this.info_sidebar_marche.close()
      // this.info_sidebar_marche.disablePanel('infomarche');
    },

            deleteLeafleMiniCharts(map) {

                map.eachLayer(
                    function(t) {
                      if (t._chart) { t._chart.remove(); }
                    }
                );

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
            uniteAdmin(id,ville){
                /*this.activeUa=false*/
                this.iduniteadmin=""
                this.libelle_unite_admin=""
                this.idzone=id
                this.zone_geographique=ville
               console.log(id)

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


  selctionRegion(id){

      this.info_region= this.localisations_geographiques.find(item=>item.id==id)
      // info_region console.log(this.infortion_sidbar_filter)
      this.infortion_sidbar_filter.enablePanel('infoRegion');
      this.infortion_sidbar_filter.open('infoRegion');
  },
  integrationChartPasRegisonSurCarte(){
                let vm=this
                let arrayBar=[]
                let arrayColor=[]
                let arrayLabele=[]
       if(vm.objet_map!="" && vm.objet_leaflet!=""){
                //  let tail=this.localisation.length
            if(this.localisation.length>0){
                      
                  this.localisation.forEach(function (value){
                    let taux=0;
                    let width=60;
                    let height=60;
                  let montantInfraParRegion=0

                  
                  //console.log(taux)

               if(vm.infrastructure!=""){
              taux= (vm.totalMontantInfrastructurePasRegion(value.id) /vm.totalMontantInfrastructure(vm.unite_administrative_id))*100
                            }else{
              taux=(vm.totalMontantPrevisionnelPasRegion(value.id)/vm.totalMontantPrevisionnelPasMarche)*100
                            }
                
                  
                     vm.getInfrastructure(vm.infrastructure).forEach(function(val){
                           montantInfraParRegion=  vm.getMontantMarcheRegionInfrastructure(value.id,val.id)
                        // console.log(".......getTotaleMontantMarcheParUnite....")
                       //  console.log(vm.getTotaleMontantMarcheParUnite(value.id,val.id))
                         let taux_region=0;
                             if(val.code==1){ arrayColor.push("#6C0277")}

                             if(val.code==2){ arrayColor.push("#F0C300") }

                             if(val.code==3){ arrayColor.push("#E73E01") }
                                 
                             if(val.code==4){ arrayColor.push("#22780F")}
                              
                              arrayBar.push(montantInfraParRegion)
                              arrayLabele

                               if(vm.infrastructure!=""){
              taux_region= (montantInfraParRegion /vm.totalMontantInfrastructure(vm.unite_administrative_id))*100
                            }else{
              taux_region=(montantInfraParRegion/vm.totalMontantPrevisionnelPasMarche)*100
                            }
                            
                            arrayLabele.push(taux_region.toFixed(2)+ "%")
                             /* if(vm.regions!=""){

                              }else{

                              }*/
                               if(vm.infrastructure!=""){
                                if(vm.type_minichart=="bar"){
                                       width=20;
                                  height=taux_region+30;
                                    }else{
                                    if(taux_region<5){
                                        width=taux_region+25;
                                    }

                                    if(5<taux_region && taux_region<10){
                                        console.log(taux_region)
                                        width=taux+30;
                                    }

                                    if(10<taux_region && taux_region<20){
                                        width=taux_region+35;
                                    }


                                    if(20<taux_region && taux_region<50){
                                        width=taux_region+40;
                                    }

                                    if(50<taux_region && taux_region<101){
                                        width=taux_region+45;
                                    }


                                    }
                              }
                           })
                                  
                              if(vm.infrastructure==""){
                                if(vm.type_minichart=="bar"){
                                      
                                  height=taux+30;
                                    }else{
                                    if(taux<5){
                                        width=taux+30;
                                    }

                                    if(5<taux && taux<10){
                                        console.log(taux)
                                        width=taux+40;
                                    }

                                    if(10<taux && taux<20){
                                        width=taux+50;
                                    }


                                    if(20<taux && taux<50){
                                        width=taux+60;
                                    }

                                    if(50<taux && taux<101){
                                        width=taux+75;
                                    }

                                    }
                              }
                           

                          
                              var myBarChart = vm.objet_leaflet.minichart(value.latlng,{
                                data: arrayBar,type:vm.type_minichart,
                                colors:arrayColor,
                               width:width,
                               height:height,
                              // labels:arrayLabele
                                }).on("click",function (event) {
                                  console.log(event)
                                  vm.selctionRegion(value.id)
                              });
                            
                          vm.objet_map.addLayer(myBarChart)
                 
               //  vm.objet_leaflet.marker(value.latlng).bindTooltip(value.ville, { permanent: true, offset: [0, 12] }).addTo(vm.objet_map);
//vm.objet_leaflet.marker(value.latlng).bindLabel(value.ville).addTo(vm.objet_map);

vm.objet_leaflet.circleMarker(value.latlng, {
    radius: 1,
    fillColor: "#ff7800",
    color: "#ff7800",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  
}).bindTooltip("<div style='background:white; padding:1px 3px 1px 3px'><b>" + value.ville + "</b></div>", {permanent: true,
direction: 'bottom',
 sticky: true,
    offset: [0, 10],
    opacity: 0.75,
    className: 'leaflet-tooltip' }).addTo(vm.objet_map)
                          arrayBar=[]
                          arrayColor=[]
                         arrayLabele=[]

                                })

                        }
                  
                
                }
            
                }
,
            getInfoLegende(id){
       let objet=this.getterInfrastrucure.find(item=>item.code==id)
                if(objet!=undefined){
                    this.infrastructure=objet.id
                }

            },
        },
        watch: {
            type_marche:function (value) {
                console.log(value);

                this.deleteLeafleMiniCharts(this.objet_map)
                this.integrationChartPasRegisonSurCarte()
//                this.infortion_sidbar_filter.close();
//                this.infortion_sidbar_filter.disablePanel('infoRegion');
//                this.infortion_sidbar_filter.open("home")
            },
          slection_carte:function(value){
                 console.log(value)
                 if(value==0){
   this.deleteLeafleMiniCharts(this.objet_map)
                this.integrationChartPasRegisonSurCarte()
                 }else{
                   this.deleteLeafleMiniCharts(this.objet_map)
                //this.integrationChartPasRegisonSurCarte()

                 }
          },
          type_minichart: function (value) {
                console.log(value);

                this.deleteLeafleMiniCharts(this.objet_map)
                this.integrationChartPasRegisonSurCarte()
            },
            infrastructure: function (value) {
                console.log(value);
                this.deleteLeafleMiniCharts(this.objet_map)
                this.integrationChartPasRegisonSurCarte()
//                this.infortion_sidbar_filter.close();
//                this.infortion_sidbar_filter.disablePanel('infoRegion');
//                this.infortion_sidbar_filter.open("home")
            },
            region: function (value) {
                console.log(value);  
             this.deleteLeafleMiniCharts(this.objet_map)
                this.integrationChartPasRegisonSurCarte()
//                this.infortion_sidbar_filter.close();
//                this.infortion_sidbar_filter.disablePanel('infoRegion');
//                this.infortion_sidbar_filter.open("home")
            },
            unite_administrative_id: function (value) {
                console.log(value);  
              //  this.objet_map.layers; 
              this.deleteLeafleMiniCharts(this.objet_map)
             //  this.objet_map.on('overlayremove', this.hide_charts())
                this.integrationChartPasRegisonSurCarte()
//                this.infortion_sidbar_filter.close();
//                this.infortion_sidbar_filter.disablePanel('infoRegion');
//                this.infortion_sidbar_filter.open("home")
            },

        },
        mounted() {
         /*   setTimeout(() => {
                console.log('done')
                this.$nextTick(() =>{
                    this.clusterOptions = { disableClusteringAtZoom: 11 }
                });
            }, 5000);*/
console.log(L)
console.log(ad)
console.log(ad1)
            console.log(moda)

console.log(this.getActeEffetFinancierPersonnaliser45)
//console.log()
/**
 *  objet_map:"",
              objet_leaflet:"",
 */
 const mapComponent = this.$refs.map;

    const map = mapComponent.mapObject;
  this.objet_map=mapComponent.mapObject;
  this.objet_leaflet=window.L
    let sid=window.L
     let panel_options = {
      closeButton: true,
      position: 'left',
      autoPan: false
    };
    console.log("interne")
    console.log(sid)
     console.log("..interne...")




    var sidebar = sid.control.sidebar('map10', panel_options).addTo(map);
            sidebar.open("home")
            this.infortion_sidbar_filter=sidebar
            this.infortion_sidbar_filter.disablePanel('infoRegion');
var panelContent = {
      id: 'userinfo',                     // UID, used to access the panel
      tab: '',  // content can be passed as HTML string,
      // DOM elements can be passed, too
      title: 'Your Profile',              // an optional pane header
      position: 'bottom'                  // optional vertical alignment, defaults to 'top'
    };
     sidebar.addPanel(panelContent);

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

sid.easyPrint({
	title: "Imprimer",
	position: 'topleft',
	sizeModes: ['A4Portrait', 'A4Landscape']
}).addTo(map);
  
  


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
        position: 'bottomright',
        legends: [
          {
            name: 'Legende',
            elements: [{
                label: '<div id="sanitaire">Sanitaires</div>',
                html: "<div class='sante'></div>"
            },
            {
                label: '<div id="scolaires">Scolaires</div>',
                html: "<div class='scolaire'></div>"
            },
            {
                label: '<div id="communautaires">Communautaires</div>',
                html: "<div class='communautaire'></div>"
            },
            {
                label: '<div id="routiere">Routière</div>',
                html: "<div class='routier'></div>"
            }]
        }],
        collapseSimple: false,
        detectStretched: false,
        visibleIcon: 'icon icon-eye',
        hiddenIcon: 'icon icon-eye-slash'
    })
    map.addControl(htmlLegend3)

            let vMm=this;
            //click legende sanitaire
            const sanitaire = document.querySelector('#sanitaire');
            sanitaire.addEventListener('click', function (event) {
                console.log(event)
                vMm.getInfoLegende(1)
                // console.log("Guei est dans la place....... ")
            })

            //click legende routiere
            const routiere = document.querySelector('#routiere');
            routiere.addEventListener('click', function (event) {
                console.log(event)
                vMm.getInfoLegende(4)
                // console.log("Guei est dans la place....... ")
            })

            //click legende scolaires
            const scolaires = document.querySelector('#scolaires');
            scolaires.addEventListener('click', function (event) {
                console.log(event)
                vMm.getInfoLegende(2)
                // console.log("Guei est dans la place....... ")
            })
            //click legende communautaire
            const communautaires = document.querySelector('#communautaires');
            communautaires.addEventListener('click', function (event) {
                console.log(event)
                vMm.getInfoLegende(3)
                // console.log("Guei est dans la place....... ")
            })

            this.integrationChartPasRegisonSurCarte()



}
    };
</script>
<style>
.sante{
   width: 20px;
   height: 20px;
   background: #6C0277;
}
.scolaire{
   width: 20px;
   height: 20px;
   background: #F0C300;
}
.communautaire{
   width: 20px;
   height: 20px;
   background: #E73E01;
}
.routier{
   width: 20px;
   height: 20px;
   background: #22780F;
}
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
  background-color: green; }
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
  background-color: green; }
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

.class-popup .leaflet-popup-content-wrapper {
  background:#2980b9;
  color:#fff;
  font-size:10px;
  line-height:10px;
  }

.class-popup .leaflet-popup-content-wrapper a {
  color:#2980b9;
  }
.class-popup .leaflet-popup-tip-container {
  width:40px;
  height:20px;
  }
.class-popup .leaflet-popup-tip {
  background:#2980b9;
  }

/* tooltip-class*/ 

.class-tooltip{
  background: green;
  border: 2px solid cyan
}
.leaflet-tooltip-left.class-tooltip::before {
  border-left-color: cyan;
}
.leaflet-tooltip-right.class-tooltip::before {
  border-right-color: cyan;
}

.titreLable{
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
    box-shadow: 0 1px 3px rgba(0,0,0,0.4) !important;
   
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

</style>
