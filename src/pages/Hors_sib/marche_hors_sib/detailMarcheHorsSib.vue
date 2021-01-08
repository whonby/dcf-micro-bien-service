
<template>
    

<div>
        <div class="container-fluid">
            


            <div class="widget-box">
              
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                                <th>Exercice Budgétaire</th>
                                <th>Procedure de passation</th>
                                <th>Objet marché</th>
                                <th>Référence marché</th>
                                <th>Montant prévu marché</th>
                                <th>Montant Budgétaire</th>
                                <th>Type de marché</th>
                                <th>Unité administrative</th>
                                <th>Statut</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="detail_marche">
                                
                                 <td class="taskOptions">
                                    {{detail_marche.exo_id}}
                                </td>
                                <td class="taskDesc" style="text-align:center">{{afficherCodeTypeProcedure(detail_marche.procedure_passation_id)}}</td>
                                <td class="taskDesc">{{detail_marche.objet}}</td>
                                <td class="taskStatus">{{detail_marche.reference_marche}}</td>
                                <td class="taskOptions">
                                    {{formatageSomme(parseFloat(detail_marche.montant_marche))}}
                                </td>
                                 <td class="taskOptions">
                                    {{formatageSomme(parseFloat(budgetDisponible))}}
                                </td>
                                <td class="taskOptions">
                                    {{afficherLibelleTypeMarche(detail_marche.type_marche_id)}}
                                </td>
                                <td class="taskOptions">
                                    {{afficherLibelleUa(detail_marche.unite_administrative_id)}}
                                </td>
                                  <td>

                         <span v-if="detail_marche.economique_id == CodeExempte(detail_marche.economique_id) ">Exemptée procedure</span>
                         <span v-else>Ligne à marché</span>
                       </td>
                               <!-- <td>{{budgetDisponible}}</td> -->
                            </tr>
                            </tbody>
                        </table>             

                    </div>
                </div>
            </div> 
        <template v-if="detail_marche.economique_id == CodeExempte(detail_marche.economique_id) ">
            <div class="widget-title">
            <ul class="nav nav-tabs">
             <li class="active"><a data-toggle="tab" href="#tab0074">Attribution</a></li>
             <li class=""><a data-toggle="tab" href="#tab00214">Bailleur</a></li>
        </ul>
          </div>
    <div class="widget-content tab-content">
<div id="tab0074" class="tab-pane active">
<executionLigneExempte :macheid="detail_marche.id"></executionLigneExempte>
    </div>


       <div id="tab00214" class="tab-pane">
                <div align="right">
             <div class="widget-content">
                 <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>
                </div>
                <componentBailleur :macheid="detail_marche.id"></componentBailleur>
                </div>
    </div>
    
        </template>

        <template v-else>
<h4 style="text-align:center;">{{afficheLeNomDesProcedure}}</h4>

            <div class="row-fluid">
                <div class="span12">
                     <template v-if="this.budgetDisponible < 10000000 ">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                 <li class="active"><a data-toggle="tab" href="#tab0145">l'offre</a></li>
                              <li class=""><a data-toggle="tab" href="#lot1">Lots</a></li>

                                <li class=""><a data-toggle="tab" href="#tab01">Reception</a></li>
                                <li class=""><a data-toggle="tab" href="#tab4">Ouverture</a></li>
                                <li class=""><a data-toggle="tab" href="#tab17">Attribution</a></li>
                                <li class=""><a data-toggle="tab" href="#tab2">Bailleur</a></li>
                                 <li class=""><a data-toggle="tab" href="#tab2025">ANRMP</a></li>
                               
                                
                                
                            </ul>
                        </div>
                        
                         <div class="widget-content tab-content">
<div id="tab0145" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterOffre" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <publication-Offre :macheid="detail_marche.id"></publication-Offre>
                         </div>
                         <div id="tab01" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                
                                    <a href="#addCotation" data-toggle="modal" class="btn btn-success" align="rigth" >Ajouter</a></div>

                      <component-cotation :macheid="detail_marche"></component-cotation>
                         </div>
                           <div id="lot1">
                             <lot-marche :macheid="detail_marche.id"></lot-marche>
                           </div>

                        <div id="tab17" class="tab-pane">
<!--                <div align="right">-->
<!--                    <div class="widget-content">-->
<!--                        <a href="#ajouterActeEffetFinancier" data-toggle="modal" class="btn btn-warning">Ajouter</a>-->
<!--                    </div>-->


