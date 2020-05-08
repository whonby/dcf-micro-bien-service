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
                         <label class="control-label">Année Budgetaire</label>
                                <div class="controls ">
                             <!-- <select v-model="formData.exercice_budgetaire_id" class="span">
                           <option v-for="exoBudget in exoEnCours" :key="exoBudget.id"
                           :value="exoBudget.id" >{{exoBudget.annee}}</option>
                             </select> -->
                              <input type="text" class="span" :value="anneeBugetaire" readonly/>
                                </div>
                                </div>
                        </td>


              
                       <td colspan="2" width="250">
        <div class="control-group">
          <label class="control-label">Objet de mission:</label>
            <div class="controls">
              <textarea  v-model="editMission.objet"  class="textarea_editor span2.5"  placeholder="Enter text ..."></textarea>
            </div>
          
        </div>
                      </td> 

                        
                              <td>           
               <div class="control-group">
              <label class="control-label">Type de mission:</label>
              <div class="controls">
                <select v-model="editMission.type_mission" class="span">
       
                  <option value="mission civ">Mission en cote d'ivoire</option>
                  <option value="mission hors civ">Mission hors cote d'ivoire</option>
                  
                </select>
              </div>
            </div> 
                    </td> 
                          </tr>
                          
                          <tr>

                          <td width="250"> 
            <div class="control-group">
              <label class="control-label" title="categorie de mission">Categorie de mission:</label>
              <div class="controls">
           <select v-model="editMission.categorie_missions_id" class="span">
               <option v-for="budget in categories_missions" :key="budget.id" 
               :value="budget.id">{{budget.libelle}}</option>
           </select>
              </div>
            </div>
             </td>
            
                    
                             <td width="250">           
               <div class="control-group">
              <label class="control-label">Date de mission:</label>
              <div class="controls">
                <input type="date" v-model="editMission.date_mission" class="span"/>
              </div>
                </div>
                </td>

                <td width="250">         
                  
               <div class="control-group">
              <label class="control-label" >N° autorisation:</label>
              <div class="controls">
                <input type="text" v-model="editMission.numero_autorisation" 
                class="span"  />
                </div>
                  </div>
                   </td>

                     <td colspan="2"> 
            <div class="control-group">
              <label class="control-label">N°ccm:</label>
              <div class="controls">
     <input type="text" v-model="editMission.numero_ccm" class="span" 
     placeholder="Saisir le numero" />
              </div>
            </div>
                      </td>
                          </tr>
                          <tr>

    <td width="250">
            <div class="control-group">
              <label class="control-label">Unite administrative:</label>
              <div class="controls">
           <select v-model="editMission.ua_id" class="span">
               <option v-for="plans in uniteAdministratives" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
              </div>
            </div>
             </td>

                  <td width="250">
            <div class="control-group">
              <label class="control-label">Acteur de depense:</label>
              <div class="controls">
           <select v-model="editMission.acte_personnel_id" class="span" >
               <option v-for="depense in all_acteur_depense" :key="depense.id" 
               :value="depense.id">{{depense.matricule}}</option>
           </select>
              </div>
            </div>
             </td>

             <td width="250">
                          
               <div class="control-group">
              <label class="control-label">Nom Prenom:</label>
              <div class="controls">
            
            <input type="text"  class="span" 
            :value="afficherNomPrenomActeurDepense(editMission.acte_personnel_id)"
            readonly />
              
      
             
                </div>
                  </div>

                    </td>
                        <td  width="250">
            <div class="control-group">
              <label class="control-label">Fonction:</label>
              <div class="controls " >
     <input type="text" class="span" :value="afficherLaFonctionDActeurDepenseDynamique(editMission.acte_personnel_id)"  >
      
              </div>
            </div>
                          </td>

                          </tr>

                          <tr>
                           <td  width="250">
                 <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
     
                    <select v-model="editMission.economique_id" :readOnly="deveroueconomiq">
                    <option
                        v-for="eco in economiqueDynamiques(editMission.ua_id)"
                        :key="eco.id"
                        :value="eco.afficheEconomique.id"  class="span"
                      >{{eco.afficheEconomique.code}} - {{eco.afficheEconomique.libelle}}</option>
                    </select>
                  </div>
                   
                </div>
                    </td>

                     <td colspan="3" width="550">
                      <div class="control-group">
              <label class="control-label">Imputation budgetaire:</label>
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

            
               <div id="tab3" class="tab-pane">
              <table class="table table-bordered table-striped">
                       <tr>
                   
                         <td>         
                  
                <div class="control-group">
              <label class="control-label">Moyen de transport:</label>
              <div class="controls">
                <select v-model="editMission.moyen_transport" class="span">
        
                <option value="0">Vehicule</option>
                  <option value="1">Avion</option>
                  <option value="2">Train</option>
                  
                </select>
              </div>
            </div>
                    </td>  

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Destination:</label>
              <div class="controls">
                <input type="text" v-model="editMission.destination" 
                class="span"  />
                </div>
                  </div>
                    </td>
                          
                       <td >           
               <div class="control-group">
              <label class="control-label">Itineraire retenu:</label>
              <div class="controls">
                <input type="text" v-model="editMission.itineraire_retenu" 
                class="span"/>
              </div>
                </div>
                </td>

                
                     <td>         
                  
               <div class="control-group">
              <label class="control-label">Class voyage:</label>
              <div class="controls">
                <input type="text" v-model="editMission.classe_voyage" 
                class="span"  />
                </div>
                  </div>
                        </td>
                       </tr>
                       
                       
                       <tr>
                        
                            <td>         
                  
               <div class="control-group"> 
              <label class="control-label">Frais de Perdium:</label>
              <div class="controls">
           <input type="text"  v-model="editMission.frais_deplacement"  class="span"  />
                </div>
                  </div>
                              </td>
                                    
                      <td >           
               <div class="control-group">
              <label class="control-label">frais d'hebergement:</label>
              <div class="controls">
                <input type="number" v-model="editMission.frais_hebergement" 
                class="span"/>
              </div>
                </div>
                </td>
                     <td>         
                  
               <div class="control-group">
              <label class="control-label" title="frais de restauration">Frais de  restauration:</label>
              <div class="controls">
                <input type="number" v-model="editMission.frais_restauration" 
                class="span"  />
                </div>
                  </div>
                              </td>
                               <td >           
               <div class="control-group">
              <label class="control-label">Autre frais:</label>
              <div class="controls">
                <input type="number" v-model="editMission.autre_frais" 
                class="span"/>
              </div>
                </div>
                </td>    

                 
               </tr>

               <tr>

                   <td>           
               <div class="control-group">
              <label class="control-label" title="cout total de la mission">Cout total  mission:</label>
              <div class="controls">
                <input type="text" v-model="editMission.cout_total"
                class="span"/>
              </div>
                </div>
                </td> 

                      <td> 
            <div class="control-group">
              <label class="control-label">Cout du billet d'avion:</label>
              <div class="controls">
     <input type="number" v-model="editMission.cout_billet_avion" class="span" 
     placeholder="Saisir la cout du billet avion" />
              </div>
            </div>
                     </td>
                            <td>         
                  
                <div class="control-group">
              <label class="control-label" title="mode de paiement">Mode de paiement:</label>
              <div class="controls">
                <select v-model="editMission.mode_paiement" class="span">
                <option value="0">Virement</option>
                  <option value="1">Chèque</option>
                  <option value="2">Espèce</option>
                </select>
                 </div>
                 </div>
                    </td> 

                   
                   <td>
                      <div class="control-group">
              <label class="control-label"> Signataire:</label>
              <div class="controls">
     <input type="text" v-model="editMission.signataire" class="span" 
     placeholder="Saisir le nom du signataire" />
              </div>
            </div>
             </td>

               </tr>
                
               <tr>

                  <td >           
               <div class="control-group">
              <label class="control-label">Date depart:</label>
              <div class="controls">
                <input type="date" v-model="editMission.date_depart" class="span"/>
              </div>
                </div>
                </td>

                
                   <td>         
                  
               <div class="control-group">
              <label class="control-label">Date retour:</label>
              <div class="controls">
                <input type="date"  v-model="editMission.date_retour" 
                class="span"  />
                </div>
                  </div>
                    </td>

                    
                     <td colspan="2"> 
            <div class="control-group">
              <label class="control-label">Durée(jours):</label>
              <div class="controls">
     <input type="text" v-model="editMission.duree" class="span10" 
     placeholder="Saisir la durée" />
              </div>
            </div>
                     </td>
                


                 <!-- <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file" id="file"  @change="onFichierChange" />
              </div>
            </div> -->
  
               </tr>

                  
                      
                       </table> 
                </div>

           

         

              </div>
               </div>

             </div>

                </div>
              <div align="right">
             <button
              @click.prevent="modifierMissionLocal(editMission)" class="btn btn-primary"
              >Modifier</button> &nbsp;&nbsp;&nbsp;
              <button @click.prevent=" AllerPageListe" data-dismiss="modal" class="btn" href="#">Fermer</button> 
                </div>
             
