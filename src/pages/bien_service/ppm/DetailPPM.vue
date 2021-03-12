<template>
    <div>
        <div class="container-fluid">

            <div class="widget-box">
                  <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des March&eacute;s par PPM</h5>
              <!-- <div align="right">
                
                <input type="search"   placeholder=" saisir objet"/>
              </div> -->
            </div>
                 <table class="table table-bordered table-striped" >
                <thead>
                <tr>
                   <th>Année</th>
                  <th>UA</th>
                  <th>Reférence marché</th>
                  <th>Objet marché</th>
                  <th>Type de marché</th>
                   <th>Procédure de passation</th>
                  <th>Région</th>
                   <th>Montant prévu</th>
                    <th title="mouvement du marché">Mouvement marché</th>
                     
                   <!-- <th colspan="3">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                 
                  <tr class="odd gradeX" v-for="activites in ppm.marche "
                 :key="activites.id">
                  <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{activites.exo_id || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{afficherLibelleUa(activites.unite_administrative_id) || 'Non renseigné'}}</td>
                      <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{activites.reference_marche || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{activites.objet || 'Non renseigné'}}</td>
                      <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{afficherLibelleTypeMarche(activites.type_marche_id) || 'Non renseigné'}}</td>
                      <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{afficherCodeProcedurePassation(activites.procedure_passation_id) || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierTypePrestation(marche.id)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td> -->
                     <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                       
                      {{afficherLibelleLocalisationGeographie(afficheLocalisation(activites.id)) || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{formatageSomme(parseFloat(activites.montant_marche)) || 'Non renseigné'}}</td>
                   
                    <td>

                         <span v-if="activites.economique_id == CodeExempte(activites.economique_id) ">Exemptée procedure</span>
                         <span v-else>Ligne à marché</span>
                       </td>
                        
                      
          
  
                   <!-- <td>
                      <router-link :to="{ name: 'CycleDeVie', params: { id: marche.id }}"
                                    class="btn btn-inverse " title="Cycle de vie du marche">
                           <span class=""><i class=" icon-calendar"></i></span>
                       </router-link>
                   </td> -->
                  
           <!-- <td>
          
                     <button @click.prevent="supprimerMarche(activites.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
                   </td> -->
                  
                   

                       </tr>
                        <tr>
                       <td>
                          
                      </td>
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                     <td> 
                      </td>
                      <td>
                          
                           
                      </td>
                      
                       <td > 
                      </td>
                        <td style="font-weight:bold;"> Total Marché
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantMarche))}}
                           
                      </td>
                        <td>
                          
                      </td>
                      
                      <!-- <td>
                          
                      </td> -->
                      
                       
                    </tr>
                </tbody>
              </table>
                <!-- <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
                    <h5 v-if="ppm">Calendrie de planification des marches du PPM : {{ppm.libelle}}</h5>
<<<<<<< HEAD
                </div> -->
                <!-- <div class="widget-content nopadding" >
                    <full-calendar :events="events" :config="config"></full-calendar>
                </div> -->

                </div>

                <div class="widget-content nopadding" >
<!--                    <full-calendar :events="events" :config="config"></full-calendar>-->
                </div>

            </div>
        </div>
    
</template>

