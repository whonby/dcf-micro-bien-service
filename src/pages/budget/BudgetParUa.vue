<template>
  <div>
    <div class="container-fluid">
      <notifications />
      <div class="widget-box">
        <div class="widget-title">
          <span class="icon">
            <i class="icon-th"></i>
          </span>
          <h5>Detail budget {{detailBudget}}</h5>
        </div>

        <div class="widget-content nopadding">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Unite administrative</th>
                <th style>Budget du personnel</th>

                <th style>Budget de bien et service</th>
                <th style>Budget en inverstisement</th>
                <th style>Budget en transfert</th>

                <th style="background: forestgreen; color:#fff">Totaux</th>
                <th style="background: deepskyblue; color:#fff">Consommé</th>
                <th style="background: #8b0000;color:#fff">Reste à Consommé</th>
                <th style="background: orangered;color:#fff">Taux Exécution (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="unite in uniteAdministratives" :key="unite.id">
                <td style="font-weight:bold;font-size:12px">{{unite.libelle}}</td>
                <td
                  style="font-weight:bold;font-size:15px"
                >{{formatageSomme(budgetPersonnel(unite.id))}}</td>
                <td
                  style="font-weight:bold;font-size:15px"
                >{{formatageSomme(budgetBienService(unite.id))}}</td>
                <td
                  style="font-weight:bold;font-size:15px"
                >{{formatageSomme(budgetInverstisement(unite.id))}}</td>
                <td
                  style="font-weight:bold;font-size:15px"
                >{{formatageSomme(budgetTranfert(unite.id))}}</td>

                <td
                  style="font-weight:bold;font-size:15px"
                >{{formatageSomme(parseFloat(MontantTotalPargdeNature(unite.id)))}}</td>
                <td style="font-weight:bold;font-size:15px"
                >{{formatageSomme(parseFloat(budgetConsommerTransfert(unite.id)) + parseFloat(budgetConsommerBienService(unite.id)) + parseFloat(budgetConsommerInvestissement(unite.id)))}}</td>
                <td
                  style="font-weight:bold;font-size:15px"
            
                >{{formatageSomme(parseFloat(MontantTotalPargdeNature(unite.id))-(parseFloat(budgetConsommerBienService(unite.id)) + parseFloat(budgetConsommerTransfert(unite.id))+ parseFloat(budgetConsommerInvestissement(unite.id))))}}</td>
                
                <td style="font-weight:bold;font-size:15px">{{((parseFloat(MontantTotalPargdeNature(unite.id))-(parseFloat(budgetConsommerBienService(unite.id)) + parseFloat(budgetConsommerTransfert(unite.id))+ parseFloat(budgetConsommerInvestissement(unite.id)))) / (parseFloat(MontantTotalPargdeNature(unite.id))) * 100)}}</td>
              </tr>

              <tr>
                <td style="background: orangered;color:#fff">Total Budget par UA</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;"
                >{{formatageSomme(parseFloat(afficherTotalBudgetModulePersonnel))}}</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;"
                >{{formatageSomme(parseFloat(afficherTotalBudgetModuleBienService))}}</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;"
                >{{formatageSomme(parseFloat(afficherTotalBudgetModuleInvestissement))}}</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;"
                >{{formatageSomme(parseFloat(afficherTotalBudgetModuleTransfert))}}</td>

                <td
                  style="text-align: center;color:red;font-weight:bold;"
                ></td>

                <td
                  style="text-align: center;color:red;font-weight:bold;"
                ></td>

                <td
                  style="text-align: center;color:red;font-weight:bold;"
                ></td>

                <td
                  style="text-align: center;color:red;font-weight:bold;"
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

    import { mapGetters, mapActions } from "vuex";
    import { formatageSomme } from "../../Repositories/Repository";
    //import ProgressBar from "../component/ProgressBar"
    export default {
        name: 'budget',
        components:{
            //ProgressBar
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
            
    ...mapGetters("bienService", ["getMandatPersonnaliserVise"]),

       ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires"
            ]),

            
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
</style>