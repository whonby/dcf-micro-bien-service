
<template>
    <div >


        <div class="container-fluid" v-if="detail">
            <hr />
            <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
            <div class="row-fluid" >
                <div class="span12" >

                    <div class="widget-box">
                        <div class="widget-title">
                            <div align="right">
                                Recherche:
                                <input type="search" placeholder="Saisie section ou libelle" v-model="search" />


                            </div>
                            <span class="icon">
                <i class="icon-th"></i>
              </span>
                            <h5>Cycle de Vie</h5>
                        </div>

     <div id="app">
         <div  id="pdf">
             <table class="table table-bordered table-striped">
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


             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th style="width:10%">SOURCE (S) DE FINANCEMENTS</th>
                     <td style="width:15%" colspan="1">CONTREPARTIE </td>
                     <td style="width:15%; text-align: center" colspan="3"> BAILLEURS (B)</td>

                 </tr>
                 <tr>
                     <th style="width:10%">NOM DU BAILLEUR</th>
                     <td style="width:15%"> {{detail.source_financement}} </td>
                     <td style="width:15%">B1: </td>
                     <td style="width:15%">B2: </td>
                     <td style="width:15%">B3: </td>
                     <td style="width:15%">B4: </td>
                     <td style="width:15%">B5: </td>
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
                     <td style="width:15%"> {{detail.type_financement}} </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                 </tr>
                 <tr>
                     <th  style="width:10%">POURCENTAGE (%)</th>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                 </tr>
                 <tr>
                     <th  style="width:10%">MONTANT  HT FCFA</th>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                 </tr>
                 <tr>
                     <th  style="width:10%">MONTANT TTC FCFA</th>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                     <td style="width:15%"> </td>
                 </tr>
                 <tr>
                     <th  style="width:5%">MONTANT TOTAL DE  BASE DU MARCHE / CONTRAT FCFA(HT,TTC)</th>
                     <td style="width:15%" colspan="3" >HT </td>
                     <td style="width:15%" colspan="3" >TTC </td>
                 </tr>
                 <tr>
                     <th  style="width:5%">AGENT CF DE SUIVI </th>
                     <td style="width:15%" colspan="6" > </td>

                 </tr>

                 </thead>

             </table>
             <hr>
             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th>ETAT DE LA CONTRACTUALISATION:
                         <span title="MARCHE EN EXERCUTER"  v-if="detail.attribue == 2" style=" color: red; font-size: 15px">ACHEVE</span>

                         <span title="MARCHE EN EXERCUTER"  v-else-if="detail.attribue == 1"  style=" color: green; font-size: 15px">En cours</span>
                         <!--  <button
                                   v-else-if="detail.attribue == 3"  class="btn  btn-info">
                               <span title="MARCHE RESILIE" >Résilie</span>

                           </button>
                           <button v-else-if="detail.attribue == 5" class="btn  btn-inverse">

                               <span title="MARCHE EN TERMINE">Termine</span>
                           </button>--> </th>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>

             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th style="width:5%">TYPE ET REFERENCES DE LA  PROCEDURE</th>
                     <td style="width:15%" colspan="6" > ({{detail.procedure_passation.libelle}}) {{detail.procedure_passation.type_procedure.libelle}} </td>
                 </tr>
                 <tr>
                     <th style="width:5%">NATURE DES PRIX</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th style="width:5%">DATE D'OUVERTURE</th>
                     <td style="width:28%" colspan="1" >PLIS TECHNIQUE </td>
                     <td style="width:2%" colspan="1" > </td>
                     <td style="width:15%" colspan="1" >30/12/2019 </td>
                     <td style="width:28%" colspan="1" >PLIS FINANCIER</td>
                     <td style="width:2%" colspan="1" > </td>
                     <td style="width:15%" colspan="1" >30/12/2019 </td>
                 </tr>

                 <tr>
                     <th>MONTANT CONFIDENTIEL FCFA</th>
                     <td style="width:15%" colspan="3" >HT</td>
                     <td style="width:15%" colspan="3" >TTC</td>

                 </tr>
                 <tr>
                     <th style="width:5%">DATE D'OUVERTURE</th>
                     <td style="width:28%" colspan="1" >TECHNIQUE </td>
                     <td style="width:2%" colspan="1" > </td>
                     <td style="width:15%" colspan="1" > </td>
                     <td style="width:28%" colspan="1" >COMBINE</td>
                     <td style="width:2%" colspan="1" > </td>
                     <td style="width:15%" colspan="1" > </td>
                 </tr>
                 <tr>
                     <th style="width:5%">DATE D'ENVOI DEMANDE D'ANO</th>
                     <td style="width:28%"  colspan="1" >NON APPLICABLE/ APPLICABLE </td>
                     <td style="width:2%" colspan="1" > </td>
                     <td style="width:15%" colspan="1" >DMP </td>
                     <td style="width:28%"  colspan="1" >BAILLEUR</td>
                     <td style="width:2%" colspan="1" > </td>
                     <td style="width:15%" colspan="1" > </td>
                 </tr>
                 <tr>
                     <th style="width:5%">DATE RETOUR DEMANDE D'ANO</th>
                     <td style="width:28%" colspan="1" >NON APPLICABLE/ APPLICABLE </td>
                     <td style="width:2%" colspan="1" > </td>
                     <td style="width:15%" colspan="1" >DMP </td>
                     <td style="width:28%" colspan="1" >BAILLEUR</td>
                     <td style="width:2%" colspan="1" > </td>
                     <td style="width:15%" colspan="1" > </td>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>

             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th style="width:5%">RESULTAT ET OBSERVATION DE L'ANO</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th style="width:5%">DATE D'ATTRIBUTION DEFINITIVE</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th style="width:5%">ENTREPRISE ATTRIBUTAIRE</th>
                     <td style="width:15%" colspan="3" > </td>
                     <td style="width:15%" colspan="3" >N° COMPTE CONTRIBUABLE: </td>
                 </tr>
                 <tr>
                     <th>AUTORITE APPROBATRICE DU MARCHE / CONTRAT</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th>DATE D'APPROBATION</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th>NUMERO DE MARCHE</th>
                     <td style="width:15%" colspan="6" > </td>
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
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th>DATE DE NOTIFICATION DE L'ORDRE DE SERVICE</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th>DATE PREVISIONELLE DE DEMARRAGE DES TRAVAUX</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th>DELAI D'EXECUTION</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th>DATE PREVISIONNELLE DE FIN DES TRAVAUX</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 <tr>
                     <th>DUREE TOTALE  DE LA CONTRACTUALISATION</th>
                     <td style="width:15%" colspan="6" > </td>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>

             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th>SITUATION D'EXECUTION:EN COURS - ACHEVE - SUSPENDU-RESILIE </th>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th style="width:5%" >DATE EFFECTIVE DE DEMARRAGE DES TRAVAUX</th>
                     <td style="width:15%" colspan="6" > </td>
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
             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th>AVENANT (S) APPROUVE (S) </th>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th style="width:5%">NOMBRE:</th>
                     <td style="width:15%" colspan="2" >1ou2ou3 </td>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" >TTC</td>
                 </tr>
                 <tr>
                     <th>MONTANT TOTAL DU MARCHE APRES AVENANT (S) FCFA</th>
                     <td style="width:15%" colspan="4" >HT </td>
                     <td style="width:15%" colspan="4" >TTC </td>
                 </tr>
                 </thead>
             </table>
             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th>DECOMPTE (S)  VISE (S) </th>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
             <table class="table table-bordered table-striped">
                 <thead>

                 <tr>
                     <th style="width:5%">DATE</th>
                     <td style="width:15%" colspan="8" > </td>
                 </tr>
                 <tr>
                     <th>DERNIER / NUMERO</th>
                     <td style="width:15%" colspan="2" ></td>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" >TTC</td>
                 </tr>
                 <tr>
                     <th>CUMUL / NOMBRE</th>
                     <td style="width:15%" colspan="2" ></td>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" >TTC</td>
                 </tr>

                 </thead>
             </table>
             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th>SITUATION FINANCIERE DU MARCHE/CONTRAT</th>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>

             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th>DATE</th>
                     <td style="width:15%" colspan="8" ></td>
                 </tr>
                 <tr>
                     <th style="width:10%" >TOTAL PAIEMENT  EXECUTE</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" >TTC</td>
                 </tr>
                 <tr>
                     <th style="width:10%" >PART ETAT</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" >TTC</td>
                 </tr>
                 <tr>
                     <th style="width:10%" >PART BAILLEUR</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" >TTC</td>
                 </tr>
                 <tr>
                     <th style="width:10%" >TOTAL RESTE A PAYER</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" >TTC</td>
                 </tr>
                 <tr>
                     <th style="width:10%" >PART ETAT</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" >TTC</td>
                 </tr>
                 <tr>
                     <th style="width:10%" >PART BAILLEUR</th>
                     <td style="width:15%" colspan="2" >%</td>
                     <td style="width:15%" colspan="2" >HT</td>
                     <td style="width:15%" colspan="2" >TTC</td>
                 </tr>

                 <tr>
                     <th>DATE DE FIN D'EXECUTION DES TRAVAUX</th>
                     <td style="width:15%" colspan="8" ></td>
                 </tr>
                 <tr>
                     <th>DATE RECEPTION PROVISOIRE</th>
                     <td style="width:15%" colspan="8" ></td>
                 </tr>
                 <tr>
                     <th>DATE RECEPTION DEFINITIVE</th>
                     <td style="width:15%" colspan="8" ></td>
                 </tr>
                 <tr>
                     <th>AUTRES</th>
                     <td style="width:15%" colspan="8" ></td>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>

             <table class="table table-bordered table-striped">
                 <thead>
                 <tr>
                     <th>OBJECTIFS DU MARCHE/CONTRAT / LIVRABLES ATTENDUS </th>
                     <th>OBSERVATIONS</th>
                     <th>CONTROLEUR FINANCIER</th>
                 </tr>
                 <tr height="120px">
                     <td > </td>
                     <td > </td>
                     <td > DCF N'DA KACOU ANGE JOSEPH
                     </td>
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
    import { mapGetters, mapActions } from "vuex";
    import html2canvas from 'html2canvas'
    import * as JsPDF from 'jspdf'
    // import moment from "moment";
    // import { ModelListSelect } from "vue-search-select";
    // import "vue-search-select/dist/VueSearchSelect.css";
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
                search: ""
            };
        },
        created() {
         this.detail=this.marches.find(item=>item.id== this.$route.params.id)
       //  console.log(this.marches)
        },
        computed: {
            ...mapGetters("bienService", ["modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
                'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
                'nombremarchesExecute',
                'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
                "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
                "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

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

            genererEnPdf(){

                html2canvas(document.querySelector('#app'), {imageTimeout: 5000, useCORS: true}).then(canvas => {
                    document.getElementById('pdf').appendChild(canvas)
                    let img = canvas.toDataURL('image/png')
                    var imgWidth = 210;
                    var pageHeight = 295;
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
                    }
                    doc.save( 'file.pdf');
                })
            },
            // formaterDate(date) {
            // return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            // },
            ExporterEnExel(){
                this.$refs.excel.click()
            }
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