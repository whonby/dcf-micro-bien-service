
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
                :value="afficherNumeroMarche(editActeEffetFinancier.marche_id)"
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
              <textarea name="" id="" cols="2" rows="2"  readonly class="span6" :value="afficherObjetMarche(editActeEffetFinancier.marche_id)"></textarea>
              
            </div>
          </div>
              </td>
    </tr>
    <tr>
      
              <td colspan="3">
                 <div class="control-group">
            <label class="control-label">Cause</label>
            <div class="controls">
            <textarea name="" id="" cols="2" rows="2" class="span10" v-model="editActeEffetFinancier.cause_resiliation"></textarea>
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
                :value="afficherEntreprise(editActeEffetFinancier.entreprise_id)"
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
               v-model="editActeEffetFinancier.date_resiliation"
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
          @click.prevent="modifierModalResiliation(editActeEffetFinancier)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#" 
        >Fermer</a>
      </div>
    </div>



<!---debut de modification de acte effet financier   --->

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
                                    <select v-model="editActeEffetFinancier.type_act_effet_id" class="span3">
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
                          <select v-model="editActeEffetFinancier.entreprise_id" class="span3">
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
                                    <select v-model="editActeEffetFinancier.text_juridique_id" class="span3">
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
 <td>
                            <div class="control-group">
                                <label class="control-label">Autorité approbatrice</label>
                                <div class="controls">
                                    <input
                                            type="text"
                                            v-model="editActeEffetFinancier.autorite_approbation"
                                            class="span3"
                                            placeholder=" "
                                    />
                                </div>
                            </div>

                        </td>


                    </tr>
                    <tr>
                       

                        <td>
                            <div class="control-group">
                                <label class="control-label"> date d'approbation</label>
                                <div class="controls">
                                    <input
                                            type="date"
                                            v-model="editActeEffetFinancier.date_approbation"
                                            class="span3"
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
                                            class="span3"
                                            placeholder="Saisir le code acte"
                                    />
                                </div>
                            </div>
                        </td>
 <td colspan="2">
                            <div class="control-group">
                                <label class="control-label">Libellé acte:</label>
                                <div class="controls">
                                  <input
                                            type="text"
                                            v-model="editActeEffetFinancier.libelle_act" 
                                            class="span6"
                                            placeholder="Saisir le code acte"
                                    />
                                   
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
                                           class="span3"
                                           placeholder="refence acte"
                                    />
                                </div>
                            </div>
                        </td>
<td>
                            <div class="control-group">
                                <label class="control-label">Incidence financière</label>
                                <div class="controls">
                                    <select  v-model="editActeEffetFinancier.incidence_financiere" class="span3">
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
                                           class="span3"
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
                                           class="span3"
                                           placeholder=""
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        
                        
                    </tr>
                    <tr>


                        <td>
                            <div class="control-group">
                                <label class="control-label">Date ordre de service demarrage</label>
                                <div class="controls">
                                    <input type="date" v-model="editActeEffetFinancier.date_odre_service"
                                           class="span3"
                                           placeholder=""
                                    />
                                </div>
                            </div>
                        </td>


                        <td>
                            <div class="control-group">
                                <label class="control-label" title=" ">Date fin exécution</label>
                                <div class="controls">
                                      <input type="date" :min="editActeEffetFinancier.date_odre_service"  v-model="editActeEffetFinancier.date_fin_exe"
                                           class="span3"
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
                                           class="span3"
                                    />
                                </div>
                            </div>
                        </td>


                        <td>
                            <div class="control-group">
                                <label class="control-label" title=" ">Date de reception definitive</label>
                                <div class="controls">
                                    <input type="date" v-model="editActeEffetFinancier.date_reception"
                                           class="span3"
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



<!---fin de modification  -->




