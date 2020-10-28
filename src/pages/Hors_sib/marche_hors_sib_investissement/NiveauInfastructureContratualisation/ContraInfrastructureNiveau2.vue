
<template>
    
                <div>
                    
                        <!-- <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#Sanit">Sanitaires  </a></li>
                              
                               
                               
                            </ul>
                        </div> -->
                        <div class="widget-content tab-content">
                    <div id="Sanit" class="tab-pane active">
                   
                    <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>{{InfastructureLibelleNiveau1}}</h5>
              <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div>
            </div>
            <div class="span4">
            <br>
          Afficher
         <select name="pets" id="pet-select" v-model="size" class="span3">
            <option value="10">10</option>
            <option value="25">25</option>
           <option value="50">50</option>
       <option value="100">100</option>
      </select>
           Entrer
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
                  <th>Localisation géographie</th>
                  <th>Montant prévu</th>
                  <th title="mouvement du marché">Mouvement marché</th>
                   <th>Statut</th>             
                     <th>Etat du marché</th>
                <th colspan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="activites in partition (ListeMarcheInfrastructureNiveau1, size)[page]"
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
                      {{afficherLibelleLocalisationGeographie(activites.localisation_geographie_id) || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{formatageSomme(parseFloat(activites.montant_marche)) || 'Non renseigné'}}</td>
                    
                    <td>
                         <span v-if="activites.economique_id == CodeExempte(activites.economique_id) ">Exemptée procedure</span>
                         <span v-else>Ligne à marché</span>
                       </td>
               
                  
<td>
                     <button 
                      v-if="activites.attribue == 1"  class="btn  btn-success">
                <span >CT</span>
       
                </button>
                  <button 
                      v-else  class="btn  btn-warning">
                <span title="MARCHE EN EXERCUTER" style="">EX</span>
       
                </button>
                   </td>

<td>
    <router-link :to="{ name: 'detail_hors_sib', params: { id: activites.id }}"
                class="btn btn-default " title="continue la contratualisation">
                  <span class=""><i class=" icon-folder-open"></i></span>
                    </router-link>
</td>
<td>
  <router-link :to="{ name: 'CycleDeVie', params: { id: activites.id }}"
                 class="btn btn-inverse " title="Cycle de vie du marche">
        <span class=""><i class=" icon-calendar"></i></span>
    </router-link>
</td>
<!-- <td>
 <button @click.prevent="modifierModalActeEffetFinancierLocal2(index)"  class="btn btn-info"  title="Basculer en Execution">
        <span class=""><i class="icon-undo" ></i></span></button>
</td>
<td>
  <button @click.prevent="BoutonDeSuppensionMarche(index)"  class="btn btn-danger"  title="Suspendre le marché">
        <span class=""><i class="icon-ban-circle" ></i></span></button>
</td> -->

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
                      <td style="font-weight:bold;"> Total Marché
                      </td>
                     
                      
                      <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantMarcheContraHorSib2))}}
                           
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
              
                   <div class="pagination alternate">
             <ul>
           <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
           <li  v-for="(titre, index) in partition(ListeMarcheInfrastructureNiveau1,size).length" :key="index" :class="{ active : active_el == index }">
           <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
            <li :class="{ disabled : page == partition(ListeMarcheInfrastructureNiveau1,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
           </ul>
        </div>
                        </div>

                      
                    </div>

                

            
            </div>
       
</template>

<script>
   
  
 import { mapGetters, mapActions } from "vuex";
 import { formatageSomme } from "@/Repositories/Repository";
 import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
 import {partition} from '@/Repositories/Repository'
export default {
  components:{
  
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
 'structures_geographiques','localisations_geographiques','getterInfrastrucure']),

    ...mapGetters("horSib", ["gettersMarcheHorsib"]),

 ListeMarcheInfrastructureNiveau1() {
      const st = this.search.toLowerCase();
      return this.afficherListeMarcheHorsSib.filter(type => {
        return (
          type.objet.toLowerCase().includes(st)  ||
          type.montant_marche.toLowerCase().includes(st) 
        );
      });
    },
  montantMarcheContraHorSib2(){
  return this.ListeMarcheInfrastructureNiveau1.filter(element => element.attribue == 1 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.parent_id == null && element.sib==1 && this.InfastructureNiveau1(element.infrastructure_id)==2).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
},
InfastructureLibelleNiveau1() {

      
      const norme = this.getterInfrastrucure.find(normeEquipe => normeEquipe.code == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },
    ListeInfrastructureSanitaire() {
      const st = this.search.toLowerCase();
      return this.marcheHorSibFiltre.filter(type => {
        return (
          type.objet.toLowerCase().includes(st)  ||
          type.montant_marche.toLowerCase().includes(st) 
        );
      });
    },
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

 // afficher la liste des marchés hors sib

 afficherListeMarcheHorSib(){

       return this.gettersMarcheHorsib.filter(item =>item.plan_passation_marche_id==null && item.sib==1)
   
  
 },


 

 // afficher le nommbre demareche hors sib

 nombreMarcheHorsSib(){
   return this.marcheHorSibFiltre.length
 },
// InfastructureNiveau1() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.getterInfrastrucure.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.code;
//       }
//       return 0
//         }
//       };
//     },

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
            return colect.filter(element => element.attribue == 1 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.parent_id == null && element.sib==1 && this.InfastructureNiveau1(element.infrastructure_id)==2 || element.attribue == 2 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.parent_id == null && element.sib==1 && this.InfastructureNiveau1(element.infrastructure_id)==2)
            // return colect.filter(items => {
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // }); 
        }

        return this.gettersMarcheHorsib.filter(element => element.attribue == 1 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.parent_id == null && element.sib==1 && this.InfastructureNiveau1(element.infrastructure_id)==2 || element.attribue == 2 && this.recupererCodeTypeMarche(element.type_marche_id) == 3 && element.parent_id == null && element.sib==1 && this.InfastructureNiveau1(element.infrastructure_id)==2)
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
 

      

 

 
 // afficher procedure passation
//  afficherCodeProcedurePassation(){
//    return id =>{
//      if(id!=null && id!=""){
//        let response = this.procedurePassations.find(item => item.id==id)
//        if(response){
//          return response.code
//        }
//      }
//    }
//  },


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
