
<template>
  <div>
      <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <ul class="nav nav-tabs">
              <!-- <li class="active">
                <a data-toggle="tab" href="#tab2078"
                  >Listes des Decomptes Année en cours
                  <span class="badge badge"></span></a
                >
              </li> -->

             <!-- <li>
                <a data-toggle="tab" href="#tab100">
                  Historique decompte
                  <span class="badge badge-important">
                    </span
                  ></a
                >
              </li> -->
               <li class="active">
                <a data-toggle="tab" href="#tab10045">
                  Listes des Decomptes Année Anterieur
                  <span class="badge badge-important">
                    </span
                  ></a
                >
              </li>
            </ul>


          </div>
          <div class="widget-content tab-content">
<!-- <div id="tab2078" class="tab-pane active">
wwwwwwwwwwww
</div>
<div id="tab100" class="tab-pane ">
  azertrt
</div> -->
<div id="tab10045" class="tab-pane active">
  <!-- <tr>
    <td>
                          <label
                            >Unité Administrative
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="listeDesUa"
                            v-model="formData.uniteadministrative_id"
                            option-value="id"
                            option-text="libelle"
                            placeholder=""
                          >
                          </model-list-select>
                          
                        </td>
                        <td>
                          <label
                            >Unité Administrative
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="listeDesUa"
                            v-model="formData.uniteadministrative_id"
                            option-value="id"
                            option-text="libelle"
                            placeholder=""
                          >
                          </model-list-select>
                          
                        </td>

  </tr> -->
<div class="widget-title">
            <ul class="nav nav-tabs">
               <li v-for="item in arrayExerciceDecompte(detailOp.uniteadministrative_id)" :key="item" class=""><a data-toggle="tab" :href="'#'+item">Exercice {{item}}</a></li>

            </ul>


          </div>
          <div class="widget-content tab-content">
          


<div v-for="item in arrayExerciceDecompte(detailOp.uniteadministrative_id)" :key="'DEC'+item" :id="item" class="tab-pane">
   
<table class="table table-bordered table-striped">
                      <thead>
                      <tr>

                          <th style="text-align:center;font-size:12px">DESCRIPTION DES PRESTATIONS</th>

                          <th style="text-align:center;font-size:12px">TITULAIRE DU MARCHE</th>
                          <th style="text-align:center;font-size:12px">MONTANT DU MARCHE</th>
                          <th style="text-align:center;font-size:12px">MONTANT PAYE</th>
                          <th style="text-align:center;font-size:12px">NUMERO DECOMPTE</th>
                          <th style="text-align:center;font-size:12px">DATE</th>
                         
                          <th style="text-align:center;font-size:12px" colspan="2">ACTION </th>
                      </tr>

                      </thead>
                      <tbody>
                    <tr class="odd gradeX" v-for="type in decompteParExercice(detailOp.uniteadministrative_id,item)" :key="type.id">
                         
                          <td style="text-align:center;">{{afficheObjetMarche(type.marche_id) || 'Non renseigné'}}</td>
                          <td style="text-align:center;">{{AfficheEntrepriseLibelle(afficheIdEntreprise(type.marche_id)) || 'Non renseigné'}}</td>
                          <td style="text-align:center;">{{formatageSomme(parseFloat(AfficheMontantMarche(type.marche_id))) || 'Non renseigné'}}</td>
                          <td style="text-align:center;">{{formatageSomme(parseFloat(type.montantmarche)) || 'Non renseigné'}}</td>
                          <td style="text-align:center;">{{type.numero_decompte || 'Non renseigné'}}</td>
                          <td style="text-align:center;">{{formaterDate(type.date_decompte) || 'Non renseigné'}}</td>
                               <td>
                             
                              <button class="btn btn-danger" @click="supprimerDecompteFacture(type.id)">
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                              </button>
                          </td>
                          
                          
                      </tr> 
                     <tr>
                       <td></td>
                        <td></td>
                         <td></td>
                          <td></td>
                           <td>CUMUL DECOMPTE</td>
                            <td>78555</td>
                             <td></td>
 
                     </tr>
                      
                      </tbody>
                  </table>
                  </div>
          </div>

