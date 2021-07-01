<template>
    <div>
        <table>
            <thead>
                <tr>
                <th> 
                    <button @click="ActiveInputLigne1">
                     <i class=" icon-search"></i> 
                      
                    </button>
                    nom</th>
                <th>prenom</th>
                <th>agsexe</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="array in arrays" :key="array.name">
                    <td>{{ array.name }}</td>
                    <td>{{ array.prenom }}</td>
                    <td>{{ array.sex }}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>



<script>
import { mapGetters, mapActions } from "vuex";
import {
  formatageSommeSansFCFA,
  partition,
  formatageSomme,
} from "@/Repositories/Repository";
import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";

//import "vue-search-select/dist/VueSearchSelect.css";
//import ProgressBar from "../component/ProgressBar"
export default {
  name: "budget",
  components: {
    //ProgressBar
  
  },
  data() {
    return {
      page: 0,
      size: 5,
      active_el: 0,

       arrays: [
      { name: 'akano', prenom:'paul',   sex: 'man' },
      { name: 'bstriker', prenom:'thauvin', sex: 'man' },
      { name: 'sonya',   prenom:'roland', sex: 'woman' },
      { name: 'findell', prenom:'marc', sex: 'woman' },
      { name: 'subzero', prenom:'debrune', sex: 'man' },
      { name: 'zubzero', prenom:'debrune', sex: 'man' }
    ],
      search: "",
      uniteadministrative_id: "",
      inputLigneCode1:0,
      inputLigneCode:false,
      inputLigneLibelle:false,
      inputLigneLibelle1:0,
    };
  },
  created() {
   
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge",
      "budgetGeneral",
      "transferts",
      "budgetEclate",
      "groupeParTypeFinancementBudgetEclate",
    ]),

    ...mapGetters("bienService", [
      "getMandatPersonnaliserVise",
      "getMandatPersonnaliserPersonnel",
      "mandats",
      "gettersgestionOrdrePaiement",
    ]),

    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
    ]),
    ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,
    ...mapGetters("Utilisateurs", [
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    NombreOPNonRegu() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.uniteadministrative_id == id && qtreel.diff_reg_op == 0
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.diff_reg_op),
              0
            )
            
        } else {
          return 78;
        }
      };
    },

    
    AfficheTypeFinancement() {
      return (id) => {
        
        let objet = this.budgetEclate.filter(item=>item.uniteadministrative_id==id && item.type_financement_id == 14 || item.uniteadministrative_id==id && item.type_financement_id == 13 || item.uniteadministrative_id==id && item.type_financement_id == 15);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_financement_id);
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
   


    TotalReamenagement() {
      return this.SommeBudgetInitial - this.SommeBudgetConsomme;
    },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllActeCreation",
      "ajouterActeCreation",
      "modifierActeCreation",
      "supprimerActeCreation",
      "importBudget",
      "getAllTypeTextes",
      "getAllUniteAdministrative",
      "getAllArchivageDocument",
      "ajouterBudgetCharge",
      "getAllBudgetGeneral",
      "getAllHistoriqueBudgetGeneral",
      "modifierLigneExempter",
    ]),
    genererEnPdfDetailReamenagement() {
      this.$htmlToPaper("printpdf1");
    },
genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },
     ActiveInputLigne(){
      if(this.inputLigneCode == false){
        this.inputLigneCode = true
      }else{
        this.inputLigneCode = false
        this.inputLigneCode1=0;
      }

 },

  ActiveInputLigne1(){
      if(this.inputLigneLibelle == false){
        this.inputLigneLibelle = true
      }else{
        this.inputLigneLibelle = false
        this.inputLigneLibelle1=0;
        
      }

 },

    ShowMyLigne(id){
      if(this.recupereIDactivite==""){
         this.recupereIDactivite=id;
      }else if(this.recupereIDactivite!="" && this.recupereIDactivite !=id){
        this.recupereIDactivite="";
        this.recupereIDactivite=id;
      }
      else{
         this.recupereIDactivite="";
      }
       
    },
    // afficheTableauTresor(id) {
    //   this.$("#validationOpDefinitif1").modal({
    //     backdrop: "static",
    //     keyboard: false,
    //   });
    //   this.editMandat = this.afficheUa.find((item) => item.id == id);
    // },
    percuFacture(id) {
      this.$("#validationOpDefinitif1").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandat = this.afficheUa.find((item) => item.id == id);
    },
    apercuFacture(id) {
      this.$("#validationOpDefinitif").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandat = this.afficheUa.find((item) => item.id == id);
    },

    EviteNaN(id) {
      if (
        this.MontantBudgetExecuté(id) == 0 &&
        this.MontantBudgetVote(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantBudgetExecuté(id)) /
            ((parseFloat(this.MontantBudgetVote(id)) + parseFloat(this.AfficheVariationBudget(id)))-parseFloat(this.MontantBudgetExecuté(id)))) *
          100
        ).toFixed(2);
      }
    },
    EviteNaNTypeFinancement(id, id1) {
      if (
        this.MontantExecuteParTypeFinancement(id, id1) == 0 &&
        this.MontantVoteParTypeFinancement(id, id1) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantExecuteParTypeFinancement(id, id1)) /
            parseFloat(this.MontantVoteParTypeFinancement(id, id1) +
                        this.AfficheVariationBudgetParTypeFinancement(id, id1))) *
          100
        ).toFixed(2);
      }
    },

    TotalMontantReamenagement(id,id1) {
      return  (parseFloat(this.MontantVoteParTypeFinancement(id,id1)) + parseFloat(this.AfficheVariationBudgetParTypeFinancement(id,id))
      );
    },
