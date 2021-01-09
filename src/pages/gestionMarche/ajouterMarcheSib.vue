
<template>

   <div>
      <div align="center" style="margin-">
        <h3> Marchés /Contrats</h3>
      </div><br>
    <div class="">
        <table class="table table-bordered table-striped">
            <tr>
            <td>
                  <div class="control-group">
                     <label class="control-label">Année Budgétaire </label>
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
                <!-- <div class="" align="left">
                        Selectionner UA:
                        <model-list-select style="background-color: rgb(255,255,255);"
                          class="wide"
                          :list="groupeUaPourMarheHorSib"
                          v-model="search"
                          option-value="id"
                          option-text="uniteadministrative_id"
                          :search-change="recherche()"
                          placeholder="Selectionner l'unité adminstrative"
                        >

                        </model-list-select>
                       
                      
                    </div> -->
               <div class="control-group">
            <label class="control-label" title="unite administrative">UA</label>
            <div class="controls" >
            <select v-model="formData.unite_administrative_id" class="span8">
               <option v-for="plans in groupUa" :key="plans[0].id" 
               :value="plans[0].ua_id">{{afficherLibelleUniteAdministrative(plans[0].ua_id)}}</option>
           </select>
            </div>
          </div>

              </td>
               <td colspan="">
                 <div class="control-group">
            <label class="control-label">Référence du marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.reference_marche"
                class="span3"
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
              <td>
                <div class="control-group">
                  <label class="control-label">Grande Nature</label>
                  <div class="controls">
                    <!-- <select v-model="formData.gdenature_id" :readOnly="deverouGrandNature" class="sapn5">
                      <option
                        v-for="gdeNature in groupgranNature"
                        :key="gdeNature[0].id"
                        :value="gdeNature[0].afficheGdeNature.id"
                      >{{gdeNature[0].afficheGdeNature.libelle}}</option>
                 é   </select> -->

                     <select v-model="formData.gdenature_id"  class="span4">
               <option v-for="plans in grandes_natures" :key="plans.id" 
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
                class="span7" rows="2"
                placeholder="Saisir le texte"
              ></textarea>
            </div>
          </div>
              </td>
              
            </tr>
            <tr>
                 
            </tr>

             <tr>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
                   
                      <select v-model="formData.economique_id" :readOnly="deverouileEco" class="span4">
                    <option
                        v-for="eco in ligneBudgeteyuy(formData.unite_administrative_id)"
                        :key="eco.economique_id"
                        :value="eco.economique_id"
                      >{{afficherPlanEconomique(eco.economique_id)}}</option>
                    </select>
                  </div>
                   
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Activité</label>
                  <div class="controls">
                    <select v-model="formData.activite_id"  class="span4">
                         <option
                        v-for="activite in activiteDynamiques(formData.economique_id)" :readOnly="deverouilleAct"
                        :key="activite.activite_id"
                        :value="activite.activite_id"
                      >{{afficherLesActivite(activite.activite_id)}}</option>
                     <!-- <option
                        v-for="activite in activiteDynamiques(formData.economique_id) :readOnly="deverouilleAct"
                        :key="activite.activite_id"
                        :value="activite.activite_id"
                      >{{afficherLesActivite(activite.activite_id)}}</option> -->
                    </select>
                    
                  </div>
                   
                </div>
              </td>
          <td>
            <div class="control-group">
       <label class="control-label">Imputation Budgétaire</label>
       <div class="controls">
         <input
           type="text"
           :value="ImputationBudget"
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
       <select v-model="formData.type_financement" class="span3">
          <option v-for="plans in types_financements" :key="plans.id" 
          :value="plans.id">{{plans.libelle}}</option>
      </select>
       </div>
     </div>
         </td>
    
    
             </tr>
             <tr>
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
              <td colspan="2">
            <div class="control-group">
       <label class="control-label">Montant prévu</label>
       <div class="controls">
         <input
           type="number"
           v-model="formData.montant_marche"
           class="span4" />
       </div>
     </div>
         </td>

           <!-- <td>
     <div class="control-group">
      <label class="control-label">Livrable</label>
      <div class="controls">
     <input
       type="text"
       v-model="formData.livrable"
       class="span3"
       placeholder="Saisir le livrable"
     />
   </div>
   </div>
     </td> -->
             </tr>

              <tr>
           
            <td colspan="">
              
               <div class="control-group">
            <label class="control-label">Nature des prix</label>
            <div class="controls">
            
               <select v-model="formData.nature_prix_id" class="span4" >
               <option v-for="plans in Nature_des_prix" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>  
       
         <td colspan="">
              
               <div class="control-group">
            <label class="control-label">Motif de passation</label>
            <div class="controls">
            
               <select v-model="formData.motif_passation_id" class="span4" >
               <option v-for="plans in motif_passation" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>  
          <td colspan="2">
                  <div class="control-group">
       <label class="control-label">Infrastructure</label>
       <div class="controls">
       
               <select v-model="formData.infrastructure_id" class="span6" >
               <option v-for="plans in getterInfrastrucure" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
      
       </div>
     </div>
            </td>
                <!-- <td>
                  <div class="control-group">
       <label class="control-label">Departement</label>
       <div class="controls">
        
               <select v-model="formData.departement_id" class="span3" :readOnly="deveroiullage">
               <option v-for="plans in recupererParentId(formData.localisation_geographie_id)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
      
       </div>
     </div>
         </td> -->
              </tr>
              
            

              
          </table>
           <div class="modal-footer">
                <a
                        
                        class="btn btn-primary"
                        href="#"
                        @click.prevent="ajouterMarcheHorSibLocal"
                >Enregistrer</a>
                <a data-dismiss="modal" class="btn" @click.prevent="allerPageMarcheHorsib" href="#">Fermer</a>
            </div>
 </div>
     
   
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications/>
    
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
 //import { formatageSomme } from "../../../src/Repositories/Repository";
 import {admin,dcf,noDCfNoAdmin} from '../../../src/Repositories/Auth';
