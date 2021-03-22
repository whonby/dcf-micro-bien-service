recupereMontantEmpruntTotal
<template>

<div class="container-fluid">
      <hr />
      <table class="table table-bordered table-striped">
        <tr>
          <td>
 <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
          </td>
          <!-- <td>
 <div  align="rigth" style="cursor:pointer;">
    <button class="btn btn-success" @click.prevent="afficherModalListePersonnel">Voir la Ventilation </button>
    
        </div>
          </td> -->
        </tr>
      </table>
      
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Ajouter la Ventilation du budget</h5>
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
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="INFORMATIONUA" class="tab-pane active">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION SUR UNITE ADMINISTRATIVE</a>
                      </li>
                    </ul>
                  </div>
                 <table class="table table-bordered table-striped" style="border:1px solid #000">
                     
 <!-- <td>
                       <div class="control-group">
                <label class="control-label">Exercice</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  :value="this.anneeAmort"
                    class="span"
                    readonly
                  />
                </div>
              </div>
                  </td>    -->
                  
                     <tr>
 
                    <td colspan="">
              <div class="control-group">
                <label class="control-label">Exercice Budgetaire</label>
                <div class="controls">
                  <select v-model="formData78.exo_id" class="span" style="border:1px solid #000">
                    
                     <option
                        v-for="typeFact in exercices_budgetaires"
                        :key="typeFact.id"
                        :value="typeFact.annee"
                      >{{typeFact.annee}}</option>
                  </select>
                </div>
              </div>
              
                     </td>
                  
                  <td>
                       <div class="control-group">
                <label class="control-label">Section</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleSection(idSection(formData.ligne_budgetaire_parent_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
                  </td>
              <td>
              <div class="control-group">
                <label class="control-label">Programme</label>
                <div class="controls">
                   <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleProgramme(idProgramme(formData.ligne_budgetaire_parent_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
                     </td>
                     <td colspan="">
              <div class="control-group">
                <label class="control-label">Action</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleAction(idAction(formData.ligne_budgetaire_parent_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td> 
                     </tr>
                     <tr>
 
                    <!-- <td>
                       <div class="control-group">
                <label class="control-label">Type Financement</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                 :value="LibelleTypeFinancement(idTypeFinancement(formData.ligne_budgetaire_parent_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
                  </td>   
                  
                  <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Bailleur</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="LibelleSourceFinancement(idSourceFinancement(formData.ligne_budgetaire_parent_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
                  </td> -->
              <td>
              <div class="control-group">
                <label class="control-label">Grande Nature</label>
                <div class="controls">
                   <input
                    type="text"
                    style="border:1px solid #000"
                   :value="LibelleGrandeNature(idGrandeNature(formData.ligne_budgetaire_parent_id))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
                     </td>
                      <td>
                       <div class="control-group">
                <label class="control-label">{{formData.uniteadministrative_id}}Unite administrative{{numeroOrdreSousFinancement(formData.uniteadministrative_id)}} <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="formData.uniteadministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
              <code style="color:red;font-size:12px" v-if="formData.uniteadministrative_id==''">Veuillez renseigner ce champ</code>
                  </td>
                  
                   <td colspan="3">
              <div class="control-group">
                <label class="control-label">Activité</label>
                <div class="controls">
                  <select v-model="formData.activite_id" class="span" style="border:1px solid #000">
                    <option></option>
                     <option
                        v-for="typeFact in LibelleActivite(formData.uniteadministrative_id,formData78.exo_id)"
                        :key="typeFact[0].id"
                        :value="typeFact[0].activite_id"
                      >{{NomActivite(typeFact[0].activite_id)}}</option>
                  </select>
                </div>
              </div>
              
                     </td>
                   
                      
                     </tr>
                     
               
                     
                     <template v-if="this.comparaison(this.formData.activite_id)==this.formData.activite_id">
                        <tr>
 <td colspan="">
              <div class="control-group">
                <label class="control-label">Sous Budget</label>
                <div class="controls">
                  <select v-model="formData10.sous_budget_id" class="span" style="border:1px solid #000">
                    <option valu="0"></option>
                     <option
                        v-for="typeFact in afficheLesSousBudget(formData.uniteadministrative_id,formData.activite_id)"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.activite_enfant}}</option>
                  </select>
                  
                </div>
              </div>
              
                     </td>
                       <td colspan="2">
              <div class="control-group">
                <label class="control-label">Ligne budgetaire</label>
                <div class="controls">
                 
 <select v-model="formData.ligne_budgetaire_parent_id" class="span" style="border:1px solid #000" >
                    
                     <option
                        v-for="typeFact in afficheLesSousBudgetLigneBudgetaire(formData10.sous_budget_id)"
                        :key="typeFact.id"
                        :value="typeFact.ligneeconomique_id"
                      >{{libelleLigneEconomique(typeFact.ligneeconomique_id)}}</option>
                  </select>
              
                </div>
              </div>
              
                     </td>
                     <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Dotation(n)</label>
                <div class="controls">
                   <money :value="videLeChamps"  readOnly  style="text-align:left;color:red"  class="span"></money>
                 
                </div>
              </div>
                  </td>   
                     </tr>

                     </template>
                    <template v-else>
                        <tr>
 <td colspan="">
              <div class="control-group">
                <label class="control-label">Sous Budget</label>
                <div class="controls">
                  <select v-model="formData10.sous_budget_id" class="span" style="border:1px solid #000">
                    <option></option>
                     <option
                        v-for="typeFact in afficheLesSousBudget(formData.uniteadministrative_id,formData.activite_id)"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.activite_enfant}}</option>
                  </select>
                  
                </div>
              </div>
              
                     </td>
                       <td colspan="2">
              <div class="control-group">
                <label class="control-label">Ligne budgetaire</label>
                <div class="controls">
                 
 
                 <select v-model="formData.ligne_budgetaire_parent_id" class="span" style="border:1px solid #000" >
                    
                     <option
                        v-for="typeFact in RecupererlibelleLigneEconomique(formData.activite_id)"
                        :key="typeFact[0].id"
                        :value="typeFact[0].economique_id"
                      >{{libelleLigneEconomique(typeFact[0].economique_id)}}</option>
                  </select>


                 
                </div>
              </div>
              
                     </td>
                     <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Dotation(n)</label>
                <div class="controls">
                   
                 <money :value="RecuppererLaDotationInitial(formData.ligne_budgetaire_parent_id)"  readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td>   
                     </tr>

                     </template>
                    
                 </table>
                
                 <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION BUDGET PRECEDENT</a>
                      </li>
                    </ul>
                  </div>
                  <table class="table table-bordered table-striped" style="border:1px solid #000">
                     
                     <tr>
 
             
                     <td >
                            <div class="control-group">
                <label class="control-label">Exercice(n-1)</label>
                <div class="controls">
                 
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="recupererAnneePrecedant"
                    class="span"
                    readonly
                  />
                </div>
              </div>
                        </td>
                        <!-- <td>
                       <div class="control-group">
                <label class="control-label">Dotation</label>
                <div class="controls">
                   <money :value="DotationRestantAnneePrecedant(formData.uniteadministrative_id)"  readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td> -->
                   <!-- <td>
                       <div class="control-group">
                <label class="control-label">Dotation Executé</label>
                <div class="controls">
                   <money :value="CumulMontantConsommeParUaPrecedent(formData.uniteadministrative_id)"  readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td> -->
                  <td>
                       <div class="control-group">
                <label class="control-label">Dotation Disponible (n-1)(a nouveau manuel)</label>
                <div class="controls">
                   <money v-model="formData.montant_saisir"    style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td>
                   <td>
                       <div class="control-group">
                <label class="control-label">Dotation Disponible(n-1)(a nouveau Automatique)</label>
                <div class="controls">
                   <money :value="MontantDisponibleParUa"  readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td>
                 
                     </tr>
                  
                     
                 </table>
                  
                 <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION SUR L'ECLATEMENT DU BUDGET</a>
                      </li>
                    </ul>
                  </div>
                  <table class="table table-bordered table-striped" style="border:1px solid #000">
                     <tr>
 
                    <td>
                       <div class="control-group">
                <label class="control-label">Type de Financement  <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="types_financements"
                                                   v-model="formData1.type_financement_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
               <code style="color:red;font-size:12px" v-if="formData1.type_financement_id==''">Veuillez renseigner ce champ</code>
                  </td>   
                  
                  <td colspan="">
                     <div class="control-group">
                <label class="control-label">Bailleur</label>
                <div class="controls">
                 
 
                 <select v-model="formData.source_financement_id" class="span" style="border:1px solid #000" >
                    
                     <option
                        v-for="typeFact in afficheBailleurPaUa(formData.uniteadministrative_id,formData1.type_financement_id)"
                        :key="typeFact.id"
                        :value="typeFact.sous_financement_id"
                      >{{libelleSousFinancement(typeFact.sous_financement_id)}}</option>
                  </select>


                 
                </div>
              </div>
                       <!-- <div class="control-group">
                <label class="control-label">Bailleur</label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="listeActiviteUA"
                                                   v-model="formData.source_financement_id"
                                                   option-value="sous_financement_id"
                                                   option-text="lib"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div> -->
                  </td>
                  
                   <td colspan="">
                       <div class="control-group">
                <label class="control-label">Grande nature</label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="grandes_natures"
                                                   v-model="formData.grandenature_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
                  </td>
                        <td>
                       <div class="control-group">
                <label class="control-label">code Ligne Economique <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="recuppererLeDernierNiveau"
                                                   v-model="formData1.ligneeconomique_id"
                                                   option-value="id"
                                                   option-text="code"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
              <code style="color:red;font-size:12px" v-if="formData1.ligneeconomique_id==''">Veuillez renseigner ce champ</code>
                  </td>   
                     </tr>
                     <tr>
                       
                  
                  <td colspan="4">
                       <div class="control-group">
                <label class="control-label">Libelle ligne budgetaire</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleLigneEconomique(formData1.ligneeconomique_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
                  </td>
                     </tr>
                     <tr>
                        <td>
                       <div class="control-group">
                <label class="control-label">Montant du Bailleur Budget general(n)</label>
                <div class="controls">
                   <money :value="RecupererMontantParBailleur"  readOnly  style="text-align:left;color:red;font-size:16px"  class="span"></money>
                 <!-- <code style="color:red;font-size:12px" v-if="MontantParBailleur == 0">Montant Budget est Saturé</code> -->
                </div>
              </div>
                  </td>
                  <td>
                       <div class="control-group">
                <label class="control-label">Montant du Bailleur Budget Eclate (n-1)</label>
                <div class="controls">
                   <money :value="DotationBailleurParLigneEconomique"  readOnly  style="text-align:left;color:red;font-size:16px"  class="span"></money>
                 <!-- <code style="color:red;font-size:12px" v-if="MontantParBailleur == 0">Montant Budget est Saturé</code> -->
                </div>
              </div>
                  </td>
             <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Montant a Eclaté (n+(n-1))</label>
                <div class="controls">
                   <money :value="resteAEclate"  readOnly   style="text-align:left;color:red;font-size:16px"  class="span"></money>
                 <code style="color:red;font-size:12px" v-if="MontantAEclate == 0">Montant Budget est Saturé</code>
                </div>
              </div>
                  </td>
                     </tr>
                     <tr>
 
                      
                  
                  <td colspan="">
                       <div class="control-group">
                <label class="control-label">Report</label>
                <div class="controls">
                  <money   v-model="formData1.report"  style="text-align:left;color:red"  class="span" :readOnly="grise"></money>
                </div>
              </div>
                  </td>
             
                     <td colspan="">
                       <div class="control-group">
                <label class="control-label">Dotation</label>
                <div class="controls">
                  <money  v-model="formData1.dotation_nouvelle"   style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td>
                  <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Dotation Total</label>
                <div class="controls">
                  <money   :value="dotationTotal"  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td>
                     </tr>
                    
                 </table>
                 <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                        
                          class="btn btn-primary"
                          @click.prevent="EnregistrerTout()"
                        >{{numeroOrdreSousFinancement(this.formData.uniteadministrative_id)}}Valider{{formData.activite_id}}</a>
                        <a
                          @click.prevent="pagePrecedent()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                  <!-- <div align="left">

      <button class="btn btn-info"  @click.prevent="apercuFacture">Aperçu Ventilation budget  {{this.anneeAmort}} </button>


                            </div> -->
                            <!-- <div id="printMe">
                               <template v-if="this.comparaison(this.formData.activite_id)==this.formData.activite_id">
                               <table class="table table-bordered table-striped">
                <thead>
                   <tr>
                    <th></th>
                    <th colspan="3" style="font-size:14px;color:#000">BUDGET</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <th style="font-size:14px;color:#000">LIGNE BUDGETAIRE</th>
                     <th style="font-size:14px;color:#000">ETAT</th>
                    <th style="font-size:14px;color:#000">DON</th>
                    <th style="font-size:14px;color:#000">EMPRUNT</th>
                    <th style="font-size:14px;color:#000">BUDGET TOTAL</th>
                    <th style="font-size:14px;color:#000">SUPPRIMER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeBudgetaireEclateSousBudget(formData10.sous_budget_id,formData.activite_id)" :key="type.id">
                    <td style="font-size:12px;color:#000;text-align:center">{{libelleLigneEconomique(type.ligneeconomique_id) || 'Non renseigné'}}</td>
                      <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.tresor)) || 'Non renseigné'}}</td>
                                         <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.don)) || 'Non renseigné'}}</td>
                   <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.emprunt)) || 'Non renseigné'}}</td>
                    <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.don)+parseFloat(type.emprunt)+parseFloat(type.tresor)) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclate(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style="font-weight:bold;font-size:14px;text-align:center;">TOTAL</td>
                    <td style="text-align:center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(TotalBudget))}}</td>
                    <td></td>
                    
                  </tr>
                </tbody>
              </table>
                               </template>
                               <template v-else>
                                  <table class="table table-bordered table-striped">
                <thead>
                   <tr>
                    <th></th>
                    <th colspan="3" style="font-size:14px;color:#000">BUDGET</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <th style="font-size:14px;color:#000">LIGNE BUDGETAIRE</th>
                     <th style="font-size:14px;color:#000">ETAT</th>
                    <th style="font-size:14px;color:#000">DON</th>
                    <th style="font-size:14px;color:#000">EMPRUNT</th>
                    <th style="font-size:14px;color:#000">BUDGET TOTAL</th>
                    <th style="font-size:14px;color:#000">SUPPRIMER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeBudgetaireEclate(formData.uniteadministrative_id,formData.activite_id)" :key="type.id">
                    <td style="font-size:12px;color:#000;text-align:center">{{libelleLigneEconomique(type.ligneeconomique_id) || 'Non renseigné'}}</td>
                      <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.tresor)) || 'Non renseigné'}}</td>
                                         <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.don)) || 'Non renseigné'}}</td>
                   <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.emprunt)) || 'Non renseigné'}}</td>
                    <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.don)+parseFloat(type.emprunt)+parseFloat(type.tresor)) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclate(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style="font-weight:bold;font-size:14px;text-align:center;">TOTAL</td>
                    <td style="text-align:center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(TotalBudget))}}</td>
                    <td></td>
                    
                  </tr>
                </tbody>
              </table>
                               </template>
                
                            </div> -->
                    </div>
                  </div>

                  
                  <br />
                  
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

    import {mapGetters,mapActions} from 'vuex'
    import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
    import {formatageSomme} from "@/Repositories/Repository"
import {  ModelListSelect } from 'vue-search-select'
    import moment from 'moment';
import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
components: {
    
    ModelListSelect,
     
  },
        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],
                
          info_pdf:false,
                formData:{
                 activite_id:0,
                 uniteadministrative_id:"",
                 montant_saisir:""
                },
                
                editpiece:{},
                formData5:{
                  numeroDemande:""
                },
                formData10:{
sous_budget_id:0
                },
 formMandat:{
                 
                },
                formData78:{},
                formData2:{
                 exo:"",
                 typeeclatement:"",
                 ligne_parent_id:"",
                 budgetaire_parent_id:""
                },
                formData1:{
                  type_financement_id:"",
                  ligneeconomique_id:""
                },
                message_mandater:""
            };
        },

        created() {
          
        },
        computed: {
           admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["getterUniteAdministrativeBailleur","getSousBudget","getdecisionBudgetEclate","groupeParBAILLER","budgetEclate","groupeLigneEconomiqueBudget","groupeActiviteBudget","budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires","structures_budgetaires","getterTousActivite","getterTousPlanBudgetaire"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["gettersgestionOrdrePaiement","getMandatPersonnaliserVise","typeFactures","gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),
...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      "services_gestionnaires",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',"types_financements"]),

libelleSousFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
afficheBailleurPaUa(){
  

return (id,id3)=> {
        if (id != null && id != "" && id3 != null && id3 != "") {
           return this.getterUniteAdministrativeBailleur.filter(item=>item.ua_id==id && item.type_financement_id==id3);

   
        }
      };



},

listeActiviteUA(){
                return ua_id=>{
                    if(ua_id!=""){
                        let collection=[]
                        let vm=this
                        let objeBudget=this.getterUniteAdministrativeBailleur.filter(item=>item.ua_id==this.formData.uniteadministrative_id && item.type_financement_id==this.formData1.type_financement_id)
                        objeBudget.forEach(function (val) {
                            let activite=vm.getterUniteAdministrativeBailleur.find(item=>item.type_financement_id==val.type_financement_id)
                            let ob=collection.find(item=>item.id==val.type_financement_id)
                            if(ob==undefined){
                                let act={
                                    ...activite,
                                    lib:activite.libelle
                                }
                                collection.push(act)
                            }
                        })
                        return collection
                    }
                    return []
                }
            },

MontantParBailleurBudgetEclate() {
      return (id,id3,id1,id2)=> {
        if (id != null && id != "" && id3 != null && id3 != "" && id1 != null && id1 != "" && id2 != null && id2 != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.ligneeconomique_id == id3 && qtreel.type_financement_id == id1 && qtreel.source_financement_id == id2 &&  qtreel.annebudgetaire==this.recupererAnneePrecedant).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

   
        }
      };
    },
MontantParBailleurConsommer() {
      return (id,id3,id1,id2)=> {
        if (id != null && id != "" && id3 != null && id3 != "" && id1 != null && id1 != "" && id2 != null && id2 != "") {
           return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.ligne_economique_id == id3 && qtreel.type_financement_id == id1 && qtreel.source_financement_id == id2 &&  qtreel.exercice==this.recupererAnneePrecedant).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

   
        }
      };
    },



DotationBailleurParLigneEconomique(){
  return parseFloat(this.MontantParBailleurBudgetEclate(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id,this.formData1.type_financement_id,this.formData.source_financement_id))-parseFloat(this.MontantParBailleurConsommer(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id,this.formData1.type_financement_id,this.formData.source_financement_id))
},



resteAEclate(){
  return parseFloat(this.RecuppererMontantSansActivite)-parseFloat(this.dotationTotal)-parseFloat(this.cumulDotationParUaBudgetEclate(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id,this.formData1.type_financement_id,this.formData.source_financement_id))
},


RecuppererMontantSansActivite(){
  if(this.formData.activite_id==0){
    return parseFloat(this.formData.montant_saisir)+parseFloat(this.MontantDisponibleParUa)

  }
  else if(this.formData.uniteadministrative_id!=''){
    return parseFloat(this.DotationBailleurParLigneEconomique)+parseFloat(this.RecupererMontantParBailleur)+parseFloat(this.formData.montant_saisir)+parseFloat(this.MontantDisponibleParUa) 
  }
  else {
    return 0
  }
},

MontantAEclate(){

return parseFloat(this.DotationRestantAnneePrecedant(this.formData.uniteadministrative_id))+parseFloat(this.RecupererMontantParBailleur)-parseFloat(this.RecupererMontantParBailleurCumull)-parseFloat(this.dotationTotal)

},
cumulDotationParUaBudgetEclate() {
      return (id,id1,id2,id3) => {
        if (id != null && id != "" && id1 != null && id1 != "" && id2 != null && id2 != "" && id3 != null && id3 != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.ligneeconomique_id == id1 && qtreel.type_financement_id == id2 && qtreel.source_financement_id == id3 && qtreel.annebudgetaire==this.formData78.exo_id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },


 TotalBudget(){
      if(this.comparaison(this.formData.activite_id)==this.formData.activite_id){
return parseFloat(this.recupereMontantEtatTotalSousBudget(this.formData10.sous_budget_id))+parseFloat(this.recupereMontantDonTotalSousBudget(this.formData10.sous_budget_id))+parseFloat(this.recupereMontantEmpruntTotalSousBudget(this.formData10.sous_budget_id))
      }
      else{
return parseFloat(this.recupereMontantEtatTotal(this.formData.uniteadministrative_id))+parseFloat(this.recupereMontantDonTotal(this.formData.uniteadministrative_id))+parseFloat(this.recupereMontantEmpruntTotal(this.formData.uniteadministrative_id))
      }
      
    },




     cumulDotationParUa() {
      return (id,id1,id2,id3) => {
        if (id != null && id != "" && id1 != null && id1 != "" && id2 != null && id2 != "" && id3 != null && id3 != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.ligne_budgetaire_parent_id == id1 && qtreel.type_financement_id == id2 && qtreel.source_financement_id == id3 && qtreel.annebudgetaire==this.formData78.exo_id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    cumulDotationParUaSousBudget() {
      return (id,id1,id2,id3) => {
        if (id != null && id != "" && id1 != null && id1 != "" && id2 != null && id2 != "" && id3 != null && id3 != "") {
           return this.budgetEclate.filter(qtreel => qtreel.sous_budget_id == id && qtreel.ligne_budgetaire_parent_id == id1 && qtreel.type_financement_id == id2 && qtreel.source_financement_id == id3 && qtreel.annebudgetaire==this.formData78.exo_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
     RecupererMontantParBailleurCumull(){
      if(this.comparaison(this.formData.activite_id)==this.formData.activite_id){
         return this.cumulDotationParUaSousBudget(this.formData10.sous_budget_id,this.formData.ligne_budgetaire_parent_id,this.formData1.type_financement_id,this.formData.source_financement_id)

      }
      else{
       
return this.cumulDotationParUa(this.formData.uniteadministrative_id,this.formData.ligne_budgetaire_parent_id,this.formData1.type_financement_id,this.formData.source_financement_id)
      }
      
    },
     RecupererMontantParBailleur(){
      if(this.comparaison(this.formData.activite_id)==this.formData.activite_id){
return this.MontantParBailleurSousBudget(this.formData10.sous_budget_id,this.formData.ligne_budgetaire_parent_id,this.formData1.type_financement_id,this.formData.source_financement_id)
      }
      else{
return this.MontantParBailleur(this.formData.uniteadministrative_id,this.formData.ligne_budgetaire_parent_id,this.formData1.type_financement_id,this.formData.source_financement_id)
      }
      
    },




//formatageSomme(parseFloat(recupereMontantDon(type[0].ligneeconomique_id))+parseFloat(recupereMontantEmprunt(type[0].ligneeconomique_id)))

MontantParBailleur() {
      return (id,id3,id1,id2)=> {
        if (id != null && id != "" && id3 != null && id3 != "" && id1 != null && id1 != "" && id2 != null && id2 != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.ua_id == id && qtreel.economique_id == id3 && qtreel.typefinancement_id == id1 && qtreel.sourcefinancement_id == id2 &&  qtreel.exercicebudget_id==this.anneeAmort && qtreel.actived==1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.cp), 0).toFixed(0);

   
        }
      };
    },

MontantParBailleurSousBudget() {
      return (id,id3,id1,id2)=> {
        if (id != null && id != "" && id3 != null && id3 != "" && id1 != null && id1 != "" && id2 != null && id2 != "") {
           return this.getSousBudget.filter(qtreel => qtreel.id == id && qtreel.ligneeconomique_id == id3 && qtreel.type_financement_id == id1 && qtreel.source_financement_id == id2 &&  qtreel.execice==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_budgetaire), 0).toFixed(0);

   
        }
      };
    },


LibelleTypeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.types_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    LibelleSourceFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    LibelleGrandeNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
idTypeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.typefinancement_id
      }
      return 0
        }
      };
    },
    idSourceFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.sourcefinancement_id
      }
      return 0
        }
      };
    },
    idGrandeNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.gdenature_id
      }
      return 0
        }
      };
    },
