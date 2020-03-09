
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
              <h5>Ajouter Dossier Candidat</h5>
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
                            <label class="control-label">procedure_passation</label>
                            <div class="controls">
                              <select v-model="formData.id_procedure_passation">
                                <option value>Sélectionner</option>
                                
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">type_candidat</label>
                            <div class="controls">
                              <select v-model="formData.type_cand">
                                <option value>Sélectionner</option>
                               
                              </select>
                            </div>
                          </div>
                        </td>
                     
                         <td>
                          <div class="control-group">
                            <label class="control-label">nom_cand</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                               v-model="formData.nom_cand"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                       <td>
                          <div class="control-group">
                            <label class="control-label">prenoms_cand</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                               v-model="formData.prenoms_cand"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                       <td>
                          <div class="control-group">
                            <label class="control-label">date_naiss_cand</label>
                            <div class="controls">
                              <input
                                type="date"
                                class="span"
                                v-model="formData.date_naiss_cand"
                                
                              />
                            </div>
                          </div>
                        </td>
                       
                       
                      </tr>

                      <tr>
                          <td>
                          <div class="control-group">
                            <label class="control-label">telephone_cand</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                               v-model="formData.telephone_cand"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                         <td>
                          <div class="control-group">
                            <label class="control-label">adresse_postal</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                v-model="formData.adresse_postal"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                         <td>
                          <div class="control-group">
                            <label class="control-label">email_cand</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                v-model="formData.email_cand"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                         <td>
                          <div class="control-group">
                            <label class="control-label">situation_geo</label>
                            <div class="controls">
                              <select v-model="formData.id_situation_geo">
                                <option value>Sélectionner</option>
                                
                              </select>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">accord_group</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                
                                v-model="formData.accord_group"
                              />
                            </div>
                          </div>
                          
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">cautionnement_prov</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                v-model="formData.cautionnement_prov"
                                readonly
                              />
                            </div>
                          </div>
                        </td>

                        
                        
                       
                      </tr>
                      <tr>
                        
                      <td>
                          <div class="control-group">
                            <label class="control-label">pouv_habil_signataire</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.pouv_habil_signataire" />
                            </div>
                          </div>
                        </td>

                        <td>
                          <div class="control-group">
                            <label class="control-label">piece_admin</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                               v-model="formData.piece_admin"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
<td>
                          <div class="control-group">
                            <label class="control-label">reg_com</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                               v-model="formData.reg_com"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">attest_banc</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                               v-model="formData.attest_banc"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                      
                            
                        
  
 <td>
                       

                           <div class="control-group">
                            <label class="control-label">formul_propo_tech</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                             v-model="formData.formul_propo_tech"
                               readonly
                              />
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                       <tr>
                        
                       

                       
                        <td>
                           <div class="control-group">
                            <label class="control-label">fiche_rsgnt_cand</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.fiche_rsgnt_cand" />
                            </div>
                          </div>
                           
                         
                        </td>
                        
                          <td>
                           <div class="control-group">
                            <label class="control-label">fiche_rsgnt_mbre_group</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.fiche_rsgnt_mbre_group" />
                            </div>
                          </div>
                           
                         
                        </td>
                         <td>
                           <div class="control-group">
                            <label class="control-label">atcdent_marche_non_exe</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.atcdent_marche_non_exe" />
                            </div>
                          </div>
                           
                         
                        </td>
                         <td>
                           <div class="control-group">
                            <label class="control-label">atcdent_marche_non_exe</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.atcdent_marche_non_exe" />
                            </div>
                          </div>
                           
                         
                        </td>
                        <td>
                       

                           <div class="control-group">
                            <label class="control-label">org_travau_site</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                               
                                v-model="formData.org_travau_site"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane">
                      

                      <tr>
                        
                         <td>
                          <label class="control-label">meth_real_travau</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="span"
                              placeholder="Saisir le Numero facture"
                              v-model="formData.meth_real_travau"
                            />
                          </div>
                        </td>
                       
                        <td>
                          <label class="control-label">prog_mobilisation</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="span"
                             
                              v-model="formData.prog_mobilisation"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">capacite_financiere</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                
                                v-model="formData.capacite_financiere"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">caa_moyen_ac_entre</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder=""
                                v-model="formData.caa_moyen_ac_entre"
                              />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">capacite_financement</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder=""
                                v-model="formData.capacite_financement"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                        <tr>
                         
                        
                      
                        <div class="control-group">
                          <td>
                            <div class="control-group">
                              <label class="control-label">capacite_tech_exp</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="formData.capacite_tech_exp"
                                />
                              </div>
                            </div>
                          </td>
                        </div>
                        <td>
                          <div class="control-group">
                            <label class="control-label">mt_offre_financiere</label>
                            <div class="controls">
                              <input
                                type="number"
                                class="span"
                                v-model="formData.mt_offre_financiere"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </td>
                         <td>
                         
                       
                        
                          
                       
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
                        >Modifier</a>
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
  name: 'AjouterDossierCandidat',
  data() {
    return {
      formData: {
        // valeur_origine = this.ValeurOrigine(),


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
     
      
    ]),

  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
     
      
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

      


      
      var nouvelObjet = {
        ...this.formData,
       
      

      };

      this.ajouterImmobilisation(nouvelObjet);

      this.formData = {
       
      };
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