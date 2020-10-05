
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
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste plan programme "
                                              name ="Liste plan programme"
                                              worksheet = "plan programme"
                                            :data="localisationsFiltre">
                     <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                                        <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des plans programmes</h5>
             </div>
<div class="widget-content ">
            
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
              <h4 style="color:red;">Aucun plan programme trouvé</h4>
              </div>
          </div>
           </div>
        </div>
      </div>
              </div>
            </div>

       

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide ">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan programme</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                      <div class="control-group">
              <label class="control-label">Structure programme:</label>
              <div class="controls">
              <select v-model="formData.structure_programme_id" class="span5" >
                <option v-for="structure in structures_programmes " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>
                    </td>
                  </tr>
                  <tr><td>
                    <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span5" placeholder="Saisir le code" />
              </div>
            </div>
                    </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="control-group">
              <label class="control-label">Libellé:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span5" placeholder="Saisir le libellé" />
              </div>
            </div>
                      </td>
                    </tr>
                </table>             
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.code.length && formData.libelle.length && 
             formData.structure_programme_id"
              @click.prevent="ajouetProgrammeLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->

<!----- ajouter modal ajouter element enfant   ---->


 <div id="modalAjouterElementEnfant" class="modal hide tailgrand">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan programme</h3>
              </div>
              <div class="modal-body">
                      <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                        <div class="control-group">
              <label class="control-label">Code Parent</label>
              <div class="controls">
                 <input type="text" readonly :value="parentDossier.code" class="span5"  />
              </div>
            </div>
                    </td>
                    <td>
                      <div class="control-group">
              <label class="control-label">Libellé Parent</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.libelle" class="span5"  />
              </div>
            </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                   <div class="control-group">
              <label class="control-label">Structure programme</label>
              
              <div class="controls">
              <select v-model="nouvelElementEnfant.structure_programme_id" class="span5">
                <option v-for="structure in structures_programmes " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>
                    </td>
                    <td>
                   <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="nouvelElementEnfant.code" class="span5" placeholder="Saisir le code" />
              </div>
            </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td colspan="2">
                        <div class="control-group">
              <label class="control-label">Libellé:</label>
              <div class="controls">
                 <input type="text" v-model="nouvelElementEnfant.libelle" class="span10" placeholder="Saisir le libelle" />
              </div>
            </div>
                    </td>
                  </tr>
                </table>     
          </div>
           <div class="modal-footer"> 
             <button v-show="nouvelElementEnfant.code.length && nouvelElementEnfant.libelle.length && 
             nouvelElementEnfant.structure_programme_id"
              @click.prevent="ajouterProgrammeLocalEnfant()" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter element enfant ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier plan programme</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                         <div class="control-group">
              <label class="control-label">Structure programme:</label>
              <div class="controls">
              <select v-model="editPlanProgramme.structure_programme_id" class="span5">
                <option v-for="structure in structures_programmes " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editPlanProgramme.code" class="span5" placeholder="" />
              </div>
            </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editPlanProgramme.libelle" class="span5" placeholder="" />
              </div>
            </div>
                    </td>
                  </tr>
                </table>
                           
          </div>
           <div class="modal-footer"> 
             <button  v-show="editPlanProgramme.code.length && editPlanProgramme.libelle.length && 
             editPlanProgramme.structure_programme_id"
              @click.prevent="modifierPlanProgrammeLocal(editPlanProgramme)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
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
import jsPDF from 'jspdf'
import 'jspdf-autotable'
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
        'structure programme':'structure_programme.libelle'
      },

      parentDossier: {},
      nouvelElementEnfant: {
         code: "",
             libelle: "",
          structure_programme_id:""
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
          structure_programme_id:""
        },

        editPlanProgramme: {
            code: "",
             libelle: "",
          structure_programme_id:""

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
   ...mapGetters('parametreGenerauxAdministratif', [ 'structures_programmes',
    'plans_programmes']) ,

       localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.plans_programmes.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
  

   }
)
   },

   lesPlansParents(){
     return this.plans_programmes.filter(plan => plan.parent == null)
   }

  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['getPlanProgramme', 
   'ajouterPlanProgramme','modifierPlanProgramme','supprimerPlanProgramme']), 
   
   

        genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.plans_programmes;
    doc.setFontSize(8)
    doc.text(75,10,"LISTE DES PLANS PROGRAMMES")
  doc.autoTable(this.getColumns(),data)
doc.save('plan_programme.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "CODE", dataKey: "code"},
        {title: "LIBELLE", dataKey: "libelle"},
     
        
    ];
},
   
    afficherModalAjouterPlanProgramme(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouetProgrammeLocal () {
      this.ajouterPlanProgramme(this.formData)

        this.formData = {
                code: "",
             libelle: "",
          structure_programme_id:""
        }
    },

     ajouterProgrammeLocalEnfant () {
      // console.log(this.nouvelElementEnfant)
      this.ajouterPlanProgramme(this.nouvelElementEnfant)

        this.nouvelElementEnfant = {
                code: "",
             libelle: "",
          structure_programme_id:""
        }
    },

    supprimerPlanProgrammeLocal(item){
      this.supprimerPlanProgramme(item.id)
    },
// afficher modal

 //afficher modal pour ajouter element enfant
	 ajouterElementEnfant(item) {
    this.parentDossier = this.plans_programmes.find(plan => plan.id == item.id)
    this.nouvelElementEnfant.code = this.parentDossier.code
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

        this.editPlanProgramme = this.plans_programmes.find(plan => plan.id == item.id);


        
 },

 
 // vider l'input de modifier
 modifierPlanProgrammeLocal(){

this.modifierPlanProgramme(this.editPlanProgramme)
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

<style scoped>
.tailgrand{
  width: 60%;
  margin: 0 -30%;
  
}
</style>