<!--                </div>-->
<!--                <component-acte :macheid="detail_marche.id"></component-acte>-->
                          <ActEffeFinanciere :macheid="detail_marche.id"></ActEffeFinanciere>
                </div>


                     <div id="tab2" class="tab-pane">
                <!-- <div align="right">
                    <div class="widget-content">
                        <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div> -->
                <componentBailleur1 :macheid="detail_marche.id"></componentBailleur1>

                </div>

              <div id="tab2025" class="tab-pane">
                <!-- <div align="right">
                    <div class="widget-content">
                        <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div> -->
                <Arnmp :macheid="detail_marche.id"></Arnmp>

                </div>



                   <div id="tab4" class="tab-pane">
                   <component-ouverture :macheid="detail_marche.id"></component-ouverture>
                </div>

               </div>

                         

                    </div>
                     </template>




                     
                    <template v-else-if="this.budgetDisponible < 30000000">
<div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab01">l'offre</a></li>

                              <li class=""><a data-toggle="tab" href="#lot2">Lots</a></li>
                                <li class=""><a data-toggle="tab" href="#tab478">Reception</a></li>
                                <li class=""><a data-toggle="tab" href="#tab498">Ouverture</a></li>
                                 <li class=""><a data-toggle="tab" href="#tab41180">PV d'ouverture</a></li>
                                <li class=""><a data-toggle="tab" href="#tab78932">Analyse</a></li>
                                <li class=""><a data-toggle="tab" href="#tab7893204">Reserves CF</a></li>
                                 <li class=""><a data-toggle="tab" href="#tab4110">PV Jugement</a></li>
                                <li class=""><a data-toggle="tab" href="#tab178">Attribution</a></li>
                                <li class=""><a data-toggle="tab" href="#tab0142">bailleur</a></li>
                                <li class=""><a data-toggle="tab" href="#tab01420">ANRMP</a></li>

                            
                                
                            </ul>
                        </div>
                        
                         <div class="widget-content tab-content">

                         <div id="tab01" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterOffre" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <publication-Offre :macheid="detail_marche.id"></publication-Offre>
                         </div>
                           <div id="lot2" class="tab-pane">
                             <lot-marche :macheid="detail_marche.id"></lot-marche>
                           </div>
                        <div id="tab478" class="tab-pane">
                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                
                                    <a href="#addCotation" data-toggle="modal" class="btn btn-success" align="rigth" >Ajouter</a></div>
                               
                                        <!-- <component-etat :macheid="detail_marche.id"></component-etat> -->
                                        
                               
                                <!-- <h4>Liste des receptions de cotation</h4> -->

                      <component-cotation :macheid="detail_marche"></component-cotation>
                </div>


                   <div id="tab498" class="tab-pane">

                     <ouverture-offre :macheid="detail_marche.id"></ouverture-offre>
<!--                  <component-ouverture :macheid="detail_marche.id"></component-ouverture>-->
<!--                  <component-ouvertureMembre :macheid="detail_marche.id"></component-ouvertureMembre>-->
                </div>

                        <div id="tab41180" class="tab-pane">
                      <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterRapportOuvertureB" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
                <rapportOuverture :macheid="detail_marche.id"></rapportOuverture>

                </div>

                   <div id="tab78932" class="tab-pane">
                     <jugement :macheid="detail_marche.id"></jugement>
               
<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>
                  <div id="tab7893204" class="tab-pane">

                    <reserveCf :macheid="detail_marche.id"></reserveCf>
               
<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>

                <div id="tab4110" class="tab-pane">
<!--                <div align="right">-->
<!--                    <div class="widget-content">-->
<!--                        <a href="#ajouterPvBienservice" data-toggle="modal" class="btn btn-primary">Ajouter</a>-->
<!--                    </div>-->


<!--                </div>-->
<!--               <component-pv :macheid="detail_marche.id"></component-pv>-->

                </div>
                 <div id="tab178" class="tab-pane">

