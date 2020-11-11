detail_marche
<template>
  
     
         <div >
           <table class="table table-bordered table-striped">
                <td colspan="4">
                        <div align="center"> <h4> FICHE DE SUIVI DES MARCHES/CONTRATS - UNITE D'ADMINISTRATIVE</h4> </div>
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
                     <td colspan="">
                         <div class="control-group">
            <label class="control-label">TYPE UNITE ADMINISTRATIVE </label>
            <div class="controls">
             <select  class="span4" v-model="formData.typeua_id">
                      <option></option>
                      <option
                        v-for="typeUniteA in type_Unite_admins"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
            </div>
          </div>
                    </td>
                    <td colspan="">
                         <div class="control-group">
            <label class="control-label">UNITE ADMINISTRATIVE </label>
            <div class="controls">
             <select  class="span4" v-model="formData.ua_id">
                      <option></option>
                      <option
                        v-for="typeUniteA in FiltreUaParTypeUa(formData.typeua_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
            </div>
          </div>
                    </td>
                   
                    <td>
                         <div class="control-group">
            <label class="control-label">SECTION</label>
            <div class="controls">
            <input
                type="text"
               :value="afficheSection(afficheSectionid(formData.ua_id))"
                class="span4"
                readonly
              />
            </div>
          </div>
                    </td>
                   
                    
                </tr>
                
              </table>
      <h5 style="text-align:center;color:#000000;font-size:20px">MARCHES/CONTRATS ATTRIBUE ISSUS DE LA PROCEDURE NORMALE</h5>
              <table class="table table-bordered table-striped" id="Nature_section" >
                <thead>
                  <tr>
                    
                    <th>N° DU MARCHE</th>
                    <th>LIBELLE DU MARCHE</th>
                    <th>MODE PASSATION</th>
                     <!-- <th>LIGNE BUDGETAIRE</th> -->
                    <th>MONTANT PREVU</th>
                   <th>VOIR</th>
                  </tr>
                </thead>
                <tbody>
                    <tr class="odd gradeX" v-for="type in PROCEDURENORMALE(formData.ua_id)" :key="type.id">
                   
                    <td>{{type.numero_marche || 'Non renseigné'}}</td>
                    <td>{{afficherObjetMarche(type.marche_id) || 'Non renseigné'}}</td>
                      <td style="text-align: center">{{afficheLibellePassationMarche(afficheidPassationMarche(type.marche_id)) || 'Non renseigné'}}</td>
                    <!-- <td>{{afficheLibelleEconomique(type.economique_id) || 'Non renseigné'}}</td> -->
                     <td>{{formatageSomme(parseFloat(afficheMontant(type.marche_id))) || 'Non renseigné'}}</td>
                  <td>
                    <router-link :to="{ name: '', params: { id: type.id }}"
                 class="btn btn-success ">
        <span class=""><i class="  icon-eye-open"></i></span>
    </router-link>
                  </td>
                     
                  </tr>
                </tbody>
               
              </table>
            
               <h5 style="text-align:center;color:#000000;font-size:20px">MARCHES/CONTRATS ATTRIBUE ISSUS DE LA PROCEDURE SIMPLIFIEE</h5>
              <table class="table table-bordered table-striped" id="Nature_section" >
                <thead>
                  <tr>
                    
                    <th>N° DU MARCHE</th>
                    <th>LIBELLE DU MARCHE</th>
                    <th>MODE PASSATION</th>
                     <!-- <th>LIGNE BUDGETAIRE</th> -->
                    <th>MONTANT PREVU</th>
                   <th>VOIR</th>
                  </tr>
                </thead>
                <tbody>
                    <tr class="odd gradeX" v-for="type in PROCEDURESIMPLIFIEE(formData.ua_id)" :key="type.id">
                   
                    <td>{{type.numero_marche || 'Non renseigné'}}</td>
                    <td>{{afficherObjetMarche(type.marche_id) || 'Non renseigné'}}</td>
                      <td style="text-align: center">{{afficheLibellePassationMarche(afficheidPassationMarche(type.marche_id)) || 'Non renseigné'}}</td>
                    <!-- <td>{{afficheLibelleEconomique(type.economique_id) || 'Non renseigné'}}</td> -->
                     <td>{{formatageSomme(parseFloat(afficheMontant(type.marche_id))) || 'Non renseigné'}}</td>
                  <td>
                    <router-link :to="{ name: '', params: { id: type.id }}"
                 class="btn btn-success ">
        <span class=""><i class="  icon-eye-open"></i></span>
    </router-link>
                  </td>
                     
                     
                  
                  </tr>
                </tbody>
               
              </table>
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

            ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "structures_administratives",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections",
      "structures_geographiques"
    ]),
