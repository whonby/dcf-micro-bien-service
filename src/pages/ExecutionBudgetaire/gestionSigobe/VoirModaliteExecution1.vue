
<template>
  <div>
    
    <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 
        <br>
        <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <!-- <th style="text-align:center;font-size:20px;color:#000">Execice en cours</th> -->
          <th style="text-align: center; font-size: 20px; color: #000">
            Unité administrative
          </th>

          <th
            style="text-align: center; font-size: 20px; color: #000"
            
          >
            TOTAL DOSSIER
          </th>
          

          <th
            style="text-align: center; font-size: 20px; color: #000"
            
          >
            DOSSIER EN ATTENTE
          </th>

          

          <th
            style="text-align: center; font-size: 20px; color: #000"
            
          >
            DOSSIER DIFFERE
          </th>

         

          <th
            style="text-align: center; font-size: 20px; color: #000"
            
          >
            DOSSIER REJETE
          </th>

         

          <th
            style="text-align: center; font-size: 20px; color: #000"
            
          >
            DOSSIER VISE
          </th>
<th
            style="text-align: center; font-size: 20px; color: #000"
            title="DOSSIER VISE AVEC OBSERVATION"
          >
            DOSSIER VISE AVEC OB
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <!-- <td style="text-align:center;font-size:20px;color:#000">
{{anneeAmort}}
            </td> -->
          <td style="text-align: center; font-size: 20px; color: #000">
            {{ idUniteAdministrative(marcheid) }}
          </td>
          <td>
            <button
              class="btn btn"
              style="
                font-weight: bolder;
                font-size: 18px;
                width: 100%;
              "
            >
              <span style="font-weight: bolder; font-size: 18px">{{
               OpGlobalUa(marcheid)
              }}</span>
            </button>
          </td>
          <td>
            <button
              class="btn btn-info tailBtn"
              style="
                font-weight: bolder;
                color: #fff;
                font-size: 18px;
                width: 100%;
              "
              v-on:click="clickBoutonEnAttente()"
            >
              <span style="font-weight: bolder; color: #fff; font-size: 18px">{{
                
                ToutOpEnAttente(marcheid)
              }}</span>
            </button>
            
          </td>
          <td>
            <button
              class="btn btn-warning tailBtn"
              style="
                font-weight: bolder;
                color: #fff;
                font-size: 18px;
                width: 100%;
              "
              v-on:click="clickBoutonDiffere()"
            >
              <span style="font-weight: bolder; color: #fff; font-size: 18px">{{
                  ToutOpDifere(marcheid)
              }}</span>
            </button>
          </td>
          <td>
            <button
              class="btn btn-danger tailBtn"
              style="
                font-weight: bolder;
                color: #fff;
                font-size: 18px;
                width: 100%;
              "
              v-on:click="clickBoutonRejete()"
            >
              <span style="font-weight: bolder; color: #fff; font-size: 18px">{{
                  ToutOpRejete(marcheid)
              }}</span>
            </button>
          </td>
          <td>
            <button
              class="btn btn-success tailBtn"
              style="
                font-weight: bolder;
                color: #fff;
                font-size: 18px;
                width: 100%;
                
              "
              v-on:click="clickBoutonVisé()"
            >
              <span style="font-weight: bolder; color: #fff; font-size: 18px">{{
                  ToutOpVise(marcheid)
              }}</span>
            </button>
          </td>
          <td>
            <button
              class="btn btn-success tailBtn"
              style="
                font-weight: bolder;
                color: #fff;
                font-size: 18px;
                width: 100%;
                
              "
              v-on:click="clickBoutonViséObservation()"
            >
              <span style="font-weight: bolder; color: #fff; font-size: 18px">{{
                  ToutOpViseO(marcheid)
              }}</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
         <div class="widget-box collapsible">
          <!-- <div class="widget-title" style="background-color: coral;color:#fff !important;font-size:15px"> <a href="#collapseOne" data-toggle="collapse"> <span class="icon"><i class="icon-sitemap" ></i></span>
            <h5 style="color:#fff !important;font-size:20px">PROCEDURES DE DROIT COMMUN </h5>
            </a> </div> -->
           
          
          <div class="collapse in" id="collapseOne">
              
        <div class="widget-box collapsible">
       <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px;"> <a href="#ENGAGEMENTDIRECT" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" ></i></span>
            <h5 style="background-color: #fff!important;color:#000!important;font-size:15px;">ENGAGEMENT DIRECT </h5>
            </a> 
             
    
       <button   class="btn  btn-info" style="font-size:15px; margin-left:15%" v-on:click="clickBoutonEnAttente()"> <span  style="font-size:20px;"  >En Attente ({{NombreDemandeEnAttenteEd(marcheid)}})</span></button>
         <button   class="btn  btn-warning" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonDiffere()"> <span  style="font-size:20px;"  >Différé ({{NombreDemandeDiffereEd(marcheid)}})</span></button>
       <button   class="btn  btn-danger" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonRejete()"> <span   style="font-size:20px;" >Réjeté ({{NombreDemandeRejeteEd(marcheid)}})</span></button>
      <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonVisé()"> <span  style="font-size:20px;"  >Visé ({{NombreDemandeViseEd(marcheid)}})</span></button>
      <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonViséObservation()"> <span  style="font-size:20px;"  >Visé avec Observation ({{NombreDemandeViseObservationEd(marcheid)}})</span></button> 
    
            </div>
             <div class="collapse" id="ENGAGEMENTDIRECT">
