<template>
    <div>
       <div class="container h-100">
           <div class="row h-100">
               <div class="col-md-3 h-100 d-flex justify-content-center align-items-center">
                   
                   <span style="font-size:20px;">
                      <router-link to="/dossier-image-ua">
                      <img :src="url" alt="">
                      <br>
                        Dossier image par ministère
                      </router-link>
                   </span>
               </div>
              
           </div>
       </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJi8L-m3hgnw8xbMY93159m81pP9bvjWLINQ&usqp=CAU'
        }
    },
}
</script>
<style lang="css">
    
</style>