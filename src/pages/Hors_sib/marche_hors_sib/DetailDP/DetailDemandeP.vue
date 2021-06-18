<template>
    <div>
 <div class="widget-box">

                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <div class="row-fluid" v-if="detail_marche">
                            <div class="span4">
                                <div class="span4" align="left">
                                <button  class="btn btn-danger" @click.prevent="pagePrecedent" href="#">Retour</button>

                            </div>
                            </div>
                            <div class="span4">       

                            </div>
                            <div class="span4" align="right">
                                <router-link :to="{ name: 'FicheContratualisation', params: { id: detail_marche.id }}"
                                             class="btn btn-primary" >
                                    <span class=""><i class="icon-file"></i> Fiche de contratualisation</span>
                                </router-link>
                            </div>
                        </div>



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

                         <span v-if="detail_marche.economique_id == CodeExempte(detail_marche.economique_id)">Exemptée procedure</span>
                         <span v-else>Ligne à marché</span>
                       </td>
                               <!-- <td>{{budgetDisponible}}</td> -->
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <table class="table table-bordered table-striped">
               <div class="widget-box">
             <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab78965">ETAPE TECHNIQUE</a>
                      </li>
                       
                      <li>
                        <a data-toggle="tab" href="#tab45632">ETAPE FINANCIERE</a>
                      </li>
                    
                      <!-- <li>
                        <a data-toggle="tab" href="#tab12365">Autres Information</a>
                      </li> -->
                     
                    </ul>
             </div>

                    <div class="widget-content tab-content">


                    <div id="tab78965" class="tab-pane active">
                        
                    <template >
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tabDP">Offre</a></li>
                                <li ><a data-toggle="tab" href="#tabLotDP">Lot</a></li>
                                <li class=""><a data-toggle="tab" href="#tabLettrDP">Lettre d'invitation CF && Mandaté</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tabMandateDP">Mandaté</a></li> -->
                                <li class=""><a data-toggle="tab" href="#tabReceptionDP">Reception</a></li>
                                <li class=""><a data-toggle="tab" href="#tabOuvertureDP">Ouverture</a></li>
                                <!-- <li class=""><a data-toggle="tab" href="#tabPVAMI">PV d'ouverture</a></li> -->
                              <!--  <li class=""><a data-toggle="tab" href="#tab7884">D.Candidats</a></li>-->
                                <li class=""><a data-toggle="tab" href="#tabAnalyseDP"> Analyse </a></li>
                                <li class=""><a data-toggle="tab" href="#tabReserveDP">Reserves CF</a></li>
                                <li class=""><a data-toggle="tab" href="#tabPVJugementDP">PV Jugement</a></li>
                               <li class=""><a data-toggle="tab" href="#tabAttribuDP">Attribution</a></li>
                                <li class=""><a data-toggle="tab" href="#tabBailleurDP">bailleur</a></li>
                                <li class=""><a data-toggle="tab" href="#tabARNPDP">ANRMP</a></li>


                            </ul>
                        </div>


                         <div class="widget-content tab-content">

                         <div id="tabDP" class="tab-pane active">
                                <div class="span4"></div>
                                <div class="span4"></div>
                               
                                <!-- <h4>Publication de l'offre</h4> -->

                      <publicationOffreDP :macheid="detail_marche.id"></publicationOffreDP>
                         </div>

                    <div id="tabLotDP" class="tab-pane">

                      <lot-marche :macheid="detail_marche.id"></lot-marche>
                     <!-- <add-Lot :macheid="detail_marche.id"></add-Lot>-->
                         </div>


                <div id="tabLettrDP" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <!-- <div class="span4" align="right">
                                    <a href="#ajouterLettreInvitation" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div> -->
                                <!-- <h4>Publication de l'offre</h4> -->


                      <invitationCf :macheid="detail_marche.id"></invitationCf>

                      
                                <div id="" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                               

                      <mandate-Bs :macheid="detail_marche.id"></mandate-Bs>
                         </div>
                         </div>
 <!-- <div id="tabMandateDP" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                               

                      <mandate-Bs :macheid="detail_marche.id"></mandate-Bs>
                         </div> -->

                          <div id="tabReceptionDP" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <!-- <div class="span4" align="right">
                                    <a href="#addCotation" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div> -->
                                <!-- <h4>Publication de l'offre</h4> -->

                      <component-cotation :macheid="detail_marche"></component-cotation>
                         </div>
                             <!-- <div id="tab444" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#addCotation" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <h4>Publication de l'offre</h4>

                      <component-cotation :macheid="detail_marche"></component-cotation>
                         </div> -->
                          <div id="tabOuvertureDP" class="tab-pane">
                            <!-- <ouverture-offre :macheid="detail_marche.id"></ouverture-offre> -->

                  <OuvertureOffreSansFin :macheid="detail_marche.id"></OuvertureOffreSansFin>
                  <!-- <component-ouvertureMembre :macheid="detail_marche.id"></component-ouvertureMembre> -->
                </div>



                <!-- <div id="tabPVAMI" class="tab-pane">
                      <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterRapportOuvertureB" data-toggle="modal" class="btn btn-primary">Joindre PV</a>
                    </div>


                </div>
                <rapportOuverture :macheid="detail_marche.id"></rapportOuverture>

                </div> -->

                 <!-- <div id="tab7884" class="tab-pane">


                   <dossier-Candidat :macheid="detail_marche.id"></dossier-Candidat>
                </div> -->
                  <div id="tabAnalyseDP" class="tab-pane">

                    <JugementSansFin :macheid="detail_marche.id"></JugementSansFin>