<!---debut de modification de acte effet financier   --->




    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
         <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#tab2078">Toutes les marches    <span class="badge badge" >{{nombreDeMarche}}</span></a></li>
                               
                               <li ><a data-toggle="tab" href="#tab100">Marchés Planifiés        <span class="badge badge-important" >    {{nombreMarcheEnplanification}}</span></a></li>
                                <li ><a data-toggle="tab" href="#tab10">En cours Contratualisation        <span class="badge badge-success" >{{nombreDeMarcheEnContratualisation}}</span></a></li>
                                <li><a data-toggle="tab" href="#tab20">Marchés en Exécution      <span class="badge badge-warning" >     {{nbreMarcheExecuter}}</span></a></li>
                                <!-- <li><a data-toggle="tab" href="#tab208">Marchés Terminés      <span class="badge badge" >     {{0}}</span></a></li> -->
                                 <li><a data-toggle="tab" href="#tab20002">Marchés Résiliés    <span class="badge badge-info" >     {{afficheNombreMarcheResilier}}</span></a></li>
                                  <li><a data-toggle="tab" href="#tab2000256">Marchés Terminé    <span class="badge badge-inverse" >     {{nombreAfficheMarcheSolde}}</span></a></li>
                                  <!-- <li><a data-toggle="tab" href="#tab99999">Exemple2  </a></li>  -->
                                <!-- <li class=""><a data-toggle="tab" href="#tab2">Liste des lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Contratualisation</a></li>-->
                            </ul>
                        </div>
                        <div class="widget-content tab-content">

                       <div id="tab2000256" class="tab-pane">
                              <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes des Marches Terminés</h5>
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
                   
                    <!-- <th>Activit&eacute;</th> -->
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <!-- <th>Reference march&eacute;</th>  -->
                                    <th>Montant réel</th>
                                <th>Etat du marché</th>
                                
                </tr>
               
                </thead>
                <tbody>
                    <tr class="odd gradeX" v-for="(marche, index) in 
                afficheMarcheTerminer"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherAnneeBudget(marche.marche_id) || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(afficherIdUniteAdministrative(marche.marche_id)) || 'Non renseigné'}}</td>
                 
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{ELibelle(E(marche.marche_id))|| 'Non renseigné'}}</td>
                  <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficheractivite(afficherIdactivite(marche.marche_id))|| 'Non renseigné'}}</td> -->
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherImputationMarche(marche.marche_id)|| 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherObjetMarche(marche.marche_id) || 'Non renseigné'}}</td>
                     <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherReferenceMarche(marche.marche_id)|| 'Non renseigné'}}</td> -->
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_act)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="afficherAttributMarche(marche.marche_id) == 5"  class="btn  btn-inverse">
                <span >TE</span>
       
                </button>
                 <router-link :to="{ name: 'Engagement', params: { id: marche.marche_id }}"
                class="btn btn-default " title="Detail Payement marche">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link> 
                   <!-- <button v-else class="btn  btn-danger">
              
                <span >NON</span>
                </button> -->
                   </td>

                     <div class="btn-group">
 
               
             
            </div>
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
                        <!-- <th>Reference march&eacute;</th>  -->
                                    <th>Montant prevue</th>
                                <th>Etat du marché</th>
                                <th colspan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                        <tr class="odd gradeX" v-for="(marche, index) in 
                afficheMarcheEnCoursContratualisation"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(marche.unite_administrative_id) || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{ELibelle(marche.type_marche_id) || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficheractivite(marche.activite_id) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.imputation || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objet || 'Non renseigné'}}</td>
                     <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.reference_marche || 'Non renseigné'}}</td> -->
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="marche.attribue == 1"  class="btn  btn-success">
                <span >CT</span>
       
                </button>
                  
                 

</td>
<td>
    <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="continue la contratualisation">
                  <span class=""><i class=" icon-folder-open"></i></span>
                    </router-link> 
</td>
<td>
 
 
   <button @click.prevent="modifierModalActeEffetFinancierLocal2(index)"  class="btn btn-info"  title="Basculer en Execution">
                <span class=""><i class="icon-folder-open" ></i></span></button> 
</td>
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
                     
                       <td style="font-weight:bold;text-align: center;"> Total Marché
                      </td>
                      
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantEnContratualisation))}}
                           
                      </td>
                       <td>
                          
                      </td>
                        <td>
                          
                      </td>
                      <td>
                          
                      </td>
                    </tr>
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
                    <th>Mode de passation</th>
                    <th>Activité</th>
                    <th>Imputation</th>
                    <!-- <th>Ligne Budgetaire</th> -->
                    <th>Objet marché</th>
                    <th>Reference marché</th>
                     <th>Statut</th>
                    <th>Montant prévu</th>
                    <th>Etat du marché</th>
                   <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 
                        <tr class="odd gradeX" v-for="(marche, index) in 
                afficherLaListeDesMarche"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objetUniteAdministrative.libelle || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{ELibelle(marche.type_marche_id) || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center">
                   {{marche.procedure_passation.code || 'Non renseigné'}}</td>
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
                    <td>

                         <span v-if="marche.economique_id == CodeExempte(marche.economique_id) ">Exemptée procedure</span>
                         <span v-else>Ligne à marché</span>
                       </td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}</td>
                  
           <td>
                     <button 
                      v-if="marche.attribue == 2"  class="btn  btn-warning">
                <span title="MARCHE EN EXERCUTER" style="">EX</span>
       
                </button>
                <button 
                      v-else-if="marche.attribue == 1"  class="btn  btn-success">
                <span title=" MARCHE EN COURS DE CONTRATUALISATION">CT</span>
       
                </button>
                 <button 
                      v-else-if="marche.attribue == 3"  class="btn  btn-info">
                <span title="MARCHE RESILIE" >RE</span>
       
                </button>
                 <button v-else-if="marche.attribue == 5" class="btn  btn-inverse">
              
                <span title="MARCHE EN TERMINE">TE</span>
                </button>
                   <button v-else class="btn  btn-danger">
              
                <span title="MARCHE EN PLANIFICATION">PL</span>
                </button>

                   </td>
                   <td>
                     <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
                   </td>
                   
 
