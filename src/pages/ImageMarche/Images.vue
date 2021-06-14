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
                        

             <h2 style="text-align:center; text-decoration:underline;">Ministère(s)</h2>
                <br>


    <div>
         <div style="width:200px;height:800px;margin-right:15px;" id="menu">
                <ul  v-for="marchebyua in sections" :key="marchebyua.id">
                    <router-link :to="{ name: 'ListeUaImage', params: { id: marchebyua.id}}" :title="marchebyua.nom_section">
                    <img :src="menu" alt="" sizes="5px;" srcset="" style="width:100px; height:100px;">
                
                    <p :title="marchebyua.nom_section" style="font-weight:bold;">{{marchebyua.nom_section.substr(0, 30)+'...'}}</p>  
  
                     <!-- <li class="icon-folder-close" style="font-size: 30px !important;"></li>  -->
                </router-link> 
                </ul>      
            </div>
                <table class="" style="margin-left: 200px;">
                    <tbody>
                        <tr  v-for="sect in sections" :key="sect.id" style="display: inline-block;">
                           
                            <td v-if="test(sect.id)==1">
                                <router-link :to="{ name: 'ListeUaImage', params: { id: sect.id}}">
                                   <div class="" :title="sect.nom_section">
                                        <img src="folder_nvide.jpg" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                        <!-- <li class="icon-folder-close" style="font-size: 55px !important; margin-left:35px;"></li> -->
                                        <br>
                                        <p :title="sect.nom_section" style="font-size:20px; margin-left: 30px;"> <b>{{sect.nom_section.substr(0, 25)+'...'}} </b> </p> 
                                        <br>
                                        <br>
                                     </div>             
                               </router-link> 
                            </td>          

                            <td v-else>
                                <router-link :to="{ name: 'ListeUaImage', params: { id: sect.id}}">
                                   <div class="" :title="sect.nom_section">
                                        <img src="folder_vide.png" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                        <!-- <li class="icon-folder-close" style="font-size: 55px !important; margin-left:35px;"></li> -->
                                        <br>
                                        <p :title="sect.nom_section" style="font-size:20px; margin-left: 30px;"> <b>{{sect.nom_section.substr(0, 25)+'...'}} </b> </p> 
                                        <br>
                                        <br>
                                     </div>             
                               </router-link>
                            </td>                 
                        </tr>
                    </tbody>
                </table>
                    </div>
                    </div>
                </div>
                </div>


            </div>
        </div>



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
    import 'vue-search-select/dist/VueSearchSelect.css';
    import Menu from "../../assets/menu.png";
    // import DraggableDiv from '../../components/DraggableDiv/DraggableDiv'
    export default {
        name: "Images",
        components: {
        //   Loading,
            ModelListSelect,
        },
        data() {
            return{
                // url_test_plein:'https://img.pngio.com/free-folder-icon-for-windows-236555-download-folder-icon-for-png-folder-windows-7-200_200.jpg',
                // url_test_vide:'data:image/jpeg;base64,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',

                // url:'https://static.vecteezy.com/system/resources/thumbnails/000/439/792/small/Basic_Ui__28178_29.jpg',
                // url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJi8L-m3hgnw8xbMY93159m81pP9bvjWLINQ&usqp=CAU',
                isLoading: false,
                menu:Menu,
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
            console.log(this.marches)
            console.log(this.getterImageMarche)
        },
        computed: {
            ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "decomptefactures"
            ]),
            ...mapGetters("Utilisateurs",
             ["getterUtilisateur",
             "getterAffectation",
             "getterUniteAdministrativeByUser"]),
           
           ...mapGetters('parametreGenerauxAdministratif',
            ['structures_geographiques',
            'localisations_geographiques',
            "getterLocalisationGeoAll",
            "getterInfrastrucure",
            "exercices_budgetaires",
            "sections",
            "type_Unite_admins",
            "plans_programmes",
            "natures_sections",
            "grandes_natures"]),

            ...mapGetters("bienService",
             ['marches',
             "engagements",
             "getMandatPersonnaliserVise",
             "getterImageMarche","acteEffetFinanciers",
             "getActeEffetFinancierPersonnaliser45",
             "typeMarches",
             "avenants",
             "getterImageMarche"]),

            ...mapGetters("Utilisateurs",
             ["getterUtilisateur",
             "getterRoles"]),


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

              test(){
                  return id=>{
                    if(id!="" && id!=null){
                         const qtreel= this.uniteAdministratives.find(item=>item.section_id==id);
                         if(qtreel){
                        return "1"
                             }
                              return "0"
                    }
                }

           },

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
     #menu {
        float: left;
        background: white;
        overflow: scroll;
        
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
