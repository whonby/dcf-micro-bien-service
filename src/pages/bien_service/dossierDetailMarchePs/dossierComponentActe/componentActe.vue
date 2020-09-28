
<template>
    <div class="container-fluid">
                <table class="table table-bordered table-striped" v-if="macheid">
                    <thead>
                    <tr>
                        <th>Reference acte</th>
                        <th>Entreprise</th>
                        <th>Montant acte</th>
                        <th>Montant Avance Demarrage</th>
                         <th>Montant retenue garantie</th>
                         <th>Montant cautionnement</th>
                        <th>Type acte</th>
                        <th>Objet marche.</th>
                        <th>Imputation</th>
                        <th>Durée du marché</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for=" effetFinancier in listeActeEffectFinnancier(macheid)"
                        :key="effetFinancier.id">
                        
                              <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{effetFinancier.reference_act || 'Non renseigné'}}</td>
                            <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{afficherEntrepriseId(effetFinancier.entreprise_id) || 'Non renseigné'}}</td>
                             <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{formatageSomme(parseFloat(effetFinancier.montant_act ))|| 'Non renseigné'}}</td>
                             <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{formatageSomme(parseFloat(effetFinancier.avance_demarrage_ttc )) || 'Non renseigné'}}</td>

                             <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{formatageSomme(parseFloat(effetFinancier.montant_ttc_retenue_garantie )) || 'Non renseigné'}}</td>

                            <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{formatageSomme(parseFloat(effetFinancier.montant_ttc_cautionnement )) || 'Non renseigné'}}</td>
                            
                              <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{affichierLibelleTypeActeFinancier(effetFinancier.type_act_effet_id) || 'Non renseigné'}}</td>
                             <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{effetFinancier.marche.objet || 'Non renseigné'}}</td>
                            
                             <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{effetFinancier.marche.imputation || 'Non renseigné'}}</td>
                              <td @click="afficherModalModifierActeEffetFinancier(effetFinancier.id)">
                            {{effetFinancier.duree || 'Non renseigné'}} jrs</td>
<td>
      <div class="btn-group">
                            <button @click.prevent="supprimerActeEffetFinancier(effetFinancier.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span>
                            </button>
                        </div>
</td>
                    </tr>
                    </tbody>
                </table>

              
     



