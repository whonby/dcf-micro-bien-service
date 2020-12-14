
<template>
  <div>
  
    
    <!-- Default Light Table -->
    <div >
      <hr />
      <!-- <div class="row-fluid">
        <div class="span12"> -->
          <!-- <download-excel
            class="btn btn-success pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Unites administratives"
            :data="jointureUaChapitreSection"
            name="Liste Unites administratives"
            worksheet="Liste Unites administratives"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
         
          </download-excel> -->
          <!-- <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div> -->
          <div class="widget-box">
               <button class="btn btn-danger" @click.prevent="afficherModalListeExecution">Retour Au Menu</button>
            <div class="widget-title">
                
                <div class="span6">
 <span class="icon">
                <i class="icon-th"></i>
              </span>
                    <h5>Liste des unités administratives </h5>
                </div>
                <div class="span6">
                    <div align="right">
                        Recherche:
                        <input type="search" placeholder="" v-model="search" />

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
                </div>
                <div class="span4">
                    <br>
                    <br>
                    Afficher
                    <select name="pets" id="pet-select" v-model="size" class="span3">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    Entrer
                </div>

            </div>

            <div
              class="widget-content nopadding">
               
              <table class="table table-bordered table-striped" id="Nature_section">
                <thead>
                  <tr>
                    <!-- <th title="type unite administrative">Type UA</th>
                    <th>Nature Section</th>
                    <th>Section</th>
                    <th title="service gestionnaire">Service Gestionnaire</th>
                     <th title="localisation geographique">Localisation géographique</th> -->
                    <th>Code</th>
                    <th title="unite administrative">UA</th>
                    <!-- <th>Date création</th> -->

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="uniteadministrative in partition(localisationsFiltre,size)[page]"
                    :key="uniteadministrative.id"
                  >
                   
                   <!-- <template v-if="uniteadministrative.type_ua_id = type_Unite_admins.id"> -->
                    <!-- <td  @dblclick="afficherModalModifierUniteAdministrative(uniteadministrative.id)">{{libelleUa(uniteadministrative.type_ua_id)}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(uniteadministrative.id)">{{libelleNatureSection(uniteadministrative.nature_section_id) }}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(uniteadministrative.id)">{{libelleSection(uniteadministrative.section_id)}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(uniteadministrative.id)">{{libelleServiceGestionnaire(uniteadministrative.servicegest_id) }}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(uniteadministrative.id)">{{libelleLocalGeographie(uniteadministrative.localisationgeo_id) }}</td> -->
                    <td  @dblclick="afficherModalModifierUniteAdministrative(uniteadministrative.id)">{{uniteadministrative.code }}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(uniteadministrative.id)">{{uniteadministrative.libelle }}</td>
                  <td>
                     
                <button  @click.prevent="goToUAspace(uniteadministrative.id)"
                        class="btn  btn-success">
                <span ><i class="  icon-random"></i></span>
       
                </button>
                  </td>
                   <!-- <td> <router-link :to="{ name: 'TableauDeBordG', params: {id:8}}"
                class="btn btn-default " title="historique execution Marche">
                  <span class=""><i class="  icon-random"></i></span>
                   </router-link></td> -->
                   <!-- <td  @dblclick="afficherModalModifierUniteAdministrative(uniteadministrative.id)">{{ formaterDate(uniteadministrative.date_creation) }}</td> -->
                  
                  <!-- </template> -->
                   <!-- <template v-else>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.secti.nom_section || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.chpitr.libelle || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.planFont.libelle || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.code || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{uniteadministrative.libelle || 'Non renseigné'}}</td>
                    <td  @dblclick="afficherModalModifierUniteAdministrative(index)">{{ formaterDate(uniteadministrative.date_creation) || 'Non renseigné'}}</td>
                  
                  </template> -->
                    <!-- <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerUniteAdministrative(uniteadministrative.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td> -->
                  </tr>
                </tbody>
              </table>
               
            </div>
            
          </div>
           <div class="pagination alternate">
                    <ul>
                        <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                        <li  v-for="(titre, index) in partition(filtre_unite_admin,size).length" :key="index" :class="{ active : active_el == index }">
                            <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                        <li :class="{ disabled : page == partition(filtre_unite_admin,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

                    </ul>
           </div>
        <!-- </div>
      </div> -->
    </div>
    

  
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import {partition} from "../../../../../Repositories/Repository"
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
import {admin,dcf,cf,noDCfNoAdmin} from "../../../../../Repositories/Auth"
export default {
  // components: {
  //   ModelListSelect
  // },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
        page:0,
        size:10,
        active_el:0,
      formData: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
       
        servicegest_id:"",
        nature_section_id:""
      },
      editUniteAdministrative: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
        servicegest_id:"",
        nature_section_id:""
      },
      json_fields: {
        TYPE_UNIT_ADMINISTRATIVE: "typeua.libelle",
        SECTION: "secti.nom_section",
        SERVICE_GESTIONNAIRE: "servivegest.libelle",
        LOCALISATION_GEO: "localgeo.libelle",
        CODE: "code",
        LIBELLE: "libelle",
        DATE_CREATION: "date_creation"
      },
      search: ""
    };
  },
  
