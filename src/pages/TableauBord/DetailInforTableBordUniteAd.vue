<template>
     <div>
         <detail-attent-contratualisation-h-d v-if="info_marche_status==0"></detail-attent-contratualisation-h-d>
         <detail-contratualisation v-if="info_marche_status==1"></detail-contratualisation>
         <detail-contratualisation-h-d v-if="info_marche_status==9"></detail-contratualisation-h-d>
         <detail-table-bord-execution v-if="info_marche_status==2 || info_marche_status==12 || info_marche_status==11 || info_marche_status==10"></detail-table-bord-execution>
     </div>
</template>

<script>
    import { mapGetters} from "vuex";
    import {partition,formatageSomme} from '../../Repositories/Repository'
    import DetailAttentContratualisationHD from "./composant/DetailAttentContratualisationHD"
    import DetailContratualisation from "./composant/DetailContratualisation"
    import DetailContratualisationHD from "./composant/DetailContratualisationHD";
    import DetailTableBordExecution from "./composant/DetailTableBordExecution"
    export default {
        components: {
            DetailContratualisationHD,
            DetailAttentContratualisationHD,
            DetailContratualisation,
            DetailTableBordExecution
        },
        name: "DetailInforTableBordUniteAd",
        data(){
            return {
                status:"",
                info_region:"",
                info_type_marche:'',
                info_infrastructure:'',
                info_unite_admin:'',
                info_marche_status:"",
                page:0,
                size:10,
                active_el:false,
            }
        },
        created(){
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
        computed:{
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
                "getterImageMarche","acteEffetFinanciers","getActeEffetFinancierPersonnaliser45","typeMarches","avenants","getterListeMarcheTableauBordFiltre","getterInfoTableauBordFiltre"]),
            infoEtatMarche(){
                return status=>{
                    if(status==0){
                        //  colors:['#410041', '#e81776', '#FF00FF',"#008000","#b5160e"]
                        return "<h5><font color='#410041'>En attente de contratualisation hors alert</font></h5>"
                    }
                    if(status==8){
                        return "<h5><font color='#e81776'>En attente de contratualisation avec alert</font></h5>"
                    }
                    if(status==1){
                        return "<h5><font color='#FF00FF'>En contratualisation</font></h5>"
                    }

                    if(status==2){
                        return "<h5><font color='#008000'>En execution</font></h5>"
                    }

                    if(status==7){
                        return "<h5><font color='#b5160e'>En suffrance</font></h5>"
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
            montantApprouve(){
                return id=>{
                    let objet=this.getActeEffetFinancierPersonnaliser45.find(item=>item.marche_id==id)
                    if(objet!=undefined){
                        return objet.montant_act
                    }
                    return 0
                }
            },
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


        },
        methods:{
            infrastucture(){
                this.$router.push({
                    name: 'TableauBordGestionMarche'
                })
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
        color: #fff !important;
        background-color: #892e6a !important;
    }

    .red_type_marche {
        color: #fff !important;
        background-color: #892e6a !important;
    }

</style>
