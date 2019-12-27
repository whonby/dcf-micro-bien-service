<template>
  <div>

      <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Referentiel des prix</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">Equipement Type</label>
                <div class="controls">
                  <select  v-model="formData.equipement_id">
                    
                    <option
                      v-for="equipe in equipements"
                      :key="equipe.id"
                      :value="equipe.id"
                    >{{equipe.libelle}}</option>
                  </select>
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Famille:</label>
                <div class="controls">
                  <select  v-model="formData.famille_id" :readOnly="veifEquipementExist">
                    
                    <option
                      v-for="famil in ArticleDynamiques(formData.equipement_id)"
                      :key="famil.id"
                      :value="famil.id"
                    >{{famil.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Designation</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="formData.libelle"
                    
                    class="span"
                    placeholder="Saisir la Designation"
                  />
                </div>
              </div>
            </td>
           
           

           
          </tr>
          <tr>
               <td>
              
             <div class="control-group">
                <label class="control-label">Prix HT:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.prix_ht"
                    
                    class="span"
                    placeholder="Saisir Prix HT"
                  />
                </div>
              </div>
            </td>
             <td>
             <div class="control-group">
                <label class="control-label">Taux:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.taux"
                    readonly
                    class="span"
                    placeholder="Saisir la taux"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Tva:</label>
                <div class="controls">
                  <input
                    type="number"
                   :value="montantTva"
                    readonly
                    class="span"
                    placeholder="Saisir Montant Tva"
                  />
                </div>
              </div>
            </td>
           

          </tr>
          <tr>
              
            
            <td>
              <div class="control-group">
                <label class="control-label">Montant TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                    :value="montantTtc"
                    readonly
                    class="span"
                    placeholder="Saisir Montant TTC"
                  />
                </div>
              </div>
            </td>
           

          </tr>
        </table>
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

    <div id="modificationModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Referentiel des prix</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">Equipement Type</label>
                <div class="controls">
                  <select  v-model="editReferentielPrix.equipement_id">
                    
                    <option
                      v-for="equipe in equipements"
                      :key="equipe.id"
                      :value="equipe.id"
                    >{{equipe.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Famille:</label>
                <div class="controls">
                  <select  v-model="editReferentielPrix.famille_id">
                    
                    <option
                      v-for="famil in ArticleDynamiques(editReferentielPrix.equipement_id)"
                      :key="famil.id"
                      :value="famil.id"
                    >{{famil.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Designation</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="editReferentielPrix.libelle"
                    
                    class="span"
                    placeholder="Saisir la Designation"
                  />
                </div>
              </div>
            </td>
           
           

           
          </tr>
          <tr>
               <td>
              
             <div class="control-group">
                <label class="control-label">Prix HT:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editReferentielPrix.prix_ht"
                    
                    class="span"
                    placeholder="Saisir Prix HT"
                  />
                </div>
              </div>
            </td>
             <td>
             <div class="control-group">
                <label class="control-label">taux:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editReferentielPrix.taux"
                    readonly
                    class="span"
                    placeholder="Saisir la taux"
                  />
                </div>
              </div>
            </td>
           
            <td>
              <div class="control-group">
                <label class="control-label">Tva:</label>
                <div class="controls">
                  <input
                    type="number"
                   :value="editmontantTva"
                    readonly
                    class="span"
                    placeholder="Saisir Montant Tva"
                  />
                </div>
              </div>
            </td>

          </tr>
           <tr>
              
            
            <td>
              <div class="control-group">
                <label class="control-label">Montant TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                    :value="editmontantTtc"
                    readonly
                    class="span"
                    placeholder="Saisir Montant TTC"
                  />
                </div>
              </div>
            </td>
           

          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierFamilleLocal(editReferentielPrix)"
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

                                        <!-- <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="familles">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Referentiel des prix</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="familles.length" >
              <ReferentielPrixItemComponent v-for="equipement in familles"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierFamille" 
                @suppression="supprimerSect"
                >
              </ReferentielPrixItemComponent>

              <!-- <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Article</p>
              </div> -->

            
              
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
import ReferentielPrixItemComponent from './ReferentielPrixItemComponent';
export default {
  name:'listeEquipement',
  components: {
      ReferentielPrixItemComponent
  },
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
      // json_fields: {
      //   CODE: "code",
      //   LIBELLE: "libelle"
      // },

      formData: {
       
        famille_id:"",
        equipement_id:"",
        prix_ht:"",
        libelle: "",
        taux:"0.18",
        tva:"",
        montant_ttc:""
      },
      editReferentielPrix: {
        famille_id:"",
        equipement_id:"",
        prix_ht:"",
        libelle: "",
        taux:"",
         tva:"",
        montant_ttc:""
      },
      search: ""
    };
  },


  computed: {
    ...mapGetters("SuiviImmobilisation", ["familles","equipements","getAfficheArticle"]),
    // filtre_equipement() {
    //   const st = this.search.toLowerCase();
    //   return this.familles.filter(type => {
    //     return (
          
    //       type.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // }
    ArticleDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.familles.filter(element => element.equipemt_id == id);
        }
      };
    },
    montantTva() {
      const val =
        parseFloat(this.formData.prix_ht) *
        parseFloat(this.formData.taux);
      // parseFloat(this.formData.taux_id);
      if (isNaN(val)) return null;
      return parseFloat(val).toFixed(2);
    },
    montantTtc() {
      const val =
        parseFloat(this.formData.prix_ht) +
        parseFloat(this.montantTva);
      // parseFloat(this.formData.taux_id);
      if (isNaN(val)) return null;
      return parseFloat(val).toFixed(2);
    },
    editmontantTva() {
      const val =
        parseFloat(this.editReferentielPrix.prix_ht) *
        parseFloat(this.editReferentielPrix.taux);
      // parseFloat(this.formData.taux_id);
      if (isNaN(val)) return null;
      return parseFloat(val).toFixed(2);
    },
    editmontantTtc() {
      const val =
        parseFloat(this.editReferentielPrix.prix_ht) +
        parseFloat(this.editmontantTva);
      // parseFloat(this.formData.taux_id);
      if (isNaN(val)) return null;
      return parseFloat(val).toFixed(2);
    },
    veifEquipementExist() {
      return this.formData.equipement_id == "";
    },
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllArticles",
      "ajouterArticles",
      "modifierArticles",
      "supprimerArticles"
    ]),
    supprimerSect(id){
      this.supprimerArticles(id)
    },
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterFamilleLocal() {
      var nouvelObjet = {
        ...this.formData,
        montant_ttc: this.montantTtc,
        tva: this.montantTva,
      };
      this.ajouterArticles(nouvelObjet);


      this.formData = {
         famille_id:"",
        equipement_id:"",
        prix_ht:"",
        libelle: "",
        taux:"0.18",
        tva:"",
        montant_ttc:""
      };
    },
    // afficher modal de modification
    afficherModalModifierFamille(articles) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editReferentielPrix = articles;
    },
    // fonction pour vider l'input modification
    modifierFamilleLocal() {
      var nouvelObjet1 = {
        ...this.editReferentielPrix,
        montant_ttc: this.editmontantTtc,
        tva: this.editmontantTva,
        
      };
      this.modifierArticles(nouvelObjet1);
      this.$("#modificationModal").modal('hide');
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

<style scoped>
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}

</style>
