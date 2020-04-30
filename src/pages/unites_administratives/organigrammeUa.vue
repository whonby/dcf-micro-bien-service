
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
         <div>

                                        <!-- <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste plan programme "
                                              name ="Liste plan programme"
                                              worksheet = "plan programme"
                                            :data="localisationsFiltre">
                     <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Organigramme UA</h5>
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
                  <td @dblclick="afficherModalmodifierOrganigrammeUa(index)">
                    {{plan_programme.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalmodifierOrganigrammeUa(index)">
                    {{plan_programme.libelle || 'Non renseigné'}}</td>
                  <td>
                       {{plan_programme.structure_programme.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerOrganigrammeUa(plan_programme.id)"  class="btn btn-danger ">
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
              @supprimer="supprimerOrganigrammeUaLocal"
              @modifier="afficherModalmodifierOrganigrammeUa"></Tree>
          </ul>
            <div v-if="lesPlansParents.length">
            </div>
            <div v-else>
              <div align="center">
              <h4 style="color:red;">Aucun trouvé</h4>
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
                <h3>Ajouter Unité Administrative</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

               <div class="control-group">
              <label class="control-label">Unite d'administrative</label>
              <div class="controls">
              <select v-model="formData.uniteua_id" >
                <option v-for="structure in uniteAdministratives " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>


         
           
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="ajouetProgrammeLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->

<!----- ajouter modal ajouter element enfant   ---->


 <div id="modalAjouterElementEnfant" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter </h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                   <!-- <div class="control-group">
              <label class="control-label">Code parent:</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.code" class="span"  />
              </div>
            </div> -->

             <div class="control-group">
              <label class="control-label">Libéllé parent:</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.libelle" class="span"  />
              </div>
            </div>
<!-- 
               <div class="control-group">
              <label class="control-label">Structure programme:</label>
              
              <div class="controls">
              <select v-model="nouvelElementEnfant.structure_programme_id" >
                <option v-for="structure in uniteAdministratives " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div> -->


            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                   <select v-model="nouvelElementEnfant.libelle" >
                <option v-for="structure in services " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
                <!-- <input type="text" v-model="nouvelElementEnfant.code" class="span" placeholder="Saisir le code" /> -->
              </div>
            </div>
            <!-- <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="nouvelElementEnfant.libelle" class="span3" placeholder="Saisir le libelle" />
              </div>
            </div> -->
           
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="ajouterProgrammeLocalEnfant()" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter element enfant ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier Organigramme</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                    <div class="control-group">
              <label class="control-label">UA</label>
              <div class="controls">
             

              <select v-model="editPlanProgramme.uniteua_id" >
                <option v-for="structure in uniteAdministratives " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>
           
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editPlanProgramme.libelle" class="span3" placeholder="" />
              </div>
            </div>
           

          </form>              
          </div>
           <div class="modal-footer"> 
             <button  
              @click.prevent="modifierOrganigrammeUaLocal(editPlanProgramme)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->


<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalajouterOrganigrammeUa()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalajouterOrganigrammeUa"
        bg-color="green"

  ></fab>

<notifications  />


  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import Tree from '../../pages/parametres_generaux/administratifs/Tree'
export default {
  components: {
    Tree
  },
  data() {
    return { 
    //   json_fields:{
    //     'Code':'code',
    //     'Libelle':'libelle',
    //     'structure programme':'structure_programme.libelle'
    //   },

      parentDossier: {},
      nouvelElementEnfant: {
         
             libelle: "",
          uniteua_id:""
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
                libelle: "",
          uniteua_id:""
        },

        editPlanProgramme: {
             libelle: "",
          uniteua_id:""

        },
        search:""
 
    };
  },
 
  created() {
    //this.getOrganigrammeUa()
    //console.log(this.lesPlansParents)
  },
  computed: {
// methode pour maper notre guetter

...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "getterligneExempter",
                "organigrammeUa"

            ]),
             ...mapGetters("SuiviImmobilisation", ["services"]),
       localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.organigrammeUa.filter((item) => {
  
    return item.libelle.toLowerCase().includes(searchTerm) 
  

   }
)
   },

   lesPlansParents(){
     return this.organigrammeUa.filter(plan => plan.parent == null)
   }

  },
  methods: {
    // methode pour notre action
   
    ...mapActions("uniteadministrative", [
      "getOrganigrammeUa",
      "ajouterOrganigrammeUa",
      "modifierOrganigrammeUa",
      "supprimerOrganigrammeUa"
    ]),
    afficherModalajouterOrganigrammeUa(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouetProgrammeLocal () {
      this.ajouterOrganigrammeUa(this.formData)

        this.formData = {
                code: "",
             libelle: "",
          structure_programme_id:""
        }
    },


     ajouterProgrammeLocalEnfant () {
      // console.log(this.nouvelElementEnfant)
      this.ajouterOrganigrammeUa(this.nouvelElementEnfant)

        this.nouvelElementEnfant = {
                code: "",
             libelle: "",
          structure_programme_id:""
        }
    },

    supprimerOrganigrammeUaLocal(item){
      this.supprimerOrganigrammeUa(item.id)
    },
// afficher modal

 //afficher modal pour ajouter element enfant
	 ajouterElementEnfant(item) {
    this.parentDossier = this.organigrammeUa.find(plan => plan.id == item.id)
    this.nouvelElementEnfant.code = this.parentDossier.code
     this.nouvelElementEnfant.parent = this.parentDossier.id

      this.$('#modalAjouterElementEnfant').modal({
              backdrop: 'static',
              keyboard: false
             });

    },

 // fin

afficherModalmodifierOrganigrammeUa(item){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editPlanProgramme = this.organigrammeUa.find(plan => plan.id == item.id);


        
 },

 
 // vider l'input de modifier
 modifierOrganigrammeUaLocal(){

this.modifierOrganigrammeUa(this.editPlanProgramme)
  this.$("#modifierModal").modal('hide');
this.editPlanProgramme = {
  code:"",
  libelle:"",
  structure_programme_id:""
}
 }


  }
};
</script>

