
<template>
    <div class="container-fluid">

            
        <hr>
    <div class="row-fluid">     

      <div class="span12">

      <div class="widget-box">

          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1">Toutes les missions</a></li>
               <!-- <li><a data-toggle="tab" href="#tab2">Tous les dossiers en attente</a></li>  -->
               <!-- <li><a data-toggle="tab" href="#tab3">Tous les dossiers visés</a></li> 
              <li><a data-toggle="tab" href="#tab4">Tous les dossiers differés</a></li>
            <li><a data-toggle="tab" href="#tab5">Tous les dossiers rejetés</a></li>   -->
                
              
            </ul>
           
          </div>
          <div class="widget-content tab-content">
            <div id="tab1" class="tab-pane active">

                                           <div>

                                        <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des Missions "
                                              name ="Liste des missions"
                                              worksheet = "Missions"
                                            :data="appelOffreFiltre">
                         <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                     </div> <br>

                               <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Liste de toutes les missions  <br /></h5>
                                           
                                       
                                             


                                            
                                        <div align="right">
                                
                                            Rechercher: <input type="text" v-model="search">
                                           
                                        </div>
                                        
                                    </div>
                                    
                          <div class="widget-content nopadding" v-if="uniteAdministratives.length">
                                    <!-- <div class="" align="left">
                                   

                                           <div class="span3">


                                          <model-list-select style="background-color: rgb(222, 222, 222);"
                                           class="wide"

                                            :list="uniteAdministratives"
                                            v-model="ua_id"
                                                option-value="id"
                                                option-text="libelle"
                                                placeholder="saisissez UA"
                                            >
                                           
                                    </model-list-select> 
                                           
                                                      </div> 
                                        
                                         <div class="span3">


                                          <model-list-select style="background-color: rgb(222, 222, 222);"
                                           class="wide"

                                            :list="uniteAdministratives"
                                            v-model="acte_personnel_id"
                                                option-value="id"
                                                option-text="matricule"
                                                placeholder="saisissez l'acteur de depense"
                                            >
                                           
                                    </model-list-select> 
                                           
                                                      </div> 
                                          <div align="right">
                                          <span @click.prevent="" class="btn">
                                            <i class="icon-search"></i></span>
                                            </div>
                                        </div> <br> -->

                       <table class="table table-bordered table-striped">
                          <thead>
                          <tr>
                   <th>Type de marché</th>
                  <th> UA</th>
                   <th>Référence appel</th>
                  <th> Type d'appel</th>
                  <th>Financement</th>
                  <th>Nom bailleur</th>
                  <th>Date d'émission</th>
                  <th>Date limite</th>
                   <th>Action</th>
                </tr>                              
              </thead> 
              <tbody>
                <tr  class="odd gradeX" v-for="appel in 
                appelOffreFiltre"
               
                 :key="appel.id">
                 
                  <td @dblclick="afficherModificationAppelOffre(appel.id)">
                     {{appel.typeMarche.libelle}}</td> 
                  <td @dblclick="afficherModificationAppelOffre(appel.id)">
                      {{appel.objetUniteAdministrative.libelle || 'Non renseigné'}}</td> 
                 <td @dblclick="afficherModificationAppelOffre(mission.id)">
                      {{appel.ref_appel || 'Non renseigné'}}</td>

                    <td 
                    @dblclick="afficherModificationAppelOffre(appel.id)">
                      {{appel.type_appel|| 'Non renseigné'}}
                      </td>

                      <td @dblclick="afficherModificationAppelOffre(appel.id)">

                      {{ appel.financement || 'Non renseigné'}}</td>

                
                       <td @dblclick="afficherModificationAppelOffre(appel.id)">
                      {{appel.nom_bailleurs || 'Non renseigné'}}</td>
                            
                    <td @dblclick="afficherModificationAppelOffre(appel.id)">
                     {{formaterDate(appel.date_emission)}}</td> 

                       <td @dblclick="afficherModificationAppelOffre(appel.id)">
                     {{formaterDate(appel.date_limite)}}</td> 

                     
                    
                   

                  <td>


              <div class="btn-group">
                <router-link :to="{ name: 'detailAppelOfre', params: { id_appel: appel.id }}" 
                class="btn btn-default " title="Detail appel offre">
                  <span class=""><i class="icon-folder-open"></i></span>
                   </router-link> 
                    
              <button @click.prevent="supprimerAppelOffre(appel.id)"  class="btn btn-danger " 
              title="supprimer">
                <span class=""><i class="icon-trash"> </i>  Supprimer</span></button>
             
            </div>
                  </td>
                </tr>
              </tbody>
            </table>


              </div>
              <div v-else>
                Aucun appel d'offre
              </div>
               </div>

             </div>






                </div>

 




  



      </div>
      </div>
    </div> 









 <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="AllerPageAjouterAppelOffre()">Open</button>

   <fab :actions="fabActions"
           main-icon="apps"
       @cache="AllerPageAjouterAppelOffre"
        bg-color="green"

  ></fab>  




