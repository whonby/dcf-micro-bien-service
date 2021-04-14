<template>
  <div>
    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div>
    <br />

    <div class="widget-content nopadding" id="printpdf">
      <table
        class="table table-bordered table-striped html2pdf__page-break"
        id="app1"
      >
        <tr>
          <td style="text-align: center">
            <p>
              MINISTERE DU BUDGET <br />
              ------------------------- <br />
              DIRECTION DU CONTRÔLE FINANCIER <br />
              -------------------------
            </p>
            <img :src="AfficheLogODCF" />
          </td>
          <td style="text-align: center">
            <img :src="AfficheAmoirie" />
          </td>
         
          <td style="text-align: center">
            <p>
              REPUBLIQUE DE CÔTE D'IVOIRE <br />
              Union-Discipline-Travail <br />
              -------------------------
            </p>
          </td>
        </tr>
      </table>
     
     <table
        class="table table-bordered table-striped html2pdf__page-break"
        id="app1" v-if="macheid"
      >
        <tr>
          <td style="text-align: center">
            <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
       
      >
       {{afficherLibelleSection(afficherIDSection(375)) || 'Non renseigné'}} 
       <br/>
     <h4 style="color:red;">  {{afficherLibelleUa(afficherIDUA(375)) || 'Non renseigné'}}</h4>
      
      </h2>
      
             
          </td>
         
         
          <td style="text-align: center">
            
              <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
       
      >
        ETAT D'EXECUTION DES MARCHES
      
      </h2>
            
          </td>
        </tr>
      </table>

      
    

        <table class="table table-bordered table-striped" id="titre">
                <thead>
                   <tr style="background-color: green;color: #FFFFFF;">
    <td style="width:50%;text-align:center">Nom de l'Entreprise:   {{printEntreprise(afficherEntrepriseId(375))}}</td> 
    <td style="width:50%;text-align:center"> N° de Marché /Contrat  :  {{afficherNumeroMarche(375)}} </td>
     <!-- <td style="width:12%;text-align:center">SOURCE DE FINANCEMENT</td>
     <td style="width:12%;text-align:center">TOTAL(FINANCEMENT)</td>
    <td style="width:12%;text-align:center">EXECUTE</td>
     <td style="width:12%;text-align:center">DISPONIBLE</td> -->
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
 </thead>
 <tbody>
                    <tr>
    <td height="10px" rowspan="" style="text-align:center;">N° de compte contribuable:  {{printEntrepriseNumberCompte(afficherEntrepriseId(375))}}</td>
    <td height="10px">Date d'Approbation :  {{afficherDateAprobation(375)}}</td> 
     <!-- <td style="width:12%">ETAT</td> -->
     <!-- <td height="10px" style="text-align:center;font-size:12px"></td>
   <td height="10px" style="text-align:center;font-size:12px"></td>
     <td height="10px" style="text-align:center;font-size:12px"></td> -->
      
 </tr>
                        
                <tr>
    <td height="10px" rowspan="" style="text-align:center;">Type de marché/Contrat:</td>
    <td height="10px">Imputation Budgétaire : {{afficherCodeImputation}}</td>
     <!-- <td style="width:12%">ETAT</td> -->
     <!-- <td height="10px" style="text-align:center;font-size:12px"></td>
   <td height="10px" style="text-align:center;font-size:12px"></td>
     <td height="10px" style="text-align:center;font-size:12px"></td> -->
      
 </tr>
                   <tr>
   
   <td rowspan="2" height="20px" width="100px">Objet: {{afficherObjet(375)}}  </td>
    <td height="20px">PART  Bailleur   : {{afficherIDTypeFinancementLibelle(afficherIDTypeFinancement(375))}}                          {{formatageSomme(parseFloat(sommeCaluler))}} </td>
    <!-- <td height="20px" style="text-align:center;" ></td>
    <td height="20px" style="text-align:center;"></td>
   <td  height="20px" style="text-align:center;"></td> -->
<!--     
     <td height="20px">45</td>
     <th height="20px">12</th> -->
</tr>
                   <tr>
   
   <!-- <td height="20px">EMPRUNT  </td> -->
    <td style="width:12%"> PART ETAT: {{afficherIDTypeFinancementLibelleEmprunt(afficherIDTypeFinancement(375))}}                 {{formatageSomme(parseFloat(sommeCaluler))}}  </td>
     <!-- <td height="20px" style="text-align:center;"></td>
    
    <td style="text-align:center;height:20%"></td>
      <td  style="text-align:center;height:20%"></td> -->
    
    <!-- <td height="20px">03</td>
     <th height="20px">78</th> -->
</tr>
     
                   <tr>
   <td  rowspan="4" style="text-align:center;width:10%">Montant initial du marché HTVA:
     <br/>
       <br/>
       <br/>
     Montant total du marché HTVA:
         <br/>
       <br/>
     <span style="margin-left:-150px;">
       <h6>debut:01/01/2021    ;     fin:01/02/1995  </h6>          
        
        </span>  

      </td>
      
   
   <td style="width:12%"> Avenant 1 HTVA:</td>
    <!-- <td style="width:12%">ETAT</td>
  
    <td  style="text-align:center;width:12%"></td>
    <td style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td> -->
     <!-- <td style="width:12%">1004</td>
     <th style="width:12%">1005</th> -->
