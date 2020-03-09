
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Cause d'inactivite</h3>
      </div>
      <div class="modal-body">
           <table class="table table-bordered table-striped">
         
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Libelle</label>
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
          @click.prevent="ajouterServiceLocal(formData)"
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
        <h3>Modifier Cause d'inactivite</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Libelle</label>
                  <div class="controls">
                    <input
                type="text"
                v-model="editService.libelle"
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
          @click.prevent="modifierServiceLocal(editService)"
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
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste des Causes d'inactivites"
            :data="filtre_service"
            name="Liste des Causes d'inactivites"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes des Cause d'inactivites</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                   
                    <th style="width:90%">Libelle</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(service, index) in filtre_service"
                    :key="service.id"
                  >
                   
                    <td
                      @dblclick="afficherModalModifierService(index)"
                    >{{service.libelle || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerCauseInactivite(service.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="filtre_service.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterService" main-icon="apps" bg-color="green"></fab>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterService()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  />
 </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
 
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
        
        libelle: ""
      },
      editService: {
       
        libelle: ""
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", ["causeInactivite"]),
    filtre_service() {
      const st = this.search.toLowerCase();
      return this.causeInactivite.filter(type => {
        return (
        
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
    
      "ajouterCauseInactivite",
      "modifierCauseInactivite",
      "supprimerCauseInactivite"
    ]),
    //afiicher modal ajouter
    afficherModalAjouterService() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterServiceLocal() {
      this.ajouterCauseInactivite(this.formData);

      this.formData = {
       
        libelle: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierService(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editService = this.causeInactivite[index];
    },
    // fonction pour vider l'input modification
    modifierServiceLocal() {
      this.modifierCauseInactivite(this.editService);
this.$("#modificationModal").modal('hide');
      // this.editService = {
      //   code: "",
      //   libelle: ""
      // };
    },
    alert() {
      console.log("ok");
    },

    ExporterEnExel(){
      this.$refs.excel.click()
    }
  },

  created(){
    console.log(this.$refs)
  }
};
</script>

