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
                            <label class="control-label">Décision CF </label>
                            <div class="controls">
                              <select v-model="editMandat.decision_cf">
                                <option value=""></option>
                              <option value="1">Viser</option>
                             <option value="2">Différer</option>
                             <option value="3">Réjeter</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                            <div class="control-group">
                            <label class="control-label">Motif CF </label>
                            <div class="controls">
                              <select v-model="editMandat.motif_c">
                             
                                 <option
                                  v-for="gpeua in motifDecisions"
                                  :key="gpeua.id"
                                  :value="gpeua.id"
                                >{{gpeua.libelle}}</option>
                               
                               
                              </select>
                           
                            </div>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editMandat.observation">
                              </textarea>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editMandat.date_val_mandat"/>
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
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
                            <label class="control-label">Décision CF </label>
                            <div class="controls">
                              <select v-model="editEngagement.decision_cf">
                                <option value="0">Attente</option>
                              <option value="1">Viser</option>
                             <option value="2">Différer</option>
                             <option value="3">Réjeter</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                            <div class="control-group">
                            <label class="control-label">Motif CF </label>
                            <div class="controls">
                              <select v-model="editEngagement.motif">
                             
                                 <option
                                  v-for="gpeua in motifDecisions"
                                  :key="gpeua.id"
                                  :value="gpeua.id"
                                >{{gpeua.libelle}}</option>
                               
                               
                              </select>
                           
                            </div>
                          </div>
                          <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editEngagement.observation">
                              </textarea>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editEngagement.date_motif"/>
                               <input type="hidden" class="span"  :value="recuperer"/>
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
                        <a data-toggle="tab" href="#tab1">INFORMATION</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">TYPE ENGAGEMENT </a>
                      </li>
                      
                      <li>
                        <a data-toggle="tab" href="#tab12">INFO FOURNISSEUR / IMPUTATION BUDGETAIRE</a>
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
                            <label class="control-label">Numero demande</label>

                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span"
                               
                              v-model="formData.numero_demande"
                              
                              />
                               <!-- <input
                                type="hidden"
                                class="span"
                               
                            :value="idBudgetaire"
                              
                              /> -->
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
                       
                       
                       
                      </tr>

                      <tr>
                        
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
                               <input
                                type="hidden"
                                class="span"
                               
                             v-model="formData.val"
                              />
                        </td>
                        
                       
                      </tr>
                  <tr>
                    

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
                            <label class="control-label">Type d'engagement direct</label>
                            <div class="controls">
                              <select v-model="formData.type_engagement_id" :readonly="veifEquipementExist">
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
                              <label class="control-label">Numero OP/AT</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
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
                         
                         
                      
                        
                       
                       
                      </tr>
                      <tr>
                            <td colspan=3>
                         <div class="control-group">
                            <label class="control-label">Autre type engagement</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.autre_engagement" :readonly="veifautreengagement"/>
                            </div>
                          </div>
                        </td>
                           <td>
                         <div class="control-group">
                            <label class="control-label">Date de reception dossier</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_reception_cf"/>
                            </div>
                          </div>
                        </td>
                             
                      </tr>
                    </div>
                    <!--ongle 3 -->


