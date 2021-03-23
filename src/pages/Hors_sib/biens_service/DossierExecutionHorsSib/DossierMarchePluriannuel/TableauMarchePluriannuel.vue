
<template>
  <div >
    


    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
         
          <div class="widget-box">
            <!-- <div class="widget-title"> -->
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie section ou libelle" v-model="search" />

               
              </div> -->
              <!-- <span class="icon">
                <i class="icon-th"></i>
              </span> -->
              <!-- <h5>AUTORISATION D'engagement AE</h5>
            </div> -->

           
            <div class="span6" align="left">
                        <button class="btn btn-default" @click="tableToExcel('table', 'TABLEAU DE MARCHE PLURIANNUEL')">
                            <img style="width: 20px !important; height: 20px !important;" src="https://img.icons8.com/windows/64/000000/export-excel.png"/>
                        </button>
                    </div>
           
           
              <table class="table table-bordered table-striped" id="titre" ref="table"  summary="lorem ipsum sit amet" rules="groups" frame="hsides" border="2">
                
                <!-- <thead>
                  <tr>
                    <th style="width:10%"></th> 
                    <td> </td>
                  </tr>
                  <tr>
                    <th style="width:10%"></th>
                    <td> </td>
                  </tr>
                  <tr>
                    <th style="width:10%"></th>
                      <td> </td>
                   </tr>
                  <tr>
                    <th style="width:10%"></th>
                      <td>  </td>
                   </tr>
                  <tr>
                    <th style="width:10%"></th>
                      <td> </td>
                  </tr>
                  <tr>
                    <th style="width:10%"></th>
                    <td> </td>
                  </tr>
                </thead>
                 -->
                 
               <th style="width:10%"></th>
         <th style="width:15%" colspan="3">{{affichageAnneeConditionnel}} </th> 
         <th style="width:15%" colspan="3">{{incrementAnnee}} </th>
         <th style="width:15%" colspan="3">{{incrementAnnee1}} </th>

              
            <tr>
                     <th style="width:10%">(1)AUTORISATION D'ENGAGEMENT AE  </th>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:15%" colspan="3" > {{formatageSommeSansFCFA(parseFloat(afficherMontantTtcDeActe(macheid)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:15%" colspan="3">{{formatageSommeSansFCFA(parseFloat(afficherMontantTtcDeActeAnneSuivante(macheid)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:15%" colspan="3"> {{formatageSommeSansFCFA(parseFloat(afficherMontantTtcDeActeAnneSuivante1(macheid)))}} </td>
        </tr>
       
           <tr>
          <th  style="width:10%"> </th>
          <th style="width:15%" colspan="3">SOURCE DE FINANCEMENT </th> 
         <th style="width:15%" colspan="3">SOURCE DE FINANCEMENT </th>
         <th style="width:15%" colspan="3">SOURCE DE FINANCEMENT </th>

           
       </tr>
           <tr>
          <th  style="width:10%"> </th>
          <th style="width:10%" colspan="1">ETAT  </th> 
         <th style="width:10%" colspan="2">BAILLEURS </th>
         <th style="width:5%" colspan="1">ETAT </th>
          <th style="width:10%" colspan="2">BAILLEURS </th> 
         <th style="width:5%" colspan="1">ETAT</th>
         <th style="width:10%" colspan="2"> BAILLEURS</th>
          

           
       </tr>
           <tr>
          <th  style="width:10%"> </th>
          <th style="width:5%" colspan="1">TRESOR (FCFA)</th> 
         <th style="width:5%" colspan="1">DON (FCFA) </th>
         <th style="width:5%" colspan="1">EMPRUNT (FCFA) </th>
          <th style="width:5%" colspan="1">TRESOR (FCFA) </th> 
         <th style="width:5%" colspan="1">DON  (FCFA)</th>
         <th style="width:5%" colspan="1">EMPRUNT (FCFA) </th>
          <th style="width:5%" colspan="1">TRESOR (FCFA) </th> 
         <th style="width:5%" colspan="1">DON (FCFA)</th>
         <th style="width:5%" colspan="1">EMPRUNT (FCFA)</th>

           
       </tr>  
           <tr>
          <th  style="width:10%">(1)REPORT A L'ANNEE N+1 / (R)=(T)-(D) </th>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculDuMontantReportTresor(macheid)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculDuMontantReportDons(macheid)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(calculDuMontantReportEmprunt(macheid)))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculDuMontantReportTresorAnneSuivante(macheid)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculDuMontantReportDonsAnneeSuivante(macheid)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculDuMontantReportEmpruntAnneeSuivante(macheid)))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculDuMontantReportTresorAnneUlterieure(macheid)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculDuMontantReportDonsAnneeUlterieure(macheid)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculDuMontantReportEmpruntAnneeUlterieure(macheid)))}} </td>

           
       </tr>
             <tr>
          <th  style="width:10%">(2) PREVISIONNEL ANNUEL DES CP (A) </th>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantCPTresor(macheid))) }} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantCPDons(macheid))) }}</td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPEmprunt(macheid))) }}  </td>

          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPTresorAnneeSuivante(macheid))) }} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPDonsAnneeSuivante(macheid))) }} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPEmpruntAnneeSuivante(macheid))) }} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPTresorAnneeUlterieure(macheid))) }} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPDonsAnneeUlterieure(macheid))) }} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPEmpruntAnneeUlterieure(macheid))) }} </td>
           
       </tr>
               <tr>
          <th  style="width:10%">(3)TOTAL PREVISION ANNUEL (T)=(R)+(A) </th>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculeTotalPrevisionnelAnnuelDons))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(calculeTotalPrevisionnelAnnuelEmprunt))}} </td>
        <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculeTotalPrevisionnelAnnuelTresor)) }}</td> 
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculeTotalPrevisionnelAnnuelTresorAnneeSuivante))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculeTotalPrevisionnelAnnuelDonsAnneeSuivante))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculeTotalPrevisionnelAnnuelEmpruntAnneeSuivante))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculeTotalPrevisionnelAnnuelTresorAnneeUlterieure)) }} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(calculeTotalPrevisionnelAnnuelDonsAnneeUlterieur)) }}</td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculeTotalPrevisionnelAnnuelEmpruntAnneeUlterieur)) }} </td>

           
       </tr>
                <tr>
          <th  style="width:10%">(4) CP NOTIFIE (B) </th>
        <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieTresor(macheid) ))}}  </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieDons(macheid) ))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieEmprunt(macheid) ))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieTresorAnneeSuivante(macheid) ))}}  </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieDonsAnneeSuivante(macheid) ))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieEmpruntAnneeSuivante(macheid) ))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieTresorAnneeUlterieure(macheid) ))}}</td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieDonsAnneeUlterieure(macheid) ))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieEmpruntAnneeUlterieure(macheid) ))}} </td>

           

       </tr>
                <tr>
          <th  style="width:10%">(5)ECART P/R PREVISION (C)= (B)-(T) </th>
        <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieTresor(macheid))-(parseFloat(calculeTotalPrevisionnelAnnuelTresor)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieDons(macheid)) - (parseFloat(calculeTotalPrevisionnelAnnuelDons)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieEmprunt(macheid))-(parseFloat(calculeTotalPrevisionnelAnnuelEmprunt)))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieTresorAnneeSuivante(macheid))-(parseFloat(calculeTotalPrevisionnelAnnuelTresorAnneeSuivante)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieDonsAnneeSuivante(macheid))-(parseFloat(calculeTotalPrevisionnelAnnuelDonsAnneeSuivante)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieEmpruntAnneeSuivante(macheid))-(parseFloat(calculeTotalPrevisionnelAnnuelEmpruntAnneeSuivante)))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieTresorAnneeUlterieure(macheid))-(parseFloat(calculeTotalPrevisionnelAnnuelTresorAnneeUlterieure)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieDonsAnneeUlterieure(macheid))-(parseFloat(calculeTotalPrevisionnelAnnuelDonsAnneeUlterieur)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantCPNotifieEmpruntAnneeUlterieure(macheid))-(parseFloat(calculeTotalPrevisionnelAnnuelEmpruntAnneeUlterieur)))}} </td>
 
           
       </tr>
                 <tr>
          <th  style="width:10%">CUMUL DES LIQUIDATIONS (L) </th>
        <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA (parseFloat(MontantTresorLiquidation))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA (parseFloat(MontantDonsLiquidation))}}</td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA (parseFloat(MontantEmpruntLiquidation))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{ formatageSommeSansFCFA(parseFloat(MontantTresorLiquidationAnneeSuivante))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA (parseFloat(MontantDonsLiquidationAnneeSuivante))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA (parseFloat(MontantEmpruntLiquidationAnneeSuivante))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA (parseFloat(MontantTresorLiquidationAnneeUlterieure))}}</td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{ formatageSommeSansFCFA(parseFloat(MontantDonsLiquidationAnneeUlterieure))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{ formatageSommeSansFCFA(parseFloat(MontantEmpruntLiquidationAnneeUlterieure))}} </td>

           
       </tr>
                 <tr>
          <th  style="width:10%">(4) CUMUL DES MANDATEMENTS /OP PAR BAILLEUR (D) </th>
        <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantOPParBailleurTresor(macheid)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantOPParBailleurDons(macheid)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantOPParBailleurEmprunt(macheid)))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantOPParBailleurTresorAnneeSuivante(macheid)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantOPParBailleurDonsAnneeSuivante(macheid)))}}</td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantOPParBailleurEmpruntAnneeSuivante(macheid)))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantOPParBailleurTresorAnneeUlterieure(macheid)))}}</td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(afficherMontantOPParBailleurDonsAnneeUlterieure(macheid)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(afficherMontantOPParBailleurEmpruntAnneeUlterieure(macheid)))}}</td>

           
       </tr>
            <tr>
                <th style="width:10%">(5)TOTAUX DES MANDATEMENTS /OP (M)</th>
         <td style="width:15%" colspan="3">{{formatageSommeSansFCFA(parseFloat(totauxMadatement))}} </td> 
         <td style="width:15%" colspan="3">{{formatageSommeSansFCFA(parseFloat(totauxMadatementAnneeSuivante))}} </td>
         <td style="width:15%" colspan="3">{{formatageSommeSansFCFA(parseFloat(totauxMadatementAnneeUlterieure))}}  </td>
        </tr>
                     <tr>
          <th  style="width:10%">(6)ECART D'EXECUTION (E) = (D)-(B) </th>
        <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculEcartExecutionTresor))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculEcartExecutionDons))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculEcartExecutionEmprunt))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculEcartExecutionTresorAnneeSuivante))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculEcartExecutionDonsAnneeSuivante))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculEcartExecutionEmpruntAnneeSuivante))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculEcartExecutionTresorAnneeUlterieure))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculEcartExecutionDonsAnneeUlterieure))}}  </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(calculEcartExecutionEmpruntAnneeUlterieure))}} </td>

           
       </tr>
                    <tr>
          <th  style="width:10%">(7)DEPENSE OBLIGATOIRE (O)=(L)-(D) </th>
        <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(MontantTresorLiquidation) - parseFloat(afficherMontantOPParBailleurTresor(macheid)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1"> {{formatageSommeSansFCFA(parseFloat(MontantDonsLiquidation)- parseFloat(afficherMontantOPParBailleurDons(macheid)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(MontantEmpruntLiquidation) -parseFloat(afficherMontantOPParBailleurEmprunt(macheid)))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(MontantTresorLiquidationAnneeSuivante) - parseFloat(afficherMontantOPParBailleurTresorAnneeSuivante(macheid)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(MontantDonsLiquidationAnneeSuivante)- parseFloat(afficherMontantOPParBailleurDonsAnneeSuivante(macheid)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(MontantEmpruntLiquidationAnneeSuivante) -parseFloat(afficherMontantOPParBailleurEmpruntAnneeSuivante(macheid)))}} </td>
          <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(MontantTresorLiquidationAnneeUlterieure) - parseFloat(afficherMontantOPParBailleurTresorAnneeUlterieure(macheid)))}} </td> 
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(MontantDonsLiquidationAnneeUlterieure)- parseFloat(afficherMontantOPParBailleurDonsAnneeUlterieure(macheid)))}} </td>
         <td style="color: #000;text-align:center;background-color: #ffbd3d !important;font-size:10px:width:5%" colspan="1">{{formatageSommeSansFCFA(parseFloat(MontantEmpruntLiquidationAnneeUlterieure) -parseFloat(afficherMontantOPParBailleurEmpruntAnneeUlterieure(macheid)))}} </td>

           
       </tr>
          <tr>
                <th style="width:10%">(8)RESTE A EXECUTER SUR CP TOTAL </th>
         <td style="width:15%" colspan="3">{{formatageSommeSansFCFA(parseFloat(calculTotauxCP))}} </td> 
         <td style="width:15%" colspan="3">{{formatageSommeSansFCFA(parseFloat(calculTotauxCPAnneeSuivante))}} </td>
         <td style="width:15%" colspan="3">{{formatageSommeSansFCFA(parseFloat(calculTotauxCPAnneeUlterieure))}} </td>
        </tr>
    
       
      </table>
            
              
  
   

    
 
            <!-- <div v-else> -->
              <!-- <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterpaiementPersonnel" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterpaiementPersonnel()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  /> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