<div id="ajouterActeEffetFinancier" class="modal hide grdirModalActeEffet">
      <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Information sur l'attribution de l'acte</h3>
            </div>
            
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                 <li class="active"><a data-toggle="tab" href="#tab8888">Identification de L'acte</a></li>
                                <li class=""><a data-toggle="tab" href="#tab00050">Informations financières</a></li>  
                            </ul>
                        </div>
                        <div class="widget-content tab-content">

                            <div id="tab8888" class="tab-pane active">
                         
                            <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                        <div class="control-group">
                        <label class="control-label">Type acte effet financier.</label>
                        <div class="controls">
                          <select v-model="formEffetFinancier.type_act_effet_id" class="span">
                                <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
                        </div>
                    </div>
                            </td>
                            <td>

                        <div class="control-group">
                        <label class="control-label">Entreprise  </label>
                        <div class="controls" v-if="affichierNomEntreprise">
                          <!-- <select v-model="formEffetFinancier.entreprise_id" class="span">
                                <option v-for="varText in affichierNomEntreprise(macheid)" :key="varText.id"
                                        :value="varText.entreprise_id">{{varText.nom_cand}}</option>
                            </select> -->
                            <!-- <input type="text" :value="affichierNomEntreprise(macheid)"> -->
                                    {{affichierNomEntreprise.nom_cand}}
                        </div>

                         
                    </div>
                            
                    
                            </td>

                            <td>
                           <div class="control-group">
                        <label class="control-label">Banque.</label>
                        <div class="controls" v-if="affichierNomEntreprise">
                          <select v-model="formEffetFinancier.banq_id" class="span" >
                               <option v-for="varText in afficherBanqueDynamiqueId(affichierNomEntreprise.entreprise_id)" :key="varText.id"
                                        :value="varText.id">{{afficherBanqueDynamique(varText.banq_id)}}</option>
                            </select>
                        
                        </div>
                    </div>
                        </td>

                    <td>
                      <div class="control-group">
              <label class="control-label">Compte: {{afficherIdCompte(formEffetFinancier.banq_id)}}</label>
              <div class="controls " >
            <input type="text"  class="span" :value="afficherLeCompteEnFonctionDeLaBanque(formEffetFinancier.banq_id)" readonly >
      
              </div>
            </div>
            
                    </td>



                            <!-- <td>


                        <div class="control-group">
                        <label class="control-label">Text juridique </label>
                        <div class="controls">
                           <select v-model="formEffetFinancier.text_juridique_id" class="span">
                                <option v-for="varText in text_juridiques" :key="varText.id"
                                        :value="varText.id">{{varText.objet_text}}</option>
                            </select>
                        </div>
                    </div>
                            </td> -->

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
                                    v-model="formEffetFinancier.autorite_approbation"
                                    class="span"
                                    placeholder=" "
                            />
                            <input type="hidden" v-model="formEffetFinancier.ua_id" />
                        </div>
                    </div>

                            </td>


                                           <td>
                    <div class="control-group">
                        <label class="control-label"> date d'approbation</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formEffetFinancier.date_approbation"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>

                            </td>

                                  <td colspan="">
                    <div class="control-group">
                        <label class="control-label">Numero du marche/contract</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formEffetFinancier.numero_marche"
                                    class="span"
                                    placeholder="Saisir le numero "
                            />
                        </div>
                    </div>

                            </td>
                                       <td>
                    <div class="control-group">
                        <label class="control-label">Reference acte</label>
                        <div class="controls">
                            <input type="text" v-model="formEffetFinancier.reference_act"
                                    class="span"
                                    placeholder="refence acte"
                            />
                        </div>
                    </div>
                            </td>

                           </tr>
                        <tr>
                   
                      
                          <td colspan="2" width="550">
                         <div class="control-group">
                            <label class="control-label">Objet offre :</label>
                            <div class="controls">
                            <textarea  :value="affichierObjetMarche(macheid)"  class="textarea_editor span11" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                                  <td>
                     <div class="control-group">
                        <label class="control-label">Incidence financière</label>
                        <div class="controls">
                            <select  v-model="formEffetFinancier.incidence_financiere" class="span">
                               <option value="0">Oui</option>
                               <option value="1">Non</option>
                            </select>
                                    
                                  
                            
                        </div>
                    </div>
                            </td>

                            
                             <td>

                            <div class="control-group">
                        <label class="control-label" >Date de signature attributaire</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_attributaire"
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
                        <label class="control-label" title=" ">Date de reception definitive</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_reception"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>
                   
                           
                           <td>
                     <div class="control-group">
                        <label class="control-label">Date ordre de service demarrage</label>
                        <div class="controls">
                            <input type="date" v-model="formEffetFinancier.date_odre_service"
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
                            <input type="date" :min="formEffetFinancier.date_odre_service" :readonly="getDateFinExécutionValue" v-model="formEffetFinancier.date_fin_exe"
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
                            <input type="text"  readonly :value="nombreDejourCalcule"
                                    class="span"
                                   
                            />
                        </div>
                    </div>
                            </td>
                        </tr>
                            </table>
                         </div>

                         <div id="tab00050" class="tab-pane">
                        <table class="table table-bordered table-striped">
                             <tr>
                             <td>
                     <div class="control-group">
                        <label class="control-label">Avance Demarrage Ht</label>
                        <div class="controls">
                           
                                    
                              <input type="text" v-model="formEffetFinancier.avance_demarrage_ht"
                                    class="span"
                                    placeholder="Saisir le montant "
                            />     
                            
                        </div>
                    </div>
                            </td>
                              <td>

                     <div class="control-group">
                        <label class="control-label">Montant acte/réel du marché (HT)</label>
                        <div class="controls">
                            <input type="text" v-model="formEffetFinancier.montant_act_ht"
                                    class="span"
                                    placeholder="Saisir le montant "
                            />
                        </div>
                    </div>
                            </td>


                        <td >
              <div class="control-group">
                <label class="control-label">Taux % de retenue de garantie</label>
                <div class="controls">
                  <input
                    type="number"  v-model="formEffetFinancier.taux_retenue_garantie"
                       placeholder="saisir le taux de retenue de garantie"
              
                    class="span"
                 
                  />
                
                </div>
              </div>
            </td> 


               <td >
              <div class="control-group">
                <label class="control-label" >Taux % du cautionnement</label>
                <div class="controls">
                  <input
                    type="number"  v-model="formEffetFinancier.taux_cautionnemt"
                
                       placeholder="saisir le taux du cautionnement"
                    class="span"
                  
                  />
                
                </div>
              </div>
            </td>

                        </tr>
                          <tr>
  
                              <td>
              
              <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="formEffetFinancier.exonere" class="span">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Taux</label>
                <div class="controls">
                  <input
                    type="number"
                    
              :value="afficherEnorere" style="text-align:left;color:red"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>


                         <td >
              <div class="control-group">
                <label class="control-label" > Montant TVA du marché</label>
                <div class="controls">
                  <input
                    type="number"
                    :value="montantTva" style="text-align:left;color:red"
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>

             <td>
              <div class="control-group">
                <label class="control-label" >Montant TTC du marché</label>
                <div class="controls">
                  <input
                    type="number"
                    :value="montantHTt" style="text-align:left;color:red"
              
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>
                </tr>

                <tr>
            <td >
              <div class="control-group">
                <label class="control-label" >TVA (Avance Demarrage)</label>
                <div class="controls">
                  <input
                    type="number"
                    :value="avanceDemarrageMontantTva" style="text-align:left;color:red"
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
            <td >
              <div class="control-group">
                <label class="control-label" >Montant Avance Demarrage TTC</label>
                <div class="controls">
                  <input
                    type="number"
                    :value="avanceDemarrage" style="text-align:left;color:red"
              
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>
               


            
                                   <td >
              <div class="control-group">
                <label class="control-label" > Montant HT de retenue de garantie</label>
                <div class="controls">
                  <input
                    type="text"  :value="afficherMontantHorsTaxeRetenuGarantie" style="text-align:left;color:red"
                    placeholder="saisir le montant hors taxe du dispositif retenu"
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td> 
      
             <td>
              <div class="control-group">
                <label class="control-label" >Montant TVA de retenue de garantie</label>
                <div class="controls">
                  <input
                    type="number"  :value="afficherMontantTvaTaxeRetenuGarantie" style="text-align:left;color:red"
                   
              
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>

                
                </tr>

                <tr>
                  <td >
              <div class="control-group">
                <label class="control-label" >Montant TTC retenue de garantie </label>
                <div class="controls">
                  <input
                    type="number"  :value="afficherMontantRetenueGarantie" style="text-align:left;color:red"
                    
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
               
               

             <td >
              <div class="control-group">
                <label class="control-label" > Montant HT du cautionnement</label>
                <div class="controls">
                  <input type="text"  :value="afficheMontantHorsTaxeDuCautionnement" style="text-align:left;color:red"
                    
             
                    class="span"
                   readOnly
                  />
                 
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label" >Montant TVA du cautionnement</label>
                <div class="controls">
                  <input
                    type="number"  :value="afficherMontantTvaDuCautionnement" style="text-align:left;color:red"
                    
              
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>

            

                     <td >
              <div class="control-group">
                <label class="control-label" >Montant TTC du cautionnement </label>
                <div class="controls">
                  <input
                    type="number"
                    
                           :value="afficherMontantTTCDuCautionnement" style="text-align:left;color:red"
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>

             
            
                  
          </tr>

                        </table>
                           
                         </div>


                         </div>
          
            <div class="modal-footer">
                <a  @click.prevent="ajouterModalActeEffetFinancierLocal"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
