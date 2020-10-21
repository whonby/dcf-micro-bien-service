<template>
 
     <div>
       <h4 style="text-align:center">Module Paramétre Généraux</h4>
       <br>
       <br>
       <br>
       <br>
       <div class="row-fluid">
       
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>ANNEE EN COURS</h5>
          </div>
          <div class="widget-content"> 
            <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{ExerciceEnCours}}</h1>
            
            </div>
        </div>
      </div>
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>EXERCICES BUDGETAIRES </h5>
          </div>
          <div class="widget-content"> 
             <table class="table table-bordered table-striped" id="exercice_budgetaire">
              <thead>
                <tr>
                  <th>Année</th>
                  <th>Date début</th>
                  <th>Date fin</th>
                  
                  <th>En cours</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="exercice_budgetaire in exercices_budgetaires" :key="exercice_budgetaire.id">
                  <template v-if="!exercice_budgetaire.encours">
                         <td>
                    {{exercice_budgetaire.annee || 'Non renseigné'}}</td>
                  <td>
                    {{formaterDate(exercice_budgetaire.date_debut) || 'Non renseigné'}}</td>
                  <td>
                    {{formaterDate(exercice_budgetaire.date_fin) || 'Non renseigné'}}</td>

                  </template>



                    <template v-else>
                         <td>
                    {{exercice_budgetaire.annee || 'Non renseigné'}}</td>
                  <td>
                    {{formaterDate(exercice_budgetaire.date_debut) || 'Non renseigné'}}</td>
                  <td>
                    {{formaterDate(exercice_budgetaire.date_fin) || 'Non renseigné'}}</td>
                  <!-- <td>{{exercice_budgetaire.encours ? 'Oui' : 'Non'}}</td> -->
                  
                  </template>
                   <td>
                     <button  @click.prevent="EncoursExerciceLocal(exercice_budgetaire.id)"
                      v-if="exercice_budgetaire.encours == 1"  class="btn  btn-success">
                <span >Oui</span>
       
                </button>
                   <button v-else @click.prevent="EncoursExerciceLocal(exercice_budgetaire.id) " class="btn  btn-danger" >
              
                <span >Non</span>
                </button>
                   </td>
                  
                </tr>
              </tbody>
            </table>
            </div>
        </div>
      </div>
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5>ENTREPRISES ENREGISTREES</h5>
          </div>
           <div class="widget-content"> 
            <h1 style="text-align:center;color:red;font-size:50px;padding:6% 6%">{{nbreEntreprise}}</h1>
            
            </div>
        </div>
      </div>
    </div>
    
    <div class="row-fluid">
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
    </div>
     </div>

</template>


<script>
import { mapGetters, mapActions } from "vuex";
import {formatageSomme} from '../../Repositories/Repository';
import {noDCfNoAdmin} from '../../Repositories/Auth';
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

ExerciceEnCours() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return "EXERCICE NON ACTIVE"
    },
nbreEntreprise(){
return this.entreprises.length;
},
EntrepriseNonSantionner() {
              
                return this.entreprises.filter(idm=>idm.active===1).length

            },
            EntrepriseSantionner() {
                
                return this.entreprises.filter(idm=>idm.active===0).length

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