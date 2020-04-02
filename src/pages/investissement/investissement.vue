


<template>
    <div class="container-fluid">
         <div id="exampleModal" class="modal hide taillModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Marché Résilié</h3>
      </div>
    <div class="modal-body">
        <table class="table table-bordered table-striped">
    <tr>
       <td>
                 <div class="control-group">
            <label class="control-label">N°Marche</label>
            <div class="controls">
              <input
                type="text"
                :value="afficherNumeroMarche(editMarche.marche_id)"
                class="span4"
                readonly
               
              />
            </div>
          </div>
              </td>
              <td colspan="3">
                 <div class="control-group">
            <label class="control-label">Objet Marche</label>
            <div class="controls">
              <textarea name="" id="" cols="2" rows="2"  readonly class="span6" :value="afficherObjetMarche(editMarche.marche_id)"></textarea>
              
            </div>
          </div>
              </td>
    </tr>
    <tr>
      
              <td colspan="3">
                 <div class="control-group">
            <label class="control-label">Cause</label>
            <div class="controls">
            <textarea name="" id="" cols="2" rows="2" class="span10" v-model="editMarche.cause_resiliation"></textarea>
            </div>
          </div>
              </td>
     
    </tr>
          <tr>
       <td>
                 <div class="control-group">
            <label class="control-label">Entreprise</label>
            <div class="controls">
              <input
                type="text"
                :value="afficherEntreprise(editMarche.entreprise_id)"
                class="span4"
 readonly
               
              />
            </div>
          </div>
            
              <td>
                 <div class="control-group">
            <label class="control-label">Fichier join</label>
            <div class="controls">
              <input
                type="file"
               
                class="span3"
               
               
              />
            </div>
          </div>
              </td>
               <td>
                 <div class="control-group">
            <label class="control-label">Date resiliation</label>
            <div class="controls">
              <input
                type="date"
               v-model="editMarche.date_resiliation"
                class="span3"
               
               
              />
              <input
                type="hidden"
               v-model="indicateur_test"
                class="span3"
               
               
              />
            </div>
          </div>
              </td>
    </tr>
    
    
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalResiliation(editMarche)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#" 
        >Fermer</a>
      </div>
    </div>



     <div id="modifierActeEF" class="modal hide grdirModalActeEffet">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier acte effet financier</h3>
            </div>
            <div class="modal-body">

                <table class="table table-bordered table-striped">
                    <tr>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Type acte effet financier.</label>
                                <div class="controls">
                                    <select v-model="editActeEffetFinancier.type_act_effet_id" class="span">
                                        <option v-for="varText in typeActeEffetFinanciers" :key="varText.id"
                                                :value="varText.id">{{varText.libelle}}</option>
                                    </select>

                                </div>
                            </div>
                        </td>


                        <td>
                           <div class="control-group">
                        <label class="control-label">Entreprise.</label>
                        <div class="controls">
                          <select v-model="editActeEffetFinancier.entreprise_id" class="span">
                               <option v-for="varText in entreprises" :key="varText.id"
                                        :value="varText.id">{{varText.raison_sociale}}</option>
                            </select>
                        
                        </div>
                    </div>
                        </td>


                        <td>
                            <div class="control-group">
                                <label class="control-label">Text juridique </label>
                                <div class="controls">
                                    <select v-model="editActeEffetFinancier.text_juridique_id" class="span">
                                        <option v-for="varText in text_juridiques" :key="varText.id"
                                                :value="varText.id">{{varText.objet_text}}</option>
                                    </select>
                                </div>
                            </div>
                        </td>

                        <!-- <td>
                            <div class="control-group">
                                <label class="control-label">Ano bailleur dmp.</label>
                                <div class="controls">
                                    <input :value="info_avis_bailleur" readonly>

                                </div>
                            </div>
                        </td> -->


                    </tr>
                    <tr>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Autorité approbatrice</label>
                                <div class="controls">
                                    <input
                                            type="text"
                                            v-model="editActeEffetFinancier.autorite_approbation"
                                            class="span"
                                            placeholder=" "
                                    />
                                </div>
                            </div>

                        </td>


                        <td>
                            <div class="control-group">
                                <label class="control-label"> date d'approbation</label>
                                <div class="controls">
                                    <input
                                            type="date"
                                            v-model="editActeEffetFinancier.date_approbation"
                                            class="span"
                                            placeholder=""
                                    />
                                </div>
                            </div>

                        </td>


                        <td>

                            <div class="control-group">
                                <label class="control-label">Code acte </label>
                                <div class="controls">
                                    <input
                                            type="text"
                                            v-model="editActeEffetFinancier.code_act"
                                            class="span"
                                            placeholder="Saisir le code acte"
                                    />
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>


                        <td colspan="3" width="250">
                            <div class="control-group">
                                <label class="control-label">Libellé acte:</label>
                                <div class="controls">
                                    <textarea   v-model="editActeEffetFinancier.libelle_act"   class="textarea_editor span12" rows="3" placeholder="Entrer le libellé ..."></textarea>
                                </div>

                            </div>
                        </td>



                    </tr>
                    <tr>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Reference acte</label>
                                <div class="controls">
                                    <input type="text" v-model="editActeEffetFinancier.reference_act"
                                           class="span"
                                           placeholder="refence acte"
                                    />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="control-group">
                                <label class="control-label">Incidence financière</label>
                                <div class="controls">
                                    <select  v-model="editActeEffetFinancier.incidence_financiere" class="span">
                                        <option value="0">Oui</option>
                                        <option value="1">Non</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>

                            <div class="control-group">
                                <label class="control-label">Montant acte/réel du marché</label>
                                <div class="controls">
                                    <input type="text" v-model="editActeEffetFinancier.montant_act"
                                           class="span"
                                           placeholder="refence acte"
                                    />
                                </div>
                            </div>
                        </td>
                        <td>

                            <div class="control-group">
                                <label class="control-label" >Date de signature attributaire</label>
                                <div class="controls">
                                    <input type="date" v-model="editActeEffetFinancier.date_attributaire"
                                           class="span"
                                           placeholder=""
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>


                        <td>
                            <div class="control-group">
                                <label class="control-label">Date ordre de service demarrage</label>
                                <div class="controls">
                                    <input type="date" v-model="editActeEffetFinancier.date_odre_service"
                                           class="span"
                                           placeholder=""
                                    />
                                </div>
                            </div>
                        </td>


                        <td>
                            <div class="control-group">
                                <label class="control-label" title=" ">Date fin exécution</label>
                                <div class="controls">
                                    <input type="date" :min="editActeEffetFinancier.date_odre_service" :readonly="getDateFinExécutionValue" v-model="editActeEffetFinancier.date_fin_exe"
                                           class="span"
                                           placeholder=""
                                    />
                                </div>
                            </div>
                        </td>



                        <td>
                            <div class="control-group">
                                <label class="control-label" title=" ">Durée d'exécution(jrs)</label>
                                <div class="controls">
                                    <input type="text" readonly :value="nombreDejourCalcule"
                                           class="span"
                                    />
                                </div>
                            </div>
                        </td>


                        <td>
                            <div class="control-group">
                                <label class="control-label" title=" ">Date de reception definitive</label>
                                <div class="controls">
                                    <input type="date" v-model="editActeEffetFinancier.date_reception"
                                           class="span"
                                           placeholder=""
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>

                </table>
            </div>
             <div class="modal-footer">
                <a
                        @click.prevent="modifierModalActeEffetFinancierLocal"
                        class="btn btn-primary"
                        href="#"

                >Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>


 


    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
         <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#tab2078">Toutes les marches    <span class="badge badge-inverse" >{{nombreTotalMarche}}</span></a></li>
                               <li ><a data-toggle="tab" href="#tab100">Marchés Planifiés        <span class="badge badge-important" >    {{AfficheMarcheNonAttribue}}</span></a></li>
                                <li ><a data-toggle="tab" href="#tab10">En cours Contratualisation        <span class="badge badge-success" >{{NombreafficheContrat}}</span></a></li>
                                <li><a data-toggle="tab" href="#tab20">Marchés en Exécution      <span class="badge badge-warning" >     {{afficheNombreMarchExecuter}}</span></a></li>
                                <!-- <li><a data-toggle="tab" href="#tab208">Marchés Terminés      <span class="badge badge" >     {{0}}</span></a></li> -->
                                 <li><a data-toggle="tab" href="#tab20002">Marchés Résiliés    <span class="badge badge-info" >     {{afficheNombreMarcheResilier}}</span></a></li>
                                  <!-- <li><a data-toggle="tab" href="#tab99999">Exemple2  </a></li>  -->
                                <!-- <li class=""><a data-toggle="tab" href="#tab2">Liste des lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Contratualisation</a></li>-->
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
                Recherche Par :
                <input type="search"  v-model="search" />
              </div>
            </div>
                             <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                <th>Ann&eacute;e</th>
                 <th title="unite administrative">UA</th>
                      <th>Type marche</th>
                   
                    <th>Activit&eacute;</th>
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <th>Reference march&eacute;</th> 
                                    <th>Montant prevue</th>
                                <th>Attribution</th>
                                <th>Action</th>
                </tr>
              </thead>
                <tbody>
                
                </tbody>
              </table>
                           
                        </div>




                 <div id="tab2078" class="tab-pane active">
                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des March&eacute;s</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
              <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Année</th>
                      <th>UA</th>
                    <th>Type marché</th>
                    <th>Activité</th>
                    <th>Imputation</th>
                    <!-- <th>Ligne Budgetaire</th> -->
                    <th>Objet marché</th>
                    <th>Reference marché</th>
                     <!-- <th>Numero marché</th> -->
                    <th>Montant prévu</th>
                    <th>marché Attribuer</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 
                        <tr class="odd gradeX" v-for="(marche, index) in 
                afficherLaListeDesContratsDuPersonnel"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objetUniteAdministrative.libelle || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.type_marche.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.afficheActivite.libelle || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.imputation || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objet || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.reference_marche || 'Non renseigné'}}</td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="marche.attribue == 1"  class="btn  btn-success">
                <span >OUI</span>
       
                </button>
                   <button v-else class="btn  btn-danger">
              
                <span >NON</span>
                </button>
                   </td>


                     <div class="btn-group">

                   <!-- <router-link :to="{ name: 'DetaillMarche', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marches">
                  <span class=""><i class="icon-folder-open"></i></span>
                   </router-link>  -->
                 
                   
              <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                       </tr>
                        <tr>
                     
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                     
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Marché
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantMarche))}}
                           
                      </td>
                       <td>
                          
                      </td>
                       
                     
                    </tr>
                </tbody>
              </table>
          
             </div>

             <div id="tab100" class="tab-pane ">
                                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Marches en Planifications</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                          <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                <th>Ann&eacute;e</th>
                 <th title="unite administrative">UA</th>
                      <th>Type marche</th>
                   
                    <th>Activit&eacute;</th>
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <th>Reference march&eacute;</th> 
                                    <th>Montant prevue</th>
                                <th>Attribution</th>
                                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="(marche, index) in 
                affichePlanifier"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(marche.unite_administrative_id) || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.type_marche.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficheractivite(marche.activite_id) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.imputation || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objet || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.reference_marche || 'Non renseigné'}}</td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="marche.attribue == 1"  class="btn  btn-success">
                <span >OUI</span>
       
                </button>
                   <button v-else class="btn  btn-danger">
              
                <span >NON</span>
                </button>
                   </td>


                     <div class="btn-group">
 <!-- <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche proceduce simplifiée">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link>  -->
                   <!-- <router-link :to="{ name: 'DetaillMarche', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marches">
                  <span class=""><i class="icon-folder-open"></i></span>
                   </router-link>  -->
  <!-- <router-link :to="{ name: 'Engagement', params: { id: marche.id }}"
                class="btn btn-default " title="Detail Engagement">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link>  -->
                     
                 <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link> 
                   <router-link :to="{name:'detailMarcheFsqc',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche SFQC">
                   <span class=""><i class="icon-book"></i></span>
                   </router-link>

                  <router-link :to="{name:'detailMarcheR3cv',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche R3CV">
                   <span class=""><i class="icon-plus"></i></span>
                   </router-link>


                   <router-link :to="{name:'detailMarcheAoi_Aon',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche AOI-AON">
                   <span class=""><i class="icon-user"></i></span>
                   </router-link>


              <!-- <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button> -->
             
            </div>

                       </tr>
                        <tr>
                     
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                     
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Marché
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantPlanifier))}}
                           
                      </td>
                       <td>
                          
                      </td>
                       
                     
                    </tr>
                </tbody>
              </table>
               </div>






                            <div id="tab10" class="tab-pane">
                              <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Marches En cours de Contratualisation</h5>
              
            </div>
                <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                <th>Ann&eacute;e</th>
                 <th title="unite administrative">UA</th>
                      <th>Type marche</th>
                   
                    <th>Activit&eacute;</th>
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <th>Reference march&eacute;</th> 
                                    <th>Montant prevue</th>
                                <th>Attribution</th>
                                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                      <tr class="odd gradeX" v-for="(marche, index) in 
                afficheContrat"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(marche.AfficheMarche.unite_administrative_id) || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.type_marche.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficheractivite(marche.AfficheMarche.activite_id )|| 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.imputation || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.objet || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.reference_marche || 'Non renseigné'}}</td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.AfficheMarche.montant_marche)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="marche.AfficheMarche.attribue == 1"  class="btn  btn-success">
                <span >OUI</span>
       
                </button>
                   <button v-else class="btn  btn-danger">
              
                <span >NON</span>
                </button>
                   </td>


                     <div class="btn-group">

                   <!-- <router-link :to="{ name: 'DetaillMarche', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marches">
                  <span class=""><i class="icon-folder-open"></i></span>
                   </router-link>  -->
  <!-- <router-link :to="{ name: 'Engagement', params: { id: marche.id }}"
                class="btn btn-default " title="Detail Engagement">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link>  -->

                   <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link> 
                   <router-link :to="{name:'detailMarcheFsqc',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche SFQC">
                   <span class=""><i class="icon-book"></i></span>
                   </router-link>

                  <router-link :to="{name:'detailMarcheR3cv',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche R3CV">
                   <span class=""><i class="icon-plus"></i></span>
                   </router-link>


                   <router-link :to="{name:'detailMarcheAoi_Aon',params:{id:marche.id}}"
                   class="btn btn-default"  title="detail marche AOI-AON">
                   <span class=""><i class="icon-user"></i></span>
                   </router-link>
                   <button   class="btn btn-danger " title="aller
                    en contratualisation" @click="afficherModalModifierActeEffetFinancier(index)">
                <span class=""><i class="icon-plus"></i></span></button>
                   
              <!-- <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button> -->
             
            </div>

                       </tr>
                      
                </tbody>
              </table>
                           
                        </div>

                  
                         <div id="tab20" class="tab-pane">
                            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des marchés en executions</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
              
            </div>
                        <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                <th>Ann&eacute;e</th>
                 <th title="unite administrative">UA</th>
                      <th>Type marche</th>
                   
                    <th>Activit&eacute;</th>
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <th>Reference march&eacute;</th> 
                                    <th>Montant réel</th>
                                <th>Attribution</th>
                                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  <!-- <input type="text" :value="nombreJourTraitementCalucle"> -->
                   <tr class="odd gradeX" v-for="(marche, index) in 
                afficheMarchExecuter"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(marche.AfficheMarche.unite_administrative_id) || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.type_marche.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficheractivite(marche.AfficheMarche.activite_id )|| 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.imputation || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.objet || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.reference_marche || 'Non renseigné'}}</td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_act)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="marche.AfficheMarche.attribue == 1"  class="btn  btn-success">
                <span >OUI</span>
       
                </button>
                   <button v-else class="btn  btn-danger">
              
                <span >NON</span>
                </button>
                   </td>


                     <div class="btn-group">
 
                 <!-- <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche proceduce simplifiée">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link>  -->
                   <!-- <router-link :to="{ name: 'DetaillMarche', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marches">
                  <span class=""><i class="icon-folder-open"></i></span>
                   </router-link>  -->
  <!-- <router-link :to="{ name: 'Engagement', params: { id: marche.id }}"
                class="btn btn-default " title="Detail Engagement">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link>  -->
                    <button   class="btn btn-info " title="Ajouter marché resilié" @click="afficherModalMarcheResilier(index)">
                <span class=""><i class="icon-pencil"></i></span></button>

                 <button   class="btn btn-danger " title="retour en contratualisation" @click="afficherModalModifierActeEffetFinancier(index)">
                <span class=""><i class="icon-plus"></i></span></button>
                
                

                 <!-- <div class="widget-content">
                        <a href="#modifierActeEF" data-toggle="modal" class="">ajouter</a>
                    </div> -->         
             
            </div>

                       </tr>
                      
                </tbody>
              </table>
                            


                        </div>


                         <div id="tab20002" class="tab-pane">
                              <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Marchés résiliés</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                <th>Ann&eacute;e</th>
                <th>Unite administrative</th>
                 <th title="unite administrative">Numero march&eacute;</th>
                      <th>Objet march&eacute;</th>
                   
                    <th>Entreprise</th>
                    <th>Cause R&eacute;siliation</th>
                       <th>Date r&eacute;siliation</th>
                         <th>Montant march&eacute;</th>
                                
                </tr>
                </thead>
                <tbody>
               
                  <!-- <input type="text" :value="nombreJourTraitementCalucle"> -->
                  <tr class="odd gradeX" v-for="(marche, index) in 
                afficheMarcheResilier"
                 :key="marche.id">
                 
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(marche.AfficheMarche.unite_administrative_id) || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.numero_marche || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.AfficheMarche.objet || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.varObjetEntreprise.raison_sociale || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.date_resiliation || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.cause_resiliation || 'Non renseigné'}}</td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_act)) || 'Non renseigné'}}</td>
  



                       </tr>
                        
                      
                </tbody>
              </table>


                        </div>


                        <!-- <div id="tab208" class="tab-pane ">
                                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Marches Terminés</h5>
            
            </div>
                          <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                <th>Ann&eacute;e</th>
                 <th title="unite administrative">UA</th>
                      <th>Type marche</th>
                   
                    <th>Activit&eacute;</th>
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <th>Reference march&eacute;</th> 
                                    <th>Montant prevue</th>
                                <th>Attribution</th>
                                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </table>


                        </div> -->
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
 import { mapGetters, mapActions } from "vuex";
 import { formatageSomme } from "../../../src/Repositories/Repository";
 // import acteModification from '../dossierDetailMarchePs/dossierModificationActe/acteModification';
