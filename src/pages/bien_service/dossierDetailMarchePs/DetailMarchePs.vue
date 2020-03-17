model-list-select
addLot
ref_appel
<template>
    

<div>
        <div class="container-fluid">
            
            <h4 v-if="marcheDetail(marcheid)" >Detail Marche en procedure simplifiée : {{marcheDetail(marcheid).objet}}  <button class="btn btn-danger btn-large" v-if="marcheDetail(marcheid).attribue==0">Marché en cours de passation</button>
                <button class="btn btn-success btn-large" v-else>Marché attribué</button></h4>
            <hr />

            <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                                <th>Exercice Budgetaire</th>
                                <th>Procedure de passation</th>
                                <th>Objet marché</th>
                                <th>Reference marché</th>
                                <th>Montant prévu marché</th>
                                <th>Type de marché</th>
                                <th>Unite administrative</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="detail_marche">
                                
                                 <td class="taskOptions">
                                    {{detail_marche.exo_id}}
                                </td>
                                <td class="taskDesc">{{afficherCodeTypeProcedure(detail_marche.procedure_passation_id)}}</td>
                                <td class="taskDesc">{{detail_marche.objet}}</td>
                                <td class="taskStatus">{{detail_marche.reference_marche}}</td>
                                <td class="taskOptions">
                                    {{detail_marche.montant_marche}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.type_marche.libelle}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.objetUniteAdministrative.libelle}}
                                </td>
                               <td>{{budgetDisponible}}</td>
                            </tr>
                            </tbody>
                        </table>             

                    </div>
                </div>
            </div>
<h4 style="text-align:center;font-size:30px">{{test}}</h4>
            <div class="row-fluid">
                <div class="span3">

                </div>
            </div>
            
            <div class="row-fluid">
                <div class="span12">
                     <template v-if="afficherCodeTypeProcedure(detail_marche.procedure_passation_id) == 'PSC' && budgetDisponible < 10000000 ">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                 <li class="active"><a data-toggle="tab" href="#tab0145">Publication de l'offre</a></li>
                                <li class=""><a data-toggle="tab" href="#tab01">Reception de l'offre</a></li>
                                <li class=""><a data-toggle="tab" href="#tab4">Ouverture</a></li>
                                <li class=""><a data-toggle="tab" href="#tab1">Attribution</a></li>
                               
                                
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
                               
                                        <component-etat :macheid="detail_marche.id"></component-etat>
                                        
                               
                                <!-- <h4>Liste des receptions de cotation</h4> -->

                      <component-cotation :macheid="detail_marche"></component-cotation>
                         </div>

                        <div id="tab1" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterActeEffetFinancier" data-toggle="modal" class="btn btn-warning">Ajouter</a>
                    </div>


                </div>
                <component-acte :macheid="detail_marche.id"></component-acte>

                </div>



                   <div id="tab4" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterOuverture" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div>
               
                   <component-ouverture :macheid="detail_marche.id"></component-ouverture>
                </div>

                         </div>

                         

                    </div>
                     </template>




                     
                    <template v-else-if="afficherCodeTypeProcedure(detail_marche.procedure_passation_id) == 'PSC' && 10000000 < budgetDisponible <= 30000000">
