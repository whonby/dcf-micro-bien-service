detail_Execution
<template>
    <div>

<div id="ajouterMP1" class="modal hide tailgrand">
  <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h4>Ajouter Ordre de Paiement</h4>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">REFERENCE DU BENEFICIAIRE</a>
                      </li>
                       
                      <li>
                        <a data-toggle="tab" href="#tab2">SPECIFICATION DE LA DEPENSE</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab3">SITUATION DU CREDIT</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">Autres Information</a>
                      </li> -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                     <div id="tab3" class="tab-pane">
                      <div class="modal-body">
                        <table class="table table-bordered table-striped">
                          <tr>
                            <td>
                
                 <label class="control-label">TrÃ©sor</label>
                 <div class="controls">
                   <input
                     type="text"
                  v-model="formData.montant_tresor"
                      
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Don</label>
                 <div class="controls">
                   <input
                     type="text"
                    v-model="formData.montant_don"
                      
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Emprunt</label>
                 <div class="controls">
                   <input
                     type="text"
                    v-model="formData.montant_emprunt"
                      
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Montant/Depense</label>
                 <div class="controls">
                   <input
                     type="text"
                  :value="sommeMontant"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
                          </tr>
                                  <tr>
                            <td>
                
                 <label class="control-label">CrÃ©dits Autorises</label>
                 <div class="controls">
                   <input
                     type="text"
                  :value="dotationInite(afficherIdLigne(PaiementPersoid))"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Cumuls des OP Anterieurs</label>
                 <div class="controls">
                   <input
                     type="text"
               readonly
                       :value="sommeEgagementLigneTableau(afficherIdLigne(PaiementPersoid))"
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Engagement Actuel</label>
                 <div class="controls">
                   <input
                     type="text"
                     :value="sommeMontant"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Cumuls des Engagements</label>
                 <div class="controls">
                   <input
                     type="text"
                    
                  :value="CumulEngagement"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
                          </tr>
                          <tr>
                             <td>
                
                 <label class="control-label">Disponible</label>
                 <div class="controls">
                   <input
                     type="text"
                  :value="DisponibleBudget"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
                          </tr>
                        </table>
                      </div>
                     </div>
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
            <tr>
              <td>
                
                 <label class="control-label">Exercice en Cours</label>
                 <div class="controls">
                   <input
                     type="text"
                   :value="afficherAnneeBudgetaire(PaiementPersoid)"
                    
                      placeholder="Saisir l'exercice en cours"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
               
                  <label class="control-label">Unite Administrative</label>
                  <div class="controls">
                   
                    <input
         type="text"
         :value="afficherLibelleUa(afficherIdUa(PaiementPersoid))"
         class="span"
         
         readonly
        />
                  </div>
                
              </td>
               <td>
                 
                  <label class="control-label">Ligne</label>
                  <div class="controls">
                   
                    <input
         type="text"
         :value="afficherLibelleLigne(afficherIdLigne(PaiementPersoid))"
         class="span"
         
         readonly
        />
                  </div>
                
              </td>
              <td>
                
                  <label class="control-label">Programme</label>
                  <div class="controls">
                    
                    <input
         type="text"
         :value="afficherLibelleProgramme(afficherIdProgramme(PaiementPersoid))"
         class="span"
         
         readonly
        />
                  </div>
                
              </td>
              
            </tr>
            <tr>
              <td>
                  <label class="control-label">Action</label>
                  <div class="controls">
                   <input
         type="text"
         :value="afficherLibelleAction(afficherIdAction(PaiementPersoid))"
         class="span"
         
         readonly
        />
                </div>
              </td>
              <td>
              
               
                  <label class="control-label">Activite</label>
                  <div class="controls">
                   <input
         type="text"
         :value="afficherLibelleActivite(afficherIdActivite(PaiementPersoid))"
         class="span"
         
         readonly
        />
                  </div>
               
              </td>
               <td>
    
      <label class="control-label">Numero Matricule</label>
      <div class="controls">
        <input
         type="text"
         :value="afficherNumeroMatricule(PaiementPersoid)"
         class="span"
         
         readonly
        />
      </div>
    
  </td>
   <td>
    
      <label class="control-label">References Bancaires</label>
      <div class="controls">
        <input
         type="text"
         :value="afficherReferenceBancaire(PaiementPersoid)"
         class="span"
        readonly
        />
      </div>
    
  </td>
            </tr>
            </table>
          </div>
          
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane">
                      
  <div class="modal-body">
        <table class="table table-bordered table-striped">
           <tr>
             <td>
              
               <div class="control-group">
                  <label class="control-label">Mode de paiemnt</label>
                  <div class="controls">
                   <input
         type="text"
         :value="afficherModePaiementLibelle(afficherModePaiement(PaiementPersoid))"
         class="span"
         
         readonly
        />
                  </div>
                </div>
              </td>
             
                <td>
              
               <div class="control-group">
                  <label class="control-label">Banque</label>
                  <div class="controls">
                   <input
         type="text"
         :value="afficherBanqueLibelle(afficherIdBanque(PaiementPersoid))"
         class="span"
         
         readonly
        />
                  </div>
                </div>
              </td>
                <td>
                <div class="control-group">
                <label class="control-label">Compte de disponibilite affecte</label>
                 <div class="controls">
                <input
                 type="text"
                 :value="afficherCompteUa(PaiementPersoid)"
                 class="span"
                 readonly
                 
               />
              </div>
            </div>
            </td>
               <td>
                <div class="control-group" >
                  <label class="control-label">Mois de Paiement:</label>
      
 
                  <div class="form-group" >
                 <input
         type="text"
         :value="affichermoisdepaiement(PaiementPersoid)"
         class="span"
         
         readonly
        />
               </div>
                 </div>
              </td>
               
           </tr>
           <tr>
            
               <td>
                <div class="control-group">
                  <label class="control-label">Objet de la depense</label>
      
 
                  <div class="controls">
                    <input
                     type="text"
                      :value="afficherObjetdepense(PaiementPersoid)"
                     class="span"
                     readonly
       
                    />
                   </div>
                </div>
              </td>
            
                         <td>
    <div class="control-group">
      <label class="control-label">Pieces Justificative</label>
    
      <div class="controls">
        <input
          type="file"
          class="span"
          placeholder="Saisir fichier joint"
          readonly
        />
      </div>
      </div>
  </td>
   <td>
                <div class="control-group">
                  <label class="control-label">Numéro Ordre paiement</label>
      
 
                  <div class="controls">
                    <input
                     type="text"
                     v-model="formData.numero_ordre_paiement"
                     class="span"
                     
       
                    />
                   </div>
                </div>
              </td>
           </tr>
        </table>
  </div>
                    </div>
                     <!-- <div id="tab3" class="tab-pane">
                      

                    </div> -->
                    <!--ongle 3 -->
                    <!-- <div id="tab3" class="tab-pane">
                    
                      
                    </div> -->
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
          @click.prevent="ajouterOrdrePaiement(formData)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