<!--                <component-acte :macheid="detail_marche.id"></component-acte>-->
                   <ActEffeFinanciere :macheid="detail_marche.id"></ActEffeFinanciere>
                </div>
                   <div id="tab0142" class="tab-pane">
                <!-- <div align="right">
                    <div class="widget-content">
                        <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div> -->
                <componentBailleur1 :macheid="detail_marche.id"></componentBailleur1>

                </div>
                 <div id="tab01420" class="tab-pane">
                
               <Arnmp :macheid="detail_marche.id"></Arnmp>

                </div>
                
                
                         </div>

                         

                    </div>
                    </template>
                      <template v-else-if="this.budgetDisponible < 60000000">
 
                     <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab8975">Offre</a></li>
                                <li ><a data-toggle="tab" href="#tab5896">Lot</a></li>
                                <li class=""><a data-toggle="tab" href="#tab78458">Lettre d'invitation CF</a></li>
                                <li class=""><a data-toggle="tab" href="#tab21230">Le mandaté</a></li>
                                <li class=""><a data-toggle="tab" href="#tab1235">Reception</a></li>
                                <li class=""><a data-toggle="tab" href="#tab78477">Ouverture</a></li>
                                  <li class=""><a data-toggle="tab" href="#tab1041">PV d'ouverture</a></li>
                                <!--<li class=""><a data-toggle="tab" href="#tab7845">D.Candidats</a></li>-->
                                <li class=""><a data-toggle="tab" href="#tab9563"> Analyse </a></li>
                                 <li class=""><a data-toggle="tab" href="#tab25401010">Reserves CF</a></li>
                                
                                <li class=""><a data-toggle="tab" href="#tab06125">PV Jugement</a></li>
                               <li class=""><a data-toggle="tab" href="#tab067458">Attribution</a></li>
                               <li class=""><a data-toggle="tab" href="#tab0143723">bailleur</a></li>
                               <li class=""><a data-toggle="tab" href="#tab014201">ANRMP</a></li>
                               
                                
                            </ul>
                        </div>
                        
                         <div class="widget-content tab-content">

                         <div id="tab8975" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterOffre" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <publication-Offre :macheid="detail_marche.id"></publication-Offre>
                         </div>

                    <div id="tab5896" class="tab-pane">


                      <lot-marche :macheid="detail_marche.id"></lot-marche>
                      <!--<add-Lot :macheid="detail_marche.id"></add-Lot>-->
                         </div>


                <div id="tab78458" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterLettreInvitation" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <invitationCf :macheid="detail_marche.id"></invitationCf>
                         </div>
 <div id="tab21230" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterMandate" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <mandate-Bs :macheid="detail_marche.id"></mandate-Bs>
                         </div>
                          <div id="tab1235" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#addCotation" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <component-cotation :macheid="detail_marche"></component-cotation>
                         </div>
                             <div id="tab444" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#addCotation" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <component-cotation :macheid="detail_marche"></component-cotation>
                         </div>
                          <div id="tab78477" class="tab-pane">
                <!-- <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterOuverture" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div> -->
                            <ouverture-offre :macheid="detail_marche.id"></ouverture-offre>
                  <!--<component-ouverture1 :macheid="detail_marche.id"></component-ouverture1>
                  <component-ouvertureMembre :macheid="detail_marche.id"></component-ouvertureMembre>-->
                </div>

                <div id="tab1041" class="tab-pane">
                      <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterRapportOuvertureB" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
                <rapportOuverture :macheid="detail_marche.id"></rapportOuverture>

                </div>

                 <div id="tab7845" class="tab-pane">
               
               
                   <dossier-Candidat :macheid="detail_marche.id"></dossier-Candidat>
                </div>
                  <div id="tab9563" class="tab-pane">
                    <jugement :macheid="detail_marche.id"></jugement>
               
<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>
                       <div id="tab25401010" class="tab-pane">

                    <reserveCf :macheid="detail_marche.id"></reserveCf>
               
<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>
                 <div id="tab06125" class="tab-pane">
<!--                 <div align="right">-->
<!--                    <div class="widget-content">-->
<!--                        <a href="#ajouterPvBienservice" data-toggle="modal" class="btn btn-primary">Ajouter</a>-->
<!--                    </div>-->


<!--                </div>-->
<!--               <component-pv :macheid="detail_marche.id"></component-pv>-->
                   <PvJugement  :macheid="detail_marche.id"></PvJugement>
                </div>
                 <div id="tab067458" class="tab-pane">
<!--                <div align="right">-->
<!--                    <div class="widget-content">-->
<!--                        <a href="#ajouterActeEffetFinancier" data-toggle="modal" class="btn btn-warning">Ajouter</a>-->
<!--                    </div>-->


