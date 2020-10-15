
<template>
  <div class="container-fluid">
      <!-- <h3 style="text-align:center">TABLEAU DE BORD : BIEN ET SERVICE</h3> -->
    <div class="quick-actions_homepage">

                      <ul class="quick-actions" style="margin: 0px !important;"> 

<li class="bg_lb span3"> 
  
    <router-link tag="a" :to="{ name: 'listeTotalMarcheBienService' }" style="color:black;">
    <h4>TOTAL </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{nombreDeMarche}}</span><h4>MARCHE</h4>
    
    </router-link> 
    
    </li>

        <li class="bg_lg span3"> 
          <router-link tag="a" :to="{ name: 'listeDesMarcheEnPlanificationBS' }" style="color:black;">
          <h4>MARCHE </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{nombreMarcheEnplanification}}</span><h4> EN PLANIFICATION</h4>  
          
            </router-link>  </li>

        <li class="bg_ly span3"> <router-link tag="a" :to="{ name: 'listeDesMarcheEnContratualisationBS' }" style="color:black;"><h4>MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nombreDeMarcheEnContratualisation}}</span> <h4>EN CONTRATUALISATION</h4></router-link> </li>
          <li class="bg_ly span3"> <router-link tag="a" :to="{ name: 'listeDesMarcheEnExecutionBS' }" style="color:black;"><h4>MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nbreMarcheExecuter}}</span> <h4>EN EXECUTION</h4></router-link> </li>
                <li class="bg_lo span3"> <router-link tag="a" :to="{ name: 'listeDesMarcheResilieBS' }" style="color:black;"><h4>MARCHE</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{afficheNombreMarcheResilier}}</span><h4> RESILIE</h4></router-link> </li>

        <li class="bg_ly span3"> <router-link tag="a" :to="{ name: 'listeDesMarcheSuspenduBS' }" style="color:black;"><h4>MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nombreDeMarchesuspendu}}</span> <h4> SUSPENDU</h4></router-link> </li>

        <li class="bg_ly span3"> <router-link tag="a" :to="{ name: 'listeDesMarcheTermineBS' }" style="color:black;"><h4>MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{nombreAfficheMarcheSolde}}</span> <h4> TERMINE</h4></router-link> </li>
  
<li class="bg_lb span3"> <router-link tag="a" :to="{ name: '' }" style="color:black;"><h4>MONTANT </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(montantMarchePrevu))}}</span><h4>PREVU DES MARCHES </h4></router-link> </li>
<li class="bg_lb span3"> <router-link tag="a" :to="{ name: '' }" style="color:black;"><h4>MONTANT </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(MontantReelDesMarches))}}</span><h4>REEL DES MARCHES</h4></router-link> </li>
<li class="bg_lb span3"> <router-link tag="a" :to="{ name: '' }" style="color:black;"><h4>MONTANT DES MARCHES </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(MontantDesMarcheEnCoursExecution))}}</span><h4>EN COURS D'EXECUTION</h4></router-link> </li>
<li class="bg_lb span3"> <router-link tag="a" :to="{ name: '' }" style="color:black;"><h4>MONTANT</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(MontantDesAvenants))}}</span><h4>DES AVENANTS</h4></router-link> </li>
        <li class="bg_lg span3"> <router-link tag="a" :to="{ name: '' }" style="color:black;"><h4>MONTANT REEL </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{formatageSomme(parseFloat(montantMarcheAvecAvenant))}}</span><h4> DES MARCHES + AVENANTS</h4>  </router-link> </li>

        <li class="bg_ly span3"> <router-link tag="a" :to="{ name: '' }" style="color:black;"><h4>MONTANT MARCHE</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(budgetConsommerBienService))}}</span> <h4>CONSOMME</h4></router-link> </li>
          <li class="bg_ly span3"> <router-link tag="a" :to="{ name: '' }" style="color:black;"><h4>MONTANT MARCHE</h4> <i class="icon-info-sign"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(-(montantMarcheAvecAvenant - budgetConsommerBienService))}}</span> <h4>RESTANT</h4></router-link> </li>
                <li class="bg_lo span3"> <router-link tag="a" :to="{ name: '' }" style="color:black;"><h4>TAUX MARCHE</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{((parseFloat(budgetConsommerBienService)/parseFloat(montantMarcheAvecAvenant))*100).toFixed(2)}}%</span><h4> EN EXECUTION</h4></router-link> </li>


             
            </ul>            



















  
  
  
    </div>
    
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

import { formatageSomme } from "../../../Repositories/Repository";
import {admin,dcf,noDCfNoAdmin} from '../../../../src/Repositories/Auth';

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
   noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
  ...mapGetters("horSib", ["gettersMarcheHorsib"]),

MontantReelDesMarches() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.getActeEffetFinancierPersonnaliser45.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(recuper =>  this.affichertypeMarche(this.recupererIdTypeMarche(recuper.marche_id)) == 4 && recuper.difference_personnel_bienService == 2 ||  this.affichertypeMarche(this.recupererIdTypeMarche(recuper.marche_id)) == 1 && recuper.difference_personnel_bienService == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
           
        }

        return this.getActeEffetFinancierPersonnaliser45.filter(recuper =>  this.affichertypeMarche(this.recupererIdTypeMarche(recuper.marche_id)) == 4 && recuper.difference_personnel_bienService == 2 ||  this.affichertypeMarche(this.recupererIdTypeMarche(recuper.marche_id)) == 1 && recuper.difference_personnel_bienService == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
            
    },


