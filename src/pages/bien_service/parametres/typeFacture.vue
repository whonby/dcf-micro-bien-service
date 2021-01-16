
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Type Facture</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Type de facture</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span"
                placeholder="Saisir le type de facture"
              />
            </div>
          </div>
         
          
         
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterModalTypeFactureLocal"
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
        <h3>Modifier Type Facture</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
            <div class="control-group">
            <label class="control-label">type facture</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTypefacture.libelle"
                class="span"
                placeholder="Saisir le type de facture"
              />
            </div>
          </div>
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalTypeFactureLocal(editTypefacture)"
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
            title="Liste Types des factures"
            :data="typeFacturesFiltre"
            name="Liste des types des factures"
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
              <h5>Liste des types de factures</h5>
              <div align="right">
                Recherche:
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
                    <th width="90%">Libellé</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="typeFacture in partition (typeFacturesFiltre,size)[page]" :key="typeFacture.id">
                
                 <td @dblclick="afficherModalModifierTypefactiure(typeFacture.id)">
                   {{typeFacture.libelle || 'Non renseigné'}}</td>
                  

<td>
  <div class="btn-group">
              <button @click.prevent="supprimerTypeFacture(typeFacture.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"> Supprimer</i></span></button>
             
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
        <li  v-for="(titre, index) in partition(typeFacturesFiltre,size).length" :key="index" :class="{ active : active_el == index }">
        <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
     <li :class="{ disabled : page == partition(typeFacturesFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
     </ul>
    </div>

        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTypeFacture" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTypeFacture()">Open</button>
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
  name:'type facture',
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
      editTypefacture: {
        	libelle:""
     
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['typeFactures']),
    typeFacturesFiltre()  {
     
        const searchTerm = this.search.toLowerCase();

return this.typeFactures.filter((item) => {
  
     return item.libelle.toLowerCase().includes(searchTerm) 
     
    

  
  

   }
)
    }
  },
  methods: {
    ...mapActions("bienService", ['ajouterTypeFacture','modifierTypeFacture',
    'supprimerTypeFacture'
     
    ]),
          genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.typeFacturesFiltre;
   doc.setFontSize(8)
    doc.text(78,10,"LISTE DES TYPES DE FACTURES")
  doc.autoTable(this.getColumns(),data)
// doc.save('Type de Facture.pdf')
doc.output('save','Type de Facture.pdf');
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
    afficherModalAjouterTypeFacture() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalTypeFactureLocal(){
this.ajouterTypeFacture(this.formData)
this.formData = {
	libelle:"",
}

    },
    
    // afficher modal de modification
    afficherModalModifierTypefactiure(id) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTypefacture = this.typeFactures.find(item => item.id==id);
    },
    // fonction pour vider l'input modification
    modifierModalTypeFactureLocal(){
      this.modifierTypeFacture(this.editTypefacture)
      this.$('#modificationModal').modal('hide');
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

