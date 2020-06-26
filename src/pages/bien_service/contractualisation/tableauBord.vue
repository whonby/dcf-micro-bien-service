
<template>
  <div class="container-fluid">
      <!-- <h3 style="text-align:center">TABLEAU DE BORD : BIEN ET SERVICE</h3> -->
    <div class="quick-actions_homepage">

                      <ul class="quick-actions" style="margin: 0px !important;"> 

<li class="bg_lb span3"> <a href="#" style="color:black;"><h4>TOTAL </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{nombreDeMarche}}</span><h4>MARCHE</h4></a> </li>

        <li class="bg_lg span3"> <a href="#" style="color:black;"><h4>MARCHE </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{nombreMarcheEnplanification}}</span><h4> EN PLANIFICATION</h4>  </a> </li>

        <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nombreDeMarcheEnContratualisation}}</span> <h4>EN CONTRACTUALISATION</h4></a> </li>
          <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nbreMarcheExecuter}}</span> <h4>EN EXECUTION</h4></a> </li>
                <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>MARCHE</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{afficheNombreMarcheResilier}}</span><h4> RESILIE</h4></a> </li>

        <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nombreDeMarchesuspendu}}</span> <h4> SUSPENDU</h4></a> </li>

        <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nombreAfficheMarcheSolde}}</span> <h4> TERMINE</h4></a> </li>
  
<li class="bg_lb span3"> <a href="#" style="color:black;"><h4>MONTANT </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(montantMarchePrevu))}}</span><h4>MARCHE PREVU</h4></a> </li>

        <li class="bg_lg span3"> <a href="#" style="color:black;"><h4>MONTANT MARCHE </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{formatageSomme(parseFloat(montantMarcheAvecAvenant))}}</span><h4> EN EXECUTION</h4>  </a> </li>

        <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MONTANT MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(budgetConsommerBienService))}}</span> <h4>CONSOMME</h4></a> </li>
          <li class="bg_ly span3"> <a href="#" style="color:black;"><h4>MONTANT MARCHE</h4> <i class="icon-info-sign"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(-(montantMarcheAvecAvenant - budgetConsommerBienService))}}</span> <h4>RESTANT</h4></a> </li>
                <li class="bg_lo span3"> <a href="#" style="color:black;"><h4>TAUX MARCHE</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{((parseFloat(budgetConsommerBienService)/parseFloat(montantMarcheAvecAvenant))*100).toFixed(2)}}%</span><h4> EN EXECUTION</h4></a> </li>



             
            </ul>            



















  
  
  
    </div>
    
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

import { formatageSomme } from "../../../Repositories/Repository";
import {admin,dcf} from '../../../../src/Repositories/Auth';

export default {
  name:'tableaudebord',
  
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
    ...mapGetters("bienService", ["typeMarches","avenants",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,

   admin:admin,
   dcf:dcf,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

 filtre_unite_admin() {
       // const st = this.search.toLowerCase();


        if (!this.admin || !this.dcf){
            let colect=[];
            this.printMarcheNonAttribue.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.objetUniteAdministrative.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.type_marche.code_type_marche == 4 || element.type_marche.code_type_marche == 1)
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // });
        }
else{
 return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 4 || element.type_marche.code_type_marche == 1)
}
       
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

    },




 afficherPlanificationPA() {
       // const st = this.search.toLowerCase();
        if (!this.admin || !this.dcf){
            let colect=[];
            this.printMarcheNonAttribue.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.objetUniteAdministrative.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.attribue == 0 && element.type_marche.code_type_marche == 4 || element.attribue == 0 && element.type_marche.code_type_marche == 1)
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // }); 
        }
else{
return this.printMarcheNonAttribue.filter(element => element.attribue == 0 && element.type_marche.code_type_marche == 4 || element.attribue == 0 && element.type_marche.code_type_marche == 1)
}
        
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

    },



 afficherContratualisationParUA() {
       // const st = this.search.toLowerCase();


        if (!this.admin || !this.dcf){
            let colect=[];
            this.printMarcheNonAttribue.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.objetUniteAdministrative.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.type_marche.code_type_marche == 4 && element.attribue == 1 || element.type_marche.code_type_marche == 1 && element.attribue == 1 )
         
        }

        return this.afficheMarcheEnCoursContratualisation.filter(element1 => element1.type_marche.code_type_marche == 4 && element1.attribue == 1|| element1.type_marche.code_type_marche == 1 && element1.attribue == 1)
           
    },



 afficherExecutionPAU() {
       // const st = this.search.toLowerCase();


        if (!this.admin || !this.dcf){
            let colect=[];
            this.getActeEffetFinancierPersonnaliser45.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.afficheObjetUa.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect 
          
        }
else{
return this.getActeEffetFinancierPersonnaliser45
}
        
           
        

    },



     afficherResilitieDroitAccess() {
       // const st = this.search.toLowerCase();


        if (!this.admin || !this.dcf){
            let colect=[];
            this.getActeEffetFinancierPersonnaliser45.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.afficheObjetUa.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.afficherAttributMarche(element.marche_id) == 3 && this.afficheCodeTypeMarche(element.marche.type_marche_id) == 4 ) 
            
        }
