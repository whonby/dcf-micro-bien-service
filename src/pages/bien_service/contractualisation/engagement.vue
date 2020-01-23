<template>
    
        <div class="container-fluid">


  <div id="exampleModalMotifMandat" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision CF</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Motif CF </label>
                            <div class="controls">
                              <select v-model="editMandat.motif_c">
                                <option value="0">En attente</option>
                              <option value="1">Valider</option>
                             <option value="2">Différer</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                        
                           <div class="control-group">
                            <label class="control-label">Date Validation Mandat :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editMandat.date_val_mandat"/>
                            </div>
                          </div>
                           
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalMandatLocal(editMandat)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>






























            <div id="exampleModalMotif" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Validation CF</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Motif CF </label>
                            <div class="controls">
                              <select v-model="editEngagement.motif">
                                <option value="0">En attente</option>
                              <option value="1">Valider</option>
                             <option value="2">Différer</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editEngagement.observation"/>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editEngagement.date_motif"/>
                            </div>
                          </div>
                           
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalEngagementLocal(editEngagement)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

 <!--//////////////////////////// FORMULAIRE AJOUTER ENGAGEMENT-->
    <div id="AjouterEngage" class="modal hide taillemodal">
 <div class="row-fluid tailtableau1">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Demande d' Engagement</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped tailtableau">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">Budget General</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">Type Procedure</a>
                      </li>
                      
                       <li>
                        <a data-toggle="tab" href="#tab30">Valeur Calculer</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content tailfenet">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Exercice Budgetaire</label>
                            
                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span"
                               readonly
                              :value="anneeAmort"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Numero engagement</label>

                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span"
                               
                              v-model="formData.numero_engage"
                              
                              />
                               <input
                                type="hidden"
                                class="span"
                               
                            :value="idBudgetaire"
                              
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Unite administrative</label>
                            <div class="controls">
                              <select v-model="formData.ua_id">
                                 <option
                                  v-for="gpeua in uniteAdministrative(detail_marche.id)"
                                  :key="gpeua.id"
                                  :value="gpeua.objetUniteAdministrative.id"
                                >{{gpeua.objetUniteAdministrative.libelle}}</option>
                               
                               
                              </select>
                              
                            </div>
                          </div>
                          
                        </td>
                         
                        <td>
                          <div class="control-group">
                            <label class="control-label">Programme/dotation</label>
                            <div class="controls">
                              <select v-model="formData.programme_id">
                                
                                <option
                                  v-for="fam in programmeDynamiques(formData.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheProgramme.id"
                                >{{fam.afficheProgramme.code}}-{{fam.afficheProgramme.libelle}}</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                       
                       
                       
                      </tr>

                      <tr>
                          <td>
                           <div class="control-group">
                            <label class="control-label">Action</label>
                            <div class="controls">
                              <select v-model="formData.action_id">
                               <option
                                  v-for="fam in actionDynamiques(formData.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheAction.id"
                                >{{fam.afficheAction.code}}-{{fam.afficheAction.libelle}}</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Activite</label>
                            <div class="controls">
                              <select v-model="formData.activite_id">
                                 <option
                                  v-for="fam in activiteDynamiques(formData.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheActivite.id"
                                >{{fam.afficheActivite.code}}-{{fam.afficheActivite.libelle}}</option>
                              </select>
                              
                            </div>
                          </div>
                          </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Section</label>
                            <div class="controls">
                              <select v-model="formData.section_id">
                               <option
                                  v-for="fam in sectionDynamiques(formData.ua_id)"
                                  :key="fam.id"
                                  :value="fam.secti.id"
                                >{{fam.secti.code}}-{{fam.secti.nom_section}}</option>
                                
                              </select>
                            </div>
                          </div>
                          
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Nature depense</label>
                             <div class="controls">
                                  <select v-model="formData.grd_nature_id">
                              <option
                                  v-for="fam in grandNatureDepense(formData.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheGdeNature.id"
                                >{{fam.afficheGdeNature.libelle}}</option>
                                  </select>
                              </div>
                          </div>
                           <input
                                type="hidden"
                                class="span"
                               
                             :value="detail_marche.id"
                              />
                               <input
                                type="hidden"
                                class="span"
                               
                             :value="totalMarche"
                              />
                               <!-- <input
                                type="text"
                                class="span"
                               
                             :value="MontantBudgetaire"
                              /> -->
                        </td>

                       
                        
                       
                      </tr>
                     <tr>
                        
                        
                       
                        
                        <td colspan="2">
                           <div class="control-group">
                            <label class="control-label">Ligne Budgetaire</label>
                            <div class="controls">
                              <select v-model="formData.ligne_budgetaire_id" class="span14">
                                <option
                                  v-for="fam in ligneBudgetaire(detail_marche.id)"
                                  :key="fam.id"
                                  :value="fam.afficheEconomique.id"
                                >{{fam.afficheEconomique.code}}-{{fam.afficheEconomique.libelle}}</option>
                              </select>
                              
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">Code Budgetaire</label>
                            <div class="controls">
                              <input type="text" class="span12" :value="CodeBudgetaire" readonly/>
                            </div>
                          </div>
                        </td>
                       
              
                       
                      </tr>
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane">
                      

                      <tr>
                        
                        
                       
                        
                        <td>
                           <div class="control-group">
                            <label class="control-label">Type Procedure</label>
                            <div class="controls">
                              <select v-model="formData.type_procedure_id">
                                   
                              
                                    <option value="1">Engagement par Bon de Commande</option>
                                    <option value="0">Engagement direct</option>
                              </select>
                               
                               
                             
                              
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Type d'engagement Direct</label>
                            <div class="controls">
                              <select v-model="formData.type_engagement_id">
                                  <option value="0">Marche</option>
                                    <option value="1">Régie d'avances - reservation des crédits</option>
                                       <option value="2">Régularisation d'ordre de paiement (OP)</option>
                                    <option value="3">Régularisation avances de trésorerie (AT)</option>
                                     <option value="4">Autres</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         
                        <td>
                            <div class="control-group">
                              <label class="control-label">Réf. Engagement  juridique</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="formData.ref_juridique"
                                />
                              </div>
                            </div>
                          </td>
                        
                       <td>
                         <div class="control-group">
                            <label class="control-label">Mode de paiement</label>
                            <div class="controls">
                              <select v-model="formData.mod_paiement_engage">
                                
                                <option value="0">Bon de caisse</option>
                                    <option value="1">Chèque Spécial Trésor</option>
                                       <option value="2">Chèque Spécial Enregistrement</option>
                                    <option value="3">Virement</option>
                                     <option value="4">Chèque Spécial Douanes</option>
                                      <option value="4">Paiement direct par bailleur de fonds</option>
                                       <option value="4">Autres</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         
                      </tr>
                        <tr>
                         
                         
                       <td>
                         <div class="control-group">
                            <label class="control-label">Numero cc</label>
                            <div class="controls">
                             <div class="controls">
                              <input type="text" class="span" :value="NumeroFournisseur" readonly/>
                               
                            </div>
                              
                            </div>
                          </div>
                        </td>
                        
                          
                       
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nom entreprise</label>
                            <div class="controls">
                              <input type="text" class="span" :value="nomFournisseur" readonly/>
                               
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Adresse</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir adresse_entreprise"
                                :value="AdresseFournisseur"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.bailler_id" />
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                     
                      <tr>
                        
                       <input
                    type="hidden"
                   :value="montantCumuler"
                    
                    class="span"
                    
                  />
                      <input
                    type="hidden"
                   :value="montantCumulerModifier"
                    
                    class="span"
                    
                  />
                        
                          
                        
                       
                        
                       
                        <!-- <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.Bailleur" />
                            </div>
                          </div>
                        </td> -->
                       
                      </tr>
                      <tr>
                         
                         
                      
                        
                       
                       
                      </tr>
                      <tr>
                            <td colspan=2>
                         <div class="control-group">
                            <label class="control-label">Objet de la dépense</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.objet_depense" />
                            </div>
                          </div>
                        </td>
                         <td>
                            <div class="control-group">
                              <label class="control-label">piece justificative</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="formData.piece_justificative"
                                />
                              </div>
                            </div>
                          </td>
                             
                      </tr>
                    </div>
                    <!--ongle 3 -->
                    <div id="tab30" class="tab-pane">
                       <tr>
                           <td>
                <div class="control-group">
                  <label class="control-label">Montant du marché</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="MontantMarche"
                      class="span"
                      placeholder="Dotation Initiale"
                      readonly
                    />
                  </div>
                  </div>
              </td>
                          <td>
                <div class="control-group">
                  <label class="control-label">Dotation Initiale</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="MontantBudgetaire"
                      class="span"
                      placeholder="Dotation Initiale"
                      
                    />
                  </div>
                  </div>
              </td>
                         
                         <td>
                         <div class="control-group">
                            <label class="control-label">Total général</label>
                            <div class="controls">
                              <input type="number" class="span" :value="sommeMontant" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="formData.montant_tresor" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="formData.montant_don" />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="formData.montant_emprunt" />
                            </div>
                          </div>
                        </td>
                        <tr>
                            <td>
                             <div class="control-group">
                            <label class="control-label">Montant a paye</label>
                            <div class="controls">
                              <input type="number" class="span" :value="montantResteApaye" />
                            </div>
                          </div>
                        </td>
                        
                        </tr>
                             <!-- <td>
                <div class="control-group">
                  <label class="control-label">Montant du marché</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="MontantMarche"
                      class="span"
                      placeholder="Dotation Initiale"
                      
                    />
                  </div>
                  </div>
              </td> -->
                    
                    </div>
                       <!--ongle descriptif-->
                    <!-- <div id="tab3" class="tab-pane"> -->
                      

                      
                     
                      <!-- <tr>
                         
                         
                      
                        
                          
                       
                         
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.montant_tresor" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.montant_don" />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.montant_emprunt" />
                            </div>
                          </div>
                        </td>
                       
                          <td>
                        <div class="control-group">
                            <label class="control-label">Total général</label>
                            <div class="controls">
                              <input type="text" class="span" :value="sommeMontant" readonly />
                            </div>
                          </div>
                        </td>
                      </tr>
                       <tr>
 
                      </tr> -->
                       <!-- <tr>
                         
                         
                      
                        
                          
                         <td>
                         <div class="control-group">
                            <label class="control-label">Numero cc</label>
                            <div class="controls">
                              <select v-model="formData.numero_cc_id">
                                <option value>Sélectionner</option>
                               
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nom entreprise</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.nom_entreprise" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Adresse</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir adresse_entreprise"
                                v-model="formData.adresse_entreprise"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.Bailleur" />
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                     
                      <tr>
                         
                         
                      
                        
                          
                         <td colspan=4>
                         <div class="control-group">
                            <label class="control-label">Objet de la dépense</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.objet_depense" />
                            </div>
                          </div>
                        </td> -->
                       
                        
                       
                        <!-- <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.Bailleur" />
                            </div>
                          </div>
                        </td> -->
                       
                      <!-- </tr> -->
                    <!-- </div> -->
                    <!--ongle 3 -->
                    <!-- </div> -->
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="ajouterEngagementLocal(formData)"
                        >Valider</a>
                        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


