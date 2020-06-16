

<template>
  <div>
      <!-- <div id="exampleModalMotifMandat" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">�</button>
        <h3>Validation CF</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" >
          <div class="control-group">
                            <label class="control-label">D&eacute;cision CF </label>
                            <div class="controls">
                              <select v-model="editTransfert.decision_cf">
                               <option value="0">Attente</option>
                              <option value="1">Vis&eacute;</option>
                             <option value="2">Diff&eacute;r&eacute;</option>
                             <option value="3">R&eacute;jet&eacute;</option>
                            
    
    </select>
                           
                            </div>
                          </div>
                            <div class="control-group">
                            <label class="control-label">Motif CF </label>
                            <div class="controls">
                              <select v-model="editTransfert.motif">
                             
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
                              <textarea  class="span" row = "6" v-model="editTransfert.observation">
                              </textarea>
                            </div>
                          </div>
                           <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editTransfert.date_motif"/>
                              
                                
                            </div>
                          </div>
                           
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierUniteAdministrativeLocal(editTransfert)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div> -->
<!----- ajouter modal   ---->


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Information sur le Tansfert</h3>
      </div>

      <div class="widget-title">
                            <ul class="nav nav-tabs">
                                 <li class="active"><a data-toggle="tab" href="#tab0145"> UA Emettrice</a></li>
                                <li class=""><a data-toggle="tab" href="#tab2"> UA receptrice</a></li>
                               
                                
                                
                            </ul>
                        </div>

       <div class="widget-content tab-content">
