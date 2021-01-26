<template>
  <div>
     

    <TableauBordParametre v-if="detail_marche.code == 1"></TableauBordParametre>
    <TableauBordUa v-else-if="detail_marche.code == 2"></TableauBordUa>
    <TableauBordGestionSib v-else-if="detail_marche.code == 3"></TableauBordGestionSib>
     <TableauBordGestionHorsSib v-else-if="detail_marche.code == 4"></TableauBordGestionHorsSib>
    <TableauBordMonEquipe v-else-if="detail_marche.code == 6"></TableauBordMonEquipe>
    <TableauBordRapport v-else-if="detail_marche.code == 7"></TableauBordRapport>
<!--    <TableauBordEquipeCF v-else-if="detail_marche.code == 16"></TableauBordEquipeCF>-->
    <TableauBordCatographies  v-else-if="detail_marche.code == 5"></TableauBordCatographies>
    <TableauBordGestionVehicule v-else></TableauBordGestionVehicule>

    <!-- </template> -->
    <!-- <template v-else>
     <TableauBordGestionVehicule ></TableauBordGestionVehicule>
    </template> -->

  </div>

</template>

<script>
import { mapGetters} from "vuex";
import TableauBordCatographies from "../../gestionDesModule/TableauBordCatographies";
import TableauBordGestionHorsSib from "../../gestionDesModule/TableauBordGestionHorsSib";
import TableauBordGestionSib from "../../gestionDesModule/TableauBordGestionSib";
import TableauBordMonEquipe from "../../gestionDesModule/TableauBordMonEquipe";
import TableauBordParametre from "../../gestionDesModule/TableauBordParametre";
import TableauBordRapport from "../../../src/pages/Gestion_des_Rapports/suiviDesEntreprise";
 import TableauBordUa from "../../gestionDesModule/TableauBordUa";
 import TableauBordGestionVehicule from "../../gestionDesModule/TableauBordGestionVehicule";
 // import TableauBordEquipeCF from "../../gestionDesModule/TableauBordEquipeCF"
export default {
  data(){
    return{
      detail_marche:"",
      budgetGeneralCharge:""

    }
  },
components: {
    TableauBordGestionSib,
     TableauBordCatographies,
    TableauBordGestionHorsSib,
    TableauBordParametre,
    TableauBordMonEquipe,
    TableauBordUa,
    TableauBordRapport,
    TableauBordGestionVehicule,
 // TableauBordEquipeCF
  },

  created() {
      console.log(this.getterUniteAdministrativeByUser)
            this.marcheid=this.$route.params.id
    if(this.$route.params.id==16){
      this.detail_marche.code=16
     // console.log(this.$route.params.id)
    }else{
      this.detail_marche = this.gestionModules.find(
              idmarche => idmarche.id == this.$route.params.id
      )
    }

  
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

  methods:{




  }
}
</script>


