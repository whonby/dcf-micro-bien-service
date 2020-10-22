NombrePlanifInfastructureNiveau1
<template>
    <div class="container-fluid">
    
         <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#tab0000">Tous les marchés  <span class="badge badge" >{{nombreMarcheHorsSib}}</span></a></li>
                              
                               <li ><a data-toggle="tab" href="#tab10000"> Planification <span class="badge badge-important" > {{afficherNombreMarchepalinificationHorsib}} </span></a></li>
                                <li ><a data-toggle="tab" href="#tab109"> Contratualisation   <span class="badge badge-success" > {{nombreMarcheContratualisationHorSib}} </span></a></li>
                                <!-- <li><a data-toggle="tab" href="#tab20"> Exécution      <span class="badge badge-warning" ></span></a></li>
                               
                                 <li><a data-toggle="tab" href="#tab20002">Résiliés    <span class="badge badge-info" > </span></a></li>
                                    <li><a data-toggle="tab" href="#tab20789">Suspendus   <span class="badge badge" > </span></a></li>
                                  <li><a data-toggle="tab" href="#tab2000256"> Terminé    <span class="badge badge-inverse" ></span></a></li> -->
                                 
                               
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                        <div id="tab0000" class="tab-pane active">
                   <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#NIVEAU1" v-if="InfastructureCodeNiveau1==1">{{InfastructureLibelleNiveau1}}   <span class="badge badge" >{{NombreInfastructureNiveau1}}</span></a></li>
                              
                               <li ><a data-toggle="tab" href="#NIVEAU2" v-if="InfastructureCodeNiveau2==2"> {{InfastructureLibelleNiveau2}}   <span class="badge badge-important" > {{NombreInfastructureNiveau2}} </span></a></li>
                                <li ><a data-toggle="tab" href="#NIVEAU3" v-if="InfastructureCodeNiveau3==3"> {{InfastructureLibelleNiveau3}}   <span class="badge badge-success" > {{NombreInfastructureNiveau3}} </span></a></li>
                               <li ><a data-toggle="tab" href="#NIVEAU4" v-if="InfastructureCodeNiveau4==4"> {{InfastructureLibelleNiveau4}}   <span class="badge badge-success" > {{NombreInfastructureNiveau4}} </span></a></li>
                               <li ><a data-toggle="tab" href="#NIVEAU5" v-if="InfastructureCodeNiveau5==5"> {{InfastructureLibelleNiveau5}}   <span class="badge badge-important" > {{NombreInfastructureNiveau5}} </span></a></li>
                                <li ><a data-toggle="tab" href="#NIVEAU6" v-if="InfastructureCodeNiveau6==6"> {{InfastructureLibelleNiveau6}}   <span class="badge badge-success" > {{NombreInfastructureNiveau6}} </span></a></li>
                               
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                        <div id="NIVEAU1" class="tab-pane active">
                          <infrastructureNiveau1></infrastructureNiveau1>
                        </div>
                        <div id="NIVEAU2" class="tab-pane">
                          <infrastructureNiveau2></infrastructureNiveau2>
                        </div>
                        <div id="NIVEAU3" class="tab-pane">
                           <infrastructureNiveau3></infrastructureNiveau3>
                        </div>
                        <div id="NIVEAU4" class="tab-pane">
                           <infrastructureNiveau4></infrastructureNiveau4>
                        </div>
                        <div id="NIVEAU5" class="tab-pane">
                           <infrastructureNiveau5></infrastructureNiveau5>
                        </div>
                        <div id="NIVEAU6" class="tab-pane">
                           <infrastructureNiveau6></infrastructureNiveau6>
                        </div>
                        </div>
                        </div>

                      <div id="tab10000" class="tab-pane">
                     <!-- <planification></planification> -->
                     <div class="widget-title">
                           <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#NIVEAU7" v-if="InfastructureCodeNiveau1==1">{{InfastructureLibelleNiveau1}}   <span class="badge badge" >{{NombrePlanInfastructureNiveau1}}</span></a></li>
                              
                               <li ><a data-toggle="tab" href="#NIVEAU8" v-if="InfastructureCodeNiveau2==2"> {{InfastructureLibelleNiveau2}}   <span class="badge badge-important" > {{NombrePlanifInfastructureNiveau2}} </span></a></li>
                                <li ><a data-toggle="tab" href="#NIVEAU9" v-if="InfastructureCodeNiveau3==3"> {{InfastructureLibelleNiveau3}}   <span class="badge badge-success" > {{NombrePlanifInfastructureNiveau3}} </span></a></li>
                               <li ><a data-toggle="tab" href="#NIVEAU10" v-if="InfastructureCodeNiveau4==4"> {{InfastructureLibelleNiveau4}}   <span class="badge badge-success" > {{NombrePlanifInfastructureNiveau4}} </span></a></li>
                               <li ><a data-toggle="tab" href="#NIVEAU11" v-if="InfastructureCodeNiveau5==5"> {{InfastructureLibelleNiveau5}}   <span class="badge badge-important" > {{NombrePlanifInfastructureNiveau5}} </span></a></li>
                                <li ><a data-toggle="tab" href="#NIVEAU12" v-if="InfastructureCodeNiveau6==6"> {{InfastructureLibelleNiveau6}}   <span class="badge badge-success" > {{NombrePlanifInfastructureNiveau6}} </span></a></li>
                               
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                        <div id="NIVEAU7" class="tab-pane active">
                          <PlanInfrastructureNiveau1></PlanInfrastructureNiveau1>
                        </div>
                        <div id="NIVEAU8" class="tab-pane">
                          <PlanInfrastructureNiveau2></PlanInfrastructureNiveau2>
                        </div>
                        <div id="NIVEAU9" class="tab-pane">
                          <PlanInfrastructureNiveau3></PlanInfrastructureNiveau3>
                        </div>
                        <div id="NIVEAU10" class="tab-pane">
                          <PlanInfrastructureNiveau4></PlanInfrastructureNiveau4>
                        </div>
                        <div id="NIVEAU11" class="tab-pane">
                          <PlanInfrastructureNiveau5></PlanInfrastructureNiveau5>
                        </div>
                        <div id="NIVEAU12" class="tab-pane">
                          <PlanInfrastructureNiveau6></PlanInfrastructureNiveau6>
                        </div>
                        </div>
                     </div>
                       <div id="tab109" class="tab-pane">
                     <contratualisation></contratualisation>
                     <!-- <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#SANITAIRES">INFRASTRUCTURES SANITAIRES   <span class="badge badge" >{{NombreInfasSanitaire}}</span></a></li>
                              
                               <li ><a data-toggle="tab" href="#SCOLAIRES"> INFRASTRUCTURES SCOLAIRES   <span class="badge badge-important" > {{NombreInfasScolaire}} </span></a></li>
                                <li ><a data-toggle="tab" href="#COMMUNAUTAIRES"> INFRASTRUCTURES COMMUNAUTAIRES   <span class="badge badge-success" > {{NombreInfasCommunautaires}} </span></a></li>
                               <li ><a data-toggle="tab" href="#DIVERS"> DIVERS   <span class="badge badge-success" > {{NombreInfasDivers}} </span></a></li>
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                        <div id="SANITAIRES" class="tab-pane active">
                          <Sanitaire></Sanitaire>
                        </div>
                        <div id="SCOLAIRES" class="tab-pane">
                          
                        </div>
                        <div id="COMMUNAUTAIRES" class="tab-pane">
                          
                        </div>
                        <div id="DIVERS" class="tab-pane">
                          
                        </div>
                        </div> -->
                     </div>
                    </div>

                </div>

            
            </div>
        </div>


    </div>
