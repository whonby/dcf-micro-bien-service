
<template>
    <div>

<div id="ajouterMP1" class="modal hide tailgrand">
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
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
            <tr>
              <td>
                
                 <label class="control-label">Exercice en Cours:</label>
                 <div class="controls">
                   <input
                     type="text"
                   
                    
                      placeholder="Saisir l'exercice en cours"
                      readonly
                   />
                 </div>
                
              </td>
              <td>
               
                  <label class="control-label">Unite Administrative</label>
                  <div class="controls">
                    <!-- <select v-model="formData.ua_id" class="span">
                      <option
                        v-for="UniteA in uniteAdministratives"
                        :key="UniteA.id"
                        :value="UniteA.id"
                      >{{UniteA.libelle}}</option>
                    </select> -->
                    <input
         type="text"
        
         class="span"
         placeholder="Saisir code fichier"
         readonly
        />
                  </div>
                
              </td>
               <td>
                 
                  <label class="control-label">Ligne</label>
                  <div class="controls">
                    <!-- <select v-model="formData.ligne_id" class="span" :readOnly="activerLigneBudgetaire">
                      <option
                        v-for="lignebudg in afficheUaParLignePersonnel(formData.ua_id)"
                        :key="lignebudg.id"
                        :value="lignebudg.afficheEconomique.id"
                      >{{lignebudg.afficheEconomique.code}}-{{lignebudg.afficheEconomique.libelle}}</option>
                    </select> -->
                    <input
         type="text"
        
         class="span"
         placeholder="Saisir code fichier"
         readonly
        />
                  </div>
                
              </td>
              <td>
                
                  <label class="control-label">Programme</label>
                  <div class="controls">
                    <!-- <select v-model="formData.programme_id" class="span" :readOnly="activerProgramme">
                      <option value=""></option>
                     
                    </select> -->
                    <input
         type="text"
        
         class="span"
         placeholder="Saisir code fichier"
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
        
         class="span"
         placeholder="Saisir code fichier"
         readonly
        />
                </div>
              </td>
              <td>
              
               
                  <label class="control-label">Activite</label>
                  <div class="controls">
                   <input
         type="text"
        
         class="span"
         placeholder="Saisir code fichier"
         readonly
        />
                  </div>
               
              </td>
               <td>
    
      <label class="control-label">Numero Matricule</label>
      <div class="controls">
        <input
         type="text"
        
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
                    <div id="tab2" class="tab-pane">
                      
  <div class="modal-body">
        <table class="table table-bordered table-striped">
           <tr>
             <td>
              
               <div class="control-group">
                  <label class="control-label">Mode de paiemnt</label>
                  <div class="controls">
                   <input
         type="text"
        
         class="span"
         placeholder="Saisir code fichier"
         readonly
        />
                  </div>
                </div>
              </td>
             
                <td>
              
               <div class="control-group">
                  <label class="control-label">Banque</label>
                  <div class="controls">
                   <input
         type="text"
        
         class="span"
         placeholder="Saisir code fichier"
         readonly
        />
                  </div>
                </div>
              </td>
                <td>
                <div class="control-group">
                <label class="control-label">Compte de disponibilite affecte</label>
                 <div class="controls">
                <input
                 type="text"
                
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
                 <input
         type="text"
        
         class="span"
         placeholder="Saisir code fichier"
         readonly
        />
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