

<template>
  <div >
     <div id="exampleModal" class="modal hide tailgrand">
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
  <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h4>Ajouter Paiement du Personnel</h4>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab3">REFERENCE DU BENEFICIAIRE</a>
                      </li>
                       
                      <li>
                        <a data-toggle="tab" href="#tab4">SPECIFICATION DE LA DEPENSE</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">Descriptif3</a>
                      </li> -->
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">Autres Information</a>
                      </li> -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab3" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
            <tr>
              <td>
                
                 <label class="control-label">Exercice en Cours:</label>
                 <div class="controls">
                   <input
                     type="text"
                     :value="anneeAmort"
                     class="span"
                      placeholder="Saisir l'exercice en cours"
                      readonly
                   />
                 </div>
                
              </td>
              <td>
               
                  <label class="control-label">Unite Administrative</label>
                  <div class="controls">
                    <select v-model="formData.ua_id" class="span">
                      <option
                        v-for="UniteA in uniteAdmin"
                        :key="UniteA.id"
                        :value="UniteA.id"
                      >{{UniteA.libelle}}</option>
                    </select>
                  </div>
                
              </td>
               <td>
                 
                  <label class="control-label">Ligne</label>
                  <div class="controls">
                    <select v-model="formData.ligne_id" class="span" :readOnly="activerLigneBudgetaire">
                      <option
                        v-for="lignebudg in afficheUaParLignePersonnel(formData.ua_id)"
                        :key="lignebudg.id"
                        :value="lignebudg.afficheEconomique.id"
                      >{{lignebudg.afficheEconomique.code}}-{{lignebudg.afficheEconomique.libelle}}</option>
                    </select>
                  </div>
                
              </td>
              <td>
                
                  <label class="control-label">Programme</label>
                  <div class="controls">
                    <select v-model="formData.programme_id" class="span" :readOnly="activerProgramme">
                      <option value=""></option>
                      <option
                        v-for="program in afficheProgrammeParLigne(formData.ligne_id)"
                        :key="program.id"
                        :value="program.afficheProgramme.id"
                      >{{program.afficheProgramme.code}}-{{program.afficheProgramme.libelle}}</option>
                    </select>
                  </div>
                
              </td>
              
            </tr>
            <tr>
              <td>
                  <label class="control-label">Action</label>
                  <div class="controls">
                    <select v-model="formData.action_id" :readOnly="activerAction" class="span">
                      <option
                        v-for="act in afficheActionParProgramme(formData.programme_id)"
                        :key="act.id"
                        :value="act.afficheAction.id"
                      >{{act.afficheAction.code}}-{{act.afficheAction.libelle}}</option>
                    </select>
                </div>
              </td>
              <td>
              
               
                  <label class="control-label">Activite</label>
                  <div class="controls">
                    <select v-model="formData.activite_id" class="span" :readOnly="activerActivite">
                      <option
                        v-for="activ in afficheActiviteParAction(formData.action_id)"
                        :key="activ.id"
                        :value="activ.afficheActivite.id"
                      >{{activ.afficheActivite.code}}-{{activ.afficheActivite.libelle}}</option>
                    </select>
                  </div>
               
              </td>
               <td>
    
      <label class="control-label">Numero Matricule</label>
      <div class="controls">
        <input
         type="text"
         v-model="formData.numeromatricule"
         class="span"
         placeholder="Saisir code fichier"
         readonly
        />
      </div>
    
  </td>
   <td>
    
      <label class="control-label">References Bancaires</label>
      <div class="controls">
        <input
         type="text"
         v-model="formData.referencebancaire"
         class="span"
        readonly
        />
      </div>
    
  </td>
            </tr>
            </table>
          </div>
          
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab4" class="tab-pane">
                      
  <div class="modal-body">
        <table class="table table-bordered table-striped">
           <tr>
             <td>
              
               <div class="control-group">
                  <label class="control-label">Mode de paiemnt</label>
                  <div class="controls">
                    <select v-model="formData.modepaiement_id" class="span">
                      <option
                        v-for="activ in modepaiements"
                        :key="activ.id"
                        :value="activ.id"
                      >{{activ.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
             
                <td>
              
               <div class="control-group">
                  <label class="control-label">Banque</label>
                  <div class="controls">
                    <select v-model="formData.banque_id" class="span">
                      <option
                        v-for="activ in afficheBanque(formData.ua_id)"
                        :key="activ.id"
                        :value="activ.banq_id"
                      >{{afficheBanqueLibelle(activ.banq_id)}}</option>
                    </select>
                  </div>
                </div>
              </td>
                <td>
                <div class="control-group">
                <label class="control-label">Compte de disponibilite affecte</label>
                 <div class="controls">
                <input
                 type="text"
                 :value="afficherCompteBanque(formData.banque_id)"
                 class="span"
                 readonly
                 
               />
              </div>
            </div>
            </td>
               <td>
                <div class="control-group" >
                  <label class="control-label">Mois de Paiement:</label>
      
 
                  <div class="form-group" >
                  <select v-model="formData.moisdepaiement" class="span">
                     <option value="" >Selectionner</option>
                     <option value="Janvier" >Janvier</option>
                     <option value="Février">Février</option>
                     <option value="Mars">Mars</option>
                     <option value="Avril">Avril</option>
                     <option value="Mai">Mai</option>
                     <option value="Juin">Juin</option>
                     <option value="Juillet">Juillet</option>
                     <option value="Août">Août</option>
                     <option value="Septembre">Septembre</option>
                     <option value="Octobre">Octobre</option>
                     <option value="Novembre">Novembre</option>
                     <option value="Decembre">Decembre</option>
                     
                     
                     
       
                    </select>
               </div>
                 </div>
              </td>
               
           </tr>
           <tr>
            
               <td>
                <div class="control-group">
                  <label class="control-label">Objet de la depense</label>
      
 
                  <div class="controls">
                    <input
                     type="text"
                     v-model="formData.objetdepense"
                     class="span"
                     readonly
       
                    />
                   </div>
                </div>
              </td>
            
                         <td>
    <div class="control-group">
      <label class="control-label">Pieces Justificative</label>
    
      <div class="controls">
        <input
          type="file"
          class="span"
          placeholder="Saisir fichier joint"
          readonly
        />
      </div>
      </div>
  </td>
           </tr>
        </table>
  </div>
                    </div>
                     <!-- <div id="tab3" class="tab-pane">
                      

                    </div> -->
                    <!--ongle 3 -->
                    <!-- <div id="tab3" class="tab-pane">
                    
                      
                    </div> -->
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
          @click.prevent="ajouterUniteAdministrativeLocal(formData)"
          class="btn btn-primary"
          href="#"
         
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
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
    <!--///////////////////////////////////////// debut modal modification //////////////////////////////-->
    <div id="modificationModal" class="modal hide tailgrand">
      <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Paiement du Personnel</h3>
      </div>
      <div class="table-responsive text-nowrap">
  <table class="table table-bordered table-striped">
    <div class="widget-box">
      <div class="widget-title">
        <ul class="nav nav-tabs">
          <li class="active">
            <a data-toggle="tab" href="#tab1">REFERENCE DU BENEFICIAIRE</a>
          </li>
           
          <li>
            <a data-toggle="tab" href="#tab2">SPECIFICATION DE LA DEPENSE</a>
          </li>
          <!-- <li>
            <a data-toggle="tab" href="#tab3">Descriptif3</a>
          </li> -->
          <!-- <li>
            <a data-toggle="tab" href="#tab3">Autres Information</a>
          </li> -->
         
        </ul>
      </div>
      <div class="widget-content tab-content">
            <div id="tab1" class="tab-pane active">
              <div class="modal-body">
         <table class="table table-bordered table-striped">
      
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Exercice en Cours:</label>
                  <div class="controls">
                    <input
                      type="text"
                      :value="anneeAmort"
                      class="span4"
                      placeholder="Saisir l'exercice en cours"
       
                    />
                  </div>
               </div>
              </td>
               <td>
                 <div class="control-group">
                   <label class="control-label">Unite Administrative</label>
                   <div class="controls">
                     <select v-model="editpaiementPersonnel.ua_id" class="span4">
                       <option
                         v-for="UniteA in uniteAdmin"
                         :key="UniteA.id"
                         :value="UniteA.id"
                       >{{UniteA.libelle}}</option>
                     </select>
                   </div>
                 </div>
               </td>
            <td>
     
      <label class="control-label">Ligne</label>
      <div class="controls">
        <select v-model="editpaiementPersonnel.ligne_id" class="span" :readOnly="activerLigneBudgetaire">
          <option
            v-for="lignebudg in afficheUaParLignePersonnel(editpaiementPersonnel.ua_id)"
            :key="lignebudg.id"
            :value="lignebudg.afficheEconomique.id"
          >{{lignebudg.afficheEconomique.code}}-{{lignebudg.afficheEconomique.libelle}}</option>
        </select>
      </div>
    
  </td>
  <td>
    
      <label class="control-label">Programme</label>
      <div class="controls">
        <select v-model="editpaiementPersonnel.programme_id" class="span" :readOnly="activerProgramme">
          <option value=""></option>
          <option
            v-for="program in afficheProgrammeParLigne(editpaiementPersonnel.ligne_id)"
            :key="program.id"
            :value="program.afficheProgramme.id"
          >{{program.afficheProgramme.code}}-{{program.afficheProgramme.libelle}}</option>
        </select>
      </div>
    
  </td>  
             
            </tr>
          <tr>
                        <td>
                <label class="control-label">Action</label>
                <div class="controls">
                  <select v-model="editpaiementPersonnel.action_id" :readOnly="activerAction" class="span">
                    <option
                      v-for="act in afficheActionParProgramme(editpaiementPersonnel.programme_id)"
                      :key="act.id"
                      :value="act.afficheAction.id"
                    >{{act.afficheAction.code}}-{{act.afficheAction.libelle}}</option>
                  </select>
              </div>
            </td>
            <td>
            
             
                <label class="control-label">Activite</label>
                <div class="controls">
                  <select v-model="editpaiementPersonnel.activite_id" class="span" :readOnly="activerActivite">
                    <option
                      v-for="activ in afficheActiviteParAction(editpaiementPersonnel.action_id)"
                      :key="activ.id"
                      :value="activ.afficheActivite.id"
                    >{{activ.afficheActivite.code}}-{{activ.afficheActivite.libelle}}</option>
                  </select>
                </div>
             
            </td>
             <td>
  
    <label class="control-label">Numero Matricule</label>
    <div class="controls">
      <input
       type="text"
       v-model="editpaiementPersonnel.numeromatricule"
       class="span"
       placeholder="Saisir code fichier"
       readonly
      />
    </div>
  
</td>
 <td>
  
    <label class="control-label">References Bancaires</label>
    <div class="controls">
      <input
       type="text"
       v-model="editpaiementPersonnel.referencebancaire"
       class="span"
      readonly
      />
    </div>
  
</td>
          </tr>

         </table>
           </div>
            </div>


                         <div id="tab2" class="tab-pane">
                    
 <div class="modal-body">
       <table class="table table-bordered table-striped">
          <tr>
            <td>
             
              <div class="control-group">
                 <label class="control-label">Mode de paiemnt</label>
                 <div class="controls">
                   <select v-model="editpaiementPersonnel.modepaiement_id" class="span">
                     <option
                       v-for="activ in modepaiements"
                       :key="activ.id"
                       :value="activ.id"
                     >{{activ.libelle}}</option>
                   </select>
                 </div>
               </div>
             </td>
            
               <td>
             
              <div class="control-group">
                 <label class="control-label">Banque</label>
                 <div class="controls">
                   <select v-model="editpaiementPersonnel.banque_id" class="span">
                     <option
                       v-for="activ in afficheBanque(editpaiementPersonnel.ua_id)"
                       :key="activ.id"
                       :value="activ.id"
                     >{{afficheBanqueLibelle(activ.banq_id)}}</option>
                   </select>
                 </div>
               </div>
             </td>
               <td>
               <div class="control-group">
               <label class="control-label">Compte de disponibilite affecte</label>
                <div class="controls">
               <input
                type="text"
                :value="afficherCompteBanque(editpaiementPersonnel.banque_id)"
                class="span"
                readonly
                
              />
             </div>
           </div>
           </td>
              <td>
               <div class="control-group" >
                 <label class="control-label">Mois de Paiement:</label>
     
 
                 <div class="form-group" >
                 <select v-model="editpaiementPersonnel.moisdepaiement" class="span">
                    <option value="" >Selectionner</option>
                    <option value="Janvier" >Janvier</option>
                    <option value="Février">Février</option>
                    <option value="Mars">Mars</option>
                    <option value="Avril">Avril</option>
                    <option value="Mai">Mai</option>
                    <option value="Juin">Juin</option>
                    <option value="Juillet">Juillet</option>
                    <option value="Août">Août</option>
                    <option value="Septembre">Septembre</option>
                    <option value="Octobre">Octobre</option>
                    <option value="Novembre">Novembre</option>
                    <option value="Decembre">Decembre</option>
                    
                    
                    
      
                   </select>
              </div>
                </div>
             </td>
              
          </tr>
          <tr>
           
              <td>
               <div class="control-group">
                 <label class="control-label">Objet de la depense</label>
     
 
                 <div class="controls">
                   <input
                    type="text"
                    v-model="editpaiementPersonnel.montantdessalaires"
                    class="span4"
                    placeholder="Saisir le montant de paiement"
      
                   />
                  </div>
               </div>
             </td>
           
                        <td>
   <div class="control-group">
     <label class="control-label">Pieces Justificative</label>
   
     <div class="controls">
       <input
         type="file"
         class="span"
         placeholder="Saisir fichier joint"
         readonly
       />
     </div>
     </div>
 </td>
          </tr>
       </table>
 </div>
                                                                                                                                                                                                                                                                                                                                    
    
    
          </div>
      </div>
       
      
      <div class="modal-footer">
        <a
          @click.prevent="modifierpaiementPersonnelLocal(editpaiementPersonnel)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
      </div>
       </table>
    </div>
     </div>
       </div>
        </div>
    </div>
    <!--///////////////////////////////////////// fin modal modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel -->
            <!-- class="btn btn-default pull-right" -->
            <!-- style="cursor:pointer;" -->
            <!-- :fields="json_fields" -->
            <!-- title="Liste Paiement du Parsonnel" -->
            <!-- :data="jointureUaChapitreSection" -->
            <!-- name="Liste Unites administratives" -->
            <!-- worksheet="Liste Paiement du Personnel" -->
          <!-- > -->
            <!-- <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i> -->
          <!-- </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie section ou libelle" v-model="search" />

                <!-- <div class="span3">
                  <model-list-select
                    v-model="formData.test"
                    style="background-color: rgb(222, 222, 222);"
                    :list="type_Unite_admins"
                    option-value="id"
                    option-text="libelle"
                    placeholder="unite administrative"
                  ></model-list-select>
                </div>
                <button>ok</button>-->
              </div>
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste du paiement personnel</h5>
            </div>

            <div
              class="widget-content nopadding"
            
            >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Exercice en cours</th>
                    <th title="unite administrative"> ua</th>
                    <!-- <th>programme</th>
                    <th>action</th>
                    <th>activité</th> -->
                    <th>ligne</th>
                    <!-- <th>Code Fichier</th> -->
                    <th>Objet Depense</th>
                    <th>Mois de Paiement</th>
                    <!-- <th>Montant des Salaires</th> -->
                    <th>Fichier Joint</th>
                      <th>Validation</th>
                      
                    <th colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(payepersonnel, index) in listePaiementPerssonnel"
                    :key="payepersonnel.id"
                  >
                   
                   <!-- <template v-if="uniteadministrative.type_ua_id = type_Unite_admins.id"> -->
                     <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.exerciceencours }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{afficherUa(payepersonnel.ua_id) }}</td>
                      <!-- <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.programme_id }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.action_id }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.activité_id }}</td> -->
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{Codeeconomique(payepersonnel.ligne_id) }}</td>
                    <!-- <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.codefichier }}</td> -->
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.objetdepense }}</td>
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.moisdepaiement }}</td>
                    <!-- <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.montantdessalaires }}</td> -->
                    <td  @dblclick="afficherModalModifierpaiementPersonnel(index)">{{payepersonnel.fichierjoint || 'Non renseigné' }} </td>
                    <td>
                       <button v-if="payepersonnel.valisationvirement == 8"  class="btn  btn-success"   >                        
                     
                      <span    >Validé</span>
                      
                      </button>
                       <button v-else-if="payepersonnel.valisationvirement == 21171" class="btn  btn-warning">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="payepersonnel.valisationvirement == 22171" class="btn  btn-danger" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                  
                 <td v-if="payepersonnel.valisationvirement == 8">
                    <router-link :to="{ name: 'detailExecutionPersonnel', params: { id: payepersonnel.id }}"
                class="btn btn-default " title="Detail execution">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link> 
                 </td>
                    <td>
                      
                      <button
                        class="btn btn-danger"
                        @click="supprimerpaiementPersonnel(payepersonnel.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div v-else> -->
              <!-- <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterpaiementPersonnel" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterpaiementPersonnel()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth"
