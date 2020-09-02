
<template>
  <div>
   
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter le Grade</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                  <div class="control-group">
              <label class="control-label">Catégorie Grade</label>
              <div class="controls">
                <select  v-model="formData.categoriegrade_id">
            <option v-for="resultat in categorieGrade" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
           

            <div class="control-group">
              <label class="control-label">Libellé</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libellé" />
              </div>
            </div>
            
           
            
               
          </form>              
          </div>
           <div class="modal-footer"> 
             <button   
             @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>
            
<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier Grade</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
    <div class="control-group">
              <label class="control-label">Catégorie de Grade</label>
              <div class="controls">
                <select  v-model="editSection.categoriegrade_id">
            <option v-for="resultat in categorieGrade" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
              
            <div class="control-group">
              <label class="control-label">Libelle</label>
              <div class="controls">
                <input type="text" v-model="editSection.libelle" class="span" placeholder="" />
              </div>
            </div>
            
            
            

          </form>              
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
                                            :data="categorieGrade">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Grades</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="categorieGrade.length" >
              <gradeItemComponent v-for="equipement in categorieGrade"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierSection" 
                @suppression="supprimerSect"
                >
              </gradeItemComponent>

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
import gradeItemComponent from './gradeItemComponent'
export default {
  name: 'gradePrincipal',
 components: {
      gradeItemComponent
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
                libelle:"",
                categoriegrade_id:""
        },

        editSection: {
             libelle:"",
             categoriegrade_id:""
        },
       search:""
    };
  },

  computed: {
     ...mapGetters('personnelUA', ['categorieGrade',"grades"]),

  },
  
   


  
  methods: {
    ...mapActions('personnelUA', ["ajouterGrades","supprimerGrades", "modifierGrade"]),  

    supprimerSect(id){
      this.supprimerGrades(id)
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
    
      this.ajouterGrades(this.formData)

        this.formData = {
                libelle:"",
                categoriegrade_id:""
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
   
  this.modifierGrade(this.editSection);
  this.$("#modifierModal").modal('hide');
  this.editSection = {
               libelle:"",
               categoriegrade_id:""
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

