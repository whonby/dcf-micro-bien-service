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
            
          </ul>
        </div>

        <div class="widget-content tab-content">
          <div id="cojo" class="tab-pane active">
            <InfoCojo :macheid="macheid"></InfoCojo>
          </div>
          <div id="membre" class="tab-pane ">
            <MembreCojo :macheid="macheid"></MembreCojo>
          </div>

          <div id="dossier_candata" class="tab-pane ">
            <DossierCandidat :macheid="macheid"></DossierCandidat>
          </div>
           <div id="membre_evalu" class="tab-pane ">
            <MembreEvalu :macheid="macheid"></MembreEvalu>
          </div>
        </div>


      </div>


    </div>
  </div>
</div>
</template>

<script>
import InfoCojo from "./InfoCojo";
import MembreCojo from "./MembreCojo";
import MembreEvalu from "./MembreEvalu";
import DossierCandidat from "./dossier_candidat/DossierCandidat";
export default {
name: "OuvertureOffre",
  props:["macheid"],
  components:{
    InfoCojo,
    MembreCojo,
    MembreEvalu,
    DossierCandidat
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