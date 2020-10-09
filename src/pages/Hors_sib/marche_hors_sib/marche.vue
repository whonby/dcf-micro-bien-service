
<template>
  <div>
  <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
           <div>
<!-- 
                                       <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des Missions "
                                              name ="Liste des missions"
                                              worksheet = "Missions"
                                            :data="categorieMissionFiltre">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                            <!-- <div align="right" style="cursor:pointer;">
                    <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
                        </div>  -->

                                     </div> <br>
                  
                     <div class="" align="right">
                   <router-link :to="{name:'ajouter_hors_sib'}" tag="a" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter

                   </router-link>
                   </div>
              
                                    
        <div class="widget-box">
         
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des marchés hors sib</h5>
             <div align="right">
        Recherche: <input type="text" v-model="search">

          </div>
             
          </div>
                       <!-- <div class="span4">
            <br>
          Afficher
         <select name="pets" id="pet-select" v-model="size" class="span3">
            <option value="10">10</option>
            <option value="25">25</option>
           <option value="50">50</option>
       <option value="100">100</option>
      </select>
           Entrer
        </div> -->
           <div class="widget-content nopadding">
         
            <table class="table table-bordered table-striped">
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
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="activites  in  marcheHorSibFiltre"
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
                      {{afficherLibelleProcedurePassation(activites.procedure_passation_id) || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{activites.imputation || 'Non renseigné'}}</td>
                                     <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{afficherLibelleLocalisationGeographie(activites.localisation_geographie_id) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModifierMarcheHorSib(activites.id)">
                      {{formatageSomme(parseFloat(activites.montant_marche)) || 'Non renseigné'}}</td>
                 

                   
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerMarcheHorSib(activites.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
              
            </table>
             <!-- <pagination :data="laravelData" @pagination-change-page="getCategorieMission()"></pagination> -->
          
          <!-- <div class="pagination alternate">
              <ul>
               
                <li v-for="(item, index) in 4" :key="item" @click.prevent="paginate(index + 1)"><a href="#" >{{index + 1}}</a></li>
               
                
              </ul>
            </div> -->
           
            <!-- <div v-if="categorieMissionFiltre.length">    
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune categorie mission enregistrée </h6>
              </div>
            </div> -->
          </div>
        </div>

         <!-- <div class="pagination alternate">
             <ul>
           <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
           <li  v-for="(titre, index) in partition(categorieMissionFiltre,size).length" :key="index" :class="{ active : active_el == index }">
           <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
            <li :class="{ disabled : page == partition(categorieMissionFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
           </ul>
        </div> -->





      </div>
              </div>
            </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import {formatageSomme} from "../../../Repositories/Repository"
export default {
  data(){
    return{
      search:""

    }
  },
  created(){

  },
  computed:{
    
 ...mapGetters("horSib", ["gettersMarcheHorsib"]),
  ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa", "budgetEclate","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),

      ...mapGetters("bienService", ["procedurePassations","typeMarches"]),
      ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques']),

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

 //afficher llibelle type de marché
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

 // afficher procedure passation
 afficherLibelleProcedurePassation(){
   return id =>{
     if(id!=null && id!=""){
       let response = this.procedurePassations.find(item => item.id==id)
       if(response){
         return response.libelle
       }
     }
   }
 },
 // afficher le libelle de localisation geographie

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
  },
  methods:{
...mapActions("horSib",["supprimerMarcheHorSib"]),
formatageSomme:formatageSomme,

afficherModifierMarcheHorSib(id){
		this.$router.push({
			path:"/modifier-marche-hors-sib/" + id
		});
	},

  }
  
}
</script>