<div id="tab0145" class="tab-pane active">
 <table class="table table-bordered table-striped">
         
           <tr>
             <td>
               <div class="control-group">
                  <label class="control-label">Numero transfert</label>
                  <div class="controls">
                       <input
                      type="text"
                 v-model="formData.num_transfert"
                      class="span"
                     
                      
                    />
                    <input
                      type="hidden"
                 v-model="formData.aj_transfert"
                      class="span"
                     
                      
                    />
                  </div>
                </div>
             </td>
             <td>
                <div class="control-group">
                  <label class="control-label">Unite d'administrative</label>
                  <div class="controls">
                     <select v-model="formData.ua_id" class="span">
                                                            <option></option>
                                                            <option v-for="item in afficherUAParDroitAccess" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                  
                  </div>
                </div>
             </td>


             
               
             <td colspan="">
                <div class="control-group">
                  <label class="control-label">Ligne budgetaire</label>
                  <div class="controls">
                        <select v-model="formData.ligne_budgetaire_id" :readOnly="verrouLigneBudgetaire" class="span3">
                      <option
                        v-for="localgeo in ligneBudgetaireDynamiques(formData.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.afficheEconomique.id"
                      >{{localgeo.afficheEconomique.code}}-{{localgeo.afficheEconomique.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
             </td>
           </tr>
           <tr>
             <td>
              
               <div class="control-group">
                  <label class="control-label">Dotation initiale</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="afficheMontantTransfere(formData.ligne_budgetaire_id)"
                      class="span"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Cumul dotation transferé</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="montantCumul(formData.ligne_budgetaire_id)"
                      class="span"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
               <td colspan="2">
              
               <div class="control-group">
                  <label class="control-label">Dotation disponible</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="dotationDisponible"
                      class="span3"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
           </tr>
           <tr>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Montant à transferer</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="formData.montant_total_contrat"
                      class="span"
                     :max="dotationDisponible"
                      
                    />
                   
                  </div>
                </div>
              </td>
           
             <td>
              
               <div class="control-group">
                  <label class="control-label">	Dotation actuelle</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="soldeDisponible"
                      class="span"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
              <td colspan="2">
              
               <div class="control-group">
                  <label class="control-label">grande nature</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="GnDynamiques(afficheGrandeNature(formData.ligne_budgetaire_id))"
                      class="span3"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
           </tr>

           <tr>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Fonction</label>
                  <div class="controls">
                    <select v-model="formData.fonction_id" :readOnly="verrouDestinataire" class="span">
                      <option
                        v-for="localgeo in fonctionDynamiques(formData.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.fonctionDossier.id"
                      >{{localgeo.fonctionDossier.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Acteur depense</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="afficheActeurDepense(formData.fonction_id)"
                      class="span"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
          
         <td>
              
               <div class="control-group">
                  <label class="control-label">Date du depot</label>
                  <div class="controls">
                       <input
                      type="date"
                 v-model="formData.date_jours"
                      class="span"
                   
                      
                    />
                   
                  </div>
                </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Fichier join</label>
                  <div class="controls">
                       <input
                      type="file"
                 
                      class="span2"
                    
                      
                    />
                   
                  </div>
                </div>
              </td>
       </tr>
        </table>
    </div>

    <div id="tab2" class="tab-pane">
  <table class="table table-bordered table-striped">
   <tr>
      <td>
                 <div class="control-group">
                  <label class="control-label">UA bénéficiaire</label>
                  <div class="controls">
                    <select v-model="formData.unitezone_id" :readOnly="verrouDestinataire" class="span3">
                      <option
                        v-for="localgeo in destinationDynamiques(formData.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>
                    </select>
                  </div>
                </div>
             </td>

              <td colspan="">
                <div class="control-group">
                  <label class="control-label">Ligne budgetaire</label>
                  <div class="controls">
                        <select v-model="formData.inputation_id" class="span3">
                      <option
                        v-for="localgeo in derniereNivoPlanBudgetaire"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.code}}-{{localgeo.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
             </td>

              <td colspan="">
                <div class="control-group">
                  <label class="control-label">Date reception</label>
                  <div class="controls">
                       <input
                      type="date"
                    v-model="formData.date_reception"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
             </td>
   </tr>

   <tr>
       <td colspan="">
                <div class="control-group">
                  <label class="control-label">Grande nature </label>
                  <div class="controls">
                        <select v-model="formData.grande_natrue_id" class="span4">
                      <option
                        v-for="localgeo in grandes_natures"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
             </td>
              <td colspan="2">
              
               <div class="control-group">
                  <label class="control-label">Montant transferé</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="formData.montant_total_contrat"
                      class="span4"
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
          @click.prevent="ajouterUniteAdministrativeLocal(formData)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

<!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide tailgrand121">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Information sur la modification  du Transfert</h3>
      </div>
      
      <div class="widget-title">
               <ul class="nav nav-tabs">
             <li class="active"><a data-toggle="tab" href="#tab000"> UA Emettrice</a></li>
             <li class=""><a data-toggle="tab" href="#tab20"> UA receptrice</a></li>
                               
                                
                                
                       </ul>
                        </div>
                 <div class="widget-content tab-content">
                <div id="tab000" class="tab-pane active">
                  <table class="table table-bordered table-striped">
         <tr>
         <td>
              
               <div class="control-group">
                  <label class="control-label">Numero transfert</label>
                  <div class="controls">
                       <input
                      type="text"
                       v-model="editTransfert.num_transfert"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="editTransfert.ua_id" class="span">
                      <option
                        v-for="typeUniteA in afficherUAParDroitAccess"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
       
               <td colspan="2">
                <div class="control-group">
                  <label class="control-label">Ligne budgetaire</label>
                  <div class="controls">
                        <select v-model="editTransfert.ligne_budgetaire_id" :readOnly="verrouLigneBudgetaire" class="span">
                      <option
                        v-for="localgeo in ligneBudgetaireDynamiquesModifier(editTransfert.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.afficheEconomique.id"
                      >{{localgeo.afficheEconomique.code}}-{{localgeo.afficheEconomique.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
              </td>
         </tr>

             <tr>
            <td>
              
               <div class="control-group">
                  <label class="control-label">Dotation initiale</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="afficheMontantTransfereModifier(editTransfert.ligne_budgetaire_id)"
                      class="span3"
                     readonly
                      
                    />
                     <input
                      type="hidden"
                 :value="typeFinancement(editTransfert.ligne_budgetaire_id)"
                      class="span"
                   
                      
                    />
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Cumul dotation transferée</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="montantCumulModifier(editTransfert.ligne_budgetaire_id)"
                      class="span"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>

               <td>
               <div class="control-group">
                  <label class="control-label">Dotation disponible</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="dotationDisponibleModifier"
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
                  <label class="control-label">Montant à transferer</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="editTransfert.montant_total_contrat"
                      class="span"
                     :max="dotationDisponibleModifier"
                      
                    />
                   
                  </div>
                </div>
              </td>
            
              <td>
              
               <div class="control-group">
                  <label class="control-label">Dotation actuelle</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="disponibleBudgetaireModifier"
                      class="span3"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
              <td colspan="2">
              
               <div class="control-group">
                  <label class="control-label">grande nature</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="GnDynamiquesModifier(afficheGrandeNatureModifier(editTransfert.ligne_budgetaire_id))"
                      class="span3"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
           </tr>
           <tr>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Fonction</label>
                  <div class="controls">
                    <select v-model="editTransfert.fonction_id" :readOnly="verrouDestinataireMod" class="span3">
                      <option
                        v-for="localgeo in fonctionDynamiquesModifier(editTransfert.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.fonctionDossier.id"
                      >{{localgeo.fonctionDossier.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
              </td>
              <td colspan="">
              
               <div class="control-group">
                  <label class="control-label">Acteur depense</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="afficheActeurDepenseModifier(editTransfert.fonction_id)"
                      class="span4"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td> 
              <td>
              <div class="control-group">
                  <label class="control-label">Fichier join</label>
                  <div class="controls">
                       <input
                      type="file"
                 
                      class="span2"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
           </tr>
        </table>
                    
                   </div>
                   <div id="tab20" class="tab-pane">
                    
                   <table class="table table-bordered table-striped">
                       <tr>
                      <td>
                 <div class="control-group">
                  <label class="control-label">Destinataire</label>
                  <div class="controls">
                    <select v-model="editTransfert.unitezone_id" :readOnly="verrouDestinataire" class="span">
                      <option
                        v-for="localgeo in destinationDynamiquesModifier(editTransfert.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>

              <td colspan="">
                <div class="control-group">
                  <label class="control-label">Ligne budgetaire</label>
                  <div class="controls">
                        <select v-model="editTransfert.inputation_id" class="span">
                      <option
                        v-for="localgeo in derniereNivoPlanBudgetaire"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.code}}-{{localgeo.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
             </td>
                
                <td>
              <div class="control-group">
                  <label class="control-label">Date de reception</label>
                  <div class="controls">
                       <input
                      type="date"
                    v-model="editTransfert.date_reception"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
                </td>
   </tr>

        <tr>
       <td colspan="">
                <div class="control-group">
                  <label class="control-label">Grande nature </label>
                  <div class="controls">
                        <select v-model="editTransfert.grande_natrue_id" class="span">
                      <option
                        v-for="localgeo in grandes_natures"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
             </td>
              <td colspan="2">
              
               <div class="control-group">
                  <label class="control-label">Montant transferé</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="editTransfert.montant_total_contrat"
                      class="span4"
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
          @click.prevent="modifierUniteAdministrativeLocal(editTransfert)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div>

                                        <!-- <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="uniteAdministratives">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes des transferts</h5>
             
            </div>

            <table class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                      <th>Année</th>
                                        <th>Numero T.</th>
                                        <th>UA emettrice</th>
                                        <th>Montant transféré</th>
                                         <th>Ligne budgetaire </th>
                                        
                                         <th>UA receptrice</th>
                                         		
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="appelOffre in afficherlisteTransfertParDroitAccess"
                                        :key="appelOffre.id">
                                        <td @dblclick="afficherModalTransfert(appelOffre.id)">
                                            {{appelOffre.exerciceencours || 'Non renseigné'}}</td>

                                             <td @dblclick="afficherModalTransfert(appelOffre.id)">
                                            {{appelOffre.num_transfert || 'Non renseigné'}}</td>

                                        <td @dblclick="afficherModalTransfert(appelOffre.id)">
                                            {{afficherLibelleUa(appelOffre.ua_id) || 'Non renseigné'}}</td>

                                            <td @dblclick="afficherModalTransfert(appelOffre.id)">
                                            {{appelOffre.montant_total_contrat || 'Non renseigné'}}</td>

                                             <td @dblclick="afficherModalTransfert(appelOffre.id)">
                                            {{afficherImputation(appelOffre.ligne_budgetaire_id)|| 'Non renseigné'}} </td>

                                            <td @dblclick="afficherModalTransfert(appelOffre.id)">
                                            {{afficherUniteDeZone(appelOffre.unitezone_id )|| 'Non renseigné'}}</td>
                                      
                                           <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerTransfert(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>
                                        </div>
                                           </td>
                                    </tr>

                              
                                    </tbody>
                                </table>

            <!-- <div class="widget-content nopadding" v-if="uniteAdministratives.length" >
              <transfertComponent v-for="equipement in uniteAdministratives"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierUniteAdministrative"
                @modification2="afficherModalModifierMotifMandat"
                
                @suppression="supprimerBudget"
                >
              </transfertComponent>

            

            
              
            </div> -->
          </div>
        </div>
      </div>
    </div>

    
 <fab :actions="fabActions" @cache="afficherModalAjouterUniteAdministrative" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterUniteAdministrative()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
//import transfertComponent from './transfertComponent'
import { formatageSomme } from "../../../../src/Repositories/Repository";
import {admin,dcf} from '../../../../src/Repositories/Auth';
export default {
  name: 'transfert',
 components: {
     // transfertComponent
  },
  data() {
    return {
      // json_fields: {
      //       'NATURE_SECTION': 'groupe.libelle',
      //       'NUMERO_ORDRE_SECTION': 'article.code',
      //     'CODE_SECTION':'article.code_section',
      //   'LIBELLE_SECTION':'article.nom_section'
           
           
      //   },
     fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
     
      formData: {
      num_transfert:"",
      acteurdepense_id: "",
      unitezone_id: "",
      montant_total_contrat: "",
      montant_transfert: "",
      fonction_id: "",
      montant_restant: "",
      ligne_budgetaire_id: "",
      grandnatire_id: "",
      grande_natrue_id:"",
      inputation_id:"",
      date_reception:"",
        ua_id: "",
        aj_transfert:"AJ"
      },
      editTransfert: {
       num_transfert:"",
       date_reception:"",
      acteurdepense_id: "",
      unitezone_id: "",
      montant_total_contrat: "",
      montant_transfert: "",
      fonction_id: "",
      montant_restant: "",
      ligne_budgetaire_id: "",
      grandnatire_id: "",
        ua_id: "",
        decision_cf:"",
        motif:"",
        observation:"",
        date_motif:"",
      
      
      },
      editTransfert1: {
      
    
        test:"MAJ"
      },
       search:"",
       
    };
    
  },

  computed: {
        ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "transferts",
      "afficheTransfertValider",
      "getPersonnaliseTransfert"
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("bienService", ['modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

    ...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 
 ...mapGetters('personnelUA', ['personnaliseActeurDepense']),

admin:admin,
dcf:dcf,
...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

 afficherUAParDroitAccess() {
       // const st = this.search.toLowerCase();
        if (!this.admin || !this.dcf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
             return colect;
            // console.log(colect)
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // });
        }

        return 0;
        //return this.uniteAdministratives
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

    },

anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
 nombreJourTraitementCalucle(){
     const form = this.editTransfert
     if(form.date_jours == form.date_motif && form.date_motif !== "" && form.date_jours !== "") return 1 
        if( form.date_motif == "" && form.date_jours == "") return null 
   var dateR = new Date(form.date_motif).getTime()
    var dateD = new Date(form.date_jours).getTime()
    var diffTime = dateR - dateD

    var diffJours = diffTime / (1000 * 3600 * 24)
          if(isNaN(diffJours)) return null

    if(parseFloat(diffJours) < 0 ) return 0

      return diffJours;
   },

montantCumul: function () {
                return id => {
                    if (id != "") {
                  
                        return  this.afficheTransfertValider.filter(normeEquipe => normeEquipe.ligne_budgetaire_id == this.formData.ligne_budgetaire_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
                    }
                    return 0
                }
            },

montantCumulModifier: function () {
                return id => {
                    if (id != "") {
                  
                        return  this.afficheTransfertValider.filter(normeEquipe => normeEquipe.ligne_budgetaire_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
                    }
                    return 0
                }
            },
dotationDisponible() {
      const val = parseInt(this.afficheMontantTransfere(this.formData.ligne_budgetaire_id)) - parseInt(this.montantCumul(this.formData.ligne_budgetaire_id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
dotationDisponibleModifier() {
      const val = parseInt(this.afficheMontantTransfereModifier(this.editTransfert.ligne_budgetaire_id)) - parseInt(this.montantCumulModifier(this.editTransfert.ligne_budgetaire_id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

    // afficher unite de 

    afficherUniteDeZone(){
      return id =>{
        if(id!=null && id!=""){
          const objet = this.uniteZones.find(item => item.id==id)
          if(objet) return objet.libelle
        }
        return null
      }
    },

    // afficher libelle ua

    afficherLibelleUa(){
      return id =>{
        if(id!=null && id!=""){
          const objet = this.uniteAdministratives.find(item => item.id==id)
          if(objet) return objet.libelle
        }
        return null
      }
    },

/// afficher imputation budgetaire

afficherImputation(){
  return id =>{
        if(id!=null && id!=""){
          const objet = this.plans_budgetaires.find(item => item.id==id)
          if(objet) return objet.code.concat("    ", objet.libelle)
        }
        return null
      }
},
soldeDisponible() {

  
  
const val = parseInt(this.dotationDisponible) - parseInt(this.formData.montant_total_contrat);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
 
    },





    destinationDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteZones.filter(element => element.id_unite_administrative == id);
        }
      };
    },
destinationDynamiquesModifier() {
      return id => {
        if (id != null && id != "") {
          return this.uniteZones.filter(element => element.id_unite_administrative == id);
        }
      };
    },
    ligneBudgetaireDynamiquesModifier() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParTransfert.filter(element => element.afficheUA.id == id);
        }
      };
    },
    afficheMontantTransfereModifier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },
      disponibleBudgetaireModifier() {
     const val = parseInt(this.dotationDisponibleModifier) - parseInt(this.editTransfert.montant_total_contrat);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

 afficheGrandeNatureModifier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.gdenature_id;
      }
      return 0
        }
      };
    },
    
    GnDynamiquesModifier() {
       return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(element => element.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
     fonctionDynamiquesModifier() {
      return id => {
        if (id != null && id != "") {
          return this.personnaliseActeurDepense.filter(element => element.uniteAdmin.id == id);
        }
      };
    },
    afficheActeurDepenseModifier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseActeurDepense.find(qtreel => qtreel.fonctionDossier.id == id);

      if (qtereel) {
        return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom)
      }
      return 0
        }
      };
    },

 afficheActeurDepense1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseActeurDepense.find(qtreel => qtreel.fonctionDossier.id == id);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },
 afficheActeurDepenseIdModifier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseActeurDepense.find(qtreel => qtreel.fonctionDossier.id == id);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },





afficherlisteTransfertParDroitAccess() {
       // const st = this.search.toLowerCase();
        if (!this.admin || !this.dcf){
            let colect=[];
            this.getPersonnaliseTransfert.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // });
        }

        return this.getPersonnaliseTransfert
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
    },



















 ligneBudgetaireDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParTransfert.filter(element => element.afficheUA.id == id);
        }
      };
    },
    afficheMontantTransfere() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },

    //  disponibleBudgetaire() {
    //   const val = parseInt(this.afficheMontantTransfere(this.formData.ligne_budgetaire_id)) - parseInt(this.formData.montant_total_contrat);
      
    //    if (val) {
    //     return parseInt(val).toFixed(0);
    //   }
      
    //   return 0
    // },
typeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(element => element.economique_id == id);

      if (qtereel) {
        return qtereel.typefinancement_id
      }
      return 0
        }
      };
    },







     afficheGrandeNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.gdenature_id;
      }
      return 0
        }
      };
    },
    
    GnDynamiques() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(element => element.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    afficheGrandeNatureid() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.afficheGdeNature.id;
      }
      return 0
        }
      };
    },
    afficheGrandeNatureidModifier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.afficheGdeNature.id;
      }
      return 0
        }
      };
    },
     fonctionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.personnaliseActeurDepense.filter(element => element.uniteAdmin.id == id);
        }
      };
    },
    afficheActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseActeurDepense.find(qtreel => qtreel.fonctionDossier.id == id);

      if (qtereel) {
        return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom)
      }
      return 0
        }
      };
    },
  verrouDestinataireMod() {
      return this.editTransfert.ua_id == "";
    },
     verrouDestinataire() {
      return this.formData.ua_id == "";
    },
    verrouLigneBudgetaire() {
      return this.formData.ua_id == "";
    },
  },


  
  methods: {
    ...mapActions("uniteadministrative", [
     
      "ajouterTransfert",
      "modifierTransfert",
      "supprimerTransfert",
      "ajouterHistoriqueTransfert",
      "modifierHistoTransfert",
      "supprimerHistoTransfert",
      // "ajouterHistoriqueBudgetGeneral"
    ]),

    // afficherModalModifierMotifMandat(articles) {
     
    //   this.$("#exampleModalMotifMandat").modal({
    //     backdrop: "static",
    //     keyboard: false
    //   })
    //   this.editTransfert = articles;
    //   },

      afficherModalTransfert(index){
        this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editTransfert = this.getPersonnaliseTransfert[index]
      },

 formatageSomme: formatageSomme,
    afficherModalAjouterUniteAdministrative() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
       let datationdispo=parseFloat(this.dotationDisponible)
      let montant_contrat=parseFloat( this.formData.montant_total_contrat)
      if(datationdispo < montant_contrat){
        alert("le montant disponible est inferieure au montant du contrat")
      }
      else{
  var nouvelObjet = {
        ...this.formData,
        montant_transfert: this.afficheMontantTransfere(this.formData.ligne_budgetaire_id),
         montant_restant: this.disponibleBudgetaire,
       acteurdepense_id:this.afficheActeurDepense1(this.formData.fonction_id),
       grandnatire_id:this.afficheGrandeNatureid(this.formData.ligne_budgetaire_id),
       typefinancement_id:this.typeFinancement(this.formData.ligne_budgetaire_id),
       exerciceencours:this.anneeAmort
       
      };
      this.ajouterTransfert(nouvelObjet);
this.ajouterHistoriqueTransfert(nouvelObjet)
      this.formData = {
        num_transfert:"",
        inputation_id:"",
        grande_natrue_id:"",
      acteurdepense_id: "",
      unitezone_id: "",
      montant_total_contrat: "",
      montant_transfert: "",
      fonction_id: "",
      montant_restant: "",
      ligne_budgetaire_id: "",
      grandnatire_id: "",
      	ua_id: "",
      aj_transfert:"AJ"
      };
      }
      
      // }
     
    },
    
     supprimerBudget(id){
      this.supprimerTransfert(id)
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
      let datationdispo=parseFloat(this.dotationDisponibleModifier)
      let montant_contrat=parseFloat( this.editTransfert.montant_total_contrat)
       if(datationdispo < montant_contrat){
        alert("le montant disponible est inferieure au montant du contrat")
      }
      else{
  var nouvelObjet = {
        ...this.editTransfert,...this.editTransfert1,
        montant_transfert: this.afficheMontantTransfereModifier(this.editTransfert.ligne_budgetaire_id),
         montant_restant: this.disponibleBudgetaireModifier,
       acteurdepense_id:this.afficheActeurDepenseIdModifier(this.editTransfert.fonction_id),
       grandnatire_id:this.afficheGrandeNatureidModifier(this.editTransfert.ligne_budgetaire_id),
     delaitraitement:this.nombreJourTraitementCalucle,
    typefinancement_id:this.typeFinancement(this.editTransfert.ligne_budgetaire_id),
    exerciceencours:this.anneeAmort

     
     
     };
      this.modifierTransfert(nouvelObjet);
      this.ajouterHistoriqueTransfert(nouvelObjet)
this.$("#modificationModal").modal('hide');
this.$("#exampleModalMotifMandat").modal('hide');

      }
      
    
    },
    // afficher modal de modification
    // afficherModalModifierUniteAdministrative(articles) {
    //   this.$("#modificationModal").modal({
    //     backdrop: "static",
    //     keyboard: false
    //   });

    //   this.editTransfert = articles;
      
    // },
    // alert() {
    //   console.log("ok");
    // },

    // formaterDate(date) {
    //   return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    // },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style scoped>

.tailgrand12{
  width: 1000px;
  margin: 0 -20%;
 
}
.tailgrand121{
  width: 1000px;
  margin: 0 -20%;
 
}
</style>