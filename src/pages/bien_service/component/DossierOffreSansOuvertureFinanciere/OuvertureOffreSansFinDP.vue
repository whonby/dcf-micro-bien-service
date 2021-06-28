<template>
<div>
  <div class="row-fluid">
    <div class="span12">
      <div class="widget-box">
        <div class="widget-title">
          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#cojo">Infomation COJO</a></li>
            <li class=""><a data-toggle="tab" href="#membre">Membre COJO</a></li>
<!--            <li class=""><a data-toggle="tab" href="#membre_evalu">Membre du comité d'évaluation</a></li>-->
            <li class=""><a data-toggle="tab" href="#dossier_candata">Dossier du soumissionnaire</a></li>
                  <li class=""><a data-toggle="tab" href="#PVDP">PV ouverture </a></li>
             <li class=""><a data-toggle="tab" href="#tabAnalyseDP"> Analyse </a></li>
             <li class=""><a data-toggle="tab" href="#tabPVJugementDP">PV Jugement</a></li>
          </ul>
        </div>

        <div class="widget-content tab-content">
          <div id="cojo" class="tab-pane active">
            <InfoCojoDP :macheid="macheid"></InfoCojoDP>
          </div>
          <div id="membre" class="tab-pane ">
            <MembreCojoDP :macheid="macheid"></MembreCojoDP>
          </div>

          <div id="dossier_candata" class="tab-pane ">
            <DossierCandidatDP :macheid="macheid"></DossierCandidatDP>
          </div>

            <div id="PVDP" class="tab-pane ">
              <rapportOuverture :macheid="macheid"></rapportOuverture>
            <!-- <dossier-candidat :macheid="macheid"></dossier-candidat> -->
          </div>
                <div id="tabAnalyseDP" class="tab-pane">

                    <JugementSansFinDP :macheid="macheid"></JugementSansFinDP>

<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>
                <div id="tabPVJugementDP" class="tab-pane">

                   <PvJugement  :macheid="macheid"></PvJugement>
                </div>
           <div id="membre_evalu" class="tab-pane ">
            <membre-evalu :macheid="macheid"></membre-evalu>
          </div>
        </div>


      </div>


    </div>
  </div>
</div>
</template>

<script>
//import InfoCojo from "@/pages/bien_service/component/OuvertureOffre/InfoCojo";
//import MembreCojo from "@/pages/bien_service/component/OuvertureOffre/MembreCojo";

import InfoCojoDP from "@/pages/bien_service/component/OuvertureOffre/InfoCojoDP";
import MembreCojoDP from "@/pages/bien_service/component/OuvertureOffre/MembreCojoDP";
import MembreEvalu from "@/pages/bien_service/component/OuvertureOffre/MembreEvalu";
//import DossierCandidat from "@/pages/bien_service/component/OuvertureOffre/dossier_candidat/DossierCandidat";
import DossierCandidatDP from "@/pages/bien_service/component/OuvertureOffre/dossier_candidat/DossierCandidatDP";
import PvJugement from "@/pages/bien_service/component/Jugement/pv/PvJugement";
//import DossierCandidatDP from "@/pages/bien_service/component/DossierOffreSansOuvertureFinanciere/dossier_candidat/DossierCandidatDP"
import rapportOuverture from '@/pages/bien_service/dossierDetailMarcheProcedureSimplifierAvecComite/dossierRappportOuverture/rapportOuverture';
import JugementSansFinDP from "@/pages/bien_service/component/JugementSansAnalyseFinanciere/JugementSansFinDP"
//import JugementSansFin from "@/pages/bien_service/component/JugementSansAnalyseFinanciere/JugementSansFin"

export default {
name: "OuvertureOffre",
  props:["macheid"],
  components:{
    //InfoCojo,
    //MembreCojo,
    InfoCojoDP,
    MembreCojoDP,
    MembreEvalu,
   // DossierCandidat,
   DossierCandidatDP,
    PvJugement,
    //JugementSansFin,
    JugementSansFinDP,
    rapportOuverture
  },
  
  data(){
    return{
      id_marche:""
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>