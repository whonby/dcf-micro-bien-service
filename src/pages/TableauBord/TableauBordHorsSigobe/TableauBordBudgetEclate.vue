
<template>
  <div>
      <h1 style="text-align:center">TABLEAU DE BORD DU BUDGET HORS SIGOBE</h1>
      <br/>
       <br/>
        <table class="table table-bordered table-striped">
            <tr>
                <!-- <td>
 <label
                            >Section
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="sections"
                            v-model="formData.exo"
                            option-value="id"
                            option-text="nom_section"
                            placeholder=""
                          >
                          </model-list-select>
                         
                </td> -->
                
                    <td>
                          <label
                            >Unité Administrative
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="listeDesUa"
                            v-model="formData.unite_administrative_id"
                            option-value="id"
                            option-text="libelle"
                            placeholder=""
                          >
                          </model-list-select>
                          
                        </td>

             
            </tr>
        </table>
        <div style="text-align:center;border:4px solid blue;font-weight:bold"> <h3 style="text-align:center">TABLEAU DE BORD UA PROJETS (ANNEE EN COURS)</h3></div>
          <h3 style="text-align:center">{{AffichLibelle(formData.unite_administrative_id)}}</h3>
         <br>
         <br>
         
          <div class="single-timeline-area">

                                  <div class="row-fluid">
                                     <div class="span3"  >
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
<!--                                              <div class="timeline-icon"><i class="fa fa-desktop" aria-hidden="true"></i></div>-->
                                              <div class="timeline-text">
                                                  <h5 style="font-size:25px">MONTANT INITIAL</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                      <br>
                                                       <br>
                                                  </div>
                                                  <p style="text-align:right;font-size:20px"> {{formatageSomme(parseFloat(MontantIntialBudgetEclate(formData.unite_administrative_id)))}}</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="span3" >
                                          <div  class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; ">

                                               <div class="timeline-text">
                                                  <h5 style="font-size:25px">MONTANT EXECUTE</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                      <br>
                                                       <br>
                                                  </div>
                                                  <p style="text-align:right;font-size:20px"> {{formatageSomme(parseFloat(MontantExecute(formData.unite_administrative_id)))}}</p>
                                              </div>
                                          </div>
                                      </div>



 <div class="span3"  >
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">

                                             <div class="timeline-text">
                                                  <h5 style="font-size:25px">MONTANT DISPONIBLE</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                      <br>
                                                       <br>
                                                  </div>
                                                  <p style="text-align:right;font-size:20px"> {{formatageSomme(parseFloat(MontantIntialBudgetEclate(formData.unite_administrative_id)-MontantExecute(formData.unite_administrative_id)))}}</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="span3"  >
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                                            <div class="timeline-text">
                                                  <h5 style="font-size:25px">TAUX EXECUTION</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                      <br>
                                                       <br>
                                                  </div>

                                                 <p style="font-size:25px;font-weight:bold;color:#000;text-align:right;" v-if=" TauxExecution <= 25">{{TauxExecution}} %</p>
                       <p style="font-size:25px;font-weight:bold;color:vert;text-align:right;" v-else-if="25 < TauxExecution <= 50">{{TauxExecution}} %</p>
                       <p style="font-size:25px;font-weight:bold;color:vert gazon;text-align:right;" v-else-if="50 < TauxExecution <= 75">{{TauxExecution}} %</p>
                      <p style="font-size:25px;font-weight:bold;color:vert sapin;text-align:right;" v-else-if="75 < TauxExecution <= 100">{{TauxExecution}} %</p>

                                                
                                              </div>
                                          </div>
                                      </div>
                                      
                                       <!-- </li> -->
                                  </div>
                              </div> 
     <div class="single-timeline-area">

                                  <div class="row-fluid">
                                     <div class="span4" >
                                          <div  class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; ">

                                               <div class="timeline-text">
                                                  <h5 style="font-size:20px;text-align:left">BIENS ET SERVICES</h5>
                                                  <div>
                                                     
                                                  </div>
                                                  
                                               
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Initial: {{formatageSomme(parseFloat(MontantIntialBudgetEclateBienService(formData.unite_administrative_id)))}}</p>
                                                  <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Executé:{{formatageSomme(parseFloat(MontantExecuteBienService(formData.unite_administrative_id)))}}</p>
                                                 <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Taux:{{parseFloat(TauxExecutionBudgetEclateBienService)}} %</p>
                                              </div>
                                          </div>
                                      </div>
                                     <div class="span4" >
                                          <div  class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; ">

                                               <div class="timeline-text">
                                                  <h5 style="font-size:20px;text-align:left">PERSONNELS</h5>
                                                  <div>
                                                     
                                                  </div>
                                                  
                                               
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Initial: {{formatageSomme(parseFloat(MontantIntialBudgetEclatePersonnel(formData.unite_administrative_id)))}}</p>
                                                  <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Executé:{{formatageSomme(parseFloat(MontantExecutePersonnel(formData.unite_administrative_id)))}}</p>
                                                 <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Taux:{{parseFloat(TauxExecutionBudgetEclatePersonnel)}} %</p>
                                              </div>
                                          </div>
                                      </div>
 <div class="span4" >
                                          <div  class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; ">

                                               <div class="timeline-text">
                                                  <h5 style="font-size:20px;text-align:left">INVESTISSEMENT</h5>
                                                  <div>
                                                     
                                                  </div>
                                                  
                                               
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Initial: {{formatageSomme(parseFloat(MontantIntialBudgetEclateInverstissement(formData.unite_administrative_id)))}}</p>
                                                  <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Executé:{{formatageSomme(parseFloat(MontantExecuteInverstissement(formData.unite_administrative_id)))}}</p>
                                                 <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Taux:{{parseFloat(TauxExecutionBudgetEclateInverstissement)}} %</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