export default {
  props:["macheid"],
  name:'type facture',
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
    //   json_fields: {
    //     CODE: "code",
    //     libelle: "libelle"
    //   },
    editActeEffetFinancier:"",
    formEffetFinancier:{
       code_act:"",
             libelle_act:"",
             reference_act:"",
             objet_act:"",
             incidence_financiere:"",
             montant_act:"",
              date_attributaire:"",
             date_reception:"",
             duree:"",
             date_fin_exe:"",
             date_odre_service:"",
             livrable_id:"",
        autorite_approbation:"",
        date_approbation:"",
             text_juridique_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
             entreprise_id:"",
             marche_id:"",
             numero_marche:""

    },

      formData: {
            objet:"",
            livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                unite_administrative_id:"",
                gdenature_id:"",
                activite_id:"",
                typeappel_id:"",
                exo_id:""
        
      },
      editMarche: {
           objet:"",
           livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                unite_administrative_id:"",
                imputation:"",
                 activite_id:"",
                 exo_id:""
                 
      },
      indicateur_test:1,
      search: ""

      
    };
  },

  computed: {
     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser','acteEffetFinanciers','montantPlanifier','montantContratualisation','afficheContratualisation',
     'afficherContratualisation','affichePlanifier','nombremarchesExecute','afficheMarchePlanifier','afficheMarcheContratualisation','AfficheMarcheAttribue','AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
     "montantMarche","typeActeEffetFinanciers","gettersCotationPersonnaliser" ,"text_juridiques",
     "printMarcheNonAttribue","procedurePassations","typeTypeProcedures"]),

     ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),



   
        
      afficherEntrepriseRecep () {
                return id => {
                    if (id != "") {
                        // console.log("Marche lettre inviation marche")
                        return this.gettersCotationPersonnaliser.filter(idmarche => idmarche.marche_id == id)
                     }
             }
            },

                        
