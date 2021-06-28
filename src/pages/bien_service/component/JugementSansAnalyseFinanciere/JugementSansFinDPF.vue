
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
                        <a data-toggle="tab" href="#analyseDPF">Analyse</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#jugementDPF">Jugement</a>
                      </li>
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                   
                    <div id="analyseDPF" class="tab-pane active">
                     <VerificationMontantApresAnalyseDPF :macheid="macheid"></VerificationMontantApresAnalyseDPF>
                    </div>
                    
                    <div id="jugementDPF" class="tab-pane">
                     <JugementMarcheConsultanceDPF :macheid="macheid" v-if="marche.type_marche.code_type_marche==2"></JugementMarcheConsultanceDPF>
  <JugementMarcheAutreQueConsultanceDPF :macheid="macheid" v-if="marche.type_marche.code_type_marche!=2"></JugementMarcheAutreQueConsultanceDPF>
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
import JugementMarcheAutreQueConsultanceDPF from "@/pages/bien_service/component/JugementSansAnalyseFinanciere/JugementMarcheAutreQueConsultanceDPF";
import JugementMarcheConsultanceDPF from "@/pages/bien_service/component/JugementSansAnalyseFinanciere/JugementMarcheConsultanceDPF";
import VerificationMontantApresAnalyseDPF from "@/pages/bien_service/component/JugementSansAnalyseFinanciere/VerificationMontantApresAnalyseDPF.vue"
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
    JugementMarcheConsultanceDPF,
    JugementMarcheAutreQueConsultanceDPF,
    VerificationMontantApresAnalyseDPF
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