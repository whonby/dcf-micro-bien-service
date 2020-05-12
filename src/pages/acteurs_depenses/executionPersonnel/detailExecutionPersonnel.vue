
<template>
  <div>
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>DETAIL  EXECUTION PERSONNEL </h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>
  <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                       <h4 v-if="detail_Execution" style="text-align: center;font-size:20px;font-weight:bold;">MOIS DE PAIEMENT : {{detail_Execution.moisdepaiement}} </h4>
                        <table class="table table-striped table-bordered" v-if="detail_Execution">
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
                    
                  </tr>
                            </thead>
                            <tbody>
                                  <tr>
                          <td  >{{detail_Execution.exerciceencours }}</td>
                    <td  >{{afficherUa(detail_Execution.ua_id) }}</td>
                      <!-- <td  >{{detail_Execution.programme_id }}</td>
                    <td  >{{detail_Execution.action_id }}</td>
                    <td  >{{detail_Execution.activité_id }}</td> -->
                    <td  >{{Codeeconomique(detail_Execution.ligne_id) }}</td>
                    <!-- <td  >{{detail_Execution.codefichier }}</td> -->
                    <td  >{{detail_Execution.objetdepense }}</td>
                    <td  >{{detail_Execution.moisdepaiement }}</td>
                    <!-- <td  >{{detail_Execution.montantdessalaires }}</td> -->
                    <td  >{{detail_Execution.fichierjoint || 'Non renseigné' }} </td>
                    <td>
                       <button v-if="detail_Execution.valisationvirement == 1"  class="btn  btn-success"   >                        
                     
                      <span    >Validé</span>
                      
                      </button>
                       <button v-else-if="detail_Execution.valisationvirement == 2" class="btn  btn-warning">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="detail_Execution.valisationvirement == 3" class="btn  btn-danger" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
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
  </div>
  <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active">
                        <a data-toggle="tab" href="#tab00001">Tableau de bord<span class="badge badge-info"></span></a>
                      </li>
                    
                       <li class="">
                        <a data-toggle="tab" href="#tab00007">Ordre de paiement <span class="badge badge-important"></span></a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab00008">Engagement <span class="badge badge-important"></span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab00009">Liquidation <span class="badge badge-important"></span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab000010">Mandat <span class="badge badge-important"></span></a>
                      </li>
                    </ul>
                  </div>

                  
                  
                  
                  <div class="widget-content tab-content">
                  
                    <div id="tab00007" class="tab-pane">
                     <div align="right">
                        <div class="widget-content">
                         <a href="#ajouterMP1" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                          </div>
                          </div>
                       </div>




                      
                         





             <div id="ajouterMP1" class="modal hide tailgrand">
  
<div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h4>Ajouter Ordre de paiement</h4>
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
                    <!-- <li class="active"> -->
                      <!-- <a data-toggle="tab" href="#tab1">REFERENCE DU BENEFICIAIRE</a> -->
                    <!-- </li> -->
                     
                    <!-- <li> -->
                      <!-- <a data-toggle="tab" href="#tab2">SPECIFICATION DE LA DEPENSE</a> -->
                    <!-- </li> -->
                    <!-- <li>
                      <a data-toggle="tab" href="#tab3">Descriptif3</a>
                    </li> -->
                    <!-- <li>
                      <a data-toggle="tab" href="#tab3">Autres Information</a>
                    </li> -->
                   
                  </ul>
                </div>
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
                    <div class="modal-body">
      <table class="table table-bordered table-striped">
          <tr>
            <td>
              
               <label class="control-label">Exercice Budgétaire:</label>
               <div class="controls">
                 <input
                   type="text"
                  v-model="Exercice_Budgétaire"
                   
                    placeholder="Saisir exercice budgétaire"
                    readonly
                 />
               </div>
              
            </td>
             <td>
  
    <label class="control-label">Section</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.section"
       class="span"
      readonly
      />
    </div>
  
