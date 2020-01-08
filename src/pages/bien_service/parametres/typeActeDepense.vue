
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Ajouter Type Acte Depense</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Type Acte Depense</label>
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
          @click.prevent="ajouterTypeActeDepenseLocal"
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
        <h3>Modifier Type Acte Depense</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
            <div class="control-group">
            <label class="control-label">type Acte Depense</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTypeActeDepense.libelle"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalTypeActeDepenseLocal(editTypeActeDepense)"
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
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Types Ã©quipements"
            :data="filtre_equipement"
            name="Liste des types Ã©quipements"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des type Acte Depense</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Libelle</th>
                  
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(typeActe, index) in 
                typeActeDepenseFiltre"
                 :key="typeActe.id">
                 <td @dblclick="afficherModalModifierTpeActeDepense(index)">
                   {{typeActe.libelle || 'Non renseigné'}}</td>
                  



                     <div class="btn-group">
              <button @click.prevent="supprimerTypeActeDepense(typeActe.id)"  class="btn btn-danger ">
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

    <fab :actions="fabActions" @cache="afficherModalAjouterTypeActeDepense" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTypeActeDepense()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
export default {
  name:'type acte depense',
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
    //   json_fields: {
    //     CODE: "code",
    //     LIBELLE: "libelle"
    //   },

      formData: {
        libelle:""
      },
      editTypeActeDepense: {
        libelle:""
     
      },
      search: ""
    };  
  },

  computed: {
     ...mapGetters("bienService", ['typeActeDepenses']),

    typeActeDepenseFiltre() {
  const searchTerm = this.search.toLowerCase();

return this.typeActeDepenses.filter((item) => {
  
     return item.libelle.toLowerCase().includes(searchTerm) 
     
  
   }
)
    }
  },
  methods: {
    ...mapActions("bienService", ['ajouterTypeActeDepense','modifierTypeActeDepense',
    'supprimerTypeActeDepense'
     
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTypeActeDepense() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter

    ajouterTypeActeDepenseLocal(){
      this.ajouterTypeActeDepense(this.formData)
      this.formData = {
        libelle:""
      }
    },
    
    // afficher modal de modification
    afficherModalModifierTpeActeDepense(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTypeActeDepense = this.typeActeDepenses[index];
    },
    // fonction pour vider l'input modification

    modifierModalTypeActeDepenseLocal(){
      this.modifierTypeActeDepense(this.editTypeActeDepense)
       this.$('#modificationModal').modal('hide');
    },
    
    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

