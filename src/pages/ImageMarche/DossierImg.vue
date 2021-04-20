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
  name: "App",
  components: {
    lightbox
  },
  // mounted(){
  //     this.$store.dispatch('getProduct')
  // },
  // computed:{
  //   images(){
  //     return this.$store.state.images;
  //   }
  //},
  data:() => {
    return {
      images: [
        "https://i.pinimg.com/236x/3f/fe/aa/3ffeaaa193ec5ee531f802a0dfc47f2b.jpg",
        "https://i.pinimg.com/236x/a3/2c/c1/a32cc16f873b2ac960e2ecaac7922e8d.jpg",
        "https://i.pinimg.com/236x/f9/c9/5c/f9c95ccef2b15e2a14db49e95fbbd480.jpg",
        "https://media.gettyimages.com/photos/arches-national-parkutahusa-picture-id643321562?k=6&m=643321562&s=612x612&w=0&h=7Zed_3gkr4TCGs6U7rsGpA1Kj8VLngFcpi-Q1PDsNUU=",
        "https://i.pinimg.com/236x/36/e1/c4/36e1c493f212e4ff1775164731647894.jpg",
        "https://i.pinimg.com/236x/ba/a3/96/baa396ffa04a7639651bb4ed28a30e98.jpg",
        "https://images.unsplash.com/photo-1618188619101-f496886c663b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1618256613388-eb325a9086b8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1618256613388-eb325a9086b8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1618248047249-9bb3341fd6b6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1618254546122-8480f0040419?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1617899615427-8ec249947f67?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1580479928902-64943157c5d1?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1604328699206-5f24c5ed8dd4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1604328699206-5f24c5ed8dd4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ]
    };
  }
};
</script>

<style>
.vue-bg{
    border: 1px solid #ddd;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
    background: rgb(69, 72, 241);
    padding: 15px;
}
.gallery-container {
  height: 604.8px;
  width: 750px;
}

.gallery-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>