
<template>

<div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5> Profil </h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>
 <div  style="text-align:center">
                 
                  
                      <img v-bind:src="AffichePhoto(afficheidUtilisateur)" name="aboutme" width="100" height="20" class="img-circle">
                  
                </div>
            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">Information utilisateur</a>
                      </li>
                       
                      <li>
                        <a data-toggle="tab" href="#tab2">Modification</a>
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
        <div class="control-group">
                                       <label class="control-label">Matricule</label>
                                       <div class="controls">
                                           <input type="text" :value="afficheMatriculeUtilisateur"  placeholder="Saisir le matricule" class="span12"/>
                                       </div>
                                   </div>
   </td>
              
              
                       
                                                      
                                                                                                                                                                                     
              
              
                
               
           
           
                   <td>
                     <div class="control-group">
                                                    <label class="control-label">Nom et Prénoms:</label>
                                                    <div class="controls">
                                                        <input type="text" :value="afficheNomUtilisateur"  placeholder="Saisir nom et prenom" class="span12"/>
                                                    </div>
                                                </div>
                </td>
             </tr>
            <tr>
              <td>
                     <div class="control-group">
                                                    <label class="control-label">E-mail:</label>
                                                    <div class="controls">
                                                        <input type="text" :value="afficheEmailUtilisateur"  placeholder="Saisir Email" class="span12"/>
                                                    </div>
                                                </div>
                </td>
          
          
                <td>
                    <div class="control-group">
                                                    <label class="control-label">Rôle:</label>
                                                    <div class="controls">
                                                        <input type="text" :value="afficheRoleUtilisateur"  placeholder="Saisir le rôle" class="span12"/>
                                                    </div>
                                                </div>
                </td>
               
                
                        
            </tr>
            <tr>
               <td colspan="2">
                     <div class="control-group">
                                                    <label class="control-label">Mot de passe:</label>
                                                    <div class="controls">
                                                        <input type="text" :value="afficheMotPasseUtilisateur"  placeholder="Saisir le mot de passe" class="span12"/>
                                                    </div>
                                                </div>
                </td>
                </tr> 
               <!-- <td> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Nom de la mere:</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <input type="text" v-model="formData.nom_mere"  placeholder="Saisir le nom de la mere" class="span12"/> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
                <!-- <td> -->
                     <!-- <div class="control-group"> -->
                                                    <!-- <label class="control-label">Situation matrimoniale</label> -->
                                                    <!-- <div class="controls"> -->
                                                        <!-- <select v-model="formData.situation_matrimonial" class="span12" > -->
<!--                                                             -->
<!--                                                             -->
                                                            <!-- <option v-for="situation in situation_matrimonial" :key="situation.id" :value="situation.id">{{situation.libelle}}</option> -->
<!--                                                             -->
                                                        <!-- </select> -->
                                                    <!-- </div> -->
                                                <!-- </div> -->
                <!-- </td> -->
            <!-- </tr> -->
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
                                    <label class="control-label">Matricule</label>
                                    <div class="controls">
                                        <input type="text" v-model="formData.matricule"  placeholder="Saisir le matricule" class="span12"/>
                                    </div>
                                </div>
