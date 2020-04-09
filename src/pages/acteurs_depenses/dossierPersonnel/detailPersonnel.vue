
<template>
    
    

<div>
        <div class="container-fluid">
            <h4 v-if="marcheDetail(marcheid)" > {{marcheDetail(marcheid).objet}}  <button class="btn btn-danger btn-large" v-if="marcheDetail(marcheid).attribue==0" ||v-if="marcheDetail(marcheid).attribue==1" >Contrat en cours de recrutement</button>
                <button class="btn btn-success btn-large" v-if="marcheDetail(marcheid).attribue==3">Contrat attribué</button></h4>
            <hr />

            <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                                <th>Exercice Budgetaire</th>
                                <!-- <th>Type de procedure</th> -->
                                <th>Objet marché</th>
                                <th>Reference marché</th>
                                <!-- <th>Montant prévu</th> -->
                                <th>Type de marché</th>
                                <th>Unite administrative</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="detail_marche">
                                 <td class="taskOptions">
                                    {{detail_marche.exo_id}}
                                </td>
                                <!-- <td class="taskDesc">{{afficherLibelleTypeProcedure(detail_marche.procedure_passation_id)}}</td> -->
                                <td class="taskDesc">{{detail_marche.objet}}</td>
                                <td class="taskStatus">{{detail_marche.reference_marche}}</td>
                                <!-- <td class="taskOptions">
                                    {{detail_marche.montant_marche}}
                                </td> -->
                                <td class="taskOptions">
                                    {{detail_marche.type_marche.libelle}}
                                </td>
                                <td class="taskOptions">
                                    {{detail_marche.objetUniteAdministrative.libelle}}
                                </td>
                               
                            </tr>
                            </tbody>
                        </table>             

                    </div>
                </div>
            </div>

            <div class="row-fluid">
                <div class="span3">

                </div>
            </div>
            
            <div class="row-fluid">
                <div class="span12">
                     <template>
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">

                                 <li class="active"><a data-toggle="tab" href="#tab0145" title="">Avis de recrutement</a></li>
                                <li class=""><a data-toggle="tab" href="#tab0001" title="lettre d'invitation">Lettre invitation</a></li>
                                 <li class=""><a data-toggle="tab" href="#tab0002" title="">Mandate</a></li>
                                <li class=""><a data-toggle="tab" href="#tab4">Ouverture</a></li>
                                 <li class=""><a data-toggle="tab" href="#tab045" title="">Dossier du candidat</a></li>
                                <li class=""><a data-toggle="tab" href="#tab5">Rapport d'ouverture</a></li>
                                <li class=""><a data-toggle="tab" href="#tab6" title="jugement des offres">Jugement</a></li>
                                <li class=""><a data-toggle="tab" href="#tab7" title="rapport d'évaluation combiné">Rapport</a></li>
                                 <!-- <li class=""><a data-toggle="tab" href="#tab27" title="demande ANO/DMP"> Demande ANO</a></li> -->
                                 <li class=""><a data-toggle="tab" href="#tab28" title="demande ANO Bailleur"> Demande ANO Bailleur </a></li>
                                <li class=""><a data-toggle="tab" href="#tab1">Attribution</a></li>
                             
                            </ul>
                        </div>
                        
                         <div class="widget-content tab-content">
                            
                             


                       <div id="tab0145" class="tab-pane active ">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterOffrePublicationP" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>
                                <!-- <h4>Publication de l'offre</h4> -->
                            <!-- <publicationOffre :macheid="detail_marche.id"></publicationOffre> -->
                              <publicationRecrutement :macheid="detail_marche.id"></publicationRecrutement>
                         </div>
                         


                              <div id="tab0001" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterLettreInvitationP" data-toggle="modal" class="btn btn-warning" align="rigth">Ajouter</a></div>

                                    <lettreInvitationPersonnel :macheid="detail_marche.id"></lettreInvitationPersonnel>
                                  </div>


                                  <div id="tab0002" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                               
                                <!-- <h4>Publication de l'offre</h4> -->

                      <mandatPersonnel :macheid="detail_marche.id"></mandatPersonnel>
                         </div>



                         <div id="tab045" class="tab-pane">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                
                                    <a href="#addcandidatP" data-toggle="modal" class="btn btn-success" align="rigth" >Ajouter</a></div>

                                <!-- <h4>Liste des receptions de cotation</h4> -->
                                 <candidatPersonnel :macheid="detail_marche.id"></candidatPersonnel>
                             </div>


                                  
                   <div id="tab5" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterRapportOuvertureP" data-toggle="modal" class="btn btn-warning">Ajouter</a>
                    </div>
                    <rapportOuverturePersonnel :macheid="detail_marche.id"></rapportOuverturePersonnel>

                </div>
               

                </div>


                         
                     <div id="tab4" class="tab-pane">
                     
                     <!-- <a href="#ajouter_membre_cojo" data-toggle="modal" class="btn btn-primary">Ajouter</a>  -->

                       <ouverturePersonnel :macheid="detail_marche.id"></ouverturePersonnel>
                  <component-ouvertureMembre :macheid="detail_marche.id"></component-ouvertureMembre>

    
               
                 
                   </div>


                <div id="tab6" class="tab-pane">
                  <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterPesonnel" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
                <jugementPersonnel :macheid="detail_marche.id"></jugementPersonnel>

                </div>

                
                  <div id="tab7" class="tab-pane">
               <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterRapportPersonnel" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
               <rapportJugementPersonnel :macheid="detail_marche.id"></rapportJugementPersonnel>

                </div>


                     <!-- <div id="tab27" class="tab-pane">
                   <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterD" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
                 <componentDemandeAno :macheid="detail_marche.id"> </componentDemandeAno>

                </div> -->

                  <div id="tab28" class="tab-pane">
               <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterAnoBailleurP" data-toggle="modal" class="btn btn-primary">Ajouter</a>
                    </div>


                </div>
                 <AnoDmpBailleurPersonnel :macheid="detail_marche.id"> </AnoDmpBailleurPersonnel>

                </div>

                     <div id="tab1" class="tab-pane">
                <div align="right">
                    <div class="widget-content">
                        <a href="#ajouterActeEffetFinancierP" data-toggle="modal" class="btn btn-warning">Ajouter</a>
                    </div>


                </div>
                <acteEffetFinancierPersonnel :macheid="detail_marche.id"></acteEffetFinancierPersonnel>

                </div>


                         </div>
                    </div>
                     </template>
                </div>
            </div>
              <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListePersonnel" href="#">Voir Tableau recrutement personnel</a>
       
      </div>
        </div>
          