<br>
               <div style="text-align:center;border:4px solid orange;font-weight:bold"><h3 >TABLEAU DE BORD UA REGIE (ANNEE EN COURS)</h3></div>
         <br>
         
    <div class="single-timeline-area">

                                  <div class="row-fluid">
                                     <div class="span3"  >
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
<!--                                              <div class="timeline-icon"><i class="fa fa-desktop" aria-hidden="true"></i></div>-->
                                              <div class="timeline-text">
                                                  <h5 style="font-size:25px">MONTANT INITIAL</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                      <br>
                                                       <br>
                                                  </div>
                                                  <p style="text-align:right;font-size:20px"> {{formatageSomme(parseFloat(MontantIntialBudgetEclateRegie(formData.unite_administrative_id)))}}</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="span3" >
                                          <div  class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; ">

                                               <div class="timeline-text">
                                                  <h5 style="font-size:25px">MONTANT EXECUTE</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                      <br>
                                                       <br>
                                                  </div>
                                                  <p style="text-align:right;font-size:20px"> {{formatageSomme(parseFloat(MontantExecuteBudgetEclateRegie(formData.unite_administrative_id)))}}</p>
                                              </div>
                                          </div>
                                      </div>



 <div class="span3"  >
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">

                                             <div class="timeline-text">
                                                  <h5 style="font-size:25px">MONTANT DISPONIBLE</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                      <br>
                                                       <br>
                                                  </div>
                                                  <p style="text-align:right;font-size:20px"> {{formatageSomme(parseFloat(MontantIntialBudgetEclateRegie(formData.unite_administrative_id)-MontantExecuteBudgetEclateRegie(formData.unite_administrative_id)))}}</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="span3"  >
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                                            <div class="timeline-text">
                                                  <h5 style="font-size:25px">TAUX EXECUTION</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                      <br>
                                                       <br>
                                                  </div>

                                                 <p style="font-size:25px;font-weight:bold;color:#000;text-align:right;" v-if=" TauxExecutionBudgetEclateRegie <= 25">{{TauxExecutionBudgetEclateRegie}} %</p>
                       <p style="font-size:25px;font-weight:bold;color:vert;text-align:right;" v-else-if="25 < TauxExecutionBudgetEclateRegie <= 50">{{TauxExecutionBudgetEclateRegie}} %</p>
                       <p style="font-size:25px;font-weight:bold;color:vert gazon;text-align:right;" v-else-if="50 < TauxExecutionBudgetEclateRegie <= 75">{{TauxExecutionBudgetEclateRegie}} %</p>
                      <p style="font-size:25px;font-weight:bold;color:vert sapin;text-align:right;" v-else-if="75 < TauxExecutionBudgetEclateRegie <= 100">{{TauxExecutionBudgetEclateRegie}} %</p>

                                                
                                              </div>
                                          </div>
                                      </div>
                                       <!-- </li> -->
                                  </div>
                              </div> 
                                   <div class="single-timeline-area">

                                  <div class="row-fluid">
                                     <div class="span4" >
                                          <div  class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; ">

                                               <div class="timeline-text">
                                                  <h5 style="font-size:20px;text-align:left">BIENS ET SERVICES</h5>
                                                  <div>
                                                     
                                                  </div>
                                                  
                                               
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Initial: {{formatageSomme(parseFloat(MontantIntialBudgetEclateBienServiceRegie(formData.unite_administrative_id)))}}</p>
                                                  <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Executé:{{formatageSomme(parseFloat(MontantExecuteBienServiceRegie(formData.unite_administrative_id)))}}</p>
                                                 <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Taux:{{parseFloat(TauxExecutionBudgetEclateBienServiceRegie)}} %</p>
                                              </div>
                                          </div>
                                      </div>
                                     <div class="span4" >
                                          <div  class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; ">

                                               <div class="timeline-text">
                                                  <h5 style="font-size:20px;text-align:left">PERSONNELS</h5>
                                                  <div>
                                                     
                                                  </div>
                                                  
                                               
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Initial: {{formatageSomme(parseFloat(MontantIntialBudgetEclatePersonnelRegie(formData.unite_administrative_id)))}}</p>
                                                  <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Executé:{{formatageSomme(parseFloat(MontantExecutePersonnelRegie(formData.unite_administrative_id)))}}</p>
                                                 <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Taux:{{parseFloat(TauxExecutionBudgetEclatePersonnelRegie)}} %</p>
                                              </div>
                                          </div>
                                      </div>
 <div class="span4" >
                                          <div  class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; ">

                                               <div class="timeline-text">
                                                  <h5 style="font-size:20px;text-align:left">INVESTISSEMENT</h5>
                                                  <div>
                                                     
                                                  </div>
                                                  
                                               
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Initial: {{formatageSomme(parseFloat(MontantIntialBudgetEclateInverstissementRegie(formData.unite_administrative_id)))}}</p>
                                                  <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Executé:{{formatageSomme(parseFloat(MontantExecuteInverstissementRegie(formData.unite_administrative_id)))}}</p>
                                                 <br>
                                                  <p style="text-align:right;font-size:20px;font-weight:bold;"> Taux:{{parseFloat(TauxExecutionBudgetEclateInverstissementRegie)}} %</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
          
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";
import { formatageSomme } from "@/Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
     components: {
    ModelListSelect,
    
  },
  name:'',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        
      ],
      formData:{},
     
    };
  },

  computed: {
       admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
     ...mapGetters("parametreGenerauxAdministratif", [
      "taux",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5",
    ]),
     ...mapGetters("uniteadministrative", [
      "budgetEclate",
      
      "getSousBudget",
      "BudgetEclateRegie",
      "uniteAdministratives",
     
    ]),
    ...mapGetters("bienService", [
     "gettersgestionOrdrePaiement"
    ]),
AffichLibelle() {
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
MontantIntialBudgetEclateInverstissement() {
      return (id) => {
        if (id != null && id != "") {
         return this.budgetEclate.filter(
            (qtreel) => qtreel.uniteadministrative_id == id && qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
        }
        return this.budgetEclate.filter(qtreel => qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
  
      };
    },

MontantExecuteInverstissement() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement == 1 && qtreel.decision_cf== 8 && qtreel.diff_op == null && qtreel.grand_nature_id == 7 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement == 1 && qtreel.decision_cf== 9 && qtreel.diff_op == null && qtreel.grand_nature_id == 7 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf== 8 && qtreel.diff_op == null && qtreel.grand_nature_id == 7 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 9 && qtreel.diff_op == null && qtreel.grand_nature_id == 7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
        }
        return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.exercice == this.anneeAmort && qtreel.type_ordre_paiement == 1 && qtreel.decision_cf== 8 && qtreel.diff_op == null && qtreel.grand_nature_id == 7 || qtreel.exercice == this.anneeAmort && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf== 9 && qtreel.diff_op == null && qtreel.grand_nature_id == 7 || qtreel.exercice == this.anneeAmort && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf== 8 && qtreel.diff_op == null && qtreel.grand_nature_id == 7 ||  qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement == 4 && qtreel.decision_cf== 9 && qtreel.diff_op == null && qtreel.grand_nature_id == 7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
      };
    },

TauxExecutionBudgetEclateInverstissement() {
 
      
    const val = ((parseFloat(this.MontantExecuteInverstissement(this.formData.unite_administrative_id)) / parseFloat(this.MontantIntialBudgetEclateInverstissement(this.formData.unite_administrative_id)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    

    },

MontantIntialBudgetEclateInverstissementRegie() {
      return (id) => {
        if (id != null && id != "") {
         return this.BudgetEclateRegie.filter(
            (qtreel) => qtreel.uniteadministrative_id == id && qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
        }
        return this.BudgetEclateRegie.filter(qtreel => qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
  
      };
    },

MontantExecuteInverstissementRegie() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.diff_op != null && qtreel.grand_nature_id == 7 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 9 && qtreel.diff_op != null && qtreel.grand_nature_id == 7 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.diff_op != null && qtreel.grand_nature_id == 7 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 9 && qtreel.diff_op != null && qtreel.grand_nature_id == 7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

          
          
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 7 || qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 9 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 7 || qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 7 || qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 9 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
      };
    },

TauxExecutionBudgetEclateInverstissementRegie() {
 
    const val = ((parseFloat(this.MontantExecuteInverstissementRegie(this.formData.unite_administrative_id)) / parseFloat(this.MontantIntialBudgetEclateInverstissementRegie(this.formData.unite_administrative_id)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    
    },
MontantIntialBudgetEclateBienServiceRegie() {
      return (id) => {
        if (id != null && id != "") {
         return this.BudgetEclateRegie.filter(
            (qtreel) => qtreel.uniteadministrative_id == id && qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
        }
        return this.BudgetEclateRegie.filter(qtreel => qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
  
      };
    },

MontantExecuteBienServiceRegie() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.diff_op != null && qtreel.grand_nature_id == 5 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 9 && qtreel.diff_op != null && qtreel.grand_nature_id == 5 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.diff_op != null && qtreel.grand_nature_id == 5 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 9 && qtreel.diff_op != null && qtreel.grand_nature_id == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

          
          
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 5 || qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 9 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 5 || qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 5 || qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 9 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
      };
    },

TauxExecutionBudgetEclateBienServiceRegie() {
    const val = ((parseFloat(this.MontantExecuteBienServiceRegie(this.formData.unite_administrative_id)) / parseFloat(this.MontantIntialBudgetEclateBienServiceRegie(this.formData.unite_administrative_id)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },


MontantIntialBudgetEclatePersonnelRegie() {
      return (id) => {
        if (id != null && id != "") {
         return this.BudgetEclateRegie.filter(
            (qtreel) => qtreel.uniteadministrative_id == id && qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
        }
        return this.BudgetEclateRegie.filter(qtreel => qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
  
      };
    },

MontantExecutePersonnelRegie() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.diff_op != null && qtreel.grand_nature_id == 2 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 9 && qtreel.diff_op != null && qtreel.grand_nature_id == 2 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.diff_op != null && qtreel.grand_nature_id == 2 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 9 && qtreel.diff_op != null && qtreel.grand_nature_id == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 2 || qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 9 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 2 || qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 2 || qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 9 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null &&  qtreel.grand_nature_id == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
      };
    },

TauxExecutionBudgetEclatePersonnelRegie() {
 
      
    const val = ((parseFloat(this.MontantExecutePersonnelRegie(this.formData.unite_administrative_id)) / parseFloat(this.MontantIntialBudgetEclatePersonnelRegie(this.formData.unite_administrative_id)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    

    },





TauxExecutionBudgetEclateBienService() {
 
      
    const val = ((parseFloat(this.MontantExecuteBienService(this.formData.unite_administrative_id)) / parseFloat(this.MontantIntialBudgetEclateBienService(this.formData.unite_administrative_id)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    

    },

MontantIntialBudgetEclatePersonnel() {
      return (id) => {
        if (id != null && id != "") {
         return this.budgetEclate.filter(
            (qtreel) => qtreel.uniteadministrative_id == id && qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
        }
        return this.budgetEclate.filter(qtreel => qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
  
      };
    },

MontantExecutePersonnel() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.diff_op == null && qtreel.grand_nature_id == 2 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.diff_op == null && qtreel.grand_nature_id == 2 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.diff_op == null && qtreel.grand_nature_id == 2 || qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 9 && qtreel.diff_op == null && qtreel.grand_nature_id == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null &&  qtreel.grand_nature_id == 2 || qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 9 && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null &&  qtreel.grand_nature_id == 2 || qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null &&  qtreel.grand_nature_id == 2 || qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null &&  qtreel.grand_nature_id == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
      };
    },

TauxExecutionBudgetEclatePersonnel() {
 
      
    const val = ((parseFloat(this.MontantExecutePersonnel(this.formData.unite_administrative_id)) / parseFloat(this.MontantIntialBudgetEclatePersonnel(this.formData.unite_administrative_id)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    

    },

MontantIntialBudgetEclateBienService() {
      return (id) => {
        if (id != null && id != "") {
         return this.budgetEclate.filter(
            (qtreel) => qtreel.uniteadministrative_id == id && qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
        }
        return this.budgetEclate.filter(qtreel => qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.grandenature_id == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
  
      };
    },

MontantExecuteBienService() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.diff_op == null && qtreel.grand_nature_id == 5|| qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.diff_op == null && qtreel.grand_nature_id == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

          
          
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null &&  qtreel.grand_nature_id == 5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
      };
    },



    TauxExecution() {
 
      
    const val = ((parseFloat(this.MontantExecute(this.formData.unite_administrative_id)) / parseFloat(this.MontantIntialBudgetEclate(this.formData.unite_administrative_id)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    

    },

TauxExecutionBudgetEclateRegie() {
 
      
    const val = ((parseFloat(this.MontantExecuteBudgetEclateRegie(this.formData.unite_administrative_id)) / parseFloat(this.MontantIntialBudgetEclateRegie(this.formData.unite_administrative_id)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    

    },




    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },
    MontantIntialBudgetEclate() {
      return (id) => {
        if (id != null && id != "") {
         return this.budgetEclate.filter(
            (qtreel) => qtreel.uniteadministrative_id == id && qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
        }
        return this.budgetEclate.filter(qtreel => qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
  
      };
    },
    MontantIntialBudgetEclateRegie() {
      return (id) => {
        if (id != null && id != "") {
         return this.BudgetEclateRegie.filter(
            (qtreel) => qtreel.uniteadministrative_id == id && qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
        }
        return this.BudgetEclateRegie.filter(qtreel => qtreel.budget_active == 1 && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
  
      };
    },
    
    MontantExecute() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.diff_op == null|| qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.diff_op == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

          
          
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
      };
    },
    MontantExecuteBudgetEclateRegie() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.diff_op != null|| qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4 && qtreel.decision_cf== 8 && qtreel.diff_op != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);

          
          
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1 && qtreel.decision_cf== 8 && qtreel.exercice==this.anneeAmort && qtreel.diff_op != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
      };
    },
  listeDesUa() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        this.uniteAdministratives.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }

      return this.uniteAdministratives;
    },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      
    ]),
 formatageSomme:formatageSomme,
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style scoped>
h4{
  color:#ffffff
}
.flex{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
}
.square{
  width: 20px;
  height: 20px;

  color: #FAFAFA;
  text-align: center;
  margin-right: 5px;
  cursor: pointer;
  line-height: 50px;
}
.square:hover{
  opacity: 0.8;
}




.dropdown-menu .divider{ margin:4px 0px;}
.dropdown-menu{ min-width:180px;}
.dropdown-menu > li > a{ padding:3px 10px; color:#666; font-size:12px;}
.dropdown-menu > li > a i{ padding-right:3px;}
.userphoto img{ width:19px; height:19px;}
select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input, .label, .dropdown-menu, .btn, .well, .progress, .table-bordered, .btn-group > .btn:first-child, .btn-group > .btn:last-child, .btn-group > .btn:last-child, .btn-group > .dropdown-toggle, .alert{ border-radius:0px;}
.btn, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input{ box-shadow:none;}
.progress, .progress-success .bar, .progress .bar-success, .progress-warning .bar, .progress .bar-warning, .progress-danger .bar, .progress .bar-danger, .progress-info .bar, .progress .bar-info, .btn, .btn-primary{background-image:none;}
.accordion-heading h5{ width:70%; }
.form-horizontal .form-actions{ padding-left:20px; }
#footer{ padding:10px; text-align:center;}
hr{ border-top-color:#dadada;}
.carousel{ margin-bottom:0px;}
.fl { float:left}
.fr {float:right}
.label-important, .badge-important{ background:#f74d4d;}

/*Metro Background color class*/
.bg_lb{ background:#27a9e3;}
.bg_db{ background:#2295c9;}
.bg_lg{ background:#28b779;}
.bg_dg{ background:#28b779;}
.bg_ly{ background:#ffb848;}
.bg_dy{ background:#da9628;}
.bg_ls{ background:#2255a4;}
.bg_lo{ background:#da542e;}
.bg_lr{ background:#f74d4d;}
.bg_lv{ background:#603bbc;}
.bg_lh{ background:#b6b3b3;}


#logo, #loginbox {    width: 100%;    margin-left: auto;    margin-right: auto;    position: relative;}
#logo img {  margin: 0 auto;    display: block;}
#loginbox { overflow: hidden !important;
  width: 75%;
  text-align: left;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-box-shadow: -4px 10px 10px -6px rgba(0,0,0,0.75);
  -moz-box-shadow: -4px 10px 10px -6px rgba(0,0,0,0.75);
  box-shadow: -4px 10px 10px -6px rgba(0,0,0,0.75);


}
#loginbox .form{ width:100%; background: #fff; position:relative; top:0; left:0; }
#loginbox .form-actions { padding: 14px 20px 15px;}


/*@media (max-width:2500px){*/
/*  #logo { width: 60%; }*/
/*  #loginbox{*/
/*      width: 80%;*/
/*      top: 75%;*/
/*      left: 50%;*/

/*  }*/
/*}*/
@media (max-width: 480px){
  #logo { width: 40%; }
  #loginbox{ width:90%}
  #loginbox .control-group{ padding:8px 0; margin-bottom:0px;}
}



.timeline_area {
    position: relative;
    z-index: 1;
    background: transparent;


}
.single-timeline-area {
    position: relative;
    z-index: 1;

}
@media only screen and (max-width: 575px) {
    .single-timeline-area {
        padding-left: 100px;
    }
}
.single-timeline-area .timeline-date {
    position: absolute;
    width: 180px;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -ms-grid-row-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-right: 60px;
}
@media only screen and (max-width: 575px) {
    .single-timeline-area .timeline-date {
        width: 100px;
    }
}
.single-timeline-area .timeline-date::after {
    position: absolute;
    width: 3px;
    height: 100%;
    content: "";
    background-color: #ebebeb;
    top: 0;
    right: 25px;
    z-index: 1;
}
.single-timeline-area .timeline-date::before {
    position: absolute;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #f1c40f;
    content: "";
    top: 50%;
    right: 26px;
    z-index: 5;
    margin-top: -5.5px;
}
.single-timeline-area .timeline-date p {
    margin-bottom: 0;
    color: #020710;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
}
.single-timeline-area .single-timeline-content {
    position: relative;
    z-index: 1;
    padding: 25px 25px 25px;
    border-radius: 6px;
    margin-bottom: 10px;
    margin-top: 10px;
    -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125) !important;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23) !important;
    border: 5px solid orangered;
    height: 120px !important;
    text-align: center;
    background: #FFF !important;
    color: black !important;

}

.single-timeline-area .single-timeline-content:hover {
    border: 5px solid green;
    cursor: grab;
    background: orangered !important;
    color: white !important;

}
@media only screen and (max-width: 575px) {
    .single-timeline-area .single-timeline-content {
        padding: 20px;
    }
}
/*.single-timeline-area .single-timeline-content .timeline-icon {*/
/*  */
/*    width: 45px;*/
/*    height: 45px;*/
/*    background-color: #f1c40f;*/
/*    -webkit-box-flex: 0;*/
/*    -ms-flex: 0 0 25px;*/

/*    text-align: center !important;*/
/*    max-width: 50px;*/
/*    border-radius: 50%;*/

/*}*/
.single-timeline-area .single-timeline-content .timeline-icon i {
    color: #ffffff;
    line-height: 25px;
    text-align: center !important;
}
.single-timeline-area .single-timeline-content .timeline-text h6 {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
}
.single-timeline-area .single-timeline-content .timeline-text p {
    font-size: 13px;
    margin-bottom: 0;
}
.single-timeline-area .single-timeline-content:hover .timeline-icon,
.single-timeline-area .single-timeline-content:focus .timeline-icon {
    background-color: #020710;
}
.single-timeline-area .single-timeline-content:hover .timeline-text h6,
.single-timeline-area .single-timeline-content:focus .timeline-text h6 {
    color: #3f43fd;
}

</style>