MontantDesMarcheEnCoursExecution() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.getActeEffetFinancierPersonnaliser45.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(recuper => this.afficherAttributMarche(recuper.marche_id) == 2 && this.affichertypeMarche(this.recupererIdTypeMarche(recuper.marche_id)) == 4 && recuper.difference_personnel_bienService == 2 || this.afficherAttributMarche(recuper.marche_id) == 2 && this.affichertypeMarche(this.recupererIdTypeMarche(recuper.marche_id)) == 1 && recuper.difference_personnel_bienService == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
           
        }

        return this.getActeEffetFinancierPersonnaliser45.filter(recuper => this.afficherAttributMarche(recuper.marche_id) == 2 && this.affichertypeMarche(this.recupererIdTypeMarche(recuper.marche_id)) == 4 && recuper.difference_personnel_bienService == 2 || this.afficherAttributMarche(recuper.marche_id) == 2 && this.affichertypeMarche(this.recupererIdTypeMarche(recuper.marche_id)) == 1 && recuper.difference_personnel_bienService == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
            
    },
MontantDesAvenants(){
  return this.avenants.filter(recuper =>  this.affichertypeMarche(this.recupererIdTypeMarche(recuper.marche_id)) == 4 ||  this.affichertypeMarche(this.recupererIdTypeMarche(recuper.marche_id)) == 1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0)
},





 filtre_unite_admin() {
       // const st = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.type_marche_id == 6 && element.sib==1 || element.type_marche_id == 1 && element.sib==1)
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // });
        }

 return this.gettersMarcheHorsib.filter(element => element.type_marche_id == 6 && element.sib==1 || element.type_marche_id == 1 && element.sib==1)

       
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

    },




 afficherPlanificationPA() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.attribue == 0 && element.type_marche_id == 6 && element.sib==1 || element.attribue == 0 && element.type_marche_id == 1 && element.sib==1)
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // }); 
        }

return this.gettersMarcheHorsib.filter(element => element.attribue == 0 && element.type_marche_id == 6 && element.sib==1 || element.attribue == 0 && element.type_marche_id == 1 && element.sib==1)
        
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
    },



 afficherContratualisationParUA() {
       // const st = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.type_marche_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.	type_marche_id == 6 && element.attribue == 1  && element.sib==1|| element.	type_marche_id == 1 && element.attribue == 1 && element.sib==1)
         
        }

        return this.gettersMarcheHorsib.filter(element1 => element1.type_marche_id == 6 && element1.attribue == 1 && element1.sib==1 || element1.	type_marche_id == 1 && element1.attribue == 1 && element1.sib==1)
           
    },



 afficherExecutionPAU() {
       // const st = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.getActeEffetFinancierPersonnaliser45.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect 
          
        }

return this.getActeEffetFinancierPersonnaliser45
    },


     afficherResilitieDroitAccess() {
       // const st = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.getActeEffetFinancierPersonnaliser45.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.afficherAttributMarche(element.marche_id) == 3 && this.afficheCodeTypeMarche(element.marche.type_marche_id) == 4 ) 
            
        }

return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 3 && this.afficheCodeTypeMarche(element.marche.type_marche_id) == 4 )
          

                 

    },



     afficherTerminerDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.getActeEffetFinancierPersonnaliser45.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.afficherAttributMarche(element.marche_id) == 5);
           
        }

  return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 5);
          

       
        

    },



afficherSuppenduDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.getActeEffetFinancierPersonnaliser45.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.afficherAttributMarche(element.marche_id) == 7);
           
        }

  return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 7);
          

       
        

    },
   afficherAttributMarche() {
      return id2 => {
        if (id2 != null && id2 != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id2);

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

    affichierMontantAvenant(){
 
  
        
    return this.avenants.filter(element => element.marchetype == 2 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(0); 
      
    
},
 montantMarcheExecuter(){
  return this.afficherExecutionPAU.filter(element => element.difference_personnel_bienService == 2 ).reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_act), 0)
},



budgetConsommerBienService() {
        if (this.noDCfNoAdmin){
            let colect=[];
            this.mandats.filter(item=>{
                let val=this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
         return colect.filter(item9 => item9.marchetype==2 && item9.decision_cf==8).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)
        }
        return this.mandats.filter(item4 => item4.marchetype==2 && item4.decision_cf==8).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.total_general) , 0)
    },








// afficheMarcheSuspendu(){
// return this.afficherLaListeDesMarche.filter(element => element.attribue == 7)
// },
 nombreDeMarchesuspendu(){
  return this.afficherSuppenduDroitAccess.length;
},





//   afficheMarcheEnCoursContratualisation(){
// return this.afficherLaListeDesMarche.filter(element => element.attribue == 1 )
// },
afficheMarcheEnPlanification(){
return this.afficherLaListeDesMarche.filter(element => element.attribue == 0)
},
// afficherLaListeDesMarche(){
// return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 4 || element.type_marche.code_type_marche == 1)
// },

recupererIdTypeMarche() {
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



affichertypeMarche() {
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