nombreDejourCalcule(){
                let vM=this;
    const acteAffet = vM.formEffetFinancier
    if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
     if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null

       var dateF = new Date(acteAffet.date_fin_exe).getTime()
        var dateO = new Date(acteAffet.date_odre_service).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.formEffetFinancier.duree=diffJour
                  return  diffJour;
   
},

            getDateFinExécutionValue(){
    return !this.formEffetFinancier.date_odre_service !=""
},

  
afficherLaListeDesContratsDuPersonnel(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 3)
},


 afficherObjetMarche() {
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
    afficherNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
afficherEntreprise() {
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
      afficheractivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },


    procedurePassationDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.procedurePassations.filter(
            element => element.type_procedure_id == id
          );
        }
      };
    },
     activiteDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    deverouPassation() {
      return this.formData.typeappel_id == "";
    }, 
     deverouPassationModi() {
      return this.editMarche.typeappel_id == "";
    }, 
    deverouGrandNature() {
      return this.formData.unite_administrative_id == "";
    }, 
    deverouactivite() {
      return this.formData.gdenature_id == "";
    },
     deveroueconomiq() {
      return this.formData.activite_id == "";
    },
     economiqueDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },

  grandeNatureDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },










     ImputationBudget() {

      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.afficheEconomique.id == this.formData.economique_id);

      if (norme) {
        return norme.codebudget;
      }
      return 0
    },
     ImputationBudgetModifier() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.afficheEconomique.id == this.editMarche.economique_id);

      if (norme) {
        return norme.codebudget;
      }
      return 0
    },
    nombreJourTraitementCalucle(){
   let date = new Date();
        let aaaa = date.getFullYear();
        let gg = date.getDate();
        let mm = (date.getMonth() + 1);
        let moi;
        let jour;
        if (gg < 10)
        {
            jour = "0" + gg;
        }else{
            jour = gg
        }


        if (mm < 10)
        {
            moi = "0" + mm;
        }else{
            moi=mm;
        }


        let cur_day = aaaa + "-" + moi + "-" + jour;

        return cur_day


        // return cur_day + " " + hours + ":" + minutes + ":" + seconds;
   },
   afficheExercution(){
return this.getActeEffetFinancierPersonnaliser.filter(element => element.date_odre_service == this.nombreJourTraitementCalucle)
},
afficheMarchExecuter(){



return this.afficheExercution.filter(element => element.indicateur_resilie != 1)
},

