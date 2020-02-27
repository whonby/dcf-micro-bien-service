afficherActeurDepense
<template>
    <div class="container-fluid">
         <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#tab2078">Toutes les transferts <span class="badge badge-inverse" >{{nombreTransfert}}</span></a></li>
                               <li ><a data-toggle="tab" href="#tab100">Transferts en attentes    <span class="badge badge-info" >{{afficheNbreTransfertEnAnttente}}</span></a></li>
                                <li ><a data-toggle="tab" href="#tab10">Transferts visés  <span class="badge badge-success" >{{afficheNbreTransfertValider}}</span></a></li>
                                <li><a data-toggle="tab" href="#tab20">Transferts différés  <span class="badge badge-warning" >{{afficheNbreTransfertDiffere}}</span></a></li>
                                 <li><a data-toggle="tab" href="#tab20002">Transferts rejétes  <span class="badge badge-important" >{{affichenbreTransfertRejeter}}</span></a></li>
                                  <li><a data-toggle="tab" href="#tab99999">Recherches Transferts  </a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab2">Liste des lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Contratualisation</a></li> -->
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
        <div id="tab99999" class="tab-pane">
                              <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Recherche</h5>
              <div align="right">
                Recherche Par numero de Transfert:
                <input type="search"  v-model="search" />
              </div>
            </div>
                             <table class="table table-bordered table-striped">
                <thead>
                <tr>
                      <th>Numero transfert</th>
                 <th>Matricule Acteurs</th>
                      <th>Destinataire</th>
                   
                    <th>Ligne budgetaire</th>
                    <th>Grande nature</th>
                       <th>UA</th>
                        <th>Montant Contrat</th> 
                                    <th>Motif CF</th>
                                <th>Observation CF</th>
                                <th>Date reception</th>
                                 <th>Date Decision CF</th>
                                <th title="programme/dotation">Durée traitement</th>
                                <th>D&eacute;cision CF</th>
                </tr>
              </thead>
                <tbody>
                <tr class="odd gradeX" v-for="type in filtre_Historique" :key="type.id">
                  
                  <td>{{type.num_transfert || 'Non renseigné'}}</td>
                  <td>{{afficherActeurDepense(type.acteurdepense_id)|| 'Non renseigné'}} </td>
                     <td>{{afficherDestinataire(type.unitezone_id) || 'Non renseigné'}}</td>
                      
                         <td>{{afficherCodeTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}-{{afficherTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}</td>
                  <td>{{afficherGrandNature(type.grandnatire_id)|| 'Non renseigné'}}</td>
                  <td>{{afficherUa(type.ua_id) || 'Non renseigné'}}</td>
                   <td style="text-align: center;">{{formatageSomme(parseFloat(type.montant_total_contrat)) || 'Non renseigné'}}</td>
                    <td>{{afficherDecision(type.motif) || 'Non renseigné'}}</td>
                    <td>{{type.observation || 'Non renseigné'}}</td>
                     <td>{{type.date_jours || 'Non renseigné'}}</td> 
                     <td>{{type.date_motif|| 'Non renseigné'}}</td> 
                       <td>{{type.delaitraitement || 0 }}  jour(s)</td>
                      
               
                  <td>
                        <button v-if="type.decision_cf == 1"  class="btn  btn-success">                        
                     
                      <span    >Viser</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning">                        
                     
                      
                       <span  >Différer</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger">                        
                     
                      
                       <span  >Réjeter</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info">                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                  
                </tr>
                   <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                     <td style="font-weight:bold;">Total</td>
                        <td  style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(filtre_HistoriqueMontant))}}</td>
                        <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
                           
                        </div>











                            <div id="tab10" class="tab-pane">
                              <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Transferts visés</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                             <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                     <th >Numero transfert</th>
                   
                    <th>Matricule Acteurs</th>
                      <th>Destinataire</th>
                   
                    <th>Ligne budgetaire</th>
                    <th>Grande nature</th>
                       <th>UA</th>
                        <th>Montant Contrat</th> 
                    
                    <th>D&eacute;cision CF</th>
                     <th>D&eacute;lai traitement</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="type in afficheTransfertValider" :key="type.id">
                   <td>{{type.num_transfert || 'Non renseigné'}}</td>
                     <td>{{afficherActeurDepense(type.acteurdepense_id)|| 'Non renseigné'}}</td>
                     <td>{{afficherDestinataire(type.unitezone_id) || 'Non renseigné'}}</td>
                      
                          <td>{{afficherCodeTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}-{{afficherTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}</td>
                  <td>{{afficherGrandNature(type.grandnatire_id)|| 'Non renseigné'}}</td>
                  <td>{{afficherUa(type.ua_id) || 'Non renseigné'}}</td>
                   <td style="text-align: center;">{{formatageSomme(parseFloat(type.montant_total_contrat)) || 'Non renseigné'}}</td>
                       

                     <td  v-if="type">
                        <button v-if="type.decision_cf == 1"  class="btn  btn-success"    @click.prevent="$emit('modification2', type)">                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning" @click.prevent="$emit('modification2', type)">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger"  @click.prevent="$emit('modification2', type)">                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click.prevent="$emit('modification2', type)"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                  
                    <td>{{type.delaitraitement || 'Pas de delai de traitement'}}</td>

                  
                  </tr>
                   <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                     <td style="font-weight:bold;">Total</td>
                        <td  style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantTransferer))}}</td>
                        <td></td>
                   
                  </tr>
                </tbody>
              </table>
                           
                        </div>
                         <div id="tab2078" class="tab-pane active">
                             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Transferts</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                     <th >Numero transfert</th>
                   
                    <th>Matricule Acteurs</th>
                      <th>Destinataire</th>
                   
                    <th>Ligne budgetaire</th>
                    <th>Grande nature</th>
                       <th>UA</th>
                        <th>Montant Contrat</th> 
                    
                    <th>D&eacute;cision CF</th>
                     <th>Dur&eacute;e de traitement</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="type in transferts" :key="type.id">
                   <td>{{type.num_transfert || 'Non renseigné'}}</td>
                     <td>{{afficherActeurDepense(type.acteurdepense_id)|| 'Non renseigné'}}</td>
                     <td>{{afficherDestinataire(type.unitezone_id) || 'Non renseigné'}}</td>
                      
                          <td>{{afficherCodeTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}-{{afficherTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}</td>
                  <td>{{afficherGrandNature(type.grandnatire_id)|| 'Non renseigné'}}</td>
                  <td>{{afficherUa(type.ua_id) || 'Non renseigné'}}</td>
                   <td style="text-align: center;">{{formatageSomme(parseFloat(type.montant_total_contrat)) || 'Non renseigné'}}</td>
                       

                     <td  v-if="type">
                        <button v-if="type.decision_cf == 1"  class="btn  btn-success"    @click.prevent="$emit('modification2', type)">                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning" @click.prevent="$emit('modification2', type)">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger"  @click.prevent="$emit('modification2', type)">                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click.prevent="$emit('modification2', type)"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                  
                    <td style="text-align: center;">{{type.delaitraitement || 0}}  jour(s)</td>

                 
   <!-- <router-link :to="{ name: 'detailHistoTreansfert', params: {detail_historiq_id:type.num_transfert}}"
                class="btn btn-default " title="Detail Transfert">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link>  -->

                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                     <td style="font-weight:bold;">Total</td>
                        <td  style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantTransfererGlobal))}}</td>
                        <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
          


                        </div>
                         <div id="tab20" class="tab-pane">
                            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Transferts différés</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                        <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                     <th >Numero transfert</th>
                   
                    <th>Matricule Acteurs</th>
                      <th>Destinataire</th>
                   
                    <th>Ligne budgetaire</th>
                    <th>Grande nature</th>
                       <th>UA</th>
                        <th>Montant Contrat</th> 
                    
                    <th>D&eacute;cision CF</th>
                     <th>Dur&eacute;e de traitement</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="type in afficheTransfertDiffere" :key="type.id">
                   <td>{{type.num_transfert || 'Non renseigné'}}</td>
                     <td>{{afficherActeurDepense(type.acteurdepense_id)|| 'Non renseigné'}}</td>
                     <td>{{afficherDestinataire(type.unitezone_id) || 'Non renseigné'}}</td>
                      
                          <td>{{afficherCodeTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}-{{afficherTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}</td>
                  <td>{{afficherGrandNature(type.grandnatire_id)|| 'Non renseigné'}}</td>
                  <td>{{afficherUa(type.ua_id) || 'Non renseigné'}}</td>
                   <td style="text-align: center;">{{formatageSomme(parseFloat(type.montant_total_contrat)) || 'Non renseigné'}}</td>
                       

                     <td  v-if="type">
                        <button v-if="type.decision_cf == 1"  class="btn  btn-success"    @click.prevent="$emit('modification2', type)">                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning" @click.prevent="$emit('modification2', type)">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger"  @click.prevent="$emit('modification2', type)">                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click.prevent="$emit('modification2', type)"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                  
                    <td>{{type.delaitraitement || 0}}  jour(s)</td>

                  
                  </tr>
                   <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                     <td style="font-weight:bold;">Total</td>
                        <td  style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantTransfererGlobalDifferer))}}</td>
                        <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
                            


                        </div>
