
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Ajouter le motif de decision</h3>
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
          @click.prevent="ajouterModalMotifDecisionLocal(formData)"
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
        <h3>Modifier motif de décision</h3>
      </div>
      <div class="modal-body">
         <form class="form-horizontal">
              
              
          <div class="control-group">
            <label class="control-label">libellé</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMotifDecision.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
         
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalMotifDecisionLocal(editMotifDecision)"
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
           <download-excel
            class="btn btn-success pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste des Motifs de décision"
            :data="motifDecisionFiltre"
            name="Liste des Motifs de décision"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> 
            <div align="right" style="cursor:pointer;">
       <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
           </div> 

          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste motif de decision</h5>
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
                    
                    <th width="90%">libelle</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
      <tr class="odd gradeX" v-for="motifDecision  in partition (motifDecisionFiltre,size)[page]" :key="motifDecision.id"> 
                
                 <td @dblclick="afficherModalMotifDecision(motifDecision.id)">
                   {{motifDecision.libelle || 'Non renseigné'}}</td>
                  

<td>
       <div class="btn-group">
              <button @click.prevent="supprimerMotifDecision(motifDecision.id)"  class="btn btn-danger ">
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
     <li  v-for="(titre, index) in partition(motifDecisionFiltre,size).length" :key="index" :class="{ active : active_el == index }">
       <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
     <li :class="{ disabled : page == partition(motifDecisionFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
   </ul>
 </div>



        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjoutMotifDecision" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjoutMotifDecision()">Open</button>
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
      editMotifDecision: {
     libelle:""
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ["motifDecisions"]),

    motifDecisionFiltre() {
      const st = this.search.toLowerCase();
      return this.motifDecisions.filter(type => {
        return (
          
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("bienService", [
     "ajouterMotifDecision",
     "modifierMotifDecision",
     "supprimerMotifDecision"
    ]),
                       genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.typeActeDepenseFiltre;
    doc.text(98,10,"Liste des types des actes depenses")
  doc.autoTable(this.getColumns(),data)
// doc.save('Type des actes de depenses.pdf')
doc.output('save','Type des actes de depenses.pdf');
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
    afficherModalAjoutMotifDecision() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalMotifDecisionLocal(){
this.ajouterMotifDecision(this.formData)
this.formData = {
	libelle:"",
}

    },
      modifierModalMotifDecisionLocal(){
      this.modifierMotifDecision(this.editMotifDecision)
      this.$('#modificationModal').modal('hide');
    },
   // afficher modal de modification
    afficherModalMotifDecision(id) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editMotifDecision = this.motifDecisions.find(item => item.id==id);
    },
    //fonction pour vider l'input modification
    
    
    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

