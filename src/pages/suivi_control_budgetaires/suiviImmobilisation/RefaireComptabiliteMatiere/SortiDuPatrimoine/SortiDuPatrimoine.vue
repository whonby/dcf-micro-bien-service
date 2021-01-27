DureeEcoule
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
                            <label class="control-label">Fichier joint</label>
                            <div class="controls">
                              <input type="file" class="span4"/>
                               
                            </div>
                          </div>
         </td>
       </tr>
       <tr>
         <td>
                                <label >Unite Administrative</label><code style="color:red;font-weight:bold;">*</code>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="formData3.uAdministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
       </tr>
       <tr>
          <td colspan="2">
           <div class="control-group">
                            <label class="control-label">Information Complémentaire</label>
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
   

    <div>
      <hr />
      <div class="row-fluid">
        <div class="span12">
        <h2 style="text-align:center;font-size:25px">UNITE D'ADMINISTRATIVE : {{libelleUniteAdministrative(detail_Ua.uAdministrative_id)}}</h2>
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
                       
                    </ul>
                  </div>
                  <div class="widget-content tab-content">


          <div id="SortiPatrimone" class="tab-pane active">
 <table class="table table-bordered table-striped">
             <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                     <!-- <li class="active">
                        <a data-toggle="tab" href="#EntreeEnStock">Mon Patrimoine</a>
                      </li> -->
                       <li class="active" v-if="AfficheCode1 == 3">
                        <a data-toggle="tab" href="#EntreeEnStock" >{{AfficheLibelle1}}  </a>
                      </li>
                       <li class="" v-if="AfficheCode2 == 1">
                        <a data-toggle="tab" href="#Affectation2" >{{AfficheLibelle2}} </a>
                      </li>
                       <li class="" v-if="AfficheCode3 == 2">
                        <a data-toggle="tab" href="#Affectation3" >{{AfficheLibelle3}}  </a>
                      </li>
                       <!-- <li class="" v-if="AfficheCode4 == 4">
                        <a data-toggle="tab" href="#Affectation4" >{{AfficheLibelle4}}</a>
                      </li>
                       <li class="" v-if="AfficheCode5 == 5">
                        <a data-toggle="tab" href="#Affectation5" >{{AfficheLibelle5}}</a>
                      </li>
                       <li class="" v-if="AfficheCode6 == 6">
                        <a data-toggle="tab" href="#Affectation6" >{{AfficheLibelle6}}</a>
                      </li>
                       <li class="" v-if="AfficheCode7 == 7">
                        <a data-toggle="tab" href="#Affectation7" >{{AfficheLibelle7}}</a>
                      </li>
                       <li class="" v-if="AfficheCode8 == 8">
                        <a data-toggle="tab" href="#Affectation8" >{{AfficheLibelle8}}</a>
                      </li> -->
                     
                    </ul>
                  </div>
             </div>
              </table>
          </div>
      <div class="widget-content tab-content">
        <div class="tab-pane active " id="EntreeEnStock" >
 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div> -->
                    
                     <th style="width:15%;text-align:center">Article </th>
                     <th style="width:10%;text-align:center">Immatriculation</th>
                     
                     <th style="width:10%;text-align:center">Marque</th>
                     <th style="width:10%;text-align:center">Modèle</th>
                     <th style="width:10%;text-align:center">No Chassis/No série</th>
                    <th style="width:10%;text-align:center">Date d'acquisition / mise en service</th> 
                    <th style="width:10%;text-align:center">Quantité</th>
                    <th style="width:10%;text-align:center">Valeur d'acquisition</th>
                    <th style="width:10%;text-align:center">Amortissement</th>
                   <th style="width:10%;text-align:center">Valeur nette comptable</th>
                    <th style="width:5%" colspan="">Action</th>
                  </tr>
                </thead>
                <tbody>
                     <tr
                    class="odd gradeX"
                    v-for="stock in filtre_service"
                    :key="stock.id"
                  >

                    <td style="text-align:center"
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{libelleFamilleEquipement(stock.articlestock_id) || 'Non renseigné'}}</td>
                    <td style="text-align:center"
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{stock.numimmatriculation || 'Non renseigné'}}</td>
                     <td style="text-align:center"
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{libelleMarque(stock.marque_id) || 'Non renseigné'}}</td>
                     <td style="text-align:center"
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{libelleModelle(stock.model_id) || 'Non renseigné'}}</td>
                    <td style="text-align:center"
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{stock.numchassis || 'Non renseigné'}}</td>
                    <td style="text-align:center;font-weight:bold;" v-if="stock.date_mise_service != null"
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{formaterDate(stock.date_mise_service) || 'Non renseigné' }}</td>
                    <td style="text-align:center;font-weight:bold;" v-else
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{'Non renseigné'}}</td>



                    <td style="text-align: center;"
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{stock.quantitestock || 'Non renseigné'}}</td>


                  <td 
                      @dblclick="ModificationVehicule(stock.id)"
                      style="text-align:center;font-weight:bold;"
                    >{{formatageSomme(parseFloat(montantPasEquipment(stock))) || 'Non renseigné'}}</td>
                   


                    <td style="text-align:center;font-weight:bold;" v-if="stock.date_mise_service != null"
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{formatageSomme((parseFloat(prixUnitaire(stock.id)) *((DureeEcoule(stock.id))/365)*(1/(dureeVie(stock.id)))))|| 0}}</td>

