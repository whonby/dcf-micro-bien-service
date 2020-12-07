
<template>
  <div>
     <table class="table table-bordered table-striped" id="app1" >
       
                 <thead style="border:5px">
                   
                   <tr >
                      <td colspan="4">
                        <div align="center"> <h4>CARTE D'IDENTITE DU VEHICULE</h4> </div>
                      </td>
                   </tr>
                 <tr>
                      <th style="width:16%">NUMERO OP</th>
                     <td style="color:red;font-size:25px">  </td>
                     <th style="width:16% ">IMMATRICULATION</th>
                     <td>{{detail.numimmatriculation}} </td>
                    
                     <th style="width:16%">NUMERO OP</th>
                     <td style="color:red;font-size:25px">  </td>
                 </tr>
                 <tr>
                    <!-- <th rowspan="5" style="margin:0 auto">IMPUTATION BUDGETAIRE</th> -->
                     <th style="width:16%">SECTION</th>
                     <td colspan="3"> </td>
                 </tr>
                 <tr>
                   
                     <th style="width:16%">PROGRAMME/DOTATION</th>
                     <td colspan="3"> </td>
                 </tr>
                 
                 </thead>

             </table>
  </div>
</template>

<script>
    // import moment from "moment";
    import { mapGetters, mapActions } from "vuex";
    // import html2canvas from 'html2canvas'
    // import * as JsPDF from 'jspdf'
    // import html2pdf from 'html2pdf.js'
    // import moment from "moment";
    // import { ModelListSelect } from "vue-search-select";
    // import "vue-search-select/dist/VueSearchSelect.css";
    import { formatageSomme } from "@/Repositories/Repository";

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
                
                search: "",
            
            };
        },
        
        computed: {
            ...mapGetters('horSib', ['gettersopProvisoire']),
            ...mapGetters("bienService", ["getFacturePersonnaliser","getterActeEffetFinanciers","modepaiements",'mandats','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
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
                "getPersonnaliseBudgetGeneralParPersonnel",
                "budgetEclate",
                "getvehicules"


            ]),

            ...mapGetters('parametreGenerauxAdministratif',[

                "sections",
                "type_Unite_admins",
                "plans_programmes",
                "natures_sections",
                "grandes_natures",
                "afficheNiveauPlanProg",
                "exercices_budgetaires",
                "localisations_geographiques"
            ]),
...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
            ...mapGetters('parametreGenerauxFonctionnelle',[

                "plans_fonctionnels",
                "afficheNiveauPlanFonctionnel"
            ]),

            ...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

            ...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters('gestionMarche', ['entreprises',"secteur_activites",'banques','comptes','getCompte',]),

        },
   created() {
         
            this.detail=this.getvehicules.find(item=>item.id==this.$route.params.id)
            
           
        },
        methods: {
            ...mapActions("personnelUA", [
                "getpaiementPersonnel",
                "ajouterpaiementPersonnel",
                "modifierpaiementPersonnel",
                "supprimerpaiementPersonnel"
            ]),
            formatageSomme:formatageSomme,
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
    th{

color:#1f262d;
font-size: 12px;
text-align: left;
    }
    td{

color:#000;
font-size: 20px;
text-align: left;
    }
</style>