// import moment from "moment";
import {formatageSommeSansFCFA} from "../../../../../Repositories/Repository"
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
    props:["macheid"],
  // components: {
  //   ModelListSelect
  // },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
       uri :'data:application/vnd.ms-excel;charset=UTF-8;base64,',
        template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
        base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
         format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) },
          innerHTML:"",
     
     
      search: ""
    };
  },

  computed: {
  ...mapGetters("bienService", ["acteEffetFinanciers","getterProgrammationMarchePlurieAnnuel",
  "getMarchePersonnaliser","marches","gettersDossierMandat","gettersgestionOrdrePaiement",
  "gettersDossierLiquidation","gettersDemandeEngagement"]),

...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures"]),

  ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,


  // recuperID du marche dans acte Effet financier

  // afficher exercice du budgetaire

  afficherExoBudgetaire(){
   return id=>{
     if(id!="" && id!=null){
        const answer = this.getterProgrammationMarchePlurieAnnuel.find(item => item.marche_id=id)
         if(answer){
           return answer.anneeBudgetaire
         }
         return null
     }
   }
  },

   afficherIdTypefinancement(){
   return id=>{
     if(id!="" && id!=null){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==id)
         if(answer){
           return answer.type_financement_id
         }
         return 0
     }
   }
  },

   afficherMontantOPParBailleurDons(){
   return id=>{
     if(id!="" && id!=null){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==id &&
        this.recupereIDTypeFinacementDansOdreDePaiement(this.macheid)==this.affiherLibelleTypefinancement
        && this.recperExoBudgetaireDansTableOrdeDepaiement(this.macheid)==this.anneeBugetaire)
         if(answer){
           return answer.montant_ordre_paiement
         }
         return 0
     }
   }
  },

   afficherMontantOPParBailleurDonsAnneeSuivante(){
   return id=>{
     if(id!="" && id!=null){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==id &&
        this.recupereIDTypeFinacementDansOdreDePaiement(this.macheid)==this.affiherLibelleTypefinancement
        && this.recperExoBudgetaireDansTableOrdeDepaiement(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
         if(answer){
           return answer.montant_ordre_paiement
         }
         return 0
     }
   }
  },

   afficherMontantOPParBailleurDonsAnneeUlterieure(){
   return id=>{
     if(id!="" && id!=null){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==id &&
        this.recupereIDTypeFinacementDansOdreDePaiement(this.macheid)==this.affiherLibelleTypefinancement
        && this.recperExoBudgetaireDansTableOrdeDepaiement(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
         if(answer){
           return answer.montant_ordre_paiement
         }
         return 0
     }
   }
  },

   afficherMontantOPParBailleurEmprunt(){
   return id=>{
     if(id!="" && id!=null){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==id && 
        this.recupereIDTypeFinacementDansOdreDePaiement(this.macheid)==this.affiherLibelleTypefinancement0
         && this.recperExoBudgetaireDansTableOrdeDepaiement(this.macheid)==this.anneeBugetaire)
         if(answer){
           return answer.montant_ordre_paiement
         }
         return 0
     }
   }
  },

  afficherMontantOPParBailleurEmpruntAnneeSuivante(){
   return id=>{
     if(id!="" && id!=null){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==id && 
        this.recupereIDTypeFinacementDansOdreDePaiement(this.macheid)==this.affiherLibelleTypefinancement0
         && this.recperExoBudgetaireDansTableOrdeDepaiement(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
         if(answer){
           return answer.montant_ordre_paiement
         }
         return 0
     }
   }
  },

  
  afficherMontantOPParBailleurEmpruntAnneeUlterieure(){
   return id=>{
     if(id!="" && id!=null){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==id && 
        this.recupereIDTypeFinacementDansOdreDePaiement(this.macheid)==this.affiherLibelleTypefinancement0
         && this.recperExoBudgetaireDansTableOrdeDepaiement(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
         if(answer){
           return answer.montant_ordre_paiement
         }
         return 0
     }
   }
  },

   afficherMontantOPParBailleurTresor(){
   return id=>{
     if(id!="" && id!=null){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==id && 
        this.recupereIDTypeFinacementDansOdreDePaiement(this.macheid)==this.affiherLibelleTypefinancement1
        && this.recperExoBudgetaireDansTableOrdeDepaiement(this.macheid)==this.anneeBugetaire)
         if(answer){
           return answer.montant_ordre_paiement
         }
         return 0
     }
   }
  },

   afficherMontantOPParBailleurTresorAnneeSuivante(){
   return id=>{
     if(id!="" && id!=null){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==id && 
        this.recupereIDTypeFinacementDansOdreDePaiement(this.macheid)==this.affiherLibelleTypefinancement1
        && this.recperExoBudgetaireDansTableOrdeDepaiement(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
         if(answer){
           return answer.montant_ordre_paiement
         }
         return 0
     }
   }
  },

  afficherMontantOPParBailleurTresorAnneeUlterieure(){
   return id=>{
     if(id!="" && id!=null){
        const answer = this.gettersgestionOrdrePaiement.find(item =>item.marche_id==id && 
        this.recupereIDTypeFinacementDansOdreDePaiement(this.macheid)==this.affiherLibelleTypefinancement1
        && this.recperExoBudgetaireDansTableOrdeDepaiement(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
         if(answer){
           return answer.montant_ordre_paiement
         }
         return 0
     }
   }
  },

  // recuperation de lexo dans ordre de paiement
  recperExoBudgetaireDansTableOrdeDepaiement(){
    return id =>{
         if(id!="" && id!=null){
            let resultat =this.gettersgestionOrdrePaiement.find(item => item.marche_id==id)
             if(resultat) {
              return resultat.exercice
             }
             return null
         }
         
    }
  },

// afficherIDdu type de finacement Dans la table de Ordre de paiment
recupereIDTypeFinacementDansOdreDePaiement(){
   return id =>{
         if(id!="" && id!=null){
            let resultat =this.gettersgestionOrdrePaiement.find(item => item.marche_id==id)
             if(resultat) {
              return resultat.type_financement_id
             }
             return null
         }
         
    }
},


recupereIDTypeFinacementDansMarchePluriannuel(){
   return id =>{
         if(id!="" && id!=null){
            let resultat =this.getterProgrammationMarchePlurieAnnuel.find(item => item.marche_id==id)
             if(resultat) {
              return resultat.type_financement
             }
             return null
         }
         
    }
},


recupereIDTypeFinacementDansMarchePluriannuelCP_Dons(){
   return id =>{
         if(id!="" && id!=null){
            let resultat =this.getterProgrammationMarchePlurieAnnuel.find(item => item.marche_id==id)
             if(resultat) {
              return resultat.type_financement_cp
             }
             return null
         }
         
    }
},

recupereIDTypeFinacementDansMarchePluriannuelCP_Emprunt(){
   return id =>{
         if(id!="" && id!=null){
            let resultat =this.getterProgrammationMarchePlurieAnnuel.find(item => item.marche_id==id)
             if(resultat) {
              return resultat.type_financement_id_cp
             }
             return null
         }
         
    }
},
  // calculons les totaux des mandatements type_financement_id_cp
  totauxMadatement(){
    let Total = parseFloat(this.afficherMontantOPParBailleurTresor(this.macheid) + 
    parseFloat(this.afficherMontantOPParBailleurDons(this.macheid)) + parseFloat(this.afficherMontantOPParBailleurEmprunt(this.macheid)))
  
     return Total
  },

    totauxMadatementAnneeSuivante(){
    let Total = parseFloat(this.afficherMontantOPParBailleurTresorAnneeSuivante(this.macheid) + 
    parseFloat(this.afficherMontantOPParBailleurDonsAnneeSuivante(this.macheid)) + parseFloat(this.afficherMontantOPParBailleurEmpruntAnneeSuivante(this.macheid)))
  
     return Total
  },

   totauxMadatementAnneeUlterieure(){
    let Total = parseFloat(this.afficherMontantOPParBailleurTresorAnneeUlterieure(this.macheid) + 
    parseFloat(this.afficherMontantOPParBailleurDonsAnneeUlterieure(this.macheid)) + parseFloat(this.afficherMontantOPParBailleurEmpruntAnneeUlterieure(this.macheid)))
  
     return Total
  },

  // calcule les totaux des CP
  calculTotauxCP(){
    const e = parseFloat((this.totauxMadatement) + parseFloat(this.afficherMontantTtcDeActe(this.macheid)))
      return e
  },

  calculTotauxCPAnneeSuivante(){
    const e = parseFloat((this.totauxMadatementAnneeSuivante) + parseFloat(this.afficherMontantTtcDeActeAnneSuivante(this.macheid)))
      return e
  },

   calculTotauxCPAnneeUlterieure(){
    const e = parseFloat((this.totauxMadatementAnneeUlterieure) + parseFloat(this.afficherMontantTtcDeActeAnneSuivante1(this.macheid)))
      return e
  },


  // calcule Ecart d'execution
   calculEcartExecutionTresor(){
     const objet= parseFloat(this.afficherMontantOPParBailleurTresor(this.macheid))- parseFloat(this.afficherMontantCPNotifieTresor(this.macheid))
      return objet
   },

   calculEcartExecutionTresorAnneeSuivante(){
     const objet= parseFloat(this.afficherMontantOPParBailleurTresorAnneeSuivante(this.macheid))- parseFloat(this.afficherMontantCPNotifieTresorAnneeSuivante(this.macheid))
      return objet
   },

 calculEcartExecutionTresorAnneeUlterieure(){
     const objet= parseFloat(this.afficherMontantOPParBailleurTresorAnneeUlterieure(this.macheid))- parseFloat(this.afficherMontantCPNotifieTresorAnneeUlterieure(this.macheid))
      return objet
   },
   calculEcartExecutionDons(){
     const objet= (parseFloat(this.afficherMontantOPParBailleurDons(this.macheid)) - parseFloat(this.afficherMontantCPNotifieDons(this.macheid)))
      return objet
   },
   calculEcartExecutionDonsAnneeSuivante(){
     const objet= (parseFloat(this.afficherMontantOPParBailleurDonsAnneeSuivante(this.macheid)) - parseFloat(this.afficherMontantCPNotifieDonsAnneeSuivante(this.macheid)))
      return objet
   },

   calculEcartExecutionDonsAnneeUlterieure(){
     const objet= (parseFloat(this.afficherMontantOPParBailleurDonsAnneeUlterieure(this.macheid)) - parseFloat(this.afficherMontantCPNotifieDonsAnneeUlterieure(this.macheid)))
      return objet
   },

   calculEcartExecutionEmprunt(){
     const objet= (parseFloat(this.afficherMontantOPParBailleurEmprunt(this.macheid)) - parseFloat(this.afficherMontantCPNotifieEmprunt(this.macheid)))
      return objet
   },
    calculEcartExecutionEmpruntAnneeSuivante(){
     const objet= (parseFloat(this.afficherMontantOPParBailleurEmpruntAnneeSuivante(this.macheid)) - parseFloat(this.afficherMontantCPNotifieEmpruntAnneeSuivante(this.macheid)))
      return objet
   },

    calculEcartExecutionEmpruntAnneeUlterieure(){
     const objet= (parseFloat(this.afficherMontantOPParBailleurEmpruntAnneeUlterieure(this.macheid)) - parseFloat(this.afficherMontantCPNotifieEmpruntAnneeUlterieure(this.macheid)))
      return objet
   },

  // calcul le cummule des madetement



afficherMontantTtcDeActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterProgrammationMarchePlurieAnnuel.find(qtreel => qtreel.marche_id == id && this.afficherIdExo(this.macheid)==this.anneeBugetaire) ;
          // console.log(this.getterProgrammationMarchePlurieAnnuel)
            //console.log(this.acteEffetFinanciers)
      if (qtereel) {
        return qtereel.montantBase;
      }
      return 0
        }
      };
    },

    afficherMontantTtcDeActeAnneSuivante() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterProgrammationMarchePlurieAnnuel.find(qtreel => qtreel.marche_id == id && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour) ;
          // console.log(this.getterProgrammationMarchePlurieAnnuel)
            //console.log(this.acteEffetFinanciers)
      if (qtereel) {
        return qtereel.montantBase;
      }
      return 0
        }
      };
    },

     afficherMontantTtcDeActeAnneSuivante1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterProgrammationMarchePlurieAnnuel.find(qtreel => qtreel.marche_id == id && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour12) ;
          // console.log(this.getterProgrammationMarchePlurieAnnuel)
            //console.log(this.acteEffetFinanciers)
      if (qtereel) {
        return qtereel.montantBase;
      }
      return 0
        }
      };
    },


    afficherIdExo() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterProgrammationMarchePlurieAnnuel.find(qtreel => qtreel.marche_id==id );
            //console.log(this.acteEffetFinanciers)
      if (qtereel) {
        return qtereel.anneeBudgetaire;
      }
      return 0
        }
      };
    },

     afficherIdExoE() {
      return id => {
           const qtereel = this.getterProgrammationMarchePlurieAnnuel.filter(qtreel => qtreel.id==id );
            //console.log(this.acteEffetFinanciers)
        return qtereel.marche_id;
    
     
      };
    },


     afficherLibelleExo() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.exercices_budgetaires.find(qtreel => qtreel.id==id);
            //console.log(this.acteEffetFinanciers)
      if (qtereel) {
        return qtereel.annee;
      }
      return 0
        }
      };
    },
