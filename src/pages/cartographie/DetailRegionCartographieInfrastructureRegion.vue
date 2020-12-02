<template>
    <div>

        <div class="container-fluid" style="height: 200em">

            <div class="" style="margin-top: -20px">

                <h3 v-if="info_unite_admin">Situation {{info_unite_admin.libelle}} , Nombre de marchés <font color="red">({{getterFiltreCarteInfrastructure.length}})</font></h3>
                <h3 v-if="!info_unite_admin">Situation génerale ,Nombre de marchés <font color="red">({{getterFiltreCarteInfrastructure.length}})</font></h3>
                <nav aria-label="breadcrumb" class="main-breadcrumb">
                    <ol class="breadcrumb" >
                        <li class="breadcrumb-item"> <a @click.prevent="infrastucture" class="btn btn-default"
                                                        href="#">&#8606;</a> . </li>
                        <li class="breadcrumb-item"><h5>Région {{info_region.libelle}}&nbsp;&nbsp;&nbsp;&nbsp; .</h5></li>
                        <li class="breadcrumb-item" v-if="info_infrastructure"><h5> Infrastructure {{info_infrastructure.libelle}} &nbsp;&nbsp;&nbsp;&nbsp; .</h5></li>
                        <li class="breadcrumb-item" v-if="info_type_marche"><h5> Type de Marche {{info_type_marche.libelle}} &nbsp;&nbsp;&nbsp;&nbsp; .</h5></li>

                    </ol>
                </nav>
                <a @click.prevent="afficheTous()" href="">Afficher tous</a>
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
                <div class="row-fluid">
                    <div class="span8">
                        <div class="row-fluid">
                            <div class="span6">
                                <div class="card-box bg-prevision">
                                    <div class="inner">
                                        <h3> {{formatageSomme(parseFloat(montantPrevisionnel))}} </h3>
                                        <p>Montant previsionnel </p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-money" aria-hidden="true"></i>
                                    </div>

                                </div>
                            </div>

                            <div class="span6">
                                <div class="card-box bg-base">
                                    <div class="inner">
                                        <h3> {{formatageSomme(parseFloat(montantApprouveMarche))}} </h3>
                                        <p>Montant de base + avenant </p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-money" aria-hidden="true"></i>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="row-fluid">
                            <div class="span5">
                                <div class="card-box bg-green">
                                    <div class="inner">
                                        <h3> {{formatageSomme(parseFloat(montantExecute))}} </h3>
                                        <p> Montant execute </p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-money" aria-hidden="true"></i>
                                    </div>

                                </div>

                            </div>


                            <div class="span4">
                                <div class="card-box bg-restant">
                                    <div class="inner">
                                        <h3> {{formatageSomme(parseFloat(montantRestant))}} </h3>
                                        <p> Montant restant </p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-money" aria-hidden="true"></i>
                                    </div>

                                </div>
                            </div>
                            <div class="span3">
                                <div class="card-box bg-taux ">
                                    <div class="inner">
                                        <h3> {{tauxExecution}} % </h3>
                                        <p> Taux Execution</p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-money" aria-hidden="true"></i>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                    <div class="span4">
                        <apexchart type="bar" width="325" height="250" :options="chartOptions" :series="dataDiagrame"></apexchart>
                    </div>

                </div>





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
                    <div class="row-fluid">
                        <div class="span11"> <h5>Infrastucture</h5></div>
                    </div>
                    <div class="row-fluid">
                        <div class="span3" v-for="item in getterInfrastrucure" :key="item.id" style="border: 1px dotted #e1e1e8" :class="{ red : classementMontantBaseInfrastructure(item.id) }">
                            <h6>{{item.libelle}} (<font color="black">{{nombreMarchePasInfrastructure(item.id)}}</font>)</h6>
                            <table class="table" :class="{ red : classementMontantBaseInfrastructure(item.id) == item.id }">
                                <tbody>
                                <tr>
                                    <td>Montant previsionnel</td>
                                    <td>
                                        {{formatageSomme(montantPrevisionnelInfrastructure(item.id))}}

                                    </td>
                                </tr>
                                <tr>
                                    <td>Montant Base</td>
                                    <td> {{formatageSomme(montantBaseInfrastructure(item.id))}}</td>
                                </tr>
                                <tr>
                                    <td>Montant Executé</td>
                                    <td>{{formatageSomme(montantExecutePasInfrastructure(item.id))}}</td>
                                </tr>
                                <tr>
                                    <td>Montant Restant</td>
                                    <td>{{formatageSomme(montantRestantInfrastructure(item.id))}}</td>
                                </tr>
                                <tr>
                                    <td>Taux Exécuté Fin.</td>
                                    <td>{{tauxExecutionInfrastructure(item.id)}} %</td>
                                </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>

                    <hr>
                    <div class="row-fluid">
                        <div class="span12"><h5>Type de marché</h5></div>
                    </div>

                    <div class="row-fluid">
                        <div class="span3" v-for="item in typeMarches" :key="item.id" style="border: 1px dotted #e1e1e8" :class="{ red_type_marche : classementMontantTypeMarche(item.id) }">
                            <h6>{{item.libelle}} (<font color="black">{{nombreMarchePasTypeMarche(item.id)}}</font>)</h6>

                            <table class="table" :class="{ red_type_marche : classementMontantTypeMarche(item.id) == item.id }">
                                <tbody>
                                <tr>
                                    <td>Montant previsionnel</td>
                                    <td>
                                        {{formatageSomme(montantPrevisionnelTypeMarche(item.id))}}

                                    </td>
                                </tr>
                                <tr>
                                    <td>Montant Base</td>
                                    <td> {{formatageSomme(montantBaseTypeMarche(item.id))}}</td>
                                </tr>
                                <tr>
                                    <td>Montant Execute</td>
                                    <td>{{formatageSomme(montantExecutePasTypeMarche(item.id))}}</td>
                                </tr>
                                <tr>
                                    <td>Montant Restant</td>
                                    <td>{{formatageSomme(montantRestantTypeMarche(item.id))}}</td>
                                </tr>
                                <tr>
                                    <td>Taux</td>
                                    <td>{{tauxExecutionTypeMarche(item.id)}} %</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                    <hr>
                    <div class="row-fluid">

                        <div class="span12">

                            <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                <h5>Liste des marchés (<b v-if="getterFiltreCarteInfrastructure"> {{getterFiltreCarteInfrastructure.length}}</b>) <a href="#"></a> </h5>
                                <!--<div align="right">-->
                                <!--Recherche: <input type="text" v-model="search">-->
                                <!--</div>-->

                            </div>

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
                                        <th>Type Marché</th>
                                        <th>Montant Prévu</th>
                                        <th>Montant Base</th>
                                        <th>Montant Exécuté</th>
                                        <th>Taux Exécution Fin.</th>
                                        <th>Statut</th>
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
                                        <td>{{formatageSomme(montantExecutParMarche(item.id))}}</td>
                                        <td>{{tauxExecutionMarche(item.id)}} %</td>
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
         //   const sortDesc =
            return{
                status:"",
              info_region:"",
              info_type_marche:'',
              info_infrastructure:'',
              info_unite_admin:'',
                page:0,
                size:10,
                active_el:false,
                tableau_montant:[],
                sortDesc:(a, b) => b - a,
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

            //return  Infrastructure
             nombreMarchePasInfrastructure(){
                return id=>{
                    return this.getListeMarcheParRegion.filter(item=>item.infrastructure_id==id).length
                }
             },
            //return TypeMarche
            nombreMarchePasTypeMarche(){
                return id=>{
                    return this.getListeMarcheParRegion.filter(item=>item.type_marche_id==id).length
                }
            },
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

            /**
             * Cacule des montants en fonction des infrastructure
             * **/
            //Calcule de montant prevusionnel
            montantPrevisionnelInfrastructure(){
                return id=>{
                    let objet=this.getListeMarcheParRegion.filter(item=>item.infrastructure_id==id)
                    if(objet!=undefined){
                        let initeVal = 0;
                        let montant_prevue = objet.reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.montant_marche) ;
                        }, initeVal);
                        return montant_prevue
                    }
                    return 0;
                }
            },
            //Calcule de montant de base
            montantBaseInfrastructure(){
                return id=>{
                    if(this.getListeMarcheParRegion.length>0){
                        //acteEffetFinanciers
                        let vm=this;
                        let montantTotal=0;
                        this.getListeMarcheParRegion.filter(item=>item.infrastructure_id==id).forEach(function (val) {
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

                }
            },
            //Calculte de montant Excute

            montantExecutePasInfrastructure(){
                 return id=>{
                     if(this.getterFiltreCarteInfrastructure.length>0){
                         let montant_execute=0;
                         let vm=this;

                         this.getterFiltreCarteInfrastructure.filter(item=>item.infrastructure_id==id).forEach(function (val) {
                             let initeVal = 0;
                             let montant=vm.decomptefactures.filter(item=>item.marche_id==val.id).reduce(function (total, currentValue) {
                                 return total + parseFloat(currentValue.montantmarche) ;
                             }, initeVal);
                             montant_execute=parseFloat(montant_execute) + parseFloat(montant)
                         })



                         return montant_execute
                     }
                     return 0;
                 }
            },

            //Reste montant Infrastructure

            montantRestantInfrastructure(){
              return id=>{
                  return this.montantBaseInfrastructure(id) - this.montantExecutePasInfrastructure(id)
              }
            },

            //Calcule Taux Infrastrucre

            tauxExecutionInfrastructure(){
              return id=>{
                  if(this.montantExecutePasInfrastructure(id)){
                      let taux=(this.montantExecutePasInfrastructure(id) * 100)/ this.montantBaseInfrastructure(id)
                      if(taux==Infinity){
                          return 0
                      }
                      return taux.toFixed(2)
                  }
                  return 0
              }
            },

            classementMontantBaseInfrastructure(){
                return id=>{
                    let vm=this;
                 //   console.log(id)
                   let arrayMontant=[]
                    this.getterInfrastrucure.forEach(function (val) {
                        arrayMontant.push(vm.montantBaseInfrastructure(val.id))
                    })
                    arrayMontant.sort(vm.sortDesc)
                    if(arrayMontant[0] == 0){
                        return false
                    }
                    if(arrayMontant[0] ==vm.montantBaseInfrastructure(id)){
                        return true
                    }else{
                        return false
                    }


                }
            },
            /**
             * Fin des calcules selon infra*
             * */


            /**
             * Cacule des montants en fonction type
             * **/
            //Calcule de montant prevusionnel
            montantPrevisionnelTypeMarche(){
                return id=>{
                    let objet=this.getListeMarcheParRegion.filter(item=>item.type_marche_id==id)
                    if(objet!=undefined){
                        let initeVal = 0;
                        let montant_prevue = objet.reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.montant_marche) ;
                        }, initeVal);
                        return montant_prevue
                    }
                    return 0;
                }
            },
            //Calcule de montant de base
            montantBaseTypeMarche(){
                return id=>{
                    if(this.getListeMarcheParRegion.length>0){
                        //acteEffetFinanciers
                        let vm=this;
                        let montantTotal=0;
                        this.getListeMarcheParRegion.filter(item=>item.type_marche_id==id).forEach(function (val) {
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

                }
            },
            //Calculte de montant Excute

            montantExecutePasTypeMarche(){
                return id=>{
                    if(this.getterFiltreCarteInfrastructure.length>0){
                        let montant_execute=0;
                        let vm=this;

                        this.getterFiltreCarteInfrastructure.filter(item=>item.type_marche_id==id).forEach(function (val) {
                            let initeVal = 0;
                            let montant=vm.decomptefactures.filter(item=>item.marche_id==val.id).reduce(function (total, currentValue) {
                                return total + parseFloat(currentValue.montantmarche) ;
                            }, initeVal);
                            montant_execute=parseFloat(montant_execute) + parseFloat(montant)
                        })



                        return montant_execute
                    }
                    return 0;
                }
            },

            //Reste montant Infrastructure

            montantRestantTypeMarche(){
                return id=>{
                    return this.montantBaseTypeMarche(id) - this.montantExecutePasTypeMarche(id)
                }
            },

            //Calcule Taux Infrastrucre

            tauxExecutionTypeMarche(){
                return id=>{
                    if(this.montantExecutePasTypeMarche(id)){
                        let taux=(this.montantExecutePasTypeMarche(id) * 100)/ this.montantBaseTypeMarche(id)
                        if(taux==Infinity){
                            return 0
                        }
                        return taux.toFixed(2)
                    }
                    return 0
                }
            },

            classementMontantTypeMarche(){
                return id=>{
                    let vm=this;
                   // console.log(id)
                    let arrayMontant=[]
                    this.typeMarches.forEach(function (val) {
                        arrayMontant.push(vm.montantBaseTypeMarche(val.id))
                    })
                    arrayMontant.sort(vm.sortDesc)
                   // console.log(arrayMontant)
                    if(arrayMontant[0] == 0){
                        return false
                    }
                    if(arrayMontant[0] ==vm.montantBaseTypeMarche(id)){
                      //  console.log(true)
                        return true
                    }else{
                        return false
                    }


                }
            },
            /**
             * Fin des calcules selon type marche*
             * */

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

                if(this.montantExecute){

                    let taux=(this.montantExecute * 100)/ this.montantApprouveMarche
                    if(taux==Infinity){
                        return 0
                    }
                    return taux.toFixed(2)
                }
                return 0

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

            montantExecutParMarche(){
                return id=>{
                    let vm=this;
                    let initeVal = 0;
                    let montant=vm.decomptefactures.filter(item=>item.marche_id==id).reduce(function (total, currentValue) {
                        return total + parseFloat(currentValue.montantmarche) ;
                    }, initeVal);
                    if(montant!=undefined){
                        return montant
                    }
                    console.log("....decompte")
                    console.log(montant)
                        return 0
                }

            },
            tauxExecutionMarche(){
              return id=>{
               //   let reste=this.montantApprouve(id) - this.montantExecutParMarche(id)


                  if(this.montantApprouve(id)>0){
                      let taux=  (this.montantExecutParMarche(id) * 100)/this.montantApprouve(id)
                      return taux.toFixed(2)
                  }
                 return 0
              }
            },
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
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
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