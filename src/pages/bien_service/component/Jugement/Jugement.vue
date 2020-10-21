
<template>
  
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div>
      <hr />
     
        
            

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#analyse">Analyse</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#jugement">Jugement</a>
                      </li>
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                   
                    <div id="analyse" class="tab-pane active">
                     <VerificationMontantApresAnalyse :macheid="macheid"></VerificationMontantApresAnalyse>
                    </div>
                    
                    <div id="jugement" class="tab-pane">
                     <JugementMarcheConsultance :macheid="macheid" v-if="marche.type_marche.code_type_marche==2"></JugementMarcheConsultance>
  <JugementMarcheAutreQueConsultance :macheid="macheid" v-if="marche.type_marche.code_type_marche!=2"></JugementMarcheAutreQueConsultance>
                    </div>
                   
                  </div>
                  <br />
                  
                </div>
              </table>
            </div>
          
      
      <notifications/>
    </div>
</template>

<script>
import JugementMarcheAutreQueConsultance from "@/pages/bien_service/component/Jugement/JugementMarcheAutreQueConsultance";
import JugementMarcheConsultance from "@/pages/bien_service/component/Jugement/JugementMarcheConsultance";
import VerificationMontantApresAnalyse from "@/pages/bien_service/component/Jugement/VerificationMontantApresAnalyse.vue"
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
    JugementMarcheAutreQueConsultance,
    VerificationMontantApresAnalyse
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