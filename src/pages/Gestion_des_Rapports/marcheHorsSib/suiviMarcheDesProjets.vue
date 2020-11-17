detail_marche
<template>
  
     
         <div >
           <table class="table table-bordered table-striped">
                <td colspan="4">
                        <div align="center"> <h4> FICHE DE SUIVI DES MARCHES/CONTRATS - UNITE ADMINISTRATIVE</h4> </div>
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
      
             
              <template v-if="formData.ua_id=='' || formData.typeua_id=='' || formData.exo==''">
 <h5 style="text-align:center;color:red;font-size:20px" >VEUILLEZ SELECTIONNER L'UNITE ADMINISTRATIVE SVP</h5>
              </template>
                        <template v-if="formData.ua_id !='' && formData.typeua_id !='' && formData.exo !=''">
 <h5 style="text-align:center;color:#000000;font-size:20px" >MARCHES/CONTRATS ATTRIBUE ISSUS DE LA PROCEDURE NORMALE</h5>
              </template>
              <div v-for="item in PROCEDURENORMALE(formData.ua_id)" :key="item.id" class="widget-content">
 
    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>

      <div class="span12" style="text-align:center;color:#000000;font-size:20px"><h5>Marche : {{ afficherObjetMarche(item.marche_id) }}
      </h5></div>
      
    </div>

    <table class="table table-bordered table-striped" >
      <thead>
       <tr>
                    
                    <th>N° DU MARCHE{{afficherDateDuJour}}</th>
                    <th>MODE PASSATION</th>
                    <th>DATE D'APPROBATION</th>
                  <th>DATE ORDRE DE SERVICE</th>
                    <th>DATE PREVISIONNELLE DE FIN</th>
                    <th>DUREE D'EXECUTION</th>
                    
                    <th>ENTREPRISE ATTRIBUTAIRE</th>
                    <th>BAILLEUR</th>
                    <th>MONTANT DE BASE</th>
                    <th>TAUX AVENANTS</th>
                    <th>MONTANT TOTAL AVENANT</th>
                    <th>MONTANT GLOBAL DU MARCHE</th>
                    <th>AVANCE DE DEMARRAGE PERCUE</th>
                    <th>NIVEAU DE DECOMPTE</th>
                    <th>PAYEMENT EXECUTE</th>
                    <th>MONTANT RESTANT A PAYER</th>
                    <th>ETAT DU MARCHE</th>
                    <th>TAUX D'EXECUTION FINANCIERE</th>
                    <th>TAUX D'EXECUTION PHYSIQUE</th>
                   
                   <!-- <th>VOIR</th> -->
                  </tr>
      </thead>
      <tbody>
     <tr class="odd gradeX" v-for="type in PROCEDURENORMALEMarche(item.marche_id)" :key="type.id">
                   
                    <td>{{type.numero_marche || 'Non renseigné'}}</td>
                     <td style="text-align: center">{{afficheLibellePassationMarche(afficheidPassationMarche(type.marche_id)) || 'Non renseigné'}}</td>
                      <td >{{formaterDate(type.date_approbation) || 'Non renseigné'}}</td>
                       <td>{{formaterDate(type.date_odre_service) || 'Non renseigné'}}</td>
                    <td>{{formaterDate(type.date_fin_exe) || 'Non renseigné'}}</td>
                    <td>{{type.duree || 'Non renseigné'}} Jours</td>
                   
                    <td>{{entreprise(type.entreprise_id) || 'Non renseigné'}}</td>
                    <td>{{LIBELLEBAILLEUR(idBAILLEUR(type.marche_id)) || 'Non renseigné'}}</td>
                    <td>{{formatageSomme(parseFloat(type.montant_act)) || 'Non renseigné'}}</td>
                    <td>{{afficheTauxAvenant(type.marche_id) || 0}}  %</td>

                    <td >{{formatageSomme(parseFloat(afficheMontantAvenant(type.marche_id))) || 'Non renseigné'}}</td>
                   
                     <td>{{formatageSomme(parseFloat(type.montant_act) + parseFloat(afficheMontantAvenant(type.marche_id))) || 'Non renseigné'}}</td>
                      <td>{{formatageSomme(parseFloat(type.avance_demarrage_ttc)) || 'Non renseigné'}}</td>
                    <td>{{nombreDecompte(type.marche_id) }}</td>
                    <td>{{formatageSomme(parseFloat(PayementExecuter(type.marche_id))) || 'Non renseigné'}}</td>
                    <td>{{formatageSomme((parseFloat(type.montant_act) + parseFloat(afficheMontantAvenant(type.marche_id)))-(parseFloat(PayementExecuter(type.marche_id)))) || 'Non renseigné'}}</td>
                      <td>
                     <button 
                      v-if="EtatMarche(type.marche_id)== 2"  class="btn  btn-warning">
                <span title="MARCHE EN EXERCUTER" style="">EX</span>
       
                </button>
                <!-- <button 
                      v-else-if="type.marche_id == 1"  class="btn  btn-success">
                <span title=" MARCHE EN COURS DE CONTRATUALISATION">CT</span>
       
                </button> -->
                 <button 
                      v-else-if="EtatMarche(type.marche_id )== 3"  class="btn  btn-info">
                <span title="MARCHE RESILIE" >RE</span>
       
                </button>
                 <button v-else-if="EtatMarche(type.marche_id)== 5" class="btn  btn-inverse">
              
                <span title="MARCHE EN TERMINE">TE</span>
                </button>
                   <button v-else class="btn  btn-danger">
              
                <span title="MARCHE SUSPENDU">SU</span>
                </button>
 <!-- <button v-else class="btn  btn-danger">
              
                <span title="MARCHE EN PLANIFICATION">PL</span>
                </button> -->
                   </td>
                     <td>{{((parseFloat(PayementExecuter(type.marche_id))/(parseFloat(type.montant_act) + parseFloat(afficheMontantAvenant(type.marche_id))))*100).toFixed(0) || 0}}  %</td>
                  <td>{{0 || 0}}%</td>
                  
                  <!-- <td>{{0 || 'Non renseigné'}}%</td> -->
                  <!-- <td>
                    <router-link :to="{ name: '', params: { id: type.id }}"
                 class="btn btn-success ">
        <span class=""><i class="  icon-eye-open"></i></span>
    </router-link>
                  </td> -->
                     
                  </tr>
      </tbody>
    </table>
    
  </div>
    <template v-if="formData.ua_id !='' && formData.typeua_id !='' && formData.exo !=''">
 <h5 style="text-align:center;color:#000000;font-size:20px" >MARCHES/CONTRATS ATTRIBUE ISSUS DE LA PROCEDURE SIMPLIFIEE</h5>
              </template>
                <div v-for="item in PROCEDURESIMPLIFIEE(formData.ua_id)" :key="item.id" class="widget-content">
 
    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>

      <div class="span12" style="text-align:center;color:#000000;font-size:20px"><h5>Marche : {{ afficherObjetMarche(item.marche_id) }}
      </h5></div>
      
    </div>

    <table class="table table-bordered table-striped" >
      <thead>
       <tr>
                    
                    <th>N° DU MARCHE</th>
                    <th>MODE PASSATION</th>
                    <th>DATE D'APPROBATION</th>
                     <th>DATE ORDRE DE SERVICE</th>
                    <th>DATE PREVISIONNELLE DE FIN</th>
                    <th>DUREE D'EXECUTION</th>
                    
                    <th>ENTREPRISE ATTRIBUTAIRE</th>
                    <th>BAILLEUR</th>
                    <th>MONTANT DE BASE</th>
                    <th>TAUX AVENANTS</th>
                    <th>MONTANT TOTAL AVENANT</th>
                    <th>MONTANT GLOBAL DU MARCHE</th>
                    <th>AVANCE DE DEMARRAGE PERCUE</th>
                    <th>NIVEAU DE DECOMPTE</th>
                    <th>PAYEMENT EXECUTE</th>
                    <th>ETAT DU MARCHE</th>
                    <th>TAUX D'EXECUTION FINANCIERE</th>
                    <th>TAUX D'EXECUTION PHYSIQUE</th>
                   
                   <!-- <th>VOIR</th> -->
                  </tr>
      </thead>
      <tbody>
     <tr class="odd gradeX" v-for="type in PROCEDURESIMPLIFIEEMarche(item.marche_id)" :key="type.id">
                   
                    <td>{{type.numero_marche || 'Non renseigné'}}</td>
                     <td style="text-align: center">{{afficheLibellePassationMarche(afficheidPassationMarche(type.marche_id)) || 'Non renseigné'}}</td>
                      <td >{{formaterDate(type.date_approbation) || 'Non renseigné'}}</td>
                    <td>{{formaterDate(type.date_odre_service) || 'Non renseigné'}}</td>
                    <td>{{formaterDate(type.date_fin_exe) || 'Non renseigné'}}</td>
                    <td>{{type.duree || 'Non renseigné'}} Jours</td>
                   
                    <td>{{entreprise(type.entreprise_id) || 'Non renseigné'}}</td>
                    <td>{{LIBELLEBAILLEUR(idBAILLEUR(type.marche_id)) || 'Non renseigné'}}</td>
                    <td>{{formatageSomme(parseFloat(type.montant_act)) || 'Non renseigné'}}</td>
                    <td>{{afficheTauxAvenant(type.marche_id) || 0}}  %</td>

                    <td >{{formatageSomme(parseFloat(afficheMontantAvenant(type.marche_id))) || 'Non renseigné'}}</td>
                   
                     <td>{{formatageSomme(parseFloat(type.montant_act) + parseFloat(afficheMontantAvenant(type.marche_id))) || 'Non renseigné'}}</td>
                      <td>{{formatageSomme(parseFloat(type.avance_demarrage_ttc)) || 'Non renseigné'}}</td>
                    <td>{{nombreDecompte(type.marche_id) }}</td>
                    <td>{{formatageSomme(parseFloat(PayementExecuter(type.marche_id))) || 'Non renseigné'}}</td>
                      <td>
                     <button 
                      v-if="EtatMarche(type.marche_id)== 2"  class="btn  btn-warning">
                <span title="MARCHE EN EXERCUTER" style="">EX</span>
       
                </button>
                <!-- <button 
                      v-else-if="type.marche_id == 1"  class="btn  btn-success">
                <span title=" MARCHE EN COURS DE CONTRATUALISATION">CT</span>
       
                </button> -->
                 <button 
                      v-else-if="EtatMarche(type.marche_id )== 3"  class="btn  btn-info">
                <span title="MARCHE RESILIE" >RE</span>
       
                </button>
                 <button v-else-if="EtatMarche(type.marche_id)== 5" class="btn  btn-inverse">
              
                <span title="MARCHE EN TERMINE">TE</span>
                </button>
                   <button v-else class="btn  btn-danger">
              
                <span title="MARCHE SUSPENDU">SU</span>
                </button>
 <!-- <button v-else class="btn  btn-danger">
              
                <span title="MARCHE EN PLANIFICATION">PL</span>
                </button> -->
                   </td>
                     <td>{{((parseFloat(PayementExecuter(type.marche_id))/(parseFloat(type.montant_act) + parseFloat(afficheMontantAvenant(type.marche_id))))*100).toFixed(0) || 0}}  %</td>
                  <td>{{0 || 0}}%</td>
                  
                  <!-- <td>{{0 || 'Non renseigné'}}%</td> -->
                  <!-- <td>
                    <router-link :to="{ name: '', params: { id: type.id }}"
                 class="btn btn-success ">
        <span class=""><i class="  icon-eye-open"></i></span>
    </router-link>
                  </td> -->
                     
                  </tr>
      </tbody>
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
                formData:{
                  ua_id :""
                },
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
                "budgetEclate",
