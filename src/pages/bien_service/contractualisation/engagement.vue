Validation CF
<template>
  	
        <div class="container-fluid">



 <!--///////////////////////////////////////// DEBUT TABLEAU MANDAT PAR BON DE COMMANDE//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU MANDAT PAR BON DE COMMANDE//////////////////////////////-->
  <!--///////////////////////////////////////// debut modal MANDAT PAR BON DE COMMANDE //////////////////////////////-->




     <div id="exampleModalAjouteMandionatApresLiquidat" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Mandat </h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
        
            <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab189">INDENTIFICATION</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab289">DESCRIPTION DE LA DEMANDE D'ENGAGEMENT</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab2892">REFERENCE DU FOURNISSEUR OU BENEFICIAIRE</a>
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
                         

                              <input    type="text"   class="span3" readonly  v-model="editLiquidation.exo_id" />                
                                                    </td>
                         <td>
                          <label class="control-label">Section</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficherSection(editLiquidation.section_id)" />                
                             
                        </td>
                        <td>
                          <label class="control-label">Programme</label>
                          
                              <input    type="text"   class="span3" readonly :value="afficheProgrammeLibelle(afficheProgrammeId(editLiquidation.marche_id))" />                
                             
                        </td>
                        <td>
                          <label class="control-label">Action</label>
                          
                              <input    type="text"   class="span5" readonly  :value="afficheActionLibelle(afficheActionId(editLiquidation.marche_id))"/>                              
                             
                        </td>
                        
                       
                        
                      </tr>
                       <tr>
                          <td>
                          <label class="control-label">Activite</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficheActiviteLibelle(afficheActiviteId(editLiquidation.marche_id))" />                              
                             
                        </td>
                         <td>
                          <label class="control-label">Unite d'administrative</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheUALibelle(afficheUAId(editLiquidation.marche_id))" />                              
                             
                        </td>
                          <td>
                          <label class="control-label">Nature de depense</label>
                          
                              <input    type="text"   class="span3" readonly :value="afficheGrandNatureLibelle(afficheGrandNatureId(editLiquidation.marche_id))"  />                
                            
                        </td>
                        <td>
                          <label class="control-label">Plan économique</label>
                          
                              <input    type="text"   class="span5" readonly  :value="affichePlanEconomiqueLibelle(affichePlanEconomiqueId(editLiquidation.marche_id))" />                
                             
                                              
                        </td>
                       
                        
                      </tr>
                      <tr>
                        <td>
                        <label class="control-label">N° Bon Manuel</label>
                          
                              <input    type="text" readonly  class="span3" v-model="editLiquidation.numero_bon_manuel"   />                
                             
                        </td>
                          <td>
                          <label class="control-label">N° Demande</label>
                          
                              <input    type="text"   class="span4" readonly v-model="editLiquidation.numero_demande" />                
                             
                        </td>
                        <td colspan="2">
                          <label class="control-label">Imputation Budgetaire</label>
                          
                              <input    type="text"   class="span6" readonly  :value="detail_marche.imputation" />                
                             
                                              
                        </td>
                       
                        
                        
                      </tr>
                        
                     
                    </div>
                    <div id="tab289" class="tab-pane ">
                      <tr>
                          <td colspan="2">
                         
                         <label class="control-label">Objet du marche</label>
                          
                              <input    type="text"   class="span8" readonly  :value="detail_marche.objet"  />                
                             
                                             
                        </td>
                         <td>
                          <label class="control-label">Banque</label>
                          
                              <input    type="text"   class="span3"  readonly  :value="afficheLibelleBanque(afficheIdBanque(afficheIdCompteBancaire(editLiquidation.marche_id)))" />                
                             
                        </td>
                         <td>
                          <label class="control-label">Numero compte bancaire</label>
                          
                              <input    type="text"   class="span4"  readonly :value="afficheLibelleCompteBancaire(afficheIdCompteBancaire(editLiquidation.marche_id))" />                
                             
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
                          <td colspan="">
                          <label class="control-label">Mode de reglement</label>
                          
                              <input    type="text"   class="span4" readonly   :value="afficheLibelleModePaiemnt(afficheIdModePaiement(editLiquidation.marche_id))" />                
                             
                        </td>
                         <td colspan="">
                          <label class="control-label">Numero demande engagement</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheDemandeEngagement(editLiquidation.marche_id)" />                
                             
                        </td>
                        <td colspan="">
                          <label class="control-label">Numero engagement</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficheNumeroEngagement(editLiquidation.marche_id)"  />                
                             
                        </td>
                        <td colspan="">
                          <label class="control-label">Numero bordereau engagement</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheNumeroBordeauEngagement(editLiquidation.marche_id)"  />                
                             
                        </td>
                        
                      </tr>
                          <tr>
                            <td>
                               <label class="control-label">Numero OP/AT</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheNumeroOPATEngagement(editLiquidation.marche_id)"  />  
                            </td>
                             <td>
                               <label class="control-label">Réf. Engagement  juridique</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheReferenceEngagement(editLiquidation.marche_id)"  />  
                            </td>
                             <td>
                               <label class="control-label">Numero mandat</label>
                          
                              <input    type="text"   class="span3"   v-model="formDataMadat.numero_mandat" required />  
                            </td>
                             <td>
                               <label class="control-label">Numero Bordereau mandat</label>
                          
                              <input    type="text"   class="span4"   v-model="formDataMadat.numero_bordereau"  required/>  
                            </td>
                          </tr>
                     

                    </div>
                     <div id="tab2892" class="tab-pane ">
                     <tr>
                        <td colspan="">
                         
                         <label class="control-label">Numéro</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheNumeroFournisseur(afficheIdFournisseur(editLiquidation.marche_id))" />                
                             
                                             
                        </td>
                        <td>
                          <label class="control-label">Nom</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheNomFournisseur(afficheIdFournisseur(editLiquidation.marche_id))" />                
                             
                        </td>
                          <td>
                          <label class="control-label">Telephone</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheTelephoneFournisseur(afficheIdFournisseur(editLiquidation.marche_id))" />                
                             
                        </td>
                        <td>
                          <label class="control-label">Adresse</label>
                          
                              <input    type="text"   class="span3" readonly :value="afficheAdresseFournisseur(afficheIdFournisseur(editLiquidation.marche_id))"  />                
                             
                        </td>
                       
                        
                      </tr>
                      <tr>
                        <td>
                           <label class="control-label">Trésor</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheMontantTresor(editLiquidation.marche_id)" />                
                             
                        </td>
                         <td>
                           <label class="control-label">Don</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheMontantDon(editLiquidation.marche_id)" />                
                             
                        </td>
                         <td>
                           <label class="control-label">Emprunt</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheMontantEmprunt(editLiquidation.marche_id)" />                
                             
                        </td>
                         <td>
                           <label class="control-label">Total</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficheMontantAutorise(editLiquidation.marche_id)" />                
                             
                        </td>
                      </tr>
                           <tr>
                              <td>
                          <label class="control-label">Bailleur</label>
                          
                              <input    type="text"   class="span4" readonly :value="afficheLibelleBailleur(afficheIdBailleur(editLiquidation.marche_id))"  />                
                             
                        </td>
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
                              <input type="text" class="span4" :value="montantCumulerLiquidationMandat" readonly/>
                            </div>
                          </div>
                        </td>
                                               <td>
                          <div class="control-group">
                            <label class="control-label">Dotation disponible</label>
                            <div class="controls">
                              <input type="text" class="span3" :value="dotationDisponibleAnterieure" readonly/>
                            </div>
                          </div>
                        </td>
                          
                          <div class="control-group">
                            <!-- <label class="control-label">Montant marché</label> -->
                            <div class="controls">
                              <input type="hidden" class="span4" v-model="montantMarcheAvecAvenant" readonly/>
                            </div>
                          </div>
                        
                       
                         
                         <!-- <label class="control-label">Crédit autorisé</label> -->
                          
                              <input    type="hidden"   class="span4" :value="afficheMontantAutorise(editLiquidation.marche_id)" readonly   />                
                             
                                              
                      
                        
                          <!-- <label class="control-label">Cumul des demandes</label> -->
                          <input    type="hidden"   class="span4" readonly :value="montantCumulerLiquidationMandat"  />
                              <input    type="hidden"   class="span4" readonly :value="sommeEgagementLigne(detail_marche.id)"  />                
                             
                        
                       
                          <!-- <label class="control-label">Disponible budgetaire</label> -->
                          
                              <input    type="hidden"   class="span4" readonly :value="restePayeMarche"  />                
                             
                      
                      
                       
                        
                      </tr>
                     <tr>
                            
                          <!-- <label class="control-label">Dotation disponible anterieure</label> -->
                          
                              <input    type="hidden"   class="span4" readonly :value="dotationDisponibleAnterieure"  />                
                             
                       
                        
                         
                         <!-- <label class="control-label">Montant marché</label> -->
                          
                              <input    type="hidden"   class="span4" :value="montantMarcheAvecAvenant" readonly   />                
                             
                                              
                        
                       
                          <!-- <label class="control-label">Disponible marché</label> -->
                          <input    type="hidden"   class="span4" readonly :value="restePayeMarcheMandat"  />
                              
                       
                         
                      
                       
                        
                      </tr>

                    </div>
                  </div>
            </div>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterMandatLiquidation(formDataMadat)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>


 <!--///////////////////////////////////////// FIN TABLEAU MANDAT PAR BON DE COMMANDE//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU MANDAT PAR BON DE COMMANDE//////////////////////////////-->
  <!--///////////////////////////////////////// FIN modal MANDAT PAR BON DE COMMANDE //////////////////////////////-->










  <!--///////////////////////////////////////// DEBUT TABLEAU LIQUIDATION//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU LIQUIDATION//////////////////////////////-->
  <!--///////////////////////////////////////// debut modal LIQUIDATION //////////////////////////////-->






<!-- DEBUT AJOUT LIQUIDATION -->


 
  <!--///////////////////////////////////////// FIN  TABLEAU LIQUIDATION//////////////////////////////-->
<!--///////////////////////////////////////// FIN  TABLEAU LIQUIDATION//////////////////////////////-->
  <!--///////////////////////////////////////// FIN  modal LIQUIDATION //////////////////////////////-->


























<!--///////////////////////////////////////// DEBUT TABLEAU REALITE SERVICE FAIT//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU REALITE SERVICE FAIT//////////////////////////////-->
  <!--///////////////////////////////////////// debut modal REALITE SERVICE FAIT //////////////////////////////-->
   
   <!--///////////////////////////////////////// fin TABLEAU REALITE SERVICE FAIT//////////////////////////////-->
<!--///////////////////////////////////////// fin TABLEAU REALITE SERVICE FAIT//////////////////////////////-->
  <!--///////////////////////////////////////// fin modal REALITE SERVICE FAIT //////////////////////////////-->























            <!--///////////////////////////////////////// DEBUT TABLEAU AVENANT//////////////////////////////-->

<!--///////////////////////////////////////// DEBUT TABLEAU AVENANT//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU AVENANT//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU AVENANT//////////////////////////////-->
  <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModalAvenant" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Avenant</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Marché</label>
            <div class="controls">
              <input
                type="text"
                :value="afficheNumeroMarcheAttribuer(detail_marche.id)"
                
                class="span"
               readonly
              />
            </div>
            </div>
            <div class="control-group">
            <label class="control-label">Type Acte finnancier</label>
            <div class="controls">
              <select v-model="formData.type_acte_financier">
                      <option
                        v-for="typeUniteA in typeActeEffetFinanciers"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
            </div>
            </div>
              <div class="control-group">
            <label class="control-label">Numero avenant</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.numero_avenant"
                class="span"
               
              />
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">Objet</label>
            <div class="controls">
              <textarea rows="2"  v-model="formData.objet_avenant"  class="span" type="text">

              </textarea>
             
             
              
            </div>
          </div>
         
          <div class="control-group">
            <label class="control-label">Montant</label>
            <div class="controls">
              <input
                type="number"
                v-model="formData.montant_avenant"
                class="span"
               
              />
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">Date avenant</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_avenant"
                class="span"
               
              />
            </div>
          </div>
            
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterTypeTexteLocal"
          class="btn btn-primary"
          href="#"
        
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

 <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModalAvenant" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Avenant</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Marché</label>
            <div class="controls">
            <input
                type="text"
                :value="afficheNumeroMarcheAttribuer(detail_marche.id)"
                
                class="span"
               readonly
              />
            </div>
          </div>
           <div class="control-group">
            <label class="control-label">Type Acte finnancier</label>
            <div class="controls">
              <select v-model="editAvenant.type_acte_financier">
                      <option
                        v-for="typeUniteA in typeActeEffetFinanciers"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
            </div>
            </div>
              <div class="control-group">
            <label class="control-label">Numero avenant</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAvenant.numero_avenant"
                class="span"
               
              />
            </div>
          </div>
             <div class="control-group">
            <label class="control-label">Objet</label>
            <div class="controls">
               <textarea rows="2"  v-model="editAvenant.objet_avenant"  class="span" type="text">

              </textarea>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label">Montant</label>
            <div class="controls">
              <input
                type="number"
                v-model="editAvenant.montant_avenant"
                class="span"
               
              />
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">Date avenant</label>
            <div class="controls">
              <input
                type="date"
                v-model="editAvenant.date_avenant"
                class="span"
               
              />
            </div>
          </div>
           
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal(editAvenant)"
          class="btn btn-primary"
          href="#"
        
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    
<!--///////////////////////////////////////// FIN TABLEAU AVENANT//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU AVENANT//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU AVENANT//////////////////////////////-->



