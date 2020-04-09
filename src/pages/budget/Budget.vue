<template>
    <div>
        <div class="container-fluid">

            <notifications  />
            <div class="widget-box">
                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
                    <h5>Liste des budget importer </h5>
                    <!-- <div align="right">
                         Recherche:
                         <input type="search" placeholder v-model="search" />
                     </div>-->
                </div>

                <div class="widget-content nopadding" >
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>Code budget</th>
                            <th>Exercice budget</th>
                            <th>Status</th>
                           <th>Montant Global</th>
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


                            <td v-if="passation.status=='init'" style="background-color: red; color:#fff"> <router-link :to="{ name: 'DetailBudgetImporte', params: { id: passation.id }}"
                                                                                                                        class="btn btn-default " title="Detail marches">
                                <span class=""><i class="icon-folder-open"></i></span>
                            </router-link></td>
                            <td v-else-if="passation.actived == 1 && passation.status=='actu' " style="background-color: green; color:#fff">
                                <router-link :to="{ name: 'DetailBudgetImporte', params: { id: passation.id }}"
                                             class="btn btn-default " title="Detail marches">
                                    <span class=""><i class="icon-folder-open"></i></span>
                                </router-link></td>
                            <td v-else-if="passation.actived == 0 && passation.status=='actu'" > <router-link :to="{ name: 'DetailBudgetImporte', params: { id: passation.id }}"
                                                                                                                                                           class="btn btn-default " title="Detail marches">
                                <span class=""><i class="icon-folder-open"></i></span>
                            </router-link></td>

                        </tr>
                        </tbody>
                    </table>
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

        <fab :actions="fabActions" @cache="afficherModalAjouterStock" main-icon="apps" bg-color="green"></fab>

        <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import { formatageSomme } from "../../Repositories/Repository";
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
                this.$("#exampleModal").modal('hide');
                this.ajouterBudgetCharge(formData,config).then(data=>{
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