<td style="text-align:center;font-weight:bold;" v-else
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{formatageSomme(0)}}</td>

<td style="text-align:center;font-weight:bold;" v-if="stock.date_mise_service != null"
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{formatageSomme((parseFloat(stock.prix_unitaire))-parseFloat((parseFloat(prixUnitaire(stock.id)) *(parseFloat(DureeEcoule(stock.id))/365)*(1/(dureeVie(stock.id))))))}}</td>
<td style="text-align:center;font-weight:bold;" v-else
                      @dblclick="ModificationVehicule(stock.id)"
                    >{{formatageSomme(0)}}</td>
                        


                      <td style="font-size:14px" >
                       <button 
                        @click.prevent="afficherModalModifierService(index)"
                       class="btn  btn-success">
                <span >Sortie</span>
       
                </button>
                      </td>
                  </tr>
                 <tr>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td style="font-weight:bold;">TOTAL</td>
                   <td style="text-align:center;color:red;font-weight:bold;">{{NbreDesEquipementVehicules(detail_Ua.uAdministrative_id)}}</td>
                   <td style="text-align:center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantTotalVehicule))}}</td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                 </tr>
                </tbody>
              </table>

        </div>
           
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

 <!-- <fab :actions="fabActions"
                main-icon="apps"
          
        @searchMe="filter"
         
        bg-color="green"

  ></fab> -->
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
        
        {
                  name: 'searchMe',
                   icon: "search"
              }
        
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
 created() {
            this.marcheid=this.$route.params.id
   this.detail_Ua = this.GestionStockageArticles.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  
},
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
     "immobilisations",
     "Typebiengrpecorporels"
    ]),
    
    ...mapGetters("uniteadministrative", ["uniteAdministratives","GestionStockageArticles","groupStockParUA"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
// admin:admin,
//       dcf:dcf,
//       noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
...mapGetters("personnelUA", ["personnaliseActeurDepense","acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

AfficheLibelle1() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 3);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
	},



AfficheCode2() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 1);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle2() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 1);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
	},


AfficheCode3() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 2);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle3() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 2);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
AfficheCode4() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 4);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle4() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 4);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
AfficheCode5() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 5);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle5() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 5);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
AfficheCode6() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 6);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle6() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 6);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
AfficheCode7() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 7);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle7() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 7);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
AfficheCode8() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 8);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle8() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 8);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
  },
  
  
AfficheCode9() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 9);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle9() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 9);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
	},
AfficheCode10() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 10);
      if (qtereel) return qtereel.code
      return 5
      
	},
	AfficheLibelle10() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 10);
      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
       
	},
recupereTypeBien_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.typebien_id;
      }
      return 0
        }
      };
    },




recupereTypeBien() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_bien;
      }
      return 0
        }
      };
    },
recupereTypeBienParCode() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
recupereTypeBienParLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


objetMarchePasUniteOuRegion(){

                let vM=this;
                let objet=this.affichebudgetActive

                //retourne la section selectionner
              
                if(this.section!="" && this.grandeNature_id=="" && this.typeFinancement_id==""){
                  
                    objet =objet.filter(item=>{
                        if(item.section_id==vM.section){
                            return item
                        }
                    })

                }
             if(this.section!="" && this.grandeNature_id!="" && this.typeFinancement_id==""){
                  
                    objet =objet.filter(item=>{
                        if(item.section_id==vM.section && item.gdenature_id==vM.grandeNature_id){
                            return item
                        }
                    })

                }

                return objet
            },
















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
AfficheCode1() {
      
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.code== 3);
      if (qtereel) return qtereel.code
      return 5
      
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
   
    

