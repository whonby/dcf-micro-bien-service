<template>
    <div>
        <div class="container-fluid" style="height: 100em;">
            <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background: #f0c71d !important;">
                    <table class="table table-striped"  style="background: #f0c71d !important;">
                        <tbody>
                        <tr>
                            <td style="background: #f0c71d !important;">

                                <label>Ministère<a href="#" @click.prevent="videSection()" v-if="section" style="color: red"><i class="fa fa-trash-o"></i></a></label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="sections"
                                                   v-model="section"
                                                   option-value="id"
                                                   option-text="nom_section"
                                                   placeholder="Ministère"
                                >

                                </model-list-select>
                            </td>
                            <td style="background: #f0c71d !important;">
                                <label>UA<a href="#" @click.prevent="videUniteAdmin()" v-if="unite_administrative_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="selectionUniteAdminBySection"
                                                   v-model="unite_administrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Unité administrative"
                                >

                                </model-list-select>
                            </td>
<!--                            <td style="background: #f0c71d !important;">-->
<!--                                <label>Regions <a href="#" @click.prevent="videRegions()" v-if="region" style="color: red"><i class="fa fa-trash-o"></i></a>-->
<!--                                </label>-->
<!--                                <model-list-select style="background-color: #fff;"-->
<!--                                                   class="wide"-->
<!--                                                   :list="regions"-->
<!--                                                   v-model="region"-->
<!--                                                   option-value="id"-->
<!--                                                   option-text="libelle"-->
<!--                                                   placeholder="Regions"-->
<!--                                >-->

<!--                                </model-list-select>-->
<!--                            </td>-->
<!--                            <td style="background: #f0c71d !important;">-->
<!--                                <label>Infrastructure <a href="#" @click.prevent="videInfrastructure()" v-if="infrastructure" style="color: red"><i class="fa fa-trash-o"></i></a>-->
<!--                                </label>-->
<!--                                <model-list-select style="background-color: #fff;"-->
<!--                                                   class="wide"-->
<!--                                                   :list="getterInfrastrucure"-->
<!--                                                   v-model="infrastructure"-->
<!--                                                   option-value="id"-->
<!--                                                   option-text="libelle"-->
<!--                                                   placeholder="Infrastructure"-->
<!--                                >-->


