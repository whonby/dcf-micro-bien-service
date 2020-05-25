<template>




   
<!--breadcrumbs-->
  
<!--End-breadcrumbs-->

<!--Action boxes-->
  <div class="container-fluid">
    <div class="quick-actions_homepage">
      <h4 style="text-align: center;color:red;font-weight:bold;font-size:15px">TABLEAU DE BORD</h4>
 <!-- <div class="flex">
    <div class="square S" ><p>TA</p></div>
    <div class="square I"><p>BL</p></div>
    <div class="square D"><p>EAU</p></div>
    <div class="square"><p></p></div>
    <div class="square C"><p>DE</p></div>
    <div class="square F"><p></p></div>
    <div class="square F"><p>BO</p></div>
    <div class="square F"><p>RD</p></div>
  </div> -->
                           <div class="widget-title">
                            <ul class="nav nav-tabs">
                                 <li class="active"><a data-toggle="tab" href="#tab0145">TRANSFERTS</a></li>
                                <li class=""><a data-toggle="tab" href="#tab01">PERSONNELS</a></li>
                                <li class=""><a data-toggle="tab" href="#tab4">BIENS & SERVICES</a></li>
                                <li class=""><a data-toggle="tab" href="#tab1">INVESTISSEMENTS</a></li>
                               
                                
                            </ul>
                        </div>


                         <div class="widget-content tab-content">
                         <div id="tab0145" class="tab-pane active">
                            


                             <ul class="quick-actions" style="margin:0px 180px">
         <li class="bg_lb span5"> <a href="#" style="color:black;"> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialTranferst))}}</span><h3>BUDGET TRANSFERT</h3></a> </li>

        <li class="bg_ly span5"> <a href="#" style="color:black;"> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{formatageSomme(parseFloat(budgetConsommerTransfert))}}</span><h3>BUDGET EXECUTE</h3>  </a> </li>
        <li class="bg_lo span5"> <a href="#" style="color:black;"> <i class="icon-th"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponibleTransfert))}}</span><h3>BUDGET DISPONIBLE</h3> </a> </li>
        <li class="bg_ls span5"> <a href="#" style="color:black;"> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{affichierTauxExecution}}%</span> <h3>TAUX EXECUTION</h3></a> </li>
  
      </ul>
    <div class="row-fluid">
      <div class="widget-box">
        <div class="widget-title bg_lg"><span class="icon"><i class="icon-signal"></i></span>
          <h5>Site Analytics</h5>
        </div>
        <div class="widget-content" >
          <div class="row-fluid">
            <div class="span9">
              <div class="chart">
                  
              </div>
            </div>
            <div class="span3">
              <ul class="site-stats">
                <li class="bg_lh"><i class="icon-user"></i> <strong>2540</strong> <small>Total Users</small></li>
                <li class="bg_lh"><i class="icon-plus"></i> <strong>120</strong> <small>New Users </small></li>
                <li class="bg_lh"><i class="icon-shopping-cart"></i> <strong>656</strong> <small>Total Shop</small></li>
                <li class="bg_lh"><i class="icon-tag"></i> <strong>9540</strong> <small>Total Orders</small></li>
                <li class="bg_lh"><i class="icon-repeat"></i> <strong>10</strong> <small>Pending Orders</small></li>
                <li class="bg_lh"><i class="icon-globe"></i> <strong>8540</strong> <small>Online Orders</small></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
                          </div>

                          <div id="tab01" class="tab-pane">
                                  <ul class="quick-actions" style="margin:0px 180px">
             <!-- <li class="bg_lo span3"> <a href="#"> <i class="icon-th-list"></i><span class="label label-important">{{formatageSomme(parseFloat(afficherBudgetInitialPersonnel))}}</span>BUDGET PERSONNEL</a> </li>
        <li class="bg_ls"> <a href="#"> <i class="icon-tint"></i> <span class="label label-warning"></span> BUDGET EXECUTE</a> </li>
        <li class="bg_lb"> <a href="#"> <i class="icon-pencil"></i>  <span class="label label-success"></span>BUDGET DISPONIBLE</a> </li>
        <li class="bg_lg"> <a href="#"> <i class="icon-calendar"></i> <span class="label label-important"> %</span>TAUX EXECUTION</a> </li> -->

 <li class="bg_lb span5"> <a href="#" style="color:black;"> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialPersonnel))}}</span><h3>BUDGET PERSONNEL</h3></a> </li>

        <li class="bg_ly span5"> <a href="#" style="color:black;"> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{formatageSomme(parseFloat(budgetConsommerPersonnel))}}</span><h3>BUDGET EXECUTE</h3>  </a> </li>
        <li class="bg_lo span5"> <a href="#" style="color:black;"> <i class="icon-th"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponiblePersonnel))}}</span><h3>BUDGET DISPONIBLE</h3> </a> </li>
        <li class="bg_ls span5"> <a href="#" style="color:black;"> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{affichierTauxExecutionPersonnel}}%</span> <h3>TAUX EXECUTION</h3></a> </li>
  
                            </ul>
                     <div class="row-fluid">
      <div class="widget-box">
        <div class="widget-title bg_lg"><span class="icon"><i class="icon-signal"></i></span>
          <h5>Site Analytics</h5>
        </div>
        <div class="widget-content" >
          <div class="row-fluid">
            <div class="span9">
              <div class="chart">
                  
              </div>
            </div>
            <div class="span3">
              <ul class="site-stats">
                <li class="bg_lh"><i class="icon-user"></i> <strong>2540</strong> <small>Total Users</small></li>
                <li class="bg_lh"><i class="icon-plus"></i> <strong>120</strong> <small>New Users </small></li>
                <li class="bg_lh"><i class="icon-shopping-cart"></i> <strong>656</strong> <small>Total Shop</small></li>
                <li class="bg_lh"><i class="icon-tag"></i> <strong>9540</strong> <small>Total Orders</small></li>
                <li class="bg_lh"><i class="icon-repeat"></i> <strong>10</strong> <small>Pending Orders</small></li>
                <li class="bg_lh"><i class="icon-globe"></i> <strong>8540</strong> <small>Online Orders</small></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
                          </div>

                          
                          <div id="tab4" class="tab-pane">
                           <ul class="quick-actions" style="margin:0px 180px">
        <!-- <li class="bg_lb"> <a href="#"> <i class="icon-dashboard"></i> <span class="label label-important">{{formatageSomme(parseFloat(afficherBudgetInitialB))}}</span>BUDGET BIEN & SERVICE</a> </li>
        <li class="bg_lg span3"> <a href="#"> <i class="icon-signal"></i><span class="label label-warning">{{formatageSomme(parseFloat(afficherBudgetExcuterBienService))}}</span> BUDGET EXECUTE</a> </li>
        <li class="bg_ly"> <a href="#"> <i class="icon-inbox"></i><span class="label label-success">{{formatageSomme(parseFloat(afficherBudgetInitialB) - (parseFloat(afficherBudgetExcuterBienService)))}}</span> BUDGET DISPONIBLE </a> </li>
        <li class="bg_lo"> <a href="#"> <i class="icon-th"></i><span class="label label-primary">{{((afficherBudgetInitialB)/(parseFloat(afficherBudgetExcuterBienService)) * 100)}} %</span> <table>TAUX EXECUTION</table></a> </li>
        -->
       <li class="bg_lb span5"> <a href="#" style="color:black;"> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialB))}}</span><h3>BUDGET BIEN & SERVICE</h3></a> </li>

        <li class="bg_ly span5"> <a href="#" style="color:black;"> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetExcuterBienService))}}</span><h3>BUDGET EXECUTE</h3>  </a> </li>
        <li class="bg_lo span5"> <a href="#" style="color:black;"> <i class="icon-th"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponibleBienService))}}</span><h3>BUDGET DISPONIBLE</h3> </a> </li>
        <li class="bg_ls span5"> <a href="#" style="color:black;"> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{affichierTauxExecutionBienService}}%</span> <h3>TAUX EXECUTION</h3></a> </li>
  
        <!-- <li class="bg_ls"> <a href="#"> <i class="icon-fullscreen"></i> Full width</a> </li>
        <li class="bg_lo span3"> <a href="#"> <i class="icon-th-list"></i> Forms</a> </li>
        <li class="bg_ls"> <a href="#"> <i class="icon-tint"></i> Buttons</a> </li>
        <li class="bg_lb"> <a href="#"> <i class="icon-pencil"></i>Elements</a> </li>
        <li class="bg_lg"> <a href="#"> <i class="icon-calendar"></i> Calendar</a> </li>
        <li class="bg_lr"> <a href="#"> <i class="icon-info-sign"></i> Error</a> </li>
      <li class="bg_lb"> <a href="#"> <i class="icon-dashboard"></i> <span class="label label-important">20</span> My Dashboard </a> </li>
        <li class="bg_lg span3"> <a href="#"> <i class="icon-signal"></i> Charts</a> </li>
        <li class="bg_ly"> <a href="#"> <i class="icon-inbox"></i><span class="label label-success">101</span> Widgets </a> </li>
        <li class="bg_lo"> <a href="#"> <i class="icon-th"></i> Tables</a> </li>
        <li class="bg_ls"> <a href="#"> <i class="icon-fullscreen"></i> Full width</a> </li>
        <li class="bg_lo span3"> <a href="#"> <i class="icon-th-list"></i> Forms</a> </li>
        <li class="bg_ls"> <a href="#"> <i class="icon-tint"></i> Buttons</a> </li>
        <li class="bg_lb"> <a href="#"> <i class="icon-pencil"></i>Elements</a> </li>
        <li class="bg_lg"> <a href="#"> <i class="icon-calendar"></i> Calendar</a> </li>
        <li class="bg_lr"> <a href="#"> <i class="icon-info-sign"></i> Error</a> </li> -->
      </ul>
    <div class="row-fluid">
      <div class="widget-box">
        <div class="widget-title bg_lg"><span class="icon"><i class="icon-signal"></i></span>
          <h5>Site Analytics</h5>
        </div>
        <div class="widget-content" >
          <div class="row-fluid">
            <div class="span9">
              <div class="chart">
                  
              </div>
            </div>
            <div class="span3">
              <ul class="site-stats">
                <li class="bg_lh"><i class="icon-user"></i> <strong>2540</strong> <small>Total Users</small></li>
                <li class="bg_lh"><i class="icon-plus"></i> <strong>120</strong> <small>New Users </small></li>
                <li class="bg_lh"><i class="icon-shopping-cart"></i> <strong>656</strong> <small>Total Shop</small></li>
                <li class="bg_lh"><i class="icon-tag"></i> <strong>9540</strong> <small>Total Orders</small></li>
                <li class="bg_lh"><i class="icon-repeat"></i> <strong>10</strong> <small>Pending Orders</small></li>
                <li class="bg_lh"><i class="icon-globe"></i> <strong>8540</strong> <small>Online Orders</small></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

                          </div>

                          
                          <div id="tab1" class="tab-pane">
                          <ul class="quick-actions" style="margin:0px 180px">
             <!-- <li class="bg_lo span3"> <a href="#"> <i class="icon-th-list"></i><span class="label label-important">{{formatageSomme(parseFloat(afficherBudgetInitialInvetissement))}}</span>BUDGET INVESTISSEMENT</a> </li>
        <li class="bg_ls"> <a href="#"> <i class="icon-tint"></i> <span class="label label-warning">{{ formatageSomme(parseFloat(afficherBudgetExecutéInvestissement))}}</span> BUDGET EXECUTE</a> </li>
        <li class="bg_lb"> <a href="#"> <i class="icon-pencil"></i>  <span class="label label-success">{{formatageSomme(parseFloat(afficherBudgetInitialInvetissement) - (parseFloat(afficherBudgetExecutéInvestissement)))}}</span>BUDGET DISPONIBLE</a> </li>
        <li class="bg_lg"> <a href="#"> <i class="icon-calendar"></i> <span class="label label-important">{{((afficherBudgetInitialInvetissement) / (parseFloat(afficherBudgetExecutéInvestissement)) * 100)}} %</span>TAUX EXECUTION</a> </li> -->

 <li class="bg_lb span5"> <a href="#" style="color:black;"> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetInitialInvetissement))}}</span><h3>BUDGET INVESTISSEMENT</h3></a> </li>

        <li class="bg_ly span5"> <a href="#" style="color:black;"> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{formatageSomme(parseFloat(afficherBudgetExecutéInvestissement))}}</span><h3>BUDGET EXECUTE</h3>  </a> </li>
        <li class="bg_lo span5"> <a href="#" style="color:black;"> <i class="icon-th"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(affichierBudgetDisponibleInvestissement))}}</span><h3>BUDGET DISPONIBLE</h3> </a> </li>
        <li class="bg_ls span5"> <a href="#" style="color:black;"> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{affichierTauxExecutionInvestissement}}%</span> <h3>TAUX EXECUTION</h3></a> </li>
  
                            </ul>
                                <div class="row-fluid">
      <div class="widget-box">
        <div class="widget-title bg_lg"><span class="icon"><i class="icon-signal"></i></span>
          <h5>Site Analytics</h5>
        </div>
        <div class="widget-content" >
          <div class="row-fluid">
            <div class="span9">
              <div class="chart">
                  
              </div>
            </div>
            <div class="span3">
              <ul class="site-stats">
                <li class="bg_lh"><i class="icon-user"></i> <strong>2540</strong> <small>Total Users</small></li>
                <li class="bg_lh"><i class="icon-plus"></i> <strong>120</strong> <small>New Users </small></li>
                <li class="bg_lh"><i class="icon-shopping-cart"></i> <strong>656</strong> <small>Total Shop</small></li>
                <li class="bg_lh"><i class="icon-tag"></i> <strong>9540</strong> <small>Total Orders</small></li>
                <li class="bg_lh"><i class="icon-repeat"></i> <strong>10</strong> <small>Pending Orders</small></li>
                <li class="bg_lh"><i class="icon-globe"></i> <strong>8540</strong> <small>Online Orders</small></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
                          </div>
                           </div>
 
    </div>
