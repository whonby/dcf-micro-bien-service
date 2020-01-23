this.ajouterMarche
<template>
  
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid tailtableau1">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Demande d' Engagement</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped tailtableau">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">Budget General</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">Type Procedure</a>
                      </li>
                      
                       <li>
                        <a data-toggle="tab" href="#tab3">Imputation Budgetaire</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content tailfenet">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Exercice Budgetaire</label>
                            
                               
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
                            <label class="control-label">Numero engagement</label>
                            
                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span"
                               
                              v-model="formData.numero_engage"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Unite administrative</label>
                            <div class="controls">
                              <select v-model="formData.ua_id">
                                 <option
                                  v-for="gpeua in uniteAdministrative(detail_marche.id)"
                                  :key="gpeua.id"
                                  :value="gpeua.objetUniteAdministrative.id"
                                >{{gpeua.objetUniteAdministrative.libelle}}</option>
                               
                               
                              </select>
                              
                            </div>
                          </div>
                          
                        </td>
                         
                        <td>
                          <div class="control-group">
                            <label class="control-label">Programme/dotation</label>
                            <div class="controls">
                              <select v-model="formData.programme_id">
                                
                                <option
                                  v-for="fam in programmeDynamiques(formData.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheProgramme.id"
                                >{{fam.afficheProgramme.code}}-{{fam.afficheProgramme.libelle}}</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                       
                        <td>
                           <div class="control-group">
                            <label class="control-label">Action</label>
                            <div class="controls">
                              <select v-model="formData.action_id">
                               <option
                                  v-for="fam in actionDynamiques(formData.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheAction.id"
                                >{{fam.afficheAction.code}}-{{fam.afficheAction.libelle}}</option>
                               
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
                                  v-for="fam in activiteDynamiques(formData.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheActivite.id"
                                >{{fam.afficheActivite.code}}-{{fam.afficheActivite.libelle}}</option>
                              </select>
                              
                            </div>
                          </div>
                          </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Section</label>
                            <div class="controls">
                              <select v-model="formData.uniteadministrative_id">
                               <option
                                  v-for="fam in sectionDynamiques(formData.ua_id)"
                                  :key="fam.id"
                                  :value="fam.secti.id"
                                >{{fam.secti.code}}-{{fam.secti.nom_section}}</option>
                                
                              </select>
                            </div>
                          </div>
                          
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Nature depense</label>
                             <div class="controls">
                                  <select v-model="formData.grd_nature_id">
                              <option
                                  v-for="fam in grandNatureDepense(formData.ua_id)"
                                  :key="fam.id"
                                  :value="fam.afficheGdeNature.id"
                                >{{fam.afficheGdeNature.libelle}}</option>
                                  </select>
                              </div>
                          </div>
                           <input
                                type="hidden"
                                class="span"
                               
                             :value="detail_marche.id"
                              />
                        </td>

                       
                        
                       
                      </tr>
                    
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane">
                      

                      <tr>
                        
                        
                       
                        
                        <td>
                           <div class="control-group">
                            <label class="control-label">Type Procedure</label>
                            <div class="controls">
                              <select v-model="formData.type_procedure_id">
                                   
                              
                                    <option value="1">Engagement par Bon de Commande</option>
                                    <option value="0">Engagement direct</option>
                              </select>
                               
                               
                             
                              
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Type d'engagement Direct</label>
                            <div class="controls">
                              <select v-model="formData.type_engagement_id">
                                  <option value="0">Marche</option>
                                    <option value="1">Régie d'avances - reservation des crédits</option>
                                       <option value="2">Régularisation d'ordre de paiement (OP)</option>
                                    <option value="3">Régularisation avances de trésorerie (AT)</option>
                                     <option value="4">Autres</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         
                        <td>
                            <div class="control-group">
                              <label class="control-label">Réf. Engagement  juridique</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="formData.ref_juridique"
                                />
                              </div>
                            </div>
                          </td>
                        
                       <td>
                         <div class="control-group">
                            <label class="control-label">Mode de paiement</label>
                            <div class="controls">
                              <select v-model="formData.mod_paiement_engage">
                                
                                <option value="0">Bon de caisse</option>
                                    <option value="1">Chèque Spécial Trésor</option>
                                       <option value="2">Chèque Spécial Enregistrement</option>
                                    <option value="3">Virement</option>
                                     <option value="4">Chèque Spécial Douanes</option>
                                      <option value="4">Paiement direct par bailleur de fonds</option>
                                       <option value="4">Autres</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                          <td>
                         <div class="control-group">
                            <label class="control-label">Numero cc</label>
                            <div class="controls">
                             <div class="controls">
                              <input type="text" class="span" :value="NumeroFournisseur" readonly/>
                               
                            </div>
                              
                            </div>
                          </div>
                        </td>
                      </tr>
                        <tr>
                         
                         
                      
                        
                          
                       
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nom entreprise</label>
                            <div class="controls">
                              <input type="text" class="span" :value="nomFournisseur"/>
                               
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Adresse</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir adresse_entreprise"
                                :value="AdresseFournisseur"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.Bailler_id" />
                            </div>
                          </div>
                        </td>
                        <td colspan=2>
                         <div class="control-group">
                            <label class="control-label">Objet de la dépense</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.objet_depense" />
                            </div>
                          </div>
                        </td>
                      </tr>
                     
                      <tr>
                         
                         
                      
                        
                          
                        
                       
                        
                       
                        <!-- <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.Bailleur" />
                            </div>
                          </div>
                        </td> -->
                       
                      </tr>
                      <tr>
                         
                         
                      
                        
                          
                         <td>
                         <div class="control-group">
                            <label class="control-label">Total général</label>
                            <div class="controls">
                              <input type="text" class="span" :value="sommeMontant" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.montant_tresor" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.montant_don" />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.montant_emprunt" />
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                    </div>
                    <!--ongle 3 -->
                    <!-- <div id="tab3" class="tab-pane"> -->
                    
                       <!--ongle descriptif-->
                    <div id="tab3" class="tab-pane">
                      

                       <tr>
                        
                        
                       
                        
                        <td colspan="2">
                           <div class="control-group">
                            <label class="control-label">Ligne Budgetaire</label>
                            <div class="controls">
                              <select v-model="formData.ligne_budgetaire_id" class="span14">
                                <option
                                  v-for="fam in ligneBudgetaire(detail_marche.id)"
                                  :key="fam.id"
                                  :value="fam.afficheEconomique.id"
                                >{{fam.afficheEconomique.code}}-{{fam.afficheEconomique.libelle}}</option>
                              </select>
                              
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div class="control-group">
                            <label class="control-label">Code Budgetaire</label>
                            <div class="controls">
                              <input type="text" class="span12" :value="CodeBudgetaire" readonly/>
                            </div>
                          </div>
                        </td>
                         
                       
                      </tr>
                     
                      <tr>
                         
                         
                      
                        
                          
                       
                         
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.montant_tresor" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.montant_don" />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.montant_emprunt" />
                            </div>
                          </div>
                        </td>
                       
                          <td>
                        <div class="control-group">
                            <label class="control-label">Total général</label>
                            <div class="controls">
                              <input type="text" class="span" :value="sommeMontant" readonly />
                            </div>
                          </div>
                        </td>
                      </tr>
                       <tr>
 
                      </tr>
                       <!-- <tr>
                         
                         
                      
                        
                          
                         <td>
                         <div class="control-group">
                            <label class="control-label">Numero cc</label>
                            <div class="controls">
                              <select v-model="formData.numero_cc_id">
                                <option value>Sélectionner</option>
                               
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nom entreprise</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.nom_entreprise" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Adresse</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir adresse_entreprise"
                                v-model="formData.adresse_entreprise"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.Bailleur" />
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                     
                      <tr>
                         
                         
                      
                        
                          
                         <td colspan=4>
                         <div class="control-group">
                            <label class="control-label">Objet de la dépense</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.objet_depense" />
                            </div>
                          </div>
                        </td> -->
                       
                        
                       
                        <!-- <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.Bailleur" />
                            </div>
                          </div>
                        </td> -->
                       
                      <!-- </tr> -->
                    </div>
                    <!--ongle 3 -->
                    <!-- </div> -->
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="ajouterEngagementLocal(formData)"
                        >Valider</a>
                        <a
                          @click.prevent="afficherTableauImmobilisation()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
      <notifications/>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" bg-color="green"></fab> -->
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  
  
