restePayeMarche
afficheMarcheEngage
restePayeMarche
sommeEngagementTableau
afficheProgrammeDot
CodeSection
<template>

<div>
<div id="ModifierEngage" class="modal hide  taillemodal6">
<div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h5>Modifier Engagement</h5>
      </div>
        
      
           
<div class="table-responsive text-nowrap taillemodal61">
              <table class="table table-bordered table-striped ">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab39">INFORMATION</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab2">TYPE ENGAGEMENT </a>
                      </li> -->
                      
                      <li>
                        <a data-toggle="tab" href="#tab45">INFO FOURNISSEUR / IMPUTATION BUDGETAIRE</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab32">IMPUTATION BUDGETAIRE</a>
                      </li> -->
                       <!-- <li>
                        <a data-toggle="tab" href="#2">Valeur Calculer</a>
                      </li> -->
                    </ul>
                  </div>
                  <div class="widget-content tab-content tailfenet">
                    <!--ongle identification-->
                    <div id="tab39" class="tab-pane active">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Exercice Budgetaire</label>
                            
                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span4"
                               readonly
                              :value="anneeAmort"
                              />
                              <input
                                type="hidden"
                                class="span4"
                               readonly
                            v-model="editEngagement.facture_id"
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
                                class="span4"
                               readonly
                            :value="afficherSecti"
                              
                              />
                            </div>
                          </div>
                          
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Programme/dotation</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span4"
                                readonly
                            :value="afficherProgDot"
                              
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Nature depense</label>
                             <div class="controls">
                                 <input
                                type="text"
                                class="span4"
                                readonly
                            :value="CodeGdeNatureDep(afficheridgrandeNat(macheid))"
                              
                              />
                          
                           <input
                                type="hidden"
                                class="span"
                               
                             :value="macheid"
                              />
                               <input
                                type="hidden"
                                class="span"
                               
                             :value="montantMarcheAvecAvenant"
                              />
                               <input
                                type="hidden"
                                class="span"
                               
                             v-model="editEngagement.val"
                              />
                              </div>
                              </div>
                        </td>
                        </tr>
                         <tr>
 
                          <td>
                           <div class="control-group">
                            <label class="control-label">Action</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span4"
                                readonly
                            :value="afficherActi"
                              
                              />
                              
                            </div>
                          </div>
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Activite</label>
                            <div class="controls">
                             
                               <input
                                type="text"
                                class="span4"
                                readonly
                            :value="afficheractivite(afficheridActivite(macheid))"
                              
                              />
                            </div>
                          </div>
                          </td>
                          <td>
                             <div class="control-group">
                            <label class="control-label">Unite administrative</label>
                            <div class="controls">
                               <input
                                type="text"
                                class="span4"
                                readonly
                            :value="afficherUniteAdmin(afficheridUa(this.macheid))"
                              
                              />
                              
                            </div>
                          </div>
                          
                        </td>
                          <td>
                           <div class="control-group">
                            <label class="control-label">Type Procedure</label>
                            
                               <div class="controls">
                              <input
                                type="text"
                                class="span4"
                               readonly
                             :value="recupererTypeProcedure"
                              
                              />
                               
                               
                             

                              
                            </div>
                          </div>
                        </td>
                        </tr>
                         
                        <tr>
                        
                         <!-- <td>
                          <div class="control-group">
                            <label class="control-label">Numero demande</label>

                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span4"
                               
                              v-model="editEngagement.numero_demande"
                              
                              />
                                <input
                                type="hidden"
                                class="span4"
                               
                            :value="idBudgetaire"
                              
                              /> 
                            </div>
                          </div>
                        </td> -->
                      
                          <!-- <td>
                          <div class="control-group">
                            <label class="control-label">Numero engagement</label>

                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span4"
                               
                              v-model="editEngagement.numero_engage"
                              
                              /> -->
                               <input
                                type="hidden"
                                class="span4"
                               
                            :value="idBudgetaire"
                              
                              />
                            <!-- </div>
                          </div>
                        </td> -->
                        
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Numero Demande engagement</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="editEngagement.numero_demande_engage"/>
                            </div>
                          </div>
                        </td>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Numero engagement</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="editEngagement.numero_engage"/>
                            </div>
                          </div>
                        </td>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Numero Bordereau</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="editEngagement.numero_bordereau"/>
                            </div>
                          </div>
                        </td>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Date demande engagement</label>
                            <div class="controls">
                              <input type="date" class="span4" v-model="editEngagement.date_demande"/>
                            </div>
                          </div>
                        </td>
                       
               
                      </tr>

                    
                 
                  <tr>
                          
                        
                        <td>
                            <div class="control-group">
                              <label class="control-label">Réf. Engagement  juridique</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span4"
                                  v-model="editEngagement.ref_juridique"
                                />
                              </div>
                            </div>
                          </td>
                          
                           <td>
                            <div class="control-group">
                              <label class="control-label">Numero OP/AT</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span4"
                                  v-model="editEngagement.numero_op"
                                />
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
                              <input type="text" class="span" v-model="editEngagement.Bailleur" />
                            </div>
                          </div>
                        </td> -->
                       
                      </tr>
                      <tr>
                          
                             
                      </tr>
                    </div>
                    <!--ongle descriptif-->
                    <!-- <div id="tab2" class="tab-pane">
                      

                      
                       
                     
                     
                      <tr>
                         
                         
                      
                        
                       
                       
                      </tr>
                      
                    </div> -->
                    <!--ongle 3 -->


