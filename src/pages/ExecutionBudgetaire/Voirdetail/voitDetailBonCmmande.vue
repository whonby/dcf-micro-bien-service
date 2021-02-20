uniteAdministratives
<template>
  <div>
 
    
      <hr />
      <!-- <div  align="right" style="cursor:pointer;">
    <button class="btn btn-success" @click.prevent="ajouterDemandeEngage"><i class="icon icon-folder-open"> Nouveau demande d'engagement</i></button>
    
        </div>  -->
      <h3>Detail Demande</h3>
    <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>MODE</th>
                         <th>N°DEMANDE</th>
                        <th>EXERCICE</th>
                        <th>MINISTERE/INSTITUTION</th>
                         <th>PROGRAMME/DOTATION</th>
                        <th>ACTION</th>
                        <th>ACTIVITE</th>
                         <th>UNITE ADMINISTRATIVE</th>
                        <th>NATURE DE DEPENSE</th>
                        <th>TYPE DE PROCEDURE</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.mode}}</td>
                  <td>{{detail_marche.numero_dmd_combine}}</td>
                  <td>{{detail_marche.exercice}}</td>
                  <td>{{detail_marche.section_id}}</td>
                  <td>{{detail_marche.programme_id}}</td>
                  <td>{{detail_marche.action_id}}</td>
                  <td>{{detail_marche.activite_id}}</td>
                  <td>{{detail_marche.ua_id}}</td>
                  <td>{{detail_marche.grd_nature_id}}</td>
                  <td>{{detail_marche.type_procedure_id}}</td>
                  
                  </tr>
                  
                    </tbody> 
                </table>
<table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>TYPE ENGAGEMENT</th>
                         <th>MODE PAIEMENT</th>
                        <th>REF JURIDIQUE</th>
                        <th>ENTREPRISE</th>
                         <th>LIGNE ECONOMIQUE</th>
                        <th>MONTANT TOTAL</th>
                        <th>MONTANT TRESOR</th>
                         <th>MONTANT DON</th>
                        <th>MONTANT EMPRUNT</th>
                        <th>BAILLER</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.type_engagement_id}}</td>
                   <td>{{detail_marche.mode_paiement_id}}</td>
                    <td>{{detail_marche.ref_juridique}}</td>
                     <td>{{detail_marche.entreprise_id}}</td>
                      <td>{{detail_marche.ligne_economique_id}}</td>
                       <td>{{detail_marche.total_general}}</td>
                        <td>{{detail_marche.montant_tresor}}</td>
                         <td>{{detail_marche.montant_don}}</td>
                          <td>{{detail_marche.montant_emprunt}}</td>
                           <td>{{detail_marche.bailler_id}}</td>
                  </tr>
                  
                    </tbody> 
                </table>
                  
<table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>OBJET DEPENSE</th>
                         <th>N° OP</th>
                        <th>AUTRE TYPE ENGAGEMENT</th>
                        <th>BANQUE</th>
                         <th>FAMILLE MOTIF</th>
                        <th>AUTRES MOTIF</th>
                        <th>MOTIF</th>
                         <th>DECISION</th>
                        <th>DATE MOTIF</th>
                        <th>OBSERVATION</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.objet_depense}}</td>
                   <td>{{detail_marche.numero_op_at}}</td>
                    <td>{{detail_marche.autre_type_engagement}}</td>
                     <td>{{detail_marche.entreprise_id}}</td>
                      <td>{{detail_marche.famille_motif_cf}}</td>
                       <td>{{detail_marche.autre_motif_cf}}</td>
                        <td>{{detail_marche.motif_cf}}</td>
                         <td>{{detail_marche.decision_cf}}</td>
                          <td>{{detail_marche.date_motif}}</td>
                           <td>{{detail_marche.observation}}</td>
                  </tr>
                  
                    </tbody> 
                </table>
   
 <h3>Detail Liquidation</h3>
    <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>MODE</th>
                         <th>N°DEMANDE</th>
                        <th>EXERCICE</th>
                        <th>MINISTERE/INSTITUTION</th>
                         <th>PROGRAMME/DOTATION</th>
                        <th>ACTION</th>
                        <th>ACTIVITE</th>
                         <th>UNITE ADMINISTRATIVE</th>
                        <th>NATURE DE DEPENSE</th>
                        <th>TYPE DE PROCEDURE</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.mode}}</td>
                  <td>{{detail_marche.numero_dmd_combine}}</td>
                  <td>{{detail_marche.exercice}}</td>
                  <td>{{detail_marche.section_id}}</td>
                  <td>{{detail_marche.programme_id}}</td>
                  <td>{{detail_marche.action_id}}</td>
                  <td>{{detail_marche.activite_id}}</td>
                  <td>{{detail_marche.ua_id}}</td>
                  <td>{{detail_marche.grd_nature_id}}</td>
                  <td>{{detail_marche.type_procedure_id}}</td>
                  
                  </tr>
                  
                    </tbody> 
                </table>
