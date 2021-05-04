uniteAdministratives
<template>
  <div>
    <br>
    <div  class="row-fluid"  style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background-color: transparent; !important;">
                    <table class="table table-striped">
                        <tbody>
                        <tr>
                        
                            
                            <td style="width:20%">
                                <label style="color:#000;font-size:14px;font-weight: bolder;">Unité Administrative<a href="#" @click.prevent="videUniteAdministrative()" v-if="uniteAdministrative_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;border:2px solid #000"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="uniteAdministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                           <td style="width:20%">
                              <div class="control-group">
                                                    <label style="color:#000;font-size:14px;font-weight: bolder;">Type de procédure <a href="#" @click.prevent="videTypeProcedure()" v-if="type_procedure_id" style="color: red"><i class="fa fa-trash-o"></i></a></label>
                                                    <div class="controls">
                                                        <select v-model="type_procedure_id" class="span" style="border:2px solid #000">
                                                            <option></option>
                                                            <option value="Engagement par Bon de Commande">Engagement par Bon de Commande </option>
                                                            <option value="Engagement direct">Engagement direct</option>

                                                        </select>
                                                    </div>
                                                </div>
                           </td>
                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>
    <div id="demandeVise" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision CF</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                            <label class="control-label">Décision CF </label>
                            <div class="controls">
                              <select v-model="editDemandeEngagement.decision_cf" class="span4">
                                <option value=""></option>
                              <option value="8">Visé</option>
                              <option value="9">Visé avec Observation</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            <option value="0">Attente</option>
    
    </select>
                           
                            </div>
                          </div>
            </td>
              <td>
                    <div class="control-group">
                            <label class="control-label">Famille de Motif </label>
                            <div class="controls">
                               <select v-model="editDemandeEngagement.famille_motif_cf" class="span4" :readonly="griserFamilleEtMotif">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementParent" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
                 <td>
                    <div class="control-group">
                            <label class="control-label">Motif</label>
                            <div class="controls">
                               <select v-model="editDemandeEngagement.motif_cf" class="span4" :readonly="griserFamilleEtMotif">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementEnfant(editDemandeEngagement.famille_motif_cf)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
          </tr>
               <tr>
                  <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Autres Motif</label>
                            <div class="controls">
                              <textarea  class="span8" row = "6" v-model="editDemandeEngagement.autre_motif_cf" :readonly="griserAutreMotif" >
                              </textarea>
                            </div>
                          </div>
                       </td>
                  <td>
                               <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                              <input type="date" class="span4"  />
                               <input type="hidden" class="span4"  v-model="editDemandeEngagement.date_motif" />
                              
                            </div>
                          </div>
                           </td>
                 </tr>             
                   <tr>
                     <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span8" row = "6" v-model="editDemandeEngagement.observation" :readonly="griserObservation">
                              </textarea>
                            </div>
                          </div>
                       </td>
                        <td colspan="">
                        <div class="control-group">
                            <label class="control-label">Nom et prenoms cf</label>
                            <div class="controls">
                              <input type="text" class="span4"   readonly/>
                            </div>
                          </div>
                       </td>
                       
                       </tr>  
                       <tr>    
                        
                       
                          </tr> 
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal()"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div> 
 <!-- <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background: #f0c71d !important;">
                    <table class="table table-striped"  style="background: #f0c71d !important;">
                        <tbody>
                        <tr>
                        
                            
                            <td style="background: #f0c71d !important;">
                                <label style="font-size:20px">Unité Administrative<a href="#" @click.prevent="videUniteAdministrative()" v-if="uniteAdministrative_id" style="color: red"><i class="fa fa-trash-o"></i></a>
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="uniteAdministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                          
                        </tr>

                        </tbody>
                    </table>

                </div>


            </div> -->
   

   
    <div >
      <hr />
      <h2 style="text-align:center">DEMANDES D'ENGAGEMENTS</h2>
      <table class="table table-bordered table-striped">
          <td style="width: 15%"></td>
          <td style="width: 0%; font-weight: bolder; color: #000">
            <div align="right" style="cursor: pointer">
              <button
                class="btn btn-success"
                @click.prevent="ajouterDemandeEngage"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon icon-plus"> AJOUTER DEMANDE ENGAGEMENT</i>
              </button>
            </div>
          </td>
          <td style="width: 0px">
            <div align="right" style="cursor: pointer">
              <button
                class="btn btn-danger"
                @click.prevent="ajouterLiquidation"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon icon-plus">
                  AJOUTER LIQUIDATION</i
                >
              </button>
            </div>
          </td>
          <td style="width: 0px">
            <div align="right" style="cursor: pointer">
              <button
                class="btn btn-primary"
                @click.prevent="ajouterMandat"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon icon-plus">
                  AJOUTER MANDAT</i
                >
              </button>
            </div>
          </td>
           <td style="width: 0px">
            <div align="right" style="cursor: pointer">
              <button
                class="btn btn-primary"
                @click.prevent="ajouterOpSysteme"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon icon-plus">
                  AJOUTER OP SYSTEME</i
                >
              </button>
            </div>
          </td>
           <td style="width: 0px">
            <div align="right" style="cursor: pointer">
              <button
                class="btn btn-primary"
                @click.prevent="AjouterLettreAvance"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon icon-plus">
                  AJOUTER LETTRE D'AVANCE</i
                >
              </button>
            </div>
          </td>
          <td style="width: 25%"></td>
        </table>
    
      
        
      <div class="row-fluid">
        <div class="span12">
                     <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste de demandes d'immobilisation "
            :data="trieUaImmobilisation"
            name="Liste de demandes d'immobilisation"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>DEMANDE D'ENGAGEMENT</h5>
              <!-- <h5>Gestion du Patrimoine</h5> -->
             
             
            </div>

            <div class="widget-content nopadding" >
              <table class="table table-bordered table-striped">
                     <thead>
                  <tr>
                    <th style="font-size:14px;font-weight:bold">N°demande</th>
                    <!-- <th style="font-size:14px;font-weight:bold">Type de procedure</th> -->
                    <!-- <th>Mode de paiement</th> -->
                    
                    <!-- <th>Nom fournisseur</th> -->
                    <th style="font-size:14px;font-weight:bold">Objet de la depense</th>
                    <th style="font-size:14px;font-weight:bold">Montant Tresor</th>
                     <th style="font-size:14px;font-weight:bold">Montant Don</th>
                      <th style="font-size:14px;font-weight:bold">Montant Emprunt</th>
                      <th style="font-size:14px;font-weight:bold">Total</th>
                      <!-- <th style="font-size:14px;font-weight:bold">Fichier Joint</th>
                       <th style="font-size:14px;font-weight:bold">Nature de la Pièce</th> -->
                       <th style="font-size:14px;font-weight:bold">Type de procedure</th>
                       <th style="font-size:14px;font-weight:bold">Type d'engagement</th>
                       <th style="font-size:14px;font-weight:bold">Demande</th>
                       <th style="font-size:14px;font-weight:bold" title="">Liquidation</th>
                       <th style="font-size:14px;font-weight:bold">Mandat</th>
                       <th style="font-size:14px;font-weight:bold">Op Systeme</th>
                       <th style="font-size:14px;font-weight:bold">Fiche Réalité</th>
                       <th style="font-size:14px;font-weight:bold">Fiche annexe d’autorisation de contrôle </th>
                        <th style="font-size:14px;font-weight:bold">Voir Détail</th>
                        <th  style="font-size:14px;font-weight:bold" colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeDemandeEngagement" :key="type.id">
                    <td style="color:red;font-weight: bold;font-size:14px"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.numero_dmd_combine || 'Non renseigné'}}</td>
                   
                    <td
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.objet_depense || 'Non renseigné'}}</td>
                     <td style="text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formatageSomme(parseFloat(type.montant_tresor)) || 0}}</td>
                    <td style="text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formatageSomme(parseFloat(type.montant_don)) || 0}}</td>
                     <td style="text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formatageSomme(parseFloat(type.montant_emprunt)) || 0}}</td>
                     <td style="text-align:center;font-weight: bold;"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formatageSomme(parseFloat(type.total_general)) || 0}}</td>
                    
                    
                    <!-- <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >
                    <a v-if="afficheFichierJoint(type.numero_demande)" :href="afficheFichierJoint(type.numero_demande)" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                    
                    </td> -->
                    
                     <!-- <td style="text-align:center"  >
                       

 <ul>

         <span v-for="(type2) in ListePieceJustificative(type.numero_demande)" :key="type2.id" class="by label">{{type2.libelle}} ( {{type2.reference}}) </span>

     </ul>


                       </td>        -->
                        <td style="text-align:center;font-weight: bold;"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.type_procedure_id || 0}}</td> 
                                <td style="text-align:center;font-weight: bold;"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.type_engagement_id || 0}}</td>
                    <td >
                        <button v-if="type.decision_cf == 8"  class="btn  btn-success" @click="afficheDecisionCf(type.id)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning" @click="afficheDecisionCf(type.id)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger" @click="afficheDecisionCf(type.id)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="type.decision_cf == 9"  class="btn  btn-success" @click="afficheDecisionCf(type.id)" >                        
                     
                      <span>Visé avec observation</span>
                      
                      </button>
                     <button v-else class="btn  btn-info" @click="afficheDecisionCf(type.id)" >                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                    </td>
                   <td  v-if="type.type_procedure_id=='Engagement direct' && type.type_engagement_id=='Marche' || type.type_procedure_id=='Engagement direct' && type.type_engagement_id=='Autre'" >
                        <button v-if="type.decision_cf == 8"  class="btn  btn-success"  >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning"  >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger"  >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="type.decision_cf == 9"  class="btn  btn-success"  >                        
                     
                      <span>Visé avec observation</span>
                      
                      </button>
                      <template>
                        <button v-if="type.id == afficheDecisionLiquidation(type.id) && type.decision_cf == 0" class="btn  btn-info" @click="afficheDecisionCf(type.id)" >                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                     <button  v-else-if="type.id != afficheDecisionLiquidation(type.id) " class="btn  btn-danger" @click="ajouterLiquidation" >                        
                     
                      
                       <span>Ajouter</span>
                      
                    
                      </button>
                      <span  v-else >                        
                     
                      </span>
                      </template>
                    </td>
                    <td v-else style="background-color:lightblue"></td>
                    <td  v-if="type.type_procedure_id=='Engagement direct' && type.type_engagement_id=='Marche' || type.type_procedure_id=='Engagement direct' && type.type_engagement_id=='Autre' || type.type_procedure_id=='Engagement direct' && type.type_engagement_id=='Régularisation dordre de paiement'">
                        <button v-if="type.decision_cf == 8"  class="btn  btn-success"  >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning"  >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger"  >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="type.decision_cf == 9"  class="btn  btn-success"  >                        
                     
                      <span>Visé avec observation</span>
                      
                      </button>
                    <template>
                        <button v-if="type.id == afficheDecisionMandat(type.id) && type.decision_cf == 0" class="btn  btn-info"  >                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                      <button  v-else-if="type.id != afficheDecisionMandat(type.id) " class="btn  btn-danger" @click="ajouterMandat" >                        
                     
                      
                       <span>Ajouter</span>
                      
                    
                      </button>
                      <span  v-else >                        
                     
                      </span>
                      </template>
                    </td>
                    <td v-else style="background-color:lightblue"></td>
                     <td  v-if="type.type_procedure_id=='Engagement direct' && type.type_engagement_id=='Régie davances-reservation des crédit'">
                        <button v-if="type.decision_cf == 8"  class="btn  btn-success"  >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning"  >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger"  >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="type.decision_cf == 9"  class="btn  btn-success"  >                        
                     
                      <span>Visé avec observation</span>
                      
                      </button>
                    <template>
                        <button v-if="type.id == afficheDecisionMandat(type.id) && type.decision_cf == 0" class="btn  btn-info"  >                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                      <button  v-else-if="type.id != afficheDecisionMandat(type.id)" class="btn  btn-danger" @click="ajouterOpSysteme" >                        
                     
                      
                       <span>Ajouter</span>
                      
                    
                      </button>
                      <!-- <span  v-else style="background-color:red">                         -->
                      <!-- <button   class="btn  btn-danger" @click="ajouterOpSysteme && type.decision_cf != 0" >                        
                     
                      
                       <span>Ajouter</span>
                      
                    
                      </button> -->
                      <!-- </span> -->
                      </template>
                    </td>
                    <td v-else style="background-color:lightblue"></td>
                     <td v-if="type.type_procedure_id=='Engagement direct'">
                      <router-link :to="{ name: 'FicheRealiteServiceFait1', params: { id: type.id }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="   icon-print" style="font-weight: bold;"> Fiche realité fait</i></span>
                   </router-link> 
                    </td>
                    <td v-else style="background-color:lightblue"></td>
                     <td v-if="type.type_procedure_id=='Engagement direct'">
                      <router-link :to="{ name: 'FicheDeControle1', params: { id: type.id }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="   icon-print" style="font-weight: bold;">Fiche annexe d’autorisation de contrôle</i></span>
                   </router-link> 
                    </td>
                    <td v-else style="background-color:lightblue"></td>
                   <td>
                      <router-link :to="{ name: 'voitDetailBonCmmande', params: { id: type.id }}"
                class="btn btn-Success " title="">
                  <span class=""><i class="  icon-eye-open" style="font-weight: bold;"> Voir Détail</i></span>
                   </router-link> 
                    </td>
                      <td>
                      <router-link :to="{ name: 'executionBudgetaire', params: { id: type.id }}" v-if="afficheIconeBonCommande(type.id)=='Engagement par Bon de Commande'" style="font-weight: bold;background: green;color:#fff"
                class="btn btn-Success " title="">
                  <span class=""><i class="  icon-eye-open" style="font-weight: bold;color:#fff"> Prendre une decision</i></span>
                   </router-link> 
                   <router-link :to="{ name: 'procedureEngaementDirect', params: { id: type.id }}" v-else style="font-weight: bold;background: red;color:#fff"
                class="btn btn-Success " title="">
                  <span class=""><i class="  icon-eye-open" style="font-weight: bold;color:#fff"> Prendre une decision</i></span>
                   </router-link> 
                    </td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerDemandeEngagement(type.id)">
                        <span>
                          <i class="icon icon-trash"></i> Supprimer
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">Total</td>
                    <td style="color:red;font-size:14px;text-align:center;font-weight: bold;">{{formatageSomme(parseFloat(SommeDesDmdParBonCommande))}}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                      <td></td>
                    <td></td>
                    <td></td>
                      <td></td>
                      <td></td>
                    <td></td>
                      
                    
                  </tr>
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <!-- <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="ajouterEntreEnPatrimoine()">Open</button> -->

 <!-- <fab :actions="fabActions"
                main-icon="apps"
          
        @searchMe="filter"
         
        bg-color="green"

  ></fab> -->