<!--                                </model-list-select>-->
<!--                            </td>-->
                            <td style="background: #f0c71d !important;">
                                <label>GRANDE NATURE DEPENSE <a href="#" @click.prevent="videGrandNatureDepense()" v-if="grand_nature" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="grandes_natures"
                                                   v-model="grand_nature"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="Grande nature depense"
                                >

                                </model-list-select>
                            </td>

                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>

              <h3 style="text-align:center">TABLEAU DE BORD : GESTION SIGOBE</h3>

            <div class="row-fluid" style="" id="printMe">
                <div class="span2 vld-parent" style="width: 250px;margin-left: -3px !important;border-right: 10px solid #fff">
                    <!--                <loading :active.sync="isLoading"-->
                    <!--                         :can-cancel="true"-->
                    <!--                         :on-cancel="onCancel"-->
                    <!--                         :is-full-page="fullPage"></loading>-->
                    <div class="card-box bg-prevision" style="height: 90px !important; cursor: grab !important;">
                        <div class="inner">
                            <p> <b> BUDGET INITIAL
                            </b></p>
                            <h3>  </h3>

                        </div>
                        <div class="icon3">

                            {{formatageSomme(parseFloat(budgetInitial))}}
                        </div>
                        <div class="icon2">


                        </div>

                    </div>
                </div>
                <div class="span2 vld-parent" style="width: 250px;margin-left: -3px !important;border-right: 10px solid #fff">
                    <!--                <loading :active.sync="isLoading"-->
                    <!--                         :can-cancel="true"-->
                    <!--                         :on-cancel="onCancel"-->
                    <!--                         :is-full-page="fullPage"></loading>-->
                    <div class="card-box bg-disponible" style="height: 90px !important; cursor: grab !important;">
                        <div class="inner">
                            <p> <b> BUDGET ACTUEL
                            </b></p>
                            <h3>  </h3>

                        </div>
                        <div class="icon3">
                            {{formatageSomme(parseFloat(budgetActuel))}}
                        </div>
                        <div class="icon2">


                        </div>

                    </div>
                </div>
                <div class="span2 vld-parent" style="width: 250px;margin-left: -3px !important;border-right: 10px solid #fff">
                    <!--                <loading :active.sync="isLoading"-->
                    <!--                         :can-cancel="true"-->
                    <!--                         :on-cancel="onCancel"-->
                    <!--                         :is-full-page="fullPage"></loading>-->
                    <div class="card-box bg-taux-budget-actuelle" style="height: 90px !important; cursor: grab !important;">
                        <div class="inner">
                            <p> <b> TAUX BUDGET ACTUEL
                            </b></p>
                            <h3>  </h3>

                        </div>
                        <div class="icon3">
{{tauxBudgetDisponible}} %
                        </div>
                        <div class="icon2">


                        </div>

                    </div>
                </div>

                <div class="span2 vld-parent" style="width: 250px;margin-left: -3px !important;border-right: 10px solid #fff">
                    <!--                <loading :active.sync="isLoading"-->
                    <!--                         :can-cancel="true"-->
                    <!--                         :on-cancel="onCancel"-->
                    <!--                         :is-full-page="fullPage"></loading>-->
                    <div class="card-box bg-execute" style="height: 90px !important; cursor: grab !important;">
                        <div class="inner">
                            <p> <b> BUDGET EXECUTE
                            </b></p>
                            <h3>  </h3>

                        </div>
                        <div class="icon3">
                            {{formatageSomme(parseFloat(budgetExecute))}}
                        </div>
                        <div class="icon2">


                        </div>

                    </div>
                </div>
                <div class="span2 vld-parent" style="width: 250px;margin-left: -3px !important;border-right: 10px solid #fff">
                    <!--                <loading :active.sync="isLoading"-->
                    <!--                         :can-cancel="true"-->
                    <!--                         :on-cancel="onCancel"-->
                    <!--                         :is-full-page="fullPage"></loading>-->
                    <div class="card-box bg-taux-budget-execute" style="height: 90px !important; cursor: grab !important;">
                        <div class="inner">
                            <p> <b> TAUX EXECUTION
                            </b></p>
                            <h3>  </h3>

                        </div>
                        <div class="icon3">
                            {{tauxBudgetExecute}} %
                        </div>
                        <div class="icon2">


                        </div>

                    </div>
                </div>

            </div>
        </div>

<!--        <div class="row-fluid">-->
<!--      <div class="span6">-->
<!--        <div class="quick-actions_homepage">-->
<!--          <div class="widget-title"> <span class="icon"> <i class="icon-signal"></i> </span>-->
<!--            <h5>BIENS SERVICES</h5>-->
<!--          </div>-->
<!--          <div >-->
<!--            <ul class="quick-actions" >-->
<!--                <li class="bg_lb span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialB))}}</span><h4>BIENS & SERVICES</h4></a> </li>-->
<!--  <li class="bg_lg span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetExcuterBienService))}}</span><h4>EXECUTE</h4></a> </li>-->
<!--    -->
<!--            </ul>-->
<!--            <ul class="quick-actions" >-->
<!--                <li class="bg_lo span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponibleBienService))}}</span><h4>DISPONIBLE</h4></a> </li>-->
<!--    <li class="bg_ly span5"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierTauxExecutionBienService}}%</span><h4>EXECUTION</h4></a> </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="span6">-->
<!--        <div class="quick-actions_homepage">-->
<!--          <div class="widget-title"> <span class="icon"> <i class="icon-signal"></i> </span>-->
<!--            <h5>PERSONNEL</h5>-->
<!--          </div>-->
<!--          <ul class="quick-actions" >-->
<!--                <li class="bg_lb span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialPersonnel))}}</span><h4>PERSONNEL</h4></a> </li>-->
<!--  <li class="bg_lg span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(budgetConsommerPersonnel))}}</span><h4>EXECUTE</h4></a> </li>-->
<!--   -->
<!--            </ul>-->
<!--            <ul class="quick-actions" >-->
<!--                <li class="bg_lo span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponiblePersonnel))}}</span><h4>DISPONIBLE</h4></a> </li>-->
<!--    <li class="bg_ly span5"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierTauxExecutionPersonnel}}%</span><h4>EXECUTION</h4></a> </li>-->

