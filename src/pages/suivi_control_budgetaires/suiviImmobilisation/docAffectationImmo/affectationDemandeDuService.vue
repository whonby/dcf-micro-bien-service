afficheCauseInactivite
verrouilleCause
<template>

<div>
    
 <div id="exampleModalValidationdirecteur" class="modal hide valDirecteur">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision Du directeur</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
                 <div class="control-group">
                            <label class="control-label">Décision Directeur</label>
                            <div class="controls">
                              <select v-model="valideDirecteur.motif_directeur" class="span5">
                                        <option value=""></option>
                                      <option value="1">Visé</option>
                                    <option value="2">Différé</option>
                                    <option value="3">Réjeté</option>
                                    <option value="0">Attente</option>
                            
    
                             </select>
                           <!-- {{afficherResteStock}}
                           {{affichierQuantiteEnStock(valideDirecteur.article_id)}}
                           {{affichierIdQuantiteEnStock(valideDirecteur.article_id)}} -->
                            </div>
                          </div>
            </td>
          </tr>
          <tr>
            <td>
               <div class="control-group">
                            <label class="control-label">Cause</label>
                            <div class="controls">
                              <textarea name="" id="" cols="30" rows="2" class="span5" :readonly="verrouilleCause" v-model="valideDirecteur.cause_directeur"></textarea>
                              
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                            </div>
                          </div>
                          {{valideDirecteur.uniteadmin_id}}
            </td>
          </tr>
         <tr>
           <td>
             
                           <div class="control-group">
                            <label class="control-label">Date Decision :</label>
                            <div class="controls">
                              <input type="date" class="span5"  v-model="valideDirecteur.date_motif_directeur"/>
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                            </div>
                          </div>
           </td>
         </tr>
                               <!-- <div class="control-group">
                            <label class="control-label">Nom Emetteur :</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editMandat.nom_emetteur"/>
                              <input type="hidden" class="span"  :value="recuperer"/> 
                            </div>
                          </div> -->
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierDecisionDirecteur(valideDirecteur)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active">
                        <a data-toggle="tab" href="#tab00001">Listes des Demande service    <span class="badge badge-info">{{nombreDemande}}</span></a>
                      </li>
                    
                       <li class="">
                        <a data-toggle="tab" href="#tab00007">Validation Directeur  <span class="badge badge-important">{{nombreValidationEnAttenteDirecteur}}</span></a>
                      </li>
                    
                     
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

                    <div id="tab00007" class="tab-pane">
<table class="table table-bordered table-striped">
                 <thead>
                  <tr>
                
                   
                    <th>Unite d'administrative</th>
                    <th>Service</th>
                    <th>Article</th>
                    <th>Quantite</th>
                    <th>Cause inactivite</th>
                    <th>Cause de la demande</th>
                    <th >Date demande</th>
                     <!-- <th>duré vie</th> -->
                    
                     <th>Date motif Directeur</th>
                     <!-- <th >Duré traitement Directeur</th> -->
                      <th>Décision Directeur</th>
                     
                  </tr>
                </thead>
                <tbody>
                  
                  <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in afficheValidationDirecteur"
                    :key="BesoinImmo.id"
                  >
   
                    
                  
                    <td
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficherUniteAdministrative(BesoinImmo.uniteadmin_id) || 'Non renseigné'}}</td> 
                    
                                    
                      <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{affichierService(BesoinImmo.service_id) || 'Non renseigné'}}</td>
                      <td style=" color:black;font-size:14px;font-weight:bold;"
                      
                    >{{afficheFamille(BesoinImmo.article_id) || 0}}</td>
                    <td style=" text-align: center; color:black;font-size:14px;font-weight:bold;"
                     
                    >{{BesoinImmo.quantite || 0}}</td>
                   
                     <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{(afficheCauseInactivite(BesoinImmo.cause_inactivite)) || 'Non renseigné'}}</td>
                   
                      <td
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.cause_demande || 'Non renseigné'}}</td> 
                     <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_demande) || 'Non renseigné'}}</td> 
               
                    
                    

 <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_motif_directeur) || 'Non renseigné'}}</td>
                    <!-- <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.dure_traitement_directeur || 0 }}  Jours</td> -->

