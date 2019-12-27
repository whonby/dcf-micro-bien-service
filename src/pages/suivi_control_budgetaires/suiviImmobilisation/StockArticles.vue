<template>
  <div>

   

     <div id="exampleModalStock" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter quantite Entrant</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Quantité Entrant</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editStock.qteentrant1"/>
                               <input type="hidden" class="span"  :value="quantiteEnt"/>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Entrée</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editStock.date_entre"/>
                            </div>
                          </div>
                             <div class="control-group">
                            <label class="control-label">Quantité en stock</label>
                            <div class="controls">
                              <input type="text" class="span"  
                              readonly
                              :value="quantiteenstock"/>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Quantité actuel en stock</label>
                            <div class="controls">
                              <input type="text" class="span"  
                              readonly
                             :value="quantiteActuel"/>
                            </div>
                          </div>
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierStockEntrant(editStock)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Stock </h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Type Unite administrative:</label>
                <div class="controls">
                  <select v-model="formData.typeua_id" >
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in type_Unite_admins"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">Unite administrative:</label>
                <div class="controls">
                  <select v-model="formData.uAdministrative_id" :readOnly="veiftypeuaExist">
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in uniteAdministrativeDynamiques(formData.typeua_id)"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Type équipement:</label>
                <div class="controls">
                  <select v-model="formData.typeequipe_id">
                    <option value>Sélectionner</option>
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
                  <select  v-model="formData.famill_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="famil in fammillesDynamiques(formData.typeequipe_id)"
                      :key="famil.id"
                      :value="famil.id"
                    >{{famil.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Article:</label>
                <div class="controls">
                  <select :readOnly="veifArticlesExist" v-model="formData.articlestock_id">
                  
                    <option
                      v-for="famil in articlesDynamiques(formData.famill_id)"
                      :key="famil.id"
                      :value="famil.id"
                    >{{famil.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            
            

          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Quantite en entrant</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="formData.quantitestock"
                    class="span"
                    placeholder="Saisir Quantite en stock"
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Durée de vie</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.durevie"
                   
                    class="span"
                    placeholder="Durée de vie"
                  />
                </div>
              </div>
              <input
                    type="hidden"
                   :value="Historqte"
                    
                    class="span"
                    
                  />
            </td>
            
            <td>
              <div class="control-group">
                <label class="control-label">Date d'entrée :</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_entre"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
           
                 
          </tr>
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterStockLocal(formData)"
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
        <h3>Modifier stock</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         <tr>
             <!-- <td>
              <div class="control-group">
                <label class="control-label">Type Unite administrative:</label>
                <div class="controls">
                  <select v-model="editStock.typeua_id" >
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in type_Unite_admins"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td> -->
            <!-- <td>
              
              <div class="control-group">
                <label class="control-label">Unite administrative:</label>
                <div class="controls">
                  <select v-model="editStock.uAdministrative_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in uniteAdministrativeDynamiques(editStock.typeua_id)"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td> -->
            <!-- <td>
              <div class="control-group">
                <label class="control-label">Type équipement:</label>
                <div class="controls">
                  <select v-model="editStock.typeequipe_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="equipe in equipements"
                      :key="equipe.id"
                      :value="equipe.id"
                    >{{equipe.libelle}}</option>
                  </select>
                </div>
              </div>
            </td> -->

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Type équipement:</label>
                <div class="controls">
                  <select v-model="editStock.typeequipe_id">
                    <option value>Sélectionner</option>
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
                  <select  v-model="editStock.famill_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="famil in fammillesDynamiques(editStock.typeequipe_id)"
                      :key="famil.id"
                      :value="famil.id"
                    >{{famil.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Article:</label>
                <div class="controls">
                  <select  v-model="editStock.articlestock_id">
                  
                    <option
                      v-for="famil in articlesDynamiques(editStock.famill_id)"
                      :key="famil.id"
                      :value="famil.id"
                    >{{famil.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            
            <!-- <td>
              <div class="control-group">
                <label class="control-label">Quantite en stock</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="editStock.quantitestock"
                    class="span"
                    placeholder="Saisir Quantite en stock"
                  />
                </div>
              </div>
            </td> -->
            

          </tr>
          <tr>
            
             <!-- <td>
              <div class="control-group">
                <label class="control-label">Date d'entree :</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_entre"
                    class="span"
                    
                  />
                </div>
              </div>
            </td> -->
             <!-- <td>
              <div class="control-group">
                <label class="control-label">Date de sortie :</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_sortie"
                    class="span"
                    
                  />
                </div>
              </div>
            </td> -->
             <td>
              <div class="control-group">
                <label class="control-label">Durée de vie</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editStock.durevie"
                    
                    class="span"
                    placeholder="Durée de vie"
                  />
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">Quantité en Stock </label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editStock.quantitestock"
                    
                    class="span"
                    placeholder="Nvelle Quantité en Stock"
                  />
                </div>
              </div>
            </td>
            
           
                 
          </tr> 
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="modifierStockLocal(editStock)">Modifier</a>
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
            title="Liste de demandes d'immobilisation "
            :data="trieUaImmobilisation"
            name="Liste de demandes d'immobilisation"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Gestion des stocks</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding" v-if="getAfficheStockArticle.length && articles.length && familles.length && uniteAdministratives.length ">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <!-- <th>Type Unite administrative</th> -->
                    <!-- <th title="unite administrative">Ua</th>-->
                     <th>Equipement Type</th> 
                     <th>Famille</th>
                    <th>Article</th>
                    <th>Durée de vie</th>
                    <th title="quantite en stock">Qté en stock</th>
                     <th>Date d'entrée</th>
                    <th title="quantite entrant">Qté entrée</th>
                    <th>Date de sortie</th>
                    <th title="quantite sortant">Qté sortie</th>
                     
                    <!-- <th>Duree de vie</th> -->
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="(stock, index) in getAfficheStockArticle"
                    :key="stock.id"
                  >


                   
                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeUniteAdministrative.libelle || 'Non renseigné'}}</td> -->
                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.uniteAdm.libelle || 'Non renseigné'}}</td>-->
                     <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.AfficheTypeequipement.libelle || 'Non renseigné'}}</td> 
                    <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.famille.libelle || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.AfficheArticle.libelle || 'Non renseigné'}}</td>
                     <td style="text-align: center;"
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.durevie || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierStock(index)"
                    >{{formaterDate(stock.date_entre) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.qteentrant || '0'}}</td>
                       <td style="text-align: center;"
                      @dblclick="afficherModalModifierStock(index)"
                    >{{formaterDate(stock.date_sortie) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierStock(index)"
                    >{{ stock.histo_qte - stock.quantitestock  || '0' }}</td>
                  
                     <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.durevie || 'Non renseigné'}} Ans</td> -->

                    <td>
                        <button class="btn btn-inverse" @click="afficherModalStock(index)">
                        <span>
                          <i class=" icon-signal"></i>
                        </span>
                      </button>
                      <button class="btn btn-danger" @click="supprimerStock(stock.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                   <tr
                   
                  >
                 <td></td>
                    <td></td>
                      <td></td>
                   <td style="font-weight:bold;" title="total quantite entrant">Total en stock</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{totalQteEntrant || 0 }}</td>
                    <td></td>
                   
                     
                  
                     <td ></td>
                    <td style="font-weight:bold;" title="total quantite sortant">Total qte sortie</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{ totalQteSortant || 0 }}</td>
                    
                   
                     <td ></td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterStock" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterStock()">Open</button>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";

