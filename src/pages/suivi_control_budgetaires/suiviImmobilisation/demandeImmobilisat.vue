
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
                        <a data-toggle="tab" href="#tab1">Demande par Direction</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">Demande par Service</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab3">Demande par Fonction</a>
                      </li>
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                    <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    <th>UA</th>
                    <th>Direction</th>
                    
                     <th>Besoin</th>
                    
                    <th title="Quantité">Qté</th>
                    <th title="Prix Unitaire">PU</th>
                    <th>Total</th>
                    <th title="date demande">Date dmde</th>
                    
                    <th title="date validation du service">Date sce</th>
                    <th>Motif service</th>
                      <th title="date validation UA">Date UA</th>
                    <th>Motif UA</th>
                    <th>Action</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in afficherDirection"
                    :key="BesoinImmo.id"
                  >
                    <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficherUniteAdministrative(BesoinImmo.uniteadmin_id) || 'Non renseigné'}}</td> 
                     <td
                      @dblclick="afficherModalModifierDirection(index)" 
                    >{{afficheUniteZone(BesoinImmo.uniteZone_id) || 'Non renseigné'}}</td> 
                    <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{afficheFamille(BesoinImmo.famille_id) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{BesoinImmo.quantite}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.prix_unitaire)) || 0}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.montant_total)) || 0}}</td>
                    <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{formaterDate(BesoinImmo.date_jour) || 'Non renseigné'}}</td>
                   
                     <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{formaterDate(BesoinImmo.date_motif) || 'Non renseigné'}}</td>

                    
                     <td>
                        <button class="btn btn" @click="validationDuChefDeServicePourDirection(index)" >                        
                     <span v-if="BesoinImmo.motif_demande == 0"  class="btn label label-info"  >En attente </span>
                      <span 
                     v-else   class="btn label label-success"> Valider </span>
                      </button>
                    
                    </td>
                    <td
                      @dblclick="afficherModalModifierDirection(index)"
                    >{{formaterDate(BesoinImmo.date_motif_ua) || 'Non renseigné'}}</td>
                     <td>
                        <button class="btn btn" @click="validationDeUniteAdministrativePourDirection(index)" >
                       
                          
                         
                     <span v-if="BesoinImmo.motif_ua == 1"   class="btn label label-success" >Valider</span>
                     <span 
                     v-else  class="btn label label-info"> En attente </span>
                     
                        
                      </button>
                    
                    </td>

                    <td>
                       
                     
                      <button class="btn btn-danger" @click="supprimerBesoinImmo(BesoinImmo.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                 <tr
                   
                  >
                  
                  <td ></td>
                  <td ></td>
                 
                    <td style="text-align: center;font-weight:bold;">Besoin demande</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{totalBesoinDemandeParDirection}}</td>
                    
                    
                    <td style="text-align: center;font-weight:bold;">Total</td>
                    
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantTotalDemandeParDirection))}}</td>
                   
                    
                     <td ></td>
                    
                  <td ></td>
                    
                    
                     <td ></td>
                    <td ></td>
                    <td></td>
                    <td></td>
                    
                  </tr>
                 
                </tbody>
              </table>

                     
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane">
                      
 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    <th>UA</th>
                    <th>Service</th>
                    
                     <th>Besoin</th>
                    
                    <th title="Quantité">Qté</th>
                    <th title="Prix Unitaire">PU</th>
                    <th>Total</th>
                    <th title="date demande">Date dmde</th>
                    
                    <th title="date validation du service">Date sce</th>
                    <th>Motif service</th>
                      <th title="date validation UA">Date UA</th>
                    <th>Motif UA</th>
                    <th>Action</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in afficherDemandeParService"
                    :key="BesoinImmo.id"
                  >
                    <td
                      @dblclick="afficherModalModifierService(index)"
                    >{{afficherUniteAdministrative(BesoinImmo.uniteadmin_id) || 'Non renseigné'}}</td> 
                     <td
                      @dblclick="afficherModalModifierService(index)" 
                    >{{afficheLibelleService(BesoinImmo.service_id) || 'Non renseigné'}}</td> 
                    <td
                      @dblclick="afficherModalModifierService(index)"
                    >{{afficheFamille(BesoinImmo.famille_id) || 'Non renseigné'}}</td>
                   
                  
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierService(index)"
                    >{{BesoinImmo.quantite}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierService(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.prix_unitaire)) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierService(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.montant_total)) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierService(index)"
                    >{{formaterDate(BesoinImmo.date_jour) || 'Non renseigné'}}</td>
                   
                     <td
                      @dblclick="afficherModalModifierService(index)"
                    >{{formaterDate(BesoinImmo.date_motif) || 'Non renseigné'}}</td>

                    
                     <td>
                        <button class="btn btn" @click="validationDuChefDeServicePourListeService(index)" >                        
                     <span v-if="BesoinImmo.motif_demande == 0"  class="btn label label-info"  >En attente </span>
                      <span 
                     v-else   class="btn label label-success"> Valider </span>
                      </button>
                    
                    </td>
                    <td
                      @dblclick="afficherModalModifierService(index)"
                    >{{formaterDate(BesoinImmo.date_motif_ua) || 'Non renseigné'}}</td>
                     <td>
                        <button class="btn btn" @click="validationDeUniteAdministrativePourListeService(index)" >
                       
                          
                         
                     <span v-if="BesoinImmo.motif_ua == 1"   class="btn label label-success" >Valider</span>
                     <span 
                     v-else  class="btn label label-info"> En attente </span>
                     
                        
                      </button>
                    
                    </td>

                    <td>
                      
                     
                      <button class="btn btn-danger" @click="supprimerBesoinImmo(BesoinImmo.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                 <tr
                   
                  >
                  <td ></td>
                   <td ></td>
                   <td style="text-align: center;font-weight:bold;">Besoin demande</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{totalBesoinDemandeParService}}</td>
                    
                    
                   
                      <td style="text-align: center;font-weight:bold;">Total</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantTotalDemandeParService))}}</td>
                    
                    
                    <td ></td>
                  <td ></td>
                    
                    
                   
                    <td ></td>
                    <td></td>
                    <td></td>
                    
                  </tr>
                 
                </tbody>
              </table>
                      
                        
                        <tr></tr>
                    </div>
                    <div id="tab3" class="tab-pane">
                      

                      
                         <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    <th>UA</th>
                    <th>Fonction</th>
                     <th>Demandeur</th>
                     <th>Besoin</th>
                    
                    <th title="Quantité">Qté</th>
                    <th title="Prix Unitaire">PU</th>
                    <th>Total</th>
                    <th title="date demande">Date dmde</th>
                    
                    <th title="date validation du service">Date sce</th>
                    <th>Motif service</th>
                      <th title="date validation UA">Date UA</th>
                    <th>Motif UA</th>
                    <th>Action</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in afficherFonction"
                    :key="BesoinImmo.id"
                  >
                    <td
                      @dblclick="afficherModalModifierFonction(index)"
                    >{{afficherUniteAdministrative(BesoinImmo.uniteadmin_id) || 'Non renseigné'}}</td> 
                     <td
                      @dblclick="afficherModalModifierFonction(index)" 
                    >{{afficheFonction(BesoinImmo.fonction_id) || 'Non renseigné'}}</td> 
                     <td
                      @dblclick="afficherModalModifierFonction(index)" 
                    >{{afficherActeurDepense(BesoinImmo.demandeur_id) || 'Non renseigné'}}</td> 
                    <td
                      @dblclick="afficherModalModifierFonction(index)"
                    >{{afficheFamille(BesoinImmo.famille_id) || 'Non renseigné'}}</td>
                   
                 
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierFonction(index)"
                    >{{BesoinImmo.quantite}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierFonction(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.prix_unitaire)) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierFonction(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.montant_total)) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierFonction(index)"
                    >{{formaterDate(BesoinImmo.date_jour) || 'Non renseigné'}}</td>
                   
                     <td
                      @dblclick="afficherModalModifierFonction(index)"
                    >{{formaterDate(BesoinImmo.date_motif) || 'Non renseigné'}}</td>

                    
                     <td>
                        <button class="btn btn" @click="validationDuChefDeServicePourListeFonction(index)" >                        
                     <span v-if="BesoinImmo.motif_demande == 0"  class="btn label label-info"  >En attente </span>
                      <span 
                     v-else   class="btn label label-success"> Valider </span>
                      </button>
                    
                    </td>
                    <td
                      @dblclick="afficherModalModifierFonction(index)"
                    >{{formaterDate(BesoinImmo.date_motif_ua) || 'Non renseigné'}}</td>
                     <td>
                        <button class="btn btn" @click="validationDeUniteAdministrativePourListeFonction(index)" >
                       
                          
                         
                     <span v-if="BesoinImmo.motif_ua == 1"   class="btn label label-success" >Valider</span>
                     <span 
                     v-else  class="btn label label-info"> En attente </span>
                     
                        
                      </button>
                    
                    </td>

                    <td>
                        <!-- <button class="btn btn-primary" @click="afficherModalAffectation" >
                        <span>
                          <i class="icon-thumbs-up"></i>
                        </span>
                      </button>
                       <button class="btn btn-danger" >
                        <span>
                          <i class=" icon-columns"></i>
                        </span>
                      </button> -->
                     
                      <button class="btn btn-danger" @click="supprimerBesoinImmo(BesoinImmo.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                   
                  </tr>
                 <tr
                   
                  >
                 
                   <td ></td>
                    <td></td>
                    <td ></td>
                      <td style="text-align: center;font-weight:bold;">Besoin demande</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{totalBesoinDemandeParFonction}}</td>
                    
                    
                   
                      <td style="text-align: center;font-weight:bold;">Total</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantTotalDemandeParFonction))}}</td>
                    
                    
                  <td ></td>
                    
                    
                    <td ></td>
                    <td></td>
                    <td ></td>
                    <td></td>
                    <td></td>
                    
                  </tr>
                 
                </tbody>
              </table>
                    </div>
                    <!--ongle 3 -->
                    <!-- <div id="tab3" class="tab-pane">
                    
                      
                    </div> -->
                  </div>
                  <br />
              
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
      
        <fab :actions="fabActions" @cache="afficherModalAjouterBesoinImmobilisation" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterBesoinImmobilisation()">Open</button>
 
 
 
 
 
   <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
     <div id="exampleModal" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Demande equipement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
        
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Type Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="formData.typeuniteadminist_id" class="span4">
                      <option
                        v-for="typeUniteA in type_Unite_admins"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                    
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Unite administrative</label>
                  <div class="controls">
                    <select v-model="formData.uniteadmin_id" class="span4">
                      <option value=""></option>
                      <option
                        v-for="typeUniteA in uniteAdministDynamiques(formData.typeuniteadminist_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
             
              
               
               <td>
              
               <div class="control-group">
                  <label class="control-label">Unite de Zone</label>
                  <div class="controls">
                    <select  v-model="formData.uniteZone_id" class="span4" :disabled="deverouUniteZone" >
                      <option value=""></option>
                        <option
                        v-for="localgeo in destinationDynamiques(formData.uniteadmin_id)"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              
            </tr>
            <tr>
               <td>
             <div class="control-group">
                  <label class="control-label">Direction</label>
                  <div class="controls">
                    <select  v-model="formData.direction" class="span4"  >
                      <option value = "">Désactiver</option>
                      <option
                       value ="Direction"
                      >Direction</option>
                    </select>
                  </div>
                </div>
              </td>
                <td>
                 <div class="control-group">
                  <label class="control-label">Fonction</label>
                  <div class="controls">
                    <select v-model="formData.fonction_id" class="span4"  >
                     <option value = 0>Désactiver</option>
                      <option
                        v-for="typeUniteA in fonctionDynamiquesParUa(formData.uniteZone_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.fonction.id"
                      >{{typeUniteA.fonction.libelle}}</option>
                    </select>
                  </div>
                </div>
                 <input
                      type="hidden"
                    :value="identifierDmdFonction"
                      class="span4"
                      
                      readonly
                      
                    />
              </td>
              <td>
                 <div class="control-group">
                  <label class="control-label">Service</label>
                  <div class="controls">
                    <select v-model="formData.service_id" class="span4" >
                      <option value = 0>Désactiver</option>
                      <option
                        v-for="typeUniteA in servicesua"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                    
                  </div>
                </div>
                 <input
                      type="hidden"
                    :value="identifierDmdService"
                      class="span4"
                      
                      readonly
                      
                    />
              </td>
              
              
            </tr>
            <tr>
                <td>
                <div class="control-group">
                  <label class="control-label">Demandeur</label>
                
                  <div class="controls">
                      <select v-model="formData.demandeur_id" class="span4">
                     <option
                        v-for="typeUniteA in afficheActeurDepense(formData.fonction_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.matricule}}--{{typeUniteA.nom}}--{{typeUniteA.prenom}}</option>
                   </select>
                  </div>
                  </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">famille</label>
                  <div class="controls">
                    <select v-model="formData.famille_id" class="span4">
                      <option value=""></option>
                      <option
                        v-for="typeUniteA in familleNormeDynamiques(formData.direction)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.norme_famille.id"
                      >{{typeUniteA.norme_famille.libelle}}</option>
                       <option
                        v-for="typeUniteA in familleNormeServiceDynamiques(formData.service_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.norme_famille.id"
                      >{{typeUniteA.norme_famille.libelle}}</option>
                       <option
                        v-for="typeUniteA in familleNormeFonctionDynamiques(formData.fonction_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.norme_famille.id"
                      >{{typeUniteA.norme_famille.libelle}}</option>
                    </select>
                  </div>
                    <!-- <input
                      type="text"
                     :value="codeSectionNature"
                      class="span"
                      placeholder="Saisir le code"
                      readonly
                    /> -->
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Norme</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="afficheNormeFamille"
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
                  <label class="control-label">Demande Equipement</label>
                
                  <div class="controls">
                   <input
                   :max="afficheNormeFamille"
                      type="number"
                  v-model="formData.quantite"
                      class="span4"
                     
                    />
                  </div>
                  </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Cout moyen</label>
                    
               
                  <div class="controls">
                    <input
                      type="text"
                   :value="CoutMoyen(formData.famille_id)"
                      class="span4"
                      
                       readonly
                    />
               </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Total</label>
                    
               
                  <div class="controls">
                    <input
                      type="text"
                     :value="montantTotalarticles"
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
                  <label class="control-label">Date enregistrement</label>
                    
               
                  <div class="controls">
                    <input
                      type="date"
                     v-model="formData.date_jour"
                      class="span4"
                     
                     
                    />
               </div>
                </div>
              </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterBesoinImmoLocal(formData)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
 

 
     <div id="exampleModalMotifservice" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Validation service</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Motif Ua </label>
                            <div class="controls">
                              <select v-model="editBesoinImmo.motif_demande">
                                <option value="0">En attente</option>
                              <option value="1">Valider</option>
                             <!-- <option value="2">Rejetter</option> -->
    
    </select>
                           
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Decision :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editBesoinImmo.date_motif"/>
                            </div>
                          </div>
                           
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierBesoinImmoLocal(editBesoinImmo)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
 
 
 
  <div id="exampleModalMotif" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Validation Unite administrative</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Motif Ua </label>
                            <div class="controls">
                              <select v-model="editBesoinImmo.motif_ua">
                                <option value="0">En attente</option>
                              <option value="1">Valider</option>
                             <!-- <option value="2">Rejetter</option> -->
    
    </select>
                           
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Decision :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editBesoinImmo.date_motif_ua"/>
                            </div>
                          </div>
                           
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierBesoinImmoLocal(editBesoinImmo)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>




     <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->
