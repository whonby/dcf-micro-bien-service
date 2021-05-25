
<template>
  <div>
   <div id="demandeVise12" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision CF</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                            <label class="control-label">Décision CF</label>
                            <div class="controls">
                              <select v-model="EditLiquidation.decision_cf" class="span4">
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
                            <label class="control-label">Famille de Motif</label>
                            <div class="controls">
                               <select v-model="EditLiquidation.famille_motif_cf" class="span4" >
                                 <option value="0"></option>
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
                               <select v-model="EditLiquidation.motif_cf" class="span4" >
                                 <option value="0"></option>
                                <option v-for="varText in AffichierElementEnfant(EditLiquidation.famille_motif_cf)" :key="varText.id"
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
                              <textarea  class="span8" row = "6" v-model="EditLiquidation.autre_motif_cf" :readonly="griserAutreMotif" >
                              </textarea>
                            </div>
                          </div>
                       </td>
                  <td>
                               <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                             
                               <input type="date" class="span4"  v-model="EditLiquidation.date_motif" />
                              
                            </div>
                          </div>
                           </td>
                 </tr>             
                   <tr>
                     <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span8" row = "6" v-model="EditLiquidation.observation" :readonly="griserObservation">
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
                        
                       
                          </tr> 
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal()"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div> 
    
    
    <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                  <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Année budgétaire</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°demande</th>
                              <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Bon de commande</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°Liquidation</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Date Liquidation</th>
                   <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Type Engagement </th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Objet de la depense</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Montant Liquidé</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Decision CF</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff" colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeLiquidationParUa(macheid)" :key="type.id">
                                      <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{AfficheExeciceBudgetaire(type.dmd_engagement_id) || 'Non renseigné'}}</td>
                                       
                    <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{AfficheNumeroDemande(type.dmd_engagement_id) || 'Non renseigné'}}</td>
                     <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{NumeroBonCommande(type.dmd_engagement_id) || 'Non renseigné'}}</td>
                              <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{type.numero_liquidation || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{formaterDate(type.date_liquidation) || 'Non renseigné'}}</td>
                     <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{recupererLibelleTypeDepense(AfficheTypeEngagement(type.dmd_engagement_id)) || 'Non renseigné'}}</td>
                   <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{AfficheLibelleEngagement(type.dmd_engagement_id) || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important;text-align:center" @dblclick="afficherModalModifierTypeTexte(type.id)">{{formatageSomme(parseFloat(AfficheMontantEngage(type.dmd_engagement_id))) || 'Non renseigné'}}</td>
                  <td >
                        <button v-if="type.decision_cf == 8"  class="btn  btn-success" @click="afficheDecisionCf(type.id)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning" @click="afficheDecisionCf(type.id)">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger" @click="afficheDecisionCf(type.id)">                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="type.decision_cf == 9"  class="btn  btn-success" @click="afficheDecisionCf(type.id)">                        
                     
                      <span>Visé avec observation</span>
                      
                      </button>
                     <button v-else class="btn  btn-info" @click="afficheDecisionCf(type.id)">                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                    </td>
                    <td>
                      <router-link :to="{ name: 'VoirModaliteExecution', params: { id: type }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="icon-eye-open" style="font-weight: bold;"> Detail</i></span>
                   </router-link> 
                    </td>
                   
                   <td>
                      <button class="btn btn-danger" @click="supprimerDemandeEngagement(type.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
  </div>
</template>
  
<script>
import { mapGetters,mapActions } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
import moment from "moment";
export default {
  name:'',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      search: "",
      EditLiquidation:{},
    };
  },
props:["macheid"],
  computed: {
    ...mapGetters("uniteadministrative", ["typeTextes"]),

 ...mapGetters("bienService", ["gettersBonCommande","gettersProcedureTypeDepense","gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
  ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision', 
  'plans_Decision']),
  griserObservation(){
  return this.EditLiquidation.decision_cf != 9
},
    griserFamilleEtMotif(){
  return this.EditLiquidation.decision_cf != 3 && this.EditLiquidation.decision_cf != 2
},
griserAutreMotif(){
  return this.EditLiquidation.motif != 237 
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
  
  NumeroBonCommande() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersBonCommande.find(qtreel => qtreel.dmd_engagement_id == id);

      if (qtereel) {
        return qtereel.numero_bon_commande;
      }
      return 0
        }
      };
    },
     listeLiquidationParUa() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDossierLiquidation.filter(qtreel => this.idUa(qtreel.dmd_engagement_id) == id &&  this.AfficheTypeProcedure(qtreel.dmd_engagement_id) == 7  && qtreel.decision_cf == 0);

        }
      };
    },
      AfficheTypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_procedure_id;
      }
      return 0
        }
      };
    },
    idUa() {
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
    numeroDemande() {
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
    AfficheExeciceBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exercice;
      }
      return 0
        }
      };
    },
    AfficheNumeroDemande() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_demande;
      }
      return 0
        }
      };
    },
    
recupererLibelleTypeDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersProcedureTypeDepense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle_depense
      }
      return 0
        }
      };
    },

    AfficheTypeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_engagement_id;
      }
      return 0
        }
      };
    },
    AfficheLibelleEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet_depense;
      }
      return 0
        }
      };
    },
    AfficheObjet() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet_depense;
      }
      return 0
        }
      };
    },
    AfficheMontantEngage() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.total_general;
      }
      return 0
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
      "supprimerDemandeEngagement",
      "modifierDossierLiquidation"
     
    ]),
      afficheDecisionCf(id) {
      this.$("#demandeVise12").modal({
        backdrop: "static",
        keyboard: false
      });

       this.EditLiquidation = this.listeLiquidationParUa(this.macheid).find(item=>item.id==id);
    },
         modifierTypeTexteLocal() {
    
      this.modifierDossierLiquidation(this.EditLiquidation);
      
     
this.$("#demandeVise12").modal('hide');
     
       
    },
    ExporterEnExel(){
      this.$refs.excel.click()
    },
    formatageSomme:formatageSomme,
     formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    afficherModalModifierTypeTexte(id) {

      this.$router.push({
        path: "/ModifierDemandeEngagement/" + id
      });
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