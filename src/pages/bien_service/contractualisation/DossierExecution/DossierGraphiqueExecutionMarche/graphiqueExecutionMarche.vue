<template>
    <div>
        
        <apexchart type="line"  height="350" :options="chartOptions" :series="afficherMontantExecuter"></apexchart>
      
    </div>
</template>
<script>
import {mapGetters} from "vuex";
import VueApexCharts from 'vue-apexcharts'
export default {
     components: {
        apexchart: VueApexCharts
        },
    data(){
        return{
         series: [{
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }],
            chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
             dataLabels: {
              enabled: false
            },
              stroke: {
              curve: 'straight'
            },
              title: {
              text: 'Evolution du marché',
              align: 'left'
            },
              
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            
            xaxis: {
              categories: [],
            }
          //  labels: series.monthDataSeries1.dates,
            // xaxis: {
            //   type: 'datetime',
            // }
              }

        }
    },
    created(){

    },
    computed:{
  ...mapGetters("bienService", ['marches',"engagements","getMandatPersonnaliserVise"]),

  afficherMontantExecuter(){
      return id =>{
          if(id!=null && id!=""){
              let anwser = this.getMandatPersonnaliserVise.find(item => item.id==id)
              if(anwser) return anwser.total_general;
          }
          return 0
      }
  }

//   series(){
//       return id =>{
          
//              return this.marches.find(item => item.id==id)
          
//       }
//   }
    },
    methods:{

    }
}
</script>

<style scoped>

</style>