<div id="tab100" class="tab-pane ">
                                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Transferts en attentes</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                          <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                     <th >Numero transfert</th>
                   
                    <th>Matricule Acteurs</th>
                      <th>Destinataire</th>
                   
                    <th>Ligne budgetaire</th>
                    <th>Grande nature</th>
                       <th>UA</th>
                        <th>Montant Contrat</th> 
                    
                    <th>D&eacute;cision CF</th>
                     <th>Dur&eacute;e de traitement</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="type in afficheTransfertEnAnttente" :key="type.id">
                   <td>{{type.num_transfert || 'Non renseigné'}}</td>
                     <td>{{afficherActeurDepense(type.acteurdepense_id)|| 'Non renseigné'}}</td>
                     <td>{{afficherDestinataire(type.unitezone_id) || 'Non renseigné'}}</td>
                      
                          <td>{{afficherCodeTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}-{{afficherTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}</td>
                  <td>{{afficherGrandNature(type.grandnatire_id)|| 'Non renseigné'}}</td>
                  <td>{{afficherUa(type.ua_id) || 'Non renseigné'}}</td>
                   <td style="text-align: center;">{{formatageSomme(parseFloat(type.montant_total_contrat)) || 'Non renseigné'}}</td>
                       

                     <td  v-if="type">
                        <button v-if="type.decision_cf == 1"  class="btn  btn-success"    @click.prevent="$emit('modification2', type)">                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning" @click.prevent="$emit('modification2', type)">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger"  @click.prevent="$emit('modification2', type)">                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click.prevent="$emit('modification2', type)"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                  
                    <td>{{type.delaitraitement || 0 }}  jour(s)</td>

                  
                  </tr>
                   <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                     <td style="font-weight:bold;">Total</td>
                        <td  style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantTransfererGlobalAttente))}}</td>
                        <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>


                        </div>

                         <div id="tab20002" class="tab-pane">
                              <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Transferts Rejétés</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                     <th >Numero transfert</th>
                   
                    <th>Matricule Acteurs</th>
                      <th>Destinataire</th>
                   
                    <th>Ligne budgetaire</th>
                    <th>Grande nature</th>
                       <th>UA</th>
                        <th>Montant Contrat</th> 
                    
                    <th>D&eacute;cision CF</th>
                     <th>Dur&eacute;e traitement</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="type in afficheTransfertRejeter" :key="type.id">
                   <td>{{type.num_transfert || 'Non renseigné'}}</td>
                     <td>{{afficherActeurDepense(type.acteurdepense_id)|| 'Non renseigné'}}</td>
                     <td>{{afficherDestinataire(type.unitezone_id) || 'Non renseigné'}}</td>
                      
                          <td>{{afficherCodeTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}-{{afficherTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}</td>
                  <td>{{afficherGrandNature(type.grandnatire_id)|| 'Non renseigné'}}</td>
                  <td>{{afficherUa(type.ua_id) || 'Non renseigné'}}</td>
                   <td style="text-align: center;">{{formatageSomme(parseFloat(type.montant_total_contrat)) || 'Non renseigné'}}</td>
                       

                     <td  v-if="type">
                        <button v-if="type.decision_cf == 1"  class="btn  btn-success"    @click.prevent="$emit('modification2', type)">                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning" @click.prevent="$emit('modification2', type)">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger"  @click.prevent="$emit('modification2', type)">                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click.prevent="$emit('modification2', type)"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                  
                    <td>{{type.delaitraitement || 0 }}  jour(s)</td>

                  
                  </tr>
                   <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                     <td style="font-weight:bold;">Total</td>
                        <td  style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantTransfererGlobalRejeter))}}</td>
                        <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>


                        </div>
                    </div>

