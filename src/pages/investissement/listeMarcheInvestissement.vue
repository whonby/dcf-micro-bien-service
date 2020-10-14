
<template>
    <div class="container-fluid">

         <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#marcheExecution"> Marchés en Executions <span class="badge badge" ></span></a></li>
 
                            </ul>
                        </div>
                        <div class="widget-content tab-content">


                         <div id="marcheExecution" class="tab-pane active">
                             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>March&eacute;s d'investissement en Exécution</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>



              <table class="table table-bordered table-striped" v-if="afficherMarcheInvestissementParDroitAccess.length>0">
                <thead>
                <tr>
                    <th>Année</th>
                      <th>UA</th>
                    <th>Type de marché</th>
                    <th>Mode de passation</th>
                    <th>Activité</th>
                    <th>Imputation</th>
                    <!-- <th>Ligne Budgetaire</th> -->
                    <th>Objet du marché</th>
                    <th>Référence du marché</th>
                     <!-- <th>Numero marché</th> -->
                    <th>Montant prévu</th>
                    
                    
                   <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 
                        <tr class="odd gradeX" v-for="(marche, index) in 
                afficherMarcheInvestissementParDroitAccess"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(marche.unite_administrative_id) || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherTypeMarcheLibelle(marche.type_marche_id) || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center">
                   {{marche.procedure_passation.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficheractivite(marche.activite_id) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.imputation || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objet || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.reference_marche || 'Non renseigné'}}</td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}</td>
                  
           
                   <td >
                        <router-link :to="{ name: 'ExecutionLotInvestissement', params: { id: marche.id }}"
                 class="btn btn-inverse " title="Execution du marche">
        <span class=""><i class=" icon-fast-forward"></i></span>
    </router-link>
                   </td>
               
                       </tr>
                        <tr>
                     
                      <td>
                          
                      </td>
                      
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Marché
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantMarcheInvestissement))}}
                           
                      </td>
                      
                       
                      <td>
                          
                      </td>
                      
                    </tr>
                </tbody>
              </table>

                           <!-- <div class="row-fluid vld-parent"  align="center" style="margin:10px ">
                             <loading :active="true"
                                      :can-cancel="false"
                                      :is-full-page="fullPage"></loading> -->
<!--                             <clip-loader :loading="getterLoadinMarche" :color="color" :size="size_pul"></clip-loader>-->
<!--                             <pulse-loader :loading="getterLoadinMarche" :color="color" :size="size_pul"></pulse-loader>-->
                           <!-- </div> -->

                        </div>
 
                    </div>

                </div>
            </div>
        </div>

   

    </div>
</template>

<script>
//import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
//import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
 import { mapGetters, mapActions } from "vuex";
 import { formatageSomme } from "../../../src/Repositories/Repository";
  import {admin,dcf,noDCfNoAdmin} from "../../../src/Repositories/Auth";

export default {
  name:'type facture',
  components: {
    //PulseLoader,
   // ClipLoader,

  },
  data() {
    return {
      isLoading: false,
      fullPage: false,
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }

        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      color: '#3AB982',
      height: '35px',
      width: '4px',
      margin: '2px',
      radius: '2px',
      size_pul:"20px",
    //   json_fields: {
    //     CODE: "code",
    //     libelle: "libelle"
    //   },

      formData: {
            objet:"",
            livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                type_financement:"",
                source_financement:"",
                Bénéficiaire:"",
                Nature_des_prix:"",
                unite_administrative_id:"",
                gdenature_id:"",
                activite_id:"",
                typeappel_id:"",
                exo_id:"",
        
      },
        editActeEffetFinancier:{
          date_odre_service:"",
          date_fin_exe:""
        },
        formEffetFinancier:{
             code_act:"",
             libelle_act:"",
             reference_act:"",
             objet_act:"",
             incidence_financiere:"",
             montant_act:"",
              date_attributaire:"",
             date_reception:"",
             duree:"",
             date_fin_exe:"",
             date_odre_service:"",
             livrable_id:"",
        autorite_approbation:"",
        date_approbation:"",
             text_juridique_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
             entreprise_id:"",
             //marche_id:"",
             numero_marche:""
        },

      editMarche: {
           objet:"",
           livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                type_financement:"",
                source_financement:"",
                Bénéficiaire:"",
                Nature_des_prix:"",
                unite_administrative_id:"",
                imputation:"",
                 activite_id:"",
                 exo_id:""
                 
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

     admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser",
       "typeActeEffetFinanciers","getterLoadinMarche"]),
     ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNatureInvestissement","getPersonnaliseBudgetGeneralParInvestissement",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,

  ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

loading(){
  if(this.afficherMarcheInvestissementParDroitAccess.length>0){
    return false
  }
  return true
},
// pour tous les marches en investissement
   afficherMarcheInvestissementParDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.printMarcheNonAttribue.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.parent_id == null)
           
        }
           return  this.printMarcheNonAttribue.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.parent_id == null)
       
    },



afficherMarcheInvestissementParPlanificationDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.afficheMarcheEnPlanification.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // });
        }

        return this.afficheMarcheEnPlanification
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
    },




/// afficher marche en constratualisation pour investissement
afficherMarcheInvestissementParEnContratualistationDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.afficheMarcheEnCoursContratualisation.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect;
        }

        return this.afficheMarcheEnCoursContratualisation
           
    },


    afficherMarcheInvestissementParExecutionDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.afficheMarchExecuter.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
        }

        return this.afficheMarchExecuter
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
    },


    
    afficherMarcheInvestissementParResilierDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.afficheMarcheResilier.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
        }

        return this.afficheMarcheResilier
           
    },

    
    afficherMarcheInvestissementParTerminerDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.afficheMarcheTerminer.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
        }

        return this.afficheMarcheTerminer
            
    },

afficheLeNomDesProcedureModifier(){
  if(this.afficherMontantImputation(this.ImputationBudgetModifier) == ""){
return "Aucune procedure"
  }
     else if( this.afficherMontantImputation(this.ImputationBudgetModifier) < 10000000){
        return "Procédure Simplifiée de demande de Cotation(PSC Sans comité)"
    }
    else if(this.afficherMontantImputation(this.ImputationBudgetModifier) < 30000000)
    {
return "Procédure Simplifiée de demande de Cotation(PSC Avec comité)"
    }
    else if(this.afficherMontantImputation(this.ImputationBudgetModifier) < 60000000 )
    {
return "Procédure Simplifiée à compétition Limitée(PSL)"
    }
    else if(this.afficherMontantImputation(this.ImputationBudgetModifier) < 100000000 )
    {
return "Procédure Simplifiée à compétition Ouverte(PSO)"
    }
     else if(100000000 < this.afficherMontantImputation(this.ImputationBudgetModifier))
    {
return "Appel d'Offre Ouvert(AON ou AOI)"
    }
    
  return null  


},


afficherMontantImputation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.codebudget == id);

      if (qtereel) {
        return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },
//  afficheIdTypeMarche() {
//     return this.printMarcheNonAttribue.filter(element => element.type_marche.libelle == "Prestations Intellectuelles")
//     },


nombreDejourCalcule(){
                let vM=this;
    const acteAffet = vM.editActeEffetFinancier
    if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
     if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null

       var dateF = new Date(acteAffet.date_fin_exe).getTime()
        var dateO = new Date(acteAffet.date_odre_service).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.editActeEffetFinancier.duree=diffJour
                  return  diffJour;
   
},

getDateFinExécutionValue(){
    return this.editActeEffetFinancier.date_odre_service !=""
},

recupererCodeTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_type_marche;
      }
      return 0
        }
      };
    },

//  affichierNomEntreprise() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.raison_sociale;
//       }
//       return 0
//         }
//       };
//     },


    // afficherEntrepriseRecep () {
    //             return id => {
    //                 if (id != "") {
    //                     // console.log("Marche lettre inviation marche")
    //                     return this.gettersOuverturePersonnaliser.filter(idmarche => idmarche.marche_id == id)
    //                  }
    //          }
    //         },

  
//   typePrestationFiltre()  {
     
//    const searchTerm = this.search.toLowerCase();