comparaison() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.activite_parent_id == id);

      if (qtereel) {
        return qtereel.activite_parent_id
      }
      return 0
        }
      };
    },
videLeChamp(){
if(this.formData10.sous_budget_id==''){
  return this.formData.ligne_budgetaire_parent_id==""
}
else{
  return this.formData.ligne_budgetaire_parent_id
}
},
    
   afficheLesSousBudget() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.getSousBudget.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.activite_parent_id==id1 && qtreel.execice==this.formData78.exo_id);

     
      
        }
      };
    },
    afficheLesSousBudgetLigneBudgetaire() {
      return (id1) => {
        if (id1 != null && id1 != "") {
           return this.getSousBudget.filter(qtreel => qtreel.id==id1);

     
      
        }
      };
    },




recupereMontantEtat() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==14 && qtreel.annebudgetaire==this.formData78.exo_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDon() {
      return id => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==13  && qtreel.annebudgetaire==this.formData78.exo_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmprunt() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==15  && qtreel.annebudgetaire==this.formData78.exo_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },


recupereMontantEtatTotal() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.formData78.exo_id && qtreel.sous_budget_id == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDonTotal() {
      return id => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.formData78.exo_id && qtreel.sous_budget_id == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmpruntTotal() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.formData78.exo_id && qtreel.sous_budget_id == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },

recupereMontantEtatTotalSousBudget() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.sous_budget_id == id && qtreel.annebudgetaire==this.formData78.exo_id && qtreel.sous_budget_id != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDonTotalSousBudget() {
      return id => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(qtreel => qtreel.sous_budget_id == id && qtreel.annebudgetaire==this.formData78.exo_id && qtreel.sous_budget_id != 0 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmpruntTotalSousBudget() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.sous_budget_id == id && qtreel.annebudgetaire==this.formData78.exo_id && qtreel.sous_budget_id != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },

listeBudgetaireEclateSousBudget() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.budgetEclate.filter(qtreel => qtreel.sous_budget_id == id && qtreel.activite_id == id1 && qtreel.annebudgetaire==this.formData78.exo_id && qtreel.sous_budget_id != 0 );

        }
      };
    },
listeBudgetaireEclate() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.activite_id == id1 && qtreel.annebudgetaire==this.formData78.exo_id && qtreel.sous_budget_id == 0);

        }
      };
    },
listeDesBudgetaireEclate() {
      return id => {
        if (id != null && id != "") {
           return this.groupeParBAILLER.filter(qtreel => qtreel[0].uniteadministrative_id == id && qtreel[0].annebudgetaire==this.formData78.exo_id );

        }
      };
    },



