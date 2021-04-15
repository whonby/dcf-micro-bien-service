
<template>
  <div >
   
   <table class="table table-bordered table-striped" v-if="macheid">
                                    <thead>
                                   <tr>
                   
          <th style="text-align:center;font-size:12px">N°Décompte</th>
          
          <th style="text-align:center;font-size:12px">Date</th>
          <th style="text-align:center;font-size:12px">Acompte HTVA</th>
          <th style="text-align:center;font-size:12px">Avance</th>
          <th style="text-align:center;font-size:12px">Garantie</th>
          <th style="text-align:center;font-size:12px">Penalités </th>
          <th style="text-align:center;font-size:12px">Net HTVA </th>
          <th style="text-align:center;font-size:12px">Net TTC</th>
          <th style="text-align:center;font-size:12px">Etat ({{recupereTauxEtat(macheid)}}% + (TVA 18%))</th>
          <th style="text-align:center;font-size:12px">Bailleur({{recupereTauxBailleur(macheid)}}% HTVA) </th>
          <!-- <th style="text-align:center;font-size:12px">Famille Motif Cf </th>
           <th style="text-align:center;font-size:12px">Motif Cf </th>
            <th style="text-align:center;font-size:12px">Autres Motif </th>
          <th style="text-align:center;font-size:12px">Décision </th> -->
                  </tr>


                  
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="type in afficheMarcheDecompte(macheid)" :key="type.id">
                    <td style="text-align:center;"
                    >{{type.numero_decompte || 'Non renseigné'}}</td>
                    <!-- <td style="text-align:center;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{afficheObjetMarche(type.marche_id) || 'Non renseigné'}}</td> -->
                    <td style="text-align:center;"
                    >{{formaterDate(type.date_decompte) || 'Non renseigné'}}</td>
                    <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.montantmarche)) || 'Non renseigné'}}</td>
<td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.retenu_avance)) || 'Non renseigné'}}</td>

<td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.retenu_garantie)) || 'Non renseigné'}}</td>

<td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.retenu_penalite)) || 'Non renseigné'}}</td>
<td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.nethtva)) || 'Non renseigné'}}</td>

                    
                      <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.netttc)) || 'Non renseigné'}}</td>

                    
                      <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.parts_etat)) || 'Non renseigné'}}</td>

                    
                      <td style="text-align:center;"
                    >{{formatageSomme(parseFloat(type.parts_bailleur)) || 'Non renseigné'}}</td>
                   
<!-- <td style="text-align:center;"
                    >{{libelleMotifCf(MotifCf(type.facture_id)) || 'Non renseigné'}}</td>
                    <td style="text-align:center;"
                    >{{AffcheAutresMotif(type.facture_id) || 'Non renseigné'}}</td>
                    <td style="text-align:center;">
                    
                     <button 
                      v-if="StatusDecompte(type.facture_id) == 8"  class="btn  btn-success">
                <span  style="">Visé</span>
       
                </button>
                <button 
                      v-else-if="StatusDecompte(type.facture_id) == 9"  class="btn  btn-success">
                <span >Visé avec Observation</span>
       
                </button>
                 <button 
                      v-else-if="StatusDecompte(type.facture_id) == 2"  class="btn  btn-warning">
                <span  >Différé</span>
       
                </button>
                 <button v-else-if="StatusDecompte(type.facture_id) == 3" class="btn  btn-danger">
              
                <span >Réjeté</span>
                 </button>
              <button v-else class="btn  btn-info">
              
                <span >Attente</span>
                </button>
                   </td>
                    
                     -->
                    
                   
                  </tr>
                  <tr>
                   






                   <td colspan="2" style="text-align:center;color:red">CUMULS</td>
                   
                   <td style="text-align:center;color:red;font-size:14px">{{formatageSomme(parseFloat(CumulMontantFacture(macheid)))}}</td>
                   <td style="text-align:center;">{{formatageSomme(parseFloat(CumulAvance(macheid)))}}</td>
                   <td style="text-align:center;">{{formatageSomme(parseFloat(CumulGArantie(macheid)))}}</td>
                   <td style="text-align:center;">{{formatageSomme(parseFloat(CumulPenalite(macheid)))}}</td>
                   <td style="text-align:center;">{{formatageSomme(parseFloat(CumulNetHtva(macheid)))}}</td>
                   <td style="text-align:center;">{{formatageSomme(parseFloat(CumulNetTTC(macheid)))}}</td>
                   <td style="text-align:center;">{{formatageSomme(parseFloat(CumulPartEtat(macheid)))}}</td>
                   <td style="text-align:center;">{{formatageSomme(parseFloat(CumulPartBailler(macheid)))}}</td>
                   <!-- <td style="text-align:center;"></td>
                   <td style="text-align:center;"></td>
                   <td style="text-align:center;"></td> -->
                   
                  </tr>
                  <tr>
 
                  <td colspan="2" style="text-align:center;color:red">%CUMULS</td>
                   <td style="text-align:center;">{{((parseFloat(CumulAvance(macheid))/parseFloat(MontantMarche(macheid)))/100).toFixed(2)}}</td>
                   <td style="text-align:center;">{{PourcentageCumulAvanceDemarrage}}</td>
                   <td style="text-align:center;">{{PourcentageCumulGarantie}}</td>
                   <td style="text-align:center;"></td>
                   <td style="text-align:center;"></td>
                   <td style="text-align:center;"></td>
                   <td style="text-align:center;"></td>
                   <td style="text-align:center;"></td>
                   <!-- <td style="text-align:center;"></td>
                   <td style="text-align:center;"></td>
                   <td style="text-align:center;"></td> -->
                  
                  </tr>
                </tbody>
                                </table>
 
  <notifications  />
  </div>