<!--///////////////////////////////////////// DEBUT TABLEAU TYPE PROCEDURE//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU TYPE PROCEDURE//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU TYPE PROCEDURE//////////////////////////////-->

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

<!--///////////////////////////////////////// FIN TABLEAU TYPE PROCEDURE//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU TYPE PROCEDURE//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU TYPE PROCEDURE//////////////////////////////-->





<!--///////////////////////////////////////// DEBUT TABLEAU ENGAGEMENT//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU ENGAGEMENT//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU ENGAGEMENT//////////////////////////////-->
<!--//////////////////////////// FORMULAIRE Modifier ENGAGEMENT-->

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
                            :value="CodeGdeNatureDep(detail_marche.gdenature_id)"
                              
                              />
                          
                           <input
                                type="hidden"
                                class="span"
                               
                             :value="detail_marche.id"
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
                            :value="afficheractivite(detail_marche.activite_id)"
                              
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
                            :value="afficherUniteAdmin(detail_marche.unite_administrative_id)"
                              
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
                                  v-for="fam in ligneBudgetaire(detail_marche.id)"
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
                              <input type="text" class="span4" :value="dotationInite(detail_marche.imputation).Dotation_Initiale" readonly/>
                            </div>
                          </div>
                        </td>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Cumul engagements antérieurs </label>
                            <div class="controls">
                              <input type="text" class="span4" :value="sommeEgagementLigne(detail_marche.id)" readonly/>
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
                              <input type="text" class="span4" :value="restePayeMarche" readonly/>
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
<!--///////////////////////////////////////// FIN TABLEAU ENGAGEMENT//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU ENGAGEMENT//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU ENGAGEMENT//////////////////////////////-->





<!--///////////////////////////////////////// DEBUT TABLEAU MANDAT//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU MANDAT//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU MANDAT//////////////////////////////-->

<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="ModifierModalMandat" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Mandat </h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
        
            <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1894">INDENTIFICATION</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2894">DESCRIPTION DE LA DEMANDE D'ENGAGEMENT</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab28924">REFERENCE DU FOURNISSEUR OU BENEFICIAIRE</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">Autres Information</a>
                      </li> -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <div id="tab1894" class="tab-pane active">
                      <tr>
                        <td>
                          <label class="control-label">Exercice Budgetaire</label>
                         
                              <input    type="text"   class="span3" readonly   :value="anneeAmort" />                
                             
                        </td>
                         <td>
                          <label class="control-label">Section</label>
                          
                              <input    type="text"   class="span5" readonly  :value="afficherSection(editMandat.section_id)" />                
                              <input   type="hidden"  class="span4"    readonly  v-model="editMandat.facture_id"                      />
                        </td>
                        <td>
                          <label class="control-label">Programme</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficheProgrammeLibelle(editMandat.programme_id)" />                
                             
                        </td>
                        <td>
                          <label class="control-label">Action</label>
                          
                              <input    type="text"   class="span4" readonly   :value="afficheActionLibelle(editMandat.action_id)"/>                              
                             <input
                                type="hidden"
                                class="span"
                               
                             :value="detail_marche.id"
                              />
                               <input
                                type="hidden"
                                class="span"
                               
                             :value="montantMarcheAvecAvenant"
                              />
                               <input
                                type="hidden"
                                class="span"
                               
                             v-model="editMandat.val"
                              />
                        </td>
                        
                       
                        
                      </tr>
                       <tr>
                          <td>
                          <label class="control-label">Activite</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficheActiviteLibelle(detail_marche.activite_id)" />                              
                             
                        </td>
                         <td>
                          <label class="control-label">Unite d'administrative</label>
                          
                              <input    type="text"   class="span5" readonly   :value="afficherUniteAdmin(detail_marche.unite_administrative_id)" />                              
                             
                        </td>
                          <td>
                          <label class="control-label">Nature de depense</label>
                          
                              <input    type="text"   class="span3" readonly  :value="CodeGdeNatureDep(detail_marche.gdenature_id)"  />                
                            
                        </td>
                        <td>
                          <label class="control-label">Plan économique</label>
                          
                              <input    type="text"   class="span4" readonly  :value="affichePlanEconomiqueLibelle(editMandat.ligne_id)" />                
                              <input
                                type="hidden"
                                class="span4"
                               
                            :value="idBudgetaire"
                                              />
                        </td>
                       
                        
                      </tr>
                      <tr>
                        <td>
                        <label class="control-label">N° Bon Manuel</label>
                          
                              <input    type="text" readonly  class="span3" v-model="editMandat.numero_demande"   />                
                             
                        </td>
                          <td>
                          <label class="control-label">N° Demande</label>
                          
                              <input    type="text"   class="span4" readonly v-model="editMandat.numero_demande_liquidation" />                
                             
                        </td>
                        <td colspan="2">
                          <label class="control-label">Imputation Budgetaire</label>
                          
                              <input    type="text"   class="span6" readonly  :value="detail_marche.imputation" />                
                             
                                              
                        </td>
                       
                        
                        
                      </tr>
                        
                     
                    </div>
                    <div id="tab2894" class="tab-pane ">
                      <tr>
                          <td colspan="2">
                         
                         <label class="control-label">Objet du marche</label>
                          
                              <input    type="text"   class="span7" readonly  :value="detail_marche.objet"  />                
                             
                                             
                        </td>
                         <td>
                          <label class="control-label">Banque</label>
                          
                              <input    type="text"   class="span4"  readonly  :value="afficheLibelleBanque(afficheIdBanque(afficheIdCompteBancaire(editMandat.marche_id)))" />                
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
                        </td>
                         <td>
                          <label class="control-label">Numero compte bancaire</label>
                          
                              <input    type="text"   class="span4"  readonly :value="afficheLibelleCompteBancaire(afficheIdCompteBancaire(editMandat.marche_id))" />                
                             
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
                          <td colspan="">
                          <label class="control-label">Mode de reglement</label>
                          
                              <input    type="text"   class="span3" readonly   :value="afficheLibelleModePaiemnt(editMandat.mod_paiement_engage)" />                
                             
                        </td>
                         <td colspan="">
                          <label class="control-label">Numero demande engagement</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheDemandeEngagement(editMandat.engagement_id)" />                
                             
                        </td>
                        <td colspan="">
                          <label class="control-label">Numero engagement</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheNumeroEngagement(editMandat.engagement_id)"  />                
                             
                        </td>
                        <td colspan="">
                          <label class="control-label">Numero bordereau engagement</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheNumeroBordeauEngagement(editMandat.engagement_id)"  />                
                             
                        </td>
                        
                      </tr>
                          <tr>
                            <td>
                               <label class="control-label">Numero OP/AT</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficheNumeroOPATEngagement(editMandat.engagement_id)"  />  
                            </td>
                             <td>
                               <label class="control-label">Réf. Engagement  juridique</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheReferenceEngagement(editMandat.engagement_id)"  />  
                            </td>
                             <td>
                               <label class="control-label">Numero mandat</label>
                          
                              <input    type="text"   class="span4"   v-model="editMandat.numero_mandat" required />  
                            </td>
                             <td>
                               <label class="control-label">Numero Bordereau mandat</label>
                          
                              <input    type="text"   class="span4"   v-model="editMandat.numero_bordereau"  required/>  
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
                            </td>
                          </tr>
                     

                    </div>
                     <div id="tab28924" class="tab-pane ">
                     <tr>
                        <td colspan="">
                         
                         <label class="control-label">Numéro</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheNumeroFournisseur(editMandat.entreprise_id)" />                
                             
                                             
                        </td>
                        <td>
                          <label class="control-label">Nom</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheNomFournisseur(editMandat.entreprise_id)" />                
                             
                        </td>
                          <td>
                          <label class="control-label">Telephone</label>
                          
                              <input    type="text"   class="span3" readonly  :value="afficheTelephoneFournisseur(editMandat.entreprise_id)" />                
                             
                        </td>
                        <td>
                          <label class="control-label">Adresse</label>
                          
                              <input    type="text"   class="span4" readonly :value="afficheAdresseFournisseur(editMandat.entreprise_id)"  />                
                             
                        </td>
                       
                          <td>
                          <label class="control-label">Bailleur</label>
                          
                              <input    type="text"   class="span4" readonly :value="editMandat.bailler_id" />                
                             
                        </td>
                      </tr>
                      <tr>
                        <td>
                           <label class="control-label">Trésor</label>
                          
                              <input    type="text"   class="span4" readonly  :value="editMandat.montant_tresor" />                
                             
                        </td>
                         <td>
                           <label class="control-label">Don</label>
                          
                              <input    type="text"   class="span4" readonly  :value="editMandat.montant_don" />                
                             
                        </td>
                         <td>
                           <label class="control-label">Emprunt</label>
                          
                              <input    type="text"   class="span3" readonly  :value="editMandat.montant_emprunt" />                
                             
                        </td>
                         <td>
                           <label class="control-label">Total</label>
                          
                              <input    type="text"   class="span4" readonly  :value="editMandat.total_general" />                
                             
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Facture</label>
                            <div class="controls">
                              <input type="text" class="span4"  :value="afficherMontantMandat"   readonly/>
                            </div>
                          </div>
                        </td>
                      </tr>
                           <tr>
                             <td>
                          <div class="control-group">
                            <label class="control-label">Numéro Facture</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="affichiernumMandat"  readonly/>
                            </div>
                          </div>
                        </td>
                       <td>
                          <div class="control-group">
                            <label class="control-label">Crédits Autorisés(Engagement actuel)</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="sommeMontantMandat" readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <label class="control-label">Cumul des demandes</label>
                           <div class="controls">
                              <input type="text" class="span4" :value="sommeEgagementLigne(detail_marche.id)" readonly/>
                            </div>
                        //   <input    type="text"   class="span3" readonly :value="montantCumulerLiquidationMandat"  />
                            //   <input    type="hidden"   class="span4" readonly :value="sommeEgagementLigne(detail_marche.id)"  />                
                             
                        </td>
                          <td>
                          <label class="control-label">Disponible</label>
                          
                              <input    type="text"   class="span4" readonly :value="restePayeMarche"  />                
                             
                        </td>
                      
                          <td>
                          <div class="control-group">
                            <label class="control-label">Dotation Iniatiale</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="dotationInite(detail_marche.imputation).Dotation_Initiale" readonly/>
                            </div>
                          </div>
                        </td>
                        
                      </tr>
                     <tr>
                              <td>
                          <label class="control-label">Dotation disponible anterieure</label>
                          
                              <input    type="text"   class="span4" readonly :value="dotationDisponibleAnterieure"  />                
                             
                        </td>
                        <td colspan="">
                         
                         <label class="control-label">Montant marché</label>
                          
                              <input    type="text"   class="span4" :value="montantMarcheAvecAvenant" readonly   />                
                             
                                              
                        </td>
                        <td>
                          <label class="control-label">Disponible marché</label>
                          <input    type="text"   class="span4" readonly :value="restePayeMarcheMandat"  />
                              
                        </td>
                         
                      <td>
                                                    <div class="control-group">
                            <label class="control-label">Engagement cumulé </label>
                            <div class="controls">
                              <input type="text" class="span4" :value="montantCumulerMandat" readonly/>
                            </div>
                          </div>
                        </td>
                       <td>
                          <div class="control-group">
                            <label class="control-label">Dotation disponible</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="dotationDisponibleAnterieureDirect" readonly/>
                            </div>
                          </div>
                        </td>
                        
                      </tr>

                    </div>
                  </div>
            </div>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalMandatLocal(editMandat)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU ENGAGEMENT//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU ENGAGEMENT//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU ENGAGEMENT//////////////////////////////-->


<!--///////////////////////////////////////// DEBUT TABLEAU VALIDATION//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU VALIDATION//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU VALIDATION//////////////////////////////-->
<div id="exampleModalMotifMandatEmetteur" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision Emetteur</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Décision Emetteur </label>
                            <div class="controls">
                              <select v-model="editMandat.decision_emetteur">
                                <option value=""></option>
                              <option value="1">Visé</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                         
                          <div class="control-group">
                            <label class="control-label">Observation Emetteur</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editMandat.observation_emetteur">
                              </textarea>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Decision Emetteur :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editMandat.date_decision_emetteur"/>
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                            </div>
                          </div>
                               <div class="control-group">
                            <label class="control-label">Nom Emetteur :</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editMandat.nom_emetteur"/>
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
                              <option value="1">Visé</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                            <div class="control-group">
                            <label class="control-label">Motif CF </label>
                            <div class="controls">
                              <select v-model="editMandat.motif">
                             
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
                              <input type="date" class="span"  v-model="editMandat.date_motif"/>
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                              
                            </div>
                          </div>
                           
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalMandatDecisionCF(editMandat)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>


            <div id="exampleModalMotif" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Validation CF{{afficherMontantEngagement1}}-{{sommeMontantEngagement}}</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Décision CF </label>
                            <div class="controls">
                              <select v-model="editEngagement.decision_cf">
                                <option value="0">Attente</option>
                              <option value="1">Visé</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            
    
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




 <div id="exampleDecisionServiceBeneficiare" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Observation du Service Bénéficiaire</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Décision Service Bénéficiaire </label>
                            <div class="controls">
                              <select v-model="editRealiteServiceFait.decision_service_beneficiaire">
                                <option value="0">Attente</option>
                              <option value="1">Visé</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                        
                          <div class="control-group">
                            <label class="control-label">Observation Service Bénéficiaire</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editRealiteServiceFait.observation_service_beneficiaire">
                              </textarea>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Observation:</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editRealiteServiceFait.date_service_beneficiaire"/>
                             
                            </div>
                          </div>
                              <div class="control-group">
                            <label class="control-label">Nom et prenoms</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editRealiteServiceFait.nom_service_beneficiaire"/>
                             
                            </div>
                          </div>
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierRealiteService(editRealiteServiceFait)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>




