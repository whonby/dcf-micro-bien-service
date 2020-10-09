afficherCodeProcedurePassation
<template>
    <div class="container-fluid">
    
       


    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
         <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#tab2078">Tous les marchés    <span class="badge badge" ></span></a></li>
                               
                               <li ><a data-toggle="tab" href="#tab100"> Planification        <span class="badge badge-important" > </span></a></li>
                                <li ><a data-toggle="tab" href="#tab10"> Contratualisation        <span class="badge badge-success" ></span></a></li>
                                <li><a data-toggle="tab" href="#tab20"> Exécution      <span class="badge badge-warning" ></span></a></li>
                                <!-- <li><a data-toggle="tab" href="#tab208">Marchés Terminés      <span class="badge badge" >     {{0}}</span></a></li> -->
                                 <li><a data-toggle="tab" href="#tab20002">Résiliés    <span class="badge badge-info" > </span></a></li>
                                    <li><a data-toggle="tab" href="#tab20789">Suspendus   <span class="badge badge" > </span></a></li>
                                  <li><a data-toggle="tab" href="#tab2000256"> Terminé    <span class="badge badge-inverse" ></span></a></li>
                                 
                               
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
                        
                     <div class="" align="right">
                   <router-link :to="{name:'ajouter_hors_sib'}" tag="a" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter

                   </router-link> 

                   </div><br>
                         <div id="tab2078" class="tab-pane active">
                             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des March&eacute;s</h5>
              <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div>
            </div>
              <table class="table table-bordered table-striped" >
                <thead>
                <tr>
                    <th>Année</th>
                  <th>UA</th>
                  <th>Reférence marché</th>
                  <th>Objet marché</th>
                  <th>Type de marché</th>
                   <th>Procedure de passation</th>
                  <th>Imputation</th>
                  <th>Localisation géographie</th>
                   <th>Montant prevu</th>
                  <!-- <th title="mouvement du marché">Mouvement marché</th> -->
                    <th>Etat en cours</th>
                    <th>Cycle de vie</th>
                   <th colspan="3">Action</th>
                  </tr>
                </thead>
                <tbody>
                 
                        <tr class="odd gradeX" v-for="activites in 
                marcheHorSibFiltre"
                 :key="activites.id">
                 <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{activites.exo_id || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{afficherLibelleUa(activites.unite_administrative_id) || 'Non renseigné'}}</td>
                      <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{activites.reference_marche || 'Non renseigné'}}</td>
                       <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{activites.objet || 'Non renseigné'}}</td>
                      <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{afficherLibelleTypeMarche(activites.type_marche_id) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{afficherCodeProcedurePassation(activites.procedure_passation_id) || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{activites.imputation || 'Non renseigné'}}</td>
                      <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{afficherLibelleLocalisationGeographie(activites.localisation_geographie_id) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{formatageSomme(parseFloat(activites.montant_marche)) || 'Non renseigné'}}</td>

                      <td>
                    
                      <router-link :to="{ name: 'DetailMarchePs', params: { id: activites.id }}"
                class="btn btn-default " title="historique la contratualisation">
                  <span class=""><i class=" icon-folder-open"></i></span>
                    </router-link>
                   </td>
                   <td >
                        <router-link :to="{ name: 'CycleDeVie', params: { id: activites.id }}"
                 class="btn btn-inverse " title="Cycle de vie du marche">
        <span class=""><i class=" icon-calendar"></i></span>
    </router-link>
                   </td>
                   
                   <td>
                     <router-link :to="{ name: 'detailExecution', params: { id: activites.id }}"
                class="btn btn-default " title="historique execution Marche">
                  <span class=""><i class="  icon-random"></i></span>
                   </router-link> 
                   </td>
           <td>
          
                     <button @click.prevent="supprimerMarche(activites.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
                   </td>
                   
                   

                       </tr>
                        <tr>
                     
                      
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      
                       <td style="font-weight:bold;"> Total Marché
                      </td>
                       <!-- <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantMarche))}}
                           
                      </td> -->
                       <td>
                          
                      </td>
                        <td>
                          
                      </td>
                      
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td>
                          
                      </td>
                       <td>
                          
                      </td>
                    </tr>
                </tbody>
              </table>
          


                        </div>



                    </div>

<!--   
<div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="" href="#">Voir Tableau</a>
       
      </div> -->

                </div>
            </div>
        </div>

         <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->


 <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->

    <!-- <fab :actions="fabActions" @cache="afficherModalAjoutTypaPrestation" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjoutTypaPrestation()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button> -->
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
    </div>
