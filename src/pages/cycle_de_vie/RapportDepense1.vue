
<template>
  <div >
    

            <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div>
           

 <div ref="document">


          <!--<table class="table table-bordered table-striped" id="Exo">
            <tr>
              <td>

              </td>
            </tr>
          </table>-->
     <h3 style="text-align:center">LIVRE SPECIAL :<span style="color: red;">{{anneeAmort}}</span></h3>
           
              <table class="table table-bordered table-striped" >
                <thead>
                   <tr style=";color: #000000;">
    <td style="width:10%;background-color: red" colspan="1">Action</td>
    <td style="width:90%;" colspan="9"></td>
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
                    <tr style=";color: #000000;">
    <td style="width:10%;background-color: red" colspan="1">Section </td>
    <td style="width:90%;" colspan="9"></td>
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
                     <tr style=";color: #000000;">
    <td style="width:10%;background-color: red" colspan="1">Programme</td>
    <td style="width:90%;" colspan="9"></td>
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
                     <tr style=";color: #000000;">
    <td style="width:10%;background-color: red" colspan="1">Action</td>
    <td style="width:90%;" colspan="9"></td>
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
                      <tr style=";color: #000000;">
    <td style="width:10%;background-color: red" colspan="1">Activité</td>
    <td style="width:90%;" colspan="9"></td>
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
                     <tr style=";color: #000000;">
    <td style="width:10%;background-color: red" colspan="1" >Unité Administrative</td>
    <td style="width:90%;" colspan="9"></td>
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
                      <tr style=";color: #000000;">
    <td style="width:100%;background-color: red;text-align:center" colspan="10" >ENGAGEMENT</td>
    
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>



                    <tr style=";color: #000000;">
   <td style="width:10%;" colspan="1">N° </td> 
    <td style="width:10%" colspan="1">Exercices Concernés</td>
    <td style="width:10%" colspan="1">N° Engagement</td>
   <td style="width:10%" colspan="1">Nature Eco De La Depense</td>
   <td style="width:10%" colspan="1">Créancier </td>
   <td style="width:10%" colspan="1">Crédit Initial</td>
   <td style="width:10%" colspan="1">Date Engagement</td>
   <td style="width:10%" colspan="1">Montant de l'engagement</td>
   <td style="width:10%" colspan="1">Cumul des engagements</td>
   <td style="width:10%" colspan="1">Crédits Disponibles</td>
 
     



  
     <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
     <th style="width:12%;text-align:center">TOTAL</th> -->
</tr>
                     <tr style=";color: #000000;">
   <td style="width:10%;" colspan="1"> </td> 
    <td style="width:10%" colspan="1"></td>
    <td style="width:10%" colspan="1"></td>
   <td style="width:10%" colspan="1"></td>
   <td style="width:10%" colspan="1"> </td>
   <td style="width:10%" colspan="1"> </td>
   <td style="width:10%" colspan="1"> </td>
   <td style="width:10%" colspan="1"> </td>
   <td style="width:10%" colspan="1"> </td>
   <td style="width:10%" colspan="1"> </td>
 
     



  
     <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
     <th style="width:12%;text-align:center">TOTAL</th> -->
</tr>
 
 
 
 
 

 </thead>
 
 





                  
              </table>
                 




 </div>

            <!-- <div v-else> -->
              <!-- <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p> -->
            <!-- </div> -->
          <!-- </div> -->
        <!-- </div>
      </div> -->
    <!-- </div> -->

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterpaiementPersonnel" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterpaiementPersonnel()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  /> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSomme } from "../../../src/Repositories/Repository";
// import jsPDF from 'jspdf'
import 'jspdf-autotable'
// import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
import html2pdf from 'html2pdf.js'
export default {
  // components: {
  //   ModelListSelect
  // },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
     
      search: ""
    };
  },

  computed: {
  ...mapGetters("bienService", ["getMandatPersonnaliserPersonnel","modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
 "budgetGeneral",
 "afficheTransfertValider"
   
   
   ]),

   ...mapGetters('parametreGenerauxAdministratif',[

 "sections",
 "type_Unite_admins",
 "plans_programmes",
 "natures_sections",
 "grandes_natures",
 "afficheNiveauPlanProg",
 "exercices_budgetaires"
   ]),

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),

anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
AfficheMontantTresorConsommer(){
    {
    var montant = this.getMandatPersonnaliserPersonnel.filter(element => element.marchetype == "perso" && element.montant_tresor != 0 && element.exercice_budget == this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_tresor), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant
     }
}, 
AfficheMontantDonConsommer(){
    {
    var montant = this.getMandatPersonnaliserPersonnel.filter(element => element.marchetype == "perso" && element.montant_don != 0 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant
     }
}, 
AfficheMontantEmpruntConsommer(){
    {
    var montant = this.getMandatPersonnaliserPersonnel.filter(element => element.marchetype == "perso" && element.montant_emprunt != 0 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
},


AfficheMontantTresor(){
  
  
    {
    var montant = this.budgetGeneral.filter(element =>element.actived==1 && element.gdenature_id == 2 && element.typefinancement_id == 14 && element.exercicebudget_id == this.anneeAmort && element.actived==1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 
AfficheMontantDon(){
  
  
    {
    var montant = this.budgetGeneral.filter(element => element.actived==1 && element.gdenature_id == 2 && element.typefinancement_id == 13 && element.exercicebudget_id == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 
AfficheMontantEmprunt(){
  
  
    {
    var montant = this.budgetGeneral.filter(element =>element.actived==1 && element.gdenature_id == 2 && element.typefinancement_id == 15 && element.exercicebudget_id == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 
                
            // MODULE BIEN ET SERVICE   
            
            
  AfficheMontantTresorConsommerInvestissement(){
    {
    var montant = this.getMandatPersonnaliserVise.filter(element => element.marchetype == 1 && element.montant_tresor != 0 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_tresor), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant
     }
}, 








AfficheMontantDonConsommerInvestissement(){
    {
   var montant = this.getMandatPersonnaliserVise.filter(element => element.marchetype == 1 && element.montant_don != 0 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant
     }
}, 
AfficheMontantEmpruntConsommerInvestissement(){
    {
    var montant = this.getMandatPersonnaliserVise.filter(element => element.marchetype == 1 && element.montant_emprunt != 0 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
},





AfficheMontantTresorConsommerBienEtService(){
    {
    var montant = this.getMandatPersonnaliserVise.filter(element => element.marchetype == 2 && element.montant_tresor != 0 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_tresor), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant
     }
}, 








AfficheMontantDonConsommerBienEtService(){
    {
   var montant = this.getMandatPersonnaliserVise.filter(element => element.marchetype == 2 && element.montant_don != 0 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant
     }
}, 
AfficheMontantEmpruntConsommerBienEtService(){
    {
    var montant = this.getMandatPersonnaliserVise.filter(element => element.marchetype == 2 && element.montant_emprunt != 0 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
},


AfficheMontantTresorBienEtService(){
  
  
    {
    var montant = this.budgetGeneral.filter(element => element.gdenature_id == 5 && element.typefinancement_id == 14 && element.exercicebudget_id == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 
AfficheMontantDonBienEtService(){
  
  
    {
    var montant = this.budgetGeneral.filter(element => element.gdenature_id == 5 && element.typefinancement_id == 13 && element.exercicebudget_id == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 
AfficheMontantEmpruntBienEtService(){
  
  
    {
    var montant = this.budgetGeneral.filter(element => element.gdenature_id == 5 && element.typefinancement_id == 15 && element.exercicebudget_id == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 

// AFFICHE MODULE TRANSFERT




AfficheMontantTresorConsommerTransfert(){
    {
    var montant = this.afficheTransfertValider.filter(element => element.typefinancement_id == 14 && element.exerciceencours == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant
     }
}, 








AfficheMontantDonConsommerTransfert(){
    {
   var montant = this.afficheTransfertValider.filter(element => element.typefinancement_id == 13 && element.exerciceencours == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant
     }
}, 
AfficheMontantEmpruntConsommerTransfert(){
    {
    var montant = this.afficheTransfertValider.filter(element => element.typefinancement_id == 15 && element.exerciceencours == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
},


AfficheMontantTresorTransfert(){
  
  
    {
    var montant = this.budgetGeneral.filter(element => element.gdenature_id == 6 && element.typefinancement_id == 14 && element.exercicebudget_id == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 
AfficheMontantDonTransfert(){
  
  
    {
    var montant = this.budgetGeneral.filter(element => element.gdenature_id == 6 && element.typefinancement_id == 13 && element.exercicebudget_id == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 
AfficheMontantEmpruntTransfert(){
  
  
    {
    var montant = this.budgetGeneral.filter(element => element.gdenature_id == 6 && element.typefinancement_id == 15 && element.exercicebudget_id == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 
AfficheMontantTresorIvestissement(){
  
  
    {
    var montant = this.budgetGeneral.filter(element => element.gdenature_id == 7 && element.typefinancement_id == 14 && element.exercicebudget_id == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 
AfficheMontantDonIvestissement(){
  
  
    {
    var montant = this.budgetGeneral.filter(element => element.gdenature_id == 7 && element.typefinancement_id == 13 && element.exercicebudget_id == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 
AfficheMontantEmpruntIvestissement(){
  
  
    {
    var montant = this.budgetGeneral.filter(element => element.gdenature_id == 7 && element.typefinancement_id == 15 && element.exercicebudget_id == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

     }
  
  
}, 



  },
  methods: {
    ...mapActions("personnelUA", [
      "getpaiementPersonnel",
      "ajouterpaiementPersonnel",
      "modifierpaiementPersonnel",
      "supprimerpaiementPersonnel"
    ]),
    genererEnPdf(){
 /* var doc = new jsPDF('landscape')
  
  doc.text(98,10,"SYNTHESE DU BUDGET")
  doc.autoTable({html:'#Exo'})
  doc.autoTable({ html: '#titre'}),
  doc.autoTable({ html: '#bienService'}),
  doc.autoTable({ html: '#transfert'}),
  doc.autoTable({ html: '#total'}),
  
doc.save('SynteseBudget.pdf')
doc.output('dataurlnewwindow')
return 0*/
        html2pdf(this.$refs.document, {
            margin: 0,
            filename:'SYNTHESE DU BUDGET.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { dpi: 192, letterRendering: true },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
        })

},
formatageSomme:formatageSomme
  }
};
</script>
<style scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}
td{
font-size:12px;
font-weight: bold;
}
</style>