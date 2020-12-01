<template>
    <div>
      <div class="span5">
         <apexchart type="line" width="300"  height="350" :options="chartOptions" :series="series" ></apexchart>
      </div>
       <div class="span5">

          <apexchart type="bar" height="350" :options="chartOptionse" :series="diagramme"> </apexchart>
       </div>
        
      
{{afficherMontantExecuter}}

    </div>
    
    
</template>
<script>
import {mapGetters} from "vuex";
import VueApexCharts from 'vue-apexcharts'
import { formatageSomme} from "@/Repositories/Repository";
export default {

  props:["macheid"] ,

     components: {
        apexchart: VueApexCharts
        },
    data(){
        return{

    

         series: [{
              name: "Montant Executé",
              data: []
          }],
         // montantP: [],
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
              curve: 'straight',
              
            },
            
              title: {
              text: ' la courbe d\'évolution du marché',
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
              },

              diagramme: [],
             chartOptionse: {
            chart: {
              type: 'bar',
              height: 350,
               width: 20,
                toolbar: {
                    show: true
                },
              
            },
       responsive: [{
                breakpoint: 40,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
      plotOptions: {
              bar: {
                horizontal: false,
              },
            },
         xaxis: {
         
              categories: ['Montant Prevu', 'Montant Approuvé', 'Montant Executé'],
              labels: {
                rotate: -90
              }
            },
        legend: {
              position: 'right',
              offsetY: 50
            },
            fill: {
              opacity: 1
            }
            ,
             dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
        // tooltip: {
        //   y: {
        //     formatter: function (val) {
        //       return "F " + val + " Infrastructure"
        //     }
        //   }
        // } 
      },
           marche_id:"",     

        }
    },
    created(){
let marcheOjeb=this.marches.find(item=>item.id==this.macheid);
  let objetActeFinancier=this.getterActeEffetFinanciers.find(item =>item.marche_id==this.macheid);
//console.log(this.getterActeEffetFinanciers)
       if(marcheOjeb!=undefined || objetActeFinancier!=undefined){
 
  let objetPrevision= { name: 'Montant previsionnel',
            data: [marcheOjeb.montant_marche]
          }
let objetMontantAprouve= {
            name: 'Montant approuvé',
            data: [objetActeFinancier.montant_act]
          }

          this.diagramme.push(objetPrevision)
          this.diagramme.push(objetMontantAprouve)
        //console.log("0k ok ok")
       }
        
    },
    computed:{
  ...mapGetters("bienService", ['marches',"engagements","getMandatPersonnaliserVise",
  "getterActeEffetFinanciers","getFacturePersonnaliser"]),
   ...mapGetters("uniteadministrative", [
            "acteCreations",
            "decomptefactures",
            "uniteAdministratives",
            "getterBudgeCharge"
        ]),
  // fonction pour faire un test aleatoire//      
//  getRandomInt() {
//       return max=>{
//         return Math.floor(Math.random() * Math.floor(max));
//       }},
// afficherIdFacture(){
//   return id =>{
//     if(id!=null && id!=""){
//       let objetAnswer=this.decomptefactures.find(item => item.id==id)
//       console.log(this.decomptefactures)
//       if(objetAnswer) return objetAnswer.facture_id;
//     }
//     return null
//   }
// },
// afficherMontantFacture(){
//   return id =>{
//     if(id!=null && id!=""){
//       var reponse = this.getFacturePersonnaliser.find(item =>item.id==id)
//      //console.log(this.getFacturePersonnaliser)
//       if(reponse){
//         return reponse.prix_propose_ht
//       }
//       return null
//     }
//   }
// },
  afficherMontantExecuter(){
  let montantEx=0;
     let vM=this
     /*vM.series[0].data.push(vM.getRandomInt(1500))
      vM.series[0].data.push(vM.getRandomInt(15000))
       vM.series[0].data.push(vM.getRandomInt(150000))*/
  vM.decomptefactures.filter(item=>item.marche_id==vM.macheid).forEach(function(value) {
 
   vM.series[0].data.push(value.montantmarche)
 console.log("............")
    montantEx=montantEx+value.montantmarche
vM.chartOptions.xaxis.categories.push(value.numero_decompte)

  });
console.log(montantEx)
   let objetExecute= { name: 'Montant Executé',
            data: [vM.montantEx]
          }

  vM.diagramme.push(objetExecute)
  //console.log(this.diagramme)
     return null
  }



//   series(){
//       return id =>{
          
//              return this.marches.find(item => item.id==id)
          
//       }
//   }
    },
    methods:{
 formatageSomme:formatageSomme,
    }
}
</script>

<style scoped>

</style>