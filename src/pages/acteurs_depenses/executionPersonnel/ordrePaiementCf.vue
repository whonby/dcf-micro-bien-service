
<template>
   <div class="container-fluid">

<div id="ModalEngagement" class="modal hide tailgrand">
  <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h4>Ajouter Engagement</h4>
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
                        <a data-toggle="tab" href="#tab78965">REFERENCE DU BENEFICIAIRE</a>
                      </li>
                       
                      <li>
                        <a data-toggle="tab" href="#tab45632">SPECIFICATION DE LA DEPENSE</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab12365">SITUATION DU CREDIT</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab12365">Autres Information</a>
                      </li> -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                     <div id="tab12365" class="tab-pane">
                      <div class="modal-body">
                        <table class="table table-bordered table-striped">
                          <tr>
                            <td>
                
                 <label class="control-label">Tr&eacute;sor</label>
                 <div class="controls">
                   <input
                     type="number"
                  v-model="formDataEngagementPerso.montant_tresor"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Don</label>
                 <div class="controls">
                   <input
                     type="number"
                    v-model="formDataEngagementPerso.montant_don"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Emprunt</label>
                 <div class="controls">
                   <input
                     type="number"
                    v-model="formDataEngagementPerso.montant_emprunt"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Montant/Depense</label>
                 <div class="controls">
                   <input
                     type="number"
                  :value="sommeMontantEgagement"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
                          </tr>
                                  <tr>
                            <td>
                
                 <label class="control-label">Cr&eacute;dits Autorises</label>
                 <div class="controls">
                   <input
                     type="text"
                  :value="dotationInite(afficherIdLigne(PaiementPersoid))"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Cumuls des OP Anterieurs</label>
                 <div class="controls">
                   <input
                     type="text"
               readonly
                       :value="sommeEgagementLigneTableau(afficherIdLigne(PaiementPersoid))"
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Engagement Actuel</label>
                 <div class="controls">
                   <input
                     type="text"
                     :value="sommeMontantEgagement"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
                
                 <label class="control-label">Cumuls des Engagements</label>
                 <div class="controls">
                   <input
                     type="text"
                    
                  :value="CumulEngagement2"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
                          </tr>
                          <tr>
                             <td>
                
                 <label class="control-label">Disponible</label>
                 <div class="controls">
                   <input
                     type="text"
                  :value="DisponibleBudget"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
               <td>
                
                 <label class="control-label">Numero engagement</label>
                 <div class="controls">
                   <input
                     type="text"
                  v-model="formNumeroEngagemt.numero_engage"
                      
                      class="span"
                   />
                 </div>
                
              </td>
                          </tr>
                        </table>
                      </div>
                     </div>
                    <!--ongle identification-->
                    <div id="tab78965" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
            <tr>
              <td>
                
                 <label class="control-label">Exercice en Cours</label>
                 <div class="controls">
                   <input
                     type="text"
                   :value="afficherAnneeBudgetaire(PaiementPersoid)"
                    
                      placeholder="Saisir l'exercice en cours"
                      readonly
                      class="span"
                   />
                 </div>
                
              </td>
              <td>
               
                  <label class="control-label">Unite Administrative</label>
                  <div class="controls">
                   
                    <input
         type="text"
         :value="afficherLibelleUa(afficherIdUa(PaiementPersoid))"
         class="span"
         
         readonly
        />
                  </div>
                
              </td>
               <td>
                 
                  <label class="control-label">Ligne</label>
                  <div class="controls">
                   
                    <input
         type="text"
         :value="afficherLibelleLigne(afficherIdLigne(PaiementPersoid))"
         class="span"
         
         readonly
        />
                  </div>
                
              </td>
              <td>
                
                  <label class="control-label">Programme</label>
                  <div class="controls">
                    
                    <input
         type="text"
         :value="afficherLibelleProgramme(afficherIdProgramme(PaiementPersoid))"
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
         :value="afficherLibelleAction(afficherIdAction(PaiementPersoid))"
         class="span"
         
         readonly
        />
                </div>
              </td>
              <td>
              
               
                  <label class="control-label">Activite</label>
                  <div class="controls">
                   <input
         type="text"
         :value="afficherLibelleActivite(afficherIdActivite(PaiementPersoid))"
         class="span"
         
         readonly
        />
                  </div>
               
              </td>
               <td>
    
      <label class="control-label">Numero Matricule</label>
      <div class="controls">
        <input
         type="text"
         :value="afficherNumeroMatricule(PaiementPersoid)"
         class="span"
         
         readonly
        />
      </div>
    
  </td>
   <td>
    
      <label class="control-label">References Bancaires</label>
      <div class="controls">
        <input
         type="text"
         :value="afficherReferenceBancaire(PaiementPersoid)"
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
                    <div id="tab45632" class="tab-pane">
                      
  <div class="modal-body">
        <table class="table table-bordered table-striped">
           <tr>
             <td>
              
               <div class="control-group">
                  <label class="control-label">Mode de paiement</label>
                  <div class="controls">
                   <input
         type="text"
         :value="afficherModePaiementLibelle(afficherModePaiement(PaiementPersoid))"
         class="span"
         
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
         :value="afficherBanqueLibelle(afficherIdBanque(PaiementPersoid))"
         class="span"
         
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
                 :value="afficherCompteUa(PaiementPersoid)"
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
         :value="affichermoisdepaiement(PaiementPersoid)"
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
                  <label class="control-label">Objet de la depense</label>
      
 
                  <div class="controls">
                    <input
                     type="text"
                      :value="afficherObjetdepense(PaiementPersoid)"
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
   <td>
                <div class="control-group">
                  <label class="control-label">Num&eacute;ro Ordre paiement</label>
      
 
                  <div class="controls">
                    <input
                     type="text"
                     v-model="formDataEngagementPerso.numero_ordre_paiement"
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
          @click.prevent="ajouterEngagementLocal(formDataEngagementPerso)"
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