</td>
                         <td>
  
    <label class="control-label">Programme/dotation</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.programme"
       class="span"
      readonly
      />
    </div>
  
</td>

                         <td>
  
    <label class="control-label">Nature Depense</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.gdenature_id"
       class="span"
      readonly
      />
    </div>
  
</td>




            
          </tr>
          <tr>
                         <td>
  
    <label class="control-label">Action</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.action_id"
       class="span"
      readonly
      />
    </div>
  
</td>
                          <td>
  
    <label class="control-label">Activité</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.activite_id"
       class="span"
      readonly
      />
    </div>
  
</td>






                         <td>
  
    <label class="control-label">Unité administrative</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.ua_id"
       class="span"
      readonly
      />
    </div>
  
</td>
             <td>
  
    <label class="control-label">Type Procédure</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.type_procedure"
       class="span"
       placeholder="Saisir type procédure"
       readonly
      />
    </div>
  
</td>
          </tr>

         <tr>
             <td>
   <div class="control-group">
      <label class="control-label">Numéro Bon Manuel</label>
      <div class="controls">
        <input type="text" class="span12" v-model="formData.numero_demande_engage"/>
      </div>
    </div>
  </td>
   <td>
   <div class="control-group">
      <label class="control-label">Numéro demande engagement</label>
      <div class="controls">
        <input type="text" class="span12" v-model="formData.numero_engage"/>
      </div>
    </div>
  </td>
   <td>
   <div class="control-group">
      <label class="control-label">Numero Bordereau</label>
      <div class="controls">
        <input type="text" class="span12" v-model="formData.numero_bordereau"/>
      </div>
    </div>
  </td>
   <td>
   <div class="control-group">
      <label class="control-label">Date demande engagement</label>
      <div class="controls">
        <input type="date" class="span12" v-model="formData.date_demande"/>
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
            class="span12"
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
            class="span12"
            v-model="formData.numero_op"
          />
        </div>
      </div>
    </td>
                                 <td>
  <div class="control-group">
    <label class="control-label">Fichier Joint</label>
  
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

                  <div id="tab120" class="tab-pane">
                  
                                    <div class="modal-body">
      <table class="table table-bordered table-striped">
          <tr>
            <td>
              
               <label class="control-label">Mode de paiement:</label>
               <div class="controls">
                 <input
                   type="text"
                  v-model="Mode_paiement"
                    placeholder="Saisir mode de paiement"
                   class="span"
                 />
               </div>
              
            </td>
             <td>
  
    <label class="control-label">N°compte contribuable</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.NumeroFournisseur"
       class="span"
      readonly
      />
    </div>
  
</td>
                         <td>
  
    <label class="control-label">Nom entreprise</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.programme"
       class="span"
      readonly
      />
    </div>
  
</td>

                         <td>
  
    <label class="control-label">Adresse</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.adresse"
       class="span"
      readonly
      />
    </div>
  
</td>




            
          </tr>  
                  
                  <tr>
            <td>
              
               <label class="control-label">Objet de la Depense:</label>
               <div class="controls">
                 <input
                   type="text"
                  v-model="Mode_paiement"
                    placeholder="Saisir l'objet de la depense"
                   class="span"
                 />
               </div>
              
            </td>
             <td>
  
    <label class="control-label">Numéro compte</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.NumeroFournisseur"
       class="span"
      readonly
      />
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
  
    <label class="control-label">Bailleur</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.bailleur"
       class="span"
      readonly
      />
    </div>
  
