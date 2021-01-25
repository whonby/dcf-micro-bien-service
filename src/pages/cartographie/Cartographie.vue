<template>
    <div>
        <div class="">

            <div id="map10" class="sidebar leaflet-sidebar collapsed">
                <div class="sidebar-tabs">
                    <ul role="tablist"> <!-- top aligned tabs -->
                        <li><a href="#home" role="tab"><i class="fa fa-bars"></i></a></li>
                        <li><a href="#profile" role="tab"><i class="fa fa-bar-chart-o"></i></a></li>
                    </ul>
                </div>
                <div class="sidebar-content">
                    <div class="sidebar-pane" id="home">
                        <h1 class="sidebar-header">
                            Filtre
                            <div class="sidebar-close"><i class="fa fa-caret-left"></i></div>
                                    </h1>
<div class="row-fluid">
    <div class="span6">
        <label>Zone <a href="#" @click.prevent="videZone()" style="color: red" v-if="zone"><i class="fa fa-trash-o"></i></a></label>
        <model-list-select style="background-color: rgb(233,233,233);"
                           class="wide"
                           :list="listeZone"
                           v-model="zone"
                           option-value="id"
                           option-text="libelle"
                           placeholder="Zone"
        >

        </model-list-select>
    </div>
    <div class="span6">
        <label>Regions <a href="#" @click.prevent="videRegions()" style="color: red" v-if="region"><i class="fa fa-trash-o"></i></a></label>
        <model-list-select style="background-color: rgb(233,233,233);"
                           class="wide"
                           :list="listeRegions(zone)"
                           v-model="region"
                           option-value="id"
                           option-text="libelle"
                           placeholder="Regions"
        >

        </model-list-select>
    </div>
</div>
                        <div class="row-fluid">
                            <div class="span6">
                                <label>Département <a href="#" @click.prevent="videDepartement()" style="color: red" v-if="departement"><i class="fa fa-trash-o"></i></a></label>
                                <model-list-select style="background-color: rgb(233,233,233);"
                                                   class="wide"
                                                   :list="paysDepartement(region)"
                                                   v-model="departement"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Departement"
                                >

                                </model-list-select>
                            </div>
                            <div class="span6">
                                <label>Sous Prefecture <a href="#" @click.prevent="videSousPrefectuer()" style="color: red" v-if="departement"><i class="fa fa-trash-o"></i></a></label>
                                <model-list-select style="background-color: rgb(233,233,233);"
                                                   class="wide"
                                                   :list="paysSousPrefection(departement)"
                                                   v-model="ville"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Sous Prefectuer"
                                >

                                </model-list-select>
                            </div>
                        </div>


                        <div class="">
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="card-box bg-prevision">
                                        <div class="inner">
                                            <h3> {{formatageSomme(parseFloat(budgetGeneral))}} </h3>
                                            <p>Budget Total </p>
                                        </div>
                                        <div class="icon">
                                            <i class="fa fa-money" aria-hidden="true"></i>
                                        </div>

                                    </div>
                                </div>

                                <div class="span6">
                                    <div class="card-box bg-base">
                                        <div class="inner">
                                            <h3> {{formatageSomme(parseFloat(budgetGeneralExcecute))}} </h3>
                                            <p>Budget Executé </p>
                                        </div>
                                        <div class="icon">
                                            <i class="fa fa-money" aria-hidden="true"></i>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="card-box bg-green">
                                        <div class="inner">
                                            <h3> {{formatageSomme(parseFloat(bugdetGeneralRestant))}} </h3>
                                            <p> Budget Restant </p>
                                        </div>
                                        <div class="icon">
                                            <i class="fa fa-money" aria-hidden="true"></i>
                                        </div>

                                    </div>

                                </div>


                                <div class="span6">
                                    <div class="card-box bg-taux ">
                                        <div class="inner">
                                            <h3> {{tauxExecutionBudgetGeneral}} % </h3>
                                            <p> Taux Execution</p>
                                        </div>
                                        <div class="icon">
                                            <i class="fa fa-money" aria-hidden="true"></i>
                                        </div>

                                    </div>
                                </div>



                            </div>
                        </div>
