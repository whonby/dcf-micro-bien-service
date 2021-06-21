
<template>
  <div>
 
    <div align="right">

      <button class="btn btn-info" @click="genererEnPdf()">Exporter en PDF</button>


                            </div>
     <table class="table table-bordered table-striped">
            <tr>
                <td>
 <label
                            >EXERCICE
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="exercices_budgetaires"
                            v-model="exercices_budgetaires_id"
                            option-value="annee"
                            option-text="annee"
                            placeholder=""
                          >
                          </model-list-select>
                         
                </td>
                   
                    <td>
                          <label
                            >UNITE ADMINISTRATIVE
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="listeDesUa"
                            v-model="uniteAdministrative_id"
                            option-value="id"
                            option-text="libelle"
                            placeholder=""
                          >
                          </model-list-select>
                          
                        </td>
 <td>
 <label
                            >ACTIVITE
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="plans_activites"
                            v-model="plans_activites_id"
                            option-value="id"
                            option-text="libelle"
                            placeholder=""
                          >
                          </model-list-select>
                         
                </td>
             
            </tr>
             <tr>
                <td>
 <label
                            >LIGNE ECONOMIQUE
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="sections"
                            v-model="sections_id"
                            option-value="id"
                            option-text="nom_section"
                            placeholder=""
                          >
                          </model-list-select>
                         
                </td>
                   
                    <td>
                          <label
                            >TYPE DE FINANCEMENT
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="types_financements"
                            v-model="types_financements_id"
                            option-value="id"
                            option-text="libelle"
                            placeholder=""
                          >
                          </model-list-select>
                          
                        </td>
 <td>
 <label
                            >SOURCE DE FINANCEMENT
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="sources_financements"
                            v-model="sources_financements_id"
                            option-value="id"
                            option-text="libelle"
                            placeholder=""
                          >
                          </model-list-select>
                         
                </td>
             
            </tr>
        </table>
        <div id="printMe3">
        
    <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                  <th style="font-size:14px;font-weight:bold;background-color: #e6b637;color:#000">Execice</th>
                       <th style="font-size:14px;font-weight:bold;background-color: #e6b637;color:#000">Unite administrative</th>
                                 <th style="font-size:14px;font-weight:bold;background-color: #e6b637;color:#000">Activité</th>
                       <th style="font-size:14px;font-weight:bold;background-color: #e6b637;color:#000">Grande Nature</th>
         
                   <th style="font-size:14px;font-weight:bold;background-color: #e6b637;color:#000">Ligne Economique </th>
                    <th style="font-size:14px;font-weight:bold;background-color: #e6b637;color:#000">Type Financement</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #e6b637;color:#000">Source Financement</th>
                   
                     <th style="font-size:14px;font-weight:bold;background-color: #e6b637;color:#000">Budget Actuel</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #e6b637;color:#000">Montant Executé</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #e6b637;color:#000">Disponible</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #e6b637;color:#000">Taux Execution</th>
                    
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                    v-for="type in partition(ListeDEsEntreprise, size)[page]"
                    :key="type.id"
                  >
                  <td @dblclick="afficherModalModifierTitre(type.id)"
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      {{ type.exercice || "Non renseigné" }}
                    </td>
                   
                    
                     <td style="font-size: 14px; font-weight: bold" @dblclick="afficherModalModifierTitre(type.id)">
                      {{ libelleUa(type.unite_administrative_id) || "Non renseigné" }}
                    </td>
                      <td style="font-size: 14px; font-weight: bold" @dblclick="afficherModalModifierTitre(type.id)">
                      {{ type.activite_id || "Non renseigné" }}
                    </td>
