
<template>
   <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
      <div class="widget-box">
          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1">Identification</a></li>
              <!-- <li><a data-toggle="tab" href="#tab2"> Unité administrative</a></li> -->
              <li><a data-toggle="tab" href="#tab3"> Transport</a></li> 
            </ul>
          </div>
          <div class="widget-content tab-content">
            

            <div id="tab1" class="tab-pane active">

                  <table class="table table-bordered table-striped">
                    
                          <tr>

                            <td width="120">
                       <div class="control-group">
                                <label class="control-label">Année Budgétaire</label>
                                <div class="controls ">
                                  
                             <!-- <select v-model="formData.exercice_budgetaire_id" class="span">
                           <option v-for="exoBudget in exoEnCours" :key="exoBudget.id"
                           :value="exoBudget.id" >{{exoBudget.annee}}</option>
                             </select> -->
                              <input type="text" class="span" :value="anneeBugetaire" readonly/>
                                </div>
                                </div>
                        </td>

                   
                      <td colspan="2" width="150" > 
        <div class="control-group">
          <label class="control-label"> Objet de mission<span style="color:red;">*</span></label>
            <div class="controls">
              <textarea  v-model="formData.objet"  class="textarea_editor span" rows="3" placeholder=""></textarea>
            </div>
          
        </div>
                      </td>  





                    <td>           
               <div class="control-group">
              <label class="control-label">Type de mission<span style="color:red;">*</span></label>
              <div class="controls">
                <select v-model="formData.type_mission" class="span">
       
                  <option value="mission civ">Mission en côte d'ivoire</option>
                  <option value="mission hors civ">Mission hors côte d'ivoire</option>
                  
                </select>
              </div>
            </div> 
                    </td>

                          </tr>

                          <tr>

                              <td width="250"> 
            <div class="control-group">
              <label class="control-label" title="categorie de mission">Catégorie de mission<span style="color:red;">*</span></label>
              <div class="controls">
           <select v-model="formData.categorie_missions_id" class="span">
               <option v-for="budget in categories_missions" :key="budget.id" 
               :value="budget.id">{{budget.libelle}}</option>
           </select>
              </div>
            </div>
             </td>

                          
                        
                       <td width="250">           
               <div class="control-group">
              <label class="control-label">Date de mission<span style="color:red;">*</span></label>
              <div class="controls">
                <input type="date" v-model="formData.date_mission" class="span"/>
              </div>
                </div>
                </td>



                       <td width="250">         
                  
               <div class="control-group">
              <label class="control-label" title="numero autorisation">N° autorisation<span style="color:red;">*</span></label>
              <div class="controls">
                <input type="text" v-model="formData.numero_autorisation" 
                class="span"  />
                </div>
                  </div>
                              </td>

                         


                            <td colspan="2"> 
            <div class="control-group">
              <label class="control-label">N°CCM<span style="color:red;">*</span></label>
              <div class="controls">
     <input type="text" v-model="formData.numero_ccm" class="span" 
     placeholder="Saisir le numero" />
              </div>
            </div>
                      </td>
                 </tr>

                  <tr>
                     <td width="250">
                        <div class="control-group">
              <label class="control-label">Unité administrative<span style="color:red;">*</span></label>
              <div class="controls">
           <select v-model="formData.ua_id" class="span">
               <option v-for="plans in afficherMissionParUAEnfonctiondesRole" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
              </div>
            </div>
                    </td>
                     <td width="250">
                         <div class="control-group">
              <label class="control-label">Acteur de dépense</label>
              <div class="controls">
           <select v-model="formData.acte_personnel_id" class="span" :readOnly="veifEquipementExist">
               <option v-for="depense in acteurDepenseDynamiques(formData.ua_id )" :key="depense.id" 
               :value="depense.acte_personnel_id">{{depense.matricule}} =>{{depense.nom}} {{depense.prenom}}</option>
           </select>
              </div>
            </div>
                    </td>
                    <td width="250">
                          
               <div class="control-group">
              <label class="control-label">Nom et Prénoms</label>
              <div class="controls">
            
            <input type="text"  class="span" :value="afficherNomPrenomActeurDepense(formData.acte_personnel_id)" readonly />
              
      
             
                </div>
                  </div>

                    </td>
                     <td  width="250">
                       <div class="control-group">
                      <label class="control-label" title="">Source de financement<span style="color:red;">*</span></label>
                      <div class="controls">
                    <select v-model="formData.source_financement_id" class="span">
                          <option v-for="sourceFinancement in sources_financements" :key="sourceFinancement.id" 
                         :value="sourceFinancement.id">{{sourceFinancement.libelle}}</option>
                     </select>
              </div>
            </div>
               </td>
                  </tr>

                  <tr>
                       <td colspan="2" width="250">
                      <div class="control-group">
              <label class="control-label">Fonction</label>
              <div class="controls " >
            <input type="text"  class="span" :value="afficherLibelleFonction(afficherLaFonctionDActeurDepenseDynamique(formData.acte_personnel_id))" readonly >
      
      
              </div>
            </div>
                    </td>
                          <td  width="250">
                 <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
     
                    <select v-model="formData.economique_id" :readOnly="deveroueconomiq">
                    <option
                        v-for="eco in economiqueDynamiques(formData.ua_id)"
                        :key="eco.id"
                        :value="eco.afficheEconomique.id" class="span"
                      >{{eco.afficheEconomique.code}} - {{eco.afficheEconomique.libelle}}</option>
                    </select>
                  </div>
                   
                </div>
                    </td>
                    
                    <td colspan="2" width="250">
                      <div class="control-group">
              <label class="control-label">Imputation budgétaire</label>
              <div class="controls " >
            <input
                type="text"
                :value="imputationBudgetaireSurLaQuelleLaMissionSexecute"
                class="span"
                placeholder=""
                readonly
              />
              </div>
            </div>
                    </td>
                    
                    
                 </tr>  
                </table> 
                </div>



            <!-- <div id="tab2" class="tab-pane">
                 <table class="table table-bordered table-striped">
                  
                         
       
            </table> 
            </div> -->
            

            <div id="tab3" class="tab-pane">
            <form  action="" enctype="multipart/form-data" method="">
                  
              <table class="table table-bordered table-striped">
                          <tr>

                    
                        <td>         
                  
                <div class="control-group">
              <label class="control-label">Moyen de transport<span style="color:red;">*</span></label>
              <div class="controls">
                <select v-model="formData.moyen_transport" class="span">
        
                  <option value="0">Vehicule</option>
                  <option value="1">Avion</option>
                  <option value="2">Bateau</option>
                   <option value="3">Train</option>
                  
                </select>
              </div>
            </div>
                    </td> 

                    <td>         
                  
               <div class="control-group">
              <label class="control-label">Destination:</label>
              <div class="controls">
                <input type="text" v-model="formData.destination" 
                class="span"  />
                </div>
                  </div>
                   </td>


                   
                          <td>           
               <div class="control-group">
              <label class="control-label">Itinéraire retenu</label>
              <div class="controls">
                <input type="text" v-model="formData.itineraire_retenu" 
                class="span"/>
              </div>
                </div>
                </td>

                 <td>         
                  
               <div class="control-group">
              <label class="control-label">Classe voyage</label>
              <div class="controls">
                <input type="text" v-model="formData.classe_voyage" :readonly="affichageDeLaClasseVoyageEtCoutBilletAvionEnFonctionDuMoyenneDeTransport "
                
                 />
                </div>
                  </div>
                        </td> 
                          </tr>

                          <tr>

                              <td>         
                  
               <div class="control-group"> 
              <label class="control-label">Frais de perdiem</label>
              <div class="controls">
           <input type="text"  :value="afficherFraisDeplacementDynamique(formData.source_financement_id)" readonly  class="span"  />
                </div>
                  </div>
                              </td>


                                             
                         <td >           
               <div class="control-group">
              <label class="control-label">Frais d'hébergement</label>
              <div class="controls">
                <input type="number" v-model="formData.frais_hebergement" 
                class="span"/>
              </div>
                </div>
                </td>
                        
                              <td>         
                  
               <div class="control-group">
              <label class="control-label" title="frais de restauration">Frais de  restauration</label>
              <div class="controls">
                <input type="number" v-model="formData.frais_restauration" 
                class="span"  />
                </div>
                  </div>
                              </td>
                                    
                                <td >           
               <div class="control-group">
              <label class="control-label">Autre frais</label>
              <div class="controls">
                <input type="number" v-model="formData.autre_frais" 
                class="span"/>
              </div>
                </div>
                </td>
                          </tr>

                          <tr>

                      

                 
                 <td >           
               <div class="control-group">
              <label class="control-label" title="cout total de la mission">Cout total de la mission</label>
              <div class="controls">
                <input type="text" readonly :value="calculDuCoutTotal" 
                class="span"/>
              </div>
                </div>
                </td> 

                
                       <td> 
            <div class="control-group">
              <label class="control-label">Coût du billet d'avion</label>
              <div class="controls">
     <input type="number" v-model="formData.cout_billet_avion"
     :readonly="affichageDeLaClasseVoyageEtCoutBilletAvionEnFonctionDuMoyenneDeTransport" 
 
     placeholder="Saisir le coût du billet avion" />
              </div>
            </div>
                     </td>
                          

                       <td>         
                  
                <div class="control-group">
              <label class="control-label">Mode de paiement</label>
              <div class="controls">

                 <select v-model="formData.mode_paiement_id" class="span">
                          <option v-for="modePaie in modepaiements" :key="modePaie.id" 
                         :value="modePaie.id">{{modePaie.libelle}}</option>
                     </select>
                 </div>
                 </div>
                    </td>

                       <td>
                             <div class="control-group">
              <label class="control-label"> Signataire</label>
              <div class="controls">
     <input type="text" v-model="formData.signataire" class="span" 
     placeholder="Saisir le nom du signataire" />
              </div>
            </div>
                      </td>
                          </tr>

                  
                          <tr>

                         
                    
                        <td >           
               <div class="control-group">
              <label class="control-label">Date de départ<span style="color:red;">*</span></label>
              <div class="controls">
                <input type="date" v-model="formData.date_depart" class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Date de retour</label>
              <div class="controls">
                <input type="date" :min="formData.date_depart" :readonly="getDateRetourValue" v-model="formData.date_retour" 
                class="span"  />
                </div>
                  </div>
                              </td>

                        
                     <td> 
            <div class="control-group">
              <label class="control-label">Durée en jours</label>
              <div class="controls">
     <input type="text" readonly :value="nombreJourCalucle" class="span" 
     placeholder="Saisir la durée" />
              </div>
            </div>
                     </td>

                        <td>


                 <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file" id="file"  @change="onFichierChange" />
              </div>
            </div>
                            </td>
                          </tr>
                      </table> 
                       </form>
                    </div>

         
      
              </div>
               </div>

             </div>

                </div>
           <div align="right">
             <button
              @click.prevent="ajouterMissionLocal" class="btn btn-primary"
              href="#">Valider</button> &nbsp;&nbsp;&nbsp;
              <button @click.prevent="AllerAPageListe" data-dismiss="modal" class="btn" href="#">Fermer</button> 
                </div>



