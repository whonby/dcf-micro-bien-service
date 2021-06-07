<template>
    <div>
         <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
        </div> 
       

       <h2 style="text-align:center;">Marché:<b style="text-decoration:underline;">{{LibelleMarche(this.marcheid)}} </b></h2>

        <div class="container-fluid" style="height: 100em;">

 <br>
             <table class="" style="margin-left: 200px;">
                     <tbody>
                                <tr style="display: inline-block;">
                                    
                                            <td v-if="Janvier!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Janvier">
                                                        
                                                         <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Janvier</p>  
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>

                                              <td v-if="Fevrier!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Février">
                                                        
                                                        <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Février</p>   
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>

                                             <td v-if="Mars!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Mars">
                                                        
                                                         <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Mars</p>   
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>

                                             <td v-if="Avril!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Avril">
                                                        
                                                        <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Avril</p>  
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>

                                             <td v-if="Mai!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Mai">
                                                        
                                                        <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Mai</p>  
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>

                                             <td v-if="Juin!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Juin">
                                                        
                                                        <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Juin</p>  
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>       
                                    </tr>

                                    <br>
                                    <br>

                                    <tr style="display: inline-block;">
                                    
                                            <td v-if="Juillet!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Juillet">
                                                        
                                                        <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Juillet</p>
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>

                                              <td v-if="Aout!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Août">
                                                        
                                                       <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Août</p>
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>

                                             <td v-if="Septembre!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Septembre">
                                                        
                                                       <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Septembre</p>
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>

                                             <td v-if="Octobre!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Octobre">
                                                        
                                                        <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Octobre</p>
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>

                                             <td v-if="Novembre!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Novembre">
                                                        
                                                        <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Novembre</p>  
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>

                                             <td v-if="Decembre!=0">
                                                <router-link :to="{ name: 'ListeImageMarche', params: { id: this.marcheid}}">
                                                    <div class="" title="Décembre">
                                                        
                                                        <img :src="url_nvide" alt="" sizes="5px;" srcset="" style="width:100px; height:100px; margin-left: 30px;">
                                                         <br>
                                                            <p title="Novembre" style="margin-left:30px;font-size:20px">Décembre</p>
                                                           <br>
                                                           <br>
                                                    </div>
                                             
                                                </router-link> 
                                            </td>       
                                    </tr>
                                   
                         </tbody>
                </table> 

                                 <br>
                                 <br>

                       
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

    import 'vue-search-select/dist/VueSearchSelect.css'
    // import DraggableDiv from '../../components/DraggableDiv/DraggableDiv'
     import img1 from "../../assets/folder_nvide.jpg";
    import img2 from "../../assets/folder_vide.png";
    export default {
        name: "Images",
        components: {
       
        },
        data() {
            return{
                url_nvide:img1,
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
            this.marcheid=this.$route.params.id    
              
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
             "acteEffetFinanciers",
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

            LibelleMarche(){
                return id=>{
                    if(id!="" && id!=null){
                        let Objet=this.marches.find(item=>item.id==id)
                        return Objet.objet
                    }
                    return ""
                }
            },

            recupexo(){
                const qtreel= this.marches.find(item=>item.id==this.marcheid);
                if(qtreel){
                    return qtreel.exo_id
                }
                return ""
            },

              anneeAmort() {
      
                const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1
                                && this.recupexo==normeEquipe.annee);

                if (norme) {
                    return norme.annee;
                }
                return 0
             },


           test(){
                const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="01"));
                if(qtreel){
                    return "01"
                }
                return "0"

           },

    // fonction de recuperation de du mois dans l'année
    getMoisLiquidation() {
      return (date) => {
        if (!date) return null;
        let array_date = date.split("-");
        if (array_date.length == 3) {
          return array_date[1];
        }
        return null; 
      };
    },
    //fin


    //pour janvier
      Janvier() {
          const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="01"));
                if(qtreel){
                    return "01"
                }
                return "0"
              },

        //pour fevrier
              Fevrier() {
                const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="02"));
                if(qtreel){
                    return "02"
                }
                return "0"
              },

        //pour Mars
              Mars() {
                  const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="03"));
                if(qtreel){
                    return "03"
                }
                return "0"
              },


               Avril() {
                  const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="04"));
                if(qtreel){
                    return "04"
                }
                return "0"
              },


               Mai() {
                  const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="05"));
                if(qtreel){
                    return "05"
                }
                return "0"
              },


               Juin() {
                 const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="06"));
                if(qtreel){
                    return "06"
                }
                return "0"
              },


               Juillet() {
                 const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="07"));
                if(qtreel){
                    return "07"
                }
                return "0"
              },


               Aout() {
                  const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="08"));
                if(qtreel){
                    return "08"
                }
                return "0"
              },


               Septembre() {
                 const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="09"));
                if(qtreel){
                    return "09"
                }
                return "0"
              },


               Octobre() {
                  const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="10"));
                if(qtreel){
                    return "10"
                }
                return "0"
              },


               Novembre() {
                  const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="11"));
                if(qtreel){
                    return "11"
                }
                return "0"
              },

                Decembre() {
                 const qtreel= this.getterImageMarche.find(item=>item.marche_id==this.marcheid && (this.getMoisLiquidation(item.date_enregistrement)=="12"));
                if(qtreel){
                    return "12"
                }
                return "0"
              },

           
            nombreImageParMarche(){
              return id=>{
                  let objet=this.getterImageMarche.filter(item=>item.marche_id==id)
                  return objet.length
              }
            },

            nombreTotalMarche(){
                return this.objetMarchePasUniteOuRegion.length
            },
            objetListeMarcheInfoUnite(){
                return this.listeMarcheUniteAdmin.filter(item=>item.parent_id!="")
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
