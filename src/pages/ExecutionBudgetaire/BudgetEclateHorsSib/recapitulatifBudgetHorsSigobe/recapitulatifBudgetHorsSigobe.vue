<template>
  <div>
       <!-- <table class="table table-striped">
          <tbody>
            <tr>
              <td colspan="">
                <br />
              
                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >UNITE ADMINISTRATIVE{{uniteAdmin_id}}<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="uniteAdministratives"
                  v-model="uniteAdmin_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="TOUTES LES UNITES ADMINISTRATIVES"
                >
                </model-list-select>
              </td>
              
             
            </tr>
          </tbody>
        </table> -->
    <div class="container-fluid">
      <notifications />
      <div class="widget-box">
        <div class="widget-title">
          <span class="icon">
            <i class="icon-th"></i>
          </span>
          <h5>Detail budget {{detailBudget}}</h5>
        </div>

       <div class="span4">
                    <br>
                    Afficher
                    <select name="pets" id="pet-select" v-model="size" class="span3">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    Entrer
                </div>

        <div class="widget-content nopadding">
          <table class="table table-bordered table-striped">
            <thead>
              <tr style="">
                <th style="font-size:15px;">Unité administrative</th>
                <th style="font-size:15px;" title="Budget du personnel">Personnels (FCFA)</th>

                <th style="font-size:15px;" title="Budget de bien et service">Biens et Services (FCFA)</th>
                <th style="font-size:15px;" title="Budget en inverstisement">Inverstisements (FCFA)</th>
                <!-- <th style="font-size:15px;" title="Budget en transfert">Transferts</th> -->

                <th style="font-size:15px;background: blue; color:#fff">Total (FCFA)</th>
                <th style="font-size:15px;background: forestgreen; color:#fff">Consommés (FCFA)</th>
                <th style="font-size:15px;background: red;color:#fff">Disponibles (FCFA)</th>
                <th style="font-size:15px;background:deepskyblue;color:#fff">Taux Exécution (%)</th>
                  <!-- <th style="font-size:15px;background: default;color:#fff">Action</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="unite in partition(uniteAdmin,size)[page]" :key="unite.id">
                
                <td style="font-weight:bold;font-size:12px;">{{libelleUniteAdministrative(unite)}}</td>
                <td
                  style="font-weight:bold;font-size:12px;text-align:center"
                >{{formatageSommeSansFCFA(parseFloat(budgetPersonnel(unite)))}}</td>
                <td
                  style="font-weight:bold;font-size:12px;;text-align:center"
                >{{formatageSommeSansFCFA(parseFloat(budgetBienService(unite)))}}</td>
                <td
                  style="font-weight:bold;font-size:12px;;text-align:center"
                >{{formatageSommeSansFCFA(parseFloat(budgetInverstisement(unite)))}}</td>
                <!-- <td
                  style="font-weight:bold;font-size:12px;"
                >{{formatageSommeSansFCFA(parseFloat(budgetTranfert(unite)))}}</td> -->

                <td
                  style="font-weight:bold;font-size:12px;;text-align:center"
                >{{formatageSommeSansFCFA(parseFloat(MontantTotalPargdeNature(unite)))}}</td>
                <td style="font-weight:bold;font-size:12px;;text-align:center"
                >{{formatageSommeSansFCFA(parseFloat(ComsommationBudgetaire(unite)))}}</td>
                <td
                  style="font-weight:bold;font-size:12px;;text-align:center"
            
                >{{formatageSommeSansFCFA(parseFloat(MontantTotalPargdeNature(unite)) - (parseFloat(ComsommationBudgetaire(unite))))}}</td>
                
                <td style="font-weight:bold;font-size:12px;;text-align:center">{{((parseFloat(ComsommationBudgetaire(unite))/parseFloat(MontantTotalPargdeNature(unite)))*100).toFixed(2)|| 0}}%</td>
          
             
              </tr>

            </tbody>
          </table>
         
        </div>
      </div>
       
    </div>
    <div class="pagination alternate">
              <ul>
                <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                   <li  v-for="(titre, index) in partition(uniteAdmin,size).length" :key="index" :class="{ active : active_el == index }">
                   <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                <li :class="{ disabled : page == partition(uniteAdmin,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

              </ul>
           </div>
  </div>
</template>


<script>

    import { mapGetters, mapActions } from "vuex";
    import { formatageSommeSansFCFA,partition } from "@/Repositories/Repository";
    import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
