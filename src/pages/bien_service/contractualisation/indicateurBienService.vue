
<template>
  <div>
  
  
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
       <!-- <h4 v-if="marcheDetail(marcheid)" >Detail Marche : {{marcheDetail(marcheid).objet}} 
          <button class="btn btn-success btn-large" v-if="marcheDetail(marcheid).attribue==1">Marché attribué</button>
       </h4> -->
           
      <hr />
     
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Types équipements"
            :data="filtre_equipement"
            name="Liste des types équipements"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
         
          <div class="widget-box">
                <table>
                    <tr>
            <td>
                  <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls ">
                            
                          <select v-model="budgetaire" class="span">
                              <option></option>
               <option v-for="exo in exercices_budgetaires" :key="exo.id" :value="exo.annee">{{exo.annee}}</option>
           </select>
                                </div>
                                </div>
              </td>
              <!-- <td>
                  <div class="control-group">
                                <label class="control-label" >Type marche</label>
                                <div class="controls ">
                            
                            <select v-model="typemarche" class="span3" >
               <option ></option>
               <option v-for="typePas in typeMarches" :key="typePas.id"   :value="typePas.libelle">{{typePas.libelle}}</option>
           </select>
                                </div>
                                </div>
              </td> -->
              <!-- <td>
                  <div class="control-group">
                                <label class="control-label" >Procedure passation</label>
                                <div class="controls ">
                            
                           <select v-model="Procedure" class="span3"  >
               <option></option>
               <option  v-for="propass in procedurePassations" :key="propass.id" :value="propass.libelle">{{propass.libelle}}</option>
           </select>
                                </div>
                                </div>
              </td> -->
               <td>
                  <div class="control-group">
                                <label class="control-label" >Fournisseur</label>
                                <div class="controls ">
                            
                             <select v-model="entreprise" class="span3"  >
               <option></option>
               <option  v-for="entrep in entreprises" :value="entrep.raison_sociale" :key="entrep.id">{{entrep.raison_sociale}}</option>
           </select>
                                </div>
                                </div>
              </td>
              <td>
                  <div class="control-group">
                                <label class="control-label" >Section</label>
                                <div class="controls ">
                            
                             <select v-model="section" class="span4" >
               <option></option>
               <option  v-for="entrep in sections" :value="entrep.nom_section" :key="entrep.id">{{entrep.nom_section}}</option>
           </select>
                                </div>
                                </div>
              </td>
                  </tr>
                      
                   </table>
                   
                   <div class="quick-actions_homepage " >
                       <br/>
                    
              <ul class="quick-actions">
                
                 <li class="bg_lb" title="MONTANT REEL MARCHE">
          <a href="#">
            <i class="icon-th-large"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(montantTotalMarcheReel))}}</span> MONTANT GLOBAL MARCHE REEL
          </a>
        </li> 
         <li class="bg_lg" title="MONTANT REEL PAR SECTION">
          <a href="#" >
            <i class=" icon-list-alt"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(montantMantant(this.section)))}}</span>{{nomSection(this.section)}}
          </a>
        </li>
         <li class="bg_ly" title="MONTANT FACTURE PAR SECTION">
          <a href="#">
            <i class=" icon-list-alt"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(sommeFactureParSection(this.section)))}}</span> Mt FACTURE PAR SECTION
          </a>
        </li> 
        <li class="bg_lg" title="MONTANT PAR ANNEE">
          <a href="#">
            <i class="icon-th"></i>
            <span class="label label-warning">{{formatageSomme(parseFloat(montantParAnnee(this.budgetaire)))}}</span>MONTANT PAR ANNEE
          </a>
        </li>
         <!-- <li class="bg_lg" title="Taux QUANTITE NON COUVERTE">
          <a href="#">
            <i class="icon-th"></i>
            <span class="label label-warning"></span>TAUX QTE NON COUVERTE
          </a>
        </li>
         <li class="bg_lg" title="Taux QUANTITE NON COUVERTE">
          <a href="#">
            <i class="icon-th"></i>
            <span class="label label-warning"></span>TAUX QTE NON COUVERTE
          </a>
        </li> -->
              </ul>
            </div>
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>INDICATEURS BIENS SERVICES</h5>
              <!-- <div align="right">
               <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste type texte"
            :data="rechercheMarcheSuivie"
            name="Recherche"
            worksheet="Recherche"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
            
                <thead>
                  <tr>
                    <th>Année</th>
                      <th>N°marché</th>
                        <th>Objet marché</th>
                      <th>Type marché</th>
                      <th>Procedure passation</th>
                       <th>Section</th>
                    <th>Fournisseur</th>
                      <th>Montant Réel</th>
                  
                    <th title="montant facturé">Mont.facturé</th>
                    <th>Solde</th>
                      <th>%payé</th>
                    
                  
                    
                  
                  </tr>
                </thead>
                <tbody >
                   <tr class="odd gradeX" v-for="type in rechercheMarcheSuivie" :key="type.id">
                   <td
                     
                    >{{type.exercice_budget || 'Non renseigné'}}</td>
                    <td
                     
                    >{{type.affichierObjetMarche.numero_marche || 'Non renseigné'}}</td>
                     <td
                     
                    >{{type.affichierObjetMarche.objet || 'Non renseigné'}}</td>
 <td
                     
                    >{{type.affichierObjetMarche.type_marche.libelle || 'Non renseigné'}}</td>
                    <td
                     
                    >{{type.affichierObjetMarche.procedure_passation.libelle || 'Non renseigné'}}</td>
                    <td
                     
                    >{{type.affichierSection.nom_section || 'Non renseigné'}}</td>
                    <td
                     
                    >{{type.nom_entreprise || 'Non renseigné'}}</td>
                     <td
                     
                    >{{formatageSomme(parseFloat(afficheMontantReelMarche(type.marche_id)))|| '0'}}</td>
                    <td
                     
                    >{{formatageSomme(parseFloat(sommeEgagementMandatParMarche(type.marche_id))) || '0'}}</td>
                   
                    <td
                     
                    >{{formatageSomme(parseFloat(afficheMontantReelMarche(type.marche_id)) - type.total_general) || '0'}}</td>
                     <td
                     
                    >{{(sommeEgagementMandatParMarche(type.marche_id) / (afficheMontantReelMarche(type.marche_id)) * 100).toFixed(2)|| '0'}}%</td>
                   
                  </tr>
                   <!-- <tr >
                   <td
                     
                    ></td>
                    <td
                     
                    ></td>
                     <td
                     
                    ></td>
 <td
                     
                    ></td>
                    <td
                     
                    ></td>
                    <td
                     
                    ></td>
                    <td
                     style="text-align: center;color:red;font-weight:bold;"
                    >Total Réel</td>
                     <td
                      style="text-align: center;color:red;font-weight:bold;"
                    >{{formatageSomme(parseFloat(montantMantant(this.section)))|| '0'}}</td>
                    <td
                     
                    ></td>
                   
                    <td
                     
                    ></td>
                     <td
                     
                    ></td>
                   
                  </tr> -->
                </tbody>
              </table>
              
            </div>
          </div>
       
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjoutTypaPrestation" main-icon="apps" bg-color="green"></fab> -->
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjoutTypaPrestation()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
 import { mapGetters} from "vuex";
 import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
  name:'',
  data() {
    return {
      fabActions: [
        {
          // name: "cache",
          // icon: "add"
        }

      
      ],
//       json_fields: {
//         ANNEE: "exercice_budget",
//         NUMERO_MARCHE:"affichierObjetMarche.numero_marche",
//         OBJET_MARCHE:"affichierObjetMarche.objet" ,
//         TYPE_MARCHE: "affichierObjetMarche.type_marche.libelle",
//         PROCEDURE_PASSATION:"affichierObjetMarche.procedure_passation.libelle",
//         FOURNISSEUR:nom_entreprise,
// MONTANT_REEL:"formatageSomme(parseFloat(afficheMontantReelMarche(type.marche_id)))",
// MONTANT_FACTURE:"formatageSomme(parseFloat(sommeEgagementMandatParMarche(type.marche_id)))",
// SOLDE:"formatageSomme(parseFloat(afficheMontantReelMarche(type.marche_id)) - type.total_general)",
// TAUX_FACTURE:"{{(sommeEgagementMandatParMarche(type.marche_id) / (afficheMontantReelMarche(type.marche_id)) * 100).toFixed(2)"

//       },
         typemarche:"",
         entreprise:"",
      Procedure:"",
      budgetaire :"",
      search: "",
      section:""
    };
  },

  computed: {
      ...mapGetters("bienService", ['getMandatPersonnaliserViseTableauBord','acteEffetFinanciers','marches','typeMarches', 'getMarchePersonnaliser',
     "montantMarche", "printMarcheNonAttribue","procedurePassations","typeTypeProcedures","montantMarcheReel"]),

     ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires','sections']),
...mapGetters('gestionMarche', ['entreprises']),

activeTypeMarche() {
      return this.budgetaire != "";
    },

activeProcedurePass() {
      return this.typemarche != "";
    },
activeEntreprise() {
      return this.Procedure != "";
    },
    activeSection() {
      return this.entreprise != "";
    },
   nomSection(){
  return section =>{
    if(section !=""){
      var ObjetUA = this.sections.find(element => element.nom_section == this.section)
      return ObjetUA.nom_section
    }
  }
    },
rechercheMarcheSuivie(){
      if(this.budgetaire != "" &&  this.section != ""){
         
          return this.getMandatPersonnaliserViseTableauBord.filter(item =>{
              if(item.exercice_budget == this.budgetaire   && item.affichierSection.nom_section == this.section){
                  return item
              }
            
          })
        
      }
      
    
      return this.getMandatPersonnaliserViseTableauBord
},









montantParAnnee: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserViseTableauBord.filter(normeEquipe => normeEquipe.exercice_budget == this.budgetaire).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                    return 0
                }
            },