<div id="modalDecisionCf" class="modal hide tailgrand_2">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">Ã—</button>
        <h3>Ajouter Observation du CF</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                            <label class="control-label">Décision CF </label>
                            <div class="controls">
                              <select v-model="editOrdrePaiement.decision_cf">
                                <option value="0">Attente</option>
                              <option value="6">Vis&eacute;</option>
                             <option value="7">Diff&eacute;r&eacute;</option>
                             <option value="8">R&eacute;jet&eacute;</option>
                            
    
    </select>
                           
                            </div>
                          </div>
            </td>
            <td>
                    <div class="control-group">
                            <label class="control-label">Motif CF </label>
                            <div class="controls">
                               <select v-model="editOrdrePaiement.motifcf" class="span">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementParent" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
          </tr>
                
                  <tr>
                 <td>
                    <div class="control-group">
                            <label class="control-label">Libelle motif </label>
                            <div class="controls">
                               <select v-model="editOrdrePaiement.motif_cf" class="span">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementEnfant(editOrdrePaiement.motifcf)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
                 <td>
                               <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editOrdrePaiement.date_motif_cf"/>
                            </div>
                          </div>
                           </td>
                 </tr>             
                   <tr>
                     <td colspan="">
                        <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span6" row = "6" v-model="editOrdrePaiement.observation_cf">
                              </textarea>
                            </div>
                          </div>
                       </td>
                       <td colspan="">
                        <div class="control-group">
                            <label class="control-label">Nom du CF</label>
                            <div class="controls">
                              <input type="text" class="span6"  :value="afficheNomUtilisateur" readonly/>
                            </div>
                          </div>
                       </td>
                       </tr>      
                        
                           
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierOrdrePaiement(editOrdrePaiement)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>


                            <table class="table table-bordered table-striped" v-if="PaiementPersoid">
                                            <thead>
                  <tr>
                    <th>Exercice en cours</th>
                    <th title="unite administrative"> ua</th>
                    <th>programme</th>
                    <th>action</th>
                    <th>activit&eacute;</th>
                    <th>ligne</th>
                    <!-- <th>Code Fichier</th> -->
                    <th>Objet Depense</th>
                    <th>Mois de Paiement</th>
                    <th>Montant des Salaires</th>
                    <!-- <th>Fichier Joint</th> -->
                      <!-- <th>Validation Chef de projet</th> -->
                      <th title="date validation chef projet">Date validation CP</th>
                       <th>Validation CF</th>
                      <th>Date validation CF</th>
                      
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="(item,index) in listeOrdrePaiement(PaiementPersoid)" :key="item.id">
                                    <td>{{item.exerciceencours || 'Non renseign&eacute;'}}</td>
                                   <td>{{afficherLibelleUa(item.ua_id) || 'Non renseign&eacute;'}}</td>
                                     <td>{{afficherLibelleProgramme(item.programme_id) || 'Non renseign&eacute;'}}</td>
                                    <td>{{afficherLibelleAction(item.action_id) || 'Non renseign&eacute;'}}</td>
                                    
                                     <td>{{afficherLibelleActivite(item.activite_id) || 'Non renseign&eacute;'}}</td>
                                    <td>{{afficherLibelleLigne(item.ligne_id) || 'Non renseign&eacute;'}}</td>
                                    
                                    
                                     <td>{{item.objetdepense || 'Non renseign&eacute;'}}</td>
                                    <td>{{item.moisdepaiement || 'Non renseign&eacute;'}}</td>
                                    
                                     <td>{{formatageSomme(parseFloat(item.total_general)) || 'Non renseign&eacute;'}}</td>
                                    <!-- <td>{{item.fichierjoint || 'Non renseign&eacute;'}}</td>
                                    -->
                                     <!-- <td>
                       <button v-if="item.motif_chef_projet == 1"  class="btn  btn-success"   >                        
                     
                      <span    >Valid&eacute;</span>
                      
                      </button>
                       <button v-else-if="item.motif_chef_projet == 2" class="btn  btn-warning">                        
                     
                      
                       <span  >Diff&eacute;r&eacute;</span>
                      
                    
                      </button>
                        <button v-else-if="item.motif_chef_projet == 3" class="btn  btn-danger" >                        
                     
                      
                       <span  >R&eacute;jet&eacute;</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td> -->
                    <td>{{formaterDate(item.date_motif_chef_projet) || 'Non renseign&eacute;'}}</td>
                                       <td>
                       <button v-if="item.decision_cf == 6"  class="btn  btn-success"  @click="afficherModalObservationCF(index)" >                        
                     
                      <span    >Vis&eacute;</span>
                      
                      </button>
                       <button v-else-if="item.decision_cf == 7" class="btn  btn-warning" @click="afficherModalObservationCF(index)">                        
                     
                      
                       <span  >Diff&eacute;r&eacute;</span>
                      
                    
                      </button>
                        <button v-else-if="item.decision_cf == 8" class="btn  btn-danger" @click="afficherModalObservationCF(index)">                        
                     
                      
                       <span  >R&eacute;jet&eacute;</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationCF(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                    <td>{{formaterDate(item.date_motif_cf) || 'Non renseign&eacute;'}}</td>
                                    <td>
                                         
      <div class="btn-group">
          <button class="btn "   title="Ajouter Engagement" v-if="item.decision_cf == 6 && afficherButtonEngagement(item.paiementperso_id) == 0" @click="afficherModalEngagement(item.id)">
                        <span>
                          <i class="icon   icon-folder-close"></i>
                        </span>
                      </button>
                            <button @click.prevent="supprimerordrepaiement(item.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span>
                            </button>
                        </div>
</td>
                                </tr>
                </tbody>
                                        </table>
    <!--  end -->

    <!-- <fab :actions="fabActions" @cache="afficheToiSiPaiementNonVise" main-icon="apps" bg-color="green"></fab>
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficheToiSiPaiementNonVise()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  /> -->
    </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import { formatageSomme } from "../../../../src/Repositories/Repository";
  import {admin,dcf} from "../../../Repositories/Auth"
  import moment from "moment";
export default {
    props:["PaiementPersoid","exerciceBudgetaire"],
    data(){
        return{
fabActions: [
        {
          name: "cache",
          icon: "add"
        }
         ],  
         editOrdrePaiement:{},
         formNumeroEngagemt:{
             engagemtPero:"perso"
         },
         formDataEngagementPerso:{},
            formData: {
  // 
  
      banque_id:"",
      
   programme_id:"",
   numero_ordre_paiement:"",
   action_id:"",
   activite_id:"",
   ua_id: "",
   
  referencebancaire:"",
   fichierjoint:"",
  
  rib:"",
 
  
  montant_tresor:0,
  montant_don:0,
  montant_emprunt:0,
  ligne_id:"",



 },


            

        }
        
    },
    created(){

    },
    computed:{
        admin:admin,
      dcf:dcf,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

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
 ...mapGetters("bienService", ["typeMarches",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

   ...mapGetters('parametreGenerauxFonctionnelle',[
"structuresDecision",
"plans_Decision",
      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),
...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel","ordre_paiement"]),
...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
  
afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

},
 AffichierElementParent() {
      
      // return id => {
      //   if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.code == 11 || element.code == 12 || element.code == 13 || element.code == 14 || element.code == 15 || element.code == 16 || element.code == 17 || element.code == 18 || element.code == 19 || element.code == 20);
      //   }
      // };
    },
AffichierElementEnfant() {
      
      return id => {
        if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.parent == id);
        }
      };
    },
afficherButtonEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.valisationvirement;
      }
      return 0
        }
      };
    },
