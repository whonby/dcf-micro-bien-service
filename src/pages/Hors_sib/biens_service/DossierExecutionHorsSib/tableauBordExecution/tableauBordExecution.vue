
<template>
  <div class="widget-content nopadding">
    <div align="right">

      <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>


                            </div>
                            <br>
                            <div id="printMe">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px">BUDGET INITIAL</th>
                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px"> MONTANT BASE DU MARCHE</th>
                     <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px">MONTANT AVENANT</th>
                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px"> NOMBRE AVENANT</th>
                     <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px">TAUX RATIO MONTANT AVENANT/MONTANT MARCHE</th>
                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px"> MONTANT GLOBAL DU MARCHE (Base+Av)</th>
                     <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px">CUMUL OP VISE</th>
                    <!-- <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px"> MONTANT PAYE DU MARCHE</th> -->
                     <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px">TAUX D'EXECUTION MARCHE</th>
                                          <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px">DUREE DU MARCHE</th>
                                                                                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px">DUREE ECOULEE</th>
                                                               <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px">DUREE RESTANT DU MARCHE</th>
                    <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px"> BUDGET DISPONIBLE</th>
                     <th style="background: coral;font-weight: bolder;color:#000;text-align:center;font-size:12px">RESTE A PAYE DU MARCHE</th>
                   
                  </tr>
                </thead>
                <tbody>
                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{formatageSomme(parseFloat(afficherMontantBudgetaireInitial(afficherIdLigneBudgetaire(afficherIdParent(macheid)))))}}</td>
                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{formatageSomme(parseFloat(afficheMontantReelMarche(macheid)))}}</td>
                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{formatageSomme(parseFloat(affichierMontantAvenant(macheid)))}}</td>
                  <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{affichierNombreAvenant(this.macheid)}}</td>
                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{ratioAvenantMarche}}%</td>
                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{formatageSomme(parseFloat(montantMarcheAvecAvenant))}}</td>
                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{formatageSomme(parseFloat(sommeEgagementLigneTableau(macheid)))}}</td>
                 <!-- <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{formatageSomme(parseFloat(sommeEngagementTableau(macheid)))}}</td> -->
                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{tauxFacturation}}%</td>
                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{dureeMarche(macheid)}} Jours</td>
                                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{parseFloat(DureeEcoule)}} Jours</td>
                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{parseFloat(dureeMarche(macheid))-parseFloat(DureeEcoule)}} Jours</td>
                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{formatageSomme(parseFloat(afficherMontantBudgetaireInitial(afficherIdLigneBudgetaire(afficherIdParent(macheid))) - sommeEgagementLigneTableau(macheid)))}}</td>
                 <td style="font-weight: bolder;color:#000;text-align:center;font-size:12px">{{formatageSomme(parseFloat(restePayeMarche))}}</td>
                 
                </tbody>
              </table>
                            </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

import { formatageSomme } from './../../../../../Repositories/Repository';

export default {
  name:'tableaudebord',
  
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ]
    };
  },
  props:["macheid"],
  computed: {
    ...mapGetters("bienService", ["gettersgestionOrdrePaiement","typeMarches","avenants",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral","budgetEclate" ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,




 afficherIdParent() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.parent_id;
      }
      return ""
        }
      };
    },
    afficherIdLigneBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.economique_id;
      }
      return ""
        }
      };
    },
    afficherMontantBudgetaireInitial() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id);

      if (qtereel) {
       
           return qtereel.dotation;
      }
      return ""
        }
      };
    },
 montantCredite: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.macheid).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
tauxFacturation() {
      const val = (parseFloat(this.sommeEgagementLigneTableau(this.macheid)) / parseFloat(this.montantMarcheAvecAvenant)) * 100;
      
       if (val) {
        return parseInt(val).toFixed(2);
      }
      
      return 0
    },

affichierNombreAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).length; 
      
    }
    
  }
},
ratioAvenantMarche(){
   const val = (parseFloat(this.affichierMontantAvenant(this.macheid)) / parseFloat(this.afficheMontantReelMarche(this.macheid))) * 100;
      return parseFloat(val).toFixed(2);
},
afficherInputationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.imputation;
      }
      return ""
        }
      };
    },
    // afficherMontantBudgetaireInitial() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.budgetGeneral.find(qtreel => qtreel.codebudget == id);

    //   if (qtereel) {
       
    //        return qtereel.Dotation_Initiale;
    //   }
    //   return ""
    //     }
    //   };
    // },

sommeEgagementLigneTableau() {
      return id => {
        if (id != null && id != "") {
           return  this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.marche_id == id && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==8 || qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement==1 && qtreel.decision_cf==9 || qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==8 || qtreel.unite_administrative_id == id && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf==9).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

     
        }
      };
    },

//  sommeEgagementLigneTableau: function () {
//                 return id => {
//                     if (id != "") {
//                       let valInite=0;
//                         return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.macheid).reduce(function(total,currentVal){
//                            return total + parseFloat(currentVal.total_general)
//                         },valInite);
//                     }
//                 }
//             },



restePayeMarche() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.sommeEngagementTableau(this.macheid));
      return parseFloat(val).toFixed(0);
      
    },
montantMarcheAvecAvenant() {
      const val = parseFloat(this.afficheMontantReelMarche(this.macheid)) + parseFloat(this.affichierMontantAvenant(this.macheid));
      return parseFloat(val).toFixed(0);
    },
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
    
    dureeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.duree;
      }
      return 0
        }
      };
    },
affichierMontantAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
    }
    
  }
},
sommeEngagementTableau(){
  return id => {
    if(id !=""){
  
        
    return this.getMandatPersonnaliserVise.filter(element => element.marche_id == this.macheid).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2); 
      
    }
    
  }
},
dateMiseService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.date_odre_service;
      }
      return 0
        }
      };
    },
  DureeEcoule(){
     

      var dateF = new Date(this.afficherDateDuJour).getTime()
      var dateO = new Date(this.dateMiseService(this.macheid)).getTime()
      var resultat = dateF - dateO

      var diffJour =  resultat / (1000 * 3600 * 24)

      if(isNaN(diffJour)) return null

      if(parseFloat(diffJour) < 0 ) return "durée invalide"
      
      return  diffJour;

    },
 afficherDateDuJour(){
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


        let cur_day =  aaaa + "-" + moi + "-" + jour;

        return cur_day


    
   
   },
  },
  methods: {
    formatageSomme:formatageSomme,
          genererEnPdf(){
  this.$htmlToPaper('printMe');
},

   
  }
 
};
</script>



<style>


</style>
