
<template>
  <div>
  
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
         <table class="table table-bordered table-striped">
           <thead>
                  
                  <tr>
                    <th style="font-size:14px;color:#000;">EXERCICE BUDGETAIRE</th>
                    <th style="font-size:14px;color:#000;">UNITE ADMINISTRATIVE</th>
                    
                    <th style="font-size:14px;color:#000;">MONTANT BUDGETAIRE </th>
                    <th style="font-size:14px;color:#000;">TOTAL REPORT </th>
                    <th style="font-size:14px;color:#000;">BUDGET TOTAL</th>
                     <th style="font-size:14px;color:#000;">DECISION CF</th>
                      <th style="font-size:14px;color:#000;">FAMILLE MOTIF</th>
                      <th style="font-size:14px;color:#000;">MOTIF</th>
                      <th style="font-size:14px;color:#000;">DATE DECISION</th>
                    
                  </tr>
                </thead>
                 <tbody>
                   <tr class="odd gradeX">
                     <td style="font-size:14px;color:#000">{{detail_marche.annebudgetaire}}</td>
                     <td style="font-size:14px;color:#000">{{idUniteAdministrative(detail_marche.uniteadministrative_id)}}</td>
                    
                    <td style="font-size:14px;color:#000;text-align:center">{{formatageSomme(parseFloat(RecuppererLaDotation(detail_marche.activite_id)))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center">{{formatageSomme(parseFloat(MontantDisponibleParUa(detail_marche.uniteadministrative_id)))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center">{{formatageSomme(parseFloat(RecuppererLaDotation(detail_marche.activite_id))+parseFloat(MontantDisponibleParUa(detail_marche.uniteadministrative_id)))}}</td>
                     <td>
                        <button v-if="decisionCfBudgetEclate(detail_marche.uniteadministrative_id) == 8"  class="btn  btn-success"  @click="apercuFacture()">                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="decisionCfBudgetEclate(detail_marche.uniteadministrative_id) == 2" class="btn  btn-warning" @click="apercuFacture()">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="decisionCfBudgetEclate(detail_marche.uniteadministrative_id) == 3" class="btn  btn-danger" @click="apercuFacture()">                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="decisionCfBudgetEclate(detail_marche.uniteadministrative_id) == 9"  class="btn  btn-success" @click="apercuFacture()">                        
                     
                      <span title="Visé avec observation" >Visé O</span>
                      
                      </button>
                     <button v-else class="btn  btn-info" @click="apercuFacture()" >                        
                     
                      
                       <span>Attente</span>
                      
                    
                      </button>
                    </td>
                    <td style="font-size:14px;color:#000;text-align:center">{{libelleDecision(FamilleMotifBudgetEclate(detail_marche.uniteadministrative_id))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center">{{libelleDecision(MotifBudgetEclate(detail_marche.uniteadministrative_id))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center">{{formaterDate(DateMotifBudgetEclate(detail_marche.uniteadministrative_id))}}</td>
                    
                   </tr>
                </tbody>
        </table>
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>VENTILLATION BUDGET {{anneeAmort}}</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped" >
                <thead>
                   <tr>
                    <th></th>
                    <th colspan="11" style="font-size:14px;color:#000;text-align:center">BUDGET</th>
                    <th colspan="5"></th>
                    
                  </tr>
                   <tr>
                    <th></th>
                    <th></th>
                    <th colspan="10" style="font-size:14px;color:#000;text-align:center">BAILLEUR</th>
                    <th colspan="10"></th>
                    
                  </tr>
                  <tr>
                    <th style="font-size:14px;color:#000;">LIGNE BUDGETAIRE</th>
                    <th style="font-size:14px;color:#000;">TRESOR (F CFA)</th>
                    <th style="font-size:14px;color:#000;" colspan="5">DON (F CFA)</th>
                    
                    <th style="font-size:14px;color:#000;" colspan="5">EMPRUNT (F CFA)</th>
                    <th style="font-size:14px;color:#000;" colspan="">BUDGET TOTAL (F CFA)</th>
                    
                  </tr>
      
                  <tr>
                    <th style="font-size:14px;color:#000;"></th>
                    <th style="font-size:14px;color:#000;" colspan="" v-if="tailleAfficheBailleurTrsor(detail_marche.uniteadministrative_id) == 1">{{libelleSousFinancement(AfficheEtatCoteIvoire(detail_marche.uniteadministrative_id))}}</th>
                    <th style="font-size:14px;color:#000;" colspan="5" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 0"></th>
                    <th style="font-size:14px;color:#000;" colspan="5" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 1">{{libelleSousFinancement(AfficheBailleurDon1(detail_marche.uniteadministrative_id))}}</th>
                  <th style="font-size:14px;color:#000;" colspan="3" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 2">{{libelleSousFinancement(AfficheBailleurDon1(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 2">{{libelleSousFinancement(AfficheBailleurDon2(detail_marche.uniteadministrative_id))}}</th>
 <th style="font-size:14px;color:#000;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{libelleSousFinancement(AfficheBailleurDon1(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{libelleSousFinancement(AfficheBailleurDon2(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{libelleSousFinancement(AfficheBailleurDon3(detail_marche.uniteadministrative_id))}}</th>
                  
                    <th style="font-size:14px;color:#000;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{libelleSousFinancement(AfficheBailleurDon1(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{libelleSousFinancement(AfficheBailleurDon2(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{libelleSousFinancement(AfficheBailleurDon3(detail_marche.uniteadministrative_id))}}</th>
                  <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{libelleSousFinancement(AfficheBailleurDon4(detail_marche.uniteadministrative_id))}}</th>
                  <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{libelleSousFinancement(AfficheBailleurDon1(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{libelleSousFinancement(AfficheBailleurDon2(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{libelleSousFinancement(AfficheBailleurDon3(detail_marche.uniteadministrative_id))}}</th>
                  <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{libelleSousFinancement(AfficheBailleurDon4(detail_marche.uniteadministrative_id))}}</th>
                  <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{libelleSousFinancement(AfficheBailleurDon5(detail_marche.uniteadministrative_id))}}</th>

                  <th style="font-size:14px;color:#000;" colspan="5" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 0"></th>
                  <th style="font-size:14px;color:#000;" colspan="5" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 1">{{libelleSousFinancement(AfficheBailleurEmprunt1(detail_marche.uniteadministrative_id))}}</th>
                  <th style="font-size:14px;color:#000;" colspan="3" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 2">{{libelleSousFinancement(AfficheBailleurEmprunt1(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 2">{{libelleSousFinancement(AfficheBailleurEmprunt2(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{libelleSousFinancement(AfficheBailleurEmprunt1(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{libelleSousFinancement(AfficheBailleurEmprunt2(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{libelleSousFinancement(AfficheBailleurEmprunt3(detail_marche.uniteadministrative_id))}}</th>
                  
                    <th style="font-size:14px;color:#000;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{libelleSousFinancement(AfficheBailleurEmprunt1(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{libelleSousFinancement(AfficheBailleurEmprunt2(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{libelleSousFinancement(AfficheBailleurEmprunt3(detail_marche.uniteadministrative_id))}}</th>
                  <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{libelleSousFinancement(AfficheBailleurEmprunt4(detail_marche.uniteadministrative_id))}}</th>
                  <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{libelleSousFinancement(AfficheBailleurEmprunt1(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{libelleSousFinancement(AfficheBailleurEmprunt2(detail_marche.uniteadministrative_id))}}</th>
                   <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{libelleSousFinancement(AfficheBailleurEmprunt3(detail_marche.uniteadministrative_id))}}</th>
                  <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{libelleSousFinancement(AfficheBailleurEmprunt4(detail_marche.uniteadministrative_id))}}</th>
                  <th style="font-size:14px;color:#000;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{libelleSousFinancement(AfficheBailleurEmprunt5(detail_marche.uniteadministrative_id))}}</th>
                    <th style="font-size:14px;color:#000;" colspan="5"></th>
                  </tr>
                </thead>
              <tbody>
                 
                 
                  <tr class="odd gradeX" v-for="(type) in listeDesBudgetaireEclatePersonnel(detail_marche.uniteadministrative_id)" :key="type.id">
                   
                    <td style="font-size:14px;color:#000;" v-if="type.variation_budget==0">{{libelleLigneEconomique(type.ligneeconomique_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px;color:#000;" v-else>{{libelleLigneEconomique(type.ligneeconomique_id) || 'Non renseigné'}}<span style="color:red;font-size:35px">*</span></td>
                      <td style="font-size:14px;text-align:center;color:#000;;font-weight:bold;">{{formatageSommeSansFCFA(parseFloat(type.tresor)) || 'Non renseigné'}}</td>


                       <!-- <td style="font-size:14px;text-align:center;color:#000;" v-if="this.tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 0" colspan="5">{{formatageSommeSansFCFA(parseFloat(type.don)) || 'Non renseigné'}}</td>
                     -->
                     <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="5" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="5" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="3" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
 <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_don_3))}}</td>
                  
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_don_3))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_don_4))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_3))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_4))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_5))}}</td>

                   
                   
                   
                   
                   
                   
                   <!-- <td style="font-size:14px;text-align:center">{{formatageSommeSansFCFA(parseFloat(type.emprunt)) || 'Non renseigné'}}</td> -->
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="5" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</td>
<th style="font-size:14px;color:#000;text-align:center;" colspan="5" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="3" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
 <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_3))}}</th>
                  
                    <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_3))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_4))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_3))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_4))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_5))}}</th>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" >
                     {{formatageSommeSansFCFA(parseFloat(type.don)+parseFloat(type.montant_don_2)+parseFloat(type.montant_don_3)+parseFloat(type.montant_don_4)+parseFloat(type.montant_don_5)+parseFloat(type.emprunt)+parseFloat(type.montant_emprunt_2)+parseFloat(type.montant_emprunt_3)+parseFloat(type.montant_emprunt_4)+parseFloat(type.montant_emprunt_5)+parseFloat(type.tresor)) || 'Non renseigné'}}
                     </td>
                  </tr>
                    <tr>
                    <td style="font-size:14px;color:#000;text-align:left;font-weight:bold;">PERSONNEL</td>
                    <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelTresor(detail_marche.uniteadministrative_id)))}}</td>

 <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="5" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id)))}}</td>