</template>
 <script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'AjouterImmobilisation',
  data() {
    return {
      formData: {
        // valeur_origine = this.ValeurOrigine(),

       total_general:"0",
       montant_tresor:"0",
montant_don:"0",
montant_emprunt:"0"

      },

      // stats: ["neuf(ve)", "Seconde Main", "Bon"],
      // typeImmo: ["Corporelle", "Incorporelle"],
      // causeInactivite: ["Vendue", "Mise en hors service"],
      search: ""
    };
  },
  // mounted() {
  //   this.formData = this.immobilisations.find(
  //     immo => immo.id == this.$route.params.id
  //   );

  //   //console.log(this.$router);
  // },
  created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getMarchePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  },
  computed: {
       ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
    ]),
     ...mapGetters("bienService", [ 'acteDepense',"getMarchePersonnaliser","appelOffres",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers"]),
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
      "stockageArticle"
      
    ]),

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
    ...mapGetters("gestionMarche", ["entreprises"]),

// AffichierStock() {
//       const qtereel = this.getPersoStock.find(qtreel => qtreel.AfficheArticle.id == id);

//       if (qtereel) {
//         return qtereel.quantitestock;
//       }
//       return 0
//     },


sommeMontant() { 
      const val = parseFloat(this.formData.montant_tresor) + parseFloat(this.formData.montant_don) + parseFloat(this.formData.montant_emprunt);
      return parseFloat(val).toFixed(2);
    },


  programmeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    
  actionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    activiteDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    sectionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.jointureUaChapitreSection.filter(
            element => element.id == id
          );
        }
      };
    },