<!--ongle descriptif-->
                    <div id="tab12" class="tab-pane">
                      

                      
                        <tr>
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
                              <input type="text" class="span" v-model="formData.objet_facture" readonly/>
                               <input type="hidden" class="span" v-model="formData.id" readonly/>
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
                            
                             <select v-model="formData.bailler_id" class="span14">
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
                              <input type="number" class="span" :value="sommeMontant" readonly/>
                            </div>
                          </div>
                        </td>
                       
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
                      </tr>
                        <tr>
                        
                        
                       
                        
                        <td colspan="2">
                           <div class="control-group">
                            <label class="control-label">Ligne Budgetaire</label>
                            <div class="controls">
                              <select v-model="formData.ligne_budgetaire_id" class="span11">
                                <option
                                  v-for="fam in ligneBudgetaire(detail_marche.id)"
                                  :key="fam.id"
                                  :value="fam.economique_id"
                                >{{fam.afficheEconomique.code}}-{{fam.afficheEconomique.libelle}}</option>
                              </select>
                              
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">Code Budgetaire</label>
                            <div class="controls">
                              <input type="text" class="span11" :value="CodeBudgetaire" readonly/>
                            </div>
                          </div>
                        </td>
                       
                       
                      </tr>
                      <tr>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Numéro Facture</label>
                            <div class="controls">
                              <input type="text" class="span11" v-model="formData.numero_facture" readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Facture</label>
                            <div class="controls">
                              <input type="text" class="span11" v-model="formData.prix_propose_ttc" readonly/>
                            </div>
                          </div>
                        </td>
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
                        <a data-toggle="tab" href="#tab146">INFORMATION</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab145">TYPE ENGAGEMENT </a>
                      </li>
                      
                      <li>
                        <a data-toggle="tab" href="#tab144">INFO FOURNISSEUR / IMPUTATION BUDGETAIRE</a>
                      </li>
                     
                    </ul>
                  </div>
                 <div class="widget-content tab-content tailfenet">
                    <!--ongle identification-->
                    <div id="tab146" class="tab-pane active">
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
                            <label class="control-label">Numero demande</label>

                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span"
                               
                              v-model="editEngagement.numero_demande"
                              
                              />
                               <!-- <input
                                type="hidden"
                                class="span"
                               
                            :value="idBudgetaire"
                              
                              /> -->
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
                       
                       
                       
                      </tr>

                      <tr>
                        
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
                               <input
                                type="hidden"
                                class="span"
                               
                             v-model="editEngagement.val"
                              />
                        </td>
                        
                       
                      </tr>
                  <tr>
                    

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
                  </tr>
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab145" class="tab-pane">
                      

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
                            <label class="control-label">Type d'engagement direct</label>
                            <div class="controls">
                              <select v-model="editEngagement.type_engagement_id" :readonly="veifEquipementExist">
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
                              <label class="control-label">Numero OP/AT</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
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
                              <input type="text" class="span" v-model="formData.Bailleur" />
                            </div>
                          </div>
                        </td> -->
                       
                      </tr>
                      <tr>
                         
                         
                      
                        
                       
                       
                      </tr>
                      <tr>
                            <td colspan=3>
                         <div class="control-group">
                            <label class="control-label">Autre type engagement</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="editEngagement.autre_engagement" :readonly="veifautreengagement"/>
                            </div>
                          </div>
                        </td>
                           <td>
                         <div class="control-group">
                            <label class="control-label">Date de reception dossier</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="editEngagement.date_reception_cf"/>
                            </div>
                          </div>
                        </td>
                             
                      </tr>
                    </div>
                    <!--ongle 3 -->


<!--ongle descriptif-->
                    <div id="tab144" class="tab-pane">
                      

                      
                        <tr>
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
                              <input type="text" class="span" v-model="editEngagement.objet_depense" />
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
                            
                             <select v-model="editEngagement.bailler_id" class="span14">
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
                      </tr>
                        <tr>
                        
                        
                       
                        
                        <td colspan="2">
                           <div class="control-group">
                            <label class="control-label">Ligne Budgetaire</label>
                            <div class="controls">
                              <select v-model="editEngagement.ligne_budgetaire_id" class="span11">
                                <option
                                  v-for="fam in ligneBudgetaire(detail_marche.id)"
                                  :key="fam.id"
                                  :value="fam.economique_id.id"
                                >{{fam.afficheEconomique.code}}-{{fam.afficheEconomique.libelle}}</option>
                              </select>
                              
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">Code Budgetaire</label>
                            <div class="controls">
                              <input type="text" class="span11" :value="CodeBudgetaire" readonly/>
                               <input type="hidden" class="span" :value="montantCumulerModifier" />
                            </div>
                          </div>
                        </td>
                       
                       
                      </tr>
                       <tr>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Numéro Facture</label>
                            <div class="controls">
                              <input type="text" class="span11" v-model="editEngagement.numero_facture" readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Facture</label>
                            <div class="controls">
                              <input type="text" class="span11" v-model="editEngagement.montant_facture" readonly/>
                            </div>
                          </div>
                        </td>
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
        </div>
      </div>
    </div>


