
detail_marche
afficheNomFournisseur
afficherModalAjouter
unite_administrative_id
CodeGdeNatureDep
gdenature_id
montantMarcheAvecAvenant
afficheractivite
afficherUniteAdmin
<template>

<div>

   <div id="AjouterEngage" class="modal hide taillemodal6">
  <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h5>Ajouter Engagement</h5>
      </div>
        
      
           
<div class="table-responsive text-nowrap taillemodal61">
              <table class="table table-bordered table-striped ">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1000">INFORMATION</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab2">TYPE ENGAGEMENT </a>
                      </li> -->
                      
                      <li>
                        <a data-toggle="tab" href="#tab120">INFO FOURNISSEUR / IMPUTATION BUDGETAIRE</a>
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
                    <div id="tab1000" class="tab-pane active">
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
                               
                             v-model="formData.val"
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
                            :value="afficheractivite(afficheridActivite(this.macheid))"
                              
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
                            <label class="control-label">Numéro Bon Manuel</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="formData.numero_demande_engage"/>
                            </div>
                          </div>
                        </td>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Numéro demande engagement</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="formData.numero_engage"/>
                            </div>
                          </div>
                        </td>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Numero Bordereau</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="formData.numero_bordereau"/>
                            </div>
                          </div>
                        </td>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Date demande engagement</label>
                            <div class="controls">
                              <input type="date" class="span4" v-model="formData.date_demande"/>
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
                                  v-model="formData.ref_juridique"
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
                                  v-model="formData.numero_op"
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
                              <input type="text" class="span" v-model="formData.Bailleur" />
                            </div>
                          </div>
                        </td> -->
                       
                      </tr>
                      <tr>
                          
                             <!-- formData2 -->
                      </tr>
                    </div>
                    <!--ongle descriptif-->
                    <!-- <div id="tab2" class="tab-pane">
                      

                      
                       
                     
                     
                      <tr>
                         
                         
                      
                        
                       
                       
                      </tr>
                      
                    </div> -->
                    <!--ongle 3 -->


