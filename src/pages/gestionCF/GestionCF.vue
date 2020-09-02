<template>
    <div>
        <notifications />


        <!-- End Page Header -->
        <!-- Default Light Table -->
        <div class="container-fluid">


            <div class="row-fluid">
                <div class="span12">          


                    
                    <div class="widget-box">
                        <div class="widget-title">
                            <div class="span6">
                                <span class="icon"> <i class="icon-th"></i> </span>
                                <h5>Liste des Contrôleurs Financiers</h5>
                            </div>
                            <div class="span6">
                                <div align="right">
                                    Recherche: <input type="text" v-model="search">

                                </div>
                            </div>
                            <div class="span4">
                                <br>
                                Afficher
                                <select name="pets" id="pet-select" v-model="size" class="span3">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                Entrer
                            </div>



                        </div>
                        <div class="widget-content nopadding" ref="content">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>


                                    <th>Matricule</th>
                                    <th>Nom et prénoms</th>
                                    <th>Email</th>
                                    <th>Rôle</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="titre in partition(titreFiltres,size)[page] " :key="titre.id">
                                    <td @dblclick="afficherModalModifierTitre(titre.id)">{{titre.matricule || 'Non renseigné'}}</td>
                                    <td  @dblclick="afficherModalModifierTitre(titre.id)">{{titre.name || 'Non renseigné'}}</td>
                                    <td  @dblclick="afficherModalModifierTitre(titre.id)">{{titre.email || 'Non renseigné'}}</td>
                                    <td  @dblclick="afficherModalModifierTitre(titre.id)" v-if="titre.user_role.role.code_role=='DCF'">Directeur du contrôle financier</td>
                                    <td  @dblclick="afficherModalModifierTitre(titre.id)" v-if="titre.user_role.role.code_role=='CF'">Contrôleur financier</td>
                                    <td>
                                        <router-link :to="{ name: 'DetailCF', params: { id: titre.id }}"
                                                     class="btn btn-default " title="Detail CF">
                                            <span class=""><i class=" icon-folder-open"></i></span>
                                        </router-link>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerUtilisateur(titre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="titreFiltres.length==0" align="right">
                                    <h6>Pas de donnée disponible</h6>
                                </tr>
                                </tbody>
                            </table>
                            <div class="pagination alternate">
                                <ul>
                                    <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                                    <li  v-for="(titre, index) in partition(titreFiltres,size).length" :key="index" :class="{ active : active_el == index }">
                                        <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                                    <li :class="{ disabled : page == partition(titreFiltres,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <fab :actions="fabActions"
             @cache="afficherModalAjouterTitre"
             bg-color="green"
             main-icon="apps"
        ></fab>

        <!----- ajouter modal   ---->


        <div id="exampleModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>AJOUTER UN NOUVEAU CONTROLEUR FINANCIER</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Matricule:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.matricule" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Nom et prénom:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.name" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Email:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.email" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Rôle</label>
                        <div class="controls">
                            <select v-model="formData.role_id">
                                <option></option>
                                <option v-for="item in filterRole('DCF')" :key="item.id" :value="item.id" >
                                    {{item.libelle}}
                                </option>

                            </select>
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="ajouterCF" class="btn btn-primary"
                   href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>

        <!----- fin modal  ajouter  ---->



        <!----- modifier modal debut  ---->

        <div id="modifierModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification du contrôleur financier</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Matricule:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.matricule" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Nom et prénom:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.name" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Email:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.email" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group" v-if="editTitre.user_role">
                        <label class="control-label">Rôle</label>
                        <div class="controls">
                            <select v-model="editTitre.user_role.role_id">
                                <option></option>
                                <option v-for="item in filterRole('DCF')" :key="item.id" :value="item.id">
                                    {{item.libelle}}
                                </option>

                            </select>
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
    </div>
</template>


<script>
    import { mapGetters, mapActions } from "vuex";
    import { formatageSomme } from "../../Repositories/Repository";
    import {partition} from "../../Repositories/Repository"
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
                search:"",
                active_el:0,
                page:0,
                size:10,
                formData:{
                    email:"",
                    name:"",
                    role_id:"",
                    matricule:""
                },
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
                editTitre: {
                    email:"",
                    name:"",
                    role_id:"",
                    matricule:"",
                    user_role:""
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
          //  this.getEdite()
            console.log(this.getterUtilisateur)
            console.log(".....Liste cf.....")
            console.log(this.getterRoles)

        },
        computed: {
            ...mapGetters("Utilisateurs", ["getterUtilisateur","getterRoles"]),

            titreFiltres(){
                const searchTerm = this.search.toLowerCase();
                let controler=this.getterUtilisateur.filter(item=>{
                    if(item.user_role){
                        if (item.user_role.role.code_role=="DCF" || item.user_role.role.code_role=="CF"){
                            return item
                        }
                    }
                })
              return controler.filter((item) => {

                      return item.matricule.toLowerCase().includes(searchTerm)
                          || item.name.toLowerCase().includes(searchTerm)
                  }
              )
            },

          filterRole(){
                return code=>{

                    let controler=this.getterUtilisateur.find(item=>{
                        if(item.user_role){
                            if (item.user_role.role.code_role=="DCF" ){
                                return item
                            }
                        }
                    })

                    if (controler){
                        if (controler.user_role.role.code_role==code){
                            return this.getterRoles.filter(item=>{
                                if(item.code_role=="CF"){
                                    return item
                                }
                            })
                        }else {
                            return   this.getterRoles.filter(item=>{
                                if(item.code_role=="DCF" ||item.code_role=="CF"){
                                    return item
                                }
                            })
                        }
                    }else{
                        return this.getterRoles.filter(item=>{
                            if(item.code_role=="DCF" ||item.code_role=="CF"){
                                return item
                            }
                        })
                    }

                }

          }

        },
        methods: {
            ...mapActions('Utilisateurs', ['getUtilisateurs',"getRoles","modifierUtilisateur","supprimerUtilisateur","ajouterUtilisateur"]),
            ...mapActions("bienService", [
                "getEcheances",
                "ajouterEcheances",
                "modifierEcheances",
                "supprimerEcheances"
            ]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            ajouterCF(){
                this.ajouterUtilisateur(this.formData)
                this.$('#exampleModal').modal('hide');
            },
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.getterUtilisateur.find(item=>item.id==index);

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
           verifieDCFExiste(code){
               let controler=this.getterUtilisateur.find(item=>{
                   if(item.user_role){
                       if (item.user_role.role.code_role=="DCF" ){
                           return item
                       }
                   }
               })

               if (controler){
                   if (controler.user_role.role.code_role==code){
                       return false
                   }else {
                     return   true
                   }
               }else{
                   return true
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
