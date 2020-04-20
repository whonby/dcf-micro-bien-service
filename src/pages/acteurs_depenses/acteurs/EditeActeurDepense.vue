

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
              <h5>Ajouter Immobilisation</h5>
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
                        <a data-toggle="tab" href="#tab1">INFORMATION PERSONNEL</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">DESCRIPTIF</a>
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
                                                    <label class="control-label">Situation matrimoniale</label>
                                                    <div class="controls">
                                                        <select v-model="editPersonnel.situation_matrimonial" >
                                                           
                                                           
                                                            <option v-for="situation in situation_matrimonial" :key="situation.id" :value="situation.id">{{situation.libelle}}</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                </td>
                <td>
 
                                                    <label class="control-label">Matricule:</label>
                                                    <div class="controls">
                                                        <input type="text"  v-model="editPersonnel.matricule"  placeholder="Saisir le matricule" />
                                                    </div>
                                                
                </td>
                 <td>
                    <div class="control-group">
                                                    <label class="control-label">Nom:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="editPersonnel.nom"  placeholder="Saisir le nom" />
                                                    </div>
                                                </div>
                </td>
                 <td>
                     <div class="control-group">
                                                    <label class="control-label">Prenom:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="editPersonnel.prenom"  placeholder="Saisir le prenom" />
                                                    </div>
                                                </div>
                </td>
                 <td>
                     <div class="control-group">
                                                    <label class="control-label">Sexe:</label>
                                                    <div class="controls">
                                                        <select v-model="editPersonnel.sexe" >
                                                            <option></option>
                                                            <option value="H">Homme</option>
                                                            <option value="F">Femme</option>
                                                        </select>
                                                    </div>
                                                </div>
                </td>
                 
            </tr>
            <tr>
                <td>
                    <div class="control-group">
                                                    <label class="control-label">Numero CNI:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="editPersonnel.numero_cni"  placeholder="Saisir le numero cni" />
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Numero passeport:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="editPersonnel.numero_passeport"  placeholder="Saisir le numero passeport" />
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Date de naissance:</label>
                                                    <div class="controls">
                                                        <input type="date" v-model="editPersonnel.date_naissance"  placeholder="Saisir la date de naissance" />
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Nom du pere:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="editPersonnel.nom_pere"  placeholder="Saisir le nom du pere" />
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Nom de la mere:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="editPersonnel.nom_mere"  placeholder="Saisir le nom de la mere" />
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
                                                        <!-- <select v-model="editPersonnel.exercice_budgetaire_id">
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
                                                        <select v-model="editPersonnel.unite_administrative_id">
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
                                                        <select v-model="editPersonnel.uniteZone_id" :disabled="verrouilleUniteZone">
                                                            <option></option>
                                                            <option v-for="item in afficheUniteZone(editPersonnel.unite_administrative_id)" :key="item.id" :value="item.id">
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
                                                        <select v-model="editPersonnel.service_id" :disabled="verrouilleService">
                                                            <option></option>
                                                            <option v-for="item in afficheService(editPersonnel.unite_administrative_id)" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Fonctions</label>
                                                    <div class="controls">
                                                        <select v-model="editPersonnel.fonction_id" :disabled="verrouilleFonction">
                                                            <option></option>
                                                            <option v-for="item in afficheFonction(editPersonnel.service_id)" :key="item.id" :value="item.fonction_id">
                                                                {{afficheLibelleFonction(item.fonction_id)}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
            </tr>
            <tr>
                <td>
                     
                                                <div class="control-group">
                                                    <label class="control-label">Grades</label>
                                                    <div class="controls">
                                                        <!-- <select v-model="editPersonnel.grade_id">
                                                            <option></option>
                                                            <option v-for="item in grades" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select> -->
                                                        
                                                         <input type="text" :value="afficheLibelle(afficheGrade(editPersonnel.fonction_id))" readonly/>
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Reference acte:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="editPersonnel.code"  placeholder="Saisir la reference" />
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Type acte de personnel</label>
                                                    <div class="controls">
                                                        <select v-model="editPersonnel.type_acte_id">
                                                            <option></option>
                                                            <option v-for="item in type_acte_personnels" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Type contrat</label>
                                                    <div class="controls">
                                                        <select v-model="editPersonnel.type_contrat_id">
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
                                                        <input type="date" v-model="editPersonnel.date_debut_contrat"  placeholder="" />
                                                    </div>
                                                </div>
                </td>
   
            </tr>
            <tr>
              <td colspan="2">
                <div class="control-group">
                                                    <label class="control-label">Ligne budgetaires:</label>
                                                    <div class="controls">

                                                        <select v-model="editPersonnel.plan_budgetaire_id" class="span18">
                                                            <option v-for="item in afficheBudgetPersonnel(editPersonnel.unite_administrative_id)" :key="item.id" :value="item.economique_id">
                                                               {{item.afficheEconomique.code}} - {{item.afficheEconomique.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
              </td>
                
                                 <td>
                     <div class="control-group">
                                                    <label class="control-label">Type salarie</label>
                                                    <div class="controls">
                                                        <select v-model="editPersonnel.type_salarie_id">
                                                            <option></option>
                                                            <option v-for="item in type_salaries" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Salaire:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="editPersonnel.salaires"  placeholder="Saisir le salaire" />
                                                    </div>
                                                </div>
                </td>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Type niveau etude</label>
                                                    <div class="controls">
                                                        <select v-model="editPersonnel.niveau_etude_id">
                                                            <option></option>
                                                            <option v-for="item in niveau_etudes" :key="item.id" :value="item.id">
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
                        >Valider</a>
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
                created() {
    this.editImmobilisation = this.immobilisations.find(
      immo => immo.id == this.$route.params.id
    );

    //console.log(this.$router);
  },
                liste:[],
                 editPersonnel : {
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
                    code:"",
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
            this.acteur_id=this.$route.params.id;
            this.acteurDetail=this.personnaliseActeurDepense.find(acteur=>acteur.id===this.acteur_id)
            console.log(this.acteurDetail)
            if(this.acteurDetail===undefined){
                this.acteurDetail=this.personnaliseActeurFinContrat.find(acteur=>acteur.id===this.acteur_id)
            }
            console.log(this.acteurDetail)
            this.formData= {
                    matricule: this.acteurDetail.matricule,
                    nom: this.acteurDetail.nom,
                    prenom: this.acteurDetail.prenom,
                    sexe: this.acteurDetail.sexe,
                    numero_cni: this.acteurDetail.numero_cni,
                    numero_passeport: this.acteurDetail.numero_passeport,
                    date_naissance: this.acteurDetail.date_naissance,
                    nom_pere: this.acteurDetail.nom_pere,
                    nom_mere: this.acteurDetail.nom_mere,
                    date_debut_contrat:this.acteurDetail.date_debut_contrat,
                    code:this.acteurDetail.code_acte_personnel,
                    type_salarie_id:this.acteurDetail.type_salarie.id,
                    type_contrat_id:this.acteurDetail.type_contrat.id,
                    niveau_etude_id:this.acteurDetail.niveau_etude.id,
                    acteur_depense_id:this.acteurDetail.id,
                    exercice_budgetaire_id:this.acteurDetail.exercice_budgetaire_id,
                    unite_administrative_id:this.acteurDetail.unite_administrative_id,
                    salaires_id:this.acteurDetail.salaireActeur.id,
                    salaires:this.acteurDetail.salaireActeur.montant,
                    type_acte_id:this.acteurDetail.fonction.id,
                    grade_id:this.acteurDetail.grade.id,
                    fonction_id:this.acteurDetail.fonction.id,
                    plan_budgetaire_id:this.acteurDetail.plan_budgetaire_id,
                   acte_personnel_id:this.acteurDetail.acte_personnel_id
            }
        },
        computed: {
// methode pour maper notre guetter
            ...mapGetters('personnelUA', ['situation_matrimonial','acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions","grades",
                "niveau_etudes","nbr_acteur_actredite_taux","detail_acteurs","salaire_actuel_acteur","all_salaires_acteurs","acte_personnels",
                "load_act_personnel_acteur","conge_acteur_depense","temp_moyen_fin_activite_interruption","delais_mise_disposition_act",
                "jour_conge_disponible_acteur","personnaliseActeurDepense","tous_salaire_actuel_acteur","personnaliseActeurFinContrat"]),
            ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),

        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense","modificationActeur"]),
            afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            // fonction pour vider l'input
            ajouterTitreLocal () {
                console.log(this.formData)
                this.modificationActeur(this.formData)
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