<!--            </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="row-fluid">-->
<!--      <div class="span6">-->
<!--        <div class="quick-actions_homepage">-->
<!--          <div class="widget-title"> <span class="icon"> <i class="icon-signal"></i> </span>-->
<!--            <h5>INVESTISSEMENT</h5>-->
<!--          </div>-->
<!--          <ul class="quick-actions" >-->
<!--                <li class="bg_lb span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialInvetissement))}}</span><h4>INVESTISSEMENT</h4></a> </li>-->
<!--  <li class="bg_lg span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetExecutéInvestissement))}}</span><h4>EXECUTE</h4></a> </li>-->
<!--    -->
<!--            </ul>-->
<!--            <ul class="quick-actions" >-->
<!--                <li class="bg_lo span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponibleInvestissement))}}</span><h4>DISPONIBLE</h4></a> </li>-->
<!--    <li class="bg_ly span5"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierTauxExecutionInvestissement}}%</span><h4>EXECUTION</h4></a> </li>-->
<!--            </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="span6">-->
<!--        <div class="quick-actions_homepage">-->
<!--          <div class="widget-title"> <span class="icon"> <i class="icon-signal"></i> </span>-->
<!--            <h5>TRANSFERT</h5>-->
<!--          </div>-->
<!--          <ul class="quick-actions" >-->
<!--                <li class="bg_lb span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialTranferst))}}</span><h4>TRANSFERT</h4></a> </li>-->
<!--  <li class="bg_lg span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(budgetConsommerTransfert))}}</span><h4>EXECUTE</h4></a> </li>-->
<!--   -->
<!--            </ul>-->
<!--            <ul class="quick-actions" >-->
<!--                <li class="bg_lo span5"> <a href="#" style="color:black;"><h4>BUDGET </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponibleTransfert))}}</span><h4>DISPONIBLE</h4></a> </li>-->
<!--    <li class="bg_ly span5"> <a href="#" style="color:black;"><h4>TAUX </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{affichierTauxExecution}}%</span><h4>EXECUTION</h4></a> </li>-->

<!--            </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
        <fab v-if="affiche_boutton_filtre"
             :position="position"
             :bg-color="bgColor"
             :actions="fabActions"
             main-icon="format_indent_decrease"
             @cache="filter"

        ></fab>
        <fab v-if="!affiche_boutton_filtre"
             :position="position"
             :bg-color="bgColor"
             :actions="fabActions"
             main-icon="ballot"
             @cache="filter"

        ></fab>
    </div>

</template>


