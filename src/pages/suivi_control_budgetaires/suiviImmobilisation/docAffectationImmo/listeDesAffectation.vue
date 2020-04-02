
<template>
   
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes des demandes d'equipement</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">AFFECTATION DU PERSONNEL   <span class="badge badge-important">{{afficheNombrePersonneNonEquipe}}</span></a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab2">AFFECTATION DU SERVICE</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab3">AFFECTION DE LA DIRECTION</a>
                      </li> -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                  
<div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab11">Listes du personnel   <span class="badge badge-inverse">{{afficheNombreToutPersonne}}</span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab13">Listes du personnel non Equipé  <span class="badge badge-important">{{afficheNombrePersonneNonEquipe}}</span></a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab45">Equipements Non Couverts   <span class="badge badge-warning">{{NombreafficheEquipementNonCouvert}}</span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab12">Listes du personnel Equipé     <span class="badge badge-info">{{NombreaffichePersonneEquipe}}</span></a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab1296">Taux equipement par agent    <span class="badge badge-success">{{NombreTauxequipementParAgent}}</span></a>
                      </li>
                      
                      <!-- <li>
                        <a data-toggle="tab" href="#tab2">AFFECTATION DU SERVICE</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab3">AFFECTION DE LA DIRECTION</a>
                      </li> -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

     <div id="tab1296" class="tab-pane">
                       <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    <!-- <th>Type Unite d'administrative</th> -->
                    
                     
                    <th>Matricule && Nom && prenoms</th>
                    <th>Unite administrative</th>
                    <th>Unite de zone</th>
                    <th>Service</th>
                    <th>Fonction</th>
                  
                    <th>Besoin Reel</th>
                    <th>Besoin Non couvert</th>
                    <th >Besoin Recu</th>
                    <th>Taux</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in tauxequipementParAgent"
                    :key="BesoinImmo.id"
                  >
   
                    
                    <td
                      
                    >{{afficherActeurDepense(BesoinImmo.acteur_depense_id) || 'Non renseigné'}}</td> 
                    <td
                      
                    >{{afficherUniteAdministrative(BesoinImmo.unite_administrative_id) || 'Non renseigné'}}</td> 
                     <td
                       
                    >{{afficheUniteZone(BesoinImmo.uniteZone_id)  || 'Non renseigné'}}</td> 
                    <td
                      
                    >{{afficherLibelleService(BesoinImmo.service_id) || 'Non renseigné'}}</td>
                  
                      <td 
                      
                    >{{afficheFonction(BesoinImmo.fonction_id) || 'Non renseigné'}}</td>
                      <td style="text-align: center;"
                      
                    >{{BesoinImmo.historiquenormequipement || 0}}</td>
                    <td 
                      style="text-align: center;"
                    >{{BesoinImmo.normeequipement || 0}}</td>
                   
                     <td 
                      style="text-align: center;"
                    >{{(BesoinImmo.historiquenormequipement) - (BesoinImmo.normeequipement) || 0}}</td>
                   
                      <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{((((BesoinImmo.historiquenormequipement) - (BesoinImmo.normeequipement))/(BesoinImmo.historiquenormequipement))*100).toFixed(2) || 0 }}%</td> 
                    
                     
                    
                    

                  </tr>
                 
                 
                </tbody>
              </table>

                    </div>



                      <div id="tab45" class="tab-pane">
                       <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    <!-- <th>Type Unite d'administrative</th> -->
                    <th>Unite d'administrative</th>
                     <th>Unite de zone</th>
                    <th>Service</th>
                    <th>Fonction</th>
                    <th>Nom et prénoms</th>
                    <th >Article</th>
                     <th >Qte requise</th>
                     <th >Qte couverte</th>
                     <th >Qte non couverte</th>
                     <th >Prix unitaire(coût moyen)</th>
                       <th >Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in afficheEquipementNonCouvert"
                    :key="BesoinImmo.id"
                  >
  
                    <td
                      
                    >{{afficherUniteAdministrative(BesoinImmo.uniteadministrative_id) || 'Non renseigné'}}</td> 
                     <td
                       
                    >{{afficheUniteZone(BesoinImmo.unitezon_id) || 'Non renseigné'}}</td> 
                    <td
                      
                    >{{afficherLibelleService(BesoinImmo.service_id) || 'Non renseigné'}}</td>
                    <td 
                      
                    >{{afficheFonction(BesoinImmo.fonction_id)}}</td>
                    <td 
                      
                    >{{afficherActeurDepense(BesoinImmo.acteurdepense_id) || 'Non renseigné'}}</td>
                     <td 
                      
                    >{{afficheFamille(BesoinImmo.famillearticle_id) || 'Non renseigné'}}</td>
                      <td style="text-align: center;"
                      
                    >{{BesoinImmo.qte_reel || 0}}</td>
                     <td 
                      style="text-align: center;"
                    >{{BesoinImmo.qte_affecte || 0}}</td>
                    <td 
                      style="text-align: center;"
                    >{{BesoinImmo.qte_actuel || 0}}</td>
                     <td 
                      style="text-align: center;"
                    >{{formatageSomme(parseFloat(BesoinImmo.prixUnitaire)) || 0}}</td>
                     <td 
                      style="text-align: center;"
                    >{{formatageSomme(parseFloat(BesoinImmo.total_actuel)) || 0}}</td>
                     
                    
                     
                    
                    
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                     <td></td>
                    <td></td>
                     <td></td>
                    <td></td>
                     <td></td>
                    <td></td>
                     <td></td>
                    <td style="font-weight:bold;">Total</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(totalNonCouvert))}}</td>
                    
                   
                  </tr>
                 
                 
                 
                </tbody>
              </table>

                    </div>
                      <div id="tab11" class="tab-pane active">
                       <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    <!-- <th>Type Unite d'administrative</th> -->
                    <th>Unite d'administrative</th>
                    
                     <th>Unite de zone</th>
                    
                    <th>Service</th>
                    <th>Fonction</th>
                    <th>Nom et prénoms</th>
                    <th >Equipé</th>
                     
                  </tr>
                </thead>
                <tbody>
                  
                  <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in acte_personnels"
                    :key="BesoinImmo.id"
                  >
                  <!-- <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherUniteAdministrative(BesoinImmo.unite_administrative_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherUniteAdministrative(BesoinImmo.unite_administrative_id) || 'Non renseigné'}}</td> 
                     <td
                      @dblclick="afficherModalModifierDirection(index)" 
                    >{{afficheUniteZone(BesoinImmo.uniteZone_id) || 'Non renseigné'}}</td> 
                    <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherLibelleService(BesoinImmo.service_id) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficheFonction(BesoinImmo.fonction_id)}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherActeurDepense(BesoinImmo.acteur_depense_id) || 0}}</td>
                   
                      <td style="text-align: center;">
                      
                       
                          
                         
                     <span style="font-weight: 500;" v-if="BesoinImmo.normeequipement == 0"  class="btn btn-success" >Oui</span>
                     <span  v-else  class="btn btn-danger" style="font-weight: 500;"> Non</span>
                     
                        
                     
                    </td>
                     
                     
                    
                    
                  </tr>
                 
                 
                 
                </tbody>
              </table>

                    </div>
                    <div id="tab13" class="tab-pane">
