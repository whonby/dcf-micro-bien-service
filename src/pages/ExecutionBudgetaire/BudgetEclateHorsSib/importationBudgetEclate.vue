<template>
    <div>
        <div class="container-fluid">

            <notifications  />
            <div class="widget-box">
                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
                    <h5>Liste des plans de passation des marchés </h5>
                   <!-- <div align="right"
                        Recherche:
                        <input type="search" placeholder v-model="search" />
                    </div>-->
                </div>

                <div class="widget-content nopadding" >
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>Code</th>
                            <th>Libellé</th>
                            <th>Date d'importation</th>
                            <th>Exercice</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                      <tr v-for="passation in getBudgetEclateImporter" :key="passation.id">
                          <td>{{passation.code}}</td>
                          <td>{{passation.libelle}}</td>
                          <td>{{passation.exercice_budgetaire}}</td>
                          <td>{{passation.exercice_budgetaire}}</td>
                          <td>
                              <router-link :to="{ name: 'DetailPPM', params: { id: passation.code }}"
                                            class="btn btn-default " title="Detail marches">
                              <span class=""><i class="icon-folder-open"></i> Voir PPM</span>
                          </router-link>
                          </td>
                      </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>


        <div id="exampleModal" class="modal hide taillemodal">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter le plan de passation des marchés</h3>
            </div>
            <div class="modal-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Importation de PPM</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>
                        Unité administrative
                    </td>
                        <td>
                            <model-list-select style="background-color: rgb(255,255,255);"
                                               class="wide"
                                               :list="uniteAdministratives"
                                               v-model="unite_administrative_id"
                                               option-value="id"
                                               option-text="libelle"

                                               placeholder="Unité administrative"
                            >

                            </model-list-select>
                        </td>
                    </tr>
                    <tr>
                        <td>Exercice Budgétaire</td>
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
                            <img v-if="imagePDFDemandeAno" src="../../../assets/excel.png" width="50" height="50">
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
    //import ProgressBar from "./component/ProgressBar"
    import {  ModelListSelect } from 'vue-search-select'

    import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
        name: 'budget',
        components:{
            ModelListSelect,
            //UploadExecelComponent
        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                search:"",
                unite_administrative_id:"",
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
            ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
                "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
                "montantBudgetGeneral", ]),
            ...mapGetters("bienService", ["getBudgetEclateImporter"]),

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
            ...mapActions("bienService", [
                'ajoutergetBudgetEclateImporter',"getPlanPassationMarche","getMarche"
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
            afficherModalAjouterStock() {
                this.$("#exampleModal").modal({
                    backdrop: "static",
                    keyboard: false
                });
            },
            ajouterFichier(){
                let unite=this.uniteAdministratives.find(item=>item.id==this.unite_administrative_id)
                
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('exercicebudget_id', this.exercice_budget);
                formData.append('unite_administrative_id',this.unite_administrative_id)
                formData.append("libelle_unite_admin",unite.libelle)
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }

                this.$("#exampleModal").modal('hide');
                this.i= this.i+10;
                this.bgWidth=this.i+"%"

                this.ajoutergetBudgetEclateImporter(formData,config)

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