</template>
  
<script>

import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from '@/Repositories/Repository';
// // import { ModelListSelect } from "vue-search-select";
// // import "vue-search-select/dist/VueSearchSelect.css";
export default {
  // components: {
  //   ModelListSelect
  // }, 
  data() {  
    return {
     editDecompte:{},
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],

      search: ""
    };
  },
props:["macheid"],
 created() {
            this.marcheid=this.$route.params.id
   this.detail_Facture = this.gettersgestionOrdrePaiement.find(
       idmarche => idmarche.id == this.$route.params.id
         )
      
},
  computed: {
 ...mapGetters("bienService", ["gettersgestionOrdrePaiement","personnaliseGetterMarcheBailleur","modepaiements",'gettersgestionOrdrePaiement','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
 "decomptefactures",
 
   
   
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

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel",
 "plans_Decision"
   ]),

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
    

    libelleMotifCf() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_Decision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
MotifCf() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.facture_id == id);

      if (qtereel) {
        return qtereel.motif;
      }
      return 0
        }
      };
    },
FamilleMotifCf() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.facture_id == id);

      if (qtereel) {
        return qtereel.famille_motif;
      }
      return 0
        }
      };
    },
    AffcheAutresMotif() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.facture_id == id);

      if (qtereel) {
        return qtereel.autre_motif;
      }
      return 0
        }
      };
    },
   StatusDecompte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.facture_id == id);

      if (qtereel) {
        return qtereel.decision_cf;
      }
      return 0
        }
      };
    },





     afficheMarcheDecompte() {
      return id => {
        if (id != null && id != "") {
          return this.decomptefactures.filter(
            element => element.marche_id == id 
          );
        }
      };
    },
    afficherStatusSib() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sib;
      }
      return 0
        }
      };
    },
 PourcentageCumulAvanceDemarrage(){
      const val = ((parseFloat(this.CumulAvance(this.macheid)) * (parseFloat(this.TauxAvanceDemarrageHT1(this.macheid))/100))/parseFloat(this.MontantAvanceDemarrageHT(this.macheid)));
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
MontantAvanceDemarrageHT() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.avance_demarrage_ht;
      }
      return 0
        }
      };
    },

TauxAvanceDemarrageHT1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.taux_avance_demarrage;
      }
      return 0
        }
      };
    },



PourcentageCumulGarantie(){
      const val = ((parseFloat(this.CumulGArantie(this.macheid)) * (parseFloat(this.TauxGarantieHT1(this.macheid))/100))/parseFloat(this.MontantGarantieHT(this.macheid)));
      
       if (val) {
        return parseFloat(val).toFixed(2);
      }
      
      return 0
    },
MontantGarantieHT() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.montant_ht_retenu_garantie;
      }
      return 0
        }
      };
    },

TauxGarantieHT1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.taux_retenue_garantie;
      }
      return 0
        }
      };
    },





recupereTauxBailleur() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id==13 ||qtreel.marche_id == id && qtreel.type_finnancement_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

        }
      };
    },