MontantDisponibleParUa(){
return parseFloat(this.DotationRestantAnneePrecedant(this.formData.uniteadministrative_id))-parseFloat(this.CumulMontantConsommeParUaPrecedent(this.formData.uniteadministrative_id))
},
     CumulMontantConsommeParUaPrecedent() {
      return id => {
        if (id != null && id != "") {
           return this.getMandatPersonnaliserVise.filter(qtreel => qtreel.ua_id == id && qtreel.exercice_budget==this.recupererAnneePrecedant ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);

        }
      };
    },







  DotationRestantAnneePrecedant() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.recupererAnneePrecedant ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },



    
dotationTotal(){
return parseFloat(this.formData1.report)+parseFloat(this.formData1.dotation_nouvelle)
},
recupererAnneePrecedant(){

        return parseFloat(this.anneeAmort)-1
   
   
},


grise(){
    return this.formData.typeeclatement == 1
},
griseExercice(){
    return this.formData2.typeeclatement != 1
},
griseLigne(){
    return this.formData2.typeeclatement !=1 && this.formData2.exo != ''
},
griseLigneBudgetaire(){
    return this.formData2.typeeclatement!=1 && this.formData2.ligne_parent_id ==''
},
recuppererLeDernierNiveau() {
      
           return this.plans_budgetaires.filter(qtreel => this.recupererStructure(qtreel.structure_budgetaire_id) == 6 );

      
       
    },