<hr>
<!--                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>-->

<!--                            <div class="span9" style="text-align:center"><h5>N° D'ORDRE-->
<!--                            </h5></div>-->

<!--                            <div class="span2"></div>-->
<!--                        </div>-->
<!--                        <table class="table table-bordered table-striped">-->
<!--                            <thead>-->
<!--                            <tr>-->
<!--                                <th>Budget Total </th>-->
<!--                                <th>Budget Execute</th>-->
<!--                                <th>Budget Restant</th>-->
<!--                                <th>Taux execution</th>-->
<!--                            </tr>-->
<!--                            </thead>-->
<!--                            <tbody>-->
<!--                            <tr class="odd gradeX">-->
<!--                                <td>NUMERO DU MARCHE </td>-->
<!--                                <td>DATE D'APPROBATION</td>-->
<!--                                <td>DUREE D'EXECUTION</td>-->
<!--                                <td>DUREE D'EXECUTION</td>-->

<!--                            </tr>-->
<!--                            </tbody>-->
<!--                        </table>-->
<!--                        <div class="quick-actions_homepage">-->
<!--                            <ul class="quick-actions" v-if="idzone=='' && iduniteadmin==''">-->
<!--                                <li class="bg_lb"> <a href="#">-->
<!--                                    {{formatageSomme(budgetGeneral)}}<br> Budget général</a> </li>-->
<!--                                <li class="bg_lg "> <a href="#">-->
<!--                                    {{formatageSomme(budgetGeneralExcecute)}}<br> Budget exécuté </a> </li>-->
<!--                                <li class="bg_ly"> <a href="#">  {{formatageSomme(bugdetGeneralRestant)}}<br> Budget restant </a> </li>-->
<!--                                <li class="bg_lo"> <a href="#">{{tauxExecutionBudgetGeneral}} %<br> Taux d'exécution</a> </li>-->
<!--                            </ul>-->

<!--                            <ul class="quick-actions" v-if="zone_geographique!='' && iduniteadmin==''">-->
<!--                                <li class="bg_ls"> <a href="#"><h6>{{zone_geographique}}</h6> </a> </li>-->
<!--                                <li class="bg_lb"> <a href="#">-->
<!--                                    {{formatageSomme(budgetByZone(idzone))}}<br> Budget total zone</a> </li>-->
<!--                                <li class="bg_lg "> <a href="#">-->
<!--                                    {{formatageSomme(budgetZoneExcecute)}}<br> budget execute zone </a> </li>-->
<!--                                <li class="bg_ly"> <a href="#">  {{formatageSomme(bugdetZoneRestant)}}<br> Budget restant zone</a> </li>-->
<!--                                <li class="bg_lo"> <a href="#">{{tauxExecutionBudgetZone}} %<br> Taux d'exécution zone </a> </li>-->
<!--                            </ul>-->

<!--                            <ul class="quick-actions" v-if="iduniteadmin">-->
<!--                                <li class="bg_ls"> <a href="#"><h6>{{libelle_unite_admin}}</h6> </a> </li>-->
<!--                                <li class="bg_lb"> <a href="#">-->
<!--                                    {{formatageSomme(budgetByUniteAdmin(iduniteadmin))}}<br> Budget total UA</a> </li>-->
<!--                                <li class="bg_lg "> <a href="#">-->
<!--                                    {{formatageSomme(budgetExecuteUniteAdmin)}}<br> Budget exécuté zone </a> </li>-->
<!--                                <li class="bg_ly"> <a href="#">  {{formatageSomme(budgetRestUniteAdmin)}}<br> Budget restant UA</a> </li>-->
<!--                                <li class="bg_lo"> <a href="#">{{tauxExecutionUniteAdmin}} %<br> Taux d'execution UA </a> </li>-->
<!--                            </ul>-->
<!--                        </div>-->



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













        <div class="row-fluid">
            <div class="span12">
                <div class="">

                    <div class="widget-content" style="height: 850px !important; width: 100%; ">
                        <l-map ref="map" class="sidebar-map" :zoom=2.4 :center="initialLocation" >
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
<!--                            <v-marker-cluster >-->
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
<!--                            </v-marker-cluster>-->
                          <v-geosearch :options="geosearchOptions" ></v-geosearch>
                        </l-map>
                    </div>
                </div>