<!-- <td>
    <div class="btn-group">

                    
              <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>
</td> -->
                   

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
                        <td>
                          
                      </td>
                      
                      
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
                   
                    <!-- <th>Activit&eacute;</th> -->
                    <th>Imputation</th>
                       <th>Objet march&eacute;</th>
                        <!-- <th>Reference march&eacute;</th>  -->
                                    <th>Montant réel</th>
                                <th>Etat du marché</th>
                                <th colspan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                 <tr class="odd gradeX" v-for="(marche, index) in 
                afficheMarchExecuter"
                 :key="marche.id">

                 <template v-if="afficherCodeTypeMarche(afficherDifferentTypeMarche(marche.marche_id)) == 4">

                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherAnneeBudget(marche.marche_id) || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(afficherIdUniteAdministrative(marche.marche_id)) || 'Non renseigné'}}</td>
                 
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{ELibelle(E(marche.marche_id))|| 'Non renseigné'}}</td>
                  <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficheractivite(afficherIdactivite(marche.marche_id))|| 'Non renseigné'}}</td> -->
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherImputationMarche(marche.marche_id)|| 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherObjetMarche(marche.marche_id) || 'Non renseigné'}}</td>
                     <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherReferenceMarche(marche.marche_id)|| 'Non renseigné'}}</td> -->
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_act)) || 'Non renseigné'}}</td>
                  
                    <td>
                     <button 
                      v-if="afficherAttributMarche(marche.marche_id) == 2"  class="btn  btn-warning">
                <span >EX</span>
       
                </button>
                 
                 </td>
                   <td>
           <button   class="btn btn-info " title="Ajouter marché resilié" @click="afficherModalMarcheResilier(index)">
                <span class=""><i class="icon-pencil"></i></span></button>

   
                    
                <button @click.prevent="modifierModalActeEffetFinancierLocal(index)"  class="btn btn-success">
                <span class=""><i class="icon-folder-open" title="Basculer en contratualisation"></i></span></button> 

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
                
              <!-- <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button> -->
             
            </div>
                 </template>
                 
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
                        <th>Statut</th>
                                    <th>Montant prevue</th>
                                <th>Etat du marché</th>
                                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="(marche, index) in 
                afficheMarcheEnPlanification"
                 :key="marche.id">
                  <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.exo_id || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(marche.unite_administrative_id) || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{ELibelle(marche.type_marche_id) || 'Non renseigné'}}</td>
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
                    <td>

                         <span v-if="marche.economique_id == CodeExempte(marche.economique_id) ">Exemptée procedure</span>
                         <span v-else>Ligne à marché</span>
                       </td>
                   <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}</td>
                  
<td>
                     <button 
                      v-if="marche.attribue == 0"  class="btn  btn-danger">
                <span >PL</span>
       
                </button>
                 
                   </td>

<td>
    <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link>
