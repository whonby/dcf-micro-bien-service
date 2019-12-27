
<template>
  <div>
   
<!----- ajouter modal   ---->


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Article en stock</h3>
      </div>
      <div class="modal-body">
      <form class="form-horizontal">
              <div class="control-group">
                            <label class="control-label">Famille Article:</label>
                            <div class="controls">
                              <select v-model="formData.famill_id" >
                               
                                <option
                                  v-for="typeua in familles"
                                  :key="typeua.id"
                                  :value="typeua.id"
                                >{{typeua.libelle}}</option>
                              </select>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Article:</label>
                            <div class="controls">
                              <select v-model="formData.articlestock_id" :readOnly="veifEquipementExist">
                               
                                <option
                                  v-for="artistock in ArticleDynamiques(formData.famill_id)"
                                  :key="artistock.id"
                                  :value="artistock.id"
                                >{{artistock.libelle}}</option>
                              </select>
                            </div>
                          </div>
                         
          <div class="control-group">
            <label class="control-label">Quantite en Stock:</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.quantitestock"
                class="span"
                placeholder="Saisir le Quantite en Stock"
              />
            </div>
          </div>
           <div class="control-group">
            <label class="control-label">Durée de vie </label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.durevie"
                class="span"
                placeholder="Saisir la Durée de vie"
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
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Article en stock</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
              <div class="control-group">
                            <label class="control-label">Famille Article:</label>
                            <div class="controls">
                              <select v-model="editStock.famill_id" >
                               
                                <option
                                  v-for="typeua in familles"
                                  :key="typeua.id"
                                  :value="typeua.id"
                                >{{typeua.libelle}}</option>
                              </select>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Article:</label>
                            <div class="controls">
                              <select v-model="editStock.articlestock_id" :readOnly="veifEquipementExist">
                               
                                <option
                                  v-for="artistock in ArticleDynamiques(editStock.famill_id)"
                                  :key="artistock.id"
                                  :value="artistock.id"
                                >{{artistock.libelle}}</option>
                              </select>
                            </div>
                          </div>
                         
          <div class="control-group">
            <label class="control-label">Quantite en Stock:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editStock.quantitestock"
                class="span"
                placeholder="Saisir le Quantite en Stock"
              />
            </div>
          </div>
           <div class="control-group">
            <label class="control-label">Durée de vie </label>
            <div class="controls">
              <input
                type="text"
                v-model="editStock.durevie"
                class="span"
                placeholder="Saisir la Durée de vie"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierFamilleLocal(editStock)"
          class="btn btn-primary"
          href="#"
        
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
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
                                            :data="equipements">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Articles en Stock</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="familles.length" >
              <stockItemComponent v-for="equipement in familles"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierFamille" 
                @suppression="supprimerSect"
                >
              </stockItemComponent>

              <!-- <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Article</p>
              </div> -->

            
              
            </div>
          </div>
        </div>
      </div>
    </div>

    
<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterTitre()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterTitre"
        bg-color="green"

  ></fab>
<notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import stockItemComponent from './stockItemComponent'
export default {
  name: 'Famille',
 components: {
      stockItemComponent
  },
  data() {
    return {
      // json_fields: {
      //       'NATURE_SECTION': 'groupe.libelle',
      //       'NUMERO_ORDRE_SECTION': 'article.code',
      //     'CODE_SECTION':'article.code_section',
      //   'LIBELLE_SECTION':'article.nom_section'
           
           
      //   },
     fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
     
       formData: {
       famill_id: "",
        articlestock_id: "",
         quantitestock: "",
        durevie: ""
      },
      editStock: {
        famill_id: "",
        articlestock_id: "",
         quantitestock: "",
        durevie: ""
      },
       search:""
    };
  },

  computed: {
       ...mapGetters("SuiviImmobilisation", ["equipements","familles","articles"]),
veifEquipementExist() {
      return this.formData.famill_id == "";
    },
 ArticleDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.articles.filter(element => element.famille_id == id);
        }
      };
    },
    // afficherArticle(){
    //      return id => {
    //     if (id != null && id != "") {
    //         let objet = this.articles.find(element => element.famille_id == id);
    //       return objet.libelle;
    //     }
    //   };
    // }
  },


  
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllStock",
      "ajouterStock",
      "modifierStock",
      "supprimerStock"
    ]),
    supprimerSect(id){
      this.supprimerStock(id)
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
      this.ajouterStock(this.formData);

      this.formData = {
        famill_id: "",
        articlestock_id: "",
         quantitestock: "",
        durevie: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierFamille(article) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editStock = article;
    },
    // fonction pour vider l'input modification
    modifierFamilleLocal() {
      this.modifierStock(this.editStock);
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