<!--                </div>-->
<!--                <component-acte :macheid="detail_marche.id"></component-acte>-->
                   <ActEffeFinanciere :macheid="detail_marche.id"></ActEffeFinanciere>
                </div>

                  <div id="tab0143723" class="tab-pane">
                <!-- <div align="right">
                    <div class="widget-content">
                        <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>
                </div> -->
                <componentBailleur1 :macheid="detail_marche.id"></componentBailleur1>

                </div>
                 <div id="tab014201" class="tab-pane">
                
               <Arnmp :macheid="detail_marche.id"></Arnmp>

                </div>
                         </div>

                        

                    </div>
                    
                    </template>
                    
                    <template v-else-if="this.budgetDisponible < 100000000 ">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab001">Offre</a></li>
                                <li ><a data-toggle="tab" href="#tab0015">Lot</a></li>
                                <li class=""><a data-toggle="tab" href="#tab041">Lettre d'invitation CF</a></li>
                                <li class=""><a data-toggle="tab" href="#tab04">Mandaté</a></li>
                                <li class=""><a data-toggle="tab" href="#tab051">Reception</a></li>
                                <li class=""><a data-toggle="tab" href="#tab784">Ouverture</a></li>
                                <li class=""><a data-toggle="tab" href="#tab17041">PV d'ouverture</a></li>
                              <!--  <li class=""><a data-toggle="tab" href="#tab7884">D.Candidats</a></li>-->
                                <li class=""><a data-toggle="tab" href="#tab5498"> Analyse </a></li>
                                <li class=""><a data-toggle="tab" href="#tab2540101">Reserves CF</a></li>
                                <li class=""><a data-toggle="tab" href="#tab0612">PV Jugement</a></li>
                               <li class=""><a data-toggle="tab" href="#tab06745">Attribution</a></li>
                                <li class=""><a data-toggle="tab" href="#tab01432">bailleur</a></li>
                                <li class=""><a data-toggle="tab" href="#tab0142010">ANRMP</a></li>
                                
                                
                            </ul>
                        </div>
                        
                         <div class="widget-content tab-content">

                         <div id="tab001" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterOffre" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <publication-Offre :macheid="detail_marche.id"></publication-Offre>
                         </div>

                    <div id="tab0015" class="tab-pane">

                      <lot-marche :macheid="detail_marche.id"></lot-marche>
                     <!-- <add-Lot :macheid="detail_marche.id"></add-Lot>-->
                         </div>


                <div id="tab041" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterLettreInvitation" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <invitationCf :macheid="detail_marche.id"></invitationCf>
                         </div>
 <div id="tab04" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterMandate" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <mandate-Bs :macheid="detail_marche.id"></mandate-Bs>
                         </div>
                          <div id="tab051" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#addCotation" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <component-cotation :macheid="detail_marche"></component-cotation>
                         </div>
                             <div id="tab444" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#addCotation" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <component-cotation :macheid="detail_marche"></component-cotation>
                         </div>
                          <div id="tab784" class="tab-pane">
                            <ouverture-offre :macheid="detail_marche.id"></ouverture-offre>

                  <!--<component-ouverture1 :macheid="detail_marche.id"></component-ouverture1>
                  <component-ouvertureMembre :macheid="detail_marche.id"></component-ouvertureMembre>-->
                </div>
                


                <div id="tab17041" class="tab-pane">
                      <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterRapportOuvertureB" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
                <rapportOuverture :macheid="detail_marche.id"></rapportOuverture>

                </div>

                 <div id="tab7884" class="tab-pane">
               
               
                   <dossier-Candidat :macheid="detail_marche.id"></dossier-Candidat>
                </div>
                  <div id="tab5498" class="tab-pane">

                    <jugement :macheid="detail_marche.id"></jugement>
               
<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>
                   <div id="tab2540101" class="tab-pane">

                    <reserveCf :macheid="detail_marche.id"></reserveCf>
               
<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>
                 <div id="tab0612" class="tab-pane">
<!--                 <div align="right">-->
<!--                    <div class="widget-content">-->
<!--                        <a href="#ajouterPvBienservice" data-toggle="modal" class="btn btn-primary">Ajouter</a>-->
<!--                    </div>-->


<!--                </div>-->
<!--               <component-pv :macheid="detail_marche.id"></component-pv>-->
                   <PvJugement  :macheid="detail_marche.id"></PvJugement>
                </div>
                 <div id="tab06745" class="tab-pane">
<!--                <div align="right">-->
<!--                    <div class="widget-content">-->
<!--                        <a href="#ajouterActeEffetFinancier" data-toggle="modal" class="btn btn-warning" >Ajouter</a>-->
<!--                        &lt;!&ndash; <button class="btn btn-primary" title="veillez terminer le proccessuss de jugement des offres avant  de passer à autre etape !" disabled v-else > Ajouter</button> &ndash;&gt;-->
<!--                   -->
<!--                   -->
<!--                    </div>-->