montantPasEquipment(){
     return stock=>{
        if(stock){
          let montant=parseFloat(stock.quantitestock)*parseFloat(stock.prix_unitaire)
          return  montant
        }
        return 0
     }
   },
    
   montantTotalMobilier(){
      let montantTotal =0
       let vm=this
       this.listeDesEquipementPar04(this.detail_Ua.uAdministrative_id).forEach(function(val){
           montantTotal = montantTotal + vm.montantPasEquipment(val)
       })
       return montantTotal
   },
    montantTotalMateriel(){
      let montantTotal =0
       let vm=this
       this.listeDesEquipementPar03(this.detail_Ua.uAdministrative_id).forEach(function(val){
           montantTotal = montantTotal + vm.montantPasEquipment(val)
       })
       return montantTotal
   },
   montantTotalVehicule(){
      let montantTotal =0
       let vm=this
       this.filtre_service.forEach(function(val){
           montantTotal = montantTotal + vm.montantPasEquipment(val)
       })
       return montantTotal
   },
dateMiseService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.date_mise_service;
      }
      return 0
        }
      };
    },
    dureeVie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.durevie;
      }
      return 0
        }
      };
    },
    prixUnitaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_unitaire;
      }
      return 0
        }
      };
    },
    SommeArmortissement(){
  
  const val = parseInt(this.prixUnitaire(this.detail_Ua.id)) *(parseInt(this.DureeEcoule)/365)*(1/(this.dureeVie(this.detail_Ua.id)));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0

},
    
afficherDateDuJour(){
let date = new Date();
        let aaaa = date.getFullYear();
        let gg = date.getDate();
        let mm = (date.getMonth() + 1);
        let moi;
        let jour;
        if (gg < 10)
        {
            jour = "0" + gg;
        }else{
            jour = gg
        }


        if (mm < 10)
        {
            moi = "0" + mm;
        }else{
            moi=mm;
        }


        let cur_day =  aaaa + "-" + moi + "-" + jour;

        return cur_day


    
   
   },

filtre_service() {
      const st = this.search.toLowerCase();
      return this.listeDesEquipementPar01(this.detail_Ua.uAdministrative_id).filter(type => {
        return (
         
          type.numimmatriculation.toLowerCase().includes(st)
         
        );
      });
    },
    filterMaterielListe() {
      const st = this.search1.toLowerCase();
      return this.listeDesEquipementPar03(this.detail_Ua.uAdministrative_id).filter(type => {
        return (
         
          type.libelleFamilleEquipement(this.detail_Ua.articlestock_id).toLowerCase().includes(st)
         
        );
      });
    },
    MontantTotalMateriel() {
      return id => {
        if (id != null && id != "") {
           return this.listeDesEquipementPar03(this.detail_Ua.uAdministrative_id).filter(qtreel => qtreel.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);

        }
      };
    },
    MontantTotalVehicule() {
      return id => {
        if (id != null && id != "") {
           return this.filtre_service.filter(qtreel => qtreel.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);

        }
      };
    },
    sommeDesQuantiteAcquise(){
  return this.listeDesEquipementPar03(this.detail_Ua.uAdministrative_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
},
sommeDesVehicule(){
  return this.filtre_service.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire), 0).toFixed(0);
},
sommeDesQuantite(){
  return this.filtre_service.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
},
NombreDeVehicule() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 3).length;

        }
      };
    },
    NombreDeMobilier() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 2).length;

        }
      };
    },
    NombreDeMateriel() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 1).length;

        }
      };
    },
   
PrixUnitaireParModel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ficheArticle.find(qtreel => qtreel.model_id == id);

      if (qtereel) {
        return qtereel.prix_unitaire;
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
    listeDesEquipementPar01() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 3 && qtreel.quantitestock != 0);

        }
      };
    },
listeDesEquipementPar03() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 1);

        }
      };
    },
listeDesEquipementPar04() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id &&  this.recupereTypeBienParCode(qtreel.typebien_id) == 2);

        }
      };
    },
    NbreDesEquipementMobilier() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id &&  this.recupereTypeBienParCode(qtreel.typebien_id) == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);

        }
      };
    },
    NbreDesEquipementMateriel() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id &&  this.recupereTypeBienParCode(qtreel.typebien_id) == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);

        }
      };
    },
    NbreDesEquipementVehicules() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id &&  this.recupereTypeBienParCode(qtreel.typebien_id) == 3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);

        }
      };
    },
    listeDesEquipementPar05() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id &&  this.recupereTypeBienParCode(qtreel.typebien_id) == 4);

        }
      };
    },
    listeDesEquipementPar06() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id &&  this.recupereTypeBienParCode(qtreel.typebien_id) == 5);

        }
      };
    },
    listeDesEquipementPar07() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 6);

        }
      };
    },
    listeDesEquipementPar08() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 7);

        }
      };
    },
    listeDesEquipementPar09() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(qtreel.typebien_id) == 8);

        }
      };
    },
listeDesEquipementPar10() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && this.recupereTypeBienParCode(this.recupereTypeBien(this.detail_Ua.famill_id)) == '10');

        }
      };
    },

 libelleFamilleEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.articles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

