
<template>
    <div >


        <div class="container-fluid" v-if="detail">
            <hr />

            <div class="row-fluid" >
                <div class="span12" >

                    <div class="widget-box">
                        <button class="btn btn-danger" @click.prevent="afficherModalListeExecution">Retour</button>

                        <div class="widget-title">
                             
                            
                            <div align="right">

                                <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>


                            </div>
                            <span class="icon">
                <i class="icon-th"></i>
              </span>
                            <h5>Cycle de Vie</h5>
                        </div>

     <div id="app">
         <div  id="pdf" ref="document">
             <div align="center"> <h2>Cycle de vie du marché ({{detail.objet}})</h2> </div>
             <br>
             <table class="table table-bordered " id="app1">
                 <thead>
                 <tr>
                     <th style="width:10%">EXERCICE</th>
                     <td> {{detail.exo_id}} </td>
                 </tr>
                 <tr>
                     <th style="width:10%">AUTORITE CONTRACTANTE</th>
                     <td>{{afficherUa(detail.unite_administrative_id)}} </td>
                 </tr>
                 <tr>
                     <th style="width:10%">CODE ACTIVITE</th>
                     <td>{{detail.activite}} </td>
                 </tr>
                 <tr>
                     <th style="width:10%">LIGNE BUDGETAIRE</th>
                     <td> {{detail.ligne_budgetaire}} </td>
                 </tr>
                 <tr>
                     <th style="width:10%">OBJET</th>
                     <td>{{detail.objet}} </td>
                 </tr>
                 <tr>
                     <th style="width:10%">COMPOSANTE</th>
                     <td>{{detail.type_marche.libelle}} </td>
                 </tr>
                 </thead>

             </table>
             <div class="html2pdf__page-break"></div>

             <table class="table table-bordered table-striped" id="app2">
                 <thead>
                 <tr>
                     <th style="width:10%">SOURCE (S) DE FINANCEMENTS</th>
                     <td style="width:15%" colspan="1">CONTREPARTIE </td>
                     <td style="width:15%; text-align: center" colspan="3"> BAILLEURS (B)</td>

                 </tr>
                 <tr>
                     <th style="width:10%">NOM DU BAILLEUR</th>
                     <td style="width:15%" v-if="detailBailEtat"> {{detailBailEtat.typeFinnancement.souce_financement.libelle}} </td>
                     <td style="width:15%" v-for="(baill, index) in detailBailleur" :key="baill.id">
                         B{{index + 1}}: {{baill.bailleur.libelle}} </td>
                    <!-- <td style="width:15%">B2: </td>
                     <td style="width:15%">B3: </td>
                     <td style="width:15%">B4: </td>
                     <td style="width:15%">B5: </td>-->
                 </tr>
                 <tr>
                     <th  style="width:10%">VOLET / COMPOSANTE</th>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                 </tr>
                 <tr>
                     <th  style="width:10%">DON / EMPRUNT / N-A</th>
                     <td style="width:15%" v-if="detailBailEtat"> {{detailBailEtat.typeFinnancement.libelle}} </td>
                     <td style="width:15%" v-for="baill in detailBailleur" :key="baill.id">
                         {{baill.typeFinnancement.libelle}}
                     </td>
                     <!--<td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>-->
                 </tr>
                 <tr>
                     <th  style="width:10%">POURCENTAGE (%)</th>
                     <td style="width:15%" v-if="detailBailEtat">{{detailBailEtat.tva}} </td>
                     <td style="width:15%" v-for="baill in detailBailleur" :key="baill.id">{{baill.tva}} </td>
                     <!--<td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>-->
                 </tr>
                 <tr>
                     <th  style="width:10%">MONTANT  HT FCFA</th>
                     <td style="width:15%" v-if="detailBailEtat">

                         {{formatageSomme(parseFloat(detailBailEtat.montant_ht)) || 'Non renseigné'}}
                     </td>
                     <td style="width:15%" v-for="baill in detailBailleur" :key="baill.id">
                         {{formatageSomme(parseFloat(baill.montant_ht)) || 'Non renseigné'}}
                     </td>
                    <!-- <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>-->
                 </tr>
                 <tr>
                     <th  style="width:10%">MONTANT TTC FCFA</th>
                     <td style="width:15%" v-if="detailBailEtat">
                         {{formatageSomme(parseFloat(detailBailEtat.montant)) || 'Non renseigné'}}</td>
                     <td style="width:15%" v-for="baill in detailBailleur" :key="baill.id">
                         {{formatageSomme(parseFloat(baill.montant)) || 'Non renseigné'}}
                     </td>
                     <!--<td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>-->
                 </tr>
                 <tr>
                     <th  style="width:5%">MONTANT TOTAL DE  BASE DU MARCHE / CONTRAT FCFA(HT,TTC)</th>

                     <td style="width:15%" colspan="1" >  {{formatageSomme(parseFloat(detail.acte_effet_financiare[0].montant_act_ht)) || 'Non renseigné'}}  HT </td>
                     <td style="width:15%" colspan="1" >{{formatageSomme(parseFloat(detail.acte_effet_financiare[0].montant_act)) || 'Non renseigné'}}   TTC </td>
                 </tr>
                 <tr>
                     <th  style="width:5%">AGENT CF DE SUIVI </th>
                     <td style="width:15%" colspan="6" v-if="detailCF" > {{detailCF.nom_mandat|| 'Non renseigné'}} {{detailCF.prenom_nom|| 'Non renseigné'}}</td>
                     <td style="width:15%" colspan="6" v-else > Sans objet</td>
                 </tr>

                 </thead>

             </table>
             <div class="html2pdf__page-break"></div>
             <table class="table table-bordered table-striped" id="app3">
                 <thead>
                 <tr>
                     <th>ETAT DE LA CONTRACTUALISATION:
                         <span title="MARCHE EN EXERCUTER"  v-if="detail.attribue == 2" style=" color: red; font-size: 15px">ACHEVE</span>

                         <span title="MARCHE EN EXERCUTER"  v-else-if="detail.attribue == 1"  style=" color: green; font-size: 15px">En cours</span>
                     </th>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>

             <table class="table table-bordered table-striped" id="app4">
                 <thead>
                 <tr>
                     <th style="width:5%">TYPE ET REFERENCES DE LA  PROCEDURE</th>
                     <td style="width:15%" colspan="6" > ({{detail.procedure_passation.libelle}}) {{detail.procedure_passation.type_procedure.libelle}} </td>
                 </tr>
                 <tr>
                     <th style="width:5%">NATURE DES PRIX</th>
                     <td style="width:15%" colspan="6" >{{detail.nature_prix}} </td>
                 </tr>
                 <tr>
                     <th style="width:5%">DATE D'OUVERTURE</th>
                     <td style="width:10%"  >PLIS TECHNIQUE </td>

                     <td style="width:15%"  v-if="detailCojo">{{formaterDate(detailCojo.date_offre_tech)}} </td>
                     <td style="width:15%"  v-else>NON APPLICABLE </td>
                     <td style="width:10%"  >PLIS FINANCIER</td>
                     <td style="width:15%"  v-if="detailCojo">{{formaterDate(detailCojo.date_offre_fin)}} </td>
                     <td style="width:15%" v-else>NON APPLICABLE </td>
                 </tr>

                 <tr>
                     <th>MONTANT CONFIDENTIEL FCFA</th>
                     <td style="width:15%" colspan="3" v-if="detailCojo">{{formatageSomme(parseFloat(detailCojo.montant_ouverture_ht)) || 'Non renseigné'}} HT</td>
                     <td style="width:15%" colspan="3" v-else>NON APPLICABLE </td>
                     <td style="width:15%" colspan="3" v-if="detailCojo">{{formatageSomme(parseFloat(detailCojo.montant_ouverture)) || 'Non renseigné'}} TTC</td>
                     <td style="width:15%" colspan="3" v-else>NON APPLICABLE </td>

                 </tr>
                 <tr>
                     <th style="width:5%">DATE D'OUVERTURE</th>
                     <td style="width:28%" colspan="1" >TECHNIQUE </td>
                     <td style="width:15%" colspan="1" v-if="detailCojo">{{formaterDate(detailCojo.date_ouverture)}} </td>
                     <td style="width:15%" colspan="1" v-else>NON APPLICABLE </td>
                     <td style="width:28%" colspan="1" >COMBINE</td>
                     <td style="width:15%" colspan="1" v-if="detailCojo">{{formaterDate(detailCojo.date_ouverture)}} </td>
                     <td style="width:15%" colspan="1" v-else>NON APPLICABLE </td>
                 </tr>
                 <tr>
                     <th style="width:5%">DATE D'ENVOI DEMANDE D'ANO</th>
                     <td style="width:28%"  colspan="1" >DMP </td>
                     <td style="width:15%" colspan="1" v-if="dernierDemandeAno"> {{formaterDate(dernierDemandeAno.date_demande)}} </td>
                     <td style="width:15%" colspan="1" v-else>NON APPLICABLE </td>
                     <td style="width:15%" colspan="1" > BAILLEUR</td>
                     <td style="width:15%" colspan="1" v-if="dernierAnoBaille"> {{formaterDate(dernierAnoBaille.date_ano_dmp)}}</td>
                     <td style="width:15%" colspan="1" v-else>NON APPLICABLE </td>

                 </tr>
                 <tr>
                     <th style="width:5%">DATE RETOUR DEMANDE D'ANO</th>
                     <td style="width:28%"  colspan="1" >DMP </td>
                     <td style="width:15%" colspan="1" v-if="dernierDemandeAno"> {{formaterDate(dernierDemandeAno.date_avis)}} </td>
                     <td style="width:15%" colspan="1" v-else>NON APPLICABLE </td>
                     <td style="width:15%" colspan="1" > BAILLEUR</td>
                     <td style="width:15%" colspan="1" v-if="dernierAnoBaille"> {{formaterDate(dernierAnoBaille.date_avis)}}</td>
                     <td style="width:15%" colspan="1" v-else>NON APPLICABLE </td>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
             <div class="html2pdf__page-break"></div>
             <table class="table table-bordered table-striped" id="app5">
                 <thead>
                 <tr>
                     <th style="width:5%">RESULTAT ET OBSERVATION DE L'ANO</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th style="width:5%">DATE D'ATTRIBUTION DEFINITIVE</th>
                     <td style="width:15%" colspan="6" v-if="detailActeEffet">
{{detailActeEffet.date_attributaire}}
                     </td>
                     <td style="width:15%" colspan="6" v-else>
                      NON APPLICABLE
                     </td>
                 </tr>
                 <tr>
                     <th style="width:5%">ENTREPRISE ATTRIBUTAIRE</th>
                     <td style="width:15%" colspan="3" v-if="detailActeEffet">{{detailActeEffet.varObjetEntreprise.raison_sociale}} </td>
                     <td style="width:15%" colspan="3" v-else> NON APPLICABLE</td>
                     <td style="width:15%" colspan="3" v-if="detailActeEffet">N° COMPTE CONTRIBUABLE: {{detailActeEffet.varObjetEntreprise.numero_cc}} </td>
                     <td style="width:15%" colspan="3" v-else> NON APPLICABLE</td>
                 </tr>
                 <tr>
                     <th>AUTORITE APPROBATRICE DU MARCHE / CONTRAT</th>
                     <td style="width:15%" colspan="6" v-if="detailActeEffet">
                         {{detailActeEffet.autorite_approbation}}
                     </td>
                     <td style="width:15%" colspan="6" v-else>
                         NON APPLICABLE
                     </td>
                 </tr>
                 <tr>
                     <th>DATE D'APPROBATION</th>
                     <td style="width:15%" colspan="6" v-if="detailActeEffet">
                         {{detailActeEffet.date_attributaire}}
                     </td>
                     <td style="width:15%" colspan="6" v-else>
                         NON APPLICABLE
                     </td>
                 </tr>
                 <tr>
                     <th>NUMERO DE MARCHE</th>
                     <td style="width:15%" colspan="6" v-if="detailActeEffet">
                         {{detailActeEffet.numero_marche}}
                     </td>
                     <td style="width:15%" colspan="6" v-else>
                         NON APPLICABLE
                     </td>
                 </tr>
                 <tr>
                     <th>CAUTIONNEMENT(%,HT,TTC)</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th>RETENUE DE GARANTIE(%,HT,TTC)</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th>AVANCE DE DEMARRAGE(%,HT,TTC)</th>
                     <td style="width:15%" colspan="6" v-if="detailActeEffet">
                        ( {{formatageSomme(parseFloat(detailActeEffet.avance_demarrage_ht))}}  HT, {{formatageSomme(parseFloat(detailActeEffet.avance_demarrage_ttc))}} TTC )
                     </td>
                     <td style="width:15%" colspan="6" v-else>
                         NON APPLICABLE
                     </td>
                 </tr>
                 <tr>
                     <th>DATE DE NOTIFICATION DE L'ORDRE DE SERVICE</th>
                     <td style="width:15%" colspan="6" v-if="detailActeEffet">
                         {{detailActeEffet.date_odre_service}}
                     </td>
                     <td style="width:15%" colspan="6" v-else>
                         NON APPLICABLE
                     </td>
                 </tr>
                 <tr>
                     <th>DATE PREVISIONELLE DE DEMARRAGE DES TRAVAUX</th>
                     <td style="width:15%" colspan="6" v-if="detail">
                        {{detail.date_execution_marche_debut_prevue}}
                     </td>
                     <td style="width:15%" colspan="6" v-else>
                         NON APPLICABLE
                     </td>
                 </tr>
                 <tr>
                     <th>DELAI D'EXECUTION</th>
                     <td style="width:15%" colspan="6" v-if="detail">
                         {{detail.durre_marche_prevue}}
                     </td>
                     <td style="width:15%" colspan="6" v-else>
                         NON APPLICABLE
                     </td>
                 </tr>
                 <tr>
                     <th>DATE PREVISIONNELLE DE FIN DES TRAVAUX</th>
                     <td style="width:15%" colspan="6" v-if="detail">
                         {{detail.date_execution_fin_prevue}}
                     </td>
                     <td style="width:15%" colspan="6" v-else>
                         NON APPLICABLE
                     </td>
                 </tr>
                 <tr>
                     <th>DUREE TOTALE  DE LA CONTRACTUALISATION</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
             <div class="html2pdf__page-break"></div>
             <table class="table table-bordered table-striped" id="app6">
                 <thead>
                 <tr>
                     <th>SITUATION D'EXECUTION:
                         <span title="MARCHE EN EXERCUTER"  v-if="detail.attribue == 2" style=" color: green; font-size: 15px">EN COURS</span>

                         <span title="MARCHE EN EXERCUTER"  v-if="detail.attribue == 1"  style=" color: red; font-size: 15px">Non demarré</span>
                         <span title="MARCHE EN EXERCUTER"  v-if="detail.attribue == 3"  style=" color: red; font-size: 15px">RESILIE</span>

                     </th>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
             <table class="table table-bordered table-striped" id="app7">
                 <thead>
                 <tr>
                     <th style="width:5%" >DATE EFFECTIVE DE DEMARRAGE DES TRAVAUX</th>

                     <td style="width:15%" v-if="detailBailEtat">
                         {{formaterDate(detailActeEffet.date_odre_service)}} </td>
                     <td style="width:15%" v-else colspan="6">
                        NON APPLICABLE
                     </td>
                 </tr>
                 <tr>
                     <th>REMBOURSEMENT AVANCE DE DEMARRAGE(%,HT,TTC)</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th>NIVEAU D'ENGAGEMENT DU  CAUTIONNEMENT(%,HT,TTC)</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th>NIVEAU D'ENGAGEMENT DE LA RETENUE DE GARANTIE(%,HT,TTC)</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>

             <table class="table table-bordered table-striped" id="app8">
                 <thead>
                 <tr>
                     <th>AVENANT (S) APPROUVE (S) </th>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
             <table class="table table-bordered table-striped" id="app9">
                 <thead>
                 <tr>
                     <th style="width:5%">NOMBRE:</th>
                     <td style="width:15%" colspan="2" v-if="detailAvenant">{{nbrAvenant}} </td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                     <td style="width:15%" colspan="2" v-if="nbrAvenant">{{detailAvenant.taux}} % </td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                     <td style="width:15%" colspan="2" v-if="nbrAvenant">
                         {{formatageSomme(parseFloat(montantHtAvanant(detailAvenant))) || 'Non renseigné'}} HT</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                     <td style="width:15%" colspan="2" v-if="nbrAvenant">
                         {{formatageSomme(parseFloat(montantTtcAvanant(detailAvenant))) || 'Non renseigné'}} TTC</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                 </tr>
                 <tr>
                     <th>MONTANT TOTAL DU MARCHE APRES AVENANT (S) FCFA</th>
                     <td style="width:15%" colspan="4" v-if="nbrAvenant"> {{formatageSomme(parseFloat(montantHtAvanant(detailAvenant)+parseFloat(detailActeEffet.montant_act_ht)))}} HT </td>
                     <td style="width:15%" colspan="4" v-else>NON APPLICABLE </td>
                     <td style="width:15%" colspan="4" v-if="nbrAvenant">
                         {{formatageSomme(montantTtcAvanant(detailAvenant)+parseFloat(detailActeEffet.montant_act))}}
                         <!--{{formatageSomme(parseFloat(montantTtcAvanant(detailAvenant)+parseFloat(detailActeEffet.montant_act)))}}--> HT </td>
                     <td style="width:15%" colspan="4" v-else>NON APPLICABLE </td>
                 </tr>
                 </thead>
             </table>

             <table class="table table-bordered table-striped" id="app10">
                 <thead>
                 <tr>
                     <th>DECOMPTE (S)  VISE (S) </th>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
             <table class="table table-bordered table-striped" id="app11">
                 <thead>

                 <tr>
                     <th style="width:5%">DATE</th>
                     <td style="width:15%" colspan="8" > </td>
                 </tr>
                 <tr>
                     <th>DERNIER / NUMERO</th>
                     <td style="width:15%" colspan="2" v-if="dernierDecompte">
                         {{dernierDecompte.numero_mandat}}
                     </td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                     <td style="width:15%" colspan="2" v-if="dernierDecompte">%</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                     <td style="width:15%" colspan="2"   v-if="dernierDecompte">HT</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                     <td style="width:15%" colspan="2" v-if="dernierDecompte">{{formatageSomme(parseFloat(dernierDecompte.total_general))}}</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                 </tr>
                 <tr>
                     <th>CUMUL / NOMBRE</th>
                     <td style="width:15%" colspan="2" v-if="detailDecompte.length">{{detailDecompte.length}}</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" v-if="detailDecompte.length">
                         {{formatageSomme(parseFloat(montantDecompte(detailDecompte)))}}TTC</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                 </tr>

                 </thead>
             </table>

             <table class="table table-bordered table-striped" id="app12">
                 <thead>
                 <tr>
                     <th>SITUATION FINANCIERE DU MARCHE/CONTRAT</th>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>

             <table class="table table-bordered table-striped" id="app13">
                 <thead>
                 <tr>
                     <th>DATE</th>
                     <td style="width:15%" colspan="8" ></td>
                 </tr>
                 <tr>
                     <th style="width:10%" >TOTAL PAIEMENT  EXECUTE</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" v-if="detailDecompte.length">{{formatageSomme(parseFloat(montantDecompte(detailDecompte)))}}TTC</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                 </tr>
                 <tr>
                     <th style="width:10%" >PART ETAT</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" v-if="detailDecompte.length">{{formatageSomme(parseFloat(montantPartEtat(detailDecompte)))}}TTC</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                 </tr>
                 <tr>
                     <th style="width:10%" >PART BAILLEUR</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" v-if="detailDecompte.length">{{formatageSomme(parseFloat(montantPartBailleur(detailDecompte)))}} TTC</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                 </tr>
                 <tr>
                     <th style="width:10%" >TOTAL RESTE A PAYER</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>

                     <td style="width:15%" colspan="2" v-if="detailDecompte.length">{{formatageSomme((montantTtcAvanant(detailAvenant)+parseFloat(detailActeEffet.montant_act))-montantDecompte(detailDecompte))}} TTC</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                 </tr>
                 <tr>
                     <th style="width:10%" >PART ETAT</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" v-if="detailDecompte.length">{{formatageSomme(parseFloat(detailBailEtat.montant)-montantPartEtat(detailDecompte))}} TTC</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                 </tr>
                 <tr>
                     <th style="width:10%" >PART BAILLEUR</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" v-if="detailDecompte.length">{{formatageSomme(montantActPartBailleurTTC(detailBailleur)-montantPartBailleur(detailDecompte))}} TTC</td>
                     <td style="width:15%" colspan="2" v-else>NON APPLICABLE </td>
                 </tr>

                 <tr>
                     <th>DATE DE FIN D'EXECUTION DES TRAVAUX</th>
                     <td style="width:15%" colspan="8" v-if="detailActeEffet">{{detailActeEffet.date_fin_exe}}</td>
                     <td style="width:15%" colspan="8" v-else>NON APPLICABLE</td>
                 </tr>
                 <tr>
                     <th>DATE RECEPTION PROVISOIRE</th>
                     <td style="width:15%" colspan="8" v-if="detailActeEffet">{{detailActeEffet.date_fin_exe}}</td>
                     <td style="width:15%" colspan="8" v-else>NON APPLICABLE</td>
                 </tr>
                 <tr>
                     <th>DATE RECEPTION DEFINITIVE</th>
                     <td style="width:15%" colspan="8" v-if="detail">{{detail.date_execution_fin_prevue}}</td>
                     <td style="width:15%" colspan="8" v-else>NON APPLICABLE</td>
                 </tr>
                 <tr>
                     <th>AUTRES</th>
                     <td style="width:15%" colspan="8" ></td>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
             <div class="html2pdf__page-break"></div>
             <table class="table table-bordered table-striped" id="app14">
                 <thead>
                 <tr>
                     <th>OBJECTIFS DU MARCHE/CONTRAT / LIVRABLES ATTENDUS </th>
                     <th>OBSERVATIONS</th>
                     <th>CONTROLEUR FINANCIER</th>
                 </tr>
                 <tr height="120px">
                     <td v-if="detail">{{detail.objet}} / {{detail.livrable}} </td>
                     <td v-else>OK</td>
                     <td > </td>
                     <td v-if="detailCF"> {{detailCF.nom_mandat|| 'Non renseigné'}} {{detailCF.prenom_nom|| 'Non renseigné'}}

                     </td>
                     <td v-else>NON APPLICABLE</td>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
             <hr>
         </div>
     </div>





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
    import moment from "moment";
    import { mapGetters, mapActions } from "vuex";
    // import html2canvas from 'html2canvas'
    // import * as JsPDF from 'jspdf'
    import html2pdf from 'html2pdf.js'
    // import moment from "moment";
    // import { ModelListSelect } from "vue-search-select";
    // import "vue-search-select/dist/VueSearchSelect.css";
    import { formatageSomme } from "../../../src/Repositories/Repository";

    export default {
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
                formData: {
                    numeromatricule:"PERSONNEL",
                    referencebancaire:"Liste du personnel",
                    codefichier: "",
                    activite_id: "",
                    programme_id: "",
                    action_id:"",
                    ua_id: "",
                    moisdepaiement: "",
                    montantdessalaires: "",
                    objetdepense:"",
                    ligne_id:"",
                    fichierjoint:""
                },
                editpaiementPersonnel: {

                    codefichier: "",
                    activite_id: "",
                    programme_id: "",
                    action_id:"",
                    ua_id: "",
                    moisdepaiement: "",
                    montantdessalaires: "",
                    objetdepense:"",
                    ligne_id:"",
                    fichierjoint:""

                },
                detail:"",
                json_fields: {
                    UNIT_ADMINISTRATIVE: "ua.libelle",
                    // SECTION: "secti.nom_section",
                    // SERVICE_GESTIONNAIRE: "servivegest.libelle",
                    // LOCALISATION_GEO: "localgeo.libelle",
                    // CODE: "code",
                    // LIBELLE: "libelle",
                    // DATE_CREATION: "date_creation"
                },
                search: "",
                detailBailEtat:"",
                detailBailleur:"",
                detailCF:"",
                detailActeEffet:"",
                detailAvenant:"",
                nbrAvenant:"",
                detailDecompte:"",
                dernierDecompte:"",
                detailCojo:"",
                detailDetailAno:"",
                dernierDemandeAno:"",
                detailAnoBailleur:"",
                dernierAnoBaille:"",
            };
        },
        created() {
         this.detail=this.marches.find(item=>item.id== this.$route.params.id)

            this.detailBailEtat=this.personnaliseGetterMarcheBailleur.find(item=>{
                if (item.typeFinnancement.code==1 && item.marche_id==this.$route.params.id ){
                    return item
                }
            })

            this.detailBailleur=this.personnaliseGetterMarcheBailleur.filter(item=>{
                if (item.typeFinnancement.code!=1 && item.marche_id==this.$route.params.id){
                    return item
                }
            })

            this.detailCF=this.getterMandate.find(item=>item.marche_id==this.$route.params.id)

            this.detailActeEffet=this.getActeEffetFinancierPersonnaliserContrat.find(item=>item.marche_id==this.$route.params.id)
            this.detailAvenant=this.avenants.filter(item=>item.marche_id==this.$route.params.id)
            this.nbrAvenant=this.detailAvenant.length
            console.log(this.detailAvenant)
             //console.log(this.detailActeEffet)
           //console.log(this.getMandatPersonnaliserVise)
            this.detailDecompte=this.getMandatPersonnaliserVise.filter(item=>item.marche_id==this.$route.params.id).reverse()
            if(this.detailDecompte){
             this.dernierDecompte=this.detailDecompte[0]
             //   console.log(this.getterCojos)
            }
            this.detailCojo=this.getterCojos.find(item=>item.marche_id==this.$route.params.id)
            this.detailDetailAno=this.getterDemandeAno.filter(item=>item.marche_id==this.$route.params.id).reverse()
            if(this.detailDetailAno){
                this.dernierDemandeAno=this.detailDetailAno[0]
            }
            this.detailAnoBailleur=this.getterAnoDMPBailleur.filter(item=>item.marche_id==this.$route.params.id).reverse()
            if(this.detailAnoBailleur){
                this.dernierAnoBaille =this.detailAnoBailleur[0]
            }
         //   console.log(this.getterAnoDMPBailleur)

        },
        computed: {
            ...mapGetters("bienService", ["modepaiements",'mandats','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
                'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
                'nombremarchesExecute',"avenants","getMandatPersonnaliserVise",
                'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
                "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
                "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser",
                "typeActeEffetFinanciers","personnaliseGetterMarcheBailleur","getterMandate",
                "getActeEffetFinancierPersonnaliserContrat","getterCojos","getterDemandeAno","getterAnoDMPBailleur"]),

            ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),

            ...mapGetters('uniteadministrative',[
                "plans_programmes",
                "uniteAdministratives",
                "afficheNiveauAction",
                "afficheNiveauActivite",
                "derniereNivoPlanBudgetaire",
                "getPersonnaliseBudgetGeneralParPersonnel"


            ]),

            ...mapGetters('parametreGenerauxAdministratif',[

                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires"
            ]),

            ...mapGetters('parametreGenerauxFonctionnelle',[

                "plans_fonctionnels",
                "afficheNiveauPlanFonctionnel"
            ]),

            ...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

            ...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),


            afficherListeSalaireEnExecution(){
                return this.paiementPersonnel.filter(element => element.valisationvirement == 0)
            },





            afficherUa() {
                return id => {
                    if (id != null && id != "") {
                        const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

                        if (qtereel) {
                            return qtereel.libelle;
                        }
                        return 0
                    }
                };
            },
            montantHtAvanant() {
                return avenant => {
                    console.log(avenant)
                    if (avenant != null && avenant != "") {
                        let initialValue = 0;
                        let montant_ht=  avenant.reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.montant_ht) ;
                        }, initialValue);
                        return montant_ht
                    }
                    return 0

                };
            },
            montantDecompte() {
                return objet => {
                    if (objet != null && objet != "") {
                        let initialValue = 0;
                        let montant_ht=  objet.reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.total_general) ;
                        }, initialValue);
                        return montant_ht
                    }
                    return 0

                };
            },
            montantPartEtat() {
                return objet => {
                    if (objet != null && objet != "") {
                        let initialValue = 0;
                        let montant=  objet.reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.montant_tresor) ;
                        }, initialValue);
                        return montant
                    }
                    return 0
                };
            },
            montantPartBailleur() {
                return objet => {
                    if (objet != null && objet != "") {
                        let initialValue = 0;
                        let montant=  objet.reduce(function (total, currentValue) {
                            let montant=parseFloat(currentValue.montant_emprunt)+parseFloat(currentValue.montant_don)
                            return total + parseFloat(montant) ;
                        }, initialValue);
                        return montant
                    }
                    return 0
                };
            },
            montantActPartBailleurTTC() {
                return objet => {
                    if (objet != null && objet != "") {
                        let initialValue = 0;
                        let montant=  objet.reduce(function (total, currentValue) {
                            let montant=parseFloat(currentValue.montant)
                            return total + parseFloat(montant) ;
                        }, initialValue);
                        return montant
                    }
                    return 0
                };
            },
            montantTtcAvanant() {
                return avenant => {
                    if (avenant != null && avenant != "") {
                        let initialValue = 0;
                        let montant_ttc=  avenant.reduce(function (total, currentValue) {
                            return total + parseFloat(currentValue.montant_avenant) ;
                        }, initialValue);
                        return montant_ttc
                    }
                    return 0
                };
            },
            Codeeconomique() {
                return id => {
                    if (id != null && id != "") {
                        const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

                        if (qtereel) {
                            return qtereel.code.concat('  ', qtereel.libelle);
                        }
                        return 0
                    }
                };
            },
            activerLigneBudgetaire(){
                return this.formData.ua_id ==""
            },
            activerProgramme(){
                return this.formData.ligne_id ==""
            },

            activerAction(){
                return this.formData.programme_id ==""
            },

            activerActivite(){
                return this.formData.action_id ==""
            },
            afficheActiviteParAction() {
                return id => {
                    if (id != null && id != "") {
                        return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.afficheAction.id == id);
                    }
                };
            },
            afficheUaParLignePersonnel() {
                return id => {
                    if (id != null && id != "") {
                        return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.afficheUA.id == id);
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
            afficheProgrammeParLigne() {
                return id => {
                    if (id != null && id != "") {
                        return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.afficheEconomique.id == id);
                    }
                };
            },

            afficheActionParProgramme() {
                return id => {
                    if (id != null && id != "") {
                        return this.getPersonnaliseBudgetGeneralParPersonnel.filter(element => element.afficheProgramme.id == id);
                    }
                };
            },



  typeFiltre(){

                const searchTerm = this.search.toLowerCase();

                return this.paiementPersonnel.filter((item) => {


                        return item.libelle.toLowerCase().includes(searchTerm)



                    }
                )
            }

        },
        methods: {
            ...mapActions("personnelUA", [
                "getpaiementPersonnel",
                "ajouterpaiementPersonnel",
                "modifierpaiementPersonnel",
                "supprimerpaiementPersonnel"
            ]),
            formatageSomme:formatageSomme,
            afficherModalAjouterpaiementPersonnel() {
                this.$("#exampleModal").modal({
                    backdrop: "static",
                    keyboard: false
                });
            },
            // fonction pour vider l'input ajouter
            ajouterUniteAdministrativeLocal() {
                var nouvelObjet = {
                    ...this.formData,

                    exerciceencours: this.anneeAmort

                };
                this.ajouterpaiementPersonnel(nouvelObjet);

                this.formData = {

                    codefichier: "",
                    activite_id: "",
                    programme_id: "",
                    action_id:"",
                    ua_id: "",
                    moisdepaiement: "",
                    montantdessalaires: "",
                    objetdepense:"",
                    ligne_id:"",
                    fichierjoint:""


                };
            },
            // fonction pour vider l'input modifier
            modifierpaiementPersonnelLocal() {
                //  var nouvelObjet = {
                // ...this.editUniteAdministrative,
                // code: this.codeuniteadministrativeModifier,
                // code_ua: this.codeuniteadministrativeModifier2
                // };
                // this.modifierpaiementpersonnel(nouvelObjet);
                this.$("#modificationModal").modal('hide');
                // this.editpaiementPersonnel = {
                //  exercice_en_cours: "",
                //  codefichier: "",
                //  activite_id: "",
                //  programme_id: "",
                //  action_id:"",
                //  ua_id: "",
                //  moispaiement: "",
                //  montantsalaire: "",
                // objetdepense:"",
                // ligne_id:"",
                // fichierjoint:""

                //
                // };
            },
            // afficher modal de modification
            afficherModalModifierpaiementPersonnel(index) {
                this.$("#modificationModal").modal({
                    backdrop: "static",
                    keyboard: false
                });

                this.editpaiementPersonnel = this.paiementPersonnel[index];
            },
            alert() {
                console.log("ok");
            },
            formaterDate(date) {
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            genererEnPdf(){
                html2pdf(this.$refs.document, {
                    margin: 1,
                    filename:'Cycle de vie '+this.detail.objet+'.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { dpi: 192, letterRendering: true },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
                })
              /*  var doc = new JsPDF('landscape')

                doc.text(98,10,"CYCLE DE VIE")*/
               /* doc.autoTable({html:'#app1'})
                doc.autoTable({ html: '#app2'})
                    doc.autoTable({ html: '#app3'}),
                    doc.autoTable({ html: '#app4'}),
                    doc.autoTable({ html: '#app5'}),
                        doc.autoTable({html:'#app6'})
                doc.autoTable({ html: '#app7'})
                doc.autoTable({ html: '#app8'}),
                    doc.autoTable({ html: '#app9'}),
                    doc.autoTable({ html: '#app10'}),
                    doc.autoTable({html:'#app11'})
                doc.autoTable({ html: '#app12'}),
                doc.autoTable({ html: '#app13'}),
                    doc.autoTable({ html: '#app14'}),


                    doc.save('Cyscle.pdf')
                doc.output('dataurlnewwindow')
                return 0*/
/*
                html2canvas(document.querySelector('#app'), {imageTimeout: 3000, useCORS: true,scale: 0.8,
                    logging: true,
                    allowTaint: false,
                    backgroundColor: null},).then(canvas => {
                    document.getElementById('pdf').appendChild(canvas)
                    var base64image =canvas.toDataURL('image/png');
                   /!* let img = canvas.toDataURL('image/png')
                    var imgWidth = 205;
                    var pageHeight = 290;
                    var imgHeight = canvas.height * imgWidth / canvas.width;
                    var heightLeft = imgHeight;

                    var doc = new JsPDF('p', 'mm');


                    var position = 0;

                    doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;

                    while (heightLeft >= 0) {
                        position = heightLeft - imgHeight;
                        doc.addPage();
                        doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
                        heightLeft -= pageHeight;
                    }*!/


                    var margin = 2;
                    var imgWidth = 210 - 2*margin;
                    var pageHeight = 295;
                    var imgHeight = canvas.height * imgWidth / canvas.width;
                    var heightLeft = imgHeight;




                    var doc = new JsPDF('p', 'mm');
                    var position = 0;

                    doc.addImage(base64image, 'PNG', margin, position, imgWidth, imgHeight);

                    heightLeft -= pageHeight;

                    while (heightLeft >= 0) {
                        position = heightLeft - imgHeight;
                        doc.addPage();
                        doc.addImage(base64image, 'PNG', margin, position, imgWidth, imgHeight);
                        heightLeft -= pageHeight;
                    }

                    doc.save( 'file.pdf')
                    return 0
                })*/
            },
            // formaterDate(date) {
            // return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            // },
            ExporterEnExel(){
                this.$refs.excel.click()
            },
            afficherModalListeExecution(){
                window.history.back();
            },
        }
    };
</script>
<style scoped>

    .tailgrand{
        width: 95%;
        margin: 0 -48%;


    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>