//     import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
    //import ProgressBar from "../component/ProgressBar"
    export default {
        name: 'budget',
        components:{
            //ProgressBar
            //ModelListSelect
        },
        data() {
            return {
              page:0,
              size:10,
              active_el:0,
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                uniteAdmin_id:"",
                editUniteAdministrative:{},
                detailBudget:"",
                budgetGeneralCharge:"",
                progress:0,
                bgWidth: '0%',
                bgHeight: '30px',
                exercice_budget:"",
                message_mandater:'',
                i:0,
                isOffreTechniqueFinancier:false,
                namePDF: "",
                uploadPercentage:0,
                fichierPDF: "",
                imagePDF:"",
                selectedFile:"",
                resultaAnalysePv:[],
                resultaFinalCandidat:[],
                entreprise_vainqueur:"",
                registrecc_vainqueur:"",
                identreprise_vainqueur:"",
                message_setion_vainqueur:"",
                info_avis_bailleur:"",
                namePDFDemandeAno: "",
                fichierPDFDemandeAno: "",
                imagePDFDemandeAno:"",

 search:"",
 uniteadministrative_id:""
            };
           
        },
        created() {
          //  this.detailBudget=this.getterBudgeCharge.find(item=>item.id== this.$route.params.id)
          this.budgetGeneralCharge=this.budgetGeneral.filter(item=>item.actived==1)
            console.log(this.budgetGeneralCharge)
        },
        computed: {
            ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "budgetGeneral",
                "transferts",
                "budgetEclate"
                
            ]),
            
    ...mapGetters("bienService", ["getMandatPersonnaliserVise","getMandatPersonnaliserPersonnel","mandats","gettersgestionOrdrePaiement"]),

       ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires"
            ]),
 admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

libelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },


groupeParUa() {
    //   return (id) => {
        
        let objet = this.budgetEclate;
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.uniteadministrative_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
     //};
    },
    ListeDEsEntreprise() {
      let vM = this;
      let objet = this.uniteAdmin;

      //retourne la section selectionner

      if (this.uniteAdmin_id != "") {
        objet = this.uniteAdmin.filter((item) => {
            console.log(this.uniteAdmin)
          if (item.uniteadministrative_id == vM.uniteAdmin_id) {
            return item;
          }
        });
        return objet;
      }
     
   
      
      
      return objet;
    },
uniteAdmin() {
      
 

        if (this.noDCfNoAdmin){
            let colect=[];
            this.groupeParUa.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect
        }

return this.groupeParUa

       

    },
 filtre_type_teste() {
      return id2 => {
        if (id2 != null && id2 != "") {
           return this.uniteAdministratives.filter(prod =>prod.id == id2);

     
      
        }
      };
    },

ComsommationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           return  this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==8 || qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==9 || qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==8 || qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==9).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

     
        }
      };
    },
budgetBienService() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

     
        }
      };
    },


afficherTotalBudgetModulePersonnel() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(idGrand => idGrand.gdenature_id==2 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)
        }
        return this.budgetGeneral.filter(idGrand1 => idGrand1.gdenature_id==2 && idGrand1.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

    },
              
            // afficher les totaux du budget pour le module bien && service
              // afficherTotalBudgetModuleBienService(){
              //  return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==5 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

              // },
afficherTotalBudgetModuleBienService() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(idGrand => idGrand.gdenature_id==5 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)
        }
        return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==5 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

    },
                 // afficher les totaux du budget pour le module investissement
              // afficherTotalBudgetModuleInvestissement(){
              //  return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==7 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

              // },

afficherTotalBudgetModuleInvestissement() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(idGrand => idGrand.gdenature_id==7 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)
        }
        return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==7 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

    },
                   // afficher les totaux du budget pour le module de transfert
              // afficherTotalBudgetModuleTransfert(){
              //  return this.budgetGeneral.filter(idGrand =>idGrand.gdenature_id==6 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

              // },
afficherTotalBudgetModuleTransfert() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(idGrand => idGrand.gdenature_id==6 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)
        }
        return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==6 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

    },


MontantTotalPargdeNature() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

     
        }
      };
    },
budgetPersonnel() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

     
        }
      };
    },
    budgetInverstisement() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

     
        }
      };
    },
        
     budgetTranfert() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
             return id => {
        if (id != "") {
          return colect
            .filter(element => element.ua_id == id  && element.gdenature_id==6 && element.actived ==1) 
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
              0
            )
            .toFixed(0);
        }
      };
            
        }
          return id => {
        if (id != "") {
          return this.budgetGeneral
            .filter(element => element.ua_id == id  && element.gdenature_id==6 && element.actived ==1) 
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
              0
            )
            .toFixed(0);
        }
      };
        // return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==2 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

    },
           
