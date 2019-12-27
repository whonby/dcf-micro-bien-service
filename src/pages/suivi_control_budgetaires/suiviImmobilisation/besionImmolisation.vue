
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Besoin d'équipement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Type Unite administrative:</label>
                <div class="controls">
                  <select v-model="formData.typeuniteadminist_id" >
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
                  <select v-model="formData.uniteadmin_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in uniteAdministrativeDynamiques(formData.typeuniteadminist_id)"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Type équipement:</label>
                <div class="controls">
                  <select v-model="formData.equipe_id">
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

           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Famille:</label>
                <div class="controls">
                  <select :readOnly="veifEquipementExist" v-model="formData.famille_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="famil in fammillesDynamiques(formData.equipe_id)"
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
                  <select :readOnly="veifArticlesExist" v-model="formData.article_id">
                  
                    <option
                      v-for="famil in articlesDynamiques(formData.famille_id)"
                      :key="famil.id"
                      :value="famil.id"
                    >{{famil.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Coût Moyen:</label>
                <div class="controls">
                  <input
                    type="number"
                    readonly
                    :value="CoutMoyen(formData.famille_id)"
                    class="span"
                    placeholder="Saisir prix unitaire"
                  />
                </div>
              </div>
            </td>
            

          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité:</label>
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
                <label class="control-label">Montant Total:</label>
                <div class="controls">
                  <input
                    type="number"
                    readonly
                    :value="montantTotalarticles"
                    class="span"
                    placeholder="Saisir montant total"
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date:</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_jour"
                    class="span"
                    placeholder="Saisir le code"
                  />
                </div>
              </div>
            </td>
                        <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="hidden"
                   :value="Historqte"
                    
                    class="span"
                    placeholder="Saisir la quantite"
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
        <h3>Modifier Besoin d'équipement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Type Unite administrative:</label>
                <div class="controls">
                  <select v-model="editBesoinImmo.typeuniteadminist_id" >
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
                  <select v-model="editBesoinImmo.uniteadmin_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in uniteAdministrativeDynamiques(editBesoinImmo.typeuniteadminist_id)"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Type équipement:</label>
                <div class="controls">
                  <select v-model="editBesoinImmo.equipe_id">
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
 
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Famille:</label>
                <div class="controls">
                  <select :readOnly="veifEquipementExist" v-model="editBesoinImmo.famille_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="famil in fammillesDynamiques(editBesoinImmo.equipe_id)"
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
                  <select :readOnly="veifArticlesExist" v-model="editBesoinImmo.article_id">
                  
                    <option
                      v-for="famil in articlesDynamiques(editBesoinImmo.famille_id)"
                      :key="famil.id"
                      :value="famil.id"
                    >{{famil.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Quantité:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editBesoinImmo.quantite"
                    
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
                <label class="control-label">Prix Unitaire:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editBesoinImmo.prix_unitaire"
                    class="span"
                    readonly
                    placeholder="Saisir prix unitaire"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Montant Total:</label>
                <div class="controls">
                  <input
                    type="number"
                    readonly
                    :value="montantTotalmodif"
                    class="span"
                    placeholder="Saisir montant total"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date:</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="editBesoinImmo.date_jour"
                    class="span"
                    placeholder="Saisir le code"
                  />
                </div>
              </div>
            </td>
                        <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="hidden"
                   :value="Historqtemodifier"
                    
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
                <label class="control-label">Quantité Livré</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editBesoinImmo.qte_livre"
                    class="span"
                    
                    placeholder="Saisir prix unitaire"
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Quantité Restant</label>
                <div class="controls">
                  <input
                    type="number"
                    readonly
                    :value="afficheQteRestant"
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date de Livraison:</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="editBesoinImmo.date_livraison"
                    class="span"
                  
                  />
                </div>
              </div>
            </td>
                      
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="modifierBesoinImmoLocal(editBesoinImmo)">Modifier</a>
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
                     <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste de demandes d'immobilisation "
            :data="trieUaImmobilisation"
            name="Liste de demandes d'immobilisation"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Bessoins Immobilisations de UA</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding" v-if="uniteAdministratives.length && type_Unite_admins.length && familles.length">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th>Type Unite administrative</th>
                    <th>Unite administrative</th>
                     <th>Equipement Type</th>
                     <th>Famille</th>
                    <th>Article</th>
                    <th>Quantité</th>
                    <th>Prix Unitaire</th>
                    <th>Montant Total</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in filtre_besoinImmo"
                    :key="BesoinImmo.id"
                  >
                   <td 
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.typeUniteAdmin.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.uniteAdminist.libelle || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.afficheEquipe.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.famille.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.afficheArticle.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.quantite}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.prix_unitaire)) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.montant_total)) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formaterDate(BesoinImmo.date_jour) || 'Non renseigné'}}</td>

                    <td>
                       <!-- <router-link
                        :to="{name : 'DetailBesoinImmo', params: {id_Besoin:index}}"
                        class="btn btn-default"
                        title="Detail Besoin Immobilisation"
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link> -->
                      <button class="btn btn-danger" @click="supprimerBesoinImmo(BesoinImmo.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                 <tr
                   
                  >
                  <td ></td>
                   <td ></td>
                    <td></td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                    <td style="font-weight:bold;">Montant Total</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(SommeTotalBesoin))}}</td>
                    <td ></td>
                    <td></td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucun Besoin </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterBesoinImmobilisation" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterBesoinImmobilisation()">Open</button>
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
json_fields: {
        TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
        UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
        DESIGNATION: "famille.libelle",
        QUANTITE: "quantite",
        PRIX_UNITAIRE: "prix_unitaire",
        MONTANT_TOTAL: "montant_total",
         DATE_DE_DEMANDE: "date_jour",
      },
      formData: {
        uniteadmin_id: "",
        epuipement_id: "",
        famille_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:""
      },
      editBesoinImmo: {
        uniteadmin_id: "",
        famille_id: "",
        epuipement_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:""
      },
      search: ""
    };
  },
