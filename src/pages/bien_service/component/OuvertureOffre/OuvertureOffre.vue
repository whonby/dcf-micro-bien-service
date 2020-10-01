<template>
<div>
  <div class="row-fluid">
    <div class="span12">
      <div class="widget-box">
        <div class="widget-title">
          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#cojo">Infomation COJO</a></li>
            <li class=""><a data-toggle="tab" href="#membre">Membre COJO</a></li>
            <li class=""><a data-toggle="tab" href="#dossier_candata">Dossier Candidat</a></li>
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
        </div>


      </div>


    </div>
  </div>
</div>
</template>

<script>
import InfoCojo from "@/pages/bien_service/component/OuvertureOffre/InfoCojo";
import MembreCojo from "@/pages/bien_service/component/OuvertureOffre/MembreCojo";
import DossierCandidat from "@/pages/bien_service/component/OuvertureOffre/dossier_candidat/DossierCandidat";
export default {
name: "OuvertureOffre",
  props:["macheid"],
  components:{
    InfoCojo,
    MembreCojo,
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