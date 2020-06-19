<template>
  <div>
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-info">{{formatageSomme(parseFloat(afficherTotalBudgetModulePersonnel))}}</span> B.PERSONNEL
          </a>
        </li>
        <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-info">{{formatageSomme(parseFloat(afficherTotalBudgetModuleBienService))}}</span>B.BIENS ET SERVICES
          </a>
        </li>
         <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-info">{{formatageSomme(parseFloat(afficherTotalBudgetModuleTransfert))}}</span>B.TRANSFERTS
          </a>
        </li>
         <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-info">{{formatageSomme(parseFloat(afficherTotalBudgetModuleInvestissement))}}</span>B.INVESTISSEMEENT
          </a>
        </li>
         <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(afficherTotalBudgetModulePersonnel) + (parseFloat(afficherTotalBudgetModuleBienService)) + (parseFloat(afficherTotalBudgetModuleInvestissement)) + (parseFloat(afficherTotalBudgetModuleTransfert))) }}</span> B.TOTAL
          </a>
        </li>
        <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-inverse">{{formatageSomme((parseFloat(budgetConsommerPersonnelGlobal) +parseFloat(budgetConsommerBienServiceGlobal) + parseFloat(budgetConsommerInvestissementGlobal) + parseFloat(budgetConsommerTransfertGlobal)))}}</span>B.CONSOMME
          </a>
        </li>
         <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme((parseFloat(afficherTotalBudgetModulePersonnel) + (parseFloat(afficherTotalBudgetModuleBienService)) + (parseFloat(afficherTotalBudgetModuleInvestissement)) + (parseFloat(afficherTotalBudgetModuleTransfert))) - (parseFloat(budgetConsommerBienServiceGlobal) + parseFloat(budgetConsommerInvestissementGlobal) + parseFloat(budgetConsommerTransfertGlobal)+parseFloat(budgetConsommerPersonnelGlobal)) )}}</span>B.DISPONIBLE
          </a>
        </li>
         <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-default">{{(((parseFloat(budgetConsommerPersonnelGlobal)+parseFloat(budgetConsommerBienServiceGlobal) + parseFloat(budgetConsommerInvestissementGlobal) + parseFloat(budgetConsommerTransfertGlobal)) / (parseFloat(afficherTotalBudgetModulePersonnel) + parseFloat(afficherTotalBudgetModuleBienService) + parseFloat(afficherTotalBudgetModuleInvestissement) + parseFloat(afficherTotalBudgetModuleTransfert))) * 100 ).toFixed(2) || 0}}%</span>TAUX EXECUTION
          </a>
        </li>
       
      

      </ul>
    </div>
