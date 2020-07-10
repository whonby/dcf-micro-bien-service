
<template>
  <div>
   
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide taillemodal">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Grades et Emplois dans l'administration de l'ETAT</h3>
              </div>
              <div class="modal-body">
                 <table class="table table-bordered table-striped">
                   <tr>
                     <td>
                           <div class="control-group">
              <label class="control-label">Famille Emplois</label>
              <div class="controls">
                <select  v-model="formData.famille_fonction_id" class="span5">
            <option v-for="resultat in familleFonction" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
                     </td>
                     <td>
                            <div class="control-group">
              <label class="control-label">Emplois</label>
              <div class="controls">
                <select  v-model="formData.fonction_id" class="span5">
            <option v-for="resultat in fonctions" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
                     </td>
                     <td>
                       <div class="control-group">
              <label class="control-label">Grade</label>
              <div class="controls">
                <select  v-model="formData.grade_id" class="span5">
            <option v-for="resultat in grades" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
                     </td>
                   </tr>
                   <tr>
                     <td>
                        <div class="control-group">
              <label class="control-label">Recrutement</label>
              <div class="controls">
                <input type="text" v-model="formData.recrutement" class="span5"  />
              </div>
            </div>
                     </td>
                     <td>
 <div class="control-group">
              <label class="control-label">Promotion</label>
              <div class="controls">
                <input type="text" v-model="formData.promotion" class="span5"  />
              </div>
            </div>
                     </td>
                   </tr>
                   </table>
                          
          </div>
           <div class="modal-footer"> 
             <button   
             @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>
            
<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide taillemodal">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier  Grades et Emplois dans l'administration de l'ETAT</h3>
              </div>
              <div class="modal-body">
               
            

           <table class="table table-bordered table-striped">
                   <tr>
                     <td>
                           <div class="control-group">
              <label class="control-label">Famille Emplois</label>
              <div class="controls">
                <select  v-model="editSection.famille_fonction_id" class="span5">
            <option v-for="resultat in familleFonction" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
                     </td>
                     <td>
                            <div class="control-group">
              <label class="control-label">Emplois</label>
              <div class="controls">
                <select  v-model="editSection.fonction_id" class="span5">
            <option v-for="resultat in fonctions" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
                     </td>
                     <td>
                       <div class="control-group">
              <label class="control-label">Grade</label>
              <div class="controls">
                <select  v-model="editSection.grade_id" class="span5">
            <option v-for="resultat in grades" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
                     </td>
                   </tr>
                   <tr>
                     <td>
                        <div class="control-group">
              <label class="control-label">Recrutement</label>
              <div class="controls">
                <input type="text" v-model="editSection.recrutement" class="span5"  />
              </div>
            </div>
                     </td>
                     <td>
 <div class="control-group">
              <label class="control-label">Promotion</label>
              <div class="controls">
                <input type="text" v-model="editSection.promotion" class="span5"  />
              </div>
            </div>
                     </td>
                   </tr>
                   </table>              
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="modifierSectionLocal(editSection)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div>

                                        <!-- <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="familleFonction">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                                                                                <download-excel
                                   class="btn btn-success pull-right"
                                   style="cursor:pointer;"
                                     :fields = "json_fields"
                                     title="Liste des  Grades et Emplois dans l'administration de l'ETAT "
                                     name ="Liste des  Grades et Emplois dans l'administration de l'ETAT"
                                     worksheet = "entreprise non sanctionner"
                                   :data="familleFonction">
           <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>
                                        </download-excel> 
              <div  align="right" style="cursor:pointer;">
  <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
      </div> 
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des  Grades et Emplois dans l'administration de l'ETAT</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="familleFonction.length" >
              <ClassificationEmploisGradeItemComponent v-for="equipement in familleFonction"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierSection" 
                @suppression="supprimerSect"
                >
              </ClassificationEmploisGradeItemComponent>

              <!-- <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Article</p>
              </div> -->

            
              
            </div>
          </div>
        </div>
      </div>
    </div>

    
<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterSection()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterSection"
        bg-color="green"

  ></fab>
<notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import ClassificationEmploisGradeItemComponent from './ClassificationEmploisGradeItemComponent'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  name: 'gradePrincipal',
 components: {
      ClassificationEmploisGradeItemComponent
  },
  data() {
    return {
      // json_fields: {
      //       'NATURE_SECTION': 'groupe.libelle',
      //       'NUMERO_ORDRE_SECTION': 'article.code',
      //     'CODE_SECTION':'article.code_section',
      //   'LIBELLE_SECTION':'article.nom_section'
           
           
      //   },
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
               famille_fonction_id:"",
                fonction_id:"",
                  grade_id:"",
                  recrutement:"",
                  	promotion:""
        },

        editSection: {
                  famille_fonction_id:"",
                fonction_id:"",
                  grade_id:"",
                  recrutement:"",
                  	promotion:""

        },
       search:""
    };
  },

  computed: {
     ...mapGetters('personnelUA', ['familleFonction',"grades","fonctions"]),

  },
  
   


  
  methods: {
    ...mapActions('personnelUA', ["ajouterClassificationGradeFonction","supprimerClassificationGradeFonction", "modifierClassificationGradeFonction"]),
    
              // exportation en pdf
         genererEnPdf(){
  var doc = new jsPDF('landscape')
  // doc.autoTable({ html: this.natures_sections })
   var data = this.familleFonction;
    doc.setFontSize(8)
    doc.text(115,10,"LISTE DES GRADES ET EMPLOIS DANS L'ADMINISTRATION DE L'ETAT")
  doc.autoTable(this.getColumns(),data)
doc.save('liste des grades et emplois.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "LIBELLE", dataKey: "libelle"},




    ]
   
},




    supprimerSect(id){
      this.supprimerClassificationGradeFonction(id)
    },
    
    //afiicher modal ajouter
    afficherModalAjouterSection(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
     // fonction pour vider l'input
    ajouterTitreLocal () {
    
      this.ajouterClassificationGradeFonction(this.formData)

        this.formData = {
                	famille_fonction_id:"",
                fonction_id:"",
                  grade_id:"",
                  recrutement:"",
                  	promotion:""
        }
    },
    // afficher modal de modification
    afficherModalModifierSection(article) {
      this.$("#modifierModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editSection = article;
    },

modifierSectionLocal(){
   
  this.modifierClassificationGradeFonction(this.editSection);
  this.$("#modifierModal").modal('hide');
  this.editSection = {
              famille_fonction_id:"",
                fonction_id:"",
                  grade_id:"",
                  recrutement:"",
                  	promotion:""
  }
},
    alert() {
      console.log("ok");
    },
    
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};

</script>
<style scoped>
.taillemodal {
  width: 1500px;
  margin: 0 -780px;
}
</style>
