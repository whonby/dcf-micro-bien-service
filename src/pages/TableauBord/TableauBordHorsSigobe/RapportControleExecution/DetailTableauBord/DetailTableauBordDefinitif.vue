
<template>
  <div>
      <h1 style="text-align:center">TABLEAU DE BORD GENERAL HORS SIGOBE</h1>
    
  
 <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 
        <br>
  <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <div class="widget-box">
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                   
                     <li class="active">
                      <a data-toggle="tab" href="#DEMANDE"
                        >DETAIL OP DEFINITIF </a
                      >
                    </li>
                     
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                 
                  <div id="DEMANDE" class="tab-pane active" >
                    <h3 style="text-align:center">DETAIL OP DEFINITIF : {{libelleUa(marcheid)}}</h3>
                <div class="single-timeline-area">

                                  <div class="row-fluid">
                                     <div class="span3"  >
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
<!--                                              <div class="timeline-icon"><i class="fa fa-desktop" aria-hidden="true"></i></div>-->
                                              <div class="timeline-text">
                                                  <h5 style="font-size:20px">DOSSIER EN ATTENTE</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                     
                                                     
                                                  </div>
                                                  <p style="text-align:right;font-size:20px">Nombres: {{NombreOpProvisoireEnAttend(marcheid)}}</p>
                                                  <br>
                                                   <p style="text-align:right;font-size:20px">Taux: {{TauxOpProvisoireEnAttend}} %</p>
                                                  <br>
                                                  <p style="text-align:right;font-size:20px">Montant: {{MontantOpProvisoireEnAttend(marcheid)}}</p>
                                                  
                                                  <router-link :to="{ name: 'ToutLesOpProvisoireEnAttente', params: {}}"
           v-if="marcheid==0"   >
                  <button   class="btn  btn-danger" style="font-size:20px;text-align:right;" ><span class="" style="font-weight: bold;text-align:right;font-size:20px"> Voir Listes</span></button>
                   </router-link> 
                    <router-link :to="{ name: 'TableauOpDefinitif', params: { id: marcheid }}"
           v-if="marcheid!=0"     >
                  <button   class="btn  btn-danger" style="font-size:20px;text-align:right;" ><span class="" style="font-weight: bold;text-align:right;font-size:20px"> Voir Listes</span></button>
                   </router-link> 
                                                  
                                              </div>
                                          </div>
                                      </div>
                                      <div class="span3" >
                                          <div  class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; ">

                                               <div class="timeline-text">
                                                  <h5 style="font-size:20px">DOSSIER DIFFERE</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                     
                                                  </div>
                                                 <p style="text-align:right;font-size:20px">Nombres: {{NombreOpProvisoireEnDiferer(marcheid)}}</p>
                                                  <br>
                                                   <p style="text-align:right;font-size:20px">Taux: {{TauxOpProvisoireEnDiferer}} %</p>
                                                 <br>
                                                  <p style="text-align:right;font-size:20px">Montant: {{formatageSomme(parseFloat(MontantOpAnnulationDiffere(marcheid)))}}</p>
                                                    <router-link :to="{ name: 'ToutLesOpProvisoireDiferer', params: {}}"
           v-if="marcheid==0"   >
                  <button   class="btn  btn-danger" style="font-size:20px;text-align:right;" ><span class="" style="font-weight: bold;text-align:right;font-size:20px"> Voir Listes</span></button>
                   </router-link> 
                    <router-link :to="{ name: 'TableauOpDefinitifDiffere', params: { id: marcheid }}"
           v-if="marcheid!=0"     >
                  <button   class="btn  btn-danger" style="font-size:20px;text-align:right;" ><span class="" style="font-weight: bold;text-align:right;font-size:20px"> Voir Listes</span></button>
                   </router-link> 
                                              </div>
                                          </div>
                                      </div>



 <div class="span3"  >
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">

                                             <div class="timeline-text">
                                                  <h5 style="font-size:20px">DOSSIER REJETE</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                     
                                                  </div>
                                                  <p style="text-align:right;font-size:20px">Nombres: {{NombreOpProvisoireEnRejeter(marcheid)}}</p>
                                                  <br>
                                                   <p style="text-align:right;font-size:20px">Taux: {{TauxOpProvisoireEnRejeter}} %</p>
                                                   <br>
                                                  <p style="text-align:right;font-size:20px">Montant: {{formatageSomme(parseFloat(MontantOpAnnulationRejete(marcheid)))}}</p>
                                                    <router-link :to="{ name: 'ToutLesOpProvisoireRejete', params: {}}"
           v-if="marcheid==0"   >
                  <button   class="btn  btn-danger" style="font-size:20px;text-align:right;" ><span class="" style="font-weight: bold;text-align:right;font-size:20px"> Voir Listes</span></button>
                   </router-link> 
                    <router-link :to="{ name: 'TableauOpDefinitifRejete', params: { id: marcheid }}"
           v-if="marcheid!=0"     >
                  <button   class="btn  btn-danger" style="font-size:20px;text-align:right;" ><span class="" style="font-weight: bold;text-align:right;font-size:20px"> Voir Listes</span></button>
                   </router-link> 
                                              </div>
                                          </div>
                                      </div>
                                      <div class="span3"  >
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                                            <div class="timeline-text">
                                                  <h5 style="font-size:20px">DOSSIER VISE</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                     
                                                  </div>
                                               <p style="text-align:right;font-size:20px">Nombres: {{NombreOpProvisoireEnVise(marcheid)}}</p>
                                                  <br>
                                                   <p style="text-align:right;font-size:20px">Taux: {{TauxOpProvisoireEnVise}} %</p>
                                                   <br>
                                                  <p style="text-align:right;font-size:20px">Montant: {{formatageSomme(parseFloat(MontantOpAnnulationVise(marcheid)))}}</p>
                                                   <router-link :to="{ name: 'ToutLesOpProvisoireVise', params: {}}"
           v-if="marcheid==0"   >
                  <button   class="btn  btn-danger" style="font-size:20px;text-align:right;" ><span class="" style="font-weight: bold;text-align:right;font-size:20px"> Voir Listes</span></button>
                   </router-link> 
                    <router-link :to="{ name: 'TableauOpDefinitifVise', params: { id: marcheid }}"
           v-if="marcheid!=0"     >
                  <button   class="btn  btn-danger" style="font-size:20px;text-align:right;" ><span class="" style="font-weight: bold;text-align:right;font-size:20px"> Voir Listes</span></button>
                   </router-link> 
                                              </div>
                                          </div>
                                      </div>
                                      
                                      
                                       <!-- </li> -->
                                  </div>
                              </div> 
                              <div class="single-timeline-area">

                                  <div class="row-fluid">
        
                                    
                                      <div class="span3"  >
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                                            <div class="timeline-text">
                                                  <h5 style="font-size:20px">DOSSIER VISE AVEC OB</h5>
                                                  <div>
                                                      <!-- <i style="font-size: 35px !important;" class="icon-cogs"></i> -->
                                                      
                                                       
                                                  </div>
                                                <p style="text-align:right;font-size:20px">Nombres: {{NombreOpProvisoireEnViseO(marcheid)}}</p>
                                                  <br>
                                                   <p style="text-align:right;font-size:20px">Taux: {{TauxOpProvisoireEnViseO}} %</p>
                                                   <br>
                                                  <p style="text-align:right;font-size:20px">Montant: {{formatageSomme(parseFloat(MontantOpAnnulationViseO(marcheid)))}}</p>
                                                  <router-link :to="{ name: 'ToutLesOpProvisoireViseO', params: {}}"
           v-if="marcheid==0"   >
                  <button   class="btn  btn-danger" style="font-size:20px;text-align:right;" ><span class="" style="font-weight: bold;text-align:right;font-size:20px"> Voir Listes</span></button>
                   </router-link> 
                    <router-link :to="{ name: 'TableauOpDefinitifViseO', params: { id: marcheid }}"
           v-if="marcheid!=0"     >
                  <button   class="btn  btn-danger" style="font-size:20px;text-align:right;" ><span class="" style="font-weight: bold;text-align:right;font-size:20px"> Voir Listes</span></button>
                   </router-link> 
                                              </div>
                                          </div>
                                      </div>
                                      
                                       <!-- </li> -->
                                  </div>
                              </div>
                  </div>
                
                </div>
            
                
               

                <br />
              </div>
            </table>
          </div>
               
                             
          
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";
import { formatageSomme } from "@/Repositories/Repository";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
     components: {
    //ModelListSelect,
    
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
      formData:{
        unite_administrative_id:0
      },
      editMandat:{
        test:0,
        
      }
    };
  },
