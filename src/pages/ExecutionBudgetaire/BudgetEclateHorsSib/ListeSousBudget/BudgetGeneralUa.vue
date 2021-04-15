
<template>
  <div>
    <div align="right">

      <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>


                            </div>
           
             <br/>
    <div id="printMe">
   <h1 style="text-align:center">{{libelleUa(detail_marche.uniteadministrative_id)}}</h1>
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
              <h5>VENTILATION DU BUDGET</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th style="font-size:14px">Ligne Budgetaire</th>
                    <th style="font-size:14px">Tresor(FCFA)</th>
                    <th style="font-size:14px">Don(FCFA)</th>
                     <th style="font-size:14px">Emprunt(FCFA)</th>
                      <th style="font-size:14px">Total(FCFA)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in arrayExerciceDecompte(detail_marche.uniteadministrative_id)" :key="type.id">
                    <td
                     
                    >{{LIGNEbUDGETAIRE(type) || 'Non renseigné'}}</td>
                     <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(MontantResor(type))) || 0}}</td>
                  <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(MontantDon(type))) || 0}}</td>
                     <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(MontantEmprunt(type))) || 0}}</td>
                    <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(MontantDon(type))+parseFloat(MontantResor(type))+parseFloat(MontantEmprunt(type))) || 0}}</td>
                  </tr>
                  <tr>
                    <td style="font-size:14px;color:#000;text-align:left;font-weight:bold;background:green;">PERSONNEL</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommePersonneBudgetEclateTresor(detail_marche.uniteadministrative_id)))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommePersonneBudgetEclateDon(detail_marche.uniteadministrative_id)))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommePersonneBudgetEclateEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommePersonneBudgetEclateTresor(detail_marche.uniteadministrative_id))+parseFloat(SommePersonneBudgetEclateDon(detail_marche.uniteadministrative_id))+parseFloat(SommePersonneBudgetEclateEmprunt(detail_marche.uniteadministrative_id))) || 0}}</td>
                    
                  </tr>
                  <tr class="odd gradeX" v-for="(type) in arrayExerciceDecompteBienService(detail_marche.uniteadministrative_id)" :key="type.id">
                    <td
                     
                    >{{LIGNEbUDGETAIRE(type) || 'Non renseigné'}}</td>
                     <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(MontantResor(type))) || 0}}</td>
                  <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(MontantDon(type))) || 0}}</td>
                     <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(MontantEmprunt(type))) || 0}}</td>
                    <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(45)) || 0}}</td>
                  </tr>
                  <tr>
                    <td style="font-size:14px;color:#000;text-align:left;font-weight:bold;background:green;">BIENS SERVICE</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommeBienServiceBudgetEclateTresor(detail_marche.uniteadministrative_id)))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommeBienServiceBudgetEclateDon(detail_marche.uniteadministrative_id)))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommeBienServiceBudgetEclateEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommeBienServiceBudgetEclateTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeBienServiceBudgetEclateDon(detail_marche.uniteadministrative_id))+parseFloat(SommeBienServiceBudgetEclateEmprunt(detail_marche.uniteadministrative_id))) || 0}}</td>
                    
                  </tr>
                  <tr class="odd gradeX" v-for="(type) in arrayExerciceDecompteInvertissement(detail_marche.uniteadministrative_id)" :key="type.id">
                    <td
                     
                    >{{LIGNEbUDGETAIRE(type) || 'Non renseigné'}}</td>
                     <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(MontantResor(type))) || 0}}</td>
                  <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(MontantDon(type))) || 0}}</td>
                     <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(MontantEmprunt(type))) || 0}}</td>
                    <td
                     style="font-size:14px;color:#000;text-align:center;font-weight:bold;"
                    >{{formatageSommeSansFCFA(parseFloat(MontantDon(type))+parseFloat(MontantResor(type))+parseFloat(MontantEmprunt(type))) || 0}}</td>
                  </tr>
                  <tr>
                    <td style="font-size:14px;color:#000;text-align:left;font-weight:bold;background:green;">INVERTISSEMENT</td>
                     <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommeInvestivementBudgetEclateTresor(detail_marche.uniteadministrative_id)))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommeInvestivementBudgetEclateDon(detail_marche.uniteadministrative_id)))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommeInvestivementBudgetEclateEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:green;">{{formatageSommeSansFCFA(parseFloat(SommeInvestivementBudgetEclateTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeInvestivementBudgetEclateDon(detail_marche.uniteadministrative_id))+parseFloat(SommeInvestivementBudgetEclateEmprunt(detail_marche.uniteadministrative_id))) || 0}}</td>
                    
                  </tr>
                  <tr>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:orange;">TOTAL BUDGET ECLATE</td>
