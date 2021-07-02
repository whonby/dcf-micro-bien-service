
<template>
  <div>
      
    
  
        <!-- <div style="text-align:center;border:4px solid blue;font-weight:bold"> <h3 style="text-align:center">TABLEAU DE BORD UA PROJETS (ANNEE EN COURS)</h3></div>
          <h3 style="text-align:center">{{AffichLibelle(formData.unite_administrative_id)}}</h3> -->
         <br>
     
  

  <div class="table-responsive text-nowrap" >
            <table class="table table-bordered table-striped">
              <div class="widget-box">
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                   
                     <!-- <li class="active" style="font-size:20px">
                      <a data-toggle="tab" href="#DEMANDE"
                        >TABLEAU DE BORD GENERAL </a
                      >
                    </li> -->
                     <!-- <li class=""  >
                      <a data-toggle="tab" href="#COMMANDE"
                        >CONSULTATION DE L'EXECUTION BUDGETAIRE</a
                      >
                    </li> -->

                      <li class="active"  style="font-size:14px">
                      <a data-toggle="tab" href="#TABLEAUBORD1"
                        >TB1 </a
                      >
                    </li>

                    <!-- <li class="" style="font-size:14px">
                      <a data-toggle="tab" href="#TABLEAUBORD2"
                        >TB2</a
                      >
                    </li> -->
                    

                    <!-- <li class="" style="font-size:14px">
                      <a data-toggle="tab" href="#TABLEAUBORD3"
                        >TB3 : EXECUTION PAR ACTIVITE</a
                      >
                    </li> -->
                     <!-- <li class="" style="font-size:14px">
                      <a data-toggle="tab" href="#TABLEAUBORD4"
                        >TB3 : D'EXECUTION PAR ACTIVITE ET BAILLEUR</a
                      >
                    </li> -->

                    

                     

                     <!-- <li class="" >
                      <a data-toggle="tab" href="#MANDAT"
                        >DOSSIER OP DIRECT</a
                      >
                    </li> -->
                    <!-- <li class="">
                      <a data-toggle="tab" href="#SYSTEME"
                        >DOSSIER OP SYSTEME</a
                      >
                    </li> -->
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                 
                
                  <!-- <div id="COMMANDE" class="tab-pane "  >
                   <RechercheExecutionBudgetaire></RechercheExecutionBudgetaire>
                  
                  </div> -->
                   <div id="TABLEAUBORD1" class="tab-pane active">
                     <TableauBordMarcheParBailleur></TableauBordMarcheParBailleur>
                  </div>

                  <!-- <div id="TABLEAUBORD2" class="tab-pane ">
                     <StituationExecutionBudgetActiviteLigne></StituationExecutionBudgetActiviteLigne>
                  </div> -->

                  <!-- <div id="TABLEAUBORD3" class="tab-pane ">
                     <SituationExecuBudgetRecapActivite></SituationExecuBudgetRecapActivite>
                  </div>

                  <div id="TABLEAUBORD4" class="tab-pane ">
                     <SituationExecutionActiviteBailleur></SituationExecutionActiviteBailleur>
                  </div>

                  <div id="test1" class="tab-pane ">
                     <testLega></testLega>
                  </div> -->
                 <!-- <div id="TABLEAUBORD4" class="tab-pane ">
                     <SituationExecutionActiviteBailleur></SituationExecutionActiviteBailleur>
                  </div>
                  <div id="TABLEAUBORD3" class="tab-pane ">
                     <SituationExecutionBudgetaireParBailleur></SituationExecutionBudgetaireParBailleur>
               
                  </div>
                   <div id="TABLEAUBORD5" class="tab-pane ">
                     <SituationExecutionBudgetaireParSection></SituationExecutionBudgetaireParSection>
               
                  </div>

                   <div id="test1" class="tab-pane ">
                     <testLega></testLega>
                  </div> 


                   <div id="MANDAT" class="tab-pane ">
                       <h3 style="text-align:center">DETAIL OP DIRECT</h3>
     
                              
                  </div> -->
                   <!-- <div id="SYSTEME" class="tab-pane" >
             45
                  </div> -->
                </div>
            
                
               

                <br />
              </div>
            </table>
          </div>
               
                             
          
  </div>
</template>

<script>
import TableauBordMarcheParBailleur from "./TableauBordMarcheParBailleur.vue"
export default {
    components:{
        TableauBordMarcheParBailleur
    },
    data() {
        
    },
}
</script>