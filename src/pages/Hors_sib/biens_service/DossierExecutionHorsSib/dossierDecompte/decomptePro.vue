
<template>
  <div >
   <table class="table table-bordered table-striped" v-if="macheid">
                                    <thead>
                                   <tr>
                   
          <th >Décompte  </th>
          <!-- <th >Objet  </th> -->
          <th>Date </th>
          <th>Acompte HTVA </th>
          <th>Avance </th>
          <th>Garantie </th>
          <th>Penalités </th>
          <th>Net HTVA </th>
          <th>Net TTC</th>
          <th>Etat(TVA 18%)</th>
          <th>Bailleur(100% HTVA) </th>
          <th>Actions </th>
                  </tr>

                  
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="(type, index) in decomptefactures" :key="type.id">
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.numero_decompte || 'Non renseigné'}}</td>
                    <!-- <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{afficheObjetMarche(type.marche_id) || 'Non renseigné'}}</td> -->
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formaterDate(type.date_decompte) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(MontantFactureHT(type.facture_id))) || 'Non renseigné'}}</td>
<td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.retenu_avance)) || 'Non renseigné'}}</td>

<td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.retenu_garantie)) || 'Non renseigné'}}</td>

<td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.retenu_penalite)) || 'Non renseigné'}}</td>
<td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.nethtva)) || 'Non renseigné'}}</td>

                    
                      <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.netttc)) || 'Non renseigné'}}</td>

                    
                      <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.parts_etat)) || 'Non renseigné'}}</td>

                    
                      <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.parts_bailleur)) || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerDecompteFacture(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                   
                   <td colspan="2" style="text-align:center;color;red">CUMULS</td>
                   
                   <td>{{formatageSomme(parseFloat(CumulMontantFacture(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulAvance(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulGArantie(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulPenalite(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulNetHtva(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulNetTTC(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulPartEtat(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulPartBailler(macheid)))}}</td>
                   <td></td>
                  </tr>
                  <!-- <tr>
 
                  <td colspan="2">% CUMULS</td>
                   <td>{{((parseFloat(CumulAvance(macheid))/parseFloat(MontantMarche(macheid)))/100).toFixed(2)}}</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                  </tr> -->
                </tbody>
                                </table>
 
  <notifications  />
  </div>
</template>
  
<script>

import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from './../../../../../Repositories/Repository';
// // import { ModelListSelect } from "vue-search-select";
// // import "vue-search-select/dist/VueSearchSelect.css";
export default {
  // components: {
  //   ModelListSelect
  // },
  data() {
    return {
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
  computed: {
 ...mapGetters("bienService", ["getFacturePersonnaliser","personnaliseGetterMarcheBailleur","modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
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
 "decomptefactures"
   
   
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
 "afficheNiveauPlanFonctionnel"
   ]),

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
    
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
           return this.getFacturePersonnaliser.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_propose_ht), 0).toFixed(0);

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
    
    MontantFactureHT() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_propose_ht;
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
 "ModifierDecompteFacture",
 "supprimerDecompteFacture"
   
   
   ]),
    formatageSomme:formatageSomme,
 formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
    afficherModalAjouterpaiementPersonnel() {
      this.$("#ModalDecompte").modal({
        backdrop: "static",
        keyboard: false
      });
    }
  }
};
</script>
<style scoped>

.grdirModalActeEffet{
  width: 92%;
  margin: 0 -43%;
}
th{
  text-align:left;
}
</style>
