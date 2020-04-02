
<template>
  
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Ajouter Immobilisation</h5>
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
                        <a data-toggle="tab" href="#tab1">Identification</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">Descriptif</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">Autres Information</a>
                      </li> -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Exercice Budgetaire</label>
                            
                                 <!-- <div class="controls" 
                                  v-for="exoBudget in exoEnCours" 
                                  :key="exoBudget.id"
                                  :value="exoBudget.id"
                                  >
                              <input
                              
                                type="text"
                                class="span"
                                v-model="exoBudget.annee"
                           
                                readonly
                              />
                            </div>
                             -->
                             <!-- <input
                              
                                type="text"
                                class="span"
                                :value="anneeAmort"
                           
                                readonly
                              /> -->
                             <!-- <div class="controls" >
                              <select v-model="formData.exercice_budgetaire_id">
                                  <option
                                  v-for="exoBudget in exoEnCours"
                                  :key="exoBudget.id"
                                  :value="exoBudget.id"
                                >{{exoBudget.annee}}
                                </option>
                              </select>
                            </div>  -->
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
                            <label class="control-label">Type Unite administrative:</label>
                            <div class="controls">
                              <select v-model="formData.typeuniteadminis_id">
                                <!-- <option value>Sélectionner</option>
                                <option
                                  v-for="typeua in groupTriUaImmo"
                                  :key="typeua[0].id"
                                  :value="typeua[0].typeUniteAdmin.id"
                                >{{typeua[0].typeUniteAdmin.libelle}}</option> -->
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Unite administrative:</label>
                            <div class="controls">
                              <select v-model="formData.uniteadministrative_id" :readOnly="veifuaExist">
                                <option value>Sélectionner</option>
                                <!-- <option
                                  v-for="ua in typeUniteAdministrativeDynamiques(formData.typeuniteadminis_id)"
                                  :key="ua.id"
                                  :value="ua.uniteAdminist.id"
                                >{{ua.uniteAdminist.libelle}}</option> -->
                              </select>
                            </div>
                          </div>
                        </td>
                         
                        <td>
                          <div class="control-group">
                            <label class="control-label">Famille</label>
                            <div class="controls">
                              <select v-model="formData.famillearticle_id" :readOnly="veifEquipementExist">
                                <option value>Sélectionner</option>
                                <!-- <option
                                  v-for="fam in designationDynamiques(formData.uniteadministrative_id)"
                                  :key="fam.id"
                                  :value="fam.famille.id"
                                >{{fam.famille.libelle}}</option> -->
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Article</label>
                            <div class="controls">
                              <select v-model="formData.articleImmo_id" :readOnly="veifarticleExist">
                                <option value>Sélectionner</option>
                                <!-- <option
                                  v-for="arti in ArticlesDynamiques(formData.famillearticle_id)"
                                  :key="arti.id"
                                  :value="arti.afficheArticle.id"
                                >{{arti.afficheArticle.libelle}}</option> -->
                              </select>
                            </div>
                          </div>
                        </td>
                       
                       
                      </tr>

                      <tr>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Quantite demandé</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                :value="AffichierQuantiteteReel"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                         <!-- <td>
                          <div class="control-group">
                            <label class="control-label">Quantite en récu</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                :value="AffichierQuantiteEnStock"
                                readonly
                              />
                            </div>
                          </div>
                        </td> -->
                         <td>
                          <div class="control-group">
                            <label class="control-label">Prix unitaire:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                :value="AffichiercoutMoyen"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Afféctée:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                :max="AffichierQuantiteteReel"
                                v-model="formData.qte_affecte"
                              />
                            </div>
                          </div>
                          
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Valeur d'origine:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                :value="valeurOrigine"
                                readonly
                              />
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">Qté Actuel:</label>
                            <div class="controls">
                              <input type="number" class="span" :value="AfficheQteActuel" readonly />
                            </div>
                          </div>
                        </td>
                        
                       
                      </tr>
                      <tr>
                        
                      

                        <td>
                          <div class="control-group">
                            <label class="control-label">Total Actuel:</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                :value="AffichierTotalActuel"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
