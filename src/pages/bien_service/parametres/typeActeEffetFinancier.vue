
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Type acte effet financier</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">libelle</label>
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
          @click.prevent="ajouterModalTypeActeEffetFinancierLocal"
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
        <h3>Modifier Type acte effet financier</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
            <div class="control-group">
            <label class="control-label">libelle</label>
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
          @click.prevent="modifierMoadlTypeActeEffetfinancierLocal(editTypefacture)"
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
            title="Liste Types Acte Effet Financier"
            :data="typeActeEffetFinanciers"
            name="Liste des types Acte Effet Financier"
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
              <h5>Liste des type acte effet financier</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>libelle</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(typeActeEffet, index) in 
                typeActeEffetFinanciers"
                 :key="typeActeEffet.id">
                 <td @dblclick="afficherModalModifierTypeActeEffetFinancier(index)">
                   {{typeActeEffet.libelle || 'Non renseigné'}}</td>
                  


                     <div class="btn-group">
              <button @click.prevent="supprimerTypeActeEffetFinancier(typeActeEffet.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

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
        libelle: "libelle"
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
     ...mapGetters("bienService", ['typeActeEffetFinanciers']),

//     typeActeEffetFiltre()  {
     
//         const searchTerm = this.search.toLowerCase();

// return this.typeActeEffetFinanciers.filter((item) => {
  
//      return item.libelle.toLowerCase().includes(searchTerm) 
     
    

  
  

//    }
// )
//     }
  },
  methods: {
    ...mapActions("bienService", ['ajouterTypeActeEffetFinancier','modifierTypeActeEffetFinancier',
    'supprimerTypeActeEffetFinancier'
     
    ]),
                genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.typeActeEffetFinanciers;
    doc.text(98,10,"Liste des types actes effets financiers")
  doc.autoTable(this.getColumns(),data)
doc.save('Type actes effets financiers.pdf')
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
    ajouterModalTypeActeEffetFinancierLocal(){
this.ajouterTypeActeEffetFinancier(this.formData)
this.formData = {
	libelle:"",
}

    },
    
    // afficher modal de modification
    afficherModalModifierTypeActeEffetFinancier(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTypefacture = this.typeActeEffetFinanciers[index];
    },
    // fonction pour vider l'input modification
    modifierMoadlTypeActeEffetfinancierLocal(){
      this.modifierTypeActeEffetFinancier(this.editTypefacture)
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