<div id="modificationModal" class="modal hide tabFormulaire">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">�</button>
        <h3>DETAIL BUDGET  </h3>
      </div>
      <div class="modal-body">
         <table class="table table-bordered table-striped">
            
 <tbody>
                    
    <tr >
    
    
     <th height="20px" colspan="5" style="color: #000000;font-size:14px">UNITE ADMINISTRATIVE : {{editUniteAdministrative.libelle}}</th>
     
 </tr>
                    <tr >
    
    
     <th height="20px"  style="color: #000000;font-size:14px">BUDGET PERSONNEL</th>
      <th width="50px" colspan="4" style="font-size:14px;color: #000000;">{{formatageSomme(parseFloat(budgetPersonnel(editUniteAdministrative.id)))}}</th>
     
     
 </tr>
                  
   <tr >
   
    
      <th height="20px"  style="color: #000000;font-size:14px"> BUDGET BIENS ET SERVICE</th>
       <th width="50px" colspan="4" style="text-align:center;font-size:14px;color: #000000;">{{formatageSomme(parseFloat(budgetBienService(editUniteAdministrative.id)))}}</th>
     
     
 </tr>
                        
  <tr >
   
   
    
      <th height="20px"  style="color: #000000;font-size:14px">BUDGET INVESTISSEMENT</th>
      <th width="50px" colspan="4" style="font-size:14px;color: #000000;">{{formatageSomme(parseFloat(budgetInverstisement(editUniteAdministrative.id)))}}</th>
     
     
 </tr>            
           
  <tr >
   
   
    
      <th height="20px"  style="color: #000000;font-size:14px">BUDGET TANSFERTS</th>
      <th width="50px" colspan="4" style="font-size:14px;color: #000000;">{{formatageSomme(parseFloat(budgetTranfert(editUniteAdministrative.id)))}}</th>
    
 </tr>     
 
   <tr >
   
   
    
      <th height="20px"  style="color: #000000;font-size:14px;">TOTAL BUDGET</th>
      <th width="50px" colspan="4" style="font-size:14px;color: #000000;background-color: orange;">{{formatageSomme(parseFloat(MontantTotalPargdeNature(editUniteAdministrative.id)))}}</th>
     
    
 </tr>     
   <tr >
   
   
  
      <th height="10px"  style="color: #000000;font-size:14px">MONTANT CONSOMMER</th>
       <th width="50px" colspan="4" style="font-size:14px;color: #000000;background-color: #ffffff;">{{formatageSomme(parseFloat(budgetConsommerTransfert(editUniteAdministrative.id)) + parseFloat(budgetConsommerBienService(editUniteAdministrative.id)) + parseFloat(budgetConsommerInvestissement(editUniteAdministrative.id))+parseFloat(budgetConsommerPersonnelle(editUniteAdministrative.id)))}}</th>
     
     
 </tr>     
   <tr >
   
   
    
      <th height="20px"  style="color: #000000;font-size:14px">DISPONIBLE BUDGET</th>
       <th width="50px" colspan="4" style="font-size:14px;color: #ffffff;background-color: green;">{{formatageSomme(parseFloat(MontantTotalPargdeNature(editUniteAdministrative.id))-(parseFloat(budgetConsommerBienService(editUniteAdministrative.id)) + parseFloat(budgetConsommerTransfert(editUniteAdministrative.id))+ parseFloat(budgetConsommerInvestissement(editUniteAdministrative.id))+parseFloat(budgetConsommerPersonnelle(editUniteAdministrative.id))))}}</th>

 </tr>     
  <tr >
   
    
      <th height="20px"  style="color: #000000;font-size:14px">TAUX EXECUTION</th>
       <th width="50px" colspan="4" style="font-size:14px;color:green;background-color: #ffffff;">{{((((parseFloat(budgetConsommerBienService(editUniteAdministrative.id)) + parseFloat(budgetConsommerTransfert(editUniteAdministrative.id))+ parseFloat(budgetConsommerInvestissement(editUniteAdministrative.id))+parseFloat(budgetConsommerPersonnelle(editUniteAdministrative.id))))/(parseFloat(MontantTotalPargdeNature(editUniteAdministrative.id))))*100).toFixed(2)}}%</th>
     
 </tr>     
                  </tbody>  
         </table>
      </div>
      <div class="modal-footer">
       
        <a data-dismiss="modal" class="btn" href="#">FERMER</a>
      </div>
    </div>






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
                <th style="font-size:15px;">Unite administrative</th>
                <th style="font-size:15px;" title="Budget du personnel">B.Personnel</th>

                <th style="font-size:15px;" title="Budget de bien et service">B.Bien et Service</th>
                <th style="font-size:15px;" title="Budget en inverstisement">B.Inverstisement</th>
                <th style="font-size:15px;" title="Budget en transfert">B.transfert</th>

                <th style="font-size:15px;background: forestgreen; color:#fff">Total</th>
                <th style="font-size:15px;background: deepskyblue; color:#fff">Consommé</th>
                <th style="font-size:15px;background: #8b0000;color:#fff">Disponible</th>
                <th style="font-size:15px;background: orangered;color:#fff">Taux Exécution (%)</th>
                  <th style="font-size:15px;background: orangered;color:#fff">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(unite,index) in partition(uniteAdministratives,size)[page]" :key="unite.id">
                
                <td style="font-weight:bold;font-size:12px;text-align:center">{{unite.libelle}}</td>
                <td
                  style="font-weight:bold;font-size:12px;text-align:center"
                >{{formatageSomme(parseFloat(budgetPersonnel(unite.id)))}}</td>
                <td
                  style="font-weight:bold;font-size:12px;text-align:center"
                >{{formatageSomme(parseFloat(budgetBienService(unite.id)))}}</td>
                <td
                  style="font-weight:bold;font-size:12px;text-align:center"
                >{{formatageSomme(parseFloat(budgetInverstisement(unite.id)))}}</td>
                <td
                  style="font-weight:bold;font-size:12px;text-align:center"
                >{{formatageSomme(parseFloat(budgetTranfert(unite.id)))}}</td>

                <td
                  style="font-weight:bold;font-size:12px;text-align:center"
                >{{formatageSomme(parseFloat(MontantTotalPargdeNature(unite.id)))}}</td>
                <td style="font-weight:bold;font-size:12px;text-align:center"
                >{{formatageSomme(parseFloat(budgetConsommerTransfert(unite.id)) + parseFloat(budgetConsommerBienService(unite.id)) + parseFloat(budgetConsommerInvestissement(unite.id))+parseFloat(budgetConsommerPersonnelle(unite.id)))}}</td>
                <td
                  style="font-weight:bold;font-size:12px;text-align:center"
            
                >{{formatageSomme(parseFloat(MontantTotalPargdeNature(unite.id)) - ((parseFloat(budgetConsommerTransfert(unite.id)) + parseFloat(budgetConsommerBienService(unite.id)) + parseFloat(budgetConsommerInvestissement(unite.id)) +  parseFloat(budgetConsommerPersonnelle(unite.id)))) )}}</td>
                
                <td style="font-weight:bold;font-size:12px;text-align:center">{{(((parseFloat(budgetConsommerPersonnelle(unite.id)) + parseFloat(budgetConsommerBienService(unite.id)) + parseFloat(budgetConsommerTransfert(unite.id))+ parseFloat(budgetConsommerInvestissement(unite.id))) / (parseFloat(MontantTotalPargdeNature(unite.id)+0.01))) * 1000).toFixed(2)|| 0}}%</td>
          
             <td>
               
                <button
                        class="btn btn-info"
                        @click="afficherModalModifierUniteAdministrative(index)"
                      >
                        <span>
                          <i class="icon-share-alt"></i>
                        </span>
                      </button>
              
             </td>
              </tr>

              <!-- <tr>
                <td style="background: orangered;color:#fff">Total Budget des  UA</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;font-size:12px;text-align:center"
                >{{formatageSomme(parseFloat(afficherTotalBudgetModulePersonnel))}}</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;font-size:15px"
                >{{formatageSomme(parseFloat(afficherTotalBudgetModuleBienService))}}</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;font-size:15px"
                >{{formatageSomme(parseFloat(afficherTotalBudgetModuleInvestissement))}}</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;font-size:15px"
                >{{formatageSomme(parseFloat(afficherTotalBudgetModuleTransfert))}}</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;font-size:15px"
                > {{formatageSomme(parseFloat(afficherTotalBudgetModulePersonnel) + (parseFloat(afficherTotalBudgetModuleBienService)) + (parseFloat(afficherTotalBudgetModuleInvestissement)) + (parseFloat(afficherTotalBudgetModuleTransfert))) }}</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;font-size:15px"
                >{{formatageSomme(parseFloat(budgetConsommerBienServiceGlobal) + parseFloat(budgetConsommerInvestissementGlobal) + parseFloat(budgetConsommerTransfertGlobal))}}</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;font-size:15px"
                > {{formatageSomme((parseFloat(afficherTotalBudgetModulePersonnel) + (parseFloat(afficherTotalBudgetModuleBienService)) + (parseFloat(afficherTotalBudgetModuleInvestissement)) + (parseFloat(afficherTotalBudgetModuleTransfert))) - (parseFloat(budgetConsommerBienServiceGlobal) + parseFloat(budgetConsommerInvestissementGlobal) + parseFloat(budgetConsommerTransfertGlobal)) )}}</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;font-size:15px" 
                > {{((parseFloat(budgetConsommerBienServiceGlobal) + parseFloat(budgetConsommerInvestissementGlobal) + parseFloat(budgetConsommerTransfertGlobal)) / (parseFloat(afficherTotalBudgetModulePersonnel) + (parseFloat(afficherTotalBudgetModuleBienService)) + (parseFloat(afficherTotalBudgetModuleInvestissement)) + (parseFloat(afficherTotalBudgetModuleTransfert))) * 100 ) || 0}}</td>
              </tr>  -->
              
              
            </tbody>
          </table>
         
        </div>
      </div>
       
    </div>
    <div class="pagination alternate">
              <ul>
                <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                   <li  v-for="(titre, index) in partition(uniteAdministratives,size).length" :key="index" :class="{ active : active_el == index }">
                   <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                <li :class="{ disabled : page == partition(uniteAdministratives,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

              </ul>
           </div>
  </div>
