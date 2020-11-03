
<template>
  
     
         <div >
             
             

           <table class="table table-bordered table-striped" id="app1" >
       
                 <thead style="border:5px">
                   
                   <tr >
                      <td colspan="4">
                        <div align="center"> <h4>ORDRE DE PAIEMENT D'ANNULATION</h4> </div>
                      </td>
                   </tr>
                   <tr>
                    
                     <th style="width:16%">NUMERO OP PROVISOIRE</th>
                     <td style="color:red;font-size:25px"> {{detailOpProvisoire.numero_op_provisoire}} </td>
                      <th style="width:16%">NUMERO OP D'ANNULATION</th>
                     <td style="color:red;font-size:25px"> {{detailOpProvisoire.numero_op_annulation}} </td>
                 </tr>
                 <tr>
                     <th style="width:16% ">EXERCICE</th>
                     <td colspan="5"> {{detailOpProvisoire.exercice_budget}} </td>
                    
                 </tr>
                 <tr>
                    <!-- <th rowspan="5" style="margin:0 auto">IMPUTATION BUDGETAIRE</th> -->
                     <th style="width:16%">SECTION</th>
                     <td colspan="5">{{afficherSection(detailOpProvisoire.section_id)}} </td>
                 </tr>
                 <tr>
                   
                     <th style="width:16%">PROGRAMME/DOTATION</th>
                     <td colspan="5">{{afficherLibelleProgramme(detailOpProvisoire.programme_id)}} </td>
                 </tr>
                 <tr>
                   
                     <th style="width:16%">ACTION</th>
                     <td colspan="5"> {{afficherLibelleAction(detailOpProvisoire.action_id)}} </td>
                 </tr>
                 <tr>
                   
                     <th style="width:16%">ACTIVITE</th>
                     <td colspan="5">{{afficherLibelleActivite(detailOpProvisoire.activite_id)}} </td>
                 </tr>
                 <tr>
                   
                     <th style="width:16%">CLASSIFICATION ECONOMIQUE</th>
                     <td colspan="5">{{afficherLibellePlanEconomique(detailOpProvisoire.ligne_id)}} </td>
                 </tr>
                 </thead>

             </table>
       <table class="table table-bordered table-striped" id="app1" >
       
                 <thead style="border:5px">
                   
                  
                 <tr>
                     <th style="width:16%">NOM DE L'ENTREPRISE</th>
                     <td colspan="3"> {{afficherNomEntreprise(detailOpProvisoire.entreprise_id)}} </td>
                    
                 </tr>
                 <tr>
                    <!-- <th rowspan="5" style="margin:0 auto">IMPUTATION BUDGETAIRE</th> -->
                     <th style="width:16%">COMPTE CONTRIBUABLE</th>
                     <td >{{afficherNumeroCCEntreprise(detailOpProvisoire.entreprise_id)}} </td>
                     <th style="width:16%">ADRESSE</th>
                     <td >{{afficherAdresseEntreprise(detailOpProvisoire.entreprise_id)}} </td>
                 </tr>
                 <tr>
                   
                     <th style="width:16%">REFERENCES BANCAIRES</th>
                     <td colspan="3">{{afficherLibelleCompte(detailOpProvisoire.compte_id)}} </td>
                 </tr>
               
                 </thead>

             </table>
             <table class="table table-bordered table-striped" id="app1" >
       
                 <thead style="border:5px">
                   
                  
                 <tr>
                     <th style="width:16%">OBJET DE LA DEPENSE</th>
                     <td colspan="3" style="text-align:center"> {{afficherLibelleMarche(detailOpProvisoire.marche_id)}} </td>
                     
                 </tr>
                 <tr>
                    <!-- <th rowspan="5" style="margin:0 auto">IMPUTATION BUDGETAIRE</th> -->
                     <th style="width:16%">PIECES JUSTIFICATIVES</th>
                     <td colspan="3"> </td>
                 </tr>
                 <tr>
                   
                     <th style="width:16%">LIVRABLES</th>
                     <td colspan="3">{{afficherLivrable(detailOpProvisoire.marche_id)}} </td>
                 </tr>
                 <tr>
                   
                     <th style="width:16%">BENEFICIAIRES</th>
                     <td colspan="3"> {{afficherBeneficiaire(detailOpProvisoire.marche_id)}} </td>
                     
                 </tr>
                 <tr>
                   
                     <th style="width:16%">GEOLOCALISATION</th>
                     <td >{{afficherGeolocalisationMarche(afficherIdParent(detailOpProvisoire.marche_id))}} </td>
                     <th style="width:16%">DUREE DE REALISATION</th>
                     <td >{{afficherDureeMarche(detailOpProvisoire.marche_id)}} Jours </td>
                 </tr>
                 <tr>
                   
                     <th style="width:16%">MONTANT EN CHIFFRES</th>
                     <td >{{formatageSomme(parseFloat(afficherMontantFacture(detailOpProvisoire.facture_id)))}} </td>
                       <th style="width:16%">MODE DE REGLEMENT</th>
                     <td >{{afficherModeDePaiement(detailOpProvisoire.mod_paiement_engage)}} </td>
                 </tr>
                 </thead>

             </table>

             
