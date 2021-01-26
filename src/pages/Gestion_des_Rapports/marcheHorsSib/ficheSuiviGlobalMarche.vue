
<template>
  <div>
      <div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">

                </div>
                <div class="span10 " style="background: #f0c71d !important;">
                    <table class="table table-striped"  style="background: #f0c71d !important;">
                        <tbody>
                        <tr>
                        
                            
                            <td style="background: #f0c71d !important;">
                                <label style="font-size:20px">Exercice Budgétaire
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="exercices_budgetaires"
                                                   v-model="exercices_budgetaires_id"
                                                   option-value="annee"
                                                   option-text="annee"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                          <td style="background: #f0c71d !important;">
                                <label style="font-size:20px">Unité Administrative
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="uniteAdministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                            <td style="background: #f0c71d !important;">
                                <label style="font-size:20px">Type de Marche
                                </label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="typeMarches"
                                                   v-model="typemarche_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                            
                        </tr>
<tr>
     <td style="background: #f0c71d !important;" colspan="3">
                                <label style="font-size:20px">Marche en Execution
                                </label>
                                <select v-model="formData.marche_exercute_id" class="span" >
                                                            <option v-for="item in ListeDesMarcheEnExecution(typemarche_id)" 
                                                            :key="item.id" 
                                                            :value="item.marche_id">
                                                                {{afficherNumeroMarche(item.marche_id)}}
                                                            </option>


                                                        </select>

                                
                            </td>
</tr>
                        </tbody>
                    </table>

                </div>


            </div>
             <div align="right">

      <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>


                            </div>
      <br>
      <div id="printMe">
      <table class="table table-bordered table-striped">
               <tr>
                   <td style="width:10%;text-align:center;font-size:10px;font-weight: bold;">DCF</td>
                   <td style="width:90%;text-align:center;font-size:30px;font-weight: bold;">FICHE DE SUIVI GLOBAL D'UN MARCHE/CONTRAT</td>
               </tr>
              </table>
