
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <!-- <div id="exampleModal" class="modal hide taillModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3> marché en execution</h3>
      </div>
    <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
              <td>
               <div class="control-group">
            <label class="control-label" title="unite administrative">UA</label>
            <div class="controls">
            <select v-model="formData.unite_administrative_id" class="span">
               <option v-for="plans in groupUa" 
               :key="plans[0].id" 
               :value="plans[0].afficheUA.id">{{plans[0].afficheUA.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Grand Nature</label>
                  <div class="controls">
                    <select v-model="formData.grdnature_id" :readOnly="deverouGrandNature">
                      <option
                        v-for="gdeNature in groupgranNature"
                        :key="gdeNature[0].id"
                        :value="gdeNature[0].afficheGdeNature.id"
                      >{{gdeNature[0].afficheGdeNature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Activite</label>
                  <div class="controls">
                    <select v-model="formData.activite_id" :readOnly="deverouactivite">
                     <option
                        v-for="activite in activiteDynamiques(formData.unite_administrative_id)"
                        :key="activite.id"
                        :value="activite.afficheActivite.id"
                      >{{activite.afficheActivite.code}} - {{activite.afficheActivite.libelle}}</option>
                    </select>
                    
                  </div>
                   
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
                    <select v-model="formData.Economique" :readOnly="deveroueconomiq">
                    <option
                        v-for="eco in economiqueDynamiques(formData.activite_id)"
                        :key="eco.id"
                        :value="eco.afficheEconomique.id"
                      >{{eco.afficheEconomique.code}} - {{eco.afficheEconomique.libelle}}</option>
                    </select>
                  </div>
                   
                </div>
              </td>
            </tr>
            <tr>
               <td colspan=2>
                 <div class="control-group">
            <label class="control-label">Imputation Budgetaire</label>
            <div class="controls">
              <input
                type="text"
                :value="ImputationBudget"
                class="span5"
                placeholder="Saisir le Imputation"
                readonly
              />
            </div>
          </div>
              </td>
              
             
                <td> -->
              
               <!-- <div class="control-group">
            <label class="control-label">Type marché</label>
            <div class="controls">
            <select v-model="formData.type_marche_id" class="span">
               <option v-for="plans in typeMarches" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
           
               <td>
                 <div class="control-group">
            <label class="control-label">Refencence marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.reference_marche"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td>
            </tr>
            <tr>
               
               <td>
                 <div class="control-group">
            <label class="control-label">Montant du marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.montant_marche"
                class="span"
                placeholder="Saisir le libelle_type"
               
              />
            </div>
          </div>
              </td>
              <td>
               <div class="control-group">
            <label class="control-label">Objet marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.objet"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td>
           
            </tr>
          
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterModalTypePrestationLocal"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div> -->
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <!-- <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier marche</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">

              <div class="control-group">
            <label class="control-label" title="unite administrative">UA</label>
            <div class="controls">
            <select v-model="editMarche.unite_administrative_id" class="span">
               <option v-for="plans in uniteAdministratives" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>

          <div class="control-group">
            <label class="control-label">Type marché</label>
            <div class="controls">
            <select v-model="editMarche.type_marche_id" class="span">
               <option v-for="plans in typeMarches" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>


            <div class="control-group">
            <label class="control-label">Refencence marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.reference_marche"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
         
          
          <div class="control-group">
            <label class="control-label">Montant</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.montant_marche"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>

          <div class="control-group">
            <label class="control-label">Objet marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.objet"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
         
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalTypeprestationLocal(editMarche)"
          class="btn btn-primary"
          href="#"
        
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div> -->
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Types équipements"
            :data="filtre_equipement"
            name="Liste des types équipements"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des marches</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th>Code</th>
                        <th>Libelle acte</th>
                        <th>Reference acte</th>
                        <th>Objet acte</th>
                        <th>Incendit financier</th>
                        <th>Montant acte</th>
                     <th title="type effet financier">Type E.</th>
                        <th>Type modif doc</th>
                        <th>Entreprise</th>
                        <th>text juridique</th>
                        <th>Marche</th>
                        <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="effetFinancier in getActeEffetFinancierPersonnaliser"
                        :key="effetFinancier.id">


                         <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.code_act || 'Non renseigné'}}</td>

                             <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.libelle_act || 'Non renseigné'}}</td>

                            <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.libelle_act || 'Non renseigné'}}</td>
                        
                        <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.objet_act || 'Non renseigné'}}</td>

                        <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.incidence_financiere || 'Non renseigné'}}</td>

                            <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.montant_act || 'Non renseigné'}}</td>

                              <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.id_type_acte_effet_fin || 'Non renseigné'}}</td>

                             <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.type_doc_modifie || 'Non renseigné'}}</td>

                        <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.entreprise_id || 'Non renseigné'}}</td>

                             <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.text_juridique_id || 'Non renseigné'}}</td>


                             
                            
                              <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.marche_id || 'Non renseigné'}}</td>


                        <div class="btn-group">
                            <button @click.prevent="supprimerActeEffetFinancier(effetFinancier.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span>
                            </button>
                        </div>

                    </tr>
                        <tr>
                     
                      
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      <!-- </td>
                       <td style="font-weight:bold;"> Total Marche
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantMarche))}}
                           
                      </td> -->
                       <td>
                           
                      </td>
                       
                     
                    </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjoutTypaPrestation" main-icon="apps" bg-color="green"></fab> -->
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjoutTypaPrestation()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
 import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
  name:'type facture',
  data() {
    return {
      fabActions: [
        {
          // name: "cache",
          // icon: "add"
        }

      
      ],
    //   json_fields: {
    //     CODE: "code",
    //     libelle: "libelle"
    //   },

      formData: {
            code_act:"",
            libelle_act:"",
            objet_act:"",
                montant_act:"",
                incidence_financiere:"",
                id_type_acte_effet_fin:"",
                type_doc_modifie:"",
                entreprise_id:"",
                text_juridique_id:"",
                marche_id:""
        
      },
      editacteEf: {
        	 code_act:"",
            libelle_act:"",
            objet_act:"",
                montant_act:"",
                incidence_financiere:"",
                id_type_acte_effet_fin:"",
                type_doc_modifie:"",
                entreprise_id:"",
                text_juridique_id:"",
                marche_id:""
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['acteEffetFinanciers', 'marches',"getActeEffetFinancierPersonnaliser"]),
     ...mapGetters("gestionMarche",['entreprises']),

//     acteEffetFiltre()  {
     
//         const searchTerm = this.search.toLowerCase();

// return this.getActeEffetFinancierPersonnaliser.filter((item) => {
  
//      return item.objet_act.toLowerCase().includes(searchTerm) 
     
    

  
  

//    }
// )
//     },
    // grandNatureDynamiques() {
    //  return id => {
    //     if (id != null && id != "") {
    //       return this.getPersonnaliseBudgetGeneral.filter(
    //         element => element.ua_id == id
    //       );
    //     }
    //   };
    // },
     activiteDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    // deverouGrandNature() {
    //   return this.formData.unite_administrative_id == "";
    // }, 
    // deverouactivite() {
    //   return this.formData.grdnature_id == "";
    // },
    //  deveroueconomiq() {
    //   return this.formData.activite_id == "";
    // },
    //  economiqueDynamiques() {
    //  return id => {
    //     if (id != null && id != "") {
    //       return this.getPersonnaliseBudgetGeneralParBienService.filter(
    //         element => element.activite_id == id
    //       );
    //     }
    //   };
    // },
    //  ImputationBudget() {
      
    //   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.formData.Economique);

    //   if (norme) {
    //     return norme.codebudget;
    //   }
    //   return 0
    // },

    // recuperationMarcheEnExecution(){
    //   var recupere = this.getMarchePersonnaliser.filter(recuper => recuper.objet_marche ==1)
    // },
    // MontatantImputationBudget() {
      
    //   const norme = this.getPersonnaliseBudgetGeneral.find(normeEquipe => normeEquipe.economique_id == this.formData.Economique);

    //   if (norme) {
    //     return norme.Dotation_Initiale;
    //   }
    //   return 0
    // },
  },
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche',
    'supprimerMarche'
     
    ]),
    //afiicher modal ajouter
    afficherModalAjoutTypaPrestation() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
//     ajouterModalTypePrestationLocal(){
      
//        var nouvelObjet = {
//       ...this.formData,
//       imputation :this.ImputationBudget
//        };
// this.ajouterMarche(nouvelObjet)
// this.formData = {
// 	          objet:"",
//             reference_marche:"",
//             montant_marche:"",
//                 type_marche_id:"",
//                 unite_administrative_id:"",
//                 imputation:"",
//                 	activite_id:""
// }

//     },
    formatageSomme:formatageSomme,
    // afficher modal de modification
    afficherModalModifierActeEffetFinancier(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editacteEf = this.acteEffetFinanciers[index];
    },
    // fonction pour vider l'input modification
    modifierModalTypeprestationLocal(){
      this.modifierMarche(this.editacteEf)
      this.$('#modificationModal').modal('hide');
    },
    
    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

<style scoped>
.taillModal{
  width: 980px;
   margin: 0 -25%;
}
</style>