// import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  // components: {
  //   ModelListSelect
  // },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData: {
        numeromatricule:"PERSONNEL",
        referencebancaire:"Liste du personnel",
        id:"",
        activite_id: "",
        programme_id: "",
        action_id:"",
        ua_id: "",
        moisdepaiement: "",
        
        objetdepense:"Salaire",
        ligne_id:"",
        fichierjoint:"",
        banque_id:""
      },
      editpaiementPersonnel: {
        
         id:"",
         activite_id: "",
         programme_id: "",
         action_id:"",
         ua_id: "",
         moisdepaiement: "",
         
         objetdepense:"",
         ligne_id:"",
         fichierjoint:""
         
      },
      json_fields: {
        UNIT_ADMINISTRATIVE: "ua.libelle",
        // SECTION: "secti.nom_section",
        // SERVICE_GESTIONNAIRE: "servivegest.libelle",
        // LOCALISATION_GEO: "localgeo.libelle",
        // CODE: "code",
        // LIBELLE: "libelle",
        // DATE_CREATION: "date_creation"
      },
      search: ""
    };
  },

  computed: {
  ...mapGetters("bienService", ["modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
 "banqueUa"
   
   
   ]),

   ...mapGetters('parametreGenerauxAdministratif',[

 "sections",
 "type_Unite_admins",
 "plans_programmes",
 "natures_sections",
 "grandes_natures",
 "afficheNiveauPlanProg",
 "exercices_budgetaires"
   ]),

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),
 admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
  


  listePaiementPerssonnel() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.paiementPersonnel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(items=>items.valisationvirement==0)
        }

       return this.paiementPersonnel.filter(items=>items.valisationvirement==0)

    },







  uniteAdmin() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect
        }

       return this.uniteAdministratives

    },
  afficheImputation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParPersonnel.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.codebudget;
      }
      return 0
        }
      };
    },
 
 
 
 
 afficheBanqueLibelle() {
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
 afficherUa() {
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
Codeeconomique() {
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
activerLigneBudgetaire(){
return this.formData.ua_id ==""
},
activerProgramme(){
return this.formData.ligne_id ==""
},

activerAction(){
return this.formData.programme_id ==""
},

activerActivite(){
return this.formData.action_id ==""
},
  afficheActiviteParAction() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.afficheAction.id == id && element.status=="actu");
        }
      };
    },
    afficheUaParLignePersonnel() {
    return id => {
      if (id != null && id != "") {
        return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.afficheUA.id == id && element.status=="actu");
      }
    };
  },
   afficheBanque() {
      return id => {
        if (id != null && id != "") {
          return this.banqueUa.filter(element => element.ua_id == id);
        }
      };
    },
     afficherCompteBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.banqueUa.find(qtreel => qtreel.banq_id == id);

      if (qtereel) {
        return qtereel.rib;
      }
      return 0
        }
      };
    },
    anneeAmort() {
     
     const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);
     if (norme) {
       return norme.annee;
     }
     return 0
   },
   afficheProgrammeParLigne() {
    return id => {
      if (id != null && id != "") {
        return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.afficheEconomique.id == id && element.status=="actu");
      }
    };
  },
   
