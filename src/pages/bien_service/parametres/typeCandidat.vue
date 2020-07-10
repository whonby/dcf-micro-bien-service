
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Ajouter type candidat</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">libellé</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
          
         
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterTypeAppelLocal(formData)"
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
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Modifier type candidat</h3>
      </div>
      <div class="modal-body">
         <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">libellé</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTypeAppel.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
         
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeAppelLocal(editTypeAppel)"
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
            title="Liste des types de Candidats"
            :data="typeCandidatFiltre"
            name="Liste des types de Candidats"
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
              <h5>Liste type candidat</h5>

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
                    <th width="90%">libellé</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(typeappel, index) in partition (typeCandidatFiltre,size)[page]" :key="typeappel.id">

                 <td @dblclick="afficherModalAjoutertypecandiadt(index)">
                      {{typeappel.libelle || 'Non renseigné'}}</td>
                 
                   
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerTypeCandidat(typeappel.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
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
            <li  v-for="(titre, index) in partition(typeCandidatFiltre,size).length" :key="index" :class="{ active : active_el == index }">
            <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
         <li :class="{ disabled : page == partition(typeCandidatFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
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
  name:'banque',
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
        LIBELLE: "libelle"
      },

      formData: {
        libelle:""
        
      },
      editTypeAppel: {
      libelle:""
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['typeCandidat']),
    typeCandidatFiltre() {
      const st = this.search.toLowerCase();
      return this.typeCandidat.filter(type => {
        return (
          
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("bienService", ["ajouterTypeCandidat", "modifierTypeCandidat","supprimerTypeCandidat"
    ]),

          genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.typeCandidatFiltre;
   doc.setFontSize(8)
    doc.text(78,10,"LISTE DES TYPES DE CANDIDATS")
  doc.autoTable(this.getColumns(),data)
// doc.save('Type de Candidat.pdf')
doc.output('save','Type de Candidat.pdf');
doc.output('dataurlnewwindow');
return 0
},
getColumns() {
    return [
        {title: "LIBELLE", dataKey: "libelle"},
       
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
     // fonction pour vider l'input
     ajouterTypeAppelLocal () {
     this.ajouterTypeCandidat(this.formData)

        this.formData = {
             
            libelle: ""
            
         }
     },
    //fonction pour vider l'input ajouter
    
    //afficher modal de modification
    afficherModalAjoutertypecandiadt(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTypeAppel = this.typeCandidat[index];
    },
    // fonction pour vider l'input modification
    
    // alert() {
    //   console.log("ok");
    // },
    modifierTypeAppelLocal(){
  this.modifierTypeCandidat(this.editTypeAppel)
  this.$('#modificationModal').modal('hide');
  // this.editPrestation = {
  //   libelle_prestation:"",
  //   libelle:"",
   
  // }
},
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

