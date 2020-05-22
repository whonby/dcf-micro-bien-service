
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
            <label class="control-label">type facture</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span"
                placeholder="Saisir le libelle_type"
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
                placeholder="Saisir le libelle_type"
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
              <h5>Liste des type de factures</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
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
                  <tr class="odd gradeX" v-for="(typeFacture, index) in 
                typeFacturesFiltre"
                 :key="typeFacture.id">
                 <td @dblclick="afficherModalModifierTypefactiure(index)">
                   {{typeFacture.libelle || 'Non renseigné'}}</td>
                  

<td>
  <div class="btn-group">
              <button @click.prevent="supprimerTypeFacture(typeFacture.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
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

    <fab :actions="fabActions" @cache="afficherModalAjouterTypeFacture" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTypeFacture()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
  import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  name:'type facture',
  data() {
    return {
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
    doc.text(98,10,"Liste des types de factures")
  doc.autoTable(this.getColumns(),data)
doc.save('Type de Facture.pdf')
return 0
},
getColumns() {
    return [
        {title: "LIBELLE", dataKey: "libelle"},
       
    ];
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
    afficherModalModifierTypefactiure(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTypefacture = this.typeFactures[index];
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