<div class="widget-box collapsible">
    <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:80px"> <a href="#DEMANDEENGAGAMENT" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#000!important;font-size:15px;">DEMANDE</h5>
            </a> 
            
             <!-- <button   class="btn  btn-info" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonEnAttente()"> <span  style="font-size:20px;"  >En Attente ({{NombreDemandeEnAttenteEd(marcheid)}})</span></button>
               <button   class="btn  btn-warning" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonDiffere()"> <span  style="font-size:20px;"  >Différé ({{NombreDemandeDiffereEd(marcheid)}})</span></button> 
                 <button   class="btn  btn-danger" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonRejete()"> <span   style="font-size:20px;" >Réjeté ({{NombreDemandeRejeteEd(marcheid)}})</span></button> 
                   <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonVisé()"> <span  style="font-size:20px;"  >Visé ({{NombreDemandeViseEd(marcheid)}})</span></button> 
                     <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonViséObservation()"> <span  style="font-size:20px;"  >Visé avec Observation ({{NombreDemandeViseObservationEd(marcheid)}})</span></button>   -->
            </div>
            
            <div class="collapse" id="DEMANDEENGAGAMENT" style="font-size:15px; margin-left:110px" v-if="editMandat.test==0"><ListeDemandeEngagement :macheid="marcheid"></ListeDemandeEngagement></div>
             <div class="collapse" id="DEMANDEENGAGAMENT" style="font-size:15px; margin-left:110px" v-if="editMandat.test==2"><ListeDemandeEngagementDifere :macheid="marcheid"></ListeDemandeEngagementDifere></div>
              <div class="collapse" id="DEMANDEENGAGAMENT" style="font-size:15px; margin-left:110px" v-if="editMandat.test==3"><ListeDemandeEngagementRejete :macheid="marcheid"></ListeDemandeEngagementRejete></div>
               <div class="collapse" id="DEMANDEENGAGAMENT" style="font-size:15px; margin-left:110px" v-if="editMandat.test==4"><ListeDemandeEngagementVise :macheid="marcheid"></ListeDemandeEngagementVise></div>
                <div class="collapse" id="DEMANDEENGAGAMENT" style="font-size:15px; margin-left:110px" v-if="editMandat.test==5"><ListeDemandeEngagementViseObservation :macheid="marcheid"></ListeDemandeEngagementViseObservation></div>
           
           
            <br>
            <!-- DEBUT LIQUIDATION -->
            <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:80px"> <a href="#LIQUIDATION" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#000!important;font-size:15px;">LIQUIDATION</h5>
            </a> 
            <!-- <button   class="btn  btn-info" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonEnAttente()"> <span  style="font-size:20px;"  >En Attente ({{NombreDemandeEnAttenteEd(marcheid)}})</span></button>
               <button   class="btn  btn-warning" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonDiffere()"> <span  style="font-size:20px;"  >Différé ({{NombreDemandeDiffereEd(marcheid)}})</span></button> 
                 <button   class="btn  btn-danger" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonRejete()"> <span   style="font-size:20px;" >Réjeté ({{NombreDemandeRejeteEd(marcheid)}})</span></button> 
                   <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonVisé()"> <span  style="font-size:20px;"  >Visé ({{NombreDemandeViseEd(marcheid)}})</span></button> 
                     <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonViséObservation()"> <span  style="font-size:20px;"  >Visé avec Observation ({{NombreDemandeViseObservationEd(marcheid)}})</span></button>   -->
             <!-- <button   class="btn  btn-success" style="font-size:15px; margin-left:73%" > <span    >Voir Autres Decision</span></button>  -->
            </div>
            
            
             <!-- <div class="collapse" id="LIQUIDATION" style="font-size:15px; margin-left:110px"><ListeDesLiquidation :macheid="marcheid"></ListeDesLiquidation></div> -->
               <div class="collapse" id="LIQUIDATION" style="font-size:15px; margin-left:110px" v-if="editMandat.test==0"><ListeDesLiquidation :macheid="marcheid"></ListeDesLiquidation></div>
             <div class="collapse" id="LIQUIDATION" style="font-size:15px; margin-left:110px" v-if="editMandat.test==2"><ListeDesLiquidationDifere :macheid="marcheid"></ListeDesLiquidationDifere></div>
              <div class="collapse" id="LIQUIDATION" style="font-size:15px; margin-left:110px" v-if="editMandat.test==3"><ListeDesLiquidationRejete :macheid="marcheid"></ListeDesLiquidationRejete></div>
               <div class="collapse" id="LIQUIDATION" style="font-size:15px; margin-left:110px" v-if="editMandat.test==4"><ListeDesLiquidationVise :macheid="marcheid"></ListeDesLiquidationVise></div>
                <div class="collapse" id="LIQUIDATION" style="font-size:15px; margin-left:110px" v-if="editMandat.test==5"><ListeDesLiquidationViseObservation :macheid="marcheid"></ListeDesLiquidationViseObservation></div>
             <!-- DEBUT MANDAT -->
             <br>
            <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:80px"> <a href="#MANDAT1" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#000!important;font-size:15px;">MANDAT</h5>
            </a> 
           
            <!-- <button   class="btn  btn-info" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonEnAttente()"> <span  style="font-size:20px;"  >En Attente ({{NombreLiquidationEnAttenteEd(marcheid)}})</span></button>
               <button   class="btn  btn-warning" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonDiffere()"> <span  style="font-size:20px;"  >Différé ({{NombreLiquidationDiffereEd(marcheid)}})</span></button> 
                 <button   class="btn  btn-danger" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonRejete()"> <span   style="font-size:20px;" >Réjeté ({{NombreLiquidationRejeteEd(marcheid)}})</span></button> 
                   <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonVisé()"> <span  style="font-size:20px;"  >Visé ({{NombreLiquidationViseEd(marcheid)}})</span></button> 
                     <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonViséObservation()"> <span  style="font-size:20px;"  >Visé avec Observation ({{NombreLiquidationViseObservationEd(marcheid)}})</span></button>   -->
            </div>
            
              <div class="collapse" id="MANDAT1" style="font-size:15px; margin-left:110px" v-if="editMandat.test==0"><ListeMandat :macheid="marcheid"></ListeMandat></div>

             <div class="collapse" id="MANDAT1" style="font-size:15px; margin-left:110px" v-if="editMandat.test==2"><ListeMandatDifere :macheid="marcheid"></ListeMandatDifere></div>
              <div class="collapse" id="MANDAT1" style="font-size:15px; margin-left:110px" v-if="editMandat.test==3"><ListeMandatRejete :macheid="marcheid"></ListeMandatRejete></div>
               <div class="collapse" id="MANDAT1" style="font-size:15px; margin-left:110px" v-if="editMandat.test==4"><ListeMandatVise :macheid="marcheid"></ListeMandatVise></div>
                <div class="collapse" id="MANDAT1" style="font-size:15px; margin-left:110px" v-if="editMandat.test==5"><ListeMandatViseObservation :macheid="marcheid"></ListeMandatViseObservation></div>
    
    <br>

    <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px; margin-left:80px"> <a href="#OPSYSTEME" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#000!important;font-size:15px;">OP SYSTEME</h5>
            </a> 
           
            <!-- <button   class="btn  btn-info" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonEnAttente()"> <span  style="font-size:20px;"  >En Attente ({{NombreLiquidationEnAttenteEd(marcheid)}})</span></button>
               <button   class="btn  btn-warning" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonDiffere()"> <span  style="font-size:20px;"  >Différé ({{NombreLiquidationDiffereEd(marcheid)}})</span></button> 
                 <button   class="btn  btn-danger" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonRejete()"> <span   style="font-size:20px;" >Réjeté ({{NombreLiquidationRejeteEd(marcheid)}})</span></button> 
                   <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonVisé()"> <span  style="font-size:20px;"  >Visé ({{NombreLiquidationViseEd(marcheid)}})</span></button> 
                     <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonViséObservation()"> <span  style="font-size:20px;"  >Visé avec Observation ({{NombreLiquidationViseObservationEd(marcheid)}})</span></button>   -->
            </div>
             <div class="collapse" id="OPSYSTEME" style="font-size:15px; margin-left:110px" v-if="editMandat.test==0"><ListeOpSysteme :macheid="marcheid"></ListeOpSysteme></div>

             <div class="collapse" id="OPSYSTEME" style="font-size:15px; margin-left:110px" v-if="editMandat.test==2"><ListeOpSystemeDifere :macheid="marcheid"></ListeOpSystemeDifere></div>
              <div class="collapse" id="OPSYSTEME" style="font-size:15px; margin-left:110px" v-if="editMandat.test==3"><ListeOpSystemeRejete :macheid="marcheid"></ListeOpSystemeRejete></div>
               <div class="collapse" id="OPSYSTEME" style="font-size:15px; margin-left:110px" v-if="editMandat.test==4"><ListeOpSystemeVise :macheid="marcheid"></ListeOpSystemeVise></div>
                <div class="collapse" id="OPSYSTEME" style="font-size:15px; margin-left:110px" v-if="editMandat.test==5"><ListeOpSystemeViseObservation :macheid="marcheid"></ListeOpSystemeViseObservation></div>
    
    </div>

             </div>
             
          <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px"> <a href="#ENGAGEMENTBONCOMMANDE" data-toggle="collapse"> <span class="icon"><i class=" icon-arrow-down" ></i></span>
            <h5 style="background-color: #fff!important;color:#000!important;font-size:15px;">ENGAGEMENT PAR BON DE COMMANDE</h5>
            </a> 
             <button   class="btn  btn-info" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonEnAttente2()"> <span  style="font-size:20px;"  >En Attente ({{NombreDemandeEnAttenteBonCmd(marcheid)}})</span></button>
         <button   class="btn  btn-warning" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonDiffere2()"> <span  style="font-size:20px;"  >Différé ({{NombreDemandeDiffereBonCmd(marcheid)}})</span></button>
       <button   class="btn  btn-danger" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonRejete2()"> <span   style="font-size:20px;" >Réjeté ({{NombreDemandeRejeteBonCmd(marcheid)}})</span></button>
      <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonVisé2()"> <span  style="font-size:20px;"  >Visé ({{NombreDemandeViseBonCmd(marcheid)}})</span></button>
      <button   class="btn  btn-success" style="font-size:15px; margin-left:7%" v-on:click="clickBoutonViséObservation2()"> <span  style="font-size:20px;"  >Visé avec Observation ({{NombreDemandeViseObservationBonCmd(marcheid)}})</span></button> 
    
            </div>
            <div class="collapse" id="ENGAGEMENTBONCOMMANDE" style="color:#fff!important;font-size:15px; margin-left:80px">
