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
                                              title="Liste localisation geographique "
                                              name ="Liste localistaion geographique"
                                              worksheet = "localisation geographique"
                                            :data="localisationsFiltre">
                               <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                             <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div> 
                                     <table>
                                       <tr>
                                         <h5 style="font-size:20px;text-transform: uppercase; text-align:center;text-decoration: underline;">plan géographiques</h5>
                                       </tr>
                                     </table>
                                                               <div align="right" style="cursor:pointer;">
           <button class="btn btn-success" @click.prevent="afficherModalAjouterLocalisationGeographie()">AJOUTER</button>
          </div>  
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <!-- <h5>localisations géographiques</h5> -->
             <!-- <div align="right">
        Recherche: <input type="text" v-model="search">

          </div> -->
             
          </div>
         
           <div class="widget-content">
      
                <ul id="demo">
            <TreeLocalisation class="item" v-for="plan in lesPlansParents"
            :key="plan.id" :item="plan"   
              @ajouterElementEnfant="ajouterElementEnfant" 
              @supprimer="supprimerPlanProgrammeLocal"
              @modifier="afficherMoadlModifierLocalisation"></TreeLocalisation>
          </ul>
            <div v-if="lesPlansParents.length">
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune localisation géographique enregistrée</h6>
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
                <h3>Ajouter la localisation géographique</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                       <div class="control-group">
              <label class="control-label">Structure géographique</label>
              <div class="controls">
                 <input type="text" :value="AfficheNiveau1" class="span5" placeholder="Saisir le code" readonly />
               
              </div>
            </div>
                    </td>
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
                    <td colspan="2">
 <div class="control-group">
              <label class="control-label">Libellé</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span10" placeholder="Saisir le libellé" />
              </div>
            </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
<div class="control-group">
              <label class="control-label">Longitude</label>
              <div class="controls">
                <input type="number" v-model="formData.longitude" class="span5" placeholder="Saisir la longitude" />
              </div>
            </div>
                    </td>
                    <td>
 <div class="control-group">
              <label class="control-label">Latitude</label>
              <div class="controls">
                <input type="number" v-model="formData.latitude" class="span5" placeholder="Saisir la Latitude" />
              </div>
            </div>
                    </td>
                  </tr>
                </table>
                           
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.code.length &&
             formData.libelle.length" 
             @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide ">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier la localisation géographique</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                          <div class="control-group">
              <label class="control-label">Structure géographique:</label>
              <div class="controls">
                <select  v-model="editTitre.structure_localisation_geographique_id">
            <option v-for="localisation in structures_geographiques" :key="localisation.id" 
            :value="localisation.id">{{localisation.libelle}}</option>
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
              <label class="control-label">Libellé:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
              </div>
            </div>
     
<div class="control-group">
              <label class="control-label">Longitude</label>
              <div class="controls">
                <input type="number" v-model="editTitre.longitude" class="span" placeholder="Saisir le longitude" />
              </div>
            </div>
              <div class="control-group">
              <label class="control-label">Latitude</label>
              <div class="controls">
                <input type="number" v-model="editTitre.latitude" class="span" placeholder="Saisir le Latitude" />
              </div>
            </div>
          </form>              
          </div>
           <div class="modal-footer"> 
             <button  v-show="editTitre.structure_localisation_geographique_id && editTitre.code.length &&
             editTitre.libelle.length" 
              @click.prevent="modifierLocalisationLocal(editTitre)" class="btn btn-primary"
              href="#">Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->

<!----- ajouter modal ajouter element enfant   ---->


 <div id="modalAjouterElementEnfant" class="modal hide tailgrand">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter localisation geographique</h3>
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
              <label class="control-label">Libellé parent</label>
              <div class="controls">
                <input type="text" readonly :value="parentDossier.libelle" class="span5"  />
              </div>
            </div>
                     </td>
                   </tr>
                   <tr>
                     <td>
                        <div class="control-group">
              <label class="control-label">Structure localisation géographique</label>
              
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
                  <span style="color: red" v-bind:class="verificationcodeEnfant2 == true ? afficheNotification2() : ''"></span>
              </div>
            </div>
                     </td>
                   </tr>
                   <tr>
                     <td colspan="2">
<div class="control-group">
              <label class="control-label">Libellé</label>
              <div class="controls">
                <input type="text" v-model="nouvelElementEnfant.libelle" class="span10" placeholder="Saisir le libelle" />
              </div>
            </div>
                     </td>
                   </tr>
                   <tr>
                     <td>
 <div class="control-group">
              <label class="control-label">Longitude</label>
              <div class="controls">
                <input type="number" v-model="nouvelElementEnfant.longitude" class="span5" placeholder="Saisir le longitude" />
              </div>
            </div>
                     </td>
                     <td>
<div class="control-group">
              <label class="control-label">Latitude</label>
              <div class="controls">
                <input type="number" v-model="nouvelElementEnfant.latitude" class="span5" placeholder="Saisir le Latitude" />
              </div>
            </div>
                     </td>
                   </tr>
                 </table>
                          
          </div>
           <div class="modal-footer"> 
             <button v-show=" nouvelElementEnfant.libelle.length"
              @click.prevent="ajouterProgrammeLocalEnfant()" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter element enfant ---->