afficheParMarcheEnExecution(){
return this.afficheExercution.filter(element => element.indicateur_resilie != 1)
},

afficherMarcheEncontratualisation(){
  return this.printMarcheNonAttribue.filter(item => item.contratualisation==1)
},






afficheMarcheResilier(){
return this.afficheExercution.filter(element => element.indicateur_resilie == 1)
},


afficheNombreMarchExecuter(){
return this.afficheExercution.filter(element => element.indicateur_resilie != 1).length
},


afficheNombreMarcheResilier(){
return this.afficheMarcheResilier.filter(element => element.indicateur_resilie !="").length
},



 afficheContrat(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => element.date_odre_service < this.nombreJourTraitementCalucle)
},

NombreafficheContrat(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => element.date_odre_service < this.nombreJourTraitementCalucle).length
},
NombreExecute(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => element.date_odre_service == this.nombreJourTraitementCalucle).length
},
    // ImputationBudgetModif() {
      
    //   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.editMarche.Economique);

    //   if (norme) {
    //     return norme.codebudget;
    //   }
    //   return 0
    // },
    MontatantImputationBudget() {
      
      const norme = this.getPersonnaliseBudgetGeneral.find(normeEquipe => normeEquipe.economique_id == this.formData.Economique);

      if (norme) {
        return norme.Dotation_Initiale;
      }
      return 0
    },