<div class="widget-box collapsible">
    <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px;"> <a href="#DEMANDEENGAGAMENTBON" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#000!important;font-size:15px;">DEMANDE</h5>
            </a> 
            
            </div>
            
            <div class="collapse" id="DEMANDEENGAGAMENTBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test==0" v-on:click="clickBoutonEnAttente2()"><ListeDemandeEngagementBonCommande :macheid="marcheid"></ListeDemandeEngagementBonCommande></div>
             <div class="collapse" id="DEMANDEENGAGAMENTBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test==2" v-on:click="clickBoutonDiffere2()"><ListeDemandeEngagementBonCommandeDifere :macheid="marcheid"></ListeDemandeEngagementBonCommandeDifere></div>
              <div class="collapse" id="DEMANDEENGAGAMENTBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test==3" v-on:click="clickBoutonRejete2()"><ListeDemandeEngagementBonCommandeRejete :macheid="marcheid"></ListeDemandeEngagementBonCommandeRejete></div>
               <div class="collapse" id="DEMANDEENGAGAMENTBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test==4" v-on:click="clickBoutonVisé2()"><ListeDemandeEngagementBonCommandeVise :macheid="marcheid"></ListeDemandeEngagementBonCommandeVise></div>
                <div class="collapse" id="DEMANDEENGAGAMENTBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test==5" v-on:click="clickBoutonViséObservation2()"><ListeDemandeEngagementBonCommandeViseObservation :macheid="marcheid"></ListeDemandeEngagementBonCommandeViseObservation></div>
            <br>
 <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px;"> <a href="#LIQUIDATIONBON" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#000!important;font-size:15px;">BON DE COMMANDE </h5>
            </a> 
            
            </div>
            
             <div class="collapse" id="LIQUIDATIONBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test==0" v-on:click="clickBoutonEnAttente2()"><ListeBonCommande :macheid="marcheid"></ListeBonCommande></div>
             <div class="collapse" id="LIQUIDATIONBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test==2" v-on:click="clickBoutonDiffere2()"><ListeBonCommandeDifere :macheid="marcheid"></ListeBonCommandeDifere></div>
              <div class="collapse" id="LIQUIDATIONBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test==3" v-on:click="clickBoutonRejete2()"><ListeBonCommandeRejete :macheid="marcheid"></ListeBonCommandeRejete></div>
               <div class="collapse" id="LIQUIDATIONBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test==4" v-on:click="clickBoutonVisé2()"><ListeBonCommandeVise :macheid="marcheid"></ListeBonCommandeVise></div>
                <div class="collapse" id="LIQUIDATIONBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test==5" v-on:click="clickBoutonViséObservation2()"><ListeBonCommandeViseObservation :macheid="marcheid"></ListeBonCommandeViseObservation></div>
            
             <!-- DEBUT MANDAT -->
             <br>
 <!-- DEBUT LIQUIDATION -->
            <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px;"> <a href="#LIQUIDATIONBON1" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#000!important;font-size:15px;">LIQUIDATION </h5>
            </a> 
            
            </div>
            