<td>
                        <button v-if="BesoinImmo.motif_directeur == 1"  class="btn  btn-success" @click="afficherModalPourValidationDuDirecteur(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="BesoinImmo.motif_directeur == 2" class="btn  btn-warning" @click="afficherModalPourValidationDuDirecteur(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="BesoinImmo.motif_directeur ==3" class="btn  btn-danger"  @click="afficherModalPourValidationDuDirecteur(index)">                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalPourValidationDuDirecteur(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                    
                      </button>
                    </td>
                    
                   
                  </tr>
                 
                 
                 
                 
                </tbody>
              </table>
                  </div>
                   <div id="tab00001" class="tab-pane active">
                     <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                
                   
                    <th>Unite d'administrative</th>
                    <th>Service</th>
                    <th>Article</th>
                    <th>Quantite</th>
                    <th>Cause inactivite</th>
                    <th>Cause de la demande</th>
                    <th >Date demande</th>
                     <!-- <th>duré vie</th> -->
                    
                     <th>Date motif Directeur</th>
                     <!-- <th >Duré traitement Directeur</th> -->
                      <th>Décision Directeur</th>
                     <th>Attribuer</th>
                  </tr>
                </thead>
                <tbody>
                  
                 
                 <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in afficheToutDemande"
                    :key="BesoinImmo.id"
                  >
   
                    
                
                    <td
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficherUniteAdministrative(BesoinImmo.uniteadmin_id) || 'Non renseigné'}}</td> 
                    
                                    
                      <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{affichierService(BesoinImmo.service_id) || 'Non renseigné'}}</td>
                      <td style=" color:black;font-size:14px;font-weight:bold;"
                      
                    >{{afficheFamille(BesoinImmo.article_id) || 0}}</td>
                    <td style=" text-align: center; color:black;font-size:14px;font-weight:bold;"
                     
                    >{{BesoinImmo.quantite || 0}}</td>
                   
                     <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{(afficheCauseInactivite(BesoinImmo.cause_inactivite)) || 'Non renseigné'}}</td>
                   
                      <td
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.cause_demande || 'Non renseigné'}}</td> 
                     <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_demande) || 'Non renseigné'}}</td> 
               
                    
                    

 <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_motif_directeur) || 'Non renseigné'}}</td>
                    <!-- <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.dure_traitement_directeur || 0 }}  Jours</td> -->

<td>
                        <button v-if="BesoinImmo.motif_directeur == 1"  class="btn  btn-success"  >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="BesoinImmo.motif_directeur == 4" class="btn  btn-warning"  >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="BesoinImmo.motif_directeur == 5" class="btn  btn-danger"  >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                    
                      </button>
                    </td>
                    
                    <td>
                       <button v-if="BesoinImmo.motif_directeur == 1" class="btn  btn-success" >                        
                     
                      
                       <span  >Oui</span>
                      
                    
                    
                      </button>  
                      <button v-else class="btn  btn-danger" >                        
                     
                      
                       <span  >Non</span>
                      
                    
                    
                      </button>  
               
               
                    </td>
                  </tr>
                 
                 
                </tbody>
              </table>
                   </div>
                  </div>
                  <br />
              
                </div>
              </table>
            </div>  
       
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../src/Repositories/Repository';
import moment from 'moment';
export default {
    data(){
        return{
      formData :{
s_ua_id:"",
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
         valideDirecteur:{
        article_id:"",
motif_directeur:"",
date_motif_directeur:"",
cause_directeur:""
      },
search:""
        }
    },
    props:["macheid"],
    created(){},

       computed: {

            ...mapGetters("bienService", [ "gettersCotations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
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
      "demandeMateriel"
   
   ]),
  
    //   filtreServiceUniteAdministrative() {
    //   const st = this.search.toLowerCase();
    //   return this.servicesua.filter(type => {
    //     return (
         
    //       type.afficherLibelleService(this.libelle).toLowerCase().includes(st)
    //     );
    //   });
    // },
    verrouilleCause(){

    return this.valideDirecteur.motif == 1;
},
    afficheCauseInactivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.causeInactivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
afficheFamille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
affichierService() {
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





afficheValidationDirecteur() {
      
          return this.demandeMateriel.filter(element => element.fonction_id == 0 && element.motif_directeur == 0 );
       
    },
afficheToutDemande() {
      
          return this.demandeMateriel.filter(element => element.fonction_id == 0 );
       
    },

    nombreDemande() {
      
          return this.afficheToutDemande.length;
       
    },
nombreValidationEnAttenteDirecteur() {
      
          return this.afficheValidationDirecteur.length;
       
    },





       ServiceEquipe (){
return this.servicesua.filter(element => element.normeequipement == 0)
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
       "modifierDemandeMateriel"
      
     
    ]),
   
modifierDecisionDirecteur(){

var objetDirecteur = {
  ...this.valideDirecteur,
  motif_directeur:this.valideDirecteur.motif_directeur,
  
 
}
this.modifierDemandeMateriel(objetDirecteur)
this.$("#exampleModalValidationdirecteur").modal('hide');
},
    afficherModalPourValidationDuDirecteur(index) {
      this.$("#exampleModalValidationdirecteur").modal({
        backdrop: "static",
        keyboard: false
      })
      this.valideDirecteur = this.afficheValidationDirecteur[index];
      
      },


formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme: formatageSomme,

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