montantMantant: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserViseTableauBord.filter(normeEquipe => normeEquipe.affichierSection.nom_section == this.section).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                    return 0
                }
            },


montantTotalMarcheReel: function () {
              
                      let valInite=0;
                        return  this.getMandatPersonnaliserViseTableauBord.reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);

                
            },

// rechercheMarcheSuivie(){
//       if(this.budgetaire != "" &&  this.entreprise!="" && this.typemarche != "" && this.Procedure != "" && this.section != ""){
//           // console.log(this.entreprise)
//           // console.log(this.type_marche)
//           return this.getMandatPersonnaliserViseTableauBord.filter(item =>{
//               if(item.exercice_budget == this.budgetaire && item.nom_entreprise == this.entreprise && item.affichierObjetMarche.type_marche.libelle == this.typemarche && item.affichierObjetMarche.procedure_passation.libelle == this.Procedure && item.affichierSection.nom_section == this.section){
//                   return item
//               }
            
//           })
        
//       }
      
    
//       return this.getMandatPersonnaliserViseTableauBord
// },
 

 sommeEgagementMandatParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserViseTableauBord.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
 sommeFactureParSection: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserViseTableauBord.filter(normeEquipe => normeEquipe.affichierSection.nom_section == this.section).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                    return 0
                }
            },
