<template>
  <div>
       <table class="table table-striped">
          <tbody>
            <tr>
               <td>
 <label
                            >EXERCICE
                           
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="exercices_budgetaires"
                            v-model="exercices_budgetaires_id"
                            option-value="annee"
                            option-text="annee"
                            placeholder=""
                          >
                          </model-list-select>
                         
                </td>
              <td colspan="">
              
              
                <label 
                  >UNITE ADMINISTRATIVE
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
        </table>
        <h2 style="text-align:center;font-size:25px">Tableau Récapitulatif Budget des Projets</h2>
    <div class="container-fluid">
      <notifications />
      <div class="widget-box">
        <div class="widget-title">
          <span class="icon">
            <i class="icon-th"></i>
          </span>
          <h5>Detail budget </h5>
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
                <th style="font-size:15px; color:#000">UNITE ADMINISTRATIVE</th>
                <!-- <th style="font-size:15px;" title="Budget du personnel">Personnels (FCFA)</th>

                <th style="font-size:15px;" title="Budget de bien et service">Biens et Services (FCFA)</th>
                <th style="font-size:15px;" title="Budget en inverstisement">Inverstisements (FCFA)</th> -->
                <!-- <th style="font-size:15px;" title="Budget en transfert">Transferts</th> -->

                <th style="font-size:15px; color:#000">BUDGET INITIAL (FCFA){{afficheAnnee}}</th>
                <th style="font-size:15px; color:#000">BUDGET CONSOMME (FCFA) {{afficheAnnee}}</th>
                <th style="font-size:15px;color:#000">BUDGET DISPONIBLE (FCFA) {{afficheAnnee}}</th>
                <th style="font-size:15px;color:#000">TAUX EXECUTION (%) {{afficheAnnee}}</th>
                  <!-- <th style="font-size:15px;background: default;color:#fff">Action</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="unite in partition(afficheUa,size)[page]" :key="unite.id">
                
                <td style="font-weight:bold;font-size:12px;">{{libelleUniteAdministrative(unite.id)}}</td>
                
                <td
                  style="font-weight:bold;font-size:12px;;text-align:center"
                >{{formatageSommeSansFCFA(parseFloat(AfficheMontantBudgetInitial(unite.id)))}}</td>
                <td style="font-weight:bold;font-size:12px;;text-align:center"
                >{{formatageSommeSansFCFA(parseFloat(AfficheMontantBudgetConsomme(unite.id)))}}</td>
                <td
                  style="font-weight:bold;font-size:12px;;text-align:center"
            
                >{{formatageSommeSansFCFA(parseFloat(AfficheMontantBudgetInitial(unite.id)) - (parseFloat(AfficheMontantBudgetConsomme(unite.id))))}}</td>
                
                <td style="font-weight:bold;font-size:12px;text-align:center">{{EviteNaN(unite.id)}}%</td>
          
             
              </tr>
<tr>
  <td style="font-weight:bold;font-size:12px;">TOTAL</td>
  <td style="font-weight:bold;font-size:12px;text-align:center">{{formatageSomme(parseFloat(SommeBudgetInitial))}}</td>
  <td style="font-weight:bold;font-size:12px;text-align:center">{{formatageSomme(parseFloat(SommeBudgetConsomme))}}</td>
  <td style="font-weight:bold;font-size:12px;text-align:center">{{formatageSomme(parseFloat(SommeBudgetInitial)-parseFloat(SommeBudgetConsomme))}}</td>
  <td style="font-weight:bold;font-size:12px;text-align:center">{{TauxExecution}}%</td>
</tr>
            </tbody>
          </table>
         
        </div>
      </div>
       
    </div>
    <div class="pagination alternate">
              <ul>
                <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                   <li  v-for="(titre, index) in partition(afficheUa,size).length" :key="index" :class="{ active : active_el == index }">
                   <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                <li :class="{ disabled : page == partition(afficheUa,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

              </ul>
           </div>
  </div>
</template>