<td>
                            <div class="control-group">
                            <label class="control-label">Fonction</label>
                            <div class="controls">
                              <select
                                v-model="formData.fonction_id"
                               
                              >
                                <option value>Sélectionner</option>
                                <option
                                  v-for="dynaFonction in fonctionDynamiques(formData.famillearticle_id)"
                                  :key="dynaFonction.id"
                                  :value="dynaFonction.afficherFonction.id"
                                >{{dynaFonction.afficherFonction.libelle}}</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                       
 <div class="control-group">
                            <label class="control-label">Acteur Depense:</label>
                            <div class="controls">
                              <select
                                v-model="formData.acteurdepense_id"
                                :readOnly="veifEquipementExist"
                              >
                                <option value>Sélectionner</option>
                                <option
                                  v-for="acteurDep in acteurDynamiques(formData.fonction_id)"
                                  :key="acteurDep.id"
                                  :value="acteurDep.acteur_depense.id"
                                >{{acteurDep.acteur_depense.matricule}}-{{acteurDep.acteur_depense.nom}}-{{acteurDep.acteur_depense.prenom}}</option>
                              </select>
                        
                              
                            </div>
                          </div>
                           
                              <input
                                type="hidden"
                                class="span"
                                placeholder="Saisir Num identification"
                               :value="AfficheQteActuelEnStock"
                               readonly
                              />
    
                          
                            <input
                                type="hidden"
                                class="span"
                                placeholder="Saisir Num identification"
                               :value="alertAnneeAmortissement"
                               readonly
                              />
                              <input
                                type="hidden"
                                class="span"
                                placeholder="Saisir Num identification"
                               :value="alertArticle"
                               readonly
                              />
                              <input
                                type="hidden"
                                class="span"
                                placeholder="Saisir Num identification"
                               :value="alertMessage"
                               readonly
                              />
                        </td>
                      
                            
                        
  
 <td>
                       

                           <div class="control-group">
                            <label class="control-label">Norme equipement:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                               :value="normeEquipement"
                               readonly
                              />
                              <input
                    type="hidden"
                   :value="AffichierQuantiteRealise"
                    
                    class="span"
                    
                  />
                            </div>
                          </div>
                        </td>
                        <td>
                           <div class="control-group">
                            <label class="control-label">Date de mise en service:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_mise_service" />
                            </div>
                          </div>
                           
                         
                        </td>
                      </tr>
                       <tr>
                        
                       

                       
                       
                        
 

                         
                        <!-- <td>
                         <div class="control-group">
                            <label class="control-label">Cause inactivite:</label>
                            <div class="controls">
                              <select v-model="formData.cause_inactivite">
                            
    <option value="1">Vendue</option>
    <option value="2">Mise en hors service</option>
                              </select>
                            </div>
                          </div>
                        </td> -->
                         <td>
                          <div class="control-group">
                            <label class="control-label">Duree:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                               readonly
                              :value="AffichierDureVie"
                              />
                              <input
                                type="hidden"
                                class="span"
                                placeholder="Saisir Num identification"
                               :value="quantiteEnstock"
                              />
                                <input
                                type="hidden"
                                class="span"
                                placeholder="Saisir Num identification"
                               :value="quantiteEnstockID"
                              />
                               <input
                                type="hidden"
                                class="span"
                                placeholder="Saisir Num identification"
                               :value="stockRestant"
                              />
                              <input
                                type="hidden"
                                class="span"
                                placeholder="Saisir "
                               :value="sortantEnstock"
                              />
                               <input
                                type="hidden"
                                class="span"
                                placeholder="Saisir "
                               :value="stockSortant"
                              />
                              
                               <input
                                type="hidden"
                                class="span"
                                placeholder="Saisir "
                               :value="AfficheMontantRealise"
                              />
                            </div>
                            
                            
                          </div>
                        </td>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Annee d'amortissement:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                               readonly
                              :value="anneeAmortissement"
                              />
                               <input
                                type="hidden"
                                class="span"
                               readonly
                              :value="recupererIdBesoin"
                              />
                            </div>
                          </div>
                          
                        </td>
                         <!-- <td> -->
                         <!-- <div class="control-group">
                            <label class="control-label">Service:</label>
                            <div class="controls">
                              <select
                                v-model="formData.service_id"
                              
                              >
                                <option value>Sélectionner</option>
                                <option
                                  v-for="serviceimmo in services"
                                  :key="serviceimmo.id"
                                  :value="serviceimmo.id"
                                >{{serviceimmo.libelle}}</option>
                              </select>
                            </div>
                          </div> -->

                          <input
                    type="hidden"
                   :value="totalqteRealise"
                    placeholder="Saisir realiser"
                    class="span"
                    
                  />
                   
                        <!-- </td> -->
                        <td>
                       

                           <div class="control-group">
                            <label class="control-label">N°Identification:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir Num identification"
                                v-model="formData.identification"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                                   <div class="control-group">
                            <label class="control-label">Type Immobilisation</label>
                            <div class="controls">
                              <select v-model="formData.type_immo">
                              
    <option value="1">Corporelle</option>
    <option value="0">Incorporelle</option>
                              </select>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                           <div class="control-group">
                            <label class="control-label">Date du jour</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_enregis" />
                            </div>
                          </div>
                           
                         
                        </td>
                      </tr>
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane">
                      

                      <tr>
                        
                        
                       
                        
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Amorti:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Montant amortissement anterieur"
                                v-model="formData.montant_amortissement_anterieur"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Evaluation:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Montant amortissement anterieur"
                                v-model="formData.montant_evaluation"
                              />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Montant Cession:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir le Montant Cession"
                                v-model="formData.montant_cession"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                            <div class="control-group">
                              <label class="control-label">Date Amort Anterieur:</label>
                              <div class="controls">
                                <input
                                  type="date"
                                  class="span"
                                  v-model="formData.date_amortissement_anterieur"
                                />
                              </div>
                            </div>
                          </td>
                        
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date Evaluation:</label>
                            <div class="controls">
                              <input
                                type="date"
                                class="span"
                                v-model="formData.date_evaluation"
                                placeholder="Date dernière evaluation"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                        <tr>
                         
                         
                      
                        
                          
                         <td>
                          <div class="control-group">
                            <label class="control-label">Date cession:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_cession" />
                            </div>
                          </div>
                        </td>
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Date d'acquisition:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_acquisition" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Nature d'Entree:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir Nature entree"
                                v-model="formData.nature_dentree"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                            <div class="control-group">
                            <label class="control-label">Nature du Bien:</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir la Nature"
                                v-model="formData.nature_bien"
                              />
                            </div>
                          </div>
                        </td>
                         <td>
                            <div class="control-group">
                            <label class="control-label">Etat Immobilisation</label>
                            <div class="controls">
                              <select v-model="formData.etat_immobilisation">
                              <option value="1">neuf(ve)</option>
    <option value="2">Seconde Main</option>
    <option value="3">Bon</option>
    </select>
                            </div>
                          </div>
                        </td>
                      </tr>
                     
                      <tr>
                         
                        
                      
                      
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Cause inactivite:</label>
                            <div class="controls">
                              <select v-model="formData.cause_inactivite">
                            
    <option value="1">Vendue</option>
    <option value="2">Mise en hors service</option>
                              </select>
                            </div>
                          </div>
                        </td>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Fournisseur</label>
                            <div class="controls">
                              <select
                                v-model="formData.fonction_id"
                               
                              >
                                <option value></option>
                                <option
                                  v-for="entrep in entreprises"
                                  :key="entrep.id"
                                  :value="entrep.id"
                                >{{entrep.raison_sociale}}</option>
                              </select>
                            </div>
                          </div>

                          <input
                    type="hidden"
                   :value="totalqteRealise"
                    
                    class="span"
                    
                  />
                   <input
                    type="hidden"
                   :value="AffichierQuantiteRealise"
                    
                    class="span"
                    
                  />
                        </td>
                         <td>
                          <label class="control-label">N°facture:</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="span"
                              placeholder="Saisir le Numero facture"
                              v-model="formData.numero_facture"
                            />
                             <!-- <input
                              type="text"
                              class="span"
                              
                              :value="AffichierStock(this.formData.articleImmo_id)"
                            /> -->
                          </div>
                        </td>
                         <!-- <td>
                           <div class="control-group">
                            <label class="control-label">Date de mise en service:</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_mise_service" />
                            </div>
                          </div>
                           
                         
                        </td> -->
                      </tr>
                    </div>
                    <!--ongle 3 -->
                    <!-- <div id="tab3" class="tab-pane">
                    
                      
                    </div> -->
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="ajouterImmobilisationLocal(formData)"
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

        exercice_budgetaire: "",
        famillearticle_id: "",
        uniteadministrative_id: "",
        fonction_id:"",
        acteurdepense_id:"",
        montant_evaluation:"0",
        montant_cession:"0",
        montant_amortissement_anterieur:"0",
