modifierTypeTexteLocal
<template>
  <div>

      <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
        </div> 
        <br>

           <h3 style="text-align:center; text-decoration:underline">Détail Modalité Exécution</h3>
        <div style="margin-left:15px;">
             <h3>Demande</h3>
             <table class="table table-bordered table-striped">
              
               <thead>
                    <tr>
                  <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Execice</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°demande</th>
                   <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Type Engagement </th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Objet de la depense</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Tresor</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Don</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Emprunt</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Montant Engagé</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Decision CF</th>
                     </tr>
                    
                  
               </thead>
               <tbody>
                  <tr class="odd gradeX" v-for="type in listeDemandeParUa" :key="type.id">
                    <td style="color:#000 !important;font-weight:bold !important">{{type.exercice || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important">{{type.numero_demande || 'Non renseigné'}}</td>
                     <td style="color:#000 !important;font-weight:bold !important">{{recupererLibelleTypeDepense(type.type_engagement_id) || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important">{{type.objet_depense || 'Non renseigné'}}</td>
                     <td style="color:#000 !important;font-weight:bold !important;text-align:center">{{formatageSomme(parseFloat(type.montant_tresor)) || 'Non renseigné'}}</td>
                      <td style="color:#000 !important;font-weight:bold !important;text-align:center">{{formatageSomme(parseFloat(type.montant_don)) || 'Non renseigné'}}</td>
                       <td style="color:#000 !important;font-weight:bold !important;text-align:center">{{formatageSomme(parseFloat(type.montant_emprunt ))|| 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important;text-align:center">{{formatageSomme(parseFloat(type.total_general)) || 'Non renseigné'}}</td>
                  <td >
                        <button v-if="type.decision_cf == 8"  class="btn  btn-success" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="type.decision_cf == 9"  class="btn  btn-success" >                        
                     
                      <span>Visé avec observation</span>
                      
                      </button>
                     <button v-else class="btn  btn-info" >                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                    </td>
                  </tr>
                </tbody>
           </table>


            <table class="table table-bordered table-striped">
              
               <thead>
                    <tr>
                  <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Programme</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Action</th>
                   <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Activité </th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Unité Administrative</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Grande Nature</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Section</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Ligne Economique</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Montant Engagé</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Decision CF</th>
                     </tr>
                    
                  
               </thead>
               <tbody>
                  <tr class="odd gradeX" v-for="type in listeDemandeParUa" :key="type.id">
                    <td style="color:#000 !important;font-weight:bold !important">{{type.exercice || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important">{{type.numero_demande || 'Non renseigné'}}</td>
                     <td style="color:#000 !important;font-weight:bold !important">{{recupererLibelleTypeDepense(type.type_engagement_id) || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important">{{type.objet_depense || 'Non renseigné'}}</td>
                     <td style="color:#000 !important;font-weight:bold !important;text-align:center">{{formatageSomme(parseFloat(type.montant_tresor)) || 'Non renseigné'}}</td>
                      <td style="color:#000 !important;font-weight:bold !important;text-align:center">{{formatageSomme(parseFloat(type.montant_don)) || 'Non renseigné'}}</td>
                       <td style="color:#000 !important;font-weight:bold !important;text-align:center">{{formatageSomme(parseFloat(type.montant_emprunt ))|| 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important;text-align:center">{{formatageSomme(parseFloat(type.total_general)) || 'Non renseigné'}}</td>
                  
                  </tr>
                </tbody>
           </table>

           </div>
           <br>
           <br>
           <div v-if="marcheid1==2 || marcheid1==3" style="margin-left:15px;">
           <h3>Liquidation</h3>


            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                  <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Année budgétaire</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°demande</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°Liquidation</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Date Liquidation</th>
                   <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Type Engagement </th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Objet de la depense</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Montant Liquidé</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Decision CF</th>

                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="type in listeLiquidationParUa" :key="type.id">
                                      <td style="color:#000 !important;font-weight:bold !important" >{{AfficheExeciceBudgetaire(type.dmd_engagement_id) || 'Non renseigné'}}</td>
                                       
                    <td style="color:#000 !important;font-weight:bold !important" >{{AfficheNumeroDemande(type.dmd_engagement_id) || 'Non renseigné'}}</td>
                              <td style="color:#000 !important;font-weight:bold !important" >{{type.numero_liquidation || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important" >{{formaterDate(type.date_liquidation) || 'Non renseigné'}}</td>
                     <td style="color:#000 !important;font-weight:bold !important" >{{recupererLibelleTypeDepense(AfficheTypeEngagement(type.dmd_engagement_id)) || 'Non renseigné'}}</td>
                   <td style="color:#000 !important;font-weight:bold !important" >{{AfficheLibelleEngagement(type.dmd_engagement_id) || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important;text-align:center" >{{formatageSomme(parseFloat(AfficheMontantEngage(type.dmd_engagement_id))) || 'Non renseigné'}}</td>
                  <td >
                        <button v-if="type.decision_cf == 8"  class="btn  btn-success" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="type.decision_cf == 9"  class="btn  btn-success" >                        
                     
                      <span>Visé avec observation</span>
                      
                      </button>
                     <button v-else class="btn  btn-info" >                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                    </td>
                  
                   
                   
                  </tr>
                </tbody>
              </table>

              </div>

              <br>
              <br>

              <div v-if="marcheid1==3" style="margin-left:15px;">
              <h3>Mandat</h3>


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

                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeMandatParUa" :key="type.id">
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
                    
                  
                  </tr>
                </tbody>
              </table>
            </div>

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
      marcheid:0,
      marcheid1:0,
      editMandat:{
        motif_cf : 0,
        famille_motif_cf : 0
      }
    };
  },


created() {
            this.marcheid=this.$route.params.id      
            this.marcheid1=this.$route.params.id1      
},
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

     listeLiquidationParUa() {
          if(this.marcheid1==3){
              return this.gettersDossierLiquidation.filter(qtreel => qtreel.dmd_engagement_id== this.marcheid.demande_engagement_id &&  this.AfficheTypeProcedure(qtreel.dmd_engagement_id) == 1);
          }else{
              return this.gettersDossierLiquidation.filter(qtreel => qtreel.dmd_engagement_id== this.marcheid.dmd_engagement_id &&  this.AfficheTypeProcedure(qtreel.dmd_engagement_id) == 1);
          }
           
    },

      listeMandatParUa() {
     
           return this.gettersDossierMandat.filter(qtreel => qtreel.demande_engagement_id == this.marcheid.demande_engagement_id && this.AfficheTypeProcedure(qtreel.demande_engagement_id)==1);
      
    },

     listeDemandeParUa() {
         if(this.marcheid1==1){
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.id == this.marcheid.id && qtreel.type_procedure_id==1);

        
      
         }else if(this.marcheid1==2){
                      
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.id == this.marcheid.dmd_engagement_id && qtreel.type_procedure_id==1);
         }
         else if(this.marcheid1==3){
                      
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.id == this.marcheid.demande_engagement_id && qtreel.type_procedure_id==1);
         }
         else{
             return 0;
         }
     
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

     afficherModalListePersonnel(){
                window.history.back()
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