<script>

    import { mapGetters, mapActions } from "vuex";
    import { formatageSommeSansFCFA,partition,formatageSomme } from "@/Repositories/Repository";
    import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
    import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
    //import ProgressBar from "../component/ProgressBar"
    export default {
        name: 'budget',
        components:{
            //ProgressBar
            ModelListSelect
        },
        data() {
            return {
              page:0,
              size:20,
              active_el:0,
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                exercices_budgetaires_id:0,
                uniteAdmin_id:0,
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


afficheAnnee(){
  if(this.exercices_budgetaires_id==0){
    return this.anneeAmort
  }
  else{
    return this.exercices_budgetaires_id
  }
},



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
    // ListeDEsEntreprise() {
    //   let vM = this;
    //   let objet = this.uniteAdmin;

    //   //retourne la section selectionner

    //   if (this.uniteAdmin_id != "") {
    //     objet = this.uniteAdmin.filter((item) => {
    //         console.log(this.uniteAdmin)
    //       if (item.uniteadministrative_id == vM.uniteAdmin_id) {
    //         return item;
    //       }
    //     });
    //     return objet;
    //   }

    //   return objet;
    // },
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
    ListeDEsEntreprise() {
      let vM = this;
      let objet = this.filtre_unite_admin;

      //retourne la section selectionner

      if (this.sections_id != 0 && this.grandes_nature_id == 0 && this.uniteAdministrative_id == 0) {
        objet = this.filtre_unite_admin.filter((item) => {
          if (item.section_id == vM.sections_id) {
            return item;
          }
        });
        return objet;
      }
      if (this.sections_id == 0 && this.grandes_nature_id != 0 && this.uniteAdministrative_id == 0) {
        objet = this.filtre_unite_admin.filter((item) => {
          if (item.grand_nature_id == vM.grandes_nature_id) {
            return item;
          }
        });
          return objet;
      }
   if (this.sections_id == 0 && this.grandes_nature_id == 0 && this.uniteAdministrative_id != 0) {
        objet = this.filtre_unite_admin.filter((item) => {
          if (item.unite_administrative_id == vM.uniteAdministrative_id) {
            return item;
          }
        });
        return objet;
      }
       if (this.sections_id != 0 && this.grandes_nature_id != 0 && this.uniteAdministrative_id == 0) {
        objet = this.filtre_unite_admin.filter((item) => {
          if (
            item.section_id == vM.sections_id &&
            item.grand_nature_id == vM.grandes_nature_id
          ) {
            return item;
          }
        });
        return objet;
      }
       if (this.grandes_nature_id != 0 && this.uniteAdministrative_id != 0) {
        objet = this.filtre_unite_admin.filter((item) => {
          if (
            
            item.grand_nature_id == vM.grandes_nature_id && item.unite_administrative_id == vM.uniteAdministrative_id 
          ) {
            return item;
          }
        });
        return objet;
      }
      return this.filtre_unite_admin;
    },
    filtrerUaParTypeProj(){
return this.uniteAdministratives.filter(item=>item.type_ua_id == 7)
    },
    afficheUa(){
  if(this.uniteAdmin_id==0){
    return this.filtre_unite_admin
  }
  else{
    return this.filtre_unite
  }
},
     filtre_unite() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter(item2=>item2.id==this.uniteAdmin_id);
      }
      return this.filtrerUaParTypeProj.filter(item2=>item2.id==this.uniteAdmin_id);
    },
    filtre_unite_admin() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }
      return this.filtrerUaParTypeProj;
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
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.exercices_budgetaires_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

     
        }
         return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 25).toFixed(0);

      };
      
    },
    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
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

     SommeBudgetInitial(){
if(this.exercices_budgetaires_id==0){
 return  this.budgetEclate.filter(qtreel =>qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
   
}
else{
           return  this.budgetEclate.filter(qtreel =>  qtreel.annebudgetaire==this.exercices_budgetaires_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
           
}
},
SommeBudgetConsomme(){
if(this.exercices_budgetaires_id==0){
 return  this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1 && qtreel.decision_cf==8 && qtreel.exercice==this.anneeAmort ||  qtreel.type_ordre_paiement==1 && qtreel.decision_cf==9 && qtreel.exercice==this.anneeAmort||  qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==8 && qtreel.exercice==this.anneeAmort||  qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==9 && qtreel.exercice==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

}
else{
         return  this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1 && qtreel.decision_cf==8 && qtreel.exercice==this.exercices_budgetaires_id ||  qtreel.type_ordre_paiement==1 && qtreel.decision_cf==9 && qtreel.exercice==this.exercices_budgetaires_id ||  qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==8 && qtreel.exercice==this.exercices_budgetaires_id ||  qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==9 && qtreel.exercice==this.exercices_budgetaires_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
 
}
},
         TauxExecution(){
               
                  return ((parseFloat(this.SommeBudgetConsomme)/parseFloat(this.SommeBudgetInitial))*100).toFixed(2)
               
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
            EviteNaN(id){
                if(this.AfficheMontantBudgetConsomme(id)==0 && this.AfficheMontantBudgetInitial(id)==0){
                  return 0.00
                }
                else{
                  return ((parseFloat(this.AfficheMontantBudgetConsomme(id))/parseFloat(this.AfficheMontantBudgetInitial(id)))*100).toFixed(2)
                }
            },
AfficheMontantBudgetConsomme(id){
if(this.exercices_budgetaires_id==0){
 return  this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==8 && qtreel.exercice==this.anneeAmort || qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==9 && qtreel.exercice==this.anneeAmort|| qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==8 && qtreel.exercice==this.anneeAmort|| qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==9 && qtreel.exercice==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

}
else{
         return  this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==8 && qtreel.exercice==this.exercices_budgetaires_id || qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==9 && qtreel.exercice==this.exercices_budgetaires_id || qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==8 && qtreel.exercice==this.exercices_budgetaires_id || qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==9 && qtreel.exercice==this.exercices_budgetaires_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
 
}
},
AfficheMontantBudgetInitial(id){
if(this.exercices_budgetaires_id==0){
 return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
   
}
else{
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.exercices_budgetaires_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
           
}
},

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



formatageSomme:formatageSomme,
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