<td style="font-size: 14px; font-weight: bold" @dblclick="afficherModalModifierTitre(type.id)">
                      {{ NatureDepense(type.grand_nature_id) || "Non renseigné" }}
                    </td>
                   

                    <td style="font-size: 14px; font-weight: bold" @dblclick="afficherModalModifierTitre(type.id)">
                      {{ type.ligne_economique_id || "Non renseigné" }}
                    </td>
                    <td style="font-size: 14px; font-weight: bold" @dblclick="afficherModalModifierTitre(type.id)">
                      {{ type.type_financement_id || "Non renseigné" }}
                    </td>
                     <td style="font-size: 14px; font-weight: bold" @dblclick="afficherModalModifierTitre(type.id)">
                      {{ type.source_financement_id || "Non renseigné" }}
                    </td>
                   
                   

                    
                   
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                                        <td></td>
                    <td style="font-size:14px;font-weight:bold;color:#000;text-align:center">TOTAL</td>
                    <td style="font-size:14px;font-weight:bold;color:#000;text-align:center">{{formatageSomme(parseFloat(MontantOpProvisoireVise))}}</td>
                    <td></td>
                    <td></td>
                    <td></td>

                  </tr>
                </tbody>
              </table>
              </div>
               <div class="pagination alternate">
            <ul>
              <li :class="{ disabled: page == 0 }">
                <a @click.prevent="precedent()" href="#">Précedent</a>
              </li>
              <li
                v-for="(titre, index) in partition(ListeDEsEntreprise, size)
                  .length"
                :key="index"
                :class="{ active: active_el == index }"
              >
                <a @click.prevent="getDataPaginate(index)" href="#">{{
                  index + 1
                }}</a>
              </li>
              <li
                :class="{
                  disabled:
                    page == partition(ListeDEsEntreprise, size).length - 1,
                }"
              >
                <a @click.prevent="suivant()" href="#">Suivant</a>
              </li>
            </ul>
          </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSommeSansFCFA,formatageSomme } from "@/Repositories/Repository";
import { partition } from "@/Repositories/Repository";
import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";

export default {
  components: {
    ModelListSelect,
  },
  name: "typetext",
  data() {
    return {
      page: 0,
      size: 10,
      active_el: 0,
      fabActions: [
        {
          name: "searchMe",
          icon: "search",
        },
      ],

      
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle",
      },
     
  
 
    
      uniteAdministrative_id: 0,
      sections_id:0,
grandes_nature_id:0,
exercices_budgetaires_id:0,
types_financements_id:0,
sources_financements_id:0,
plans_activites_id:0,
    
      search: "",
    };
  },