<!--- fin ajout acte effet financier  -->








<div id="modifierActeEF" class="modal hide grdirModalActeEffet">

       <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification des informations sur l'attribution de l'acte </h3>
            </div>
            
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                 <li class="active"><a data-toggle="tab" href="#tab02045">Identification de L'acte</a></li>
                                <li class=""><a data-toggle="tab" href="#tab0001">Informations financières</a></li>
                                
                               
                                
                                
                            </ul>
                        </div>
                        <div class="widget-content tab-content">

                          <div id="tab02045" class="tab-pane active">
                            <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                        <div class="control-group">
                        <label class="control-label">Type acte effet financier.</label>
                        <div class="controls">
                        <select v-model="editActeEffetFinancier.type_act_effet_id" class="span">
                                <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                        
                        </div>
                    </div>
                            </td>
                            <td>

                        <div class="control-group">
                        <label class="control-label">Entreprise </label>
                        <div class="controls" v-if="affichierNomEntreprise">
                          <!-- <select v-model="formEffetFinancier.entreprise_id" class="span">
                                <option v-for="varText in affichierNomEntreprise(macheid)" :key="varText.id"
                                        :value="varText.entreprise_id">{{varText.nom_cand}}</option>
                            </select> -->
                            <!-- <input type="text" :value="affichierNomEntreprise(macheid)"> -->
                                    {{affichierNomEntreprise.nom_cand}}
                        </div>

                    </div>
                            </td>

                            <td>
                           <div class="control-group">
                        <label class="control-label">Banque.</label>
                        <div class="controls">
                          <select v-model="editActeEffetFinancier.banq_id" class="span" :readOnly="verifiBanqueExistModifier">
                               <option v-for="varText in afficherBanqueDynamiqueId(affichierNomEntreprise.entreprise_id)" :key="varText.id"
                                        :value="varText.id">{{afficherBanqueDynamique(varText.banq_id)}}</option>
                            </select>
                        
                        </div>
                    </div>
                        </td>

                    <td>
                      <div class="control-group">
              <label class="control-label">Compte:</label>
              <div class="controls " >
            <input type="text"  class="span" :value="afficherLeCompteEnFonctionDeLaBanque(editActeEffetFinancier.banq_id)" readonly >
      
              </div>
            </div>
                    </td>



                       
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
                            <input type="hidden" v-model="editActeEffetFinancier.ua_id" />
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

                                  <td colspan="">
                    <div class="control-group">
                        <label class="control-label">Numero du marche/contract</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editActeEffetFinancier.numero_marche"
                                    class="span"
                                    placeholder="Saisir le numero "
                            />
                        </div>
                    </div>

                            </td>
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
                           </tr>

                             <tr>
                   
                      
                          <td colspan="2" width="550">
             <div class="control-group">
                            <label class="control-label">Objet offre :</label>
                            <div class="controls">
                            <textarea  :value="affichierObjetMarche(macheid)"  class="textarea_editor span11" rows="3" placeholder="Entre le  text ..."></textarea>
                    
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
                        <label class="control-label" title=" ">Date de reception definitive</label>
                        <div class="controls">
                            <input type="date" v-model="editActeEffetFinancier.date_reception"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>

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
                            <input type="date" :min="editActeEffetFinancier.date_odre_service" :readonly="getDateFinExécutionValueEdit" v-model="editActeEffetFinancier.date_fin_exe"
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
                            <input type="text"  readonly :value="nombreDejourCalculeEdit"
                                    class="span"
                                   
                            />
                        </div>
                    </div>
                            </td>

                            </tr>
                            </table>
                          
                           </div>



                           <div id="tab0001" class="tab-pane">
                           <table class="table table-bordered table-striped">
                              <tr>
                       
                            <td>
                     <div class="control-group">
                        <label class="control-label">Montant Avance de demarrage</label>
                        <div class="controls">
                           
                                    
                              <input type="text" v-model="editActeEffetFinancier.avance_demarrage_ht"
                                    class="span"
                                    placeholder="Saisir le montant "
                            />     
                            
                        </div>
                    </div>
                            </td>
                            <td>

                     <div class="control-group">
                        <label class="control-label">Montant acte/réel du marché</label>
                        <div class="controls">
                            <input type="text" v-model="editActeEffetFinancier.montant_act_ht"
                                    class="span"
                                    placeholder="Saisir le montant "
                            />
                        </div>
                    </div>
                            </td>


                             <td>

                     <div class="control-group">
                        <label class="control-label">Taux % de retenue de garantie</label>
                        <div class="controls">
                            <input type="text" v-model="editActeEffetFinancier.taux_retenue_garantie"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                            </td>

                             <td>

                     <div class="control-group">
                        <label class="control-label">Taux % de cautionnement</label>
                        <div class="controls">
                            <input type="text" v-model="editActeEffetFinancier.taux_cautionnemt"
                                    class="span"
                                    placeholder=" "
                            />
                        </div>
                    </div>
                            </td>
                            
                        </tr>
                           
                        <tr>
                                <td>
              <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="editActeEffetFinancier.exonere" class="span">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                
                </div>
              </div>
            </td>

             <td >
              <div class="control-group">
                <label class="control-label" >Taux</label>
              
                <div class="controls">
                  <input
                    type="number"
                    
              :value="editAfficherEnorere" style="text-align:right;color:red"
                    class="span"
                   readonly
                  />
                 
                  
                </div>
              </div>
            </td>

              <td >
              <div class="control-group">
                <label class="control-label" >Montant TVA du marché</label>
        
            
                <div class="controls">
                  <input
                    type="number"
                    :value="editMontantTva" style="text-align:right;color:red"
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>

              <td>
              <div class="control-group">
                <label class="control-label" >Montant TTC du marché</label>
                <div class="controls">
                  <input
                    type="number"
                    :value="editMontantHTt" style="text-align:right;color:red"
              
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
                <label class="control-label" > Montant TVA (Avance Demarrage)</label>
            
                <div class="controls">
                  <input
                    type="number"
                    :value="editAvanceDemarrageMontantTva" style="text-align:right;color:red"
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>

             <td>
              <div class="control-group">
                <label class="control-label">Montant Avance Demarrage TTC</label>
               
                <div class="controls">
                  <input
                    type="number"
                    :value="editAvanceDemarrage"  style="text-align:right;color:red"
              
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>


            
                                   <td >
              <div class="control-group">
                <label class="control-label" > Montant HT de retenue de garantie</label>
                <div class="controls">
                  <input
                    type="text"  :value="editAfficherMontantHorsTaxeRetenuGarantie" style="text-align:left;color:red"
                    placeholder=""
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td> 
      
             <td>
              <div class="control-group">
                <label class="control-label" >Montant TVA de retenue de garantie</label>
                <div class="controls">
                  <input
                    type="number"  :value="editAfficherMontantTvaTaxeRetenuGarantie" style="text-align:left;color:red"
                   
              
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>



             </tr>


             <tr>
                  <td >
              <div class="control-group">
                <label class="control-label" >Montant TTC retenue de garantie </label>
                <div class="controls">
                  <input
                    type="number"  :value="editAfficherMontantRetenueGarantie" style="text-align:left;color:red"
                    
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
               
               

             <td >
              <div class="control-group">
                <label class="control-label" > Montant HT du cautionnement</label>
                <div class="controls">
                  <input type="text"  :value="editAfficheMontantHorsTaxeDuCautionnement" style="text-align:left;color:red"
                    
             
                    class="span"
                   readOnly
                  />
                 
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label" >Montant TVA du cautionnement</label>
                <div class="controls">
                  <input
                    type="number"  :value="editAfficherMontantTvaDuCautionnement" style="text-align:left;color:red"
                    
              
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>

            

                     <td >
              <div class="control-group">
                <label class="control-label" >Montant TTC du cautionnement </label>
                <div class="controls">
                  <input
                    type="number"
                    
                           :value="editAfficherMontantTTCDuCautionnement" style="text-align:left;color:red"
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>

             
            
                  
          </tr>

              </table>
              </div>


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

