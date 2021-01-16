
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
                                              title="Liste service gestionnaire "
                                              name ="Liste service gestionnaire"
                                              worksheet = "service gestionnaire"
                                            :data="localisationsFiltre">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                  <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des services gestionnaires</h5>
             <!-- <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div> -->
             
          </div>
         
          <div class="widget-content"> 
            
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


 <div id="exampleModal" class="modal hide ">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter service gestionnaires</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                       <div class="control-group">
              <label class="control-label">structure administrative:</label>
              <div class="controls">
                <select  v-model="formData.structure_administrative_id" class="span5">
            <option v-for="administrative in structures_administratives" :key="administrative.id" 
            :value="administrative.id">{{administrative.libelle}}</option>
                </select>
              </div>
            </div>
                    </td>
                   
                  </tr>
                  <tr>
                     <td>
                      <div class="control-group">
              <label class="control-label">Code</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span5" placeholder="Saisir le code" />
              </div>
            </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="control-group">
              <label class="control-label">Libelle</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span5" placeholder="Saisir le libelle" />
              </div>
            </div>
                    </td>
                  </tr>
                </table>
                            
          </div>
           <div class="modal-footer"> 
             <button  v-show="formData.code.length && formData.libelle.length && 
            formData.structure_administrative_id" 
             @click.prevent="ajouetProgrammeLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->

<!----- ajouter modal ajouter element enfant   ---->


 <div id="modalAjouterElementEnfant" class="modal hide tailgrand">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter service gestionnaire</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                        <div class="control-group">
              <label class="control-label">Code parent</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.code" class="span5"  />
              </div>
            </div>
                    </td>
                    <td>
                       <div class="control-group">
              <label class="control-label">Libéllé parent</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.libelle" class="span5"  />
              </div>
            </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="control-group">
              <label class="control-label">structure administrative:</label>
              
              <div class="controls">
              <select v-model="nouvelElementEnfant.structure_administrative_id" class="span5">
                <option v-for="structure in structures_administratives " :key="structure.id" 
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
              <label class="control-label">Libelle</label>
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
                <h3>Modifier service gestionnaire</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                 <tr>
                   <td>
                      <div class="control-group">
              <label class="control-label">structure administrative:</label>
              <div class="controls">
                <select  v-model="editGestionnaire.structure_administrative_id">
            <option v-for="administrative in structures_administratives" :key="administrative.id" 
            :value="administrative.id">{{administrative.libelle}}</option>
                </select>
              </div>
            </div>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <div class="control-group">
              <label class="control-label">Code</label>
              <div class="controls">
                <input type="text" v-model="editGestionnaire.code" class="span5" placeholder="" />
              </div>
            </div>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <div class="control-group">
              <label class="control-label">Libelle</label>
              <div class="controls">
                <input type="text" v-model="editGestionnaire.libelle" class="span5" placeholder="" />
              </div>
            </div>
                   </td>
                 </tr>
                </table>
                             
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
     return this.services_gestionnaires.filter(plan => plan.parent == null);
   }

  },
  methods: {
    // methode pour notre action
    ...mapActions('parametreGenerauxAdministratif', ['getServiceGestionnaire', 'ajouterServiceGestionnaire', 
   'supprimerServiceGestionnaire', 'modifierServiceGestionnaire']),  
   

      genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.services_gestionnaires;
    doc.setFontSize(8)
    doc.text(75,10,"LISTE DES SERVICES GESTIONNAIRES")
  doc.autoTable(this.getColumns(),data)
doc.save('service_gestionnaire.pdf')
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


<style scoped>
.tailgrand{
  width: 60%;
  margin: 0 -30%;
  
}
</style>