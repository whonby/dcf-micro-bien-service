
<template>

<div>
 <div id="exampleModal1" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Affectation Véhicule</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
      <tr>
        <td colspan="2">
           <div class="control-group">
            <label class="control-label">Unite Administrative</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleUa(editAffectation.uniteadministrative)"
                class="span8"
                readonly
              />
            </div>
          </div>
        </td>
         <td>
               <div class="control-group">
            <label class="control-label">Immatriculation</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.numimmatriculation"
                class="span4"
                readonly
                style="color:red;font-size:30px"
              />
            </div>
          </div>
            </td>
      </tr>
          <tr>
           
             <td>
               <div class="control-group">
            <label class="control-label">Marque</label>
            <div class="controls">
              <input
                type="text"
                :value="libellemarqueVehicules(editAffectation.marque)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Modele</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleModeleVehicules(editAffectation.modele)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">N°Chassis</label>
            <div class="controls">
              <input
                type="text"
                :value="editAffectation.numchassis"
                class="span4"
              readonly
              />
            </div>
          </div>
            </td>
          </tr>
        <tr>
            <td>
               <div class="control-group">
            <label class="control-label">Date Affectation</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_affectation"
                class="span4"
                
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Détenteur</label>
            <div class="controls">
                              <select   class="span4" v-model="formData.personnel_id">
                                <option></option>
            <!-- <option v-for="resultat in affichePersonnel(editAffectation.uniteadministrative)" :key="resultat.id" 
            :value="resultat.acteur_depense_id">{{NomPersonnel(resultat.acteur_depense_id)}}</option> -->
                </select>
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Chauffeur</label>
            <div class="controls">
               <select   class="span4" v-model="formData.chauffeur_id">
                 <option></option>
            <!-- <option v-for="resultat in afficheNomChauffeur(editAffectation.uniteadministrative)" :key="resultat.id" 
            :value="resultat.acteur_depense_id">{{NomPersonnel(resultat.acteur_depense_id)}}</option> -->
                </select>
            </div>
          </div>
            </td>
             <!-- <td>
               <div class="control-group">
            <label class="control-label">N°Chassis</label>
            <div class="controls">
              <input
                type="text"
                :value="editAffectation.numchassis"
                class="span4"
              readonly
              />
            </div>
          </div>
            </td> -->
          </tr>
      </table>
      </div>
      <div class="modal-footer">
        <a
          
          class="btn btn-primary"
          href="#"
          @click.prevent="ajouterTitreLocal(formData)"
        >Affecter</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<table class="table table-bordered table-striped">
  <tr>
    <td>
      <label class="control-label">Unite Administrative</label>
       <!-- <select  class="span5" v-model="formData.uAdministrative_id">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select> -->
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
                        <a data-toggle="tab" href="#MatérielAffecter">Affectation Matériel</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#Véhiculeaffecter">Affectation Véhicule</a>
                      </li>
                       
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

