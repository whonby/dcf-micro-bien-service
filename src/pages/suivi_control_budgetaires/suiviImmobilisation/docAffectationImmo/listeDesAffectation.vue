afficheQteACouvert
C11OA
<template>
  
   
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">


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
                              <select v-model="valideDirecteur.motif" class="span5">
                                        <option value=""></option>
                                      <option value="3">Visé</option>
                                    <option value="4">Différé</option>
                                    <option value="5">Réjeté</option>
                                    <option value="1">Attente</option>
                            
    
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
















      <div id="exampleModalValidationChefService" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision Chef de service</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Décision Chef de service</label>
                            <div class="controls">
                              <select v-model="valideService.motif">
                                <option value=""></option>
                              <option value="1">Visé</option>
                             <!-- <option value="2">Différé</option>
                             <option value="3">Réjeté</option> -->
                             <option value="0">Attente</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Decision :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="valideService.date_motif"/>
                              <!-- <input type="text" class="span"  :value="nombreDejourCalculeTraitementService"/> -->
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                            </div>
                          </div>
                               <!-- <div class="control-group">
                            <label class="control-label">Nom Emetteur :</label>
                            <div class="controls">
                              <input type="text" class="span"  :value:"nombreDejourCalculeTraitementService"/>
                              <input type="hidden" class="span"  :value="recuperer"/> 
                            </div>
                          </div> -->
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierDecisionChefService(valideService)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>AFFECTATION D'EQUIPEMENT </h5>
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
                        <a data-toggle="tab" href="#tab8969">NOUVELLE PERSONNES   </a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab7458">AFFECTATION DES DEMANDES DU PERSONNEL   </a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab1005">NOUVEAU SERVICE  </a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab2005">AFFECTATION DES DEMANDES DU SERVICE  </a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">AFFECTION DE LA DIRECTION</a>
                      </li> --> 
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">


          <div id="tab1005" class="tab-pane">
                  
<div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab456">Listes des services   <span class="badge badge-inverse">{{NombreDeService}}</span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab46">Listes des services non Equipé  <span class="badge badge-important">{{afficheNombrePersonneNonEquipe}}</span></a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab89">Equipements Non Couverts   <span class="badge badge-warning">{{affichenbreEquipementNonCouvert}}</span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab63">Listes des services Equipé     <span class="badge badge-info">{{NombreafficheEquipementCouvertService}}</span></a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab6396">Taux equipement des services  </a>
                      </li>
                 
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

                             <div id="tab6396" class="tab-pane"><tauxServiceEquipe></tauxServiceEquipe></div>
                              <div id="tab89" class="tab-pane"><listeServiceNonCouvert></listeServiceNonCouvert> </div>
                      <div id="tab456" class="tab-pane active"><listeToutService></listeToutService></div>          
                       <div id="tab46" class="tab-pane"><listeServiceNonEquipe></listeServiceNonEquipe></div>
                   <div id="tab63" class="tab-pane"><listeServiceEquipe></listeServiceEquipe></div>
                 </div>
                    



                      
                    
                   
                  
                  
              
                </div>
              </table>
            </div>
          </div>






 <div id="tab2005" class="tab-pane"><affectationDemandeDuService></affectationDemandeDuService></div>
























   <div id="tab7458" class="tab-pane">