created() {
    this.marcheid = this.$route.params.id;
    this.detailOp1 = this.gettersgestionOrdrePaiement.find(
      (idmarche) => idmarche.id == this.$route.params.id
    );
  },
  computed: {
    admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("parametreGenerauxAdministratif", [
      "taux",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5",
    ]),
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    ...mapGetters("personnelUA", [
      "salairesActeur",
      "personnaliseActeurDepense",
      "personnaFonction",
      "afficheNombrePersonnelRecuActeNormination",
      "fonctionBudgetaire",
      "type_salaries",
      "type_contrats",
      "acte_personnels",
      "type_acte_personnels",
      "fonctions",
      "grades",
      "niveau_etudes",
      "nbr_acteur_actredite_taux",
      "all_acteur_depense",
      "personnaliseActeurFinContrat",
      "totalActeurEnctivite",
      "totalActeurDepense",
      "totalActeurAccredite",
      "tauxActeurAccredite",
      "totalActeurNonAccredite",
      "affichePersonnelRecuActeNormination",
    ]),
    ...mapGetters("bienService", [
      "gettershistoriqueDecisionCfOP",
      "typeMarches",
      "gettersgestionOrdrePaiementAnnulation",
      "gettersgestionOrdrePaiement",
      "gettersDossierAutreDepense",
      "gettersDossierMandat",
      "gettersDossierFacturePiece",
      "typeFactures",
      "gettersDemandeEngagement",
      "gettersnomPieceJustificative",
      "modepaiements",
      "gettersCotationPersonnaliser",
      "typeCandidat",
      "acteDepense",
      "getMarchePersonnaliser",
      "appelOffres",
      "lots",
      "villes",
      "communes",
      "pays",
      "modePassations",
      "procedurePassations",
      "getterDossierCandidats",
      "marches",
      "gettersPersonnaliserRapportJugement",
      "getterOffreFinanciers",
      "gettersOffreTechniques",
      "getterLettreInvitation",
      "getterMandate",
      "getterCojos",
      "conditions",
      "getterAnalyseDossiers",
      "typeAnalyses",
      "getterDemandeAno",
      "documentProcedures",
      "getterAnalyseDMP",
      "getterAnoDMPBailleur",
      "getterObseravtionBailleurs",
      "obseravtionBailleurs",
      "typeActeEffetFinanciers",
      "analyseDossiers",
      "text_juridiques",
      "livrables",
      "selectionner_candidats",
      "getActeEffetFinancierPersonnaliserContrat",
      "acteEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
      "getterMembreCojo",
      "getterProceVerballe",
    ]),
    ...mapGetters("gestionMarche", [
      "groupeVille",
      "entreprises",
      "banques",
      "comptes",
      "getCompte",
      "getEntreptise",
      "getPersonnaliseAgence",
      "agenceBanques",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structureActe",
      "planActe",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),
    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),
    ...mapGetters("gestionMarche", ["entreprises"]),
    ...mapGetters("uniteadministrative", [
      "budgetEclate",
      "groupeLigneEconomiqueBudget",
      "getSousBudget",
      "groupeActiviteBudget",
      "budgetGeneral",
      "fonctionsua",
      "servicesua",
      "directions",
      "uniteZones",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structuresDecision",
      "plans_Decision",
    ]),


arrayExerciceDecompteBienService() {
      //return (id) => {
        
        let objet = this.marches.filter(item=>item.sib==1);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.unite_administrative_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
    // };
    },



    
    NatureDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.grandes_natures.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
      ListeDEsEntreprise() {
      let vM = this;
      let objet = this.filtre_unite_admin;

      //retourne la section selectionner

      if (this.sections_id != 0 && this.grandes_nature_id == 0 && this.uniteAdministrative_id == 0) {
        objet = this.filtre_unite_admin.filter((item) => {
          if (item.section_id == vM.sections_id) {
            return item;
          }
        });
        return objet;
      }
      if (this.sections_id == 0 && this.grandes_nature_id != 0 && this.uniteAdministrative_id == 0) {
        objet = this.filtre_unite_admin.filter((item) => {
          if (item.grand_nature_id == vM.grandes_nature_id) {
            return item;
          }
        });
          return objet;
      }
   if (this.sections_id == 0 && this.grandes_nature_id == 0 && this.uniteAdministrative_id != 0) {
        objet = this.filtre_unite_admin.filter((item) => {
          if (item.unite_administrative_id == vM.uniteAdministrative_id) {
            return item;
          }
        });
        return objet;
      }
       if (this.sections_id != 0 && this.grandes_nature_id != 0 && this.uniteAdministrative_id == 0) {
        objet = this.filtre_unite_admin.filter((item) => {
          if (
            item.section_id == vM.sections_id &&
            item.grand_nature_id == vM.grandes_nature_id
          ) {
            return item;
          }
        });
        return objet;
      }
       if (this.grandes_nature_id != 0 && this.uniteAdministrative_id != 0) {
        objet = this.filtre_unite_admin.filter((item) => {
          if (
            
            item.grand_nature_id == vM.grandes_nature_id && item.unite_administrative_id == vM.uniteAdministrative_id 
          ) {
            return item;
          }
        });
        return objet;
      }
      return this.filtre_unite_admin;
    },
     listeDesUa() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        this.uniteAdministratives.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }

      return this.uniteAdministratives;
    },