<div class="collapse" id="LIQUIDATIONBON1" style="font-size:15px; margin-left:110px" v-if="editMandat.test==0" v-on:click="clickBoutonEnAttente2()"><ListeDesLiquidationEngagementBonCommande :macheid="marcheid"></ListeDesLiquidationEngagementBonCommande></div>
             <div class="collapse" id="LIQUIDATIONBON1" style="font-size:15px; margin-left:110px" v-if="editMandat.test==2" v-on:click="clickBoutonDiffere2()"><ListeDesLiquidationEngagementBonCommandeDifere :macheid="marcheid"></ListeDesLiquidationEngagementBonCommandeDifere></div>
              <div class="collapse" id="LIQUIDATIONBON1" style="font-size:15px; margin-left:110px" v-if="editMandat.test==3" v-on:click="clickBoutonRejete2()"><ListeDesLiquidationEngagementBonCommandeRejete :macheid="marcheid"></ListeDesLiquidationEngagementBonCommandeRejete></div>
               <div class="collapse" id="LIQUIDATIONBON1" style="font-size:15px; margin-left:110px" v-if="editMandat.test==4" v-on:click="clickBoutonVisé2()"> <ListeDesLiquidationEngagementBonCommandeVise :macheid="marcheid"></ListeDesLiquidationEngagementBonCommandeVise></div>
                <div class="collapse" id="LIQUIDATIONBON1" style="font-size:15px; margin-left:110px" v-if="editMandat.test==5" v-on:click="clickBoutonViséObservation2()"><ListeDesLiquidationEngagementBonCommandeViseObservation :macheid="marcheid"></ListeDesLiquidationEngagementBonCommandeViseObservation></div>
            
            
            
           
             <!-- DEBUT MANDAT -->
             <br>
            <div class="widget-title" style="background-color: #fff;color:#000!important;font-size:15px;"> <a href="#MANDATBON" data-toggle="collapse"> <span class="icon"><i class=" icon-chevron-down" style="color:#000!important;"></i></span>
            <h5 style="color:#000!important;font-size:15px;">MANDAT </h5>
            </a> 
            
            </div>
            
              <!-- <div class="collapse" id="MANDATBON" style="font-size:15px; margin-left:110px"><ListeMandatEngagementBonCommande :macheid="marcheid"></ListeMandatEngagementBonCommande></div> -->
    <div class="collapse" id="MANDATBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test1==0" v-on:click="clickBoutonEnAttente2()"><ListeMandatEngagementBonCommande :macheid="marcheid"></ListeMandatEngagementBonCommande></div>
             <div class="collapse" id="MANDATBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test1==2" v-on:click="clickBoutonDiffere2()"><ListeMandatEngagementBonCommandeDifere :macheid="marcheid"></ListeMandatEngagementBonCommandeDifere></div>
              <div class="collapse" id="MANDATBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test1==3" v-on:click="clickBoutonRejete2()"><ListeMandatEngagementBonCommandeRejete :macheid="marcheid"></ListeMandatEngagementBonCommandeRejete></div>
               <div class="collapse" id="MANDATBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test1==4" v-on:click="clickBoutonVisé2()"><ListeMandatEngagementBonCommandeVise :macheid="marcheid"></ListeMandatEngagementBonCommandeVise></div>
                <div class="collapse" id="MANDATBON" style="font-size:15px; margin-left:110px" v-if="editMandat.test1==5" v-on:click="clickBoutonViséObservation2()"><ListeMandatEngagementBonCommandeViseObservation :macheid="marcheid"></ListeMandatEngagementBonCommandeViseObservation></div>
            
    <br>
 </div>
            </div>
             </div>
          </div>
          
          <!-- <div class="widget-title" style="background-color: coral;"> <a href="#collapseTwo" data-toggle="collapse"> <span class="icon"><i class="icon-sitemap"></i></span>
            <h5 style="color:#fff !important;font-size:20px">PROCEDURES DEROGATOIRES </h5>
            </a> </div>
          <div class="collapse" id="collapseTwo">
            <div class="widget-content"> This box is now open </div>
          </div> -->
         
        </div>
    

  </div>