</td>
                     <!-- <div class="btn-group">


                     <router-link :to="{ name: 'DetailMarchePs', params: { id: marche.id }}"
                class="btn btn-default " title="Detail marche">
                  <span class=""><i class=" icon-folder-open"></i></span>
                   </router-link> 

                

              <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div> -->

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
                     
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Marché
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantEnPlanification))}}
                           
                      </td>
                       <td>
                          
                      </td>
                        <td>
                          
                      </td>
                     
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
                   {{afficherAnneeBudget(marche.marche_id) || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherUniteAdministrative(afficherIdUniteAdministrative(marche.marche_id)) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.numero_marche || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{afficherObjetMarche(marche.marche_id) || 'Non renseigné'}}</td>
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
  
<td>
                     <button 
                      v-if="afficherAttributMarche(marche.marche_id) == 3"  class="btn  btn-info">
                <span >RE</span>
       
                </button>
                   <!-- <button v-else class="btn  btn-danger">
              
                <span >NON</span>
                </button> -->
                   </td>


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

         <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal1" class="modal hide taillModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Marché</h3>
      </div>
    <div class="modal-body">
        <table class="table table-bordered table-striped">
         <tr>
            <td>
                  <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls ">
                            
                             <input
                type="text"
              :value="anneeAmort"
                class="span"
               readonly
              />
                                </div>
                                </div>
              </td>
               <td>
                 <div class="control-group">
            <label class="control-label">Refencence marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.reference_marche"
                class="span"
                placeholder="Saisir la reference du marché"
              />
            </div>
          </div>
              </td>
             <td colspan="2">
               <div class="control-group">
            <label class="control-label">Objet marché</label>
            <div class="controls">
              <textarea
               
                v-model="formData.objet"
                class="span5" rows="2"
                placeholder="Saisir le text"
              ></textarea>
            </div>
          </div>
              </td>
              
         </tr>
            <tr>
             <td>
               <div class="control-group">
            <label class="control-label" title="unite administrative">UA</label>
            <div class="controls">
            <select v-model="formData.unite_administrative_id" class="span">
               <option v-for="plans in groupUa" 
               :key="plans[0].id" 
               :value="plans[0].afficheUA.id">{{plans[0].afficheUA.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Grand Nature</label>
                  <div class="controls">
                    <select v-model="formData.gdenature_id" :readOnly="deverouGrandNature">
                      <option
                        v-for="gdeNature in groupgranNature"
                        :key="gdeNature[0].id"
                        :value="gdeNature[0].afficheGdeNature.id"
                      >{{gdeNature[0].afficheGdeNature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              
               <td>
              
               <div class="control-group">
                  <label class="control-label">Activite</label>
                  <div class="controls">
                    <select v-model="formData.activite_id" :readOnly="deverouactivite">
                     <option
                        v-for="activite in activiteDynamiques(formData.unite_administrative_id)"
                        :key="activite.id"
                        :value="activite.afficheActivite.id"
                      >{{activite.afficheActivite.code}} - {{activite.afficheActivite.libelle}}</option>
                    </select>
                    
                  </div>
                   
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
                    <select v-model="formData.economique_id" :readOnly="deveroueconomiq">
                    <option
                        v-for="eco in economiqueDynamiques(formData.unite_administrative_id)"
                        :key="eco.id"
                        :value="eco.afficheEconomique.id"
                      >{{eco.afficheEconomique.code}} - {{eco.afficheEconomique.libelle}}</option>
                    </select>
                  </div>
                   
                </div>
              </td>
               
             
            </tr>
            <tr>
               <td colspan=2>
                 <div class="control-group">
            <label class="control-label">Imputation Budgetaire</label>
            <div class="controls">
              <input
                type="text"
                :value="ImputationBudget"
                class="span5"
                placeholder="Saisir le Imputation"
                readonly
              />
            </div>
          </div>
              </td>
              
              <!-- <td>
                 <div class="control-group">
            <label class="control-label">Montant Imputations</label>
            <div class="controls">
              <input
                type="text"
                :value="MontatantImputationBudget"
                class="span"
                
               readonly
              />
            </div>
          </div>
              </td> -->
                
           
             <td>
              
               <div class="control-group">
            <label class="control-label">Type marché</label>
            <div class="controls">
            <select v-model="formData.type_marche_id" class="span">
               <option v-for="plans in typeMarches" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
                <td>
                 <div class="control-group">
            <label class="control-label">Montant prévu</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.montant_marche"
                class="span"
                placeholder="Saisir le montant"
               
              />
            </div>
          </div>
              </td>
            </tr>
            <tr>
               
             
            
             <!-- <td>
               <div class="control-group">
            <label class="control-label">Numero marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.numero_marche"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td> -->
               <td colspan="2">
              
               <div class="control-group">
            <label class="control-label">Type de procedure</label>
            <div class="controls">
            <select v-model="formData.typeappel_id" class="span4">
               <option v-for="plans in typeTypeProcedures" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>

   
             <td colspan="">
              
               <div class="control-group">
            <label class="control-label">procedure passation</label>
            <div class="controls">
           
               <select v-model="formData.procedure_passation_id" class="span" :readOnly="deverouPassation">
               <option v-for="plans in procedurePassationDynamiques(formData.typeappel_id)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>

                          <td>
               <div class="control-group">
            <label class="control-label">Livrable</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.livrable"
                class="span"
                placeholder="Saisir le livrable"
              />
            </div>
          </div>
              </td>
            </tr>
          
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterModalTypePrestationLocal"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->


 <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide taillMarche">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier marché</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped">
          <tr>
            <td>
                  <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls ">
                            
                             <input
                type="text"
              :value="anneeAmort"
                class="span4"
               readonly
              />
                                </div>
                                </div>
              </td>
               <td>
                 <div class="control-group">
            <label class="control-label">Refencence marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.reference_marche"
                class="span4"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td>
               <td>
              
               <div class="control-group">
            <label class="control-label">Type marché</label>
            <div class="controls">
            <select v-model="editMarche.type_marche_id" class="span4">
               <option v-for="plans in typeMarches" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
             <td colspan="">
               <div class="control-group">
            <label class="control-label">Objet marché</label>
            <div class="controls">
              <textarea
               
                v-model="editMarche.objet"
                class="span4" rows="1"
                placeholder="Saisir le text"
              ></textarea>
            </div>
          </div>
              </td>
               
         </tr>
            <tr>
             <td>
               <div class="control-group">
            <label class="control-label" title="unite administrative">UA</label>
            <div class="controls">
            <select v-model="editMarche.unite_administrative_id" class="span4">
               <option v-for="plans in groupUa" 
               :key="plans[0].id" 
               :value="plans[0].afficheUA.id">{{plans[0].afficheUA.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Grand Nature</label>
                  <div class="controls">
                    <select v-model="editMarche.gdenature_id" :readOnly="deverouGrandNature" class="span4">
                      <option
                        v-for="gdeNature in grandeNatureDynamiques(editMarche.unite_administrative_id)"
                        :key="gdeNature.id"
                        :value="gdeNature.afficheGdeNature.id"
                      >{{gdeNature.afficheGdeNature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Activite</label>
                  <div class="controls">
                    <!-- <select v-model="editMarche.activite_id" :readOnly="deverouactivite" class="span4">
                     <option
                        v-for="activite in activiteDynamiques(editMarche.unite_administrative_id)"
                        :key="activite.id"
                        :value="activite.afficheActivite.id"
                      >{{activite.afficheActivite.code}} - {{activite.afficheActivite.libelle}}</option>
                    </select> -->
                    
                     <input
                type="text"
                :value="afficheractiviteBienService(editMarche.unite_administrative_id)"
               
                class="span4"
                readonly
              />
                  </div>
                   
                </div>
              </td>
               
               <td>
              
               <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
                     <input
                type="text"
                :value="afficherPlanEconomiqueBienService(editMarche.unite_administrative_id)"
               
                class="span4"
                readonly
              />
                    <!-- <select v-model="editMarche.economique_id" :readOnly="deveroueconomiq" class="span4">
                    <option
                        v-for="eco in economiqueDynamiques(editMarche.unite_administrative_id)"
                        :key="eco.id"
                        :value="eco.afficheEconomique.id"
                      >{{eco.afficheEconomique.code}} - {{eco.afficheEconomique.libelle}}</option>
                    </select> -->
                  </div>
                   
                </div>
              </td>
               
             
            </tr>
            <tr>
               <td>
                 <div class="control-group">
            <label class="control-label">Imputation Budgetaire</label>
            <div class="controls">
              <input
                type="text"
                :value="ImputationBudgetModifier"
                class="span4"
                placeholder="Saisir le Imputation"
                readonly
              />
            </div>
          </div>
              </td>
               <td colspan="">
              
               <div class="control-group">
            <label class="control-label">Type de financement</label>
            <div class="controls">
              <input
                type="text"
                :value="editMarche.type_financement"
                class="span4"
               
                readonly
              />
            <!-- <select v-model="editMarche.typeappel_id" class="span4">
               <option v-for="plans in types_financements" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select> -->
            </div>
          </div>
              </td>
               <td colspan="">
              
               <div class="control-group">
            <label class="control-label">Source de financement</label>
            <div class="controls">
              <input
                type="text"
                :value="editMarche.source_financement"
                class="span4"
                
                readonly
              />
            <!-- <select v-model="editMarche.typeappel_id" class="span4">
               <option v-for="plans in sources_financements" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select> -->
            </div>
          </div>
              </td>
               <td colspan="">
              
               <div class="control-group">
            <label class="control-label">procedure passation</label>
            <div class="controls">
            <input
                type="text"
                :value="afficheLeNomDesProcedureModifier"
                class="span4"
                
                readonly
              />
               <!-- <select v-model="editMarche.procedure_passation_id" class="span" :readOnly="deverouPassationModi">
               <option v-for="plans in procedurePassationDynamiques(editMarche.typeappel_id)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select> -->
            </div>
          </div>
              </td>
              <!-- <td>
                 <div class="control-group">
            <label class="control-label">Montant Imputations</label>
            <div class="controls">
              <input
                type="text"
                :value="MontatantImputationBudget"
                class="span"
                
               readonly
              />
            </div>
          </div>
              </td> -->
                
            <!-- <td colspan="">
              
               <div class="control-group">
            <label class="control-label">Type de procedure</label>
            <div class="controls">
            <select v-model="editMarche.typeappel_id" class="span4">
               <option v-for="plans in typeTypeProcedures" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td> -->
            
               
            </tr>
            <tr>
                <td>
                 <div class="control-group">
            <label class="control-label">Montant prévu</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.montant_marche"
                class="span4"
                
               
              />
            </div>
          </div>
              </td>
             
            
             <!-- <td>
               <div class="control-group">
            <label class="control-label">Numero marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.numero_marche"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td> -->
               <!-- <td colspan="">
              
               <div class="control-group">
            <label class="control-label">Type de procedure</label>
            <div class="controls">
            <select v-model="editMarche.typeappel_id" class="span4">
               <option v-for="plans in typeTypeProcedures" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td> -->

             
            
                <td>
               <div class="control-group">
            <label class="control-label">livrable</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.livrable"
                class="span4"
                placeholder="Saisir le livrable"
              />
            </div>
          </div>
              </td>
              <td>
               <div class="control-group">
            <label class="control-label">Bénéficiaire</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.beneficiaire"
                class="span4"
                placeholder="Saisir le livrable"
              />
            </div>
          </div>
              </td>
            </tr>
          
            
          
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalTypeprestationLocal(editMarche)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->

    <fab :actions="fabActions" @cache="afficherModalAjoutTypaPrestation" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjoutTypaPrestation()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
    </div>
</template>

<script>
 import { mapGetters, mapActions } from "vuex";
 import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
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
                exo_id:"",
        
      },
        editActeEffetFinancier:{
          date_odre_service:"",
          date_fin_exe:""
        },
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
             //marche_id:"",
             numero_marche:""
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
      
//       editActeEffetFinancier:{
// cause_resiliation:"",
// date_resiliation:""
//       },
      indicateur_test:1,
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,

      CodeExempte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterligneExempter.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },
afficheLeNomDesProcedureModifier(){
  if(this.afficherMontantImputation(this.ImputationBudgetModifier) == ""){
return "Aucune procedure"
  }
     else if( this.afficherMontantImputation(this.ImputationBudgetModifier) < 10000000){
        return "Procédure Simplifiée de demande de Cotation(PSC Sans comité)"
    }
    else if(this.afficherMontantImputation(this.ImputationBudgetModifier) < 30000000)
    {
return "Procédure Simplifiée de demande de Cotation(PSC Avec comité)"
    }
    else if(this.afficherMontantImputation(this.ImputationBudgetModifier) < 60000000 )
    {
return "Procédure Simplifiée à compétition Limitée(PSL)"
    }
    else if(this.afficherMontantImputation(this.ImputationBudgetModifier) < 100000000 )
    {
return "Procédure Simplifiée à compétition Ouverte(PSO)"
    }
     else if(100000000 < this.afficherMontantImputation(this.ImputationBudgetModifier))
    {
return "Appel d'Offre Ouvert(AON ou AOI)"
    }
    
  return null  


},


afficherMontantImputation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.codebudget == id);

      if (qtereel) {
        return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },
//  afficheIdTypeMarche() {
//     return this.printMarcheNonAttribue.filter(element => element.type_marche.libelle == "Prestations Intellectuelles")
//     },


nombreDejourCalcule(){
                let vM=this;
    const acteAffet = vM.editActeEffetFinancier
    if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
     if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null

       var dateF = new Date(acteAffet.date_fin_exe).getTime()
        var dateO = new Date(acteAffet.date_odre_service).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.editActeEffetFinancier.duree=diffJour
                  return  diffJour;
   
},

getDateFinExécutionValue(){
    return this.editActeEffetFinancier.date_odre_service !=""
},



//  affichierNomEntreprise() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.raison_sociale;
//       }
//       return 0
//         }
//       };
//     },


    // afficherEntrepriseRecep () {
    //             return id => {
    //                 if (id != "") {
    //                     // console.log("Marche lettre inviation marche")
    //                     return this.gettersOuverturePersonnaliser.filter(idmarche => idmarche.marche_id == id)
    //                  }
    //          }
    //         },

  
//   typePrestationFiltre()  {
     
//         const searchTerm = this.search.toLowerCase();

// return this.printMarcheNonAttribue.filter((item) => {
  
//      return item.objet.toLowerCase().includes(searchTerm) 

//    }
// )
//     },


// afficher la liste des marche

afficherLaListeDesMarche(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 4 || element.type_marche.code_type_marche == 1)
},


// afficher le nombre du marché

nombreDeMarche(){
  return this.afficherLaListeDesMarche.length;
},

// afficher le montant de tout les marche

montantMarche(){
  return this.afficherLaListeDesMarche.reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},



// afficher la liste des marches en planification

// afficherContratPlanifier(){
// return this.affichePlanifier.filter(element => element.type_marche.code_type_marche == 2)
// },








afficherDifferentTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },
afficherCodeTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_type_marche;
      }
      return 0
        }
      };
    },


    afficherAnneeBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exo_id;
      }
      return 0
        }
      };
    },
E() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },
      ELibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficherImputationMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation;
      }
      return 0
        }
      };
    },
 afficherReferenceMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.reference_marche;
      }
      return 0
        }
      };
    },
     afficherAttributMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },
     afficherMontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_marche;
      }
      return 0
        }
      };
    },
//  afficherObjetMarche() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.marches.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.objet;
//       }
//       return 0
//         }
//       };
//     },
    // afficherNumeroMarche() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.marches.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.numero_marche;
    //   }
    //   return 0
    //     }
    //   };
    // },
// afficherEntreprise() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.raison_sociale;
//       }
//       return 0
//         }
//       };
//     },







 afficherIdUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return 0
        }
      };
    },
   
    //  afficherUniteAdministrative() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.libelle;
    //   }
    //   return 0
    //     }
    //   };
    // },
     afficherIdactivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_id;
      }
      return 0
        }
      };
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
            element => element.afficheUA.id == id
          );
        }
      };
    },
          afficheractiviteBienService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParBienService.find(qtreel => qtreel.afficheUA.id == id);

      if (qtereel) {
        return qtereel.afficheActivite.code.concat('  ', qtereel.afficheActivite.libelle);
      }
      return 0
        }
      };
    },

 afficherPlanEconomiqueBienService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParBienService.find(qtreel => qtreel.afficheUA.id == id);

      if (qtereel) {
        return qtereel.afficheEconomique.code.concat('  ', qtereel.afficheEconomique.libelle);
      }
      return 0
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
   afficheMarchExecuter(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => element.marche.attribue == 2 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 4 ||element.marche.attribue == 2 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 1)
},
 affichertypeMarcheEx() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_type_marche;
      }
      return 0
        }
      };
    },
    nbreMarcheExecuter(){
  return this.getActeEffetFinancierPersonnaliser45.filter(recuper => recuper.marche.attribue == 2 && this.affichertypeMarcheEx(recuper.marche.type_marche_id) == 4).length
},
// afficheMarchExecuter(){
// return this.afficheExercution.filter(element => element.indicateur_resilie != 1)
// },

