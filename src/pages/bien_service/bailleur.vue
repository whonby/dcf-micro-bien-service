
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">Ã—</button>
        <h3>Ajouter Bailleur</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">nom_bailleur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.nom_bailleur"
                class="span"
                placeholder="Saisir le nom_bailleur"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">prenoms_bailleur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.prenoms_bailleur"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">numero_telephone</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.numero_telephone"
                class="span"
                placeholder="Saisir le numero_telephone"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">situation_geographique_banque</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.situation_geographique_banque"
                class="span"
                placeholder="Saisir le situation_geographique_banque"
              />
            </div>
          </div>
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
        <h3>Modifier Banque</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
           <div class="control-group">
            <label class="control-label">numero_banque</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.numero_banque"
                class="span"
                placeholder="Saisir le numero_banque"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">prenoms_bailleur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.prenoms_bailleur"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">telephone_bail</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.telephone_bail"
                class="span"
                placeholder="Saisir le telephone_bail"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">adresse_bail</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.adresse_bail"
                class="span"
                placeholder="Saisir le adresse_bail"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">email_bail</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.email_bail"
                class="span"
                placeholder="Saisir le email_bail"
              />
            </div>
          </div>
        </form>
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
              <h5>Liste des Banques</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>numero_banque</th>
                    <th>libelle_banque</th>
                     <th>numero_telephone</th>
                    <th>situation_geographique_banque</th>
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
// import { mapGetters, mapActions } from "vuex";
export default {
  name:'listeEquipement',
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
    // ...mapGetters("SuiviImmobilisation", ["equipements","familles"]),
    // filtre_equipement() {
    //   const st = this.search.toLowerCase();
    //   return this.equipements.filter(type => {
    //     return (
          
    //       type.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
     
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

