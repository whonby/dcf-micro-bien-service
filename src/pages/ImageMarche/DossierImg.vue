<template>
  <div>
    <div class="gallery-row">
      <div class="gallery-container">
         <!-- <div class="container">
              <div class="row">
                <div class="col-md-6">
                </div>
                <div class="col-md-6">
                    <h1>salut les potes</h1>

                </div>
            </div>
         </div> -->
             <lightbox :items="images"></lightbox>
     
      </div>
    </div>
        <br> <br> <br> <br>
       <div class="container mt-5">
        <div class="row">
          <div class="col-md">
           <h2 class="text-center">15/Janvier/2021</h2>
          </div>
          <div class="col-md">
            <h2 class="text-center">10/Mars/2021</h2>
          </div>
          <div style="background-color:#fff; color:#000;" class="col-md">
            <h2 class="text-center">05/Mars/2021</h2>
          </div>
          <div class="col-md">
            <h2 class="text-center">03/Fevrier/2021</h2>
          </div>
        </div>
      </div>
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
        "https://cdn.pixabay.com/photo/2021/01/21/17/58/herbstastern-5938056__480.jpg",
        "https://cdn.pixabay.com/photo/2021/03/22/18/09/fallow-deer-6115404__480.jpg",
        "https://cdn.pixabay.com/photo/2019/03/30/10/40/italy-4090933__480.jpg",
        "https://cdn.pixabay.com/photo/2020/08/10/11/22/mountains-5477557__480.jpg",
        "https://cdn.pixabay.com/photo/2021/04/07/05/56/woman-6158131__480.jpg",
        "https://cdn.pixabay.com/photo/2021/04/01/14/50/lily-6142496__480.jpg",
        "https://cdn.pixabay.com/photo/2020/11/05/19/29/woman-5716038__480.jpg",
        "https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790__480.jpg",
        "https://cdn.pixabay.com/photo/2021/03/21/13/36/boy-6112145__480.jpg",
        "https://images.unsplash.com/photo-1604328699206-5f24c5ed8dd4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ]
    };
  }
};
</script>

<style>
.gallery-container {
  height: 604.8px;
  width: 750px;
}

.gallery-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.col-md{
  height: 80px;
  color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  background: rgb(44, 57, 235);
  padding: 10px;
}
.col-sm{
  display: inline-block;
  height: 10px;
  color: #fff;
  
}
.vue-bg{
    background-color: blue;
    padding-top: 10px;
    width: 100%;
    height: 100px;
}
</style>