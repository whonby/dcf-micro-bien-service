
<template>
  <div>
    
    
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
              <h5>Liste actes à effets financiers</h5>
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
                        <th>Libellé de l'acte</th>
                        <th>Référence de l'acte</th>
                        <!-- <th>Objet acte</th> -->
                        <th>Incidence financière</th>
                        <th>Montant de l'acte</th>
                     <th title="type effet financier">Type E.</th>
                        <!-- <th>Type modif doc</th> -->
                        <th>Entreprise</th>
                        <!-- <th>text juridique</th> -->
                        <th>Marché</th>
                        <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="effetFinancier in acteEffetFiltre"
                        :key="effetFinancier.id">


                         <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.code_act || 'Non renseigné'}}</td>

                             <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.libelle_act || 'Non renseigné'}}</td>

                             <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.reference_act || 'Non renseigné'}}</td>
                        
                        <!-- <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.objet_act || 'Non renseigné'}}</td> -->

                        <td >
                          <span v-if="effetFinancier.incidence_financiere == 0">Oui</span>

                           <span v-else>Non</span>
                            </td>

                            <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{formatageSomme(parseFloat(effetFinancier.montant_act)) || 0}}</td>

                              <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.type_acte_effet.libelle || 'Non renseigné'}}</td>

                             <!-- <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.type_doc_modifie || 'Non renseigné'}}</td> -->

                        <!-- <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.varObjetEntreprise.forme_juridique || 'Non renseigné'}}</td> -->

                             <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{afficherNomEntreprise(effetFinancier.entreprise_id) || 'Non renseigné'}}</td>

                              <td @click="afficherModalModifierActeEffetFinancier(index)">
                            {{effetFinancier.marche.objet || 'Non renseigné'}}</td>


                        <div class="btn-group">
                            <button @click.prevent="supprimerActeEffetFinancier(effetFinancier.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash">Supprimer</i></span>
                            </button>
                        </div>

                    
                      
                       
                     
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
                type_act_effet_id:"",
                type_doc_modifie:"",
                entreprise_id:"",
                text_juridique_id:"",
                marche_id:"",
                
        
      },
      editacteEf: {
        	 code_act:"",
            libelle_act:"",
            objet_act:"",
                montant_act:"",
                incidence_financiere:"",
                type_act_effet_id:"",
                type_doc_modifie:"",
                entreprise_id:"",
                text_juridique_id:"",
                marche_id:"",
              
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['acteEffetFinanciers', 'marches',"getActeEffetFinancierPersonnaliser"]),
     ...mapGetters("gestionMarche",['entreprises']),

    acteEffetFiltre()  {
     
        const searchTerm = this.search.toLowerCase();

return this.getActeEffetFinancierPersonnaliser.filter((item) => {
  
     return item.libelle_act.toLowerCase().includes(searchTerm) ||
       item.varObjetEntreprise.forme_juridique.toLowerCase().includes(searchTerm)

     
    

  
  

   }
)
    },

    afficherNomEntreprise() {
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
  
  },
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche',
    'supprimerMarche', "supprimerActeEffetFinancier"
     
    ]),
    //afiicher modal ajouter
    afficherModalAjoutTypaPrestation() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
  
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