TotalArticle() {
      return id => {
        if (id != null && id != "") {
           return this.AffectationUaBiens.filter(element => element.ua_mettrice_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);

        }
        //return this.listeDesStockGlobalUa.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
      };
     
    },
LibelleModel() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id && qtreel.famill_id == this.editService.famille_id);

        }
      };
    },
listedesarticleenstock() {
      return id => {
        if (id != null && id != "") {
           return this.groupStockArticle.filter(qtreel => qtreel[0].uAdministrative_id == id && qtreel[0].famill_id == this.editService.famille_id);

        }
      };
    },



lispersonnelParUa() {
      return id => {
        if (id != null && id != "") {
           return this.acte_personnels.filter(qtreel => qtreel.unite_administrative_id == id);

        }
      };
    },

afficherQuantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.model_id== id);

      if (qtereel) {
        return qtereel.quantitestock;
      }
      return 0
        }
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
    libelleModel() {
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
libelleArticle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 'Non renseigné'
        }
      };
    },
  
listeArticleTransfert() {
      return id => {
        if (id != null && id != "") {
           return this.AffectationUaBiens.filter(qtreel => qtreel.ua_mettrice_id == id);

        }
      };
    },
 
 afficheService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.servicesua.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.serviceua_id;
      }
      return 0
        }
      };
    },
 afficheServiceLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


 anneeAmortissement() {
      const val = parseInt(this.exerciceBudgetaireEnCours) + parseInt(this.afficherDureeVieFamille(this.editService.famille_id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },












afficheLeBesoinDemande() {
      
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.fonction_id == id);
        }
      };
    },



  afficherUniteAdministrative() {
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
// verifierLaNorme(){
//     let normeInitial=parseFloat(this.afficheNormeFamille)
//       let qteDemande=parseFloat( this.formData.quantite)
//        if(normeInitial < qteDemande){
//         alert("La norme doit etre superieure a la qte demande")
//       }
// },


 


CoutMoyen() {
 return id => {
    if(id !=""){
      
    const val = parseFloat((this.getAfficheArticle.filter(element => element.famillearticle_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2))/this.getAfficheArticle.filter(element => element.famillearticle_id == id).length).toFixed(0); 
    if (isNaN(val)) return null;
    return val;
  
 }
  }
    },

 montantTotalarticlesModifier() {
   if(this.editBesoinImmo.famillearticle_id !=""){
      const val = parseFloat(this.editBesoinImmo.quantite) * parseFloat(this.CoutMoyen(this.editBesoinImmo.famillearticle_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},
 montantTotalarticles() {
   if(this.editService.famille_id !=""){
      const val = parseFloat(this.formData.quantite) * parseFloat(this.CoutMoyen(this.editService.famille_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},

 deverouFonctionDirectionService() {
      return this.formData.uniteadmin_id == "";
    },
afficheActeurDepense() {
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.fonctionActeur.id == id);
        }
      };
    },

// afficheActeurDepense() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.all_acteur_depense.find(qtreel => qtreel.fonction.id == this.formData.fonction_id);

//       if (qtereel) {
//         return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom)
//       }
//       return 0
//         }
//       };
//     },
 fonctionDynamiquesParUa() {
      return id => {
        if (id != null && id != "") {
          return this.all_acteur_depense.filter(element => element.uniteZone_id == id);
        }
      };
    },
auteurParUaDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.uniteZone_id == id);
        
        }
        
      };
    },
 familleNormeDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.direction_id == id);
        }
      };
    },
     familleNormeServiceDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.service_id == id);
        }
      };
    },
      familleNormeFonctionDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.fonction_id == id);
        }
      };
    },
uniteAdministDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteAdministratives.filter(element => element.type_ua_id == id);
        }
      };
    },
directionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.directions.filter(element => element.d_ua_id == id);
        }
      };
    },

fonctionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.ua_id == id);
        }
      };
    },
    afficheNormeFamille() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famillearticle_id == this.editService.famille_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },
        afficheNormeFamilleModifier() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famillearticle_id == this.editBesoinImmo.famillearticle_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },

afficherIdService() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.getterplanOrganisationUa.find(qtreel => qtreel.ua_id == id && qtreel.serviceua_id == id1);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },


  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "modifierImmobilisationSortie",
      "getAllImmobilisation"
      
    ]),
    DureeEcoule(id){
     

      var dateF = new Date(this.afficherDateDuJour).getTime()
      var dateO = new Date(this.dateMiseService(id)).getTime()
      var resultat = dateF - dateO

      var diffJour =  resultat / (1000 * 3600 * 24)

      if(isNaN(diffJour)) return null

      if(parseFloat(diffJour) < 0 ) return "durée invalide"
      
      return  diffJour;

    },

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
