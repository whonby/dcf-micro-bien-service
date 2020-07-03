
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
              <h5>Modifier personnel</h5>
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
                        <a data-toggle="tab" href="#tab1">Identification</a>
                      </li>
                       
                      <li>
                        <a data-toggle="tab" href="#tab2">Affectation</a>
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
                                                    <label class="control-label">Exercice budgetaire:</label>
                                                    <div class="controls">
                                                       
                                                        
                                                     
                                                        <input type="text" :value="exoEnCours" readonly class="span12"/>
                                                   
                                                    </div>
                                                </div>
                </td>
                <td colspan="2">
                     <div class="control-group">
                                                    <label class="control-label">L'unite administrative:</label>
                                                    <div class="controls">
                                                       <select v-model="detail.unite_administrative_id" class="span12">
                                                            <option></option>
                                                            <option v-for="item in uniteAdmin" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
                <td colspan="2">
                     <div class="control-group">
                                                    <label class="control-label">Marché</label>
                                                    <div class="controls">
                                                        <select v-model="formData.marche_id" class="span12">
                                                            <option></option>
                                                            <option v-for="item in recupererMarcheUA(detail.unite_administrative_id)" :key="item.id" :value="item.id">
                                                                {{item.objet}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
                
                      
                
               
              
                
            </tr>
            <tr>
               <td>
                     <div class="control-group">
                                                    <label class="control-label">Reference Acte</label>
                                                    <div class="controls">
                                                         <!-- <select v-model="detail.reference_acte"  class="span12">
                                                            <option></option>
                                                            <option v-for="item in recupererReferenceActe(formData.marche_id)" :key="item.id" :value="item.reference_act">
                                                                {{item.reference_act}}
                                                            </option>

                                                        </select> -->
                                                         <input type="text"  v-model="detail.reference_acte"  placeholder="Saisir le matricule" class="span12"/>
                                                    </div>
                                                </div>
                                                
                </td>
                <td>
 
                                                    <label class="control-label">Matricule:</label>
                                                     <div class="controls">
                                                        <input type="text"  v-model="detail.matricule"  placeholder="Saisir le matricule" class="span12"/>
                                                    </div>
                                                
                </td>
               <td>
                    <div class="control-group">
                                                    <label class="control-label">Nom:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="detail.nom"  placeholder="Saisir le nom" class="span12" />
                                                    </div>
                                                </div>
                </td>
                <td colspan="2">
                     <div class="control-group">
                                                    <label class="control-label">Prenom:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="detail.prenom" class="span12"  placeholder="Saisir le prenom" />
                                                    </div>
                                                </div>
                </td>
                
               
            </tr>
            <tr>
               <td>
                     <div class="control-group">
                                                    <label class="control-label">Sexe:</label>
                                                    <div class="controls">
                                                         <select v-model="detail.sexe" class="span12">
                                                            <option></option>
                                                            <option value="H">Homme</option>
                                                            <option value="F">Femme</option>
                                                        </select>
                                                    </div>
                                                </div>
                </td>
                   <td>
                     <div class="control-group">
                                                    <label class="control-label">Date de naissance:</label>
                                                      <div class="controls">
                                                        <input type="date" v-model="detail.date_naissance" class="span12" placeholder="Saisir la date de naissance" />
                                                    </div>
                                                </div>
                </td>
              <td>
                     <div class="control-group">
                                                    <label class="control-label">Numero passeport:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="detail.numero_passeport" class="span12" placeholder="Saisir le numero passeport" />
                                                    </div>
                                                </div>
                </td>
                <td>
                    <div class="control-group">
                                                    <label class="control-label">Numero CNI:</label>
                                                   <div class="controls">
                                                        <input type="text" v-model="detail.numero_cni" class="span12" placeholder="Saisir le numero cni" />
                                                    </div>
                                                </div>
                </td>
               
                
                        
            </tr>
            <tr>
               <td colspan="2">
                     <div class="control-group">
                                                    <label class="control-label">Nom du pere:</label>
                                                     <div class="controls">
                                                        <input type="text" v-model="detail.nom_pere" class="span12" placeholder="Saisir le nom du pere" />
                                                    </div>
                                                </div>
                </td>
               <td>
                     <div class="control-group">
                                                    <label class="control-label">Nom de la mere:</label>
                                                     <div class="controls">
                                                        <input type="text" v-model="detail.nom_mere" class="span12" placeholder="Saisir le nom de la mere" />
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Situation matrimoniale</label>
                                                    <div class="controls">
                                                        <select v-model="detail.situation_matrimonial" class="span12" >
                                                           
                                                           
                                                            <option v-for="situation in situation_matrimonial" :key="situation.id" :value="situation.id">{{situation.libelle}}</option>
                                                           
                                                        </select>
                                                    </div>
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
                                                    <label class="control-label">Unite de Zone</label>
                                                    <div class="controls">
                                                   <select v-model="detail.uniteZone_id" :disabled="verrouilleUniteZone" class="span12">
                                                            <option></option>
                                                            <option v-for="item in afficheUniteZone(detail.unite_administrative_id)" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
               
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Service</label>
                                                    <div class="controls">
                                                         <select v-model="detail.service_id" :disabled="verrouilleService" class="span12">
                                                            <option></option>
                                                            <option v-for="item in afficheService(detail.unite_administrative_id)" :key="item.id" :value="item.id">
                                                                {{afficheServicelibelle(item.serviceua_id)}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Fonctions</label>
                                                    <div class="controls">
                                                        <select v-model="detail.fonction_id" :disabled="verrouilleFonction" class="span12">
                                                            <option></option>
                                                            <option v-for="item in afficheFonction(detail.service_id)" :key="item.id" :value="item.fonction_id">
                                                                {{afficheLibelleFonction(item.fonction_id)}}
                                                            </option>

                                                        </select>
                                                        <input type="hidden" :value="nombreDeFonction(detail.fonction_id)" readonly/>
                                                    </div>
                                                </div>
                </td>
                <td>
                     
                                                <div class="control-group">
                                                    <label class="control-label">Grades</label>
                                                    <div class="controls">
                                                       
                                                        
                                                         <input type="text" :value="afficheLibelle(afficheGrade(detail.fonction_id))" readonly class="span12"/>
                                                    </div>
                                                </div>
                </td>
            </tr>
            <tr>
                
              
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Type contrat</label>
                                                    <div class="controls">
                                                         <select v-model="detail.type_contrat_id" class="span12">
                                                            <option></option>
                                                            <option v-for="item in type_contrats" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
                <td>
                      <div class="control-group">
                                                    <label class="control-label">Date debut contrat:</label>
                                                    <div class="controls">
                                                        <input type="date" class="span12" v-model="detail.date_debut_contrat"  placeholder="" />
                                                    </div>
                                                </div>
                </td>
    <td>
                     <div class="control-group">
                                                    <label class="control-label">Type niveau etude</label>
                                                    <div class="controls">
                                                        <select v-model="detail.niveau_etude_id" class="span12">
                                                            <option></option>
                                                            <option v-for="item in niveau_etudes" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
                             <td>
                     <div class="control-group">
                                                    <label class="control-label">Type salarie</label>
                                                    <div class="controls">
                                                        <select v-model="detail.type_salarie_id" class="span12">
                                                            <option></option>
                                                            <option v-for="item in type_salaries" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                </td>
            </tr>
            <tr>
               
              <td colspan="2">
                <div class="control-group">
                                                    <label class="control-label">Ligne budgetaires:</label>
                                                    <div class="controls">

                                                        <select v-model="detail.plan_budgetaire_id" class="span12">
                                                            <option v-for="item in afficheBudgetPersonnel(detail.unite_administrative_id)" :key="item.id" :value="item.economique_id">
                                                               {{item.afficheEconomique.code}} - {{item.afficheEconomique.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
              </td>
                
                    
                <td colspan="2">
                     <div class="control-group">
                                                    <label class="control-label">Salaire</label>
                                                   <div class="controls">
                                                        <input type="number" class="span12" :value="detail.salaireActeur.montant"  placeholder="Saisir le salaire" />
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
                          class="btn btn-primary"
                          @click.prevent="ajouterTitreLocal"
                        >Modifier</a>
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
    import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth"
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
                
                detail : {
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
                    service_id:""
                },

                editTitre: {
                    code: "",
                    libelle: ""
                },
                formData:{
                  marche_id:""
                }

            };
        },

        created() {
          // this.getDetail();
            this.detail=this.personnaliseActeurDepense.find(item=>item.id==this.$route.params.id)
            console.log( this.detail)
            //    this.getActeur()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
           admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

// methode pour maper notre guetter
            ...mapGetters('personnelUA', ["salairesActeur","situation_matrimonial",'acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","classificationGradeFonction","personnaliseActeurDepense","affichePersonnelRecuActeNormination",
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
  afficheSalaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.salairesActeur.find(qtreel => qtreel.acte_personnel_id == id);

      if (qtereel) {
        return qtereel.montant;
      }
      return 0
        }
      };
    },




 verrouilleUniteZone() {
      return this.detail.unite_administrative_id == "";
    },
    verrouilleService() {
      return this.detail.uniteZone_id == "";
    },
    verrouilleFonction() {
      return this.detail.service_id == "";
    },

nombreDeFonction() {
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.fonction_id == this.detail.fonction_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.norme), 0).toFixed(0);
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
             watch: {
    '$route': 'getDetail'
  },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux",
            "allActeurDepense", "modificationActeur","modifierSalaire"]),

            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },

                     getDetail(){
      var objetPersonnel = this.personnaliseActeurDepense.find(
        varPerso => varPerso.id == this.$route.params.id
    )
        this.detail.matricule = objetPersonnel.matricule
           this.detail.nom=objetPersonnel.nom,
               this.detail.prenom = objetPersonnel.prenom,
                   this.detail.sexe=objetPersonnel.sexe,
                    this.detail.numero_cni= objetPersonnel.numero_cni,
                    this. detail.numero_passeport=objetPersonnel.numero_passeport,
                    this.detail.date_naissance=objetPersonnel.date_naissance,
                   this.detail.nom_pere=objetPersonnel.nom_pere,
                   this.detail.nom_mere=objetPersonnel.nom_mere,
                   this.detail.date_debut_contrat=objetPersonnel.date_debut_contrat,
                    // this.detail.code_acte_personnel= objetPersonnel.code_acte_personnel,
                   this.detail.type_salarie_id= objetPersonnel.type_salarie_id,
                   this.detail.type_contrat_id=objetPersonnel.type_contrat_id,
                   this.detail.niveau_etude_id=objetPersonnel.niveau_etude.id,
                    this.detail.acteur_depense_id=objetPersonnel.acteur_depense_id.id,
                   this.detail.exercice_budgetaire_id=objetPersonnel.exercice_budgetaire_id,
                   this.detail.unite_administrative_id=objetPersonnel.unite_administrative_id,
                  //  this.detail.salaires_id=objetPersonnel.salaireActeur.id,
                   this.detail.salaires=objetPersonnel.salaireActeur.montant,
                   this.detail.type_acte_personnel=objetPersonnel.type_acte_personnel,
                   this.detail.grade_id=this.grade_id,
                   this.detail.fonction_id=objetPersonnel.fonction_id,
                   this.detail.plan_budgetaire_id=objetPersonnel.plan_budgetaire_id,
                   this.detail.acte_personnel_id=objetPersonnel.acte_personnel_id
    
    },
             afficherModalListePersonnel(){
                this.$router.push({ name: 'Acteur' })
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
              var nouveauObjet = {
                 ...this.detail,
                 grade_id:this.afficheGrade(this.detail.fonction_id),
                
              }
            let modSalaire=this.salairesActeur.find(marche=>marche.acte_personnel_id == this.detail.acte_personnel_id)
    modSalaire.montant=this.detail.salaireActeur.montant
    modSalaire.date=this.detail.date_debut_contrat
   
    this.modifierSalaire(modSalaire)
                 this.modificationActeur(nouveauObjet)
                this.getActeur()
                this.$router.push({ name: 'Acteur' })
            },
// affichercode
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