</template>

<script>
   import infrastructureNiveau1 from "./NiveauInfastructureToutMarche/infrastructureNiveau1"
   import infrastructureNiveau2 from "./NiveauInfastructureToutMarche/infrastructureNiveau2"
   import infrastructureNiveau3 from "./NiveauInfastructureToutMarche/infrastructureNiveau3"
   import infrastructureNiveau4 from "./NiveauInfastructureToutMarche/infrastructureNiveau4"
   import infrastructureNiveau5 from "./NiveauInfastructureToutMarche/infrastructureNiveau5"
   import infrastructureNiveau6 from "./NiveauInfastructureToutMarche/infrastructureNiveau6"
  import PlanInfrastructureNiveau1 from "../component/NiveauInfastructurePlanification/PlanInfrastructureNiveau1"
  import PlanInfrastructureNiveau2 from "../component/NiveauInfastructurePlanification/PlanInfrastructureNiveau2"
  import PlanInfrastructureNiveau3 from "../component/NiveauInfastructurePlanification/PlanInfrastructureNiveau3"
  import PlanInfrastructureNiveau4 from "../component/NiveauInfastructurePlanification/PlanInfrastructureNiveau4"
  import PlanInfrastructureNiveau5 from "../component/NiveauInfastructurePlanification/PlanInfrastructureNiveau5"
  import PlanInfrastructureNiveau6 from "../component/NiveauInfastructurePlanification/PlanInfrastructureNiveau6"
    // import planification from "./component/planification"
   import contratualisation from "./component/contratualisation"
 import { mapGetters, mapActions } from "vuex";
 import { formatageSomme } from "../../../../src/Repositories/Repository";
 import {admin,dcf,noDCfNoAdmin} from "../../../../src/Repositories/Auth"
 import {partition} from '../../../../src/Repositories/Repository'
