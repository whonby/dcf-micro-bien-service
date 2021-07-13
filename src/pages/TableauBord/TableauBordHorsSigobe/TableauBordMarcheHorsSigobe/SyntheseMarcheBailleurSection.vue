recupereIDactivite
<template>
  <div>
    <input  type="hidden" :value="Tri1data"/>
    <input  type="hidden" :value="Tri2data"/>
    <input  type="hidden" :value="Tri3data"/>
    <input  type="hidden" :value="Tri4data"/>
    <input  type="hidden" :value="Tri5data"/>
    <input  type="hidden" :value="Tri6data"/>
    <input  type="hidden" :value="Tri7data"/>
    <input  type="hidden" :value="Tri8data"/>
    <input  type="hidden" :value="Tri9data"/>
    <input  type="hidden" :value="Tri10data"/>
    <input  type="hidden" :value="Tri11data"/>
    <input  type="hidden" :value="Tri12data"/>
    <input  type="hidden" :value="Tri13data"/>
    <input  type="hidden" :value="Tri14data"/>
    <input  type="hidden" :value="Tri15data"/>
    <input  type="hidden" :value="Tri16data"/>

    <table class="table table-striped">
      <tbody>
        <tr>
          <td>
            <label style="color: #000; font-size: 12px; font-weight: bolder"
              >SOURCE DE FINANCEMENT<a href="#" style="color: red"></a>
            </label>
            <model-list-select
              style="background-color: #fff; border: 2px solid #000"
              class="wide"
              :list="sources_financements"
              v-model="source_financement_id1"
              option-value="id"
              option-text="libelle"
              placeholder="LIBELLE"
            >
            </model-list-select>
          </td>
        </tr>
      </tbody>
    </table>

    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div>

    <div class="widget-content nopadding" id="printpdf">
      <table class="table table-bordered table-striped">
        <tr>
          <h2
            style="
              text-align: center;
              font-size: 25px;
              text-decoration: underline;
              text-transform: uppercase;
            "
          >
            SYNTHESE DES MARCHES PAR BAILLEUR ET SECTION
          </h2>
        </tr>
      </table>

      <p
        style="
          margin-left: 30px;
          font-size: 12px;
          font-weight: bold;
          text-decoration: underline;
        "
      >
        EXERCICE: {{ afficheAnnee }}
      </p>

      <div>
        <table class="table table-bordered">
          <thead
            style="background-color: #e6e6e6 !important; border: 2px solid #000"
          >
            <tr>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  text-align: center;
                  color: #000;
                  background-color: #e6e6e6 !important;
                  width: 8%;
                "
              ></th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  text-align: center;
                  color: #000;
                  background-color: #e6e6e6 !important;
                  width: 8%;
                "
              ></th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  text-align: center;
                  color: #000;
                  background-color: #e6e6e6 !important;
                  width: 8%;
                "
              ></th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  text-align: center;
                  color: #000;
                  background-color: #ddebf7 !important;
                  width: 8%;
                "
                colspan="2"
              >
                Planification (Avant Contractualisation)
              </th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fff2cc !important;
                "
                colspan="2"
              >
                Marchés en Cours de Contractualisation
              </th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #c6e0b4 !important;
                "
                colspan="2"
              >
                Marchés Attribués
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fce4d6 !important;
                "
                colspan="4"
              >
                Marchés en Cours d'Exécution
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #b4c6e7 !important;
                "
                colspan="3"
              >
                Marchés en Souffrance
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #e6e6e6 !important;
                "
                colspan="3"
              >
                Marchés Résiliés
              </th>
            </tr>
            <tr>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  text-align: center;
                  color: #000;
                  background-color: #e6e6e6 !important;
                  width: 8%;
                "
              ></th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  text-align: center;
                  color: #000;
                  background-color: #e6e6e6 !important;
                  width: 8%;
                "
                colspan="2"
              >
                BAILLEUR/SECTION
              </th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  text-align: center;
                  color: #000;
                  background-color: #ddebf7 !important;
                  width: 8%;
                "
              >
               <button @click="Tri1()">
                     <i class=" icon-filter"></i> 
                    </button>
                Nombre
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #ddebf7 !important;
                "
              >
              <button @click="Tri2()">
                     <i class=" icon-filter"></i> 
                    </button>
                Montant
              </th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fff2cc !important;
                "
              >
              <button @click="Tri3()">
                     <i class=" icon-filter"></i> 
                    </button>
                Nombres
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fff2cc !important;
                "
              >
              <button @click="Tri4()">
                     <i class=" icon-filter"></i> 
                    </button>
                Montant
              </th>

              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #c6e0b4 !important;
                "
              >
              <button @click="Tri5()">
                     <i class=" icon-filter"></i> 
                    </button>
                Nombre
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #c6e0b4 !important;
                "
              >
              <button @click="Tri6()">
                     <i class=" icon-filter"></i> 
                    </button>
                Montant
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fce4d6 !important;
                "
              >
              <button @click="Tri7()">
                     <i class=" icon-filter"></i> 
                    </button>
                Nombre
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fce4d6 !important;
                "
              >
              <button @click="Tri8()">
                     <i class=" icon-filter"></i> 
                    </button>
                Montant Total Marchés
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fce4d6 !important;
                "
              >
              <button @click="Tri9()">
                     <i class=" icon-filter"></i> 
                    </button>
                Montants Exécutés
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fce4d6 !important;
                "
              >
              <button @click="Tri10()">
                     <i class=" icon-filter"></i> 
                    </button>
                Reste à Exécuter
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #b4c6e7 !important;
                "
              >
              <button @click="Tri11()">
                     <i class=" icon-filter"></i> 
                    </button>
                Nombre
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #b4c6e7 !important;
                "
              >
              <button @click="Tri12()">
                     <i class=" icon-filter"></i> 
                    </button>
                Reste à Exécuter
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #b4c6e7 !important;
                "
              >
              <button @click="Tri13()">
                     <i class=" icon-filter"></i> 
                    </button>
                Taux
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #e6e6e6 !important;
                "
              >
              <button @click="Tri14()">
                     <i class=" icon-filter"></i> 
                    </button>
                Nombre
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #e6e6e6 !important;
                "
              >
              <button @click="Tri15()">
                     <i class=" icon-filter"></i> 
                    </button>
                Reste à Exécuter
              </th>
              <th
                style="
                  font-size: 12px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #e6e6e6 !important;
                "
              >
              <button @click="Tri16()">
                     <i class=" icon-filter"></i> 
                    </button>
                Taux
              </th>
            </tr>
          </thead>
          <br />
          <tbody
            v-for="GroupeSourceFinancement in partition(
              TriaffichageUniteSource,
              size
            )[page]"
            :key="GroupeSourceFinancement.id"
          >
            <tr>
              <td>
                <button @click="ShowMyUa(GroupeSourceFinancement.id)">
                  <i class="icon-eye-open"></i>
                </button>
              </td>

              <td
                v-bind:class="
                  recupereIDactivite == GroupeSourceFinancement.id
                    ? 'graybg'
                    : 'whitebg'
                "
                colspan="2"
              >
                {{ GroupeSourceFinancement.libellebailleur }}
                <span style="font-size: 15px"
                  >({{
                    AfficheUaGroupe(GroupeSourceFinancement.id).length
                  }})</span
                >
              </td>
              <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'"
              >
                {{ GroupeSourceFinancement.NombrePlani }}
              </td>

              <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(GroupeSourceFinancement.MontantPlani)
                  )
                }}
              </td>
              <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'"
              >
                {{GroupeSourceFinancement.NombreContract }}
              </td>
              <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(GroupeSourceFinancement.MontantContract
                    )
                  )
                }}
              </td>
             <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{GroupeSourceFinancement.NombreAttribue
                }}
              </td>
             <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                        GroupeSourceFinancement.MontantAttribue
                    )
                  )
                }}
              </td>
             <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{GroupeSourceFinancement.NombreEnCoursExé
                }}
              </td>
             <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(GroupeSourceFinancement.MontantEnCoursExé)
                  )
                }}
              </td>
             <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                        GroupeSourceFinancement.MontantExécutéEnCoursExé
                    )
                  )
                }}
              </td>
             <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(GroupeSourceFinancement.ResteAPayerEnCoursExé
                      )
                  )
                }}
              </td>
              <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{
                    GroupeSourceFinancement.NombreSoufrance }}
              </td>
              <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                        GroupeSourceFinancement.ResteAExécutéSoufrance
                    )
                  )
                }}
              </td>
              <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{
                    GroupeSourceFinancement.TauxSoufrance
                }}
              </td>
            <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{
                    GroupeSourceFinancement.NombreResillié
                }}
              </td>
              <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                        GroupeSourceFinancement.ResteAExécutéResillié
                    )
                  )
                }}
              </td>
            <td style="text-align: right"
                v-bind:class="recupereIDactivite == GroupeSourceFinancement.id? 'graybg': 'whitebg'">
                {{
                    GroupeSourceFinancement.TauxResillié
                  
                }}
              </td>

              <!-- <td>
  
  
   <button class="btn btn-success taille" >
                        <span style="color:#fff;font-size: 15px;">
                         {{nbrebailleurSection(GroupeSourceFinancement[0].section_id)}}
                        </span>
                      </button>
  </td> -->
              <!-- <td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{NombreMarcheExecutionParSection(GroupeSourceFinancement[0].section_id)}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{formatageSommeSansFCFA(parseFloat(MontantActuelParSection(GroupeSourceFinancement[0].section_id)))}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{formatageSommeSansFCFA(parseFloat(MontantExecuteParSection(GroupeSourceFinancement[0].section_id)))}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{NombreOpReguParSection(GroupeSourceFinancement[0].section_id)}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{formatageSommeSansFCFA(parseFloat(MontantDisponibleParSection(GroupeSourceFinancement[0].section_id)))}}</td>
