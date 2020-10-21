
<template>
    <div>
<div id="tab100" class="tab-pane ">
        <div class="widget-title">
              <span class="icon">
            <i class="icon-th"></i>
              </span>
              <h5>Liste des Marchés en contratualisation </h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
            <table class="table table-bordered table-striped">
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
                   <tr class="odd gradeX" v-for="activites in 
                afficherContratualisationParUA"
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
                           {{formatageSomme(parseFloat(montantMarche))}}
                           
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
</template>
<script>
import {mapGetters,mapActions} from "vuex";
import {admin,dcf,noDCfNoAdmin} from "../../../../Repositories/Auth"
import {formatageSomme} from "../../../../Repositories/Repository"
export default {
    data(){
        return{

        }
    },
    created(){

    },
    computed:{
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
     // afficher la liste des marchés hors sib

//  afficherListeMarcheHorsSib(){

//        return this.gettersMarcheHorsib.filter(item =>item.plan_passation_marche_id==null && item.sib==1 && item.attribue==1)
//  },
 // afficher nombreMarcheEnPlanification

 nombreMarchePlanifierHorSib(){
   return this.afficherContratualisationParUA.length
 },

     montantMarche(){
  return this.afficherContratualisationParUA.reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_marche), 0)
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

    // afficher le nombre de marche hors sib


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
    },
    methods:{
 ...mapActions("horSib",['']),
 formatageSomme:formatageSomme,
    }
}
</script>