
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
                <label class="control-label">Type ua</label>
                <div class="controls">
                  <select  v-model="formData.typeua_id">
                    
                    <option
                      v-for="typeua in type_Unite_admins"
                      :key="typeua.id"
                      :value="typeua.id"
                    >{{typeua.libelle}}</option>
                  </select>
                </div>
              </div>
             
            </td>
            <td>
             <div class="control-group">
                <label class="control-label">Unite administrative</label>
                <div class="controls">
                  <select  v-model="formData.ua_id">
                    
                    <option
                      v-for="ua in uniteAdministrativeDynamiques(formData.typeua_id)"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
             <td>
             <div class="control-group">
                <label class="control-label">Fonction</label>
               <div class="controls">
                  <select :readOnly="veifEquipementExist" v-model="formData.fonction_id">
                   
                    <option
                      v-for="fonct in fonctionDynamiques(formData.ua_id)"
                      :key="fonct.id"
                      :value="fonct.fonctionActeur.id"
                    >{{fonct.fonctionActeur.libelle}}</option>
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
                      v-for="equipe in getAfficheStockArticle"
                      :key="equipe.id"
                      :value="equipe.AfficheTypeequipement.id"
                    >{{equipe.AfficheTypeequipement.libelle}}</option>
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
                  <select :readOnly="veifEquipementExist" v-model="formData.famil_id">
                   
                    <option
                      v-for="famil in fammillesDynamiques(formData.equipe_id)"
                      :key="famil.id"
                      :value="famil.famille.id"
                    >{{famil.famille.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
             <td>
             <div class="control-group">
                <label class="control-label">Article:</label>
               <div class="controls">
                  <select :readOnly="veifEquipementExist" v-model="formData.articl_id">
                   
                    <option
                      v-for="artic in articlesDynamiques(formData.famil_id)"
                      :key="artic.id"
                      :value="artic.AfficheArticle.id"
                    >{{artic.AfficheArticle.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
             <td>
           
                  <div class="control-group">
                <label class="control-label">Cout moyen TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                   :value="CoutMoyen(formData.famil_id)"
                   
                   
                    readonly
                    class="span"
                    placeholder="Saisir Montant TTC"
                  />
                </div>
              </div>
             
                  <input
                    type="hidden"
                   :value="qteEnStock"
                   
                   
                    readonly
                    class="span"
                    
                  />
                   <input
                    type="hidden"
                   :value="recupererIdStock"
                   
                   
                    readonly
                    class="span"
                    
                  />
                   <input
                    type="hidden"
                   :value="dureVieEquipement"
                   
                   
                    readonly
                    class="span"
                    
                  />
               
            </td>
            <td>
               <div class="control-group">
                <label class="control-label">Norme de l'article</label>
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

           
          </tr>
          <tr>
              
            
             <td>
              
            <div class="control-group">
                <label class="control-label">Total TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                   :value="totalTTC"
                   
                   
                    readonly
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
            <td>
             <div class="control-group">
                <label class="control-label">Date d'enregistrement</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_enregistrement"
                    
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <!-- <div class="control-group">
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
              </div> -->
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
        <h3>Modifier Norme équipement</h3>
      </div>
      <div class="modal-body">
         <table class="table table-bordered table-striped">
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">Type ua</label>
                <div class="controls">
                  <select  v-model="editNorme.typeua_id">
                    
                    <option
                      v-for="typeua in type_Unite_admins"
                      :key="typeua.id"
                      :value="typeua.id"
                    >{{typeua.libelle}}</option>
                  </select>
                </div>
              </div>
             
            </td>
            <td>
             <div class="control-group">
                <label class="control-label">Unite administrative</label>
                <div class="controls">
                  <select  v-model="editNorme.ua_id">
                    
                    <option
                      v-for="ua in uniteAdministrativeDynamiques(editNorme.typeua_id)"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
             <td>
             <div class="control-group">
                <label class="control-label">Fonction</label>
               <div class="controls">
                  <select :readOnly="veifEquipementExist" v-model="editNorme.fonction_id">
                   
                    <option
                      v-for="fonct in fonctionDynamiques(editNorme.ua_id)"
                      :key="fonct.id"
                      :value="fonct.fonctionActeur.id"
                    >{{fonct.fonctionActeur.libelle}}</option>
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
                      v-for="equipe in getAfficheStockArticle"
                      :key="equipe.id"
                      :value="equipe.AfficheTypeequipement.id"
                    >{{equipe.AfficheTypeequipement.libelle}}</option>
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
                  <select :readOnly="veifEquipementExist" v-model="editNorme.famil_id">
                   
                    <option
                      v-for="famil in fammillesDynamiques(editNorme.equipe_id)"
                      :key="famil.id"
                      :value="famil.famille.id"
                    >{{famil.famille.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
             <td>
             <div class="control-group">
                <label class="control-label">Article:</label>
               <div class="controls">
                  <select :readOnly="veifEquipementExist" v-model="editNorme.articl_id">
                   
                    <option
                      v-for="artic in articlesDynamiques(editNorme.famil_id)"
                      :key="artic.id"
                      :value="artic.AfficheArticle.id"
                    >{{artic.AfficheArticle.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
             <td>
           
                  <div class="control-group">
                <label class="control-label">Cout moyen TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                   :value="CoutMoyen(editNorme.famil_id)"
                   
                   
                    readonly
                    class="span"
                    placeholder="Saisir Montant TTC"
                  />
                </div>
              </div>
             
                  <input
                    type="text"
                   :value="qteEnStockModifier"
                   
                   
                    readonly
                    class="span"
                    
                  />
                   <input
                    type="text"
                   :value="recupererIdStockModifier"
                   
                   
                    readonly
                    class="span"
                    
                  />
               
            </td>
            <td>
               <div class="control-group">
                <label class="control-label">Norme de l'article</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editNorme.quantite"
                    
                    class="span"
                    placeholder="Saisir la Quantité"
                  />
                </div>
              </div>
         
            </td>

           
          </tr>
          <tr>
              
            
             <td>
              
            <div class="control-group">
                <label class="control-label">Total TTC:</label>
                <div class="controls">
                  <input
                    type="number"
                   :value="totalTTCedit"
                   
                   
                    readonly
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
            <td>
             <div class="control-group">
                <label class="control-label">Date d'enregistrement</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="editNorme.date_enregistrement"
                    
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <!-- <div class="control-group">
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
              </div> -->
            </td>
           

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
           <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste des services"
            :data="filtre_service"
            name="Liste des services"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des normes équipements</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                   <!-- <th title="type unite administrative">Type ua</th> -->
                   <th title="unite administrative">Ua</th>
                
                   <th>Fonction</th>
                   <th>Equipement</th>
                    <th>Famille</th>
                    <th>Quantite</th>
                    <th>Coût Moyen TTC</th>
                    <th>Total TTC</th>
                   <th title="date d'enregistrement">Date</th>
                    <th>Action</th>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(article, index) in getPersoNormeArticle"
                    :key="article.id"
                  >
                   <!-- <td 
                     @dblclick="afficherModalModifierFamille(index)"
                    > {{article.typeuniteAdminist.libelle || 'Non renseigné'}}</td> -->
                   <td 
                     @dblclick="afficherModalModifierFamille(index)"
                    > {{article.uniteAdminist.libelle || 'Non renseigné'}}</td>
                   <td 
                     @dblclick="afficherModalModifierFamille(index)"
                    > {{article.fonctionActeur.libelle || 'Non renseigné'}}</td>
                      <td
                    @dblclick="afficherModalModifierFamille(index)"
                    > {{article.equipemt.libelle || 'Non renseigné'}}</td> 
                   
                    
                   <td 
                    @dblclick="afficherModalModifierFamille(index)"
                   > {{article.familleArt.libelle || 'Non renseigné'}}</td>
                   <td style="text-align: center;"
                     @dblclick="afficherModalModifierFamille(index)" 
                    > {{article.quantite || 'Non renseigné'}}</td>
                   <td  style="text-align: center;"
                    @dblclick="afficherModalModifierFamille(index)"
                   > {{formatageSomme(article.montant_ttc) || 0 }}</td>
                     <td  style="text-align: center;"
                    @dblclick="afficherModalModifierFamille(index)"
                   > {{formatageSomme(article.total_ttc) || 0 }}</td>
                    <td  style="text-align: center;"
                     @dblclick="afficherModalModifierFamille(index)"
                    > {{formaterDate(article.date_enregistrement) || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerNormeArticle(article.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="getPersoNormeArticle.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun enregistrement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  />
 </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";
export default {
  name:'service',
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
       
//         CODE: "code",
//         LIBELLE: "libelle"
//       },
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
    ...mapGetters("SuiviImmobilisation", ["normeEquipements","equipements",
    "familles","getAfficheArticle","articles","getPersoNormeArticle","getAfficheStockArticle","stockageArticles"]),
      ...mapGetters("personnelUA", ["fonctions","personnaFonction"]),
       ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),

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
    const montant = this.articles.filter(element => element.uniteAdminist.id == uniteadmin_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total), 0).toFixed(0); 
      if(isNaN(montant)) return null
      return montant

    }
  }
}, 
uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteAdministratives.filter(element => element.type_ua_id == id);
        }
      };
    },
     fonctionDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.unite_administrative_id == id);
        }
      };
    },
 fammillesDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getAfficheStockArticle.filter(element => element.typeequipe_id == id);
        }
      };
    },
    
     articlesDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getAfficheStockArticle.filter(element => element.famill_id == id);
        }
      };
    },