recupererStructure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau
      }
      return 0
        }
      };
    },

      libelleAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code
      }
      return 0
        }
      };
    },
    libelleProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    libelleSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section.concat('  ',qtereel.nom_section)
      }
      return 0
        }
      };
    },
    
    idSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.section_id
      }
      return 0
        }
      };
    },
    idProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.program_id
      }
      return 0
        }
      };
    },
idAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.action_id
      }
      return 0
        }
      };
    },
ActiviteCode() {
      
           return this.plans_activites.filter(qtreel => qtreel.parent != null );

      
       
    },

LibelleActivite() {
      return (id,id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
           return this.groupeActiviteBudget.filter(qtreel => qtreel[0].ua_id == id && qtreel[0].actived==1 && qtreel[0].exercicebudget_id==id2);

      
        }
      };
    },

      RecupererlibelleLigneEconomique() {
      return (id) => {
        if (id != null && id != "") {
           return this.groupeLigneEconomiqueBudget.filter(qtreel => qtreel[0].activite_id == id);

      
        }
      };
    },
     lignePrecedent() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.activite_id == id && qtreel.actived==0);

      
        }
      };
    },
    ActivitePrecedant() {
     
           return this.budgetGeneral.filter(qtreel => qtreel.exercicebudget_id == this.recupererAnneePrecedant && qtreel.actived==0 && qtreel.ua_id==this.idUniteAdministrative(this.formData.activite_id));

      
      
    },
    // RecuppererLaDotation() {
    //   return (id) => {
    //     if (id != null && id != "") {
    //        return this.budgetGeneral.filter(qtreel => qtreel.id == id && qtreel.actived==1);

      
    //     }
    //   };
    // },
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    videLeChamps(){
      if(this.formData10.sous_budget_id!=""){
return this.RecuppererLaDotation(this.formData10.sous_budget_id,this.formData.ligne_budgetaire_parent_id)
      }
      return 0
    },
    RecuppererLaDotation() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.getSousBudget.find(qtreel =>qtreel.id == id  && qtreel.ligneeconomique_id == id1 && qtreel.execice==this.formData78.exo_id);

      if (qtereel) {
        return qtereel.montant_budgetaire
      }
      return 0
        }
      };
    },
    idLigneBudgetaire() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.id == id  && qtreel.execice==this.formData78.exo_id);

      if (qtereel) {
        return qtereel.ligneeconomique_id
      }
      return 0
        }
      };
    },
    RecuppererLaDotationInitial() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id  && qtreel.exercicebudget_id==this.formData78.exo_id && qtreel.actived==1);

      if (qtereel) {
        return qtereel.cp
      }
      return 0
        }
      };
    },
    imputation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.codebudget
      }
      return 0
        }
      };
    },
    libellePlanActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    NomActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    libelleLigneEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    idUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.activite_id == id);

      if (qtereel) {
        return qtereel.ua_id
      }
      return 0
        }
      };
    },
listeDesUa() {
      


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
doublonLigneBudgetaireSousBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.sous_budget_id == id && qtreel.annebudgetaire==this.formData78.exo_id && 	qtreel.sous_budget_id!=0);

      if (qtereel) {
        return qtereel.sous_budget_id
      }
      return 0
        }
      };
    },
    doublonLigneBudgetaireUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.formData78.exo_id && 	qtreel.sous_budget_id==0);

      if (qtereel) {
        return qtereel.uniteadministrative_id
      }
      return 0
        }
      };
    },
    doublonLigneBudgetaireSousBudgetaire() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.sous_budget_id == id && qtreel.ligneeconomique_id == id1 && qtreel.annebudgetaire==this.formData78.exo_id);

      if (qtereel) {
        return qtereel.ligneeconomique_id
      }
      return 0
        }
      };
    },
    doublonLigneBudgetaire() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.uniteadministrative_id == id && qtreel.ligneeconomique_id == id1 && qtreel.annebudgetaire==this.formData78.exo_id && qtreel.sous_budget_id==0);

      if (qtereel) {
        return qtereel.ligneeconomique_id
      }
      return 0
        }
      };
    },
    doublonDecisionBudgetEclate() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id);

      if (qtereel) {
        return qtereel.exercice
      }
      return 0
        }
      };
    },
    idBudgetEclaterUa() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.uniteadministrative_id == id && qtreel.ligneeconomique_id == id1 && qtreel.annebudgetaire==this.formData78.exo_id && qtreel.sous_budget_id==0);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },
    idBudgetEclaterSousBudget() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.sous_budget_id == id && qtreel.ligneeconomique_id == id1 && qtreel.annebudgetaire==this.formData78.exo_id && qtreel.sous_budget_id!=0);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },
    montantDon() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.formData78.exo_id);

      if (qtereel) {
        return qtereel.don
      }
      return 0
        }
      };
    },
    montantTresor() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.formData78.exo_id);

      if (qtereel) {
        return qtereel.tresor
      }
      return 0
        }
      };
    },
    montantEmprunt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.formData78.exo_id);

      if (qtereel) {
        return qtereel.emprunt
      }
      return 0
        }
      };
    },

    SommeCumul(){
return parseFloat(this.montantEmprunt(this.formData1.ligneeconomique_id))+parseFloat(this.montantTresor(this.formData1.ligneeconomique_id))+parseFloat(this.montantDon(this.formData1.ligneeconomique_id))
},
   SommeCumulAjouter(){
return (parseFloat(this.dotationTotal))
},


numeroOrdreSousFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==this.formData1.type_financement_id && qtreel.sous_financement_id==this.formData.source_financement_id);

      if (qtereel) {
        return qtereel.numero_ordre
      }
      return 0
        }
      };
    },


        },