<!--////////////////////////////FIN FORMULAIRE AJOUTER ENGAGEMENT-->



<!--//////////////////////////// FORMULAIRE Modifier ENGAGEMENT-->

<div id="ModifierEngage" class="modal hide taillemodal">
 <div class="row-fluid tailtableau1">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Modifier Demande d'Engagement</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped tailtableau">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab21">Budget General</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab22">Type Procedure</a>
                      </li>
                      
                       <li>
                        <a data-toggle="tab" href="#tab23">Valeur Calculer</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content tailfenet">
                     <div id="tab21" class="tab-pane active">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Exercice Budgetaire</label>
                            
                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span"
                               readonly
                              :value="anneeAmort"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Numero engagement</label>

                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span"
                               
                              v-model="editEngagement.numero_engage"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Unite administrative</label>
                            <div class="controls">
                              <select v-model="editEngagement.ua_id">
                                 <option
                                  v-for="gpeua in uniteAdministrative(detail_marche.id)"
                                  :key="gpeua.id"
                                  :value="gpeua.objetUniteAdministrative.id"
                                >{{gpeua.objetUniteAdministrative.libelle}}</option>
                               
                               
                              </select>
                              
                            </div>
                          </div>
                          
                        </td>
                         
                        <td>
                          <div class="control-group">
                            <label class="control-label">Programme/dotation</label>
                            <div class="controls">
                              <select v-model="editEngagement.programme_id">
                                
                                <option
                                  v-for="fam in programmeDynamiques(editEngagement.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheProgramme.id"
                                >{{fam.afficheProgramme.code}}-{{fam.afficheProgramme.libelle}}</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                       
                       
                       
                      </tr>

                      <tr>
                          <td>
                           <div class="control-group">
                            <label class="control-label">Action</label>
                            <div class="controls">
                              <select v-model="editEngagement.action_id">
                               <option
                                  v-for="fam in actionDynamiques(editEngagement.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheAction.id"
                                >{{fam.afficheAction.code}}-{{fam.afficheAction.libelle}}</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Activite</label>
                            <div class="controls">
                              <select v-model="editEngagement.activite_id">
                                 <option
                                  v-for="fam in activiteDynamiques(editEngagement.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheActivite.id"
                                >{{fam.afficheActivite.code}}-{{fam.afficheActivite.libelle}}</option>
                              </select>
                              
                            </div>
                          </div>
                          </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Section</label>
                            <div class="controls">
                              <select v-model="editEngagement.section_id">
                               <option
                                  v-for="fam in sectionDynamiques(editEngagement.ua_id)"
                                  :key="fam.id"
                                  :value="fam.secti.id"
                                >{{fam.secti.code}}-{{fam.secti.nom_section}}</option>
                                
                              </select>
                            </div>
                          </div>
                          
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Nature depense</label>
                             <div class="controls">
                                  <select v-model="editEngagement.grd_nature_id">
                              <option
                                  v-for="fam in grandNatureDepense(editEngagement.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheGdeNature.id"
                                >{{fam.afficheGdeNature.libelle}}</option>
                                  </select>
                              </div>
                          </div>
                           <input
                                type="hidden"
                                class="span"
                               
                             :value="detail_marche.id"
                              />
                               <input
                                type="hidden"
                                class="span"
                               
                             :value="totalMarche"
                              />
                               <!-- <input
                                type="text"
                                class="span"
                               
                             :value="MontantBudgetaire"
                              /> -->
                        </td>

                       
                        
                       
                      </tr>
                     <tr>
                        
                        
                       
                        
                        <td colspan="2">
                           <div class="control-group">
                            <label class="control-label">Ligne Budgetaire</label>
                            <div class="controls">
                              <select v-model="editEngagement.ligne_budgetaire_id" class="span14">
                                <option
                                  v-for="fam in ligneBudgetaire(detail_marche.id)"
                                  :key="fam.id"
                                  :value="fam.afficheEconomique.id"
                                >{{fam.afficheEconomique.code}}-{{fam.afficheEconomique.libelle}}</option>
                              </select>
                              
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">Code Budgetaire</label>
                            <div class="controls">
                              <input type="text" class="span12" :value="CodeBudgetaire" readonly/>
                            </div>
                          </div>
                        </td>
                       
              
                       
                      </tr>
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab22" class="tab-pane">
                      

                      <tr>
                        
                        
                       
                        
                        <td>
                           <div class="control-group">
                            <label class="control-label">Type Procedure</label>
                            <div class="controls">
                              <select v-model="editEngagement.type_procedure_id">
                                   
                              
                                    <option value="1">Engagement par Bon de Commande</option>
                                    <option value="0">Engagement direct</option>
                              </select>
                               
                               
                             
                              
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Type d'engagement Direct</label>
                            <div class="controls">
                              <select v-model="editEngagement.type_engagement_id">
                                  <option value="0">Marche</option>
                                    <option value="1">Régie d'avances - reservation des crédits</option>
                                       <option value="2">Régularisation d'ordre de paiement (OP)</option>
                                    <option value="3">Régularisation avances de trésorerie (AT)</option>
                                     <option value="4">Autres</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         
                        <td>
                            <div class="control-group">
                              <label class="control-label">Réf. Engagement  juridique</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="editEngagement.ref_juridique"
                                />
                              </div>
                            </div>
                          </td>
                        
                       <td>
                         <div class="control-group">
                            <label class="control-label">Mode de paiement</label>
                            <div class="controls">
                              <select v-model="editEngagement.mod_paiement_engage">
                                
                                <option value="0">Bon de caisse</option>
                                    <option value="1">Chèque Spécial Trésor</option>
                                       <option value="2">Chèque Spécial Enregistrement</option>
                                    <option value="3">Virement</option>
                                     <option value="4">Chèque Spécial Douanes</option>
                                      <option value="4">Paiement direct par bailleur de fonds</option>
                                       <option value="4">Autres</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         
                      </tr>
                        <tr>
                         
                         
                       <td>
                         <div class="control-group">
                            <label class="control-label">Numero cc</label>
                            <div class="controls">
                             <div class="controls">
                              <input type="text" class="span" :value="NumeroFournisseur" readonly/>
                               
                            </div>
                              
                            </div>
                          </div>
                        </td>
                        
                          
                       
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nom entreprise</label>
                            <div class="controls">
                              <input type="text" class="span" :value="nomFournisseur" readonly/>
                               
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Adresse</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir adresse_entreprise"
                                :value="AdresseFournisseur"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="editEngagement.bailler_id" />
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                     
                      <tr>
                        
                      
                        
                          
                        
                       
                        
                       
                        <!-- <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.Bailleur" />
                            </div>
                          </div>
                        </td> -->
                       
                      </tr>
                      <tr>
                         
                         
                      
                        
                       
                       
                      </tr>
                      <tr>
                            <td colspan=2>
                         <div class="control-group">
                            <label class="control-label">Objet de la dépense</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="editEngagement.objet_depense" />
                            </div>
                          </div>
                        </td>
                         <td>
                            <div class="control-group">
                              <label class="control-label">piece justificative</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="editEngagement.piece_justificative"
                                />
                              </div>
                            </div>
                          </td>
                             
                      </tr>
                    </div>
                    <!--ongle 3 -->
                    <div id="tab23" class="tab-pane">
                       <tr>
                           <td>
                <div class="control-group">
                  <label class="control-label">Montant du marché</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="MontantMarche"
                      class="span"
                      placeholder="Dotation Initiale"
                      readonly
                    />
                  </div>
                  </div>
              </td>
                          <!-- <td>
                <div class="control-group">
                  <label class="control-label">Dotation Initiale</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="MontantBudgetaire"
                      class="span"
                      placeholder="Dotation Initiale"
                      
                    />
                  </div>
                  </div>
              </td> -->
                         
                         <td>
                         <div class="control-group">
                            <label class="control-label">Total général</label>
                            <div class="controls">
                              <input type="number" class="span" :value="sommeMontantModifier" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="editEngagement.montant_tresor1" />
                               <input type="hidden" class="span" :value="affichetresor" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="editEngagement.montant_don1" />
                              <input type="hidden" class="span" v-model="afficheDon" />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="editEngagement.montant_emprunt1" />
                          <input type="hidden" class="span" v-model="afficheEmprunt" />
                           </div>
                          </div>
                        </td>
                        <tr>
                            <td>
                             <div class="control-group">
                            <label class="control-label">Montant a paye</label>
                            <div class="controls">
                              <input type="number" class="span" :value="montantResteApayeModifier" />
                            </div>
                          </div>
                        </td>
                          <td>
                             <div class="control-group">
                            <label class="control-label">Montant Cumulé</label>
                            <div class="controls">
                              <input type="number" class="span" :value="montantCumulerModifier" />
                            </div>
                          </div>
                        </td>
                         <td>
                             <div class="control-group">
                            <label class="control-label">Montant Disponible</label>
                            <div class="controls">
                              <input type="number" class="span" :value="montantDisponible" />
                                <input type="hidden" class="span" :value="afficheRecupere" />
                            </div>
                          </div>
                        </td>
                        </tr>
                             <!-- <td>
                <div class="control-group">
                  <label class="control-label">Montant du marché</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="MontantMarche"
                      class="span"
                      placeholder="Dotation Initiale"
                      
                    />
                  </div>
                  </div>
              </td> -->
                    
                    </div>
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="modifierModalEngagementLocal(editEngagement)"
                        >Modifier</a>
                        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


