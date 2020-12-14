<template>
    <div>
      
         <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
         <!-- {{resultatT}} % -->

      
    </div>
</template>
<script>
import {mapGetters} from "vuex";
import VueApexCharts from 'vue-apexcharts'
import { formatageSomme} from "@/Repositories/Repository";
export default {
  props:["macheid"],
     components: {
        apexchart: VueApexCharts
        },
    data(){
        return{
          marche_id:"",
             series: [{
            name: 'Taux restant',
            
            data: []
            }, {
            name: "Taux Execution",
            data: []
          }],
           chartOptions: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: true
              },
              zoom: {
                enabled: true
              }
            },
             responsive: [{
              breakpoint: 480,
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
              //type: 'datetime',
              categories: [],
            },
            legend: {
              position: 'right',
              offsetY: 40
            },
            fill: {
              opacity: 1
            }

           }

        }
    },
       created(){
        //  let ObjetRegion=this.marches.find(item => item.id==id)
        //   if(ObjetRegion){
        //     return ObjetRegion.localisation_geographie_id
        //   }
         this.testRegion()

        
    },
    mounted:{},
    computed:{
...mapGetters("bienService", ['marches',"engagements","getMandatPersonnaliserVise",
  "getterActeEffetFinanciers","getFacturePersonnaliser","avenants"]),
...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques',
      'localisations_geographiques',"getterLocalisationGeoAll","getterInfrastrucure"]),

 getRandomInt() {
      return max=>{
        return Math.floor(Math.random() * Math.floor(max));
            }
            },

   // afficher le montant de base + avenant par region

   afficherMontantDeBaseDuMarcheParRegion(){
      //let=vm;
     return id =>{
       if(id!=null && id!=""){
           let objetId = this.marches.find(item =>item.id==id)
           if(objetId){
             return objetId.localisation_geographie_id;
           }
       }
   
       
     }
  
   },
  // afficher ID acte Affect financier
  IdActeFin(){
    return id =>{
      if(id!=null && id!=""){
        const Id=this.getterActeEffetFinanciers.find(item => item.marche_id==id)
        //console.log(this.marche_id)
        if(Id) return Id.marche_id;
      }
      return null
    }
  },

   IdAvenant(){
    return id =>{
      if(id!=null && id!=""){
        const Id=this.avenants.find(item => item.marche_id==id)
        //console.log(this.marche_id)
        if(Id) return Id.marche_id;
      }
      return null
    }
  },

   IdMandatVise(){
    return id =>{
      if(id!=null && id!=""){
        const Id=this.getMandatPersonnaliserVise.find(item => item.marche_id==id)
        //console.log(this.marche_id)
        if(Id) return Id.marche_id;
      }
      return null
    }
  },

  recupererLeMontantDeBase(){
    return id =>{
      if(id!=null && id!=""){
        let answer = this.getterActeEffetFinanciers.find(item => item.marche_id==id && this.afficherMontantDeBaseDuMarcheParRegion(this.macheid)== this.afficherMontantDeBaseDuMarcheParRegion(this.IdActeFin(this.macheid)))
        if(answer) return answer.montant_act
      }
      return 0
    }
  },

  recupererMontantAvenant(){
    return id =>{
      if(id!=null && id!=""){
        let objet = this.avenants.filter(res => res.marche_id==id && this.afficherMontantDeBaseDuMarcheParRegion(res.macheid)==this.afficherMontantDeBaseDuMarcheParRegion(this.IdAvenant(this.macheid))).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0)
        if(objet) return objet.montant_avenant
      }
      return 0
    }
  },


    // calcul du montant reel
     calculDuMontantReel(){
      
    const resultat = parseFloat(this.recupererLeMontantDeBase(this.macheid)) + parseFloat(this.recupererMontantAvenant(this.macheid))

    if(resultat){
      return parseInt(resultat).toFixed(2)
    } 
    return 0
     },
     // printe all sum montant execution
     calculDuMontantExecution(){
       return id =>{
         
            return this.getMandatPersonnaliserVise.filter(item =>item.marche_id==id && this.afficherMontantDeBaseDuMarcheParRegion(this.IdMandatVise(this.macheid))).reduce((prec,cur) => parseFloat(prec)
             + parseFloat(cur.total_general), 0)  
       
       }
       
     },
     resultatT(){
       const answer= (parseFloat(this.calculDuMontantExecution(this.macheid)) /parseFloat(this.calculDuMontantReel)*100)
       if(answer){
         return parseInt(answer).toFixed(2)
       }
       return 0
     }

    

     // calcul du reste des montants de marché

    //  calculMontantReste(){
    //    const response = 100 - parseFloat(this.calculDuMontantExecution(this.macheid))
      
    //      return parseInt(response).toFixed(2)
    //  }
    

    },
    methods:{
formatageSomme,

 testRegion(){
   let  objet= this.localisations_geographiques.filter(item=>{
     if(item.structure_localisation_geographique.niveau==2 && item.longitude!=null ){
       return item
     }
   })

     if(objet.length>0){
       let vm=this;
       objet.forEach(function (value) {
          // let total=200;
         // let affichageTauxParRegion=vm.afficherMontantDeBaseDuMarcheParRegion(this.macheid)
          let montantExecute=vm.resultatT;
          let montanRestant=100 - montantExecute;

            let pour_centage_rest=montanRestant
            let pour_execu=vm.resultatT
              vm.series[0].data.push(pour_centage_rest .toFixed(2))
             // console.log(this.pour_execu)
              vm.series[1].data.push(pour_execu).toFixed(2)
              vm.chartOptions.xaxis.categories.push(value.libelle)
       })
      
     }

    }
    }

}
</script>