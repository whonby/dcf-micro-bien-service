<template>
  <div>

   

     <div id="exampleModalStock" class="modal hide ">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter quantité Entrant</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Quantité Entrant</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editStock.qteentrant1"/>
                               <input type="hidden" class="span"  :value="quantiteEnt"/>
                                <input type="hidden" class="span"  v-model="editStock.histo_qte"/>
                                <input type="hidden" class="span"  :value="nouvelleQte"/>
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
    <div id="exampleModal" class="modal hide tailgrandStock">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Stock </h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Type d'Unité Administrative:</label>
                <div class="controls">
                  <select v-model="formData.typeua_id" class="span5">
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
                <label class="control-label">Unité administrative</label>
                <div class="controls">
                  <select v-model="formData.uAdministrative_id" :readOnly="veiftypeuaExist" class="span5">
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
            <td>
              <div class="control-group">
                <label class="control-label">Type équipement:</label>
                <div class="controls">
                  <select v-model="formData.typeequipe_id" class="span5">
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
                <label class="control-label">Famille</label>
                <div class="controls">
                  <select  v-model="formData.famill_id" class="span5">
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
            <!-- <td>
              <div class="control-group">
                <label class="control-label">Article:</label>
                <div class="controls">
                  <select :readOnly="veifArticlesExist" v-model="formData.articlestock_id" class="span5">
                  
                    <option
                      v-for="famil in articlesDynamiques(formData.famill_id)"
                      :key="famil.id"
                      :value="famil.id"
                    >{{famil.libelle}}</option>
                  </select>
                </div>
              </div>
            </td> -->
            <td>
              <div class="control-group">
                <label class="control-label">Quantité en entrant</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="formData.quantitestock"
                    class="span5"
                    placeholder="Saisir Quantite en stock"
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Date d'entrée</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_entre"
                    class="span5"
                    
                  />
                </div>
              </div>
            </td>

          </tr>
          <tr>
            
             <td>
              <!-- <div class="control-group">
                <label class="control-label">Durée de vie</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.durevie"
                   
                    class="span"
                    placeholder="Durée de vie"
                  />
                </div>
              </div> -->
              <input
                    type="hidden"
                   :value="Historqte"
                    
                    class="span"
                    
                  />
                  <input
                    type="hidden"
                   :value="HistorqteModifier"
                    
                    class="span"
                    
                  />
                   <input
                    type="hidden"
                   v-model="formData.qtesortie"
                    
                    class="span"
                    
                  />
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

    <div id="modificationModal" class="modal hide tailgrandStock">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier stock</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         <!-- <tr> -->
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

           
          <!-- </tr> -->
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Type équipement:</label>
                <div class="controls">
                  <select v-model="editStock.typeequipe_id" class="span5">
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
                  <select  v-model="editStock.famill_id" class="span5">
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
                <label class="control-label">Quantité en Stock </label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editStock.quantitestock"
                    
                    class="span5"
                    placeholder="Nvelle Quantité en Stock"
                  />
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
            </td> -->
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
    <table class="table table-bordered table-striped">
  <tr>
    <td>
      <label class="control-label">Unite Administrative</label>
       <!-- <select  class="span5" v-model="formData.uAdministrative_id">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select> -->
                     <model-list-select style="background-color: rgb(233,233,233);"
                                                       class="wide"
                                                       :list="filtre_unite_admin"
                                                       v-model="formData.uAdministrative_id"
                                                       option-value="id"
                                                       option-text="libelle"
                                                       placeholder="Unité administrative"
                                    >

                                    </model-list-select>
    </td>
  </tr>