<!--//////////////////////////// fin FORMULAIRE modifier ENGAGEMENT-->


<!--//////////////////////////// FORMULAIRE Modifier ENGAGEMENT-->

<div id="nouveauEngagement" class="modal hide taillemodal">
 <div class="row-fluid tailtableau1">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Demande d'Engagement</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped tailtableau">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab211">Budget General</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab222">Type Procedure</a>
                      </li>
                      
                       <li>
                        <a data-toggle="tab" href="#tab233">Valeur Calculer</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content tailfenet">
                     <div id="tab211" class="tab-pane active">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Exercice Budgetaire</label>
                            
                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span"
                               readonly
                              :value="anneeAmort"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Numero engagement</label>

                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span"
                               
                              v-model="editEngagement.numero_engage"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Unite administrative</label>
                            <div class="controls">
                              <select v-model="editEngagement.ua_id">
                                 <option
                                  v-for="gpeua in uniteAdministrative(detail_marche.id)"
                                  :key="gpeua.id"
                                  :value="gpeua.objetUniteAdministrative.id"
                                >{{gpeua.objetUniteAdministrative.libelle}}</option>
                               
                               
                              </select>
                              
                            </div>
                          </div>
                          
                        </td>
                         
                        <td>
                          <div class="control-group">
                            <label class="control-label">Programme/dotation</label>
                            <div class="controls">
                              <select v-model="editEngagement.programme_id">
                                
                                <option
                                  v-for="fam in programmeDynamiques(editEngagement.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheProgramme.id"
                                >{{fam.afficheProgramme.code}}-{{fam.afficheProgramme.libelle}}</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                       
                       
                       
                      </tr>

                      <tr>
                          <td>
                           <div class="control-group">
                            <label class="control-label">Action</label>
                            <div class="controls">
                              <select v-model="editEngagement.action_id">
                               <option
                                  v-for="fam in actionDynamiques(editEngagement.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheAction.id"
                                >{{fam.afficheAction.code}}-{{fam.afficheAction.libelle}}</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Activite</label>
                            <div class="controls">
                              <select v-model="editEngagement.activite_id">
                                 <option
                                  v-for="fam in activiteDynamiques(editEngagement.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheActivite.id"
                                >{{fam.afficheActivite.code}}-{{fam.afficheActivite.libelle}}</option>
                              </select>
                              
                            </div>
                          </div>
                          </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Section</label>
                            <div class="controls">
                              <select v-model="editEngagement.section_id">
                               <option
                                  v-for="fam in sectionDynamiques(editEngagement.ua_id)"
                                  :key="fam.id"
                                  :value="fam.secti.id"
                                >{{fam.secti.code}}-{{fam.secti.nom_section}}</option>
                                
                              </select>
                            </div>
                          </div>
                          
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Nature depense</label>
                             <div class="controls">
                                  <select v-model="editEngagement.grd_nature_id">
                              <option
                                  v-for="fam in grandNatureDepense(editEngagement.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheGdeNature.id"
                                >{{fam.afficheGdeNature.libelle}}</option>
                                  </select>
                              </div>
                          </div>
                           <input
                                type="hidden"
                                class="span"
                               
                             :value="detail_marche.id"
                              />
                               <input
                                type="hidden"
                                class="span"
                               
                             :value="totalMarche"
                              />
                               <!-- <input
                                type="text"
                                class="span"
                               
                             :value="MontantBudgetaire"
                              /> -->
                        </td>

                       
                        
                       
                      </tr>
                     <tr>
                        
                        
                       
                        
                        <td colspan="2">
                           <div class="control-group">
                            <label class="control-label">Ligne Budgetaire</label>
                            <div class="controls">
                              <select v-model="editEngagement.ligne_budgetaire_id" class="span14">
                                <option
                                  v-for="fam in ligneBudgetaire(detail_marche.id)"
                                  :key="fam.id"
                                  :value="fam.afficheEconomique.id"
                                >{{fam.afficheEconomique.code}}-{{fam.afficheEconomique.libelle}}</option>
                              </select>
                              
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">Code Budgetaire</label>
                            <div class="controls">
                              <input type="text" class="span12" :value="CodeBudgetaire" readonly/>
                            </div>
                          </div>
                        </td>
                       
              
                       
                      </tr>
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab222" class="tab-pane">
                      

                      <tr>
                        
                        
                       
                        
                        <td>
                           <div class="control-group">
                            <label class="control-label">Type Procedure</label>
                            <div class="controls">
                              <select v-model="editEngagement.type_procedure_id">
                                   
                              
                                    <option value="1">Engagement par Bon de Commande</option>
                                    <option value="0">Engagement direct</option>
                              </select>
                               
                               
                             
                              
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Type d'engagement Direct</label>
                            <div class="controls">
                              <select v-model="editEngagement.type_engagement_id">
                                  <option value="0">Marche</option>
                                    <option value="1">Régie d'avances - reservation des crédits</option>
                                       <option value="2">Régularisation d'ordre de paiement (OP)</option>
                                    <option value="3">Régularisation avances de trésorerie (AT)</option>
                                     <option value="4">Autres</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         
                        <td>
                            <div class="control-group">
                              <label class="control-label">Réf. Engagement  juridique</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="editEngagement.ref_juridique"
                                />
                              </div>
                            </div>
                          </td>
                        
                       <td>
                         <div class="control-group">
                            <label class="control-label">Mode de paiement</label>
                            <div class="controls">
                              <select v-model="editEngagement.mod_paiement_engage">
                                
                                <option value="0">Bon de caisse</option>
                                    <option value="1">Chèque Spécial Trésor</option>
                                       <option value="2">Chèque Spécial Enregistrement</option>
                                    <option value="3">Virement</option>
                                     <option value="4">Chèque Spécial Douanes</option>
                                      <option value="4">Paiement direct par bailleur de fonds</option>
                                       <option value="4">Autres</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         
                      </tr>
                        <tr>
                         
                         
                       <td>
                         <div class="control-group">
                            <label class="control-label">Numero cc</label>
                            <div class="controls">
                             <div class="controls">
                              <input type="text" class="span" :value="NumeroFournisseur" readonly/>
                               
                            </div>
                              
                            </div>
                          </div>
                        </td>
                        
                          
                       
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nom entreprise</label>
                            <div class="controls">
                              <input type="text" class="span" :value="nomFournisseur" readonly/>
                               
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Adresse</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir adresse_entreprise"
                                :value="AdresseFournisseur"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="editEngagement.bailler_id" />
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                     
                      <tr>
                        
                      
                        
                          
                        
                       
                        
                       
                        <!-- <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.Bailleur" />
                            </div>
                          </div>
                        </td> -->
                       
                      </tr>
                      <tr>
                         
                         
                      
                        
                       
                       
                      </tr>
                      <tr>
                            <td colspan=2>
                         <div class="control-group">
                            <label class="control-label">Objet de la dépense</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="editEngagement.objet_depense" />
                            </div>
                          </div>
                        </td>
                         <td>
                            <div class="control-group">
                              <label class="control-label">piece justificative</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="editEngagement.piece_justificative"
                                />
                              </div>
                            </div>
                          </td>
                             
                      </tr>
                    </div>
                    <!--ongle 3 -->
                    <div id="tab233" class="tab-pane">
                       <tr>
                           <td>
                <div class="control-group">
                  <label class="control-label">Montant du marché</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="MontantMarche"
                      class="span"
                      placeholder="Dotation Initiale"
                      readonly
                    />
                  </div>
                  </div>
              </td>
                          <!-- <td>
                <div class="control-group">
                  <label class="control-label">Dotation Initiale</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="MontantBudgetaire"
                      class="span"
                      placeholder="Dotation Initiale"
                      
                    />
                  </div>
                  </div>
              </td> -->
                         
                         <td>
                         <div class="control-group">
                            <label class="control-label">Total général</label>
                            <div class="controls">
                              <input type="number" class="span" :value="sommeMontantModifier" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="editEngagement.montant_tresor1" />
                               <input type="hidden" class="span" v-model="affichetresor" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="editEngagement.montant_don1" />
                              <input type="hidden" class="span" v-model="afficheDon" />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="editEngagement.montant_emprunt1" />
                          <input type="hidden" class="span" v-model="afficheEmprunt" />
                           </div>
                          </div>
                        </td>
                        <tr>
                            <td>
                             <div class="control-group">
                            <label class="control-label">Montant à paye</label>
                            <div class="controls">
                              <input type="number" class="span" :value="montantResteApayeModifier" />
                            </div>
                          </div>
                        </td>
                          <td>
                             <div class="control-group">
                             <label class="control-label">Cumul Engagement</label> 
                            <div class="controls">
                                <input type="number" class="span" :value="sommeEngagement(detail_marche.id)" />
                              <input type="hidden" class="span" :value="montantCumulerModifier" />
                            </div>
                          </div>
                        </td>
                         <td>
                             <div class="control-group">
                            <!-- <label class="control-label">Montant Disponible</label> -->
                            <div class="controls">
                              <input type="hidden" class="span" :value="montantDisponible" />
                                <input type="hidden" class="span" :value="afficheRecupere" />
                            </div>
                          </div>
                        </td>
                         <!-- <td>
                             <div class="control-group">
                            <label class="control-label">Cumul </label>
                            <div class="controls">
                              <input type="number" class="span" :value="sommeEngagement(detail_marche.id)" />
                               
                            </div>
                          </div>
                        </td> -->
                        </tr>
                             <!-- <td>
                <div class="control-group">
                  <label class="control-label">Montant du marché</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    :value="MontantMarche"
                      class="span"
                      placeholder="Dotation Initiale"
                      
                    />
                  </div>
                  </div>
              </td> -->
                    
                    </div>
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="nouvelLigneEngagementLocal(editEngagement)"
                        >Valider</a>
                        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


