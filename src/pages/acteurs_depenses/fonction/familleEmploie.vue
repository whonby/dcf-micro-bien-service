
<template>
    <div>
        <notifications />


        <!-- End Page Header -->
        <!-- Default Light Table -->
        <div class="container-fluid">
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div>
                                <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des familles d'emploi"
                                              name ="Liste des familles d'emploi"
                                              worksheet = "familles d'emploi"
                                            :data="familleFiltre">
                       <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                 <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div> 
                                     </div> <br>
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Liste des Familles d'emplois </h5>
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

                        <div class="widget-content nopadding">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    
                                    <th style="width:90%">Libellé</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="item in partition(familleFiltre,size)[page]" :key="item.id">
                                   
                                    <td @dblclick="afficherModalModifierTitre(item.id)">{{item.libelle || 'Non renseigné'}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerFamilleFonction(item.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i>Supprimer</span></button>

                                        </div>

                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="pagination alternate">
                    <ul>
                <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                   <li  v-for="(titre, index) in partition(familleFiltre,size).length" :key="index" :class="{ active : active_el == index }">
                   <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                <li :class="{ disabled : page == partition(familleFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

              </ul>
           </div>
                </div>
            </div>
        </div>

        <fab :actions="fabActions"
             main-icon="apps"
             @cache="afficherModalAjouterTitre"
             bg-color="green"

        ></fab>

        <!----- ajouter modal   ---->


        <div id="exampleModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter la Famille d' emploi</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    
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
                <h3>Modifier la Famille d' emploi</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                   
                    <div class="control-group">
                        <label class="control-label">Libellé:</label>
                        <div class="controls">
                            <input type="text" v-model="editCategorieGrade.libelle" class="span" placeholder="" />
                        </div>
                    </div>


                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="modifierEchelonsLocal(editCategorieGrade)" class="btn btn-primary"
                   href="#">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>


        <!----- fin modifier modal  ---->







    </div>

</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
      import {partition} from '../../../../src/Repositories/Repository'
    import jsPDF from 'jspdf'
import 'jspdf-autotable'
    export default {

        data() {
            return {
                page:0,
                size:10,
                active_el:0,

                json_fields:{
                    LIBELLE:'libelle'
                },
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
                    
                    libelle: ""
                    
                },
                search:"",

                editCategorieGrade: {
                    
                    libelle: ""
                }

            };
        },

        created() {
            //this.getEchelons();
            //this.getClasses();
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['familleFonction']),

             familleFiltre() {

                const searchTerm = this.search.toLowerCase();

                return this.familleFonction.filter((item) => {

                        return item.libelle.toLowerCase().includes(searchTerm)
                       


                    }
                )

            }

        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ["ajouterFamilleFonction","supprimerFamilleFonction","modifierFamilleFonction"]),
           
           
           
           
                 // pagination
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

           
             genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.familleFonction;
    doc.setFontSize(8)
 doc.text(75,10,"LISTE DES FAMILLES DES EMPLOIS")
  doc.autoTable(this.getColumns(),data)
//doc.save('grande_nature_depense.pdf')
 doc.output('save','famille_emploi.pdf')
 doc.output('dataurlnewwindow')
return 0
},
getColumns() {
    return [
       
        {title: "LIBELLE", dataKey: "libelle"},
        
        
    ];
}, 
           
           
           
           
           afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                this.ajouterFamilleFonction(this.formData)
                this.formData = {
                   
                    libelle: ""
                }
            },
// afficher modal
            afficherModalModifierTitre(id){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editCategorieGrade = this.familleFonction.find(item => item.id==id);

            },


            modifierEchelonsLocal(){
                this.modifierFamilleFonction(this.editCategorieGrade)
                this.$('#modifierModal').modal('hide');
            },


        }
    };
</script>

