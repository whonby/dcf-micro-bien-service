<template>
  	<div>

<div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Detail marche par entreprise</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>
   <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                       <!-- <h4 v-if="detail_Entreprise" style="text-align: center;font-size:20px;font-weight:bold;">LISTES DES MARCHES DE L'ENTREPRISE : {{afficheRaisonSocial(detail_Entreprise.entreprise_id)}}  </h4> -->
                        <table class="table table-striped table-bordered" v-if="detail_Entreprise">
                            <thead>
                           <tr>
                                            
                                            <th>Raison social </th>
                                           
                                            <th>Secteur activite</th>
                                           
                                            <th>Regime Impossition</th>
                                            <th>Forme Juridique</th>
                                            
                                            
                                        </tr>
                            </thead>
                            <tbody>
                             <tr>
                  <td>{{afficheRaisonSocial(detail_Entreprise.entreprise_id) || 'Non renseigné'}}</td>
                    <td>{{afficheLibelleSecteurActivite(afficheIdSecteurActivite(detail_Entreprise.entreprise_id)) || 'Non renseigné'}}</td>
                     <td>{{afficheLibelleRegimeImposition(afficheIdRegimeImposition(detail_Entreprise.entreprise_id)) || 'Non renseigné'}}</td>
                      <td>{{afficheLibelleFormeJuridique(afficheIdFormeJuridique(detail_Entreprise.entreprise_id)) || 'Non renseigné'}}</td>

                        
                   </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">LISTE DES MARCHES</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab2">MARCHES EN EXECUTIONS</a>
                      </li>
                        <li>
                        <a data-toggle="tab" href="#tab22">MARCHES TERMINES</a>
                      </li>
                        <li>
                        <a data-toggle="tab" href="#tab23">MARCHES RESILIES</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">AFFECTION DE LA DIRECTION</a>
                      </li> --> 
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                                            
                                            <th>Année</th>
                                           
                                            <th>UA</th>
                                            <th>Type marche</th>
                                           <th>Numero marché</th>
                                            <th>Objet marche</th>
                                            <th>Montant reel</th>
                                            
                                           
                                        </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="entrep in 
                listeToutMarcheParEntrep(detail_Entreprise.entreprise_id)"
                 :key="entrep.id">
                 <td>{{afficheAnneeDuMarche(entrep.marche_id) || 'Non renseigné'}}</td>
                  
                   <td>{{afficheLibelleUa(afficheIdUA(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td>{{afficheLibelleTypeMarche(afficheIdTypeMarche(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td>{{afficheNumeroMarche(entrep.marche_id) || 'Non renseigné'}}</td>
                   <td>{{afficheObjetMarche(entrep.marche_id) || 'Non renseigné'}}</td>
                   <td style="color:red;font-size:14px;text-align:center">{{formatageSomme(parseFloat(afficheMontantReel(entrep.marche_id))) || 'Non renseigné'}}</td>
                          
                         
                   </tr>
                   <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                   
                     <td style="color:red;font-size:14px;text-align:center">CHIFFRE D'AFFAIRE</td>
                     <td style="color:red;font-size:14px;text-align:center">{{formatageSomme(parseFloat(montantToutMarcheParEntrep(detail_Entreprise.entreprise_id )))}}</td>
                   </tr>
                </tbody>
              </table>
          </div>
                            <div id="tab2" class="tab-pane ">
  <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                                            
                                            <th>Année</th>
                                           
                                            <th>UA</th>
                                            <th>Type marche</th>
                                           <th>Numero marché</th>
                                            <th>Objet marche</th>
                                            <th>Montant reel</th>
                                            
                                           
                                        </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="entrep in 
                listeMarcheEnExecutionParEntreprise(detail_Entreprise.entreprise_id)"
                 :key="entrep.id">
                  <td>{{afficheAnneeDuMarche(entrep.marche_id) || 'Non renseigné'}}</td>
                   <td>{{afficheLibelleUa(afficheIdUA(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td>{{afficheLibelleTypeMarche(afficheIdTypeMarche(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td>{{afficheNumeroMarche(entrep.marche_id) || 'Non renseigné'}}</td>
                   <td>{{conversionMajiscule(afficheObjetMarche(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td style="color:red;font-size:14px;text-align:center">{{formatageSomme(parseFloat(afficheMontantReel(entrep.marche_id))) || 'Non renseigné'}}</td>
                          
                         
                   </tr>
                    <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td style="color:red;font-size:14px;text-align:center">MONTANT TOTAL</td>
                     <td style="color:red;font-size:14px;text-align:center">{{formatageSomme(parseFloat(montantToutMarcheExecuteParEntrep(detail_Entreprise.entreprise_id)))}}</td>
                   </tr>
                </tbody>
              </table>
        </div>
                      <div id="tab22" class="tab-pane ">
                         <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                                            
                                            <th>Année</th>
                                           
                                            <th>UA</th>
                                            <th>Type marche</th>
                                           <th>Numero marché</th>
                                            <th>Objet marche</th>
                                            <th>Montant reel</th>
                                            
                                           
                                        </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="entrep in 
                listeMarcheEnTermineParEntreprise(detail_Entreprise.entreprise_id)"
                 :key="entrep.id">
                  <td>{{afficheAnneeDuMarche(entrep.marche_id) || 'Non renseigné'}}</td>
                   <td>{{afficheLibelleUa(afficheIdUA(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td>{{afficheLibelleTypeMarche(afficheIdTypeMarche(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td>{{afficheNumeroMarche(entrep.marche_id) || 'Non renseigné'}}</td>
                   <td>{{conversionMajiscule(afficheObjetMarche(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td style="color:red;font-size:14px;text-align:center">{{formatageSomme(parseFloat(afficheMontantReel(entrep.marche_id))) || 'Non renseigné'}}</td>
                          
                         
                   </tr>
                    <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td style="color:red;font-size:14px;text-align:center">MONTANT TOTAL</td>
                     <td style="color:red;font-size:14px;text-align:center">{{formatageSomme(parseFloat(montantToutMarcheTermineParEntrep(detail_Entreprise.entreprise_id)))}}</td>
                   </tr>
                </tbody>
              </table>
                        <!-- <listeMarcheTermineParEntreprise :detail_Entreprise.entreprise_id="detail_Entreprise.entreprise_id"></listeMarcheTermineParEntreprise> -->
                      </div>
                      <div id="tab23" class="tab-pane ">
                         <!-- <listeMarcheResilieParEntreprise :detail_Entreprise.entreprise_id="detail_Entreprise.entreprise_id"></listeMarcheResilieParEntreprise> -->
                      <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                                            
                                            <th>Année</th>
                                           
                                            <th>UA</th>
                                            <th>Type marche</th>
                                           <th>Numero marché</th>
                                            <th>Objet marche</th>
                                            <th>Montant reel</th>
                                            
                                           
                                        </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="entrep in 
                listeMarcheEnResilieParEntreprise(detail_Entreprise.entreprise_id)"
                 :key="entrep.id">
                  <td>{{afficheAnneeDuMarche(entrep.marche_id) || 'Non renseigné'}}</td>
                   <td>{{afficheLibelleUa(afficheIdUA(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td>{{afficheLibelleTypeMarche(afficheIdTypeMarche(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td>{{afficheNumeroMarche(entrep.marche_id) || 'Non renseigné'}}</td>
                   <td>{{conversionMajiscule(afficheObjetMarche(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td style="color:red;font-size:14px;text-align:center">{{formatageSomme(parseFloat(afficheMontantReel(entrep.marche_id))) || 'Non renseigné'}}</td>
                          
                         
                   </tr>
                    <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td style="color:red;font-size:14px;text-align:center">MONTANT TOTAL</td>
                     <td style="color:red;font-size:14px;text-align:center">{{formatageSomme(parseFloat(montantToutMarcheResilieParEntrep(detail_Entreprise.entreprise_id)))}}</td>
                   </tr>
                </tbody>
              </table>
                      </div>
      </div>
      <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau</a>
       
      </div>
       </div>
      
              </table>
 
  </div>


    </div>
</div>


    </div>
    
        <!-- <div class="container-fluid"> -->


    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->








    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->













        </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
     import moment from "moment";
    import { formatageSomme } from './../../../src/Repositories/Repository';
    //import LIsteToutMarcheParEntreprise from '../gestionMarche/marcheParEntreprise/LIsteToutMarcheParEntreprise.vue'
  // import listeMarcheExecuteParEntreprise from '../gestionMarche/marcheParEntreprise/listeMarcheExecuteParEntreprise.vue'
  //  import listeMarcheTermineParEntreprise from '../gestionMarche/marcheParEntreprise/listeMarcheTermineParEntreprise.vue'
  //   import listeMarcheResilieParEntreprise from '../gestionMarche/marcheParEntreprise/listeMarcheResilieParEntreprise.vue'
 export default {
        name: 'compte',
        components:{
          //  LIsteToutMarcheParEntreprise,
          //  listeMarcheExecuteParEntreprise,
          //  listeMarcheTermineParEntreprise,
          //  listeMarcheResilieParEntreprise
        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                
              


            };
           
        },
        
created() {
            this.marcheid=this.$route.params.id
   this.detail_Entreprise = this.acteEffetFinanciers.find(
       idmarche => idmarche.entreprise_id == this.$route.params.id
         )
  
  
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {
            ...mapGetters("bienService", ["typeMarches",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),

           ...mapGetters("SuiviImmobilisation", [
      "familles",
      "services",
      "listeBesoinValider",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo",
      "listeBesoinValider",
      "getAfficheStockArticle",
      "getPersoNormeArticle",
      "getPersoStock",
      "stockageArticle",
      "getFacture"
      
    ]),
 ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
  ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    ...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays","exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections","plans_programmes"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),

   
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
   
 ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
          montantToutMarcheExecuteParEntrep: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.acteEffetFinanciers.filter(idmarche => idmarche.entreprise_id == id && this.afficheAnneeDuMarche(idmarche.marche_id)== this.anneeAmort && idmarche.entreprise_id != null && this.afficheEtatMarche(idmarche.marche_id)== 2 && this.afficheMarcheGestionSib(idmarche.marche_id)== 0).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
                    }
                }
            },
      conversionMajiscule() {
      return (libelle) => {
        if (!libelle) return null;
        return libelle.toLocaleUpperCase();
      };
    },
            montantToutMarcheTermineParEntrep: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.acteEffetFinanciers.filter(idmarche => idmarche.entreprise_id == id && this.afficheAnneeDuMarche(idmarche.marche_id)== this.anneeAmort  && this.afficheEtatMarche(idmarche.marche_id)== 5 ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
                    }
                }
            },
            afficheEtatMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },
 listeMarcheEnResilieParEntreprise: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.acteEffetFinanciers.filter(idmarche => idmarche.entreprise_id == id && this.afficheAnneeDuMarche(idmarche.marche_id)== this.anneeAmort && this.afficheEtatMarche(idmarche.marche_id)== 3 )
                    }
                }
            },
              montantToutMarcheResilieParEntrep: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.acteEffetFinanciers.filter(idmarche => idmarche.entreprise_id == id && this.afficheAnneeDuMarche(idmarche.marche_id)== this.anneeAmort && this.afficheEtatMarche(idmarche.marche_id)== 3 ).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
                    }
                }
            },
listeMarcheEnTermineParEntreprise: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.acteEffetFinanciers.filter(idmarche => idmarche.entreprise_id == id && this.afficheAnneeDuMarche(idmarche.marche_id)== this.anneeAmort && idmarche.entreprise_id != null && this.afficheEtatMarche(idmarche.marche_id)== 5)
                    }
                }
            },
listeMarcheEnExecutionParEntreprise: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.acteEffetFinanciers.filter(idmarche => idmarche.entreprise_id == id && this.afficheAnneeDuMarche(idmarche.marche_id)== this.anneeAmort &&  this.afficheEtatMarche(idmarche.marche_id)== 2 )
                    }
                }
            },
   afficheMarcheGestionSib() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sib;
      }
      return 0
        }
      };
    },
    listeToutMarcheParEntrep: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.acteEffetFinanciers.filter(idmarche => idmarche.entreprise_id == id && this.afficheAnneeDuMarche(idmarche.marche_id)== this.anneeAmort)
                    }
                }
            },

            montantToutMarcheParEntrep: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.acteEffetFinanciers.filter(idmarche => idmarche.entreprise_id == id && this.afficheAnneeDuMarche(idmarche.marche_id)== this.anneeAmort  && this.afficheMarcheGestionSib(idmarche.marche_id)==1).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
                    }
                }
            },
   
   anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    afficheAnneeDuMarche() {
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


 afficheIdUA() {
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
afficheLibelleUa() {
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
    

    afficheIdTypeMarche() {
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
afficheLibelleTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficheNumeroMarche() {
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
    afficheObjetMarche() {
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
     afficheMontantReel() {
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
    //         afficheAnneeDuMarche() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.marches.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.exo_id;
    //   }
    //   return 0
    //     }
    //   };
    // },
 afficheRaisonSocial() {
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
afficheIdSecteurActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.secteur_activite_id;
      }
      return 0
        }
      };
    },
    afficheLibelleSecteurActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.secteur_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

    afficheIdFormeJuridique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.forme_juridique;
      }
      return 0
        }
      };
    },
    afficheLibelleFormeJuridique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterformeJuridique.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

    afficheIdRegimeImposition() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.regime_impossition;
      }
      return 0
        }
      };
    },
    afficheLibelleRegimeImposition() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterregimeImpositions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


        },
        methods: {
            ...mapActions("bienService", [
                "getEngagement",
                "supprimerEngagement",
                "modifierEngagement",
                "ajouterEngagement",
                "ajouterMandat",
                "modifierMandat",
                "supprimerMandat",
                "ajouterFacture",
                "modifierFacture",
                "supprimerFacture",
                "ajouterChoixProcedure",
                 "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",
      "modifierMarche",
      "getActeEffetFinancier",
      "getMarche"
               
            ]),
 ...mapActions("uniteadministrative", [              
                "modifierMontantBudgetaire",
                "ajouterRealiteServiceFait",
                "modifierRealiteServiceFait",
                "ajouterLiquidation",
                "modifierLiquidation",
                "supprimerLiquidation",
                "supprimerRealiteServiceFait"
            ]),
    

  retourListeEntreprise(){
                 this.$router.push({ name: 'marcheEntreprise' })
            },

















     

    
 



  











          
      formatageSomme:formatageSomme,

            ExporterEnExel(){
                this.$refs.excel.click()
            },
             formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },






  
   
    
    // afficher modal de modification
   
    // fonction pour vider l'input modification
  

    },


















         
        }
    








</script>
<style scoped>
 /* .testtaille {
        
      height: 1000px;
    } */
    .taillemodal45 {
        width: 1200px;
        margin: 0 -580px;
      
    }
    .gdmodelfour
    {
 width: 1000px;
 margin: 0 -580px;
 height: 500px;
    }
    .grdirModalActeEffet
    {

 width: 1000px;
 margin: 0 -530px;
 height: 500px;

    }
    .taillModal{
        width: 970px;
 margin: 0 -530px;

    }
    
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
       .taillemodal {
        width: 1200px;
        margin: 0 -680px;
    }
    .tailfacture{
      height: 500px;
    }

     .taillemodal6 {
        width: 1600px;
        margin: 0 -780px;
    }
    .taillemodal61 {
        width: 1500px;
        
    }
    .tailleRealiteServiceFait{
        width: 1600px;
        margin: 0 -780px;
    }
    .tailgrand{
  width: 89%;
  margin: 0 -45%;
}
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
</style>