</td>
           
           
                    
                                                   
                                                                                                                                                                                  
           
           
             
            
        
        
                <td>
                  <div class="control-group">
                                                 <label class="control-label">Nom et Prénoms:</label>
                                                 <div class="controls">
                                                     <input type="text" :value="afficheNomUtilisateur"  placeholder="Saisir nom et prenom" class="span12"/>
                                                 </div>
                                             </div>
             </td>
          </tr>
         <tr>
           <td>
                  <div class="control-group">
                                                 <label class="control-label">E-mail:</label>
                                                 <div class="controls">
                                                     <input type="text" :value="afficheEmailUtilisateur"  placeholder="Saisir Email" class="span12"/>
                                                 </div>
                                             </div>
             </td>
       
       
             <td>
                 <div class="control-group">
                                                 <label class="control-label">Rôle:</label>
                                                 <div class="controls">
                                                     <input type="text" :value="afficheRoleUtilisateur"  placeholder="Saisir le rôle" class="span12"/>
                                                 </div>
                                             </div>
             </td>
            
             
                     
         </tr>
         <tr>
            <td colspan="2">
                  <div class="control-group">
                                                 <label class="control-label">Ancien mot de passe:</label>
                                                 <div class="controls">
                                                     <input type="text" v-model="formData.mot_passe"  placeholder="Saisir mot de passe" class="span12"/>
                                                 </div>
                                             </div>
             </td>
             </tr> 



            <tr>
               
              <td colspan="2">
                <div class="control-group">
                                                    <label class="control-label">Nouveau mot de passe:</label>
                                                    <div class="controls">
                                                         <input type="text" v-model="formData.mot_passe"  placeholder="Saisir le mot de passe" class="span12"/>
                                    </div>

                                                </div>
              </td>
                
                    

            </tr>
             <tr>
    
   <td colspan="2">
     <div class="control-group">
                                         <label class="control-label">Confirmer nouveau mot de passe:</label>
                                         <div class="controls">
                                              <input type="text" v-model="formData.mot_passe"  placeholder="Saisir mot de passe" class="span12"/>
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
                        <!-- <a -->
                          <!-- class="btn btn-primary" -->
                          <!-- @click.prevent="ajouterTitreLocal" -->
                        <!-- >Valider</a> -->
                        <a
                          @click.prevent="afficherModalListePersonnel()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
      <notifications/>
    </div>


































</template>
<script>

    import {mapGetters, mapActions} from 'vuex'
    // import {admin,dcf} from "../../../Repositories/Auth"
    export default {

        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],
                formData : {
                    matricule: "",
                    nom: "",
                    prenom: "",
                    sexe: "",
                    numero_cni: "",
                    numero_passeport: "",
                    date_naissance: "",
                    nom_pere: "",
                    nom_mere: "",
                    date_debut_contrat:"",
                    marche_id:"",
                    type_salarie_id:"",
                    type_contrat_id:"",
                    niveau_etude_id:"",
                    acteur_depense_id:"",
                    exercice_budgetaire_id:"",
                    unite_administrative_id:"",
                    salaires:"",
                    type_acte_id:"",
                    grade_id:"",
                    fonction_id:"",
                    plan_budgetaire_id:'',
                    uniteZone_id:"",
                    situation_matrimonial:"",
                    service_id:"",
                    reference_acte:""
                },

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            this.allActeurDepense();
            //    this.getActeur()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

// methode pour maper notre guetter
            ...mapGetters('personnelUA', ["sauvegardePhoto","dossierPersonnels","situation_matrimonial",'acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","classificationGradeFonction",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite"]),
            ...mapGetters("uniteadministrative", ["fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", [
      "services",
      "normeImmo"
      
      
    ]),
 ...mapGetters("bienService", ["getActeEffetFinancierPersonnaliserContrat","selectionner_candidats","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 
 AffichePhoto() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sauvegardePhoto.find(qtreel => qtreel.user_id == id);

      if (qtereel) {
        return qtereel.fichier;
      }
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/1_!1595119277.jpg "
        }
      };
    },
    
 
                afficheidUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.id

},
afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

},
afficheRoleUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.user_role.role.libelle

},
afficheMotPasseUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.password

},
afficheMatriculeUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.matricule

},
afficheEmailUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.email

},
 recupererCandidatSel() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.find(qtreel => qtreel.marche_id == id);

    
        }
      };
    },

    uniteAdmin() {
      


        if (!this.admin || !this.dcf){
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
  afficheIdActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.reference_act == id);

      if (qtereel) {
        return qtereel.candidat_personnel_id;
      }
      return "Non renseigné"
        }
      };
    },
     afficheMontantActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.reference_act == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return "Non renseigné"
        }
      };
    },
       afficheSalairePersonnel() {
      const val = parseFloat(this.afficheMontantActe(this.formData.reference_acte)) / this.NombreMois;
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
     NombreMois() {
      const val = parseFloat(this.afficheDure(this.formData.reference_acte)) * parseFloat(0.032854884084021);
      
       if (val) {
        return Math.round(val);
      }
      
      return 0
    },
     afficheDure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.reference_act == id);

      if (qtereel) {
        return qtereel.duree;
      }
      return "Non renseigné"
        }
      };
    },