// afficher lannée conditionnel
affichageAnneeConditionnel(){
  let anneeBudgetaire;
  const objetp=this.getterProgrammationMarchePlurieAnnuel.find(item => item.anneeBudgetaire== this.anneeBugetaire)
       if(anneeBudgetaire=="") {
          return null
       }
      
      return objetp.anneeBudgetaire
},

     anneeBugetaire(){
     const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.encours == 1 );
      if(anneBudget){
        return anneBudget.annee;
     }
     return 0
   },

   anneeBugetaireQuiNestPasEncour(){
     const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.annee==2022 );
      if(anneBudget){
        return anneBudget.annee;
     }
     return 0
   },

 anneeBugetaireQuiNestPasEncour12(){
     const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.annee==2023 );
      if(anneBudget){
        return anneBudget.annee;
     }
     return 0
   },
//incrementer l'année  affichageAnneeConditionnel
incrementAnnee(){
   const item=parseInt(this.affichageAnneeConditionnel) + parseInt(1)
    if(this.affichageAnneeConditionnel==""){
      return null
    }
    return item;
},


incrementAnnee1(){
   let respose= parseInt(this.incrementAnnee) + parseInt(1)
    if(this.incrementAnnee==""){
      return null
    }
    return respose
},
   // afficher le montant de report en fonction de l'année
 //affiherLibelleTypefinancement1(afficherLeCodeTypeFinancementEnFonctionDeLaSourceDefinancement(macheid))
   calculDuMontantReportTresor(){
       return idReport =>{
           if(idReport!="" && idReport!=null){
               let resulta= this.getterProgrammationMarchePlurieAnnuel.find(e=>e.marche_id==idReport && 
              this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement1 
               &&
               this.afficherIdExo(this.macheid)==this.anneeBugetaire)
                if(resulta) return resulta.report_nouveau
           }
           return 0
       }
   },

    calculDuMontantReportTresorAnneSuivante(){
       return idReport =>{
           if(idReport!="" && idReport!=null){
               let resulta= this.getterProgrammationMarchePlurieAnnuel.find(e=>e.marche_id==idReport && 
              this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement1 
               &&
               this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
                if(resulta) return resulta.report_nouveau
           }
           return 0
       }
   },

    calculDuMontantReportTresorAnneUlterieure(){
       return idReport =>{
           if(idReport!="" && idReport!=null){
               let resulta= this.getterProgrammationMarchePlurieAnnuel.find(e=>e.marche_id==idReport && 
              this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement1 
               &&
               this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
                if(resulta) return resulta.report_nouveau
           }
           return 0
       }
   },


   calculDuMontantReportDons(){
       return idReport =>{
           if(idReport!="" && idReport!=null){
               let resulta= this.getterProgrammationMarchePlurieAnnuel.find(e=>e.marche_id==idReport && 
               this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement 
               &&
                this.afficherIdExo(this.macheid)==this.anneeBugetaire)
                if(resulta) return resulta.report_nouveau
           }
           return 0
       }
   },


    calculDuMontantReportDonsAnneeSuivante(){
       return idReport =>{
           if(idReport!="" && idReport!=null){
               let resulta= this.getterProgrammationMarchePlurieAnnuel.find(e=>e.marche_id==idReport && 
               this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement 
               &&
                this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
                if(resulta) return resulta.report_nouveau
           }
           return 0
       }
   },

    calculDuMontantReportDonsAnneeUlterieure(){
       return idReport =>{
           if(idReport!="" && idReport!=null){
               let resulta= this.getterProgrammationMarchePlurieAnnuel.find(e=>e.marche_id==idReport && 
               this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement 
               &&
                this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
                if(resulta) return resulta.report_nouveau
           }
           return 0
       }
   },

    calculDuMontantReportEmprunt(){
       return idReport =>{
           if(idReport!="" && idReport!=null){
               let resulta= this.getterProgrammationMarchePlurieAnnuel.find(e=>e.marche_id==idReport && 
                this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement0
               &&
                this.afficherIdExo(this.macheid)==this.anneeBugetaire)
                if(resulta) return resulta.report_nouveau
           }
           return 0
       }
   },

   calculDuMontantReportEmpruntAnneeSuivante(){
       return idReport =>{
           if(idReport!="" && idReport!=null){
               let resulta= this.getterProgrammationMarchePlurieAnnuel.find(e=>e.marche_id==idReport && 
                this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement0
               &&
                this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
                if(resulta) return resulta.report_nouveau
           }
           return 0
       }
   },


 calculDuMontantReportEmpruntAnneeUlterieure(){
       return idReport =>{
           if(idReport!="" && idReport!=null){
               let resulta= this.getterProgrammationMarchePlurieAnnuel.find(e=>e.marche_id==idReport && 
                this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement0
               &&
                this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
                if(resulta) return resulta.report_nouveau
           }
           return 0
       }
   },
   // recuperer le code de type de financement et la source de financement anneeBugetaireQuiNestPasEncour12

   afficherLeCodeTypeFinancementEnFonctionDeLaSourceDefinancement(){
       return id=>{
           if(id!=""){
               const Objet= this.getterProgrammationMarchePlurieAnnuel.find(Idm => Idm.marche_id==id)
                if(Objet){
                    return Objet.type_financement
                }
                return null
           }
       }
   },

   // afficher libelle type_financement

  affiherLibelle(){
                return id =>{
                    if(id!=null){
                        let objet = this.sources_financements.find(item =>item.id==id )
                        if(objet) return objet.libelle
                    }
                    return null
                }
            },
            // afficher le type de financement Dons
             affiherLibelleTypefinancement(){
               const objet= this.types_financements.find(item => item.code==2)
                           return objet.id 
            },

// afficher le type de financement Emprunt
                     affiherLibelleTypefinancement0(){
               const objet= this.types_financements.find(item => item.code==3)
                           return objet.id 
            },

// afficher le type de financemnet Tresor
             affiherLibelleTypefinancement1(){
                        const objet= this.types_financements.find(item => item.code==1)
                           return objet.id         
            },

            // afficher ID Type de fiancement
            // afficherIDtypefinancementTableParametre(){
            //   let objet =this.types_financements.find(item => item.code==1)
            //    return objet.id
            // },
  //  afficherLibelleTypeFinancement(){
  //    return id=>{
  //      if(id!="" && id!=null){
  //        let objet= this.types_financements.find(item => item.id==id)
  //        if(objet) return objet.libelle
  //      }
  //      return 0
  //    }
  //  } afficherIdMarche,


afficherMontantCPDons(){


  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
     this.recupereIDTypeFinacementDansMarchePluriannuelCP_Dons(this.macheid)==this.affiherLibelleTypefinancement
    && this.afficherIdExo(this.macheid)==this.anneeBugetaire)
      if(respo) return respo.cp_dons
    }
    return 0
  }
},
afficherMontantCPDonsAnneeSuivante(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
     this.recupereIDTypeFinacementDansMarchePluriannuelCP_Dons(this.macheid)==this.affiherLibelleTypefinancement
    && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
      if(respo) return respo.cp_dons
    }
    return 0
  }
},

afficherMontantCPDonsAnneeUlterieure(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
     this.recupereIDTypeFinacementDansMarchePluriannuelCP_Dons(this.macheid)==this.affiherLibelleTypefinancement
    && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
      if(respo) return respo.cp_dons
    }
    return 0
  }
},