<!--ongle descriptif-->
                    <div id="tab45" class="tab-pane"> 
                      

                      
                        <tr>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Mode de paiement</label>
                            <div class="controls">
                              <select v-model="editEngagement.mod_paiement_engage" class="span4">
                                
                                <option value="0">Bon de caisse</option>
                                    <option value="1">Chèque Spécial Trésor</option>
                                       <option value="2">Chèque Spécial Enregistrement</option>
                                    <option value="3">Virement</option>
                                     <option value="4">Chèque Spécial Douanes</option>
                                      <option value="5">Paiement direct par bailleur de fonds</option>
                                       <option value="6">Autres</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         
                       <td>
                         <div class="control-group">
                            <label class="control-label">N° compte contribuable</label>
                            <div class="controls">
                             <div class="controls">
                              <input type="text" class="span4" :value="NumeroFournisseur" readonly/>
                               
                            </div>
                              
                            </div>
                          </div>
                        </td>
                        
                          
                       
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nom entreprise</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="nomFournisseur" readonly/>
                               
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Adresse</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span4"
                                placeholder="Saisir adresse_entreprise"
                                :value="AdresseFournisseur"
                                readonly
                              />
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
                              <input type="text" class="span" v-model="editEngagement.Bailleur" />
                            </div>
                          </div>
                        </td> -->
                       
                      </tr>
                      <tr>
                         
                         
                      
                        
                       
                       
                      </tr>
                      <tr>
                            <td >
                         <div class="control-group">
                            <label class="control-label">Objet de la dépense</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="afficherObjetEngagement1" readonly/>
                               <input type="hidden" class="span10" v-model="editEngagement.id" readonly/>
                            </div>
                          </div>
                        </td>
                         <td>
                            <div class="control-group">
                              <label class="control-label">Numéro compte</label>
                              <div class="controls">
                               <select v-model="editEngagement.compte_id" class="span4">
                                <option
                                  v-for="affiche in afficherCompteUtilisateur(this.AfficherIdFournisseur)" :key="affiche.id"
                                  :value="affiche.id"
                                >{{affiche.rib}}</option>
                              </select>
                              </div>
                            </div>
                          </td>
                          
                         <td>
                            <div class="control-group">
                              <label class="control-label">piece justificative</label>
                              <div class="controls">
                                <input
                                  type="file"
                                  class="span"
                                 
                                />
                              </div>
                            </div>
                          </td>
                             <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            
                             <select v-model="editEngagement.bailler_id" class="span4">
                                <option
                                  v-for="fam in sources_financements"
                                  :key="fam.id"
                                  :value="fam.id"
                                >{{fam.libelle}}</option>
                              </select>
                          </div>
                        </td> 
                      </tr>
                      <tr>
                       <td>
                         <div class="control-group">
                            <label class="control-label">Total général</label>
                            <div class="controls">
                              <input type="number" class="span4" :value="sommeMontantEngagement" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <input type="number" class="span4" v-model="editEngagement.montant_tresor" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <input type="number" class="span4" v-model="editEngagement.montant_don" />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <input type="number" class="span4" v-model="editEngagement.montant_emprunt" />
                            </div>
                          </div>
                        </td>
                      </tr>
                        <tr>
                        
                        
                       
                        
                        <td>
                           <div class="control-group">
                            <label class="control-label">Ligne Budgetaire</label>
                            <div class="controls">
                              <!-- <select v-model="editEngagement.ligne_budgetaire_id" class="span4"> -->
                                <!-- <option
                                  v-for="fam in ligneBudgetaire(macheid)"
                                  :key="fam.id"
                                  :value="fam.economique_id"
                                >{{fam.afficheEconomique.code}}-{{fam.afficheEconomique.libelle}}</option>
                              </select> -->
                               <div class="controls">
                              <input type="text" class="span4" :value="afficheligneEconomiqueBudgetaire(ligneEconomiqueBudgetaire)" readonly/>
                            </div>
                            </div>
                          </div>
                        </td>
                        <td >
                          <div class="control-group">
                            <label class="control-label">Code Budgetaire</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="CodeBudgetaire" readonly/>
                            </div>
                          </div>
                        </td>
                       <td>
                          <div class="control-group">
                            <label class="control-label">Numéro Facture</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="affichiernumEngagement1" readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Facture</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="afficherMontantEngagement1" readonly/>
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                      <tr>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Dotation Iniatiale</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="dotationInite(afficherImputationBudget(macheid)).Dotation_Initiale" readonly/>
                            </div>
                          </div>
                        </td>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Cumul engagements antérieurs </label>
                            <div class="controls">
                              <input type="text" class="span4" :value="sommeEgagementLigne(macheid)" readonly/>
                            </div>
                          </div>
                        </td>
                           <td>
                          <div class="control-group">
                            <label class="control-label">Crédits Autorisés(Engagement actuel)</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="sommeMontantEngagement" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                                                    <div class="control-group">
                            <label class="control-label">Engagement cumulé </label>
                            <div class="controls">
                              <input type="text" class="span4" :value="montantCumulerMandatEngagement" readonly/>
                            </div>
                          </div>
                        </td>
                        
                        
                      
                      </tr>
                        <tr>
                           <td >
                          <div class="control-group">
                            <label class="control-label">Dotation disponible</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="montantDisponibleBudgetMandatEngagement" readonly/>
                            </div> 
                          </div>
                          
                        </td>
                                                 <td>
                          <div class="control-group">
                            <label class="control-label">Dotation disponible anterieure</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="dotationDisponibleAnterieure" readonly/>
                            </div>
                          </div>
                        </td>
                           <td>
                          <div class="control-group">
                            <label class="control-label">Montant marché</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="montantMarcheAvecAvenant" readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Disponible marché</label>
                            <div class="controls">
                              <!-- <input type="text" class="span4" :value="restePayeMarche" readonly/> -->
                            </div>
                          </div>
                        </td>

                         <!-- <td>
                          <div class="control-group">
                            <label class="control-label">Disponible</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="montantDisponibleBudget" readonly/>
                            </div> 
                          </div>
                        </td> -->
                       
                      </tr>
                    </div>
                    <!--ongle 3 -->
                
                       
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
               
                 
                      <table class="table table-bordered table-striped" v-if="macheid">
                                 <thead>
                                    <tr>

                                        <th>Année</th>
                                          <th title="numero de  demande engagement">N°demande engagement</th>
                                <th title="numero de bordereau">N°bordereau engagement</th>
                                 <th title="numero de l'engagement">N°engagement</th>
                                <th title="programme/dotation">Prog/Dotat</th>
                                <!-- <th>Action Programmatique</th>
                                <th>Activite</th> -->
                                <th title="unite administrative">Ua</th>
                                 <th>Imputation</th>
                                  <th title="ligne budgetaire">Section</th>
                                  <th>Montant</th>
                                  <th>Décision CF</th>
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr 
                    class="odd gradeX"
                    v-for="(Engage, index) in afficheMarcheEngage(macheid)"
                    :key="Engage.id"
                  >
                    <template v-if="Engage.decision_cf == 1">
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.exercice_budget || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.numero_demande_engage || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.numero_bordereau || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.numero_engage || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierEngagement(index)">{{afficheProgrammeDot(Engage.programme_id) || 'Non renseigné'}}</td> 
                     <!-- <td @dblclick="afficherModalModifierEngagement(index)">{{afficheActionProg(Engage.action_id) || 'Non renseigné'}}</td> 
                      <td @dblclick="afficherModalModifierEngagement(index)">{{afficheAtiviteProg(Engage.activite_id) || 'Non renseigné'}}</td> -->
                    <td @dblclick="afficherModalModifierEngagement(index)">{{uaMandat(Engage.ua_id) || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.budget_general_id || 'Non renseigné'}}</td>
                     
                    <td @dblclick="afficherModalModifierEngagement(index)">{{ CodeSection(Engage.section_id) || 'Non renseigné'}}</td> 
                  <td @dblclick="afficherModalModifierEngagement(index)">{{formatageSomme(parseFloat(Engage.total_general)) || 0}}</td>
                  <td>
                        <button v-if="Engage.decision_cf == 1"  class="btn  btn-success" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="Engage.decision_cf == 2" class="btn  btn-warning" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="Engage.decision_cf == 3" class="btn  btn-danger" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                     </template>
                      <template v-else>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.exercice_budget || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.numero_demande_engage || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.numero_bordereau || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.numero_engage || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierEngagement(index)">{{afficheProgrammeDot(Engage.programme_id) || 'Non renseigné'}}</td> 
                     <!-- <td @dblclick="afficherModalModifierEngagement(index)">{{afficheActionProg(Engage.action_id)|| 'Non renseigné'}}</td> 
                      <td @dblclick="afficherModalModifierEngagement(index)">{{afficheAtiviteProg(Engage.activite_id) || 'Non renseigné'}}</td> -->
                    <td @dblclick="afficherModalModifierEngagement(index)">{{uaMandat(Engage.ua_id) || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.budget_general_id || 'Non renseigné'}}</td>
                     
                    <td @dblclick="afficherModalModifierEngagement(index)">{{CodeSection(Engage.section_id) || 'Non renseigné'}}</td> 
                  <td @dblclick="afficherModalModifierEngagement(index)">{{formatageSomme(parseFloat(Engage.total_general)) || 0}}</td>
                  <td>
                        <button v-if="Engage.decision_cf == 1"  class="btn  btn-success" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="Engage.decision_cf == 2" class="btn  btn-warning" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="Engage.decision_cf == 3" class="btn  btn-danger" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                    
                      </button>
                    </td>
                     </template>
                       <td>
                        <router-link :to="{ name: 'DetailEngagement', params: {id_detail_engagement:Engage.id}}"
                class="btn btn-default " title="Detail Engagement">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link> 
                   
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
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from './../../../../../Repositories/Repository';
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
          editEngagement: {
        montant_tresor:0,
montant_don:0,
montant_emprunt:0,

      },
       editAvenant: {},
