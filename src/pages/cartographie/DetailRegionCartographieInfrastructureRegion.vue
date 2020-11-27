<template>
    <div>

        <div class="container-fluid" style="height: 150em">

            <div class="main-body">

                <!-- Breadcrumb -->
                <a @click.prevent="infrastucture" class="btn btn-default"
                   href="#">&#8606;</a>
                <h3 v-if="info_unite_admin">Situation {{info_unite_admin.libelle}} , Nombre de marchés <font color="red">({{getterFiltreCarteInfrastructure.length}})</font></h3>
                <h3 v-if="!info_unite_admin">Situation génerale ,Nombre de marchés <font color="red">({{getterFiltreCarteInfrastructure.length}})</font></h3>
                <nav aria-label="breadcrumb" class="main-breadcrumb">
                    <ol class="breadcrumb" >
                        <li class="breadcrumb-item"><h5>Région {{info_region.libelle}}&nbsp;&nbsp;&nbsp;&nbsp; .</h5></li>
                        <li class="breadcrumb-item" v-if="info_infrastructure"><h5> Infrastructure {{info_infrastructure.libelle}} &nbsp;&nbsp;&nbsp;&nbsp; .</h5></li>
                        <li class="breadcrumb-item" v-if="info_type_marche"><h5> Type de Marche {{info_type_marche.libelle}} &nbsp;&nbsp;&nbsp;&nbsp; .</h5></li>

                    </ol>
                </nav>

                <div class="span6">
                    <table class="table table-bordered table-striped">
                        <tr>
                            <td>Montant previsionnel</td>
                            <td>{{formatageSomme(parseFloat(montantPrevisionnel))}}</td>
                        </tr>
                        <tr>
                            <td>Montant de base</td>
                            <td>{{formatageSomme(parseFloat(montantApprouveMarche))}}</td>
                        </tr>
                        <tr>
                            <td>Montant execute</td>
                            <td>{{formatageSomme(parseFloat(montantExecute))}}</td>
                        </tr>
                        <tr>
                            <td>Montant restant</td>
                            <td>{{formatageSomme(parseFloat(montantRestant))}}</td>
                        </tr>
                        <tr>
                            <td>Taux execution</td>
                            <td>{{tauxExecution}} %</td>
                        </tr>
                    </table>

                </div>
                <div class="span5">
                    <apexchart type="bar" width="325" height="250" :options="chartOptions" :series="dataDiagrame"></apexchart>
                </div>

                <!---->
                <!--<table class="table table-bordered table-striped">-->
                    <!--<thead>-->
                    <!--<tr>-->
                        <!--<th><a href="#">Montant previsionnel</a>  </th>-->
                        <!--<th><a href="#">Montant Approuve</a> </th>-->
                        <!--<th><a  href="#">Montant execute</a> </th>-->
                        <!--<th><a href="#">Taux execution</a> </th>-->
                    <!--</tr>-->
                    <!--</thead>-->

                    <!--<tbody>-->
                    <!--<tr>-->
                        <!--<td> </td>-->
                        <!--<td > </td>-->
                        <!--<td>100</td>-->
                        <!--<td>444</td>-->
                    <!--</tr>-->
                    <!--</tbody>-->
                <!--</table>-->

                <div class="row gutters-sm">
                    <!--<div class="span11">-->
                        <!--<h6>Infrastructure</h6>-->
                        <!--<table class="table table-bordered table-striped">-->
                            <!--<thead>-->
                            <!--<tr>-->
                                <!--<th></th>-->
                                <!--<th>Montant previsionnel</th>-->
                            <!--<th>Montant previsionnel</th>-->
                            <!--<th>Montant Approuve</th>-->
                            <!--<th>Montant execute</th>-->
                            <!--<th>Taux execution</th>-->
                            <!--</tr>-->
                            <!--</thead>-->
                        <!--</table>-->

                    <!--</div>-->

                    <div class="span11">
                        <h6>Type service</h6>



                    </div>

                    <div class="row-fluid">

                        <div class="span11">

                            <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                <h5>Liste des marchés (<b v-if="getterFiltreCarteInfrastructure"> {{getterFiltreCarteInfrastructure.length}}</b>) <a @click.prevent="afficheTous()" href="">Afficher tous</a> </h5>
                                <!--<div align="right">-->
                                <!--Recherche: <input type="text" v-model="search">-->
                                <!--</div>-->

                            </div>
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th ><a @click.prevent="getStatusMarche('p')" href="#">Planifié</a>  </th>
                                    <th><a @click.prevent="getStatusMarche(1)" href="#">En contractualisation</a> </th>
                                    <th ><a @click.prevent="getStatusMarche(2)" href="#">En exécution</a> </th>
                                    <th ><a @click.prevent="getStatusMarche(5)" href="#">Terminé</a> </th>
                                    <th><a @click.prevent="getStatusMarche(3)" href="#">Résilie</a> </th>

                                    <th><a @click.prevent="getStatusMarche(7)" href="#">Suspendu</a> </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style="background: #ff0000;color: #fff">{{nombreMarcheFonctionStatu(0)}} </td>
                                    <td style="background: #04874e;color: #fff">{{nombreMarcheFonctionStatu(1)}}</td>
                                    <td style="background: #e8d20c;color: #fff">{{nombreMarcheFonctionStatu(2)}}</td>
                                    <td style="background: #ab0cd7;color: #fff">{{nombreMarcheFonctionStatu(5)}}</td>
                                    <td style="background: #0c66d7;color: #fff">{{nombreMarcheFonctionStatu(3)}}</td>
                                    <td style="background: #3a373b;color: #fff">{{nombreMarcheFonctionStatu(7)}}</td>
                                </tr>
                                </tbody>

                            </table>
                            Afficher
                            <select name="pets" id="pet-select" v-model="size" class="span3">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            Entrer
                            <div class="widget-content nopadding" v-if="getterFiltreCarteInfrastructure">
                                <table class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Objet </th>
                                        <th>Infrastructure</th>
                                        <th>Type Marche</th>
                                        <th>Montant Prevue</th>
                                        <th>Montant Base</th>
                                        <th>Montant Execute</th>
                                        <th>Taux</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="item in partition (getListeMarcheParRegion,size)[page]" :key="item.id">
                                        <td>{{item.objet}} </td>
                                        <td>{{nomInfrastructure(item.infrastructure_id)}}</td>
                                        <td> {{nomTypeMarche(item.type_marche_id)}}</td>
                                        <td>{{formatageSomme(parseFloat(item.montant_marche))}}</td>
                                        <td>{{formatageSomme(parseFloat(montantApprouve(item.id)))}}</td>
                                        <td>Montant Execute</td>
                                        <td>Taux</td>
                                        <td v-if="item.attribue==0" style="background: #ff0000;color: #fff">Planification</td>
                                        <td v-if="item.attribue==1" style="background: #04874e;color: #fff">Contratualisation</td>
                                        <td v-if="item.attribue==2" style="background: #e8d20c;color: #fff">Execution</td>
                                        <td v-if="item.attribue==3" style="background: #0c66d7;color: #fff">Résilie</td>
                                        <td v-if="item.attribue==5" style="background: #ab0cd7;color: #fff">Terminé</td>
                                        <td v-if="item.attribue==7" style="background: #3a373b;color: #fff">Suspendu</td>
                                        <td>Action</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="pagination alternate" v-if="getListeMarcheParRegion">
                                    <ul>
                                        <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                                        <li  v-for="(titre, index) in partition(getListeMarcheParRegion,size).length" :key="index" :class="{ active : active_el == index }">
                                            <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                                        <li :class="{ disabled : page == partition(getListeMarcheParRegion,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import {partition,formatageSomme} from '../../Repositories/Repository'
    import VueApexCharts from 'vue-apexcharts'
   // import { formatageSomme } from "../../../src/Repositories/Repository";
    export default {
        components: {
            apexchart: VueApexCharts,

        },
        data(){

            return{
                status:"",
              info_region:"",
              info_type_marche:'',
              info_infrastructure:'',
              info_unite_admin:'',
                page:0,
                size:10,
                active_el:0,


                series: [],

                chartOptions: {
                    chart: {
                        type: 'bar',
                        height: 350,
                        stacked: true,
                        stackType: '100%'
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom',
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }],
                    xaxis: {
                        categories: ['Situation Actuelle'],
                    },
                    fill: {
                        opacity: 1
                    },
                    legend: {
                        position: 'right',
                        offsetX: 0,
                        offsetY: 50
                    },
                },

            }
        },
        props:["macheid"],
        created(){
//            this.detailMarche=this.getterImageMarche.find(item=>item.id==this.$route.params.id)
        //   console.log(this.getterFiltreCarteInfrastructure)
//            console.log(this.getterInformationCarteInfrastructure)
            if(this.getterInformationCarteInfrastructure){
                if(this.getterInformationCarteInfrastructure.infrastructure!=""){
                    this.info_infrastructure=this.getterInfrastrucure.find(item=>item.id==this.getterInformationCarteInfrastructure.infrastructure)
             }

                if(this.getterInformationCarteInfrastructure.type_marche!=""){
                    this.info_type_marche=this.typeMarches.find(item=>item.id==this.getterInformationCarteInfrastructure.type_marche)

                }
                if(this.getterInformationCarteInfrastructure.unite_administrative!=""){
                    this.info_unite_admin=this.uniteAdministratives.find(item=>item.id==this.getterInformationCarteInfrastructure.unite_administrative)
                }
                if(this.getterInformationCarteInfrastructure.region!=""){
                    this.info_region=this.localisations_geographiques.find(item=>item.id==this.getterInformationCarteInfrastructure.region)

                }
            }
        },

        computed: {
            ...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques',
                'localisations_geographiques',"getterLocalisationGeoAll","getterInfrastrucure"]),
            ...mapGetters("bienService", ["getActeEffetFinancierPersonnaliser45","typeMarches","getterImageMarche",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements"
                ,"getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers","getterFiltreCarteInfrastructure","getterInformationCarteInfrastructure"]),

            ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),




            ...mapGetters("uniteadministrative", [
                "jointureUaChapitreSection",
                "uniteAdministratives",
                "budgetGeneral",
                "getPersonnaliseBudgetGeneral",
                "groupUa",
                "getPersonnaliseBudgetGeneralParBienService",
                "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation","decomptefactures"
                // "montantBudgetGeneral"
                // "chapitres",
                // "sections"

            ]),
            ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
                'plans_Decision']),

            //return name type Infra

            getListeMarcheParRegion(){
                if(this.status!=""){
                    if(this.status=="p"){
                        return this.getterFiltreCarteInfrastructure.filter(item=>item.attribue==0)
                    }
                    return this.getterFiltreCarteInfrastructure.filter(item=>item.attribue==this.status)

                }else{
                    return this.getterFiltreCarteInfrastructure
                }
            },
            nomInfrastructure(){
                return id=>{
                    let objet=this.getterInfrastrucure.find(item=>item.id==id)
                    if(objet!=undefined){
                        return objet.libelle
                    }
                    return null
                }
            },

            nomTypeMarche(){
                return id=>{
                    let objet=this.typeMarches.find(item=>item.id==id)
                    if(objet!=undefined){
                        return objet.libelle
                    }
                    return null
                }
            },
            montantApprouve(){
                return id=>{
                    let objet=this.getActeEffetFinancierPersonnaliser45.find(item=>item.marche_id==id)
                    if(objet!=undefined){
                        return objet.montant_act
                    }
                    return 0
                }
            },
            nombreMarcheFonctionStatu(){
                return status=>{
                    if(this.getterFiltreCarteInfrastructure){
                        return this.getterFiltreCarteInfrastructure.filter(item=>item.attribue==status).length
                    }
                }
            },

            montantPrevisionnel(){
                if(this.getterFiltreCarteInfrastructure.length>0){
                    let initeVal = 0;
                    let montant_prevue =  this.getListeMarcheParRegion.reduce(function (total, currentValue) {
                        return total + parseFloat(currentValue.montant_marche) ;
                    }, initeVal);
                    return montant_prevue
                }
               return 0;
            },
            montantExecute(){
                if(this.getterFiltreCarteInfrastructure.length>0){
                    let montant_execute=0;
                    let vm=this;

                    this.getterFiltreCarteInfrastructure.forEach(function (val) {
                        let initeVal = 0;
                        let montant=vm.decomptefactures.filter(item=>item.marche_id==val.id).reduce(function (total, currentValue) {
                       return total + parseFloat(currentValue.montantmarche) ;
                       }, initeVal);
                        montant_execute=parseFloat(montant_execute) + parseFloat(montant)
                    })



             return montant_execute
                }
                return 0;
            },
            montantApprouveMarche(){
         if(this.getListeMarcheParRegion.length>0){
             //acteEffetFinanciers
             let vm=this;
             let montantTotal=0;
             this.getListeMarcheParRegion.forEach(function (val) {
                 let objetAct=vm.getActeEffetFinancierPersonnaliser45.find(item=>item.marche_id==val.id)
                 let montant_avenant=0;
                 let objetAvenant=vm.avenants.filter(item=>item.marche_id==val.id)
                 if(objetAvenant!=undefined){
                     let initeVal = 0;
                     montant_avenant=objetAvenant.reduce(function (total, currentValue) {
                         return total + parseFloat(currentValue.montant_avenant) ;
                     }, initeVal);
                 }
                 if(objetAct!=undefined){
                   //  console.log(objetAct)
                     montantTotal=parseFloat(montantTotal)+ parseFloat(objetAct.montant_act)+parseFloat(montant_avenant)
                 }
             })
             return montantTotal
          }
        return 0;
            },
            montantRestant(){
                return this.montantApprouveMarche - this.montantExecute;
            },
            tauxExecution(){
              let taux=(this.montantExecute * 100)/ this.montantApprouveMarche
                if(taux==0){
                  console.log(taux)
                  return 0
                }
                return taux.toFixed(2)
            },
            dataDiagrame(){
                let array=[]

              let tauxReste=(this.montantRestant * 100)/this.montantApprouveMarche
              let objetEx={
                  name: 'Montant Execute',
                  data: [this.tauxExecution]
              }
                let objetApprouve={
                    name: 'Montant Restant',
                    data: [tauxReste.toFixed(2)]
                }
                array.push(objetApprouve)
                array.push(objetEx)
                return array
            },
            /**
             * Integration de filtre pour statu
             */
//            filtreStatusMarche(){
//                return id=>{
//                    if(id!=""){
//
//                    }
//                }
//            }


        },

        methods:{
            // pagination
            partition:partition,
            getDataPaginate(index){
                this.active_el = index;
                this.page=index
            },
            precedent(){
                this.active_el--
                this.page --
            },
            suivant(){
                this.active_el++
                this.page ++
            },
            formatageSomme:formatageSomme,
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

            infrastucture(){
                this.$router.push({
                    name: 'CarteInfrastructureCIPasRegions'
                })
            },
            getStatusMarche(id){
                this.status=id;
            },
            afficheTous(){
                this.status=""
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