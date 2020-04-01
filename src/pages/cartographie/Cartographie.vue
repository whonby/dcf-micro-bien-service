<template>
    <div>
        <div class="container-fluid">
            <div class="quick-actions_homepage">
                <ul class="quick-actions">
                    <li class="bg_lb"> <a href="index.html"> <i class="icon-dashboard"></i> <span class="label label-important">20</span> Budget </a> </li>
                    <li class="bg_lg "> <a href="charts.html"> <i class="icon-signal"></i> budget execute </a> </li>
                    <li class="bg_ly"> <a href="widgets.html"> <i class="icon-inbox"></i><span class="label label-success">101</span> Budget restant </a> </li>
                    <li class="bg_lo"> <a href="tables.html"> <i class="icon-th"></i> Taux d'execution</a> </li>

                </ul>
            </div>
        <div class="row-fluid">
            <div class="span8">
                <div class="">

                    <div class="widget-content" style="height: 500px; width: 100%; border-bottom: none">
                        <l-map :zoom=2 :center="initialLocation" >
                            <l-icon-default></l-icon-default>
                            <l-control-layers position="topright"  ></l-control-layers>
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
                                                 @click="uniteAdmin(l.id,l.ville)"
                                                 :radius="8"
                                                 :color="'#ff0000'"
                                                 :fillColor="'#ff0000'"
                                                 :fillOpacity="2"

                                >
                                    <l-popup>
                                    <b>{{l.ville}}</b> <br>
                                    <div style="font-size: 11px;">
                                        Budget: <span style="color: #003900; "><b>20</b></span> <br>
                                        Budget execute:<span style="color: #00d700; "><b>101</b></span><br>
                                        Budget restant:<span style="color: darkred; "><b>101</b></span><br>
                                        Taux d'execution:<span style="color: #e36706; "><b>101</b></span>
                                    </div>
                                </l-popup>

                                </l-circle-marker>
                                <l-marker >


                                    <!---->
                                </l-marker>
                            </v-marker-cluster>
                        </l-map> </div>
                </div>
            </div>
            <div class="span4">
                <div class="widget-box">
                    <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                        <h5>Liste des unite administrative
                        </h5>
                    </div>
                    <div class="widget-content" >
                        <a data-dismiss="modal" class="btn btn-primary" href="#" v-if="zone_geographique">{{zone_geographique}}</a>

                        <button v-if="zone_geographique" @click.prevent="afficher()"  class="btn btn-danger ">
                        <span class="">Afficher tous</span></button>
                        <table class="table table-bordered table-striped" >
                            <tr>
                                <th>Nom UA </th>
                            </tr>
                            <tbody style="height: 100px;">
                            <tr class="odd gradeX" v-for="ua in administratif(idzone)"
                                :key="ua.id">
                                <td>{{ua.libelle}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'
    import { latLng, Icon, icon } from 'leaflet'
    import { LMap, LTileLayer, LMarker,LIconDefault,LControlLayers,LTooltip,LPopup,LCircleMarker } from "vue2-leaflet";
    import iconUrl from 'leaflet/dist/images/marker-icon.png'
    import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
    export default {
        name: "Example",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup,
            LTooltip,
            LIconDefault,
            LControlLayers,
            LCircleMarker
           // LIcon

        },
        data() {
            let customicon = icon(Object.assign({},
                Icon.Default.prototype.options,
                {iconUrl, shadowUrl}
            ))
            return {
                search:"",
                icon: customicon,
                clusterOptions: {},
                zoom: 3,
                idzone:"",
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
                    zoomSnap: 0.5
                },
                initialLocation: [5.315322875304895, -3.981547742187508],
                showMap: true,
                villes :[
                    { "id":1,"ville":"Abidjan", latlng: [5.315322875304895, -3.981547742187508]},
                    { "id":2,"ville":"Abengourou", latlng: [6.664694482178404, -3.470683484375008]},
                    { "id":3,"ville":"Daloa", latlng: [6.8610723184485805, -6.436992078125008]},
                    { "id":4,"ville":"Man", latlng: [7.36800149553843, -7.530131726562508]},
                    { "id":4,"ville":"Katiola", latlng: [8.146329453370681, -5.085673718750008]},
                    { "id":5,"ville":"Séguéla", latlng: [7.950523505237736, -6.678691296875008]},
                    { "id":6,"ville":"Agnibilékrou", latlng: [7.136409840235729, -3.209758191406258]},
                    { "id":7,"ville":"Bouaké", latlng: [7.675694207615582, -5.038981824218758]},
                    { "id":8,"ville":"Korhogo", latlng: [9.487076476705427,-5.607524304687508]},
                    { "id":9,"ville":"Odienné", latlng: [9.503330190159723, -7.568583875000008]},
                    { "id":10,"ville":"Grand-Bassam", latlng: [5.181688812992997, -3.7619662700796486]},
                    { "id":11,"ville":"Sassandra", latlng: [4.9419160311934345, -6.081309705078133]},
                    { "id":12,"ville":"Gagnoa", latlng: [6.146103409730145, -5.948100476562508]},
                    { "id":13,"ville":"Bouaflé", latlng: [6.972862557513062, -5.731120496093758]},
                    { "id":14,"ville":"Duékoué", latlng: [6.735617895972735, -7.359843640625008]},
                    { "id":15,"ville":"Bouna", latlng: [9.264982283292248, -2.984804458143524]},
                ],
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
                        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
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
            };
        },

    computed: {
// methode pour maper notre guetter
    ...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques',
            'localisations_geographiques']),
        ...mapGetters("uniteadministrative", [
            "acteCreations",
            "typeTextes",
            "uniteAdministratives",
            "getterBudgeCharge"
        ]),
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
            this.localisations_geographiques.forEach(function (value){
                if(value.parent!=null){
                    if(value.longitude!=null && value.latitude!=null){
                        let coordonne=[]
                        coordonne.push(value.latitude)
                        coordonne.push(value.longitude)
                        let objetAlocalise={
                            id:value.id,
                            ville:value.libelle,
                            latlng:coordonne,
                            budget:"",
                            budgetReste:'',
                            budgetExecute:"",
                            tauxBudget:""
                        }
                        localisation.push(objetAlocalise)
                    }

                }
            })
        return localisation;
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
                this.idzone=id
                this.zone_geographique=ville
               console.log(id)

            },
            afficher(){
                this.idzone=""
                this.zone_geographique=""
            },
            click: (e) => console.log("clusterclick", e),
            ready: (e) => console.log('ready', e),
        },
        mounted() {
            setTimeout(() => {
                console.log('done')
                this.$nextTick(() =>{
                    this.clusterOptions = { disableClusteringAtZoom: 11 }
                });
            }, 5000);
        }
    };
</script>
<style>
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
</style>
