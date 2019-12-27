
<template>
  <div>

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
                                <option value="1">En attente</option>
                              <option value="0">Valider</option>
                             <!-- <option value="2">Rejetter</option> -->
    
    </select>
                           
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Decision :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editBesoinImmo.date_jour"/>
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


    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter des demandes</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Type Unite administrative:</label>
                <div class="controls">
                  <select v-model="formData.typeuniteadminist_id" >
                   
                    <option
                      v-for="Tua in groupUaNorme"
                      :key="Tua[0].id"
                      :value="Tua[0].typeuniteAdminist.id"
                    >{{Tua[0].typeuniteAdminist.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">Unite administrative:</label>
                <div class="controls">
                  <select v-model="formData.uniteadmin_id" :readOnly="veifUAExist">
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in groupUaNormeEquipe"
                      :key="ua[0].id"
                      :value="ua[0].uniteAdminist.id"
                    >{{ua[0].uniteAdminist.libelle}}</option>
                  </select>
                  
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Fonction:</label>
                <div class="controls">
                  <select v-model="formData.fonction_id" :readOnly="veifEquipeExist">
                     <option
                      v-for="ua1 in groupUaNormeFonction"
                      :key="ua1[0].id"
                      :value="ua1[0].fonctionActeur.id"
                    >{{ua1[0].fonctionActeur.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Type équipement:</label>
                <div class="controls">
                  <select v-model="formData.equipe_id" :readOnly="veiffonctionExist1">
                     <option
                      v-for="ua2 in equipementDynamiques(formData.fonction_id)"
                      :key="ua2.id"
                      :value="ua2.equipemt.id"
                    >{{ua2.equipemt.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Famille:</label>
                <div class="controls">
                  <select :readOnly="veiffamilleExist" v-model="formData.famille_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="famil in fammillesDynamiques(formData.equipe_id)"
                      :key="famil.id"
                      :value="famil.familleArt.id"
                    >{{famil.familleArt.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
           
            <td>
              <div class="control-group">
                <label class="control-label">Article:</label>
                <div class="controls">
                  <select :readOnly="veifArticlesExist" v-model="formData.article_id">
                  
                    <option
                      v-for="articl in articlesDynamiques(formData.famille_id)"
                      :key="articl.id"
                      :value="articl.affichierArticle.id"
                      
                    >{{articl.affichierArticle.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Quantité en stock:</label>
                <div class="controls">
                  <input
                    type="number"
                   :value="QuantiteEnStock(formData.article_id)"
                    readonly
                    class="span"
                    
                    
                  />
                  <input
                    type="hidden"
                   :value="recupererIdNorme"
                    readonly
                    class="span"
                    
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Norme d'article</label>
                <div class="controls">
                  <input
                    type="number"
                   :value="recupererNorme"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>
           
          </tr>
          <tr>
             
             <td>
              <div class="control-group">
                <label class="control-label">Quantité Démande:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.quantite"
                    :max="recupererNorme"
                    class="span"
                    placeholder="Saisir la quantite"
                  />
                </div>
              </div>
            </td>
            
           
  <td>
              <div class="control-group">
                <label class="control-label">Coût Moyen:</label>
                <div class="controls">
                  <input
                    type="number"
                    readonly
                    :value="CoutMoyen(formData.famille_id)"
                    class="span"
                    placeholder="Saisir prix unitaire"
                  />
                </div>
              </div>
            </td>
            
              <td>
              <div class="control-group">
                <label class="control-label">Montant Total:</label>
                <div class="controls">
                  <input
                    type="number"
                    readonly
                    :value="montantTotalarticles"
                    class="span"
                    placeholder="Saisir montant total"
                  />
                  
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date :</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_jour"
                    class="span"
                    placeholder="Saisir le code"
                  />
                </div>
              </div>
            </td>
             <!-- <td>
                       

                           <div class="control-group">
                            <label class="control-label">Quantite actuel en stock:</label>
                            <div class="controls">
                              input
                                type="number"
                                class="span"
                              
                               :value="AfficheQteActuelEnStock"
                               readonly
                              /> 
                            </div>
                          </div>
                        </td> -->
                  
             <input
                    type="hidden"
                   :value="Qtehistorique(formData.article_id)"
                    readonly
                    class="span"
                    
                    
                  />
                  <input
                    type="hidden"
                   :value="AfficheQtesortant"
                    readonly
                    class="span"
                    
                    
                  />
                   <input
                    type="hidden"
                   v-model="formData.qterealise"
                    
                    
                   
                  />
                         <!-- <td>
                       

                           <div class="control-group">
                            <label class="control-label">Quantite actuel:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                              
                               
                               readonly
                              />
                            </div>
                          </div>
                        </td> -->
                        <td>
            
                  <input
                    type="hidden"
                   :value="Historqte"
                    
                    class="span"
                   
                  />
                   <input
                    type="hidden"
                   :value="qteRecu"
                    
                    class="span"
                   
                  />
                   <input
                    type="hidden"
                   v-model="formData.motif_demande"
                    
                    
                   
                  />
                  <input
                    type="hidden"
                   :value="afficheDureVie"

                    class="span"
                   
                  />
                
            </td>
            
          </tr>
          <!-- <tr>
                   <td>
              <div class="control-group">
                <label class="control-label">Service Demandeur:</label>
                <div class="controls">
                  <select  v-model="formData.service_id">
                  
                    <option
                      v-for="servi in services"
                      :key="servi.id"
                      :value="servi.id"
                      
                    >{{servi.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
          </tr> -->
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

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->
<div id="modificationModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Besoin d'équipement</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
        <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Type Unite administrative:</label>
                <div class="controls">
                  <select v-model="editBesoinImmo.typeuniteadminist_id" >
                   
                    <option
                      v-for="Tua in groupUaNorme"
                      :key="Tua[0].id"
                      :value="Tua[0].typeuniteAdminist.id"
                    >{{Tua[0].typeuniteAdminist.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">Unite administrative:</label>
                <div class="controls">
                  <select v-model="editBesoinImmo.uniteadmin_id" :readOnly="veifUAExist">
                    <option value>Sélectionner</option>
                    <option
                      v-for="ua in groupUaNormeEquipe"
                      :key="ua[0].id"
                      :value="ua[0].uniteAdminist.id"
                    >{{ua[0].uniteAdminist.libelle}}</option>
                  </select>
                  
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Fonction:</label>
                <div class="controls">
                  <select v-model="editBesoinImmo.fonction_id" :readOnly="veifEquipeExist">
                     <option
                      v-for="ua1 in groupUaNormeFonction"
                      :key="ua1[0].id"
                      :value="ua1[0].fonctionActeur.id"
                    >{{ua1[0].fonctionActeur.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Type équipement:</label>
                <div class="controls">
                  <select v-model="editBesoinImmo.equipe_id" :readOnly="veiffonctionExist1">
                     <option
                      v-for="ua2 in equipementDynamiques(editBesoinImmo.fonction_id)"
                      :key="ua2.id"
                      :value="ua2.equipemt.id"
                    >{{ua2.equipemt.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Famille:</label>
                <div class="controls">
                  <select :readOnly="veiffamilleExist" v-model="editBesoinImmo.famille_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="famil in fammillesDynamiques(editBesoinImmo.equipe_id)"
                      :key="famil.id"
                      :value="famil.familleArt.id"
                    >{{famil.familleArt.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
           
            <td>
              <div class="control-group">
                <label class="control-label">Article:</label>
                <div class="controls">
                  <select :readOnly="veifArticlesExist" v-model="editBesoinImmo.article_id">
                  
                    <option
                      v-for="articl in articlesDynamiques(editBesoinImmo.famille_id)"
                      :key="articl.id"
                      :value="articl.affichierArticle.id"
                      
                    >{{articl.affichierArticle.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Quantité en stock:</label>
                <div class="controls">
                  <input
                    type="number"
                   :value="QuantiteEnStock(editBesoinImmo.article_id)"
                    readonly
                    class="span"
                    
                    
                  />
                  <input
                    type="hidden"
                   :value="recupererIdNormeModifier"
                    readonly
                    class="span"
                    
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Norme d'article</label>
                <div class="controls">
                  <input
                    type="number"
                   :value="recupererNormeModifier"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>
           
          </tr>
          <tr>
             
             <td>
              <div class="control-group">
                <label class="control-label">Quantité Démande:</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editBesoinImmo.quantite"
                    :max="recupererNormeModifier"
                    class="span"
                    placeholder="Saisir la quantite"
                  />
                </div>
              </div>
            </td>
            
           
  <td>
              <div class="control-group">
                <label class="control-label">Coût Moyen:</label>
                <div class="controls">
                  <input
                    type="number"
                    readonly
                    :value="CoutMoyen(editBesoinImmo.famille_id)"
                    class="span"
                    placeholder="Saisir prix unitaire"
                  />
                </div>
              </div>
            </td>
            
              <td>
              <div class="control-group">
                <label class="control-label">Montant Total:</label>
                <div class="controls">
                  <input
                    type="number"
                    readonly
                    :value="montantTotalarticlesModifier"
                    class="span"
                    placeholder="Saisir montant total"
                  />
                  
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date :</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="editBesoinImmo.date_jour"
                    class="span"
                    placeholder="Saisir le code"
                  />
                </div>
              </div>
            </td>
             <!-- <td>
                       

                           <div class="control-group">
                            <label class="control-label">Quantite actuel en stock:</label>
                            <div class="controls">
                              input
                                type="number"
                                class="span"
                              
                               :value="AfficheQteActuelEnStock"
                               readonly
                              /> 
                            </div>
                          </div>
                        </td> -->
                  
             <input
                    type="hidden"
                   :value="Qtehistorique(editBesoinImmo.article_id)"
                    readonly
                    class="span"
                    
                    
                  />
                  <input
                    type="hidden"
                   :value="AfficheQtesortant"
                    readonly
                    class="span"
                    
                    
                  />
                         <!-- <td>
                       

                           <div class="control-group">
                            <label class="control-label">Quantite actuel:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                              
                               
                               readonly
                              />
                            </div>
                          </div>
                        </td> -->
                        <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="hidden"
                   :value="Historqte"
                    
                    class="span"
                   
                  />
                   <input
                    type="hidden"
                   :value="qteRecu"
                    
                    class="span"
                   
                  />
                   <input
                    type="hidden"
                   v-model="editBesoinImmo.motif_demande"
                    
                    
                   
                  />
                  <input
                    type="hidden"
                   :value="afficheDureVieModifier"
                    
                    class="span"
                   
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
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
                     <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste de demandes d'immobilisation "
            :data="trieUaImmobilisation"
            name="Liste de demandes d'immobilisation"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Bessoins Immobilisations de UA</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding" >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <!-- <th>Type UA</th> -->
                    <th>UA</th>
                    <th>Fonction</th>
                     <!-- <th>Equipement Type</th> -->
                     <th>Famille</th>
                    <th>Article</th>
                    <th title="Quantité">Qté</th>
                    <th title="Prix Unitaire">PU</th>
                    <th>Total</th>
                    
                    
                    <th title="date validation du service">Date val sce</th>
                    <th>Motif service</th>
                      <th title="date validation UA">Date val UA</th>
                    <th>Motif UA</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in besoinEquipement"
                    :key="BesoinImmo.id"
                  >
                   <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.Afficheua.libelle || 'Non renseigné'}}</td> 
                     <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.Affichefonction.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.Affichefamille.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.AfficheArticle.libelle || 'Non renseigné'}}</td>  
                   <!-- <td 
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.typeUniteAdmin.libelle || 'Non renseigné'}}</td> -->
                   
                     <!-- <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.AfficheEquipement.libelle || 'Non renseigné'}}</td> -->
                    <!-- <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.Affichefamille.libelle || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.afficheArticle.libelle || 'Non renseigné'}}</td> -->
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{BesoinImmo.quantite}}</td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.prix_unitaire)) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formatageSomme(parseFloat(BesoinImmo.montant_total)) || 'Non renseigné'}}</td>
                    <!-- <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formaterDate(BesoinImmo.date_jour) || 'Non renseigné'}}</td> -->
                   
                     <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formaterDate(BesoinImmo.date_jour) || 'Non renseigné'}}</td>
                     <td>
                        <button class="btn btn" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     <span v-if="BesoinImmo.motif_demande == 0"   class="btn label label-success" >Valider</span>
                      <span 
                     v-else  class="btn label label-info"> En attente </span>
                      </button>
                    
                    </td>
                    <td
                      @dblclick="afficherModalModifierBesoinImmo(index)"
                    >{{formaterDate(BesoinImmo.date_motif_ua) || 'Non renseigné'}}</td>
                     <td>
                        <button class="btn btn" @click="afficherModalModifierMotifDemande(index)" >
                       
                          
                         
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
                   <td ></td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                     <td style="font-weight:bold;">Total</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(SommeTotalBesoin))}}</td>
                    
                    
                    <td ></td>
                  <td ></td>
                    
                    
                   
                    <td ></td>
                    <td></td>
                    <td></td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucun Besoin </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterBesoinImmobilisation" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterBesoinImmobilisation()">Open</button>
  </div>
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
        qterealise:"0"
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
      "SommeTotalBesoin",
      "getAfficheArticle",
      "getAfficheStockArticle",
      "stockageArticles",
      "groupUaNorme",
      "groupUaNormeFamille",
      "normeEquipements",
      "groupUaNormeEquipe",
      "groupUaNormeFonction",
      "getPersoNormeArticle",
      "services",
      "besoinEquipement"
    ]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