<div id="MatérielAffecter" class="tab-pane active">
  <div class="widget-title">
                    <ul class="nav nav-tabs">
                     <li class="active">
                        <a data-toggle="tab" href="#personnel">Personnel</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#service">Service</a>
                      </li>
                       
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <div id="personnel" class="tab-pane active">
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
                    v-for="BesoinImmo in listePersonnelNonEquipee(formData.uAdministrative_id)"
                    :key="BesoinImmo.id"
                  >
                  <td style="text-align: center;"
                   
                    >{{afficherActeurDepenseMatricule(BesoinImmo.acteur_depense_id) || 'Non renseigné'}}</td>
                  
                     <td style="text-align: center;"
                   
                    >{{afficherActeurDepenseNomPrenoms(BesoinImmo.acteur_depense_id) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      
                    >{{afficheFonction(BesoinImmo.fonction_id)}}</td>
                   
                     <td>
                       <router-link
                        :to="{name : 'listedesArticleparPerso', params: {id:BesoinImmo.id}}"
                        class="btn btn-default"
                        title="Detail Immobilisation"
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link>
                     </td>
                     
                    
                    
                  </tr>
                 
                 
                 
                </tbody>
              </table>
                    </div>
                     <div id="service" class="tab-pane ">
                       <table class="table table-bordered table-striped">
                <thead>
                   <tr>

                        
                        <th style="width:40%">Service</th>
                        <th style="width:10%">Equipé</th>
                        <th style="width:10%">Affectation</th>
                         
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd gradeX" v-for=" affectService in listeDesServiceNonEquipeDeUa(formData.uAdministrative_id)"
                        :key="affectService.id">
                        
                             
                            <td >
                            {{afficherLibelleService(affectService.serviceua_id) || 'Non renseigné'}}</td>
                             <td style="text-align: center;">
                      
                       
                          
                         
                     <span style="font-weight: 500;" v-if="affectService.normeequipement == 0"  class="btn btn-success" >Oui</span>
                     <span  v-else  class="btn btn-danger" style="font-weight: 500;"> Non</span>
                     
                        
                     
                    </td>
                    <td>
                       <router-link
                        :to="{name : 'listedesArticleParService', params: {id:affectService.id}}"
                        class="btn btn-default"
                        title=""
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link>
                     </td>
                      <!-- <td title="Affectation d'equipement" style="font-weight: 500;">
                        <button class="btn btn-info" @click="fenetreAjouterAffectation(index)">
                        <span>
                          <i class="icon-hand-right"></i>
                        </span>
                      </button>
                     </td> -->
                    </tr>
                    </tbody>
              </table>
                     </div>
</div>

</div>
<div id="Véhiculeaffecter" class="tab-pane">
  <div class="widget-title">
                    <ul class="nav nav-tabs">
                     <li class="active">
                        <a data-toggle="tab" href="#Mesvéhicules">Mes véhicules</a>
                      </li>
                       <!-- <li>
                        <a data-toggle="tab" href="#service">Service</a>
                      </li> -->
                       
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <div id="Mesvéhicules" class="tab-pane active">
                        <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                   <th>Matricule</th>
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
                     <!-- <th>Transmission</th>
                     <th>Nombre portes</th>
                     <th>Nombre place</th> -->
                    <!-- <th>Puissance</th>
                     <th>Etat vehicule</th> -->
                    
                     <th colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in ListeDesVehiculeParUa(formData.uAdministrative_id)"
                    :key="BesoinImmo.id"
                  >
                  <td style="font-size:14px"> {{BesoinImmo.numidentification || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{BesoinImmo.numimmatriculation || 'Non renseigné'}}</td>
                    <!-- <td style="font-size:14px"> {{BesoinImmo.immobilisation || 'Non renseigné'}}</td> -->
                    <td style="font-size:14px"> {{libelleTypeVehicule(BesoinImmo.typevehicule) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libellemarqueVehicules(BesoinImmo.marque) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleModeleVehicules(BesoinImmo.modele) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleTypeEnergie(BesoinImmo.energie) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{BesoinImmo.numchassis || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{BesoinImmo.numserie || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{BesoinImmo.couleur || 'Non renseigné'}}</td>
                    <!-- <td style="font-size:14px"> {{libelleTransmission(BesoinImmo.transmission) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{BesoinImmo.nombreportes || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{BesoinImmo.nombreplace || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{BesoinImmo.puissance || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleEtatImmobilisations(BesoinImmo.etatvehicule) || 'Non renseigné'}}</td>
                     -->
                    <td>
                      <button class="btn  btn-danger" @click.prevent="fenetreAjouterAffectation(BesoinImmo.id)" v-if="BesoinImmo.situationvehicule == 1" :disabled="BesoinImmo.situationvehicule == 1" title="Vehicule déja affecté">
                        <span>
                          Occupé
                          
                        </span>
                      </button>
                      <button v-else @click.prevent="fenetreAjouterAffectation(BesoinImmo.id)" class="btn  btn-success" >
              
                        <span>
                          Disponible
                        </span>
                </button>
                    </td>
                    <td>
                      <router-link
                        :to="{name : 'DetaiAffectationVehicule', params: {id:BesoinImmo.id}}"
                        class="btn btn-default"
                        title="Detail Afféctation"
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link>
                      
             
                    </td>
                     
                    
                    
                  </tr>
                 
                 
                 
                </tbody>
              </table>
                    </div>
                     <!-- <div id="service" class="tab-pane ">96</div> -->
</div>

</div>
          <!-- <div id="EntreeEnStock" class="tab-pane active"><ListeDuStockparUa></ListeDuStockparUa> </div>
          <div id="Affectation" class="tab-pane ">
         
            <affectationEquipementParUa></affectationEquipementParUa>
           
             </div>
 <div id="Reparation" class="tab-pane "><ReparationEquipement></ReparationEquipement> </div> -->

 
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
    
    ModelListSelect,
     
  },
    data(){
        return{
      formData :{
ua_id:"",
serviceua_id:"",

      },
      editAffectation:{
        uniteadministrative:""
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
      "getterUa_idImo",
   "EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation","Transmissions"
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
      
    ListeDesVehiculeParUa() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.getvehicules.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadministrative)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.uniteadministrative == id );
        }
      };
          }
           return id => {
        if (id != null && id != "") {
          return this.getvehicules.filter(element => element.uniteadministrative == id );
        }
      };
     
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
   listeDesServiceNonEquipeDeUa() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.getterplanOrganisationUa.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          //return colect.filter(element => element.normeequipement != 0 && element.normeequipement != null)
        return id => {
        if (id != null && id != "") {
           return colect.filter(items=>items.ua_id == id && items.normeequipement != 0 && items.normeequipement != null);
        }
      };
       }

      // return this.getterplanOrganisationUa.filter(element => element.normeequipement != 0 && element.normeequipement != null)
 return id => {
        if (id != null && id != "") {
           return this.getterplanOrganisationUa.filter(items=>items.ua_id == id && items.normeequipement != 0 && items.normeequipement != null);
        }
      };
    },
AfficheTotalQteNonCouvert() {
      


        if (this.noDCfNoAdmin){
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
          return colect.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
       }

  
  return id => {
        if (id != null && id != "") {
          return this.acte_personnels.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
    },
AfficheTotalQteACouvrir() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          //return colect
        return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
      }

       //return this.acte_personnels
return id => {
        if (id != null && id != "") {
          return this.acte_personnels.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
    },
   
    afficheMontantTotalEquipementNonCouv() {
     
         return this.acte_personnels.filter(element => element.normeequipement != 0);
    },
    libelleUa() {
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
     affichePersonnel() {
      return id => {
        if (id != null && id != "") {
           return this.acte_personnels.filter(qtreel => qtreel.unite_administrative_id == id);
      
        }
      };
    },
     afficheNomChauffeur() {
      return id => {
        if (id != null && id != "") {
           return this.acte_personnels.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.fonction_id == 456);
      
        }
      };
    },
     NomPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseActeurDepense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom.concat("  ", qtereel.prenom);
      }
      return 0
        }
      };
    },
     
    //  libelleModeleVehicules() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.ModeleVehicules.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.libelle;
    //   }
    //   return 0
    //     }
    //   };
    // },
  // libellemarqueVehicules() {
  //     return id => {
  //       if (id != null && id != "") {
  //          const qtereel = this.marqueVehicules.find(qtreel => qtreel.id == id);

  //     if (qtereel) {
  //       return qtereel.libelle;
  //     }
  //     return 0
  //       }
  //     };
  //   },
afficheMontantTotalEquipementNonCouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.afficheMontantTotalEquipementNonCouv.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
         // return colect
       return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);
        }
      };
       }

      // return this.afficheMontantTotalEquipementNonCouv.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);