else{
return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 3 && this.afficheCodeTypeMarche(element.marche.type_marche_id) == 4 )
          
}
                 

    },



     afficherTerminerDroitAccess() {
       // const st = this.search.toLowerCase();
        if (!this.admin || !this.dcf){
            let colect=[];
            this.getActeEffetFinancierPersonnaliser45.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.afficheObjetUa.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.afficherAttributMarche(element.marche_id) == 5);
           
        }
else{
  return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 5);
          
}
       
        

    },


    
    //  afficherMandatDroitAccess() {
    //    // const st = this.search.toLowerCase();
    //     if (!this.admin || !this.dcf){
    //         let colect=[];
    //         this.getMandatPersonnaliserVise.filter(item=>{
    //             let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
    //             if (val!=undefined){
    //                 colect.push(item)
    //                 return item
    //             }
    //         })
    //         return colect
    //         // return colect.filter(items => {
    //         //     return (
    //         //         items.secti.nom_section.toLowerCase().includes(st) ||
    //         //         items.libelle.toLowerCase().includes(st)
    //         //     );
    //         // });
    //     }

    //     return this.getMandatPersonnaliserVise
    //         // return (
    //         //     items.secti.nom_section.toLowerCase().includes(st) ||
    //         //     items.libelle.toLowerCase().includes(st)
    //         // );
        

    // },


   afficherAttributMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },
montantMarcheAvecAvenant() {
      const val = parseFloat(this.affichierMontantAvenant) + parseFloat(this.montantMarcheExecuter);
      return parseFloat(val).toFixed(0);
    },



// recuperation de l'ID de UA 

// afficherIdUAdansMarche(){
//   return id =>{
//     if(id!=null && id!=""){
//       let objetID = this.marches.find(item => item.id==id)
//        if(objetID){
//          ret
//        }
//     }
//   }
// },





    affichierMontantAvenant(){
 
  
        
    return this.avenants.filter(element => element.marchetype == 2 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(0); 
      
    
},
 montantMarcheExecuter(){
  return this.afficherExecutionPAU.filter(element => element.difference_personnel_bienService == 2 ).reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_act), 0)
},



budgetConsommerBienService() {
        if (!this.admin || !this.dcf){
            let colect=[];
            this.getMandatPersonnaliserVise.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.afficheUa.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.filter(element => element.marchetype == 2 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2);
        }
else{
 return this.getMandatPersonnaliserVise.filter(element => element.marchetype == 2 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(2);

}
     
    },








afficheMarcheSuspendu(){
return this.afficherLaListeDesMarche.filter(element => element.attribue == 7)
},
nombreDeMarchesuspendu(){
  return this.afficheMarcheSuspendu.length;
},





  afficheMarcheEnCoursContratualisation(){
return this.afficherLaListeDesMarche.filter(element => element.attribue == 1 )
},
afficheMarcheEnPlanification(){
return this.afficherLaListeDesMarche.filter(element => element.attribue == 0)
},
afficherLaListeDesMarche(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 4 || element.type_marche.code_type_marche == 1)
},
nombreDeMarche(){
  return this.filtre_unite_admin.length;
},
nombreMarcheEnplanification(){
  return this.afficherPlanificationPA.length;
},
nombreDeMarcheEnContratualisation(){
   return this.afficherContratualisationParUA.length;

 },
 
  afficheMarcheResilier(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 3 && this.afficheCodeTypeMarche(element.marche.type_marche_id) == 4 )
},
    nbreMarcheExecuter(){
  return this.afficherExecutionPAU.filter(recuper => this.afficherAttributMarche(recuper.marche_id) == 2 && this.afficheCodeTypeMarche(recuper.marche.type_marche_id) == 4 ||  this.afficherAttributMarche(recuper.marche_id) == 2 && this.afficheCodeTypeMarche(recuper.marche.type_marche_id) == 1).length
},

//   afficheMarchExecuter(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 4 &&  element.difference_personnel_bienService == 2||this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 1 && element.difference_personnel_bienService == 2)
// },
afficheNombreMarcheResilier(){
return this.afficherResilitieDroitAccess.length
},
nombreAfficheMarcheSolde(){
return this.afficherTerminerDroitAccess.length
},
//     nbreMarcheExecuter(){
//   return this.getActeEffetFinancierPersonnaliser45.filter(recuper => recuper.marche.attribue == 2 && this.afficheCodeTypeMarche(recuper.marche.type_marche_id) == 4).length
// },

montantEnPlanification(){
  return this.afficheMarcheEnPlanification.reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)
},


montantMarchePrevu(){
  return this.filtre_unite_admin.filter(element => element.type_marche_id == 6 || element.type_marche_id == 1 ).reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)
},

 afficheIdCodeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },

 afficheCodeTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_type_marche;
      }
      return 0
        }
      };
    },



afficheMarcheTerminer(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 5)
},


montantEnSolde(){
  return this.afficherTerminerDroitAccess.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},

  },
  methods: {
    formatageSomme:formatageSomme
  }
};
</script>


budgetConsommerBienService

