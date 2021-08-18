
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
                                              title="Liste plan activité "
                                              name ="Liste plan activité"
                                              worksheet = "plan activité"
                                            :data="localisationsFiltre">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 

                            <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div> 
                                      <table>
                                       <tr>
                                         <h5 style="font-size:20px;text-transform: uppercase; text-align:center;text-decoration: underline;">Plan programmatique</h5>
                                       </tr>
                                     </table>
                                                               <div align="right" style="cursor:pointer;">
           <button class="btn btn-success" @click.prevent="afficherModalAjouterplanFonctionnel()">AJOUTER</button>
          </div>  
        <div class="widget-box">
            
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
                <h6 style="color:red;">Aucun plan programmatique enregistré  </h6>
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
                <h3>Ajouter plan programmatique</h3>
              </div>
              <div class="modal-body">
             <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                    
             <div class="control-group">
              <label class="control-label">Structure Programmatique</label>
              <div class="controls">
                <input type="text" :value="AfficheNiveau1" class="span5" placeholder="Saisir le code" readonly />
              </div>
            </div>
            
                    </td>
                    <td>
                     <div class="control-group">
                  <label class="control-label">Programme</label>
                  <div class="controls">
                    <select v-model="formData.programme_id" class="span5">
                      <option
                        v-for="natsection in afficheNiveauPlanProg"
                        :key="natsection.id"
                        :value="natsection.id"
                      >{{natsection.code}}    {{natsection.libelle}}</option>
                    </select>
                  </div>
                </div>
                    </td>
                    
                  </tr>
                  
                  <tr>
                    <td>
                  <div class="control-group">
              <label class="control-label">Numéro d'ordre</label>
              <div class="controls">
                <input type="text" v-model="formData.numero_ordre" class="span5" placeholder="Saisir le numéro d'ordre" />
              </div>
            </div>
                    </td>
                    <td>
                  <div class="control-group">
              <label class="control-label">Code</label>
              <div class="controls">
                <input type="text" :value="codeplanfonctionnelle" class="span5" placeholder="Saisir le code" readonly/>
              <span style="color: red" v-bind:class="verificationcodeEnfant == true ? afficheNotification() : ''"></span>
              </div>
            </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td colspan="2">
                      <div class="control-group">
              <label class="control-label">Libellé</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span10" placeholder="Saisir le libellé" />
              </div>
            </div>
                    </td>
                  </tr>
                </table>                 
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.numero_ordre.length && 
             
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
             
              <input type="text" :value="AfficheNiveau2" class="span5" placeholder="Saisir le code" readonly />
            </div>
            </div>
                    </td>
                    <td>
                      <div class="control-group">
              <label class="control-label">Code</label>
              <div class="controls">
                <input type="text" v-model="nouvelElement.code" class="span1" placeholder="" />
                <input type="text" :value="codeplanActivite" class="span4" placeholder="" readonly/>
                <span style="color: red" v-bind:class="verificationcodeEnfant == true ? afficheNotification() : ''"></span>
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
             <button v-show="nouvelElement.code && nouvelElementEnfant.libelle.length"
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
              <label class="control-label">Structure de l'activité</label>
              <div class="controls">
                <select  v-model="editTitre.structure_activites_id" class="span5">
            <option v-for="plan in structures_activites" :key="plan.id" 
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
              <label class="control-label">Libellé</label>
              <div class="controls">
                <input type="text" v-model="editTitre.libelle" class="span5" placeholder="" />
              </div>
            </div>
                      </td>
                    </tr>
                </table>
                         
          </div>
           <div class="modal-footer"> 
             <button v-show="editTitre.structure_activites_id && editTitre.code.length && 
             editTitre.libelle.length"
             @click.prevent="modifierLocalisationLocal(editTitre)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn">Fermer</button> </div>
            </div>