sommeMarcheParMandat: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },


recupererMontantReel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
comparerMontantReelEtMandat(){
return this.marches.filter(element => {
  if(this.recupererMontantReel(element.id) == this.sommeMarcheParMandat(element.id)){

return element;


}
})

},





// sommeMarcheParMandat: function () {
//                 return id => {
//                     if (id != "") {
//                       let valInite=0;
//                         return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
//                            return total + parseFloat(currentVal.total_general)
//                         },valInite);
//                     }
//                 }
//             },


// recupererMontantReel() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

//       if (qtereel) {
//         return qtereel.montant_act;
//       }
//       return 0
//         }
//       };
//     },
    
// comparerMontantReelEtMandat(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => {
//   if(this.recupererMontantReel(element.id) == this.sommeMarcheParMandat(element.id)){

// return element;


// }
// else{
//   return ""
// }
// })

// }










  },
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche',
    'supprimerMarche','modifierActeEffetFinancier'
     
    ]),
      afficherModalMarcheResilier(index) {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editMarche = this.afficheMarchExecuter[index];
    },
    //afiicher modal ajouter
    afficherModalAjoutTypaPrestation() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalTypePrestationLocal(){
      
       var nouvelObjet = {
      ...this.formData,
      imputation :this.ImputationBudget,
      exo_id : this.anneeAmort
       };
this.ajouterMarche(nouvelObjet)
this.formData = {
            objet:"",
            livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                unite_administrative_id:"",
                imputation:"",
                	activite_id:""
}

    },
    formatageSomme:formatageSomme,
    // afficher modal de modification
    afficherModalModifierTypePrestation(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editMarche = this.marches[index];
    },
    // fonction pour vider l'input modification
    modifierModalTypeprestationLocal(){
       var nouvelObjet = {
      ...this.editMarche,
      imputation :this.ImputationBudgetModifier,
      exo_id : this.anneeAmort
       };
      this.modifierMarche(nouvelObjet)
      this.$('#modificationModal').modal('hide');
    },
    
    modifierModalResiliation(){
      var nouvelObjet = {
      ...this.editMarche,
      indicateur_resilie :this.indicateur_test
      
       };
      this.modifierActeEffetFinancier(nouvelObjet)
      this.$('#exampleModal').modal('hide');
    },


    




    ////////////// information sur acte

     afficherModalModifierActeEffetFinancier(index){
    this.$('#modifierActeEF').modal({
        backdrop: 'static',
        keyboard: false
    });
    this.editActeEffetFinancier = this.acteEffetFinanciers[index]
}, 

modifierModalActeEffetFinancierLocal(){

    this.modifierActeEffetFinancier(this.editActeEffetFinancier)
    this.$('#modifierActeEF').modal('hide');
},
    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }

};
</script>

<style scoped>
.taillModal{
  width: 1080px;
   margin: 0 -25%;
   
}
.grdirModalActeEffet{
   width: 1200px;
 margin: 0 -530px;
 height: 550px;
}
</style>
