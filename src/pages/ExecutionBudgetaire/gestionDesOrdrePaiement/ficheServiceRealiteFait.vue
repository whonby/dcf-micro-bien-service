
<template >
<div>
  <div align="right">

      <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>


                            </div>
                             <div id="printMe">
<div class="book">
    <div class="page">
      <div class="subpage">Page 1/2</div>
        <div class="subpage">
             <table class="table table-bordered table-striped html2pdf__page-break" id="app1"  >
               <tr>
                 <td style="text-align:center">
<p>MINISTERE  DU BUDGET</p>
<p>-------------------------</p>
 <p>DIRECTION DU CONTRÔLE FINANCIER</p>
                 </td>
                  <td style="text-align:center">
                   <img  :src="AfficheAmoirie">
                 </td>
                  <td style="text-align:center">
                   <p>REPUBLIQUE DE CÔTE D'IVOIRE </p>
                   <p>-------------------------</p>
      <P>Union-Discipline-Travail</P>
                 </td>
               </tr>
               </table>
                <div style="border: 2px double #000;text-align:center">
      <p style="margin-top:10px;font-weight: bold;">FICHE DE CONTRÔLE DE LA REALITE DU SERVICE FAIT <br>
     INSTITUEE PAR L'ARRETE N° 638 MEF/CAB/YKM DU 20 JUILLET 2009</P>
    </div>
    <br>
    <br>
    <table>
    <tr>
      <pre>
        <br>
        <span style="font-weight: bold;font-size:20px">EXERCICE BUDGETAIRE</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{detailOp.exercice}}</span>
        <br>
        <span style="font-weight: bold;font-size:20px">PROJET OU ORGANISME</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{infoLibelleUa(detailOp.unite_administrative_id)}}</span>
      <br>
        <span style="font-weight: bold;font-size:20px">OBJET DE LA DEPENSE</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{detailOp.odjet_autre_depense}}}</span>
      <br>
        <span style="font-weight: bold;font-size:20px">FOURNISSEUR</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{afficherNomEntreprise(detailOp.entreprise_id)}}</span>
      <br>
        <span style="font-weight: bold;font-size:20px">ADRESSE DU FOURNISSEUR</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{afficherAdresseEntreprise(detailOp.entreprise_id)}}</span>
      <br>
        <span style="font-weight: bold;font-size:20px">N° ET DATE DE LA FACTURE</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{afficheDateFacture(detailOp.numero_ordre_paiement)}}</span>
      <br>
        <span style="font-weight: bold;font-size:20px">IMPUTATION BUDGETAIRE</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{detailOp.ligne_economique_id}}</span>
      <br>
        <span style="font-weight: bold;font-size:20px">ORDRE DE PAIEMENT N°</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{detailOp.numero_ordre_paiement}}</span>
      <br>
        <span style="font-weight: bold;font-size:20px">MONTANT</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{formatageSomme(parseFloat(detailOp.montant_ordre_paiement))}}</span>
      <br>
        <span style="font-weight: bold;font-size:20px">SERVICE BENEFICIAIRE</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{infoLibelleUa(detailOp.unite_administrative_id)}}</span>
      
      
      </pre> 
    </tr>
      </table>
      <p style="text-align:center;text-decoration: underline;font-size:25px;">OBSERVATION </p>
    <table class="table table-bordered table-striped html2pdf__page-break" id="app1"  >
      <tr style="border: 2px double #000;" >
                    <td >
                      
                      
<h4 style="text-align:center;text-decoration: underline;">SERVICE BENEFICIAIRE :</h4>
<br/>
Date :  {{detailOp.gestionnaire_credit_date}} <br/>
<br/>
Nom et Prénoms: {{detailOp.gestionnaire_credit_non}} <br/>
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
Date : {{formaterDate(detailOp.date_op_definitif)}}  <br/>
<br/>
Nom et Prénoms: {{recupererNomDuControleurF(recupererIdUser(recupererIdServiceCF(detailOp.unite_administrative_id)))}} <br/>
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
    <br>
    <br>
    <br>
    <br>
    <div class="page">
        <div class="subpage">Page 2/2</div>   
        <div class="subpage">
           <table class="table table-bordered table-striped html2pdf__page-break" id="app1"  >
               <tr>
                 <td style="text-align:center">
