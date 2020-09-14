sommeQuantiteGlobal
<template>
  <div class="container-fluid">
     <!-- <h3 style="text-align:center">TABLEAU DE BORD : COMPTABILITES DES MATIERES</h3> -->
    <div class="quick-actions_homepage">
      <ul class="quick-actions">
<!--   
          <li class="bg_lb" title="Nombre Global d'équipement">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{nombreTotalEquipement}}</span> QUANTITES GBOBALES
          </a>
        </li> 

        
<li class="bg_ly" title="Nombres d'equipement Restant">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-success">{{SommeEquipementPrevue}}</span>QUANTITES NON COUVERTES
          </a>
        </li>
       <li class="bg_ly" title="Nombre d'equipement Réalise">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{SommeEquipementRealise}}</span> QUANTITES COUVERTES
          </a>
        </li> 
         <li class="bg_lg" title="Taux équipement  réalisé">
          <a href="#">
            <i class="icon-fullscreen"></i>
            <span class="label label-warning">{{tauxEquipementRealise}}%</span>TAUX QUANTITES COUVERTES
          </a>
        </li>
        <li class="bg_lg">
          <a href="#">
            <i class="icon-fullscreen"></i>
            <span class="label label-warning">{{tauxEquipementPrevue}}%</span>TAUX QUANTITES NON COUVERTES
          </a>
        </li> -->
        <div class="quick-actions_homepage">
      
                            <ul class="quick-actions" style="margin: 0px !important;"> 

<li class="bg_lb span3"> <a href="#" style="color:black;"><h4>QUANTITES </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{sommeQuantiteGlobal}}</span><h4>GLOBALES</h4></a> </li>

        <li class="bg_lg span3"> <a href="#" style="color:black;"><h4>QUANTITES </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{sommeQuantiteCouvert}}</span><h4>COUVERTES</h4>  </a> </li>

        <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>QUANTITES</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{parseFloat(sommeQuantiteGlobal)-parseFloat(sommeQuantiteCouvert)}}</span> <h4>NON COUVERTES</h4></a> </li>
          <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>TAUX QUANTITES</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{(((parseFloat(parseFloat(sommeQuantiteGlobal)-parseFloat(sommeQuantiteCouvert)))/(parseFloat(sommeQuantiteGlobal)))*100).toFixed(2)}}%</span> <h4>NON COUVERTES</h4></a> </li>
                <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>TAUX QUANTITES</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{((parseFloat(sommeQuantiteCouvert)/(parseFloat(sommeQuantiteGlobal)))*100).toFixed(2)}}%</span><h4> COUVERTES</h4></a> </li>
<li class="bg_lo span3"> <a href="#" style="color:black;"><h4>DE 0% A 25 %</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{2}}</span><h4> NOMBRES UA</h4></a> </li>
    <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>DE 25% A 50 %</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{89}}</span><h4> NOMBRES UA</h4></a> </li>
    <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>DE 50% A 75 %</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{20}}</span><h4> NOMBRES UA</h4></a> </li>
    <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>DE 75% A 100 %</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{45}}</span><h4> NOMBRES UA</h4></a> </li>  
                            </ul>
      
      

 
 
      
    </div> 
          <!-- <h1 style="text-align:center;margin:0 auto;color:red">EN COURS DE DEVELOPPEMENT TABLEAU DE BORD COMPTABILITE DES MATIERES</h1> -->
      </ul>
    </div>

    <div class="quick-actions_homepage">
      <ul class="quick-actions"></ul>
    </div>
    <div class="quick-actions_homepage">
      <ul class="quick-actions"></ul>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import { formatageSomme } from "../../../Repositories/Repository";
