afficheNombreQteACouvert
afficheQteACouvert
<template>

<div>

                
               
                 <!-- <div align="right"> -->
                <!-- Search:
                <input type="search" placeholder v-model="search" />
              </div> -->
                                                               <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div>
                <table class="table table-bordered table-striped " id="equipementNonCouvertsService">
                    <thead>
                    <tr>

                        <th style="width:20%">Unité administrative</th>
                        <th style="width:20%">Service</th>
                        <th >Quantité requise</th>
                     <th >Quantité couverte</th>
                     <th >Quantité non couverte</th>
                     <!-- <th >Prix unitaire(coût moyen)</th> -->
                       <th >Total</th>
                         
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="affectService in listeDesEquipementNonCouvertDeUa"
                        :key="affectService.id">
                        
                              <td >
                            {{afficherUniteAdministrative(affectService.ua_id) || 'Non renseigné'}}</td>
                            <td >
                            {{afficherLibelleService(affectService.serviceua_id) || 'Non renseigné'}}</td>
                     
                      <td style="text-align: center;" >
                            {{affectService.historiqueequipement || 0 }}</td>
                             
                            <td 
                      style="text-align: center;"
                    >{{(affectService.historiqueequipement) - (affectService.normeequipement) || 0}}</td> 
                            <td 
                      style="text-align: center;"
                    >{{affectService.normeequipement || 0}}</td>
                    <td style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formatageSomme(parseFloat(affectService.montantequipement)) || 0 }}</td> 
                    </tr>
                     <tr>
                   <td></td>
                 
                  
                  
                  
                
                  <td style="text-align: center;font-size:14px;font-weight:bold;">Total </td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{afficheQteACouvert}}</td>
                   <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{(afficheQteACouvert)-(afficheQteNonCouvert)}}</td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{afficheQteNonCouvert}}</td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{formatageSomme(parseFloat(afficheMontantTotalEquipementNonCouvert))}}</td> 
                 </tr>
                 
                    </tbody>
                </table>

              
     




  






    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../src/Repositories/Repository';
import {admin,dcf} from "../../../../../src/Repositories/Auth"
import jsPDF from 'jspdf'
import 'jspdf-autotable'
//import moment from 'moment';
export default {
    data(){
        return{
      formData :{
ua_id:"",
serviceua_id:"",

      },
       formData2:{
        famillearticle_id :"",
        qte_affecte:"",
        date_mise_service:"",
        identification:"",
        type_immo:"",
        nature_dentree:"",
        nature_bien:"",
        etat_immobilisation:"",
        cause_inactivite:"",

      },
search:""
        }
    },
    props:["macheid"],
    created(){},

       computed: {

            ...mapGetters("bienService", [ "gettersCotations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["getterplanOrganisationUa","exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
       ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe', 
  'planActe']),
 ...mapGetters("uniteadministrative", [
      "directions",
      
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives"
      // "chapitres",
      // "sections"
    ]),
     admin:admin,
      dcf:dcf,
     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
   ...mapGetters("SuiviImmobilisation", ["services",
    "trieUaImmobilisation",
      "equipements",
      "familles",
      "articles",
      "SommeQuantiteNonCouvert",
      "getAfficheArticle",
      "getPersoStock",
      "stockageArticles",
      "groupUatypeNorme",
      "groupUaNorme",
      "groupUaNormeFamille",
      "normeEquipements",
      "groupUaNormeEquipe",
      "groupUaNormeFonction",
      "getPersoNormeArticle",
      "services",
      "besoinEquipement",
      "afficherDirection",
      "afficherService",
      "afficherFonction",
      "type_Unite_admins",
      "getPersoListeDesNorme",
      "normeImmo",
      "getPersonnaliseNormeEquipement",
      "afficherDemandeParService",
      "natureEntres",
      "EtatImmobilisations",
      "causeInactivite",
      "immobilisations",
      "afficheRegroupeEquipementCouvert",
      "demandeMateriel"
   
   ]),
    //  afficheQteACouvert() {
     
    //      return this.getterplanOrganisationUa.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueequipement), 0).toFixed(0);

     
      
     
    // },
    //  afficheQteNonCouvert() {
     
    //      return this.getterplanOrganisationUa.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);

     
      
     
    // },
  //  afficheMontantTotalEquipementNonCouvert() {
     
  //        return this.getterplanOrganisationUa.filter(element => element.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);

     
      
     
  //   },
    //   filtreServiceUniteAdministrative() {
    //   const st = this.search.toLowerCase();
    //   return this.getterplanOrganisationUa.filter(type => {
    //     return (
         
    //       type.afficherLibelleService(this.libelle).toLowerCase().includes(st)
    //     );
    //   });
    // },
    listeDesEquipementNonCouvertDeUa() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.getterplanOrganisationUa.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
          return colect.filter(items=>items.normeequipement != 0 && items.normeequipement != null);
        }

       return this.getterplanOrganisationUa.filter(items1=>items1.normeequipement != 0 && items1.normeequipement != null);

    },
    afficheQteACouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.getterplanOrganisationUa.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
          return colect.filter(items=>items.normeequipement != 0 && items.normeequipement != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueequipement), 0).toFixed(0);
        }

       return this.getterplanOrganisationUa.filter(items=>items.normeequipement != 0 && items.normeequipement != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueequipement), 0).toFixed(0);

    },
    afficheQteNonCouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.getterplanOrganisationUa.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
        return colect.filter(items=>items.normeequipement != 0 && items.normeequipement != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }

       return this.getterplanOrganisationUa.filter(items=>items.normeequipement != 0 && items.normeequipement != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);

    },
     afficheMontantTotalEquipementNonCouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.getterplanOrganisationUa.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
        return colect.filter(items=>items.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);
        }

       return this.getterplanOrganisationUa.filter(items1=>items1.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);

    },
//         equipementNonCouvert(){
// return this.getterplanOrganisationUa.filter(element => element.normeequipement != 0)
// },
 

afficherUniteAdministrative() {
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
afficherLibelleService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
      },

      methods:{ 

          ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),
    genererEnPdf(){
  var doc = new jsPDF('landscape')
  // 
  
    doc.text(98,10,"Listes des equipements non couverts des services")
  doc.autoTable({ html: '#equipementNonCouvertsService'})
doc.save('EquipementsNonCouvertsService.pdf')
return 0
},
              fenetreAjouterAffectation(index) {
      this.$("#nonEquiper").modal({
        backdrop: "static",
        keyboard: false
      });

      this.formData = this.afficheServiceNonEquipe[index];
    },

    


formatageSomme:formatageSomme,

//  formaterDate(date) {
//               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
//             },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
</style>