<notifications  />
  </div>
</template>
  <script>
import { mapGetters, mapActions } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  components: {
    
    ModelListSelect,
     
  },
  name:'typetext',
  data() {
    return {
      fabActions: [
       {
                  name: 'searchMe',
                   icon: "search"
              }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      editDemandeEngagement1: {
      motifcf:""
      },
      formData: {
        type_procedure_id: "",
        
        
       
      },

      type_procedure_id:"",
      uniteAdministrative_id:"",
       affiche_filtre:false,
      affiche_boutton_filtre:true,
      editDemandeEngagement: {
      
      },
      search: ""
    };
  },
 props:["macheid"],
  computed: {
    ...mapGetters("bienService", ["gettersDossierMandat","gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
   
 ...mapGetters("personnelUA", ["FichierJoinDmdEngagement","all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    

 
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
   
     ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision', 
  'plans_Decision']),
   
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

 listeDemandeEngagement() {
      const st = this.search.toLowerCase();
      return this.ListeDEsEntreprise.filter(type => {
        return (
          type.numero_dmd_combine.toLowerCase().includes(st)
          
        );
      });
    },






    afficheDecisionMandat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierMandat.find(qtreel => qtreel.demande_engagement_id == id);

      if (qtereel) {
        return qtereel.demande_engagement_id;
      }
      return 0
        }
      };
    },
afficheDecisionLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierLiquidation.find(qtreel => qtreel.dmd_engagement_id == id);

      if (qtereel) {
        return qtereel.dmd_engagement_id;
      }
      return 0
        }
      };
    },
