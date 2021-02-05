structures_activites
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
                                              title="Liste plan infrastructure "
                                              name ="Liste plan infrastructure"
                                              worksheet = "plan infrastructure"
                                            :data="localisationsFiltre">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 

                            <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Plan infrastructure</h5>
             <div align="right">
        Recherche: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content ">
            

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
                <h6 style="color:red;">Aucun plan infrastructure enregistré ! </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
            </div>

     
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide tailgrand">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan infrastructure</h3>
              </div>
              <div class="modal-body">
             <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                    <div class="control-group">
              <label class="control-label">Structure Infrastructure:</label> 
              <div class="controls">
                <select  v-model="formData.structure_infrastruture_id" class="span5">
            <option v-for="plan in structures_Infrastructures" :key="plan.id" 
            :value="plan.id">{{plan.libelle}}</option>
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
                <input type="text" :value="codeAction" class="span5" placeholder="Saisir le code" />
              </div>
            </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td colspan="2">
                      <div class="control-group">
              <label class="control-label">Libellé</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span5" placeholder="Saisir le libellé" />
              </div>
            </div>
                    </td>
                  </tr>
                </table>                 
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.structure_infrastruture_id && 
             
             formData.libelle.length"
              @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              >Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->

<!----- ajouter modal ajouter element enfant   ---->


 <div id="modalAjouterElementEnfant" class="modal hide tailgrand">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan programmatique</h3>
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
              <label class="control-label">Libellé parent:</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.libelle" class="span5"  />
              </div>
            </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="control-group">
              <label class="control-label">Structure Programmatique</label>
              
              <div class="controls">
              <select v-model="nouvelElementEnfant.structure_infrastruture_id" class="span5">
                <option v-for="structure in structures_activites " :key="structure.id" 
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
                <input type="text" v-model="nouvelElementEnfant.libelle" class="span10" placeholder="Saisir le libellé" />
              </div>
            </div>
                    </td>
                  </tr>
                </table>
                           
          </div>
           <div class="modal-footer"> 
             <button v-show="nouvelElementEnfant.code.length && nouvelElementEnfant.libelle.length && 
             nouvelElementEnfant.structure_infrastruture_id"
              @click.prevent="ajouterProgrammeLocalEnfant()" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter element enfant ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier Chaîne programmatique</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                    <tr>
                      <td>
                         <div class="control-group">
              <label class="control-label">Structure Activite</label>
              <div class="controls">
                <select  v-model="editTitre.structure_infrastruture_id" class="span5">
            <option v-for="plan in structures_Infrastructures" :key="plan.id" 
            :value="plan.id">{{plan.libelle}}</option>
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
                <input type="text" v-model="editTitre.code" class="span5" placeholder="" />
              </div>
            </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="control-group">
              <label class="control-label">Libelle</label>
              <div class="controls">
                <input type="text" v-model="editTitre.libelle" class="span5" placeholder="" />
              </div>
            </div>
                      </td>
                    </tr>
                </table>
                         
          </div>
           <div class="modal-footer"> 
             <button v-show="editTitre.structure_infrastruture_id && editTitre.code.length && 
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
       'structure fonctionnelle':'structure_fonctionnelle.libelle'

      },

         parentDossier: {},
      nouvelElementEnfant: {
         code: "",
             libelle: "",
          structure_infrastruture_id:""
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
             structure_infrastruture_id:""
        },

        editTitre: {
            code: "",
             libelle: "",
             structure_infrastruture_id:""
        },
           search:""
    };
  },
 
  created() {
    //this.getSection()
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxActivite', ['structures_Infrastructures', 
  'plans_Infrastructures']),
   ...mapGetters("parametreGenerauxAdministratif", [
      
     
      "plans_programmes",
     
      "grandes_natures",
      "afficheNiveauPlanProg",
     
    ]),
   lesPlansParents(){
     return this.plans_Infrastructures.filter(plan => plan.parent == null)
   },
     
        localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.plans_Infrastructures.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   },
   codeAction(){
     const codeprog = this.plans_programmes.find(sect => sect.id == this.formData.programme_id)
    const numeroordre = this.formData.numero_ordre

     if(codeprog && numeroordre){
       return codeprog.code + numeroordre
     }

     return null
   },
  },
  methods: {





        genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.plans_Infrastructures;
   doc.setFontSize(8)
    doc.text(75,10,"LISTE DES PLANS DES INFRASTRUCTURES ")
  doc.autoTable(this.getColumns(),data)
doc.save('plan_activité.pdf')
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
      this.ajouterPlanInfrastructure(this.nouvelElementEnfant)

        this.nouvelElementEnfant = {
                code: "",
             libelle: "",
          structure_infrastruture_id:""
        }
    },

    supprimerPlanProgrammeLocal(item){
      this.supprimerPlanInfrastructure(item.id)
    },
// afficher modal

 //afficher modal pour ajouter element enfant
	 ajouterElementEnfant(item) {
    this.parentDossier = this.plans_Infrastructures.find(plan => plan.id == item.id)
    this.nouvelElementEnfant.code = this.parentDossier.code
     this.nouvelElementEnfant.parent = this.parentDossier.id

      this.$('#modalAjouterElementEnfant').modal({
              backdrop: 'static',
              keyboard: false
             });

    },

 // fin




    // methode pour notre action
    ...mapActions('parametreGenerauxActivite', ['getPlanInfrastructure', 
    'ajouterPlanInfrastructure', 
   'supprimerPlanInfrastructure', 'modifierPlanInfrastructure']),     
   
    afficherModalAjouterplanFonctionnel(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
        var nouvelObjet = {
        ...this.formData,
        code: this.codeAction
        

      };
      this.ajouterPlanInfrastructure(nouvelObjet)

        this.formData = {
                code: "",
             libelle: "",
              structure_infrastruture_id:"",
               	programme_id:"",
                numero_ordre:""
        }
    },
// afficher modal
afficherMoadlModifierLocalisation(item){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

       
this.editTitre = this.plans_Infrastructures.find(plan => plan.id == item.id);

        
 },
modifierLocalisationLocal(){
  this.modifierPlanInfrastructure(this.editTitre)
    this.$("#modifierModal").modal('hide');
  this.editTitre = {
                code: "",
             libelle: "",
             structure_infrastruture_id:""
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