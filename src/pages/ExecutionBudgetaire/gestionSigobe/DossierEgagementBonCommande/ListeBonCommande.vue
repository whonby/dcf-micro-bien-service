
<template>
  <div>
  
    
    <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                  <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Année budgétaire</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°demande</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°Bon Commande</th>
                 <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Date Bon Commande</th>
                   <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Type Engagement </th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Objet de la depense</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Montant Engagé</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Decision CF</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff" colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeBonCommandeParUa(macheid)" :key="type.id">
                                      <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{AfficheExeciceBudgetaire(type.dmd_engagement_id) || 'Non renseigné'}}</td>
                                       
                    <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{AfficheNumeroDemande(type.dmd_engagement_id) || 'Non renseigné'}}</td>
                              <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{type.numero_bon_commande || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{formaterDate(type.date_bon_commande) || 'Non renseigné'}}</td>
                     <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{recupererLibelleTypeDepense(AfficheTypeEngagement(type.dmd_engagement_id)) || 'Non renseigné'}}</td>
                   <td style="color:#000 !important;font-weight:bold !important" @dblclick="afficherModalModifierTypeTexte(type.id)">{{AfficheLibelleEngagement(type.dmd_engagement_id) || 'Non renseigné'}}</td>
                    <td style="color:#000 !important;font-weight:bold !important;text-align:center" @dblclick="afficherModalModifierTypeTexte(type.id)">{{formatageSomme(parseFloat(AfficheMontantEngage(type.dmd_engagement_id))) || 'Non renseigné'}}</td>
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
                    <td>
                      <router-link :to="{ name: 'Detailexecution', params: { id: type }}"
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
      search: ""
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
 
     listeBonCommandeParUa() {
      return id => {
        if (id != null && id != "") {
           return this.gettersBonCommande.filter(qtreel => this.idUa(qtreel.dmd_engagement_id) == id &&  this.AfficheTypeProcedure(qtreel.dmd_engagement_id)==7);

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
      "modifierDemandeEngagement"
     
    ]),
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