<table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    <!-- <th>Type Unite d'administrative</th> -->
                    <th>Unite d'administrative</th>
                    
                     <th>Unite de zone</th>
                    
                    <th>Service</th>
                    <th>Fonction</th>
                    <th>Nom et prénoms</th>
                    <th >Equipé</th>
                     <th >Action</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in affichePersonneNonEquipe"
                    :key="BesoinImmo.id"
                  >
                  <!-- <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherUniteAdministrative(BesoinImmo.unite_administrative_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherUniteAdministrative(BesoinImmo.unite_administrative_id) || 'Non renseigné'}}</td> 
                     <td
                      @dblclick="afficherModalModifierDirection(index)" 
                    >{{afficheUniteZone(BesoinImmo.uniteZone_id) || 'Non renseigné'}}</td> 
                    <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherLibelleService(BesoinImmo.service_id) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficheFonction(BesoinImmo.fonction_id)}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherActeurDepense(BesoinImmo.acteur_depense_id) || 0}}</td>
                    <td style="text-align: center;">
                      
                       
                          
                         
                     <span style="font-weight: 500;" v-if="BesoinImmo.normeequipement == 0"  class="btn btn-success" >Oui</span>
                     <span  v-else  class="btn btn-danger" style="font-weight: 500;"> Non</span>
                     
                        
                     
                    </td>
                   
                     
                         
                    
                     <td title="Affectation d'equipement">
                        <button class="btn btn-info" @click="fenetreAjouterAffectation(index)">
                        <span>
                          <i class="icon-hand-right"></i>
                        </span>
                      </button>
                     </td>
                     
                    
                    
                  </tr>
                 
                 
                 
                </tbody>
              </table>
                  </div>
                   <div id="tab12" class="tab-pane">
                     <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    <!-- <th>Type Unite d'administrative</th> -->
                    <th>Unite d'administrative</th>
                    
                     <th>Unite de zone</th>
                    
                    <th>Service</th>
                    <th>Fonction</th>
                    <th>Nom et prénoms</th>
                    <th >Equipé</th>
                  
                  </tr>
                </thead>
                <tbody>
                  
                  <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in affichePersonneEquipe"
                    :key="BesoinImmo.id"
                  >
                  <!-- <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherUniteAdministrative(BesoinImmo.unite_administrative_id) || 'Non renseigné'}}</td>  -->
                    <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherUniteAdministrative(BesoinImmo.unite_administrative_id) || 'Non renseigné'}}</td> 
                     <td
                      @dblclick="afficherModalModifierDirection(index)" 
                    >{{afficheUniteZone(BesoinImmo.uniteZone_id) || 'Non renseigné'}}</td> 
                    <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherLibelleService(BesoinImmo.service_id) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficheFonction(BesoinImmo.fonction_id)}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherActeurDepense(BesoinImmo.acteur_depense_id) || 0}}</td>
                    <td style="text-align: center;">
                      
                       
                          
                         
                     <span style="font-weight: 500;" v-if="BesoinImmo.normeequipement == 0"  class="btn btn-success" >Oui</span>
                     <span  v-else  class="btn btn-danger" style="font-weight: 500;"> Non</span>
                     
                        
                     
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
        </div>
      </div>
      
        <!-- <fab :actions="fabActions" @cache="afficherModalAjouterBesoinImmobilisation" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterBesoinImmobilisation()">Open</button>
 
  -->
 
              </table>
 
  </div>


    </div>