created() {

},
    computed: {
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
      
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "structures_administratives",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections",
      "structures_geographiques"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels"
     
    ]),
      admin:admin,
      dcf:dcf,
        cf:cf,
        noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
   
    localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.filtre_unite_admin.filter((item) => {
  
    return item.libelle.toLowerCase().includes(searchTerm) 
    
   }
)
   },
  
    
    filtre_unite_admin() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.jointureUaChapitreSection.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
        }
        return this.jointureUaChapitreSection

    },
   
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllUniteAdministrative",
      "ajouterUniteAdministrative",
      "modifierUniteAdministrative",
      "supprimerUniteAdministrative"
    ]),
...mapActions("SuiviImmobilisation", [
      "ajouterUA_ID_IMO"
      
    ]),
goToUAspace(id){
    this.ajouterUA_ID_IMO(id)
    console.log("BONJOUR M")
this.$router.push({
        name: 'TableauDeBordG',
        params:{id:8}
      })
},
genererEnPdf(){
  var doc = new jsPDF('landscape')
  // doc.autoTable({ html: this.natures_sections })
   doc.setFontSize(8)
  doc.text(115,10,"LISTE DES UNITES ADMINISTRATIVES")
  doc.autoTable({ html: '#Nature_section'}),
  
doc.save('UniteAdministrative.pdf')
return 0
},

      partition:partition,
      getDataPaginate(index){
          this.active_el = index;
          this.page=index
      },
      precedent(){
          this.active_el--
          this.page --
      },
      suivant(){
          this.active_el++
          this.page ++
      },
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
        code: this.codeuniteadministrative,
         code_ua: this.codeuniteadministrative2
       
      };
      this.ajouterUniteAdministrative(nouvelObjet);

      this.formData = {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
         code_ua: ""
      };
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
         var nouvelObjet = {
        ...this.editUniteAdministrative,
        code: this.codeuniteadministrativeModifier,
        code_ua: this.codeuniteadministrativeModifier2
      };
      this.modifierUniteAdministrative(nouvelObjet);
this.$("#modificationModal").modal('hide');
      // this.editUniteAdministrative = {
      //   code: "",
      //   libelle: "",
      //   section_id: "",
      //   localisationgeo_id: ""
      // };
    },
    // afficher modal de modification
    afficherModalModifierUniteAdministrative(id) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editUniteAdministrative = this.jointureUaChapitreSection.find(items=>items.id==id);
    },
    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    afficherModalListeExecution(){
                window.history.back();
            },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style>

.tailgrand{
  width: 88%;
  margin: 0 -42%;
}

</style>