<div id="modificationModal" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Besoin d'équipement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
        <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Type Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="editBesoinImmo.typeuniteadminist_id" class="span4">
                      <option
                        v-for="typeUniteA in type_Unite_admins"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                    
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Unite administrative</label>
                  <div class="controls">
                    <select v-model="editBesoinImmo.uniteadmin_id" class="span4">
                      <option value=""></option>
                      <option
                        v-for="typeUniteA in uniteAdministDynamiques(editBesoinImmo.typeuniteadminist_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
             
              
               
               <td>
              
               <div class="control-group">
                  <label class="control-label">Unite de Zone</label>
                  <div class="controls">
                    <select  v-model="editBesoinImmo.uniteZone_id" class="span4" :disabled="deverouUniteZone" >
                      <option value=""></option>
                        <option
                        v-for="localgeo in destinationDynamiquesModifier(editBesoinImmo.uniteadmin_id)"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              
            </tr>
            <tr>
               <td>
             <div class="control-group">
                  <label class="control-label">Direction</label>
                  <div class="controls">
                    <select  v-model="editBesoinImmo.direction" class="span4"  >
                      <option value = "">Désactiver</option>
                      <option
                       value ="Direction"
                      >Direction</option>
                    </select>
                  </div>
                </div>
              </td>
                <td>
                 <div class="control-group">
                  <label class="control-label">Fonction</label>
                  <div class="controls">
                    <select v-model="editBesoinImmo.fonction_id" class="span4"  >
                     <option value = 0 >Désactiver</option>
                      <option
                        v-for="typeUniteA in fonctionDynamiquesParUa(editBesoinImmo.uniteZone_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.fonction.id"
                      >{{typeUniteA.fonction.libelle}}</option>
                    </select>
                  </div>
                </div>
                 <input
                      type="hidden"
                    :value="identifierDmdFonctionModifier"
                      class="span4"
                      
                      readonly
                      
                    />
              </td>
              <td>
                 <div class="control-group">
                  <label class="control-label">Service</label>
                  <div class="controls">
                    <select v-model="editBesoinImmo.service_id" class="span4" >
                      <option value = 0 >Désactiver</option>
                      <option
                        v-for="typeUniteA in servicesua"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                    
                  </div>
                </div>
                 <input
                      type="hidden"
                    :value="identifierDmdServiceModifier"
                      class="span4"
                      
                      readonly
                      
                    />
              </td>
              
              
            </tr>
            <tr>
                <td>
                <div class="control-group">
                  <label class="control-label">Demandeur</label>
                
                  <div class="controls">
                      <select v-model="editBesoinImmo.demandeur_id" class="span4">
                     <option
                        v-for="typeUniteA in afficheActeurDepense(editBesoinImmo.fonction_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.matricule}}--{{typeUniteA.nom}}--{{typeUniteA.prenom}}</option>
                   </select>
                  </div>
                  </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">famille</label>
                  <div class="controls">
                    <select v-model="editBesoinImmo.famille_id" class="span4">
                      <option value=""></option>
                      <option
                        v-for="typeUniteA in familleNormeDynamiques(editBesoinImmo.direction)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.norme_famille.id"
                      >{{typeUniteA.norme_famille.libelle}}</option>
                       <option
                        v-for="typeUniteA in familleNormeServiceDynamiques(editBesoinImmo.service_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.norme_famille.id"
                      >{{typeUniteA.norme_famille.libelle}}</option>
                       <option
                        v-for="typeUniteA in familleNormeFonctionDynamiques(editBesoinImmo.fonction_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.norme_famille.id"
                      >{{typeUniteA.norme_famille.libelle}}</option>
                    </select>
                  </div>
                    <!-- <input
                      type="text"
                     :value="codeSectionNature"
                      class="span"
                      placeholder="Saisir le code"
                      readonly
                    /> -->
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Norme</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="afficheNormeFamilleModifier"
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
                  <label class="control-label">Demande Equipement</label>
                
                  <div class="controls">
                   <input
                   :max="afficheNormeFamilleModifier"
                      type="number"
                  v-model="editBesoinImmo.quantite"
                      class="span4"
                     
                    />
                  </div>
                  </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Cout moyen</label>
                    
               
                  <div class="controls">
                    <input
                      type="text"
                   :value="CoutMoyen(editBesoinImmo.famille_id)"
                      class="span4"
                      
                       readonly
                    />
               </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Total</label>
                    
               
                  <div class="controls">
                    <input
                      type="text"
                     :value="montantTotalarticlesModifier"
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
                  <label class="control-label">Date enregistrement</label>
                    
               
                  <div class="controls">
                    <input
                      type="date"
                     v-model="editBesoinImmo.date_jour"
                      class="span4"
                     
                     
                    />
               </div>
                </div>
              </td>
          </tr>
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierBesoinImmoLocal(editBesoinImmo)"
          class="btn btn-primary"
          href="#"
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
 
 
 
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" bg-color="green"></fab> -->
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";

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
        uniteadmin_id: "",
        epuipement_id: "",
        famille_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:"",
        motif_demande:"0",
        date_motif:"",
        motif_ua:"0",
        qterealise:"0",
        nature_section_id:"",
        uniteZone_id:"",
        direction:"",
        fonction_id:"",
        service_id:""
      },
      editBesoinImmo: {
        uniteadmin_id: "",
        famille_id: "",
        epuipement_id: "",
        quantite: "",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:"",
        date_motif:""
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
      "afficherDemandeParService"
      
      
      
    ]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives","directions","servicesua","uniteZones"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