</div>


    </div>
    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" bg-color="green"></fab> -->
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
   
   
   <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
     <div id="exampleModal" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Affectation </h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
        
            <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab189">Identification</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab289">Descriptif</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">Autres Information</a>
                      </li> -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <div id="tab189" class="tab-pane active">
                      <tr>
                        <td>
                          <label class="control-label">Exercice Budgetaire</label>
                          
                              <input    type="text"   class="span3" readonly  :value="exerciceBudgetaireEnCours" />                
                             
                        </td>
                        <td>
                          <label class="control-label">Unite d'administrative</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficherUniteAdministrative(formData.unite_administrative_id)" />                              
                             
                        </td>
                        <td>
                          <label class="control-label">Unite de Zone</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheUniteZone(formData.uniteZone_id)" />                
                             
                        </td>
                        <td>
                          <label class="control-label">Service</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficherLibelleService(formData.service_id)" />                
                             
                        </td>
                        
                      </tr>
                       <tr>
                          <td>
                          <label class="control-label">Fonction</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficheFonction(formData.fonction_id)" />                
                            
                        </td>
                        <td>
                          <label class="control-label">Bénéficiaire</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficherActeurDepense(formData.acteur_depense_id)" />                
                             
                                              
                        </td>
                        <td>
                          <label class="control-label">Besoin</label>
                          
                              <select  v-model="formData2.famillearticle_id" class="span4"  >
                      <option value = ""></option>
                      <option v-for="item in afficheLeBesoinDemande(formData.fonction_id)" 
                      :key="item.id" :value="item.norme_famille.id">{{item.norme_famille.libelle}}</option>
                    </select>
                             
                        </td>
                        <td>
                          <label class="control-label">Quantite en stock</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficherQuantiteEnStock(formData2.famillearticle_id)" />                
                             
                        </td>
                        
                      </tr>
                      <tr>
                        <td>
                          <label class="control-label">Quantite requise</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficherQuantiteEnRequise(formData2.famillearticle_id)" />                
                             
                        </td>
                          <td>
                          <label class="control-label">Quantite affecté</label>
                          
                              <input    type="text"   class="span3"  :max="afficherQuantiteEnRequise(formData2.famillearticle_id)" v-model="formData2.qte_affecte" />                
                             
                        </td>
                        <td>
                          <label class="control-label">Prix unitaire</label>
                          
                              <input    type="text"   class="span4" readonly  :value="coutMonenArticle" />                
                             
                                              
                        </td>
                        <td>
                          <label class="control-label">Valeur d'origine</label>
                          
                             <input    type="text"   class="span3" readonly  :value="afficherValeurOrigine" />                
                             
                             
                        </td>
                        
                        
                      </tr>
                         <tr>

                       
                        <td>
                         
                           <input    type="hidden"   class="span3"   :value="afficherAffectationParFonction" />                
                           <input    type="hidden"   class="span3"   :value="afficherAffectationParActeurDepense" />                
                          
                          <input    type="hidden"   class="span3"   :value="afficherAffectationParQuantiteAffecter" />   
                           <input    type="hidden"   class="span3"   :value="afficherAffectationParUniteZone" />
                            <input    type="hidden"   class="span3"   :value="afficherAffectationParService" />
                             <input    type="hidden"   class="span3"   :value="afficherAffectationParBesoin" />
                              <input    type="hidden"   class="span3"   :value="afficherQteResteACouvert" />             
                              <input    type="hidden"   class="span3"   :value="afficherPrixActuelResteACouvert" />
                               <input    type="hidden"   class="span3"   :value="afficherQteEnStock" />
                                             
                        </td>
                        
                        
                        
                      </tr>
                     
                    </div>
                    <div id="tab289" class="tab-pane ">
                     <tr>
                        <td>
                          <label class="control-label">Date mise en service</label>
                          
                              <input    type="date"   class="span3"   v-model="formData2.date_mise_service" />                
                             
                        </td>
                          <td>
                          <label class="control-label">Numero identification</label>
                          
                              <input    type="text"   class="span3"   v-model="formData2.identification" />                
                             
                        </td>
                        <td>
                          <label class="control-label">Type Immobilisation</label>
                          
                              <select v-model="formData2.type_immo" class="span4">
                                <option value=""></option>
                              
    <option value="1">Corporelle</option>
    <option value="0">Incorporelle</option>
                              </select>
                                              
                        </td>
                        <td>
                          <label class="control-label">Nature d'Entree</label>
                          
                            <select v-model="formData2.nature_dentree" class="span3">
                              <option value=""></option>
    <option v-for="item in natureEntres" :key="item.id" :value="item.id">{{item.libelle}}</option>
                              </select>
                             
                        </td>
                        
                        
                      </tr>
                            <tr>

                        <td>
                          <label class="control-label">Nature du Bien</label>
                          
                              <input    type="text"   class="span3"   v-model="formData2.nature_bien" />                
                             
                        </td>
                          <td>
                          <label class="control-label">Etat Immobilisation</label>
                          
                             <select v-model="formData2.etat_immobilisation" class="span3">
                              <option value=""></option>
    <option v-for="item in EtatImmobilisations" :key="item.id" :value="item.id">{{item.libelle}}</option>
                              </select>
                        </td>
                        <td>
                          <label class="control-label">Cause inactivite</label>
                          
                             <select v-model="formData2.cause_inactivite" class="span4">
                              <option value=""></option>
    <option v-for="item in causeInactivite" :key="item.id" :value="item.id">{{item.libelle}}</option>
                              </select>
                                              
                        </td>
                        
                         <td>
                          <label class="control-label">Duree de vie</label>
                          
                             <input    type="text"   class="span3" readonly  :value="afficherDureeVieFamille(formData2.famillearticle_id)" />                
                             
                             
                        </td>  
                        
                      </tr>
                      <tr>
                         
                           
                        <td>
                          <label class="control-label">Année Amortissement</label>
                          
                             <input
                                type="text"
                                class="span3"
                               readonly
                              :value="anneeAmortissement"
                              />
                        </td>
                        
                    
                        
                        
                        
                      </tr>

                    </div>
                  </div>
            </div>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterImmobilisationLocal(formData2)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
 
   
  
   
    </div>
  
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../../Repositories/Repository";