</template>
  
<script>
    // Demande engagement direct
import ListeDemandeEngagement from "./DossierEgagementDirect/DossierDemandeEngagement/ListeDemandeEngagement"
import ListeDemandeEngagementDifere from "./DossierEgagementDirect/DossierDemandeEngagement/ListeDemandeEngagementDifere"
import ListeDemandeEngagementRejete from "./DossierEgagementDirect/DossierDemandeEngagement/ListeDemandeEngagementRejete"
import ListeDemandeEngagementVise from "./DossierEgagementDirect/DossierDemandeEngagement/ListeDemandeEngagementVise"
import ListeDemandeEngagementViseObservation from "./DossierEgagementDirect/DossierDemandeEngagement/ListeDemandeEngagementViseObservation"

// liquidation Engagement Directe,
import ListeDesLiquidation from "./DossierEgagementDirect/DossierLiquidation/ListeDesLiquidation"
import ListeDesLiquidationDifere from "./DossierEgagementDirect/DossierLiquidation/ListeLiquidationDifere"
import ListeDesLiquidationRejete from "./DossierEgagementDirect/DossierLiquidation/ListeLiquidationRejete"
import ListeDesLiquidationVise from "./DossierEgagementDirect/DossierLiquidation/ListeLiquidationVise"
import ListeDesLiquidationViseObservation from "./DossierEgagementDirect/DossierLiquidation/ListeLiquidationViseObservation"
// Mandat engagement direct
import ListeMandat from "./DossierEgagementDirect/DossierMandat/ListeMandat"
import ListeMandatDifere from "./DossierEgagementDirect/DossierMandat/ListeMandatDifere"
import ListeMandatRejete from "./DossierEgagementDirect/DossierMandat/ListeMandatRejete"
import ListeMandatVise from "./DossierEgagementDirect/DossierMandat/ListeMandatVise"
import ListeMandatViseObservation from "./DossierEgagementDirect/DossierMandat/ListeMandatViseObservation"



 // Demande engagement par Bon de commande


