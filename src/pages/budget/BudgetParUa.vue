<template>
  <div>
    
          <table class="table table-bordered table-striped" id="Exo">
           <!-- <tr>
             <td>
                <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div>
             </td>
           </tr> -->
            <tr>
              <td>
                 <div align="left" style="text-align:center;font-size:25px">
               <label for="" style="text-align:center;font-size:25px"> Recherche</label>
               </div>
              </td>
              <td>
                
                  <div align="right">
             
                <!-- <input type="search"  :value="uaRecherche(uniteadministrative_id)" /> -->
                <!-- <select v-model="uniteadministrative_id" class="span6">
                                <option value>Selectionner</option>
                                <option
                                  v-for="ua in uniteAdministratives"
                                  :key="ua.id"
                                  :value="ua.id"
                                >{{ua.libelle}}</option>
                              </select> -->

                                     <model-list-select style="background-color: rgb(255,255,255);"
                                           class="wide"
                                           :list="uniteAdministratives"
                                           v-model="uniteadministrative_id"
                                           option-value="id"
                                           option-text="libelle"
                                            
                                           placeholder="Selectionner Unite administrative"
                        >

                        </model-list-select> 
              </div>
              </td>
            </tr>
          </table>
          
           
              <table class="table table-bordered table-striped" id="Exo">
                <thead>
                   <tr style="background-color: red;color: #FFFFFF;">
    <td style="width:10%;text-align:center;font-size:25px;">SVP</td>
    <th width="50px" colspan="5" style="text-align:center;font-size:25px;color: #000000;" class="marquee-rtl">SELECTIONNER UNITE ADMINISTRATIVE</th>
     
    <!-- <td style="width:12%;text-align:center"> TYPE DE FINANCEMENT </td>
     <td style="width:12%;text-align:center">SOURCE DE FINANCEMENT</td>
     <td style="width:12%;text-align:center">TOTAL(FINANCEMENT)</td>
    <td style="width:12%;text-align:center">RESTE A CONSOMMER</td>
     <td style="width:12%;text-align:center">DISPONIBLE</td> -->
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
 </thead>
 <tbody>
    <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
    <td height="20px"> </td>
      <th height="20px"  style="color: #000000;font-size:14px"></th>
      <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td>
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>     
                    <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
    <td height="20px"  style="text-align:center;margin: 0px 0 50% 50%"></td>
    <th height="20px"  style="color: #000000;font-size:14px">UNITE ADMINISTRATIVE</th>
     <th width="50px" colspan="4" style="text-align:center;font-size:25px;color: #000000;">{{unite.libelle}}</th>
     
      <!-- <td height="20px">2</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">3</th> -->
 </tr>
                    <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
    <td height="20px">  </td>
      <td height="20px"></td>
      <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td>
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>
                    <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
    
    <td height="20px">  </td>
     <th height="20px"  style="color: #000000;font-size:14px">PERSONNEL</th>
      <th width="50px" colspan="4" style="text-align:center;font-size:25px;color: #000000;">{{formatageSomme(parseFloat(budgetPersonnel(unite.id)))}}</th>
     
      <!-- <td height="20px" style="text-align:center">{{formatageSomme(parseFloat(5))}}</td>
 <td height="20px" style="text-align:center">{{formatageSomme(parseFloat(6))}}</td>
