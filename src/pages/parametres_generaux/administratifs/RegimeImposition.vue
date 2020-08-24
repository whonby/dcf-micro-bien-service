
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div>

                                     <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Listes Regimes Impositions "
                                              name ="Listes Regimes Impositions"
                                              worksheet = "Regime Impositions"
                                            :data="tableRegimesImpositions">
                   <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 

                     <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div>
                                     </div> <br>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Regimes d'impositions</h5>
              <div align="right">
                Recherche:
                <input type="text" v-model="search" />
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
                    <th>Libellé</th>
                     <th style="width:10%">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(titre, index) in  partition (tableRegimesImpositions,size)[page]"
                    :key="titre.id"
                  >
                    <td
                      @dblclick="afficherModalModifierTitre(index)"
                    >{{titre.libelle || 'Non renseigné'}}</td>
                    <td>
                      <div class="btn-group">
                        <button
                          @click.prevent="supprimerRegimeImpositions(titre.id)"
                          class="btn btn-danger"
                        >
                          <span class>
                            <i class="icon-trash"></i>
                          </span>
                        </button>
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
                        <li  v-for="(titre, index) in partition(getterregimeImpositions,size).length" :key="index" :class="{ active : active_el == index }">
                            <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                        <li :class="{ disabled : page == partition(getterregimeImpositions,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                    </ul>
                </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
<notifications  />
    <!----- ajouter modal   ---->

    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Forme juridique</h3>
      </div>
      <div class="modal-body">
           <table class="table table-bordered table-striped">
          
            <tr>
              <td>
                  <div class="control-group">
            <label class="control-label">Libelle:</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span5"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
              </td>
            </tr>
           </table>
        
      </div>
      <div class="modal-footer">
        <button
         
          @click.prevent="ajouterTitreLocal"
          class="btn btn-primary"
          href="#"
        >Valider</button>
        <button data-dismiss="modal" class="btn" href="#">Fermer</button>
      </div>
    </div>

    <!----- fin modal  ajouter  ---->

    <!----- modifier modal debut  ---->

    <div id="modifierModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Forme juridique</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          
            <tr>
              <td>
                  <div class="control-group">
            <label class="control-label">Libelle:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editregimeImpositions.libelle"
                class="span5"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
              </td>
            </tr>
           </table>
      </div>
      <div class="modal-footer">
        <a @click.prevent="modifierTitreLocal(editregimeImpositions)" class="btn btn-primary" href="#">Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

    <!----- fin modifier modal  ---->
  </div>
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import { mapGetters, mapActions } from "vuex";
import {partition} from '../../../../src/Repositories/Repository'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
//import Filtrer from '../../../../utils/filtre'
export default {
  data() {
    return {
      page:0,
      size:10,
      active_el:0,
       json_fields:{ 
        'Libelle':'libelle',
        // 'source de financement':'souce_financement.libelle'
      },

      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //     name: 'alertMe',
        //     icon: 'add_alert'
        // }
      ],

      formData: {
        libelle: ""
      },

      editregimeImpositions: {
        libelle: ""
      },
      search: ""
    };
  },

  created() {
    // this.getTitres()
  },
  computed: {
    // methode pour maper notre guetter
    ...mapGetters("parametreGenerauxAdministratif", ["getterregimeImpositions"]),

    // tableRegimesImpositions() {
    //   const searchTerm = this.search.toLowerCase();

    //   return this.type_Unite_admins.filter(item => {
    //     item.libelle.toLowerCase().includes(searchTerm);
    //   });
    // }


   tableRegimesImpositions(){

     const searchTerm = this.search.toLowerCase();

return this.getterregimeImpositions.filter((item) => {
  
    //return item.code.toLowerCase().includes(searchTerm) 
    return item.libelle.toLowerCase().includes(searchTerm)

   
  

   }
)
   }


  },
  methods: {
    // methode pour notre action
    ...mapActions("parametreGenerauxAdministratif", [
      "ajouterRegimeImpositions",
      "supprimerRegimeImpositions",
      "modifierRegimeImpositions"
    ]),

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

// impression en pdf
genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   const data = this.getterregimeImpositions;
    doc.setFontSize(8)
  doc.text(75,10,"LISTE DES REGIMES D'IMPOSITION")
  doc.autoTable(this.getColspan(), data),
  //doc.find("Action").remove()
doc.save('RegimeImposition.pdf')
return 0
},

getColspan(){
  return [
    {title:"LIBELLE", dataKey:"libelle"},
   
  ]
},
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input
    ajouterTitreLocal() {
      this.ajouterRegimeImpositions(this.formData);

      this.formData = {
        libelle: ""
      };
    },
    // afficher modal
    afficherModalModifierTitre(index) {
      this.$("#modifierModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editregimeImpositions = this.getterregimeImpositions[index];
    },
    // vider l'input modifier

    modifierTitreLocal() {
      this.modifierRegimeImpositions(this.editregimeImpositions);
      this.$("#modifierModal").modal('hide');
      // this.editregimeImpositions = {
      //   libelle: ""
      // };
    }
  }
};
</script>