methods: {
   ...mapActions("uniteadministrative", [
      "ajouterBudgetEclate",
      "supprimerBudgetEclate",
      "modifierBudgetEclate",
      "ajouterDecisionBudgetEclate",
      "ajouterHistorisqueBudgetEclate"
      
      
    ]),
    apercuFacture() {
      this.$("#ApercuFacture").modal({
        backdrop: "static",
        keyboard: false
      });
    },
      montantPasEquipment(id){
     
          let montant=parseFloat(this.recupereMontantDon(id))+parseFloat(this.recupereMontantEmprunt(id))
          return  montant
       
   },
   TotalHorizontal(id){
     
          let montant=(parseFloat(this.recupereMontantDon(id))+parseFloat(this.recupereMontantEmprunt(id))+parseFloat(this.recupereMontantEtat(id)))
          return  montant
       
   },
   montantTotalMobilier(id){
      let montantTotal =0
       let vm=this
       this.listeDesBudgetaireEclate(this.formData.uniteadministrative_id).forEach(function(){
           montantTotal = montantTotal + vm.montantPasEquipment(id)
       })
       return montantTotal
   },
      formatageSomme:formatageSomme,
 AjouterBudgetEclateSousBudget() {
  
   if(this.doublonDecisionBudgetEclate(this.formData.uniteadministrative_id)!=this.formData78.exo_id){
   if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id ){
 var nouvelObjet = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          tresor:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          type_financement_id:this.formData1.type_financement_id,
          source_financement_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
          report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget1 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget1);
      this.ajouterBudgetEclate(nouvelObjet);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet)
      this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
   
   }
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id){

      if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){

   
var nouvelObjet10002 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          don:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          	type_financement_don_id:this.formData1.type_financement_id,
            source_financement_don_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget1212 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget1212);
      this.ajouterBudgetEclate(nouvelObjet10002);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet10002)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
      
     }
    else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){

   
var nouvelObjet00021 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_2:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          		type_financement_don_2_id:this.formData1.type_financement_id,
            source_financement_don_2_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget121205 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget121205);
      this.ajouterBudgetEclate(nouvelObjet00021);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet00021)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){

   
var nouvelObjet00021000 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_3:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          		type_financement_don_3_id:this.formData1.type_financement_id,
            source_financement_don_3_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget121201 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget121201);
      this.ajouterBudgetEclate(nouvelObjet00021000);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet00021000)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){

   
var nouvelObjet000200 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_4:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          		type_financement_don_4_id:this.formData1.type_financement_id,
            source_financement_don_4_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget1212045 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget1212045);
      this.ajouterBudgetEclate(nouvelObjet000200);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet000200)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){

   
var nouvelObjet0002101 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_5:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          		type_financement_don_5_id:this.formData1.type_financement_id,
            source_financement_don_5_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget12120451 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget12120451);
      this.ajouterBudgetEclate(nouvelObjet0002101);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet0002101)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     }   
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id){
      
      if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){
 var objetEmprunt1 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	emprunt:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_id:this.formData1.type_financement_id,
              source_financement_emprunt_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget132 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget132);
      this.ajouterBudgetEclate(objetEmprunt1);
      this.ajouterHistorisqueBudgetEclate(objetEmprunt1)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
      }
      else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){
 var objetEmprunt2 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_2_id:this.formData1.type_financement_id,
              source_financement_emprunt_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget135 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget135);
      this.ajouterBudgetEclate(objetEmprunt2);
      this.ajouterHistorisqueBudgetEclate(objetEmprunt2)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
      }
      else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){
 var objetEmprunt3 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_3_id:this.formData1.type_financement_id,
              source_financement_emprunt_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget133 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget133);
      this.ajouterBudgetEclate(objetEmprunt3);
      this.ajouterHistorisqueBudgetEclate(objetEmprunt3)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
      }
       else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){
 var objetEmprunt4 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_4_id:this.formData1.type_financement_id,
              source_financement_emprunt_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget1345 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget1345);
      this.ajouterBudgetEclate(objetEmprunt4);
      this.ajouterHistorisqueBudgetEclate(objetEmprunt4)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
      }
       else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){
 var objetEmprunt5 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_5_id:this.formData1.type_financement_id,
              source_financement_emprunt_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget13458 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget13458);
      this.ajouterBudgetEclate(objetEmprunt5);
      this.ajouterHistorisqueBudgetEclate(objetEmprunt5)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
      }
     }
     else if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id){
       var nouvelObjet28 = {
        ...this.formData,
        id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
            dotation:this.SommeCumulAjouter,
          	tresor:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            
             type_financement_id:this.formData1.type_financement_id,
          source_financement_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet28);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id){
      
       if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){

     var objetEmpruntModifier = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	emprunt:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_id:this.formData1.type_financement_id,
            source_financement_emprunt_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(objetEmpruntModifier);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
      }
      
      else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){

     var objetEmpruntModifier12 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_2_id:this.formData1.type_financement_id,
            source_financement_emprunt_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(objetEmpruntModifier12);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
      }
      else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){

     var objetEmpruntModifier3 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_3_id:this.formData1.type_financement_id,
            source_financement_emprunt_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(objetEmpruntModifier3);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
      }
       else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){

     var objetEmpruntModifier4 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_4_id:this.formData1.type_financement_id,
            source_financement_emprunt_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(objetEmpruntModifier4);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
      }
      else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){

     var objetEmpruntModifier5 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_5_id:this.formData1.type_financement_id,
            source_financement_emprunt_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(objetEmpruntModifier5);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
      }
      
     }
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id){
       
   if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){

    var nouvelObjet251 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	don:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           
            type_financement_don_id:this.formData1.type_financement_id,
            source_financement_don_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet251);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
    else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){

    var nouvelObjet2545 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           
            type_financement_don_2_id:this.formData1.type_financement_id,
            source_financement_don_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet2545);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){

    var nouvelObjet2501 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           
            type_financement_don_3_id:this.formData1.type_financement_id,
            source_financement_don_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet2501);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){

    var nouvelObjet25021 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           
            type_financement_don_4_id:this.formData1.type_financement_id,
            source_financement_don_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet25021);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){

    var nouvelObjet257569 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          		montant_don_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           
            type_financement_don_5_id:this.formData1.type_financement_id,
            source_financement_don_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet257569);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
   }
else{
     if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id ){
 var nouvelObjet96 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          tresor:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          type_financement_id:this.formData1.type_financement_id,
          source_financement_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
          report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet96);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet96)
      this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
   }
   }
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id){


if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){

   var ob1 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          don:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          	type_financement_don_id:this.formData1.type_financement_id,
          	source_financement_don_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(ob1);
       this.ajouterHistorisqueBudgetEclate(ob1)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
      }

      
      
      
     }

else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){

   var ob2 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_2:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          		type_financement_don_2_id:this.formData1.type_financement_id,
          		source_financement_don_2_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(ob2);
       this.ajouterHistorisqueBudgetEclate(ob2)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
      }

      
      
      
     }
