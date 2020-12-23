<template>
    <div>
 <div class="container-fluid" align="">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          
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
            <div class="widget-title">
                <div class="span6">
 <span class="icon">
                <i class="icon-th"></i>
              </span>
                    <h5>Liste des unités administratives </h5>
                </div>
                <div class="span6">
                    <div align="left">
                        <!-- Recherche:
                        <input type="search" placeholder="" v-model="search" /> -->

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
                <div align="left">
                <div class="span4">
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

            </div>

            <div
              class="widget-content nopadding"
              v-if="type_Unite_admins.length && sections.length && chapitres.length"
            >
              <table class="table table-bordered table-striped" id="Nature_section">
                <thead>
                  <tr>
                   
                    <th>Code</th>
                    <th title="unite administrative">UA</th>
                
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="uniteadministrative in partition(filtre_unite_admin,size)[page]"
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
                   <td>
                
                      <router-link :to="{ name: 'TableauDeBordG', params:{id:8}}"
                class="btn btn-primary " title="voir le menu ">
                  <span class="" style=""><i class=" icon-hand-right"></i></span>
                    </router-link>
                   </td>
                    <!-- <td>
                      <button
                        class=""
                        @click="supprimerUniteAdministrative(uniteadministrative.id)"
                      >
                        <span>
                          <i class="icon-hand-right"></i>
                        </span>
                      </button>
                    </td> -->
                  </tr>
                </tbody>
              </table>
               
            </div>
            <div v-else>
              <p style="text-align:center;font-size:20px;color:red;">Aucune Unité Administrative</p>
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
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import { mapGetters} from "vuex";
import moment from "moment";
//import jsPDF from 'jspdf'
///import 'jspdf-autotable'
import {partition} from "../../../../../Repositories/Repository"
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
import {admin,dcf,cf,noDCfNoAdmin} from "../../../../../Repositories/Auth"
export default {
    data(){
        return{
         page:0,
        size:10,
        active_el:0,

         json_fields: {
        TYPE_UNIT_ADMINISTRATIVE: "typeua.libelle",
        SECTION: "secti.nom_section",
        SERVICE_GESTIONNAIRE: "servivegest.libelle",
        LOCALISATION_GEO: "localgeo.libelle",
        CODE: "code",
        LIBELLE: "libelle",
        DATE_CREATION: "date_creation"
      },
        }
    },
    created(){

    },
    computed:{
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
     libelleUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.type_Unite_admins.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleLocalGeographie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.localisations_geographiques.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleServiceGestionnaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services_gestionnaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
      libelleSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_section;
      }
      return 0
        }
      };
    },
     libelleNatureSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.natures_sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    },
    methods:{

         formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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

    }
}
</script>