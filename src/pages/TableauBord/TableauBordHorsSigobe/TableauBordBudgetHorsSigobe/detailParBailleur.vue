<template>
    <div>
 <table class="table table-bordered table-striped" id="titre" ref="table"  summary="lorem ipsum sit amet" rules="groups" frame="hsides" border="2">

 <tr>
             <th style="width:10%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px"  colspan="1"> </th>
          
          <th style="width:10%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px"  colspan="3">Planification (Avant contractualisation) </th> 
         <th style="width:15%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px" colspan="2">Marchés en cours de contractualisation </th>
         <th style="width:15%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px" colspan="2">Marchés attribués </th>
          <th style="width:15%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px"  colspan="4">Marchés en cours d'exécution </th> 
         <th style="width:15%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px" colspan="3">Marchés en souffrance</th>
         <th style="width:15%;margin-left:25px;background-color: #f55e25 !important;font-weight: bold;color:#000;font-size: 14px" colspan="3">Marchés résiliés </th>

           
       </tr>
           <tr>
              
                       
                       

         
          <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Source de financement </th> 
         <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>
                      
         <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Montant (FCFA) </th>

         <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>
          <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Montant (FCFA)</th>

           <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>
          <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Montant (FCFA)</th>


                      <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>

                      <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Montant total marchés (FCFA) </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Montants exécutés (FCFA) </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Reste à exécuter </th>

                      <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Reste à exécuter </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1"> Taux</th>

               
                      <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Nombre </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1">Reste à exécuter </th>

                       <th style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;" colspan="1"> Taux</th>
           
       </tr>


 <tbody>
           <tr v-for="type1 in  partition(groupeParSourceFinancement, size)[page]" :key="type1">

               
        <td   style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{afficherLibelleTypeFinancement(idTypeFinancement(type1[0].source_financement))}}</td>
         <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherPart(type1[0].type_financement)}}</td>
         <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(afficherNombreMarchePlanifierMontantDons(type1[0].type_financement)))}}</td>

         <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherEncourDeContratualisation(type1[0].type_financement)}}</td>
         <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(afficherNombreMarcheEncourDeContratualisation(type1[0].type_financement)))}}</td>
         
          <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherAttribuer(type1[0].type_financement)}}</td>
          <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(afficherMontantMarcherAttribuer(type1[0].type_financement)))}}</td>
          <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherEncourExecution(type1[0].type_financement)}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(afficherMontantTotal(type1[0].type_financement)))}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(marcheEncourExecutionMontantDons(type1[0].type_financement)))}}</td>
            <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(resteAexcuter(type1[0].type_financement)))}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherEnSouffrance(type1[0].type_financement)}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(resteAexcuterMarcheSouffrance(type1[0].type_financement)))}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{afficherTauxMarcheSouffre(type1[0].type_financement)}} %</td>

           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{NombreMarcherResilier(type1[0].type_financement)}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{formatageSommeSansFCFA(parseFloat(resteAexcuterMarcheResilier(type1[0].type_financement)))}}</td>
           <td  style="width:10%;font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #fbb203 !important;">{{afficherTauxMarcheResilier(type1[0].type_financement)}} %</td>

           </tr>
 </tbody>










 </table>




    </div>
</template>
<script>
 //import VueApexCharts from 'vue-apexcharts'
import {mapGetters, mapActions} from "vuex"
import { partition } from "@/Repositories/Repository";
import {formatageSommeSansFCFA} from "../../../../Repositories/Repository"
export default {
  components:{
     //apexchart: VueApexCharts,
  },
  props:["macheid"],
    data() {
        return{
           page: 0,
      size:3,
      active_el: 0,

      detail_marche:"",

            //   series: [{
            // name: 'BAD',

            // data: []
            //   }],
          //      chartOptions: {
          //   chart: {
          //     type: 'pie',
          //    width: 380,
          //     stacked: true,
          //     toolbar: {
          //       show: true
          //     },
          //     zoom: {
          //       enabled: true
          //     }
          //   },
          //    responsive: [{
          //     breakpoint: 480,
          //     options: {
          //       legend: {
          //         position: 'bottom',
          //         offsetX: -10,
          //         offsetY: 0
          //       }
          //     }
          //   }],
          //    plotOptions: {
          //     bar: {
          //       horizontal: false,
          //     },
          //   },
          //   xaxis: {
          //     //type: 'datetime',
          //     categories: [],
          //   },
          //   legend: {
          //     position: 'bottom',
          //     offsetY: 40
          //   },
          //   fill: {
          //     opacity: 1
          //   }

          //  }
           
        }
        
    },

   created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.groupeParSourceFinancement.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
    computed:{
   ... mapGetters("bienService",["marches","getActeEffetFinancierPersonnaliser","avenants",
   "gettersgestionOrdrePaiement","groupeParSourceFinancement"]),
    ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques','getterInfrastrucure']),
  ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,


  // liste(){
  //   return this.groupeParSourceFinancement.filter(item=> item[0].type_financement!=14)
  // },

  // dataContrac(){
  //   let vm=this;
  //   if(this.datacontactualisation.length>0){
  //     vm.datacontactualisation=[];
  //   }else{
  //     vm.datacontactualisation.push()
  //   }
  // },


   afficherLibelleSourFinacement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id==id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

  afficherLibelleTypeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.types_financements.find(qtreel => qtreel.id==id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },

  idTypeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.source_financement==id);

      if (qtereel) {
        return qtereel.type_financement;
      }
      return 0
        }
      };
    },

 afficherMontantTtcDeActeDons() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.filter(qtreel =>this.afficherIdMarch(qtreel.marche_id)==id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0);
    
        }
      };
    },



