
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter document procedure</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Libelle document</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle_doc"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
         
          <div class="control-group">
            <label class="control-label">Date debut</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_deb_proc"
                class="span"
                placeholder=""
              />
            </div>
          </div>

           <div class="control-group">
            <label class="control-label">Date fin </label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_fin_proc"
                class="span"
                placeholder=""
              />
            </div>
          </div>
          


       <div class="control-group">
              <label class="control-label">Commentaire:</label>
             <div class="controls">
              <textarea  v-model="formData.commentaires" class="textarea_editor span2.5"  placeholder="Saisir l'objet de mission ..."></textarea>
            </div>
             </div> 

         
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterModalDocumentprocedureLocal"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier document procedure</h3>
      </div>

      <div class="modal-body">
        <form class="form-horizontal">
            
               <div class="control-group">
            <label class="control-label">Libelle document</label>
            <div class="controls">
              <input
                type="text"
                v-model="editDocument.libelle_doc"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
         
          <div class="control-group">
            <label class="control-label">Date debut</label>
            <div class="controls">
              <input
                type="date"
                v-model="editDocument.date_deb_proc"
                class="span"
                placeholder=""
              />
            </div>
          </div>

           <div class="control-group">
            <label class="control-label">Date fin </label>
            <div class="controls">
              <input
                type="date"
                v-model="editDocument.date_fin_proc"
                class="span"
                placeholder=""
              />
            </div>
          </div>
          

         <div class="control-group">
            <label class="control-label">Commentaire </label>
            <div class="controls">
              <input
                type="text"
                v-model="editDocument.commentaires"
                class="span"
                placeholder=""
              />
            </div>
          </div>
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalDocumentProcedure(editDocument)"
          class="btn btn-primary"
          href="#"
        
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Types équipements"
            :data="filtre_equipement"
            name="Liste des types équipements"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box" >
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des documents de procedures</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Libellé document</th>
                    <th>Date début</th>
                    <th>Date fin</th>
                    <th>Commentaire</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(documentProcedure, index) in  documentProcedureFiltre"
                 :key="documentProcedure.id">
                 <td @dblclick="afficherModalModifierDocumentProcedure(index)">
                   {{documentProcedure.libelle_doc || 'Non renseigné'}}</td>
                 <td @dblclick="afficherModalModifierDocumentProcedure(index)">
                   {{formaterDate(documentProcedure.date_deb_proc	) || 'Non renseigné'}}</td>
                   
            <td @dblclick="afficherModalModifierDocumentProcedure(index)">
                   {{formaterDate(documentProcedure.date_fin_proc	) || 'Non renseigné'}}</td>

                    <td @dblclick="afficherModalModifierDocumentProcedure(index)">
                   {{documentProcedure.commentaires || 'Non renseigné'}}</td>
                  

<td>
    <div class="btn-group">
              <button @click.prevent="supprimerDocumentProcedure(documentProcedure.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i>Supprimer</span></button>
             
            </div>
</td>
                   

                       </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjoutDocumentProcedure" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjoutDocumentProcedure()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
 import moment from 'moment';
export default {
  name:'type facture',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }

        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
    //   json_fields: {
    //     CODE: "code",
    //     libelle: "libelle"
    //   },

      formData: {
            	libelle_doc:"",
            	date_deb_proc:"",
                date_fin_proc:"",
                	commentaires:""

        
      },
      editDocument: {
        		libelle_doc:"",
            	date_deb_proc:"",
                date_fin_proc:"",
                	commentaires:""
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['documentProcedures']),

    documentProcedureFiltre()  {
     
        const searchTerm = this.search.toLowerCase();

return this.documentProcedures.filter((item) => {
  
     return item.libelle_doc.toLowerCase().includes(searchTerm) 
    

  
  

   }
)
    }
  },
  methods: {
    ...mapActions("bienService", ['ajouterDocumentProcedure','modifierDocumentProcedure',
    'supprimerDocumentProcedure'
     
    ]),
    //afiicher modal ajouter
    afficherModalAjoutDocumentProcedure() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalDocumentprocedureLocal(){
this.ajouterDocumentProcedure(this.formData)
this.formData = {

		libelle_doc:"",
            	date_deb_proc:"",
                date_fin_proc:"",
                	commentaires:""
}

    },
    
    // afficher modal de modification
    afficherModalModifierDocumentProcedure(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editDocument = this.documentProcedures[index];
    },
    // fonction pour vider l'input modification
    modifierModalDocumentProcedure(){
      this.modifierDocumentProcedure(this.editDocument)
      this.$('#modificationModal').modal('hide');
    },

    // formatage date
formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    
    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

