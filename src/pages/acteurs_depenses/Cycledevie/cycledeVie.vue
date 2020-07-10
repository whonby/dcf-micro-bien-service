
<template>
  <div >
    

    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
         
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

           
           
           
           
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th style="width:10%">EXERCICE</th> 
                    <td> </td>
                  </tr>
                  <tr>
                    <th style="width:10%">AUTORITE CONTRACTANTE</th>
                    <td> </td>
                  </tr>
                  <tr>
                    <th style="width:10%">CODE ACTIVITE</th>
                      <td> </td>
                   </tr>
                  <tr>
                    <th style="width:10%">LIGNE BUDGETAIRE</th>
                      <td>  </td>
                   </tr>
                  <tr>
                    <th style="width:10%">OBJET</th>
                      <td> </td>
                  </tr>
                  <tr>
                    <th style="width:10%">TYPE DE MARCHE</th>
                    <td> </td>
                  </tr>
                </thead>
                
              </table>
            
               
   <table class="table table-bordered table-striped">
     <thead>
       <tr>
         <th style="width:10%">SOURCE (S) DE FINANCEMENTS</th>
         <td style="width:15%" colspan="3"> </td> 
         <td style="width:15%" colspan="3"> </td>

       </tr>
       <tr>
          <th style="width:10%">NOM DU BAILLEUR</th>
          <td style="width:15%"> ETAT </td>
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
        <td style="width:15%"> </td>
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
        <th>ETAT DE LA CONTRACTUALISATION:EN COURS - SUSPENDU -ACHEVE -INFRUCTUEUX </th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
 
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th style="width:5%">TYPE ET REFERENCES DE LA  PROCEDURE</th>
           <td style="width:15%" colspan="6" > </td> 
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
          <hr> 
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
          <hr> 
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
          <hr> 
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

   
  

   
   
    
    // filtre_unite_admin() {
      // const st = this.search.toLowerCase();
      // return this.jointureUaChapitreSection.filter(items => {
        // return (
          // items.secti.nom_section.toLowerCase().includes(st) ||
          // items.libelle.toLowerCase().includes(st)
        // );
      // });
    // },
  //  
    // sectionDynamiques() {
      // return id => {
        // if (id != null && id != "") {
          // return this.sections.filter(element => element.naturesection_id == id);
        // }
      // };
    // },


// codeSectionNature(){
//       //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
//       const natsect = this.natures_sections.find(natsect => natsect.id == this.formData.natsection_id)
//      const secti = this.sections.find(sect => sect.id == this.formData.section_id)
    
//      if(natsect && secti){
//        return natsect.code + secti.code 
//      }

//      return null
//    },


// codeuniteadministrative2(){
//       //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
    
//     const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.formData.servicegest_id)
//  const localisageo = this.localisations_geographiques.find(chap => chap.id == this.formData.localisationgeo_id)
//      if(servgest && localisageo){
//        return servgest.code + localisageo.code
//      }

//      return null
//    },

//  codeuniteadministrativeModifier2(){
//       // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
    
//     const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.editUniteAdministrative.servicegest_id)
//  const localisageo = this.localisations_geographiques.find(chap => chap.id == this.editUniteAdministrative.localisationgeo_id)
//      if(servgest && localisageo){
//        return servgest.code + localisageo.code
//      }

//      return null
//    },

//     codeuniteadministrative(){
//       //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
//       const natsect = this.natures_sections.find(natsect => natsect.id == this.formData.nature_section_id)
//      const secti = this.sections.find(sect => sect.id == this.formData.section_id)
//     const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.formData.servicegest_id)
//  const localisageo = this.localisations_geographiques.find(chap => chap.id == this.formData.localisationgeo_id)
//      if(natsect && secti && servgest && localisageo){
//        return natsect.code + secti.code + "-"+ servgest.code + "-"+ localisageo.code
//      }

//      return null
//    },
//    codeuniteadministrativeModifier(){
//       // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
//      const natsect = this.natures_sections.find(natsect => natsect.id == this.editUniteAdministrative.nature_section_id)
//      const secti = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
//     const servgest = this.services_gestionnaires.find(serviceg => serviceg.id == this.editUniteAdministrative.servicegest_id)
//  const localisageo = this.localisations_geographiques.find(chap => chap.id == this.editUniteAdministrative.localisationgeo_id)
//      if(natsect && secti && servgest && localisageo){
//        return natsect.code  + secti.code + "-" + servgest.code + "-" + localisageo.code
//      }

//      return null
//    },
//   },
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
       
       
      }
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

</style>
