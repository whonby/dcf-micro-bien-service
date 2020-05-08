
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
                <table class="table table-bordered table-striped">
                 <div align="right">
     <div class="widget-content">
         <a href="#ajouterMP1" data-toggle="modal" class="btn btn-primary">Ajouter</a>
     </div>
 </div>
        <table class="table table-striped table-bordered" v-if="detail_Execution">
           <thead>
          <tr>
   <th>Année</th>
   <th title="unite administrative"> ua</th>
   <!-- <th>programme</th>
   <th>action</th>
   <th>activité</th> -->
   <th>ligne</th>
   <!-- <th>Code Fichier</th> -->
   <th>Objet Depense</th>
   <th>Mois de Paiement</th>
   <th>Montant de Paiement</th>
   <!-- <th>Montant des Salaires</th> -->
   <th>Fichier Joint</th>
     <th>Décision</th>
     <th>Validation</th>
     <th>Date de Validation</th>
     <th>Trésor</th>
     <th>Don</th>
     <th>Emprunt</th>
   
 </tr>
           </thead>
       </table>
              </table>
                  </div>


                   <div id="tab00001" class="tab-pane active">
                     <table class="table table-bordered table-striped">
               
                
              </table>
                   </div>
 <div id="tab00008" class="tab-pane active">
                     <table class="table table-bordered table-striped">
               
                
              </table>
                   </div>
                    <div id="tab00009" class="tab-pane active">
                     <table class="table table-bordered table-striped">
               
                
              </table>
                   </div>
                    <div id="tab000010" class="tab-pane active">
                     <table class="table table-bordered table-striped">
               
                
              </table>
                   </div>
                  </div>
                  <br />
              
                </div>
              </table>
            </div> 


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
     
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
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                  <div id="tab1" class="tab-pane active">
                    <div class="modal-body">
      <table class="table table-bordered table-striped">
          <tr>
            <td>
              
               <label class="control-label">Année:</label>
               <div class="controls">
                 <input
                   type="text"
                  v-model="Année"
                   
                    placeholder="Saisir l'année"
                    readonly
                 />
               </div>
              
            </td>
            <!-- <td> -->
<!--               -->
                <!-- <label class="control-label">Unite Administrative</label> -->
                <!-- <div class="controls"> -->
                  <!-- <select v-model="formData.ua_id" class="span"> -->
                    <!-- <option -->
                      <!-- v-for="UniteA in uniteAdministratives" -->
                      <!-- :key="UniteA.id" -->
                      <!-- :value="UniteA.id" -->
                    <!-- >{{UniteA.libelle}}</option> -->
                  <!-- </select> -->
                <!-- </div> -->
<!--                -->
            <!-- </td> -->
             <td>
  
    <label class="control-label">Unité Administrative</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.ua_id"
       class="span"
      readonly
      />
    </div>
  
</td>
             <!-- <td> -->
<!--                 -->
                <!-- <label class="control-label">Ligne</label> -->
                <!-- <div class="controls"> -->
                  <!-- <select v-model="formData.ligne_id" class="span" :readOnly="activerLigneBudgetaire"> -->
                    <!-- <option -->
                      <!-- v-for="lignebudg in afficheUaParLignePersonnel(formData.ua_id)" -->
                      <!-- :key="lignebudg.id" -->
                      <!-- :value="lignebudg.afficheEconomique.id" -->
                    <!-- >{{lignebudg.afficheEconomique.code}}-{{lignebudg.afficheEconomique.libelle}}</option> -->
                  <!-- </select> -->
                <!-- </div> -->
<!--                -->
            <!-- </td> -->
                         <td>
  
    <label class="control-label">Ligne</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.ligne_id"
       class="span"
      readonly
      />
    </div>
  
</td>
            <!-- <td> -->
<!--                -->
                <!-- <label class="control-label">Programme</label> -->
                <!-- <div class="controls"> -->
                  <!-- <select v-model="formData.programme_id" class="span" :readOnly="activerProgramme"> -->
                    <!-- <option value=""></option> -->
                    <!-- <option -->
                      <!-- v-for="program in afficheProgrammeParLigne(formData.ligne_id)" -->
                      <!-- :key="program.id" -->
                      <!-- :value="program.afficheProgramme.id" -->
                    <!-- >{{program.afficheProgramme.code}}-{{program.afficheProgramme.libelle}}</option> -->
                  <!-- </select> -->
                <!-- </div> -->