<notifications  />

    
               
   </div>

</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions, mapMutations} from 'vuex'
//  import {  ModelListSelect } from 'vue-search-select'
  import 'vue-search-select/dist/VueSearchSelect.css'
  import moment from "moment";
  import {formatageSomme} from '../../../Repositories/Repository'
  


export default {
    components:{
  // ModelListSelect,

    },
  
  data() {
    return {

         json_fields: {
            'Exercice budgetaire': 'objetExerciceBudegetaire.annee',
            'categorie': 'categorie_mission.libelle',
            'Objet': 'objet',
            'Type de mission': 'type_mission',
            'UA': 'objetUniteAdministrative.libelle',
           
        },
        //  historiqueFiltre:"",

        fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
 exercice_budgetaire_id:"",
 ua_id:"",
 acte_personnel_id:"",


     formData:{
        observation:"",
        motif:"",
        date_operation: new Date(),
        type_operation:"",
       
        
     },
     editMission:{},
     missionAChangerLaDecision: {},

        selectedFile:"",
    search:"",
    
    historique:""

    };
  },

// mounted(){
//  this.formData = this.missions.find(
//    mission => mission.id == this.$router.params.id
//  )
// },
 
  created() {
    //  this.getStructureActivite()
      //  var montant = this.getMissionPersonnaliser.filter(element => element.objetUniteAdministrative.id == ua_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0)
   // console.log(montant)
  
  },
  computed: {


    // dureTraitementDuDossier(){

    //   const form = this.formData

    //   if(form.temps_arrive == form.temps_traitement && form.temps_arrive !=="" && form.temps_traitement !=="") return 1
    //   if(form.temps_arrive == "" && form.temps_traitement =="") return null

    //   varTA = new Time(form.temps_arrive).getTime()
    //   varTT = new time(form.temps_traitement).getTime()

    //   var diffTime = varTA - varTT

    //   return diffTime


    // },

   
    // getMissionStyles(){
    //   return item => {
    //     if(item.historique_missions_count == 0) return
    //      const style = {
    //     'text-decoration': item.historique_missions[0].type_operation == 2 ? 'line-through' : 'none'
    //   }

    //   return style

    //   }
     
    // },

   
//  listeHistoriqueDeTousMissionsEnAttente(){
  
// return this.historiques_missions.filter( element => element.type_operation != 2 )
//  },


 
    
// methode pour maper notre guetter
   ...mapGetters("bienService", ['appelOffres','typeMarches', 'getAppelOffresPersonnaliser']),
     

   ...mapGetters('uniteadministrative', ['uniteAdministratives']),
 

  //  format(){
  //    return this.searchFormat(this.searchAnneeBudgetaire, this.searchUA, this.searchActeurDepense)
  //  },
    // methode pour trier un item
           appelOffreFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.getAppelOffresPersonnaliser.filter((item) => {
  
     return item.nom_bailleurs.toLowerCase().includes(searchTerm) 
     
    //  || item.objetUniteAdministrative.libelle.toLowerCase().includes(searchTerm)
    //   || item.objetActeurDepense.matricule.toLowerCase().includes(searchTerm)

    

   }
)
   },



   // fonction pour filtrer historique de mission
  

   

  },

  methods: {
    // methode pour notre action
  ...mapMutations('suivi_controle_budgetaire', ['MODIFIER_STATUS_MISSION']),
   ...mapActions('suivi_controle_budgetaire', ['getMission','supprimerAppelOffre', 'modifierMission' ,'ajouterHistoriqueMission' , 'supprimerHistoriqueMission']),  
   
   
    AllerPageAjouterAppelOffre(){
    
    this.$router.push({
        name: 'ajouterAppelOffre'
    })
    },


    

// afficher modal modifier mission
afficherModificationAppelOffre(id){

 this.$router.push({
   path:"/modification-appel-offre/" + id
 });
       
 },




// affichier modal ajout decision cf
    //  afficherModalDecisionCf(mission){
    //    this.$('#modalDecisionCf').modal({
    //           backdrop: 'static',
    //           keyboard: false
    //          });

    //       this.missionAChangerLaDecision = mission   
    // },


    // afficher tableau historique de mission
    // afficherTableauHistoriqueMission(){

    //  this.$('#modalTableauHistoriqueMission').modal({

    //  })
    // },


// ajouterDecisionCfLocal(){
//   var objetPourHistorique = {
//     ...this.formData,
//     mission: this.missionAChangerLaDecision.id 
//     }
//   this.ajouterHistoriqueMission(objetPourHistorique)
//   this.$('#modalDecisionCf').modal('hide')
//   this.formData = {
//     motif:"",
//     observation:"",
//     type_operation:"",
//     date_operation:"",
 
    
//   }
  
// },

 

// formatage date
formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

    // formatage montant
    formatageSomme:formatageSomme,

  }
};
</script>

