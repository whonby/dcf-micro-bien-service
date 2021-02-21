

<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box">
            <div class="accordion-heading " >
              <div @click="toggle()" class="widget-title "> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <span class="taillegrand">{{groupe.code}} &nbsp;{{groupe.libelle}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <!-- <span class="badge badge-info" >{{getNombreArticle}}</span>&nbsp;&nbsp; -->
                
                 <span class="badge badge-info">{{formatageSomme(parseFloat(MontantTotal))}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
 
                 <span class="badge badge-success">{{formatageSomme(parseFloat(budgetConsommerDesModule))}}</span>&nbsp;&nbsp;&nbsp;&nbsp;

                 <span class="badge badge-important">{{formatageSomme(parseFloat(budgetConsommerDesModule) - parseFloat(MontantTotal))}}</span>
                </a> 
            </div>
            </div>
            <div class="collapse in accordion-body"  v-if="isFolder && isOpen ">
              <div class="widget-content"> 
                 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                       <th>Exercice</th>
                    <th title="">Code Budget</th>
                     <!-- <th title="unite administrative">ua</th> -->
                    <th>Section</th>
                    <th title="grande nature de dépense">Grande nature de dépense</th>
                      <th>Programme</th>
                    <!--<th>Action</th> -->
                    <th title="type de financement">Type de financement</th>
                     
                     <th title="classification fonctionnelle">Classification fontionnelle</th>
                     <th title="type procedure">Procédure de marché</th>
                     <th title="Statut">Statut</th>
                     <th title="classification Economique">Classification économique</th>
                    <th>Dotation initiale</th>
                    <th>Version</th>
                    


                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <budgetGeneralItem
                        class="item"
                        v-for="groupeElement in affichebudgetActive"
                        :key="groupeElement.id"
                        :article="groupeElement"
                      @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></budgetGeneralItem>
                      <!-- <tr>
                     

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
                       <td style="font-weight:bold;"> Total Dotation 
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(MontantTotal))}}
                           
                      </td>
                       <td>
                           
                      </td>
                        <td>
                           
                      </td>
                     
                    </tr> -->
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import { mapGetters} from "vuex";
import budgetGeneralItem from './budgetGeneralItem'
import { formatageSomme } from "../../../src/Repositories/Repository";
import {admin,dcf,noDCfNoAdmin} from "../../../src/Repositories/Auth"

export default {
    name: 'budgetGeneralItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      budgetGeneralItem
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
      active: null
    }
  },



  computed: {
      admin:admin,
      dcf:dcf,
       noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "afficheTransfertValider",
      "transferts"
      // "chapitres",
      // "sections"
    ]),
     ...mapGetters("bienService", ["gettersDossierMandat","gettersDemandeEngagement","getMandatPersonnaliserPersonnel",'getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),
   
 budgetConsommerBienService45(){
  return id => {
    if(id !=""){
    return this.gettersDossierMandat.filter(element => this.DemandeEngagement(element.demande_engagement_id) == id   &&  element.decision_cf == 8 || this.DemandeEngagement(element.demande_engagement_id) == id   &&  element.decision_cf == 9).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_engage), 0).toFixed(0); 
      
    }
    
  }
},
DemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ua_id;
      }
      return 0
        }
      };
    },
MandatValideParCf() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierMandat.find(qtreel => qtreel.demande_engagement_id == id);

      if (qtereel) {
        return qtereel.decision_cf;
      }
      return 0
        }
      };
    },
// affichebudgetActive() {
      


//         if (!this.admin || !this.dcf){
//             let colect=[];
//             this.groupe.ua_budget_general.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.groupe.id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
                
//             })
//              return colect.filter(items=>items.actived==1);
//         }

//        return this.groupe.ua_budget_general.filter(items=>items.actived==1);

//     },

 affichebudgetActive() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.groupe.ua_budget_general.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.actived == 1);
        }
        return this.groupe.ua_budget_general.filter(element => element.actived == 1); 

    },

//    affichebudgetActive(){
  
//     var activeBudget= this.groupe.ua_budget_general.filter(element => element.actived == 1); 
     
//       return activeBudget
  
// },
   
   
   
   MontantTotal(){
  
    
    var montant = this.affichebudgetActive.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0); 
      if(isNaN(montant)) return null
      return montant
}, 