budgetConsommerTransfert() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.transferts.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
   return id => {
        if (id != "") {
          return colect
            .filter(element => element.ua_id == id)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_total_contrat),
              0
            )
            .toFixed(0);
        }
      };
            
        }
        return id => {
        if (id != "") {
          return this.transferts
            .filter(element => element.ua_id == id)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_total_contrat),
              0
            )
            .toFixed(0);
        }
      };
        // return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==2 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

    },

//  budgetConsommerBienService() {
//       return id => {
//         if (id != "") {
//           return this.getMandatPersonnaliserVise
//             .filter(element => element.ua_id == id && element.typemarche == 2)
//             .reduce(
//               (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
//               0
//             )
//             .toFixed(0);
//         }
//       };
//     },

budgetConsommerBienService() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.mandats.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
   return id => {
        if (id != "") {
          return colect
            .filter(element => element.ua_id == id && element.typemarche == 2 && element.decision_cf == 8)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        }
      };
            
        }
        return id => {
        if (id != "") {
          return this.mandats
            .filter(element => element.ua_id == id && element.typemarche == 2 && element.decision_cf == 8)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        }
      };
        // return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==2 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

    },





    // budgetConsommerInvestissement() {
    //   return id => {
    //     if (id != "") {
    //       return this.getMandatPersonnaliserVise
    //         .filter(element => element.ua_id == id && element.typemarche == 1)
    //         .reduce(
    //           (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
    //           0
    //         )
    //         .toFixed(0);
    //     }
    //   };
    // },
    budgetConsommerInvestissement() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.mandats.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
   return id => {
        if (id != "") {
          return colect
            .filter(element => element.ua_id == id && element.typemarche == 1 && element.decision_cf == 8)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        }
      };
            
        }
        return id => {
        if (id != "") {
          return this.mandats
            .filter(element => element.ua_id == id && element.typemarche == 1 && element.decision_cf == 8)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        }
      };
        // return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==2 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

    },
//  budgetConsommerPersonnelle() {
//       return id => {
//         if (id != "") {
//           return this.getMandatPersonnaliserPersonnel
//             .filter(element => element.ua_id == id && element.marchetype == "perso")
//             .reduce(
//               (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
//               0
//             )
//             .toFixed(0);
//         }
//       };
//     },
     budgetConsommerPersonnelle() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.mandats.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
   return id => {
        if (id != "") {
          return colect
            .filter(element => element.ua_id == id && element.marchetype == "perso")
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        }
      };
            
        }
        return id => {
        if (id != "") {
          return this.mandats
            .filter(element => element.ua_id == id && element.marchetype == "perso")
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        }
      };
        // return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==2 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

    },
  // budgetConsommerPersonnelGlobal() {
      
  //         return this.getMandatPersonnaliserPersonnel
  //           .filter(element => element.marchetype == "perso")
  //           .reduce(
  //             (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
  //             0
  //           )
  //           .toFixed(0);
        
      
  //   },
//
 budgetConsommerPersonnelGlobal() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.mandats.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
  return colect.filter(element => element.marchetype == "perso").reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
            
        }
       
        return this.mandats.filter(element => element.marchetype == "perso").reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.total_general), 0)

    },
  //  budgetConsommerInvestissementGlobal() {
      
  //         return this.getMandatPersonnaliserVise
  //           .filter(element => element.typemarche == 1)
  //           .reduce(
  //             (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
  //             0
  //           )
  //           .toFixed(0);
        
      
  //   },
    budgetConsommerInvestissementGlobal() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.mandats.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
  return colect.filter(element => element.typemarche == 1 && element.decision_cf == 8)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
            
        }
       
      return this.mandats.filter(element => element.typemarche == 1 && element.decision_cf == 8)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
    },

    //  budgetConsommerBienServiceGlobal() {
    //       return this.getMandatPersonnaliserVise
    //         .filter(element => element.typemarche == 2)
    //         .reduce(
    //           (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
    //           0
    //         )
    //         .toFixed(0);
      
    // },
  budgetConsommerBienServiceGlobal() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.mandats.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
  return colect.filter(element => element.typemarche == 2 && element.decision_cf == 8)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
            
        }
       
      return this.mandats.filter(element => element.typemarche == 2 && element.decision_cf == 8)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
    },
             
    // budgetConsommerTransfertGlobal() {
    
    //       return this.transferts.reduce( (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat),
    //           0
    //         )
    //         .toFixed(0);
      
    // },
    budgetConsommerTransfertGlobal() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.transferts.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
  return colect
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat),
              0
            )
            .toFixed(0);
            
        }
       
      return this.transferts
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat),
              0
            )
            .toFixed(0);
    },