afficherMontantCPEmprunt(){
  
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuelCP_Emprunt(this.macheid)==this.affiherLibelleTypefinancement0
       && this.afficherIdExo(this.macheid)==this.anneeBugetaire)
      if(respo) return respo.cp_emprunt
    }
    return 0
  }
},

afficherMontantCPEmpruntAnneeSuivante(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuelCP_Emprunt(this.macheid)==this.affiherLibelleTypefinancement0
       && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
      if(respo) return respo.cp_emprunt
    }
    return 0
  }
},

afficherMontantCPEmpruntAnneeUlterieure(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuelCP_Emprunt(this.macheid)==this.affiherLibelleTypefinancement0
       && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
      if(respo) return respo.cp_emprunt
    }
    return 0
  }
},


afficherMontantCPTresor(){
  
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement1
       && this.afficherIdExo(this.macheid)==this.anneeBugetaire)
      if(respo) return respo.cp_tresor
    }
    return 0
  }
},

afficherMontantCPTresorAnneeSuivante(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement1
       && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
      if(respo) return respo.cp_tresor
    }
    return 0
  }
},

afficherMontantCPTresorAnneeUlterieure(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement1
       && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
      if(respo) return respo.cp_tresor
    }
    return 0
  }
},

afficherIdMarche(){
  return id =>{
                    if(id!=null){
                        let objet = this.marches.find(item =>item.id==id)
                        if(objet) return objet.exo_id
                    }
                    return null
                }
},
// calcul le montant de CP notifié