<!--                </div>-->
<!--                <component-acte :macheid="detail_marche.id"></component-acte>-->
                   <ActEffeFinanciere :macheid="detail_marche.id"></ActEffeFinanciere>
                </div>

                   <div id="tab01432" class="tab-pane">
                <!-- <div align="right">
                    <div class="widget-content">
                        <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div> -->
                <componentBailleur1 :macheid="detail_marche.id"></componentBailleur1>

                </div>
                 <div id="tab0142010" class="tab-pane">
                
               <Arnmp :macheid="detail_marche.id"></Arnmp>

                </div>
                         </div>

                        

                    </div>
                    
                     </template>
  <template v-else-if="100000000 < this.budgetDisponible">
     <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                   <!--<li class="active"><a data-toggle="tab" href="#tab001" title="tansmission du DAO a la DMP">Transmission</a></li>
                                 <li class=""><a data-toggle="tab" href="#tab010">ANO DMP DAO</a></li>
                                 <li class=""><a data-toggle="tab" href="#tab020">ANO Bailleur DAO</a></li>-->
                                 <li class="active"><a data-toggle="tab" href="#tab4569" title="L'offres">L'Offre</a></li>
                              <li class=""><a data-toggle="tab" href="#lot3" title="Lot">Lots</a></li>

                              <li class=""><a data-toggle="tab" href="#tab0001" title="lettre d'invitation">Lettre I</a></li>
                                <li class=""><a data-toggle="tab" href="#tab04" title="">Mandaté</a></li>
                                 <li class=""><a data-toggle="tab" href="#tab0045" title="reception des offres">Reception</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab02">Reception de l'offre</a></li> -->
                                <li class=""><a data-toggle="tab" href="#ouverture">Ouverture</a></li>
                                
                                <!--<li class=""><a data-toggle="tab" href="#tab5">Dossier Candidat</a></li>-->
                                <li class=""><a data-toggle="tab" href="#tab45" title="rapport ouverture">PV Ouverture</a></li>
                                <li class=""><a data-toggle="tab" href="#tab6" title="jugement des offres">Analyse</a></li>
                                 <li class=""><a data-toggle="tab" href="#tab25401031" title="">Reserves CF</a></li>
                               
                                <li class=""><a data-toggle="tab" href="#tab7" title="rapport d'évaluation combiné">PV Jugement</a></li>

                                 <li class=""><a data-toggle="tab" href="#tab27" title="demande ANO/DMP">D.DMP</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab028" title="ANO/DMP attribution">A.ANO</a></li> -->
                                      
                                      <li class=""><a data-toggle="tab" href="#tab28" title="demande ANO Bailleur"> D.Bailleur </a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab0008" title="ANO bailleur attribution">A.Bailleur </a></li> -->

                                <li class=""><a data-toggle="tab" href="#tab10">Attribution</a></li>

                                <li class=""><a data-toggle="tab" href="#tab0143720">Bailleur</a></li>

                                <li class=""><a data-toggle="tab" href="#tab01437205">ANRMP</a></li>
                               
                                
                            </ul>
                        </div>
                        
                         <div class="widget-content tab-content">
                            
                             <!--<div id="tab001" class="tab-pane ">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterT" data-toggle="modal" class="btn btn-primary" align="rigth">Ajouter</a></div>
                                <h4>Publication de l'offre</h4>

                                <componentTransmissionDao :macheid="detail_marche.id"></componentTransmissionDao>
                         </div>


                          <div id="tab010" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterDemandeAno" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <h4>Publication de l'offre</h4>

                            <componentAvis :macheid="detail_marche.id"></componentAvis>

                         </div>


                          <div id="tab020" class="tab-pane ">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                 <componentAvisBailleurSurTransmision :macheid="detail_marche.id"></componentAvisBailleurSurTransmision>
                     
                         </div>-->

                       <div id="tab4569" class="tab-pane active ">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterOffre" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>


                      <publication-Offre :macheid="detail_marche.id"></publication-Offre>
                         </div>

                           <div id="lot3" class="tab-pane ">

                             <lot-marche :macheid="detail_marche.id"></lot-marche>
                           </div>

                              <div id="tab0001" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterLettreInvitation" data-toggle="modal" class="btn btn-warning" align="rigth">Ajouter</a></div>

                      <invitationCf :macheid="detail_marche.id"></invitationCf>
                         </div>

                         <div id="tab04" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterMandate" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <mandate-Bs :macheid="detail_marche.id"></mandate-Bs>
                         </div>



                         <div id="tab0045" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                
                                    <a href="#addCotation" data-toggle="modal" class="btn btn-success" align="rigth" >Ajouter</a></div>
                               
                                        <!-- <component-etat :macheid="detail_marche.id"></component-etat> -->
                                        
                               
                                <h4>Liste des receptions des plis</h4>

                      <component-cotation :macheid="detail_marche"></component-cotation>
                         </div>


                         
                   <div id="ouverture" class="tab-pane">
                     <ouverture-offre :macheid="detail_marche.id"></ouverture-offre>
               
                  <!--<component-ouverture :macheid="detail_marche.id"></component-ouverture>-->

                 <!-- <component-ouvertureMembre :macheid="detail_marche.id"></component-ouvertureMembre>-->
                </div>
                      

                 <div id="tab5" class="tab-pane">
                   <dossierCandidat :macheid="detail_marche.id"></dossierCandidat>
                </div>

                  <div id="tab45" class="tab-pane">
               <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterRapportOuvertureB" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
                <rapportOuverture :macheid="detail_marche.id"></rapportOuverture>

                </div>


                   <div id="tab6" class="tab-pane">