anneamortiss:"",
date_enregis:""

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
  computed: {
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

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    ...mapGetters("gestionMarche", ["entreprises"]),

// AffichierStock() {
//       const qtereel = this.getPersoStock.find(qtreel => qtreel.AfficheArticle.id == id);

//       if (qtereel) {
//         return qtereel.quantitestock;
//       }
//       return 0
//     },


exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
 anneeAmortissement() {
      const val = parseInt(this.anneeAmort) + parseInt(this.AffichierDureVie);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

 anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },







    AfficheQteActuel() {
      const form = this.formData;

      if (form.qte_affecte <= this.AffichierQuantiteteReel)
        var val =
          parseInt(this.AffichierQuantiteteReel) -
          parseInt(this.formData.qte_affecte);
      if (isNaN(val)) return null;

      if (form.qte_affecte < 0) return (form.qte_affecte = "");

      return parseInt(val).toFixed(0);
    },
AfficheQteActuelEnStock() {
      const form = this.formData;

      if (form.qte_affecte <= this.AffichierQuantiteEnStock)
        var val =
          parseInt(this.AffichierQuantiteEnStock) -
          parseInt(this.formData.qte_affecte);
      if (isNaN(val)) return null;

      if (form.qte_affecte < 0) return (form.qte_affecte = "");

      return parseInt(val).toFixed(0);
    },
    designationDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.listeBesoinValider.filter(
            element => element.uniteadmin_id == id
          );
        }
      };
    },
    fonctionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.listeBesoinValider.filter(
            element => element.famille_id == id
          );
        }
      };
    },
   
ArticlesDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.listeBesoinValider.filter(
            element => element.famille_id == id
          );
        }
      };
    },


typeUniteAdministrativeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.listeBesoinValider.filter(
            element => element.typeuniteadminist_id == id
          );
        }
      };
    },
// Historqteafecter() {
//       const val = parseInt(this.formData.qte_affecte);
//       return parseInt(val).toFixed(0);
//     },

    acteurDepenseDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.unite_administrative_id == id);
        }
      };
    },
    //   fonctionDynamiques() {
      
    //   return id => {
    //     if (id != null && id != "") {
    //       return this.personnaFonction.filter(element => element.unite_administrative_id == id);
    //     }
    //   };
    // },
    acteurDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.fonction_id == id);
        }
      };
    },
    // fonctionDynamiques() {
    //   return id => {
    //     if (id != null && id != "") {
    //       return this.getPersoNormeArticle.filter(element => element.unite_administrative_id == id);
    //     }
    //   };
    // },
    veifEquipementExist() {
      return this.formData.uniteadministrative_id == "";
    },
     veifarticleExist() {
      return this.formData.famillearticle_id == "";
    },
veifuaExist() {
      return this.formData.typeuniteadminis_id == "";
    },
    AfficheMontantRealise() {
      const val =
        parseInt(this.totalqteRealise) *
        parseInt(this.AffichiercoutMoyen);
      return parseInt(val).toFixed(0);
    },
 
  
     AffichierDureVie() {
      
      const dureVie1 = this.listeBesoinValider.find(dureEquipe => dureEquipe.famille.id == this.formData.famillearticle_id);

      if (dureVie1) {
        return dureVie1.dure_vie;
      }
      // console.log(dureVie1)
      return 0
    },

