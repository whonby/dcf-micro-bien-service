detail_Execution
<template>
    <div>



<div id="modalVal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Observation du CF</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">D&eacute;cision CF </label>
                            <div class="controls">
                              <select v-model="editEngagementPerso.decision_cf">
                                <option value="0">Attente</option>
                              <option value="10">Vis&eacute;</option>
                             <option value="11">Diff&eacute;r&eacute;</option>
                             <option value="12">R&eacute;jet&eacute;</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                        
                          <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editEngagementPerso.observation_cf">
                              </textarea>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Observation:</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editEngagementPerso.date_motif"/>
                             
                            </div>
                          </div>
                              
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierEngagementLocal(editEngagementPerso)"
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
                    <th>ligne</th>
                    <!-- <th>Code Fichier</th> -->
                   
                    <th>Montant des Salaires</th>
                   
                      <th>Numero engagement</th>
                     
                       <th>Validation CF</th>
                      <th>Date validation CF</th>
                      
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="(item,index) in listeEngagementPersonnel(afficherIdOrdrePaiement(this.PaiementPersoid))" :key="item.id">
                                    <td>{{item.exercice_budget || 'Non renseign&eacute;'}}</td>
                                   <td>{{afficherLibelleUa(item.ua_id) || 'Non renseign&eacute;'}}</td>
                                     <td>{{afficherLibelleProgramme(item.programme_id) || 'Non renseign&eacute;'}}</td>
                                    <td>{{afficherLibelleAction(item.action_id) || 'Non renseign&eacute;'}}</td>
                                    
                                     <td>{{afficherLibelleActivite(item.activite_id) || 'Non renseign&eacute;'}}</td>
                                    <td>{{afficherLibelleLigne(item.ligne_id) || 'Non renseign&eacute;'}}</td>
                                    
                                    
                                     <td>{{formatageSomme(parseFloat(item.total_general)) || 'Non renseign&eacute;'}}</td>
                                    
                                   
                  
                    <td>{{item.	numero_engage || 'Non renseign&eacute;'}}</td>
                                       <td>
                       <button v-if="item.decision_cf == 10"  class="btn  btn-success"  @click="afficherModalObservationCF(index)" >                        
                     
                      <span    >Vis&eacute;</span>
                      
                      </button>
                       <button v-else-if="item.decision_cf == 11" class="btn  btn-warning" @click="afficherModalObservationCF(index)">                        
                     
                      
                       <span  >Diff&eacute;r&eacute;</span>
                      
                    
                      </button>
                        <button v-else-if="item.decision_cf == 12" class="btn  btn-danger" @click="afficherModalObservationCF(index)">                        
                     
                      
                       <span  >R&eacute;jet&eacute;</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationCF(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                    <td>{{formaterDate(item.date_motif) || 'Non renseign&eacute;'}}</td>
                                    <td>
                                         
      <div class="btn-group">
          <button class="btn "   title="Ajouter Engagement" v-if="item.decision_cf == 6" @click="afficherModalEngagement(item.id)">
                        <span>
                          <i class="icon   icon-folder-close"></i>
                        </span>
                      </button>
                            <button @click.prevent="supprimerEngagement(item.id)"  class="btn btn-danger " title="Supprimer">
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
         editOrdrePaiement:{},
         formNumeroEngagemt:{
             engagemtPero:"perso"
         },
         formDataEngagementPerso:{},
         editEngagementPerso:{engagemtPero:"perso"},
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
 "banqueUa"
   
   
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
    admin:admin,
      dcf:dcf,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

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
...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel","ordre_paiement"]),
...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   
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
//  listeEngagementPersonnel: function () {
//                 return id => {
//                     if (id != "") {
//                       // console.log("Marche leste acte effect finnancier")
//                         return this.engagements.filter(idmarche => idmarche.ordrepaiemnet_id == id)
//                     }
//                 }
//             },

 listeEngagementPersonnel() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.engagements.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
             return id => {
                    if (id != "") {
                     
                        return this.colect.filter(idmarche => idmarche.ordrepaiemnet_id == id)
                    }
                }
            
        }
 return id => {
                    if (id != "") {
                     
                        return this.engagements.filter(idmarche => idmarche.ordrepaiemnet_id == id)
                    }
                }
     

    },





 CumulEngagement() {
      const val = parseFloat(this.sommeEgagementLigneTableau(this.afficherIdLigne(this.PaiementPersoid))) + parseFloat(this.sommeMontant);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },

 CumulEngagement2() {
      const val = parseFloat(this.sommeEgagementLigneTableau(this.afficherIdLigne(this.PaiementPersoid))) + parseFloat(this.sommeMontantEgagement);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
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
     ModifierSommeMontantEgagement() { 
      const val = parseFloat(this.editEngagementPerso.montant_tresor) + parseFloat(this.editEngagementPerso.montant_don) + parseFloat(this.editEngagementPerso.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },
     sommeMontantEgagementPerso() { 
      const val = parseFloat(this.formDataEngagementPerso.montant_tresor) + parseFloat(this.formDataEngagementPerso.montant_don) + parseFloat(this.formDataEngagementPerso.montant_emprunt);
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
     ...mapActions("bienService", [
                "getEngagement",
                "supprimerEngagement",
                "modifierEngagement",
                "ajouterEngagement",
                "ajouterMandat",
                "modifierMandat",
                "supprimerMandat",
                
               
            ]),
        afficherModalAjouterTitre() {
      this.$("#ajouterMP1").modal({
        backdrop: "static",
        keyboard: false
      });
    },
afficherModalEngagement(id) {
      this.$("#ModalEngagement").modal({
        backdrop: "static",
        keyboard: false
      });
      // this.formDataEngage = this.afficheMarcheEngage(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
        this.formDataEngagementPerso = this.listeEngagementPersonnel(this.afficherIdOrdrePaiement(this.PaiementPersoid)).find(recupererObjet => recupererObjet.id == id)
    },
afficherModalObservationCF(index) {
      this.$("#modalVal").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editEngagementPerso = this.listeEngagementPersonnel(this.afficherIdOrdrePaiement(this.PaiementPersoid))[index];
      
      },
    ajouterOrdrePaiement() {
      var nouvelObjet = {
        ...this.formData,
         activite_id: this.afficherIdActivite(this.PaiementPersoid),
       programme_id:this.afficherIdProgramme(this.PaiementPersoid),
       action_id:this.afficherIdAction(this.PaiementPersoid),
       ua_id: this.afficherIdUa(this.PaiementPersoid),
        moisdepaiement: this.afficherModePaiement(this.PaiementPersoid),
       ligne_id:this.afficherIdLigne(this.PaiementPersoid),
       objetdepense:this.afficherObjetdepense(this.PaiementPersoid),
         exerciceencours: this.afficherAnneeBudgetaire(this.PaiementPersoid),
         imputationBudget:this.afficheImputation(this.PaiementPersoid),
        
         numeromatricule :this.afficherNumeroMatricule(this.PaiementPersoid),
         referencebancaire :this.afficherReferenceBancaire(this.PaiementPersoid),
         banque_id :this.afficherIdBanque(this.PaiementPersoid),
         rib:this.afficherCompteUa(this.PaiementPersoid),
         total_general:this.sommeMontant,
           paiementperso_id:this.PaiementPersoid
       
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

  modifierEngagementLocal(){

 var nouvelObjet = {
      ...this.editEngagementPerso,
   exercice_budget :this.afficherAnneeBudgetaire(this.PaiementPersoid),
         total_general :this.ModifierSommeMontantEgagement,
       ligne_id:this.afficherIdLigne(this.PaiementPersoid),
      
       numero_engage:this.editEngagementPerso.numero_engage,
programme_id:this.afficherIdProgramme(this.PaiementPersoid),
action_id:this.afficherIdAction(this.PaiementPersoid),
activite_id:this.afficherIdActivite(this.PaiementPersoid),
  ua_id:this.afficherIdUa(this.PaiementPersoid),
  ordrepaiemnet_id:this.afficherIdOrdrePaiement(this.PaiementPersoid),
  marchetype:this.editEngagementPerso.marchetype
       };

 
  this.modifierEngagement(nouvelObjet)
 
this.$("#modalVal").modal('hide');
this.formDataEngagementPerso= {

         
        
            
};

     
    

    },

 formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

ajouterEngagementLocal(){

 var nouvelObjet = {
      ...this.formDataEngagementPerso,
   exercice_budget :this.afficherAnneeBudgetaire(this.PaiementPersoid),
         total_general :this.sommeMontantEgagementPerso,
       ligne_id:this.afficherIdLigne(this.PaiementPersoid),
      
       numero_engage:this.formNumeroEngagemt.numero_engage,
programme_id:this.afficherIdProgramme(this.PaiementPersoid),
action_id:this.afficherIdAction(this.PaiementPersoid),
activite_id:this.afficherIdActivite(this.PaiementPersoid),
  ua_id:this.afficherIdUa(this.PaiementPersoid),
  ordrepaiemnet_id:this.afficherIdOrdrePaiement(this.PaiementPersoid),
  marchetype:this.formNumeroEngagemt.engagemtPero
       };

 
  this.ajouterEngagement(nouvelObjet)
 
this.$("#ModalEngagement").modal('hide');
this.formDataEngagementPerso= {

 numero_engage:"",
  total_general:0,
       montant_tresor:0,
montant_don:0,
montant_emprunt:0,


        exercice_budget:"",
      
         
        
            
};

     
    

    },







     formatageSomme:formatageSomme,
    }

    
    
}
</script>
<style  scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}
</style>