<div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active">
                        <a data-toggle="tab" href="#tab129">Listes des Demande    <span class="badge badge-info">{{nombreDemande}}</span></a>
                      </li>
                      <li class="">
                        
                        <a data-toggle="tab" href="#tab112">Validation Chef service  <span class="badge badge-inverse">{{nombreValidationEnAttenteChefService}}</span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab132">Validation Directeur  <span class="badge badge-important">{{nombreValidationEnAttenteDirecteur}}</span></a>
                      </li>
                    
                     
                      <!-- <li class="">
                        <a data-toggle="tab" href="#tab12969">Taux demande non attribué"    <span class="badge badge-success">{{NombreTauxequipementParAgent}}</span></a>
                      </li> -->
                      
                      <!-- <li>
                        <a data-toggle="tab" href="#tab2">AFFECTATION DU SERVICE</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab3">AFFECTION DE LA DIRECTION</a>
                      </li> -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

    



                 
                      <div id="tab112" class="tab-pane">
                       <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                  
                    
                    <th>Nom et prénoms</th>
                    <th>Unite d'administrative</th>
                     <th>Unite de zone</th>
                    <th>Fonction</th>
                    <th>Article</th>
                    <th>Quantite</th>
                    <th>Cause inactivite</th>
                    <th>Cause de la demande</th>
                    <th >Date demande</th>
                     <th>duré vie</th>
                     <th>Motif chef sce</th>
                     <th>Date motif</th>
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in afficheValidationChefService"
                    :key="BesoinImmo.id"
                  >
   
                    
                    <td
                       style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficherActeurDepense(BesoinImmo.acteur_id) || 'Non renseigné'}}</td> 
                    <td
                       style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficherUniteAdministrative(BesoinImmo.uniteadmin_id) || 'Non renseigné'}}</td> 
                     <td
                        style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficheUniteZone(BesoinImmo.uniteZone_id)  || 'Non renseigné'}}</td> 
                                    
                      <td 
                       style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficheFonction(BesoinImmo.fonction_id) || 'Non renseigné'}}</td>
                      <td  style=" color:black;font-size:14px;font-weight:bold;"
                      
                    >{{afficheFamille(BesoinImmo.article_id) || 0}}</td>
                    <td 
                       style="text-align: center; color:black;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.quantite || 0}}</td>
                   
                     <td 
                       style=" color:black;font-size:14px;font-weight:bold;"
                    >{{(afficheCauseInactivite(BesoinImmo.cause_inactivite)) || 'Non renseigné'}}</td>
                   
                      <td
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.cause_demande || 'Non renseigné'}}</td> 
                     <td
                       style="text-align: center; color:black;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_demande) || 'Non renseigné'}}</td> 
                     <td
                      style="text-align: center; color:black;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.dure_vie || 'Non renseigné'}}</td>
                    <td>
                        <button v-if="BesoinImmo.motif == 1"  class="btn  btn-success" @click="afficherModalPourValidationChefService(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="BesoinImmo.motif == 4" class="btn  btn-warning" @click="afficherModalPourValidationChefService(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="BesoinImmo.motif == 5" class="btn  btn-danger" @click="afficherModalPourValidationChefService(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  @click="afficherModalPourValidationChefService(index)">                        
                     
                      
                       <span  >Attente</span>
                      
                    
                    
                      </button>
                    </td>
                    
                     <td
                      style="text-align: center; color:black;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_motif) || 'Non renseigné'}}</td>

                  </tr>
                 
                 
                 
                </tbody>
              </table>

                    </div>
                    <div id="tab132" class="tab-pane">
<table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                  
                    
                    <th>Nom et prénoms</th>
                    <th>Unite d'administrative</th>
                     <th>Unite de zone</th>
                    <th>Fonction</th>
                    <th>Article</th>
                    <th>Quantite</th>
                    <th>Cause inactivite</th>
                    <th>Cause de la demande</th>
                    <th >Date demande</th>
                     <th>duré vie</th>
                     <th>Décision Directeur</th>
                     <th>Date motif</th>
                     <th>Affectation</th>
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
                    >{{afficherActeurDepense(BesoinImmo.acteur_id) || 'Non renseigné'}}</td> 
                    <td
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficherUniteAdministrative(BesoinImmo.uniteadmin_id) || 'Non renseigné'}}</td> 
                     <td
                       style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficheUniteZone(BesoinImmo.uniteZone_id)  || 'Non renseigné'}}</td> 
                                    
                      <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficheFonction(BesoinImmo.fonction_id) || 'Non renseigné'}}</td>
                      <td style=" color:black;font-size:14px;font-weight:bold;"
                      
                    >{{afficheFamille(BesoinImmo.article_id) || 0}}</td>
                    <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.quantite || 0}}</td>
                   
                     <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{(afficheCauseInactivite(BesoinImmo.cause_inactivite)) || 'Non renseigné'}}</td>
                   
                      <td
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.cause_demande || 'Non renseigné'}}</td> 
                     <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_motif_directeur) || 'Non renseigné'}}</td> 
                     <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.dure_vie || 'Non renseigné'}}</td>
                    <td>
                        <button v-if="BesoinImmo.motif == 3"  class="btn  btn-success"  @click="afficherModalPourValidationDuDirecteur(index)">                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <!-- <button v-else-if="BesoinImmo.motif == 0" class="btn  btn-warning"  >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="BesoinImmo.motif == 0" class="btn  btn-danger"  >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button> -->
                     <button v-else class="btn  btn-info" @click="afficherModalPourValidationDuDirecteur(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                    
                      </button>
                    </td>
                    
                     <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_motif_directeur) || 'Non renseigné'}}</td>
<td >
  <span v-if="BesoinImmo.motif == 3">
  