<!--                <div class="span12">-->
<!--                    <div class="widget-box">-->
<!--                        <div class="">-->
<!--                         <table>-->
<!--                             <tr style="border-bottom: 2px solid #fff">-->
<!--                                 <td style="width: 20px;height:20px;background: red" ></td>-->
<!--                                 <td style="text-align: center; border-right: 5px solid #fff" colspan="3">Pas de budget</td>-->
<!--                                 <td style="width: 20px;height:20px;background: #0c2061" ></td>-->
<!--                                 <td style="text-align: center; border-right: 5px solid #fff" colspan="3"> Taux d'exécution de 0 %</td>-->
<!--                                 <td style="width: 20px;height:20px;background: #fffb13" ></td>-->
<!--                                 <td style="text-align: center; border-right: 5px solid #fff " colspan="3">Taux d'exécution compris entre 1 et 30 %</td>-->
<!--                                 <td style="width: 20px;height:20px;background: #8f1db7" ></td>-->
<!--                                 <td style="text-align: center; border-right: 5px solid #fff" colspan="3"> Taux d'exécution compris entre 31 et 50 %</td>-->
<!--                             </tr>-->
<!--                         </table>-->
<!--                            <table>-->
<!--                                <tr>-->
<!--                                    <td style="width: 20px;height:20px;background: #1285ff" ></td>-->
<!--                                    <td style="text-align: center; border-right: 5px solid #fff" colspan="3">Taux d'exécution compris entre 51 et 80 %</td>-->
<!--                                    <td style="width: 20px;height:20px;background: #9dfd80" ></td>-->
<!--                                    <td style="text-align: center; border-right: 5px solid #fff" colspan="3">Taux d'exécution compris entre 81 et 99 %</td>-->
<!--                                    <td style="width: 20px;height:20px;background: #209503" ></td>-->
<!--                                    <td style="text-align: center; border-right: 5px solid #fff" colspan="3">Taux d'exécution de 100%</td>-->
<!--                                </tr>-->
<!--                            </table>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
<!--            <div class="span4">-->
<!--                <div class="widget-box">-->
<!--                    <div class="widget-title" align="center" v-if="zone_geographique"> <span class="icon"> <i class="icon-book"></i> </span>-->
<!--                        <h5>{{zone_geographique}}</h5>-->
<!--                        <button v-if="zone_geographique" @click.prevent="afficher()"  class="btn btn-mini">-->
<!--                            <i class="icon-folder-open"></i>Afficher tout</button>-->

<!--                    </div>-->
<!--                    <div class="widget-title" align="center" v-if="libelle_unite_admin"> <span class="icon"> <i class="icon-book"></i> </span>-->
<!--                        <h5>{{libelle_unite_admin}}</h5>-->
<!--                        <button v-if="libelle_unite_admin" @click.prevent="afficher()"  class="btn btn-mini">-->
<!--                            <i class="icon-folder-open"></i>Afficher tout</button>-->

<!--                    </div>-->
<!--                    <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>-->
<!--                        <h5 align="center">Liste des unités administratives-->
<!--                        </h5>-->
<!--                    </div>-->

<!--                    <div class="widget-content widget-content1" >-->

<!--                        <table class="table table-bordered table-striped" >-->
<!--                            <tr>-->
<!--                                <th>Nom UA </th>-->
<!--                            </tr>-->
<!--                            <tbody style="height: 100px;">-->
<!--                            <tr class="odd gradeX " v-for="ua in administratif(idzone)"-->
<!--                                :key="ua.id">-->
<!--                                <td  class="blah " @click="uniteAdministrativeSelect(ua.id,ua.libelle, $event)" :class="{ red : active_el == ua.id }">{{ua.libelle}}</td>-->
<!--                            </tr>-->
<!--                            </tbody>-->
<!--                        </table>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

        </div>

        </div>
    </div>