<table class="table table-bordered table-striped" id="app1" >
       
                 <thead style="border:5px">
                   
                  
                 <tr>
                     <!-- <th style="width:16%">SOURCE DE FINANCEMENT</th>
                     <td> {{detailOpProvisoire.bailler_id}} </td> -->
                      <th style="width:16%">NOM DU BAILLEUR</th>
                     <td> {{afficheSourcesFinancement(detailOpProvisoire.bailler_id)}} </td>
                 </tr>
                
                
                 </thead>

             </table>
            
              <table class="table table-bordered table-striped" id="app1" >
       
                 <thead style="border:5px">
                   
                  
                 <tr>
                     <th style="width:16%">Crédits autorisés (A)</th>
                     <td> {{formatageSomme(parseFloat(afficherMontantBudgetaireInitial(afficherIdLigneBudgetaire(afficherIdParent(detailOpProvisoire.marche_id)))))}} </td>
                     
                 </tr>
                 <!-- <tr>
                    
                     <th style="width:16%">Engagements antérieurs (B)</th>
                     <td colspan="3">{{formatageSomme(parseFloat(Engagementsantérieurs(afficherIdLigneBudgetaire(afficherIdParent(detailOpProvisoire.marche_id)))))}} </td>
                 </tr> -->
                 <tr>
                   
                     <th style="width:16%">Engagement actuel (C)</th>
                     <td colspan="3" style="background:green;color:#fff">{{formatageSomme(parseFloat(afficherMontantFacture(detailOpProvisoire.facture_id)))}} </td>
                 </tr>
                 <tr>
                   
                     <th style="width:16%">Cumul engagements(y compris celle-ci) (D)</th>
                     <td colspan="3"> {{formatageSomme(parseFloat(Engagementsantérieurs(afficherIdLigneBudgetaire(afficherIdParent(detailOpProvisoire.marche_id)))))}} </td>
                 </tr>
                 <tr>
                   
                     <th style="width:16%">Disponible budgétaire (E=A - D)</th>
                     <td colspan="3" style="background:red;color:#fff">{{formatageSomme(parseFloat(afficherMontantBudgetaireInitial(afficherIdLigneBudgetaire(afficherIdParent(detailOpProvisoire.marche_id))))-parseFloat(Engagementsantérieurs(afficherIdLigneBudgetaire(afficherIdParent(detailOpProvisoire.marche_id)))))}} </td>
                    
                 </tr>
                 
                 </thead>

             </table>
             <hr>
         </div>
     





                        <!-- <div v-else> -->
                        <!-- <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p> -->
                        <!-- </div> -->
              

        <!-- <fab :actions="fabActions" @cache="afficherModalAjouterpaiementPersonnel" main-icon="apps" bg-color="green"></fab>
            <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterpaiementPersonnel()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
      <notifications  /> -->
    
</template>

<script>
    // import moment from "moment";
    import { mapGetters, mapActions } from "vuex";
    // import html2canvas from 'html2canvas'
    // import * as JsPDF from 'jspdf'
    // import html2pdf from 'html2pdf.js'
    // import moment from "moment";
    // import { ModelListSelect } from "vue-search-select";
    // import "vue-search-select/dist/VueSearchSelect.css";
    import { formatageSomme } from "@/Repositories/Repository";

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
                
                search: "",
            
            };
        },
        
        computed: {
            ...mapGetters('horSib', ['gettersopProvisoire']),
            ...mapGetters("bienService", ["getFacturePersonnaliser","getterActeEffetFinanciers","modepaiements",'mandats','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
                'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
                'nombremarchesExecute',"avenants","getMandatPersonnaliserVise",
                'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
                "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
                "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser",
                "typeActeEffetFinanciers","personnaliseGetterMarcheBailleur","getterMandate",
                "getActeEffetFinancierPersonnaliserContrat","getterCojos","getterDemandeAno","getterAnoDMPBailleur"]),

            ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),

            ...mapGetters('uniteadministrative',[
                "plans_programmes",
                "uniteAdministratives",
                "afficheNiveauAction",
                "afficheNiveauActivite",
                "derniereNivoPlanBudgetaire",
                "getPersonnaliseBudgetGeneralParPersonnel",
                "budgetEclate"


            ]),

            ...mapGetters('parametreGenerauxAdministratif',[

                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires",
                "localisations_geographiques"
            ]),
