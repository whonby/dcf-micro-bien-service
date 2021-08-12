<template>
    <div>
        <transition name="fade">
            <div v-if="show" class="preloader">
                <div class="logo"></div>
                <p>Chargement</p>
                <div class="circles">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div>
        </transition>

    </div>
</template>
<script>
export default {
    name:'preloader',
    data(){
        return {
            show:true
        }
    },
    created(){
        this.showToggle()
    },
    methods:{
        showToggle(){
            setTimeout(() =>{
                this.show = false
            }, 7000)
        }
    }
}
</script>


 