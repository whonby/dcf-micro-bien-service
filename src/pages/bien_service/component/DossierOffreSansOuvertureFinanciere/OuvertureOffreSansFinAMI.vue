<template>
<div>
  <div class="row-fluid">
    <div class="span12">
      <div class="widget-box">
        <div class="widget-title">
          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#cojo">Infomation COJO</a></li>
            <li class=""><a data-toggle="tab" href="#membre">Membre COJO</a></li>
            <li class=""><a data-toggle="tab" href="#dossier_candata">Dossier du soumissionnaire</a></li>
<!--            <li class=""><a data-toggle="tab" href="#membre_evalu">Membre du comité d'évaluation</a></li>-->
            <li class=""><a data-toggle="tab" href="#PV">PV ouverture </a></li>
             <li class=""><a data-toggle="tab" href="#tabAnalyseAMI"> Analyse </a></li>
             <li class=""><a data-toggle="tab" href="#tabPVJugementAMI">PV Jugement</a></li>
            
          </ul>
        </div>

        <div class="widget-content tab-content">
          <div id="cojo" class="tab-pane active">
            <info-cojo :macheid="macheid"></info-cojo>
          </div>
          <div id="membre" class="tab-pane ">
            <membre-cojo :macheid="macheid"></membre-cojo>
          </div>
            <div id="dossier_candata" class="tab-pane ">
            <dossier-candidat :macheid="macheid"></dossier-candidat>
          </div>

          <div id="PV" class="tab-pane ">
              <rapportOuverture :macheid="macheid"></rapportOuverture>
            <!-- <dossier-candidat :macheid="macheid"></dossier-candidat> -->
          </div>
                <div id="tabAnalyseAMI" class="tab-pane">

                    <JugementSansFin :macheid="macheid"></JugementSansFin>

<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>
                <div id="tabPVJugementAMI" class="tab-pane">

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
import InfoCojo from "@/pages/bien_service/component/OuvertureOffre/InfoCojo";
import MembreCojo from "@/pages/bien_service/component/OuvertureOffre/MembreCojo";
import MembreEvalu from "@/pages/bien_service/component/OuvertureOffre/MembreEvalu";
//import preSelectionnerEntreprise from "@/pages/bien_service/component/DossierPre_selection/preSelectionnerEntreprise"
import rapportOuverture from '@/pages/bien_service/dossierDetailMarcheProcedureSimplifierAvecComite/dossierRappportOuverture/rapportOuverture';
import JugementSansFin from "@/pages/bien_service/component/JugementSansAnalyseFinanciere/JugementSansFin"
import DossierCandidat from "@/pages/bien_service/component/OuvertureOffre/dossier_candidat/DossierCandidat";
import PvJugement from "@/pages/bien_service/component/Jugement/pv/PvJugement";

export default {
name: "OuvertureOffre",
  props:["macheid"],
  components:{
    InfoCojo,
    MembreCojo,
    MembreEvalu,
    DossierCandidat,
    rapportOuverture,
    JugementSansFin,
    PvJugement
   // preSelectionnerEntreprise
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