<template>
    <div>
        <div class="container-fluid" style="margin-top: -20px">
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
                                        <li class="active"><a data-toggle="tab" href="#tab1">État du budget modifié</a></li>
                                        <li class=""><a data-toggle="tab" href="#tab2">Modification</a></li>
                                    </ul>
                                </div>
                                <div class="widget-content tab-content">
                                    <div id="tab1" class="tab-pane active">
                                        <div align="right">
                                            <button class="btn btn-default" @click="tableToExcel('table', 'Modfication')">
                                                Exporte Excel
                                            </button>
                                        </div>
                                        <table class="table table-bordered table-striped" ref="table" id="loremTable" summary="lorem ipsum sit amet" rules="groups" frame="hsides" border="2">
                                            <thead>
                                            <tr>
                                                <th>UA</th>
                                                <th>Activite</th>
                                                <th>Ligne</th>
                                                <th>Dotation AE Initial </th>
                                                <th>Dotation CP Initial</th>
                                                <th>Variation AE</th>
                                                <th>Variation CP</th>
                                                <th>Dotation Actuel AE</th>
                                                <th>Dotation Actuel CP</th>
                                                <th>Cumul AE</th>
                                                <th>Cumul CP</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="item in ListeBudgetUaModifier" :key="'LIS'+item.id">
                                                <td>{{uaBudget(item.ua_id)}}</td>
                                                <td>{{activiteBudget(item.activite_id)}}</td>
                                                <td>{{ligneBudget(item.economique_id)}}</td>
                                                <td>
                                                    {{formatageSomme(parseFloat(budgetInite(item.Dotation_Initiale,item.cumul_ae)))}}
                                                </td>
                                                <td>{{formatageSomme(parseFloat(budgetInite(item.cp,item.cumul_cp)))}}</td>
                                                <td>{{formatMoney(parseFloat(item.variation_ae))}}</td>
                                                <td>
                                                    {{formatMoney(parseFloat(item.varisation_cp))}}
                                                </td>
                                                <td>{{formatMoney(parseFloat(item.Dotation_Initiale))}}</td>
                                                <td>{{formatMoney(parseFloat(item.cp))}}</td>
                                                <td>{{formatMoney(parseFloat(item.cumul_ae))}}</td>
                                                <td>{{formatMoney(parseFloat(item.cumul_cp))}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="tab2" class="tab-pane" style="height: 1025px !important;">
                                       <div class="span">
                                           <div class="control-group">
                                               <label class="control-label">Type de modification</label>
                                               <select v-model="type_modification">
                                                   <option></option>
                                                   <option value="OUI">SOMME NULL</option>
                                                   <option value="NON">SOMME NON NULL</option>
                                               </select>
                                           </div>

                                       </div>
                                       <table class="table">
                                           <tr>
                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Date acte</label>
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
                                                       <label class="control-label">Numero Acte</label>
                                                       <div class="controls">
                                                           <input
                                                                   type="text"
                                                                   v-model="formData.numero_act"
                                                                   class="span"

                                                           />
                                                       </div>
                                                   </div>
                                                   <div class="control-group">
                                                       <label class="control-label">Fichier acte</label>
                                                       <input type="file"   @change="OnchangeFichier" />
                                                   </div>
                                               </td>
 <td>
                                                   <div class="control-group">
                  <label class="control-label">signataire de l’acte </label>
                  <div class="controls">
                    <select  class="span">
                      <option></option>
                    </select>
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
                                                   <label>Unité Administrative</label>
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
                                                   <label>Activité</label>
                                                   <model-list-select style="background-color: #fff;"
                                                                      class="wide"
                                                                      :list="listeActiviteUA(ua_id)"
                                                                      v-model="formData.activite_id"
                                                                      option-value="id"
                                                                      option-text="lib"
                                                                      placeholder="Activite"
                                                   >

                                                   </model-list-select>
                                               </td>
                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Dotation initiale AE</label>
                                                       <div class="controls">

                                                           <money  :value="activiteDotationInitialAE(ua_id,formData.activite_id)" readOnly></money>
                                                       </div>
                                                   </div>

                                               </td>
                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Dotation initiale CP</label>
                                                       <div class="controls">
                                                           <!--                                                           <input-->
                                                           <!--                                                                   type="text"-->
                                                           <!--                                                                   v-model="formData.total_dotation_initial"-->
                                                           <!--                                                                   class="span"-->

                                                           <!--                                                           />-->
                                                           <money  :value="activiteDotationInitialCP(ua_id,formData.activite_id)" readOnly></money>
                                                       </div>
                                                   </div>

                                               </td>
                                           </tr>
                                           <tr>
                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Total variation AE</label>
                                                       <div class="controls">
<!--                                                           <input-->
<!--                                                                   type="text"-->
<!--                                                                   v-model="formData.total_variation"-->
<!--                                                                   class="span"-->
<!--                                                           />-->
                                                           <money  :value="totalVariationAE" readOnly></money>
                                                       </div>
                                                   </div>
                                               </td>
                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Total variation CP</label>
                                                       <div class="controls">
                                                           <money  :value="totalVariationCP" readOnly></money>
                                                       </div>
                                                   </div>
                                               </td>
                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Total Dotation AE </label>
                                                       <div class="controls">
<!--                                                           <input-->
<!--                                                                   type="text"-->
<!--                                                                   v-model="formData.total_dotation_finale"-->
<!--                                                                   class="span"-->
<!--                                                           />-->
                                                           <money   :value="totalActiveDotationAE" readOnly></money>
                                                       </div>
                                                   </div>
                                               </td>
                                               <td>
                                                   <div class="control-group">
                                                       <label class="control-label">Total Dotation CP </label>
                                                       <div class="controls">
                                                           <!--                                                           <input-->
                                                           <!--                                                                   type="text"-->
                                                           <!--                                                                   v-model="formData.total_dotation_finale"-->
                                                           <!--                                                                   class="span"-->
                                                           <!--                                                           />-->
                                                           <money  :value="totalActiveDotationCP" readOnly></money>
                                                       </div>
                                                   </div>
                                               </td>

                                           </tr>

                                       </table>
                                        <table class="table" v-if="ligne_selectionne.length>0">
                                            <thead>
                                            <tr>
                                                <th>Ligne</th>
                                                <th>Dotation AE</th>
                                                <th>Dotation CP</th>
                                                <th>Variation AE</th>
                                                <th>Variation CP</th>
                                                <th>Dotation Final AE</th>
                                                <th>Dotation Final CP</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="item in ligne_selectionne" :key="'LO'+item.id">
                                                <td>{{item.libele_ligne}}</td>
                                                <td>{{formatMoney(parseFloat(item.dotationAE))}}</td>
                                                <td>
                                                    {{formatMoney(parseFloat(item.dotationCP))}}
                                                </td>
                                                <td>{{formatMoney(parseFloat(item.variationAE))}}

                                                </td>
                                                <td>{{formatMoney(parseFloat(item.variationCP))}}
                                                 </td>
                                                <td>{{formatMoney(parseFloat(item.dotationFinalae))}}
                                                    </td>
                                                <td>
                                                    {{formatMoney(parseFloat(item.dotationFinalcp))}}
                                                </td>
                                                <td> <button @click.prevent="supprimerLigne(item.ligne)"  class="btn btn-danger ">
                                                    <span class=""><i class="icon-trash">Supprimer</i></span></button></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <table class="table"> <tr>
                                            <td>
                                                <label>Ligne </label>
                                                <model-list-select style="background-color: #fff;"
                                                                   class="wide"
                                                                   :list="ligneActivite(ua_id,formData.activite_id)"
                                                                   v-model="formData.economique_id"
                                                                   option-value="id"
                                                                   option-text="lib"
                                                                   placeholder="Ligne"
                                                >

                                                </model-list-select>

                                                <div class="control-group">
                                                    <label class="control-label"></label>
                                                    <button class="btn btn-primary" @click="ajouterLigne(formData.economique_id)">Ajouter La ligne</button>
                                                </div>
                                            </td>

                                            <td>
                                                <div class="control-group">
                                                    <label class="control-label">Dotation AE</label>
                                                    <div class="controls">
                                                        <money  :value="ligneDotationInitialAE(ua_id,formData.activite_id,formData.economique_id)" readOnly></money>
                                                    </div>
                                                </div>

                                                <div class="control-group">
                                                    <label class="control-label">Dotation CP</label>
                                                    <div class="controls">
                                                        <money  :value="ligneDotationInitialCP(ua_id,formData.activite_id,formData.economique_id)" readOnly></money>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="control-group">
                                                    <label class="control-label">Varition AE </label>
                                                    <div class="controls">

                                                        <money   v-model="variation_ae" ></money>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Variation CP </label>
                                                    <div class="controls">

                                                        <money   v-model="variation_cp" ></money>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="control-group">
                                                    <label class="control-label">Dotation Finale AE </label>
                                                    <div class="controls">

                                                        <money   :value="dotationFinalAE" readOnly></money>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Dotation Finale CP </label>
                                                    <div class="controls">

                                                        <money   :value="dotationFinalCP" readOnly></money>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr></table>
<div align="center">
    <button class="btn btn-danger" @click="modificationBudget">Valider la modification</button>
</div>

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
                type_modification:"",
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
                ligne_selectionne:[],
                variation_ae:'',
                variation_cp:'',
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
                    activite_id:"",
                    economique_id:"",
                    date_modif:"",
                },
                uri :'data:application/vnd.ms-excel;charset=UTF-8;base64,',
                template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
                format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) },
                namePDF: "",
                uploadPercentage:0,
                fichierPDF: "",
                imagePDF:"",
                selectedFile:"",
                namePDFDemandeAno: "",
                fichierPDFDemandeAno: "",
                imagePDFDemandeAno:"",
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
           this.formData.date_modif=this.dateJour
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
            ...mapGetters( 'parametreGenerauxBudgetaire', ["getterTousPlanBudgetaire","getterTousActivite"]),
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

            dateJour() {
                let d = new Date(),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;

                return [year, month, day].join('-');
            },
            regions(){
                // console.log(this.localisations_geographiques.filter(item=>item.structure_localisation_geographique.niveau==2))
                return this.localisations_geographiques.filter(item=>{
                    if(item.longitude!=null && item.structure_localisation_geographique.niveau==2 ){
                        return item
                    }
                });
            },
            budgetUnitePasAdmin(){
               let vm=this;
               let connection=[]
                this.budgetGeneral.filter(item=>item.actived==1).forEach(function (val) {
                       let _objet=vm.filtre_unite_admin.find(item=>item.id==val.ua_id)
                    if(_objet!=undefined){
                        connection.push(val)
                    }
                    }
                )
                return connection
            },

            ListeBudgetUaModifier(){
               return this.budgetUnitePasAdmin.filter(item=>item.modifier==1)
            },
            uaBudget(){
              return ua_id=>{
                  if(ua_id){
                      let uniteAd=this.uniteAdministratives.find(item=>item.id==ua_id)
                      return uniteAd.libelle
                  }
                  return null
              }
            },
            activiteBudget(){
              return activite_id=>{
                  if(activite_id){
                     let objet =this.getterTousActivite.find(item=>item.id==activite_id)
                      if(objet!=undefined){
                       return objet.code+' '+objet.libelle
                      }
                  return null
                  }
                  return null
              }
            },
            budgetInite(){
                 return (montanTotal,cumul)=>{
                     return parseFloat(montanTotal) - parseFloat(cumul)
                 }
            },
            ligneBudget(){
                return economique_id=>{
                    if(economique_id){
                        let objet =this.getterTousPlanBudgetaire.find(item=>item.id==economique_id)
                        if(objet!=undefined){
                            return objet.code+' '+objet.libelle
                        }
                        return null
                    }
                    return null
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
            },
            budgetUniteAdmin(){
                return ua_id=>{
                    if(ua_id){
                        console.log(ua_id)
                       return this.budgetGeneral.filter(item=>{
                           if(item.	ua_id==ua_id && item.actived==1){
                               return item
                           }
                       })
                    }
                    return []
                }
            },

            listeActiviteUA(){
                return ua_id=>{
                    if(ua_id!=""){
                        let collection=[]
                        let vm=this
                        let objeBudget=this.budgetUniteAdmin(ua_id).filter(item=>item.gdenature_id==this.grand_nature)
                        objeBudget.forEach(function (val) {
                            let activite=vm.getterTousActivite.find(item=>item.id==val.activite_id)
                            let ob=collection.find(item=>item.id==val.activite_id)
                            if(ob==undefined){
                                let act={
                                    ...activite,
                                    lib:activite.code+" "+activite.libelle
                                }
                                collection.push(act)
                            }
                        })
                        return collection
                    }
                    return []
                }
            },
            ligneActivite(){
                return (ua_id,activite_id)=>{
                    if(ua_id!="" && activite_id!=""){
                        let collection=[]
                        let vm=this
                        let objeBudget=this.budgetUniteAdmin(ua_id)

                        let objet_activite=objeBudget.filter(item=>item.activite_id==activite_id)
                        objet_activite.forEach(function (val) {
                            let ligne=vm.getterTousPlanBudgetaire.find(item=>item.id==val.economique_id)
                            let ob=collection.find(item=>item.id==val.economique_id)
                            if(ob==undefined){
                                let act={
                                    ...ligne,
                                    lib:ligne.code+" "+ligne.libelle
                                }
                                collection.push(act)
                            }
                        })
                        return collection
                    }
                    return []
                }
            },

            activiteDotationInitialAE(){
                return (ua_id,activite_id)=>{
                    if(ua_id!="" && activite_id!=""){

                        let objeBudget=this.budgetUniteAdmin(ua_id)

                        let objet_activite=objeBudget.filter(item=>item.activite_id==activite_id)
                        let initeVal = 0;
                        let montant=objet_activite.reduce(function (total, currentValue) {

                            return total + parseFloat(currentValue.Dotation_Initiale) ;
                        }, initeVal);
                        return montant
                    }
                    return 0
                }
            },
            activiteDotationInitialCP(){
                return (ua_id,activite_id)=>{
                    if(ua_id!="" && activite_id!=""){

                        let objeBudget=this.budgetUniteAdmin(ua_id)

                        let objet_activite=objeBudget.filter(item=>item.activite_id==activite_id)
                        let initeVal = 0;
                        let montant=objet_activite.reduce(function (total, currentValue) {

                            return total + parseFloat(currentValue.cp) ;
                        }, initeVal);
                        return montant
                    }
                    return 0
                }
            },
            ligneDotationInitialAE(){
                return (ua_id,activite_id,economique_id)=>{
                    if(ua_id!="" && activite_id!=""){

                        let objeBudget=this.budgetUniteAdmin(ua_id)

                        let objet_activite=objeBudget.filter(item=>{
                            if(item.activite_id==activite_id && item.economique_id==economique_id){
                                return item
                            }
                        })
                        let initeVal = 0;
                        let montant=objet_activite.reduce(function (total, currentValue) {

                            return total + parseFloat(currentValue.Dotation_Initiale) ;
                        }, initeVal);
                        return montant
                    }
                    return 0
                }
            },
            ligneDotationInitialCP(){
                return (ua_id,activite_id,economique_id)=>{
                    if(ua_id!="" && activite_id!=""){

                        let objeBudget=this.budgetUniteAdmin(ua_id)

                        let objet_activite=objeBudget.filter(item=>{
                            if(item.activite_id==activite_id && item.economique_id==economique_id){
                                return item
                            }
                        })
                        let initeVal = 0;
                        let montant=objet_activite.reduce(function (total, currentValue) {

                            return total + parseFloat(currentValue.cp) ;
                        }, initeVal);
                        return montant
                    }
                    return 0
                }
            },
            dotationFinalAE(){
                let montant_ae=this.ligneDotationInitialAE(this.ua_id,this.formData.activite_id,this.formData.economique_id)
                let montant=parseFloat(montant_ae) + parseFloat(this.variation_ae)
                return montant
            },
            dotationFinalCP(){
                let montant_cp=this.ligneDotationInitialCP(this.ua_id,this.formData.activite_id,this.formData.economique_id)
                let montant=parseFloat(montant_cp) + parseFloat(this.variation_cp)
                return montant
            },

            totalVariationAE(){
                let initeVal=0
                let montantVariationAELigne=this.ligne_selectionne.reduce(function (total, currentValue) {
                    return total + parseFloat(currentValue.variationAE) ;
                }, initeVal);

                let montant=parseFloat(montantVariationAELigne) + parseFloat(this.variation_ae)
                return montant
            },
            totalVariationCP(){
                let initeVal=0
                let montantVariationAELigne=this.ligne_selectionne.reduce(function (total, currentValue) {
                    return total + parseFloat(currentValue.variationCP) ;
                }, initeVal);
                let montant=parseFloat(montantVariationAELigne) + parseFloat(this.variation_cp)
                return montant
            },
            totalActiveDotationAE(){
               let montant=parseFloat(this.activiteDotationInitialAE(this.ua_id,this.formData.activite_id)) + parseFloat(this.totalVariationAE)
           return montant
            },
            totalActiveDotationCP(){
                let montant=parseFloat(this.activiteDotationInitialCP(this.ua_id,this.formData.activite_id)) + parseFloat(this.totalVariationCP)
                return montant
            }

        }
        ,
        methods:{
            ...mapActions("bienService", ["ajouterTableauBordFiltre","ajouterInfoTableauBordFiltre"]),
            ...mapActions("uniteadministrative", [
                "modificationBudgetCharge"
            ]),
            formatageSomme:formatageSomme,

            ajouterLigne(id){
         //  console.log(id)
                if(this.type_modification==""){
                    this.$notify({
                        title: 'ERROR',
                        text: "Veuillez renseigne le type de modification",
                        type:"error"
                    })

                    return null
                }
                if (id==""){

                    this.$notify({
                        title: 'ERROR',
                        text: "Veuillez renseigne la ligne ",
                        type:"error"
                    })

                    return null
                }
                let ligne=this.getterTousPlanBudgetaire.find(item=>item.id==id)

                let obj_sele=this.ligne_selectionne.find(item=>item.ligne==id)
                if (obj_sele==undefined) {
                    let obje={
                        ligne:id,
                        libele_ligne:ligne.code+" "+ligne.libelle,
                        dotationAE:this.ligneDotationInitialAE(this.ua_id,this.formData.activite_id,this.formData.economique_id),
                        dotationCP:this.ligneDotationInitialCP(this.ua_id,this.formData.activite_id,this.formData.economique_id),
                        variationAE:parseFloat(this.variation_ae),
                        variationCP:parseFloat(this.variation_cp),
                        dotationFinalcp:this.dotationFinalCP,
                        dotationFinalae:this.dotationFinalAE,

                    }
                    this.ligne_selectionne.unshift(obje)
                    this.formData.economique_id=''
                    this.variation_ae=0
                    this.variation_cp=0
                    this.ua_id=""
                    this.$notify({
                        title: 'Success',
                        text: "Ligne ajouter",
                        type:"success"
                    })
                    return null
                }

                if(obj_sele!=undefined){
                    this.$notify({
                        title: 'ERROR',
                        text: obj_sele.libele_ligne+", à ete deja ajouter",
                        type:"error"
                    })

                    return null
                }
                this.$notify({
                    title: 'ERROR',
                    text: "une erreur c'est produit lors de l'ajouter ",
                    type:"error"
                })

                return null

            },
            supprimerLigne(id){
                this.ligne_selectionne=this.ligne_selectionne.filter(item=>item.ligne!=id)
            },

            modificationBudget(){
                if(this.type_modification==""){
                    this.$notify({
                        title: 'ERROR',
                        text: "Veuillez renseigne le type de modification",
                        type:"error"
                    })

                    return null
                }
                  if(this.ligne_selectionne.length<0){
                      this.$notify({
                          title: 'ERROR',
                          text: "Veuillez renseigne la ligne ",
                          type:"error"
                      })

                      return null
                  }
                //totalVariationAE

                if(this.type_modification=="OUI"){
                     if(this.totalVariationAE!=0 && this.totalVariationCP!=0){
                         this.$notify({
                             title: 'ERROR',
                             text: "Vous n'avez pas le droit d'effectuer la variation a somme non null ",
                             type:"error"
                         })

                         return null
                     }
                }

                if(this.type_modification=="NON"){
                    if(this.totalVariationAE==0 && this.totalVariationCP==0){
                        this.$notify({
                            title: 'ERROR',
                            text: "Vous n'avez pas le droit d'effectuer la variation a somme null ",
                            type:"error"
                        })

                        return null
                    }
                }

                if(this.formData.numero_act==""){
                    this.$notify({
                        title: 'ERROR',
                        text: "Veuillez renseigne le numero de l'act ",
                        type:"error"
                    })

                    return null
                }

                if(this.formData.date_act==""){
                    this.$notify({
                        title: 'ERROR',
                        text: "Veuillez renseigne la date de l'act ",
                        type:"error"
                    })

                    return null
                }

                if(this.type_modification==""){
                    this.$notify({
                        title: 'ERROR',
                        text: "Veuillez renseigne la date de l'act ",
                        type:"error"
                    })

                    return null
                }
                // const formData = new FormData();
                // formData.append('fichier', this.selectedFile, this.selectedFile.name);
                // formData.append('date_modif',this.formData.date_act);
                // formData.append('date_act',this.formData.date_act);
                // formData.append('numero_act',this.formData.numero_act)
                // for (var i = 0; i < this.ligne_selectionne.length; i++) {
                //     formData.append("budget_modification[]",this.ligne_selectionne[i])
                // }
let objet={
     ...this.formData,
    budget_modification:this.ligne_selectionne,
}
                console.log(objet)
                this.modificationBudgetCharge(objet);
                this.ligne_selectionne=[]
                this.formData.economique_id=''
                this.variation_ae=0
                this.variation_cp=0

                this.formData={
                    section:"",
                        date_act:"",
                        numero_act:"",
                        titre:"",
                        ua_id:"",
                        grande_nature_id:"",
                        total_dotation_initial:"",
                        total_variation:"",
                        total_dotation_finale:"",
                        activite_id:"",
                        economique_id:"",
                        date_modif:this.dateJour,
                }
            },
            OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                console.log(this.selectedFile)
                Array.from(files).forEach(file => this.addFichier(file));
            },
            addFichier(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDFDemandeAno = "pdf.png";
                    vm.namePDFDemandeAno = file.name;
                    vm.fichierPDFDemandeAno = e.target.result;
                };
                reader.readAsDataURL(file);
            }
            ,
            tableToExcel(table, name){
                if (!table.nodeType) table = this.$refs.table
                var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
                window.location.href = this.uri + this.base64(this.format(this.template, ctx))
            },
            formatMoney(amount, decimalCount = 0, decimal = ".", thousands = ".") {
                try {
                    decimalCount = Math.abs(decimalCount);
                    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                    const negativeSign = amount < 0 ? "-" : "";

                    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
                    let j = (i.length > 3) ? i.length % 3 : 0;

                    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "")+" F CFA";
                } catch (e) {
                    console.log(e)
                    return null
                }
            },


        },
        watch: {
            ua_id:function (val) {
               this.formData.ua_id=val
               // this.formData.total_dotation_initial=this.budgetInitialPasUa(val,this.formData.grande_nature_id)
            },
            grand_nature:function (val) {
              this.formData.grande_nature_id=val
               // this.formData.total_dotation_initial=this.budgetInitialPasUa(this.formData.ua_id,val)
            }
        },
    }