<notifications  />


               
   </div>
</template>

   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import {admin,dcf,noDCfNoAdmin} from "../../../../src/Repositories/Auth"
export default {
  
  data() {

    
    return {
      
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
          fichier_joint: null,
     
        formData : {

             cout_billet_avion:"",
             mode_paiement_id:"",
             classe_voyage:"",
               objet:"",
               ua_id:"",
             date_mission: "",
             categorie_missions_id:"",
             numero_autorisation:"",
             destination:"",
             type_mission:"",
             numero_ccm:"",
             moyen_transport:"",
             itineraire_retenu:"",
             
             duree:"",
             date_retour:"",
             date_depart:"",
             frais_deplacement:"",
             frais_hebergement:"",
             fichier_joint:"",
             url_fichier_joint:"",
             signataire:"",
             fonction:"",
             frais_restauration:"",
             autre_frais:"",
             source_financement_id:"",
             exercice_budgetaire_id:"",
             cout_total:"",
             temps_arrive:"",
             imputation:"",
             	economique_id:""
        },
        fonctionActeur:"",
        
        fraisDeplacement:""     
         
    };
  },

 
  created() {
    //  this.getStructureActivite()
   // console.log(this.formData.ua_id)
  },

  computed: {
// methode pour maper notre guetter
   ...mapGetters('suivi_controle_budgetaire', ['categories_missions','missions','getNormeMissionPersonnaliser']) ,
  ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
  ...mapGetters('personnelUA', ['personnaliseActeurDepense',  'fonctions']),
   ...mapGetters('uniteadministrative', ['uniteAdministratives', 'getPersonnaliseBudgetGeneralParPersonnel']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
   ...mapGetters('bienService', ['modepaiements']),
  ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
    noDCfNoAdmin:noDCfNoAdmin,
    admin:admin,
    dcf:dcf,
   

    afficherMissionParUAEnfonctiondesRole() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
             return colect;
            
        }

        return this.uniteAdministratives;
       

    },
   
   
   
   
   
   
   nombreJourCalucle(){
     const form = this.formData
     if(form.date_depart == form.date_retour && form.date_retour !== "" && form.date_depart !== "") return 1 
        if( form.date_retour == "" && form.date_depart == "") return null 
   var dateR = new Date(form.date_retour).getTime()
    var dateD = new Date(form.date_depart).getTime()
    var diffTime = dateR - dateD

    var diffJours = diffTime / (1000 * 3600 * 24)
          if(isNaN(diffJours)) return null

    if(parseFloat(diffJours) < 0 ) return "durée invalide"

      return diffJours;
   },





   getDateRetourValue(){
     return !this.formData.date_depart != ""
   },


   //reucperation annee budgetaire dynamique
   anneeBugetaire(){
     const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.encours == 1 );
     if(anneBudget){
       return anneBudget.annee;
     }
     return 0
   },



   afficherLaFonctionDActeurDepenseDynamique(){
     return acte_personnel_id => {
       if( acte_personnel_id != undefined) {
    var acteur = this.personnaliseActeurDepense.find(acteur => acteur.acte_personnel_id == acte_personnel_id  )
    
     // this.fonctionActeur = acteur.fonction.id
      // console.log(acteur)
     return (acteur) ? acteur.fonction_id :null
       }
    return null
     }
  
   },



   afficherLibelleFonction(){
     return id => {
       if( id !=null && id!="") {
    var acteur = this.fonctions.find(acteur => acteur.id == id  )
    
     if(acteur){
       return acteur.libelle
     }
       }
    return null
     }
  
   },