<button @click.prevent="AjouterAffectationDemande(index)"  class="btn btn-success">
                <span class=""><i class=" icon-hand-right" title="Affectation Equipement"></i></span></button> 

  </span>
  <span v-else style="color:red;text-align:center">Affectation Desactivé</span>
</td>

                  </tr>
                 
                 
                 
                </tbody>
              </table>
                  </div>
                   <div id="tab129" class="tab-pane active">
                     <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                
                    <th>Nom et prénoms</th>
                    <th>Unite d'administrative</th>
                     <th>Unite de zone</th>
                    <th>Fonction</th>
                    <th>Article</th>
                    <th>Quantite</th>
                    <th>Cause inactivite</th>
                    <th>Cause de la demande</th>
                    <th >Date demande</th>
                     <!-- <th>duré vie</th> -->
                     <th>Date motif sce</th>
                     <th >Duré traitement sce</th>
                     <th>Décision chef sce</th>
                     <th>Date motif Directeur</th>
                     <th >Duré traitement Directeur</th>
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
                    >{{afficherActeurDepense(BesoinImmo.acteur_id) || 'Non renseigné'}}</td> 
                    <td
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficherUniteAdministrative(BesoinImmo.uniteadmin_id) || 'Non renseigné'}}</td> 
                     <td
                       style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficheUniteZone(BesoinImmo.uniteZone_id)  || 'Non renseigné'}}</td> 
                                    
                      <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficheFonction(BesoinImmo.fonction_id) || 'Non renseigné'}}</td>
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
                     <!-- <td
                      style="text-align: center; color:black;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.dure_vie || 'Non renseigné'}}</td> -->
                     <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_motif) || 'Non renseigné'}}</td>
                    <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{BesoinImmo.dure_traitement_sce || 0 }}  jours</td>
                    <td>
                        <button v-if="BesoinImmo.motif_chef_sce == 1"  class="btn  btn-success"  >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="BesoinImmo.motif_chef_sce == 2" class="btn  btn-warning"  >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="BesoinImmo.motif_chef_sce == 4" class="btn  btn-danger"  >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                    
                      </button>
                      
                    </td>
                    
                    

 <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_motif_directeur) || 'Non renseigné'}}</td>
                    <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.dure_traitement_directeur || 0 }}  Jours</td>

<td>
                        <button v-if="BesoinImmo.motif_directeur == 3"  class="btn  btn-success"  >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="BesoinImmo.motif_directeur == 4" class="btn  btn-warning"  >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="BesoinImmo.motif_directeur ==5" class="btn  btn-danger"  >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                    
                      </button>
                    </td>
                    
                    <td>
                       <button v-if="BesoinImmo.motif == 10" class="btn  btn-success" >                        
                     
                      
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



                    <!--ongle identification-->
                    <div id="tab8969" class="tab-pane active">
                  