// afficheDureVie() {
      
//       const norme = this.getPersoNormeArticle.find(normeEquipe => normeEquipe.affichierArticle.id== this.formData.article_id);

//       if (norme) {
//         return norme.dureviearticle
//       }
//       return 0
//     },

 quantiteEnstock() {
      
      const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.formData.articleImmo_id);

      if (norme) {
        return norme.quantitestock;
      }
      return 0
    },

sortantEnstock() {
      
      const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.formData.articleImmo_id);

      if (norme) {
        return norme.qtesortie;
      }
      return 0
    },




quantiteEnstockID() {
      
      const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.formData.articleImmo_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },





    normeEquipement() {
      
      const norme = this.listeBesoinValider.find(normeEquipe => normeEquipe.afficherFonction.id== this.formData.fonction_id);

      if (norme) {
        return norme.normearticle;
      }
      return 0
    },
    AffichierQuantiteteReel() {
      const qtereel = this.listeBesoinValider.find(qtreel => qtreel.afficheArticle.id == this.formData.articleImmo_id);

      if (qtereel) {
        return qtereel.quantite;
      }
      return 0
    },
    AffichierIdStock() {
      const qtereel = this.listeBesoinValider.find(qtreel => qtreel.id == this.formData.articleImmo_id);

      if (qtereel) {
        return qtereel.afficherNorme.stock_id;
      }
      return 0
    },

//  quantiteEnstock() {
      
//       const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == id);

//       if (norme) {
//         return norme.quantitestock;
//       }
//       return 0
//     },


// quantiteEnstock() {
//       return id => {
//         if (id != null && id != "") {
//           return this.getPersoStock.find(
//             element => element.articlestock_id == id
//           );
//         }
//       };
//     },