<notifications  />

   </div>
</template>

   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
export default {
  
  data() {
    return {
        fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
            
          ],
    
    
    

        editMission: {
               objet:"",
             imputation:"",
             economique_id:"",
               cout_billet_avion:"",
              classe_voyage:"",
              source_financement_id:"",
             date_mission: "",
             cout_total:"",
             categorie_missions_id:"",
             numero_autorisation:"",
             destination:"",
             type_mission:"",
             numero_ccm:"",
             moyen_transport:"",
             itineraire_retenu:"",
             
             mode_paiement:"",
             duree:"",
             date_retour:"",
             date_depart:"",
             frais_deplacement:"",
             frais_hebergement:"",
             frais_restauration:"",
             fichier_joint:"",
             signataire:"",
             
        
            
             acte_personnel_id:"",
            
             ua_id:"" ,
             exercice_budgetaire_id:"",
             id:"",
             autre_frais:""

        },
           
    };
  },

 
  created() {
    //  this.getStructureActivite()
    this.getDetail()
  },
  computed: {



     afficherLaFonctionDActeurDepenseDynamique(){
     return acte_personnel_id => {
       if( acte_personnel_id != undefined) {
    var acteur = this.all_acteur_depense.find(acteur => acteur.id == acte_personnel_id  )
    
     // this.fonctionActeur = acteur.fonction.id
      // console.log(acteur)
     return (acteur) ? acteur.fonction.libelle :null
       }
    return null
     }
  
   },

  anneeBugetaire(){
     const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.encours == 1 );
     if(anneBudget){
       return anneBudget.annee;
     }
     return 0
   },


   afficherNomPrenomActeurDepense(){
     return acte_personnel_id => {
       if( acte_personnel_id != undefined) {
    var acteur = this.all_acteur_depense.find(acteur => acteur.id == acte_personnel_id  )
    
     // this.fonctionActeur = acteur.fonction.id
      // console.log(acteur)
     return  acteur.nom.concat('  ',  acteur.prenom)  ;
       }
    return null
     }
  
   },