// afficheNombreMarchExecuter(){
//   return this.marches.filter(element => element.afficherCodeTypeMarche(afficherDifferentTypeMarche(marche.marche_id)) == 4).length

// },



afficheMarcheTerminer(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => element.marche.attribue == 5 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 4 || element.marche.attribue == 5 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 4)
},
// afficheMarcheTerminer(){
// return this.afficheMarcheSolde.filter(element => element.indicateur_resilie != 1)
// },
nombreAfficheMarcheSolde(){
return this.afficheMarcheTerminer.length
},
montantEnSolde(){
  return this.afficheMarcheTerminer.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},





// afficheParMarcheEnExecution(){
// return this.afficheExercution.filter(element => element.indicateur_resilie != 1)
// },




  afficheMarcheResilier(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => element.marche.attribue == 3 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 4 || element.marche.attribue == 3 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 1 )
},



// afficheMarcheResilier(){
// return this.afficheResilier.filter(element => element.indicateur_resilie == 1)
// },





afficheNombreMarcheResilier(){
return this.afficheMarcheResilier.length
},

// afficher la liste de marche en contratualisation

afficheMarcheEnCoursContratualisation(){
return this.afficherLaListeDesMarche.filter(element => element.attribue == 1 &&  this.recupererCodeTypeMarche(element.type_marche_id) == 1 || element.attribue == 1 && this.recupererCodeTypeMarche(element.type_marche_id) == 4  )
},




