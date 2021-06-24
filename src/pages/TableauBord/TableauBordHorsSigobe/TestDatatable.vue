<template>
    <div>
            <datatable
	title="Basic table"
	:columns="tableColumns1"
	:rows="tableRows1"
/>

 {{ dataArray }}
    </div>
</template>

<script>
 import DataTable from "vue-materialize-datatable";
 import { mapGetters } from "vuex";
import {
  formatageSommeSansFCFA,
  formatageSomme,
} from "@/Repositories/Repository";
import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";
//import { ModelListSelect } from "vue-search-select";
//import "vue-search-select/dist/VueSearchSelect.css";

export default {
    components:{
        "datatable": DataTable,
       // ModelListSelect,
    },

    data() {
	return {
		tableColumns1: [
			{
				label: "Character name",
				field: "charName",
				numeric: false,
				html: false
			},
			{
				label: "First appearance",
				field: "firstAppearance",
				numeric: false,
				html: false
			},
			{
				label: "Created by",
				field: "createdBy",
				numeric: false,
				html: false
			},
			{
				label: "Voiced by",
				field: "voicedBy",
				numeric: false,
				html: false
			}
		],
		tableRows1: [],
	}
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
      "groupeParTypeFinancementBudgetEclate"
    ]),

    ...mapGetters("bienService", [
      "getMandatPersonnaliserVise",
      "getMandatPersonnaliserPersonnel",
      "mandats",
      "gettersgestionOrdrePaiement",
    ]),

    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements"
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
     ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
     ...mapGetters("Utilisateurs", [
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    admin: admin,
    dcf: dcf,
    noDCfNoAdmin: noDCfNoAdmin,

    filtrerUaParTypeProj() {
      return this.uniteAdministratives.filter((item) => item.type_ua_id == 7);
    },


     filtre_unite_admin() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.filtrerUaParTypeProj.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }
      return this.filtrerUaParTypeProj;
    },
    


    dataArray(){
        return this.tableRows1== this.sections;
    },


},

methods:{


    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
},
    
}
</script>

<style scoped>

</style>