afficheIdCandidat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.selectionner_candidats.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.candidat_selection_id;
      }
      return "Non renseigné"
        }
      };
    },
    afficheNomCandidat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.dossierPersonnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_candidat;
      }
      return "Non renseigné"
        }
      };
    },
    affichePreNomCandidat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.dossierPersonnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prenom_candidat;
      }
      return "Non renseigné"
        }
      };
    },
 recupererMarcheUA() {
      return id => {
        if (id != null && id != "") {
           return this.marches.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_marche_id == 4);

     
        }
      };

      
    },

recupererReferenceActe() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.filter(qtreel => qtreel.marche_id == id && qtreel.activationD != 1);
        }
      };

      
    },


 verrouilleUniteZone() {
      return this.formData.unite_administrative_id == "";
    },
    verrouilleService() {
      return this.formData.uniteZone_id == "";
    },
    verrouilleFonction() {
      return this.formData.service_id == "";
    },

nombreDeFonction() {
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.fonction_id == this.formData.fonction_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.norme), 0).toFixed(0);
        }
      };
    },
    montantPourEtreEquipe() {
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.fonction_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total), 0).toFixed(0);
        }
      };
    },
    
 afficheUniteZone() {
      return id => {
        if (id != null && id != "") {
          return this.uniteZones.filter(element => element.id_unite_administrative == id);
        }
      };
    },
 afficheService() {
      return id => {
        if (id != null && id != "") {
          return this.servicesua.filter(element => element.s_ua_id == id);
        }
      };
    },
    afficheServicelibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficheFonction() {
      return id => {
        if (id != null && id != "") {
          return this.fonctionsua.filter(element => element.service_id == id);
        }
      };
    },

exoEnCours() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    afficheIdExerciceEnCours() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.annee == this.exoEnCours);

      if (norme) {
        return norme.id;
      }
      return 0
    },
    afficheBudgetPersonnel() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.ua_id == id);
        }
      };
    },
    
        

        afficheGrade() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.classificationGradeFonction.find(qtreel => qtreel.fonction_id == id);

      if (qtereel) {
        return qtereel.grade_id;
      }
      return 0
        }
      };
    },
          afficheLibelleFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
        afficheLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grades.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),
            ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
           
           afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
             afficherModalListePersonnel(){
                this.$router.push({ name: 'Acteur' })
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
              var nouveauObjet={
                ...this.formData,
                exercice_budgetaire_id:this.afficheIdExerciceEnCours,
                grade_id:this.afficheGrade(this.formData.fonction_id),
                normeequipement:this.nombreDeFonction(this.formData.fonction_id),
                historiquenormequipement:this.nombreDeFonction(this.formData.fonction_id),
                montantequipement:this.montantPourEtreEquipe(this.formData.fonction_id),
                  nom : this.afficheNomCandidat(this.afficheIdCandidat(this.afficheIdActeurDepense(this.formData.reference_acte))),
                  prenom :this.affichePreNomCandidat(this.afficheIdCandidat(this.afficheIdActeurDepense(this.formData.reference_acte))),
                  
                  salaires:this.afficheSalairePersonnel
               
              }
               let modifierActive=this.acteEffetFinanciers.find(marche=>marche.candidat_personnel_id == this.afficheIdActeurDepense(this.formData.reference_acte))
    modifierActive.activationD = 1
    
   
    this.modifierActeEffetFinancier(modifierActive)
                console.log(this.formData)
                this.ajouterActeur(nouveauObjet)
                this.getActeur()
                this.formData = {
                    code: "",
                    libelle: ""
                }
                this.$router.push({ name: 'Acteur' })
            },
// afficher
            suprimer(id){
                this.supprimerActeurs(id)
                this.allActeurDepense()
                this.getActeur()
                this.getNbrActeurAcrediteTaux();
            },
            afficherModalModifierTitre(index){

                this.$('#modifierModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editTitre = this.titres[index];

            },


        }
    };
</script>

verrouilleService