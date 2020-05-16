<template>




   
<!--breadcrumbs-->
  
<!--End-breadcrumbs-->

<!--Action boxes-->
  <div class="container-fluid">
    <div class="quick-actions_homepage">
      <h4 style="text-align: center;color:red;font-weight:bold;font-size:15px">TABLEAUX DE BORD</h4>

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
                            


                             <ul class="quick-actions">
         <li class="bg_lb"> <a href="#"> <i class="icon-dashboard"></i> <span class="label label-important">{{formatageSomme(parseFloat(afficherBudgetInitialTranferst))}}</span> My Dashboard </a> </li>
        <li class="bg_lg span3"> <a href="charts.html"> <i class="icon-signal"></i> Charts</a> </li>
        <li class="bg_ly"> <a href="widgets.html"> <i class="icon-inbox"></i><span class="label label-success">101</span> Widgets </a> </li>
        <li class="bg_lo"> <a href="tables.html"> <i class="icon-th"></i> Tables</a> </li>
        <li class="bg_ls"> <a href="grid.html"> <i class="icon-fullscreen"></i> Full width</a> </li>
        <li class="bg_lo span3"> <a href="form-common.html"> <i class="icon-th-list"></i> Forms</a> </li>
        <li class="bg_ls"> <a href="buttons.html"> <i class="icon-tint"></i> Buttons</a> </li>
        <li class="bg_lb"> <a href="interface.html"> <i class="icon-pencil"></i>Elements</a> </li>
        <li class="bg_lg"> <a href="calendar.html"> <i class="icon-calendar"></i> Calendar</a> </li>
        <li class="bg_lr"> <a href="error404.html"> <i class="icon-info-sign"></i> Error</a> </li>
 <li class="bg_lb"> <a href="index.html"> <i class="icon-dashboard"></i> <span class="label label-important">20</span> My Dashboard </a> </li>
        <li class="bg_lg span3"> <a href="charts.html"> <i class="icon-signal"></i> Charts</a> </li>
        <li class="bg_ly"> <a href="widgets.html"> <i class="icon-inbox"></i><span class="label label-success">101</span> Widgets </a> </li>
        <li class="bg_lo"> <a href="tables.html"> <i class="icon-th"></i> Tables</a> </li>
        <li class="bg_ls"> <a href="grid.html"> <i class="icon-fullscreen"></i> Full width</a> </li>
        <li class="bg_lo span3"> <a href="form-common.html"> <i class="icon-th-list"></i> Forms</a> </li>
        <li class="bg_ls"> <a href="buttons.html"> <i class="icon-tint"></i> Buttons</a> </li>
        <li class="bg_lb"> <a href="interface.html"> <i class="icon-pencil"></i>Elements</a> </li>
        <li class="bg_lg"> <a href="calendar.html"> <i class="icon-calendar"></i> Calendar</a> </li>
        <li class="bg_lr"> <a href="error404.html"> <i class="icon-info-sign"></i> Error</a> </li>
      </ul>

                          </div>

                          <div id="tab01" class="tab-pane">
                                  <ul class="quick-actions">
             <li class="bg_lo span3"> <a href="#"> <i class="icon-th-list"></i><span class="label label-important">{{formatageSomme(parseFloat(afficherBudgetInitialPersonnel))}}</span>Budget Initail personnel</a> </li>
        <li class="bg_ls"> <a href="#"> <i class="icon-tint"></i> <span class="label label-warning"></span> budget executé personnel</a> </li>
        <li class="bg_lb"> <a href="interface.html"> <i class="icon-pencil"></i>  <span class="label label-success"></span>Reste du budget personnel</a> </li>
        <li class="bg_lg"> <a href="calendar.html"> <i class="icon-calendar"></i> <span class="label label-important"> %</span>Taux d'execution personnel</a> </li>

                            </ul>
                 
                          </div>

                          
                          <div id="tab4" class="tab-pane">
                           <ul class="quick-actions">
        <li class="bg_lb"> <a href="#"> <i class="icon-dashboard"></i> <span class="label label-important">{{formatageSomme(parseFloat(afficherBudgetInitialB))}}</span>Budget Total de Biens&service</a> </li>
        <li class="bg_lg span3"> <a href="charts.html"> <i class="icon-signal"></i><span class="label label-warning">{{formatageSomme(parseFloat(afficherBudgetExcuterBienService))}}</span> Budget Executé de Biens & service</a> </li>
        <li class="bg_ly"> <a href="widgets.html"> <i class="icon-inbox"></i><span class="label label-success">{{formatageSomme(parseFloat(afficherBudgetInitialB) - (parseFloat(afficherBudgetExcuterBienService)))}}</span> Reste du budget bien & service </a> </li>
        <li class="bg_lo"> <a href="tables.html"> <i class="icon-th"></i><span class="label label-primary">{{((afficherBudgetInitialB)/(parseFloat(afficherBudgetExcuterBienService)) * 100)}} %</span> <table>Taux d'execution bien & service</table></a> </li>
        <li class="bg_ls"> <a href="grid.html"> <i class="icon-fullscreen"></i> Full width</a> </li>
        <li class="bg_lo span3"> <a href="form-common.html"> <i class="icon-th-list"></i> Forms</a> </li>
        <li class="bg_ls"> <a href="buttons.html"> <i class="icon-tint"></i> Buttons</a> </li>
        <li class="bg_lb"> <a href="interface.html"> <i class="icon-pencil"></i>Elements</a> </li>
        <li class="bg_lg"> <a href="calendar.html"> <i class="icon-calendar"></i> Calendar</a> </li>
        <li class="bg_lr"> <a href="error404.html"> <i class="icon-info-sign"></i> Error</a> </li>
      <li class="bg_lb"> <a href="index.html"> <i class="icon-dashboard"></i> <span class="label label-important">20</span> My Dashboard </a> </li>
        <li class="bg_lg span3"> <a href="charts.html"> <i class="icon-signal"></i> Charts</a> </li>
        <li class="bg_ly"> <a href="widgets.html"> <i class="icon-inbox"></i><span class="label label-success">101</span> Widgets </a> </li>
        <li class="bg_lo"> <a href="tables.html"> <i class="icon-th"></i> Tables</a> </li>
        <li class="bg_ls"> <a href="grid.html"> <i class="icon-fullscreen"></i> Full width</a> </li>
        <li class="bg_lo span3"> <a href="form-common.html"> <i class="icon-th-list"></i> Forms</a> </li>
        <li class="bg_ls"> <a href="buttons.html"> <i class="icon-tint"></i> Buttons</a> </li>
        <li class="bg_lb"> <a href="interface.html"> <i class="icon-pencil"></i>Elements</a> </li>
        <li class="bg_lg"> <a href="calendar.html"> <i class="icon-calendar"></i> Calendar</a> </li>
        <li class="bg_lr"> <a href="error404.html"> <i class="icon-info-sign"></i> Error</a> </li>
      </ul>


                          </div>

                          
                          <div id="tab1" class="tab-pane">
                          <ul class="quick-actions">
             <li class="bg_lo span3"> <a href="#"> <i class="icon-th-list"></i><span class="label label-important">{{formatageSomme(parseFloat(afficherBudgetInitialInvetissement))}}</span>Budget Initail d'investissement</a> </li>
        <li class="bg_ls"> <a href="#"> <i class="icon-tint"></i> <span class="label label-warning">{{ formatageSomme(parseFloat(afficherBudgetExecutéInvestissement))}}</span> budget executé pour investissement</a> </li>
        <li class="bg_lb"> <a href="interface.html"> <i class="icon-pencil"></i>  <span class="label label-success">{{formatageSomme(parseFloat(afficherBudgetInitialInvetissement) - (parseFloat(afficherBudgetExecutéInvestissement)))}}</span>Reste du budget en ivestissement</a> </li>
        <li class="bg_lg"> <a href="calendar.html"> <i class="icon-calendar"></i> <span class="label label-important">{{((afficherBudgetInitialInvetissement) / (parseFloat(afficherBudgetExecutéInvestissement)) * 100)}} %</span>Taux d'execution d'investissement</a> </li>

                            </ul>
                          </div>
                           </div>
 
    </div>
<!--End-Action boxes-->    

<!--Chart-box-->    
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




afficherBudgetInitialTranferst(){
    
      return this.budgetGeneral.filter(item =>item.gdenature_id==6).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0)
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



// afficher le montant du budget initial 

afficherBudgetInitialInvetissement(){
  return this.budgetGeneral.filter(item => item.gdenature_id==7).reduce((prec, cur)=> parseFloat(prec) + parseFloat(cur.Dotation_Initiale) , 0)
},


// calcule du budget executé d'investissement


afficherBudgetExecutéInvestissement(){
  return this.getMandatPersonnaliserVise.filter(item => item.marchetype==1).reduce((prec, cur)=>parseFloat(prec) + parseFloat(cur.total_general), 0)
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