uniteAdministratives
<template>
  <div>
  <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div> 
    
      <hr />
      <!-- <div  align="right" style="cursor:pointer;">
    <button class="btn btn-success" @click.prevent="ajouterDemandeEngage"><i class="icon icon-folder-open"> Nouveau demande d'engagement</i></button>
    
        </div>  -->
      <h3>Detail Demande</h3>
    <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>MODE</th>
                         <th>N°DEMANDE</th>
                        <th>EXERCICE</th>
                        <th>MINISTERE/INSTITUTION</th>
                         <th>PROGRAMME/DOTATION</th>
                        <th>ACTION</th>
                        <th>ACTIVITE</th>
                         <th>UNITE ADMINISTRATIVE</th>
                        <th>NATURE DE DEPENSE</th>
                        <th>TYPE DE PROCEDURE</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.mode}}</td>
                  <td>{{detail_marche.numero_dmd_combine}}</td>
                  <td>{{detail_marche.exercice}}</td>
                  <td>{{libelleSection(detail_marche.section_id)}}</td>
                  <td>{{libelleProgramme(detail_marche.programme_id)}}</td>
                  <td>{{libelleAction(detail_marche.action_id)}}</td>
                  <td>{{libelleActivite(detail_marche.activite_id)}}</td>
                  <td>{{libelleUa(detail_marche.ua_id)}}</td>
                  <td>{{libelleGrandNature(detail_marche.grd_nature_id)}}</td>
                  <td>{{detail_marche.type_procedure_id}}</td>
                  
                  </tr>
                  
                    </tbody> 
                </table>
<table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>TYPE ENGAGEMENT</th>
                         <th>MODE PAIEMENT</th>
                        <th>REF JURIDIQUE</th>
                        <th>ENTREPRISE</th>
                         <th>LIGNE ECONOMIQUE</th>
                        <th>MONTANT TOTAL</th>
                        <th>MONTANT TRESOR</th>
                         <th>MONTANT DON</th>
                        <th>MONTANT EMPRUNT</th>
                        <th>BAILLER</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.type_engagement_id}}</td>
                   <td>{{ModePaiement(detail_marche.mode_paiement_id)}}</td>
                    <td>{{detail_marche.ref_juridique}}</td>
                     <td>{{Numero_Nom_Entreprise(detail_marche.entreprise_id)}}</td>
                      <td>{{libelleLigneEconomique(detail_marche.ligne_economique_id)}}</td>
                       <td>{{formatageSomme(parseFloat(detail_marche.total_general))}}</td>
                        <td>{{formatageSomme(parseFloat(detail_marche.montant_tresor))}}</td>
                         <td>{{formatageSomme(parseFloat(detail_marche.montant_don))}}</td>
                          <td>{{formatageSomme(parseFloat(detail_marche.montant_emprunt))}}</td>
                           <td>{{libelleSourceFinancement(detail_marche.bailler_id)}}</td>
                  </tr>
                  
                    </tbody> 
                </table>
                  
