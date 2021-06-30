<template>
<div>
  <div class="row-fluid">
    <div class="span12">
      <div class="widget-box">
        <div class="widget-title">
          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#cojoDPF">Infomation COJO</a></li>
            <li class=""><a data-toggle="tab" href="#membreDPF">Membre COJO</a></li>
<!--            <li class=""><a data-toggle="tab" href="#membre_evalu">Membre du comité d'évaluation</a></li>-->
            <li class=""><a data-toggle="tab" href="#dossier_candataDPF">Dossier du soumissionnaire</a></li>
                  <li class=""><a data-toggle="tab" href="#PVDPF">PV ouverture </a></li>
             <li class=""><a data-toggle="tab" href="#tabAnalyseDPF"> Analyse </a></li>
             <li class=""><a data-toggle="tab" href="#tabPVJugementDPF">PV Jugement</a></li>
              <li class=""><a data-toggle="tab" href="#analyseComb">Analyse combinée</a></li>
          </ul>
        </div>

        <div class="widget-content tab-content">
          <div id="cojoDPF" class="tab-pane active">
            <InfoCojoDPF :macheid="macheid"></InfoCojoDPF>
          </div>
          <div id="membreDPF" class="tab-pane ">
            <MembreCojoDPF :macheid="macheid"></MembreCojoDPF>
          </div>

          <div id="dossier_candataDPF" class="tab-pane ">
            <DossierCandidatDPF :macheid="macheid"></DossierCandidatDPF>
          </div>


            <div id="PVDPF" class="tab-pane ">
              <rapportOuvertureDPF :macheid="macheid"></rapportOuvertureDPF>
            <!-- <dossier-candidat :macheid="macheid"></dossier-candidat> -->
          </div>
                <div id="tabAnalyseDPF" class="tab-pane">

                    <JugementSansFinDPF :macheid="macheid"></JugementSansFinDPF>

<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>
                <div id="tabPVJugementDPF" class="tab-pane">

                   <PvJugementDPF  :macheid="macheid"></PvJugementDPF>
                </div>

                <div id="analyseComb" class="tab-pane">

                   <analyseCombineeDP  :macheid="macheid"></analyseCombineeDP>
                </div>
           <!-- <div id="membre_evalu" class="tab-pane ">
            <membre-evalu :macheid="macheid"></membre-evalu>
          </div> -->
        </div>


      </div>


    </div>
  </div>
</div>
</template>

<script>
//import InfoCojo from "@/pages/bien_service/component/OuvertureOffre/InfoCojo";
//import MembreCojo from "@/pages/bien_service/component/OuvertureOffre/MembreCojo";


import InfoCojoDPF from "@/pages/bien_service/component/OuvertureOffre/InfoCojoDPF";
import MembreCojoDPF from "@/pages/bien_service/component/OuvertureOffre/MembreCojoDPF";
//import MembreEvalu from "@/pages/bien_service/component/OuvertureOffre/MembreEvalu";
//import DossierCandidat from "@/pages/bien_service/component/OuvertureOffre/dossier_candidat/DossierCandidat";
import DossierCandidatDPF from "@/pages/bien_service/component/OuvertureOffre/dossier_candidat/DossierCandidatDPF";
import PvJugementDPF from "@/pages/bien_service/component/Jugement/pv/PvJugementDPF";
//import DossierCandidatDPF from "@/pages/bien_service/component/DossierOffreSansOuvertureFinanciere/dossier_candidat/DossierCandidatDPF"
import rapportOuvertureDPF from '@/pages/bien_service/dossierDetailMarcheProcedureSimplifierAvecComite/dossierRappportOuverture/rapportOuvertureDPF';
import JugementSansFinDPF from "@/pages/bien_service/component/JugementSansAnalyseFinanciere/JugementSansFinDPF"
//import JugementSansFin from "@/pages/bien_service/component/JugementSansAnalyseFinanciere/JugementSansFin"

export default {
name: "OuvertureOffre",
  props:["macheid"],
  components:{
    //InfoCojo,
    //MembreCojo,
    InfoCojoDPF,
    MembreCojoDPF,
    //MembreEvalu,
   // DossierCandidat,
   DossierCandidatDPF,
    PvJugementDPF,
    //JugementSansFin,
    JugementSansFinDPF,
    rapportOuvertureDPF
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