<!--                -->
            <!-- </td> -->
            
          </tr>
          <tr>
            <!-- <td> -->
                <!-- <label class="control-label">Action</label> -->
                <!-- <div class="controls"> -->
                  <!-- <select v-model="formData.action_id" :readOnly="activerAction" class="span"> -->
                    <!-- <option -->
                      <!-- v-for="act in afficheActionParProgramme(formData.programme_id)" -->
                      <!-- :key="act.id" -->
                      <!-- :value="act.afficheAction.id" -->
                    <!-- >{{act.afficheAction.code}}-{{act.afficheAction.libelle}}</option> -->
                  <!-- </select> -->
              <!-- </div> -->
            <!-- </td> -->
                         <td>
  
    <label class="control-label">Objet de Paiement</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.objetdepaiement"
       class="span"
      readonly
      />
    </div>
  
</td>
            <!-- <td> -->
<!--              -->
<!--               -->
                <!-- <label class="control-label">Activite</label> -->
                <!-- <div class="controls"> -->
                  <!-- <select v-model="formData.activite_id" class="span" :readOnly="activerActivite"> -->
                    <!-- <option -->
                      <!-- v-for="activ in afficheActiviteParAction(formData.action_id)" -->
                      <!-- :key="activ.id" -->
                      <!-- :value="activ.afficheActivite.id" -->
                    <!-- >{{activ.afficheActivite.code}}-{{activ.afficheActivite.libelle}}</option> -->
                  <!-- </select> -->
                <!-- </div> -->
<!--               -->
            <!-- </td> -->
                         <td>
  
    <label class="control-label">Mois de Paiement</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.moisdepaiement"
       class="span"
      readonly
      />
    </div>
  
</td>
             <td>
  
    <label class="control-label">Montant de Paiement</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.montantdepaiement"
       class="span"
       placeholder="Saisir montant de paiement"
       readonly
      />
    </div>
  
</td>
 <!-- <td> -->
<!--    -->
    <!-- <label class="control-label">References Bancaires</label> -->
    <!-- <div class="controls"> -->
      <!-- <input -->
       <!-- type="text" -->
       <!-- v-model="formData.referencebancaire" -->
       <!-- class="span" -->
      <!-- readonly -->
      <!-- /> -->
    <!-- </div> -->
<!--    -->
<!-- </td> -->
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

          <!-- </table>
        </div>
        
                  </div>
                  ongle descriptif
                  <div id="tab2" class="tab-pane">
                    
<div class="modal-body">
      <table class="table table-bordered table-striped"> -->
         <tr>
           <!-- <td> -->
<!--              -->
             <!-- <div class="control-group"> -->
                <!-- <label class="control-label">Mode de paiemnt</label> -->
                <!-- <div class="controls"> -->
                  <!-- <select v-model="formData.modepaiement_id" class="span"> -->
                    <!-- <option -->
                      <!-- v-for="activ in modepaiements" -->
                      <!-- :key="activ.id" -->
                      <!-- :value="activ.id" -->
                    <!-- >{{activ.libelle}}</option> -->
                  <!-- </select> -->
                <!-- </div> -->
              <!-- </div> -->
            <!-- </td> -->
           <!--  -->
                        <td>
  
    <label class="control-label">Décision</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.decision"
       class="span"
       placeholder="Saisir Décision"
       readonly
      />
    </div>
  
</td>
              <!-- <td> -->
<!--              -->
             <!-- <div class="control-group"> -->
                <!-- <label class="control-label">Banque</label> -->
                <!-- <div class="controls"> -->
                  <!-- <select v-model="formData.banque_id" class="span"> -->
                    <!-- <option -->
                      <!-- v-for="activ in afficheBanque(formData.ua_id)" -->
                      <!-- :key="activ.id" -->
                      <!-- :value="activ.id" -->
                    <!-- >{{afficheBanqueLibelle(activ.banq_id)}}</option> -->
                  <!-- </select> -->
                <!-- </div> -->
              <!-- </div> -->
            <!-- </td> -->
              <!-- <td> -->
              <!-- <div class="control-group"> -->
              <!-- <label class="control-label">Compte de disponibilite affecte</label> -->
               <!-- <div class="controls"> -->
              <!-- <input -->
               <!-- type="text" -->
               <!-- :value="afficherCompteBanque(formData.banque_id)" -->
               <!-- class="span" -->
               <!-- readonly -->
