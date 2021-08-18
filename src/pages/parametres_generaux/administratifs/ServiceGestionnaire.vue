
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
                                     </div> 
                                     <table>
                                       <tr>
                                         <h5 style="font-size:20px;text-transform: uppercase; text-align:center;text-decoration: underline;">Services gestionnaires</h5>
                                       </tr>
                                     </table>
                                                               <div align="right" style="cursor:pointer;">
           <button class="btn btn-success" @click.prevent="afficherModalAjouterPlanProgramme()">AJOUTER</button>
          </div>  
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Services gestionnaires</h5>
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
              <label class="control-label">structure administrative</label>
              <div class="controls">
               
                <input type="text" :value="AfficheNiveau1" class="span5" placeholder="Saisir le code" readonly />
              
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
                <span style="color: red" v-bind:class="verificationcodeEnfant == true ? afficheNotification() : ''"></span>
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
             <button  v-show="formData.code.length && formData.libelle.length"
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
              <label class="control-label">structure administrative</label>
              
              <div class="controls">
              <!-- <select v-model="nouvelElementEnfant.structure_administrative_id" class="span5">
                <option v-for="structure in structures_administratives " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select> -->
              <input type="text" :value="AfficheNiveau2" class="span5" placeholder="Saisir le code" readonly />
            </div>
            </div>
                    </td>
                    <td>
                      <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="nouvelElement.code" class="span1" placeholder="" />
                <input type="text" :value="codeplanActivite" class="span4" placeholder="" readonly/>
                 <span style="color: red" v-bind:class="verificationcodeEnfant2 == true ? afficheNotification2() : ''"></span>
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
             <button v-show="nouvelElement.code.length && nouvelElementEnfant.libelle.length"
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
      nouvelElement:{
        code:""
      },
      nouvelElementEnfant: {
       
             libelle: "",
         
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
           const qtereel = this.structures_administratives.find(qtreel => qtreel.niveau == id);

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
           const qtereel = this.structures_administratives.find(qtreel => qtreel.id == id);

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
           const qtereel = this.services_gestionnaires.find(qtreel => qtreel.code == id);

      if (qtereel) {
        return qtereel.structure_administrative_id;
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
afficheNotification2(){
  if(this.verificationcodeEnfant2 == true){
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
      if (this.formData.code == "") {
        return false;
      } else {
        let Objet = this.services_gestionnaires.filter(
          (element) => element.code == this.formData.code && element.structure_administrative_id == this.AfficheNiveauid
        );
        if (Objet.length != 0 && Objet != undefined) {
          return Objet.length;
        } else {
          return false;
        }
      }
    },



verificationcodeEnfant2() {
      if (this.nouvelElement.code == "") {
        return false;
      } else {
        let Objet = this.services_gestionnaires.filter(
          (element) => element.code == this.codeplanActivite);
        if (Objet.length != 0 && Objet != undefined) {
          return Objet.length;
        } else {
          return false;
        }
      }
    },


    AfficheNiveauid(){
     const codeprog = this.structures_administratives.find(sect => sect.niveau == 1)
   
     if(codeprog){
       return codeprog.id
     }

     return null
   },
AfficheNiveau1(){
     const codeprog = this.structures_administratives.find(sect => sect.niveau == 1)
   
     if(codeprog){
       return codeprog.libelle;
     }

     return null
   },
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
       var nouveauObjet = {
             ... this.formData,
structure_administrative_id:this.AfficheNiveauid,

           }
      this.ajouterServiceGestionnaire(nouveauObjet)

        this.formData = {
                code: "",
             libelle: "",
          structure_administrative_id:""
        }
    },

     ajouterProgrammeLocalEnfant () {
      // console.log(this.nouvelElementEnfant)
        var nouveauObjet = {
             ... this.nouvelElementEnfant,
structure_administrative_id:this.afficheLeIdStructure(this.parentDossier.code),
code:this.codeplanActivite,
	parent:this.parentDossier.id
           }
      this.ajouterServiceGestionnaire(nouveauObjet)
this.nouvelElement= {
  code: "",
}
        this.nouvelElementEnfant = {
                libelle: "",
           
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
  width: 59%;
  margin: 0 -25%;
  
}
</style>