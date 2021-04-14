<template>
    <div>

        <div class="container-fluid" style="height: 100em;">

            <div>
                <button @click="DossierImage" class="btn btn-warning">Dossier Image</button>
                <br>
                <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">

                    <div class="span10" style="background: #f0c71d !important;">
                        <table class="table table-striped"  style="background: #f0c71d !important;">
                            <tbody>
                            <tr>
                                <td style="background: #f0c71d !important;">
                                    <label>UA<a href="#" @click.prevent="videUniteAdmin()" v-if="unite_administrative_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                    </label>
                                    <model-list-select style="background-color: #fff;"
                                                       class="wide"
                                                       :list="filtre_unite_admin"
                                                       v-model="unite_administrative_id"
                                                       option-value="id"
                                                       option-text="libelle"
                                                       placeholder="Unité administrative"
                                    >

                                    </model-list-select>
                                </td>
                                <td style="background: #f0c71d !important;">
                                    <label>Regions <a href="#" @click.prevent="videRegions()" v-if="region" style="color: red"><i class="fa fa-trash-o"></i></a>
                                    </label>
                                    <model-list-select style="background-color: #fff;"
                                                       class="wide"
                                                       :list="regions"
                                                       v-model="region"
                                                       option-value="id"
                                                       option-text="libelle"
                                                       placeholder="Regions"
                                    >

                                    </model-list-select>
                                </td>
                                <td style="background: #f0c71d !important;">
                                    <label>Infrastructure <a href="#" @click.prevent="videInfrastructure()" v-if="infrastructure" style="color: red"><i class="fa fa-trash-o"></i></a>
                                    </label>
                                    <model-list-select style="background-color: #fff;"
                                                       class="wide"
                                                       :list="getterInfrastrucure"
                                                       v-model="infrastructure"
                                                       option-value="id"
                                                       option-text="libelle"
                                                       placeholder="Infrastructure"
                                    >

                                    </model-list-select>
                                </td>
                                <td style="background: #f0c71d !important;">
                                    <label>Type Marché  <a href="#" @click.prevent="videTypeMarche()" v-if="type_marche" style="color: red"><i class="fa fa-trash-o"></i></a>
                                    </label>
                                    <model-list-select style="background-color: #fff;"
                                                       class="wide"
                                                       :list="typeMarches"
                                                       v-model="type_marche"
                                                       option-value="id"
                                                       option-text="libelle"
                                                       placeholder="Type Marche"
                                    >

                                    </model-list-select>
                                </td>

                            </tr>

                            </tbody>
                        </table>

                    </div>


                </div>

                <hr v-if="affiche_filtre">



                <nav aria-label="breadcrumb" class="main-breadcrumb" style="background: #ff6c1d">
                    <ol class="breadcrumb" style="background: #806000 !important">
                        <li class="breadcrumb-item" style="color: #fff !important;" > INFORMATIONS GENERALES - MARCHES/CONTRATS&nbsp;&nbsp;&nbsp;&nbsp; / </li>
                        <li class="breadcrumb-item" style="color: #fff !important;" v-if="unite_administrative_id"> Situation {{nomUniteAdmin(unite_administrative_id)}} des marchés &nbsp;&nbsp;&nbsp;&nbsp; /</li>
                        <li class="breadcrumb-item"  style="color: #fff !important;" v-if="region"> Région {{nomRegions(region)}} &nbsp;&nbsp;&nbsp;&nbsp; /</li>
                        <li class="breadcrumb-item"  style="color: #fff !important;" v-if="infrastructure"> Infrastructutre {{nomInfrastructure(infrastructure)}} &nbsp;&nbsp;&nbsp;&nbsp; /</li>

                        <li class="breadcrumb-item"  style="color: #fff !important;" v-if="type_marche"> Type Marche {{nomTypeMarche(type_marche)}} &nbsp;&nbsp;&nbsp;&nbsp; /</li>
                        <li class="breadcrumb-item"  style="color: #fff !important;" v-if="info_status_marche" v-html="info_status_marche">  </li>
                        <!--<li class="breadcrumb-item"> <button class="btn btn-info" @click="print"><i class="icon-print"></i></button></li>-->
                    </ol>
                </nav>

                <div class="vld-parent">
                <div class="row-fluid" style="" id="printMe">

                    <div class="span12">
                        <div class="widget-box">
                            <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                <h5>IMAGES MARCHES</h5>
                                <div align="right">
                                    Recherche: <input type="text" v-model="search">

                                </div>

                            </div>
                        </div>


                        <table class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>Année</th>
                                <th>UA</th>
                                <th>Numero Marche</th>
                                <th>Objet du marché</th>
                                <th>Type de marché</th>
                                <th>Infrastructure</th>
                                <th>Regions</th>
                                <!--                                <th>Statut</th>-->
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in listeMarchStatueExecuteAcheve" :key="'MARCHE012'+item.id">
                                <td>{{item.exo_id}}</td>
                                <td>{{nomUniteAdmin(item.unite_administrative_id)}}</td>
                                <td>{{item.numero_marche}}</td>
                                <td>{{item.objet}}</td>
                                <td>{{item.type_marche.libelle}}</td>
                                <td>{{selectionnerInfrastructure(item.infrastructure_id)}}</td>
                                <td>{{selectionLocationGeographique(item.localisation_geographie_id)}}</td>
                                <!--                                <td></td>-->
                                <td>
                                    <router-link :to="{ name: 'ListeImageMarche', params: { id: item.id }}"
                                                 class="btn btn-primary" title="Liste des images">
                                        voir image({{nombreImageParMarche(item.id)}})
                                    </router-link>
                                </td>
                            </tr>
                            </tbody>

                        </table>

                    </div>


                </div>
                <!--------------------FIN TABLEAU BORD FIN ETAT MARCHE--------------->

                </div>


            </div>
        </div>



        <fab v-if="affiche_boutton_filtre"
             :position="position"
             :bg-color="bgColor"
             :actions="fabActions"
             main-icon="format_indent_decrease"
             @cache="filter"

        ></fab>
        <fab v-if="!affiche_boutton_filtre"
             :position="position"
             :bg-color="bgColor"
             :actions="fabActions"
             main-icon="ballot"
             @cache="filter"

        ></fab>



    </div>