montantAvenantMarcheResilier(){
     return id => {
        if (id != null && id != "") {
          return this.avenants.filter(qtreel =>this.afficherIdResilier(qtreel.marche_id) == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ht), 0);
   
        }
      };
   },

     montantAvenantMarcheSouffrance(){
     return id => {
        if (id != null && id != "") {
          return this.avenants.filter(qtreel =>this.afficherIdMarchSouffrance(qtreel.marche_id) == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ht), 0);
   
        }
      };
   },


     montantAvenant(){
     return id => {
        if (id != null && id != "") {
          return this.avenants.filter(qtreel =>this.afficherIdMarch(qtreel.marche_id) == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ht), 0);
   
        }
      };
   },

 
   montantMarcheTotalEmprunt(){
      let objet= parseFloat(this.afficherMontantTtcDeActeEmprunt(this.macheid))+ parseFloat(this.montantAvenant(this.macheid))
        if(isNaN(objet)){
          return 0
        }
        return objet
   },
    NombreMarcheEnCourExecutionDon(){
      return this.gettersgestionOrdrePaiement.filter(item =>item.type_financement_id==13).length;
  },

    NombreMarcheEnCourExecutionEmprut(){
      return this.gettersgestionOrdrePaiement.filter(item =>item.type_financement_id==15).length;
  },

    NombreMarcherEncourExecution() {
      return id => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.type_financement_id==id && qtreel.marche_id!=null && qtreel.exercice==this.anneeBugetaire).length;
        }
      };
    },


 

  

     marcheEncourExecutionMontantDons(){
       return id=>{
         if(id!="" && id!=null){
        return this.gettersgestionOrdrePaiement.filter(item => this.afficherIdMarch(item.marche_id)==id && 
  item.type_ordre_paiement==1 && item.decision_cf==8 || item.type_ordre_paiement==4 && item.decision_cf==9
  || item.type_ordre_paiement==4 && item.decision_cf==8 || item.type_ordre_paiement==4 && item.decision_cf==9
  
  ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ordre_paiement), 0);
         }
       }
  
   },

   

   // affichage des marches en cours de contratualisation


   

  


   // afficher le montant du marché attribuer
  

  


 anneeBugetaire(){
     const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.encours == 1 );
     if(anneBudget){
       return anneBudget.annee;
     }
     return 0
   },

     NombreMarcherPart() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.type_financement==id && qtreel.attribue==0 && qtreel.exo_id==this.anneeBugetaire).length;
        }
      };
    },

     NombreMarcherEncourDeContratualisation() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.type_financement==id && qtreel.attribue==1 && qtreel.exo_id==this.anneeBugetaire).length;
        }
      };
    },

     NombreMarcherAttribuer() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.type_financement==id && qtreel.attribue==2 && qtreel.exo_id==this.anneeBugetaire).length;
        }
      };
    },

     NombreMarcherEnSouffrance() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.type_financement==id && qtreel.attribue==7 && qtreel.exo_id==this.anneeBugetaire).length;
        }
      };
    },

   

   

      NombreMarcherResilier() {
      return id => {
        if (id != null && id != "") {
          return this.marches.filter(qtreel => qtreel.type_financement==id && qtreel.attribue==3 && qtreel.exo_id==this.anneeBugetaire).length;
        }
      };
    },

 afficherNombreMarcheEncourDeContratualisation(){
      return id=>{
        if(id!="" && id!=null){
         return this.marches.filter(item => item.type_financement==id && item.exo_id==this.anneeBugetaire &&
         item.attribue==1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0);
        }
      }
 
   },

   



 afficherNombreMarchePlanifierMontantDons(){
      return id=>{
        if(id!="" && id!=null){
         return this.marches.filter(item => item.type_financement==id && item.exo_id==this.anneeBugetaire &&
         item.attribue==0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0);
        }
      }
 
   },
    
 

 afficherIdResilier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id==id && qtreel.attribue==3 && qtreel.exo_id==this.anneeBugetaire);

      if (qtereel) {
        return qtereel.type_financement;
      }
      return 0
        }
      };
    },

    afficherIdMarch() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id==id && qtreel.attribue==2 && qtreel.exo_id==this.anneeBugetaire);

      if (qtereel) {
        return qtereel.type_financement;
      }
      return 0
        }
      };
    },

     afficherIdMarchSouffrance() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id==id && qtreel.attribue==7 && qtreel.exo_id==this.anneeBugetaire);

      if (qtereel) {
        return qtereel.type_financement;
      }
      return 0
        }
      };
    },

    
      afficherMontantMarcherAttribuerSouffrance() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.filter(qtreel =>this.afficherIdMarchSouffrance(qtreel.marche_id)==id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0);
        }
      };
    },

     afficherMontantMarcherResilier() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.filter(qtreel =>this.afficherIdResilier(qtreel.marche_id)==id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0);
        }
      };
    },

   

      afficherMontantMarcherAttribuer() {
      return id => {
        if (id != null && id != "") {
           return this.getActeEffetFinancierPersonnaliser.filter(qtreel =>this.afficherIdMarch(qtreel.marche_id)==id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0);
        }
      };
    },

    
 
    },
    methods:{
    ...mapActions("bienService",[""]),




    partition: partition,

    getDataPaginate(index) {
      this.active_el = index;
      this.page = index;
    },
    precedent() {
      this.active_el--;
      this.page--;
    },
    suivant() {
      this.active_el++;
      this.page++;
    },
    
    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

     afficherTauxMarcheSouffre(id){
      return (this.NombreMarcherEnSouffrance(id) * parseFloat(this.resteAexcuterMarcheSouffrance(id))) /100;
    },

     afficherMontantTotal(id){
    return parseFloat(this.afficherMontantMarcherAttribuer(id)) + parseFloat(this.montantAvenant(id))
  },

  afficherMontantTotalMarcheSouffrance(id){
    return parseFloat(this.afficherMontantMarcherAttribuerSouffrance(id) + parseFloat(this.montantAvenantMarcheSouffrance(id)) )
  },

resteAexcuterMarcheSouffrance(id){
  return parseFloat(this.afficherMontantTotalMarcheSouffrance(id) - parseFloat(this.marcheEncourExecutionMontantDons(id)))
},

  resteAexcuter(id){
 return parseFloat(this.afficherMontantTotal(id)) - parseFloat(this.marcheEncourExecutionMontantDons(id))
  },

  afficherMotantTotalMarcherResilier(id){
   return parseFloat(this.montantAvenantMarcheResilier(id) + parseFloat(this.montantAvenantMarcheResilier(id)))
  },

  resteAexcuterMarcheResilier(id){
  return parseFloat(this.afficherMotantTotalMarcherResilier(id) - parseFloat(this.marcheEncourExecutionMontantDons(id)))
  },


  afficherTauxMarcheResilier(id){
    return (this.NombreMarcherResilier(id) * parseFloat(this.resteAexcuterMarcheResilier(id)))/ 100
  },

    formatageSommeSansFCFA:formatageSommeSansFCFA , 


// calcul des differents taux avec les camenber 
//  testRegion(){
//    let  objet= this.groupeParSourceFinancement.filter(item=>{
//      if(item.structure_localisation_geographique.niveau==2 && item.longitude!=null){
//        return item
//      }
//    })

//      if(objet.length>0){
//        let vm=this;
//        objet.forEach(function (value) {
//           // let total=200;
//          // let affichageTauxParRegion=vm.afficherMontantDeBaseDuMarcheParRegion(this.macheid)
//           let montantExecute=vm.resultatT;
//           let montanRestant=100 - montantExecute;

//             let pour_centage_rest=montanRestant
//             let pour_execu=vm.resultatT
//               vm.series[0].data.push(pour_centage_rest .toFixed(2))
//              // console.log(this.pour_execu)
//               vm.series[1].data.push(pour_execu).toFixed(2)
//               vm.chartOptions.xaxis.categories.push(value.libelle)
//        })
      
//      }

//     }


    }
}
</script>