<script>
import { mapGetters, mapActions } from "vuex";
import {formatageSomme} from '../../src/Repositories/Repository';
import {noDCfNoAdmin} from '../../src/Repositories/Auth';
import {  ModelListSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'
export default {
    components: {
      //  apexchart: VueApexCharts,
        ModelListSelect,
      //  Loading
        //  DraggableDiv
    },
  data(){
    return{
        section:"",
        affiche_filtre:false,
        affiche_boutton_filtre:true,
      budgetGeneralCharge:"",
        controlleur_fin:"",
        status_marches:"",
        unite_administrative_id:"",
        infrastructure:"",
        type_marche:"",
        region:"",
        info_status_marche:"",
        tableMarcheStatue:"",
        grand_nature:"",
        bgColor: '#171b39',
        position: 'bottom-right',
        fabActions: [
            {
                name: 'cache',
                icon: 'cached'
            }
        ],

    }
  },

   
  computed:{
 ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "budgetGeneral",
                "afficheTransfertValider",
                "transferts"

            ]),
            
    ...mapGetters("bienService", ["getMandatPersonnaliserVise","getMandatPersonnaliserPersonnel","mandats","typeMarches","marches"]),

       ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires",
                "gestionModules",
                   'structures_geographiques',
                   'localisations_geographiques',
                   "getterLocalisationGeoAll",
                   "getterInfrastrucure",
            ]),

        noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

      /**
       * Calcule de budget
       * @returns {*|string}
       */

      budgetInitial(){

          let budget=this.budgetGeneral.filter(item=>item.actived==1)

          let initeVal = 0;

         let montantBudget=0;
          if (budget!=undefined){

              //recherche des budget des minister
              if(this.section!="" && this.unite_administrative_id=="" && this.grand_nature==""){
                  budget=budget.filter(item=>item.section_id==this.section)
              }


              //recherche des budget de l'unite administrative
              if(this.section=="" && this.unite_administrative_id!="" && this.grand_nature==""){
                  budget=budget.filter(item=>item.ua_id==this.unite_administrative_id)
              }

              //recherche des budgets des grandes nature de depense
              if(this.section=="" && this.unite_administrative_id=="" && this.grand_nature!=""){
                  budget=budget.filter(item=>item.gdenature_id==this.grand_nature)
              }

              //Recherche des budgets des section et unite Adminstrative
              if(this.section!="" && this.unite_administrative_id!="" && this.grand_nature==""){
                  budget=budget.filter(item=>{
                      if(item.ua_id==this.unite_administrative_id && item.section_id==this.section){
                          return item
                      }
                  })
              }

              //Recherche budget section grande nature depense
              if(this.section!="" && this.unite_administrative_id=="" && this.grand_nature!=""){
                  budget=budget.filter(item=>{
                      if(item.gdenature_id==this.grand_nature && item.section_id==this.section){
                          return item
                      }
                  })
              }

              //recherche budget section grande nature depense, unite administrative

              if(this.section!="" && this.unite_administrative_id!="" && this.grand_nature!=""){
                  budget=budget.filter(item=>{
                      if(item.gdenature_id==this.grand_nature && item.section_id==this.section && item.ua_id==this.unite_administrative_id){
                          return item
                      }
                  })
              }

              //recheche budget grande nature de depense unite administrative
              if(this.section=="" && this.unite_administrative_id!="" && this.grand_nature!=""){
                  budget=budget.filter(item=>{
                      if(item.ua_id==this.unite_administrative_id && item.section_id==this.section){
                          return item
                      }
                  })
              }
              montantBudget=budget.reduce(function (total, currentValue) {
                  return total + parseFloat(currentValue.Dotation_Initiale) ;
              }, initeVal);
          }


         return montantBudget
      },
      budgetActuel(){
          return this.budgetInitial - this.budgetExecute
      },
      budgetExecute(){
          let marche=this.listeMarcheUniteAdmin
          if(marche.length>0){
              let montant_execute=0;
              let vm=this;

              marche.forEach(function (val) {
                  let initeVal = 0;
                  let montant=vm.getMandatPersonnaliserVise.filter(item=>item.marche_id==val.id).reduce(function (total, currentValue) {
                      return total + parseFloat(currentValue.total_general) ;
                  }, initeVal);
                  montant_execute=parseFloat(montant_execute) + parseFloat(montant)
              })

              return montant_execute + this.executionTransfere
          }
          return 0;
      },
      executionTransfere(){
          let initeVal = 0;
          console.log(this.grand_nature)
          let montantTransfere=this.transferts.reduce(function (total, currentValue) {
              return total + parseFloat(currentValue.montant_transfert) ;
          }, initeVal);
        //  console.log(montantTransfere)

          if(this.grand_nature!="" && this.unite_administrative_id==""){

              montantTransfere= this.transferts.filter(item=>item.grandnatire_id==this.grand_nature).reduce(function (total, currentValue) {
                  return total + parseFloat(currentValue.montant_transfert) ;
              }, initeVal);
          }

          if(this.grand_nature=="" && this.unite_administrative_id!=""){

              montantTransfere= this.transferts.filter(item=>item.ua_id==this.unite_administrative_id).reduce(function (total, currentValue) {
                  return total + parseFloat(currentValue.montant_transfert) ;
              }, initeVal);
          }

          if(this.grand_nature!="" && this.unite_administrative_id!=""){

              montantTransfere= this.transferts.filter(item=> {
                  if(item.grandnatire_id==this.grand_nature && item.ua_id==this.unite_administrative_id){
                      return item
                  }

              }).reduce(function (total, currentValue) {
                  return total + parseFloat(currentValue.montant_transfert) ;
              }, initeVal);
          }
          return montantTransfere
      },
      tauxBudgetExecute(){
           let taux=(parseFloat(this.budgetExecute)/parseFloat(this.budgetInitial)) * 100
          if (taux.toFixed()=='NaN')
              return 0
          return taux.toFixed()
      },
      tauxBudgetDisponible(){
          let taux=(parseFloat(this.budgetActuel)/parseFloat(this.budgetInitial)) * 100

          if (taux.toFixed()=='NaN')
              return 0
          return taux.toFixed()
      },

      listeMarcheUniteAdmin(){

          let colect=[]
          let vM=this;

          let uniteAdmin=this.selectionUniteAdminBySection
           if(this.unite_administrative_id!=""){
               uniteAdmin=this.selectionUniteAdminBySection.filter(item=>item.id==this.unite_administrative_id)
           }

            let march=vM.marches
            if(this.grand_nature!=""){
                march=vM.marches.filter(item=>item.gdenature_id==this.grand_nature)
            }

          uniteAdmin.forEach(function (value) {
              let objet=march.filter(item=>{
                      if(item.parent_id!=null && item.unite_administrative_id==value.id && item.sib==0 ){
                          //  console.log(item.parent_id)
                          return item
                      }
                  }
              )
              if(objet!=undefined){
                  objet.forEach(function (val) {
                      let objet=   colect.find(item=>item.id==val.id)
                      if(objet==undefined){
                          colect.push(val)
                      }
                  })
              }


          })
          return colect
      },


      listeCF(){
          return this.getterUtilisateur.filter(item=>{
              if(item.user_role){
                  if (item.user_role.role.code_role=="DCF" || item.user_role.role.code_role=="CF"){
                      return item
                  }
              }
          })
      },
      regions(){
          // console.log(this.localisations_geographiques.filter(item=>item.structure_localisation_geographique.niveau==2))
          return this.localisations_geographiques.filter(item=>{
              if(item.longitude!=null && item.structure_localisation_geographique.niveau==2 ){
                  return item
              }
          });
      },
      filtre_unite_admin() {
          if(this.noDCfNoAdmin){
              let colect=[];
              let vM=this
              this.uniteAdministratives.filter(item=>{
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
      selectionUniteAdminBySection(){
          if(this.section!=""){
              return this.filtre_unite_admin.filter(item=>item.section_id==this.section)
          }
          return this.filtre_unite_admin
      },
      /**
       * Fin calcule
       * @returns {*|string}
       */
      budgetConsommerPersonnel(){
 
    return this.getMandatPersonnaliserPersonnel.filter(element => element.marchetype == "perso" ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
},
affichierBudgetDisponiblePersonnel() {
      const val = parseFloat(this.afficherBudgetInitialPersonnel) - parseFloat(this.budgetConsommerPersonnel);
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
affichierTauxExecutionPersonnel() {
      const val = (parseFloat(this.budgetConsommerPersonnel) / parseFloat(this.afficherBudgetInitialPersonnel))*100;
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },





affichierBudgetDisponibleTransfert() {
      const val = parseFloat(this.afficherBudgetInitialTranferst) - parseFloat(this.budgetConsommerTransfert);
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },

affichierTauxExecution() {
      const val = (parseFloat(this.budgetConsommerTransfert) / parseFloat(this.afficherBudgetInitialTranferst))*100;
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
    
// afficherBudgetInitialTranferst(){
    
//       return this.budgetGeneral.filter(item =>item.gdenature_id==6).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0)
// },


afficherBudgetInitialTranferst() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item =>item.gdenature_id==6).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0)
        }
        return this.budgetGeneral.filter(item =>item.gdenature_id==6).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0)

    },





// budgetConsommerTransfert(){
 
//     return this.afficheTransfertValider.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
// },

budgetConsommerTransfert() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.transferts.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0);
        }
        return this.transferts.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0);

    },