<!--- fin modifier acte effet financier  -->



  <notifications/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../src/Repositories/Repository';
import moment from 'moment';
export default {
    data(){
        return{
        
        formEffetFinancier:{
           tva_cautionnement:"",
           montant_ttc_cautionnement:"",
           montant_ht_cautionnement:"",
              exonere:"",
              montant_act_ht:"",
              taux_cautionnemt:"",
              taux_retenue_garantie:"",
              tva:"",
              taux:"",
              ua_id:"",
              avance_demarrage_ht:"",
              avance_demarrage_ttc:"",
              tva_avance_demarage:"",
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
            // text_juridique_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
             entreprise_id:"",
             marche_id:"",
             banq_id:"",
             numero_marche:""
        },

        resultaAnalysePv:[],

        editActeEffetFinancier:{
             exonere:"",
              montant_act_ht:"",
              tva:"",
              taux:"",
              ua_id:"",
              avance_demarrage_ht:"",
              avance_demarrage_ttc:"",
              tva_avance_demarage:"",
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
             //text_juridique_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
             entreprise_id:"",
             marche_id:"",
             banq_id:"",
             numero_marche:""
        }

        }
    },
    props:["macheid"],
    created(){},

       computed: {

            ...mapGetters("bienService", [ "gettersCotations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches","typeMarches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
       ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe', 
  'planActe']),
  
afficheMarcheType(){
if(this.affichierLibelleTypeMarche(this.affichierIdTypeMarche(this.macheid)) == "Travaux"){
return 1
}
else{
  return 2
}
},

affichierIdBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.comptes.find(qtreel => qtreel.rib == id);

      if (qtereel) {
        return qtereel.banq_id;
      }
      return 0
        }
      };
    },