afficherMontantCPNotifieDons(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuelCP_Dons(this.macheid)==this.affiherLibelleTypefinancement
       && this.afficherIdExo(this.macheid)==this.anneeBugetaire)
      if(respo) return respo.montantCP_notifie
    }
    return 0
  }
},


afficherMontantCPNotifieDonsAnneeSuivante(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuelCP_Dons(this.macheid)==this.affiherLibelleTypefinancement
       && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
      if(respo) return respo.montantCP_notifie
    }
    return 0
  }
},

afficherMontantCPNotifieDonsAnneeUlterieure(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuelCP_Dons(this.macheid)==this.affiherLibelleTypefinancement
       && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
      if(respo) return respo.montantCP_notifie
    }
    return 0
  }
},


afficherMontantCPNotifieEmprunt(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuelCP_Emprunt(this.macheid)==this.affiherLibelleTypefinancement0
       && this.afficherIdExo(this.macheid)==this.anneeBugetaire)
      if(respo) return respo.montantCP_notifie
    }
    return 0
  }
},

afficherMontantCPNotifieEmpruntAnneeSuivante(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuelCP_Emprunt(this.macheid)==this.affiherLibelleTypefinancement0
       && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
      if(respo) return respo.montantCP_notifie
    }
    return 0
  }
},

