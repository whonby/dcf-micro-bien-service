

<template>
  <div>
   
<!----- ajouter modal   ---->


    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div>

                                        <!-- <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="uniteAdministratives">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget général par ua</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>
            

            <div class="widget-content nopadding" v-if="uniteAdministratives.length" >
              <budgetGeneralItemComponent v-for="equipement in uniteAdministratives"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierUniteAdministrative" 
                @suppression="supprimerBudget"
                >
              </budgetGeneralItemComponent>

              <!-- <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Article</p>
              </div> -->

            
              
            </div>
          </div>
        </div>
      </div>
    </div>

<!--     
 <fab :actions="fabActions" @cache="afficherModalAjouterUniteAdministrative" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterUniteAdministrative()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  /> -->
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import budgetGeneralItemComponent from './budgetGeneralItemComponent'
import { formatageSomme } from "../../../Repositories/Repository";
export default {
  name: 'budgetgeneral',
 components: {
      budgetGeneralItemComponent
  },
  data() {
    return {
      // json_fields: {
      //       'NATURE_SECTION': 'groupe.libelle',
      //       'NUMERO_ORDRE_SECTION': 'article.code',
      //     'CODE_SECTION':'article.code_section',
      //   'LIBELLE_SECTION':'article.nom_section'
           
           
      //   },
     fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
     
      formData: {
       exercicebudget_id:"",
      gdenature_id: "",
      program_id: "",
      typeua_id: "",
      ua_id: "",
      section_id: "",
      fonctionnel_id: "",
      economique_id: "",
      Dotation_Initiale: "",
      version: "",
      	actived:1
      },
      editBudgetGeneral: {
         exercicebudget_id:"",
      gdenature_id: "",
      program_id: "",
      typeua_id: "",
      ua_id: "",
      section_id: "",
      fonctionnel_id: "",
      economique_id: "",
      Dotation_Initiale: "",
      version: "",
      actived:1
      },
       search:""
    };
  },

  computed: {
        ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral"
      // "chapitres",
      // "sections"
    ]),
    
    ...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "getterligneExempter",

            ]),

//  codeBudgetGeneralModifier(){
//       // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
//     const sectionBudget = this.sections.find(serviceg => serviceg.id == this.editBudgetGeneral.section_id)
//    const programmeBudget = this.plans_programmes.find(serviceg => serviceg.id == this.editBudgetGeneral.program_id)
//      const uaBudget = this.uniteAdministratives.find(serviceg => serviceg.id == this.editBudgetGeneral.ua_id)
//     const fonctionnelBudget = this.plans_fonctionnels.find(serviceg => serviceg.id == this.editBudgetGeneral.fonctionnel_id)
//  const economiqueBudget = this.plans_budgetaires.find(chap => chap.id == this.editBudgetGeneral.economique_id)
//      if(sectionBudget && programmeBudget && uaBudget && fonctionnelBudget && economiqueBudget){
//        return sectionBudget.code_section +"-"+ programmeBudget.code +"-"+ uaBudget.code_ua +"-"+ fonctionnelBudget.code  +"-"+ economiqueBudget.code
//      }

//      return null
//    },

afficheLeNomDesProcedureModifier(){
  if(this.editBudgetGeneral.Dotation_Initiale == ""){
return "Aucune procedure"
  }
     else if( this.editBudgetGeneral.Dotation_Initiale < 10000000){
        return "PSC Sans comité"
    }
    else if(this.editBudgetGeneral.Dotation_Initiale < 30000000)
    {
return "PSC Avec comité"
    }
    else if(this.editBudgetGeneral.Dotation_Initiale < 60000000 )
    {
return "PSL"
    }
    else if(this.editBudgetGeneral.Dotation_Initiale < 100000000 )
    {
return "PSO"
    }
     else if(100000000 < this.editBudgetGeneral.Dotation_Initiale)
    {
return "AON ou AOI"
    }
    
  return null  


},
afficheLeNomDesProcedure(){
  if(this.formData.Dotation_Initiale == ""){
return "Aucune procedure"
  }
     else if( this.formData.Dotation_Initiale < 10000000){
        return "PSC Sans comité"
    }
    else if(this.formData.Dotation_Initiale < 30000000)
    {
return "PSC Avec comité"
    }
    else if(this.formData.Dotation_Initiale < 60000000 )
    {
return "PSL"
    }
    else if(this.formData.Dotation_Initiale < 100000000 )
    {
return "PSO"
    }
     else if(100000000 <= this.formData.Dotation_Initiale)
    {
return "AON ou AOI"
    }
   
  return null  


},
statutDeLigne(){

     if(this.formData.economique_id == ""){
       return "Aucune Ligne"
     }
     else if(this.formData.economique_id == this.CodeExempte(this.formData.economique_id))
      {
        return "Ligne exemptée"
      }
      
      return "Ligne à marché"
    },
//  lesClassDe3() { 
// const isClassDe3 = (code) => code.charAt(0) != "2" && code.charAt(0) != "6"; 
// return this.derniereNivoPlanBudgetaire.filter(x => isClassDe3(x.code));
//  },