</div>

                            <table class="table table-bordered table-striped" v-if="PaiementPersoid">
                                            <thead>
                  <tr>
                    <th>Exercice en cours</th>
                    <th title="unite administrative"> ua</th>
                    <th>programme</th>
                    <th>action</th>
                    <th>activitÃ©</th>
                    <th>ligne</th>
                    <!-- <th>Code Fichier</th> -->
                    <th>Objet Depense</th>
                    <th>Mois de Paiement</th>
                    <th>Montant des Salaires</th>
                    <th>Fichier Joint</th>
                      <th>Validation</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="item in listeOrdrePaiement(PaiementPersoid)" :key="item.id">
                                    <td>{{item.exerciceencours || 'Non renseigné'}}</td>
                                    <td>{{item.ua_id || 'Non renseigné'}}</td>
                                     <td>{{item.programme_id || 'Non renseigné'}}</td>
                                    <td>{{item.action_id || 'Non renseigné'}}</td>
                                    
                                     <td>{{item.activite_id || 'Non renseigné'}}</td>
                                    <td>{{item.ligne_id || 'Non renseigné'}}</td>
                                    
                                     <td>{{item.objetdepense || 'Non renseigné'}}</td>
                                    <td>{{item.moisdepaiement || 'Non renseigné'}}</td>
                                    
                                     <td>{{formatageSomme(parseFloat(item.total_general)) || 'Non renseigné'}}</td>
                                    <td>{{item.fichierjoint || 'Non renseigné'}}</td>
                                    <td>{{item.fichierjoint || 'Non renseigné'}}</td>
                                    <td>
      <div class="btn-group">
                            <button @click.prevent="supprimerordrepaiement(item.id)"  class="btn btn-danger " title="Supprimer">
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
   
 listeOrdrePaiement: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.ordre_paiement.filter(idmarche => idmarche.paiementperso_id == id)
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
      "ajouterordrepaiement"
    ]),
        afficherModalAjouterTitre() {
      this.$("#ajouterMP1").modal({
        backdrop: "static",
        keyboard: false
      });
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