<!--   
<div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="" href="#">Voir Tableau</a>
       
      </div> -->
  


















                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters} from "vuex";
import { formatageSomme } from "../../.././src/Repositories/Repository.js";
export default {
    // name: 'transfertItem',
    data() {
    return {
     
     
      search: ""
    };
    
  },
  //    props: {
  //   article: Object,
  // },
 
 computed: {
     ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections"
    ]),
...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires"
    ]),
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "transferts",
      "montantTransfererGlobal",
      "afficheTransfertEnAnttente",
      "montantTransfererGlobalAttente",
      "afficheTransfertDiffere",
      "montantTransfererGlobalDifferer",
      "afficheTransfertRejeter",
      "montantTransfererGlobalRejeter",
      "montantTransferer",
      "affichenbreTransfertRejeter",
"afficheNbreTransfertDiffere",
"afficheNbreTransfertEnAnttente",
"afficheNbreTransfertValider",
"nombreTransfert",
"afficheTransfertValider",
"historiquetransferts",
"getPersonnaliseHistoriqueTransfert"
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  ...mapGetters('personnelUA', ['all_acteur_depense',  'fonctions']),
...mapGetters('bienService', ['motifDecisions']),
  afficherDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.motifDecisions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
 filtre_Historique() {
      const st = this.search.toLowerCase();
      return this.historiquetransferts.filter(type => {
        return (
          type.num_transfert.toLowerCase().includes(st) 
         
         
           
          
        );
      });
    },

 
 filtre_HistoriqueMontant() {
      const st = this.search.toLowerCase();
      return this.historiquetransferts.filter(type => {
        return (
          type.num_transfert.toLowerCase().includes(st) 
         
           
          
        );
      }).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(2);
    },







     afficherLocalisation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheLocalisationGeoNiveau5.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
         afficherActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom);
      }
      return 0
        }
      };
    },
   afficherDestinataire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteZones.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.description_localisation;
      }
      return 0
        }
      };
    },
     afficherUa() {
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
     afficherGrandNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficherTransfert() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.afficheEconomique.libelle;
      }
      return 0
        }
      };
    },
    afficherCodeTransfert() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.afficheEconomique.code;
      }
      return 0
        }
      };
    },
  },
  methods: {
    formatageSomme:formatageSomme
  }
}
</script>
    