</template>

<script>
 import { mapGetters, mapActions } from "vuex";
 import { formatageSomme } from "../../../../src/Repositories/Repository";
 import {admin,dcf,noDCfNoAdmin} from "../../../../src/Repositories/Auth"
export default {
  name:'type facture',
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
 'structures_geographiques','localisations_geographiques']),

    ...mapGetters("horSib", ["gettersMarcheHorsib"]),
    marcheHorSibFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.afficherListeMarcheHorSib.filter((item) => {
  
     return item.objet.toLowerCase().includes(searchTerm) ||
            item.reference_marche.toLowerCase().includes(searchTerm) 
           //|| item.uabudget_eclate.libelle.toLowerCase().includes(searchTerm) 
   }
)
   },

 // afficher la liste des marchés hors sib

 afficherListeMarcheHorSib(){

       return this.gettersMarcheHorsib.filter(item =>item.plan_passation_marche_id==null && item.sib==1)
   
  
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
afficheLeNomDesProcedureModifier(){
  if(this.afficherMontantImputation(this.ImputationBudgetModifier) == ""){
return "Aucune procedure"
  }
     else if( this.afficherMontantImputation(this.ImputationBudgetModifier) < 10000000){
        return "Procédure Simplifiée de demande de Cotation(PSC Sans comité)"
    }
    else if(this.afficherMontantImputation(this.ImputationBudgetModifier) < 30000000)
    {
return "Procédure Simplifiée de demande de Cotation(PSC Avec comité)"
    }
    else if(this.afficherMontantImputation(this.ImputationBudgetModifier) < 60000000 )
    {
return "Procédure Simplifiée à compétition Limitée(PSL)"
    }
    else if(this.afficherMontantImputation(this.ImputationBudgetModifier) < 100000000 )
    {
return "Procédure Simplifiée à compétition Ouverte(PSO)"
    }
     else if(100000000 < this.afficherMontantImputation(this.ImputationBudgetModifier))
    {
return "Appel d'Offre Ouvert(AON ou AOI)"
    }
    
  return null  


},


afficherMontantImputation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.codebudget == id);

      if (qtereel) {
        return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },
//  afficheIdTypeMarche() {
//     return this.printMarcheNonAttribue.filter(element => element.type_marche.libelle == "Prestations Intellectuelles")
//     },


nombreDejourCalcule(){
                let vM=this;
    const acteAffet = vM.editActeEffetFinancier
    if(acteAffet.date_odre_service == acteAffet.date_fin_exe &&  acteAffet.date_fin_exe !=="" && acteAffet.date_odre_service !=="") return 1
     if(acteAffet.date_fin_exe =="" && acteAffet.date_odre_service =="") return null

       var dateF = new Date(acteAffet.date_fin_exe).getTime()
        var dateO = new Date(acteAffet.date_odre_service).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.editActeEffetFinancier.duree=diffJour
                  return  diffJour;
   
},

getDateFinExécutionValue(){
    return this.editActeEffetFinancier.date_odre_service !=""
},

// afficher libelle unité administrative

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


    afficherPlanificationPA() {
       // const st = this.search.toLowerCase();
        if (this.noDCfNoAdmin){
            let colect=[];
            this.printMarcheNonAttribue.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 4 || element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 1 && element.parent_id == null)
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // }); 
        }

        return this.printMarcheNonAttribue.filter(element => element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 4 || element.attribue == 0 && this.recupererCodeTypeMarche(element.type_marche_id) == 1 && element.parent_id == null)
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

    },



 afficherContratualisationParUA() {
       // const st = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.printMarcheNonAttribue.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 4 && element.attribue == 1 || element.attribue == 1 && this.recupererCodeTypeMarche(element.type_marche_id) == 1 && element.parent_id == null)
            
        }

        return this.printMarcheNonAttribue.filter(element => this.recupererCodeTypeMarche(element.type_marche_id) == 4 && element.attribue == 1 || element.attribue == 1 && this.recupererCodeTypeMarche(element.type_marche_id) == 1 && element.parent_id == null)
           
        

    },

 afficherExecutionPAU() {
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
            return colect.filter(element => this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 4 &&  element.difference_personnel_bienService == 2||this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 1 && element.difference_personnel_bienService == 2) 
           
        }

        return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 4 &&  element.difference_personnel_bienService == 2||this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 1 && element.difference_personnel_bienService == 2)
            
        

    },