<!--End-Action boxes-->    

<!--Chart-box-->    
   

  </div>

</template>


<script>
import { mapGetters, mapActions } from "vuex";
import {formatageSomme} from '../../../../src/Repositories/Repository';
export default {
  data(){
    return{

      budgetGeneralCharge:""

    }
  },

   created() {
          //  this.detailBudget=this.getterBudgeCharge.find(item=>item.id== this.$route.params.id)
          this.budgetGeneralCharge=this.budgetGeneral.filter(item=>item.actived==1)
            console.log(this.budgetGeneralCharge)
        },
  computed:{
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
afficherBudgetInitialTranferst(){
    
      return this.budgetGeneral.filter(item =>item.gdenature_id==6).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0)
},
budgetConsommerTransfert(){
 
    return this.afficheTransfertValider.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
      
  
    
  
},

afficherBudgetInitialPersonnel(){
 return this.budgetGeneral.filter(item =>item.gdenature_id==2).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale),0)
},


afficherBudgetInitialB(){
 return this.budgetGeneral.filter(item => item.gdenature_id==5).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0) 

},

//calcule du budget executer pour bien service

afficherBudgetExcuterBienService(){
  return this.getMandatPersonnaliserVise.filter(item => item.marchetype==2).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)
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

afficherBudgetInitialInvetissement(){
  return this.budgetGeneral.filter(item => item.gdenature_id==7).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale) , 0)
},


// calcule du budget executé d'investissement


afficherBudgetExecutéInvestissement(){
  return this.getMandatPersonnaliserVise.filter(item => item.marchetype==1).reduce((prec, cur)=>parseFloat(prec) + parseFloat(cur.total_general), 0)
},


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

  methods:{
...mapActions('',['']),


 formatageSomme:formatageSomme
  }
}
</script>
<style>
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
</style>