"decomptefactures"

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

EtatMarche(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.marches.find(item => item.id==id )
          if(odj){
            return odj.attribue
          }
          return null
        }
      }
    },
  nombreDejourCalculeModifier(){
      let vM=this;
      const acteAffet = vM.editActeEffetFinancier
      if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
      if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null

      var dateF = new Date(acteAffet.date_fin_exe).getTime()
      var dateO = new Date(acteAffet.date_odre_service).getTime()
      var resultat = dateF - dateO

      var diffJour =  resultat / (1000 * 3600 * 24)

      if(isNaN(diffJour)) return null

      if(parseFloat(diffJour) < 0 ) return "durée invalide"
      vM.editActeEffetFinancier.duree=diffJour
      return  diffJour;

    },
  nombreJourTraitementCalucle(){
   let date = new Date();
        let aaaa = date.getFullYear();
       
        let cur_day = aaaa ;

        return cur_day


    
    
   },
nombreDecompte(){
      return id =>{
        if(id!=null && id!=""){
          return this.decomptefactures.filter(item => item.marche_id==id ).length
         
        }
      }
    },
    PayementExecuter(){
      return id =>{
        if(id!=null && id!=""){
          return this.mandats.filter(item => item.marche_id==id ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
         
        }
      }
    },
afficheMontantAvenant(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.avenants.find(item => item.marche_id==id )
          if(odj){
            return odj.montant_avenant
          }
          return 0
        }
      }
    },
    afficheTauxAvenant(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.avenants.find(item => item.marche_id==id )
          if(odj){
            return odj.taux
          }
          return 0
        }
      }
    },
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
    PROCEDURENORMALEMarche(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.marche_id==id && item.ua_id==this.formData.ua_id && this.afficheCodePassationMarche(this.afficheidPassationMarche(item.marche_id))==9 && this.afficheExoBudgetaire(item.marche_id) == this.formData.exo || item.marche_id==id && item.ua_id==this.formData.ua_id && this.afficheCodePassationMarche(this.afficheidPassationMarche(item.marche_id))==7 && this.afficheExoBudgetaire(item.marche_id) == this.formData.exo)
                  
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
    
    PROCEDURESIMPLIFIEEMarche(){
      return id =>{
        if(id!=null && id!=""){
          return  this.acteEffetFinanciers.filter(item => item.marche_id==id && item.ua_id==this.formData.ua_id && this.afficheCodePassationMarche(this.afficheidPassationMarche(item.marche_id))==8 && this.afficheExoBudgetaire(item.marche_id) == this.formData.exo || item.marche_id==id && item.ua_id==this.formData.ua_id && this.afficheCodePassationMarche(this.afficheidPassationMarche(item.marche_id))==6 && this.afficheExoBudgetaire(item.marche_id) == this.formData.exo)
                  
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
    dateexecutionfinprevue(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.acteEffetFinanciers.find(item => item.marche_id==id )
          if(odj){
            return odj.date_execution_fin_prevue
          }
          return null
        }
      }
    },
    entreprise(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.entreprises.find(item => item.id==id )
          if(odj){
            return odj.raison_sociale
          }
          return null
        }
      }
    },
    LIBELLEBAILLEUR(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.sources_financements.find(item => item.id==id )
          if(odj){
            return odj.libelle
          }
          return null
        }
      }
    },
    idBAILLEUR(){
      return id =>{
        if(id!=null && id!=""){
          let odj = this.mandats.find(item => item.marche_id==id )
          if(odj){
            return odj.bailler_id
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
afficherDateDuJour(){
let date = new Date();
        let aaaa = date.getFullYear();
        let gg = date.getDate();
        let mm = (date.getMonth() + 1);
        let moi;
        let jour;
        if (gg < 10)
        {
            jour = "0" + gg;
        }else{
            jour = gg
        }


        if (mm < 10)
        {
            moi = "0" + mm;
        }else{
            moi=mm;
        }


        let cur_day =  aaaa + "-" + moi + "-" + jour;

        return cur_day


    
   
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