import ListeDemandeEngagementBonCommande from "./DossierEgagementBonCommande/DossierDmd/ListeDemandeEngagementBonCommande"
import ListeDemandeEngagementBonCommandeDifere from "./DossierEgagementBonCommande/DossierDmd/ListeDemandeEngagementBonCommandeDifere"
import ListeDemandeEngagementBonCommandeRejete from "./DossierEgagementBonCommande/DossierDmd/ListeDemandeEngagementBonCommandeRejete"
import ListeDemandeEngagementBonCommandeVise from "./DossierEgagementBonCommande/DossierDmd/ListeDemandeEngagementBonCommandeVise"
import ListeDemandeEngagementBonCommandeViseObservation from "./DossierEgagementBonCommande/DossierDmd/ListeDemandeEngagementBonCommandeViseObservation"


// Bon Commande engagement par Bon de commande

import ListeBonCommande from "./DossierEgagementBonCommande/DossierBonCommande/ListeBonCommande"
import ListeBonCommandeDifere from "./DossierEgagementBonCommande/DossierBonCommande/ListeBonCommandeDifere"
import ListeBonCommandeRejete from "./DossierEgagementBonCommande/DossierBonCommande/ListeBonCommandeRejete"
import ListeBonCommandeVise from "./DossierEgagementBonCommande/DossierBonCommande/ListeBonCommandeVise"
import ListeBonCommandeViseObservation from "./DossierEgagementBonCommande/DossierBonCommande/ListeBonCommandeViseObservation"


// Liquidation engagement par Bon de commande