<table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>OBJET DEPENSE</th>
                         <th>N° OP</th>
                        <th>AUTRE TYPE ENGAGEMENT</th>
                        <th>BANQUE</th>
                         <th>FAMILLE MOTIF</th>
                        <th>AUTRES MOTIF</th>
                        <th>MOTIF</th>
                         <th>DECISION</th>
                        <th>DATE MOTIF</th>
                        <th>OBSERVATION</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.objet_depense}}</td>
                   <td>{{detail_marche.numero_op_at}}</td>
                    <td>{{detail_marche.autre_type_engagement}}</td>
                     <td>{{detail_marche.entreprise_id}}</td>
                      <td>{{detail_marche.famille_motif_cf}}</td>
                       <td>{{detail_marche.autre_motif_cf}}</td>
                        <td>{{detail_marche.motif_cf}}</td>
                         
                         <td >
                        <button v-if="detail_marche.decision_cf == 8"  class="btn  btn-success"  >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="detail_marche.decision_cf == 2" class="btn  btn-warning"  >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="detail_marche.decision_cf == 3" class="btn  btn-danger"  >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="detail_marche.decision_cf == 9"  class="btn  btn-success"  >                        
                     
                      <span>Visé avec observation</span>
                      
                      </button>
                     <button v-else class="btn  btn-info"  >                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                    </td>
                          <td>{{detail_marche.date_motif}}</td>
                           <td>{{detail_marche.observation}}</td>
                  </tr>
                  
                    </tbody> 
                </table>
   
 <!-- <h3>Detail Liquidation</h3>
    <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>N°MANDAT</th>
                         <th>N°LIQUIDATION</th>
                        <th>DATE MANDAT</th>
                        <th>DECISION CF</th>
                         <th>FAMILLE MOTIF</th>
                        <th>AUTRE MOTIF</th>
                        <th>MOTIF</th>
                         <th>DATE MOTIF</th>
                        <th>OBSERVATION</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  
                
                  
                  </tr>
                  
                    </tbody> 
                
    </table>

                 <h3>Detail Mandat</h3>
    <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           
                         <th>N°LIQUIDATION</th>
                        <th>DATE LIQUIDATION</th>
                        <th>DECISION CF</th>
                         <th>FAMILLE MOTIF</th>
                        <th>AUTRE MOTIF</th>
                        <th>MOTIF</th>
                         <th>DATE MOTIF</th>
                        <th>OBSERVATION</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  <td>{{detail_marche.id}}</td>
                  
                
                  
                  </tr>
                  
                    </tbody> 
                
    </table> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "@/Repositories/Repository";
import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
// import {  ModelListSelect } from 'vue-search-select'
//     import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  components: {
    
    // ModelListSelect,
     
  },
  name: 'besionImmolisation',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
          
        },
        {
                  name: 'searchMe',
                   icon: "search"
              }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
// json_fields: {
//         TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
//         UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
//         DESIGNATION: "famille.libelle",
//         QUANTITE: "quantite",
//         PRIX_UNITAIRE: "prix_unitaire",
//         MONTANT_TOTAL: "montant_total",
//          DATE_DE_DEMANDE: "date_jour",
//       },
quantite: {
       
        qteentrant1:"0",
        date_entre:""
       
      },
      formData: {
        uAdministrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qtesortie:"0"
        
       
      },
      uniteAdministrative_id:"",
       affiche_filtre:false,
      affiche_boutton_filtre:true,
      editStock: {
       uAdministrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qteentrant1:"0",
        
        
      },
      search: ""
    };
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.gettersDemandeEngagement.find(
       idmarche => idmarche.id == this.$route.params.id
         )
         
},
  computed: {
           admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["FichierJoinDmdEngagement","salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["gettersDossierFacturePiece","typeFactures","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),
...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      "taux",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
      
      ModePaiement() {
      return (id) => {
        if (id != null && id != "" ) {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
libelleSourceFinancement() {
      return (id) => {
        if (id != null && id != "" ) {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
     listePieceJustifica() {
      return (id) => {
        if (id != null && id != "" ) {
           const qtereel = this.typeFactures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
     
CumulDemande: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.gettersDemandeEngagement.filter(normeEquipe => normeEquipe.ligne_economique_id == id && normeEquipe.decision_cf == 8 || normeEquipe.ligne_economique_id == id && normeEquipe.decision_cf == 9).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
      CreditAutorise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return ""
        }
      };
    },
    CreditAutoriseTresor() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1 && qtreel.typefinancement_id==14);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },
    CreditAutoriseDon() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1 && qtreel.typefinancement_id==13);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },
    CreditAutoriseEmprunt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1 && qtreel.typefinancement_id==15);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    libelleAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    libelleActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
     libelleProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    libelleSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section.concat('  ',qtereel.nom_section)
      }
      return 0
        }
      };
    },
    libelleMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche.concat('  ',qtereel.objet)
      }
      return 0
        }
      };
    },
libelleLigneEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    idSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.section_id
      }
      return 0
        }
      };
    },
    idProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.program_id
      }
      return 0
        }
      };
    },
    idActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.activite_id
      }
      return 0
        }
      };
    },
    objetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    Numero_CC() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_cc
      }
      return 0
        }
      };
    },
    Numero_Nom_Entreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale
      }
      return 0
        }
      };
    },
    Numero_adresse_Entreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.	adresse
      }
      return 0
        }
      };
    },

    libelleUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    idAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.action_id
      }
      return 0
        }
      };
    },
    
    

     TotalGeneralDemandeEngagement() { 
      const val = parseFloat(this.formData.montant_tresor) + parseFloat(this.formData.montant_don) + parseFloat(this.formData.montant_emprunt);
      return parseFloat(val).toFixed(0);
      
    },
    
    ligneEconomique() {
      return (id,id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.ua_id == id && qtreel.gdenature_id == id2 && qtreel.actived==1);

      
        }
      };
    },
    numeroOrdre() {
      
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id && qtreel.etat_piece=="proforma").length + 1 ;

      
        }
      };
    },
    numeroOrdreDefinitive() {
      
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id && qtreel.etat_piece=="definitive").length + 1 ;

      
        }
      };
    },

    listePieceJustificative() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id && qtreel.etat_piece=="proforma" );

      
        }
      };
    },
    listePieceJustificativeDefinitive() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id && qtreel.etat_piece=="definitive" );

      
        }
      };
    },
    idEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.numero_marche == id);

      if (qtereel) {
        return qtereel.entreprise_id
      }
      return 0
        }
      };
    },
    idActeeffect() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.numero_marche == id);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },
    libelleGrandNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
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
      "ajouterDossierFacture",
      "modifierDossierFacture",
      "supprimerDossierFacture"
     
    ]),
      ...mapActions('personnelUA', ["ajouterFichierJointDmd"]),

pagePrecedent(){
                window.history.back()
            },
 genererEnPdf(){
  this.$htmlToPaper('printMe');
},

afficherModalListePersonnel(){
                this.$router.push({ name: 'ListeUaExecutionBudgetaire' })
            },


      
   OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                Array.from(files).forEach(file => this.addFichierPDF(file));
            },
            addFichierPDF(file) {
                if (!file.type.match("application/pdf")) {
                    this.info_pdf=true;
                    console.log(`${file.name} le fichier doit etre un PDF`);
                    return;
                }
                this.info_pdf=false;
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },
    afficherModalModifierTypeTexte(id) {
      this.$("#ModifierexampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editpiece = this.gettersnomPieceJustificative.find(item=>item.id==id);
    },
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      this.modifierPieceJustificative(this.editpiece);
this.$("#ModifierexampleModal").modal('hide');
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
       
    },
    AjoutePieceJustific() {
      if(this.formData.type_procedure_id=='Engagement par Bon de Commande'){
 this.intitule=this.anneeAmort + "" + this.formData.numero_demande
      var nouvelObjetProforma = {
        
        	numero_ordre:this.numeroOrdre(this.formData.numero_demande),
      numero_demande_engagement:this.formData.numero_demande,
      numero_dmd_combine:this.intitule,
      libelle:this.formData1.libelle,
      reference:this.formData1.reference,
      date_piece:this.formData1.date_piece,
      etat_piece:"proforma"
      };
    
      this.ajouterPieceJustificative(nouvelObjetProforma)
      this.ajouterFichierJoin()
   this.$('#exampleModal').modal('hide');
       this.formData1 = {
        
        numero_demande_engagement:"",
      numero_dmd_combine:"",
      libelle:"",
      reference:"",
      date_piece:"",
      };
      }
     else{
        this.intitule=this.anneeAmort + "" + this.formData.numero_demande
      var nouvelObjetdefinitive = {
        
        	numero_ordre:this.numeroOrdreDefinitive(this.formData.numero_demande),
      numero_demande_engagement:this.formData.numero_demande,
      numero_dmd_combine:this.intitule,
      libelle:this.formData1.libelle,
      reference:this.formData1.reference,
      date_piece:this.formData1.date_piece,
      etat_piece:"definitive"
      };
    
      this.ajouterPieceJustificative(nouvelObjetdefinitive)
      this.ajouterFichierJoin()
   this.$('#exampleModal').modal('hide');
       this.formData1 = {
        numero_demande_engagement:"",
      numero_dmd_combine:"",
      libelle:"",
      reference:"",
      date_piece:"",
      };
     }
    },






