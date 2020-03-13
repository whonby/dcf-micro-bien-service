<template>
    <div class="progress progress-striped">

            <div class="bar bar-success" :style="{width: getProgress}">{{getProgress}}</div>

    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        props:{
            progress:{
                type:Number,
                default:0,
            }
        },
        computed:{
            getProgress(){

                return Math.round(this.progress) + "%"
            }
        }
    }
</script>

<style scoped>

</style>