<td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="5" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="3" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon2(detail_marche.uniteadministrative_id)))}}</td>
 <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon3(detail_marche.uniteadministrative_id)))}}</td>
                  
                    <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelDon5(detail_marche.uniteadministrative_id)))}}</td>




<td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="5" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id)))}}</td>
<td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="5" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="3" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
 <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt3(detail_marche.uniteadministrative_id)))}}</td>
                  
                    <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt5(detail_marche.uniteadministrative_id)))}}</td>
                     <!-- <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id)))}}</td> -->
                    <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt5(detail_marche.uniteadministrative_id)))}}</td>
                    





                    
                  </tr>
                   
                  <tr class="odd gradeX" v-for="(type) in listeDesBudgetaireEclateBiensService(detail_marche.uniteadministrative_id)" :key="type.id">
                   
                    <td style="font-size:14px;color:#000;" v-if="type.variation_budget==0">{{libelleLigneEconomique(type.ligneeconomique_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px;color:#000;" v-else>{{libelleLigneEconomique(type.ligneeconomique_id) || 'Non renseigné'}}<span style="color:red;font-size:35px">*</span></td>
                      <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">{{formatageSommeSansFCFA(parseFloat(type.tresor)) || 'Non renseigné'}}</td>
                      
                      <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="5" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                      <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="5" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="3" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
 <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_don_3))}}</td>
                  
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_don_3))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_don_4))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_3))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_4))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_5))}}</td>

                      
                      
                      
                      
                      
                      <th style="font-size:14px;color:#000;text-align:center;" colspan="5" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                      <th style="font-size:14px;color:#000;text-align:center;" colspan="5" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="3" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
 <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_3))}}</th>
                  
                    <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_3))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_4))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_3))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_4))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_5))}}</th>
                      
                      
                      <!-- <td style="font-size:14px;text-align:center">{{formatageSommeSansFCFA(parseFloat(type.don)) || 'Non renseigné'}}</td> -->
                   <!-- <td style="font-size:14px;text-align:center">{{formatageSommeSansFCFA(parseFloat(type.emprunt)) || 'Non renseigné'}}</td> -->
















                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" >
                     {{formatageSommeSansFCFA(parseFloat(type.don)+parseFloat(type.montant_don_2)+parseFloat(type.montant_don_3)+parseFloat(type.montant_don_4)+parseFloat(type.montant_don_5)+parseFloat(type.emprunt)+parseFloat(type.montant_emprunt_2)+parseFloat(type.montant_emprunt_3)+parseFloat(type.montant_emprunt_4)+parseFloat(type.montant_emprunt_5)+parseFloat(type.tresor)) || 'Non renseigné'}}
                     </td>
                              
                  </tr>
                    <tr>
                    <td style="font-size:14px;color:#000;text-align:left;font-weight:bold;">BIENS ET SERVICES</td>
                    <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceTresor(detail_marche.uniteadministrative_id)))}}</td>