deveroueconomiq() {
      return this.editMission.ua_id == "";
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
      
      const imputMission = this.getPersonnaliseBudgetGeneralParPersonnel.find(imputMission => imputMission.afficheEconomique.id == this.editMission.economique_id);

      if (imputMission) { 
        return imputMission.codebudget;

      }
     return 0
      
    },



// methode pour maper notre guetter
   ...mapGetters('suivi_controle_budgetaire', ['categories_missions','missions']) ,
    ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
  ...mapGetters('personnelUA', ['all_acteur_depense','fonctions']),
  ...mapGetters('uniteadministrative', ['uniteAdministratives', 'getPersonnaliseBudgetGeneralParPersonnel']),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
   
  
  },

  watch: {
    '$route': 'getDetail'
  },

  methods: {

    getDetail(){
      var objetMissions =  this.missions.find(
        mission => mission.id == this.$route.params.id_mission
    )
           this.editMission.objet = objetMissions.objet,
           this.editMission.date_mission = objetMissions.date_mission,
           this.editMission.cout_total = objetMissions.cout_total,
           this.editMission.categorie_missions_id = objetMissions.categorie_missions_id,
           this.editMission.numero_autorisation = objetMissions.numero_autorisation,
           this.editMission.destination = objetMissions.destination, 
           this.editMission.type_mission  = objetMissions.type_mission,
           this.editMission.numero_ccm = objetMissions.numero_ccm,
           this.editMission.moyen_transport = objetMissions.moyen_transport,
           this.editMission.itineraire_retenu = objetMissions.itineraire_retenu;
           this.editMission.mode_paiement = objetMissions.mode_paiement,
           this.editMission.duree = objetMissions.duree,
           this.editMission.date_retour = objetMissions.date_retour,
           this.editMission.date_depart = objetMissions.date_depart,
           this.editMission.frais_deplacement = objetMissions.frais_deplacement,
           this.editMission.frais_hebergement = objetMissions.frais_hebergement,
           this.editMission.fichier_joint = objetMissions.fichier_joint,
           this.editMission.acte_personnel_id = objetMissions.acte_personnel_id,
           this.editMission.ua_id = objetMissions.ua_id,
           this.editMission.exercice_budgetaire_id = objetMissions.exercice_budgetaire_id ,
           this.editMission.id = objetMissions.id, 
           this.editMission.classe_voyage = objetMissions.classe_voyage,
           this.editMission.frais_restauration = objetMissions.frais_restauration,
           this.editMission.cout_billet_avion = objetMissions.cout_billet_avion,
           this.editMission.source_financement_id = objetMissions.source_financement_id,
           this.editMission.signataire = objetMissions.signataire,
           this.editMission.autre_frais = objetMissions.autre_frais,
           this.editMission.imputation = objetMissions.imputation,
           this.editMission.economique_id = objetMissions.economique_id
    },
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getMission', 'modifierMission']),  

   
    // fonction pour aller a la page liste
    AllerPageListe()
    {
      this.$router.push({
        name:'Mission'
      })
      
    },


// vider l'input
modifierMissionLocal(){ 

 // console.log(this.editMission)
   this.modifierMission(this.editMission)
  this.$router.push({name:'Mission'})
  

  //  this.editMission = {
  //     objet:"",
              
  //           cout_billet_avion:"",
  //            classe_voyage:"",
  //             source_financement_id:"",
  //            date_mission: "",
  //            cout_total:"",
  //            categorie_missions_id:"",
  //            numero_autorisation:"",
  //            destination:"",
  //            type_mission:"",
  //            numero_ccm:"",
  //            moyen_transport:"",
  //            itineraire_retenu:"",
  //            mode_paiement:"",
  //            duree:"",
  //            date_retour:"",
  //            date_depart:"",
  //            frais_deplacement:"",
  //            frais_hebergement:"",
  //            frais_restauration:"",
  //            fichier_joint:"",
  //            signataire:"",
  //            acte_personnel_id:"",
  //            ua_id:"" ,
            
  //            exercice_budgetaire_id:"",
  //            id:""



  //  }


 }

  }
};
</script>