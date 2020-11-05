detail_marche
<template>
  
     
         <div >
           <table class="table table-bordered table-striped">
                <td colspan="4">
                        <div align="center"> <h4>FICHE DE SUIVI DE L'ENTREPRISE</h4> </div>
                      </td>
                <tr>
                    <td>
                         <div class="control-group">
            <label class="control-label">EXERCICE BUDGETAIRE</label>
            <div class="controls">
             <select  class="span4" v-model="formData.exo">
                      <option></option>                       
                     <option
                        v-for="typeUniteA in exercices_budgetaires"
                        :key="typeUniteA.id"
                        :value="typeUniteA.annee"
                      >{{typeUniteA.annee}}</option>
                    </select>
            </div>
          </div>
                    </td>
                    <td>
                         <div class="control-group">
            <label class="control-label">NOM COMMERCIAL </label>
            <div class="controls">
             <select  class="span4">
                      <option></option>
                      <option
                        v-for="typeUniteA in exercices_budgetaires"
                        :key="typeUniteA.id"
                        :value="typeUniteA.annee"
                      >{{typeUniteA.annee}}</option>
                    </select>
            </div>
          </div>
                    </td>
                   
                    <td>
                         <div class="control-group">
            <label class="control-label">TYPE DE MARCHE</label>
            <div class="controls">
             <select  class="span4">
                      <option
                       
                      ></option>
                    </select>
            </div>
          </div>
                    </td>
                    <td>
                         <div class="control-group">
            <label class="control-label">Recherche</label>
            <div class="controls">
              <a
          @click.prevent="ajouterTypeTexteLocal(formData)"
          class="btn btn-primary"
          href="#"
          
        >RECHERCHE</a>
            </div>
          </div>
                    </td>
                    
                </tr>
                  <tr>
                    <td>
                         <div class="control-group">
            <label class="control-label">N° COMPTE CONTRIBUABLE</label>
            <div class="controls">
            <input
                type="text"
               
                class="span4"
                
              />
            </div>
          </div>
                    </td>
                    <td>
                         <div class="control-group">
            <label class="control-label">REGIME D'IMPOSITION </label>
            <div class="controls">
            <input
                type="text"
               
                class="span4"
                
              />
            </div>
          </div>
                    </td>
                   
                    <td>
                         <div class="control-group">
            <label class="control-label">DATE DE CREATION</label>
            <div class="controls">
             <input
                type="text"
               
                class="span4"
                
              />
            </div>
          </div>
                    </td>
                     <td>
                         <div class="control-group">
            <label class="control-label">N° DU REGISTRE DE COMMERCE</label>
            <div class="controls">
             <input
                type="text"
               
                class="span4"
                
              />
            </div>
          </div>
                    </td>
                    
                </tr>
              </table>
      <!-- <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>LIBELLES MARCHES </th>
                    <th>Section</th>
                    <th>Unité Administrative</th>
                    <th>Montant(Marche + Avenant)</th>
                    <th>Date d'approbation</th>
                    <th>SITUATION A CE JOUR</th>
                  </tr>
                  <tr>
                    <th colspan="5">LIBELLES MARCHES </th>
                    
                    <th>SITUATION A CE JOUR</th>
                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
              </table> -->
              <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      
                       <li class="active">
                        <a data-toggle="tab" href="#RealiteService">MARCHE HORS SIB</a>
                      </li>
                        <li>
                        <a data-toggle="tab" href="#opdefinitif">MARCHE SIB</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab03">IMAGES DES MARCHES</a>
                      </li> -->
                      
                     
                    </ul>
                  </div>
                         <div class="widget-content tab-content">
                          <div id="RealiteService" class="tab-pane active">
                               <table class="table table-bordered table-striped" id="Nature_section">
                <thead>
                  <tr>
                    <th >LIBELLES MARCHES </th>
                    <th>Section</th>
                    <th>Unité Administrative</th>
                    <th >Montant(Montant de Base + Avenants)(TTC)</th>
                     <th >Date d'approbation</th>
                    <th>SITUATION A CE JOUR</th>
                    
                  </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="type in filtre_type_teste" :key="type.id">
                    
                  </tr>
                </tbody>
                 <tbody>
                  <tr>
                    <td >LIBELLES MARCHES2 </td>
                    <td>Section</td>
                    <td>Unité Administrative</td>
                    <td >Montant(Montant de Base + Avenants)(TTC)</td>
                     <td >Date d'approbation</td>
                    <td>SITUATION A CE JOUR</td>
                    
                  </tr>
                </tbody>
                 <tbody>
                  <tr>
                    <td >LIBELLES MARCHES1 </td>
                    <td>Section</td>
                    <td>Unité Administrative</td>
                    <td >Montant(Montant de Base + Avenants)(TTC)</td>
                     <td >Date d'approbation</td>
                    <td>SITUATION A CE JOUR</td>
                    
                  </tr>
                </tbody>
              </table>
                            </div>
                         </div>
                </div>
              </table>
            </div>
             <hr>
           
         </div>
     





                        <!-- <div v-else> -->
                        <!-- <p style="text-align:center;font-size:20px;color:red;">Aucune Unite Administrative</p> -->
                        <!-- </div> -->
              

        <!-- <fab :actions="fabActions" @cache="afficherModalAjouterpaiementPersonnel" main-icon="apps" bg-color="green"></fab>
            <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterpaiementPersonnel()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
      <notifications  /> -->
    
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

            ...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

            ...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters('gestionMarche', ['entreprises',"secteur_activites",'banques','comptes','getCompte',]),
  ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),

listeDesMarcheEnCoursExecution(){
  return this.mandats.filter(itme=>itme.exercice_budget==this.formData.exo && itme.exercice_budget==this.formData.exo)
}
  
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
text-align: left;
    }
    td{

color:#000;
font-size: 20px;
text-align: left;
    }
</style>