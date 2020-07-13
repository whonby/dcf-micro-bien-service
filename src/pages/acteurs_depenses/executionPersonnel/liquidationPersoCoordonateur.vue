detail_Execution
<template>
    <div>
<div id="modalLiquidationOrdonnateur" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Observation ordonnateur</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <!-- <div class="control-group">
                            <label class="control-label">D&eacute;cision ordonnateur </label>
                            <div class="controls">
                              <select v-model="editLiquidationOrdonnateur.decision_ordonnateur">
                                <option value="0">Attente</option>
                              <option value="2011">Vis&eacute;</option>
                             <option value="2111">Diff&eacute;r&eacute;</option>
                             <option value="2211">R&eacute;jet&eacute;</option>
                            
    
    </select>
                           
                            </div>
                          </div> -->
                        
                          <div class="control-group">
                            <label class="control-label">Observation ordonnateur</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editLiquidationOrdonnateur.observation_ordonnateur">
                              </textarea>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Observation:</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editLiquidationOrdonnateur.date_ordonnateur"/>
                             
                            </div>
                          </div>
                              
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierLiquidationPerso(editLiquidationOrdonnateur)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>


                            <table class="table table-bordered table-striped" v-if="PaiementPersoid">
                                            <thead>
                   <tr>
                    <th>Exercice en cours</th>
                    <th title="unite administrative"> ua</th>
                    <th>programme</th>
                    <th>action</th>
                    <th>activit&eacute;</th>
                    <th>Ligne budgetaire</th>
                    <th>Montant autoris&eacute;</th>
                       <!-- <th>Decision Emetteur</th> -->
                      <th>Date Decision</th>
                      <!-- <th>Decision ordonnateur</th> -->
                      <th>Date ordonnateur</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="(item,index) in listeLiquidationPerso(PaiementPersoid)" :key="item.id">
                                    <td>{{item.exo_id || 'Non renseign&eacute;'}}</td>
                                   <td>{{afficherLibelleUa(item.ua_id) || 'Non renseign&eacute;'}}</td>
                                     <td>{{afficherLibelleProgramme(item.programme_id) || 'Non renseign&eacute;'}}</td>
                                    <td>{{afficherLibelleAction(item.action_id) || 'Non renseign&eacute;'}}</td>
                                    
                                     <td>{{afficherLibelleActivite(item.activite_id) || 'Non renseign&eacute;'}}</td>
                                    <td>{{afficherLibelleLigne(item.plan_budgetaire_id) || 'Non renseign&eacute;'}}</td>
                                     <td>{{formatageSomme(parseFloat(afficherMontantAutorise(item.ordrepaiemnet_id))) || 'Non renseign&eacute;'}}</td>
                                    
                                   
                  
                    
                                       <!-- <td>
                       <button v-if="item.decision_emetteur == 201"  class="btn  btn-success"  @click="afficherModalObservationEmetteur(index)" >                        
                     
                      <span    >Vis&eacute;</span>
                      
                      </button>
                       <button v-else-if="item.decision_emetteur == 211" class="btn  btn-warning" @click="afficherModalObservationEmetteur(index)">                        
                     
                      
                       <span  >Diff&eacute;r&eacute;</span>
                      
                    
                      </button>
                        <button v-else-if="item.decision_emetteur == 221" class="btn  btn-danger" @click="afficherModalObservationEmetteur(index)">                        
                     
                      
                       <span  >R&eacute;jet&eacute;</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationEmetteur(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td> -->
                    <td>{{formaterDate(item.date_emetteur) || 'Non renseign&eacute;'}}</td>
                                  
                                         
                                                      <!-- <td>
                       <button v-if="item.decision_ordonnateur == 2011"  class="btn  btn-success"  @click="afficherModalObservationordonnateur(index)" >                        
                     
                      <span    >Vis&eacute;</span>
                      
                      </button>
                       <button v-else-if="item.decision_ordonnateur == 2111" class="btn  btn-warning" @click="afficherModalObservationordonnateur(index)">                        
                     
                      
                       <span  >Diff&eacute;r&eacute;</span>
                      
                    
                      </button>
                        <button v-else-if="item.decision_ordonnateur == 2211" class="btn  btn-danger" @click="afficherModalObservationordonnateur(index)">                        
                     
                      
                       <span  >R&eacute;jet&eacute;</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationordonnateur(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td> -->
                    <td>{{formaterDate(item.date_ordonnateur) || 'Non renseign&eacute;'}}</td>
                                    <td>
                                       <button  class="btn  btn-success" @click="afficherModalObservationordonnateur(index)">
                        <span>
                          <i class="icon icon-ok"></i>
                        </span>
                      </button>   
      <div class="btn-group">
        
                            <button @click.prevent="supprimerLiquidation(item.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span>
                            </button>
                        </div>
</td>
                                </tr>
                </tbody>
                                        </table>
    <!--  end -->

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  />
    </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import { formatageSomme } from "../../../../src/Repositories/Repository";
  import {admin,dcf} from "../../../Repositories/Auth"
  import moment from "moment";
export default {
    props:["PaiementPersoid","exerciceBudgetaire"],
    data(){
        return{
fabActions: [
        {
          name: "cache",
          icon: "add"
        }
         ],  
         
            formData: {
  // 
  
      banque_id:"",
      
   programme_id:"",
   numero_ordre_paiement:"",
   action_id:"",
   activite_id:"",
   ua_id: "",
   
  referencebancaire:"",
   fichierjoint:"",
  
  rib:"",
 
  
  montant_tresor:0,
  montant_don:0,
  montant_emprunt:0,
  ligne_id:"",



 },
editOrdrePaiement:{},
editLiquidationOrdonnateur:{},
formNumeroEngagemt:{}
            

        }
        
    },
    created(){

    },
    computed:{
        ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
 "banqueUa",
 "liquidation"
   
   
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
 ...mapGetters("bienService", ["typeMarches",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),
    admin:admin,
      dcf:dcf,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel","ordre_paiement"]),
...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   
 listeLiquidationPerso: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.liquidation.filter(idmarche => idmarche.paiementperso_id == id)
                    }
                }
            },


// listeLiquidationPerso() {
      


//         if (!this.admin || !this.dcf){
//             let colect=[];
//             this.liquidation.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
               
//             })
//              return id => {
//                     if (id != "") {
                     
//                         return this.colect.filter(idmarche => idmarche.paiementperso_id == id)
//                     }
//                 }
            
//         }
//  return id => {
//                     if (id != "") {
                     
//                         return this.liquidation.filter(idmarche => idmarche.paiementperso_id == id)
//                     }
//                 }
     

//     },




 CumulEngagement() {
      const val = parseFloat(this.sommeEgagementLigneTableau(this.afficherIdLigne(this.PaiementPersoid))) + parseFloat(this.sommeMontant);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
     CumulEngagementModification() {
      const val = parseFloat(this.sommeEgagementLigneTableau(this.afficherIdLigne(this.PaiementPersoid))) + parseFloat(this.sommeMontantEgagement);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
  sommeMontantEgagement() { 
      const val = parseFloat(this.editOrdrePaiement.montant_tresor) + parseFloat(this.editOrdrePaiement.montant_don) + parseFloat(this.editOrdrePaiement.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },


 DisponibleBudget() {
      const val = parseFloat(this.dotationInite(this.afficherIdLigne(this.PaiementPersoid))) + parseFloat(this.sommeEgagementLigneTableau(this.afficherIdLigne(this.PaiementPersoid)));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
   sommeEgagementLigneTableau: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.ligne_budgetaire_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
   
   
   
   
   dotationInite: function () {
                return id => {
                    if (id != "" && id != null) {
                        const qtereel = this.getPersonnaliseBudgetGeneralParPersonnel.find(normeEquipe => normeEquipe.economique_id == id);
                    if (qtereel) {
        return qtereel.Dotation_Initiale;
      }
      return 2
                   }
                }
            },     
   sommeMontant() { 
      const val = parseFloat(this.formData.montant_tresor) + parseFloat(this.formData.montant_don) + parseFloat(this.formData.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },
     afficherAnneeBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exerciceencours;
      }
      return 0
        }
      };
    },
     afficherIdUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ua_id;
      }
      return 0
        }
      };
    },
     afficherLibelleUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     afficherIdLigne() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ligne_id;
      }
      return 0
        }
      };
    },
    afficherLibelleLigne() {
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
     afficherMontantAutorise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ordre_paiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.total_general;
      }
      return 0
        }
      };
    },
    afficherIdProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.programme_id;
      }
      return 0
        }
      };
    },
      afficherLibelleProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },
    afficherIdAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.action_id;
      }
      return 0
        }
      };
    },
     afficherLibelleAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauAction.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },
    afficherIdActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_id;
      }
      return 0
        }
      };
    },
     afficherLibelleActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },
     afficherNumeroMatricule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numeromatricule;
      }
      return 0
        }
      };
    },
     afficherReferenceBancaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.referencebancaire;
      }
      return 0
        }
      };
    },
    afficherModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.modepaiement_id;
      }
      return 0
        }
      };
    },
    afficherModePaiementLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficherIdBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.banque_id;
      }
      return 0
        }
      };
    },
     afficherBanqueLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.banques.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficherCompteUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.rib;
      }
      return 0
        }
      };
    },
    affichermoisdepaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.moisdepaiement;
      }
      return 0
        }
      };
    },
    afficherObjetdepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objetdepense;
      }
      return 0
        }
      };
    },
     afficherIdOrdrePaiement() {
      return id2=> {
        if (id2!= null && id2!= "") {
           const qtereel = this.ordre_paiement.find(qtreel => qtreel.paiementperso_id == id2);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
    afficheImputation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParPersonnel.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.codebudget;
      }
      return 0
        }
      };
    },
    },
    methods:{
       ...mapActions("personnelUA", [
      "supprimerordrepaiement",
      "ajouterordrepaiement",
      "modifierordrepaiement"
    ]),
    ...mapActions("uniteadministrative", [              
                "modifierMontantBudgetaire",
                "ajouterRealiteServiceFait",
                "modifierRealiteServiceFait",
                "ajouterLiquidation",
                "modifierLiquidation",
                "supprimerLiquidation",
                "supprimerRealiteServiceFait"
            ]),
        afficherModalAjouterTitre() {
      this.$("#ajouterMP1").modal({
        backdrop: "static",
        keyboard: false
      });
    },

afficherModalObservationordonnateur(index) {
      this.$("#modalLiquidationOrdonnateur").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editLiquidationOrdonnateur = this.listeLiquidationPerso(this.PaiementPersoid)[index];
      
      },
    ajouterOrdrePaiement() {
      var nouvelObjet = {
        ...this.formData,
         activite_id: this.afficherIdActivite(this.PaiementPersoid),
       programme_id:this.afficherIdProgramme(this.PaiementPersoid),
       action_id:this.afficherIdAction(this.PaiementPersoid),
       ua_id: this.afficherIdUa(this.PaiementPersoid),
       moisdepaiement:this.affichermoisdepaiement(this.PaiementPersoid),
        modepaiement_id:this.afficherModePaiement(this.PaiementPersoid),
       ligne_id:this.afficherIdLigne(this.PaiementPersoid),
       objetdepense:this.afficherObjetdepense(this.PaiementPersoid),
         exerciceencours: this.afficherAnneeBudgetaire(this.PaiementPersoid),
         imputationBudget:this.afficheImputation(this.PaiementPersoid),
        
         numeromatricule :this.afficherNumeroMatricule(this.PaiementPersoid),
         referencebancaire :this.afficherReferenceBancaire(this.PaiementPersoid),
         banque_id :this.afficherIdBanque(this.PaiementPersoid),
         rib:this.afficherCompteUa(this.PaiementPersoid),
         total_general:this.sommeMontant,
           paiementperso_id:this.PaiementPersoid,
           
       
      };
     
    
     this.ajouterordrepaiement(nouvelObjet)
      this.formData = {
        banque_id:"",
      
   programme_id:"",
   numero_ordre_paiement:"",
   action_id:"",
   activite_id:"",
   ua_id: "",
   
  referencebancaire:"",
   fichierjoint:"",
  
  rib:"",
 
  
  montant_tresor:0,
  montant_don:0,
  montant_emprunt:0,
  ligne_id:"",


 
       
      };
    },
     modifierLiquidationPerso() {
     
      var objetLiquidation = {
          ...this.editLiquidationOrdonnateur,
         numero_demande : this.editLiquidationOrdonnateur.numero_engage,
        	exo_id:this.afficherAnneeBudgetaire(this.PaiementPersoid),
 imputation_budgetaire :this.CodeBudgetaire,
programme_id:this.afficherIdProgramme(this.PaiementPersoid),
action_id:this.afficherIdAction(this.PaiementPersoid),
activite_id:this.afficherIdActivite(this.PaiementPersoid),
  ua_id:this.afficherIdUa(this.PaiementPersoid),

plan_budgetaire_id:this.afficherIdLigne(this.PaiementPersoid),
   ordrepaiemnet_id:this.afficherIdOrdrePaiement(this.PaiementPersoid),
  marchetype:this.editLiquidationOrdonnateur.marchetype,

	paiementperso_id:this.PaiementPersoid,
       };
    
     this.modifierLiquidation(objetLiquidation)
     
    },
     formatageSomme:formatageSomme,

     formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    }

    
    
}
</script>
<style  scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}
</style>