<td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="5" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id)))}}</td>
<td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="5" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="3" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon2(detail_marche.uniteadministrative_id)))}}</td>
 <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon3(detail_marche.uniteadministrative_id)))}}</td>
                  
                    <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon5(detail_marche.uniteadministrative_id)))}}</td>




<td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="5" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id)))}}</td>
<td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="5" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="3" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
 <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt3(detail_marche.uniteadministrative_id)))}}</td>
                  
                    <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt5(detail_marche.uniteadministrative_id)))}}</td>
                     <!-- <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id)))}}</td> -->
                    <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt5(detail_marche.uniteadministrative_id)))}}</td>
                   
















    <!-- <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id)))}}</td> -->
                     <!-- <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id)))}}</td> -->
                    <!-- <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;">{{formatageSomme(parseFloat(SommeDesBudgetaireEclateBienServiceTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id)))}}</td> -->
                    
                     <!-- <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">{{formatageSomme(parseFloat(SommeDesBudgetaireEclateBienService(detail_marche.uniteadministrative_id)))}}</td>
                     -->
                  </tr>
                 
                  
                  <tr class="odd gradeX" v-for="(type) in listeDesBudgetaireEclateInvestissement(detail_marche.uniteadministrative_id)" :key="type.id">
                   
                    <td style="font-size:14px;color:#000;" v-if="type.variation_budget==0">{{libelleLigneEconomique(type.ligneeconomique_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px;color:#000;" v-else>{{libelleLigneEconomique(type.ligneeconomique_id) || 'Non renseigné'}}<span style="color:red;font-size:35px">*</span></td>
                      <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">{{formatageSommeSansFCFA(parseFloat(type.tresor)) || 'Non renseigné'}}</td>
                       <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="5" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="5" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="3" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
 <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_don_3))}}</td>
                  
                    <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="2" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_don_3))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_don_4))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.don))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_2))}}</td>
                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_3))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_4))}}</td>
                  <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;" colspan="1" v-if="tailleAfficheBailleurDon(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_don_5))}}</td>

                      
                      

                      <th style="font-size:14px;color:#000;text-align:center;" colspan="5" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                      <th style="font-size:14px;color:#000;text-align:center;" colspan="5" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="3" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
 <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_3))}}</th>
                  
                    <th style="font-size:14px;color:#000;text-align:center;" colspan="2" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_3))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_4))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.emprunt))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_2))}}</th>
                   <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_3))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_4))}}</th>
                  <th style="font-size:14px;color:#000;text-align:center;" colspan="1" v-if="tailleAfficheBailleurEmprunt(type.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(type.montant_emprunt_5))}}</th>
                      
                      
                      <!-- <td style="font-size:14px;text-align:center">{{formatageSommeSansFCFA(parseFloat(type.don)) || 'Non renseigné'}}</td> -->
                   <!-- <td style="font-size:14px;text-align:center">{{formatageSommeSansFCFA(parseFloat(type.emprunt)) || 'Non renseigné'}}</td> -->

                   <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">
                     {{formatageSommeSansFCFA(parseFloat(type.don)+parseFloat(type.emprunt)+parseFloat(type.tresor)) || 'Non renseigné'}}
                     </td>
                              
                  </tr>
                   <tr>
                    <td style="font-size:14px;color:#000;text-align:left;font-weight:bold;">INVESTISSEMENT</td>
                     <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementTresor(detail_marche.uniteadministrative_id)))}}</td>