<!--ongle descriptif-->
                    <div id="tab120" class="tab-pane">
                      

                      
                        <tr>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Mode de paiement</label>
                            <div class="controls">
                              <select v-model="formData.mod_paiement_engage" class="span4">
                             
                                <option
                        v-for="localgeo in modepaiements"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         
                       <td>
                         <div class="control-group">
                            <label class="control-label">N° compte contribuable</label>
                            <div class="controls">
                             <div class="controls">
                              <input type="text" class="span4" :value="afficheNumeroFournisseur(NumeroFournisseur_id)" readonly/>
                               
                            </div>
                              
                            </div>
                          </div>
                        </td>
                        
                          
                       
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nom entreprise</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="afficheNomFournisseur(NumeroFournisseur_id)" readonly/>
                               
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
                                :value="afficheAdresseFournisseur(NumeroFournisseur_id)"
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
                              <input type="text" class="span" v-model="formData.Bailleur" />
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
                              <input type="text" class="span4" :value="afficherObjetFacture" readonly/>
                               <input type="hidden" class="span10" v-model="formData.id" readonly/>
                            </div>
                          </div>
                        </td>
                          <td>
                            <div class="control-group">
                              <label class="control-label">Numéro compte</label>
                              <div class="controls">
                               <select v-model="formData.compte_id" class="span4">
                                <option
                                  v-for="affiche in afficherCompteUtilisateur1(this.NumeroFournisseur_id)" :key="affiche.id"
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
                            
                             <select v-model="formData.bailler_id" class="span4">
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
                              <input type="number" class="span4" :value="sommeMontant" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <input type="number" class="span4" v-model="formData.montant_tresor" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <input type="number" class="span4" v-model="formData.montant_don" />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <input type="number" class="span4" v-model="formData.montant_emprunt" />
                            </div>
                          </div>
                        </td>
                      </tr>
                        <tr>
                        
                        
                       
                        
                        <td>
                           <div class="control-group">
                            <label class="control-label">Ligne Budgetaire</label>
                            <div class="controls">
                              <!-- <select v-model="formData.ligne_budgetaire_id" class="span4"> -->
                                <!-- <option
                                  v-for="fam in ligneBudgetaire(macheid)"
                                  :key="fam.id"
                                  :value="fam.economique_id"
                                >{{fam.afficheEconomique.code}}-{{fam.afficheEconomique.libelle}}</option>
                              </select> -->
                               <div class="controls">
                              <input type="text" class="span4" :value="afficheligneEconomiqueBudgetaire(afficheligneEconom(afficherligneEconomiqueBudgetaire))" readonly/>
                            </div>
                            </div>
                          </div>
                        </td>
                        <td >
                          <div class="control-group">
                            <label class="control-label">Imputation Budgetaire</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="afficherligneEconomiqueBudgetaire" readonly/>
                            </div>
                          </div>
                        </td>
                       <td>
                          <div class="control-group">
                            <label class="control-label">Numéro Facture</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="afficherNumeroFcture" readonly/>
                              
                              <input type="hidden" class="span4" v-model="formDataFacture.id" readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Facture</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="afficherMontantFacture" readonly/>
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                      <tr>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Crédit Autorisés</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="dotationInite(detail_marche.imputation).Dotation_Initiale" readonly/>
                            </div>
                          </div>
                        </td>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Cumul des demandes(y compris celle-ci) </label>
                            <div class="controls">
                              <input type="text" class="span4" :value="sommeEgagementLigne(macheid)" readonly/>
                            </div>
                          </div>
                        </td>
                                               <td>
                          <div class="control-group">
                            <label class="control-label">Dotation disponible</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="dotationDisponibleAnterieure" readonly/>
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <!-- <label class="control-label">Montant marché</label> -->
                            <div class="controls">
                              <input type="hidden" class="span4" v-model="montantMarcheAvecAvenant" readonly/>
                            </div>
                          </div>
                        </td>
                           <td>
                          <div class="control-group">
                            <!-- <label class="control-label">Crédits Autorisés(Engagement actuel)</label> -->
                            <div class="controls">
                              <input type="hidden" class="span4" :value="sommeMontant" readonly/>
                            </div>
                          </div>
                        </td>
                       
                      
                        
                        
                      
                      </tr>
                        <tr>
                            <td>
                                                    <div class="control-group">
                            <!-- <label class="control-label">Engagement cumulé </label> -->
                            <div class="controls">
                              <input type="hidden" class="span4" :value="montantCumulerMandat" readonly/>
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <!-- <label class="control-label">Disponible marché</label> -->
                            <div class="controls">
                              <input type="hidden" class="span4" :value="restePayeMarche" readonly/>
                            </div>
                          </div>
                        </td>
                           <td >
                          <div class="control-group">
                            <!-- <label class="control-label">Dotation disponible</label> -->
                            <div class="controls">
                              <input type="hidden" class="span4" :value="montantDisponibleBudgetMandat" readonly/>
                            </div> 
                          </div>
                          
                        </td>
                                                 <td>
                          <div class="control-group">
                            <!-- <label class="control-label">Dotation disponible anterieure</label> -->
                            <div class="controls">
                              <input type="hidden" class="span4" :value="dotationDisponibleAnterieure" readonly/>
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





