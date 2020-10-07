
<template>

   <div>
      <div class="left" style="margin-">
        <h3>Ajouter Marché hors sib</h3>
      </div>
    <div class="">
        <table class="table table-bordered table-striped">
            <tr>
            <td>
                  <div class="control-group">
                     <label class="control-label">Année Budgétaire</label>
                    <div class="controls ">
                            
                     <input
                type="text"
                :value="anneeBugetaire"
                class="span4"
               readonly
              />
               </div>
               </div>
              </td>
              <td colspan="2">
                <div class="" align="left">
                        Selectionner UA:
                        <model-list-select style="background-color: rgb(255,255,255);"
                          class="wide"
                          :list="afficherParUAEnfonctiondesRole"
                          v-model="search"
                          option-value="id"
                          option-text="libelle"
                          :search-change="recherche()"
                          placeholder="Selectionner l'unité adminstrative"
                        >

                        </model-list-select>
                       
                       <!-- <input type="text" placeholder="Recherche ..." v-on:keyup="recherche" class="span6" v-model="search">-->
                    </div>
               <!-- <div class="control-group">
            <label class="control-label" title="unite administrative">UA</label>
            <div class="controls">
            <select v-model="formData.unite_administrative_id" class="span4">
               <option v-for="plans in afficherParUAEnfonctiondesRole" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div> -->
              </td>

               <td colspan="">
                 <div class="control-group">
            <label class="control-label">Référence du marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.reference_marche"
                class="span4"
                placeholder="Saisir la référence du marché"
              />
            </div>
          </div>
              </td>
            </tr>
            <tr>
               <td colspan="">
                <div class="control-group">
            <label class="control-label">Type de marché </label>
            <div class="controls">
            <select v-model="formData.type_marche_id" class="span4">
               <option v-for="plans in typeMarches" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>

               <td colspan="2">
               <div class="control-group">
            <label class="control-label">Objet marché / contrat</label>
            <div class="controls">
              <textarea
               
                v-model="formData.objet"
                class="span8" rows="3"
                placeholder="Saisir le texte"
              ></textarea>
            </div>
          </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
                    <select v-model="formData.economique_id"  class="span4">
                    <!-- <option
                        v-for="eco in ligneBudgeteyuy(formData.unite_administrative_id)"
                        :key="eco.economique_id"
                        :value="eco.economique_id"
                      >{{afficherPlanEconomique(eco.economique_id)}}</option> -->
                    </select>
                  </div>
                   
                </div>
              </td>
            </tr>
            <tr>
              
              
              

              
            </tr>

             <tr>
          <td>
            <div class="control-group">
       <label class="control-label">Imputation Budgétaire</label>
       <div class="controls">
         <input
           type="text"
           
           class="span4"
           placeholder="Saisir le Imputation"
           readonly
         />
       </div>
     </div>
         </td>
          <td colspan="">
         
          <div class="control-group">
       <label class="control-label">Type de financement</label>
       <div class="controls">
         <!-- <input
           type="text"
           v-model="formData.type_financement"
           class="span4"
          
           readonly
         /> -->
       <select v-model="formData.type_financement" class="span4">
          <option v-for="plans in types_financements" :key="plans.id" 
          :value="plans.id">{{plans.libelle}}</option>
      </select>
       </div>
     </div>
         </td>
         <td colspan="">
         
          <div class="control-group">
       <label class="control-label">Source de financement</label>
       <div class="controls">
         <!-- <input
           type="text"
           v-model="formData.source_financement"
           class="span4"
           
           readonly
         /> -->
       <select v-model="formData.source_financement" class="span4">
          <option v-for="plans in sources_financements" :key="plans.id" 
          :value="plans.id">{{plans.libelle}}</option>
      </select>
       </div>
     </div>
         </td>

           <td colspan="">
              
               <div class="control-group">
            <label class="control-label">Procédure Passation</label>
            <div class="controls">
            
               <select v-model="formData.procedure_passation_id" class="span4" >
               <option v-for="plans in procedurePassations" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
             </tr>

              <tr>
           <td>
            <div class="control-group">
       <label class="control-label">Montant prévu</label>
       <div class="controls">
         <input
           type="text"
           v-model="formData.montant_marche"
           class="span4" />
       </div>
     </div>
         </td>

           <td>
     <div class="control-group">
      <label class="control-label">Livrable</label>
      <div class="controls">
     <input
       type="text"
       v-model="formData.livrable"
       class="span4"
       placeholder="Saisir le livrable"
     />
   </div>
   </div>
     </td>
            <td>
      <div class="control-group">
        <label class="control-label">Nature des prix</label>
        <div class="controls">
       <input
         type="text"
         v-model="formData.nature_prix"
         class="span4"
       />
     </div>
     </div>
      </td>   
       
           <td>
          <div class="control-group">
       <label class="control-label">Bénéficiaire</label>
       <div class="controls">
         <input
           type="text"
           v-model="formData.Bénéficiaire"
           class="span4"
           placeholder="Saisir Bénéficiaire"
         />
       </div>
     </div>
         </td>
              </tr>
              
              <tr>
                <td colspan="2">
                  <div class="control-group">
       <label class="control-label">localisation géographique</label>
       <div class="controls">
         <!-- <input
           type="text"
           v-model="formData.source_financement"
           class="span4"
           
           readonly
         /> -->
         <!-- <select v-model="formData.localisation_geographie_id" class="span4">
                                <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
              </select> -->
               <select v-model="formData.localisation_geographie_id" class="span6" >
               <option v-for="plans in localisations_geographiques" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
      
       </div>
     </div>
         </td>
           <td>
            <div class="control-group">
       <label class="control-label">Longitude</label>
       <div class="controls">
         <input
           type="text"
           v-model="formData.logitude"
           class="span4" />
       </div>
     </div>
         </td>

           <td>
     <div class="control-group">
      <label class="control-label">Latitude</label>
      <div class="controls">
     <input
       type="text"
       v-model="formData.latitude"
       class="span4"
       placeholder=""
     />
   </div>
   </div>
     </td>
       
      
              </tr>

              
          </table>
           <div class="modal-footer">
                <a
                        
                        class="btn btn-primary"
                        href="#"

                >Enregistrer</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
 </div>
     

    

   
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
    
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
 //import { formatageSomme } from "../../../src/Repositories/Repository";
 import {admin,dcf,noDCfNoAdmin} from '../../../Repositories/Auth';
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  name:'type facture',

  components:{
            // bailleurAjouter,
            
            ModelListSelect,
        },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        },

        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
    //   json_fields: {
    //     CODE: "code",
    //     libelle: "libelle"
    //   },

    formData: {
      latitude:"",
      logitude:"",
      localisation_geographie_id:"",
      libelle_procedure:"",
        type_financement:"",
        source_financement:"",
            objet:"",
            economique_id:"",
            procedure_passation_id:"",
            beneficiaire:"",
            livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                unite_administrative_id:"",
                gdenature_id:"",
                activite_id:"",
               // typeappel_id:"",
                exo_id:"",
                mvtmarche:1
        
      },
        formDossierCadidature:{
          libelle:""
        },
       

      editMarche: {
           objet:"",
           livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                unite_administrative_id:"",
                imputation:"",
                 activite_id:"",
                 exo_id:"",
                 libelle_procedure:"",
        type_financement:"",
        source_financement:"",
            
            economique_id:"",
            procedure_passation_id:"",
            beneficiaire:"",
          
                gdenature_id:"",
                
               // typeappel_id:"",
               
                mvtmarche:1
      },
      