MontantParEquipement(){
  return famil_id => {
    if(famil_id !=""){
    
    var montant = this.equipements.filter(element => element.equipement__article.id == famil_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(0); 
      if(isNaN(montant)) return null
      return montant

   
    }
  }
  
}, 



    ArticleDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.familles.filter(element => element.equipement_id == id);
        }
      };
    },
     
    montantTTC() {
      const val =
        parseFloat(this.formData.prix_ht) *
        parseFloat(this.formData.tva);
      // parseFloat(this.formData.TVA_id);
      if (isNaN(val)) return null;
      return parseFloat(val).toFixed(0);
    },
    veifEquipementExist() {
      return this.formData.ua_id == "";
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
  return famil_id => {
    if(famil_id !=""){
    const montant = this.getAfficheArticle.filter(element => element.AfficheFamille.id == famil_id).length;
      if(isNaN(montant)) return null
      return montant

    }
  }
}, 

 totalTTCedit() {
      const val = parseFloat(this.editNorme.quantite) * parseFloat(this.CoutMoyen(this.editNorme.famil_id));
      return parseFloat(val).toFixed(0);
    },
 totalTTC() {
      const val = parseFloat(this.formData.quantite) * parseFloat(this.CoutMoyen(this.formData.famil_id));
      return parseFloat(val).toFixed(0);
    },