export default {
  components:{
  infrastructureNiveau1,
  infrastructureNiveau2,
  infrastructureNiveau3,
  infrastructureNiveau4,
  infrastructureNiveau5,
  infrastructureNiveau6,
  contratualisation,
  PlanInfrastructureNiveau1,
  PlanInfrastructureNiveau2,
  PlanInfrastructureNiveau3,
  PlanInfrastructureNiveau4,
  PlanInfrastructureNiveau5,
  PlanInfrastructureNiveau6
  },
  name:'type facture',
  data() {
    return {
       page:0,
       size:10,
       active_el:0,
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
    //   json_fields: {
    //     CODE: "code",
    //     libelle: "libelle"
    //   },

      formData: {
            objet:"",
            livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                type_financement:"",
                source_financement:"",
                Bénéficiaire:"",
              //  Source_de_financement:"",
                Nature_des_prix:"",
                unite_administrative_id:"",
                gdenature_id:"",
                activite_id:"",
                typeappel_id:"",
                exo_id:"",
        
      },
        editActeEffetFinancier:{
          date_odre_service:"",
          date_fin_exe:""
        },
        formEffetFinancier:{
             code_act:"",
             libelle_act:"",
             reference_act:"",
             objet_act:"",
             incidence_financiere:"",
             montant_act:"",
              date_attributaire:"",
             date_reception:"",
             duree:"",
             date_fin_exe:"",
             date_odre_service:"",
             livrable_id:"",
        autorite_approbation:"",
        date_approbation:"",
             text_juridique_id:"",
             type_act_effet_id:"",
             analyse_dossier_id:"",
             entreprise_id:"",
             //marche_id:"",
             numero_marche:""
        },

      editMarche: {
           objet:"",
           livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                type_financement:"",
                source_financement:"",
                Bénéficiaire:"",
                Nature_des_prix:"",
                unite_administrative_id:"",
                imputation:"",
                 activite_id:"",
                 exo_id:""
                 
      },
      
//       editActeEffetFinancier:{
// cause_resiliation:"",
// date_resiliation:""
//       },
      indicateur_test:1,
      search: ""
    };
  },
  created() {
      console.log("INB")
      console.log(this.getterUniteAdministrativeByUser)
    console.log("INB14500")
},

  computed: {

     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral","jointureUaChapitreSection" , ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),
   admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
    ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques',"getterInfrastrucure"]),

    ...mapGetters("horSib", ["gettersMarcheHorsib"]),

//     marcheHorSibFiltre(){

//      const searchTerm = this.search.toLowerCase();

// return this.afficherListeMarcheHorSib.filter((item) => {
  
//      return item.objet.toLowerCase().includes(searchTerm) ||
//             item.reference_marche.toLowerCase().includes(searchTerm) 
//            //|| item.uabudget_eclate.libelle.toLowerCase().includes(searchTerm) 
//    }
// )
//    },
InfastructureNiveau1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterInfrastrucure.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
NombreInfastructureNiveau1() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==1).length
            
        }

 return this.gettersMarcheHorsib.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==1).length
      
    },

NombreInfastructureNiveau2() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==2).length
            
        }

 return this.gettersMarcheHorsib.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==2).length
      
    },
    NombreInfastructureNiveau3() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==3).length
            
        }

 return this.gettersMarcheHorsib.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==3).length
      
    },
    NombreInfastructureNiveau4() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==4).length
            
        }

 return this.gettersMarcheHorsib.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==4).length
      
    },
    NombreInfastructureNiveau5() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==5).length
            
        }

 return this.gettersMarcheHorsib.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==5).length
      
    },
    NombreInfastructureNiveau6() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==6).length
            
        }

 return this.gettersMarcheHorsib.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==6).length
      
    },
    marcheHorSibFiltre() {
       // const st = this.search.toLowerCase();

        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null)
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // });
        }

 return this.gettersMarcheHorsib.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null  )
       
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

    },

    recupererCodeTypeMarche() {
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

   montantMarche(){
  return this.marcheHorSibFiltre.reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},

 // afficher la liste des marchés hors sib

 afficherListeMarcheHorSib(){

       return this.gettersMarcheHorsib.filter(item =>item.plan_passation_marche_id==null && item.sib==1)
   
  
 },


 

 // afficher le nommbre demareche hors sib

 nombreMarcheHorsSib(){
   return this.marcheHorSibFiltre.length
 },


  afficherListeMarcheHorsSib() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.parent_id == null && element.sib==1 )
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // }); 
        }

        return this.gettersMarcheHorsib.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.parent_id == null && element.sib==1 )
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

    },

    afficherNombreMarchepalinificationHorsib(){
      return this.afficherListeMarcheHorsSib.length
    },


    nombreMarcheContratualisationHorSib(){
   return this.afficherContratualisationParUA.length
 },

  afficherContratualisationParUA() {
       // const st = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.attribue == 1  && element.parent_id == null && element.sib==1)
            
        }

        return this.gettersMarcheHorsib.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.attribue == 1 && element.parent_id == null && element.sib==1 )
           
        

    },
 

      CodeExempte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterligneExempter.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },

 afficherLibelleUa(){
   return id =>{
     if(id!=null && id!=""){
       let response = this.uniteAdministratives.find(item => item.id==id)
       if(response){
         return response.libelle
       }
     }
   }
 },
