<template>
    <div>
        <div class="container-fluid" >
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-file"></i> </span>
                            <h5>Modification du budget</h5>
                        </div>
                        <div class="widget-content nopadding">

                            <div class="widget-box">
                                <div class="widget-title">
                                    <ul class="nav nav-tabs">
                                        <li class="active"><a data-toggle="tab" href="#tab1">Liste Budget Modification</a></li>
                                        <li class=""><a data-toggle="tab" href="#tab2">Modification</a></li>
                                    </ul>
                                </div>
                                <div class="widget-content tab-content">
                                    <div id="tab1" class="tab-pane active">
                                        <p>And is full of waffle to It has multiple paragraphs and is full of waffle to pad out the comment. Usually, you just wish these sorts of comments would come to an end.multiple paragraphs and is full of waffle to pad out the comment. Usually, you just wish these sorts of comments would come to an end.multiple paragraphs and is full of waffle to pad out the comment. Usually, you just wish these sorts of comments would come to an end. </p>
                                    </div>
                                    <div id="tab2" class="tab-pane" style="height: 800px !important;">
                                       <table class="table">
                                           <tr>
                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Date act</label>
                                                       <div class="controls">
                                                           <input
                                                                   type="date"
                                                                   v-model="formData.date_act"
                                                                   class="span"

                                                           />
                                                       </div>
                                                   </div>
                                               </td>
                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Numero Act</label>
                                                       <div class="controls">
                                                           <input
                                                                   type="text"
                                                                   v-model="formData.numero_act"
                                                                   class="span"

                                                           />
                                                       </div>
                                                   </div>
                                               </td>

                                               <td>
                                                   <label>Ministère</label>
                                                   <model-list-select style="background-color: #fff;"
                                                                      class="wide"
                                                                      :list="sections"
                                                                      v-model="formData.section"
                                                                      option-value="id"
                                                                      option-text="nom_section"
                                                                      placeholder="Ministère"
                                                   >

                                                   </model-list-select>
                                               </td>

                                               <td>
                                                   <label>Grande nature</label>
                                                   <model-list-select style="background-color: #fff;"
                                                                      class="wide"
                                                                      :list="grandes_natures"
                                                                      v-model="grand_nature"
                                                                      option-value="id"
                                                                      option-text="libelle"
                                                                      placeholder="Grande nature depense"
                                                   >

                                                   </model-list-select>
                                               </td>
                                           </tr>
                                           <tr>
                                               <td>
                                                   <label>Unite Administrative</label>
                                                   <model-list-select style="background-color: #fff;"
                                                                      class="wide"
                                                                      :list="listeUniteAdminPasSection"
                                                                      v-model="ua_id"
                                                                      option-value="id"
                                                                      option-text="libelle"
                                                                      placeholder="Unite Administrative"
                                                   >

                                                   </model-list-select>
                                               </td>

                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Dotation initiale</label>
                                                       <div class="controls">
<!--                                                           <input-->
<!--                                                                   type="text"-->
<!--                                                                   v-model="formData.total_dotation_initial"-->
<!--                                                                   class="span"-->

<!--                                                           />-->
                                                           <money  v-model="formData.total_dotation_initial" readOnly></money>
                                                       </div>
                                                   </div>

                                               </td>
                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Total variation</label>
                                                       <div class="controls">
<!--                                                           <input-->
<!--                                                                   type="text"-->
<!--                                                                   v-model="formData.total_variation"-->
<!--                                                                   class="span"-->
<!--                                                           />-->
                                                           <money  v-model="formData.total_variation" readOnly></money>
                                                       </div>
                                                   </div>
                                               </td>
                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Total Dotation variable </label>
                                                       <div class="controls">
<!--                                                           <input-->
<!--                                                                   type="text"-->
<!--                                                                   v-model="formData.total_dotation_finale"-->
<!--                                                                   class="span"-->
<!--                                                           />-->
                                                           <money   v-model="formData.total_dotation_finale" readOnly></money>
                                                       </div>
                                                   </div>
                                               </td>
                                               <td></td>
                                           </tr>


                                       </table>


                                    </div>

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
    //import Loading from 'vue-loading-overlay';
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
        name: "TableauBordMarche",
        props:["sib"],
        components: {
         //   apexchart: VueApexCharts,
            ModelListSelect,
         //   Loading
            //  DraggableDiv
        },
        data() {
            return{

                isLoading: false,
                fullPage: false,
                controlleur_fin:"",
                status_marches:"",
                unite_administrative_id:"",
                infrastructure:"",
                type_marche:"",
                region:"",
                section:"",
                ua_id:"",
                grand_nature:"",
                formData:{
                    section:"",
                    date_act:"",
                    numero_act:"",
                    titre:"",
                    ua_id:"",
                    grande_nature_id:"",
                    total_dotation_initial:"",
                    total_variation:"",
                    total_dotation_finale:"",

                },
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
                dataPourcentage: [],
                chartOptions: {
                    chart: {
                        width: 380,
                        type: 'pie',
                    },
                    labels: ['A.Contra.', 'A.C.H.D', 'En Cont.', 'EN Contr.H.D', 'En Execution',"En Execution HD","Acheve Delais","Acheve H.D","En souffrance"],
                    colors:['#8ea9db', '#f4b084', '#92d04f',"#632990","#d7b755","#d36f2a","#00b04f","#757171","#ff0000"],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
            }

        },
        created(){
            console.log(this.listePlanBudgetGetataire)
        },
        computed: {
            ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "decomptefactures",
                "budgetGeneral"
            ]),
            ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques',
                'localisations_geographiques',"getterLocalisationGeoAll","getterInfrastrucure","exercices_budgetaires","sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures"]),
            ...mapGetters( 'parametreGenerauxBudgetaire', ["getterTousPlanBudgetaire"]),
            ...mapGetters("bienService", ['marches',"engagements","getMandatPersonnaliserVise",
                "getterImageMarche","acteEffetFinanciers","getActeEffetFinancierPersonnaliser45","typeMarches","avenants",]),
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

            listeUniteAdminPasSection(){
                if (this.formData.section!=""){
                    return this.filtre_unite_admin.filter(item=>item.section_id==this.formData.section)
                }
                return this.filtre_unite_admin
            },
            budgetInitialPasUa(){
                return (ua_id,grande)=>{

                    let objet=this.budgetGeneral.filter(item=>{
                        if(item.actived==1){
                            return item
                        }
                    })

                      if(ua_id!==""){

                          objet=objet.filter(item=>item.ua_id==ua_id)

                      }

                    if(grande!==""){
                     objet=objet.filter(item=>item.gdenature_id==grande)
                        console.log(objet)
                    }
                      let initeVal = 0;
                    let montant=objet.reduce(function (total, currentValue) {

                        return total + parseFloat(currentValue.Dotation_Initiale) ;
                    }, initeVal);
                    //console.log(montant)

                    return montant
                }
            },
            listePlanBudgetGetataire(){
                return this.getterTousPlanBudgetaire.filter(item=>item.parent!=null)
            }

        }
        ,
        methods:{
            ...mapActions("bienService", ["ajouterTableauBordFiltre","ajouterInfoTableauBordFiltre"]),

            formatageSomme:formatageSomme,




        },
        watch: {
            ua_id:function (val) {
               this.formData.ua_id=val
                this.formData.total_dotation_initial=this.budgetInitialPasUa(val,this.formData.grande_nature_id)
            },
            grand_nature:function (val) {
              this.formData.grande_nature_id=val
                this.formData.total_dotation_initial=this.budgetInitialPasUa(this.formData.ua_id,val)
            }
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