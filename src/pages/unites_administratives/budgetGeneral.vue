
<template>
  <div>
   
    <!--///////////////////////////////////////// fin modal modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            
            :fields="json_fields"
            title="Budget General"
            :data="filtre_unite_admin"
            name="Budget General"
            worksheet="Budget General"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <div align="right">
                Recherche:
                <input type="search" placeholder="" v-model="search" class="span5"/>

                <!-- <div class="span3">
                  <model-list-select
                    v-model="formData.test"
                    style="background-color: rgb(222, 222, 222);"
                    :list="type_Unite_admins"
                    option-value="id"
                    option-text="libelle"
                    placeholder="unite administrative"
                  ></model-list-select>
                </div>
                <button>ok</button>-->
              </div>
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget General</h5>
              <!-- <h5>Budget General par Ua</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
              <span class="badge badge-inverse" >Total Budget General : {{formatageSomme(parseFloat(montantBudgetGeneral))}}</span> -->
            </div>

            <div
              class="widget-content nopadding"
             v-if="sections.length && grandes_natures.length && plans_fonctionnels.length && plans_budgetaires.length && afficheNiveauPlanProg.length"
            >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                       <!-- <th>Exercice</th>
                    <th title="">Code Budget</th> -->
                     <th title="unite administrative">ua</th>
                    <th>Section</th>
                    <th title="grande nature depense">Gde nature</th>
                      <th>Programme</th>
                    <th>Action</th> 
                    <th>Activite</th> 
                     <th title="classification fonctionnel">Clsse Fontionnel</th>
                     <th title="classification Economique">Clsse Economique</th>
                    <th>Dotation Initial</th>
                    <!-- <th>Version</th>
                    

                    <th>Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr>
                    <td>
                      ddddddddddddddddddd
                    </td>
                  </tr> -->
                  <tr
                    class="odd gradeX"
                    v-for="Bgeneral in filtre_unite_admin"
                    :key="Bgeneral.id"
                  >
                   
                  
                    <!-- <td>{{Bgeneral.exercicebudget_id || 'Non renseigné'}}</td>
                      <td>{{Bgeneral.codebudget || 'Non renseigné'}}</td> -->
                      <!-- <td>{{Bgeneral.affichetypeua.libelle || 'Non renseigné'}}</td> -->
                    <td>{{Bgeneral.afficheUA.libelle || 'Non renseigné'}}</td>
                    <td>{{Bgeneral.afficheSection.code_section || 'Non renseigné'}}-{{Bgeneral.afficheSection.nom_section || 'Non renseigné'}}</td>
                    <td>{{Bgeneral.afficheGdeNature.code || 'Non renseigné'}}-{{Bgeneral.afficheGdeNature.libelle || 'Non renseigné'}}</td>
                    <td>{{Bgeneral.afficheProgramme.code || 'Non renseigné'}}-{{Bgeneral.afficheProgramme.libelle || 'Non renseigné'}}</td>
                    <td>{{Bgeneral.afficheAction.code || 'Non renseigné'}}-{{Bgeneral.afficheAction.libelle || 'Non renseigné'}}</td>
                     <td>{{Bgeneral.afficheActivite.code || 'Non renseigné'}}-{{Bgeneral.afficheActivite.libelle || 'Non renseigné'}}</td>
                      <td>{{Bgeneral.afficheFonctionnel.code || 'Non renseigné'}}-{{Bgeneral.afficheFonctionnel.libelle || 'Non renseigné'}}</td>
                    <td>{{ Bgeneral.afficheEconomique.code || 'Non renseigné'}}-{{ Bgeneral.afficheEconomique.libelle || 'Non renseigné'}}</td>
                  <td>{{formatageSomme(parseFloat(Bgeneral.Dotation_Initiale)) || 0}}</td>
                   <!-- <td>
                     
                     
                     <span v-if="Bgeneral.version == 0">Original </span>
                      <span 
                     v-else>Premiere modification</span>
                     </td> -->
                    <!-- <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerBudgetGeneral(Bgeneral.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td> -->
                  </tr>
                  <tr>
                     
                       <!-- <td>
                           
                      </td>
                       <td>
                          
                      </td> -->
                        <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Dotation par Ua
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(budgetParUa))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterUniteAdministrative" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterUniteAdministrative()">Open</button> -->
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <!-- <notifications  /> -->
  </div>
