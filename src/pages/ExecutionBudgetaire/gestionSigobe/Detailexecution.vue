modifierTypeTexteLocal
<template>
  <div>

      <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
        </div> 

        <br>

           <h3 style="text-align:center; text-decoration:underline">Détail Modalité Exécution</h3>
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
                   <tr>
                       <td></td>
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
           return this.gettersDossierMandat.filter(qtreel => qtreel.ua_id == id && this.AfficheTypeProcedure(qtreel.demande_engagement_id)==1);

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

     afficherModalListePersonnel(){
                window.history.back()
            },
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