import ListeDesLiquidationEngagementBonCommande from "./DossierEgagementBonCommande/DossierLiquidation/ListeDesLiquidationEngagementBonCommande"
import ListeDesLiquidationEngagementBonCommandeDifere from "./DossierEgagementBonCommande/DossierLiquidation/ListeDesLiquidationEngagementBonCommandeDifere"
import ListeDesLiquidationEngagementBonCommandeRejete from "./DossierEgagementBonCommande/DossierLiquidation/ListeDesLiquidationEngagementBonCommandeRejete"
import ListeDesLiquidationEngagementBonCommandeVise from "./DossierEgagementBonCommande/DossierLiquidation/ListeDesLiquidationEngagementBonCommandeVise"
import ListeDesLiquidationEngagementBonCommandeViseObservation from "./DossierEgagementBonCommande/DossierLiquidation/ListeDesLiquidationEngagementBonCommandeViseObservation"

// Mandat engagement par Bon de commande
import ListeMandatEngagementBonCommande from "./DossierEgagementBonCommande/DossierMandat/ListeMandatEngagementBonCommande"
import ListeMandatEngagementBonCommandeDifere from "./DossierEgagementBonCommande/DossierMandat/ListeMandatEngagementBonCommandeDifere"
import ListeMandatEngagementBonCommandeRejete from "./DossierEgagementBonCommande/DossierMandat/ListeMandatEngagementBonCommandeRejete"
import ListeMandatEngagementBonCommandeVise from "./DossierEgagementBonCommande/DossierMandat/ListeMandatEngagementBonCommandeVise"
import ListeMandatEngagementBonCommandeViseObservation from "./DossierEgagementBonCommande/DossierMandat/ListeMandatEngagementBonCommandeViseObservation"





import ListeOpSysteme from "./DossierEgagementDirect/DossierOpSysteme/ListeOpSysteme"
import ListeOpSystemeDifere from "./DossierEgagementDirect/DossierOpSysteme/ListeOpSystemeDifere"
import ListeOpSystemeRejete from "./DossierEgagementDirect/DossierOpSysteme/ListeOpSystemeRejete"
import ListeOpSystemeVise from "./DossierEgagementDirect/DossierOpSysteme/ListeOpSystemeVise"
import ListeOpSystemeViseObservation from "./DossierEgagementDirect/DossierOpSysteme/ListeOpSystemeViseObservation"

//import ListeBonCommande from "./DossierEgagementBonCommande/ListeBonCommande"

//import ListeDesLiquidationEngagementBonCommande from "./DossierEgagementBonCommande/ListeDesLiquidationEngagementBonCommande"

// import MandatDifferer from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatDifferer.vue"
// import MandatRejetter from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatRejetter.vue"
// import MandatVise from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatVise.vue"
// import MandatViseAvecObservation from "@/pages/ExecutionBudgetaire/procedureEngaementDirect/mandat/MandatViseAvecObservation.vue"
import { mapGetters, mapActions } from "vuex";


export default {
  components:{
    // Demande engagement direct
   
    ListeDemandeEngagementDifere,
    ListeDemandeEngagementRejete,
    ListeDemandeEngagementVise,
    ListeDemandeEngagementViseObservation,
  ListeDemandeEngagement,

// liquidation Engagement Directe,
    ListeDesLiquidation,
    ListeDesLiquidationDifere,
    ListeDesLiquidationRejete,
    ListeDesLiquidationVise,
    ListeDesLiquidationViseObservation,
  
// Mandat engagement direct
ListeMandat,
 ListeMandatDifere,
    ListeMandatRejete,
    ListeMandatVise,
    ListeMandatViseObservation,

  ListeOpSysteme,
 ListeOpSystemeDifere,
    ListeOpSystemeRejete,
    ListeOpSystemeVise,
    ListeOpSystemeViseObservation,

   
// Demande engagement Par bon de commande
ListeDemandeEngagementBonCommande,
 ListeDemandeEngagementBonCommandeDifere,
    ListeDemandeEngagementBonCommandeRejete,
    ListeDemandeEngagementBonCommandeVise,
    ListeDemandeEngagementBonCommandeViseObservation,



// Bon Commande engagement Par bon de commande
ListeBonCommande,
 ListeBonCommandeDifere,
    ListeBonCommandeRejete,
    ListeBonCommandeVise,
    ListeBonCommandeViseObservation,




  // Liquidation engagement Par bon de commande
ListeDesLiquidationEngagementBonCommande,
 ListeDesLiquidationEngagementBonCommandeDifere,
    ListeDesLiquidationEngagementBonCommandeRejete,
    ListeDesLiquidationEngagementBonCommandeVise,
    ListeDesLiquidationEngagementBonCommandeViseObservation,


// Mandat engagement Par bon de commande

ListeMandatEngagementBonCommande,
 ListeMandatEngagementBonCommandeDifere,
    ListeMandatEngagementBonCommandeRejete,
    ListeMandatEngagementBonCommandeVise,
    ListeMandatEngagementBonCommandeViseObservation,

  //ListeBonCommande,
  //ListeDesLiquidationEngagementBonCommande
    // MandatVise,
    // MandatRejetter,
    // MandatDifferer,
//MandatEnAttente
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      
      search: "",
      editMandat:{
        test:0,
        test1:0
      }
    };
  },
