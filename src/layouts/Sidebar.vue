<template>
  <div>
    


    <SiderbarParametre v-if="detail_marche.code == 1"></SiderbarParametre>
    <!-- <SideBarGestionAccess v-if="detail_marche.code == 21"></SideBarGestionAccess> -->
    <SiderbarUniteAdministrative v-else-if="detail_marche.code == 2"></SiderbarUniteAdministrative>
    <SideBarGestionSib v-else-if="detail_marche.code == 3"></SideBarGestionSib>
     <SiderbarGestionHorsSib v-else-if="detail_marche.code == 4"></SiderbarGestionHorsSib>
    <SidebarMonEquipe v-else-if="detail_marche.code == 16"></SidebarMonEquipe>
    <SiderbarRapport v-else-if="detail_marche.code == 7"></SiderbarRapport>
    
    <SiderbarGestionVehicule v-else-if="detail_marche.code == 8"></SiderbarGestionVehicule>
    <SiderbarTableauBord v-else-if="detail_marche.code == 9"></SiderbarTableauBord>
    <SiderbarCatographie  v-else></SiderbarCatographie>
     
   
   
  </div>
</template>

<script>
import { mapGetters} from "vuex";
import SiderbarParametre from "./SiderbarParametre";
//import SideBarGestionAccess from "./SideBarGestionAccess";
import SideBarGestionSib from "./SideBarGestionSib";
import SidebarMonEquipe from "./SidebarMonEquipe";
import SiderbarUniteAdministrative from "./SiderbarUniteAdministrative";
import SiderbarGestionHorsSib from "./SiderbarGestionHorsSib";
import SiderbarRapport from "./SiderbarRapport";
 import SiderbarCatographie from "./SiderbarCatographie";
 import SiderbarGestionVehicule from "./SiderbarGestionVehicule";
 import SiderbarTableauBord from "./SiderbarTableauBord";

export default {
  data(){
    return{

      budgetGeneralCharge:""

    }
  },
components: {
    SideBarGestionSib,
    //SideBarGestionAccess,
     SiderbarParametre,
    SiderbarCatographie,
    SiderbarGestionHorsSib,
    SidebarMonEquipe,
    SiderbarUniteAdministrative,
    SiderbarRapport,
    SiderbarGestionVehicule,
    SiderbarTableauBord
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
    ...mapGetters('Utilisateurs', ['getterMenuModuleSidcf']),

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
  console.log("Guei est dans la place")
   this.detail_marche = this.gestionModules.find(
       idmarche => idmarche.id == this.$route.params.id
   )
   console.log(this.detail_marche)
  
},
  methods:{


goToModule(id){
     console.log(id)
     if (id==6){
         this.$router.push({
             name: 'liste_ua_compta'
         })
     }else{

         this.$router.push({
             name: 'TableauDeBordG',
             params:{id:id}
         })
     }
      },

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