<div id="modalFactureAjouterEngagementDirect" class="modal hide taillemodal45">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Facture Definitive</h3>
      </div>
      <div class="modal-body " >
        <table class="table table-bordered table-striped tailfacture">
         
          <tr>
              
             <td>
              
              <div class="control-group">
                <label class="control-label">Type facture</label>
                <div class="controls">
                  <select v-model="formData1.typfacture_id" class="span">
                  
                    <option value="1">Facture definitive</option>
                    
                  </select>
                 
                </div>
              </div>
            </td> 
              <td>
              <div class="control-group">
                <label class="control-label">Numero facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData1.numero_facture"
                    class="span3"
                    
                  />
                </div>
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Date de la facture</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData1.date_facture"
                   
                    class="span3"
                   
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
                    
                   readonly
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             
             
            
            

          </tr>
           <tr>
               <td colspan="2"> 
              <div class="control-group">
                <label class="control-label">Objet facture</label>
                <div class="controls">
                 
                  <textarea rows="3"  class="span6">

                  </textarea>
                </div>
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Fournisseur</label>
                <div class="controls">
                  <input
                    type="text"
                    
                 :value="nomFournisseur"
                    class="span3"
                    readonly
                  />
                </div>
              </div>
            </td>
               <td>
              
              <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="formData1.exonere" class="span">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                 <input
                    type="hidden"
                    
                v-model="formData1.exonere"
                    class="span"
                    readonly
                  />
                </div>
              </div>
            </td>           
          </tr>
          <tr  class="odd gradeX">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                  
                 :value="montantHT1"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup2()" >
                        <span>
                          <i class=" icon-plus"></i>
                        </span>
                      </button>
                       <!-- <button class="btn btn-danger"  v-on:click="showPopup20()" >
                        <span>
                          <i class=" icon-remove"></i>
                        </span>
                      </button> -->
                </div>
              </div>
            </td>
                  
          </tr>
        <!-- 2 ligne -->
         <tr  class="odd gradeX" v-show="popupState2">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation2"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire2"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                   
                       v-model="formData1.quantite2"
                 
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT2"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup3()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState3">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation3"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire3"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite3"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT3"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup4()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState4">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation4"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire4"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite4"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT4"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup5()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState5">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation5"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire5"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite5"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT5"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup6()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState6">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation6"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire6"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite6"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT6"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup7()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState7">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation7"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire7"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite7"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT7"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup8()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState8">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation8"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire8"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite8"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT8"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup9()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState9">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation9"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire9"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite9"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT9"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState10">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation10"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire10"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite10"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   :value="montantHT10"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant HT</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
                :value="totalMontantHT"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Taux</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="afficherEnorere"
                    class="span"
                   readonly
                  />
                  
                   <input
                    type="hidden"
                    :value="afficherEnorere2"
                   
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">TVA</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantTva"
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
            
            
                  
          </tr>
         
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant TTC</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantHTt"
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>
            
            
                  
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterFactureLocal(formData1)"
          class="btn btn-primary"
          href="#"
           
        >Valider</a> 
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>










    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="modatFactureModifier" class="modal hide taillemodal45">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier  Facture</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped tailfacture">
         
          <tr>
              <td>
              
              <div class="control-group">
                <label class="control-label">Type facture</label>
                <div class="controls">
                  <select v-model="formData1.typfacture_id" class="span3" >
                    
                     <option
                        v-for="typeFact in typeFactures"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Numero facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData1.numero_facture"
                    class="span3"
                    
                  />
                </div>
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Date de la facture</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData1.date_facture"
                   
                    class="span3"
                   
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
                    
                   readonly
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             
             
            
            

          </tr>
           <tr>
               <td colspan="2"> 
              <div class="control-group">
                <label class="control-label">Objet facture</label>
                <div class="controls">
                 
                  <textarea rows="1" v-model="formData1.objet_facture" class="span5">

                  </textarea>
                </div>
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Fournisseur</label>
                <div class="controls">
                  <input
                    type="text"
                    
                 :value="afficheNomFournisseur(AfficherFournisseur_id)"
                    class="span3"
                    readonly
                  />
                  
                </div>
              </div>
            </td>
               <td>
              
              <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="formData1.exonere" class="span">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                 <!-- <input
                    type="hidden"
                    
                v-model="formData1.exonere"
                    class="span"
                    readonly
                  /> -->
                </div>
              </div>
            </td>           
          </tr>
          <tr  class="odd gradeX">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                  
                 :value="montantHT1"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup2()" >
                        <span>
                          <i class=" icon-plus"></i>
                        </span>
                      </button>
                       <!-- <button class="btn btn-danger"  v-on:click="showPopup20()" >
                        <span>
                          <i class=" icon-remove"></i>
                        </span>
                      </button> -->
                </div>
              </div>
            </td>
                  
          </tr>
        <!-- 2 ligne -->
         <tr  class="odd gradeX" v-show="popupState2">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation2"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire2"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                   
                       v-model="formData1.quantite2"
                 
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT2"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup3()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState3">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation3"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire3"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite3"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT3"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup4()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState4">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation4"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire4"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite4"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT4"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup5()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState5">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation5"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire5"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite5"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT5"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup6()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState6">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation6"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire6"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite6"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT6"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup7()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState7">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation7"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire7"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite7"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT7"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup8()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState8">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation8"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire8"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite8"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT8"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup9()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState9">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation9"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire9"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite9"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT9"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState10">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation10"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire10"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite10"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   :value="montantHT10"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant HT</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
                :value="totalMontantHT"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Taux</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="afficherEnorere"
                    class="span"
                   readonly
                  />
                  
                   <input
                    type="hidden"
                    :value="afficherEnorere2"
                   
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">TVA</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantTva"
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
            
            
                  
          </tr>
         
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant TTC</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantHTt"
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>
            
            
                  
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ModifierFactureLocal(formData1)"
          class="btn btn-primary"
          href="#"
           
        >Modifier</a> 
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

    
     <div id="modatFactureAjouter" class="modal hide taillemodal45">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Facture</h3>
      </div>
      <div class="modal-body" >
        <table class="table table-bordered table-striped ">
         
          <tr>
              <td>
              
              <div class="control-group">
                <label class="control-label">Type facture</label>
                <div class="controls">
                  <select v-model="formData1.typfacture_id" class="span3" >
                    
                     <option
                        v-for="typeFact in typeFactures"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Numero facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData1.numero_facture"
                    class="span3"
                    
                  />
                </div>
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Date de la facture</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData1.date_facture"
                   
                    class="span3"
                   
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
                    
                   readonly
                    class="span"
                   
                  />
                </div>
              </div>
            </td>
             
             
            
            

          </tr>
           <tr>
               <td colspan="2"> 
              <div class="control-group">
                <label class="control-label">Objet facture</label>
                <div class="controls">
                 
                  <textarea rows="3"  class="span5">

                  </textarea>
                </div>
              </div>
               </td>
               <td>
              <div class="control-group">
                <label class="control-label">Fournisseur</label>
                <div class="controls">
                  <input
                    type="text"
                    
                 :value="afficheNomFournisseur(AfficherFournisseur_id)"
                    class="span3"
                    readonly
                  />
                </div>
              </div>
            </td>
               <td>
              
              <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="formData1.exonere" class="span">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                 <input
                    type="hidden"
                    
                v-model="formData1.exonere"
                    class="span"
                    readonly
                  />
                </div>
              </div>
            </td>           
          </tr>
          <tr  class="odd gradeX">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                  
                 :value="montantHT1"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup2()" >
                        <span>
                          <i class=" icon-plus"></i>
                        </span>
                      </button>
                       <!-- <button class="btn btn-danger"  v-on:click="showPopup20()" >
                        <span>
                          <i class=" icon-remove"></i>
                        </span>
                      </button> -->
                </div>
              </div>
            </td>
                  
          </tr>
        <!-- 2 ligne -->
         <tr  class="odd gradeX" v-show="popupState2">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation2"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire2"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                   
                       v-model="formData1.quantite2"
                 
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT2"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup3()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState3">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation3"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire3"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite3"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT3"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup4()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState4">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation4"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire4"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite4"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT4"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup5()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState5">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation5"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire5"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite5"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT5"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup6()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState6">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation6"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire6"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite6"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT6"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup7()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState7">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation7"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire7"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite7"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT7"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup8()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState8">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation8"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire8"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite8"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                 :value="montantHT8"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup9()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState9">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation9"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire9"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite9"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  :value="montantHT9"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
           <!-- 3 ligne -->
         <tr  class="odd gradeX" v-show="popupState10">
            <td>
              <div class="control-group">
                <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                  v-model="formData1.designation10"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire10"
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite10"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   :value="montantHT10"
                    class="span"
                    readonly
                  />
                  <button class="btn btn-success"  v-on:click="showPopup10()" >
                        <span>
                          <i class=" icon-plus-sign"></i>
                        </span>
                      </button>
                </div>
              </div>
            </td>
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant HT</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
                :value="totalMontantHT"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Taux</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="afficherEnorere"
                    class="span"
                   readonly
                  />
                  
                   <input
                    type="hidden"
                    :value="afficherEnorere2"
                   
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
            
            
                  
          </tr>
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">TVA</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantTva"
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
            
            
                  
          </tr>
         
          <tr  class="odd gradeX" >
            <td colspan="3">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant TTC</label>
               
              </div>
            </td>
            <td>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="montantHTt"
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>
            
            
                  
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterFactureLocal(formData1)"
          class="btn btn-primary"
          href="#"
           
        >Valider</a> 
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
 <div id="modalTypeEngagement" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Choisir le type de procedure</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
         
                         
                            <div class="control-group">
                            <label class="control-label">Type de procedure</label>
                            <div class="controls">
                             
                              <select v-model="formData.tprocedure">
                             
                                 <option value="Engagement Direct">Engagement Direct</option>
                               <option value="Engagement Bon de Commande">Engagement Bon de Commande</option>
                               
                              </select>
                           
                            </div>
                          </div>
                         
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterChoixProcLocal"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    
                
               
                 
                      <table class="table table-bordered table-striped" v-if="macheid">
              <table class="table table-bordered table-striped">
                                    <thead>
                                    <tr>

                                         
                     <th>type_facture</th>
                    <th>numero_facture</th>
                    <th>objet_facture</th>
                    
                     <th>Ua</th>
                    <!-- <th>prix_unitaire</th>
                    <th>Quantité</th> -->
                    <th>prix_propose_ht</th>
                    <th>Tva</th>
                    
                    <th>prix_propose_ttc</th>
        
                              
                                
                                
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                            
                 <tr
                    class="odd gradeX"
                    v-for="(factu, index) in afficheFactureTableau(macheid)"
                    :key="factu.id"
                  >
                   <template v-if="factu.typfacture_id == 1">
                   <!-- <td @dblclick="afficherModalModifierFacture(index)">{{factu.id || 'Non renseigné'}}</td> -->
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objectTypefacture.libelle || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.numero_facture || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objet_facture || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objetUA.libelle || 'Non renseigné'}}</td>
                       <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_propose_ht))|| 0}}</td>
                   <!-- <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_unitaire ))|| 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierFacture(index)">{{factu.quantite || 'Non renseigné'}}</td> -->
                        <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.tva)) || 'Non renseigné'}}</td>
                 
                     
                     <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_propose_ttc))|| 'Non renseigné'}}</td>
                      </template>
                        <template v-else>
                   <!-- <td @dblclick="afficherModalModifierFacture(index)">{{factu.id || 'Non renseigné'}}</td> -->
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objectTypefacture.libelle || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.numero_facture || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objet_facture || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objetUA.libelle || 'Non renseigné'}}</td>
                       <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_propose_ht))|| 0}}</td>
                   <!-- <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_unitaire ))|| 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierFacture(index)">{{factu.quantite || 'Non renseigné'}}</td> -->
                        <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.tva)) || 0}}</td>
                 
                     
                     <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_propose_ttc))|| 0}}</td>
                      </template>
                     <td>
                        <button class="btn " v-if="factu.typfacture_id !== 1" @click="afficherModalAjouter(factu.id)" title="Ajouter engagement">
                        <span>
                          <i class="icon   icon-folder-close"></i>
                        </span>
                      </button>
                       <button class="btn " v-if="factu.typfacture_id == 1" @click="afficherModalAjouterMandatDirect(factu.id)" title="Ajouter Mandat">
                        <span>
                          <i class="icon   icon-folder-close"></i>
                        </span>
                      </button>
                      <button class="btn btn-danger" @click="supprimerFacture(factu.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                                    </tbody>
                                </table>
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
      formData1: {
total:0,
total2:0,
total3:0,
total4:0,
total5:0,
total6:0,
total7:0,
total8:0,
total9:0,
total10:0,
       
numero_facture:"",
        objet_facture:"",
       
      
        
        typfacture_id:"",
           prix_propose_ht:"",
        prix_propose_ttc:"",
         date_facture:"",
         ua:"",
           tva:"",
           taux:"",

            designation:"",

 prix_unitaire:"",
         quantite:"",
           montantHT1:"",
           designation2:"",
            prix_unitaire2:"",
             quantite2:"",
         montantHT2:"",
           designation3:"",
           prix_unitaire3:"",
            quantite3:"",
             montantHT3:"",

 designation4:"",
           prix_unitaire4:"",
            quantite4:"",
             montantHT4:"",
              designation5:"",
           prix_unitaire5:"",
            quantite5:"",
             montantHT5:"",
              designation6:"",
           prix_unitaire6:"",
            quantite6:"",
             montantHT6:"",
              designation7:"",
           prix_unitaire7:"",
            quantite7:"",
             montantHT7:"",
              designation8:"",
           prix_unitaire8:"",
            quantite8:"",
             montantHT8:"",
              designation9:"",
           prix_unitaire9:"",
            quantite9:"",
             montantHT9:"",

 designation10:"",
           prix_unitaire10:"",
            quantite10:"",
             montantHT10:"",
 fournisseur_id:"",
 exonere:"",
       

        
      
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
       popupState2: false,
              popupState3: false,
              popupState4: false,
              popupState5: false,
              popupState6: false,
              popupState7: false,
              popupState8: false,
              popupState9: false,
              popupState10: false,
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
    affichierMontantAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
    }
    
  }
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

    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