<td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="5" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id)))}}</td>
<td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="5" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="3" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon2(detail_marche.uniteadministrative_id)))}}</td>
 <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon3(detail_marche.uniteadministrative_id)))}}</td>
                  
                    <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurDon(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon5(detail_marche.uniteadministrative_id)))}}</td>




<td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="5" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 0">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id)))}}</td>
<td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="5" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 1">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="3" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 2">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
 <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 3">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt3(detail_marche.uniteadministrative_id)))}}</td>
                  
                    <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="2" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 4">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt2(detail_marche.uniteadministrative_id)))}}</td>
                   <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt3(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt4(detail_marche.uniteadministrative_id)))}}</td>
                  <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;" colspan="1" v-if="tailleAfficheBailleurEmprunt(detail_marche.uniteadministrative_id) == 5">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt5(detail_marche.uniteadministrative_id)))}}</td>
                     <!-- <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id)))}}</td> -->
                    <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt5(detail_marche.uniteadministrative_id)))}}</td>
                   
    <!-- <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id)))}}</td> -->
                     <!-- <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">{{formatageSommeSansFCFA(parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id)))}}</td> -->
                   
                   
                   
                   
                   
                    <!-- <td style="font-size:14px;color:#fff;text-align:center;font-weight:bold;background:orange;">{{formatageSomme(parseFloat(SommeDesBudgetaireEclateInvestissementTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id)))}}</td> -->