afficherResilierPUA() {
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
            return colect.filter(element => this.afficherAttributMarche(element.marche_id) == 3 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 4 && element.difference_personnel_bienService == null|| this.afficherAttributMarche(element.marche_id) == 3 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 1 && element.difference_personnel_bienService == null)
           
        }

        return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 3 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 4 && element.difference_personnel_bienService == null|| this.afficherAttributMarche(element.marche_id) == 3 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 1 && element.difference_personnel_bienService == null)
            
    },

afficherMarcheSupenduPAR_AU() {
       // const st = this.search.toLowerCase();


        if (this.noDCfNoAdmin){
            let colect=[];
            this.printMarcheNonAttribue.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(element => element.attribue == 7 &&  this.recupererCodeTypeMarche(element.type_marche_id) == 1 || element.attribue == 7 && this.recupererCodeTypeMarche(element.type_marche_id) == 4)
           
        }

        return this.printMarcheNonAttribue.filter(element => element.attribue == 7 &&  this.recupererCodeTypeMarche(element.type_marche_id) == 1 || element.attribue == 7 && this.recupererCodeTypeMarche(element.type_marche_id) == 4)
            
        

    },

afficherMarcherTerminerParUA() {
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
            return colect.filter(element => this.afficherAttributMarche(element.marche_id) == 5 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 4 || this.afficherAttributMarche(element.marche_id) == 5 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 1 )
            
        }

        return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 5 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 4 || this.afficherAttributMarche(element.marche_id) == 5 && this.affichertypeMarcheEx(this.affichertypeMarcheID(element.marche_id)) == 1 )
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

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

afficherLaListeDesMarche(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 4 || element.type_marche.code_type_marche == 1)
},


// afficher le nombre du marché

nombreDeMarche(){
  return this.filtre_unite_admin.length;
},

// afficher le montant de tout les marche

// montantMarche(){
//   return this.filtre_unite_admin.reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
// },












afficherDifferentTypeMarche() {
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
afficherCodeTypeMarche() {
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


    afficherAnneeBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exo_id;
      }
      return 0
        }
      };
    },
E() {
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
      ELibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
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
 afficherReferenceMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.reference_marche;
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







 afficherIdUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return 0
        }
      };
    },
   
   
     afficherIdactivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_id;
      }
      return 0
        }
      };
    },
      
 afficherObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    },
    afficherNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
afficherEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    },






   
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
      afficheractivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },


    procedurePassationDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.procedurePassations.filter(
            element => element.type_procedure_id == id
          );
        }
      };
    },
     activiteDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.afficheUA.id == id
          );
        }
      };
    },
          afficheractiviteBienService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParBienService.find(qtreel => qtreel.afficheUA.id == id);

      if (qtereel) {
        return qtereel.afficheActivite.code.concat('  ', qtereel.afficheActivite.libelle);
      }
      return 0
        }
      };
    },

 afficherPlanEconomiqueBienService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParBienService.find(qtreel => qtreel.afficheUA.id == id);

      if (qtereel) {
        return qtereel.afficheEconomique.code.concat('  ', qtereel.afficheEconomique.libelle);
      }
      return 0
        }
      };
    },





    deverouPassation() {
      return this.formData.typeappel_id == "";
    }, 
     deverouPassationModi() {
      return this.editMarche.typeappel_id == "";
    }, 
    deverouGrandNature() {
      return this.formData.unite_administrative_id == "";
    }, 
    deverouactivite() {
      return this.formData.gdenature_id == "";
    },
     deveroueconomiq() {
      return this.formData.activite_id == "";
    },
     economiqueDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },

  grandeNatureDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
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
     ImputationBudgetModifier() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.afficheEconomique.id == this.editMarche.economique_id);

      if (norme) {
        return norme.codebudget;
      }
      return 0
    },
    nombreJourTraitementCalucle(){
   let date = new Date();
        let aaaa = date.getFullYear();
        let gg = date.getDate();
        let mm = (date.getMonth() + 1);
        let moi;
        let jour;
        if (gg < 10)
        {
            jour = "0" + gg;
        }else{
            jour = gg
        }


        if (mm < 10)
        {
            moi = "0" + mm;
        }else{
            moi=mm;
        }


        let cur_day = aaaa + "-" + moi + "-" + jour;

        return cur_day


    
    // return cur_day + " " + hours + ":" + minutes + ":" + seconds;
   },
   afficheMarchExecuter(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 4 &&  element.difference_personnel_bienService == 2||this.afficherAttributMarche(element.marche_id) == 2 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 1 && element.difference_personnel_bienService == 2)
},
 affichertypeMarcheEx() {
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
    affichertypeMarcheID() {
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
    nbreMarcheExecuter(){
  return this.afficherExecutionPAU.length
},
// afficheMarchExecuter(){
// return this.afficheExercution.filter(element => element.indicateur_resilie != 1)
// },

// afficheNombreMarchExecuter(){
//   return this.marches.filter(element => element.afficherCodeTypeMarche(afficherDifferentTypeMarche(marche.marche_id)) == 4).length

// },



afficheMarcheTerminer(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 5 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 4 || this.afficherAttributMarche(element.marche_id) == 5 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 1 )
},
// afficheMarcheTerminer(){
// return this.afficheMarcheSolde.filter(element => element.indicateur_resilie != 1)
// },
nombreAfficheMarcheSolde(){
return this.afficherMarcherTerminerParUA.length
},
montantEnSolde(){
  return this.afficherMarcherTerminerParUA.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},





// afficheParMarcheEnExecution(){
// return this.afficheExercution.filter(element => element.indicateur_resilie != 1)
// },




  afficheMarcheResilier(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => this.afficherAttributMarche(element.marche_id) == 3 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 4 && element.difference_personnel_bienService == null|| this.afficherAttributMarche(element.marche_id) == 3 && this.affichertypeMarcheEx(element.marche.type_marche_id) == 1 && element.difference_personnel_bienService == null)
},



