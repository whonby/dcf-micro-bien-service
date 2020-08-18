
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
                            title="SituationMatrimoniale"
                            name ="SituationMatrimoniale"
                            worksheet = "Situation_Matrimoniale"
                          :data="situation_matrimonial">
     <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>
                               </download-excel>
        <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
       </div>
                   </div> <br>




                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Liste des situations matrimoniales</h5>
                            <div align="right">
                                Recherche: <input type="text" v-model="search">

                            </div>

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
                                <tr class="odd gradeX" v-for="(item, index) in situation_matrimonial" :key="item.id">
                                   
                                    <td @dblclick="afficherModalModifierTitre(index)">{{item.libelle || 'Non renseigné'}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerSituationMatrimonial(item.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

                                        </div>

                                    </td>
                                </tr>
                                <tr v-if="situation_matrimonial.length==0" align="center">
                                    <h6>Pas de donnée disponible</h6>
                                </tr>
                                </tbody>
                            </table>

                                    <div class="pagination alternate">
     <ul>
       <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
          <li  v-for="(titre, index) in partition(situation_matrimonial,size).length" :key="index" :class="{ active : active_el == index }">
          <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
       <li :class="{ disabled : page == partition(situation_matrimonial,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
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
                <h3>Ajouter situation matrimonial</h3>
            </div>
            <div class="modal-body">
                <table class="table table-bordered table-striped">
                   <tr>
                       <td>
 <div class="control-group">
                        <label class="control-label">Libellé:</label>
                        <div class="controls">
                            <input type="text" v-model="formData.libelle" class="span5" placeholder="" />
                        </div>
                    </div>

                       </td>
                   </tr>
                   

               </table>
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
                <h3>Modifier situation matrimonial</h3>
            </div>
            <div class="modal-body">
               <table class="table table-bordered table-striped">
                   <tr>
                       <td>
 <div class="control-group">
                        <label class="control-label">Libellé:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.libelle" class="span4" placeholder="" />
                        </div>
                    </div>

                       </td>
                   </tr>
                   

               </table>
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
            'libelle':'libelle'
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
                search:"",
                 liste:[],
                formData : {
                  
                    libelle: ""
                },

                editTitre: {
                    
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
            ...mapGetters('personnelUA', ['situation_matrimonial']),
            // situation_matrimonial() {

            //     const searchTerm = this.search.toLowerCase();

            //     return this.situation_matrimonial.filter((item) => {

            //             return 
            //                  item.libelle.toLowerCase().includes(searchTerm)


            //         }
            //     )

            // }
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getFonctions',"ajouterSituationMatrimonial","supprimerSituationMatrimonial","modifierSituationMatrimonial"]),

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
           var data = this.situation_matrimonial;
            doc.setFontSize(8)
            doc.text(75,10,"LISTE DES SITUATIONS MATRIMONIALES")
          doc.autoTable(this.getColumns(),data)
        doc.save('situation_matrimoniale.pdf')
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
                this.ajouterSituationMatrimonial(this.formData)
                this.formData = {
                    
                    libelle: ""
                }
            },
// afficher modal
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.situation_matrimonial[index];

            },
        modifier(){
            this.modifierSituationMatrimonial(this.editTitre)
            //this.getFonctions()
        }
        }
    };
</script>

