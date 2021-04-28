<template>
    <div >

        <div ref="document">
<div class="row-fluid">
    <div class="span6">
        <a @click.prevent="infrastucture" class="btn btn-default"
           href="#">Retour</a>
    </div>
    <div class="span6" align="right">
        <button class="btn btn-default" @click="tableToExcel('table', 'SITUATION EXECCUTION')">
            Exporte en excel
        </button>
    </div>
</div>


            <div class="row-fluid">
                <div class="span12">
                    <h3 v-if="info_unite_admin">Situation {{info_unite_admin.libelle}} ,Nombre de marchés <font color="red">({{getterListeMarcheTableauBordFiltre.length}})</font>  </h3>
                </div>
                <div  class="span12">
                    <nav aria-label="breadcrumb" class="main-breadcrumb" >
                        <ol class="breadcrumb" :style="{background: getColorByStatus(info_marche_status),fontSize:'20px'}" align="center">

                            <li class="breadcrumb-item" v-html="infoEtatMarche(info_marche_status)"></li>


                        </ol>
                        <ol class="breadcrumb">

                            <li class="breadcrumb-item" v-if="info_region"><h5>Région {{info_region.libelle}}&nbsp;&nbsp;&nbsp;&nbsp; .</h5></li>
                            <li class="breadcrumb-item" v-if="info_infrastructure"><h5> Infrastructure {{info_infrastructure.libelle}} &nbsp;&nbsp;&nbsp;&nbsp; .</h5></li>
                            <li class="breadcrumb-item" v-if="info_type_marche"><h5> Type de Marche {{info_type_marche.libelle}} &nbsp;&nbsp;&nbsp;&nbsp; .</h5></li>
                        </ol>
                    </nav>
                </div>
            </div>



            <table class="table table-bordered table-striped" id="titre" ref="table"  summary="lorem ipsum sit amet" rules="groups" frame="hsides" border="2">

                <thead>

                <tr>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td colspan="3" :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Date réception provisoire</td>
                    <td colspan="3" :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Date réception définitive</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}"></td>
                    <td colspan="3" :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Situation d'exécution financière</td>
                </tr>
                <tr>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">N° </td>
                    <td colspan="" :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Objet du marché</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Numéro du marché</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Attribution</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Montant de base marché</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Montant total avenant</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">  Montant total du marché y/c avenant</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Durée contractuelle d'exécution</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Durée de garantie</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Date de l'OS</td>

                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Date de début d'exécution réelle</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Ecart de démarrage</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">prévisionnelle</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Effective</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Ecart</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">prévisionnelle</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Effective</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Ecart</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Durée d'exécution réelle</td>

                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Ecart de la durée d'exécution
                        ( + ou - )</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">STATUT DU MARCHE (Dans le Délai / Hors Délai)</td>

                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Montant déjà visé</td>

                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Taux (%) OP visé</td>
                    <td :style="{background: getColorByStatus(info_marche_status),fontSize:'15px',color:'#fff !important'}">Montant restant à viser </td>


                </tr>

                </thead>
                <tbody>
                <!-- <loading :active.sync="isLoading"-->
                <!--          :can-cancel="true"-->
                <!--          :on-cancel="onCancel"-->
                <!--          :is-full-page="fullPage"></loading>-->
                <tr  class="odd gradeX" v-for="(activites,index) in getterListeMarcheTableauBordFiltre" :key="activites.id" >
                    <td>{{index+1}}</td>

                    <td >{{activites.objet || 'Non renseigné'}}</td>
                    <td >{{activites.numero_marche|| 'Non renseigné'}}</td>
                    <td >{{attritaireMarche(activites.id)}}</td>
                    <td>{{formatageSomme(parseFloat(montantBaseMarche(activites.id)))}}</td>
                    <td>{{formatageSomme(parseFloat(montantAvenantMarche(activites.id)))}}</td>
                    <td>{{formatageSomme(parseFloat(montantTotaMarche(activites.id)))}}</td>
                    <td>{{durreExecutionContuelle(activites.id)}} Jours</td>
                    <td>{{dureeGarantie(activites.id)}} Jours</td>
                    <td>{{formaterDate(dateOs(activites.id))}}</td>
                    <td>
                        {{formaterDate(dateDebutExectionEffective(activites.id)) || 'Non renseigné'}}
                    </td>
                    <td>{{ecartDemarage(activites.id)}}</td>
                    <td>{{formaterDate(dateProvisoirePrevisionnel(activites.id))}}</td>
                    <td>
                        {{formaterDate(dateProvisoireEffective(activites.id)) || 'Non renseigné'}}
                    </td>
                    <td>
                        {{ecartDateProvisoireEffective(activites.id)}}
                    </td>
                    <td>
                        {{formaterDate(dateDefinitivePrevisionnel(activites.id)) || 'Non renseigné'}}
                    </td>
                    <td>{{formaterDate(dateReceptionEffective(activites.id))}}</td>
                    <td>{{ecartDateDefinitiveEffective(activites.id)}}</td>
                    <td>{{durreReelExe(activites.id)}}</td>
                    <td>{{EcartDurreExecution(activites.id)}}</td>
                    <td>{{durreStatusMarche(activites.id)}}</td>
                    <td>{{formatageSomme(parseFloat(montantMandatMarcheVise(activites.id)))}}</td>
                    <td>{{tauxMandatVise(activites.id)}} % </td>
                    <td>{{formatageSomme(parseFloat(montantMandatMacherRestantVise(activites.id)))}}</td>
                </tr>


                </tbody>
            </table>





        </div>


    </div>
