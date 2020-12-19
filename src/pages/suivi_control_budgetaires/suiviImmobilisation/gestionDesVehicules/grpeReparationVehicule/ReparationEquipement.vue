reparation
<template>

<div>
<table class="table table-bordered table-striped">
  <tr>
    <td>
       <!-- <select  class="span5" v-model="formData.uAdministrative_id">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select> -->
                    <label class="control-label">Unite Administrative</label>
                     <model-list-select style="background-color: rgb(233,233,233);"
                                                       class="wide"
                                                       :list="filtre_unite_admin"
                                                       v-model="formData.uAdministrative_id"
                                                       option-value="id"
                                                       option-text="libelle"
                                                       placeholder="Unité administrative"
                                    >

                                    </model-list-select>
    </td>
  </tr>
</table>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      
                       <li class="active">
                        <a data-toggle="tab" href="#reparationmateriel">REPARATION MATERIEL ET MOBILIER</a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#Reparationvehicule">REPARATION VEHICULE </a>
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
  <div id="Reparationvehicule" class="tab-pane">
    <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <!-- <li class="active">
                        <a data-toggle="tab" href="#tab789651">Liste du Personnel</a>
                      </li> -->
                       <li class="active">
                        <a data-toggle="tab" href="#vehicule">Listes des Vehicules</a>
                      </li>
                      <!-- <li class="">
                        <a data-toggle="tab" href="#vehicule">Equipements Non Couverts   </a>
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

          <div id="vehicule" class="tab-pane active">
            <table class="table table-bordered table-striped">
                <thead>
                     <tr>
                    <th>N°identification</th>
                    <th>N°immatriculation</th>
                     <!-- <th>Immobilisation</th> -->
                     <th>Type véhicule</th>
                     <th>Marque</th>
                    <th>Modèle</th>
                     <th>Energie</th>
                     <th>N°chassis</th>
                     <th>N°serie</th>
                    <th>Couleur</th>
                     <th>Transmission</th>
                     <th>Nombre portes</th>
                     <th>Nombre place</th>
                    <th>Puissance</th>
                     <th>Etat vehicule</th>
                    
                    
                    <th colspan="2">Action</th>
                     
                  </tr>
                </thead>
                <tbody>
                    <tr class="odd gradeX" v-for="reparation in listeDesVehiculeParUa(formData.uAdministrative_id)"
                        :key="reparation.id">
                        
                             
                           
                           <td style="font-size:14px"> {{reparation.numidentification || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{reparation.numimmatriculation || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleTypeVehicule(reparation.typevehicule) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libellemarqueVehicules(reparation.marque) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleModeleVehicules(reparation.modele) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleTypeEnergie(reparation.energie) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{reparation.numchassis || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{reparation.numserie || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{reparation.couleur || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleTransmission(reparation.transmission) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{reparation.nombreportes || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{reparation.nombreplace || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{reparation.puissance || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleEtatImmobilisations(reparation.etatvehicule) || 'Non renseigné'}}</td>
                    <td >
                         <router-link
                        :to="{name : 'AjouterReparationVehicule', params: {id:reparation.id}}"
                        class="btn btn-info"
                        title=""
                      >
                        <span>
                          <i class="icon  icon-plus"></i>
                        </span>
                      </router-link>
                    </td>
                    <td>
                      
                       <router-link
                        :to="{name : 'listeReparationParVehicule', params: {id:reparation.id}}"
                        class="btn btn-success"
                        title=""
                      >
                        <span>
                          <i class="icon icon-list-ol"></i>
                        </span>
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
          <div id="reparationmateriel" class="tab-pane active">
            
            

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <!-- <li class="active">
                        <a data-toggle="tab" href="#tab789651">Liste du Personnel</a>
                      </li> -->
                       <li class="active">
                        <a data-toggle="tab" href="#tab7896512">Listes du Personnel</a>
                      </li>
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

          <div id="tab7896512" class="tab-pane active">
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                   <th style="width:40%">Matricule</th>
                        <th style="width:40%">Nom && Prénoms</th>
                        
                        <th style="width:40%">Fonction</th>
                    <!-- <th >Equipé</th> -->
                     <th >Action</th>
                  </tr>
                </thead>
                <tbody>
                  
                 <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in listePersonnelAffectete(formData.uAdministrative_id)"
                    :key="BesoinImmo.id"
                  >
                  <td style="text-align: center;"
                   
                    >{{afficherActeurDepenseMatricule(BesoinImmo.acteur_depense_id) || 'Non renseigné'}}</td>
                  
                    <td style="text-align: center;"
                   
                    >{{afficherActeurDepenseNomPrenoms(BesoinImmo.acteur_depense_id) || 'Non renseigné'}}</td>
                     <td style="text-align: center;"
                   
                    >{{afficheFonction(BesoinImmo.fonction_id)}}</td>
                     
                      <!-- <td>
                         <router-link
                        :to="{name : 'AjouterReparationVehicule', params: {id:BesoinImmo.id}}"
                        class="btn btn-info"
                        title=""
                      >
                        <span>
                          <i class="icon  icon-plus"></i>
                        </span>
                      </router-link>
                    </td> -->
                      <td>
                      
                       <router-link
                        :to="{name : 'ListeArticleParPersonne', params: {id:BesoinImmo.id}}"
                        class="btn btn-success"
                        title=""
                      >
                        <span>
                          <i class="icon icon-list-ol"></i>
                        </span>
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
import { formatageSomme } from '../../../../../Repositories/Repository';
import {admin,dcf,noDCfNoAdmin} from "../../../../../Repositories/Auth"
import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
//import ListePersonnelParUa from '../../../suiviImmobilisation/RefaireComptabiliteMatiere/AffectationEquipementParUa/DossierAffectation/ListePersonnelParUa'
//import moment from 'moment';
export default {
  components: {
    
    ModelListSelect
     
  },
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
      "uniteAdministratives",
      "getvehicules"
      // "chapitres",
      // "sections"
    ]),
      ...mapGetters("SuiviImmobilisation", ["Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),  
     
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
   filtre_unite_admin() {
                if(this.noDCfNoAdmin){
                    let colect=[];
                    let vM=this
                    this.uniteAdministratives.filter(item=>{
                        console.log("OK bonjour GUE")
                        if(vM.getterUniteAdministrativeByUser.length>0){
                            let val= vM.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                            if (val!=undefined){
                                colect.push(item)
                                return item
                            }
                        }

                    })
                    return colect
                }
                return this.uniteAdministratives
            },
      
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
  afficheFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
afficherActeurDepenseNomPrenoms() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.nom.concat('    ',qtereel.acteur_depense.prenom);
      }
      return 'Non renseigné'
        }
      };
    },
afficherActeurDepenseMatricule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.matricule;
      }
      return 'Non renseigné'
        }
      };
    },

  listePersonnelAffectete() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id );
        }
      };
          }
           return id => {
        if (id != null && id != "") {
          return this.acte_personnels.filter(element => element.unite_administrative_id == id);
        }
      };
         



    },

afficherUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficherLibelleService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
   listeDesVehiculeParUa() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.getvehicules.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadministrative)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          //return colect.filter(element => element.normeequipement != 0 && element.normeequipement != null)
        return id => {
        if (id != null && id != "") {
           return colect.filter(items=>items.uniteadministrative == id);
        }
      };
       }

      // return this.getterplanOrganisationUa.filter(element => element.normeequipement != 0 && element.normeequipement != null)
 return id => {
        if (id != null && id != "") {
           return this.getvehicules.filter(items=>items.uniteadministrative == id);
        }
      };
    },
 libelleTransmission() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.Transmissions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     libelleEtatImmobilisations() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.EtatImmobilisations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleTypeVehicule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.TypeVehicule.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleTypeEntretien() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.TypeEntretien.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleModeleVehicules() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ModeleVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     libellemarqueVehicules() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marqueVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  libelleTypeEnergie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.TypeEnergie.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
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