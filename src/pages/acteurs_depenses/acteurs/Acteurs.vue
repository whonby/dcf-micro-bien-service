<template>
    <div id="">
        <notifications />
        <div class="quick-actions_homepage span12"  >
            <ul class="quick-actions" style="margin: 0px !important;">
                <!-- <li class="bg_lb">
                    <a href="#">
                        <i class="icon-dashboard"></i> <span class="label label-important">{{totalActeurDepense}}</span> TOTAL DU PERSONNEL
                    </a>
                </li> -->
                <!-- <li class="bg_lg">
                    <a href="#"> <i class="icon-signal"></i> <span class="label label-important">{{totalActeurEnctivite}}</span> TOTAL ACTEUR DEPENSE EN ACTIVITE 
                    </a>
                </li> -->
                <li class="bg_ly">
                    <a href="#">
                        <i class="icon-inbox"></i><span class="label label-important">{{totalActeurAccredite}}</span> Total acteur accredité
                    </a>
                </li>
                <li class="bg_lb"> <a href="#"> <i class="icon-th"></i> <span class="label label-important">{{totalActeurNonAccredite}}</span> Total acteur non accredité</a> </li>
                <li class="bg_ls"> <a href="#"> <i class="icon-fullscreen"></i> <span class="label label-important" v-if="tauxActeurAccredite!='NaN'">{{tauxActeurAccredite || '0' }} %</span>
                    Taux acteurs acredité
                </a> </li>
            </ul>
        </div>

        <div class="container-fluid" style="heigth:100%">

            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab10">Listes du personnel    <span class="badge badge-inverse">{{totalActeurDepense}}</span></a></li>
                                <li class=""><a data-toggle="tab" href="#tab19">Listes des acteurs de depenses   <span class="badge badge-success">{{afficheNombrePersonnelRecuActeNormination}}</span></a> </li>
                                <li class=""><a data-toggle="tab" href="#tab30">Acteurs non actif</a></li>
                                 <!-- <li class=""><a data-toggle="tab" href="#tab30">Acteurs non actif</a></li> -->
                                  
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                
                         
                         
                         
                         
                            <div id="tab10" class="tab-pane active">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Listes personnel</h5>
                                        <div align="right">
                                            Search: <input type="text" v-model="search">
                                        </div>
                                    </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <!-- <th>Situation matrimoniale </th> -->
                                                <th>Matricule </th>
                                                <th>Nom</th>
                                                <th>Prenom</th>
                                                <th>Date de naissance</th>
                                                <th >Unite administrative</th>
                                                <th >Unite Zone</th>
                                                <th >Service</th>
                                                <th >Fonction Administrative</th>
                                                <th style="width:10px">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="item in acteurActivite" :key="item.id">
                                                  <!-- <td @dblclick="afficherModalModifierTitre(item.id)">{{item.situation_matrimonial || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.matricule || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.nom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.prenom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{formaterDate(item.date_naissance) }}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.uniteAdmin.libelle || 'Non renseigné'}}</td> -->
                                                 <!-- <td >{{item.situation_matrimonial || 'Non renseigné'}}</td> -->
                                                <td @dblclick="afficherModalModifierTitre(item.id)" >{{item.matricule || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)" >{{item.nom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.prenom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{formaterDate(item.date_naissance) }}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.uniteAdmin.libelle || 'Non renseigné'}}</td>
                                                 <td @dblclick="afficherModalModifierTitre(item.id)">{{afficheUniteZone(item.uniteZone_id) || 'Non renseigné'}}</td>
                                                  <td @dblclick="afficherModalModifierTitre(item.id)">{{afficheService(item.service_id)|| 'Non renseigné'}}</td>
                                                   <td @dblclick="afficherModalModifierTitre(item.id)">{{item.fonction.libelle || 'Non renseigné'}}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link :to="{ name: 'ActeurDetail', params: { id: item.id }}" class="btn btn-default ">
                                                            <span class=""><i class="icon-folder-open"></i></span>
                                                        </router-link>

                                                        <button @click.prevent="suprimer(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                                       <div id="tab19" class="tab-pane">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Acteur de depense en activité</h5>
                                        <!-- <div align="right">
                                            Search: <input type="text" v-model="search">
                                        </div> -->
                                    </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                              
                                                <th>Matricule </th>
                                                <th>Nom</th>
                                                <th>Prenoms</th>
                                                <th>Unite administrative</th>
                                                <th>Fonction budgetaire</th>
                                                <th>Date debut normination</th>
                                                <th>Date fin normination</th>
                                                <!-- <th>Action</th> -->
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="item in affichePersonnelRecuActeNormination" :key="item.id">
                                                 
                                                <td >{{afficheMatriculePersonnel(item.acteur_depense_id) || 'Non renseigné'}}</td>
                                                <td >{{afficheNomPersonnel(item.acteur_depense_id) || 'Non renseigné'}}</td>
                                                <td >{{affichePrenomsPersonnel(item.acteur_depense_id) || 'Non renseigné'}}</td>
                                                <td >{{afficheUniteAdministrative(item.unite_administrative_id) || 'Non renseigné'}}</td>
                                                 <td >{{afficheFonctionBudgetaire(item.fonction_budgetaire_id) || 'Non renseigné'}}</td>
                                                <td >{{formaterDate(item.date_debut_fonct_budget) }}</td>
                                                <td >{{formaterDate(item.date_fin_fonct_budget) }}</td>
                                               
                                                <td>
                                                    <div class="btn-group">
                                                        <!-- <router-link :to="{ name: 'ActeurDetail', params: { id: item.id }}" class="btn btn-default ">
                                                            <span class=""><i class="icon-folder-open"></i></span>
                                                        </router-link> -->

                                                        <button @click.prevent="suprimer(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button> 

                                                    </div>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div id="tab30" class="tab-pane">
                                <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Acteur de depense non actif</h5> 
                                        <div align="right">
                                            Search: <input type="text" v-model="search1">
                                        </div>
                                    </div>
                                    <div class="widget-content nopadding">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>Matricule </th>
                                                <th>Nom</th>
                                                <th>Prenom</th>
                                                <th>Date de naissance</th>
                                                <th>Unite administrative</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="odd gradeX" v-for="item in acteurNonActivite" :key="item.id">
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.matricule || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.nom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.prenom || 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{formaterDate(item.date_naissance) }}</td>
                                                <td @dblclick="afficherModalModifierTitre(item.id)">{{item.uniteAdmin.libelle || 'Non renseigné'}}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link :to="{ name: 'ActeurDetail', params: { id: item.id }}" class="btn btn-default ">
                                                            <span class=""><i class="icon-folder-open"></i></span>
                                                        </router-link>

                                                        <button @click.prevent="suprimer(item.id)"  class="btn btn-danger ">
                                                            <span class=""><i class="icon-trash"></i></span></button>

                                                    </div>

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
            </div>
        </div>

        <fab :actions="fabActions"
             main-icon="apps"
             @cache="afficherModalAjouterTitre"
             bg-color="green"

        ></fab>

    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <!-- <div id="exampleModal" class="modal hide taillePersonnel">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Personnel</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
              <td>
                <div class="control-group">
                 <label class="control-label">Matricule:</label>
                                                    <div class="controls">
                                                        <input type="text"  v-model="formData.matricule" class="span4" placeholder="Saisir le matricule" />
                                                    </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                 <label class="control-label">Nom:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.nom" class="span4" placeholder="Saisir le nom" />
                                                    </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Prenom:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.prenom" class="span4" placeholder="Saisir le prenom" />
                                                    </div>
                   
                </div>
              </td>
              <td>
                  <div class="control-group">
                                                    <label class="control-label">Sexe:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.sexe" class="span4">
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
                                                        <input type="text" v-model="formData.numero_cni" class="span4" placeholder="Saisir le numero cni" />
                                                    </div>
                                                </div>
              </td>
              <td>
              
               <div class="control-group">
                                                    <label class="control-label">Numero passeport:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.numero_passeport" class="span4" placeholder="Saisir le numero passeport" />
                                                    </div>
                                                </div>
              </td>
              <td>
                 <div class="control-group">
                  <label class="control-label">Date de naissance:</label>
                                                    <div class="controls">
                                                        <input type="date" v-model="formData.date_naissance" class="span4" placeholder="Saisir la date de naissance" />
                                                    </div>
                </div>
              </td>
               <td>
                  <div class="control-group">
                  <label class="control-label">Nom du pÃ¨re:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.nom_pere" class="span4" placeholder="Saisir le nom du pere" />
                                                    </div>
                </div>
              </td>
             
            </tr>
            <tr>
              <td>
                   <label class="control-label">Nom de la mÃ¨re:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.nom_mere" class="span4" placeholder="Saisir le nom de la mere" />
                                                    </div>
              </td>
              <td>
                <div class="control-group">
                   <label class="control-label">Reference acte:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.code" class="span4" placeholder="Saisir la reference" />
                                                    </div>
                  </div>
              </td>
              <td>
                <div class="control-group">
               <label class="control-label">Type acte de personnel</label>
                                                    <div class="controls">
                                                        <select v-model="formData.type_acte_id" class="span4">
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
                  <label class="control-label">L'unite administrative:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.unite_administrative_id" class="span4">
                                                            <option></option>
                                                            <option v-for="item in uniteAdministratives" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                  </div>
              </td>
             
              
            </tr>
          <tr>
               <td>
                    <label class="control-label">Date debut contrat:</label>
                                                    <div class="controls">
                                                        <input type="date" v-model="formData.date_debut_contrat" class="span4" placeholder="" />
                                                    </div>
              </td>
               <td>
                    <label class="control-label">Date debut contrat:</label>
                                                    <div class="controls">
                                                        <input type="date" v-model="formData.date_debut_contrat" class="span4" placeholder="" />
                                                    </div>
              </td>
              <td>
                  <label class="control-label">Type salarie</label>
                                                    <div class="controls">
                                                        <select v-model="formData.type_salarie_id" class="span4">
                                                            <option></option>
                                                            <option v-for="item in type_salaries" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                                                        </select>
                                                    </div>
              </td>
             
               <td>
                   <div class="control-group">
                                                    <label class="control-label">Salaire:</label>
                                                    <div class="controls">
                                                        <input type="text" v-model="formData.salaires" class="span4" placeholder="Saisir le salaire" />
                                                    </div>
                                                </div>
              </td>
             

          </tr>
          <tr>
               <td>
                  <div class="control-group">
                                                    <label class="control-label">Type contrat</label>
                                                    <div class="controls">
                                                        <select v-model="formData.type_contrat_id" class="span4" >
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
                                                    <label class="control-label">Type niveau etude</label>
                                                    <div class="controls">
                                                        <select v-model="formData.niveau_etude_id" class="span4">
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
                                                    <label class="control-label">Exercice budgetaire:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.exercice_budgetaire_id" class="span4">
                                                            <option v-for="item in exercices_budgetaires" :key="item.id" :value="item.id">
                                                                {{item.annee}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
              </td>
              <td>
                   <div class="control-group">
                                                    <label class="control-label">Ligne budgetaires:</label>
                                                    <div class="controls">

                                                        <select v-model="formData.plan_budgetaire_id" class="span4">
                                                            <option v-for="item in plans_budgetaires" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
              </td>
            
          </tr>
          <tr>
                <td>
                     <div class="control-group">
                                                    <label class="control-label">Fonctions</label>
                                                    <div class="controls">
                                                        <select v-model="formData.fonction_id" class="span4">
                                                            <option></option>
                                                            <option v-for="item in fonctions" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
              </td>
              <td>
                                 <div class="control-group">
                                                    <label class="control-label">Grades</label>
                                                    <div class="controls">
                                                        <select v-model="formData.grade_id" class="span4">
                                                            <option></option>
                                                            <option v-for="item in grades" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
              </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterUniteAdministrativeLocal(formData)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div> -->

        <div id="modifierModal" class="modal hide">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier un fonctions</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="control-group">
                        <label class="control-label">Code:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.code" class="span" placeholder="" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Libelle:</label>
                        <div class="controls">
                            <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a @click.prevent="modifierTitre(editTitre)" class="btn btn-primary"
                   href="#">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
        </div>

    </div>

</template>

<script>
    import {formatageSomme} from "../../../vuex/modules/guei/Repositories/Repository"
    import {mapGetters, mapActions} from 'vuex'
    import moment from "moment";
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
                liste:[],
                search:"",
                search1:"",
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
                    fonction_id:""
                },

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            this.allActeurDepense();
            this.getActeurFinContratAndActivite()
            this.getListeSalaireActuelAll()
            //    this.getActeur()
            //  console.log(this.fonctions)
            // console.log(this.getFonction)
        },
        computed: {
            ...mapGetters('personnelUA', ["afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","personnaliseActeurDepense","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),
 afficheFonctionAdministrative() {
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

 afficheService() {
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

 afficheUniteZone() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteZones.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },





            acteurActivite() {
                const searchTerm = this.search.toLowerCase();
               // let ObjetModepassation=this.document_pyba_ppm_personnalise.filter((idm)=>idm.exerciceBudgetaire.encours===1);
                return this.personnaliseActeurDepense.filter((item) => {
                        return item.matricule.toLowerCase().includes(searchTerm)
                        || item.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
                        || item.prenom.toLowerCase().includes(searchTerm)
                        || item.nom.toLowerCase().includes(searchTerm)

                    }
                )

            },
           
  





            acteurNonActivite() {
                const searchTerm = this.search.toLowerCase();
                return this.personnaliseActeurFinContrat.filter((item) => {
                        return item.matricule.toLowerCase().includes(searchTerm)
                            || item.uniteAdmin.libelle.toLowerCase().includes(searchTerm)
                            || item.prenom.toLowerCase().includes(searchTerm)
                            || item.nom.toLowerCase().includes(searchTerm)

                    }
                )

            },

            afficheNomPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom;
      }
      return 0
        }
      };
    },
 affichePrenomsPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prenom;
      }
      return 0
        }
      };
    },
    afficheMatriculePersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.matricule;
      }
      return 0
        }
      };
    },
      afficheSituationMatrimonial() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.situation_matrimonial;
      }
      return 0
        }
      };
    },
    afficheUniteAdministrative() {
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
     afficheFonctionBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctionBudgetaire.find(qtreel => qtreel.id == id);

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
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense","getActeurFinContratAndActivite","getListeSalaireActuelAll"]),
            afficherModalAjouterTitre(){
                this.$router.push({ name: 'AjouterActeur' })
            },
//  afficherModalAjouterPersonnel() {
//       this.$("#exampleModal").modal({
//         backdrop: "static",
//         keyboard: false
//       });
//     },
            suprimer(id){
                this.supprimerActeurs(id)
                this.allActeurDepense()
                this.getNbrActeurAcrediteTaux();
            },
            // afficherModalModifierTitre(index){

            //     this.$router.push({ path: 'EditActeurDepense', params: { id: index } })

            // },


 afficherModalModifierTitre(id) {
      this.$router.push({
        path: "/Modifier_immobilisation/" + id
      });
    },


            formaterDate(date) {
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            formatageSomme:formatageSomme,
        }
    };
</script>

<style scoped>
.taillePersonnel{
  width: 1600px;
  margin: 0 -45%;
  height: 500px;
}
</style>