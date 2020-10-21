<template>
 
     <div>
       <h4 style="text-align:center">Module Unités d'Administratives</h4>
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
     </div>

</template>


<script>
import { mapGetters, mapActions } from "vuex";
import {formatageSomme} from '../../src/Repositories/Repository';
import {noDCfNoAdmin} from '../../src/Repositories/Auth';
import moment from "moment";
export default {
  data(){
    return{

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