
<template>
   <div>
<div id="DossierMandatvisO" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision CF</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                            <label class="control-label">Décision CF </label>
                            <div class="controls">
                              <select v-model="editDossierMandat.decision_cf" class="span4">
                                <option value=""></option>
                              <option value="8">Visé</option>
                              <option value="9">Visé avec Observation</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            <option value="0">Attente</option>
    
    </select>
                           
                            </div>
                          </div>
            </td>
              <td>
                    <div class="control-group">
                            <label class="control-label">Famille de Motif </label>
                            <div class="controls">
                               <select v-model="editDossierMandat.famille_motif_cf" class="span4" :readonly="griserFamilleEtMotif">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementParent" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
                 <td>
                    <div class="control-group">
                            <label class="control-label">Motif</label>
                            <div class="controls">
                               <select v-model="editDossierMandat.motif_cf" class="span4" :readonly="griserFamilleEtMotif">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementEnfant(editDossierMandat.famille_motif_cf)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
          </tr>
               <tr>
                  <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Autres Motif</label>
                            <div class="controls">
                              <textarea  class="span8" row = "6" v-model="editDossierMandat.autre_motif_cf" :readonly="griserAutreMotif" >
                              </textarea>
                            </div>
                          </div>
                       </td>
                  <td>
                               <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                              
                               <input type="date" class="span4"  v-model="editDossierMandat.date_motif" />
                              
                            </div>
                          </div>
                           </td>
                 </tr>             
                   <tr>
                     <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span8" row = "6" v-model="editDossierMandat.observation" :readonly="griserObservation">
                              </textarea>
                            </div>
                          </div>
                       </td>
                        <td colspan="">
                        <div class="control-group">
                            <label class="control-label">Nom et prenoms cf</label>
                            <div class="controls">
                              <input type="text" class="span4"   readonly/>
                            </div>
                          </div>
                       </td>
                       
                       </tr>  
                       <tr>    
                        
                       <!-- <td colspan="">
                        <div class="control-group">
                            <label class="control-label">Nom et prenoms du CF</label>
                            <div class="controls">
                              

                            
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="listeCF"
                                                   v-model="controlleur_fin"
                                                   option-value="id"
                                                   option-text="name"
                                                   placeholder="Controleur financier"
                                >

                                </model-list-select>
                            
                            </div>
                          </div>
                       </td> -->
                       <!-- <td>
                                  <div class="control-group">
                            <label class="control-label">Joint Fiche Op </label>
                            <div class="controls">
                               <input type="text" class="span4" readonly :value=" afficherLibelleFoctionBudgetaire(afficherIdFoctionBudgetaire(editObservationAgentCf.nom_service_beneficiaire))"/>
                             
                              <input type="file" class="span4" />
                             
                            </div>
                          </div>
                           </td> -->
                          </tr> 
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ModifierDosssierMandat()"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div> 
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>N°demande Engagement</th>
                   <th v-if="detail_marche1.type_engagement_id!='Régie davances-reservation des crédit'">N° de Mandat</th>
                    <th v-if="detail_marche1.type_engagement_id=='Régie davances-reservation des crédit'">N°OP Systeme</th>
                    <th>Object de la depense</th>
                    <th>Montant autorisé</th>
                    <!-- <th>Cumul des Engagements</th> -->
                      <th>Montant Liquide</th>
                      
                       <th>Decision</th>
                        <!-- <th>Voir Détail</th>
                        <th>Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeDossierMandat(macheid)" :key="type.id">
                    <td style="color:red;font-weight: bold;text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{recuppererNumeroDemande(type.demande_engagement_id) || 'Non renseigné'}}</td>
                    <td style="color:red;font-weight: bold;text-align:center" v-if="detail_marche1.type_engagement_id!='Régie davances-reservation des crédit'"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.numero_mandat || 'Non renseigné'}}</td>
                    <td style="color:red;font-weight: bold;text-align:center" v-else
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.numero_op || 'Non renseigné'}}</td>
                    <td 
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{recuppererOrdreDepense(type.demande_engagement_id) || 'Non renseigné'}}</td>
                    <td style="color:red;font-weight: bold;text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formatageSomme(parseFloat(CreditAutorise(recuppererLigneEconomique(type.demande_engagement_id)))) || 'Non renseigné'}}</td>
                    <td style="color:red;font-weight: bold;text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formatageSomme(parseFloat(CumulDemande(type.demande_engagement_id))) || 'Non renseigné'}}</td>
                    <!-- <td
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.demande_engagement_id || 'Non renseigné'}}</td> -->
                    
                    
                   
                                       
                    <td >
                        <button v-if="type.decision_cf == 8"  class="btn  btn-success" @click="afficheDecisionCf(type.id)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning" @click="afficheDecisionCf(type.id)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger" @click="afficheDecisionCf(type.id)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="type.decision_cf == 9"  class="btn  btn-success" @click="afficheDecisionCf(type.id)" >                        
                     
                      <span>Visé avec observation</span>
                      
                      </button>
                     <button v-else class="btn  btn-info" @click="afficheDecisionCf(type.id)" >                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                    </td>
                   <!-- <td>
                      <router-link :to="{ name: 'voitDetailBonCmmande', params: { id: type.id }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="  icon-eye-open" style="font-weight: bold;"> Voir Détail</i></span>
                   </router-link> 
                    </td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerDemandeEngagement(type.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button>
                    </td> -->
                  </tr>
                  <!-- <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                    
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Total</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(SommeDossierMandat(macheid)))}}</td>
                    <td></td>
                    <td></td>
                   <td></td>
                   
                  </tr> -->
                </tbody>
              </table>
             <notifications/>
            </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
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
      editDossierMandat1: {
      motifcf:""
      },
      
      editDossierMandat: {
      
      },
      search: ""
    };
  },
 props:["macheid"],
 created() {
            this.marcheid=this.$route.params.id
   this.detail_marche1 = this.gettersDemandeEngagement.find(
       idmarche => idmarche.id == this.$route.params.id
         )
         
},
  computed: {
    ...mapGetters("bienService", ["gettersDossierLiquidation","gettersDossierMandat","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
   
 ...mapGetters("personnelUA", ["FichierJoinDmdEngagement","all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    

 
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
   
     ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision', 
  'plans_Decision']),
   
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
        griserObservation(){
  return this.editDossierMandat.decision_cf != 9
},
    griserFamilleEtMotif(){
  return this.editDossierMandat.decision_cf != 3 && this.editDossierMandat.decision_cf != 2
},
griserAutreMotif(){
  return this.editDossierMandat1.motif != 237 
},
 AffichierElementEnfant() {
      
      return id => {
        if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.parent == id);
        }
      };
    },

RecupererNiveau3StructureDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structuresDecision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
     AffichierElementParent() {
      
     
          return this.plans_Decision.filter(element => this.RecupererNiveau3StructureDecision(element.structure_motif_decission_id) == 3);
      
    },
  afficheFichierJoint() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.FichierJoinDmdEngagement.find(qtreel => qtreel.numero_demande_engagement == id);

      if (qtereel) {
        return qtereel.fichier;
      }
      return ""
        }
      };
    },

