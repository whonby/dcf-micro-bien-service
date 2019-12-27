
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
                                              title="Liste service gestionnaire "
                                              name ="Liste service gestionnaire"
                                              worksheet = "service gestionnaire"
                                            :data="localisationsFiltre">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste service gestionnaires</h5>
             <!-- <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div> -->
             
          </div>
         
          <div class="widget-content"> 
            <!-- <table class="table table-bordered table-striped">
              <thead>
                <tr>

                  <th>Code</th>
                  <th>Libelle</th>
                  <th>Structure programme</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(plan_programme, index) in localisationsFiltre" 
                :key="plan_programme.id">
                  <td @dblclick="afficherModalModifierPlanProgramme(index)">
                    {{plan_programme.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierPlanProgramme(index)">
                    {{plan_programme.libelle || 'Non renseigné'}}</td>
                  <td>
                       {{plan_programme.structure_programme.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerPlanProgramme(plan_programme.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table> -->
                 <ul id="demo">
            <Tree class="item" v-for="plan in lesPlansParents"
            :key="plan.id" :item="plan"   
              @ajouterElementEnfant="ajouterElementEnfant" 
              @supprimer="supprimerPlanProgrammeLocal"
              @modifier="afficherModalModifierPlanProgramme"></Tree>
          </ul>
            <div v-if="lesPlansParents.length">
            </div>
            <div v-else>
              <div align="center">
              <h6 style="color:red;">Aucun service gestionnaire enregistré ! </h6>
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
                <h3>Ajouter service gestionnaires</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                   <div class="control-group">
              <label class="control-label">structure administrative:</label>
              <div class="controls">
                <select  v-model="formData.structure_administrative_id">
            <option v-for="administrative in structures_administratives" :key="administrative.id" 
            :value="administrative.id">{{administrative.libelle}}</option>
                </select>
              </div>
            </div>

            <!-- <div class="control-group">
              <label class="control-label">Ordre:</label>
              <div class="controls">
                <input type="number" v-model="formData.ordre" class="span" placeholder="Saisir l'ordre" />
              </div>
            </div> -->
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
            
            
           
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button  v-show="formData.code.length && formData.libelle.length && 
            formData.structure_administrative_id" 
             @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->

<!----- ajouter modal ajouter element enfant   ---->


 <div id="modalAjouterElementEnfant" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter service gestionnaires</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                   <div class="control-group">
              <label class="control-label">Code parent:</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.code" class="span"  />
              </div>
            </div>

             <div class="control-group">
              <label class="control-label">Libéllé parent:</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.libelle" class="span"  />
              </div>
            </div>

               <div class="control-group">
              <label class="control-label">structure administrative:</label>
              
              <div class="controls">
              <select v-model="nouvelElementEnfant.structure_administrative_id" >
                <option v-for="structure in structures_administratives " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>


            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="nouvelElementEnfant.code" class="span" placeholder="Saisir le code" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="nouvelElementEnfant.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
           
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="nouvelElementEnfant.code.length && nouvelElementEnfant.libelle.length && 
             nouvelElementEnfant.structure_administrative_id"
              @click.prevent="ajouterProgrammeLocalEnfant()" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter element enfant ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier service gestionnaires</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                <div class="control-group">
              <label class="control-label">structure administrative:</label>
              <div class="controls">
                <select  v-model="editGestionnaire.structure_administrative_id">
            <option v-for="administrative in structures_administratives" :key="administrative.id" 
            :value="administrative.id">{{administrative.libelle}}</option>
                </select>
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editGestionnaire.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editGestionnaire.libelle" class="span" placeholder="" />
              </div>
            </div>
            
               <!-- <div class="control-group">
              <label class="control-label">Ordre:</label>
              <div class="controls">
                <input type="text" v-model="editGestionnaire.ordre" class="span" placeholder="" />
              </div>
            </div> -->

             

          </form>              
          </div>
           <div class="modal-footer"> 
             <button  v-show="editGestionnaire.code.length && editGestionnaire.libelle.length && 
                 editGestionnaire.structure_administrative_id"
             @click.prevent="modifierServiceGestionnaireLocal(editGestionnaire)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" >Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->


<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterPlanProgramme()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterPlanProgramme"
        bg-color="green"

  ></fab>

<notifications  />


  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import Tree from './Tree'
export default {
  components: {
    Tree
  },
  data() {
    return { 
      json_fields:{
        'Code':'code',
        'Libelle':'libelle',
        'structure administrative':'structure_administrative_id.libelle'
      },

      parentDossier: {},
      nouvelElementEnfant: {
         code: "",
             libelle: "",
          structure_administrative_id:""
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
                code: "",
             libelle: "",
          structure_administrative_id:""
        },

        editGestionnaire: {
            code: "",
             libelle: "",
          structure_administrative_id:""

        },
        search:""
 
    };
  },
 
  created() {
    //this.getPlanProgramme()
    //console.log(this.lesPlansParents)
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxAdministratif', ['structures_administratives',
    'services_gestionnaires'])  ,

       localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.services_gestionnaires.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
  

   }
)
   },

   lesPlansParents(){
     return this.services_gestionnaires.filter(plan => plan.parent == null)
   }

  },
  methods: {
    // methode pour notre action
    ...mapActions('parametreGenerauxAdministratif', ['getServiceGestionnaire', 'ajouterServiceGestionnaire', 
   'supprimerServiceGestionnaire', 'modifierServiceGestionnaire']),   
   
    afficherModalAjouterPlanProgramme(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouetProgrammeLocal () {
      this.ajouterServiceGestionnaire(this.formData)

        this.formData = {
                code: "",
             libelle: "",
          structure_administrative_id:""
        }
    },

     ajouterProgrammeLocalEnfant () {
      // console.log(this.nouvelElementEnfant)
      this.ajouterServiceGestionnaire(this.nouvelElementEnfant)

        this.nouvelElementEnfant = {
                code: "",
             libelle: "",
          structure_administrative_id:""
        }
    },

    supprimerPlanProgrammeLocal(item){
      this.supprimerServiceGestionnaire(item.id)
    },
// afficher modal

 //afficher modal pour ajouter element enfant
	 ajouterElementEnfant(item) {
    this.parentDossier = this.services_gestionnaires.find(plan => plan.id == item.id)
     this.nouvelElementEnfant.parent = this.parentDossier.id

      this.$('#modalAjouterElementEnfant').modal({
              backdrop: 'static',
              keyboard: false
             });

    },

 // fin

afficherModalModifierPlanProgramme(item){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editGestionnaire = this.services_gestionnaires.find(plan => plan.id == item.id);


        
 },

 
 // vider l'input de modifier
 modifierServiceGestionnaireLocal(){

this.modifierServiceGestionnaire(this.editGestionnaire)
this.editGestionnaire = {
  code:"",
  libelle:"",
  structure_administrative_id:""
}
 }


  }
};
</script>