afficherMontantCPNotifieEmpruntAnneeUlterieure(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
      this.recupereIDTypeFinacementDansMarchePluriannuelCP_Emprunt(this.macheid)==this.affiherLibelleTypefinancement0
       && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
      if(respo) return respo.montantCP_notifie
    }
    return 0
  }
},


afficherMontantCPNotifieTresor(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
       this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement1
       && this.afficherIdExo(this.macheid)==this.anneeBugetaire)
      if(respo) return respo.montantCP_notifie
    }
    return 0
  }
},

afficherMontantCPNotifieTresorAnneeSuivante(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
       this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement1
       && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour)
      if(respo) return respo.montantCP_notifie
    }
    return 0
  }
},

afficherMontantCPNotifieTresorAnneeUlterieure(){
  return id=>{
    if(id!=""){
      let respo= this.getterProgrammationMarchePlurieAnnuel.find(item=>item.marche_id==id &&
       this.recupereIDTypeFinacementDansMarchePluriannuel(this.macheid)==this.affiherLibelleTypefinancement1
       && this.afficherIdExo(this.macheid)==this.anneeBugetaireQuiNestPasEncour12)
      if(respo) return respo.montantCP_notifie
    }
    return 0
  }
},

// calculons le total previsionnel annuel

calculeTotalPrevisionnelAnnuelTresor(){

  const result= parseFloat(this.calculDuMontantReportTresor(this.macheid))+ parseFloat(this.afficherMontantCPTresor(this.macheid))
   return result;
},