created() {
    this.marcheid = this.$route.params.id;
   
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
    libelleUa() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    // debut code op provisoire
    TauxOpProvisoireEnViseO() {
    const val = ((parseFloat(this.NombreOpProvisoireEnViseO(this.marcheid)) / parseFloat(this.NombreOpProvisoire(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpProvisoireEnViseO() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 9).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 9).length;
  
      };
    },
TauxOpProvisoireEnVise() {
    const val = ((parseFloat(this.NombreOpProvisoireEnVise(this.marcheid)) / parseFloat(this.NombreOpProvisoire(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpProvisoireEnVise() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 8).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 8).length;
  
      };
    },
TauxOpProvisoireEnRejeter() {
    const val = ((parseFloat(this.NombreOpProvisoireEnRejeter(this.marcheid)) / parseFloat(this.NombreOpProvisoire(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpProvisoireEnRejeter() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 2).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 2).length;
  
      };
    },
TauxOpProvisoireEnDiferer() {
    const val = ((parseFloat(this.NombreOpProvisoireEnDiferer(this.marcheid)) / parseFloat(this.NombreOpProvisoire(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpProvisoireEnDiferer() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 3).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 3).length;
  
      };
    },




    TauxOpProvisoireEnAttend() {
    const val = ((parseFloat(this.NombreOpProvisoireEnAttend(this.marcheid)) / parseFloat(this.NombreOpProvisoire(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpProvisoireEnAttend() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 0).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 0).length;
  
      };
    },
       MontantOpAnnulationDiffere() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
  
      };
    },
    MontantOpAnnulationRejete() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
  
      };
    },
    MontantOpAnnulationVise() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 8).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 8).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
  
      };
    },
    MontantOpAnnulationViseO() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 9).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 9).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
  
      };
    },
    MontantOpProvisoireEnAttend() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
  
      };
    },
    NombreOpDirect() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1  && qtreel.diff_op == null).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null).length;
  
      };
    },
  MontantOpDirect() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1  && qtreel.diff_op == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
      };
    },
    NombreOpDefinitif() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null).length;
  
      };
    },
  MontantOpDefinitif() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
      };
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
     NombreOpAnnulation() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null).length;
  
      };
    },
  MontantOpAnnulation() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
      };
    },
    NombreOpProvisoire() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null).length;
  
      };
    },
  MontantOpProvisoire() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1  && qtreel.diff_op == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0); 
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
  
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
    // fin code op provisoire