export default {
  name: 'besionImmolisation',
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
//         TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
//         UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
//         DESIGNATION: "famille.libelle",
//         QUANTITE: "quantite",
//         PRIX_UNITAIRE: "prix_unitaire",
//         MONTANT_TOTAL: "montant_total",
//          DATE_DE_DEMANDE: "date_jour",
//       },
quantite: {
       
        qteentrant1:"0",
        date_entre:""
       
      },
      formData: {
        uAdministrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        
       
      },
      editStock: {
       uAdministrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qteentrant1:"0",
      },
      search: ""
    };
  },
// created() {
//     this.formData = this.filtre_Stock.find(
//       Stock => Stock.id == this.$route.params.id
//     )
// },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
    "getAfficheStockArticle",
      "equipements",
      "familles",
      "articles",
     
      
      "type_Unite_admins",
      "totalQteEntrant",
      "totalQteSortant"
     
    ]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),


     filtre_Stock() {
      const st = this.search.toLowerCase();
      return this.getAfficheStockArticle.filter(type => {
        return (
          type.typeUniteAdministrative.libelle.toLowerCase().includes(st) ||
          type.uniteAdministrative.libelle.toLowerCase().includes(st)
         
        );
      });
    },

quantiteActuel() {
      const val = parseInt(this.quantiteEnt) + parseInt(this.quantiteenstock);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


quantiteenstock() {
      const val = parseInt(this.editStock.quantitestock);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
quantiteEnt() {
      const val = parseInt(this.editStock.qteentrant1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

    fammillesDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.familles.filter(element => element.equipemt_id == id);
        }
      };
    },
 articlesDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.articles.filter(element => element.famille_id == id);
        }
      };
    },
    Historqte() {
      const val = parseInt(this.formData.quantitestock);
      return parseInt(val).toFixed(0);
    },
    // nvelleQuantiteEnStock(){
    //     const val =
    //     parseFloat(this.editStock.quantitestock) +
    //     parseFloat(this.editStock.qteObtenu);
    //   // parseFloat(this.formData.TVA_id);
    //   if (isNaN(val)) return null;
    //   return parseFloat(val).toFixed(2);
    // },