</div>
          </div>
        

  </div>
  </div>
  </div>
   
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
 import {formatageSomme} from "@/Repositories/Repository"
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
// import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
export default {
  components: {
   // ModelListSelect
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },
      ],
      page: 0,
      size: 10,
      active_el: 0,
      formData: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",

        servicegest_id: "",
        nature_section_id: "",
      },
      editObservation: {},
      editUniteAdministrative: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
        servicegest_id: "",
        nature_section_id: "",
      },
      json_fields: {
        TYPE_UNIT_ADMINISTRATIVE: "typeua.libelle",
        SECTION: "secti.nom_section",
        SERVICE_GESTIONNAIRE: "servivegest.libelle",
        LOCALISATION_GEO: "localgeo.libelle",
        CODE: "code",
        LIBELLE: "libelle",
        DATE_CREATION: "date_creation",
      },
      search: "",
    };
  },

  created() {
    this.marcheid = this.$route.params.id;
    this.detailOp = this.decomptefactures.find(
      (idmarche) => idmarche.id == this.$route.params.id
    );
  },
  computed: {
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
      "decomptefactures",
      "groupeUniteAdministrativeDecompte"

      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "structures_administratives",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections",
      "structures_geographiques",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", ["plans_fonctionnels"]),

    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    ...mapGetters("bienService", [
      "gettersServiceRealiteFaitOp",
      "groupeUniteAdministrativeDecompte",
      "getFacturePersonnaliser",
      "getterActeEffetFinanciers",
      "modepaiements",
      "mandats",
      "getActeEffetFinancierPersonnaliser45",
      "getActeEffetFinancierPersonnaliser",
      "acteEffetFinanciers",
      "montantPlanification",
      "montantContratualisation",
      "afficheContratualisation",
      "affichePlanifier",
      "nombremarchesExecute",
      "avenants",
      "getMandatPersonnaliserVise",
      "AfficheMarcheNonAttribue",
      "nombreTotalMarche",
      "marches",
      "typeMarches",
      "getMarchePersonnaliser",
      "printMarcheNonAttribue",
      "procedurePassations",
      "typeTypeProcedures",
      "montantComtratualisation",
      "text_juridiques",
      "gettersOuverturePersonnaliser",
      "typeActeEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
      "getterMandate",
      "getActeEffetFinancierPersonnaliserContrat",
      "getterCojos",
      "getterDemandeAno",
      "getterAnoDMPBailleur",
      "motifDecisions"
    ]),

    ...mapGetters("personnelUA", ["acteur_depenses", "paiementPersonnel"]),

    ...mapGetters("uniteadministrative", [
      "plans_programmes",
      "uniteAdministratives",
      "afficheNiveauAction",
      "afficheNiveauActivite",
      "derniereNivoPlanBudgetaire",
      "getPersonnaliseBudgetGeneralParPersonnel",
      "budgetEclate",
      "getSousBudget"
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "localisations_geographiques",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel",
    ]),

    ...mapGetters("parametreGenerauxActivite", [
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),

    ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
    ...mapGetters("gestionMarche", [
      "entreprises",
      "secteur_activites",
      "banques",
      "comptes",
      "getCompte",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structuresDecision",
      "plans_Decision",
      
    ]),
    // admin: admin,
    // dcf: dcf,
    // noDCfNoAdmin: noDCfNoAdmin,
    listeDesUa() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        this.uniteAdministratives.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.uniteadministrative_id == item.id
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
    afficheIdEntreprise() {
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
    AfficheMontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_marche;
      }
      return "Non renseigné"
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
    afficheMarcheDecompte() {
      return id => {
        if (id != null && id != "") {
          return this.decomptefactures.filter(
            element => element.uniteadministrative_id == id 
          );
        }
      };
    },
    decompteParExercice(){
      return (marche_id,exercice)=>{
          let objet=this.afficheMarcheDecompte(this.detailOp.uniteadministrative_id)
          if(objet.length>0){
              return objet.filter(item=>item.exercicebudget==exercice && item.diff_decompte==1)
          }
          return []
      }
      },
   arrayExerciceDecompte(){
           return (marche_id)=>{
               let objet=this.afficheMarcheDecompte(marche_id)
             //  let vm=this
               let array_exercie=[]
               if(objet.length>0){


                   objet.forEach(function (val) {
                       array_exercie.push(val.exercicebudget)
                   })
                   let unique = [...new Set(array_exercie)]
                  // console.log(unique)
                   if (unique.length==1){
   return []
                   }
                   return unique
               }
               return []
           }
      },
    //fonction Lega le 18/03/2021
recupererNomDuControleurF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUtilisateur.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.name;
      }
      return 0
        }
      };
    },