</script>

<style scoped>

    .inputGroup {
        background-color: #fff;
        display: block;
        margin: 5px 0;
        position: relative;

    }
    .inputGroup label {
        padding: 1px 10px;
        display: block;
        text-align: left;
        color: #3C454C;
        cursor: pointer;
        position: relative;
        z-index: 2;
        transition: color 200ms ease-in;
        overflow: hidden;
    }
    .inputGroup label:before {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        content: "";
        background-color: #5562eb;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale3d(1, 1, 1);
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        z-index: -1;
    }
    .inputGroup label:after {
        width: 23px;
        height: 23px;
        content: "";
        border: 2px solid #D1D7DC;
        background-color: #fff;
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
        background-repeat: no-repeat;
        background-position: 2px 3px;
        border-radius: 50%;
        z-index: 2;
        position: absolute;
        right: 50px;
        top: 55%;
        transform: translateY(-50%);
        cursor: pointer;
        transition: all 200ms ease-in;
    }
    .inputGroup input:checked ~ label {
        color: #fff;
    }
    .inputGroup input:checked ~ label:before {
        transform: translate(-50%, -50%) scale3d(70, 56, 1);
        opacity: 1;
    }
    .inputGroup input:checked ~ label:after {
        background-color: #54E0C7;
        border-color: #54E0C7;
    }
    .inputGroup input {
        width: 20px;
        height: 20px;
        order: 1;
        z-index: 2;
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        visibility: hidden;
    }

    .form {
        padding: 0 16px;
        max-width: 550px;
        margin: 50px auto;
        font-size: 18px;
        font-weight: 600;
        line-height: 36px;
    }
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