// return this.printMarcheNonAttribue.filter((item) => {
  
//   return item.objet.toLowerCase().includes(searchTerm) 

//    }
// )
//     },


// afficher la liste des marche

afficherLaListeDesMarcheDinvestissement(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 3 && element.parent_id == null)
},



// afficher le nombre du marché

nombreDeMarcheI(){
  return this.afficherLaListeDesMarcheDinvestissement.length;
},

// afficher le montant de tout les marche

montantMarcheInvestissement(){
  return this.afficherMarcheInvestissementParDroitAccess.reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},







   afficheMarchExecuter(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 3 && element.difference_personnel_bienService == 1)
},

// afficheMarchExecuter(){
// return this.afficheExercution.filter(element => element.indicateur_resilie != 1)
// },

afficheNombreMarchExecuter(){

  
return this.afficheMarchExecuter.length
},



 affichertypeMarcheEx() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_type_marche;
      }
      return 0
        }
      };
    },

afficheMarcheTerminer(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 5 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 3 && element.difference_personnel_bienService == 1)
},
// afficheMarcheTerminer(){
// return this.afficheMarcheSolde.filter(element => element.indicateur_resilie != 1)
// },
nombreAfficheMarcheSolde(){
return this.afficheMarcheTerminer.length
},
montantEnSolde(){
  return this.afficheMarcheTerminer.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},





// afficheParMarcheEnExecution(){
// return this.afficheExercution.filter(element => element.indicateur_resilie != 1)
// },




  afficheMarcheResilier(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 3 &&  element.difference_personnel_bienService == 1)
},



// afficheMarcheResilier(){
// return this.afficheResilier.filter(element => element.indicateur_resilie == 1)
// },





afficheNombreMarcheResilier(){
return this.afficheMarcheResilier.length
},

// afficher la liste de marche en contratualisation

afficheMarcheEnCoursContratualisation(){
return this.afficherLaListeDesMarcheDinvestissement.filter(element => element.attribue == 1 && element.type_marche.code_type_marche == 3)
},




// afficher le nombre de marche en contratualisation
 nombreDeMarcheEnContratualisation(){
   return this.afficheMarcheEnCoursContratualisation.length;

 },

// afficher le montant de marche en contratualisation
montantEnContratualisation(){
  return this.afficheMarcheEnCoursContratualisation.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},



// afficher la liste des marche en planification
afficheMarcheEnPlanification(){
return this.afficherLaListeDesMarcheDinvestissement.filter(element => element.attribue == 0 && element.type_marche.code_type_marche == 3)
},


// afficher le nombre des marches en planifications

nombreMarcheEnplanification(){
  return this.afficheMarcheEnPlanification.length;
},


// afficher le montant en planification

montantEnPlanification(){
  return this.afficheMarcheEnPlanification.reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)
},












    afficherAnneeBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exo_id;
      }
      return 0
        }
      };
    },
afficherTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

       if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },
      afficherTypeMarcheLibelle() {
       console.log("afficherTypeMarcheLibelle")
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel!=undefined) {
        console.log("afficherTypeMarcheLibelle 1")
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficherImputationMarche() {
      console.log("afficherImputationMarche")
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel!=undefined) {
        console.log("afficherImputationMarche 2")
        return qtereel.imputation;
      }
      return 0
        }
      };
    },
 afficherReferenceMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.reference_marche;
      }
      return 0
        }
      };
    },
     afficherAttributMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },
     afficherMontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_marche;
      }
      return 0
        }
      };
    },
//  afficherObjetMarche() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.marches.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.objet;
//       }
//       return 0
//         }
//       };
//     },
    // afficherNumeroMarche() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.marches.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.numero_marche;
    //   }
    //   return 0
    //     }
    //   };
    // },
// afficherEntreprise() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.raison_sociale;
//       }
//       return 0
//         }
//       };
//     },







 afficherIdUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return 0
        }
      };
    },
   
    //  afficherUniteAdministrative() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.libelle;
    //   }
    //   return 0
    //     }
    //   };
    // },
     afficherIdactivite() {
       console.log("afficherIdactivite")
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel!=undefined) {
        console.log("afficherIdactivite 3")
        return qtereel.activite_id;
      }
      return 0
        }
      };
    },
      
 afficherObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    },
    afficherNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
afficherEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    },






   
     afficherUniteAdministrative() {
       console.log("afficherUniteAdministrative")
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel!=undefined) {
        console.log("afficherUniteAdministrative 4")
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
      afficheractivite() {

      return id => {
        console.log("afficheractivite")
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel!=undefined) {
        console.log("afficheractivite 5")
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },


    procedurePassationDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.procedurePassations.filter(
            element => element.type_procedure_id == id
          );
        }
      };
    },
     activiteDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParInvestissement.filter(
            element => element.afficheUA.id == id
          );
        }
      };
    },
          afficheractiviteBienService() {
           // console.log("afficheractiviteBienService")
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParInvestissement.find(qtreel => qtreel.afficheUA.id == id);
          console.log("afficheractiviteBienService")
      if (qtereel!=undefined) {
        console.log("afficheractiviteBienService 6")
        //return qtereel.afficheActivite.code.concat('  ', qtereel.afficheActivite.libelle);
        return  null
      }
      return 0
        }
      };
    },

 afficherPlanEconomiqueBienService() {
   console.log("afficherPlanEconomiqueBienService ")
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParInvestissement.find(qtreel => qtreel.afficheUA.id == id);

      if (qtereel!=undefined) {
        console.log("afficherPlanEconomiqueBienService 7")
        return qtereel.afficheEconomique.code.concat('  ', qtereel.afficheEconomique.libelle);
      }
      return 0
        }
      };
    },





    deverouPassation() {
      return this.formData.typeappel_id == "";
    }, 
     deverouPassationModi() {
      return this.editMarche.typeappel_id == "";
    }, 
    deverouGrandNature() {
      return this.formData.unite_administrative_id == "";
    }, 
    deverouactivite() {
      return this.formData.gdenature_id == "";
    },
     deveroueconomiq() {
      return this.formData.activite_id == "";
    },
     economiqueDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParInvestissement.filter(
            element => element.ua_id == id
          );
        }
      };
    },

  grandeNatureDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParInvestissement.filter(
            element => element.ua_id == id
          );
        }
      };
    },










     ImputationBudget() {

      
      const norme = this.getPersonnaliseBudgetGeneralParInvestissement.find(normeEquipe => normeEquipe.economique_id == this.formData.economique_id);

      if (norme) {
        return norme.codebudget;
      }
      return 0
    },
     ImputationBudgetModifier() {
      
      const norme = this.getPersonnaliseBudgetGeneralParInvestissement.find(normeEquipe => normeEquipe.economique_id == this.editMarche.economique_id);

      if (norme) {
        return norme.codebudget;
      }
      return 0
    },
    nombreJourTraitementCalucle(){
   let date = new Date();
        let aaaa = date.getFullYear();
        let gg = date.getDate();
        let mm = (date.getMonth() + 1);
        let moi;
        let jour;
        if (gg < 10)
        {
            jour = "0" + gg;
        }else{
            jour = gg
        }


        if (mm < 10)
        {
            moi = "0" + mm;
        }else{
            moi=mm;
        }


        let cur_day = aaaa + "-" + moi + "-" + jour;

        return cur_day


    
    // return cur_day + " " + hours + ":" + minutes + ":" + seconds;
   },








//  afficheContrat(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => element.date_odre_service > this.nombreJourTraitementCalucle)
// },

// NombreafficheContrat(){
// return this.marches.filter(element => element.attribue == 1).length
// },
// NombreExecute(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => element.date_odre_service == this.nombreJourTraitementCalucle).length
// },
    // ImputationBudgetModif() {
      
    //   const norme = this.getPersonnaliseBudgetGeneralParInvestissement.find(normeEquipe => normeEquipe.economique_id == this.editMarche.Economique);

    //   if (norme) {
    //     return norme.codebudget;
    //   }
    //   return 0
    // },
    MontatantImputationBudget() {
      
      const norme = this.getPersonnaliseBudgetGeneral.find(normeEquipe => normeEquipe.economique_id == this.formData.Economique);

      if (norme) {
        return norme.Dotation_Initiale;
      }
      return 0
    },





