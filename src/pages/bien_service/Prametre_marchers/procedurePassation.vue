
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter la procédure de passation</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
             <div class="control-group">
            <label class="control-label">Type de procédure</label>
            <div class="controls">
                <select v-model="formData.type_procedure_id" class="span">
               <option v-for="varText in typeTypeProcedures" :key="varText.id" 
               :value="varText.id">{{varText.libelle}}</option>
           </select>
            </div>     
          </div>
 <div class="control-group">
            <label class="control-label">Code</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.code"
                class="span"
                
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Libellé</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
         
         
      

         
         </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterModalTypeAnalyseLocal"
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
        <h3>Modifier Type procedure</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">

             <div class="control-group">
            <label class="control-label">Type de procédure</label>
            <div class="controls">
                <select v-model="editProcedure.type_procedure_id" class="span">
               <option v-for="varText in typeTypeProcedures" :key="varText.id" 
               :value="varText.id">{{varText.libelle}}</option>
           </select>
            </div>
          </div>
<div class="control-group">
            <label class="control-label">Code</label>
            <div class="controls">
              <input
                type="text"
                v-model="editProcedure.code"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
            <div class="control-group">
            <label class="control-label">Libellé</label>
            <div class="controls">
              <input
                type="text"
                v-model="editProcedure.libelle"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>

        

         
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalTypeAnalyseLocal(editProcedure)"
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
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste procédure de passation</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                    <th>Type de procedure</th>
                    <th>Code</th>
                    <th>libelle</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(typeProcedure, index) in 
                procedureFiltre"
                 :key="typeProcedure.id">
                 
                   <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{typeProcedure.type_procedure.libelle || 'Non renseigné'}}</td>
                  
                  <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{typeProcedure.code || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{typeProcedure.libelle || 'Non renseigné'}}</td>



                     <div class="btn-group">
              <button @click.prevent="supprimerProcedurePassation(typeProcedure.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"> Supprimer</i></span></button>
             
            </div>

                       </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalProcedurePassation" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalProcedurePassation()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
//  import moment from 'moment';
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
            libelle:"",
              type_procedure_id:"",
              code:""
            

        
      },
      editProcedure: {
             libelle:"",
               type_procedure_id:"",
               code:""
            
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['procedurePassations','typeTypeProcedures']),

    procedureFiltre()  {
     
        const searchTerm = this.search.toLowerCase();

return this.procedurePassations.filter((item) => {
  return (
          type.code.toLowerCase().includes(st) ||
          type.libelle.toLowerCase().includes(st)
        );
    

  
  

   }
)
    }
  },
  methods: {
    ...mapActions("bienService", ['ajouterProcedurePassation','modifierProcedurePassation',
    'supprimerProcedurePassation'
     
    ]),
    //afiicher modal ajouter
    afficherModalProcedurePassation() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalTypeAnalyseLocal(){
this.ajouterProcedurePassation(this.formData)
this.formData = {
    libelle:"",
    	type_procedure_id:""
}

    },
    
    // afficher modal de modification
    afficherModalModifiertextJuridique(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editProcedure = this.procedurePassations[index];
    },
    // fonction pour vider l'input modification
    modifierModalTypeAnalyseLocal(){
      this.modifierProcedurePassation(this.editProcedure)
      this.$('#modificationModal').modal('hide');
    },

    // formatage date
// formaterDate(date) {
//       return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
//     },
    
    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