// created() {
//     this.formData = this.filtre_besoinImmo.find(
//       BesoinImmo => BesoinImmo.id == this.$route.params.id
//     )
// },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      "trieUaImmobilisation",
      "equipements",
      "familles",
      "articles",
      "SommeTotalBesoin",
      "getAfficheArticle"
    ]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),


     filtre_besoinImmo() {
      const st = this.search.toLowerCase();
      return this.trieUaImmobilisation.filter(type => {
        return (
          type.typeUniteAdmin.libelle.toLowerCase().includes(st) ||
          type.uniteAdminist.libelle.toLowerCase().includes(st)||
          type.famille.libelle.toLowerCase().includes(st)
        );
      });
    },


NombreArticle(){
  return famille_id => {
    if(famille_id !=""){
    const montant = this.getAfficheArticle.filter(element => element.AfficheFamille.id == famille_id).length;
      if(isNaN(montant)) return null
      return montant

    }
  }
}, 
MontantParEquipe(){
  
    return famille_id => {
    if(famille_id !=""){
    var montant = this.getAfficheArticle.filter(element => element.AfficheFamille.id == famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  }
  
},  
CoutMoyen() {
 return famille_id => {
    if(famille_id !=""){
      
    const val = parseFloat((this.getAfficheArticle.filter(element => element.AfficheFamille.id == famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2))/this.getAfficheArticle.filter(element => element.AfficheFamille.id == famille_id).length).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
  
 }
  }
    },


 montantTotalarticles() {
   if(this.formData.famille_id !=""){
      const val = parseFloat(this.formData.quantite) * parseFloat(this.CoutMoyen(this.formData.famille_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(2);
    }
    return null

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
//           return this.articles.filter(element => element.famille_id == id);
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

 Historqte() {
      const val = parseInt(this.formData.quantite);
      return parseInt(val).toFixed(0);
    },
Historqtemodifier() {
      const val = parseInt(this.editBesoinImmo.quantite);
      return parseInt(val).toFixed(0);
    },
    fammillesDynamiques1() {
      return id => {
        if (id != null && id != "") {
          return this.familles.filter(element => element.equipemt_id);
        }
      };
    },

    veifEquipementExist() {
      return this.formData.epuipement_id == "" && this.formData.typeuniteadmin_id == "" ;
    },
veifArticlesExist() {
      return this.formData.famille_id == "" && this.formData.epuipement_id == "" && this.formData.typeuniteadmin_id == "" && this.formData.uniteadmin_id =="";
    },
    
    montantTotalmodif() {
      const val =
        parseFloat(this.editBesoinImmo.quantite) *
        parseFloat(this.editBesoinImmo.prix_unitaire);
      // parseFloat(this.formData.TVA_id);
      if (isNaN(val)) return null;
      return parseFloat(val).toFixed(2);
    },
    


// afficheQteRestant() {
      

//       if (this.editBesoinImmo.qte_livre <= this.editBesoinImmo.quantite)
//         var val =
//           parseInt(this.editBesoinImmo.quantite) -
//           parseInt(this.editBesoinImmo.qte_livre);
//       if (isNaN(val)) return null;

//       if (editBesoinImmo.qte_livre < 0) return (editBesoinImmo.qte_livre = "");

//       return parseInt(val).toFixed(0);
//     },

afficheQteRestant() {
      const form = this.editBesoinImmo;

      if (form.qte_affecte <= this.AffichierQuantiteteReel)
        var val =
          parseInt(this.editBesoinImmo.quantite) -
          parseInt(this.editBesoinImmo.qte_livre);
      if (isNaN(val)) return null;

      if (form.qte_livre < 0) return (form.qte_livre = "");

      return parseInt(val).toFixed(0);
    },




    // filtre_famille() {
    //   const st = this.search.toLowerCase();
    //   return this.trieUaImmobilisation.filter(type => {
    //     return type.designation.toLowerCase().includes(st);
    //   });
    // }

   
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllBesoinImmo",
      "ajouterBesoinImmo",
      "modifierBesoinImmo",
      "supprimerBesoinImmo"
    ]),
    formatageSomme: formatageSomme,

    //afiicher modal ajouter
    afficherModalAjouterBesoinImmobilisation() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterBesoinImmoLocal() {
      var nouvelObjet = {
        ...this.formData,
        montant_total: this.montantTotalarticles,
        historiqueqte: this.Historqte,
        prix_unitaire:this.CoutMoyen(this.formData.famille_id)
      };
      this.ajouterBesoinImmo(nouvelObjet);
      this.formData = {
        uniteadmin_id: "",
        epuipement_id: "",
        famille_id: "",
        quantite: "",
        article_id:"",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:""
      };
    },
    // afficher modal de modification
    afficherModalModifierBesoinImmo(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.trieUaImmobilisation[index];
    },
    // fonction pour vider l'input modification
    modifierBesoinImmoLocal() {
      var nouvelObjetmodifier = {
        ...this.editBesoinImmo,
        montant_total: this.montantTotalmodif,
        historiqueqte: this.Historqtemodifier
      };
      this.modifierBesoinImmo(nouvelObjetmodifier);
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