<table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>TYPE ENGAGEMENT</th>
                         <th>MODE PAIEMENT</th>
                        <th>REF JURIDIQUE</th>
                        <th>ENTREPRISE</th>
                         <th>LIGNE ECONOMIQUE</th>
                        <th>MONTANT TOTAL</th>
                        <th>MONTANT TRESOR</th>
                         <th>MONTANT DON</th>
                        <th>MONTANT EMPRUNT</th>
                        <th>BAILLER</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.type_engagement_id}}</td>
                   <td>{{detail_marche.mode_paiement_id}}</td>
                    <td>{{detail_marche.ref_juridique}}</td>
                     <td>{{detail_marche.entreprise_id}}</td>
                      <td>{{detail_marche.ligne_economique_id}}</td>
                       <td>{{detail_marche.total_general}}</td>
                        <td>{{detail_marche.montant_tresor}}</td>
                         <td>{{detail_marche.montant_don}}</td>
                          <td>{{detail_marche.montant_emprunt}}</td>
                           <td>{{detail_marche.bailler_id}}</td>
                  </tr>
                  
                    </tbody> 
                </table>
                  
<table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>OBJET DEPENSE</th>
                         <th>N° OP</th>
                        <th>AUTRE TYPE ENGAGEMENT</th>
                        <th>BANQUE</th>
                         <th>FAMILLE MOTIF</th>
                        <th>AUTRES MOTIF</th>
                        <th>MOTIF</th>
                         <th>DECISION</th>
                        <th>DATE MOTIF</th>
                        <th>OBSERVATION</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.objet_depense}}</td>
                   <td>{{detail_marche.numero_op_at}}</td>
                    <td>{{detail_marche.autre_type_engagement}}</td>
                     <td>{{detail_marche.entreprise_id}}</td>
                      <td>{{detail_marche.famille_motif_cf}}</td>
                       <td>{{detail_marche.autre_motif_cf}}</td>
                        <td>{{detail_marche.motif_cf}}</td>
                         <td>{{detail_marche.decision_cf}}</td>
                          <td>{{detail_marche.date_motif}}</td>
                           <td>{{detail_marche.observation}}</td>
                  </tr>
                  
                    </tbody> 
                </table>
                 <h3>Detail Mandat</h3>
    <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>MODE</th>
                         <th>N°DEMANDE</th>
                        <th>EXERCICE</th>
                        <th>MINISTERE/INSTITUTION</th>
                         <th>PROGRAMME/DOTATION</th>
                        <th>ACTION</th>
                        <th>ACTIVITE</th>
                         <th>UNITE ADMINISTRATIVE</th>
                        <th>NATURE DE DEPENSE</th>
                        <th>TYPE DE PROCEDURE</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.mode}}</td>
                  <td>{{detail_marche.numero_dmd_combine}}</td>
                  <td>{{detail_marche.exercice}}</td>
                  <td>{{detail_marche.section_id}}</td>
                  <td>{{detail_marche.programme_id}}</td>
                  <td>{{detail_marche.action_id}}</td>
                  <td>{{detail_marche.activite_id}}</td>
                  <td>{{detail_marche.ua_id}}</td>
                  <td>{{detail_marche.grd_nature_id}}</td>
                  <td>{{detail_marche.type_procedure_id}}</td>
                  
                  </tr>
                  
                    </tbody> 
                </table>
<table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>TYPE ENGAGEMENT</th>
                         <th>MODE PAIEMENT</th>
                        <th>REF JURIDIQUE</th>
                        <th>ENTREPRISE</th>
                         <th>LIGNE ECONOMIQUE</th>
                        <th>MONTANT TOTAL</th>
                        <th>MONTANT TRESOR</th>
                         <th>MONTANT DON</th>
                        <th>MONTANT EMPRUNT</th>
                        <th>BAILLER</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.type_engagement_id}}</td>
                   <td>{{detail_marche.mode_paiement_id}}</td>
                    <td>{{detail_marche.ref_juridique}}</td>
                     <td>{{detail_marche.entreprise_id}}</td>
                      <td>{{detail_marche.ligne_economique_id}}</td>
                       <td>{{detail_marche.total_general}}</td>
                        <td>{{detail_marche.montant_tresor}}</td>
                         <td>{{detail_marche.montant_don}}</td>
                          <td>{{detail_marche.montant_emprunt}}</td>
                           <td>{{detail_marche.bailler_id}}</td>
                  </tr>
                  
                    </tbody> 
                </table>
                  
<table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                           <th>OBJET DEPENSE</th>
                         <th>N° OP</th>
                        <th>AUTRE TYPE ENGAGEMENT</th>
                        <th>BANQUE</th>
                         <th>FAMILLE MOTIF</th>
                        <th>AUTRES MOTIF</th>
                        <th>MOTIF</th>
                         <th>DECISION</th>
                        <th>DATE MOTIF</th>
                        <th>OBSERVATION</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr
                    class="odd gradeX"
                   
                  >
                  <td>{{detail_marche.objet_depense}}</td>
                   <td>{{detail_marche.numero_op_at}}</td>
                    <td>{{detail_marche.autre_type_engagement}}</td>
                     <td>{{detail_marche.entreprise_id}}</td>
                      <td>{{detail_marche.famille_motif_cf}}</td>
                       <td>{{detail_marche.autre_motif_cf}}</td>
                        <td>{{detail_marche.motif_cf}}</td>
                         <td>{{detail_marche.decision_cf}}</td>
                          <td>{{detail_marche.date_motif}}</td>
                           <td>{{detail_marche.observation}}</td>
                  </tr>
                  
                    </tbody> 
                </table>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from "@/Repositories/Repository";
