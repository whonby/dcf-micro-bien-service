
<template>
    <div>

        <div class="container-fluid">
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Liste des controllers financier</h5>
                            <div align="right">
                                Search: <input type="text" v-model="search">

                            </div>

                        </div>

                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Nom et prenom </th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="(item, index) in listeCF" :key="item.id">
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.name || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.email || 'Non renseigné'}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerFonction(item.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

                                        </div>

                                    </td>
                                </tr>
                                <tr v-if="listeCF.length==0" align="right">
                                    <h6>Pas de donnée disponible</h6>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <fab :actions="fabActions"
             @cache="afficherModalAjouterTitre"
             main-icon="apps" bg-color="green"

        ></fab>

        <!----- ajouter modal   ---->


        <div id="exampleModal" class="modal hide taillModal">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter cf</h3>
            </div>
            <div class="modal-body">
                <table class="table table-bordered table-striped">
                    <tr>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls ">

                                   <!-- <input
                                            type="text"
                                            :value="anneeAmort"
                                            class="span"
                                            readonly
                                    />-->
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Refencence marché</label>
                                <div class="controls">
                                  <!--  <input
                                            type="text"
                                            v-model="formData.reference_marche"
                                            class="span"
                                            placeholder="Saisir la reference du marché"
                                    />-->
                                </div>
                            </div>
                        </td>
                        <td colspan="2">
                            <div class="control-group">
                                <label class="control-label">Objet marché</label>
                                <div class="controls">
            <!--  <textarea

                      v-model="formData.objet"
                      class="span5" rows="2"
                      placeholder="Saisir le text"
              ></textarea>-->
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <div class="control-group">
                                <label class="control-label" title="unite administrative">UA</label>
                                <div class="controls">
                                  <!--  <select v-model="formData.unite_administrative_id" class="span">
                                        <option v-for="plans in groupUa"
                                                :key="plans[0].id"
                                                :value="plans[0].afficheUA.id">{{plans[0].afficheUA.libelle}}</option>
                                    </select>-->
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Grand Nature</label>
                                <div class="controls">
                                   <!-- <select v-model="formData.gdenature_id" :readOnly="deverouGrandNature">
                                        <option
                                                v-for="gdeNature in groupgranNature"
                                                :key="gdeNature[0].id"
                                                :value="gdeNature[0].afficheGdeNature.id"
                                        >{{gdeNature[0].afficheGdeNature.libelle}}</option>
                                    </select>-->
                                </div>
                            </div>
                        </td>
                        <td>

                            <div class="control-group">
                                <label class="control-label">Activite</label>
                                <div class="controls">
                                <!--    <select v-model="formData.activite_id" :readOnly="deverouactivite">
                                        <option
                                                v-for="activite in activiteDynamiques(formData.unite_administrative_id)"
                                                :key="activite.id"
                                                :value="activite.afficheActivite.id"
                                        >{{activite.afficheActivite.code}} - {{activite.afficheActivite.libelle}}</option>
                                    </select>-->

                                </div>

                            </div>
                        </td>
                        <td>

                            <div class="control-group">
                                <label class="control-label">Classification Economique</label>
                                <div class="controls">
                                    <!--<select v-model="formData.economique_id" :readOnly="deveroueconomiq">
                                        <option
                                                v-for="eco in economiqueDynamiques(formData.unite_administrative_id)"
                                                :key="eco.id"
                                                :value="eco.afficheEconomique.id"
                                        >{{eco.afficheEconomique.code}} - {{eco.afficheEconomique.libelle}}</option>
                                    </select>-->
                                </div>

                            </div>
                        </td>


                    </tr>
                    <tr>
                        <td colspan=2>
                            <div class="control-group">
                                <label class="control-label">Imputation Budgetaire</label>
                                <div class="controls">
                                    <input
                                            type="text"

                                            class="span5"
                                            placeholder="Saisir le Imputation"
                                            readonly
                                    />
                                </div>
                            </div>
                        </td>

                        <!-- <td>
                           <div class="control-group">
                      <label class="control-label">Montant Imputations</label>
                      <div class="controls">
                        <input
                          type="text"
                          :value="MontatantImputationBudget"
                          class="span"

                         readonly
                        />
                      </div>
                    </div>
                        </td> -->


                        <td>

                            <div class="control-group">
                                <label class="control-label">Type marché</label>
                                <div class="controls">
                                   <!-- <select v-model="formData.type_marche_id" class="span">
                                        <option v-for="plans in typeMarches" :key="plans.id"
                                                :value="plans.id">{{plans.libelle}}</option>
                                    </select>-->
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Montant prévu</label>
                                <div class="controls">
                                    <input
                                            type="text"

                                            class="span"
                                            placeholder="Saisir le montant"

                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>



                        <!-- <td>
                          <div class="control-group">
                       <label class="control-label">Numero marché</label>
                       <div class="controls">
                         <input
                           type="text"
                           v-model="formData.numero_marche"
                           class="span"
                           placeholder="Saisir le libelle_type"
                         />
                       </div>
                     </div>
                         </td> -->
                        <td colspan="2">

                            <div class="control-group">
                                <label class="control-label">Type de procedure</label>
                                <div class="controls">
                                    <!--<select v-model="formData.typeappel_id" class="span4">
                                        <option v-for="plans in typeTypeProcedures" :key="plans.id"
                                                :value="plans.id">{{plans.libelle}}</option>
                                    </select>-->
                                </div>
                            </div>
                        </td>


                        <td colspan="">

                            <div class="control-group">
                                <label class="control-label">procedure passation</label>
                                <div class="controls">

                                    <!--<select v-model="formData.procedure_passation_id" class="span" :readOnly="deverouPassation">
                                        <option v-for="plans in procedurePassationDynamiques(formData.typeappel_id)" :key="plans.id"
                                                :value="plans.id">{{plans.libelle}}</option>
                                    </select>-->
                                </div>
                            </div>
                        </td>

                        <td>
                            <div class="control-group">
                                <label class="control-label">Livrable</label>
                                <div class="controls">
                                    <input
                                            type="text"

                                            class="span"
                                            placeholder="Saisir le livrable"
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>

                </table>
            </div>
            <div class="modal-footer">
                <a

                        class="btn btn-primary"
                        href="#"

                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

        <!----- fin modal  ajouter  ---->


        <!----- modifier modal debut  ---->

        <div id="modifierModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier fonctions</h3>
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
                        <label class="control-label">Libellé:</label>
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



    </div>

</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
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
                search:"",
                liste:[],
                formData : {
                    code: "",
                    libelle: ""
                },

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            // this.getFonctions()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
                "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
                "montantBudgetGeneral", ]),
            ...mapGetters('personnelUA', ['fonctions']),
            ...mapGetters('Utilisateurs', ['getterEntite',"getterModule","getterAutorisation","getterRole","getterUtilisateur"]),
            titreFiltres() {
                const searchTerm = this.search.toLowerCase();
                return this.fonctions.filter((item) => {
                        return item.code.toLowerCase().includes(searchTerm)
                            || item.libelle.toLowerCase().includes(searchTerm)

                    }
                )

            },
            listeCF(){
               const searchTerm = this.search.toLowerCase();
                let objetCF=this.getterUtilisateur.filter(item=>{
                    let objet=item.affectation.find(resultat=>resultat.role.code_role=="CF")
                    console.log(objet)
                    if (objet){
                        return item
                    }
                })
               // console.log(objetCF)
                return objetCF.filter((item) => {
                        return item.name.toLowerCase().includes(searchTerm)
                            || item.email.toLowerCase().includes(searchTerm)

                    }
                )
            }
        },
        methods: {
            // methode pour notre action
            ...mapActions("Utilisateurs",["getRole","getModule","getEntite","getAtorisation","getUtilisateur"]),
            ...mapActions('personnelUA', ['getFonctions',"ajouterFonction","supprimerFonction","modifierFonction"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterFonction(this.formData)
                this.formData = {
                    code: "",
                    libelle: ""
                }
            },
// afficher modal
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.fonctions[index];

            },
            modifier(){
                this.modifierFonction(this.editTitre)
                //this.getFonctions()
            }
        }
    };
</script>

<style scoped>
    .taillModal{
        width: 980px;
        /*position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);*/
    }
</style>