<td height="20px" style="text-align:center">{{formatageSomme(parseFloat(8))}}</td>
 <td height="20px" style="text-align:center">{{formatageSomme(parseFloat(69))}}</td> -->
     <!-- <td height="20px">10</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">11</th> -->
 </tr>
                    <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
    <th height="20px"  style="color: #000000;font-size:14px"></th>
    
     <td height="20px"></td>
     <td height="20px" ></td>
     <td height="20px" ></td>
     <td height="20px" ></td>
     <td height="20px" style="text-align:center"></td>
      <!-- <td height="20px">14</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">01</th> -->
 </tr>                  
   <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
    <td height="20px">  </td>
      <th height="20px"  style="color: #000000;font-size:14px">BIENS ET SERVICE</th>
       <th width="50px" colspan="4" style="text-align:center;font-size:25px;color: #000000;">{{formatageSomme(parseFloat(budgetBienService(unite.id)))}}</th>
     
      <!-- <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td> -->
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>
<tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
    <td height="20px">  </td>
      <td height="20px"></td>
      <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td>
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>                         
  <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
   
    <td height="20px">  </td>
      <th height="20px"  style="color: #000000;font-size:14px">INVESTISSEMENT</th>
      <th width="50px" colspan="4" style="text-align:center;font-size:25px;color: #000000;">{{formatageSomme(parseFloat(budgetInverstisement(unite.id)))}}</th>
     
      <!-- <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td> -->
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>            
           <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
    <td height="20px">  </td>
      <th height="20px"  style="color: #000000;font-size:14px"></th>
      <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td>
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>     
  <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
   
    <td height="20px">  </td>
      <th height="20px"  style="color: #000000;font-size:14px">TANSFERTS</th>
      <th width="50px" colspan="4" style="text-align:center;font-size:25px;color: #000000;">{{formatageSomme(parseFloat(budgetTranfert(unite.id)))}}</th>
     
      <!-- <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td> -->
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>     
 <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
    <td height="20px">  </td>
      <th height="20px"  style="color: #000000;font-size:14px"></th>
      <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td>
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>     
   <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
   
    <td height="20px">  </td>
      <th height="20px"  style="color: #000000;font-size:14px;">TOTAL</th>
      <th width="50px" colspan="4" style="text-align:center;font-size:25px;color: #000000;background-color: orange;">{{formatageSomme(parseFloat(MontantTotalPargdeNature(unite.id)))}}</th>
     
      <!-- <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td> -->
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>     
   <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
   
    <td height="20px">  </td>
      <th height="20px"  style="color: #000000;font-size:14px">MONTANT CONSOMMER</th>
       <th width="50px" colspan="4" style="text-align:center;font-size:25px;color: #000000;background-color: #ffffff;">{{formatageSomme(parseFloat(budgetConsommerTransfert(unite.id)) + parseFloat(budgetConsommerBienService(unite.id)) + parseFloat(budgetConsommerInvestissement(unite.id))+parseFloat(budgetConsommerPersonnelle(unite.id)))}}</th>
     
      <!-- <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td> -->
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>     
   <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
   
    <td height="20px">  </td>
      <th height="20px"  style="color: #000000;font-size:14px">DISPONIBLE</th>
       <th width="50px" colspan="4" style="text-align:center;font-size:25px;color: #ffffff;background-color: green;">{{formatageSomme(parseFloat(MontantTotalPargdeNature(unite.id))-(parseFloat(budgetConsommerBienService(unite.id)) + parseFloat(budgetConsommerTransfert(unite.id))+ parseFloat(budgetConsommerInvestissement(unite.id))+parseFloat(budgetConsommerPersonnelle(unite.id))))}}</th>
<!--      
      <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td> -->
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>     
  <tr v-for="unite in filtre_type_teste(uniteadministrative_id)" :key="unite.id">
   
    <td height="20px">  </td>
      <th height="20px"  style="color: #000000;font-size:14px">TAUX EXECUTION</th>
       <th width="50px" colspan="4" style="text-align:center;font-size:25px;color:green;background-color: #ffffff;">{{(((parseFloat(MontantTotalPargdeNature(unite.id))-(parseFloat(budgetConsommerBienService(unite.id)) + parseFloat(budgetConsommerTransfert(unite.id))+ parseFloat(budgetConsommerInvestissement(unite.id))+parseFloat(budgetConsommerPersonnelle(unite.id))))/MontantTotalPargdeNature(unite.id))).toFixed(2)}}%</th>
      <!-- <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
 <td height="20px" style="text-align:center"></td>
  <td height="20px" style="text-align:center"></td> -->
      <!-- <td height="20px">6</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">7</th> -->
 </tr>     
                  </tbody>  
              </table>
             
           
            
  </div>
</template>


<script>

    import { mapGetters, mapActions } from "vuex";
    import { formatageSomme } from "../../Repositories/Repository";
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
    import jsPDF from 'jspdf'
