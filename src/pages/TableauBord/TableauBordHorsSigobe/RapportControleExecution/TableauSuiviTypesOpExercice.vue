
<template>


    <div class="container-fluid">
         <table class="table table-bordered table-striped">
            <tr>
                <td>
 <label
                            >EXERCICE
                            <code style="color: red; font-size: 16px">*</code>
                          </label>
                          <model-list-select
                            style="border: 1px solid #000"
                            class="wide"
                            :list="exercices_budgetaires"
                            v-model="exercices_budgetaires_id"
                            option-value="annee"
                            option-text="annee"
                            placeholder=""
                          >
                          </model-list-select>
                         
                </td>
                   
                    <td>
                          
                          
                        </td>
 <td>

                         
                </td>
             
            </tr>
             
        </table>
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste type texte"
            :data="filtre_type_teste"
            name="Liste type texte"
            worksheet="Liste type texte"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Tableau de Suivi des Types d’op par Exercice</h5>
             
            </div>

            <div class="widget-content nopadding">
               
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th style="font-size:14px;font-weight:bold;color:#000">EXERCICE</th>
                    <th style="font-size:14px;font-weight:bold;color:#000">MONTANTS DES OP PROVISOIRE</th>
                     <th style="font-size:14px;font-weight:bold;color:#000">MONTANTS DES OP ANNULATION</th>
                    <th style="font-size:14px;font-weight:bold;color:#000">MONTANTS DES OP DIRECT</th>
                     <th style="font-size:14px;font-weight:bold;color:#000">MONTANTS DES OP DEFINITIF</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in afficheListeParAnnee" :key="type.id">
                    <td style="text-align:center;font-size:14px;font-weight:bold;color:#000">{{type|| 'Non renseigné'}}</td>
                   <td style="text-align:center;font-size:14px;font-weight:bold;color:#000">{{formatageSomme(parseFloat(MontantsProvisoire(type)))|| 'Non renseigné'}}</td>
                  <td style="text-align:center;font-size:14px;font-weight:bold;color:#000">{{formatageSomme(parseFloat(MontantsAnnulation(type)))|| 'Non renseigné'}}</td>
                   <td style="text-align:center;font-size:14px;font-weight:bold;color:#000">{{formatageSomme(parseFloat(MontantsDirect(type)))|| 'Non renseigné'}}</td>
                    <td style="text-align:center;font-size:14px;font-weight:bold;color:#000">{{formatageSomme(parseFloat(MontantsDefinitif (type)))|| 'Non renseigné'}}</td>

                   
                  </tr>
                  <tr>
                       <td style="text-align:center;font-size:14px;font-weight:bold;color:#000;background-color: #e6b637;">TOTAL</td>
                   <td style="text-align:center;font-size:14px;font-weight:bold;color:#000;background-color: #e6b637;">{{formatageSomme(parseFloat(TotalProvisoire))|| 'Non renseigné'}}</td>
                  <td style="text-align:center;font-size:14px;font-weight:bold;color:#000;background-color: #e6b637;">{{formatageSomme(parseFloat(TotalAnnulation))|| 'Non renseigné'}}</td>
                   <td style="text-align:center;font-size:14px;font-weight:bold;color:#000;background-color: #e6b637;">{{formatageSomme(parseFloat(TotalDirect))|| 'Non renseigné'}}</td>
                    <td style="text-align:center;font-size:14px;font-weight:bold;color:#000;background-color: #e6b637;">{{formatageSomme(parseFloat(TotalDefinitif ))|| 'Non renseigné'}}</td>

                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>



</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import {formatageSomme } from "@/Repositories/Repository";

import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
    components: {
    ModelListSelect,
  },
  name:'typetext',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
       
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
     
     exercices_budgetaires_id:0,
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", ["typeTextes"]),
    ...mapGetters("bienService", ["gettersgestionOrdrePaiement"]),
 ...mapGetters("parametreGenerauxAdministratif", [
      "taux",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5",
    ]),



TotalProvisoire() {
   
          return this.gettersgestionOrdrePaiement.filter((qtreel) =>  qtreel.type_ordre_paiement == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
     
    },
TotalAnnulation() {
     
          return this.gettersgestionOrdrePaiement.filter((qtreel) =>  qtreel.type_ordre_paiement == 3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
      
    },
    TotalDirect() {
    
          return this.gettersgestionOrdrePaiement.filter((qtreel) =>  qtreel.type_ordre_paiement == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
       
    },
     TotalDefinitif() {
  
          return this.gettersgestionOrdrePaiement.filter((qtreel) =>  qtreel.type_ordre_paiement == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
      
    },





MontantsProvisoire() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter((qtreel) => qtreel.exercice == id && qtreel.type_ordre_paiement == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
        }
      };
    },
MontantsAnnulation() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter((qtreel) => qtreel.exercice == id && qtreel.type_ordre_paiement == 3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
        }
      };
    },
    MontantsDirect() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter((qtreel) => qtreel.exercice == id && qtreel.type_ordre_paiement == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
        }
      };
    },
     MontantsDefinitif() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter((qtreel) => qtreel.exercice == id && qtreel.type_ordre_paiement == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0).toFixed(0);
        }
      };
    },

 afficheListeParAnnee(){
if(this.exercices_budgetaires_id==0){
    return this.arrayExerciceDecompteBienService
}
else{
    return this.arrayExerciceOp
}
 },
arrayExerciceOp() {
      //return (id) => {
        
        let objet = this.gettersgestionOrdrePaiement.filter(item=>item.exercice == this.exercices_budgetaires_id);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.exercice);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
    // };
    },
   arrayExerciceDecompteBienService() {
      //return (id) => {
        
        let objet = this.gettersgestionOrdrePaiement;
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.exercice);
          });
          let unique = [...new Set(array_exercie)];
          console.log(unique);
          if (unique.length == 0) {
            return [];
          }
          return unique;
        }
        return [];
    // };
    },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllTypeTextes",
      "getAllNombreTypeText",
      "ajouterTypeTexte",
      "modifierTypeTexte",
      "supprimerTypeTexte"
    ]),
   formatageSomme:formatageSomme,
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