import {admin,dcf} from "../../../Repositories/Auth"
export default {
  name:'TableauBordImmo',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ]
    };
  },

  computed: {
    ...mapGetters("SuiviImmobilisation", [
    
      "tauxbesoinimmoUa",
      "SommeEquipementPrevue",
      "SommeEquipementActuel",
      
      "nombreTotalEquipement",
      "SommeEquipementRealise",
      "tauxEquipementPrevue",
      "tauxEquipementRealise",
      "tauxEquipementPrevue",
      "SommeTotalBesoin",
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
      // "tauxGlobalEquipement"

      // "nbreArchivageNotes"
    ]),
     ...mapGetters('parametreGenerauxAdministratif', ['getterplanOrganisationUa']) ,
    admin:admin,
      dcf:dcf,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

    ...mapGetters("personnelUA", ["acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

 ...mapGetters("uniteadministrative", ["uniteAdministratives","directions","servicesua","uniteZones"]),
  
  TauxEquipementDe0a25() {
   
        if (!this.admin || !this.dcf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.filter(items=>this.RecupereQteAffecter(items.id)).length;
        }

       return this.uniteAdministratives.filter(items=>items.id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);

    },

RecupereQteAffecter() {
      return id => {
        if (id != null && id != "") {
           return this.immobilisations.filter(qtreel =>qtreel.uniteadministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qte_affecte), 0).toFixed(0);
      
        }
      };
    },

 
  
// quantiteTotalDemande() {
      


//         if (!this.admin || !this.dcf){
//             let colect=[];
//             this.demandeMateriel.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
//             })
//           return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);
//         }

//        return this.demandeMateriel.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);

//     },
quantiteTotalPersonnel() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiquenormequipement), 0).toFixed(0);
        }

       return this.acte_personnels.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiquenormequipement), 0).toFixed(0);
        },

    
    quantiteTotalService() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.getterplanOrganisationUa.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueequipement), 0).toFixed(0);
          
        }

       return this.getterplanOrganisationUa.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueequipement), 0).toFixed(0);
          
    },
      nombreDupersonne(){
    return this.acte_personnels.length;
},
//       quantiteEnStock(){
//     return this.stockageArticles.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
// },
//     quantiteTotalDemande(){
//     return this.demandeMateriel.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);
// },


quantiteEnStock() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.stockageArticles.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
        }

       return this.stockageArticles.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);

    },




//  quantiteTotalPersonnel(){
//     return this.acte_personnels.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiquenormequipement), 0).toFixed(0);
// },
//  quantiteTotalService(){
//     return this.servicesua.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueequipement), 0).toFixed(0); 
// },

sommeQuantiteGlobal(){
  const val = parseInt(this.quantiteTotalPersonnel) + parseInt(this.quantiteTotalService);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
},

// quantiteTotalDemandeNonCouvertPersonnel() {
      


//         if (!this.admin || !this.dcf){
//             let colect=[];
//             this.demandeMateriel.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
//                 item.motif != 10
//             })
//           return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);
//         }

//        return this.demandeMateriel.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);

//     },
// // quantiteTotalDemandeNonCouvertPersonnel(){
// //     return this.demandeMateriel.filter(element => element.motif != 10).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);
// // },
// quantiteTotalDemandeNonCouvertService() {
      


//         if (!this.admin || !this.dcf){
//             let colect=[];
//             this.demandeMateriel.filter(item=>{
//                 let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadmin_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
                
//             })
//           return colect.filter(items=>items.motif_directeur_sce != 10).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);
//         }

//        return this.demandeMateriel.filter(items=>items.motif_directeur_sce != 10).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);

//     },
// quantiteTotalDemandeNonCouvertService(){
//     return this.demandeMateriel.filter(element => element.motif_directeur_sce != 10).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantite), 0).toFixed(0);
// },
// quantiteTotalCouvertPersonnel(){
//     return this.acte_personnels.filter(element => element.normeequipement == 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiquenormequipement), 0).toFixed(0);
// },
quantiteTotalCouvertPersonnel() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.immobilisations.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(items=>items.fonction_id != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qte_affecte), 0).toFixed(0);
        }

       return 0;

    },
    quantiteTotalCouvertService() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.immobilisations.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uniteadministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
          return colect.filter(items=>items.fonction_id == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qte_affecte), 0).toFixed(0);
        }

       return this.immobilisations.filter(items=>items.fonction_id == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qte_affecte), 0).toFixed(0);

    },
    sommeQuantiteCouvert(){
  const val =  parseInt(this.quantiteTotalCouvertPersonnel)+ parseInt(this.quantiteTotalCouvertService);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
},
// quantiteTotalCouvertPersonnel(){
//     return this.acte_personnels.filter(element => element.normeequipement == 0).length;
// },
quantiteTotalNonCouvertPersonnel() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect.filter(items=>items.normeequipement != 0).length;
        }

       return  this.acte_personnels.filter(items=>items.normeequipement != 0).length;

    },
//  quantiteTotalNonCouvertPersonnel(){
//     return this.acte_personnels.filter(element => element.normeequipement != 0).length;
// },
//  quantiteTotalNonCouvertService(){
//     return this.servicesua.filter(element => element.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0); 
// },

sommeQuantiteGlobalNonCouvert(){
  const val =  parseInt(this.quantiteTotalNonCouvertPersonnel)+ parseInt(this.quantiteTotalNonCouvertService);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
}
  },
  methods: {
    formatageSomme: formatageSomme,
  }
};
</script>



<style>
.deplaceCar1 {
  margin: 0 50px;
}
.deplaceCar {
  margin: 0 120px;
}
</style>