...mapGetters("personnelUA", ["all_acteur_depense","acteur_depenses","personnaFonction"]),



     filtre_besoinImmo() {
      const st = this.search.toLowerCase();
      return this.trieUaImmobilisation.filter(type => {
        return (
          // type.typeUniteAdmin.libelle.toLowerCase().includes(st) ||
          type.uniteAdminist.libelle.toLowerCase().includes(st)||
          type.famille.libelle.toLowerCase().includes(st)
        );
      });
    },
  typeUniteAdministrativeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersoNormeArticle.filter(
            element => element.typeua_id == id
          );
        }
      };
    },
    // test() {
    //  return id => {
    //     if (QuantiteEnStock(formData.article_id) < this.formData.quantite && this.formData.quantite > this.recupererNorme ) {
    //       return this.getPersoNormeArticle.filter(
    //         element => element.typeua_id == id
    //       );
    //     }
    //   };
    // },
    fonctionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoNormeArticle.filter(element => element.ua_id == id);
       
       }
      };
    },
equipementDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoNormeArticle.filter(element => element.fonction_id == id);
       
       }
      };
    },
    fammillesDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoNormeArticle.filter(element => element.equipe_id == id);
        }
      };
    },
NombreArticle(){
  return famille_id => {
    if(famille_id !=""){
    const montant = this.getAfficheArticle.filter(element => element.AfficheFamille.id == famille_id).length;
      if(isNaN(montant)) return null
      return montant

    }
  }
}, 
MontantParEquipe(){
  
    return famille_id => {
    if(famille_id !=""){
    var montant = this.getAfficheArticle.filter(element => element.AfficheFamille.id == famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(0); 
      if(isNaN(montant)) return null
      return montant

     }
  }
  
},  
CoutMoyen() {
 return famille_id => {
    if(famille_id !=""){
      
    const val = parseFloat((this.getAfficheArticle.filter(element => element.AfficheFamille.id == famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2))/this.getAfficheArticle.filter(element => element.AfficheFamille.id == famille_id).length).toFixed(0); 
    if (isNaN(val)) return null;
    return val;
  
 }
  }
    },

acteurDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.fonction_id == id);
        }
      };
    },






 montantTotalarticles() {
   if(this.formData.famille_id !=""){
      const val = parseFloat(this.formData.quantite) * parseFloat(this.CoutMoyen(this.formData.famille_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},


 montantTotalarticlesModifier() {
   if(this.editBesoinImmo.famille_id !=""){
      const val = parseFloat(this.editBesoinImmo.quantite) * parseFloat(this.CoutMoyen(this.editBesoinImmo.famille_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},




   
 
//    fammillesModifierDynamiques() {
//       return id => {
//         if (id != null && id != "") {
//           return this.familles.filter(element => element.equipemt_id == id);
//         }
//       };
//     },
//  articlesModifierDynamiques() {
//       return id => {
//         if (id != null && id != "") {
//           return this.articles.filter(element => element.famille_id == id);
//         }
//       };
//     },

// uniteAdministrativeDynamiques() {
//       return id => {
//         if (id != null && id != "") {
//           return this.getAfficheStockArticle.filter(element => element.typeua_id == id);
//         }
//       };
//     },

 
   
articlesDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoNormeArticle.filter(element => element.famil_id == id);
        }
      };
    },
    
   recupererNorme() {
      
      const norme = this.getPersoNormeArticle.find(normeEquipe => normeEquipe.affichierArticle.id== this.formData.article_id);

      if (norme) {
        return norme.quantite
      }
      return 0
    },
     recupererNormeModifier() {
      
      const norme = this.getPersoNormeArticle.find(normeEquipe => normeEquipe.affichierArticle.id== this.editBesoinImmo.article_id);

      if (norme) {
        return norme.quantite
      }
      return 0
    },
    recupererIdNormeModifier() {
      
      const norme = this.getPersoNormeArticle.find(normeEquipe => normeEquipe.affichierArticle.id== this.editBesoinImmo.article_id);

      if (norme) {
        return norme.id
      }
      return 0
    },
       
    recupererIdNorme() {
      
      const norme = this.getPersoNormeArticle.find(normeEquipe => normeEquipe.affichierArticle.id== this.formData.article_id);

      if (norme) {
        return norme.id
      }
      return 0
    },
      AfficheQtesortant() {
      const val = parseInt(this.Qtehistorique(this.formData.article_id)) -  parseInt(this.formData.quantite);
      return parseInt(val).toFixed(0);
    },
     AfficheQteDemande() {
      const val = parseInt(this.QuantiteEnDemande(this.formData.article_id)) -  parseInt(this.formData.quantite);
      return parseInt(val).toFixed(0);
    },

    Qtehistorique() {
       return id => {
       if (id != null && id != "") {

      const qteEnStock = this.getAfficheStockArticle.find(element => element.articlestock_id == id);
       // console.log(qteEnStock)
        if (qteEnStock) {
      return qteEnStock.histo_qte;
    }
    return "0"
     }
         };

    },


afficheDureVie() {
      
      const norme = this.getPersoNormeArticle.find(normeEquipe => normeEquipe.articl_id== this.formData.article_id);

      if (norme) {
        return norme.dureviearticle
      }
      return 0
    },


afficheDureVieModifier() {
      
      const norme = this.getPersoNormeArticle.find(normeEquipe => normeEquipe.articl_id== this.editBesoinImmo.article_id);

      if (norme) {
        return norme.dureviearticle
      }
      return 0
    },




     QuantiteEnStock() {
       return id => {
       if (id != null && id != "") {

      const qteEnStock = this.getAfficheStockArticle.find(element => element.articlestock_id == id);
       // console.log(qteEnStock)
        if (qteEnStock) {
      return qteEnStock.quantitestock;
    }
    return "0"
     }
         };

    },
      QuantiteEnDemande() {
       return id => {
       if (id != null && id != "") {

      const qteEnStock = this.trieUaImmobilisation.find(element => element.article_id == id);
       // console.log(qteEnStock)
        if (qteEnStock) {
      return qteEnStock.quantite;
    }
    return "0"
     }
         };

    },
//     dureDeVie() {
//        return id => {
//        if (id != null && id != "") {

//       const qteEnStock = this.getAfficheStockArticle.find(element => element.articlestock_id == id);
//        // console.log(qteEnStock)
//         if (qteEnStock) {
//       return qteEnStock.durevie;
//     }
//     return "0"
//      }
//          };
// // console.log(qteEnStock)
// //       if (qteEnStock) {
// //         return qteEnStock.quantitestock;
// //       }
// //       return "0"
//     },
QuantiteEnStockModifier() {
      const qteEnStock = this.getAfficheStockArticle.find(element=> element.quantitestock == this.editBesoinImmo.article_id);

      if (qteEnStock) {
        return qteEnStock.quantitestock;
      }
      return "0"
    },





    veifArticlesExist() {
      return this.formData.famille_id == "";
    },
    
     


  veifUAExist() {
      return this.formData.typeuniteadminist_id == ""  ;
    },
    veifEquipeExist() {
      return this.formData.uniteadmin_id == ""  ;
    },
    veiffamilleExist() {
      return this.formData.equipe_id == ""  ;
    },
veiffonctionExist1() {
      return this.formData.fonction_id == ""  ;
    },








 qteRecu() {
      const val = parseInt(this.formData.quantite);
      return parseInt(val).toFixed(0);
    },


 Historqte() {
      const val = parseInt(this.formData.quantite);
      return parseInt(val).toFixed(0);
    },
Historqtemodifier() {
      const val = parseInt(this.editBesoinImmo.quantite);
      return parseInt(val).toFixed(0);
    },
    fammillesDynamiques1() {
      return id => {
        if (id != null && id != "") {
          return this.familles.filter(element => element.equipemt_id);
        }
      };
    },

    veifEquipementExist() {
      return this.formData.epuipement_id == "" && this.formData.typeuniteadmin_id == "" ;
    },

    montantTotalmodif() {
      const val =
        parseFloat(this.editBesoinImmo.quantite) *
        parseFloat(this.editBesoinImmo.prix_unitaire);
      // parseFloat(this.formData.TVA_id);
      if (isNaN(val)) return null;
      return parseFloat(val).toFixed(2);
    },
    


// afficheQteRestant() {
      

//       if (this.editBesoinImmo.qte_livre <= this.editBesoinImmo.quantite)
//         var val =
//           parseInt(this.editBesoinImmo.quantite) -
//           parseInt(this.editBesoinImmo.qte_livre);
//       if (isNaN(val)) return null;

//       if (editBesoinImmo.qte_livre < 0) return (editBesoinImmo.qte_livre = "");

//       return parseInt(val).toFixed(0);
//     },

afficheQteRestant() {
      const form = this.editBesoinImmo;

      if (form.qte_affecte <= this.AffichierQuantiteteReel)
        var val =
          parseInt(this.editBesoinImmo.quantite) -
          parseInt(this.editBesoinImmo.qte_livre);
      if (isNaN(val)) return null;

      if (form.qte_livre < 0) return (form.qte_livre = "");

      return parseInt(val).toFixed(0);
    },
 

//  idObjetBesoinImmoAModifierEnStock2() {
//    //console.log(qteEnStock2)
//       const qteEnStock2 = this.getAfficheStockArticle.find(
//         qtreel => qtreel.id == this.recupererIdNorme(this.formData.article_id),
//        console.log(qteEnStock2)
//       );

//       if (qteEnStock2) {
//         return qteEnStock2.id;
//       }
//       return 0
//     },
    // AfficheQteActuelEnStock() {
    //   const val = parseInt(this.QuantiteEnStock(this.formData.article_id)) -  parseInt(this.formData.quantite);
    //   return parseInt(val).toFixed(0);
    // },

    // filtre_famille() {
    //   const st = this.search.toLowerCase();
    //   return this.trieUaImmobilisation.filter(type => {
    //     return type.designation.toLowerCase().includes(st);
    //   });
    // }

  //  recupererIdNorme() {
  //      return id => {
  //      if (id != null && id != "") {

  //     const qteEnStock = this.getPersoNormeArticle.find(element => element.typeuniteadminist_id == id);
  //      // console.log(qteEnStock)
  //       if (qteEnStock) {
  //     return qteEnStock.id;
  //   }
  //   return "0"
  //    }
  //        };

  //   },
  },
    
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllBesoinImmo",
      "ajouterBesoinImmo",
      "modifierBesoinImmo",
      "supprimerBesoinImmo",
      "modifierQuantiteEnStock2"
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
       var objetPourModifierQuantiteEnStock2 = {
        id: this.idObjetBesoinImmoAModifierEnStock2,
        // qteactuelstock: this.AfficheQteActuelEnStock,
        date_jour: this.formData.date_jour,
        qte_recu: this.qteRecu,
        
      }
      
      var nouvelObjet = {
        ...this.formData,
        montant_total: this.montantTotalarticles,
        historiqueqte: this.Historqte,
        prix_unitaire:this.CoutMoyen(this.formData.famille_id),
        qtestock:this.AfficheQtesortant,
        //  qteactuelstock:this.AfficheQteActuelEnStock,
         qte_recu:this.qteRecu,
         dure_vie:this.afficheDureVie,
         norme_id :this.recupererIdNorme,
         normearticle : this.recupererNorme
      };
       this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
      this.ajouterBesoinImmo(nouvelObjet);
      // this.$("#exampleModal").modal('hide');
      
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
        normearticle:""
      };
      // this.afficherModalAffectation()
   

    },
    // afficher modal de modification
    afficherModalModifierBesoinImmo(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.trieUaImmobilisation[index];
    },
     // afficher modal de modification
    afficherModalModifierMotifDemande(index) {
      this.$("#exampleModalMotif").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.trieUaImmobilisation[index];
    },
    afficherModalModifierMotifDemandeservice(index) {
      this.$("#exampleModalMotifservice").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBesoinImmo = this.trieUaImmobilisation[index];
    },
    // fonction pour vider l'input modification
    modifierBesoinImmoLocal() {
      var nouvelObjetmodifier = {
        ...this.editBesoinImmo,
        montant_total: this.montantTotalarticlesModifier,
        historiqueqte: this.Historqtemodifier,
         qtestock:this.QuantiteEnStockModifier,
         dure_vie:this.afficheDureVieModifier,
         norme_id :this.recupererIdNormeModifier,
         normearticle : this.recupererNormeModifier
      };
      this.modifierBesoinImmo(nouvelObjetmodifier);
      this.$("#modificationModal").modal('hide');
      this.$("#exampleModalMotif").modal('hide');
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
  width: 1000px;
  margin: 0 -500px;
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
</style>