recupererIdUser() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectionServiceCF.find(qtreel => qtreel.servicecf_id == id && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.user_id;
      }
      return 0
        }
      };
    },
 recupererIdServiceCF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectation.find(qtreel => qtreel.uniteadministrative_id == id   && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.servicecf_id;
      }
      return 0
        }
      };
    },
    AfficheSectionLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sections.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.nom_section;
          }
          return 0;
        }
      };
    },

    AfficheProgrammeLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_programmes.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheUaLibelle() {
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

    AfficheActiviteLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheLigneEconoLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_budgetaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheEntrepriseLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.raison_sociale;
          }
          return 0;
        }
      };
    },


    recupCompte1(){
    
          const qtereel = this.getterActeEffetFinanciers.find((qtreel) => qtreel.entreprise_id == this.detailOp.entreprise_id);

          if (qtereel) {
            return qtereel.compte_id;
          }
          return 0;
        
     
    },  

    recupCompte2(){
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.comptes.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.rib;
          }
          return 0;
        }
      };
    },

     recupBanquee1(){
          const qtereel = this.getterActeEffetFinanciers.find((qtreel) => qtreel.entreprise_id == this.detailOp.entreprise_id);
          if (qtereel) {
            return qtereel.banq_id;
          }
          return 0;
    },

     recupBanquee2(){
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.banques.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheNumeroMarcheLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.numero_marche;
          }
          return 0;
        }
      };
    },

    AfficheTypeFinancementLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.types_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

       AfficheSourceFinancementLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sources_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheModePaiementLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.modepaiements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

       AfficheFamilleMotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.motifDecisions.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

     AfficheMotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.motifDecisions.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

AfficheActionLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    
AfficheSousBudgetLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getSousBudget.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.activite_enfant;
          }
          return 0;
        }
      };
    },

    //fin des fonctions Lega  

    listeServiceRealiteFait() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersServiceRealiteFaitOp.filter(
            (qtreel) => qtreel.op_definitif_id == id
          );
        }
      };
    },
    afficheNumeroOPAnnulation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.groupeUniteAdministrativeDecompte.find(
            (qtreel) => qtreel.numero_ordre_paiement == id
          );

          if (qtereel) {
            return qtereel.id_op_provisoire;
          }
          return 0;
        }
      };
    },
  

    afficheNumeroOP() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.groupeUniteAdministrativeDecompte.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_ordre_paiement;
          }
          return 0;
        }
      };
    },
  },
  methods: {
    ...mapActions("bienService", [
      "ajouterServiceRealiteFaitOp",
      "modifierServiceRealiteFaitOp",
      "supprimerServiceRealiteFaitOp",
    ]),
     ...mapActions('uniteadministrative',[

 "ModifierDecompteFacture",
 "supprimerDecompteFacture"
   
   
   ]),
    afficherModalListeExecution() {
      window.history.back();
    },
  
    
    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme:formatageSomme,
    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>
<style>
.tailleModal {
  width: 53%;
  margin: 0 -28%;
}
td{
  font-size:14px;
}
th{
  font-size:14px;
}
</style>