<div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab11">Listes du personnel   <span class="badge badge-inverse">{{afficheNombreToutPersonne}}</span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab13">Listes des personnes non Equipé  <span class="badge badge-important">{{afficheNombrePersonneNonEquipe}}</span></a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab45">Equipements Non Couverts   <span class="badge badge-warning">{{AfficheTotalQteNonCouvert}}</span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab12">Listes des personnes Equipé     <span class="badge badge-info">{{NombreaffichePersonneEquipe}}</span></a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab1296">Taux equipement par agent</a>
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
       <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdfTauxEquipement()">Exporter en PDF</button>
          </div>
                       <table class="table table-bordered table-striped" id="equipementTaux">
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
                    v-for="BesoinImmo in listeDesEquipementParAgent"
                    :key="BesoinImmo.id"
                  >
   
                    
                    <td
                      
                    >{{afficherActeurDepense(BesoinImmo.acteur_depense_id) || 'Non renseigné'}}</td> 
                    <td
                      
                    >{{afficherUniteAdministrative(BesoinImmo.unite_administrative_id) || 'Non renseigné'}}</td> 
                     <td
                       
                    >{{afficheUniteZone(BesoinImmo.uniteZone_id)  || 'Non renseigné'}}</td> 
                    <td
                      
                    >{{afficheServiceLibelle(afficheService(BesoinImmo.service_id)) || 'Non renseigné'}}</td>
                  
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
                                                               <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div>
                       <table class="table table-bordered table-striped" id="equipementNonCouverts">
                <thead>
                  <tr>
                     
                    <!-- <th>Type Unite d'administrative</th> -->
                    <th>Unite d'administrative</th>
                     <th>Unite de zone</th>
                    <th>Service</th>
                    <th>Fonction</th>
                    <th>Nom et prénoms</th>
                    <!-- <th >Article</th> -->
                     <th >Qte requise</th>
                     <th >Qte couverte</th>
                     <th >Qte non couverte</th>
                     <!-- <th >Prix unitaire(coût moyen)</th> -->
                       <th >Total</th>
                  </tr>
                </thead>
                <tbody>
                 
                    <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in listeDesEquipementNonCouvert"
                    :key="BesoinImmo.id">
                    <td
                      
                    >{{afficherUniteAdministrative(BesoinImmo.unite_administrative_id) || 'Non renseigné'}}</td> 
                     <td
                       
                    >{{afficheUniteZone(BesoinImmo.uniteZone_id)  || 'Non renseigné'}}</td> 
                    <td
                      
                    >{{afficheServiceLibelle(afficheService(BesoinImmo.service_id)) || 'Non renseigné'}}</td>
                  
                      <td 
                      
                    >{{afficheFonction(BesoinImmo.fonction_id) || 'Non renseigné'}}</td>
                     <td
                      
                    >{{afficherActeurDepense(BesoinImmo.acteur_depense_id) || 'Non renseigné'}}</td>
                      <td style="text-align: center;font-size:14px;font-weight:bold;"
                      
                    >{{BesoinImmo.historiquenormequipement || 0}}</td>
                    
                   
                     <td 
                      style="text-align: center;font-size:14px;font-weight:bold;"
                    >{{(BesoinImmo.historiquenormequipement) - (BesoinImmo.normeequipement) || 0}}</td>
                    <td 
                      style="text-align: center;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.normeequipement || 0}}</td>
                   <!-- <td style="text-align: center;">{{BesoinImmo.montantequipement  / BesoinImmo.normeequipement || 0}}</td> -->
                      <td style="text-align: center;font-size:14px;font-weight:bold;"
                    >{{formatageSomme(parseFloat(BesoinImmo.montantequipement)) || 0 }}</td> 
                    
                     
                  </tr>
                 <tr>
                   <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                  
                  <!-- <td></td> -->
                  <td style="text-align: center;font-size:14px;font-weight:bold;">Total</td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{AfficheTotalQteACouvrir}}</td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{(AfficheTotalQteACouvrir)-(AfficheTotalQteNonCouvert)}}</td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{AfficheTotalQteNonCouvert}}</td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{formatageSomme(parseFloat(afficheMontantTotalEquipementNonCouvert))}}</td>
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
                    v-for="(BesoinImmo,index) in listePersonnelAffectete"
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
                    >{{afficheServiceLibelle(afficheService(BesoinImmo.service_id)) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficheFonction(BesoinImmo.fonction_id)}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherActeurDepense(BesoinImmo.acteur_depense_id) || 'Non renseigné'}}</td>
                   
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
                    v-for="(BesoinImmo,index) in listePersonnelNonEquipee"
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
                    >{{afficheServiceLibelle(afficheService(BesoinImmo.service_id)) || 'Non renseigné'}}</td>
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
                   
                     
                         
                    
                     <td title="Affectation d'equipement" style="font-weight: 500;">
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
                    >{{afficheServiceLibelle(afficheService(BesoinImmo.service_id)) || 'Non renseigné'}}</td>
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
                          
                              <input    type="text"   class="span3" readonly  :value="afficherLibelleService(afficheService(formData.service_id))" />                
                             
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
                        <!-- <td>
                          <label class="control-label">Cause inactivite</label>
                          
                             <select v-model="formData2.cause_inactivite" class="span4">
                              <option value=""></option>
    <option v-for="item in causeInactivite" :key="item.id" :value="item.id">{{item.libelle}}</option>
                              </select>
                                              
                        </td> -->
                        
                         <td>
                          <label class="control-label">Duree de vie</label>
                          
                             <input    type="text"   class="span4" readonly  :value="afficherDureeVieFamille(formData2.famillearticle_id)" />                
                             
                             
                        </td>  
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
import listeToutService from '../affectationParService/listeToutService'
import listeServiceNonEquipe from '../affectationParService/listeServiceNonEquipe'
import listeServiceNonCouvert from '../affectationParService/listeServiceNonCouvert'
import listeServiceEquipe from '../affectationParService/listeServiceEquipe'
import tauxServiceEquipe from '../affectationParService/tauxServiceEquipe'
import affectationDemandeDuService from '../docAffectationImmo/affectationDemandeDuService'
import { formatageSomme } from "../../../../Repositories/Repository";
import {admin,dcf} from "../../../../Repositories/Auth"
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  
  name: 'besionImmolisation',
  components: {
      listeToutService,
      listeServiceNonEquipe,
      listeServiceNonCouvert,
      listeServiceEquipe,
      tauxServiceEquipe,
      affectationDemandeDuService
  },
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
      valideService:{
motif:"",
date_motif:""
      },
      valideDirecteur:{
        article_id:"",
motif:"",
date_motif_directeur:"",
cause_directeur:""
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
      formData3:{
        acteur_id:"",
        ua_id:"",
          unitezone_id:"",
          fonction_id:"",
          article_id:"",
          qte:"",
          dure_vie:"",
          etatimmo_id:""
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
      "afficheRegroupeEquipementCouvert",
      "demandeMateriel"
      
      
      
      
    ]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives","directions","servicesua","uniteZones"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins","exercices_budgetaires"]),