<!--//////////////////////////// fin FORMULAIRE modifier ENGAGEMENT-->





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
            <span class="label label-important">{{formatageSomme(parseFloat(sommeEgagementLigne(detail_marche.id)))}}</span>CUMUL ENGAGEMENT
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
                               <li class="active"><a data-toggle="tab" href="#tab100">Facture</a></li>
                                <li ><a data-toggle="tab" href="#tab10">Engagement</a></li>
                                <li><a data-toggle="tab" href="#tab20">Mandat</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab2">Liste des lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Contratualisation</a></li> -->
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                            <div id="tab10" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <!-- <div class="span4" align="right"    >
                                   
                                       <button class="btn btn-success" @click="afficherModalAjouter" >Demande Engagement</button>
                                         
  
                    </div> -->
                    
                                <table class="table table-bordered table-striped" v-if="detail_marche">
                                    <thead>
                                    <tr>

                                        <th>Année</th>
                                          <th title="numero de la demande">N°demande</th>
                                <th title="numero de l'engagement">N°engagement</th>
                                <th title="programme/dotation">Prog/Dotat</th>
                                <!-- <th>Action Programmatique</th> -->
                                <!-- <th>Activite</th> -->
                                <th title="unite administrative">Ua</th>
                                 <th>Imputation</th>
                                  <th title="ligne budgetaire">L.Budgetaire</th>
                                  <th>Montant</th>
                                  <th>Décision CF</th>
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                    class="odd gradeX"
                    v-for="(Engage, index) in afficheMarcheEngage(detail_marche.id)"
                    :key="Engage.id"
                  >
                    <template v-if="Engage.decision_cf == 1">
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.exercice_budget || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.numero_demande || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.numero_engage || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.afficheProgramme.code || 'Non renseigné'}}-{{Engage.afficheProgramme.libelle || 'Non renseigné'}}</td>
                    <!-- <td>{{Engage.afficheAction.code || 'Non renseigné'}}-{{Engage.afficheAction.libelle || 'Non renseigné'}}</td> -->
                     <!-- <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.afficheActivite.code || 'Non renseigné'}}-{{Engage.afficheActivite.libelle || 'Non renseigné'}}</td> -->
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.afficheUa.libelle || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.budget_general_id || 'Non renseigné'}}</td>
                     
                    <td @dblclick="afficherModalModifierEngagement(index)">{{ Engage.afficheLigneBudget.code || 'Non renseigné'}}-{{ Engage.afficheLigneBudget.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierEngagement(index)">{{formatageSomme(parseFloat(Engage.total_general)) || 0}}</td>
                  <td>
                        <button v-if="Engage.decision_cf == 1"  class="btn  btn-success" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      <span    >Viser</span>
                      
                      </button>
                       <button v-else-if="Engage.decision_cf == 2" class="btn  btn-warning" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Différer</span>
                      
                    
                      </button>
                        <button v-else-if="Engage.decision_cf == 3" class="btn  btn-danger" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Réjeter</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                     </template>
                      <template v-else>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.exercice_budget || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.numero_demande || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.numero_engage || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.afficheProgramme.code || 'Non renseigné'}}-{{Engage.afficheProgramme.libelle || 'Non renseigné'}}</td>
                    <!-- <td>{{Engage.afficheAction.code || 'Non renseigné'}}-{{Engage.afficheAction.libelle || 'Non renseigné'}}</td> -->
                     <!-- <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.afficheActivite.code || 'Non renseigné'}}-{{Engage.afficheActivite.libelle || 'Non renseigné'}}</td> -->
                    <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.afficheUa.libelle || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierEngagement(index)">{{Engage.budget_general_id || 'Non renseigné'}}</td>
                     
                    <td @dblclick="afficherModalModifierEngagement(index)">{{ Engage.afficheLigneBudget.code || 'Non renseigné'}}-{{ Engage.afficheLigneBudget.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierEngagement(index)">{{formatageSomme(parseFloat(Engage.total_general)) || 0}}</td>
                  <td>
                        <button v-if="Engage.decision_cf == 1"  class="btn  btn-success" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      <span    >Viser</span>
                      
                      </button>
                       <button v-else-if="Engage.decision_cf == 2" class="btn  btn-warning" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Différer</span>
                      
                    
                      </button>
                        <button v-else-if="Engage.decision_cf == 3" class="btn  btn-danger" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Réjeter</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalModifierMotifDemandeservice(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                     </template>
                       <td>
                        
                      <button v-if="Engage.decision_cf == 1" class="btn " @click="afficherModalAjouterMandat(Engage.id)" title="Ajouter Mandat">
                        <span>
                          <i class="icon icon-book"></i>
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
                                <!-- <div class="span4" align="right">
                                   
                                      <button class="btn btn-success" @click="afficherModalAjouterMandat" >Ajouter Mandat</button>

                    </div> -->
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
                                <th>Décision CF</th>
                                <th>Date validation mandat</th>

                                
                                
                                
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                   
                 <tr
                    class="odd gradeX"
                    v-for="(Manda, index) in afficheMandatMarcheTableau(detail_marche.id)"
                    :key="Manda.id"
                  >
                   
                    <td @dblclick="afficherModalModifierMandat(index)">{{Manda.num_bordereau || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierMandat(index)">{{Manda.ua_id || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierMandat(index)">{{Manda.section_id || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierMandat(index)">{{Manda.num_engagement || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierMandat(index)">{{Manda.num_mandat || 'Non renseigné'}}</td>
                   
                    <td @dblclick="afficherModalModifierMandat(index)">{{formatageSomme(parseFloat(Manda.montant_mandat))|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierMandat(index)">{{formaterDate(Manda.date_reception_cf) || 'Non renseigné'}}</td>
                         <td>
                        <button v-if="Manda.decision_cf == 1"  class="btn  btn-success" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      <span    >Viser</span>
                      
                      </button>
                       <button v-else-if="Manda.decision_cf == 2" class="btn  btn-warning" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      
                       <span  >Différer</span>
                      
                    
                      </button>
                        <button v-else-if="Manda.decision_cf == 3" class="btn  btn-danger" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      
                       <span  >Réjeter</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                    
                    <td @dblclick="afficherModalModifierMandat(index)">{{formaterDate(Manda.date_val_mandat) || 'Non renseigné'}}</td>
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
<div id="tab100" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                   
                                      <button class="btn btn-success" @click="afficherModalAjoutFacture" >Ajouter Facture</button>

                    </div>
                                <table class="table table-bordered table-striped">
                                    <thead>
                                    <tr>

                                         
                     <th>type_facture</th>
                    <th>numero_facture</th>
                    <th>objet_facture</th>
                    
                     <th>Ua</th>
                    <th>prix_unitaire</th>
                    <th>Quantité</th>
                    <th>Tva</th>
                    <th>prix_propose_ht</th>
                    <th>prix_propose_ttc</th>
        
                              
                                
                                
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                            
                 <tr
                    class="odd gradeX"
                    v-for="(factu, index) in afficheFactureTableau(detail_marche.objetUniteAdministrative.id)"
                    :key="factu.id"
                  >
                   <!-- <td @dblclick="afficherModalModifierFacture(index)">{{factu.id || 'Non renseigné'}}</td> -->
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objectTypefacture.libelle || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.numero_facture || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objet_facture || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{factu.objetUA.libelle || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_unitaire ))|| 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierFacture(index)">{{factu.quantite || 'Non renseigné'}}</td>
                        <td @dblclick="afficherModalModifierFacture(index)">{{factu.tva || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_propose_ht))|| 'Non renseigné'}}</td>
                     
                     <td @dblclick="afficherModalModifierFacture(index)">{{formatageSomme(parseFloat(factu.prix_propose_ttc))|| 'Non renseigné'}}</td>
                     
                     <td>
                        <button class="btn " @click="afficherModalAjouter(factu.id)" title="Ajouter engagement">
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
                           
                            


                        </div>
                    </div>

  
<div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau</a>
       
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
                  <label class="control-label">Num engagement</label>
                  <div class="controls">
                    <input
                type="text"
           v-model="formData.numero_engage"
                class="span"
                readonly
                
              />
                  </div>
                </div>
              </td>
                <td>
                 <div class="control-group">
            <label class="control-label">Num demande engagement</label>
            <div class="controls">
              <input
                type="text"
            v-model="formData.numero_demande"
                class="span"
                readonly
                
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
                :value="afficheUniteAdministrative(formData.ua_id)"
               
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
            
              :value="afficheSection(formData.section_id)"
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
            <label class="control-label">Num bordereau mandat</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.num_bordereau"
                class="span"
               
                
              />
            </div>
          </div>
              </td>
               <td>
                 <div class="control-group">
            <label class="control-label">Num du mandat</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.num_mandat"
                class="span"
             
                
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
              v-model="formData.montant_facture"
                class="span"
               readonly
            
              />
               <input
                type="hidden"
              v-model="formData.id"
                class="span"
               readonly
            
              />
               <input
                type="hidden"
              :value="idBudget"
                class="span"
               readonly
            
              />
              <input
                type="hidden"
              v-model="test.val"
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
               :value="formData.date_reception_cf"
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
                  <label class="control-label">Num engagement</label>
                  <div class="controls">
                    <input
                type="text"
           v-model="editMandat.num_engagement"
                class="span"
                readonly
                
              />
                  </div>
                </div>
              </td>
                <td>
                 <div class="control-group">
            <label class="control-label">Num demande engagement</label>
            <div class="controls">
              <input
                type="text"
            v-model="editMandat.num_demande"
                class="span"
                readonly
                
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
                :value="editMandat.ua_id"
               
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
            
              :value="editMandat.section_id"
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
            <label class="control-label">Num bordereau mandat</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMandat.num_bordereau"
                class="span"
               
                
              />
            </div>
          </div>
              </td>
               <td>
                 <div class="control-group">
            <label class="control-label">Num du mandat</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMandat.num_mandat"
                class="span"
             
                
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
              v-model="editMandat.montant_mandat"
                class="span"
               readonly
            
              />
               <input
                type="hidden"
              v-model="editMandat.id"
                class="span"
               readonly
            
              />
               <input
                type="hidden"
              :value="idBudget"
                class="span"
               readonly
            
              />
              <input
                type="hidden"
              v-model="test.val"
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
               :value="editMandat.date_reception_cf"
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
        <div class="modal-footer">
        <a
         @click.prevent="modifierModalMandatLocal(editMandat)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
      </div>
      
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->




<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="modatFactureModifier" class="modal hide taillemodal45">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier  Facture</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
          <tr>
              <td>
              
              <div class="control-group">
                <label class="control-label">type facture</label>
                <div class="controls">
                  <select v-model="editFacture.typfacture_id" class="span3" >
                    
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
                <label class="control-label">numero_facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editFacture.numero_facture"
                    class="span3"
                    
                  />
                </div>
              </div>
               </td>
             <td>
              <div class="control-group">
                <label class="control-label">prix_unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="editFacture.prix_unitaire"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantite</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="editFacture.quantite"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
          
             
            
            

          </tr>
           <tr>
               <td colspan="3"> 
              <div class="control-group">
                <label class="control-label">objet_facture</label>
                <div class="controls">
                 
                  <textarea rows="2" v-model="editFacture.objet_facture" class="span8">

                  </textarea>
                </div>
              </div>
               </td>
                <td>
              <div class="control-group">
                <label class="control-label">Date de la facture</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="editFacture.date_facture"
                   
                    class="span3"
                   
                  />
                </div>
              </div>
             
            </td>
            
            <!-- <td>
              
              <div class="control-group">
                <label class="control-label">acte_depense</label>
                <div class="controls">
                  <select v-model="editFacture.code_acte_depense" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td> -->
          
            

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Taux</label>
                <div class="controls">
                  <input
                    type="text"
                    :value="affcherTauxEnCours"
                   readonly
                    class="span3"
                   
                  />
                   <input
                    type="hidden"
                    :value="tauxArrondit"
                   
                    class="span3"
                   
                  />
                </div>
              </div>
             
            </td>
                 <td>
              <div class="control-group">
                <label class="control-label">Tva</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   :value="montantTvaModifier"
                    class="span3"
                    readonly
                  />
                </div>
              </div>
            </td>
           
             <!-- <td>
              <div class="control-group">
                <label class="control-label">montant_facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                 
                    class="span3"
                    
                  />
                </div>
              </div>
            </td> -->
             <td>
              <div class="control-group">
                <label class="control-label">prix_propose_ht</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   :value="montantHTModifier"
                    class="span3"
                    readonly
                  />
                </div>
              </div>
            </td>
             
            
              <td>
              <div class="control-group">
                <label class="control-label">prix_propose_ttc</label>
                <div class="controls">
                  <input
                    type="text"
                    :value="montantHTtModifier"
                   readonly
                    class="span3"
                   
                  />
                </div>
              </div>
             
            </td>
           
                 
          </tr>
         <tr>
          
             <td>
              
              <div class="control-group">
                <label class="control-label">Unite administrative</label>
                <div class="controls">
                 <input
                    type="text"
                    :value="detail_marche.objetUniteAdministrative.libelle"
                   readonly
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <!-- <td>
              
              <div class="control-group">
                <label class="control-label">Fournisseur</label>
                <div class="controls">
                  <select v-model="editFacture.entreprise_id" class="span3">
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td> -->
            
            
         </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ModifierFactureLocal(editFacture)"
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
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
          <tr>
              <td>
              
              <div class="control-group">
                <label class="control-label">type facture</label>
                <div class="controls">
                  <select v-model="formData.typfacture_id" class="span3" >
                    
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
                <label class="control-label">numero_facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.numero_facture"
                    class="span3"
                    
                  />
                </div>
              </div>
               </td>
             <td>
              <div class="control-group">
                <label class="control-label">prix_unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="formData.prix_unitaire"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Quantite</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="formData.quantite"
                    class="span3"
                    
                  />
                </div>
              </div>
            </td>
          
             
            
            

          </tr>
           <tr>
               <td colspan="3"> 
              <div class="control-group">
                <label class="control-label">objet_facture</label>
                <div class="controls">
                 
                  <textarea rows="2" v-model="formData.objet_facture" class="span8">

                  </textarea>
                </div>
              </div>
               </td>
                <td>
              <div class="control-group">
                <label class="control-label">Date de la facture</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_facture"
                   
                    class="span3"
                   
                  />
                </div>
              </div>
             
            </td>
            
            <!-- <td>
              
              <div class="control-group">
                <label class="control-label">acte_depense</label>
                <div class="controls">
                  <select v-model="formData.code_acte_depense" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td> -->
          
            

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Taux</label>
                <div class="controls">
                  <input
                    type="text"
                    :value="affcherTauxEnCours"
                   readonly
                    class="span3"
                   
                  />
                   <input
                    type="hidden"
                    :value="tauxArrondit"
                   
                    class="span3"
                   
                  />
                </div>
              </div>
             
            </td>
                 <td>
              <div class="control-group">
                <label class="control-label">Tva</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   :value="montantTva"
                    class="span3"
                    readonly
                  />
                </div>
              </div>
            </td>
           
             <!-- <td>
              <div class="control-group">
                <label class="control-label">montant_facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                 
                    class="span3"
                    
                  />
                </div>
              </div>
            </td> -->
             <td>
              <div class="control-group">
                <label class="control-label">prix_propose_ht</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   :value="montantHT"
                    class="span3"
                    readonly
                  />
                </div>
              </div>
            </td>
             
            
              <td>
              <div class="control-group">
                <label class="control-label">prix_propose_ttc</label>
                <div class="controls">
                  <input
                    type="text"
                    :value="montantHTt"
                   readonly
                    class="span3"
                   
                  />
                </div>
              </div>
             
            </td>
           
                 
          </tr>
         <tr>
          
             <td>
              
              <div class="control-group">
                <label class="control-label">Unite administrative</label>
                <div class="controls">
                 <input
                    type="text"
                    :value="detail_marche.objetUniteAdministrative.libelle"
                   readonly
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
             <!-- <td>
              
              <div class="control-group">
                <label class="control-label">Fournisseur</label>
                <div class="controls">
                  <select v-model="formData.entreprise_id" class="span3">
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td> -->
          
            
         </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterFactureLocal(formData)"
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
       total_general:0,
       montant_tresor:0,
montant_don:0,
montant_emprunt:0,
type_procedure_id:"",
type_engagement_id:"",
val:0
      },
       editEngagement: {
       

      },
      editFacture:{},
             editMandat:{}  ,
             test:{
               val:0
               },
             editEngagementAutre:{
               motif:0,
               date_motif:"",
               observation:"",
                 total_general:0,
       montant_tresor1:0,
montant_don1:0,
montant_emprunt1:0,
             },
             
             detail_marche:{

 numero_engage:"",
  total_general:0,
       montant_tresor:0,
montant_don:0,
montant_emprunt:0,

val:0,
        exercice_budget:"",
        budget_general_id:"",
        programme_id:"",
        action_id:"",
        activite_id:"",
      
        ua_id:"",
        grd_nature_id:"",
        type_procedure_id:"",
        ref_juridique:"",

        type_engagement_id:"",
        mod_paiement_engage:"",
        numero_cc_id:"",
        adresse_entreprise:"",

         nom_entreprise:"",
       
        bailler_id:"",
        objet_depense:"",
        piece_justificative:"",

         motif:"",
        date_motif:"",
        observation:"",
        ligne_budgetaire_id:"",
        section_id:"",
        marche_id:"",
        // montant_a_paye:"",
        //  montant_cumul:"",
         ligne_id:"",
        
         date_reception_cf:"",
          decision_cf:"",
           numero_demande:"",
              numero_op:"",
              autre_engagement:"",
}
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
            ...mapGetters("bienService", [ 'acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
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
      "stockageArticle",
      "getFacture"
      
    ]),

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
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
 ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),

 veifuaExist() {
      return this.formData.typeuniteadminis_id == "";
    },

   afficheUniteAdministrative() {
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

 afficheSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_section;
      }
      return 0
        }
      };
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
montantHT() {
      const val =  parseFloat(this.formData.prix_unitaire) * parseFloat(this.formData.quantite);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    
montantTva() {
      const val =   parseFloat(this.montantHT) * parseFloat(this.tauxArrondit);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
   montantHTt() {
      const val =    parseFloat(this.montantHT) + parseFloat(this.montantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
   

afficheFactureTableau() {
      return id => {
        if (id != null && id != "") {
          return this.getFacturePersonnaliser.filter(
            element => element.ua == this.detail_marche.objetUniteAdministrative.id
          );
        }
      };
    },

montantHTModifier() {
      const val =  parseFloat(this.editFacture.prix_unitaire) * parseFloat(this.editFacture.quantite);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantTvaModifier() {
      const val =   parseFloat(this.montantHTModifier) * parseFloat(this.tauxArrondit);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

 montantHTtModifier() {
      const val = parseFloat(this.montantHTModifier) + parseFloat(this.montantTvaModifier);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },





















engagementNonMandat(){
return this.getEngagementPersonnaliser1.filter(item=>item.val==1)
},


 


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
     AfficherNumeroEngagement() {
      
      const norme = this.getEngagementPersonnaliser1.find(normeEquipe => normeEquipe.id == this.formData.num_engagement);

      if (norme) {
        return norme.numero_demande;
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

affichetresor2() {
      const val = parseInt(this.editEngagementAutre.montant_tresor1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
  afficheDon2() {
      const val = parseInt(this.editEngagementAutre.montant_don1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    afficheEmprunt2() {
      const val = parseInt(this.editEngagementAutre.montant_emprunt1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

 montantDisponibleAutreligne() { 
      const val = parseFloat(this.sommeMontantAutreLigne) + parseFloat(this.afficheRecupere);
      return parseFloat(val).toFixed(0);
    },


// restePayeMarche() { 
//       const val = parseFloat(this.MontantMarche) - parseFloat(this.montantDisponibleAutreligne);
//       return parseFloat(val).toFixed(2);
//     },

veifEquipementExist() {
      return this.formData.type_procedure_id !== "0";
    },
    veifautreengagement() {
      return this.formData.type_engagement_id !== "4";
    },



recuperer() {
      const val = parseInt(this.editEngagement.decision_cf);
      return parseInt(val).toFixed(0);
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
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.formData.ligne_budgetaire_id);

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
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getEngagementPersonnaliser.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },

afficheMarcheEngage() {
      return id => {
        if (id != null && id != "") {
          return this.getEngagementPersonnaliser.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },


afficheMandatMarcheTableau() {
      return id => {
        if (id != null && id != "") {
          return this.mandats.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },


  idObjetModifierEngagement() {
      const qtereel = this.getEngagementPersonnaliser1.find(
        qtreel => qtreel.id == this.formData.num_engagement,
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
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
                "supprimerMandat",
                "ajouterFacture",
                "modifierFacture",
                "supprimerFacture"
               
               
            ]),
 ...mapActions("uniteadministrative", [
               
                "modifierMontantBudgetaire"
            ]),
            


 ajouterFactureLocal(){
       
       var nouvelObjet = {
      ...this.formData,
     
       	prix_propose_ht :this.montantHT,
        prix_propose_ttc :this.montantHTt,
         taux :this.affcherTauxEnCours,
         tva :this.montantTva,
          	ua :this.detail_marche.objetUniteAdministrative.id,
    
       };
      
this.ajouterFacture(nouvelObjet)

this.$("#modatFactureAjouter").modal('hide');
this.formData= {

 numero_facture:"",
  objet_facture:"",
       prix_propose_ttc:0,
prix_propose_ht:0,
date_facture:"",

ua:"",
        montant_facture:0,
        typfacture_id:"",
        programme_id:"",
        	tva:0,
       

        
      
};

    },



 ModifierFactureLocal(){
       
       var nouvelObjet = {
      ...this.editFacture,
     
       	prix_propose_ht :this.montantHTModifier,
        prix_propose_ttc :this.montantHTtModifier,
         taux :this.affcherTauxEnCours,
         tva :this.montantTvaModifier,
          	ua :this.detail_marche.objetUniteAdministrative.id,
      
       };
      
this.modifierFacture(nouvelObjet)

this.$("#modatFactureModifier").modal('hide');
this.editFacture= {

 numero_facture:"",
  objet_facture:"",
       prix_propose_ttc:0,
prix_propose_ht:0,
date_facture:"",

ua:"",
        montant_facture:0,
        typfacture_id:"",
        programme_id:"",
        	tva:0,
       

        
      
};

    },






























 ajouterMandatLocal(){
       
       var nouvelObjet = {
      ...this.formData,
     num_demande:this.formData.numero_demande,
       	num_engagement :this.formData.numero_engage,
        section_id :this.afficheSection(this.formData.section_id),
         montant_mandat :this.formData.montant_facture,
         date_reception_cf :this.formData.date_reception_cf,
         ua_id :this.afficheUniteAdministrative(this.formData.ua_id),
       marche_id : this.detail_marche.id,
      engagement_id : this.formData.id,
       };
      
this.ajouterMandat(nouvelObjet)
this.$("#exampleModalMandat").modal('hide');
this.formData = {

 numero_engage:"",
  section_id:"",
       montant_facture:"",
date_reception_cf:"",
date_facture:"",

ua_id:"",
        id:"",
        num_bordereau:"",
        num_engagement:"",
            num_mandat:"",
            
       

        
      
};

    },


afficherModalModifierMotifMandat(index) {
      this.$("#exampleModalMotifMandat").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editMandat = this.afficheMandatMarcheTableau(this.detail_marche.id)[index];
      },

afficherModalAjoutFacture() {
      this.$("#modatFactureAjouter").modal({
        backdrop: "static",
        keyboard: false
      });
    },

afficherModalModifierFacture(index) {
      this.$("#modatFactureModifier").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editFacture = this.afficheFactureTableau(this.detail_marche.objetUniteAdministrative.id)[index];
    },





 afficherModalAjouterMandat(id) {
      this.$("#exampleModalMandat").modal({
        backdrop: "static",
        keyboard: false
      });
       this.formData = this.afficheMarcheEngage(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
    },
  retourListeEntreprise(){
                 this.$router.push({ name: 'executionMarche' })
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
// var nouvelObjet1 = {
//       ...this.editMandat,
//     	num_engagement :this.numeroEngageModifier,
//         section_id :this.AfficherSectionModifier,
//          montant_mandat :this.MontantMandatModifier,
//          date_reception_cf :this.dateReceptionModifier,
//          ua_id :this.AfficherUniteModifier,
//        marche_id : this.detail_marche.id,
//        };
//  var objetPourModifierQuantiteEnStock2 = {
//         id: this.idObjetModifierEngagement,
//         modVal: this.sommeEngagement,
//       }
      
//       this.modifierEngagement_val(objetPourModifierQuantiteEnStock2)
      this.modifierMandat(this.editMandat)
      this.$('#ModifierModalMandat').modal('hide');
      this.$('#exampleModalMotifMandat').modal('hide');
  //  }
      
    },

         afficherModalAjouter(id) {
          
      this.$("#AjouterEngage").modal({
        backdrop: "static",
        keyboard: false
      });
     
       this.formData = this.afficheFactureTableau(this.detail_marche.objetUniteAdministrative.id).find(recupererObjet => recupererObjet.id == id)
  
   },

     
//      nouvelLigneEngagementLocal(){
// //    if( this.MontantMarche < this.montantDisponible)
// //    {
// // alert("Verification : Le Montant d'engagement est superieure au montant du marché")
// //    }
// //    else{
// var nouvelObjet1 = {
//       ...this.editEngagementAutre,
//       exercice_budget :this.anneeAmort,
//        	numero_cc_id :this.NumeroFournisseur,
//         nom_entreprise :this.nomFournisseur,
//          adresse_entreprise :this.AdresseFournisseur,
//          total_general :this.sommeMontantAutreLigne,
//          budget_general_id :this.CodeBudgetaire,
//           montant_cumul:this.montantDisponibleAutreligne,
//           // montant_tresor:this.afficheTresor,
//           // montant_don:this.afficheDon,
//           // montant_emprunt:this.afficheemprunt,
//           montant_a_paye: this.restePayeMarche,
//           montant_don:this.afficheDon2,
//           montant_emprunt:this.afficheEmprunt2,
//          montant_tresor :this.afficheTresor2,
//          marche_id : this.detail_marche.id,
        
       
//        };
//       this.ajouterEngagement(nouvelObjet1)
//       this.$('#nouveauEngagement').modal('hide');
//   //  }
      
//     },
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
         montant_tresor :this.afficheTresor,
         val : this.recuperer,
 numero_facture:this.formData.numero_facture,
      montant_facture:this.formData.prix_propose_ttc,
      	objet_depense : this.formData.objet_facture,
      	facture_id:this.formData.id
       
       };
      this.modifierEngagement(nouvelObjet1)
      this.$('#ModifierEngage').modal('hide');
      this.$('#exampleModalMotif').modal('hide');
      
  //  }
      
    },
    
 ajouterEngagementLocal(){
      if (this.formData.prix_propose_ttc < this.sommeMontant){
alert("Le montant engagé est superieure au montant de la facture")
      }
      else if (this.formData.prix_propose_ttc > this.sommeMontant)
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
      else
      {
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
       ligne_id:this.idBudgetaire,
         numero_facture:this.formData.numero_facture,
      montant_facture:this.formData.prix_propose_ttc,
      	objet_depense : this.formData.objet_facture,
      	facture_id:this.formData.id
       };
this.ajouterEngagement(nouvelObjet)
this.$("#AjouterEngage").modal('hide');
this.formData= {

 numero_engage:"",
  total_general:0,
       montant_tresor:0,
montant_don:0,
montant_emprunt:0,

val:0,
        exercice_budget:"",
        budget_general_id:"",
        programme_id:"",
        action_id:"",
        activite_id:"",
      
        ua_id:"",
        grd_nature_id:"",
        type_procedure_id:"",
        ref_juridique:"",

        type_engagement_id:"",
        mod_paiement_engage:"",
        numero_cc_id:"",
        adresse_entreprise:"",

         nom_entreprise:"",
       
        bailler_id:"",
        objet_depense:"",
        piece_justificative:"",

         motif:"",
        date_motif:"",
        observation:"",
        ligne_budgetaire_id:"",
        section_id:"",
        marche_id:"",
        // montant_a_paye:"",
        //  montant_cumul:"",
         ligne_id:"",
         
         date_reception_cf:"",
          decision_cf:"",
           numero_demande:"",
              numero_op:"",
              autre_engagement:"",
};

      }
      

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
      this.editEngagement = this.afficheMarcheEngage(this.detail_marche.id)[index];
      },

 afficherModalModifierEngagement(index) {
      this.$("#ModifierEngage").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editEngagement = this.afficheMarcheEngage(this.detail_marche.id)[index];
    },

afficherModalModifierMandat(index) {
      this.$("#ModifierModalMandat").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editMandat = this.afficheMandatMarcheTableau(this.detail_marche.id)[index];
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
    .taillemodal45 {
        width: 1200px;
        margin: 0 -680px;
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

    }
    
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
       .taillemodal {
        width: 1200px;
        margin: 0 -680px;
    }
</style>
