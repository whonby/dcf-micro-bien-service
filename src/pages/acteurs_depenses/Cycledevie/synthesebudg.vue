
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
              <h5>Synthèse Budgétaire</h5>
            </div>

           
           
           
           
              <table class="table table-bordered table-striped">
                <thead>
                   <tr>
    <th style="width:10%">LIGNE BUDGETAIRE</th>
    <td style="width:12%"> TYPE DE FINANCEMENT </td>
     <td style="width:12%">SOURCE DE FINANCEMENT</td>
     <td style="width:12%">TOTAL(FINANCEMENT)</td>
    <td style="width:12%">RESTE A CONSOMMER</td>
     <td style="width:12%">DISPONIBLE</td>
      <td style="width:12%">MODIFICATION BUDGETAIRE</td>
      <th style="width:12%">TOTAL</th>
 </tr>
                    <tr>
    <th height="20px"></th>
    <td height="20px">CONTREPARTIE  </td>
     <td height="20px">ETAT</td>
     <td height="20px"></td>
    <td height="20px"></td>
     <td height="20px"></td>
      <td height="20px"></td>
      <th height="20px"></th>
 </tr>
                    <tr>
    <th height="20px">PERSONNEL</th>
    <td height="20px">DON  </td>
     <td height="20px"></td>
     <td height="20px"></td>
    <td height="20px"></td>
     <td height="20px"></td>
      <td height="20px"></td>
      <th height="20px"></th>
 </tr>
                    <tr>
    <th height="20px"></th>
    <td height="20px">EMPRUNT  </td>
     <td height="20px"></td>
     <td height="20px"></td>
    <td height="20px"></td>
     <td height="20px"></td>
     <td height="20px"></td>
      <th height="20px"></th>
 </tr>
                    <tr>
    <th height="20px" colspan="2">SOUS-TOTAL PERSONNEL</th>
    
     <td height="20px"></td>
     <td height="20px"></td>
    <td height="20px"></td>
     <td height="20px"></td>
      <td height="20px"></td>
      <th height="20px"></th>
 </tr>                                                       
                </thead>    
              </table>
                           <table class="table table-bordered table-striped">
               <thead>
                  <tr>
   <th style="width:10%">ACHATS DE BIENS ET SERVICES</th>
   <td style="width:12%"> CONTREPARTIE </td>
    <td style="width:12%">ETAT</td>
    <td style="width:12%"></td>
   <td style="width:12%"></td>
    <td style="width:12%"></td>
     <td style="width:12%"></td>
     <th style="width:12%"></th>
</tr>
                   <tr>
   <th height="20px"></th>
   <td height="20px">DON  </td>
    <td height="20px"></td>
    <td height="20px"></td>
   <td height="20px"></td>
    <td height="20px"></td>
     <td height="20px"></td>
     <th height="20px"></th>
</tr>
                   <tr>
   <th height="20px"></th>
   <td height="20px">EMPRUNT  </td>
    <td height="20px"></td>
    <td height="20px"></td>
   <td height="20px"></td>
    <td height="20px"></td>
    <td height="20px"></td>
     <th height="20px"></th>
</tr>
                   <tr>
   <th height="20px" colspan="2">SOUS-TOTAL  ACHATS DE BIENS ET SERVICES</th>
   
    <td height="20px"></td>
    <td height="20px"></td>
   <td height="20px"></td>
    <td height="20px"></td>
     <td height="20px"></td>
     <th height="20px"></th>
</tr>                                                       
               </thead>    
             </table>
                               <table class="table table-bordered table-striped">
               <thead>
                  <tr>
   <th style="width:10%">TRANSFERT POUR DEPENSES EN CAPITAL</th>
   <td style="width:12%"> CONTREPARTIE </td>
    <td style="width:12%">ETAT</td>
    <td style="width:12%"></td>
   <td style="width:12%"></td>
    <td style="width:12%"></td>
     <td style="width:12%"></td>
     <th style="width:12%"></th>
</tr>
                   <tr>
   <th height="20px"></th>
   <td height="20px">DON  </td>
    <td height="20px"></td>
    <td height="20px"></td>
   <td height="20px"></td>
    <td height="20px"></td>
     <td height="20px"></td>
     <th height="20px"></th>
</tr>
                   <tr>
   <th height="20px"></th>
   <td height="20px">EMPRUNT  </td>
    <td height="20px"></td>
    <td height="20px"></td>
   <td height="20px"></td>
    <td height="20px"></td>
    <td height="20px"></td>
     <th height="20px"></th>
</tr>
                   <tr>
   <th height="20px" colspan="2">SOUS-TOTAL TRANSFERT POUR DEPENSES EN CAPITAL </th>
   
    <td height="20px"></td>
    <td height="20px"></td>
   <td height="20px"></td>
    <td height="20px"></td>
     <td height="20px"></td>
     <th height="20px"></th>
</tr>                                                       
               </thead>    
             </table>
                                            <table class="table table-bordered table-striped">
               <thead>
                  <tr>
   <th style="width:10%">TOTAL</th>
   <td style="width:12%"> CONTREPARTIE </td>
    <td style="width:12%">ETAT</td>
    <td style="width:12%"></td>
   <td style="width:12%"></td>
    <td style="width:12%"></td>
     <td style="width:12%"></td>
     <th style="width:12%"></th>
</tr>
                   <tr>
   <th height="20px"></th>
   <td height="20px">DON  </td>
    <td height="20px"></td>
    <td height="20px"></td>
   <td height="20px"></td>
    <td height="20px"></td>
     <td height="20px"></td>
     <th height="20px"></th>
</tr>
                   <tr>
   <th height="20px"></th>
   <td height="20px">EMPRUNT  </td>
    <td height="20px"></td>
    <td height="20px"></td>
   <td height="20px"></td>
    <td height="20px"></td>
    <td height="20px"></td>
     <th height="20px"></th>
</tr>
                   <tr>
   <th height="20px" colspan="2">TOTAL GENERAL </th>
   
    <td height="20px"></td>
    <td height="20px"></td>
   <td height="20px"></td>
    <td height="20px"></td>
     <td height="20px"></td>
     <th height="20px"></th>
</tr>                                                       
               </thead>    
             </table>
            
               






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