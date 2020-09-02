
<template>
    <div>
        <notifications />
        <div class="container-fluid">
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div>
                    <download-excel
                      class="btn btn-success pull-right"
                      style="cursor:pointer;"
                     :fields="json_fields"
                      title="Liste des Lignes exemptées"
                     :data="getterligneExempter"
                      name="Liste des Lignes exemptées"
                    >
                <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
                </download-excel> 
               <div align="right" style="cursor:pointer;">
             <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
                </div> 

                    </div>


                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Liste des lignes exemptées</h5>
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
                                    <th>Code </th>
                                    <th>Libellé</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="odd gradeX" v-for="(item)  in partition (getterligneExempter,size)[page]" :key="item.id">
                                    <td >{{codeLigneExemptee(item.economique_id) || 'Non renseigné'}}</td>
                                    <td >{{LibelleLigneExemptee(item.economique_id) || 'Non renseigné'}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerLigneExempter(item.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>
                                        </div>

                                    </td>
                                </tr>
                                <tr v-if="getterligneExempter.length==0" align="right">
                                    <h6>Pas de donnée disponible</h6>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="pagination alternate">
                  <ul>
            <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
           <li  v-for="(titre, index) in partition(getterligneExempter,size).length" :key="index" :class="{ active : active_el == index }">
             <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
            <li :class="{ disabled : page == partition(getterligneExempter,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
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
                <h3>Ajouter ligne exemptée</h3>
            </div>
            <div class="modal-body">
                 <table class="table table-bordered table-striped">
                     <tr>
                         <td>
                              <div class="control-group">
                  <label class="control-label">Ligne exemptée</label>
                  <div class="controls">
                    
                    <select v-model="formData.economique_id" class="span5">
                      <option
                        v-for="Bgeneral in derniereNivoPlanBudgetaire"
                        :key="Bgeneral.id"
                        :value="Bgeneral.id"
                      >{{Bgeneral.code}}-{{Bgeneral.libelle}}</option>
                    </select>
                  </div>
                </div>
                         </td>
                     </tr>
                 </table>
                <!-- <form class="form-horizontal">
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
                </form> -->
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
                <h3>Modifier ligne exemptée</h3>
            </div>
            <div class="modal-body">
                  <table class="table table-bordered table-striped">
                     <tr>
                         <td>
                              <div class="control-group">
                  <label class="control-label">Ligne exemptée</label>
                  <div class="controls">
                    <select v-model="editTitre.economique_id" class="span4">
                      <option
                        v-for="Bgeneral in derniereNivoPlanBudgetaire"
                        :key="Bgeneral.id"
                        :value="Bgeneral.id"
                      >{{Bgeneral.code}}-{{Bgeneral.libelle}}</option>
                    </select>
                  </div>
                </div>
                         </td>
                     </tr>
                 </table>
                <!-- <form class="form-horizontal">
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
                </form> -->
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
     import {partition} from '../../../src/Repositories/Repository'
         import jsPDF from 'jspdf'
       import 'jspdf-autotable'
    export default {

        data() {
            return {

                 page:0,
                 size:10,
                 active_el:0,

                 json_fields: {
                  CODE: "code",
                 LIBELLE: "libelle"
                },


                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },
                ],
                search:"",
                liste:[],
                formData : {
                    economique_id: "",
                    
                },

                editTitre: {
                   economique_id: "",
                }

            };
        },

        created() {
            //  this.getTypeContrat()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['type_contrats']),
            ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "getterligneExempter",

            ]),
             ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
               lesClassDe3() { 
const isClassDe3 = (code) => code.charAt(0) == "2" || code.charAt(0) == "6"; 
return this.derniereNivoPlanBudgetaire.filter(x => isClassDe3(x.code));
 },
            // titreFiltres() {

            //     const searchTerm = this.search.toLowerCase();

            //     return this.getterligneExempter.filter((item) => {

            //             return item.code.toLowerCase().includes(searchTerm)
            //                 || item.libelle.toLowerCase().includes(searchTerm)


            //         }
            //     )

            // },
               codeLigneExemptee() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
     LibelleLigneExemptee() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getTypeContrat',"ajouterTypeContrat","supprimerTypeContrat","modifierTypeContrat"]),
            ...mapActions("uniteadministrative", [
                "ajouterLigneExempter",
                "modifierLigneExempter",
                "supprimerLigneExempter",
            ]),
         genererEnPdf(){
         var doc = new jsPDF()
        // doc.autoTable({ html: this.natures_sections })
        var data = this.getterligneExempter;
         doc.setFontSize(8)
        doc.text(78,10,"LISTE DES LIGNES EXEMPTEES")
        doc.autoTable(this.getColumns(),data)
       // doc.save('Type des actes de depenses.pdf')
      doc.output('save','Type des lignes exemptées.pdf');
      doc.output('dataurlnewwindow');
     return 0
     },
getColumns() {
    return [
        {   title: "CODE",dataKey: "code"},
        {    title: "LIBELLE", dataKey: "libelle"},
       
    ];
},


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





            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                var nouvelObjet = {
        ...this.formData,
         code: this.codeLigneExemptee(this.formData.economique_id),
         libelle: this.LibelleLigneExemptee(this.formData.economique_id)
       
      };
                this.ajouterLigneExempter(nouvelObjet)
                 this.$("#exampleModal").modal('hide');
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
                this.editTitre = this.getterligneExempter[index];

            },
            modifier(){
                 var nouvelObjet1 = {
        ...this.editTitre,
         code: this.codeLigneExemptee(this.editTitre.economique_id),
         libelle: this.LibelleLigneExemptee(this.editTitre.economique_id)
       
      };
                this.modifierLigneExempter(nouvelObjet1)
                // this.getTypeContrat()
            }

        }
    };
</script>