// afficher le nombre de marche en contratualisation
 nombreDeMarcheEnContratualisation(){
   return this.afficheMarcheEnCoursContratualisation.length;

 },

// afficher le montant de marche en contratualisation
montantEnContratualisation(){
  return this.afficheMarcheEnCoursContratualisation.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},



// afficher la liste des marche en planification
afficheMarcheEnPlanification(){
return this.afficherLaListeDesMarche.filter(element => element.attribue == 0 && element.type_marche.code_type_marche == 4 || element.attribue == 0 && element.type_marche.code_type_marche == 1)
},


// afficher le nombre des marches en planifications

nombreMarcheEnplanification(){
  return this.afficheMarcheEnPlanification.length;
},


// afficher le montant en planification

montantEnPlanification(){
  return this.afficheMarcheEnPlanification.reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)
},











//  afficheContrat(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => element.date_odre_service > this.nombreJourTraitementCalucle)
// },

NombreafficheContrat(){
return this.marches.filter(element => element.attribue == 1).length
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


recupererCodeTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_type_marche;
      }
      return 0
        }
      };
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

recupererDateMiseService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.date_odre_service;
      }
      return 0
        }
      };
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
    ...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),
      modifierModalResiliation(){
      var nouvelObjet1 = {
      ...this.editActeEffetFinancier,
      indicateur_resilie :this.indicateur_test,
        date_resiliation:this.editActeEffetFinancier.date_resiliation,
        	cause_resiliation:this.editActeEffetFinancier.cause_resiliation
       };
       
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
         marcheObjet.attribue = 3

    this.modifierMarche(marcheObjet)
     this.modifierActeEffetFinancier(nouvelObjet1)
      this.getMarche()
      this.getActeEffetFinancier()
    //   let marcheObjet=this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
    // marcheObjet.attribue = 3
    //   //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
    //  this.modifierMarche(marcheObjet)

      
      this.$('#exampleModal').modal('hide');
    },
      afficherModalMarcheResilier(index) {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editActeEffetFinancier = this.afficheMarchExecuter[index];
    },
    //afiicher modal ajouter
    afficherModalAjoutTypaPrestation() {
      this.$("#exampleModal1").modal({
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
      exo_id : this.anneeAmort,
      activite_id:this.editMarche.activite_id,
      economique_id:this.editMarche.economique_id
       };
      this.modifierMarche(nouvelObjet)
      this.$('#modificationModal').modal('hide');
    },
    


    // afficher modification de l'acte a effet financier

        afficherModalModifierActeEffetFinancier(index){
    this.$('#modifierActeEF').modal({
        backdrop: 'static',
        keyboard: false
    });
    this.editActeEffetFinancier = this.afficheMarchExecuter[index]
}, 

modifierModalActeEffetFinancierLocal(index){
    
    if ( confirm( "Voulez-vous basculer en Contractualisation ?") ) {
   
     this.editActeEffetFinancier = this.afficheMarchExecuter[index]
    
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
         marcheObjet.attribue = 1

    this.modifierMarcheBascule(marcheObjet)
} else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
    
     
   
},

  modifierModalActeEffetFinancierLocal2(index){
   
    if ( confirm( "Avez-vous terminé les etapes avant de migrer en execution svp ?") ) {
this.editActeEffetFinancier = this.afficheMarcheEnCoursContratualisation[index]
 if(this.recupererDateMiseService(this.editActeEffetFinancier.id) == null || this.recupererDateMiseService(this.editActeEffetFinancier.id) == "" ){
 
      alert("Etapes Non Terminé,Vérifier la date de mise en service svp")
    }
     else if ( confirm( "Voulez-vous basculer en Execution ?") ) {
   
     this.editActeEffetFinancier = this.afficheMarcheEnCoursContratualisation[index]
    
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.id)
         marcheObjet.attribue = 2

    this.modifierMarcheBascule(marcheObjet)
} 
else{
 // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
    }
   
   
   
   
   
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
.taillMarche{
  width: 96%;
   margin: 0 -48%;
   
}
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
</style>