//    fammillesModifierDynamiques() {
//       return id => {
//         if (id != null && id != "") {
//           return this.familles.filter(element => element.equipemt_id == id);
//         }
//       };
//     },
//  articlesModifierDynamiques() {
//       return id => {
//         if (id != null && id != "") {
//           return this.articles.filter(element => element.famill_id == id);
//         }
//       };
//     },
uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteAdministratives.filter(element => element.type_ua_id == id);
        }
      };
    },

 veiftypeuaExist() {
      return this.formData.typeua_id == "" ;
    },

 veifTypeEquipementExist() {
      return  this.formData.uAdministrative_id == "" ;
    },

    veifFamilleExist() {
      return  this.formData.typeequipe_id == "" ;
    },
veifArticlesExist() {
      return this.formData.famill_id == "" ;
    },
   
    


   
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllStock",
      "ajouterStock",
      "modifierStock",
      "supprimerStock"
    ]),
    formatageSomme: formatageSomme,

    //afiicher modal ajouter
    afficherModalAjouterStock() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterStockLocal() {

  
    var nouvelObjet = {
        ...this.formData,
       
        histo_qte: this.Historqte,
      
      };
      this.ajouterStock(nouvelObjet);
      this.formData = {
      uAdministrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
      };
    },
    // afficher modal de modification
    afficherModalModifierStock(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editStock = this.getAfficheStockArticle[index];
    },
    afficherModalStock(index) {
      this.$("#exampleModalStock").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editStock = this.getAfficheStockArticle[index];
    },

     modifierStockEntrant() {
      var nouvelObjet = {
        ...this.editStock,
       quantitestock: this.quantiteActuel,
        qteentrant: this.quantiteEnt,
      
      };
      this.modifierStock(nouvelObjet);
       this.editStock = {
     
        quantitestock: "",
      };
      this.$("#exampleModalStock").modal('hide');
    },
    // fonction pour vider l'input modification
    modifierStockLocal() {
     
      this.modifierStock(this.editStock);
      this.$("#modificationModal").modal('hide');
    },
    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
</style>