TotalDisponibleTypeFinancement(id,id1){
  return formatageSommeSansFCFA(parseFloat(parseFloat(this.TotalMontantReamenagement(id,id1))-parseFloat(this.MontantExecuteParTypeFinancement(id,id1))))
},
    TotalBudgetActuel(id) {
      return formatageSommeSansFCFA(
        parseFloat(this.MontantBudgetVote(id) - this.MontantBudgetExecuté(id))
      );
    },

    AfficheMontantBudgetInitial(id) {
      if (this.exercices_budgetaires_id == 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.uniteadministrative_id == id &&
              qtreel.annebudgetaire == this.anneeAmort
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.uniteadministrative_id == id &&
              qtreel.annebudgetaire == this.exercices_budgetaires_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      }
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

    afficherModalModifierUniteAdministrative(id) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editUniteAdministrative = this.uniteAdministratives.find(
        (item) => item.id == id
      );
    },

    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    OnchangeFichier(e) {
      const files = e.target.files;
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      Array.from(files).forEach((file) => this.addFichier(file));
    },
    addFichier(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.imagePDFDemandeAno = "pdf.png";
        vm.namePDFDemandeAno = file.name;
        vm.fichierPDFDemandeAno = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    afficherModalAjouterStock() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
    ajouterFichier() {
      const formData = new FormData();
      formData.append("fichier", this.selectedFile, this.selectedFile.name);
      formData.append("exercicebudget_id", this.exercice_budget);
      let config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      this.i = this.i + 10;
      this.bgWidth = this.i + "%";
      this.$("#exampleModal").modal("hide");
      this.ajouterBudgetCharge(formData, config)
        .then((data) => {
          console.log(data);
          //this.getAllBudgetGeneral()
        })
        .catch((erro) => {
          console.log(erro);
          this.getAllBudgetGeneral();
          this.getAllUniteAdministrative();
          // router.push({ path: 'budgetGenerals' })
        });
    },
  },
};
</script>
<style scoped>
.taille{
width: 100%;
}
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}
.gdmodelfour {
  width: 1000px;
  margin: 0 -580px;
  height: 500px;
}
.grdirModalActeEffet {
  width: 1200px;
  margin: 0 -530px;
  height: 550px;
}
.grdirModalAnalyse {
  width: 1000px;
  margin: 0 -530px;
  height: 350px;
}
.tlAviBailleur {
  width: 1000px;
  margin: 0 -530px;
  height: 450px;
}
.tlDossierCandidat {
  width: 1000px;
  margin: 0 -530px;
  height: 500px;
}

.tlg {
  width: 900px;
  margin: 0 -450px;
  height: 500px;
}
.sommecolor {
  background-color: red;
  color: red;
  font-size: 120%;
  text-align: center;
  font-weight: bold;
}
.modaloffreFin {
  width: 850px;
  margin: 0 -480px;
}
.tailDMP {
  width: 850px;
  margin: 0 -490px;
}

.whitebg {
  background: #98FB98 !important;
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
.tailleModalOffre {
  width: 1200px;
  margin: 0 -490px;
}
.tailleModalOffre2 {
  width: 1300px;
  margin: 0 -690px;
}
.tabFormulaire {
  width: 1300px;
  margin: 80px -690px;
}
</style>