<template>
    <div>
         <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
        </div> 
       

      
       <h2 style="text-align:center;">Liste Unité Administrative de la section :<b style="text-decoration:underline;">{{NomSection(this.sectionid)}} </b></h2>
        <div class="container-fluid" style="height: 100em;">


            <div>
                
             <div style="width:200px;height:1000px;margin-right:15px;" id="menu">
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
                                <tr  v-for="uabysection in ListeUniteAdminBySection" :key="uabysection.id" style="display: inline-block;">
                                    
                                            <td v-if="RecupUavide(uabysection.id)==1">
                                                <router-link :to="{ name: 'ListeMarcheUa', params: { id: uabysection.id, id_section:retourne_id }}" >
                                        <div class="" :title="uabysection.libelle" >
                                                    <!-- <li class="icon-folder-close" style="font-size: 55px !important;margin-right:35px;margin-left:35px;">{{nombremarcheByua(uabysection.id)}}</li> -->
                                                    <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                  <br>
                                                  <p :title="uabysection.libelle" style="margin-left:35px;margin-right:35px;">{{uabysection.libelle.substr(0, 30)+'...'}}</p>  
                                                         <br>
                                                       <br>
                                                        </div>
                                             
                                     </router-link> 
                                             </td>

                                             <td v-else>
                                                <router-link :to="{ name: 'ListeMarcheUa', params: { id: uabysection.id, id_section:retourne_id }}" >
                                        <div class="" :title="uabysection.libelle" >
                                                    <!-- <li class="icon-folder-close" style="font-size: 55px !important;margin-right:35px;margin-left:35px;">{{nombremarcheByua(uabysection.id)}}</li> -->
                                                    <img :src="url_vide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                  <br>
                                                  <p :title="uabysection.libelle" style="font-size:20px; margin-left:30px;">{{uabysection.libelle.substr(0, 30)+'...'}}</p>  
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
</template>

<script>
    import {partition} from "../../Repositories/Repository"
    // Import component
    //import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
   // import VueApexCharts from 'vue-apexcharts'
    import { mapGetters,mapActions } from "vuex";
    import {noDCfNoAdmin,dcf} from "../../Repositories/Auth"
    import {formatageSomme} from '../../Repositories/Repository'

    import 'vue-search-select/dist/VueSearchSelect.css'
    // import DraggableDiv from '../../components/DraggableDiv/DraggableDiv'
    import img1 from "../../assets/folder_nvide.jpg";
    import img2 from "../../assets/folder_vide.png";
    import Menu from "../../assets/menu.png";
    export default {
        name: "Images",
        components: {
       
        },
        data() {
            return{
                url_nvide:img1,
                 menu:Menu,
                url_vide:img2,
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
        
            created() {
            this.sectionid=this.$route.params.id     
              
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

            NomSection(){
                return id=>{
                    if(id!="" && id!=null){
                        let Objet=this.sections.find(item=>item.id==id)
                        return Objet.nom_section
                    }
                    return ""
                }
            },

            retourne_id(){
                return this.sectionid;
            },

              RecupUavide(){
                return id=>{
                    if(id!="" && id!=null){
                        const Objet=this.marches.find(item=>item.unite_administrative_id==id && item.exo_id==this.anneeAmort);
                        if(Objet){
                            return 1
                        }
                        return 0
                    }
                    
                }
            },

            nombremarcheByua(){
                return id=>{
                    let vm=this
                    return vm.marches.filter(item=>item.unite_administrative_id==id).length
                }
            },

            ListeUniteAdminBySection(){
                 return this.uniteAdministratives.filter(qtreel => qtreel.section_id == this.sectionid); 
            },

            regions(){
                //console.log(this.localisations_geographiques.filter(item=>item.structure_localisation_geographique.niveau==2))
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

            afficherModalListePersonnel(){
                window.history.back();
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
