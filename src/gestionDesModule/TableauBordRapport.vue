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
                    <td colspan="2">
                         <div class="control-group">
            <label class="control-label">NOM COMMERCIAL </label>
            <div class="controls">
             <select  class="span8" v-model="formData.entrep_id">
                      <option></option>
                      <option
                        v-for="typeUniteA in entreprises"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.raison_sociale}}</option>
                    </select>
            </div>
          </div>
                    </td>
                   
                    <td>
                         <div class="control-group">
            <label class="control-label">TYPE DE MARCHE</label>
            <div class="controls">
            <select v-model="formData.type_marche_id" class="span4">
              <option></option>
               <option v-for="plans in typeMarches" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
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
               :value="COMPTECONTRIBUABLE(formData.entrep_id)"
                class="span4"
                readonly
              />
            </div>
          </div>
                    </td>
                    <td colspan="2">
                         <div class="control-group">
            <label class="control-label">REGIME D'IMPOSITION </label>
            <div class="controls">
            <input
                type="text"
               :value="regimeImpositions(impossition(formData.entrep_id))"
                class="span8"
                readonly
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
               :value="formaterDate(DateCreation(formData.entrep_id))"
                class="span4"
                readonly
              />
            </div>
          </div>
                    </td>
                     <!-- <td>
                         <div class="control-group">
            <label class="control-label">N° DU REGISTRE DE COMMERCE</label>
            <div class="controls">
             <input
                type="text"
               :value="formData.entrep_id"
                class="span4"
                readonly
              />
            </div>
          </div>
                    </td> -->
                    
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
                        <a data-toggle="tab" href="#RealiteService">MARCHES <span class="badge badge-info" >     {{listeDesMarcheEnCoursExecution.length+listeDesMarcheTerminer.length+listeDesMarcheEnCoursExecution.length}}</span></a>
                      </li>
                        <!-- <li>
                        <a data-toggle="tab" href="#opdefinitif">MARCHE SIB</a>
                      </li> -->
                      <!-- <li>
                        <a data-toggle="tab" href="#tab03">IMAGES DES MARCHES</a>
                      </li> -->
                      
                     
                    </ul>
                  </div>
                         <div class="widget-content tab-content">
                          <div id="RealiteService" class="tab-pane active">
                            <h5 style="text-align:center;color:green;font-size:20px">TYPE DE MARCHE : {{afficherLibelleTypeMarche(formData.type_marche_id)}} - EN COURS D'EXECUTION ({{listeDesMarcheEnCoursExecution.length}})</h5>
                               <table class="table table-bordered table-striped" id="Nature_section">
               
                <thead>
                  <tr>
                    <th >Marche </th>
                    <th>Section</th>
                    <th title="Unité Administrative">UA</th>
                    
                     <th title="Date d'Approbation">D.Approbation</th>
                     <!-- <th>Type marche</th> -->
                     <!-- <th>Etat Marche</th> -->
                     <th title="Montant ( Montant de Base + Avenants)(TTC)">Montant(TTC)</th>
                    <th>Déjà Payé</th>
                    <th>Reste à Payer</th>
                  </tr>
                </thead>
                <tbody>
                    <tr class="odd gradeX" v-for="type in listeDesMarcheEnCoursExecution" :key="type.id">
                   
                    <td>{{afficherObjetMarche(type.marche_id) || 'Non renseigné'}}</td>
                    <td>{{afficherSection(afficherIdSection(type.ua_id)) || 'Non renseigné'}}</td>
                      <td>{{afficherLibelleUa(type.ua_id) || 'Non renseigné'}}</td>
                    
                     <td>{{formaterDate(afficherDateapprobation(type.marche_id)) || 'Non renseigné'}}</td>
                     <!-- <td>{{afficherLibelleTypeMarche(afficherIdTypeMarche(type.marche_id)) || 'Non renseigné'}}</td>
                     <td>
                       <button 
                      v-if="afficherEtatDuMarche(type.marche_id) == 2"  class="btn  btn-success">
                <span >EN COURS</span>
                </button>
                       </td> -->
                     <td>{{formatageSomme(parseFloat(MontantBaseMarche(type.marche_id))+ parseFloat(MontantAvenant(type.marche_id)))|| 'Non renseigné'}}</td>
                      <td>{{formatageSomme(parseFloat(type.total_general)) || 'Non renseigné'}}</td>
                      <td>{{formatageSomme(parseFloat(parseFloat(MontantBaseMarche(type.marche_id))+ parseFloat(MontantAvenant(type.marche_id)))-parseFloat(type.total_general))|| 'Non renseigné'}}</td>
                  
                  </tr>
                </tbody>
                <!-- <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>TOTAL</td>
                    <td style="color:red">{{formatageSomme(parseFloat(MontantDejaPayes(formData.entrep_id)))}}</td>
                    <td>0</td>
                  </tr>
                </tbody> -->
              </table>
 <h5 style="text-align:center;color:#000000;font-size:20px">TYPE DE MARCHE : {{afficherLibelleTypeMarche(formData.type_marche_id)}} - ACHEVES ({{listeDesMarcheTerminer.length}})</h5>
              <table class="table table-bordered table-striped" id="Nature_section" >
                <thead>
                  <tr>
                    <th >Marche </th>
                    <th>Section</th>
                    <th title="Unité Administrative">UA</th>
                    <th title="Montant ( Montant de Base + Avenants)(TTC)">Montant(TTC)</th>
                     <th title="Date d'Approbation">D.Approbation</th>
                     <!-- <th>Type marche</th>
                     <th>Etat Marche</th> -->
                    <th>Réception</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                    <tr class="odd gradeX" v-for="type in listeDesMarcheTerminer" :key="type.id">
                   
                    <td>{{afficherObjetMarche(type.marche_id) || 'Non renseigné'}}</td>
                    <td>{{afficherSection(afficherIdSection(type.ua_id)) || 'Non renseigné'}}</td>
                      <td>{{afficherLibelleUa(type.ua_id) || 'Non renseigné'}}</td>
                    <td>{{formatageSomme(parseFloat(MontantBaseMarche(type.marche_id))+ parseFloat(MontantAvenant(type.marche_id)))|| 'Non renseigné'}}</td>
                     <td>{{formaterDate(afficherDateapprobation(type.marche_id)) || 'Non renseigné'}}</td>
                     <!-- <td>{{afficherLibelleTypeMarche(afficherIdTypeMarche(type.marche_id)) || 'Non renseigné'}}</td> -->
                     <!-- <td>
                       <button 
                      v-if="afficherEtatDuMarche(type.marche_id) == 5"  class="btn  btn-info">
                <span >ACHEVES</span>
                </button>
                       </td> -->
                     
                      <td>{{Non-renseigné}}</td>
                      <td>{{Non-renseigne}}</td>
                  
                  </tr>
                </tbody>
               
              </table>

              <h5 style="text-align:center;color:red;font-size:20px">TYPE DE MARCHE : {{afficherLibelleTypeMarche(formData.type_marche_id)}} - EN SOUFFRANCE ({{listeDesMarcheSuppendu.length}})</h5>
              <table class="table table-bordered table-striped" id="Nature_section" >
                <thead>
                  <tr>
                    <th >Marche </th>
                    <th>Section</th>
                    <th title="Unité Administrative">UA</th>
                    <th title="Montant ( Montant de Base + Avenants)(TTC)">Montant(TTC)</th>
                     <th title="Date d'Approbation">D.Approbation</th>
                     <!-- <th>Type marche</th>
                     <th>Etat Marche</th> -->
                    <th>Nature</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                    <tr class="odd gradeX" v-for="type in listeDesMarcheSuppendu" :key="type.id">
                   
                    <td>{{afficherObjetMarche(type.marche_id) || 'Non renseigné'}}</td>
                    <td>{{afficherSection(afficherIdSection(type.ua_id)) || 'Non renseigné'}}</td>
                      <td>{{afficherLibelleUa(type.ua_id) || 'Non renseigné'}}</td>
                    <td>{{formatageSomme(parseFloat(MontantBaseMarche(type.marche_id))+ parseFloat(MontantAvenant(type.marche_id)))|| 'Non renseigné'}}</td>
                     <td>{{formaterDate(afficherDateapprobation(type.marche_id)) || 'Non renseigné'}}</td>
                     <!-- <td>{{afficherLibelleTypeMarche(afficherIdTypeMarche(type.marche_id)) || 'Non renseigné'}}</td>
                     <td>
                       <button 
                      v-if="afficherEtatDuMarche(type.marche_id) == 5"  class="btn  btn-danger">
                <span >SUP</span>
                </button>
                       </td> -->
                     
                      <td>{{Non-renseigné}}</td>
                      <td>{{Non-renseigne}}</td>
                  
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


