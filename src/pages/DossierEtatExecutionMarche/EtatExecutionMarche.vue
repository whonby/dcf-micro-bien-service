<template>
  <div>
    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div>
    <br />

    <div class="widget-content nopadding" id="printpdf">
      <table
        class="table table-bordered table-striped html2pdf__page-break"
        id="app1"
      >
        <tr>
          <td style="text-align: center">
            <p>
              MINISTERE DU BUDGET <br />
              ------------------------- <br />
              DIRECTION DU CONTRÔLE FINANCIER <br />
              -------------------------
            </p>
            <img :src="AfficheLogODCF" />
          </td>
          <td style="text-align: center">
            <img :src="AfficheAmoirie" />
          </td>
         
          <td style="text-align: center">
            <p>
              REPUBLIQUE DE CÔTE D'IVOIRE <br />
              Union-Discipline-Travail <br />
              -------------------------
            </p>
          </td>
        </tr>
      </table>
     
     <table
        class="table table-bordered table-striped html2pdf__page-break"
        id="app1" v-if="macheid"
      >
        <tr>
          <td style="text-align: center">
            <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
       
      >
      
      
      </h2>
      
            
          </td>
         
         
          <td style="text-align: center">
            
              <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
       
      >
        ETAT D'EXECUTION DES MARCHES
      
      </h2>
            
          </td>
        </tr>
      </table>

      
    

        <table class="table table-bordered table-striped" id="titre">
                <thead>
                   <tr style="background-color: green;color: #FFFFFF;">
    <td style="width:50%;text-align:center">Nom de l'Entreprise: {{afficherIDUA(375)}}</td> 
    <td style="width:50%;text-align:center"> N° de Marché /Contrat  : {{taille}}</td>
     <!-- <td style="width:12%;text-align:center">SOURCE DE FINANCEMENT</td>
     <td style="width:12%;text-align:center">TOTAL(FINANCEMENT)</td>
    <td style="width:12%;text-align:center">EXECUTE</td>
     <td style="width:12%;text-align:center">DISPONIBLE</td> -->
      <!-- <td style="width:12%;text-align:center">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%;text-align:center">TOTAL</th> -->
 </tr>
 </thead>
 <tbody>
                    <tr>
    <td height="10px" rowspan="" style="text-align:center;">PERSONNELS</td>
    <td height="10px">CONTREPARTIE  </td>
     <!-- <td style="width:12%">ETAT</td> -->
     <!-- <td height="10px" style="text-align:center;font-size:12px"></td>
   <td height="10px" style="text-align:center;font-size:12px"></td>
     <td height="10px" style="text-align:center;font-size:12px"></td> -->
      
 </tr>
           
           
                    <tr>
    <th height="20px" colspan="2" style="color: #000000;font-size:14px" title="SOUS-TOTAL PERSONNELS">S/T PERSONNELS</th>
    
     <!-- <td height="10px"></td>
     <td height="10px" style="text-align:center;background-color: orange;color: #000000;font-size:12px"></td>
     <td height="10px" style="text-align:center;background-color: orange;color: #000000;font-size:12px"></td>
     <td height="10px" style="text-align:center;background-color: orange;color: #000000;font-size:12px"></td> -->
      <!-- <td height="20px">14</td>
      <th height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">01</th> -->
 </tr>                
   <tr>
   <td   rowspan="3" style="text-align:center;width:12%">BIENS ET SERVICES</td>
   <td style="width:12%" > CONTREPARTIE </td>
    <!-- <td style="width:12%" >ETAT</td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td> -->
<!--     
     <td style="width:12%">96</td>
     <th style="width:12%;text-align:center;background-color: orange;color: #FFFFFF;font-size:14px">56</th> -->
</tr>
                   <tr>
   
   <td height="20px">DON  </td>
    <!-- <td height="20px"></td>
    <td height="20px" style="text-align:center;"></td>
    <td height="20px" style="text-align:center;"></td>
   <td  height="20px" style="text-align:center;"></td> -->
<!--     
     <td height="20px">45</td>
     <th height="20px">12</th> -->
</tr>
                   <tr>
   
   <td height="20px">EMPRUNT  </td>
    <!-- <td style="width:12%"></td>
     <td height="20px" style="text-align:center;"></td>
    
    <td style="text-align:center;height:20%"></td>
      <td  style="text-align:center;height:20%"></td> -->
    
    <!-- <td height="20px">03</td>
     <th height="20px">78</th> -->
</tr>
                   <tr>
   <th height="20px" colspan="2" style="color: #000000;font-size:14px" title="SOUS-TOTAL BIENS ET SERVICES">S/T BIENS ET SERVICES</th>
   
    <!-- <td height="20px"></td>
    <td height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px"></td>
     <td height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px"></td>
     <td height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px"></td> -->
                   </tr>   
                   <tr>
   <td  rowspan="3" style="text-align:center;width:10%">TRANSFERTS </td>
   <td style="width:12%"> CONTREPARTIE </td>
    <!-- <td style="width:12%">ETAT</td>
  
    <td  style="text-align:center;width:12%"></td>
    <td style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td> -->
     <!-- <td style="width:12%">1004</td>
     <th style="width:12%">1005</th> -->
</tr>
                   <tr>
   
   <td height="20px">DON  </td>
     
    <!-- <td height="20px"></td>
    <td height="20px" style="text-align:center"></td>
  <td style="text-align:center;height:20%"></td>
   <td  style="text-align:center;height:20%"></td> -->
     <!-- <td height="20px"></td>
     <th height="20px"></th> -->
