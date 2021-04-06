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

<style lang="scss" scoped>
 .preloader{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: white;
	z-index: 9999;
    p{
		font-size: 1.5rem;
		margin-top: 1rem;
        color: red;
    }
	.logo{
        background: rgba(0,0,0,0.90);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
		// width: 12.5rem;
		// height: 12.5rem;
		// background: yellow;
		// background-repeat: no-repeat;
    }
	.circles{
		display: flex;
		margin-top: .5rem;
        .circle{
        width: 1rem;
        height: 1rem;
        margin: 0.5rem;
        background-color: red;
        border-radius: 60%;
        animation-name: scaleIn;
        animation-duration: 1s;
        transform: scale(0);
        &:nth-child(1){
            animation-delay: 1s;
        }
        &:nth-child(2){
            animation-delay: 2s
        }
        &:nth-child(3){
            animation-delay: 3s
        }
        &:nth-child(4){
            animation-delay: 4s
        }
        &:nth-child(5){
            animation-delay: 5s 
        }  
        &:nth-child(6){
            animation-delay: 6s 
        }  
       
    }
    
    }
 }
 
 .fade-enter-active, .fade-leave-active{
     transition: 1s;
    .logo{
        animation-name: scaleOut;
        animation-duration: 1s;
    }
    p{
        animation-name: scaleOut;
        animation-duration: 1s;
    }
 .fade-enter, .fade-leave-to{
     opacity: 0;
 }
 @keyframes scaleOut{
     0%{transform: scale(1);}
     100%{transform: scale(0);}
 }
 @keyframes scaleIn{
    0%{transform: scale(0);}
    100%{transform: scale(1);}
 }
}
</style>