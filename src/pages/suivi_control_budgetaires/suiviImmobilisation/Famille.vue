
<template>
  <div>
   
<!----- ajouter modal   ---->


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Famille d'Article</h3>
      </div>
      <div class="modal-body">
      <form class="form-horizontal">
              <div class="control-group">
                            <label class="control-label">Type d'équipement:</label>
                            <div class="controls">
                              <select v-model="formData.equipemt_id">
                                <option value>Selectionner</option>
                                <option
                                  v-for="typeua in equipements"
                                  :key="typeua.id"
                                  :value="typeua.id"
                                >{{typeua.libelle}}</option>
                              </select>
                            </div>
                          </div>
                         
          <div class="control-group">
            <label class="control-label">Nom famille d'article</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span"
                placeholder="Saisir le libellé"
              />
            </div>
          </div>
             <div class="control-group">
            <label class="control-label">Durée de vie</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.dureVie"
                class="span"
                placeholder="Saisir la durée de vie"
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
        <h3>Modifier  Famille d'Article</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
                            <label class="control-label">Type d'équipement:</label>
                            <div class="controls">
                              <select v-model="editFamille.equipemt_id">
                                <option value>Sélectionner</option>
                                <option
                                  v-for="typeua in equipements"
                                  :key="typeua.id"
                                  :value="typeua.id"
                                >{{typeua.libelle}}</option>
                              </select>
                            </div>
                          </div>
          <div class="control-group">
            <label class="control-label">Libellé:</label>
            <div class="controls">
              <input
                type="text"
                v-model="editFamille.libelle"
                class="span"
                placeholder="Saisir le libellé"
              />
            </div>
          </div>
           <div class="control-group">
            <label class="control-label">Durée de vie</label>
            <div class="controls">
              <input
                type="text"
                v-model="editFamille.dureVie"
                class="span"
                placeholder="Saisir la durée de vie"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierFamilleLocal(editFamille)"
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
              <h5>Liste des Familles d'Articles</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="equipements.length" >
              <FamilleItemComponent v-for="equipement in equipements"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierFamille" 
                @suppression="supprimerSect"
                >
              </FamilleItemComponent>

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
import FamilleItemComponent from './FamilleItemComponent'
export default {
  name: 'Famille',
 components: {
      FamilleItemComponent
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
        equipemt_id: "",
        libelle: "",
        dureVie:""
      },
      editFamille: {
        equipemt_id: "",
        libelle: "",
        dureVie:""
      },
       search:""
    };
  },

  computed: {
       ...mapGetters("SuiviImmobilisation", ["equipements","familles"]),

  // codeAjoutSection(){
  //    const natureSection = this.equipements.find(sect => sect.id == this.formData.naturesection_id)
  //   const ordreSection = this.formData.code

  //    if(natureSection && ordreSection){
  //      return natureSection.code + ordreSection
  //    }

  //    return null
  //  },
  // codeModifierSection(){
  //    const natureSection = this.equipements.find(sect => sect.id == this.editSection.naturesection_id)
  //   const ordreSection = this.editSection.code

  //    if(natureSection && ordreSection){
  //      return natureSection.code + ordreSection
  //    }

  //    return null
  //  },
  },


  
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllFamille",
      "ajouterFamille",
      "modifierFamille",
      "supprimerFamille"
    ]),
    supprimerSect(id){
      this.supprimerFamille(id)
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
      if (this.formData.equipemt_id == ""){
        alert("veuillez Selectionner le type d'equipement")
     
      }
      else if (this.formData.libelle =="" ) {
alert("veuillez remplir le libelle")
      
       }
      else if (this.formData.dureVie =="" ) {
alert("veuillez remplir la duree de vie")
      }
      else
      {
this.ajouterFamille(this.formData);

      this.formData = {
        code: "",
        libelle: ""
      };
      }
      
    },
    // afficher modal de modification
    afficherModalModifierFamille(article) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editFamille = article;
    },
    // fonction pour vider l'input modification
    modifierFamilleLocal() {
      if (this.editFamille.equipemt_id == ""){
        alert("veuillez Selectionner le type d'equipement")
     
      }
      else if (this.editFamille.libelle =="" ) {
alert("veuillez remplir le libelle")
      }
      else if (this.editFamille.dureVie =="" ) {
alert("veuillez remplir la duree de vie")
      }
      else
      {
this.modifierFamille(this.editFamille);
      this.$("#modificationModal").modal('hide');
      }
      
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
