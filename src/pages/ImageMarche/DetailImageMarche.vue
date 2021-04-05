<template>
    <div>

       <div class="container-fluid">





    <div class="main-body">
       <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListeExecution">Page Précédente</button>
    
        </div>
        <br/>

          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb" v-if="detailMarche">
              <li class="breadcrumb-item" v-if="getMarche(detailMarche.marche_id)">{{getMarche(detailMarche.marche_id).objet}}</li>

            </ol>
          </nav>
          <!-- /Breadcrumb -->

          <div class="row gutters-sm" v-if="detailMarche">
            <div class="span4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <a href="#image1">
                    <img class="center_image" :src="AffichePhoto(detailMarche.fichier)">
                    </a>
                    <div class="mt-3">
                       <h4>{{detailMarche.libelle}}</h4>
                        </div>
                  </div>
                  <div class="mt-3">
                      <h4>Nom de l'Agent : DCF</h4>
                      Date:  {{conversionDateVariable(detailMarche.date_enregistrement)}}
                      <p class="text-secondary mb-1" v-if="detailMarche.latitude">Distance :

                        {{distance(detailMarche.latitude, detailMarche.longitude, getMarche(detailMarche.marche_id).latitude, getMarche(detailMarche.marche_id).longitude, 'K')}}
                      </p>
                      <p class="text-muted font-size-sm">{{detailMarche.observation}}</p>

                    </div>
                </div>
              </div>

            </div>
            <div class="span7">
              <div class="card mb-3">
                <div class="card-body">
                <div class="" style="height: 500px; width: 100%; border: 2px dotted #eee">

  <l-map ref="map" :zoom=7.4 :center="initialLocation" >

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


                  <l-circle-marker
                                   :lat-lng="[detailMarche.latitude,detailMarche.longitude]"

                                   :radius="15"
                                   :color="'#3A01DF'"
                                   :fillColor="'#3A01DF'"
                                   :fillOpacity="4"

                  >
                    <l-popup>
                      <b>{{detailMarche.libelle}}</b> <br>

                    </l-popup>

                  </l-circle-marker>

                  <l-circle-marker
                                   :lat-lng="[getMarche(detailMarche.marche_id).latitude,getMarche(detailMarche.marche_id).longitude]"

                                   :radius="15"
                                   :color="'#DF0101'"
                                   :fillColor="'#DF0101'"
                                   :fillOpacity="4"

                  >
                    <l-popup>
                      <b>{{getMarche(detailMarche.marche_id).objet}}</b> <br>

                    </l-popup>

                  </l-circle-marker>


                <v-geosearch  ></v-geosearch>
              </l-map>



                </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>

    <a href="#" class="JesterBox">
  <div id="image1"><img :src="AffichePhoto(detailMarche.fichier)"></div>

    </a>
        </div>


</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { latLng, Icon, icon } from 'leaflet'
import VGeosearch from 'vue2-leaflet-geosearch';

import { LMap, LTileLayer, LIconDefault,LControlLayers,LPopup,LCircleMarker} from "vue2-leaflet";
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import LControlFullscreen from 'vue2-leaflet-fullscreen';
export default {
   components: {
    LControlFullscreen,

    LMap,
    LTileLayer,

    LPopup,

    LIconDefault,
    LControlLayers,
    LCircleMarker,
      VGeosearch,


  },
    data(){
        let customicon = icon(Object.assign({},
        Icon.Default.prototype.options,
        {iconUrl, shadowUrl}
    ))
        return{
           icon: customicon,
           fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],

       editLiquidation: {},
search:"",
detailMarche:"",



 url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                 withPopup: latLng(7.361517, -5.459421),
                  withTooltip: latLng(7.361517, -5.459421),
                 currentZoom: 11.5,
                currentCenter: latLng(7.361517,-5.459421),
                showParagraph: false,
                mapOptions: {
                    zoomSnap: 0.5
                },
                 initialLocation: [7.361517, -5.459421],
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
        }
    },
    props:["macheid"],
    created(){
this.detailMarche=this.getterImageMarche.find(item=>item.id==this.$route.params.id)
    },

              computed: {
            ...mapGetters("bienService", ["getterImageMarche",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),




  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"

    ]),
     ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),
                  conversionDateVariable(){
                      return date=>{
                          let da=new Date(date)
                          let  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                          return da.toLocaleDateString("fr-FR", options)
                      }

                  },

AffichePhoto() {
      return fichier => {
        if (fichier != null && fichier != "") {


   let url=process.env.VUE_APP_BIEN_SERVICE_URL
        return url+'/imagemarches/'+fichier;

     // return "Pas d'image "
        }
      };
    },
  afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

},
getMarche(){
return marche_id=>{
  if(marche_id!=""){
    return this.marches.find(item=>item.id==marche_id)
  }
}
},

getterImageParMarche() {
      return id => {
        if (id != null && id != "") {
          return this.getterImageMarche.filter(
            element => element.marche_id == id
          );
        }
      };
    },
      },

      methods:{

          ...mapActions('bienService',[  "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",]),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
      "modifierLiquidation",
                "supprimerLiquidation"
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"


    ]),

    afficherModalListeExecution(){
                window.history.back();
            },


     distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            let radlat1 = Math.PI * lat1/180;
            let radlat2 = Math.PI * lat2/180;
            let theta = lon1-lon2;
            let radtheta = Math.PI * theta/180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }

            if (parseFloat(dist.toFixed(2))>=1){
                return dist.toFixed(2) +" Km";
            }else{
              let metre=  dist * 1000;
              return metre.toFixed(2) +" Mètre";
            }

        }
    }

      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 50%;
  margin: 0 -25%;
}
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
.avatar1 {

  width: 50%;
  height: 50%;

}




.center_image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 250px;
}


body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}


.JesterBox div {
  visibility: hidden;
  position: fixed;
  top: 5%;
  right: 5%;
  bottom: 5%;
  left: 5%;
  z-index: 75;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.JesterBox div:before {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 74;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.5s ease-out;
}

.JesterBox div img {
  position: relative;
  z-index: 77;
  max-width: 100%;
  max-height: 100%;
  margin-left: -9999px;
  opacity: 0;
  transition-property: all, opacity;
  transition-duration: 0.5s, 0.2s;
  transition-timing-function: ease-in-out, ease-out;
}

.JesterBox div:target { visibility: visible; }

.JesterBox div:target:before { background-color: rgba(0, 0, 0, 0.7); }

.JesterBox div:target img {
  margin-left: 0px;
  opacity: 1;
}
</style>
