<template>
<div>
    <div class="row container">
        <div class="col-md">

            <div class="gallery-row">
                <div class="gallery-container">
                    <lightbox :items="images"></lightbox>
                </div>
            </div>
        </div>
        <div class="col-md">derer</div>

    </div>
    <br><br>
    <!-- <div class="row container">
        <div class="col-md  vue-bg">
            <div class="row">
                <div style="font-size:25px;" class="col-sm-4 text-center">
                    03
                </div>
                <div class="col-sm-8 text-center">
                   Mardi Mars 2021
                </div>
            </div>
        </div>
        <div class="col-md  vue-bg">
            <div class="row">
                <div style="font-size:25px;" class="col-sm-4 text-center"> 05</div>
                <div class="col-sm-8 text-center">Lundi Mars 2021</div>
            </div>
        </div>
        <div  class="col-md  vue-bg">
            <div class="row">
                <div style="font-size:25px;" class="col-sm-4 text-center"> 15</div>
                <div class="col-sm-8 text-center">Lundi Mars 2021 </div>
            </div>
        </div>
        <div class="col-md  vue-bg">
            <div class="row">
                <div style="font-size:25px;" class="col-sm-4 text-center"> 10</div>
                <div class="col-sm-8 text-center">Lundi Mars 2021 </div>
            </div>
        </div>
       
    </div> -->
   
</div>
</template>
<script>
import lightbox from "./lightbox.vue";
import "./lightbox.css";

export default {
  components: {
      lightbox
  },
}
</script>
<style lang="">
  
</style>