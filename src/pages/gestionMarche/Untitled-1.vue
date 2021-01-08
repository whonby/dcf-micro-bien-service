<template>
 
     <div>
       <h4 style="text-align:center">Module Unité d'Administratives</h4>
       <br>
        
       <div class="row-fluid">
       
      <div class="span6">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>NOMBRES UNITE D'ADMINISTRATIVE ENREGISTREES</h5>
          </div>
          <div class="widget-content"> 
            <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{nbreUniteAdministratives}}</h1>
            
            </div>
        </div>
      </div>
      <div class="span6">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>BUDGET TOTAL</h5>
            <!-- <div align="right">
                Recherche
               
              </div> -->
          </div>
           <div class="widget-content"> 
            <h1 style="text-align:center;color:red;font-size:20px;padding:6% 6%">{{formatageSomme(parseFloat(montantBudgetGeneralUa))}}</h1>
            
            </div>
        </div>
      </div>
      
    </div>
    
                <div class="">
                     <ul class="quick-actions">
        <li class="bg_lb"> <a href="index.html"> <i class="icon-dashboard"></i> <span class="label label-important">20</span> My Dashboard </a> </li>
        <li class="bg_lg span3"> <a href="charts.html"> <i class="icon-signal"></i> Charts</a> </li>
        <li class="bg_ly"> <a href="widgets.html"> <i class="icon-inbox"></i><span class="label label-success">101</span> Widgets </a> </li>
        <li class="bg_lo"> <a href="tables.html"> <i class="icon-th"></i> Tables</a> </li>
        <li class="bg_ls"> <a href="grid.html"> <i class="icon-fullscreen"></i> Full width</a> </li>
        <li class="bg_lo span3"> <a href="form-common.html"> <i class="icon-th-list"></i> Forms</a> </li>
        <!-- <li class="bg_ls"> <a href="buttons.html"> <i class="icon-tint"></i> Buttons</a> </li>
        <li class="bg_lb"> <a href="interface.html"> <i class="icon-pencil"></i>Elements</a> </li>
        <li class="bg_lg"> <a href="calendar.html"> <i class="icon-calendar"></i> Calendar</a> </li>
        <li class="bg_lr"> <a href="error404.html"> <i class="icon-info-sign"></i> Error</a> </li> -->

      </ul>
                    </div>


                    <div class="row-fluid">
                        <div class="span4" style="border: 1px dotted #EEEEEE; margin-right:800px; margin-top:0px; ">
                            <apexchart type="pie" width="350" :options="chartOptions" :series="dataPourcentage"></apexchart>
                        </div>
                        <div class="span8"  style="margin-left:500px; margin-top:-150px;">
                            <nav aria-label="breadcrumb" class="main-breadcrumb" >
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"  >  </li>
                                </ol>
                            </nav>
                            <table class="table   table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>UA </th>
                                    <th>Nombre Marche</th>
                                    <th>Montant prevue</th>
                                    <th >Montant base</th>
                                    <th>Taux</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody >
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td ></td>
                                    <td> %</td>
                                    <td> <a href="#" class="btn btn-default " title="Detail marches">
                                        <span class=""><i class="icon-folder-open"></i></span>
                                    </a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <fab
             :position="position"
             :bg-color="bgColor"
             :actions="fabActions"
             main-icon="format_indent_decrease"
            

        ></fab>
        <fab 
             :position="position"
             :bg-color="bgColor"
             :actions="fabActions"
             main-icon="ballot"
             

        ></fab>
                </div>

       <!-- <div class="quick-actions_homepage">
      <ul class="quick-actions">
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
       -->
     <!-- <div class="row-fluid">
       
      <div class="span6">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>NOMBRES UNITE D'ADMINISTRATIVE </h5>
          </div>
          <div class="widget-content"> 
            <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{nbreUniteAdministratives}}</h1>
            
            </div>
        </div>
      </div>
      <div class="span6">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>BUDGET TOTAL</h5>
            <div align="right">
                Recherche
               
              </div>
          </div>
           <div class="widget-content"> 
            <h1 style="text-align:center;color:red;font-size:20px;padding:6% 6%">{{formatageSomme(parseFloat(montantBudgetGeneralUa))}}</h1>
            
            </div>
        </div>
      </div>
      
    </div> -->
    <!-- <div class="row-fluid">
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>ENTREPRISE NON SANCTIONNEE</h5>
          </div>
          <div class="widget-content"> 
               <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{EntrepriseNonSantionner}}</h1>
            
          </div>
        </div>
      </div>
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>ENTREPRISE SANCTIONNEE</h5>
          </div>
          <div class="widget-content"> 
               <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{EntrepriseSantionner}}</h1>
            
          </div>
        </div>
      </div>
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>One third width <code>class=Span4</code></h5>
          </div>
          <div class="widget-content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
        </div>
      </div>
    </div> -->
   

</template>


<script>
import { mapGetters, mapActions } from "vuex";
  import VueApexCharts from 'vue-apexcharts'
import {formatageSomme} from '../../src/Repositories/Repository';
import {noDCfNoAdmin} from '../../src/Repositories/Auth';
import moment from "moment";
export default {
  components:{
    apexchart: VueApexCharts,
  },
  data(){
    return{
      fabActions: [
                    {
                        name: 'cache',
                        icon: 'cached'
                    }
                ],
              bgColor: '#171b39',
               position: 'bottom-right',
      dataPourcentage:[],
      info_status_marche:"",
      chartOptions: {
                    chart: {
                        width: 380,
                        type: 'pie',
                    },
                    labels: ['A.C.H.A', 'A.C.A.A', 'En Cont.', 'En Execution', 'En Souffrance.'],
                    colors:['#410041', '#e81776', '#FF00FF',"#008000","#b5160e"],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },

      budgetGeneralCharge:""

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
            
    ...mapGetters("bienService", ["getMandatPersonnaliserVise","getMandatPersonnaliserPersonnel","mandats"]),

       ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires",
                "gestionModules"
            ]),
            
        noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
...mapGetters('gestionMarche', ['entreprises',"secteur_activites","sanctions"]),
nbreUniteAdministratives() {

          if(this.cf){
            let colect=[];
            
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.length
        }
        return this.uniteAdministratives.length

    },
 
 montantBudgetGeneralUa() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.budgetGeneral.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0);
        }

 return this.budgetGeneral.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0);

      
    },
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.gestionModules.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  
},
  methods:{
...mapActions('parametreGenerauxAdministratif', [ 'ajouterExerciceBudgetaire',
    'supprimerExerciceBudgetaire', 'modifierExerciceBudgetaire',"EncoursExerciceBudgetaire"]),   

     
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

EncoursExerciceLocal (id) {
      this.EncoursExerciceBudgetaire(id)

    },
 formatageSomme:formatageSomme
  }
}
</script>
<style>

</style>