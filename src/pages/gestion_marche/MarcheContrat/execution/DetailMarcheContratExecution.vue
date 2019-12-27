<template>
    <div>
        <notifications />
        <div class="quick-actions_homepage" >
            <ul class="quick-actions">
                <li class="bg_lo span3"> <a href="#" v-if="detailMarcheExecute">
                    <h4>
                    {{ formatageSomme(parseFloat(detailMarcheExecute.montant_reel_ttc)) || 'Non renseigné'}}
                </h4>  Montant de démarrage</a> </li>
                <li class="bg_lg span3"> <a href="#"> <i class="icon-ok"></i> Montant avec avenant</a> </li>
                <li class="bg_ly span3"> <a href="#"> <i class="icon-pencil"></i> Le marché a ete difére </a> </li>

            </ul>
        </div>
        <div class="container-fluid" >
            <div class="row-fluid">
                <div class="span4"></div>
                </div>
            <div class="row-fluid">
                <div class="span12" >
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab1">Information sur le marche</a></li>
                                <li class=""><a data-toggle="tab" href="#tab2">Liste des decomptes</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Liste des avenants</a></li>
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                            <div id="tab1" class="tab-pane active">
                                <div class="row-fluid" style="margin: 0px">
                                    <div class="span4">
                                        <div class="widget-box">
                                            <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                <h5>Information du marche</h5>
                                            </div>
                                            <div class="widget-content">
                                                <table class="table  table-invoice" v-if="detailMarcheExecute">
                                                    <tbody>
                                                    <tr>
                                                        <td class="width20">Etat :</td>
                                                        <td class="width80">
                                                            <button class="btn btn-warning" v-if="detailMarcheExecute.date_ordre_demarrage>compareDataToday">Non démarré</button>
                                                            <button class="btn btn-success" v-else-if="detailMarcheExecute.date_ordre_demarrage<=compareDataToday && item.date_livraison>=compareDataToday">En cours d'excution</button>
                                                            <button class="btn btn-danger"  v-else-if="detailMarcheExecute.date_livraison<compareDataToday">Terminé</button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="width20">Numero de marche :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.numero_marche}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Objet de marche :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.objet}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Type de marche:</td>
                                                        <td><strong>{{detailMarcheExecute.type_marche.libelle}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date debut && fin:</td>
                                                        <td><strong>{{formaterDate(detailMarcheExecute.date_ordre_demarrage)  || "Non Renseigne" }} && {{formaterDate(detailMarcheExecute.date_livraison)  || "Non Renseigne" }}</strong></td>
                                                    </tr>
                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="span4">
                                        <div class="widget-box">
                                            <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                <h5>Information du prestataire</h5>
                                            </div>
                                            <div class="widget-content">
                                                <table class="table  table-invoice" v-if="detailMarcheExecute">
                                                    <tbody>
                                                    <tr>
                                                        <td class="width20">Raison social :</td>
                                                        <td class="width80">
                                                            {{detailMarcheExecute.entreprise.raison_sociale}}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Sigle :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.sigle}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Numero compte contribuable:</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.numero_cc}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Numero registre de commerce:</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.numero_rc}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Forme juridique :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.forme_juridique}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Email :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.email}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Telephone :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.telephone}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Adresse :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.adresse}}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Banque :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.entreprise.banque}}</strong></td>
                                                    </tr>

                                                    </tbody>

                                                </table> </div>
                                        </div>
                                    </div>
                                    <div class="span4">
                                        <div class="widget-box">
                                            <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                                <h5>Information de l'unite administrative</h5>
                                            </div>
                                            <div class="widget-content">
                                                <table class="table  table-invoice" v-if="detailMarcheExecute">
                                                    <tbody>
                                                    <tr>
                                                        <td class="width20">Code unite administrative :</td>
                                                        <td class="width80">
                                                            {{detailMarcheExecute.entreprise.code}}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="width20">Nom unite administrative :</td>
                                                        <td class="width80"><strong>{{detailMarcheExecute.uniteAdmin.libelle}}</strong></td>
                                                    </tr>

                                                    </tbody>

                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab2" class="tab-pane">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
                                        <h5>Liste des decomptes</h5>
                                    </div>
                                    <div class="widget-content">

                                    </div>
                                </div>
                            </div>
                            <div id="tab3" class="tab-pane">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Liste des avenants</h5>
                                    </div>
                                    <div class="widget-content nopadding">
                                        444444
                                    </div>
                                </div>
                            </div>
                            <div id="tab4" class="tab-pane">

                               <div class="row-fluid">
                                   5555
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
    import moment from "moment";
    //import {  ModelListSelect } from 'vue-search-select'
   // import 'vue-search-select/dist/VueSearchSelect.css'
    import {mapGetters, mapActions} from 'vuex'
    import {formatageSomme} from "../../../../vuex/modules/guei/Repositories/Repository"
    export default {
        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },
                ],
                acteur_id:"",
                fin_contra:{
                    date_fin_contrat:"",
                    id:""
                },
                interruption_systeme:{
                    date_interuption:"",
                    id:""
                },
                ajouter:true,
                selectedFile:"",
                selectedImage:"",
                image: "",
                imagePDF: "",
                namePDF: "",
                fichierPDF: "",
                date_arrivee_act_nomination:"",
                info_img:false,
                info_pdf:false,
                liste:[],
                nbr:"",
                forma:"",
                compareDate:false,
                formData : {
                    etapes_marche_id:"",
                    marche_contrat_id:"",
                    date_presence:"",
                    user_id:"",
                    observation:"",
                    decision:"",
                    motif:""
                },
                attributionMarche:{
                    numero_marche:"",
                    livrable_definitif:"",
                    date_signature:"",
                    date_approbation:"",
                    entreprise_id:"",
                    date_ordre_demarrage:"",
                    date_livraison:"",
                    delai_execution_reel:"",
                    tva:"",
                    montant_ht:"",
                    montant_tva:"",
                    montant_reel_ttc:"",
                    id:""
                }
                ,
                marche_finnancement:{
                    montant_prevue:"",
                    sources_financement_id:"",
                    types_financement_id:"",
                    marche_contrat_id:""
                },
                document_presence:{
                    code:"",
                    libelle:"",
                    type_docuement_id:"",
                    presence_cf_id:"",
                },
                conges:{
                    code: "",
                    type_conge: "",
                    date_debut: "",
                    date_fin: "",
                    acte_personnel_id: "",
                },
                editTitre: {
                    code: "",
                    libelle: ""
                },
                temp_moyen_testFI:"",
                detailMarcheExecute:""
            };
        },
        created() {

            this.marche_id=this.$route.params.id;
            this.detailMarcheExecute=this.marche_contrat_en_execution_personnalise.find(marche=>marche.id===this.marche_id);
            console.log(this.detailMarcheExecute)

        },
        watch: {
            delaiLivraison: {
                deep: true,
                handler: function (newVal) {
                    this.attributionMarche.delai_execution_reel = newVal
                }
            }
        },
        computed: {
            ...mapGetters("gestionMarche", ["detail_marche_contrat","presence_cf_marche","etape_marches",
                "decision_marche_cf","document_presence_by_marche","entreprises","deatil_marche_back_end","detail_marche_finance","marche_contrat_personnalise","marche_contrat_en_execution_personnalise"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
            ...mapGetters("parametreGenerauxSourceDeFinancement",["sources_financements","types_financements"]),


            getDatelivrason(){
                return !this.attributionMarche.date_ordre_demarrage !=""
            },
    compareDataToday(){
    const date = new Date();

    const today = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
        '-' + date.getDate().toString().padStart(2, 0);
    return today
       }
        ,
            delaiLivraison(){
              let durre=0;
                if (this.attributionMarche.date_ordre_demarrage!="" &&this.attributionMarche.date_livraison!=""){
                    let date_demarageTable=this.attributionMarche.date_ordre_demarrage.split("-")
                    let date_livraisoTable=this.attributionMarche.date_livraison.split("-")

                    let date01=date_demarageTable[1]+"/"+date_demarageTable[2]+"/"+date_demarageTable[0]
                    let date02=date_livraisoTable[1]+"/"+date_livraisoTable[2]+"/"+date_livraisoTable[0]
                    //  console.log(date01)
                    let date1 = new Date(date01);
                    let date2 = new Date(date02);
                    let diffTime = Math.abs(date2 - date1);
                    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    if (diffDays===0){

                        durre=1

                    } else{

                        durre=diffDays +1

                    }


                }
                return durre

            }

        },
        methods: {

            ...mapActions('gestionMarche', ['ajouterMarcheContrat',"detailMarcheContrat","marchePresenceCf",
                "ajouterDocumentPresence","supprimerPresenceCF","ajouterPresenceCF","getDecisionMarche",
                "getDocumentByPresenceOfMarche","supprimeDocumentPresenceCF",
                "modifierMarcheContrat","detailMarcheBack_end","ajouterSourceFinnancementByMarche",
                "supprimerSourceFinnancementByMarche","modifierSourceFinnancementByMarche","detailMarcheFinnance"]),

            formatageSomme:formatageSomme,
           formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
        },
            genere(){
                this.forma=this.nbr;
            }
        }
        ,
       /* components:{
            ModelListSelect,

        },*/
    };
</script>
<style scoped>

</style>