afficherEnorere(){
if(this.formData1.exonere == 0){
  return 0
}
else {
  return this.affcherTauxEnCours
  
}
},


afficherEnorere2(){
if(this.formData1.exonere == 0){
  return 0
}
else {
  return this.tauxArrondit
  
}
},
     AfficherFournisseur_id() {
      
      const norme = this.acteEffetFinanciers.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.entreprise_id;
      }
      return 0
    },
    afficheNomFournisseur() {
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
     nomFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.varObjetEntreprise.raison_sociale;
      }
      return 0
    },
    afficheFactureTableau() {
      return id => {
        if (id != null && id != "") {
          return this.getFacturePersonnaliser.filter(
            element => element.marche_id == id
          );
        }
      };
    },
montantHT1() {
      const val =  parseFloat(this.formData1.prix_unitaire) * parseFloat(this.formData1.quantite);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
montantHT2() {
      const val =  parseFloat(this.formData1.prix_unitaire2) * parseFloat(this.formData1.quantite2);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT3() {
      const val =  parseFloat(this.formData1.prix_unitaire3) * parseFloat(this.formData1.quantite3);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT4() {
      const val =  parseFloat(this.formData1.prix_unitaire4) * parseFloat(this.formData1.quantite4);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT5() {
      const val =  parseFloat(this.formData1.prix_unitaire5) * parseFloat(this.formData1.quantite5);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT6() {
      const val =  parseFloat(this.formData1.prix_unitaire6) * parseFloat(this.formData1.quantite6);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT7() {
      const val =  parseFloat(this.formData1.prix_unitaire7) * parseFloat(this.formData1.quantite7);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT8() {
      const val =  parseFloat(this.formData1.prix_unitaire8) * parseFloat(this.formData1.quantite8);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT9() {
      const val =  parseFloat(this.formData1.prix_unitaire9) * parseFloat(this.formData1.quantite9);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT10() {
      const val =  parseFloat(this.formData1.prix_unitaire10) * parseFloat(this.formData1.quantite10);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

 totalMontantHT() {
      const val =  parseFloat(this.montantHT1) + parseFloat(this.montantHT2)+ parseFloat(this.montantHT3)+ parseFloat(this.montantHT4)+ parseFloat(this.montantHT5)+ parseFloat(this.montantHT6)+ parseFloat(this.montantHT7)+ parseFloat(this.montantHT8)+ parseFloat(this.montantHT9)+ parseFloat(this.montantHT10);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },



affcherTauxEnCours() {
      
      
      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },
tauxArrondit() {
      
      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.arrondit;
      }
      return 0
    },

montantTva() {
      const val =   parseFloat(this.totalMontantHT) * parseFloat(this.afficherEnorere2);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


 montantHTt() {
      const val =    parseFloat(this.totalMontantHT) + parseFloat(this.montantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
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
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),
         afficherModalAjouter(id) {
          
      this.$("#AjouterEngage").modal({
        backdrop: "static",
        keyboard: false
      });
     
       this.formDataFacture = this.afficheFactureTableau(this.macheid).find(recupererObjet => recupererObjet.id == id)
  
   },
  ajouterChoixProcLocal(){

   if(this.formData.tprocedure =="Engagement Bon de Commande"){
 var nouvelObjet = {
      ...this.formData,
      marche_id :this.macheid,
    
       };
      
this.ajouterChoixProcedure(nouvelObjet)
this.formData= {
tprocedure :""
}
this.$("#modalTypeEngagement").modal('hide');
 this.$("#modalFactureAjouterEngagementDirect").modal({
        backdrop: "static",
        keyboard: false
      });
   }
       
      else if(this.formData.tprocedure =="Engagement Direct"){
     var nouvelObjet1 = {
      ...this.formData,
      marche_id :this.macheid,
    
       };
this.ajouterChoixProcedure(nouvelObjet1)
this.formData= {
tprocedure : ""
}
       this.$("#modalTypeEngagement").modal('hide');
 this.$("#modatFactureAjouter").modal({
        backdrop: "static",
        keyboard: false
      });





      
      }
 },
ajouterFactureLocal(){
       
       var nouvelObjet = {
      ...this.formData1,
    fournisseur_id: this.AfficherFournisseur_id,
       	prix_propose_ht :this.totalMontantHT,
        prix_propose_ttc :this.montantHTt,
         taux :this.affcherTauxEnCours,
         tva :this.montantTva,
          	ua :this.detail_marche.objetUniteAdministrative.id,
    marche_id : this.macheid,
    objet_facture:this.detail_marche.objet
       };
      
this.ajouterFacture(nouvelObjet)

this.$("#modatFactureAjouter").modal('hide');
this.formData1= {
total:0,
total2:0,
total3:0,
total4:0,
total5:0,
total6:0,
total7:0,
total8:0,
total9:0,
total10:0,
       
numero_facture:"",
        objet_facture:"",
       
      
        
        typfacture_id:"",
           prix_propose_ht:"",
        prix_propose_ttc:"",
         date_facture:"",
         ua:"",
           tva:"",
           taux:"",

            designation:"",

 prix_unitaire:"",
         quantite:"",
           montantHT1:"",
           designation2:"",
            prix_unitaire2:"",
             quantite2:"",
         montantHT2:"",
           designation3:"",
           prix_unitaire3:"",
            quantite3:"",
             montantHT3:"",

 designation4:"",
           prix_unitaire4:"",
            quantite4:"",
             montantHT4:"",
              designation5:"",
           prix_unitaire5:"",
            quantite5:"",
             montantHT5:"",
              designation6:"",
           prix_unitaire6:"",
            quantite6:"",
             montantHT6:"",
              designation7:"",
           prix_unitaire7:"",
            quantite7:"",
             montantHT7:"",
              designation8:"",
           prix_unitaire8:"",
            quantite8:"",
             montantHT8:"",
              designation9:"",
           prix_unitaire9:"",
            quantite9:"",
             montantHT9:"",

 designation10:"",
           prix_unitaire10:"",
            quantite10:"",
             montantHT10:"",
 fournisseur_id:"",
 exonere:"",
       

        
      
};

    },
    ModifierFactureLocal(){
       
       var nouvelObjet = {
      ...this.formData1,
     
       fournisseur_id: this.AfficherFournisseur_id,
       	prix_propose_ht :this.totalMontantHT,
        prix_propose_ttc :this.montantHTt,
         taux :this.affcherTauxEnCours,
         tva :this.montantTva,
          	ua :this.detail_marche.objetUniteAdministrative.id,
      marche_id : this.macheid,
      objet_facture:this.detail_marche.objet
       };
      
this.modifierFacture(nouvelObjet)

this.$("#modatFactureModifier").modal('hide');


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