AffichierIdNorme() {
      const qtereel = this.listeBesoinValider.find(qtreel => qtreel.id == this.formData.articleImmo_id);

      if (qtereel) {
        return qtereel.norme_id;
      }
      return 0
    },




      AffichierqteStock() {
      const qtereel = this.listeBesoinValider.find(qtreel => qtreel.id == this.formData.articleImmo_id);

      if (qtereel) {
        return qtereel.afficherNorme.qtestock;
      }
      return 0
    },
    AffichierQuantiteEnStock() {
      const qtereel = this.listeBesoinValider.find(qtreel => qtreel.afficheArticle.id == this.formData.articleImmo_id);
//  console.log(qtereel)afficheArticle
      if (qtereel) {
        return qtereel.qte_recu;
      }
      return 0
    },
    AffichiercoutMoyen() {
      const cout = this.listeBesoinValider.find(qtreel => qtreel.afficheArticle.id == this.formData.articleImmo_id);
// console.log(cout)
      if (cout) {
        return cout.prix_unitaire;
      }
      
      return 0
    },
    AffichierQuantiteRealise() {
      const qtereali = this.listeBesoinValider.find(Qreal => Qreal.afficheArticle.id == this.formData.articleImmo_id);

      if (qtereali) {
        return qtereali.qterealise;
      }
      return 0
    },


 stockRestant() {
      const val = parseInt(this.quantiteEnstock) - parseInt(this.formData.qte_affecte);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
stockSortant() {
      const val = parseInt(this.formData.qte_affecte) + parseInt(this.sortantEnstock);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


    idObjetBesoinImmoAModifierLaQuantite() {
      const qtereel = this.listeBesoinValider.find(
        qtreel => qtreel.id == this.formData.articleImmo_id,
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },


idObjetStockModifierEnStock() {
       const norme = this.getPersoStock.find(normeEquipe => normeEquipe.AfficheArticle.id == this.formData.articleImmo_id);

      if (norme) {
        return norme.id;
      }
      return 0
    },

   






    // idObjetBesoinImmoAModifierMontantActuel() {
    //   const montantActuel = this.listeBesoinValider.find(
    //     totalActuel => totalActuel.id == this.formData.articleImmo_id,
    //   );

    //   if (montantActuel) {
    //     return montantActuel.id;
    //   }
    //   return 0
    // },
    idObjetBesoinImmoAModifierQteRealise() {
      const qte_affecte = this.listeBesoinValider.find(
        quantRealise => quantRealise.id == this.formData.articleImmo_id,
      );

      if (qte_affecte) {
        return qte_affecte.id;
      }
      return 0
    },

 idObjetBesoinImmoAModifierEnStock2() {
   //console.log(qteEnStock2)
      const qtereel = this.listeBesoinValider.find(qtreel => qtreel.id == this.formData.articleImmo_id);

      if (qtereel) {
        return qtereel.afficherNorme.stock_id;
      }
      return 0
    },
  //   idObjetBesoinImmoAModifierEnStockNorme() {
  //  //console.log(qteEnStock2)
  //     const qtereel = this.listeBesoinValider.find(qtreel => qtreel.id == this.formData.articleImmo_id);

  //     if (qtereel) {
  //       return qtereel.norme_id;
  //     }
  //     return 0
  //   },
    // AffichiercoutMoyen(){
    //   const prixUnitaire = this.listeBesoinValider.find(prixUnit => prixUnit.id == 27)
     
    //  if (prixUnitaire) 
    //   {
        
    //     return prixUnitaire.prix_unitaire
    //     console.log(prixUnitaire) 
    //     }
    //     return 0
    // },
    
    valeurOrigine() {
      const val = parseFloat(this.formData.qte_affecte) * parseFloat(this.AffichiercoutMoyen);
      return parseFloat(val).toFixed(2);
    },

totalqteRealise() {
      const val = parseFloat(this.formData.qte_affecte) + parseFloat(this.AffichierQuantiteRealise);
      return parseFloat(val).toFixed(0);
    },



    AffichierTotalActuel() {
      const val = parseFloat(this.AfficheQteActuel) * parseFloat(this.AffichiercoutMoyen);
      return parseFloat(val).toFixed(2);
    },
      AffichierTypeUa() {
      const typeUniteA = this.listeBesoinValider.find(typeUa=> typeUa.id == this.formData.uniteadministrative_id);

      if (typeUniteA) {
        return typeUniteA.typeuniteadminist_id;
      }
      return 0
    },
    
     recupererIdBesoin() {
      
      const norme = this.listeBesoinValider.find(normeEquipe => normeEquipe.afficheArticle.id== this.formData.articleImmo_id);

      if (norme) {
        return norme.id
      }
      return 0
    },


     alertMessage() {
      const typeUniteA = this.SuiviImmo.find(typeUa=> typeUa.acteurDepense.id == this.formData.acteurdepense_id);

      if (typeUniteA) {
        return typeUniteA.anneamortiss;
        
      }
      return 0
    },
    alertAnneeAmortissement() {
      const typeUniteA = this.SuiviImmo.find(typeUa=> typeUa.acteurDepense.id == this.formData.acteurdepense_id);

      if (typeUniteA) {
        return typeUniteA.acteurdepense_id;
        
      }
      return 0
    },

      alertArticle() {
      const typeUniteA = this.SuiviImmo.find(typeUa=> typeUa.acteurDepense.id == this.formData.acteurdepense_id);

      if (typeUniteA) {
        return typeUniteA.articleImmo_id;
        
      }
      return 0
    },
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "ajouterImmobilisation",
      "modifierQuantiteReel",
      "modifierMontantActuel",
      "modifierQteRealisebesoin",
      "modifierQuantiteEnStock",
      "modifierQuantiteEnStock2",
    
      "modifierQuantiteEnStock3",
      
    ]),

    // changerUniteAdmin(event) {
    //   this.designation = event.target.value;
    // },
    // changerdesignation(event) {
    //   this.qte = event.target.value;
    //   this.prix_unitaire = event.target.value;
    // },
    afficherTableauImmobilisation() {
      this.$router.push({
        name: "immobilisation"
      });
    },
    // fonction pour vider l'input ajouter

    ajouterImmobilisationLocal() {
      if (this.AlertAnneeAmortissement > 0 && this.AlertMessage > this.anneeAmort && this.alertArticle > this.formData.articleImmo_id )
      {
        alert("Personnel deja equipé")
      }
     
     else if (this.formData.qte_affecte > 1 ) {
        alert("Quantite affecté doit etre egal a 1")
      }
      else
      {

var objetQuantiteEnStock = {
        id: this.quantiteEnstockID,
        qteactuelstock: this.stockRestant,
        date_jour: this.formData.date_enregis,
        qte_recu: this.stockSortant,
      }




var objetPourModifierQuantiteEnStock = {
        id: this.idObjetBesoinImmoAModifierEnStock,
        qte_stock: this.AfficheQteActuelEnStock
      }
      var objetPourModifierQuantiteEnStock2 = {
        id: this.idObjetBesoinImmoAModifierEnStock2,
        qteactuelstock: this.stockRestant
      }
    // var objetPourModifierQuantiteEnNorme = {
    //     id: this.idObjetBesoinImmoAModifierEnStockNorme,
    //     qteactuelstock: this.stockRestant
    //   }

      var objetPourModifierQuantiteReel = {
        id: this.idObjetBesoinImmoAModifierLaQuantite,
        qte_actu: this.AfficheQteActuel
        
      }
      // var objetPourModifierMontantActuel = {
      //   id: this.idObjetBesoinImmoAModifierMontantActuel,
      //   montant_actu: this.AffichierTotalActuel
      // }
     var objetPourModifierQteRealise = {
        id: this.recupererIdBesoin,
         qte_real: this.totalqteRealise,
         qte_actu: this.AfficheQteActuel,
         total_qte_real: this.AfficheMontantRealise,
         montant_actu: this.AffichierTotalActuel
      }


      //console.log(objetPourModifierpersoEquipe)

     this.modifierQuantiteReel(objetPourModifierQuantiteReel);
    //  this.modifierMontantActuel(objetPourModifierMontantActuel);
    this.modifierQteRealisebesoin(objetPourModifierQteRealise);
    this.modifierQuantiteEnStock(objetPourModifierQuantiteEnStock);
   this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2);
  //  this.modifierQuantiteEnStockNorme(objetPourModifierQuantiteEnNorme);
   this.modifierQuantiteEnStock3(objetQuantiteEnStock);
      var nouvelObjet = {
        ...this.formData,
        qte_reel: this.AffichierQuantiteteReel,
        prixUnitaire: this.AffichiercoutMoyen,
        valeurorigine: this.valeurOrigine,
        total_actuel: this.AffichierTotalActuel,
        qte_actuel: this.AfficheQteActuel,
        qte_stock:this.AffichierQuantiteEnStock,
        exercice_budgetaire:this.anneeAmort,
      duree:this.AffichierDureVie,
      anneamortiss:this.anneeAmortissement

      };

      this.ajouterImmobilisation(nouvelObjet);

      this.formData = {
        valeurorigine: "",
        type_immo: "",
       
        identification: "",
        etat_immobilisation: "",
        date_acquisition: "",
        date_mise_service: "",
        numero_facture: "",
        qte_reel: "",
        qte_affecte: "",
        qte_actuel: "",
qte_stock:"",
fonction_id:"",
        prixUnitaire: "",
        total_actuel: "",
        famillearticle_id: "",

        duree: "",
        numero_CC: "",
        acteurdepense_id: "",
     
        service_id: "",
        nature_bien: "",
        nature_dentree: "",
        // acteurdepense_id: "",
        TVA_id: "",
        montant_evaluation: "",
        date_evaluation: "",
        montant_cession: "",
        date_cession: "",
        cause_inactivite: "",
        montant_amortissement_anterieur: "",
        date_amortissement_anterieur: ""
      };
      }
       
    },

    // // fonction pour vider l'input modification
    // modifierFamilleLocal() {
    //   this.modifierFamille(this.editFamille);

    //   this.editFamille = {
    //     code: "",
    //     libelle: ""
    //   };
    // },
    alert() {
      console.log("ok");
    }
  
  }
};
</script>

<style>
.tail {
  width: 20px;
}
</style>
qte_real