listeDesMarcheSuppendu(){

  return this.mandats.filter(itme=>this.afficherEtatDuMarche(itme.marche_id) ==7  && itme.exercice_budget==this.formData.exo && itme.entreprise_id==this.formData.entrep_id && this.afficherIdTypeMarche(itme.marche_id)==this.formData.type_marche_id)

},


listeDesMarcheTerminer(){

  return this.mandats.filter(itme=>this.afficherEtatDuMarche(itme.marche_id) ==5  && itme.exercice_budget==this.formData.exo && itme.entreprise_id==this.formData.entrep_id && this.afficherIdTypeMarche(itme.marche_id)==this.formData.type_marche_id)

},
listeDesMarcheEnCoursExecution(){

  return this.mandats.filter(itme=>this.afficherEtatDuMarche(itme.marche_id) ==2  && itme.exercice_budget==this.formData.exo && itme.entreprise_id==this.formData.entrep_id && this.afficherIdTypeMarche(itme.marche_id)==this.formData.type_marche_id)

},
regimeImpositions(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.getterregimeImpositions.find(item => item.id==id )
          if(odj){
            return odj.libelle
          }
          return null
        }
      }
    },
afficherDateapprobation(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.getterActeEffetFinanciers.find(item => item.marche_id==id )
          if(odj){
            return odj.date_approbation
          }
          return null
        }
      }
    },
