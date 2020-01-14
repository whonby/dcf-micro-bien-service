
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand12">
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
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
    <!--///////////////////////////////////////// debut modal modification //////////////////////////////-->
    <div id="modificationModal" class="modal hide tailgrand12">
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
    </div>
    <!--///////////////////////////////////////// fin modal modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Unites administratives"
            :data="jointureUaChapitreSection"
            name="Liste Unites administratives"
            worksheet="Liste Unites administratives"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <div align="right">
                <!-- Recherche:
                <input type="search" placeholder="Saisie section ou libelle" v-model="search" /> -->

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
              <h5>Budget General par Ua</h5>
            </div>

            <div
              class="widget-content nopadding"
             v-if="sections.length && grandes_natures.length && plans_fonctionnels.length && plans_budgetaires.length && afficheNiveauPlanProg.length"
            >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                       <th>Exercice Budgetaire</th>
                    <!-- <th title="type unite administrative">Type ua</th> -->
                     <th title="unite administrative">ua</th>
                    <th>Section</th>
                    <th title="grande nature depense">Gde nature</th>
                    <th>Programme</th>
                     <th title="classification fonctionnel">Clsse Fontionnel</th>
                     <th title="classification Economique">Clsse Economique</th>
                    <th>Dotation Initial</th>
                    <th>Version</th>
                    

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="(Bgeneral, index) in getPersonnaliseBudgetGeneral"
                    :key="Bgeneral.id"
                  >
                   
                  
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{Bgeneral.exercicebudget_id || 'Non renseigné'}}</td>
                      <!-- <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{Bgeneral.affichetypeua.libelle || 'Non renseigné'}}</td> -->
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{Bgeneral.afficheUA.libelle || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{Bgeneral.afficheSection.code_section || 'Non renseigné'}}-{{Bgeneral.afficheSection.nom_section || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{Bgeneral.afficheGdeNature.code || 'Non renseigné'}}-{{Bgeneral.afficheGdeNature.libelle || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{Bgeneral.afficheProgramme.code || 'Non renseigné'}}-{{Bgeneral.afficheProgramme.libelle || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{Bgeneral.afficheFonctionnel.code || 'Non renseigné'}}-{{Bgeneral.afficheFonctionnel.libelle || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{ Bgeneral.afficheEconomique.code || 'Non renseigné'}}-{{ Bgeneral.afficheEconomique.libelle || 'Non renseigné'}}</td>
                  <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{ Bgeneral.Dotation_Initiale || 0}}</td>
                   <td  @dblclick="afficherModalModifierUniteAdministrative(index)">
                     
                     
                     <span v-if="Bgeneral.version == 0">Original </span>
                      <span 
                     v-else>Premiere modification</span>
                     </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerBudgetGeneral(Bgeneral.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                   <tr
                   
                  >
                  <!-- <td ></td> -->
                   <td ></td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                    <td></td>
                    <td ></td>
                   
                     <td style="font-weight:bold;">Montant Total</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantBudgetGeneral))}}</td>
                    
                    
                    <td ></td>
                  <td ></td>
                  
                    
                    
                   
                    
                    
                  </tr>
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterUniteAdministrative" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterUniteAdministrative()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
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
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData: {
       exercicebudget_id:"",
      gdenature_id: "",
      program_id: "",
      typeua_id: "",
      ua_id: "",
      section_id: "",
      fonctionnel_id: "",
      economique_id: "",
      Dotation_Initiale: "",
      version: ""
      },
      editBudgetGeneral: {
         exercicebudget_id:"",
      gdenature_id: "",
      program_id: "",
      typeua_id: "",
      ua_id: "",
      section_id: "",
      fonctionnel_id: "",
      economique_id: "",
      Dotation_Initiale: "",
      version: ""
      },
      // json_fields: {
      //   TYPE_UNIT_ADMINISTRATIVE: "typeua.libelle",
      //   SECTION: "secti.nom_section",
      //   SERVICE_GESTIONNAIRE: "servivegest.libelle",
      //   LOCALISATION_GEO: "localgeo.libelle",
      //   CODE: "code",
      //   LIBELLE: "libelle",
      //   DATE_CREATION: "date_creation"
      // },
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
    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    // filtre_unite_admin() {
    //   const st = this.search.toLowerCase();
    //   return this.jointureUaChapitreSection.filter(items => {
    //     return (
    //       items.secti.nom_section.toLowerCase().includes(st) ||
    //       items.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // },
    sectionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.jointureUaChapitreSection.filter(element => element.id == id);
        }
      };
    },
    uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.jointureUaChapitreSection.filter(element => element.id == id);
        }
      };
    },
anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },

  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllBudgetGeneral",
      "ajouterBudgetGeneral",
      "modifierBudgetGeneral",
      "supprimerBudgetGeneral"
    ]),
 formatageSomme: formatageSomme,
    afficherModalAjouterUniteAdministrative() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
     var nouvelObjet = {
      ...this.formData,
       exercicebudget_id: this.anneeAmort
      
       };
      this.ajouterBudgetGeneral(nouvelObjet);

      this.formData = {
        exercicebudget_id:"",
      gdenature_id: "",
      program_id: "",
      typeua_id: "",
      ua_id: "",
      section_id: "",
      fonctionnel_id: "",
      economique_id: "",
      Dotation_Initiale: "",
      version: ""
      };
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
       var nouvelObjet = {
      ...this.editBudgetGeneral,
       exercicebudget_id: this.anneeAmort
      
       };
      this.modifierBudgetGeneral(nouvelObjet);
this.$("#modificationModal").modal('hide');
      // this.editUniteAdministrative = {
      //   code: "",
      //   libelle: "",
      //   section_id: "",
      //   localisationgeo_id: ""
      // };
    },
    // afficher modal de modification
    afficherModalModifierUniteAdministrative(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBudgetGeneral = this.getPersonnaliseBudgetGeneral[index];
    },
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
<style >

.tailgrand12{
  width: 70%;
  margin: 0 -30%;
}

</style>