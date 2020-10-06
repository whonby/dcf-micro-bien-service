<template>
  <div>
     
    <TableauBordParametre v-if="detail_marche.code == 1"></TableauBordParametre>
    <TableauBordUa v-else-if="detail_marche.code == 2"></TableauBordUa>
    <TableauBordGestionSib v-else-if="detail_marche.code == 3"></TableauBordGestionSib>
     <TableauBordGestionHorsSib v-else-if="detail_marche.code == 4"></TableauBordGestionHorsSib>
    <TableauBordMonEquipe v-else-if="detail_marche.code == 6"></TableauBordMonEquipe>
    
    <TableauBordCatographies v-else></TableauBordCatographies>
   
  </div>

</template>

<script>
import { mapGetters} from "vuex";
import TableauBordCatographies from "../../gestionDesModule/TableauBordCatographies";
import TableauBordGestionHorsSib from "../../gestionDesModule/TableauBordGestionHorsSib";
import TableauBordGestionSib from "../../gestionDesModule/TableauBordGestionSib";
import TableauBordMonEquipe from "../../gestionDesModule/TableauBordMonEquipe";
import TableauBordParametre from "../../gestionDesModule/TableauBordParametre";

 import TableauBordUa from "../../gestionDesModule/TableauBordUa";
export default {
  data(){
    return{

      budgetGeneralCharge:""

    }
  },
components: {
    TableauBordGestionSib,
     TableauBordCatographies,
    TableauBordGestionHorsSib,
    TableauBordParametre,
    TableauBordMonEquipe,
    TableauBordUa
  },
   
  computed:{
 ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "budgetGeneral",
                "afficheTransfertValider",
                "transferts"

            ]),
            
    ...mapGetters("bienService", ["getMandatPersonnaliserVise","getMandatPersonnaliserPersonnel","mandats"]),

       ...mapGetters("parametreGenerauxAdministratif", [
                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires",
                "gestionModules"
            ]),
            
        
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),



  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.gestionModules.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  
},
  methods:{




  }
}
</script>