<table class="table table-bordered table-striped" v-if="formData.marche_exercute_id !=''">
                <thead>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">EXERCICE BUDGETAIRE</th>
                     <td colspan="3" style="width:15%;text-align:center;font-size:25px;font-weight: bold;"> {{exerciceBudgetaire(formData.marche_exercute_id)}} </td>
                 </tr>
                  <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">BAILLEUR(S)</th>
                     <td colspan="3">  </td>
                 </tr>
                  <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">MINISTERE DE TUTELLE</th>
                 <td colspan="3" style="width:15%;text-align:center;font-size:25px;font-weight: bold;"> {{sectionLibelle(section_id(uniteAdministrative_id))}} </td>
                 </tr>
                <tr style="">
                     <th style="background-color: orange;"></th>
                     <th style="width:20%;text-align:center;font-size:16px;font-weight: bold;background-color: orange;color:#fff">ETUDE / (ET/OU) SUIVI ET CONTROLE</th>
                     <th style="width:60%;text-align:center;font-size:16px;font-weight: bold;background-color: orange;color:#fff">TRAVAUX</th>
                     <th style="width:20%;text-align:center;font-size:16px;font-weight: bold;background-color: orange;color:#fff">SUIVI ET CONTROLE</th>
                 </tr>
                  <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">INTUTILE DE L'UA</th>
                     <td colspan="3" style="text-align:center;font-size:25px;font-weight: bold;"> {{LibelleUniteAdministrative(IdUniteAdministrative(formData.marche_exercute_id))}} </td>
                     
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">LIGNE BUDGETAIRE</th>
                     <td colspan="3" style="text-align:center;font-size:25px;font-weight: bold;"> {{ligneBudgetaireId(formData.marche_exercute_id)}} </td>
                     
                 </tr>
                  <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">NUMERO DU MARCHE</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{NumeroMarche(formData.marche_exercute_id)}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">LIBELLE DE MARCHE/CONTRAT</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{LibelleMarche(formData.marche_exercute_id)}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">ENTREPRISE ATTRIBUTAIRE</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{afficheLibelleEntreprise(afficheidEntreprise(formData.marche_exercute_id))}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">DATE D'APPROBATION</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{afficheDateApprobatrice(formData.marche_exercute_id)}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">DELAI D'EXECUTION</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{afficheDateExecution(formData.marche_exercute_id)}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">DATE DE L'OS</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{afficheOrdreService(formData.marche_exercute_id)}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">DATE DE FIN PREVISIONNELLE</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{afficheDateApprobatrice(formData.marche_exercute_id)}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">MONTANT PREVISIONNEL</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{formatageSomme(parseFloat(afficheMontantPrevu(formData.marche_exercute_id)))}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">MONTANT DE BASE HT</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{formatageSomme(parseFloat(afficheMontantBaseHt(formData.marche_exercute_id)))}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">MONTANT DE BASE TTC</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{formatageSomme(parseFloat(afficheMontantBasettc(formData.marche_exercute_id)))}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">MONTANT TOTAL AVENANT TTC</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:16px;font-weight: bold;"> {{formatageSomme(parseFloat(afficheMontantAvenantTtc(formData.marche_exercute_id)))}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">TAUX AVENANT FINANCIER</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:16px;font-weight: bold;"> {{ratioAvenantMarche(formData.marche_exercute_id)}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">MONTANT GLOBAL DU MARCHE TTC</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                    
                      <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;">{{formatageSomme(parseFloat(afficheMontantBasettc(formData.marche_exercute_id))+parseFloat(afficheMontantAvenantTtc(formData.marche_exercute_id)))}}  </td>
                 <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">MONTANT EXECUTE</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;">{{formatageSomme(parseFloat(afficheMontantMandat(formData.marche_exercute_id)))}}  </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">TAUX D'EXECUTION</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{(((parseFloat(afficheMontantBasettc(formData.marche_exercute_id))+parseFloat(afficheMontantAvenantTtc(formData.marche_exercute_id)))/(parseFloat(afficheMontantMandat(formData.marche_exercute_id))))*100)}}% </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">TAUX D'EXECUTION PHYSIQUE</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                  <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">OP VISES MONTANT {{exercices_budgetaires_id}}</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{formatageSomme(parseFloat(afficheMontantMandat(formData.marche_exercute_id)))}}  </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">OP VISES MONTANT TOTAL</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;">{{formatageSomme(parseFloat(afficheMontantBasettc(formData.marche_exercute_id))+parseFloat(afficheMontantAvenantTtc(formData.marche_exercute_id)))}}</td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                  <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">OP VISES TAUX</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;">{{(((parseFloat(afficheMontantBasettc(formData.marche_exercute_id))+parseFloat(afficheMontantAvenantTtc(formData.marche_exercute_id)))/(parseFloat(afficheMontantMandat(formData.marche_exercute_id))))*100)}}% </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">OP RESTANT A VISER MONTANT {{exercices_budgetaires_id}}</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;">{{formatageSomme((parseFloat(afficheMontantBasettc(formData.marche_exercute_id))+parseFloat(afficheMontantAvenantTtc(formData.marche_exercute_id)))-(parseFloat(afficheMontantMandat(formData.marche_exercute_id))))}}</td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">OP RESTANT A VISER MONTANT TOTAL</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;">{{formatageSomme(parseFloat(afficheMontantBasettc(formData.marche_exercute_id))+parseFloat(afficheMontantAvenantTtc(formData.marche_exercute_id)))}}</td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                  <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">OP RESTANT A VISER TAUX</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;">{{((((parseFloat(afficheMontantBasettc(formData.marche_exercute_id))+parseFloat(afficheMontantAvenantTtc(formData.marche_exercute_id)))-(parseFloat(afficheMontantMandat(formData.marche_exercute_id))))/(parseFloat(afficheMontantBasettc(formData.marche_exercute_id))+parseFloat(afficheMontantAvenantTtc(formData.marche_exercute_id))))*100)}}% </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">DATE REELLE DE FIN</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{afficheDateExecution(formData.marche_exercute_id)}} </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">DUREE REELLE D'EXECUTION</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:25px;font-weight: bold;"> {{durreExecution(formData.marche_exercute_id)}} Jours</td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">ECART</th>
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                     <td style="width:60%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;background-color: coral;color:#fff" colspan="4">SITUATION GLOBALE DU MARCHE</th>
                    
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">MONTANT GLOBAL DU MARCHE HT</th>
                     <td colspan="3">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">MONTANT GLOBAL DU MARCHE TTC</th>
                     <td colspan="3">  </td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">EXECUTION GLOBAL DU FINANCIERE</th>
                     
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  HT</td>
                      <td style="width:60%;text-align:center;font-size:16px;font-weight: bold;">  TTC</td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  %</td>
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">MONTANT (OP)RESTANT A VALIDER</th>
                     
                     <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  HT</td>
                      <td style="width:60%;text-align:center;font-size:16px;font-weight: bold;">  TTC</td>
                      <td style="width:20%;text-align:center;font-size:16px;font-weight: bold;">  %</td>
                 </tr>

                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;background-color: #4bc302;color:#fff" colspan="4">REALITE DE SERVICE FAIT</th>
                    
                 </tr>
                 <tr>
                     <th ></th>
                     <th style="text-align:center;font-size:16px;font-weight: bold;">TACHE PREVUES</th>
                     <th style="text-align:center;font-size:16px;font-weight: bold;" colspan="2">TACHE EXECUTES</th>
                     
                 </tr>
                  <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">ETUDES/SUIVI ET CONTROLE</th>
                     
                     <td style="text-align:center;font-size:16px;font-weight: bold;">  </td>
                      <td style="text-align:center;font-size:16px;font-weight: bold;" colspan="2">  </td>
                      
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">MARCHE</th>
                     
                     <td style="text-align:center;font-size:16px;font-weight: bold;">  </td>
                      <td style="text-align:center;font-size:16px;font-weight: bold;" colspan="2"> </td>
                      
                 </tr>
                 <tr>
                     <th style="width:15%;text-align:center;font-size:16px;font-weight: bold;">SUIVI ET CONTROLE</th>
                     
                     <td style="text-align:center;font-size:16px;font-weight: bold;">  </td>
                      <td style="text-align:center;font-size:16px;font-weight: bold;" colspan="2">  </td>
                      
                 </tr>
                </thead>
               
              </table>
              </div>
             <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="ajouterEntreEnPatrimoine()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="ajouterEntreEnPatrimoine"
        @searchMe="filter"
         
        bg-color="green"

  ></fab>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