</template>


<script>

    import { mapGetters, mapActions } from "vuex";
    import { formatageSomme } from "../../Repositories/Repository";
    import {partition} from '../../../src/Repositories/Repository'
    //import ProgressBar from "../component/ProgressBar"
    export default {
        name: 'budget',
        components:{
            //ProgressBar
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
                "afficheTransfertValider"
            ]),
            
    ...mapGetters("bienService", ["getMandatPersonnaliserVise","getMandatPersonnaliserPersonnel"]),

       ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires"
            ]),


 filtre_type_teste() {
      return id2 => {
        if (id2 != null && id2 != "") {
           return this.uniteAdministratives.filter(prod =>prod.id == id2);

     
      
        }
      };
    },



 budgetBienService() {
      return id => {
        if (id != "") {
          return this.budgetGeneral
            .filter(element => element.ua_id == id  && element.gdenature_id==5 && element.actived ==1) 
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
              0
            )
            .toFixed(0);
        }
      };
    },


            // budgetBienService(){
            //   return unite_id=>{
            //       let vM=this;
            //       if(unite_id!='' && vM.budgetGeneralCharge!=""){


            //           let budget=vM.budgetGeneralCharge.filter(item=>{
            //               if(item.gdenature_id==5 && item.ua_id==unite_id ){
            //                   return item
            //               }
            //           })

            //           if(budget!=undefined){

            //               return parseFloat(budget.Dotation_Initiale);
            //           }
            //           return 0
            //       }
            //       return 0
            //   }
            // },



             
            // // afficher la somme des totaux
            // afficherLaSommeDesTotaux(){
            //   return this.MontantTotalPargdeNature.reduce((prec,cur)=>parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0) 
            // },

            // afficher les totaux du budget pour le module personnel
              afficherTotalBudgetModulePersonnel(){
               return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==2 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

              },

              
            // afficher les totaux du budget pour le module bien && service
              afficherTotalBudgetModuleBienService(){
               return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==5 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

              },

                 // afficher les totaux du budget pour le module investissement
              afficherTotalBudgetModuleInvestissement(){
               return this.budgetGeneral.filter(idGrand => idGrand.gdenature_id==7 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

              },


                   // afficher les totaux du budget pour le module de transfert
              afficherTotalBudgetModuleTransfert(){
               return this.budgetGeneral.filter(idGrand =>idGrand.gdenature_id==6 && idGrand.actived==1).reduce((prec,cur)=> parseFloat(prec)+ parseFloat(cur.Dotation_Initiale), 0)

              },



              budgetPersonnel() {
      return id => {
        if (id != "") {
          return this.budgetGeneral
            .filter(element => element.ua_id == id  && element.gdenature_id==2 && element.actived ==1) 
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
              0
            )
            .toFixed(0);
        }
      };
    },


            // budgetPersonnel(){
            //     return unite_id=>{
            //         let vM=this;
            //         if(unite_id!='' && vM.budgetGeneralCharge!=""){

            //             let budget=vM.budgetGeneralCharge.find(item=>{
            //                 if(item.gdenature_id==2  && item.ua_id==unite_id ){
            //                     return item
            //                 }
            //             })

            //             if(budget!=undefined){

            //                 return parseFloat(budget.Dotation_Initiale);
            //             }
            //             return 0
            //         }
            //         return 0
            //     }
            // },


    budgetInverstisement() {
      return id => {
        if (id != "") {
          return this.budgetGeneral
            .filter(element => element.ua_id == id  && element.gdenature_id==7 && element.actived ==1) 
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
              0
            )
            .toFixed(0);
        }
      };
    },
            
            // budgetInverstisement(){
            //     return unite_id=>{
            //         let vM=this;
            //         if(unite_id!='' && vM.budgetGeneralCharge!=""){
            //             console.log("------65")
            //             console.log(vM.budgetGeneralCharge)
            //             let budget=vM.budgetGeneralCharge.find(item=>{
            //                 if(item.gdenature_id==7  && item.ua_id==unite_id ){
            //                     return item
            //                 }
            //             })
            //             console.log(budget)
            //             if(budget!=undefined){

            //                 return parseFloat(budget.Dotation_Initiale);
            //             }
            //             return 0
            //         }
            //         return 0
            //     }
            // },

            budgetTranfert() {
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
    },
            // budgetTranfert(){
            //     return unite_id=>{
            //         let vM=this;
            //         if(unite_id!='' && vM.budgetGeneralCharge!=""){

            //             let budget=vM.budgetGeneral.find(item=>{
            //                 if(item.gdenature_id==6  && item.ua_id==unite_id){
            //                     return item
            //                 }
            //             })

            //             if(budget!=undefined){

            //                 return parseFloat(budget.Dotation_Initiale);
            //             }
            //             return 0
            //         }
            //         return 0
            //     }
            // },

 
            
    budgetConsommerTransfert() {
      return id => {
        if (id != "") {
          return this.afficheTransfertValider
            .filter(element => element.ua_id == id)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_total_contrat),
              0
            )
            .toFixed(0);
        }
      };
    },


 budgetConsommerBienService() {
      return id => {
        if (id != "") {
          return this.getMandatPersonnaliserVise
            .filter(element => element.ua_id == id && element.typemarche == 2)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        }
      };
    },

    budgetConsommerInvestissement() {
      return id => {
        if (id != "") {
          return this.getMandatPersonnaliserVise
            .filter(element => element.ua_id == id && element.typemarche == 1)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        }
      };
    },
 budgetConsommerPersonnelle() {
      return id => {
        if (id != "") {
          return this.getMandatPersonnaliserPersonnel
            .filter(element => element.ua_id == id && element.marchetype == "perso")
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        }
      };
    },
  budgetConsommerPersonnelGlobal() {
      
          return this.getMandatPersonnaliserPersonnel
            .filter(element => element.marchetype == "perso")
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        
      
    },
//

   budgetConsommerInvestissementGlobal() {
      
          return this.getMandatPersonnaliserVise
            .filter(element => element.typemarche == 1)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        
      
    },
    

     budgetConsommerBienServiceGlobal() {
          return this.getMandatPersonnaliserVise
            .filter(element => element.typemarche == 2)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
      
    },

             
    budgetConsommerTransfertGlobal() {
    
          return this.afficheTransfertValider.reduce( (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat),
              0
            )
            .toFixed(0);
      
    },

    MontantTotalPargdeNature() {
      return id => {
        if (id != null && id != "") {
 var montant = this.affichebudgetActive.filter(idUa => idUa.ua_id == id).reduce((prec, cur) =>
                parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
              0
            )
            .toFixed(0);
          if (isNaN(montant)) return null;
          return montant;
        }
        return 0;
      };
    },



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

 afficherModalModifierUniteAdministrative(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editUniteAdministrative = this.uniteAdministratives[index];
    },




            formatageSomme: formatageSomme,
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