//     MontantTotalPargdeNature() {
//       return id => {
//         if (id != null && id != "") {
//  var montant = this.affichebudgetActive.filter(idUa => idUa.ua_id == id).reduce((prec, cur) =>
//                 parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
//               0
//             )
//             .toFixed(0);
//           if (isNaN(montant)) return null;
//           return montant;
//         }
//         return 0;
//       };
//     },

// MontantTotalPargdeNature() {
        
//         if(this.noDCfNoAdmin){
//             let colect=[];
            
//             this.budgetGeneral.filter(item=>{
//                 let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
//             })
  
//                 return id => {
//         if (id != null && id != "") {
//  var montant = colect.filter(idUa => idUa.ua_id == id && idUa.actived == 1).reduce((prec, cur) =>
//                 parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
//               0
//             )
//             .toFixed(0);
//           if (isNaN(montant)) return null;
//           return montant;
//         }
//         return 0;
//       };
            
//         }
       
//                return id => {
//         if (id != null && id != "") {
//  var montant = this.budgetGeneral.filter(idUa => idUa.ua_id == id && idUa.actived == 1).reduce((prec, cur) =>
//                 parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
//               0
//             )
//             .toFixed(0);
//           if (isNaN(montant)) return null;
//           return montant;
//         }
//         return 0;
//       };
//     },

    affichebudgetActive() {
      var activeBudget = this.budgetGeneral.filter(
        element => element.actived == 1
      );

      return activeBudget;
    },

     

        },
        methods: {
            ...mapActions("uniteadministrative", [
                "getAllActeCreation",
                "ajouterActeCreation",
                "modifierActeCreation",
                "supprimerActeCreation",
                "importBudget",
                "getAllTypeTextes",
                "getAllUniteAdministrative",
                "getAllArchivageDocument",
                "ajouterBudgetCharge",
                "getAllBudgetGeneral",
                "getAllHistoriqueBudgetGeneral",
                "modifierLigneExempter",
            ]),


partition:partition,

getDataPaginate(index){
          this.active_el = index;
          this.page=index
      },
      precedent(){
          this.active_el--
          this.page --
      },
      suivant(){
          this.active_el++
          this.page ++
      },

 afficherModalModifierUniteAdministrative(id) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editUniteAdministrative = this.uniteAdministratives.find(item => item.id==id);
    },




            formatageSommeSansFCFA: formatageSommeSansFCFA,
            OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                console.log(this.selectedFile)
                Array.from(files).forEach(file => this.addFichier(file));
            },
            addFichier(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDFDemandeAno = "pdf.png";
                    vm.namePDFDemandeAno = file.name;
                    vm.fichierPDFDemandeAno = e.target.result;
                };
                reader.readAsDataURL(file);
            }
            ,
            afficherModalAjouterStock() {
                this.$("#exampleModal").modal({
                    backdrop: "static",
                    keyboard: false
                });
            },
            ajouterFichier() {
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('exercicebudget_id', this.exercice_budget);
                let config = {
                    header: {
                        'Content-Type': 'multipart/form-data'
                    }
                }


                this.i = this.i + 10;
                this.bgWidth = this.i + "%"
                this.$("#exampleModal").modal('hide');
                this.ajouterBudgetCharge(formData, config).then(data => {
                    console.log(data)
                    //this.getAllBudgetGeneral()
                }).catch(erro => {
                    console.log(erro)
                    this.getAllBudgetGeneral()
                    this.getAllUniteAdministrative()
                    // router.push({ path: 'budgetGenerals' })
                })

            },
            




   
  },

 
};
</script>
<style scoped>
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}
.gdmodelfour {
  width: 1000px;
  margin: 0 -580px;
  height: 500px;
}
.grdirModalActeEffet {
  width: 1200px;
  margin: 0 -530px;
  height: 550px;
}
.grdirModalAnalyse {
  width: 1000px;
  margin: 0 -530px;
  height: 350px;
}
.tlAviBailleur {
  width: 1000px;
  margin: 0 -530px;
  height: 450px;
}
.tlDossierCandidat {
  width: 1000px;
  margin: 0 -530px;
  height: 500px;
}

.tlg {
  width: 900px;
  margin: 0 -450px;
  height: 500px;
}
.sommecolor {
  background-color: red;
  color: red;
  font-size: 120%;
  text-align: center;
  font-weight: bold;
}
.modaloffreFin {
  width: 850px;
  margin: 0 -480px;
}
.tailDMP {
  width: 850px;
  margin: 0 -490px;
}
.tailleModalOffre {
  width: 1200px;
  margin: 0 -490px;
}
.tailleModalOffre2 {
  width: 1300px;
  margin: 0 -690px;
}
.tabFormulaire{
   width: 1300px;
   margin: 80px -690px;
  
}
</style>