</td>
            
          </tr>            
               <tr>
 <td>
   <div class="control-group">
      <label class="control-label">Total général</label>
      <div class="controls">
        <input type="number" class="span12" :value="sommeMontant" readonly/>
      </div>
    </div>
  </td>
 
  <td>
   <div class="control-group">
      <label class="control-label">Trésor</label>
      <div class="controls">
        <input type="number" class="span12" v-model="formData.montant_tresor" />
      </div>
    </div>
  </td>
    <td>
    <div class="control-group">
      <label class="control-label">Don</label>
      <div class="controls">
        <input type="number" class="span12" v-model="formData.montant_don" />
      </div>
    </div>
  </td>
  <td>
       <div class="control-group">
      <label class="control-label">Emprunt</label>
      <div class="controls">
        <input type="number" class="span12" v-model="formData.montant_emprunt" />
      </div>
    </div>
  </td>
</tr>
   
            <tr>
            <td>
              
               <label class="control-label">Ligne Budgétaire:</label>
               <div class="controls">
                 <input
                   type="text"
                  v-model="ligne_id"
                    placeholder="Saisir ligne budgétaire"
                   class="span"
                 />
               </div>
              
            </td>
             <td>
  
    <label class="control-label">Imputation Budgétaire</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.Imp_budgetaire"
       class="span"
      readonly
      />
    </div>
  
</td>
                         <td>
  
    <label class="control-label">Numéro Facture</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.num_facture"
       class="span"
      readonly
      />
    </div>
  
</td>

  <td>
  
    <label class="control-label">Montant Facture</label>
    <div class="controls">
      <input 
      type="number"  
       v-model="formData.montant_fact"
       class="span"
        />
    
  </div>
</td>

            
          </tr>                

                 <tr>
            <td>
              
               <label class="control-label">Crédit Autorisé:</label>
               <div class="controls">
                 <input
                   type="text"
                  v-model="credit_auto"
                    placeholder="Saisir crédit autorisé"
                   class="span"
                 />
               </div>
              
            </td>
             <td>
  
    <label class="control-label">Cumul des demandes(y compris celle-ci)</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.cumul_demande"
       class="span"
      readonly
      />
    </div>
  
</td>
             <td>
  
    <label class="control-label">Dotation Disponible</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.dotation_dispo"
       class="span"
      readonly
      />
    </div>
  
</td>
























                 </tr>

      </table>   
                 </div>
                  </div>
                </div>
                <br />
                <div align="right">
                  <div class="controls">
                    <div data-toggle="buttons-checkbox" class="btn-group">
                      <a
        @click.prevent=""
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




















                       
                  
                      </div>

                    




                  <br />



                  <div id="ajouterMP1" class="modal hide tailgrand">
                    
                  </div>
              
                </div>
              </table>
            </div>  
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
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
  // 
  Exercice_Budgétaire:"",
   section:"",
   programme:"",
   gdenature_id:"",
   action_id:"",
   activite_id:"",
   ua_id: "",
   type_procedure: "",
   numero_demande_engage: "",
  numero_engage:"",
  numero_bordereau:"",
   fichierjoint:"",
  ref_juridique:"",
  numero_op:"",
  NumeroFournisseur:"",
  adresse:"",
  sommeMontant:"",
  montant_tresor:"",
  montant_don:"",
  montant_emprunt:"",
  ligne_id:"",
  Imp_budgetaire:"",
  num_facture:"",
  montant_fact:"",
  credit_auto:"",
  cumul_demande:"",
  dotation_dispo:"",

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
created() {
            this.executionPersoid=this.$route.params.id
   this.detail_Execution = this.paiementPersonnel.find(
       idExecution => idExecution.id == this.$route.params.id
         )
  
  
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
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
 "getPersonnaliseBudgetGeneralParPersonnel"
   
   
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

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),


afficherListeSalaireEnExecution(){
return this.paiementPersonnel.filter(element => element.valisationvirement == 0)
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
                                    
  },
  methods: {
    ...mapActions("personnelUA", [
      "getpaiementPersonnel",
      "ajouterpaiementPersonnel",
      "modifierpaiementPersonnel",
      "supprimerpaiementPersonnel"
    ]),

   
  }
};
</script>
<style scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}

</style>