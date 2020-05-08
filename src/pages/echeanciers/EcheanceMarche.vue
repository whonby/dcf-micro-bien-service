<template>
    <div>
        <div class="container-fluid">

            <notifications  />
            <div class="widget-box">
                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
                    <h5>Echeance Marche </h5>

                </div>

                <div class="widget-content nopadding" >
                    <div class="span6">
                        <table class="table table-bordered table-striped" v-if="marche">
                            <tr>
                                <td>Exercice</td>
                                <td >{{anneeAmort}}</td>
                            </tr>
                            <tr>
                                <td>Periode echeances</td>
                                <td >du {{marche.acte_effet_financiare[0].date_odre_service}} au {{marche.acte_effet_financiare[0].date_fin_exe}}</td>
                            </tr>

                            <tr style="background: #d63614 !important; color: white !important;">
                                <td>Montant du marche</td>
                                <td v-if="echeance(marche.id)">
                                    <b>  {{formatageSomme(parseFloat(marche.acte_effet_financiare[0].montant_act))}}</b>
                                </td>
                                <td v-else>0</td>
                            </tr>
                            <tr>
                                <td>Mode echeance</td>
                                <td v-if="echeance(marche.id)">{{echeance(marche.id).mode}}</td>
                                <td v-else>0</td>
                            </tr>
                            <tr>
                                <td>Nombre d'annee</td>
                                <td v-if="echeance(marche.id)">{{echeance(marche.id).nbr_annee}}</td>
                                <td v-else>0</td>
                            </tr>
                            <tr>
                                <td>Nombre de mois</td>
                                <td v-if="echeance(marche.id)">{{echeance(marche.id).nbr_moi}}</td>
                                <td v-else>0</td>
                            </tr>
                            <tr>
                                <td>Nombre de jour</td>
                                <td v-if="echeance(marche.id)">{{echeance(marche.id).nbr_jour}}</td>
                                <td v-else>0</td>
                            </tr>
                            <tr>
                                <td>Nombre d'echeances</td>
                                <td v-if="echeance(marche.id)">{{echeance(marche.id).nbr_echeance}}</td>
                                <td v-else>0</td>
                            </tr>

                            <tr style="background: green !important; color: white !important;">
                                <td>Montant  par echeances </td>
                                <td v-if="echeance(marche.id)">
                                    <b>{{formatageSomme(parseFloat(echeance(marche.id).montant_echeance))}}</b>
                             </td>
                                <td v-else>0</td>
                            </tr>
                        </table>
                    </div>
                    <div class="span5">

                        <div class="widget-box" v-if="!echeance(marche.id)">
                            <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                <h5>Programmation d'echeances</h5>
                            </div>
                            <div class="widget-content nopadding">
                                <form  class="form-horizontal">
                                    <div class="control-group">
                                        <label class="control-label">Montant marché</label>
                                        <div class="controls">
                                            <input type="text" class="span11" :value="marche.acte_effet_financiare[0].montant_act" placeholder="Montant du marche" disabled>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Mode echeances</label>
                                        <div class="controls">
                                            <select class="span11" v-model="formDataEcheance.mode">
                                                <option  ></option>
                                                <option value="mensuel" >Tous les mois (mensuel)</option>
                                                <option value="bi-mensuel" >Tous les 2 mois (bi-mensuel)</option>
                                                <option value="trimestre" >Tous les 3 mois trimestre)</option>
                                                <option value="semestre" >2 fois par an (semestre)</option>
                                                <option value="annuel" >1 fois par an (annuel)</option>
                                            </select>
                                           <!-- <input type="text" class="span11" placeholder="Last name">-->
                                        </div>
                                    </div>

                                    <div class="form-actions">
                                        <button type="submit"  @click.prevent="ajouterEcheance" class="btn btn-success">Appliquer</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="widget-box" v-if="echeance(marche.id)">
                            <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                <h5>Modification d'echeances</h5>
                            </div>
                            <div class="widget-content nopadding">
                                <form  class="form-horizontal">
                                    <div class="control-group">
                                        <label class="control-label">Montant marché</label>
                                        <div class="controls">
                                            <input type="text" class="span11" :value="marche.acte_effet_financiare[0].montant_act" placeholder="Montant du marche" disabled>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Montant par echeances</label>
                                        <div class="controls">
                                            <input type="text" class="span11" v-model="edite.montant_echeance" placeholder="Montant du marche" >
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Mode echeances</label>
                                        <div class="controls">
                                            <select class="span11" v-model="edite.mode">
                                                <option  ></option>
                                                <option value="mensuel" >Tous les mois (mensuel)</option>
                                                <option value="bi-mensuel" >Tous les 2 mois (bi-mensuel)</option>
                                                <option value="trimestre" >Tous les 3 mois trimestre)</option>
                                                <option value="semestre" >2 fois par an (semestre)</option>
                                                <option value="annuel" >1 fois par an (annuel)</option>
                                            </select>
                                            <!-- <input type="text" class="span11" placeholder="Last name">-->
                                        </div>
                                    </div>

                                    <div class="form-actions">
                                        <button type="submit"  @click.prevent="modification" class="btn btn-success">Modification</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import { formatageSomme } from "../../Repositories/Repository";
    //import ProgressBar from "../component/ProgressBar"
    export default {
        name: 'budget',
        props: ['marche'],
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
                formDataEcheance:{
                    marche_id:"",
                    exercice:"",
                    mode:"",
                    montant_marche:"",
                    date_odre_service:"",
                    date_fin_exe:""
                },
                edite:{
                    marche_id:"",
                    exercice:"",
                    mode:"",
                    montant_marche:"",
                    date_odre_service:"",
                    date_fin_exe:"",
                    id:"",
                    montant_echeance:""

                },
                detailBudget:"",
                budgetGeneralCharge:"",
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
this.getEdite()
        },
        computed: {
            ...mapGetters("bienService", ["getterEcheances","acteEffetFinanciers","getterActeEffetFinanciers"]),
            ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires"
            ]),
            echeance(){
                return marche_id=>{


                    return this.getterEcheances.find(marche=>marche.marche_id==marche_id)
                }
            },
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
            ...mapActions("bienService", [
               "getEcheances",
                "ajouterEcheances",
                "modifierEcheances",
                "supprimerEcheances"
            ]),
            formatageSomme:formatageSomme,
           ajouterEcheance(){
               this.formDataEcheance={
                       marche_id:this.marche.id,
                       exercice:this.anneeAmort,
                       montant_marche:this.marche.acte_effet_financiare[0].montant_act,
                       date_odre_service:this.marche.acte_effet_financiare[0].date_odre_service,
                       date_fin_exe:this.marche.acte_effet_financiare[0].date_fin_exe,
                   mode: this.formDataEcheance.mode
               }
               console.log(this.formDataEcheance)
               this.ajouterEcheances(this.formDataEcheance)
               this.getEdite()
           },
            modification(){
              /*  this.formDataEcheance={
                    marche_id:this.marche.id,
                    exercice:this.anneeAmort,
                    montant_marche:this.marche.acte_effet_financiare[0].montant_act,
                    date_odre_service:this.marche.acte_effet_financiare[0].date_odre_service,
                    date_fin_exe:this.marche.acte_effet_financiare[0].date_fin_exe,
                    mode: this.formDataEcheance.mode
                }
                console.log(this.formDataEcheance)*/
                this.modifierEcheances(this.edite)

            },
            getEdite(){
                let objet= this.getterEcheances.find(marche=>marche.marche_id==this.marche.id)
                if(objet!=undefined){

                    this.edite={
                        marche_id:objet.marche_id,
                        exercice:objet.exercice,
                        mode:objet.mode,
                        montant_marche:this.marche.acte_effet_financiare[0].montant_act,
                        date_odre_service:this.marche.acte_effet_financiare[0].date_odre_service,
                        date_fin_exe:this.marche.acte_effet_financiare[0].date_fin_exe,
                        id:objet.id,
                        montant_echeance:objet.montant_echeance

                    }
                }
            }

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