recupereTauxEtat() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id==14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

        }
      };
    },

    MontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
    CumulMontantFacture() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantmarche), 0).toFixed(0);

        }
      };
    },
    CumulAvance() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_avance), 0).toFixed(0);

        }
      };
    },
    CumulGArantie() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_garantie), 0).toFixed(0);

        }
      };
    },
    CumulPenalite() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_penalite), 0).toFixed(0);

        }
      };
    },
    CumulNetHtva() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.nethtva), 0).toFixed(0);

        }
      };
    },
    CumulNetTTC() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.netttc), 0).toFixed(0);

        }
      };
    },
    CumulPartEtat() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.parts_etat), 0).toFixed(0);

        }
      };
    },
    CumulPartBailler() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.parts_bailleur), 0).toFixed(0);

        }
      };
    },
     MontantFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_ordre_paiement;
      }
      return 0
        }
      };
    },
    //      MontantRetenuAvance() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

    //   if (qtereel) {
    //     return qtereel.avance_demarrage_ht;
    //   }
    //   return 0
    //     }
    //   };
    // }, 
       MontantRetenuGarantie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_ht_retenu_garantie;
      }
      return 0
        }
      };
    },
     MontantRetenuAvance() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.avance_demarrage_ht;
      }
      return 0
        }
      }; 
     },
      CumulRetenuAvanceNouveauModifier(){
      const val = parseFloat(this.CumulRetenuAvance(this.editDecompte.marche_id)) + parseFloat(this.editDecompte.retenu_avance);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
      CumulRetenuAvance() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_avance), 0).toFixed(0);

     
        }
      };
    }, 
        retenuAvanceResteApayesModifierModifier(){
      const val = parseFloat(this.MontantRetenuAvance(this.editDecompte.marche_id)) - parseFloat(this.CumulRetenuAvance(this.editDecompte.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    MontantapresretenuesModifier(){
      const val =  parseFloat(this.MontantFacture(this.editDecompte.facture_id))-parseFloat(parseFloat(this.editDecompte.retenu_garantie) + parseFloat(this.editDecompte.retenu_avance)+ parseFloat(this.editDecompte.retenu_penalite));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    MontantTVAFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.tva;
      }
      return 0
        }
      };
    },
     MontantTTCModifier(){
      const val =  parseFloat(this.MontantapresretenuesModifier)+parseFloat(this.MontantTVAFacture(this.editDecompte.facture_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
       ModifierMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
    //    TauxBailleurTresor() {
    //   return id => {
    //     if (id != null && id != "") {
    //        return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
    //     }
    //   };
    // },
     TauxBailleurDuMarcheModifier(){
      const val = parseFloat(this.TauxBailleurDon(this.editDecompte.marche_id)) + parseFloat(this.TauxBailleurEmprunt(this.editDecompte.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    TauxBailleurEmprunt() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
        }
      };
    }, 
    
    TauxBailleurDon() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
        }
      };
    },
    //   MontantHTBailleur(){
    //   const val =  parseFloat(this.Montantapresretenues)*(parseFloat(this.TauxBailleurDuMarche)/100);
      
    //    if (val) {
    //     return parseFloat(val).toFixed(0);
    //   }
      
    //   return 0
    // },
       MontantHTBailleurModifier(){
      const val =  parseFloat(this.MontantapresretenuesModifier)*(parseFloat(this.TauxBailleurDuMarcheModifier)/100);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
      TauxBailleurTresor() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
        }
      };
    },
     ModifierModifier(){
      const val =  parseFloat(this.MontantTTCModifier)*(parseFloat(this.TauxBailleurTresor(this.editDecompte.marche_id))/100);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
       NomEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    }, 
         NomEntrepriseModifier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    }, 
      AdresseEmailEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.telephone.concat(' - ', qtereel.email);
      }
      return 0
        }
      };
    },
      ContribuableEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_cc;
      }
      return 0
        }
      };
    }, 
     libelleObjet() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    }, 
        NumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
       dateApprobation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return this.formaterDate(qtereel.date_approbation);
      }
      return 0
        }
      };
    },   
    idParent() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.parent_id;
      }
      return 0
        }
      };
    },
         Imputation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation;
      }
      return 0
        }
      };
    },
       montantHtMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act_ht;
      }
      return 0
        }
      };
    },
       montantTTCMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
      SommeBailleurDuMarcheModifier(){
      const val = parseFloat(this.MontantBailleurEmprunt(this.editDecompte.marche_id)) + parseFloat(this.MontantBailleurDon(this.editDecompte.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
       MontantBailleurEmprunt() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0).toFixed(0);

     
        }
      };
    }, 
       MontantBailleurDon() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0).toFixed(0);

     
        }
      };
    },
      MontantEtatCoteIvoire() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0).toFixed(0);

     
        }
      };
     },
  
    MontantFactureHT() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_ordre_paiement;
      }
      return 0
        }
      };
    },
 afficheDecompteTableau() {
      return id => {
        if (id != null && id != "") {
          return this.decomptefactures.filter(
            element => element.marche_id == id 
          );
        }
      };
    },
    afficheObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    },
  },
  methods: { 
    
    ...mapActions('uniteadministrative',[

 "ModifierDecompteFacture",
 "supprimerDecompteFacture"
   
   
   ]),
     modifierDecompteLocal() {
         var nouvelObjet = {
        ...this.editDecompte,
           marche_id:this.editDecompte.marche_id,
        facture_id:this.editDecompte.facture_id,
        
      // nethtva:this.MontantTVAFacture(editDecompte.facture_id),
      netttc:this.MontantapresretenuesModifier,
      parts_etat:this.MontantHTEtatModifier,
      parts_bailleur:this.MontantHTBailleurModifier,
      montantmarche:this.MontantapresretenuesModifier
      };
      this.ModifierDecompteFacture(nouvelObjet);
     this.$("#exampleModal").modal('hide');
       this.editDecompte = {
      
      }
       },
       
    formatageSomme:formatageSomme,
 formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
    afficherModalAjouterpaiementPersonnel() {
      this.$("#ModalDecompte").modal({
        backdrop: "static",
        keyboard: false
      });
    },
   
        afficherModalModifierTypeTexte(id){
      this.$('#exampleModal').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.editDecompte = this.decomptefactures.find(item=>item.id==id)
    },
  }
};
</script>
<style scoped>

.grdirModalActeEffet{
  width: 88%;
  margin: 0 -42%;
}
</style>