<jugement :macheid="detail_marche.id"></jugement>
<!--                <component-analyse :macheid="detail_marche.id"></component-analyse>-->

                </div>
                 <div id="tab25401031" class="tab-pane">

                    <reserveCf :macheid="detail_marche.id"></reserveCf>
               
<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>

                  <div id="tab7" class="tab-pane">



                    <PvJugement  :macheid="detail_marche.id"></PvJugement>
<!--               <componentPv :macheid="detail_marche.id"></componentPv>-->


                </div>



<!--                 
                <div id="tab33" class="tab-pane">
                <div align="right">
                    <div class="widget-content">

                        <a href="#ajouterDemandeAno" data-toggle="modal" class="btn btn-warning" v-if="listePVDemandePV(macheid)">Ajouter</a>
                        <button class="btn btn-warning" title="La procedure n'est pas envore termine ou il n'y a pas de pv disponible" disabled v-else>Ajouter</button>
                    </div>

                </div>
                 </div> -->

                   <!-- <div id="tab00047" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterDemandeAno" data-toggle="modal" class="btn btn-warning">Ajouter</a>
                    </div>


                </div>
               <componentDemandeAno :macheid="detail_marche.id"> </componentDemandeAno>

                </div> -->



                  <div id="tab27" class="tab-pane">

                    <AnoDMP :macheid="detail_marche.id"></AnoDMP>
<!--                 <componentDemandeAno :macheid="detail_marche.id"> </componentDemandeAno>-->

                </div>

                  <div id="tab028" class="tab-pane">

<!--               <div align="right">-->
<!--                    <div class="widget-content">-->
<!--                        <a href="#ajouterD" data-toggle="modal" class="btn btn-primary">Ajouter</a>-->
<!--                    </div>-->


<!--                </div>-->
                 <componentAvisAnoCf :macheid="detail_marche.id"> </componentAvisAnoCf>

                </div>




                  <div id="tab28" class="tab-pane">
<!--                    44444-->
<!--                       <div align="right">-->
<!--                    <div class="widget-content">-->
<!--                        <a href="#ajouterActeEffetFinancier" data-toggle="modal" class="btn btn-warning" v-if="listeAvisAnoBailleur(macheid)">Ajouter</a>-->
<!--                          <button class="btn btn-primary"  title="veillez recommencer le jugement , car l'Avis Bailleur est Objection" disabled v-else  >Ajouter</button>-->
<!--                   -->
<!--                    </div>-->


<!--                </div>-->

                    <AnoBailleur :macheid="detail_marche.id"></AnoBailleur>
              
<!--                 <componentAvisBailleurCf :macheid="detail_marche.id"> </componentAvisBailleurCf>-->

                </div>

                        <div id="tab10" class="tab-pane">
                    <ActEffeFinanciere :macheid="detail_marche.id"></ActEffeFinanciere>
<!--                <component-acte :macheid="detail_marche.id"></componentActe>-->

                </div>




                   <div id="tab0143720" class="tab-pane">
                <!-- <div align="right">
                    <div class="widget-content">
                        <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div> -->
                <componentBailleur1 :macheid="detail_marche.id"></componentBailleur1>

                </div>

                <div id="tab01437205" class="tab-pane">
                
               <Arnmp :macheid="detail_marche.id"></Arnmp>

                </div>
                








                         </div>

                         

                    </div>
</template>
          <template v-else>
                   <p style="font-size:14px;text-align:center;color:red">PAS DE PROCEDURE</p>
                     </template>
                </div>
            </div>
        </template>

           
              <!-- <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau Marché</a>
       
      </div> -->
        </div>
          

</div>


</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    //import moment from 'moment';
    import componentCotation from '../../bien_service/dossierDetailMarchePs/dossierComponentPs/componentCotation';
     //import componentEtat from '../dossierDetailMarchePs/dossierComponentEtat/componentEtat';
     import componentOuverture from '../../bien_service/dossierDetailMarchePs/dossierComponentOuverture/componentOuverture';  
 //  import componentActe from '../dossierDetailMarchePs/dossierComponentActe/componentActe' ;
    import publicationOffre from '../../bien_service/DossierPso/publicationOffre/publicationOffre';
   // import addLot from '../dossierLot/addLot';
        import invitationCf from '../../bien_service/DossierPso/lettreInvitation/invitationCf';
 import mandateBs from '../../bien_service/DossierPso/mandaté/mandateBs';
 //import componentOuverture1 from '../dossierDetailMarcheProcedureSimplifierAvecComite/dossierComponentOuverture/componentOuverture';