afficherLibelleTypeMarche(){
 return id =>{
     if(id!=null && id!=""){
       let response = this.typeMarches.find(item => item.id==id)
       if(response){
         return response.libelle
       }
     }
   }
 },
 afficherLibelleLocalisationGeographie(){
   return id =>{
     if(id!=null && id!=""){
       let response = this.localisations_geographiques.find(item => item.id==id)
       if(response){
         return response.libelle
       }
     }
   }
 },
 // afficher procedure passation
 afficherCodeProcedurePassation(){
   return id =>{
     if(id!=null && id!=""){
       let response = this.procedurePassations.find(item => item.id==id)
       if(response){
         return response.code
       }
     }
   }
 },


    CodeTypeMarche() {
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

  
    afficherImputationMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation;
      }
      return 0
        }
      };
    },

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
     afficherMontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_marche;
      }
      return 0
        }
      };
    },



    

     ImputationBudget() {

      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.afficheEconomique.id == this.formData.economique_id);

      if (norme) {
        return norme.codebudget;
      }
      return 0
    },
     
InfastructureCodeNiveau1() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 1);

      if (norme) {
        return norme.code;
      }
      return 0
    },
    InfastructureLibelleNiveau1() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },
    InfastructureCodeNiveau2() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 2);

      if (norme) {
        return norme.code;
      }
      return 0
    },
    InfastructureLibelleNiveau2() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 2);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },
    InfastructureCodeNiveau3() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 3);

      if (norme) {
        return norme.code;
      }
      return 0
    },
    InfastructureLibelleNiveau3() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 3);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },
    InfastructureCodeNiveau4() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 4);

      if (norme) {
        return norme.code;
      }
      return 0
    },
    InfastructureLibelleNiveau4() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 4);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },
    InfastructureCodeNiveau5() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 5);

      if (norme) {
        return norme.code;
      }
      return 0
    },
    InfastructureLibelleNiveau5() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 5);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },
    InfastructureCodeNiveau6() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 6);

      if (norme) {
        return norme.code;
      }
      return 0
    },
    InfastructureLibelleNiveau6() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 6);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },








    NombrePlanInfastructureNiveau1() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element =>element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==1).length
            
        }

 return this.gettersMarcheHorsib.filter(element =>element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==1).length
      
    },
    NombrePlanifInfastructureNiveau1() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element =>element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==1).length
            
        }

 return this.gettersMarcheHorsib.filter(element =>element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==1).length
      
    },

NombrePlanifInfastructureNiveau2() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element =>element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==2).length
            
        }

 return this.gettersMarcheHorsib.filter(element =>element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==2).length
      
    },
    NombrePlanifInfastructureNiveau3() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==3).length
            
        }

 return this.gettersMarcheHorsib.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==3).length
      
    },
    NombrePlanifInfastructureNiveau4() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element =>element.attribue == 0 &&  this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==4).length
            
        }

 return this.gettersMarcheHorsib.filter(element =>element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==4).length
      
    },
    NombrePlanifInfastructureNiveau5() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==5).length
            
        }

 return this.gettersMarcheHorsib.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==5).length
      
    },
    NombrePlanifInfastructureNiveau6() {
      
        if (this.noDCfNoAdmin){
            let colect=[];
            this.gettersMarcheHorsib.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==6).length
            
        }

 return this.gettersMarcheHorsib.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.sib==1 && element.parent_id == null && this.InfastructureNiveau1(element.infrastructure_id)==6).length
      
    },
  },
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),
   
    formatageSomme:formatageSomme,
// afficherModifierMarcheHorSib(id){
// 		this.$router.push({
// 			path:"/modifier-marche-hors-sib/" + id
// 		});
// 	},
    // },
    // fonction pour vider l'input modification
   
    partition:partition,

  getDataPaginate(index){
          this.active_el = index;
          this.page=index
      },
      precedent(){
          this.active_el--
          this.page --
      },
      suivant(){
          this.active_el++
          this.page ++
      },
   
   

    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }

};
</script>

<style scoped>
.taillModal{
  width: 1080px;
   margin: 0 -25%;
   
}
.taillMarche{
  width: 96%;
   margin: 0 -48%;
   
}
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
</style>
