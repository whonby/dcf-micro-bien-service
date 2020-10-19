
<template>

<div>
    
    
       <div class="modal-header" >
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Une Facture</h3>
      </div>
      
        
        <table class="table table-bordered table-striped">
         
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Type facture</label>
                  <div class="controls">
                      <select v-model="formData.typfacture_id" class="span4" >
                    
                     <option
                        v-for="typeFact in typeFactures"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select>
                     
                  </div>
                </div>
              </td>
              
               <td>
                <div class="control-group">
                  <label class="control-label">Numero facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.numero_facture"
                    class="span3"
                    
                  />
                </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                 <label class="control-label">Date de la facture</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_facture"
                   
                    class="span3"
                   
                  />
                </div>
                </div>
              </td>
               <td colspan="">
                <div class="control-group">
                   <label class="control-label">Unite administrative</label>
                <div class="controls">
                 <input
                    type="text"
                    :value="macheid"
                   readonly
                    class="span5"
                   
                  />
                </div>
                </div>
              </td>
             </tr>
               <tr>
               <td colspan="2">
                <div class="control-group">
                  <label class="control-label">Objet de la facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.numero_facture"
                    class="span7"
                    
                  />
                </div>
                </div>
              </td>
              
               <td>
                <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="formData.exonere" class="span3">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                
                </div>
              </div>
              </td>
              <td>
                 <div class="control-group">
                <label class="control-label">Fournisseur</label>
                <div class="controls">
                  <input
                    type="text"
                    
                
                    class="span5"
                    readonly
                  />
                  
                </div>
              </div>
              </td>
               
             </tr>
              
            <tr>
               <td colspan="">
                <div class="control-group">
                  <label class="control-label">Objet de la facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.numero_facture"
                    class="span4"
                    
                  />
                  <input
                    type="text"
                    
                   v-model="formData.numero_facture"
                    class="span4"
                    
                  />
                  <input
                    type="text"
                    
                   v-model="formData.numero_facture"
                    class="span4"
                    
                  />
                  <input
                    type="text"
                    
                   v-model="formData.numero_facture"
                    class="span4"
                    
                  />
                  <input
                    type="text"
                    
                   v-model="formData.numero_facture"
                    class="span4"
                    
                  />
                  <input
                    type="text"
                    
                   v-model="formData.numero_facture"
                    class="span4"
                    
                  />
                  <input
                    type="text"
                    
                   v-model="formData.numero_facture"
                    class="span4"
                    
                  />
                  <input
                    type="text"
                    
                   v-model="formData.numero_facture"
                    class="span4"
                    
                  />
                </div>
                </div>
              </td>
              
               <td>
                <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData.prix_unitaire"
                    class="span3"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData.prix_unitaire"
                    class="span3"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData.prix_unitaire"
                    class="span3"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData.prix_unitaire"
                    class="span3"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData.prix_unitaire"
                    class="span3"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData.prix_unitaire"
                    class="span3"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData.prix_unitaire"
                    class="span3"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData.prix_unitaire"
                    class="span3"
                   
                  />
                 
                </div>
              </div>
              </td>
              <td>
                <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData.quantite"
                    class="span3"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData.quantite"
                    class="span3"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData.quantite"
                    class="span3"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData.quantite"
                    class="span3"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData.quantite"
                    class="span3"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData.quantite"
                    class="span3"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData.quantite"
                    class="span3"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData.quantite"
                    class="span3"
                    
                  />
                </div>
              </div>
              </td>
               <td>
                   <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                  
                 
                    class="span5"
                    readonly
                  />
                   <input
                    type="number"
                  
                 
                    class="span5"
                    readonly
                  />
                   <input
                    type="number"
                  
                 
                    class="span5"
                    readonly
                  />
                   <input
                    type="number"
                  
                 
                    class="span5"
                    readonly
                  />
                   <input
                    type="number"
                  
                 
                    class="span5"
                    readonly
                  />
                   <input
                    type="number"
                  
                 
                    class="span5"
                    readonly
                  />
                   <input
                    type="number"
                  
                 
                    class="span5"
                    readonly
                  />
                   <input
                    type="number"
                  
                 
                    class="span5"
                    readonly
                  />
                 
                      
                </div>
              </div>
               </td>
             </tr>
            
      
        </table>
      
      
</div>
</template>
  
<script>

import { mapGetters, mapActions } from "vuex";

// import {admin,dcf,cf,noDCfNoAdmin} from "../../../../src/Repositories/Auth"
//   // import {  ModelListSelect } from 'vue-search-select'
//   //   import 'vue-search-select/dist/VueSearchSelect.css'
// import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
 
  name:'typetext',
  data() {
    return {
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
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        
      },
      editBudgetEclate: {
        
      },
      search: ""
    };
  },
props:["macheid"],
  computed: {
        ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives",
      "jointureUaChapitreSection",
      "budgetEclate",
      "GroupeUaReceptrice",
      "transferts"
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("bienService", ['typeMarches','decomptes','modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

    ...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau4"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire","structures_budgetaires"]),
 
 ...mapGetters('personnelUA', ['all_acteur_depense']),
//  admin:admin,
//       dcf:dcf,
//         cf:cf,
//         noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
    // BudgetEchateParUa() {
    //   const st = this.search.toLowerCase();
    //   return this.budgetEclate.filter(type => {
    //     return (
         
    //       type.uabudget_eclate.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // },

    
    
  },
  created() {
            this.marcheid=this.$route.params.id
   this.detail_Ua = this.transferts.find(
       idmarche => idmarche.unitezone_id == this.$route.params.id
   )
  
},
  methods: {
     ...mapActions("uniteadministrative", [
     
      "ajouterBudgetEclate",
      "modifierBudgetEclate",
      "supprimerBudgetEclate",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
    fonctionTest(){
      if(this.RestantMontantTransferer==0){
        alert("Montant A Eclaté est egal a 0")
        
      }
     
    },
    afficherModalModifierExerciceBudgetaire(id){

 this.$('#exampleModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.formData = this.GroupeUaReceptrice.find(item =>item[0].unitezone_id==id);


        
 },
 test () {
      alert('On a cliqué !');
    },
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // formatageSomme:formatageSomme,
   ajouterUniteAdministrativeLocal() {
     
      if(this.RestantMontantTransferer == 0){
        alert("Pas de montant disponible")
      }
      else{
        var nouvelObjet = {
        ...this.formData,
            annebudgetaire: this.anneeAmort,
            uniteadministrative_id:this.detail_Ua.unitezone_id
         
      };
        this.ajouterBudgetEclate(nouvelObjet);

      this.formData = {
       	uniteadministrative_id:"",
      ligneeconomique_id: "",
      	grandenature_id:"",
      dotation: "",
      };
      }

      
      },
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editBudgetEclate = this.budgetEclate[index];
    },
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      this.modifierTypeTexte(this.editBudgetEclate);
this.$("#modificationModal").modal('hide');
      // this.editBudgetEclate = {
      //   code: "",
      //   libelle: ""
      // };
       
    },
    supprimerBudget(id){
      this.supprimerBudgetEclate(id)
    },
     afficherModalListePersonnel(){
                this.$router.push({ name: 'BudgetEclatePrincipal' })
            },
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style scoped>

.tailgrand12{
  width: 90%;
  margin: 0 -44%;
 
}

</style>
