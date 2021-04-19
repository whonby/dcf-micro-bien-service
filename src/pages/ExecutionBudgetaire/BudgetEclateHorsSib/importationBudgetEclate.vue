<template>
  <div>
 
    <div id="modificationModal" class="">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier un type de texte</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Code:</label>
            <div class="controls">
              <input
                type="file"
                    @change="OnchangeFichier"
                class="span"
                placeholder="Saisir le code"
              />
            </div>
          </div>
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterBudgetEclateImporterLocal"
          class="btn btn-primary"
          href="#"
          
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
   

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name:'typetext',
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
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        code: "",
        libelle: ""
      },
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      search: ""
    };
  },
  computed: {
    ...mapGetters("uniteadministrative", ["typeTextes"]),
    filtre_type_teste() {
      const st = this.search.toLowerCase();
      return this.typeTextes.filter(type => {
        return (
          type.code.toLowerCase().includes(st) ||
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    
       ...mapActions("bienService", [
      "ajouterBudgetEclateImporter"
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    OnchangeFichier(e) {
      const files = e.target.files;
      this.selectedFile = event.target.files[0];
      Array.from(files).forEach((file) => this.addFichierPDF(file));
    },
    addFichierPDF(file) {
      if (!file.type.match("application/csv")) {
        this.info_pdf = true;
       
        return;
      }
      this.info_pdf = false;
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.imagePDF = "csv";
        vm.namePDF = file.name;
        vm.fichierPDF = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    afficherModalModifierTypeTexte(id) {
      this.$("#ModifierexampleModal").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editpiece = this.gettersnomPieceJustificative.find(
        (item) => item.id == id
      );
    },
    // fonction pour vider l'input ajouter
    ajouterBudgetEclateImporterLocal() {
      const formData = new FormData();
        
        formData.append("budgeteclateimport", this.selectedFile, this.selectedFile.name);
         let config = {
          header: {
            "Content-Type": "multipart/form-data",
          },
        };
      this.ajouterBudgetEclateImporter(this.formData,config);
     
    },
    // afficher modal de modification
  
    // fonction pour vider l'input modification
  
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>