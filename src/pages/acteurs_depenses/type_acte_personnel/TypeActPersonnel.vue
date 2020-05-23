
<template>
    <div>
        <notifications />

 
        <!-- End Page Header -->
        <!-- Default Light Table -->
        <div class="container-fluid">
            <hr>
            <!--<button @click="download()">Exporte</button>-->
           <!-- <gr-data-table :columns="gridColumns">
            <tr>
            <td>Guei</td>
            <td>Roland</td>
            </tr>
            <tr>
            <td>NALL</td>
            <td>AMMMMM</td>
            </tr>
            </gr-data-table>-->
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                <div class="span6">
                    <span class="icon"> <i class="icon-th"></i> </span>
                 <h5>Liste  type acte  personnel</h5>
                </div>
                            <div class="span6">
                                <div align="right">
                                    Search: <input type="text" v-model="search">

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
                                    <th>Code</th>
                                    <th>Libellé</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="(titre, index) in partition(titreFiltres,size)[page] " :key="titre.id">
                                    <td  @dblclick="afficherModalModifierTitre(index)">{{titre.code || 'Non renseigné'}}</td>
                                    <td @dblclick="afficherModalModifierTitre(index)">{{titre.libelle || 'Non renseigné'}}</td>
                                    <td>

                                        <div class="btn-group">
                                            <button @click.prevent="supprimerTypeActPersonnel(titre.id)"  class="btn btn-danger ">
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

        ></fab>

        <!----- ajouter modal   ---->


        <div id="exampleModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter type acte  personnel</h3>
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
                        <label class="control-label">Libellé:</label>
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
                <h3>Modifier type acte personnel</h3>
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
         
        <!----- fin modifier modal  ---->
    </div>

</template>

<script>
    import jsPDF from 'jspdf'
    import html2canvas from "html2canvas"
   // import GrDataTable from '@/components/table_data/GrDataTable'
    import {mapGetters, mapActions} from 'vuex'
    import {partition} from "../../../Repositories/Repository"
    export default {
        components:{
            
           // GrDataTable
        },
        data() {
            return {
                gridColumns: ["name", "power"],
                active_el:0,
                page:0,
                size:10,
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
           // this.getTypeActPersonnel()

        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['type_acte_personnels']),

            titreFiltres() {

                const searchTerm = this.search.toLowerCase();
               //console.log(this.partition(this.type_acte_personnels,2)[1])
//console.log(this.type_acte_personnels)
                return this.type_acte_personnels.filter((item) => {

                        return item.code.toLowerCase().includes(searchTerm)
                            || item.libelle.toLowerCase().includes(searchTerm)


                    }
                )

            }

        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getTypeActPersonnel',"ajouterTypeActPersonnel","supprimerTypeActPersonnel","modifierTypeAct"]),

            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            createPDF () {
                let pdfName = 'test';
                var doc = new jsPDF();
                doc.text("Hello World", 10, 10);
                doc.save(pdfName + '.pdf');
            },
            download() {

                /** WITH CSS */
                var canvasElement = document.createElement('canvas');
                html2canvas(this.$refs.content, { canvas: canvasElement }).then(function (canvas) {
                    const img = canvas.toDataURL("image/jpeg", 0.8);
                    const doc = new jsPDF()
                    doc.addImage(img, 'JPEG', 5, 5, 200, 287)
                    doc.save('relatorio-remoto.pdf')
                });
            },// fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterTypeActPersonnel(this.formData)

                this.formData = {
                    code: "",
                    libelle: ""
                }
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
// afficher modal
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.type_acte_personnels[index];

            },
           modifier(){
                this.modifierTypeAct(this.editTitre)
               this.getTypeActPersonnel()
           }

        }
    };
</script>

