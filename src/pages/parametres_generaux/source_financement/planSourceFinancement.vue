

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
            <h5>Liste des plans source de financement</h5>
             </div>
<div class="widget-content ">
            
                 <ul id="demo">
            <Tree class="item" v-for="plan in lesPlansParents"
            :key="plan.id" :item="plan"   
              @ajouterElementEnfant="ajouterElementEnfant" 
              @supprimer="supprimerPlanSourceFinancementLocal"
              @modifier="afficherModalModifierPlanSourceFinancement"></Tree>
          </ul>
            <div v-if="lesPlansParents.length">
            </div>
            <div v-else>
              <div align="center">
              <h4 style="color:red;">Aucun enregistrement</h4>
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
                <h3>Ajouter plan source de financement</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                      <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
              <select v-model="formData.source_finacement_id" class="span5" >
                <option v-for="structure in sources_financements " :key="structure.id" 
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
             formData.source_finacement_id"
              @click.prevent="ajouterPlanSourceFinancementLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->

<!----- ajouter modal ajouter element enfant   ---->


 <div id="modalAjouterElementEnfant" class="modal hide tailgrand">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan source de financement</h3>
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
              <label class="control-label">Source de financement</label>
              
              <div class="controls">
              <select v-model="nouvelElementEnfant.source_finacement_id" class="span5">
                <option v-for="structure in sources_financements " :key="structure.id" 
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
             nouvelElementEnfant.source_finacement_id"
              @click.prevent="ajouterProgrammeLocalEnfant()" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter element enfant ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier plan source de financement</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                         <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
              <select v-model="editPlanSourceFinancement.source_finacement_id" class="span5">
                <option v-for="structure in sources_financements " :key="structure.id" 
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
                <input type="text" v-model="editPlanSourceFinancement.code" class="span5" placeholder="" />
              </div>
            </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editPlanSourceFinancement.libelle" class="span5" placeholder="" />
              </div>
            </div>
                    </td>
                  </tr>
                </table>
                           
          </div>
           <div class="modal-footer"> 
             <button  v-show="editPlanSourceFinancement.code.length && editPlanSourceFinancement.libelle.length && 
             editPlanSourceFinancement.source_finacement_id"
              @click.prevent="modifierPlanSourceFinancementLocal(editPlanSourceFinancement)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->


<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjoutPlanSourceFinancemnt()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjoutPlanSourceFinancemnt"
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
import Tree from '../administratifs/Tree'
export default {
  components: {
    Tree

  },
  data() {
    return { 
      json_fields:{
        'Code':'code',
        'Libelle':'libelle',
        'source de financement':'source_financement.libelle'
      },

      parentDossier: {},
      nouvelElementEnfant: {
         code: "",
             libelle: "",
          source_finacement_id:""
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
          source_finacement_id:""
        },

        editPlanSourceFinancement: {
            code: "",
             libelle: "",
          source_finacement_id:""

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
  
     ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements','gettersPlanSourceFinancement']),

       localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.gettersPlanSourceFinancement.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
  

   }
)
   },

   lesPlansParents(){
     return this.gettersPlanSourceFinancement.filter(plan => plan.parent == null)
   }

  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxSourceDeFinancement', ['getPlanSourceFinancement', 
   'ajouterPlanSourceFinancement','modifierPlanSourceFinancement','supprimerPlanSourceFinancement']), 
   
   

        genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.gettersPlanSourceFinancement;
    doc.setFontSize(8)
    doc.text(75,10,"LISTE DES PLANS SOURCE DE FINANCEMENT")
  doc.autoTable(this.getColumns(),data)
doc.save('plan_source_finacement.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "CODE", dataKey: "code"},
        {title: "LIBELLE", dataKey: "libelle"},
     
        
    ];
},
   
    afficherModalAjoutPlanSourceFinancemnt(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterPlanSourceFinancementLocal () {
      this.ajouterPlanSourceFinancement(this.formData)

        this.formData = {
                code: "",
             libelle: "",
          source_finacement_id:""
        }
    },

     ajouterProgrammeLocalEnfant () {
      // console.log(this.nouvelElementEnfant)
      this.ajouterPlanSourceFinancement(this.nouvelElementEnfant)

        this.nouvelElementEnfant = {
                code: "",
             libelle: "",
          source_finacement_id:""
        }
    },

    supprimerPlanSourceFinancementLocal(item){
      this.supprimerPlanSourceFinancement(item.id)
    },
// afficher modal

 //afficher modal pour ajouter element enfant
	 ajouterElementEnfant(item) {
    this.parentDossier = this.gettersPlanSourceFinancement.find(plan => plan.id == item.id)
    this.nouvelElementEnfant.code = this.parentDossier.code
     this.nouvelElementEnfant.parent = this.parentDossier.id

      this.$('#modalAjouterElementEnfant').modal({
              backdrop: 'static',
              keyboard: false
             });

    },

 // fin

afficherModalModifierPlanSourceFinancement(item){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editPlanSourceFinancement = this.gettersPlanSourceFinancement.find(plan => plan.id == item.id);


        
 },

 
 // vider l'input de modifier
 modifierPlanSourceFinancementLocal(){

this.modifierPlanSourceFinancement(this.editPlanSourceFinancement)
  this.$("#modifierModal").modal('hide');
this.editPlanSourceFinancement = {
  code:"",
  libelle:"",
  source_finacement_id:""
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