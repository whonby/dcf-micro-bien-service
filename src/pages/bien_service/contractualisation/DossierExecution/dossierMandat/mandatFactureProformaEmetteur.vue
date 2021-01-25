

<template>

<div>
  
                
                <div class="span4"></div>
                                <div class="span4"></div>
                                <!-- <div class="span4" align="right">
                                   
                                      <button class="btn btn-success" @click="afficherModalProcedureFacture" >Ajouter Facture</button>

                              </div> -->
                 
                      <table class="table table-bordered table-striped" v-if="macheid">
              
                                    <thead>
                                    <tr>

                                         
                      <th>N° du marche </th>
                                         <th>N° du mandat</th>
                                        <th>N° bordereau mandat</th>
                                        <th>N° demande engagement</th>
                                          <th>N° engagement</th>
                                        <!-- <th>Type procedure</th> -->
                                                    
                                <th>Montant Mandat</th>
                                 <th >Decision de emetteur</th>
                                <th title="Date validation Emetteur">Date Emetteur</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                            
                 <tr
                    class="odd gradeX"
                    v-for="factu in afficheFactureProformaEmetteur(macheid)"
                    :key="factu.id"
                  >
                   
                                     <td>{{marcheMandat(factu.marche_id) || 'Non renseigné'}}</td>
                   <td>{{factu.numero_mandat || 'Non renseigné'}}</td>
                   <td>{{factu.numero_bordereau || 'Non renseigné'}}</td>
                    <td>{{afficherNumeroDemandeEngagemnt(factu.engagement_id)|| 'pas numero demande'}}</td>
                     <td>{{afficherNumeroEngagemnt(factu.engagement_id) || 'pas numero engage'}}</td>
                     <!-- <td>{{factu.type_procedure_id || 'Non renseigné'}}</td> -->
            <!-- <td>{{uafactut(factu.ua_id) || 'Non renseigné'}}</td>
                                    -->
                    <td>{{formatageSomme(parseFloat(factu.total_general))|| 'Non renseigné'}}</td>
                    
                    <td>
                        <button v-if="factu.decision_emetteur == 1"  class="btn  btn-success"  >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="factu.decision_emetteur == 2" class="btn  btn-warning"  >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="factu.decision_emetteur == 3" class="btn  btn-danger"  >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                    
                    <td>{{formaterDate(factu.date_decision_emetteur) || 'Non renseigné'}}</td>
                   
                     
                     
                   
                  </tr>
                                    </tbody>
                                
                                </table>

              
     




  




    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from './../../../../../Repositories/Repository';
import moment from 'moment';
export default {
  
    data(){
        return{
        
        }
    },
    props:["macheid"],
    created(){},

              computed: {
            ...mapGetters("bienService", ['decomptes','modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),

           ...mapGetters("SuiviImmobilisation", [
      "familles",
      "services",
      "listeBesoinValider",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo",
      "listeBesoinValider",
      "getAfficheStockArticle",
      "getPersoNormeArticle",
      "getPersoStock",
      "stockageArticle",
      "getFacture"
      
    ]),
 ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
  ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections","plans_programmes"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
   
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
   marcheMandat() {
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
afficherNumeroDemandeEngagemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_demande_engage;
      }
      return 0
        }
      };
    },
afficherNumeroEngagemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_engage;
      }
      return 0
        }
      };
    },
    afficheFactureProformaEmetteur() {
      return id => {
        if (id != null && id != "") {
          return this.getMandatPersonnaliser.filter(
            element => element.marche_id == id  &&  this.afficherTypeFacture(element.facture_id) == 8
          );
        }
      };
    },

afficherTypeFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.typfacture_id;
      }
      return 0
        }
      };
    },
 





      },
 
      methods:{ 

          ...mapActions('bienService',[  "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",
      "modifierDecompte",
      "ajouterDecompte"
      ]),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
      "ajouterChoixProcedure",
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),
    //  afficherFormulaireModalAjouterMandatDirect(){
    //             this.$router.push({ name: 'AjoutMandatDirect' , params: { id:id: marche_id }})
    //         },