// afficheMarcheResilier(){
// return this.afficheResilier.filter(element => element.indicateur_resilie == 1)
// },





afficheNombreMarcheResilier(){
return this.afficherResilierPUA.length
},

// afficher la liste de marche en contratualisation

afficheMarcheEnCoursContratualisation(){
return this.afficherLaListeDesMarche.filter(element => element.attribue == 1 &&  this.recupererCodeTypeMarche(element.type_marche_id) == 1 || element.attribue == 1 && this.recupererCodeTypeMarche(element.type_marche_id) == 4  )
},
afficheMarcheSuspendu(){
return this.afficherLaListeDesMarche.filter(element => element.attribue == 7 &&  this.recupererCodeTypeMarche(element.type_marche_id) == 1 || element.attribue == 7 && this.recupererCodeTypeMarche(element.type_marche_id) == 4  )
},
nombreDeMarcheSuspendu(){
   return this.afficherMarcheSupenduPAR_AU.length;

 },
// afficher le montant de marche en contratualisation
montantSuspendu(){
  return this.afficheMarcheSuspendu.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},

// afficher le nombre de marche en contratualisation
 nombreDeMarcheEnContratualisation(){
   return this.afficherContratualisationParUA.length;

 },

// afficher le montant de marche en contratualisation
montantEnContratualisation(){
  return this.afficherContratualisationParUA.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},



// afficher la liste des marche en planification
afficheMarcheEnPlanification(){
return this.afficherLaListeDesMarche.filter(element => element.attribue == 0 && element.type_marche.code_type_marche == 4 || element.attribue == 0 && element.type_marche.code_type_marche == 1)
},


// afficher le nombre des marches en planifications

nombreMarcheEnplanification(){
  return this.afficherPlanificationPA.length;
},


// afficher le montant en planification

montantEnPlanification(){
  return this.afficherPlanificationPA.reduce((prec, cur) => parseFloat(prec)+ parseFloat(cur.montant_marche), 0)
},











//  afficheContrat(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => element.date_odre_service > this.nombreJourTraitementCalucle)
// },

NombreafficheContrat(){
return this.marches.filter(element => element.attribue == 1).length
},
NombreExecute(){
return this.getActeEffetFinancierPersonnaliser45.filter(element => element.date_odre_service == this.nombreJourTraitementCalucle).length
},
    // ImputationBudgetModif() {
      
    //   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.editMarche.Economique);

    //   if (norme) {
    //     return norme.codebudget;
    //   }
    //   return 0
    // },
    MontatantImputationBudget() {
      
      const norme = this.getPersonnaliseBudgetGeneral.find(normeEquipe => normeEquipe.economique_id == this.formData.Economique);

      if (norme) {
        return norme.Dotation_Initiale;
      }
      return 0
    },





sommeMarcheParMandat: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
        
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
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
recupererMontantReel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
comparerMontantReelEtMandat(){
return this.marches.filter(element => {
  if(this.recupererMontantReel(element.id) == this.sommeMarcheParMandat(element.id)){

return element;


}
})

},

recupererDateMiseService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.date_odre_service;
      }
      return 0
        }
      };
    },



// sommeMarcheParMandat: function () {
//                 return id => {
//                     if (id != "") {
//                       let valInite=0;
//                         return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
//                            return total + parseFloat(currentVal.total_general)
//                         },valInite);
//                     }
//                 }
//             },