ListePieceJustificative() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id);

        }
      };
    },
  

   listeDossierMandat() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDossierMandat.filter(qtreel => qtreel.demande_engagement_id == id && this.typeProcedure(qtreel.demande_engagement_id) == "Engagement direct" && qtreel.decision_cf==9);

        }
      };
    },
    SommeDossierMandat() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDossierMandat.filter(qtreel => this.ua(qtreel.ua_id) == id && this.typeProcedure(qtreel.demande_engagement_id) == "Engagement direct" && qtreel.decision_cf==9).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);

        }
      };
    },
    ua() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ua_id;
      }
      return ""
        }
      };
    },
    typeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_procedure_id;
      }
      return ""
        }
      };
    },
     recuppererNumeroDemande() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_dmd_combine;
      }
      return ""
        }
      };
    },
    CumulDemande: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.gettersDemandeEngagement.filter(normeEquipe => normeEquipe.id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },

decision_Cf_liquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierMandat.find(qtreel => qtreel.demande_engagement_id == id);

      if (qtereel) {
        return qtereel.deci;
      }
      return ""
        }
      };
    },



        CreditAutorise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return ""
        }
      };
    },
     recuppererOrdreDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet_depense;
      }
      return ""
        }
      };
    },
     recuppererLigneEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ligne_economique_id;
      }
      return ""
        }
      };
    },

    recupereIdDemande() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return ""
        }
      };
    },
    recupereIdLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierLiquidation.find(qtreel => qtreel.dmd_engagement_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return ""
        }
      };
    },
  },
  methods: {
     ...mapActions("bienService", [
      "ajouterPieceJustificative",
      "modifierPieceJustificative",
      "supprimerPieceJustificative",
      "ajouterDemandeEngagement",
      "modifierDossierMandat",
      "modifierDemandeEngagement",
      "modifierDossierLiquidation"
     
    ]),
     ModifierDosssierMandat() {
       
       var modifierLiquidation={
          
         id:this.recupereIdLiquidation(this.macheid),
         	decision_cf:this.editDossierMandat.decision_cf,
           famille_motif_cf:this.editDossierMandat.famille_motif_cf,
           autre_motif_cf:this.editDossierMandat.autre_motif_cf,
           	motif_cf:this.editDossierMandat.motif_cf,
             date_motif:this.editDossierMandat.date_motif,
             observation:this.editDossierMandat.observation
       }
        var modifierDemande={
          
         id:this.recupereIdDemande(this.macheid),
         	decision_cf:this.editDossierMandat.decision_cf,
           famille_motif_cf:this.editDossierMandat.famille_motif_cf,
           autre_motif_cf:this.editDossierMandat.autre_motif_cf,
           	motif_cf:this.editDossierMandat.motif_cf,
             date_motif:this.editDossierMandat.date_motif,
             observation:this.editDossierMandat.observation
       }
       this.modifierDossierLiquidation(modifierLiquidation)
       this.modifierDemandeEngagement(modifierDemande)
      this.modifierDossierMandat(this.editDossierMandat);
this.$("#DossierMandatvisO").modal('hide');
     
       
    },
    formatageSomme:formatageSomme,
    afficherModalModifierTypeTexte(id) {

      this.$router.push({
        path: "/ModifierDemandeEngagement/" + id
      });
    },
    afficheDecisionCf(id) {
      this.$("#DossierMandatvisO").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editDossierMandat = this.listeDossierMandat(this.macheid).find(item=>item.id==id);
    },
  }
};
</script>
<style scoped>

.tailgrand{
  width: 65%;
  margin: 0 -38%;
}

</style>
