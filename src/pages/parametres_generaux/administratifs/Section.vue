
<template>
  <div>
   
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter section</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                  
             <div class="control-group">
              <label class="control-label">Nature de section:</label>
              <div class="controls">
                <select  v-model="formData.naturesection_id">
            <option v-for="resultat in natures_sections" :key="resultat.id" 
            :value="resultat.id">{{resultat.code}}-{{resultat.libelle}}</option>
                </select>
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Numero d'ordre de section:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Code Section:</label>
              <div class="controls">
                <input type="text" 
                :value="codeAjoutSection"
                 class="span" placeholder="Saisir le code section" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Nom section:</label>
              <div class="controls">
                <input type="text" v-model="formData.nom_section" class="span" placeholder="Saisir le nom de section" />
              </div>
            </div>
            
               
          </form>              
          </div>
           <div class="modal-footer"> 
             <button  v-show="formData.code.length && formData.nom_section.length &&
              formData.naturesection_id" 
             @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>
            
<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier section</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

               <div class="control-group">
              <label class="control-label">Nature de section:</label>
              <div class="controls">
                <select  v-model="editSection.naturesection_id">
            <option v-for="resultat in  natures_sections" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Numero ordre</label>
              <div class="controls">
                <input type="text" v-model="editSection.code" class="span" placeholder="" />
              </div>
            </div>
             <div class="control-group">
              <label class="control-label">Code Section:</label>
              <div class="controls">
                <input type="text" 
                :value="codeModifierSection"
                 class="span" placeholder="Saisir le code section" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Nom section:</label>
              <div class="controls">
                <input type="text" v-model="editSection.nom_section" class="span" placeholder="" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editSection.code.length && editSection.nom_section.length &&
              editSection.naturesection_id" 
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

                                        <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="natures_sections">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des sections</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="natures_sections.length" >
              <sectionItemComponent v-for="equipement in natures_sections"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierSection" 
                @suppression="supprimerSect"
                >
              </sectionItemComponent>

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
import sectionItemComponent from './sectionItemComponent'
export default {
  name: 'Famille',
 components: {
      sectionItemComponent
  },
  data() {
    return {
      json_fields: {
            'NATURE_SECTION': 'groupe.libelle',
            'NUMERO_ORDRE_SECTION': 'article.code',
          'CODE_SECTION':'article.code_section',
        'LIBELLE_SECTION':'article.nom_section'
           
           
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
             nom_section: "",
              code_section:"",
             naturesection_id:""
        },

        editSection: {
            code: "",
             nom_section: "",
              code_section:"",
              naturesection_id:""
        },
       search:""
    };
  },

  computed: {
      ...mapGetters('parametreGenerauxAdministratif', ['natures_sections', 
  'sections']) ,

  codeAjoutSection(){
     const natureSection = this.natures_sections.find(sect => sect.id == this.formData.naturesection_id)
    const ordreSection = this.formData.code

     if(natureSection && ordreSection){
       return natureSection.code + ordreSection
     }

     return null
   },
  codeModifierSection(){
     const natureSection = this.natures_sections.find(sect => sect.id == this.editSection.naturesection_id)
    const ordreSection = this.editSection.code

     if(natureSection && ordreSection){
       return natureSection.code + ordreSection
     }

     return null
   },
  },
   


  
  methods: {
   ...mapActions('parametreGenerauxAdministratif', ['getSection', 
    'ajouterSection', 
   'supprimerSection', 'modifierSection']),  

    supprimerSect(id){
      this.supprimerSection(id)
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
      var nouvelObjet = {
        ...this.formData,
        code_section: this.codeAjoutSection,
        
      };
      this.ajouterSection(nouvelObjet)

        this.formData = {
                code: "",
             nom_section: "",
             code_section:"",
            naturesection_id:""
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
   var nouvelObjet = {
        ...this.editSection,
        code_section: this.codeModifierSection,
        
      };
  this.modifierSection(nouvelObjet);
  this.$("#modifierModal").modal('hide');
  this.editSection = {
                code: "",
             nom_section: "",
             naturesection_id:""
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

