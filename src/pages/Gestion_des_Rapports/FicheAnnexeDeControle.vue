
<template >
<div>
  <div align="right">

      <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>


                            </div>
                             <div id="printMe">
<table class="table   html2pdf__page-break noborder" id="app1"  >
   <tr class="noborder">
                                              <td colspan="" style="text-align:center" class="noborder">
 <p>MINISTERE  DU BUDGET ET DU PORTEFEUILLE </p>
      <p> DE L'ETAT</p>
                                 </td>
                                 <!-- <td style="text-align:center">
                                    <img  :src="AffichePhoto">
                                   <p>DIRECTION DU CONTRÔLE FINANCIER</p>
                                 </td> -->
                                  <td style="text-align:center" class="noborder">
                                   <img  :src="AfficheAmoirie">
 
                                 </td>
                                 <td style="text-align:center" class="noborder">
                                   <p>REPUBLIQUE DE CÔTE D'IVOIRE </p>
      <P>Union-Discipline-Travail</P>
                                 </td>
                               </tr>
   <tr  class="noborder">
                                 <td style="text-align:center"  class="noborder">
                                   <img  :src="AfficheLogODCF">
                                   <p>DIRECTION DU CONTRÔLE FINANCIER</p>
                                 </td>
                                 <td style="text-align:center" class="noborder">
                                   
                                 </td>
                                 <td style="text-align:center" class="noborder">
                                  
                                 </td>
                               </tr>
                              
</table>
<br/>
      
    <div style="border: 2px double #000;text-align:center;font-size:25px;width:100%;height:80px;">
     <br>
      <h5>FICHE ANNEXE DE CONTRÔLE DE LA REALITE DU SERVICE FAIT</h5>
      
      <!-- <P>INSTITUEE PAR L'ARRETE N° 638 MEF/CAB/YKM DU 20 JUILLET 2009</P> -->
    </div>

      <br/>
      <br/>
      

      <tr>
        <th style="width:25%;font-size:20px ">EXERCICE BUDGETAIRE :</th> <td style="font-size:25px"> {{detailOp.exercice_budget}} </td>
                     
                    
      </tr>
      <br/>
     
     
          <tr>
                     <th style="width:25%;font-size:20px ">PROJET OU ORGANISME :</th><td style="font-size:25px">{{infoLibelleUa(detailOp.ua_id)}}  </td>
                     
                    
                 </tr>
                 <br/>
                 
                 
                  <tr>
                    <!-- <th rowspan="5" style="margin:0 auto">IMPUTATION BUDGETAIRE</th> -->
                     <th style="width:25%;font-size:20px ">OBJET DE LA DEPENSE :</th>  <td style="font-size:25px"> {{infoObjetFacture(detailOp.facture_id)}} </td>
                     
                 </tr>
                  <br/>
      
       
      <tr>
                    <!-- <th rowspan="5" style="margin:0 auto">IMPUTATION BUDGETAIRE</th> -->
                     <th style="width:25%;font-size:20px ">DATE DU CONTRÔLE :</th>
                     <td style="text-align:center;font-size:20px"> </td>
                 </tr>
                  <br/>
      
                  <tr>
                    <!-- <th rowspan="5" style="margin:0 auto">IMPUTATION BUDGETAIRE</th> -->
                     <th style="width:25%;font-size:20px ">LIVRABLE</th> <td style="text-align:center;font-size:20px">{{recupererLivrable(detailOp.marche_id)}} </td>
                     
                 </tr>
                 <br/>
                 <tr>
                    <!-- <th rowspan="5" style="margin:0 auto">IMPUTATION BUDGETAIRE</th> -->
                     <th style="width:25%;font-size:20px ">TAUX DE REALISATION :</th> <td style="text-align:center;font-size:20px"> </td>
                     
                 </tr>
       <br/>
      <br/>
      
      
      <h5 style="text-align:center;font-size:25px;text-decoration: underline;">OBSERVATION</h5>
<div style="width:100%;height:600px;border:2px solid #000">

</div>
<br/>
      <br/>
 <h5 style="text-align:center;font-size:25px;text-decoration: underline;">CACHET ET SIGNATURE DE L'AGENT DCF</h5>

   <tr>
       <td >

       </td>
   </tr>
                 <br/>
      <br/>
      
                    
     
                             </div>
</div>
   
  
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSomme } from "@/Repositories/Repository";
import moment from "moment";

export default {
  name:'typetext',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        code: "",
        libelle: ""
      },
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      search: ""
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
AfficheLogODCF() {
      
   
        return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/log3.png";
   
     
       
    },
    AfficheAmoirie() {
      
   
        return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/amoirie.png";
   
     
       
    },

 recupererLivrable() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
      
        return qtereel.livrable
              }
      return "Non renseigné"
        }
      };
    },




  afficherNomEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
      
        return qtereel.raison_sociale
              }
      return "Non renseigné"
        }
      };
    },
    afficherAdresseEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return qtereel.email.concat(' / ', qtereel.telephone).concat(' / ', qtereel.adresse)
      }
      return ""
        }
      };
    },
    infoFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return qtereel.numero_facture.concat(' DU ', this.formaterDate(qtereel.date_facture))
      }
      return ""
        }
      };
    },
    infoObjetFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return qtereel.objet_facture
      }
      return ""
        }
      };
    },
    infoLibelleUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return qtereel.libelle
      }
      return ""
        }
      };
    },
  },
      created() {
            this.marcheid=this.$route.params.id
   this.detailOp = this.mandats.find(
       idmarche => idmarche.id == this.$route.params.id
         )
  
},
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllTypeTextes",
      "getAllNombreTypeText",
      "ajouterTypeTexte",
      "modifierTypeTexte",
      "supprimerTypeTexte"
    ]),
     formatageSomme:formatageSomme,
            formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
  genererEnPdf(){
  this.$htmlToPaper('printMe');
},
getColumns() {
    return [
        {title: "EXERCICE BUDGETAIRE", dataKey: "exercice_budget"},
        
        
        
    ];
},
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style  scoped>
h5{
  line-height:1.6;
}
h5{
  line-height:1.6;
}
th{
  text-align: left;
  font-size: 14px;
  line-height:1.6;
}
td {
border: none !important;
}

</style>