afficheActiviteParAction() {
      return id => {
        if (id != null && id != "") {
          return this.afficheNiveauActivite.filter(element => element.parent == id);
        }
      };
    },

 codeBudgetGeneralModifier(){
        // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
       const ActiviteBudget = this.afficheNiveauActivite.find(serviceg => serviceg.id == this.editBudgetGeneral.activite_id)
  //   const sectionBudget = this.sections.find(serviceg => serviceg.id == this.formData.section_id)
  //  const programmeBudget = this.plans_programmes.find(serviceg => serviceg.id == this.formData.program_id)
  //    const uaBudget = this.uniteAdministratives.find(serviceg => serviceg.id == this.formData.ua_id)
  //   const fonctionnelBudget = this.plans_fonctionnels.find(serviceg => serviceg.id == this.formData.fonctionnel_id)
 const economiqueBudget = this.plans_budgetaires.find(chap => chap.id == this.editBudgetGeneral.economique_id)
     if(ActiviteBudget && economiqueBudget){
       return ActiviteBudget.code +" "+ economiqueBudget.code
     }

     return null
   },
 codeBudgetGeneral(){
      // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
       const ActiviteBudget = this.afficheNiveauActivite.find(serviceg => serviceg.id == this.formData.activite_id)
  //   const sectionBudget = this.sections.find(serviceg => serviceg.id == this.formData.section_id)
  //  const programmeBudget = this.plans_programmes.find(serviceg => serviceg.id == this.formData.program_id)
  //    const uaBudget = this.uniteAdministratives.find(serviceg => serviceg.id == this.formData.ua_id)
  //   const fonctionnelBudget = this.plans_fonctionnels.find(serviceg => serviceg.id == this.formData.fonctionnel_id)
 const economiqueBudget = this.plans_budgetaires.find(chap => chap.id == this.formData.economique_id)
     if(ActiviteBudget && economiqueBudget){
       return ActiviteBudget.code +" "+ economiqueBudget.code
     }

     return null
   },




//     codeBudgetGeneral(){
//       // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
//     const sectionBudget = this.sections.find(serviceg => serviceg.id == this.formData.section_id)
//    const programmeBudget = this.plans_programmes.find(serviceg => serviceg.id == this.formData.program_id)
//      const uaBudget = this.uniteAdministratives.find(serviceg => serviceg.id == this.formData.ua_id)
//     const fonctionnelBudget = this.plans_fonctionnels.find(serviceg => serviceg.id == this.formData.fonctionnel_id)
//  const economiqueBudget = this.plans_budgetaires.find(chap => chap.id == this.formData.economique_id)
//      if(sectionBudget && programmeBudget && uaBudget && fonctionnelBudget && economiqueBudget){
//        return sectionBudget.code_section +"-"+ programmeBudget.code +"-"+ uaBudget.code_ua +"-"+ fonctionnelBudget.code  +"-"+ economiqueBudget.code
//      }

//      return null
//    },

    sectionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.jointureUaChapitreSection.filter(element => element.id == id);
        }
      };
    },
    
    // ActiviteDynamiques() {
    //   return id => {
    //     if (formData.action_id != null && formData.action_id != "") {
    //       return this.plans_activites.filter(element => element.children.parent == this.formData.action_id);
       
    //    }
    //   };
    // },
    uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.jointureUaChapitreSection.filter(element => element.id == id);
        }
      };
    },
anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    codeGrdeNature() {
      
      const norme = this.grandes_natures.find(normeEquipe => normeEquipe.id == this.formData.gdenature_id);

      if (norme) {
        return norme.code;
      }
      return 0
    },
    codeGrdeNaturemodif() {
      
      const norme = this.grandes_natures.find(normeEquipe => normeEquipe.id == this.editBudgetGeneral.gdenature_id);

      if (norme) {
        return norme.code;
      }
      return 0
    },
// alertMessage() {
//       const typeUniteA = this.getPersonnaliseBudgetGeneral.find(typeUa=> typeUa.afficheUA.id == this.formData.ua_id);

//       if (typeUniteA) {
//         return typeUniteA.exercicebudget_id;
        
//       }
//       return 0
//     },
 Codeeconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
    CodeExempte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterligneExempter.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },
    
  },


  
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllBudgetGeneral",
      "ajouterBudgetGeneral",
      "modifierBudgetGeneral",
      "supprimerBudgetGeneral",
      // "ajouterHistoriqueBudgetGeneral"
    ]),
 formatageSomme: formatageSomme,
    afficherModalAjouterUniteAdministrative() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
      
//       if (this.formData.exercicebudget_id == this.alertMessage){
// alertMessage("fffffffffffff")
//       }
//       else
//       {
var nouvelObjet = {
      ...this.formData,
       exercicebudget_id: this.anneeAmort,
       codebudget : this.codeBudgetGeneral,
       testgdenature:this.codeGrdeNature,
       type_procedure:this.afficheLeNomDesProcedure
      
       };
      this.ajouterBudgetGeneral(nouvelObjet);
// this.ajouterHistoriqueBudgetGeneral(nouvelObjet);
      this.formData = {
        exercicebudget_id:"",
      gdenature_id: "",
      program_id: "",
      typeua_id: "",
      ua_id: "",
      section_id: "",
      fonctionnel_id: "",
      economique_id: "",
      Dotation_Initiale: "",
      version: "",
      codebudget : ""
      };
      // }
     
    },
    
     supprimerBudget(id){
      this.supprimerBudgetGeneral(id)
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
       var nouvelObjet = {
      ...this.editBudgetGeneral,
       exercicebudget_id: this.anneeAmort,
       codebudget : this.codeBudgetGeneralModifier,
        testgdenature:this.codeGrdeNaturemodif,
       type_procedure:this.afficheLeNomDesProcedureModifier
       };
      this.modifierBudgetGeneral(nouvelObjet);
this.$("#modificationModal").modal('hide');
      // this.editUniteAdministrative = {
      //   code: "",
      //   libelle: "",
      //   section_id: "",
      //   localisationgeo_id: ""
      // };
    },
    // afficher modal de modification
    afficherModalModifierUniteAdministrative(articles) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBudgetGeneral = articles;
    },
    alert() {
      console.log("ok");
    },

    // formaterDate(date) {
    //   return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    // },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style scoped>

.tailgrand12{
  width: 95%;
  margin: 0 -47%;
}

</style>