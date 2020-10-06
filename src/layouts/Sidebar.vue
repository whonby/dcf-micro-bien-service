<template>
  <div>
     
    <SiderbarParametre v-if="detail_marche.code == 1"></SiderbarParametre>
    <SiderbarUniteAdministrative v-else-if="detail_marche.code == 2"></SiderbarUniteAdministrative>
    <SideBarGestionSib v-else-if="detail_marche.code == 3"></SideBarGestionSib>
     <SiderbarGestionHorsSib v-else-if="detail_marche.code == 4"></SiderbarGestionHorsSib>
    <SidebarMonEquipe v-else-if="detail_marche.code == 6"></SidebarMonEquipe>
    
    <SiderbarCatographie v-else></SiderbarCatographie>
   
  </div>
</template>

<script>
import { mapGetters} from "vuex";
import SiderbarParametre from "./SiderbarParametre";
import SideBarGestionSib from "./SideBarGestionSib";
import SidebarMonEquipe from "./SidebarMonEquipe";
import SiderbarUniteAdministrative from "./SiderbarUniteAdministrative";
import SiderbarGestionHorsSib from "./SiderbarGestionHorsSib";

 import SiderbarCatographie from "./SiderbarCatographie";
export default {
  data(){
    return{

      budgetGeneralCharge:""

    }
  },
components: {
    SideBarGestionSib,
     SiderbarParametre,
    SiderbarCatographie,
    SiderbarGestionHorsSib,
    SidebarMonEquipe,
    SiderbarUniteAdministrative
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
<style>
.flex{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
}
.square{
  width: 50px;
  height: 50px;
 
  color: #FAFAFA;
  text-align: center;
  margin-right: 5px;
  cursor: pointer;
  line-height: 50px;
}
.square:hover{
  opacity: 0.8;
}

</style>