<div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab01">Publication de l'offre</a></li>
                                <li class=""><a data-toggle="tab" href="#tab478">Reception des offre</a></li>
                                <li class=""><a data-toggle="tab" href="#tab498">Ouverture</a></li>
                                 <!-- <li class=""><a data-toggle="tab" href="#tab4110">Rapport d'ouverture</a></li> -->
                                <li class=""><a data-toggle="tab" href="#tab4100">Jugement</a></li>
                                 <li class=""><a data-toggle="tab" href="#tab4110">Rapport Jugement</a></li>
                                <li class=""><a data-toggle="tab" href="#tab178">Attribution</a></li>
                               
                                
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

                        <div id="tab478" class="tab-pane">
                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                
                                    <a href="#addCotation" data-toggle="modal" class="btn btn-success" align="rigth" >Ajouter</a></div>
                               
                                        <component-etat :macheid="detail_marche.id"></component-etat>
                                        
                               
                                <!-- <h4>Liste des receptions de cotation</h4> -->

                      <component-cotation :macheid="detail_marche"></component-cotation>
                </div>


                   <div id="tab498" class="tab-pane">
                <div align="right">
                   
 <div class="widget-content">
                        <a href="#ajouterOuverture" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div>
               
                  <component-ouverture :macheid="detail_marche.id"></component-ouverture>
                  <component-ouvertureMembre :macheid="detail_marche.id"></component-ouvertureMembre>
                </div>
 <div id="tab4100" class="tab-pane">
               <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterMP" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
                <component-analyse :macheid="detail_marche.id"></component-analyse>

                </div>
                <div id="tab4110" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterPv" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
               <component-pv :macheid="detail_marche.id"></component-pv>

                </div>
                 <div id="tab178" class="tab-pane">
               <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterActeEffetFinancier" data-toggle="modal" class="btn btn-warning">Ajouter</a>
                    </div>


                </div>
                <component-acte :macheid="detail_marche.id"></component-acte>

                </div>
                         </div>

                         

                    </div>
                    </template>
                      <template v-else-if="afficherCodeTypeProcedure(detail_marche.procedure_passation_id) == 'PSL' && 30000000 < budgetDisponible <= 60000000">
 
                     <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab8975">Offre</a></li>
                                <li ><a data-toggle="tab" href="#tab5896">Lot</a></li>
                                <li class=""><a data-toggle="tab" href="#tab78458">Lettre d'invitation CF</a></li>
                                <li class=""><a data-toggle="tab" href="#tab21230">Le mandaté</a></li>
                                <li class=""><a data-toggle="tab" href="#tab1235">Reception des offres</a></li>
                                <li class=""><a data-toggle="tab" href="#tab78477">Ouverture des offres</a></li>
                                <li class=""><a data-toggle="tab" href="#tab7845">D.Candidats</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab101">Rapport d'ouverture</a></li> -->
                                <li class=""><a data-toggle="tab" href="#tab9563"> Jugement des offres </a></li>
                                <li class=""><a data-toggle="tab" href="#tab06125">Rapport d'évaluation</a></li>
                               <li class=""><a data-toggle="tab" href="#tab067458">Attribution de l'Offre</a></li>
                                
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
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#addLot" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <add-Lot :macheid="detail_marche.id"></add-Lot>
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
               
                  <component-ouverture1 :macheid="detail_marche.id"></component-ouverture1>
                  <component-ouvertureMembre :macheid="detail_marche.id"></component-ouvertureMembre>
                </div>
                 <div id="tab7845" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="" @click="isFormulaireDossierCand" v-if="isButtunAddDossierCandidat" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div>
               
                   <dossier-Candidat :macheid="detail_marche.id"></dossier-Candidat>
                </div>
                  <div id="tab9563" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterMP" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
               
                   <component-analyse :macheid="detail_marche.id"></component-analyse>
                </div>
                 <div id="tab06125" class="tab-pane">
                 <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterPv" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
               <component-pv :macheid="detail_marche.id"></component-pv>

                </div>
                 <div id="tab067458" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterActeEffetFinancier" data-toggle="modal" class="btn btn-warning">Ajouter</a>
                    </div>


                </div>
                <component-acte :macheid="detail_marche.id"></component-acte>

                </div>
                         </div>

                        

                    </div>
                    
                    </template>
                    <template v-else-if="afficherCodeTypeProcedure(detail_marche.procedure_passation_id) == 'PSO' && 60000000 <= budgetDisponible < 100000000 ">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab001">Offre</a></li>
                                <li ><a data-toggle="tab" href="#tab0015">Lot</a></li>
                                <li class=""><a data-toggle="tab" href="#tab041">Lettre d'invitation CF</a></li>
                                <li class=""><a data-toggle="tab" href="#tab04">Le mandaté</a></li>
                                <li class=""><a data-toggle="tab" href="#tab051">Reception des offres</a></li>
                                <li class=""><a data-toggle="tab" href="#tab784">Ouverture des offres</a></li>
                                <li class=""><a data-toggle="tab" href="#tab7884">D.Candidats</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tab101">Rapport d'ouverture</a></li> -->
                                <li class=""><a data-toggle="tab" href="#tab5498"> Jugement des offres </a></li>
                                <li class=""><a data-toggle="tab" href="#tab0612">Rapport d'évaluation</a></li>
                               <li class=""><a data-toggle="tab" href="#tab06745">Attribution de l'Offre</a></li>
                                
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
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#addLot" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->

                      <add-Lot :macheid="detail_marche.id"></add-Lot>
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
                <!-- <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterOuverture" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div> -->
               
                  <component-ouverture1 :macheid="detail_marche.id"></component-ouverture1>
                  <component-ouvertureMembre :macheid="detail_marche.id"></component-ouvertureMembre>
                </div>
                 <div id="tab7884" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="" @click="isFormulaireDossierCand" v-if="isButtunAddDossierCandidat" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div>
               
                   <dossier-Candidat :macheid="detail_marche.id"></dossier-Candidat>
                </div>
                  <div id="tab5498" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterMP" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
               
                   <component-analyse :macheid="detail_marche.id"></component-analyse>
                </div>
                 <div id="tab0612" class="tab-pane">
                 <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterPv" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
               <component-pv :macheid="detail_marche.id"></component-pv>

                </div>
                 <div id="tab06745" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterActeEffetFinancier" data-toggle="modal" class="btn btn-warning">Ajouter</a>
                    </div>


                </div>
                <component-acte :macheid="detail_marche.id"></component-acte>

                </div>
                         </div>

                        

                    </div>
                    
                     </template>

                      <template v-else>
                   <p style="font-size:14px;text-align:center;color:red">PAS DE PROCEDURE</p>
                     </template>
                </div>
            </div>
              <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau Marché</a>
       
      </div>
        </div>
          