search:""
        }
    },
    props:["macheid"],
    created(){},

              computed: {
            ...mapGetters("bienService", ['modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),

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
      "stockageArticle",
      "getFacture"
      
    ]),
 ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
  ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections","plans_programmes"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
   
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
     CodeSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section;
      }
      return 0
        }
      };
    },
    uaMandat() {
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
     afficheProgrammeDot() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
sommeEngagementTableau(){
  return id => {
    if(id !=""){
  
        
    return this.getMandatPersonnaliserVise.filter(element => element.marche_id == this.macheid).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2); 
      
    }
    
  }
},
afficheMarcheEngage() {
      return id => {
        if (id != null && id != "") {
          return this.engagements.filter(
            element => element.marche_id == id
          );
        }
      };
    },
restePayeMarche() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.sommeEngagementTableau(this.macheid));
      return parseFloat(val).toFixed(0);
      
    },
    restePayeMarcheMandat() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.montantCumulerMandat);
      return parseFloat(val).toFixed(0);
    },
     dotationDisponibleAnterieure() {
      const val =  parseFloat(this.dotationInite(this.afficherImputationBudget(this.macheid)).Dotation_Initiale) - parseFloat(this.montantCumulerLiquidationMandat);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
montantDisponibleBudgetMandatEngagement() {
      const val =  parseFloat(this.dotationDisponibleAnterieure) - parseFloat(this.sommeMontantEngagement);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
     
      return 0
     
    },
montantCumulerMandatEngagement() {
      const val = parseFloat(this.sommeEgagementLigne(this.macheid)) + parseFloat(this.sommeMontantEngagement);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
      montantCumulerEngagementMandat() {
      const val = parseFloat(this.sommeEgagementLigne(this.macheid)) + parseFloat(this.editEngagement.total_general);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

sommeEgagementLigne: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.mandats.filter(normeEquipe => normeEquipe.marche_id == this.macheid).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
     dotationInite: function () {
                return id => {
                    if (id != "") {
                        return  this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.codebudget == id);
                    }
                }
            },
afficherImputationBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation;
      }
      return ""
        }
      };
    },
       ligneEconomiqueBudgetaire() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.marche.economique_id;
      }
      return 0
    },
  afficheligneEconomiqueBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.derniereNivoPlanBudgetaire.find(qtreel => qtreel.id == id);

      if (qtereel) {
        
         return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },
afficherCompteUtilisateur: function () {
                return id => {
                    if (id != "") {
                      
                        return  this.comptes.filter(normeEquipe => normeEquipe.entrepse_id == id);
                       
                    }
                }
            },

afficherCompteUtilisateur1: function () {
                return id => {
                    if (id != "") {
                      
                        return  this.comptes.filter(normeEquipe => normeEquipe.entrepse_id == id);
                       
                    }
                }
            },







afficheCompte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.comptes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.rib;
      }
      return 0
        }
      };
    },
    afficherNumeroEngagemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_engage;
      }
      return 0
        }
      };
    },
afficherObjetEngagement1() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.objet_facture;
      }
      return ""
    },
    affichiernumEngagement1() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.numero_facture;
      }
      return "0"
    },

afficherMontantEngagement1() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.prix_propose_ttc;
      }
      return "0"
    },
     recupererNumeroFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    NumeroFournisseur_id() {
      
      const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.fournisseur_id;
      }
      return 0
    },
 NumeroFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.varObjetEntreprise.numero_cc;
      }
      return 0
    },
     AfficherIdFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.varObjetEntreprise.id;
      }
      return 0
    },
     AfficherIdFournisseur1() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.varObjetEntreprise.id;
      }
      return 0
    },
    nomFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.varObjetEntreprise.raison_sociale;
      }
      return 0
    },
  AfficherFournisseur_id() {
      
      const norme = this.acteEffetFinanciers.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.entreprise_id;
      }
      return 0
    },
 AdresseFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.varObjetEntreprise.email;
      }
      return 0
    },
    MontantMarche() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.marche.montant_marche;
      }
      return 0
    },
   CodeBudgetaire() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.marche.imputation;
      }
      return 0
    },
    //   ligneEconomiqueBudgetaire() {
      
    //   const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

    //   if (norme) {
    //     return norme.marche.economique_id;
    //   }
    //   return 0
    // },
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
    sommeMontantEngagement() { 
      const val = parseFloat(this.editEngagement.montant_tresor) + parseFloat(this.editEngagement.montant_don) + parseFloat(this.editEngagement.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },
    sommeMontantMandat() { 
      const val = parseFloat(this.editMandat.montant_tresor) + parseFloat(this.editMandat.montant_don) + parseFloat(this.editMandat.montant_emprunt);
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
sommeMontantAutreLigne() { 
      const val = parseFloat(this.affichetresor2) + parseFloat(this.afficheDon2) + parseFloat(this.afficheEmprunt2);
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
idBudgetaire() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.afficheridEconomique(this.macheid));

      if (norme) {
        return norme.id;
      }
      return 0
    },

recupererObjetFacture() {
      
      const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.objet_facture;
      }
      return ""
    },