<notifications  />


  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import Tree from '../administratifs/Tree'
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
   components: {
    Tree,
    //ModelListSelect,
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
          structure_activites_id:""
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
     nouvelElement: {
code:""
     },
        formData : {
                code: "",
             libelle: "",
             structure_activites_id:"",
             
             numero_ordre:""
        },

        editTitre: {
            code: "",
             libelle: "",
             structure_activites_id:""
        },
           search:""
    };
  },
 
  created() {
    //this.getSection()
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites']),
   ...mapGetters("parametreGenerauxAdministratif", [
      
     
      "plans_programmes",
     
      "grandes_natures",
      "afficheNiveauPlanProg",
     
    ]),
 codeplanActivite() {
    return  this.parentDossier.code + this.nouvelElement.code
    
    },
AfficheNiveau2(){

if (this.afficheLeNiveauStructure(this.afficheLeIdStructure(this.parentDossier.code)) == this.afficheLeNiveauStructure(this.afficheLeIdStructure(this.parentDossier.code))) {

  return this.afficheLeLibelleStructure(this.afficheLeNiveauStructure(this.afficheLeIdStructure(this.parentDossier.code)))

}else{
  return "pas de niveau"
}


   },
afficheLeLibelleStructure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_activites.find(qtreel => qtreel.niveau == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  afficheLeNiveauStructure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau + 1;
      }
      return 0
        }
      };
    },
    afficheLeIdStructure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.code == id);

      if (qtereel) {
        return qtereel.structure_activites_id;
      }
      return 0
        }
      };
    },
afficheNotification(){
  if(this.verificationcodeEnfant == true){
this.$notify({
                 title: 'ERROR',
                 text: "Ce code existe déjà!",
                 type:"error"
             })
  }else{
  return ""
  }
  return ""
},

verificationcodeEnfant() {
      if (this.nouvelElement.code == "") {
        return false;
      } else {
        let Objet = this.plans_activites.filter(
          (element) => element.code == this.codeplanActivite
        );
        if (Objet.length != 0 && Objet != undefined) {
          return Objet.length;
        } else {
          return false;
        }
      }
    },


affichecodePlanProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
codeplanfonctionnelle() {
    return  this.affichecodePlanProgramme(this.formData.programme_id) + this.formData.numero_ordre
    
    },

AfficheNiveauid(){
     const codeprog = this.structures_activites.find(sect => sect.niveau == 1)
   
     if(codeprog){
       return codeprog.id
     }

     return null
   },

    
    AfficheNiveau1(){
     const codeprog = this.structures_activites.find(sect => sect.niveau == 1)
   
     if(codeprog){
       return codeprog.libelle;
     }

     return null
   },
   lesPlansParents(){
     return this.plans_activites.filter(plan => plan.parent == null)
   },
     
        localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.plans_activites.filter((item) => {
  
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
   var data = this.plans_activites;
   doc.setFontSize(8)
    doc.text(75,10,"LISTE DES PLANS DES ACTIVITES ")
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
 var nouveauObjet = {
             ... this.nouvelElementEnfant,
structure_activites_id:this.afficheLeIdStructure(this.parentDossier.code),
code:this.codeplanActivite,
	parent:this.parentDossier.id
           }
      
      this.ajouterPlanActivite(nouveauObjet)
this.nouvelElement={
  code:""
}
        this.nouvelElementEnfant = {
                
             libelle: "",

        }
    },

    supprimerPlanProgrammeLocal(item){
      this.supprimerPlanActivite(item.id)
    },
// afficher modal

 //afficher modal pour ajouter element enfant
	 ajouterElementEnfant(item) {
    this.parentDossier = this.plans_activites.find(plan => plan.id == item.id)
    this.nouvelElementEnfant.code = this.parentDossier.code
     this.nouvelElementEnfant.parent = this.parentDossier.id

      this.$('#modalAjouterElementEnfant').modal({
              backdrop: 'static',
              keyboard: false
             });

    },

 // fin




    // methode pour notre action
    ...mapActions('parametreGenerauxActivite', ['getPlanActivite', 
    'ajouterPlanActivite', 
   'supprimerPlanActivite', 'modifierPlanActivite']),     
   
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
        code: this.codeplanfonctionnelle,
structure_activites_id:this.AfficheNiveauid
      };
      this.ajouterPlanActivite(nouvelObjet)

        this.formData = {
              
             libelle: "",
             
                numero_ordre:""
        }
    },
// afficher modal
afficherMoadlModifierLocalisation(item){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

       
this.editTitre = this.plans_activites.find(plan => plan.id == item.id);

        
 },
modifierLocalisationLocal(){
  this.modifierPlanActivite(this.editTitre)
    this.$("#modifierModal").modal('hide');
  this.editTitre = {
                code: "",
             libelle: "",
             structure_activites_id:""
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