ListeDEsEntreprise(){

                let vM=this;
                let objet=this.gettersDemandeEngagement

                //retourne la section selectionner
              
                if(this.uniteAdministrative_id!="" && this.type_procedure_id=="" ){
                  
                    objet =objet.filter(item=>{
                        if(item.ua_id==vM.uniteAdministrative_id){
                            return item
                        }
                    })
                 
                }
              if(this.uniteAdministrative_id=="" && this.type_procedure_id!="" ){
                  
                    objet =objet.filter(item=>{
                        if(item.type_procedure_id==vM.type_procedure_id){
                            return item
                        }
                    })
                
                }
                
               if( this.uniteAdministrative_id!="" && this.type_procedure_id!="" ){
                  
                    objet =objet.filter(item=>{
                        if(item.ua_id==vM.uniteAdministrative_id && item.type_procedure_id==vM.type_procedure_id){
                            return item
                        }
                    })
                 
                }
                 if(this.type_procedure_id!="" && this.uniteAdministrative_id!=""){
                  
                    objet =objet.filter(item=>{
                        if(item.type_procedure_id==vM.type_procedure_id && item.ua_id==vM.uniteAdministrative_id){
                            return item
                        }
                    })
                  
                }
               
                
                return objet
            },
afficheIconeBonCommande() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_procedure_id;
      }
      return 0
        }
      };
    },




        griserObservation(){
  return this.editDemandeEngagement.decision_cf != 9
},
    griserFamilleEtMotif(){
  return this.editDemandeEngagement.decision_cf != 3 && this.editDemandeEngagement.decision_cf != 2
},
griserAutreMotif(){
  return this.editDemandeEngagement1.motif != 237 
},
 AffichierElementEnfant() {
      
      return id => {
        if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.parent == id);
        }
      };
    },

