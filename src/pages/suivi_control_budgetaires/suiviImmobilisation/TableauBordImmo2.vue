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

        <li class="bg_lb span3"> <a href="#" style="color:black;"><h4>QUANTITES </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{sommeQuantiteCouvert}} / {{parseFloat(sommeQuantiteGlobal)-parseFloat(sommeQuantiteCouvert)}}</span><h4>COUVERTES / NON COUVERTES</h4>  </a> </li>

        <!-- <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>QUANTITES</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{parseFloat(sommeQuantiteGlobal)-parseFloat(sommeQuantiteCouvert)}}</span> <h4>NON COUVERTES</h4></a> </li> -->
          <!-- <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>TAUX QUANTITES</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{(((parseFloat(parseFloat(sommeQuantiteGlobal)-parseFloat(sommeQuantiteCouvert)))/(parseFloat(sommeQuantiteGlobal)))*100).toFixed(2)}}%</span> <h4>NON COUVERTES</h4></a> </li> -->
                <li class="bg_lb span3"> <a href="#" style="color:black;"><h4>TAUX QUANTITES</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{((parseFloat(sommeQuantiteCouvert)/(parseFloat(sommeQuantiteGlobal)))*100).toFixed(2)}}% / {{(((parseFloat(parseFloat(sommeQuantiteGlobal)-parseFloat(sommeQuantiteCouvert)))/(parseFloat(sommeQuantiteGlobal)))*100).toFixed(2)}}%</span><h4> COUVERTES / NON COUVERTES</h4></a> </li>
<li class="bg_lo span3"> 
  <router-link :to="{name: 'ListeUaTauxEquipement25'}" tag="a"  style="color:black;">
  <h4>TAUX EQUIPEMENT COMPRIS </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">Nombre Ua : {{TauxEquipementDe0a25}}</span><h4>ENTRE 0% et 25% </h4>
  </router-link>
  </li>
  
    <li class="bg_lr span3"> <router-link :to="{name: 'ListeUaTauxEquipement50'}" tag="a"  style="color:black;"><h4>TAUX EQUIPEMENT COMPRIS</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">Nombre Ua : {{TauxEquipementDe25a50}}</span><h4> ENTRE 25% et 50%</h4>  </router-link> </li>
    <li class="bg_ly span3"> <router-link :to="{name: 'ListeUaTauxEquipement75'}" tag="a"  style="color:black;"><h4>TAUX EQUIPEMENT COMPRIS</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">Nombre Ua : {{TauxEquipementDe50a75}}</span><h4> ENTRE 50% et 75%</h4>  </router-link> </li>
    <li class="bg_lg span3"> <router-link :to="{name: 'ListeUaTauxEquipement100'}" tag="a"  style="color:black;"><h4>TAUX EQUIPEMENT COMPRIS</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">Nombre Ua : {{TauxEquipementDe75a100}}</span><h4> ENTRE 75% et 100%</h4>  </router-link> </li>  
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
import {admin,dcf,cf} from "../../../Repositories/Auth"
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
    
      "immobilisations",
     
      
    ]),
     ...mapGetters('parametreGenerauxAdministratif', ['getterplanOrganisationUa']) ,
    admin:admin,
      dcf:dcf,
      cf:cf,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

    ...mapGetters("personnelUA", ["personnaliseActeurDepense","acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),

 ...mapGetters("uniteadministrative", ["uniteAdministratives","directions","servicesua","uniteZones"]),
  

  TauxEquipementDe0a25() {
   
        if (this.cf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.filter(items=>((((parseFloat(this.QteAffecteCotePersonnel(items.id))+parseFloat(this.QteAffecteCoteService(items.id)))/(parseFloat(this.QteRequiseCotePersonnel(items.id))+parseFloat(this.QteRequiseCoteService(items.id))+0.01))*100)<=25)).length;
        }

       return this.uniteAdministratives.filter(items=>((((parseFloat(this.QteAffecteCotePersonnel(items.id))+parseFloat(this.QteAffecteCoteService(items.id)))/(parseFloat(this.QteRequiseCotePersonnel(items.id))+parseFloat(this.QteRequiseCoteService(items.id))+0.01))*100)<=25)).length;
    },
   
    TauxEquipementDe25a50() {
   
        if (this.cf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.filter(items=>(25<=(((parseFloat(this.QteAffecteCotePersonnel(items.id))+parseFloat(this.QteAffecteCoteService(items.id)))/(parseFloat(this.QteRequiseCotePersonnel(items.id))+parseFloat(this.QteRequiseCoteService(items.id))+0.01))*100))).length;
        }

       return this.uniteAdministratives.filter(items=>(25<=(((parseFloat(this.QteAffecteCotePersonnel(items.id))+parseFloat(this.QteAffecteCoteService(items.id)))/(parseFloat(this.QteRequiseCotePersonnel(items.id))+parseFloat(this.QteRequiseCoteService(items.id))+0.01))*100))).length;
    },
    
    TauxEquipementDe50a75() {
   
        if (this.cf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.filter(items=>(50<=(((parseFloat(this.QteAffecteCotePersonnel(items.id))+parseFloat(this.QteAffecteCoteService(items.id)))/(parseFloat(this.QteRequiseCotePersonnel(items.id))+parseFloat(this.QteRequiseCoteService(items.id))+0.01))*100))).length;
        }

       return this.uniteAdministratives.filter(items=>(50<=(((parseFloat(this.QteAffecteCotePersonnel(items.id))+parseFloat(this.QteAffecteCoteService(items.id)))/(parseFloat(this.QteRequiseCotePersonnel(items.id))+parseFloat(this.QteRequiseCoteService(items.id))+0.01))*100))).length;
    },
    TauxEquipementDe75a100() {
   
        if (this.cf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.filter(items=>(75<=(((parseFloat(this.QteAffecteCotePersonnel(items.id))+parseFloat(this.QteAffecteCoteService(items.id)))/(parseFloat(this.QteRequiseCotePersonnel(items.id))+parseFloat(this.QteRequiseCoteService(items.id))+0.01))*100))).length;
        }

       return this.uniteAdministratives.filter(items=>(75<=(((parseFloat(this.QteAffecteCotePersonnel(items.id))+parseFloat(this.QteAffecteCoteService(items.id)))/(parseFloat(this.QteRequiseCotePersonnel(items.id))+parseFloat(this.QteRequiseCoteService(items.id))+0.01))*100))).length;
    },
     QteRequiseCoteService() {
      return id => {
    if(id !=""){
  
        
    return this.getterplanOrganisationUa.filter(element => element.ua_id == id && element.serviceua_id != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
QteRequiseCotePersonnel() {
      return id => {
    if(id !=""){
  
        
    return this.personnaliseActeurDepense.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiquenormequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
QteAffecteCotePersonnel() {
      return id => {
    if(id !=""){
  
        
    return this.immobilisations.filter(element => element.uniteadministrative_id == id && element.fonction_id != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qte_affecte), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    QteAffecteCoteService() {
      return id => {
    if(id !=""){
  
        
    return this.immobilisations.filter(element => element.uniteadministrative_id == id && element.fonction_id == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qte_affecte), 0).toFixed(0); 
      
    }
    return 0
  }
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