</div>

</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    //import moment from 'moment';
    import componentCotation from '../dossierDetailMarchePs/dossierComponentPs/componentCotation';
     import componentEtat from '../dossierDetailMarchePs/dossierComponentEtat/componentEtat';
     import componentOuverture from '../dossierDetailMarchePs/dossierComponentOuverture/componentOuverture';  
   import componentActe from '../dossierDetailMarchePs/dossierComponentActe/componentActe' ;
    import publicationOffre from '../DossierPso/publicationOffre/publicationOffre';
    import addLot from '../dossierLot/addLot';
        import invitationCf from '../DossierPso/lettreInvitation/invitationCf';
 import mandateBs from '../DossierPso/mandaté/mandateBs';
 import componentOuverture1 from '../dossierDetailMarcheProcedureSimplifierAvecComite/dossierComponentOuverture/componentOuverture';
import dossierCandidat from '../DossierPso/dossierCandidat/dossierCandidat'
    import componentOuvertureMembre from '../dossierDetailMarcheProcedureSimplifierAvecComite/dossierComponentOuvertureCojoMembre/componentOuvertureMembre';
    import componentAnalyse from '../dossierDetailMarcheProcedureSimplifierAvecComite/dossierComponentAnalyse/componentAnalyse';
     import componentPv from '../dossierDetailMarcheProcedureSimplifierAvecComite/dossierComponentPv/componentPv';
   //import bailleurAjouter from '../dossierComponent/bailleurAjouter';

   // import bailleurAjouter from '../dossierComponent/bailleurAjouter'

    //import {getterDossierCandidats} from "../../../vuex/modules/fabrice/bienService/Getters";
    //import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
//import { formatageSomme } from "../../../../src/Repositories/Repository";
    export default {
       
        components:{

            componentCotation,
            componentEtat,
            componentOuverture,
            componentActe,
            publicationOffre,
addLot,
invitationCf,
mandateBs,
dossierCandidat,
 componentOuverture1,
            componentOuvertureMembre,
            componentAnalyse,
componentPv
        // bailleurAjouter,

           // bailleurAjouter,

            
           // ModelListSelect,

        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                    
              
            };
        },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getMarchePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {

            ...mapGetters("bienService", ["mandate","getMandatPersonnaliserVise", "procedurePassations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres",
               "getterDossierCandidats","marches","gettersOuverturePersonnaliser","getActeEffetFinancierPersonnaliser","gettersCotationPersonnaliser"
               
               
              ]),
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
      "afficheTransfertValider"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
    ]),
    
test(){
    if(this.afficherCodeTypeProcedure(this.detail_marche.procedure_passation_id) == 'PSC' && this.budgetDisponible < 10000000){
        return "Procédure Simplifiée de demande de Cotation(PSC Sans comité)"
    }
    else if(this.afficherCodeTypeProcedure(this.detail_marche.procedure_passation_id) == 'PSC' && 10000000 < this.budgetDisponible < 30000000)
    {
return "Procédure Simplifiée de demande de Cotation(PSC Avec comité)"
    }
    else if(this.afficherCodeTypeProcedure(this.detail_marche.procedure_passation_id) == 'PSL' && 30000000 <= this.budgetDisponible < 60000000 )
    {
return "Procédure Simplifiée à compétition Limitée(PSL)"
    }
    else if(this.afficherCodeTypeProcedure(this.detail_marche.procedure_passation_id) == 'PSO' && 60000000 <= this.budgetDisponible < 100000000 )
    {
return "Procédure Simplifiée à compétition Ouverte(PSO)"
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
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.Dotation_Initiale;
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
budgetConsommerDesModule() {
      const val = parseInt(this.budgetConsommerBienService(this.detail_marche.economique_id)) + parseInt(this.budgetConsommerTransfert(this.detail_marche.economique_id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

budgetDisponible() {
      const val = parseInt(this.afficherLaDotationIntial(this.detail_marche.economique_id)) - parseInt(this.budgetConsommerDesModule);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },






        },
        
        methods: {
            ...mapActions("bienService", ['ajouterCotation' , 'modifierCotation','supprimerCotation']),
            ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise","ajouterSanction"]),
            // 
          






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
