

<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">Ã—</button>
        <h3>Ajouter Signature</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">signature</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.signature"
                class="span"
                placeholder="Saisir le signature"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">debut_validite</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.debut_validite"
                class="span"
                placeholder="Saisir debut_validite"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">fin_validite</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.fin_validite"
                class="span"
                placeholder="Saisir  fin_validite"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">version</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.version"
                class="span"
                placeholder="Saisir  version"
              />
            </div>
          </div>
           <td>
              
              <div class="control-group">
                <label class="control-label">signature_modifie</label>
                <div class="controls">
                  <select v-model="formData.id_signature_modifie" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
         </form>
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
        <button data-dismiss="modal" class="close" type="button">Ã—</button>
        <h3>Modifier Signature</h3>
      </div>
      <div class="modal-body">
         <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">signature</label>
            <div class="controls">
              <input
                type="text"
                v-model="editSignature.signature"
                class="span"
                placeholder="Saisir le signature"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">debut_validite</label>
            <div class="controls">
              <input
                type="date"
                v-model="editSignature.debut_validite"
                class="span"
                placeholder="Saisir debut_validite"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">fin_validite</label>
            <div class="controls">
              <input
                type="date"
                v-model="editSignature.fin_validite"
                class="span"
                placeholder="Saisir  fin_validite"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">version</label>
            <div class="controls">
              <input
                type="date"
                v-model="editSignature.version"
                class="span"
                placeholder="Saisir  version"
              />
            </div>
          </div>
           <td>
              
              <div class="control-group">
                <label class="control-label">signature_modifie</label>
                <div class="controls">
                  <select v-model="editSignature.id_signature_modifie" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierFamilleLocal(editSignature)"
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
              <h5>Liste Signature</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>signature</th>
                    <th>debut_validite</th>
                     <th>fin_validite</th>
                    <th>version</th>
                    <th>signature_modifie</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </table>
              
            </div>
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
export default {
  name:'banque',
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
        
      },
      editEquipement: {
     
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", []),
    filtre_equipement() {
      const st = this.search.toLowerCase();
      return this.equipements.filter(type => {
        return (
          
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("bienService", [
     
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    
    // afficher modal de modification
    // afficherModalModifierFamille(index) {
    //   this.$("#modificationModal").modal({
    //     backdrop: "static",
    //     keyboard: false
    //   });

    //   this.editEquipement = this.equipements[index];
    // },
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