sommeMarcheParMandat: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },


recupererMontantReel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
comparerMontantReelEtMandat(){
return this.marches.filter(element => {
  if(this.recupererMontantReel(element.id) == this.sommeMarcheParMandat(element.id)){

return element;


}
})

},





// sommeMarcheParMandat: function () {
//                 return id => {
//                     if (id != "") {
//                       let valInite=0;
//                         return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
//                            return total + parseFloat(currentVal.total_general)
//                         },valInite);
//                     }
//                 }
//             },


// recupererMontantReel() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

//       if (qtereel) {
//         return qtereel.montant_act;
//       }
//       return 0
//         }
//       };
//     },
    
// comparerMontantReelEtMandat(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => {
//   if(this.recupererMontantReel(element.id) == this.sommeMarcheParMandat(element.id)){

// return element;


// }
// else{
//   return ""
// }
// })

// }










  },
  
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),
      modifierModalResiliation(){
      var nouvelObjet1 = {
      ...this.editActeEffetFinancier,
      indicateur_resilie :this.indicateur_test,
        date_resiliation:this.editActeEffetFinancier.date_resiliation,
        	cause_resiliation:this.editActeEffetFinancier.cause_resiliation
       };
       
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
         marcheObjet.attribue = 3

    this.modifierMarche(marcheObjet)
     this.modifierActeEffetFinancier(nouvelObjet1)
      this.getMarche()
      this.getActeEffetFinancier()
    //   let marcheObjet=this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
    // marcheObjet.attribue = 3
    //   //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
    //  this.modifierMarche(marcheObjet)

      
      this.$('#exampleModal').modal('hide');
    },
      afficherModalMarcheResilier(index) {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editActeEffetFinancier = this.afficheMarchExecuter[index];
    },
    //afiicher modal ajouter
    afficherModalAjoutTypaPrestation() {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalTypePrestationLocal(){
      
       var nouvelObjet = {
      ...this.formData,
      imputation :this.ImputationBudget,
      exo_id : this.anneeAmort
       };
this.ajouterMarche(nouvelObjet)
this.formData = {
            objet:"",
            livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                type_financement:"",
                source_financement:"",
                Bénéficiaire:"",
                Nature_des_prix:"",
                unite_administrative_id:"",
                imputation:"",
                	activite_id:""
}

    },
    formatageSomme:formatageSomme,
    // afficher modal de modification
    afficherModalModifierTypePrestation(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editMarche = this.marches[index];
    },
    // fonction pour vider l'input modification
    modifierModalTypeprestationLocal(){
       var nouvelObjet = {
      ...this.editMarche,
      imputation :this.ImputationBudgetModifier,
      exo_id : this.anneeAmort,
      activite_id:this.editMarche.activite_id,
      economique_id:this.editMarche.economique_id
       };
      this.modifierMarche(nouvelObjet)
      this.$('#modificationModal').modal('hide');
    },
    


    // afficher modification de l'acte a effet financier

        afficherModalModifierActeEffetFinancier(index){
    this.$('#modifierActeEF').modal({
        backdrop: 'static',
        keyboard: false
    });
    this.editActeEffetFinancier = this.afficheMarchExecuter[index]
}, 

modifierModalActeEffetFinancierLocal(index){
    
    if ( confirm( "Voulez-vous basculer en Contractualisation ?") ) {
   
     this.editActeEffetFinancier = this.afficheMarchExecuter[index]
    
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
         marcheObjet.attribue = 1

    this.modifierMarcheBascule(marcheObjet)
} else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
    
     
    
},

  modifierModalActeEffetFinancierLocal2(index){
    if ( confirm( "Voulez-vous basculer en Execution ?") ) {
   
     this.editActeEffetFinancier = this.afficheMarcheEnCoursContratualisation[index]
    
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.id)
         marcheObjet.attribue = 2

    this.modifierMarcheBascule(marcheObjet)
} else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
   
   
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