budgetConsommerBienService(){
  return id => {
    if(id !=""){
    return this.getMandatPersonnaliserVise.filter(element => element.ua_id == this.groupe.id && element.marchetype == 2 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
    }
    
  }
},
// budgetConsommerBienService() {
      


//         if (!this.admin || !this.dcf){
//             let colect=[];
//             this.getMandatPersonnaliserVise.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
                
//             })
//              return colect.filter(items=>items.marchetype == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);
//         }
// return id => {
//     if(id !=""){
//     return this.getMandatPersonnaliserVise.filter(element => element.ua_id == this.groupe.id && element.marchetype == 2 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
//     }
    
//   }
//     },

budgetConsommerPersonnel(){
  return id => {
    if(id !=""){
    var montant = this.getMandatPersonnaliserPersonnel.filter(element => element.ua_id == this.groupe.id && element.marchetype == "perso" ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
       if(isNaN(montant)) return null
      return montant
    }
    
  }
},
// budgetConsommerPersonnel() {
      


//         if (!this.admin || !this.dcf){
//             let colect=[];
//             this.getMandatPersonnaliserPersonnel.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
                
//             })
//              return colect.filter(element => element.marchetype == "perso" ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
//         }
// return id => {
//     if(id !=""){
//     var montant = this.getMandatPersonnaliserPersonnel.filter(element => element.ua_id == this.groupe.id && element.marchetype == "perso" ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
//        if(isNaN(montant)) return null
//       return montant
//     }
    
//   }
//     },
budgetConsommerInvertissement(){
  return id => {
    if(id !=""){
    return this.getMandatPersonnaliserVise.filter(element => element.ua_id == this.groupe.id && element.marchetype == 1 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
    }
    
  }
},
// budgetConsommerInvertissement() {
      


//         if (!this.admin || !this.dcf){
//             let colect=[];
//             this.getMandatPersonnaliserVise.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
                
//             })
//              return colect.filter(element => element.marchetype == 1 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
//         }
// return id => {
//     if(id !=""){
//     var montant = this.getMandatPersonnaliserPersonnel.filter(element => element.ua_id == this.groupe.id && element.marchetype == 1 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
//        if(isNaN(montant)) return null
//       return montant
//     }
    
//   }
//     },






budgetConsommerTransfert(){
  return id => {
    if(id !=""){
    return this.transferts.filter(element => element.ua_id == this.groupe.id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
      
    }
    
  }
},

// budgetConsommerTransfert() {
      


//         if (!this.admin || !this.dcf){
//             let colect=[];
//             this.transferts.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
                
//             })
//              return colect.filter(element => element.marchetype == 1 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
//         }
// return id => {
//     if(id !=""){
//     var montant = this.transferts.filter(element => element.ua_id == this.groupe.id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
//        if(isNaN(montant)) return null
//       return montant
//     }
    
//   }
//     },





budgetConsommerDesModule() {
      const val = parseInt(this.budgetConsommerBienService45(this.groupe.id)) + parseInt(this.budgetConsommerTransfert(this.groupe.id)) + parseInt(this.budgetConsommerInvertissement(this.groupe.id))+parseInt(this.budgetConsommerPersonnel(this.groupe.id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },








    isFolder: function () {
      return this.groupe.ua_budget_general &&
        this.groupe.ua_budget_general.length
    },

    // getNombreArticle(){
    //     var nombre = this.groupe.ua_budget_general.length
    //     if(nombre) return nombre
    //     return '0' 
    // },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.ua_budget_general.length,
        'icon-minus': this.isOpen && this.groupe.ua_budget_general.length
        //    'icon-folder-close': !this.isOpen && this.groupe.ua_budget_general.length,
        // 'icon-folder-open': this.isOpen && this.groupe.ua_budget_general.length
      }
    },

   
  },

  filters: {
  
  	subStr: function(string, nbr) {
      if (!string) return ''
      if(string.length <= nbr) return string 
    	return string.substring(0,nbr) + '...';

      
        }
  
  },
  methods: {

    toggle: function () {
      if (this.isFolder ) {
        this.isOpen = !this.isOpen 
        
      }
    },
formatageSomme:formatageSomme
  }
}
</script>
<style>
.taillegrand{
  font-size: 16px;
  font-weight: bold;
 
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>