afficherModalAjouterMandatDirect(id) {
      this.$("#exampleModalMandat").modal({
        backdrop: "static",
        keyboard: false
      });
      // this.formDataEngage = this.afficheMarcheEngage(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
        this.formDataFactureDefinitif = this.afficheFactureTableau(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
    },
afficherModalProcedureFacture() {

   if(this.DisponibleBudgetaireApresLiquidation < this.montantMarcheAvecAvenant)
 {
alert("Montant du marche est supperieure au Budget")
}
else{
  this.$("#modalTypeEngagement").modal({
        backdrop: "static",
        keyboard: false
      });
}
    
    },
         afficherModalAjouter(id) {
          
      this.$("#AjouterEngage").modal({
        backdrop: "static",
        keyboard: false
      });
     
       this.formDataFacture = this.afficheFactureTableau(this.macheid).find(recupererObjet => recupererObjet.id == id)
  
   },
  ajouterChoixProcLocal(){

   if(this.formData.tprocedure =="Engagement Bon de Commande"){
 var nouvelObjet = {
      ...this.formData,
      marche_id :this.macheid,
    
       };
      
this.ajouterChoixProcedure(nouvelObjet)
this.formData= {
tprocedure :""
}
this.$("#modalTypeEngagement").modal('hide');
 this.$("#modalFactureAjouterEngagementDirect").modal({
        backdrop: "static",
        keyboard: false
      });
   }
       
      else if(this.formData.tprocedure =="Engagement Direct"){
     var nouvelObjet1 = {
      ...this.formData,
      marche_id :this.macheid,
    
       };
this.ajouterChoixProcedure(nouvelObjet1)
this.formData= {
tprocedure : ""
}
       this.$("#modalTypeEngagement").modal('hide');
 this.$("#modatFactureAjouter").modal({
        backdrop: "static",
        keyboard: false
      });





      
      }
 },
ajouterFactureLocal(){

       if(this.formData1.typfacture_id == 1){
var nouvelObjet = {
      ...this.formData1,
    fournisseur_id: this.AfficherFournisseur_id,
       	prix_propose_ht :this.totalMontantHT,
        prix_propose_ttc :this.montantHTt,
         taux :this.affcherTauxEnCours,
         tva :this.montantTva,
          	ua :this.detail_marche.objetUniteAdministrative.id,
    marche_id : this.macheid,
    objet_facture:this.detail_marche.objet
       };
      var objetDecompte = {
        numero_decompte:this.numeroDecompte,
        marche_id : this.macheid
      }
this.ajouterFacture(nouvelObjet)
this.ajouterDecompte(objetDecompte)
this.$("#modatFactureAjouter").modal('hide');
this.formData1= {
total:0,
total2:0,
total3:0,
total4:0,
total5:0,
total6:0,
total7:0,
total8:0,
total9:0,
total10:0,
       
numero_facture:"",
        objet_facture:"",
       
      
        
        typfacture_id:"",
           prix_propose_ht:"",
        prix_propose_ttc:"",
         date_facture:"",
         ua:"",
           tva:"",
           taux:"",

            designation:"",

 prix_unitaire:"",
         quantite:"",
           montantHT1:"",
           designation2:"",
            prix_unitaire2:"",
             quantite2:"",
         montantHT2:"",
           designation3:"",
           prix_unitaire3:"",
            quantite3:"",
             montantHT3:"",

 designation4:"",
           prix_unitaire4:"",
            quantite4:"",
             montantHT4:"",
              designation5:"",
           prix_unitaire5:"",
            quantite5:"",
             montantHT5:"",
              designation6:"",
           prix_unitaire6:"",
            quantite6:"",
             montantHT6:"",
              designation7:"",
           prix_unitaire7:"",
            quantite7:"",
             montantHT7:"",
              designation8:"",
           prix_unitaire8:"",
            quantite8:"",
             montantHT8:"",
              designation9:"",
           prix_unitaire9:"",
            quantite9:"",
             montantHT9:"",

 designation10:"",
           prix_unitaire10:"",
            quantite10:"",
             montantHT10:"",
 fournisseur_id:"",
 exonere:"",
       

        
      
};
       }
       

    },
    ModifierFactureLocal(){
       
       var nouvelObjet = {
      ...this.formData1,
     
       fournisseur_id: this.AfficherFournisseur_id,
       	prix_propose_ht :this.totalMontantHT,
        prix_propose_ttc :this.montantHTt,
         taux :this.affcherTauxEnCours,
         tva :this.montantTva,
          	ua :this.detail_marche.objetUniteAdministrative.id,
      marche_id : this.macheid,
      objet_facture:this.detail_marche.objet
       };
      
this.modifierFacture(nouvelObjet)

this.$("#modatFactureModifier").modal('hide');


    },
   

formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
.taillemodal45 {
        width: 1500px;
        margin: 0 -750px;
      
    }
       .taillemodal6 {
        width: 1600px;
        margin: 0 -780px;
    }
    .taillemodal61 {
        width: 1500px;
        
    }
</style>