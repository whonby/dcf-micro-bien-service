
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
                            {{effetFinancier.varObjetEntreprise.forme_juridique || 'Non renseigné'}}</td>

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