//       editActeEffetFinancier:{
// cause_resiliation:"",
// date_resiliation:""
//       },
      indicateur_test:1,
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
  

  ...mapGetters("Utilisateurs", ["user","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

     admin:admin,
     dcf:dcf,
     noDCfNoAdmin:noDCfNoAdmin,

     afficherParUAEnfonctiondesRole() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
             return colect;
            
        }

        else{
 return this.uniteAdministratives
        }
       
          
        

    },

    AffichierElementParent() {
      
      return id => {
        if (id != null && id != "") {
          return this.localisations_geographiques.filter(element => element.parent == id);
        }
      };
    },
    affichierIdActeFinancierDansActePlan() {
      const qtereel = this.localisations_geographiques.find(
        qtreel => qtreel.code == "02",
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

 //reucperation annee budgetaire dynamique
   anneeBugetaire(){
     const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.encours == 1 );
     if(anneBudget){
       return anneBudget.annee;
     }
     return 0
   },
    //  afficherAnneeBudget() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.marches.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.exo_id;
    //   }
    //   return 0
    //     }
    //   };
    // },

  },
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),

     recherche() {
              // console.log(this.search)
                let entre=this.afficherParUAEnfonctiondesRole.find(item=>item.id==this.search);
                if (entre!=undefined){
                    if(this.search!=""){
                        //this.formDossierCadidature.code=entre.code
                        this.formDossierCadidature.libelle=entre.libelle
                       
                    }
                }
            },
    
  }

};
</script>

<style scoped>
.taillModal{
  width: 1080px;
   margin: 0 -25%;
   
}
/* {
  width: 96%;
   margin: 0 -48%;
   
} */
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
</style>