export default {
  name: 'besionImmolisation',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
json_fields: {
        TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
        UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
        DESIGNATION: "famille.libelle",
        QUANTITE: "quantite",
        PRIX_UNITAIRE: "prix_unitaire",
        MONTANT_TOTAL: "montant_total",
         DATE_DE_DEMANDE: "date_jour",
      },
      formData: {
        unite_administrative_id: "",
        fonction_id:"",
        acteur_depense_id:"",
        uniteZone_id:"",
        service_id:"",
        

        
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
      
      direct:"",
      search: ""
    };
  },
// created() {
//     this.formData = this.filtre_besoinImmo.find(
//       BesoinImmo => BesoinImmo.id == this.$route.params.id
//     )
// },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
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
      "afficheRegroupeEquipementCouvert"
      
      
      
      
    ]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives","directions","servicesua","uniteZones"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins","exercices_budgetaires"]),
...mapGetters("personnelUA", ["acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

afficherRecupererQteActuelle() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.qte_actuel;
      }
      return 0
    },
totalNonCouvert(){
return this.immobilisations.filter(element=>element.qte_actuel != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_actuel), 0).toFixed(2);
},

afficherQteTotal() {
      const val = parseFloat(this.afficherRecupererQteActuelle) + parseFloat(this.formData2.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },

afficherQteEnStock() {
      const val = parseFloat(this.afficherQuantiteEnStock(this.formData2.famillearticle_id)) - parseFloat(this.formData2.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },
    afficherQteSortir() {
      const val = parseFloat(this.afficherQuantiteSortir(this.formData2.famillearticle_id)) + parseFloat(this.formData2.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },
afficherQteResteACouvert() {
      const val = parseFloat(this.afficherQuantiteEnRequise(this.formData2.famillearticle_id)) - parseFloat(this.formData2.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },
    afficherQteResteACouvertModifier() {
      const val = parseFloat(this.afficherQuantiteEnRequise(this.formData2.famillearticle_id)) - parseFloat(this.afficherQteTotal) ;
      return parseFloat(val).toFixed(0);
    },
    afficherPrixActuelResteACouvertModifier() {
      const val = parseFloat(this.afficherQteResteACouvertModifier) * parseFloat(this.coutMonenArticle) ;
      return parseFloat(val).toFixed(0);
    },
afficherPrixActuelResteACouvert() {
      const val = parseFloat(this.afficherQteResteACouvert) * parseFloat(this.coutMonenArticle) ;
      return parseFloat(val).toFixed(0);
    },

afficherIdImmobilisation() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

afficherIdStock() {
      const qtereel = this.stockageArticles.find(
        qtreel => qtreel.famill_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },
nombreAffecter() {
      const val = parseFloat(this.formData2.qte_affecte) + parseFloat(this.afficherRecupererQteAffecter);
      return parseFloat(val).toFixed(0);
    },
afficherRecupererQteAffecter() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.qte_affecte;
      }
      return 0
    },
 afficherAffectationParFonction() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.fonction_id;
      }
      return 0
    },
 afficherAffectationParActeurDepense() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.acteurdepense_id;
      }
      return 0
    },