</template>


<script>
    import { mapGetters, mapActions } from "vuex";
    import { formatageSomme } from "../../../Repositories/Repository";
    import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth"
    import moment from "moment";
    //import UploadExcelComponent from '@/components/UploadExcel/index.vue'
    //import ProgressBar from "../component/ProgressBar"
    //import {formatageSomme} from '../../Repositories/Repository'

  //  import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
    // import Loading from 'vue-loading-overlay';
    export default {
        name: 'BudgetPasProgramme',
        components:{
            //  UploadExcelComponent
            // ModelListSelect,
            // Loading
        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                status:"",
                info_region:"",
                info_type_marche:'',
                info_infrastructure:'',
                info_unite_admin:'',
                info_marche_status:"",
                page:0,
                size:10,
                isLoading: true,
                fullPage: false,
                tableData: [],
                tableHeader: [],
                progress:0,
                bgWidth: '0%',
                bgHeight: '30px',
                exercice_budget:"",
                message_mandater:'',
                section_id:'',
                i:0,
                controlleur_fin:"",
                status_marches:"",
                unite_administrative_id:"",
                infrastructure:"",
                type_marche:"",
                region:"",
                info_status_marche:"",
                tableMarcheStatue:"",
                isOffreTechniqueFinancier:false,
                namePDF: "",
                uploadPercentage:0,
                fichierPDF: "",
                imagePDF:"",
                selectedFile:"",
                resultaAnalysePv:[],
                resultaFinalCandidat:[],
                entreprise_vainqueur:"",
                registrecc_vainqueur:"",
                identreprise_vainqueur:"",
                message_setion_vainqueur:"",
                info_avis_bailleur:"",
                namePDFDemandeAno: "",
                fichierPDFDemandeAno: "",
                imagePDFDemandeAno:"",
                source_financement_detecter:[],
                unite_admin_dettecte:[],
                uri :'data:application/vnd.ms-excel;charset=UTF-8;base64,',
                template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
                format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) },
                formData:{
                    programme_id:""
                }

            };
        },
        created() {
            if(this.getterInfoTableauBordFiltre){
                if(this.getterInfoTableauBordFiltre.infrastructure!=""){
                    this.info_infrastructure=this.getterInfrastrucure.find(item=>item.id==this.getterInfoTableauBordFiltre.infrastructure)
                }

                if(this.getterInfoTableauBordFiltre.type_marche!=""){
                    this.info_type_marche=this.typeMarches.find(item=>item.id==this.getterInfoTableauBordFiltre.type_marche)

                }
                if(this.getterInfoTableauBordFiltre.unite_administrative!=""){
                    this.info_unite_admin=this.uniteAdministratives.find(item=>item.id==this.getterInfoTableauBordFiltre.unite_administrative)
                }
                if(this.getterInfoTableauBordFiltre.region!=""){
                    this.info_region=this.localisations_geographiques.find(item=>item.id==this.getterInfoTableauBordFiltre.region)

                }
                if(this.getterInfoTableauBordFiltre.status_marche!=""){
                    this.info_marche_status=this.getterInfoTableauBordFiltre.status_marche

                }
            }
        },
        computed: {
            ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge"
            ]),

            ...mapGetters("bienService", ['marches',"engagements","getMandatPersonnaliserVise","getActeEffetFinancierPersonnaliser",
                "getterImageMarche","acteEffetFinanciers","getActeEffetFinancierPersonnaliser45","typeMarches","avenants",
                "getterListeMarcheTableauBordFiltre","getterInfoTableauBordFiltre","TacheMarche","mandats"]),

            ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires",
                "localisations_geographiques",
                "getterInfrastrucure"
            ]),

            ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
            ...mapGetters("horSib", ["gettersMarcheHorsib"]),
            ...mapGetters("Utilisateurs", ["getterUtilisateur","getterRoles"]),
            // ...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques',
            //     'localisations_geographiques',"getterLocalisationGeoAll","getterInfrastrucure","exercices_budgetaires","sections",
            //     "type_Unite_admins",
            //     "plans_programmes",
            //     "natures_sections",
            //     "grandes_natures"]),
            listeCF(){
                return this.getterUtilisateur.filter(item=>{
                    if(item.user_role){
                        if (item.user_role.role.code_role=="DCF" || item.user_role.role.code_role=="CF"){
                            return item
                        }
                    }
                })
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
                    if(this.section_id!=""){
                        return colect.filter(item=>item.section_id==this.section_id)
                    }
                    return colect
                }
                if(this.section_id!=""){
                    return this.uniteAdministratives.filter(item=>item.section_id==this.section_id)
                }
                return this.uniteAdministratives
                // return this.uniteAdministratives
            },
            listeMarcheUniteAdmin(){
                let colect=[]
                let vM=this;
                this.filtre_unite_admin.forEach(function (value) {
                    let objet=vM.gettersMarcheHorsib.filter(item=>{
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
            regions(){
                // console.log(this.localisations_geographiques.filter(item=>item.structure_localisation_geographique.niveau==2))
                return this.localisations_geographiques.filter(item=>{
                    if(item.longitude!=null && item.structure_localisation_geographique.niveau==2 ){
                        return item
                    }
                });
            },

            tachePasMarche(){
                return marche_id=>{
                    let objet=this.TacheMarche.filter(item=>item.marche_id==marche_id)

                    if(objet.length>0){
                        return objet
                    }
                    return []
                }
            },
            liseSousTacheMarche(){
                return marche_id=>{
                    let _objet=this.tachePasMarche(marche_id).filter(item=>item.parent_id!=null)
                    if(_objet.length>0){
                        return _objet
                    }
                    return _objet

                }
            },
            tachePrevuePasMarche(){
                return marche_id=>{
                    let _objet=this.tachePasMarche(marche_id).filter(item=>item.parent_id==null)
                    if(_objet.length>0){
                        return _objet
                    }
                    return _objet

                }
            },
            tacheRealisePasMarche(){
                return marche_id=>{
                    let _objet=this.tachePasMarche(marche_id)
                    if(_objet.length>0){
                        let arraymarche=[]
                        let vm=this
                        _objet.forEach(function (val) {
                            let taux=(parseFloat(vm.totaleSommeRealiseTache(val.id,marche_id)) * 100)/parseFloat(vm.totaleBaseARealiseTache(val.id,marche_id))
                            //  console.log(taux)
                            if(taux==100){
                                arraymarche.push(val)
                            }
                        })
                        return arraymarche
                    }
                    return []
                }
            },
            tacheRestantRealisePasMarche(){
                return marche_id=>{
                    let _objet=this.tachePasMarche(marche_id)
                    if(_objet.length>0){
                        let arraymarche=[]
                        let vm=this
                        _objet.forEach(function (val) {
                            let taux=(vm.totaleSommeRealiseTache(val.id,marche_id) * 100)/vm.totaleBaseARealiseTache(val.id,marche_id)
                            console.log(val)
                            if(taux<100){
                                //  console.log(taux)
                                arraymarche.push(val)
                            }
                        })
                        return arraymarche
                    }
                    return []
                }
            },
            tauxTacheRealise(){
                return marche_id=>{
                    let totalTache=this.tachePrevuePasMarche(marche_id)
                    if(totalTache.length>0){
                        let totalTacheRealise=this.tacheRealisePasMarche(marche_id).length
                        let taux=(totalTacheRealise * 100)/totalTache
                        return taux.toFixed(2)
                    }
                    return 0
                }
            },
            totaleBaseARealiseTache(){
                return (id_tache,marche_id)=>{
                    let soustache=this.liseSousTacheMarche(marche_id).filter(item=>item.parent_id==id_tache)
                    console.log("....MARCHE..58865765575..")
                    console.log(marche_id)
                    if(soustache.length>0){

                        let base=soustache.length * 100
                        // console.log(base)
                        // console.log("....MARCHE....5555555................")
                        return base
                    }
                    return 0

                }
            },
            totaleSommeRealiseTache(){
                return (id_tache,marche_id)=>{
                    let soustache=this.liseSousTacheMarche(marche_id).filter(item=>item.parent_id==id_tache)
                    if(soustache.length>0){
                        let initeVal=0
                        let obj= soustache.reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.taux_realiser) ;
                        }, initeVal);
                        console.log(obj)
                        return  obj
                    }
                    return 0

                }
            },
            MandatMarche(){
                return marche_id=>{
                    let objet =this.mandats.filter(item=>item.marche_id==marche_id)
                    if(objet.length>0){
                        return objet
                    }
                    return []
                }
            },
            montantMandatMarcheVise(){
                return marche_id=>{
                    let objet=this.MandatMarche(marche_id)
                    console.log(this.mandats)

                    if(objet.length>0){
                        let initeVal = 0;
                        let montant=this.mandats.filter(item=>{
                            if(item.marche_id==marche_id && (item.decision_cf==8 || item.decision_cf==8)){
                                return item
                            }
                        }).reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.total_general) ;
                        }, initeVal);
                        return montant
                    }
                    return 0
                }
            },
            montantMandatMacherRestantVise(){
                return marche_id=>{
                    let objet=this.MandatMarche(marche_id)
                    if(objet.length>0){
                        let initeVal = 0;
                        let montant=this.mandats.filter(item=>{
                            if(item.marche_id==marche_id && item.decision_cf==0){
                                return item
                            }
                        }).reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.total_general) ;
                        }, initeVal);
                        return montant
                    }
                    return 0
                }
            },
            totalMandatMarche(){
                return marche_id=>{
                    let objet=this.MandatMarche(marche_id)
                    if(objet.length>0){
                        return objet.length
                    }
                    return 0
                }
            },
            totalMandatViseMarche(){
                return marche_id=>{
                    let objet=this.MandatMarche(marche_id)
                    if(objet.length>0){

                        return this.mandats.filter(item=>{
                            if(item.marche_id==marche_id && (item.decision_cf==8 || item.decision_cf==8)){
                                return item
                            }
                        }).length

                    }
                    return 0
                };
            },
            tauxMandatVise(){
                return marche_id=>{
                    let taux=(this.totalMandatViseMarche(marche_id) * 100)/this.totalMandatMarche(marche_id)
                    if(isNaN(taux)) return 0
                    return taux.toFixed(2)
                }
            },
            nombreDejourCalcule(){
                return (date1,date2)=>{
                    if(!date2){
                        let date_day=new Date()
                        date2= this.formatDate(date_day)
                        console.log(date2)
                    }
                    if(date1==null) return null;

                    let date_debut=new Date(date1)
                    let date_fin = new Date(date2)
                    // let diffDays = date_fin.getDate() - date_debut.getDate();
                    var timeDiff = date_fin.getTime() - date_debut.getTime();
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                    if (isNaN(diffDays)) return null;
                    if (parseFloat(diffDays) <0 ) return diffDays

                    return diffDays
                }

            },

            nombreDejourCalculeSansDateDuJOUR(){

                return (date1,date2)=>{
                    if(date1==null) return null;

                    let date_debut=new Date(date1)
                    let date_fin = new Date(date2)
                    // let diffDays = date_fin.getDate() - date_debut.getDate();
                    var timeDiff = date_fin.getTime() - date_debut.getTime();
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                    if (isNaN(diffDays)) return null;
                    if (parseFloat(diffDays) <0 ) return diffDays

                    return diffDays
                }


            },

            formatDate() {
                return date=>{
                    var d = new Date(date),
                        month = '' + (d.getMonth() + 1),
                        day = '' + d.getDate(),
                        year = d.getFullYear();

                    if (month.length < 2)
                        month = '0' + month;
                    if (day.length < 2)
                        day = '0' + day;

                    return [year, month, day].join('-');
                }
            },
            ecartDateProvisoireEffective(){
                return marche_id=>{
                    if(marche_id){
                        console.log(marche_id)
                        let objet=this.listeActeEffectFinnancier(marche_id)
                        if(objet){
                            console.log(objet.date_reception)
                            let jour=this.nombreDejourCalcule(objet.date_reception,objet.date_reception_provisoire_definitif)
                            return jour;
                        }
                        return ""
                    }
                }
            },
            ecartDateDefinitiveEffective(){
                return marche_id=>{
                    if(marche_id){
                        console.log(marche_id)
                        let objet=this.listeActeEffectFinnancier(marche_id)
                        if(objet){
                            console.log(objet.date_reception)
                            let jour=this.nombreDejourCalcule(objet.date_fin_exe,objet.date_reception_definitive)
                            return jour;
                        }
                        return ""
                    }
                }
            },
            ecartDemarage(){
                return marche_id=>{
                    if(marche_id){
                        console.log(marche_id)
                        let objet=this.listeActeEffectFinnancier(marche_id)
                        if(objet){
                            // console.log(objet.date_reception)
                            let jour=this.nombreDejourCalcule(objet.date_odre_service,objet.date_debut_exectuion_definitif)
                            return jour;
                        }
                        return ""
                    }
                }
            },
            durreReelExe(){
                return marche_id=>{
                    if(marche_id){
                        console.log(marche_id)
                        let objet=this.listeActeEffectFinnancier(marche_id)
                        if(objet){
                            // console.log(objet.date_reception)
                            if(this.dateDebutExectionEffective(marche_id)==null){
                                return "Non démarré"
                            }

                            if(objet.date_debut_exectuion_definitif!=null && objet.date_fin_exe==null){
                                let jour1=this.nombreDejourCalcule(objet.date_debut_exectuion_definitif,"")
                                return " En cours d'execution ("+jour1+")";
                            }

                            if(objet.garantie=="oui" && objet.date_reception_provisoire_definitif==null){
                                let jour=this.nombreDejourCalculeSansDateDuJOUR(this.dateDebutExectionEffective(marche_id),objet.date_reception_definitive)
                                return jour;
                            }
                            let jour=this.nombreDejourCalculeSansDateDuJOUR(objet.date_debut_exectuion_definitif,objet.date_reception_provisoire_definitif)
                            return jour;
                        }
                        return ""
                    }
                }
            },
            durreStatusMarche(){
                return marche_id=>{
                    if(marche_id){
                        console.log(marche_id)
                        let objet=this.listeActeEffectFinnancier(marche_id)
                        if(objet){
                            // console.log(objet.date_reception)
                            if(objet.date_debut_exectuion_definitif==null){
                                return "Non démarré"
                            }

                            if(objet.date_debut_exectuion_definitif!=null && objet.date_fin_exe==null){
                                let jour1=this.nombreDejourCalcule(objet.date_debut_exectuion_definitif,"")
                                console.log(jour1)
                                return "En cours d'execution";
                            }

                            if(objet.garantie=="oui" && objet.date_reception_provisoire_definitif==null){
                                let jour=this.nombreDejourCalculeSansDateDuJOUR(objet.date_debut_exectuion_definitif,objet.date_reception_definitive)
                                if(jour<1){
                                    return "Acheve dans le delais"
                                }
                                return "Acheve Hors Délai"
                            }
                            //let jour=this.nombreDejourCalculeSansDateDuJOUR(objet.date_debut_exectuion_definitif,objet.date_fin_exe)
                            let jour=this.nombreDejourCalculeSansDateDuJOUR(objet.date_debut_exectuion_definitif,objet.date_reception_provisoire_definitif)
                            //return jour;
                            if(jour<1){
                                return "Acheve Dans le Délai"
                            }
                            return "Acheve Hors Délai"

                        }
                        return ""
                    }
                }
            },
            EcartDurreExecution(){
                return marche_id=>{
                    if(marche_id){
                        console.log(marche_id)
                        let objet=this.listeActeEffectFinnancier(marche_id)
                        if(objet){
                            // console.log(objet.date_reception)
                            if(objet.date_debut_exectuion_definitif==null){
                                return ""
                            }

                            if(objet.date_debut_exectuion_definitif!=null && objet.date_fin_exe==null){
                                let jour1=this.nombreDejourCalcule(objet.date_debut_exectuion_definitif,"")
                                console.log(jour1)
                                return "";
                            }

                            if(objet.garantie=="oui" && objet.date_reception_provisoire_definitif==null){
                                let jour=this.nombreDejourCalculeSansDateDuJOUR(objet.date_debut_exectuion_definitif,objet.date_reception_definitive)
                                return jour;
                            }
                            let jour=this.nombreDejourCalculeSansDateDuJOUR(objet.date_debut_exectuion_definitif,objet.date_reception_provisoire_definitif)

                            let durre=parseInt(jour) - parseInt(objet.duree)
                            return durre

                        }
                        return ""
                    }
                }
            },
            admin:admin,
            dcf:dcf,
            noDCfNoAdmin:noDCfNoAdmin,

            listeActeEffectFinnancier: function () {
                return macheid => {
                    if (macheid != "") {
                        return this.getActeEffetFinancierPersonnaliser.find(idmarche => idmarche.marche_id == macheid)
                    }
                }
            },
            attritaireMarche(){
                return marche_id=>{
                    let objet=this.listeActeEffectFinnancier(marche_id)
                    console.log(objet)
                    if(objet!=undefined){
                        if(objet.varObjetEntreprise){
                            let entre=this.entreprises.find(item=>item.id==objet.entreprise_id)
                            return entre.raison_sociale
                        }
                        return null
                    }

                    return null
                }
            },
            montantBaseMarche(){
                return marche_id=>{
                    let objet=this.listeActeEffectFinnancier(marche_id)
                    console.log(objet)
                    if(objet!=undefined){

                        return objet.montant_act
                    }

                    return 0
                }
            },
            durreExecutionContuelle(){
                return marche_id=>{
                    let objet=this.listeActeEffectFinnancier(marche_id)
                    console.log(objet)
                    if(objet!=undefined){

                        return objet.duree
                    }

                    return 0
                }
            },
            dureeGarantie(){
                return marche_id=>{
                    let objet=this.listeActeEffectFinnancier(marche_id)
                    console.log(objet)
                    if(objet!=undefined){
                        if(objet.durre_garantie==null) return 0

                        return objet.durre_garantie
                    }

                    return 0
                }
            },
            dateOs(){
                return marche_id=>{
                    let objet=this.listeActeEffectFinnancier(marche_id)
                    console.log(objet)
                    if(objet!=undefined){

                        return objet.date_odre_service
                    }

                    return 0
                }
            },
            dateProvisoirePrevisionnel(){
                return marche_id=>{
                    let objet=this.listeActeEffectFinnancier(marche_id)
                    console.log(objet)
                    if(objet!=undefined){

                        return objet.date_reception
                    }

                    return ""
                }
            },
            dateProvisoireEffective(){
                return marche_id=>{
                    let objet=this.listeActeEffectFinnancier(marche_id)
                    console.log(objet)
                    if(objet!=undefined){

                        return objet.date_reception_provisoire_definitif
                    }

                    return ""
                }
            },

            dateDefinitivePrevisionnel(){
                return marche_id=>{
                    let objet=this.listeActeEffectFinnancier(marche_id)
                    console.log(objet)
                    if(objet!=undefined){

                        return objet.date_fin_exe
                    }

                    return ""
                }
            },
            dateDebutExectionEffective(){
                return marche_id=>{
                    let objet=this.listeActeEffectFinnancier(marche_id)
                    console.log(objet)
                    if(objet!=undefined){

                        return objet.date_debut_exectuion_definitif
                    }

                    return ""
                }
            },
            dateReceptionEffective(){
                return marche_id=>{
                    let objet=this.listeActeEffectFinnancier(marche_id)
                    console.log(objet)
                    if(objet!=undefined){

                        return objet.date_reception_definitive
                    }

                    return ""
                }
            },
            montantTotaMarche(){
                return marche_id=>{
                    return  parseFloat(this.montantBaseMarche(marche_id)) + parseFloat(this.montantAvenantMarche(marche_id))
                }
            },
            montantAvenantMarche(){
                return marche_id=>{
                    let objetAvenant=this.avenants.filter(item=>item.marche_id==marche_id)
                    if(objetAvenant!=undefined){
                        let initeVal = 0;
                        return objetAvenant.reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.montant_avenant) ;
                        }, initeVal);
                    }
                    return 0
                }
            },
            afficherEntrepriseID(){
                return id=>{
                    if(id!=null && id!=""){
                        let objet=this.getActeEffetFinancierPersonnaliser.filter(item => item.marche_id==id)
                        if(objet){
                            return objet.entreprise_id
                        }
                        return 0
                    }
                }
            },
            afficherEntrepriseID1(){
                return id=>{
                    if(id!=null && id!=""){
                        let objet=this.getActeEffetFinancierPersonnaliser.filter(item => item.id==id)
                        if(objet){
                            return objet.marche_id
                        }
                        return 0
                    }
                }
            },


            afficherListeMarcheHorsSib() {

                return this.objetMarchePlanierPasUiteOuRegion
            },
            objetMarchePlanierPasUiteOuRegion(){

                let vM=this;
                let objet=this.getterListeMarcheTableauBordFiltre.filter(item=>item.parent_id!=null)

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
            infoEtatMarche(){
                return status=>{
                    if(status==0){
                        //  colors:['#410041', '#e81776', '#FF00FF',"#008000","#b5160e"]
                        return "<font color='#fff'>En attente de contractualisation </font>"
                    }
                    if(status==8){
                        return "<font color='#fff'>En attente de contractualisation hors délai</font>"
                    }
                    if(status==1){
                        return "<font color='#fff'>En contractualisation</font>"
                    }
                    if(status==9){
                        return "<font color='#fff'>En contractualisation Hors délai</font>"
                    }

                    if(status==2){
                        return "<font color='#fff'>En execution</font>"
                    }
                    if(status==10){
                        return "<font color='#fff'>En exécution Hors délai</font>"
                    }

                    if(status==11){
                        return "<font color='#fff'>Acheve dans le délai</font>"
                    }
                    if(status==12){
                        return "<font color='#fff'>Acheve hors délai</font>"
                    }

                    if(status==7){
                        return "<font color='#fff'>En suffrance</font>"
                    }
                    return null
                }
            },
            getColorByStatus(){
                return status=>{
                    console.log(status)
                    if(status==0){
                        //  colors:['#410041', '#e81776', '#FF00FF',"#008000","#b5160e"]
                        return "#8ea9db !important"
                    }
                    if(status==8){
                        return "#f4b084 !important"
                    }
                    if(status==1){
                        return "#92d04f !important"
                    }
                    if(status==9){
                        return "#632990 !important"
                    }

                    if(status==2){
                        return "#ffbd3d !important"
                    }
                    if(status==10){
                        return "#d36f2a !important"
                    }

                    if(status==11){
                        return "#00b04f !important"
                    }
                    if(status==12){
                        return "#757171 !important"
                    }

                    if(status==7){
                        return "#ff0000 !important"
                    }
                    return null
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
        },
        methods: {

            ...mapActions("uniteadministrative", [
                "getAllActeCreation",
                "ajouterActeCreation",
                "modifierActeCreation",
                "supprimerActeCreation",
                "importBudget",
                "getAllTypeTextes",
                "getAllUniteAdministrative",
                "getAllArchivageDocument",
                "ajouterBudgetCharge",
                "getAllBudgetGeneral",
                "getAllHistoriqueBudgetGeneral",
                "modifierLigneExempter",
            ]),
            ...mapActions('parametreGenerauxSourceDeFinancement', ['getSourceFinancement', 'ajouterSourceFinancement',
                'modifierFinancement',
                'supprimerSourceFinancement']),
            formatageSomme:formatageSomme,
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
                this.section_id=""
            },
            tableToExcel(table, name){
                if (!table.nodeType) table = this.$refs.table
                var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
                window.location.href = this.uri + this.base64(this.format(this.template, ctx))
            },
            formaterDate(date){
                if(date==null)
                    return ""
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },

            onCancel() {
                console.log('User cancelled the loader.')
            },
            infrastucture(){
                this.$router.push({
                    name: 'TableauBordGestionMarche'
                })
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



            },

            infrastructure: function (value) {
                console.log(value);
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                },1000)

            },
            region: function (value) {
                console.log(value);
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                },1000)

            },
            unite_administrative_id: function (value) {
                console.log(value);
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                },1000)

            },

        },
    };
</script>
<style scoped>

    .taillemodal {
        width: 800px;
        margin: 0 -380px;
    }
    .gdmodelfour
    {
        width: 1000px;
        margin: 0 -580px;
        height: 500px;
    }
    .grdirModalActeEffet
    {

        width: 1200px;
        margin: 0 -530px;
        height: 550px;

    }
    .grdirModalAnalyse{
        width: 1000px;
        margin: 0 -530px;
        height: 350px;
    }
    .tlAviBailleur{
        width: 1000px;
        margin: 0 -530px;
        height: 450px;

    }
    .tlDossierCandidat{
        width: 1000px;
        margin: 0 -530px;
        height: 500px;

    }

    .tlg{
        width: 900px;
        margin: 0 -450px;
        height: 500px;
    }
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
    .modaloffreFin{
        width: 850px;
        margin: 0 -480px;
    }
    .tailDMP{
        width: 850px;
        margin: 0 -490px;
    }
    .tailleModalOffre{
        width: 1200px;
        margin: 0 -490px;
    }
    .tailleModalOffre2{
        width: 1300px;
        margin: 0 -690px;
    }
    .tableEntete{
        color: #000;width:2%;text-align:center;background-color: #fbcbcb !important;font-size:10px
    }
</style>