...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
            ...mapGetters('parametreGenerauxFonctionnelle',[

                "plans_fonctionnels",
                "afficheNiveauPlanFonctionnel"
            ]),

            ...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

            ...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters('gestionMarche', ['entreprises',"secteur_activites",'banques','comptes','getCompte',]),

Engagementsantérieurs: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.mandats.filter(normeEquipe => normeEquipe.ligne_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
afficherIdLigneBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.economique_id;
      }
      return ""
        }
      };
    },

afficherMontantBudgetaireInitial() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id);

      if (qtereel) {
       
           return qtereel.dotation;
      }
      return ""
        }
      };
    },
afficherDureeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterActeEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.duree;
      }
      return ""
        }
      };
    },
afficherSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
      
        return qtereel.code_section.concat(' - ', qtereel.nom_section)
      }
      return 0
        }
      };
    },
afficherLibelleProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
      
        return qtereel.code.concat(' - ', qtereel.libelle)
      }
      return "Non renseigné"
        }
      };
    },
    afficherLibelleAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
      
        return qtereel.code.concat(' - ', qtereel.libelle)
      }
      return "Non renseigné"
        }
      };
    },
    afficherLibelleActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
      
        return qtereel.code.concat(' - ', qtereel.libelle)
      }
      return "Non renseigné"
        }
      };
    },
    afficherLibellePlanEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
      
        return qtereel.code.concat(' - ', qtereel.libelle)
      }
      return "Non renseigné"
        }
      };
    },
    afficherNomEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
      
        return qtereel.raison_sociale
              }
      return "Non renseigné"
        }
      };
    },
    afficherLibelleCompte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getCompte.find(qtreel => qtreel.id == id);

      if (qtereel) {
      
        return qtereel.rib
              }
      return "Non renseigné"
        }
      };
    },
    afficherMontantFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_propose_ttc;
      }
      return ""
        }
      };
    },
    afficherNumeroCCEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_cc;
      }
      return ""
        }
      };
    },
    afficherAdresseEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return qtereel.email.concat(' / ', qtereel.telephone).concat(' / ', qtereel.adresse)
      }
      return ""
        }
      };
    },
    afficherLibelleMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return this.afficheNumeroMarche(qtereel.id).concat(' / ', qtereel.objet)
      }
      return ""
        }
      };
    },
    afficheSourcesFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficheLocalisationDuMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.localisations_geographiques.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficheNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterActeEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
    afficherModeDePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
    afficherIdParent() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.parent_id;
      }
      return ""
        }
      };
    },
    afficherGeolocalisationMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return this.afficheLocalisationDuMarche(qtereel.localisation_geographie_id).concat(' / ',this.afficheLocalisationDuMarche(qtereel.departement_id) ).concat(' / ', this.afficheLocalisationDuMarche(qtereel.sous_prefecture_id))
      }
      return 0
        }
      };
    },
    afficherBeneficiaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.beneficiaire;
      }
      return ""
        }
      };
    },
    afficherLivrable() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.livrable;
      }
      return ""
        }
      };
    },
        },
        created() {
            this.marcheid=this.$route.params.id
   this.detailOpProvisoire = this.gettersopProvisoire.find(
       idmarche => idmarche.id == this.$route.params.id
         )
  
},
        methods: {
            ...mapActions("personnelUA", [
                "getpaiementPersonnel",
                "ajouterpaiementPersonnel",
                "modifierpaiementPersonnel",
                "supprimerpaiementPersonnel"
            ]),
            formatageSomme:formatageSomme,
            // formaterDate(date) {
            // return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            // },
            ExporterEnExel(){
                this.$refs.excel.click()
            },
            afficherModalListeExecution(){
                window.history.back();
            },
        }
    };
</script>
<style scoped>

    .tailgrand{
        width: 95%;
        margin: 0 -48%;


    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    th{
background:#1f262d;
color:#fff;
font-size: 12px;
text-align: left;
    }
    td{

color:#000;
font-size: 20px;
text-align: left;
    }
</style>