<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>
                   <div id="tabReserveDP" class="tab-pane">

                    <reserveCf :macheid="detail_marche.id"></reserveCf>

<!--                   <component-analyse :macheid="detail_marche.id"></component-analyse>-->
                </div>
                 <div id="tabPVJugementDP" class="tab-pane">
<!--                 <div align="right">-->
<!--                    <div class="widget-content">-->
<!--                        <a href="#ajouterPvBienservice" data-toggle="modal" class="btn btn-primary">Ajouter</a>-->
<!--                    </div>-->


<!--                </div>-->
<!--               <component-pv :macheid="detail_marche.id"></component-pv>-->
                   <PvJugement  :macheid="detail_marche.id"></PvJugement>
                </div>
                 <!-- <div id="tabAttribuAMI" class="tab-pane">

                   <ActEffeFinanciere :macheid="detail_marche.id"></ActEffeFinanciere>
                </div> -->
                    <div id="tabAttribuDP" class="tab-pane">
                    <ActeEffetFinancier1 :macheid="detail_marche.id"></ActeEffetFinancier1>
<!--                <component-acte :macheid="detail_marche.id"></componentActe>-->

                </div>

                   <div id="tabBailleurDP" class="tab-pane">
                <!-- <div align="right">
                    <div class="widget-content">
                        <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div> -->
                <componentBailleur1 :macheid="detail_marche.id"></componentBailleur1>

                </div>
                 <div id="tabARNPDP" class="tab-pane">

               <Arnmp :macheid="detail_marche.id"></Arnmp>

                </div>
                         </div>



                    </div>

                     </template>
                    </div>

                     <div id="tab45632" class="tab-pane">
                     <h2>mp</h2>
                    </div>

                    </div>
               </div>
            </table>

                  </div>
    
</template>
<script>
import {mapGetters} from 'vuex'
import { formatageSomme } from "../../../../Repositories/Repository"
 import Arnmp from '../../../bien_service/dossierArnmp/Arnmp';
 import componentBailleur1 from '../../../bien_service/component/bailleurMarche';
  import ActeEffetFinancier1 from "../../../bien_service/component/ActEffetFinancier/ActeEffetFinancier1"
  import PvJugement from "@/pages/bien_service/component/Jugement/pv/PvJugement";
    import reserveCf from '../../../bien_service/dossierReserveCF/reserveCf';
    import JugementSansFin from "@/pages/bien_service/component/JugementSansAnalyseFinanciere/JugementSansFin"
    import LotMarche from "@/pages/bien_service/component/LotMarche";
      import publicationOffreDP from "../../../bien_service/DossierPso/publicationOffre/publicationOffreDP"
         import OuvertureOffreSansFin from "@/pages/bien_service/component/DossierOffreSansOuvertureFinanciere/OuvertureOffreSansFin"
         import componentCotation from '../../../bien_service/dossierDetailMarchePs/dossierComponentPs/componentCotation';
        import invitationCf from '../../../bien_service/DossierPso/lettreInvitation/invitationCf';
 import mandateBs from '../../../bien_service/DossierPso/mandaté/mandateBs';
export default {
    components:{
        Arnmp,
        componentBailleur1,
        ActeEffetFinancier1,
        OuvertureOffreSansFin,
        componentCotation,
        PvJugement,
        reserveCf,
        LotMarche,
        publicationOffreDP,
        invitationCf,
        mandateBs,
        JugementSansFin
    },
    data() {
        return{

        }
        
    },
    created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getPersonnaliserMarchehorSib.find(
       idmarche => idmarche.id == this.$route.params.id
   )

},
computed:{
    ...mapGetters("horSib", ["gettersMarcheHorsib","getPersonnaliserMarchehorSib"]),

       ...mapGetters("bienService", ["getterCojos","mandate","getMandatPersonnaliserVise", "procedurePassations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres",
               "getterDossierCandidats","marches","gettersOuverturePersonnaliser","getterAnalyseDossiers",
               "getActeEffetFinancierPersonnaliser","gettersCotationPersonnaliser","typeMarches","getterAnoDMPBailleur"
              ]),

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
methods:{

  pagePrecedent(){
                window.history.back()
            },
formatageSomme:formatageSomme
}
}
</script>