created() {
            this.marcheid=this.$route.params.id

         
},
  computed: {
   ...mapGetters("bienService", ["gettersgestionOrdrePaiement","gettersBonCommande","gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
    ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives",
      "jointureUaChapitreSection",
      "budgetEclate",
      "GroupeUaReceptrice",
      "transferts",
      "groupeUniteAdministrativeBudgetEclate",
      "groupeUaSousBudget"
      // "chapitres",
      // "sections"
    ]),
      ToutOpEnAttente() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel1 =>qtreel1.ua_id == id  && qtreel1.decision_cf==0).length;

        }
      };
    },
    ToutOpDifere() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel1 =>qtreel1.ua_id == id  && qtreel1.decision_cf==2).length;

        }
      };
    },
      ToutOpRejete() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel1 =>qtreel1.ua_id == id  && qtreel1.decision_cf==3).length;

        }
      };
    },
      ToutOpVise() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel1 =>qtreel1.ua_id == id  && qtreel1.decision_cf==8).length;

        }
      };
    },
      ToutOpViseO() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel1 =>qtreel1.ua_id == id  && qtreel1.decision_cf==9).length;

        }
      };
    },
    OpGlobalUa() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel1 =>qtreel1.ua_id == id).length;

        }
      };
    },
     idUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
   NombreDemandeEnAttenteEd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==1 && qtreel.decision_cf==0 ).length;

        }
      };
    },
    NombreDemandeDiffereEd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==1 && qtreel.decision_cf==2 ).length;

        }
      };
    },
    NombreDemandeRejeteEd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==1 && qtreel.decision_cf==3 ).length;

        }
      };
    },
    NombreDemandeViseEd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==1 && qtreel.decision_cf==8).length;

        }
      };
    },
    NombreDemandeViseObservationEd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==1 && qtreel.decision_cf==9 ).length;

        }
      };
    },


AfficheTypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_procedure_id;
      }
      return 0
        }
      };
    },
    idUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ua_id;
      }
      return 0
        }
      };
    },

NombreDemandeEnAttenteBonCmd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==7 && qtreel.decision_cf==0 ).length;

        }
      };
    },
    NombreDemandeDiffereBonCmd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==7 && qtreel.decision_cf==2 ).length;

        }
      };
    },
    NombreDemandeRejeteBonCmd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==7 && qtreel.decision_cf==3 ).length;

        }
      };
    },
    NombreDemandeViseBonCmd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==7 && qtreel.decision_cf==8).length;

        }
      };
    },
    NombreDemandeViseObservationBonCmd() {
      return id => {
        if (id != null && id != "") {
           return this.gettersDemandeEngagement.filter(qtreel => qtreel.ua_id == id && qtreel.type_procedure_id==7 && qtreel.decision_cf==9 ).length;

        }
      };
    },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllNoteService",
      "ajouterNoteService",
      "modifierNoteService",
      "supprimerNoteService"
    ]),
  clickBoutonEnAttente: function() {
            this.editMandat.test = 0;
        },
        clickBoutonDiffere: function() {
            this.editMandat.test = 2;
        },
        clickBoutonRejete: function() {
            this.editMandat.test = 3;
        },
        clickBoutonVisé: function() {
            this.editMandat.test = 4;
        },
          clickBoutonViséObservation: function() {
            this.editMandat.test = 5;
        },

        clickBoutonEnAttente2: function() {
            this.editMandat.test1 = 0;
        },
        clickBoutonDiffere2: function() {
            this.editMandat.test1 = 2;
        },
        clickBoutonRejete2: function() {
            this.editMandat.test1 = 3;
        },
        clickBoutonVisé2: function() {
            this.editMandat.test1 = 4;
        },
          clickBoutonViséObservation2: function() {
            this.editMandat.test1 = 5;
        },
 afficherModalListePersonnel(){
                window.history.back()
            },
  }
};
</script>

