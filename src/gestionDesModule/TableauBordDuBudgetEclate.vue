
<template>
  
     <div>
         <div style="text-align:center;font-size:50px;color:#000;margin-top:20%;">
          TABLEAU DE BORD GESTION BUDGET ECLATE EN COURS ...
         </div>
     </div>
</template>

<script>
    import moment from "moment";
    import { mapGetters, mapActions } from "vuex"
    //import marcheEnCoursExecution from "../../pages/Gestion_des_Rapports/marcheHorsSib/marcheEnCoursExecution"
    // import html2canvas from 'html2canvas'
    // import * as JsPDF from 'jspdf'
    // import html2pdf from 'html2pdf.js'
    // import moment from "moment";
    // import { ModelListSelect } from "vue-search-select";
    // import "vue-search-select/dist/VueSearchSelect.css";
    import { formatageSomme } from "@/Repositories/Repository";

    export default {
        components: {
          
        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }
                ],
                formData:{},
                search: "",
            
            };
        },
        
        computed: {
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
                "budgetEclate"


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
            ...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays"]),
            ...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

            ...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters('gestionMarche', ['entreprises',"secteur_activites",'banques','comptes','getCompte',]),
  ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),


        },
        created() {
            this.marcheid=this.$route.params.id
   this.detailOp = this.mandats.find(
       idmarche => idmarche.id == this.$route.params.id
         )
  
},
        methods: {
            ...mapActions("personnelUA", [
                "getpaiementPersonnel",
                "ajouterpaiementPersonnel",
                "modifierpaiementPersonnel",
                "supprimerpaiementPersonnel"
            ]),
            formatageSomme:formatageSomme,
            formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            
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
background:#1f262d;
color:#fff;
font-size: 12px;
text-align: center;
    }
    td{

color:#000;
font-size: 20px;
text-align: center;
    }
</style>