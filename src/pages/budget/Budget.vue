<template>
    <div>
        <div class="container-fluid">





            <div class="widget-box">
                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
                    <h5>Liste des budgets importés </h5>
                    <!-- <div align="right">
                         Recherche:
                         <input type="search" placeholder v-model="search" />
                     </div>-->
                </div>

                <div class="">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab1">Budget importé</a></li>
                                <li class=""><a data-toggle="tab" href="#tab2">Importation du budget</a></li>
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                            <div id="tab1" class="tab-pane active">
                                <div class="widget-content nopadding" >
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th>Code budget</th>
                                            <th>Exercice budgétaire</th>
                                            <th>Statut</th>
                                            <th>Montant Global</th>
                                            <th>Variation</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="passation in getterBudgeCharge" :key="passation.id">


                                            <td v-if="passation.status=='init'" style="background-color: red; color:#fff">{{passation.code}}</td>
                                            <td v-else-if="passation.actived == 1 && passation.status=='actu' " style="background-color: green; color:#fff">{{passation.code}}</td>
                                            <td v-else-if="passation.actived == 0 && passation.status=='actu'"  >{{passation.code}}</td>

                                            <td v-if="passation.status=='init'" style="background-color: red; color:#fff">{{passation.exercice}}</td>
                                            <td v-else-if="passation.actived == 1 && passation.status=='actu' " style="background-color: green; color:#fff">{{passation.exercice}}</td>
                                            <td v-else-if="passation.actived == 0 && passation.status=='actu'"  >{{passation.exercice}}</td>


                                            <td v-if="passation.status=='init'" style="background-color: red; color:#fff"> Budget initiale  </td>
                                            <td v-else-if="passation.actived == 1 && passation.status=='actu' " style="background-color: green; color:#fff"> Budget actuelle  </td>
                                            <td v-else-if="passation.actived == 0 && passation.status=='actu'"   > Version {{passation.version}} </td>
                                            <!-- <span v-if="passation.status=='init'" class="label label-important">Budget initiale</span>
                                             <span  v-else-if="passation.actived == 1 && passation.status=='actu' " class="label label-success">Budget actuelle</span>

                                             <span v-else-if="passation.actived == 0 && passation.status=='actu'" class="label label-warning">Version {{passation.version}}</span>-->



                                            <td v-if="passation.status=='init'" style="background-color: red; color:#fff">{{formatageSomme(montantGlobale(passation.id))}}</td>
                                            <td v-else-if="passation.actived == 1 && passation.status=='actu' " style="background-color: green; color:#fff">{{formatageSomme(montantGlobale(passation.id))}}</td>
                                            <td v-else-if="passation.actived == 0 && passation.status=='actu'"  >{{formatageSomme(montantGlobale(passation.id))}}</td>