MontantBaseMarche(){
      return id =>{
        if(id!=null && id!=""){
          return this.getterActeEffetFinanciers.filter(element => element.marche_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0).toFixed(0); 
          
          
        }
      }
    },
    MontantAvenant(){
      return id =>{
        if(id!=null && id!=""){
          return this.avenants.filter(element => element.marche_id == id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(0); 
          
          
        }
      }
    },
    MontantDejaPayes(){
      return id =>{
        if(id!=null && id!=""){
          return this.mandats.filter(element => element.entreprise_id == id && this.afficherIdTypeMarche(element.marche_id)==this.formData.type_marche_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
        }
        
      }
      
    },
afficherObjetMarche(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.marches.find(item => item.id==id )
          if(odj){
            return odj.objet
          }
          return null
        }
      }
    },
    afficherLibelleUa(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.uniteAdministratives.find(item => item.id==id )
          if(odj){
            return odj.libelle
          }
          return null
        }
      }
    },
    afficherIdSection(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.uniteAdministratives.find(item => item.id==id )
          if(odj){
            return odj.section_id
          }
          return null
        }
      }
    },
     afficherSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return qtereel.code_section.concat('  ', qtereel.nom_section);
       
      }
      return 0
        }
      };
    },
afficherEtatDuMarche(){
      return id =>{
        if(id!=null && id!=""){
          let objet = this.marches.find(item => item.id==id )
          if(objet){
            return objet.attribue
          }
          return null
        }
      }
    },
  
  afficherIdTypeMarche(){
      return id =>{
        if(id!=null && id!=""){
          let objet = this.marches.find(item => item.id==id )
          if(objet){
            return objet.type_marche_id
          }
          return null
        }
      }
    },
afficherLibelleTypeMarche(){
      return id =>{
        if(id!=null && id!=""){
          let objet = this.typeMarches.find(item => item.id==id )
          if(objet){
            return objet.libelle
          }
          return null
        }
      }
    },

    COMPTECONTRIBUABLE(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.entreprises.find(item => item.id==id )
          if(odj){
            return odj.numero_cc
          }
          return null
        }
      }
    },
    	impossition(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.entreprises.find(item => item.id==id )
          if(odj){
            return odj.regime_impossition
          }
          return null
        }
      }
    },
    DateCreation(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.entreprises.find(item => item.id==id )
          if(odj){
            return odj.datecreation
          }
          return null
        }
      }
    },
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