</div>

</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    //import moment from 'moment';
   
   
       import publicationRecrutement from '../dossierPersonnel/dossierAvisRecrutement/publicationRecrutement';
       import lettreInvitationPersonnel from '../dossierPersonnel/dossierLettreInvitationPersonnel/lettreInvitationPersonnel'
       import mandatPersonnel from '../dossierPersonnel/dossierMandat/mandatPersonnel'
       import ouverturePersonnel from '../dossierPersonnel/dossierOuverturePersonnel/ouverturePersonnel'
       import componentOuvertureMembre from '../../bien_service/dossierDetailMarcheProcedureSimplifierAvecComite/dossierComponentOuvertureCojoMembre/componentOuvertureMembre';
       import candidatPersonnel from '../dossierPersonnel/dossierCandidatPersonnel/candidatPersonnel';
       import rapportOuverturePersonnel from '../dossierPersonnel/dossierRapportOuverturePersonnel/rapportOuverturePersonnel'
       import jugementPersonnel from '../dossierPersonnel/dossierJugementPersonnel/jugementPersonnel'
       import rapportJugementPersonnel from '../dossierPersonnel/dossierRapportJugement/rapportJugementPersonnel'
       import AnoDmpBailleurPersonnel from '../dossierPersonnel/dossierAnoDMPBailleurPersonnel/AnoDmpBailleurPersonnel'
       import acteEffetFinancierPersonnel from '../dossierPersonnel/dossierActeEffetFinancierPersonnel/acteEffetFinancierPersonnel'

  //import {getterDossierCandidats} from "../../../vuex/modules/fabrice/bienService/Getters";
    //import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
//import { formatageSomme } from "../../../../src/Repositories/Repository";
    export default {
       
        components:{

           // publicationOffre,
           publicationRecrutement,
            lettreInvitationPersonnel,
            mandatPersonnel,
            ouverturePersonnel,
            componentOuvertureMembre,
            candidatPersonnel,
            rapportOuverturePersonnel,
            jugementPersonnel,
            rapportJugementPersonnel,
            AnoDmpBailleurPersonnel,
            acteEffetFinancierPersonnel,
           
            
         
         

            
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

            ...mapGetters("bienService", [ "procedurePassations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres",
               "getterDossierCandidats","marches","gettersOuverturePersonnaliser",
               "getActeEffetFinancierPersonnaliser","gettersCotationPersonnaliser","getterCojos"
               
               
              ]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
           
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

              retourListePersonnel(){
                 this.$router.push({ name: 'recrutementPersonnel' })
            },
           
           
      
        }
    };
</script>