...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
            ...mapGetters('parametreGenerauxFonctionnelle',[

                "plans_fonctionnels",
                "afficheNiveauPlanFonctionnel"
            ]),
            ...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays","exercices_budgetaires"]),
            ...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

            ...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters('gestionMarche', ['entreprises',"secteur_activites",'banques','comptes','getCompte',]),
  ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),

afficheNumeroMarche(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.acteEffetFinanciers.find(item => item.marche_id==id )
          if(odj){
            return odj.numero_marche
          }
          return null
        }
      }
    },
    afficheSib(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.marches.find(item => item.id==id )
          if(odj){
            return odj.sib
          }
          return null
        }
      }
    },
PROCEDURENORMALE(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.ua_id==id && this.afficheCodePassationMarche(this.afficheidPassationMarche(item.marche_id))==9 && this.afficheExoBudgetaire(item.marche_id) == this.formData.exo || item.ua_id==id && this.afficheCodePassationMarche(this.afficheidPassationMarche(item.marche_id))==7 && this.afficheExoBudgetaire(item.marche_id) == this.formData.exo)
                  
        }
      }
    },
    PROCEDURESIMPLIFIEE(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.ua_id==id && this.afficheCodePassationMarche(this.afficheidPassationMarche(item.marche_id))==8 && this.afficheExoBudgetaire(item.marche_id) == this.formData.exo || item.ua_id==id && this.afficheCodePassationMarche(this.afficheidPassationMarche(item.marche_id))==6 && this.afficheExoBudgetaire(item.marche_id) == this.formData.exo)
                  
        }
      }
    },
    afficheExoBudgetaire(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.marches.find(item => item.id==id )
          if(odj){
            return odj.exo_id
          }
          return null
        }
      }
    },
    afficheCodePassationMarche(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.procedurePassations.find(item => item.id==id )
          if(odj){
            return odj.type_procedure_id
          }
          return null
        }
      }
    },
    afficheidPassationMarche(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.marches.find(item => item.id==id )
          if(odj){
            return odj.procedure_passation_id
          }
          return null
        }
      }
    },
afficheLibellePassationMarche(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.procedurePassations.find(item => item.id==id )
          if(odj){
            return odj.code
          }
          return null
        }
      }
    },
    afficheLibelleEconomique(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.plans_budgetaires.find(item => item.id==id )
          if(odj){
            return odj.libelle
          }
          return null
        }
      }
    },
    afficheMontant(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.marches.find(item => item.id==id )
          if(odj){
            return odj.montant_marche
          }
          return null
        }
      }
    },
// PROCEDURENORMALE(){

//   return this.marches.filter(itme=>this.afficherEtatDuMarche(itme.marche_id) ==2  && itme.exercice_budget==this.formData.exo && itme.entreprise_id==this.formData.entrep_id && this.afficherIdTypeMarche(itme.marche_id)==this.formData.type_marche_id)

// },
FiltreUaParTypeUa(){
      return id =>{
        if(id!=null && id!=""){
          return  this.uniteAdministratives.filter(item => item.type_ua_id==id )
                  
        }
      }
    },
    afficheSectionid(){
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
    afficheSection(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.sections.find(item => item.id==id )
          if(odj){
            return odj.nom_section
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
    /* th{
background:#1f262d;
color:#fff;
font-size: 12px;
text-align: center;
    }
    td{

color:#000;
font-size: 20px;
text-align: center;
    } */
</style>