<td v-if="passation.status=='init'" style="background-color: red; color:#fff">{{formatageSomme(varition_bugetaire(passation.id))}} </td>
                                            <td v-else-if="passation.actived == 1 && passation.status=='actu' " style="background-color: green; color:#fff">{{formatageSomme(varition_bugetaire(passation.id))}}</td>
                                            <td v-else-if="passation.actived == 0 && passation.status=='actu'"  >{{formatageSomme(varition_bugetaire(passation.id))}}</td>

                                            <td v-if="passation.status=='init'" style="background-color: red; color:#fff"> <router-link :to="{ name: 'DetailBudgetImporte', params: { id: passation.id }}"
                                                                                                                                        class="btn btn-default " title="Detail marches">
                                                <span class=""><i class="icon-folder-open"></i></span>
                                            </router-link></td>
                                            <td v-else-if="passation.actived == 1 && passation.status=='actu' " style="background-color: green; color:#fff">
                                                <router-link :to="{ name: 'DetailBudgetImporte', params: { id: passation.id }}"
                                                             class="btn btn-default " title="Detail marches">
                                                    <span class=""><i class="icon-folder-open"></i></span>
                                                </router-link></td>
                                            <td v-else-if="passation.actived == 0 && passation.status=='actu'" > 
                                                <router-link :to="{ name: 'DetailBudgetImporte', params: { id: passation.id }}"
                                                                                                                              class="btn btn-default " title="Detail marches">
                                                <span class=""><i class="icon-folder-open"></i></span>
                                            </router-link></td>

                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="tab2" class="tab-pane">
                                    <input
                                            type="text"
                                            class="span"
                                            readonly
                                            :value="anneeAmort"
                                    />
                                <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
                                <hr>
                                <a align="right"
                                        @click.prevent="ajouterFichier"
                                        class="btn btn-primary"
                                        href="#"
                                      v-if="tableData.length"
                                >Importer</a>
                                <table class="table table-bordered table-striped" v-if="tableData.length">
                                    <thead>
                                    <tr>

                                        <th>SECTION</th>
                                        <th>PROGRAMME</th>
                                        <th>GRANDE NATURE DE DEPENSE</th>
                                        <th>UA </th>
                                        <th>ZONE </th>
                                        <th>ACTION</th>
                                        <th>ACTIVITE</th>
                                        <th>TYPE FINACEMENT</th>
                                        <th>SOURCE FINANCEMENT</th>
                                        <th>LIGNE</th>
                                        <th>DOTATION</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="data in tableData" :key="data.id">
                                        <td>{{data["SECTION"]}}</td>
                                        <td>{{data["PROGRAMME"]}}</td>
                                        <td>{{data["GRANDE NATURE DE DEPENSE"]}}</td>
                                        <td>{{data["UA"]}}</td>
                                        <td>{{data["ZONE"]}}</td>
                                        <td>{{data["ACTION"]}}</td>
                                        <td>{{data["ACTION"]}}</td>
                                        <td>{{data["TYPE FINANCEMENT"]}}</td>
                                        <td>{{data["SOURCE FINANCEMENT"]}}</td>
                                        <td>{{data["LIGNE"]}}</td>
                                        <td>{{data["DOTATION"]}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <hr>
                               <!-- <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
                                    <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
                                </el-table>-->
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div id="exampleModal" class="modal hide taillemodal">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Importation du budget</h3>
            </div>
            <div class="modal-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Importation de budge</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>Exercice budgetaire</td>
                        <td> <input
                                type="text"
                                class="span"
                                readonly
                                :value="anneeAmort"
                        /></td>
                    </tr>
                    <tr>
                        <td>Budget:</td>
                        <td><div class="controls">
                            <input type="file"   @change="OnchangeFichier" />
                        </div>
                            <img v-if="imagePDFDemandeAno" src="../../assets/excel.png" width="50" height="50">
                        </td>
                    </tr>
                    <!-- <tr>
                         <td> </td>
                         <td v-if="imagePDFDemandeAno"> </td>
                     </tr>-->
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <a
                        @click.prevent="ajouterFichier"
                        class="btn btn-primary"
                        href="#"

                >Importer</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

      <!--  <fab :actions="fabActions" @cache="afficherModalAjouterStock" main-icon="apps" bg-color="green"></fab>-->

        <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import { formatageSomme } from "../../Repositories/Repository";
    import UploadExcelComponent from '@/components/UploadExcel/index.vue'
    //import ProgressBar from "../component/ProgressBar"
    export default {
        name: 'budget',
        components:{
            UploadExcelComponent
        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                tableData: [],
                tableHeader: [],
                progress:0,
                bgWidth: '0%',
                bgHeight: '30px',
                exercice_budget:"",
                message_mandater:'',
                i:0,
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


            };
        },
        created() {

        },
        computed: {
            ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge"
            ]),
            ...mapGetters("parametreGenerauxAdministratif", [

                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires"
            ]),
            anneeAmort() {

                const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

                if (norme) {
                    let vM=this;
                    vM.exercice_budget=norme.annee;
                    return norme.annee;
                }
                return 0
            },
            varition_bugetaire(){
               return id=>{
                   if(id!=""){
                     let objet =this.getterBudgeCharge.find(item=>item.id==id)
                     
                     if(objet!="undefined"){
                          if(objet.status=="init"){
                              return 0;
                          }
                         if(objet.status=="actu"){
                           let ancien_version=objet.version - 1;
                          let encien_budjet=this.getterBudgeCharge.find(item=>item.version==ancien_version)
                            let montant_ancien_budget=this.montantGlobale(encien_budjet.id)
                            let montant_budget_actuel=this.montantGlobale(objet.id)

                            let variation=montant_budget_actuel-montant_ancien_budget;
                           // console.log(variation)
                              return variation;
                          }
                          
                     }

                   }
               }
            },
            montantGlobale(){
                return id =>{
                    if (id!="") {
                        let objet =this.getterBudgeCharge.find(item=>item.id==id)

                        let initialValue = 0;

                        if (objet!="undefined") {
                            return objet.budget_general.reduce(function (total, currentValue) {
                                return total + parseFloat(currentValue.Dotation_Initiale) ;
                            }, initialValue);
                        }
                    }


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
            formatageSomme:formatageSomme,
            OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                console.log(this.selectedFile)
                Array.from(files).forEach(file => this.addFichier(file));
            },
            beforeUpload(file) {
                const isLt1M = file.size / 1024 / 1024 < 1

                if (isLt1M) {
                    return true
                }

                this.$message({
                    message: 'Please do not upload files larger than 1m in size.',
                    type: 'warning'
                })
                return false
            },
            handleSuccess({ results, header }) {
               // console.log(results[0]["GRANDE NATURE DE DEPENSE"])
                this.tableData = results
                this.tableHeader = header
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
            afficherModalAjouterStock() {
                this.$("#exampleModal").modal({
                    backdrop: "static",
                    keyboard: false
                });
            },
            ajouterFichier(){
               /* const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('exercicebudget_id', this.exercice_budget);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }*/
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                let formData={
                    exercicebudget_id:this.exercice_budget,
                    dataExcel:this.tableData
                }

                this.i= this.i+10;
                this.bgWidth=this.i+"%"
                this.$("#exampleModal").modal('hide');
                this.ajouterBudgetCharge(formData,config).then(data=>{
                    console.log(data)
                    this.tableData=[]
                }).catch(erro=>{
                    console.log(erro)
                    this.getAllBudgetGeneral()
                    this.getAllUniteAdministrative()
                    // router.push({ path: 'budgetGenerals' })
                })

            },

        }
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
</style>
