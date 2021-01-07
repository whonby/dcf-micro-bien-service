<template>
  <div>
    <div id="exampleModalValidationdirecteur" class="modal hide valDirecteur">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>MOTIF DE SORTIE</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
       <tr>
         <td>
           <div class="control-group">
                            <label class="control-label">Date de sortie du patrimoine</label>
                            <div class="controls">
                              <input type="date" class="span5" v-model="editService.datesorti"/>
                               
                            </div>
                          </div>
         </td>
         <td>
           <div class="control-group">
                            <label class="control-label">Fichier join</label>
                            <div class="controls">
                              <input type="file" class="span4"/>
                               
                            </div>
                          </div>
         </td>
       </tr>
       <tr>
          <td colspan="2">
           <div class="control-group">
                            <label class="control-label">Objet de la sortie</label>
                            <div class="controls">
                              <textarea name="" id="" cols="15" rows="5" class="span10" v-model="editService.objetsorti"></textarea>
                               
                            </div>
                          </div>
         </td>
       </tr>
        </table>
     
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierImmobilisatSortie()"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
 <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background: #f0c71d !important;">
                    <table class="table table-striped"  style="background: #f0c71d !important;">
                        <tbody>
                        <tr>
                        
                            
                            <td style="background: #f0c71d !important;">
                                <label style="font-size:20px">Unité Administrative<a href="#" @click.prevent="videUniteAdministrative()" v-if="uniteAdministrative_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="uniteAdministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                          
                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>
   
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
   
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Mon Patrimoine</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding" >
             
            </div>
           <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                     <li class="active">
                        <a data-toggle="tab" href="#SortiPatrimone">Equipement Dans le patrimoine</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#Sorti">Sortie du patrimoine</a>
                      </li>
                    
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">


          <div id="SortiPatrimone" class="tab-pane active">
 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                     
                     
                     <th>Code Immobilisation</th>
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Modele</th>
                     <th>N°Serie</th>
                    <th>Utilisateur</th> 
                    <th >Service Rattaché</th>
                    <th>Durée de vie</th>
                     <th>Valeur Acquisition</th>
                    <th >Valeur nette Comptable</th>
                    <th>Etat</th>
                     <th>Action</th>
                     
                    <!-- <th>Duree de vie</th> -->
                   
                   
                  </tr>
                </thead>
                <tbody>
                      <tr
                    class="odd gradeX"
                    v-for="(service,index) in EquipementDansLePatrimoine(uniteAdministrative_id)"
                    :key="service.id"
                  >
                    <td style="font-size:14px" >{{CodeImmobilisation(service.famillearticle_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{libelleFamilleEquipement(service.famillearticle_id) || 'Non renseigné'}}</td>                      
                   <td style="font-size:14px" >{{libelleMarque(service.marque_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{libelleModelle(service.model_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{NumeroSerie(service.famillearticle_id) || 'Non renseigné'}}</td>
                    
                    <td style="font-size:14px" >{{NomPersonnel(service.actepersonnel_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{service.service_id || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{DureVie(service.famillearticle_id) || 'Non renseigné'}} Ans</td>
                    <td style="font-size:14px" >{{formatageSomme(parseFloat(ValeurAcquise(service.famillearticle_id))) || 'Non renseigné'}}</td>
                   <td style="font-size:14px" >{{service.famillearticle_id || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{service.famillearticle_id || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >
                       <button 
                        @click.prevent="afficherModalModifierService(index)"
                       class="btn  btn-success">
                <span >Sortie</span>
       
                </button>
                    </td>
                    
                  </tr>
                </tbody>
              </table>
          </div>
       <div id="Sorti" class="tab-pane">
             <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                     
                     
                     <th>Code Immobilisation</th>
                     <th>Famille</th>
                     <th>Marque</th>
                     <th>Modele</th>
                     <th>N°Serie</th>
                    <th>Utilisateur</th> 
                    <th >Service Rattaché</th>
                    <th>Durée de vie</th>
                     <th>Valeur Acquisition</th>
                    <th >Valeur nette Comptable</th>
                    <th>Etat</th>
                     <!-- <th>Action</th> -->
                     
                    <!-- <th>Duree de vie</th> -->
                   
                   
                  </tr>
                </thead>
                <tbody>
                      <tr
                    class="odd gradeX"
                    v-for="service in EquipementSortiDansLePatrimoine(uniteAdministrative_id)"
                    :key="service.id"
                  >
                    <td style="font-size:14px" >{{CodeImmobilisation(service.famillearticle_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{libelleFamilleEquipement(service.famillearticle_id) || 'Non renseigné'}}</td>                      
                   <td style="font-size:14px" >{{libelleMarque(service.marque_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{libelleModelle(service.model_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{NumeroSerie(service.famillearticle_id) || 'Non renseigné'}}</td>
                    
                    <td style="font-size:14px" >{{NomPersonnel(service.actepersonnel_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{service.service_id || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{DureVie(service.famillearticle_id) || 'Non renseigné'}} Ans</td>
                    <td style="font-size:14px" >{{formatageSomme(parseFloat(ValeurAcquise(service.famillearticle_id))) || 'Non renseigné'}}</td>
                   <td style="font-size:14px" >{{service.famillearticle_id || 'Non renseigné'}}</td>
                    <td style="font-size:14px" >{{service.famillearticle_id || 'Non renseigné'}}</td>
                    <!-- <td style="font-size:14px" > -->
                       <!-- <button 
                        @click.prevent="afficherModalModifierService(index)"
                       class="btn  btn-success">
                <span >Sortie</span>
       
                </button> -->
                    <!-- </td> -->
                    
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
      
       
 
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
          
        @searchMe="filter"
         
        bg-color="green"

  ></fab>
<notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../../../Repositories/Repository";
// import {admin,dcf,noDCfNoAdmin} from "../../../../../Repositories/Auth"
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
        // {
        //   name: "cache",
        //   icon: "add",
          
        // },
        {
                  name: 'searchMe',
                   icon: "search"
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
      editService:{},
      uniteAdministrative_id:"",
       affiche_filtre:false,
      affiche_boutton_filtre:true,
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
     "marqueVehicules",
     "ModeleVehicules",
      "ficheArticle",
      "type_Unite_admins",
      "totalQteEntrant",
      "totalQteSortant",
     "getterUa_idImo",
     "immobilisations"
    ]),
    
    ...mapGetters("uniteadministrative", ["uniteAdministratives","GestionStockageArticles"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
// admin:admin,
//       dcf:dcf,
//       noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
...mapGetters("personnelUA", ["personnaliseActeurDepense","acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

 CodeImmobilisation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ficheArticle.find(qtreel => qtreel.article_id == id);

      if (qtereel) {
        return qtereel.numero_matricule;
      }
      return 0
        }
      };
    },

 NumeroSerie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ficheArticle.find(qtreel => qtreel.article_id == id);

      if (qtereel) {
        return qtereel.numero_serie;
      }
      return 0
        }
      };
    },
 ValeurAcquise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ficheArticle.find(qtreel => qtreel.article_id == id);

      if (qtereel) {
        return qtereel.prix_unitaire;
      }
      return 0
        }
      };
    },


  DureVie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.dureVie;
      }
      return 0
        }
      };
    },
NomPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseActeurDepense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom.concat("  ", qtereel.prenom);
      }
      return 0
        }
      };
    },

ListeActiclePatrimoineSortant() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.immobilisations.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect;
      //      return id => {
      //   if (id != null && id != "") {
      //     return colect.filter(element => element.uniteadministrative_id == id && element.etatsorti==0);
      //   }
      // };
        }
return this.immobilisations;
      //   return id => {
      //   if (id != null && id != "") {
      //     return this.immobilisations.filter(element => element.uniteadministrative_id == id && element.etatsorti==0);
      //   }
      // };

    },

EquipementDansLePatrimoine() {
      return id => {
        if (id != null && id != "") {
           return this.ListeActiclePatrimoineSortant.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.etatsorti==0);

        }
        return this.ListeActiclePatrimoineSortant.filter(qtreel => qtreel.etatsorti==0);
      };
     
    },

EquipementSortiDansLePatrimoine() {
      return id => {
        if (id != null && id != "") {
           return this.ListeActiclePatrimoineSortant.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.etatsorti==1);

        }
        return this.ListeActiclePatrimoineSortant.filter(qtreel => qtreel.etatsorti==1);
      };
     
    },


  libelleMarque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marqueVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleModelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ModeleVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
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
      "modifierImmobilisationSortie",
      "getAllImmobilisation"
      
    ]),
    formatageSomme:formatageSomme,
    filter(){
                this.affiche_filtre=!this.affiche_filtre
               
            },
    videUniteAdministrative(){
                this.uniteAdministrative_id =""
            },
    ajouterEntreEnPatrimoine(){
                this.$router.push({ name: 'AjouterEntrePatrimoine' })
            },
    // formatageSomme: formatageSomme,

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
      afficherModalModifierService(index) {
      this.$("#exampleModalValidationdirecteur").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editService = this.EquipementDansLePatrimoine(this.uniteAdministrative_id)[index];
    },
    // fonction pour vider l'input ajouter
    modifierImmobilisatSortie() {

  
    var nouvelObjet = {
        
        id:this.editService.id,
      objetsorti:this.editService.objetsorti,
      datesorti:this.editService.datesorti,
      etatsorti:1
      };
      this.modifierImmobilisationSortie(nouvelObjet);
      this.getAllImmobilisation()
       this.$("#exampleModalValidationdirecteur").modal('hide');
      this.editService = {
      
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
.valDirecteur{
  width:45%;
  margin:0 -25%;
}
</style>
