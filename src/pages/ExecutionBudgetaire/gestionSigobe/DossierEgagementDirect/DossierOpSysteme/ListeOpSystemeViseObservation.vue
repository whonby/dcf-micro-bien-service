modifierTypeTexteLocal
<template>
  <div>
     <div id="demandeVise" class="modal hide tailgrand">
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
                              <select v-model="editMandat.decision_cf" class="span4">
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
                               <select v-model="editMandat.famille_motif_cf" class="span4" >
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
                               <select v-model="editMandat.motif_cf" class="span4" >
                                 <option value="0"></option>
                                <option v-for="varText in AffichierElementEnfant(editMandat.famille_motif_cf)" :key="varText.id"
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
                              <textarea  class="span8" row = "6" v-model="editMandat.autre_motif_cf" :readonly="griserAutreMotif" >
                              </textarea>
                            </div>
                          </div>
                       </td>
                  <td>
                               <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                             
                               <input type="date" class="span4"  v-model="editMandat.date_motif" />
                              
                            </div>
                          </div>
                           </td>
                 </tr>             
                   <tr>
                     <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span8" row = "6" v-model="editMandat.observation" :readonly="griserObservation">
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
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Execice</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°demande</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°Liquidation</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°Mandat</th>
                   <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Date Mandat</th>
                   <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Type d'engagement</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Objet de la depense</th>
                    
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Montant Engagé</th>
                                       <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Decision CF</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff" colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeDemandeParUa(macheid)" :key="type.id">
                    <td style="color:#000 !important;font-weight:bold !important">{{AfficheExeciceBudgetaire(type.demande_engagement_id) || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important">{{AfficheNumeroDemande(type.demande_engagement_id) || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important">{{AfficheNumeroLiquidation(type.demande_engagement_id) || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important">{{type.numero_mandat || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important">{{formaterDate(type.date_mandat) || 'Non renseigné'}}</td>
                     <td style="color:#000 !important;font-weight:bold !important">{{recupererLibelleTypeDepense(AfficheTypeEngagement(type.demande_engagement_id)) || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important">{{AfficheLibelleEngagement(type.demande_engagement_id) || 'Non renseigné'}}</td>
<td style="color:#000 !important;font-weight:bold !important;text-align:center">{{formatageSomme(parseFloat(AfficheMontantEngage(type.demande_engagement_id))) || 'Non renseigné'}}</td>
                 
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
                       <button v-else-if="type.decision_cf == 9"  class="btn  btn-success" @click="afficheDecisionCf(type.id)">                        
                     
                      <span>Visé avec observation</span>
                      
                      </button>
                     <button v-else class="btn  btn-info" @click="afficheDecisionCf(type.id)">                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                    </td>
                     <td>
                      <router-link :to="{ name: 'Detailexecution', params: { id: type ,id1:3}}"
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
              <notifications  />
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
      editMandat:{
        motif_cf : 0,
        famille_motif_cf : 0
      }
    };
  },
props:["macheid"],
  computed: {
    ...mapGetters("uniteadministrative", ["typeTextes"]),

     ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision', 
  'plans_Decision']),
 ...mapGetters("bienService", ["gettersProcedureTypeDepense","gettersDossierLiquidation","gettersDossierMandat","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
          griserObservation(){
  return this.editMandat.decision_cf != 9
},
    griserFamilleEtMotif(){
  return this.editMandat.decision_cf != 3 && this.editMandat.decision_cf != 2
},
griserAutreMotif(){
  return this.editMandat.motif != 237 
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
 AfficheNumeroLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierLiquidation.find(qtreel => qtreel.dmd_engagement_id == id);

      if (qtereel) {
        return qtereel.numero_liquidation;
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
     listeDemandeParUa() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDossierMandat.filter(qtreel => this.idUa(qtreel.demande_engagement_id) == id && this.AfficheTypeProcedure(qtreel.demande_engagement_id)==1 && qtreel.decision_cf == 9 && qtreel.numero_mandat == null);

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
    AfficheidLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierLiquidation.find(qtreel => qtreel.dmd_engagement_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
 
 },
  methods: {
   ...mapActions("bienService", [
     "modifierDossierMandat",
     "modifierDossierLiquidation",
      "modifierDemandeEngagement",
      "modifierDecisionMandat"
 
     
    ]),
        afficheDecisionCf(id) {
      this.$("#demandeVise").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editMandat = this.listeDemandeParUa(this.macheid).find(item=>item.id==id);
    },
    modifierTypeTexteLocal() {
      var Mandat ={
        
        id:this.editMandat.id,
        decision_cf:this.editMandat.decision_cf,
        famille_motif_cf:this.editMandat.famille_motif_cf,
        autre_motif_cf:this.editMandat.autre_motif_cf,
        motif_cf:this.editMandat.motif_cf,
        date_motif:this.editMandat.date_motif,
        observation:this.editMandat.observation
      }
       var Liquidation ={
       
        id:this.AfficheidLiquidation(this.editMandat.demande_engagement_id),
        decision_cf:this.editMandat.decision_cf,
        famille_motif_cf:this.editMandat.famille_motif_cf,
        autre_motif_cf:this.editMandat.autre_motif_cf,
        motif_cf:this.editMandat.motif_cf,
        date_motif:this.editMandat.date_motif,
        observation:this.editMandat.observation
      }
       var Demande ={
        
        id:this.editMandat.demande_engagement_id,
        decision_cf:this.editMandat.decision_cf,
        famille_motif_cf:this.editMandat.famille_motif_cf,
        autre_motif_cf:this.editMandat.autre_motif_cf,
        motif_cf:this.editMandat.motif_cf,
        date_motif:this.editMandat.date_motif,
        observation:this.editMandat.observation
      }
      this.modifierDossierMandat(Mandat);
      this.modifierDossierLiquidation(Liquidation);
      this.modifierDemandeEngagement(Demande);
this.$("#demandeVise").modal('hide');
     
       
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