import {  ModelListSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'
import moment from 'moment';
export default {
      components: {
    
    ModelListSelect,
     
  },
  name:'typetext',
  data() {
    return {
      fabActions: [
       {
                  name: 'searchMe',
                   icon: "search"
              }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      exercices_budgetaires_id:"",
      uniteAdministrative_id:"",
      marcheExecution_id:"",
      typemarche_id:"",
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        marche_exercute_id: "",
        
      },
      affiche_filtre:false,
      affiche_boutton_filtre:true,
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      search: ""
    };
  },

  computed: {
      
   ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

     ...mapGetters("bienService", ["avenants",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral","jointureUaChapitreSection" ,"budgetEclate" ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"sections"]),
   ...mapGetters("gestionMarche", ['entreprises']),



// ratioAvenantMarche(){
//    const val = (parseFloat(this.affichierMontantAvenant(this.macheid)) / parseFloat(this.afficheMontantReelMarche(this.macheid))) * 100;
//       return parseFloat(val).toFixed(2);
// },

// affichierMontantAvenant(){
//   return id => {
//     if(id !=""){
  
        
//     return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
//     }
    
//   }
// },






afficheMontantMandat() {
      return id => {
        if (id != null && id != "") {
           return this.getMandatPersonnaliserVise.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2);

        }
      };
    },
afficheMontantAvenantTtc () {
      return id => {
        if (id != null && id != "") {
           return this.avenants.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2);

        }
      };
    },


ListeDesMarcheEnExecution() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser45.filter(qtreel => this.afficherCodeTypeMarche(qtreel.marche_id) == id && this.afficheBudgetaire(qtreel.marche_id)==this.exercices_budgetaires_id && this.IdUniteAdministrative(qtreel.marche_id)==this.uniteAdministrative_id);

     
        }
      };
    },
    afficheidEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    },
    afficheDateApprobatrice() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.date_approbation;
      }
      return 0
        }
      };
    },
    
    afficheDateExecution() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.date_fin_exe;
      }
      return 0
        }
      };
    },
    durreExecution() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.duree;
      }
      return 0
        }
      };
    },
    afficheOrdreService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.date_odre_service;
      }
      return 0
        }
      };
    },
    afficheMontantBaseHt () {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act_ht;
      }
      return 0
        }
      };
    },
    afficheMontantBasettc () {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
    
    afficheLibelleEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    },
    afficherCodeTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },
    afficheBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exo_id;
      }
      return 0
        }
      };
    },
    
     
    afficheMontantPrevu() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_marche;
      }
      return 0
        }
      };
    },
    afficherNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche.concat('--', qtereel.objet);
      }
      return 0
        }
      };
    },
    NumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
    LibelleMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    },
exerciceBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exo_id;
      }
      return 0
        }
      };
    },
    IdUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return 0
        }
      };
    },
    LibelleUniteAdministrative() {
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
    section_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.section_id;
      }
      return 0
        }
      };
    },
    sectionLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        
        return qtereel.code_section.concat('--', qtereel.nom_section);
      }
      return 0
        }
      };
    },
    ligneBudgetaireId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation;
      }
      return 0
        }
      };
    },
    ligneBudgetaireLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('-', qtereel.libelle);
      }
      return 0
        }
      };
    },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllTypeTextes",
      "getAllNombreTypeText",
      "ajouterTypeTexte",
      "modifierTypeTexte",
      "supprimerTypeTexte"
    ]),

 genererEnPdf(){
  this.$htmlToPaper('printMe');
},

ratioAvenantMarche(id){
   const val = (parseFloat(this.affichierMontantAvenant(id)) / parseFloat(this.afficheMontantReelMarche(id))) * 100;
      return parseFloat(val).toFixed(2);
},

affichierMontantAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
    }
    
  }
},
afficheMontantReelMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },





    formatageSomme:formatageSomme,
     formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
    filter(){
                this.affiche_filtre=!this.affiche_filtre
               
            },
            videUniteAdministrative(){
                this.uniteAdministrative_id =""
            },
            videExerciceBudgetaire(){
                this.exercices_budgetaires_id =""
            },
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

