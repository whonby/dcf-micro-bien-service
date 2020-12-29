<template>
    <div>
        <div class="container-fluid">

            <div class="widget-box">
                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
                    <h5 v-if="ppm">Calendrie de planification des marches du PPM : {{ppm.libelle}}</h5>
                </div>

                <div class="widget-content nopadding" >
<!--                    <full-calendar :events="events" :config="config"></full-calendar>-->
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
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
            ...mapGetters("bienService", ["getterPlanPassationMarche"]),
        },
    }
</script>

<style scoped>

</style>