<!--                 -->
             <!-- /> -->
            <!-- </div> -->
          <!-- </div> -->
          <!-- </td> -->
             <!-- <td> -->
              <!-- <div class="control-group" > -->
                <!-- <label class="control-label">Mois de Paiement:</label> -->
    
                <!-- <div class="form-group" > -->
                <!-- <select v-model="formData.moisdepaiement" class="span"> -->
                   <!-- <option value="" >Selectionner</option> -->
                   <!-- <option value="Janvier" >Janvier</option> -->
                   <!-- <option value="Février">Février</option> -->
                   <!-- <option value="Mars">Mars</option> -->
                   <!-- <option value="Avril">Avril</option> -->
                   <!-- <option value="Mai">Mai</option> -->
                   <!-- <option value="Juin">Juin</option> -->
                   <!-- <option value="Juillet">Juillet</option> -->
                   <!-- <option value="Août">Août</option> -->
                   <!-- <option value="Septembre">Septembre</option> -->
                   <!-- <option value="Octobre">Octobre</option> -->
                   <!-- <option value="Novembre">Novembre</option> -->
                   <!-- <option value="Decembre">Decembre</option> -->
<!--                     -->
<!--                     -->
<!--                     -->
     
                  <!-- </select> -->
             <!-- </div> -->
               <!-- </div> -->
            <!-- </td> -->
                          <td>
  
    <label class="control-label">Validation</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.validation"
       class="span"
       placeholder="Saisir validé"
       readonly
      />
    </div>
  
</td>
             <td>
  
    <label class="control-label">Date de Validation</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.datevalidation"
       class="span"
       placeholder="Saisir date de validation"
       readonly
      />
    </div>
  
</td>
         </tr>

         <tr>
           <td>
  
    <label class="control-label">Tresor</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.Tresor"
       class="span"
       placeholder="Saisir le Tresor"
       
      />
    </div>
  
</td>
             <td>
  
    <label class="control-label">Don</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.Don"
       class="span"
       placeholder="Saisir le Don"
       
      />
    </div>
  
</td>
             <td>
  
    <label class="control-label">Emprunt</label>
    <div class="controls">
      <input
       type="text"
       v-model="formData.Emprunt"
       class="span"
       placeholder="Saisir l'Emprunt"
       
      />
    </div>
  
</td>
          
             <!-- <td> -->
              <!-- <div class="control-group"> -->
                <!-- <label class="control-label">Objet de la depense</label> -->
<!--      -->
                <!-- <div class="controls"> -->
                  <!-- <input -->
                   <!-- type="text" -->
                   <!-- v-model="formData.montantdessalaires" -->
                   <!-- class="span4" -->
                   <!-- placeholder="Saisir le montant de paiement" -->
<!--       -->
                  <!-- /> -->
                 <!-- </div> -->
              <!-- </div> -->
            <!-- </td> -->
<!--            -->
                       <!-- <td> -->
  <!-- <div class="control-group"> -->
    <!-- <label class="control-label">Pieces Justificative</label> -->
<!--    -->
    <!-- <div class="controls"> -->
      <!-- <input -->
        <!-- type="file" -->
        <!-- class="span" -->
        <!-- placeholder="Saisir fichier joint" -->
        <!-- readonly -->
      <!-- /> -->
    <!-- </div> -->
    <!-- </div> -->
<!-- </td> -->

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
  Année:"",
   datevalidation:"",
   action_id:"",
   ua_id: "",
   moisdepaiement: "",
   montantdessalaires: "",
   objetdepense:"",
   ligne_id:"",
   fichierjoint:"",
   validation:"",
   decision:"",
   Tresor:"",
   Don:"",
   Emprunt:"",
  
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
     afficherModalAjouterpaiementPersonnel() {
   this.$("#ajouterMP").modal({
     backdrop: "static",
     keyboard: false
   });
 },
 

   
  }
};
</script>
<style scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}

</style>