</template>

<script>
    import LControlFullscreen from 'vue2-leaflet-fullscreen';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import VGeosearch from 'vue2-leaflet-geosearch';
    import {mapGetters} from 'vuex'
    import { latLng, Icon, icon } from 'leaflet'
    import { LMap, LTileLayer, LIconDefault,LControlLayers,LPopup,LCircleMarker } from "vue2-leaflet";
    import iconUrl from 'leaflet/dist/images/marker-icon.png'
    import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
    import { formatageSomme } from "../../../src/Repositories/Repository";
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
        name: "Example",
        components: {
            LMap,
            LTileLayer,
          VGeosearch,
            LPopup,
            ModelListSelect,
           // LTooltip,
            LControlFullscreen,
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
                zone:"",
                pays:"",
                region:"",
                ville:"",
                departement:"",
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
created(){
       console.log(this.transferts)
},
    computed: {
// methode pour maper notre guetter
    ...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques',
            'localisations_geographiques']),
        ...mapGetters("uniteadministrative", [
            "acteCreations",
            "typeTextes",
            "uniteAdministratives",
            "getterBudgeCharge",
            "transferts"
        ]),
        listeZone(){
        return this.localisations_geographiques.filter(item=>{
            if(item.structure_localisation_geographique_id==1){
                return item
            }
        })
        },
        listeRegion(){
            return this.localisations_geographiques.filter(item=>{
                if(item.structure_localisation_geographique_id==5){
                    return item
                }
            })
        },
        listeDepartement(){
            return this.localisations_geographiques.filter(item=>{
                if(item.structure_localisation_geographique_id==6){
                    return item
                }
            })
        },
        listeSouprefecture(){
            return this.localisations_geographiques.filter(item=>{
                if(item.structure_localisation_geographique_id==8){
                    return item
                }
            })
        },
        paysDepartement(){
            return region=>{
                if(region!=""){
                    return this.listeDepartement.filter(item=>{
                        if(item.parent==region){
                            return item
                        }
                    })
                }
                return  []
            }
        },
        paysSousPrefection(){
            return departement=>{
                if(departement!=""){
                    return this.listeSouprefecture.filter(item=>{
                        if(item.parent==departement){
                            return item
                        }
                    })
                }
                return  []
            }
        },
        listeLocalisationGeo(){
        let data_localisation=[]
            let vm=this;
        let objetZone=this.listeZone
         let objetRegion=vm.listeRegion
       let objetDepartement=vm.listeDepartement;
        let objetSousPrefectuer=vm.listeSouprefecture
            if(vm.zone!=""){
                objetZone=objetZone.filter(item=>item.id==vm.zone)
            }

            if(vm.region!=""){
                objetRegion=objetRegion.filter(item=>item.id==vm.region)
            }

            if(vm.departement!=""){
                objetDepartement=objetDepartement.filter(item=>item.id==vm.departement)
            }
            if(vm.ville!=""){
                objetSousPrefectuer=objetSousPrefectuer.filter(item=>item.id=vm.ville)
            }
          objetZone.forEach(function (value){
             let region= objetRegion.filter(item=>item.parent==value.id)

                region.forEach(function (val){
                      let departement=objetDepartement.filter(item=>item.parent==val.id)

                    departement.forEach(function (row) {
                      let sous_prefecture=objetSousPrefectuer.filter(item=>item.parent==row.id)

                        sous_prefecture.forEach(function (obj) {
                            data_localisation.push(obj)
                        })

                      })
                      }
                  )

          })
            return data_localisation;
        },
        listeRegions(){
        return zone=>{
                  if(zone!=""){
                      return this.localisations_geographiques.filter(item=>{
                          if(item.parent==zone){
                              return item
                          }
                      })
                  }
                  return  []
        }

        },
        ...mapGetters("bienService", ['marches',"engagements","getMandatPersonnaliserVise"]),
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
            this.listeLocalisationGeo.forEach(function (value){
                if(value.parent!=null){

                    if(value.longitude!=null && value.latitude!=null){
                        let coordonne=[]
                        coordonne.push(value.latitude)
                        coordonne.push(value.longitude)
                        /**
                         * Recuperation des unite administrative de la zone geographique
                         * @type {*[]}
                         */
                        //this.transferts
                        let budgetZone=0;
                        let color="";
                        let colorFill=""
                        let montant_engagement_zone=0;
                        let montant_engagetransfere=0;
                        let uniteByZoneGeo= vM.uniteAdministratives.filter( item => item.localisationgeo_id ==value.id)
                        if (uniteByZoneGeo!=undefined) {

                            /**
                             *
                             */

                            uniteByZoneGeo.forEach(function (row) {
                                let initialV=0;
                                let objetTransfere=vM.transferts.filter(item=>item.ua_id==row.id)
                                let montantTransfere=objetTransfere.reduce(function (total, currentValue) {
                                    return total + parseFloat(currentValue.montant_transfert) ;
                                }, initialV);
                                 montant_engagetransfere= parseFloat(montant_engagetransfere) + parseFloat(montantTransfere)

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

                        let montantExecute=montant_engagement_zone + montant_engagetransfere
                        let budgetRest=budgetZone-montantExecute
                        console.log(montant_engagetransfere)
                        if (montant_engagement_zone!=0){
                            taux=(montantExecute/budgetZone)*100

                        }
                         if(budgetZone==0){
                             color="#6A0888"
                             colorFill="#6A0888"
                         }else{
                             if(taux==0){
                                 color="#DF0101"
                                 colorFill="#DF0101"
                             }

                             if(0<taux && taux<=25){
                                 color="#FF8000"
                                 colorFill="#FF8000"
                             }

                             if(26<=taux && taux<51){
                                 color="#2ECCFA"
                                 colorFill="#2ECCFA"
                             }

                             if(51<=taux && taux<76){
                                 color="#0000f3"
                                 colorFill="#0000f3"
                             }
                             if(76<=taux && taux<100){
                                 color="#01DF01"
                                 colorFill="#01DF01"
                             }
                             if(taux==100){
                                 color="#0B3B0B"
                                 colorFill="#0B3B0B"
                             }

                         }
                        let objetAlocalise={
                            id:value.id,
                            ville:value.libelle,
                            latlng:coordonne,
                            budget:budgetZone,
                            budgetReste:budgetRest,
                            budgetExecute:montantExecute,
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
            let montantEngagelocalite=0;
            let vM=this;
            this.listeLocalisationGeo.forEach(function (value) {
                let montant_engagement=0;
                vM.uniteAdministratives.filter( item => item.localisationgeo_id ==value.id).forEach(function(row){
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

                montantEngagelocalite=montantEngagelocalite+montant_engagement
            })


            vM.budgetGeneralExcecute=montantEngagelocalite
            let tauxEx=(vM.budgetGeneralExcecute/budget_general)*100
            console.log(tauxEx)
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
            videZone(){
              this.zone=""
                this.region=""
                this.departement=""
                this.ville=""
            },
            videRegions(){
              this.region=""
                this.departement=""
                this.ville=""
            },
            videDepartement(){
              this.departement=""
                this.ville=""
            },
            videSousPrefectuer(){
               this.ville=""
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
        },
        mounted() {


            const mapComponent = this.$refs.map;

            const map = mapComponent.mapObject;
            //  console.log(window.L)
            let sid=window.L
           // console.log(L)
            let panel_options = {
                closeButton: true,
                position: 'left',
                autoPan: false
            };
            var sidebar = sid.control.sidebar('map10', panel_options).addTo(map);
            sidebar.open("home")

            console.log(sid)

            var panelContent = {
                id: 'userinfo',                     // UID, used to access the panel
                tab: '',  // content can be passed as HTML string,
                // DOM elements can be passed, too
                title: 'Your Profile',              // an optional pane header
                position: 'bottom'                  // optional vertical alignment, defaults to 'top'
            };
            sidebar.addPanel(panelContent);


            let htmlLegend3 = sid.control.htmllegend({
                position: 'bottomright',
                legends: [
                    {
                        name: 'Legende',
                        elements: [{
                            label: '<div id="pas_budget">Pas de budget</div>',
                            html: "<div style=' width: 20px;height: 20px;background:#6A0888  !important;'></div>"
                        },
                            {
                                label: "<div id='taux_execution_zero'>Taux d'exécution de 0 %</div>",
                                html: "<div style=' width: 20px;height: 20px;background: #DF0101 !important;'></div>"
                            },
                            {
                                label: "<div id='taux_execution25'>Taux d'exécution entre 1 et 25 %</div>",
                                html: "<div style=' width: 20px;height: 20px;background: #FF8000 !important;'></div>"
                            },
                            {
                                label: "<div id='taux_execution_50'>Taux d'exécution entre 26 et 50 %</div>",
                                html: "<div style=' width: 20px;height: 20px;background: #2ECCFA !important;'></div>"
                            },
                            {
                                label: "<div id='taux_execution_75'>Taux d'exécution entre 51 et 75 %</div>",
                                html: "<div style=' width: 20px;height: 20px;background: #0000f3 !important;'></div>"
                            }
                            ,
                            {
                                label: "<div id='taux_execution_99'>Taux d'exécution entre 76 et 99 %</div>",
                                html: "<div style=' width: 20px;height: 20px;background: #01DF01 !important;'></div>"
                            },
                            {
                                label: "<div id='taux_execution_100'>Taux d'exécution de 100%</div>",
                                html: "<div style=' width: 20px;height: 20px;background: #0B3B0B !important;'></div>"
                            }]
                    }],
                collapseSimple: false,
                detectStretched: false,
                visibleIcon: 'icon icon-eye',
                hiddenIcon: 'icon icon-eye-slash'
            })
            map.addControl(htmlLegend3)

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

    .card-box {
        position: relative;
        color: #fff;
        padding: 10px 10px 30px;
        margin: 10px 0px;
        height: 45px;
    }
    .card-box:hover {
        text-decoration: none;
        color: #f1f1f1;
    }

    .card-box .inner {
        padding: 5px 10px 0 10px;
    }
    .card-box h3 {
        font-size: 12px;
        font-weight: bold;
        margin: 0 0 8px 0;
        white-space: nowrap;
        padding: 0;
        text-align: left;
    }
    .card-box p {
        font-size: 14px;
    }
    .card-box .icon {
        position: absolute;
        top: auto;
        bottom: 5px;
        right: 5px;
        z-index: 0;
        font-size: 72px;
        color: rgba(0, 0, 0, 0.15);
    }
    .card-box .card-box-footer {
        position: absolute;
        left: 0px;
        bottom: 0px;
        text-align: center;
        padding: 3px 0;
        color: rgba(255, 255, 255, 0.8);
        background: rgba(0, 0, 0, 0.1);
        width: 100%;
        text-decoration: none;
    }
    .card-box:hover .card-box-footer {
        background: rgba(0, 0, 0, 0.3);
    }
    .bg-prevision{

        background-color: #3a373b !important;
    }
    .bg-blue {
        background-color: #00c0ef !important;
    }
    .bg-green {
        background-color: #00a65a !important;
    }
    .bg-base {
        background-color: #a62f59 !important;
    }
    .bg-taux { 
        background-color: #ba7024 !important;
    }
    .bg-restant {
        background-color: #154282 !important;
    }
    .red {
        color: black !important;
        background-color: #09f7ff !important;
    }

    .red_type_marche {
        color: black !important;
        background-color: #09f7ff !important;
    }
</style>