// import {  ModelListSelect } from 'vue-search-select'
// import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  name:'type facture',

  components:{
            // bailleurAjouter,
            
            //ModelListSelect,
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
      // latitude:"",
      // departement_id:"",
      // sous_prefecture_id:"",
      // longitude:"",
      // localisation_geographie_id:"",
      libelle_procedure:"",
        type_financement:"",
        source_financement:"",
            objet:"",
            economique_id:"",
            procedure_passation_id:"",
            nature_prix_id:"",
            motif_passation_id:"",
            infrastructure_id:"",
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
                sib:0
        
      },
        formDossierCadidature:{
          libelle:""
        },
       

      
      
//       editActeEffetFinancier:{
// cause_resiliation:"",
// date_resiliation:""
//       },
     // indicateur_test:1,
      search: ""
    };
  },
  computed: {
     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',"gettersMotifPassations",
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupeUaPourMarheHorSib" ,"budgetEclate","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral","getPersonnaliseTransfert" ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite',""]),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques','getterInfrastrucure']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
  ...mapGetters('parametreGenerauxFonctionnelle', ['Nature_des_prix','motif_passation']),
  

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
 deverouileEco() {
      return this.formData.unite_administrative_id =="";
    },
    deverouilleAct(){
      return this.formData.economique_id=="";
    },
     afficherPlanEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
        
      };
    },
    

    ligneBudgeteyuy() {
     return id => {
        if (id != null && id != "") {
            console.log(id)
            console.log(".........")
          return this.budgetGeneral.filter(
            element =>{
                if( element.ua_id == id  && element.exercicebudget_id ==2021 && element.actived==1){
                    return element
                }
            }
          );
        }
      };
    },
     activiteDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.budgetGeneral.filter(
            element => element.economique_id == id && element.ua_id == this.formData.unite_administrative_id
          );
        }
      };
    },
     afficherLesActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },

ImputationBudget() {

      const norme = this.budgetGeneral.find(normeEquipe => normeEquipe.economique_id == this.formData.economique_id && normeEquipe.activite_id == this.formData.activite_id && normeEquipe.status == 'actu');
     

      if (norme) {
        return norme.codebudget;
      }
      return 0
    },

// ImputationBudget() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.budgetGeneral.find(qtreel => qtreel.eco.economique_id == id);

//       if (qtereel) {
//         return qtereel.codebudget;
//       }
//       return 0
//         }
//       };
//     },
   
   /// recuperation de UA qui a au moins effectué un transfert

  listeTableuaUa(){
    let UAItem=[];
    this.UAItem.foreach(function(value){
      let objet2=this.getPersonnaliseTransfert.find(item => item.UAItem==value.id)
      if(objet2!=undefined){
        UAItem.push(value)
        console.log(UAItem)
      }
    })
    return UAItem;
  },
  
    
    // afficherLibelle unite administrative

    afficherLibelleUniteAdministrative(){
      return id =>{
        if(id!=null && id!=""){
          let objet = this.uniteAdministratives.find(item => item.id==id)
          if(objet){
            return objet.libelle
          }
          return null
        }
      }
    },

// recuperer la tailler du getter structure localisation
recupererLataille(){
  return this.structures_geographiques.length-2
},

// 
afficherCodeStructure(){
      return id =>{
        if(id!=null && id!=""){
          let objet = this.structures_geographiques.find(item => item.id==id )
          if(objet){
            return objet.niveau
          }
          return null
        }
      }
    },
// recuperation parent id
recupererParentId(){
  return id =>{
    if(id!=null && id!=""){
      return this.localisations_geographiques.filter(item => item.parent==id)
    }
  }
}, 

    afficherCodeStructureLibelle(){
      return id =>{
        if(id!=null && id!=""){
          return this.localisations_geographiques.filter(item => this.afficherCodeStructure(item.structure_localisation_geographique_id)==id)
          
          
        }
      }
    },
    deveroiullage(){
      return this.formData.localisation_geographie_id=="";
    },
    deveroiullageSousprefecture(){
      return this.formData.departement_id=="";
    },
    recupererLatailleDepartement(){
  return this.structures_geographiques.length-1
},

   recupererLatailleSousPrefecture(){
  return this.structures_geographiques.length
},
    

 //reucperation annee budgetaire dynamique
   anneeBugetaire(){
     const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.encours == 1 );
     if(anneBudget){
       return anneBudget.annee;
     }
     return 0
   },
   

  },
  methods: {
    ...mapActions("horSib", ['ajouterMarcheHorSib','modifierMarcheHorSib','supprimerMarcheHorSib',
     
    ]),
    allerPageMarcheHorsib(){
       this.$router.push({
          name:'listeMarche'  
           })
    },
     recherche() {
              // console.log(this.search)
                let entre=this.budgetEclate.find(item=>item.id==this.search);
                if (entre!=undefined){
                    if(this.search!=""){
                        //this.formDossierCadidature.code=entre.code
                        this.formDossierCadidature.uniteadministrative_id=entre.uniteadministrative_id
                       
                    }
                }
            },


            // ajouter marche hors sib

            ajouterMarcheHorSibLocal(){
               this.$router.push({
                 name:'listeMarche'  
               })
              var nouvelObjet = {
                ...this.formData,
               exo_id:this.anneeBugetaire,
               imputation:this.ImputationBudget
              }
             this.ajouterMarcheHorSib(nouvelObjet) 
              this.formData ={
      //       latitude:"",
      // longitude:"",
      // localisation_geographie_id:"",
      infrastructure_id:"",
      libelle_procedure:"",
        type_financement:"",
        source_financement:"",
            objet:"",
            economique_id:"",
            procedure_passation_id:"",
            motif_passation_id:"",
            nature_prix_id:"",
            beneficiaire:"",
            livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                	unite_administrative_id:"",
               // gdenature_id:"",
                activite_id:"",
               // typeappel_id:"",
                exo_id:"",
                sib:0
              }
            }
   
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