else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){

   var ob3 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_3:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          		type_financement_don_3_id:this.formData1.type_financement_id,
          		source_financement_don_3_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(ob3);
       this.ajouterHistorisqueBudgetEclate(ob3)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
      }

      
      
      
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){

   var ob4 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_4:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          		type_financement_don_4_id:this.formData1.type_financement_id,
          		source_financement_don_4_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(ob4);
       this.ajouterHistorisqueBudgetEclate(ob4)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
      }

      
      
      
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){

   var ob5 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_5:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          		type_financement_don_5_id:this.formData1.type_financement_id,
          		source_financement_don_5_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(ob5);
       this.ajouterHistorisqueBudgetEclate(ob5)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
      }

      
      
      
     }
     }   
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id){
       
       if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){

    var obemprunt1 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	emprunt:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_id:this.formData1.type_financement_id,
            	source_financement_emprunt_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(obemprunt1);
      this.ajouterHistorisqueBudgetEclate(obemprunt1)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }

      
      
      
     }
        else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){

    var obemprunt2 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_2_id:this.formData1.type_financement_id,
            	source_financement_emprunt_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(obemprunt2);
      this.ajouterHistorisqueBudgetEclate(obemprunt2)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }

     }
      else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){

    var obemprunt3 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_3_id:this.formData1.type_financement_id,
            	source_financement_emprunt_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(obemprunt3);
      this.ajouterHistorisqueBudgetEclate(obemprunt3)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }

     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){

    var obemprunt4 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_4_id:this.formData1.type_financement_id,
            	source_financement_emprunt_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(obemprunt4);
      this.ajouterHistorisqueBudgetEclate(obemprunt4)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }

     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){

    var obemprunt5 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_emprunt_5_id:this.formData1.type_financement_id,
            	source_financement_emprunt_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(obemprunt5);
      this.ajouterHistorisqueBudgetEclate(obemprunt5)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }

     }
     }
     else if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id){
       var nouvelObjet281 = {
        ...this.formData,
        id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
            dotation:this.SommeCumulAjouter,
          	tresor:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            
            type_financement_id:this.formData1.type_financement_id,
            	source_financement_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet281);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id){
      
      if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){


      var nouvelObjet27112 = {
        ...this.formData,
         id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	emprunt:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           
            	type_financement_emprunt_id:this.formData1.type_financement_id,
            	source_financement_emprunt_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet27112);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){


      var obmodifier = {
        ...this.formData,
         id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           
            	type_financement_emprunt_2_id:this.formData1.type_financement_id,
            	source_financement_emprunt_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(obmodifier);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){


      var obmodifier1 = {
        ...this.formData,
         id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           
            	type_financement_emprunt_3_id:this.formData1.type_financement_id,
            	source_financement_emprunt_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(obmodifier1);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     } 
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){


      var obmodifier2 = {
        ...this.formData,
         id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           
            	type_financement_emprunt_4_id:this.formData1.type_financement_id,
            	source_financement_emprunt_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(obmodifier2);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){


      var obmodifier3 = {
        ...this.formData,
         id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           
            	type_financement_emprunt_5_id:this.formData1.type_financement_id,
            	source_financement_emprunt_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(obmodifier3);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     
     }
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaireSousBudgetaire(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id){
     
     if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){

var nouvelObjet2512 = {
        ...this.formData,
         id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	don:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
            		type_financement_don_id:this.formData1.type_financement_id,
            		source_financement_don_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet2512);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     
      else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){

var nouvelObjet25120 = {
        ...this.formData,
         id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
            		type_financement_don_2_id:this.formData1.type_financement_id,
            			source_financement_don_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet25120);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){

var nouvelObjet251201 = {
        ...this.formData,
         id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
            		type_financement_don_3_id:this.formData1.type_financement_id,
            			source_financement_don_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet251201);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){

var nouvelObjet2512014 = {
        ...this.formData,
         id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
            		type_financement_don_4_id:this.formData1.type_financement_id,
            			source_financement_don_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet2512014);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){

var nouvelObjet25120001 = {
        ...this.formData,
         id:this.idBudgetEclaterSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
            		type_financement_don_5_id:this.formData1.type_financement_id,
            			source_financement_don_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet25120001);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     }
   
},
AjouterBudgetEclateUniteAdministrative() {
  
   if(this.doublonDecisionBudgetEclate(this.formData.uniteadministrative_id)!=this.anneeAmort){
   if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id ){
 var nouvelObjet200 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          tresor:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
         // type_financement_id:this.formData1.type_financement_id,
         type_financement_id:this.formData1.type_financement_id,
            		source_financement_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
          report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget1012 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget1012);
      this.ajouterBudgetEclate(nouvelObjet200);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet200)
      this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
   
   }
    else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){

var nouvelObjet1520 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          don:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
         // type_financement_id:this.formData1.type_financement_id,
         type_financement_don_id:this.formData1.type_financement_id,
            		source_financement_don_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget1245 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget1245);
      this.ajouterBudgetEclate(nouvelObjet1520);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet1520)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }

     }   
      else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){
var nouvelObjet152003 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_2:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
         // type_financement_id:this.formData1.type_financement_id,
         type_financement_don_2_id:this.formData1.type_financement_id,
            		source_financement_don_2_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget124545 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget124545);
      this.ajouterBudgetEclate(nouvelObjet152003);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet152003)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }

     } 
      else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){

var objetDon5 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_3:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
         // type_financement_id:this.formData1.type_financement_id,
         type_financement_don_3_id:this.formData1.type_financement_id,
            		source_financement_don_3_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget12454501 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget12454501);
      this.ajouterBudgetEclate(objetDon5);
       this.ajouterHistorisqueBudgetEclate(objetDon5)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     } 
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){

var obDon1 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_4:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
         // type_financement_id:this.formData1.type_financement_id,
         type_financement_don_4_id:this.formData1.type_financement_id,
            		source_financement_don_4_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var objet10 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(objet10);
      this.ajouterBudgetEclate(obDon1);
       this.ajouterHistorisqueBudgetEclate(obDon1)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     } 
      else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5 ){

var nouvelObjet152003120 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_5:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
         // type_financement_id:this.formData1.type_financement_id,
         type_financement_don_5_id:this.formData1.type_financement_id,
            		source_financement_don_5_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget1245457 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget1245457);
      this.ajouterBudgetEclate(nouvelObjet152003120);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet152003120)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     
    
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){
       var nouvelObjet2102 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	emprunt:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
           type_financement_emprunt_id:this.formData1.type_financement_id,
            		source_financement_emprunt_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var decisionBudget13021 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget13021);
      this.ajouterBudgetEclate(nouvelObjet2102);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet2102)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
       
     }
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){
       var ob12 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
           	type_financement_emprunt_2_id:this.formData1.type_financement_id,
            		source_financement_emprunt_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var op1 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(op1);
      this.ajouterBudgetEclate(ob12);
      this.ajouterHistorisqueBudgetEclate(ob12)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
       
     }
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){
       
       var B1 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
           type_financement_emprunt_3_id:this.formData1.type_financement_id,
            		source_financement_emprunt_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var A1 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(A1);
      this.ajouterBudgetEclate(B1);
      this.ajouterHistorisqueBudgetEclate(B1)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){
       
       var P1 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
           type_financement_emprunt_4_id:this.formData1.type_financement_id,
            		source_financement_emprunt_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var Z1 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(Z1);
      this.ajouterBudgetEclate(P1);
      this.ajouterHistorisqueBudgetEclate(P1)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){
       var w1 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
           type_financement_emprunt_5_id:this.formData1.type_financement_id,
            		source_financement_emprunt_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      var q1 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(q1);
      this.ajouterBudgetEclate(w1);
      this.ajouterHistorisqueBudgetEclate(w1)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
       
     
     else if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id ){
       var nouvelObjet28452 = {
        ...this.formData,
        id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
            dotation:this.SommeCumulAjouter,
          	tresor:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_id:this.formData1.type_financement_id,
            	source_financement_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet28452);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){
        var nouvelObjet27 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	emprunt:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_id:this.formData1.type_financement_id,
            		source_financement_emprunt_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet27);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){
       var nouvelObjet2714 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_2_id:this.formData1.type_financement_id,
            		source_financement_emprunt_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet2714);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){
       var nouvelObjet27141212 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_3_id:this.formData1.type_financement_id,
            		source_financement_emprunt_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet27141212);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){
        var nouvelObjet271412121 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_4_id:this.formData1.type_financement_id,
            		source_financement_emprunt_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet271412121);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){
       var objet45 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_5_id:this.formData1.type_financement_id,
            		source_financement_emprunt_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(objet45);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }      
       
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){
      var nouvelObjet25 = {
        ...this.formData,
         id:this.idBudgetEclater(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	don:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_don_id:this.formData1.type_financement_id,
            		source_financement_don_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet25);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
   }
    else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){
      var nouvelObjet251 = {
        ...this.formData,
         id:this.idBudgetEclater(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_don_2_id:this.formData1.type_financement_id,
            		source_financement_don_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet251);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
   }
    else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){
      var bien1 = {
        ...this.formData,
         id:this.idBudgetEclater(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_don_3_id:this.formData1.type_financement_id,
            		source_financement_don_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(bien1);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
   }
    else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){
      var bien2 = {
        ...this.formData,
         id:this.idBudgetEclater(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_don_4_id:this.formData1.type_financement_id,
            		source_financement_don_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(bien2);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
   }
    else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){
      var bien3 = {
        ...this.formData,
         id:this.idBudgetEclater(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_don_5_id:this.formData1.type_financement_id,
            		source_financement_don_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(bien3);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
    
       
       
       
       
       
      
   
   }
else{
     if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id ){
 var nouvelObjet96 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          tresor:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          type_financement_id:this.formData1.type_financement_id,
         // type_financement_don_id:this.formData1.type_financement_id,
            		source_financement_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
          report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet96);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet96)
      this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
   
   }
     
      else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){
var nouvelObjet163 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          don:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          //type_financement_id:this.formData1.type_financement_id,
          type_financement_don_id:this.formData1.type_financement_id,
            		source_financement_don_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet163);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet163)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
      }
     }  
      else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){
var nouvelObjet16310 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_2:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          //type_financement_id:this.formData1.type_financement_id,
          type_financement_don_2_id:this.formData1.type_financement_id,
            		source_financement_don_2_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet16310);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet16310)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
      }
     }  
      else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){
var nouvelObjet163101 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_3:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          //type_financement_id:this.formData1.type_financement_id,
          type_financement_don_3_id:this.formData1.type_financement_id,
            		source_financement_don_3_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet163101);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet163101)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
      }
     }  
      else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){
var nouvelObjet163100 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_4:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          //type_financement_id:this.formData1.type_financement_id,
          type_financement_don_4_id:this.formData1.type_financement_id,
            		source_financement_don_4_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet163100);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet163100)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
      }
     }  
      else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){
var nouvelObjet1631012 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          montant_don_5:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          //type_financement_id:this.formData1.type_financement_id,
          type_financement_don_5_id:this.formData1.type_financement_id,
            		source_financement_don_5_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet1631012);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet1631012)
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
      }
     } 
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){
 var nouvelObjet221 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	emprunt:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
           type_financement_emprunt_id:this.formData1.type_financement_id,
            		source_financement_emprunt_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet221);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet221)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){
  var nouvelObjet22112 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
           type_financement_emprunt_2_id:this.formData1.type_financement_id,
            		source_financement_emprunt_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet22112);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet22112)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){
 var nouvelObjet221121 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
           type_financement_emprunt_3_id:this.formData1.type_financement_id,
            		source_financement_emprunt_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet221121);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet221121)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){
  var nouvelObjet22112145 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
           type_financement_emprunt_4_id:this.formData1.type_financement_id,
            		source_financement_emprunt_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet22112145);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet22112145)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
      else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){
  var nouvelObjet2211221 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	montant_emprunt_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
           type_financement_emprunt_5_id:this.formData1.type_financement_id,
            		source_financement_emprunt_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.ajouterBudgetEclate(nouvelObjet2211221);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet2211221)
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id ){
       var nouvelObjet281 = {
        ...this.formData,
        id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
            dotation:this.SommeCumulAjouter,
          	tresor:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_id:this.formData1.type_financement_id,
            		source_financement_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet281);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
       else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){
     var nouvelObjet271 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	emprunt:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_id:this.formData1.type_financement_id,
            		source_financement_emprunt_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet271);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){
     var nouvelObjet2710 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_2_id:this.formData1.type_financement_id,
            		source_financement_emprunt_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet2710);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){
     var nouvelObjet27101 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_3_id:this.formData1.type_financement_id,
            		source_financement_emprunt_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet27101);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){
     var nouvelObjet27100 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_4_id:this.formData1.type_financement_id,
            		source_financement_emprunt_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet27100);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){
     var nouvelObjet27104 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_emprunt_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_5_id:this.formData1.type_financement_id,
            		source_financement_emprunt_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet27104);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     
     
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==1){
      var nouvelObjet25112 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	don:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_don_id:this.formData1.type_financement_id,
            		source_financement_don_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet25112);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
   
}
   