afficheReference() {
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
// afficheNumeroMarche() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.marches.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.numero_marche;
//       }
//       return 0
//         }
//       };
//     },
// afficheTypeMarche() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.marches.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.type_marche.libelle;
//       }
//       return 0
//         }
//       };
//     },
// afficheTypeProcedure() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.marches.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.procedure_passation.libelle;
//       }
//       return 0
//         }
//       };
//     },
// afficheObjetMarche() {
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

afficheMontantReelMarche() {
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


//     marcherTableau()  {
     
//         const searchTerm = this.editMarche.typeMarch.toLowerCase();

// return this. getMandatPersonnaliserViseTableauBord.filter((item) => {
  
//      return item.afficheTypeMarche(type.marche_id).toLowerCase().includes(searchTerm) 
     
    

  
  


//    }
// )
//     },
  
    
    // deverouGrandNature() {
    //   return this.formData.unite_administrative_id == "";
    // }, 
   
    //  deveroueconomiq() {
    //   return this.formData.activite_id == "";
    // },
    //  economiqueDynamiques() {
    //  return id => {
    //     if (id != null && id != "") {
    //       return this.getPersonnaliseBudgetGeneralParBienService.filter(
    //         element => element.ua_id == id
    //       );
    //     }
    //   };
    // },
    

    // marcherAttribuer(){
    //   return this.getMarchePersonnaliser.filter(recuper => recuper.attribue == 1)
      
    // },
    // MontatantImputationBudget() {
      
    //   const norme = this.getPersonnaliseBudgetGeneral.find(normeEquipe => normeEquipe.economique_id == this.formData.Economique);

    //   if (norme) {
    //     return norme.Dotation_Initiale;
    //   }
    //   return 0
    // },
  
   
// exoEnCours(){
// return this.exercices_budgetaires.filter(element => element.encours == 1)
// },
// anneeAmort() {
      
//       const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

//       if (norme) {
//         return norme.annee;
//       }
//       return 0
//     },


//     procedurePassationDynamiques() {
//      return id => {
//         if (id != null && id != "") {
//           return this.procedurePassations.filter(
//             element => element.type_procedure_id == id
//           );
//         }
//       };
//     },
//      activiteDynamiques() {
//      return id => {
//         if (id != null && id != "") {
//           return this.getPersonnaliseBudgetGeneralParBienService.filter(
//             element => element.ua_id == id
//           );
//         }
//       };
//     },
//     deverouPassation() {
//       return this.formData.typeappel_id == "";
//     }, 
//      deverouPassationModi() {
//       return this.editMarche.typeappel_id == "";
//     }, 
  
    

//   grandeNatureDynamiques() {
//      return id => {
//         if (id != null && id != "") {
//           return this.getPersonnaliseBudgetGeneralParBienService.filter(
//             element => element.ua_id == id
//           );
//         }
//       };
//     },










  
    //  ImputationBudgetModifier() {
      
    //   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.afficheEconomique.id == this.editMarche.economique_id);

    //   if (norme) {
    //     return norme.codebudget;
    //   }
    //   return 0
    // },
    // // ImputationBudgetModif() {
      
    // //   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.editMarche.Economique);

    // //   if (norme) {
    // //     return norme.codebudget;
    // //   }
    // //   return 0
    // // },
    // MontatantImputationBudget() {
      
    //   const norme = this.getPersonnaliseBudgetGeneral.find(normeEquipe => normeEquipe.economique_id == this.formData.Economique);

    //   if (norme) {
    //     return norme.Dotation_Initiale;
    //   }
    //   return 0
    // },
  },
  methods: {
   
   formatageSomme:formatageSomme
  }
};
</script>

<style scoped>
.taillModal{
  width: 980px;
   margin: 0 -25%;
}
</style>