</table>
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
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding" >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    <th title="unite administrative">UA</th>
                     
                     <th>Famille</th>
                    <th>Quantité Initiale</th> 
                    <th title="quantite en stock">Quantité en stock</th>
                    <th title="quantite sortant">Quantité sortie</th>
                     <th>Date d'entrée</th>
                    <th title="quantite entrant">Quantité entrée</th>
                    <th>Date de sortie</th>
                    
                     
                    <!-- <th>Duree de vie</th> -->
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in listeDesStockParUa(formData.uAdministrative_id)"
                    :key="stock.id"
                  >



                   
                    <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.typeuniteAdminist.libelle || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleUniteAdministrative(stock.uAdministrative_id)	 || 'Non renseigné'}}</td>
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleTypeEquipement(stock.typeequipe_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{libelleFamilleEquipement(stock.famill_id) || 'Non renseigné'}}</td>
                     <!-- <td
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.AfficheArticle.libelle || 'Non renseigné'}}</td> -->
                     <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.histo_qte || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>
                     <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{ stock.qtesortie ||'0' }}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{formaterDate(stock.date_entre) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{stock.qteentrant || '0'}}</td>
                       <td style="text-align: center;"
                      @dblclick="afficherModalModifierTitre(id)"
                    >{{formaterDate(stock.date_sortie) || 'Non renseigné'}}</td>
                   
                  
                     <!-- <td
                      @dblclick="afficherModalModifierStock(index)"
                    >{{stock.durevie || 'Non renseigné'}} Ans</td> -->

                    <td>
                        <button class="btn btn-inverse" @click="afficherModalStock(index)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
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
                      <td style="font-weight:bold;">Total</td>
                   <td  style="text-align: center;color:red;font-weight:bold;">{{quantiteInitial(formData.uAdministrative_id)}}</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{nombreDeQuantiteEnStock(formData.uAdministrative_id) || 0 }}</td>
                     <td style="text-align: center;color:red;font-weight:bold;">{{ nombreDeQuantiteSortiEnStock(formData.uAdministrative_id) || 0 }}</td>
                    <td></td>
                   
                     
                  
                     <td ></td>
                    <td  ></td>
                   
                    
                   <td></td>
                     
                    
                  </tr>
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="ajouterEntreEnPatrimoine()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="ajouterEntreEnPatrimoine"
         
        bg-color="green"

  ></fab>
<notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../../../Repositories/Repository";
import {admin,dcf,noDCfNoAdmin} from "../../../../../Repositories/Auth"
import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  components: {
    
    ModelListSelect,
     
  },
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
        qtesortie:"0"
        
       
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
    
      "equipements",
      "familles",
      "articles",
     
      
      "type_Unite_admins",
      "totalQteEntrant",
      "totalQteSortant",
     "getterUa_idImo"
    ]),
    
    ...mapGetters("uniteadministrative", ["uniteAdministratives","GestionStockageArticles"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
    //  filtre_Stock() {
    //   const st = this.search.toLowerCase();
    //   return this.GestionStockageArticles.filter(type => {
    //     return (
    //       type.typeUniteAdministrative.libelle.toLowerCase().includes(st) ||
    //       type.uniteAdministrative.libelle.toLowerCase().includes(st)
         
    //     );
    //   });
    // },
 filtre_unite_admin() {
                if(this.noDCfNoAdmin){
                    let colect=[];
                    let vM=this
                    this.uniteAdministratives.filter(item=>{
                        console.log("OK bonjour GUE")
                        if(vM.getterUniteAdministrativeByUser.length>0){
                            let val= vM.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                            if (val!=undefined){
                                colect.push(item)
                                return item
                            }
                        }

                    })
                    return colect
                }
                return this.uniteAdministratives
            },
filtre_Stock() {
       
        if (this.noDCfNoAdmin){
            let colect=[];
            this.GestionStockageArticles.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect;
        }

        return this.GestionStockageArticles;

    },


// listeDesStockParUa() {
      


   
//         if (this.noDCfNoAdmin ){
//             let colect=[];
//             this.GestionStockageArticles.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
               
//             })
//            return colect
//           }
//         return this.GestionStockageArticles
         



//     },

listeDesStockParUa() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.GestionStockageArticles.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
           return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.uAdministrative_id == id);
        }
      };
        }

        return id => {
        if (id != null && id != "") {
          return this.GestionStockageArticles.filter(element => element.uAdministrative_id == id);
        }
      };

    },

