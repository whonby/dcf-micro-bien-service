<template>

     <component :is="layout">
          <transition name="fade" mode="out-in">
          <router-view></router-view>
          </transition>
     </component>

   
</template>

<script>

const default_layout = "default"
export default {
 
  computed:{
    layout(){
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
  },

}
</script>
<style>
     .router-link-active {
          color: red;
     }

     .fade-enter {
          opacity: 0;
     }

     .fade-enter-active {
          transition: opacity 2s ease;
     }

     .fade-leave {}

     .fade-leave-active {
          transition: opacity 2s ease;
          opacity: 0;
     }
</style>