// afficherBudgetInitialPersonnel(){
//  return this.budgetGeneral.filter(item =>item.gdenature_id==2).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)
// },
afficherBudgetInitialPersonnel() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item =>item.gdenature_id==2).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)
        }
        return this.budgetGeneral.filter(item =>item.gdenature_id==2).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)

    },

// afficherBudgetInitialB(){
//  return this.budgetGeneral.filter(item => item.gdenature_id==5).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0) 

// },
afficherBudgetInitialB() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item =>item.gdenature_id==5).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)
        }
        return this.budgetGeneral.filter(item =>item.gdenature_id==5).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)

    },
//calcule du budget executer pour bien service

// afficherBudgetExcuterBienService(){
//   return this.getMandatPersonnaliserVise.filter(item => item.marchetype==2).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)
// },

afficherBudgetExcuterBienService() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.mandats.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item => item.marchetype==2 && item.decision_cf==8).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)
        }
        return this.mandats.filter(item => item.marchetype==2 && item.decision_cf==8).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)

    },



affichierBudgetDisponibleBienService() {
      const val = parseFloat(this.afficherBudgetInitialB) - parseFloat(this.afficherBudgetExcuterBienService);
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
affichierTauxExecutionBienService() {
      const val = (parseFloat(this.afficherBudgetExcuterBienService) / parseFloat(this.afficherBudgetInitialB))*100;
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },

// afficher le montant du budget initial 

// afficherBudgetInitialInvetissement(){
//   return this.budgetGeneral.filter(item => item.gdenature_id==7).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale) , 0)
// },
afficherBudgetInitialInvetissement() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.budgetGeneral.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item =>item.gdenature_id==7).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)
        }
        return this.budgetGeneral.filter(item =>item.gdenature_id==7).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)

    },
