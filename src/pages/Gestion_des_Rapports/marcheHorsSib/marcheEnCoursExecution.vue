
<template>
    
                <div>
                        <div class="widget-content tab-content">
                    <div id="Sanit" class="tab-pane active">
                   
                    <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>test</h5>
              <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div>
            </div>
            <!-- <div class="span4">
            <br>
          Afficher
         <select name="pets" id="pet-select" v-model="size" class="span3">
            <option value="10">10</option>
            <option value="25">25</option>
           <option value="50">50</option>
       <option value="100">100</option>
      </select>
           Entrer
        </div> -->
             <table class="table table-bordered table-striped" >
                <thead>
               <tr>
                <th>LIBELLES MARCHES </th>
                  <th>Section</th>
                  <th>Unité Administrative</th>
                  <th>Montant</th>
                  <th>Date d'approbation</th>
                   <th>SITUATION A CE JOUR</th>
                  
                </tr>
                </thead>
                <tbody>
                  
                </tbody>
              </table>
              
              
                        </div>

                      
                    </div>

                

            
            </div>
       
</template>

<script>
   
  
 import { mapGetters, mapActions } from "vuex";
 
export default {
  components:{
  
  },
  name:'type facture',
  data() {
    return {
      
      formData: {
            
        
      },
        editActeEffetFinancier:{
         
        },
        formEffetFinancier:{
             
        },

      editMarche: {
           
                 
      },
      
//       editActeEffetFinancier:{
// cause_resiliation:"",
// date_resiliation:""
//       },
      indicateur_test:1,
      search: ""
    };
  },
  created() {
      console.log("INB")
      console.log(this.getterUniteAdministrativeByUser)
    console.log("INB14500")
},

  computed: {

     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral","jointureUaChapitreSection" , ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),
//    admin:admin,
//       dcf:dcf,
//       noDCfNoAdmin:noDCfNoAdmin,
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
    ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques','getterInfrastrucure']),

    ...mapGetters("horSib", ["gettersMarcheHorsib"]),

     MarcheEnCoursParEntreprise() {
      
           return this.mandats.filter(qtreel => qtreel.exercice_budget == id && qtreel.entreprise_id == id && qtreel.marche_id == id);

     
       
     
    },

  },
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),
   
    // formatageSomme:formatageSomme,
// afficherModifierMarcheHorSib(id){
// 		this.$router.push({
// 			path:"/modifier-marche-hors-sib/" + id
// 		});
// 	},
    // },
    // fonction pour vider l'input modification
   
    // partition:partition,

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
   
   

    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }

};
</script>

<style scoped>
.taillModal{
  width: 1080px;
   margin: 0 -25%;
   
}
.taillMarche{
  width: 96%;
   margin: 0 -48%;
   
}
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
</style>
