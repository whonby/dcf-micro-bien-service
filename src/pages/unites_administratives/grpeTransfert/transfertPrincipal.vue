

<template>
  <div>
   
<!----- ajouter modal   ---->


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Tansfert</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Numero transfert</label>
                  <div class="controls">
                       <input
                      type="text"
                 v-model="formData.num_transfert"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
                   <td>
                <div class="control-group">
                  <label class="control-label">Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="formData.ua_id">
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                 <div class="control-group">
                  <label class="control-label">Destinataire</label>
                  <div class="controls">
                    <select v-model="formData.unitezone_id" :readOnly="verrouDestinataire">
                      <option
                        v-for="localgeo in destinationDynamiques(formData.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Ligne budgetaire</label>
                  <div class="controls">
                        <select v-model="formData.ligne_budgetaire_id" :readOnly="verrouLigneBudgetaire">
                      <option
                        v-for="localgeo in ligneBudgetaireDynamiques(formData.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.afficheEconomique.id"
                      >{{localgeo.afficheEconomique.code}}-{{localgeo.afficheEconomique.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Montant transfert</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="afficheMontantTransfere(formData.ligne_budgetaire_id)"
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
                  <label class="control-label">Montant du contrat</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="formData.montant_total_contrat"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">	Solde</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="disponibleBudgetaire"
                      class="span"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">grande nature</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="GnDynamiques(afficheGrandeNature(formData.ligne_budgetaire_id))"
                      class="span"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Fonction</label>
                  <div class="controls">
                    <select v-model="formData.fonction_id" :readOnly="verrouDestinataire">
                      <option
                        v-for="localgeo in fonctionDynamiques(formData.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.fonction.id"
                      >{{localgeo.fonction.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Acteur depense</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="afficheActeurDepense(formData.fonction_id)"
                      class="span"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
        
              
            </tr>
       
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterUniteAdministrativeLocal(formData)"
          class="btn btn-primary"
          href="#"
         onclick="validate()"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

<!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Transfert</h3>
      </div>
      <div class="modal-body">
         <table class="table table-bordered table-striped">
         
            <tr>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Numero transfert</label>
                  <div class="controls">
                       <input
                      type="text"
                 v-model="editTransfert.num_transfert"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
                   <td>
                <div class="control-group">
                  <label class="control-label">Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="editTransfert.ua_id">
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                 <div class="control-group">
                  <label class="control-label">Destinataire</label>
                  <div class="controls">
                    <select v-model="editTransfert.unitezone_id" :readOnly="verrouDestinataire">
                      <option
                        v-for="localgeo in destinationDynamiques(editTransfert.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Ligne budgetaire</label>
                  <div class="controls">
                        <select v-model="editTransfert.ligne_budgetaire_id" :readOnly="verrouLigneBudgetaire">
                      <option
                        v-for="localgeo in ligneBudgetaireDynamiques(editTransfert.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.afficheEconomique.id"
                      >{{localgeo.afficheEconomique.code}}-{{localgeo.afficheEconomique.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Montant transfert</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="afficheMontantTransfere(editTransfert.ligne_budgetaire_id)"
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
                  <label class="control-label">Montant du contrat</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="editTransfert.montant_total_contrat"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">	Solde</label>
                  <div class="controls">
                       <input
                      type="number"
                   :value="disponibleBudgetaire"
                      class="span"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">grande nature</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="GnDynamiques(afficheGrandeNature(editTransfert.ligne_budgetaire_id))"
                      class="span"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Fonction</label>
                  <div class="controls">
                    <select v-model="editTransfert.fonction_id" :readOnly="verrouDestinataire">
                      <option
                        v-for="localgeo in fonctionDynamiques(editTransfert.ua_id)"
                        :key="localgeo.id"
                        :value="localgeo.fonction.id"
                      >{{localgeo.fonction.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Acteur depense</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="afficheActeurDepense(editTransfert.fonction_id)"
                      class="span"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
        
              
            </tr>
       
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierUniteAdministrativeLocal(editTransfert)"
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
              <h5>Listes des transferts</h5>
             
            </div>

            <div class="widget-content nopadding" v-if="uniteAdministratives.length" >
              <transfertComponent v-for="equipement in uniteAdministratives"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierUniteAdministrative" 
                @suppression="supprimerBudget"
                >
              </transfertComponent>

            

            
              
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
import transfertComponent from './transfertComponent'
import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
  name: 'transfert',
 components: {
      transfertComponent
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
      num_transfert:"",
      acteurdepense_id: "",
      unitezone_id: "",
      montant_total_contrat: "",
      montant_transfert: "",
      fonction_id: "",
      montant_restant: "",
      ligne_budgetaire_id: "",
      grandnatire_id: "",
      	ua_id: "",
      },
      editTransfert: {
       num_transfert:"",
      acteurdepense_id: "",
      unitezone_id: "",
      montant_total_contrat: "",
      montant_transfert: "",
      fonction_id: "",
      montant_restant: "",
      ligne_budgetaire_id: "",
      grandnatire_id: "",
      	ua_id: "",
      },
       search:"",
       
    };
    
  },

  computed: {
        ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert"
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
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 
 ...mapGetters('personnelUA', ['all_acteur_depense']),

    destinationDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteZones.filter(element => element.id_unite_administrative == this.formData.ua_id);
        }
      };
    },

 ligneBudgetaireDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParTransfert.filter(element => element.afficheUA.id == this.formData.ua_id);
        }
      };
    },
    afficheMontantTransfere() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == this.formData.ligne_budgetaire_id);

      if (qtereel) {
        return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },
     disponibleBudgetaire() {
      const val = parseInt(this.afficheMontantTransfere(this.formData.ligne_budgetaire_id)) - parseInt(this.formData.montant_total_contrat);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
     afficheGrandeNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == this.formData.ligne_budgetaire_id);

      if (qtereel) {
        return qtereel.testgdenature;
      }
      return 0
        }
      };
    },
    
    GnDynamiques() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(element => element.code == this.afficheGrandeNature(this.formData.ligne_budgetaire_id));

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
     fonctionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.all_acteur_depense.filter(element => element.unite_administrative_id == this.formData.ua_id);
        }
      };
    },
    afficheActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.fonction.id == this.formData.fonction_id);

      if (qtereel) {
        return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom)
      }
      return 0
        }
      };
    },

     verrouDestinataire() {
      return this.formData.ua_id == "";
    },
    verrouLigneBudgetaire() {
      return this.formData.unitezone_id == "";
    },
  },


  
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllUniteZone",
      "ajouterTransfert",
      "modifierTransfert",
      "supprimerTransfert",
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
        var nouvelObjet = {
        ...this.formData,
        montant_transfert: this.afficheMontantTransfere(this.formData.ligne_budgetaire_id),
         montant_restant: this.disponibleBudgetaire
       
      };
      this.ajouterTransfert(nouvelObjet);

      this.formData = {
        num_transfert:"",
      acteurdepense_id: "",
      unitezone_id: "",
      montant_total_contrat: "",
      montant_transfert: "",
      fonction_id: "",
      montant_restant: "",
      ligne_budgetaire_id: "",
      grandnatire_id: "",
      	ua_id: "",
      
      };
      // }
     
    },
    
     supprimerBudget(id){
      this.supprimerTransfert(id)
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
     
      this.modifierTransfert(this.editTransfert);
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

      this.editTransfert = articles;
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