...mapGetters("personnelUA", ["all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

montantTotalDemandeParDirection(){
return this.besoinEquipement.filter(element => element.direction == "Direction").reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total), 0).toFixed(2)
},
totalBesoinDemandeParDirection(){
return this.besoinEquipement.filter(element => element.direction == "Direction").reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0)
},

montantTotalDemandeParService(){
return this.besoinEquipement.filter(element => element.identifier_dmd_service == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total), 0).toFixed(2)
},

totalBesoinDemandeParService(){
return this.besoinEquipement.filter(element => element.identifier_dmd_service == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0)
},


montantTotalDemandeParFonction(){
return this.besoinEquipement.filter(element => element.identifier_dmd_fonction == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total), 0).toFixed(2)
},

totalBesoinDemandeParFonction(){
return this.besoinEquipement.filter(element => element.identifier_dmd_fonction == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0)
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

identifierDmdService(){
if(this.formData.service_id != 0){
  return 2
}


return 0

},

identifierDmdFonction(){
if(this.formData.fonction_id != 0){
  return 1
}

return 0


},

identifierDmdServiceModifier(){
if(this.editBesoinImmo.service_id != 0){
  return 2
}
else {
return 0
}

},

identifierDmdFonctionModifier(){
if(this.editBesoinImmo.fonction_id != 0){
  return 1
}
else{
return 0
}

},

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

pourDesactiveLesfonctionalite(){
 if(this.formData.uniteZone_id ==""){
   return (
     this.formData.direction == "Désactiver" && 
     this.formData.service_id == "Désactiver" &&
    this.formData.fonction_id == "Désactiver"
   )
 }
 return 0
 },
 


CoutMoyen() {
 return id => {
    if(id !=""){
      
    const val = parseFloat((this.getAfficheArticle.filter(element => element.famille_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2))/this.getAfficheArticle.filter(element => element.famille_id == id).length).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
  
 }
  }
    },

 montantTotalarticlesModifier() {
   if(this.editBesoinImmo.famille_id !=""){
      const val = parseFloat(this.editBesoinImmo.quantite) * parseFloat(this.CoutMoyen(this.editBesoinImmo.famille_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(2);
    }
    return null

},
 montantTotalarticles() {
   if(this.formData.famille_id !=""){
      const val = parseFloat(this.formData.quantite) * parseFloat(this.CoutMoyen(this.formData.famille_id));
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
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famille_id == this.formData.famille_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },
        afficheNormeFamilleModifier() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famille_id == this.editBesoinImmo.famille_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },
  },
    
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllBesoinImmo",
      "ajouterBesoinImmo",
      "modifierBesoinImmo",
      "supprimerBesoinImmo",
      "modifierQuantiteEnStock2",
      "modifierQuantiteNormeDmd"
    ]),
    formatageSomme: formatageSomme,

    //afiicher modal ajouter
    afficherModalAjouterBesoinImmobilisation() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
     afficherModalAffectation() {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterBesoinImmoLocal() {
 
       if (this.formData.quantite > this.afficheNormeFamille ) {
        alert("Quantite demande doit être egale a la norme definie")
      }
      else if(this.formData.quantite < this.afficheNormeFamille){
         alert("Quantite demande doit être egale a la norme definie")
      }
     
      else
      {
 //  var objetPourModifierQuantiteEnStock2 = {
      //   id: this.idObjetBesoinImmoAModifierEnStock2,
      //   // qteactuelstock: this.AfficheQteActuelEnStock,
      //   date_jour: this.formData.date_jour,
      //   qte_recu: this.qteRecu,
        
      // }
      // var objetPourModifiernormerealise = {
      //   id: this.normeEqup,
      //   qtedmd: this.totalNorme
      // }
      // this.modifierQuantiteNormeDmd(objetPourModifiernormerealise);
       var nouvelObjet = {
      ...this.formData,
      
       montant_total: this.montantTotalarticles,
      historiqueqte: this.Historqte,
         prix_unitaire:this.CoutMoyen(this.formData.famille_id),
      norme_id : this.normeEqup,
       normearticle : this.afficheNormeFamille,
      dure_vie :this.dureVieEquipement,
      stock_id:this.quantiteEnstockid   ,
      qtestock : this.quantiteEnstock,
      identifier_dmd_service: this.identifierDmdService,
      	identifier_dmd_fonction : this.identifierDmdFonction
      
      };
      //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
      this.ajouterBesoinImmo(nouvelObjet);
     
      
      this.formData = {
        uniteadmin_id: "",
        epuipement_id: "",
        famille_id: "",
        quantite: "",
        article_id:"",
        prix_unitaire: "",
        montant_total: "",
        date_jour: "",
        typeuniteadminist_id:"",
        historiqueqte:"",
        qtestock:"",
        qte_recu: "",
        motif_demande:"0",
        motif_ua:"0",
        norme_id:"",
        normearticle:"",
          fonction_id:0,
        service_id: 0
      };
       this.$("#exampleModal").modal('hide');
      }
     
      // this.afficherModalAffectation()
   

    },
    // afficher modal de modification
    afficherModalModifierDirection(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.afficherDirection[index];
    },
     // afficher modal de modification
    afficherModalModifierFonction(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.afficherFonction[index];
    },
     afficherModalModifierService(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.afficherDemandeParService[index];
    },
      // afficher modal de modification
    // afficherModalModifierBesoinImmo(index) {
    //   this.$("#modificationModal").modal({
    //     backdrop: "static",
    //     keyboard: false
    //   });

    //   this.editBesoinImmo = this.afficherDirection[index];
    // },
     // afficher modal de modification
    validationDeUniteAdministrativePourDirection(index) {
      this.$("#exampleModalMotif").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.afficherDirection[index];
    },
    validationDuChefDeServicePourDirection(index) {
      this.$("#exampleModalMotifservice").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.afficherDirection[index];
    },
      validationDeUniteAdministrativePourListeFonction(index) {
      this.$("#exampleModalMotif").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.afficherFonction[index];
    },
    validationDuChefDeServicePourListeFonction(index) {
      this.$("#exampleModalMotifservice").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.afficherFonction[index];
    },
      validationDeUniteAdministrativePourListeService(index) {
      this.$("#exampleModalMotif").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.afficherDemandeParService[index];
    },
    validationDuChefDeServicePourListeService(index) {
      this.$("#exampleModalMotifservice").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.afficherDemandeParService[index];
    },
    // fonction pour vider l'input modification
    modifierBesoinImmoLocal() {
        if (this.editBesoinImmo.quantite > this.afficheNormeFamilleModifier ) {
        alert("Quantite demande est egale a la norme definie")
      }
      else if(this.editBesoinImmo.quantite < this.afficheNormeFamilleModifier){
         alert("Quantite demande est egale a la norme definie")
      }
      else
      {
         var objetPourModifiernormerealise1 = {
        id: this.normeEqupmodifier,
        qtedmd: this.totalNormemodifier
      }
     
 var nouvelObjetmodifier = {
        ...this.editBesoinImmo,
         montant_total: this.montantTotalarticlesModifier,
      historiqueqte: this.HistorqteModifier,
         prix_unitaire:this.coutMoyenModifier,
         normearticle : this.afficheNormeFamilleModifier,
         norme_id : this.normeEqupmodifier,
         dure_vie :this.dureVieEquipementModifier,
          stock_id:this.quantiteEnstockidModifier  ,
      qtestock : this.quantiteEnstockModifier,
      identifier_dmd_service: this.identifierDmdServiceModifier,
      	identifier_dmd_fonction : this.identifierDmdFonctionModifier
      };
       this.modifierQuantiteNormeDmd(objetPourModifiernormerealise1);
      this.modifierBesoinImmo(nouvelObjetmodifier);
      this.$("#modificationModal").modal('hide');
      this.$("#exampleModalMotif").modal('hide');
      this.$("#exampleModalMotifservice").modal('hide');
      }
     
    },
    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    
    ExporterEnExel(){
      this.$refs.excel.click()
    }
    
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
  width: 72%;
  margin: 0 -35%;
}

</style>
