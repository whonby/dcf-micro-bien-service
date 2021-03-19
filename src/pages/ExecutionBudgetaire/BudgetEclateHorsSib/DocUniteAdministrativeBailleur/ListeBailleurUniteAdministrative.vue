
<template>
  <div>
      
  <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
        <table class="table table-bordered table-striped">
          <tr>
            <td style="text-align:center;font-size:20px;color:#000">
              {{libelleua(detail_marche.ua_id)}}
            </td>
          </tr>
          </table>
    <div class="row-fluid">
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5 style="font-size:18px;color:#000">TYPE FINANCEMENT <code style="font-size:18px;">TRESOR</code></h5>
          </div>
           <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                      <th>NBRE DE BAILLEUR</th>
                    <th>BAILLEUR</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in listeDesBailleurParUaTresor(detail_marche.ua_id)" :key="type.id">
                  <td style="font-size:18px;color:#000"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.numero_ordre || 'Non renseigné'}}</td>
                    <td style="font-size:18px;color:#000"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{libelleSousFinancement(type.sous_financement_id) || 'Non renseigné'}}</td>
                   
                    <td>
                      <button class="btn btn-danger" @click="supprimerUniteAdministrativeBailleur(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
        </div>
      </div>
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5 style="font-size:18px;color:#000">TYPE FINANCEMENT :<code style="font-size:18px;">DON</code></h5>
          </div>
          <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                      <th>NOMBRE DE BAILLEUR</th>
                    <th>BAILLEUR</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in listeDesBailleurParUaDon(detail_marche.ua_id)" :key="type.id">
                  <td style="font-size:18px;color:#000"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.numero_ordre || 'Non renseigné'}}</td>
                    <td style="font-size:18px;color:#000"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{libelleSousFinancement(type.sous_financement_id) || 'Non renseigné'}}</td>
                   
                    <td>
                      <button class="btn btn-danger" @click="supprimerUniteAdministrativeBailleur(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
        </div>
      </div>
      <div class="span4">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-list"></i> </span>
            <h5 style="font-size:18px;color:#000">TYPE FINANCEMENT : <code style="font-size:18px;">EMPRUNT</code></h5>
          </div>
          <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                      <th>NOMBRE DE BAILLEUR</th>
                    <th>BAILLEUR</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in listeDesBailleurParUaEmprunt(detail_marche.ua_id)" :key="type.id">
                   <td style="font-size:18px;color:#000"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.numero_ordre || 'Non renseigné'}}</td>
                    <td style="font-size:18px;color:#000"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{libelleSousFinancement(type.sous_financement_id) || 'Non renseigné'}}</td>
                   
                    <td>
                      <button class="btn btn-danger" @click="supprimerUniteAdministrativeBailleur(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
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
   this.detail_marche = this.getterUniteAdministrativeBailleur.find(
       idmarche => idmarche.id == this.$route.params.id
         )

},
  computed: {
    ...mapGetters("uniteadministrative", ["getterUniteAdministrativeBailleur","uniteAdministratives"]),
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
    listeDesBailleurParUaTresor() {
      return (id) => {
        if (id != null && id != "") {
           return this.getterUniteAdministrativeBailleur.filter(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==14 );
        }
      };
    },
    listeDesBailleurParUaDon() {
      return (id) => {
        if (id != null && id != "") {
           return this.getterUniteAdministrativeBailleur.filter(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==13 );
        }
      };
    },
    listeDesBailleurParUaEmprunt() {
      return (id) => {
        if (id != null && id != "") {
           return this.getterUniteAdministrativeBailleur.filter(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==15 );
        }
      };
    },
    MonantDesSousBudget() {
      return (id) => {
        if (id != null && id != "") {
           return this.getterUniteAdministrativeBailleur.filter(qtreel => qtreel.unite_administrative_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_budgetaire), 0).toFixed(0);
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
    libelleua() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

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
      "supprimerUniteAdministrativeBailleur"
    ]),
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