<!--                     
                     <td style="font-size:14px;color:#000;text-align:center;font-weight:bold;">{{formatageSomme(parseFloat(SommeDesBudgetaireEclateInvestissement(detail_marche.uniteadministrative_id)))}}</td> -->
                    
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td ></td>
                    <td ></td>
                     <td></td>
                    <td></td>
                    <td></td>
                     <td></td>
                    <td></td>
                    <td></td>
                     <td></td>
                    <td></td>
                    
                  </tr>
                  <tr>
                    
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                     <td></td>
                    <td></td>
                    <td></td>
                     <td></td>
                    <td></td>
                    <td></td>
                    <td style="font-weight:bold;font-size:16px;border:2px solid red">TOTAL</td>
                    <td style="font-size:14px;color:#000;text-align:center;background:green;font-weight:bold;" v-if="decisionCfBudgetEclate(detail_marche.uniteadministrative_id) == 8">
                     {{formatageSomme(parseFloat(parseFloat(parseFloat(SommeDesBudgetaireEclatePersonnelTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt5(detail_marche.uniteadministrative_id)))+parseFloat(parseFloat(SommeDesBudgetaireEclateBienServiceTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt5(detail_marche.uniteadministrative_id)))+parseFloat(parseFloat(SommeDesBudgetaireEclateInvestissementTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt5(detail_marche.uniteadministrative_id)))))}}
                     </td>
                              <td style="font-size:14px;color:#000;text-align:center;background:green;font-weight:bold;" v-else-if="decisionCfBudgetEclate(detail_marche.uniteadministrative_id) == 9">
                     {{formatageSomme(parseFloat(parseFloat(parseFloat(SommeDesBudgetaireEclatePersonnelTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt5(detail_marche.uniteadministrative_id)))+parseFloat(parseFloat(SommeDesBudgetaireEclateBienServiceTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt5(detail_marche.uniteadministrative_id)))+parseFloat(parseFloat(SommeDesBudgetaireEclateInvestissementTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt5(detail_marche.uniteadministrative_id)))))}}
                     </td>
                     <td style="font-size:14px;color:#000;text-align:center;background:#FFCC00;font-weight:bold;" v-else-if="decisionCfBudgetEclate(detail_marche.uniteadministrative_id) == 2">
                     {{formatageSomme(parseFloat(parseFloat(parseFloat(SommeDesBudgetaireEclatePersonnelTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt5(detail_marche.uniteadministrative_id)))+parseFloat(parseFloat(SommeDesBudgetaireEclateBienServiceTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt5(detail_marche.uniteadministrative_id)))+parseFloat(parseFloat(SommeDesBudgetaireEclateInvestissementTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt5(detail_marche.uniteadministrative_id)))))}}
                     </td>
                     <td style="font-size:14px;color:#000;text-align:center;background:red;font-weight:bold;" v-else-if="decisionCfBudgetEclate(detail_marche.uniteadministrative_id) == 3">
                     {{formatageSomme(parseFloat(parseFloat(parseFloat(SommeDesBudgetaireEclatePersonnelTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt5(detail_marche.uniteadministrative_id)))+parseFloat(parseFloat(SommeDesBudgetaireEclateBienServiceTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt5(detail_marche.uniteadministrative_id)))+parseFloat(parseFloat(SommeDesBudgetaireEclateInvestissementTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt5(detail_marche.uniteadministrative_id)))))}}
                     </td>
                     <td style="font-size:14px;color:#fff;text-align:center;background:#0033ff;font-weight:bold;" v-else>
                     {{formatageSomme(parseFloat(parseFloat(parseFloat(SommeDesBudgetaireEclatePersonnelTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclatePersonnelEmprunt5(detail_marche.uniteadministrative_id)))+parseFloat(parseFloat(SommeDesBudgetaireEclateBienServiceTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateBienServiceEmprunt5(detail_marche.uniteadministrative_id)))+parseFloat(parseFloat(SommeDesBudgetaireEclateInvestissementTresor(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementDon5(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt2(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt3(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt4(detail_marche.uniteadministrative_id))+parseFloat(SommeDesBudgetaireEclateInvestissementEmprunt5(detail_marche.uniteadministrative_id)))))}}
                     </td>
                   
                  </tr>
              </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>

  <div id="validationOpDefinitif" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision CF</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                            <label class="control-label">Décision CF </label>
                            <div class="controls">
                              <select v-model="editMandat.decision_cf" class="span5">
                                <option value=""></option>
                              <option value="8">Visé</option>
                              <option value="9">Visé avec Observation</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            <option value="0">Attente</option>
    
    </select>
                           
                            </div>
                          </div>
            </td>
              <td>
                    <div class="control-group">
                            <label class="control-label">{{detail_marche.uniteadministrative_id}}Famille de Motif {{idDecisionBudgetaire(this.detail_marche.uniteadministrative_id)}}</label>
                            <div class="controls">
                               <select v-model="editMandat.famille_motif" class="span5">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementParent" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
                 <td>
                    <div class="control-group">
                            <label class="control-label">Motif</label>
                            <div class="controls">
                               <select v-model="editMandat.motif" class="span5">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementEnfant(editMandat.famille_motif)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
          </tr>
               <tr>
                  <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Autres Motif</label>
                            <div class="controls">
                              <textarea  class="span10" row = "6" v-model="editMandat.autre_motif" :readonly="griserAutreMotif">
                              </textarea>
                            </div>
                          </div>
                       </td>
                  <td>
                               <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                              <input type="date" class="span5"  v-model="editMandat.date_decision"/>
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                              
                            </div>
                          </div>
                           </td>
                 </tr>             
                   <tr>
                     <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span10" row = "6" v-model="editMandat.observation">
                              </textarea>
                            </div>
                          </div>
                       </td>
                        <td colspan="">
                        <div class="control-group">
                            <label class="control-label">Nom du CF</label>
                            <div class="controls">
                              <input type="text" class="span5" :value="recupererNomDuControleurF(recupererIdUser(recupererIdServiceCF(detail_marche.uniteadministrative_id)))"  readonly/>
                            </div>
                          </div>
                       </td>
                       
                       </tr>  
                      
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="validationOpVise()"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<notifications  />
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>

import { mapGetters, mapActions } from "vuex";
import {formatageSomme,formatageSommeSansFCFA} from "@/Repositories/Repository"
import moment from 'moment';
export default {
  components:{
   
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData:{
                
                },
                editMandat:{},
      search: "",
       uri :'data:application/vnd.ms-excel;charset=UTF-8;base64,',
                template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
                format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) },
                table:""
    };
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.budgetEclate.find(
       idmarche => idmarche.id == this.$route.params.id
         )
        console.log(this.arrayExerciceDecompte(this.detail_marche.uniteadministrative_id)) 
},
  computed: {
    ...mapGetters("Utilisateurs", ["getterAffectionServiceCF","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["getterUniteAdministrativeBailleur","getSousBudget","getdecisionBudgetEclate","groupeParBAILLER","budgetEclate","groupeLigneEconomiqueBudget","groupeActiviteBudget","budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires","structures_budgetaires","getterTousActivite","getterTousPlanBudgetaire"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["getMandatPersonnaliserVise","typeFactures","gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),
...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      "services_gestionnaires",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',"types_financements"]),
      ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),


AfficheEtatCoteIvoire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==14 && qtreel.numero_ordre==1);

      if (qtereel) {
        return qtereel.sous_financement_id;
      }
      return 0
        }
      };
    },

libelleSousFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    tailleAfficheBailleurTrsor() {
      return id => {
        if (id != null && id != "") {
           return this.getterUniteAdministrativeBailleur.filter(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==14).length;

      
        }
      };
    },
tailleAfficheBailleurDon() {
      return id => {
        if (id != null && id != "") {
           return this.getterUniteAdministrativeBailleur.filter(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==13).length;

      
        }
      };
    },
tailleAfficheBailleurEmprunt() {
      return id => {
        if (id != null && id != "") {
           return this.getterUniteAdministrativeBailleur.filter(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==15).length;

      
        }
      };
    },
AfficheBailleurEmprunt1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==15 && qtreel.numero_ordre==1);

      if (qtereel) {
        return qtereel.sous_financement_id;
      }
      return 0
        }
      };
    },
AfficheBailleurEmprunt2() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==15 && qtreel.numero_ordre==2);

      if (qtereel) {
        return qtereel.sous_financement_id;
      }
      return 0
        }
      };
    },
    AfficheBailleurEmprunt3() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==15 && qtreel.numero_ordre==3);

      if (qtereel) {
        return qtereel.sous_financement_id;
      }
      return 0
        }
      };
    },
    AfficheBailleurEmprunt4() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==15 && qtreel.numero_ordre==4);

      if (qtereel) {
        return qtereel.sous_financement_id;
      }
      return 0
        }
      };
    },
    AfficheBailleurEmprunt5() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==15 && qtreel.numero_ordre==5);

      if (qtereel) {
        return qtereel.sous_financement_id;
      }
      return 0
        }
      };
    },







AfficheBailleurDon1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==13 && qtreel.numero_ordre==1);

      if (qtereel) {
        return qtereel.sous_financement_id;
      }
      return 0
        }
      };
    },
AfficheBailleurDon2() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==13 && qtreel.numero_ordre==2);

      if (qtereel) {
        return qtereel.sous_financement_id;
      }
      return 0
        }
      };
    },
    AfficheBailleurDon3() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==13 && qtreel.numero_ordre==3);

      if (qtereel) {
        return qtereel.sous_financement_id;
      }
      return 0
        }
      };
    },
    AfficheBailleurDon4() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==13 && qtreel.numero_ordre==4);

      if (qtereel) {
        return qtereel.sous_financement_id;
      }
      return 0
        }
      };
    },
    AfficheBailleurDon5() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUniteAdministrativeBailleur.find(qtreel => qtreel.ua_id == id && qtreel.type_financement_id==13 && qtreel.numero_ordre==5);

      if (qtereel) {
        return qtereel.sous_financement_id;
      }
      return 0
        }
      };
    },

NiveauSousBudget2() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nombre_sous_budget;
      }
      return 0
        }
      };
    },




recupererNomDuControleurF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUtilisateur.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.name;
      }
      return 0
        }
      };
    },
recupererIdUser() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectionServiceCF.find(qtreel => qtreel.servicecf_id == id && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.user_id;
      }
      return 0
        }
      };
    },
 recupererIdServiceCF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectation.find(qtreel => qtreel.unite_administrative_id == id   && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.servicecf_id;
      }
      return 0
        }
      };
    },

   griserAutreMotif(){
  return this.editMandat.motif != 237 
},
      AffichierElementParent() {
      
      // return id => {
      //   if (id != null && id != "") {
          return this.plans_Decision.filter(element => this.RecupererNiveau3StructureDecision(element.structure_motif_decission_id) == 3);
      //   }
      // };
    },
      RecupererNiveau3StructureDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structuresDecision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
    AffichierElementEnfant() {
      
      return id => {
        if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.parent == id);
        }
      };
    },
    libelleDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_Decision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 'Non renseigné'
        }
      };
    },
      DateMotifBudgetEclate() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id && qtreel.exercice==this.anneeAmort);

      if (qtereel) {
        return qtereel.date_decision
      }
      return 0
        }
      };
    },
MotifBudgetEclate() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id && qtreel.exercice==this.anneeAmort);

      if (qtereel) {
        return qtereel.motif
      }
      return 0
        }
      };
    },
FamilleMotifBudgetEclate() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id && qtreel.exercice==this.anneeAmort);

      if (qtereel) {
        return qtereel.famille_motif
      }
      return 0
        }
      };
    },
decisionCfBudgetEclate() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id && qtreel.exercice==this.anneeAmort);

      if (qtereel) {
        return qtereel.decision_cf
      }
      return 0
        }
      };
    },

     CumulMontantConsommeParUaPrecedent() {
      return id => {
        if (id != null && id != "") {
           return this.getMandatPersonnaliserVise.filter(qtreel => qtreel.ua_id == id && qtreel.exercice_budget==this.recupererAnneePrecedant ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);

        }
      };
    },
    DotationRestantAnneePrecedant() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.recupererAnneePrecedant ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },





      RecuppererLaDotation() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.activite_id == id &&  qtreel.actived==1 && qtreel.exercicebudget_id==this.anneeAmort);

      if (qtereel) {
        return qtereel.cp
      }
      return 0
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
    SommeDesBudgetaireEclatePersonnel() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclatePersonnelTresor() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_id==14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

        }
      };
    },
     SommeDesBudgetaireEclatePersonnelDon() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclatePersonnelDon2() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_2), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclatePersonnelDon3() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_3), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclatePersonnelDon4() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_4), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclatePersonnelDon5() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_5), 0).toFixed(0);

        }
      };
    },
     SommeDesBudgetaireEclatePersonnelEmprunt() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);

        }
      };
    },

      SommeDesBudgetaireEclatePersonnelEmprunt2() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_2), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclatePersonnelEmprunt3() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_3), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclatePersonnelEmprunt4() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_4), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclatePersonnelEmprunt5() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_5), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateBienServiceDon() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },



  SommeDesBudgetaireEclateBienServiceDon2() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_2), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateBienServiceDon3() {
      return (id) => {
        if (id != null && id != "" ) {
          return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_3), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateBienServiceDon4() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_4), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateBienServiceDon5() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_5), 0).toFixed(0);

        }
      };
    },



SommeDesBudgetaireEclateBienServiceEmprunt5() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_5), 0).toFixed(0);

        }
      };
    },



SommeDesBudgetaireEclateBienServiceEmprunt2() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_2), 0).toFixed(0);

        }
      };
    },
    
SommeDesBudgetaireEclateBienServiceEmprunt4() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_4), 0).toFixed(0);

        }
      };
    },
SommeDesBudgetaireEclateBienServiceEmprunt3() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_3), 0).toFixed(0);

        }
      };
    },

     SommeDesBudgetaireEclateBienServiceEmprunt() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateBienServiceTresor() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_id==14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

        }
      };
    },
    // SommeDesBudgetaireEclateBienServiceDon() {
    //   return (id) => {
    //     if (id != null && id != "" ) {
    //        return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

    //     }
    //   };
    // },
    SommeDesBudgetaireEclateTransfert() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 6 && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateInvestissement() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },

     SommeDesBudgetaireEclateInvestissementDon5() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_5), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateInvestissementDon2() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_2), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateInvestissementDon3() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_3), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateInvestissementDon4() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_don_4), 0).toFixed(0);

        }
      };
    },
      SommeDesBudgetaireEclateInvestissementDon() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_don_id==13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateInvestissementEmprunt() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);

        }
      };
    },

    SommeDesBudgetaireEclateInvestissementEmprunt4() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_4), 0).toFixed(0);

        }
      };
    },
SommeDesBudgetaireEclateInvestissementEmprunt3() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_3), 0).toFixed(0);

        }
      };
    },
SommeDesBudgetaireEclateInvestissementEmprunt2() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_2), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateInvestissementEmprunt5() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_emprunt_id==15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_emprunt_5), 0).toFixed(0);

        }
      };
    },
    SommeDesBudgetaireEclateInvestissementTresor() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort && qtreel.type_financement_id==14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

        }
      };
    },
    listeDesBudgetaireEclatePersonnel() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 2 && qtreel.annebudgetaire==this.anneeAmort);

        }
      };
    },
     listeDesBudgetaireEclateBiensService() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 5 && qtreel.annebudgetaire==this.anneeAmort );

        }
      };
    },
    listeDesBudgetaireEclateTransfert() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 6 && qtreel.annebudgetaire==this.anneeAmort );

        }
      };
    },
    listeDesBudgetaireEclateInvestissement() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id == 7 && qtreel.annebudgetaire==this.anneeAmort);

        }
      };
    },
    listeDesBudgetaireEclate() {
      return (id) => {
        if (id != null && id != "" ) {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id  && qtreel.annebudgetaire==this.anneeAmort );

        }
      };
    },
    listeBudgetParUa() {
      return id => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            element => element.uniteadministrative_id == id
          );
        }
      };
    },
    arrayExerciceDecompte(){
           return marche_id=>{
               let objet=this.listeBudgetParUa(marche_id)
             //  let vm=this
               let array_exercie=[]
               if(objet.length>0){
 
                   objet.forEach(function (val) {
                       array_exercie.push(val.annebudgetaire)
                   })
                   let unique = [...new Set(array_exercie)]
                  // console.log(unique)
                   if (unique.length==1){
   return []
                   }
                   return unique
               }
               return []
           }
      },
      recupereMontantEtat() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==14 && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDon() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==13  && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmprunt() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==15  && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },


recupereMontantEtatTotal() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDonTotal() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmpruntTotal() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },

      libelleLigneEconomique() {
      return id => {
        if (id != null && id != "" ) {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    recupererAnneePrecedant(){

        return parseFloat(this.anneeAmort)-1
   
   
},

idDecisionBudgetaire() {
       return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id && qtreel.exercice==this.anneeAmort);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllNoteService",
      "ajouterNoteService",
      "modifierNoteService",
      "modifierDecisionBudgetEclate",
      "ajouterHistoriqueDecisionBudgetEclate"
    ]),
     tableToExcel(table, name){
                if (!table.nodeType) table = this.$refs.table
                var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
                window.location.href = this.uri + this.base64(this.format(this.template, ctx))
            },
    //         exportHTML(){
    //   var vm = this, table = `<html xmlns:o='urn:schemas-microsoft-com:office:office xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>${vm.word}</body></html>`;

    //   var source = 'listeDesBudgetaireEclate(detail_marche.uniteadministrative_id),' + encodeURIComponent(table);
    //   var fileDownload = document.createElement("a");
    //   document.body.appendChild(fileDownload);
    //   fileDownload.href = source;
    //   fileDownload.download = 'document.doc';
    //   fileDownload.click();
    //   document.body.removeChild(fileDownload);
    // },
    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            validationOpVise() {
              if(this.editMandat.decision_cf==8){
var nouvelObjet = {
      ...this.editMandat,
      id:this.idDecisionBudgetaire(this.detail_marche.uniteadministrative_id),
     	motif :0,
       
         	famille_motif : 0,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:0,
        	observation : 0,
       
 
       };
       var nouvelObjet23 = {
     unite_administrative_id:this.detail_marche.uniteadministrative_id,
     exercice:this.detail_marche.	annebudgetaire,
      
     	motif :0,
       
         	famille_motif : 0,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:0,
        	observation : 0,
       
 
       };
 this.modifierDecisionBudgetEclate(nouvelObjet);
 this.ajouterHistoriqueDecisionBudgetEclate(nouvelObjet23)
this.$("#validationOpDefinitif").modal('hide');

          this.editMandat={
                  
                };
              }
 else if(this.editMandat.decision_cf==9){
var nouvelObjet1 = {
      ...this.editMandat,
      id:this.idDecisionBudgetaire(this.detail_marche.uniteadministrative_id),
     	motif :0,
       
         	famille_motif : 0,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:0,
        	observation : 0,
       
 
       };
        var nouvelObjet232 = {
     unite_administrative_id:this.detail_marche.uniteadministrative_id,
     exercice:this.detail_marche.	annebudgetaire,
      
     	motif :0,
       
         	famille_motif : 0,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:0,
        	observation : 0,
       
 
       };
 this.modifierDecisionBudgetEclate(nouvelObjet1);
 this.ajouterHistoriqueDecisionBudgetEclate(nouvelObjet232)
this.$("#validationOpDefinitif").modal('hide');

          this.editMandat={
                  
                };
 }

      
     else{
       var nouvelObjet2 = {
      ...this.editMandat,
      id:this.idDecisionBudgetaire(this.detail_marche.uniteadministrative_id),
     	motif :this.editMandat.motif,
       
         	famille_motif : this.editMandat.famille_motif,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:this.editMandat.date_decision,
        	observation : this.editMandat.date_decision,
       
 
       };
        var nouvelObjet2321 = {
     unite_administrative_id:this.detail_marche.uniteadministrative_id,

     exercice:this.detail_marche.annebudgetaire,
      
     	motif :this.editMandat.motif,
       
         	famille_motif : this.editMandat.famille_motif,
       
        date_decision:this.editMandat.date_decision,
        	decision_cf : this.editMandat.decision_cf,
       autre_motif:this.editMandat.autre_motif,
        	observation : this.editMandat.observation,
       
 
       };
 this.modifierDecisionBudgetEclate(nouvelObjet2);
 this.ajouterHistoriqueDecisionBudgetEclate(nouvelObjet2321)
this.$("#validationOpDefinitif").modal('hide');

          this.editMandat={
                  
                };
     }  
    },
    apercuFacture() {
      this.$("#validationOpDefinitif").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    MontantDisponibleParUa(id){
return parseFloat(this.DotationRestantAnneePrecedant(id))-parseFloat(this.CumulMontantConsommeParUaPrecedent(id))
},
 afficherModalListePersonnel(){
                window.history.back()
            },
                        genererEnPdf(){
  this.$htmlToPaper('printMe');
},
            formatageSomme:formatageSomme,
            formatageSommeSansFCFA:formatageSommeSansFCFA,
             montantPasEquipment(id){
     
          let montant=parseFloat(this.recupereMontantDon(id))+parseFloat(this.recupereMontantEmprunt(id))
          return  montant
       
   },
   TotalHorizontal(id){
     
          let montant=(parseFloat(this.recupereMontantDon(id))+parseFloat(this.recupereMontantEmprunt(id))+parseFloat(this.recupereMontantEtat(id)))
          return  montant
       
   },
  }
};
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 66%;
  margin: 0 -30%;
}
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
</style>
