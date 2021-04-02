uniteAdministratives
<template>
  <div>


    <div >
        <br>
        <br>
        <br>
        <div class="" align="right">
                   <router-link :to="{name:'AjoutPersonnelSansContrat'}" tag="a" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter  Personnel Ua Sans Contrat

                   </router-link> 
<router-link :to="{name:'AjoutPersonnelAvecContrat'}" tag="a" data-toggle="modal" class="btn btn-info" align="rigth">Ajouter  Personnel Ua avec Contrat

                   </router-link> 
                   </div>
                   <br>
                   <br>
    <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                         <th style="width:90%">UNITE D'ADMINISTRATIVE</th>
                        <th colspan="2">ACTION</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in listeDesStockGlobalUa"
                    :key="BesoinImmo[0].id"
                  >
                  <td style="font-size:25px"
                   
                    >{{libelleUniteAdministrative(BesoinImmo[0].unite_administrative_id) || 'Non renseigné'}}</td>
                 
                     <td>
                       <router-link
                        :to="{name : 'ListesPersonnelParUa', params: {id:BesoinImmo[0].id}}"
                        class="btn btn-success"
                        title="Voir Personnel"
                      >
                        <span>
                          <i class="icon icon-folder-open" style="font-size:14px"> Voir Personnel</i>
                        </span>
                      </router-link>
                     </td>
                     <td>
                       <button  class="btn btn-info">{{NombrePersonnel(BesoinImmo[0].unite_administrative_id)}} PERSONNELS</button>
                     </td>
                  </tr>
                  
                    </tbody> 
                </table>   
     
    </div>

    <!-- <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="ajouterEntreEnPatrimoine()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="ajouterEntreEnPatrimoine"
        @searchMe="filter"
         
        bg-color="green"

  ></fab> -->
<notifications  />
  </div>
</template>
  
<script>
 import {formatageSomme} from "../../../vuex/modules/guei/Repositories/Repository"
    import {mapGetters, mapActions} from 'vuex';
    import moment from "moment";
import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth";

export default {
//   components: {
    
//     ModelListSelect,
     
//   },
  name: 'besionImmolisation',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
          
        },
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
        unite_administrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qtesortie:"0"
        
       
      },
      uniteAdministrative_id:"",
       affiche_filtre:false,
      affiche_boutton_filtre:true,
      editStock: {
       unite_administrative_id: "",
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
      "type_Unite_admins",
      "totalQteEntrant",
      "totalQteSortant",
     "getterUa_idImo",
     "ficheArticle"
    ]),
    ...mapGetters("personnelUA", ["groupePersonnel","all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives","GestionStockageArticles"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
NombrePersonnel() {
      return id => {
        if (id != null && id != "") {
           return this.all_acteur_depense.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.sib==1).length;

      
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
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
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
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
               
//             })
//            return colect
//           }
//         return this.GestionStockageArticles
         



//     },
// nombreDeQuantiteSortiEnStock() {
//       return id => {
//         if (id != null && id != "") {
//            return this.listeDesStockGlobalUa.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);

//         }
//         return this.listeDesStockGlobalUa.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
//       };
     
//     },
nombreDeQuantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           return this.listeDesStockGlobalUa.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);

        }
        return this.listeDesStockGlobalUa.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
      };
     
    },
    quantiteInitial() {
      return id => {
        if (id != null && id != "") {
           return this.listeDesStockGlobalUa.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.histo_qte), 0).toFixed(0);

        }
        return this.listeDesStockGlobalUa.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.histo_qte), 0).toFixed(0);
      };
     
    },
listeDesStockParUa() {
      return id => {
        if (id != null && id != "") {
           return this.listeDesStockGlobalUa.filter(qtreel => qtreel[0].unite_administrative_id == id && qtreel.sib == 0);

        }
        return this.listeDesStockGlobalUa.filter(qtreel =>qtreel.sib == 0);
      };
     
    },

listeDesStockGlobalUa() {
    
        if (this.noDCfNoAdmin){
            let colect=[];
            this.groupePersonnel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(qtreel =>qtreel[0].sib == 1);
    
        }
return this.groupePersonnel.filter(qtreel =>qtreel[0].sib == 1);
      //   return id => {
      //   if (id != null && id != "") {
      //     return this.GestionStockageArticles.filter(element => element.unite_administrative_id == id);
      //   }
      // };

    },




// nombreDeQuantiteSortiEnStock() {
      


//         if (this.noDCfNoAdmin){
//             let colect=[];
//             this.GestionStockageArticles.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
//             })
          
//           return id => {
//         if (id != null && id != "") {
//           return this.colect.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qtesortie), 0).toFixed(0);
//         }
//       };
       
//          //return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qtesortie), 0).toFixed(0);
//        }

//       return id => {
//         if (id != null && id != "") {
//           return this.GestionStockageArticles.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qtesortie), 0).toFixed(0);
//         }
//       };

//  //return this.GestionStockageArticles.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qtesortie), 0).toFixed(0);
//     },




 
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
      return  this.formData.unite_administrative_id == "" ;
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
    ...mapActions("uniteadministrative", ["uniteAdministratives","supprimerStockArticle"]),
    filter(){
                this.affiche_filtre=!this.affiche_filtre
               
            },
    videUniteAdministrative(){
                this.uniteAdministrative_id =""
            },
    ajouterEntreEnPatrimoine(){
                this.$router.push({ name: 'AjouterEntrePatrimoine' })
            },
    formatageSomme: formatageSomme,

            afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModifierEntrePatrimoine/" + id
      });
    },
    afficherAjouterBien(){
                this.$router.push({ name: 'AjouterEntrePatrimoine' })
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
      unite_administrative_id: "",
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
