
<template>
  <div>
      
  <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste type texte"
            :data="filtre_type_teste"
            name="Liste type texte"
            worksheet="Liste type texte"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Sous Budget</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                       <!-- <th>Numero ordre</th> -->
                    <th>Code Sous Budget</th>
                    <th>Libelle</th>
                     <th>Activite</th>
                    <th>Ligne Budgetaire</th>
                     <th>Type Financement</th>
                    <th>Sous Finanacement</th>
                    <th>Montant</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeDesSousBudget(detail_marche.unite_administrative_id)" :key="type.id">
                    <!-- <td
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.nombre_sous_budget || 'Non renseigné'}}</td> -->
                    <td
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.code || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.activite_enfant || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{libelleActivite(type.activite_parent_id) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{libelleLigneBudgetaire(type.ligneeconomique_id) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{libelleTypeFinancement(type.type_financement_id) || 'Non renseigné'}}</td>


<td
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{libelleSousFinancement(type.source_financement_id) || 'Non renseigné'}}</td>
<td
                      @dblclick="afficherModalModifierTypeTexte(type.id)" style="text-align:center;font-weight:bold;"
                    >{{formatageSomme(parseFloat(type.montant_budgetaire)) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerSousBudget(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                     <td></td>
                            <!-- <td></td> -->
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                                    <td style="font-weight:bold;font-size:14px;text-align:center;">TOTAL</td>
                            <td style="text-align:center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(MonantDesSousBudget(detail_marche.unite_administrative_id)))}}</td>
                            <td></td>
                            
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>


<notifications  />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
  import {formatageSomme} from "@/Repositories/Repository"
export default {
  name:'typetext',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        code: "",
        libelle: ""
      },
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      search: ""
    };
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getSousBudget.find(
       idmarche => idmarche.id == this.$route.params.id
         )

},
  computed: {
    ...mapGetters("uniteadministrative", ["getSousBudget","uniteAdministratives"]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      "services_gestionnaires",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
    ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires","structures_budgetaires","getterTousActivite","getterTousPlanBudgetaire"]),
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',"types_financements"]),
     libelleLigneBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    
    
    
    libelleActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    listeDesSousBudget() {
      return (id) => {
        if (id != null && id != "") {
           return this.getSousBudget.filter(qtreel => qtreel.unite_administrative_id == id );
        }
      };
    },
    MonantDesSousBudget() {
      return (id) => {
        if (id != null && id != "") {
           return this.getSousBudget.filter(qtreel => qtreel.unite_administrative_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_budgetaire), 0).toFixed(0);
        }
      };
    },
    libelleSousFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    libelleTypeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.types_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    filtre_type_teste() {
      const st = this.search.toLowerCase();
      return this.typeTextes.filter(type => {
        return (
          type.code.toLowerCase().includes(st) ||
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllTypeTextes",
      "getAllNombreTypeText",
      "ajouterTypeTexte",
      "modifierTypeTexte",
      "supprimerSousBudget"
    ]),
    afficherModalModifierTypeTexte(id) {

      this.$router.push({
        path: "/ModifierSousBudget/" + id
      });
    },
  formatageSomme:formatageSomme,
    pagePrecedent(){
                window.history.back()
            },
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