//import dossierCandidat from '../DossierPso/dossierCandidat/dossierCandidat'
    import dossierCandidat from "@/pages/bien_service/DossierPso/dossierCandidat/dossierCandidat";
   // import componentOuvertureMembre from '../dossierDetailMarcheProcedureSimplifierAvecComite/dossierComponentOuvertureCojoMembre/componentOuvertureMembre';
   // import componentAnalyse from '../dossierDetailMarcheProcedureSimplifierAvecComite/dossierComponentAnalyse/componentAnalyse';
   //  import componentPv from '../dossierDetailMarcheProcedureSimplifierAvecComite/dossierComponentPv/componentPv';
import rapportOuverture from '../../bien_service/dossierDetailMarcheProcedureSimplifierAvecComite/dossierRappportOuverture/rapportOuverture';
     
     import componentBailleur1 from '../../bien_service/component/bailleurMarche';
   import componentBailleur from '../../bien_service/dossierDetailMarchePs/dossierBailleur/componentBailleur';

      import executionLigneExempte from '../../bien_service/executionLigneExempte/executionLigneExempte';
  import reserveCf from '../../bien_service/dossierReserveCF/reserveCf';
    //    import componentDemandeAno from '../dossierDetailMarcheAOI_AON/dossierDemande_ano_cf/componentDemandeAno';
        import componentAvisAnoCf from '../../bien_service/dossierDetailMarcheAOI_AON/dossierAvisAnoCf/componentAvisAnoCf';
     //    import componentAvisBailleurCf from '../dossierDetailMarcheAOI_AON/dossierAvisBailleurAvecCf/componentAvisBailleurCf'
 import Arnmp from '../../bien_service/dossierArnmp/Arnmp';
import LotMarche from "@/pages/bien_service/component/LotMarche";
import OuvertureOffre from "@/pages/bien_service/component/OuvertureOffre/OuvertureOffre";
import PvJugement from "@/pages/bien_service/component/Jugement/pv/PvJugement";
    import 'vue-search-select/dist/VueSearchSelect.css'
import { formatageSomme } from "../../../../src/Repositories/Repository";
  import Jugement from "@/pages/bien_service/component/Jugement/Jugement";
  import AnoDMP from "@/pages/bien_service/component/AnoDMP/AnoDMP";
  import AnoBailleur from "@/pages/bien_service/component/AnoBailleur/AnoBailleur";
    import ActEffeFinanciere from "@/pages/bien_service/component/ActEffetFinancier/ActEffeFinanciere";
    export default {
       
        components:{
          ActEffeFinanciere,
          AnoBailleur,
          AnoDMP,
          PvJugement,
          Jugement,
          OuvertureOffre,
            componentCotation,
          LotMarche,
          componentBailleur1,
            componentOuverture,
            reserveCf,
            publicationOffre,
            rapportOuverture,
Arnmp,
invitationCf,
mandateBs,
dossierCandidat,
 //componentOuverture1,
           // componentOuvertureMembre,
          //  componentAnalyse,
//componentPv,
 
           
     componentBailleur,     
            
            
       
         

         //   componentDemandeAno,

            componentAvisAnoCf,
        //    componentAvisBailleurCf,
            executionLigneExempte


        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                    
              marcheid:""
            };
        },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getPersonnaliserMarchehorSib.find(
       idmarche => idmarche.id == this.$route.params.id
   )
   console.log(this.detail_marche);
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {

            ...mapGetters("bienService", ["getterCojos","mandate","getMandatPersonnaliserVise", "procedurePassations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres",
               "getterDossierCandidats","marches","gettersOuverturePersonnaliser","getterAnalyseDossiers",
               "getActeEffetFinancierPersonnaliser","gettersCotationPersonnaliser","typeMarches","getterAnoDMPBailleur"
               
               
              ]),
 ...mapGetters("horSib", ["gettersMarcheHorsib","getPersonnaliserMarchehorSib"]),
               
              ...mapGetters('parametreGenerauxBudgetaire', ['structures_budgetaires', 
  'plans_budgetaires']),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
           
            ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "afficheTransfertValider",
      "afficheBudgetActive",
      "getterligneExempter",
       "budgetEclate"
      // "chapitres",
      // "sections"
    ]),
     CodeExempte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterligneExempter.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },
afficheLeNomDesProcedure(){
    if( this.budgetDisponible < 10000000){
        return "Procédure Simplifiée de demande de Cotation(PSC Sans comité)"
    }
    else if(this.budgetDisponible < 30000000)
    {
return "Procédure Simplifiée de demande de Cotation(PSC Avec comité)"
    }
    else if(this.budgetDisponible < 60000000 )
    {
return "Procédure Simplifiée à compétition Limitée(PSL)"
    }
    else if(this.budgetDisponible < 100000000 )
    {
return "Procédure Simplifiée à compétition Ouverte(PSO)"
    }
     else if(100000000 < this.budgetDisponible)
    {
return "Appel d'Offre Ouvert(AON ou AOI)"
    }
    

  return null  


},