<p>MINISTERE  DU BUDGET</p>
<p>-------------------------</p>
<img  :src="AfficheLogODCF">
 <p>DIRECTION DU CONTRÔLE FINANCIER</p>
                 </td>
                  <td style="text-align:center">
                   <img  :src="AfficheAmoirie">
                 </td>
                  <td style="text-align:center">
                   <p>REPUBLIQUE DE CÔTE D'IVOIRE </p>
                   <p>-------------------------</p>
      <P>Union-Discipline-Travail</P>
                 </td>
               </tr>
               </table>
       <div style="border: 2px double #000;text-align:center">
      <p style="margin-top:10px;font-weight: bold;">FICHE DE CONTRÔLE DE LA REALITE DU SERVICE FAIT </p>
      
    </div>
    <br>
    <br>
<table>
    <tr>
      <pre>
        <br>
        <span style="font-weight: bold;font-size:20px">EXERCICE BUDGETAIRE</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{detailOp.exercice}}</span>
        <br>
        <span style="font-weight: bold;font-size:20px">PROJET OU ORGANISME</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{infoLibelleUa(detailOp.unite_administrative_id)}}</span>
      <br>
        <span style="font-weight: bold;font-size:20px;">OBJET DE LA DEPENSE</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center">{{detailOp.odjet_autre_depense}}}</span>
      <br>
        <span style="font-weight: bold;font-size:20px">DATE DU CONTRÔLE</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center"></span>
      <br>
        <span style="font-weight: bold;font-size:20px">LIVRABLE</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center"></span>
      <br>
        <span style="font-weight: bold;font-size:20px">TAUX DE REALISATION</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:16px;text-align:center"></span>
     
      
      </pre> 
    </tr>
      </table>
      <h5 style="text-align:center;font-size:20px;text-decoration: underline;">OBSERVATION</h5>
      <div style="width:100%;height:400px;border:2px solid #000">

</div>
<h5 style="text-align:center;font-size:20px;text-decoration: underline;">CACHET ET SIGNATURE DE L'AGENT DCF</h5>
          </div> 
    </div>
</div>


     
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
      ...mapGetters("Utilisateurs", ["getterAffectionServiceCF","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
    ...mapGetters("bienService", ["gettersnomPieceJustificative","gettersgestionOrdrePaiement","getFacturePersonnaliser","getterActeEffetFinanciers","modepaiements",'mandats','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
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

afficheDateFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersnomPieceJustificative.find(qtreel => qtreel.numero_ordrepaiement == id);

      if (qtereel) {
         return qtereel.reference.concat(' / ', qtereel.date_piece);      }
      return ""
        }
      };
    },



AfficheLogODCF() {
      
   
        return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/log3.png";
   
     
       
    },
    AfficheAmoirie() {
      
   
        return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/amoirie.png";
   
     
       
    },
    recupererNomDuControleurF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUtilisateur.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.name;
      }
      return 0
        }
      };
    },
recupererIdUser() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectionServiceCF.find(qtreel => qtreel.servicecf_id == id && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.user_id;
      }
      return 0
        }
      };
    },
     recupererIdServiceCF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectation.find(qtreel => qtreel.unite_administrative_id == id   && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.servicecf_id;
      }
      return 0
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
   this.detailOp = this.gettersgestionOrdrePaiement.find(
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
body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #FAFAFA;
        font: 12pt "Tahoma";
    }
    * {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    .page {
        width: 210mm;
        min-height: 297mm;
        padding: 20mm;
        margin: 10mm auto;
        border: 1px #D3D3D3 solid;
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
    /* .subpage {
        padding: 1cm;
        border: 5px red solid;
        height: 257mm;
        outline: 2cm #FFEAEA solid;
    } */
    
    @page {
        size: A4;
        margin: 0;
    }
    @media print {
        html, body {
            width: 210mm;
            height: 297mm;        
        }
        .page {
            margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            page-break-after: always;
        }
    }
</style>