return id => {
        if (id != null && id != "") {
          return this.afficheMontantTotalEquipementNonCouv.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);
        }
      };
    },
    equipementNonCouvert(){
return this.acte_personnels.filter(element => element.normeequipement != 0)
},
   listeDesEquipementNonCouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.equipementNonCouvert.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id);
        }
      };
        }

          return id => {
        if (id != null && id != "") {
          return this.equipementNonCouvert.filter(element => element.unite_administrative_id == id);
        }
      };

    },
   affichePersonneNonEquipe(){
return this.acte_personnels.filter(element => element.normeequipement != 0)
},
  listePersonnelNonEquipee() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.affichePersonneNonEquipe.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
           return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id);
        }
      };
        }

        return id => {
        if (id != null && id != "") {
          return this.affichePersonneNonEquipe.filter(element => element.unite_administrative_id == id);
        }
      };

    },
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



    //   filtreServiceUniteAdministrative() {
    //   const st = this.search.toLowerCase();
    //   return this.servicesua.filter(type => {
    //     return (
         
    //       type.afficherLibelleService(this.libelle).toLowerCase().includes(st)
    //     );
    //   });
    // },
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
       "modifierDemandeMateriel",
       'ajouterAffectationVehicule', 
   'modifierAffectationVehicule', 'supprimerAffectationVehicule','modifierModeleVehicule']), 
     
    ...mapActions("uniteadministrative", [
      "ajouterNouveauVehicule",
      "modifierVehicule"
      ]),


  fenetreAjouterAffectation(id) {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAffectation = this.getvehicules.find(item=>item.id==id);
    },



    ajouterTitreLocal () {
      var nouveauObjet ={
        ...this.formData,
        
        uniteadministrative_id:this.editAffectation.uniteadministrative,
        vehicule_id:this.editAffectation.id,
        etat_veh:1
      }
      var nouveauObjet1 ={
        
        id:this.editAffectation.id,
        situationvehicule:1
        
      }
      this.ajouterAffectationVehicule(nouveauObjet)
      this.modifierVehicule(nouveauObjet1)
 this.$("#exampleModal").modal('hide');
        this.formData = {
              
            
        }
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
  width: 73%;
  margin: 0 -38%;
}
</style>