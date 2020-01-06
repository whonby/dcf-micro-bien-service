
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
                    <th>nom_bailleur</th>
                    <th>prenoms_bailleur</th>
                     <th>telephone_bail</th>
                    <th>adresse_bail</th>
                    <th>email_bail</th>
                    
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
                   {{bailleur.prenoms_bailleur || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierBailleur(index)">
                   {{bailleur.telephone_bail || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierBailleur(index)">
                   {{bailleur.adresse_bail || 'Non renseigné'}}</td>

                    <td @dblclick="afficherModalModifierBailleur(index)">
                   {{bailleur.email_bail || 'Non renseigné'}}</td>



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
        prenoms_bailleur:"",
        telephone_bail:"",
        adresse_bail:"",
        email_bail:""
      },
      editbailleur: {
          nom_bailleur:"",
        prenoms_bailleur:"",
        telephone_bail:"",
        adresse_bail:"",
        email_bail:""
     
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
     item.prenoms_bailleur.toLowerCase().includes(searchTerm)
    

  
  

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
        prenoms_bailleur:"",
        telephone_bail:"",
        adresse_bail:"",
        email_bail:""

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