calculeTotalPrevisionnelAnnuelTresorAnneeSuivante(){

  const result= parseFloat(this.calculDuMontantReportTresorAnneSuivante(this.macheid))+ parseFloat(this.afficherMontantCPTresorAnneeSuivante(this.macheid))
   return result;
},

calculeTotalPrevisionnelAnnuelTresorAnneeUlterieure(){

  const result= parseFloat(this.calculDuMontantReportTresorAnneUlterieure(this.macheid))+ parseFloat(this.afficherMontantCPTresorAnneeUlterieure(this.macheid))
   return result;
},
calculeTotalPrevisionnelAnnuelDons(){

  const resulta= parseFloat(this.calculDuMontantReportDons(this.macheid))+ parseFloat(this.afficherMontantCPDons(this.macheid))
   return resulta;
},


calculeTotalPrevisionnelAnnuelDonsAnneeSuivante(){

  const resulta= parseFloat(this.calculDuMontantReportDonsAnneeSuivante(this.macheid))+ parseFloat(this.afficherMontantCPDonsAnneeSuivante(this.macheid))
   return resulta;
},
calculeTotalPrevisionnelAnnuelDonsAnneeUlterieur(){

  const resulta= parseFloat(this.calculDuMontantReportDonsAnneeUlterieure(this.macheid))+ parseFloat(this.afficherMontantCPDonsAnneeUlterieure(this.macheid))
   return resulta;
},
calculeTotalPrevisionnelAnnuelEmprunt(){

  const resultat= parseFloat(this.calculDuMontantReportEmprunt(this.macheid))+ parseFloat(this.afficherMontantCPEmprunt(this.macheid))
   return resultat;
},