<div id="exampleDecisionControlleurFinancier" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Observation du Controleur Financier</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Décision Controleur Financier </label>
                            <div class="controls">
                              <select v-model="editRealiteServiceFait.decision_controleur_financier">
                                <option value="0">Attente</option>
                              <option value="1">Visé</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                        
                          <div class="control-group">
                            <label class="control-label">Observation Controleur Financier</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editRealiteServiceFait.observation_controleur_financier">
                              </textarea>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Observation:</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editRealiteServiceFait.date_controleur_financier"/>
                             
                            </div>
                          </div>
                              <div class="control-group">
                            <label class="control-label">Nom et prenoms</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editRealiteServiceFait.nom_controleur_financier"/>
                             
                            </div>
                          </div>
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierRealiteService(editRealiteServiceFait)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>



<div id="exampleDecisionControlleurFinancierLiquidation" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Observation du Controleur Financier</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Décision Controleur Financier </label>
                            <div class="controls">
                              <select v-model="editLiquidation.decision_controleur_financier">
                                <option value="0">Attente</option>
                              <option value="1">Visé</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                        
                          <div class="control-group">
                            <label class="control-label">Observation Controleur Financier</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editLiquidation.observation_controleur_financier">
                              </textarea>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Observation:</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editLiquidation.date_controleur_financier"/>
                             
                            </div>
                          </div>
                              <div class="control-group">
                            <label class="control-label">Nom et prenoms</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editLiquidation.nom_controleur_financier"/>
                             
                            </div>
                          </div>
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="fonctionModifierLiquidation(editLiquidation)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>


<div id="exampleDecisionEmetteurLiquidation" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Observation de l' emetteur</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Décision Emetteur </label>
                            <div class="controls">
                              <select v-model="editLiquidation.decision_emetteur">
                                <option value="0">Attente</option>
                              <option value="1">Visé</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                        
                          <div class="control-group">
                            <label class="control-label">Observation Emetteur</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editLiquidation.observation_emetteur">
                              </textarea>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Observation:</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editLiquidation.date_emetteur"/>
                             
                            </div>
                          </div>
                              <div class="control-group">
                            <label class="control-label">Nom et prenoms</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editLiquidation.nom_emetteur"/>
                             
                            </div>
                          </div>
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="fonctionModifierLiquidation(editLiquidation)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>



<div id="exampleDecisionOrdonnateurLiquidation" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Observation de l' Ordonnateur</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">Décision Ordonnateur </label>
                            <div class="controls">
                              <select v-model="editLiquidation.decision_ordonnateur">
                                <option value="0">Attente</option>
                              <option value="1">Visé</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                        
                          <div class="control-group">
                            <label class="control-label">Observation Ordonnateur</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editLiquidation.observation_ordonnateur">
                              </textarea>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Observation:</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editLiquidation.date_ordonnateur"/>
                             
                            </div>
                          </div>
                              <div class="control-group">
                            <label class="control-label">Nom et prenoms</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editLiquidation.nom_ordonnateur"/>
                             
                            </div>
                          </div>
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="fonctionModifierLiquidation(editLiquidation)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<!--///////////////////////////////////////// FIN TABLEAU VALIDATION//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU VALIDATION//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU VALIDATION//////////////////////////////-->



<!--///////////////////////////////////////// DEBUT TABLEAU ENGAGEMENT 2//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU ENGAGEMENT 2//////////////////////////////-->
<!--///////////////////////////////////////// DEBUT TABLEAU ENGAGEMENT 2//////////////////////////////-->
 <!--//////////////////////////// FORMULAIRE AJOUTER ENGAGEMENT-->
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
                            :value="CodeGdeNatureDep(detail_marche.gdenature_id)"
                              
                              />
                          
                           <input
                                type="hidden"
                                class="span"
                               
                             :value="detail_marche.id"
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
                            :value="afficheractivite(detail_marche.activite_id)"
                              
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
                            :value="afficherUniteAdmin(detail_marche.unite_administrative_id)"
                              
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
                                  v-for="fam in ligneBudgetaire(detail_marche.id)"
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
                              <input type="text" class="span4" :value="sommeEgagementLigne(detail_marche.id)" readonly/>
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


<!--////////////////////////////FIN FORMULAIRE AJOUTER ENGAGEMENT-->

<!--///////////////////////////////////////// FIN TABLEAU ENGAGEMENT 2//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU ENGAGEMENT 2//////////////////////////////-->
<!--///////////////////////////////////////// FIN TABLEAU ENGAGEMENT 2//////////////////////////////-->






<!--//////////////////////////// fin FORMULAIRE modifier ENGAGEMENT-->

















 <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(afficheMontantReelMarche(detail_marche.id)))}}</span> MONTANT MARCHE
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
            <span class="label label-success">{{formatageSomme(parseFloat(sommeEngagementTableau(detail_marche.id)))}}</span>MONTANTS PAYES
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
            <span class="label label-important">{{formatageSomme(parseFloat(sommeEgagementLigneTableau(detail_marche.id)))}}</span>CUMUL ENGAGEMENT
          </a>
        </li>
      
       <li class="bg_ly">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(dotationInite(detail_marche.imputation).Dotation_Initiale - sommeEgagementLigneTableau(detail_marche.imputation)))}}</span>DISPONIBLE BUDGETAIRE
          </a>
        </li>
      
      </ul>
    </div>