<td style="text-align:right" v-bind:class="recupereIDactivite==GroupeSourceFinancement[0].section_id ? 'graybg' : 'whitebg'"  colspan="">{{parseFloat(TauxExecutionParSection(GroupeSourceFinancement[0].section_id))}} %</td>
  -->
            </tr>
            <br />
            <tr
              v-for="GroupeUa in AfficheUaGroupe(GroupeSourceFinancement.id)"
              :key="GroupeUa"
              v-show="recupereIDactivite == GroupeSourceFinancement.id"
            >
              <td></td>

              <td>
                <button @click="ShowMyLigne(GroupeUa)">
                  <i class="icon-arrow-right"></i>
                </button>
              </td>

              <td>
                {{ Libellesection(GroupeUa) }}
              </td>
              <td style="text-align: right">
                {{
                  NombreMarchePlanifierParSection(
                    GroupeSourceFinancement.id,
                    GroupeUa
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantMarchePlanifierParSection(
                        GroupeSourceFinancement.id,
                        GroupeUa
                      )
                    )
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  NombreMarcheContratualisationParSection(
                    GroupeSourceFinancement.id,
                    GroupeUa
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantMarcheContratualisationParSection(
                        GroupeSourceFinancement.id,
                        GroupeUa
                      )
                    )
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      NombreMarcheAttribueParSection(
                        GroupeSourceFinancement.id,
                        GroupeUa
                      )
                    )
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantMarcheAttribueParSection(
                        GroupeSourceFinancement.id,
                        GroupeUa
                      )
                    )
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  NombreMarcheExecutionParSection(
                    GroupeSourceFinancement.id,
                    GroupeUa
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantTotalMarche(GroupeSourceFinancement.id, GroupeUa)
                    )
                  )
                }}
              </td>

              <td style="text-align: right">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantExecuteParSection(
                        GroupeSourceFinancement.id,
                        GroupeUa
                      )
                    )
                  )
                }}
              </td>

              <td style="text-align: right">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantRestantParSection(
                        GroupeSourceFinancement.id,
                        GroupeUa
                      )
                    )
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  NombreMarcheSuppenduParSection(
                    GroupeSourceFinancement.id,
                    GroupeUa
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantExecuteParSectionMarcheEnSouffrance(
                        GroupeSourceFinancement.id,
                        GroupeUa
                      )
                    )
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  MontantTauxMarcheSouffrance(
                    GroupeSourceFinancement.id,
                    GroupeUa
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  NombreMarcheResilierParSection(
                    GroupeSourceFinancement.id,
                    GroupeUa
                  )
                }}
              </td>
              <td style="text-align: right">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantExecuteParSectionMarcheResilier(
                        GroupeSourceFinancement.id,
                        GroupeUa
                      )
                    )
                  )
                }}
              </td>
              <td style="text-align: right">
                {{ TauxMarcheResilier(GroupeSourceFinancement.id, GroupeUa) }}
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <!-- <table class="table table-bordered" v-show="recupereIDactivite==GroupeSourceFinancement[0].section_id">
              
      
              

            
            </table> -->
      </div>

      <div class="pagination alternate">
        <ul>
          <li :class="{ disabled: page == 0 }">
            <a @click.prevent="precedent()" href="#">Précedent</a>
          </li>
          <li
            v-for="(titre, index) in partition(TriaffichageUniteSource, size)
              .length"
            :key="index"
            :class="{ active: active_el == index }"
          >
            <a @click.prevent="getDataPaginate(index)" href="#">{{
              index + 1
            }}</a>
          </li>
          <li
            :class="{
              disabled:
                page == partition(TriaffichageUniteSource, size).length - 1,
            }"
          >
            <a @click.prevent="suivant()" href="#">Suivant</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import {
  formatageSommeSansFCFA,
  formatageSomme,
} from "@/Repositories/Repository";
import { partition } from "@/Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    ModelListSelect,
  },
  name: "typetext",
  data() {
    return {
      page: 0,
      size: 5,
      active_el: 0,
      fabActions: [
        {
          name: "searchMe",
          icon: "search",
        },
      ],

      json_fields: {
        CODE: "code",
        LIBELLE: "libelle",
      },

      inputLigne: false,

      exercices_budgetaires_id: 0,
      inputLigne1: 0,

      search: "",
      verifShome: 0,
      recupereIDactivite: "",
      recupereIDSection: "",
      source_financement_id1: 0,
       Tri1data:0,
      Tri2data:0,
      Tri3data:0,
      Tri4data:0,
      Tri5data:0,
      Tri6data:0,
      Tri7data:0,
      Tri8data:0,
      Tri9data:0,
      Tri10data:0,
      Tri11data:0,
      Tri12data:0,
      Tri13data:0,
      Tri14data:0,
      Tri15data:0,
      Tri16data:0,
    };
  },
  // mounted(){
  //   console.log("hello word")
  //   // console.log(this.budgetEclate)
  //   console.log(this.MontantBudgetActuel())
  //   console.log(this.MontantBudgetExecuté())
  // },

  created() {
    console.log(this.TriaffichageUniteSource);
  },

  computed: {
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "exercices_budgetaires",
      "sections",
    ]),
    ...mapGetters("personnelUA", [
      "salairesActeur",
      "personnaliseActeurDepense",
      "personnaFonction",
      "afficheNombrePersonnelRecuActeNormination",
      "fonctionBudgetaire",
      "type_salaries",
      "type_contrats",
      "acte_personnels",
      "type_acte_personnels",
      "fonctions",
      "grades",
      "niveau_etudes",
      "nbr_acteur_actredite_taux",
      "all_acteur_depense",
      "personnaliseActeurFinContrat",
      "totalActeurEnctivite",
      "totalActeurDepense",
      "totalActeurAccredite",
      "tauxActeurAccredite",
      "totalActeurNonAccredite",
      "affichePersonnelRecuActeNormination",
    ]),
    ...mapGetters("bienService", [
      "groupeParMarcheDansOp",
      "avenants",
      "gettershistoriqueDecisionCfOP",
      "typeMarches",
      "gettersgestionOrdrePaiementAnnulation",
      "gettersgestionOrdrePaiement",
      "gettersDossierAutreDepense",
      "gettersDossierMandat",
      "gettersDossierFacturePiece",
      "typeFactures",
      "gettersDemandeEngagement",
      "gettersnomPieceJustificative",
      "modepaiements",
      "gettersCotationPersonnaliser",
      "typeCandidat",
      "acteDepense",
      "getMarchePersonnaliser",
      "appelOffres",
      "lots",
      "villes",
      "communes",
      "pays",
      "modePassations",
      "procedurePassations",
      "getterDossierCandidats",
      "marches",
      "gettersPersonnaliserRapportJugement",
      "getterOffreFinanciers",
      "gettersOffreTechniques",
      "getterLettreInvitation",
      "getterMandate",
      "getterCojos",
      "conditions",
      "getterAnalyseDossiers",
      "typeAnalyses",
      "getterDemandeAno",
      "documentProcedures",
      "getterAnalyseDMP",
      "getterAnoDMPBailleur",
      "getterObseravtionBailleurs",
      "obseravtionBailleurs",
      "typeActeEffetFinanciers",
      "analyseDossiers",
      "text_juridiques",
      "livrables",
      "selectionner_candidats",
      "getActeEffetFinancierPersonnaliserContrat",
      "acteEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
      "getterMembreCojo",
      "getterProceVerballe",
      "GroupeOrdrePaiementByActivite",
      "GroupeOrdrePaiementByGrandeNature",
    ]),
    ...mapGetters("gestionMarche", [
      "groupeVille",
      "entreprises",
      "banques",
      "comptes",
      "getCompte",
      "getEntreptise",
      "getPersonnaliseAgence",
      "agenceBanques",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structureActe",
      "planActe",
    ]),
    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),
    ...mapGetters("gestionMarche", ["entreprises"]),

    ...mapGetters("uniteadministrative", [
      "budgetEclate",
      "groupeLigneEconomiqueBudget",
      "getSousBudget",
      "groupeActiviteBudget",
      "budgetGeneral",
      "fonctionsua",
      "servicesua",
      "directions",
      "uniteZones",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
      "groupeByActivite",
      "groupeByBailleur",
      "groupeBySection",
      "groupeByTypeFinancement",
      "groupeParSourceFinancementBudgetEclate",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structuresDecision",
      "plans_Decision",
    ]),
    ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
    ]),

    //new

    TriaffichageUniteSource() {
      let vm = this;
      return this.ListeDesSourceFinancement.map(function (value) {
        let objet = {
          id: value[0].source_financement_id,
          libellebailleur: vm.LibelleSourceFinancement(
            value[0].source_financement_id
          ),
          NombrePlani: vm.NombreMarchePlanifierGlobalParSection(
            value[0].source_financement_id
          ),
          MontantPlani: vm.MontantMarchePlanifierGlobalParSourceFinancement(
            value[0].source_financement_id
          ),

          NombreContract:
            vm.NombreMarcheContratualisationGlobalParSourceFinancement(
              value[0].source_financement_id
            ),
          MontantContract:
            vm.MontantMarcheContratualisationGlobalParSourceFiancement(
              value[0].source_financement_id
            ),

          NombreAttribue: vm.NombreMarcheAttribueGlobalParSourceFinancement(
            value[0].source_financement_id
          ),
          MontantAttribue: vm.MontantMarcheAttribueGlobalParSourceFinancement(
            value[0].source_financement_id
          ),

          NombreEnCoursExé: vm.NombreMarcheExecutionGlobalParSourceFinancement(
            value[0].source_financement_id
          ),
          MontantEnCoursExé: vm.TotalMarcheGlobal(
            value[0].source_financement_id
          ),
          MontantExécutéEnCoursExé: vm.MontantExecuteGlobalParSourceFinancement(
            value[0].source_financement_id
          ),
          ResteAPayerEnCoursExé: vm.RestePayerEnCoursExé(
            value[0].source_financement_id
          ),

          NombreSoufrance: vm.NombreMarcheSuppenduGlobalParSourceFinancement(
            value[0].source_financement_id
          ),
          ResteAExécutéSoufrance:
            vm.MontantExecuteParSourceFinancementMarcheEnSouffrance(
              value[0].source_financement_id
            ),
          TauxSoufrance: vm.TauxMarcheSouffranceParSourceFinancement(
            value[0].source_financement_id
          ),

          NombreResillié: vm.NombreMarcheResilierParSourceFinancement(
            value[0].source_financement_id
          ),
          ResteAExécutéResillié:
            vm.MontantExecuteParSourceFinancementMarcheResilier(
              value[0].source_financement_id
            ),
          TauxResillié: vm.TauxMarcheResilierParSourceFinancement(
            value[0].source_financement_id
          ),
        };
        return objet;
      });
    },

    //fin new

    NombreMarchePlanifierGlobalParSection() {
      return (id) => {
        if (id != null && id != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 0
          ).length;
        } else {
          return 0;
        }
      };
    },

    NombreMarchePlanifierParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.section_id == id1 &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 0
          ).length;
        } else {
          return 0;
        }
      };
    },
    MontantMarchePlanifierGlobalParSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          return this.marches
            .filter(
              (qtreel) =>
                qtreel.source_financement == id &&
                qtreel.exo_id == this.afficheAnnee &&
                qtreel.parent_id != null &&
                qtreel.attribue == 0
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    MontantMarchePlanifierParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.marches
            .filter(
              (qtreel) =>
                qtreel.source_financement == id &&
                qtreel.section_id == id1 &&
                qtreel.exo_id == this.afficheAnnee &&
                qtreel.parent_id != null &&
                qtreel.attribue == 0
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    NombreMarcheContratualisationGlobalParSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 1
          ).length;
        } else {
          return 0;
        }
      };
    },

    NombreMarcheContratualisationParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.section_id == id1 &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 1
          ).length;
        } else {
          return 0;
        }
      };
    },
    MontantMarcheContratualisationGlobalParSourceFiancement() {
      return (id) => {
        if (id != null && id != "") {
          return this.marches
            .filter(
              (qtreel) =>
                qtreel.source_financement == id &&
                qtreel.exo_id == this.afficheAnnee &&
                qtreel.parent_id != null &&
                qtreel.attribue == 1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    MontantMarcheContratualisationParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.marches
            .filter(
              (qtreel) =>
                qtreel.source_financement == id &&
                qtreel.section_id == id1 &&
                qtreel.exo_id == this.afficheAnnee &&
                qtreel.parent_id != null &&
                qtreel.attribue == 1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    NombreMarcheAttribueGlobalParSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 2 &&
              qtreel.id != this.marcheAttribue(qtreel.id)
          ).length;
        } else {
          return 0;
        }
      };
    },

    NombreMarcheAttribueParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.section_id == id1 &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 2 &&
              qtreel.id != this.marcheAttribue(qtreel.id)
          ).length;
        } else {
          return 0;
        }
      };
    },
    marcheAttribue() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.marche_id;
          }
          return 0;
        }
      };
    },
    MontantMarcheAttribueParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.marches
            .filter(
              (qtreel) =>
                qtreel.source_financement == id &&
                qtreel.section_id == id1 &&
                qtreel.exo_id == this.afficheAnnee &&
                qtreel.parent_id != null &&
                qtreel.attribue == 2 &&
                qtreel.id != this.marcheAttribue(qtreel.id)
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    MontantMarcheAttribueGlobalParSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          return this.marches
            .filter(
              (qtreel) =>
                qtreel.source_financement == id &&
                qtreel.exo_id == this.afficheAnnee &&
                qtreel.parent_id != null &&
                qtreel.attribue == 2 &&
                qtreel.id != this.marcheAttribue(qtreel.id)
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    NombreMarcheExecutionParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.groupeParMarcheDansOp.filter(
            (qtreel) =>
              (qtreel[0].source_financement_id == id &&
                qtreel[0].section_id == id1 &&
                qtreel[0].exercice == this.afficheAnnee &&
                qtreel[0].marche_id != null &&
                qtreel[0].type_ordre_paiement == 1) ||
              (qtreel[0].source_financement_id == id &&
                qtreel[0].section_id == id1 &&
                qtreel[0].exercice == this.afficheAnnee &&
                qtreel[0].marche_id != null &&
                qtreel[0].type_ordre_paiement == 4)
          ).length;
        } else {
          return 0;
        }
      };
    },

    NombreMarcheExecutionGlobalParSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          return this.groupeParMarcheDansOp.filter(
            (qtreel) =>
              (qtreel[0].source_financement_id == id &&
                qtreel[0].exercice == this.afficheAnnee &&
                qtreel[0].marche_id != null &&
                qtreel[0].type_ordre_paiement == 1) ||
              (qtreel[0].source_financement_id == id &&
                qtreel[0].exercice == this.afficheAnnee &&
                qtreel[0].marche_id != null &&
                qtreel[0].type_ordre_paiement == 4)
          ).length;
        } else {
          return 0;
        }
      };
    },

    MontantReelDuGlobalMarcheParSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          return this.acteEffetFinanciers
            .filter((qtreel) => qtreel.source_financement_id == id)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_act),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantReelDuMarche() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.acteEffetFinanciers
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id && qtreel.section_id == id1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_act),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    MontantAvenantGlobalMarche() {
      return (id) => {
        if (id != null && id != "") {
          return this.avenants
            .filter((qtreel) => qtreel.source_financement_id == id)
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_avenant),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    MontantAvenantMarche() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.avenants
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id && qtreel.section_id == id1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_avenant),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    NombreMarcheSuppenduParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.section_id == id1 &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 7
          ).length;
        } else {
          return 0;
        }
      };
    },
    NombreMarcheSuppenduGlobalParSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 7
          ).length;
        } else {
          return 0;
        }
      };
    },

    NombreMarcheResilierParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.section_id == id1 &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 3
          ).length;
        } else {
          return 0;
        }
      };
    },

    NombreMarcheResilierParSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          return this.marches.filter(
            (qtreel) =>
              qtreel.source_financement == id &&
              qtreel.exo_id == this.afficheAnnee &&
              qtreel.parent_id != null &&
              qtreel.attribue == 3
          ).length;
        } else {
          return 0;
        }
      };
    },
    MontantExecuteParSectionMarcheEnSouffrance() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 7) ||
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 7) ||
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 7) ||
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 7)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantExecuteParSourceFinancementMarcheEnSouffrance() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 7) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 7) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 7) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 7)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantExecuteParSourceFinancementMarcheResilier() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 3) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 3) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 3) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 3)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    MontantExecuteParSectionMarcheResilier() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 3) ||
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 3) ||
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 3) ||
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9 &&
                  this.marcheEnSouffrace(qtreel.marche_id) == 3)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    marcheEnSouffrace() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.attribue;
          }
          return 0;
        }
      };
    },

    // NOUVELLE FONCTION

    AfficheVariationBudget() {
      return (id, id2) => {
        if (id != null && id != "" && id2 != null && id2 != "") {
          return this.budgetEclate
            .filter(
              (prod) =>
                prod.source_financement_id == id &&
                prod.section_id == id2 &&
                prod.annebudgetaire == this.anneeAmort &&
                prod.budget_active == 1
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        }
      };
    },
    MontantInitialParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                qtreel.section_id == id1 &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.budget_actif_def == 1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    bailleurPar() {
      return (id) => {
        if (id != 0 && id != "") {
          let objet = this.budgetEclate.filter(
            (item) =>
              item.uniteadministrative_id == id && item.budget_active == 1
          );
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.source_financement_id);
            });
            let unique = [...new Set(array_exercie)];
            // console.log(unique);
            if (unique.length == 0) {
              return [];
            }
            return unique;
          }
          return [];
        }
      };
    },
    bailleurParSect() {
      return (id) => {
        if (id != 0 && id != "") {
          let objet = this.budgetEclate.filter(
            (item) => item.section_id == id && item.budget_active == 1
          );
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.source_financement_id);
            });
            let unique = [...new Set(array_exercie)];
            // console.log(unique);
            if (unique.length == 0) {
              return [];
            }
            return unique;
          }
          return [];
        }
      };
    },
    // bailleurParUniteA(){
    //     return (id) => {
    //     if (id != null && id != "") {
    //       return this.groupeByTypeFinancement
    //         .filter(
    //           (qtreel) =>
    //             qtreel[0].uniteadministrative_id == id
    //         ).length

    //     } else {
    //       return 0;
    //     }
    //   };
    // },
    NombreOpReguParUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter(
            (qtreel) =>
              qtreel.uniteadministrative_id == id &&
              qtreel.exercice == this.afficheAnnee &&
              qtreel.diff_reg_op == 0 &&
              qtreel.type_ordre_paiement == 2
          ).length;
        } else {
          return 0;
        }
      };
    },
    NombreOpReguParSection() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter(
            (qtreel) =>
              qtreel.section_id == id &&
              qtreel.exercice == this.afficheAnnee &&
              qtreel.diff_reg_op == 0 &&
              qtreel.type_ordre_paiement == 2
          ).length;
        } else {
          return 0;
        }
      };
    },
    MontantExecuteGlobalParSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8 &&
                  qtreel.marche_id != null) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9 &&
                  qtreel.marche_id != null) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8 &&
                  qtreel.marche_id != null) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9 &&
                  qtreel.marche_id != null)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    MontantExecuteParSection() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8 &&
                  qtreel.marche_id != null) ||
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9 &&
                  qtreel.marche_id != null) ||
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8 &&
                  qtreel.marche_id != null) ||
                (qtreel.source_financement_id == id &&
                  qtreel.section_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9 &&
                  qtreel.marche_id != null)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    MontantExecuteParUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.unite_administrative_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    NombreOpRegu() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement.filter(
            (qtreel) =>
              qtreel.unite_administrative_id == id &&
              qtreel.ligne_economique_id == id1 &&
              qtreel.exercice == this.afficheAnnee &&
              qtreel.diff_reg_op == 0 &&
              qtreel.type_ordre_paiement == 2
          ).length;
        } else {
          return 0;
        }
      };
    },
    NombreMarcheExecutionParUa() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter(
            (qtreel) =>
              qtreel.unite_administrative_id == id &&
              qtreel.exercice == this.afficheAnnee &&
              qtreel.marche_id != null
          ).length;
        } else {
          return 0;
        }
      };
    },
    // NombreMarcheExecutionParSection(){
    //     return (id) => {
    //     if (id != null && id != "" ) {
    //       return this.gettersgestionOrdrePaiement
    //         .filter(
    //           (qtreel) =>
    //             qtreel.section_id == id &&
    //             qtreel.exercice == this.afficheAnnee && qtreel.marche_id!=null
    //         ).length

    //     } else {
    //       return 0;
    //     }
    //   };
    // },
    NombreMarcheExecution() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement.filter(
            (qtreel) =>
              qtreel.unite_administrative_id == id &&
              qtreel.ligne_economique_id == id1 &&
              qtreel.exercice == this.afficheAnnee &&
              qtreel.marche_id != null
          ).length;
        } else {
          return 0;
        }
      };
    },
    MontantExecute() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.unite_administrative_id == id &&
                  qtreel.ligne_economique_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.ligne_economique_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.ligne_economique_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.unite_administrative_id == id &&
                  qtreel.ligne_economique_id == id1 &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },
    ShowMe() {
      return (id) => {
        if (id != null && id != "") {
          return this.verifShome == id;
        }
        return 0;
      };
    },

    verifActiviteId() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) =>
              qtreel.source_financement_id == id &&
              qtreel.exercice == this.afficheAnnee
          );

          if (qtereel) {
            return 1;
          }
          return 0;
        }
      };
    },

    // ******   les vrai in fos de ce fichier lega ************
    //**groupe ua by section ***
    listeParUaGroupe() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.source_financement_id == id
          );
        }
      };
    },
    AfficheUaGroupe() {
      return (id) => {
        if (id != 0 && id != "") {
          let objet = this.budgetEclate.filter(
            (item) => item.source_financement_id == id
          );
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.section_id);
            });
            let unique = [...new Set(array_exercie)];
            //console.log(unique);
            if (unique.length == 0) {
              return [];
            }
            return unique;
          }
          return [];
        }
      };
    },

    //****groupe ligne by ua */

    listeParLigneGroupe() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.uniteadministrative_id == id
          );
        }
      };
    },
    AfficheLigneGroupe() {
      return (id) => {
        if (id != 0 && id != "") {
          let objet = this.listeParLigneGroupe(id);
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.ligneeconomique_id);
            });
            let unique = [...new Set(array_exercie)];
            //console.log(unique);
            if (unique.length == 0) {
              return [];
            }
            return unique;
          }
          return [];
        }
      };
    },

    listeParLiNombreBailleurParLigne() {
      return (id, id1) => {
        if ((id != null && id != "", id1 != null && id1 != "")) {
          return this.budgetEclate.filter(
            (qtreel) =>
              qtreel.uniteadministrative_id == id &&
              qtreel.ligneeconomique_id == id1 &&
              qtreel.budget_active == 1
          );
        }
      };
    },
    TailleurBailleurParLigne() {
      return (id, id1) => {
        if ((id != 0 && id != "", id1 != 0 && id1 != "")) {
          let objet = this.listeParLiNombreBailleurParLigne(id, id1);
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.source_financement_id);
            });
            let unique = [...new Set(array_exercie)];
            //console.log(unique);
            if (unique.length == 0) {
              return [];
            }
            return unique;
          }
          return [];
        }
      };
    },

    NombreBailleurParSection() {
      return (id) => {
        if (id != 0 && id != "") {
          let objet = this.budgetEclate.filter(
            (item) => (item.section_id = id && item.budget_active == 1)
          );
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.source_financement_id);
            });
            let unique = [...new Set(array_exercie)];
            //console.log(unique);
            if (unique.length == 0) {
              return [];
            }
            return unique;
          }
          return [];
        }
      };
    },

    NombreBailleurParUa() {
      return (id) => {
        if (id != 0 && id != "") {
          let objet = this.budgetEclate.filter(
            (item) =>
              (item.uniteadministrative_id = id && item.budget_active == 1)
          );
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.source_financement_id);
            });
            let unique = [...new Set(array_exercie)];
            // console.log(unique);
            if (unique.length == 0) {
              return [];
            }
            return unique;
          }
          return [];
        }
      };
    },

    libelleLigneEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_budgetaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("    ", qtereel.libelle);
          }
          return 0;
        }
      };
    },

    libelleUa() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    afficheUa() {
      return this.ListeDesSourceFinancement;
    },

    ListeDesSourceFinancement() {
      if (this.source_financement_id1 != 0) {
        return this.groupeParSourceFinancementBudgetEclate.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee &&
            qtreel[0].budget_active == 1 &&
            qtreel[0].source_financement_id == this.source_financement_id1
        );
      } else {
        return this.groupeParSourceFinancementBudgetEclate.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee &&
            qtreel[0].budget_active == 1
        );
      }
    },

    Libellesection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sections.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.code_section.concat("  ", qtereel.nom_section);
          }
          return 0;
        }
      };
    },
    LibelleSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sources_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    //**************fin ******* */

    //&& this.inputLigne1!=0

    afficheAnnee() {
      if (this.exercices_budgetaires_id == 0) {
        return this.anneeAmort;
      } else {
        return this.exercices_budgetaires_id;
      }
    },

    //****************gestion des totaux *********//

    TotalMontantBudgetActuel() {
      if (this.source_financement_id != 0 && this.inputLigne1 == 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.source_financement_id == this.source_financement_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else if (this.source_financement_id != 0 && this.inputLigne1 != 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.source_financement_id == this.source_financement_id &&
              qtreel.source_financement_id == this.inputLigne1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else if (this.source_financement_id == 0 && this.inputLigne1 != 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.source_financement_id == this.inputLigne1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.source_financement_id != null
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      }
    },

    TotalMontantBudgetExecuté() {
      if (this.source_financement_id != 0 && this.inputLigne1 == 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.decision_cf == 8) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.decision_cf == 8)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.source_financement_id != 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 8) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 8)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.source_financement_id == 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 8) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.source_financement_id == this.inputLigne1 &&
                qtreel.decision_cf == 8)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 9 &&
                qtreel.source_financement_id != null) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.decision_cf == 8 &&
                qtreel.source_financement_id != null) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 9 &&
                qtreel.source_financement_id != null) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.decision_cf == 8 &&
                qtreel.source_financement_id != null)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      }
    },

    TotalMontantBudgetExecutéProvisoire() {
      if (this.source_financement_id == 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.type_ordre_paiement == 2 &&
              qtreel.source_financement_id == this.inputLigne1
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.source_financement_id != 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.type_ordre_paiement == 2 &&
              qtreel.source_financement_id == this.source_financement_id &&
              qtreel.source_financement_id == this.inputLigne1
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.source_financement_id != 0 && this.inputLigne1 == 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.type_ordre_paiement == 2 &&
              qtreel.source_financement_id == this.source_financement_id
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.type_ordre_paiement == 2 &&
              qtreel.source_financement_id != null
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      }
    },

    //*************fin gestion des totaux*************/

    MontantReamenagement() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantBudgetActuel() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantBudgetExecuté() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.source_financement_id == id &&
                  qtreel.decision_cf == 9) ||
                (qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.source_financement_id == id &&
                  qtreel.decision_cf == 8) ||
                (qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.source_financement_id == id &&
                  qtreel.decision_cf == 9) ||
                (qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.source_financement_id == id &&
                  qtreel.decision_cf == 8)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantBudgetExecutéProvisoire() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.source_financement_id == id
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantBudgetActuelActivite() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.ligneeconomique_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee &&
                qtreel.source_financement_id == id1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantBudgetExecutéSection() {
      return (id1, id) => {
        if (id1 != null && id1 != "" && id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.source_financement_id == id1 &&
                  qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.source_financement_id == id1 &&
                  qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.decision_cf == 9) ||
                (qtreel.source_financement_id == id1 &&
                  qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.source_financement_id == id1 &&
                  qtreel.section_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.decision_cf == 9)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantBudgetExecutéProvisoireActivite() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.ligne_economique_id == id &&
                qtreel.source_financement_id == id1 &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 2
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    libelleBailleur() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sources_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    LibelleActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat(" ", qtereel.libelle);
          }
          return 0;
        }
      };
    },

    listeordrepaiements() {
      if (this.formData.date_debut != "" && this.formData.date_fin != "") {
        return (id) => {
          if (id != null && id != "") {
            return this.gettersgestionOrdrePaiement.filter(
              (qtreel) =>
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 8 &&
                  qtreel.date_decision_cf >= this.formData.date_debut &&
                  qtreel.date_decision_cf <= this.formData.date_fin) ||
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 9 &&
                  qtreel.date_decision_cf >= this.formData.date_debut &&
                  qtreel.date_decision_cf <= this.formData.date_fin)
            );
          }
        };
      } else {
        return (id) => {
          if (id != null && id != "") {
            return this.gettersgestionOrdrePaiement.filter(
              (qtreel) =>
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 8) ||
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 9)
            );
          }
        };
      }
    },

    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },

    AfficheLogODCF() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/log3.png";
    },
    AfficheAmoirie() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/amoirie.png";
    },

    listeordrepaiementLigne() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.source_financement_id == id
          );
        }
      };
    },

    arrayExerciceDecompte() {
      return (idactivite) => {
        // console.log(idactivite);
        if (idactivite != null && idactivite != "") {
          let objet = this.listeordrepaiementLigne(idactivite);
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.grandenature_id);
            });
            let unique = [...new Set(array_exercie)];
            // console.log(unique);
            if (unique.length == 0) {
              return [];
            }
            return unique;
          }
          return [];
        }
      };
    },

    recupBudget() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) =>
              qtreel.grandenature_id == id &&
              qtreel.annebudgetaire == this.anneeAmort
          );
        }
      };
    },

    sommeLigneGrandeNature() {
      return (grande_nature_id) => {
        //console.log(grande_nature_id)
        if (grande_nature_id == "") return 0;
        let _objet = this.recupBudget(grande_nature_id);
        if (_objet == undefined) return 0;
        let montant = _objet.reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
          0
        );
        return montant;
      };
    },

    listeordrepaiementLigne2() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.source_financement_id == id
          );
        }
      };
    },

    arrayExerciceDecompte2() {
      return (idactivite) => {
        // console.log(idactivite);
        if (idactivite != null && idactivite != 0 && idactivite != "") {
          let objet = this.listeordrepaiementLigne2(idactivite);
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.ligneeconomique_id);
            });
            let unique = [...new Set(array_exercie)];
            //   console.log(unique);
            if (unique.length == 0) {
              return [];
            }
            return unique;
          }
          return [];
        }
      };
    },
  },

  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
      "modifierGestionOrdrePaiementAnnulat",
      "supprimerGestionOrdrePaiement",
      "ajouterHistoriqueDecisionOp",
      "modifierHistoriqueDecisionOp",
    ]),

    //
       Tri1(){
      if(this.Tri1data==0){
        this.Tri1data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.NombrePlani-b.NombrePlani});
        
      }else{
        this.Tri1data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.NombrePlani-a.NombrePlani});
      }  
    },

    Tri2(){
      if(this.Tri2data==0){
        this.Tri2data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.MontantPlani-b.MontantPlani});
        
      }else{
        this.Tri2data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.MontantPlani-a.MontantPlani});
      }  
    },

     Tri3(){
      if(this.Tri3data==0){
        this.Tri3data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.NombreContract-b.NombreContract});
        
      }else{
        this.Tri3data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.NombreContract-a.NombreContract});
      }  
    },

      Tri4(){
      if(this.Tri4data==0){
        this.Tri4data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.MontantContract-b.MontantContract});
        
      }else{
        this.Tri4data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.MontantContract-a.MontantContract});
      }  
    },

     Tri5(){
      if(this.Tri5data==0){
        this.Tri5data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.NombreAttribue-b.NombreAttribue});
        
      }else{
        this.Tri5data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.NombreAttribue-a.NombreAttribue});
      }  
    },


     Tri6(){
      if(this.Tri6data==0){
        this.Tri6data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.MontantAttribue-b.MontantAttribue});
        
      }else{
        this.Tri6data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.MontantAttribue-a.MontantAttribue});
      }  
    },

    Tri7(){
      if(this.Tri7data==0){
        this.Tri7data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.NombreEnCoursExé-b.NombreEnCoursExé});
        
      }else{
        this.Tri7data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.NombreEnCoursExé-a.NombreEnCoursExé});
      }  
    },

    Tri8(){
      if(this.Tri8data==0){
        this.Tri8data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.MontantEnCoursExé-b.MontantEnCoursExé});
        
      }else{
        this.Tri8data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.MontantEnCoursExé-a.MontantEnCoursExé});
      }  
    },

    Tri9(){
      if(this.Tri9data==0){
        this.Tri9data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.MontantExécutéEnCoursExé-b.MontantExécutéEnCoursExé});
        
      }else{
        this.Tri9data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.MontantExécutéEnCoursExé-a.MontantExécutéEnCoursExé});
      }  
    },

     Tri10(){
      if(this.Tri10data==0){
        this.Tri10data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.ResteAPayerEnCoursExé-b.ResteAPayerEnCoursExé});
        
      }else{
        this.Tri10data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.ResteAPayerEnCoursExé-a.ResteAPayerEnCoursExé});
      }  
    },


    Tri11(){
      if(this.Tri11data==0){
        this.Tri11data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.NombreSoufrance-b.NombreSoufrance});
        
      }else{
        this.Tri11data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.NombreSoufrance-a.NombreSoufrance});
      }  
    },


    Tri12(){
      if(this.Tri12data==0){
        this.Tri12data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.ResteAExécutéSoufrance-b.ResteAExécutéSoufrance});
        
      }else{
        this.Tri12data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.ResteAExécutéSoufrance-a.ResteAExécutéSoufrance});
      }  
    },


    Tri13(){
      if(this.Tri13data==0){
        this.Tri13data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.TauxSoufrance-b.TauxSoufrance});
        
      }else{
        this.Tri13data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.TauxSoufrance-a.TauxSoufrance});
      }  
    },


     Tri14(){
      if(this.Tri14data==0){
        this.Tri14data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.NombreResillié-b.NombreResillié});
        
      }else{
        this.Tri14data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.NombreResillié-a.NombreResillié});
      }  
    },

     Tri15(){
      if(this.Tri15data==0){
        this.Tri15data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.ResteAExécutéResillié-b.ResteAExécutéResillié});
        
      }else{
        this.Tri15data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.ResteAExécutéResillié-a.ResteAExécutéResillié});
      }  
    },

     Tri16(){
      if(this.Tri16data==0){
        this.Tri16data=1;
        return this.TriaffichageUniteSource.sort(function(a,b){return a.TauxResillié-b.TauxResillié});
        
      }else{
        this.Tri16data=0;
        return this.TriaffichageUniteSource.sort(function(a,b){return b.TauxResillié-a.TauxResillié});
      }  
    },
    //

    RestePayerEnCoursExé(id) {
      return (
        parseFloat(this.TotalMarcheGlobal(id)) -
        parseFloat(this.MontantExecuteGlobalParSourceFinancement(id))
      );
    },

    TauxMarcheResilierParSourceFinancement(id) {
      if (this.MontantExecuteParSourceFinancementMarcheResilier(id) == 0) {
        return 0;
      } else {
        return (
          (parseFloat(
            this.MontantExecuteParSourceFinancementMarcheResilier(id)
          ) /
            parseFloat(this.MontantReelDuMarche(id))) *
          100
        ).toFixed(2);
      }
    },

    TauxMarcheResilier(id, id1) {
      if (this.MontantExecuteParSectionMarcheEnSouffrance(id, id1) == 0) {
        return 0;
      } else {
        return (
          (parseFloat(
            this.MontantExecuteParSectionMarcheEnSouffrance(id, id1)
          ) /
            parseFloat(this.MontantReelDuMarche(id, id1))) *
          100
        ).toFixed(2);
      }
    },

    MontantResteMarcheResilier(id, id1) {
      return (
        parseFloat(this.MontantReelDuMarche(id, id1)) -
        parseFloat(this.MontantExecuteParSectionMarcheEnSouffrance(id, id1))
      );
    },

    TauxMarcheSouffranceParSourceFinancement(id) {
      if (this.MontantExecuteParSourceFinancementMarcheEnSouffrance(id) == 0) {
        return 0;
      } else {
        return (
          (parseFloat(
            this.MontantExecuteParSourceFinancementMarcheEnSouffrance(id)
          ) /
            parseFloat(this.TotalMarcheGlobal(id))) *
          100
        ).toFixed(2);
      }
    },

    MontantTauxMarcheSouffrance(id, id1) {
      if (this.MontantExecuteParSectionMarcheEnSouffrance(id, id1) == 0) {
        return 0;
      } else {
        return (
          (parseFloat(
            this.MontantExecuteParSectionMarcheEnSouffrance(id, id1)
          ) /
            parseFloat(this.MontantReelDuMarche(id, id1))) *
          100
        ).toFixed(2);
      }
    },

    MontantResteMarcheSouffrance(id, id1) {
      return (
        parseFloat(this.MontantReelDuMarche(id, id1)) -
        parseFloat(this.MontantExecuteParSectionMarcheEnSouffrance(id, id1))
      );
    },
    MontantTotalMarche(id, id1) {
      return (
        parseFloat(this.MontantReelDuMarche(id, id1)) +
        parseFloat(this.MontantAvenantMarche(id, id1))
      );
    },
    TotalMarcheGlobal(id) {
      return (
        parseFloat(this.MontantReelDuGlobalMarcheParSourceFinancement(id)) +
        parseFloat(this.MontantAvenantGlobalMarche(id))
      );
    },

    // FONCTION BAILLEUR SECTION
    nbrebailleurSection(id) {
      return this.bailleurParSect(id).length;
    },
    nbreBailleur(id) {
      return this.bailleurPar(id).length;
    },

    MontantActuelParUa(id) {
      return (
        parseFloat(this.MontantbudgetVoteParUa(id)) +
        parseFloat(this.MontantbudgetReamenagementParUa(id))
      );
    },
    MontantDisponibleParUa(id) {
      return (
        parseFloat(this.MontantActuelParUa(id)) -
        parseFloat(this.MontantExecuteParUa(id))
      );
    },
    TauxExecutionParUa(id) {
      return (
        parseFloat(this.MontantExecuteParUa(id)) /
        parseFloat(this.MontantbudgetVoteParUa(id))
      ).toFixed(2);
    },

    MontantActuelParSection(id) {
      return (
        parseFloat(this.MontantbudgetVoteParSection(id)) +
        parseFloat(this.MontantbudgetReamenagementParSection(id))
      );
    },
    MontantRestantParSection(id, id1) {
      return (
        parseFloat(this.MontantTotalMarche(id, id1)) -
        parseFloat(this.MontantExecuteParSection(id, id1))
      );
    },
    TauxExecutionParSection(id) {
      return (
        parseFloat(this.MontantExecuteParSection(id)) /
        parseFloat(this.MontantbudgetVoteParSection(id))
      ).toFixed(2);
    },

    MontantActuel(id, id1) {
      return (
        parseFloat(this.MontantbudgetVote(id, id1)) +
        parseFloat(this.MontantbudgetReamenagement(id, id1))
      );
    },
    MontantDisponible(id, id1) {
      return (
        parseFloat(this.MontantActuel(id, id1)) -
        parseFloat(this.MontantExecute(id, id1))
      );
    },
    TauxExecution(id, id1) {
      return (
        parseFloat(this.MontantExecute(id, id1)) /
        parseFloat(this.MontantbudgetVote(id, id1))
      ).toFixed(2);
    },

    ActiveInputLigne() {
      if (this.inputLigne == false) {
        this.inputLigne = true;
      } else {
        this.inputLigne = false;
        this.inputLigne1 = 0;
      }
    },
    ShowMyUa(id) {
      if (this.recupereIDactivite == "") {
        this.recupereIDactivite = id;
      } else if (
        this.recupereIDactivite != "" &&
        this.recupereIDactivite != id
      ) {
        this.recupereIDactivite = "";
        this.recupereIDactivite = id;
      } else {
        this.recupereIDactivite = "";
      }
    },

    ShowMyLigne(id) {
      if (this.recupereIDSection == "") {
        this.recupereIDSection = id;
      } else if (this.recupereIDSection != "" && this.recupereIDSection != id) {
        this.recupereIDSection = "";
        this.recupereIDSection = id;
      } else {
        this.recupereIDSection = "";
      }
    },

    EviteNaN(id) {
      if (
        this.MontantBudgetExecuté(id) == 0 &&
        this.MontantReamenagement(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantBudgetExecuté(id)) /
            parseFloat(this.MontantReamenagement(id))) *
          100
        ).toFixed(2);
      }
    },

    EviteNaNLigne(id, id1) {
      if (
        this.MontantBudgetExecutéActivite(id, id1) == 0 &&
        this.MontantBudgetActuelActivite(id, id1) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantBudgetExecutéActivite(id, id1)) /
            parseFloat(this.MontantBudgetActuelActivite(id, id1))) *
          100
        ).toFixed(2);
      }
    },

    MontantActuelleParSection(id, id1) {
      return (
        parseFloat(this.MontantInitialParSection(id, id1)) +
        parseFloat(this.AfficheVariationBudget(id, id1))
      );
    },

    MontantDisponibleParSectionB(id, id1) {
      return (
        parseFloat(this.MontantActuelleParSection(id, id1)) -
        parseFloat(this.MontantBudgetExecutéSection(id, id1))
      );
    },

    //  {{
    //                   (
    //                     (MontantBudgetExecutéActivite(listeLigneeco,GroupeOrdrePaiementByActivit[0].source_financement_id) /
    //                       MontantBudgetActuelActivite(listeLigneeco,
    //                         GroupeOrdrePaiementByActivit[0].source_financement_id
    //                       )) *
    //                     100
    //                   ).toFixed(3)

    verifValeur() {
      if (
        this.MontantBudgetActuel() == 0 &&
        this.MontantBudgetExecuté() == 0 &&
        this.MontantBudgetExecutéProvisoire() == 0
      ) {
        return 1;
      }
      return 0;
    },
    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

    partition: partition,

    getDataPaginate(index) {
      this.active_el = index;
      this.page = index;
    },
    precedent() {
      this.active_el--;
      this.page--;
    },
    suivant() {
      this.active_el++;
      this.page++;
    },

    formatageSommeSansFCFA: formatageSommeSansFCFA,
    formatageSomme: formatageSomme,
    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>

<style scoped>
.taille {
  width: 95%;
}

.whitebg {
  background: #98fb98 !important;
  font-weight: bold;
  color: black;
  font-size: 15px;
}
.graybg {
  background: rgb(6, 184, 6) !important;
  color: white;
  font-size: 15px;
  font-weight: bold;
}

.whitebg1 {
  background: #829ed3 !important;
  font-weight: bold;
  color: black;
  font-size: 15px;
}
.graybg1 {
  background: rgb(28, 13, 158) !important;
  color: white;
  font-size: 15px;
  font-weight: bold;
}

.tailgrand {
  width: 90%;
  margin: 0 -45%;
  height: 50%;
}

.modal-body {
  max-height: 85%;
}
th {
  font-size: 13px !important;
  font-weight: bold !important;
  color: #000 !important;
  text-align: center !important;
  background-color: #fbb203 !important;
}
</style>
