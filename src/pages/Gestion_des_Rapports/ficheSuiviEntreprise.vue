<template>
    <div>
        <div class="widget-content nopadding" style="margin: 25px">
            <table class="table table-striped">
          <tbody>
            <tr>
              <td>
                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >EXERCICE<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="exercices_budgetaires"
                  v-model="exercice_budgetaire_id"
                  option-value="id"
                  option-text="annee"
                  placeholder="TOUTES LES ANNEES BUDGETAIRES"
                >
                </model-list-select>
                <br> <br>
              </td>
              <td>
                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  > ENTREPRISES<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="entreprises"
                  v-model="entreprises_id"
                  option-value="id"
                  option-text="raison_sociale"
                  placeholder="TOUTES LES ENTREPRISES"
                >
                </model-list-select>
               
              </td>
              
            </tr>
          </tbody>
        </table>
        <br> <br>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th
                style="
                  font-size: 14px;
                  color:#000;
                  font-weight: bold;
                  background-color: #FC762F !important;
                "
              >
               N° Marché
              </th>
              <th
                style="
                  font-size: 14px;
                   color:#000;
                  font-weight: bold;
                  background-color: #FC762F !important;
                "
              >
                Libelle marché
              </th>
              <th
                style="
                  font-size: 14px;
                   color:#000;
                  font-weight: bold;
                  background-color: #FC762F !important;
                "
              >
                Section
              </th>
              <th
                style="
                  font-size: 14px;
                   color:#000;
                  font-weight: bold;
                  background-color: #FC762F !important;
                "
              >
                UA
              </th>
              <th
                style="
                  font-size: 14px;
                  font-weight: bold;
                   color:#000;
                  background-color: #FC762F !important;
                "
              >
                Type Marché
              </th>
              <th style="
                  font-size: 14px;
                  font-weight: bold;
                   color:#000;
                  background-color: #FC762F !important; ">
                Statut en Execution
              </th>
              <th style="
                  font-size: 14px;
                  font-weight: bold;
                   color:#000;
                  background-color: #FC762F !important;
                ">
                Montant
              </th>
              <th style="
                  font-size: 14px;
                  font-weight: bold;
                   color:#000;
                  background-color: #FC762F !important;
                "
              >
                Montant payé
              </th>
              <th
                style="
                  font-size: 14px;
                  font-weight: bold;
                   color:#000;
                  background-color: #FC762F !important;
                "
              >
                Montant restant
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd gradeX" v-for="marche in ListeDesMarches" :key="marche.id">
              <td style="font-size: 14px; font-weight: bold; text-align: center"
              > {{marche.reference_marche || 'Non renseigné'}}  </td>

              
              <td style="font-size: 14px; font-weight: bold; text-align: center">
               {{marche.objet || 'Non renseigné'}}
              </td>
             

              <td style="font-size: 14px; font-weight: bold; text-align: center">
                  {{LibelleSection(marche.section_id) || 'Non renseigné'}}
              </td>
              <td style="font-size: 14px; font-weight: bold; text-align: center">
                  {{afficherLibelleUa(marche.unite_administrative_id) || 'Non renseigné'}}
              </td>
              <td style="font-size: 14px; font-weight: bold; text-align: center">
                  {{afficherLibelleTypeMarche(marche.type_marche_id) || 'Non renseigné'}}
              </td>

              <td
                style="font-size: 14px; font-weight: bold; text-align: center">
                <span v-if='afficherEtatDuMarche(marche.id) == 7' >
                    SUSPENDU
                </span>
                <span v-else-if='afficherEtatDuMarche(marche.id) == 2' >
                   EN COURS
                </span>
                <span v-else-if='afficherEtatDuMarche(marche.id) == 5' >
                   ACHEVE
                </span>
                </td>
              <td style="font-size: 14px; font-weight: bold; text-align: center">
               {{ formatageSomme(parseFloat( marche.montant_marche)) || "Non renseigné"}}
              </td>
              <td style="font-size: 14px; font-weight: bold; text-align: center" >
               {{formatageSomme(parseFloat(MontantBaseMarche(marche.id))+ parseFloat(MontantAvenant(marche.id)))|| 'Non renseigné'}}
              </td>

              <td style="font-size: 14px; font-weight: bold; text-align:center">
                {{  formatageSomme( parseFloat(marche.montant_marche) - parseFloat(MontantBaseMarche(marche.id))+ parseFloat(MontantAvenant(marche.id))) || 'Non renseigné'}}
                </td>
            </tr>
            <tr>
              <td  colspan="2" style="font-size: 14px; font-weight: bold !important; text-align: center">
                MONTANT TOTAL :
              </td>
              <td
                colspan="2"
                style="font-size: 14px; font-weight: bold !important; text-align: center"
              >{{  formatageSomme( parseFloat(montant_total_marche) )}}</td>
            </tr>
          </tbody>

        </table>
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
    import { formatageSommeSansFCFA } from "@/Repositories/Repository";

    import { ModelListSelect } from "vue-search-select";
    import "vue-search-select/dist/VueSearchSelect.css";
    import { formatageSomme } from "@/Repositories/Repository";
    export default {
        components: {
ModelListSelect
        },
        data() {
            return {
                entreprises_id:0,
                exercice_budgetaire_id:0,
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
  let status = this.mandats.filter(tem =>this.afficherObjetMarche(tem.marche_id))
  if(status == 7){
    return 1
  }
  return 0
},
listeDesMarcheTerminer(){
  return this.mandats.filter(itme=>this.afficherEtatDuMarche(itme.marche_id) ==5)
},
listeDesMarcheEnCoursExecution(){
  return this.mandats.filter(itme=>this.afficherEtatDuMarche(itme.marche_id) ==2)
},
ListeDesMarches(){
    if(this.exercice_budgetaire_id !=0){
      return this.marches.filter(tem => 
      tem.exo_id == this.exercice_budgetaire_id)
    }
    return this.marches
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
    LibelleSection() {
      return id => {
        if (id != null && id != "") {
           let qtereel = this.sections.find(qtreel => qtreel.id == id);
      if (qtereel) {
         return  qtereel.nom_section;
       
      }
      return 0;
        }
      };
    },
   montant_total_marche(){
            
      return this.marches.filter(tem =>tem.montant_marche != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0).toFixed(0);
           
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
        console.log('Silva est la')
        console.log(this.listeDesMarcheSuppendu)
},
        methods: {
            ...mapActions("personnelUA", [
                "getpaiementPersonnel",
                "ajouterpaiementPersonnel",
                "modifierpaiementPersonnel",
                "supprimerpaiementPersonnel"
            ]),
            formatageSomme:formatageSomme,
            formatageSommeSansFCFA:formatageSommeSansFCFA,
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

</style>