<template>

    <div>
        <div class="container-fluid">
            <div class="quick-actions_homepage">
                <ul class="quick-actions" v-if="idzone=='' && iduniteadmin==''">
                    <li class="bg_lb"> <a href="#">
                        {{formatageSomme(budgetGeneral)}}<br> Budget general</a> </li>
                    <li class="bg_lg "> <a href="#">
                        {{formatageSomme(budgetGeneralExcecute)}}<br> budget execute </a> </li>
                    <li class="bg_ly"> <a href="#">  {{formatageSomme(bugdetGeneralRestant)}}<br> Budget restant </a> </li>
                    <li class="bg_lo"> <a href="#">{{tauxExecutionBudgetGeneral}} %<br> Taux d'execution</a> </li>
                </ul>

                <ul class="quick-actions" v-if="zone_geographique!='' && iduniteadmin==''">
                    <li class="bg_ls"> <a href="#"><h6>{{zone_geographique}}</h6> </a> </li>
                    <li class="bg_lb"> <a href="#">
                        {{formatageSomme(budgetByZone(idzone))}}<br> Budget total zone</a> </li>
                    <li class="bg_lg "> <a href="#">
                        {{formatageSomme(budgetZoneExcecute)}}<br> budget execute zone </a> </li>
                    <li class="bg_ly"> <a href="#">  {{formatageSomme(bugdetZoneRestant)}}<br> Budget restant zone</a> </li>
                    <li class="bg_lo"> <a href="#">{{tauxExecutionBudgetZone}} %<br> Taux d'execution zone </a> </li>
                </ul>

                <ul class="quick-actions" v-if="iduniteadmin">
                    <li class="bg_ls"> <a href="#"><h6>{{libelle_unite_admin}}</h6> </a> </li>
                    <li class="bg_lb"> <a href="#">
                        {{formatageSomme(budgetByUniteAdmin(iduniteadmin))}}<br> Budget total UA</a> </li>
                    <li class="bg_lg "> <a href="#">
                        {{formatageSomme(budgetExecuteUniteAdmin)}}<br> budget execute zone </a> </li>
                    <li class="bg_ly"> <a href="#">  {{formatageSomme(budgetRestUniteAdmin)}}<br> Budget restant UA</a> </li>
                    <li class="bg_lo"> <a href="#">{{tauxExecutionUniteAdmin}} %<br> Taux d'execution UA </a> </li>
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
                                                 :color="l.color"
                                                 :fillColor="l.colorFill"
                                                 :fillOpacity="2"

                                >
                                    <l-popup>
                                    <b>{{l.ville}}</b> <br>
                                    <div >
                                        Budget: <span style="color: #003900; "><b>{{formatageSomme(l.budget)}}</b></span> <br>
                                        Budget execute:<span style="color: #00d700; "><b>{{formatageSomme(l.budgetExecute)}}</b></span><br>
                                        Budget restant:<span style="color: darkred; "><b>{{formatageSomme(l.budgetReste)}}</b></span><br>
                                        Taux d'execution:<span style="color: #e36706; "><b>{{l.tauxBudget}} %</b></span>
                                    </div>
                                </l-popup>

                                </l-circle-marker>
                              <!--  <l-marker v-for="l in localisation"
                                          :key="l.id"
                                          :lat-lng="l.latlng">


                                    &lt;!&ndash;&ndash;&gt;
                                </l-marker>-->
                            </v-marker-cluster>
                        </l-map>
                    </div>
                </div>
            </div>
            <div class="span4">
                <div class="widget-box">
                    <div class="widget-title" align="center" v-if="zone_geographique"> <span class="icon"> <i class="icon-book"></i> </span>
                        <h5>{{zone_geographique}}</h5>
                        <button v-if="zone_geographique" @click.prevent="afficher()"  class="btn btn-mini">
                            <i class="icon-folder-open"></i>Afficher tout</button>

                    </div>
                    <div class="widget-title" align="center" v-if="libelle_unite_admin"> <span class="icon"> <i class="icon-book"></i> </span>
                        <h5>{{libelle_unite_admin}}</h5>
                        <button v-if="libelle_unite_admin" @click.prevent="afficher()"  class="btn btn-mini">
                            <i class="icon-folder-open"></i>Afficher tout</button>

                    </div>
                    <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                        <h5 align="center">Liste des unite administrative
                        </h5>
                    </div>

                    <div class="widget-content widget-content1" >

                        <table class="table table-bordered table-striped" >
                            <tr>
                                <th>Nom UA </th>
                            </tr>
                            <tbody style="height: 100px;">
                            <tr class="odd gradeX " v-for="ua in administratif(idzone)"
                                :key="ua.id">
                                <td  class="blah " @click="uniteAdministrativeSelect(ua.id,ua.libelle, $event)" :class="{ red : active_el == ua.id }">{{ua.libelle}}</td>
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
    import { LMap, LTileLayer, LIconDefault,LControlLayers,LPopup,LCircleMarker } from "vue2-leaflet";
    import iconUrl from 'leaflet/dist/images/marker-icon.png'
    import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
    import { formatageSomme } from "../../../src/Repositories/Repository";
    export default {
        name: "Example",
        components: {
            LMap,
            LTileLayer,

            LPopup,
           // LTooltip,
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
                zoom: 3,
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
                    zoomSnap: 0.5
                },
                initialLocation: [5.315322875304895, -3.981547742187508],
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
        ...mapGetters("bienService", ['marches',"engagements"]),
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
            this.localisations_geographiques.forEach(function (value){
                if(value.parent!=null){
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
                                             let montantEngament=  vM.engagements.filter(item=>item.marche_id==val.id).reduce(function (total, currentValue) {
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
                         if(budgetZone==0){
                             color="#ff0000"
                             colorFill="#ff0000"
                         }else{
                             if(taux==0){
                                 color="#0c2061"
                                 colorFill="#0c2061"
                             }

                             if(1<=taux && taux<31){

                                 color="#fffb13"
                                 colorFill="#fffb13"
                             }

                             if(31<=taux && taux<51){
                                 color="#2affe1"
                                 colorFill="#2affe1"
                             }

                             if(51<=taux && taux<81){
                                 color="#1285ff"
                                 colorFill="#1285ff"
                             }
                             if(81<=taux && taux<100){
                                 color="#9dfd80"
                                 colorFill="#9dfd80"
                             }
                             if(taux==100){
                                 color="#209503"
                                 colorFill="#209503"
                             }

                         }
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
                        let montantEngament=  vM.engagements.filter(item=>item.marche_id==val.id).reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.total_general) ;
                        }, initeVal);
                        montant_engagement_unite_admin=montant_engagement_unite_admin + montantEngament

                    })
                }
                montant_engagement=montant_engagement + montant_engagement_unite_admin
            })
            vM.budgetGeneralExcecute=montant_engagement
            let tauxEx=(montant_engagement/budget_general)*100
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
                                        let montantEngament=  vM.engagements.filter(item=>item.marche_id==val.id).reduce(function (total, currentValue) {
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
                            let montantEngament=  vM.engagements.filter(item=>item.marche_id==val.id).reduce(function (total, currentValue) {
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
</style>
