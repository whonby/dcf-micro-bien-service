

<template>
  <div>
   
<!----- ajouter modal   ---->


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
                              <!-- <input
                                type="text"
                                class="span"
                               readonly
                              :value="alertMessage"
                              /> -->
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
             <td colspan="2">
                <div class="control-group">
                  <label class="control-label">Code Budget general</label>
                  <div class="controls">
                    <input
                      type="text"
                     :value="codeBudgetGeneral"
                      class="span6"
                      placeholder="Saisir le code"
                      readonly
                    />
                  </div>
                </div>
              </td>
               <input
                      type="hidden"
                     :value="codeGrdeNature"
                      class="span"
                      placeholder="Saisir le code"
                      readonly
                    />
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

<!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

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
             <td colspan="2">
                <div class="control-group">
                  <label class="control-label">Code Budget general</label>
                  <div class="controls">
                    <input
                      type="text"
                     :value="codeBudgetGeneralModifier"
                      class="span6"
                      placeholder="Saisir le code"
                      readonly
                    />
                  </div>
                </div>
              </td>
               <input
                      type="hidden"
                     :value="codeGrdeNaturemodif"
                      class="span"
                      placeholder="Saisir le code"
                      readonly
                    />
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
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div>

                                        <!-- <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="uniteAdministratives">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget general par ua</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="uniteAdministratives.length" >
              <budgetGeneralItemComponent v-for="equipement in uniteAdministratives"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierUniteAdministrative" 
                @suppression="supprimerBudget"
                >
              </budgetGeneralItemComponent>

              <!-- <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Article</p>
              </div> -->

            
              
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
import budgetGeneralItemComponent from './budgetGeneralItemComponent'
import { formatageSomme } from "../../../src/Repositories/Repository";
export default {
  name: 'budgetgeneral',
 components: {
      budgetGeneralItemComponent
  },
  data() {
    return {
      // json_fields: {
      //       'NATURE_SECTION': 'groupe.libelle',
      //       'NUMERO_ORDRE_SECTION': 'article.code',
      //     'CODE_SECTION':'article.code_section',
      //   'LIBELLE_SECTION':'article.nom_section'
           
           
      //   },
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
       search:""
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
 
 codeBudgetGeneralModifier(){
      // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
    const sectionBudget = this.sections.find(serviceg => serviceg.id == this.editBudgetGeneral.section_id)
   const programmeBudget = this.plans_programmes.find(serviceg => serviceg.id == this.editBudgetGeneral.program_id)
     const uaBudget = this.uniteAdministratives.find(serviceg => serviceg.id == this.editBudgetGeneral.ua_id)
    const fonctionnelBudget = this.plans_fonctionnels.find(serviceg => serviceg.id == this.editBudgetGeneral.fonctionnel_id)
 const economiqueBudget = this.plans_budgetaires.find(chap => chap.id == this.editBudgetGeneral.economique_id)
     if(sectionBudget && programmeBudget && uaBudget && fonctionnelBudget && economiqueBudget){
       return sectionBudget.code_section +"-"+ programmeBudget.code +"-"+ uaBudget.code_ua +"-"+ fonctionnelBudget.code  +"-"+ economiqueBudget.code
     }

     return null
   },
    codeBudgetGeneral(){
      // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
    const sectionBudget = this.sections.find(serviceg => serviceg.id == this.formData.section_id)
   const programmeBudget = this.plans_programmes.find(serviceg => serviceg.id == this.formData.program_id)
     const uaBudget = this.uniteAdministratives.find(serviceg => serviceg.id == this.formData.ua_id)
    const fonctionnelBudget = this.plans_fonctionnels.find(serviceg => serviceg.id == this.formData.fonctionnel_id)
 const economiqueBudget = this.plans_budgetaires.find(chap => chap.id == this.formData.economique_id)
     if(sectionBudget && programmeBudget && uaBudget && fonctionnelBudget && economiqueBudget){
       return sectionBudget.code_section +"-"+ programmeBudget.code +"-"+ uaBudget.code_ua +"-"+ fonctionnelBudget.code  +"-"+ economiqueBudget.code
     }

     return null
   },

    sectionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.jointureUaChapitreSection.filter(element => element.id == id);
        }
      };
    },
    
    // ActiviteDynamiques() {
    //   return id => {
    //     if (formData.action_id != null && formData.action_id != "") {
    //       return this.plans_activites.filter(element => element.children.parent == this.formData.action_id);
       
    //    }
    //   };
    // },
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
    codeGrdeNature() {
      
      const norme = this.grandes_natures.find(normeEquipe => normeEquipe.id == this.formData.gdenature_id);

      if (norme) {
        return norme.code;
      }
      return 0
    },
    codeGrdeNaturemodif() {
      
      const norme = this.grandes_natures.find(normeEquipe => normeEquipe.id == this.editBudgetGeneral.gdenature_id);

      if (norme) {
        return norme.code;
      }
      return 0
    },
// alertMessage() {
//       const typeUniteA = this.getPersonnaliseBudgetGeneral.find(typeUa=> typeUa.afficheUA.id == this.formData.ua_id);

//       if (typeUniteA) {
//         return typeUniteA.exercicebudget_id;
        
//       }
//       return 0
//     },
  },


  
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllBudgetGeneral",
      "ajouterBudgetGeneral",
      "modifierBudgetGeneral",
      "supprimerBudgetGeneral",
      // "ajouterHistoriqueBudgetGeneral"
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
      
//       if (this.formData.exercicebudget_id == this.alertMessage){
// alertMessage("fffffffffffff")
//       }
//       else
//       {
var nouvelObjet = {
      ...this.formData,
       exercicebudget_id: this.anneeAmort,
       codebudget : this.codeBudgetGeneral,
       testgdenature:this.codeGrdeNature
      
       };
      this.ajouterBudgetGeneral(nouvelObjet);
// this.ajouterHistoriqueBudgetGeneral(nouvelObjet);
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
      version: "",
      codebudget : ""
      };
      // }
     
    },
    
     supprimerBudget(id){
      this.supprimerBudgetGeneral(id)
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
       var nouvelObjet = {
      ...this.editBudgetGeneral,
       exercicebudget_id: this.anneeAmort,
       codebudget : this.codeBudgetGeneralModifier,
        testgdenature:this.codeGrdeNaturemodif
      
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
    afficherModalModifierUniteAdministrative(articles) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBudgetGeneral = articles;
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
<style scoped>

.tailgrand12{
  width: 75%;
  margin: 0 -35%;
}

</style>