import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
// import {  ModelListSelect } from 'vue-search-select'
//     import 'vue-search-select/dist/VueSearchSelect.css'
export default {
  components: {
    
    // ModelListSelect,
     
  },
  name: 'besionImmolisation',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
          
        },
        {
                  name: 'searchMe',
                   icon: "search"
              }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
// json_fields: {
//         TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
//         UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
//         DESIGNATION: "famille.libelle",
//         QUANTITE: "quantite",
//         PRIX_UNITAIRE: "prix_unitaire",
//         MONTANT_TOTAL: "montant_total",
//          DATE_DE_DEMANDE: "date_jour",
//       },
quantite: {
       
        qteentrant1:"0",
        date_entre:""
       
      },
      formData: {
        uAdministrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qtesortie:"0"
        
       
      },
      uniteAdministrative_id:"",
       affiche_filtre:false,
      affiche_boutton_filtre:true,
      editStock: {
       uAdministrative_id: "",
        typeequipe_id: "",
        famill_id: "",
        typeua_id: "",
        durevie: "",
        articlestock_id: "",
        quantitestock: "",
        qteentrant1:"0",
        
        
      },
      search: ""
    };
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.gettersDemandeEngagement.find(
       idmarche => idmarche.id == this.$route.params.id
         )
         
},
  computed: {
    ...mapGetters("SuiviImmobilisation", [
    
      "equipements",
      "familles",
      "articles",
     "marqueVehicules",
     "ModeleVehicules",
      "type_Unite_admins",
      "totalQteEntrant",
      "totalQteSortant",
     "getterUa_idImo",
     "ficheArticle"
    ]),
     ...mapGetters("bienService", ["gettersDemandeEngagement","GroupeUaDemandeEngagement","typeMarches",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),
    ...mapGetters("uniteadministrative", ["uniteAdministratives","GestionStockageArticles","groupStockParUA"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),



    //  filtre_Stock() {
    //   const st = this.search.toLowerCase();
    //   return this.GestionStockageArticles.filter(type => {
    //     return (
    //       type.typeUniteAdministrative.libelle.toLowerCase().includes(st) ||
    //       type.uniteAdministrative.libelle.toLowerCase().includes(st)
         
    //     );
    //   });
    // },
 
listeDesStockParUa() {
      return id => {
        if (id != null && id != "") {
           return this.GroupeUaDemandeEngagement.filter(qtreel => qtreel[0].uAdministrative_id == id);

        }
        return this.GroupeUaDemandeEngagement;
      };
     
    },

ListeDesUa() {
    
        if (this.noDCfNoAdmin){
            let colect=[];
            this.GroupeUaDemandeEngagement.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect;
    
        }
return this.GroupeUaDemandeEngagement;
      //   return id => {
      //   if (id != null && id != "") {
      //     return this.GestionStockageArticles.filter(element => element.uAdministrative_id == id);
      //   }
      // };

    },

     libelleUniteAdministrative() {
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


    // nvelleQuantiteEnStock(){
    //     const val =
    //     parseFloat(this.editStock.quantitestock) +
    //     parseFloat(this.editStock.qteObtenu);
    //   // parseFloat(this.formData.TVA_id);
    //   if (isNaN(val)) return null;
    //   return parseFloat(val).toFixed(2);
    // },
//    fammillesModifierDynamiques() {
//       return id => {
//         if (id != null && id != "") {
//           return this.familles.filter(element => element.equipemt_id == id);
//         }
//       };
//     },
//  articlesModifierDynamiques() {
//       return id => {
//         if (id != null && id != "") {
//           return this.articles.filter(element => element.famill_id == id);
//         }
//       };
//     },
// uniteAdministrativeDynamiques() {
//       return id => {
//         if (id != null && id != "") {
//           return this.uniteAdministratives.filter(element => element.type_ua_id == id);
//         }
//       };
//     },
uniteAdministrativeDynamiques() {
      


   
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.type_ua_id == id);
        }
      };
          }
           return id => {
        if (id != null && id != "") {
          return this.uniteAdministratives.filter(element => element.type_ua_id == id);
        }
      };
         



    },





   
    


   
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "getAllStock",
      "ajouterStock",
      "modifierStock",
      "supprimerStock"
    ]),
    ...mapActions("uniteadministrative", ["uniteAdministratives","supprimerStockArticle"]),
   
    formatageSomme: formatageSomme,

      
    ajouterDemandeEngage(){
                this.$router.push({ name: 'AjouterDemandeEngagement' })
            },
    //afiicher modal ajouter
    
    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style scoped>
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}
.taillemodalMod{
   width: 500px;
  margin: 0 -200px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
.tailgrandStock{
  width: 88%;
  margin: 0 -42%;
}
</style>