</template>
  
<script>
import { mapGetters} from "vuex";
import { formatageSomme } from "../../../src/Repositories/Repository";
// import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  // components: {
  //   ModelListSelect
  // },
  data() {
    return {
      // fabActions: [
      //   {
      //     name: "cache",
      //     icon: "add"
      //   }
      // ],
    
      json_fields: {
        // ANNEE: "exercicebudget_id",
        // CODE_BUDGET: "codebudget",
        // code_section:"afficheSection.code_section",
        // section:"afficheSection.nom_section",
          // 'section' : 
        // ``
        section: {
          field: "afficheSection",
          callback: (value) => {
            return `${value.code_section} - ${value.nom_section}`
          }
        },
        
        // section: `${afficheSection.code_section} - ${afficheSection.nom_section}`, 
        grande_nature: "afficheGdeNature.libelle",
        programme: {
          field: "afficheProgramme",
          callback: (value) => {
            return `${value.code} - ${value.libelle}`
          }
        },
        action: {
          field: "afficheAction",
          callback: (value) => {
            return `${value.code} - ${value.libelle}`
          }
        },
        activite: {
          field: "afficheActivite",
          callback: (value) => {
            return `${value.code} - ${value.libelle}`
          }
        },
         fonctionnel: {
          field: "afficheFonctionnel",
          callback: (value) => {
            return `${value.code} - ${value.libelle}`
          }
        },
         economique: {
          field: "afficheEconomique",
          callback: (value) => {
            return `${value.code} - ${value.libelle}`
          }
        },
          dotation_initial: "Dotation_Initiale",
        // code_programme: "afficheProgramme.code",
        // programme: "afficheProgramme.libelle",
      
        // code_activite: "afficheActivite.code",
        // ACTIVITE: "afficheActivite.libelle",
        // CODE_FONCTIONNEL: "afficheFonctionnel.code",
        // FONCTIONNEL: "afficheFonctionnel.libelle",
        // CODE_ECONOMIQUE: "afficheEconomique.code",
        // ECONOMIQUE: "afficheEconomique.libelle",
        // DOTATION_INITIAL: "Dotation_Initiale",
        // TOTAL_DOTATION: {
          
      
        // }
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      // "montantBudgetGeneral"
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
      "exercices_budgetaires"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    filtre_unite_admin() {
      const st = this.search.toLowerCase();
      return this.getPersonnaliseBudgetGeneral.filter(items => {
        return (
          items.afficheUA.libelle.toLowerCase().includes(st) ||
         items.afficheSection.code_section.toLowerCase().includes(st) ||
         items.afficheGdeNature.libelle.toLowerCase().includes(st) ||
         items.afficheProgramme.code.toLowerCase().includes(st) 
        );
      });
    },
    budgetParUa() {
      const st = this.search.toLowerCase();
      return this.getPersonnaliseBudgetGeneral.filter(items => {
        return (
          items.afficheUA.libelle.toLowerCase().includes(st) ||
         items.afficheSection.code_section.toLowerCase().includes(st) ||
         items.afficheGdeNature.libelle.toLowerCase().includes(st) ||
         items.afficheProgramme.code.toLowerCase().includes(st) 
         
        );
      }).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2);
      
    },
//    MontantbesoinRestantParUniteAdministrative(){
//   return uniteadmin_id => {
//     if(uniteadmin_id !=""){
//     const montant = this.getPersonnaliseBudgetGeneral.filter(element => element.id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
//       if(isNaN(montant)) return null
//       return montant

//     }
//   }
// }, 

    
  },
  methods: {
    
 formatageSomme: formatageSomme,
    
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