RecupererNiveau3StructureDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structuresDecision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
     AffichierElementParent() {
      
     
          return this.plans_Decision.filter(element => this.RecupererNiveau3StructureDecision(element.structure_motif_decission_id) == 3);
      
    },
  afficheFichierJoint() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.FichierJoinDmdEngagement.find(qtreel => qtreel.numero_demande_engagement == id);

      if (qtereel) {
        return qtereel.fichier;
      }
      return ""
        }
      };
    },

ListePieceJustificative() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_demande_engagement == id);

        }
      };
    },
  

   listeDesDmdParBonCommande() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id == "Engagement par Bien de Commande" && qtreel.decision_cf==8);

        }
      };
    },
    SommeDesDmdParBonCommande() {
   
    return this.listeDemandeEngagement.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);
    },
  },
  methods: {
     ...mapActions("bienService", [
      "ajouterPieceJustificative",
      "modifierPieceJustificative",
      "supprimerPieceJustificative",
      "ajouterDemandeEngagement",
      "supprimerDemandeEngagement",
      "modifierDemandeEngagement"
     
    ]),
    filter(){
                this.affiche_filtre=!this.affiche_filtre
               
            },
     modifierTypeTexteLocal() {
      this.modifierDemandeEngagement(this.editDemandeEngagement);
this.$("#demandeVise").modal('hide');
     
       
    },
    formatageSomme:formatageSomme,
   
    afficherModalModifierTypeTexte(id) {

      this.$router.push({
        path: "/ModifierDemandeEngagement/" + id
      });
    },
    afficheDecisionCf(id) {
      this.$("#demandeVise").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editDemandeEngagement = this.gettersDemandeEngagement.find(item=>item.id==id);
    },
    
    AjouterLettreAvance(){
                this.$router.push({ name: 'AjouterLettreAvance' })
            },
    ajouterOpSysteme(){
                this.$router.push({ name: 'AjouterOrdrePaiement' })
            },
      ajouterMandat(){
                this.$router.push({ name: 'AjouterMantdatement' })
            },
     ajouterLiquidation(){
                this.$router.push({ name: 'AjouterLiquidation' })
            },
    ajouterDemandeEngage(){
                this.$router.push({ name: 'AjouterDemandeEngagement' })
            },
                    videUniteAdministrative(){
                this.uniteAdministrative_id=""
            },
            videTypeProcedure(){
                this.type_procedure_id=""
            },

  }
};
</script>
<style scoped>

.tailgrand{
  width: 65%;
  margin: 0 -38%;
}

</style>