</tr>
                   <tr>
  
   <td height="20px">EMPRUNT  </td>
   
    <!-- <td height="20px"></td>
     <td height="20px" style="text-align:center"></td>
   <td height="20px" style="text-align:center;"></td>
    <td height="20px" style="text-align:center;"></td> -->
    <!-- <td height="20px"></td>
     <th height="20px"></th> -->
</tr>



                   <tr>
   <th height="20px" colspan="2" style="color: #000000;font-size:14px" title="SOUS-TOTAL TRANSFERTS">S/T TRANSFERTS  </th>
   
    <!-- <td height="20px"></td>
   <td height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px"></td>
     <td height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px"></td>
     <td height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px"></td> -->
    
     <!-- <td height="20px">23</td>
     <th height="20px"></th> -->
</tr> 

                   <tr>
   <td  rowspan="3" style="text-align:center;width:10%">INVESTISSEMENTS </td>
   <td style="width:12%"> CONTREPARTIE </td>
    <!-- <td style="width:12%">ETAT</td>
  
    <td  style="text-align:center;width:12%"></td>
    <td style="text-align:center;width:12%"></td>
    <td  style="text-align:center;width:12%"></td> -->
     <!-- <td style="width:12%">1004</td>
     <th style="width:12%">1005</th> -->
</tr>
                   <tr>
   
   <td height="20px">DON  </td>
     
    <!-- <td height="20px"></td>
    <td height="20px" style="text-align:center"></td>
  <td style="text-align:center;height:20%"></td>
   <td  style="text-align:center;height:20%"></td> -->
     <!-- <td height="20px"></td>
     <th height="20px"></th> -->
</tr>
                   <tr>
  
   <td height="20px">EMPRUNT  </td>
   
    <!-- <td height="20px"></td>
     <td height="20px" style="text-align:center"></td>
   <td height="20px" style="text-align:center;"></td>
    <td height="20px" style="text-align:center;"></td> -->
    <!-- <td height="20px"></td>
     <th height="20px"></th> -->
</tr>



                   <tr>
   <th height="20px" colspan="2" style="color: #000000;font-size:14px" title="SOUS-TOTAL INVESTISSEMENTS">S/T INVESTISSEMENTS  </th>
   
    <!-- <td height="20px"></td>
   <td height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px"></td>
     <td height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px"></td>
     <td height="20px" style="text-align:center;background-color: orange;color: #FFFFFF;font-size:14px"></td> -->
    
     <!-- <td height="20px">23</td>
     <th height="20px"></th> -->
</tr> 









  <tr>
   <th style="width:10%;font-size:14px;font-weight: bold;">TOTAL</th>
   <td style="width:12%"> CONTREPARTIE </td>
    <!-- <td style="width:12%">ETAT</td>
    <td width="12%" style="text-align:center"></td>
   <td width="12%" style="text-align:center"></td>
     <td width="12%" style="text-align:center"></td> -->
     <!-- <td style="width:12%">0231</td>
     <th style="width:12%">7895</th> -->
</tr>
                   <tr>
   <th height="20px"></th>
   <!-- <td height="20px">DON  </td>
    <td height="20px"></td>
    <td height="20px" style="text-align:center"></td>
    <td height="20px" style="text-align:center"></td>
     <td height="20px" style="text-align:center"></td> -->
  
     <!-- <td height="20px">1233</td>
     <th height="20px"></th> --> 
</tr>
                   <tr>
   <th height="20px"></th>
   <td height="20px">EMPRUNT  </td> 
    <!-- <td height="20px"></td>
     <td height="20px" style="text-align:center"></td>
   <td height="20px" style="text-align:center"></td>
     <td height="20px" style="text-align:center"></td> -->
  
 
    <!-- <td height="20px">000055</td>
     <th height="20px">00004</th> -->
</tr>









                   <tr>
   <th height="20px" colspan="2" style="color: #000000;font-size:14px">TOTAL GENERAL </th>
   
    <!-- <td height="20px"></td>
    <td height="20px" style="text-align:center;background-color: green;color: #FFFFFF;font-size:14px"></td>
    <td height="20px" style="text-align:center;background-color: green;color: #FFFFFF;font-size:14px"></td>
     <td height="20px" style="text-align:center;background-color: green;color: #FFFFFF;font-size:14px"></td> -->
     <!-- <td height="20px">986</td>
     <th height="20px">78452</th> -->
</tr>                                       
                  </tbody>  
              </table>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
export default {
  props:["macheid"],
  data() {
    return{

    }
    
  },
  created(){

  },
  computed:{
 ...mapGetters("bienService", ["acteEffetFinanciers","getterProgrammationMarchePlurieAnnuel",
  "getMarchePersonnaliser","marches","gettersDossierMandat","gettersgestionOrdrePaiement",
  "gettersDossierLiquidation","gettersDemandeEngagement"]),

...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures"]),

  ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']),

taille(){
  return this.gettersgestionOrdrePaiement.length;
},

  afficherIDUA(){
   return macheid=>{
     if(macheid!=null && macheid!=""){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==macheid)
         if(answer)  return answer.unite_administrative_id
         return 78
     }
   }
  },

AfficheLogODCF() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/log3.png";
    },
    AfficheAmoirie() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/amoirie.png";
    },
  },
  methods:{
    ...mapActions("bienService",['']),

    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

  }
}
</script>