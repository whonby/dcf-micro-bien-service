
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
 
                                                    <label class="control-label">Matricule:</label>
                                                    <div class="controls">
                                                        <input type="text"  v-model="detail.matricule"  placeholder="Saisir le matricule" />
                                                    </div>
                                                
                </td>
                      
                 <td>
                    <div class="control-group">
                                                    <label class="control-label">Nom:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="detail.nom"  placeholder="Saisir le nom" />
                                                    </div>
                                                </div>
                </td>
                 <td>
                     <div class="control-group">
                                                    <label class="control-label">Prenom:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="detail.prenom"  placeholder="Saisir le prenom" />
                                                    </div>
                                                </div>
                </td>
                 <td>
                     <div class="control-group">
                                                    <label class="control-label">Sexe:</label>
                                                    <div class="controls">
                                                        <select v-model="detail.sexe" >
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
                                                        <input type="date" v-model="detail.date_naissance"  placeholder="Saisir la date de naissance" />
                                                    </div>
                                                </div>
                </td>
                
            </tr>
            <tr>
                
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Numero passeport:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="detail.numero_passeport"  placeholder="Saisir le numero passeport" />
                                                    </div>
                                                </div>
                </td>
                <td>
                    <div class="control-group">
                                                    <label class="control-label">Numero CNI:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="detail.numero_cni"  placeholder="Saisir le numero cni" />
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Nom du pere:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="detail.nom_pere"  placeholder="Saisir le nom du pere" />
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Nom de la mere:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="detail.nom_mere"  placeholder="Saisir le nom de la mere" />
                                                    </div>
                                                </div>
                </td>
                          <td>
                     <div class="control-group">
                                                    <label class="control-label">Situation matrimoniale</label>
                                                    <div class="controls">
                                                        <select v-model="detail.situation_matrimonial" >
                                                           
                                                           
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
                                                    <label class="control-label">Exercice budgetaire:</label>
                                                    <div class="controls">
                                                        <!-- <select v-model="detail.exercice_budgetaire_id">
                                                            <option v-for="item in exercices_budgetaires" :key="item.id" :value="item.id">
                                                                {{item.annee}}
                                                            </option>

                                                        </select> -->
                                                        
                                                     
                                                        <input type="text" :value="exoEnCours" readonly/>
                                                   
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">L'unite administrative:</label>
                                                    <div class="controls">
                                                        <select v-model="detail.unite_administrative_id">
                                                            <option></option>
                                                            <option v-for="item in uniteAdministratives" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Unite de Zone</label>
                                                    <div class="controls">
                                                        <select v-model="detail.uniteZone_id" :disabled="verrouilleUniteZone">
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
                                                        <select v-model="detail.service_id" :disabled="verrouilleService">
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
                                                        <select v-model="detail.fonction_id" :disabled="verrouilleFonction">
                                                            <option></option>
                                                            <option v-for="item in afficheFonction(detail.service_id)" :key="item.id" :value="item.fonction_id">
                                                                {{afficheLibelleFonction(item.fonction_id)}}
                                                            </option>

                                                        </select>
                                                        <input type="hidden" :value="nombreDeFonction(detail.fonction_id)" readonly/>
                                                    </div>
                                                </div>
                </td>
            </tr>
            <tr>
                <td>
                     
                                                <div class="control-group">
                                                    <label class="control-label">Grades</label>
                                                    <div class="controls">
                                                        <!-- <select v-model="detail.grade_id">
                                                            <option></option>
                                                            <option v-for="item in grades" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select> -->
                                                        
                                                         <input type="text" :value="afficheLibelle(afficheGrade(detail.fonction_id))" readonly/>
                                                    </div>
                                                </div>
                </td>
              
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Type contrat</label>
                                                    <div class="controls">
                                                        <select v-model="detail.type_contrat_id">
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
                                                        <input type="date" v-model="detail.date_debut_contrat"  placeholder="" />
                                                    </div>
                                                </div>
                </td>
    <td>
                     <div class="control-group">
                                                    <label class="control-label">Type niveau etude</label>
                                                    <div class="controls">
                                                        <select v-model="detail.niveau_etude_id">
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
                                                        <select v-model="detail.type_salarie_id">
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

                                                        <select v-model="detail.plan_budgetaire_id" class="span">
                                                            <option v-for="item in afficheBudgetPersonnel(detail.unite_administrative_id)" :key="item.id" :value="item.economique_id">
                                                               {{item.afficheEconomique.code}} - {{item.afficheEconomique.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
              </td>
                
                    
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Salaire:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="detail.salaires"  placeholder="Saisir le salaire" />
                                                    </div>
                                                </div>
                </td>
                  <td>
                     <div class="control-group">
                                                    <label class="control-label">Type acte de personnel</label>
                                                    <div class="controls">
                                                        <select v-model="detail.type_acte_id">
                                                            <option></option>
                                                            <option v-for="item in type_acte_personnels" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
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
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ["situation_matrimonial",'acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","classificationGradeFonction","personnaliseActeurDepense","affichePersonnelRecuActeNormination",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite"]),
            ...mapGetters("uniteadministrative", ["fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", [
      "services",
      "normeImmo"
      
      
    ]),
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

     

    

          watch: {
    '$route': 'getDetail'
  },
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux",
            "allActeurDepense", "modificationActeur"]),

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
                    this.detail.code_acte_personnel= objetPersonnel.code_acte_personnel,
                   this.detail.type_salarie_id= objetPersonnel.type_salarie.id,
                   this.detail.type_contrat_id=objetPersonnel.type_contrat.id,
                   this.detail.niveau_etude_id=objetPersonnel.niveau_etude.id,
                    this.detail.acteur_depense_id=objetPersonnel.acteur_depense_id.id,
                   this.detail.exercice_budgetaire_id=objetPersonnel.exercice_budgetaire_id,
                   this.detail.unite_administrative_id=objetPersonnel.unite_administrative_id,
                   this.detail.salaires_id=objetPersonnel.salaireActeur.id,
                    this.detail.salaires=objetPersonnel.salaireActeur.montant,
                   this.detail.type_acte_id=objetPersonnel.fonction.id,
                   this.detail.grade_id=this.grade.id,
                   this.detail.fonction_id=objetPersonnel.fonction.id,
                   this.detail.plan_budgetaire_id=objetPersonnel.plan_budgetaire_id,
                   this.detail.acte_personnel_id=objetPersonnel.acte_personnel_id
    
    },
             afficherModalListePersonnel(){
                this.$router.push({ name: 'Acteur' })
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
              
                 this.modificationActeur(this.detail)
                this.getActeur()
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