rechercheListeMarche(){
      // console.log(this.formMandater.matricule_m)

      let objetMandater=this.acteEffetFinanciers.filter(item=>item.numero_marche==this.formData2.acte_financier_id)
      // console.log(objetMandater)
      if(objetMandater!=undefined){
        if (objetMandater.length==1){
          let acteur= this.acteEffetFinanciers.find(item=>item.numero_marche==this.formData2.acte_financier_id)
          this.formData2.numero_cc_fournisseur_nom=acteur.entreprise_id,
          this.formData2.numero_cc_fournisseur_adresse=acteur.entreprise_id,
         this.formData2.Numéro_cc_fournisseur=acteur.entreprise_id,
         this.formData2.objet_marche=acteur.marche_id,
         this.formData2.ua=acteur.ua_id
         
          this.message_mandater=" "

        }
        else{
          this.message_mandater="Ce Numero cc  n'existe pas dans notre base de donnée "
          this.formData2.numero_cc_fournisseur_nom=""
        }
      }
      if(this.formData2.acte_financier_id==""){
        this.formData2.numero_cc_fournisseur_nom==""
          this.formData2.numero_cc_fournisseur_adresse==""
         this.formData2.Numéro_cc_fournisseur==""
         this.formData2.objet_marche=="",
         this.formData2.ua==""
        this.message_mandater=" "
      }
    },







rechercheMembreCojo(){
      // console.log(this.formMandater.matricule_m)

      let objetMandater=this.entreprises.filter(item=>item.numero_cc==this.formData2.Numéro_cc_fournisseur)
      // console.log(objetMandater)
      if(objetMandater!=undefined){
        if (objetMandater.length==1){
          let acteur= this.entreprises.find(item=>item.numero_cc==this.formData2.Numéro_cc_fournisseur)
          this.formData2.numero_cc_fournisseur_nom=acteur.raison_sociale,
          this.formData2.numero_cc_fournisseur_adresse=acteur.adresse,
         this.formData2.entrprise_id=acteur.id,
          this.message_mandater=" "

        }
        else{
          this.message_mandater="Ce Numero cc  n'existe pas dans notre base de donnée "
          this.formData2.numero_cc_fournisseur_nom=""
        }
      }
      if(this.formData2.Numéro_cc_fournisseur==""){
        this.formData2.numero_cc_fournisseur_nom=""
        this.message_mandater=" "
      }
    },





    ajouterFichierJoin () {
      if(this.formData.type_procedure_id=='Engagement par Bon de Commande'){
const formData = new FormData();
                this.intitule = this.anneeAmort + "" + this.formData.numero_demande
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
    
                formData.append('numero_dmd_combine', this.intitule);
                formData.append('numero_demande_engagement', this.formData.numero_demande);
                 formData.append('numero_fichier', this.numeroOrdre(this.formData.numero_demande));
                 formData.append('etat_piece','proforma')
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterFichierJointDmd(formData,config)
                
      }
                else{
                  const formData = new FormData();
                this.intitule = this.anneeAmort + "" + this.formData.numero_demande
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
    
                formData.append('numero_dmd_combine', this.intitule);
                formData.append('numero_demande_engagement', this.formData.numero_demande);
                 formData.append('numero_fichier', this.numeroOrdre(this.formData.numero_demande));
                 formData.append('etat_piece','definitive')
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterFichierJointDmd(formData,config)
                
                }
               

            },

ajouterFacture(){
  if(this.formData.type_procedure_id=='Engagement par Bon de Commande'){
this.intitule=this.anneeAmort + "" + this.formData.numero_demande
              var nouvelObjetproforma = {
        ...this.FormDataFacture,
          total_facture_ht:this.MontantFactureHt,
        	numero_dmd_engagement:this.intitule,
          numero_dmd:this.formData.numero_demande,
          etat_acticle:"proforma"
      };
    
      this.ajouterDossierFacture(nouvelObjetproforma)
       this.FormDataFacture={
    designation:"",
    quantite:"0",
    prix_unitaire:"0",
    total_facture_ht:"0"
  }
  }
  else{
    this.intitule=this.anneeAmort + "" + this.formData.numero_demande
              var nouvelObjetdefinitive = {
        ...this.FormDataFacture,
          total_facture_ht:this.MontantFactureHt,
        	numero_dmd_engagement:this.intitule,
          numero_dmd:this.formData.numero_demande,
          etat_acticle:"definitive"
      };
    
      this.ajouterDossierFacture(nouvelObjetdefinitive)
       this.FormDataFacture={
    designation:"",
    quantite:"0",
    prix_unitaire:"0",
    total_facture_ht:"0"
  }
  }
              
            },
