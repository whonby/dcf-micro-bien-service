
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <!-- <div id="exampleModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Budget par unité d'administrative</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
                 <td>
                <div class="control-group">
                  <label class="control-label">Exercice budgetaire</label>
                
                  <div class="controls">
                     <input
                                type="text"
                                class="span"
                               readonly
                              :value="anneeAmort"
                              />
                            <input
                                type="text"
                                class="span"
                               readonly
                              :value="alertMessage"
                              /> 
                  </div>
                  </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Grande nature depense</label>
                  <div class="controls">
                    <select v-model="formData.gdenature_id">
                      <option
                        v-for="gdenature in grandes_natures"
                        :key="gdenature.id"
                        :value="gdenature.id"
                      >{{gdenature.code}} - {{gdenature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Programme</label>
                  <div class="controls">
                    <select v-model="formData.program_id">
                      <option
                        v-for="natsection in afficheNiveauPlanProg"
                        :key="natsection.id"
                        :value="natsection.id"
                      >{{natsection.code}}-{{natsection.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Unite administrative</label>
                  <div class="controls">
                    <select v-model="formData.ua_id">
                        <option value>Sélectionner</option>
                    <option
                      v-for="ua in uniteAdministratives"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               
            </tr>
            <tr>
                 <td>
              
               <div class="control-group">
                   <label class="control-label">Type Unite administrative</label>
                  <div class="controls">
                    <select v-model="formData.typeua_id">
                      <option
                        v-for="type in uniteAdministrativeDynamiques(formData.ua_id)"
                        :key="type.id"
                        :value="type.typeua.id"
                      >{{type.typeua.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Section</label>
                  <div class="controls">
                    <select v-model="formData.section_id">
                      <option
                        v-for="sect in sectionDynamiques(formData.ua_id)"
                        :key="sect.id"
                        :value="sect.secti.id"
                      >{{sect.secti.code_section}}-{{sect.secti.nom_section}}</option>
                    </select>
                  </div>
                </div>
              </td>
             <td>
                 <div class="control-group">
                  <label class="control-label">Classification Fonctionnel</label>
                  <div class="controls">
                    <select v-model="formData.fonctionnel_id">
                      <option
                        v-for="planfonct in afficheNiveauPlanFonctionnel"
                        :key="planfonct.id"
                        :value="planfonct.id"
                      >{{planfonct.code}}-{{planfonct.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
             <td>
                 <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
                    <select v-model="formData.economique_id">
                      <option
                        v-for="Bgeneral in derniereNivoPlanBudgetaire"
                        :key="Bgeneral.id"
                        :value="Bgeneral.id"
                      >{{Bgeneral.code}}-{{Bgeneral.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              
            </tr>
            <tr>
               <td>
                 <div class="control-group">
                  <label class="control-label">Action</label>
                  <div class="controls">
                    <select v-model="formData.action_id">
                      <option
                        v-for="planfonct in afficheNiveauAction"
                        :key="planfonct.id"
                        :value="planfonct.id"
                      >{{planfonct.code}}-{{planfonct.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
            
                <td>
                <div class="control-group">
                  <label class="control-label">Code Budget general</label>
                  <div class="controls">
                    <input
                      type="text"
                     :value="codeBudgetGeneral"
                      class="span3"
                      placeholder="Saisir le code"
                      readonly
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Dotation Initiale</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    v-model="formData.Dotation_Initiale"
                      class="span"
                      placeholder="Dotation Initiale"
                      
                    />
                  </div>
                  </div>
              </td>
               
              <td>
                            <div class="control-group">
                            <label class="control-label">Version</label>
                            <div class="controls">
                              <select v-model="formData.version">
                              <option value="0">Original</option>
                          <option value="1">Premiere modification</option>
   
    </select>
                            </div>
                          </div>
                        </td>

            </tr>
          <tr>
             <td>
                 <div class="control-group">
                  <label class="control-label">Activite</label>
                  <div class="controls">
                    <select v-model="formData.activite_id">
                      <option
                        v-for="Bgeneral in afficheNiveauActivite"
                        :key="Bgeneral.id"
                        :value="Bgeneral.id"
                      >{{Bgeneral.code}}-{{Bgeneral.libelle}}</option>
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
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
    <!--///////////////////////////////////////// debut modal modification //////////////////////////////-->
    <!-- <div id="modificationModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Budget par unité d'administrative</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          
             <tr>
                 <td>
                <div class="control-group">
                  <label class="control-label">Exercice budgetaire</label>
                
                  <div class="controls">
                     <input
                                type="text"
                                class="span"
                               readonly
                              :value="anneeAmort"
                              />
                  </div>
                  </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Grande nature depense</label>
                  <div class="controls">
                    <select v-model="editBudgetGeneral.gdenature_id">
                      <option
                        v-for="gdenature in grandes_natures"
                        :key="gdenature.id"
                        :value="gdenature.id"
                      >{{gdenature.code}} - {{gdenature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Programme</label>
                  <div class="controls">
                    <select v-model="editBudgetGeneral.program_id">
                      <option
                        v-for="natsection in afficheNiveauPlanProg"
                        :key="natsection.id"
                        :value="natsection.id"
                      >{{natsection.code}}-{{natsection.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
                <td>
              
               <div class="control-group">
                  <label class="control-label">Unite administrative</label>
                  <div class="controls">
                    <select v-model="editBudgetGeneral.ua_id">
                        <option value>Sélectionner</option>
                    <option
                      v-for="ua in uniteAdministratives"
                      :key="ua.id"
                      :value="ua.id"
                    >{{ua.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
              
               <div class="control-group">
                   <label class="control-label">Type Unite administrative</label>
                  <div class="controls">
                    <select v-model="editBudgetGeneral.typeua_id">
                      <option
                        v-for="type in uniteAdministrativeDynamiques(editBudgetGeneral.ua_id)"
                        :key="type.id"
                        :value="type.typeua.id"
                      >{{type.typeua.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
                
               <td>
              
               <div class="control-group">
                  <label class="control-label">Section</label>
                  <div class="controls">
                    <select v-model="editBudgetGeneral.section_id">
                      <option
                        v-for="sect in sectionDynamiques(editBudgetGeneral.ua_id)"
                        :key="sect.secti.id"
                        :value="sect.secti.id"
                      >{{sect.secti.code_section}}-{{sect.secti.nom_section}}</option>
                    </select>
                  </div>
                </div>
              </td>
             <td>
                 <div class="control-group">
                  <label class="control-label">Classification Fonctionnel</label>
                  <div class="controls">
                    <select v-model="editBudgetGeneral.fonctionnel_id">
                     <option
                        v-for="planfonct in afficheNiveauPlanFonctionnel"
                        :key="planfonct.id"
                        :value="planfonct.id"
                      >{{planfonct.code}}-{{planfonct.libelle}}</option>
                    </select>
                    
                  </div>
                </div>
              </td>
             <td>
                 <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
                    <select v-model="editBudgetGeneral.economique_id">
                      <option
                        v-for="Bgeneral in derniereNivoPlanBudgetaire"
                        :key="Bgeneral.id"
                        :value="Bgeneral.id"
                      >{{Bgeneral.code}}-{{Bgeneral.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              
            </tr>
            <tr>
                <td>
                 <div class="control-group">
                  <label class="control-label">Action</label>
                  <div class="controls">
                    <select v-model="editBudgetGeneral.action_id">
                      <option
                        v-for="planfonct in afficheNiveauAction"
                        :key="planfonct.id"
                        :value="planfonct.id"
                      >{{planfonct.code}}-{{planfonct.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
                <td>
                <div class="control-group">
                  <label class="control-label">Code Budget general</label>
                  <div class="controls">
                    <input
                      type="text"
                     :value="codeBudgetGeneralModifier"
                      class="span3"
                      placeholder="Saisir le code"
                      readonly
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Dotation Initiale</label>
                
                  <div class="controls">
                    <input
                      type="number"
                    v-model="editBudgetGeneral.Dotation_Initiale"
                      class="span"
                      placeholder="Dotation Initiale"
                      
                    />
                  </div>
                  </div>
              </td>
              
               <td>
                            <div class="control-group">
                            <label class="control-label">Version</label>
                            <div class="controls">
                              <select v-model="editBudgetGeneral.version">
                              <option value="0">Original</option>
                          <option value="1">Premiere modification</option>
   
    </select>
                            </div>
                          </div>
                        </td>
            </tr>
             <tr>
             <td>
                 <div class="control-group">
                  <label class="control-label">Activite</label>
                  <div class="controls">
                    <select v-model="editBudgetGeneral.activite_id">
                      <option
                        v-for="Bgeneral in afficheNiveauActivite"
                        :key="Bgeneral.id"
                        :value="Bgeneral.id"
                      >{{Bgeneral.code}}-{{Bgeneral.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierUniteAdministrativeLocal(editBudgetGeneral)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div> -->
    <!--///////////////////////////////////////// fin modal modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            
            :fields="json_fields"
            title="Budget par Unites administratives"
            :data="filtre_unite_admin"
            name="Budget par Unites administratives"
            worksheet="Budget par Unites administratives"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <div align="right">
                Recherche:
                <input type="search" placeholder="" v-model="search" class="span5"/>

                <!-- <div class="span3">
                  <model-list-select
                    v-model="formData.test"
                    style="background-color: rgb(222, 222, 222);"
                    :list="type_Unite_admins"
                    option-value="id"
                    option-text="libelle"
                    placeholder="unite administrative"
                  ></model-list-select>
                </div>
                <button>ok</button>-->
              </div>
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget General par Ua</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
              <span class="badge badge-inverse" >Total Budget General : {{formatageSomme(parseFloat(montantBudgetGeneral))}}</span>
            </div>

            <div
              class="widget-content nopadding"
             v-if="sections.length && grandes_natures.length && plans_fonctionnels.length && plans_budgetaires.length && afficheNiveauPlanProg.length"
            >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                       <!-- <th>Exercice</th>
                    <th title="">Code Budget</th> -->
                     <th title="unite administrative">ua</th>
                    <th>Section</th>
                    <th title="grande nature depense">Gde nature</th>
                      <th>Programme</th>
                    <th>Action</th> 
                    <th>Activite</th> 
                     <th title="classification fonctionnel">Clsse Fontionnel</th>
                     <th title="classification Economique">Clsse Economique</th>
                    <th>Dotation Initial</th>
                    <!-- <th>Version</th>
                    

                    <th>Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr>
                    <td>
                      ddddddddddddddddddd
                    </td>
                  </tr> -->
                  <tr
                    class="odd gradeX"
                    v-for="Bgeneral in filtre_unite_admin"
                    :key="Bgeneral.id"
                  >
                   
                  
                    <!-- <td>{{Bgeneral.exercicebudget_id || 'Non renseigné'}}</td>
                      <td>{{Bgeneral.codebudget || 'Non renseigné'}}</td> -->
                      <!-- <td>{{Bgeneral.affichetypeua.libelle || 'Non renseigné'}}</td> -->
                    <td>{{Bgeneral.afficheUA.libelle || 'Non renseigné'}}</td>
                    <td>{{Bgeneral.afficheSection.code_section || 'Non renseigné'}}-{{Bgeneral.afficheSection.nom_section || 'Non renseigné'}}</td>
                    <td>{{Bgeneral.afficheGdeNature.code || 'Non renseigné'}}-{{Bgeneral.afficheGdeNature.libelle || 'Non renseigné'}}</td>
                    <td>{{Bgeneral.afficheProgramme.code || 'Non renseigné'}}-{{Bgeneral.afficheProgramme.libelle || 'Non renseigné'}}</td>
                    <td>{{Bgeneral.afficheAction.code || 'Non renseigné'}}-{{Bgeneral.afficheAction.libelle || 'Non renseigné'}}</td>
                     <td>{{Bgeneral.afficheActivite.code || 'Non renseigné'}}-{{Bgeneral.afficheActivite.libelle || 'Non renseigné'}}</td>
                      <td>{{Bgeneral.afficheFonctionnel.code || 'Non renseigné'}}-{{Bgeneral.afficheFonctionnel.libelle || 'Non renseigné'}}</td>
                    <td>{{ Bgeneral.afficheEconomique.code || 'Non renseigné'}}-{{ Bgeneral.afficheEconomique.libelle || 'Non renseigné'}}</td>
                  <td>{{formatageSomme(parseFloat(Bgeneral.Dotation_Initiale)) || 0}}</td>
                   <!-- <td>
                     
                     
                     <span v-if="Bgeneral.version == 0">Original </span>
                      <span 
                     v-else>Premiere modification</span>
                     </td> -->
                    <!-- <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerBudgetGeneral(Bgeneral.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td> -->
                  </tr>
                  <tr>
                     
                       <!-- <td>
                           
                      </td>
                       <td>
                          
                      </td> -->
                        <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Dotation par Ua
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(budgetParUa))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterUniteAdministrative" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterUniteAdministrative()">Open</button> -->
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <!-- <notifications  /> -->
  </div>
</template>
  
<script>
import { mapGetters} from "vuex";
import { formatageSomme } from "../../../src/Repositories/Repository";
// import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  // components: {
  //   ModelListSelect
  // },
  data() {
    return {
      // fabActions: [
      //   {
      //     name: "cache",
      //     icon: "add"
      //   }
      // ],
    
      json_fields: {
        // ANNEE: "exercicebudget_id",
        // CODE_BUDGET: "codebudget",
        // code_section:"afficheSection.code_section",
        // section:"afficheSection.nom_section",
          // 'section' : 
        // ``
        section: {
          field: "afficheSection",
          callback: (value) => {
            return `${value.code_section} - ${value.nom_section}`
          }
        },
        
        // section: `${afficheSection.code_section} - ${afficheSection.nom_section}`, 
        grande_nature: "afficheGdeNature.libelle",
        programme: {
          field: "afficheProgramme",
          callback: (value) => {
            return `${value.code} - ${value.libelle}`
          }
        },
        action: {
          field: "afficheAction",
          callback: (value) => {
            return `${value.code} - ${value.libelle}`
          }
        },
        activite: {
          field: "afficheActivite",
          callback: (value) => {
            return `${value.code} - ${value.libelle}`
          }
        },
         fonctionnel: {
          field: "afficheFonctionnel",
          callback: (value) => {
            return `${value.code} - ${value.libelle}`
          }
        },
         economique: {
          field: "afficheEconomique",
          callback: (value) => {
            return `${value.code} - ${value.libelle}`
          }
        },
          dotation_initial: "Dotation_Initiale",
        // code_programme: "afficheProgramme.code",
        // programme: "afficheProgramme.libelle",
      
        // code_activite: "afficheActivite.code",
        // ACTIVITE: "afficheActivite.libelle",
        // CODE_FONCTIONNEL: "afficheFonctionnel.code",
        // FONCTIONNEL: "afficheFonctionnel.libelle",
        // CODE_ECONOMIQUE: "afficheEconomique.code",
        // ECONOMIQUE: "afficheEconomique.libelle",
        // DOTATION_INITIAL: "Dotation_Initiale",
        // TOTAL_DOTATION: {
          
      
        // }
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral"
      // "chapitres",
      // "sections"
    ]),
    
    ...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    filtre_unite_admin() {
      const st = this.search.toLowerCase();
      return this.getPersonnaliseBudgetGeneral.filter(items => {
        return (
          items.afficheUA.libelle.toLowerCase().includes(st) ||
         items.afficheSection.code_section.toLowerCase().includes(st) ||
         items.afficheGdeNature.libelle.toLowerCase().includes(st) ||
         items.afficheProgramme.code.toLowerCase().includes(st) 
        );
      });
    },
    budgetParUa() {
      const st = this.search.toLowerCase();
      return this.getPersonnaliseBudgetGeneral.filter(items => {
        return (
          items.afficheUA.libelle.toLowerCase().includes(st) ||
         items.afficheSection.code_section.toLowerCase().includes(st) ||
         items.afficheGdeNature.libelle.toLowerCase().includes(st) ||
         items.afficheProgramme.code.toLowerCase().includes(st) 
         
        );
      }).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2);
      
    },
//    MontantbesoinRestantParUniteAdministrative(){
//   return uniteadmin_id => {
//     if(uniteadmin_id !=""){
//     const montant = this.getPersonnaliseBudgetGeneral.filter(element => element.id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
//       if(isNaN(montant)) return null
//       return montant

//     }
//   }
// }, 

    
  },
  methods: {
    
 formatageSomme: formatageSomme,
    
    alert() {
      console.log("ok");
    },

    // formaterDate(date) {
    //   return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    // },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style scoped>

.tailgrand12{
  width: 75%;
  margin: 0 -35%;
}

</style>