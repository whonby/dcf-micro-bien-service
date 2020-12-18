
<template>

<div>
<table class="table table-bordered table-striped">
  <tr>
    <td>
        <label class="control-label">Unite Administrative</label>
       <select  class="span5" v-model="formData.uAdministrative_id">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
    </td>
  </tr>
</table>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      
                       <li class="active">
                       
                        <a data-toggle="tab" href="#ExecutionReparationVeicule">EXECUTION DE REPARATION DE VEHICULE  </a>
                      </li>
                       <li class="">
                           <a data-toggle="tab" href="#ExecutionReparationMateriel">EXECUTION DE REPARATION DE MATERIEL ET MOBILIER  </a>
                        
                      </li>
                      <!-- <li class="">
                        <a data-toggle="tab" href="#tab12">Liste du Personnel Equipées    </a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab1296">Taux équipement par agent</a>
                      </li> -->
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
  <div id="ExecutionReparationMateriel" class="tab-pane">
    <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <!-- <li class="active">
                        <a data-toggle="tab" href="#tab789651">Liste du Personnel</a>
                      </li> -->
                       <li class="active">
                        <a data-toggle="tab" href="#ExecutionReparationMateriel">Réparation Matériel et Mobilier</a>
                      </li>
                      <!-- <li class="">
                        <a data-toggle="tab" href="#ExecutionReparationMateriel">Equipements Non Couverts   </a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab12">Liste du Personnel Equipées    </a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab1296">Taux équipement par agent</a>
                      </li> -->
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

          <div id="ExecutionReparationMateriel" class="tab-pane active">
            <table class="table table-bordered table-striped">
                <thead>
                   <tr>
                   <th>Année</th>
                    <th>Article</th>
                    <th>Panne Signalée</th>
                    <th>Date du bon de commande</th>
                    <th>Date de sortie</th>
                    <th>Garage</th>
                    <th>Montant de réparation</th>
                   
                   <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr
                    class="odd gradeX"
                    v-for="equipement in listeReparationEnExecutionMateriel(formData.uAdministrative_id)"
                    :key="equipement.id"
                  >
                    <td style="font-size:14px">
                   {{equipement.anneebudgetaire || 'Non renseigné'}}</td>
                
                 <td style="font-size:14px">
                   {{libelleFamille(equipement.article_id) || 'Non renseigné'}}</td>
                 <td style="font-size:14px" >
                   {{affichePanneSignaler(afficheIdMarche(equipement.acte_id)) || 'Non renseigné'}}</td>
                  <td style="font-size:14px">
                   {{formaterDate(equipement.date_signal) || 'Non renseigné'}}</td>
                    <td style="font-size:14px">
                   {{formaterDate(equipement.date_envoi) || 'Non renseigné'}}</td>
                   
                     <td style="font-size:14px">
                   {{afficheNomEntreprise(afficheIdEntreprise(equipement.acte_id)) || 'Non renseigné'}}</td>
                     <td style="font-size:14px">
                   {{formatageSomme(parseFloat(afficheMontantReparation(equipement.acte_id))) || 'Non renseigné'}}</td>
                    
                    <td>
                     <router-link :to="{ name: 'detailExecutionHorsSib', params: { id: this.afficheIdMarche(equipement.acte_id) }}"
                 class="btn btn-inverse " title="Execution du marche">
        <span class=""><i class=" icon-fast-forward"></i></span>
    </router-link>
                      
                    </td>
                  </tr>
                    </tbody>
              </table>
          </div>

 
        </div>
      </div>
      
              </table>
 
  </div>
  </div>
          <div id="ExecutionReparationVeicule" class="tab-pane active">
            
            

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <!-- <li class="active">
                        <a data-toggle="tab" href="#tab789651">Liste du Personnel</a>
                      </li> -->
                       <li class="active">
                        <a data-toggle="tab" href="#tab7896512">Réparation Véhicule</a>
                      </li>
                      <!-- <li class="">
                        <a data-toggle="tab" href="#ExecutionReparationMateriel">Equipements Non Couverts   </a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab12">Liste du Personnel Equipées    </a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab1296">Taux équipement par agent</a>
                      </li> -->
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

          <div id="tab7896512" class="tab-pane active">
            <table class="table table-bordered table-striped">
                <thead>
                   <tr>
                   <th>Année</th>
                    <th>Véhicule</th>
                    <th>Panne Signalée</th>
                    <th>Date du bon de commande</th>
                    <th>Date de sortie</th>
                    <th>Garage</th>
                    <th>Montant de réparation</th>
                   
                   <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="equipement in listeReparationEnExecution(formData.uAdministrative_id)"
                    :key="equipement.id"
                  >
                    <td style="font-size:14px">
                   {{equipement.anneebudgetaire || 'Non renseigné'}}</td>
                
                 <td style="font-size:14px">
                   {{afficheImmatriculation(equipement.vehicule_id) || 'Non renseigné'}}</td>
                 <td style="font-size:14px" >
                   {{affichePanneSignaler(afficheIdMarche(equipement.acte_id)) || 'Non renseigné'}}</td>
                  <td style="font-size:14px">
                   {{formaterDate(equipement.date_signal) || 'Non renseigné'}}</td>
                    <td style="font-size:14px">
                   {{formaterDate(equipement.date_envoi) || 'Non renseigné'}}</td>
                   
                     <td style="font-size:14px">
                   {{afficheNomEntreprise(afficheIdEntreprise(equipement.acte_id)) || 'Non renseigné'}}</td>
                     <td style="font-size:14px">
                   {{formatageSomme(parseFloat(afficheMontantReparation(equipement.acte_id))) || 'Non renseigné'}}</td>
                    
                    <td>
                     <router-link :to="{ name: 'detailExecutionHorsSib', params: { id: this.afficheIdMarche(equipement.acte_id) }}"
                 class="btn btn-inverse " title="Execution du marche">
        <span class=""><i class=" icon-fast-forward"></i></span>
    </router-link>
                      
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>

 
        </div>
      </div>
      
              </table>
 
  </div>


    
          </div>

 
        </div>
      </div>
      
              </table>
 
  </div>


    

              
     




  






    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../Repositories/Repository';