afficheActionParProgramme() {
    return id => {
      if (id != null && id != "") {
        return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.afficheProgramme.id == id && element.status=="actu");
      }
    };
  },

  
            typeFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.paiementPersonnel.filter((item) => {
  
    
    return item.libelle.toLowerCase().includes(searchTerm) 
   

   }
)
   }
                                    
  },
  methods: {
    ...mapActions("personnelUA", [
      "getpaiementPersonnel",
      "ajouterpaiementPersonnel",
      "modifierpaiementPersonnel",
      "supprimerpaiementPersonnel",
      "ajouterordrepaiement"
    ]),

    afficherModalAjouterpaiementPersonnel() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
      var nouvelObjet = {
        ...this.formData,
        
         exerciceencours: this.anneeAmort,
         imputationBudget:this.afficheImputation(this.formData.ligne_id),
         rib:this.afficherCompteBanque(this.formData.banque_id)
       
      };
     
      this.ajouterpaiementPersonnel(nouvelObjet);
      this.getpaiementPersonnel()
    //  this.ajouterordrepaiement(nouvelObjet)
      this.formData = {
        
       
        activite_id: "",
       programme_id: "",
       action_id:"",
       ua_id: "",
        moisdepaiement: "",
       
       objetdepense:"Salaire",
       ligne_id:"",
       fichierjoint:""
       
       
      };
    },
    // fonction pour vider l'input modifier
    modifierpaiementPersonnelLocal() {
this.$("#modificationModal").modal('hide');

    },
    // afficher modal de modification
    afficherModalModifierpaiementPersonnel(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editpaiementPersonnel = this.paiementPersonnel[index];
    },
    alert() {
      console.log("ok");
    },

    // formaterDate(date) {
      // return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    // },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}

</style>