else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==2){
      
   var nouvelObjet251121 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_2:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_don_2_id:this.formData1.type_financement_id,
            		source_financement_don_2_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet251121);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
}

else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==3){
      
   var nouvelObjet2511211 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_3:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_don_3_id:this.formData1.type_financement_id,
            		source_financement_don_3_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet2511211);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
}
else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==4){
      var nouvelObjet25112115 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_4:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_don_4_id:this.formData1.type_financement_id,
            		source_financement_don_4_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet25112115);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
   
}

else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id && this.numeroOrdreSousFinancement(this.formData.uniteadministrative_id)==5){
      
   var nouvelObjet25112112 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	montant_don_5:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_don_5_id:this.formData1.type_financement_id,
            		source_financement_don_5_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             report:this.formData1.report,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          sous_budget_id:this.formData10.sous_budget_id
      };
      this.modifierBudgetEclate(nouvelObjet25112112);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
   
}

    },
pagePrecedent(){
                window.history.back()
            },
 afficherModalListePersonnel(){
                this.$router.push({ name: 'voirDetailBudget' })
            },

    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
             genererEnPdf(){
  this.$htmlToPaper('printMe');
},
EnregistrerTout(){
if(this.comparaison(this.formData.activite_id)==this.formData.activite_id){
   
   return this.AjouterBudgetEclateSousBudget()
}
else{
 
  return this.AjouterBudgetEclateUniteAdministrative()
}
},
    },







       
}


    
</script>
<style scoped>
.taille{
  width: 80%;
  margin: 0 -40%;
  height: 50%;
}
.tailles{
   width: 64%;
  margin: 0 -30%;
  
}
.ApercuFacture1{
 width: 64%;
  margin: 0 -30%;
  
  border: 2px solid #000;

}
</style>