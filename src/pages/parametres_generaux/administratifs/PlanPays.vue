
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
                                              title="Liste plan pays "
                                              name ="Liste plan pays"
                                              worksheet = "plan pays"
                                            :data="getterplan_pays">
                     <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                                        <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des plans des pays</h5>
             <!-- <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div> -->
             
          </div>
         
          <div class="widget-content"> 
            <!-- <table class="table table-bordered table-striped">
              <thead>
                <tr>

                  <th>Code</th>
                  <th>Libellé</th>
                  <th>Structure pays</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(plan_pays, index) in localisationsFiltre" 
                :key="plan_pays.id">
                  <td @dblclick="afficherModalmodifierPlanPays(index)">
                    {{plan_pays.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalmodifierPlanPays(index)">
                    {{plan_pays.libelle || 'Non renseigné'}}</td>
                  <td>
                       {{plan_pays.structure_pays.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerPlanPays(plan_pays.id)"  class="btn btn-danger ">
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
              @supprimer="supprimerPlanPaysLocal"
              @modifier="afficherModalmodifierPlanPays"></Tree>
          </ul>
            <div v-if="lesPlansParents.length">
            </div>
            <div v-else>
              <div align="center">
              <h4 style="color:red;">Aucun plan pays trouvé</h4>
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
                <h3>Ajouter plan pays{{LibelleNiveau(this.formData.structurepays_id)}}</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">

               <div class="control-group">
              <label class="control-label">Structure pays:</label>
              <div class="controls">
              <select v-model="formData.structurepays_id" class="span5">
                <option v-for="structure in getterstructures_pays " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>


            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span5" placeholder="Saisir le code" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span5" placeholder="Saisir le libelle" />
              </div>
            </div>
           
          </table>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.code.length && formData.libelle.length && 
             formData.structurepays_id"
              @click.prevent="ajouetpaysLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->

<!----- ajouter modal ajouter element enfant   ---->


 <div id="modalAjouterElementEnfant" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan pays</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">

                   <div class="control-group">
              <label class="control-label">Code parent:</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.code" class="span5"  />
              </div>
            </div>

             <div class="control-group">
              <label class="control-label">Libéllé parent:</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.libelle" class="span5"  />
              </div>
            </div>

               <div class="control-group">
              <label class="control-label">Structure pays:</label>
              
              <div class="controls">
              <select v-model="nouvelElementEnfant.structurepays_id" class="span5">
                <option v-for="structure in getterstructures_pays " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>


            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="parentDossier.code" class="span5" placeholder="Saisir le code" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="nouvelElementEnfant.libelle" class="span5" placeholder="Saisir le libelle" />
              </div>
            </div>
           
          </table>              
          </div>
           <div class="modal-footer"> 
             <button v-show=" nouvelElementEnfant.libelle.length && 
             nouvelElementEnfant.structurepays_id"
              @click.prevent="ajouterpaysLocalEnfant()" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter element enfant ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier plan pays</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">

                    <div class="control-group">
              <label class="control-label">Structure pays:</label>
              <div class="controls">
              <select v-model="editPlanpays.structurepays_id" class="span5">
                <option v-for="structure in getterstructures_pays " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editPlanpays.code" class="span5" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editPlanpays.libelle" class="span5" placeholder="" />
              </div>
            </div>
           

          </table>              
          </div>
           <div class="modal-footer"> 
             <button  v-show="editPlanpays.code.length && editPlanpays.libelle.length && 
             editPlanpays.structurepays_id"
              @click.prevent="modifierPlanPaysLocal(editPlanpays)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->


<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalajouterPlanPays()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalajouterPlanPays"
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
        'structure pays':'structure_pays.libelle'
      },

      parentDossier: {},
      nouvelElementEnfant: {
         code: "",
             libelle: "",
          structurepays_id:""
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
          structurepays_id:""
        },

        editPlanpays: {
            code: "",
             libelle: "",
          structurepays_id:""

        },
        search:""
 
    };
  },
 
  created() {
    //this.getPlanPays()
    //console.log(this.lesPlansParents)
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', [ 'getterstructures_pays',
    'getterplan_pays']) ,

//        localisationsFiltre(){

//      const searchTerm = this.search.toLowerCase();

// return this.getterplan_pays.filter((item) => {
  
//     return item.code.toLowerCase().includes(searchTerm) 
//     || item.libelle.toLowerCase().includes(searchTerm) 
  

//    }
// )
//    },

   lesPlansParents(){
     return this.getterplan_pays.filter(plan => plan.parent == null)
   },


LibelleNiveau() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterstructures_pays.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 10
        }
      };
    },
  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['getPlanPays', 
   'ajouterPlanPays','modifierPlanPays','supprimerPlanPays']), 
   
   

        genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.getterplan_pays;
    doc.setFontSize(8)
    doc.text(75,10,"LISTE DES PLANS PAYS")
  doc.autoTable(this.getColumns(),data)
doc.save('plan_pays.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "CODE", dataKey: "code"},
        {title: "LIBELLE", dataKey: "libelle"},
     
        
    ];
},
   
    afficherModalajouterPlanPays(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouetpaysLocal () {
      var nouveauObjet={
        ...this.formData,
        
        niveau_structure:this.LibelleNiveau(this.formData.structurepays_id)
      }
      this.ajouterPlanPays(nouveauObjet)
this.$("#exampleModal").modal('hide');
        this.formData = {
                code: "",
             libelle: "",
          structurepays_id:""
        }
    },

     ajouterpaysLocalEnfant () {
      // console.log(this.nouvelElementEnfant)
      var nouveauObjet={
        ...this.nouvelElementEnfant,
        code:this.parentDossier.code,
        niveau_structure:this.LibelleNiveau(this.nouvelElementEnfant.structurepays_id)
      }
      this.ajouterPlanPays(nouveauObjet)
this.$("#modalAjouterElementEnfant").modal('hide');
        this.nouvelElementEnfant = {
                code: "",
             libelle: "",
          structurepays_id:""
        }
    },

    supprimerPlanPaysLocal(item){
      this.supprimerPlanPays(item.id)
    },
// afficher modal

 //afficher modal pour ajouter element enfant
	 ajouterElementEnfant(item) {
    this.parentDossier = this.getterplan_pays.find(plan => plan.id == item.id)
    // this.nouvelElementEnfant.code = this.parentDossier.code
     this.nouvelElementEnfant.parent = this.parentDossier.id

      this.$('#modalAjouterElementEnfant').modal({
              backdrop: 'static',
              keyboard: false
             });

    },

 // fin

afficherModalmodifierPlanPays(item){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editPlanpays = this.getterplan_pays.find(plan => plan.id == item.id);


        
 },

 
 // vider l'input de modifier
 modifierPlanPaysLocal(){

this.modifierPlanPays(this.editPlanpays)
  this.$("#modifierModal").modal('hide');
this.editPlanpays = {
  code:"",
  libelle:"",
  structurepays_id:""
}
 }


  }
};
</script>