</tr>
                   <tr>
   
   <td height="20px">Avenant 2 HTVA: </td>
     
    <!-- <td height="20px"></td>
    <td height="20px" style="text-align:center"></td>
  <td style="text-align:center;height:20%"></td>
   <td  style="text-align:center;height:20%"></td> -->
     <!-- <td height="20px"></td>
     <th height="20px"></th> -->
</tr>
                   <tr>
  
   <td height="20px">Avenant 3 HTVA:  </td>
   
    <!-- <td height="20px"></td>
     <td height="20px" style="text-align:center"></td>
   <td height="20px" style="text-align:center;"></td>
    <td height="20px" style="text-align:center;"></td> -->
    <!-- <td height="20px"></td>
     <th height="20px"></th> -->
</tr>

          <tr>
  
   <td height="20px">Avenant 4 HTVA: </td>
   
    <!-- <td height="20px"></td>
     <td height="20px" style="text-align:center"></td>
   <td height="20px" style="text-align:center;"></td>
    <td height="20px" style="text-align:center;"></td> -->
    <!-- <td height="20px"></td>
     <th height="20px"></th> -->
</tr>
                                      
              </tbody>  
              </table>
        <br>
    </div>
    <br>
      <table>
        <tr>
          <td>Decompte</td>
          <td>Date</td>
          <td>Action TVA</td>
          <th colspan="3">
            Retenue
          </th>
          <td>TVA net</td>
          <td>netTV</td>
          <td>Etat</td>
          <td>Bailler</td>
        </tr>
       
        <tr>
          <td>0</td>
          <td>15/03/2021</td>
          <td>15 12365</td>
          <td>Avance</td>
          <td>Garantie</td>
          <td>Penalités</td>
          <td>15 12365</td>
          <td> 12365</td>
         <td>15 </td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td>15/03/2021</td>
          <td>12354</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        
          <td> 145 354</td>
          <td> 145 </td>
          <td>354</td>
          <td>0</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr style="background-color: aquamarine;">
            <td>CUMULS</td>
            <td></td>
            <td>12546</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>15688254</td>
            <td>365258987</td>
            <td>365974587</td>
            <td>0</td>
        </tr>
        <tr>
            <td>%CUMULS</td>
            <td></td>
            <td>#VALLEUR!</td>
            <td>0.0% </td>
            <td>#VALEUR!</td>
            <td>#VALEUR!</td>
            <td>#VALEUR!</td>
            <td>#VALEUR!</td>
            <td>0</td>
            <td></td>
        </tr>
      </table>
      <br>
       <table>
        <tr>
            <td colspan="3">ENGAGEMENTS VISES</td>
            <td>TAUX</td>
        </tr>
        <tr>
            <td colspan="2">Par Bailleur</td>
            <td>0</td>
            <td>%0</td>
        </tr>
        <tr>
            <td>Par Etat</td>
            <td> </td>
            <td>#REFT! </td>
            <td>0%</td>
        </tr>
        <tr>
            <td>Total</td>
            <td> </td>
            <td>#REFT! </td>
            <td>0%</td>
        </tr> 
    </table>
    <br>
    <table>
        <tr>
            <td colspan="3">RESTE A ENGAGER</td>
            <td>TAUX</td>
        </tr>
        <tr>
            <td colspan="2">Par Bailleur</td>
            <td>0</td>
            <td>%0</td>
        </tr>
        <tr>
            <td>Par Etat</td>
            <td> </td>
            <td>#REFT! </td>
            <td>0%</td>
        </tr>
        <tr>
            <td>Total</td>
            <td> </td>
            <td>Valeur </td>
            <td>0%</td>
        </tr> 
    </table>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import {formatageSomme} from "../../../src/Repositories/Repository"
export default {
  props:["macheid"],
  data() {
    return{

    }
    
  },
  created(){

  },
  computed:{
 ...mapGetters("bienService", ["acteEffetFinanciers","getterProgrammationMarchePlurieAnnuel",
  "getMarchePersonnaliser","marches","gettersDossierMandat","gettersgestionOrdrePaiement",
  "gettersDossierLiquidation","gettersDemandeEngagement"]),

...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures"]),

  ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']),
  ...mapGetters("parametreGenerauxAdministratif", [
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "exercices_budgetaires",
      "sections",
    ]),

    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),
 ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
     ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements','types_financements']),
    ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
 "budgetGeneral",
 "getPersonnaliseTransfert"
   
   
   ]),
     ...mapGetters("gestionMarche", [
      "groupeVille",
      "entreprises",
      "banques",
      "comptes",
      "getCompte",
      "getEntreptise",
      "getPersonnaliseAgence",
      "agenceBanques",
    ]),