// AffichierElementParent() {
      
//       return id => {
//         if (id != null && id != "") {
//           return this.plans_Decision.filter(element => element.parent == id);
//         }
//       };
//     },

affichierIdPlanDecission() {
      const qtereel = this.plans_Decision.find(
        qtreel => qtreel.code == "12",
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },



 listeOrdrePaiement: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.ordre_paiement.filter(idmarche => idmarche.paiementperso_id == id)
                    }
                }
            },


            
// listeOrdrePaiement() {
      


//         if (!this.admin || !this.dcf){
//             let colect=[];
//             this.ordre_paiement.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
               
//             })
//              return id => {
//                     if (id != "") {
                     
//                         return this.colect.filter(idmarche => idmarche.paiementperso_id == id)
//                     }
//                 }
            
//         }
//  return id => {
//                     if (id != "") {
                     
//                         return this.ordre_paiement.filter(idmarche => idmarche.paiementperso_id == id)
//                     }
//                 }
     

//     },
 CumulEngagement() {
      const val = parseFloat(this.sommeEgagementLigneTableau(this.afficherIdLigne(this.PaiementPersoid))) + parseFloat(this.sommeMontant);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },

 CumulEngagement2() {
      const val = parseFloat(this.sommeEgagementLigneTableau(this.afficherIdLigne(this.PaiementPersoid))) + parseFloat(this.sommeMontantEgagement);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },

 DisponibleBudget() {
      const val = parseFloat(this.dotationInite(this.afficherIdLigne(this.PaiementPersoid))) + parseFloat(this.sommeEgagementLigneTableau(this.afficherIdLigne(this.PaiementPersoid)));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
   sommeEgagementLigneTableau: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.ligne_budgetaire_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
   
   
   
   
   dotationInite: function () {
                return id => {
                    if (id != "" && id != null) {
                        const qtereel = this.getPersonnaliseBudgetGeneralParPersonnel.find(normeEquipe => normeEquipe.economique_id == id);
                    if (qtereel) {
        return qtereel.Dotation_Initiale;
      }
      return 2
                   }
                }
            },     
   sommeMontant() { 
      const val = parseFloat(this.formData.montant_tresor) + parseFloat(this.formData.montant_don) + parseFloat(this.formData.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },
     sommeMontantEgagement() { 
      const val = parseFloat(this.formDataEngagementPerso.montant_tresor) + parseFloat(this.formDataEngagementPerso.montant_don) + parseFloat(this.formDataEngagementPerso.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },
     afficherAnneeBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exerciceencours;
      }
      return 0
        }
      };
    },
     afficherIdUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ua_id;
      }
      return 0
        }
      };
    },
     afficherLibelleUa() {
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
     afficherIdLigne() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ligne_id;
      }
      return 0
        }
      };
    },
    afficherLibelleLigne() {
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
    afficherIdProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.programme_id;
      }
      return 0
        }
      };
    },
      afficherLibelleProgramme() {
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
    afficherIdAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.action_id;
      }
      return 0
        }
      };
    },
     afficherLibelleAction() {
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
    afficherIdActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_id;
      }
      return 0
        }
      };
    },
    afficherIdOrdrePaiement() {
      return id2=> {
        if (id2!= null && id2!= "") {
           const qtereel = this.ordre_paiement.find(qtreel => qtreel.paiementperso_id == id2);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
     afficherLibelleActivite() {
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
     afficherNumeroMatricule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numeromatricule;
      }
      return 0
        }
      };
    },
     afficherReferenceBancaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.referencebancaire;
      }
      return 0
        }
      };
    },
    afficherModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.modepaiement_id;
      }
      return 0
        }
      };
    },
    afficherModePaiementLibelle() {
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
    afficherIdBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.banque_id;
      }
      return 0
        }
      };
    },
     afficherBanqueLibelle() {
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
    afficherCompteUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.rib;
      }
      return 0
        }
      };
    },
    affichermoisdepaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.moisdepaiement;
      }
      return 0
        }
      };
    },
    afficherObjetdepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.paiementPersonnel.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objetdepense;
      }
      return 0
        }
      };
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
     CumulEngagementModification() {
      const val = parseFloat(this.sommeEgagementLigneTableau(this.afficherIdLigne(this.PaiementPersoid))) + parseFloat(this.sommeMontantEgagement);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
  sommeMontantEgagementOrdre() { 
      const val = parseFloat(this.editOrdrePaiement.montant_tresor) + parseFloat(this.editOrdrePaiement.montant_don) + parseFloat(this.editOrdrePaiement.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },


    },
    methods:{
       ...mapActions("personnelUA", [
       "supprimerordrepaiement",
      "ajouterordrepaiement",
      "modifierordrepaiement"
    ]),
     ...mapActions("bienService", [
                "getEngagement",
                "supprimerEngagement",
                "modifierEngagement",
                "ajouterEngagement",
                "ajouterMandat",
                "modifierMandat",
                "supprimerMandat",
                
               
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
           
afficherModalEngagement(id) {
      this.$("#ModalEngagement").modal({
        backdrop: "static",
        keyboard: false
      });
      // this.formDataEngage = this.afficheMarcheEngage(this.detail_marche.id).find(recupererObjet => recupererObjet.id == id)
        this.formDataEngagementPerso = this.listeOrdrePaiement(this.PaiementPersoid).find(recupererObjet => recupererObjet.id == id)
    },
afficherModalObservationCF(index) {
      this.$("#modalDecisionCf").modal({
        backdrop: "static",
        keyboard: false
      })
      this.editOrdrePaiement = this.listeOrdrePaiement(this.PaiementPersoid)[index];
      
      },
    ajouterOrdrePaiement() {
      var nouvelObjet = {
        ...this.formData,
         activite_id: this.afficherIdActivite(this.PaiementPersoid),
       programme_id:this.afficherIdProgramme(this.PaiementPersoid),
       action_id:this.afficherIdAction(this.PaiementPersoid),
       ua_id: this.afficherIdUa(this.PaiementPersoid),
        moisdepaiement: this.afficherModePaiement(this.PaiementPersoid),
       ligne_id:this.afficherIdLigne(this.PaiementPersoid),
       objetdepense:this.afficherObjetdepense(this.PaiementPersoid),
         exerciceencours: this.afficherAnneeBudgetaire(this.PaiementPersoid),
         imputationBudget:this.afficheImputation(this.PaiementPersoid),
        
         numeromatricule :this.afficherNumeroMatricule(this.PaiementPersoid),
         referencebancaire :this.afficherReferenceBancaire(this.PaiementPersoid),
         banque_id :this.afficherIdBanque(this.PaiementPersoid),
         rib:this.afficherCompteUa(this.PaiementPersoid),
         total_general:this.sommeMontant,
           paiementperso_id:this.PaiementPersoid
       
      };
     
    
     this.ajouterordrepaiement(nouvelObjet)
      this.formData = {
        banque_id:"",
      
   programme_id:"",
   numero_ordre_paiement:"",
   action_id:"",
   activite_id:"",
   ua_id: "",
   
  referencebancaire:"",
   fichierjoint:"",
  
  rib:"",
 
  
  montant_tresor:0,
  montant_don:0,
  montant_emprunt:0,
  ligne_id:"",


 
       
      };
    },

    modifierOrdrePaiement() {
      var nouvelObjet = {
        ...this.editOrdrePaiement,
         activite_id: this.afficherIdActivite(this.PaiementPersoid),
       programme_id:this.afficherIdProgramme(this.PaiementPersoid),
       action_id:this.afficherIdAction(this.PaiementPersoid),
       ua_id: this.afficherIdUa(this.PaiementPersoid),
       moisdepaiement:this.affichermoisdepaiement(this.PaiementPersoid),
        modepaiement_id:this.afficherModePaiement(this.PaiementPersoid),
       ligne_id:this.afficherIdLigne(this.PaiementPersoid),
       objetdepense:this.afficherObjetdepense(this.PaiementPersoid),
         exerciceencours: this.afficherAnneeBudgetaire(this.PaiementPersoid),
         imputationBudget:this.afficheImputation(this.PaiementPersoid),
        
         numeromatricule :this.afficherNumeroMatricule(this.PaiementPersoid),
         referencebancaire :this.afficherReferenceBancaire(this.PaiementPersoid),
         banque_id :this.afficherIdBanque(this.PaiementPersoid),
         rib:this.afficherCompteUa(this.PaiementPersoid),
         total_general:this.sommeMontantEgagementOrdre,
           paiementperso_id:this.PaiementPersoid,
           
       
      };
     
    
     this.modifierordrepaiement(nouvelObjet)
     this.$("#modalDecisionCf").modal('hide');
      this.formData = {
        banque_id:"",
      
   programme_id:"",
   numero_ordre_paiement:"",
   action_id:"",
   activite_id:"",
   ua_id: "",
   
  referencebancaire:"",
   fichierjoint:"",
  
  rib:"",
 
  
  montant_tresor:0,
  montant_don:0,
  montant_emprunt:0,
  ligne_id:"",


 
       
      };
    },




ajouterEngagementLocal(){

 var nouvelObjet = {
      ...this.formDataEngagementPerso,
   exercice_budget :this.afficherAnneeBudgetaire(this.PaiementPersoid),
         total_general :this.sommeMontantEgagement,
       ligne_id:this.afficherIdLigne(this.PaiementPersoid),
      
       numero_engage:this.formNumeroEngagemt.numero_engage,
programme_id:this.afficherIdProgramme(this.PaiementPersoid),
action_id:this.afficherIdAction(this.PaiementPersoid),
activite_id:this.afficherIdActivite(this.PaiementPersoid),
  ua_id:this.afficherIdUa(this.PaiementPersoid),
  ordrepaiemnet_id:this.afficherIdOrdrePaiement(this.PaiementPersoid),
  marchetype:this.formNumeroEngagemt.engagemtPero
       };
 var objetLiquidation = {
         numero_demande : this.formNumeroEngagemt.numero_engage,
        	exo_id:this.afficherAnneeBudgetaire(this.PaiementPersoid),
 imputation_budgetaire :this.CodeBudgetaire,
programme_id:this.afficherIdProgramme(this.PaiementPersoid),
action_id:this.afficherIdAction(this.PaiementPersoid),
activite_id:this.afficherIdActivite(this.PaiementPersoid),
  ua_id:this.afficherIdUa(this.PaiementPersoid),

plan_budgetaire_id:this.afficherIdLigne(this.PaiementPersoid),
   ordrepaiemnet_id:this.afficherIdOrdrePaiement(this.PaiementPersoid),
  marchetype:this.formNumeroEngagemt.engagemtPero,

	paiementperso_id:this.PaiementPersoid,
       };
 
  this.ajouterEngagement(nouvelObjet)
 this.ajouterLiquidation(objetLiquidation)
this.$("#ModalEngagement").modal('hide');
this.formDataEngagementPerso= {

 numero_engage:"",
  total_general:0,
       montant_tresor:0,
montant_don:0,
montant_emprunt:0,


        exercice_budget:"",
      
         
        
            
};

     
    

    },





 formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

     formatageSomme:formatageSomme,
    }

    
    
}
</script>
<style  scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}
.tailgrand_2{
  width: 50%;
  margin: 0 -25%;
}
</style>