import {admin,dcf,noDCfNoAdmin} from "../../../../Repositories/Auth"
//import ListePersonnelParUa from '../../../suiviImmobilisation/RefaireComptabiliteMatiere/AffectationEquipementParUa/DossierAffectation/ListePersonnelParUa'
//import moment from 'moment';
export default {
  // components: {
    
  //   ListePersonnelParUa
     
  // },
    data(){
        return{
      formData :{
ua_id:"",
serviceua_id:"",

      },
       formData2:{
        famillearticle_id :"",
        qte_affecte:"",
        date_mise_service:"",
        identification:"",
        type_immo:"",
        nature_dentree:"",
        nature_bien:"",
        etat_immobilisation:"",
        cause_inactivite:"",

      },
search:""
        }
    },
    props:["macheid"],
    created(){},

       computed: {
  admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters("bienService", [ "gettersCotations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters("personnelUA", ["acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["getterplanOrganisationUa","exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
       ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe', 
  'planActe']),
 ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives"
      // "chapitres",
      // "sections"
    ]),
   ...mapGetters("SuiviImmobilisation", ["services",
    "trieUaImmobilisation",
      "equipements",
      "familles",
      "articles",
      "SommeQuantiteNonCouvert",
      "getAfficheArticle",
      "getPersoStock",
      "stockageArticles",
      "groupUatypeNorme",
      "groupUaNorme",
      "groupUaNormeFamille",
      "normeEquipements",
      "groupUaNormeEquipe",
      "groupUaNormeFonction",
      "getPersoNormeArticle",
      "services",
      "besoinEquipement",
      "afficherDirection",
      "afficherService",
      "afficherFonction",
      "type_Unite_admins",
      "getPersoListeDesNorme",
      "normeImmo",
      "getPersonnaliseNormeEquipement",
      "afficherDemandeParService",
      "natureEntres",
      "EtatImmobilisations",
      "causeInactivite",
      "immobilisations",
      "afficheRegroupeEquipementCouvert",
      "demandeMateriel",
      "getterUa_idImo"
   
   ]),
  //  afficherLibelleService() {
  //     return id => {
  //       if (id != null && id != "") {
  //          const qtereel = this.services.find(qtreel => qtreel.id == id);

  //     if (qtereel) {
  //       return qtereel.libelle;
  //     }
  //     return 0
  //       }
  //     };
  //   },
   listeReparationEnExecutionMateriel() {
      return id => {
        if (id != null && id != "") {
           return this.ReparationVehicules.filter(qtreel => qtreel.ua_id == id && qtreel.vehicule_id == null && qtreel.date_retour == null);

      
        }
      };
    },
listeReparationEnExecution() {
      return id => {
        if (id != null && id != "") {
           return this.ReparationVehicules.filter(qtreel => qtreel.ua_id == id && qtreel.article_id == null && qtreel.date_retour == null);

      
        }
      };
    },

libelleFamille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

  

      afficheImmatriculation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getvehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numimmatriculation;
      }
      return 0
        }
      };
    },
    afficheIdMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.marche_id;
      }
      return 0
        }
      };
    },
     afficheMontantReparation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
    afficheIdEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    },
    afficheNomEntreprise() {
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
     affichePanneSignaler() {
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

      methods:{ 

          ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),
              fenetreAjouterAffectation(index) {
      this.$("#nonEquiper").modal({
        backdrop: "static",
        keyboard: false
      });

      this.formData = this.afficheServiceNonEquipe[index];
    },

    


formatageSomme:formatageSomme,

//  formaterDate(date) {
//               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
//             },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
</style>