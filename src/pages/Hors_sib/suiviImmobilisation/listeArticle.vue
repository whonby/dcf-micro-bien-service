
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
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
                  <select  v-model="formData.equipemt_id">
                    
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
                  <select  v-model="formData.famille_id">
                    
                    <option
                      v-for="famil in ArticleDynamiques(formData.equipemt_id)"
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
                    type="number"
                    v-model="formData.libelle"
                    
                    class="span"
                    placeholder="Saisir la quantite"
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
                <label class="control-label">TVA:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.quantite"
                    
                    class="span"
                    placeholder="Saisir la quantite"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Montant TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.montant_ttc"
                    
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
          @click.prevent="ajouterBesoinImmoLocal(formData)"
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
                  <select  v-model="editArticle.equipemt_id">
                    
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
                  <select  v-model="editArticle.famille_id">
                    
                    <option
                      v-for="famil in ArticleDynamiques(editArticle.equipemt_id)"
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
                    type="number"
                    v-model="editArticle.libelle"
                    
                    class="span"
                    placeholder="Saisir la quantite"
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
                    v-model="editArticle.prix_ht"
                    
                    class="span"
                    placeholder="Saisir Prix HT"
                  />
                </div>
              </div>
            </td>
             <td>
             <div class="control-group">
                <label class="control-label">TVA:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editArticle.quantite"
                    
                    class="span"
                    placeholder="Saisir la quantite"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Montant TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editArticle.montant_ttc"
                    
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
          @click.prevent="ajouterBesoinImmoLocal(editArticle)"
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
            title="Liste Types équipements"
            :data="filtre_equipement"
            name="Liste des types équipements"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des article</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th>Equipement</th>
                     <th>Famille</th>
                     <th>Designation</th>
                     <th>Prix HT</th>
                      <th>TVA</th>
                       <th>Montant TTC</th>
                          <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(equipement, index) in articles"
                    :key="equipement.id"
                  >
                  <td @dblclick="afficherModalModifierFamille(index)"> 
                {{equipement.relation_article__equipement.libelle || 'Non renseigné'}}</td>
          <td @dblclick="afficherModalModifierFamille(index)"> 
                {{equipement.relation_article_famille.libelle || 'Non renseigné'}}</td>
            <td @dblclick="afficherModalModifierFamille(index)"> 
                {{equipement.libelle || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierFamille(index)"> 
                       {{equipement.prix_ht || 'Non renseigné'}}</td>
                      <td @dblclick="afficherModalModifierFamille(index)"> 
                        {{equipement.tva || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierFamille(index)">
                      {{equipement.montant_ttc || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerArticles(equipement.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="articles.length"></div>
              <div v-else>
                <p
                  style="text-align:center;font-size:20px;color:red;"
                >Non Disponible</p>
              </div>
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
      // json_fields: {
      //   CODE: "code",
      //   LIBELLE: "libelle"
      // },

      formData: {
       
        famille_id:"",
        equipement_id:"",
        prix_ht:"",
        libelle: "",
        tva:"",
        montant_ttc:""
      },
      editArticle: {
        famille_id:"",
        equipement_id:"",
        prix_ht:"",
        libelle: "",
        tva:"",
        montant_ttc:""
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", ["equipements","familles","getAfficheArticle","articles"]),
    // filtre_equipement() {
    //   const st = this.search.toLowerCase();
    //   return this.equipements.filter(type => {
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
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllArticles",
      "ajouterArticles",
      "modifierArticles",
      "supprimerArticles"
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterFamilleLocal() {
      this.ajouterArticles(this.formData);

      this.formData = {
        code: "",
        libelle: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierFamille(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editEquipement = this.articles[index];
    },
    // fonction pour vider l'input modification
    modifierFamilleLocal() {
      this.modifierArticles(this.editEquipement);
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