MontantOpProvisoireVise() {
       return this.ListeDEsEntreprise.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
    },
    
 filtre_unite_admin() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.listeordrepaiementProvisoire.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.unite_administrative_id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }
      return this.listeordrepaiementProvisoire;
    },



   listeOpdiffere() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettershistoriqueDecisionCfOP.filter(
            (qtreel) =>
              qtreel.id_op == id &&
              qtreel.diff_decision == 0 &&
              qtreel.decision_cf == 2
          );
        }
      };
    },
    EurreurCorrige() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettershistoriqueDecisionCfOP.filter(
            (qtreel) =>
              qtreel.id_op == id &&
              qtreel.diff_decision == 1 &&
              qtreel.decision_cf == 2
          );
        }
      };
    },
    MotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    FamilleMotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    verifier() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettershistoriqueDecisionCfOP.find(
            (qtreel) => qtreel.id_op == id
          );

          if (qtereel) {
            return qtereel.id_op;
          }
          return 0;
        }
      };
    },
   

    
    NombreTotalOPProvisoire() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 2 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },


    recupererNomDuControleurF() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterUtilisateur.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.name;
          }
          return 0;
        }
      };
    },
    recupererIdUser() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterAffectionServiceCF.find(
            (qtreel) => qtreel.servicecf_id == id && qtreel.date_fin == null
          );

          if (qtereel) {
            return qtereel.user_id;
          }
          return 0;
        }
      };
    },
    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },
    recupererIdServiceCF() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterAffectation.find(
            (qtreel) =>
              qtreel.unite_administrative_id == id && qtreel.date_fin == null
          );

          if (qtereel) {
            return qtereel.servicecf_id;
          }
          return 0;
        }
      };
    },

    griserAutreMotif() {
      return this.editMandat.motif != 237;
    },
    AffichierElementParent() {
      // return id => {
      //   if (id != null && id != "") {
      return this.plans_Decision.filter(
        (element) =>
          this.RecupererNiveau3StructureDecision(
            element.structure_motif_decission_id
          ) == 3
      );
      //   }
      // };
    },
    RecupererNiveau3StructureDecision() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.structuresDecision.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.niveau;
          }
          return 0;
        }
      };
    },
    AffichierElementEnfant() {
      return (id) => {
        if (id != null && id != "") {
          return this.plans_Decision.filter((element) => element.parent == id);
        }
      };
    },
    libelleDecision() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return "Non renseigné";
        }
      };
    },
    MontantMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.montant_act;
          }
          return 0;
        }
      };
    },
    libelleMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.numero_marche.concat("    ", qtereel.objet);
          }
          return 0;
        }
      };
    },
    libelleUa() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    recupererIdOpAnnulation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },
    recupererIdOpProvisoire() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.id_op_provisoire;
          }
          return 0;
        }
      };
    },
    recupererIdUa() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.unite_administrative_id;
          }
          return 0;
        }
      };
    },
    listeordrepaiementProvisoire() {
      return this.gettersgestionOrdrePaiement.filter(
        (qtreel) => qtreel.diff_op == null  &&  qtreel.type_ordre_paiement==1 && qtreel.decision_cf == 8  && qtreel.exercice==this.anneeAmort || qtreel.diff_op == null  &&  qtreel.type_ordre_paiement==1 && qtreel.decision_cf == 9  && qtreel.exercice==this.anneeAmort || qtreel.diff_op == null  &&  qtreel.type_ordre_paiement==4 && qtreel.decision_cf == 8  && qtreel.exercice==this.anneeAmort || qtreel.diff_op == null  &&  qtreel.type_ordre_paiement==4 && qtreel.decision_cf == 9  && qtreel.exercice==this.anneeAmort
      );
    },
    
     
      
  },
  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
      "modifierGestionOrdrePaiementAnnulat",
      "supprimerGestionOrdrePaiement",
      "ajouterHistoriqueDecisionOp",
      "modifierHistoriqueDecisionOp",
    ]),
 
    afficherModalListePersonnel(){
                window.history.back()
            },
              
afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModificationOrdrePaiement/" + id
      });
    },
    partition: partition,

    getDataPaginate(index) {
      this.active_el = index;
      this.page = index;
    },
    precedent() {
      this.active_el--;
      this.page--;
    },
    suivant() {
      this.active_el++;
      this.page++;
    },

   DetacheMotif(id) {
      this.EditDetache = this.gettershistoriqueDecisionCfOP.find(
        (item) => item.id == id
      );
      this.ModifierMotif();
    },
    DetacheMotifAttache(id) {
      this.EditDetache = this.gettershistoriqueDecisionCfOP.find(
        (item) => item.id == id
      );

      this.ModifierMotifAttche();
    },

    ModifierMotif() {
      var objet = {
        id: this.EditDetache.id,
        decision_cf: this.EditDetache.decision_cf,
        famille_motif: this.EditDetache.famille_motif,
        motif: this.EditDetache.motif,
        date_decision: this.EditDetache.date_decision_cf,
        diff_decision: 1,
        id_op: this.EditDetache.id_op,
      };
      this.modifierHistoriqueDecisionOp(objet);
    },

    ModifierMotifAttche() {
      var objet = {
        id: this.EditDetache.id,
        decision_cf: this.EditDetache.decision_cf,
        famille_motif: this.EditDetache.famille_motif,
        motif: this.EditDetache.motif,
        date_decision: this.EditDetache.date_decision_cf,
        diff_decision: 0,
        id_op: this.EditDetache.id_op,
      };
      this.modifierHistoriqueDecisionOp(objet);
    },

    AfficheBoutonAjouter() {
      this.affiche_filtre1 = !this.affiche_filtre1;
    },
    filter() {
      this.affiche_filtre = !this.affiche_filtre;
    },
    ajouterLiquidation() {
      this.$router.push({ name: "AjouterOrdrePaiementAnnulation" });
    },
    modifierTypeTexteLocal() {
      var nouveauObjet = {
        decision_cf: this.editMandat.decision_cf,
        famille_motif: this.editMandat.famille_motif,
        motif: this.editMandat.motif,
        date_decision: this.editMandat.date_decision_cf,
        diff_decision: 0,
        id_op: this.editMandat.id,
      };
        var nouveauObjet1 = {
          ...this.editMandat,
        decision_cf: this.editMandat.decision_cf,
        famille_motif: this.editMandat.famille_motif,
        motif: this.editMandat.motif,
        date_decision_cf: this.editMandat.date_decision_cf,
        // diff_op: 0,
        id: this.editMandat.id,
      };
      this.ajouterHistoriqueDecisionOp(nouveauObjet);
      this.modifierGestionOrdrePaiement(nouveauObjet1);
      this.$("#validationOpDefinitif12").modal("hide");
    },
    modifierDecisionFinal() {
      this.modifierGestionOrdrePaiement(this.editDecisionFinal);
      this.$("#validationOpDefinitif12").modal("hide");
    },
    apercuFacture0(id) {
      this.$("#validationOpDefinitif12").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandat = this.gettersgestionOrdrePaiement.find(
        (item) => item.id == id
      );
    },
 pagePrecedent(){
                window.history.back()
            },
    DecisionDefinitifCf(id) {
      this.$("#decisionDefinitif").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editDecisionFinal = this.gettersgestionOrdrePaiement.find(
        (item) => item.id == id
      );
    },
    formatageSommeSansFCFA: formatageSommeSansFCFA,
   formatageSomme:formatageSomme,
    //afiicher modal ajouter
  
    // fonction pour vider l'input ajouter
   
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editTypeTexte = this.typeTextes[index];
    },
    // fonction pour vider l'input modification

    alert() {
      console.log("ok");
    },

    ExporterEnExel() {
      this.$refs.excel.click();
    },
     async genererEnPdf(){
  await this.$htmlToPaper('printMe3');
},
  },
};
</script>

<style scoped>
.tailgrand {
  width: 54%;
  margin: 0 -30%;
  height: 50%;
}
.tailBtn {
  width: 100%;
}
.modal-body {
  max-height: 85%;
}
</style>
