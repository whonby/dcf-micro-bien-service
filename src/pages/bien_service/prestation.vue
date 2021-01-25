
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
           <div>

                                        <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des Missions "
                                              name ="Liste des missions"
                                              worksheet = "Missions"
                                            :data="categorieMissionFiltre">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des categories de missions</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                     <th>Type prestation</th>
                    <th>Libellé</th>
                  <th>Date debut</th>
                  <th>Date fin</th>
                 
                  <th>Objet de prestation</th>
                  
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(prestation, index) in 
                categorieMissionFiltre"
                 :key="prestation.id">

                 <td @dblclick="afficherModalModifierPrestation(index)">
                      {{prestation.relation.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierPrestation(index)">
                      {{prestation.libelle_prestation || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierPrestation(index)">
                      {{prestation.date_debut || 'Non renseigné'}}</td>
                       <td @dblclick="afficherModalModifierPrestation(index)">
                      {{prestation.date_fin || 'Non renseigné'}}</td>


                      

                       <td @dblclick="afficherModalModifierPrestation(index)">
                      {{prestation.objet_prestation || 'Non renseigné'}}</td>
                   
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerPrestation(prestation.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i>Supprimer</span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="categorieMissionFiltre.length">    
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune categorie mission enregistrée </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
            </div>

       
  
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter prestation</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle_prestation" class="span" placeholder="Saisir le libelle_prestation" />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Date debut:</label>
              <div class="controls">
                <input type="date" v-model="formData.date_debut" class="span" placeholder="" />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Date fin:</label>
              <div class="controls">
                <input type="date" v-model="formData.date_fin" class="span" placeholder="" />
              </div>
            </div>
             <div class="control-group">
              <label class="control-label">Objet prestation:</label>
              <div class="controls">
                <input type="date" v-model="formData.objet_prestation" class="span" placeholder="" />
              </div>
            </div>
             
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.libelle_prestation.length  && formData.date_debut.length
             && formData.date_fin.length && formData.objet_prestation.length"
              @click.prevent="ajouterPrestationLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier categorie mission</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

            <div class="control-group">
              <label class="control-label">libelle_prestation:</label>
              <div class="controls">
                <input type="text" v-model="editPrestation.libelle_prestation" class="span" placeholder="" />
              </div>
            </div>
          
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editPrestation.libelle" class="span" placeholder="" />
              </div>
            </div>
        
          </form>              
          </div>
           <div class="modal-footer"> 
             <button
             @click.prevent="modifierPrestationLocal(editPrestation)" class="btn btn-primary"
              href="#">Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->



<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterPrestation()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterPrestation"
        bg-color="green"

  ></fab>

<notifications />


  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'

export default {
  
  data() {
    return {
      json_fields:{
             'Libelle':'libelle',
             'libelle_prestation':'libelle_prestation'
      },
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
     
        formData : {

                libelle_prestation:"",
             date_debut: "",
             date_fin:"",
            objet_prestation:""
            
        },

        editPrestation: {
             libelle_prestation:"",
             date_debut: "",
             date_fin:"",
            objet_prestation:""
        },
            search:""
    };
  },

 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('suivi_controle_budgetaire', ['categories_missions']) ,
   
    // methode pour trier un item
           categorieMissionFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.categories_missions.filter((item) => {
  
     return item.libelle.toLowerCase().includes(searchTerm) 
    

  
  

   }
)
   }
  },

  methods: {
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getCategorieMission', 'ajouterCategorieMission', 
   'modifierCategorieMission','supprimerCategorieMission']),   
   
    afficherModalAjouterPrestation(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
     ajouterPrestationLocal () {
     this.ajouterCategorieMission(this.formData)

        this.formData = {
             libelle_prestation:"",
            libelle: "",
            
         }
     },
// afficher modal
afficherModalModifierPrestation(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editPrestation = this.categories_missions[index];


        
 },
// 
modifierPrestationLocal(){
  this.modifierCategorieMission(this.editPrestation)
  this.$('#modifierModal').modal('hide');
  // this.editPrestation = {
  //   libelle_prestation:"",
  //   libelle:"",
   
  // }
}

  }
};
</script>

