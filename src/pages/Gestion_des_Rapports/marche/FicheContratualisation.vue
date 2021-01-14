<template>
    <div>
        <div class="container-fluid">
            <div class="span12" align="right">
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
                    <td   colspan="5"  style="background: #8ea9db !important;">
                        <h3 align="center"> FICHE SYNTHESE DE LA CONTRACTUALISATION D'UN MARCHE/CONTRAT A L'ATTENTION DU CONTROLEUR FINANCIER</h3>
                    </td>
                </tr>
                <tr>
                    <td colspan="6"  style="background: #fff !important;" align="center"></td>
                </tr>
                <tr>
                    <td colspan="6" style="background: #ffa58b !important;" align="center">
                        <div align="center">*** GENERALITES RELATIVES A L'APPEL D'OFFRES ***</div>
                    </td>
                </tr>
                <tr>
                    <td><b>Unité Administrative</b></td>
                    <td colspan="5"><b>{{getUAMarche(detail.unite_administrative_id)}}</b></td>
                </tr>
                <tr>
                    <td><b>Objet de la consultation</b></td>
                    <td colspan="5"><b>{{detail.objet}}</b></td>
                </tr>
                <tr>
                    <td><b>Type de procédure</b></td>
                    <td colspan="2">{{detail.procedure_passation.libelle}}</td>
                    <td><b>Autorisation</b>:</td>
                    <td colspan="2">Data in Column 3, Row 4</td>
                </tr>
                <tr>
                    <td><b>Référence du Dossier de consultation</b></td>
                    <td colspan="5"></td>
                </tr>
                <tr>
                    <td><b>Nombre de lots du dossier de consultation</b></td>
                    <td colspan="5" align="center">{{nbrLotMarche(detail.id)}}</td>
                </tr>
                <tr>
                    <td><b>Source (s) de financement (s)</b></td>
                    <td colspan="5">

                        <table class="table" v-for="item in getLotMarche(detail.id)" :key="'lot'+item.id">
                            <tr>
                                <td colspan="6" style="background: #68d7ca !important;"><b>{{item.objet}}</b></td>
                            </tr>
                        <tr >
                            <td><b>ETAT</b></td>
                            <td colspan="5">
                                <table>
                                    <tr v-for="bailleur in listeDesBailleurEtat(item.id)" :key="'bn'+bailleur.id">
                                        <td colspan="5"  align="center">{{bailleur.tauxbailleur}} %</td>
                                    </tr>
                                </table>
                            </td>

                        </tr>
                            <tr>
                                <td><b>BAILLEUR (S)</b></td>
                                <td colspan="4">
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
                    <td colspan="2">{{detail.imputation}}</td>
                    <td><b>Nombre d'entreprises ayant retiré le dossier de consultation</b></td>
                    <td colspan="2">{{nbrEntrepriseDepoDossierCandidat(detail.id)}}</td>
                </tr>
                <tr>
                    <td><b>Montant de l'enveloppe budgétaire</b></td>
                    <td colspan="2">{{formatageSomme(parseFloat(montantEnveloppeBudgetise(detail)))}}</td>
                    <td><b>Nombre d'entreprises a yant déposé une offre dans le délai requis</b></td>
                    <td colspan="2">{{nbrEntrepriseDepoDossierDelai(detail.id)}}</td>
                </tr>
                <tr>
                    <td><b>Montant de l'estimatif du marché</b></td>
                    <td colspan="2">{{formatageSomme(parseFloat(detail.montant_marche))}}</td>
                    <td><b>Nombre d'entreprises ayant déposé une offre hors délais</b></td>
                    <td colspan="2">{{nbrEntrepriseDepoDossierHDelai(detail.id)}}</td>
                </tr>

                <tr>
                    <td><b>Nature des prix du marché</b></td>
                    <td colspan="2"></td>
                    <td><b>Date et heure de l'ouverture des plis</b></td>
                    <td colspan="2">{{formaterDate(getDateOuverturePlis(detail.id))}}</td>
                </tr>
                <tr>
                <td><b>Délai d'exécution</b></td>
                <td colspan="2"></td>
                <td><b>Date du jugement </b></td>
                <td colspan="2"></td>
              </tr>
                <tr>
                    <td><b>Date et heure limites de réception des plis</b></td>
                    <td colspan="2"></td>
                    <td><b>Agent CF de suivi</b> </td>
                    <td colspan="2"></td>
                </tr>
                <tr>
                    <td colspan="6" style="background: #f2f2f2 !important;">EDITION DU MARCHE/CONTRAT</td>
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
      //   console.log(this.nombreDejourCalcule("2021-01-12","2021-01-14"));
        },
        computed:{

            ...mapGetters("bienService", ["getterCojos","mandate","getMandatPersonnaliserVise",
                "procedurePassations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres",
                "getterDossierCandidats","marches","gettersOuverturePersonnaliser","getterAnalyseDossiers",
                "getActeEffetFinancierPersonnaliser","gettersCotationPersonnaliser",
                "typeMarches","getterAnoDMPBailleur","personnaliseGetterMarcheBailleur",'gettersCotations'
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
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']),
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
                                console.log(jour)
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
                                console.log(jour)
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


            bailleuEtat(){
              return bailleur=>{
                  console.log(bailleur)
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
                    console.log(bailleur)
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
                    console.log(bailleur)
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
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
        }
    }
</script>

<style scoped>

</style>