Ajouter acte de nomination
<template>
    <div>

        <div class="container-fluid">
            <div class="quick-actions_homepage span12" >
                <ul class="quick-actions" style="margin: 0px !important;" v-if="acteurDetail">
                    <li class="bg_lb">
                        <a href="#">
                            <i class="icon-dashboard"></i> <span class="label label-important">{{delais_mise_disposition_act}}</span>  Délai disposition l’acte de nomination(Jours)
                        </a>
                    </li>
                    <li class="bg_lg"  v-if="!salaire_actuel_acteur.date_fin_contrat">
                        <a href="#"> <i class="icon-signal"></i> Acteur en activité
                        </a>
                    </li>
                    <li class="bg_lo" v-if="salaire_actuel_acteur.date_fin_contrat">
                        <a href="#"> <i class="icon-info-sign"></i> <span class="label label-important">Fin de contrat</span> Acteur en fin de contrat
                        </a>
                    </li>
                    <li class="bg_ls" v-if="salaire_actuel_acteur.date_interuption">
                        <a href="#"> <i class="icon-th"></i> <span class="label label-important">{{temp_moyen_fin_activite_interruption}}</span>Temps moyen etre fin activite et interruption
                        </a>
                    </li>
                    <li class="bg_ly" v-if="acteurDetail.jourconge">
                        <a href="#">
                            <i class="icon-inbox"></i><span class="label label-important">{{acteurDetail.jourconge}}</span> Les jours de congés disponibles
                        </a>
                    </li>
                    <!--<li class="bg_lb"> <a href="#"> <i class="icon-th"></i> <span class="label label-important">{{totalActeurNonAccredite}}</span> Total acteur non accredité</a> </li>
                    <li class="bg_ls"> <a href="#"> <i class="icon-fullscreen"></i> <span class="label label-important" v-if="tauxActeurAccredite!='NaN'">{{tauxActeurAccredite || '0' }} %</span>
                        Taux acteurs acredité
                    </a> </li>-->
                </ul>
            </div>


            <div class="widget-box">
                <div class="widget-title bg_lg"><span class="icon"><i class="icon-list"></i></span>
                    <h4 class="span5" v-if="acteurDetail">{{acteurDetail.nom}} {{acteurDetail.prenom}} </h4>
                </div>
                <div class="widget-content">
                    <div class="row-fluid" style="margin: 0px !important;">
                        <div class="span12">
                           <div align="right">
                               <a href="#affeter" data-toggle="modal" class="btn btn-success" v-if="salaire_actuel_acteur.date_interuption"><i class="icon-plus-sign"></i></a>
                               <a href="#interompe" data-toggle="modal" class="btn btn-warning" v-if="salaire_actuel_acteur.date_fin_contrat"><i class="icon-minus-sign"></i></a>
                               <!-- <a href="#fin_contrat" data-toggle="modal" class="btn btn-danger" v-if="!salaire_actuel_acteur.date_fin_contrat">
                                   <i class=" icon-remove"></i></a> -->

                                     <!-- <div align="left">

                                  <a href="#addcandidatP" data-toggle="modal" class="btn btn-warning" >Ajouter contrat resilié</a>
                                     
                                      </div> -->

                                         <table class="">
                                             <tr>
                                                
                                     
                                     <div align="right">
                                    <td> 
                                   <a href="#addcandidatP" data-toggle="modal" class="btn btn-warning" >Ajouter contrat resilié</a>
                                    </td>
                                    <td>
                                  <a href="#fin_contrat" data-toggle="modal" class="btn btn-primary" >Ajouter contrat terminé</a>
                                    </td>

                                    <td>
                                    <a href="#addComptePersonnel" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter  compte</a>
                                      </td>
                                  </div>
                                             </tr>
                                         </table>
                
                                  </div>

                            <div class="widget-box">
                                <div class="widget-title">
                                    <ul class="nav nav-tabs">
                                        <li class=""><a data-toggle="tab" href="#tab1">Information</a></li>
                                        <li class=""><a data-toggle="tab" href="#tab2">L’acte de nomination et du spécimen</a></li>
                                        <li class=""><a data-toggle="tab" href="#tab3">Toutes les rémunérations</a></li>
                                        <li class=""><a data-toggle="tab" href="#tab4">Tous les conges</a></li>
                                         <li class=""><a data-toggle="tab" href="#tab5">Historique de mission par acteur</a></li>
                                    </ul>
                                </div>
                                <div class="widget-content tab-content">
                                    <div id="tab1" class="tab-pane active">
                                        <div class="span5">
                                        <div class="widget-content nopadding">
                                                <table class="table " v-if="acteurDetail">
                                                    <tbody>
                                                    <tr>
                                                        <td><b>Structure actuel</b></td>
                                                        <td>{{acteurDetail.uniteAdmin.libelle}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Salaires actuel</b></td>
                                                        <td><a href="#" class="btn btn-success btn-mini" v-if="salaire_actuel">{{formatageSomme(parseFloat(acteurDetail.salaireActeur.montant))}}  </a>
                                                            </td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Matricule</b></td>
                                                        <td>{{acteurDetail.matricule}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Sexe</b></td>
                                                        <td>{{acteurDetail.sexe}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Numero CNI</b></td>
                                                        <td>{{acteurDetail.numero_cni}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Numero Passeport</b></td>
                                                        <td>{{acteurDetail.numero_passeport}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Nom du père</b></td>
                                                        <td>{{acteurDetail.nom_pere}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Nom mère</b></td>
                                                        <td>{{acteurDetail.nom_mere}}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                        <div class="span5">
                                            <div class="widget-content nopadding">
                                                <table class="table " v-if="acteurDetail">
                                                    <tbody>
                                                    <tr>
                                                        <td><b>Numero act</b></td>
                                                        <td>{{acteurDetail.code_acte_personnel}}</td>
                                                    </tr>

                                                    <tr>
                                                        <td><b>Fonction</b></td>
                                                        <td>{{acteurDetail.fonction.libelle}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Niveau d'etude</b></td>
                                                        <td>{{acteurDetail.niveau_etude.libelle}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Grade</b></td>
                                                        <td>{{acteurDetail.grade.libelle}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Type de salarie</b></td>
                                                        <td v-if="acteurDetail.type_salarie">{{acteurDetail.type_salarie.libelle}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Type de contrat</b></td>
                                                        <td v-if="acteurDetail.type_contrat">{{acteurDetail.type_contrat.libelle}}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                    <div id="tab2" class="tab-pane">

                                        <div class="span12 widget-box">
                                            <div class="span8"></div>
                                            <div class="span4" align="right" v-if="!salaire_actuel_acteur.date_arrivee_act_nomination"><a href="#myModal" data-toggle="modal" class="btn btn-success" >Ajouter acte de nomination</a></div>

                                            <table class="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>Ref act</th>
                                                    <th>Ua</th>
                                                    <th>Date debut</th>
                                                    <th>Date fin</th>
                                                    <th>Date arrive</th>
                                                    <th>Delais disposition(Jours)</th>
                                                    <th>Act</th>
                                                    <th>Signature</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="(item, index) in load_act_personnel_acteur" :key="item.id">
                                                    <td @dblclick="afficherModalActeNomination(index)">{{item.code || 'Non renseigné'}}</td>
                                                    <td @dblclick="afficherModalActeNomination(index)">{{nomUniteAdmine(item.unite_administrative_id) || 'Non renseigné'}}</td>
                                                    <td @dblclick="afficherModalActeNomination(index)">{{formaterDate(item.date_debut_contrat) || 'Non renseigné'}}</td>
                                                    <td @dblclick="afficherModalActeNomination(index)">{{formaterDate(item.date_fin_contrat) || 'Non renseigné'}}</td>
                                                    <td @dblclick="afficherModalActeNomination(index)">{{formaterDate(item.date_arrivee_act_nomination) || 'Non renseigné' }}</td>
                                                    <td @dblclick="afficherModalActeNomination(index)">{{item.delai_diposition}} </td>
                                                    <td>
                                                        <a v-if="item.fichier_act_nomination" :href="item.fichier_act_nomination" class="btn btn-default" target="_blank">
                                                            <span class=""><i class="icon-book"></i></span>
                                                        </a>
                                                        <code v-else>Nom disponible</code>
                                                    </td>
                                                    <td> <a v-if="item.speciment_signature" :href="item.speciment_signature" class="btn btn-default" target="_blank">
                                                        <span class=""><i class="icon-picture"></i></span>
                                                    </a>
                                                        <code v-else>Nom disponible</code></td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>


                                        <div class="">

                                            <div id="myModal" class="modal hide tailgrand" aria-hidden="true" style="display: none;">
                                                <div class="modal-header">
                                                    <button data-dismiss="modal" class="close" type="button">×</button>
                                                    <h3>Ajouter acte de nomination</h3>
                                                </div>
                                                <div class="modal-body">
                                                    <table class="table table-bordered table-striped">
                                                        <tr>
                                                            <td>
                                                                          <div class="control-group">
                                                    <label class="control-label">Fonctions Budgetaire</label>
                                                    <div class="controls">
                                                        <select v-model="formActe.fonction_budgetaire_id">
                                                            <option></option>
                                                            <option v-for="item in fonctionBudgetaire" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                            </td>
                                                            <td>
                                                                 <div class="control-group">
                                                            <label class="control-label">Date Début Nomination :</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" v-model="formActe.date_debut_fonct_budget" placeholder="">
                                                            </div>
                                                        </div>
                                                            </td>
                                                            <td>
                                                                 <div class="control-group">
                                                            <label class="control-label">Date fin Nomination :</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" v-model="formActe.date_fin_fonct_budget" placeholder="">
                                                            </div>
                                                        </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                              <!-- <td>
                     <div class="control-group">
                                                    <label class="control-label">Reference acte:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.code"  placeholder="Saisir la reference" />
                                                    </div>
                                                </div>
                </td> -->
                <!-- <td>
                     <div class="control-group">
                                                    <label class="control-label">Type acte de personnel</label>
                                                    <div class="controls">
                                                        <select v-model="formData.type_acte_id">
                                                            <option></option>
                                                            <option v-for="item in type_acte_personnels" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td> -->
                 <td>
                                                                <div class="control-group">
                                                            <label class="control-label">Acte nomination :</label>
                                                            <div class="controls">
                                                                <input  type="file" @change="OnchangeFichier"  class="span11" placeholder="Last name">
                                                                <code v-if="info_pdf">Le fichier doit etre un pdf</code>
                                                            </div>
                                                        </div>
                                                            </td>
                                                             <td>
                                                                  <div class="control-group">
                                                            <label class="control-label">Date arrivée acte nomination :</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" v-model="formActe.date_arrivee_act_nomination" placeholder="">
                                                            </div>
                                                             <input type="hidden" class="span11" v-model="formData.normeequipement" placeholder="">
                                                             <input type="hidden" class="span11" v-model="formData.historiquenormequipement" placeholder="">
                                                        </div>
                                                            </td>
                                                              <td>
                                                                 <div class="control-group">
                                                            <label class="control-label">Spécimen de signature</label>
                                                            <div class="controls">
                                                                <input type="file" @change="OnchangeImage"  class="span11 form-control" placeholder="Enter specimen">
                                                                <code v-if="info_img">Le fichier doit etre une image (.png,.jpg,jpeg,gif)</code>
                                                            </div>
                                                        </div>
                                                            </td>
                                                        </tr>
                                                       
                                                        </table>
                                                  

                                                </div>
 <div class="modal-footer">
        <a
          @click.prevent="addActNomination"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
                                            </div>




                                             <div id="modification" class="modal hide tailgrand" aria-hidden="true" style="display: none;">
                                                <div class="modal-header">
                                                    <button data-dismiss="modal" class="close" type="button">×</button>
                                                    <h3>Modifier acte de nomination</h3>
                                                </div>
                                                <div class="modal-body">
                                                    <table class="table table-bordered table-striped">
                                                        <tr>
                                                            <td>
                                                                          <div class="control-group">
                                                    <label class="control-label">Fonctions Budgetaire</label>
                                                    <div class="controls">
                                                        <select v-model="editAct.fonction_budgetaire_id">
                                                            <option></option>
                                                            <option v-for="item in fonctionBudgetaire" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                            </td>
                                                            <td>
                                                                 <div class="control-group">
                                                            <label class="control-label">Date Début Nomination :</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" v-model="editAct.date_debut_fonct_budget" placeholder="">
                                                            </div>
                                                        </div>
                                                            </td>
                                                            <td>
                                                                 <div class="control-group">
                                                            <label class="control-label">Date fin Nomination :</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" v-model="editAct.date_fin_fonct_budget" placeholder="">
                                                            </div>
                                                        </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                              <!-- <td>
                     <div class="control-group">
                                                    <label class="control-label">Reference acte:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.code"  placeholder="Saisir la reference" />
                                                    </div>
                                                </div>
                </td> -->
                <!-- <td>
                     <div class="control-group">
                                                    <label class="control-label">Type acte de personnel</label>
                                                    <div class="controls">
                                                        <select v-model="formData.type_acte_id">
                                                            <option></option>
                                                            <option v-for="item in type_acte_personnels" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td> -->
                 <td>
                                                                <div class="control-group">
                                                            <label class="control-label">Acte nomination :</label>
                                                            <div class="controls">
                                                                <input  type="file" @change="OnchangeFichier"  class="span11" placeholder="Last name">
                                                                <code v-if="info_pdf">Le fichier doit etre un pdf</code>
                                                            </div>
                                                        </div>
                                                            </td>
                                                             <td>
                                                                  <div class="control-group">
                                                            <label class="control-label">Date arrivée acte nomination :</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" v-model="editAct.date_arrivee_act_nomination" placeholder="">
                                                            </div>
                                                             <input type="hidden" class="span11" v-model="formData.normeequipement" placeholder="">
                                                             <input type="hidden" class="span11" v-model="formData.historiquenormequipement" placeholder="">
                                                        </div>
                                                            </td>
                                                              <td>
                                                                 <div class="control-group">
                                                            <label class="control-label">Spécimen de signature</label>
                                                            <div class="controls">
                                                                <input type="file" @change="OnchangeImage"  class="span11 form-control" placeholder="Enter specimen">
                                                                <code v-if="info_img">Le fichier doit etre une image (.png,.jpg,jpeg,gif)</code>
                                                            </div>
                                                        </div>
                                                            </td>
                                                        </tr>
                                                       
                                                        </table>
                                                  

                                                </div>
 <div class="modal-footer">
        <a
          @click.prevent="modifierLocal"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div id="tab3" class="tab-pane">
                                        <div class="widget-content nopadding span8">
                                            <table class="table ">
                                                <thead>
                                                <tr>
                                                    <th>Periode</th>
                                                    <th>Unite administrative</th>
                                                    <th>Salaires</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="item in all_salaires_acteurs" :key="item.id">
                                                    <td>
                                                        {{ formaterDate(item.date_debut_contrat)}}  -  {{  formaterDate(item.date_fin_contrat) }}
                                                    </td>
                                                    <td>{{nomUniteAdmine(item.unite_administrative_id)}}</td>
                                                    <td>{{ formatageSomme(parseFloat(item.salaire[0].montant))}} </td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div id="tab4" class="tab-pane">

                                        <div class="widget-box span6" v-if="acteurDetail">
                                            <div class="widget-content nopadding">
                                                <button class="btn btn-success" v-if="acteurDetail.autorisation_conges">Cette personne est autorise a prendre un conge</button>
                                                <button class="btn btn-danger" v-else>Cette personne n'est pas autorise a prendre un conge</button>
                                                <table class="table table-bordered" >
                                                    <thead>
                                                    <tr>
                                                        <th>Type conges</th>
                                                        <th>Code</th>
                                                        <th>Date debut</th>
                                                        <th>Date fin</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="item in acteurDetail.congeActeur" :key="item.id" >
                                                        <td>{{item.type_conge || "Pas de conge" }}</td>
                                                        <td>{{item.code || "Pas de conges"}}</td>
                                                        <td>{{formaterDate(item.date_debut) }}</td>
                                                        <td>{{formaterDate(item.date_fin)  }}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="span6" v-if="acteurDetail">
                                            <div class="widget-box">
                                                <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                                    <h5>Ajouter de conge</h5>
                                                </div>
                                                <div class="widget-content nopadding">
                                                    <form action="#" method="post" @submit.prevent="ajouterConge" enctype="multipart/form-data" class="form-horizontal">
                                                        <div class="control-group">
                                                            <label class="control-label">Code conge :</label>
                                                            <div class="controls">
                                                                <input type="text" v-model="conges.code" class="span11" placeholder="Entre le code congé">
                                                            </div>
                                                        </div>
                                                        <div class="control-group">
                                                            <label class="control-label">Type de congés</label>
                                                            <div class="controls">
                                                                <select v-model="conges.type_conge">
                                                                    <option></option>
                                                                    <option value="congés payés">
                                                                        Congés payés
                                                                    </option>
                                                                    <option value="congé maternité">
                                                                        Congés maternité
                                                                    </option>
                                                                    <option value="Congés paternité">
                                                                        Congés paternité
                                                                    </option>
                                                                    <option value="congé sabbatique">
                                                                        Congés sabbatique
                                                                    </option>
                                                                    <option value="congé pour raisons familiales">
                                                                        Congé pour raisons familiales
                                                                    </option>
                                                                    <option value="congé parental d'éducation">
                                                                        Congé parental d'éducation
                                                                    </option>
                                                                    <option value="congé de reclassement">
                                                                        Congé de reclassement
                                                                    </option>

                                                                    <option value="congé d'adoption">
                                                                        Congé d'adoption
                                                                    </option>
                                                                    <option value="congé de longue maladie">
                                                                        Congé de longue maladie
                                                                    </option>
                                                                    <option value="congé pour engagement associatif">
                                                                        Congé pour engagement associatif
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="control-group">
                                                            <label class="control-label">Date debut</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" placeholder="Enter date" v-model="conges.date_debut">
                                                            </div>
                                                        </div>

                                                        <div class="control-group">
                                                            <label class="control-label">Date fin</label>
                                                            <div class="controls">
                                                                <input type="date" class="span11" placeholder="Enter date" v-model="conges.date_fin">
                                                            </div>
                                                        </div>

                                                        <div class="form-actions" v-if="acteurDetail.jourconge==0">
                                                            <button type="submit" class="btn btn-success" v-if="acteurDetail.autorisation_conges">Enregistre</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>



                                        

                                    </div>



                                   
                           <div id="tab5" class="tab-pane">
                           <div class="container-fluid">
                                      <div class="row-fluid">
                                        <div class="span12">
                                            <!-- <div>

                                        <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des historiques de missions"
                                              name ="Liste des missions"
                                              worksheet = "Missions"
                                            :data="historiques_missions">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                     </div> <br> -->
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des missions par acteur</h5>
             <div align="right">
          </div>
             
          </div>
         
           <div class="widget-content nopadding" >
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                    <th>Objet</th>
                     <th>Destination</th>
                     <th>Date de depart</th>
                     <th>Date de retour</th>
                      <!-- <th>Action</th> -->
                </tr>
              </thead>
              <tbody v-if="acteur_id">
                <tr class="odd gradeX" v-for="(historiqueMission, index) in 
                historiqueMissionParActeur(acteur_id)"
                 :key="historiqueMission.id">

                 

                  <td @dblclick="afficherModalModifierHistoriqueMission(index)">
                      {{historiqueMission.objet || 'Non renseigné'}}</td>

                        <td @dblclick="afficherModalModifierHistoriqueMission(index)">
                      {{historiqueMission.destination || 'Non renseigné'}}</td>

                        <td @dblclick="afficherModalModifierHistoriqueMission(index)">
                      {{formaterDate(historiqueMission.date_depart) || 'Non renseigné'}}</td>

                        <td @dblclick="afficherModalModifierHistoriqueMission(index)">
                      {{formaterDate(historiqueMission.date_retour) || 'Non renseigné'}}</td>
                   
                  <!-- <td>



              <div class="btn-group">
              <button @click.prevent="supprimerHistoriqueMission(historiqueMission.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div> 

                  </td> -->
                </tr>
              </tbody>
            </table>
           
            
          </div>
        </div>
      </div>
              </div>
            </div>
            </div>
                                </div>
                            </div>
                        </div>
 <a @click.prevent="afficherModalListePersonnel" class="btn btn-danger"
                                               href="#">Fermer</a>
                    </div>
                    
                </div>
               
            </div>

        </div>


        <div id="affeter" class="modal  hide" style="width: 70%;  -webkit-transform: translate(-25%, -5%);">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Affectation dans un nouveau Unite administrative</h3>
            </div>
            <div class="modal-body" >
                <form class="form-horizontal" @submit.prevent="affecteActeurDepense" enctype="multipart/form-data">
                    <div class="widget-box">

                        <div class="row-fluid">
                            <div class="span6">
                                <div class="control-group">
                                    <label class="control-label">Type acte de personnel</label>
                                    <div class="controls">
                                        <select v-model="formData.type_acte_id">
                                            <option></option>
                                            <option v-for="item in type_acte_personnels" :key="item.id" :value="item.id">
                                                {{item.libelle}}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">L'unite administrative:</label>
                                    <div class="controls">
                                        <select v-model="formData.unite_administrative_id">
                                            <option></option>
                                            <option v-for="item in uniteAdministratives" :key="item.id" :value="item.id">
                                                {{item.libelle}}
                                            </option>

                                        </select>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">Date debut contrat:</label>
                                    <div class="controls">
                                        <input type="date" v-model="formData.date_debut_contrat" class="span" placeholder="" />
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">Reference acte:</label>
                                    <div class="controls">
                                        <input type="text" v-model="formData.code" class="span" placeholder="Saisir la reference" />
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">Type salarie</label>
                                    <div class="controls">
                                        <select v-model="formData.type_salarie_id">
                                            <option></option>
                                            <option v-for="item in type_salaries" :key="item.id" :value="item.id">
                                                {{item.libelle}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">Type contrat</label>
                                    <div class="controls">
                                        <select v-model="formData.type_contrat_id">
                                            <option></option>
                                            <option v-for="item in type_contrats" :key="item.id" :value="item.id">
                                                {{item.libelle}}
                                            </option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="span6">


                                <div class="control-group">
                                    <label class="control-label">Type niveau etude</label>
                                    <div class="controls">
                                        <select v-model="formData.niveau_etude_id">
                                            <option></option>
                                            <option v-for="item in niveau_etudes" :key="item.id" :value="item.id">
                                                {{item.libelle}}
                                            </option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="span6">
                                <div class="control-group">
                                    <label class="control-label">Exercice budgetaire:</label>
                                    <div class="controls">
                                        <select v-model="formData.exercice_budgetaire_id">
                                            <option v-for="item in exercices_budgetaires" :key="item.id" :value="item.id">
                                                {{item.annee}}
                                            </option>

                                        </select>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">Ligne budgetaires:</label>
                                    <div class="controls">
                                        <select v-model="formData.plan_budgetaire_id">
                                            <option v-for="item in plans_budgetaires" :key="item.id" :value="item.id">
                                                {{item.libelle}}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">Fonctions</label>
                                    <div class="controls">
                                        <select v-model="formData.fonction_id">
                                            <option></option>
                                            <option v-for="item in fonctions" :key="item.id" :value="item.id">
                                                {{item.libelle}}
                                            </option>

                                        </select>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">Grades</label>
                                    <div class="controls">
                                        <select v-model="formData.grade_id">
                                            <option></option>
                                            <option v-for="item in grades" :key="item.id" :value="item.id">
                                                {{item.libelle}}
                                            </option>

                                        </select>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">Salaire:</label>
                                    <div class="controls">
                                        <input type="text" v-model="formData.salaires" class="span" placeholder="Saisi le salaire" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-success">Affecter acteurs</button>
                    </div>
                </form>
            </div>

        </div>
        
        <div id="fin_contrat" class="modal hide">
            <form @submit.prevent="finContrat" enctype="multipart/form-data">
                <div class="modal-header">
                    <button data-dismiss="modal" class="close" type="button">×</button>
                    <h3>Fin de contrat</h3>
                </div>
                <div class="modal-body">
                    <input type="date" class="span5" placeholder="entre la date" v-model="fin_contra.date_fin_contrat">
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-success">Fin contrat</button>
                </div>
            </form>

        </div>






           <div id="addcandidatP" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter contrat Resilié</h3>
            </div>
            <div class="modal-body">
             
         <div class="control-group">
            <label class="control-label">Date fin contrat resilié</label>
        <div class="controls">
         <input type="date" v-model="detail.date_resilie" class="span3"  placeholder="Numero dossier" >
            </div>
          </div>
                 

                 <div class="control-group">
                            <label class="control-label">cause du contrat :</label>
                            <div class="controls">
                            <textarea v-model="detail.cause_contrat"   class="textarea_editor span10" rows="3" placeholder="Saisir la cause du contrat ..."></textarea>
                    
                            </div>
                        </div>
              
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouterDossierC"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



    <div id="addComptePersonnel" class="modal hide tailModal"  >
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter compte bancaire</h3>
                
            </div>
            <div class="modal-body">
               
                    <table class="table table-bordered table-striped">
                      <tr>
                           <td>
                        <div class="control-group">
                          <label>Matricule</label> 

                            <div class="controls">
                                <!-- <select v-model="formData1.acteur_depense_id" class="span4">
                                  <option v-for="plans in personnaliseActeurDepense" 
                                  :key="plans.id"  
                                        :value="plans.id">{{plans.matricule}}</option>
                                  </select> -->
                                          
                                  <input
                                    type="text"
                                    :value="afficherMatriculeDynamique(acteurDetail.id)"
                                    class="span4"
                                   readonly
                            />
                                
                            </div>
                        </div>
                          </td>
                           <td>
                              <div class="control-group">
                                                    <label class="control-label">Pays</label>
                                                    <div class="controls">
                                                        <select v-model="formData1.pays_id" class="span4" >
                                                            <option></option>
                                                            <option v-for="item in pays" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                           <td>
                              <div class="control-group">
                                                    <label class="control-label">Ville:</label>
                                                    <div class="controls">
                                                        <select v-model="formData1.ville_id" class="span4" :readOnly="verroVille">
                                                            <option></option>
                                                            <option v-for="item in VilleDynamiques(formData1.pays_id)" 
                                                            :key="item.id" 
                                                            :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                        
<td>
                              <div class="control-group">
                                                    <label class="control-label">Communes</label>
                                                    <div class="controls">
                                                        <select v-model="formData1.commune_id" class="span4" :readOnly="verroCommune">
                                                            <option></option>
                                                            <option v-for="item in commuDynamiques(formData1.ville_id)" 
                                                            :key="item.id" 
                                                            :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                          </td>
                       
                         
                      </tr>
                      <tr>
                            
                            <td>
                        <div class="control-group">
                             <label>Banque</label>
                            <div class="controls">
                              
                            <select v-model="formData1.banq_id" class="span4" :readOnly="verroBanque">
                                <option v-for="varText in banqueDynamiques(formData1.commune_id)" :key="varText.afficheBanque.id"
                              :value="varText.afficheBanque.id">{{varText.afficheBanque.libelle}}</option>
                            </select>
                                
                            </div>
                        </div>
                          </td>
                            <td>
                        <div class="control-group">
                            <label>Code  agence</label>
                            <div class="controls">
                                <select v-model="formData1.numero_agence" class="span4" :readOnly="verroCodeAgence">
                                                            <option></option>
                                                            <option v-for="item in codeAgenceDynamiques" :key="item.id" :value="item.code_agence">
                                                                {{item.code_agence}}
                                                            </option>
                                </select>
                            </div>
                        </div>
                          </td>
                          
                                <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>Nom  Agence</label>
                                <input type="text" class="span4" placeholder="Saisir l'agence" :value="AffichierNomAgence" readonly>
                            </div>
                        </div>
                          </td>
                          <td>

                        <div class="control-group">
                            <label>Telephone agence</label>
                            <div class="controls">
                                <input type="text"  readonly   class="span4" placeholder="saisir le teleophone agence" :value="AffichierNumeroAgence">
                            </div>
                        </div>
                          </td>
                      </tr>
                     <tr>
                    

                        
                          <td>
                     
                        <div class="control-group">
                            <label>Situation geographique</label>
                            <div class="controls">
                                <input type="text" class="span4"  readonly  placeholder="sitaution geographique" :value="AffichierSituationGeoAgence">
                            </div>
                        </div>
                          </td>
                           <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Nature de compte</label>
                                <!-- <input type="text" class="span" placeholder="saisir la nature de compte" v-model="formData.nature_compte"> -->
                           <select v-model="formData1.nature_compte" class="span4">
                                                            <option></option>
                                                            <option value="0">Compte courant</option>
                                                           
                                                            
                                                        </select>
                            </div>
                        </div>
                          </td>
                             <td>
                       <div class="control-group">
                           
                             <label>Numero compte/cléRib</label>
                            <div class="controls">
                              
                            <!-- <select v-model="formData.entrepse_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                              :value="varText.id">{{varText.raison_sociale}}</option>
                            </select> -->
                                  <div class="controls">
                                <input type="text" class="span3" placeholder="" v-model="formData1.numero_compte"> <input type="text" class="span1" placeholder="" v-model="formData1.clerib">
                            </div>
                            <input type="hidden" v-model="formData1.attribue">
                            </div>
                        </div>
                          </td>
                           <td>
                        <div class="control-group">
                          <label>Date d'ouverture</label>
                            <div class="controls">
                                <input type="date" class="span4" placeholder="" v-model="formData1.date_ouverture_compte">
                            </div>
                        </div>
                          </td>
                      </tr>
                      <tr>
                          
                        
                         

                         
                      </tr>
 
                    <tr>
                          <td>
                     
                        <div class="control-group">
                          <label>Signature</label>
                            <div class="controls">
                                <input type="text" class="span4" placeholder="saisir le signataire compte" v-model="formData1.signataire_compte">
                            </div>
                        </div>
                          </td>
<td>

                        <div class="control-group">
                            <div class="controls">
                                <label>Code SWIFT</label>
                                <input type="text" class="span4"  v-model="formData1.swift">
                            </div>
                        </div>
                          </td>
                          <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>IBAN</label>
                                <input type="text" class="span4"  v-model="formData1.iban">
                            </div>
                        </div>
                          </td>
                           <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>RIB</label>
                                <input type="text" class="span4"  :value="afficherCodeRib" readonly>
                            </div>
                        </div>
                          </td>
                    </tr>
                    </table>
                
            </div>
            
            <div class="modal-footer"> 
              
  <button 
              @click.prevent="ajouterCompteLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button>
 </div>
        </div>













        <div id="interompe" class="modal hide">
            <div class="modal-header">

                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Interruption dans le systeme</h3>
            </div>
            <div class="modal-body">
                <form @submit.prevent="interrumContrat" enctype="multipart/form-data">
                <div class="control-group">
                    <label class="control-label">Entre la date interruption  :</label>
                    <div class="controls">
                        <input type="date" class="span5" placeholder="entre la date" v-model="interruption_systeme.date_interuption">
                    </div>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-warning">Interruption de contrat</button>
                </div>
                </form>
            </div>
        </div>

        <notifications/>
    </div>
</template>

<script>
    import moment from "moment";
    import {formatageSomme} from "../../../vuex/modules/guei/Repositories/Repository"
    import {mapGetters, mapActions} from 'vuex'
    export default {
        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },
                ],
                acteur_id:"",
                fin_contra:{
                    date_fin_contrat:"",
                    id:""
                },
                interruption_systeme:{
                    date_interuption:"",
                    id:""
                },
                selectedFile:"",
                selectedImage:"",
                image: "",
                imagePDF: "",
                namePDF: "",
                fichierPDF: "",

                formActe:{
            fonction_budgetaire_id :"",
             date_arrivee_act_nomination:"",
             date_debut_fonct_budget:"",
             date_fin_fonct_budget:"",
            

                },

                 formData1: {
                   date_ouverture_compte:"",
                    signataire_compte:"",
                    nature_compte:"",
                    	agence:"",
                    	situation_geographique_angence:"",
                    	numero_agence:"",
                    telephone_agence:"",
                    //entrepse_id:"",
                        banq_id:"",
                        pays_id:"",
                        ville_id:"",
                        commune_id:"",
                        acteur_depense_id:"",
                        attribue:1
                },

                editAct:{
             fonction_budgetaire_id :"",
             date_arrivee_act_nomination:"",
             date_debut_fonct_budget:"",
             date_fin_fonct_budget:"",
            
                },
                
                info_img:false,
                info_pdf:false,
                // fonction_budgetaire_id:"",
                // date_debut_fonct_budget:"",
                // date_fin_fonct_budget:"",
                liste:[],

                formData : {
                    date_debut_contrat:"",
                    code:"",
                    type_salarie_id:"",
                    type_contrat_id:"",
                    niveau_etude_id:"",
                    acteur_depense_id:"",
                    exercice_budgetaire_id:"",
                    unite_administrative_id:"",
                    salaires:"",
                    type_acte_id:"",
                    grade_id:"",
                    fonction_id:"",
                    plan_budgetaire_id:'',
                    normeequipement:"",
                    historiquenormequipement:""
                },

                detail:{
             date_resilie:"",
             cause_contrat:""
                },
                conges:{
                    code: "",
                    type_conge: "",
                    date_debut: "",
                    date_fin: "",
                    acte_personnel_id: "",
                },
                editTitre: {
                    code: "",
                    libelle: ""
                },
                temp_moyen_testFI:"",
                acteurDetail:"",
                salaire_actuel:"",


            };
        },

        created() {

            this.acteur_id=this.$route.params.id;
            this.DetailActeur(this.$route.params.id);
            this.acteurDetail=this.personnaliseActeurDepense.find(acteur=>acteur.id===this.acteur_id)
            console.log(this.acteurDetail)
            if(this.acteurDetail===undefined){
                this.acteurDetail=this.personnaliseActeurFinContrat.find(acteur=>acteur.id===this.acteur_id)
            }

            this.salaire_actuel=this.tous_salaire_actuel_acteur.find(act=>act.acte_personnel_id===this.acteurDetail.acte_personnel_id)
            this.getSalaireActuelActeur(this.$route.params.id)
            this.getAllSallairesActeurs(this.$route.params.id)
            this.getLoadActeurDepense(this.$route.params.id)
            this.loadCongeActeur(this.$route.params.id)
            this.tempMoyenFinActiviteInterruption(this.$route.params.id)

            this.delaiMiseDispositionAct(this.$route.params.id)
            this.jourCongeDisponible(this.$route.params.id)

        },
        computed: {



historiqueMissionParActeur(){
   return acte_personnel_id =>{
       if(acte_personnel_id !=""){
           let objet=this.getMissionPersonnaliser.filter(element => element.acte_personnel_id==acte_personnel_id)
          // console.log(objet)
           return objet;
       }
   }

 //console.log(historiqueMissionParActeur);
},

 afficherNumeroMarche() {
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



// afficher les codes du compte


afficherCodeRib(){
      //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
    
    const codeBanq = this.banques.find(codeBanq => codeBanq.id == this.formData1.banq_id)
 const codeAgence = this.agenceBanques.find(codeAgence => codeAgence.code_agence == this.formData1.numero_agence)
     if(codeBanq && codeAgence && this.formData1.numero_compte  && this.formData1.clerib ){
       return codeBanq.code_banque + codeAgence.code_agence + this.formData1.numero_compte + this.formData1.clerib
     }

     return ""
   },



   AffichierSituationGeoAgence() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.formData1.numero_agence);

      if (dureVie1) {
        return dureVie1.situation_geo;
      }
      // console.log(dureVie1)
      return ""
    },



    
  AffichierNumeroAgence() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.formData1.numero_agence);

      if (dureVie1) {
        return dureVie1.tel_agence;
      }
      // console.log(dureVie1)
      return ""
    },




     AffichierNomAgence() {
      
      const dureVie1 = this.agenceBanques.find(dureEquipe => dureEquipe.code_agence == this.formData1.numero_agence);

      if (dureVie1) {
        return dureVie1.nom_agence;
      }
      // console.log(dureVie1)
      return ""
    },










    

codeAgenceDynamiques() {
      let vM=this;
        if (vM.formData1.commune_id != null && vM.formData1.banq_id != "") {
            // console.log(vM.formData.commune_id)     
            // console.log(vM.formData.banq_id)     
                return this.getPersonnaliseAgence.filter(element => {
                if(element.commune_id == vM.formData1.commune_id &&  element.banque_id == vM.formData1.banq_id ){
return element;
                }
                     
          }
            
          );
        }
        return null;
    },


     verroVille() {
      return this.formData1.pays_id == "";
    },
     verroCommune() {
      return this.formData1.ville_id == "";
    },
    verroCodeAgence() {
      return this.formData1.banq_id == "";
    },
     verroBanque() {
      return this.formData1.commune_id == "";
    },

// afficher le matricule dynamique du personnel selectionner

   afficherMatriculeDynamique(){
       return id =>{
           if(id!=null && id!=""){
             const objet = this.personnaliseActeurDepense.find(item =>item.id==id)
             if(objet){
                 return objet.matricule
             }
             return 0  
           }
       }
   },


// enregistrement ID de personnel

enregistreIdPersonnel(){

    return id =>{
        if(id!=null && id!=""){
          const objetId = this.personnaliseActeurDepense.find(itemId => itemId.id==id)
          if(objetId){
              return objetId.id
          } 
          return null  
        }
    }
},




         VilleDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.villes.filter(
            element => element.pays_id == id
          );
        }
      };
    },


         commuDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.communes.filter(
            element => element.ville_id == id
          );
        }
      };
    },


        banqueDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseAgence.filter(
            element => element.afficheCommune.id == id
          );
        }
      };
    },





 ...mapGetters("bienService", [ "getMarchePersonnaliser","appelOffres","villes","communes","pays" ]),

 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),

// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['personnaMission','acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions","grades","fonctionBudgetaire",
                "niveau_etudes","nbr_acteur_actredite_taux","detail_acteurs","salaire_actuel_acteur","all_salaires_acteurs","acte_personnels",
                "load_act_personnel_acteur","conge_acteur_depense","temp_moyen_fin_activite_interruption","delais_mise_disposition_act",
                "jour_conge_disponible_acteur","personnaliseActeurDepense","tous_salaire_actuel_acteur",
                "personnaliseActeurFinContrat", "contrat_resilie"]),
         
         
         
         
         ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
            ...mapGetters('suivi_controle_budgetaire', ['getMissionPersonnaliser']),
            nomUniteAdmine(){
                return uniteAdmin_id=>{

                    if (uniteAdmin_id!==undefined){

                        var ObjetUniteAdmin=this.uniteAdministratives.find(element=>element.id ===uniteAdmin_id);
                        return ObjetUniteAdmin.libelle;
                    }

                }
            }
        },
        watch : {

        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ["DetailActeur","getSalaireActuelActeur","getAllSallairesActeurs","modifierActeurDepense",
                "getLoadActeurDepense","loadCongeActeur","ajouterConges","modifierActeurDepenses","ajouterActeDepense",
                "tempMoyenFinActiviteInterruption","delaiMiseDispositionAct","jourCongeDisponible",
                "allActeurDepense","getActeurFinContratAndActivite",
                "getListeSalaireActuelAll", "modificationActeur",]),
           
           ...mapActions('gestionMarche', ["ajouterSanction", "ajouterCompte", "modifierCompte", "supprimerCompte"]),
           







   // fonction pour vider l'input ajouter
            ajouterCompteLocal(){
               // this.formData.marche_id=this.marcheid
               
               var nouvelObjet = {
      ...this.formData1,
     // entrepse_id :this.detail_marche.id,
      telephone_agence:this.AffichierNumeroAgence,
          situation_geographique_angence:this.AffichierSituationGeoAgence,
          agence:this.AffichierNomAgence,
         agence_id:this.AffichierIdAgence,
         rib:this.afficherCodeRib,
         acteur_depense_id:this.enregistreIdPersonnel(this.acteurDetail.id)
       };
                this.ajouterCompte(nouvelObjet)
                this.formData1 = {
                    date_ouverture_compte:"",
                    signataire_compte:"",
                    nature_compte:"",
                    	agence:"",
                    	situation_geographique_angence:"",
                    	numero_agence:"",
                    telephone_agence:"",
                   // entrepse_id:"",
                        banq_id:"",
                        pays_id:"",
                        ville_id:"",
                        commune_id:"",
                        attribue:""

                }
            },













           afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            finContrat(){
                this.fin_contra.id=this.salaire_actuel_acteur.id;
                this.modifierActeurDepenses(this.fin_contra)
                this.fin_contra={
                    date_fin_contrat:"",
                        id:""
                }

                setTimeout(function () {  this.getAllSallairesActeurs(this.acteur_id) }.bind(this), 3000)
                setTimeout(function () { this.tempMoyenFinActiviteInterruption(this.acteur_id) }.bind(this), 3000)
                setTimeout(function () {  this.getSalaireActuelActeur(this.acteur_id) }.bind(this), 3000)
                setTimeout(function () {  this.getLoadActeurDepense(this.acteur_id) }.bind(this), 3000)

            }
            ,
            interrumContrat(){
                this.interruption_systeme.id=this.salaire_actuel_acteur.id;
                this.modifierActeurDepenses(this.interruption_systeme)
                this.interruption_systeme={
                    date_interuption:"",
                        id:""
                }

                setTimeout(function () {  this.getAllSallairesActeurs(this.acteur_id) }.bind(this), 3000)
                setTimeout(function () { this.tempMoyenFinActiviteInterruption(this.acteur_id) }.bind(this), 3000)
                setTimeout(function () {  this.getSalaireActuelActeur(this.acteur_id) }.bind(this), 3000)
                setTimeout(function () {  this.getLoadActeurDepense(this.acteur_id) }.bind(this), 3000)
            }
            ,
        affecteActeurDepense(){
                this.formData.acteur_depense_id=this.salaire_actuel_acteur.acteur_depense_id;
            this.ajouterActeDepense(this.formData)
            this.formData = {
                date_debut_contrat:"",
                    code:"",
                    type_salarie_id:"",
                    type_contrat_id:"",
                    niveau_etude_id:"",
                    acteur_depense_id:"",
                    exercice_budgetaire_id:"",
                    unite_administrative_id:"",
                    salaires:"",
                    type_acte_id:"",
                    grade_id:"",
                    fonction_id:"",
            }


            setTimeout(function () {  this.getAllSallairesActeurs(this.acteur_id) }.bind(this), 3000)
            setTimeout(function () {   this.tempMoyenFinActiviteInterruption(this.acteur_id) }.bind(this), 3000)
            setTimeout(function () {  this.getSalaireActuelActeur(this.acteur_id) }.bind(this), 3000)
            setTimeout(function () {  this.getLoadActeurDepense(this.acteur_id) }.bind(this), 3000)

            setTimeout(function () {
                this.getListeSalaireActuelAll();
                this.allActeurDepense();
                this.getActeurFinContratAndActivite()
                setTimeout(function () {  this.acteurDetail=this.personnaliseActeurDepense.find(acteur=>acteur.id===this.acteur_id) }.bind(this), 3000)
                setTimeout(function () {  this.salaire_actuel=this.tous_salaire_actuel_acteur.find(act=>act.acte_personnel_id===this.acteurDetail.acte_personnel_id) }.bind(this), 3000)
            }.bind(this), 3000)
            setTimeout(function () {
                this.DetailActeur(this.acteur_id);
                console.log(this.detail_acteurs)
            }.bind(this), 3000)

        },
            // fonction pour vider l'input  salaire_actuel_acteur
            addActNomination () {
                const formData = new FormData();
                formData.append('specimen', this.selectedImage, this.selectedImage.name);
                formData.append('file', this.selectedFile, this.selectedFile.name);
                formData.append('date_arrivee_act_nomination', this.formActe.date_arrivee_act_nomination);
                 formData.append('fonction_budgetaire_id', this.formActe.fonction_budgetaire_id);
                  formData.append('date_debut_fonct_budget', this.formActe.date_debut_fonct_budget);
                   formData.append('date_fin_fonct_budget', this.formActe.date_fin_fonct_budget);
                formData.append('id', this.salaire_actuel_acteur.id);
                // formData.append('normeequipement', this.normeequipement);
                // formData.append('historiquenormequipement', this.historiquenormequipement);
                //  formData.append('historiquenormequipement', this.historiquenormequipement);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.modifierActeurDepense(formData,config)
                setTimeout(function () {  this.delaiMiseDispositionAct(this.acteur_id) }.bind(this), 3000)
                setTimeout(function () {  this.getLoadActeurDepense(this.acteur_id) }.bind(this), 3000)

            },
            ajouterConge () {

                this.conges.acte_personnel_id=this.salaire_actuel_acteur.id;
                console.log(this.conges.acte_personnel_id)
                this.ajouterConges(this.conges)
                this.conges={
                       code :"",
                        type_conge: "",
                        date_debut: "",
                        date_fin: "",
                }

                setTimeout(function () {
                    this.getListeSalaireActuelAll();
                    this.allActeurDepense();
                    this.getActeurFinContratAndActivite()
                    setTimeout(function () {  this.acteurDetail=this.personnaliseActeurDepense.find(acteur=>acteur.id===this.acteur_id) }.bind(this), 3000)
                    setTimeout(function () {  this.salaire_actuel=this.tous_salaire_actuel_acteur.find(act=>act.acte_personnel_id===this.acteurDetail.acte_personnel_id) }.bind(this), 3000)
                    setTimeout(function () {   this.jourCongeDisponible(this.acteur_id) }.bind(this), 3000)

                }.bind(this), 3000)
            },

            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.titres[index];

            },



                // fonction pour enregistrer le contrat resilie

                ajouterDossierC(){
                   this.modificationActeur(this.detail)
                   this.detail ={
                       cause_contrat:"",
                       date_resilie:""
                   } 
                },


   

             modifierLocal () {
                const formData = new FormData();
                formData.append('specimen', this.selectedImage, this.selectedImage.name);
                formData.append('file', this.selectedFile, this.selectedFile.name);
                formData.append('date_arrivee_act_nomination', this.editAct.date_arrivee_act_nomination);
                 formData.append('fonction_budgetaire_id', this.editAct.fonction_budgetaire_id);
                  formData.append('date_debut_fonct_budget', this.editAct.date_debut_fonct_budget);
                   formData.append('date_fin_fonct_budget', this.editAct.date_fin_fonct_budget);
                formData.append('id', this.salaire_actuel_acteur.id);
                // formData.append('normeequipement', this.normeequipement);
                // formData.append('historiquenormequipement', this.historiquenormequipement);
                //  formData.append('historiquenormequipement', this.historiquenormequipement);
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.modifierActeurDepense(formData,config)
                setTimeout(function () {  this.delaiMiseDispositionAct(this.acteur_id) }.bind(this), 3000)
                setTimeout(function () {  this.getLoadActeurDepense(this.acteur_id) }.bind(this), 3000)

            },
            OnchangeImage(e) {
                const files = e.target.files;
                this.selectedImage = event.target.files[0];
                Array.from(files).forEach(file => this.addImage(file));
            },
            addImage(file) {
                if (!file.type.match("image.*")) {
                    this.info_img=true;
                    console.log(`${file.name} le fichier doit etre une image`);
                    return;
                }
                this.info_img=false;
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                Array.from(files).forEach(file => this.addFichierPDF(file));
            },
            addFichierPDF(file) {
                if (!file.type.match("application/pdf")) {
                    this.info_pdf=true;
                    console.log(`${file.name} le fichier doit etre un PDF`);
                    return;
                }
                this.info_pdf=false;
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },


            // afficher le modal modifier acte de nominantion

            afficherModalActeNomination(index){
                this.$("#modification").modal({
                    backdrop:'static',
                    keyboard:false
                });

               this.editAct = this.load_act_personnel_acteur[index]
            },
            /**
             * Juste pour le test
             * @param id
             */

            formatageSomme:formatageSomme,
         formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
        },
    afficherModalListePersonnel(){
                this.$router.push({ name: 'Acteur' })
            },
        }
    };
</script>
<style  scoped>
.tailgrand{
  width: 50%;
  margin: 0 -25%;
}

.grdirModalActeEffet{
    width: 60%;
  margin: 0 -25%;
}

.tailModal
    {

 width: 1600px;
 margin: 0 -780px;
 height: 500px;

    }
</style>
