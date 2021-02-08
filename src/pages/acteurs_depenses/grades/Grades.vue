
<template>
    <div>
        <notifications />
        <!-- End Page Header -->
        <!-- Default Light Table -->
        <div class="container-fluid">
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Liste des grades</h5>
                            <div align="right">
                                Recherche: <input type="text">

                            </div>

                        </div>

                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Code </th>
                                    <th>Libellé</th>
                                     <!-- <th>Echelons</th> -->
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="(item, index) in grades" :key="item.id">
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.code || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.libelle || 'Non renseigné'}}</td>
                                     <!-- <td @dblclick="afficherModalModifierTitre(index)">{{item.echellon_id || 'Non renseigné'}}</td> -->
                                    <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerGrades(item.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>

                                        </div>

                                    </td>
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
             bg-color="green"

        ></fab>

        <!----- ajouter modal   ---->


        <div id="exampleModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter grade</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                     <!-- <div class="control-group">
                        <label class="control-label">Echelons</label>
                        <div class="controls">
                            <select v-model="formData.echellon_id">
                                <option></option>
                                <option v-for="item in echellons" :key="item.id" :value="item.id">
                                    {{item.libelle}}
                                </option>
                            </select>
                        </div>
                    </div> -->

                    <div class="control-group">
                        <label class="control-label">Code:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Libellé:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libellé" />
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
                <h3>Modifier grade</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">

                     <!-- <div class="control-group">
                        <label class="control-label">Echelons</label>
                        <div class="controls">
                            <select v-model="editGrade.echellon_id">
                                <option></option>
                                <option v-for="item in echellons" :key="item.id" :value="item.id">
                                    {{item.libelle}}
                                </option>
                            </select>
                        </div>
                    </div> -->

                    <div class="control-group">
                        <label class="control-label">Code:</label>
                        <div class="controls">
                            <input type="text" v-model="editGrade.code" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Libelle:</label>
                        <div class="controls">
                            <input type="text" v-model="editGrade.libelle" class="span" placeholder="" />
                        </div>
                    </div>


                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="modifierGradeLocal(editGrade)" class="btn btn-primary"
                   href="#">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>


        <!----- fin modifier modal  ---->







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
                liste:[],
                formData : {
                    code: "",
                    libelle: "",
                    echellon_id:""
                },

                editGrade: {
                    code: "",
                    libelle: "",
                    echellon_id:""
                }

            };
        },

        created() {
           // this.getEchelons();
            //this.getGrades();
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['echellons',"grades"])

        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getEchelons',"getGrades","ajouterGrades","supprimerGrades", "modifierGrade"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterGrades(this.formData)
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
                this.editGrade = this.grades[index];

            },

            modifierGradeLocal(){
            
            this.modifierGrade(this.editGrade)
            this.$('#modifierModal').modal('hide');

            },
  

        }
    };
</script>