MontantParEquipe(){
  
    return famil_id => {
    if(famil_id !=""){
    var montant = this.getAfficheArticle.filter(element => element.AfficheFamille.id == famil_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(0); 
      if(isNaN(montant)) return null
      return montant

     }
  }
  
},  
CoutMoyen() {
 return famil_id => {
    if(famil_id !=""){
      
    const val = parseFloat((this.getAfficheArticle.filter(element => element.AfficheFamille.id == famil_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2))/this.getAfficheArticle.filter(element => element.AfficheFamille.id == famil_id).length).toFixed(0); 
    if (isNaN(val)) return null;
    return val;
  
 }
  }
    },
 
     qteEnStock() {
      
      const norme = this.getAfficheStockArticle.find(normeEquipe => normeEquipe.AfficheArticle.id== this.formData.articl_id);

      if (norme) {
        return norme.quantitestock;
      }
      return 0
    },
     qteEnStockModifier() {
      
      const norme = this.getAfficheStockArticle.find(normeEquipe => normeEquipe.AfficheArticle.id== this.editNorme.articl_id);

      if (norme) {
        return norme.quantitestock;
      }
      return 0
    },
     recupererIdStockModifier() {
      
      const norme = this.getAfficheStockArticle.find(normeEquipe => normeEquipe.AfficheArticle.id== this.editNorme.articl_id);

      if (norme) {
        return norme.id
      }
      return 0
    },
     recupererIdStock() {
      
      const norme = this.getAfficheStockArticle.find(normeEquipe => normeEquipe.AfficheArticle.id== this.formData.articl_id);

      if (norme) {
        return norme.id
      }
      return 0
    },

    dureVieEquipement() {
      
      const norme = this.getAfficheStockArticle.find(normeEquipe => normeEquipe.articlestock_id == this.formData.articl_id);

      if (norme) {
        return norme.durevie;
      }
      return 0
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
        montant_ttc: this.CoutMoyen(this.formData.famil_id),
        total_ttc:this.totalTTC,
        stock_id:this.recupererIdStock,
        qtestock:this.qteEnStock,
        dureviearticle :this.dureVieEquipement
      };
      this.ajouterNormeArticle(nouvelObjet);

      this.formData = {
         famil_id:"",
        equipe_id:"",
        prix_ht:"",
        fonction_id: "",
        quantite:"",
        montant_ttc:"",
        typeua_id:"",
        ua_id:"",
        date_enregistrement:"",
        stock_id:"",
        qtestock:"",
        articl_id:""
      };
    },
    // afficher modal de modification
    afficherModalModifierFamille(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editNorme = this.getPersoNormeArticle[index];
    },
    // fonction pour vider l'input modification
    modifierFamilleLocal() {
      var nouvelObjet = {
        ...this.editNorme,
        montant_ttc: this.CoutMoyen(this.editNorme.famil_id),
         total_ttc:this.totalTTCedit,
        stock_id:this.recupererIdStockModifier,
        qtestock:this.qteEnStockModifier,
      };
      this.modifierNormeArticle(nouvelObjet);
      this.$("#modificationModal").modal('hide');
    },
    alert() {
      console.log("ok");
    },
     ExporterEnExel(){
      this.$refs.excel.click()
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme:formatageSomme
  },
  

  created(){
    console.log(this.$refs)
  }
};
</script>

<style scoped>
.taillemodal {
  width: 968px;
  margin: 0 -380px;
}

</style>