quantiteInitial() {
       


        if (this.noDCfNoAdmin){
            let colect=[];
            this.GestionStockageArticles.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            //return colect
          
              return id => {
        if (id != null && id != "") {
          return this.colect.filter(element => element.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.histo_qte), 0).toFixed(0);
        }
      };
         
       
        }
//return this.GestionStockageArticles.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
       
        

     return id => {
        if (id != null && id != "") {
          return this.GestionStockageArticles.filter(element => element.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.histo_qte), 0).toFixed(0);
        }
      };
    },

nombreDeQuantiteEnStock() {
       


        if (this.noDCfNoAdmin){
            let colect=[];
            this.GestionStockageArticles.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            //return colect
          
              return id => {
        if (id != null && id != "") {
          return this.colect.filter(element => element.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
        }
      };
         
       
        }
//return this.GestionStockageArticles.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
       
        

     return id => {
        if (id != null && id != "") {
          return this.GestionStockageArticles.filter(element => element.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
        }
      };
    },
nombreDeQuantiteSortiEnStock() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.GestionStockageArticles.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          
          return id => {
        if (id != null && id != "") {
          return this.colect.filter(element => element.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qtesortie), 0).toFixed(0);
        }
      };
       
         //return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qtesortie), 0).toFixed(0);
       }

      return id => {
        if (id != null && id != "") {
          return this.GestionStockageArticles.filter(element => element.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qtesortie), 0).toFixed(0);
        }
      };

 //return this.GestionStockageArticles.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qtesortie), 0).toFixed(0);
    },









     libelleFamilleEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     libelleTypeEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.equipements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     libelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
quantiteActuel() {
      const val = parseInt(this.quantiteEnt) + parseInt(this.quantiteenstock);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    nouvelleQte() {
      const val = parseInt(this.editStock.histo_qte) + parseInt(this.editStock.qteentrant1);
      
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
     HistorqteModifier() {
      const val = parseInt(this.editStock.quantitestock);
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
// uniteAdministrativeDynamiques() {
//       return id => {
//         if (id != null && id != "") {
//           return this.uniteAdministratives.filter(element => element.type_ua_id == id);
//         }
//       };
//     },
uniteAdministrativeDynamiques() {
      


   
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.type_ua_id == id);
        }
      };
          }
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
    ajouterEntreEnPatrimoine(){
                this.$router.push({ name: 'AjouterEntrePatrimoine' })
            },
    formatageSomme: formatageSomme,

            afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModifierEntrePatrimoine/" + id
      });
    },
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
       this.$("#exampleModal").modal('hide');
      this.formData = {
      uAdministrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qtesortie:"0"
      };
    },
    // afficher modal de modification
    afficherModalModifierStock(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editStock = this.GestionStockageArticles[index];
    },
    afficherModalStock(index) {
      this.$("#exampleModalStock").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editStock = this.GestionStockageArticles[index];
    },

     modifierStockEntrant() {
      var nouvelObjet = {
        ...this.editStock,
       quantitestock: this.quantiteActuel,
        qteentrant: this.quantiteEnt,
        histo_qte:this.nouvelleQte
      
      };
      this.modifierStock(nouvelObjet);
       this.$("#exampleModalStock").modal('hide');
       this.editStock = {
     
        quantitestock: "",
      };
      
    },
    // fonction pour vider l'input modification
    modifierStockLocal() {
      var nouvelObjet = {
        ...this.editStock,
       histo_qte: this.HistorqteModifier,
      
      
      };
      this.modifierStock(nouvelObjet);
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
.taillemodalMod{
   width: 500px;
  margin: 0 -200px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
.tailgrandStock{
  width: 88%;
  margin: 0 -42%;
}
</style>
