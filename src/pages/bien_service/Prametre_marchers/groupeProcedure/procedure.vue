
<template>
  <div>
   
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Procédure</h3>
              </div>
              <div class="modal-body">
                 <table class="table table-bordered table-striped">
                  
                <!-- <form class="form-horizontal"> -->
                  <tr>
                  <td>
             <div class="control-group">
           <label class="control-label">Type procédure</label>
              <div class="controls">
                <select  v-model="formData.type_procedure_id" class="span5">
            <option v-for="resultat in typeTypeProcedures" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
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
              <input
                type="text"
                v-model="formData.code"
                class="span5"
                
              />
            </div>
          </div>
          </td>
          </tr>

          <tr>
          <td>
           
            <div class="control-group">
             <label class="control-label">Procédure passation</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span5"  />
              </div>
            </div>
            </td>
            
               </tr>
                 </table>
          <!-- </form>               -->
          </div>
           <div class="modal-footer"> 
             <button  v-show="formData.type_procedure_id && formData.libelle.length"
             @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>
            
<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier Procédure</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
              <tr>
                <td>
               <div class="control-group">
              <label class="control-label">Type procédure</label>
              <div class="controls">
                <select  v-model="editprocedure.type_procedure_id" class="span5">
            <option v-for="resultat in  typeTypeProcedures" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
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
              <input
                type="text"
                v-model="editprocedure.code"
                class="span5"
                
              />
            </div>
          </div>
          </td>
          </tr>
          <tr>
            <td>
            
            <div class="control-group">
              <label class="control-label">Procedure passation</label>
              <div class="controls">
                <input type="text" v-model="editprocedure.libelle" class="span5"/>
              </div>
            </div>
            </td>
            </tr>
            

                </table>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editprocedure.type_procedure_id && editprocedure.libelle.length" 
              @click.prevent="modifierSectionLocal(editprocedure)" class="btn btn-primary"
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
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste procedure passation "
                                              name ="Liste procedure passation"
                                              worksheet = "procedure passation"
                                            :data="typeTypeProcedures">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                     </div>

                                     
       <br><br>
              <div align="right" style="cursor:pointer;">
           <button class="btn btn-success" @click.prevent="afficherModalAjouterSection()">AJOUTER PROCEDURE DE PASSATION</button>
          </div> 

         <h2 align="center">Liste des Procédures de passation </h2>                        
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
             
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="typeTypeProcedures.length" >
              <procedureComponent v-for="equipement in typeTypeProcedures"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierSection" 
                @suppression="supprimerSect"
                >
              </procedureComponent>

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

 <!-- <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterSection"
        bg-color="green"

  ></fab> -->
<notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import procedureComponent from './procedureComponent'
export default {
  name: 'procedure',
 components: {
      procedureComponent
  },
  data() {
    return {
      json_fields: {
            'TYPE_PROCEDURE': 'groupe.libelle',
            'CODE': 'article.code',
          'LIBELLE':'article.libelle',
         
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
              
              libelle:"",
             type_procedure_id:""
        },

        editprocedure: {
           
              libelle:"",
              type_procedure_id:""
        },
       search:""
    };
  },

  computed: {
      ...mapGetters("bienService", ['procedurePassations','typeTypeProcedures']),

  
  },
  
   


  
  methods: {
   ...mapActions("bienService", ['ajouterProcedurePassation','modifierProcedurePassation',
    'supprimerProcedurePassation']),  

    supprimerSect(id){
      this.supprimerProcedurePassation(id)
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
    
      this.ajouterProcedurePassation(this.formData)

        this.formData = {
              
             libelle:"",
            type_procedure_id:""
        }
    },
    // afficher modal de modification
    afficherModalModifierSection(article) {
      this.$("#modifierModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editprocedure = article;
    },

modifierSectionLocal(){
  this.modifierProcedurePassation(this.editprocedure);
  this.$("#modifierModal").modal('hide');

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

