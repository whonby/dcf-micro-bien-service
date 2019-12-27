
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
  <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Norme équipement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">Fonction</label>
                <div class="controls">
                  <select  v-model="formData.fonction_id">
                    
                    <option
                      v-for="fonct in fonctions"
                      :key="fonct.id"
                      :value="fonct.id"
                    >{{fonct.libelle}}</option>
                  </select>
                </div>
              </div>
             
            </td>
            <td>
             <div class="control-group">
                <label class="control-label">Equipement Type</label>
                <div class="controls">
                  <select  v-model="formData.equipe_id">
                    
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
                  <select :readOnly="veifEquipementExist" v-model="formData.famille_id">
                   
                    <option
                      v-for="famil in fammillesDynamiques(formData.equipe_id)"
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
                <label class="control-label">Montant TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                   :value="CoutMoyen(formData.famille_id)"
                   
                   
                    readonly
                    class="span"
                    placeholder="Saisir Montant TTC"
                  />
                </div>
              </div>
            </td>
             <td>
             <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.quantite"
                    
                    class="span"
                    placeholder="Saisir la Quantité"
                  />
                </div>
              </div>
            </td>
            <!-- <td>
              <div class="control-group">
                <label class="control-label">Montant TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                    :value="montantTTC"
                    readonly
                    class="span"
                    placeholder="Saisir Montant TTC"
                  />
                </div>
              </div>
            </td>
            -->

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
        <h3>Modifier Norme équipement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">Fonction</label>
                <div class="controls">
                  <select  v-model="editNorme.fonction_id">
                    
                    <option
                      v-for="fonct in fonctions"
                      :key="fonct.id"
                      :value="fonct.id"
                    >{{fonct.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
             <div class="control-group">
                <label class="control-label">Equipement Type</label>
                <div class="controls">
                  <select  v-model="editNorme.equipe_id">
                    
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
                  <select  v-model="editNorme.famille_id" >
                    
                    <option
                      v-for="famil in ArticleDynamiques(editNorme.equipe_id)"
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
                <label class="control-label">Montant TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editNorme.montant_ttc"
                    readonly
                    class="span"
                    placeholder="Saisir Montant TTC"
                  />
                </div>
              </div>
            </td>
             <td>
             <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editNorme.quantite"
                    readonly
                    class="span"
                    placeholder="Saisir la Quantité"
                  />
                </div>
              </div>
            </td>
            <!-- <td>
              <div class="control-group">
                <label class="control-label">Montant TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                    :value="montantTTC"
                    readonly
                    class="span"
                    placeholder="Saisir Montant TTC"
                  />
                </div>
              </div>
            </td>
            -->

          </tr>
          
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierFamilleLocal(editNorme)"
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
                                            :data="equipements">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des normes équipements</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="equipements.length" >
              <NormeItemComponent v-for="equipement in equipements"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierFamille" 
                @suppression="supprimerSect"
                >
              </NormeItemComponent>

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
import NormeItemComponent from './NormeItemComponent';
export default {
  name:'listeEquipement',
  components: {
      NormeItemComponent
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
       
        equipe_id:"",
        famil_id:"",
        fonction_id:"",
        montant_ttc: "",
        quantite:""
      },
      editNorme: {
        famil_id:"",
        equipe_id:"",
        fonction_id:"",
        montant_ttc: "",
        quantite:""
      
      },
      search: ""
    };
  },


  computed: {
    ...mapGetters("SuiviImmobilisation", ["equipements","familles","getAfficheArticle","articles"]),
      ...mapGetters("personnelUA", ["fonctions"]),
    // filtre_equipement() {
    //   const st = this.search.toLowerCase();
    //   return this.equipements.filter(type => {
    //     return (
          
    //       type.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // }
    MontantbesoinRestantParUniteAdministrative(){
  return uniteadmin_id => {
    if(uniteadmin_id !=""){
    const montant = this.articles.filter(element => element.uniteAdminist.id == uniteadmin_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

    }
  }
}, 
 fammillesDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.familles.filter(element => element.equipemt_id == id);
        }
      };
    },
MontantParEquipement(){
  return famil_id => {
    if(famil_id !=""){
    
    var montant = this.equipements.filter(element => element.equipement__article.id == famil_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

   
    }
  }
  
}, 



    ArticleDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.articles.filter(element => element.equipement_id == id);
        }
      };
    },
    montantTTC() {
      const val =
        parseFloat(this.formData.prix_ht) *
        parseFloat(this.formData.tva);
      // parseFloat(this.formData.TVA_id);
      if (isNaN(val)) return null;
      return parseFloat(val).toFixed(2);
    },
    veifEquipementExist() {
      return this.formData.equipe_id == "";
    },
//   totalMontant(){
//   return famil_id => {
//     if(famil_id !=""){
//     const montant = this.articles.filter(element => element.id == famil_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2); 
//       if(isNaN(montant)) return null
//       return montant

//     }
//   }
// }, 
// totalMontant() {
//       const TTC = this.articles.find(Qreal => Qreal.id == this.formData.famil_id);

//       if (TTC) {
//         return TTC.montant_ttc;
//       }
//       return 0
//     },

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
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllNormeArticle",
      "ajouterNormeArticle",
      "modifierNormeArticle",
      "supprimerNormeArticle"
    ]),
    supprimerSect(id){
      this.supprimerNormeArticle(id)
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
        montant_ttc: this.totalMontant,
        
      };
      this.ajouterNormeArticle(nouvelObjet);

      this.formData = {
         famil_id:"",
        equipe_id:"",
        prix_ht:"",
        fonction_id: "",
        quantite:"",
        montant_ttc:""
      };
    },
    // afficher modal de modification
    afficherModalModifierFamille(articles) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editNorme = articles;
    },
    // fonction pour vider l'input modification
    modifierFamilleLocal() {
      // var nouvelObjet = {
      //   ...this.editNorme,
      //   montant_ttc: this.montantTTC,
        
      // };
      this.modifierNormeArticle(this.editNorme);
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