// echo de econimique

 deveroueconomiq() {
      return this.formData.ua_id == "";
    },

 economiqueDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParPersonnel.filter(
            element => element.ua_id == id
          );
          
        }
      };
     
    },


     imputationBudgetaireSurLaQuelleLaMissionSexecute() {
      
      const imputMission = this.getPersonnaliseBudgetGeneralParPersonnel.find(imputMission => imputMission.afficheEconomique.id == this.formData.economique_id);

      if (imputMission) { 
        return imputMission.codebudget;

      }
     return 0
      
    },


// afficher le nom et prenom de l'acteur de depense

   afficherNomPrenomActeurDepense(){
     return acte_personnel_id => {
       if( acte_personnel_id !== undefined) {
    var acteur = this.personnaliseActeurDepense.find(acteur => acteur.acte_personnel_id === acte_personnel_id  )
    
     // this.fonctionActeur = acteur.fonction.id
      // console.log(acteur)
     return  acteur.nom.concat('  ', acteur.prenom)
       }
    return null
     }
  
   },

   

   
   

   // affichage du cout de billet avion et de la classe voyage en fonction du moyen de transpoprt

   affichageDeLaClasseVoyageEtCoutBilletAvionEnFonctionDuMoyenneDeTransport(){
    
     return this.formData.moyen_transport != 1 
   },