<td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:orange;">{{formatageSommeSansFCFA(parseFloat(SommePersonneBudgetEclateTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeBienServiceBudgetEclateTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeInvestivementBudgetEclateTresor(detail_marche.uniteadministrative_id)))}}</td>
<td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:orange;">{{formatageSommeSansFCFA(parseFloat(SommePersonneBudgetEclateDon(detail_marche.uniteadministrative_id))+parseFloat(SommeBienServiceBudgetEclateDon(detail_marche.uniteadministrative_id))+parseFloat(SommeInvestivementBudgetEclateDon(detail_marche.uniteadministrative_id)))}}</td>
<td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:orange;">{{formatageSommeSansFCFA(parseFloat(SommePersonneBudgetEclateEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeBienServiceBudgetEclateEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeInvestivementBudgetEclateEmprunt(detail_marche.uniteadministrative_id)))}}</td>
<td style="font-size:14px;color:#000;text-align:center;font-weight:bold;background:orange;">{{formatageSommeSansFCFA(parseFloat(SommeBienServiceBudgetEclateTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeBienServiceBudgetEclateDon(detail_marche.uniteadministrative_id))+parseFloat(SommeBienServiceBudgetEclateEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeInvestivementBudgetEclateTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeInvestivementBudgetEclateDon(detail_marche.uniteadministrative_id))+parseFloat(SommeInvestivementBudgetEclateEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommePersonneBudgetEclateTresor(detail_marche.uniteadministrative_id))+parseFloat(SommePersonneBudgetEclateDon(detail_marche.uniteadministrative_id))+parseFloat(SommePersonneBudgetEclateEmprunt(detail_marche.uniteadministrative_id))) || 0}}</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>

   </div>
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import {formatageSommeSansFCFA} from "@/Repositories/Repository"
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
   this.detail_marche = this.budgetEclate.find(
       idmarche => idmarche.id == this.$route.params.id
         )
 
},
  computed: {
     ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires","structures_budgetaires","getterTousActivite","getterTousPlanBudgetaire"]),
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
    ]),
    ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques','getterInfrastrucure',"taux"]),
    // afficheLigneEclate(){
    //   return this.arrayExerciceDecompte.filter(item=>item.uniteadministrative_id ==this.detail_marche.uniteadministrative_id)
    // },
    
    libelleUa() {
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
SommeInvestivementBudgetEclateTresor() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.type_financement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
        }
      };
    },
    SommeInvestivementBudgetEclateDon() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.type_financement_id == 13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

     
        }
      };
    },
    SommeInvestivementBudgetEclateEmprunt() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.type_financement_id == 15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);

     
        }
      };
    },
SommeBienServiceBudgetEclateTresor() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.type_financement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
        }
      };
    },
    SommeBienServiceBudgetEclateDon() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.type_financement_id == 13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

     
        }
      };
    },
    SommeBienServiceBudgetEclateEmprunt() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.type_financement_id == 15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);

     
        }
      };
    },

LigneParUaInvertissement() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.budget_active==1);

     
        }
      };
    },
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    arrayExerciceDecompteInvertissement() {
      return (id) => {
        
        let objet = this.LigneParUaInvertissement(id);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
     };
    },







LigneParUaBienService() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.budget_active==1);

     
        }
      };
    },
    arrayExerciceDecompteBienService() {
      return (id) => {
        
        let objet = this.LigneParUaBienService(id);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
     };
    },
SommePersonneBudgetEclateEmprunt() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.type_financement_id == 15 && qtreel.annebudgetaire == this.anneeAmort && qtreel.budget_active == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);

     
        }
      };
    },
SommePersonneBudgetEclateDon() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.type_financement_id == 13 && qtreel.annebudgetaire == this.anneeAmort && qtreel.budget_active == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

     
        }
      };
    },

SommePersonneBudgetEclateTresor() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.type_financement_id == 14 && qtreel.annebudgetaire == this.anneeAmort && qtreel.budget_active == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
        }
      };
    },
    LigneParUa() {
      return id => {
        if (id != null && id != "") {
           return  this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.budget_active==1);

     
        }
      };
    },
    arrayExerciceDecompte() {
      return (id) => {
        
        let objet = this.LigneParUa(id);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
     };
    },
    MontantResor() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.uniteadministrative_id==this.detail_marche.uniteadministrative_id && qtreel.type_financement_id == 14 && qtreel.annebudgetaire == this.anneeAmort && qtreel.budget_active == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

      // if (qtereel) {
      //   return qtereel.tresor
      // }
      // return 0
        }
      };
    },
    LIGNEbUDGETAIRE() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat("    ", qtereel.libelle)
      }
      return 0
        }
      };
    },
    MontantDon() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.uniteadministrative_id==this.detail_marche.uniteadministrative_id && qtreel.type_financement_id == 13 && qtreel.annebudgetaire == this.anneeAmort && qtreel.budget_active == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

      // if (qtereel) {
      //   return qtereel.don
      // }
      // return 0
        }
      };
    },
     MontantEmprunt() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.uniteadministrative_id==this.detail_marche.uniteadministrative_id && qtreel.type_financement_id == 15 && qtreel.annebudgetaire == this.anneeAmort && qtreel.budget_active == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);

      // if (qtereel) {
      //   return qtereel.emprunt
      // }
      // return 0
      //   }
      }
      }
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
      "supprimerTypeTexte"
    ]),
      genererEnPdf(){
  this.$htmlToPaper('printMe');
},
    formatageSommeSansFCFA:formatageSommeSansFCFA,
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterTypeTexteLocal() {
      this.ajouterTypeTexte(this.formData);

      this.formData = {
        code: "",
        libelle: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editTypeTexte = this.typeTextes[index];
    },
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      this.modifierTypeTexte(this.editTypeTexte);
this.$("#modificationModal").modal('hide');
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
       
    },
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