affichierLibelleTypeMarche() {
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

affichierIdTypeMarche() {
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

afficherNomCandidat(){
  return id =>{
      if(id!=null && id!=""){
          const nomCandidat= this.getterDossierCandidats.find(item =>item.id==id)
          if(nomCandidat){
              return nomCandidat.nom_cand
          }
      }
  }  
},

afficherIDUA() { 
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return null
        }
      };
    },
    ///
 afficherNumeroDossierCandidat1() { 
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterDossierCandidats.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_dossier;
      }
      return null
        }
      };
    },

     afficherOffrefID() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterOffreFinanciers.find(qtreel => qtreel.dossier_candidat_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },

    afficherListeMontant(){
     return id => {
       if( id !== undefined) {
    var acteur = this.getterOffreFinanciers.find(acteur => acteur.id == id)
    
     return  (acteur) ? acteur.montant_total_ttc :null 
       }
    return null
     }
  
   },


 affichierLibelleTypeActeFinancier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.planActe.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

affichierIdActeFinancierDansActePlan() {
      const qtereel = this.planActe.find(
        qtreel => qtreel.code == "02",
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

AffichierElementParent() {
      
      return id => {
        if (id != null && id != "") {
          return this.planActe.filter(element => element.parent == id);
        }
      };
    },

  affichierObjetMarche(){
        return id =>{
            if(id!=null && id!=""){
                let objetMarche = this.marches.find(idMarche => idMarche.id ==id);
                if(objetMarche){
                    return objetMarche.objet
                }
                 return 0
            }
        }
    },


  enregistrerIdEntreprise(){
        return id =>{
            if(id!=null && id!=""){
                let objetMarche = this.marches.find(idMarche => idMarche.id ==id);
                if(objetMarche){
                    return objetMarche.objet
                   // console.log(objetMarche)
                }
                 return 0
            }
        }
    },


    affichierNomEntreprise() {
                let resulta=this.getterAnalyseDossiers.filter(item=>item.reference_pv== this.afficherPv(this.macheid));
               // console.log(resulta)
                if (resulta.length>0){
                    resulta.sort(function (a, b) {
                        return a.note_analyse - b.note_analyse;
                    }).reverse()
                    let first=[...resulta].shift()
                   // const [ob1]=resulta

                    console.log(first)
                    // let objet=resulta[0]
                     let dossier=first.dossier_candidature
                      console.log(dossier)
                    return dossier
                } 
             return 0
            
    },


   // calcul du montant ttc de retenu
   afficherMontantRetenueGarantie(){
     const montantttcRetenueGarantie = (parseFloat(this.montantHTt) * (this.formEffetFinancier.taux_retenue_garantie)/100)
    if (montantttcRetenueGarantie) {
        return parseInt(montantttcRetenueGarantie).toFixed(0);
      }
      return 0
   },

// calcul du montant tva de retenue de garantie

// afficherMontantTvaTaxeRetenuGarantie(){

//   const resultat = parseFloat (this.afficherMontantRetenueGarantie)/(1+ parseFloat(this.afficherTauxEnPourcentage))

//   if(resultat){
//     return parseInt( Math.round(resultat))
//   }     
//   return 0
// },


afficherMontantTvaTaxeRetenuGarantie(){

   const val = parseFloat((this.afficherMontantHorsTaxeRetenuGarantie) * parseFloat(this.afficherEnorere)/100);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0

},


// calcul du montant hors taxe de retenu de garantie  afficherMontantHorsTaxeRetenuGarantie


afficherMontantHorsTaxeRetenuGarantie(){

  const anwser = parseFloat (this.afficherMontantRetenueGarantie)/(1+ parseFloat(this.afficherTauxEnPourcentage))

  if(anwser){
    return parseInt( Math.round(anwser))
  }
  return 0
},

//  calcul montant ttc de retenu de garantie pour la modification


editAfficherMontantRetenueGarantie(){
 const response = (parseFloat(this.editMontantHTt) * (this.editActeEffetFinancier.taux_retenue_garantie)/100)
    if (response) {
        return parseInt(response).toFixed(0);
      }
      return 0
},

// calcul le montant hors taxe de retenu de garantie pour la modification
editAfficherMontantHorsTaxeRetenuGarantie(){

  const tonyData = parseFloat (this.editAfficherMontantRetenueGarantie)/(1+ parseFloat(this.afficherTauxEnPourcentage))

  if(tonyData){
    return parseInt( Math.round(tonyData))
  }
  return 0
},

// calcul le montant de tva du retenu de garantie 
editAfficherMontantTvaTaxeRetenuGarantie(){

   const data = parseFloat((this.editAfficherMontantHorsTaxeRetenuGarantie) * parseFloat(this.editAfficherEnorere)/100);
      
       if (data) {
        return parseInt(data).toFixed(0);
      }
      
      return 0
},



// calcule du montant ttc du cautionnement

afficherMontantTTCDuCautionnement(){
 const result = (parseFloat(this.montantHTt) * (this.formEffetFinancier.taux_cautionnemt)/100)
    if (result) {
        return parseInt(result).toFixed(0);
      }
      
      return 0

},

// calcul du montant de tva du cautionnement

afficherMontantTvaDuCautionnement(){

   const val = parseFloat((this.afficheMontantHorsTaxeDuCautionnement) * parseFloat(this.afficherEnorere)/100);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0

},


// calcul du montant hors taxe du cautionnement 

afficheMontantHorsTaxeDuCautionnement(){

  const anwser = parseFloat (this.afficherMontantTTCDuCautionnement)/(1+ parseFloat(this.afficherTauxEnPourcentage))

  if(anwser){
    return parseInt( Math.round(anwser))
  }
  return 0
},

// calcul le montant ttc du cautionnement
editAfficherMontantTTCDuCautionnement(){

  const res = (parseFloat(this.editMontantHTt) * (this.editActeEffetFinancier.taux_cautionnemt)/100)
    if (res) {
        return parseInt(res).toFixed(0);
      }
      
      return 0

},

// calcul du montant hors taxe du cautionnement


editAfficheMontantHorsTaxeDuCautionnement(){

   const resulVal = parseFloat (this.editAfficherMontantTTCDuCautionnement)/(1+ parseFloat(this.afficherTauxEnPourcentage))

  if(resulVal){
    return parseInt( Math.round(resulVal))
  }
  return 0
},

// calcul du montant de tva du cautionnement
editAfficherMontantTvaDuCautionnement(){
  const val = parseFloat((this.editAfficheMontantHorsTaxeDuCautionnement) * parseFloat(this.editAfficherEnorere)/100);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
},


// calcule du montant ttc

afficherEnorere(){
if(this.formEffetFinancier.exonere == 0){
  return 0
}
else {
  return this.affcherTauxEnCours
  
}
},





editAfficherEnorere(){
if(this.editActeEffetFinancier.exonere == 0){
  return 0
}
else {
  return this.affcherTauxEnCours
  
}
},

affcherTauxEnCours() {
      
      
      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },



    afficherTauxEnPourcentage() {
      
      
      const tauxArrondi = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (tauxArrondi) {
        return tauxArrondi.arrondit;
      }
      return 0
    },


    montantTva() {
      const val = parseFloat((this.formEffetFinancier.montant_act_ht) * parseFloat(this.afficherEnorere)/100);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

    editMontantTva(){
      const resulta = parseFloat ((this.editActeEffetFinancier.montant_act_ht) * parseFloat(this.editAfficherEnorere)/100)
       if(resulta){
         return parseInt(resulta).toFixed(0)
       }
     return 0
   },


   editMontantHTt(){
     let anwser = parseFloat(this.editActeEffetFinancier.montant_act_ht) + parseFloat(this.editMontantTva)
     if(anwser){
       return parseInt(anwser).toFixed(0);
     }
     return 0
   },




     montantHTt() {
      const val = parseFloat(this.formEffetFinancier.montant_act_ht) + parseFloat(this.montantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

avanceDemarrage(){
   const val = parseFloat(this.formEffetFinancier.avance_demarrage_ht) + parseFloat(this.avanceDemarrageMontantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
},

avanceDemarrageMontantTva() {
      const val = parseFloat((this.formEffetFinancier.avance_demarrage_ht) * parseFloat(this.afficherEnorere)/100);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


editAvanceDemarrageMontantTva(){
   const val = parseFloat((this.editActeEffetFinancier.avance_demarrage_ht) * parseFloat(this.editAfficherEnorere)/100);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
},


editAvanceDemarrage(){
    const val = parseFloat(this.editActeEffetFinancier.avance_demarrage_ht) + parseFloat(this.editAvanceDemarrageMontantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
},


// afficher la refernec_pv dans la table pv

afficherPv(){
    return macheid =>{
        if(macheid!=null && macheid!=""){
            const objetPv = this.getterProceVerballe.find(item => item.marche_id ==macheid)
            if(objetPv){
                return objetPv.reference
            }
            return null
        }
    }

},




// infoPVAffiche:function(){
//                 let resultaAnalysePv=[]
//                 let resulta=this.getterAnalyseDossiers.filter(item=>item.reference_pv==null );
//                 this.resultaAnalysePv=this.resultaAnalysePv.concat(resulta)
//                 // if (this.resultaAnalysePv.length>0){
//                 //     this.resultaAnalysePv.sort(function (a, b) {
//                 //         return a.note_analyse - b.note_analyse;
//                 //     }).reverse()
//                 // }
//                 //console.log(this.resultaAnalysePv)
//             },





afficherEntrepriseRecep () {
                return id => {
                    if ( id!=null && id != "" ) {
                        // console.log("Marche lettre inviation marche")
                        const objet= this.getterDossierCandidats.find(idmarche => idmarche.marche_id == id)

                        if(objet){
                            return objet.nom_cand
                        }
                        return 0
                     }
             }
            },


            // afficher la banque dynamique

            verifiBanqueExist(){
                return this.formEffetFinancier.entreprise_id =="";
            },
         verifiBanqueExistModifier(){
                return this.editActeEffetFinancier.entreprise_id =="";
            },

            afficherBanqueDynamique(){
                return id =>{
                    if(id != null && id !=""){
                      var  resultat = this.banques.find(element => element.id== id);
                       if(resultat){
                           return resultat.libelle
                       } 
                     return 0
                    }
                }
            },

       afficherBanqueId(){
                return id =>{
                    if(id != null && id !=""){
                      var  resultat = this.comptes.find(element => element.id== id);
                       if(resultat){
                           return resultat.banque_id
                       } 
                     return 0
                    }
                }
            },

// listeAvisAnoBailleur(){
//        return id =>{
//            if(id!=null && id!=""){
//                const resultatAvis = this.getterAnoDMPBailleur.find(idDemande =>idDemande.marche_id==id
//                && idDemande.avis_bail== 0)
//                return resultatAvis
//            }
//            return null
//        }
//    },


             afficherBanqueDynamiqueId(){
                return id =>{
                    if(id != null && id !=""){
                      return this.comptes.filter(element => element.entrepse_id== id)
                        

                    }
                }
            },




         afficherEntrepriseId(){
                return id =>{
                    if(id != null && id !=""){
                      let ObjetId =this.getterDossierCandidats.find(element => element.entreprise_id== id)
                        if(ObjetId){
                            return ObjetId.nom_cand
                        }

                    }
                }
            },


            // afficherLeCompteEnFonctionDeLaBanque(){       return resultat.varObjetBanque.libelle
            //     return banq_id =>{
            //         if(banq_id !=null && banq_id!=""){
            //   varObjetBanque.libelle.     return this.comptes.find(element => element.id == banq_id)

                    
            //         }
            //     }
            // },

             afficherLeCompteEnFonctionDeLaBanque(){
     return banq_id => {
       if( banq_id !== undefined) {
    var acteur = this.comptes.find(acteur => acteur.id == banq_id  )
    
     return  (acteur) ? acteur.rib :null 
       }
    return null
     }
  
   },
 afficherIdCompte(){
     return banq_id => {
       if( banq_id !== undefined) {
    var acteur = this.comptes.find(acteur => acteur.rib == banq_id  )
    
     return  (acteur) ? acteur.id :null 
       }
    return null
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



nombreDejourCalculeEdit(){
                let vM=this;
    const acteAffetEdit = vM.editActeEffetFinancier
    if(acteAffetEdit.date_odre_service == acteAffetEdit.date_fin_exe &&  acteAffetEdit.date_fin_exe !=="" && acteAffetEdit.date_odre_service !=="") return 1
     if(acteAffetEdit.date_fin_exe =="" && acteAffetEdit.date_odre_service =="") return null

       var dateF = new Date(acteAffetEdit.date_fin_exe).getTime()
        var dateO = new Date(acteAffetEdit.date_odre_service).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.editActeEffetFinancier.duree=diffJour
                  return  diffJour;
   
},

getDateFinExécutionValueEdit(){
    return !this.editActeEffetFinancier.date_odre_service !=""
},

      
                listeActeEffectFinnancier: function () {
                return macheid => {
                    if (macheid != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.getActeEffetFinancierPersonnaliser.filter(idmarche => idmarche.marche_id == macheid)
                    }
                }
            },





 
      
      },

      methods:{ 

          ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),

              

              ajouterModalActeEffetFinancierLocal(){
       var nouvelObjet = {
            ...this.formEffetFinancier,
            duree: this.nombreDejourCalcule,
            ua_id:this.afficherIDUA(this.macheid),
            taux:this.afficherEnorere,
            tva_cautionnement:this.afficherMontantTvaDuCautionnement,
            montant_ttc_cautionnement:this.afficherMontantTTCDuCautionnement,
            montant_ht_cautionnement:this.afficheMontantHorsTaxeDuCautionnement,
             montant_ht_retenu_garantie:this.afficherMontantHorsTaxeRetenuGarantie,
              montant_tva_retenu_garanti:this.afficherMontantTvaTaxeRetenuGarantie,
              montant_ttc_retenue_garantie:this.afficherMontantRetenueGarantie,
            tva:this.montantTva,
            montant_act:this.montantHTt,
           avance_demarrage_ttc:this.avanceDemarrage,
           tva_avance_demarage:this.avanceDemarrageMontantTva,
            entreprise_id:this.affichierNomEntreprise.entreprise_id,
            difference_personnel_bienService:this.afficheMarcheType,
            marche_id:this.macheid,
           // ua_id:this.ua_id,
            banq_id:this.affichierIdBanque(this.afficherLeCompteEnFonctionDeLaBanque(this.formEffetFinancier.banq_id)),
            compte_id:this.afficherIdCompte(this.afficherLeCompteEnFonctionDeLaBanque(this.formEffetFinancier.banq_id))
        }
    //let entreprisePremier=this.entreprises.find(item=>item.numero_rc==rcm)
             
    
    //this.formEffetFinancier.entreprise_id=entreprisePremier.id
    this.ajouterActeEffetFinancier(nouvelObjet)
    let marcheObjet=this.marches.find(marche=>marche.id==this.macheid)
    marcheObjet.attribue = 2
    marcheObjet.numero_marche=this.formEffetFinancier.numero_marche
   // console.log(marcheObjet)
    this.modifierMarche(marcheObjet)
    this.formEffetFinancier = {
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
             ua_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
             entreprise_id:"",
             marche_id:"",
             numero_marche:""

    }
},

         afficherModalModifierActeEffetFinancier(index){
    this.$('#modifierActeEF').modal({
        backdrop: 'static',
        keyboard: false
    });
    this.editActeEffetFinancier = this.acteEffetFinanciers.find(item=>item.id==index)
}, 

modifierModalActeEffetFinancierLocal(){
  var nouvelObjet2 = {
            ...this.editActeEffetFinancier,
            duree: this.nombreDejourCalculeEdit,
            montant_act:this.editMontantHTt,
             tva:this.editMontantTva,
             taux:this.editAfficherEnorere,
             avance_demarrage_ttc:this.editAvanceDemarrage,
           tva_avance_demarage:this.editAvanceDemarrageMontantTva,

             tva_cautionnement:this.editAfficherMontantTvaDuCautionnement,
            montant_ttc_cautionnement:this.editAfficherMontantTTCDuCautionnement,
            montant_ht_cautionnement:this.editAfficheMontantHorsTaxeDuCautionnement,
             montant_ht_retenu_garantie:this.editAfficherMontantHorsTaxeRetenuGarantie,
              montant_tva_retenu_garanti:this.editAfficherMontantTvaTaxeRetenuGarantie,
              montant_ttc_retenue_garantie:this.editAfficherMontantRetenueGarantie,
            entreprise_id:this.affichierNomEntreprise.entreprise_id,
            difference_personnel_bienService:this.afficheMarcheType,
            marche_id:this.macheid,
             compte_id:this.afficherIdCompte(this.afficherLeCompteEnFonctionDeLaBanque(this.editActeEffetFinancier.banq_id)),
        banq_id:this.affichierIdBanque(this.afficherLeCompteEnFonctionDeLaBanque(this.editActeEffetFinancier.banq_id)),
  
       
       
       }
    this.modifierActeEffetFinancier(nouvelObjet2)
    this.$('#modifierActeEF').modal('hide');
},

formatageSomme:formatageSomme,



        //    infoPVAffiche(){
        //         this.resultaAnalysePv=[]
        //         let resulta=this.getterAnalyseDossiers.filter(item=>item.reference_pv==null );
        //         this.resultaAnalysePv=this.resultaAnalysePv.concat(resulta)
        //         if (this.resultaAnalysePv.length>0){
        //             this.resultaAnalysePv.sort(function (a, b) {
        //                 return a.note_analyse - b.note_analyse;
        //             }).reverse()
        //         }
        //         //console.log(this.resultaAnalysePv)
        //     },

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 95%;
 margin: 0 -800px;

}
</style>