
RecupererNiveauStructureProgramme
<template>
  <div>
   
<!----- ajouter modal   ---->


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Budget par Unité Administrative</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
                 <td>
                <div class="control-group">
                  <label class="control-label">Exercice budgétaire</label>
                
                  <div class="controls">
                     <input
                                type="text"
                                class="span4"
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
                  <label class="control-label">Grande nature de dépense</label>
                  <div class="controls">
                    <select v-model="formData.gdenature_id" class="span4">
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
                    <select v-model="formData.program_id" class="span4">
                      <option
                        v-for="natsection in recupererDernierNiveauPlanProgramme(calculerTaillerStructureProgramme)"
                        :key="natsection.id"
                        :value="natsection.id"
                      >{{natsection.code}}-{{natsection.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Unité administrative</label>
                  <div class="controls">
                    <select v-model="formData.ua_id" class="span4">
                        <option value>Sélectionner</option>
                    <option
                      v-for="ua in uniteAdmin"
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
                   <label class="control-label">Type d'Unité Administrative</label>
                  <div class="controls">
                    <select v-model="formData.typeua_id" class="span4">
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
                    <select v-model="formData.section_id" class="span4">
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
                  <label class="control-label">Classification Fonctionnelle</label>
                  <div class="controls">
                    <select v-model="formData.fonctionnel_id" class="span4">
                      <option
                        v-for="planfonct in recupererDernierNiveauPlanFonctionnelle(calculerTaillerStructureFonctionnelle)"
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
                    
                    <select v-model="formData.economique_id" class="span4">
                      <option
                        v-for="Bgeneral in recupererDernierNiveauPlanEconomique(calculerTaillerStructureEconomique)"
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
                    <select v-model="formData.action_id" class="span4">
                      <option
                        v-for="planfonct in recupererDernierNiveauPlanActiviteAction(calculerTaillerStructureActivite)"
                        :key="planfonct.id"
                        :value="planfonct.id"
                      >{{planfonct.code}}-{{planfonct.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
            <td>
                 <div class="control-group">
                  <label class="control-label">Activité</label>
                  <div class="controls">
                    <select v-model="formData.activite_id" class="span4">
                      <option
                        v-for="Bgeneral in afficheActiviteParAction(formData.action_id)"
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
                      class="span4"
                      placeholder="Dotation Initiale"
                      
                    />
                  </div>
                  </div>
              </td>
               
              <td>
                            <div class="control-group">
                            <label class="control-label">Version</label>
                            <div class="controls">
                              <select v-model="formData.version" class="span4">
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
                  <label class="control-label">Code Budget général</label>
                  <div class="controls">
                    <input
                      type="text"
                     :value="codeBudgetGeneral"
                      class="span8"
                      placeholder="Saisir le code du budget"
                      readonly
                    />
                  </div>
                </div>
              </td>
               <td colspan="">
                <div class="control-group">
                  <label class="control-label">Type de procédure</label>
                  <div class="controls">
                    <input
                      type="text"
                     :value="afficheLeNomDesProcedure"
                      class="span4"
                      placeholder="Saisir le code"
                      readonly
                    />
                  </div>
                </div>
              </td>
               <td colspan="">
                <div class="control-group">
                  <label class="control-label">Statut de la ligne</label>
                  <div class="controls">
                    <input
                      type="text"
                     :value="statutDeLigne"
                      class="span4"
                     
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
                    <!-- <input
                      type="text"
                     v-model="formData.actived"
                      class="span"
                      
                      readonly
                    /> -->
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
                                class="span4"
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
                    <select v-model="editBudgetGeneral.gdenature_id" class="span4">
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
                    <select v-model="editBudgetGeneral.program_id" class="span4">
                      <option
                        v-for="natsection in recupererDernierNiveauPlanProgramme(calculerTaillerStructureProgramme)"
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
                    <select v-model="editBudgetGeneral.ua_id" class="span4">
                        <option value>Sélectionner</option>
                    <option
                      v-for="ua in uniteAdmin"
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
                    <select v-model="editBudgetGeneral.typeua_id" class="span4">
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
                    <select v-model="editBudgetGeneral.section_id" class="span4">
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
                    <select v-model="editBudgetGeneral.fonctionnel_id" class="span4">
                     <option
                        v-for="planfonct in recupererDernierNiveauPlanFonctionnelle(calculerTaillerStructureFonctionnelle)"
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
                    <select v-model="editBudgetGeneral.economique_id" class="span4">
                      <option
                        v-for="Bgeneral in recupererDernierNiveauPlanEconomique(calculerTaillerStructureEconomique)"
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
                    <select v-model="editBudgetGeneral.action_id" class="span4">
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
                    <select v-model="editBudgetGeneral.activite_id" class="span4">
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
                      class="span4"
                      placeholder="Dotation Initiale"
                      
                    />
                  </div>
                  </div>
              </td>
              
               <td>
                            <div class="control-group">
                            <label class="control-label">Version</label>
                            <div class="controls">
                              <select v-model="editBudgetGeneral.version" class="span4">
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
                      class="span8"
                      placeholder="Saisir le code"
                      readonly
                    />
                  </div>
                </div>
              </td>
               <td colspan="2">
                <div class="control-group">
                  <label class="control-label">Type procedure</label>
                  <div class="controls">
                    <input
                      type="text"
                     :value="afficheLeNomDesProcedureModifier"
                      class="span4"
                      placeholder="Saisir le code"
                      readonly
                    />
                  </div>
                </div>
              </td>
               <!-- <td colspan="2">
                <div class="control-group">
                  <label class="control-label">Statut de la ligne</label>
                  <div class="controls">
                    <input
                      type="text"
                     :value="codeBudgetGeneral"
                      class="span4"
                      placeholder="Saisir le code"
                      readonly
                    />
                  </div>
                </div>
              </td> -->
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
            

            <div class="widget-content nopadding" v-if="uniteAdmin.length" >
              <budgetGeneralItemComponent v-for="equipement in uniteAdmin"
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
import {admin,dcf,noDCfNoAdmin} from "../../../src/Repositories/Auth"
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
      version: "",
      	actived:1
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
      version: "",
      actived:1
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
      "structures_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel",
      "structures_fonctionnelles"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire","structures_budgetaires"]),
 ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "getterligneExempter",

            ]),
             admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),



recupererDernierNiveauPlanActiviteAction() {
      return id => {
        if (id != null && id != "") {
           return this.plans_activites.filter(qtreel => this.RecupererNiveauStructureActivite(qtreel.structure_activites_id) == id);
      
        }
      };
    },
   
   RecupererNiveauStructureActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
   
   calculerTaillerStructureActivite(){
     return this.structures_activites.length - 1
   },








recupererDernierNiveauPlanEconomique() {
      return id => {
        if (id != null && id != "") {
           return this.plans_budgetaires.filter(qtreel => this.RecupererNiveauStructureEconomique(qtreel.structure_budgetaire_id) == id);
      
        }
      };
    },
   
   RecupererNiveauStructureEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
   
   calculerTaillerStructureEconomique(){
     return this.structures_budgetaires.length
   },








recupererDernierNiveauPlanProgramme() {
      return id => {
        if (id != null && id != "") {
           return this.plans_programmes.filter(qtreel => this.RecupererNiveauStructureProgramme(qtreel.structure_programme_id) == id);
      
        }
      };
    },
   
   RecupererNiveauStructureProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
   
   calculerTaillerStructureProgramme(){
     return this.structures_programmes.length
   },
   

recupererDernierNiveauPlanFonctionnelle() {
      return id => {
        if (id != null && id != "") {
           return this.plans_fonctionnels.filter(qtreel => this.RecupererNiveauStructureFonctionnelle(qtreel.structure_fonctionnelle_id) == id);
      
        }
      };
    },
   
   RecupererNiveauStructureFonctionnelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_fonctionnelles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
   
   calculerTaillerStructureFonctionnelle(){
     return this.structures_fonctionnelles.length
   },
   



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
//  codeBudgetGeneralModifier(){
//       // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
//     const sectionBudget = this.sections.find(serviceg => serviceg.id == this.editBudgetGeneral.section_id)
//    const programmeBudget = this.plans_programmes.find(serviceg => serviceg.id == this.editBudgetGeneral.program_id)
//      const uaBudget = this.uniteAdministratives.find(serviceg => serviceg.id == this.editBudgetGeneral.ua_id)
//     const fonctionnelBudget = this.plans_fonctionnels.find(serviceg => serviceg.id == this.editBudgetGeneral.fonctionnel_id)
//  const economiqueBudget = this.plans_budgetaires.find(chap => chap.id == this.editBudgetGeneral.economique_id)
//      if(sectionBudget && programmeBudget && uaBudget && fonctionnelBudget && economiqueBudget){
//        return sectionBudget.code_section +"-"+ programmeBudget.code +"-"+ uaBudget.code_ua +"-"+ fonctionnelBudget.code  +"-"+ economiqueBudget.code
//      }

//      return null
//    },

afficheLeNomDesProcedureModifier(){
  if(this.editBudgetGeneral.Dotation_Initiale == ""){
return "Aucune procedure"
  }
     else if( this.editBudgetGeneral.Dotation_Initiale < 10000000){
        return "PSC Sans comité"
    }
    else if(this.editBudgetGeneral.Dotation_Initiale < 30000000)
    {
return "PSC Avec comité"
    }
    else if(this.editBudgetGeneral.Dotation_Initiale < 60000000 )
    {
return "PSL"
    }
    else if(this.editBudgetGeneral.Dotation_Initiale < 100000000 )
    {
return "PSO"
    }
     else if(100000000 < this.editBudgetGeneral.Dotation_Initiale)
    {
return "AON ou AOI"
    }
    
  return null  


},
afficheLeNomDesProcedure(){
  if(this.formData.Dotation_Initiale == ""){
return "Aucune procedure"
  }
     else if( this.formData.Dotation_Initiale < 10000000){
        return "PSC Sans comité"
    }
    else if(this.formData.Dotation_Initiale < 30000000)
    {
return "PSC Avec comité"
    }
    else if(this.formData.Dotation_Initiale < 60000000 )
    {
return "PSL"
    }
    else if(this.formData.Dotation_Initiale < 100000000 )
    {
return "PSO"
    }
     else if(100000000 <= this.formData.Dotation_Initiale)
    {
return "AON ou AOI"
    }
   
  return null  


},
statutDeLigne(){

     if(this.formData.economique_id == ""){
       return "Aucune Ligne"
     }
     else if(this.formData.economique_id == this.CodeExempte(this.formData.economique_id))
      {
        return "Ligne exemptée"
      }
      
      return "Ligne à marché"
    },
//  lesClassDe3() { 
// const isClassDe3 = (code) => code.charAt(0) != "2" && code.charAt(0) != "6"; 
// return this.derniereNivoPlanBudgetaire.filter(x => isClassDe3(x.code));
//  },

afficheActiviteParAction() {
      return id => {
        if (id != null && id != "") {
          return this.afficheNiveauActivite.filter(element => element.parent == id);
        }
      };
    },

 codeBudgetGeneralModifier(){
        // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
       const ActiviteBudget = this.afficheNiveauActivite.find(serviceg => serviceg.id == this.editBudgetGeneral.activite_id)
  //   const sectionBudget = this.sections.find(serviceg => serviceg.id == this.formData.section_id)
  //  const programmeBudget = this.plans_programmes.find(serviceg => serviceg.id == this.formData.program_id)
  //    const uaBudget = this.uniteAdministratives.find(serviceg => serviceg.id == this.formData.ua_id)
  //   const fonctionnelBudget = this.plans_fonctionnels.find(serviceg => serviceg.id == this.formData.fonctionnel_id)
 const economiqueBudget = this.plans_budgetaires.find(chap => chap.id == this.editBudgetGeneral.economique_id)
     if(ActiviteBudget && economiqueBudget){
       return ActiviteBudget.code +" "+ economiqueBudget.code
     }

     return null
   },
 codeBudgetGeneral(){
      // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
       const ActiviteBudget = this.afficheNiveauActivite.find(serviceg => serviceg.id == this.formData.activite_id)
  //   const sectionBudget = this.sections.find(serviceg => serviceg.id == this.formData.section_id)
  //  const programmeBudget = this.plans_programmes.find(serviceg => serviceg.id == this.formData.program_id)
  //    const uaBudget = this.uniteAdministratives.find(serviceg => serviceg.id == this.formData.ua_id)
  //   const fonctionnelBudget = this.plans_fonctionnels.find(serviceg => serviceg.id == this.formData.fonctionnel_id)
 const economiqueBudget = this.plans_budgetaires.find(chap => chap.id == this.formData.economique_id)
     if(ActiviteBudget && economiqueBudget){
       return ActiviteBudget.code +" "+ economiqueBudget.code
     }

     return null
   },




//     codeBudgetGeneral(){
//       // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
//     const sectionBudget = this.sections.find(serviceg => serviceg.id == this.formData.section_id)
//    const programmeBudget = this.plans_programmes.find(serviceg => serviceg.id == this.formData.program_id)
//      const uaBudget = this.uniteAdministratives.find(serviceg => serviceg.id == this.formData.ua_id)
//     const fonctionnelBudget = this.plans_fonctionnels.find(serviceg => serviceg.id == this.formData.fonctionnel_id)
//  const economiqueBudget = this.plans_budgetaires.find(chap => chap.id == this.formData.economique_id)
//      if(sectionBudget && programmeBudget && uaBudget && fonctionnelBudget && economiqueBudget){
//        return sectionBudget.code_section +"-"+ programmeBudget.code +"-"+ uaBudget.code_ua +"-"+ fonctionnelBudget.code  +"-"+ economiqueBudget.code
//      }

//      return null
//    },

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
 Codeeconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
    CodeExempte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterligneExempter.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },
    
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
       testgdenature:this.codeGrdeNature,
       type_procedure:this.afficheLeNomDesProcedure
      
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
        testgdenature:this.codeGrdeNaturemodif,
       type_procedure:this.afficheLeNomDesProcedureModifier
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
  width: 95%;
  margin: 0 -47%;
}

</style>