calculeTotalPrevisionnelAnnuelEmpruntAnneeSuivante(){

  const resultat= parseFloat(this.calculDuMontantReportEmpruntAnneeSuivante(this.macheid))+ parseFloat(this.afficherMontantCPEmpruntAnneeSuivante(this.macheid))
   return resultat;
},

calculeTotalPrevisionnelAnnuelEmpruntAnneeUlterieur(){

  const resultat= parseFloat(this.calculDuMontantReportEmpruntAnneeUlterieure(this.macheid))+ parseFloat(this.afficherMontantCPEmpruntAnneeUlterieure(this.macheid))
   return resultat;
},

// recuperation d'ID de demande dengagement dans la table de liquidation

recupereIdDmdeEngagement(){
       let response =this.gettersDossierLiquidation.find(item=> item.decision_cf==8)
          return response.dmd_engagement_id
},

// recuperationExoDans Liquidation 
afficherExoDansLiquidation(){
  const objet = this.gettersDemandeEngagement.find(item => item.id==this.recupereIdDmdeEngagement)
   return objet.exercice
},
// afficher le montant Tresor de liquidation  && this.afficherExoDansLiquidation===this.anneeBugetaire)
MontantTresorLiquidation(){
        // let montant_tresor;
       const answer = this.gettersDemandeEngagement.find(item => item.id==this.recupereIdDmdeEngagement
       && this.afficherExoDansLiquidation==this.anneeBugetaire)
           if(answer){
            return  answer.montant_tresor
           }
    return 0
},

MontantTresorLiquidationAnneeSuivante(){
        // let montant_tresor;
       const answer = this.gettersDemandeEngagement.find(item => item.id==this.recupereIdDmdeEngagement
       && this.afficherExoDansLiquidation==this.anneeBugetaireQuiNestPasEncour)
           if(answer){
            return  answer.montant_tresor
           }
    return 0
},

MontantTresorLiquidationAnneeUlterieure(){
        // let montant_tresor;
       const answer = this.gettersDemandeEngagement.find(item => item.id==this.recupereIdDmdeEngagement
       && this.afficherExoDansLiquidation==this.anneeBugetaireQuiNestPasEncour12)
           if(answer){
            return  answer.montant_tresor
           }
    return 0
},

MontantDonsLiquidation(){
        // let montant_tresor;
       const respons = this.gettersDemandeEngagement.find(item => item.id==this.recupereIdDmdeEngagement
       && this.afficherExoDansLiquidation==this.anneeBugetaire)
           if(respons){
            return  respons.montant_don
           }
    return 0
},

MontantDonsLiquidationAnneeSuivante(){
        // let montant_tresor;
       const respons = this.gettersDemandeEngagement.find(item => item.id==this.recupereIdDmdeEngagement
       && this.afficherExoDansLiquidation==this.anneeBugetaireQuiNestPasEncour)
           if(respons){
            return  respons.montant_don
           }
    return 0
},

MontantDonsLiquidationAnneeUlterieure(){
        // let montant_tresor;
       const respons = this.gettersDemandeEngagement.find(item => item.id==this.recupereIdDmdeEngagement
       && this.afficherExoDansLiquidation==this.anneeBugetaireQuiNestPasEncour12)
           if(respons){
            return  respons.montant_don
           }
    return 0
},
MontantEmpruntLiquidation(){
        // let montant_tresor;
       const resultat = this.gettersDemandeEngagement.find(item => item.id==this.recupereIdDmdeEngagement
       && this.afficherExoDansLiquidation==this.anneeBugetaire)
           if(resultat){
            return  resultat.montant_emprunt
           }
    return 0
},

MontantEmpruntLiquidationAnneeSuivante(){
        // let montant_tresor;
       const resultat = this.gettersDemandeEngagement.find(item => item.id==this.recupereIdDmdeEngagement
       && this.afficherExoDansLiquidation==this.anneeBugetaireQuiNestPasEncour)
           if(resultat){
            return  resultat.montant_emprunt
           }
    return 0
},
MontantEmpruntLiquidationAnneeUlterieure(){
        // let montant_tresor;
       const resultat = this.gettersDemandeEngagement.find(item => item.id==this.recupereIdDmdeEngagement
       && this.afficherExoDansLiquidation==this.anneeBugetaireQuiNestPasEncour12)
           if(resultat){
            return  resultat.montant_emprunt
           }
    return 0
}





                                    
  },
  methods: {
    ...mapActions("personnelUA", [
      
    ]),

    tableToExcel(table, name){
                if (!table.nodeType) table = this.$refs.table
                var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
                window.location.href = this.uri + this.base64(this.format(this.template, ctx))
            },
formatageSommeSansFCFA:formatageSommeSansFCFA
  }
};
</script>
<style scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}

</style>
 