listeAvisAnoBailleur(){
       return id =>{
           if(id!=null && id!=""){
               const resultatAvis = this.getterAnoDMPBailleur.find(idDemande =>idDemande.marche_id==id
               && idDemande.avis_bail== 0)
               return resultatAvis
           }
           return null
       }
   },


// activationButtonJugement(){
//     return id =>{
//         if(id!=null && id!=""){
//             let objet = this.getterDossierCandidats.find(item =>item.marche_id==id && item.numero_dossier==null)
//             return objet  
//         }
//         return null
//     }
    
// },

// activedButtonActeEffet(){
//      return id =>{
//         if(id!=null && id!=""){
//             let objet = this.getterAnalyseDossiers.find(item =>item.marche_id==id && item.dossier_candidat_id==null)
//             return objet  
//         }
//         return null
//     }
// },
afficherLibelleTypeMarche(){
 return id =>{
     if(id!=null && id!=""){
       let response = this.typeMarches.find(item => item.id==id)
       if(response){
         return response.libelle
       }
     }
   }
 },

 afficherLibelleUa(){
   return id =>{
     if(id!=null && id!=""){
       let response = this.uniteAdministratives.find(item => item.id==id)
       if(response){
         return response.libelle
       }
     }
   }
 },


  afficherCodeTypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.procedurePassations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },



 


        afficherLibelleTypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.procedurePassations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     afficherLaDotationIntial() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id);

      if (qtereel) {
        return qtereel.dotation;
      }
      return 0
        }
      };
    },

MontantTotal(){
  
    
    var montant = this.groupe.ua_budget_general.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0); 
      if(isNaN(montant)) return null
      return montant
}, 
budgetConsommerBienService(){
  return id => {
    if(id !=""){
    return this.getMandatPersonnaliserVise.filter(element => element.economique_id == this.detail_marche.economique_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
    }
    
  }
},
budgetConsommerTransfert(){
  return id => {
    if(id !=""){
    return this.afficheTransfertValider.filter(element => element.ligne_budgetaire_id == this.detail_marche.economique_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
      
    }
    
  }
},
// budgetConsommerDesModule() {
//       const val = parseInt(this.budgetConsommerBienService(this.detail_marche.economique_id)) + parseInt(this.budgetConsommerTransfert(this.detail_marche.economique_id));
      
//        if (val) {
//         return parseInt(val).toFixed(0);
//       }
      
//       return 0
//     },

// budgetDisponible() {
//       const val = parseInt(this.afficherLaDotationIntial(this.detail_marche.economique_id)) ;
      
//        if (val) {
//         return parseInt(val).toFixed(0);
//       }
      
//       return 0
//     },


budgetConsommerDesModule() {
      const val = parseInt(this.budgetConsommerBienService(this.detail_marche.economique_id)) + parseInt(this.budgetConsommerTransfert(this.detail_marche.economique_id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

budgetDisponible() {
  if(this.detail_marche.sib==1){
 const val = parseFloat(this.afficherLaDotationIntial(this.detail_marche.economique_id)) - parseFloat(this.budgetConsommerDesModule) ;
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
  }
  else{
const val = parseFloat(this.afficherLaDotationIntial1(this.detail_marche.economique_id)) - parseFloat(this.budgetConsommerDesModule);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
  }
      
    },

 afficherLaDotationIntial1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheBudgetActive.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },



        },
        
        methods: {
            ...mapActions("bienService", ['ajouterCotation' , 'modifierCotation','supprimerCotation']),
            ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise","ajouterSanction"]),
            // 
          
isFormulaireDossierCand(){
                this.isFormulaireDossierCandidature=true
                this.isButtunAddDossierCandidat=false
                this.isDetailDossierCandidature=false
            },

formatageSomme:formatageSomme,



                 marcheDetail(){
                return  marche_id=>{
                    if (marche_id!="") {
                        const vM=this;
                       // console.log("Marche detail")
                        let Objet=this.marches.find(idmarche => idmarche.id == marche_id)
                        if(Objet!=undefined){
                           vM.formData.type_appel=Objet.procedure_passation.type_procedure.libelle;
                            vM.formData.imputation=Objet.imputation;
                            vM.formDossierCadidature.procedure_passation_id=Objet.procedure_passation.id;
                            vM.formDemande.ref_marche=Objet.reference_marche
                        }
                        return  this.marches.find(idmarche => idmarche.id == marche_id
                        )
                    }
                }

            },

    //            ajouterEtatLocal(){
    //      this.ajouterEtatProcedure(this.formEtat)
    //      this.formEtat={
    //          date_realisation:"",
    //          libelle_etat:"reception de la cotation"
    //      }
    //  },

              retourListeEntreprise(){
                 this.$router.push({ name: 'marche' })
            },
           
           
      
        }
    };
</script>
