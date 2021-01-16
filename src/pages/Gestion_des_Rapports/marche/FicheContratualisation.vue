<template>
    <div>

        <div class="container-fluid">
            <div class="span12" align="right">
<!--                <button @click="exportHTML('Fichie de contratualisation')">Export as Word</button>-->
                <button class="btn btn-default" @click="tableToExcel('table', 'Fichie de contratualisation')">
                    <img style="width: 20px !important; height: 20px !important;" src="https://img.icons8.com/windows/64/000000/export-excel.png"/>
                </button>
            </div>


            <table v-if="detail" style="border: 1px solid black" class="table table-bordered table-striped" ref="table" id="loremTable" summary="lorem ipsum sit amet" rules="groups" frame="hsides" border="2">
                <captimon align="center" rowspan="2" colspan="2">
<!--                    <div class="span4"> <img  :src="AfficheLogODCF"></div>-->
<!--                    <div class="span8"  style="background: #8ea9db !important;">-->
<!--                      </div>-->

                </captimon>
                <tr>
                    <td><img  :src="AfficheLogODCF"></td>
                    <td   colspan="11"  style="background: #8ea9db !important;">
                        <h3 align="center"> FICHE SYNTHESE DE LA CONTRACTUALISATION D'UN MARCHE/CONTRAT A L'ATTENTION DU CONTROLEUR FINANCIER</h3>
                    </td>
                </tr>
                <tr>
                    <td colspan="13"  style="background: #fff !important;" align="center"></td>
                </tr>
                <tr>
                    <td colspan="13" style="background: #ffa58b !important;" align="center">
                        <div align="center">*** GENERALITES RELATIVES A L'APPEL D'OFFRES ***</div>
                    </td>
                </tr>
                <tr>
                    <td><b>Unité Administrative</b></td>
                    <td colspan="13"><b>{{getUAMarche(detail.unite_administrative_id)}}</b></td>
                </tr>
                <tr>
                    <td><b>Objet de la consultation</b></td>
                    <td colspan="13" ><b>{{detail.objet}}</b></td>
                </tr>
                <tr>
                    <td><b>Type de procédure</b></td>
                    <td colspan="7" align="center">{{detail.procedure_passation.libelle}}</td>
                    <td><b>Autorisation</b>:</td>
                    <td colspan="7" align="center">{{getNumeroAutorisation(detail.id)}}</td>
                </tr>
                <tr>
                    <td><b>Référence du Dossier de consultation</b></td>
                    <td colspan="13" align="center">{{getReferenceDossier(detail.id)}}</td>
                </tr>
                <tr>
                    <td><b>Nombre de lots du dossier de consultation</b></td>
                    <td colspan="13" align="center">{{nbrLotMarche(detail.id)}}</td>
                </tr>
                <tr>
                    <td><b>Source (s) de financement (s)</b></td>
                    <td colspan="13">

                        <table class="table" v-for="item in getLotMarche(detail.id)" :key="'lot'+item.id">
                            <tr>
                                <td colspan="6" style="background: #68d7ca !important;"><b>{{item.objet}}</b></td>
                            </tr>
                        <tr >
                            <td><b>ETAT</b></td>
                            <td colspan="6">
                                <table>
                                    <tr v-for="bailleur in listeDesBailleurEtat(item.id)" :key="'bn'+bailleur.id">
                                        <td colspan="8"  align="center">{{bailleur.tauxbailleur}} %</td>
                                    </tr>
                                </table>
                            </td>

                        </tr>
                            <tr>
                                <td><b>BAILLEUR (S)</b></td>
                                <td colspan="10">
                                    <table class="table">
                                        <tr v-for="b in listeDesBailleur(item.id)" :key="'bnty'+b.id">
                                            <td>{{NomBailleurPasEtat(b.bailleur_id)}}</td>
                                            <td align="center">{{b.tauxbailleur}} %%</td>
                                        </tr>
                                    </table>
                                </td>

                            </tr>
                      </table>
                    </td>

                </tr>
                <tr>
                    <td><b>Identification de l'imputation budgétaire</b></td>
                    <td colspan="7" align="center">{{detail.imputation}}</td>
                    <td><b>Nombre d'entreprises ayant retiré le dossier de consultation</b></td>
                    <td colspan="6" align="center">{{nbrEntrepriseDepoDossierCandidat(detail.id)}}</td>
                </tr>
                <tr>
                    <td><b>Montant de l'enveloppe budgétaire</b></td>
                    <td colspan="7" align="center">{{formatageSomme(parseFloat(montantEnveloppeBudgetise(detail)))}}</td>
                    <td><b>Nombre d'entreprises a yant déposé une offre dans le délai requis</b></td>
                    <td colspan="6" align="center">{{nbrEntrepriseDepoDossierDelai(detail.id)}}</td>
                </tr>
                <tr>
                    <td><b>Montant de l'estimatif du marché</b></td>
                    <td colspan="7" align="center">{{formatageSomme(parseFloat(detail.montant_marche))}}</td>
                    <td><b>Nombre d'entreprises ayant déposé une offre hors délais</b></td>
                    <td colspan="6" align="center">{{nbrEntrepriseDepoDossierHDelai(detail.id)}}</td>
                </tr>

                <tr>
                    <td><b>Nature des prix du marché</b></td>
                    <td colspan="7" align="center"></td>
                    <td><b>Date et heure de l'ouverture des plis</b></td>
                    <td colspan="6" align="center">{{formaterDate(getDateOuverturePlis(detail.id))}}</td>
                </tr>
                <tr>
                <td><b>Délai d'exécution</b></td>
                <td colspan="7" align="center"></td>
                <td><b>Date du jugement </b></td>
                <td colspan="6" align="center">{{formaterDate(getDateJugement(detail.id))}}</td>
              </tr>
                <tr>
                    <td><b>Date et heure limites de réception des plis</b></td>
                    <td colspan="7" align="center">{{formaterDate(getDateDepotLimite(detail.id))}} {{getHeureDepotLimite(detail.id)}} </td>
                    <td><b>Agent CF de suivi</b> </td>
                    <td colspan="6" align="center"></td>
                </tr>
                <tr>
                    <td colspan="13" style="background: #f2f2f2 !important;" align="center">EDITION DU MARCHE/CONTRAT</td>
                </tr>
                <tr>
                    <td colspan="13">
                        <table class="table"  v-for="item in getLotMarche(detail.id)" :key="'l'+item.id">
                            <tr>
                                <td colspan="10" style="background: #68d7ca !important;">{{item.objet}}</td>
                            </tr>
                            <tr>
                                <td><b>Numero du Marché issu de la contractualisation</b></td>
                                <td colspan="6" align="center">{{getNumeroMarche(item)}}</td>
                                <td><b>Cautionnement définitif</b> </td>
                                <td colspan="6" align="center">{{formatageSomme(parseFloat(getCautionnementDefinitif(item)))}}
                                   </td>
                            </tr>
                            <tr>
                                <td><b>Date d'approbation</b></td>
                                <td colspan="6" align="center">{{formaterDate(getDateApprobation(item))}}</td>
                                <td><b>Avance de démarrage</b> </td>
                                <td colspan="6" align="center">{{formatageSomme(parseFloat(getAvanceDemarageTTC(item)))}}</td>
                            </tr>
                            <tr>
                                <td><b>Autorité approbatrice</b></td>
                                <td colspan="6" align="center">{{getAutoriteApprobation(item)}}</td>
                                <td><b>Engagement prévu année n</b> </td>
                                <td colspan="6" align="center"></td>
                            </tr>
                            <tr>
                                <td><b>Date de l'ordre de service de démarrage</b></td>
                                <td colspan="6" align="center">{{formaterDate(getDateOrdreServiceDemarage(item))}}</td>
                                <td><b>Engagement prévu année n+1</b> </td>
                                <td colspan="6" align="center"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colspan="13" style="background: #fce4d6 !important;" align="center">RECAP DE LA CONTRACTUALISATION</td>
                </tr>
                <tr>
                    <td style="background: #f2f2f2 !important; width: 10px !important;">N° du Lot</td>
                    <td style="background: #f2f2f2 !important;width: 10px !important">Objet (libellé) du lot</td>
                    <td style="background: #f2f2f2 !important;">Proposition d'attribution (Nom de l'entreprise ou du groupement)</td>
                    <td style="background: #f2f2f2 !important;">
                        <table class="table">
                            <tr><td style="background: #f2f2f2 !important;" colspan="4">Cautionnement provisoire</td></tr>
                            <tr>
                                <td style="background: #f2f2f2 !important;">Structure émétrice</td>
                                <td style="background: #f2f2f2 !important;">Montant</td>
                            </tr>
                        </table>
                    </td>
                    <td style="background: #f2f2f2 !important;">Délai de validité de l'offre</td>
                    <td style="background: #f2f2f2 !important;">Délai de livraison ou d'exécution </td>
                    <td style="background: #f2f2f2 !important;">Montant lu de la soumission en F CFA TTC</td>
                    <td style="background: #f2f2f2 !important;">Montant corrigé de la soumission en F CFA TTC</td>
                    <td style="background: #f2f2f2 !important;">ECART</td>
                    <td style="background: #f2f2f2 !important;">
                        <table class="table">
                            <tr><td colspan="6" style="background: #f2f2f2 !important;">OBSERVATIONS CF / DMP / ANRMP/AUTRES</td></tr>
                            <tr>
                                <td style="background: #f2f2f2 !important;">Structure émétrice</td>
                                <td style="background: #f2f2f2 !important;">Date et Observations</td>
                                <td style="background: #f2f2f2 !important;">Date et Décisions</td>
                            </tr>
                        </table>
                    </td>
                    <td style="background: #f2f2f2 !important;">Décision finale d'attribution de la COJO</td>

                </tr>


                <tr v-for="item in getLotMarche(detail.id)" :key="'lm'+item.id">
                    <td colspan="1">{{item.numero_lot}}</td>
                    <td>{{item.objet}}</td>
                    <td>{{getNomEntrepriseAttribution(item)}}</td>
                    <td>
                        <table class="table">
                            <tr>
                                <td colspan="2">{{getStructureEmetrice(item)}}</td>
                                <td colspan="2">
                                    {{formatageSomme(parseFloat(getMontantOffreTechnique(item)))}}
                               </td>
                            </tr>
                        </table>
                    </td>
                    <td>{{getDelaiOffreTechnique(item)}}</td>
                    <td>{{getDelaiExecution(item)}} </td>
                    <td> {{formatageSomme(parseFloat(getMontantTTCSoumisOffreFinancier(item)))}}</td>
                    <td>{{formatageSomme(parseFloat(getMontantTTCCorrigeOffreFinancier(item)))}}</td>
                    <td>{{formatageSomme(parseFloat(ecartOffreFinancier(item)))}}</td>
                    <td>
                        <table class="table">
                            <tr>
                                <td  colspan="2"></td>
                                <td  colspan="1"></td>
                                <td  colspan="2"></td>
                            </tr>
                        </table>
                    </td>
                    <td></td>

                </tr>

            </table>


   <hr>


        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import { formatageSomme } from "../../../Repositories/Repository";
    import moment from "moment";
    export default {
        name: "FicheContratualisation",
        data(){
            return {
                status:"",
                info_region:"",
                info_type_marche:'',
                info_infrastructure:'',
                info_unite_admin:'',
                info_marche_status:"",
                page:0,
                size:10,
                active_el:false,
                detail:"",
                uri :'data:application/vnd.ms-excel;charset=UTF-8;base64,',
                template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
                format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
            }
        },
        created() {
          //  this.marcheid=this.$route.params.id
            this.detail = this.marches.find(
                idmarche => idmarche.id == this.$route.params.id
            )
       //      console.log(".........................")
       // console.log(this.detail);
       //      console.log("...........000000000..............")
        },
        computed:{

            ...mapGetters("bienService", ["getterCojos","mandate","getMandatPersonnaliserVise",
                "procedurePassations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres",
                "getterDossierCandidats","marches","gettersOuverturePersonnaliser","getterAnalyseDossiers",
                "getActeEffetFinancierPersonnaliser","gettersCotationPersonnaliser","gettersOffreTechniques","getterOffreFinanciers",
                "typeMarches","getterAnoDMPBailleur","personnaliseGetterMarcheBailleur",'gettersCotations',"getterProceVerballe"
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
            ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']),

            getDossierCandidatAttribue(){
                return marche=>{
                    let objet=this.getterDossierCandidats.find(item=>{
                        if(item.marche_id==marche.parent_id && item.entreprise_id==this.getIdEntreprise(marche)){
                            return item
                        }
                    })

                    if(objet==undefined)
                        return ""
                    return objet
                }
            },
            getCandidatOffreTechniqueAttribue(){
              return marche=>{
                  let objet=this.getDossierCandidatAttribue(marche)
                  console.log(objet)
                  if(objet=="")
                      return ""
                  let offre=this.gettersOffreTechniques.filter(item=>item.dossier_candidat_id==objet.id)
                  return offre
              }
            },

            getCandidatOfferFinancierAttribue(){
                return marche=>{
                    let objet=this.getDossierCandidatAttribue(marche)
                    console.log(objet)
                    if(objet=="")
                        return ""
                    let offre=this.getterOffreFinanciers.filter(item=>item.dossier_candidat_id==objet.id)
                    return offre
                }
            },

            getStructureEmetrice(){
                return marche=>{

                  let offre=this.getCandidatOffreTechniqueAttribue(marche)

                    if(offre=="")
                        return ""
                    let objet=offre.find(item=>{
                        if(item.marche_id==marche.id){
                            return item
                        }
                    })
                    console.log(objet)
                    if(objet==undefined)
                        return ""
                    return objet.structure_emetrice
                }
            },
            getMontantOffreTechnique(){
                return marche=>{
                    let offre=this.getCandidatOffreTechniqueAttribue(marche)

                    if(offre=="")
                        return 0
                    let objet=offre.find(item=>{
                        if(item.marche_id==marche.id){
                            return item
                        }
                    })
                    //  console.log(objet)
                    if(objet==undefined)
                        return 0
                    return objet.montant
                }
            },

    getDelaiExecution(){
        return marche=>{
            let offre=this.getCandidatOffreTechniqueAttribue(marche)

            if(offre=="")
                return ""
            let objet=offre.find(item=>{
                if(item.marche_id==marche.id){
                    return item
                }
            })
            //  console.log(objet)
            if(objet==undefined)
                return 0
            return objet.delai_execution
        }
    },

            getDelaiOffreTechnique(){
                return marche=>{
                    let offre=this.getCandidatOffreTechniqueAttribue(marche)

                    if(offre=="")
                        return ""
                    let objet=this.gettersOffreTechniques.find(item=>{
                        if(item.marche_id==marche.id){
                            return item
                        }
                    })
                    //  console.log(objet)
                    if(objet==undefined)
                        return 0
                    return objet.delai_validite_offre
                }
            },
            getMontantTTCSoumisOffreFinancier(){
                return marche=>{
                    let offre=this.getCandidatOfferFinancierAttribue(marche)

                    if(offre=="")
                        return 0
                    let objet=offre.find(item=>{
                        if(item.marche_id==marche.id){
                            return item
                        }
                    })


                    if(objet==undefined)
                        return 0
                //    console.log(objet.montant_total_ht)
                    return objet.montant_total_ht
                }
            },
            getMontantTTCCorrigeOffreFinancier(){
                return marche=>{
                    let offre=this.getCandidatOfferFinancierAttribue(marche)

                    if(offre=="")
                        return 0
                    let objet=offre.find(item=>{
                        if(item.marche_id==marche.id){
                            return item
                        }
                    })
                    //  console.log(objet)
                    if(objet==undefined)
                        return 0
                    return objet.hist_montant_ttc
                }
            },
            ecartOffreFinancier(){
                return marche=>{
                  return parseFloat(this.getMontantTTCSoumisOffreFinancier(marche))- parseFloat(this.getMontantTTCCorrigeOffreFinancier(marche))
                }
            },
            getDateJugement(){
              return id=>{
                  if(id!=""){
                      let objet=this.getterProceVerballe.find(item=>item.marche_id==id)
                      if(objet!=undefined)
                          return objet.date_rapport_jugement
                      return ""
                  }
              }
            },
            getReferenceDossier(){
                return id=>{
                    if(id!=''){
                        let objet=this.appelOffres.find(item=>item.marche_id==id)
                        if(objet!=undefined)
                            return objet.ref_appel
                        return ""
                    }
                }
            },
            getNumeroAutorisation(){
                return id=>{
                    if(id!=''){
                        let objet=this.appelOffres.find(item=>item.marche_id==id)
                        if(objet!=undefined)
                            return objet.numero_autorisation
                        return ""
                    }
                }
            },
            getDateDepotLimite(){
                return id=>{
                    if(id!=''){
                        let objet=this.appelOffres.find(item=>item.marche_id==id)
                        if(objet!=undefined)
                            return objet.date_limite
                        return ""
                    }
                }
            },
            getHeureDepotLimite(){
                return id=>{
                    if(id!=''){
                        let objet=this.appelOffres.find(item=>item.marche_id==id)
                        if(objet!=undefined)
                            return objet.heure
                        return ""
                    }
                }
            },
            nbrEntrepriseDepoDossierCandidat(){
                return id=>{
                    let objet=this.gettersCotations.filter(item=>item.marche_id==id)
                  //  console.log(objet)
                    if(objet!=undefined){
                        return objet.length
                    }
                    return 0
                }
            },

            montantEnveloppeBudgetise(){
              return marche=>{

                  //GESTION SIB
                  if(marche.sib==0){
                      return this.dotationLigneBudgetSIB(marche.economique_id)
                  }
                  return this.dotationLigneBudgetHORSSIB(marche.economique_id)
                  //GESTION HORS SIB

              }
            },
           getAppelOffre(){
             return id=>{
                 if(id!=""){
                     return this.appelOffres.find(item=>item.marche_id==id)
                 }
             }
           },
            nbrEntrepriseDepoDossierDelai(){
                return id=>{
                    let objet=this.gettersCotations.filter(item=>item.marche_id==id)
                    if(objet!=undefined){
                        let collection=[]
                        let vm=this
                        objet.forEach(function (val) {
                            let jour=vm.nombreDejourCalcule(vm.getAppelOffre(id).date_limite,val.date_cotation)
                            if(jour>=0){
                                // console.log(jour)
                                collection.push(val)
                            }
                        })
                        return collection.length
                    }
                    return 0
                }

            },
            nbrEntrepriseDepoDossierHDelai(){
                return id=>{
                    let objet=this.gettersCotations.filter(item=>item.marche_id==id)
                    if(objet!=undefined){
                        let collection=[]
                        let vm=this
                        objet.forEach(function (val) {
                            let jour=vm.nombreDejourCalcule(vm.getAppelOffre(id).date_limite,val.date_cotation)
                            if(jour<0){
                                // console.log(jour)
                                collection.push(val)
                            }
                        })
                        return collection.length
                    }
                    return 0
                }

            },
            nombreDejourCalcule(){
                return (date1,date2)=>{
                    if(date1=="") return null
                    if(date2=="") return null
                    var date_limte = new Date(date1).getTime()
                    var date_depot = new Date(date2).getTime()
                    var resultat = date_limte - date_depot

                    var diffJour =  resultat / (1000 * 3600 * 24)

                    if(isNaN(diffJour)) return null

                    //if(parseFloat(diffJour) < 0 ) return "durée invalide"

                    return  diffJour;
                }



            },

            dotationLigneBudgetSIB() {
                return id => {
                    if (id != null && id != "") {
                        const qtereel = this.afficheBudgetActive.find(item => item.economique_id == id);

                        if (qtereel) {
                            return qtereel.Dotation_Initiale;
                        }
                        return 0
                    }
                };
            },
            dotationLigneBudgetHORSSIB() {
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

            getUAMarche(){
              return ua_id=>{
                  let objet=this.uniteAdministratives.find(item=>item.id=ua_id)
                  if(objet!=undefined)
                      return objet.libelle
                  return null
              }
            },
            getLotMarche(){
              return id=>{
                  let objet=this.marches.filter(item=>item.parent_id==id)
                  if(objet==undefined){
                      return []
                  }
                  return objet
              }
            },
            listeDesBailleur: function () {
                return macheid => {
                  //  console.log(macheid)
                    if (macheid != "") {
                        let colletion=[]
                        let vm=this
                        // console.log("Marche leste acte effect finnancier")
                        let objet=this.personnaliseGetterMarcheBailleur.filter(idmarche => idmarche.marche_id == macheid)
                        objet.forEach(function (val) {
                            let etat=vm.sources_financements.find(item=>item.id==val.bailleur_id)
                            if(etat.code!="ET")
                                colletion.push(val)
                        })
                        //console.log(objet)
                        return colletion
                    }
                }
            },
            listeDesBailleurEtat: function () {
                return macheid => {
                    //  console.log(macheid)
                    if (macheid != "") {
                        let colletion=[]
                        let vm=this
                        // console.log("Marche leste acte effect finnancier")
                        let objet=this.personnaliseGetterMarcheBailleur.filter(idmarche => idmarche.marche_id == macheid)
                           objet.forEach(function (val) {
                               let etat=vm.sources_financements.find(item=>item.id==val.bailleur_id)
                               if(etat.code=="ET")
                                   colletion.push(val)
                           })
                        //console.log(objet)
                        return colletion
                    }
                }
            },

            getDateOuverturePlis(){
              return id=>{
                  let objet =this.getterCojos.find(item=>item.marche_id==id)
                  if(objet!=undefined)
                      return objet.date_ouverture
                  return "1970-01-01"
              }
            },
           getNumeroMarche(){
             return marche=>{
                 // console.log(marche)
                 if(marche.numero_marche!=""){
                     return marche.numero_marche
                 }
                 return ""
             }
           },
           getDateApprobation(){
               return marche=>{
                   // console.log(marche)
                   if(marche.acte_effet_financiare.length>0){
                       let act=marche.acte_effet_financiare[0]
                       return act.date_approbation
                   }
                   return ""
               }
           },
            getAutoriteApprobation(){
                return marche=>{
                    // console.log(marche)
                    if(marche.acte_effet_financiare.length>0){
                        let act=marche.acte_effet_financiare[0]
                        return act.autorite_approbation
                    }
                    return ""
                }
            },
            getDateOrdreServiceDemarage(){
                return marche=>{
                    // console.log(marche)
                    if(marche.acte_effet_financiare.length>0){
                        let act=marche.acte_effet_financiare[0]
                        return act.date_odre_service
                    }
                    return ""
                }
            },
            getCautionnementDefinitif(){
                return marche=>{
                    // console.log(marche)
                    if(marche.acte_effet_financiare.length>0){
                        let act=marche.acte_effet_financiare[0]
                        return act.montant_ht_cautionnement
                    }
                    return 0
                }
            },
            getAvanceDemarageTTC(){
                return marche=>{
                    // console.log("..........0............0............01")
                    // console.log(marche)
                    if(marche.acte_effet_financiare.length>0){
                        let act=marche.acte_effet_financiare[0]
                        return act.avance_demarrage_ttc
                    }
                    return 0
                }
            },


            //Entreprise Gagnante entreprise_id
            getNomEntrepriseAttribution(){
                return marche=>{
                    let entreprise_id=this.getIdEntreprise(marche)

                    if(entreprise_id!=""){
                        let entreprise=this.entreprises.find(item=>item.id==entreprise_id)
                        return entreprise.raison_sociale
                    }
                    return ""
                }
            },

            getIdEntreprise(){
                return marche=>{
                   // console.log(marche.id)
                    if(marche.acte_effet_financiare.length>0){
                        let act=marche.acte_effet_financiare[0]
                        console.log(act.entreprise_id)
                        return act.entreprise_id
                    }
                    return ""
                }
            },
            bailleuEtat(){
              return bailleur=>{
                  // console.log(bailleur)
                  let objet=this.sources_financements.find(item=>item.id==bailleur)
                //  console.log(objet)
                  if(objet==undefined)
                      return []
                  if(objet.code=="ET")
                      return true
                  return false
              }
            },
            bailleurPasEtat(){
                return bailleur=>{
                    // console.log(bailleur)
                    let objet=this.sources_financements.find(item=>item.id==bailleur)
                    //  console.log(objet)
                    if(objet==undefined)
                        return []
                    if(objet.code=="ET")
                        return false
                    return true
                }
            },
            NomBailleurPasEtat(){
                return bailleur=>{
                    // console.log(bailleur)
                    let objet=this.sources_financements.find(item=>item.id==bailleur)
                    //  console.log(objet)
                    if(objet==undefined)
                        return []
                    if(objet.code=="ET")
                        return false
                    return objet.libelle
                }
            },
            nbrLotMarche(){
              return id=>{
                  let nbr=this.marches.filter(item=>item.parent_id==id).length
                  if(nbr<0){
                      return "Non renseigné"
                  }
                  return nbr
              }
            },
            AfficheAmoirie() {

                return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/amoirie.png";


            },
            AfficheLogODCF() {


                return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/log3.png";



            },
        },
        methods:{
            formatageSomme:formatageSomme,
            tableToExcel(table, name){
                if (!table.nodeType) table = this.$refs.table
                var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
                window.location.href = this.uri + this.base64(this.format(this.template, ctx))
            },
            formaterDate(date){
                if(date=="")
                    return ""
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            exportHTML(titre){
                let table = this.$refs.table
                // var vm = this,
                    let word = `<html xmlns:o='urn:schemas-microsoft-com:office:office xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>${titre}</title></head><body>${table}</body></html>`;

                var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(word);
                var fileDownload = document.createElement("a");
                document.body.appendChild(fileDownload);
                fileDownload.href = source;
                fileDownload.download = 'document.doc';
                fileDownload.click();
                document.body.removeChild(fileDownload);
            }
        }
    }
</script>

<style scoped>

</style>