<div class="quick-actions_homepage">
      <ul class="quick-actions">
        <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(affichierMontantAvenant(detail_marche.id)))}}</span> MONTANT AVENANT
          </a>
        </li>
        <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{formatageSomme(parseFloat(montantMarcheAvecAvenant))}}</span>MONTANT MARCHE AVEC AVENANT
          </a>
        </li>
          <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{tauxFacturation}}%</span>TAUX FACTURE
          </a>
        </li>
         <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{ratioAvenantMarche}}%</span> RATIO AVENANT/MARCHE
          </a>
        </li>
       <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{affichierNombreAvenant(detail_marche.id)}}</span> NOMBRE AVENANT
          </a>
        </li>
      </ul>
    </div>



           
            <hr />

            <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                       <h4 v-if="detail_marche">Detail Marche : {{detail_marche.objet}} </h4>
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                               <th>Reference marché</th>
                               <th>Numéro marché</th>
                                <th>Objet marché</th>
                                
                                <th>Montant de base</th>
                                <th>Type de marché</th>
                                <th>Procédure de passation </th>
                                <th>Unite administrative</th>
                                <th>Activité</th>
                    <th>Imputation</th>
                    <!-- <th>Ligne Budgetaire</th>
                                <th>Exercice Budgetaire</th> -->
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="taskStatus">{{detail_marche.reference_marche}}</td>
                                
                                <td class="taskStatus">{{afficheNumeroMarche(detail_marche.id)}}</td>
                                 <td class="taskDesc">{{detail_marche.objet}}</td>
                                <td class="taskOptions">
                                    {{formatageSomme(parseFloat(afficheMontantReelMarche(detail_marche.id)))}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.type_marche.libelle}}
                                </td>
                                <td class="taskOptions">
                                    <!-- {{afficheModePassation(detail_marche.procedure_passation_id)}} -->
                                   
                               <span v-if="DisponibleBudgetaireApresLiquidation < 10000000 ">Procédure Simplifiée de demande de Cotation(PSC Sans comité)</span>
                         <span v-else-if="DisponibleBudgetaireApresLiquidation < 30000000 ">Procédure Simplifiée de demande de Cotation(PSC Avec comité)</span>
                         <span v-else-if="DisponibleBudgetaireApresLiquidation < 60000000 ">Procédure Simplifiée à compétition Limitée(PSL)</span>
                         <span v-else-if="DisponibleBudgetaireApresLiquidation < 100000000 ">Procédure Simplifiée à compétition Ouverte(PSO)</span>
                         <span v-else-if="DisponibleBudgetaireApresLiquidation > 100000000 ">Appel d'Offre Ouvert(AON ou AOI)</span>
                         <span v-else></span>
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
                               <li class="active"><a data-toggle="tab" href="#tab2078">Avenant</a></li>
                               <li ><a data-toggle="tab" href="#tab100">Facture</a></li>
                                <li ><a data-toggle="tab" href="#tab10">Engagement</a></li>
                                <li ><a data-toggle="tab" href="#tab15550">Réalité service fait</a></li>
                                <li ><a data-toggle="tab" href="#tab120120">Liquidation</a></li>
                                <li><a data-toggle="tab" href="#tab20">Mandat</a></li>
                                 <li><a data-toggle="tab" href="#tab20002">Décompte</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab2">Liste des lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab3">Contratualisation</a></li> -->
                            </ul>
                        </div>
                        <div class="widget-content tab-content">



                          <!--DEBUT DE LA TABLEAU LIQUIDATION-->


                           <div id="tab120120" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <!-- <div class="span4" align="right"    >
                                   
                                       <button class="btn btn-success" @click="afficherModalAjouter" >Demande Engagement</button>
                                         
  
                    </div> -->
                    
                                <table class="table table-bordered table-striped" v-if="detail_marche">
                                    <thead>
                                    <tr>

                                        <th>Année</th>
                                          <th title="">N°bon manuel</th>
                                <th title="">N°demande</th>
                           
                                <!-- <th title="">Adresse fournisseur</th> -->
                               
                                <th title="">Montant Autorisé</th>
                                
                                  <th title="">Disponible</th>
                                  <!-- <th>Date paiement</th> -->
                                  <th>Imputation budgetaire</th>
                                
                                <!-- <th>Service béneficiaire</th> -->
                                <th>Observation du Emmetteur</th>
                                
                                <th>Observation Controleur financier</th>
                                <th>Observation du ordonnateur</th>
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    
                <tr 
                    class="odd gradeX"
                    v-for="(liquida, index) in afficheMarcheLiquidation(detail_marche.id)"
                    :key="liquida.id"
                  >
                    <template v-if="validationRealiteServiceFait(liquida.marche_id) != 1">
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.exo_id || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.numero_bon_manuel || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.numero_demande || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{afficheMontantAutorise(liquida.marche_id) || 0}}</td>
                     <td @dblclick="afficherModalModificationLiquidation(index)">{{sommeEgagementLigne(liquida.marche_id) || 0 }}</td> 
                     
                     
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.imputation_budgetaire || 'Non renseigné'}}</td>
                   
                     <td>
                        <button v-if="liquida.decision_emetteur == 1"  class="btn  btn-success" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_emetteur == 2" class="btn  btn-warning" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_emetteur == 3" class="btn  btn-danger" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                   
                  <td v-if="liquida.decision_emetteur == 1">
                        <button v-if="liquida.decision_controleur_financier == 1"  class="btn  btn-success" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                    <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_controleur_financier == 2" class="btn  btn-warning" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_controleur_financier == 3" class="btn  btn-danger" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                     <td v-else>
                        <h1 style="font-size:12px;color:red;">Désactivé  </h1>
                    </td>
                     <td v-if="liquida.decision_controleur_financier == 1">
                        <button v-if="liquida.decision_ordonnateur == 1"  class="btn  btn-success" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_ordonnateur == 2" class="btn  btn-warning" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_ordonnateur == 3" class="btn  btn-danger" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                    <td v-else>
                        <h1 style="font-size:12px;color:red;">Désactivé  </h1>
                    </td>
                    
                     </template>
                      <template v-else>
                <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.exo_id || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.numero_bon_manuel || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.numero_demande || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{afficheMontantAutorise(liquida.marche_id) || 0}}</td>
                     <td @dblclick="afficherModalModificationLiquidation(index)">{{sommeEgagementLigne(liquida.marche_id) || 0 }}</td> 
                     
                     
                    <td @dblclick="afficherModalModificationLiquidation(index)">{{liquida.imputation_budgetaire || 'Non renseigné'}}</td>
                   
                     <td>
                        <button v-if="liquida.decision_emetteur == 1"  class="btn  btn-success" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_emetteur == 2" class="btn  btn-warning" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_emetteur == 3" class="btn  btn-danger" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationEmetteurLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                   
                  <td v-if="liquida.decision_emetteur == 1">
                        <button v-if="liquida.decision_controleur_financier == 1"  class="btn  btn-success" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                    <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_controleur_financier == 2" class="btn  btn-warning" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_controleur_financier == 3" class="btn  btn-danger" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationControlleurFinancierLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                     <td v-else>
                        <h1 style="font-size:12px;color:red;">Désactivé  </h1>
                    </td>
                     <td v-if="liquida.decision_controleur_financier == 1">
                        <button v-if="liquida.decision_ordonnateur == 1"  class="btn  btn-success" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      <span    >Visé avec Observation</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_ordonnateur == 2" class="btn  btn-warning" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_ordonnateur == 3" class="btn  btn-danger" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationOrdonnanteurLiquidation(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                    <td v-else>
                        <h1 style="font-size:12px;color:red;">Désactivé  </h1>
                    </td>
                
                     </template>
                     <td>
                        <!-- <router-link :to="{ name: 'DetailEngagement', params: {id_detail_engagement:realiteService.id}}"
                class="btn btn-default " title="Detail Engagement">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link>  -->
                    <button v-if="liquida.decision_ordonnateur == 1 && validationRealiteServiceFait(liquida.marche_id) == 1" class="btn " @click="afficherModalAjouterMandatApresLiquidation(index)" title="Ajouter Mandat">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button>
                      <!-- <button v-if="Engage.decision_cf == 1" class="btn " @click="afficherModalAjouterMandat(index)" title="Ajouter Mandat">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
                      <button class="btn btn-danger"  @click="supprimerLiquidation(liquida.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
               
                                    </tbody>
                                </table>
                           



                        </div>
<!--FIN DE LA TABLEAU LIQUIDATION -->





















                          <!--DEBUT DE LA TABLEAU REALITE SERVICE FAIT -->


                           <div id="tab15550" class="tab-pane">
                                   <div class="span4"></div>
                                <div class="span4"></div>
                                <!-- <div class="span4" align="right"    >
                                   
                                       <button class="btn btn-success" @click="afficherModalAjouter" >Demande Engagement</button>
                                         
  
                    </div> -->
                    
                                <table class="table table-bordered table-striped" v-if="detail_marche">
                                    <thead>
                                    <tr>

                                        <th>Année</th>
                                         <th title="">Section</th>
                              
                                 <th title="">Fournisseur</th>
                                <th title="">N°facture</th>
                                 <th>Date facture</th>
                                  <th>Imputation</th>
                                <th>Montant</th>
                                <!-- <th>Service béneficiaire</th> -->
                                <th title="Observation service beneficiaire">Observation S-B</th>
                                <th title="Observation Controleur financier">Observation CF</th>
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr 
                    class="odd gradeX"
                    v-for="(realiteService, index) in afficheMarcheRealiteServiceFait(detail_marche.id)"
                    :key="realiteService.id"
                  >
                    <template v-if="validationDeEngagement(realiteService.marche_id) != 1">
                    <td >{{realiteService.exercice_budget || 'Non renseigné'}}</td>
                    <td >{{afficherSection(realiteService.section_id) || 'Non renseigné'}}</td>
                    <td >{{afficheNomFournisseur(afficheidFournisseurFacture(realiteService.facture_id)) || 'Non renseigné'}}</td>
                    <td >{{afficheNumeroFacture(realiteService.facture_id) || 'Non renseigné'}}</td>
                     <td >{{afficheDateFacture(realiteService.facture_id) || 'Non renseigné'}}</td> 
                     
                    <td >{{detail_marche.imputation  || 'Non renseigné'}}</td>
                     <td >{{formatageSomme(parseFloat(realiteService.montant)) || 'Non renseigné'}}</td>
                     <td >
                        <button v-if="realiteService.decision_service_beneficiaire == 1"  class="btn  btn-success" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_service_beneficiaire == 2" class="btn  btn-warning" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_service_beneficiaire == 3" class="btn  btn-danger" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                   
                  <td v-if="realiteService.decision_service_beneficiaire == 1">
                        <button v-if="realiteService.decision_controleur_financier == 1"  class="btn  btn-success" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_controleur_financier == 2" class="btn  btn-warning" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_controleur_financier == 3" class="btn  btn-danger" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                    <td v-else>
                        <h1 style="font-size:12px;color:red;text-align:center">Désactivé  </h1>
                    </td>
                      </template>
                      <template v-else>
                  <td >{{realiteService.exercice_budget || 'Non renseigné'}}</td>
                    <td >{{afficherSection(realiteService.section_id) || 'Non renseigné'}}</td>
                    <td >{{afficheNomFournisseur(afficheidFournisseurFacture(realiteService.facture_id)) || 'Non renseigné'}}</td>
                    <td >{{afficheNumeroFacture(realiteService.facture_id) || 'Non renseigné'}}</td>
                     <td >{{afficheDateFacture(realiteService.facture_id) || 'Non renseigné'}}</td> 
                     
                    <td >{{detail_marche.imputation  || 'Non renseigné'}}</td>
                     <td >{{formatageSomme(parseFloat(realiteService.montant)) || 'Non renseigné'}}</td>
                     <td>
                        <button v-if="realiteService.decision_service_beneficiaire == 1"  class="btn  btn-success" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_service_beneficiaire == 2" class="btn  btn-warning" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_service_beneficiaire == 3" class="btn  btn-danger" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationServiceBeneficiaire(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                   
                  <td v-if="realiteService.decision_service_beneficiaire == 1">
                        <button v-if="realiteService.decision_controleur_financier == 1"  class="btn  btn-success" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_controleur_financier == 2" class="btn  btn-warning" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_controleur_financier == 3" class="btn  btn-danger" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationControlleurFinancier(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                     <td v-else>
                        <h1 style="font-size:12px;color:red;text-align:center">Désactivé  </h1>
                    </td>
                    
               
                     </template> 
                     <td>
                        <router-link :to="{ name: 'detailRealiteServiceFait', params: {id_detailRealiteServiceFait:realiteService.id}}"
                class="btn btn-default " title="Detail Realite service fait">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link> 
                    <!-- <button v-if="realiteService.decision_controleur_financier == 1 && validationDeEngagement(realiteService.marche_id) == 1" class="btn " @click="afficherModalAjouterLiquidation(index)" title="Ajouter Liquidatation">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
                      <!-- <button v-if="Engage.decision_cf == 1" class="btn " @click="afficherModalAjouterMandat(index)" title="Ajouter Mandat">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
                      <button  class="btn btn-danger" @click="supprimerRealiteServiceFait(realiteService.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
               
                                    </tbody>
                                </table>
                           

                           



                        </div>
<!--FIN DE LA TABLEAU REALITE SERVICE FAIT-->













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
                    v-for="(Engage, index) in afficheMarcheEngage(detail_marche.id)"
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
                    <!-- <button v-if="Engage.decision_cf == 1" class="btn " @click="afficherModalAjouterRealiteServiceFait(index)" title="Ajouter Réalité Service Fait">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
                      <!-- <button v-if="Engage.decision_cf == 1" class="btn " @click="afficherModalAjouterMandat(index)" title="Ajouter Mandat">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
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
                         <div id="tab2078" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                   
                                      <button class="btn btn-success" @click="afficherModalAjouterTitre" >Ajouter Avenant</button>

                    </div>
                                <table class="table table-bordered table-striped">
                                    <thead>
                                   <tr>
                    <th>Marché</th>
                      <th>Type acte financier</th>
                        <th>Numéro avenant</th>
                    <th>Objet Avenant</th>
                    <th>Montant Avenant</th>
                     <th>Date Avenant</th>
                    
                    <th>Action</th>
                  </tr>
                                    </thead>
                                    <tbody>
                                   
                 <tr class="odd gradeX" v-for="(type, index) in afficheMarcheAvenant(detail_marche.id)" :key="type.id">
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{afficheNumeroMarcheAttribuer(type.marche_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{afficheTypeActeFinancier(type.type_acte_financier) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.numero_avenant || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.objet_avenant || 'Non renseigné'}}</td>
                    <td style="text-align: center"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.montant_avenant)) || 0}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formaterDate(type.date_avenant) || 'Non renseigné'}}</td>
                   

                    <td>
                      <button class="btn btn-danger" @click="supprimerAvenant(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                      <td style="font-weight:bold;">Total Avenant</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantAvenantParMarche(this.detail_marche.id)))}}</td>
                    <td></td>
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
                                        <th>N° du marche</th>
                                         <th>N° du mandat</th>
                                        <th>N° bordereau mandat</th>
                                        <th>N° demande engagement</th>
                                          <th>N° engagement</th>
                                        <th>Type procedure</th>
                                        
                                        <!-- <th >Section</th> -->
                                        <!-- <th title="unite administrative">Ua</th> -->
                             
                                <th>Montant Mandat</th>
                                 <th >Decision de emetteur</th>
                                <th title="Date validation Emetteur">Date Emetteur</th>
                                
                              
                               
                                <th>Décision CF</th>
                                <th title="Date validation Cf">Date validation CF</th>

                                
                                
                                
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                   
                 <tr
                    class="odd gradeX"
                    v-for="(Manda, index) in afficheMandatMarcheTableau(detail_marche.id)"
                    :key="Manda.id"
                  >
                   <template v-if="validationLiquidation(Manda.marche_id) == 1">
                    <td @dblclick="afficherModalModifierMandat(index)">{{marcheMandat(Manda.marche_id) || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierMandat(index)">{{Manda.numero_mandat || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierMandat(index)">{{Manda.numero_bordereau || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierMandat(index)">{{afficherNumeroDemandeEngagemnt(Manda.engagement_id) || 'pas numero demande'}}</td>
                     <td @dblclick="afficherModalModifierMandat(index)">{{afficherNumeroEngagemnt(Manda.engagement_id) || 'pas numero engage'}}</td>
                     <td @dblclick="afficherModalModifierMandat(index)">{{Manda.type_procedure_id || 'Non renseigné'}}</td>
            <!-- <td @dblclick="afficherModalModifierMandat(index)">{{uaMandat(Manda.ua_id) || 'Non renseigné'}}</td>
                                    -->
                    <td @dblclick="afficherModalModifierMandat(index)">{{formatageSomme(parseFloat(Manda.total_general))|| 'Non renseigné'}}</td>
                    
                    <td>
                        <button v-if="Manda.decision_emetteur == 1"  class="btn  btn-success" @click="afficherModalModifierMotifMandatEmetteur(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="Manda.decision_emetteur == 2" class="btn  btn-warning" @click="afficherModalModifierMotifMandatEmetteur(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="Manda.decision_emetteur == 3" class="btn  btn-danger" @click="afficherModalModifierMotifMandatEmetteur(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalModifierMotifMandatEmetteur(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                    
                    <td @dblclick="afficherModalModifierMandat(index)">{{formaterDate(Manda.date_decision_emetteur) || 'Non renseigné'}}</td>
                      
              <td v-if="Manda.decision_emetteur == 1">
                        <button v-if="Manda.decision_cf == 1"  class="btn  btn-success" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="Manda.decision_cf == 2" class="btn  btn-warning" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="Manda.decision_cf == 3" class="btn  btn-danger" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                      <td v-else>
                        <h1 style="font-size:10px;color:red;">Désactivé  </h1>
                    </td>
                    <td @dblclick="afficherModalModifierMandat(index)">{{formaterDate(Manda.date_motif) || 'Non renseigné'}}</td>
                       <td>
                        <!-- <router-link :to="{ name: 'DetailEngagement', params: {id_detail_engagement:Engage.id}}"
                class="btn btn-default " title="Detail Engagement">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link>  -->
                       <router-link :to="{ name: 'DetailMandat', params: {id_detail_mandat:Manda.id}}"
                class="btn btn-default " title="Detail Mandat">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link> 
                      <button class="btn btn-danger" @click="supprimerMandat(Manda.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                     </template>
                      <template v-else>
                 <td colspan="10">   <h1 style="color:red;font-size:15px;text-align:center">veuillez valider la liquidation svp?</h1></td>
                   
                     </template>
              </tr>

                  
                                    </tbody>
                                </table>
                           
                            


                        </div>
<div id="tab100" class="tab-pane ">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                   
                                      <button class="btn btn-success" @click="afficherModalProcedureFacture" >Ajouter Facture</button>

                    </div>
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
                    v-for="(factu, index) in afficheFactureTableau(detail_marche.id)"
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
                           
                            


                        </div>

                         <div id="tab20002" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <!-- <div class="span4" align="right">
                                   
                                      <button class="btn btn-success" @click="afficherModalAjouterTitre" >Ajouter Avenant</button>

                    </div> -->
                                <table class="table table-bordered table-striped">
                                    <thead>
                                   <tr>
                                     <th>Année budgetaire</th>
                    <th>Objet marche</th>
                      <th>Fournisseur</th>
                        <!-- <th>Marché</th>
                    <th>Avenant</th>
                    <th>Marché + Avenant</th> -->
                     <th>Facture (TTC)</th>
                      <th>Date</th>
                    <th>Paiement part Etat</th>
                    <th>Paiement part Bailleurs</th>
                    <!-- <th>Reste a payer marché</th> -->
                    <!-- <th>Taux facturétauxFacturation</th> -->
                  </tr>
                                    </thead>
                                    <tbody>
                                   
                 <tr class="odd gradeX" v-for="type in afficheMandatMarcheTableau(detail_marche.id)" :key="type.id">
                   <td>{{type.exercice_budget || 'Non renseigné'}}</td>
                    <td
                     
                    >{{detail_marche.objet || 'Non renseigné'}}</td>
                   
                    <td>{{type.nom_entreprise || 'Non renseigné'}}</td>
                   
                   
                     
                     <td>{{formatageSomme(parseFloat(objetfactureMontant(type.facture_id))) || 0}}</td>
                     <td
                     style="text-align: center"
                    >{{formaterDate(type.date_motif) || 0}}</td>
                     <td
                       style="text-align: center"
                    >{{formatageSomme(parseFloat(type.montant_tresor)) || 0}}</td>
                  <td
                       style="text-align: center"
                    >{{formatageSomme(parseFloat(montantTotalDonEtEmprunt))|| 0}}</td>
                    <!-- <td  style="text-align: center">{{formatageSomme(parseFloat(restePayeMarche)) || 0}}</td> -->
                   
  <!-- <td style="text-align: center"> {{tauxFacturation || 0}}%</td>
                     -->
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td
                     style="text-align: center;color:red;font-weight:bold;"
                    >{{formatageSomme(parseFloat(montantFactureParMarche(detail_marche.id))) || 0}}</td>
                     <!-- <td  style="text-align: center;color:red;font-weight:bold;"
                     
                    
                    > {{formatageSomme(parseFloat(montantMandatParMarche(detail_marche.id))) || 0}}</td> -->
                     <td ></td>
                  <td
                     
                     style="text-align: center;color:red;font-weight:bold;"
                    >{{formatageSomme(parseFloat(montantMandatParMarche(detail_marche.id))) || 0}}</td> 
                      <td
                     
                     style="text-align: center;color:red;font-weight:bold;"
                    >{{formatageSomme(parseFloat(montantTotalDonEtEmprunt)) || 0}}</td> 
                    
                      <!-- <td  style="text-align: center;color:red;font-weight:bold;"> {{tauxFacturation || 0}}%</td> -->
                    
                   
 
                    
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
    <div id="exampleModalMandat" class="modal hide taillemodal6">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Mandat</h3>
      </div>
     <div class="table-responsive text-nowrap taillemodal61">
              <table class="table table-bordered table-striped ">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab10009">INFORMATION</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab2">TYPE ENGAGEMENT </a>
                      </li> -->
                      
                      <li>
                        <a data-toggle="tab" href="#tab1569">INFO FOURNISSEUR / IMPUTATION BUDGETAIRE</a>
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
                    <div id="tab10009" class="tab-pane active">
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
                            :value="CodeGdeNatureDep(detail_marche.gdenature_id)"
                              
                              />
                          
                           <input
                                type="hidden"
                                class="span"
                               
                             :value="detail_marche.id"
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
                            :value="afficheractivite(detail_marche.activite_id)"
                              
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
                            :value="afficherUniteAdmin(detail_marche.unite_administrative_id)"
                              
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
                               
                              v-model="formData.numero_demande"
                              
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
                               
                              v-model="formData.numero_engage"
                              
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
                            <label class="control-label">Type d'engagement direct</label>
                            <div class="controls">
                              <select v-model="formData.type_engagement_id"  class="span4">
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
                  <td >
                         <div class="control-group">
                            <label class="control-label">Autre type engagement</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="formData.autre_engagement" :readonly="veifautreengagement"/>
                            </div>
                          </div>
                        </td>
                      </tr>

                    
                 
                  <tr>
                          <td>
                         <div class="control-group">
                            <label class="control-label">Numero mandat</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="formData.numero_mandat"/>
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
                            <label class="control-label">Date de reception dossier</label>
                            <div class="controls">
                              <input type="date" class="span4" v-model="formData.date_reception_cf"/>
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
                    </div>
                    <!--ongle descriptif-->
                    <!-- <div id="tab2" class="tab-pane">
                      

                      
                       
                     
                     
                      <tr>
                         
                         
                      
                        
                       
                       
                      </tr>
                      
                    </div> -->
                    <!--ongle 3 -->


<!--ongle descriptif-->
                    <div id="tab1569" class="tab-pane">
                      

                      
                        <tr>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Mode de paiement</label>
                            <div class="controls">
                              <select v-model="formData.mod_paiement_engage" class="span4">
                                
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
                              <input type="text" class="span" v-model="formData.Bailleur" />
                            </div>
                          </div>
                        </td> -->
                       
                      </tr>
                      <tr>
                         
                         
                      
                        
                       
                       
                      </tr>
                      <tr>
                            <td>
                         <div class="control-group">
                            <label class="control-label">Objet de la dépense</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="afficherObjetFacture" readonly/>
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
                                  v-for="fam in ligneBudgetaire(detail_marche.id)"
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
                              <input type="text" class="span4" v-model="afficherNumeroFcture" readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Facture</label>
                            <div class="controls">
                              <input type="text" class="span4" v-model="afficherMontantFacture" readonly/>
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                      <tr>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Dotation Iniatiale</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="dotationInite(detail_marche.imputation).Dotation_Initiale" readonly/>
                            </div>
                          </div>
                        </td>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Cumul engagements antérieurs </label>
                            <div class="controls">
                              <input type="text" class="span4" :value="sommeEgagementLigne(detail_marche.id)" readonly/>
                            </div>
                          </div>
                        </td>
                           <td>
                          <div class="control-group">
                            <label class="control-label">Crédits Autorisés(Engagement actuel)</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="sommeMontant" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                                                    <div class="control-group">
                            <label class="control-label">Engagement cumulé </label>
                            <div class="controls">
                              <input type="text" class="span4" :value="montantCumulerMandat" readonly/>
                              <input type="hidden" class="span4" :value="sommeEgagementLigneTableau(detail_marche.id)" readonly/>
                              
                            </div>
                          </div>
                        </td>
                        
                        
                      
                      </tr>
                        <tr>
                           <td >
                          <div class="control-group">
                            <label class="control-label">Dotation disponible</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="montantDisponibleBudgetMandat" readonly/>
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
                              <input type="text" class="span4" :value="montantMarcheAvecAvenant" readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Disponible marché</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="restePayeMarche" readonly/>
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
                          @click.prevent="ajouterMandatDirectLocal"
                        >Valider</a>
                        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
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
                    :value="detail_marche.objetUniteAdministrative.libelle"
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
                    :value="detail_marche.objetUniteAdministrative.libelle"
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
                 
                  <textarea rows="3" :value="detail_marche.objet" class="span5">

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
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->







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
                    :value="detail_marche.objetUniteAdministrative.libelle"
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
                 
                  <textarea rows="3" :value="detail_marche.objet" class="span6">

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
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->








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
                formDataMadat:{
                  numero_mandat:"",
                  numero_bordereau:""
                },
                formData9:{
numero_bon_manuel:"",
numero_demande:""
                },
                editLiquidation:{
                  total_general:"",
numero_bon_manuel:"",
numero_demande:"",
	exo_id:"",
  	imputation_budgetaire:"",
    section_id:"",
    	programme_id:"",
      action_id:"",
      activite_id:"",
      	ua_id:"",
        nature_depense_id:"",
        plan_budgetaire_id:"",
        marche_id:"",
        mode_paiement_id:"",
        fournisseur_id:"",
        	egagement_id:"",
          decision_emetteur:"",
          nom_emetteur:""
                },

                editRealiteServiceFait:{
                  	section_id: "",
      marche_id: "",
      fournisseur_id: "",
    facture_id: "",
    ua_id: "",
    decision_service_beneficiaire: "",
    date_service_beneficiaire: "",
    observation_service_beneficiaire: "",
    nom_service_beneficiaire: "",
    decision_controleur_financier: "",
    date_controleur_financier: "",
    observation_controleur_financier: "",
    nom_controleur_financier: "",
    	montant: "",
    	exercice_budget: "",
                },
                formDataFacture:{},
                 formDataEngage:{},
                  editAvenant: {},
       editEngagement: {
        montant_tresor:0,
montant_don:0,
montant_emprunt:0,

      },
      editFacture:{},
             editMandat:{
                observation_emetteur:"",
              	decision_emetteur:"",
                date_decision_emetteur:"",
                nom_emetteur:""
             }  ,
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



},
formData: {
                 total_general:0,
       montant_tresor:0,
montant_don:0,
montant_emprunt:0,  
    typefact:"",
type_procedure_id:"",
type_engagement_id:"",
val:0
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

















              popupState2: false,
              popupState3: false,
              popupState4: false,
              popupState5: false,
              popupState6: false,
              popupState7: false,
              popupState8: false,
              popupState9: false,
              popupState10: false,
             

            };
           
        },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getMarchePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
         ),
          this.detail_engage = this.engagements.find(
      Engage => Engage.id == this.$route.params.id),
          this.detail_mandat = this.mandats.find(
      Manda => Manda.id == this.$route.params.id)
  
  
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
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

afficheidFour() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.fournisseur_id;
      }
      return 0
        }
      };
    },

afficheIdFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.facture_id;
      }
      return 0
        }
      };
    },
    afficheMontantFaacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_propose_ttc;
      }
      return 0
        }
      };
    },









DisponibleBudgetaireApresLiquidation() {
  
      const val = parseFloat(this.dotationInite(this.detail_marche.imputation).Dotation_Initiale) - parseFloat(this.sommeEgagementLigne(this.detail_marche.id));
      return parseFloat(val).toFixed(0);
      
    },



 validationDeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.decision_cf;
      }
      return 0
        }
      };
    },
 validationRealiteServiceFait() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.realiteServiceFait.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.decision_controleur_financier;
      }
      return 0
        }
      };
    },
afficheIdEngagementDansRealiteFait() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.realiteServiceFait.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.engagement_id;
      }
      return 0
        }
      };
    },
validationLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.liquidation.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.decision_ordonnateur;
      }
      return 0
        }
      };
    },
afficheNumerodemande_engage() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_demande_engage;
      }
      return 0
        }
      };
    },
    afficheNumerodemand() {
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
  afficherIdRealiteServiceFait() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.realiteServiceFait.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
afficherIdLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.realiteServiceFait.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },







afficheMontantTresor() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_tresor;
      }
      return 0
        }
      };
    },
afficheMontantDon() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_don;
      }
      return 0
        }
      };
    },
    afficheMontantEmprunt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_emprunt;
      }
      return 0
        }
      };
    },







afficheIdBailleur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.bailler_id;
      }
      return 0
        }
      };
    },

afficheLibelleBailleur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },



afficheDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_demande_engage;
      }
      return 0
        }
      };
    },
afficheNumeroEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_engage;
      }
      return 0
        }
      };
    },

afficheNumeroBordeauEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_bordereau;
      }
      return 0
        }
      };
    },

afficheNumeroOPATEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_op;
      }
      return 0
        }
      };
    },

afficheReferenceEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.ref_juridique;
      }
      return 0
        }
      };
    },

afficheidFournisseurFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.fournisseur_id;
      }
      return 0
        }
      };
    },
afficheNumeroFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_facture;
      }
      return 0
        }
      };
    },

afficheDateFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.date_facture;
      }
      return 0
        }
      };
    },



afficheMontantAutorise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.total_general;
      }
      return 0
        }
      };
    },





afficheNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterActeEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
afficheModePassation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.procedurePassations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficheIdFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.fournisseur_id;
      }
      return 0
        }
      };
    },
afficheIdFournisseurEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.fournisseur_id;
      }
      return 0
        }
      };
    },
afficheNumeroFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_cc;
      }
      return 0
        }
      };
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

afficheAdresseFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.adresse;
      }
      return 0
        }
      };
    },

afficheTelephoneFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.telephone;
      }
      return 0
        }
      };
    },

afficheIdCompteBancaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.compte_id;
      }
      return 0
        }
      };
    },


afficheLibelleCompteBancaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.comptes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_compte;
      }
      return 0
        }
      };
    },


afficheIdBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.comptes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.banq_id;
      }
      return 0
        }
      };
    },
    
afficheLibelleBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.banques.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },





afficheIdModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.mod_paiement_engage;
      }
      return 0
        }
      };
    },

 afficheLibelleModePaiemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


    afficherSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return qtereel.code_section.concat('  ', qtereel.nom_section);
       
      }
      return 0
        }
      };
    },





 affichePlanEconomiqueId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.imputation ==this.detail_marche.imputation );

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },

 affichePlanEconomiqueLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },







 afficheGrandNatureId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel =>  qtreel.imputation ==this.detail_marche.imputation);

      if (qtereel) {
        return qtereel.gdenature_id;
      }
      return 0
        }
      };
    },

 afficheGrandNatureLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
      return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },






 afficheUAId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.ua_id;
      }
      return 0
        }
      };
    },

 afficheUALibelle() {
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

 afficheActiviteId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.activite_id;
      }
      return 0
        }
      };
    },

 afficheActiviteLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
       return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },

afficheIdEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },



 afficheProgrammeId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.programme_id;
      }
      return 0
        }
      };
    },

 afficheProgrammeLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },

 

 afficheActionId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.action_id;
      }
      return 0
        }
      };
    },

 afficheActionLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauAction.find(qtreel => qtreel.id == id);

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



  afficheModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    montantAvenantParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.avenants.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.montant_avenant)
                        },valInite);
                    }
                }
            },
montantFactureParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getFacturePersonnaliser.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.prix_propose_ttc)
                        },valInite);
                    }
                }
            },
            montantMandatParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.montant_tresor)
                        },valInite);
                    }
                }
            },
 montantCredite: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },

tauxFacturation() {
      const val = (parseFloat(this.montantCredite(this.detail_marche.id)) / parseFloat(this.montantMarcheAvecAvenant)) * 100;
      
       if (val) {
        return parseInt(val).toFixed(2);
      }
      
      return 0
    },
// affichierMontantAvenant(){
//  return id => {
//         if (id != null && id != "") {
//            const qtereel = this.avenants.find(qtreel => qtreel.marche_id == id);

//       if (qtereel) {
//         return qtereel.montant_avenant;
//       }
//       return 0
//         }
//       };
// },

partDonBailleur: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.montant_don)
                        },valInite);
                    }
                }
            },
partEmpruntBailleur: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.montant_emprunt)
                        },valInite);
                    }
                }
            },


montantTotalDonEtEmprunt() {
      const val = parseFloat(this.partDonBailleur(this.detail_marche.id)) + parseFloat(this.partEmpruntBailleur(this.detail_marche.id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },





affichierNombreAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).length; 
      
    }
    
  }
},





affichierMontantAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
    }
    
  }
},

montantMarcheAvecAvenant() {
      const val = parseFloat(this.afficheMontantReelMarche(this.detail_marche.id)) + parseFloat(this.affichierMontantAvenant(this.detail_marche.id));
      return parseFloat(val).toFixed(0);
    },