...mapGetters("personnelUA", ["acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),
admin:admin,
      dcf:dcf,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

nombreDesDemandePerso() {
      
        if (!this.admin || !this.dcf){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return colect.filter(items=>items.service_id == 0).length
        }

       return this.demandeMateriel.filter(items=>items.service_id == 0).length;

    },

afficheToutDemande() {
      
        if (!this.admin || !this.dcf){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(items=>items.service_id == 0);
        }

       return this.demandeMateriel.filter(items=>items.service_id == 0);

    },






 affichenbreEquipementNonCouvert() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.servicesua.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.s_ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
       return colect.filter(items=>items.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
       }

       return this.servicesua.filter(items=>items.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);

    },





listePersonnelAffectete() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect
        }

       return this.acte_personnels

    },

listePersonnelNonEquipee() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.affichePersonneNonEquipe.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect
        }

       return this.affichePersonneNonEquipe

    },
listeDesEquipementNonCouvert() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.equipementNonCouvert.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect
        }

       return this.equipementNonCouvert

    },
    listeDesEquipementParAgent() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.tauxequipementParAgent.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect
        }

       return this.tauxequipementParAgent

    },
    listeDesPersonneEquipee() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.affichePersonneEquipe.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect
        }

       return this.affichePersonneEquipe

    },




AfficheTotalQteNonCouvert() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }

       return this.acte_personnels.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);

    },
AfficheTotalQteACouvrir() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiquenormequipement), 0).toFixed(0);
        }

       return this.acte_personnels.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiquenormequipement), 0).toFixed(0);

    },
afficheMontantTotalEquipementNonCouvert() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.afficheMontantTotalEquipementNonCouv.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);
        }

       return this.afficheMontantTotalEquipementNonCouv.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);

    },



afficheLesDemandeDuPersonnel() {
      
        if (!this.admin || !this.dcf){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect
        }

       return this.demandeMateriel

    },
afficheValidationChefService() {
      
        if (!this.admin || !this.dcf){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
              
               if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return colect.filter(items => items.service_id == 0 && items.motif != 3 && items.motif != 1 && items.motif != 10 )
        }

       
 return this.demandeMateriel.filter(items => items.service_id == 0 && items.motif != 3 && items.motif != 1 && items.motif != 10 );

    },
    afficheValidationDirecteur() {
     
        if (!this.admin || !this.dcf){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(items=>items.service_id == 0 && items.motif != 0 && items.motif != 5 && items.motif != 4 && items.motif != 10);
        }

       return this.demandeMateriel.filter(items=>items.service_id == 0 && items.motif != 0 && items.motif != 5 && items.motif != 4 && items.motif != 10);

    },

listeDesServiceDeUa() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.servicesua.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.s_ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect
        }

       return this.servicesua

    },


    NombreDeService() {
     
         return this.listeDesServiceDeUa.length;
    },
NombreafficheEquipementNonCouvertService() {
     
         return this.servicesua.filter(element => element.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
    },
    NombreafficheEquipementCouvertService() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.servicesua.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.s_ua_id)
                
              if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
          return colect.filter(items => items.normeequipement == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
          
        }

         return this.servicesua.filter(items => items.normeequipement == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);

    },
// NombreafficheEquipementCouvertService() {
     
