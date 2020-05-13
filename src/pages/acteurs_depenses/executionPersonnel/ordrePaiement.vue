
<template>
    <div>

<div id="ajouterMP1" class="modal hide tailgrand">
  
<div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          
           <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Ordre de paiement</h3>
      </div>
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <div class="widget-box">
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                 
                   
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
      <table class="table table-bordered table-striped" >
          <tr>
            <td>
              
               <label class="control-label">Exercice Budgétaire:</label>
               <div class="controls">
                 <input
                   type="text"
                 
                   :value="executionPersoid"
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
       
          </tr>

         <tr>
  
   <td>
   <div class="control-group">
      <label class="control-label">Numéro ordre de paiement</label>
      <div class="controls">
        <input type="text" class="span12" v-model="formData.numero_engage"/>
      </div>
    </div>
  </td>
   
 
</tr>
         

         <tr>
             
  
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
                  v-model="formData.Mode_paiement"
                    placeholder="Saisir mode de paiement"
                   class="span"
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
                  v-model="formData.Mode_paiement"
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
        <input type="number" class="span12" :value="formData.sommeMontant" readonly/>
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
                  v-model="formData.ligne_id"
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
                  v-model="formData.credit_auto"
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

                            <table class="table table-bordered table-striped">
                                            <thead>
                  <tr>
                    <th>Exercice en cours</th>
                    <th title="unite administrative"> ua</th>
                    <th>programme</th>
                    <th>action</th>
                    <th>activité</th>
                    <th>ligne</th>
                    <!-- <th>Code Fichier</th> -->
                    <th>Objet Depense</th>
                    <th>Mois de Paiement</th>
                    <th>Montant des Salaires</th>
                    <th>Fichier Joint</th>
                      <th>Validation</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
                                        </table>
    <!--  end -->

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  />
    </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
export default {
    props:["executionPersoid",
           "id",
           "exerciceencours"
           ],
    data(){
        return{
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

            

        }
        
    },
    created(){

    },
    computed:{
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

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
     
    },
    methods:{
        ...mapActions("bienService", [ "ajouterLot","modifierLot","supprimerLot"]),

        afficherModalAjouterTitre() {
      this.$("#ajouterMP1").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    }

    
    
}
</script>
<style  scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}
</style>