<!--//////////////////////////// fin FORMULAIRE modifier ENGAGEMENT-->

















 <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(detail_marche.montant_marche))}}</span> MONTANT MARCHE
          </a>
        </li>
        <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(restePayeMarche))}}</span>DISPONIBLE MARCHE
          </a>
        </li>
        <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(sommeEngagement(detail_marche.id)))}}</span>MONTANTS PAYES
          </a>
        </li>
        <li class="bg_ly">
          <a href="#" v-if="marcheid">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(dotationInite(detail_marche.imputation).Dotation_Initiale))}}</span>DOTATION BUDGETAIRE


          </a>
        </li>
       <li class="bg_ly">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(sommeEgagementLigne(detail_marche.imputation)))}}</span>CUMUL ENGAGEMENT
          </a>
        </li>
      
       <li class="bg_ly">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(dotationInite(detail_marche.imputation).Dotation_Initiale - sommeEgagementLigne(detail_marche.imputation)))}}</span>DISPONIBLE BUDGETAIRE
          </a>
        </li>
      
      </ul>
    </div>



            <h4 v-if="detail_marche">Detail Marche : {{detail_marche.objet}} </h4>
            <hr />

            <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                               
                                <th>Objet marche</th>
                                <th>Reference marche</th>
                                <th>Montant marche</th>
                                <th>Type de marche</th>
                                <th>Unite administrative</th>
                                <th>Activité</th>
                    <th>Imputation</th>
                    <!-- <th>Ligne Budgetaire</th>
                                <th>Exercice Budgetaire</th> -->
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                
                                <td class="taskDesc">{{detail_marche.objet}}</td>
                                <td class="taskStatus">{{detail_marche.reference_marche}}</td>
                                <td class="taskOptions">
                                    {{detail_marche.montant_marche}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.type_marche.libelle}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.objetUniteAdministrative.libelle}}
                                </td>
                                <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{detail_marche.afficheActivite.libelle || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{detail_marche.imputation || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{detail_marche.afficheEconomique.code || 'Non renseigné'}}- {{detail_marche.afficheEconomique.libelle || 'Non renseigné'}}</td>
                     
                                <td class="taskOptions">
                                    Ok
                                </td> -->
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab10">Engagement</a></li>
                                <li><a data-toggle="tab" href="#tab20">Mandat</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab2">Liste des lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Contratualisation</a></li> -->
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                            <div id="tab10" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                   
                                      <button class="btn btn-success" @click="afficherModalAjouter" >Demande Engagement</button>
<!-- <router-link :to="{ name: 'AjouterEngagement',params: { id: detail_marche.id }}"
                class="btn btn-success ">
                  <span class="">Demande Engagement</span>
                   </router-link>  -->
                    </div>
                                <table class="table table-bordered table-striped" v-if="marcheid">
                                    <thead>
                                    <tr>

                                        <th>Année budgetaire</th>
                                <th title="numero de la demande">Num demande</th>
                                <th title="programme/dotation">Prog/Dotat</th>
                                <!-- <th>Action Programmatique</th> -->
                                <!-- <th>Activite</th> -->
                                <th title="unite administrative">Ua</th>
                                 <th>Imputation</th>
                                  <th>Ligne Budgetaire</th>
                                  <th>Montant</th>
                                  <th>Motif CF</th>
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                    class="odd gradeX"
                    v-for="(Engage, index) in getEngagementPersonnaliser"
                    :key="Engage.id"
                  >
                   
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.exercice_budget || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.numero_engage || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.afficheProgramme.code || 'Non renseigné'}}-{{Engage.afficheProgramme.libelle || 'Non renseigné'}}</td>
                    <!-- <td>{{Engage.afficheAction.code || 'Non renseigné'}}-{{Engage.afficheAction.libelle || 'Non renseigné'}}</td> -->
                     <!-- <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.afficheActivite.code || 'Non renseigné'}}-{{Engage.afficheActivite.libelle || 'Non renseigné'}}</td> -->
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.afficheUa.libelle || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.budget_general_id || 'Non renseigné'}}</td>
                     
                    <td @dblclick="afficherModalModifierEngagement(index)">{{ Engage.afficheLigneBudget.code || 'Non renseigné'}}-{{ Engage.afficheLigneBudget.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierEngagement(index)">{{formatageSomme(parseFloat(Engage.total_general)) || 0}}</td>
                  <td>
                        <button class="btn btn" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      <span v-if="Engage.motif == 1"   class="btn label label-success" >Valider</span>
                       <span v-else-if="Engage.motif == 2"   class="btn label label-danger" >Différer</span>
                      <span v-else  class="btn label label-info"> En attente </span>
                    
                      </button>
                    
                    </td>
                       <td>
                          <button class="btn inverse" @click="afficherModalNouveauEngagement(index)">
                        <span>
                          <i class=" icon-plus"></i>
                        </span>
                      </button>
                     
                      <button class="btn btn-danger" @click="supprimerEngagement(Engage.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
               
                                    </tbody>
                                </table>
                           



                        </div>
                         <div id="tab20" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                   
                                      <button class="btn btn-success" @click="afficherModalAjouterMandat" >Ajouter Mandat</button>

                    </div>
                                <table class="table table-bordered table-striped">
                                    <thead>
                                    <tr>

                                        <th>Numero bordereau</th>
                                        <th title="unite administrative">Ua</th>
                                <th >Section</th>
                              
                              
                                <th>Numero d'engagement</th>
                                <th>Numero du mandat</th>
                                <th>Montant Mandat</th>
                                <th >Date reception CF</th>
                                <th>Motif</th>
                                <th>Date validation mandat</th>

                                
                                
                                
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                   
                 <tr
                    class="odd gradeX"
                    v-for="(Manda, index) in mandats"
                    :key="Manda.id"
                  >
                   
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Manda.num_bordereau || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Manda.ua_id || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Manda.section_id || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Manda.num_engagement || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierEngagement(index)">{{Manda.num_mandat || 'Non renseigné'}}</td>
                   
                    <td @dblclick="afficherModalModifierEngagement(index)">{{formatageSomme(parseFloat(Manda.montant_mandat))|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierEngagement(index)">{{formaterDate(Manda.date_reception_cf) || 'Non renseigné'}}</td>
                                 <td>
                        <button class="btn btn" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      <span v-if="Manda.motif_c == 1"   class="btn label label-success" >Valider</span>
                       <span v-else-if="Manda.motif_c == 2"   class="btn label label-danger" >Différer</span>
                      <span v-else  class="btn label label-info"> En attente </span>
                    
                      </button>
                    
                    </td>
                    
                    <td @dblclick="afficherModalModifierEngagement(index)">{{formaterDate(Manda.date_val_mandat) || 'Non renseigné'}}</td>
                       <td>
                        
                     
                      <button class="btn btn-danger" @click="supprimerMandat(Manda.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                                    </tbody>
                                </table>
                           
                            


                        </div>

                    </div>

  



















                </div>
            </div>
        </div>



        <!-- Fin ajouter appel offres --->

        <!-- <fab :actions="fabActions" @cache="afficherModalAjouterImmobilisation" main-icon="apps" bg-color="green"></fab>
        <notifications  /> -->
        <!-- <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterImmobilisation()">Open</button> -->

        <!-- Modification appel offres --->

       

        <!-- Modification fin appel offres --->

       

     


     
      

       
        

        

        


        

        

      
       


      
        <!--Fin contratualisation-->



 <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModalMandat" class="modal hide taillModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Mandat</h3>
      </div>
    <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
            <td>
                 <div class="control-group">
            <label class="control-label">Num bordereau</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.num_bordereau"
                class="span"
                placeholder="Saisir le Imputation"
                
              />
            </div>
          </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Num engagement</label>
                  <div class="controls">
                    <select v-model="formData.num_engagement" >
                      <option
                                  v-for="fam in getEngagementPersonnaliser1"
                                  :key="fam.id"
                                  :value="fam.id"
                                >{{fam.numero_engage}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Unite administrative</label>
                  <div class="controls">
                     <input
                type="text"
                :value="AfficherUnite"
                class="span"
                
                readonly
              />
                      <input
                type="hidden"
                :value="numeroEngage"
                class="span"
                
                readonly
              />
                  </div>
                   
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Section</label>
                  <div class="controls">
                     <input
                type="text"
              :value="AfficherSection"
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
            <label class="control-label">Num du mandat</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.num_mandat"
                class="span"
                placeholder="Saisir le Imputation"
                
              />
            </div>
          </div>
              </td>
              
         
                 <td>
                 <div class="control-group">
            <label class="control-label">Montant du mandat</label>
            <div class="controls">
              <input
                type="text"
              :value="MontantMandat"
                class="span"
               readonly
            
              />
               <input
                type="hidden"
              :value="idBudget"
                class="span"
               readonly
            
              />
            </div>
          </div>
              </td>
           
               <!-- <td>
                 <div class="control-group">
            <label class="control-label">Date validation mandat</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_val_mandat"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td> -->
               <td>
                 <div class="control-group">
            <label class="control-label">Date reception CF</label>
            <div class="controls">
              <input
                type="date"
               :value="dateReception"
                class="span"
              
               
              />
            </div>
          </div>
              </td>
            </tr>
            <!-- <tr>
               
              
              <td>
               <div class="control-group">
            <label class="control-label">Date visa CF</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.objet"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td>
           
            </tr> -->
          
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterMandatLocal"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="ModifierModalMandat" class="modal hide taillModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Mandat</h3>
      </div>
    <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
            <td>
                 <div class="control-group">
            <label class="control-label">Num bordereau</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMandat.num_bordereau"
                class="span"
                placeholder="Saisir le Imputation"
                
              />
            </div>
          </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Num engagement</label>
                  <div class="controls">
                    <select v-model="editMandat.num_engagement" >
                      <option
                                  v-for="fam in getEngagementPersonnaliser1"
                                  :key="fam.id"
                                  :value="fam.id"
                                >{{fam.numero_engage}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Unite administrative</label>
                  <div class="controls">
                     <input
                type="text"
                :value="AfficherUniteModifier"
                class="span"
                
                readonly
              />
                      <input
                type="text"
                :value="numeroEngage"
                class="span"
                
                readonly
              />
                  </div>
                   
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Section</label>
                  <div class="controls">
                     <input
                type="text"
              :value="AfficherSectionModifier"
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
            <label class="control-label">Num du mandat</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMandat.num_mandat"
                class="span"
                placeholder="Saisir le Imputation"
                
              />
            </div>
          </div>
              </td>
              
         
                 <td>
                 <div class="control-group">
            <label class="control-label">Montant du mandat</label>
            <div class="controls">
              <input
                type="text"
              :value="MontantMandatModifier"
                class="span"
               readonly
            
              />
               <input
                type="text"
              :value="idBudget"
                class="span"
               readonly
            
              />
            </div>
          </div>
              </td>
           
               <!-- <td>
                 <div class="control-group">
            <label class="control-label">Date validation mandat</label>
            <div class="controls">
              <input
                type="date"
                v-model="editMandat.date_val_mandat"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td> -->
               <td>
                 <div class="control-group">
            <label class="control-label">Date reception CF</label>
            <div class="controls">
              <input
                type="date"
               :value="dateReceptionModifier"
                class="span"
              
               
              />
            </div>
          </div>
              </td>
            </tr>
            <!-- <tr>
               
              
              <td>
               <div class="control-group">
            <label class="control-label">Date visa CF</label>
            <div class="controls">
              <input
                type="date"
                v-model="editMandat.objet"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td>
           
            </tr> -->
          
        </table>
      </div>
      <div class="modal-footer">
        <a
         @click.prevent="modifierModalMandatLocal(editMandat)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->


















        </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import moment from "moment";
    import { formatageSomme } from "../../../../src/Repositories/Repository";
    //import {getterDossierCandidats} from "../../../vuex/modules/fabrice/bienService/Getters";


    export default {
        name: 'compte',
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                 formData: {
       total_general:"0",
       montant_tresor:"0",
montant_don:"0",
montant_emprunt:"0",

      },
       editEngagement: {
       

      },
             editMandat:{}  
            };
        },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getMarchePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {
            ...mapGetters("bienService", [ 'acteDepense',"getMarchePersonnaliser","appelOffres",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),

           ...mapGetters("SuiviImmobilisation", [
      "familles",
      "services",
      "listeBesoinValider",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo",
      "listeBesoinValider",
      "getAfficheStockArticle",
      "getPersoNormeArticle",
      "getPersoStock",
      "stockageArticle"
      
    ]),

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
    ...mapGetters("gestionMarche", ["entreprises"]),
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),

  //   budgetLigne(){
  // return codebudget =>{
  //   if(codebudget !=""){
  //     var ObjetUA = this.getPersonnaliseBudgetGeneralParBienService.find(element => element.codebudget == this.imputation)
  //     return ObjetUA.Dotation_Initiale
  //   }
  // }
  //   },







dateReceptionModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.date_motif;
      }
      return ""
    },
 numeroEngageModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.numero_engage;
      }
      return ""
    },
 AfficherUniteModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.afficheUa.libelle;
      }
      return ""
    },
AfficherSectionModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.afficheSection.code_section + norme.afficheSection.nom_section;
      }
      return ""
    },
MontantMandatModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.total_general ;
      }
      return ""
    },
idBudgetModifier() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.editMandat.num_engagement);

      if (norme) {
        return norme.ligne_id ;
      }
      return ""
    },




















dateReception() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.date_motif;
      }
      return ""
    },
 numeroEngage() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.numero_engage;
      }
      return ""
    },
 AfficherUnite() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.afficheUa.libelle;
      }
      return ""
    },
AfficherSection() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.afficheSection.code_section + norme.afficheSection.nom_section;
      }
      return ""
    },
MontantMandat() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.total_general ;
      }
      return ""
    },


idBudget() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.ligne_id ;
      }
      return ""
    },






    afficheRecupere() {
      const val = parseInt(this.sommeMontantModifier);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    affichetresor() {
      const val = parseInt(this.editEngagement.montant_tresor1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
  afficheDon() {
      const val = parseInt(this.editEngagement.montant_don1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    afficheEmprunt() {
      const val = parseInt(this.editEngagement.montant_emprunt1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantDisponible() { 
      const val = parseFloat(this.montantCumulerModifier) + parseFloat(this.afficheRecupere);
      return parseFloat(val).toFixed(0);
    },
      montantCumuler() {
      const val = parseInt(this.sommeMontant);
      return parseInt(val).toFixed(0);
    },
     montantCumulerModifier() {
      const val = parseInt(this.editEngagement.montant_cumul);
      return parseInt(val).toFixed(0);
    },

montantResteApaye() { 
      const val = parseFloat(this.MontantMarche) - parseFloat(this.sommeMontant);
      return parseFloat(val).toFixed(2);
    },
montantResteApayeModifier() { 
      const val = parseFloat(this.MontantMarche) - parseFloat(this.montantDisponible);
      return parseFloat(val).toFixed(2);
    },
sommeMontant() { 
      const val = parseFloat(this.formData.montant_tresor) + parseFloat(this.formData.montant_don) + parseFloat(this.formData.montant_emprunt);
      return parseFloat(val).toFixed(2);
    },
sommeMontantModifier() { 
      const val = parseFloat(this.affichetresor) + parseFloat(this.afficheDon) + parseFloat(this.afficheEmprunt);
      return parseFloat(val).toFixed(2);
    },

  programmeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    
  actionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
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





    sectionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.jointureUaChapitreSection.filter(
            element => element.id == id
          );
        }
      };
    },
grandNatureDepense() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    ligneBudgetaire() {
      return id => {
        if (id != null && id != "") {
          return this.getMarchePersonnaliser.filter(
            element => element.id == this.detail_marche.id
          );
        }
      };
    },

uniteAdministrative() {
      return id => {
        if (id != null && id != "") {
          return this.getMarchePersonnaliser.filter(
            element => element.id == this.detail_marche.id
          );
        }
      };
    },
 NumeroFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.numero_cc;
      }
      return 0
    },
    nomFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.raison_sociale;
      }
      return 0
    },
 AdresseFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.email;
      }
      return 0
    },
    MontantMarche() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.marche.montant_marche;
      }
      return 0
    },
   CodeBudgetaire() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.marche.imputation;
      }
      return 0
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
 totalMarche() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.marche.montant_marche;
      }
      return 0
    },