grandNatureDepense() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    ligneBudgetaire() {
      return id => {
        if (id != null && id != "") {
          return this.getMarchePersonnaliser.filter(
            element => element.id == this.detail_marche.id
          );
        }
      };
    },

uniteAdministrative() {
      return id => {
        if (id != null && id != "") {
          return this.getMarchePersonnaliser.filter(
            element => element.id == this.detail_marche.id
          );
        }
      };
    },
 NumeroFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.numero_cc;
      }
      return 0
    },
    nomFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.raison_sociale;
      }
      return 0
    },
 AdresseFournisseur() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.varObjetEntreprise.email;
      }
      return 0
    },
   CodeBudgetaire() {
      
      const norme = this.getActeEffetFinancierPersonnaliser.find(normeEquipe => normeEquipe.marche_id == this.detail_marche.id);

      if (norme) {
        return norme.marche.imputation;
      }
      return 0
    },
    
    // ligneBudgetaire() {
      
    //   const norme = this.getMarchePersonnaliser.find(normeEquipe => normeEquipe.id == this.detail_marche.id);

    //   if (norme) {
    //     return norme.marche.imputation;
    //   }
    //   return 0
    // },
    




















































exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
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
    ...mapActions("bienService", [
      "ajouterEngagement",
      
      
     
    ]),
afficherTableauImmobilisation() {
      this.$router.push({
        name: "Engagement"
      });
    },
     ajouterEngagementLocal(){
      
       var nouvelObjet = {
      ...this.formData,
      exercice_budget :this.anneeAmort,
       	numero_cc_id :this.NumeroFournisseur,
        nom_entreprise :this.nomFournisseur,
         adresse_entreprise :this.AdresseFournisseur,
         total_general :this.sommeMontant,
         budget_general_id :this.CodeBudgetaire
       
       };
this.ajouterEngagement(nouvelObjet)
this.afficherTableauImmobilisation() 

    },
    alert() {
      console.log("ok");
    }
  
  }
};
</script>