<script>
import { formatageSomme } from "../../../../src/Repositories/Repository";
    import { mapActions, mapGetters } from "vuex";
    import 'fullcalendar/dist/locale/fr'
    export default {
        name: "DetailPPM",
        data() {
            return {
                events: []
                ,
                config1: {
                    eventClick: (event) => {
                        this.selected = event;
                    },
                },
                selected: {},
                config: {
                    locale:"fr",
                    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
                    defaultView: "dayGridMonth",
                  //  plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
                    header: {
                        left: "prev,next today",
                        center: "title",
                       /* right: "timelineDay,timelineWeek,timelineMonth,listMonth"*/
                        right: "timelineMonth,timelineCustom"
                    },
                    fixedWeekCount: false,
                    contentHeight: 650,
                    viewRender: function(view) {
                       this.$('.fc-center')[0].children[0].innerText = view.title.replace(new RegExp("undefined", 'g'), "");
                    },
                    views: {
                        timelineCustom: {
                            type: 'timeline',
                            buttonText: 'Annee',
                            dateIncrement: { years: 1 },
                            slotDuration: { months: 1 },
                            visibleRange: function (currentDate) {
                                return {
                                    start: currentDate.clone().startOf('year'),
                                    end: currentDate.clone().endOf("year")
                                };
                            }
                        }
                    },
                    resourceLabelText: "Marchés",
                    resources: []
                },
                ppm:'',
            }
        },
        created() {
         this.ppm=this.getterPlanPassationMarche.find(item=>item.code== this.$route.params.id)
        
            var self = this;
            if(this.ppm!=""){
                this.ppm.marche.forEach(function (value) {
                      console.log(value)
                    let objetMarche={"id":value.id,"title":value.objet,"children":[]}
                    let evenMarcher={
                        resourceId:value.id,
                        title  : "Realisation prevue du marche",
                        start  : value.date_execution_marche_debut_prevue,
                        end:value.date_execution_fin_prevue,

                    }
                    self.events.push(evenMarcher)
                   if(value.date_transmission_dao_dmp_prevu!=""){

                       let childrenDAO={
                           id: "TDDP"+value.id,
                           title: "Transmission du DAO à la DMP"
                       }

                       let transmission_dao_dmp_prevue1={
                           resourceId:"TDDP"+value.id,
                           title  : "Transmission du DAO à la DMP",
                           start  : value.date_transmission_dao_dmp_prevu,

                           color: 'green',
                           backgroundColor: 'green'
                       }

                       self.events.push(transmission_dao_dmp_prevue1)

                       objetMarche.children.push(childrenDAO)
                   }

                    if(value.date_dmp_dao_prevu!=""){

                        let ANODMP={
                            id: "ANODMP"+value.id,
                            title: "ANO DMP sur DAO"
                        }

                        let ANODMP1={
                            resourceId:"ANODMP"+value.id,
                            title  : "ANO DMP sur DAO",
                            start  : value.date_dmp_dao_prevu,

                            color: 'green',
                            backgroundColor: 'green'
                        }


                        self.events.push(ANODMP1)

                        objetMarche.children.push(ANODMP)
                    }


                    if(value.date_bailleur_dmp_prevu!=""){

                        let ANOBP={
                            id: "ANOBP"+value.id,
                            title: "ANO Bailleur sur DAO"
                        }

                        let ANOBP1={
                            resourceId:"ANOBP"+value.id,
                            title  : "ANO Bailleur sur DAO",
                            start  : value.date_bailleur_dmp_prevu,

                            color: 'green',
                            backgroundColor: 'green'
                        }


                        self.events.push(ANOBP1)

                        objetMarche.children.push(ANOBP)
                    }


                    if(value.date_publication_ao_prevu!=""){

                        let PAO={
                            id: "PAO"+value.id,
                            title: "Publication  AO"
                        }

                        let PAO1={
                            resourceId:"PAO"+value.id,
                            title  : "Publication  AO",
                            start  : value.date_publication_ao_prevu,

                            color: 'green',
                            backgroundColor: 'green'
                        }


                        self.events.push(PAO1)

                        objetMarche.children.push(PAO)
                    }

                    if(value.date_lettre_invitation_prevu!=""){

                        let LETTRE={
                            id: "LETTRE"+value.id,
                            title: "Lettre d'invitation CF"
                        }

                        let LETTRE1={
                            resourceId:"LETTRE"+value.id,
                            title  : "Lettre d'invitation CF",
                            start  : value.date_lettre_invitation_prevu,

                            color: 'green',
                            backgroundColor: 'green'
                        }


                        self.events.push(LETTRE1)

                        objetMarche.children.push(LETTRE)
                    }

                    if(value.date_reception_offre_prevu!=""){

                        let ROff={
                            id: "ROff"+value.id,
                            title: "Reception des offres"
                        }

                        let ROff1={
                            resourceId:"ROff"+value.id,
                            title  : "Reception des offres",
                            start  : value.date_reception_offre_prevu,
                            color: 'green',
                            backgroundColor: 'green'
                        }


                        self.events.push(ROff1)

                        objetMarche.children.push(ROff)
                    }

                    if(value.date_ouverture_offre_technique_prevu!=""){

                        let OOffreTechnique={
                            id: "OOffreTechnique"+value.id,
                            title: "Ouverture des offres (Technique)"
                        }

                        let OOffreTechnique1={
                            resourceId:"OOffreTechnique"+value.id,
                            title  : "Ouverture des offres (Technique)",
                            start  : value.date_ouverture_offre_technique_prevu,
                            color: 'green',
                            backgroundColor: 'green'
                        }


                        self.events.push(OOffreTechnique1)

                        objetMarche.children.push(OOffreTechnique)
                    }

                    if(value.date_rapport_ouverture_prevu!=""){

                        let RapporOuverture={
                            id: "RapporOuverture"+value.id,
                            title: "Rapport d'ouverture"
                        }

                        let RapporOuverture1={
                            resourceId:"RapporOuverture"+value.id,
                            title  : "Rapport d'ouverture",
                            start  : value.date_rapport_ouverture_prevu,

                            color: 'green',
                            backgroundColor: 'green'
                        }


                        self.events.push(RapporOuverture1)

                        objetMarche.children.push(RapporOuverture)
                    }


                    if(value.date_ouverture_offre_finnancier_prevu!=""){

                        let OOffrefin={
                            id: "OOffrefin"+value.id,
                            title: "Ouverture des offres (Financières)"
                        }

                        let OOffrefin1={
                            resourceId:"OOffrefin"+value.id,
                            title  : "Ouverture des offres (Financières)",
                            start  : value.date_ouverture_offre_finnancier_prevu,

                            color: 'green',
                            backgroundColor: 'green'
                        }


                        self.events.push(OOffrefin1)

                        objetMarche.children.push(OOffrefin)
                    }

                    if(value.date_jugement_offre_prevu!=""){

                        let JugementOffre={
                            id: "JugementOffre"+value.id,
                            title: "Jugement des offres"
                        }

                        let JugementOffre1={
                            resourceId:"JugementOffre"+value.id,
                            title  : "Jugement des offres",
                            start  : value.date_jugement_offre_prevu,

                            color: 'green',
                            backgroundColor: 'green'
                        }


                        self.events.push(JugementOffre1)

                        objetMarche.children.push(JugementOffre)
                    }

                    if(value.date_rapport_evaluation_combine_prevue!=""){

                        let RapportEvaluation={
                            id: "RapportEvaluation"+value.id,
                            title: "Rapport d'évaluation combiné"
                        }

                        let RapportEvaluation1={
                            resourceId:"RapportEvaluation"+value.id,
                            title  : "Rapport d'évaluation combiné",
                            start  : value.date_rapport_evaluation_combine_prevue,

                            color: 'green',
                            backgroundColor: 'green'
                        }


                        self.events.push(RapportEvaluation1)

                        objetMarche.children.push(RapportEvaluation)
                    }

                    if(value.date_demande_ano_dmp_prevue!=""){

                        let DemandeAnoDMP={
                            id: "DemandeAnoDMP"+value.id,
                            title: "Demande ANO/DMP"
                        }

                        let DemandeAnoDMP1={
                            resourceId:"DemandeAnoDMP"+value.id,
                            title  : "Demande ANO/DMP",
                            start  : value.date_demande_ano_dmp_prevue,

                            color: 'green',
                            backgroundColor: 'green'
                        }

                        self.events.push(DemandeAnoDMP1)

                        objetMarche.children.push(DemandeAnoDMP)
                    }

                    if(value.date_ano_dmp_attribution_prevue!=""){

                        let AnoDMPAttribution={
                            id: "AnoDMPAttribution"+value.id,
                            title: "ANO / DMP attribution"
                        }

                        let AnoDMPAttribution1={
                            resourceId:"AnoDMPAttribution"+value.id,
                            title  : "ANO / DMP attribution",
                            start  : value.date_ano_dmp_attribution_prevue,

                            color: 'green',
                            backgroundColor: 'green'
                        }

                        self.events.push(AnoDMPAttribution1)

                        objetMarche.children.push(AnoDMPAttribution)
                    }

                    if(value.date_negociation_prevue!=""){

                        let Negociation={
                            id: "Negociation"+value.id,
                            title: "Négociation"
                        }

                        let Negociation1={
                            resourceId:"Negociation"+value.id,
                            title  : "Négociation",
                            start  : value.date_negociation_prevue,

                            color: 'green',
                            backgroundColor: 'green'
                        }

                        self.events.push(Negociation1)

                        objetMarche.children.push(Negociation)
                    }



                    if(value.date_signature_attributaire_prevue!=""){

                        let SignatureAttributaire={
                            id: "SignatureAttributaire"+value.id,
                            title: "Négociation"
                        }

                        let SignatureAttributaire1={
                            resourceId:"SignatureAttributaire"+value.id,
                            title  : "Négociation",
                            start  : value.date_signature_attributaire_prevue,

                            color: 'green',
                            backgroundColor: 'green'
                        }

                        self.events.push(SignatureAttributaire1)

                        objetMarche.children.push(SignatureAttributaire)
                    }

                    if(value.date_signature_autorite_contractante_prevue!=""){

                        let SignatureAutoriteContractant={
                            id: "SignatureAutoriteContractant"+value.id,
                            title: "Signature  Autorité Contractante"
                        }

                        let SignatureAutoriteContractant1={
                            resourceId:"SignatureAutoriteContractant"+value.id,
                            title  : "Signature  Autorité Contractante",
                            start  : value.date_signature_autorite_contractante_prevue,

                            color: 'green',
                            backgroundColor: 'green'
                        }

                        self.events.push(SignatureAutoriteContractant1)

                        objetMarche.children.push(SignatureAutoriteContractant)
                    }

                    if(value.date_approbation_marche_prevue!=""){

                        let ApprobationMarche={
                            id: "ApprobationMarche"+value.id,
                            title: "Approbation du marché"
                        }

                        let ApprobationMarche1={
                            resourceId:"ApprobationMarche"+value.id,
                            title  : "Approbation du marché",
                            start  : value.date_approbation_marche_prevue,

                            color: 'green',
                            backgroundColor: 'green'
                        }

                        self.events.push(ApprobationMarche1)

                        objetMarche.children.push(ApprobationMarche)
                    }

                    self.config.resources.push(objetMarche)
                });
            }


        },
        computed: {
            ...mapGetters("bienService", ["getterPlanPassationMarche", "marches","typeMarches","procedurePassations"]),

             ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques']),
   ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral"]),

    montantMarche(){

  return this.marches.reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche),0)
},

             afficherLibelleLocalisationGeographie(){
   return id =>{
     if(id!=null && id!=""){
       let response = this.localisations_geographiques.find(item => item.id==id)
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
  afficherCodeProcedurePassation(){
   return id =>{
     if(id!=null && id!=""){
       let response = this.procedurePassations.find(item => item.id==id)
       if(response){
         return response.code
       }
     }
   }
 },
 
 afficheLocalisation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.parent_id == id);

      if (qtereel) {
        return qtereel.localisation_geographie_id;
      }
      return 0
        }
      };
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
        },
        methods:{
            ...mapActions("",['']),
            formatageSomme:formatageSomme

        }
    }
</script>

<style scoped>

</style>