<!-- <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterLocalisationGeographie()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterLocalisationGeographie"
        bg-color="green"

  ></fab> -->
<notifications/>


  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import TreeLocalisation from '../administratifs/TreeLocalisation'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  components: {
    TreeLocalisation
  },
  data() {
    return {
           parentDossier: {},
      nouvelElementEnfant: {
         code: "",
             libelle: "",
          structure_localisation_geographique_id:"",
          latitude:"",
          longitude:""
      },
      json_fields:{
               'Code':'code',
               'Libelle':'lielle',
               'structure localistion':'structure_localisation_geographique.libelle',
               'Longitude':'longitude',
               'Latitude':'latitude'
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
     nouvelElement : {
       code:""
     },
        formData : {
                code: "",
             libelle: "",
             structure_localisation_geographique_id:"",
              latitude:"",
          longitude:""
        },
        editTitre: {
            code: "",
             libelle: "",
   structure_localisation_geographique_id:"",
    latitude:"",
          longitude:""
        },
        search:""
 
    };
  },
 
  created() {
    //this.getSection()
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques', 
  'localisations_geographiques']),

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
           const qtereel = this.structures_geographiques.find(qtreel => qtreel.niveau == id);

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
           const qtereel = this.structures_geographiques.find(qtreel => qtreel.id == id);

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
           const qtereel = this.localisations_geographiques.find(qtreel => qtreel.code == id);

      if (qtereel) {
        return qtereel.structure_localisation_geographique_id;
      }
      return 0
        }
      };
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
      if (this.formData.code == "") {
        return false;
      } else {
        let Objet = this.localisations_geographiques.filter(
          (element) => element.code == this.formData.code && element.structure_localisation_geographique_id == this.AfficheNiveauid
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
        let Objet = this.localisations_geographiques.filter(
          (element) => element.code == this.codeplanActivite
        );
        if (Objet.length != 0 && Objet != undefined) {
          return Objet.length;
        } else {
          return false;
        }
      }
    },
AfficheNiveauid(){
     const codeprog = this.structures_geographiques.find(sect => sect.niveau == 1)
   
     if(codeprog){
       return codeprog.id
     }

     return null
   },
AfficheNiveau1(){
     const codeprog = this.structures_geographiques.find(sect => sect.niveau == 1)
   
     if(codeprog){
       return codeprog.libelle;
     }

     return null
   },



   localisationsFiltre(){
     const searchTerm = this.search.toLowerCase();
return this.localisations_geographiques.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
  
   }
)
   },
    lesPlansParents(){
     return this.localisations_geographiques.filter(plan => plan.parent == null)
   },
  },
  


  methods: {


      genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.localisations_geographiques;
   doc.setFontSize(8)
    doc.text(75,10,"LISTE DES LOCALISATIONS GEOGRAPHIQUES")
  doc.autoTable(this.getColumns(),data)
doc.save('localisation_geographique.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "CODE", dataKey: "code"},
        {title: "LIBELLE", dataKey: "libelle"},
     
        
    ];
},
        ajouterProgrammeLocalEnfant () {
      var nouveauObjet = {
             ... this.nouvelElementEnfant,
structure_localisation_geographique_id:this.afficheLeIdStructure(this.parentDossier.code),
code:this.codeplanActivite,
	parent:this.parentDossier.id
           }
      this.ajouterLocalisationGeographique(nouveauObjet)
      this.nouvelElement={
  code:""
}
        this.nouvelElementEnfant = {
                
             libelle: "",
latitude:"",
          longitude:""
        }
       
    },
    supprimerPlanProgrammeLocal(item){
      this.supprimerLocalisationGeographique(item.id)
    },
// afficher modal
 //afficher modal pour ajouter element enfant
	 ajouterElementEnfant(item) {
    this.parentDossier = this.localisations_geographiques.find(plan => plan.id == item.id)
    // this.nouvelElementEnfant = this.localisations_geographiques.find(plan => plan.id == item.id)
    
    this.nouvelElementEnfant.code = this.parentDossier.code
     this.nouvelElementEnfant.parent = this.parentDossier.id
      this.$('#modalAjouterElementEnfant').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
 // fin
    // methode pour notre action
    ...mapActions('parametreGenerauxAdministratif', ['getLocalisationGeographique', 
    'ajouterLocalisationGeographique', 
   'supprimerLocalisationGeographique', 'modifierLocalisationGeographique']),     
   
    afficherModalAjouterLocalisationGeographie(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
       var nouveauObjet = {
             ... this.formData,
structure_localisation_geographique_id:this.AfficheNiveauid,

           }
      this.ajouterLocalisationGeographique(nouveauObjet)
        this.formData = {
                code: "",
             libelle: "",
             
              latitude:"",
          longitude:""
        }
    },
// afficher modal
afficherMoadlModifierLocalisation(item){
 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });
       
this.editTitre = this.localisations_geographiques.find(plan => plan.id == item.id);
        
 },
modifierLocalisationLocal(){
  this.modifierLocalisationGeographique(this.editTitre)
  this.$("#modifierModal").modal('hide');
  this.editTitre = {
                code: "",
             libelle: "",
        structure_localisation_geographique_id:"",
        latitude:"",
          longitude:""
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