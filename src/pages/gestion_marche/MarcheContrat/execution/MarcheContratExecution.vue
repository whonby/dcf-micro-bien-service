
<template>
    <div>


        <div class="container-fluid" >

            <div class="row-fluid">
                <div class="span12">
                    <download-excel
                            class="btn btn-default pull-right"
                            style="cursor:pointer;"
                            name="Liste des marches"
                            worksheet="liste des marches"
                            :fields = "json_fields"
                            title="Liste des marches"
                            :data="titreFiltres">
                        <i title="Exporter en excel" class="icon-table"></i>&nbsp; Exporter en excel
                    </download-excel>
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Liste des marches en execution
                                </h5>
                            <div align="right">
                                Search: <input type="text" v-model="search">

                            </div>

                        </div>

                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped" style="" v-if="marche_contrat_personnalise">
                                <thead>
                                <tr>
                                    <th>Objet </th>
                                    <th>Unite admin</th>
                                    <th>Exercice</th>
                                    <th>Prestataire</th>
                                    <th>Montant réel</th>
                                    <th>Date debut réel</th>
                                    <th>Date fin réel</th>
                                    <th>Etat</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="item in titreFiltres" :key="item.id">
                                    <td >{{item.objet || 'Non renseigné'}}</td>
                                    <td>{{item.uniteAdmin.libelle || 'Non renseigné'}}</td>
                                    <td>{{item.exerciceBudgetaire.annee || 'Non renseigné'}}</td>
                                    <td>{{ item.entreprise.raison_sociale || 'Non renseigné'}}</td>
                                    <td>{{ formatageSomme(parseFloat(item.montant_reel_ttc)) || 'Non renseigné'}}</td>
                                    <td>{{ formaterDate(item.date_ordre_demarrage) || "Non Renseigne"  }}</td>
                                    <td>{{formaterDate(item.date_livraison)  || "Non Renseigne" }}</td>
                                    <td>
                                        <button class="btn btn-warning" v-if="item.date_ordre_demarrage>compareDataToday">Non démarré</button>
                                        <button class="btn btn-success" v-else-if="item.date_ordre_demarrage<=compareDataToday && item.date_livraison>=compareDataToday">En cours d'excution</button>
                                        <button class="btn btn-danger" v-else-if="item.date_livraison<compareDataToday">Terminé</button>
                                    </td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="{ name: 'DetailMarcheExecution', params: { id: item.id }}" class="btn btn-default ">
                                                <span class=""><i class="icon-folder-open"></i></span>
                                            </router-link>

                                        </div>

                                    </td>
                                </tr>
                                <tr v-if="titreFiltres.length==0" align="right">
                                    <h6>Pas de donnée disponible</h6>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--
        <fab :actions="fabActions"
             main-icon="apps"
             @cache="afficherModalAjouterTitre"
             bg-color="green"

        ></fab>-->

        <!----- ajouter modal   ---->


        <div id="exampleModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter fonctions</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Code:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Libelle:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
                        </div>
                    </div>


                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="ajouterTitreLocal" class="btn btn-primary"
                   href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>

        <!----- fin modal  ajouter  ---->


        <!----- modifier modal debut  ---->

        <div id="modifierModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier un fonctions</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Code:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.code" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Libelle:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
                        </div>
                    </div>


                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="modifier()" class="btn btn-primary"
                   href="#">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>


        <!----- fin modifier modal  ---->




        <notifications />

    </div>

</template>

<script>
    import moment from "moment";
    //import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
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
                    // {
                    //     name: 'alertMe',
                    //     icon: 'add_alert'
                    // }
                ],
                sourceFinnancement:"",
                type_finnance:"",
                passation:"",
                decision:"",
                search:"",
                unite_admin:"",
                liste:[],
                formData : {
                    code: "",
                    libelle: ""
                },
                json_fields: {
                    'NOM marche': 'objet',
                    'Inputation': 'code_ligne_budgetaire',
                    'Activite': 'activite_id',
                    'Montant previsionnel': 'montant_previsionnel',
                    'Livrable prevue': 'livrable_prevu',
                    'Date demarage prevue': 'date_demarrage_prevue',
                    'Date fin execution prevue': 'date_fin_execution_prevue',
                    'Unite': 'uniteAdmin.libelle',
                    'Exercice': 'exerciceBudgetaire.annee',
                },
                editTitre: {
                    code: "",
                    libelle: ""
                },
                typeMarche:"",
                dataDecision:[
                    {
                        id:0,
                        libelle:"En cours de traitement"
                    }
                    ,
                    {
                       id:1,
                        libelle:"Valider"
                    }
                   ,
                    {
                        id:2,
                        libelle:"Difére"
                    }
                    ,
                    {
                        id:3,
                        libelle:"Réjéter"
                    }]
            };
        },

        created() {

            this.getMarcheContrat()
            this.getMarcheContratExecution()
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('gestionMarche', ['marche_contrat_personnalise',"mode_passations","etape_marches","type_marches","marche_finnance_personnalises","marche_contrat_en_execution_personnalise"]),
            ...mapGetters("parametreGenerauxSourceDeFinancement",["sources_financements","types_financements"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            titreFiltres() {
//
                const searchTerm = this.search.toLowerCase();
                 let ObjetMarcheExercice=this.marche_contrat_en_execution_personnalise.filter((idm)=>idm.exerciceBudgetaire.encours==1);
                return ObjetMarcheExercice.filter((item) => {
                        return item.objet.toLowerCase().includes(searchTerm)
                            || item.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
                            || item.exerciceBudgetaire.annee.toLowerCase().includes(searchTerm)
                            || item.entreprise.raison_sociale.toLowerCase().includes(searchTerm)
                    }
                )

            },
            compareDataToday(){
                const date = new Date();

                const today = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
                    '-' + date.getDate().toString().padStart(2, 0);
                return today
            }

        },
        methods: {
            // methode pour notre action
            ...mapActions('gestionMarche', ['supprimerMarcheContrat',"getMarcheContrat","getMarcheContratExecution"]),
            afficherModalAjouterTitre(){
                this.$router.push({ name: 'AjouterMarcheContrat' })
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterFonction(this.formData)
                this.formData = {
                    code: "",
                    libelle: ""
                }
            },

            searchForma(id_type_proced){
               // if (id_type_proced==null) return this.marche_contrat_personnalise
                this.marche_contrat_personnalise=this.marche_contrat_personnalise.filter( element=> element.modePassation.id == id_type_proced)

            },


// afficher modal
            afficherModalModifierTitre(index){

                this.$router.push({ name: 'EditeMarche', params: { id: index } })

            },
            modifier(){
                this.modifierFonction(this.editTitre)
                //this.getFonctions()
            },
            formatageSomme:formatageSomme,
            formaterDate(date) {
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
        },
        /*components:{
            ModelListSelect,

        },*/
    };
</script>

<style>
    .order-card {
        color: #fff;
    }

    .bg-c-blue {
        background: linear-gradient(45deg,#4099ff,#73b4ff);
    }

    .bg-c-green {
        background: linear-gradient(45deg, #4dab51,#59e0c5);
    }

    .bg-c-yellow {
        background: linear-gradient(45deg,#FFB64D,#ffcb80);
    }

    .bg-c-pink {
        background: linear-gradient(45deg,#FF5370,#ff869a);
    }


    .card {

        -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
        box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
        border: none;
        margin-bottom: 5px;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    .card .card-block {

    }

    .order-card i {
        font-size: 26px;
    }

    .f-left {
        float: left;
    }

    .f-right {
        float: right;
    }
</style>