taille(){
  return this.gettersgestionOrdrePaiement.length;
},

  afficherIDUA(){
   return macheid=>{
     if(macheid!=null && macheid!=""){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(answer)  return answer.unite_administrative_id
         return 0
     }
   }
  },
  // afficher le libelle d'unite administratie
  afficherLibelleUa(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.uniteAdministratives.find(item =>item.id==macheid)
         if(item) {
            return item.libelle
         }
         return 0
     }
   }
  },

   afficherObjet(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(item) {
            return item.odjet_autre_depense
         }
         return 0
     }
   }
  },

  afficherEntrepriseId(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(item) {
            return item.entreprise_id
         }
         return 0
     }
   }
  },

  //afficher le numero du marche/contrat numero_marche
  afficherIDMarche(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.id==macheid)
         if(item) {
            return item.marche_id
         }
         return 0
     }
   }
  },

  // recuperation de ID de type de financer 

    afficherIDTypeFinancement(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(item) {
            return item.type_financement_id
         }
         return 0
     }
   }
  },

  // calculons les montants des types de financement en fonction du montant du marche
   recuperMontantMarcheDan(){
    return macheid=>{
      if(macheid!=null && macheid!=""){
        const objet=this.gettersgestionOrdrePaiement.find(item => item.marche_id==macheid)
         if(objet){
           return objet.montant_ordre_paiement
         }
         return 0
      }
    }
  },
  calculeMontantParBailleur(){
    return macheid=>{
      if(macheid!=null && macheid!=""){
        const objet=this.acteEffetFinanciers.find(item => item.marche_id==macheid)
         if(objet){
           return objet.taux
         }
         return 0
      }
    }
  },

  sommeCaluler(){
      return (this.calculeMontantParBailleur(this.macheid) * parseFloat (this.recuperMontantMarcheDan(this.macheid)))/100
  },

  afficherIDTypeFinancementLibelle(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.types_financements.find(item =>item.id==macheid && item.code==2 || item.code==3)
         if(item) {
            return item.libelle
         }
         return 0
     }
   }
  },

  afficherIDTypeFinancementLibelleEmprunt(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.types_financements.find(item =>item.id==macheid && item.code==1)
         if(item) {
            return item.libelle
         }
         return 0
     }
   }

  },
 
  afficherCodeImputation(){
    return this.afficherCodeActivite(this.afficherActiviteID) +" "+ this.afficherImputation(this.afficherImputationID)
  },

  // afficher imputation
  afficherImputationID(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(item) {
            return item.ligne_economique_id
         }
         return 0
     }
   }
  },
   afficherImputation(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.plans_budgetaires.find(item =>item.id==macheid)
         if(item) {
            return item.code
         }
         return 0
     }
   }
  },

  afficherActiviteID(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(item) {
            return item.activite_id
         }
         return 0
     }
   }
  },


  afficherCodeActivite(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.plans_activites.find(item =>item.id==macheid)
         if(item) {
            return item.code
         }
         return 0
     }
   }
  },

   afficherNumeroMarcheID(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.acteEffetFinanciers.find(item =>item.id==macheid)
         if(item) {
            return item.marche_id
         }
         return 0
     }
   }
  },

     afficherDateAprobation(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.acteEffetFinanciers.find(item =>item.marche_id==macheid &&  this.afficherIDMarche(this.macheid)==this.afficherNumeroMarcheID(this.macheid))
         if(item) {
            return item.date_approbation
         }
         return 0
     }
   }
  },

  afficherNumeroMarche(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.acteEffetFinanciers.find(item =>item.marche_id==macheid && this.afficherIDMarche(this.macheid)==this.afficherNumeroMarcheID(this.macheid))
         if(item) {
            return item.numero_marche
         }
         return 0
     }
   }
  },

  
  // afficher le libelle de l'entreprise
  printEntreprise(){
    return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.entreprises.find(item =>item.id==macheid)
         if(item) {
            return item.raison_sociale
         }
         return 0
     }
   }
  },

   printEntrepriseNumberCompte(){
    return macheid=>{
     if(macheid!=null && macheid!=""){
        const item = this.entreprises.find(item =>item.id==macheid)
         if(item) {
            return item.numero_cc
         }
         return 0
     }
   }
  },


  // afficher le ID de section 
  afficherIDSection(){

     return macheid=>{
     if(macheid!=null && macheid!=""){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(answer)  return answer.section_id
         return 0
     }
   }

  },

  // afficher le libelle de la section
  afficherLibelleSection(){
     return macheid=>{
     if(macheid!=null && macheid!=""){
        const answer = this.sections.find(item =>item.id==macheid)
         if(answer)  {
           return answer.nom_section
         }
         return 0
     }
   }

  },


AfficheLogODCF() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/log3.png";
    },
    AfficheAmoirie() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/amoirie.png";
    },
  },
  methods:{
    ...mapActions("bienService",['']),
    formatageSomme:formatageSomme,

    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

  }
}
</script>
<style scoped>
  table{
    border-collapse: collapse
  }
  
  th{
    border: 1px solid black;
  }
  td{
    border: 1px solid black;
    padding: 10px;
  }
  
</style>