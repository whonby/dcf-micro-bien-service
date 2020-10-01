<template>
<div>
  <JugementMarcheConsultance :macheid="macheid" v-if="marche.type_marche.code_type_marche==2"></JugementMarcheConsultance>
  <JugementMarcheAutreQueConsultance :macheid="macheid" v-if="marche.type_marche.code_type_marche!=2"></JugementMarcheAutreQueConsultance>
</div>
</template>

<script>
import JugementMarcheAutreQueConsultance
  from "@/pages/bien_service/component/Jugement/JugementMarcheAutreQueConsultance";
import JugementMarcheConsultance from "@/pages/bien_service/component/Jugement/JugementMarcheConsultance";
import {mapGetters} from "vuex";
export default {

name: "Jugement",
  props:["macheid"],
  data(){
  return{
    marche:"",
  }
  },
  components:{
    JugementMarcheConsultance,
    JugementMarcheAutreQueConsultance
  },
  created() {
  this.marche=this.getMarchePersonnaliser.find(item=>item.id==this.macheid)
    console.log(this.marche)
  },
  computed:{
    ...mapGetters("bienService", ["gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
      "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
      "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
      "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
  }
}
</script>

<style scoped>

</style>