// recupererMontantReel() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

//       if (qtereel) {
//         return qtereel.montant_act;
//       }
//       return 0
//         }
//       };
//     },
    
// comparerMontantReelEtMandat(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => {
//   if(this.recupererMontantReel(element.id) == this.sommeMarcheParMandat(element.id)){

// return element;


// }
// else{
//   return ""
// }
// })

// }










  },
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),
      modifierModalResiliation(){
      var nouvelObjet1 = {
      ...this.editActeEffetFinancier,
      indicateur_resilie :this.indicateur_test,
        date_resiliation:this.editActeEffetFinancier.date_resiliation,
        	cause_resiliation:this.editActeEffetFinancier.cause_resiliation
       };
       
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
         marcheObjet.attribue = 3

    this.modifierMarche(marcheObjet)
     this.modifierActeEffetFinancier(nouvelObjet1)
      this.getMarche()
      this.getActeEffetFinancier()
    //   let marcheObjet=this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
    // marcheObjet.attribue = 3
    //   //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
    //  this.modifierMarche(marcheObjet)

      
      this.$('#exampleModal').modal('hide');
    },
      afficherModalMarcheResilier(index) {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editActeEffetFinancier = this.afficheMarchExecuter[index];
    },
    //afiicher modal ajouter
    afficherModalAjoutTypaPrestation() {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalTypePrestationLocal(){
      
       var nouvelObjet = {
      ...this.formData,
      imputation :this.ImputationBudget,
      exo_id : this.anneeAmort
       };
this.ajouterMarche(nouvelObjet)
this.formData = {
            objet:"",
            livrable:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                type_financement:"",
                Bénéficiaire:"",
                Source_de_financement:"",
                Nature_des_prix:"",
                unite_administrative_id:"",
                imputation:"",
                	activite_id:""
}

    },
    formatageSomme:formatageSomme,
afficherModifierMarcheHorSib(id){
		this.$router.push({
			path:"/modifier-marche-hors-sib/" + id
		});
	},
    // },
    // fonction pour vider l'input modification
    modifierModalTypeprestationLocal(){
       var nouvelObjet = {
      ...this.editMarche,
      imputation :this.ImputationBudgetModifier,
      exo_id : this.anneeAmort,
      activite_id:this.editMarche.activite_id,
      economique_id:this.editMarche.economique_id
       };
      this.modifierMarche(nouvelObjet)
      this.$('#modificationModal').modal('hide');
    },
    


    // afficher modification de l'acte a effet financier

        afficherModalModifierActeEffetFinancier(index){
    this.$('#modifierActeEF').modal({
        backdrop: 'static',
        keyboard: false
    });
    this.editActeEffetFinancier = this.afficheMarchExecuter[index]
}, 

modifierModalActeEffetFinancierLocal(index){
    
    if ( confirm( "Voulez-vous basculer en Contractualisation ?") ) {
   
     this.editActeEffetFinancier = this.afficheMarchExecuter[index]
    
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.marche_id)
         marcheObjet.attribue = 1

    this.modifierMarcheBascule(marcheObjet)
} else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
    
     
   
},

  modifierModalActeEffetFinancierLocal2(index){
   
    if ( confirm( "Avez-vous terminé les etapes avant de migrer en execution svp ?") ) {
this.editActeEffetFinancier = this.afficheMarcheEnCoursContratualisation[index]
 if(this.recupererDateMiseService(this.editActeEffetFinancier.id) == null || this.recupererDateMiseService(this.editActeEffetFinancier.id) == "" ){
 
      alert("Etapes Non Terminé,Vérifier la date de mise en service svp")
    }
     else if ( confirm( "Voulez-vous basculer en Execution ?") ) {
   
     this.editActeEffetFinancier = this.afficheMarcheEnCoursContratualisation[index]
    
      let marcheObjet = this.marches.find(marche=>marche.id==this.editActeEffetFinancier.id)
         marcheObjet.attribue = 2

    this.modifierMarcheBascule(marcheObjet)
} 
else{
 // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
    }
  
},

  BoutonDeSuppensionMarche(index){
   
   if ( confirm( "Etes-vous sur de suspendre le marché ?") ) {
   
     this.editMarche = this.afficheMarcheEnCoursContratualisation[index];
    
      let marcheObjet = this.marches.find(marche=>marche.id==this.editMarche.id)
         marcheObjet.attribue = 7

    this.modifierMarcheBascule(marcheObjet)
} 
else{
 // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}
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
