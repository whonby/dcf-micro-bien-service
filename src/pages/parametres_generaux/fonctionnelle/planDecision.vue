
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
                                              title="Liste plan décisionnelles "
                                              name ="Liste plan décisionnelles"
                                              worksheet = "plan décisionnelles"
                                            :data="localisationsFiltre">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>
                           <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div> 
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des plans décisionnels</h5>
             <div align="right">
        Recherche: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content ">
            <!-- <table class="table table-bordered table-striped">
              <thead>
                <tr>
                 <th>Code</th>
                  <th>Libelle</th>
                  <th>Structure fonctionnelles</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(plan_fonctionnel, index) 
                in localisationsFiltre" :key="plan_fonctionnel.id">
                  <td @dblclick="afficherMoadlModifierLocalisation(index)">
                    {{plan_fonctionnel.code || 'Non renseigné'}}</td>
                   <td @dblclick="afficherMoadlModifierLocalisation(index)">
                    {{plan_fonctionnel.libelle || 'Non renseigné'}}</td>
                    
                   <td @dblclick="afficherMoadlModifierLocalisation(index)">
                      {{plan_fonctionnel.structure_fonctionnelle.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerPlanDecision(plan_fonctionnel.id)"  class="btn btn-danger ">
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
              @modifier="afficherMoadlModifierLocalisation"></Tree>
          </ul>
            <div v-if="lesPlansParents.length">
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucun plan décisionnel enregistré ! </h6>
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
                <h3>Ajouter plan décisionnel</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                   <div class="control-group">
              <label class="control-label">Structure décisionnelle:</label>
              <div class="controls">
                <select  v-model="formData.structure_motif_decission_id">
            <option v-for="plan in structuresDecision" :key="plan.id" 
            :value="plan.id">{{plan.libelle}}</option>
                </select>
              </div>
            </div>
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
             <button v-show="formData.structure_motif_decission_id && 
             formData.code.length && 
             formData.libelle.length"
              @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              >Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->

<!----- ajouter modal ajouter element enfant   ---->


 <div id="modalAjouterElementEnfant" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan décisionnel</h3>
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
              <label class="control-label">Structure décisionnelle:</label>
              
              <div class="controls">
              <select v-model="nouvelElementEnfant.structure_motif_decission_id" >
                <option v-for="structure in structuresDecision " :key="structure.id" 
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
             nouvelElementEnfant.structure_motif_decission_id"
              @click.prevent="ajouterProgrammeLocalEnfant()" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter element enfant ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier plan décisionnelle</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                   <div class="control-group">
              <label class="control-label">Structure décisionnelle:</label>
              <div class="controls">
                <select  v-model="editTitre.structure_motif_decission_id">
            <option v-for="plan in structuresDecision" :key="plan.id" 
            :value="plan.id">{{plan.libelle}}</option>
                </select>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editTitre.structure_motif_decission_id && editTitre.code.length && 
             editTitre.libelle.length"
             @click.prevent="modifierLocalisationLocal(editTitre)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->


<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterplanFonctionnel()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterplanFonctionnel"
        bg-color="green"

  ></fab>

<notifications  />


  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import Tree from '../administratifs/Tree'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
   components: {
    Tree
  },
  data() {
    return {
      json_fields:{
       'Code':'code',
       'Libelle':'libelle',
       'structure fonctionnelle':'structure_fonctionnelle.libelle'

      },

         parentDossier: {},
      nouvelElementEnfant: {
         code: "",
             libelle: "",
          structure_motif_decission_id:""
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
             structure_motif_decission_id:""
        },

        editTitre: {
            code: "",
             libelle: "",
             structure_motif_decission_id:""
        },
           search:""
    };
  },
 
  created() {
    //this.getSection()
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision', 
  'plans_Decision']),
  
   lesPlansParents(){
     return this.plans_Decision.filter(plan => plan.parent == null)
   },
     
        localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.plans_Decision.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }
  },
  methods: {


             genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.plans_Decision;
    doc.setFontSize(8)
    doc.text(75,10,"LISTES DES PLANS DECISIONNELS")
  doc.autoTable(this.getColumns(),data)
doc.save('plan_decisionnel.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "CODE", dataKey: "code"},
        {title: "LIBELLE", dataKey: "libelle"},
     
        
    ];
},

         ajouterProgrammeLocalEnfant () {
      // console.log(this.nouvelElementEnfant)
      this.ajouterPlanDecision(this.nouvelElementEnfant)

        this.nouvelElementEnfant = {
                code: "",
             libelle: "",
          structure_motif_decission_id:""
        }
    },

    supprimerPlanProgrammeLocal(item){
      this.supprimerPlanDecision(item.id)
    },
// afficher modal

 //afficher modal pour ajouter element enfant
	 ajouterElementEnfant(item) {
    this.parentDossier = this.plans_Decision.find(plan => plan.id == item.id)
    this.nouvelElementEnfant.code = this.parentDossier.code
     this.nouvelElementEnfant.parent = this.parentDossier.id

      this.$('#modalAjouterElementEnfant').modal({
              backdrop: 'static',
              keyboard: false
             });

    },

 // fin




    // methode pour notre action
    ...mapActions('parametreGenerauxFonctionnelle', ['getPlanDecision', 
    'ajouterPlanDecision','supprimerPlanDecision', 'modifierPlanDecision']),     
   
    afficherModalAjouterplanFonctionnel(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterPlanDecision(this.formData)

        this.formData = {
                code: "",
             libelle: "",
              structure_motif_decission_id:""
        }
    },
// afficher modal
afficherMoadlModifierLocalisation(item){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

       
this.editTitre = this.plans_Decision.find(plan => plan.id == item.id);

        
 },
modifierLocalisationLocal(){
  this.modifierPlanDecision(this.editTitre)
    this.$("#modifierModal").modal('hide');
  this.editTitre = {
                code: "",
             libelle: "",
             structure_motif_decission_id:""
  }
}

  }
};
</script>

