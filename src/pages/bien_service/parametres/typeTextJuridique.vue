
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Ajouter type texte juridique</h3>
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
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
          
          
         
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterModalTypeTextJuridiqueLocal(formData)"
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
        <h3>Modifier type texte juridique</h3>
      </div>
      <div class="modal-body">
         <form class="form-horizontal">
              
              
          <div class="control-group">
            <label class="control-label">libelle</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTypeTextJuridique.libelle"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
         
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalTypeJuridiqueLocal(editTypeTextJuridique)"
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
              <h5>Liste type texte juridique</h5>
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
      <tr class="odd gradeX" v-for="(typeFacture, index) in filtre_typeTextJuridique"
                 :key="typeFacture.id">
                 <td @dblclick="afficherModalModifierFamille(index)">
                   {{typeFacture.libelle || 'Non renseigné'}}</td>
                  

<td>
       <div class="btn-group">
              <button @click.prevent="supprimerTypeTextJuridique(typeFacture.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i>Supprimer</span></button>
             
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
        libelle:""
      },
      editTypeTextJuridique: {
     libelle:""
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ["typeTextJuridiques"]),

    filtre_typeTextJuridique() {
      const st = this.search.toLowerCase();
      return this.typeTextJuridiques.filter(type => {
        return (
          
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("bienService", [
     "getTypeTextJurique",
     "ajouterTypeTextJuridique",
     "modifierTypeTextJuridique",
     "supprimerTypeTextJuridique"
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalTypeTextJuridiqueLocal(){
this.ajouterTypeTextJuridique(this.formData)
this.formData = {
	libelle:"",
}

    },
      modifierModalTypeJuridiqueLocal(){
      this.modifierTypeTextJuridique(this.editTypeTextJuridique)
      this.$('#modificationModal').modal('hide');
    },
   // afficher modal de modification
    afficherModalModifierFamille(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTypeTextJuridique = this.typeTextJuridiques[index];
    },
    //fonction pour vider l'input modification
    
    alert() {
      console.log("ok");
    },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