afficherBudgetExecutéInvestissement() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.mandats.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(item => item.marchetype==1 &&  item.decision_cf==8).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)
        }
        return this.mandats.filter(item => item.marchetype==1 && item.decision_cf==8).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)

    },
// calcule du budget executé d'investissement


// afficherBudgetExecutéInvestissement(){
//   return this.getMandatPersonnaliserVise.filter(item => item.marchetype==1).reduce((prec, cur)=>parseFloat(prec) + parseFloat(cur.total_general), 0)
// },


affichierBudgetDisponibleInvestissement() {
      const val = parseFloat(this.afficherBudgetInitialInvetissement) - parseFloat(this.afficherBudgetExecutéInvestissement);
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
affichierTauxExecutionInvestissement() {
      const val = (parseFloat(this.afficherBudgetExecutéInvestissement) / parseFloat(this.afficherBudgetInitialInvetissement))*100;
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
// afficher budget Personnel


// afficherCodeGrandNature(){
  
//  return id =>{
//    if(id!=null && id!=""){
//    let resultat = this.grandes_natures.filter(item => item.id==id)

//     if(resultat){
//       return resultat.code
//     }
//    }
//  }
// },




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


  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.gestionModules.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  
},
  methods:{
...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),
      videUniteAdmin(){
          this.unite_administrative_id=""
      },
      videRegions(){
          this.region=""

      },
      videInfrastructure(){
          this.infrastructure=""
      },
      videGrandNatureDepense(){
          this.grand_nature=""
      },
      videSection(){
          this.section=""
          this.unite_administrative_id=""
      },
      filter(){
          this.affiche_filtre=!this.affiche_filtre
          this.affiche_boutton_filtre=!this.affiche_boutton_filtre
          // this.videUniteAdmin()
          // this.videRegions()
          // this.videInfrastructure()
          // this.videTypeMarche()
      },
 formatageSomme:formatageSomme
  },
    watch: {
        section:function (value) {
            console.log(value)
            this.unite_administrative_id=""
        }
    }
}
</script>
<style scoped>
.flex{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
}
.square{
  width: 50px;
  height: 50px;
 
  color: #FAFAFA;
  text-align: center;
  margin-right: 5px;
  cursor: pointer;
  line-height: 50px;
}
.square:hover{
  opacity: 0.8;
}
.S{
  background-color:orange;
}
.I{
  background-color:orange;
}
.D{
  background-color:white;
  color: black;
}
.C{
  background-color:green;
  color: white;
}
.F{
 background-color:green;
  color: white;
}


.card-box {
    position: relative;
    color: #fff;
    padding: 10px 10px 30px;
    margin: 10px 0px;
    height: 55px !important;
    font-size: 13px !important;
}
.card-box:hover {
    text-decoration: none;
    color: #f1f1f1;
}

.card-box .inner {
    padding: 5px 10px 0 10px;
    font-size: 5em !important;
}
.card-box h3 {
    font-size: 12px;
    font-weight: bold;
    margin: 0 0 8px 0;
    white-space: nowrap;

    text-align: left;
}
.card-box p {
    font-size: 14px;
}
.card-box .icon {
    position: absolute;
    top: auto;
    bottom: 3px;
    right: 3px;
    z-index: 0;
    font-size: 50px;
    color: rgba(0, 0, 0, 0.15);
}
.card-box .icon3 {
    position: absolute;
    top: auto;
    bottom: 35px;
    right: 3px;
    z-index: 0;
    font-size: 15px;
    color: #f2f2f2;
}

