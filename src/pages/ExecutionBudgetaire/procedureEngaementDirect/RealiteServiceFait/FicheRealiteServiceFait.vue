
<template >
<div>
  <div align="right">

      <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>


                            </div>
                             <div id="printMe">
<table class="table table-bordered table-striped html2pdf__page-break" id="app1"  >
   <tr >
                                 <td colspan="" style="text-align:center">
 
      <p>MINISTERE  DU BUDGET</p>
      
                                 </td>
                                  <td style="text-align:center">
                                   <img  :src="AfficheAmoirie">
 
                                 </td>
                                 <td style="text-align:center">
                                   <p>REPUBLIQUE DE CÔTE D'IVOIRE </p>
      <P>Union-Discipline-Travail</P>
                                 </td>
                               </tr>
   <tr >
      <td style="text-align:center">
                                   <!-- <img  :src="AfficheLogODCF"> -->
                                   <p>DIRECTION DU CONTRÔLE FINANCIER</p>
                                 </td>
                                 <!-- <td style="text-align:center">
                                   <img  :src="AfficheAmoirie">
 
                                 </td> -->
                                 <td style="text-align:center">
                                   
                                 </td>
                                 <td style="text-align:center">
                                   <!-- <img  :src="AfficheLogODCF">
                                   <p>DIRECTION DU CONTRÔLE FINANCIER</p> -->
                                 </td>
                               </tr>
                              
</table>
<br/>
      <br/>
    <div style="border: 2px double #000;text-align:center">
      <p>FICHE DE CONTRÔLE DE LA REALITE DU SERVICE FAIT </p>
      <P>INSTITUEE PAR L'ARRETE N° 638 MEF/CAB/YKM DU 20 JUILLET 2009</P>
    </div>

 <br/>
      <br/>
      <br/>
      

     
      <tr>
        <th style="width:25%;font-weight: bold; ">EXERCICE BUDGETAIRE :</th>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <td style="font-size:14px"> {{detailOp.exercice}} </td>
                     
                    
      </tr>
      <br/>
      <br/>
    <br/>
      
          <tr>
                     <th style="width:25% ;font-weight: bold;">PROJET OU ORGANISME :</th>
                     <td style="font-size:14px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{infoLibelleUa(detailOp.ua_id)}} </td>
                    
                 </tr>
                <br/>
      <br/>
    <br/>
      
                  <tr>
                    <!-- <th rowspan="5" style="margin:0 auto">IMPUTATION BUDGETAIRE</th> -->
                     <th style="width:25% ;font-weight: bold;">OBJET DE LA DEPENSE :</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td style="text-align:center;font-size:25px"> {{detailOp.objet_depense}} </td> 
                   
                 </tr>
                 <br/>
      <br/>
    <br/>
      
   <tr>
                   
                     <th style="width:25% ;font-weight: bold;">FOURNISSEUR : </th>&nbsp;&nbsp;&nbsp;&nbsp;
                     <td style="font-size:14px"> {{detailOp.nom_autre}} </td>
                 </tr>
                 <br/>
      <br/>
    <br/>
   
                 <tr>
                   
                     <th style="width:25% ;font-weight: bold;">ADRESSE DU FOURNISSEUR :</th>
                     <td style="font-size:14px"> {{detailOp.adresse}} </td>
                 </tr>
                  <br/>
      <br/>
    <br/>
      
                 <tr>
                   
                     <th style="width:25% ;font-weight: bold;">N° ET DATE DE LA FACTURE :</th>
                     <td style="font-size:14px"> {{detailOp.dmd_engagement_id}} </td>
                 </tr>
                 <br/>
      <br/>
    <br/>
      
                 <tr>
                   
                     <th style="width:25% ;font-weight: bold;">IMPUTATION BUDGETAIRE :</th>
                     <td style="font-size:14px"> {{imputationBudgetaire(ligne(detailOp.ligne_economique_id))}} </td>
                 </tr>
                 <br/>
      <br/>
    <br/>
     
                 <tr>
                   
                     <th style="width:25% ;font-weight: bold;">ORDRE DE PAIEMENT N° :</th>
                     <td style="font-size:14px"> {{detailOp.dmd_engagement_id}} </td>
                 </tr>
                 <br/>
      <br/>
    <br/>
      
                 <tr>
                   
                     <th style="width:25% ;font-weight: bold;">MONTANT :</th>
                     <td style="font-size:14px"> {{formatageSomme(parseFloat(detailOp.total_general))}} </td>
                 </tr>
                 <br/>
      <br/>
    <br/>
    
                 <tr>
                   
                     <th style="width:25% ;font-weight: bold;">SERVICE BENEFICIAIRE :</th>
                     <td style="font-size:14px"> {{infoLibelleUa(infoLibelleUa(detailOp.ua_id))}} </td>
                 </tr>
                <br/>
      <br/>
    <br/>
     
      
                     <p style="text-align:center;text-decoration: underline;font-size:14px;">OBSERVATION </p>
                  
    <table class="table table-bordered table-striped html2pdf__page-break" id="app1"  >
      <tr style="border: 2px double #000;" >
                    <td >
                      
                      
<h4 style="text-align:center;text-decoration: underline;">SERVICE BENEFICIAIRE :</h4>
<br/>
Date :  <br/>
<br/>
Nom et Prénoms:  <br/>
<br/>
Signature et Cachet
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


                   </td>
                   
                   <td >
                    
<h4 style="text-align:center;text-decoration: underline;">CONTRÔLEUR FINANCIER :</h4>
<br/>
Date :   <br/>
<br/>
Nom et Prénoms:  <br/>
<br/>
Signature et Cachet  


<br/>
<br/>
<br/>
<br/>
<br/>


                   </td>
                 </tr>
    </table>
     
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
    ...mapGetters("bienService", ["gettersDossierLiquidation","gettersDemandeEngagement","getFacturePersonnaliser","getterActeEffetFinanciers","modepaiements",'mandats','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
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
                "budgetGeneral"


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
    exercice() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exercice;
      }
      return ""
        }
      };
    },
    imputationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.codebudget;
      }
      return 0
        }
      };
    },
    MontantLiquide() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.total_general;
      }
      return ""
        }
      };
    },
    ligne() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ligne_economique_id;
      }
      return ""
        }
      };
    },
    fournisseurAdresse() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.adresse;
      }
      return ""
        }
      };
    },
    fournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_autre;
      }
      return ""
        }
      };
    },
     objetDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet_depense;
      }
      return ""
        }
      };
    },
    ua() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ua_id;
      }
      return ""
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
         return qtereel.numero_facture.concat('  ',' DU ','  ', this.formaterDate(qtereel.date_facture))
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
   this.detailOp = this.gettersDemandeEngagement.find(
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
}

</style>