//          return this.servicesua.filter(element => element.normeequipement == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
//     },
 afficheService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.servicesua.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.serviceua_id;
      }
      return 0
        }
      };
    },
 afficheServiceLibelle() {
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


 afficheMontantTotalEquipementNonCouv() {
     
         return this.acte_personnels.filter(element => element.normeequipement != 0);
    },

// AfficheTotalQteNonCouvert() {
     
//          return this.acte_personnels.filter(element => element.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
//     },

afficherMontantRestant() {
      const val = this.affichierTotal(this.formData.fonction_id) - this.afficherValeurOrigine;
      return parseFloat(val).toFixed(0);
    },
 


affichierTotal() {
      return id => {
        if (id != null && id != "") {
         return this.normeImmo.filter(element => element.fonction_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total), 0).toFixed(0);

     
        }
      };
    },
    coutMoyenActicle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.normeImmo.find(qtreel => qtreel.famille_id == id);

      if (qtereel) {
        return qtereel.cout_moyen;
      }
      return 0
        }
      };
    },
 

MontantParEquipementModifier(){
  
    
    var montant = this.articles.filter(element => element.famille_id == this.editTransfert.famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(0); 
      if(isNaN(montant)) return null
      return montant

   
  
}, 







afficheEquipementNonCouvt() {
      return id => {
        if (id != null && id != "") {
           return this.normeImmo.find(qtreel => qtreel.fonction_id == id);

    
     
        }
      };
    },



nombreDemandeImmobilisation() {
      
          return this.demandeMateriel.filter(element => element.motif != 10).length;
       
    },






afficherResteStock() {
      const val = this.affichierQuantiteEnStock(this.valideDirecteur.article_id) - this.valideDirecteur.quantite;
      return parseFloat(val).toFixed(0);
    },

affichierQuantiteEnStock() {
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
affichierIdQuantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.stockageArticles.find(qtreel => qtreel.famill_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
afficheAnneeAmortis() {
      const val = parseInt(this.valideDirecteur.annee_budgetaire) + parseInt(this.valideDirecteur.dure_vie);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },




afficheValeurOrigine() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.famillearticle_id == id);

      if (qtereel) {
        return qtereel.valeurorigine;
      }
      return 0
        }
      };
    },


nombreDejourCalculeTraitementService(){
                let vM=this;
    const acteAffet = vM.valideService
    if(acteAffet.date_demande == acteAffet.date_motif &&  acteAffet.date_motif !=="" && acteAffet.date_demande !=="") return 1
     if(acteAffet.date_motif =="" && acteAffet.date_demande =="") return null

       var dateF = new Date(acteAffet.date_motif).getTime()
        var dateO = new Date(acteAffet.date_demande).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.valideService.duree=diffJour
                  return  diffJour;
   
},



nombreDejourCalculeTraitementDirecteur(){
                let vM=this;
    const acteAffet = vM.valideDirecteur
    if(acteAffet.date_motif == acteAffet.date_motif_directeur &&  acteAffet.date_motif_directeur !=="" && acteAffet.date_motif !=="") return 1
     if(acteAffet.date_motif_directeur =="" && acteAffet.date_motif =="") return null

       var dateF = new Date(acteAffet.date_motif_directeur).getTime()
        var dateO = new Date(acteAffet.date_motif).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.valideDirecteur.duree=diffJour
                  return  diffJour;
   
},













verrouilleCause(){

    return this.valideDirecteur.motif == 3;
},



// afficheValidationChefService() {
      
//           return this.demandeMateriel.filter(element => element.service_id == 0 && element.motif != 3 && element.motif != 1 && element.motif != 10 );
       
//     },


// afficheValidationDirecteur() {
      
//           return this.demandeMateriel.filter(element => element.service_id == 0 && element.motif != 0 && element.motif != 5 && element.motif != 4 && element.motif != 10);
       
//     },
// afficheToutDemande() {
      
//           return this.demandeMateriel.filter(element => element.service_id == 0 );
       
//     },
nombreValidationEnAttenteChefService() {
      
          return this.afficheValidationChefService.length;
       
    },
    nombreDemande() {
      
          return this.afficheToutDemande.length;
       
    },
nombreValidationEnAttenteDirecteur() {
      
          return this.afficheValidationDirecteur.length;
       
    },





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
return this.immobilisations.filter(element=>element.qte_actuel != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_actuel), 0).toFixed(0);
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
      return parseFloat(val).toFixed(0);
    },
  afficherValeurOrigine() {
      const val = parseFloat(this.formData2.qte_affecte) * parseFloat(this.coutMonenArticle);
      return parseFloat(val).toFixed(0);
    },

    afficherNombreEquipementRestant() {
      const val = parseFloat(this.formData.normeequipement) - parseFloat(this.formData2.qte_affecte);
      return parseFloat(val).toFixed(0);
    },

