
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Groupe Equipement Type</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped">
         <tr>
           <td>
              <div class="control-group">
            <label class="control-label">Classe:</label>
            <select v-model="formData.code" class="span5">
                                <option v-for="varText in lesClassDe3" :key="varText.id"
                                        :value="varText.id">{{varText.code}}-{{varText.libelle}}</option>
                            </select>
                        <!-- <input
                type="text"
                v-model="formData.code"
                class="span"
                placeholder="Saisir le code"
              />      -->
          </div>
           </td>
         </tr>
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
        <a
          @click.prevent="ajouterFamilleLocal(formData)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Groupe Equipement Type</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <div class="control-group">
            <label class="control-label">Classe</label>
            <div class="controls">
               <select v-model="editEquipement.code" class="span5">
                                <option v-for="varText in lesClassDe3" :key="varText.id"
                                        :value="varText.id">{{varText.code}}-{{varText.libelle}}</option>
                            </select>
              <!-- <input
                type="number"
                v-model="editEquipement.code"
                class="span"
                placeholder="Saisir la Classe"
              /> -->
            </div>
          </div>
          <tr>
           <td>
                  <div class="control-group">
            <label class="control-label">Libelle:</label>
            <div class="controls">
              
              <input
                type="text"
                v-model="editEquipement.libelle"
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
        <a
          @click.prevent="modifierFamilleLocal(editEquipement)"
          class="btn btn-primary"
          href="#"
        
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
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
            :fields="json_fields"
            title="Liste des Types équipements"
            :data="equipements"
            name="Liste des types équipements"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
         <div align="right" style="cursor:pointer;">
          <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
        </div> 

          </div>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste Groupe Equipement Type</h5>
               <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
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
                    <th>Classe</th>
                    <th>Libelle</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>


                  <tr
                    class="odd gradeX"
                    v-for="(equipement, index) in partition (equipements,size)[page]"
                    :key="equipement.id"
                  >
                    <td
                      @dblclick="afficherModalModifierFamille(index)"
                    >{{afficheLibellePlanEconomique(equipement.code) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierFamille(index)"
                    >{{equipement.libelle || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerEquipement(equipement.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="equipements.length"></div>
              <div v-else>
                <p
                  style="text-align:center;font-size:20px;color:red;"
                >Non Disponible</p>
              </div>
            </div>
          </div>
                           <div class="pagination alternate">
                  <ul>
        <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
       <li  v-for="(titre, index) in partition(equipements,size).length" :key="index" :class="{ active : active_el == index }">
       <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
       <li :class="{ disabled : page == partition(equipements,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
       </ul>
      </div>


        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import {partition} from '../../../../src/Repositories/Repository'
  import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  name:'listeEquipement',
  data() {
    return {
       page:0,
      size:10,
      active_el:0,
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }

        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      json_fields: {
        // CODE: "code",
        LIBELLE: "libelle"
      },

      formData: {
        code: "",
        libelle: ""
      },
      editEquipement: {
        code: "",
        libelle: ""
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", ["equipements"]),
    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),



   lesClassDe3() { 
const isClassDe3 = (code) => code.charAt(0) == "2"; 
return this.derniereNivoPlanBudgetaire.filter(x => isClassDe3(x.code));
 },
   
afficheLibellePlanEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code
      }
      return 0
        }
      };
    },

//  fonctiontrie(){

      
// const isClassDe3 = (code) => code.charAt(0) == "3";

// var afficherLesClassDe3 = function(equipements) 
// { return equipements.filter(x => isClassDe3(x.code)); }
// //tu appelle la variable comme sa // 
// afficherLesClassDe3(tableau);
//     },



    // filtre_equipement() {
    //   const st = this.search.toLowerCase();
    //   return this.equipements.filter(type => {
    //     return (
          
    //       type.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // }
    
// affichierIdPlanBudgetaire() {
//       const qtereel = this.plans_budgetaires.find(
//         qtreel => qtreel.code == 2,
       
//       );

//       if (qtereel) {
//         return qtereel.id;
//       }
//       return 0
//     },
   
// AffichieIdDernierNivo() {
      
//       return id => {
//         if (id != null && id != "") {
//           const qtereel = this.derniereNivoPlanBudgetaire.find(element => element.parent == id);
//         }
//  if (qtereel) {
//         return qtereel.id;
//       }
//       return 0
//       };
//     },
// AffichierElementParent() {
      
//       return id => {
//         if (id != null && id != "") {
//           return this.derniereNivoPlanBudgetaire.filter(element => element.parent == id);
//         }
//       };
//     },
},
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllEquipement",
      "ajouterEquipement",
      "modifierEquipement",
      "supprimerEquipement"
    ]),
                genererEnPdf(){
         var doc = new jsPDF()
        // doc.autoTable({ html: this.natures_sections })
        var data = this.equipements;
        doc.text(65,10,"Liste des types Equipements")
        doc.autoTable(this.getColumns(),data)
       // doc.save('Type des actes de depenses.pdf')
      doc.output('save','Liste des Types Equipements.pdf');
      doc.output('dataurlnewwindow');
     return 0
     },
getColumns() {
    return [
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


    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterFamilleLocal() {
       if (this.formData.code =="" ) {
        alert("veuillez remplir le code")
        
      }
      else if (this.formData.libelle =="" ) {
alert("veuillez remplir le libelle")
      }
      else
      {
           this.ajouterEquipement(this.formData);

      this.formData = {
        code: "",
        libelle: ""
      };
      }
     
    },
    // afficher modal de modification
    afficherModalModifierFamille(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editEquipement = this.equipements[index];
    },
    // fonction pour vider l'input modification
    modifierFamilleLocal() {
       if (this.editEquipement.code =="" ) {
        alert("veuillez remplir le code")
      }
      else if (this.editEquipement.libelle =="" ) {
alert("veuillez remplir le libelle")
      }
      else
      {
this.modifierEquipement(this.editEquipement);
      this.$("#modificationModal").modal('hide');
      }
      
    },
    alert() {
      console.log("ok");
    },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