// DEBUT code op ANNULATION
  TauxOpAnnulationEnViseO() {
    const val = ((parseFloat(this.NombreOpAnnulationEnViseO(this.marcheid)) / parseFloat(this.NombreOpAnnulation(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpAnnulationEnViseO() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 9).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 9).length;
  
      };
    },
TauxOpAnnulationEnVise() {
    const val = ((parseFloat(this.NombreOpAnnulationEnVise(this.marcheid)) / parseFloat(this.NombreOpAnnulation(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpAnnulationEnVise() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 8).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 8).length;
  
      };
    },
TauxOpAnnulationEnRejeter() {
    const val = ((parseFloat(this.NombreOpAnnulationEnRejeter(this.marcheid)) / parseFloat(this.NombreOpAnnulation(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpAnnulationEnRejeter() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 2).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 2).length;
  
      };
    },
TauxOpAnnulationEnDiferer() {
    const val = ((parseFloat(this.NombreOpAnnulationEnDiferer(this.marcheid)) / parseFloat(this.NombreOpAnnulation(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpAnnulationEnDiferer() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 3).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 3).length;
  
      };
    },




    TauxOpAnnulationEnAttend() {
    const val = ((parseFloat(this.NombreOpAnnulationEnAttend(this.marcheid)) / parseFloat(this.NombreOpAnnulation(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpAnnulationEnAttend() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 0).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 0).length;
  
      };
    },

// FIN code op ANNULATION


// DEBUT code op DEFINITIF
  TauxOpDefinitifEnViseO() {
    const val = ((parseFloat(this.NombreOpDefinitifEnViseO(this.marcheid)) / parseFloat(this.NombreOpDefinitif(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpDefinitifEnViseO() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 9).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 9).length;
  
      };
    },
TauxOpDefinitifEnVise() {
    const val = ((parseFloat(this.NombreOpDefinitifEnVise(this.marcheid)) / parseFloat(this.NombreOpDefinitif(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpDefinitifEnVise() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 8).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 8).length;
  
      };
    },
TauxOpDefinitifEnRejeter() {
    const val = ((parseFloat(this.NombreOpDefinitifEnRejeter(this.marcheid)) / parseFloat(this.NombreOpDefinitif(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpDefinitifEnRejeter() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 2).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 2).length;
  
      };
    },
TauxOpDefinitifEnDiferer() {
    const val = ((parseFloat(this.NombreOpDefinitifEnDiferer(this.marcheid)) / parseFloat(this.NombreOpDefinitif(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpDefinitifEnDiferer() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 3).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 3).length;
  
      };
    },




    TauxOpDefinitifEnAttend() {
    const val = ((parseFloat(this.NombreOpDefinitifEnAttend(this.marcheid)) / parseFloat(this.NombreOpDefinitif(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpDefinitifEnAttend() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==4  && qtreel.diff_op == null && qtreel.decision_cf == 0).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==4  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 0).length;
  
      };
    },
 
// FIN code op Definitif

// DEBUT code op DEFINITIF
  TauxOpDirectEnViseO() {
    const val = ((parseFloat(this.NombreOpDirectEnViseO(this.marcheid)) / parseFloat(this.NombreOpDirect(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpDirectEnViseO() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1  && qtreel.diff_op == null && qtreel.decision_cf == 9).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 9).length;
  
      };
    },
TauxOpDirectEnVise() {
    const val = ((parseFloat(this.NombreOpDirectEnVise(this.marcheid)) / parseFloat(this.NombreOpDirect(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpDirectEnVise() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1  && qtreel.diff_op == null && qtreel.decision_cf == 8).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 8).length;
  
      };
    },
TauxOpDirectEnRejeter() {
    const val = ((parseFloat(this.NombreOpDirectEnRejeter(this.marcheid)) / parseFloat(this.NombreOpDirect(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpDirectEnRejeter() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1  && qtreel.diff_op == null && qtreel.decision_cf == 2).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 2).length;
  
      };
    },
TauxOpDirectEnDiferer() {
    const val = ((parseFloat(this.NombreOpDirectEnDiferer(this.marcheid)) / parseFloat(this.NombreOpDirect(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpDirectEnDiferer() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1  && qtreel.diff_op == null && qtreel.decision_cf == 3).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 3).length;
  
      };
    },




    TauxOpDirectEnAttend() {
    const val = ((parseFloat(this.NombreOpDirectEnAttend(this.marcheid)) / parseFloat(this.NombreOpDirect(this.marcheid)))*100 ).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
    },
     NombreOpDirectEnAttend() {
      return (id) => {
        if (id != null && id != "") {
         return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.unite_administrative_id == id  && qtreel.exercice==this.anneeAmort && qtreel.type_ordre_paiement==1  && qtreel.diff_op == null && qtreel.decision_cf == 0).length;
        }
        return this.gettersgestionOrdrePaiement.filter(qtreel =>  qtreel.type_ordre_paiement==1  && qtreel.exercice==this.anneeAmort && qtreel.diff_op == null && qtreel.decision_cf == 0).length;
  
      };
    },
    
// FIN code op Definitif
  },
  methods: {
    ...mapActions("uniteadministrative", [
      
    ]),
     afficherModalListePersonnel(){
                window.history.back()
            },
        clickBoutonEnProvisoire: function() {
            this.editMandat.test = 1;
        },
        clickBoutonEnAnnulation: function() {
            this.editMandat.test = 2;
        },
        clickBoutonOpDefinitif: function() {
            this.editMandat.test = 3;
        },
        clickBoutonEnDirect: function() {
            this.editMandat.test = 4;
        },
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
.single-timeline-area .single-timeline-content:after {
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

hover