montantParBesoin() {
      return id => {
        if (id != null && id != "") {
          return this.articles.filter(element => element.famille_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(0);
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
    equipementNonCouvert(){
return this.acte_personnels.filter(element => element.normeequipement != 0)
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
// afficheEquipementNonCouvert(){
// return this.immobilisations.filter(element => element.qte_actuel != 0)
// },
// NombreafficheEquipementNonCouvert(){
// return this.immobilisations.filter(element => element.qte_actuel != 0).length
// },
NombreafficheEquipementNonCouvert(){
return this.acte_personnels.filter(element => element.normeequipement != 0).length
},

affichePersonneNonEquipe(){
return this.acte_personnels.filter(element => element.normeequipement != 0)
},
NombreaffichePersonneEquipe(){
return this.listeDesPersonneEquipee.length
},
affichePersonneEquipe(){
return this.acte_personnels.filter(element => element.normeequipement == 0)
},
afficheNombrePersonneNonEquipe(){
return this.listePersonnelNonEquipee.length
},

afficheNombrePersonneEquipe(){
return this.acte_personnels.filter(element => element.normeequipement == 0).length
},
afficheNombreToutPersonne(){
return this.listePersonnelAffectete.length
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
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.matricule.concat('    ', qtereel.acteur_depense.nom,'     ',qtereel.acteur_depense.prenom);
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
      
    const val = parseFloat((this.getAfficheArticle.filter(element => element.famillearticle_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2))/this.getAfficheArticle.filter(element => element.famillearticle_id == id).length).toFixed(0); 
    if (isNaN(val)) return null;
    return val;
  
 }
  }
    },

 montantTotalarticlesModifier() {
   if(this.editBesoinImmo.famillearticle_id !=""){
      const val = parseFloat(this.editBesoinImmo.quantite) * parseFloat(this.CoutMoyen(this.editBesoinImmo.famillearticle_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},
 montantTotalarticles() {
   if(this.formData2.famillearticle_id !=""){
      const val = parseFloat(this.formData.quantite) * parseFloat(this.CoutMoyen(this.formData2.famillearticle_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},

 deverouFonctionDirectionService() {
      return this.formData.uniteadmin_id == "";
    },
afficheActeurDepense() {
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.fonctionActeur.id == id);
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
       "modifierStock",
       "ajouterHistotorisqueAffection",
       "modifierDemandeMateriel"
      
     
    ]),
     ...mapActions("personnelUA", [
       "getActeur","allActeurDepense","getActPersonnel",
       "modifierActeurDepenses",
     
    ]),
  
    genererEnPdfTauxEquipement(){
  var doc = new jsPDF('landscape')
  // 
  
    doc.text(98,10,"Taux d'equipement par agent")
  doc.autoTable({ html: '#equipementTaux'})
doc.save('TauxEquipements.pdf')
return 0
},
  genererEnPdf(){
  var doc = new jsPDF('landscape')
  // 
  
    doc.text(98,10,"Listes des equipements non couverts")
  doc.autoTable({ html: '#equipementNonCouverts'})
doc.save('EquipementsNonCouverts.pdf')
return 0
},

  AjouterAffectationDemande(index){
if(this.affichierQuantiteEnStock(this.valideDirecteur.article_id) < this.valideDirecteur.quantite)
{
  alert("Stock en Rupture")
}
else if ( confirm( "Voulez-vous attribuer l'equipement?") ) {
    this.valideDirecteur = this.afficheValidationDirecteur[index];
  
   var nouveauObjetDemande = {
        ...this.valideDirecteur,
 acteur_id:this.valideDirecteur.acteur_id,
 ua_id:this.valideDirecteur.uniteadmin_id,
 unitezone_id:this.valideDirecteur.uniteZone_id,
 fonction_id:this.valideDirecteur.fonction_id,
 article_id:this.valideDirecteur.article_id,
 qte:this.valideDirecteur.quantite,
 dure_vie:this.valideDirecteur.dure_vie,
 
 matricule_auteur:this.afficherActeurDepenseMatricule(this.valideDirecteur.acteur_id),
 annee:this.valideDirecteur.annee_budgetaire,
annee_amortissement:this.afficheAnneeAmortis,
 valeurorigine:this.afficheValeurOrigine(this.valideDirecteur.article_id),
 date_mise_service:this.valideDirecteur.date_motif_directeur,
 
};
   
      let dmdObjet = this.demandeMateriel.find(marche=>marche.id==this.valideDirecteur.id)
         dmdObjet.motif = 10
           let stockObjet = this.stockageArticles.find(marche=>marche.id==this.affichierIdQuantiteEnStock(this.valideDirecteur.article_id))
         stockObjet.quantitestock = this.afficherResteStock

this.ajouterHistotorisqueAffection(nouveauObjetDemande);
this.modifierDemandeMateriel(dmdObjet)
this.modifierStock(stockObjet)
} else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}





},






modifierDecisionChefService(){

  var objetService = {
  ...this.valideService,
  motif_chef_sce:this.valideService.motif,
  dure_traitement_sce:this.nombreDejourCalculeTraitementService
 
}
this.modifierDemandeMateriel(objetService)
this.$("#exampleModalValidationChefService").modal('hide');

},

modifierDecisionDirecteur(){

var objetDirecteur = {
  ...this.valideDirecteur,
  motif_directeur:this.valideDirecteur.motif,
  dure_traitement_directeur:this.nombreDejourCalculeTraitementDirecteur
 
}
this.modifierDemandeMateriel(objetDirecteur)
this.$("#exampleModalValidationdirecteur").modal('hide');
},



afficherModalPourValidationChefService(index) {
      this.$("#exampleModalValidationChefService").modal({
        backdrop: "static",
        keyboard: false
      })
      this.valideService = this.afficheValidationChefService[index];
      
      },


afficherModalPourValidationDuDirecteur(index) {
      this.$("#exampleModalValidationdirecteur").modal({
        backdrop: "static",
        keyboard: false
      })
      this.valideDirecteur = this.afficheValidationDirecteur[index];
      
      },





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

alert("équipement déja attribué")
}
else if(this.afficherQuantiteEnStock(this.formData2.famillearticle_id) == 0){
alert("Veuillez approvisionner votre stock")
}
else if(this.afficherQuantiteEnRequise(this.formData2.famillearticle_id) < this.afficherQteTotal){
  alert("Vérifiez la quantité affecté")
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
 normeequipement:this.afficherNombreEquipementRestant,
 montantequipement:this.afficherMontantRestant
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
      service_id:this.afficheService(this.formData.service_id),
      fonction_id:this.formData.fonction_id,
      anneamortiss:this.anneeAmortissement,
      
      unitezon_id:this.formData.uniteZone_id,
      qte_reel:this.afficherQuantiteEnRequise(this.formData2.famillearticle_id),
     
     qte_affecte:this.nombreAffecter,
     total_actuel:this.afficherPrixActuelResteACouvertModifier,
     qte_actuel:this.afficherQteResteACouvertModifier,

      };
   var nouveauObjetDemande = {
        
 acteur_id:this.formData.acteur_depense_id,
 ua_id:this.formData.unite_administrative_id,
 unitezone_id:this.formData.uniteZone_id,
 fonction_id:this.formData.fonction_id,
 article_id:this.formData2.famillearticle_id,
 qte:this.formData2.qte_affecte,
 dure_vie:this.afficherDureeVieFamille(this.formData2.famillearticle_id),
 etatimmo_id:this.formData2.etat_immobilisation,
 matricule_auteur:this.afficherActeurDepenseMatricule(this.formData.acteur_depense_id),
 annee:this.exerciceBudgetaireEnCours,
 annee_amortissement:this.anneeAmortissement,
 valeurorigine:this.afficherValeurOrigine,
 date_mise_service:this.formData2.date_mise_service
};


this.ajouterHistotorisqueAffection(nouveauObjetDemande)
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
 normeequipement:this.afficherNombreEquipementRestant,
 montantequipement:this.afficherMontantRestant
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
       var ObjetDemande = {
       ...this.formData,
       ...this.formData2,
 acteur_id:this.formData.acteur_depense_id,
 ua_id:this.formData.unite_administrative_id,
 unitezone_id:this.formData.uniteZone_id,
 fonction_id:this.formData.fonction_id,
 article_id:this.formData2.famillearticle_id,
 qte:this.formData2.qte_affecte,
 dure_vie:this.afficherDureeVieFamille(this.formData2.famillearticle_id),
 etatimmo_id:this.formData2.etat_immobilisation,
 matricule_auteur:this.afficherActeurDepenseMatricule(this.formData.acteur_depense_id),
 annee:this.exerciceBudgetaireEnCours,
annee_amortissement:this.anneeAmortissement,
valeurorigine:this.afficherValeurOrigine,
 date_mise_service:this.formData2.date_mise_service
};


this.ajouterHistotorisqueAffection(ObjetDemande)
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
.valDirecteur{
  width:30%;
  margin:0 -15%;
}
</style>