</template>

<script>
    import {partition} from "../../Repositories/Repository"
    // Import component
 //   import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
   // import VueApexCharts from 'vue-apexcharts'
    import { mapGetters,mapActions } from "vuex";
    import {noDCfNoAdmin,dcf} from "../../Repositories/Auth"
    import {formatageSomme} from '../../Repositories/Repository'
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
    // import DraggableDiv from '../../components/DraggableDiv/DraggableDiv'
    export default {
        name: "Images",
        components: {
        //   Loading,
            ModelListSelect,
        },
        data() {
            return{
                isLoading: false,
                fullPage: false,
                search:"",
                controlleur_fin:"",
                status_marches:"",
                unite_administrative_id:"",
                infrastructure:"",
                type_marche:"",
                region:"",
                info_status_marche:"",
                tableMarcheStatue:"",
                listeDesMarchePasStatus:'',
                affiche_filtre:false,
                affiche_boutton_filtre:true,
                status_marche:"",
                bgColor: '#171b39',
                position: 'bottom-right',
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'cached'
                    }
                ],
                page:0,
                size:10,
                active_el:0,
            }



        },
        created(){
            // console.log(this.listeMarchStatueExecuteAcheve)
        },
        computed: {
            ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "decomptefactures"
            ]),
            ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques',
                'localisations_geographiques',"getterLocalisationGeoAll","getterInfrastrucure","exercices_budgetaires","sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures"]),

            ...mapGetters("bienService", ['marches',"engagements","getMandatPersonnaliserVise",
                "getterImageMarche","acteEffetFinanciers","getActeEffetFinancierPersonnaliser45","typeMarches","avenants","getterImageMarche"]),
            ...mapGetters("Utilisateurs", ["getterUtilisateur","getterRoles"]),
            listeCF(){
                return this.getterUtilisateur.filter(item=>{
                    if(item.user_role){
                        if (item.user_role.role.code_role=="DCF" || item.user_role.role.code_role=="CF"){
                            return item
                        }
                    }
                })
            },
            noDCfNoAdmin:noDCfNoAdmin,
            dcf:dcf,
            regions(){
                // console.log(this.localisations_geographiques.filter(item=>item.structure_localisation_geographique.niveau==2))
                return this.localisations_geographiques.filter(item=>{
                    if(item.longitude!=null && item.structure_localisation_geographique.niveau==2 ){
                        return item
                    }
                });
            },
            nombreImageParMarche(){
              return id=>{
                  let objet=this.getterImageMarche.filter(item=>item.marche_id==id)
                  return objet.length
              }
            },
            selectionnerUniteAdministrative(){
               return id=>{
                   let objet=this.uniteAdministratives.find(item=>item.id=id)
                   return objet.libelle
               }
            },

            selectionnerInfrastructure(){
              return id=>{
                 // console.log(id)
                  let objet=this.getterInfrastrucure.find(item=>item.id==id)
                //  console.log(objet)
                  if(objet==undefined)
                      return null
                  return objet.libelle
              }
            },
            selectionLocationGeographique(){
                return id=>{
                    let objet=this.localisations_geographiques.find(item=>item.id==id)
                    if(objet==undefined)
                        return null
                    return objet.libelle
                }
            },
            filtre_unite_admin() {
                if(this.noDCfNoAdmin){
                    let colect=[];
                    let vM=this
                    this.uniteAdministratives.filter(item=>{
                        if(vM.getterUniteAdministrativeByUser.length>0){
                            let val= vM.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                            if (val!=undefined){
                                colect.push(item)
                                return item
                            }
                        }

                    })
                    return colect
                }
                return this.uniteAdministratives
            },
            listeMarcheUniteAdmin(){
                let colect=[]
                let vM=this;
                this.filtre_unite_admin.forEach(function (value) {
                    let objet=vM.marches.filter(item=>{
                            if(item.parent_id!=null && item.unite_administrative_id==value.id && item.sib==1 ){
                                //  console.log(item.parent_id)
                                return item
                            }
                        }
                    )
                    if(objet!=undefined){
                        objet.forEach(function (val) {
                           let objet=   colect.find(item=>item.id==val.id)
                            if(objet==undefined){
                                colect.push(val)
                            }

                        })
                    }


                })
                return colect
            },

            anneeAmort() {

                const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

                if (norme) {
                    let vM=this;
                    vM.exercice_budget=norme.annee;
                    return norme.annee;
                }
                return 0
            },

            objetMarchePasUniteOuRegion(){

                let vM=this;
                let objet=this.listeMarcheUniteAdmin.filter(item=>item.parent_id!="")

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

                return objet
            },



            nombreTotalMarche(){
                return this.objetMarchePasUniteOuRegion.length
            },
            objetListeMarcheInfoUnite(){
                return this.listeMarcheUniteAdmin.filter(item=>item.parent_id!="")
            },
            listeUniteAdministrative(){
                let vm=this
                let collect=[]
                if(vm.tableMarcheStatue.length>0){
                    vm.tableMarcheStatue.forEach(function (val) {
                        let objet=vm.uniteAdministratives.find(item=>item.id==val)
                        collect.push(objet)
                    })
                    console.log(collect)
                    return collect
                }

                return collect
            },
            nbrTotalMarchePasUA(){
                return unite=>{
                    let vm=this
                    return vm.listeDesMarchePasStatus.filter(item=>item.unite_administrative_id==unite).length
                }
            },





            nomUniteAdmin(){
                return id=>{
                    if(id!=""){
                        let objet=this.uniteAdministratives.find(item=>item.id==id)
                        return objet.libelle
                    }
                    return ""
                }
            },
            nomTypeMarche(){
                return id=>{
                    if(id!=""){
                        let objet=this.typeMarches.find(item=>item.id==id)
                        return objet.libelle
                    }
                    return ""
                }
            },
            nomInfrastructure(){
                return id=>{
                    if(id!=""){
                        let objet=this.getterInfrastrucure.find(item=>item.id==id)
                        return objet.libelle
                    }
                    return ""
                }
            },
            nomRegions(){
                return id=>{
                    if(id!=""){
                        let objet=this.localisations_geographiques.find(item=>item.id==id)
                        return objet.libelle
                    }
                    return ""
                }
            },






            listeMarchStatueExecuteAcheve(){
                let objet=this.listeMarcheUniteAdmin.filter(item=>item.parent_id!="")

                return objet.filter(item=>item.attribue==2)
            },


        }
        ,
        methods:{
            ...mapActions("bienService", ["ajouterTableauBordFiltre","ajouterInfoTableauBordFiltre"]),
            selectionUnite(id){

                let stat="pl"
                if(this.status_marches=="planifie"){
                    this.status_marches=0
                    stat="planifier"
                }
                let objet={
                    status_marche:this.status_marches,
                    infrastructure:this.infrastructure,
                    unite_administrative:id,
                    type_marche:this.type_marche,
                    region:this.region,
                    stat:stat
                }
                // console.log(this.objetMarchePasUniteOuRegion)

                let objetMarche=this.objetMarchePasUniteOuRegion.filter(item=>{
                    if(item.unite_administrative_id==id && item.attribue==this.status_marches){
                        return item
                    }

                })
                this.ajouterTableauBordFiltre(objetMarche)
                this.ajouterInfoTableauBordFiltre(objet)

                this.$router.push({
                    name: 'DetailInforTableBordUniteAd',
                    params: { id: id }
                })
            },
            videUniteAdmin(){
                this.unite_administrative_id=""
            },
            videRegions(){
                this.region=""

            },
            videInfrastructure(){
                this.infrastructure=""
            },
            videTypeMarche(){
                this.type_marche=""
            },
            videTypeCF(){
                this.controlleur_fin=""
            },
            filter(){
                this.affiche_filtre=!this.affiche_filtre
                this.affiche_boutton_filtre=!this.affiche_boutton_filtre
                this.videUniteAdmin()
                this.videRegions()
                this.videInfrastructure()
                this.videTypeMarche()
            },
            formatageSomme:formatageSomme,
            listeMarcheStatus(status){



                if(status=="planifie"){
                    status=0
                }
                this.tableMarcheStatue=""

                this.info_status_marche=this.infoEtatMarche(status)
                let vM=this;
                let objet=this.objetListeMarcheInfoUnite.filter(item=>{
                    if(item.parent_id!="" && item.attribue==status){
                        return item
                    }
                })

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
                this.status_marches=status;
                this.listeDesMarchePasStatus=objet
                let distinct=[...new Set(objet.map(item=>item.unite_administrative_id))]
                this.tableMarcheStatue=distinct


            },
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            print () {
                // Pass the element id here
                this.$htmlToPaper('printMe');
            },
            click_cartographie(){

                let stat="pl"

                if(this.info_status_marche!=""){
                    if(this.status_marches=="planifie"){

                        this.status_marches=0
                        stat="planifier"
                    }

                    if(this.status_marches==0){

                        this.status_marches="planifier"
                        stat="planifier"
                    }
                }else{
                    this.status_marches=""
                }



                let objet={
                    status_marche:this.status_marches,
                    infrastructure:this.infrastructure,
                    unite_administrative:this.unite_administrative_id,
                    type_marche:this.type_marche,
                    region:this.region,
                    statut:stat
                }

                console.log(objet)

                this.ajouterInfoTableauBordFiltre(objet)

                this.$router.push({
                    name: 'TableauBordCartographie'
                })
            },
            generateReport () {
                this.$refs.html2Pdf.generatePdf()
            },
            partition:partition,
            onCancel() {
                console.log('User cancelled the loader.')
            },
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
            DossierImage(){
                this.$router.push('/dossier-image-ministere')
            },
        },
        watch: {
            type_marche:function (value) {
                console.log(value);
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                },1000)

                if(this.info_status_marche!=""){
                    this.listeMarcheStatus(this.status_marches)
                }


            },

            infrastructure: function (value) {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                },1000)
                console.log(value);
                if(this.info_status_marche!=""){
                    this.listeMarcheStatus(this.status_marches)
                }
            },
            region: function (value) {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                },1000)
                console.log(value);
                if(this.info_status_marche!=""){
                    this.listeMarcheStatus(this.status_marches)
                }
            },
            unite_administrative_id: function (value) {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                },1000)
                console.log(value);
                if(this.info_status_marche!=""){
                    this.listeMarcheStatus(this.status_marches)
                }
            },



        },
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
        height: 55px !important;
        font-size: 13px !important;
    }
    .card-box:hover {
        text-decoration: none;
        color: #f1f1f1;
    }

    .card-box .inner {
        padding: 5px 10px 0 10px;
        font-size: 5em !important;
    }
    .card-box h3 {
        font-size: 12px;
        font-weight: bold;
        margin: 0 0 8px 0;
        white-space: nowrap;

        text-align: left;
    }
    .card-box p {
        font-size: 14px;
    }
    .card-box .icon {
        position: absolute;
        top: auto;
        bottom: 3px;
        right: 3px;
        z-index: 0;
        font-size: 50px;
        color: rgba(0, 0, 0, 0.15);
    }
    .card-box .icon3 {
        position: absolute;
        top: auto;
        bottom: 35px;
        right: 3px;
        z-index: 0;
        font-size: 13px;
        color: #f2f2f2;
    }

    .card-box .icon2 {
        position: absolute;
        top: auto;
        bottom: 5px;
        right: 3px;
        z-index: 0;
        font-size: 10px;
        color: #f2f2f2;
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
    .bg-orange {
        background-color: #f39c12 !important;
    }
    .bg-red {
        background-color: #d9534f !important;
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


    .bg-attente-contratualisation-hors-alert {

        background-color: #8ea9db !important;
    }
    .bg-attente-contratualisation-avec-alert {
        background-color: #f4b084 !important;
    }
    .bg-en-contratualisation {
        background-color: #92d050 !important;
    }

    .bg-en-contratualisation-hort-delais {
        background-color: #652b92 !important;
    }
    .bg-en-execution {
        background-color: #d7b755 !important;
    }

    .bg-en-execution-horts-delais {
        background-color: #d36f2b !important;
    }

    .bg-acheve-hors-delais {
        background-color: #00b04f !important;
    }

    .bg-en-souffrance {
        background-color: red !important;
    }
    .bg-en-avenant{
        background-color: #ff6c1d !important;
    }
    .bg-acheve-delais {
        background-color: #757171 !important;
    }
    .bg-horts-ppm{
        background-color: #ffb62f !important;
    }

    .red {
        color: #fff !important;
        background-color: #892e6a !important;
    }

    .red_type_marche {
        color: #fff !important;
        background-color: #892e6a !important;
    }










    .card {
        background-color: #fff;
        border-radius: 10px;
        border: none;
        position: relative;
        margin-bottom: 30px;
        box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,0.1), 0 0.9375rem 1.40625rem rgba(90,97,105,0.1), 0 0.25rem 0.53125rem rgba(90,97,105,0.12), 0 0.125rem 0.1875rem rgba(90,97,105,0.1);
    }
    .l-bg-cherry {
        background: linear-gradient(to right, #493240, #f09) !important;
        color: #fff;
    }

    .l-bg-blue-dark {
        background: linear-gradient(to right, #373b44, #4286f4) !important;
        color: #fff;
    }

    .l-bg-green-dark {
        background: linear-gradient(to right, #0a504a, #38ef7d) !important;
        color: #fff;
    }

    .l-bg-orange-dark {
        background: linear-gradient(to right, #a86008, #ffba56) !important;
        color: #fff;
    }

    .card .card-statistic-3 .card-icon-large .fas, .card .card-statistic-3 .card-icon-large .far, .card .card-statistic-3 .card-icon-large .fab, .card .card-statistic-3 .card-icon-large .fal {
        font-size: 110px;
    }

    .card .card-statistic-3 .card-icon {
        text-align: center;
        line-height: 50px;
        margin-left: 15px;
        color: #000;
        position: absolute;
        right: -5px;
        top: 20px;
        opacity: 0.1;
    }

    .l-bg-cyan {
        background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
        color: #fff;
    }

    .l-bg-green {
        background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
        color: #fff;
    }

    .l-bg-orange {
        background: linear-gradient(to right, #f9900e, #ffba56) !important;
        color: #fff;
    }

    .l-bg-cyan {
        background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
        color: #fff;
    }





    #footer {
        position:relative;
        height:20px;
        width:100%;
        background:transparent;

    }



    .card-1 {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    /*.card-1:hover {*/
    /*box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);*/
    /*}*/

    .card-2 {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .card-3 {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }

    .card-4 {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .card-5 {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }






    /*
 CSS for the main interaction
*/
    .tabset1 > input[type="radio"] {
        position: absolute;
        left: -200vw;
    }

    .tabset1 .tab-panel {
        display: none;
    }

    .tabset1 > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
    .tabset1 > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
    .tabset1 > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
    .tabset1 > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
    .tabset1 > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
    .tabset1 > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
        display: block;
    }



    .tabset1 > label {
        position: relative;
        display: inline-block;
        padding: 15px 15px 25px;
        border: 1px solid transparent;
        border-bottom: 0;
        cursor: pointer;
        font-weight: 600;
    }

    .tabset1 > label::after {
        content: "";
        position: absolute;
        left: 15px;
        bottom: 10px;
        width: 22px;
        height: 4px;
        background: #8d8d8d;
    }

    .tabset1 > label:hover,
    .tabset1 > input:focus + label {
        color: #06c;
    }

    .tabset1 > label:hover::after,
    .tabset1 > input:focus + label::after,
    .tabset1 > input:checked + label::after {
        background: #06c;
    }

    .tabset1 > input:checked + label {
        border-color: #ccc;
        border-bottom: 1px solid #fff;
        margin-bottom: -1px;
    }

    .tab-panel {
        padding: 30px 0;
        border-top: 1px solid #ccc;
    }



    .tabset1 {
        max-width: 65em;
    }

    body {
        background: #f9f9f9 !important;
    }
</style>
