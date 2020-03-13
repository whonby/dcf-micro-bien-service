<template>
    <div>
        <div class="container-fluid">
            <notifications  />

            <div class="row-fluid">
                <div class="span2">
                    <!--<div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                            <h5>One third width <code>class=Span4</code></h5>
                        </div>
                        <div class="widget-content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                    </div>-->
                </div>
                <div class="span6">

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
                    <button  type="submit" class="btn btn-success" @click="ajouterFichier">Importer</button>
                  <!--  <hr>
                    <progress-bar :progress="progress"></progress-bar>-->
                <!--    <progress max="100" :value.prop="uploadPercentage"  v-bind:style="{ width: bgWidth, height: bgHeight }"></progress>-->
                   <!-- <div class="progress progress-striped progress-success">
                        <div class="bar" v-bind:style="{ width: bgWidth, height: bgHeight }"></div>
                    </div>-->

                </div>
                <div class="span2">

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
   //import ProgressBar from "../component/ProgressBar"
    export default {
        name: 'budget',
        components:{
            //ProgressBar
        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
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
                "uniteAdministratives"
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

                "getAllBudgetGeneral",
                "getAllHistoriqueBudgetGeneral"
            ]),

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
            ajouterFichier(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('exercicebudget_id', this.exercice_budget);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }


                this.i= this.i+10;
                this.bgWidth=this.i+"%"

               this.importBudget(formData,config).then(data=>{
                   console.log(data)
                   //this.getAllBudgetGeneral()
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