afficherAffectationParQuantiteAffecter() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.qte_affecte;
      }
      return 0
    },

afficherAffectationParUniteZone() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.unitezon_id;
      }
      return 0
    },

afficherAffectationParService() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.service_id;
      }
      return 0
    },
afficherAffectationParBesoin() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.famillearticle_id;
      }
      return 0
    },
 idActePersonnel() {
      const qtereel = this.acte_personnels.find(
        qtreel => qtreel.acteur_depense_id == this.formData.acteur_depense_id,
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

afficherDureeVieFamille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.dureVie;
      }
      return 0
        }
      };
    },


 anneeAmortissement() {
      const val = parseInt(this.exerciceBudgetaireEnCours) + parseInt(this.afficherDureeVieFamille(this.formData2.famillearticle_id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


afficherValeurOrigineModifier() {
      const val = parseFloat(this.nombreAffecter) * parseFloat(this.coutMonenArticle);
      return parseFloat(val).toFixed(2);
    },
  afficherValeurOrigine() {
      const val = parseFloat(this.formData2.qte_affecte) * parseFloat(this.coutMonenArticle);
      return parseFloat(val).toFixed(2);
    },

    afficherNombreEquipementRestant() {
      const val = parseFloat(this.formData.normeequipement) - parseFloat(this.formData2.qte_affecte);
      return parseFloat(val).toFixed(0);
    },

montantParBesoin() {
      return id => {
        if (id != null && id != "") {
          return this.articles.filter(element => element.famille_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2);
        }
      };
    },
nombreParBesoin() {
      return id => {
        if (id != null && id != "") {
          return this.articles.filter(element => element.famille_id == id).length;
        }
      };
    },
coutMonenArticle() {
 
      
    const val = parseFloat((this.montantParBesoin(this.formData2.famillearticle_id))/this.nombreParBesoin(this.formData2.famillearticle_id)).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
  

    },











afficheLeBesoinDemande() {
      
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.fonction_id == id);
        }
      };
    },