// exoEnCours(){
// return this.exercices_budgetaires.filter(element => element.encours == 1)
// },

   // calcul automatique du frais de deplacement en fonction du source de financement selectionner

    afficherFraisDeplacementDynamique(){
   
     return source_financement_id => {
       if( source_financement_id != undefined ) {

    var norme = this.getNormeMissionPersonnaliser.find(norme => norme.varObjetSourceFinancement.id == source_financement_id )
  //console.log(norme)
  return (norme) ? norme.perdiem : null
        
    

 //if(norme !=="") return norme.perdiem
 
       }
   return null
     }

    },

 veifEquipementExist() {
      return this.formData.ua_id == undefined;
    },


//calcul du cout total

   calculDuCoutTotal(){

  const coutTotal = parseFloat(this.afficherFraisDeplacementDynamique(this.formData.source_financement_id)) + parseFloat(this.formData.frais_hebergement)
  + parseFloat(this.formData.frais_restauration) + parseFloat(this.formData.autre_frais) 

  if(isNaN(coutTotal)) return null
  return parseFloat(coutTotal).toFixed(2)
     
  //console.log(coutTotal)
},



acteurDepenseDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.personnaliseActeurDepense.filter(element => element.unite_administrative_id == id);
        }
      };
    },


  },

  methods: {
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getMission', 'ajouterMission',
   'modifierMission','supprimerMission']),  


  

    onFichierChange(e){
      this.fichier_joint = e.target.files[0]
     // console.log(this.onFichierChange(e));
    },
   
  //      afficherFonction(){
  //        if(this.formData.acte_personnel_id !==""){
  //  var acteur =  this.personnaliseActeurDepense.find(acteur => acteur.id == this.formData.acte_personnel_id  )

  //        }
        
    
  //      },      
   
  // fonction pour aller a la page de la liste
    AllerAPageListe(){
  
    this.$router.push({
        name: 'Mission'
    })
    },
   // fonction pour vider l'input
     ajouterMissionLocal() {
       var nouvelObjet = {
         ...this.formData,
         duree: this.nombreJourCalucle,
         //fichier_joint: this.onFichierChange,
          //economique_id: this.economiqueDynamiques,
          exercice_budgetaire_id:this.anneeBugetaire,
        cout_total: this.calculDuCoutTotal,
        imputation: this.imputationBudgetaireSurLaQuelleLaMissionSexecute,
       frais_deplacement: this.afficherFraisDeplacementDynamique(this.formData.source_financement_id)

            } 
            
            // var form = new FormData();
            // form.append('fichier_joint', this.fichier_joint)
     this.ajouterMission(nouvelObjet);                
        this.formData = {
           cout_billet_avion:"",
               objet:"",
               imputation:"",
               economique_id:"",
             date_mission: "",
             classe_voyage:"",
             categorie_missions_id:"",
             numero_autorisation:"",
             destination:"",
             type_mission:"",
             numero_ccm:"",
             moyen_transport:"",
             itineraire_retenu:"",
             
             duree:"",
             date_retour:"",
             date_depart:"",
             frais_deplacement:"",
             frais_hebergement:"",
             fichier_joint:"",
             url_fichier_joint:"",
             signataire:"",
             fonction:"",
             frais_restauration:"",
             autre_frais:"",
             source_financement_id:"",
             cout_total:"",
             mode_paiement_id:"" 
             
         }

         
// console.log(nouvelObjet)
     },

  }
};
</script>