.card-box .icon2 {
    position: absolute;
    top: auto;
    bottom: 5px;
    right: 3px;
    z-index: 0;
    font-size: 10px;
    color: #f2f2f2;
}

.card-box .card-box-footer {
    position: absolute;
    left: 0px;
    bottom: 0px;
    text-align: center;
    padding: 3px 0;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    text-decoration: none;
}
.card-box:hover .card-box-footer {
    background: rgba(0, 0, 0, 0.3);
}
.bg-prevision{

    background-color: #39363a !important;
}
.bg-blue {
    background-color: #00c0ef !important;
}
.bg-execute {
    background-color: #00a659 !important;
}
.bg-orange {
    background-color: #f39c12 !important;
}
.bg-red {
    background-color: #d9534f !important;
}
.bg-disponible {
    background-color: #144182 !important;
}
.bg-taux-budget-execute {
    background-color: #ba6f23 !important;
}
.bg-restant {
    background-color: #154282 !important;
}

.bg-taux-budget-actuelle {
    background-color: #a62e59 !important;
}


.bg-attente-contratualisation-hors-alert {

    background-color: #8ea9db !important;
}
.bg-attente-contratualisation-avec-alert {
    background-color: #f4b084 !important;
}
.bg-en-contratualisation {
    background-color: #92d050 !important;
}

.bg-en-contratualisation-hort-delais {
    background-color: #652b92 !important;
}
.bg-en-execution {
    background-color: #d7b755 !important;
}

.bg-en-execution-horts-delais {
    background-color: #d36f2b !important;
}

.bg-acheve-hors-delais {
    background-color: #00b04f !important;
}

.bg-en-souffrance {
    background-color: red !important;
}
.bg-en-avenant{
    background-color: #ff6c1d !important;
}
.bg-acheve-delais {
    background-color: #757171 !important;
}
.bg-horts-ppm{
    background-color: #ffb62f !important;
}

.red {
    color: #fff !important;
    background-color: #892e6a !important;
}

.red_type_marche {
    color: #fff !important;
    background-color: #892e6a !important;
}







.card {
    background-color: #fff;
    border-radius: 10px;
    border: none;
    position: relative;
    margin-bottom: 30px;
    box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,0.1), 0 0.9375rem 1.40625rem rgba(90,97,105,0.1), 0 0.25rem 0.53125rem rgba(90,97,105,0.12), 0 0.125rem 0.1875rem rgba(90,97,105,0.1);
}
.l-bg-cherry {
    background: linear-gradient(to right, #493240, #f09) !important;
    color: #fff;
}

.l-bg-blue-dark {
    background: linear-gradient(to right, #373b44, #4286f4) !important;
    color: #fff;
}

.l-bg-green-dark {
    background: linear-gradient(to right, #0a504a, #38ef7d) !important;
    color: #fff;
}

.l-bg-orange-dark {
    background: linear-gradient(to right, #a86008, #ffba56) !important;
    color: #fff;
}

.card .card-statistic-3 .card-icon-large .fas, .card .card-statistic-3 .card-icon-large .far, .card .card-statistic-3 .card-icon-large .fab, .card .card-statistic-3 .card-icon-large .fal {
    font-size: 110px;
}

.card .card-statistic-3 .card-icon {
    text-align: center;
    line-height: 50px;
    margin-left: 15px;
    color: #000;
    position: absolute;
    right: -5px;
    top: 20px;
    opacity: 0.1;
}

.l-bg-cyan {
    background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
    color: #fff;
}

.l-bg-green {
    background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
    color: #fff;
}

.l-bg-orange {
    background: linear-gradient(to right, #f9900e, #ffba56) !important;
    color: #fff;
}

.l-bg-cyan {
    background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
    color: #fff;
}





#footer {
    position:relative;
    height:20px;
    width:100%;
    background:transparent;

}



.card-1 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

/*.card-1:hover {*/
/*box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);*/
/*}*/

.card-2 {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.card-3 {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.card-4 {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-5 {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}



</style>