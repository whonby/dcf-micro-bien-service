
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide gdtaille">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Budget Général</h3>
      </div>
      <div class="modal-body">
          
     
            <table class="table table-bordered table-striped">
                
                    <tr>
                        <td>
                                        <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls">
                                    <select v-model="formData.exercicebudget_id">
                                     
                                   <option
                                  v-for="exoBudget in exoEnCours"
                                  :key="exoBudget.id"
                                  :value="exoBudget.id"
                                >{{exoBudget.annee}}
                                </option>
                                    </select>
                                </div>
                                </div>

                                 <!-- <div class="control-group">
                  <label class="control-label">Année Budgetaire</label>

                     <div class="controls"   v-for="exoBudget in exoEnCours"
                                  :key="exoBudget.id"
                                  :value="exoBudget.id">
                    <input
                      type="text"
                  v-model="exoBudget.annee"
                      class="span"
                      placeholder="Saisir code Destination"
                      readonly
                    />
                  </div>
                  </div> -->
                        </td>
                        <td>
   <div class="control-group">
                                <label class="control-label">Type Unite administrative</label>
                                <div class="controls">
                                    <select v-model="formData.type_ua_id">
                                    <option
                                  v-for="typeua in type_Unite_admins"
                                  :key="typeua.id"
                                  :value="typeua.id"
                                >{{typeua.libelle}}
                                </option>
                                    </select>
                                </div>
                                </div>
                            
                                       
                        </td>
                         <td>

                            <div class="control-group">
                                <label class="control-label">Unite administrative</label>
                                <div class="controls">
                                    <select v-model="formData.ua_id">
                                  <option
                                  v-for="tua in typeUniteAdministrativeDynamiques(formData.type_ua_id)"
                                  :key="tua.id"
                                  :value="tua.id"
                                >{{tua.libelle}}
                                </option>
                                    </select>
                                </div>
                                </div>
                                        
                        </td>
                         <td>
                                      <div class="control-group">
                                <label class="control-label">Chapitre</label>
                                <div class="controls">
                                    <select v-model="formData1.chapitre_id">
                                    <option
                                  v-for="chap in UniteAdministrativeDynamiques(formData.ua_id)"
                                  :key="chap.id"
                                  :value="chap.id"
                                >{{chap.chpitr.code}}-{{chap.chpitr.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                                                  <!-- <div class="control-group">
                  <label class="control-label">Chapitre</label>

                     <div class="controls"   v-for="chap in UniteAdministrativeDynamiques(formData.ua_id)"
                                  :key="chap.id"
                                  :value="chap.id">
                    <input
                      type="text"
                  v-model="chap.chpitr.code"
                      class="span"
                      placeholder="Saisir code Destination"
                      readonly
                    />
                  </div>
                  </div> -->
                        </td>
                         <td>
                                  
                                    <div class="control-group">
                                <label class="control-label">Section</label>
                                <div class="controls">
                                    <select v-model="formData1.section_id">
                                    <option
                                  v-for="ua in UniteAdministrativeDynamiques(formData.ua_id)"
                                  :key="ua.id"
                                  :value="ua.id"
                                >{{ua.secti.code_section}}-{{ua.secti.nom_section}}
                                </option>
                                    </select>
                                </div>
                                </div>
                        </td>
                    </tr>


                    <!---2 ieme ligne---->
                <tr>
                        <td>
                                        <div class="control-group">
                                <label class="control-label">Plan Fonctionnel</label>
                                <div class="controls">
                                    <select v-model="formData1.planfonctionnel_id">
                                     <option
                                  v-for="planfonct in UniteAdministrativeDynamiques(formData.ua_id)"
                                  :key="planfonct.id"
                                  :value="planfonct.id"
                                >{{planfonct.planFont.code}}-{{planfonct.planFont.libelle}}
                                </option>
                                    </select>
                                </div>
                                </div>
                                 <!-- <div class="control-group">
                  <label class="control-label">Plan fonctionnel</label>

                     <div class="controls"   v-for="planfonct in UniteAdministrativeDynamiques(formData.ua_id)"
                                  :key="planfonct.id"
                                  :value="planfonct.id">
                    <input
                      type="text"
                  v-model="planfonct.planFonction.code"
                      class="span"
                      placeholder="Saisir code Destination"
                      readonly
                    />
                  </div>
                  </div> -->
                        </td>
                        <td>
                                      <div class="control-group">
                  <label class="control-label">Destination</label>

                     <div class="controls">
                    <input
                      type="text"
                  :value="codeDestination"
                      class="span"
                      placeholder="Saisir code Destination"
                      readonly
                    />
                  </div>
                  </div>
                        </td>
                         <td>
                             <div class="control-group">
                                <label class="control-label">Nature économique</label>
                                <div class="controls">
                                    <select v-model="formData.planbudgetaire_id">
                                    <option
                                  v-for="planbudget in derniereNivoPlanBudgetaire"
                                  :key="planbudget.id"
                                  :value="planbudget.id"
                                >{{planbudget.code}}-{{planbudget.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                        </td>
                         <td>
                           <div class="control-group">
                                <label class="control-label">Plan Programme</label>
                                <div class="controls">
                                    <select v-model="formData.planprogramme_id">
                                    <option
                                  v-for="planprog in plans_programmes"
                                  :key="planprog.id"
                                  :value="planprog.id"
                                >{{planprog.code}}-{{planprog.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                                         
                        </td>
                         <td>
                           <div class="control-group">
                  <label class="control-label">Imputation Budgetaire</label>
                
                  <div class="controls">
                    <input
                      type="text"
                  :value="codeImputationBudgetaire"
                      class="span"
                      placeholder="Saisir imputation budgetaire"
                      readonly
                    />
                  </div>
                  </div>
                                   
                        </td>
                    </tr>

                    <!---3 ieme ligne---->
                <tr>
                    <td>

                      <div class="control-group">
                                <label class="control-label">Sous Financement</label>
                                <div class="controls">
                                    <select v-model="formData.sousfinancement_id">
                                  <option
                                  v-for="sourcefinance in sources_financements"
                                  :key="sourcefinance.id"
                                  :value="sourcefinance.id"
                                >{{sourcefinance.code}}-{{sourcefinance.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                                       
                        </td>
                        <td >
                           <div class="control-group">
                                <label class="control-label">Type Financement</label>
                                <div class="controls">
                                    <select v-model="formData.typefinancement_id">
                                    <option
                                  v-for="typeFinance in sousFinancementDynamiques(formData.sousfinancement_id)"
                                  :key="typeFinance.id"
                                  :value="typeFinance.id"
                                >{{typeFinance.code}}-{{typeFinance.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                        </td>
                        <td>
                                        <div class="control-group">
                                <label class="control-label">Grande Nature Depense</label>
                                <div class="controls">
                                    <select v-model="formData.gdnaturedepense_id">
                                    <option
                                  v-for="nature in grandes_natures"
                                  :key="nature.id"
                                  :value="nature.id"
                                >{{nature.code}}-{{nature.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                        </td>
                        <td>
                                              <div class="control-group">
                  <label class="control-label">Date du jour</label>
                
                  <div class="controls">
                    <input
                      type="date"
                   v-model="formData.date_jour"
                      class="span"
                     
                    />
                  </div>
                  </div>
                        </td>
                         <td>
                              <div class="control-group">
                  <label class="control-label">Dotation</label>
                
                  <div class="controls">
                    <input
                      type="text"
                   v-model="formData.dotation"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div>
                  </div>
                        </td>
                        
                       
                    </tr>
            </table>
       
       
       
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterBudgetGeneralLocal(formData)"
          class="btn btn-primary"
          href="#"
        
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->
<div id="modificationModal" class="modal hide gdtaille">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Budget Général</h3>
      </div>
      <div class="modal-body">
          
     
            <table class="table table-bordered table-striped">
                
                    <tr>
                        <td>
                                        <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls">
                                    <select v-model="editBudgetGeneral.exercicebudget_id">
                                      <option>dddddd</option>
                                   <option
                                  v-for="exoBudget in exoEnCours"
                                  :key="exoBudget.id"
                                  :value="exoBudget.id"
                                >{{exoBudget.annee}}
                                </option>
                                    </select>
                                </div>
                                </div>

                                 <!-- <div class="control-group">
                  <label class="control-label">Année Budgetaire</label>

                     <div class="controls"   v-for="exoBudget in exoEnCours"
                                  :key="exoBudget.id"
                                  :value="exoBudget.id">
                    <input
                      type="text"
                  v-model="exoBudget.annee"
                      class="span"
                      placeholder="Saisir code Destination"
                      readonly
                    />
                  </div>
                  </div> -->
                        </td>
                        <td>
   <div class="control-group">
                                <label class="control-label">Type Unite administrative</label>
                                <div class="controls">
                                    <select v-model="editBudgetGeneral.type_ua_id">
                                    <option
                                  v-for="typeua in type_Unite_admins"
                                  :key="typeua.id"
                                  :value="typeua.id"
                                >{{typeua.libelle}}
                                </option>
                                    </select>
                                </div>
                                </div>
                            
                                       
                        </td>
                         <td>

                            <div class="control-group">
                                <label class="control-label">Unite administrative</label>
                                <div class="controls">
                                    <select v-model="editBudgetGeneral.ua_id">
                                  <option
                                  v-for="tua in typeUniteAdministrativeDynamiques(editBudgetGeneral.type_ua_id)"
                                  :key="tua.id"
                                  :value="tua.id"
                                >{{tua.libelle}}
                                </option>
                                    </select>
                                </div>
                                </div>
                                        
                        </td>
                         <td>
                                      <!-- <div class="control-group">
                                <label class="control-label">Chapitre</label>
                                <div class="controls">
                                    <select v-model="editBudgetGeneral1.chapitre_id">
                                    <option
                                  v-for="chap in UniteAdministrativeDynamiques(editBudgetGeneral.ua_id)"
                                  :key="chap.id"
                                  :value="chap.id"
                                >{{chap.chpitr.code}}-{{chap.chpitr.libelle}}</option>
                                    </select>
                                      <input
                      type="text"
                 
                      class="span"
                      placeholder="Saisir code Destination"
                      readonly
                    />
                                </div>
                                </div> -->
                                                  <div class="control-group">
                  <label class="control-label">Chapitre</label>

                     <div class="controls"   v-for="chap in UniteAdministrativeDynamiques(editBudgetGeneral.ua_id)"
                                  :key="chap.id"
                                  :value="chap.id">
                    <input
                      type="text"
                  v-model="chap.chpitr.code"
                      class="span"
                      placeholder="Saisir code Destination"
                      readonly
                    />
                  </div>
                  </div>
                        </td>
                         <td>
                                  
                                    <!-- <div class="control-group">
                                <label class="control-label">Section</label>
                                <div class="controls">
                                    <select v-model="editBudgetGeneral.section_id">
                                    <option
                                  v-for="ua in UniteAdministrativeDynamiques(editBudgetGeneral.ua_id)"
                                  :key="ua.id"
                                  :value="ua.id"
                                >{{ua.secti.code_section}}-{{ua.secti.nom_section}}
                                </option>
                                    </select>
                                </div>
                                </div> -->
                                  <div class="control-group">
                      <label class="control-label">Section</label>

                     <div class="controls"   v-for="ua in UniteAdministrativeDynamiques(editBudgetGeneral.ua_id)"
                                 :key="ua.id"
                                  :value="ua.id">
                    <input
                      type="text"
                  v-model="ua.secti.code_section"
                      class="span"
                      
                      readonly
                    />
                  </div>
                  </div>
                        </td>
                    </tr>


                    <!---2 ieme ligne---->
                <tr>
                        <td>
                                        <!-- <div class="control-group">
                                <label class="control-label">Plan Fonctionnel</label>
                                <div class="controls">
                                    <select v-model="editBudgetGeneral1.planfonctionnel_id">
                                     <option
                                  v-for="planfonct in UniteAdministrativeDynamiques(editBudgetGeneral.ua_id)"
                                  :key="planfonct.id"
                                  :value="planfonct.id"
                                >{{planfonct.planFont.code}}-{{planfonct.planFont.libelle}}
                                </option>
                                    </select>
                                </div>
                                </div> -->
                                 <div class="control-group">
                  <label class="control-label">Plan fonctionnel</label>

                     <div class="controls"   v-for="planfonct in UniteAdministrativeDynamiques(editBudgetGeneral.ua_id)"
                                  :key="planfonct.id"
                                  :value="planfonct.id">
                    <input
                      type="text"
                  v-model="planfonct.planFont.code"
                      class="span"
                      placeholder="Saisir code Destination"
                      readonly
                    />
                  </div>
                  </div>
                        </td>
                        <td>
                                      <div class="control-group">
                  <label class="control-label">Destination</label>

                     <div class="controls">
                    <input
                      type="text"
                  v-model="editBudgetGeneral.destination"
                      class="span"
                      placeholder="Saisir code Destination"
                      readonly
                    />
                  </div>
                  </div>
                        </td>
                         <td>
                             <div class="control-group">
                                <label class="control-label">Nature économique</label>
                                <div class="controls">
                                    <select v-model="editBudgetGeneral.planbudgetaire_id">
                                    <option
                                  v-for="planbudget in derniereNivoPlanBudgetaire"
                                  :key="planbudget.id"
                                  :value="planbudget.id"
                                >{{planbudget.code}}-{{planbudget.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                        </td>
                         <td>
                           <div class="control-group">
                                <label class="control-label">Plan Programme</label>
                                <div class="controls">
                                    <select v-model="editBudgetGeneral.planprogramme_id">
                                    <option
                                  v-for="planprog in plans_programmes"
                                  :key="planprog.id"
                                  :value="planprog.id"
                                >{{planprog.code}}-{{planprog.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                                         
                        </td>
                         <td>
                           <div class="control-group">
                  <label class="control-label">Imputation Budgetaire</label>
                
                  <div class="controls">
                    <input
                      type="text"
                      v-model="editBudgetGeneral.imputationbudgetaire"
                 
                      class="span"
                      placeholder="Saisir imputation budgetaire"
                      readonly
                    />
                  </div>
                  </div>
                                   
                        </td>
                    </tr>

                    <!---3 ieme ligne---->
                <tr>
                    <td>

                      <div class="control-group">
                                <label class="control-label">Sous Financement</label>
                                <div class="controls">
                                    <select v-model="editBudgetGeneral.sousfinancement_id">
                                  <option
                                  v-for="sourcefinance in sources_financements"
                                  :key="sourcefinance.id"
                                  :value="sourcefinance.id"
                                >{{sourcefinance.code}}-{{sourcefinance.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                                       
                        </td>
                        <td >
                           <div class="control-group">
                                <label class="control-label">Type Financement</label>
                                <div class="controls">
                                    <select v-model="editBudgetGeneral.typefinancement_id">
                                    <option
                                  v-for="typeFinance in sousFinancementDynamiques(editBudgetGeneral.sousfinancement_id)"
                                  :key="typeFinance.id"
                                  :value="typeFinance.id"
                                >{{typeFinance.code}}-{{typeFinance.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                        </td>
                        <td>
                                        <div class="control-group">
                                <label class="control-label">Grande Nature Depense</label>
                                <div class="controls">
                                    <select v-model="editBudgetGeneral.gdnaturedepense_id">
                                    <option
                                  v-for="nature in grandes_natures"
                                  :key="nature.id"
                                  :value="nature.id"
                                >{{nature.code}}-{{nature.libelle}}</option>
                                    </select>
                                </div>
                                </div>
                        </td>
                        <td>
                                              <div class="control-group">
                  <label class="control-label">Date du jour</label>
                
                  <div class="controls">
                    <input
                      type="date"
                   v-model="editBudgetGeneral.date_jour"
                      class="span"
                     
                    />
                  </div>
                  </div>
                        </td>
                         <td>
                              <div class="control-group">
                  <label class="control-label">Dotation</label>
                
                  <div class="controls">
                    <input
                      type="text"
                   v-model="editBudgetGeneral.dotation"
                      class="span"
                      placeholder="Saisir dotation"
                    />
                  </div>
                  </div>
                        </td>
                        
                       
                    </tr>
            </table>
       
       
       
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierBudgetGlobalLocal(editBudgetGeneral)"
          class="btn btn-primary"
          href="#"
        
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
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
            title="Budget General"
            :data="budgetGeneralUniteAdministrative"
            name="Budget General"
            worksheet="Budget General"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste du budget general</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding" 

            v-if="getterspersoBudgetGeneral.length
             && plans_programmes.length 
              && exercices_budgetaires.length 
               && grandes_natures.length 
               
                 && plans_budgetaires.length
                 && jointureUaChapitreSection.length
                  
                   && sources_financements.length
                    && types_financements.length
             && budgetGeneralUniteAdministrative.length
             ">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th title="Année Budgetaire">Année Budget</th>
                  <th title="Grande Nature Depense">Nature Depense</th>
                  <th>Section</th>
                  <th title="Plan programme">P.Programme</th>
                  <th>Destination</th>
                  <th>Nature Economique</th>
                   <th>Imputation Budget</th>
                  <th title="Sous Financement">S.Financement</th>
                   <th title="Type Financement">T.Financement</th>
                   <th>Date Saisir</th>
                   
                    <th>Dotation</th>
                  
                     <th>Action</th>
                   
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                    v-for="(bGeneral,index) in budgetGeneralUniteAdministrative"
                    :key="bGeneral.id"
                  >
                    <td
                      @dblclick="afficherModalModifierBudgetGeneral(index)"
                    >{{bGeneral.exoBudgetaire.annee || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBudgetGeneral(index)"
                    >{{bGeneral.grandeNatureDepense.libelle || 'Non renseigné'}}</td>
                     <td
                       @dblclick="afficherModalModifierBudgetGeneral(index)"
                    >{{bGeneral.uniteAdminist.secti.code_section || 'Non renseigné'}}</td> 
                    <td
                     
                    >{{bGeneral.planProgramme.code || 'Non renseigné'}}</td> 
                    <td
                       @dblclick="afficherModalModifierBudgetGeneral(index)"
                    >{{bGeneral.destination || 'Non renseigné'}}</td>
                    
                      <td
                       @dblclick="afficherModalModifierBudgetGeneral(index)"
                    >{{bGeneral.planBudget.code || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBudgetGeneral(index)"
                    >{{bGeneral.imputationbudgetaire || 'Non renseigné'}}</td>
                      <td
                    
                    >{{bGeneral.sousFinancement.code || 'Non renseigné'}}</td> 
                     <td
                    
                    >{{bGeneral.typeFinancement.libelle || 'Non renseigné'}}</td>
                     
  
                   <!-- <td
                    
                    >{{bGeneral.chapit.code || 'Non renseigné'}}</td> -->
                     <!-- <td
                    
                    >{{bGeneral.planFont.code || 'Non renseigné'}}</td> -->
                    
                    
                
                      
                      <td
                      @dblclick="afficherModalModifierBudgetGeneral(index)"
                    >{{formaterDate(bGeneral.date_jour) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierBudgetGeneral(index)"
                    >{{formatageSomme(bGeneral.dotation)|| 'Non renseigné'}}</td>
                    <td>
                       <!-- <router-link
                        :to="{name : 'detailBudgetGeneral', params: {id:bGeneral.id}}"
                        class="btn btn-default"
                        title="Detail Immobilisation"
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link> -->
                      <button class="btn btn-danger" @click="supprimerBudgetGeneral(bGeneral.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td> 
                  </tr> 
                    <tr
                   
                  >
                   <td></td>
                    <td></td>
                    <td></td>
                    <td ></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style="font-weight:bold;">Dotation Total</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(SommeTotalBudgetDesUa))}}</td>
                      <td></td>

                  </tr> 
                </tbody>
              </table>
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../src/Repositories/Repository";
export default {
  name:'typetext',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      json_fields: {
        ANNEE: "exoBudgetaire.annee",
        GRANDE_NATURE_DEPENSE: "grandeNatureDepense.libelle",
        SECTION: "uniteAdminist.secti.code_section",
        PLAN_PROGRAMME: "planProgramme.code",
        DESTINATION: "destination",
        NATURE_ECONOMIQUE: "planBudget.code",
        IMPUTATION_BUDGETAIRE: "imputationbudgetaire",
        SOUS_FINANCEMENT: "sousFinancement.code",
        TYPE_FINANCEMENT: "typeFinancement.libelle",
         DOTATION: "dotation",
      },
      formData: {
        type_ua_id:""
      },
      formData1: {
         chapitre_id: "",
        planfonctionnel_id: ""
      },
       editBudgetGeneral1: {
         chapitre_id: "",
        planfonctionnel_id: ""
      },
      editBudgetGeneral: {
         code: "",
        libelle: ""
      },
      search: ""
    };
  },
// created() {
//     this.formData = this.budgetGeneralUniteAdministrative.find(
//       bGeneral => bGeneral.id == this.$route.params.id
//     )
//     },
  computed: {
    ...mapGetters("planification_budgetaire", ["budgetGeneral","getterspersoBudgetGeneral","budgetGeneralUniteAdministrative","SommeTotalBudgetDesUa"]),
       ...mapGetters("parametreGenerauxAdministratif", ["plans_programmes","exercices_budgetaires","type_Unite_admins","chapitres","sections","grandes_natures"]),
     ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives","jointureUaChapitreSection"]),
    ...mapGetters("parametreGenerauxFonctionnelle", ["plans_fonctionnels"]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", ["sources_financements","types_financements"]),
exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
    UniteAdministrativeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.jointureUaChapitreSection.filter(
            element => element.id == id
          );
        }
      };
    },
     typeUniteAdministrativeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.jointureUaChapitreSection.filter(
            element => element.type_ua_id == id
          );
        }
      };
    },
    sousFinancementDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.types_financements.filter(
            element => element.source_financement_id == id
          );
        }
      };
    },
    codeDestination(){
      //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
     const chapitre = this.jointureUaChapitreSection.find(chap => chap.id == this.formData1.chapitre_id)
    const planfonctionnel = this.jointureUaChapitreSection.find(fonct => fonct.id == this.formData1.planfonctionnel_id)

     if(chapitre && planfonctionnel ){
       return chapitre.chpitr.code 
       + planfonctionnel.planFont.code
     }

     return null
   },
//  codeDestinationModifier(){
//       //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
//      const chapitre = this.jointureUaChapitreSection.find(chap => chap.id == this.editBudgetGeneral1.chapitre_id)
//     const planfonctionnel = this.jointureUaChapitreSection.find(fonct => fonct.id == this.editBudgetGeneral1.planfonctionnel_id)

//      if(chapitre && planfonctionnel ){
//        return chapitre.chpitr.code 
//        + planfonctionnel.planFont.code
//      }

//      return null
//    },

   codeImputationBudgetaire(){
    const section = this.jointureUaChapitreSection.find(sect => sect.id == this.formData1.section_id)
    const planprogrmme = this.plans_programmes.find(prog => prog.id == this.formData.planprogramme_id)
const chapitre = this.jointureUaChapitreSection.find(chap => chap.id == this.formData1.chapitre_id)
const planfonctionnel = this.jointureUaChapitreSection.find(fonct => fonct.id == this.formData1.planfonctionnel_id)
 const planBudgetaire = this.plans_budgetaires.find(budget => budget.id == this.formData.planbudgetaire_id)
     if(section 
     && planprogrmme 
    && chapitre 
     && planfonctionnel 
    && planBudgetaire
    ){
       return section.secti.code_section + 
       planprogrmme.code 
       + chapitre.chpitr.code 
      + planfonctionnel.planFont.code 
      + planBudgetaire.code
     }

     return null
   },



//       codeImputationBudgetaireModifier(){
//     const section = this.jointureUaChapitreSection.find(sect => sect.id == this.editBudgetGeneral1.section_id)
//     const planprogrmme = this.plans_programmes.find(prog => prog.id == this.editBudgetGeneral.planprogramme_id)
// const chapitre = this.jointureUaChapitreSection.find(chap => chap.id == this.editBudgetGeneral1.chapitre_id)
// const planfonctionnel = this.jointureUaChapitreSection.find(fonct => fonct.id == this.editBudgetGeneral1.planfonctionnel_id)
//  const planBudgetaire = this.plans_budgetaires.find(budget => budget.id == this.editBudgetGeneral.planbudgetaire_id)
//      if(section 
//      && planprogrmme 
//     && chapitre 
//      && planfonctionnel 
//     && planBudgetaire
//     ){
//        return section.secti.code_section + 
//        planprogrmme.code 
//        + chapitre.chpitr.code 
//       + planfonctionnel.planFont.code 
//       + planBudgetaire.code
//      }

//      return null
//    },
  },
  methods: {
    ...mapActions("planification_budgetaire", [
      "getAllBudgetGeneral",
      "modifierBudgetGeneral",
      "ajouterBudgetGeneral",
      "supprimerBudgetGeneral"
    ]),
     afficherModalModifierBudgetGeneral(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editBudgetGeneral = this.budgetGeneralUniteAdministrative[index];
    },
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
      modifierBudgetGlobalLocal() {
      this.modifierBudgetGeneral(this.editBudgetGeneral);
this.$("#modificationModal").modal('hide');
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
       
    },
    // fonction pour vider l'input ajouter
    ajouterBudgetGeneralLocal() {
var nouvelObjet = {
        ...this.formData,
        destination: this.codeDestination,
        imputationbudgetaire: this.codeImputationBudgetaire,
        

      };
      this.ajouterBudgetGeneral(nouvelObjet);

      this.formData = {
        exercicebudget_id: "",
      gdnaturedepense_id: "",
      section_id: "",
      planprogramme_id: "",
      chapitre_id: "",
      planfonctionnel_id: "",
      planbudgetaire_id: "",
      imputationbudgetaire: "",
      sousfinancement_id: "",
      typefinancement_id: "",
      dotation: "",
      ua_id: "",
      date_jour: "",
      destination: "",
      type_ua_id:""
      };
    },
    // afficher modal de modification
    
    // fonction pour vider l'input modification
   
    // afficher modal de modification
    afficherModalDetailBudgetGeneral(id) {
      this.$router.push({
        path: "/Modifier_immobilisation/" + id
      });
    },
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    },
        formatageSomme: formatageSomme,
        
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    
  }
};
</script>

<style>

    .gdtaille{

        width: 90%;
        margin: 0 -45%;
        
    }

</style>