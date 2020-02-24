
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Ajouter Bailleur</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">nom bailleur</label>
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
            <label class="control-label">prenoms bailleur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.prenom_bailleur"
                class="span"
                placeholder="Saisir le libelle"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">adresse bailleur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.adresse_bailleur"
                class="span"
                placeholder="Saisir adresse bailleur"
              />
            </div>
          </div>


          <div class="control-group">
            <label class="control-label">email bailleur</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.email_bailleur"
                class="span"
                placeholder="Saisir email bailleur"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Telephone</label>
            <div class="controls">
              <input  	
                type="text"
                v-model="formData.telephone"
                class="span"
                placeholder="saisir le contact"
              />
            </div>
          </div>
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="AjouterModalBailleurLocal"
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
        <h3>Modifier Bailleur</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
           <div class="control-group">
            <label class="control-label">nom bailleur</label>
            <div class="controls">
              <input
                type="text"
                v-model="editbailleur.nom_bailleur"
                class="span"
                placeholder=""
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">prenom bailleur</label>
            <div class="controls">
              <input
                type="text"
                v-model="editbailleur.prenom_bailleur"
                class="span"
                placeholder=""
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">adresse bailleutr</label>
            <div class="controls">
              <input
                type="text"
                v-model="editbailleur.adresse_bailleur"
                class="span"
                placeholder="Saisir le telephone_bail"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">email bailleur</label>
            <div class="controls">
              <input
                type="text"
                v-model="editbailleur.email_bailleur"
                class="span"
                placeholder="Saisir le adresse_bail"
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">telephone</label>
            <div class="controls">
              <input
                type="text"
                v-model="editbailleur.telephone"
                class="span"
                placeholder="Saisir le email_bail"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierBailleurLocal(editbailleur)"
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
              <h5>Liste des Bailleur</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>nom bailleur</th>
                    <th>prenoms bailleur</th>
                     <th>telephone bailleur</th>
                    <th>adresse bailleur</th>
                    <th>email bailleur</th>
                    
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 <tr class="odd gradeX" v-for="(bailleur, index) in 
                bailleurFiltre"
                 :key="bailleur.id">
                 <td @dblclick="afficherModalModifierBailleur(index)">
                   {{bailleur.nom_bailleur || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierBailleur(index)">
                   {{bailleur.prenom_bailleur || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierBailleur(index)">
                   {{bailleur.telephone || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierBailleur(index)">
                   {{bailleur.adresse_bailleur || 'Non renseigné'}}</td>

                    <td @dblclick="afficherModalModifierBailleur(index)">
                   {{bailleur.email_bailleur || 'Non renseigné'}}</td>



                     <div class="btn-group">
              <button @click.prevent="supprimerBailleur(bailleur.id)"  class="btn btn-danger ">
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

    <fab :actions="fabActions" @cache="afficherModalAjouterBailleur" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterBailleur()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
export default {
  name:'bailleur',
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
        nom_bailleur:"",
        prenom_bailleur:"",
        telephone:"",
        adresse_bailleur:"",
        	email_bailleur:""
      },
      editbailleur: {
        nom_bailleur:"",
        prenom_bailleur:"",
        telephone:"",
        adresse_bailleur:"",
        	email_bailleur:""
     
      },
      search: ""
    };
  },

  computed: {
    
     ...mapGetters("bienService", ['bailleurs']),


    bailleurFiltre() {
     
        const searchTerm = this.search.toLowerCase();

return this.bailleurs.filter((item) => {
  
     return item.nom_bailleur.toLowerCase().includes(searchTerm) ||
     item.prenom_bailleur.toLowerCase().includes(searchTerm)
    

  
  

   }
)
    }
  },
  methods: {
     ...mapActions("bienService", [  'ajouterBailleur' ,'modifierBailleur', 'supprimerBailleur'
     
     ]),
    //afiicher modal ajouter
    afficherModalAjouterBailleur() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter

    AjouterModalBailleurLocal(){
     this.ajouterBailleur(this.formData)
     this.formData = {
         nom_bailleur:"",
        prenom_bailleur:"",
        telephone:"",
        adresse_bailleur:"",
        	email_bailleur:""

     }
     
    },
    
    // afficher modal de modification

     afficherModalModifierBailleur(index) {
       this.$("#modificationModal").modal({
         backdrop: "static",
         keyboard: false
      });

       this.editbailleur = this.bailleurs[index];
     },
    // fonction pour vider l'input modification

    modifierBailleurLocal(){
      this.modifierBailleur(this.editbailleur)
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