afficheIdFonction() {
      
      const norme = this.fonctions.find(normeEquipe => normeEquipe.libelle == this.formData.fonction_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },
    NombreTauxequipementParAgent(){
return this.acte_personnels.filter(element => element.normeequipement != null).length
},
tauxequipementParAgent(){
return this.acte_personnels.filter(element => element.normeequipement != null)
},
afficheEquipementCouvert(){
return this.immobilisations.filter(element => element.qte_actuel == 0)
},
afficheEquipementNonCouvert(){
return this.immobilisations.filter(element => element.qte_actuel != 0)
},
NombreafficheEquipementNonCouvert(){
return this.immobilisations.filter(element => element.qte_actuel != 0).length
},
affichePersonneNonEquipe(){
return this.acte_personnels.filter(element => element.normeequipement != 0)
},
NombreaffichePersonneEquipe(){
return this.acte_personnels.filter(element => element.normeequipement == 0).length
},
affichePersonneEquipe(){
return this.acte_personnels.filter(element => element.normeequipement == 0)
},
afficheNombrePersonneNonEquipe(){
return this.acte_personnels.filter(element => element.normeequipement != 0).length
},

afficheNombrePersonneEquipe(){
return this.acte_personnels.filter(element => element.normeequipement == 0).length
},
afficheNombreToutPersonne(){
return this.acte_personnels.length
},
exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
 

 exerciceBudgetaireEnCours() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },

afficherActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.matricule.concat('    ', qtereel.nom,'     ',qtereel.prenom);
      }
      return 0
        }
      };
    },

afficherLibelleService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.servicesua.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

afficherQuantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.stockageArticles.find(qtreel => qtreel.famill_id == id);

      if (qtereel) {
        return qtereel.quantitestock;
      }
      return 0
        }
      };
    },
    afficherQuantiteSortir() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.stockageArticles.find(qtreel => qtreel.famill_id == id);

      if (qtereel) {
        return qtereel.qtesortie;
      }
      return 0
        }
      };
    },
afficherQuantiteEnRequise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.normeImmo.find(qtreel => qtreel.famille_id == id);

      if (qtereel) {
        return qtereel.norme;
      }
      return 0
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

// identifierDmdService(){
// if(this.formData.service_id != 0){
//   return 2
// }


// return 0

// },

// identifierDmdFonction(){
// if(this.formData.fonction_id != 0){
//   return 1
// }

// return 0


// },

// identifierDmdServiceModifier(){
// if(this.editBesoinImmo.service_id != 0){
//   return 2
// }
// else {
// return 0
// }

// },

// identifierDmdFonctionModifier(){
// if(this.editBesoinImmo.fonction_id != 0){
//   return 1
// }
// else{
// return 0
// }

// },

afficheLibelleService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.servicesua.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },

afficheUniteZone() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteZones.find(qtreel => qtreel.id == id);

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
   
     
 deverouServiceEtFonction() {

      return this.formData.direction != 0;

    },


 deverouUniteZone() {

      return this.formData.uniteadmin_id == "";

    },


destinationDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteZones.filter(element => element.id_unite_administrative == this.formData.uniteadmin_id);
        }
      };
    },
    destinationDynamiquesModifier() {
      return id => {
        if (id != null && id != "") {
          return this.uniteZones.filter(element => element.id_unite_administrative == this.editBesoinImmo.uniteadmin_id);
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
// verifierLaNorme(){
//     let normeInitial=parseFloat(this.afficheNormeFamille)
//       let qteDemande=parseFloat( this.formData.quantite)
//        if(normeInitial < qteDemande){
//         alert("La norme doit etre superieure a la qte demande")
//       }
// },


 


CoutMoyen() {
 return id => {
    if(id !=""){
      
    const val = parseFloat((this.getAfficheArticle.filter(element => element.famillearticle_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2))/this.getAfficheArticle.filter(element => element.famillearticle_id == id).length).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
  
 }
  }
    },

 montantTotalarticlesModifier() {
   if(this.editBesoinImmo.famillearticle_id !=""){
      const val = parseFloat(this.editBesoinImmo.quantite) * parseFloat(this.CoutMoyen(this.editBesoinImmo.famillearticle_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(2);
    }
    return null

},
 montantTotalarticles() {
   if(this.formData2.famillearticle_id !=""){
      const val = parseFloat(this.formData.quantite) * parseFloat(this.CoutMoyen(this.formData2.famillearticle_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(2);
    }
    return null

},

 deverouFonctionDirectionService() {
      return this.formData.uniteadmin_id == "";
    },
afficheActeurDepense() {
      return id => {
        if (id != null && id != "") {
          return this.all_acteur_depense.filter(element => element.fonction.id == id);
        }
      };
    },

// afficheActeurDepense() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.all_acteur_depense.find(qtreel => qtreel.fonction.id == this.formData.fonction_id);

//       if (qtereel) {
//         return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom)
//       }
//       return 0
//         }
//       };
//     },
 fonctionDynamiquesParUa() {
      return id => {
        if (id != null && id != "") {
          return this.all_acteur_depense.filter(element => element.uniteZone_id == id);
        }
      };
    },
auteurParUaDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.uniteZone_id == id);
        
        }
        
      };
    },
 familleNormeDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.direction_id == id);
        }
      };
    },
     familleNormeServiceDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.service_id == id);
        }
      };
    },
      familleNormeFonctionDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.fonction_id == id);
        }
      };
    },
uniteAdministDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteAdministratives.filter(element => element.type_ua_id == id);
        }
      };
    },
directionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.directions.filter(element => element.d_ua_id == id);
        }
      };
    },
 uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.typeua_id == id);
        }
      };
    },
fonctionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.ua_id == id);
        }
      };
    },
    afficheNormeFamille() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famillearticle_id == this.formData2.famillearticle_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },
        afficheNormeFamilleModifier() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famillearticle_id == this.editBesoinImmo.famillearticle_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },
  },
    
  methods: {
    ...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock"
     
    ]),
     ...mapActions("personnelUA", [
       "getActeur","allActeurDepense","getActPersonnel",
       "modifierActeurDepenses",
     
    ]),
  
  fenetreAjouterAffectation(index) {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.formData = this.affichePersonneNonEquipe[index];
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme: formatageSomme,







    ajouterImmobilisationLocal() {

      
if (this.formData.fonction_id == this.afficherAffectationParFonction &&  this.formData.acteur_depense_id == this.afficherAffectationParActeurDepense && this.afficherQuantiteEnRequise(this.formData2.famillearticle_id) == this.afficherAffectationParQuantiteAffecter){

alert("Acteur deja equipé")
}
else if(this.afficherQuantiteEnStock(this.formData2.famillearticle_id) == 0){
alert("Veuillez approvisionner votre stock")
}
else if(this.afficherQuantiteEnRequise(this.formData2.famillearticle_id) < this.afficherQteTotal){
  alert("Vérifier le nombre article restant a équipe l'acteur")
}

else if (this.formData.fonction_id == this.afficherAffectationParFonction &&  this.formData.acteur_depense_id == this.afficherAffectationParActeurDepense && this.formData.uniteZone_id == this.afficherAffectationParUniteZone && this.formData.service_id == this.afficherAffectationParService && this.formData2.famillearticle_id == this.afficherAffectationParBesoin){

var nouvelobjet8 ={
  ...this.formData,
  id: this.afficherIdStock,
 quantitestock:this.afficherQteEnStock,
 qtesortie:this.afficherQteSortir
}
var nouvelobjet2 ={
  ...this.formData,
 normeequipement:this.afficherNombreEquipementRestant
}
      var nouvelObjet3 = {
        ...this.formData2,
        id: this.afficherIdImmobilisation,
        prixUnitaire: this.coutMonenArticle,
        valeurorigine: this.afficherValeurOrigineModifier,
       
        exercice_budgetaire:this.exerciceBudgetaireEnCours,
      duree:this.afficherDureeVieFamille(this.formData2.famillearticle_id),
      acteurdepense_id : this.formData.acteur_depense_id,
     	uniteadministrative_id:this.formData.unite_administrative_id,
      service_id:this.formData.service_id,
      fonction_id:this.formData.fonction_id,
      anneamortiss:this.anneeAmortissement,
      
      unitezon_id:this.formData.uniteZone_id,
      qte_reel:this.afficherQuantiteEnRequise(this.formData2.famillearticle_id),
     
     qte_affecte:this.nombreAffecter,
     total_actuel:this.afficherPrixActuelResteACouvertModifier,
     qte_actuel:this.afficherQteResteACouvertModifier

      };
      this.modifierStock(nouvelobjet8)
this.modifierActeurDepenses(nouvelobjet2)
  this.getActeur()
    this.allActeurDepense()
    this.getActPersonnel()
    this.modifierImmobilisation(nouvelObjet3);

     this.$("#exampleModal").modal('hide');
      this.formData={
unite_administrative_id: "",
        fonction_id:"",
        acteur_depense_id:"",
        uniteZone_id:"",
        service_id:"",
        
     }
     this.formData2={
 famillearticle_id :"",
        qte_affecte:"",
        date_mise_service:"",
        identification:"",
        type_immo:"",
        nature_dentree:"",
        nature_bien:"",
        etat_immobilisation:"",
        cause_inactivite:"",
     }
}
else{
  
var nouvelobjet9 ={
  ...this.formData,
   id: this.afficherIdStock,
 quantitestock:this.afficherQteEnStock,
  qtesortie:this.afficherQteSortir
}
var nouvelobjet4 ={
  ...this.formData,
 normeequipement:this.afficherNombreEquipementRestant
}
      var nouvelObjet = {
        ...this.formData2,
        
        prixUnitaire: this.coutMonenArticle,
        valeurorigine: this.afficherValeurOrigine,
       
        exercice_budgetaire:this.exerciceBudgetaireEnCours,
      duree:this.afficherDureeVieFamille(this.formData2.famillearticle_id),
      acteurdepense_id : this.formData.acteur_depense_id,
     	uniteadministrative_id:this.formData.unite_administrative_id,
      service_id:this.formData.service_id,
      fonction_id:this.formData.fonction_id,
      anneamortiss:this.anneeAmortissement,
      
      unitezon_id:this.formData.uniteZone_id,
      qte_reel:this.afficherQuantiteEnRequise(this.formData2.famillearticle_id),
     qte_affecte:this.nombreAffecter,
     total_actuel:this.afficherPrixActuelResteACouvert,
     qte_actuel:this.afficherQteResteACouvert

      };
       this.modifierStock(nouvelobjet9)
this.modifierActeurDepenses(nouvelobjet4)
  this.getActeur()
    this.allActeurDepense()
    this.getActPersonnel()
    this.ajouterImmobilisation(nouvelObjet);
this.$("#exampleModal").modal('hide');
     
     this.formData={
unite_administrative_id: "",
        fonction_id:"",
        acteur_depense_id:"",
        uniteZone_id:"",
        service_id:"",
      
     }
     this.formData2={
 famillearticle_id :"",
        qte_affecte:"",
        date_mise_service:"",
        identification:"",
        type_immo:"",
        nature_dentree:"",
        nature_bien:"",
        etat_immobilisation:"",
        cause_inactivite:"",
     }
}

    },
  }
};
</script>
<style scoped>
.taillemodal {
  width: 1400px;
  margin: 0 -700px;
}
.taillemodal1 {
  width: 800px;
  margin: 0 -455px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
.tailleImmobilisation{
  width: 90%;
  margin: 0 -45%;
}
</style>