sommeEngagement(){
  return id => {
    if(id !=""){
  
        
    return this.engagements.filter(element => element.marche_id == this.detail_marche.id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2); 
      
    }
    
  }
},


restePayeMarche() {
      const val = parseFloat(this.totalMarche) - parseFloat(this.sommeEngagement(this.detail_marche.id));
      return parseFloat(val).toFixed(0);
    },


MontantBudgetaire() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.formData.ligne_budgetaire_id);

      if (norme) {
        return norme.Dotation_Initiale;
      }
      return 0
    },
idBudgetaire() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.codebudget == this.formData.ligne_budgetaire_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },


 dotationInite: function () {
                return imputation => {
                    if (imputation != "") {
                        return  this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.codebudget == imputation);
                    }
                }
            },



 sommeEgagementLigne: function () {
                return imputation => {
                    if (imputation != "") {
                      let valInite=0;
                        return  this.getEngagementPersonnaliser.filter(normeEquipe => normeEquipe.budget_general_id == imputation).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },











        },
        methods: {
            ...mapActions("bienService", [
                "getEngagement",
                "supprimerEngagement",
                "modifierEngagement",
                "ajouterEngagement",
                "ajouterMandat",
                "modifierMandat",
                "supprimerMandat"
               
            ]),
 ...mapActions("uniteadministrative", [
               
                "modifierMontantBudgetaire"
            ]),
 ajouterMandatLocal(){
      
       var nouvelObjet = {
      ...this.formData,
     
       	num_engagement :this.numeroEngage,
        section_id :this.AfficherSection,
         montant_mandat :this.MontantMandat,
         date_reception_cf :this.dateReception,
         ua_id :this.AfficherUnite,
       
      
       };
this.ajouterMandat(nouvelObjet)
this.$("#exampleModalMandat").modal('hide');

    },


afficherModalModifierMotifMandat(index) {
      this.$("#exampleModalMotifMandat").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editMandat = this.mandats[index];
      },









 afficherModalAjouterMandat() {
      this.$("#exampleModalMandat").modal({
        backdrop: "static",
        keyboard: false
      });
    },
 



//  modifierDecissionLocal(){
// var objetPourModifiernormerealise1 = {
//         id: this.idBudget,
//         montant_actuel: this.MontantMandatModifier
// }
// var nouvelObjet1 = {
//       ...this.editMandat,
//     	num_engagement :this.numeroEngageModifier,
//         section_id :this.AfficherSectionModifier,
//          montant_mandat :this.MontantMandatModifier,
//          date_reception_cf :this.dateReceptionModifier,
//          ua_id :this.AfficherUniteModifier,
       
//        };
//        this.modifierMontantBudgetaire(objetPourModifiernormerealise1);
//       this.modifierEngagement(nouvelObjet1)
//       this.$('#ModifierEngage').modal('hide');
//   //  }
      
//     },





 modifierModalMandatLocal(){
//    if( this.MontantMarche < this.montantDisponible)
//    {
// alert("Verification : Le Montant d'engagement est superieure au montant du marché")
//    }
//    else{
var nouvelObjet1 = {
      ...this.editMandat,
    	num_engagement :this.numeroEngageModifier,
        section_id :this.AfficherSectionModifier,
         montant_mandat :this.MontantMandatModifier,
         date_reception_cf :this.dateReceptionModifier,
         ua_id :this.AfficherUniteModifier,
       
       };
      this.modifierMandat(nouvelObjet1)
      this.$('#ModifierEngage').modal('hide');
      this.$('#exampleModalMotifMandat').modal('hide');
  //  }
      
    },

























         afficherModalAjouter() {
      this.$("#AjouterEngage").modal({
        backdrop: "static",
        keyboard: false
      });
    },
     nouvelLigneEngagementLocal(){
//    if( this.MontantMarche < this.montantDisponible)
//    {
// alert("Verification : Le Montant d'engagement est superieure au montant du marché")
//    }
//    else{
var nouvelObjet1 = {
      ...this.editEngagement,
      exercice_budget :this.anneeAmort,
       	numero_cc_id :this.NumeroFournisseur,
        nom_entreprise :this.nomFournisseur,
         adresse_entreprise :this.AdresseFournisseur,
         total_general :this.montantCumulerModifier,
         budget_general_id :this.CodeBudgetaire,
          montant_cumul:this.montantDisponible,
          // montant_tresor:this.afficheTresor,
          // montant_don:this.afficheDon,
          // montant_emprunt:this.afficheemprunt,
          montant_a_paye: this.montantResteApayeModifier,
          montant_don:this.afficheDon,
          montant_emprunt:this.afficheEmprunt,
         montant_tresor :this.afficheTresor
       
       };
      this.ajouterEngagement(nouvelObjet1)
      this.$('#nouveauEngagement').modal('hide');
  //  }
      
    },
 modifierModalEngagementLocal(){
//    if( this.MontantMarche < this.montantDisponible)
//    {
// alert("Verification : Le Montant d'engagement est superieure au montant du marché")
//    }
//    else{
var nouvelObjet1 = {
      ...this.editEngagement,
      exercice_budget :this.anneeAmort,
       	numero_cc_id :this.NumeroFournisseur,
        nom_entreprise :this.nomFournisseur,
         adresse_entreprise :this.AdresseFournisseur,
         total_general :this.montantCumulerModifier,
         budget_general_id :this.CodeBudgetaire,
          montant_cumul:this.montantDisponible,
          // montant_tresor:this.afficheTresor,
          // montant_don:this.afficheDon,
          // montant_emprunt:this.afficheemprunt,
          montant_a_paye: this.montantResteApayeModifier,
          montant_don:this.afficheDon,
          montant_emprunt:this.afficheEmprunt,
         montant_tresor :this.afficheTresor
       
       };
      this.modifierEngagement(nouvelObjet1)
      this.$('#ModifierEngage').modal('hide');
      this.$('#exampleModalMotif').modal('hide');
      
  //  }
      
    },
    
 ajouterEngagementLocal(){
      
       var nouvelObjet = {
      ...this.formData,
      exercice_budget :this.anneeAmort,
       	numero_cc_id :this.NumeroFournisseur,
        nom_entreprise :this.nomFournisseur,
         adresse_entreprise :this.AdresseFournisseur,
         total_general :this.sommeMontant,
         budget_general_id :this.CodeBudgetaire,
         marche_id : this.detail_marche.id,
         montant_a_paye: this.montantResteApaye,
         montant_cumul:this.montantCumuler,
       ligne_id:this.idBudgetaire
      
       };
this.ajouterEngagement(nouvelObjet)
this.$("#AjouterEngage").modal('hide');

    },



  afficherModalAjouterImmobilisation() {
      this.$router.push({
        name: "AjouterEngagement"
      });
    },
afficherModalModifierMotifDemandeservice(index) {
      this.$("#exampleModalMotif").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editEngagement = this.getEngagementPersonnaliser[index];
      },

 afficherModalModifierEngagement(index) {
      this.$("#ModifierEngage").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editEngagement = this.getEngagementPersonnaliser[index];
    },


afficherModalNouveauEngagement(index) {
      this.$("#nouveauEngagement").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editEngagement = this.getEngagementPersonnaliser[index];
    },

          modifierBesoinImmoLocal() {
    
       var nouvelObjet1 = {
      ...this.formData,
      exercice_budget :this.anneeAmort,
       	numero_cc_id :this.NumeroFournisseur,
        nom_entreprise :this.nomFournisseur,
         adresse_entreprise :this.AdresseFournisseur,
         total_general :this.montantCumulerModifier,
         budget_general_id :this.CodeBudgetaire,
         marche_id : this.detail_marche.id
       
       };
      this.modifierEngagement(nouvelObjet1);
      this.$("#exampleModalMotif").modal('hide');
     
      },
      formatageSomme:formatageSomme,

            ExporterEnExel(){
                this.$refs.excel.click()
            },
             formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    },
         
        }
    
</script>
<style scoped>
    .taillemodal {
        width: 1300px;
        margin: 0 -580px;
    }
    .gdmodelfour
    {
 width: 1000px;
 margin: 0 -580px;
 height: 500px;
    }
    .grdirModalActeEffet
    {

 width: 1000px;
 margin: 0 -530px;
 height: 500px;

    }
    .taillModal{
        width: 970px;
 margin: 0 -530px;
 height: 500px;
    }
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
</style>