recupererTypeProcedure() {
      
      const norme = this.choixprocedure.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.tprocedure;
      }
      return ""
    },

    recupererUniteAdministrative() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
        return norme.afficheUA.libelle;
      }
      return ""
    },

recupererProgrammeDotation(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
        return norme.afficheProgramme.libelle;
      }
      return ""
},

recupererAction(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
        return norme.afficheAction.libelle;
      }
      return ""
},

recupererSection(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
        return norme.afficheSection.nom_section;
      }
      return ""
},

recupererNatureDepense(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
        return norme.afficheGdeNature.libelle;
      }
      return ""
},
 afficheridActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_id;
      }
      return ""
        }
      };
    },


    afficheMontantReelMarche() {
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
    
affichierMontantAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
    }
    
  }
},
    montantMarcheAvecAvenant() {
      const val = parseFloat(this.afficheMontantReelMarche(this.macheid)) + parseFloat(this.affichierMontantAvenant(this.macheid));
      return parseFloat(val).toFixed(0);
    },

     afficheridgrandeNat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.gdenature_id;
      }
      return ""
        }
      };
    },
     afficheridEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return ""
        }
      };
    },
     afficheridUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return ""
        }
      };
    },
    afficherUniteAdmin() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
    afficherSecti() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheSection.code_section.concat('  ', norme.afficheSection.nom_section)
      }
      return ""
    },
    afficherSectId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheSection.id;
      }
      return ""
    },
 afficherProgDot() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheProgramme.libelle;
      }
      return ""
    },
    afficherProgDotId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheProgramme.id;
      }
      return ""
    },
afficherActi() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheAction.libelle;
      }
      return ""
    },
    afficherActid() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheridUa(this.macheid));

      if (norme) {
       return norme.afficheAction.id;
      }
      return ""
    },














     afficherProgDot2() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     CodeGdeNatureDep() {
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

 afficheraction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauAction.find(qtreel => qtreel.id == id);

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
      },
 
      methods:{ 

          ...mapActions('bienService',[  "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",]),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
afficherModalModifierMotifDemandeservice(index) {
      this.$("#exampleModalMotif").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editEngagement = this.afficheMarcheEngage(this.macheid)[index];
      
      },
  afficherModalModifierEngagement(index) {
      this.$("#ModifierEngage").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editEngagement = this.afficheMarcheEngage(this.macheid)[index];
       
    },
formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
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