ratioAvenantMarche(){
   const val = (parseFloat(this.affichierMontantAvenant(this.detail_marche.id)) / parseFloat(this.afficheMontantReelMarche(this.detail_marche.id))) * 100;
      return parseFloat(val).toFixed(2);
},
// montantMarcheAvecAvenant() {
 
//       return id => {
//          if(id !=""){
//     const val = parseFloat((this.afficheMontantReelMarche(detail_marche.id)) + this.affichierMontantAvenant(detail_marche.id)).toFixed(2); 
//     if (isNaN(val)) return null;
//     return val;
//     }
    
//  }

//     },
afficheTypeActeFinancier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeActeEffetFinanciers.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
 afficheNumeroMarcheAttribuer() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterActeEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.marche.numero_marche;
      }
      return "pas_numero"
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


 objetfacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet_facture;
      }
      return 0
        }
      };
    },
objetfactureNumero() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_facture;
      }
      return 0
        }
      };
    },
objetfactureMontant() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_propose_ttc;
      }
      return 0
        }
      };
    },








griseTypeEngagement() {
      return this.recupererTypeProcedure == "Engagement Bon de Commande";
    },

afficherNumeroDemandeEngagemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_demande_engage;
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
afficherObjetMandat() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editMandat.facture_id);

      if (norme) {
       return norme.objet_facture;
      }
      return ""
    },
affichiernumMandat() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editMandat.facture_id);

      if (norme) {
       return norme.numero_facture;
      }
      return "0"
    },

afficherMontantMandat() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editMandat.facture_id);

      if (norme) {
       return norme.prix_propose_ttc;
      }
      return "0"
    },




















afficherObjetFactureEngagement() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.objet_facture;
      }
      return ""
    },
affichiernumEngagement() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.numero_facture;
      }
      return ""
    },

afficherMontantEngagement() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.editEngagement.facture_id);

      if (norme) {
       return norme.prix_propose_ttc;
      }
      return ""
    },













afficherObjetFacture() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.formDataFacture.id);

      if (norme) {
       return norme.objet_facture;
      }
      return ""
    },
afficherNumeroFcture() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.formDataFacture.id);

      if (norme) {
       return norme.numero_facture;
      }
      return ""
    },

afficherMontantFacture() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.id == this.formDataFacture.id);

      if (norme) {
       return norme.prix_propose_ttc;
      }
      return ""
    },











 dotationDisponibleAnterieureDirect() {
      const val =  parseFloat(this.dotationInite(this.detail_marche.imputation).Dotation_Initiale) - parseFloat(this.sommeEgagementLigne(this.detail_marche.imputation));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },




 dotationDisponibleAnterieure() {
      const val =  parseFloat(this.dotationInite(this.detail_marche.imputation).Dotation_Initiale) - parseFloat(this.montantCumulerLiquidationMandat);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

montantCumulerMandatEngagement() {
      const val = parseFloat(this.sommeEgagementLigne(this.detail_marche.id)) + parseFloat(this.sommeMontantEngagement);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
      montantCumulerEngagementMandat() {
      const val = parseFloat(this.sommeEgagementLigne(this.detail_marche.id)) + parseFloat(this.editEngagement.total_general);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
      montantCumulerLiquidationMandat() {
      const val = parseFloat(this.sommeEgagementLigne(this.detail_marche.id)) + parseFloat(this.afficheMontantFaacture(this.afficheIdFacture(this.editLiquidation.marche_id)));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
     montantCumulerLiquidationMandatModifer() {
      const val = parseFloat(this.sommeEgagementLigne(this.detail_marche.id)) + parseFloat(this.afficheMontantFaacture(this.afficheIdFacture(this.editMandat.marche_id)));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
montantCumulerMandat() {
      const val = parseFloat(this.sommeEgagementLigne(this.detail_marche.id)) + parseFloat(this.sommeMontant);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

montantMarcheDisponible() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.montantCumulerMandat);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },







afficherObjectFacture() {
    
       const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.numero_facture == this.afficherNumeroFcture);

      if (norme) {
       return norme.objet_facture;
      }
      return ""
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
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

      if (norme) {
       return norme.afficheSection.code_section.concat('  ', norme.afficheSection.nom_section)
      }
      return ""
    },
    afficherSectId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

      if (norme) {
       return norme.afficheSection.id;
      }
      return ""
    },
 afficherProgDot() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

      if (norme) {
       return norme.afficheProgramme.libelle;
      }
      return ""
    },
    afficherProgDotId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

      if (norme) {
       return norme.afficheProgramme.id;
      }
      return ""
    },
afficherActi() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

      if (norme) {
       return norme.afficheAction.libelle;
      }
      return ""
    },
    afficherActid() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.unite_administrative_id);

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























afficheBailleur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


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








montantHT() {
      const val =  parseFloat(this.formData.prix_unitaire) * parseFloat(this.formData.quantite);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    

  
   

afficheFactureTableau() {
      return id => {
        if (id != null && id != "") {
          return this.getFacturePersonnaliser.filter(
            element => element.marche_id == this.detail_marche.id
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


// restePayeMarcheMandat() { 
//       const val = parseFloat(this.MontantMarche) - parseFloat(this.montantCumulerMandat);
//       return parseFloat(val).toFixed(2);
//     },

veifEquipementExist() {
      return this.formData.type_procedure_id !== "0";
    },
    veifautreengagement() {
      return this.formData.type_engagement_id !== "4";
    },



recuperer() {
      const val = parseInt(this.formData.decision_cf);
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

afficherSect() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParBienService.find(qtreel => qtreel.ua_id == this.detail_marche.unite_administrative_id);

      if (qtereel) {
        return qtereel.section_id;
      }
      return 0
        }
      };
    },
    afficherAct() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParBienService.find(qtreel => qtreel.activite_id == this.detail_marche.activite_id);

      if (qtereel) {
        return qtereel.action_id;
      }
      return 0
        }
      };
    },

 afficherProg() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParBienService.find(qtreel => qtreel.activite_id == this.detail_marche.activite_id);

      if (qtereel) {
        return qtereel.program_id;
      }
      return 0
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
      
      const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.fournisseur_id;
      }
      return 0
    },
 NumeroFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.numero_cc;
      }
      return 0
    },
     AfficherIdFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.id;
      }
      return 0
    },
     AfficherIdFournisseur1() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.id;
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
  AfficherFournisseur_id() {
      
      const norme = this.acteEffetFinanciers.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.entreprise_id;
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
      ligneEconomiqueBudgetaire() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.marche.economique_id;
      }
      return 0
    },
   afficherligneEconomiqueBudgetaire() {
      
      const norme = this.marches.find(normeEquipe => normeEquipe.id == this.detail_marche.id);

      if (norme) {
        return norme.imputation;
      }
      return 0
    },
      afficheligneEconom() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.codebudget == id);

      if (qtereel) {
        return qtereel.economique_id ;
      }
      return 0
        }
      };
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
//  montantMarcheAvecAvenant() {
      
//       const norme = this.acteEffetFinanciers.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

//       if (norme) {
//         return norme.montant_act;
//       }
//       return 0
//     },
    sommeEngagement(){
  return id => {
    if(id !=""){
  
        
    return this.mandats.filter(element => element.marche_id == this.detail_marche.id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2); 
      
    }
    
  }
},
sommeEngagementTableau(){
  return id => {
    if(id !=""){
  
        
    return this.getMandatPersonnaliserVise.filter(element => element.marche_id == this.detail_marche.id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2); 
      
    }
    
  }
},


restePayeMarche() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.sommeEngagementTableau(this.detail_marche.id));
      return parseFloat(val).toFixed(0);
      
    },
    restePayeMarcheMandat() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.montantCumulerMandat);
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
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.detail_marche.economique_id);

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



 sommeEgagementLigneTableau: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
