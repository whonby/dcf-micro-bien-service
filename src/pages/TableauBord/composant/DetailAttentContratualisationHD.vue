<template>
    <div>
        <div class="container-fluid" style="height: 200em">
            <div class="" style="margin-top: -20px">
                <br>
                <div class="row-fluid">
                    <div class="span1">
                        <a @click.prevent="infrastucture" class="btn btn-default"
                           href="#">&#8606;</a>
                    </div>
<!--                    <div class="span11" align="left">-->
<!--                        <button class="btn btn-default" @click="generateReport()"><i class="icon-print"></i></button>-->
<!--                    </div>-->

                    <div class="span11">
                        <h3 v-if="info_unite_admin">Situation {{info_unite_admin.libelle}} ,Nombre de marchés <font color="red">({{getterListeMarcheTableauBordFiltre.length}})</font>  </h3>
                    </div>
                    <div  class="span11">
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



                <div class="row-fluid">
                    <div class="span6">
                        Afficher
                        <select name="pets" id="pet-select" v-model="size" class="span3">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="1000">1000</option>
                        </select>
                        Entrer
                    </div>
                    <div class="span6" align="right">
                        <button class="btn btn-default" @click="tableToExcel('table', 'En attente de contratualisation')">
                            <img style="width: 20px !important; height: 20px !important;" src="https://img.icons8.com/windows/64/000000/export-excel.png"/>
                        </button>
                    </div>
                    <hr>
                    <div class="span12">

                        <div class="widget-content nopadding" v-if="getterListeMarcheTableauBordFiltre">
                            <table class="table table-bordered table-striped" ref="table" id="loremTable" summary="lorem ipsum sit amet" rules="groups" frame="hsides" border="2">

                                <thead>
                                <tr>
                                    <th :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}">N° D'ORDRE</th>
                                    <th :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}">OBJET DU MARCHE </th>
                                    <th :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}">MONTANT PREVISIONNEL</th>
                                    <th :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}">DATE PREVISIONNELLE DE DEBUT</th>
                                    <th :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}">TEMPS ECOULES A JOUR  J</th>
                                    <th :style="{background: getColorByStatus(info_marche_status),fontSize:'15px'}">TEMPS EVALUE HORS DELAI</th>
<!--                                    <th>Action</th>-->
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="(item,index) in partition (getterListeMarcheTableauBordFiltre,size)[page]" :key="item.id">
                                   <td>{{index + 1}}</td>
                                    <td>{{item.objet}} </td>
                                    <td>{{formatageSomme(parseFloat(item.montant_marche))}}</td>
                                    <td>{{formatageSomme(parseFloat(montantApprouve(item.id)))}}</td>
                                    <td></td>
                                    <td></td>
<!--                                    <td>Action</td>-->
                                </tr>
                                </tbody>
                            </table>
                            <div class="pagination alternate" v-if="getterListeMarcheTableauBordFiltre">
                                <ul>
                                    <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                                    <li  v-for="(titre, index) in partition(getterListeMarcheTableauBordFiltre,size).length" :key="index" :class="{ active : active_el == index }">
                                        <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                                    <li :class="{ disabled : page == partition(getterListeMarcheTableauBordFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
</template>



<script>
    import { mapGetters} from "vuex";
    import {partition,formatageSomme} from '../../../Repositories/Repository'
    export default {

        name: "DetailAttentContratualisationHD",
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
                uri :'data:application/vnd.ms-excel;charset=UTF-8;base64,',
                template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
                format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
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
                        return "<font color='#fff'>En attente de contratualisation </font>"
                    }
                    if(status==8){
                        return "<font color='#fff'>En attente de contratualisation hors delait</font>"
                    }
                    if(status==1){
                        return "<font color='#fff'>En contratualisation</font>"
                    }
                    if(status==9){
                        return "<font color='#fff'>En contractualisation Hors délai</font>"
                    }

                    if(status==2){
                        return "<font color='#fff'>En execution</font>"
                    }
                    if(status==10){
                        return "<font color='#fff'>En execution Hors délai</font>"
                    }

                    if(status==11){
                        return "<font color='#fff'>Acheve dans le delais</font>"
                    }
                    if(status==12){
                        return "<font color='#fff'>Acheve hors delais</font>"
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
                        return "#d7b755 !important"
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
            generateReport () {
                this.$refs.html2Pdf.generatePdf()
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
            tableToExcel(table, name){
                if (!table.nodeType) table = this.$refs.table
                var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
                window.location.href = this.uri + this.base64(this.format(this.template, ctx))
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
        color: #fff !important;
        background-color: #892e6a !important;
    }

    .red_type_marche {
        color: #fff !important;
        background-color: #892e6a !important;
    }

</style>