AjouterDemandeEngagement() {
  this.intitule=this.anneeAmort + "" + this.formData.numero_demande
      if(this.formData5.Auteur_id == 2){
        
var nouvelObjet1 = {
        ...this.formData,
        numero_dmd_combine:this.intitule,
        	programme_id:this.idProgramme(this.formData.ligne_economique_id),
     action_id:this.idAction(this.formData.ligne_economique_id),
     	activite_id:this.idActivite(this.formData.ligne_economique_id),
     	nom_autre:this.formData2.numero_cc_fournisseur_nom,
     total_general:this.TotalGeneralDemandeEngagement,
    exercice:this.anneeAmort,
    section_id:this.idSection(this.formData.ligne_economique_id),
    uaBeneficiaire_id:this.formData.uaBeneficiaire_id,
    	entreprise_id:this.idEntreprise(this.formData2.acte_financier_id),
           acte_financier_id:this.idActeeffect(this.formData2.acte_financier_id)
            ()
      };
    
      this.ajouterDemandeEngagement(nouvelObjet1)
      
      }
      else if(this.formData5.Auteur_id == 3){
        
var nouvelObjet2 = {
        ...this.formData,
        numero_dmd_combine:this.intitule,
        	programme_id:this.idProgramme(this.formData.ligne_economique_id),
     action_id:this.idAction(this.formData.ligne_economique_id),
     	activite_id:this.idActivite(this.formData.ligne_economique_id),
     	nom_autre:this.libelleUniteAdministrative(this.formData2.uaBeneficiaire_id),
     total_general:this.TotalGeneralDemandeEngagement,
    exercice:this.anneeAmort,
    section_id:this.idSection(this.formData.ligne_economique_id),
    uaBeneficiaire_id:this.formData.uaBeneficiaire_id,
    	entreprise_id:this.formData2.entrprise_id
      };
    
      this.ajouterDemandeEngagement(nouvelObjet2)
      
      }
      else if(this.formData5.Auteur_id == 4){
        
var nouvelObjet3 = {
        ...this.formData,
        numero_dmd_combine:this.intitule,
        	programme_id:this.idProgramme(this.formData.ligne_economique_id),
     action_id:this.idAction(this.formData.ligne_economique_id),
     	activite_id:this.idActivite(this.formData.ligne_economique_id),
     	nom_autre:this.formData2.nom_autre,
       adresse:this.formData2.numero_cc_autre_adresse,
       numero_cc_autre:this.formData2.numero_cc_autre,
     total_general:this.TotalGeneralDemandeEngagement,
    exercice:this.anneeAmort,
    section_id:this.idSection(this.formData.ligne_economique_id),
    uaBeneficiaire_id:this.formData.uaBeneficiaire_id,
    	entreprise_id:this.formData2.entrprise_id
      };
    
      this.ajouterDemandeEngagement(nouvelObjet3)
      
      }
    },
    
ajouterFonctionGroupe(){
  //  this.ajouterFichierJoin()
  this.AjouterDemandeEngagement()
  this.formData={
mode:"",
numero_demande:"",
ligne_economique_id:"",
ua_id:"",
grd_nature_id:"",
type_procedure_id:"",
autre_type_engagement:"",
numero_op_at:"",
ref_juridique:"",
type_engagement_id:"",
Référence_bancaires:"",
mode_paiement_id:"",
montant_don:"",
montant_emprunt:"",
montant_tresor:""
  }
  this.formData2={
    Numéro_cc_fournisseur:"",
    numero_cc_autre1:"",
    numero_cc_autre:""
  }
 
},


  afficherModalAjouterFacture() {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });
    },
      afficherModalAjouterService() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },

apercuFacture() {
      this.$("#ApercuFacture").modal({
        backdrop: "static",
        keyboard: false
      });
    },


    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
formatageSomme:formatageSomme





            
}


    };
</script>

<style scoped>
.taille{
  width: 80%;
  margin: 0 -40%;
  height: 50%;
}
.tailles{
   width: 64%;
  margin: 0 -30%;
  
}
.ApercuFacture1{
 width: 64%;
  margin: 0 -30%;
  
  border: 2px solid #000;

}
</style>