sommeEgagementLigne: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.mandats.filter(normeEquipe => normeEquipe.marche_id == this.detail_marche.id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
afficheMarcheEngage() {
      return id => {
        if (id != null && id != "") {
          return this.engagements.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },
    afficheMarcheRealiteServiceFait() {
      return id => {
        if (id != null && id != "") {
          return this.realiteServiceFait.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },
     afficheMarcheLiquidation() {
      return id => {
        if (id != null && id != "") {
          return this.liquidation.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },
afficheMarcheAvenant() {
      return id => {
        if (id != null && id != "") {
          return this.avenants.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },

afficheMandatMarcheTableau() {
      return id => {
        if (id != null && id != "") {
          return this.getMandatPersonnaliser.filter(
            element => element.marche_id == this.detail_marche.id
          );
        }
      };
    },
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
     marcheMandat() {
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
     afficheActionProg() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauAction.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
    afficheAtiviteProg() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
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

montantDisponibleBudget() {
      const val =  parseFloat(this.dotationInite(this.detail_marche.imputation).Dotation_Initiale) - parseFloat(this.sommeEgagementLigne(this.detail_marche.id));
      
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

montantDisponibleBudgetMandat() {
      const val =  parseFloat(this.dotationDisponibleAnterieure) - parseFloat(this.sommeMontant);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
     
      return 0
     
    },
    montantDisponibleBudgetMandatDirect() {
      const val =  parseFloat(this.dotationDisponibleAnterieureDirect) - parseFloat(this.sommeMontantMandat);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
     
      return 0
     
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
















recupererObjetFacture() {
      
      const norme = this.getFacturePersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.objet_facture;
      }
      return ""
    },


recupererTypeProcedure() {
      
      const norme = this.choixprocedure.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.tprocedure;
      }
      return ""
    },

    recupererUniteAdministrative() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheUA.libelle;
      }
      return ""
    },

recupererProgrammeDotation(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheProgramme.libelle;
      }
      return ""
},

recupererAction(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheAction.libelle;
      }
      return ""
},

recupererSection(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheSection.nom_section;
      }
      return ""
},

recupererNatureDepense(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheGdeNature.libelle;
      }
      return ""
},

recupererActivite(){
   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.detail_marche.objetUniteAdministrative.id);

      if (norme) {
        return norme.afficheActivite.libelle;
      }
      return ""
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
                "supprimerFacture",
                "ajouterChoixProcedure",
                 "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",
      "modifierMarche",
      "getActeEffetFinancier",
      "getMarche"
               
            ]),
 ...mapActions("uniteadministrative", [              
                "modifierMontantBudgetaire",
                "ajouterRealiteServiceFait",
                "modifierRealiteServiceFait",
                "ajouterLiquidation",
                "modifierLiquidation",
                "supprimerLiquidation",
                "supprimerRealiteServiceFait"
            ]),
    
   









             fonctionModifierLiquidation() {
     

                  if (this.editLiquidation.numero_bon_manuel ==""){
alert("Veuillez saisir le numrero du Bon")
      }
      else if (this.editLiquidation.numero_demande =="")
      {
        alert("Veuillez saisir le numrero de la demande")
      }
    
      else
      {
 var nouvelObjet = {
      ...this.editLiquidation,
      exo_id :this.editLiquidation.exo_id,
       	imputation_budgetaire :this.detail_marche.imputation,
        	section_id :this.editLiquidation.section_id,
         programme_id :this.afficheProgrammeId(this.editLiquidation.marche_id),
        
         action_id :this.afficheActionId(this.editLiquidation.marche_id),
         activite_id : this.afficheActiviteId(this.editLiquidation.marche_id),
         ua_id: this.afficheUAId(this.editLiquidation.marche_id),
         nature_depense_id:this.afficheGrandNatureId(this.editLiquidation.marche_id),
       plan_budgetaire_id:this.affichePlanEconomiqueId(this.editLiquidation.marche_id),
     
        marche_id:this.editLiquidation.marche_id,
        mode_paiement_id:this.afficheIdModePaiement(this.editLiquidation.marche_id),
fournisseur_id:this.afficheIdFournisseur(this.editLiquidation.marche_id),
egagement_id:this.afficheIdEngagement(this.editLiquidation.marche_id),

 
       };
 this.modifierLiquidation(nouvelObjet);
this.$("#exampleDecisionOrdonnateurLiquidation").modal('hide');
this.$("#exampleDecisionControlleurFinancierLiquidation").modal('hide');
this.$("#exampleDecisionEmetteurLiquidation").modal('hide');
          this.editLiquidation={
                  numero_bon_manuel:"",
numero_demande:"",
	exo_id:"",
  	imputation_budgetaire:"",
    section_id:"",
    	programme_id:"",
      action_id:"",
      activite_id:"",
      	ua_id:"",
        nature_depense_id:"",
        plan_budgetaire_id:"",
        marche_id:"",
        mode_paiement_id:"",
        fournisseur_id:"",
        	egagement_id:"",
          decision_emetteur:"",
          nom_emetteur:""
                };

      }
       
    },
            fonctionAjouterLiquidation(){
      if (this.formData9.numero_bon_manuel ==""){
alert("Veuillez saisir le numrero du Bon")
      }
      else if (this.formData9.numero_demande =="")
      {
        alert("Veuillez saisir le numrero de la demande")
      }
    
      else
      {
 var nouvelObjet = {
      ...this.formData9,
      exo_id :this.editRealiteServiceFait.exercice_budget,
       	imputation_budgetaire :this.detail_marche.imputation,
        	section_id :this.editRealiteServiceFait.section_id,
         programme_id :this.afficheProgrammeId(this.editRealiteServiceFait.marche_id),
        
         action_id :this.afficheActionId(this.editRealiteServiceFait.marche_id),
         activite_id : this.afficheActiviteId(this.editRealiteServiceFait.marche_id),
         ua_id: this.afficheUAId(this.editRealiteServiceFait.marche_id),
         nature_depense_id:this.afficheGrandNatureId(this.editRealiteServiceFait.marche_id),
       plan_budgetaire_id:this.affichePlanEconomiqueId(this.editRealiteServiceFait.marche_id),
     
        marche_id:this.editRealiteServiceFait.marche_id,
        mode_paiement_id:this.afficheIdModePaiement(this.editRealiteServiceFait.marche_id),
fournisseur_id:this.afficheIdFournisseur(this.editRealiteServiceFait.marche_id),
egagement_id:this.afficheIdEngagement(this.editRealiteServiceFait.marche_id),

 
       };
this.ajouterLiquidation(nouvelObjet)
this.$("#exampleModalLiquidation").modal('hide');
this.formData9= {

};

      }
      

    },
   modifierRealiteService() {

      this.modifierRealiteServiceFait(this.editRealiteServiceFait);
this.$("#exampleDecisionServiceBeneficiare").modal('hide');
this.$("#exampleModalRealiteServiceFait").modal('hide');
this.$("#exampleDecisionControlleurFinancier").modal('hide');
          this.editRealiteServiceFait={
                  	section_id: "",
      marche_id: "",
      fournisseur_id: "",
    facture_id: "",
    ua_id: "",
    decision_service_beneficiaire: "",
    date_service_beneficiaire: "",
    observation_service_beneficiaire: "",
    nom_service_beneficiaire: "",
    decision_controleur_financier: "",
    date_controleur_financier: "",
    observation_controleur_financier: "",
    nom_controleur_financier: "",
    	montant: "",
    	exercice_budget: "",
                };
       
    },

ajouterMandatEngagement(){
      if (this.afficherMontantEngagement < this.editEngagement.total_general){
alert("Le montant engagé est superieure au montant de la facture")
      }
      else if (this.afficherMontantEngagement > this.editEngagement.total_general)
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.afficherMontantEngagement)
      {
        alert("Impossible d'emettre l'engagement veuillez revoir la dotation svp")
      }
       else if (this.montantMarcheAvecAvenant == this.sommeEgagementLigneTableau(this.detail_marche.id))
      {
        alert("Marché apuré")
      }
      else
      {
 var nouvelObjet = {
      ...this.formData,
      exercice_budget :this.anneeAmort,
       	numero_cc_id :this.NumeroFournisseur,
        nom_entreprise :this.nomFournisseur,
         adresse_entreprise :this.AdresseFournisseur,
        //  total_general :this.sommeMontant,
         budget_general_id :this.CodeBudgetaire,
         marche_id : this.detail_marche.id,
         montant_a_paye: this.montantResteApaye,
         montant_cumul:this.montantCumuler,
       ligne_id:this.idBudgetaire,
      //    numero_facture:this.afficherNumeroFcture,
      // montant_facture:this.afficherMontantFacture,
      // 	objet_depense : this.formData.objet_facture,
        facture_id:this.editEngagement.facture_id,
        type_procedure_id	:this.recupererTypeProcedure,
engagement_id:this.editEngagement.id,


// numero_engage:this.formDataEngage.numero_engage,
// numero_demande:this.formDataEngage.numero_demande_engage,
programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
activite_id:this.detail_marche.activite_id,
  ua_id:this.detail_marche.unite_administrative_id,
  grd_nature_id:this.detail_marche.gdenature_id,

section_id:this.afficherSectId,
  total_general:this.editEngagement.total_general,
    montant_tresor:this.editEngagement.montant_tresor,
      montant_don:this.editEngagement.montant_don,
 montant_emprunt:this.editEngagement.montant_emprunt,
 bailler_id:this.editEngagement.bailler_id,
 mod_paiement_engage:this.editEngagement.mod_paiement_engage
 
       };
this.ajouterMandat(nouvelObjet)
this.$("#exampleModalMandatEngagement").modal('hide');
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


























 ajouterChoixProcLocal(){

   if(this.formData.tprocedure =="Engagement Bon de Commande"){
 var nouvelObjet = {
      ...this.formData,
      marche_id :this.detail_marche.id,
    
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
      marche_id :this.detail_marche.id,
    
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
    marche_id : this.detail_marche.id,
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
      marche_id : this.detail_marche.id,
      objet_facture:this.detail_marche.objet
       };
      
this.modifierFacture(nouvelObjet)

this.$("#modatFactureModifier").modal('hide');


    },































        
      


//     },
 ajouterMandatLocal(){
      if (this.afficherMontantFacture < this.sommeMontant){
alert("Le montant engagé est superieure au montant de la facture")
      }
      else if (this.afficherMontantFacture > this.sommeMontant)
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.afficherMontantFacture)
      {
        alert("Impossible d'emettre l'engagement veuillez revoir la dotation svp")
      }
       else if (this.montantMarcheAvecAvenant == this.sommeEgagementLigneTableau(this.detail_marche.id))
      {
        alert("Marché apuré")
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
         numero_facture:this.afficherNumeroFcture,
      montant_facture:this.afficherMontantFacture,
      	objet_depense : this.formData.objet_facture,
        facture_id:this.formDataEngage.facture_id,
        type_procedure_id	:this.recupererTypeProcedure,
engagement_id:this.formDataEngage.id,
// numero_engage:this.formDataEngage.numero_engage,
// numero_demande:this.formDataEngage.numero_demande_engage,
programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
activite_id:this.detail_marche.activite_id,
  ua_id:this.detail_marche.unite_administrative_id,
  grd_nature_id:this.detail_marche.gdenature_id,

section_id:this.afficherSectId

       };
this.ajouterMandat(nouvelObjet)
this.$("#exampleModalMandat").modal('hide');
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


ajouterMandatDirectLocal(){
      if (this.afficherMontantFacture < this.sommeMontant){
alert("Le montant engagé est superieure au montant de la facture")
      }
      else if (this.afficherMontantFacture > this.sommeMontant)
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.afficherMontantFacture)
      {
        alert("Impossible d'emettre l'engagement veuillez revoir la dotation svp")
      }
       else if (this.montantMarcheAvecAvenant == this.sommeEgagementLigneTableau(this.detail_marche.id))
      {
        alert("Marché apuré")
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
         numero_facture:this.afficherNumeroFcture,
      montant_facture:this.afficherMontantFacture,
      	objet_depense : this.formData.objet_facture,
        facture_id:this.formDataFacture.id,
        type_procedure_id	:this.recupererTypeProcedure,
engagement_id:this.formDataEngage.id,
// numero_engage:this.formDataEngage.numero_engage,
// numero_demande:this.formDataEngage.numero_demande_engage,
programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
activite_id:this.detail_marche.activite_id,
  ua_id:this.detail_marche.unite_administrative_id,
  grd_nature_id:this.detail_marche.gdenature_id,

section_id:this.afficherSectId

       };
this.ajouterMandat(nouvelObjet)
this.$("#exampleModalMandat").modal('hide');
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






















afficherModalModifierMotifMandatEmetteur(index) {
      this.$("#exampleModalMotifMandatEmetteur").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editMandat = this.afficheMandatMarcheTableau(this.detail_marche.id)[index];
      },
afficherModalModifierMotifMandat(index) {
      this.$("#exampleModalMotifMandat").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editMandat = this.afficheMandatMarcheTableau(this.detail_marche.id)[index];
      },


afficherModalProcedureFacture() {

   if(this.DisponibleBudgetaireApresLiquidation < this.montantMarcheAvecAvenant)
 {
alert("Montant du marche est supperieure au Budget")
}
else{
  this.$("#modalTypeEngagement").modal({
        backdrop: "static",
        keyboard: false
      });
}
    
    },

afficherModalModifierFacture(index) {
      this.$("#modatFactureModifier").modal({
        backdrop: "static",
        keyboard: false
      });

       this.formData1 = this.afficheFactureTableau(this.detail_marche.id)[index];
    },


afficherModalAjouterMandatDirect(id) {
      this.$("#exampleModalMandat").modal({
        backdrop: "static",
        keyboard: false
      });
      // this.formDataEngage = this.afficheMarcheEngage(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
        this.formDataFacture = this.afficheFactureTableau(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
    },


//  afficherModalAjouterRealiteServiceFait(index) {
//       this.$("#exampleModalRealiteServiceFait").modal({
//         backdrop: "static",
//         keyboard: false
//       });
//       this.editEngagement = this.afficheMarcheEngage(this.detail_marche.id)[index]
//       // this.editEngagement = this.afficheMarcheEngage(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
//         // this.formDataFacture = this.afficheFactureTableau(this.detail_marche.objetUniteAdministrative.id).find(recupererObjet => recupererObjet.id == id)
//     },
  retourListeEntreprise(){
                 this.$router.push({ name: 'executionMarche' })
            },








 modifierModalMandatLocal(){
    
     
   if (this.afficheMontantFaacture(this.afficheIdFacture(this.editMandat.marche_id)) < this.afficheMontantAutorise(this.editMandat.marche_id)){
alert("Le montant engagé est superieure au montant de la facture")
      }
      else if (this.afficheMontantFaacture(this.afficheIdFacture(this.editMandat.marche_id)) > this.afficheMontantAutorise(this.editMandat.marche_id))
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.afficheMontantFaacture(this.afficheIdFacture(this.editMandat.marche_id)))
      {
        alert("Impossible d'emettre l'engagement veuillez revoir la dotation svp")
      }
        
      else
      {
 var nouvelObjet = {
      ...this.editMandat,
      exercice_budget :this.anneeAmort,
       	numero_cc_id :this.NumeroFournisseur,
        nom_entreprise :this.nomFournisseur,
         adresse_entreprise :this.AdresseFournisseur,
         total_general :this.sommeMontantMandat,
         budget_general_id :this.CodeBudgetaire,
         marche_id : this.detail_marche.id,
         montant_a_paye: this.montantResteApaye,
         montant_cumul:this.montantCumuler,
       ligne_id:this.idBudgetaire,
         numero_facture:this.afficherNumeroFcture,
      montant_facture:this.afficherMontantFacture,
      	objet_depense : this.formData.objet_facture,
        facture_id:this.editMandat.facture_id,
        type_procedure_id	:this.recupererTypeProcedure,

programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
activite_id:this.detail_marche.activite_id,
  ua_id:this.detail_marche.unite_administrative_id,
  grd_nature_id:this.detail_marche.gdenature_id,

section_id:this.afficherSectId

       };
  this.modifierMandat(nouvelObjet)
      this.$('#ModifierModalMandat').modal('hide');
      this.$('#exampleModalMotifMandat').modal('hide');
      this.$('#exampleModalMotifMandatEmetteur').modal('hide');
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
              observation_emetteur:"",
              	decision_emetteur:"",
                date_decision_emetteur:"",
                nom_emetteur:""
};

      }
    
    
  //  }
      
    },


modifierModalMandatDecisionCF(){
    
     
   if (this.afficheMontantFaacture(this.afficheIdFacture(this.editMandat.marche_id)) < this.afficheMontantAutorise(this.editMandat.marche_id)){
alert("Le montant engagé est superieure au montant de la facture")
      }
      else if (this.afficheMontantFaacture(this.afficheIdFacture(this.editMandat.marche_id)) > this.afficheMontantAutorise(this.editMandat.marche_id))
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.afficheMontantFaacture(this.afficheIdFacture(this.editMandat.marche_id)))
      {
        alert("Impossible d'emettre l'engagement veuillez revoir la dotation svp")
      }
      
       else if (this.montantMarcheAvecAvenant == this.afficheMontantReelMarche(this.detail_marche.id))
      {
        let marcheObjet=this.marches.find(marche=>marche.id == this.detail_marche.id)
    marcheObjet.attribue = 5
      //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
     this.modifierMarche(marcheObjet)
      this.getMarche()
      this.getActeEffetFinancier()
      
      }
    
      else
      {
 var nouvelObjet = {
      ...this.editMandat,
      exercice_budget :this.anneeAmort,
       	numero_cc_id :this.NumeroFournisseur,
        nom_entreprise :this.nomFournisseur,
         adresse_entreprise :this.AdresseFournisseur,
         total_general :this.sommeMontantMandat,
         budget_general_id :this.CodeBudgetaire,
         marche_id : this.detail_marche.id,
         montant_a_paye: this.montantResteApaye,
         montant_cumul:this.montantCumuler,
       ligne_id:this.idBudgetaire,
         numero_facture:this.afficherNumeroFcture,
      montant_facture:this.afficherMontantFacture,
      	objet_depense : this.formData.objet_facture,
        facture_id:this.editMandat.facture_id,
        type_procedure_id	:this.recupererTypeProcedure,

programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
activite_id:this.detail_marche.activite_id,
  ua_id:this.detail_marche.unite_administrative_id,
  grd_nature_id:this.detail_marche.gdenature_id,

section_id:this.afficherSectId

       };
  this.modifierMandat(nouvelObjet)
      this.$('#ModifierModalMandat').modal('hide');
      this.$('#exampleModalMotifMandat').modal('hide');
      this.$('#exampleModalMotifMandatEmetteur').modal('hide');
      
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
              observation_emetteur:"",
              	decision_emetteur:"",
                date_decision_emetteur:"",
                nom_emetteur:""
};

      }
    
    
  //  }
      
    },




         afficherModalAjouter(id) {
          
      this.$("#AjouterEngage").modal({
        backdrop: "static",
        keyboard: false
      });
     
       this.formDataFacture = this.afficheFactureTableau(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
  
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

 if (this.afficherMontantEngagement1 < this.sommeMontantEngagement){
alert("Le montant engagé est superieure au montant de la facture")
      }
      else if (this.afficherMontantEngagement1 > this.sommeMontantEngagement)
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.afficherMontantEngagement1)
      {
        alert("Impossible d'emettre l'engagement veuillez revoir la dotation svp")
      }
      
      else
      {
 var nouvelObjet = {
      ...this.editEngagement,
      exercice_budget :this.anneeAmort,
       	numero_cc_id :this.NumeroFournisseur,
        nom_entreprise :this.nomFournisseur,
         adresse_entreprise :this.AdresseFournisseur,
         total_general :this.sommeMontantEngagement,
         budget_general_id :this.CodeBudgetaire,
         marche_id : this.detail_marche.id,
         montant_a_paye: this.montantResteApaye,
         montant_cumul:this.montantCumuler,
       ligne_id:this.idBudgetaire,
         numero_facture:this.afficherNumeroFcture,
      montant_facture:this.afficherMontantFacture,
      	objet_depense : this.formData.objet_facture,
        facture_id:this.editEngagement.facture_id,
        type_procedure_id	:this.recupererTypeProcedure,

programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
activite_id:this.detail_marche.activite_id,
  ua_id:this.detail_marche.unite_administrative_id,
  grd_nature_id:this.detail_marche.gdenature_id,

section_id:this.afficherSectId,
 fournisseur_id:this.AfficherFournisseur_id
       };
          var realiteServiceFait = {
     ...this.editEngagement,

      exercice_budget :this.anneeAmort,
       
         marche_id : this.detail_marche.id,
       
      	
        facture_id:this.formDataFacture.id,
       
 montant :this.sommeMontantEngagement,

  ua_id:this.detail_marche.unite_administrative_id,
  

section_id:this.afficherSectId,
id:this.afficherIdRealiteServiceFait(this.detail_marche.id),
	engagement_id:this.editEngagement.id

       };

      var odjetLiquisation = {
    

id:this.afficherIdLiquidation(this.detail_marche.id),
	engagement_id:this.editEngagement.id,



   numero_bon_manuel :this.editEngagement.numero_demande_engage,
       
         numero_demande : this.numero_engage,
        	exo_id:this.anneeAmort,
       
 imputation_budgetaire :this.CodeBudgetaire,

  section_id:this.afficherSectId,
  

programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
  

activite_id:this.detail_marche.activite_id,


  ua_id:this.detail_marche.unite_administrative_id,
  

nature_depense_id:this.detail_marche.gdenature_id,
plan_budgetaire_id:this.idBudgetaire,
  

	marche_id:this.detail_marche.id,

  mode_paiement_id:this.editEngagement.mod_paiement_engage,
  

fournisseur_id:this.AfficherFournisseur_id,
       };
      
  this.modifierEngagement(nouvelObjet)
  this.modifierRealiteServiceFait(realiteServiceFait)
  this.modifierLiquidation(odjetLiquisation)
      this.$('#ModifierEngage').modal('hide');
      this.$('#exampleModalMotif').modal('hide');
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
      
      
  //  }
      
    },
    
 ajouterEngagementLocal(){
       if (this.afficherMontantFacture < this.sommeMontant){
alert("Le montant engagé est superieure au montant de la facture")
      }
      else if (this.afficherMontantFacture > this.sommeMontant)
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.afficherMontantFacture)
      {
        alert("Impossible d'emettre l'engagement veuillez revoir la dotation svp")
      }
       else if (this.montantMarcheAvecAvenant == this.sommeEgagementLigneTableau(this.detail_marche.id))
      {
        alert("Marché apuré")
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
         numero_facture:this.formDataFacture.numero_facture,
      montant_facture:this.formDataFacture.prix_propose_ttc,
      	objet_depense : this.formDataFacture.objet_facture,
        facture_id:this.formDataFacture.id,
        type_procedure_id	:this.recupererTypeProcedure,

programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
activite_id:this.detail_marche.activite_id,
  ua_id:this.detail_marche.unite_administrative_id,
  grd_nature_id:this.detail_marche.gdenature_id,

section_id:this.afficherSectId,
fournisseur_id:this.AfficherFournisseur_id
       };
       var realiteServiceFait = {
     
      exercice_budget :this.anneeAmort,
       
         marche_id : this.detail_marche.id,
       
      	
        facture_id:this.formDataFacture.id,
       
 montant :this.sommeMontant,

  ua_id:this.detail_marche.unite_administrative_id,
  

section_id:this.afficherSectId

       };
        var objetLiquidation = {
     
      numero_bon_manuel :this.formData.numero_demande_engage,
       
         numero_demande : this.formData.numero_engage,
        	exo_id:this.anneeAmort,
       
 imputation_budgetaire :this.CodeBudgetaire,

  section_id:this.afficherSectId,
  

programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
  

activite_id:this.detail_marche.activite_id,


  ua_id:this.detail_marche.unite_administrative_id,
  

nature_depense_id:this.detail_marche.gdenature_id,
plan_budgetaire_id:this.idBudgetaire,
  

	marche_id:this.detail_marche.id,

  mode_paiement_id:this.formData.mod_paiement_engage,
  

fournisseur_id:this.AfficherFournisseur_id,

  

       };
  this.ajouterEngagement(nouvelObjet)
  this.ajouterRealiteServiceFait(realiteServiceFait)
  this.ajouterLiquidation(objetLiquidation)
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

afficherModalObservationServiceBeneficiaire(index) {
      this.$("#exampleDecisionServiceBeneficiare").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editRealiteServiceFait = this.afficheMarcheRealiteServiceFait(this.detail_marche.id)[index];
      
      },
afficherModalModifierRealiteServiceFait(index) {
      this.$("#exampleModalRealiteServiceFait").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editRealiteServiceFait = this.afficheMarcheRealiteServiceFait(this.detail_marche.id)[index];
      
      },



afficherModalAjouterLiquidation(index) {
      this.$("#exampleModalLiquidation").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editRealiteServiceFait = this.afficheMarcheRealiteServiceFait(this.detail_marche.id)[index];
      
      },
afficherModalObservationEmetteurLiquidation(index) {
      this.$("#exampleDecisionEmetteurLiquidation").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editLiquidation = this.afficheMarcheLiquidation(this.detail_marche.id)[index];
  
      },
afficherModalObservationControlleurFinancierLiquidation(index) {
      this.$("#exampleDecisionControlleurFinancierLiquidation").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editLiquidation = this.afficheMarcheLiquidation(this.detail_marche.id)[index];
      
      },
afficherModalObservationOrdonnanteurLiquidation(index) {
      this.$("#exampleDecisionOrdonnateurLiquidation").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editLiquidation = this.afficheMarcheLiquidation(this.detail_marche.id)[index];
      
      },

      afficherModalModificationLiquidation(index) {
      this.$("#exampleModalLiquidationModification").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editLiquidation = this.afficheMarcheLiquidation(this.detail_marche.id)[index];
      
      },

afficherModalAjouterMandatParLiquidation(index) {
      this.$("#exampleModalLiquidation").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editLiquidation = this.afficheMarcheLiquidation(this.detail_marche.id)[index];
      
      },





afficherModalObservationControlleurFinancier(index) {
      this.$("#exampleDecisionControlleurFinancier").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editRealiteServiceFait = this.afficheMarcheRealiteServiceFait(this.detail_marche.id)[index];
      
      },
 afficherModalModifierEngagement(index) {
      this.$("#ModifierEngage").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editEngagement = this.afficheMarcheEngage(this.detail_marche.id)[index];
       
    },

afficherModalAjouterMandatApresLiquidation(index) {
      this.$("#exampleModalAjouteMandionatApresLiquidat").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editLiquidation = this.afficheMarcheLiquidation(this.detail_marche.id)[index];
      
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



showPopup2: function() {
      this.popupState2 = true;
     
    },
showPopup3: function() {
      this.popupState3 = true;
    },
    showPopup4: function() {
      this.popupState4 = true;
    },
    showPopup5: function() {
      this.popupState5 = true;
    },
    showPopup6: function() {
      this.popupState6 = true;
    },
    showPopup7: function() {
      this.popupState7 = true;
    },
    showPopup8: function() {
      this.popupState8 = true;
    },
    showPopup9: function() {
      this.popupState9 = true;
    },
    showPopup10: function() {
      this.popupState10 = true;
    },
   
showPopup20: function() {
      this.popupState2 = false;
    },


  afficherModalAjouterTitre() {
      this.$("#exampleModalAvenant").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    ajouterMandatLiquidation(){
      //  let datationdispo = parseFloat(this.montantMarcheAvecAvenant)
      // let montant_contrat = parseFloat( this.afficheMontantReelMarche(this.detail_marche.id))
      if (this.afficheMontantFaacture(this.afficheIdFacture(this.editLiquidation.marche_id)) < this.afficheMontantAutorise(this.editLiquidation.marche_id)){
alert("Le montant engagé est superieure au montant de la facture")
      }
      else if (this.afficheMontantFaacture(this.afficheIdFacture(this.editLiquidation.marche_id)) > this.afficheMontantAutorise(this.editLiquidation.marche_id))
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.afficheMontantFaacture(this.afficheIdFacture(this.editLiquidation.marche_id)))
      {
        alert("Impossible d'emettre l'engagement veuillez revoir la dotation svp")
      }
      
       else if (this.montantMarcheAvecAvenant == this.afficheMontantReelMarche(this.detail_marche.id))
      {
        alert("Marché apuré")
      }
      else
      {
 var nouvelObjet91 = {
      ...this.formDataMadat,
      
       exercice_budget :this.editLiquidation.exo_id,
      numero_bon_manuel:this.editLiquidation.numero_bon_manuel,
      numero_demande_liquidation:this.editLiquidation.numero_demande,
       numero_engage:this.afficheNumeroEngagement(this.editLiquidation.marche_id),
       numero_demande:this.afficheDemandeEngagement(this.editLiquidation.marche_id),
       Numero_bordereau_engagement:this.afficheNumeroBordeauEngagement(this.editLiquidation.marche_id),
         budget_general_id :this.detail_marche.imputation,
         marche_id : this.detail_marche.id,
         montant_a_paye: this.montantResteApaye,
         montant_cumul:this.montantCumuler,
       ligne_id:this.affichePlanEconomiqueId(this.editLiquidation.marche_id),
     banque_id:this.afficheIdBanque(this.afficheIdCompteBancaire(this.editLiquidation.marche_id)),
        // facture_id:this.editEngagement.facture_id,
        type_procedure_id	:this.recupererTypeProcedure,
engagement_id:this.editLiquidation.egagement_id,
programme_id:this.afficheProgrammeId(this.editLiquidation.marche_id),
action_id:this.afficheActionId(this.editLiquidation.marche_id),
activite_id:this.afficheActiviteId(this.editLiquidation.marche_id),
  ua_id:this.afficheUAId(this.editLiquidation.marche_id),
  grd_nature_id:this.afficheGrandNatureId(this.editLiquidation.marche_id),
	compte_id:this.afficheIdCompteBancaire(this.editLiquidation.marche_id),
section_id:this.editLiquidation.section_id,
  total_general:this.afficheMontantAutorise(this.editLiquidation.marche_id),
   
 bailler_id:this.afficheIdBailleur(this.editLiquidation.marche_id),
 mod_paiement_engage:this.afficheIdModePaiement(this.editLiquidation.marche_id),
//  numero_bon_manuel:this.editLiquidation.numero_bon_manuel,
//  numero_demande_liquidation:this.editLiquidation.numero_demande,
 numero_op:this.afficheNumeroOPATEngagement(this.editLiquidation.marche_id),
	entreprise_id:this.afficheidFour(this.editLiquidation.marche_id),
    	montant_tresor:this.afficheMontantTresor(this.editLiquidation.marche_id),
        montant_don:this.afficheMontantDon(this.editLiquidation.marche_id),
        montant_emprunt:this.afficheMontantEmprunt(this.editLiquidation.marche_id)
 
       };
this.ajouterMandat(nouvelObjet91)
this.$("#exampleModalAjouteMandionatApresLiquidat").modal('hide');
this.formDataMadat= {
 numero_mandat:"",
                  numero_bordereau:""
 
};

      }
      

    },
    // fonction pour vider l'input ajouter
    ajouterTypeTexteLocal() {
      var nouvelObjet = {
      ...this.formData,
      marche_id :this.detail_marche.id,
   
       };
      this.ajouterAvenant(nouvelObjet);
this.$("#exampleModalAvenant").modal('hide');
     
    },
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {

      this.$("#modificationModalAvenant").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editAvenant = this.afficheMarcheAvenant(this.detail_marche.id)[index];
    },
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      var nouvelObjet = {
      ...this.editAvenant,
      marche_id :this.detail_marche.id,
   
       };
      this.modifierAvenant(nouvelObjet);
this.$("#modificationModalAvenant").modal('hide');
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
       
    },

    },

















         
        }
    








</script>
<style scoped>
 /* .testtaille {
        
      height: 1000px;
    } */
    .taillemodal45 {
        width: 1200px;
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
    .tailfacture{
      height: 500px;
    }

     .taillemodal6 {
        width: 1600px;
        margin: 0 -780px;
    }
    .taillemodal61 {
        width: 1500px;
        
    }
    .tailleRealiteServiceFait{
        width: 1600px;
        margin: 0 -780px;
    }
    .tailgrand{
  width: 89%;
  margin: 0 -45%;
}
</style>