import 'jspdf-autotable'
    //import ProgressBar from "../component/ProgressBar"
    export default {
        name: 'budget',
        components:{
            //ProgressBar
            ModelListSelect
        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
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






            budgetBienService(){
              return unite_id=>{
                  let vM=this;
                  if(unite_id!='' && vM.budgetGeneralCharge!=""){


                      let budget=vM.budgetGeneralCharge.find(item=>{
                          if(item.gdenature_id==5 && item.ua_id==unite_id ){
                              return item
                          }
                      })

                      if(budget!=undefined){

                          return parseFloat(budget.Dotation_Initiale);
                      }
                      return 0
                  }
                  return 0
              }
            },



             
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

            budgetPersonnel(){
                return unite_id=>{
                    let vM=this;
                    if(unite_id!='' && vM.budgetGeneralCharge!=""){

                        let budget=vM.budgetGeneralCharge.find(item=>{
                            if(item.gdenature_id==2  && item.ua_id==unite_id ){
                                return item
                            }
                        })

                        if(budget!=undefined){

                            return parseFloat(budget.Dotation_Initiale);
                        }
                        return 0
                    }
                    return 0
                }
            },
            budgetInverstisement(){
                return unite_id=>{
                    let vM=this;
                    if(unite_id!='' && vM.budgetGeneralCharge!=""){
                        console.log("------65")
                        console.log(vM.budgetGeneralCharge)
                        let budget=vM.budgetGeneralCharge.find(item=>{
                            if(item.gdenature_id==7  && item.ua_id==unite_id ){
                                return item
                            }
                        })
                        console.log(budget)
                        if(budget!=undefined){

                            return parseFloat(budget.Dotation_Initiale);
                        }
                        return 0
                    }
                    return 0
                }
            },
            budgetTranfert(){
                return unite_id=>{
                    let vM=this;
                    if(unite_id!='' && vM.budgetGeneralCharge!=""){

                        let budget=vM.budgetGeneral.find(item=>{
                            if(item.gdenature_id==6  && item.ua_id==unite_id){
                                return item
                            }
                        })

                        if(budget!=undefined){

                            return parseFloat(budget.Dotation_Initiale);
                        }
                        return 0
                    }
                    return 0
                }
            },


            
    budgetConsommerTransfert() {
      return id => {
        if (id != "") {
          var montant = this.afficheTransfertValider
            .filter(element => element.ua_id == id)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_total_contrat),
              0
            )
            .toFixed(0);
             if(isNaN(montant)) return 0
            return montant
        }
      };
    },


 budgetConsommerBienService() {
      return id => {
        if (id != "") {
          var montant = this.getMandatPersonnaliserVise
            .filter(element => element.ua_id == id && element.typemarche == 2)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
             if(isNaN(montant)) return 0
            return montant
        }
      };
    },

    budgetConsommerInvestissement() {
      return id => {
        if (id != "") {
          var montant = this.getMandatPersonnaliserVise
            .filter(element => element.ua_id == id && element.typemarche == 1)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
            if(isNaN(montant)) return 0
            return montant
        }
      };
    },
 budgetConsommerPersonnelle() {
      return id => {
        if (id != "") {
          var montant = this.getMandatPersonnaliserPersonnel
            .filter(element => element.ua_id == id && element.marchetype == "perso")
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
             if(isNaN(montant)) return 0
            return montant
        }
      };
    },

//

   budgetConsommerInvestissementGlobal() {
      
          var montant = this.getMandatPersonnaliserVise
            .filter(element => element.typemarche == 1)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
         if(isNaN(montant)) return 0
            return montant
      
    },
    

     budgetConsommerBienServiceGlobal() {
          var montant = this.getMandatPersonnaliserVise
            .filter(element => element.typemarche == 2)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
      if(isNaN(montant)) return 0
            return montant
    },

             
    budgetConsommerTransfertGlobal() {
    
          var montant = this.afficheTransfertValider.reduce( (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat),
              0
            )
            .toFixed(0);
      if(isNaN(montant)) return 0
            return montant
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
    }

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
            


   genererEnPdf(){
  var doc = new jsPDF('landscape')
  
  doc.text(98,10,"BUDGET DETAILLE PAR UA")
  doc.autoTable({html:'#Exo'})
 
doc.save('BudgetDetail.pdf')
return 0


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
.marquee-rtl {
  max-width: 30em;                      /* largeur de la fenêtre */
  margin: 1em auto 2em;
  border: 10px solid #F0F0FF;
  overflow: hidden;                     /* masque tout ce qui dépasse */
  box-shadow: 0 .25em .5em #CCC,inset 0 0 1em .25em #CCC;
}
</style>